// editor_layout/layout_elems/items_ruler_elem.js
import * as MFT from './../../factory/module_functions.js';
export function itemsRulerElem(obj_args){
	const{elem_id = null,elem_classes,elem_title = null} = obj_args;
	const create_elem = MFT.createElemNA('items-ruler');create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	MFT.addClassesNA(create_elem,elem_classes);
	if(elem_title !== null) create_elem.title = elem_title;
	return create_elem;
};