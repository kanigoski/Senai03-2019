import { VpHttp } from './http/vphttp';
import { prompt } from 'inquirer';

interface ICategorias {
    codigo: number;
    descricao: string;
}

interface IProdutos {
    descricao : string;
    categoria : number;
    saldo : number;
}


export class CategoriaProduto {
    private url = 'http://5c6c7976d51de300146f5b50.mockapi.io/';
    private produtos : Array<IProdutos> = [];
    private categorias : Array<ICategorias> = [];
    private listaProdutos : Array<IProdutos> = [];
    private codigoCategoria : number = 0;

    public categoriaProduto() {
        this.getCategorias();
    }

    private gerarPerguntas() {
        prompt (
            [
                {
                    name: 'categorias',
                    type: 'list',
                    message: 'Categoria:',
                    choices: this.categorias.map(i => i.descricao),
                    default: 0
                }
            ]
        ).then(
            (categoria : any) => {
               this.categorias.map(i => {
                    if (i.descricao === categoria.categorias) {
                        this.codigoCategoria = i.codigo;
                    }
               });

               if (this.codigoCategoria !== 0) {
                   this.getProduto();
               }
            }
        )
    }

    private getProduto() {
        this.produtos.map(i => {
            if(i.categoria === this.codigoCategoria) {
                this.listaProdutos.push(i);
            }
        });

        if(this.listaProdutos !== []) {
            this.listarProdutos();
        } else {
            console.log('Nenhum Produto Encontrado Para a Categoria!');
        }
    }

    private listarProdutos() {
        this.listaProdutos.map(i => {
            console.log(`Produto: ${i.descricao} - Estoque: ${i.saldo}`);
        })
    }

    private getCategorias() {
        new VpHttp(`${this.url}/categorias`).get().subscribe(
            (data : any) => {
                this.categorias = data;

                if (this.categorias !== []) {
                    this.getProdutos();
                } else {
                    console.log('Não foi possível buscar dados na inicialização do programa!');
                }
            },
            (error : any) => {
                console.log('Erro ao obter lista de Categorias');
            }
        );
    }

    private getProdutos() {
        new VpHttp(`${this.url}/produtos`).get().subscribe(
            (data : any) => {
                this.produtos = data;

                if (this.produtos !== []) {
                    this.gerarPerguntas();
                } else {
                    console.log('Não foi possível buscar dados na inicialização do programa!');
                }
            },
            (error : any) => {
                console.log('Erro ao obter lista de Categorias');
            }
        );
    }
}

new CategoriaProduto().categoriaProduto();