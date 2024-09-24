import { useState, useEffect } from 'react';

const STORAGE_KEY = 'notes_app_data';

export function useNotes() {
  const [notes, setNotes] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedNotes = localStorage.getItem(STORAGE_KEY);
      return savedNotes ? JSON.parse(savedNotes) : [
        { id: 1, title: 'Welcome Note', content: 'Welcome to your new notes app!' },
        { id: 2, title: 'Ideas', content: 'List your ideas here...' },
      ];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = { id: Date.now(), title: 'New Note', content: '' };
    setNotes([...notes, newNote]);
    return newNote;
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return { notes, addNote, updateNote, deleteNote };
}