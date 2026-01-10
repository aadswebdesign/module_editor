// /managers/webComponents/components/emoji_holder.js
class EmojiHolder extends HTMLElement{
	constructor() {
		super();
	}
}
export function emojiHolderDefine(){
	customElements.define("emoji-holder", EmojiHolder);
}