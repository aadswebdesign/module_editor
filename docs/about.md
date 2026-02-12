## Module Editor ins and outs!  

#### index / About:
- Back to [README](../Readme.md)
- [About:](#about)
	- [Introduction:](#introduction)
	- [History:](#history)
	- [This Attempt:](#this-attempt)
	- [This Editor:](#this-editor)
- [Notes:](./notes.md)  
- [Documentation:](./documentation.md)  
	- [Editor Features:](./documentation.md/#editor-features)
	- [What Is Provided:](./documentation.md/#what-is-provided)
	- [Where To Place:](./documentation.md/#where-to-place)
	- [Getting A Copy:](./documentation.md/#getting-a-copy)
	- [Setup An Editor:](./documentation.md/#setup-an-editor)
	- [Testing:](./documentation.md/#testing)


### About:

#### Introduction:
&nbsp;&nbsp;&nbsp;&nbsp;**An editor that**:\
&nbsp;&nbsp;&nbsp;&nbsp; ☛ Follows the natural flow of the HTML elements.\
&nbsp;&nbsp;&nbsp;&nbsp; ☛ Is Modular, just use what you need!\
&nbsp;&nbsp;&nbsp;&nbsp; ☛ Is based on the contenteditable attribute.

#### History:
&nbsp;&nbsp;&nbsp;&nbsp;To keep it short, previously I have done some other attempts to create an editor and I got them working too.\
&nbsp;&nbsp;&nbsp;&nbsp;To speak true, I wasn't happy with any of them.

-    They were hacky, not stable, not fun to work with and were based on some examples that I found around the web.
-    Examples that were mostly based on the Range Api and with the knowledge I have now', that's why I didn't get them right, because the Range Api is not for that and that's a fact!
-    An explanation will follow!

#### This Attempt:
&nbsp;&nbsp;&nbsp;&nbsp;Looking for other ways to create an editor and staying away from the Range Api!\

&nbsp;&nbsp;&nbsp;&nbsp;**My very first step was:**\
&nbsp;&nbsp;&nbsp;&nbsp;Learning more about HTML elements in general and what I have learned is this.


&nbsp;&nbsp;&nbsp;&nbsp;There are two main types:\
&nbsp;&nbsp;&nbsp;&nbsp;*1 Block elements and devided in two subgroups.\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ structural, like the &lt;article&gt;element.\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ text-format, like the &lt;p&gt; element.\
&nbsp;&nbsp;&nbsp;&nbsp;*2 Inline elements.\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ like the &lt;b&gt; element.\

&nbsp;&nbsp;&nbsp;&nbsp;For creating an editor, they need a different approach.\
&nbsp;&nbsp;&nbsp;&nbsp; ☛ *1 Has to be followed by a &lt;br&gt; element, to insert a block element at a new line.\
&nbsp;&nbsp;&nbsp;&nbsp; ☛ *2 Has to be followed by a textnode to insert a new inline element.\

&nbsp;&nbsp;&nbsp;&nbsp;Next is about some <em>DOM</em> rules, for the element that holds the <em>contenteditable</em> attribute.

01. When initiated, first-/last- Element-/Child is allways null!\
&nbsp;&nbsp; ☛ This means adding an element or a node is allways with appendChild!
02. After the first insert, first-/last- Element-/Child allways have the same value!
03. If this is settled, it is allways \*last Element-/Child to be focussed on because any new content will be appended to \* and will become the new \* for the next appending!\
&nbsp;&nbsp; ☛ So last Element-/Child is the range here and will updated every time content is added!
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<blockquote>"<em>This is exactly why the Range Api makes no sence here because last Element-/Child is allways the startpoint for the next element/node and that can be reached/manipulated with append/appendChild replaceWith and other dom methods!</em>"</blockquote>

&nbsp;&nbsp;&nbsp;&nbsp;**So to create an editor:**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ Is all about sticking to the natural flow of those elements!\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ Get the elements/nodes on the right place and on the right time!\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ Not easy but possible and it takes more time as a Sunday afternoon, to get it done!

#### This Editor:
&nbsp;&nbsp;&nbsp;&nbsp;**What I have created:**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ A stable, fast and fun to work with editor but for now, with a limited set of features.\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ Modular, just use what you need!\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ Customizable: creating your own look, icons etc.\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛ Also, as it's OOP, you can use multiple instances in a single form.\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☛  <q>Note: the webcomponents and some css classes that I use here are mandatory as my built rely on it!</q>