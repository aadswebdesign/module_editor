// editor_layout/layout_elems/items_wrapper_elem.js
import * as MFT from './../../factory/module_functions.js';
export function itemsWrapperElem(obj_args){
	const{elem_id = null,elem_classes} = obj_args;
	const create_elem = MFT.createElemNA('items-wrapper');	
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	MFT.addClassesNA(create_elem,elem_classes);
	return create_elem;
};