import Header2 from './components/Header2';

export default function MyWorkPage() {
  return (
    <main style={{minHeight: "100vh"}}>
      <Header2 />
      <section id="graphic-design" className="category-section">
        <h2 className="category-header-1">Graphic Design</h2>
      </section>
      <section id="videography" className="category-section">
        <h2 className="category-header-2">Videography</h2>
      </section>
      <section id="video-editing" className="category-section">
        <h2 className="category-header-3">Video Editing</h2>
      </section>
    </main>
  );
}
