import { Result } from "antd";

const NotFoundScholarship: React.FC = () => {
  return (
    <Result
      status="404"
      title="Không tìm biểu mẫu"
      subTitle="Biểu mẫu đã hết hạn hoặc không tồn tại. Vui lòng kiểm tra lại!"
    />
  );
};

export default NotFoundScholarship;
