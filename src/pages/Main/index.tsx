import Button from '../../components/Button';
import CounterView from '../../components/CounterView';

import './styles.css';

function Main() {
  return (
    <div className="container">
      <div className="content">
        <div className="wrapper">
          <h1 className="container--title">Contador Redux Toolkit</h1>

          <div className="button-wrapper">
            <Button title="Incrementar" />
            <Button title="Decrementar" />
            <Button title="Zerar" />
          </div>
        </div>

        <CounterView />
      </div>
    </div>
  );
}

export default Main;