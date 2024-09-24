import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import NoteEditor from './NoteEditor';
import AuthForm from './AuthForm';
import Footer from './Footer';
import { useNotes } from '../hooks/useNotes';
import { useAuth } from '../hooks/useAuth';

export default function NotesApp() {
  const { notes, addNote, updateNote, deleteNote } = useNotes();
  const [selectedNote, setSelectedNote] = useState(notes[0] || null);
  const { user, login, signup, logout } = useAuth();

  const handleAddNote = () => {
    const newNote = addNote();
    setSelectedNote(newNote);
  };

  const handleUpdateNote = (updatedNote) => {
    updateNote(updatedNote);
    setSelectedNote(updatedNote);
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
    setSelectedNote(notes.length > 1 ? notes[0] : null);
  };

  if (!user) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AuthForm onLogin={login} onSignup={signup} />
        </Box>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar
          notes={notes}
          selectedNote={selectedNote}
          onSelectNote={setSelectedNote}
          onAddNote={handleAddNote}
          onDeleteNote={handleDeleteNote}
          onLogout={logout}
        />
        <NoteEditor
          note={selectedNote}
          onUpdateNote={handleUpdateNote}
        />
      </Box>
      <Footer />
    </Box>
  );
}