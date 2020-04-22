import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import React from "react";

const Comments = ({id, userId, content, likes }) => {

    return(
        <CardContent key={id}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                        </Avatar>
                    }
                    subheader={userId}
                />

                <CardContent>
                    <p>{content}</p>
                </CardContent>
            </Card>
        </CardContent>
    )
};

export default Comments