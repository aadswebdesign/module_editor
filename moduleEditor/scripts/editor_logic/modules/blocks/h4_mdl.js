//scripts/editor_logic/modules/blocks/h4_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {onOffCallback} from './../../callbacks/on_off_callback.js';
import {blockElOffActions} from './../../actions/block_el_off_actions.js';
import {blockElOnActions} from './../../actions/block_el_on_actions.js';
export const heading4Module = async (...args) =>{
	const[canvas_elem,pre_elem,pre_data,evt_btn]=args;
	const elem_construct = async(...args)=>{
		const [editor_elem] = args;
		const create_elem = await MFT.createElem('h4');
		create_elem.cloneNode(true);
		return await MFT.createObjects('elem_obj',{
			create_elem: create_elem,
			editor_elem: editor_elem,
			mdl_name: 'h4_mdl_single',
			pre_elems:{
				pre_elem: pre_elem,
				pre_output: pre_data.pre_output, 
				pre_outer: pre_data.pre_outer,
			},
			tag_name: 'H4',	 
		});
	};
	const evt_data = await MFT.createObjects('evt_obj',{
		editor_elem: canvas_elem,
		elem_construct: elem_construct,
		evt_btn: evt_btn,
		callback_on: blockElOnActions,
		callback_off: blockElOffActions,
	});
	await onOffCallback(evt_data);
}
