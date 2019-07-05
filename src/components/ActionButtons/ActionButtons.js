import React from "react";
import { Button } from 'fundamental-react';

class ActionButtons extends React.Component {

    constructor(props) {
        super(props);

        this.style = {
            margin: '0px 20px'
        }
    };

    saveCanvas() {
        let canvas = document.getElementsByTagName('canvas');
        let imageData = canvas[0].toDataURL('image/png');
        let w = window.open('about:blank', 'image from canvas');

        w.document.write("<img src='" + imageData + "' alt='from canvas'/>");
    }

    downloadQRCode = () => {
        let link = document.createElement('a');

        link.download = `${this.props.inputValue}.qrcode.png`;
        link.href = document.getElementsByTagName('canvas')[0].toDataURL();
        link.click();
    }

    render() {
        return (
            <div>
                <Button onClick={this.saveCanvas} style={this.style}>Open QR Code in New Window</Button>
                <Button onClick={this.downloadQRCode} style={this.style}>Download QR Code</Button>
            </div>
        )
    }
}

export default ActionButtons;