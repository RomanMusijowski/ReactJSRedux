import React from 'react';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const ProfileWall = (props) => {
    return(
                <div id="profile-page-wall-share" className="row">
                    <div className="col s12">
                        <ul className="tabs tab-profile z-depth-1 light-blue" style={{width: '100%'}}>
                            <li className="tab col s3" style={{width: '100%'}}>
                                <a className="white-text waves-effect waves-light" href="#addPost">
                                    {/*<i className="mdi-image-camera-alt">*/}
                                    {/*    C*/}
                                    {/*</i>*/}

                                    Add Post
                                </a>
                            </li>
                        </ul>

                        <div id="AddPost" className="tab-content col s12  grey lighten-4"
                        style={{display: 'block'}}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea" row="2" className="materialize-textarea"></textarea>
                                    <label for="textarea">Share your favorites thoughts!</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 m6 share-icons">
                                    <AddAPhotoIcon/>
                                </div>
                                <div className="col s12 m6 right-align">
                                    <a className="waves-effect waves-light btn pink lighten-1">Add post</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ProfileWall