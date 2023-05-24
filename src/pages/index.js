import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/head1fix.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedTextMini from "@/components/AnimatedTextMini";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-paragraph w-full min-h-screen ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-center w-full lg:flex-col">
            {/* <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="WZ"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px), 50vw, 33vw"
              />
            </div> */}
            <div className="w-full flex flex-col items-center self-center  lg:w-full lg:text-center">
              <AnimatedTextMini
                text="Hi, My Name Is"
                className="!text-xs !text-left"
              />
              <AnimatedText
                text="Zidan Zulkhairyan Mandalim"
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-left lg:!text-6xl md:!text-3xl sm:!text-2xl
                "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs lg:text-left md:text-left sm:text-left">
                As a junior front end developer, I really like to learn new
                things and am very interested in the front end world, where I
                can turn ideas into innovative web applications. Showcasing my
                expertise in React.Js, web development, python.
              </p>
              <div className="flex items-center self-start mt-2 ">
                <Link
                  href="/CV-Zidan Zulkhairyan Mandalim.pdf"
                  target={"_blank"}
                  className="flex items-center bg-primary text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-backg hover:text-primary
                  border-2 border-solid border-transparent hover:border-back md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:zidanzulkhairyan@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe /> */}
        {/* <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="wz" className="w-full h-auto" />
        </div> */}
      </main>
    </>
  );
}
