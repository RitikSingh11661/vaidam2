import React, { useState } from 'react';
import { Input, VStack, Text, List, ListItem } from '@chakra-ui/react';

export const Search= () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  // Dummy data for recommendations
  const allRecommendations = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

  // Function to update recommendations based on user input
  const updateRecommendations = (input) => {
    const filteredRecommendations = allRecommendations.filter(
      (item) => item.toLowerCase().includes(input.toLowerCase())
    );
    setRecommendations(filteredRecommendations);
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);
    updateRecommendations(input);
  };

  // Function to handle recommendation click
  const handleRecommendationClick = (item) => {
    setSearchTerm(item);
    setRecommendations([]); // Clear recommendations after selection
  };

  return (
    <VStack spacing={4} align="stretch">
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      {recommendations.length > 0 && (
        <List>
          {recommendations.map((item) => (
            <ListItem
              key={item}
              cursor="pointer"
              onClick={() => handleRecommendationClick(item)}
              _hover={{ background: 'gray.100' }}
            >
              {item}
            </ListItem>
          ))}
        </List>
      )}

      {recommendations.length === 0 && searchTerm && (
        <Text color="red">No matching recommendations found.</Text>
      )}
    </VStack>
  );
};
