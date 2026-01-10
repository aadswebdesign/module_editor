// localhost /managers/webComponents/components/article_main.js
class ArticleMain extends HTMLElement{
	constructor() {
		super();
		if(this.parentElement !== null && this.parentElement.tagName !== 'ARTICLE'){
			this.remove();
		}
	}
}
export function articleMainDefine(){
	customElements.define("article-main", ArticleMain);
}