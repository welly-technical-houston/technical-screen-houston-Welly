import React, { Component } from "react";
import Footer from "./Footer";
import Header from './Header';
import ImageList from './ImageList';
import ImageDetail from "./ImageDetail";
import { getImages } from "../redux/actions";
import "../styles/App.css";
import {connect} from "react-redux";


class App extends Component {
  // TODO: Fetch API data and store to Redux
    componentDidMount() {
        this.props.getImages();
    }

  render() {
    return (
      <div className="App">
        {/* TODO: Create and import the Header component */}
        <Header/>

        <div className="App-body">
          <div className="App-left">
            <h1>Image List</h1>

            {/* TODO: Pass image data to ImageList */}
            <ImageList/>
          </div>

          <div className="App-right">
            <ImageDetail />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {Img: state.Img};
};

export default connect(mapStateToProps, {  getImages })(App);
