import React from "react";
import Image from "./Image";
import { connect } from 'react-redux';
import { setSelectedImage } from "../redux/actions";
import "../styles/ImageDetail.css";

// TODO: Provide access to the selectedImage
const ImageDetail = (props) => {
  return (
      <div className="ImageDetail">
          {props.selectedImage ?
              <>
                <h1>{props.selectedImage.author}</h1>
                <Image image={props.selectedImage.download_url} />
                  {/*TODO: Clear the selected image */}
                <button onClick={ () => props.setSelectedImage(null)}>Clear</button>
              </>
            : <div>No image selected</div>
          }
        </div>
  )
};

const mapStateToProps = (state) => {
  return {selectedImage: state.selectedImage};
};

export default connect(mapStateToProps, { setSelectedImage })(ImageDetail);
