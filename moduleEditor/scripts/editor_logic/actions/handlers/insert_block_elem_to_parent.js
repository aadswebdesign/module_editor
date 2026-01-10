//scripts/editor_logic/actions/factory/insert_block_elem_to_parent.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InsertBlockElemToParent{
	#ancestor
	#br_el;
	#created_elem;
	#ex_parents;
	#ex_prevs;
	#parent_el;
	#parent_tag_name;
	#tag_name;
	#zero_node;
	first_child;
	last_child;
	last_elem_child;
	constructor(...args){
		const [parent_el,create_elem, el_class,parent_tag_name,tag_name, data_attribute,ex_prev_elems,ex_parent_elems, log = false] = args;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#created_elem = MDFT.createEditorElemNA(create_elem,el_class, data_attribute,log);
		this.#ex_parents = ex_parent_elems;
		this.#ex_prevs = ex_prev_elems;
		this.#parent_el = parent_el;//parent_elem
		this.#parent_tag_name = parent_tag_name;
		this.#tag_name = tag_name;
		this.#zero_node = MDFT.zeroNode.cloneNode(true);
		(async()=> {
			if(this.#parent_el.children.length > 0){
				const parents_children = this.#parent_el.children;
				for(const parents_child of parents_children){
					if((parents_child.tagName === parent_tag_name) && (parents_child.hasAttribute('data-block_active'))){
						this.#ancestor = await MFT.getAncestor(parents_child,this.#parent_el,tag_name);
						if(this.#ancestor.firstChild !== null && this.#ancestor.firstChild.nodeType === 3){
							this.first_child = this.#ancestor.firstChild;
							this.first_child.remove();
						}
						if(this.#ancestor.firstElementChild === null){
							MDFT.appendFirstElem(this.#ancestor,this.#created_elem);
							if(log === true){
								console.log('initial first elem appended to: ',this.#ancestor);
							}
						}
						if(this.#ancestor.lastElementChild !== null){
							this.last_elem_child = this.#ancestor.lastElementChild;
							if(this.last_elem_child.previousElementSibling !== null && this.last_elem_child.previousElementSibling.tagName === 'HR'){
								this.last_child = this.last_elem_child;
								if(this.last_child.tagName === 'BR'){
									this.last_child.replaceWith(this.#created_elem);
								}
							}else{
								MDFT.replaceAncestorWith(this.#ancestor,this.#created_elem,'BR');
							}
							if(log === true){
								console.log('initial last elem appended to: ',this.#ancestor);
							}
						}
					}
					if(Array.isArray(this.#ex_prevs)){
						for(const ex_prev of this.#ex_prevs){
							MDFT.isNotPreviousElem(parents_child,ex_prev,this.#br_el);
						}
					}
					if(parents_child.lastElementChild !== null){
						const last_child = parents_child.firstElementChild;
						if(Array.isArray(this.#ex_parents)){
							for(const ex_parent of this.#ex_parents){
								MDFT.isNotParentElement(last_child,ex_parent,this.#zero_node);
							}
						}
					}
				}
			}
			this.#created_elem.appendChild(this.#zero_node);
		})();
		//console.table({'InsertBlockElemToParent': args});
	}
}
export const insertBlockElemToParent = async (...args)=>{
	return new InsertBlockElemToParent(...args);
}