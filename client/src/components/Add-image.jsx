import React from 'react';
import ImageUploader from 'react-images-upload';
import { addImageComputer } from "../Services/service-img"
import { idUser } from "../Services/service-user";

export default class AddImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [], url: "C:\\Users\\User\\Pictures\\2018-05-27 001" };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles) {
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles)
        });
        let urlFull = (this.state.url + '\\' + pictureFiles[0].name)

        addImageComputer({ title: 'Img from computer', url: urlFull, media_type: "image", userId: idUser })
    }

    render() {
        return (
            <>
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    accept={this.state.url}
                />
            </>
        );
    }
}
