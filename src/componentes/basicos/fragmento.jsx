import React from 'react'

export default function Fragmento(props) {
    return (
        <React.Fragment key="1">
            {/*Se eu usar o React.fragment eu posso definir atributos e parametros */}
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro</p>

            <>
                {/*Se eu usar a versão minimalista do react.fragment eu nao consigo usar atributos e parametros */}
            </>
        </React.Fragment>


    )

}