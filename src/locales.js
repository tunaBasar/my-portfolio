export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Tuna",
      title: "Backend Developer",
      description: "Final-year Computer Engineering student at Isparta University of Applied Sciences, graduating in February 2027. I mostly write backend code in Java and Spring Boot, and I'm currently an engineering intern at ErgoSafePartner.",
      contactBtn: "Contact",
      cvBtn: "CV Download"
    },
    about: {
      title: "About Me",
      subtitle: "A short introduction.",
      whoAmI: "Who I am",
      p1: "I'm a final-year Computer Engineering student at Isparta University of Applied Sciences and I'll graduate in February 2027. Most of my work is on the backend: Java and Spring Boot, plus Go and C#/.NET when a project needs them. I live in İzmir and I'm open to remote work.",
      p2: "Right now I'm an engineering intern at ErgoSafePartner, where I'm the main developer of the web platform for ErgoSafe, an industrial forklift safety system. Before that I spent a summer at i2i Systems, building the customer self-service web app for Evrencell, a telecom online charging system made by an intern team.",
      p3: "Outside of internships I'm building Tavia, a café SaaS platform with a Spring Boot microservice backend, and Starling, my graduation project: a drone swarm in Webots that searches for wildfires. With two teammates I also took third place at SolveX AI Hackathon 2026 with MedicoPilot, an AI-assisted radiology assistant."
    },
    experience: {
      title: "Experience",
      subtitle: "Internships so far.",
      roles: [
        {
          id: "ergosafe",
          title: "Engineering Intern",
          company: "ErgoSafePartner",
          date: "Sep 2026 – Dec 2026",
          description: "Main developer of the web platform for ErgoSafe, an industrial forklift safety system.",
          points: [
            "Built the Go (Fiber) backend and Next.js frontend that turn data from a third-party device server into live video, GPS/RTLS tracking, DMS/ADAS alerts and more than 12 report pages.",
            "Found and reported a critical session-management vulnerability, fixed unauthorized data-access issues, and added Redis-based rate limiting, IP restrictions, secret rotation and multi-factor authentication.",
            "Writing a new Java 21 / Spring Boot 4 backend to remove a dependency on third-party software. Also built a one-command installer for customer servers and a GitHub Actions CI/CD pipeline.",
            "Prepared training data in CVAT for a YOLOX forklift/person detection model (re-annotated about 500 images) and tested local LLMs on the company GPU server."
          ]
        },
        {
          id: "i2i",
          title: "Software Engineering Intern",
          company: "i2i Systems",
          date: "Jul 2024 – Aug 2024",
          description: "Summer internship on Evrencell, a telecom online charging system built by a 17-person intern team.",
          points: [
            "Built the customer self-service web app and connected the login, sign-up, password reset and balance screens to the team's REST API (Spring Boot, JavaScript).",
            "Prepared the project's SRS document together with a teammate.",
            "Did hands-on assignments on Kafka, VoltDB, Hazelcast, Apache Ignite, Akka, Oracle, Log4j and Swagger."
          ]
        }
      ]
    },
    projects: {
      title: "Projects",
      subtitle: "Things I've built outside of internships.",
      items: [
        {
          name: "MedicoPilot",
          type: "Hackathon · 3rd place",
          desc: "AI-assisted radiology assistant, SolveX AI Hackathon 2026 (team of 3).",
          details: "A two-agent maker-checker setup with mandatory physician approval: Gemma 4 drafts the MRI report and Llama 3.3 70B reviews it for safety. Spring Boot, a Python AI worker, Kafka, Redis, MongoDB and React, run with Docker Compose.",
          url: "https://github.com/tunaBasar/MedicoPilot"
        },
        {
          name: "Tavia",
          type: "Microservices · Java / Spring",
          desc: "Multi-tenant SaaS platform for cafés.",
          details: "12 services built with Java 21, Spring Boot 4 and Spring Cloud (gateway, discovery, config). Services talk over Kafka and use PostgreSQL and Redis. It also has a Gemini-based customer assistant, IoT machine control, a Next.js dashboard and an Expo mobile app."
        },
        {
          name: "Starling",
          type: "Graduation project · Python, Webots",
          desc: "Autonomous wildfire-detection drone swarm.",
          details: "A 6-drone fleet in Webots. Patrol zones are split with dynamic K-Means, fire and smoke are detected with YOLOv8 in a separate process, and a backup drone takes off automatically if one crashes.",
          url: "https://github.com/tunaBasar/Starling"
        },
        {
          name: "BloodDonationApp",
          type: "Mobile & backend · C# / .NET",
          desc: "Blood donation app, built solo.",
          details: "ASP.NET Core API with an MSSQL database (Entity Framework Core, code-first), a .NET MAUI mobile app, and Swagger documentation for the API.",
          url: "https://github.com/tunaBasar/BloodDonationApp"
        },
        {
          name: "MigrAI",
          type: "Machine learning · Python",
          desc: "Predicting migration routes of apex predators.",
          details: "A CNN + LSTM model trained on geographic data to predict how apex predators move.",
          url: "https://github.com/tunaBasar/MigrAI"
        }
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "What I work with.",
      categories: [
        {
          name: "Languages",
          items: ["Java", "Go", "C#", "Python", "TypeScript / JavaScript", "SQL"]
        },
        {
          name: "Backend & Web",
          items: ["Spring Boot", "Spring Cloud", "Go / Fiber", "ASP.NET Core", "FastAPI", "Next.js / React", "REST", "JUnit", "Testcontainers"]
        },
        {
          name: "Data & Messaging",
          items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Oracle", "Apache Kafka", "Flyway"]
        },
        {
          name: "AI",
          items: ["LangChain", "LLM APIs (Gemini, Claude)", "Local LLMs", "YOLOv8 / YOLOX", "CVAT"]
        },
        {
          name: "Tools",
          items: ["Docker", "GitHub Actions", "Git", "Linux"]
        }
      ],
      extraTitle: "Certificate & Languages",
      extraDesc: "AI Professional Development Program, Software Persona (40 hours, CPD accredited, Oct 2026). Turkish (native), English (B2)."
    },
    contact: {
      title: "Contact Me",
      subtitle: "Feel free to reach out about backend roles or projects.",
      info: "Contact Information",
      sendMessage: "Send Message",
      name: "Name",
      namePlaceholder: "Enter your name",
      email: "Email",
      emailPlaceholder: "Enter your email",
      message: "Your message",
      messagePlaceholder: "Type your message here",
      sendBtn: "Send",
      sending: "Sending...",
      success: "Message sent. I'll get back to you soon.",
      error: "Something went wrong. Please try again or email me directly.",
      emptyFields: "Please fill out all fields."
    },
    footer: "© 2026 Hilmi Tunahan Başar. All rights reserved."
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      experience: 'Deneyim',
      projects: 'Projeler',
      skills: 'Yetenekler',
      contact: 'İletişim'
    },
    hero: {
      greeting: "Merhaba, ben",
      name: "Tuna",
      title: "Backend Geliştirici",
      description: "Isparta Uygulamalı Bilimler Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim, Şubat 2027'de mezun oluyorum. Çoğunlukla Java ve Spring Boot ile backend yazıyorum. Şu an ErgoSafePartner'da stajyer mühendisim.",
      contactBtn: "İletişim",
      cvBtn: "CV İndir"
    },
    about: {
      title: "Hakkımda",
      subtitle: "Kısaca ben.",
      whoAmI: "Kimim",
      p1: "Isparta Uygulamalı Bilimler Üniversitesi Bilgisayar Mühendisliği son sınıftayım, Şubat 2027'de mezun oluyorum. Daha çok backend tarafında çalışıyorum: Java ve Spring Boot, gerektiğinde Go ve C#/.NET. İzmir'de yaşıyorum, uzaktan çalışmaya da açığım.",
      p2: "Şu an ErgoSafePartner'da stajyer mühendisim. Endüstriyel forklift güvenlik sistemi ErgoSafe'in web platformunu ağırlıklı olarak ben geliştiriyorum. Daha önce bir yaz i2i Systems'ta staj yaptım; stajyer ekibinin geliştirdiği telekom ücretlendirme sistemi Evrencell'in müşteri self-servis web uygulamasını yazdım.",
      p3: "Staj dışında Spring Boot mikroservis altyapılı bir kafe SaaS platformu olan Tavia'yı ve bitirme projem Starling'i geliştiriyorum. Starling, Webots'ta orman yangını arayan bir drone sürüsü. İki arkadaşımla birlikte yapay zeka destekli radyoloji asistanı MedicoPilot ile SolveX AI Hackathon 2026'da üçüncü olduk."
    },
    experience: {
      title: "Deneyim",
      subtitle: "Şimdiye kadarki stajlarım.",
      roles: [
        {
          id: "ergosafe",
          title: "Stajyer Mühendis",
          company: "ErgoSafePartner",
          date: "Eylül 2026 – Aralık 2026",
          description: "Endüstriyel forklift güvenlik sistemi ErgoSafe'in web platformunun ana geliştiricisiyim.",
          points: [
            "Üçüncü parti cihaz sunucusundan gelen verileri canlı video, GPS/RTLS takibi, DMS/ADAS alarmları ve 12'den fazla rapor sayfasına dönüştüren Go (Fiber) backend'i ve Next.js arayüzünü yazdım.",
            "Oturum yönetiminde kritik bir güvenlik açığı bulup raporladım, yetkisiz veri erişimi sorunlarını düzelttim; Redis ile istek sınırlama, IP kısıtlaması, secret rotasyonu ve iki aşamalı doğrulama ekledim.",
            "Üçüncü parti yazılım bağımlılığını kaldırmak için yeni bir Java 21 / Spring Boot 4 backend yazıyorum. Müşteri sunucuları için tek komutla çalışan bir kurulum betiği ve GitHub Actions ile CI/CD hattı kurdum.",
            "YOLOX forklift/insan tespit modeli için CVAT'ta veri hazırladım (yaklaşık 500 görseli yeniden etiketledim), şirketin GPU sunucusunda yerel LLM'leri test ettim."
          ]
        },
        {
          id: "i2i",
          title: "Yazılım Mühendisliği Stajyeri",
          company: "i2i Systems",
          date: "Temmuz 2024 – Ağustos 2024",
          description: "17 kişilik stajyer ekibinin geliştirdiği telekom ücretlendirme sistemi Evrencell üzerinde yaz stajı.",
          points: [
            "Müşteri self-servis web uygulamasını yazdım; giriş, kayıt, şifre sıfırlama ve bakiye ekranlarını ekibin REST API'sine bağladım (Spring Boot, JavaScript).",
            "Projenin SRS dokümanını bir arkadaşımla birlikte hazırladık.",
            "Kafka, VoltDB, Hazelcast, Apache Ignite, Akka, Oracle, Log4j ve Swagger üzerine uygulamalı ödevler yaptım."
          ]
        }
      ]
    },
    projects: {
      title: "Projeler",
      subtitle: "Staj dışında geliştirdiklerim.",
      items: [
        {
          name: "MedicoPilot",
          type: "Hackathon · Üçüncülük",
          desc: "Yapay zeka destekli radyoloji asistanı, SolveX AI Hackathon 2026 (3 kişilik ekip).",
          details: "Hekim onayı zorunlu, iki ajanlı bir hazırla-kontrol et kurgusu: Gemma 4 MR raporunun taslağını yazıyor, Llama 3.3 70B güvenlik açısından kontrol ediyor. Spring Boot, Python AI worker, Kafka, Redis, MongoDB ve React; Docker Compose ile çalışıyor.",
          url: "https://github.com/tunaBasar/MedicoPilot"
        },
        {
          name: "Tavia",
          type: "Mikroservis · Java / Spring",
          desc: "Kafeler için çok kiracılı SaaS platformu.",
          details: "Java 21, Spring Boot 4 ve Spring Cloud (gateway, discovery, config) ile 12 servis. Servisler Kafka üzerinden haberleşiyor, veri için PostgreSQL ve Redis kullanılıyor. Gemini tabanlı müşteri asistanı, IoT ile makine kontrolü, Next.js yönetim paneli ve Expo mobil uygulaması da var."
        },
        {
          name: "Starling",
          type: "Bitirme projesi · Python, Webots",
          desc: "Orman yangını tespit eden otonom drone sürüsü.",
          details: "Webots'ta 6 dronluk bir filo. Devriye bölgeleri dinamik K-Means ile bölünüyor, ateş ve duman ayrı bir süreçte YOLOv8 ile tespit ediliyor, bir drone düşerse yedek drone otomatik kalkıyor.",
          url: "https://github.com/tunaBasar/Starling"
        },
        {
          name: "BloodDonationApp",
          type: "Mobil & backend · C# / .NET",
          desc: "Kan bağışı uygulaması, tek başıma geliştirdim.",
          details: "MSSQL veritabanlı ASP.NET Core API (Entity Framework Core, code-first), .NET MAUI mobil uygulama ve API için Swagger dokümantasyonu.",
          url: "https://github.com/tunaBasar/BloodDonationApp"
        },
        {
          name: "MigrAI",
          type: "Makine öğrenimi · Python",
          desc: "Tepe yırtıcıların göç yollarını tahmin etme.",
          details: "Coğrafi veriyle eğitilen bir CNN + LSTM modeliyle tepe yırtıcıların hareketlerini tahmin ediyor.",
          url: "https://github.com/tunaBasar/MigrAI"
        }
      ]
    },
    skills: {
      title: "Yetenekler",
      subtitle: "Çalıştığım teknolojiler.",
      categories: [
        {
          name: "Diller",
          items: ["Java", "Go", "C#", "Python", "TypeScript / JavaScript", "SQL"]
        },
        {
          name: "Backend & Web",
          items: ["Spring Boot", "Spring Cloud", "Go / Fiber", "ASP.NET Core", "FastAPI", "Next.js / React", "REST", "JUnit", "Testcontainers"]
        },
        {
          name: "Veri & Mesajlaşma",
          items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Oracle", "Apache Kafka", "Flyway"]
        },
        {
          name: "Yapay Zeka",
          items: ["LangChain", "LLM API'leri (Gemini, Claude)", "Yerel LLM'ler", "YOLOv8 / YOLOX", "CVAT"]
        },
        {
          name: "Araçlar",
          items: ["Docker", "GitHub Actions", "Git", "Linux"]
        }
      ],
      extraTitle: "Sertifika & Diller",
      extraDesc: "Yapay Zeka Mesleki Gelişim Programı, Software Persona (40 saat, CPD akrediteli, Ekim 2026). Türkçe (ana dil), İngilizce (B2)."
    },
    contact: {
      title: "İletişim",
      subtitle: "Backend pozisyonları ya da projeler için bana yazabilirsiniz.",
      info: "İletişim Bilgileri",
      sendMessage: "Mesaj Gönder",
      name: "İsim",
      namePlaceholder: "İsminizi girin",
      email: "E-posta",
      emailPlaceholder: "E-posta adresinizi girin",
      message: "Mesajınız",
      messagePlaceholder: "Mesajınızı buraya yazın",
      sendBtn: "Gönder",
      sending: "Gönderiliyor...",
      success: "Mesajınız gönderildi, en kısa sürede dönüş yapacağım.",
      error: "Bir hata oluştu. Lütfen tekrar deneyin ya da doğrudan e-posta gönderin.",
      emptyFields: "Lütfen tüm alanları doldurun."
    },
    footer: "© 2026 Hilmi Tunahan Başar. Tüm hakları saklıdır."
  }
};
