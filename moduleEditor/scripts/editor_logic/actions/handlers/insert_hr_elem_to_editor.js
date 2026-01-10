//scripts/editor_logic/actions/handlers/insert_hr_elem_to_editor.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InsertHrElemToEditor{
	#parent_el;
	#br_el;
	#created_elem;
	last_child;
	constructor(...args){
		const[parent_el,create_elem,el_class] = args;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#created_elem = MDFT.createEditorElemNA(create_elem,el_class);
		this.#parent_el = parent_el ?? null;
		(async()=> {
			if(this.#parent_el.firstChild === null){
				return null;
			}
			if(this.#parent_el.lastChild !== null){
				this.last_child = this.#parent_el.lastChild;
				if(this.last_child.nodeType === 3){
					this.last_child.after(this.#created_elem,this.#br_el);
				}else{
					if(!this.last_child.hasAttribute('data-block_active')){
						this.last_child.replaceWith(this.#created_elem,this.#br_el);
					}
				}
			}
		})();
	}
}
export const insertHrElemToEditor = async (...args)=>{
	return new InsertHrElemToEditor(...args);
}