import { LastElementLogic } from "../monitor/monitor.js";

export function _AddEvent(event,func,type) {
    var elems = document.querySelectorAll(type);
    elems.forEach(elem => {
      elem.addEventListener(event,func);
    });
}

export function _AddEventToLastOfElement(event,func,type) {
    let t = LastElementLogic("_AddEventToLastOfElement", type)
    t.addEventListener(event,func);
}

export function _RemoveEvent(event, func, type) {
    var elems = document.querySelectorAll(type);
    elems.forEach(elem => {
      elem.removeEventListener(event,func);
    });
}