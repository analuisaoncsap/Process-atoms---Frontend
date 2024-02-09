import React, { useEffect, useState } from "react";

interface CSVTableProps {
  csvFilePath: string;
}

const CSVTable: React.FC<CSVTableProps> = ({ csvFilePath }) => {
  const [data, setData] = useState<string[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(csvFilePath);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch CSV: ${response.status} ${response.statusText}`
          );
        }

        const text = await response.text();
        const parsedData = parseCSV(text);
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching CSV:", error);
      }
    };

    fetchData();
  }, [csvFilePath]);

  const parseCSV = (csvText: string): string[][] => {
    const lines = csvText.split("\n");
    const parsedData: string[][] = lines.map((line) => {
      const regex = /"([^"]+)"/g;
      const matches = line.match(regex);

      const replacedLine = matches
        ? matches.reduce(
            (acc, match) => line.replace(match, `%%${acc.length}%%`),
            line
          )
        : line;

      const fields = replacedLine.split(";");
      return fields.map((field) =>
        /%\d+%/g.test(field) ? field.replace(/%%(\d+)%%/g, '"$1"') : field
      );
    });
    return parsedData;
  };

  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        border: "1px solid black",
      }}
    >
      <thead>
        {data.length > 0 && (
          <tr>
            {data[0].map((header, index) => (
              <th
                key={index}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                {header}
              </th>
            ))}
          </tr>
        )}
      </thead>
      <tbody>
        {data.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CSVTable;
