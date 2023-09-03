import Head from "next/head";
import PropTypes from "prop-types";
import slug from "speakingurl";

const Meta = ({ show, staticPage, latest }) => {
  let title = "";
  if (latest) {
    title = "Guys in Pants Podcast";
  } else if (show) {
    title = `${show.title} — Guys in Pants Podcast ${show.displayNumber}`;
  } else {
    title = staticPage.title;
  }

  return (
    <Head>
      {show ? (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:audio" content={show.url} />
          <meta property="og:audio:secure_url" content={show.url} />
          <meta property="og:audio:type" content="audio/mp3" />
          <meta property="og:type" content="music.song" />
          <meta
            property="og:url"
            content={`https://guysinpants.com/show/${show.displayNumber}/${slug(
              show.title
            )}`}
          />
        </>
      ) : (
        <title>
          {staticPage && staticPage.title && `${staticPage.title} – `}
          Guys in Pants Podcast
        </title>
      )}
    </Head>
  );
};

const requiredPropsCheck = (props, propName, componentName) => {
  if (!props.show && !props.staticPage) {
    return new Error(
      `One of 'show' or 'staticPage' is required by '${componentName}' component.`
    );
  }
  if (props.show && props.staticPage) {
    return new Error(
      `Only one of 'show' or 'staticPage' should be passed to '${componentName}' component, not both.`
    );
  }
  if (props[propName]) {
    const myPropType = {
      [propName]: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    };
    PropTypes.checkPropTypes(myPropType, props, propName, componentName);
  }
};

Meta.propTypes = {
  show: requiredPropsCheck,
  staticPage: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  latest: PropTypes.bool,
};

export default Meta;
