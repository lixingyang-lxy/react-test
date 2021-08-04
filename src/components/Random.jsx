// import { Component } from "react";
import { PureComponent } from "react";
import MathNumber from './MathNumber'

class Random extends PureComponent {
  // state={
  //   number: 0
  // }
  state = {
    obj: {
      number: 0
    }
  }
  handleclick = () => {
    console.log(this.state.obj)
    const newObj = { ...this.state.obj, number: Math.floor(Math.random()*3)}
    console.log('newObj: ' + newObj)
    this.setState(() => {
      return {
        number: newObj
      }
    })
  }
  // shouldComponentUpdate should not be used when extending React.PureComponent
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log('nextState.number: ' + nextState.number, 'this.state.number: ' + this.state.number)
  //   return nextState.number !== this.state.number ? true : false
  // }
  render() {
    console.log('render')
    return (
      <div>
        <MathNumber {...this.state.obj} />
        <button onClick={this.handleclick}>重新生成</button>
      </div>
    )
  }
}

export default Random