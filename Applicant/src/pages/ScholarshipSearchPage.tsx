import { ROUTER_INDEX } from "../constant/routerConstant";
import ListApplicationsScholarship from "../features/list-applicant-scholarship/ListApplicationsScholarship";
import { useDynamicTitle, useScrollTop } from "../hooks";

const ScholarshipSearchPage: React.FC = () => {
  useDynamicTitle(ROUTER_INDEX.ScholarshipSearchPage.title);
  useScrollTop();
  return (
    <div>
      <ListApplicationsScholarship />
    </div>
  );
};

export default ScholarshipSearchPage;
