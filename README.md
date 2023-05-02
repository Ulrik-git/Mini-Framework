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
| _AttrById(id,attribute,value)          | Add attribute to custom DOM element  |
| _AttrByClass(classname,attribute,value)| Add attribute to custom DOM element  |

### CreateCustom

```js
CreateCustom(type,attribute,isChild)
```

CreateCustom functions, allow you to create DOM element with an easy way.

#### Exemple : 

```js
CreateCustom("div","#div-header",false)
CreateCustom("div",".div",true)
```

In this exemple we create a div with class div in the div with id div-header

### AddEvent

```js
AddEvent(event,function,selector)
```

AddEvent functions, allow you to create event on custom element.

#### Exemple : 

```js
AddEvent("click",function(){console.log("clicked")},".div")
AddEvent("click",function(){MyFunction()},".div")
```

In this exemple we create a click event that console log "clicked" when an element with class `.div` is clicked and call `Myfunction()`

### AppendCustom

```js
AppendCustom(argument)
```

AppendCustom functions, allow you to display custom DOM element on page.

#### Exemple : 

```js
AppendCustom("*")
```

In this exemple we display all the custom element