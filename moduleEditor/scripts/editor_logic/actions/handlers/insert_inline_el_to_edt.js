//scripts/editor_logic/actions/handlers/insert_inline_el_to_edt.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InsertInlineElToEdt{
	#created_el;
	#empty_node;
	#parent_el;
	#tag_name;
	#zero_node;
	#zero_with_no_space_node;
	last_child;
	constructor(...args){
		const [parent_el,create_el, el_class,tag_name, data_atts,pre_elems, log = false] = args;
		const [pre_elem,pre_output,pre_outer] = pre_elems;
		this.#created_el = MDFT.createEditorElemNA(create_el,el_class, data_atts,log);
		this.#empty_node = MDFT.emptyNode.cloneNode(true);
		this.#parent_el = parent_el;
		this.#tag_name = tag_name;
		this.#zero_node = MDFT.zeroNode.cloneNode(true);
		this.#zero_with_no_space_node = MDFT.zeroWithSpaceNode.cloneNode(true);
		(async()=> {
			if(this.#parent_el.firstChild === null){
				MDFT.appendFirstNode(this.#parent_el,this.#created_el);
			}
			if(this.#parent_el.lastChild !== null){
				this.last_child = this.#parent_el.lastChild;
				if(this.last_child.nodeType !== 1){
					MDFT.appendLastNode(this.#parent_el,this.#created_el);
				}
			}
			this.#created_el.appendChild(this.#zero_with_no_space_node);
			MFT.writeSourceCode(pre_elem,this.#parent_el,pre_output,pre_outer);			
		})();
		//console.table({'InsertInlineElToEdt': args});
	}
}
export const insertInlineElToEdt = async (...args)=>{
	return new InsertInlineElToEdt(...args);
}