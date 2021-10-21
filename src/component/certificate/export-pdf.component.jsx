import React from 'react';
import ReactToPrint from 'react-to-print';
import CertificateComponent from './certificate.component';
// import TableComponent from './table.component';
 
class ExportPdfComponent extends React.Component {
     
    render() {
      return (
        <div className="pt-40">
          <CertificateComponent ref={(response) => (this.componentRef = response)} />
          
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button style={{backgroundColor:"blue"}} className="bg-blue-500 text-white p-2">Print to PDF!</button>}
          />
        </div>
      );
    }
}
 
export default ExportPdfComponent;