// /managers/webComponents/components/content-footer.js
class ContentFooter extends HTMLElement{
	constructor() {
		super();
	}
}
export function contentFooterDefine(){
	customElements.define("content-footer", ContentFooter);
}