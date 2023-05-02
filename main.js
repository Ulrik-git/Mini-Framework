var custom_element_child = [];
var custom_element = [];

function CreateCustom(type, queryAttribute, isChild) {
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

function AddEvent(event,func,t) {
  var elems = document.querySelectorAll(t);
  elems.forEach(elem => {
    elem.addEventListener(event,func);
  });
}

function AppendCustom(name) {
  custom_element.forEach((element,index) => {
    console.log(name, element, index)
    if (name == "*" && !custom_element_child[index]) {
      document.body.appendChild(element)
    }
  });
}

function UpLayer(number) {
  for (i in number) {

  }
}

CreateCustom("header")
CreateCustom("div",".mainContent",true)
CreateCustom("div","#mainContent",true)
CreateCustom("div","#mainContent",true)
CreateCustom("div","#mainContent",true)
CreateCustom("div","#mainContent",false)
UpLayer(1)

/*
CreateCustom("header","div","","header")
CreateCustom("header","div","","header")
AddEvent(".header","console.log('a')","click")
*/
AppendCustom("*")