import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addNumbers, changeFirstNumber, changeSecondNumber} from '../../redux/modules/sum';

export class Sum extends Component {
  static propTypes = {
    addNumbers: PropTypes.func,
    changeFirstNumber: PropTypes.func,
    changeSecondNumber: PropTypes.func,
    firstNumber: PropTypes.number,
    secondNumber: PropTypes.number,
    total: PropTypes.number
  }

  handleFirstNumberChange = (e) => {
    this.props.changeFirstNumber(+e.target.value);
  }

  handleSecondNumberChange = (e) => {
    this.props.changeSecondNumber(+e.target.value);
  }

  handleAddNumbers = () => {
    this.props.addNumbers(this.props.firstNumber, this.props.secondNumber);
  }

  render() {
    return (
      <div>
        <h1>Sum 2 Ints</h1>
        <div className="sum__number">
          <label>First Number</label>
          <input type="number" value={this.props.firstNumber} onChange={this.handleFirstNumberChange} />
        </div>
        <div className="sum__number">
          <label>Second Number</label>
          <input type="number" value={this.props.secondNumber} onChange={this.handleSecondNumberChange} />
        </div>
        <button onClick={this.handleAddNumbers}>Add</button>
        <div className="sum__total">
          <h2>Results: {this.props.total}</h2>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {firstNumber, secondNumber, total} = state.sum;
  return {
    firstNumber,
    secondNumber,
    total
  };
}

export default connect(mapStateToProps, {
  changeFirstNumber,
  changeSecondNumber,
  addNumbers
})(Sum);
