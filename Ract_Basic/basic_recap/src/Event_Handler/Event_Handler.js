import React, { Component } from 'react';

class Event_Handler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changedValue : ''
      }
    }

    handleChange=(e)=>{
        this.setState({
            changedValue:e.target.value
        },()=>{
            console.log(this.state.changedValue)
        })
    } 
    
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} name="" id="" />
                <p>{this.state.changedValue}</p>
            </div>
        );
    }
}

export default Event_Handler;