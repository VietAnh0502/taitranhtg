import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="wordmark wordmark--footer" href="/#trang-chu">
            <strong>TAI TRAN</strong><span>HTG</span>
          </a>
          <p>{siteConfig.title}</p>
        </div>
        <div className="footer-contact">
          <span>Kết nối trực tiếp</span>
          <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
          {siteConfig.assistants.map((a) => (
            <a key={a.zalo} href={a.zalo} target="_blank" rel="noreferrer">{a.name}: {a.phone}</a>
          ))}
        </div>
        <SocialLinks compact />
      </div>
      <div className="container footer-legal" id="mien-tru">
        <p>
          <strong>Tuyên bố miễn trừ:</strong> Thông tin trên website được cung cấp với mục đích tham khảo và giáo dục,
          không phải là cam kết lợi nhuận hoặc lời mời mua bán chứng khoán. Nhà đầu tư cần tự đánh giá quyết định và
          khả năng chấp nhận rủi ro của mình.
        </p>
        <nav aria-label="Pháp lý">
          <a href="/chinh-sach-bao-mat">Chính sách bảo mật</a>
          <a href="/dieu-khoan-su-dung">Điều khoản sử dụng</a>
        </nav>
        <small>© {new Date().getFullYear()} Tài Trần × HTG. Bảo lưu mọi quyền.</small>
      </div>
    </footer>
  );
}
