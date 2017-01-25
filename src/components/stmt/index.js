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

	render({ user }, { time, count }) {
		return (
			<div class={style.stmt}>
				<h1>{ user }</h1>
			</div>
		);
	}
}
