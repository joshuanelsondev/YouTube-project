import './ErrorMessage.css';
import { ReactComponent as Icon } from '../../assets/404-image.svg';

export default function ErrorMessage() {
  return (
    <div className="error-message">
      <Icon className="svg" />
      <h1>Oh no! We can't find what you're looking for</h1>
      <p>Try a differnet search to see more results!</p>
    </div>
  );
}
