"use client";
import { CanvasContext } from "@/context/Context";
import { Monitor } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { RingLoader } from "react-spinners";
import Canvas from "../_components/Canvas";

const page = () => {
  const params = useParams();
  const [canvasEditor, setCanvasEditor] = useState(null);
  const [processingMessage, setProcessingMessage] = useState(null);
  const [activeTool, setActiveTool] = useState("resize");
  const projectId = params.projectId;

  return (
    <CanvasContext.Provider
      value={{
        canvasEditor,
        setCanvasEditor,
        activeTool,
        onToolChange: setActiveTool,
        processingMessage,
        setProcessingMessage,
      }}
    >
      <div className="lg:hidden min-h-screen bg-slate-900 flex items-center justify-center p-6">
        <div className=" text-center max-w-md">
          <Monitor className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
          <h1 className="text-white/70 text-lg mb-2 font-semibold">
            {" "}
            Desktop Required
          </h1>
          <p className="text-white/70 text-lg mb-2">
            This Editor is only usable on desktop
          </p>
          <p className="text-white/50 text-sm">
            Please use a larger screen to access the full editing experience.
          </p>
        </div>
      </div>
      <div className="hidden lg:block min-h-screen bg-slate-900">
        <div className="flex flex-col h-screen">
          {processingMessage && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center">
              <div className="rounded-lg p-6 flex flex-col items-center gap-4">
                <RingLoader color="#fff" />
                <div className="text-center">
                  <p className="text-white font-medium"> {processingMessage}</p>
                  <p className="text-white/70 text-sm mt-1">
                    Please wait, do not switch tabs or navigate away
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* top bar */}
          <div className="flex flex-1 overflow-hidden">
            {/* slider */}
            <div className="flex-1 bg-slate-800">
              <Canvas project={"project"} />
            </div>
          </div>
        </div>
      </div>
    </CanvasContext.Provider>
  );
};

export default page;
