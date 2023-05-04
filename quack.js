var custom_element_child = [];
var custom_element = [];
var custom_element_layer = [];
var layer = 0;

export function _CreateDOM(type, queryAttribute, isChild, appendToParent) {
    let custom = document.createElement(type);
    //Set id or classname
    if (queryAttribute && queryAttribute[0] == ".") {
      custom.classList.add(queryAttribute.substring(1))
    } else if (queryAttribute && queryAttribute[0] == "#") {
      custom.id = queryAttribute.substring(1)
    }
    if (appendToParent != null) {
      let nodes = document.querySelectorAll(appendToParent);
      if (nodes.length > 1) {
        nodes[nodes.length-1].appendChild(custom);
      } else {
        nodes[0].appendChild(custom);
      }
      _Clear();
      _Display("*");
      return
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
  
  export function _AddEvent(event,func,t) {
    var elems = document.querySelectorAll(t);
    elems.forEach(elem => {
      elem.addEventListener(event,func);
    });
  }
  
  export function _AddEventToLastOfElement(event,func,t) {
    t = LastElementLogic("_AddEventToLastOfElement", t)
    t.addEventListener(event,func);
  }
  
  export function _RemoveEvent(event, func, t) {
    var elems = document.querySelectorAll(t);
    elems.forEach(elem => {
      elem.removeEventListener(event,func);
    });
  }
  
  export function _Display(name) {
    custom_element.forEach((element,index) => {
      console.log(name, element, index)
      if (name == "*" && !custom_element_child[index]) {
        document.body.appendChild(element)
      }
    });
  }
  
  export function _Attr(classname, attr, value) {
    let elems = document.querySelectorAll(classname)
    elems.forEach(element => {
      element.setAttribute(attr, value);
    });
  }
  
  export function _Clear() {
    custom_element_child = [];
    custom_element = [];
    layer = 0;
  }
  
  export function _Undisplay(selector) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }
  
  export function _Text(classname,text) {
    LastElementLogic("_Text", classname, text)
  }
  
  export function _UpLayer(number) {
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
  
  export function findLastElementOfLayer(layer) {
    if (layer < 0) {
      layer = 0
    }
    for (let i = custom_element_layer.length; i > 0; i--) {
      if (layer == custom_element_layer[i-1]) {
        return custom_element[i-1]
      }
    }
  }
  
  
  export function _Get(element) {
    return LastElementLogic("_Get", element)
  }
  
  export function _ClearValue(element) {
    LastElementLogic("_ClearValue", element)
  }
  
  export function _DeleteParent(child) {
        // Sélectionnez l'élément parent de l'élément enfant
    var parent = child.parentElement;
    if (parent !== null) {
      parent.remove();
    }
  }
  
  export function LastElementLogic(funcName, element, text) {
    let nodes = document.querySelectorAll(element);
    if (funcName == "_Text") {
      let nodes = document.querySelectorAll(element);
      if (nodes.length > 1) {
        return nodes[nodes.length-1].innerHTML = text;
      } else {
        return nodes[0].innerHTML = text;
      }
    } else if (funcName == "_Get") {
      if (nodes.length > 1) {
        return nodes[nodes.length-1].value;
      } else {
        return nodes[0].value;
      }
    } else if (funcName == "_ClearValue") {
      if (nodes.length > 1) {
        nodes[nodes.length-1].value = "";
      } else {
        nodes[0].value = "";
      }
    } else if (funcName == "_HideElement") {
      if (nodes.length > 1) {
        nodes[nodes.length-1].style.display = 'none';
      } else {
        nodes[0].style.display = 'none';
      }
    } else if (funcName == "_ShowElement") {
      if (nodes.length > 1) {
        nodes[nodes.length-1].style.display = 'block';
      } else {
        nodes[0].style.display = 'block';
      }
    } else if (funcName == "_CountChildrenOfElementWithClass" || funcName == "_AddEventToLastOfElement" || funcName == "_CountChildrenOfElement" || funcName == "_RemoveElementWithClass") {
      if (nodes.length > 1) {
        return nodes[nodes.length-1];
      } else {
        return nodes[0];
      }
    } else {
        if (nodes.length > 1) {
            return nodes[nodes.length-1];
        } else {
            return nodes[0];
        }
    }
  }
  
  export function _HideElement(element) {
    LastElementLogic("_HideElement", element);
  }
  
  export function _ShowElement(element) {
    LastElementLogic("_ShowElement", element);
  }
  
  export function _HideElements(element) {
    document.querySelectorAll(element).style.display = 'none';
  }
  
  export function _AddClass(element, className) {
    element.classList.add(className)
  }

  export function _AddClassToElementsOfClass(classToAdd, className) {
    let elements = document.querySelectorAll(className)
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(classToAdd)
    }
  }
  
  export function _RemoveClass(element, className) {
    element.classList.remove(className)
  }

  export function _RemoveClassFromElementsOfClass(classToRemove, className) {
    let elements = document.querySelectorAll(className)
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(classToRemove)
    }
  }
  
  export function _HasClass(element, className) {
    return element.classList.contains(className)
  }
  
  export function _ChildrenOfElement(element) {
    return element.children
  }
  
  export function _CountChildrenOfElementWithClass(element, className) {
    if (element[0] == ".") {
      element = LastElementLogic("_CountChildrenOfElementWithClass", element)
    } else if (element[0] == "#") {
      element = document.querySelector(element)
    }
    let count = 0
    for (let i = 0; i < element.children.length; i++) {
        if (element.childNodes[i].classList.contains(className)) {
          count++
        }        
    }
    return count
  }
  
  export function _CountChildrenOfElement(element) {
    if (element[0] == ".") {
      element = LastElementLogic("_CountChildrenOfElement", element)
    } else if (element[0] == "#") {
      element = document.querySelector(element)
    }
    return element.children.length
  }
  
  export function _SetElementColor(element, color) {
    element.style.color = color
  }

  export function _RemoveChildrenElementWithClass(element, className) {
    let toDelete = []
    if (element[0] == ".") {
        element = LastElementLogic("_RemoveElementWithClass", element)
      } else if (element[0] == "#") {
        element = document.querySelector(element)
      }
      for (let i = 0; i < element.childNodes.length; i++) {
          if (element.childNodes[i].classList.contains(className)) {
              toDelete.push(element.childNodes[i])
            }        
        }
        for (let i = 0; i < toDelete.length; i++) {
          toDelete[i].remove()
        }
  }

  export function _CheckElementsWithClass(className) {
    let elements = document.querySelectorAll(className)
    for (let i = 0; i < elements.length; i++) {
        elements[i].checked = true
    }
  }

  export function _UncheckElementsWithClass(className) {
    let elements = document.querySelectorAll(className)
    for (let i = 0; i < elements.length; i++) {
        elements[i].checked = false
    }
  }

  export function _DispatchEventToElementsWithClass(className, event, checked) {
    let elements = document.querySelectorAll(className)
    for (let i = 0; i < elements.length; i++) {
        if (checked == 1) {
            if (elements[i].checked && !_HasClass(elements[i].parentElement.parentElement, "completed")) {
                elements[i].dispatchEvent(new Event(event))
            }
        } else if (checked == 0) {
            if (!elements[i].checked && _HasClass(elements[i].parentElement.parentElement, "completed")) {
                elements[i].dispatchEvent(new Event(event))
            }
        } else {
            elements[i].dispatchEvent(new Event(event))
        }
    }
  }

  export function _CheckedElementsWithClass(className, bool) {
    let elements = document.querySelectorAll(className)
    let count = 0
    for (let i = 0; i < elements.length; i++) {
        if (bool && elements[i].checked) {
            count++
        } else if (!bool && !elements[i].checked) {
            count++
        }
    }
    if (count == elements.length) {
        return true
    }
    return false
  }