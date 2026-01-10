//moduleEditor/editor_components/toolbars_ctn.js
class ToolbarsCtn extends HTMLElement{
	constructor() {
		super();
		if(this.parentElement !== null && this.parentElement.tagName !== 'EDITOR-CTN'){
			this.remove();
		}
	}
}

export function toolbarsCtnDefine(){
	customElements.define("toolbars-ctn", ToolbarsCtn);
}