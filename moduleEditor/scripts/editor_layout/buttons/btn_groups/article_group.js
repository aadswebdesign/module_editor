//buttons/btn_groups/article_group.js
import * as MFT from './../../../factory/module_functions.js';
import * as BEE from './../btn_elems_export.js';
import * as LEE from './../../layout_elems_export.js';  
import * as BBE from './../btn_blocks_export.js';
export async function articleGroup(...args){
	const [art_icon,art_hdr_icon,art_main_icon,art_ftr_icon] = args;
	const elem_objects = await MFT.createObjects('group_objects',{
		wrapper_one_data:{
			elem_id: null,
			elem_classes: ['block-group','articles-headings','relative','display-flex'],
		},
		items_ctn_outer_data:{
			elem_id: null,
			elem_classes: ['outer','relative','display-none'],
		},
		items_btn_data:{
			elem_id: null,
			elem_classes: ['pseudo','triangle-right-icon-editor-8x8-white','relative'],
			elem_title: 'open this for the sub elements',
			
		},
		items_ctn_inner_data:{
			elem_id: null,
			elem_classes: ['inner','relative','display-none'], 
		},
	});
	const wrapper_one = await LEE.itemsWrapperElem(elem_objects.wrapper_one_data) ?? null;
	if(wrapper_one !== null){
		wrapper_one.appendChild(await BBE.articleBlock(art_icon));
		const items_ctn_outer =  await LEE.itemsCtnElem(elem_objects.items_ctn_outer_data) ?? null;
		if(items_ctn_outer !== null){
			wrapper_one.appendChild(items_ctn_outer);
			const items_btn = await LEE.itemsButtonElem(elem_objects.items_btn_data) ?? null;
			if(items_btn !== null){
				items_ctn_outer.appendChild(items_btn);
			}
			const items_ctn_inner = await LEE.itemsCtnElem(elem_objects.items_ctn_inner_data) ?? null;
			if(items_ctn_inner !== null){
				items_ctn_outer.appendChild(items_ctn_inner);
				items_ctn_inner.appendChild(await BBE.articleHeaderBlock(art_hdr_icon));
				items_ctn_inner.appendChild(await BBE.articleMainBlock(art_main_icon));
				items_ctn_inner.appendChild(await BBE.articleFooterBlock(art_ftr_icon));
			}
		}
	}
	
	//console.log('wrapper_outer:',wrapper_outer);
	
	return wrapper_one;
	
}