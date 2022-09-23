import React from 'react';
import { FeedbackTitle } from 'components/ui';

function SectionTitle(props) {
  return (
    <section>
      <FeedbackTitle>{props.title}:</FeedbackTitle>
      {props.children}
    </section>
  );
}

export default SectionTitle;
