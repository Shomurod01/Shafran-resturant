// Translations data
const translations = {
  pl: {
    title: "SHAFRAN RESTAURACJA",
    subtitle: "Tradycyjne smaki kuchni uzbeckiej",
    menu: "Menu",
    soups: "Zupy",
    mainDishes: "Danie Główne",
    grill: "Grill",
    salads: "Sałatki",
    breakfast: "Śniadanie",
    bakery: "Piekarnia",
    desserts: "Desery",
    coffee: "Kawa",
    lemonades: "Lemoniady",
    cocktails: "Koktajle",
    drinks: "Napoje",
    sides: "Dodatki",
    viewMenu: "Zobacz Menu",
    about: "O Nas",
    contact: "Kontakt",
    address: "Adres: ul. Przykładowa 123, Warszawa",
    phone: "Telefon: +48 123 456 789",
    hours: "Godziny otwarcia: Pon-Nd 11:00-22:00",
    sets: "Zestawy",
    aboutTitle: "O Nas",
    aboutText1:
      "SHAFRAN to autentyczna restauracja uzbecka, która przenosi gości w kulinarną podróż do serca Azji Centralnej. Nasze dania przygotowywane są według tradycyjnych receptur, z wykorzystaniem oryginalnych przypraw i technik gotowania.",
    aboutText2:
      "Specjalizujemy się w tradycyjnych daniach kuchni uzbeckiej, takich jak pilaw, manti, lagman i szaszłyki. Każde danie przygotowywane jest z najwyższej jakości składników, aby zapewnić autentyczny smak i aromat.",
    yearsExperience: "Lat doświadczenia",
    authenticDishes: "Autentycznych dań",
    contactTitle: "Kontakt",
    mapPlaceholder: "Mapa",
    copyright: "© 2024 SHAFRAN. Wszelkie prawa zastrzeżone.",
    facebook: "Facebook",
    instagram: "Instagram",
    tripadvisor: "TripAdvisor",
  },
  uz: {
    title: "SHAFRAN RESTORAN",
    subtitle: "O'zbek oshxonasining an'anaviy ta'mlari",
    menu: "Menyu",
    soups: "Sho'rvalar",
    mainDishes: "Asosiy Taomlar",
    grill: "Gril",
    salads: "Salatlar",
    breakfast: "Nonushta",
    bakery: "Nonvoyxona",
    desserts: "Shirinliklar",
    coffee: "Qahva",
    lemonades: "Limonadlar",
    cocktails: "Kokteyllar",
    drinks: "Ichimliklar",
    sides: "Qo'shimchalar",
    viewMenu: "Menyuni Ko'rish",
    about: "Biz Haqimizda",
    contact: "Aloqa",
    address: "Manzil: Namunali ko'chasi 123, Varshava",
    phone: "Telefon: +48 123 456 789",
    hours: "Ish vaqti: Du-Ya 11:00-22:00",
    sets: "To'plamlar",
    aboutTitle: "Biz Haqimizda",
    aboutText1:
      "SHAFRAN - bu mehmonlarni Markaziy Osiyo yuragiga kulinariya sayohatiga olib boradigan haqiqiy o'zbek restorani. Bizning taomlarimiz an'anaviy retseptlar bo'yicha, asl ziravorlar va pishirish texnikasidan foydalangan holda tayyorlanadi.",
    aboutText2:
      "Biz palov, manti, lag'mon va shashlik kabi an'anaviy o'zbek taomlariga ixtisoslashganmiz. Har bir taom haqiqiy ta'm va xushbo'ylikni ta'minlash uchun eng yuqori sifatli ingredientlardan tayyorlanadi.",
    yearsExperience: "Yillik tajriba",
    authenticDishes: "Asl taomlar",
    contactTitle: "Aloqa",
    mapPlaceholder: "Xarita",
    copyright: "© 2024 SHAFRAN. Barcha huquqlar himoyalangan.",
    facebook: "Facebook",
    instagram: "Instagram",
    tripadvisor: "TripAdvisor",
  },
  ru: {
    title: "ШАФРАН РЕСТОРАН",
    subtitle: "Традиционные вкусы узбекской кухни",
    menu: "Меню",
    soups: "Супы",
    mainDishes: "Основные Блюда",
    grill: "Гриль",
    salads: "Салаты",
    breakfast: "Завтрак",
    bakery: "Выпечка",
    desserts: "Десерты",
    coffee: "Кофе",
    lemonades: "Лимонады",
    cocktails: "Коктейли",
    drinks: "Напитки",
    sides: "Гарниры",
    viewMenu: "Посмотреть Меню",
    about: "О Нас",
    contact: "Контакты",
    address: "Адрес: ул. Примерная 123, Варшава",
    phone: "Телефон: +48 123 456 789",
    hours: "Часы работы: Пн-Вс 11:00-22:00",
    sets: "Наборы",
    aboutTitle: "О Нас",
    aboutText1:
      "ШАФРАН - это аутентичный узбекский ресторан, который переносит гостей в кулинарное путешествие в сердце Центральной Азии. Наши блюда готовятся по традиционным рецептам с использованием оригинальных специй и техник приготовления.",
    aboutText2:
      "Мы специализируемся на традиционных блюдах узбекской кухни, таких как плов, манты, лагман и шашлыки. Каждое блюдо готовится из высококачественных ингредиентов, чтобы обеспечить аутентичный вкус и аромат.",
    yearsExperience: "Лет опыта",
    authenticDishes: "Аутентичных блюд",
    contactTitle: "Контакты",
    mapPlaceholder: "Карта",
    copyright: "© 2024 ШАФРАН. Все права защищены.",
    facebook: "Facebook",
    instagram: "Instagram",
    tripadvisor: "TripAdvisor",
  },
}

