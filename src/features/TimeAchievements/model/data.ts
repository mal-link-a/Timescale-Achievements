import { TimeAchievement } from "./types";

export const data: TimeAchievement[] = [
  {
    startYear: 1834,
    endYear: 1871 ,
    name: "Техника",
    achievements: [
      {
        year: 1834,
        description:
          "Изобретение электродвигателя постоянного тока, способного поднимать грузы - Мориц Герман фон Якоби",
      },
      {
        year: 	1834,
        description: "Патент на электромагнитный телеграф - Сэмюэл Морзе",
      },
      {
        year: 1871,
        description:
          "Проектирование и частичная постройка Аналитической машины (прототип компьютера) - Чарльз Бэббидж",
      }      
    ],
  },
  {
    startYear: 1902,
    endYear: 1910,
    name: "Кино",
    achievements: [
      {
        year: 1902,
        description:
          `"Путешествие на Луну" (Le Voyage dans la Lune) - Жорж Мельес"`,
      },
      {
        year: 1903,
        description: `Первый вестерн "Большое ограбление поезда" (The Great Train Robbery) - Эдвин С. Портер`,
      },
      {
        year: 2001,
        description:
          "Основание первой студии в Голливуде (Universal, затем другие)",
      }
    ],
  },
  {
    startYear: 1922,
    endYear: 1929,
    name: "Литература",
    achievements: [
      {
        year: 1922,
        description:
          `"Улисс" - Джеймс Джойс`,
      },
       {
        year: 1925,
        description:
          `"Великий Гэтсби" - Ф. Скотт Фицджеральд`,
      },
       {
        year: 1925 ,
        description:
          `	"Процесс" - Франц Кафка (опубликовано посмертно)`,
      },
      {
        year: 1929,
        description: `"Прощай, оружие!" - Эрнест Хемингуэй (представитель "потерянного поколения")`,
      },      
    ],
  },
  {
    startYear: 1969,
    endYear: 1973,
    name: "Музыка",
    achievements: [
      {
        year: 1969,
        description:
          `"Abbey Road" - The Beatles`,
      },
      {
        year: 1969,
        description: `Дебютный альбом "Led Zeppelin" (расцвет хард-рока/хэви-метала)`,
      },
      {
        year: 1973,
        description:
          `"The Dark Side of the Moon" - Pink Floyd`,
      },
      {
        year: 1977,
        description: `"Never Mind the Bollocks, Here's the Sex Pistols" (пик панк-рока)`,
      }
    ],
  },
  {
    startYear: 1991,
    endYear: 2010,
    name: "Культура",
    achievements: [
      {
        year: 1991,
        description:
          `Публичный запуск Всемирной паутины (WWW) - Тим Бернерс-Ли`,
      },
      {
        year: 2004,
        description: `Начало Facebook (взрыв соцсетей и цифровой культуры)`,
      }, 
      
      {
        year: 2007,
        description: `Первый iPhone (массовое распространение смартфонов)`,
      }, 
      
      {
        year: 2009,
        description: `Глобальный прорыв K-Pop (Wonder Girls, Girls' Generation, начало волны)`,
      }     
    ],
  },
  {
    startYear: 2010,
    endYear: 2025,
    name: "Наука",
    achievements: [
      {
        year: 2012,
        description:
          `Обнаружение бозона Хиггса на Большом адронном коллайдере (БАК)`,
      },
      {
        year: 2014,
        description: `Первая мягкая посадка на комету (67P/Чурюмова—Герасименко) - зонд Philae миссии Rosetta`,
      },
      {
        year: 2016,
        description:
          `AlphaGo побеждает чемпиона мира в Го (прорыв в ИИ)`,
      },
      {
        year: 2020,
        description: `Разработка и внедрение мРНК-вакцин (Pfizer/BioNTech, Moderna против COVID-19)`,
      },
      {
        year: 2021,
        description: `Запуск космического телескопа "Джеймс Уэбб"`,
      }
    ],
  },
];
