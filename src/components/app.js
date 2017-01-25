import { h, Component } from 'preact';

import Stmt from './stmt';

export default class App extends Component {
	render() {
		return (
			<div class="app">
				<Stmt user="test" />
			</div>
		);
	}
}
