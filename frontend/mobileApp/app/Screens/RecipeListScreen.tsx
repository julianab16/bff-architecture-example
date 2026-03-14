import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { fetchRecipes } from '@/Services/Recipes/recipes-service';
import RecipeCard from '@/Components/molecules/RecipeCard';

type Recipe = {
  id: number;
  name: string;
  image: string;
  instructions: string[];
  difficulty: string;
};

const RecipeListScreen: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRecipes()
      .then(setRecipes)
      .catch((err) => {
        console.error(err);
        setError('No se pudieron cargar las recetas. Intenta de nuevo.');
      });
  }, []);

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
   <FlatList
     data={recipes}
     keyExtractor={(item) => item.id.toString()}
     renderItem={({ item }) => <RecipeCard recipe={item} />}
     contentContainerStyle={styles.container}
   />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default RecipeListScreen;
