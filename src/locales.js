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
      title: "Backend & Distributed Systems Engineer",
      description: "Computer Engineering candidate (2026) specializing in highly scalable microservices, advanced game development, and modern DevOps pipelines. Passionate about clean code and the pragmatic programmer philosophy.",
      contactBtn: "Contact",
      cvBtn: "CV Download"
    },
    about: {
      title: "About Me",
      subtitle: "Bridging pragmatic engineering with complex system architecture.",
      whoAmI: "Executive Overview & Philosophy",
      p1: "As a highly driven Computer Engineering candidate at Isparta University of Applied Sciences (2026), I specialize in Backend Development, Distributed Systems, and Microservices Architecture. Embodying a 'Pragmatic Programmer' mindset, I focus on clean code, test-driven development (TDD), and robust CI/CD pipelines to build scalable, mission-critical solutions.",
      p2: "My corporate experience at i2i Systems involved engineering Evrencell—an ultra-low-latency, distributed Online Charging System. Utilizing Akka's Actor model, VoltDB, and Kafka, I helped architect high-throughput telecom infrastructure and executed zero-downtime live migrations on production servers. Additionally, I am currently developing Tavia, a microservices-based reservation system orchestrating Spring Boot, PostgreSQL, Redis, and Docker.",
      p3: "Beyond backend systems, my expertise extends to AI and simulation technologies. A prime example is 'Starling', my thesis project featuring an autonomous drone swarm in Webots R2025a. By integrating YOLOv8 computer vision and dynamic K-Means partitioning, the drones perform real-time forest fire detection. This multidisciplinary approach allows me to adapt and deliver robust engineering solutions across diverse technical domains."
    },
    experience: {
      title: "Experience",
      subtitle: "Professional roles and corporate milestones.",
      roles: [
        {
          id: "tavia",
          title: "Remote Backend Developer",
          company: "Tavia",
          date: "2025 - Present",
          description: "Architecting a highly scalable cafe and restaurant reservation backend.",
          points: [
            "Service Orchestration: Built on Spring Boot, the application is broken down into loosely coupled microservices (User Management, Reservation Management, Notification Service). Each service is containerized using Docker for environment consistency.",
            "Data Layer Strategies: Strategically utilized PostgreSQL for persistent relational data and Redis as an ephemeral caching layer for high-frequency read operations (e.g., checking table availability), drastically minimizing response times.",
            "Event-Driven Architecture: Integrated Apache Kafka to manage asynchronous communication. When a reservation is confirmed, an event is published to a Kafka topic and consumed by the Notification Service for SMS/Email alerts, preventing bottlenecks and enhancing system resilience."
          ]
        },
        {
          id: "i2i",
          title: "Software Engineering Intern",
          company: "i2i Systems",
          date: "2024",
          description: "Developed and maintained Evrencell, a mission-critical, highly distributed Online Charging System (OCS) for the telecommunications sector.",
          points: [
            "Architecture & Technologies: Processed millions of transactions in real-time with ultra-low latency using Akka (Actor model for concurrent, fault-tolerant processing) and VoltDB (in-memory relational database optimized for high velocity).",
            "Message Brokering & Caching: Decoupled microservices via Apache Kafka as the central event-streaming backbone. Integrated Hazelcast for distributed in-memory caching to reduce database load and accelerate session data retrieval.",
            "Corporate Agility: Participated in a live migration process on German production servers, monitoring real-time traffic and ensuring zero-downtime deployment strategies. Operated within strict Agile/Scrum and Jira tracking."
          ]
        }
      ]
    },
    projects: {
      title: "Projects",
      subtitle: "Technical ventures spanning game dev, full-stack, and machine learning.",
      items: [
        {
          name: "Starling",
          type: "AI & Simulation (Python, YOLOv8, Webots)",
          desc: "Drone-Based Autonomous Forest Fire Detection",
          details: "A Webots R2025a simulation featuring a fleet of DJI drones that autonomously patrol forested terrain to detect wildfires using YOLOv8. Implements dynamic K-Means partitioning, real-time Ground Control Station (GCS) telemetry, and Additive Disturbance Flight Models for robust swarm navigation.",
          url: "https://github.com/tunaBasar/Starling"
        },
        {
          name: "BloodDonationApp",
          type: "Mobile & Backend",
          desc: "A comprehensive, layered architecture platform for blood donation using C# and .NET Core.",
          details: "Built with .NET MAUI for cross-platform mobile support. Structured an MSSQL database using Entity Framework Core (Code-First) and established robust API documentation using Swagger (OpenAPI) to streamline front-end integration.",
          url: "https://github.com/tunaBasar/BloodDonationApp"
        },
        {
          name: "MigrAI",
          type: "Machine Learning",
          desc: "Predictive AI application for mapping apex predator migration paths.",
          details: "Built in Python utilizing machine learning algorithms and geographical data to map and predict the movement patterns of various apex predators.",
          url: "https://github.com/tunaBasar/MigrAI"
        },
        {
          name: "MedicoPilot",
          type: "Hackathon Prototype",
          desc: "Rapid-prototyped healthcare solution for Solvex AI 2026.",
          details: "Delivering functioning healthcare software under intense time constraints during a competitive hackathon setting.",
          url: "https://github.com/tunaBasar/MedicoPilot"
        }
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "Technical competencies across various domains.",
      categories: [
        {
          name: "Backend & Microservices",
          items: ["Java", "Spring Boot", "C#", ".NET Core", "Microservices Architecture"]
        },
        {
          name: "Databases & Caching",
          items: ["PostgreSQL", "MSSQL", "Oracle", "MySQL", "Redis", "MongoDB"]
        },
        {
          name: "Message Brokers & Grids",
          items: ["Apache Kafka", "Hazelcast", "Akka", "VoltDB"]
        },
        {
          name: "Game Development",
          items: ["C++", "Unity", "OOP Design Patterns"]
        },
        {
          name: "DevOps & Infrastructure",
          items: ["Docker", "Linux (Ubuntu)", "Git", "Jira", "CI/CD (Netlify)", "Shell Scripting"]
        }
      ],
      devopsDesc: "DevOps Capabilities: Proficient in writing optimized Dockerfiles with multi-stage builds and utilizing docker-compose for multi-container orchestration. Highly capable in Linux (Ubuntu) systems administration, SSH, and setting up automated CI/CD deployment pipelines."
    },
    contact: {
      title: "Contact Me",
      subtitle: "Let's collaborate on building highly scalable and robust software.",
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
      success: "Message sent successfully! I will get back to you shortly.",
      error: "An error occurred. Please try again or email me directly.",
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
      greeting: "Merhaba, Ben",
      name: "Tuna",
      title: "Backend & Distributed Systems Mühendisi",
      description: "Yüksek ölçeklenebilir mikroservisler, ileri düzey oyun geliştirme ve modern DevOps süreçlerinde uzmanlaşan Bilgisayar Mühendisliği adayı (2026). Temiz kod (clean code) ve 'pragmatik programcı' felsefesine tutkuyla bağlıyım.",
      contactBtn: "İletişim",
      cvBtn: "CV İndir"
    },
    about: {
      title: "Hakkımda",
      subtitle: "Pragmatik mühendislik ile karmaşık sistem mimarilerini köprülemek.",
      whoAmI: "Yönetici Özeti ve Felsefe",
      p1: "Isparta Uygulamalı Bilimler Üniversitesi'nde (2026) Bilgisayar Mühendisliği öğrencisi olarak, Backend Geliştirme, Dağıtık Sistemler ve Mikroservis Mimarisi alanlarında uzmanlaşıyorum. 'Pragmatik Programcı' felsefesini benimseyerek, ölçeklenebilir ve kritik çözümler üretmek için temiz koda, test güdümlü geliştirmeye (TDD) ve sağlam CI/CD süreçlerine odaklanıyorum.",
      p2: "i2i Systems'daki kurumsal deneyimim, Evrencell adlı ultra düşük gecikmeli, dağıtık Online Charging System projesini kapsamaktadır. Akka'nın Actor modeli, VoltDB ve Kafka kullanarak yüksek verimli telekom altyapısının mimarisine katkıda bulundum ve canlı sunucularda sıfır kesintili (zero-downtime) geçişler gerçekleştirdim. Ayrıca, şu anda Spring Boot, PostgreSQL, Redis ve Docker orkestrasyonu ile mikroservis tabanlı rezervasyon sistemi Tavia'yı geliştiriyorum.",
      p3: "Backend sistemlerinin ötesinde, uzmanlığım yapay zeka ve simülasyon teknolojilerini de kapsamaktadır. Bunun en iyi örneği, Webots R2025a'da otonom bir drone sürüsünü içeren 'Starling' adlı bitirme projemdir. YOLOv8 bilgisayarlı görü ve dinamik K-Means algoritmalarını entegre ederek, droneların gerçek zamanlı orman yangını tespiti yapmasını sağladım. Bu çok disiplinli yaklaşım, çeşitli teknik alanlarda sağlam mühendislik çözümleri sunmamı sağlıyor."
    },
    experience: {
      title: "Deneyim",
      subtitle: "Profesyonel roller ve kurumsal dönüm noktaları.",
      roles: [
        {
          id: "tavia",
          title: "Uzaktan Backend Geliştirici",
          company: "Tavia",
          date: "2025 - Günümüz",
          description: "Yüksek ölçeklenebilir bir kafe ve restoran rezervasyon backend mimarisi tasarımı.",
          points: [
            "Servis Orkestrasyonu: Spring Boot üzerinde inşa edilen uygulama, birbirinden bağımsız çalışan (loosely coupled) mikroservislere (Kullanıcı Yönetimi, Rezervasyon Yönetimi, Bildirim Servisi) bölünmüştür. Çevre tutarlılığı (environment consistency) için her servis Docker kullanılarak konteynerleştirilmiştir.",
            "Veri Katmanı Stratejileri: Kalıcı ilişkisel veriler için PostgreSQL stratejik olarak seçilirken, yüksek frekanslı okuma işlemlerini (örn. masa uygunluk kontrolü) yönetmek ve yanıt sürelerini büyük ölçüde en aza indirmek için geçici bir önbellekleme katmanı olarak Redis uygulandı.",
            "Olay Güdümlü (Event-Driven) Mimari: Servisler arası asenkron iletişimi yönetmek için ekosisteme Apache Kafka entegre edildi. Bir rezervasyon onaylandığında, Kafka topic'ine bir olay (event) yayınlanır ve bu olay SMS/E-posta onaylarını tetiklemek üzere Bildirim Servisi tarafından tüketilir. Bu ayrıştırılmış yaklaşım darboğazları (bottlenecks) önler ve sistemin genel dayanıklılığını artırır."
          ]
        },
        {
          id: "i2i",
          title: "Yazılım Mühendisliği Stajyeri",
          company: "i2i Systems",
          date: "2024",
          description: "Telekomünikasyon sektörü için görev kritik, yüksek oranda dağıtık bir Online Charging System (OCS) olan Evrencell'in geliştirilmesi ve bakımı.",
          points: [
            "Mimari ve Teknolojiler: Proje, milyonlarca telekomünikasyon işlemini gerçek zamanlı işlemek için ultra düşük gecikmeli, yüksek verimli bir mimari gerektirdi. Geleneksel iş parçacığı (thread) yükü olmadan eşzamanlı, hataya dayanıklı işlemler için Akka (Actor modeli) ve yüksek hızlı işlemsel süreçler için optimize edilmiş bellek içi ilişkisel veritabanı olan VoltDB ile kapsamlı çalışmalar yaptım.",
            "Mesaj Aracısı ve Önbellekleme: Mikroservisleri ayırmak ve asenkron veri akışını sağlamak için Apache Kafka merkezi olay akışı (event-streaming) omurgası olarak yoğun bir şekilde kullanıldı. Veritabanı yükünü önemli ölçüde azaltmak ve kullanıcı oturum durumları için veri alımını hızlandırmak amacıyla dağıtık bellek içi önbellekleme (in-memory caching) için Hazelcast entegre edildi.",
            "Kurumsal Çeviklik: Almanya'daki üretim sunucularında canlı geçiş (live migration) sürecine aktif olarak katıldım, gerçek zamanlı trafiği izledim, sıfır kesintili (zero-downtime) dağıtım stratejileri sağladım. Sıkı bir Agile/Scrum çerçevesinde ve Jira takibi ile çalıştım."
          ]
        }
      ]
    },
    projects: {
      title: "Projeler",
      subtitle: "Oyun geliştirme, full-stack ve makine öğrenimi alanındaki teknik girişimler.",
      items: [
        {
          name: "Starling",
          type: "Yapay Zeka ve Simülasyon (Python, YOLOv8, Webots)",
          desc: "Drone Tabanlı Otonom Orman Yangını Tespiti",
          details: "YOLOv8 kullanarak ormanlık arazilerde yangın tespiti yapan otonom DJI drone sürüsü Webots R2025a simülasyonu. Dinamik K-Means bölümleme, gerçek zamanlı Yer Kontrol İstasyonu (GCS) telemetrisi ve sağlam sürü navigasyonu için Eklemeli Bozucu Uçuş Modelleri (Additive Disturbance Flight Models) uygular.",
          url: "https://github.com/tunaBasar/Starling"
        },
        {
          name: "BloodDonationApp",
          type: "Mobil & Backend",
          desc: "C# ve .NET Core kullanılarak kan bağışı için tasarlanmış kapsamlı, katmanlı bir mimari platformu.",
          details: "Çapraz platform (cross-platform) mobil destek için .NET MAUI ile inşa edildi. Entity Framework Core (Code-First) kullanılarak bir MSSQL veritabanı yapılandırıldı ve front-end entegrasyonunu kolaylaştırmak için Swagger (OpenAPI) kullanılarak güçlü bir API dokümantasyonu oluşturuldu.",
          url: "https://github.com/tunaBasar/BloodDonationApp"
        },
        {
          name: "MigrAI",
          type: "Makine Öğrenimi",
          desc: "Tepe yırtıcı göç yollarını haritalamak için tahmine dayalı yapay zeka uygulaması.",
          details: "Çeşitli tepe yırtıcıların hareket modellerini haritalamak ve tahmin etmek için makine öğrenimi algoritmaları ve coğrafi veriler kullanılarak Python'da oluşturuldu.",
          url: "https://github.com/tunaBasar/MigrAI"
        },
        {
          name: "MedicoPilot",
          type: "Hackathon Prototipi",
          desc: "Solvex AI 2026 için hızlı prototiplenmiş sağlık çözümü.",
          details: "Rekabetçi bir hackathon ortamında yoğun zaman kısıtlamaları altında çalışan bir sağlık yazılımı projesi.",
          url: "https://github.com/tunaBasar/MedicoPilot"
        }
      ]
    },
    skills: {
      title: "Yetenekler",
      subtitle: "Çeşitli alanlardaki teknik yetkinlikler.",
      categories: [
        {
          name: "Backend & Mikroservisler",
          items: ["Java", "Spring Boot", "C#", ".NET Core", "Microservices Architecture"]
        },
        {
          name: "Veritabanları & Önbellekleme",
          items: ["PostgreSQL", "MSSQL", "Oracle", "MySQL", "Redis", "MongoDB"]
        },
        {
          name: "Mesaj Aracıları & Gridler",
          items: ["Apache Kafka", "Hazelcast", "Akka", "VoltDB"]
        },
        {
          name: "Oyun Geliştirme",
          items: ["C++", "Unity", "OOP Tasarım Kalıpları"]
        },
        {
          name: "DevOps & Altyapı",
          items: ["Docker", "Linux (Ubuntu)", "Git", "Jira", "CI/CD (Netlify)", "Shell Scripting"]
        }
      ],
      devopsDesc: "DevOps Yetenekleri: İmaj boyutlarını azaltmak için çok aşamalı (multi-stage) yapılarla optimize edilmiş Dockerfile'lar yazma ve çoklu konteyner orkestrasyonu için docker-compose kullanma konusunda yetkin. Linux (Ubuntu) sistem yönetimi, SSH ve otomatik CI/CD dağıtım boru hatları (pipelines) kurma konularında son derece yetenekli."
    },
    contact: {
      title: "İletişim",
      subtitle: "Yüksek ölçeklenebilir ve sağlam yazılımlar inşa etmek için işbirliği yapalım.",
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
      success: "Mesajınız başarıyla gönderildi! Kısa süre içinde size dönüş yapacağım.",
      error: "Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",
      emptyFields: "Lütfen tüm alanları doldurun."
    },
    footer: "© 2026 Hilmi Tunahan Başar. Tüm hakları saklıdır."
  }
};
