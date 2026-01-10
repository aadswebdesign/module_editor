//moduleEditor/editor_layout/layout_blocks/pre_elem_block.js
import * as MFT from './../../factory/module_functions.js';
class PreElemBlock{
	#created_elem;
	#elem_data = {};
	#new_parent;
	#present_parent;
	constructor(obj_args){
		const {pre_elem_cb,pre_elem_id,pre_elem_classes,tab_size,present_parent} = obj_args;
		(async()=> {
			this.#present_parent = present_parent  ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = pre_elem_id;
				this.#elem_data.elem_classes = pre_elem_classes;
				this.#elem_data.tab_size = tab_size;
				this.#created_elem = pre_elem_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}
		})();
	}
}
export async function preElemBlock(obj_args){
	return new PreElemBlock(obj_args);
};