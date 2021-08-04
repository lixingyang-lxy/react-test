import { Component } from "react";
import MathNumber from './MathNumber'

class Random extends Component {
  state={
    number: 0
  }
  handleclick = () => {
    this.setState(() => {
      return {
        number: Math.floor(Math.random()*3)
      }
    })
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('nextState.number: ' + nextState.number, 'this.state.number: ' + this.state.number)
    return nextState.number !== this.state.number ? true : false
  }
  render() {
    console.log('render')
    return (
      <div>
        <MathNumber {...this.state} />
        <button onClick={this.handleclick}>重新生成</button>
      </div>
    )
  }
}

export default Random