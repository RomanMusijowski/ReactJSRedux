import React ,{Component} from "react";
import Container from "@material-ui/core/Container";
import InsertPhotoRoundedIcon from '@material-ui/icons/InsertPhotoRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

import { withStyles} from "@material-ui/core/styles";


class FormPostAdd extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Container maxWidth="sm">
                <form onSubmit={this.handleSubmit}>
                        <div className="card light-green lighten-3">
                            <div className="card-content black-text">
                                <Button href={"/#"}><Avatar /><label className={classes.styleLabel}>Tak</label> </Button>
                                <span className="card-title">
                                    <h8>Create post</h8>
                                 </span>
                                <div className="row">
                                    <textarea className="materialize-textarea"></textarea>
                                </div>
                            </div>
                            <div className="card-action">
                                <div className="row">
                                    <Button href={"/#"}><Icon component={AccountCircleRoundedIcon} color="primary" fontSize={"large"} ></Icon></Button>
                                    <Button href={"/#"}><Icon component={InsertPhotoRoundedIcon} color="primary" fontSize={"large"} ></Icon></Button>
                                    <input className="btn light-red accent-1 right"  type="submit" value="Submit"/>

                                </div>
                            </div>
                        </div>
                </form>
            </Container>

        );
    }

}

export default withStyles({
    styleLabel: {
        marginLeft: "20px"
    }
})(FormPostAdd);