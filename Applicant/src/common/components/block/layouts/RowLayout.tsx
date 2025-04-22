import { FiLayout } from "react-icons/fi";

import RowLayoutFormComponent from "./RowLayoutFormComponent";
import {
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";

const blockCategory: FormCategoryType = "Layout";
const blockType: FormBlockType = "RowLayout";

export const RowLayoutBlock: ObjectBlockType = {
  blockCategory,
  blockType,
  blockBtnElement: {
    icon: FiLayout,
    label: "Row Layout",
  },
  createInstance: (id: string) => {
    return {
      id: `layout-${id}`,
      blockType,
      isLocked: false,
      attributes: {},
      childBlock: [],
    };
  },

  formComponent: RowLayoutFormComponent,
};
