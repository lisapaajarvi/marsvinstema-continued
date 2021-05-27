import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import { ProductContext } from './contexts/ProductContext';

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
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders" style={{display: 'flex', flexDirection: 'row'}}>

      <ListItem button
                onClick={(event) => handleListItemClick(event, 1)}>
                    <ListItemText primary="Alla"/>
                </ListItem>

      {categories.map((category, index) => (
                <ListItem key={index} button
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}>
                    <ListItemText primary={category}/>
                </ListItem>
            ))}

      </List>
      {/* <Divider /> */}
    </div>
  );
}