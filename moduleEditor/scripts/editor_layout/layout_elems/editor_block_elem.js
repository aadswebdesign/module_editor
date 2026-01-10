//moduleEditor/layout_elems/editor_block_elem.js
import * as MFT from './../../factory/module_functions.js';
export function editorBlockElem(obj_args){
	const{elem_id = null,elem_classes} = obj_args;
	const create_elem = MFT.createElemNA('editor-block');	
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	MFT.addClassesNA(create_elem,elem_classes);
	return create_elem;
};