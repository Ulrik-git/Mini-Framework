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
| _CreateDOM(type,attribute,isChild)     | Create a custom DOM element          | 
| _AddEvent(event,func,type)             | Create event for a custom DOM element|
| _RemoveEvent(event,func,type)          | Remove event for a custom DOM element|
| _Display(name)                         | Display custom DOM element on page   |
| _Attr(classname,attribute,value)       | Add attribute to custom DOM element  |

### _CreateDOM

```js
_CreateDOM(type,attribute,isChild)
```

CreateCustom functions, allow you to create DOM element with an easy way.

#### Exemple : 

```js
_CreateDOM("div","#div-header",false)
_CreateDOM("div",".div",true)
```

In this exemple we create a div with class div in the div with id div-header

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

#### Exemple : 

```js
_Display("*")
```

In this exemple we display all the custom element

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