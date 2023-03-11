import { useState } from 'react';
export default function CreatorCard({ person }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { name, img, description } = person;
  return (
    <div
      className="creator-profile"
      onMouseOver={() => setIsFlipped(true)}
      onMouseOut={() => setIsFlipped(false)}
    >
      <img src={img} alt={`'s Profile`} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
