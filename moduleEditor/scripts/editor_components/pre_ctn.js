//moduleEditor/editor_components/pre_ctn.js
class PreCtn extends HTMLElement{
	constructor() {
		super();
	}
}

export function preCtnDefine(){
	customElements.define("pre-ctn", PreCtn);
}