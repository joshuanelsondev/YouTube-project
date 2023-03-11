import './ErrorMessage.css';
import { ReactComponent as Icon } from '../../assets/404-image.svg';
import { AiOutlineClose } from 'react-icons/ai';

export default function ErrorMessage() {
  return (
    <div className="error-message-background">
      <div className="error-message">
        <AiOutlineClose className="x-svg" />
        <Icon className="void-svg" />
        <h1>Oh no! We can't find what you're looking for</h1>
        <p>Try a differnet search to see more results!</p>
      </div>
    </div>
  );
}
