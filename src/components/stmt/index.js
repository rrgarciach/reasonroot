import { h, Component } from 'preact';

export default class Stmt extends Component {
	state = {
		isOpen: false
	};

	toggleOpen = () => {
		this.setState({ "isOpen": !this.state.isOpen })
	};

	render({ stmt, stmts, main }) {
		//debugger;
		return (
			<li class={this.state.isOpen ? "open" : "closed"}>
				<div class="statementPad notSelected">
					<div className={"statement " + (stmt.statement.isProMain ? 'pro' : 'con')}>
						<span class="score">50%</span>
						{main}:{stmt.id}:{stmt.statement.content}
					</div>
					{stmt.statement.childIds.length > 0 &&
						<div class="opener" onclick={this.toggleOpen}>▽</div>
					}
				</div>
				<ul>
					{stmt.statement.childIds &&
						stmt.statement.childIds.map(function (childId, i) {
							return <Stmt stmt={stmts[childId]} stmts={stmts} />
						})
					}
				</ul>
			</li>
		);
	}
}
