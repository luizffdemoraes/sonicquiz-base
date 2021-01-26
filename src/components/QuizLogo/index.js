import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img width="350" src="https://i.pinimg.com/originals/3c/30/a6/3c30a6a6e5d248a7c6dc9370a5ae1815.png"></img>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  opacity: 0.5;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;