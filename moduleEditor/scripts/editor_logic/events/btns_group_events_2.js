//moduleEditor/scripts/editor_logic/events/btns_group_events_2.js
import * as MFT from './../../factory/module_functions.js';
import * as MC from './../../factory/module_classes.js';
class BtnsGroupEvents2{
	#group_two;
	constructor(...args){
		const [group_two] = args;
		this.#group_two = group_two ?? null;
		(async()=> {
			if(this.#group_two !== null){
				if(this.#group_two.length > 0){
					const items_ctn = this.#group_two[0].firstElementChild;
					const items_ruler = this.#group_two[0].lastElementChild; 
					this.group_two_on_actions(items_ctn,items_ruler);
					this.group_two_off_actions(items_ctn,items_ruler);
					this.group_two_actions(items_ctn,items_ruler);
				}
			}		
		})();
	}
	group_two_actions = (...args)=>{
		const[items_ctn,items_ruler] = args;
		(async()=> {
			const events_manipulator = async (evt)=>{
				evt.preventDefault();	
				if(items_ctn.children.length > 0){
					const items_children = MFT.uniqueArray(items_ctn.children);	
					for (const ctn_item of items_children){
						if(ctn_item.hasAttribute('data-on')){
							ctn_item.removeAttribute('data-on');
							items_ruler.innerText = '';
							items_ruler.title = 'Swipe for more!';
							items_ruler.style.cursor = 'default';
						}					
					}
				}	
			}
			await MC.clickEventHandler(items_ruler,await events_manipulator,true);
		})();		
	};
	group_two_off_actions = (...args)=>{
		const[items_ctn,items_ruler] = args;
		(async()=> {
			const events_manipulator = async (evt)=>{
				evt.preventDefault();
				const evt_parent = evt.target.parentElement;
				if (evt_parent.classList.contains('heading')){
					const items = MFT.uniqueArray(items_ctn.children);
					for(const item of items){
						item.removeAttribute('data-on');
						items_ruler.innerText = 'x';
						items_ruler.title = 'Close Buttons Left';
						items_ruler.style.cursor = 'pointer';
					}
				}
			}
			await MC.clickEventHandler(items_ctn,await events_manipulator,true);			
		})();
	};
	group_two_on_actions = (...args)=>{
		const[items_ctn,items_ruler] = args;
		(async()=> {
			if(items_ctn.children.length > 0){
				const items_children = MFT.uniqueArray(items_ctn.children)
				for (const ctn_item of items_children){
					const events_manipulator = async (event)=>{
						event.preventDefault();
						await MFT.dataOnToggle(ctn_item);
					};
					await MC.clickEventHandler(ctn_item,await events_manipulator,true);
				}
			}
		})();	
	};
}
export const btnsGroupEvents2 = async(...args)=>{
	new BtnsGroupEvents2(...args);
}