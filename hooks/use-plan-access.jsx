// import { useAuth } from "@clerk/nextjs";

// export function usePlanAccess() {
//   const { has } = useAuth();
//   const isPro = has?.({ plan: "free" }) || false;
//   const isFree = isPro;

//   const planAccess = {
//     resize: true,
//     crop: true,
//     adjust: true,
//     text: true,

//     background: isPro,
//     ai_extender: isPro,
//     ai_edit: isPro,
//   };
//   const hasAccess = (toolId) => {
//     return planAccess[toolId] === true;
//   };
//   const getRestrictedTools = () => {
//     return Object.entries(planAccess)
//       .filter(([_, hasAccess]) => !hasAccess)
//       .map(([toolId]) => toolId);
//   };
//   const canCreateProject = (currentProjectCount) => {
//     if (isPro) return true;
//     return currentProjectCount < 3;
//   };

//   const canExport = (currentExportsThisMonth) => {
//     if (isPro) return true;
//     return currentExportsThisMonth < 20;
//   };

//   return {
//     userPlan: isPro ? "pro" : "free_user",
//     isPro,
//     isFree,
//     hasAccess,
//     planAccess,
//     getRestrictedTools,
//     canCreateProject,
//     canExport,
//   };
// }
import { useAuth } from "@clerk/nextjs";

export function usePlanAccess() {
  // TEMPORARY: force full access while billing is disabled
  const isPro = true;
  const isFree = false;

  const planAccess = {
    resize: true,
    crop: true,
    adjust: true,
    text: true,
    background: true, // previously gated
    ai_extender: true, // previously gated
    ai_edit: true, // previously gated
  };

  const hasAccess = (toolId) => {
    return planAccess[toolId] === true;
  };

  const getRestrictedTools = () => {
    return []; // all tools available
  };

  const canCreateProject = (currentProjectCount) => {
    return true; // no limit
  };

  const canExport = (currentExportsThisMonth) => {
    return true; // unlimited exports
  };

  return {
    userPlan: "pro",
    isPro,
    isFree,
    hasAccess,
    planAccess,
    getRestrictedTools,
    canCreateProject,
    canExport,
  };
}
