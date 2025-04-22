import { FormBlockInstance } from "../../../../interface/form-blocks";
import { NewInstanceEditorDescription } from "./EditorDescriptionBlock";
import parse from "html-react-parser";

const EditorDescriptionCanvasFormComponent = ({
  blockInstance,
}: {
  blockInstance: FormBlockInstance;
}) => {
  const block = blockInstance as NewInstanceEditorDescription;
  const { content } = block.attributes;
  return (
    <div className="flex w-full">
      <div className="prose">{parse(content)}</div>
    </div>
  );
};
export default EditorDescriptionCanvasFormComponent;
