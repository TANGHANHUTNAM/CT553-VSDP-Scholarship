import { BiCommentEdit } from "react-icons/bi";

import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";
import EditorDescriptionCanvasFormComponent from "./EditorDescriptionCanvasFormComponent";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "EditorDescription";

export type EditorDescriptionAttributesType = {
  content: string;
};

export type NewInstanceEditorDescription = FormBlockInstance & {
  attributes: EditorDescriptionAttributesType;
};

export const EditorDescriptionBlock: ObjectBlockType = {
  blockType,
  blockCategory,
  createInstance: (id: string) => ({
    id,
    blockType,
    attributes: {
      content: "Editor Description",
    },
  }),
  blockBtnElement: {
    icon: BiCommentEdit,
    label: "Editor Description",
  },

  formComponent: EditorDescriptionCanvasFormComponent,
};
