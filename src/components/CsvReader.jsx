import { useState } from "react";
import Papa from "papaparse";
import { useEffect } from "react";

const CsvReader = (file) => {
  const [results, setResults] = useState();
  useEffect(() => {
    const response = fetch(file?.file)
      .then((response) => response.text())
      .then((v) =>
        Papa.parse(v, {
          delimiter: " ",
        })
      )
      .catch((err) => console.log(err));

    response.then((v) => setResults(v.data));
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {results &&
              results[0].map((row, index) => {
                row = row.split(",");
                return (
                  <th key={index}>
                    {row.map((item, i) => {
                      return (
                        <span className="p-10 justify-center" key={i}>
                          {item}
                        </span>
                      );
                    })}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {results &&
            
            results.slice(1,results.length).map((rows, i) => {
              return (
                <tr key={i}>
                  {rows.map((row, index) => {
                    row = row.split(",");
                    return (
                      <td key={index}>
                        {row.map((item, i) => {
                          return (
                            <span className="p-10 justify-center" key={i}>
                              {item}
                            </span>
                          );
                        })}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CsvReader;
