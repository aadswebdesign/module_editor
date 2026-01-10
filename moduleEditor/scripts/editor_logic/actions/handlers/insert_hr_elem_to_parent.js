//scripts/editor_logic/actions/handlers/insert_hr_elem_to_parent.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InsertHrElemToParent{
	#ancestor
	#br_el;
	#created_elem;
	#parent_el;
	#zero_node;
	last_child;
	last_elem;
	last_elem_child;
	present_parent;
	constructor(...args){
		const[parent_el,create_elem,el_class] = args;
		this.#parent_el = parent_el ?? null;
		this.#created_elem = MDFT.createEditorElemNA(create_elem,el_class);
		this.#br_el = MDFT.brNode.cloneNode();
		this.#zero_node = MDFT.zeroNode.cloneNode(true);
		(async()=> {
			if(this.#parent_el.lastElementChild !== null){
				this.present_parent = this.#parent_el.lastElementChild;
				if(this.present_parent.lastElementChild !== null){
					this.present_parent = this.present_parent.lastElementChild;
				}
				this.insert_into_parent(this.present_parent);
			}
		})();
	}
	insert_into_parent = (...args)=>{
		const [parent_el] = args;
		(async()=> {
			if(parent_el.hasAttribute('data-block_active')){
				if(parent_el.lastChild !== null){
					this.last_child = parent_el.lastChild;
					if(this.last_child.length > 0){
						if(this.last_child.nodeType === 3){
							this.last_child.after(this.#created_elem,this.#br_el);
						}
					}
				}
			}
			if(!parent_el.hasAttribute('data-block_active')){
				if(parent_el.parentElement.tagName === 'ARTICLE'){
					this.present_parent = parent_el.parentElement;
					if(this.present_parent.hasAttribute('data-block_active')){
						if(this.present_parent.lastElementChild !== null){
							this.last_elem_child = this.present_parent.lastElementChild;
							if(this.last_elem_child.tagName === 'BR'){
								this.last_elem_child.replaceWith(this.#created_elem,this.#br_el);
							}
							else{
								this.present_parent.append(this.#zero_node,this.#created_elem,this.#br_el);
							}
						}
					}
				}
			}
		})().then(()=>{
			(async()=> {
				if(parent_el.hasAttribute('data-block_active')){
					if(parent_el.lastChild !== null){
						this.last_elem_child = parent_el.lastChild;
						if(this.last_elem_child.previousElementSibling !== null && this.last_elem_child.previousElementSibling.tagName !== 'HR'){
							this.last_child = this.last_elem_child;
							this.last_child.replaceWith(this.#created_elem,this.#br_el);
						}
					}
				}
			})();	
		});
	};
}
export const insertHrElemToParent = async (...args)=>{
	return new InsertHrElemToParent(...args);
}