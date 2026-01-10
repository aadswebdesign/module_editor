// editor_layout/buttons/btn_elems/button_elem.js
import * as MFT from './../../../factory/module_functions.js';
export function buttonElem(obj_args){
	const{elem_id = null,elem_classes,elem_title} = obj_args;
	const create_elem = MFT.createElemNA('button');	
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	MFT.addClassesNA(create_elem,elem_classes);
	create_elem.type ='button';
	create_elem.title = elem_title;
	return create_elem;
};