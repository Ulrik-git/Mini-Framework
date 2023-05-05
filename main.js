import * as quack from "./quack.js";

let todos = []
const storedTodos = localStorage.getItem('todos');
const todos2 = storedTodos ? JSON.parse(storedTodos) : [];

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
    if (document.querySelector(".todo-list").children.length == 0) {
      quack._HideElement(".footer")
      quack._HideElement("#mark")
    }
    const todoListItems = document.querySelectorAll('.todo-list li');
    todos = []
    todoListItems.forEach(item => {
      const todoText = item.querySelector('label').textContent;
      const isCompleted = item.classList.contains('completed');
      todos.push({ text: todoText, completed: isCompleted });
    });
    quack.setLocalStorage("todos", JSON.stringify(todos))
  }
  quack._AddEvent("keydown",function(e){
    if (e.keyCode == 13 && quack._Get(".new-todo") != "") {
      console.log(e)
      createChild(e)
      
    }
  },"input")
  function createChild(e, data) {
  quack._ShowElement(".footer")
  quack._ShowElement("#mark")
  quack._CreateDOM("li",".l",true, ".todo-list")
  quack._CreateDOM("div",".view",true, ".l")
  quack._CreateDOM("input",".toggle",true, ".view")
  quack._Attr(".toggle","type","checkbox")
  quack._CreateDOM("label",".lbl",false, ".view")
      if (data) {
        quack._Text(".lbl", data["text"])
      } else {
        quack._Text(".lbl",quack._Get(".new-todo"))
      }
      quack._ClearValue(".new-todo")
      quack._CreateDOM("button",".destroy",false, ".view")
      let list1 = document.querySelectorAll('.l')[document.querySelectorAll('.l').length-1]
      if (data && data["completed"]) {
        //quack._AddClass(document.querySelectorAll('.l')[document.querySelectorAll('.l').length-1], "completed")
        quack._AddClass(list1, "completed")
        document.querySelectorAll('.toggle')[document.querySelectorAll('.toggle').length-1].checked = true
        data["completed"] = false
      }
      quack._AddEventToLastOfElement("change",function(){
        let list = this.parentElement.parentElement
        //console.log("i")
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
quack._UpLayer(1)
quack._CreateDOM("footer",".footer",false)
  quack._CreateDOM("span",".todo-count",true)
  quack._Text(".todo-count", "1 item left")
  quack._CreateDOM("ul",".filters",false)
    quack._CreateDOM("li","",true)
      quack._CreateDOM("a",".selected1",true)
      quack._Attr(".selected1", "href", "#/")
      quack._Text(".selected1","All")
      quack._AddClassToElementsOfClass("selected", ".selected1")
      quack._AddEvent("click",function(){
        quack._AddClassToElementsOfClass('selected', '.selected1')
        quack._RemoveClassFromElementsOfClass('selected', '.selected2')
        quack._RemoveClassFromElementsOfClass('selected', '.selected3')
        quack._ShowElementsWithClass('.l')
        quack._ShowElementsWithClass('.completed')
        updateCount()
      },".selected1")
    quack._UpLayer(1)
    quack._CreateDOM("li","",false)
      quack._CreateDOM("a",".selected2",true)
      quack._Attr(".selected2", "href", "#/active")
      quack._Text(".selected2","Active")
      quack._AddEvent("click",function(){
        quack._RemoveClassFromElementsOfClass('selected', '.selected1')
        quack._AddClassToElementsOfClass('selected', '.selected2')
        quack._RemoveClassFromElementsOfClass('selected', '.selected3')
        quack._ShowElementsWithClass('.l')
        quack._HideElementsWithClass('.completed')
        updateCount()
      },".selected2")
    quack._UpLayer(1)
    quack._CreateDOM("li","",false)
      quack._CreateDOM("a",".selected3",true)
      quack._Attr(".selected3", "href", "#/completed")
      quack._Text(".selected3","Completed")
      quack._AddEvent("click",function(){
        quack._RemoveClassFromElementsOfClass('selected', '.selected1')
        quack._RemoveClassFromElementsOfClass('selected', '.selected2')
        quack._AddClassToElementsOfClass('selected', '.selected3')
        quack._HideElementsWithClass('.l')
        quack._ShowElementsWithClass('.completed')
        updateCount()
      },".selected3")
  quack._UpLayer(2)
  quack._CreateDOM("button",".clear-completed",false)
  //quack._Text(".selected3","Completed")
  quack._Text(".clear-completed","Clear completed")
  quack._AddEvent("click",function(){
    quack._setRoute("/#")
    quack._RemoveChildrenElementWithClass('.todo-list', 'completed')
    updateCount()
  },".clear-completed")
quack._UpLayer("*")
quack._CreateDOM("footer",".info",false)
  quack._CreateDOM("p",".footer-info",true)
  quack._Text(".footer-info","Double-click to edit a todo")
  quack._CreateDOM("p",".footer-creators",false)
  quack._Text(".footer-creators","Created by Ulrik And Waahx")
  quack._CreateDOM("p",".footer-part-of",false)
  quack._Text(".footer-part-of","Part of TodoMVC (un-officially)")

updateCount()

for (let i = 0; i < todos2.length; i++) {
  createChild("", todos2[i])
}
quack._Display("*")