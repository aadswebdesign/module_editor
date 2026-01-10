//moduleEditor/editor_layout/layout_blocks/toolbars_top_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LBE from "./layout_blocks_export.js"; 
class ToolbarsTopBlock{ 
	#created_elem;
	#edt_tbs_top;
	#elem_data = {};
	#new_parent;
	#present_parent;
	constructor(obj_args){
		const {tbs_ctn_top_cb,tbs_ctn_id,tbs_ctn_classes,editor_toolbars_top,present_parent} = obj_args;
		(async()=> {
			this.#present_parent = present_parent ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = tbs_ctn_id;
				this.#elem_data.elem_classes = tbs_ctn_classes;
				this.#created_elem = tbs_ctn_top_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}
		})().then(()=>{
			(async()=> {
				this.#edt_tbs_top = editor_toolbars_top ?? null;
				if(this.#edt_tbs_top !== null){
					this.#edt_tbs_top.present_parent = this.#new_parent;
					await LBE.editorTbsTopBlock(this.#edt_tbs_top);
				}
			})();
		});	
	}
}
export async function toolbarsTopBlock(obj_args){
	return new ToolbarsTopBlock(obj_args);
};