// managers/webComponents/components/aside_block.js
class AsideBlock extends HTMLElement{
	constructor() {
		super();
		if(this.parentElement.tagName !== 'ASIDE'){
			this.remove();
			
		}
	}
}
export function asideBlockDefine(){
	customElements.define("aside-block", AsideBlock);
} 