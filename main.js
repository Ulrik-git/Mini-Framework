var custom_element_child = [];
var custom_element = [];


function _CreateDOM(type, queryAttribute, isChild) {
  let custom = document.createElement(type);
  if (queryAttribute && queryAttribute[0] == ".") {
    custom.classList.add(queryAttribute.substring(1))
  } else if (queryAttribute && queryAttribute[0] == "#") {
    custom.id = queryAttribute.substring(1)
  }
  console.log("here", custom_element, custom_element[custom_element.length - 1], custom)
  custom_element_child.push(isChild)
  if (isChild && custom_element[custom_element.length - 1] != null) {
    custom_element[custom_element.length - 1].appendChild(custom)
    custom_element.push(custom)
  } else {
    custom_element.push(custom)
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
}

function _Undisplay(selector) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++) {
    elements[i].parentNode.removeChild(elements[i]);
  }
}

function UpLayer(number) {
  for (i in number) {

  }
}

_CreateDOM("div")
_CreateDOM("input",".input",true)
_CreateDOM("button",".button",false)
_Display("*")
_AddEvent("click",function(){
  _CreateDOM("input",".input",true)
},".button")
_Attr(".button", "value", "aaaaaaaaaaaa")
_Attr(".input", "type", "text")
_Attr(".input", "placeholder", "TODO list")