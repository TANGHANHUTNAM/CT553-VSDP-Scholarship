import { Card, Collapse, Divider, Timeline, Typography } from "antd";

const { Paragraph, Text } = Typography;
const { Panel } = Collapse;

const InformationScholarship: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mb-4 bg-white px-3 py-4 text-3xl font-semibold uppercase text-primary/80">
        Thông tin học bổng VietHope VSDP
      </div>

      {/* Đối tượng */}
      <Card className="mb-4" title="Đối tượng tham gia" bordered={false}>
        <Paragraph>
          Chương trình dành cho sinh viên năm nhất hệ Đại học chính quy của 7
          trường:
        </Paragraph>
        <ul className="ml-5 list-disc">
          <li>ĐH Nông Lâm - ĐH Huế</li>
          <li>ĐH Kinh Tế - ĐH Huế</li>
          <li>ĐH Khoa Học - ĐH Huế</li>
          <li>ĐH Kinh Tế TP. HCM</li>
          <li>ĐH Khoa Học Tự Nhiên TP. HCM</li>
          <li>ĐH KHXH & NV TP. HCM</li>
          <li>
            ĐH Cần Thơ{" "}
            <Text type="danger">
              (Không áp dụng cho sinh viên ngành Sư phạm được hỗ trợ theo Nghị
              định 116/2020/NĐ-CP)
            </Text>
          </li>
        </ul>
      </Card>

      {/* Thời gian */}
      <Card className="mb-4" title="Mốc thời gian" bordered={false}>
        <Timeline>
          <Timeline.Item>08/09/2023: Triển khai & nhận đơn</Timeline.Item>
          <Timeline.Item>22/10/2023: Hạn cuối nhận đơn</Timeline.Item>
          <Timeline.Item>Tháng 11: Phỏng vấn</Timeline.Item>
          <Timeline.Item>Tháng 12: Trao học bổng</Timeline.Item>
        </Timeline>
      </Card>

      {/* Nộp hồ sơ */}
      <Collapse defaultActiveKey={["1"]} className="mb-4 bg-white">
        <Panel header="Thông tin nộp hồ sơ & câu hỏi tự luận" key="1">
          <Paragraph>Đơn gồm 5 phần:</Paragraph>
          <ol className="ml-6 list-decimal">
            <li>Thông tin sinh viên</li>
            <li>Thông tin học tập</li>
            <li>Thông tin gia đình</li>
            <li>Trình bày về hoàn cảnh và định hướng bản thân</li>
            <li>Hồ sơ đính kèm</li>
          </ol>
          <Divider />
          <Paragraph strong>Câu 1:</Paragraph>
          <Paragraph>
            Trình bày chi tiết về hoàn cảnh gia đình, khó khăn trong việc học
            (400-1000 từ).
          </Paragraph>
          <Paragraph strong>Câu 2:</Paragraph>
          <Paragraph>
            Phẩm chất nào giúp bạn vượt khó? Thách thức & cách bạn sẽ vượt qua
            trong tương lai học tập.
          </Paragraph>
        </Panel>

        <Panel header="Hồ sơ cần chuẩn bị" key="2">
          <ul className="ml-6 list-disc">
            <li>Ảnh chân dung</li>
            <li>Giấy báo nhập học / Biên nhận nhập học (tuỳ trường)</li>
            <li>Học bạ lớp 12</li>
            <li>Giấy khen, giải thưởng (nếu có)</li>
            <li>Thư giới thiệu từ giáo viên THPT (nếu có)</li>
            <li>Giấy chứng nhận Hộ nghèo/Cận nghèo (nếu có)</li>
          </ul>
        </Panel>

        <Panel header="Lưu ý & hướng dẫn khác" key="3">
          <ul className="ml-6 list-disc">
            <li>Không cần công chứng</li>
            <li>Điền đầy đủ tất cả phần bắt buộc</li>
            <li>Sử dụng email hợp lệ và thường xuyên kiểm tra</li>
            <li>
              Soạn sẵn nội dung câu hỏi tự luận bằng Word, rồi copy vào form
              tránh mất dữ liệu
            </li>
            <li>Khuyến khích có thư giới thiệu từ giáo viên THPT</li>
          </ul>
        </Panel>
      </Collapse>

      {/* Link đăng ký */}
      {/* <Card
        title="Link đăng ký theo từng trường"
        bordered={false}
        className="mb-4"
      >
        <ul className="ml-5 list-disc">
          <li>
            ĐH Nông Lâm - Huế:{" "}
            <a
              href="https://forms.gle/XyLRbUu9yB6JyZza6"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://forms.gle/XyLRbUu9yB6JyZza6
            </a>
          </li>
          <li>
            ĐH Kinh tế - Huế:{" "}
            <a
              href="https://forms.gle/mLxAfKDcPqgJKZ2h6"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://forms.gle/mLxAfKDcPqgJKZ2h6
            </a>
          </li>
          <li>
            ĐH Khoa học - Huế:{" "}
            <a
              href="https://forms.gle/zt8E1SuAA2AqYPzM7"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://forms.gle/zt8E1SuAA2AqYPzM7
            </a>
          </li>
          <li>
            ĐH Kinh Tế TP.HCM:{" "}
            <a
              href="https://forms.gle/2iERsKgYTtKrfCSt7"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://forms.gle/2iERsKgYTtKrfCSt7
            </a>
          </li>
          <li>
            ĐH Khoa Học Tự Nhiên TP.HCM:{" "}
            <a
              href="https://forms.gle/vF8i6JZvBJEc5mz99"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://forms.gle/vF8i6JZvBJEc5mz99
            </a>
          </li>
          <li>
            ĐH KHXH&NV TP.HCM:{" "}
            <a
              href="https://forms.gle/ffXEkZWWBbxbtNsG9"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://forms.gle/ffXEkZWWBbxbtNsG9
            </a>
          </li>
          <li>
            ĐH Cần Thơ:{" "}
            <a
              href="https://forms.gle/EVHxN9FCVReZanBA9"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://forms.gle/EVHxN9FCVReZanBA9
            </a>
          </li>
          <li>
            Sinh viên chương trình Merit:{" "}
            <a
              href="https://forms.gle/Ya2x6W2QYSBeTTw9A"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://forms.gle/Ya2x6W2QYSBeTTw9A
            </a>
          </li>
        </ul>
      </Card> */}
    </div>
  );
};

export default InformationScholarship;
