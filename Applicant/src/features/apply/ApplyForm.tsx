import { Button, Card, Form } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  IFormResponse,
  IFormSubmitRequest,
  IFormSubmitResponse,
} from "../../interface/apply";
import {
  FormBlockInstance,
  FormNotInputBlockTypes,
} from "../../interface/form-blocks";
import { renderInforForm } from "./RenderInforForm";
import { renderFormSections } from "./RenderSection";
import { useMutation } from "@tanstack/react-query";
import { IResponse } from "../../interface/response";
import { submitFormScholarshipService } from "../../services/apply";
import logo from "../../assets/logo.png";

interface IApplyFormProps {
  formScholarship: IFormResponse | null;
}

const ApplyForm: React.FC<IApplyFormProps> = ({ formScholarship }) => {
  const [form] = Form.useForm();
  const formSections = formScholarship?.form_sections || [];
  const [currentStep, setCurrentStep] = useState<number>(0);

  const getInputFieldIds = (blocks: FormBlockInstance[]) => {
    const inputFieldIds: string[] = [];
    const traverseBlocks = (blockArray: FormBlockInstance[]) => {
      blockArray.forEach((block) => {
        if (!FormNotInputBlockTypes.includes(block.blockType)) {
          inputFieldIds.push(block.id);
        }
        if (block.childBlock && block.childBlock.length > 0) {
          traverseBlocks(block.childBlock);
        }
      });
    };
    traverseBlocks(blocks);
    return inputFieldIds;
  };

  const getFieldsToValidate = () => {
    if (currentStep === 0) {
      if (formScholarship?.universities) {
        return ["name", "email", "phone_number", "university"];
      }
      return ["name", "email", "phone_number"];
    } else {
      const currentSection = formSections[currentStep - 1];
      const jsonBlocks = currentSection?.json_blocks
        ? currentSection.json_blocks
        : [];
      return getInputFieldIds(jsonBlocks);
    }
  };

  const nextStep = async () => {
    try {
      const fieldsToValidate = getFieldsToValidate();
      await form.validateFields(fieldsToValidate);
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } catch (error) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      console.log("Validation failed:", error);
    }
  };
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderFilledInforUser = () => {
    return (
      <div className="mb-4">
        <div
          style={{
            backgroundColor: formScholarship?.primary_color as string,
          }}
          className="min-h-[12px] w-full rounded-t-lg px-5"
        />
        <Card
          className={`relative w-full max-w-3xl shadow-sm`}
          style={{
            backgroundColor: formScholarship?.block_color as string,
            borderRadius: "0.5rem",
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            minHeight: "128px",
            border: 0,
          }}
          styles={{
            body: {
              padding: "4px",
            },
          }}
        >
          {/* Content */}
          <div className="px-5 py-5">
            <div className="flex flex-col flex-wrap gap-2">
              <div className="text-lg font-semibold uppercase">
                Thông tin người điền biểu mẫu:
              </div>
              <div className="ml-1 flex flex-col gap-2">
                <div>
                  <span className="font-medium">- Họ và tên:</span>{" "}
                  {form.getFieldValue("name")}
                </div>
                <div>
                  <span className="font-medium">- Email:</span>{" "}
                  {form.getFieldValue("email")}
                </div>
                <div>
                  <span className="font-medium">- Số điện thoại:</span>{" "}
                  {form.getFieldValue("phone_number")}
                </div>
                {formScholarship?.universities && (
                  <div>
                    <span className="font-medium">- Trường học:</span>{" "}
                    {
                      formScholarship.universities.find(
                        (uni) => uni.id === form.getFieldValue("university"),
                      )?.name
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  const mutationSubmitForm = useMutation({
    mutationFn: async (values: IFormSubmitRequest) => {
      const res: IResponse<IFormSubmitResponse> =
        await submitFormScholarshipService(values);
      return res;
    },
    onSuccess: (data) => {
      if (data && data.data) {
        toast.success(data.message as string);
        form.resetFields();
        setCurrentStep(0);
      }
      if (data && data.error) {
        toast.error(data.message as string);
      }
    },
    onError: () => {
      toast.error("Có lỗi xảy ra khi gửi biểu mẫu");
    },
  });

  const onFinish = (values: IFormSubmitRequest) => {
    if (!formScholarship) return;
    mutationSubmitForm.mutate({
      ...values,
      form_id: formScholarship?.id as string,
    });
  };

  return (
    <div
      style={{
        backgroundColor: formScholarship?.background_color as string,
      }}
      className="min-h-[calc(100vh-70px)] w-full flex-col"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-sm flex-col px-4 py-8 pt-4 sm:px-0">
        {/* Banner */}
        <div
          style={{
            backgroundImage: `url(${formScholarship?.image_url})`,
          }}
          className={`h-[135px] w-full rounded-md bg-gray-300 bg-cover bg-center bg-no-repeat`}
        />
        {/* Render form */}
        <div className="mt-4 w-full">
          <Form
            preserve={true}
            validateTrigger={["onChange", "onBlur"]}
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <div style={{ display: currentStep === 0 ? "block" : "none" }}>
              {renderInforForm(formScholarship)}
            </div>

            {currentStep >= 1 &&
              formSections.map((section, index) => (
                <div
                  key={section.id}
                  style={{
                    display: currentStep === index + 1 ? "block" : "none",
                  }}
                >
                  {renderFilledInforUser()}
                  {renderFormSections(
                    formScholarship,
                    formSections[index],
                    form,
                  )}
                </div>
              ))}

            <div className="mt-4 flex items-center justify-start gap-3">
              {currentStep > 0 && <Button onClick={prevStep}>Quay lại</Button>}
              {currentStep < formSections.length ? (
                <Button type="primary" onClick={nextStep}>
                  Tiếp theo
                </Button>
              ) : (
                <Button
                  loading={mutationSubmitForm.isPending}
                  type="primary"
                  onClick={() => form.submit()}
                >
                  Gửi
                </Button>
              )}
            </div>
          </Form>
        </div>
        {/* Footer form */}
        <div
          style={{
            color: formScholarship?.primary_color as string,
          }}
          className="mt-4 flex w-full flex-col items-center justify-center text-base font-semibold"
        >
          <img src={logo} alt="logo" className="h-[60px]" />
          <div>@E-Form Builder</div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
