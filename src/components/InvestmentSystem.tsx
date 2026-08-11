import Image from "next/image";
import methodBanner from "../../img/phuongPhapDauTu.jpg";

const buffettPillars = [
  {
    index: "01",
    title: "Quyền sở hữu doanh nghiệp",
    description:
      "Mỗi cổ phiếu là một phần của cỗ máy kinh doanh thực sự — không phải tờ vé số hay một mã code nhảy múa trên bảng điện.",
  },
  {
    index: "02",
    title: "Lợi thế cạnh tranh bền vững",
    description:
      "Doanh nghiệp cần có “lớp hào bảo vệ”: thương hiệu vượt trội, chi phí thấp, hiệu ứng mạng lưới hoặc rào cản gia nhập ngành lớn.",
  },
  {
    index: "03",
    title: "Biên an toàn",
    description:
      "Chỉ giải ngân khi giá thị trường thấp hơn đáng kể giá trị thực, tạo lớp đệm trước sai số định giá và biến động vĩ mô.",
  },
];

const awakeningLayers = [
  {
    code: "TÂM",
    number: "Tầng 01",
    eyebrow: "Mindset · Thức tỉnh tâm trí",
    title: "Làm chủ chính mình trước khi làm chủ danh mục",
    points: [
      "Rời bỏ tư duy đánh bạc ngắn hạn để trở thành người tích lũy tài sản dài hạn.",
      "Tắt tiếng ồn thị trường: không hoảng loạn khi giảm điểm, không hưng phấn vô căn cứ khi thị trường bùng nổ.",
      "Với dòng vốn lớn, ưu tiên số một là bảo toàn vốn; tối ưu lợi nhuận đứng sau nguyên tắc không để mất tiền.",
    ],
  },
  {
    code: "TẦM",
    number: "Tầng 02",
    eyebrow: "Value · Thức tỉnh giá trị",
    title: "Khai quật phần chìm của tảng băng",
    points: [
      "Bộ lọc 15 tiêu chí đánh giá nội tại doanh nghiệp: tài chính lành mạnh, nợ vay an toàn và dòng tiền kinh doanh dồi dào.",
      "Ban lãnh đạo phải có tâm, có tầm và đồng pha lợi ích với cổ đông.",
      "Định vị ngành chiến lược 2026–2030: Năng lượng, Khoáng sản, Phân bón và Sản xuất cơ bản.",
    ],
  },
  {
    code: "THẾ",
    number: "Tầng 03",
    eyebrow: "Flow · Thức tỉnh dòng tiền",
    title: "Đọc đúng nhịp để không bị chôn vốn",
    points: [
      "Tích hợp Wyckoff/VSA cải tiến để đọc vị dòng tiền lớn và cấu trúc cung – cầu.",
      "Nhận diện bốn giai đoạn của cổ phiếu: Tích lũy, Đẩy giá, Phân phối và Đè giá.",
      "Chỉ kích hoạt giải ngân khi giá trị đạt chuẩn Tầng 2 và dòng tiền tổ chức xác nhận cạn cung hoặc gia tăng thanh khoản.",
    ],
  },
];

const marketCycle = ["Tích lũy", "Đẩy giá", "Phân phối", "Đè giá"];

const vipServices = [
  {
    index: "01",
    title: "Bản tin Chiến lược Di sản",
    description:
      "Báo cáo phân tích chuyên sâu định kỳ, cập nhật biến động vĩ mô và định giá chi tiết từng cổ phiếu mục tiêu.",
  },
  {
    index: "02",
    title: "Tư vấn danh mục 1:1",
    description:
      "Founder và đội ngũ cố vấn HTG trực tiếp xây dựng kịch bản quản trị rủi ro theo quy mô vốn và mục tiêu tài chính riêng.",
  },
  {
    index: "03",
    title: "Hệ thống cảnh báo sớm",
    description:
      "Cảnh báo vùng rủi ro đảo chiều hoặc suy giảm nội tại doanh nghiệp để chủ động chốt lời và bảo vệ vốn.",
  },
];

