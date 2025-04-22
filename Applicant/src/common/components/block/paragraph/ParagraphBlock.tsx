import { FaParagraph } from "react-icons/fa";
import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";

import ParagraphCanvasFormComponent from "./ParagraphCanvasFormComponent";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "Paragraph";

export type ParagraphAttributesType = {
  label: string;
  text: string;
  fontSize: "text-sm" | "text-base" | "text-lg";
  fontWeight: "font-normal" | "font-medium";
};

export type NewInstanceParagraph = FormBlockInstance & {
  attributes: ParagraphAttributesType;
};

export const ParagraphBlock: ObjectBlockType = {
  blockType,
  blockCategory,
  createInstance: (id: string) => ({
    id,
    blockType,
    attributes: {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ipsam distinctio eveniet expedita ex nemo dolorem saepe, consectetur, et nobis vero labore assumenda quidem repudiandae non id necessitatibus. Fugiat, consequuntur.",
      fontSize: "text-sm",
      fontWeight: "font-normal",
    },
  }),

  blockBtnElement: {
    icon: FaParagraph,
    label: "Paragraph",
  },

  formComponent: ParagraphCanvasFormComponent,
};
