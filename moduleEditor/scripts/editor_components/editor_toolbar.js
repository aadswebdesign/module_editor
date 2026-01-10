//moduleEditor/editor_components/editor_toolbar.js
class EditorToolbar extends HTMLElement{
	constructor() {
		super();
		if(this.parentElement !== null && this.parentElement.tagName !== 'TOOLBARS-CTN'){
			this.remove();
		}
	}
}

export function editorToolbarDefine(){
	customElements.define("editor-toolbar", EditorToolbar);
}