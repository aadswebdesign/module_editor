//scripts/editor_logic/modules/blocks/headings_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {headingsOnOffCallback} from './../../callbacks/headings_on_off_callback.js'; 
import {blockElHeadingsOffActions} from './../../actions/block_el_headings_off_actions.js';
import {blockElHeadingsOnActions} from './../../actions/block_el_headings_on_actions.js';
export const headingsModule = async (obj_args) =>{
	const {canvas_elem,pre_elem,pre_data,headings_ctn} = obj_args;
	const elem_construct = async(...args)=>{
		const [editor_elem] = args;
		return await MFT.createObjects('elem_obj',{
			editor_elem: editor_elem,
			pre_elems:{
				pre_elem: pre_elem,
				pre_output: pre_data.pre_output, 
				pre_outer: pre_data.pre_outer,
			},
		});
	}	
	
	const evt_data = await MFT.createObjects('evt_obj',{
		callback_on: blockElHeadingsOnActions,
		callback_off: blockElHeadingsOffActions,
		editor_elem: canvas_elem,
		elem_construct: elem_construct,
		headings_ctn: headings_ctn[0],
		tag_names: ['H1','H2','H3','H4','H5','H6'],
	});
	await headingsOnOffCallback(evt_data);	
}