import React, {Component} from 'react';
import { connect} from 'react-redux';
import Image from "./Image";
import { setSelectedImage } from "../redux/actions";
import "../styles/ImageList.css";

class List extends Component {

  renderList(){
    return this.props.Img.map( (Img, index) => {
      return (
          <div key={index} className="ImageList">
            <Image key={Img.download_url} image={Img.download_url} onClick={ () => this.props.setSelectedImage(Img)}  />
          </div>
      );
    });
  }
  render () {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {

  return {Img: state.Img};
};

export default connect(mapStateToProps, {  setSelectedImage })(List);