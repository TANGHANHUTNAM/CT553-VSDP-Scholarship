import { FaRegDotCircle } from "react-icons/fa";
import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";
import RadioSelectFormComponent from "./RadioSelectFormComponent";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "RadioSelect";

export type RadioSelectAttributes = {
  label: string;
  helperText: string;
  options: string[];
  required: boolean;
  inline: boolean;
};

export const RadioSelectBlock: ObjectBlockType = {
  blockCategory,
  blockType,
  blockBtnElement: {
    icon: FaRegDotCircle,
    label: "Radio Group",
  },
  createInstance: (id: string) => {
    return {
      id: `${id}`,
      blockType,
      isLocked: false,
      attributes: {
        label: "Choose an option",
        helperText: "Helper Text",
        options: ["Option 1", "Option 2", "Option 3"],
        required: true,
        inline: false,
      },
    };
  },

  formComponent: RadioSelectFormComponent,
};

export const styleRadioSelectInline: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

export type NewInstanceRadioSelect = FormBlockInstance & {
  attributes: RadioSelectAttributes;
};
