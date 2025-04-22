import { useEffect, useState } from "react";
import { ROUTER_INDEX } from "../constant/routerConstant";
import NotFoundScholarship from "../features/apply/NotFoundScholarship";
import { useDynamicTitle, useScrollTop } from "../hooks";
import { IResponse } from "../interface/response";
import { IFormResponse } from "../interface/apply";
import { getFormScholarshipService } from "../services/apply";
import LoadingComponent from "../common/components/LoadingComponent";
import ScholarshipApplicationForm from "../features/apply/ApplyForm";

const ApplyPage: React.FC = () => {
  useDynamicTitle(ROUTER_INDEX.ApplyPage.title);
  useScrollTop();
  const [loading, setLoading] = useState<boolean>(true);
  const [form, setForm] = useState<IFormResponse | null>(null);
  const fetchFormScholarship = async () => {
    setLoading(true);
    try {
      const res: IResponse<IFormResponse> = await getFormScholarshipService();
      if (res && res.data) {
        setForm(res.data);
      }
      if (res && res.error) {
        setForm(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFormScholarship();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <div className="">
      {form ? (
        <ScholarshipApplicationForm formScholarship={form} />
      ) : (
        <NotFoundScholarship />
      )}
    </div>
  );
};

export default ApplyPage;
