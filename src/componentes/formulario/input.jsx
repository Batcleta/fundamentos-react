import React, { useState } from 'react'

export default props => {

    const [valor, setValor] = useState('valor pau no seu cu')
    const [textarea, setTextarea] = useState('teste')

    function quandoMudarInput(e) {
        setValor(e.target.value)
    }

    function quandoMudarTextarea(e) {
        setTextarea(e.target.value)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudarInput} />
            <input value={valor} readOnly /> {/* Caso nao exista um evento de mudança, é ideal que tenha o readOnly ou da erro */}
            <input value={undefined} />
            <textarea value={textarea} onChange={quandoMudarTextarea} ></textarea>
        </div>
    )
}