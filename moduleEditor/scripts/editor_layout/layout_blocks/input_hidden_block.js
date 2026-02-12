//moduleEditor//editor_layout/layout_blocks/input_hidden_block.js
import * as MFT from './../../factory/module_functions.js';
class InputHiddenBlock{
	#created_elem;
	#elem_data;
	#new_parent;
	#present_parent;
	constructor(obj_args){
		const {hidden_input_cb,hidden_input_name,hidden_input_id,hidden_input_classes,present_parent} = obj_args;
		(async()=> {
			this.#elem_data = await MFT.createObjects('hidden_block_obj',{});
			this.#present_parent = present_parent  ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = hidden_input_id;
				this.#elem_data.elem_name = hidden_input_name;
				this.#elem_data.elem_classes = hidden_input_classes;
				this.#created_elem = hidden_input_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}
		})();
		//console.table({'InputHiddenBlock': obj_args});
	}
}
export const inputHiddenBlock = async (obj_args)=>{
	return new InputHiddenBlock(obj_args);
}
