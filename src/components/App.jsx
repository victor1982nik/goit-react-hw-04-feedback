import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

const btnNames = ['good', 'neutral', 'bad'];

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const positiveFeedback = Math.round((good / total) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={btnNames} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

// class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = e => {
//     const { name } = e.target;

//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };
//   countTotalFeedback() {
//     const { bad, good, neutral } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   render() {
//     const { bad, good, neutral } = this.state;
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleClick}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positiveFeedback}
//           />
//         </Section>
//       </div>
//     );
//   }
// }
