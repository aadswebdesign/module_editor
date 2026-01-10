// scripts/editor_logic/actions/inline_el_on_actions.js
import * as MFT from "./../../factory/module_functions.js";
import * as MDFT from './../../factory/module_dom_functions.js';
import * as HE from './handlers_exports.js';

/**
 * class for altering of created inline elements
 */
class InlineElOnActions {
	#create_elem;
	#editor_elem;
	#mdl_name;
	#pre_elem;
	#pre_elems;
	#pre_output;
	#pre_outer;
	#tag_name;
	module_block;
	constructor(obj_args) {
		const {create_elem,editor_elem,mdl_name,pre_elems,tag_name}= obj_args;
		const {pre_elem,pre_output,pre_outer}= pre_elems;
		this.#create_elem = create_elem;
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
					this.module_block();
					await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','sub'],'MARK',this.#tag_name,'data-inline_active',this.#pre_elems);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'em_mdl':{
					this.module_block();
					await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','sub'],'B',this.#tag_name,'data-inline_active',this.#pre_elems);
					await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','sub'],'MARK',this.#tag_name,'data-inline_active',this.#pre_elems);
					await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','sub'],'STRONG',this.#tag_name,'data-inline_active',this.#pre_elems);
					await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','sub'],'U',this.#tag_name,'data-inline_active',this.#pre_elems);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'mark_mdl':{
					this.module_block();
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'strong_mdl':{
					this.module_block();
					await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','sub'],'MARK',this.#tag_name,'data-inline_active',this.#pre_elems);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'underline_mdl':{
					this.module_block();
					await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','sub'],'B',this.#tag_name,'data-inline_active',this.#pre_elems);
					await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','sub'],'EM',this.#tag_name,'data-inline_active',this.#pre_elems);
					await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','sub'],'MARK',this.#tag_name,'data-inline_active',this.#pre_elems);
					await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','sub'],'STRONG',this.#tag_name,'data-inline_active',this.#pre_elems);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				//case '_mdl':{}
				//break;//on
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_elem,this.#pre_output,this.#pre_outer);
		})();
	}
	module_block = ()=>{
		//console.log('module_block');
		(async()=> {
			await HE.insertInlineElToEdt(this.#editor_elem,this.#create_elem,['inliner','parent'],this.#tag_name,'data-inline_active',this.#pre_elems);
			await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','parent'],'ARTICLE',this.#tag_name,'data-inline_active',this.#pre_elems);
			await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','parent'],'ARTICLE-HEADER',this.#tag_name,'data-inline_active',this.#pre_elems);
			await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','parent'],'ARTICLE-MAIN',this.#tag_name,'data-inline_active',await this.#pre_elems);
			await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','parent'],'ARTICLE-FOOTER',this.#tag_name,'data-inline_active',this.#pre_elems);
			await HE.insertInlineElToParent(this.#editor_elem,this.#create_elem,['inliner','parent'],'P',this.#tag_name,'data-inline_active',this.#pre_elems);
		})();
	};
	
}

export const inlineElOnActions = async (obj_args) => {
  return new InlineElOnActions(obj_args); //
};
