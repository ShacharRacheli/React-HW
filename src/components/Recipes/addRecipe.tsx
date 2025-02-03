import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import recipeStore, { RecipeType } from "../store/recipeStore"
import { array, object, string } from "yup"
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { observer } from "mobx-react-lite"
import { IdContext } from "../RouterComponents/appLayout"
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
    const onSubmit: SubmitHandler<Partial<RecipeType>> = async (data) => {
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
                            <TextField {...register('instructions')} multiline fullWidth label="Instructions" variant="outlined" error={!!errors.instructions} helperText={errors.instructions?.message} sx={{ mt: 2 }} />
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
