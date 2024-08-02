import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Image from 'next/image';
import {
  Popover,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelineTime,
  TimelinePoint,
  TimelineTitle,
  Card,
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from 'flowbite-react';
import { List, ListItem } from 'flowbite-react';

const SectionHeader = ({ text, id }: { text: string; id: string }) => (
  <h2 id={id} className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
    {text}
  </h2>
);

const LinkComponent = ({ href, text }: { href: string; text: string }) => (
  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={href}>
    {text}
  </a>
);

const FigureComponent = ({ imageSrc, text }: { imageSrc: string; text: string }) => (
  <Popover
    trigger="hover"
    content={
      <div className="max-w-48 md:max-w-72 max-h-48 md:max-h-72 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
        <img src={imageSrc} className="col-span-2 w-full" />
      </div>
    }
  >
    <sup className="cursor-pointer inline text-blue-600 dark:text-blue-500">{text}</sup>
  </Popover>
);

const ContactCard = ({ name, phoneNumber }: { name: string; phoneNumber: string }) => (
  <Card className="max-w-sm">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

    <section className="grid gap-1 grid-cols-[40px_40px]">
      <a className="font-normal text-gray-700 dark:text-gray-400" href={`sms://${phoneNumber}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      </a>
      <a className="font-normal text-gray-700 dark:text-gray-400" href={`tel://${phoneNumber}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
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
            <h1 className="max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sir Harris Cortez</h1>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We&apos;re excited about our upcoming boating adventure with you! Please take a moment to review our boating plan. If you have any questions or
              need further information, don’t hesitate to reach out!
            </p>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
          <div className="relative w-full p-3 rounded  md:p-8">
            <div className="rounded-lg bg-white text-black w-full">
              <Image src="/harris_boat.png" width={750} height={563} alt="Sir Harris Cortez" />
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
              <TimelineTime>Days before boating</TimelineTime>
              <TimelineTitle>Preparation</TimelineTitle>
              <TimelineBody>
                <List>
                  <ListItem>
                    <strong>Life Jackets</strong> Coast Guard-approved, one per person. We have extras available; just let us know what you need!
                  </ListItem>
                  <List nested>
                    <ListItem>[0-30 lbs] Infant Life Jacket with crotch strap (3 extras)</ListItem>
                    <ListItem>[30-55 lbs] Toddler Life Jacket with crotch strap (3 extras)</ListItem>
                    <ListItem>[55-88 lbs] Youth Life Jacket (1 extra)</ListItem>
                    <ListItem>[77-125 lbs] Youth Adult XX-Small (1 extra)</ListItem>
                    <ListItem>[90+ lbs] Adult Life Jacket (10 extras)</ListItem>
                  </List>
                  <ListItem>
                    <strong>Hydration</strong> Stay hydrated! We recommend using a tumbler to keep drinks cold.
                  </ListItem>
                  <ListItem>
                    <strong>Snacks</strong> Please bring snacks that won&apos;t stain (our seats are white).
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
                    <ListItem>(Optional) Floaties (we have an air pump if needed)</ListItem>
                  </List>
                  <ListItem>
                    <strong>Note</strong>: We highly recommend bringing a stroller, tote, or backpack as it&apos;s a 5-minute walk from the parking lot to the
                    boat.
                  </ListItem>
                </List>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>The Day of</TimelineTime>
              <TimelineTitle>Meeting Location: Lake Travis Marina</TimelineTitle>
              <TimelineBody>
                <List ordered>
                  <ListItem>
                    <strong>Arriving at Lake Travis Marina</strong>
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
                      Inform the security guard <FigureComponent imageSrc="/security_shack.png" text="Figure A" /> that you’re heading to Slip C-46 under
                      Cortez.
                    </ListItem>
                    <ListItem>
                      Drive down the hill <FigureComponent imageSrc="/parking_lot.png" text="Figure B" /> and turn right into the dirt parking lot.
                    </ListItem>
                    <ListItem>If the gate is closed, send us a message for the gate code.</ListItem>
                  </List>
                  <ListItem>
                    <strong>Parking and Meeting</strong>
                  </ListItem>
                  <List nested>
                    <ListItem>
                      {' '}
                      Walk down the ramp <FigureComponent imageSrc="/ramp.png" text="Figure C" /> to the marina with your belongings. We’ll meet you at the
                      gate.
                    </ListItem>
                  </List>
                  <ListItem>
                    <strong>Maps for Reference</strong>
                  </ListItem>
                  <List nested>
                    <ListItem>
                      Google Maps View <FigureComponent imageSrc="/google_maps_view.png" text="Figure D" />
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
                    <ListItem>Federal regulations require all children under 13 to wear a life jacket at all times while on the boat.</ListItem>
                  </List>
                  <ListItem>
                    <strong>Boat Safety</strong>
                  </ListItem>
                  <List nested>
                    <ListItem>
                      Keep your hands inside the boat when getting on or off. Our slip (boat parking spot) is tight, and we want to avoid any accidents.
                    </ListItem>
                    <ListItem>No shoes are allowed on the boat. Please use the provided storage to keep them.</ListItem>
                  </List>
                  <ListItem>
                    <strong>Feeding Kids</strong>
                  </ListItem>
                  <List nested>
                    <ListItem>Lay down a blanket or towel if you’re feeding snacks to children to keep things clean.</ListItem>
                  </List>
                  <ListItem>
                    <strong>Water Safety</strong>
                  </ListItem>
                  <List nested>
                    <ListItem>Always stay away from the engine when in the water and make sure everyone wears a life jacket.</ListItem>
                    <ListItem>Stay seated while the boat is in motion. The lake can be choppy, especially with other boats around.</ListItem>
                  </List>

                  <ListItem>
                    <strong>Driving the Boat</strong>
                  </ListItem>
                  <List nested>
                    <ListItem>You are welcome to drive the boat, but please ensure you are sober at all times.</ListItem>
                  </List>

                  <ListItem>
                    <strong>Enjoying the Lake</strong>
                  </ListItem>
                  <List nested>
                    <ListItem>
                      We offer a variety of activities for your enjoyment. Let us know how we can tailor the experience for you! Options include:
                    </ListItem>
                    <List nested>
                      <ListItem>Lounging on an inflatable water mat and chairs</ListItem>
                      <ListItem>Dining at a lakefront restaurant</ListItem>
                      <ListItem>Wakeboarding and tubing</ListItem>
                    </List>
                  </List>
                  <ListItem>
                    <strong>Safety Certification</strong>
                  </ListItem>
                  <List nested>
                    <ListItem>
                      Our boat has passed the 2024 US Coast Guard Vessel Safety Check, so you’re in excellent hands!&nbsp;
                      <FigureComponent imageSrc="/vessel_check.png" text="Figure E" />
                    </ListItem>
                  </List>
                </List>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
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
                    <ListItem>Please remain seated while we’re docking the boat for your safety.</ListItem>
                  </List>
                </List>
                <List>
                  <ListItem>
                    <strong>Cleanup</strong>
                  </ListItem>
                  <List nested>
                    <ListItem>Once docked, please clean up the boat and dispose of any trash in the onboard trash bin.</ListItem>
                    <ListItem>We might ask for assistance with looking after the kids while we finish tidying up the boat.</ListItem>
                  </List>
                </List>
                <List>
                  <ListItem>
                    <strong>Facilities</strong>
                  </ListItem>
                  <List nested>
                    <ListItem>
                      Feel free to use the restroom at the marina before you leave, including changing out of your swimsuit. There’s also a shower available if
                      you’d like to use it.
                    </ListItem>
                  </List>
                </List>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>

      <section className="mb-8">
        <SectionHeader text="Frequently Asked Questions" id="faq" />
        <Accordion collapseAll>
          <AccordionPanel>
            <AccordionTitle>How long will we be out on the lake?</AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">Most of the time, we are out from 9am-1pm.</p>

              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Our agenda typically consists of anchoring near the Lake Travis Zipline Adventure cove and swimming in the water. Then, we typically do some
                water tubing, then finish off by jumping back in the water by Sandy Creek Cove before heading back to the marina.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>What should I bring?</AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Besides the essentials listed above, you just need to bring any personal snacks and beverages for yourself and your family.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                We don&apos;t recommend bringing a large cooler because space is limited. You can instead bring ice and we can use the onboard cooler that is on
                the boat.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>What is the water level for Lake Travis?</AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                You can view lake levels{' '}
                <a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.golaketravis.com/waterlevel/">
                  here
                </a>
                .
              </p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
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
