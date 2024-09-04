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

export const OnTheBoat = () => (
  <TimelineItem>
    <TimelinePoint />
    <TimelineContent>
      <TimelineTime>On the Boat</TimelineTime>
      <TimelineTitle>Important Safety and Comfort Guidelines</TimelineTitle>
      <TimelineBody>
        <List>
          <ListItem>
            <strong>Children&apos;s Safety</strong>
          </ListItem>
          <List nested>
            <ListItem>
              Federal regulations require all children under 13 to wear a life
              jacket at all times while on the boat.
            </ListItem>
          </List>
          <ListItem>
            <strong>Boat Safety</strong>
          </ListItem>
          <List nested>
            <ListItem>
              Keep your hands inside the boat when getting on or off. Our slip
              (boat parking spot) is tight, and we want to avoid any accidents.
            </ListItem>
            <ListItem>
              No shoes are allowed on the boat. Please use the provided storage
              to keep them.
            </ListItem>
          </List>
          <ListItem>
            <strong>Feeding Kids</strong>
          </ListItem>
          <List nested>
            <ListItem>
              Lay down a blanket or towel if you’re feeding snacks to children
              to keep things clean.
            </ListItem>
          </List>
          <ListItem>
            <strong>Water Safety</strong>
          </ListItem>
          <List nested>
            <ListItem>
              Always stay away from the engine when in the water and make sure
              everyone wears a life jacket.
            </ListItem>
            <ListItem>
              Stay seated while the boat is in motion. The lake can be choppy,
              especially with other boats around.
            </ListItem>
          </List>

          <ListItem>
            <strong>Driving the Boat</strong>
          </ListItem>
          <List nested>
            <ListItem>
              You are welcome to drive the boat, but please ensure you are sober
              at all times.
            </ListItem>
          </List>

          <ListItem>
            <strong>Enjoying the Lake</strong>
          </ListItem>
          <List nested>
            <ListItem>
              We offer a variety of activities for your enjoyment. Let us know
              how we can tailor the experience for you! Options include:
            </ListItem>
            <List nested>
              <ListItem>
                Lounging on an{" "}
                <FigureComponent
                  variant="p"
                  imageSrc="/water_mat.jpg"
                  text="inflatable water mat"
                />{" "}
                and{" "}
                <FigureComponent
                  variant="p"
                  imageSrc="/inflatable_chair.jpg"
                  text="chairs"
                />
              </ListItem>
              <ListItem>
                Dining at a{" "}
                <FigureComponent
                  variant="p"
                  imageSrc="/lakefront_dining.jpg"
                  text="lakefront restaurant"
                />
              </ListItem>
              <ListItem>
                <FigureComponent
                  variant="p"
                  imageSrc="/wakeboard.png"
                  text="Wakeboarding"
                />{" "}
                and&nbsp;
                <FigureComponent
                  variant="p"
                  imageSrc="/tubing.png"
                  text="water tubing"
                />
              </ListItem>
            </List>
          </List>
          <ListItem>
            <strong>Safety Certification</strong>
          </ListItem>
          <List nested>
            <ListItem>
              Our boat has passed the 2024 US Coast Guard Vessel Safety Check,
              so you’re in excellent hands!&nbsp;
              <FigureComponent imageSrc="/vessel_check.png" text="Figure E" />
            </ListItem>
          </List>
        </List>
      </TimelineBody>
    </TimelineContent>
  </TimelineItem>
);
