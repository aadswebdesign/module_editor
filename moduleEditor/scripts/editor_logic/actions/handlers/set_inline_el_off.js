//scripts/editor_logic/actions/handlers/insert_inline_el_off.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class SetInlineElOff{
	#empty_node;
	#parent_el;
	#tag_name;
	#tags;
	#zero_node;
	#zero_with_no_space_node;
	constructor(...args){
		const [parent_el,tag_name,pre_elems,log = null] = args;
		const [pre_elem,pre_output,pre_outer] = pre_elems;
		this.#empty_node = MDFT.emptyNode.cloneNode(true);
		this.#parent_el = parent_el;
		this.#tag_name = tag_name;
		this.#zero_node = MDFT.zeroNode.cloneNode(true);
		this.#zero_with_no_space_node = MDFT.zeroWithSpaceNode.cloneNode(true);		
		(async()=> {
			this.#tags = await MFT.getTagNames(this.#tag_name,this.#parent_el);
			if(this.#tags !== null){
				for(const tag of MFT.uniqueArray(this.#tags)){
					if(tag.hasAttribute('data-inline_active')){
						tag.removeAttribute('data-inline_active');
					}
					if(tag.classList.contains('parent')){
						tag.after(this.#zero_with_no_space_node);
					}
					if(tag.classList.contains('sub')){
						tag.after(this.#empty_node);
					}		
				}
			}
			MFT.writeSourceCode(pre_elem,this.#parent_el,pre_output,pre_outer);
		})();
		//console.table({'SetInlineElOff': args});
	}
}
export const setInlineElOff = async (...args)=>{
	return new SetInlineElOff(...args);
}