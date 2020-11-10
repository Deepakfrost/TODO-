import React, { Component } from 'react'

export class Propspassing extends Component {
   state = {
             msg :null,
              id:null
        }
    
    handlechange=(e)=>{
        this.setState({
           msg:e.target.value
        })
    }
    handleclick=(e)=>{
        e.preventDefault();
       this.props.fun(this.state);
        //console.log(this.state)
        this.setState({msg:""})

    }
    render() {
        return (
            <div class="container">
            <form onSubmit={this.handleclick}>
                 <label htmlFor="msg" class="flow-text light-green-text text-dark-3">Enter Text here:</label>
                 <input type="text" onChange={this.handlechange} id='msg' value={this.state.msg}></input>
                <div class="container left">
                 <button class="bts-floating light-green pulse"><i class="material-icons">add</i></button>
                 </div>
            </form>
           
                {/* <button onClick={()=>this.props.fun(this.state)}>Click me </button> */}
            </div>
        )
    }
}

export default Propspassing

