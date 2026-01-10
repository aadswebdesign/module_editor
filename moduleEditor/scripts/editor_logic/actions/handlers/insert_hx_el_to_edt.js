//scripts/editor_logic/actions/handlers/insert_hx_el_to_edt.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InsertHxElToEdt{
	#br_el;
	#created_elem;
	#parent_elem;
	#zero_node;
	last_child;
	set_last_elem;
	constructor(...args){
		const [parent_elem,create_elem, el_class,data_attribute,log = false] = args;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#created_elem = MDFT.createEditorElemNA(create_elem,el_class, data_attribute,log);
		this.#parent_elem = parent_elem;
		this.#zero_node = MDFT.zeroNode.cloneNode(true);
		(async()=> {
			if(this.#parent_elem.firstElementChild === null){
				MDFT.appendFirstElem(this.#parent_elem,this.#created_elem);
				if(log === true){
					console.log('initial first elem appended');
				}
			}
			if(this.#parent_elem.lastElementChild !== null){
				this.last_child = this.#parent_elem.lastElementChild;
				if(this.last_child.tagName === 'BR'){
					this.last_child.replaceWith(this.#created_elem);
				}
			}
			this.#created_elem.appendChild(this.#zero_node);
		})();
	}
}
export const insertHxElToEdt = async (...args)=>{
	return new InsertHxElToEdt(...args);
}