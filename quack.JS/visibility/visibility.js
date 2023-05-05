import { LastElementLogic } from "../monitor/monitor.js";

export function _HideElement(element) {
    LastElementLogic("_HideElement", element);
}
  
export function _ShowElement(element) {
    LastElementLogic("_ShowElement", element);
}
  
export function _HideElements(element) {
    document.querySelectorAll(element).style.display = 'none';
}

export function _ShowElementsWithClass(element) {
    let elements = document.querySelectorAll(element)
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'block';
    }
}

export function _HideElementsWithClass(element) {
    let elements = document.querySelectorAll(element)
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}
