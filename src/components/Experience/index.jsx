import React from "react";
import { SectionTitle } from "../shared/typography.js";
import { Timeline, TimelineEvent } from "react-event-timeline";
import TimelineBubble from "../shared/vectors/TimelineBubble";
import { Position, Company, Summary, Highlights, Highlight } from "./styles.js";
import workExperiences from "./work.json";

const Experience = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <SectionTitle className="mb-5">Experience</SectionTitle>
        <Timeline
          lineStyle={{
            top: 30,
            height: "auto",
            bottom: 50
          }}
        >
          {workExperiences.map(experience => (
            <TimelineEvent
              icon={<TimelineBubble width={20} height={20} />}
              bubbleStyle={{
                background: "none",
                border: "none",
                marginLeft: 7,
                width: 20,
                height: 20
              }}
              title={<Position>{experience.position}</Position>}
              subtitle={
                <>
                  <Company>{experience.company}</Company>
                  <Summary>{experience.summary}</Summary>
                </>
              }
              createdAt={`${experience.startDate}-${experience.endDate}`}
              contentStyle={{
                backgroundColor: "none",
                boxShadow: "none"
              }}
            >
              <Highlights>
                {experience.highlights.map(highlight => (
                  <Highlight>{highlight}</Highlight>
                ))}
              </Highlights>
            </TimelineEvent>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;
