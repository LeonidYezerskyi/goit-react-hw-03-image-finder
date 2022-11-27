import React from "react";

import { getPhotoByName } from '../services/Api';
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export class App extends React.Component {

  state = {
    name: '',
    photos: [],
    isLoading: false,
    error: '',
  };

  // componentDidMount() {
  // 
  // }

  componentDidUpdate(_, prevState) {

    if (prevState.name !== this.state.name) {
      const fetchPhotoByName = async name => {
        try {
          this.setState({ isLoading: true });

          const PhotoByName = await getPhotoByName(name);

          this.setState({ photos: [PhotoByName] });
        } catch (err) {
          this.setState({
            error: err.message,
          });
        } finally {
          this.setState({ isLoading: false });
        }
      };

      fetchPhotoByName(this.state.name);
    }
  }

  onSelectName = name => {
    this.setState({ name: name });
  };

  render() {
    return (
      <div
        style={{

          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: 16,
          paddingBottom: 24,
        }}>
        <Searchbar onSelectName={this.onSelectName} />
        {this.state.error.length > 0 && (
          <p>
            Upss, Some error occured... {this.state.error}
          </p>
        )}
        {this.state.isLoading && <Loader />}
        <ImageGallery photos={this.state.photos} />
        {this.state.photos.length && <Button />}
        {<Modal />}
      </div>
    );
  }

};
