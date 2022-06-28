import React, { Component } from 'react'
import axios from 'axios'

class FetchingData extends Component {
	constructor() {
		super()
		this.state = {
			data: [],
		}
	}

	componentDidMount() {
		this.controler = new AbortController()
		axios
			.get('https://api.jikan.moe/v4/users')
			.then(res => this.setState({ data: res.data.data }))
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return this.state.data !== nextState.data
	}

	componentWillUnmount() {
		// console.log('cancelled')
		this.controler.abort()
	}

	render() {
		return (
			<>
				<h3>Here is list of users</h3>
				<ul>
					{this.state.data.length > 0 &&
						this.state.data.map(e => <li key={e.username}>{e.username}</li>)}
				</ul>
			</>
		)
	}
}

export default FetchingData
