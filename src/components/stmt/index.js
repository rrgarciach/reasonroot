import { h, Component } from 'preact';

export default class Stmt extends Component {
	state = {
		isOpen: false
	};

toggleOpen = () => {
		//this.props.onDestroy(this.props.todo);
		this.setState({ "isOpen": !this.state.isOpen })
	};


	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render({ stmt, stmts, main }) {
		return (
			<li class={this.state.isOpen ? "open" : "closed"}>

				<div class="statementPad notSelected">
					<div class="statement pro">
						<span class="score">50%</span>{this.state.isOpen}:{main}:{stmt.id}:{stmt.content}
					</div>
					<div class="opener" onclick={this.toggleOpen}>▽</div>
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
