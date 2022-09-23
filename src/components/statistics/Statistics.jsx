import React from 'react';
import { FeedbackItem } from 'components/ui';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul>
        <FeedbackItem>Good: {good}</FeedbackItem>
        <FeedbackItem>Neutral: {neutral}</FeedbackItem>
        <FeedbackItem>Bad: {bad}</FeedbackItem>
        <FeedbackItem>Total: {total()}</FeedbackItem>
        <FeedbackItem>Positive feedback: {positivePercentage()}%</FeedbackItem>
      </ul>
    </>
  );
}

export default Statistics;
