//moduleEditor/editor_layout/layout_blocks/item_button_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LBE from "./layout_blocks_export.js"; 
class ItemButtonBlock{
	#created_elem;
	#elem_data = {};
	#new_parent;
	#present_parent;
	constructor(obj_args){
		(async()=> {
			const {item_btn_cb,item_btn_id,item_btn_classes,item_btn_title,present_parent} = obj_args;
			this.#present_parent = present_parent  ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = item_btn_id;
				this.#elem_data.elem_classes = item_btn_classes;
				this.#elem_data.elem_title = item_btn_title
				this.#created_elem = item_btn_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}
		})();		
	}
}
export async function itemButtonBlock(obj_args){
	return new ItemButtonBlock(obj_args);
};