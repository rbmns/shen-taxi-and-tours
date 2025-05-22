
const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Sri Lanka Beach",
      caption: "Beautiful beaches of Sri Lanka"
    },
    {
      src: "https://images.unsplash.com/photo-1546708973-b339540417f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Tea plantations in Sri Lanka",
      caption: "Scenic tea plantations"
    },
    {
      src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Galle Fort",
      caption: "Historic Galle Fort"
    },
    {
      src: "https://images.unsplash.com/photo-1586163918803-2ba5a2d3ccfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Sri Lankan wildlife",
      caption: "Rich wildlife at national parks"
    },
    {
      src: "https://images.unsplash.com/photo-1544036748-7a1698aa9f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Sri Lankan culture",
      caption: "Experience local culture"
    },
    {
      src: "https://images.unsplash.com/photo-1592460017641-697082ffa181?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Sri Lankan cuisine",
      caption: "Delicious local cuisine"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-shen-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shen-navy mb-4">Discover Sri Lanka</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the beauty and culture of Sri Lanka with Shen Taxi & Tours. Here's a glimpse of what awaits you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-shen-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
