import { h, Component } from 'preact';

export default class Stmt extends Component {
	state = {
		isOpen: false
	};

	toggleOpen = () => {
		this.setState({ "isOpen": !this.state.isOpen })
	};

	toggleSelected = () => {
		this.setState({ "isSelected": !this.state.isSelected })
	};

	render({ stmt, stmts, main }) {
		//debugger;
		return (
			<li class={this.state.isOpen ? "open" : "closed"}>
				<div onclick={this.toggleSelected} class={"statementPad " + (this.state.isSelected ? 'selected' : 'notSelected')}>
					<div className={"statement " + (stmt.statement.isProMain ? 'pro' : 'con')}>

						<span class="score">
							{main ?
								Math.round(stmt.weightedPercentage * 100) + '%' :
								Math.floor(Math.abs(stmt.weightDif))
							}
						</span>

						{stmt.statement.content}&nbsp;

						{(stmt.statement.citation.trim().length > 0 &&
							stmt.statement.citationUrl.trim().length > 0) &&
							<a target="_blank" href={stmt.statement.citationUrl}>
								<span class="citation">{stmt.statement.citation}</span>
							</a>
						}
						{(stmt.statement.citation.trim().length == 0 &&
							stmt.statement.citationUrl.trim().length > 0) &&
							<a target="_blank" href={stmt.statement.citationUrl}>
								<span class="citation">{stmt.statement.citationUrl}</span>
							</a>
						}
						{(stmt.statement.citation.trim().length > 0 &&
							stmt.statement.citationUrl.trim().length == 0) &&
							<span class="citation">{stmt.statement.citation}</span>
						}

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
