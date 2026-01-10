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
		const no_prev = ['H1','H2','H3','H4','H5','H6','P'];
		const no_prev1 = ['ARTICLE-HEADER',...no_prev];
		const no_prev2 = ['ARTICLE-MAIN',...no_prev];
		const no_prev3 = ['ARTICLE-FOOTER',...no_prev];
		const no_prev4 = ['ARTICLE-HEADER','ARTICLE-MAIN','ARTICLE-FOOTER',...no_prev];
		const no_parent1 = ['ARTICLE-HEADER','ARTICLE-MAIN','ARTICLE-FOOTER','H1','H2','H3','H4','H5','H6','P'];
		const no_parent2 = ['H1','H2','H3','H4','H5','H6','P'];
		(async()=> {
			switch(this.#mdl_name){
				case 'h1_mdl':{
					await HE.insertHxElToEdt(this.#editor_elem,this.#create_elem,['relative'],'data-block_active');
					await HE.insertHxElToArt(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',['H1'],no_parent2);       	
					await HE.insertHxElToArtHdr(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',['H1'],no_parent2);	
					await HE.insertHxElToArtMain(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',['H1'],no_parent2);
					await HE.insertHxElToArtFtr(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',['H1'],no_parent2);	
					//console.log('on: ',this.#mdl_name);
				}
				break;//on1
				case 'h2_mdl':{
					await HE.insertHxElToEdt(this.#editor_elem,this.#create_elem,['relative'],'data-block_active');
					await HE.insertHxElToArt(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',['H2'],no_parent2);       	
					await HE.insertHxElToArtHdr(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',['H2'],no_parent2);	
					await HE.insertHxElToArtMain(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',['H2'],no_parent2);
					await HE.insertHxElToArtFtr(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',['H2'],no_parent2);	
					//console.log('on: ',this.#mdl_name);
				}
				break;//on2
				case 'h3_mdl':{
					await HE.insertHxElToEdt(this.#editor_elem,this.#create_elem,['relative'],'data-block_active');
					await HE.insertHxElToArt(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',['H3'],no_parent2);       	
					await HE.insertHxElToArtHdr(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',['H3'],no_parent2);	
					await HE.insertHxElToArtMain(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',['H3'],no_parent2);
					await HE.insertHxElToArtFtr(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',['H3'],no_parent2);	
					//console.log('on: ',this.#mdl_name);
				}
				break;//on3
				case 'h4_mdl':{
					await HE.insertHxElToEdt(this.#editor_elem,this.#create_elem,['relative'],'data-block_active');
					await HE.insertHxElToArt(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',['H4'],no_parent2);       	
					await HE.insertHxElToArtHdr(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',['H4'],no_parent2);	
					await HE.insertHxElToArtMain(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',['H4'],no_parent2);
					await HE.insertHxElToArtFtr(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',['H4'],no_parent2);	
					//console.log('on: ',this.#mdl_name);
				}
				break;//on4
				case 'h5_mdl':{
					await HE.insertHxElToEdt(this.#editor_elem,this.#create_elem,['relative'],'data-block_active');
					await HE.insertHxElToArt(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',['H5'],no_parent2);       	
					await HE.insertHxElToArtHdr(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',['H5'],no_parent2);	
					await HE.insertHxElToArtMain(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',['H5'],no_parent2);
					await HE.insertHxElToArtFtr(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',['H5'],no_parent2);	
					//console.log('on: ',this.#mdl_name);
				}
				break;//on5
				case 'h6_mdl':{
					await HE.insertHxElToEdt(this.#editor_elem,this.#create_elem,['relative'],'data-block_active');
					await HE.insertHxElToArt(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',['H6'],no_parent2);       	
					await HE.insertHxElToArtHdr(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',['H6'],no_parent2);	
					await HE.insertHxElToArtMain(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',['H6'],no_parent2);
					await HE.insertHxElToArtFtr(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',['H6'],no_parent2);	
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

