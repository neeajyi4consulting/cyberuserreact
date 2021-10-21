import React from "react";
import certificateImg from '../../assets/img/Certificate-01.png'


class CertificateComponent extends React.Component {
  render() {
    return (
      <div>
           <div className="relative">
            <img src={certificateImg} alt="...." className=" z-0"  style={{width:"1500px", height:"790px"}}/>
            <p className="" style={{position:"absolute", top:"30px", left:"150px", fontSize:"23px", fontWeight:"bold"}}>16/07/2022</p>
            <p className="" style={{position:"absolute", top:"350px", left:"80px", fontSize:"25px", fontWeight:"bold"}}>Mahesh Kumar</p>
            <p className="" style={{position:"absolute", top:"415px", left:"80px", fontSize:"25px",}}>For successfully completing <span className="font-bold"> 8</span> hours of training on</p>
            <p className="" style={{position:"absolute", top:"460px", left:"80px", fontSize:"25px",}}> <span className="font-bold">CyberFrat</span> </p>
            <p className="" style={{position:"absolute", top:"505px", left:"80px", fontSize:"25px",}}> conducted online during the month of <span className="font-bold">October 2021</span></p>
            </div>
        </div>
    );
  }
}

export default CertificateComponent;