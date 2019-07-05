import React, { Component } from "react";

class SaveButton extends Component {

    saveCanvas() {
        let canvas = document.getElementsByTagName('canvas');
        let imageData = canvas[0].toDataURL('image/png');
        let w = window.open('about:blank', 'image from canvas');

        w.document.write("<img src='" + imageData + "' alt='from canvas'/>");
    }

    render() {
        return (
            <div>
                <button onClick={this.saveCanvas}>Open QR code in new window</button>
            </div>
        )
    }
}

export default SaveButton;