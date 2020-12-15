import React from 'react'

import Numeros from '../../data/numeração'

export default props => {

    const contParImpar = Numeros.map((num, i) => {
        return (
            <div key={i}> {num % 2 === 0 ? <div>Par</div> : <div>imPar</div>} </div>
        )
    })


    const contImparPar = _ => {
        return Numeros.map((num, i) => {
            return (
                <div key={i}> {num % 2 === 0 ? <div>Par</div> : <div>imPar</div>} </div>
            )
        })
    }

    return (
        <div>
            <div>operação com maps em variavel</div>
            {contParImpar}
            <div>Operação com maps em função</div>
            {contImparPar()}
        </div>
    )
}