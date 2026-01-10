//buttons/btn_blocks/hr_block.js
import * as BEE from './../btn_elems_export.js';
export async function hrBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'hr-icon';
	const elem_data = {};
	elem_data.block_btn = {};
	elem_data.block_btn.elem_id = 'hr_block';
	elem_data.block_btn.elem_classes = ['block','on-off','btn-block','relative'];
	const parent_elem = BEE.btnBlockElem(elem_data.block_btn);
	elem_data.btn = {};
	elem_data.btn.elem_id = 'hr_btn';
	elem_data.btn.elem_classes = ['tb-item','tb-style',icon,'relative'];
	elem_data.btn.elem_title = 'Divider';
	const create_btn = BEE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;
}