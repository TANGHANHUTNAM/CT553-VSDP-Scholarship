import { FormInstance } from "antd";
import { RowLayoutBlock } from "../../common/components/block/layouts/RowLayout";
import { HeadingBlock } from "../../common/components/block/heading/HeadingBlock";
import { InputTextBlock } from "../../common/components/block/input-text/InputTextBlock";
import { TextAreaBlock } from "../../common/components/block/text-area/TextAreaBlock";
import { InputNumberBlock } from "../../common/components/block/input-number/InputNumberBlock";
import { EditorTextBlock } from "../../common/components/block/editor-text/EditorTextBlock";
import { SelectOptionBlock } from "../../common/components/block/select-option/SelectOption";
import { RadioSelectBlock } from "../../common/components/block/radio-select/RadioSelectBlock";
import { ParagraphBlock } from "../../common/components/block/paragraph/ParagraphBlock";
import { DatePickerBlock } from "../../common/components/block/datepicker/DatePickerBlock";
import { CheckBoxBlock } from "../../common/components/block/check-box/CheckBoxBlock";
import { TimePickerBlock } from "../../common/components/block/timepicker/TimePickerBlock";
import { RangePickerBlock } from "../../common/components/block/rangepicker/RangePickerBlock";
import { SignatureBlock } from "../../common/components/block/signature/SignatureBlock";
import { UploaderBlock } from "../../common/components/block/uploader/UploaderBlock";
import { LinkBlock } from "../../common/components/block/link/LinkBlock";
import { EditorDescriptionBlock } from "../../common/components/block/description/EditorDescriptionBlock";

export type FormCategoryType = "Layout" | "Field";
export type FormBlockType =
  | "RowLayout"
  | "RadioSelect"
  | "InputText"
  | "TextArea"
  | "Heading"
  | "Paragraph"
  | "SelectOption"
  | "InputNumber"
  | "EditorText"
  | "DatePicker"
  | "CheckBox"
  | "TimePicker"
  | "RangePicker"
  | "Signature"
  | "Uploader"
  | "Link"
  | "EditorDescription";

export const FormNotInputBlockTypes: FormBlockType[] = [
  "RowLayout",
  "Heading",
  "Paragraph",
  "Link",
  "EditorDescription",
];

export type ObjectBlockType = {
  blockCategory: FormCategoryType;
  blockType: FormBlockType;
  blockBtnElement: {
    icon: React.ElementType;
    label: string;
  };
  createInstance: (id: string) => FormBlockInstance;
  // canvasComponent: React.FC<{ blockInstance: FormBlockInstance }>;
  formComponent: React.FC<{
    blockInstance: FormBlockInstance;
    primary_color: string;
    block_color: string;
    form: FormInstance;
  }>;
  // propertiesComponent: React.FC<{
  //   positionIndex?: number;
  //   blockInstance: FormBlockInstance;
  //   parentId?: string;
  // }>;
};

export type FormBlockInstance = {
  id: string;
  blockType: FormBlockType;
  attributes?: Record<string, unknown>;
  isLocked?: boolean;
  childBlock?: FormBlockInstance[];
};

export type FormBlocksType = {
  [key in FormBlockType]: ObjectBlockType;
};

export const FormBlocks: FormBlocksType = {
  RowLayout: RowLayoutBlock,
  Heading: HeadingBlock,
  InputText: InputTextBlock,
  TextArea: TextAreaBlock,
  InputNumber: InputNumberBlock,
  EditorText: EditorTextBlock,
  SelectOption: SelectOptionBlock,
  RadioSelect: RadioSelectBlock,
  Paragraph: ParagraphBlock,
  DatePicker: DatePickerBlock,
  CheckBox: CheckBoxBlock,
  TimePicker: TimePickerBlock,
  RangePicker: RangePickerBlock,
  Signature: SignatureBlock,
  Uploader: UploaderBlock,
  Link: LinkBlock,
  EditorDescription: EditorDescriptionBlock,
};
