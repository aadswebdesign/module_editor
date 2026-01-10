//scripts/editor_logic/actions/selects_on_actions.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
/**
 * class for selecting texts and wrapping them with an  element
 */
class SelectsOnActions{
	#create_elem;
	#created_elem;
	#mdl_name;
	#pre_elem;
	#pre_elems;
	#pre_output;
	#pre_outer;
	module_block;
	constructor(obj_args){
		const {create_elem,mdl_name,pre_elems} = obj_args;
		const {pre_elem,pre_output,pre_outer}= pre_elems;
		this.#create_elem = create_elem;
		this.#created_elem = MDFT.createEditorElem;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_elem;
		this.#pre_elems = [pre_elem,pre_output,pre_outer];
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		(async()=>{
			switch(this.#mdl_name){
				case 'bold_select_mdl':{
					await this.module_block();
					//console.log('on: ',this.#mdl_name);
				}	
				break;//on				
				case 'em_select_mdl':{
					await this.module_block();
					//console.log('on: ',this.#mdl_name);
				}	
				break;//on				
				case 'mark_select_mdl':{
					await this.module_block();
					//console.log('on: ',this.#mdl_name);
				}	
				break;//on				
				case 'strong_select_mdl':{
					await this.module_block();
					//console.log('on: ',this.#mdl_name);
				}	
				break;//on				
				case 'underline_select_mdl':{
					await this.module_block();
					//console.log('on: ',this.#mdl_name);
				}	
				break;//oh				
				//case '_mdl':{}	
				//break;//off				
			}
		})();
		//console.table({'SelectsOnActions': obj_args});
	}
	module_block = async ()=>{
		const elem_wrapper = await this.#created_elem(this.#create_elem,['inline','wrapped'],null);
		await MFT.wrapSelection(elem_wrapper);
	};
}
export const selectsOnActions = async (obj_args)=>{
	return new SelectsOnActions(obj_args);//
};