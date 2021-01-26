import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img width="350" src="../images/sonic-logo.png"></img>
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