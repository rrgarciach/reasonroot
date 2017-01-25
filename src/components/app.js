import { h, Component } from 'preact';

import Stmt from './stmt';

export default class App extends Component {
	render(props) {
		return (
			<div class="app">
				<Stmt stmt={props.stmt} stmts={props.stmts}/>
			</div>
		);
	}
}
