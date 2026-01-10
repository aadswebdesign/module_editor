//moduleEditor/editor_components/items_ctn.js
class ItemsRuler extends HTMLElement{
	constructor() {
		super();
		
	}
}

export function itemsRulerDefine(){
	customElements.define("items-ruler", ItemsRuler);
}