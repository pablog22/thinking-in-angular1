var app = angular.module("calculatorApp", []);

app.controller("CalculatorCtrl", CalculatorCtrl);

function CalculatorCtrl(){
    
    this.operation = "?";
    this.result = 0;

    this.executeButton = function(){
        console.log("Execute!");
        if (this.operation == "+") {
            console.log("Executing +!");
            this.result = this.operand1 + this.operand2;
        } else if (this.operation == "-") {
            console.log("Executing -!");
            this.result = this.operand1 - this.operand2;
        } else if (this.operation == "*") {
            console.log("Executing *!");
            this.result = this.operand1 * this.operand2;
        } else if (this.operation == "/") {
            console.log("Executing /!");
            this.result = this.operand1 / this.operand2;
        } else {
            console.log("No op selected!")
        }
    }


    this.operationButton = function(operation){
        console.log("Operand selected: " + operation);
        this.operation = operation;
    }
}