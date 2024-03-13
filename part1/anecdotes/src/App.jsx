import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const len = anecdotes.length
   
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(len).fill(0))
  const mostVote = votes.indexOf( Math.max(...votes) )

  const handleRandom = () =>{
    let x = Math.floor(Math.random()*len)
    console.log('random no.?',x)
    setSelected(x)
  }

  const handleVotes = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    console.log('new votes',copyVotes)
    setVotes(copyVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}
      <br/>has {votes[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleRandom}>next ancedote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVote]}
      <br/>has {votes[mostVote]} votes</p>
    </div>
  )
}

export default App
