import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Chính sách bảo mật | Tài Trần HTG" };

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Pháp lý" title="Chính sách bảo mật">
      <h2>Phạm vi áp dụng</h2>
      <p>Website hiện không có biểu mẫu thu thập dữ liệu, không yêu cầu đăng ký tài khoản và không lưu thông tin thanh toán.</p>
      <h2>Liên kết bên ngoài</h2>
      <p>Các nút liên hệ có thể đưa các bạn đến Zalo, Facebook, YouTube hoặc TikTok. Chính sách của từng nền tảng sẽ được áp dụng khi các bạn truy cập.</p>
      <h2>Cập nhật chính sách</h2>
      <p>Nội dung này có thể được cập nhật khi website bổ sung chức năng mới. Phiên bản hiện hành luôn được công bố tại trang này.</p>
    </LegalPage>
  );
}
