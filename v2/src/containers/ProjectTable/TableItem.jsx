import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as PencilIcon } from "assets/images/icon-pencil.svg";
import { ReactComponent as TrashIcon } from "assets/images/icon-trash.svg";
import { TableLineStyled } from "./styles";

function TableItem({ name, description, value }) {
  return (
    <TableLineStyled container>
      <div className="col-7 description-colunm">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="col-3 value-colunm">
        <span>{value}</span>
      </div>
      <div className="col-2 action-colunm">
        <PencilIcon onClick={() => console.log("editar")} />
        <TrashIcon onClick={() => console.log("remover")} />
      </div>
    </TableLineStyled>
  );
}

TableItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default TableItem;
