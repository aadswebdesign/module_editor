// /managers/webComponents/components/content_header.js
class ContentHeader extends HTMLElement{
	constructor() {
		super();
	}
}
export function contentHeaderDefine(){
	customElements.define("content-header", ContentHeader);
}