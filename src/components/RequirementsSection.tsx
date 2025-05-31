import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const RequirementsSection = () => {
  const minRequirements = [
    { label: "ОС", value: "Windows 7/8/10 (64-bit)" },
    {
      label: "Процессор",
      value: "Intel Core 2 Duo E6320 / AMD Athlon 64 X2 5000+",
    },
    { label: "Память", value: "6 GB RAM" },
    { label: "Видеокарта", value: "NVIDIA GeForce 8800/ATI Radeon HD 2600" },
    { label: "DirectX", value: "Version 9.0c" },
    { label: "Место", value: "16 GB" },
  ];

  const recommendedRequirements = [
    { label: "ОС", value: "Windows 10 (64-bit)" },
    { label: "Процессор", value: "Intel Core i5-4590 / AMD FX 8350" },
    { label: "Память", value: "8 GB RAM" },
    {
      label: "Видеокарта",
      value: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
    },
    { label: "DirectX", value: "Version 11" },
    { label: "Место", value: "20 GB" },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Системные требования
          </h2>
          <p className="text-xl text-gray-300">
            Убедитесь, что ваш компьютер готов к исследованию Чёрной Мезы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-orange-500 text-xl flex items-center">
                <Icon name="HardDrive" className="mr-2" />
                Минимальные требования
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {minRequirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 border-b border-gray-700 last:border-b-0"
                  >
                    <span className="text-gray-400 font-medium">
                      {req.label}:
                    </span>
                    <span className="text-white text-right flex-1 ml-4">
                      {req.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-orange-500 text-xl flex items-center">
                <Icon name="Zap" className="mr-2" />
                Рекомендуемые требования
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recommendedRequirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 border-b border-gray-700 last:border-b-0"
                  >
                    <span className="text-gray-400 font-medium">
                      {req.label}:
                    </span>
                    <span className="text-white text-right flex-1 ml-4">
                      {req.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Готовы начать приключение?
            </h3>
            <p className="text-orange-100 mb-6">
              Скачайте Black Mesa бесплатно прямо сейчас
            </p>
            <Button
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Download" className="mr-2" />
              Скачать игру (16 GB)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
