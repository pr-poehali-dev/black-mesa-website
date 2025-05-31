import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
            BLACK
            <span className="text-orange-500 block">MESA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Переосмысление легендарной Half-Life от команды фанатов. Исследуйте
            исследовательский комплекс Чёрная Меза заново.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
          >
            <Icon name="Download" className="mr-2" />
            Скачать игру
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg"
          >
            <Icon name="Play" className="mr-2" />
            Смотреть трейлер
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-500">15+</div>
            <div className="text-gray-400">Лет разработки</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500">4M+</div>
            <div className="text-gray-400">Скачиваний</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500">95%</div>
            <div className="text-gray-400">Положительных отзывов</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-orange-500" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
