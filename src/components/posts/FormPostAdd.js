import React ,{Component} from "react";
import Container from "@material-ui/core/Container";
import InsertPhotoRoundedIcon from '@material-ui/icons/InsertPhotoRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import {Form, Formik, Field} from "formik";
import FormikField from "../../shared/components/formatik/FormikField"
import { withStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {compose} from "redux";
import { useDispatch } from "react-redux";
import {addPost} from "../../services/postApi";
import postApi from "../../services/postApi";
//import {reset} from 'redux-form';
import * as Yup from 'yup';
import FormikTextArea from "../../shared/components/formatik/FormikTextArea";
import {TextareaAutosize} from "@material-ui/core";
/*
const postSchema = Yup.object().shape({
   content: Yup.string()
       .min(15, 'To short')
       .required("Required")
});
*/

const FormPostAdd = (props) =>  {
    const [content, setContent] = React.useState("");
/*
    const initState = {
      content: ''
    };
*/

    const dispatch = useDispatch();


    const handleSubmit = (event/*values, actions*/) => {
        event.preventDefault();
        //
        //console.log(content);
        dispatch(addPost(content));
        //actions.resetForm();
        //actions.setSubmitting(false);
        //setContent("");


    };

        //const { classes } = this.props;
        return (
            <Container maxWidth="sm">


                            <form onSubmit={handleSubmit}>
                                <div className="card light-green lighten-3">
                                    <div className="card-content black-text">
                                        <Button href={"/#"}><Avatar/><label
                                            className="">{props.username}</label> </Button>
                                        <span className="card-title">
                                    <h8>Create post</h8>
                                 </span>
                                        <div className="row">
                                            <textarea className="materialize-textarea"
                                                    name="content"
                                                    label="Content"
                                                    onChange={event => setContent(event.target.value)}
                                                      ></textarea>
                                        </div>
                                    </div>
                                    <div className="card-action">
                                        <div className="row">
                                            <Button href={"/#"}><Icon component={AccountCircleRoundedIcon}
                                                                      color="primary"
                                                                      fontSize={"large"}></Icon></Button>
                                            <Button href={"/#"}><Icon component={InsertPhotoRoundedIcon} color="primary"
                                                                      fontSize={"large"}></Icon></Button>
                                            <input className="btn light-red accent-1 right"   type="submit"
                                                   value="Submit" />

                                        </div>
                                    </div>
                                </div>
                            </form>



            </Container>

        );
    }
export default FormPostAdd

/*
const mapStateToProps = (state) => {
    return {
        username: state.auth.username
    }
};
*/
/*
export default compose (withStyles({
    styleLabel: {
        marginLeft: "20px"
    }
}), connect(mapStateToProps))(FormPostAdd);
*/