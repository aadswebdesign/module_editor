//moduleEditor//editor_layout/layout_blocks/textarea_block.js
import * as MFT from './../../factory/module_functions.js';
class TextareaBlock{
	#created_elem;
	#elem_data = {};
	#new_parent;
	#present_parent;
	constructor(obj_args){
		const {textarea_cb,textarea_id,textarea_classes,textarea_name,textarea_rows,textarea_cols,present_parent}= obj_args;
		(async()=> {
			this.#present_parent = present_parent  ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = textarea_id;
				this.#elem_data.elem_classes = textarea_classes;
				this.#elem_data.name = textarea_name;
				this.#elem_data.rows = textarea_rows;
				this.#elem_data.cols = textarea_cols,
				this.#created_elem = textarea_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}
		})();
	}
}
export async function textareaBlock(obj_args){
	return new TextareaBlock(obj_args);
};