//moduleEditor/scripts/editor_logic/events/toolbar_events.js
import * as MFT from './../../factory/module_functions.js';
import * as MC from './../../factory/module_classes.js';
import {buttonsEvents} from './buttons_events.js';
class ToolbarEvents{
	#edt_toolbars;
	#tbs_ctn;
	constructor(...args){
		const [tbs_ctn] = args;
		(async()=> {
			this.#tbs_ctn = tbs_ctn ?? null;
			if(this.#tbs_ctn.children.length > 0){
				this.#edt_toolbars = MFT.uniqueArray(this.#tbs_ctn.children);
				for(const edt_tb of this.#edt_toolbars){
					if(edt_tb.children.length > 0){
						const items_wrappers = MFT.uniqueArray(edt_tb.children);
						for(const item_wrapper of items_wrappers){
							const items_btn = item_wrapper.firstElementChild;
							const items_ctn = item_wrapper.lastElementChild;
							const events_manipulator = async (event)=>{
								event.preventDefault();
								await MFT.dataTbOpenToggle(items_btn);
								if(!items_btn.hasAttribute('data-tb_open')){
									await MFT.replaceClass(items_btn, 'triangle-right-icon-editor-8x8','triangle-left-icon-editor-8x8');
									await MFT.replaceClass(items_ctn, 'display-none','display-flex');
									items_btn.title = 'open this';
									console.log('not open: ',items_btn);
									
								}else{
									console.log('open: ',items_btn);
									await MFT.replaceClass(items_btn, 'triangle-left-icon-editor-8x8','triangle-right-icon-editor-8x8');
									await MFT.replaceClass(items_ctn, 'display-flex','display-none');
									items_btn.title = 'close this';
								}
							};
							await MC.clickEventHandler(items_btn,await events_manipulator);
						}
					}
				}
			}
		})();
			//(async()=> {})();			
			(async()=> {
				for(const edt_tb of this.#edt_toolbars){
					if(edt_tb.children.length > 0){
						const items_wrappers = MFT.uniqueArray(edt_tb.children);
						for(const item_wrapper of items_wrappers){
							const items_ctn = item_wrapper.lastElementChild;
							const events_manipulator = async (event)=>{
								event.preventDefault;
								if(items_ctn.offsetWidth === 160){
									await MFT.addClass(items_ctn,'max-width');
								}else{
									await MFT.removeClass(items_ctn,'max-width');
								}
							};
							await MC.clickEventHandler(item_wrapper,await events_manipulator);
						}
					}
				}
			})();	
			(async()=> {
				for(const edt_tb of this.#edt_toolbars){
					const init_btns = await MFT.createObjects('btns_obj',{
						group_one: await MFT.getClassHelper('block-group articles-headings',edt_tb), 
						group_two: await MFT.getClassHelper('block-group headings',edt_tb), 
						block_btns: await MFT.getClassHelper('block btn-block',edt_tb),
						heading_btns: await MFT.getClassHelper('heading btn-block',edt_tb),
						inline_btns: await MFT.getClassHelper('inline btn-block',edt_tb),
						select_btns: await MFT.getClassHelper('select btn-block',edt_tb),
					});
					await buttonsEvents(init_btns)//
					
				}
			})();
		
		//(async()=> {})().then(()=>{}).then(()=>{});
	}
}
export const toolbarEvents = async(...args)=>{
	new ToolbarEvents(...args);
}