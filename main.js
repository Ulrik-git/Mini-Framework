import { Quack } from "./quack.JS/quack.js";

let todos = []
const storedTodos = localStorage.getItem('todos');
const todos2 = storedTodos ? JSON.parse(storedTodos) : [];


Quack.event._AddEvent("click",()=>{alert("aa")},"input")
Quack.layer._CreateDOM("section",".todoapp",false)
  Quack.layer._CreateDOM("header",".header",true)
    Quack.layer._CreateDOM("h1", "#title",true)
    Quack.custom._Text("#title","todos")
    Quack.layer._CreateDOM("input",".new-todo",false)
    Quack.custom._Attr(".new-todo","placeholder","What needs to be done?")
    Quack.custom._Attr(".new-todo","id","new-todo")
  Quack.layer._UpLayer(1)
  Quack.layer._CreateDOM("section",".main",false)
  Quack.layer._CreateDOM("input","#toggle-all",true)
  Quack.custom._Attr("#toggle-all", "class", "toggle-all")
  Quack.custom._Attr("#toggle-all","type","checkbox")
  Quack.layer._CreateDOM("label","#mark",false)
  Quack.custom._Attr("#mark","for","toggle-all")
  Quack.event._AddEvent("click",function(){
    if (this.checked) {
      Quack.monitor._CheckElementsWithClass('.toggle')
      Quack.monitor._DispatchEventToElementsWithClass('.toggle', 'change', 1)
    } else {
      Quack.monitor._UncheckElementsWithClass('.toggle')
      Quack.monitor._DispatchEventToElementsWithClass('.toggle', 'change', 0)
    }
    updateCount()
  },"#toggle-all")
  Quack.custom._Text("#mark","Mark all as complete")
  Quack.layer._CreateDOM("ul",".todo-list",false)
  function updateCount() {
    let count = Quack.monitor._CountChildrenOfElement('.todo-list') - Quack.monitor._CountChildrenOfElementWithClass(".todo-list", "completed")
    if (count == 1) {
      Quack.custom._Text(".todo-count", count + " item left")
    } else {
      Quack.custom._Text(".todo-count", count + " items left")
    }
    if (Quack.monitor._CountChildrenOfElementWithClass(".todo-list", "completed") > 0) {
      Quack.visibility._ShowElement(".clear-completed")
    } else {
      Quack.visibility._HideElement(".clear-completed")
    }
    if (document.querySelector(".todo-list").children.length == 0) {
      Quack.visibility._HideElement(".footer")
      Quack.visibility._HideElement("#mark")
    }
    const todoListItems = document.querySelectorAll('.todo-list li');
    todos = []
    todoListItems.forEach(item => {
      const todoText = item.querySelector('label').textContent;
      const isCompleted = item.classList.contains('completed');
      todos.push({ text: todoText, completed: isCompleted });
    });
    Quack.storage.setLocalStorage("todos", JSON.stringify(todos))
  }
  Quack.event._AddEvent("keydown",function(e){
    if (e.keyCode == 13 && Quack.monitor._Get(".new-todo") != "") {
      console.log(e)
      createChild(e)
      
    }
  },"input")
  function createChild(e, data) {
  Quack.visibility._ShowElement(".footer")
  Quack.visibility._ShowElement("#mark")
  Quack.layer._CreateDOM("li",".l",true, ".todo-list")
  Quack.layer._CreateDOM("div",".view",true, ".l")
  Quack.layer._CreateDOM("input",".toggle",true, ".view")
  Quack.custom._Attr(".toggle","type","checkbox")
  Quack.layer._CreateDOM("label",".lbl",false, ".view")
      if (data) {
        Quack.custom._Text(".lbl", data["text"])
      } else {
        Quack.custom._Text(".lbl",Quack.monitor._Get(".new-todo"))
      }
      Quack.monitor._ClearValue(".new-todo")
      Quack.layer._CreateDOM("button",".destroy",false, ".view")
      let list1 = document.querySelectorAll('.l')[document.querySelectorAll('.l').length-1]
      if (data && data["completed"]) {
        //Quack.monitor._AddClass(document.querySelectorAll('.l')[document.querySelectorAll('.l').length-1], "completed")
        Quack.monitor._AddClass(list1, "completed")
        document.querySelectorAll('.toggle')[document.querySelectorAll('.toggle').length-1].checked = true
        data["completed"] = false
      }
      Quack.event._AddEventToLastOfElement("change",function(){
        let list = this.parentElement.parentElement
        //console.log("i")
        if (Quack.monitor._HasClass(list, "completed")) {
          Quack.monitor._RemoveClass(list, "completed")
        } else {
          Quack.monitor._AddClass(list, "completed")
        }
        if (Quack.monitor._CheckedElementsWithClass('.toggle', true)) {
          Quack.monitor._CheckElementsWithClass('#toggle-all')
        } else {
          Quack.monitor._UncheckElementsWithClass('#toggle-all')
        }
        updateCount()
      }, ".toggle")
      updateCount()
      Quack.event._AddEvent("click",function(){
        Quack.monitor._DeleteParent(this.parentNode)
        updateCount()
      },".destroy")
  }
