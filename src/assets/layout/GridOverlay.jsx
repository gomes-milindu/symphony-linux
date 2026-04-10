function GridOverlay() {
  const columns = Array.from({ length: 12 }); // reusable for all breakpoints

  return (
    <div className="pointer-events-none fixed inset-0 z-9999">
      <div className="w-full h-full flex justify-center">
        <div className="w-full max-w-6xl h-full">
          {/* Responsive grid */}
          <div className="
            h-full 
            grid
            grid-cols-4 
            md:grid-cols-8 
            xl:grid-cols-12 
            gap-x-4 
            xl:gap-x-6
          ">
            {columns.map((_, i) => (
              <div
                key={i}
                className="bg-red-300/20"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridOverlay;