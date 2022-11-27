import Searchbar from "./Searchbar/Searchbar";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { getPhotoByName } from '../services/Api';

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
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}>
        <Searchbar onSelectName={this.onSelectName} />
        {this.state.error.length > 0 && (
          <p>
            Upss, Some error occured... {this.state.error}
          </p>
        )}
        <ImageGallery />
      </div>
    );
  }

};
