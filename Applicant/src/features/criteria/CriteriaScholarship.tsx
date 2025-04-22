import React from "react";
import { Collapse, Typography, List } from "antd";

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const CriteriaScholarship: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 shadow-md">
      <Typography>
        <Title level={3}>TIÊU CHÍ XÉT TUYỂN NĂM 1</Title>
        <List
          dataSource={[
            "Là sinh viên năm thứ nhất hệ chính quy tại 7 trường Đại học triển khai học bổng hoặc học sinh nhận học bổng MDP (Merit) năm lớp 12 đậu đại học chính quy.",
            "Có hoàn cảnh kinh tế gia đình khó khăn, thu nhập gia đình không đủ trang trải các khoản chi phí liên quan đến việc học tập và có nhu cầu được hỗ trợ tài chính.",
            "Có ý chí vượt khó vươn lên bằng con đường học vấn, năng lực học tập khá giỏi, cầu tiến, có động cơ học tập mạnh mẽ để phát triển bản thân.",
            "Có tinh thần cộng đồng, mong muốn tạo ra tác động tích cực cho gia đình và xã hội để phát triển các dự án cộng đồng trong tương lai.",
          ]}
          renderItem={(item) => (
            <List.Item className="pl-4">• {item}</List.Item>
          )}
        />

        <Title level={3}>TIÊU CHÍ XÉT TIẾP HỌC BỔNG USP NĂM 2</Title>
        <Paragraph>
          Để nhận học bổng USP trị giá <strong>200 USD</strong>/suất năm 2, sinh
          viên phải đạt tối thiểu 2/3 tiêu chí (tiêu chí 1 bắt buộc):
        </Paragraph>

        <Collapse accordion className="mt-4">
          <Panel
            header="1. Điều kiện bắt buộc – Tham gia chương trình Summit (YDP)"
            key="1"
          >
            <Paragraph>
              Summit là chương trình phát triển kỹ năng và kết nối dành cho sinh
              viên VietHope. Bắt buộc tham gia để tiếp tục nhận học bổng USP năm
              2.
            </Paragraph>
            <List
              header="Khi tham gia bạn sẽ nhận được:"
              dataSource={[
                "Tài trợ 100% chi phí tham gia",
                "Môi trường học hỏi, trau dồi kỹ năng",
                "Kỷ niệm đẹp trong 7 ngày chương trình",
              ]}
              renderItem={(item) => <List.Item>• {item}</List.Item>}
            />
            <Paragraph>
              <Text strong>Lưu ý:</Text> Nếu không tham gia mà không có lý do
              chính đáng (bệnh, lịch học có minh chứng), sẽ bị từ chối học bổng.
            </Paragraph>
          </Panel>

          <Panel header="2. Hoạt động cộng đồng" key="2">
            <Paragraph>
              Sinh viên cần tham gia ít nhất 1 hoạt động cộng đồng hoặc do
              VietHope tổ chức như:
            </Paragraph>
            <List
              dataSource={[
                "Tình nguyện viên chương trình VietHope (Merit, VSDP, Workshop...)",
                "Xuân tình nguyện, Mùa hè xanh...",
              ]}
              renderItem={(item) => <List.Item>• {item}</List.Item>}
            />
            <Paragraph>
              <Text strong>Lưu ý:</Text> Cần cung cấp giấy xác nhận hoặc hình
              ảnh tham gia (3–5 ảnh) nếu không có giấy.
            </Paragraph>
          </Panel>

          <Panel header="3. Điều kiện học lực" key="3">
            <Paragraph>
              GPA năm nhất từ loại <strong>khá trở lên</strong>. Phải nộp{" "}
              <Text strong>ảnh scan bảng điểm có mộc đỏ</Text>.
            </Paragraph>
            <Paragraph>
              <Text strong>Không chấp nhận ảnh chụp màn hình.</Text>
            </Paragraph>
          </Panel>

          <Panel header="4. Điểm cộng" key="4">
            <List
              header="Các yếu tố cộng điểm bao gồm:"
              dataSource={[
                "Tham gia >50% hoạt động VietHope",
                "Giấy chứng nhận thành tích học thuật (cuộc thi cấp khoa trở lên)",
                "Chứng chỉ tiếng Anh (IELTS ≥ 6.0, TOEIC ≥ 600...)",
                "Chứng chỉ Tin học (MOS), chuyên ngành, nghiên cứu khoa học",
                "Sinh viên 5 Tốt",
              ]}
              renderItem={(item) => <List.Item>• {item}</List.Item>}
            />
            <Paragraph>
              <Text strong>Lưu ý:</Text> Có điểm cộng là lợi thế. Sinh viên đạt
              3/3 tiêu chí sẽ được xem xét vào Mentorship Program.
            </Paragraph>
          </Panel>
        </Collapse>
      </Typography>
    </div>
  );
};

export default CriteriaScholarship;
