//moduleEditor/scripts/factory/module_functions.js
export const appendToParent = (...args)=>{
	const [present_parent = null, child_elem] = args;
	if(present_parent !== null){
		present_parent.appendChild(child_elem);
		return child_elem; //is becoming the new parent;
	}
};

export const addClass = async (...args)=>{
	const [elem,add_class,log = false]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(!el.classList.contains(add_class)){
			el.classList.add(add_class);
		}
		if(log === true) console.log(`class ${add_class} added to: ${el}`);		
	}
	return await el;
};

export const addClassNA = (...args)=>{
	const [elem,add_class,log = false]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(!el.classList.contains(add_class)){
			el.classList.add(add_class);
		}
		if(log === true) console.log(`class ${add_class} added to: ${el}`);		
	}
	return el;
};

export const addClasses = async (...args)=>{
	const [elem,classes=[]]= args;
	let el
	if(null !== elem){
		for(const cl of classes){
			el = await addClass(elem,cl);
		}	
	}
	return el;
};

export const addClassesNA = (...args)=>{
	const [elem,classes=[]]= args;
	let el
	if(null !== elem){
		for(const cl of classes){
			el = addClassNA(elem,cl);
		}	
	}
	return el;
};

export async function createElem(elem = null){
	if(null !== elem){
		return await document.createElement(elem);
	}	
}

export function createElemNA(elem = null){
	if(elem !== null){
		return document.createElement(elem);
	}	
}

export const createNode = async node => document.createTextNode(node);

export async function createObjects(...args){
	const [map_object = null, map_entries = null] = args;
	if(map_object !== null && map_entries !== null){
		const map = new Map([[map_object,map_entries]]);
		return map.get(map_object);
	}
	return null;
};

export function createObjectsNA(...args){
	const [map_object = null, map_entries = null] = args;
	if(map_object !== null && map_entries !== null){
		const map = new Map([[map_object,map_entries]]);
		return map.get(map_object);
	}
	return null;
}

export const createWalker = (...args)=>{
	const [root_el = null,node_filter_value = null,accept_node_cb] = args;
	let walker;
	const node_filter = ()=>{
		return NodeFilter.node_filter_value ?? NodeFilter.SHOW_ELEMENT;
	};
	if(root_el !== null){
		walker = document.createTreeWalker(root_el,node_filter,accept_node_cb);
	}
	return walker ?? null;
};

export const dataOnToggle = async (...args) =>{
	const [elem,on_off] = args
	if(!elem.hasAttribute('data-on')){
		elem.setAttribute('data-on','')
		if(on_off === true){
			setTimeout(()=>{
			    elem.removeAttribute('data-on');
			},200);
		}
	}else{
		elem.removeAttribute('data-on')
	}
}

export const dataTbOpenToggle = async (...args) =>{
	const [elem] = args
	if(!elem.hasAttribute('data-tb_open')){
		elem.setAttribute('data-tb_open','')
	}else{
		elem.removeAttribute('data-tb_open')
	}
}

export const domEraser = async (dom_parent) =>{
	let wrap;
	if(dom_parent){
		wrap = dom_parent;
		if(null !== wrap){
			while(wrap.firstChild) wrap.removeChild(wrap.firstChild);
		}
	}
	return await wrap;
};

export async function elQuery(...args){
	const [elem,el_all=false,el_parent] = args;
    let el;
	if(true === el_all){
		if(el_parent) el = el_parent.querySelectorAll(elem);
    	else el = document.querySelectorAll(elem);
	}else{
		if(el_parent) el = el_parent.querySelector(elem);
		else el = document.querySelector(elem);
	}
    return await el;
}

export const getAncestor = async (...args)=>{
	const [elem, base_elem, tag_name,log = false]= args;
	let ancestor;
	if((elem !== null)&&(elem.tagName !== `${tag_name}`)){
		if((elem.lastElementChild !== null)&&(elem.lastElementChild.tagName !== tag_name)){
			const last_child = elem.lastElementChild;
			ancestor = last_child;
		}else{
			ancestor = elem;
		}
	}else{
		ancestor = base_elem
	}
	if(log === true){
		console.log(`getAncestor of(${tag_name})`,ancestor);
	}
	return ancestor;
}

