// localhost /managers/webComponents/components/article_header.js
class ArticleHeader extends HTMLElement{
	constructor() {
		super();
		if(this.parentElement !== null && this.parentElement.tagName !== 'ARTICLE'){
			this.remove();
		}
	}
}

export function articleHeaderDefine(){
	customElements.define("article-header", ArticleHeader);
}