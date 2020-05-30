import React, { Fragment } from "react";

import {
  Grid,
  Paper,
  Typography,
  ListItem,
  ListItemText,
  List,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import Form from "./Form";
const styles = {
  paper: {
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
  },
};

const Content = ({
  onEdit,
  exercise,
  onDelete,
  muscles,
  editMode,
  onHandleEdit,
  exercises,
  category,
  onSubmit,
  exercise: {
    id,
    description = "choose any exercise to get all details",
    title = "Welcome!",
  },
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper style={styles.paper}>
          {exercises.map(([group, exercises1]) =>
            !category || category === group ? (
              <Fragment>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>

                <List component="ul">
                  {exercises1.map(({ id, title }) => (
                    <ListItem
                      button
                      onClick={() => {
                        onSubmit(id);
                      }}
                    >
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onHandleEdit(id)}>
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => onDelete(id)}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper style={styles.paper}>
          {editMode ? (
            <Form muscles={muscles} onSubmit={onEdit} exercise={exercise} />
          ) : (
            <Fragment>
              <Typography variant="h3">{title}</Typography>
              <Typography variant="subtitle1" style={{ marginTop: 20 }}>
                {description}
              </Typography>
            </Fragment>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Content;
