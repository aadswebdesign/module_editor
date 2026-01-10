//moduleEditor/layout_elems/editor_canvas_elem.js
import * as MFT from './../../factory/module_functions.js';
export function editorCanvasElem(obj_args){
	const {elem_id = null,elem_classes} = obj_args;
	const create_elem = MFT.createElemNA('editor-canvas');	
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	create_elem.contentEditable = 'plaintext-only';
	MFT.addClassesNA(create_elem,elem_classes);
	return create_elem;
};