import React from "react";
import config from "../../../config";

import Space from "../shared/Space";
import { SectionTitle } from "../shared/typography.js";
import {
  Narrow,
  Center,
  List,
  ListItem,
  ListItemIcon,
  ListItemBody,
  ListItemTitle
} from "./styles";
import HeroImage from "./vectors/HeroImage";
import Address from "./vectors/Address";
import Phone from "./vectors/Phone";
import Email from "./vectors/Email";

const AboutMe = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about-me"
    >
      <div className="w-100">
        <Center style={{ height: "90vh" }}>
          <HeroImage width="400" height="400" />
        </Center>
        <Space height={30} />
        <Narrow>
          <p className="lead mb-5">
            Seeking an entry-level engineering position that allows for creative
            problem solving, process improvement, and the practical use of
            engineering management degree.
          </p>
          <Center>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Address width={40} />
                </ListItemIcon>
                <ListItemBody>
                  <ListItemTitle>Address</ListItemTitle>
                  <div>413 Piccolo</div>
                  <div> Irvine, CA 92620</div>
                </ListItemBody>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Phone width={40} />
                </ListItemIcon>
                <ListItemBody>
                  <ListItemTitle>Phone</ListItemTitle>
                  {config.phone}
                </ListItemBody>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Email width={40} />
                </ListItemIcon>
                <ListItemBody>
                  <ListItemTitle>Email</ListItemTitle>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`mailto:${config.email}`}
                  >
                    {config.email}
                  </a>
                </ListItemBody>
              </ListItem>
            </List>
          </Center>
          <Space height={30} />
          <Center className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </Center>
        </Narrow>
      </div>
    </section>
  );
};

export default AboutMe;
