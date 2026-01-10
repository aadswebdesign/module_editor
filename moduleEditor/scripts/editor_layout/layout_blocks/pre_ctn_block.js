//moduleEditor/editor_layout/layout_blocks/pre_ctn_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LBE from "./layout_blocks_export.js"; 
class PreCtnBlock{
	#created_elem;
	#elem_data = {};
	#new_parent;
	#pre_elem;
	#pre_heading;
	#present_parent;
	constructor(obj_args){
		const {pre_ctn_cb,pre_ctn_id,pre_ctn_classes,pre_heading,pre_elem,present_parent} = obj_args;
		(async()=> {
			this.#present_parent = present_parent  ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = pre_ctn_id;
				this.#elem_data.elem_classes = pre_ctn_classes;
				this.#created_elem = pre_ctn_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}		
		})().then(()=>{
			(async()=> {
				this.#pre_heading = pre_heading ?? null;
				if(this.#pre_heading !== null){
					this.#pre_heading.present_parent = this.#new_parent;
					await LBE.preHeadingBlock(this.#pre_heading);
				}
			})();
		}).then(()=>{
			(async()=> {
				this.#pre_elem = pre_elem ?? null;
				if(this.#pre_elem !== null){
					this.#pre_elem.present_parent = this.#new_parent;
					await LBE.preElemBlock(this.#pre_elem);
				}
			})();
		});								
	}
}
export async function preCtnBlock(obj_args){
	return new PreCtnBlock(obj_args);
};