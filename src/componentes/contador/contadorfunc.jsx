import React, { useState } from 'react'


export default props => {

    const vI = props.valorInicial
    const inc = 1

    let [vF, setVF] = useState('teste')

    function increase() {
        setVF('e.vF++')
        console.log(vF)
    }

    return (
        <div>
            <h2>Contador Function</h2>
            <h3>valor Inicial: {vF}</h3>
            <button onChange={increase}>+</button>
        </div>
    )
}