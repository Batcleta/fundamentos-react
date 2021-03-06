import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="passoImput"></label>
            <input
                id="passoImput"
                type="number"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)} />
        </div>
    )
}