import axios from "axios"
import { makeAutoObservable } from "mobx"
export type RecipeType = {
    id: number,
    title: string,
    description: string,
    authorId: Number,
    ingredients: string[],
    instructions: string,
}
class RecipeStore {
    list: RecipeType[] = []
    constructor() {
        makeAutoObservable(this)
        this.getAllRecipes()
    }
    async getAllRecipes() {
        try {
            const res = await axios.get(`http://localhost:3000/api/recipes`, {})
            this.list = res.data
        }
        catch (e: any) {
            if (e.status === 401 || e.response === 403 || e.response === 4000)
                alert("User Not found")
              if (e.status === 403)
                  alert('problem in connection')            
        }
    }
    async addNewRecipe(recipe: Partial< RecipeType>,id:number) {
        try {
            const res = await axios.post(`http://localhost:3000/api/recipes`, {
                title: recipe.title,
                description: recipe.description,
                ingredients: recipe.ingredients,
                instructions: recipe.instructions,
            },{
                headers: { 'user-id': id + "" }
            })
            this.list.push(res.data.recipe)
        }
        catch (e: any) {
            if (e.status === 401 || e.response === 403 || e.response === 4000)
                alert("User Not found")
              if (e.status === 403)
                  alert('problem in connection')            
        }
    }
    async updateRecipe(recipe:Partial<RecipeType>,id:number){
        try {
            const res = await axios.put('http://localhost:3000/api/recipes', {
                title: recipe.title,
                description: recipe.description,
                ingredients: recipe.ingredients,
                instructions: recipe.instructions,
            },{
                headers: { 'recipe-id': id+ "" }
            })
            this.list = this.list.map(r => (r.id === id ? res.data : r));        
        }
        catch (e: any) {
            if (e.status === 401 || e.response === 403 || e.response === 4000)
                alert("User Not found")
            if (e.status === 403)
                alert('problem in connection')
            console.log(e);
        }
    }    
    getRecipeById(id:number):RecipeType|undefined{
        return this.list.find(r=>r.id===id)
    }
    updateRecipeList(authorId:number):RecipeType[]{
        return this.list.filter(r=>+r.authorId===+authorId);
}
}
export default new RecipeStore()