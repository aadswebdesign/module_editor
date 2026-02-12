//moduleEditor/editor_layout/layout_blocks/toolbars_bottom_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LBE from "./layout_blocks_export.js"; 
class ToolbarsBottomBlock{
	#created_elem;
	#edt_tbs_btm;
	#elem_data;
	#present_parent;
	#new_parent;
	constructor(obj_args){
		const {tbs_ctn_btm_cb,tbs_ctn_id,tbs_ctn_classes,	editor_toolbars_bottom,present_parent}= obj_args;
		(async()=> {
			this.#elem_data = await MFT.createObjects('tbs_bottom_block_obj',{});
			this.#present_parent = present_parent ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = tbs_ctn_id;
				this.#elem_data.elem_classes = tbs_ctn_classes;
				this.#created_elem = tbs_ctn_btm_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}
		})().then(()=>{
			(async()=>{
				this.#edt_tbs_btm = editor_toolbars_bottom ?? null;
				if(this.#edt_tbs_btm !== null){
					this.#edt_tbs_btm.present_parent = this.#new_parent;
					await LBE.editorTbsBottomBlock(this.#edt_tbs_btm);
				}
			})();
		});
	}
}
export async function toolbarsBottomBlock(obj_args){
	return new ToolbarsBottomBlock(obj_args);
};