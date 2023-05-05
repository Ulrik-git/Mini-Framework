
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
  
  export function _Clear() {
    custom_element_child = [];
    custom_element = [];
    layer = 0;
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

  export function _Display(name) {
    custom_element.forEach((element,index) => {
      console.log(name, element, index)
      if (name == "*" && !custom_element_child[index]) {
        document.body.appendChild(element)
      }
    });
}

export function _Undisplay(selector) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
      elements[i].parentNode.removeChild(elements[i]);
    }
}