import { Checkbox, Form } from "antd";

import { NewInstanceCheckBox, styleCheckBoxInline } from "./CheckBoxBlock";
import { FormBlockInstance } from "../../../../interface/form-blocks";

const CheckBoxFormComponent = ({
  blockInstance,
}: {
  blockInstance: FormBlockInstance;
}) => {
  const block = blockInstance as NewInstanceCheckBox;
  const { helperText, label, required, inline, options } = block.attributes;

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <Form.Item
        colon={true}
        label={label}
        extra={helperText}
        htmlFor={block?.id}
        name={block?.id}
        rules={[{ required: required, message: `Vui lòng chọn ${label}` }]}
      >
        <Checkbox.Group
          className=""
          style={!inline ? styleCheckBoxInline : {}}
          options={options.map((option) => ({
            label: option,
            value: option,
          }))}
        />
      </Form.Item>
    </div>
  );
};

export default CheckBoxFormComponent;
