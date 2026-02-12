//moduleEditor/editor_layout/layout_blocks/sub_items_ctn_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LBE from "./layout_blocks_export.js"; 
class SubItemsCtnBlock{
	#created_elem;
	#elem_data;
	#new_parent;
	#pre_elem;
	#pre_heading;
	#present_parent;
	constructor(obj_args){
		//const {} = obj_args;
		(async()=> {
			//this.#elem_data = await MFT.createObjects('_obj',{});
		})();
		console.table({'SubItemsCtnBlock': obj_args});		
	}
}
export async function subItemsCtnBlock(obj_args){
	return new SubItemsCtnBlock(obj_args);
};