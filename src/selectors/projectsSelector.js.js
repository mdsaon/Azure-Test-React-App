import { createSelector } from "reselect";

export const projectSelector = state => state.projects.projects;
export const searchSelector = state => state.projects.searchTerms;

// export const searchSelector = createSelector(
//   projectSelector,
//   projects => {
//     return projects.filter(project => project.description.indexOf(value !== -1));
//   },
// );

// export const filterSelector = createSelector(
//   [projectSelector, searchSelector],
//   (projects, searchTerms) => {
//     // return projects.filter(project => project.description.match(new RegExp(searchTerms, "i")));
//     return projects.filter(project => project.description.indexOf(searchTerms !== -1));
//   },
// );

// export const searchSelector = createSelector(
//   projectSelector,
//   projects => {
//     return projects.filter(project => project.description.indexOf(value !== -1));
//   },
// );
export const filterSelector = createSelector(
  projectSelector,
  searchSelector,
  (projects, searchTerms) =>
    projects.filter(project => project.description.toLowerCase().includes(searchTerms.toLowerCase())),
);
