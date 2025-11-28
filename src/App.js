import { useState } from 'react'
import './App.css'

import MeuBotao from './componentes/button'
import MeuDisplay from './componentes/display'
// valor inicial da calculadora
const estadoInicial = {
  valorDoDisplay: '0',
  limparDisplay: false,
  operacao: null, // qual operador
  valores: [0,0], // recebe dois valores 
  qualValor: 0 // 0 = primeiro numero; 1 = segundo numero 
}

export default function Calculadora(){

    // controlar numer na tela
  const [valorDoDisplay, setValorDoDisplay] = useState(estadoInicial.valorDoDisplay)
    // se a tela deve ser limpa ao digitar
  const [limparDisplay, setLimparDisplay] = useState(estadoInicial.limparDisplay)
    // armazena qual operador esta sendo usado
  const [operacao, setOperacao] = useState(estadoInicial.operacao)
    // array com os valores do calculo 
  const [valores, setValores] = useState(estadoInicial.valores)
    // qual valor esta sendo usado (0, 1)
  const [qualValor, setQualValor] = useState(estadoInicial.qualValor)

  // o qualValor sera usado para caso o primeiro valor seja 0, ira pular pro proximo valor


  // AC - volta a calculadora pro estado inicial 
  function limparMemoria(){
    setValorDoDisplay('0')
    setLimparDisplay(false)
    setOperacao(null)
    setValores([0,0])
    setQualValor(0)
  }

  // define qual operacao esta sendo usada 
  function definirOperacao(op){
    // se o primeiro numero for 0, o qualValor mudara para o segundo valor
    if(qualValor === 0){
        // armazena + - / * em setOperacao
      setOperacao(op)
      // muda prar o segundo valor 
      setQualValor(1)
      // limpa a tela na proxima digitacao 
      setLimparDisplay(true)
    }else{

      const ehigual = op === '='

      // cria copia dos valores 
      const updated = [...valores]
      // valor; operador; valor ==  rmazenado numa nova funcao 
      updated[0] = new Function(`return ${updated[0]} ${operacao} ${updated[1]}`)() 
      // prepara o segundo valor para ser calculado 
      updated[1] = 0

    // transformar em uma string 
      setValorDoDisplay(String(updated[0]))
      // salva os valores atualizados
      setValores(updated)
      //se for =, reseta para null; senão, usa a nova op
      setOperacao(ehigual ? null : op)
      // mantem o valor 1 caso nao seja clicado o =
      setQualValor(ehigual ? 0 : 1)
      // se for diferente de = , limpara o resultado
      setLimparDisplay(!ehigual)
    }
  }
  // quando clica nos numeros ou no ponto 
  function adicionarDigitos(d){
    // se o valor digitado for ponto e o valorDoDisplay ja tiver um ponto, nao acontecera nada 
    if(d === '.' && valorDoDisplay.includes('.')) return

// construir novo valor 
    // se o valor do display for 0 ou limparDisplay for true 
    const ifLimpar = valorDoDisplay === '0' || limparDisplay
    // ou comeca com o valor de ifLimpar (string vazia) senao com o valor atual 
    const valorAtual = ifLimpar ? '' : valorDoDisplay
    // se nao tiver nenhum operador, ira concatenar e virar uma string 
    const novoValor = valorAtual + d

    setValorDoDisplay(novoValor)
    setLimparDisplay(false)

    if(d !== '.'){
        // cria uma copia do array de valores 
      const updated = [...valores]
        // parseFloat serve para converter string em numero
      // converte a string em numero e armazena em 0 ou 1 
      updated[qualValor] = parseFloat(novoValor)
      // atualiza o estado com os novos valores
      setValores(updated)

      console.log(updated)
    }
  }

  return(
    <div className="calculator">
      <MeuDisplay value={valorDoDisplay} />

      <MeuBotao label = "AC" aoClicar = {limparMemoria} />
      <MeuBotao label = "/"  aoClicar = {() => definirOperacao('/')} />
      <MeuBotao label = "7"  aoClicar = {() => adicionarDigitos('7')}/>
      <MeuBotao label = "8"  aoClicar = {() => adicionarDigitos('8')}/>
      <MeuBotao label = "9"  aoClicar = {() => adicionarDigitos('9')}/>
      <MeuBotao label = "*"  aoClicar = {() => definirOperacao('*')} />
      <MeuBotao label = "4"  aoClicar = {() => adicionarDigitos('4')}/>
      <MeuBotao label = "5"  aoClicar = {() => adicionarDigitos('5')}/>
      <MeuBotao label = "6"  aoClicar = {() => adicionarDigitos('6')}/>
      <MeuBotao label = "-"  aoClicar = {() => definirOperacao('-')} />
      <MeuBotao label = "1"  aoClicar = {() => adicionarDigitos('1')}/>
      <MeuBotao label = "2"  aoClicar = {() => adicionarDigitos('2')}/>
      <MeuBotao label = "3"  aoClicar = {() => adicionarDigitos('3')}/>
      <MeuBotao label = "+"  aoClicar = {() => definirOperacao('+')} />
      <MeuBotao label = "0"  aoClicar = {() => adicionarDigitos('0')} />
      <MeuBotao label = "."  aoClicar = {() => adicionarDigitos('.')}/>
      <MeuBotao label = "="  aoClicar = {() => definirOperacao('=')} />
    </div>
  )
}
