import { useReducer } from 'react';
import './App.css';

const initialState = { money: 0 };

function moneyReducer(state, action) {
  switch (action.type) {
    case 'PROJECT_JS':
      return { ...state, money: state.money + 9000 };
    case 'PROJECT_TAILWIND':
      return { ...state, money: state.money + 200 };
    case 'PROJECT_REACT':
      return { ...state, money: state.money + 3000 };
    case 'SPEND_JS':
      return { ...state, money: state.money - 1500 };
    case 'SPEND_TAILWIND':
      return { ...state, money: state.money - 10000 };
    case 'SPEND_REACT':
      return { ...state, money: state.money - 20000 };
      case 'Reset':
        return {...state, money: state.money = 0};
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(moneyReducer, initialState);

  return (
    <div className="app">
      <div className="display-money">{state.money}</div>
      <div className="buttons">
        <div className="earn-buttons">
          <button onClick={() => dispatch({ type: 'PROJECT_JS' })}>Project JS</button>
          <button onClick={() => dispatch({ type: 'PROJECT_TAILWIND' })}>Project Tailwind</button>
          <button onClick={() => dispatch({ type: 'PROJECT_REACT' })}>Project React</button>
        </div>
        <div className="spend-buttons">
          <button onClick={() => dispatch({ type: 'SPEND_JS' })}>Spend Clouths</button>
          <button onClick={() => dispatch({ type: 'SPEND_TAILWIND' })}>Spend LapTop</button>
          <button onClick={() => dispatch({ type: 'SPEND_REACT' })}>Spend Mobile</button>
        </div>
        <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
      </div>
    </div>
  );
}

export default App;
