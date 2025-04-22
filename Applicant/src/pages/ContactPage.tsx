import { ROUTER_INDEX } from "../constant/routerConstant";
import ContactScholarship from "../features/contact/ContactScholarship";

import { useDynamicTitle, useScrollTop } from "../hooks";

const ContactPage: React.FC = () => {
  useDynamicTitle(ROUTER_INDEX.ContactPage.title);
  useScrollTop();
  return (
    <div className="bg-primary/15 px-2 py-4">
      <ContactScholarship />
    </div>
  );
};

export default ContactPage;
