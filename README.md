1.
שיניתי את השרת של הUSER 
שיקבל שם פרטי שם משפחה וסיסמה 
    const { firstName,lastName, password } = req.body;
2.
הוספתי את עדכון מתכון לפי משתמש  מצ"ב הקוד של השרת 
a.recipeMIDDLEWARE.JS
הוספתי את הקוד הזה בשביל עדכון
```js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (req, res, next) => {
    const recipeId = req.header('recipe-id');
    const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));

    const recipe = db.recipes.find(recipe => recipe.id == recipeId);
    if (!recipe) {
        return res.status(403).json({ message: "Unauthorized" });
    }

    req.recipe = recipe;
    next();
};

```
b.פונקצית העדכון בעצמה 
```js
router.put('/', recipeMiddleware, (req, res) => {
    const { title,description,ingredients,instructions } = req.body;
    const id = parseInt(req.header('recipe-id'));

    const db = JSON.parse(fs.readFileSync(dbPath));

    const recipe = db.recipes.find(recipe => recipe.id === id);

    if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }

    recipe.title = title;
    recipe.description = description;
    recipe.ingredients = ingredients;
    recipe.instructions = instructions;

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.json(recipe);
});
```