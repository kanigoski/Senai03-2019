import { prompt } from 'inquirer';

export class Pizzaria {
    public deliveryPizza() {
        let dadosUsuario = {};
        let dadosEntrega = {};

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
            (deliver : any) => {
                dadosUsuario = deliver;

                if (deliver.deliver === 'Sim') {
                    prompt(
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
                        (address : any) => {
                            dadosEntrega = address;
                        }
                    )
                }
            }
        )
    }
};

new Pizzaria().deliveryPizza();