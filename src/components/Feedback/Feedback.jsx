import { Component } from 'react';
import { Button, buttonProps, StyledDiv } from '../Button/Button';
import { Statistic } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Section } from '../Section/Section';
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  countTotalFeedbacks = () => {
    this.setState(state => {
      const { good, neutral, bad } = state;

      return { total: good + neutral + bad };
    });
  };

  countPositiveFeedbacks = () => {
    this.setState(state => {
      const { good, total } = state;

      return { positiveFeedback: Math.round((good / total) * 100) };
    });
  };

  feedbackButton = e => {
    let { name } = e.target;
    name = name.toLowerCase();

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });

    this.countTotalFeedbacks();
    this.countPositiveFeedbacks();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <StyledDiv>
            {buttonProps.map(({ name }) => {
              return (
                <Button key={name} name={name} onClick={this.feedbackButton}>
                  {name}
                </Button>
              );
            })}
          </StyledDiv>

          {neutral === 0 && good === 0 && bad === 0 ? (
            <Notification message=" There is no feedback" />
          ) : (
            <Statistic state={this.state}></Statistic>
          )}
        </Section>
      </>
    );
  }
}
