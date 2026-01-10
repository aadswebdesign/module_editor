## Module Editor ins and outs!  

>	### Disclaimer:
>>  I DON'T TAKE ANY RESPONSABILITY FOR ANY DAMAGE THIS PIECE OF SOFTWARE MIGHT CREATE! USING IT IS ALLWAYS AT YOUR OWN RISC!

>	### Introduction:
>>	- An editor that follows the natural flow of the _HTML_ elements.
>>	- An editor that is _Modular_ and based on the _contenteditable_ attribute.

>	### About:
>	>	#### History:
>>>	To keep it short, previously I have done some other attempts to create an editor and I got them working too.\
>>>	To speak true, I wasn't happy with any of them because:
>>>	- They were hacky, not stable and not fun to work with, because:	
>>>		- They were inspired on some examples that I found around the web.
>>>		- Those examples were based on the _Range Api_ and with the knowledge I have now', that's why I didn't get them right, because the _Range Api_ is not for that!
>>>		- An explanation will follow!
	
>	>	#### My Latest Attempt:
>>>	Here I started to look for an other way to create a javascript editor.\
>>>	I began with reading more about the HTML elements in general!
>>>	- What I learned is this, there are two main types.
>>>		- __*1. Block elements__ (divided into two sub groups):
>>>			- ☛ structural block elements, like the &lt;article&gt; element.
>>>			- ☛ text-format elements, like the &lt;p&gt; element.
>>>		- __*2. Inline elements__
>>>			- ☛ like the &lt;b&gt; element.
>>>		-	For creating an editor, they need a different approach.
>>>				- ☛ __*1__ has to be followed by a &lt;br&gt; elem, to insert a block element at a new line.
>>>				- ☛ __*2__ has to be followed by a 'textnode' to insert a new inline element.
>>>		- The contenteditable field!
>>>			1. ☛ Initiating a contenteditable field, begins allways with using _appendChild_.
>>>				-  This creates the first- and last- ElementChild/Child and they have an equal value.
>>>			2. ☛ After that, it is allways the last- ElementChild/Child, here you use _appendChild_ for the _inline elems_ and _replaceWith_ for the _block elems_.		    
>>>			3. ☛ This becomes the start range for the next element / node.			    
>>>				- That's why using the Range Api makes no sense here!		    
>>>					- last- ElementChild/Child is the range and will updated every time content is added!			    
>>>			    




>>>			    



>	>	#### The editor:
>>>	What I have created?
>>>	-  A stable, fast and fun to work with editor but for now and as stated before, with a limited set of features.
>>>	-  Modular, just use what you need!
>>>	-  Customizable: creating your own look, icons etc.
>>> -  As it's ___js class based___, each editor you invoke is a new substance and that means that you can have multiple editors within a single form.
>>>	-  ☛ **Note:** the webcomponents, _data attributes_ and some _css classes_ that I use are mandatory as my built rely on it!

>	### Notes:
>	>	#### _Modules_:
>>>	- I work with _js modules_ and all I explain here, is based on that! 
>>>		- _If you want to do it differently? How to do that is completely up to you!_

>	>	#### _Namespaces_:
>>>	- When I have to import multiple functions from a single js file, I use _import * as Namespace from './path/to/-.js'_ 
>>>		-  Here I use the abbreviation from that js file as a namespace.
>	>	#### _Functions_, _Callbacks_ and _Objects_
>>>	- When I use for example **LEE.editorBlockElem**, I want a function to be passed.  
>>>		- _this function will be processed elsewhere_!	  
>>>			- _Mostly, those function are processed when an event occurs and then it is called a **callback**_. 
>>>	- When I use for example **BBE.hrBlock()**, I want an object to be passed.  
>>>		- _This function has been processed already_! 
>	>	#### About my _createObjects()_ function.
>>>	- This function is using the _new Map();_ method and returns _get();_. 
>>>		- I'm not using _set();_ here because as I have many entrees, using a single objects block is more maintainable! 

>	### Documentation:

>	>	#### Features:
>>>	_As stated previously, it's a limited selection and aim is to add more features overtime!_  
>>>	- Each block takes an argument for changing the icon, those are implemented in a _::before_ pseudo element.  
>>>	- All features are optional, just use what you need! 

