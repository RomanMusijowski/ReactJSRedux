import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export class Message extends React.Component{
    render() {
        const {message} = this.props;
        return (
            <Container maxWidth="sm">
                <div className="card mb-3 mt-3 shadow-sm">
                    <Button>
                        <div className="card-body">
                            <div className="card-text">
                                {message}
                            </div>
                        </div>
                    </Button>
                </div>
            </Container>
        );
    }

}