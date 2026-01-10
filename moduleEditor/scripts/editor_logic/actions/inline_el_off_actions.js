// scripts/editor_logic/actions/inline_el_off_actions.js
import * as MFT from "./../../factory/module_functions.js";
import * as MDFT from './../../factory/module_dom_functions.js';
import * as HE from './handlers_exports.js';
/**
 * class for altering of created inline elements
 */
class InlineElOffActions {
	#editor_elem;
	#mdl_name;
	#parent_el;
	#pre_elem;
	#pre_elems;
	#pre_output;
	#pre_outer;
	#tag_name;
	constructor(obj_args){
		const {editor_elem,mdl_name,pre_elems,tag_name} = obj_args;
		const {pre_elem,pre_output,pre_outer}= pre_elems;
		this.#editor_elem = editor_elem;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_elem;
		this.#pre_elems = [pre_elem,pre_output,pre_outer];
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		(async()=>{
			switch(this.#mdl_name){
				case 'bold_mdl':{
					await HE.setInlineElOff(this.#editor_elem,this.#tag_name,this.#pre_elems);
					//console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'em_mdl':{
					await HE.setInlineElOff(this.#editor_elem,this.#tag_name,this.#pre_elems);
					//console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'mark_mdl':{
					await HE.setInlineElOff(this.#editor_elem,this.#tag_name,this.#pre_elems);
					//console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'strong_mdl':{
					await HE.setInlineElOff(this.#editor_elem,this.#tag_name,this.#pre_elems);
					//console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'underline_mdl':{
					await HE.setInlineElOff(this.#editor_elem,this.#tag_name,this.#pre_elems);
					//console.log('off: ',this.#mdl_name);
				}
				break;//off
				//case '_mdl':{}
				//break;//on
			}
		})();
		//console.table({'InlineElOffActions': obj_args});
	}
}
export const inlineElOffActions = async (obj_args) => {
  return new InlineElOffActions(obj_args); //
};
