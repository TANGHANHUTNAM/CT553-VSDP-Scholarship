import { ROUTER_INDEX } from "../constant/routerConstant";
import InformationScholarship from "../features/Information/InformationScholarship";
import { useDynamicTitle, useScrollTop } from "../hooks";

const InformationPage: React.FC = () => {
  useDynamicTitle(ROUTER_INDEX.InformationPage.title);
  useScrollTop();
  return (
    <div className="bg-primary/15 px-2 py-4">
      <InformationScholarship />
    </div>
  );
};

export default InformationPage;
