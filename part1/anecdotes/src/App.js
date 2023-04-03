import { useState } from 'react'

const Button =({text, handleClick}) => (
  <button onClick={handleClick}>{text}</button>
);

const MostVoted = ({votes, anecdotes}) => {
  const highestCount = Math.max(...votes);
  if (highestCount === 0) {
    return <p>No votes yet</p>
  }
  const maxVoteIndex = votes.indexOf(highestCount);
  return(
    <>
      <p>{anecdotes[maxVoteIndex]}</p>
      <p>Has {highestCount} votes</p>
    </>
  );
}

const App = () => {
  const anecdotes = [
    '0 - If it hurts, do it more often.',
    '1 - Adding manpower to a late software project makes it later!',
    '2 - The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    '3 - Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    '4 - Premature optimization is the root of all evil.',
    '5 - Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    '6 - Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    '7 - The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const randomAnecdote = () => {
    let chosenAnecdote;
    do {
      chosenAnecdote = Math.floor(Math.random() * anecdotes.length);
      console.log(chosenAnecdote, selected);
    }
    while (chosenAnecdote === selected)
    setSelected(chosenAnecdote);
  };

  const handleVotes = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <Button text='next anecdote' handleClick={randomAnecdote} />
      <Button text='vote' handleClick={handleVotes} />
      <h2>Anecdote with most votes</h2>
      <MostVoted votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App
