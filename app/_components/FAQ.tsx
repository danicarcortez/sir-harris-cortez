import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { List, ListItem } from "flowbite-react";
import { SectionHeader } from "./SectionHeader";
import { LinkComponent } from "./Link";
import { WaterLevel } from "./WaterLevel";

const Link = ({
  href,
  text,
  ...rest
}: {
  href: string;
  text: string;
  target?: string;
}) => (
  <a
    className="text-blue-600 dark:text-blue-500 hover:underline"
    target="_blank"
    href={href}
    {...rest}
  >
    {text}
  </a>
);

export const FrequentlyAskedQuestions = () => (
  <section className="mb-8">
    <SectionHeader text="Frequently Asked Questions" id="faq" />
    <Accordion collapseAll>
      <AccordionPanel>
        <AccordionTitle>How long will we be out on the lake?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Most of the time, we are out for 3-4 hours.
          </p>

          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Our agenda typically consists of anchoring near the Lake Travis
            Zipline Adventure cove and swimming in the water. Then, we typically
            do some water tubing, then finish off by jumping back in the water
            by Sandy Creek Cove before heading back to the marina.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What should I bring?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Besides the essentials listed above, you just need to bring any
            personal snacks and beverages for yourself and your family.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            We don&apos;t recommend bringing a large cooler because space is
            limited. You can instead bring ice and we can use the onboard cooler
            that is on the boat.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>
          When is the earliest we will be notified if the boating trip is
          canceled?
        </AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            If rain or strong winds are forecasted, we may consider canceling.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            We will monitor weather updates and notify you at least 12 hours
            before our scheduled meeting time.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What are some locations we can dine at?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            If you&apos;d like to dine while boating, please let us know in
            advance so we can make the necessary arrangements! Here are some of
            our favorites:
          </p>
          <List>
            <ListItem>
              <LinkComponent
                text="Captain Petes Boathouse"
                href="https://www.captainpetesboathouse.com/"
              />
            </ListItem>
            <ListItem>
              <LinkComponent
                text="Beachside Billy's"
                href="https://www.volentebeach.com/dining-drinks"
              />
            </ListItem>
            <ListItem>
              <LinkComponent text="Shack 512" href="https://shack512.com/" />
            </ListItem>
            <ListItem>
              <LinkComponent
                text="Sundancer Grill"
                href="https://www.sundancergrill.com/"
              />
            </ListItem>
          </List>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>
          What is the water level for Lake Travis?
        </AccordionTitle>
        <AccordionContent>
          <WaterLevel />
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            You can view the most up to date lake levels{" "}
            <Link
              text="here"
              target="_blank"
              href="https://www.golaketravis.com/waterlevel/"
            />
            .
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </section>
);
