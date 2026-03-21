export default function MusicGallery() {
  const imgs = [
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
    "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
    "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    "https://images.unsplash.com/photo-1511192336575-5a79af67a629",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad",
    "https://images.unsplash.com/photo-1525201548942-d8732f6617a0",
  ];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 mb-5">
      <div className="max-w-6xl mx-auto">

        {/* 📱 Mobile */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {imgs.map((src, i) => (
            <Card key={i} src={src} className="h-56" />
          ))}
        </div>

        {/* 💻 Tablet / Desktop — custom uneven layout */}
        <div className="hidden md:grid grid-cols-4 auto-rows-[90px] gap-4">

          <Card src={imgs[0]} className="row-span-3 col-span-2" />
          <Card src={imgs[1]} className="row-span-4 col-span-2" />

          <Card src={imgs[2]} className="row-span-3 col-span-1" />
          <Card src={imgs[3]} className="row-span-4 col-span-1" />
          <Card src={imgs[4]} className="row-span-2 col-span-2" />

          <Card src={imgs[5]} className="row-span-2 col-span-1" />
          <Card src={imgs[6]} className="row-span-2 col-span-1" />

          <Card src={imgs[7]} className="row-span-4 col-span-2" />

          <Card src={imgs[8]} className="row-span-3 col-span-1" />
          <Card src={imgs[9]} className="row-span-3 col-span-1" />

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
