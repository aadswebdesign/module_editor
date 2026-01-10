//scripts/editor_logic/modules/selectors/underline_select_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {onOnOffCallback} from './../../callbacks/on_onoff_callback.js';
import {selectsOnActions} from './../../actions/selects_on_actions.js';
export const underlineSelectModule = async (...args) =>{
	const[canvas_elem,pre_elem,pre_data,evt_btn]=args;
	const elem_construct = async(...args)=>{
		const [editor_elem] = args;
		const create_elem = await MFT.createElem('u');
		create_elem.cloneNode(true);
		return await MFT.createObjects('elem_obj',{
			create_elem: create_elem,
			editor_elem: editor_elem,
			mdl_name: 'underline_select_mdl',
			pre_elems:{
				pre_elem: pre_elem,
				pre_output: pre_data.pre_output, 
				pre_outer: pre_data.pre_outer,
			},
			tag_name: 'U',	 
		});
	};
	const evt_data = await MFT.createObjects('evt_obj',{
		editor_elem: canvas_elem,
		elem_construct: elem_construct,
		evt_btn: evt_btn,
		callback_on: selectsOnActions,
	});
	await onOnOffCallback(evt_data);
}