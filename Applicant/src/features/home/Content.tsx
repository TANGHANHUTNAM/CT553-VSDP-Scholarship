import { FaCheck } from "react-icons/fa";
import BodyLayout from "../../layouts/BodyLayout";

const Content: React.FC = () => {
  return (
    <BodyLayout classProp="bg-white py-8">
      <div className="collap-info py-10">
        <div className="name-program text-center text-5xl font-bold uppercase text-black/75">
          CHƯƠNG TRÌNH PHÁT TRIỂN SINH VIÊN VIETHOPE (VSDP)
        </div>
        <div className="content mt-10 p-3">
          <p className="pb-2 font-medium">Xin chào các bạn!</p>
          <p className="pb-2">
            Trên chặng đường thực hiện sứ mệnh vì một tương lai giáo dục tốt đẹp
            hơn, VietHope đã tổ chức nhiều chương trình hỗ trợ tài chính và phát
            triển kỹ năng dành cho các bạn sinh viên. Từ năm học 2021-2022,
            VietHope tích hợp các chương trình này thành{" "}
            <b>
              “Chương trình Phát triển Sinh viên VietHope” (VietHope Student
              Development Program - VSDP)
            </b>{" "}
            với mục tiêu hỗ trợ toàn diện và đồng hành cùng sinh viên trong suốt
            những năm đại học. Đối tượng VietHope hướng đến là các bạn sinh viên
            năm nhất hệ ĐH chính quy của các trường Đại học Đối tác tại Việt
            Nam.
          </p>
          <p className="pb-2">
            VSDP dự kiến cung cấp khoản hỗ trợ tổng giá trị tương đương 1.000
            USD/sinh viên (bao gồm hỗ trợ tài chính và phát triển kỹ năng) cho
            80 sinh viên trong suốt 4 năm đại học. Tóm tắt chương trình như bảng
            bên dưới:
          </p>
          {/* Table */}
          <table className="min-w-fit">
            <thead className="text-left font-bold">
              <tr>
                <th>Hỗ trợ</th>
                <th className="pr-5">Năm 1</th>
                <th className="pr-5">Năm 2</th>
                <th className="pr-5">Năm 3</th>
                <th className="pr-5">Năm 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left">
                  Chương trình Học bổng Đại học (USP)
                </td>
                <td className="pl-4">
                  <FaCheck />
                </td>
                <td className="pl-4">
                  <FaCheck />
                </td>
                <td className="pl-4"></td>
                <td className="pl-4"></td>
              </tr>
              <tr className="text-center">
                <td className="text-left">
                  Chương trình Phát triển Thế hệ Trẻ (YDP)
                </td>
                <td className="pl-4"></td>
                <td className="pl-4">
                  <FaCheck />
                </td>
                <td className="pl-4"></td>
                <td className="pl-4"></td>
              </tr>

              <tr className="text-center">
                <td className="text-left">
                  Chương trình Hội thảo Thế hệ Trẻ (YWP)
                </td>
                <td className="pl-4">
                  <FaCheck />
                </td>
                <td className="pl-4">
                  <FaCheck />
                </td>
                <td className="pl-4">
                  <FaCheck />
                </td>
                <td className="pl-4">
                  <FaCheck />
                </td>
              </tr>
              <tr className="text-center">
                <td className="text-left">
                  Chương trình Phát triển Hội cựu sinh viên (ADP)
                </td>
                <td className="pl-4"></td>
                <td className="pl-4">
                  <FaCheck />
                </td>
                <td className="pl-4">
                  <FaCheck />
                </td>
                <td className="pl-4">
                  <FaCheck />
                </td>
              </tr>

              <tr>
                <td className="text-left">Chương trình Cố vấn (MP)</td>
                <td className="pl-4"></td>
                <td className="pl-4"></td>
                <td className="pl-4">
                  <FaCheck />
                </td>
                <td className="pl-4">
                  <FaCheck />
                </td>
              </tr>
            </tbody>
          </table>

          <p className="my-2 text-lg font-medium uppercase">
            CÁC CHƯƠNG TRÌNH TRONG VSDP
          </p>
          <p className="mb-2">
            <b>
              Chương trình Học bổng Đại học (University Scholarship Program -
              USP)
            </b>{" "}
            dành cho các bạn sinh viên hoàn cảnh khó khăn, có ý chí vượt khó, có
            thành tích học tập tốt, có ý thức phát triển bản thân, xã hội và có
            tiềm năng trở thành những người làm chủ tương lai. Học bổng được
            trao với mục đích hỗ trợ phần nào khó khăn tài chính của năm đầu
            tiên ở bậc đại học trị giá <b>400 USD/suất</b>, tạo điều kiện thuận
            lợi hơn cho các bạn tiếp tục học tập và phát huy tối đa năng lực của
            mình. 80 bạn sinh viên được chọn sẽ có cơ hội tiếp tục nhận{" "}
            <b>200 USD/suất</b> vào năm thứ 2 đại học nếu đáp ứng tiêu chí duy
            trì học bổng của USP.
          </p>
          <p>
            Ngoài Học bổng USP hỗ trợ tài chính trong 2 năm học,{" "}
            <b>Chương trình Phát triển Sinh viên VietHope</b> còn bao gồm các
            chương trình phát triển kỹ năng <b>(YDP, YWP, ADP, MP)</b> có giá
            trị tương đương 400 USD/suất. Vào mùa hè năm nhất đại học, các bạn
            sinh viên được tham gia{" "}
            <b>
              Chương trình Phát triển Thế hệ Trẻ (Youth Development Program -
              YDP)
            </b>{" "}
            do VietHope tổ chức cho sinh viên miền Nam và Huế trong suốt 1 tuần.
            Sinh viên sẽ được hướng dẫn học các kỹ năng như: giao tiếp, làm việc
            nhóm, quản lý dự án cộng đồng, tư duy phản biện. Sau các buổi học
            cùng diễn giả, các bạn sẽ lên kế hoạch và thực hiện các dự án cộng
            đồng tại môi trường thực tế. Ngoài ra, VietHope hợp tác cùng các
            diễn giả uy tín tổ chức các buổi talkshow truyền cảm hứng qua chuỗi{" "}
            <b>
              Chương trình Hội thảo Thế hệ Trẻ (Youth Workshop Program - YWP)
            </b>
            . Bên cạnh đó, sinh viên có cơ hội tham gia các buổi đào tạo và tham
            quan công ty thuộc{" "}
            <b>
              Chương trình Phát triển Hội cựu sinh viên (Alumni Development
              Program - ADP)
            </b>{" "}
            với sự đồng hành từ các chuyên gia trong nhiều lĩnh vực. Vào năm thứ
            ba và thứ tư, sinh viên được tham gia{" "}
            <b>Chương trình Cố vấn (Mentorship Program - MP)</b> với các mentor
            giàu kinh nghiệm thực tiễn.
          </p>
        </div>
      </div>
    </BodyLayout>
  );
};

export default Content;