// Menu data
const menuData = {
  pl: {
    soups: [
      {
        name: "Shorpa",
        price: "25 zł",
        description: "Tradycyjna zupa z cielęciny i warzywami",
        image: "images/meals/shorpa.png",
      },
      {
        name: "Shorpo z Kurczakiem",
        price: "22 zł",
        description: "Tradycyjna zupa z cielęciny i warzywami",
      },
      {
        name: "Mastava",
        price: "24 zł",
        description:
          "Mięso Wołowe, Ziemniak Gotowany, Marchew, Cebula, Papryka, Kminek, Sos Pomidorowy, Koperek, Kolendra, Zieleń, śmietana, liść laurowy, anyż.",
      },
      {
        name: "Chuchvara",
        price: "24 zł",
        description:
          "Kluski, Ziemniaki, Marchew, Cebula, Papryka, Kminek, Sos Pomidorowy, Koperek, Kolendra, Zieleń, śmietana, liść laurowy, anyż.",
      },
      {
        name: "Uygur Lagman",
        price: "27 zł",
        description:
          "Wołowina, kapusta, daikon, seler, fasola, pasta pomidorowa, papryka, imbir, anyż, sos sojowy, makaron, cebula, kolendra, koperek, ostry sos.",
      },
    ],
    sets: [
      {
        name: "Zestaw Pilaw",
        price: "35 zł",
        description: "Danie, Chleb sałatki",
      },
    ],
    mainDishes: [
      {
        name: "Uzbecki Pilaw (450 g)",
        price: "30 zł",
        description: "Tradycyjne danie z cielęciny, ryżu, marchewki i przypraw, podawane z jajkiem przepiórczym",
        image: "images/meals/pilaf.png",
      },
      {
        name: "Kazan Kebab Wołowa",
        price: "45 zł",
        description:
          "Wołowina/Jagnięcina, Ziemniaki, Kolendra, Kminek, jajko, cebula, czarny pieprz, pomidor, ogórek, Koperek, Sułtanki.",
      },
      {
        name: "Manti",
        price: "35 zł",
        description:
          "Mięso siekane wołowe, ciasto, kolendra, posiekana cebula, czarny pieprz, zieleń, śmietana, koper, kolendra.",
        image: "images/meals/manti.png",
      },
      {
        name: "Lagman Smazony",
        price: "35 zł",
        description:
          "Wołowina, kapusta, daikon, seler, fasola, pasta pomidorowa, papryka, imbir, anyż, sos sojowy, makaron, kolendra, koperek, ostry sos, jajko.",
        image: "images/meals/lagman.png",
      },
    ],
    grill: [
      {
        name: "Szaszłyk Wołowy",
        price: "27 zł",
        description:
          "Delektuj się przepysznym kebabem z grilla wołowego. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.",
        image: "images/meals/shashlik.png",
      },
      {
        name: "Szaszlyk Baranina",
        price: "29 zł",
        description:
          "Delektuj się przepysznym kebabem z grilla Jagnięcinego. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.",
      },
    ],
    salads: [
      {
        name: "Sałatka Bakłażan",
        price: "30 zł",
        description:
          "bakłażan, zielona soczewica, oliwa, bulion warzywny, pomidorki koktajlowe, zielenina, czerwona cebula, pieprz, sól i przyprawy do smaku (np. oregano, tymianek)",
        image: "images/meals/salad.png",
      },
      {
        name: "Sałatka Cezar",
        price: "35 zł",
        description:
          "Sałata rzymska, ser Parmezan, grzanki oraz sos z oliwy z oliwek, soku z cytryny, anchois, czosnku, żółtek jaj i sosu Worcestershire.",
      },
    ],
    breakfast: [
      {
        name: "Angielskie Śniadanie",
        price: "25 zł",
        description:
          "Zaspokój swój głód naszym przepysznym i pożywnym śniadaniem. Ciesz się życiem kruszonka po kruszonce, a nie gryzienie po kęsie",
        image: "images/meals/breakfast.png",
      },
      {
        name: "Chebureki",
        price: "15 zł",
        description: "Delikatne ciasto nadziewane mieloną cielęciną, smażone w głębokim tłuszczu na złoty kolor",
      },
    ],
    bakery: [
      {
        name: "Samsa Wolovy",
        price: "12 zł",
        description:
          "Wołowina, posiekana cebula, masło, kminek, kolendra, sezam, ciasto, ciasto francuskie, pieprz czarny, sos pomidorowy.",
        image: "images/meals/samsa.png",
      },
      {
        name: "Samsa Kurczak",
        price: "10 zł",
        description:
          "Kurczak, posiekana cebula, masło, kminek, kolendra, sezam, ciasto, ciasto francuskie, pieprz czarny, sos pomidorowy.",
      },
    ],
    desserts: [
      {
        name: "Sernik",
        price: "20 zł",
        description: "",
        image: "images/meals/dessert.png",
      },
      {
        name: "Ciasto Miodowe",
        price: "20 zł",
        description: "",
      },
    ],
    coffee: [
      {
        name: "Espresso/Macchiato",
        price: "9 zł",
        description: "",
        image: "images/meals/coffee.png",
      },
      {
        name: "Cappuccino",
        price: "14 zł",
        description: "",
      },
    ],
    lemonades: [
      {
        name: "Klasyczna",
        price: "18 zł",
        description: "",
        image: "images/meals/lemonade.png",
      },
      {
        name: "Truskawkowa",
        price: "18 zł",
        description: "",
      },
    ],
    cocktails: [
      {
        name: "Hugo",
        price: "25 zł",
        description: "",
        image: "images/meals/cocktail.png",
      },
      {
        name: "Aperol",
        price: "25 zł",
        description: "",
      },
    ],
    drinks: [
      {
        name: "Herbata Czarna/Zielona",
        price: "5 zł",
        description: "",
      },
      {
        name: "Woda Gazowana/Niegazowana 300/330ml",
        price: "7 zł",
        description: "",
      },
    ],
    sides: [
      {
        name: "Guruch",
        price: "15 zł",
        description: "",
      },
      {
        name: "Pyure",
        price: "15 zł",
        description: "",
      },
    ],
  },
  ru: {
    soups: [
      {
        name: "Шорпа",
        price: "25 zł",
        description: "Традиционный суп из телятины и овощей",
        image: "images/meals/shorpa.png",
      },
      {
        name: "Шорпа с Курицей",
        price: "22 zł",
        description: "Традиционный суп из телятины и овощей",
      },
    ],
    sets: [
      {
        name: "Набор Плов",
        price: "35 zł",
        description: "Блюдо, хлеб, салаты",
      },
    ],
    mainDishes: [
      {
        name: "Узбекский Плов (450 г)",
        price: "30 zł",
        description: "Традиционное блюдо из телятины, риса, моркови и специй, подается с перепелиным яйцом",
        image: "images/meals/pilaf.png",
      },
      {
        name: "Казан Кебаб Говяжий",
        price: "45 zł",
        description:
          "Говядина/баранина, картофель, кориандр, тмин, яйцо, лук, черный перец, помидор, огурец, укроп, изюм.",
      },
    ],
    grill: [
      {
        name: "Шашлык из Говядины",
        price: "27 zł",
        description:
          "Насладитесь вкуснейшим кебабом из говядины на гриле. Чувствуется как дома, на вкус как рай, лучше с томатным соусом и луком.",
        image: "images/meals/shashlik.png",
      },
    ],
    salads: [
      {
        name: "Салат из Баклажанов",
        price: "30 zł",
        description:
          "Баклажан, зеленая чечевица, оливковое масло, овощной бульон, помидоры черри, зелень, красный лук, перец, соль и специи по вкусу (например, орегано, тимьян)",
        image: "images/meals/salad.png",
      },
    ],
    breakfast: [
      {
        name: "Английский Завтрак",
        price: "25 zł",
        description:
          "Утолите свой голод нашим вкуснейшим и питательным завтраком. Наслаждайтесь жизнью крошка за крошкой, а не укус за укусом",
        image: "images/meals/breakfast.png",
      },
    ],
    bakery: [
      {
        name: "Самса с Говядиной",
        price: "12 zł",
        description:
          "Говядина, нарезанный лук, масло, тмин, кориандр, кунжут, тесто, слоеное тесто, черный перец, томатный соус.",
        image: "images/meals/samsa.png",
      },
    ],
    desserts: [
      {
        name: "Чизкейк",
        price: "20 zł",
        description: "",
        image: "images/meals/dessert.png",
      },
    ],
    coffee: [
      {
        name: "Эспрессо/Макиато",
        price: "9 zł",
        description: "",
        image: "images/meals/coffee.png",
      },
    ],
    lemonades: [
      {
        name: "Классическая",
        price: "18 zł",
        description: "",
        image: "images/meals/lemonade.png",
      },
    ],
    cocktails: [
      {
        name: "Хуго",
        price: "25 zł",
        description: "",
        image: "images/meals/cocktail.png",
      },
    ],
    drinks: [
      {
        name: "Чай Черный/Зеленый",
        price: "5 zł",
        description: "",
      },
    ],
    sides: [
      {
        name: "Рис",
        price: "15 zł",
        description: "",
      },
    ],
  },
  uz: {
    soups: [
      {
        name: "Shorpa",
        price: "25 zł",
        description: "An'anaviy mol go'shti va sabzavotli sho'rva",
        image: "images/meals/shorpa.png",
      },
    ],
    sets: [
      {
        name: "Palov to'plami",
        price: "35 zł",
        description: "Taom, non, salatlar",
      },
    ],
    mainDishes: [
      {
        name: "O'zbek Palovi (450 g)",
        price: "30 zł",
        description:
          "An'anaviy mol go'shti, guruch, sabzi va ziravorlardan tayyorlangan taom, bedana tuxumi bilan tortiladi",
        image: "images/meals/pilaf.png",
      },
    ],
    grill: [
      {
        name: "Mol go'shtidan shashlik",
        price: "27 zł",
        description:
          "Mol go'shtidan grilda pishirilgan mazali kabobdan rohatlaning. O'zingizni uyda his qiling, jannat kabi ta'm bering, pomidor sousi va piyoz bilan yaxshiroq.",
        image: "images/meals/shashlik.png",
      },
    ],
    salads: [
      {
        name: "Baqlajon salatasi",
        price: "30 zł",
        description:
          "baqlajon, yashil yasmiq, zaytun moyi, sabzavotli bulon, gilos pomidorlari, ko'katlar, qizil piyoz, murch, tuz va ta'mga ko'ra ziravorlar (masalan, oregano, timyan)",
        image: "images/meals/salad.png",
      },
    ],
    breakfast: [
      {
        name: "Inglizcha nonushta",
        price: "25 zł",
        description:
          "Bizning mazali va to'yimli nonushtamiz bilan ochligingizni qondiring. Hayotdan lazzatlaning, bo'lakma-bo'lak emas, balki tishlashdan ko'ra",
        image: "images/meals/breakfast.png",
      },
    ],
    bakery: [
      {
        name: "Mol go'shtidan Samsa",
        price: "12 zł",
        description:
          "Mol go'shti, to'g'ralgan piyoz, sariyog', zira, koriandr, kunjut, xamir, puff pastry, qora murch, pomidor sousi.",
        image: "images/meals/samsa.png",
      },
    ],
    desserts: [
      {
        name: "Pishloqli kek",
        price: "20 zł",
        description: "",
        image: "images/meals/dessert.png",
      },
    ],
    coffee: [
      {
        name: "Espresso/Macchiato",
        price: "9 zł",
        description: "",
        image: "images/meals/coffee.png",
      },
    ],
    lemonades: [
      {
        name: "Klassik",
        price: "18 zł",
        description: "",
        image: "images/meals/lemonade.png",
      },
    ],
    cocktails: [
      {
        name: "Xugo",
        price: "25 zł",
        description: "",
        image: "images/meals/cocktail.png",
      },
    ],
    drinks: [
      {
        name: "Qora/Yashil choy",
        price: "5 zł",
        description: "",
      },
    ],
    sides: [
      {
        name: "Guruch",
        price: "15 zł",
        description: "",
      },
    ],
  },
}
