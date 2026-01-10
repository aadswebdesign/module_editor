// editor_layout/layout_elems/items_ctn_elem.js
import * as MFT from './../../factory/module_functions.js';
export function itemsCtnElem(obj_args){
	const{elem_id = null,elem_classes} = obj_args;
	const create_elem = MFT.createElemNA('items-ctn');	
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	MFT.addClassesNA(create_elem,elem_classes);
	return create_elem;
};