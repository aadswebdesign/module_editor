//moduleEditor/editor_layout/layout_blocks/editor_tbs_top_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LBE from "./layout_blocks_export.js"; 
class EditorTbsTopBlock{
	#created_elem;
	#edt_tb_inserts;
	#edt_tb_1;
	#edt_tb_2;
	#edt_tb_3;
	#edt_tb_4;
	#edt_tb_5;
	#edt_tb_6;
	#elem_data = {};
	#items_wrapper;
	#new_parent;
	#present_parent;
	constructor(obj_args){
		const {edt_toolbar_1,edt_toolbar_2,edt_toolbar_3,edt_toolbar_4,edt_toolbar_5,edt_toolbar_6,present_parent} = obj_args;
		this.#edt_tb_1 = edt_toolbar_1 ?? null;
		this.#edt_tb_2 = edt_toolbar_2 ?? null;
		this.#edt_tb_3 = edt_toolbar_3 ?? null;
		this.#edt_tb_4 = edt_toolbar_4 ?? null;
		this.#edt_tb_5 = edt_toolbar_5 ?? null;
		this.#edt_tb_6 = edt_toolbar_6 ?? null;
		this.#present_parent = present_parent  ?? null;
		(async()=>{
			if(this.#edt_tb_1 !== null)	this.insert_toolbar(this.#edt_tb_1);
			if(this.#edt_tb_2 !== null)	this.insert_toolbar(this.#edt_tb_2);
			if(this.#edt_tb_3 !== null)	this.insert_toolbar(this.#edt_tb_3);
			if(this.#edt_tb_4 !== null)	this.insert_toolbar(this.#edt_tb_4);
			if(this.#edt_tb_5 !== null)	this.insert_toolbar(this.#edt_tb_5);
			if(this.#edt_tb_6 !== null)	this.insert_toolbar(this.#edt_tb_6);
		})();
	}
	insert_toolbar = async (obj_args)=>{
		const {edt_tb_cb,edt_tb_id,edt_tb_classes,items_wrapper} = obj_args;
		if(this.#present_parent !== null){
			this.#items_wrapper = items_wrapper ?? null;
			this.#elem_data.elem_id = edt_tb_id;
			this.#elem_data.elem_classes = edt_tb_classes;
			this.#created_elem = edt_tb_cb(this.#elem_data);
			this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			if(this.#items_wrapper !== null){
				this.#items_wrapper.present_parent = this.#new_parent;
				await LBE.itemsWrapperBlock(this.#items_wrapper);
			}
		}
	};
}
export async function editorTbsTopBlock(obj_args){
	return new EditorTbsTopBlock(obj_args);
};