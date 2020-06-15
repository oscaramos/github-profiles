import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const SnackbarMessage = ({ open, handleClose, message }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      message={message}
    />
  );
};

export default SnackbarMessage;
