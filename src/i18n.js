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
        content: `Discover South Korea's Premier Spicy Noodle Experience...`,
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
        content: `대한민국 최고의 매운 국수 경험을 만나보세요...`,
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
