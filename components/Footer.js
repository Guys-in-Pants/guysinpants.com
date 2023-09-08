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
    <p>&copy; Aaron Meese & Roy Buddie Holley, {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
