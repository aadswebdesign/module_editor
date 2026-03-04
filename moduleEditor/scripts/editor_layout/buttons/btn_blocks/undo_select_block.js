//buttons/btn_blocks/undo_select_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as BEE from './../btn_elems_export.js';
export async function undoSelectBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'undo-select-icon';
	const elem_data = await MFT.createObjects('elem_data_obj',{});
	elem_data.block_btn = {};
	elem_data.block_btn.elem_id = 'undo_select_block';
	elem_data.block_btn.elem_classes = ['select','on-off','btn-block','relative'];
	const parent_elem = BEE.btnBlockElem(elem_data.block_btn);
	elem_data.btn = await MFT.createObjects('elem_data_btn_obj',{});
	elem_data.btn.elem_id = 'undo_select_btn';
	elem_data.btn.elem_classes = ['tb-item','tb-style',icon,'relative'];
	elem_data.btn.elem_title = 'Undo Select';
	const create_btn = BEE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;	
}