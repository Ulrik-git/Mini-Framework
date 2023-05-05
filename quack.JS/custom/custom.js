import { LastElementLogic } from "../monitor/monitor.js";

export function _Attr(classname, attr, value) {
    let elems = document.querySelectorAll(classname)
    elems.forEach(element => {
      element.setAttribute(attr, value);
    });
}

export function _Text(classname,text) {
    LastElementLogic("_Text", classname, text)
}

export function _SetElementColor(element, color) {
    element.style.color = color
}