import React, { Component } from 'react'

class ToggleText extends Component {
	constructor() {
		super()
		this.state = {
			isTextShown: true,
			hides: 0,
			shows: 0,
		}
	}

	toggleHandler() {
		this.setState(prev => {
			if (prev.isTextShown) {
				return { isTextShown: false, hides: prev.hides + 1 }
			} else return { isTextShown: true, shows: prev.shows + 1 }
		})
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (
			prevState.hides !== this.state.hides ||
			prevState.shows !== this.state.shows
		) {
			console.log(
				`Hide amount: ${this.state.hides}, show amount: ${this.state.shows}`
			)
		}
	}

	render() {
		return (
			<>
				{this.state.isTextShown && (
					<p>
						А я сейчас вам покажу, откуда на Беларусь готовилось нападение. И
						если бы за шесть часов до операции не был нанесен превентивный удар
						по позициям… Четыре позиции, я сейчас покажу карту, я принёс. Они бы
						атаковали наши войска Беларуси и России, которые были на учении.
						Поэтому не мы развязали эту войну, у нас совесть чиста
					</p>
				)}
				<button onClick={this.toggleHandler.bind(this)}>
					{this.state.isTextShown ? 'HIDE' : 'SHOW'}
				</button>
			</>
		)
	}
}

export default ToggleText
