import { h, Component } from 'preact';

export default class Stmt extends Component {
	state = {
		count: 0
	};

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render({ stmt, stmts }) {
		return (
			<li class="stmt">
				{stmt.id}:{stmt.content}
				<ul>
					{stmt.childIds &&
						stmt.childIds.map(function (childId, i) {
							return <Stmt stmt={stmts[childId]} stmts={stmts}/>
						})
					}
				</ul>
			</li>
		);
	}
}
