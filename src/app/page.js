"use client";
import MyWork from "@/components/MyWork";
import AboutMe from "@/components/AboutMe";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <MyWork />
      <AboutMe />
      <GetInTouch />
    </>
  );
}
