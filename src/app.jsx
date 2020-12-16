import React from 'react'

/*Treinamento Bonus*/

/* Criar um contador utilizando uma função */
import ContadorFunc from './componentes/contador/contadorfunc'

/*Aulas Principais*/
import Contador from './componentes/contador/contador'
import Input from './componentes/formulario/input'
import IndiretaPai from './componentes/comunicacao/IndiretoPai'
import DiretaPai from './componentes/comunicacao/DiretaPai'
import Usuario from './componentes/condicional/Usuario'
import ParOuImpar from './componentes/condicional/ParOuImpar'
import TabelaProdutos from './componentes/repeticao/TabelaProdutos'
import ListaAlunos from './componentes/repeticao/ListaAlunos'
import Familia from './componentes/basicos/familia'
import FamiliaMembro from './componentes/basicos/membro'
import Card from './componentes/layout/card'
import Aleatorio from './componentes/basicos/aleatorio'
import Fragmento from './componentes/basicos/fragmento'
import ComParametro from './componentes/basicos/ComParametro'
import Primeiro from './componentes/basicos/primeiro'

import './App.css'




export default _ =>
    <div id="App">
        <h1>Fundamentos do React</h1>



        <div className="Cards">


            <Card titulo="#12,5 - ContadorFunc " color="#424242">

                <ContadorFunc valorInicial={10} />

            </Card>

            <Card titulo="#12 - Contador " color="#424242">

                <Contador valorInicial={10} />

            </Card>

            <Card titulo="#11 - Compunente controlado (input) " color="#e45f56">

                <Input></Input>

            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8bad39">

                <IndiretaPai></IndiretaPai>

            </Card>

            <Card titulo="#9 - Comunicação Direta" color="#59323c">

                <DiretaPai></DiretaPai>

            </Card>

            <Card titulo="#8 - Renderização condiional" color="#982395">

                <ParOuImpar numero={19}></ParOuImpar>
                <Usuario usuario={{ nome: 'Washington' }} />
                <Usuario usuario={{ nome: '' }} />
                <Usuario usuario={{ email: 'washington@ferreira.com' }} />
                <Usuario usuario={{}} />
                <Usuario />

            </Card>

            <Card titulo="#7 - Desafio repetição em tabelas" color="#3a9ad9">

                <TabelaProdutos></TabelaProdutos>

            </Card>

            <Card titulo="#6 - repetição" color="#ff4c65">

                <ListaAlunos></ListaAlunos>

            </Card>

            <Card titulo="#5 - Componente com filhos" color="#600">
                <Familia sobrenome="Ferreira" idademedia="30 anos" >
                    <FamiliaMembro nome="washington" />
                    <FamiliaMembro nome="Caroline" />
                    <FamiliaMembro nome="Elza" />


                </Familia>
            </Card>

            <Card titulo="#4 - Desafio Aleatório" color="#080">
                <Aleatorio min="5" max="20"></Aleatorio>

            </Card>

            <Card titulo="#3 - Fragmento" color="#0066ff">
                <Fragmento />
            </Card>

            <Card titulo="#2 - ComParametro" color="#ff5050">
                <ComParametro
                    titulo="notas"
                    aluno="Pedro"
                    sobrenome="Luiz Ferreira"
                    nota={6.5}
                />

            </Card>

            <Card titulo="#1 - Primeiro Componente" color="#cc33ff">
                <Primeiro />
            </Card>

        </div>
    </div>
