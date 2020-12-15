import React from 'react'

import Produtos from '../../data/produtos'
import './tabelaProdutos.css'

export default (props) => {

    const listaProdutos = (
        <tr>
            <td>{Produtos[0].id}</td>
            <td>{Produtos[0].produto}</td>
            <td>{Produtos[0].preço}</td>
        </tr>
    )

    const listarProdutos = Produtos.map((prod, i) =>{
        return(
            <tr key={prod.id} className={i % 2 === 0 ? 'par' : ''}>
                <td>{prod.id}</td>
                <td>{prod.produto}</td>
                <td>R$ {prod.preço.toFixed(2)}</td>
            </tr>
        )
    })
    return (

        <table>
            <thead>
                 <tr>
                    <th> ID </th>
                    <th> PRODUTO </th>
                    <th> PREÇO </th>
                </tr>
            </thead>
            <tbody>
                {listarProdutos}
            </tbody>
        </table>


    )

}