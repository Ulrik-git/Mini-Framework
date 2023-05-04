# MINI-FRAMEWORK

## How to install ?

To use mini-framework, you need to clone our git repository.

```txt
git clone https://zone01normandie.org/git/Ulrik/mini-framework

cd mini-framework
```

Then you are able to use it.

To learn about method and functions, read the documentation.
[], mean the argument is optionnal

## Functions

### Functions List

| Function                               | Description                          |
| :--------                              | :-------                             |
|_CreateDOM(type,[attribute],[child],[parent])|Create a custom DOM element| 
|_AddEvent(event,function,type)|Create event for custom DOM element|
|_RemoveEvent(event,type)|Remove event for custom DOM element|
|_Display(name)|Display custom DOM element on page|
|_Attr(type,attribute,value)|Add attribute to custom DOM element|
|_Text(type,text)|Add text to custom DOM element|
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
### _RemoveEvent
```js
_RemoveEvent(event,type)
```
Remove event for custom DOM element
* Event : (click,scroll,keydown...) **required** <br />
*What is the trigger of the event*
* Type : (div,.block...) **required** <br />
*On which element the event can trigger*
```js
// Exemple
_RemoveEvent("click","div") // Remove the click event on div
```
###  _Display
```js
_Display(name)
```
Display custom DOM element on page
* Name : (*,div...) **required** <br />
*Display element on page /!\ The best way is to use * only once at the end of your code*
```js
// Exemple
// ... your code
_Display("*")
// EOF
```
### _Attr
```js
_Attr(type,attribute,value)
```
Add attribute to custom DOM element
* Type : (div,#block...) **required** <br />
*Select the element to add this attribute*
* Attribute : (type,name...) **required** <br />
*Select the attribute to add*
* Value : (value) **required** <br />
*What is the value for the added attribute*
```js
// Exemple
_Attr(".block","style","color:red") // Set a style attribute to all the element with class block
```
### _Text
```js
_Text(type,text)
```
Add text to custom DOM element
* Type : (div,.block) **required** <br />
*Select the element to add this text*
* Text : (value) **required** <br />
*Select the text to add*
```js
// Exemple
_Text("#block","Hello there ! ") // Add Hello there ! to the text of the element block
```
### _Clear
```js
_Clear()
```
Reset local variable for DOM element
### _UpLayer
```js
_UpLayer(number)
```
Set the creation layer to another level
* Number : (*,0,1) **required** <br />
*Define how many layer he have to go back*
```js
// Exemple
_UpLayer(1) // Set the layer to current-1
_UpLayer("*") // Set the layer to the body level
```
### _Get
```js
_Get(name)
```
Get the value of the element
* Name : (div,#block...) **required** <br />
*Select the element*
```js
// Exemple
_Get("#block") //get the value of the element with id block
```
### _ClearValue
```js
_ClearValue(name)
```
Clear the value of the element
* Name : (div,#block...) **required** <br />
*Select the element*
```js
// Exemple
_ClearValue("#block") // Set the value of element with id block to null
```
### _DeleteParent
```js
_DeleteParent(name)
```
Delete the parent of the element
* Name : (div,#block...) **required** <br />
*Select the element*
```js
// Exemple
_DeleteParent("#block") // Delete the parent of the element with id block
```



