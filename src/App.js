import './App.css'
import MeuBotao from './componentes/button'
import MeuDisplay from './componentes/display'

export default function App() {
  return (
    <div className="App">
      
    <MeuDisplay value={100} /> 

    <MeuBotao aoClicar = { () => console.log('numero 7')} label = '7'/>
    <MeuBotao aoClicar = { () => console.log('numero 8')}label = '8'/>
    <MeuBotao aoClicar = { () => console.log('numero 9')} label = '9'/>
    <MeuBotao aoClicar = { () => console.log('operador *')} label = '*'/>
    <MeuBotao aoClicar = { () => console.log('numero 4')} label = '4'/>
    <MeuBotao aoClicar = { () => console.log('numero 5')} label = '5'/>
    <MeuBotao aoClicar = { () => console.log('numero 6')} label = '6'/>
    <MeuBotao aoClicar = { () => console.log('operador -')} label = '-'/>
    <MeuBotao aoClicar = { () => console.log('numero 1')} label = '1'/>
    <MeuBotao aoClicar = { () => console.log('numero 2')} label = '2'/>
    <MeuBotao aoClicar = { () => console.log('numero 3')} label = '3'/>
    <MeuBotao aoClicar = { () => console.log('operador +')} label = '+'/>
    <MeuBotao aoClicar = { () => console.log('operador /')} label = '/'/>
    <MeuBotao aoClicar = { () => console.log('operador =')} label = '='/>
    <MeuBotao aoClicar = { () => console.log('operador .')} label = '.'/>
         
    
    </div>
  );
}
