//moduleEditor/scripts/editor_layout/editor_layout.js
import * as MFT from './../factory/module_functions.js';
import * as LBE from "./layout_blocks/layout_blocks_export.js";
export class EditorLayout{
	#edt_block;
	#edt_ctn;
	#obj_args_set ={};
	#tbs_bottom;
	#tbs_top;
	constructor(obj_args){
		const {editor_ctn,editor_block,toolbars_top,toolbars_bottom} = obj_args;
		this.#edt_ctn = editor_ctn ?? null;
		this.#edt_block = editor_block ?? null;	
		this.#tbs_bottom = toolbars_bottom ?? null;
		this.#tbs_top = toolbars_top ?? null;
		(async()=> {
			if(this.#edt_ctn !== null) this.#obj_args_set.edt_ctn = this.#edt_ctn;
			if(this.tbs_top !== null) this.#obj_args_set.tbs_top = this.#tbs_top;
			if(this.#edt_block !== null) this.#obj_args_set.edt_block = this.#edt_block;
			if(this.tbs_bottom !== null) this.#obj_args_set.tbs_bottom = this.#tbs_bottom;
			await LBE.editorCtnBlock(this.#obj_args_set);
		})();
	}
}
export const editorLayout = async (obj_args)=>{
	return new EditorLayout(obj_args);
};