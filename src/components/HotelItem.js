import { Component } from "react";
import { Stars } from "./Stars";
import { ReviewItem } from "./ReviewItem";
import "../stylesheets/HotelItem.scss";

export class HotelItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            showReviews: false
        }
    }

    toggleReviews(e) {
        // Get reviews for targeted article
        let request = new XMLHttpRequest();
        request.open("GET", `http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${e.target.dataset.id}`);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                let reviewStatus = !this.state.showReviews;
                this.setState({
                    reviews: data,
                    showReviews: reviewStatus
                });
            }
        }
        request.send();
    }

    // Format date from ISO to german format
    formatDate(isoDate) {
        let rawDate = new Date(isoDate);
        return `${rawDate.getDate()}.${(rawDate.getMonth() + 1)}.${rawDate.getFullYear()}`;
    }

    render() {
        // Destructure data from props.hotel
        let { id, name, city, country, stars, description, price, date_start, date_end, images: [coverImg] } = this.props.hotel;

        // Set background image for hotel item
        let hotelImage = {
            backgroundImage: `url(${coverImg})`
        }

        let reviews = this.state.reviews;
        if(this.state.showReviews) {
            reviews = reviews.map((item, index) => {
                return(
                    <ReviewItem key={index} review={item} />
                )
            });
        }

        return(
            <article id={id} className="hotel-item">
                <div className="hotel-item__content">

                    <div className="hotel-image" style={hotelImage}>
                        <img alt={`Image of ${name}`} src={coverImg} />
                    </div>

                    <div className="hotel-info">
                        { /* Header = Name, Location, Rating */ }
                        <header className="item-header">
                            <div className="item-header__main-info">
                                <h1 className="item-header__heading">{name}</h1>
                                <h2 className="item-header__subheading">
                                    {city} - {country}
                                </h2>
                            </div>
                            <div className="item-header__rating">
                                <Stars stars={stars} max="5" />
                            </div>
                        </header>

                        { /* Description */ }
                        <p className="description">{description}</p>

                        { /* Footer = Price, Date, Load reviews button */ }
                        <footer className="item-footer">
                            <div className="offer">
                                <p className="offer_price">{price} &euro;</p>
                                <p className="offer_date">{this.formatDate(date_start)} - {this.formatDate(date_end)}</p>
                            </div>
                            <div className="buttons">
                                <button type="button"
                                        className="btn"
                                        data-id={id}
                                        onClick={this.toggleReviews.bind(this)}>
                                    {this.state.showReviews ? "Hide reviews" : "Show reviews"}
                                </button>
                            </div>
                        </footer>
                    </div>
                    { /* .hotel-info */ }

                </div>
                { /* .hotel-item__content */ }

                {this.state.showReviews &&
                    <div className="hotel-item__reviews">{reviews}</div>   
                }
            </article>
        ) // return
    } // render
}