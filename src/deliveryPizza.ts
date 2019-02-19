import { VpHttp } from './http/vphttp';
import { prompt } from 'inquirer';

interface ISabores {
    sabor: string;
    disponivel: boolean;
}
interface ITamanhos {
    tamanho: string;
}
interface ICidades {
    descricao: string;
}

interface IBairros {
    descricao: string;
}
export class Pizzaria {
    private url = 'http://5c649b61c969210014a32eb6.mockapi.io';
    private dadosPedido : any = null;
    private dadosEntrega : any = null;
    private sabores : Array<ISabores> = [];
    private validaSabores : Array<ISabores> = [];
    private tamanhos : Array<ITamanhos> = [];
    private cidades : Array<ICidades> = [];
    private bairros : Array<IBairros> = [];

    public deliveryPizza() {
        this.getSabores();
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
                    choices: this.tamanhos.map(i => i.tamanho),
                    default: 0,
                },
                {
                    name: 'flavor',
                    type: 'list',
                    message: 'Sabor da Pizza:',
                    choices: this.sabores.map(i => i.sabor),
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
                    type: 'list',
                    message: 'Cidade:',
                    choices: this.cidades.map(i => i.descricao ),
                    default: 0
                },
                {
                    name: 'neighborhood',
                    type: 'list',
                    message: 'Bairro:',
                    choices: this.bairros.map(i => i.descricao),
                    default: 0
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

    public getSabores(){
        new VpHttp(`${this.url}/sabor`).get().subscribe(
            (data : any) => {
                this.validaSabores = data;

                this.validaSabores.map(i => {
                    if (i.disponivel) {
                        this.sabores.push(i);
                    }
                });

                if (this.sabores !== []) {
                    this.getTamanhos();
                } else {
                    console.log('Nenhum sabor encontrado!');
                }
            },
            (error : any) => {
                console.log('Erro ao obter lista de sabores');
                return;
            }
        );
    }

    public getTamanhos() {
        new VpHttp(`${this.url}/tamanho`).get().subscribe(
            (data : any) => {
                this.tamanhos = data;

                if (this.tamanhos !== []) {
                    this.getCidades();
                } else {
                    console.log('Nenhum tamanho encontrado!');
                }
            },
            (error : any) => {
                console.log('Erro ao obter lista de tamanhos');
            }
        );
    }

    public getCidades() {
        new VpHttp(`${this.url}/cidades`).get().subscribe(
            (data : any) => {
                this.cidades = data;

                if (this.cidades !== []) {
                    this.getBairros();
                } else {
                    console.log('Nenhuma cidade encontrada!');
                }
            },
            (error : any) => {
                console.log('Erro ao obter lista de cidades');
            }
        );
    }

    public getBairros() {
        new VpHttp(`${this.url}/bairros`).get().subscribe(
            (data : any) => {
                this.bairros = data;

                if (this.bairros !== []) {
                    this.fazerPedido();
                } else {
                    console.log('Nenhum bairro encontrado!');
                }
            },
            (error : any) => {
                console.log('Erro ao obter lista de bairros');
            }
        );
    }
};

new Pizzaria().deliveryPizza();