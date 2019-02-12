"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Perguntas = /** @class */ (function () {
    function Perguntas() {
    }
    Perguntas.prototype.facaUmaPergunta = function () {
        inquirer_1.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Qual seu'
            }
        ]).then(function (answers) {
            console.log("\nOl\u00E1 " + answers.name + "!\n");
        });
    };
    return Perguntas;
}());
exports.Perguntas = Perguntas;
;
new Perguntas().facaUmaPergunta();
