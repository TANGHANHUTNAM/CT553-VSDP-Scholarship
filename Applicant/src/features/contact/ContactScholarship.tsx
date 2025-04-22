import React from "react";
import { Form, Input, Button, Card } from "antd";

const { TextArea } = Input;

const ContactScholarship: React.FC = () => {
  const onFinish = () => {};

  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6">
      <h1 className="text-center text-3xl font-bold uppercase text-primary">
        Liên hệ hỗ trợ Chương trình Phát triển Sinh viên VietHope
      </h1>

      {/* Thông tin liên hệ */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="📍 Miền Nam" bordered className="shadow-md">
          <p className="text-lg font-semibold text-gray-800">Chị Khánh Trúc</p>
          <p>Quản lý chương trình học bổng USP 2023</p>
          <p>
            Email:{" "}
            <a href="mailto:truc.ngo@viethope.org" className="text-primary">
              truc.ngo@viethope.org
            </a>
          </p>
          <p>SĐT: 0329100405</p>
        </Card>

        <Card title="📍 Miền Trung" bordered className="shadow-md">
          <p className="text-lg font-semibold text-gray-800">Anh Ngọc Hoàng</p>
          <p>Điều phối viên USP tại Huế</p>
          <p>
            Email:{" "}
            <a
              href="mailto:tnhoang.viethope@gmail.com"
              className="text-primary"
            >
              tnhoang.viethope@gmail.com
            </a>
          </p>
          <p>SĐT: 0868002785</p>
        </Card>
      </div>

      {/* Thông tin các trường */}
      <Card title="📚 Đại diện trường đại học" bordered className="shadow-md">
        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          <li>ĐH Nông Lâm - Huế: Thầy Hùng - thaidoanhung@huaf.edu.vn</li>
          <li>ĐH Kinh Tế - Huế: Cô Anh - htqanh@hce.edu.vn</li>
          <li>ĐH Khoa Học - Huế: Thầy Trường - tntruong@husc.edu.vn</li>
          <li>UEH: Thầy Lộc - ngmloc@ueh.edu.vn</li>
          <li>ĐH KHTN TP.HCM: Cô Hạnh - dtdhanh@hcmus.edu.vn</li>
          <li>ĐH KHXH&NV TP.HCM: Cô Huyền - congtacsinhvien@hcmussh.edu.vn</li>
          <li>ĐH Cần Thơ: Thầy Vinh - pqvinh@ctu.edu.vn</li>
        </ul>
      </Card>

      <Card
        title="👥 Tình nguyện viên hỗ trợ tại các trường"
        bordered
        className="shadow-md"
      >
        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          <li>
            ĐH Nông Lâm - Huế: Anh Đình Sang - 0367694010 - dinhs3409@gmail.com
          </li>
          <li>
            ĐH Kinh Tế - Huế: Chị Cẩm Tiên - 0898676274 -
            camtien.nguyen@viethope.org
          </li>
          <li>
            ĐH Khoa Học - Huế: Chị Tố Nguyên - 0779428317 -
            nguyenthitonguyen3005@gmail.com
          </li>
          <li>
            ĐH Kinh Tế TP.HCM: Anh Tiến Đạt - 0383603625 -
            tiendatnguyen.july@gmail.com
          </li>
          <li>
            ĐH KHTN TP.HCM: Chị Thanh Nhã - 0775130124 - thanhnha4761@gmail.com
          </li>
          <li>
            ĐH KHXH&NV TP.HCM: Chị Ngọc Thanh - 0979755205 -
            qmira.tngocthanhwork@gmail.com
          </li>
          <li>
            ĐH Cần Thơ: Anh Minh Nhựt - 0967904249 - nhutdonhutdo123@gmail.com
          </li>
        </ul>
      </Card>

      <p className="font-medium italic text-red-600">
        🔔 Lưu ý: Vui lòng liên hệ Tình nguyện viên tại trường của bạn để được
        hỗ trợ nhanh chóng và chính xác!
      </p>

      {/* Form liên hệ */}
      <Card title="📨 Gửi thắc mắc trực tiếp" bordered className="shadow-md">
        <Form
          layout="vertical"
          onFinish={onFinish}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
          >
            <Input placeholder="Nguyễn Văn A" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="example@email.com" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              {
                pattern: /^[0-9]{9,11}$/,
                message: "Số điện thoại không hợp lệ!",
              },
            ]}
          >
            <Input placeholder="0123456789" />
          </Form.Item>

          <Form.Item
            label="Nội dung"
            name="content"
            className="md:col-span-2"
            rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
          >
            <TextArea rows={5} placeholder="Nội dung thắc mắc, góp ý..." />
          </Form.Item>

          <Form.Item className="text-right md:col-span-2">
            <Button type="primary" htmlType="submit">
              Gửi liên hệ
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ContactScholarship;
