import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import React from "react";

const Comments = (id, userId, content, likes ) => {

    return(
        <CardContent key={id}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">

                        </Avatar>
                    }

                    subheader=""
                />
                <CardMedia
                    //className={classes.media}
                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <p></p>
                </CardContent>
            </Card>
        </CardContent>
    )
};

export default Comments