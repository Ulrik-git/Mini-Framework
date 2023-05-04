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

CreateCustom functions, allow you to create DOM element.
You have to specify :
#### Type : (h1,div,header,span...) **required**
    *What is the type of the custom element*
#### Attribute : (class,id)
    *How to access to the element*
#### Child : (true,false)
    *Have to be created as a child of the previous element*
#### Parent : (name)
    *Define who is the parent of the element*


```js
_CreateDOM("div","#div-header",false)
_CreateDOM("div",".div",true)
```

### _AddEvent

```js
_AddEvent(event,function,selector)
```

AddEvent functions, allow you to create event on custom element.

#### Exemple : 

```js
_AddEvent("click",function(){console.log("clicked")},".div")
_AddEvent("click",function(){MyFunction()},".div")
```

In this exemple we create a click event that console log "clicked" when an element with class `.div` is clicked and call `Myfunction()`

### _RemoveEvent

```js
_RemoveEvent(event,function,selector)
```

RemoveEvent functions, allow you to remove event on custom element.

#### Exemple : 

```js
_RemoveEvent("click",".div")
```

In this exemple we remove the click event on all element with class `.div`

### _Display

```js
_Display(argument)
```

Display functions, allow you to display custom DOM element on page.
/!\ Note that you have to call display after creating element, but before calling event !  

#### Exemple : 

```js
_Display("*")
```

In this exemple we display all the custom element

### _Undisplay

```js
_Undisplay(argument)
```

Undisplay functions, allow you to undisplay custom DOM element on page. 

#### Exemple : 

```js
_Undisplay("*")
```

In this exemple we undisplay all the custom element


### _Attr

```js
_Attr(classname,attribute,value)
```

Attr functions, allow you to add attribute on custom DOM element.

#### Exemple : 

```js
_Attr(".mainContent", "style", "color:red")
```

In this exemple we set the text in red for all element with class mainContent

### _Text

```js
_Text(classname,text)
```

Text functions, allow you to add text on custom DOM element.

#### Exemple : 

```js
_Text(".mainContent", "Hello there ! ")
```

In this exemple we set the text of elements mainContent to Hello there

### _Clear

```js
_Clear()
```

Clear function reset all variable for creation of DOM element 

### Usage Exemples : 

```js
_AddEvent("click",function(){
  _CreateDOM("input",".input",true)
},".button")
```

This function create a Input when you click a button