import React from 'react';
import ReactDOM from 'react-dom';

export default class BodyEnd extends React.PureComponent<{
    children?: React.ReactNode | React.ReactNode[] | undefined;
}, {}> {

    customAppendedElement: HTMLDivElement;

    // @link https://stackoverflow.com/questions/28802179/how-to-create-a-react-modal-which-is-appended-to-body-with-transitions
    constructor(props) {
        super(props);
        this.customAppendedElement = document.createElement('div');
        this.customAppendedElement.style.display = 'contents';
        // The <div> is a necessary container for our
        // content, but it should not affect our layout.
        // Only works in some browsers, but generally
        // doesn't matter since this is at
        // the end anyway. Feel free to delete this line.
    }

    componentDidMount() {
        document.body.appendChild(this.customAppendedElement);
    }

    componentWillUnmount() {
        document.body.removeChild(this.customAppendedElement);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.customAppendedElement,
        );
    }
}