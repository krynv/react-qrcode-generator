import React, { Component } from 'react';
import { QRCode } from 'react-qrcode-logo';
import SaveButton from '../SaveButton/SaveButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.downloadQRCode = this.downloadQRCode.bind(this);
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  downloadQRCode = () => {
    let link = document.createElement('a');

    link.download = `${this.state.inputValue}.qrcode.png`;
    link.href = document.getElementsByTagName('canvas')[0].toDataURL();
    link.click();
  }


  render() {
    return (
      <div>

        <input value={this.state.inputValue} onChange={this.handleChange} autoFocus type="text" className="input" />

        <div className="qrcodeContainer">
          <QRCode value={this.state.inputValue} size={300} id="canvas" />
        </div>

        <div className="buttonContainer">
          <SaveButton />
          <br />
          <button onClick={this.downloadQRCode}>Download QR Code</button>
        </div>

        <p className="author"> Developed by <a href="http://github.com/krynv" rel="noopener noreferrer" target="_blank">Vitaliy Krynytskyy</a></p>

      </div>
    );
  }
}

export default App;
