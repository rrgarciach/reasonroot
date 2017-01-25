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
				{stmt.id}:{stmt.content}
				<ul>
					{stmt.childIds &&
						stmt.childIds.map(function (childId, i) {
							return <li><Stmt stmt={stmts[childId]} stmts={stmts}/></li>
						})
					}
				</ul>
			</div>
		);
	}
}
