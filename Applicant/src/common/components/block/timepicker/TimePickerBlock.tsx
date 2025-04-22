import { IoIosTimer } from "react-icons/io";
import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";
import TimePickerFormComponent from "./TimePickerFormComponent";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "TimePicker";

export type TimePickerAttributesType = {
  label: string;
  helperText: string;
  required: boolean;
  placeHolder: string;
  formatTime: "HH" | "HH:mm" | "HH:mm:ss";
  size: "large" | "middle" | "small";
};

export type NewInstanceTimePicker = FormBlockInstance & {
  attributes: TimePickerAttributesType;
};

export const TimePickerBlock: ObjectBlockType = {
  blockType,
  blockCategory,
  createInstance: (id: string) => ({
    id,
    blockType,
    attributes: {
      label: "TimePicker",
      helperText: "Helper Text",
      required: true,
      placeHolder: "Choose time here.",
      formatTime: "HH:mm:ss",
      size: "middle",
    },
  }),
  blockBtnElement: {
    icon: IoIosTimer,
    label: "TimePicker",
  },

  formComponent: TimePickerFormComponent,
};
