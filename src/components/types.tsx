type ProcessData = {
    Process: string;
    Atoms: number;
    Violations: number;
    Impact: string;
    Label: string;
    CreatedBy: string;
    CreatedOn: string;
    Actions: string;
  };
  
  const processes: ProcessData[] = [
    {
      Process: 'Open ticket must not occur after Closed while blocked',
      Atoms: 6024,
      Violations: 6024,
      Impact: 'High',
      Label: 'Compliance',
      CreatedBy: 'SAP Best Practices',
      CreatedOn: '02.08.23',
      Actions: 'yes',
    },
    {
      Process: 'Closed while blocked must occur',
      Atoms: 3842,
      Violations: 3842,
      Impact: 'Medium',
      Label: 'Performance',
      CreatedBy: 'BPMN model',
      CreatedOn: '19.12.23',
      Actions: 'no',
    },
    {
      Process: 'Request escalation is not followed by a corresponding',
      Atoms: 906,
      Violations: 906,
      Impact: 'Low',
      Label: 'Data quality',
      CreatedBy: 'Manual atom',
      CreatedOn: '01.11.23',
      Actions: 'yes',
    },
  ];
  
  // Example: Accessing data
  console.log(processes[0].Process); // Output: Open ticket must not occur after Closed while blocked
  console.log(processes[1].Impact); // Output: Medium
  