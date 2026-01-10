// managers/webComponents/components/block_item.js
class BlockItem extends HTMLElement{
	constructor() {
		super();
	}
}
export function blockItemDefine(){
	customElements.define("block-item", BlockItem);
} 