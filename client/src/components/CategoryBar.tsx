import React, { CSSProperties, useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ProductContext } from './contexts/ProductContext';
import { Link } from 'react-router-dom';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function SelectedListItem() {
  const {categories} = useContext(ProductContext)
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
      <div className={classes.root} style={{ borderBottom: '1px solid lightgray' }}>
          <List component="nav" aria-label="main mailbox folders" style={{ display: 'flex', flexDirection: 'row' }}>
              <ListItem button
                  onClick={(event) => handleListItemClick(event, 1)}>
                      <Link to="/" style={linkStyle}>
                        <ListItemText primary="Alla" />
                      </Link>
              </ListItem>
              {categories.map((category, index) => (
                  <ListItem key={index} button
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}>
                      <ListItemText primary={category} />
                  </ListItem>
              ))}
          </List>
      </div>
  );
}

const linkStyle: CSSProperties = {
	textDecoration: "none",
	color: "black",
};