import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from 'react';

//EXTRA MUI AT THE END 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function RecipeItem({recipe}){
    const dispatch = useDispatch();
    const history = useHistory();
    const toDetails = () => {
        //dispatching recipe as object to details reducer
        dispatch({type: "STORE_DETAILS", payload: recipe}),
        //navigate to details page
        history.push("/details")
    }

console.log("This is the recipe sent to reducer",recipe);
    return(
        <Card
            className="recipeCard"
            sx={{ maxWidth: 370,
                    mb: 1,}}
            onClick={toDetails}
            key={recipe.id}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    src={recipe.image}
                    alt={recipe.name}
                />
                <CardContent>
                    <Typography
                        className="caption"
                        variant="caption">{recipe.name}</Typography>
                    <Typography
                        className="caption"
                        variant="caption">{recipe.time}</Typography>
                    <Typography
                        className="caption"
                        variant="caption">{recipe.rating}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default RecipeItem;