// BpmnComponent.tsx

import React, { useRef, useEffect } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";

interface BpmnComponentProps {
  xml: string | null; // Accept null for the initial state
}

const BpmnComponent: React.FC<BpmnComponentProps> = ({ xml }) => {
  const bpmnModelerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bpmnModeler = new BpmnModeler({
      container: bpmnModelerRef.current!,
      keyboard: {
        bindTo: window,
      },
    });

    if (xml) {
      bpmnModeler.importXML(xml).catch((error) => {
        console.error("[BpmnComponent] Failed to import XML:", error);
      });
    }

    return () => {
      bpmnModeler.destroy();
    };
  }, [xml]);

  return (
    <div ref={bpmnModelerRef} style={{ width: "100%", height: "600px" }} />
  );
};

export default BpmnComponent;
