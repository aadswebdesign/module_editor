// scripts/editor_logic/actions/block_el_headings_on_actions.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
import * as HE from './handlers_exports.js';

class BlockElHeadingsOnActions{
	#ancestor;
	#br_el;
	#create_elem;
	#editor_elem;
	#mdl_name;
	#parent_el;
	#pre_elem;
	#pre_elems;
	#pre_output;
	#pre_outer;
	#tag_name;
	#zero_node;
	first_child;
	last_child;
	
	constructor(obj_args){
		const {mdl_name,tag_name,create_elem,editor_elem,pre_elems} = obj_args;
		const {pre_elem,pre_output,pre_outer}= pre_elems;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#create_elem = create_elem;
		this.#editor_elem = editor_elem;
		this.#mdl_name = mdl_name;
		this.#pre_elems = [pre_elem,pre_output,pre_outer];
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		this.#zero_node = MDFT.zeroNode.cloneNode(true);
		const no_prev = ['H1','H2','H3','H4','H5','H6','P'];
		const no_prev1 = ['ARTICLE-HEADER'];
		const no_prev2 = ['ARTICLE-MAIN'];
		const no_prev3 = ['ARTICLE-FOOTER'];
		const no_prev4 = ['ARTICLE-HEADER','ARTICLE-MAIN','ARTICLE-FOOTER',...no_prev];
		const no_prt = ['H1','H2','H3','H4','H5','H6','P'];
		const no_prt_h1 = ['ARTICLE-MAIN','ARTICLE-FOOTER',...no_prt];
		(async()=> {
			switch(this.#mdl_name){
				case 'h1_mdl':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					console.log('editor_elem: ',this.#editor_elem);
					if(this.#editor_elem.firstElementChild === null){
						await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev3,no_prt_h1);
					}
					if(this.#editor_elem.lastElementChild !== null){
						this.last_child = this.#editor_elem;
						await HE.insertBlockElemToParent(this.last_child,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev3,no_prt_h1);	
					}
						
				}
				break;//on1
				case 'h2_mdl':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					if(this.#editor_elem.firstElementChild === null){
						await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev3,no_prt);
					}
					if(this.#editor_elem.lastElementChild !== null){
						await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev3,no_prt);	
					}
				}
				break;//on2
				case 'h3_mdl':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					if(this.#editor_elem.firstElementChild === null){
						await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev3,no_prt);
					}
					if(this.#editor_elem.lastElementChild !== null){
						await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev3,no_prt);		
					}
				}
				break;//on3
				case 'h4_mdl':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					if(this.#editor_elem.firstElementChild === null){
						await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev3,no_prt);
					}
					if(this.#editor_elem.lastElementChild !== null){
						await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev3,no_prt);		
					}
				}
				break;//on4
				case 'h5_mdl':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					if(this.#editor_elem.firstElementChild === null){
						await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev3,no_prt);
					}
					if(this.#editor_elem.lastElementChild !== null){
						await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev3,no_prt);				
					}
					//console.log('on: ',this.#mdl_name);
				}
				break;//on5
				case 'h6_mdl':{
					await HE.insertBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active');
					if(this.#editor_elem.firstElementChild === null){
						await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev3,no_prt);
					}
					if(this.#editor_elem.lastElementChild !== null){
						await HE.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],this.#tag_name,'data-block_active',no_prev3,no_prt);		
					}
					//console.log('on: ',this.#mdl_name);
				}
				break;//on6
			}
			MFT.writeSourceCode(pre_elem,this.#editor_elem,pre_output,pre_outer);
		})();	
		//console.table({'BlockElHeadingsOnActions': obj_args});
	}
}
export const blockElHeadingsOnActions = async (obj_args)=>{
	return new BlockElHeadingsOnActions(obj_args);
}

