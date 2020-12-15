import './card.css'
import React from 'react'

export default props => {

    const CardStyle = {
        backgroundColor: props.color || 'Crimson',
        borderColor: props.color || 'crimson'
    }

    return (

        <div className="card" style={ CardStyle }>
            <div className="title">{props.titulo}</div>
            <div className="content">
                { props.children }
            </div>
        </div>

    )
}