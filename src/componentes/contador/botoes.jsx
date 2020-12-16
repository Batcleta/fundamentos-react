import React from 'react'

export default props => {
    return (
        <div>
            {/* <button onClick={this.inc}>+</button>*/}
            {/* É possivel chamar a arro function dentro do onCLick */}

            {/*<button onClick={e => this.inc()}>+</button>
            <button onClick={this.dec}>-</button>*/}

            <button onClick={props.incrementar}>+</button>
            <button onClick={props.decrementar}>-</button>

        </div>
    )
}