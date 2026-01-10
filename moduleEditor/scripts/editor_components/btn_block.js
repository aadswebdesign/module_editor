//moduleEditor/editor_components/btn_block.js
class BtnBlock extends HTMLElement{
	constructor() {
		super();
	}
}

export function btnBlockDefine(){
	customElements.define("btn-block", BtnBlock);
}