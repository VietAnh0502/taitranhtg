export const siteConfig = {
  name: "Tài Trần",
  brand: "TAI TRAN HTG",
  title: "Nhà sáng lập của HTG kiêm Giám đốc điều hành",
  tagline: "Người đồng hành cùng nhà đầu tư trên hành trình làm chủ tài sản.",
  phone: {
    display: "0348 634 111",
    href: "tel:0348634111",
  },
  social: {
    zalo: "https://zalo.me/0393835398",
    facebook: "https://www.facebook.com/taitranteam",
    youtube: "https://www.youtube.com/@taitranteam",
    tiktok: "https://www.tiktok.com/@taitranchungkhoan",
  },

  assistants: [
    { name: "Trợ lí Hải Anh", zalo: "https://zalo.me/0393835398", phone: "0393835398" },
    { name: "Trợ lí Minh Hải", zalo: "https://zalo.me/0971025264", phone: "0971025264" },
  ],
  htgWebsite: "https://taitran-broker.vercel.app",
  metadata: {
    title: "Tài Trần HTG – Đồng hành cùng nhà đầu tư làm chủ tài sản",
    description:
      "Website chính thức của Tài Trần, nhà sáng lập HTG Investments, chia sẻ sứ mệnh, góc nhìn và hành trình đồng hành cùng nhà đầu tư Việt.",
  },
  images: {
    hero: "/img/tai-tran-hero.jpg",
    story: "/img/tai-tran-story.jpg",
    portrait: "/img/tai-tran-portrait.jpg",
    working: "/img/tai-tran-reading.jpg",
    reading: "/img/tai-tran-behind-the-market.jpg",
    profile: "/img/tai-tran-profile.jpg",
  },
  achievements: [
    {
      year: "2024",
      title: "Nhân viên xuất sắc năm 2024",
      description: "Ghi nhận thành tích xuất sắc tại VPS trong vai trò Trưởng phòng Phát triển kinh doanh — Khối Tư vấn đầu tư.",
      image: "/img/thanh-tuu/nguyen-duc-tai-vps-outstanding-employee-2024-certificate.jpg",
      alt: "Bằng khen Nhân viên xuất sắc năm 2024 của Nguyễn Đức Tài tại VPS",
      featured: true,
    },
    {
      year: "2020",
      title: "Nhà giao dịch xuất sắc của năm",
      description: "Dấu ấn nghề nghiệp ghi nhận năng lực và kết quả trong hoạt động đầu tư.",
      image: "/img/thanh-tuu/nguyen-duc-tai-professional-awards-collection.jpg",
      alt: "Bộ sưu tập kỷ niệm chương và giải thưởng nghề nghiệp của Nguyễn Đức Tài",
    },
    {
      year: "2022",
      title: "Cán bộ quản lý xuất sắc",
      description: "Danh hiệu ghi nhận năng lực quản lý và kết quả kinh doanh nổi bật trong năm 2022.",
      image: "/img/thanh-tuu/nguyen-duc-tai-ssi-recognition-plaque.jpg",
      alt: "Bảng vinh danh Cán bộ quản lý xuất sắc năm 2022 của Nguyễn Đức Tài",
    },
    {
      year: "2025",
      title: "Nhà tư vấn của năm",
      description: "Thành tích nổi bật trong vai trò tư vấn đầu tư, được Khối Tư vấn đầu tư VPS ghi nhận.",
      image: "/img/thanh-tuu/nguyen-duc-tai-vps-recognition-plaque.jpg",
      alt: "Bảng vinh danh Nhà tư vấn của năm 2025 của Nguyễn Đức Tài tại VPS",
    },
    {
      year: "2026",
      title: "Hội thảo đầu tư HTG",
      description: "Dấu ấn trên hành trình xây dựng một cộng đồng nhà đầu tư có kiến thức, nguyên tắc và tinh thần đồng hành bền vững.",
      image: "/img/thanh-tuu/cong-dong-dau-tu-htg-2026.jpg",
      alt: "Hội thảo đầu tư HTG năm 2026",
      featured: true,
    },
  ],
  profile: [
    {
      label: "Chức danh",
      value: "Nhà sáng lập của HTG kiêm Giám đốc điều hành",
    },
    {
      label: "Kinh nghiệm",
      value: "8 năm trải nghiệm trên thị trường chứng khoán Việt Nam",
    },
    {
      label: "Chuyên môn",
      value: "Phân tích kinh tế, phân tích định lượng và quản trị quyết định đầu tư",
    },
    {
      label: "Cột mốc nghề nghiệp",
      value: "Kinh nghiệm nghiên cứu và phân tích tại VPS, SSI và VND",
    },
    {
      label: "Thành tựu xác thực",
      value: "Nhà giao dịch xuất sắc của năm 2020; Cán bộ quản lý xuất sắc 2022; Nhân viên xuất sắc 2024; Nhà tư vấn của năm 2025",
    },
  ],
  menu: [
    ["Trang chủ", "#trang-chu"],
    ["Câu chuyện của tôi", "#cau-chuyen"],
    ["Sứ mệnh", "#su-menh"],
    ["Con người Tài Trần", "#con-nguoi"],
    ["Thành tựu", "#thanh-tuu"],
    ["HTG Investments", "#htg"],
    ["Góc nhìn", "#goc-nhin"],
    ["Liên hệ", "#lien-he"],
  ] as const,
} as const;

export type SocialKey = keyof typeof siteConfig.social;
