import { h, Component } from 'preact';

import Profile from './profile';

export default class App extends Component {
	render() {
		return (
			<div class="app">
				<Profile user="me" />
			</div>
		);
	}
}
