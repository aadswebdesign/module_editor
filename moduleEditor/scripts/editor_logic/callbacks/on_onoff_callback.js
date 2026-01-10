//scripts/editor_logic/callbacks/on_onoff_callback.js
import * as MC from './../../factory/module_classes.js';
//import * as MFT from './../../factory/module_functions.js';
class OnOnOffCallback{
	#callback_on;
	#evt_btn;
	constructor(obj_args){
		const {editor_elem,elem_construct,callback_on,evt_btn} = obj_args;
		this.#callback_on = callback_on;
		this.#evt_btn = evt_btn;
		(async ()=>{		
			const el_construct = await elem_construct(editor_elem);
			const events_manipulator = async (event)=>{
				event.preventDefault();
				if(this.#evt_btn.hasAttribute('data-on')){
					await this.#callback_on(el_construct);
				}
			};
			await MC.clickEventHandler(this.#evt_btn,await events_manipulator);
		})();
	}	
}
export const onOnOffCallback = async (obj_args)=>{
	return new OnOnOffCallback(obj_args);
};