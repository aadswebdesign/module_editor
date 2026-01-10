//moduleEditor/editor_components/hidden_ctn.js
class HiddenCtn extends HTMLElement{
	constructor() {
		super();
	}
}
export function hiddenCtnDefine(){
	customElements.define("hidden-ctn", HiddenCtn);
}