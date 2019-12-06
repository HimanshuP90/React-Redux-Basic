import React from "react";
import { connect } from "react-redux";
import { fetchHotels } from "./components/fetch";


const API_URL = process.env.REACT_APP_API_URL;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sortedhotels: []
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchHotels(API_URL));
  }
  gethotelContainer(hotel, index) {
    return (
      <div key={index} className="ui row">
        <div className="column eight wide">
          <img src={hotel.image} alt={hotel.name}></img>
        </div>
        <div className="column eight wide">
          <h2>{hotel.name}</h2>
          <div>Price: {hotel.price} </div>
          <div>{hotel.roomsAvailable} Rooms Available</div>
          <div>{hotel.starRating} Stars</div>{" "}
        </div>
      </div>
    );
  }
  getSortedHotelsByRating = () => {
    let hotelsData = [...this.props.hotels];
    hotelsData.sort(function(a, b) {
      return b.starRating - a.starRating;
    });
    this.setState({ sortedhotels: hotelsData });
  };
  getSortedHotelsByPrice = () => {
    let hotelsData = [...this.props.hotels];
    hotelsData.sort(function(a, b) {
      return b.price - a.price;
    });
    this.setState({ sortedhotels: hotelsData });
  };
  getSortedHotelsByRooms = () => {
    let hotelsData = [...this.props.hotels];
    hotelsData.sort(function(a, b) {
      return b.roomsAvailable - a.roomsAvailable;
    });
    this.setState({ sortedhotels: hotelsData });
  };
  render() {
    const { error, loading, hotels } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div className="ui active centered inline loader" style={{marginTop: '280px'}}></div>  
    }
    return (
      <div className="ui container grid">
        <div
          className="ui header"
          style={{
            marginTop: "26px",
          }}
        >
          <div className="ui button" onClick={this.getSortedHotelsByRating}>
            rating
          </div>
          <div className="ui button" onClick={this.getSortedHotelsByPrice}>
            price
          </div>
          <div className="ui button" onClick={this.getSortedHotelsByRooms}>
            rooms
          </div>
        </div>
        {this.state.sortedhotels.length === 0 &&
          hotels.map((hotel, index) => {
            return this.gethotelContainer(hotel, index);
          })}
        {this.state.sortedhotels.length > 0 &&
          this.state.sortedhotels.map((hotel, index) => {
            return this.gethotelContainer(hotel, index);
          })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  hotels: state.hotels,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(App);
