// scripts/editor_logic/modules/modules_collect.js
import * as MFT from './../../factory/module_functions.js';
import * as ME from './modules_export.js';
class ModulesCollect{
	#block_elem;
	#canvas_elem;
	#pre_elem;
	#block_btns;
	#block_ids;
	constructor(obj_args){
		const {base_data,btn_blocks} = obj_args;
		const {base_settings,block_elem} = base_data;
		const {pre_data}= base_settings;
		const {pre_output, pre_outer} = pre_data;
		this.#block_elem = block_elem[0] ?? null;
		this.#block_btns = btn_blocks ?? null;
		(async()=> {
			this.#block_ids = await MFT.createObjects('block_ids',{});
			if(this.#block_elem !== null){
				const get_canvas = await MFT.getTagNames('EDITOR-CANVAS',this.#block_elem);
				const get_pre = await MFT.getTagNames('PRE',this.#block_elem);
				this.#canvas_elem = get_canvas[0];
				this.#pre_elem = get_pre[0];
				if(this.#block_btns !== null){
					for(const block_btn of this.#block_btns){
						const block_id = block_btn.id;
						this.#block_ids[block_id] = block_btn;
					}
				}
				//headings_wrapper
				const {b_select_block,em_select_block,mark_select_block,	strong_select_block,u_select_block,b_block,em_block,	mark_block,strong_block,u_block,article_block,article_header_block,article_main_block,article_footer_block,h1_block,h2_block,h3_block,h4_block,h5_block,h6_block,hr_block,p_block} = this.#block_ids;
				/** BLOCK ELEMS*/
				if(article_block !== undefined)
				await ME.articleModule(this.#canvas_elem,this.#pre_elem,pre_data,article_block);
				if(article_header_block !== undefined)
				await ME.articleHeaderModule(this.#canvas_elem,this.#pre_elem,pre_data,article_header_block);
				if(article_main_block !== undefined)
				await ME.articleMainModule(this.#canvas_elem,this.#pre_elem,pre_data,article_main_block);
				if(article_footer_block !== undefined)
				await ME.articleFooterModule(this.#canvas_elem,this.#pre_elem,pre_data,article_footer_block);
				if(h1_block !== undefined){
					if(!h1_block.classList.contains('heading'))
					await ME.heading1Module(this.#canvas_elem,this.#pre_elem,pre_data,h1_block);
				}
				if(h2_block !== undefined){
					if(!h2_block.classList.contains('heading'))
					await ME.heading2Module(this.#canvas_elem,this.#pre_elem,pre_data,h2_block);
				}
				if(h3_block !== undefined){
					if(!h3_block.classList.contains('heading'))
					await ME.heading3Module(this.#canvas_elem,this.#pre_elem,pre_data,h3_block);
				}
				if(h4_block !== undefined){
					if(!h4_block.classList.contains('heading'))
					await ME.heading4Module(this.#canvas_elem,this.#pre_elem,pre_data,h4_block);	
				}
				if(h5_block !== undefined){
					if(!h5_block.classList.contains('heading'))
					await ME.heading5Module(this.#canvas_elem,this.#pre_elem,pre_data,h5_block);	
				}
				if(h6_block !== undefined){
					if(!h6_block.classList.contains('heading'))
					await ME.heading6Module(this.#canvas_elem,this.#pre_elem,pre_data,h6_block);
				}
				//headings
				if(h1_block !== undefined && h2_block !== undefined && h3_block !== undefined && h4_block !== undefined && h5_block !== undefined && h6_block !== undefined ){
					if(h1_block.classList.contains('heading') && h2_block.classList.contains('heading') && h3_block.classList.contains('heading') && h4_block.classList.contains('heading') && h5_block.classList.contains('heading') && h6_block.classList.contains('heading')){
						const headings_data = await MFT.createObjects('headings_objects',{
							canvas_elem: this.#canvas_elem,
							pre_elem: this.#pre_elem,
							pre_data,
							headings_ctn : await MFT.getClassHelper('block-group headings'),
							heading_ids:[h1_block,h2_block,h3_block,h4_block,h5_block,h6_block],
						});
						await ME.headingsModule(headings_data);
					}					
				}
				//--
				if(hr_block !== undefined)
				await ME.hrModule(this.#canvas_elem,this.#pre_elem,pre_data,hr_block);
				if(p_block !== undefined)
				await ME.paragraphModule(this.#canvas_elem,this.#pre_elem,pre_data,p_block);
				
				/** INLINE ELEMS*/
				if(b_block !== undefined)
				await ME.boldModule(this.#canvas_elem,this.#pre_elem,pre_data,b_block);
				if(em_block !== undefined)
				await ME.emModule(this.#canvas_elem,this.#pre_elem,pre_data,em_block);
				if(mark_block !== undefined)
				await ME.markModule(this.#canvas_elem,this.#pre_elem,pre_data,mark_block);
				if(strong_block !== undefined)
				await ME.strongModule(this.#canvas_elem,this.#pre_elem,pre_data,strong_block);
				if(u_block !== undefined)
				await ME.underlineModule(this.#canvas_elem,this.#pre_elem,pre_data,u_block);

				/** SELECT ELEMS*/
				if(b_select_block !== undefined)
				await ME.boldSelectModule(this.#canvas_elem,this.#pre_elem,pre_data,b_select_block);
				if(em_select_block !== undefined)
				await ME.emSelectModule(this.#canvas_elem,this.#pre_elem,pre_data,em_select_block);
				if(mark_select_block !== undefined)
				await ME.markSelectModule(this.#canvas_elem,this.#pre_elem,pre_data,mark_select_block);
				if(strong_select_block !== undefined)
				await ME.strongSelectModule(this.#canvas_elem,this.#pre_elem,pre_data,strong_select_block);
				if(u_select_block !== undefined)
				await ME.underlineSelectModule(this.#canvas_elem,this.#pre_elem,pre_data,u_select_block);
			}
		})();
	}
}
export const modulesCollect = async(obj_args)=>{
	return new ModulesCollect(obj_args);
};