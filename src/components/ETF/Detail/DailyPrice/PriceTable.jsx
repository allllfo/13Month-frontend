import React from "react";
import moment from "moment";

export default function PriceTable(props) {
  const priceData = props.priceData;

  const keys = Object.keys(priceData[0]);

  return (
    <div>
      <table className="table-auto text-center">
        <thead className="h-12">
          <tr>
            {keys.map((ele, idx) => (
              <th className="w-20">{ele}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {priceData.map((obj, idx) => (
            <tr className="h-10">
              {Object.values(obj).map((ele, idx) => {
                let style;

                if (idx == 0) {
                  return (
                    <td className="font-xm">
                      {moment(ele, "YYYYMMDD").format("YY.MM.DD")}
                    </td>
                  );
                }

                if (idx == 4) {
                  if (ele[0] === "-") {
                    return <td className="text-blue-500">{ele}</td>;
                  }
                  return <td className="text-red-500">{ele}</td>;
                }

                return <td>{ele}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