>>>	- **Block elements:** 
>>>		01. await BBE.h1BlockSingle() 
>>>		02. await BBE.h2BlockSingle() 
>>>		03. await BBE.h3BlockSingle() 
>>>		04. await BBE.h4BlockSingle() 
>>>		05. await BBE.h5BlockSingle() 
>>>		06. await BBE.h6BlockSingle() 
>>>		07. await BBE.hrBlock()
>>>		08. await BBE.paragraphBlock()
>>>		09. await BBG.headingsGroup()
>>>			- _Is a scrollable group of **&lt;h*&gt;** features!_
>>>		10. await BBG.articleGroup() 
>>>			- _Is a group of related features (**&lt;article&gt;**, **&lt;article-header&gt;**,**&lt;article-main&gt;** and **&lt;article-footer&gt;**)_

>>>	- **Inline elements:** 
>>>		01. await BBE.boldBlock();
>>>		02. await BBE.emBlock()
>>>		03. await BBE.markBlock()
>>>		04. await BBE.strongBlock()
>>>		05. await BBE.underlineBlock()

>>>	- **Text Selectors:**
>>>		01. await BBE.boldSelectBlock()
>>>		02. await BBE.emSelectBlock()
>>>		03. await BBE.markSelectBlock()
>>>		04. await BBE.strongSelectBlock()
>>>		05. await BBE.underlineSelectBlock()

>>>	- **Text Area:**
>>>		- All content is written to a text-area field and this is optional.
>>>		- _To write it to a hidden field is on the todo list._ 

>	>	#### What is provided?
>>>	- moduleEditor();  
>>>	- getIdHelper('id');  
>>>	- createObjects('obj',{});  
>>>	-  Some webcomponents. 
>>>	-  A selection of unicodes wrapped in a *::before or ::after* pseudo element.
>>>	- ...?  

>	>	#### Where to place what? 
>>>	-  In **index.html/ -.php or ? this!** 
>>>		- &lt;link href='path/to/moduleEditor/styles/editor_index.css' rel='stylesheet' /&gt;
>>>	- On top of **index-/main-/?-.js this**:  
>>>		- import {moduleEditorWebComps} from './../moduleEditor/scripts/module_editor_web_comps.js'; 
>>>		-  await moduleEditorWebComps(), this you do in an _IIFE_.  
>>>	- On **top of the file where you want to invoke a moduleEditor:**  
>>>		- import {moduleEditor} from './path/to/moduleEditor/scripts/module_editor.js';  
>>>		-  import * as LEE from './path/to/moduleEditor/scripts/editor_layout/layout_elems_export.js'; 
>>>		- import * as BBE from './path/to/moduleEditor/scripts/editor_layout/buttons/btn_blocks_export.js';  
>>>		- import * as BBG from './path/to/moduleEditor/scripts/editor_layout/buttons/btns_groups_export.js'; 

>	>	#### Obtaining a copy: 
>>>	“First this: there isn't NPM or import map involved here!\
     &nbsp;&nbsp;Also, it isn't plug and pray and that means there is some work todo!\
	 &nbsp;&nbsp;You need to be familiar with javascript too!„_  
>>>	- On Github just use clone and save it somewhere within your project.  
>>>	- Do this for the additional functions too!	

