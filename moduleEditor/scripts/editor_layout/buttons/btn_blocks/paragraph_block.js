//buttons/btn_blocks/bold_block.js
import * as BEE from './../btn_elems_export.js';
export async function paragraphBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'paragraph-icon';
	const elem_data = {};
	elem_data.block_btn = {};
	elem_data.block_btn.elem_id = 'p_block';
	elem_data.block_btn.elem_classes = ['block','btn-block','relative'];
	const parent_elem = BEE.btnBlockElem(elem_data.block_btn);
	elem_data.btn = {};
	elem_data.btn.elem_id = 'p_btn';
	elem_data.btn.elem_classes = ['tb-item','tb-style',icon,'relative'];
	elem_data.btn.elem_title = 'Paragraph';
	const create_btn = BEE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;
}