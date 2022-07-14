import React from "react";
import {
  Box,
  Divider,
  Container,
  Typography,
  List,
  ListItem,
  Link,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LocalGroceryStoreTwoToneIcon from "@material-ui/icons/LocalGroceryStoreTwoTone";

import useStyles from "./FooterStyle";

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.footerWrapper}>
        <Divider />
        <Container>
          <Typography variant="h5" className={classes.logoText}>
            <LocalGroceryStoreTwoToneIcon className={classes.logo} />
            Price
            <br />
            Detective
          </Typography>
        </Container>
        <Container className={classes.rights}>
          <Typography>
            Price Detective © {new Date().getFullYear()} All rights reserved.
          </Typography>
        </Container>
        <Container>
          <Box className={classes.socialMedia}>
            <Box className={classes.socialMediaIconContainer}>
              <Typography>Follow Us!</Typography>
              <List className={classes.socialMediaIcon}>
                <ListItem>
                  <Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon className={classes.icons} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className={classes.icons} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon className={classes.icons} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YouTubeIcon className={classes.icons} />
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
