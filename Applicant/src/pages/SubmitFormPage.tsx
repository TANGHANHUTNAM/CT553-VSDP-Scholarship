import { useLocation, useParams } from "react-router-dom";
import { ROUTER_INDEX } from "../constant/routerConstant";
import NotFoundScholarship from "../features/apply/NotFoundScholarship";
import { useDynamicTitle, useScrollTop } from "../hooks";
import { useQuery } from "@tanstack/react-query";
import { getFormShareService } from "../services/share-form";
import LoadingComponent from "../common/components/LoadingComponent";
import ApplyForm from "../features/apply/ApplyForm";

const SubmitFormPage: React.FC = () => {
  useDynamicTitle(ROUTER_INDEX.SubmitFormPage.title);
  useScrollTop();
  const { formId } = useParams<{ formId: string }>();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const { data: dataForm, isFetching } = useQuery({
    queryKey: ["getFormShareService", formId, token],
    queryFn: async () => getFormShareService(formId as string, token || ""),
    enabled: !!formId,
  });
  if (isFetching) return <LoadingComponent />;
  return (
    <>
      {dataForm?.data ? (
        <ApplyForm formScholarship={dataForm.data} />
      ) : (
        <NotFoundScholarship />
      )}
    </>
  );
};

export default SubmitFormPage;
