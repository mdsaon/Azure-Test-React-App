import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getProjects, searchProjects } from "../../actions/projectsAction";
import * as selectors from "../../selectors/projectsSelector.js";

const Hook = ({ projects, getProjects, search, searchProjects }) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  const [filter, setFilter] = useState(false);

  const searchHandler = e => {
    const value = e.target.value.toLowerCase();
    if (value.length > 0) {
      setFilter({ filter: true });
      searchProjects(value);
    }
  };
  const items = projects.map(project => (
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
  ));
  const filterItems = search.map(project => (
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
  ));
  return (
    <div className="projects-container">
      <div className="top-navigation-bar">
        <h3 align="left">Projects Lists</h3>
        <form>
          <input type="text" onChange={searchHandler} placeholder="Search by description..." />
        </form>
        <button>Sort</button>
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
        <tbody>{!filter ? items : filterItems})</tbody>
      </table>
    </div>
  );
};
const mapStateToProps = state => ({
  //projects: state.projects.projects,
  projects: selectors.projectSelector(state),
  search: selectors.filterSelector(state),
});
export default connect(
  mapStateToProps,
  { getProjects, searchProjects },
)(Hook);
