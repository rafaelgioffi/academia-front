import styled from "styled-components";
import { Grid } from "@mui/material";

export const TableLineStyled = styled(Grid)`
    border-bottom: 1px solid rgba(196, 196, 0.35);
    padding: 16px 0;
    
    &:last-child {
        border: none;
    }
`