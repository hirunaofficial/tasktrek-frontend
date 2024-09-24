import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon, Button } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon, NoteAlt as NoteIcon, Logout as LogoutIcon } from '@mui/icons-material';

export default function Sidebar({ notes, selectedNote, onSelectNote, onAddNote, onDeleteNote, onLogout }) {
  return (
    <Box sx={{ width: 250, borderRight: 1, borderColor: 'divider' }}>
      <Box sx={{ p: 2 }}>
        <Button fullWidth variant="contained" startIcon={<AddIcon />} onClick={onAddNote} sx={{ mb: 1 }}>
          New Note
        </Button>
        <Button fullWidth variant="outlined" startIcon={<LogoutIcon />} onClick={onLogout}>
          Logout
        </Button>
      </Box>
      <List sx={{ overflow: 'auto', maxHeight: 'calc(100vh - 150px)' }}>
        {notes.map(note => (
          <ListItem
            key={note.id}
            button
            selected={selectedNote?.id === note.id}
            onClick={() => onSelectNote(note)}
          >
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary={note.title} />
            <ListItemIcon onClick={(e) => { e.stopPropagation(); onDeleteNote(note.id); }}>
              <DeleteIcon />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}