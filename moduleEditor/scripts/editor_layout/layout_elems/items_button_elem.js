// editor_layout/layout_elems/items_button_elem.js
import * as MFT from './../../factory/module_functions.js';
export function itemsButtonElem(obj_args){
	const{elem_id = null,elem_classes,elem_title,data_attribute = false} = obj_args;
	const create_elem = MFT.createElemNA('items-button');	
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	MFT.addClassesNA(create_elem,elem_classes);
	if(data_attribute === true){
		create_elem.setAttribute('data-tb_open','');
	}
	return create_elem;
};