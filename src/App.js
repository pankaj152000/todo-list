import React from "react";
import "./App.css";
import ShowData from "./component/show/showdata";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: " ",
      des: " ",
      date: " ",
      Data: [],
      visible: false,
      updateState:false,
      updateIndex:-1
    };
    this.deletefunc = this.deletefunc.bind(this);
    // this.update = this.update.bind(this);
    this.updateHandle =this.updateHandle.bind(this);
  }
  addHandlEvent = (e) => {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      des: this.state.des,
      date: this.state.date,
    };
    this.setState((prevState) => ({
      name:"",des:"",date:"",
      Data: [...prevState.Data, obj],visible:false
    }));
    // this.setState((prevState)=>({...prevState,visible:false}))
    
  };
  
  
  deletefunc(props) {
    const a = this.state.Data.filter((element, index) => props !== index);
    this.setState((prevState) => ({ ...prevState, Data: [...a] }));
  }

 
  update=(value,index) =>{
    
    this.setState((prevState) => ({ ...prevState,name:value.name,des:value.des,date:value.date ,visible: true,updateState:true,updateIndex:index}));
    
  }
  updateHandle(e){
    e.preventDefault();
    let array=this.state.Data;
    array[this.state.updateIndex]={name:this.state.name,des:this.state.des,date:this.state.date}
    this.setState((prevstate)=>({ name:"",des:"",date:"",Data:[...array],visible:false,updateState:false,updateIndex:-1}))
  }

 
  
  namein = (props) => {
    this.setState((prevState) => ({
      ...prevState,
      name: props.target.value,
    }));
  };

  desin = (props) => {
    this.setState((prevState) => ({
      ...prevState,
      des: props.target.value,
    }));
  };

  datein = (props) => {
    this.setState((prevState) => ({
      ...prevState,
      date: props.target.value,
    }));
  };

  render() {
    return (
      <div className="total">
        <h1 align="center">TODO</h1>
        <input
          type="button"
          id="input"
          defaultValue="ADD"
          onClick={() =>
            this.setState((prevState) => ({ ...prevState, visible: true }))
          }
        ></input>

        {this.state.visible ? (
          <div>
            <form onSubmit={this.state.updateState ? this.updateHandle:this.addHandlEvent}>
              <label id="in">NAME </label>
              <input 
              type="text" 
              id="in" 
              value={this.state.name}
              onChange={(e) => this.namein(e)}></input>
              <label id="ta">description</label>
              <textarea
                id="ta"
                rows="2"
                cols="10"
                className="ta"
                value={this.state.des}
                onChange={(e) => this.desin(e)}
              ></textarea>
              <br />
              <label id="da">DATE</label>
              <input
                type="date"
                id="da"
                value={this.state.date}
                onChange={(e) => this.datein(e)}
              ></input>

              <input type="Submit" id="bu" defaultValue={this.state.updateState ? "UPDATE" : "ADD"}></input>
            </form>
          </div>
        ) : (
          <div></div>
        )}

        <div>
          {this.state.Data.map((value, index) => (
            <ShowData
              key={index}
              pankaj={value}
              del={this.deletefunc}
              update={this.update}
              index={index}
            ></ShowData>
          ))}
        </div>
      </div>
    );
  }
}


export default App;
// value={this.state.name}
// value={this.state.des}
// value={this.state.date}