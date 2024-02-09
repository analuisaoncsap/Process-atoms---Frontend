import React, { useEffect, useRef } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";
import "/node_modules/bpmn-js/dist/assets/diagram-js.css";
import "/node_modules/bpmn-js/dist/assets/bpmn-font/css/bpmn.css";

const Modeler: React.FC<{ bpmnXML: string | null }> = ({ bpmnXML }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const modelerRef = useRef<BpmnModeler | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      console.error("Container element not found.");
      return;
    }

    if (!modelerRef.current) {
      modelerRef.current = new BpmnModeler({ container: containerRef.current });
    }

    const initializeModeler = async () => {
      if (!modelerRef.current || !bpmnXML) {
        console.error("Modeler or BPMN XML is not available.");
        return;
      }

      try {
        await modelerRef.current.importXML(bpmnXML);
        console.log("BPMN diagram imported successfully!");
      } catch (err) {
        console.error("Error importing BPMN XML:", err);
      }
    };

    initializeModeler();

    return () => {
      // Clean up resources if needed
    };
  }, [bpmnXML]);

  return <div ref={containerRef} style={{ height: "100vh" }}></div>;
};

export default Modeler;
