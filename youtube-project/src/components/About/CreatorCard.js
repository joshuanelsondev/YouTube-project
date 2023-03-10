export default function CreatorCard({ person }) {
  const { name, img, description } = person;
  return (
    <div className="creator-profile">
      <img src={img} alt={`'s Profile`} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