export const getNodeAncestor = async (...args)=>{
	const [elem, base_elem, tag_name,log = false]= args;
	let ancestor;
	if((elem !== null)&&(elem.tagName !== `${tag_name}`)){
		if((elem.lastChild !== null)&&(elem.Child.tagName !== tag_name)){
			const last_child = elem.lastChild;
			ancestor = last_child;
		}else{
			ancestor = elem;
		}
	}else{
		ancestor = base_elem
	}
	if(log === true){
		console.log(`getNodeAncestor of(${tag_name})`,ancestor);
	}
	return ancestor;	
}

export async function getClassHelper(...args){
	const [class_name,class_parent=null] = args;
	if(class_parent !== null){
		return await class_parent.getElementsByClassName(class_name);
	}
	return await document.getElementsByClassName(class_name);
}

export async function getIdHelper(id){
    if(id){
		return await document.getElementById(id);
	}
}

export const getRange = () => {
	const selection = document.getSelection();
	if (selection.rangeCount === 0) return
	return selection.getRangeAt(0)
};	

export const getSelection = async (...args)=>{
	const [clone = false,remove = false,add_range= false, range_val] = args;
	const selection = document.getSelection();
	if (selection.rangeCount === 0) return;
	let _selection = null;
	if(clone === true){
		_selection = selection.getRangeAt(0).cloneRange();
	}else{
		_selection = selection.getRangeAt(0);
	}
	if(remove === true){
		_selection = selection.removeAllRanges();
	}
	if(add_range === true){
		_selection = selection.addRange(range_val);
	}
	return _selection;
};

export const getTagNames = async (...args) => {
	const [tag, parent_el = null,log = false] = args
	let el;
	if(parent_el !== null){
		el = parent_el.getElementsByTagName(tag);
	}else{
		el = document.getElementsByTagName(tag);
	}
	if(log === true){
		console.log(`getTagNames(${tag})`,el);
	}
	return el;
}

export const getTagNamesNA = async (...args) => {
	const [tag, parent_el = null,log = false] = args
	let el;
	if(parent_el !== null){
		el = parent_el.getElementsByTagName(tag);
	}else{
		el = document.getElementsByTagName(tag);
	}
	if(log === true){
		console.log(`getTagNames(${tag})`,el);
	}
	return el;
}

export const getAllTagNames = async (parent = null) =>{
	return await getTagNames('*',parent);
}

export const insertAdjacent = async (...args)=>{
	const [parent_el, last_child, position = null, log=false] = args;
	const default_position = position ? position : 'beforeend';//
	
	let el;
	if(parent_el !== null){
		el = parent_el.insertAdjacentHTML(default_position,last_child.textContent);
		if(log === true){
			console.log('insertAdjacent (',last_child.textContent,') into:', el);
		}		
	}
	return await el;
}

export const removeAttribute = async (...args)=>{
	const [elem,attribute,log = false]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(el.hasAttribute(attribute)){
			el.removeAttribute(attribute);
		}
	}
	if(log === true){
		console.log('removed attribute: ',el);
	}
	return await el;
	
};

export const removeClass = async (...args)=>{
	const [elem,remove_class,log = false]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(el.classList.contains(remove_class)){
			el.classList.remove(remove_class);
		}
		if(el.classList.length === 0){
				el.removeAttribute('class');
		}
	}
	if(log === true){
		console.log(`removed class: `,el);
	}
	return await el;
};