export function InvestmentSystem() {
  return (
    <section className="method-system" id="phuong-phap-dau-tu">
      <div className="container method-system__intro">
        <div className="method-system__heading">
          <div>
            <p className="eyebrow">Hệ thống đầu tư tỉnh thức HTG</p>
            <h2>Từ di sản Warren Buffett đến thực chiến chứng khoán Việt Nam</h2>
          </div>
          
        </div>

        <figure className="method-system__banner">
          <Image
            src={methodBanner}
            alt="Hệ thống Đầu tư Tỉnh thức HTG của Tài Trần dựa trên di sản Warren Buffett"
            priority
            sizes="(max-width: 900px) 100vw, 1240px"
          />
        </figure>

        <div className="method-system__meta" aria-label="Thông tin hệ thống đầu tư">
          <p><span>Tác giả</span><strong>Nguyễn Đức Tài (Tài Trần)</strong><small>Founder & CEO, HTG Investments</small></p>
          <p><span>Phát hành</span><strong>Công ty TNHH HTG Investments</strong></p>
          <blockquote>“Tỉnh thức trước đám đông — Sáng suốt cùng giá trị.”</blockquote>
        </div>
      </div>

      <div className="method-awakening">
        <div className="container method-awakening__grid">
          <div className="method-stat" aria-label="Hơn 95 phần trăm nhà đầu tư cá nhân thất bại">
            <span>Hơn</span>
            <strong>95<sup>%</sup></strong>
            <p>nhà đầu tư cá nhân liên tục thất bại và đánh mất thành quả tích lũy.</p>
          </div>
          <div className="method-awakening__copy">
            <p className="eyebrow">Tiếng chuông thức tỉnh</p>
            <h3>Vấn đề không nằm ở việc thị trường thiếu cơ hội.</h3>
            <p>
              Thị trường chứng khoán Việt Nam phát triển nhanh và có biên độ lợi nhuận hấp dẫn, nhưng phần lớn nhà
              đầu tư vẫn bị cuốn theo bảng điện xanh đỏ và những lời phím lệnh T+.
              Khi cơn sóng đi qua, tài sản và niềm tin cùng bị bào mòn.
            </p>
            <p>
              Với NAV lớn, phó mặc tài sản cho may rủi ngắn hạn là rủi ro không thể chấp nhận. Điều cần thiết không
              phải thêm một mã lướt sóng, mà là một hệ tư duy giúp nhà đầu tư bước ra khỏi đám đông, lấy lại sự chủ
              động và kiến tạo di sản tài chính.
            </p>
          </div>
        </div>
      </div>

      <div className="container method-legacy section">
        <div className="method-section-title">
          <p className="eyebrow">01 · Nền tảng</p>
          <h3>Di sản Buffett, được hoàn thiện cho thị trường Việt Nam</h3>
          <p>
            Hơn sáu thập kỷ tại Berkshire Hathaway chứng minh sức mạnh của đầu tư giá trị. HTG giữ nguyên phần
            cốt lõi ấy, đồng thời bổ sung năng lực đọc dòng tiền bản địa để tối ưu thời điểm.
          </p>
        </div>

        <div className="buffett-grid">
          {buffettPillars.map((pillar) => (
            <article className="buffett-card" key={pillar.index}>
              <span>{pillar.index}</span>
              <h4>{pillar.title}</h4>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>

        <div className="localization-grid">
          <div className="localization-copy">
            <p className="eyebrow">Bài toán bản địa hóa</p>
            <h4>Không rập khuôn. Không “ngâm vốn”.</h4>
            <p>
              Kinh tế Việt Nam khiến các ngành cốt lõi mang tính chu kỳ rất cao; đồng thời thanh khoản chịu ảnh
              hưởng mạnh từ dòng tiền cá nhân và các nhóm vốn lớn. Áp dụng Buffett nguyên bản mà bỏ qua thời điểm
              có thể khiến nhà đầu tư chọn đúng doanh nghiệp nhưng sai nhịp thị trường.
            </p>
          </div>
          <div className="method-formula" aria-label="Công thức bản địa hóa phương pháp đầu tư">
            <div><span>Buffett</span><strong>Chọn đúng doanh nghiệp</strong></div>
            <b aria-hidden="true">×</b>
            <div><span>Wyckoff / VSA</span><strong>Chọn đúng thời điểm</strong></div>
            <b aria-hidden="true">=</b>
            <div className="method-formula__result"><span>HTG</span><strong>Giá trị × Dòng tiền</strong></div>
          </div>
        </div>
      </div>

      <div className="method-framework section">
        <div className="container">
          <div className="method-section-title method-section-title--light">
            <p className="eyebrow">02 · Bộ khung cốt lõi</p>
            <h3>Ba tầng thức tỉnh tạo nên thế kiềng vững chắc</h3>
            <p>
              TÂM định hình bản lĩnh, TẦM xác định giá trị, THẾ lựa chọn thời điểm — cùng hướng đến tăng trưởng tài
              sản thong dong và có nguyên tắc.
            </p>
          </div>

          <div className="awakening-map">
            {awakeningLayers.map((layer, index) => (
              <article className={`awakening-card awakening-card--${index + 1}`} key={layer.code}>
                <div className="awakening-card__top">
                  <span>{layer.number}</span>
                  <strong>{layer.code}</strong>
                </div>
                <p className="awakening-card__eyebrow">{layer.eyebrow}</p>
                <h4>{layer.title}</h4>
                <ul>
                  {layer.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="market-cycle">
            <div className="market-cycle__copy">
              <p className="eyebrow">Chu kỳ dòng tiền</p>
              <h4>Bốn trạng thái, một nguyên tắc kích hoạt</h4>
              <p>
                Chỉ giải ngân khi doanh nghiệp vượt bộ lọc giá trị và xuất hiện tín hiệu cạn cung hoặc thanh khoản
                gia tăng từ dòng tiền tổ chức.
              </p>
            </div>
            <ol>
              {marketCycle.map((stage, index) => (
                <li key={stage}><span>{String(index + 1).padStart(2, "0")}</span><strong>{stage}</strong></li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="container method-portfolio section">
        <div className="method-section-title">
          <p className="eyebrow">03 · Quản trị danh mục VIP</p>
          <h3>Cấu trúc “Cốt lõi & Tăng tốc” cho NAV lớn</h3>
          <p>
            Một danh mục đa tầng cân bằng giữa bảo toàn tài sản và khả năng nắm bắt những cơ hội có xác suất cao.
          </p>
        </div>

        <div className="portfolio-allocation">
          <div className="allocation-chart" role="img" aria-label="70 phần trăm danh mục cốt lõi và 30 phần trăm danh mục tăng tốc">
            <div className="allocation-chart__center"><strong>70/30</strong><span>Phân bổ vốn</span></div>
          </div>
          <div className="allocation-details">
            <article>
              <span>70%</span>
              <div><h4>Danh mục Cốt lõi</h4><p>Doanh nghiệp đầu ngành, lợi thế cạnh tranh tuyệt đối, định giá dưới giá trị thực; ưu tiên Năng lượng, Khoáng sản và Phân bón. Mục tiêu: tăng trưởng tài sản bền vững theo năm.</p></div>
            </article>
            <article>
              <span>30%</span>
              <div><h4>Danh mục Tăng tốc</h4><p>Giải ngân tại các điểm kích hoạt VSA/Wyckoff ở cổ phiếu có sóng ngành rõ nét. Mục tiêu: bứt phá lợi nhuận trong ngắn và trung hạn.</p></div>
            </article>
          </div>
        </div>

        <div className="vip-services">
          <div className="vip-services__heading">
            <p className="eyebrow">Đặc quyền HTG VIP Club</p>
            <h3>Một hệ sinh thái hỗ trợ chuyên nghiệp</h3>
          </div>
          <div className="vip-services__grid">
            {vipServices.map((service) => (
              <article key={service.index}>
                <span>{service.index}</span>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="method-closing">
        <div className="container method-closing__inner">
          <p className="eyebrow">Hành trình kiến tạo di sản</p>
          <blockquote>
            Đầu tư không phải một cuộc đua tốc độ ngắn hạn. Đó là hành trình marathon của sự kiên nhẫn, tri thức
            và bản lĩnh.
          </blockquote>
          <div>
            <p>
              Khi dám bước ra khỏi sự ồn ào để “thức tỉnh”, thị trường không còn là nơi rủi ro rình rập mà trở
              thành mảnh đất để tích lũy tài sản. HTG Investments đồng hành bằng tư duy, phương pháp và một hệ thống
              quản trị hướng đến tự do tài chính cùng di sản bền vững cho thế hệ mai sau.
            </p>
            <a className="button button--gold" href="#lien-he">Kết nối cùng HTG Investments</a>
          </div>
        </div>
      </div>
    </section>
  );
}
