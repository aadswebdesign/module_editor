//scripts/editor_logic/actions/handlers/insert_inline_el_to_parent.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InsertInlineElToParent{
	#created_el;
	#empty_node;
	#parent_el;
	#parent_tags;
	#tag_name;
	#zero_node;
	#zero_with_no_space_node;
	first_child;
	last_child;
	tag_parent;
	constructor(...args){
		const [parent_el,create_el,el_class,parent_tags,tag_name, data_atts,pre_elems, log = false] = args;
		const [pre_elem,pre_output,pre_outer] = pre_elems;
		this.#created_el = MDFT.createEditorElemNA(create_el,el_class, data_atts);
		this.#empty_node = MDFT.emptyNode.cloneNode(true);
		this.#parent_el = parent_el;
		this.#tag_name = tag_name;
		this.#zero_node = MDFT.zeroNode.cloneNode(true);
		this.#zero_with_no_space_node = MDFT.zeroWithSpaceNode.cloneNode(true);
		(async()=> {
			this.#parent_tags = await MFT.getTagNames(parent_tags,this.#parent_el);
			if(this.#parent_tags.length > 0){
				for(const parent_tag of this.#parent_tags){
					if(parent_tag.firstChild === null){
						this.first_child = parent_tag;
						MDFT.appendFirstNode(this.first_child,this.#created_el);
						console.log('this.first_child: ', this.first_child);
					}
					if(parent_tag.lastChild !== null){
						this.tag_parent = parent_tag;
						this.last_child = this.tag_parent.lastChild;
						if(this.last_child.nodeType !== 1){
							if(this.tag_parent.hasAttribute('data-block_active') || this.tag_parent.hasAttribute('data-inline_active')){
								MDFT.appendLastNode(this.tag_parent,this.#created_el);
							}
						}
					}
				}
			}
			this.#created_el.appendChild(this.#zero_with_no_space_node);
			MFT.writeSourceCode(pre_elem,this.#parent_el,pre_output,pre_outer);
		})();
		//console.table({'InsertInlineElToParent': args});
	}
}
export const insertInlineElToParent = async (...args)=>{
	return new InsertInlineElToParent(...args);
}