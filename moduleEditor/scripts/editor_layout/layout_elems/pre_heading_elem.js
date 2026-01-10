//moduleEditor/layout_elems/pre_heading_elem.js
import * as MFT from './../../factory/module_functions.js';
export function preHeadingElem(obj_args){
	const{elem_id = null,elem_classes,text_content} = obj_args;
	const create_elem = MFT.createElemNA('p');	
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	create_elem.textContent = text_content;
	MFT.addClassesNA(create_elem,elem_classes);
	return create_elem;
};