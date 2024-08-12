import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Image from 'next/image';
import { Popover, Timeline, TimelineBody, TimelineContent, TimelineItem, TimelineTime, TimelinePoint, TimelineTitle, Card } from 'flowbite-react';
import { List, ListItem } from 'flowbite-react';
import { SectionHeader } from './_components/SectionHeader';
import { LinkComponent } from './_components/Link';
import { FrequentlyAskedQuestions } from './_components/FAQ';
import { ContactCard } from './_components/ContactCard';

const FigureComponent = ({ imageSrc, text, variant = 'sup' }: { imageSrc: string; text: string; variant?: 'sup' | 'p' }) => (
  <Popover
    trigger="hover"
    content={
      <div className="max-w-48 md:max-w-72 max-h-48 md:max-h-72 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
        <img src={imageSrc} className="col-span-2 w-full" />
      </div>
    }
  >
    <>
      {variant === 'sup' ? (
        <sup className="cursor-pointer inline text-blue-600 dark:text-blue-500">{text}</sup>
      ) : (
        <p className="cursor-pointer inline text-blue-600 dark:text-blue-500">{text}</p>
      )}
    </>
  </Popover>
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
                    <ListItem>[0-30 lbs] Infant Life Jacket with crotch strap (2 extras)</ListItem>
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
                      <ListItem>
                        Lounging on an <FigureComponent variant="p" imageSrc="/water_mat.jpg" text="inflatable water mat" /> and{' '}
                        <FigureComponent variant="p" imageSrc="/inflatable_chair.jpg" text="chairs" />
                      </ListItem>
                      <ListItem>
                        Dining at a <FigureComponent variant="p" imageSrc="/lakefront_dining.jpg" text="lakefront restaurant" />
                      </ListItem>
                      <ListItem>
                        Wakeboarding and&nbsp;
                        <FigureComponent variant="p" imageSrc="/tubing.png" text="water tubing" />
                      </ListItem>
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
                    <ListItem>
                      Gather your belongings and place them outside of the boat. Leave your lifejackets on the floor; we will secure them to the back of the
                      boat to air dry.
                    </ListItem>
                    <ListItem>We might ask for assistance with looking after the kids while we finish tidying up the boat.</ListItem>
                  </List>
                </List>
                <List>
                  <ListItem>
                    <strong>Facilities</strong>
                  </ListItem>
                  <List nested>
                    <ListItem>
                      Feel free to use the restroom at the marina before you leave, including changing out of your swimsuit. There’s also a{' '}
                      <FigureComponent imageSrc="/marina_restroom.png" text="shower" variant="p" /> available if you’d like to use it.
                    </ListItem>
                    <ListItem>
                      If you have any trash, please dispose of it in the <FigureComponent imageSrc="/trash.jpg" text="dumpster" variant="p" /> located outside
                      the gated area by the security shack.
                    </ListItem>
                  </List>
                </List>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>

      <FrequentlyAskedQuestions />

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
