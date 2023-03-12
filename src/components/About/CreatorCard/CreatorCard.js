import { useState } from 'react';
import './CreatorCard.css';
import { AiFillGithub } from 'react-icons/ai';

export default function CreatorCard({
  person: { description, githubUserName, name, img },
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className={`inner-card ${isFlipped && 'flipped'}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="creator-profile front">
        <img src={img} alt={`${name}'s Profile`} />
        <h3>{name}</h3>
      </div>
      <div className="creator-profile back">
        <p>{description}</p>
        <a href={`https://github.com/${githubUserName}`}>
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}
