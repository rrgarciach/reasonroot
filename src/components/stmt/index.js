import { h, Component } from 'preact';
import style from './style';

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
			<div class={style.stmt}>
				<h1>{stmt.id}</h1>
				<ul>
					{stmt.childIds &&
						stmt.childIds.map(function (childId, i) {
							return <li>{stmts[childId].id}</li>
						})
					}
				</ul>
			</div>
		);
	}
}
