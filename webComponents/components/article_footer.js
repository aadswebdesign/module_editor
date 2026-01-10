// managers/webComponents/components/article_footer.js
class ArticleFooter extends HTMLElement{
	constructor() {
		super();
		if(this.parentElement !== null && this.parentElement.tagName !== 'ARTICLE'){
			this.remove();
		}
	}
}
export function articleFooterDefine(){
	customElements.define("article-footer", ArticleFooter);
}