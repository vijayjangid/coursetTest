import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

export const CourseItem = ({ title, author }) => (
  <ListItem>
    <ListItemText primary={title} secondary={author} />
  </ListItem>
);
