//moduleEditor/editor_components/editor_block.js
class EditorBlock extends HTMLElement{
	constructor() {
		super();
	}
}

export function editorBlockDefine(){
	customElements.define("editor-block", EditorBlock);
}