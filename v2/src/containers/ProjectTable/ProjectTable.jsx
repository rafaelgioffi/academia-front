import React from "react";
import PropTypes from "prop-types";
import TableItem from "./TableItem";
import { ActionColunmStyled, TableContainerStyled, ValueColunmStyled } from "./styles";
import { Grid, Typography } from "@mui/material";
import { SANTAS_GRAY } from "commons/constants/colors";

function ProjectTable({ projectData }) {
  return (
    <TableContainerStyled>
      <Grid container>
        <Grid item xs={7}>
          <Typography color={SANTAS_GRAY} fontWeight="bold">Título</Typography>
        </Grid>
        <ValueColunmStyled item xs={3}>
          <Typography color={SANTAS_GRAY} fontWeight="bold">Custo Total</Typography>
        </ValueColunmStyled>
        <ActionColunmStyled item xs={2}>
          <Typography color={SANTAS_GRAY} fontWeight="bold">Ações</Typography>
        </ActionColunmStyled>
      </Grid>
      {projectData?.map(({ title, description, value }) => (
        <TableItem
          key={title}
          title={title}
          description={description}
          value={value}
        />
      ))}
    </TableContainerStyled>
  );
}

ProjectTable.propTypes = {
  projectData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProjectTable;
