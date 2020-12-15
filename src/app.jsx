import React from 'react'

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

            <Card titulo="#8 - Renderização condiional" color="#982395">
                
                <ParOuImpar numero={19}></ParOuImpar>

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
