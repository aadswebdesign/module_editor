//scripts/editor_logic/modules/em_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {onOffCallback} from './../../callbacks/on_off_callback.js';
import {inlineElOffActions} from './../../actions/inline_el_off_actions.js';
import {inlineElOnActions} from './../../actions/inline_el_on_actions.js';
export const emModule = async (...args) =>{
	const[canvas_elem,pre_elem,pre_data,evt_btn]=args;
	const elem_construct = async(...args)=>{
		const [editor_elem] = args;
		const create_elem = await MFT.createElem('em');
		create_elem.cloneNode(true);
		return await MFT.createObjects('elem_obj',{
			create_elem: create_elem,
			editor_elem: editor_elem,
			mdl_name: 'em_mdl',
			pre_elems:{
				pre_elem: pre_elem,
				pre_output: pre_data.pre_output, 
				pre_outer: pre_data.pre_outer,
			},
			tag_name: 'EM',	 
		});
	};
	const evt_data = await MFT.createObjects('evt_obj',{
		editor_elem: canvas_elem,
		elem_construct: elem_construct,
		evt_btn: evt_btn,
		callback_on: inlineElOnActions,
		callback_off: inlineElOffActions,
	});
	await onOffCallback(evt_data);
};