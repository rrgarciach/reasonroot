import { h, Component } from 'preact';

import Score from './score';

export default class App extends Component {

	upsertScore(score){
		alert("upsert");
	}

	render(props) {
	//debugger;
		return (
			<div class="app">
				<Score 
				score={props.dict[props.stmtId]}
				dict={props.dict}
				isMain={true}
				upsertScore={this.upsertScore}/>
			</div>
		);
	}
}
