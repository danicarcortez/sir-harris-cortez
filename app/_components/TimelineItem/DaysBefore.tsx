import {
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelineTime,
  TimelinePoint,
  TimelineTitle,
} from "flowbite-react";
import { List, ListItem } from "flowbite-react";

export const DaysBefore = () => (
  <TimelineItem>
    <TimelinePoint />
    <TimelineContent>
      <TimelineTime>Days before boating</TimelineTime>
      <TimelineTitle>Preparation</TimelineTitle>
      <TimelineBody>
        <List>
          <ListItem>
            <strong>Life Jackets</strong> Coast Guard-approved, one per person.
            We have extras available; just let us know what you need!
          </ListItem>
          <List nested>
            <ListItem>
              [0-30 lbs] Infant Life Jacket with crotch strap (1 extra)
            </ListItem>
            <ListItem>
              [30-55 lbs] Toddler Life Jacket with crotch strap (5 extras)
            </ListItem>
            <ListItem>[55-88 lbs] Youth Life Jacket (1 extra)</ListItem>
            <ListItem>[77-125 lbs] Youth Adult XX-Small (1 extra)</ListItem>
            <ListItem>[90+ lbs] Adult Life Jacket (12 extras)</ListItem>
          </List>
          <ListItem>
            <strong>Hydration</strong> Stay hydrated! We recommend using a
            tumbler to keep drinks cold.
          </ListItem>
          <ListItem>
            <strong>Snacks</strong> Please bring snacks that won&apos;t stain
            (our seats are white).
          </ListItem>
          <List nested>
            <ListItem>
              <strong>Suggestions</strong>
            </ListItem>
            <List nested>
              <ListItem>Pretzels</ListItem>
              <ListItem>Pre-cut apples</ListItem>
              <ListItem>Potato Chips</ListItem>
            </List>
          </List>
          <List nested>
            <ListItem>
              <strong>Prohibited</strong>
            </ListItem>
            <List nested>
              <ListItem>Juices</ListItem>
              <ListItem>Wine (beer is acceptable)</ListItem>
              <ListItem>Glass containers</ListItem>
              <ListItem>Cheese puffs, Hot Cheetos, etc.</ListItem>
            </List>
          </List>
          <ListItem>
            <strong>Essentials</strong>
          </ListItem>
          <List nested>
            <ListItem>Sunscreen</ListItem>
            <ListItem>Towels</ListItem>
            <ListItem>Sunglasses</ListItem>
            <ListItem>Koozie</ListItem>
            <ListItem>Swimsuit (if you plan to swim)</ListItem>
            <ListItem>Swim diaper for kids</ListItem>
            <ListItem>
              (Optional) Floaties (we have an air pump if needed)
            </ListItem>
          </List>
          <ListItem>
            <strong>Note</strong>: We highly recommend bringing a stroller,
            tote, or backpack as it&apos;s a 5-minute walk from the parking lot
            to the boat.
          </ListItem>
        </List>
      </TimelineBody>
    </TimelineContent>
  </TimelineItem>
);
