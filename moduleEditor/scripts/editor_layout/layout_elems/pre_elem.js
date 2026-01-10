//moduleEditor/layout_elems/pre_elem.js
import * as MFT from './../../factory/module_functions.js';
export function preElem(obj_args){
	const{elem_id = null,elem_classes,tab_size} = obj_args;
	const create_elem = MFT.createElemNA('pre');	
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	create_elem.style.tabSize = tab_size;
	MFT.addClassesNA(create_elem,elem_classes);
	return create_elem;
};