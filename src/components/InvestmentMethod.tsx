"use client";

import { useEffect, useState } from "react";

const principles = [
  {
    key: "Tâm",
    subtitle: "Làm chủ cảm xúc",
    quote: "“Hãy sợ hãi khi người khác tham lam và tham lam khi người khác sợ hãi.”",
    description:
      "Không chạy theo đám đông, giữ sự tỉnh táo trước biến động và hành động dựa trên hệ thống thay vì cảm xúc.",
  },
  {
    key: "Tầm",
    subtitle: "Lựa chọn doanh nghiệp",
    quote:
      "“Tốt hơn nhiều khi mua một doanh nghiệp tuyệt vời với mức giá hợp lý, thay vì mua một doanh nghiệp bình thường với mức giá tuyệt vời.”",
    description:
      "Ưu tiên doanh nghiệp chất lượng, có lợi thế cạnh tranh và tiềm năng tăng trưởng, thay vì chỉ tìm kiếm cổ phiếu có vẻ ‘rẻ’.",
  },
  {
    key: "Thế",
    subtitle: "Hiểu rõ trước khi hành động",
    quote: "“Rủi ro xuất hiện khi bạn không biết mình đang làm gì.”",
    description:
      "Mỗi quyết định đều có luận điểm đầu tư, điểm mua, tỷ trọng, kịch bản xử lý và giới hạn rủi ro rõ ràng.",
  },
];

export function InvestmentMethod() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % principles.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: number) => {
    setActive((current) => (current + direction + principles.length) % principles.length);
  };

  return (
    <section className="investment-method section" id="phuong-phap-dau-tu">
      <div className="container">
        <div className="investment-method__header">
          <div>
            <p className="eyebrow">Hệ thống đầu tư tỉnh thức HTG</p>
            <h2>3 tầng tỉnh thức: Tâm - Tầm - Thế</h2>
          </div>
          
        </div>

        <div
          className="method-slider"
          aria-roledescription="carousel"
          aria-label="Ba nguyên tắc đầu tư HTG"
        >
          <div className="method-slider__steps" role="tablist" aria-label="Chọn nguyên tắc">
            {principles.map((principle, index) => (
              <button
                key={principle.key}
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
                role="tab"
                aria-selected={index === active}
                aria-controls={`method-panel-${index}`}
              >
                <span>0{index + 1}</span>
                <strong>{principle.key}</strong>
              </button>
            ))}
          </div>

          <div className="method-slider__viewport">
            <div className="method-slider__track" style={{ transform: `translateX(-${active * 100}%)` }}>
              {principles.map((principle, index) => (
                <article
                  className="method-slide"
                  id={`method-panel-${index}`}
                  key={principle.key}
                  role="tabpanel"
                  aria-hidden={index !== active}
                >
                  <div className="method-slide__index">0{index + 1}</div>
                  <div className="method-slide__name">
                    <span>{principle.key}</span>
                    <h3>{principle.subtitle}</h3>
                  </div>
                  <div className="method-slide__copy">
                    <blockquote>{principle.quote}</blockquote>
                    <p>{principle.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="method-slider__footer">
            <p><span>{active + 1}</span> / {principles.length}</p>
            <div className="method-slider__controls">
              <button onClick={() => move(-1)} aria-label="Xem nguyên tắc trước">←</button>
              <button onClick={() => move(1)} aria-label="Xem nguyên tắc tiếp theo">→</button>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
