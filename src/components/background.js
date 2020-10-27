import React, { Component } from "react"
import classnames from 'classnames'

class Background extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        const bgClass = classnames(
            'bodyBg',
            this.props.bgClass
        )
        return (<div className={bgClass}></div>)
    }

}

export default Background
