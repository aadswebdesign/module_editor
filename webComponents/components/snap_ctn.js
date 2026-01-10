// managers/webComponents/components/snap_ctn.js
class SnapCtn extends HTMLElement{
	constructor() {
		super();
	}
}
export function snapCtnDefine(){
	customElements.define("snap-ctn", SnapCtn);
} 