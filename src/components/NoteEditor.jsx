import React from 'react';
import { Box, TextField } from '@mui/material';

export default function NoteEditor({ note, onUpdateNote }) {
  if (!note) {
    return (
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TextField
          disabled
          fullWidth
          placeholder="Select a note or create a new one"
        />
      </Box>
    );
  }

  return (
    <Box sx={{ flex: 1, p: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        value={note.title}
        onChange={(e) => onUpdateNote({ ...note, title: e.target.value })}
        placeholder="Note Title"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        multiline
        rows={20}
        variant="outlined"
        value={note.content}
        onChange={(e) => onUpdateNote({ ...note, content: e.target.value })}
        placeholder="Start typing your note here..."
      />
    </Box>
  );
}