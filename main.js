var custom_element_child = [];
var custom_element = [];


function _CreateDOM(type, queryAttribute, isChild) {
  let custom = document.createElement(type);
  if (queryAttribute && queryAttribute[0] == ".") {
    custom.classList.add(queryAttribute.substring(1))
    custom.innerHTML = "text"
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

function UpLayer(number) {
  for (i in number) {

  }
}

_CreateDOM("header")
_CreateDOM("div",".mainContent",true)
_CreateDOM("div",".mainContent",true)
_CreateDOM("div",".mainContent",true)
_CreateDOM("div",".mainContent",true)
_CreateDOM("div",".mainContent",false)
UpLayer(1)

/*
_CreateDOM("header","div","","header")
_CreateDOM("header","div","","header")
AddEvent(".header","console.log('a')","click")
*/
_Display("*")
_AddEvent("click",function(){Cos()},".mainContent")
_Attr(".mainContent", "style", "color:red")