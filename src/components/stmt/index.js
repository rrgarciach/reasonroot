import { h, Component } from 'preact';

export default class Stmt extends Component {
	state = {
		count: 0
	};

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render({ stmt, stmts, main }) {
		return (
			<li class="closed-not-yet-remove">

				<div class="statementPad notSelected">
					<div class="statement pro">
						<span class="score">50%</span>{main}:{stmt.id}:{stmt.content}
					</div>
					<div class="opener">▽</div>
				</div>
				<ul>
					{stmt.childIds &&
						stmt.childIds.map(function (childId, i) {
							return <Stmt stmt={stmts[childId]} stmts={stmts} />
						})
					}
				</ul>
			</li>
		);
	}
}
