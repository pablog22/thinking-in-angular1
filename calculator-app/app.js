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


    this.plusButton = function(){
        console.log("Plus!");
        this.operation = "+";
    }

    this.minusButton = function(){
        console.log("Minus!");
        this.operation = "-";
    }

    this.timesButton = function(){
        console.log("Times!");
        this.operation = "*";
    }

    this.divideButton = function(){
        console.log("Divide!");
        this.operation = "/";
    }
}