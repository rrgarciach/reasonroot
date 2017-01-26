import { h, Component } from 'preact';

export default class Stmt extends Component {
	state = {
		isOpen: false
	};

	toggleOpen = () => {
		this.setState({ "isOpen": !this.state.isOpen })
	};

	render({ stmt, stmts, main }) {
		return (
			<li class={this.state.isOpen ? "open" : "closed"}>
				<div class="statementPad notSelected">
					<div className={"statement " + (stmt.isProMain ? 'pro' : 'con')}>
						<span class="score">50%</span>
						{main}:{stmt.id}:{stmt.content}
					</div>
					{stmt.childIds &&
						<div class="opener" onclick={this.toggleOpen}>▽</div>
					}
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
