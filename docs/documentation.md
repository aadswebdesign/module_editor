## Module Editor ins and outs!  

#### index:
- [About:](./about.md)
	- [Introduction:](./about.md/#introduction)
	- [History:](./about.md/#history)
	- [This Attempt:](./about.md/#this-attempt)
	- [This Editor:](./about.md/#this-editor)
- [Notes:](./notes.md)  
- [Documentation:](#documentation)  
	- [Editor Features:](#editor-features)
	- [What Is Provided:](#what-is-provided)
	- [Where To Place:](#where-to-place)
	- [Getting A Copy:](#getting-a-copy)
	- [Setup An Editor:](#setup-an-editor)
	- [Testing:](#testing)


### Documentation:

#### Editor Features:
&nbsp;&nbsp;&nbsp;&nbsp;**For now:**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ It's a limited selection, aim is to expand it with new features overtime!\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ Each block takes an argument for changing the icon, those are implemented in a ::before pseudo element\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ All features are optional, just use what you need!\

&nbsp;&nbsp;&nbsp;&nbsp;**Block elements:**
01.  await BBE.h1BlockSingle()
02.  await BBE.h2BlockSingle()
03.  await BBE.h3BlockSingle()
04.  await BBE.h4BlockSingle()
05.  await BBE.h5BlockSingle()
06.  await BBE.h6BlockSingle()
07.  await BBE.hrBlock()
08.  await BBE.paragraphBlock()
09.  await BBG.headingsGroup()
-  Is a scrollable group of &lt;h\*&gt; buttons!
10. await BBG.articleGroup()
-  Is a group of related elements (&lt;article&gt;, &lt;article-header&gt;,&lt;article-main&gt; and &lt;article-footer&gt;)
<hr/>

&nbsp;&nbsp;&nbsp;&nbsp;**Inline elements:**
01.  await BBE.boldBlock()\
02.  await BBE.emBlock()\
03.  await BBE.markBlock()\
04.  await BBE.strongBlock()\
05.  await BBE.underlineBlock()\
<hr/>

&nbsp;&nbsp;&nbsp;&nbsp;**Inline selectors:**
01.  await BBE.boldSelectBlock()
02.  await BBE.emSelectBlock()
03.  await BBE.markSelectBlock()
04.  await BBE.strongSelectBlock()
05.  await BBE.underlineSelectBlock()
<hr/>

&nbsp;&nbsp;&nbsp;&nbsp;**Write too options:**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ &lt;pre&gt; *innerHTML* or *outerHTML*\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ &lt;textarea&gt; *innerHTML* or *raw* \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ &lt;input type='hidden'&gt; *innerHTML* or *raw*

#### What Is Provided:
-  moduleEditor
-  getId('id')
-  createObjects('obj',{})
-  createNode(node_value)
-  Some webcomponents.
-  A selection of unicodes wrapped in a \*::before or \*::after pseudo element.
-  ...?

#### Where To Place:
&nbsp;&nbsp;&nbsp;&nbsp;**Note:**\
&nbsp;&nbsp;&nbsp;&nbsp; I work with js modules and all I explain here, is based on that!\
&nbsp;&nbsp;&nbsp;&nbsp; If you want to do it differently? How to do that is completely up to you! 

-  In index.html/ -.php or ...?
  -  &lt;link href='path/to/moduleEditor/styles/editor_index.css' rel='stylesheet' /&gt;
-  In index-/main-/?-.js
  -  import {moduleEditorWebComps} from './../moduleEditor/scripts/module_editor_web_comps.js';
    await moduleEditorWebComps(), this you do in an -IIFE-
-  On top of your file where you want to invoke an editor:
  -  import {moduleEditor} from './../../moduleEditor/scripts/module_editor.js';
  -  import \* as LEE from './../../moduleEditor/scripts/editor_layout/layout_elems_export.js';
  -  import \* as BBE from './../../moduleEditor/scripts/editor_layout/buttons/btn_blocks_export.js';
  -  import \* as BBG from './../../moduleEditor/scripts/editor_layout/buttons/btns_groups_export.js';

#### Getting A Copy:
&nbsp;&nbsp;&nbsp;&nbsp; ☛ **Note**, there isn't NPM or <u>type='importmap'</u> involved here!\
&nbsp;&nbsp;&nbsp;&nbsp; ☛ It isn't plug and pray and that means there is some work todo!\
&nbsp;&nbsp;&nbsp;&nbsp; ☛ You need to be familiar with javascript too!\
&nbsp;&nbsp;&nbsp;&nbsp; ☛ On Github just use clone and save it somewhere within your project and do this for the additional functions too!

#### Setup An Editor:
&nbsp;&nbsp;&nbsp;&nbsp;**Preparations:**
- Create a new \*.js file or using a js file you already have.\
&nbsp;&nbsp; ☛ Here I'm using an async IFFE here but better create a function for it and call it after your form has been loaded.
```
    //begin with the imports as stated previously!
    (async()=>{
      /**
        * task-1: begin with obtainig the ID of where you want an editor linked to (might be a form?).
        * task-2: create an Object!
        * sure, how you name them is up to you!
        * functions are provided! 
        */
        const edt_parent1 = await FT.getId('your id');
        const editor_layout_1 = await FT.createObjects('edt_objects',{});
    })();
```
&nbsp;&nbsp;&nbsp;&nbsp;**Creating The Objects:**
-  Create the objects and pass it to the moduleEditor!
```
    const editor_layout_1 = await FT.createObjects('edt_objects',{
       base_settings:{
         pre_data:{
           pre_output : true,
           pre_outer: false,
         },
         textarea_data:{
           writing_raw_one: false,
           write_to_textarea: true,
         },
         hidden_input_data:{
           writing_raw_two: false,
           write_to_hidden: true,
        },		 
      },
      editor_ctn:{
        edt_ctn_cb: LEE.editorCtnElem,
        edt_ctn_id:'editor_ctn_one', 
        edt_ctn_classes:['relative','display-flex'],
        edt_ctn_parent: edt_parent1,
      },
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
            tab_size: 2,
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
          hidden_input_elem:{
            hidden_input_cb: LEE.inputHiddenElem,
            hidden_input_name: 'input_hidden_name_one',
            hidden_input_id: 'input_hidden_id_one',
            hidden_input_classes: null,
          },
        },
      },
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
            },//tb1
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
            },//tb2
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
            },//tb3
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
            },//tb4
         },
      },	
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
          },
        },
      },		
    });
    await moduleEditor(editor_layout_1);
```
#### Testing:
&nbsp;&nbsp;&nbsp;&nbsp;I have successfully tested it on devices that I have (Chrome 'w11,android',Firefox 'w11,android') but yes it is limited.\
&nbsp;&nbsp;&nbsp;&nbsp; Anyhow, as I have followed the webstandards, I am confident it will work good on most browsers/platforms.\
&nbsp;&nbsp;&nbsp;&nbsp; There is just one browser I'm not sure of and that is 'Safari', because that is not following the webstandards.

&nbsp;&nbsp;&nbsp;&nbsp;<q>I'm sorry for that but there isn't much I can do about it, in fact this is for that browsermaker and not for me!</q>