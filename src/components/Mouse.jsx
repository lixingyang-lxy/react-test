import { Component } from "react";
// import PropTypes from 'prop-types';

// 测试高阶组件
const Position = props => {
  return <p>
    鼠标当前位置是： (x: {props.x}, y: {props.y})
  </p>
}

const MousePosition = withMouse(Position)

function withMouse(WrapedComponent) {
  class Mouse extends Component {
    state = {
      x: 0,
      y: 0
    }
    handleMouseMove = e => {
      this.setState(() => ({
        x: e.clientX,
        y: e.clientY
      }))
    }
    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove)
    }
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove)
    }
    render() {
      return <WrapedComponent {...this.state}/>
    }
  }
  return Mouse
}


export default MousePosition