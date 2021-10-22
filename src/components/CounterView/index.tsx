import { useReduxSelector } from '../../hooks';
import { selectCounterValue } from '../../store/slices/counter/selectors';

import './styles.css';

function CounterView() {
  const counterValue = useReduxSelector(selectCounterValue)

  return (
    <div className="counterview-container">
      <h1 className="counterview-value">{`${counterValue}`.padStart(2, '0')}</h1>
    </div>
  );
}

export default CounterView;