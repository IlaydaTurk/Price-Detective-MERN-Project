import React from "react";
import Video from "../../videos/video.mp4";
import { Container } from "@material-ui/core";

import useStyles from "./HeroStyle";

const Hero = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="xl" className={classes.heroContainer}>
        <div className={classes.heroBg}>
          <video
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
            className={classes.videoBg}
          />
        </div>
        <div className={classes.heroBgGlass} />
        <div className={classes.heroContent}>
          <div className={classes.heroTitle}>Shopping Made Easy and Cheap</div>
          <div className={classes.heroSubtitle}>
          Price Detective finds cheap and close products for you by searching the nearest marketplaces. 
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
