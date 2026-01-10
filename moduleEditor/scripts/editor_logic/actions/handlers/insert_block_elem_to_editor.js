//scripts/editor_logic/actions/handlers/insert_block_elem_to_editor.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InsertBlockElemToEditor{
	#br_el;
	#created_elem;
	#parent_elem;
	#tag_name;
	#zero_node;
	last_child;
	constructor(...args){
		const [parent_elem,create_elem, el_class,tag_name, data_attribute, log = false] = args;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#created_elem = MDFT.createEditorElemNA(create_elem,el_class, data_attribute,log);
		this.#parent_elem = parent_elem;
		this.#tag_name = tag_name;
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
				if(!this.#parent_elem.firstElementChild.hasAttribute('data-block_active')){
					MDFT.replaceAncestorWith(this.last_child,this.#created_elem,'BR');
					if(log === true){
						console.log('initial last elem appended');
					}
				}
			}
			this.#created_elem.appendChild(this.#zero_node);
		})();
	}
}
export const insertBlockElemToEditor = async (...args)=>{
	return new InsertBlockElemToEditor(...args);
}