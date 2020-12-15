import React from 'react'

export default (props) => {
    const {min, max} = props

    const embaralhar = Math.floor(Math.random() * (max - min) + min)
    return (
        <div>
            <h2>Teste de aleatoriedade</h2>
            <h3> Numero Mínimo
                <strong> {min}, </strong>
                Número Máximo
                <strong> {max} </strong>
                Número aleatório
                <strong> {embaralhar} </strong>
            </h3>

        </div>
    )
}