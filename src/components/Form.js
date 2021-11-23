import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      comentCard,
      emailInput,
      onInputCHange,
      onSaveButtonClick,
      isSaveButtonDisabled,
      selectTYpe } = this.props;
    return (
      <div>
        <form action="">

          <div>
            <label htmlFor="emailInput">
              E-mail:
              <input
                type="email"
                id="emailInput"
                name="emailCard"
                onChange={ onInputCHange }
                value={ emailInput }
              />
            </label>

            <select
              name="selectTYpe"
              onChange={ onInputCHange }
              value={ selectTYpe }
              id="selectTYpe"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

          </div>

          <div>
            <label htmlFor="comentArea">
              Mensagem:
              <textarea
                id="comentArea"
                name="comentCard"
                onChange={ onInputCHange }
                value={ comentCard }
                data-testid="product-detail-evaluation"
              />
            </label>
          </div>

          <label htmlFor="emailInput">
            <input
              type="button"
              id="save-button"
              value="avaliar"
              name="onSaveButtonClick"
              onClick={ onSaveButtonClick }
              disabled={ isSaveButtonDisabled }
            />
          </label>

        </form>
      </div>
    );
  }
}

Form.propTypes = {
  comentCard: PropTypes.string.isRequired,
  emailInput: PropTypes.string.isRequired,
  onInputCHange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  selectTYpe: PropTypes.string.isRequired,
};

export default Form;
