import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { Container, TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const modes = {
  ECB: CryptoJS.mode.ECB,
  CBC: CryptoJS.mode.CBC,
};

const paddings = {
  Pkcs7: CryptoJS.pad.Pkcs7,
  Iso97971: CryptoJS.pad.Iso97971,
};

const CryptoContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#0f0',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 10px #0f0',
  textAlign: 'center',
}));

const CryptoText = () => {
  const [text, setText] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [encryptionAlgorithm, setEncryptionAlgorithm] = useState('AES');
  const [mode, setMode] = useState('CBC');
  const [padding, setPadding] = useState('Pkcs7');

  const encryptText = () => {
    let encrypted;
    const options = { mode: modes[mode], padding: paddings[padding] };

    switch (encryptionAlgorithm) {
      case 'AES':
        encrypted = CryptoJS.AES.encrypt(text, secretKey, options);
        break;
      case 'DES':
        encrypted = CryptoJS.DES.encrypt(text, secretKey, options);
        break;
      case 'TripleDES':
        encrypted = CryptoJS.TripleDES.encrypt(text, secretKey, options);
        break;
      case 'Rabbit':
        encrypted = CryptoJS.Rabbit.encrypt(text, secretKey);
        break;
      case 'RC4':
        encrypted = CryptoJS.RC4.encrypt(text, secretKey);
        break;
      // You can add more algorithms here
      default:
        encrypted = 'Invalid Algorithm';
    }

    setEncryptedText(encrypted.toString());
  };

  const decryptText = (encryptedText) => {
    let decrypted;
    const options = { mode: modes[mode], padding: paddings[padding] };

    switch (encryptionAlgorithm) {
      case 'AES':
        decrypted = CryptoJS.AES.decrypt(encryptedText, secretKey, options);
        break;
      case 'DES':
        decrypted = CryptoJS.DES.decrypt(encryptedText, secretKey, options);
        break;
      case 'TripleDES':
        decrypted = CryptoJS.TripleDES.decrypt(encryptedText, secretKey, options);
        break;
      case 'Rabbit':
        decrypted = CryptoJS.Rabbit.decrypt(encryptedText, secretKey);
        break;
      case 'RC4':
        decrypted = CryptoJS.RC4.decrypt(encryptedText, secretKey);
        break;
      // You can add more algorithms here
      default:
        decrypted = 'Invalid Algorithm';
    }

    setDecryptedText(decrypted.toString(CryptoJS.enc.Utf8));
  };

  return (
    <CryptoContainer>
      <Typography variant="h4" gutterBottom>
        Encrypt & Decrypt Text
      </Typography>
      <Box mb={3}>
        <TextField
          label="Text"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ marginBottom: 2, input: { color: '#0f0' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#0f0' } } }}
        />
        <TextField
          label="Secret Key"
          variant="outlined"
          fullWidth
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
          sx={{ marginBottom: 2, input: { color: '#0f0' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#0f0' } } }}
        />
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel sx={{ color: '#0f0' }}>Algorithm</InputLabel>
          <Select
            value={encryptionAlgorithm}
            onChange={(e) => setEncryptionAlgorithm(e.target.value)}
            label="Algorithm"
            sx={{ color: '#0f0', '& .MuiOutlinedInput-notchedOutline': { borderColor: '#0f0' } }}
          >
            <MenuItem value="AES">AES</MenuItem>
            <MenuItem value="DES">DES</MenuItem>
            <MenuItem value="TripleDES">Triple DES</MenuItem>
            <MenuItem value="Rabbit">Rabbit</MenuItem>
            <MenuItem value="RC4">RC4</MenuItem>
          </Select>
        </FormControl>
        {encryptionAlgorithm !== 'Rabbit' && encryptionAlgorithm !== 'RC4' && (
          <>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel sx={{ color: '#0f0' }}>Mode</InputLabel>
              <Select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                label="Mode"
                sx={{ color: '#0f0', '& .MuiOutlinedInput-notchedOutline': { borderColor: '#0f0' } }}
              >
                <MenuItem value="CBC">CBC</MenuItem>
                <MenuItem value="ECB">ECB</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel sx={{ color: '#0f0' }}>Padding</InputLabel>
              <Select
                value={padding}
                onChange={(e) => setPadding(e.target.value)}
                label="Padding"
                sx={{ color: '#0f0', '& .MuiOutlinedInput-notchedOutline': { borderColor: '#0f0' } }}
              >
                <MenuItem value="Pkcs7">Pkcs7</MenuItem>
                <MenuItem value="Iso97971">Iso97971</MenuItem>
              </Select>
            </FormControl>
          </>
        )}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: 3 }}>
        <Button variant="contained" color="primary" onClick={encryptText}>
          Encrypt
        </Button>
        <Button variant="contained" color="secondary" onClick={() => decryptText(encryptedText)}>
          Decrypt
        </Button>
      </Box>
      <Typography variant="body1">
        Encrypted Text: {encryptedText}
      </Typography>
      <Typography variant="body1">
        Decrypted Text: {decryptedText}
      </Typography>
    </CryptoContainer>
  );
};

export default CryptoText;
