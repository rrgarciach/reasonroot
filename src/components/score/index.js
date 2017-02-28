import { h, Component } from 'preact';
import Editor from '../editor';

export default class Score extends Component {
	state = {
		isOpen: false
	};

	toggleOpen = () => {
		this.setState({ "isOpen": !this.state.isOpen })
	};

	toggleSelected = () => {
		this.setState({ "isSelected": !this.state.isSelected })
	};

	render({ score, dict, isMain, upsertScore }) {
		//debugger;
		return (
			<li class={this.state.isOpen ? "open" : "closed"}>
				<div onclick={this.toggleSelected} class={"statementPad " + (this.state.isSelected ? 'selected' : 'notSelected')}>
					<div className={"statement " + (score.statement.isProMain ? 'pro' : 'con')}>

						<span class="score">
							{isMain ?
								Math.round(score.weightedPercentage * 100) + '%' :
								Math.floor(Math.abs(score.weightDif))
							}
						</span>

						{score.statement.content}&nbsp;

						{(score.statement.citation.trim().length > 0 &&
							score.statement.citationUrl.trim().length > 0) &&
							<a target="_blank" href={score.statement.citationUrl}>
								<span class="citation">{score.statement.citation}</span>
							</a>
						}
						{(score.statement.citation.trim().length == 0 &&
							score.statement.citationUrl.trim().length > 0) &&
							<a target="_blank" href={score.statement.citationUrl}>
								<span class="citation">{score.statement.citationUrl}</span>
							</a>
						}
						{(score.statement.citation.trim().length > 0 &&
							score.statement.citationUrl.trim().length == 0) &&
							<span class="citation">{score.statement.citation}</span>
						}

					</div>
					{score.statement.childIds.length > 0 &&
						<div class="opener" onclick={this.toggleOpen}>▽</div>
					}
				</div>
				<Editor score={score} dict={dict} text={"text"} upsertScore={upsertScore}/>
				<ul>
					{score.statement.childIds &&
						score.statement.childIds.map(function (childId, i) {
							return <Score score={dict[childId]} dict={dict} upsertScore={upsertScore} />
						})
					}
				</ul>
			</li>
		);
	}
}
