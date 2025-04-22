import { FiEdit3 } from "react-icons/fi";

import EditorTextFormComponent from "./EditorTextFormComponent";
import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "EditorText";

export type EditorTextAttributesType = {
  label: string;
  helperText: string;
  required: boolean;
  placeHolder: string;
};

export type NewInstanceEditorText = FormBlockInstance & {
  attributes: EditorTextAttributesType;
};

export const EditorTextBlock: ObjectBlockType = {
  blockType,
  blockCategory,
  createInstance: (id: string) => ({
    id,
    blockType,
    attributes: {
      label: "Editor Text",
      helperText: "Helper Text",
      required: true,
      placeHolder: "Enter text here.",
    },
  }),
  blockBtnElement: {
    icon: FiEdit3,
    label: "Editor Text",
  },

  formComponent: EditorTextFormComponent,
};
