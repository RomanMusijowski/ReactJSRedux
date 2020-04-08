import React ,{Component} from "react";

class FormPostAdd extends Component {

    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="card grey lighten-3">
                            <div className="card-content black-text">
                                <span className="card-title">
                                    <h8>Stwórz post</h8>
                                 </span>
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                            </div>
                            <div className="card-action">
                                <div className="row">
                                <input className="btn light-blue accent-1 right"  type="submit" value="Submit"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        );
    }

}

export default FormPostAdd;