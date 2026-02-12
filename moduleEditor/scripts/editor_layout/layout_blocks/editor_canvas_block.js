//moduleEditor/editor_layout/layout_blocks/editor_canvas_block.js
import * as MFT from './../../factory/module_functions.js';
class EditorCanvasBlock{
	#created_elem;
	#elem_data;
	#new_parent;
	#present_parent;
	constructor(obj_args){
		const {edt_canvas_cb,edt_canvas_id,edt_canvas_classes,present_parent} = obj_args;
		(async()=>{
			this.#elem_data = await MFT.createObjects('edt_canvas_obj',{});
			this.#present_parent = present_parent  ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = edt_canvas_id;
				this.#elem_data.elem_classes = edt_canvas_classes;
				this.#created_elem = edt_canvas_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}
		})();
	}
}
export async function editorCanvasBlock(obj_args){
	return new EditorCanvasBlock(obj_args);
};