// scripts/editor_logic/actions/block_el_headings_off_actions.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
class BlockElHeadingsOffActions{
	#ancestor;
	#br_el;
	#editor_elem;
	#mdl_name;
	#parent_el;
	#pre_elem;
	#pre_elems;
	#pre_output;
	#pre_outer;
	#tag_name;
	last_child;
	constructor(obj_args){
		const {mdl_name,tag_name,editor_elem,pre_elems} = obj_args;
		const {pre_elem,pre_output,pre_outer}= pre_elems;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#editor_elem = editor_elem;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_elem;
		this.#pre_elems = [pre_elem,pre_output,pre_outer];
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		(async()=> {
			switch(this.#mdl_name){
				case 'h1_mdl':{
					await this.module_block();
					//console.log('off: ',this.#mdl_name);
				}
				break;//off1
				case 'h2_mdl':{
					await this.module_block();
					//console.log('off: ',this.#mdl_name);
				}
				break;//on2
				case 'h3_mdl':{
					await this.module_block();
					//console.log('off: ',this.#mdl_name);
				}
				break;//off3
				case 'h4_mdl':{
					await this.module_block();
					//console.log('off: ',this.#mdl_name);
				}
				break;//off4
				case 'h5_mdl':{
					await this.module_block();
					//console.log('off: ',this.#mdl_name);
				}
				break;//off5
				case 'h6_mdl':{
					await this.module_block();
					//console.log('off: ',this.#mdl_name);
				}
				break;//off6
			}
			MFT.writeSourceCode(pre_elem,this.#editor_elem,pre_output,pre_outer);

		})();	
		//console.table({'BlockElHeadingsOffActions': obj_args});
	}
	module_block = async (...args)=>{
		const [tag_name] = args;
		if(this.#editor_elem.lastElementChild !== null){
			this.last_child = this.#editor_elem.lastElementChild;
			this.#ancestor = await MFT.getAncestor(this.last_child,this.#editor_elem,this.#tag_name);
			MDFT.removeBlockActive(this.#ancestor,'data-block_active');
			MDFT.appendBr(this.#ancestor,this.#br_el);
			MDFT.removeLastBr(this.#ancestor,this.#br_el);
		}		
	};
}
export const blockElHeadingsOffActions = async (obj_args)=>{
	return new BlockElHeadingsOffActions(obj_args);
}