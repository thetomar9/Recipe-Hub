// recipes.ts

/**
 * Defines the structure for a single recipe entry.
 */
export interface Recipe {
    id: number;
    title: string;
    emoji: string;
    description: string;
    ingredients: string[];
    link: string;
}

// Array of Recipe data
export const recipeData: Recipe[] = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        emoji: "🍝",
        description: "A creamy, rich Italian pasta dish made with eggs, hard cheese, cured pork (guanciale or pancetta), and black pepper.",
        ingredients: [
            "200g Spaghetti",
            "100g Guanciale (or Pancetta)",
            "2 large Egg Yolks",
            "50g Pecorino Romano cheese",
            "Black Pepper"
        ],
        link: "/recipes/carbonara"
    },
    {
        id: 2,
        title: "Quick Tomato Soup",
        emoji: "🍅",
        description: "A comforting and easy-to-make soup, perfect for a cold day, paired with grilled cheese.",
        ingredients: [
            "1 can (400g) Crushed Tomatoes",
            "1 Onion, chopped",
            "2 cloves Garlic, minced",
            "500ml Vegetable Broth",
            "A splash of Cream (optional)"
        ],
        link: "/recipes/tomato-soup"
    },
    {
        id: 3,
        title: "3-Ingredient Peanut Butter Cookies",
        emoji: "🥜",
        description: "The simplest, fastest cookie recipe for a quick dessert fix!",
        ingredients: [
            "1 cup Peanut Butter",
            "1 cup Granulated Sugar",
            "1 large Egg"
        ],
        link: "/recipes/pb-cookies"
    }
];

// Example function to retrieve a recipe by ID
export function getRecipeById(id: number): Recipe | undefined {
    return recipeData.find(recipe => recipe.id === id);
}
