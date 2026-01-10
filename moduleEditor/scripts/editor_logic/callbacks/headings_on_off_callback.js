//moduleEditor/mdl_setups/callbacks/headings_on_off_callback.js
import * as MC from './../../factory/module_classes.js';
import * as MFT from './../../factory/module_functions.js';
const heading_off_assembly = async (...args) => {
	const [off_cb,mdl_name,tag_name,el_construct] = args;
	const added_constructs = {mdl_name: mdl_name,tag_name: tag_name,};
	await off_cb({...added_constructs,...el_construct});
};
const heading_on_assembly = async (...args) => {
	const [on_cb,mdl_name,tag_name,create_elem,el_construct] = args;
	const added_constructs = {mdl_name: mdl_name,tag_name: tag_name,create_elem: create_elem,};
	await on_cb({...added_constructs,...el_construct});
};
class HeadingsOnOffCallback{
	#editor_elem;
	#elem_construct;
	#headings_on_cst;
	#headings_off_cst;
	#headings_wrapper;
	#headings_ctn;
	#items_ruler;
	constructor(obj_args){
		const {callback_on,callback_off,editor_elem,elem_construct,headings_ctn,tag_names} = obj_args;
		this.#editor_elem = editor_elem;
		this.#elem_construct = elem_construct;
		this.#headings_on_cst = callback_on;
		this.#headings_off_cst = callback_off;
		this.#headings_wrapper = headings_ctn;
		this.#headings_ctn = this.#headings_wrapper.firstElementChild;
		this.#items_ruler = this.#headings_wrapper.lastElementChild;
		this.hc_children = MFT.uniqueArray(this.#headings_ctn.children);
		(async ()=>{
			const el_construct = await this.#elem_construct(this.#editor_elem);
			this.headings_off_cb(el_construct);
			this.items_ruler_cb(el_construct);
			this.headings_on_cb(el_construct);
		})();
	}
	headings_on_cb = (el_construct)=>{
		const [h1_block,h2_block,h3_block,h4_block,h5_block,h6_block] = this.hc_children;
		const hd_on = this.#headings_on_cst;
		const hd_off = this.#headings_off_cst;
		const headings_ctn = this.#headings_ctn;
		(async ()=>{
			async function events_manipulator(evt){
				if(h1_block.hasAttribute('data-on')){
					const create_elem = await MFT.createElem('h1');
					await heading_on_assembly(hd_on,'h1_mdl','H1',create_elem,el_construct);
				}
			};
			await MC.clickEventHandler(h1_block,await events_manipulator);
		})();
		(async ()=>{
			async function events_manipulator(evt){
				if(h2_block.hasAttribute('data-on')){
					const create_elem = await MFT.createElem('h2');
					await heading_on_assembly(hd_on,'h2_mdl','H2',create_elem,el_construct);
				}
			};
			await MC.clickEventHandler(h2_block,await events_manipulator);
		})();
		(async ()=>{
			async function events_manipulator(evt){
				if(h3_block.hasAttribute('data-on')){
					const create_elem = await MFT.createElem('h3');
					await heading_on_assembly(hd_on,'h3_mdl','H3',create_elem,el_construct);
				}
			};
			await MC.clickEventHandler(h3_block,await events_manipulator);
		})();
		(async ()=>{
			async function events_manipulator(evt){
				if(h4_block.hasAttribute('data-on')){
					const create_elem = await MFT.createElem('h4');
					await heading_on_assembly(hd_on,'h4_mdl','H4',create_elem,el_construct);
				}
			};
			await MC.clickEventHandler(h4_block,await events_manipulator);
		})();
		(async ()=>{
			async function events_manipulator(evt){
				if(h5_block.hasAttribute('data-on')){
					const create_elem = await MFT.createElem('h5');
					await heading_on_assembly(hd_on,'h5_mdl','H5',create_elem,el_construct);
				}
			};
			await MC.clickEventHandler(h5_block,await events_manipulator);
		})();
		(async ()=>{
			async function events_manipulator(evt){
				if(h6_block.hasAttribute('data-on')){
					const create_elem = await MFT.createElem('h6');
					await heading_on_assembly(hd_on,'h6_mdl','H6',create_elem,el_construct);
				}
			};
			await MC.clickEventHandler(h6_block,await events_manipulator);
		})();
	};
	headings_off_cb = (el_construct)=>{
		const [h1_block,h2_block,h3_block,h4_block,h5_block,h6_block] = this.hc_children;
		const hd_on = this.#headings_on_cst;
		const hd_off = this.#headings_off_cst;
		const headings_ctn = this.#headings_ctn;
		(async ()=>{
			async function events_manipulator(evt){
				if(h1_block.hasAttribute('data-on')){
					(async ()=>{
						await heading_off_assembly(hd_off,'h2_mdl','H2',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h3_mdl','H3',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h4_mdl','H4',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h5_mdl','H5',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h6_mdl','H6',el_construct);
					})();
				}
			};
			await MC.clickEventHandler(h1_block,await events_manipulator);
		})();
		(async ()=>{
			async function events_manipulator(evt){
				if(h2_block.hasAttribute('data-on')){
					(async ()=>{
						await heading_off_assembly(hd_off,'h1_mdl','H1',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h3_mdl','H3',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h4_mdl','H4',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h5_mdl','H5',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h6_mdl','H6',el_construct);
					})();
				}
			};
			await MC.clickEventHandler(h2_block,await events_manipulator);
		})();
		(async ()=>{
			async function events_manipulator(evt){
				if(h3_block.hasAttribute('data-on')){
					(async ()=>{
						await heading_off_assembly(hd_off,'h1_mdl','H1',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h2_mdl','H2',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h4_mdl','H4',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h5_mdl','H5',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h6_mdl','H6',el_construct);
					})();
				}
			};
			await MC.clickEventHandler(h3_block,await events_manipulator);
		})();
		(async ()=>{
			async function events_manipulator(evt){
				if(h4_block.hasAttribute('data-on')){
					(async ()=>{
						await heading_off_assembly(hd_off,'h1_mdl','H1',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h2_mdl','H2',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h3_mdl','H3',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h5_mdl','H5',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h6_mdl','H6',el_construct);
					})();
				}
			};
			await MC.clickEventHandler(h4_block,await events_manipulator);
		})();
		(async ()=>{
			async function events_manipulator(evt){
				if(h5_block.hasAttribute('data-on')){
					(async ()=>{
						await heading_off_assembly(hd_off,'h1_mdl','H1',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h2_mdl','H2',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h3_mdl','H3',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h4_mdl','H4',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h6_mdl','H6',el_construct);
					})();
				}
			};
			await MC.clickEventHandler(h5_block,await events_manipulator);
		})();
		(async ()=>{
			async function events_manipulator(evt){
				if(h6_block.hasAttribute('data-on')){
					(async ()=>{
						await heading_off_assembly(hd_off,'h1_mdl','H1',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h2_mdl','H2',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h3_mdl','H3',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h4_mdl','H4',el_construct);
					})();
					(async ()=>{
						await heading_off_assembly(hd_off,'h5_mdl','H5',el_construct);
					})();
				}
			};
			await MC.clickEventHandler(h6_block,await events_manipulator);
		})();
	};
	items_ruler_cb = (el_construct)=>{
		(async ()=>{
			const items_ruler = this.#items_ruler; 
			const hd_off = this.#headings_off_cst;
			async function events_manipulator(evt){
				evt.preventDefault();
				const evt_parent = evt.target.parentElement;
				const headings_ctn = evt_parent.firstElementChild;
				const items = MFT.uniqueArray(headings_ctn.children);
				let added_constructs;
				for(const item of items){
					if(!item.hasAttribute('data-on')){
						if(item.id === 'h1_block'){
							added_constructs = {mdl_name:'h1_mdl',tag_name:'H1'};
						}
						if(item.id === 'h2_block'){
							added_constructs = {mdl_name:'h2_mdl',tag_name:'H2'};
						}
						if(item.id === 'h3_block'){
							added_constructs = {mdl_name:'h3_mdl',tag_name:'H3'};
						}
						if(item.id === 'h4_block'){
							added_constructs = {mdl_name:'h4_mdl',tag_name:'H4'};
						}
						if(item.id === 'h5_block'){
							added_constructs = {mdl_name:'h5_mdl',tag_name:'H5'};
						}
						if(item.id === 'h6_block'){
							added_constructs = {mdl_name:'h6_mdl',tag_name:'H6'};
						}
						await hd_off({...added_constructs,...el_construct});
					}
				}
			}
			await MC.clickEventHandler(items_ruler,await events_manipulator);
		})();		
	};
}
export const headingsOnOffCallback = async (obj_args)=>{
	return new HeadingsOnOffCallback(obj_args);
};