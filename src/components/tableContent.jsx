import React from "react";
import { TableCell, TableRow } from ".//ui/table";

const tableContent = ({ key, name, type, status, wow, sno }) => {
  return (
    <>
      <TableRow>
        <TableCell key={key}>{sno}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{type}</TableCell>
        <TableCell>{status}</TableCell>
        <TableCell>{wow}</TableCell>
      </TableRow>
    </>
  );
};

export default tableContent;
