var app = angular.module("ngModelExamples", []);

app.controller("ExamplesCtrl", ExamplesCtrl);

function ExamplesCtrl() {

    this.booleanValue = false;

    this.textChange = function() {
        console.log("Textbox changed.");
    }

}