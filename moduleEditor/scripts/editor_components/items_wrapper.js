//moduleEditor/editor_components/items_wrapper.js
class ItemsWrapper extends HTMLElement{
	constructor() {
		super();
	}
}
export function itemsWrapperDefine(){
	customElements.define("items-wrapper", ItemsWrapper);
}