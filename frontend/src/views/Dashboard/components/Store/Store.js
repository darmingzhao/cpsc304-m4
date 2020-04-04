import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, Dialog, DialogTitle, DialogContent, 
  DialogContentText, DialogActions, Card, CardContent, Grid, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const Store = props => {
  const { className, ...rest } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
            </Typography>
            <Typography variant="h2">{props.name}</Typography>
            <Typography>email@gmail.com</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" align="right">Amount Desired</Typography>
            <Typography align="right">{props.numInvestors} investors </Typography>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <Typography
            className={classes.caption}
            variant="caption"
          >
            {props.description}
          </Typography>
          <Grid>
            <Button color="primary" onClick={handleClickOpen}>Donate</Button>
          </Grid>
        </div>
      </CardContent>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"><h1> Donation towards '{props.name}'</h1></DialogTitle>
        <DialogContent>
          <DialogContentText align="center">
            {props.description}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="donation"
            label="Enter a donation amount in dollars"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Donate
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

Store.propTypes = {
  className: PropTypes.string
};

export default Store;
