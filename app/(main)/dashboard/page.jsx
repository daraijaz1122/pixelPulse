"use client";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BarLoader } from "react-spinners";
import { NewProjectModal } from "@/app/_components/NewProjectModel";
import ProjectGrid from "@/app/_components/project-grid";

const dashboard = () => {
  const { user } = useUser();
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const { data: projects, isLoading } = useConvexQuery(
    api?.projects?.getUserProjects
  );

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl fond-bold text-white mb-2">
              Your Projects
            </h1>
            <p className="text-white/70">
              Create and manage your AI-powered image designs
            </p>
          </div>
          <Button
            onClick={() => setShowNewProjectModal(true)}
            variant={"primary"}
            size="lg"
            className="gap-2"
          >
            <Plus className="h-5 w-5" />
            New Project
          </Button>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
          </div>
        ) : projects && projects.length > 0 ? (
          <ProjectGrid projects={projects} />
        ) : (
          " rfce"
          // <EmptyState onCreateProject={() => setShowNewProjectModal(true)} />
        )}

        {/* New Project Modal */}
        <NewProjectModal
          isOpen={showNewProjectModal}
          onClose={() => setShowNewProjectModal(false)}
        />
      </div>
    </div>
  );
};

export default dashboard;
