## Module Editor ins and outs!  

#### index:
- [About:](./about.md)
	- [Introduction:](./about.md/#introduction)
	- [History:](./about.md/#history)
	- [This Attempt:](./about.md/#this-attempt)
	- [This Editor:](./about.md/#this-editor)
- [Notes:](#notes)  
- [Documentation:](./documentation.md)  
	- [Editor Features:](./documentation.md/#editor-features)
	- [What Is Provided:](./documentation.md/#what-is-provided)
	- [Where To Place:](./documentation.md/#where-to-place)
	- [Getting A Copy:](./documentation.md/#getting-a-copy)
	- [Setup An Editor:](./documentation.md/#setup-an-editor)
	- [Testing:](./documentation.md/#testing)


### Notes:
&nbsp;&nbsp;&nbsp;&nbsp;**Namespaces:**
- When I have to import multiple functions from a single js file, I use import \* as Namespace from './path/to/-.js'.
  -  Here I use the abbreviation from that js file as a namespace.

&nbsp;&nbsp;&nbsp;&nbsp;**Functions, Callbacks and Objects**
- When I use for example LEE.editorBlockElem, I want a function to be passed and this function will be processed elsewhere!
  -  Merely, those function are processed when an event occur and what is called a callback.
  -  When I use for example BBE.hrBlock(), I want an object to be passed. This function has been processed already!

&nbsp;&nbsp;&nbsp;&nbsp;About my **createObjects()** function.
-  This function is using the <em>new Map();</em> method.
  -  I'm not using set() here because as I have many entrees, using a single objects block is more maintainable!
