//moduleEditor/scripts/editor_logic/events/buttons_events.js
import * as MFT from './../../factory/module_functions.js';
import * as MC from './../../factory/module_classes.js';
import {btnsGroupEvents1} from './btns_group_events_1.js';
import {btnsGroupEvents2} from './btns_group_events_2.js';
import {btnsGroupEvents3} from './btns_group_events_3.js';
class ButtonsEvents{
	#block_btns;
	#heading_btns;
	#inline_btns;
	#select_btns;
	constructor(obj_args){	
		const {block_btns,heading_btns,group_one,group_two,inline_btns,select_btns} = obj_args;
		this.#block_btns = block_btns ?? null;
		this.#heading_btns = heading_btns ?? null;
		this.#inline_btns = inline_btns ?? null;
		this.#select_btns = select_btns ?? null;
		(async()=> {
			if(this.#block_btns !== null){
				this.btn_block_actions(this.#block_btns)
			}			
			if(this.#heading_btns !== null){
				this.btn_block_actions(this.#heading_btns)
			}			
			if(this.#inline_btns !== null){
				this.btn_block_actions(this.#inline_btns)
			}			
			if(this.#select_btns !== null){
				this.btn_block_actions(this.#select_btns)
			}
			await btnsGroupEvents1(group_one);
			await btnsGroupEvents2(group_two);
		})();
	}
	btn_block_actions = (...args)=>{
		const[btn_blocks] = args;
		(async()=> {
			for(const btn_block of btn_blocks){
				const events_manipulator = async (event)=>{
					event.preventDefault();
					let on_off = false;
					if(btn_block.classList.contains('on-off')){
						on_off = true;
					}
					await MFT.dataOnToggle(btn_block,on_off);
				}
				await MC.clickEventHandler(btn_block,await events_manipulator,true);			
			}
		})();	
	};
}
export const buttonsEvents = async(obj_args)=>{
	new ButtonsEvents(obj_args);
}