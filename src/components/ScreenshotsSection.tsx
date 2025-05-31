const ScreenshotsSection = () => {
  const screenshots = [
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
      title: "Modern Warfare",
    },
    {
      url: "https://images.unsplash.com/photo-1526661934754-12c11d4b0ebc?w=800",
      title: "Warzone Battle Royale",
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
      title: "Black Ops",
    },
    {
      url: "https://images.unsplash.com/photo-1526661934754-12c11d4b0ebc?w=800",
      title: "Кампания WWII",
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
      title: "Мультиплеер",
    },
    {
      url: "https://images.unsplash.com/photo-1526661934754-12c11d4b0ebc?w=800",
      title: "Спецоперации",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Скриншоты
          </h2>
          <p className="text-xl text-gray-300">
            Погрузитесь в эпические сражения Call of Duty
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={screenshot.url}
                alt={screenshot.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {screenshot.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
