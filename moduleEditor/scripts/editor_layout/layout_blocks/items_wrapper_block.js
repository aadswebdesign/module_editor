//moduleEditor/editor_layout/layout_blocks/items_wrapper_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LBE from "./layout_blocks_export.js"; 
class ItemsWrapperBlock{
	#created_elem;
	#elem_data = {};
	#item_btn;
	#main_items_ctn;
	#new_parent;
	#present_parent;
	constructor(obj_args){
		const{items_wrapper_cb,items_wrapper_id,items_wrapper_classes,item_btn,item_ctn,main_items_ctn,present_parent} = obj_args;
		(async()=> {
			this.#present_parent = present_parent  ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = items_wrapper_id;
				this.#elem_data.elem_classes = items_wrapper_classes;
				this.#created_elem = items_wrapper_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}

		})().then(()=>{
			(async()=> {
				this.#item_btn = item_btn ?? null;
				if(this.#item_btn !== null){
					this.#item_btn.present_parent = this.#new_parent;
					await LBE.itemButtonBlock(this.#item_btn);
				}
			})();
		}).then(()=>{
			(async()=> {
				this.#main_items_ctn = main_items_ctn ?? null;
				if(this.#main_items_ctn !== null){
					this.#main_items_ctn.present_parent = this.#new_parent;
					await LBE.mainItemsCtnBlock(this.#main_items_ctn);
				}
				
				
				
			})();		
		});
		//console.table({'ItemsWrapperBlock': obj_args.item_btn});
	}
}
export async function itemsWrapperBlock(obj_args){
	return new ItemsWrapperBlock(obj_args);
};