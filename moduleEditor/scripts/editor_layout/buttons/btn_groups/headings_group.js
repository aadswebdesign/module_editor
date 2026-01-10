//buttons/btn_groups/headings_group.js
import * as MFT from './../../../factory/module_functions.js';
import * as BEE from './../btn_elems_export.js';
import * as LEE from './../../layout_elems_export.js';  
import * as BBE from './../btn_blocks_export.js';
export async function headingsGroup(...args){
	const [h1_icon,h2_icon,h3_icon,h4_icon,h5_icon,h6_icon] = args;
	const elem_objects_two = await MFT.createObjects('group_objects_two',{
		wrapper_two_data:{
			elem_id: null,
			elem_classes: ['block-group','headings','relative','display-flex'], 
		},
		items_ctn_data:{
			elem_id: null,
			elem_classes: ['headings-ctn','relative','display-flex'], 
		},
		items_ruler_data:{
			elem_id: null,
			elem_classes: ['headings-close','relative','uni-font','arrow-two-way-y-uc'],
			elem_title:'Swipe for more!',			
		},
	});
	const wrapper_two = await LEE.itemsWrapperElem(elem_objects_two.wrapper_two_data) ?? null;
	if(wrapper_two !== null){
		const items_ctn = await LEE.itemsCtnElem(elem_objects_two.items_ctn_data) ?? null;
		if(items_ctn !== null){
			wrapper_two.appendChild(items_ctn);
			items_ctn.appendChild(await BBE.h1Block(h1_icon));
			items_ctn.appendChild(await BBE.h2Block(h2_icon));
			items_ctn.appendChild(await BBE.h3Block(h3_icon));
			items_ctn.appendChild(await BBE.h4Block(h4_icon));
			items_ctn.appendChild(await BBE.h5Block(h5_icon));
			items_ctn.appendChild(await BBE.h6Block(h6_icon));
		}
		const items_ruler = await LEE.itemsRulerElem(elem_objects_two.items_ruler_data) ?? null;
		if(items_ruler !== null){
			wrapper_two.appendChild(items_ruler);
		}
	}
	return wrapper_two;
}
