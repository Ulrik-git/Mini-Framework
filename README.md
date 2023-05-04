# MINI-FRAMEWORK

## How to install ?

To use mini-framework, you need to clone our git repository.

```txt
git clone https://zone01normandie.org/git/Ulrik/mini-framework

cd mini-framework
```

Then you are able to use it.

To learn about method and functions, read the documentation.

## Functions

### Functions List

| Function                               | Description                          |
| :--------                              | :-------                             |
|_CreateDOM(type,[attribute],[child],[parent])|Create a custom DOM element| 
|_AddEvent(event,function,type)|Create event for custom DOM element|
|_RemoveEvent(event,function,type)|Remove event for custom DOM element|
|_Display(name)|Display custom DOM element on page|
|_Undisplay(name)|Undisplay custom DOM element on page|
|_Attr(classname,attribute,value)|Add attribute to custom DOM element|
|_Text(classname,text)|Add text to custom DOM element|
|_Clear()|Reset local variable for DOM element| 
|_UpLayer(number)|Set the creation layer to another level|
|_Get(name)|Get the value of the element|
|_ClearValue(name)|Clear the value of the element|
|_DeleteParent(name)|Delete the parent of the element|


### _CreateDOM
```js
_CreateDOM(type,[attribute],[child],[parent])
```
Create a custom DOM element
* Type : (h1,div,header,span...) **required**<br />
*What is the type of the custom element*
* Attribute : (class,id) **optionnal**<br />
*How to access to the element*
* Child : (true,false) **optionnal**<br />
*Have to be created as a child of the previous element*
* Parent : (name) **optionnal**<br />
*Define who is the parent of the element*
```js
// Exemple
_CreateDOM("div") // For creating a div
_CreateDOM("div",".block") // For creating a div with the class block
_CreateDOM("div",".block",true) // For creating a div with the class block and is a child of previous element
```
### _AddEvent
```js
_AddEvent(event,function,type)
```
Create event for custom DOM element
* Event : (click,keydown,scroll...) **required**<br />
*What is the trigger of the event*
* Function : (()=>{}) **required** <br />
*What is the code to run when the event triggered*
* Type : (div,.block...) **required**<br />
*On which element the event can trigger*
```js
// Exemple
_AddEvent("click",()=>{console.log("Hello there")},"div") // Console log hello there when a user click on div
```