//moduleEditor/editor_components/items_button.js
class ItemsButton extends HTMLElement{
	constructor() {
		super();
	}
}

export function itemsButtonDefine(){
	customElements.define("items-button", ItemsButton);
}