// scripts/editor_logic/actions/block_el_on_actions.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
import * as HE from './handlers_exports.js';
class BlockElOnActions{
	#br_el;
	#create_elem;
	#editor_elem;
	#mdl_name;
	#pre_elem;
	#pre_elems;
	#pre_output;
	#pre_outer;
	#tag_name;
	constructor(obj_args){
		const {create_elem,editor_elem,mdl_name,pre_elems,tag_name}= obj_args;
		const {pre_elem,pre_output,pre_outer}= pre_elems;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#create_elem = create_elem;
		this.#editor_elem = editor_elem;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_elem;
		this.#pre_elems = [pre_elem,pre_output,pre_outer];
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		const no_prev = ['H1','H2','H3','H4','H5','H6','P'];
		const no_prev1 = ['ARTICLE-HEADER',...no_prev];
		const no_prev2 = ['ARTICLE-MAIN',...no_prev];
		const no_prev3 = ['ARTICLE-FOOTER',...no_prev];
		const no_prev4 = ['ARTICLE-HEADER','ARTICLE-MAIN','ARTICLE-FOOTER',...no_prev];
		const no_parent1 = ['ARTICLE-HEADER','ARTICLE-MAIN','ARTICLE-FOOTER','H1','H2','H3','H4','H5','H6','P'];
		const no_parent2 = ['H1','H2','H3','H4','H5','H6','P'];
		(async()=> {
			switch(this.#mdl_name){
				case 'article_mdl':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'art_header_mdl':{
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',no_prev1,no_parent1);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'art_main_mdl':{
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',no_prev2,no_parent1);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'art_footer_mdl':{
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',no_prev3,no_parent1);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on insertBlockChildToEditor
				case 'h1_mdl_single':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',no_prev4,no_parent1);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'h2_mdl_single':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',no_prev4,no_parent1);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'h3_mdl_single':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',no_prev4,no_parent1);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'h4_mdl_single':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',no_prev4,no_parent1);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'h5_mdl_single':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',no_prev4,no_parent1);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'h6_mdl_single':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',no_prev4,no_parent1);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',no_prev3,no_parent2);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'hr_mdl':{
					await HE.insertHrElemToEditor(this.#editor_elem,this.#create_elem,['do-nothing']);
					await HE.insertHrElemToParent(this.#editor_elem,this.#create_elem,['do-nothing']);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
				case 'p_mdl':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',null,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',null,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',this.#pre_elems,null,no_parent2);
					await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',null,no_parent2);
					//console.log('on: ',this.#mdl_name);
				}
				break;//on
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_elem,this.#pre_output,this.#pre_outer);
		})();
	}
}
export const blockElOnActions = async (obj_args)=>{
	return new BlockElOnActions(obj_args);
}


