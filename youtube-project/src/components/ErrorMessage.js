import notFoundSVG from '../assets/404-image-not-found.svg';

export default function ErrorMessage() {
  return (
    <div>
      <img src={notFoundSVG} alt="Man looking into the void" />
      <h1>This resource doesn't exist!</h1>
    </div>
  );
}