export const replaceClass = async (...args)=>{
	const [elem,remove_class,add_class,log = false] = args;
	let el;
	if(null !== elem){
		el = elem;
		if(remove_class && add_class){
			el.classList.replace(remove_class,add_class);
		}
	}
	if(log === true){
		console.log(`removed classes: `,el);
	}
	return await el;
};
export const replaceClassNA = (...args)=>{
	const [elem,remove_class,add_class,log = false] = args;
	let el;
	if(null !== elem){
		el = elem;
		if(remove_class && add_class){
			el.classList.replace(remove_class,add_class);
		}
	}
	if(log === true){
		console.log(`removed classes: `,el);
	}
	return el;
};




export const setContent = async function (...args) { 
	const [elem,content,add_str = false] = args;
	let el;
	if(elem){
		el = elem;
		if(add_str === true) {
			el.innerHTML += content;
		}else{
			el.innerHTML = content;
		}
	}
	return await el;
};

export function setCallbackParams(...args){
	const [callback, params] = args;
	if(callback){
		return callback(params);
	}
}

/**
 * Get the number of characters in an element
 *
 * @param {Element} element
 * @return {number}
 */
export function getTextLength(element) {
  const range = element.ownerDocument.createRange()
  range.selectNodeContents(element)
  return range.toString().length;
}

export const setForLoop = (args) =>{
	const argMap = new Map([['loop_objects',args]]);
	const argObjects = argMap.get('loop_objects');
	const {limit,callback,backwards} = argObjects; 
	let i;
	if (backwards) {
		for (i = limit - 1; i >= 0; i--) callback(i)
	}else{
		for (i = 0; i < limit; i++) callback(i)
	}
}

export const setCounter = async (...args) =>{
	const [tag_name,parent_elem] = args;
	const tags = await getTagNames(tag_name,parent_elem);
	let i = 0;
	for(const tag of uniqueArray(tags)){
		tag.setAttribute('data-count',++i);
	}
};

export const setCountNode = async (...args) =>{
	const [tag_name,parent_elem,suffix] = args;	
	const tags = await getTagNames(tag_name,parent_elem);
	let i = 0;
	for(const tag of uniqueArray(tags)){
		return await createNode(`${++i} ${suffix}`)
	}
}

export const setWhileLoop = async (args) =>{
	const argMap = new Map([['while_objects',args]]);
	const argObjects = argMap.get('while_objects');
	const {condition,callback,limit=null} = argObjects; 
	let i = 0, max;
	const obj = { count: 0 }
	const increment = obj => {
		obj.count++
	}
	if(limit === null){
		max = 1000;
		while (condition(i)) {
			if (i++ >= max) {
				throw new Error('Infinite loop detected and prevented')
			}
			value = callback(i)
		}
		return value
	}else{
		max = limit;
		while (obj.count < max) {	
			callback()	
			increment(obj);
		}		
	}
} 

export const wrapSelection = async (...args)=>{
	const [elem] = args
	const selection = document.getSelection();
	if (selection.rangeCount > 0 && !selection.isCollapsed){
		const range = selection.getRangeAt(0).cloneRange();
		if(elem){
			try{
				range.surroundContents(elem);
				console.log('Selection saved!');
			}catch(log){
				console.log('node is not a text node but when you select again it will use the ancestor text node.');
			}
		}
	}else{
		console.log('No selection to save!');
	}
}

export function escapeHtml(str) {
	return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, "\"").replace(/'/g, "'");
}

export const uniqueArray = (array) => Array.from(new Set(array));

export function writeSourceCode (...args) {
	const [pre_elem,editor_elem,pre_output = false, outer = false] = args
	if(pre_output === true){
		if(outer === true){
			pre_elem.innerText = editor_elem.outerHTML;
		}else{
			pre_elem.innerText = editor_elem.innerHTML; 
		}
	}
}

export function writeToTextArea(...args){
	const [textarea_elem,editor_elem,write_to_textarea = false,writing_raw = false ] = args;
	if(write_to_textarea === true){
		if(writing_raw === true){
			textarea_elem.innerText = editor_elem.outerHTML
		}else{
			textarea_elem.innerHTML = escapeHtml(editor_elem.innerHTML)
		}
	}
}

//todo writeToHiddenInput;