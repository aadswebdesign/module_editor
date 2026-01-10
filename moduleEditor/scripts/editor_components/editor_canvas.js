//moduleEditor/editor_components/editor_canvas.js
import * as MFT from './../factory/module_functions.js'
class EditorCanvas extends HTMLElement{
	constructor() {
		super();
		//todo
		//if(this.parentElement !== null && this.parentElement.tagName !== 'EDITOR-CTN'){
			//this.remove();
		//}
	}
	connectedCallback() {
		(async ()=>{
		})();
	}
}

export function editorCanvasDefine(){
	customElements.define("editor-canvas", EditorCanvas);
}