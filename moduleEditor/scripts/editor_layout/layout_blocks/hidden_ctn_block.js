//moduleEditor/editor_layout/layout_blocks/hidden_ctn_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LBE from "./layout_blocks_export.js"; 
class HiddenCtnBlock{
	#created_elem;
	#elem_data = {};
	#new_parent;
	#present_parent;
	#textarea_elem;
	constructor(obj_args){
		const {hidden_ctn_cb,hidden_ctn_id,hidden_ctn_classes,	textarea_elem,present_parent} = obj_args;
		(async()=> {
			this.#present_parent = present_parent  ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = hidden_ctn_id;
				this.#elem_data.elem_classes = hidden_ctn_classes;
				this.#created_elem = hidden_ctn_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}
		})().then(()=>{
			(async()=> {
				this.#textarea_elem = textarea_elem ?? null;
				if(this.#textarea_elem !== null){
					this.#textarea_elem.present_parent = this.#new_parent;
					await LBE.textareaBlock(this.#textarea_elem);
				}			
			})();	
		});
	}
}
export async function hiddenCtnBlock(obj_args){
	return new HiddenCtnBlock(obj_args);
};