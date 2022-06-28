import React, { Component } from 'react'

class RobotText extends Component {
	constructor() {
		super()
		this.state = {
			text: 'Hi, I am robot!',
			time: 5,
		}
	}

	componentDidMount() {
		this.interval = setInterval(
			() => this.setState(prev => ({ time: prev.time - 1 })),
			1000
		)
		this.timeout = setTimeout(() => {
			this.setState({ text: 'Well, actually nope..' })
            clearInterval(this.interval)
		}, 5000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
		clearTimeout(this.timeout)
	}

	render() {
		return <div>
			<h1>{this.state.text}</h1>
			<h2>You will know the truth after {this.state.time} s</h2>
		</div>
	}
}

export default RobotText
