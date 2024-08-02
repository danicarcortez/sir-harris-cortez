import { DarkThemeToggle, Flowbite } from "flowbite-react";

import {
  Popover,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTitle,
  Card,
} from "flowbite-react";
import { List, ListItem } from "flowbite-react";

const SectionHeader = ({ text, id }: { text: string; id: string }) => (
  <h2
    id={id}
    className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8"
  >
    {text}
  </h2>
);

const LinkComponent = ({ href, text }: { href: string; text: string }) => (
  <a
    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
    href={href}
  >
    {text}
  </a>
);

const FigureComponent = ({
  imageSrc,
  text,
}: {
  imageSrc: string;
  text: string;
}) => (
  <Popover
    trigger="hover"
    content={
      <div className="w-48 md:w-72 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
        <img src={imageSrc} className="col-span-2 h-full" />
      </div>
    }
  >
    <sup className="inline text-blue-600 underline hover:no-underline dark:text-blue-500">
      {text}
    </sup>
  </Popover>
);

export default function Home() {
  return (
    <Flowbite>
      <DarkThemeToggle className="float-end" />
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Sir Harris Cortez
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              We&apos;re looking forward to our boating adventures with you!
              Please take a few minutes to review our boating plan. If you have
              any questions, please feel free to reach out!
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/harris_boat.png" />
          </div>
        </div>
      </section>

      <section className="mt-4">
        <SectionHeader text="Boat Plan" id="boat-plan" />

        <Timeline>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTitle>Preparation</TimelineTitle>
              <TimelineBody>
                <List>
                  <ListItem>
                    1 coast guard approved life jacket per person. We have
                    extras, let us know what you need!
                  </ListItem>
                  <List nested>
                    <ListItem>
                      [0-30lbs] Infant Life Jacket with crotch strap (3 extra)
                    </ListItem>
                    <ListItem>
                      [30-55lbs] Toddler Life Jacket with crotch strap (3 extra)
                    </ListItem>
                    <ListItem>[55-88lbs] Youth Life jacket (1 extra)</ListItem>
                    <ListItem>
                      [77-125 lbs] Youth Adult XX-Small (1 extra)
                    </ListItem>
                    <ListItem>[90+lbs] Adult (10 extra)</ListItem>
                  </List>
                  <ListItem>
                    Water, water, water! Recommend using a tumbler to keep
                    drinks cold
                  </ListItem>
                  <ListItem>
                    Snacks, ideally something that doesn&apos;t stain (we have
                    all white seats)
                  </ListItem>
                  <List nested>
                    <ListItem>Ideas</ListItem>
                    <List nested>
                      <ListItem>
                        Pretzels, pre-cut apples, potato chips
                      </ListItem>
                    </List>
                  </List>
                  <List nested>
                    <ListItem>Prohibited</ListItem>
                    <List nested>
                      <ListItem>No juices</ListItem>
                      <ListItem>No wine, but beer is fine</ListItem>
                      <ListItem>No glass</ListItem>
                      <ListItem>Cheese puffs, Hot Cheetos, etc</ListItem>
                    </List>
                  </List>
                  <ListItem>
                    Things you&apos;d usually take to a swimming pool
                  </ListItem>
                  <List nested>
                    <ListItem>Sunscreen</ListItem>
                    <ListItem>Towels</ListItem>
                    <ListItem>Sunglasses</ListItem>
                    <ListItem>Koozie</ListItem>
                    <ListItem>
                      Swimsuit if you want to jump in the water
                    </ListItem>
                    <ListItem>Swim diaper for kids</ListItem>
                    <ListItem>
                      (Optional) Floaties - we have an air pump if needed
                    </ListItem>
                  </List>
                  <ListItem>
                    Highly recommend bringing stroller/tote/backpack since
                    it&apos;s a 5 minute walk from the parking lot to boat
                  </ListItem>
                </List>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTitle>The Day of</TimelineTitle>
              <TimelineBody>
                <List>
                  <ListItem>Meet at Lake Travis Marina</ListItem>
                  <List nested>
                    <ListItem>
                      <LinkComponent
                        href="https://www.google.com/maps/place/Lake+Travis+Marina/@30.4292748,-97.9236212,16z/data=!4m15!1m8!3m7!1s0x865b3056a61bb201:0x96d3067c8da37b92!2s6410+Hudson+Bend+Rd,+Austin,+TX+78734!3b1!8m2!3d30.4282892!4d-97.9245722!16s%2Fg%2F11cs7fjjqv!3m5!1s0x865b3057a8f8a21b:0xa9881a79ed6433d2!8m2!3d30.430536!4d-97.92144!16s%2Fg%2F1tf7h2f7?entry=ttu"
                        text="Google Maps"
                      />
                    </ListItem>
                    <ListItem>
                      <LinkComponent
                        href="http://maps.apple.com/?q=30.43065,-97.92159"
                        text="Apple Maps"
                      />
                    </ListItem>
                  </List>
                  <ListItem>
                    Upon arrival&nbsp;
                    <FigureComponent
                      imageSrc="/security_shack.png"
                      text="Figure A"
                    />
                    &nbsp;let the security guard know the following:
                  </ListItem>
                  <List nested>
                    <ListItem>Slip C-46 under Cortez</ListItem>
                  </List>
                  <ListItem>
                    Drive down the hill&nbsp;
                    <FigureComponent
                      imageSrc="/parking_lot.png"
                      text="Figure B"
                    />
                    &nbsp;and take a right on the dirt parking lot
                  </ListItem>
                  <ListItem>
                    Walk down the ramp&nbsp;
                    <FigureComponent imageSrc="/ramp.png" text="Figure C" />
                    &nbsp;to the marina with your things and we&apos;ll meet you
                    up at the gate
                  </ListItem>
                  <List nested>
                    <ListItem>
                      If you prefer a Google Maps view{" "}
                      <FigureComponent
                        imageSrc="/google_maps_view.png"
                        text="Figure D"
                      />
                    </ListItem>
                    <List nested>
                      <ListItem>
                        Red - drive into Lake Travis Marina via Hudson Bend Rd
                      </ListItem>
                      <ListItem>Purple - security guard shack</ListItem>
                      <ListItem>Blue - parking lot</ListItem>
                      <ListItem>Yellow - walk down bridge into marina</ListItem>
                      <ListItem>Yellow star - location of boat slip</ListItem>
                    </List>
                  </List>
                  <ListItem>
                    Use the restroom at the marina before getting on the boat
                    since we don&apos;t have a toilet
                  </ListItem>
                  <ListItem>Apply sunscreen before getting on boat</ListItem>
                </List>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTitle>On the Boat</TimelineTitle>
              <TimelineBody>
                <List>
                  <ListItem>
                    If you have kids, it&apos;s a federal rule that all kids
                    under 13 are <strong>required</strong> to wear a lifejacket
                    at all times
                  </ListItem>
                  <ListItem>
                    After getting on the boat, keep your hands inside the boat.
                    Our slip (aka boat parking spot) is tight, and we don&apos;t
                    want any crushed fingers
                  </ListItem>
                  <ListItem>
                    No shoes on the boat. We have storage you can leave them in.
                  </ListItem>
                  <ListItem>
                    Lay down blanket/towel if feeding kids snacks
                  </ListItem>
                  <ListItem>
                    When going in the water, always stay away from the engine &
                    wear a life jacket
                  </ListItem>
                  <ListItem>
                    You&apos;re more than welcome to drive the boat. The only
                    rule is you have to drive sober.
                  </ListItem>
                  <ListItem>
                    Stay seated while the boat is in motion since the lake can
                    be a bit choppy, especially if there are other boats around
                  </ListItem>
                  <ListItem>
                    We have multiple options for enjoying the lake. Let us know
                    how we can help tailor it for you! Here are some options:
                  </ListItem>
                  <List nested>
                    <ListItem>
                      Lounge around on an inflatable water mat & chairs
                    </ListItem>
                    <ListItem>Dining at a lakefront restaurant</ListItem>
                    <ListItem>Wakeboarding & Tubing</ListItem>
                  </List>
                  <ListItem>
                    Our boat has been certified by the 2024 US Coast Guard
                    Vessel Safety Check, so you&apos;re in good hands!&nbsp;
                    <FigureComponent
                      imageSrc="/vessel_check.png"
                      text="Figure E"
                    />
                  </ListItem>
                </List>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTitle>After boating</TimelineTitle>
              <TimelineBody>
                <List>
                  <ListItem>
                    While docking the boat, please stay seated.
                  </ListItem>
                  <ListItem>
                    When docked, clean up the boat and throw away trash on the
                    onboard trash bin
                  </ListItem>
                  <ListItem>
                    You are more than welcome to use the restroom at the marina
                    prior to leaving (i.e. changing out of your swimsuit). They
                    also have a shower if you want to use it.
                  </ListItem>
                </List>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>

      <section>
        <SectionHeader text="Contact Information" id="contact-information" />

        <div className="grid gap-2 grid-cols-2 grid-rows-1">
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Juan Cortez
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              915-227-6803
            </p>
          </Card>
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Danica Cortez
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              425-219-9285
            </p>
          </Card>
        </div>
      </section>
    </Flowbite>
  );
}
