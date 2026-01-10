//scripts/editor_logic/actions/handlers/insert_hx_el_to_art.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InsertHxElToArt{
	#br_el;
	#created_elem;
	#ex_parents;
	#ex_prevs;
	#parent_el;
	#parent_tag_name;
	#tag_name;
	#zero_node;
	insert_elems;
	last_child;
	no_parent;
	present_parent;
	constructor(...args){
		const [parent_elem,create_elem, el_class,parent_tag_name,tag_name, data_atts,ex_prev_elems,ex_parent_elems, log = false] = args;		
		this.#br_el = MDFT.brNode.cloneNode();
		this.#created_elem = MDFT.createEditorElemNA(create_elem,el_class, data_atts,log);
		this.#ex_parents = ex_parent_elems;
		this.#ex_prevs = ex_prev_elems;
		this.#parent_el = parent_elem;
		this.#parent_tag_name = parent_tag_name;
		this.#tag_name = tag_name;
		this.#zero_node = MDFT.zeroNode.cloneNode(true);
		(async()=> {
			if(this.#parent_el.lastElementChild !== null){
				this.present_parent = this.#parent_el.lastElementChild;
				if(this.present_parent.tagName === parent_tag_name){
					if(this.present_parent.lastElementChild === null){
						this.insert_elems(this.present_parent);
					}else
					if(this.present_parent.lastElementChild !== null){
						this.no_parent = this.present_parent.lastElementChild;
						if(this.no_parent.tagName !== 'ARTICLE-HEADER' && this.no_parent.tagName !== 'ARTICLE-MAIN' && this.no_parent.tagName !== 'ARTICLE-FOOTER'){
							this.insert_elems(this.present_parent);
						}
					}
				}
				if(Array.isArray(this.#ex_prevs)){
					for(const ex_prev of this.#ex_prevs){
						MDFT.isNotPreviousElem(this.present_parent,ex_prev,this.#br_el);
					}
				}
				if(Array.isArray(this.#ex_parents)){
					for(const ex_parent of this.#ex_parents){
						MDFT.isNotParentElement(this.present_parent,ex_parent,this.#zero_node);
					}
				}
			}			
			this.#created_elem.appendChild(this.#zero_node);
		})();
		//console.table({'InsertHxElToArt': args});
	}
	insert_elems = function(...args){
		const [parent_el] = args;
		(async()=> {
			let first_child;
			//console.log('art parent_el: ',parent_el);
			if(parent_el.firstChild !== null && parent_el.firstChild.nodeType === 3){
				first_child = parent_el.firstChild
				first_child.remove();
			}
			if(parent_el.firstElementChild === null){
				parent_el.append(this.#created_elem);
			}
			if(parent_el.lastElementChild !== null){
				this.last_child = parent_el.lastElementChild;
				if(this.last_child.tagName === 'BR'){
					this.last_child.replaceWith(this.#created_elem);
				}
			}
		})();	
	};
}
export const insertHxElToArt = async (...args)=>{
	return new InsertHxElToArt(...args);
}
