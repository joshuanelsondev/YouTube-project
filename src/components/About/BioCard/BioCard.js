import { useState } from 'react';
import './BioCard.css';
import { AiFillGithub } from 'react-icons/ai';

export default function BioCard({
  person: { description, githubUserName, name, img },
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className={`inner-card ${isFlipped && 'flipped'}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="bio-card front">
        <img src={img} alt={`${name}'s Profile`} />
        <h3>{name}</h3>
      </div>
      <div className="bio-card back">
        <p>{description}</p>
        <a href={`https://github.com/${githubUserName}`}>
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}
