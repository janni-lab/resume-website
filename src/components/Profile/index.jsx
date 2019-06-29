import React from "react";
import config from "../../../config";

import Space from "../shared/Space";
import { SectionTitle } from "../shared/typography.js";
import {
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

const Profile = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="Profile"
    >
      <div className="w-100">
        <SectionTitle>Profile</SectionTitle>
        <Center>
          <HeroImage width={200} height={200} />
        </Center>
        <Space height={30} />
        <p className="lead mb-5">
          Seeking an entry-level engineering position that allows for creative
          problem solving, process improvement, and the practical use of
          engineering management degree.
        </p>
        <Space height={30} />
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
        <Space height={50} />
        <Center className="social-icons">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </Center>
      </div>
    </section>
  );
};

export default Profile;
