import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Image from "next/image";
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
      <div className="max-w-48 md:max-w-72 max-h-48 md:max-h-72 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
        <img src={imageSrc} className="col-span-2 w-full" />
      </div>
    }
  >
    <sup className="cursor-pointer inline text-blue-600 dark:text-blue-500">
      {text}
    </sup>
  </Popover>
);

const ContactCard = ({
  name,
  phoneNumber,
}: {
  name: string;
  phoneNumber: string;
}) => (
  <Card className="max-w-sm">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {name}
    </h5>

    <section className="grid gap-1 grid-cols-[40px_40px]">
      <a
        className="font-normal text-gray-700 dark:text-gray-400"
        href={`sms://${phoneNumber}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      </a>
      <a
        className="font-normal text-gray-700 dark:text-gray-400"
        href={`tel://${phoneNumber}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      </a>
    </section>
  </Card>
);

export default function Home() {
  return (
    <Flowbite>
      <DarkThemeToggle className="absolute top-2 right-2" />
      <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
          <div className="text-left">
            <h1 className="max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Sir Harris Cortez
            </h1>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We&apos;re looking forward to our boating adventures with you!
              Please take a few minutes to review our boating plan. If you have
              any questions, please feel free to reach out!
            </p>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
          <div className="relative w-full p-3 rounded  md:p-8">
            <div className="rounded-lg bg-white text-black w-full">
              <Image
                src="/harris_boat.png"
                width={750}
                height={563}
                alt="Sir Harris Cortez"
              />
            </div>
          </div>
        </div>
      </div>

      <section>
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
                  <List nested>
                    <ListItem>
                      If the gate is closed, send us a message and we will
                      provide you with the gate code.
                    </ListItem>
                  </List>
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

        <div className="grid gap-2 grid-cols-2">
          <ContactCard name="Juan Cortez" phoneNumber="9152276803" />
          <ContactCard name="Danica Cortez" phoneNumber="4252199285" />
        </div>
      </section>
    </Flowbite>
  );
}
