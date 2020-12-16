import React, { useState } from 'react'



export default props => {

    function gerarNumeroNaoContido(min, max, array) {

        const aleatório = parseInt(Math.random() * (max + 1 - min)) + min

        return array.includes(aleatório) ? gerarNumeroNaoContido(min, max, array) : aleatório
    }


    function gerarNumeros(qtd) {

        const numeros = Array(qtd).fill(0).reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)

            return [...nums, novoNumero]
        }, []).sort((n1, n2) => n1 - n2)

        return numeros;
    }

    const [quantidade, setQuantidade] = useState(props.qtd || 6)
    const numeroInicial = gerarNumeros(quantidade)
    const [numeros, setNumeros] = useState(numeroInicial);




    return (
        <div>
            <h2>Megasena</h2>
            <p>{numeros.join(" ")}</p>

            <label htmlFor="">Quantidade de números</label>
            <input

                min="6"
                max="8"
                onChange={e => {
                    setQuantidade(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))

                }} type="number" value={quantidade} />

            <button onClick={_ => setNumeros(gerarNumeros(quantidade))}>Gerar Numeros</button>
        </div>
    )

}


