import { Component } from "react";
import PropTypes from 'prop-types';

class Mouse extends Component {
  state = {
    x: 0,
    y: 0
  }

  render() { 
    return this.props.render(this.state)
  }
  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }
}

Mouse.propTypes = {
  render: PropTypes.func.isRequired
}

export default Mouse