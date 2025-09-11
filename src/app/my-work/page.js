"use client";
import Header2 from "./components/Header2";
import GraphicDesign from "./components/GraphicDesign";
import Videography from "./components/Videography";
import VideoEditing from "./components/VideoEditing";

export default function MyWorkPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Header2 />
      <GraphicDesign />
      <Videography />
      <VideoEditing />
    </main>
  );
}
