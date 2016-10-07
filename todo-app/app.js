var app = angular.module("todoApp", []);

app.controller("TodoAppController", TodoAppController);

function TodoAppController() {

    this.newElement = "";
    this.editEnabled = false;
    
    this.addButton = function() {
        console.log("Adding element: " + this.newElement);
        this.list.push(this.newElement);
        this.newElement = "";
    }

    this.setEditEnabled = function(param) {
        this.editEnabled = param;
    }

    this.deleteTask = function(taskIndex) {
        console.log("About to delete task index: " + taskIndex);
        this.list.splice(taskIndex, 1);
    }
    
    
    this.list = [
        "Learn Angular 1",
        "Visit Java Brains site",
        "Learn more Angular"
    ];
}