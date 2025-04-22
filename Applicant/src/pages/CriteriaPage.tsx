import { ROUTER_INDEX } from "../constant/routerConstant";
import CriteriaScholarship from "../features/criteria/CriteriaScholarship";
import { useDynamicTitle, useScrollTop } from "../hooks";

const CriteriaPage: React.FC = () => {
  useDynamicTitle(ROUTER_INDEX.CriteriaPage.title);
  useScrollTop();
  return (
    <div className="bg-primary/15 px-2 py-4">
      <CriteriaScholarship />
    </div>
  );
};

export default CriteriaPage;
