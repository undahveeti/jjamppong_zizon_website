// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Language detection
import Backend from 'i18next-http-backend'; // Backend to load translation files

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About Us",
        menu: "Menu",
        news: "News",
        gallery: "Gallery",
        contact: "Contact",
      },
      header: {
        subheading: "Chase the new flavour",
        title: "The Leading Champion of Jjamppong Franchises",
        content: "Discover the unique and flavorful experience that sets us apart. Join us and taste the difference!",
        button: "Explore More"
      },
      about: {
        title: "About Us",
        content: `Discover South Korea's Premier Spicy Noodle Experience with over 100 Locations Nationwide. At our heart lies a passion for vibrant flavors, which is why we handpick only the finest red peppers, sourced for their fiery zest and harvested at the pinnacle of ripeness. This meticulous selection fuels the distinctive, robust flavor of our 100% natural Goobne pepper sauce—a cornerstone of our culinary offerings. Every bowl promises a journey of taste, crafted from ingredients that are nurtured from seed to sauce, ensuring each dish not only tingles your palate but also meets the highest standards of quality. Join us for an unforgettable adventure in flavor, where traditional craftsmanship meets the fiery essence of Korea.`,
      },
      laurels: {
        title1: "We're turning the heat up!",
        description1: "Eater LA covers our summer opening!",
        title2: "Craving the perfect comfort meal?",
        description2: "Our delicious Jjangmyeon is on special sale! 7 days a week!",
      },
      specialmenu: {
        title: "Drinks & Beverages",
        drink1: "Soju (Chamisul, Chum-Churum, Jinro)",
        drink2: "Beer (Terra, Cass)",
        drink3: "Cola 500ml",
        drink4: "Cider 500ml",
      },
      menu: {
        dish1: {
          name: "Spicy Seafood Noodle Soup",
          description: "A rich, spicy broth with fresh noodles and a flavorful mix of shrimp, mussels, and clams.",
        },
        dish2: {
          name: "Spicy Seafood Rice Noodle Soup",
          description: "For spice lovers! A hearty soup with soft rice noodles and a variety of fresh seafood.",
        },
        dish3: {
          name: "Spicy Seafood Sujebi (Hand-pulled dough) Soup",
          description: "Hand-pulled dough in a spicy seafood broth with shrimp, mussels, and clams.",
        },
        dish4: {
          name: "Spicy Seafood and Soft Bean Curd Soup with Rice",
          description: "A comforting spicy soup with soft bean curd, seafood, and rice on the side.",
        },
        dish5: {
          name: "Spicy Seafood Noodle Soup with Soft Bean Curd",
          description: "A spicy noodle soup with a mix of seafood and soft, silky bean curd.",
        },
        dish6: {
          name: "Noodles in Black-Bean Sauce",
          description: "Chewy noodles topped with a rich and savory black bean sauce.",
        },
        dish7: {
          name: "Noodles in Black-Bean Sauce and Spicy Seafood Noodle Soup (Half & Half)",
          description: "A perfect combo of savory black bean sauce noodles and spicy seafood noodle soup.",
        },
        dish8: {
          name: "Crab Meat Fried Rice",
          description: "Stir-fried rice with fresh crab meat, vegetables, and a touch of savory seasoning.",
        },
        dish9: {
          name: "Shrimp Fried Rice",
          description: "Delicious fried rice with juicy shrimp and vegetables, seasoned to perfection.",
        },
      },
      gallery: {
        title: "Photo Gallery",
        description: "Discover the unique and flavorful experience that sets us apart",
        button: "View More",
      },
      findus: {
        contact: "Contact",
        title: "Find Us",
        address: "3446 Wilshire Blvd, Los Angeles, CA 90010",
        hoursTitle: "Opening Hours",
        hours: "Mon - Sun: 10:30am - 9:00pm",
        button: "Visit Us",
      },
      newsletter: {
        subheading: "Newsletter",
        title: "Subscribe To Our Newsletter",
        description: "And never miss the latest updates!",
        placeholder: "Enter your email address",
        button: "Subscribe",
      },
      footer: {
        contact: "Contact Us",
        quote: "The best way to find yourself is to lose yourself in the service of others.",
        workingHours: "Working Hours",
        days: "Monday-Sunday:",
        hours: "10:00 am - 9:00 pm",
        copyright: "2024 Zizon Jjampong. All Rights reserved.",
      },
      // other translations...
    },
  },
  ko: {
    translation: {
      navbar: {
        home: "홈",
        about: "소개",
        menu: "메뉴",
        news: "뉴스",
        gallery: "갤러리",
        contact: "오시는 길",
      },
      header: {
        subheading: "새로운 맛을 추구하세요",
        title: "짬뽕 프랜차이즈의 선두 챔피언",
        content: "우리의 독특하고 맛있는 경험을 만나보세요. 차이를 맛보세요!",
        button: "더 알아보기"
      },
      about: {
        title: "소개",
        content: `전국 100개 이상의 매장에서 대한민국 최고의 매운 국수 경험을 만나보세요. 우리는 생생한 풍미에 대한 열정으로 최고의 홍고추만을 선별하여, 가장 매운 맛을 내는 고추를 수확하여 사용합니다. 이 정성을 다한 고추는 우리의 100% 자연산 굽네 고추 소스의 독특하고 강력한 맛을 만듭니다. 매일 우리는 씨앗부터 소스까지 신선한 재료를 사용하여 최고의 품질을 보장하며, 각 요리가 입맛을 자극할 뿐만 아니라 뛰어난 품질을 유지하도록 보장합니다. 전통적인 장인 정신과 한국의 매운 맛이 결합된 잊지 못할 맛의 여행에 함께 하세요.`,
      },
      laurels: {
        title1: "우리는 열기를 더하고 있어요!",
        description1: "Eater LA가 여름 개장을 다룹니다!",
        title2: "완벽한 안락식을 원하시나요?",
        description2: "맛있는 짜장면이 특별 세일 중입니다! 주 7일!",
      },
      specialmenu: {
        title: "음료 & 주류",
        drink1: "소주 (참이슬, 처음처럼, 진로)",
        drink2: "맥주 (테라, 카스)",
        drink3: "콜라 500ml",
        drink4: "사이다 500ml",
      },
      
      menu: {
        dish1: {
          name: "매운 해물 국수",
          description: "신선한 새우, 홍합, 조개와 함께한 매콤한 국물 국수.",
        },
        dish2: {
          name: "매운 해물 쌀국수",
          description: "매운맛을 좋아하는 분들을 위한 부드러운 쌀국수와 다양한 해산물로 구성된 국물.",
        },
        dish3: {
          name: "매운 해물 수제비",
          description: "수제비와 새우, 홍합, 조개를 넣은 매콤한 해물 국물.",
        },
        dish4: {
          name: "매운 해물 순두부 찌개",
          description: "해물과 부드러운 순두부, 밥이 곁들여진 매운 국물.",
        },
        dish5: {
          name: "해물 순두부 국수",
          description: "해물과 부드러운 순두부를 곁들인 매운 국물 국수.",
        },
        dish6: {
          name: "짜장면",
          description: "쫄깃한 면 위에 진하고 감칠맛 나는 짜장 소스.",
        },
        dish7: {
          name: "짜장면 & 매운 해물 국수 (반반)",
          description: "감칠맛 나는 짜장면과 매운 해물 국수를 완벽하게 조합한 반반 메뉴.",
        },
        dish8: {
          name: "게살 볶음밥",
          description: "신선한 게살과 야채로 만든 고소한 볶음밥.",
        },
        dish9: {
          name: "새우 볶음밥",
          description: "통통한 새우와 야채를 넣어 맛있게 볶아낸 볶음밥.",
        },
      },
      gallery: {
        title: "사진 갤러리",
        description: "우리만의 독특하고 맛있는 경험을 발견해보세요",
        button: "더 보기",
      },
      findus: {
        contact: "문의하기",
        title: "오시는 길",
        address: "3446 윌셔 블러바드, 로스앤젤레스, CA 90010",
        hoursTitle: "영업 시간",
        hours: "월 - 일: 오전 10:30 - 오후 9:00",
        button: "방문하기",
      },
      newsletter: {
        subheading: "뉴스레터",
        title: "우리 뉴스레터를 구독하세요",
        description: "최신 업데이트를 놓치지 마세요!",
        placeholder: "이메일 주소를 입력하세요",
        button: "구독하기",
      },
      footer: {
        contact: "문의하기",
        quote: "자신을 찾는 가장 좋은 방법은 타인을 돕는 것에 자신을 잃는 것입니다.",
        workingHours: "영업 시간",
        days: "월요일-일요일:",
        hours: "오전 10:00 - 오후 9:00",
        copyright: "2024 지존 짬뽕. 모든 권리 보유.",
      },
      // other translations...
    },
  },
};

i18n
  .use(Backend) // Load translations using HTTP backend
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    resources, // Inline resources
    fallbackLng: 'en', // Fallback language
    debug: true,
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;
