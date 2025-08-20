import React from "react";
import PropTypes from "prop-types";
import TableItem from "./TableItem";
import "./style.css";

function ProjectTable({ projectData }) {
  return (
    <div className="table-container">
      <div className="row">
        <div className="col-7 description-colunm">
          <h4>Título</h4>
        </div>
        <div className="col-3 value-colunm">
          <h4>Custo Total</h4>
        </div>
        <div className="col-2 action-colunm">
          <h4>Ações</h4>
        </div>
      </div>
      {projectData?.map(({ name, description, value }) => (
        <TableItem
          key={name}
          name={name}
          description={description}
          value={value}
        />
      ))}
    </div>
  );
}

ProjectTable.propTypes = {
  projectData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProjectTable;
