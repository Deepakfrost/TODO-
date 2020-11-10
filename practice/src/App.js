import React, { Component } from 'react'
import Propspassing from './components/Propspassing'
import Display from './components/Display'

export class App extends Component {
 
  
    state = { msges:[
                          {msg:"Welcome to React",id:1},
                          {msg:" How are you",id:2}]
    }
    
  change=(para)=>{
    para.id=Math.random();
    let newmsges=[...this.state.msges,para]
    this.setState({
      msges:newmsges
    })
  }
  deleteitem=(id)=>{
    const msges=this.state.msges.filter(
      (msg)=>{ return msg.id!==id})
    this.setState({
      msges:msges
    })
  }
  
  
  render() {
    return (
      <div className='App-header' key='id' >

      <div className='container left'>
      <img src='/images/wallpaper.jpg' alt='...'></img>
      </div>

      <div class='container right '>
      <h2 class="green-text text-dark-4">TODO APP</h2>
      </div>
      <Display msges={this.state.msges} deleteitem={this.deleteitem}/>
      <Propspassing fun={this.change} />
      {/* <Propspassing /> // fun={this.change} */}
        
      </div>
    )
  }
}

export default App
