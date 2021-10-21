import React from "react";
import certificateImg from '../../assets/img/Certificate-01.png'

class TableComponent extends React.Component {
  constructor(props){  
    super(props);  
    this.state = {  
         current:""  ,
         date:"",
      }   
  }  
  
  render() {
    this.state.current = new Date();
    this.state.date = `${this.state.current.getDate()}/${this.state.current.getMonth()+1}/${this.state.current.getFullYear()}`;
    return (
      <div>
            <div className="my-5 z-0 " style={{position:"relative"}}>
            <img src={certificateImg} alt="...." className=" z-0"  style={{width:"1500px", height:"850px"}}/>
            <p className="" style={{position:"absolute", top:"30px", left:"200px", fontSize:"23px", fontWeight:"bold"}}>{this.state.date}</p>
            <p className="" style={{position:"absolute", top:"380px", left:"120px", fontSize:"30px", fontWeight:"bold"}}>Mahesh Kumar</p>
            <p className="" style={{position:"absolute", top:"445px", left:"120px", fontSize:"30px",}}>For successfully completing 8 hours of training on</p>
            <p className="" style={{position:"absolute", top:"490px", left:"120px", fontSize:"30px",}}> Cyberfrat </p>
            <p className="" style={{position:"absolute", top:"535px", left:"120px", fontSize:"30px",}}> conductedonline during the month of october 2021</p>
            
            </div>
        </div>
    );
  }
}

export default TableComponent;