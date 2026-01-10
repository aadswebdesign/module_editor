// /managers/webComponents/components/details_content.js
class DetailsContent extends HTMLElement{
	constructor() {
		super();
		const parent_elem = this.parentElement;
		if(parent_elem.tagName !== 'DETAILS'){
			this.remove();
		}
	}
}
export function detailsContentDefine(){
	customElements.define("details-content", DetailsContent);
}