import React from 'react';
import { FeedbackNotification } from 'components/ui';

function Notification({ message }) {
  return <FeedbackNotification>{message}</FeedbackNotification>;
}

export default Notification;
