import { useState, useEffect } from "react"

// button for each button
const Button = ({handleClick, text}) => {

  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Daily = ({anecdotes, selected, vote, handleClickVote, handleClickSelected}) => {

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <Button handleClick={handleClickVote} text="vote" />
      <Button handleClick={handleClickSelected} text="next anecdote" />
    </>
  )
}

const Most = ({anecdotes, selected, vote}) => {

  const largest = (array) => {
    let max = array[0]

    for (let i=1; i<array.length; i++)
    {
      if (array[i] > max) max = array[i]
    }

    return max
  }

  useEffect(() => {
    const max = largest(vote)
    se
  })



  return (
    <>


    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.'
  ]

  // idx of the current randomly selected idx of anecdotes
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0,0])
  // idx of the anecdotes with largest number of votes
  const [largest, setLargest] = useState(0)

  // generate a random number on button click
  const handleClickSelected = () => {
    const rand = Math.floor(Math.random() * 8)
    setSelected(rand)
  }

  const handleClickVote = () => {
    const newVotes = [...vote]
    newVotes[selected] = newVotes[selected] + 1

    if (newVotes[selected] > vote[largest]) setLargest(selected)

    setVote(newVotes)
  }

  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Daily anecdotes={anecdotes} selected={selected} vote={vote} handleClickVote={handleClickVote} handleClickSelected={handleClickSelected} />
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[largest]}</p>
      <p>has {vote[largest]} votes</p>
    </div>
  )
}

export default App
