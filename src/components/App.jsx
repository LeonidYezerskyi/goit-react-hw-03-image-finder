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
    page: 1,
    largeImage: '',
  };

  componentDidUpdate(_, prevState) {

    if (prevState.name !== this.state.name || prevState.page !== this.state.page) {
      const fetchPhotoByName = async name => {
        try {
          this.setState({ isLoading: true });

          const photoByName = await getPhotoByName(name, this.state.page);
          console.log(this.state.photos); console.log(photoByName)

          this.setState(prevState => ({ photos: [...prevState.photos, ...photoByName] }));
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

  onClickBtn = () => {
    this.setState({ page: this.state.page + 1 });
  }

  onClickImage = (src) => {
    this.setState({ largeImage: src })
  }

  render() {
    console.log(this.state.page)
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
        <ImageGallery photos={this.state.photos} onClick={this.onClickImage} />
        {this.state.photos.length > 0 && <Button onClick={this.onClickBtn} />}
        {!!this.state.largeImage.length && <Modal largeImage={this.state.largeImage} />}
      </div>
    );
  }

};
