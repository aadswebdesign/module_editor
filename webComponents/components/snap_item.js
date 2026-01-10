// managers/webComponents/components/snap_item.js
class SnapItem extends HTMLElement{
	constructor() {
		super();
	}
}
export function snapItemDefine(){
	customElements.define("snap-item", SnapItem);
} 