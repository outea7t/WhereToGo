import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { Children, Component } from "react";
import { useState, useRef, useEffect } from "react";

class FadeInSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
    this.sectionRef = React.createRef()
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.setState({isVisible: true})
          this.observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (this.sectionRef.current) {
      this.observer.observe(this.sectionRef.current)
    }
  }

  componentWillUnmount() {
    if (this.sectionRef.current) {
      this.observer.unobserve(this.sectionRef.current)
    }
  }

  render() {
    const { isVisible } = this.state
    const { children, delay = '0s' } = this.props

    const styles = {
      transitionDelay: delay,
    }

    return (
      <div 
        ref={this.sectionRef} // привязываем ссылку к DOM-элементу
        className={`fade-in-section ${isVisible ? 'visible' : ''}`}
        style={isVisible ? styles : {}}
      >
        {children}        
      </div>
    )
  }
}

export default FadeInSection