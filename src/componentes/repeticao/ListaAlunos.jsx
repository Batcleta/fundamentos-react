import React from 'react'
import alunos from '../../data/alunos'

export default props => {

    const listaAlunos = alunos.map((bilola) =>{

        return(

            <li key={bilola.id}>
                {bilola.id} ) <strong>{bilola.nome}</strong> -> {bilola.nota}
            </li>

        )

    })

    return (
        <div>
            <ul style={{listStyle:'none', display:'flex', flexDirection: 'column', alignItems: 'start'}}>
                { listaAlunos }
            </ul>
        </div>

    )
}