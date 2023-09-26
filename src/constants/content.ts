export interface DictionaryEntry {
  header: {
    nav: {
      home: string;
      products: string;
      entertainment: string;
      support: string;
    };
    search: string;
  };
  heroLeft: {
    firstTitle: string;
    secondTitle: string;
    thirdTitle: string;
    paragraph: string;
    button: string;
  };
  getIPhone: {
    title: string;
    startPrice: string;
    allLink: string;
  };
  details: string;
  footer: { usa: string; ukraine: string; language: string };
}
export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    header: {
      nav: {
        home: "Home",
        products: "Products",
        entertainment: "Entertainment",
        support: "Support",
      },
      search: "Search",
    },
    heroLeft: {
      firstTitle: "Elevating life",
      secondTitle: "To Pro-Level Precision",
      thirdTitle: "With Vision Pro",
      paragraph:
        "With Vision Pro, you have an infinite canvas that transforms how you use the apps you love. Arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a reality — all while staying present in the world around you",
      button: "Pre-Order Now",
    },
    getIPhone: {
      title: "Get Your",
      startPrice: "From",
      allLink: "See All",
    },
    details: "Details",
    footer: { usa: "USA, English", ukraine: "Ukraine", language: "Language" },
  },
  uk: {
    header: {
      nav: {
        home: "Головна",
        products: "Товари",
        entertainment: "Розваги",
        support: "Підтримка",
      },
      search: "Пошук",
    },
    heroLeft: {
      firstTitle: "Прикрась життя",
      secondTitle: "до Професійного Рівня",
      thirdTitle: "з Vision Pro",
      paragraph:
        "Vision Pro - це нескінченний живопис, який змінює спосіб використання ваших улюблених додатків. Розміщуйте їх де завгодно, обираючи ідеальний розмір та перетворивши ваше робоче місце — на мрію, не відволікаючись від подій у навколишньому світі",
      button: "Передзамовити",
    },
    getIPhone: {
      title: "Обери свій",
      startPrice: "Від",
      allLink: "Переглянути",
    },
    details: "Переглянути",
    footer: { usa: "США, Англійська", ukraine: "Українська", language: "Мова" },
  },
};
