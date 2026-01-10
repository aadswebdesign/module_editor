//buttons/btn_blocks/h1_block.js
import * as BEE from './../btn_elems_export.js';
export async function h1Block(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'h1-icon';
	const elem_data = {};
	elem_data.block_btn = {};
	elem_data.block_btn.elem_id = 'h1_block';
	elem_data.block_btn.elem_classes = ['heading','block','btn-block','relative'];
	const parent_elem = BEE.btnBlockElem(elem_data.block_btn);
	elem_data.btn = {};
	elem_data.btn.elem_id = 'h1_btn';
	elem_data.btn.elem_classes = ['tb-item','tb-style',icon,'relative'];
	elem_data.btn.elem_title = 'H1';
	const create_btn = BEE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;
}