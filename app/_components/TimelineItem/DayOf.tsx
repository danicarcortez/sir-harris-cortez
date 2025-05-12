import { TimelineBody, TimelineContent, TimelineItem, TimelineTime, TimelinePoint, TimelineTitle } from 'flowbite-react';
import { List, ListItem } from 'flowbite-react';
import { LinkComponent } from '../Link';
import { FigureComponent } from '../Figure';

export const DayOf = () => (
  <TimelineItem>
    <TimelinePoint />
    <TimelineContent>
      <TimelineTime>The Day of</TimelineTime>
      <TimelineTitle>Meeting Location: Lake Travis Marina</TimelineTitle>
      <TimelineBody>
        <List ordered>
          <ListItem>
            <strong>
              Arriving at <FigureComponent variant="p" imageSrc="/lake_travis_marina_pov.jpg" text="Lake Travis Marina" />
            </strong>
          </ListItem>
          <List nested>
            <ListItem>
              Use{' '}
              <LinkComponent
                href="https://www.google.com/maps/place/Lake+Travis+Marina/@30.4292748,-97.9236212,16z/data=!4m15!1m8!3m7!1s0x865b3056a61bb201:0x96d3067c8da37b92!2s6410+Hudson+Bend+Rd,+Austin,+TX+78734!3b1!8m2!3d30.4282892!4d-97.9245722!16s%2Fg%2F11cs7fjjqv!3m5!1s0x865b3057a8f8a21b:0xa9881a79ed6433d2!8m2!3d30.430536!4d-97.92144!16s%2Fg%2F1tf7h2f7?entry=ttu"
                text="Google Maps"
              />{' '}
              or <LinkComponent href="http://maps.apple.com/?q=30.43065,-97.92159" text="Apple Maps" /> for directions.
            </ListItem>
          </List>
          <ListItem>
            <strong>Upon arrival</strong>
          </ListItem>
          <List nested>
            <ListItem>
              Inform the <FigureComponent variant="p" imageSrc="/security_shack.png" text="security guard" /> that you’re heading to Slip C-46 under Cortez.
            </ListItem>
            <ListItem>
              You can either park to the parking lot adjacent to the security shack or down hill past the security gate into the dirt{' '}
              <FigureComponent imageSrc="/lake_travis_marina_parking.jpg" text="parking lot" variant="p" />.
            </ListItem>
            <ListItem>If the gate is closed, send us a message for the gate code.</ListItem>
          </List>
          <ListItem>
            <strong>Parking and Meeting</strong>
          </ListItem>
          <List nested>
            <ListItem>
              {' '}
              Walk down the <FigureComponent imageSrc="/ramp.png" text="ramp" variant="p" /> to the marina with your belongings. We&apos;ll meet you at the
              gate.
            </ListItem>
          </List>
          <ListItem>
            <strong>Maps for Reference</strong>
          </ListItem>
          <List nested>
            <ListItem>
              <FigureComponent imageSrc="/google_maps_view.png" text="Google Maps View" variant="p" />
            </ListItem>
            <List nested>
              <ListItem>
                <strong>Red</strong>: Drive into Lake Travis Marina via Hudson Bend Rd.
              </ListItem>
              <ListItem>
                <strong>Purple</strong>: Security guard shack.
              </ListItem>
              <ListItem>
                <strong>Blue</strong>: Parking lot.
              </ListItem>
              <ListItem>
                <strong>Yellow</strong>: Walk down the bridge into the marina.
              </ListItem>
              <ListItem>
                <strong>Yellow Star</strong>: Location of boat slip.
              </ListItem>
            </List>
          </List>
          <ListItem>
            <strong>Before Boarding</strong>
          </ListItem>
          <List nested>
            <ListItem>Use the restroom at the marina, as there is no toilet on the boat.</ListItem>
            <ListItem>Apply sunscreen before getting on the boat.</ListItem>
          </List>
        </List>
      </TimelineBody>
    </TimelineContent>
  </TimelineItem>
);
