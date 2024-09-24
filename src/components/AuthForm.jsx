import React, { useState } from 'react';
import { Box, TextField, Button, Card, CardContent, Typography } from '@mui/material';

export default function AuthForm({ onLogin, onSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      onLogin(email, password);
    } else {
      onSignup(email, password);
    }
  };

  return (
    <Card sx={{ width: 350 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 2, textAlign: 'center' }}>
          Welcome to NotesApp
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" fullWidth>
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
          <Button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}