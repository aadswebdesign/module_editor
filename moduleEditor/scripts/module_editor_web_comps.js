//moduleEditor/module_editor_web_comps.js
import * as ECE from './editor_components/editor_components_export.js';
export const moduleEditorWebComps = async ()=>{
	await Promise.all([
		ECE.btnBlockDefine(),
		ECE.editorBlockDefine(),
		ECE.editorCanvasDefine(),
		ECE.editorCtnDefine(),
		ECE.editorToolbarDefine(),
		ECE.hiddenCtnDefine(),
		ECE.itemsButtonDefine(),
		ECE.itemsCtnDefine(),
		ECE.itemsRulerDefine(),
		ECE.itemsWrapperDefine(),
		ECE.preCtnDefine(),
		ECE.toolbarsCtnDefine(),
	]);
};