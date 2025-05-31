import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
            CALL OF
            <span className="text-green-500 block">DUTY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Легендарная военная франшиза 2003-2024. Более 20 лет эпических
            сражений, незабываемых кампаний и захватывающего мультиплеера.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
          >
            <Icon name="Download" className="mr-2" />
            Играть сейчас
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 text-lg"
          >
            <Icon name="Play" className="mr-2" />
            Смотреть трейлер
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-500">20+</div>
            <div className="text-gray-400">Игр в серии</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-500">400M+</div>
            <div className="text-gray-400">Проданных копий</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-500">100M+</div>
            <div className="text-gray-400">Игроков</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-green-500" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
