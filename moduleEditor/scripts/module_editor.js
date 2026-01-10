// moduleEditor/modules_editor.js
import * as MFT from './factory/module_functions.js';
import {editorLayout} from './editor_layout/editor_layout.js';
import {editorLogic} from './editor_logic/editor_logic.js';
export async function moduleEditor(obj_args){
	await editorLayout(obj_args);
	await editorLogic(obj_args);
	
}