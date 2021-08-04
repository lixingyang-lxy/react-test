import { Component } from "react";

// const MathNumber = (props) => {
  
//   return <h1>随机数： {props.number}</h1>
// }

// export default MathNumber

class MathNumber extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number !== this.props.number ? true : false
  }
  render() {
    console.log('render')
    return <h1>随机数： {this.props.number}</h1>
  }
}

export default MathNumber