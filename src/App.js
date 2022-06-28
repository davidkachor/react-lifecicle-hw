import { Component } from 'react'
import RobotText from './components/RobotText'
import FetchingData from "./components/FetchingData";
import ToggleText from "./components/ToggleText";

class App extends Component {
	render() {
		return (
			<>
				<RobotText />
				<FetchingData/>
				<ToggleText/>
			</>
		)
	}
}

export default App
