//moduleEditor/scripts/editor_logic/events/btns_group_events_1.js
import * as MFT from './../../factory/module_functions.js';
import * as MC from './../../factory/module_classes.js';
class BtnsGroupEvents1{
	#group_one;
	constructor(...args){
		const [group_one] = args;
		this.#group_one = group_one ?? null;
		(async()=> {
			if(this.#group_one !== null){
				this.group_one_outer_actions(this.#group_one);
				this.group_one_inner_actions(this.#group_one);
			}				
		})();
	}
	group_one_outer_actions = (...args) =>{
		const[group_blocks] = args;
		(async()=> {
			for(const group_block of group_blocks){
				const group_btn = group_block.firstElementChild;
				const outer_ctn = group_block.lastElementChild; 
				const events_manipulator = async (event)=>{
					event.preventDefault();
					await MFT.dataOnToggle(group_btn);
					if(group_btn.hasAttribute('data-on')){
						await MFT.replaceClass(outer_ctn,'display-none','display-flex');
					}else{
						await MFT.replaceClass(outer_ctn,'display-flex','display-none');
					}	
				}
				await MC.clickEventHandler(group_btn,await events_manipulator,true);
			}
		})();
	}
	group_one_inner_actions = (...args) =>{
		const[group_blocks] = args;
		(async()=> {
			for(const group_block of group_blocks){
				const leading_elem = group_block.firstElementChild;
				const outer_ctn = group_block.lastElementChild;
				const group_btn = outer_ctn.firstElementChild;
				const inner_ctn = outer_ctn.lastElementChild;
				const events_manipulator = async (event)=>{
					await MFT.dataTbOpenToggle(group_btn);	
					if(group_btn.hasAttribute('data-tb_open')){
						await MFT.replaceClass(group_btn, 'triangle-right-icon-editor-8x8-white','triangle-left-icon-editor-8x8-white');
						await MFT.replaceClass(inner_ctn, 'display-none','display-flex');
						group_btn.title = 'close this';
					}else{
						await MFT.replaceClass(group_btn, 'triangle-left-icon-editor-8x8-white','triangle-right-icon-editor-8x8-white');
						await MFT.replaceClass(inner_ctn, 'display-flex','display-none');
						group_btn.title = 'open this for the sub elements';
					}
				}
				await MC.clickEventHandler(group_btn,await events_manipulator,true);
			}
		})();		
	}
}
export const btnsGroupEvents1 = async(...args)=>{
	new BtnsGroupEvents1(...args);
}