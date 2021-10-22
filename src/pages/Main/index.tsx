import { useReduxDispatch } from '../../hooks';

import Button from '../../components/Button';
import CounterView from '../../components/CounterView';

import './styles.css';
import { decrementCounter, incrementCounter, resetCounter } from '../../store/slices/counter';

function Main() {
  const dispatch = useReduxDispatch();

  const increment = () => dispatch(incrementCounter());
  const decrement = () => dispatch(decrementCounter());
  const reset = () => dispatch(resetCounter());

  return (
    <div className="container">
      <div className="content">
        <div className="wrapper">
          <h1 className="container--title">Contador Redux Toolkit</h1>

          <div className="button-wrapper">
            <Button title="Incrementar" onClick={increment} />
            <Button title="Decrementar" onClick={decrement} />
            <Button title="Zerar" onClick={reset} />
          </div>
        </div>

        <CounterView />
      </div>
    </div>
  );
}

export default Main;