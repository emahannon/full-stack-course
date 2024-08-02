import { useState } from "react"

// button for each button
const Button = ({handleClick, text}) => {

  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

// statistic line for displaying a single statistic
const StatisticLine = ({text, stat}) => {

  if (text === "positive") {
    return (
      <>
        <tbody>
          <tr>
            <td>{text} </td><td>{stat} %</td>
          </tr>
        </tbody>
      </>
    )
  }
  return (
    <>
      <tbody>
        <tr>
          <td>{text} </td><td>{stat}</td>
        </tr>
      </tbody>
    </>
  )
}


const Feedback = ({handleClickGood, handleClickBad, handleClickNeutral}) => {

  return (
    <>
      <h1>give feedback</h1>
      {/* three buttons, good, bad, neutral */}
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickBad} text="bad" />
      <Button handleClick={handleClickNeutral} text="neutral" />
    </>
  )

}

const Statistics = ({good, bad, neutral, all, avg, pos}) => {


  // display statistics only once feedback has been gathered
  if (all != 0) {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <StatisticLine text="good" stat={good} />
          <StatisticLine text="bad" stat={bad} />
          <StatisticLine text="neutral" stat={neutral} />
          <StatisticLine text="all" stat={all} />
          <StatisticLine text="average" stat={avg} />
          <StatisticLine text="positive" stat={pos} />
        </table>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </>
  )

}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)

  const handleClickGood = () => {
    const updatedGood = good + 1
    const updatedAll = all + 1
    setGood(updatedGood)
    setAll(updatedAll)

    const average = (updatedGood-bad)/updatedAll
    setAvg(average)

    setPos(updatedGood/updatedAll)
  }

  const handleClickBad = () => {
    const updatedBad = bad + 1
    const updatedAll = all + 1
    setBad(updatedBad)
    setAll(updatedAll)

    const average = (good-updatedBad)/updatedAll
    setAvg(average)

    setPos(good/updatedAll)
  }

  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = all + 1
    setNeutral(updatedNeutral)
    setAll(updatedAll)

    const average = (good-bad)/updatedAll
    setAvg(average)

    setPos(good/updatedAll)
  }

  return (
    <div>
      <Feedback handleClickGood={handleClickGood} handleClickBad={handleClickBad} handleClickNeutral={handleClickNeutral}/>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} avg={avg} pos={pos}/>
    </div>
  )
}

export default App
