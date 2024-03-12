import { useState } from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>      
    </>
  )
}

const Button = ({onClick,text}) => (<button onClick={onClick}>{text}</button>)

const Statistics = ({good,neutral,bad}) => {
  const total = good + neutral + bad
  if (total === 0) {
    return (
      <>No feedback given</>
    )
  }
  return (
    <>
    <table>
      <tbody>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='total' value={total}/>
      <StatisticLine text='average' value={(good-bad)/total}/>
      <tr><td>positive</td><td>{good*100/total} %</td></tr>
      </tbody>
    </table>
    </>
  )
}

const StatisticLine = ({text,value}) => 
(
<>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
</>)

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const goodPlusOne = good + 1
    console.log('good',goodPlusOne)
    setGood(goodPlusOne)
  }

  const handleNeutral = () => {
    const neutralPlusOne = neutral + 1
    console.log('neutral',neutralPlusOne)
    setNeutral(neutralPlusOne)
  }

  const handleBad = () => {
    const badPlusOne = bad + 1
    console.log('bad',badPlusOne)
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
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </>
  )
}

export default App

