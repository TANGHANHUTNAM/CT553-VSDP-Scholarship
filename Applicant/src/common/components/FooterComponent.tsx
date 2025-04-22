import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ROUTER_INDEX } from "../../constant/routerConstant";

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-primary py-8 text-white md:px-4">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to={ROUTER_INDEX.InformationPage.router}
                  className="hover:underline"
                >
                  Thông tin chương ttrình
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTER_INDEX.CriteriaPage.router}
                  className="hover:underline"
                >
                  Đối tượng và tiêu chí
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={ROUTER_INDEX.ScholarshipSearchPage.router}
                  className="hover:underline"
                >
                  Tra cứu học bổng
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTER_INDEX.ApplyPage.router}
                  className="hover:underline"
                >
                  Nộp hồ sơ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTER_INDEX.ContactPage.router}
                  className="hover:underline"
                >
                  Liên hệ
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Về VIETHOPE VIETNAM */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Về Viethope:</h3>
            <ul className="space-y-2">
              <li>VietHope is a 501(c)(3) non-profit organization.</li>
              <li>
                <b>USA:</b> 440 N Barranca Ave #9666 Covina, CA 91723
              </li>
              <li>
                <b>VIETNAM:</b> 11 Le Ngo Cat St., Dist. 3 Ho Chi Minh City,
                Vietnam
              </li>
              <li>Số điện thoại: 03-0485362</li>
              <li>
                Email:{" "}
                <a href="mailto:info@viethope.org" className="hover:underline">
                  info@viethope.org
                </a>
              </li>
            </ul>
          </div>

          {/* Về Chương Trình Học Bổng VSDP */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Về chương trình học bổng VSDP:
            </h3>
            <ul className="space-y-2">
              <li>Hotline: 03-0485362</li>
              <li>
                Email:{" "}
                <a href="mailto:info@viethope.org" className="hover:underline">
                  info@viethope.org
                </a>
              </li>
              <li className="flex items-center justify-start space-x-2 text-2xl">
                <a
                  href="https://www.youtube.com/channel/UCqB7AQRKkIMKl0nyRwtvZtw"
                  className="hover:underline"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.facebook.com/VietHopeInc/"
                  className="hover:underline"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/viethope_inc/?hl=en"
                  className="hover:underline"
                >
                  <FaInstagram />
                </a>
                <a href="https://x.com/VietHope" className="hover:underline">
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/viethope/"
                  className="hover:underline"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white pt-4 text-center">
          <p>© 2024 VietHope. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
