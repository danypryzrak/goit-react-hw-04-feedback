import { useEffect, useState } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Notification } from "./Notification";


export const App = () => {

  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)
  const[total, setTotal] = useState(0)
  const[percentage, setPercentage] = useState(0)

  function addFeedback(event) {
    const name = event.target.name
    switch (name) {
      case 'good':
        setGood(prevState => {return (prevState + 1)})
        
        break;
    
      case 'neutral':
        setNeutral(prevState => { return (prevState + 1) })
        break;
      
      case 'bad':
        setBad(prevState => { return (prevState + 1) })
        break;
      
      default:
        break;
    }
    
  }

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPercentage(Math.round((good / total) * 100));
  }, [good, neutral, bad, total])

  
  
    return (
      <>
      <Section title="Please leave Feedback">
        <FeedbackOptions addFeedback={addFeedback}></FeedbackOptions>
      </Section>
      
        <Section title="Statisticks">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}>
            </Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
      </Section>
      </>
    )
  }
