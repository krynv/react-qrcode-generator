import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import ActionButtons from '../ActionButtons/ActionButtons';
import { Shellbar } from 'fundamental-react';

import sapLogo from 'fundamental-styles/dist/images/sap-logo.png';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputStyle = {
      width: '400px',
      margin: '25px 25px 25px 25px'
    }

    this.qrCodeStyle = {
      margin: '0px 25px 25px 25px'
    }

    this.buttonStyle = {
      margin: '0px 25px 25px 25px'
    }

    this.state = {
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <div>
        <Shellbar
          logo={<img alt="SAP" src={sapLogo} />}
          productTitle="QR Code Generator"
        />

        <input value={this.state.inputValue} onChange={this.handleChange} autoFocus type="text" style={this.inputStyle} />
        
        <div style={this.qrCodeStyle}>
          <QRCode value={this.state.inputValue} size={400} id="canvas" />
        </div>

        <ActionButtons inputValue={this.state.inputValue} />
      </div>
    );
  }
}

export default App;
