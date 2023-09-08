import Link from "next/link";

const Footer = () => (
  <footer className="bottom">
    <p>
      Want to <Link href="/sponsor">Sponsor the Podcast?</Link>
    </p>
    {/*
    <p>
      Looking for some <Link href="/sickpicks">Sick Picks?</Link>
    </p>
    */}
    <p>
      &copy; Guys in Pants, {new Date().getFullYear()}. All Rights Reserved.
    </p>
  </footer>
);

export default Footer;
