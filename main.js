var custom_element_child = [];
var custom_element = [];
var custom_element_layer = [];
var layer = 0;

function _CreateDOM(type, queryAttribute, isChild) {
  let custom = document.createElement(type);
  //Set id or classname
  if (queryAttribute && queryAttribute[0] == ".") {
    custom.classList.add(queryAttribute.substring(1))
  } else if (queryAttribute && queryAttribute[0] == "#") {
    custom.id = queryAttribute.substring(1)
  }
  //Find latest element of current layer
  let lastElementOfLayer
  //If first DOM element or layer is the body's layer, directly append to body
  if ((layer == 0 && custom_element.length == 0) || (layer == 0 && layer < custom_element_layer[custom_element_layer.length-1])) {
    document.body.appendChild(custom)
    custom_element.push(custom)
    custom_element_child.push(isChild)
    custom_element_layer.push(layer)
    return
  }
  if (custom_element[custom_element.length - 1] != null) {
    if (isChild) {
      lastElementOfLayer = findLastElementOfLayer(layer)
      layer++
    } else {
      lastElementOfLayer = findLastElementOfLayer(layer-1)
    }
  }
  //Find the custom_element equal to it and append current element
  const equal = (element) => element == lastElementOfLayer;
  let index = custom_element.findIndex(equal);
  if (custom_element[index]) {
    custom_element[index].appendChild(custom)
    isChild = true
  }
  //find index and append to element
  //Push current layer to array
  custom_element.push(custom)
  custom_element_child.push(isChild)
  custom_element_layer.push(layer)
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
  if (number == "*") {
    layer = 0
    return
  } else if (number > 0) {
    for (let i = number; i > 0; i--) {
      if (layer > 0) {
        layer-=1
      }
    }
  }
}

function findLastElementOfLayer(layer) {
  if (layer < 0) {
    layer = 0
  }
  for (let i = custom_element_layer.length; i > 0; i--) {
    if (layer == custom_element_layer[i-1]) {
      return custom_element[i-1]
    }
  }
}

_CreateDOM("div",".container",false)
_CreateDOM("h1",".title",true)
_CreateDOM("input",".input",false)
_CreateDOM("div")
  _CreateDOM("input",".input1",true)
  _CreateDOM("input",".input2",false)
_UpLayer("*")
_CreateDOM("input",".input3")
  _CreateDOM("input",".input4",true)
  _CreateDOM("input",".input5",false)
  _CreateDOM("button",".button6",false)
    _CreateDOM("button",".button7",true)
    _CreateDOM("button",".button8",false)
  _UpLayer(1)
    _CreateDOM("button",".button9",true)
_UpLayer(2)
_CreateDOM("button",".button10")

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