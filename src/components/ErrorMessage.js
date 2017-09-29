import { Component } from "react";
import { FaExclamationTriangle } from "react-icons/lib/fa";
import "../stylesheets/ErrorMessage.scss";

export class ErrorMessage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <article className="error-message">
                <h3 className="error-message__content">
                    <span className="error-message__icon"><FaExclamationTriangle /></span>
                    <span className="error-message__text">{this.props.message}</span>
                </h3>
            </article>
        )
    }
}