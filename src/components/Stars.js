import { Component } from "react";
import { FaStar, FaStarO } from "react-icons/lib/fa";
import "../stylesheets/Stars.scss";

export class Stars extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // Get markup for stars
        let starsMarkup = [];
        let starsCount = this.props.stars;

        for (let star = 0; star < starsCount; star++) {
            starsMarkup.push(<span key={`s${star}`} className="star__full"><FaStar /></span>);
        }


        // Get markup for blanks
        let blanksMarkup = [];
        let blanksCount = this.props.max - this.props.stars;

        for (let blank = 0; blank < blanksCount; blank++) {
            blanksMarkup.push(<span key={`b${blank}`} className="star__blank"><FaStarO /></span>);
        }

        
        return(
            <div className="stars">
                <span className="stars__text">{this.props.stars}*</span>
                {starsMarkup}
                {blanksMarkup}
            </div>
        )
    }

}