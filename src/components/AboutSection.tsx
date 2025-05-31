import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const features = [
    {
      icon: "Target",
      title: "Реалистичные боевые действия",
      description: "Аутентичные военные операции и тактические сражения",
    },
    {
      icon: "Users",
      title: "Мультиплеер",
      description: "Легендарные режимы от Team Deathmatch до Battle Royale",
    },
    {
      icon: "Award",
      title: "Эпические кампании",
      description: "Незабываемые одиночные кампании через историю войн",
    },
    {
      icon: "Gamepad2",
      title: "Постоянные обновления",
      description: "Регулярный контент, карты и игровые режимы",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            О франшизе
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Call of Duty — одна из самых успешных игровых франшиз в истории. С
            2003 года серия определяет стандарты военных шутеров, предлагая
            эпические кампании и революционный мультиплеер.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-600 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name={feature.icon} className="text-white" size={28} />
                </div>
                <CardTitle className="text-white text-lg">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            История франшизы
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Франшиза началась в 2003 году с оригинальной Call of Duty,
            посвящённой Второй мировой войне. За 20+ лет серия эволюционировала
            от исторических конфликтов к современным войнам и футуристическим
            сражениям. Включает культовые подсерии Modern Warfare, Black Ops, и
            новейшую Warzone, которая переопределила жанр battle royale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
