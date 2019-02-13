"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Pizzaria = /** @class */ (function () {
    function Pizzaria() {
        this.dadosPedido = null;
        this.dadosEntrega = null;
    }
    Pizzaria.prototype.deliveryPizza = function () {
        this.fazerPedido();
    };
    Pizzaria.prototype.fazerPedido = function () {
        var _this = this;
        inquirer_1.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Nome:',
            },
            {
                name: 'telephone',
                type: 'input',
                message: 'Telefone:',
            },
            {
                name: 'size',
                type: 'list',
                message: 'Tamanho da Pizza:',
                choices: ['Pequena', 'Média', 'Grande'],
                default: 0,
            },
            {
                name: 'flavor',
                type: 'list',
                message: 'Sabor da Pizza:',
                choices: ['Marguerita', 'Calabresa', '4 Queijos', 'Mion'],
                default: 0,
            },
            {
                name: 'qtde',
                type: 'input',
                message: 'Quantidade:',
                default: 1
            },
            {
                name: 'deliver',
                type: 'list',
                message: 'Entregar?',
                choices: ['Sim', 'Não']
            }
        ]).then(function (pedido) {
            _this.dadosPedido = pedido;
            if (pedido.deliver == 'Sim') {
                _this.fazerEntrega();
            }
            else {
                _this.relatorio();
            }
        });
    };
    Pizzaria.prototype.fazerEntrega = function () {
        var _this = this;
        inquirer_1.prompt([
            {
                name: 'city',
                type: 'input',
                message: 'Cidade:'
            },
            {
                name: 'neighborhood',
                type: 'input',
                message: 'Bairro:'
            },
            {
                name: 'street',
                type: 'input',
                message: 'Rua:'
            },
            {
                name: 'number',
                type: 'input',
                message: 'Número:'
            },
            {
                name: 'complement',
                type: 'input',
                message: 'Complemento:'
            }
        ]).then(function (entrega) {
            _this.dadosEntrega = entrega;
            _this.relatorio();
        });
    };
    Pizzaria.prototype.relatorio = function () {
        console.log('\n\n-----------------------' +
            '\nDados do Pedido' +
            '\n-----------------------' +
            ("\nNome: " + this.dadosPedido.name) +
            ("\nTelefone: " + this.dadosPedido.telephone) +
            ("\nTamanho: " + this.dadosPedido.size) +
            ("\nSabor: " + this.dadosPedido.flavor) +
            ("\nQuantidade: " + this.dadosPedido.qtde) +
            ("\nEntregar: " + this.dadosPedido.deliver));
        if (this.dadosEntrega != null) {
            console.log('\n-----------------------' +
                '\nDados de Entrega' +
                '\n-----------------------' +
                ("\nCidade: " + this.dadosEntrega.city) +
                ("\nBairro: " + this.dadosEntrega.neighborhood) +
                ("\nRua: " + this.dadosEntrega.street + " - n\u00BA " + this.dadosEntrega.number) +
                ("\nComplemento: " + this.dadosEntrega.complement));
        }
    };
    return Pizzaria;
}());
exports.Pizzaria = Pizzaria;
;
new Pizzaria().deliveryPizza();
