import { useAppSelector } from '../../hooks/use-app-selector';
import { getError } from '../../store/offers-data/selectors';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default ErrorMessage;
