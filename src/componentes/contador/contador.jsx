import React, { Component } from 'react'

import Display from './display'
import Botoes from './botoes'
import PassoForm from './passoForm'

class Contador extends Component {

    state = {
        numero: this.props.valorInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    /* This dentro de uma função arrow pesquisar */
    /*inc = () => { this.setState({numero: this.state.numero + 1})} */

    inc() {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    /*inp(e) {
        this.setState({
            valor: this.e.target.value
        })
    } Minha tentativa */

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                {/* <p>Valor Inicial: {this.props.valorInicial}</p>*/}
                <Display numero={this.state.numero}></Display>

                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>

                <Botoes incrementar={e => this.inc()} decrementar={this.dec} />



            </div>
        )
    }


}





export default Contador