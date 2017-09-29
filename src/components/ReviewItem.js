import { Component } from "react";
import { FaPlus, FaMinus } from "react-icons/lib/fa";
import "../stylesheets/ReviewItem.scss";

export class ReviewItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // Destructure data from prop.review
        let {name, comment, positive} = this.props.review;

        return(
            <section className={`review ${positive ? "review--positive" : "review--negative"}`}>
                <div className="review__icon">
                    {positive ? <FaPlus/> : <FaMinus/>}
                </div>
                <div className="review__content">
                    <h4 className="review__name">{name}</h4>
                    <p className="review__comment">{comment}</p>
                </div>
            </section>
        )
    }

}