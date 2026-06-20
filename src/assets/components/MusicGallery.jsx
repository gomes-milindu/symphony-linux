import LandingLeftCurve from "./LandingLeftCurve";
import { GalleryPage } from "../data/AssetsLinks.js";

export default function MusicGallery() {
  const imgs = [
    GalleryPage.MusicGallery_1,
    GalleryPage.MusicGallery_2,
    GalleryPage.MusicGallery_3,
    GalleryPage.MusicGallery_4,
    GalleryPage.MusicGallery_5,
    GalleryPage.MusicGallery_6,
    GalleryPage.MusicGallery_7,
    GalleryPage.MusicGallery_8,
    GalleryPage.MusicGallery_9,
  ];

  return (
    
    <div className="min-h-screen bg-white p-4 sm:p-8 mb-5">
      
      <div className="max-w-6xl mx-auto">

        {/* 📱 Mobile */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
           {imgs.map((src, i) => ( 
            <Card key={i} src={src} className="h-56" />
            
            )) }
        </div>

        {/* 💻 Tablet / Desktop — custom uneven layout */}
        <div className="hidden md:grid grid-cols-4 auto-rows-[90px] gap-4">

          <Card src={GalleryPage.MusicGallery_1} className="row-span-3 col-span-2" />
          <Card src={GalleryPage.MusicGallery_2} className="row-span-4 col-span-2" />

          <Card src={GalleryPage.MusicGallery_3} className="row-span-3 col-span-1" />
          <Card src={GalleryPage.MusicGallery_4} className="row-span-4 col-span-1" />
          <Card src={GalleryPage.MusicGallery_5} className="row-span-2 col-span-2" />

          <Card src={GalleryPage.MusicGallery_5} className="row-span-2 col-span-1" />
          <Card src={GalleryPage.MusicGallery_6} className="row-span-2 col-span-1" />

          <Card src={GalleryPage.MusicGallery_7} className="row-span-4 col-span-2" />

          <Card src={GalleryPage.MusicGallery_8} className="row-span-3 col-span-1" />
          <Card src={GalleryPage.MusicGallery_9} className="row-span-3 col-span-1" />

        </div>

      </div>
    </div>
  );
}

function Card({ src, className }) {
  return (
    <div className={`overflow-hidden rounded-xl shadow-md ${className}`}>
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover hover:scale-105 transition duration-300"
        loading="lazy"
      />
    </div>
  );
}
