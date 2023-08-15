import React from "react";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from ".//ui/table";
import TableContent from "./tableContent";

const table = () => {
  const [dataDon, setDataDon] = useState([]);
  useEffect(() => {
    fetch(`${window.location.href}/api/`)
      .then((a) => {
        return a.json();
      })
      .then((shantnu) => {
        setDataDon(shantnu);
      });
  }, []);
  return (
    <>
      <div className="container">
        <Table>
          <TableCaption>List of movies that I have saw soo far</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Sno</TableHead>
              <TableHead>Name of Movie/Series</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>WOW Meter(Out of 10)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataDon.map((data, index) => (
              <TableContent
                key={data.sno}
                sno={data.sno}
                name={data.name}
                type={data.type}
                status={data.status}
                wow={data.wow}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default table;
