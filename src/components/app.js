import { h, Component } from 'preact';

import Stmt from './stmt';

export default class App extends Component {
	render(props) {
	debugger;
		return (
			<div class="app">
				<Stmt 
				stmt={props.dict[props.stmtId]}
				dict={props.dict}
				isMain={true}/>
			</div>
		);
	}
}
