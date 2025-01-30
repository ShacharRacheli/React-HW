import axios from "axios"
import { makeAutoObservable } from "mobx"
import { useContext } from "react"
import { IdContext } from "../homePage"

export type RecipeType = {
    id: number,
    title: string,
    // products:string[],
    description: string,
    authorId: Number,
    ingredients: string[],
    instructions: string,
}
class RecipeStore {
    // const[id] = useContext(IdContext)

    list: RecipeType[] = []
    constructor() {
        makeAutoObservable(this)
        this.getAllRecipes()
    }
    async getAllRecipes() {
        try {
            const res = await axios.get(`http://localhost:3000/api/recipes`, {})
            console.log(res.data);
            this.list = res.data
            //   return this.list
        }
        catch (e: any) {
            if (e.response && e.response === 401 || e.response === 400) { alert('errorrrrrr') }
            //   if(e.response&&e.response===403){
            //     alert(``)
            //   }
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
        }
        catch (e: any) {
            if (e.response && e.response === 401 || e.response === 400) { alert('errorrrrrr') }
        }
        this.getAllRecipes()
    }
    getRecipeById(id:number):RecipeType|undefined{
        return this.list.find(r=>r.id===id)
    }

}
export default new RecipeStore()