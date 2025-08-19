'use client';
import Link from 'next/link';

const MyWork = () => {
  return (
    <section id="my-work">
      <div className="my-work__wrapper">
        <div className="my-work__container">
          <Link href="/my-work">
            <img src="/assets/GoodisonPark.png" alt="Design Graphic" />
          </Link>
        </div>
        <div className="my-work__container">
          <Link href="/my-work">
            <img src="/assets/videography-image.jpg" alt="Videography" />
          </Link>
        </div>
        <div className="my-work__container">
          <Link href="/my-work">
            <img src="/assets/video-editing-image.jpg" alt="Video Editing" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
