var custom_element_child = [];
var custom_element = [];
var layer = 0;

function _CreateDOM(type, queryAttribute, isChild) {
  let custom = document.createElement(type);
  if (queryAttribute && queryAttribute[0] == ".") {
    custom.classList.add(queryAttribute.substring(1))
  } else if (queryAttribute && queryAttribute[0] == "#") {
    custom.id = queryAttribute.substring(1)
  }
  let ok = getPreviousParentElement()[0]
  let previousParentElement = getPreviousParentElement()[1]
  console.log("here", isChild, custom, custom_element, custom_element[custom_element.length - 1], custom_element_child[custom_element_child.length - 1], ok, previousParentElement)
  custom_element_child.push(isChild)
  if (isChild && custom_element[custom_element.length - 1] != null) {
    custom_element[custom_element.length - 1].appendChild(custom)
    custom_element.push(custom)
    layer++
  } else {
    if (ok && layer > 0) {
      console.log('a', previousParentElement, custom)
      previousParentElement.appendChild(custom)
      custom_element.push(custom)
      custom_element_child[custom_element_child.length - 1] = true
    } else {
      custom_element.push(custom)
    }
  }
}

function _AddEvent(event,func,t) {
  var elems = document.querySelectorAll(t);
  elems.forEach(elem => {
    elem.addEventListener(event,func);
  });
}

function _RemoveEvent(event,func,t) {
  var elems = document.querySelectorAll(t);
  elems.forEach(elem => {
    elem.removeEventListener(event,func);
  });
}

function _Display(name) {
  custom_element.forEach((element,index) => {
    console.log(name, element, index)
    if (name == "*" && !custom_element_child[index]) {
      document.body.appendChild(element)
    }
  });
}

function _Attr(classname, attr, value) {
  let elems = document.querySelectorAll(classname)
  elems.forEach(element => {
    element.setAttribute(attr, value);
  });
}

function _Clear() {
  custom_element_child = [];
  custom_element = [];
  layer = 0;
}

function _Undisplay(selector) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++) {
    elements[i].parentNode.removeChild(elements[i]);
  }
}

function _Text(classname,text) {
  let elems = document.querySelectorAll(classname)
  elems.forEach(element => {
    element.innerHTML = text
  });
}

function _UpLayer(number) {
  number = String(number)
  if (number == "*") {
    layer = 0
    return
  }
  for (i in number) {
    if (layer > 0) {
      layer-=1
    }
  }
}

function getPreviousParentElement() {
  for (let i = custom_element_child.length - 1; i > 0; i--) {
    console.log("b", custom_element[i-1], custom_element_child[i], custom_element_child.length)
    if (!custom_element_child[i-1]) {
      return [true, custom_element[i-1]]
    }
  }
  return false
}

_CreateDOM("div",".container",false)
_CreateDOM("h1",".title",true)
_CreateDOM("input",".input",false)
_Display("*")
_Attr(".container","style","text-align:center;color:red;")
_Attr(".input","placeholder","ToDo")
_Text(".title","TODO")
_AddEvent("keydown", function(e){
  console.log(e.key)
  _CreateDOM("div",".list",true)
  _Text(".list","test")
  _Display("*")
  _UpLayer("*")
}, "input");