//moduleEditor/editor_layout/layout_blocks/editor_block_main_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LBE from "./layout_blocks_export.js"; 
class EditorMainBlock{
	#created_elem;
	#edt_canvas;
	#elem_data;
	#hidden_ctn;
	#new_parent;
	#pre_ctn;
	#present_parent;
	constructor(obj_args){
		const{edt_block_cb,edt_block_id,edt_block_classes,editor_canvas,pre_ctn,hidden_ctn,present_parent} = obj_args;
		(async()=> {
			this.#elem_data = await MFT.createObjects('edt_main_block_obj',{});
			this.#present_parent = present_parent  ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = edt_block_id;
				this.#elem_data.elem_classes = edt_block_classes;
				this.#created_elem = edt_block_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}
		})().then(()=>{
			(async()=> {
				this.#edt_canvas = editor_canvas ?? null;
				if(this.#edt_canvas !== null){
					this.#edt_canvas.present_parent = this.#new_parent;
					await LBE.editorCanvasBlock(this.#edt_canvas);
				}
			})();
		}).then(()=>{
			(async()=> {
				this.#pre_ctn = pre_ctn ?? null;
				if(this.#pre_ctn !== null){
					this.#pre_ctn.present_parent = this.#new_parent;
					await LBE.preCtnBlock(this.#pre_ctn);
				}
			})();
		}).then(()=>{
			(async()=> {
				this.#hidden_ctn = hidden_ctn ?? null;
				if(this.#hidden_ctn !== null){
					this.#hidden_ctn.present_parent = this.#new_parent;
					await LBE.hiddenCtnBlock(this.#hidden_ctn);
				}
			})();
		});
	}
}
export async function editorMainBlock(obj_args){
	return new EditorMainBlock(obj_args);
};