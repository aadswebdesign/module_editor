//scripts/editor_logic/callbacks/on_off_callback.js
import * as MC from './../../factory/module_classes.js';
import * as MFT from './../../factory/module_functions.js';
class OnOffCallback{
	#callback_on;
	#callback_off;
	#evt_btn;
	constructor(obj_args){
		const {editor_elem,elem_construct,callback_on,callback_off,evt_btn} = obj_args;
		this.#callback_on = callback_on;
		this.#callback_off = callback_off;
		this.#evt_btn = evt_btn;
		(async ()=>{
			const el_construct = await elem_construct(editor_elem);
			const events_manipulator = async (event)=>{
				event.preventDefault();
				if(this.#evt_btn.hasAttribute('data-on')){
					await this.#callback_on(el_construct);
				}else{
					await this.#callback_off(el_construct);
				}
			}
			await MC.clickEventHandler(this.#evt_btn,events_manipulator);
		})();
	}
}
export const onOffCallback = async (obj_args)=>{
	return new OnOffCallback(obj_args);
};