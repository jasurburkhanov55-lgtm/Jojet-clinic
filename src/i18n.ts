import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        gallery: 'Gallery',
        testimonials: 'Testimonials',
        blog: 'Blog',
        contact: 'Contact',
        portal: 'Patient Portal',
        pricing: 'Pricing'
      },
      hero: {
        title: 'Elevate Your Essence',
        subtitle: 'Aristocratic Beauty Redefined',
        description: 'Experience the art of transformation with Dr. Jasurjon Burkhanov, where precision meets elegance and every procedure is a masterpiece.',
        cta: 'Book a Consultation',
        ctaSecondary: 'Explore Our Services'
      },
      about: {
        title: 'About Dr. Jasurjon Burkhanov',
        subtitle: 'Board-Certified Plastic Surgeon',
        description: 'With over 20 years of experience and training from the world\'s most prestigious institutions, Dr. Burkhanov has established himself as a leading authority in aesthetic surgery.',
        credentials: 'Harvard Medical School Fellowship | American Board of Plastic Surgery | Newsweek Top Surgeon 2024',
        philosophy: 'My philosophy is simple: to enhance your natural beauty while preserving your unique identity. Every patient deserves personalized care that honors their individual aesthetic goals.',
        readMore: 'Read More'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive Aesthetic Solutions',
        description: 'From facial rejuvenation to body contouring, we offer a full spectrum of surgical and non-surgical procedures tailored to your unique needs.',
        categories: {
          face: 'Face',
          breast: 'Breast',
          body: 'Body',
          nonsurgical: 'Non-Surgical',
          men: 'For Men'
        },
        viewAll: 'View All Services',
        learnMore: 'Learn More'
      },
      gallery: {
        title: 'Before & After Gallery',
        subtitle: 'Real Results, Real Transformations',
        description: 'Browse our gallery of patient transformations. Each image represents a unique journey toward enhanced confidence and natural beauty.',
        categories: {
          all: 'All',
          facelift: 'Facelift',
          rhinoplasty: 'Rhinoplasty',
          blepharoplasty: 'Blepharoplasty',
          liposuction: 'Liposuction',
          breast: 'Breast Surgery'
        }
      },
      testimonials: {
        title: 'Patient Stories',
        subtitle: 'Words From Our Valued Patients',
        description: 'Discover the experiences of those who have entrusted us with their transformation journey.',
        readMore: 'Read Full Story'
      },
      blog: {
        title: 'Insights & Articles',
        subtitle: 'Expert Knowledge & Advice',
        description: 'Stay informed with the latest trends, insights, and expert advice in aesthetic medicine.',
        readMore: 'Read Article',
        categories: {
          all: 'All Articles',
          procedures: 'Procedures',
          recovery: 'Recovery',
          trends: 'Trends',
          wellness: 'Wellness'
        }
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Begin Your Transformation',
        description: 'We invite you to schedule a consultation to discuss your aesthetic goals and discover how we can help you achieve them.',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number',
          message: 'Your Message',
          submit: 'Send Message',
          success: 'Thank you for your message. We will contact you soon.',
          error: 'There was an error sending your message. Please try again.'
        },
        info: {
          address: 'Address',
          phone: 'Phone',
          email: 'Email',
          hours: 'Office Hours'
        },
        virtual: 'Schedule Virtual Consultation'
      },
      portal: {
        title: 'Patient Portal',
        login: 'Login',
        register: 'Register',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        fullName: 'Full Name',
        phone: 'Phone Number',
        submit: 'Submit',
        forgotPassword: 'Forgot Password?',
        noAccount: 'Don\'t have an account?',
        hasAccount: 'Already have an account?',
        dashboard: {
          title: 'My Dashboard',
          appointments: 'My Appointments',
          documents: 'My Documents',
          messages: 'Messages',
          profile: 'My Profile'
        }
      },
      pricing: {
        title: 'Pricing & Promotions',
        subtitle: 'Transparent Pricing, Exceptional Value',
        description: 'We believe in transparent pricing and exceptional value for our patients. Explore our current promotions and package deals.',
        promotions: 'Current Promotions',
        packages: 'Procedure Packages',
        financing: 'Financing Options',
        disclaimer: 'Prices are estimates and may vary based on individual needs. Schedule a consultation for a personalized quote.'
      },
      footer: {
        tagline: 'Elevating Beauty, Enhancing Confidence',
        quickLinks: 'Quick Links',
        services: 'Services',
        contact: 'Contact',
        hours: 'Office Hours',
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      },
      chat: {
        greeting: 'Hello! How can I assist you with your consultation today?',
        placeholder: 'Type your message...',
        send: 'Send',
        online: 'Online',
        offline: 'Offline'
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        about: 'О нас',
        services: 'Услуги',
        gallery: 'Галерея',
        testimonials: 'Отзывы',
        blog: 'Блог',
        contact: 'Контакты',
        portal: 'Личный кабинет',
        pricing: 'Цены'
      },
      hero: {
        title: 'Возвышите Свою Сущность',
        subtitle: 'Аристократическая Красота Переосмыслена',
        description: 'Испытайте искусство преображения с доктором Жасуржоном Бурхановым, где точность встречается с элегантностью.',
        cta: 'Записаться на консультацию',
        ctaSecondary: 'Наши услуги'
      },
      about: {
        title: 'О докторе Жасуржоне Бурханове',
        subtitle: 'Сертифицированный пластический хирург',
        description: 'С более чем 20-летним опытом и обучением в самых престижных учреждениях мира, доктор Бурханов является ведущим авторитетом в эстетической хирургии.',
        credentials: 'Гарвардская медицинская школа | Американский совет пластических хирургов | Лучший хирург Newsweek 2024',
        philosophy: 'Моя философия проста: подчеркнуть вашу естественную красоту, сохраняя вашу уникальную индивидуальность.',
        readMore: 'Подробнее'
      },
      services: {
        title: 'Наши Услуги',
        subtitle: 'Комплексные эстетические решения',
        description: 'От омоложения лица до контурной пластики тела — мы предлагаем полный спектр хирургических и нехирургических процедур.',
        categories: {
          face: 'Лицо',
          breast: 'Грудь',
          body: 'Тело',
          nonsurgical: 'Нехирургические',
          men: 'Для мужчин'
        },
        viewAll: 'Все услуги',
        learnMore: 'Подробнее'
      },
      gallery: {
        title: 'Галерея До и После',
        subtitle: 'Реальные результаты, реальные преображения',
        description: 'Просмотрите нашу галерею преображений пациентов. Каждое изображение представляет уникальный путь к уверенности.',
        categories: {
          all: 'Все',
          facelift: 'Подтяжка лица',
          rhinoplasty: 'Ринопластика',
          blepharoplasty: 'Блефаропластика',
          liposuction: 'Липосакция',
          breast: 'Хирургия груди'
        }
      },
      testimonials: {
        title: 'Истории пациентов',
        subtitle: 'Слова наших ценных пациентов',
        description: 'Узнайте об опыте тех, кто доверил нам свой путь преображения.',
        readMore: 'Читать полностью'
      },
      blog: {
        title: 'Статьи и Инсайты',
        subtitle: 'Экспертные знания и советы',
        description: 'Будьте в курсе последних трендов и экспертных советов в эстетической медицине.',
        readMore: 'Читать статью',
        categories: {
          all: 'Все статьи',
          procedures: 'Процедуры',
          recovery: 'Восстановление',
          trends: 'Тренды',
          wellness: 'Здоровье'
        }
      },
      contact: {
        title: 'Свяжитесь с нами',
        subtitle: 'Начните свое преображение',
        description: 'Приглашаем вас записаться на консультацию для обсуждения ваших эстетических целей.',
        form: {
          name: 'Полное имя',
          email: 'Email',
          phone: 'Телефон',
          message: 'Ваше сообщение',
          submit: 'Отправить',
          success: 'Спасибо за ваше сообщение. Мы свяжемся с вами скоро.',
          error: 'Произошла ошибка. Пожалуйста, попробуйте снова.'
        },
        info: {
          address: 'Адрес',
          phone: 'Телефон',
          email: 'Email',
          hours: 'Часы работы'
        },
        virtual: 'Виртуальная консультация'
      },
      portal: {
        title: 'Личный кабинет',
        login: 'Вход',
        register: 'Регистрация',
        email: 'Email',
        password: 'Пароль',
        confirmPassword: 'Подтвердите пароль',
        fullName: 'Полное имя',
        phone: 'Телефон',
        submit: 'Отправить',
        forgotPassword: 'Забыли пароль?',
        noAccount: 'Нет аккаунта?',
        hasAccount: 'Уже есть аккаунт?',
        dashboard: {
          title: 'Мой кабинет',
          appointments: 'Мои записи',
          documents: 'Мои документы',
          messages: 'Сообщения',
          profile: 'Мой профиль'
        }
      },
      pricing: {
        title: 'Цены и акции',
        subtitle: 'Прозрачное ценообразование',
        description: 'Мы верим в прозрачное ценообразование и исключительную ценность для наших пациентов.',
        promotions: 'Текущие акции',
        packages: 'Пакеты процедур',
        financing: 'Варианты финансирования',
        disclaimer: 'Цены являются ориентировочными и могут варьироваться. Запишитесь на консультацию для персональной оценки.'
      },
      footer: {
        tagline: 'Возвышаем красоту, усиливаем уверенность',
        quickLinks: 'Быстрые ссылки',
        services: 'Услуги',
        contact: 'Контакты',
        hours: 'Часы работы',
        rights: 'Все права защищены.',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования'
      },
      chat: {
        greeting: 'Здравствуйте! Чем могу помочь с вашей консультацией?',
        placeholder: 'Введите сообщение...',
        send: 'Отправить',
        online: 'Онлайн',
        offline: 'Офлайн'
      }
    }
  },
  uz: {
    translation: {
      nav: {
        home: 'Bosh sahifa',
        about: 'Biz haqimizda',
        services: 'Xizmatlar',
        gallery: 'Galereya',
        testimonials: 'Fikrlar',
        blog: 'Blog',
        contact: 'Aloqa',
        portal: 'Shaxsiy kabinet',
        pricing: 'Narxlar'
      },
      hero: {
        title: 'Mohiyatingizni Yuksalting',
        subtitle: 'Qayta Tiklangan Aristokratik Go\'zallik',
        description: 'Dr. Jasurjon Burkhanov bilan o\'zgarish san\'atini his eting, bu erda aniqlik nafislik bilan uchrashadi.',
        cta: 'Konsultatsiya uchun yoziling',
        ctaSecondary: 'Xizmatlarimiz'
      },
      about: {
        title: 'Dr. Jasurjon Burkhanov haqida',
        subtitle: 'Sertifikatlangan plastik jarroh',
        description: '20 yildan ortiq tajriba va dunyoning eng nufuzli muassasalarida o\'qish bilan Dr. Burkhanov estetik jarrohlikda yetakchi hisoblanadi.',
        credentials: 'Garvard tibbiyot fakulteti | Amerikan plastik jarrohlik kengashi | Newsweek 2024 yilning eng yaxshi jarrohi',
        philosophy: 'Mening falsafam oddiy: tabiiy go\'zalligingizni oshirish, shu bilan birga sizning noyob shaxsingizni saqlab qolish.',
        readMore: 'Batafsil'
      },
      services: {
        title: 'Xizmatlarimiz',
        subtitle: 'Keng qamrovli estetik yechimlar',
        description: 'Yuzni yoshartirishdan tortib, tana konturigacha - biz sizning o\'ziga xos ehtiyojlaringizga moslashtirilgan xizmatlarni taklif qilamiz.',
        categories: {
          face: 'Yuz',
          breast: 'Ko\'krak',
          body: 'Tana',
          nonsurgical: 'Jarrohliksiz',
          men: 'Erkaklar uchun'
        },
        viewAll: 'Barcha xizmatlar',
        learnMore: 'Batafsil'
      },
      gallery: {
        title: 'Oldin va Keyin Galereyasi',
        subtitle: 'Haqiqiy natijalar, haqiqiy o\'zgarishlar',
        description: 'Bemorlarning o\'zgarishlar galereyasini ko\'ring. Har bir rasm oshiqcha ishonch va tabiiy go\'zallikka olib boradigan yo\'lni ifodalaydi.',
        categories: {
          all: 'Barchasi',
          facelift: 'Yuzni ko\'tarish',
          rhinoplasty: 'Rinoplastika',
          blepharoplasty: 'Blefaroplastika',
          liposuction: 'Liposaktsiya',
          breast: 'Ko\'krak jarrohligi'
        }
      },
      testimonials: {
        title: 'Bemorlar hikoyalari',
        subtitle: 'Qadrlangan bemorlarimizning so\'zlari',
        description: 'O\'zgarish yo\'liga bizni ishonch bilan topshirganlarning tajribasini bilib oling.',
        readMore: 'To\'liq o\'qish'
      },
      blog: {
        title: 'Maqolalar va Tahlillar',
        subtitle: 'Ekspert bilim va maslahatlar',
        description: 'Estetik tibbiyotdagi so\'nggi tendentsiyalar va ekspert maslahatlaridan xabardor bo\'ling.',
        readMore: 'Maqolani o\'qish',
        categories: {
          all: 'Barcha maqolalar',
          procedures: 'Jarrohliklar',
          recovery: 'Tiklanish',
          trends: 'Tendentsiyalar',
          wellness: 'Salomatlik'
        }
      },
      contact: {
        title: 'Biz bilan bog\'laning',
        subtitle: 'O\'zgarishingizni boshlang',
        description: 'Estetik maqsadlaringizni muhokama qilish va ularga erishishda qanday yordam bera olishimizni bilish uchun konsultatsiyaga yoziling.',
        form: {
          name: 'To\'liq ism',
          email: 'Email',
          phone: 'Telefon',
          message: 'Xabaringiz',
          submit: 'Yuborish',
          success: 'Xabaringiz uchun rahmat. Tez orada siz bilan bog\'lanamiz.',
          error: 'Xabar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.'
        },
        info: {
          address: 'Manzil',
          phone: 'Telefon',
          email: 'Email',
          hours: 'Ish soatlari'
        },
        virtual: 'Virtual konsultatsiya'
      },
      portal: {
        title: 'Shaxsiy kabinet',
        login: 'Kirish',
        register: 'Ro\'yxatdan o\'tish',
        email: 'Email',
        password: 'Parol',
        confirmPassword: 'Parolni tasdiqlang',
        fullName: 'To\'liq ism',
        phone: 'Telefon',
        submit: 'Yuborish',
        forgotPassword: 'Parolni unutdingizmi?',
        noAccount: 'Hisobingiz yo\'qmi?',
        hasAccount: 'Hisobingiz bormi?',
        dashboard: {
          title: 'Mening kabinetim',
          appointments: 'Mening yozuvlarim',
          documents: 'Mening hujjatlarim',
          messages: 'Xabarlar',
          profile: 'Mening profilim'
        }
      },
      pricing: {
        title: 'Narxlar va aksiyalar',
        subtitle: 'Shaffof narxlar',
        description: 'Biz bemorlarimiz uchun shaffof narxlar va ajoyib qiymatga ishonamiz.',
        promotions: 'Joriy aksiyalar',
        packages: 'Jarrohlik paketlari',
        financing: 'Moliyalashtirish variantlari',
        disclaimer: 'Narxlar taxminiy va o\'zgarishi mumkin. Shaxsiy baholash uchun konsultatsiyaga yoziling.'
      },
      footer: {
        tagline: 'Go\'zallikni yuksaltirish, ishonchni oshirish',
        quickLinks: 'Tez havolalar',
        services: 'Xizmatlar',
        contact: 'Aloqa',
        hours: 'Ish soatlari',
        rights: 'Barcha huquqlar himoyalangan.',
        privacy: 'Maxfiylik siyosati',
        terms: 'Foydalanish shartlari'
      },
      chat: {
        greeting: 'Salom! Konsultatsiyangiz bilan qanday yordam bera olaman?',
        placeholder: 'Xabar yozing...',
        send: 'Yuborish',
        online: 'Onlayn',
        offline: 'Oflayn'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
