import React, { useState } from 'react'

import IndiretaFilho from './IndiretaFilho'

export default props => {

    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)
    let [teste, setTest] = useState(0)

    function fornecerInformacoes(nome, idade, nerd, teste) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
        setTest(teste)

        console.log(nome, idade, nerd, teste)
    }

    return (
        <div>

            <span>{nome}</span>
            <span> <strong> {idade} </strong></span>
            <span>{nerd ? 'verdadeiro' : 'falso'}</span>

            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}