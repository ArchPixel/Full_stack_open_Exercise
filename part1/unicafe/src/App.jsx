import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.title}</h1>      
    </>
  )
}

const Button = ({onClick,text}) => (<button onClick={onClick}>{text}</button>)

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const goodPlusOne = good + 1
    console.log(goodPlusOne)
    setGood(goodPlusOne)
  }

  const handleNeutral = () => {
    const neutralPlusOne = neutral + 1
    console.log(neutralPlusOne)
    setNeutral(neutralPlusOne)
  }

  const handleBad = () => {
    const badPlusOne = bad + 1
    console.log(badPlusOne)
    setBad(badPlusOne)
  }

  const titles = {
    t1: 'give feedback',
    t2: 'statistics'
  }

  return (
    <>
      <Header title = {titles.t1}/>
      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNeutral} text='neutral'/>
      <Button onClick={handleBad} text='bad'/>
      <Header title = {titles.t2}/>
      <p>good {good} 
      <br/>neutral {neutral} 
      <br/>bad {bad} 
      <br/>all {good+neutral+bad} 
      <br/>average {(good-bad)/(good+neutral+bad)}
      <br/>positive {good*100/(good+neutral+bad)} %
      </p>
    </>
  )
}

export default App
