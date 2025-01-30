// const AddRecipe=()=>{
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import recipeStore, { RecipeType } from "./recipeStore"
import { array, object, string } from "yup"
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { IdContext } from "../homePage"
import axios from "axios"
import { observer } from "mobx-react-lite"
// const schema = object({
//     title: string().required("Title is required"),
//     // ingredients: string().required("At least one ingredient is required"), // Optional validation for ingredients
//     description: string().required("Description is required"),
//     // ingredients: string().required("Ingredients are required"),
//     instructions: string().required().min(20, "Instructions must be at least"),
// });


// const AddRecipe =observer( () => {
//     //user id to send 
//     const [id] = useContext(IdContext)
//     // const [ingredients, setIngredients] = useState<string[]>([""]); // Initialize with one empty ingredient
//     const [open, setOpen] = useState(false);
//     const [logIn, setLogIn] = useState(false);
// const [clickOnAdd,setClickOn]=useState(false)
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const onSubmit: SubmitHandler<RecipeType> = async (data) => {

//         data.ingredients = data.ingredients.filter((ingredient: any) => ingredient.value.trim() !== "");
//         console.log(data);
//         recipeStore.addNewRecipe(data, +id)
//         reset({
//             ingredients: [] // מנקה את המערך            
//         });        // setIngredients([""]); // Reset ingredients to one empty field
//         submitForm()//close form 
//     }

//     const { control } = useForm({ resolver: yupResolver(schema) })
//     const {
//         register,
//         handleSubmit,
//         reset,
//         watch,
//         formState: { errors }
//     } = useForm({ resolver: yupResolver(schema) })


//     const { fields, append, remove } = useFieldArray({
//         control,
//         name: "ingredients",
//     });
//     return (<>
//         <Button onClick={handleOpen}sx={{color:'var(--secondary-color)'}} >Register</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}      
//       >
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField {...register('title')} placeholder="title" />
//             {errors.title && <span>{errors.title.message}</span>}
//             <TextField {...register('description')} placeholder="description" />
//             {errors.description && <span>{errors.description.message}</span>}
//             <div>
//                 <h4>Ingredients</h4>
//                 {fields.map((field, index) => (
//                     <div key={field.id}>
//                         <TextField
//                             {...register(`ingredients.${index}`)} // Registering ingredients properly
//                             // defaultValue={field.value} // Set default value
//                            type="text"
//                             label={`Ingredient ${index + 1}`}
//                         />
//                         <Button type="button" onClick={() => remove(index)}>Remove</Button>
//                     </div>
//                 ))}
//                 <Button type="button" onClick={() => append({ value: "" })}>Add Ingredient</Button>
//             </div>

//             {/* <TextField {...register('ingredients')} placeholder="ingredients" /> */}
//             <TextField {...register('instructions')} placeholder="instructions" />
//             {errors.instructions && <span>{errors.instructions.message}</span>}

//             <button type="submit">Save</button>
//         </form>
//         </Modal>
//     </>)
// })
// export default AddRecipe


// // import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import recipeStore, { RecipeType } from "./recipeStore";
// // import { object, string } from "yup";
// // import { Button, TextField } from "@mui/material";
// // import { useContext } from "react";
// // import { IdContext } from "../homePage";

// // const schema = object({
// //     title: string().required("Title is required"),
// //     description: string().required("Description is required"),
// //     instructions: string().required().min(20, "Instructions must be at least 20 characters long"),
// //     ingredients: string().required("At least one ingredient is required"), // Optional validation for ingredients
// // });

// // const AddRecipe = ({ submitForm }: { submitForm: Function }) => {
// //     const [id] = useContext(IdContext);
// //     const { register, handleSubmit, reset, control, formState: { errors } } = useForm({
// //         resolver: yupResolver(schema),
// //         defaultValues: {
// //             ingredients: [{ value: "" }] // Initialize with one empty ingredient
// //         }
// //     });

// //     const { fields, append, remove } = useFieldArray({
// //         control,
// //         name: "ingredients"
// //     });

// //     const onSubmit: SubmitHandler<Partial<RecipeType>> = async (data) => {
// //         // Filter out empty ingredients
// //         data.ingredients = data.ingredients.filter((ingredient: any) => ingredient.value.trim() !== "");
// //         console.log(data);
// //         recipeStore.addNewRecipe(data, +id);
// //         reset();
// //         submitForm(); // Close form
// //     };

// //     return (
// //         <>
// //             <form onSubmit={handleSubmit(onSubmit)}>
// //                 <TextField {...register('title')} placeholder="Title" />
// //                 {errors.title && <span>{errors.title.message}</span>}
// //                 <TextField {...register('description')} placeholder="Description" />
// //                 {errors.description && <span>{errors.description.message}</span>}
// //                 <div>
// //                     <h4>Ingredients</h4>
// //                     {fields.map((field, index) => (
// //                         <div key={field.id}>
// //                             <TextField
// //                                 {...register(`ingredients.${index}.value` as const)} // Registering ingredients properly
// //                                 defaultValue={field.value} // Set default value
// //                                 placeholder={`Ingredient ${index + 1}`}
// //                             />
// //                             <Button type="button" onClick={() => remove(index)}>Remove</Button>
// //                         </div>
// //                     ))}
// //                     <Button type="button" onClick={() => append({ value: "" })}>Add Ingredient</Button>
// //                 </div>
// //                 <TextField {...register('instructions')} placeholder="Instructions" />
// //                 {errors.instructions && <span>{errors.instructions.message}</span>}
// //                 <button type="submit">Save</button>
// //             </form>
// //         </>
// //     );
// // };

// // export default AddRecipe;

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };
// const schema = object({
//     title: string().required().max(25, 'Title is required'),
//     description: string().required().min(10, 'Description nust be 10 letters'),
//     // ingredients: string().required('error'),
//     ingredients: array()
//         .of(string().required('Each product is required')) // כל פריט במערך חייב להיות מחרוזת
//         .min(1, 'At least one product is required'), // חייב להיות לפחות מוצר אחד
//     instructions: string().required('Instructions are required'),

