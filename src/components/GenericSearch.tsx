import React, { useState, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

interface ContentItem {
  id: string;
  text: string;
}

interface GenericSearchProps {
  content: ContentItem[];
  label?: string;
}

export const GenericSearch: React.FC<GenericSearchProps> = ({ content, label = "Search in Inquiry Text" }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const filteredContent = useMemo(() => {
    if (!searchTerm) {
      return content;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return content.filter(item =>
      item.text.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.id.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [content, searchTerm]);

  const handleToggleSearch = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setSearchTerm('');
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      {!isExpanded ? (
        <IconButton onClick={handleToggleSearch} color="primary" aria-label="open search">
          <SearchIcon />
        </IconButton>
      ) : (
        <TextField
          label={label}
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleSearch} edge="end" aria-label="close search">
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
      {isExpanded && (
        <Box>
          {filteredContent.length > 0 ? (
            filteredContent.map((item) => (
              <Typography key={item.id} id={item.id} variant="body1" paragraph>
                {item.text}
              </Typography>
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              No matching content found.
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};