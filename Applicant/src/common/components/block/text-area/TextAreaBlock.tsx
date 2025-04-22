import { BsTextareaT } from "react-icons/bs";
import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";
import TextAreaFormComponent from "./TextAreaFormComponent";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "TextArea";

export type TextAreaAttributesType = {
  label: string;
  helperText: string;
  required: boolean;
  placeHolder: string;
  min: number;
  max: number;
  rows: number;
  size: "small" | "middle" | "large";
};

export type NewInstanceTextArea = FormBlockInstance & {
  attributes: TextAreaAttributesType;
};

export const TextAreaBlock: ObjectBlockType = {
  blockType,
  blockCategory,
  createInstance: (id: string) => ({
    id,
    blockType,
    attributes: {
      label: "Text Area",
      helperText: "Helper Text",
      required: true,
      placeHolder: "Enter text here.",
      rows: 3,
      min: 0,
      max: 255,
      size: "middle",
    },
  }),
  blockBtnElement: {
    icon: BsTextareaT,
    label: "Text Area",
  },
  formComponent: TextAreaFormComponent,
};
