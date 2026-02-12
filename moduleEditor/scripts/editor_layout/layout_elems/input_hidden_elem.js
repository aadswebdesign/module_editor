//moduleEditor/layout_elems/input_hidden_elem.js
import * as MFT from './../../factory/module_functions.js';
export function inputHiddenElem(obj_args){
	const {elem_id = null,elem_name,elem_classes = null} = obj_args;
	const create_elem = MFT.createElemNA('input');
	create_elem.cloneNode(true);
	create_elem.type = 'hidden';
	create_elem.value = '';
	if(elem_id !== null){
		create_elem.id = elem_id;
		create_elem.name = elem_name ? elem_name : elem_id;
	}
	if(elem_classes !== null) MFT.addClassesNA(create_elem,elem_classes);
	return create_elem;
	//console.table({'inputHiddenElem': obj_args});
}