import React from 'react'

import Numeros from '../../data/numeração'

export default props => {

    const contPar = Numeros.map((num, i) => {
        return (
            <div key={i}> {num % 2 === 0 ? <div>Par</div> : <div>imPar</div>} </div>
        )
    })

    return (
        <div>
            {contPar}

        </div>
    )
}