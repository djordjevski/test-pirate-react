import { Component } from "react";
import { HotelItem } from "./HotelItem";
import { ErrorMessage } from "./ErrorMessage";
import "../stylesheets/HotelSearch.scss";

export class HotelSearch extends Component {
    
    constructor() {
        super();
        this.state = {
            isError: false,
            data : []            
        }
    }

    loadData() {
        let request = new XMLHttpRequest();
        request.open("GET", "http://fake-hotel-api.herokuapp.com/api/hotels?count=5");
        request.onreadystatechange = () => {
            if (request.readyState === 4 ) {
                var data = JSON.parse(request.responseText);
                switch (request.status) {
                    case 200 :
                    {
                        this.setState({
                            isError: false,
                            data: data
                        });
                    }
                    break;
                    case 500 :
                    {
                        this.setState({
                            isError: true,
                            data: data
                        });
                    }
                    break;
                    default:
                    {
                        this.setState({
                            isError: false,
                            data: []
                        });
                    }
                }
            }
        }
        request.send();
    }

    render() {
        // Store data into variable and loop through it if error is not accrued
        let hotels = this.state.data;
        if(!this.state.isError) {
            hotels = hotels.map((item, index) => {
                return(
                    <HotelItem key={index} hotel={item} />
                )
            });            
        }

        return (
            <div className="hotel-search">
                <div className="load-btn-host">
                    <button type="button" className="btn btn--big" onClick={this.loadData.bind(this)}>
                        Load Hotels
                    </button>
                </div>

                {this.state.isError ?
                    (<ErrorMessage key="0" message={this.state.data.error}/>)
                    :
                    (<div className="hotels-list">{hotels}</div>)
                }                
            </div>
        ) // return
    } // render

}