const ScreenshotsSection = () => {
  const screenshots = [
    {
      url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
      title: "Исследовательские лаборатории",
    },
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
      title: "Научный комплекс",
    },
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
      title: "Подземные тоннели",
    },
    {
      url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
      title: "Мир Xen",
    },
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
      title: "Боевые сцены",
    },
    {
      url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
      title: "Атмосферные локации",
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
            Погрузитесь в атмосферу исследовательского комплекса Чёрная Меза
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
