import React from 'react';
import './index.css';

class DragZone extends React.PureComponent {
    constructor(props) {
        super(props);
        this.fileDrop = this.fileDrop.bind(this);
    }

    dragOver(e) {
        e.preventDefault();
    }

    dragEnter(e) {
        e.preventDefault();
    }

    dragLeave(e) {
        e.preventDefault();
    }

    fileDrop(e) {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            this.props.handleFile(file);
        }
    }

    render() {
        return (
            <>
                <div className="drop-container" onDragOver={this.dragOver} onDragEnter={this.dragEnter}
                     onDragLeave={this.dragLeave} onDrop={this.fileDrop}>
                    <div className="drop-message">
                        Бросайте файлы сюда
                    </div>
                </div>
            </>
        );
    }
}

export default DragZone;