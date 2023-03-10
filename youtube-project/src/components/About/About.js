import './About.css';
import CreatorCard from './CreatorCard';
import { aboutInfo } from './AboutInfo';

export default function About() {
  return (
    <>
      <main className="about-page">
        <article>
          <h1>
            YouTube Clone Created By Ari Jackson, Joshua Nelson, and SangUn Park
          </h1>
          <p>
            This web application was created using Google's Youtube v3 API data.
            This project was builtutilizing React and React Router for Pursuit
            Cohort 9.3.
          </p>
          <h3>About Our Founders:</h3>
          <aside>
            {aboutInfo.map((person) => (
              <CreatorCard person={person} />
            ))}
          </aside>
        </article>
      </main>
    </>
  );
}
