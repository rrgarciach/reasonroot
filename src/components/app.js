import { h, Component } from 'preact';

import Stmt from './stmt';

export default class App extends Component {
	render(props) {
		return (
			<div class="app">
				<Stmt user={props.user.id} />
			</div>
		);
	}
}
