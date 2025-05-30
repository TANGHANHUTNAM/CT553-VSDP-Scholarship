import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../interfaces/form-block";
import { MdOutlineFileUpload } from "react-icons/md";
import UploaderCanvasComponent from "./UploaderCanvasComponent";
import UploaderFormComponent from "./UploaderFormComponent";
import UploaderPropertiesComponent from "./UploaderPropertiesComponent";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "Uploader";

export type UploaderAttributesType = {
  label: string;
  helperText: string;
  required: boolean;
  textButton: string;
  sizeMax: number;
  numberMax: number;
  type: string[];
  size: "small" | "middle" | "large";
};

export type NewInstanceUploader = FormBlockInstance & {
  attributes: UploaderAttributesType;
};

export const UploaderBlock: ObjectBlockType = {
  blockType,
  blockCategory,
  createInstance: (id: string) => ({
    id,
    blockType,
    attributes: {
      label: "Uploader",
      helperText: "Helper Text",
      required: true,
      sizeMax: 5,
      numberMax: 1,
      textButton: "Click to Upload",
      type: [],
      size: "middle",
    },
  }),
  blockBtnElement: {
    icon: MdOutlineFileUpload,
    label: "Uploader",
  },
  canvasComponent: UploaderCanvasComponent,
  formComponent: UploaderFormComponent,
  propertiesComponent: UploaderPropertiesComponent,
};
