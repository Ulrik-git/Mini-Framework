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