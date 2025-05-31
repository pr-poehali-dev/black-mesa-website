import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const features = [
    {
      icon: "Zap",
      title: "Улучшенная графика",
      description: "Современные визуальные эффекты на движке Source Engine",
    },
    {
      icon: "Users",
      title: "Мультиплеер",
      description: "Классические режимы Deathmatch и Team Deathmatch",
    },
    {
      icon: "Gamepad2",
      title: "Улучшенный геймплей",
      description: "Переработанная механика и новые возможности",
    },
    {
      icon: "Volume2",
      title: "Новое озвучивание",
      description: "Профессиональная озвучка и улучшенные звуковые эффекты",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            О игре
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Black Mesa — это полная переделка классической Half-Life, созданная
            командой преданных фанатов. Игра воссоздает знаменитую историю
            Гордона Фримена с современной графикой и улучшенным геймплеем.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center">
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
            История разработки
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Проект Black Mesa начался в 2004 году как мод для Half-Life 2,
            созданный энтузиастами. После более чем 15 лет разработки, команда
            создала полноценную игру, которая не только воссоздает оригинальную
            Half-Life, но и значительно улучшает её во всех аспектах. В 2020
            году была выпущена финальная глава Xen, завершив эпическое
            путешествие.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
