import React from 'react'

import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho
                nome="Filho do Brasil"
                idade={51}
                nerd={false}
            />
            <DiretaFilho
                nome="Washington"
                idade={30}
                nerd={true}
            />
        </div>
    )
}