const initialState = {
  firstNumber: 0,
  secondNumber: 0,
  total: 0
};

export const ADD_NUMBERS_LOAD = 'sum/ADD_NUMBERS_LOAD';
export const ADD_NUMBERS_SUCCESS = 'sum/ADD_NUMBERS_SUCCESS';
export const ADD_NUMBERS_FAILURE = 'sum/ADD_NUMBERS_FAILURE';

export const CHANGE_FIRST_NUMBER = 'sum/CHANGE_FIRST_NUMBER';
export const CHANGE_SECOND_NUMBER = 'sum/CHANGE_SECOND_NUMBER';

export default function reducer(sum = initialState, action) {
  switch (action.type) {
  case CHANGE_FIRST_NUMBER:
    return {...sum, firstNumber: action.number};
  case CHANGE_SECOND_NUMBER:
    return {...sum, secondNumber: action.number};
  case ADD_NUMBERS_SUCCESS:
    return {...sum, total: action.result.data};
  default:
    return sum;
  }
}

export function changeFirstNumber(number = 0) {
  return {
    type: CHANGE_FIRST_NUMBER,
    number
  };
}

export function changeSecondNumber(number = 0) {
  return {
    type: CHANGE_SECOND_NUMBER,
    number
  };
}

export function addNumbers(first = 0, second = 0) {
  return {
    types: [ADD_NUMBERS_LOAD, ADD_NUMBERS_SUCCESS, ADD_NUMBERS_FAILURE],
    request: (api) => api.get('/sum', {params: {first, second}})
  };
}
