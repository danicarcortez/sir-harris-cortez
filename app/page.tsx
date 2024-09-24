import { DarkThemeToggle, Flowbite, Popover } from "flowbite-react";
import Image from "next/image";
import { Timeline, Card } from "flowbite-react";
import { SectionHeader } from "./_components/SectionHeader";
import { FrequentlyAskedQuestions } from "./_components/FAQ";
import { ContactCard } from "./_components/ContactCard";
import { DayOf } from "./_components/TimelineItem/DayOf";
import { DaysBefore } from "./_components/TimelineItem/DaysBefore";
import { OnTheBoat } from "./_components/TimelineItem/OnTheBoat";
import { EndOfDay } from "./_components/TimelineItem/EndOfDay";
import { WaterLevel } from "./_components/WaterLevel";

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
              We&apos;re excited about our upcoming boating adventure with you
              at{" "}
              <Popover
                trigger="hover"
                content={
                  <Card
                    className="max-w-sm"
                    imgAlt="Lake Travis"
                    imgSrc="/lake_travis_oasis.jpg"
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Lake Travis
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      <WaterLevel />
                    </p>
                  </Card>
                }
              >
                <span className="cursor-pointer inline text-blue-600 dark:text-blue-500">
                  Lake Travis!
                </span>
              </Popover>
              &nbsp; Please take a moment to review our boating plan. If you
              have any questions or need further information, don&apos;t
              hesitate to reach out!
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
          <DaysBefore />
          <DayOf />
          <OnTheBoat />
          <EndOfDay />
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
