import React from "react";
import { TOOL_CONFIGS } from "../_data/editor-tools";
import { useCanvas } from "@/context/Context";
import renderToolConfig from "./render-tool-fns";
const EditorSideBar = ({ project }) => {
  const { activeTool } = useCanvas();
  const toolConfig = TOOL_CONFIGS[activeTool];
  if (!toolConfig) {
    return null;
  }
  const Icon = toolConfig.icon;
  console.log(activeTool, "active tool");

  return (
    <div className="min-w-96 border-r flex flex-col">
      <div className="  p-4 border-b ">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-white" />
          <h2 className="text-lg font-semibold text-white">
            {toolConfig.title}
          </h2>
        </div>
        <p className="text-sm text-white mt-1 ">{toolConfig.description}</p>
      </div>

      <div className="flex-1 p-4 overflow-y-scroll">
        {renderToolConfig(activeTool, project)}
      </div>
    </div>
  );
};

export default EditorSideBar;
