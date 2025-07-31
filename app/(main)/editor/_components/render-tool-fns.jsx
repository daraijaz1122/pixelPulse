import AdjustTool from "./tools/adjust";
import CropTool from "./tools/crop";
import ResizeTool from "./tools/resize";

export default function renderToolConfig(activeTool, project) {
  switch (activeTool) {
    case "crop":
      return <CropTool />;
    case "resize":
      return <ResizeTool project={project} />;
    case "adjust":
      return <AdjustTool />;
    default:
      return <div className="text-white">Select a tool to get started</div>;
  }
}
