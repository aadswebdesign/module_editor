//scripts/editor_logic/callbacks/sub_actions_functions.js
import * as MC from './../../../factory/module_classes.js';
import * as MFT from './../../../factory/module_functions.js';
export const headings_on_action = (...args) =>{
	(async()=> {
		const [on_cb,mdl_name,tag_name,create_elem,el_construct] = args;
		const added_constructs = await MFT.createObjects('added_objects',{
			mdl_name: mdl_name,tag_name: tag_name,create_elem: create_elem,
		});
		await on_cb({...added_constructs,...el_construct});
	})();
};
export const headings_off_action = (...args)=>{
	(async()=> {
		const [off_cb,off_set,el_construct] = args;
		const added_constructs =  await MFT.createObjects('added_objects',{
			mdl_name: off_set[0],tag_name: off_set[1],
		});
		await off_cb({...added_constructs,...el_construct});
	})();		
};
export function items_ruler_action(...args){
	const [cb_off,el_construct,tag_names,items_ruler] = args;
	const [h1,h2,h3,h4,h5,h6] = tag_names;
	(async()=> {
		async function events_manipulator(evt){
			evt.preventDefault();
			const evt_parent = evt.target.parentElement;
			const headings_ctn = evt_parent.firstElementChild;
			const items = MFT.uniqueArray(headings_ctn.children);
			let added_constructs;
			for(const item of items){
				if(!item.hasAttribute('data-on')){
					if(item.id === 'h1_block'){
						added_constructs = await MFT.createObjects('added_obj',{mdl_name:'h1_mdl', tag_name: h1,});
					}
					if(item.id === 'h2_block'){
						added_constructs = await MFT.createObjects('added_obj',{mdl_name:'h2_mdl',tag_name: h2,});
					}
					if(item.id === 'h3_block'){
						added_constructs = await MFT.createObjects('added_obj',{mdl_name:'h3_mdl',tag_name: h3,});
					}
					if(item.id === 'h4_block'){
						added_constructs = await MFT.createObjects('added_obj',{mdl_name:'h4_mdl',tag_name: h4,});
					}
					if(item.id === 'h5_block'){
						added_constructs = await MFT.createObjects('added_obj',{mdl_name:'h5_mdl',tag_name: h5,});
					}
					if(item.id === 'h6_block'){
						added_constructs = await MFT.createObjects('added_obj',{mdl_name:'h6_mdl',tag_name: h6,});
					}
				}
				await cb_off({...added_constructs,...el_construct});
			}
		}
		await MC.clickEventHandler(items_ruler,await events_manipulator);
	})();
};