Quack.layer._UpLayer(1)
Quack.layer._CreateDOM("footer",".footer",false)
  Quack.layer._CreateDOM("span",".todo-count",true)
  Quack.custom._Text(".todo-count", "1 item left")
  Quack.layer._CreateDOM("ul",".filters",false)
    Quack.layer._CreateDOM("li","",true)
      Quack.layer._CreateDOM("a",".selected1",true)
      Quack.custom._Attr(".selected1", "href", "#/")
      Quack.custom._Text(".selected1","All")
      Quack.monitor._AddClassToElementsOfClass("selected", ".selected1")
      Quack.event._AddEvent("click",function(){
        Quack.monitor._AddClassToElementsOfClass('selected', '.selected1')
        Quack.monitor._RemoveClassFromElementsOfClass('selected', '.selected2')
        Quack.monitor._RemoveClassFromElementsOfClass('selected', '.selected3')
        Quack.visibility._ShowElementsWithClass('.l')
        Quack.visibility._ShowElementsWithClass('.completed')
        updateCount()
      },".selected1")
    Quack.layer._UpLayer(1)
    Quack.layer._CreateDOM("li","",false)
      Quack.layer._CreateDOM("a",".selected2",true)
      Quack.custom._Attr(".selected2", "href", "#/active")
      Quack.custom._Text(".selected2","Active")
      Quack.event._AddEvent("click",function(){
        Quack.monitor._RemoveClassFromElementsOfClass('selected', '.selected1')
        Quack.monitor._AddClassToElementsOfClass('selected', '.selected2')
        Quack.monitor._RemoveClassFromElementsOfClass('selected', '.selected3')
        Quack.visibility._ShowElementsWithClass('.l')
        Quack.visibility._HideElementsWithClass('.completed')
        updateCount()
      },".selected2")
    Quack.layer._UpLayer(1)
    Quack.layer._CreateDOM("li","",false)
      Quack.layer._CreateDOM("a",".selected3",true)
      Quack.custom._Attr(".selected3", "href", "#/completed")
      Quack.custom._Text(".selected3","Completed")
      Quack.event._AddEvent("click",function(){
        Quack.monitor._RemoveClassFromElementsOfClass('selected', '.selected1')
        Quack.monitor._RemoveClassFromElementsOfClass('selected', '.selected2')
        Quack.monitor._AddClassToElementsOfClass('selected', '.selected3')
        Quack.visibility._HideElementsWithClass('.l')
        Quack.visibility._ShowElementsWithClass('.completed')
        updateCount()
      },".selected3")
  Quack.layer._UpLayer(2)
  Quack.layer._CreateDOM("button",".clear-completed",false)
  //Quack.custom._Text(".selected3","Completed")
  Quack.custom._Text(".clear-completed","Clear completed")
  Quack.event._AddEvent("click",function(){
    Quack.route._setRoute("/#")
    Quack.monitor._RemoveChildrenElementWithClass('.todo-list', 'completed')
    updateCount()
  },".clear-completed")
Quack.layer._UpLayer("*")
Quack.layer._CreateDOM("footer",".info",false)
  Quack.layer._CreateDOM("p",".footer-info",true)
  Quack.custom._Text(".footer-info","Double-click to edit a todo")
  Quack.layer._CreateDOM("p",".footer-creators",false)
  Quack.custom._Text(".footer-creators","Created by Ulrik And Waahx")
  Quack.layer._CreateDOM("p",".footer-part-of",false)
  Quack.custom._Text(".footer-part-of","Part of TodoMVC (un-officially)")

updateCount()

for (let i = 0; i < todos2.length; i++) {
  createChild("", todos2[i])
}
Quack.layer._Display("*")