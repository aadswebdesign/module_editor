// /managers/webComponents/components/content_main.js
class ContentMain extends HTMLElement{
	constructor() {
		super();
	}
}
export function contentMainDefine(){
	customElements.define("content-main", ContentMain);
}