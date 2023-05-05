import * as quack from "./quack.js";

quack._CreateDOM("section",".todoapp",false)
  quack._CreateDOM("header",".header",true)
    quack._CreateDOM("h1", "#title",true)
    quack._Text("#title","todos")
    quack._CreateDOM("input",".new-todo",false)
    quack._Attr(".new-todo","placeholder","What needs to be done?")
    quack._Attr(".new-todo","id","new-todo")
  quack._UpLayer(1)
  quack._CreateDOM("section",".main",false)
  quack._CreateDOM("input","#toggle-all",true)
  quack._Attr("#toggle-all", "class", "toggle-all")
  quack._Attr("#toggle-all","type","checkbox")
  quack._CreateDOM("label","#mark",false)
  quack._Attr("#mark","for","toggle-all")
  quack._AddEvent("click",function(){
    if (this.checked) {
      quack._CheckElementsWithClass('.toggle')
      quack._DispatchEventToElementsWithClass('.toggle', 'change', 1)
    } else {
      quack._UncheckElementsWithClass('.toggle')
      quack._DispatchEventToElementsWithClass('.toggle', 'change', 0)
    }
    updateCount()
  },"#toggle-all")
  quack._Text("#mark","Mark all as complete")
  quack._CreateDOM("ul",".todo-list",false)
  function updateCount() {
    let count = quack._CountChildrenOfElement('.todo-list') - quack._CountChildrenOfElementWithClass(".todo-list", "completed")
    if (count == 1) {
      quack._Text(".todo-count", count + " item left")
    } else {
      quack._Text(".todo-count", count + " items left")
    }
    if (quack._CountChildrenOfElementWithClass(".todo-list", "completed") > 0) {
      quack._ShowElement(".clear-completed")
    } else {
      quack._HideElement(".clear-completed")
    }
  }
  quack._AddEvent("keydown",function(e){
    if (e.keyCode == 13 && quack._Get(".new-todo") != "") {
      console.log(e)
      quack._ShowElement(".footer")
      quack._ShowElement("#mark")
      quack._CreateDOM("li",".l",true, ".todo-list")
        quack._CreateDOM("div",".view",true, ".l")
          quack._CreateDOM("input",".toggle",true, ".view")
          quack._Attr(".toggle","type","checkbox")
          quack._CreateDOM("label",".lbl",false, ".view")
          quack._Text(".lbl",quack._Get(".new-todo"))
          quack._ClearValue(".new-todo")
          quack._CreateDOM("button",".destroy",false, ".view")
          quack._AddEventToLastOfElement("change",function(){
            //console.log("i")
            let list = this.parentElement.parentElement
            if (quack._HasClass(list, "completed")) {
              quack._RemoveClass(list, "completed")
            } else {
              quack._AddClass(list, "completed")
            }
            if (quack._CheckedElementsWithClass('.toggle', true)) {
              quack._CheckElementsWithClass('#toggle-all')
            } else {
              quack._UncheckElementsWithClass('#toggle-all')
            }
            updateCount()
          }, ".toggle")
          updateCount()
          quack._AddEvent("click",function(){
            quack._DeleteParent(this.parentNode)
            updateCount()
          },".destroy")
  
    }
  },"input")
quack._UpLayer(1)
quack._CreateDOM("footer",".footer",false)
  quack._CreateDOM("span",".todo-count",true)
  quack._Text(".todo-count", "1 item left")
  quack._CreateDOM("ul",".filters",false)
    quack._CreateDOM("li","",true)
      quack._CreateDOM("a",".selected",true)
      quack._Text(".selected","All")
    quack._UpLayer(1)
    quack._CreateDOM("li","",false)
      quack._CreateDOM("a",".selected2",true)
      quack._Text(".selected2","Active")
    quack._UpLayer(1)
    quack._CreateDOM("li","",false)
      quack._CreateDOM("a",".selected3",true)
      quack._Text(".selected3","Completed")
  quack._UpLayer(2)
  quack._CreateDOM("button",".clear-completed",false)
  //quack._Text(".selected3","Completed")
  quack._Text(".clear-completed","Clear completed")
  quack._AddEvent("click",function(){
    quack._setRoute("/#")
    quack._RemoveChildrenElementWithClass('.todo-list', 'completed')
  },".clear-completed")

if (document.querySelector(".todo-list").children.length == 0) {
  quack._HideElement(".footer")
  quack._HideElement("#mark")
}


quack._Display("*")