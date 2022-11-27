import Searchbar from "./Searchbar/Searchbar";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { getPhotoByName } from '../services/Api';

export class App extends React.Component {

  state = {
    name: '',
    names: []
  };

  componentDidMount() {
    const data = getPhotoByName();
    this.setState({ names: data });
  }

  componentDidUpdate(_, prevState) {

    if (prevState.name !== this.state.name) {
      const fetchPhotoByName = async name => {
        try {
          this.setState({ isLoading: true });

          const data = await getPhotoByName(name);

          this.setState({ names: [data] });
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
        <Searchbar onSubmit={this.onSelectName} />
        <ImageGallery />
      </div>
    );
  }

};
