import { FaPenToSquare } from "react-icons/fa6";
import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";
import InputTextFormComponent from "./InputTextFormComponent";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "InputText";

export type InputTextAttributesType = {
  label: string;
  helperText: string;
  required: boolean;
  placeHolder: string;
  min: number;
  max: number;
  type: "string" | "number" | "boolean" | "url" | "email";
  size: "small" | "middle" | "large";
  prefix: string;
  suffix: string;
  readOnly: boolean;
};

export type NewInstanceInputText = FormBlockInstance & {
  attributes: InputTextAttributesType;
};

export const InputTextBlock: ObjectBlockType = {
  blockType,
  blockCategory,
  createInstance: (id: string) => ({
    id,
    blockType,
    attributes: {
      label: "Input Text",
      helperText: "Helper Text",
      required: true,
      placeHolder: "Enter text here.",
      min: 0,
      max: 255,
      type: "string",
      size: "middle",
      prefix: "",
      suffix: "",
      readOnly: false,
    },
  }),
  blockBtnElement: {
    icon: FaPenToSquare,
    label: "Input Text",
  },

  formComponent: InputTextFormComponent,
};
