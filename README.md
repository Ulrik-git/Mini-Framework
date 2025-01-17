# MINI-FRAMEWORK

## How to install ?

To use mini-framework, you need to clone our git repository.

```txt
git clone https://zone01normandie.org/git/Ulrik/mini-framework
```

In your js file : 
```js
import { Quack } from "./quack.JS/quack.js";
```

Then you are able to use it.

To learn about method and functions, read the documentation.
[], mean the argument is optionnal

## Functions

You have to know that the quack functions are sorted in 7 different classes.
* custom
* event
* layer
* monitor
* route
* storage
* visibility

### Functions List

#### Custom functions : 
| Function                               | Description                          |
| :--------                              | :-------                             |
|_Attr(type,attribute,value)|Add attribute to custom DOM element|
|_Text(type,text)|Add text to custom DOM element|
|_SetElementColor(element, color)|Set color to custom DOM element|

#### Events functions : 
| Function                               | Description                          |
| :--------                              | :-------                             |
|_AddEvent(event,func,type)|Add a event listener|
|_RemoveEvent(event, func, type)|Remove a event listener|

#### Layer functions :
| Function                               | Description                          |
| :--------                              | :-------                             |
|_CreateDOM(type,[attribute],[child],[parent])|Create a custom DOM element| 
|_Clear()|Reset local varirable for DOM element|
|_UpLayer(number)|Set the creation layer to another level|
|_Display(name)|Display custom DOM element on page|
|_Undisplay(name)|Undisplay custom DOM element on page|

#### Monitor functions
| Function                               | Description                          |
| :--------                              | :-------                             |
|_Get(element)|Get the value of the element|
|_ClearValue(element)|Clear the value of the element|
|_DeleteParent(child)|Delete the parent of the element|
|_AddClass(element, className)|Add class to custom element|
|_AddClassToElementsOfClass(classToAdd, className)|Add class to custom element with class|
|_RemoveClass(element, className)|Remove class to custom element|
|_RemoveClassFromElementsOfClass(classToRemove, className)|Remove class to custom element with class|
|_HasClass(element, className)|Check if the element have the class|
|_ChildrenOfElement(element)|Return the children of the element|
|_CountChildrenOfElementWithClass(element, className)|Return number of children for element with class|
|_CountChildrenOfElement(element)|Return number of children of element|
|_RemoveChildrenElementWithClass(element, className)|Remove children of element with class|

#### Route functions
| Function                               | Description                          |
| :--------                              | :-------                             |
|_setRoute(route)|Set the route|
|_getRoute()|Get the route|

#### Storage functions
| Function                               | Description                          |
| :--------                              | :-------                             |
|setLocalStorage(name, element)|Store in local|
|getLocalStorage(name)|Get the value of the element stored|

#### Visibility functions
| Function                               | Description                          |
| :--------                              | :-------                             |
|_HideElement(element)|Hide the element|
|_ShowElement(element)|Show the element|
|_HideElements(element)|Hide the elements|
|_ShowElementsWithClass(element)|Show the element with class
|_HideElementsWithClass(element)|Hide the element with class|

## Exemples : 
### _Attr
```js
_Attr(type,attribute,value)
// Call with
Quack.custom._Attr(...)
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
// Call with
Quack.custom._Text(...)
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
### _SetElementColor
```js
_SetElementColor(element, color)
// Call with
Quack.custom._SetElementColor(...)
```
Set color to custom DOM element
* Element : (div,.block...) **required** <br />
*Select the element to add this text*
* Color : (red,blue...) **required** <br />
*Select the color*
```js
// Exemple
_SetElementColor("#block", "red") //Set the color of the element block in red
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
### _CreateDOM
```js
_CreateDOM(type,[attribute],[child],[parent])
//Call with
Quack.layer._CreateDOM(...)
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
### _Clear
```js
_Clear()
//Call with 
Quack.layer._Clear()
```
Reset local variable for DOM element
### _UpLayer
```js
_UpLayer(number)
//Call with
Quack.layer._UpLayer(...)
```
Set the creation layer to another level
* Number : (*,0,1) **required** <br />
*Define how many layer he have to go back*
```js
// Exemple
_UpLayer(1) // Set the layer to current-1
_UpLayer("*") // Set the layer to the body level
```
###  _Display
```js
_Display(name)
//Call with
Quack.layer._Display(...)
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
###  _Undisplay
```js
_Undisplay(name)
//Call with
Quack.layer._Undisplay(...)
```
Undisplay custom DOM element on page
* Name : (*,div...) **required** <br />
*Display element on page*
```js
_Undisplay("*")
```
### _Get
```js
_Get(name)
//Call with 
Quack.monitor._Get(...)
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
//Call with
Quack.monitor._ClearValue(...)
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
//Call with
Quack.monitor._Deleteparent(...)
```
Delete the parent of the element
* Name : (div,#block...) **required** <br />
*Select the element*
```js
// Exemple
_DeleteParent("#block") // Delete the parent of the element with id block
```
### _AddClass
```js
_AddClass(element, className)
//Call with
Quack.monitor._AddClass(...)
```
Add class to a custom DOM element
* Element : (element) **required** <br />
*Select the element to add the class*
* ClassName : (value) **required** <br />
*Select the class to add*

### _setRoute
```js
_setRoute(route)
//Call with
Quack.route._setRoute(route)
```
Define the current route
* Route : (value) **required** <br />
*Select the route*
```js
_setRoute("/home") //Set the route to home
```
### _getRoute
```js
_getRoute()
//Call with
Quack.route._getRoute()
```
Get the current value of the route
### setLocalStorage
```js
setLocalStorage(name, element)
//Call with
Quack.storage.setLocalStorage(name, element)
```
Set in local storage a new element
* Name : (value) **required** <br />
*Set the name of the stored value*
* Element : (value) **required** <br />
*Set the value to store*
```js
//Exemple
setLocalStorage("username", "toto") // Store a variable with name username and value toto
```
### getLocalStorage
```js
getLocalStorage(name)
//Call with
Quack.storage.getLocalStorage(name)
```
Get the value of the data stored
* Name : (value) **required** <br />
*Set the name of the target*
```js
//Exemple
getLocalStorage("username") // get the value of the data with name "username"
```
### _HideElement
```js
_HideElement(element)
//Call with
Quack.visibility._HideElement(element)
```
Hide an element
* Element : (element) **required** <br />
*Select the element to hide*
### _ShowElement
```js
_ShowElement(element)
//Call with
Quack.visibility._ShowElement(element)
```
Show an element
* Element : (element) **required** <br />
*Select the element to show*
