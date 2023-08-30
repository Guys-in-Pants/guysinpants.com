import React from "react";
import Page from "../components/Page";
import Meta from "../components/meta";

export default function SponsorPage() {
  return (
    <Page>
      <Meta staticPage={{ title: "Sponsors" }} />
      <div className="wrapper wrapper--text">
        <h1>Guys in Pants Sponsorship</h1>
        <p>
          <a href="mailto:sponsor@guysinpants.com">
            Email us to sponsor the show!
          </a>
        </p>
      </div>
    </Page>
  );
}
