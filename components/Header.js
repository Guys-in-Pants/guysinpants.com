import Link from "next/link";
import Subscribe from "./Subscribe";

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Link href="/" aria-label="Guys in pants">
        <img className="header__logo" src="/static/logo.png" alt="Guys in Pants logo" />
      </Link>
    </div>
    <div className="header__right">
      <div className="title">
        <h2 className="tagline">A Tasty Treats Podcast for Web Developers.</h2>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfQlAo1wXHiJMySdU-h8QMtfoz92aMS9eycEHXB6eRCLh8KHA/viewform"
          className="title__potluck-btn"
          rel="noopener noreferrer"
        >
          Ask a Potluck Question →
        </a>
      </div>
      <div className="people">
        <div className="person">
          <img
            src="https://avatars.githubusercontent.com/wesbos?size=200"
            alt="Aaron Meese"
            className="avatar"
          />
          <h3>Aaron Meese</h3>
          <a
            target="_blank"
            href="https://twitter.com/ajmeese7"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @ajmeese7
          </a>
          <p>
            Full Stack JavaScript Developer. Creator of really good{" "}
            <a
              target="_blank"
              href="https://wesbos.com/courses"
              rel="noopener noreferrer"
            >
              web development courses
            </a>
            . BBQ enthusiast.
          </p>
        </div>

        <div className="person">
          <img
            src="https://avatars.githubusercontent.com/stolinski?size=200"
            alt="Roy Buddie Holley"
            className="avatar"
          />
          <h3>Roy Buddie Holley</h3>
          <a
            target="_blank"
            href="https://twitter.com/stolinski"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @stolinski
          </a>
          <p>
            Web Developer, Creator of{" "}
            <a href="https://leveluptutorials.com/">Level Up Tuts</a>, Bboy,
            Robotops Crew and{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/c/leveluptuts"
              rel="noopener noreferrer"
            >
              Youtuber
            </a>
          </p>
        </div>
      </div>
    </div>
    <Subscribe />
  </header>
);

export default Header;
