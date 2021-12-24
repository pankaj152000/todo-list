import React from "react";
// import "./showdata.css";
import DeleteIcon from '@mui/icons-material/Delete';
// import UpdateIcon from '@mui/icons-material/Update';

const ShowData=(props) => {
  
  const { name, des, date } = props.pankaj;
    return (
    <div className="show">
      <h3>{name} </h3> <DeleteIcon size="small" onClick={()=>props.del(props.index)}></DeleteIcon> 
      <h5>{date} </h5> <button  onClick={()=>props.update(props.pankaj,props.index,)}>UP</button> 
      <p>{des}</p>
    </div>
  );
};


export default ShowData;
