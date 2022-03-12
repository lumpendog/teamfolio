import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UniversalBreadcrumbs = ({ input }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {input.map((el) => {
        return el.path ? (
          <Link to={el.path}>{el.name}</Link>
        ) : (
          <Typography color="text.primary">{el.name}</Typography>
        );
      })}
    </Breadcrumbs>
  );
};
UniversalBreadcrumbs.propTypes = {
  input: PropTypes.array,
};

export default UniversalBreadcrumbs;
