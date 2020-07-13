import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { task } from '../types/task';

export interface ActionsMenuProps {
  task: task;
  onDelete: (item: task) => void;
  onDuplicate: (item: task) => void;
  onEdit: (item: task) => void;
}

export const ActionsMenu = (props: ActionsMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { task } = props;

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteItem = () => {
    props.onDelete(task);
    handleClose();
  }

  const duplicateItem = () => {
    props.onDuplicate(props.task);
    handleClose();
  }

  const editItem = () => {
    props.onEdit(props.task);
    handleClose();
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={openMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        <MenuItem key="edit" onClick={editItem}>
          Edit
        </MenuItem>
        <MenuItem key="duplicate" onClick={duplicateItem}>
          Duplicate
        </MenuItem>
        <MenuItem key="delete" onClick={deleteItem}>
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}