import React from 'react'

import If, { Else } from './if'

export default props => {

    const usuario = props.usuario || {}
    return (
        <div>
            <If teste={usuario && usuario.nome}>
                Seja bem vndo <strong>{usuario.nome}</strong> !
                <Else>
                    Seja bem vndo <strong>Amigão</strong> !
                </Else>

            </If>

        </div>
    )
}