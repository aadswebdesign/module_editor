//moduleEditor/editor_layout/layout_blocks/main_items_ctn_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LBE from "./layout_blocks_export.js"; 
class MainItemsCtnBlock{
	#created_elem;
	#elem_data = {};
	#items_inserts;
	#new_parent;
	#pre_elem;
	#pre_heading;
	#present_parent;
	constructor(obj_args){
		const {main_items_ctn_cb,main_items_ctn_id,main_items_ctn_classes,main_items_ctn_inserts,present_parent} = obj_args;
		(async()=> {
			this.#present_parent = present_parent  ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = main_items_ctn_id;
				this.#elem_data.elem_classes = main_items_ctn_classes;
				this.#created_elem = main_items_ctn_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
				this.#items_inserts = main_items_ctn_inserts ?? null;
				if(this.#items_inserts !== null){
					this.#new_parent.append(...this.#items_inserts);
				}
			}
		})();
	}
}
export async function mainItemsCtnBlock(obj_args){
	return new MainItemsCtnBlock(obj_args);
};