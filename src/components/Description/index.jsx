import React from 'react';
import { Fragment } from 'react';
import { Stack, Typography } from '@mui/material';
import PaperInformation from '../PaperInformation'
import LocationInformation from '../LocationInformation';

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <Fragment>
      <Stack sx={{
        justifyContent:"center"
      }}>
        {bio !== null ? (
          <Typography variant="body1"> {bio} </Typography>
        ) : (
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex soluta
            qui reiciendis quaerat, illo culpa porro laboriosam quasi tenetur
            laborum cum, laudantium impedit veniam neque placeat error aut
            praesentium! Velit?
          </Typography>
        )}
      </Stack>
      <PaperInformation userState = {userState}/>
         <LocationInformation userState={userState}/>
    </Fragment>
  );
};

export default Description;