// })


// const AddRecipe = observer(() => {
//     //user id to send 
//     const [id] = useContext(IdContext)
//     const [clicked, setClicked] = useState(false)

//     const {
//         register,
//         handleSubmit,
//         reset,
//         control,
//         formState: { errors }
//     } = useForm({
//         resolver: yupResolver(schema),
//         defaultValues: {
//             ingredients: ["", "", ""],
//         },
//     })

//     const { fields, append, remove } = useFieldArray({
//         name: "ingredients", 
//         control, 
//     });
  
//     const onSubmit: SubmitHandler<Partial<RecipeType>> = async (data) => {
//         if (id)
//             recipeStore.addNewRecipe(data, +id)
//         console.log(data);
//         reset();
//         setClicked(false);       
//     }
//     return (<>
//         <Button onClick={() => {
//             setClicked(true)
//         }} variant="outlined" sx={{ color: 'var(--secondary-color)', border: '1px solid gray', position: 'absolute', top: 60, left: 10 }}>Add Recipe</Button>

//         <Modal
//             open={clicked}
//             onClose={() => { setClicked(false) }}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//         >
//             <Box sx={style}>
//                 <Typography id="modal-modal-title" variant="h6" component="h2">
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div><TextField {...register('title')} type="text" fullWidth label="title" variant="outlined" />
//                             {errors.title && <span>{errors.title.message}</span>}</div>
//                         <div><TextField {...register('description')} type="text" fullWidth label="description" variant="outlined" />
//                             {errors.description && <span>{errors.description.message}</span>}</div>
                      
//                         <div>
//                             <Typography variant="subtitle1" sx={{ mt: 2 }}>Ingredients:</Typography>
//                             {fields.map((field, index) => (
//                                 <div key={field.id} style={{ display: 'flex', alignItems: 'center' }}>
//                                     <TextField
//                                         {...register(`ingredients.${index}`)}
//                                         type="text"
//                                         fullWidth
//                                         variant="outlined"
//                                         label={`Ingredient #${index + 1}`}
//                                         error={!!errors.ingredients}
//                                         helperText={errors.ingredients?.message}
//                                     />
//                                     <Button onClick={() => remove(index)} sx={{ color: 'var(--secondary-color)' }}>Remove</Button>       
//                             </div>
//                         ))}
                     
