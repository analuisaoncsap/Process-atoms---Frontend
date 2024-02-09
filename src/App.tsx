import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./../src/components/Navbar";
import Sidebar from "./../src/components/Sidebar";
import ListGroup from "./../src/components/ListGroup";
import BpmnComponent from "./components/BpmnComponent";

const App: React.FC = () => {
  // Default BPMN XML string
  const defaultBpmnXml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
<bpmn:process id="Process_1" isExecutable="true">
<bpmn:startEvent id="StartEvent_1"/>
<bpmn:endEvent id="EndEvent_1" />
</bpmn:process>
<bpmndi:BPMNDiagram id="BPMNDiagram_1">
<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
<bpmndi:BPMNShape id="DI_StartEvent_1" bpmnElement="StartEvent_1">
<dc:Bounds x="412" y="240" width="36" height="36"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="DI_EndEvent_1" bpmnElement="EndEvent_1">
<dc:Bounds x="662" y="240" width="36" height="36"/>
</bpmndi:BPMNShape>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</bpmn:definitions>`;

  // Initialize bpmnXML state with the default BPMN XML
  const [bpmnXML, setBpmnXML] = useState<string>(defaultBpmnXml);

  // Processes data...
  const processes: ProcessData[] = [
    // Your processes data
  ];

  return (
    <Router>
      <Sidebar />
      <Navbar />
      <div className="container mt-4">
        <BpmnComponent xml={bpmnXML} />
        <ListGroup processes={processes} />
      </div>
    </Router>
  );
};

export default App;
