//moduleEditor/scripts/editor_logic/events/base_events.js
import * as MFT from './../../factory/module_functions.js';
import * as MC from './../../factory/module_classes.js';
class BaseEvents{
	#block_elem;
	#canvas_elem;
	#pre_elem;
	#textarea_elem;
	constructor(obj_args){
		const {base_settings,block_elem} = obj_args;
		const {pre_data,textarea_data}= base_settings;
		const {pre_output, pre_outer} = pre_data;
		const {write_to_textarea,writing_raw} = textarea_data;
		this.#block_elem = block_elem[0] ?? null;
		(async()=> {
			if(this.#block_elem !== null){
				//console.log('block_elem: ',this.#block_elem);
				const get_canvas = await MFT.getTagNames('EDITOR-CANVAS',this.#block_elem);
				const get_pre = await MFT.getTagNames('PRE',this.#block_elem);
				const get_textarea = await MFT.getTagNames('TEXTAREA',this.#block_elem);
				this.#canvas_elem = get_canvas[0];
				this.#pre_elem = get_pre[0];
				this.#textarea_elem = get_textarea[0];
				const selection_change = async()=>{
					MFT.writeSourceCode(this.#pre_elem,this.#canvas_elem,pre_output,pre_outer);
					MFT.writeToTextArea(this.#textarea_elem,this.#canvas_elem,write_to_textarea,writing_raw);
				};
				await selection_change();
				document.addEventListener('selectionchange', async()=>{
					await selection_change();
				});					
			}
		})();
	}
}
export const baseEvents = async(obj_args)=>{
	new BaseEvents(obj_args);
}