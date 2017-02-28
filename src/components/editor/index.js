import { h, Component } from 'preact';

export default class Editor extends Component {
	state = {

	};

	render({ score, dict, upsertScore },{text="test"}) {
		//debugger;
		return (
			<div class="editor">
				<label>Content
						<input value={score.statement.content} onInput={this.linkState('score.statement.content')} />
				</label>
				<button onClick={upsertScore}>test</button>
				<input value={text} onInput={this.linkState('text')} />{text}:
			</div>
		);
	}
}
