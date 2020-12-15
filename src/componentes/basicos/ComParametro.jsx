import React from 'react'
import ReactDOM from 'react-dom'

export default (props) => {

    const resultado = props.nota >= 7 ? 'aprovado(a)' : 'reprovado(a)'
    const aluno = props.aluno
    const sobrenome = props.sobrenome
    const nota = props.nota

    return (
        <div>
            <h3>{props.titulo}</h3>
            <p>O aluno <strong> {aluno} {sobrenome} </strong>
             tirou
            <strong> {nota} </strong>
            na média final, e por isso foi
            <strong> {resultado} </strong>


            </p>
        </div>
    )

}