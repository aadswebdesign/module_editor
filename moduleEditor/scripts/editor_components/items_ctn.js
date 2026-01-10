//moduleEditor/editor_components/items_ctn.js
class ItemsCtn extends HTMLElement{
	constructor() {
		super();
		
	}
}

export function itemsCtnDefine(){
	customElements.define("items-ctn", ItemsCtn);
}