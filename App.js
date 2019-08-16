import React from 'react';
import Infos from './input';
import Button from './button';
import './App.css';


class App extends React.Component {
state={
  todo:[] ,
val:"",

}

  render(){
 return (
    <div className="App">
      <Infos value={this.state.val} onChange={(event)=>{this.setState({val: event.target.value })
    console.log(this.state.val)}} />
      <Button onClick={()=>{
        const newlist=[this.state.val];
       this.setState({todo: this.state.todo.concat(newlist)})

      }}
         children="add" />
         


        

    <ul>
    
    {this.state.todo.map((e,i)=><div>    
    
    <li>{e}</li><Button onClick={()=>{
     var a=this.state.todo
     a.splice(i,1);
      this.setState({todo:a})}} 
    children="delete"/></div>
    )} 
    
    </ul>
</div>
  );

  }
 
}

export default App;
