import './ErrorMessage.css';
import { ReactComponent as Icon } from '../../assets/404-image.svg';
import { AiOutlineClose } from 'react-icons/ai';

export default function ErrorMessage({ setError }) {
  return (
    <div className="error-message-background">
      <div className="error-message">
        <AiOutlineClose className="x-svg" onClick={() => setError(false)} />
        <Icon className="void-svg" />
        <h1>Oh no! Something went wrong</h1>
        <p>
          We can't find what you're looking for right now. Try a different
          search to see more results or try again later.
        </p>
      </div>
    </div>
  );
}
