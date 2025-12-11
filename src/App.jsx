import { Suspense } from 'react'
import './App.css'
import Bottles from './componets/Bottles/Bottles'

function App() {
  
  const promiseBottleData = fetch('../public/bottles.json').then(res => res.json());

  return (
    <>
     
      <h1>Smart Bottle DaTA Load For Json </h1>
      <Suspense fallback = {<h1> THis Data LoaDING yOUR JSON .. </h1>}>

      <Bottles promiseBottleData ={promiseBottleData} ></Bottles>

      </Suspense>
    
     
    </>
  )
}

export default App
