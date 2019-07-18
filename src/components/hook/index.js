import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProjects } from "../../actions/projectsAction";
import * as selectors from "../../selectors/projectsSelector.js";

const Hook = ({ projects, getProjects }) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);
  return (
    <div className="projects-container">
      <div className="top-navigation-bar">
        <h3 align="left">Projects Lists</h3>
        <form>
          <input type="text" placeholder="Search by description..." />
        </form>
        <button>Button</button>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Description</th>
            <th scope="col">Start Date</th>
            <th scope="col">Category</th>
            <th scope="col">Responsible</th>
            <th scope="col">Savings Amount</th>
            <th scope="col">Currency</th>
            <th scope="col">Complexity</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr>
              <td data-label="Id">{project.project}</td>
              <td data-label="Description">{project.description}</td>
              <td data-label="Start Date" />
              <td data-label="Category">{project.category}</td>
              <td data-label="Responsible">{project.responsible}</td>
              <td data-label="Savings Amount">{project["savings amount"]}</td>
              <td data-label="Currency">{project.currency !== "NULL" ? project.currency : ""}</td>
              <td data-label="Complexity">{project.complexity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = state => ({
  //projects: state.projects.projects,
  projects: selectors.projectSelector(state),
});
export default connect(
  mapStateToProps,
  { getProjects },
)(Hook);
