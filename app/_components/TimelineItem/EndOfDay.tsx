import {
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelineTime,
  TimelinePoint,
  TimelineTitle,
} from "flowbite-react";
import { List, ListItem } from "flowbite-react";
import { FigureComponent } from "../Figure";

export const EndOfDay = () => (
  <TimelineItem>
    <TimelinePoint />
    <TimelineContent>
      <TimelineTime>End of day</TimelineTime>
      <TimelineTitle>After boating</TimelineTitle>
      <TimelineBody>
        <List>
          <ListItem>
            <strong>During Docking</strong>
          </ListItem>
          <List nested>
            <ListItem>
              Please remain seated while we’re docking the boat for your safety.
            </ListItem>
          </List>
        </List>
        <List>
          <ListItem>
            <strong>Cleanup</strong>
          </ListItem>
          <List nested>
            <ListItem>
              Once docked, please clean up the boat and dispose of any trash in
              the onboard trash bin.
            </ListItem>
            <ListItem>
              Gather your belongings and place them outside of the boat. Leave
              your lifejackets on the floor; we will secure them to the back of
              the boat to air dry.
            </ListItem>
            <ListItem>
              We might ask for assistance with looking after the kids while we
              finish tidying up the boat.
            </ListItem>
          </List>
        </List>
        <List>
          <ListItem>
            <strong>Facilities</strong>
          </ListItem>
          <List nested>
            <ListItem>
              Feel free to use the restroom at the marina before you leave,
              including changing out of your swimsuit. There’s also a{" "}
              <FigureComponent
                imageSrc="/marina_restroom.png"
                text="shower"
                variant="p"
              />{" "}
              available if you’d like to use it.
            </ListItem>
            <ListItem>
              If you have any trash, please dispose of it in the{" "}
              <FigureComponent
                imageSrc="/trash.jpg"
                text="dumpster"
                variant="p"
              />{" "}
              located outside the gated area by the security shack.
            </ListItem>
          </List>
        </List>
      </TimelineBody>
    </TimelineContent>
  </TimelineItem>
);
