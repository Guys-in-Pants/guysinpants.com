import Link from "next/link";
import Subscribe from "./Subscribe";

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Link href="/" aria-label="Guys in Pants">
        {/* <img className="header__logo" src="/static/logo.png" alt="Guys in Pants logo" /> */}
        <img
          className="header__logo"
          src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.95em' x='-.025em' font-size='75'>👖</text></svg>"
          alt="Guys in Pants logo"
        />
      </Link>
      <h2 className="header__tagline">Two Funny Guys Who Rarely Wear Pants.</h2>
    </div>
    <div className="header__right">
      <div className="title">
        <h2 className="tagline">Two Funny Guys Who Rarely Wear Pants.</h2>
        <a
          target="_blank"
          href="https://forms.gle/kQxjqcVRgpbbPt4v5"
          className="title__suggestion-btn"
          rel="noopener noreferrer"
        >
          Suggest a Topic →
        </a>
      </div>
      <div className="people">
        <div className="person">
          <img src="static/pfps/one.jpg" alt="Person One" className="avatar" />
          <h3>Person One</h3>
          <a
            target="_blank"
            href="https://twitter.com/GuysInPants_One"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @GuysInPants_One
          </a>
          <p>Paperwork pusher, former cyber guy. Zealous alcohol enthusiast.</p>
        </div>

        <div className="person">
          <img src="static/pfps/two.jpg" alt="Person Two" className="avatar" />
          <h3>Person Two</h3>
          <a
            target="_blank"
            href="https://twitter.com/GuysInPants_Two"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @GuysInPants_Two
          </a>
          <p>
            ✨<i>Senior</i> ✨ paperwork pusher.
          </p>
        </div>
      </div>
    </div>
    <Subscribe />
  </header>
);

export default Header;
