import AdjustTool from "./tools/adjust";
import { AIEdit } from "./tools/ai-edit";
import { AIExtenderControls } from "./tools/ai-extend";
import { BackgroundTool } from "./tools/background-controls";
import { CropTool } from "./tools/crop";
import ResizeTool from "./tools/resize";
import { TextControls } from "./tools/text-controls";

export default function renderToolConfig(activeTool, project) {
  switch (activeTool) {
    case "crop":
      return <CropTool />;
    case "resize":
      return <ResizeTool project={project} />;
    case "adjust":
      return <AdjustTool />;
    case "background":
      return <BackgroundTool project={project} />;
    case "text":
      return <TextControls />;
    case "ai_extender":
      return <AIExtenderControls project={project} />;
    case "ai_edit":
      return <AIEdit project={project} />;
    default:
      return <div className="text-white">Select a tool to get started</div>;
  }
}
