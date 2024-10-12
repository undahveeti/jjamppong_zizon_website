// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Language detection
import Backend from 'i18next-http-backend'; // Backend to load translation files

const resources = {
  en: {
    translation: {
      navbar: {
        about: "About Us",
        menu: "Menu",
        news: "News",
        gallery: "Gallery",
        contact: "Contact",
        history: "History",
        locations: "Locations",
        store: "Store", // New translation for "Store"
        intdesign: "Interior Design", // New translation for "Interior Design"
        franchise: "Franchise", // New translation for "Franchise"
        orderOnline: "Order Online",
      },
      header: {
        subheading: "Chase the new flavour",
        title: "The Leading Champion of Jjamppong Franchises",
        content: "Discover the unique and flavorful experience that sets us apart. Join us and taste the difference!",
        button: "Explore More"
      },
      aboutPage: {
        title: "We Promise 4 Things to Our Customers!",
        promise1: {
          title: "Top Quality Chili",
          description: "We use only the finest quality local chili powder."
        },
        promise2: {
          title: "Fresh Noodles",
          description: "We prepare our chewy noodles with care and precision."
        },
        promise3: {
          title: "No Seafood Byproducts",
          description: "We do not use seafood byproducts to increase quantity."
        },
        promise4: {
          title: "No Reused Ingredients",
          description: "We never reuse any food or ingredients."
        },
      },
      findUsPage: {
        tableHeaders: {
          storePhoto: "Store Photo",
          storeName: "Store Name",
          address: "Address",
          phone: "Phone Number",
          storeInfo: "Store Information",
          map: "Location Map",
        },
        storeInfoButton: "Store Information",
        businessHours: "Business Hours",
        franchisee: "Mama Sue",
        closeModal: "Close",
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
      interiorPage: {
        slideTitle: "Interior Design",  // Title for each slide
      },
      contactPage: {
        heading: "Contact Us",
        nameLabel: "Name:",
        emailLabel: "Email:",
        phoneLabel: "Phone Number:",
        messageLabel: "Message:",
        sendButton: "Send",
        successMessage: "Message sent successfully!",
        errorMessage: "There was an error sending your message.",
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
        about: "소개",
        menu: "메뉴",
        news: "뉴스",
        gallery: "갤러리",
        contact: "오시는 길",
        history: "역사",
        locations: "매장 위치",
        store: "매장", // New translation for "Store"
        intdesign: "인테리어 디자인", // New translation for "Interior Design"
        franchise: "프랜차이즈", // New translation for "Franchise"
        orderOnline: "온라인 주문",
      },
      header: {
        subheading: "새로운 맛을 추구하세요",
        title: "짬뽕 프랜차이즈의 선두 챔피언",
        content: "우리의 독특하고 맛있는 경험을 만나보세요. 차이를 맛보세요!",
        button: "더 알아보기"
      },
      aboutPage: {
          title: "고객님께 4가지 약속을 드립니다!",
          promise1: {
            title: "최고 품질의 고추",
            description: "우리는 최고의 품질을 자랑하는 현지 고춧가루만 사용합니다."
          },
          promise2: {
            title: "신선한 국수",
            description: "저희는 쫄깃한 국수를 정성껏 준비합니다."
          },
          promise3: {
            title: "해산물 부산물 없음",
            description: "우리는 양을 늘리기 위해 해산물 부산물을 사용하지 않습니다."
          },
          promise4: {
            title: "재사용하지 않는 재료",
            description: "우리는 재료를 절대 재사용하지 않습니다."
      },
    },
    findUsPage: {
      tableHeaders: {
        storePhoto: "매장 사진",
        storeName: "매장 이름",
        address: "주소",
        phone: "전화번호",
        storeInfo: "매장 정보",
        map: "위치 지도",
      },
      storeInfoButton: "매장 정보",
      businessHours: "영업 시간",
      franchisee: "Mama Sue", 
      closeModal: "닫기",
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
      interiorPage: {
        slideTitle: "인테리어 디자인",  // Title for each slide
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
      contactPage: {
        heading: "문의하기",
        nameLabel: "이름:",
        emailLabel: "이메일:",
        phoneLabel: "전화번호:",
        messageLabel: "메시지:",
        sendButton: "보내기",
        successMessage: "메시지가 성공적으로 전송되었습니다!",
        errorMessage: "메시지를 보내는 동안 오류가 발생했습니다.",
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
