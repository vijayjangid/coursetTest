import React from "react";
import { CourseItem } from "../../components/course-item";
import { Grid, Typography, List } from "@material-ui/core";

export const Courses = ({ list }) => (
  <Grid container spacing={2}>
    <Typography variant="h6">Text only</Typography>
    <div>
      <List dense>
        {list.map(({ id, title, author }) => (
          <CourseItem key={id} title={title} author={author} />
        ))}
        , )}
      </List>
    </div>
  </Grid>
);
