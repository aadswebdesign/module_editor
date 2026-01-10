// scripts/editor_logic/actions/block_el_off_actions.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
class BlockElOffActions{
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
		const {editor_elem,mdl_name,pre_elems,tag_name} = obj_args;
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
				case 'article_mdl':{
					await this.module_block1(this.#tag_name);
					console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'art_header_mdl':{
					await this.module_block2('ARTICLE');
					console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'art_main_mdl':{
					await this.module_block2('ARTICLE');
					console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'art_footer_mdl':{
					await this.module_block2('ARTICLE');
					console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'h1_mdl_single':{
					await this.module_block1(this.#tag_name);
					console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'h2_mdl_single':{
					await this.module_block1(this.#tag_name);
					console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'h3_mdl_single':{
					await this.module_block1(this.#tag_name);
					console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'h4_mdl_single':{
					await this.module_block1(this.#tag_name);
					console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'h5_mdl_single':{
					await this.module_block1(this.#tag_name);
					console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'h6_mdl_single':{
					await this.module_block1(this.#tag_name);
					console.log('off: ',this.#mdl_name);
				}
				break;//off
				case 'p_mdl':{
					await this.module_block1(this.#tag_name);
					console.log('off: ',this.#mdl_name);
				}
				break;//off
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_elem,this.#pre_output,this.#pre_outer);
		})();	
		//console.table({'BlockElOffActions': obj_args});
	}
	module_block1 = async (...args)=>{
		const [tag_name] = args;
		if(this.#editor_elem.lastElementChild !== null){
			this.last_child = this.#editor_elem.lastElementChild;
			this.#ancestor = await MFT.getAncestor(this.last_child,this.#editor_elem,tag_name);
			MDFT.appendBr(this.#ancestor,this.#br_el);
			MDFT.removeBlockActive(this.#ancestor,'data-block_active');
			MDFT.removeLastBr(this.#ancestor,this.#br_el);
		}		
	};
	module_block2 = async (...args)=>{
		const [tag_name] = args;
		(async()=>{
			if(this.#editor_elem.lastElementChild !== null){
				this.last_child = this.#editor_elem.lastElementChild;
				if(this.last_child.tagName === tag_name){
					this.#parent_el = this.last_child;
					MDFT.appendBr(this.#parent_el,this.#br_el)
					MDFT.removeBlockActive(this.#parent_el,'data-block_active');
					MDFT.removeLastBr(this.#parent_el,this.#br_el);
				}
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_elem,this.#pre_output,this.#pre_outer);
		})();
	};
}
export const blockElOffActions = async (obj_args)=>{
	return new BlockElOffActions(obj_args);
}