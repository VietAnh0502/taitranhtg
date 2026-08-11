import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Điều khoản sử dụng | Tài Trần HTG" };

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Pháp lý" title="Điều khoản sử dụng">
      <h2>Mục đích thông tin</h2>
      <p>Nội dung trên website nhằm giới thiệu thương hiệu cá nhân, triết lý đồng hành và các kênh kết nối chính thức của Tài Trần.</p>
      <h2>Miễn trừ trách nhiệm đầu tư</h2>
      <p>Thông tin được cung cấp với mục đích tham khảo và giáo dục; không cấu thành cam kết lợi nhuận, lời mời mua bán hoặc khuyến nghị đầu tư cá nhân.</p>
      <h2>Trách nhiệm người sử dụng</h2>
      <p>Các bạn cần tự đánh giá mục tiêu, quyết định và khả năng chấp nhận rủi ro trước khi thực hiện bất kỳ hoạt động đầu tư nào.</p>
    </LegalPage>
  );
}
