import React from 'react';
import PropTypes from 'prop-types';

class Evaluation extends React.Component {
  render() {
    const { comentCard, emailInput, selectTYpe } = this.props;
    return (
      <div>
        <p>{emailInput}</p>
        <p>{selectTYpe}</p>
        <p>{comentCard}</p>
      </div>
    );
  }
}

Evaluation.propTypes = {
  comentCard: PropTypes.string.isRequired,
  emailInput: PropTypes.string.isRequired,
  selectTYpe: PropTypes.string.isRequired,
};

export default Evaluation;