//                         <Button
//                   type="button"
//                             onClick={() => append("")}
//                             variant="outlined"
//                             sx={{ color: 'var(--secondary-color)' }}        
//                         >
//                             Add Product
//                         </Button>
//                     </div>

//                     <div><TextField {...register('instructions')} type="text" fullWidth label="instructions" variant="outlined" />
//                         {errors.instructions && <span>{errors.instructions.message}</span>}</div>
//                     <Button type='submit' variant="contained" sx={{
//                         backgroundColor: 'white',
//                         color: 'var(--secondary-color)',
//                         marginTop: '15px',
//                         '&:hover': {
//                             backgroundColor: '#f5f5f5',
//                         },
//                     }}
//                     >Send</Button>
//                 </form>
//             </Typography>
//         </Box>
//     </Modal >

//     </>)
// })
// export default AddRecipe


// import { observer } from "mobx-react-lite";
// import { useContext, useState } from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import { object, string, array } from 'yup';
// import { Button, Modal, Box, TextField, Typography } from "@mui/material";
// import recipeStore from "./recipeStore";
// import { IdContext } from "./IdContext";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const schema = object({
    title: string().required().max(25, 'Title is required'),
    description: string().required().min(10, 'Description must be at least 10 letters'),
    ingredients: array()
        .of(string().required('Each ingredient is required'))
        .min(1, 'At least one ingredient is required'),
    instructions: string().required('Instructions are required'),
});

const AddRecipe = observer(() => {
    const [id] = useContext(IdContext);
    const [clicked, setClicked] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            ingredients: ["", "", ""],
        },
    });

    const { fields, append, remove } = useFieldArray({
        name: "ingredients",
        control,
    });

    const onSubmit = async (data) => {
        if (id) recipeStore.addNewRecipe(data, +id);
        reset();
        setClicked(false);
    };

    return (
        <>
            <Button onClick={() => setClicked(true)} variant="outlined" sx={{ color: 'var(--secondary-color)', border: '1px solid gray', position: 'absolute', top: 60, left: 10 }}>
                Add Recipe
            </Button>

            <Modal
                open={clicked}
                onClose={() => setClicked(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField {...register('title')} fullWidth label="Title" variant="outlined" error={!!errors.title} helperText={errors.title?.message} />
                            <TextField {...register('description')} fullWidth label="Description" variant="outlined" error={!!errors.description} helperText={errors.description?.message} sx={{ mt: 2 }} />
                            
                            <Typography variant="subtitle1" sx={{ mt: 2 }}>Ingredients:</Typography>
                            {fields.map((field, index) => (
                                <Box key={field.id} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                    <TextField
                                        {...register(`ingredients.${index}`)}
                                        fullWidth
                                        variant="outlined"
                                        label={`Ingredient #${index + 1}`}
                                        error={!!errors.ingredients}
                                        helperText={errors.ingredients?.message}
                                    />
                                    <Button onClick={() => remove(index)} sx={{ color: 'var(--secondary-color)', ml: 1 }}>Remove</Button>
                                </Box>
                            ))}
                            <Button type="button" onClick={() => append("")} variant="outlined" sx={{ color: 'var(--secondary-color)', mt: 2 }}>
                                Add Ingredient
                            </Button>

                            <TextField {...register('instructions')} fullWidth label="Instructions" variant="outlined" error={!!errors.instructions} helperText={errors.instructions?.message} sx={{ mt: 2 }} />
                            <Button type='submit' variant="contained" sx={{ backgroundColor: 'white', color: 'var(--secondary-color)', marginTop: '15px', '&:hover': { backgroundColor: '#f5f5f5' } }}>
                                Send
                            </Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
});

export default AddRecipe;
