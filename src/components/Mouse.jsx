import { Component } from "react";
// import PropTypes from 'prop-types';
import img from '../img/cat.png';

// 测试高阶组件
const Position = props => {
  return <p>
    鼠标当前位置是： (x: {props.x}, y: {props.y})
  </p>
}

const Cat = props => {
  return <img alt='花猫' src={img} style={{
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: props.y,
    left: props.x
  }}></img>
}



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
      return <WrapedComponent {...this.state} {...this.props}/>
    }
  }
  Mouse.displayName = `WithMouse${getDisplayName(WrapedComponent)}`
  return Mouse
}

const MousePosition = withMouse(Position)
const CatPosition = withMouse(Cat)

function getDisplayName(WrapedComponent) {
  return WrapedComponent.displayName || WrapedComponent.name || 'Component'
}

export {
  MousePosition,
  CatPosition
} 