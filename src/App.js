import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super();
    this.state={
      date:new Date()
    }
  }
  componentDidMount(){
    this.timerID = setInterval(()=>{

      this.tick();

    },1000)
  }
  
  componentWillUnmount(){
    clearInterval(this.timerID);

  }

  tick(){
    this.setState({
      date:new Date()
    })
  }

  render() {
    return (
      <div>
        <div>
                <h1>Hello {this.props.name}.</h1>
                <p>The time is {this.state.date.toLocaleTimeString()}.</p>
            </div>
      </div>
    )
  }
}
export default App
