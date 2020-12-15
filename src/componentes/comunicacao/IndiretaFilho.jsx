import React from 'react'

export default props => {

    const cb = props.quandoClicar

    const gerarIdade = () => parseInt(Math.random() * (120)) + 10
    const gerarNerd = () => Math.random() > 0.5
    const teste = parseInt(gerarNerd())

    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('Pedro', gerarIdade(), gerarNerd(), teste)}>
                Fornecer informações
            </button>
        </div>
    )
}