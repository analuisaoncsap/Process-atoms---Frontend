import React from "react";

interface ListGroupProps {
  processes: ProcessData[];
}

const ListGroup: React.FC<ListGroupProps> = ({ processes }) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr style={{ borderBottom: "1px solid #ddd" }}>
          <th style={tableHeaderStyle}>Process</th>
          <th style={tableHeaderStyle}>Atoms</th>
          <th style={tableHeaderStyle}>Violations</th>
          <th style={tableHeaderStyle}>Impact</th>
          <th style={tableHeaderStyle}>Label</th>
          <th style={tableHeaderStyle}>Created By</th>
          <th style={tableHeaderStyle}>Created On</th>
          <th style={tableHeaderStyle}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {processes.map((process) => (
          <tr key={process.Process} style={{ borderBottom: "1px solid #ddd" }}>
            <td style={tableCellStyle}>{process.Process}</td>
            <td style={tableCellStyle}>{process.Atoms}</td>
            <td style={tableCellStyle}>{process.Violations}</td>
            <td style={tableCellStyle}>{process.Impact}</td>
            <td style={tableCellStyle}>{process.Label}</td>
            <td style={tableCellStyle}>{process.CreatedBy}</td>
            <td style={tableCellStyle}>{process.CreatedOn}</td>
            <td style={tableCellStyle}>{process.Actions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const tableHeaderStyle: React.CSSProperties = {
  padding: "12px",
  textAlign: "left",
  backgroundColor: "#f2f2f2",
};

const tableCellStyle: React.CSSProperties = {
  padding: "12px",
  textAlign: "left",
};

export default ListGroup;
