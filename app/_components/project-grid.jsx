"use client";
import React from "react";
import ProjectsCard from "./projects-card";
import { useRouter } from "next/navigation";

const ProjectGrid = ({ projects }) => {
  console.log(projects);
  const router = useRouter();
  const handleEditProject = (projectId) => {
    router.push(`/editor/${projectId}`);
  };
  return (
    <div>
      {projects.map((project) => (
        <ProjectsCard
          key={project._id}
          project={project}
          onEdit={() => handleEditProject(project._id)}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
