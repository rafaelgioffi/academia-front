import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, IconButton } from "@mui/material";
import { ReactComponent as PencilIcon } from "assets/images/icon-pencil.svg";
import { ReactComponent as TrashIcon } from "assets/images/icon-trash.svg";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import {
  TableLineStyled,
  ActionColunmStyled,
  ValueColunmStyled,
} from "./styles";
import { formatCurrency } from "commons/utils/money";

function TableItem({ name, description, value }) {
  const navigate = useNavigate();

  return (
    <TableLineStyled container>
      <Grid item xs={7}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Grid>
      <ValueColunmStyled item xs={3}>
        <Typography variant="body1" fontWeight="bold">
          {formatCurrency(value)}
        </Typography>
      </ValueColunmStyled>
      <ActionColunmStyled item xs={2}>
        <IconButton onClick={() => navigate(ROUTES_PATH.project + '/123')}>
        <PencilIcon />
        </IconButton>
        <IconButton onClick={() => console.log("remover")}>
        <TrashIcon />
        </IconButton>
      </ActionColunmStyled>
    </TableLineStyled>
  );
}

TableItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default TableItem;
