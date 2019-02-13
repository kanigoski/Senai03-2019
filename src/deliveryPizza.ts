import { prompt } from 'inquirer';

export class Pizzaria {
    private dadosPedido : any = null;
    private dadosEntrega : any = null;

    public deliveryPizza() {
        this.fazerPedido();
    }

    private fazerPedido() {
        prompt (
            [
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
            ]
        ).then(
            (pedido : any) => {
                this.dadosPedido = pedido;

                if (pedido.deliver == 'Sim') {
                    this.fazerEntrega();
                } else {
                    this.relatorio();
                }
            }
         )
    }

    private fazerEntrega() {
        prompt (
            [
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
            ]
        ).then(
            (entrega : any) => {
                this.dadosEntrega = entrega;

                this.relatorio();
            }
        )
    }

    private relatorio() {
        console.log(
            '\n\n-----------------------' +
            '\nDados do Pedido' +
            '\n-----------------------' +
            `\nNome: ${this.dadosPedido.name}` +
            `\nTelefone: ${this.dadosPedido.telephone}` +
            `\nTamanho: ${this.dadosPedido.size}` +
            `\nSabor: ${this.dadosPedido.flavor}` +
            `\nQuantidade: ${this.dadosPedido.qtde}` +
            `\nEntregar: ${this.dadosPedido.deliver}`
        );

        if (this.dadosEntrega != null) {
            console.log(
                '\n-----------------------' +
                '\nDados de Entrega' +
                '\n-----------------------' +
                `\nCidade: ${this.dadosEntrega.city}` +
                `\nBairro: ${this.dadosEntrega.neighborhood}` +
                `\nRua: ${this.dadosEntrega.street} - nº ${this.dadosEntrega.number}` +
                `\nComplemento: ${this.dadosEntrega.complement}`);
        }
    }
};

new Pizzaria().deliveryPizza();