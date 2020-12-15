import React from 'react'

export default props => {

    const nome = props.nome
    const sobrenome = props.sobrenome

    return (
        <div>{ nome } <strong> { sobrenome} </strong> { props.idademedia}</div>
    )
}