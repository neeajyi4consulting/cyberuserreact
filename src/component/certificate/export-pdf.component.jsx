import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ReactToPrint from "react-to-print";
import { getUserDetails } from "../../api";
import CertificateComponent from "./certificate.component";
import TableComponent from "./table.component";

// class ExportPdfComponent extends React.Component {

function ExportPdfComponent() {
  const { id } = useParams();

  let componentRef;
  const courseName = "Andriod Studio";

  return (
    <div className="pt-40">
      <TableComponent
        courseId={id}
        courseName={courseName}
        ref={(response) => (componentRef = response)}
      />
      {/* <CertificateComponent currentUser = {currentUser} courseName = {courseName} ref={(response) => (componentRef = response)} /> */}

      <ReactToPrint
        content={() => componentRef}
        trigger={() => (
          <button
            style={{ backgroundColor: "blue" }}
            className="bg-blue-500 text-white p-2"
          >
            Print to PDF!
          </button>
        )}
      />
    </div>
  );
}

export default ExportPdfComponent;