>	>	#### How to:
>>>	- **Step One:**  
>>>		1. Create a new _*.js_ file or using a _js_ file you already have. 
>>>			-  For the ease I'm going to use an _async IFFE_ here but better create a function for it and call it after your form has been loaded.
>>>		2. Create some __consts__ within: 
``` 
			//begin with the imports as previously stated!
			(async()=>{
			  /**
			    * task-1: begin with obtainig the ID of where you want an editor linked to (might be from a form field?).					
			    * task-2: create an Object!
			    * functions are provided! 
			    */
			    const edt_parent1 = await FT.getIdHelper('id');					
			    const editor_layout_1 = await FT.createObjects('edt_objects',{});
			})();
```  
>>>	- **Step Two:**
>>>		1. Create the objects and pass them to the **moduleEditor!** 
```  
                        const editor_layout_1 = await FT.createObjects('edt_objects',{
                          base_settings:{
                            pre_data:{
                              pre_output : true,
                              pre_outer: false,
                            },
                            textarea_data:{
                              writing_raw: false,
                              write_to_textarea: true,
                            },
                          },//base_settings
                          editor_ctn:{
                            edt_ctn_cb: LEE.editorCtnElem,
                            edt_ctn_id:'editor_ctn_one', 
                            edt_ctn_classes:['relative','display-flex'],
                            edt_ctn_parent: edt_parent1,
                          },//editor_ctn
                          editor_block: {
                            edt_block_cb: LEE.editorBlockElem,			
                            edt_block_id:'editor_block_one',
                            edt_block_classes:['edt-main-block','relative','display-flex'],
                            editor_canvas:{
                              edt_canvas_cb: LEE.editorCanvasElem,
                              edt_canvas_id:'canvas_elem_one',
                              edt_canvas_classes:['relative', 'display-block'],
                            },
                            pre_ctn:{
                              pre_ctn_cb: LEE.preCtnElem,
                              pre_ctn_id: null,
                              pre_ctn_classes: ['relative','display-flex'],
                              pre_heading:{
                                pre_heading_cb: LEE.preHeadingElem,
                                pre_heading_id: null,
                                pre_heading_classes:['pre-heading','relative'],
                                pre_heading_content: 'Source Code 1',
                             },
                             pre_elem:{
                               pre_elem_cb: LEE.preElem,
                               pre_elem_id:'pre_output_one',
                               pre_elem_classes:['relative'],
                               tab_size: 4,
                             },
                           },
                           hidden_ctn:{
                             hidden_ctn_cb: LEE.hiddenCtnElem,
                             hidden_ctn_id: null,
                             hidden_ctn_classes: ['visibility-hidden','absolute'],
                             textarea_elem:{
                               textarea_cb: LEE.textareaElem,
                               textarea_id: 'textarea_id_one',
                               textarea_classes: null,//todo
                               textarea_name: 'textarea_name_one',
                               textarea_rows: 8,
                               textarea_cols: 32,
                             },
                          },
                        },//editor_block			
                        toolbars_top: {			
                          tbs_ctn_top_cb: LEE.toolbarsCtnElem,
                          tbs_ctn_id:'toolbars_ctn_top',
                          tbs_ctn_classes:['relative','display-flex'],
                          //max 6 toolbars top
                          editor_toolbars_top:{
                            edt_toolbar_1:{
                              edt_tb_cb: LEE.editorTbElem,
                              edt_tb_id: null,
                              edt_tb_classes: ['relative','display-flex'],
                              items_wrapper:{
                                items_wrapper_cb: LEE.itemsWrapperElem,
                                items_wrapper_id: null,
                                items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
                                item_btn: {
                                  item_btn_cb: LEE.itemsButtonElem,
                                  item_btn_id: null,
                                  item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
                                  item_btn_title: 'Hide',
                               },
                               main_items_ctn:{
                                 main_items_ctn_cb: LEE.itemsCtnElem,
                                 main_items_ctn_id: null,
                                 main_items_ctn_classes: ['relative','display-flex'],
                                 main_items_ctn_inserts:[
                                   await BBG.articleGroup(),
                                   await BBE.hrBlock(),
                                 ],
                               },
                             },
                           },//edt_toolbar_1
                           edt_toolbar_2:{ 
                             edt_tb_cb: LEE.editorTbElem,
                             edt_tb_id: null,
                             edt_tb_classes: ['relative','display-flex'],
                             items_wrapper:{
                               items_wrapper_cb: LEE.itemsWrapperElem,
                               items_wrapper_id: null,
                               items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
                               item_btn: {
                                 item_btn_cb: LEE.itemsButtonElem,
                                 item_btn_id: null,
                                 item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
                                 item_btn_title: 'Hide',
                               },
                               main_items_ctn:{
                                 main_items_ctn_cb: LEE.itemsCtnElem,
                                 main_items_ctn_id: null,
                                 main_items_ctn_classes: ['relative','display-flex'],
                                 main_items_ctn_inserts:[
                                   await BBG.headingsGroup(),
                                   await BBE.paragraphBlock(),
                                 ],
                               },
                             },
                           },//edt_toolbar_2
                           edt_toolbar_3:{
                             edt_tb_cb: LEE.editorTbElem,
                             edt_tb_id: null,
                             edt_tb_classes: ['relative','display-flex'],
                             items_wrapper:{
                               items_wrapper_cb: LEE.itemsWrapperElem,
                               items_wrapper_id: null,
                               items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
                               item_btn: {
                                 item_btn_cb: LEE.itemsButtonElem,
                                 item_btn_id: null,
                                 item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
                                 item_btn_title: 'Hide',
                               },
                               main_items_ctn:{
                                 main_items_ctn_cb: LEE.itemsCtnElem,
                                 main_items_ctn_id: null,
                                 main_items_ctn_classes: ['relative','display-flex'],
                                 main_items_ctn_inserts:[
                                   await BBE.boldBlock(),
                                   await BBE.emBlock(),
                                   await BBE.markBlock(),
                                   await BBE.strongBlock(),
                                   await BBE.underlineBlock(),
                                ],
                              },
                            },
                          },//edt_toolbar_3
                          edt_toolbar_4:{
                           edt_tb_cb: LEE.editorTbElem,
                           edt_tb_id: null,
                           edt_tb_classes: ['relative','display-flex'],
                           items_wrapper:{
                             items_wrapper_cb: LEE.itemsWrapperElem,
                             items_wrapper_id: null,
                             items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
                             item_btn: {
                               item_btn_cb: LEE.itemsButtonElem,
                               item_btn_id: null,
                               item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
                               item_btn_title: 'Hide',
                             },
                             main_items_ctn:{
                               main_items_ctn_cb: LEE.itemsCtnElem,
                               main_items_ctn_id: null,
                               main_items_ctn_classes: ['tb-btns','relative','display-flex'],
                               main_items_ctn_inserts:[
                                 await BBE.boldSelectBlock(),
                                 await BBE.emSelectBlock(),
                                 await BBE.markSelectBlock(),
                                 await BBE.strongSelectBlock(),
                                 await BBE.underlineSelectBlock(),
                              ],
                            },
                          },
                        }, //edt_toolbar_4
                      }, //editor_toolbars_top			
                    }, //toolbars_top			
                    toolbars_bottom:{			
                      tbs_ctn_btm_cb: LEE.toolbarsCtnElem,
                      tbs_ctn_id:'toolbars_ctn_bottom',
                      tbs_ctn_classes:['relative','display-flex'],
                      //max 6 toolbars bottom
                      editor_toolbars_bottom:{
                        edt_toolbar_1:{
                          edt_tb_cb: LEE.editorTbElem,
                          edt_tb_id: null,
                          edt_tb_classes: ['relative','display-flex'],
                          items_wrapper:{
                            items_wrapper_cb: LEE.itemsWrapperElem,
                            items_wrapper_id: null,
                            items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
                            item_btn: {
                              item_btn_cb: LEE.itemsButtonElem,
                              item_btn_id: null,
                              item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
                              item_btn_title: 'Hide',
                            },
                            main_items_ctn:{
                              main_items_ctn_cb: LEE.itemsCtnElem,
                              main_items_ctn_id: null,
                              main_items_ctn_classes: ['relative','display-flex'],
                              main_items_ctn_inserts:[
                                await BBE.otherBlock(), //doesn't exists!
                              ],
                            },
                          },				  
                        }, //edt_toolbar_1
                      }, //editor_toolbars_bottom			
                    }, //toolbars_bottom			
                  });
                  await moduleEditor(editor_layout_1);
```
>	>	#### Testing:
>>>	- I have successfully tested it on devices that I have (**Chrome** _'w11,android'_, **Firefox** _'w11,android'_) but yes it is limited. 
>>>	- Anyhow, as I have followed the webstandards, I am confident it will work good on most browsers/platforms 
>>>	- There is just one browser I'm not sure of and that is 'Safari', because that is not following the webstandards.  
>>> - _“I am sorry for that but there isn't much I can do about it, in fact this is for that browsermaker and not for me!„_  

>	>	 #### How to use?
>>>	- Very simple, just activate a feature and place your mouse in the contenteditable field and start typing!
>>>	- For the selectors, select the text you want to alter and choose one of the selectors!