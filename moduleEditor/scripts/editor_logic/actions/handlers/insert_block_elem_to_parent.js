//scripts/editor_logic/actions/factory/insert_block_elem_to_parent.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InsertBlockElemToParent{
	#ancestor
	#br_el;
	#created_elem;
	#prt_tags;
	#ex_prevs;
	#parent_el;
	#tag_name;
	#zero_node;
	last_child;
	constructor(...args){
		const [parent_el,create_elem, el_class,tag_name, data_attribute,ex_prev_elems,parent_tags, log = false] = args;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#created_elem = MDFT.createEditorElemNA(create_elem,el_class, data_attribute,log);
		this.#prt_tags = parent_tags;
		this.#ex_prevs = ex_prev_elems;
		this.#parent_el = parent_el ?? null;
		this.#tag_name = tag_name;
		this.#zero_node = MDFT.zeroNode.cloneNode(true);
		(async()=> {
			if(this.#parent_el !== null){
				if(this.#parent_el.lastElementChild !== null){
					this.last_child = this.#parent_el.lastElementChild;
					this.#ancestor = await MFT.getAncestor(this.last_child,this.#parent_el,this.#tag_name);
					let inserted_elem, from;
					if(this.#ancestor.firstElementChild === null){
						MDFT.appendFirstElem(this.#ancestor,this.#created_elem);
					} 
					if(this.#ancestor.lastElementChild !== null){
						MDFT.replaceAncestorWith(this.#ancestor,this.#created_elem,'BR',true);
						//console.log('last_child: ',this.last_child);
						//this is good now
						if(Array.isArray(this.#ex_prevs)){
							for(const ex_prev of this.#ex_prevs){
								MDFT.isPreviousElem(this.last_child,ex_prev,this.#br_el);
							}
						}
					}
				}
			}
			//is good now but needs an after action in off event
			if(this.#ancestor !== undefined){
				if(this.#ancestor.tagName !== this.#tag_name){
					const target_elem = this.#ancestor;
					//console.log('target_elem: ',target_elem);
					if(Array.isArray(this.#prt_tags)){
						for(const prt_tag of this.#prt_tags){
							MDFT.isParentElement(target_elem,prt_tag,this.#zero_node,true);
						}
					}
				}
			}
		})();
		//console.table({'InsertBlockElemToParent': args});
	}
}
export const insertBlockElemToParent = async (...args)=>{
	return new InsertBlockElemToParent(...args);
}