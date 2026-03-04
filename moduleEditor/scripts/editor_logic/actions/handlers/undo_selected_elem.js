//scripts/editor_logic/actions/handlers/undo_selected_elem.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class UndoSelectedElem{
	#parent_el;
	#selection;
	constructor(...args){
		const [parent_el] = args;
		const node_ids = [];
		this.#parent_el = parent_el ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				this.#selection = window.getSelection();
				if (this.#selection.rangeCount > 0) {
					const range = this.#selection.getRangeAt(0);
					const end_node = range.endContainer;
					const unwrap_node = end_node.parentElement; 
					if(unwrap_node.classList.contains('inliner')){
						await MFT.unwrapNodeSelect(unwrap_node);
					}
				}
			}
		})();
		/*
		todo
		try{
			
		}catch(log){
			console.log('Make sure that you select a range that is exactly from the beginning to the end of the node!');
		}
		*/
		//console.table({'UndoSelectedElem': args});
	}
}
export const  undoSelectedElem = async (...args)=>{
	return new UndoSelectedElem(...args);
}