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
          <img
            src="https://avatars.githubusercontent.com/ajmeese7?size=200"
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
            Paperwork pusher, former cyber guy. Creator of{" "}
            <a
              target="_blank"
              href="https://aaronmeese.com/"
              rel="noopener noreferrer"
            >
              MeeseOS
            </a>
            . Zealous alcohol enthusiast.
          </p>
        </div>

        <div className="person">
          <img
            src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.18169-9/1460190_599764553418359_1429444675_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Grx56P2OwmcAX__0QTR&_nc_ht=scontent-iad3-2.xx&oh=00_AfBdTid_R3ru-itOqwWuY7iEd8QrjhxYyRq79_hNgQAXhw&oe=651725A9"
            alt="Roy Buddie Holley"
            className="avatar"
          />
          <h3>Roy Buddie Holley</h3>
          <a
            target="_blank"
            href="https://twitter.com/Buddiethekid"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @Buddiethekid
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
