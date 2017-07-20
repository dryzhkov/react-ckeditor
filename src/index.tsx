import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CKEditor, ICKEditorProp, ICKEditorDataProp } from './components/CKEditor';

interface IAppState {
    content: string;
}

class CKEditorViewer extends React.Component<{ appState: IAppState }, IAppState > {
    private editorProps: ICKEditorProp;
    constructor(props){
        super(props);
        this.state = this.props.appState;
    }

    componentWillMount(){
        const that = this;
        this.editorProps = {
            data: {
                width: '300px',
                height: '300px'
            },
            handlers: {
                onContentChange: function(evt: any, content: string) {
                    that.setState({
                        content: content
                    });
                }
            },
        };
    }

    render() {
        return (
            <div>
                <div>
                    <span>Current content:</span>
                    <div>{this.state.content}</div>
                </div>
                <CKEditor data={this.editorProps.data} handlers={this.editorProps.handlers} ></CKEditor>
            </div>
        );
    }
};

const appState: IAppState = {
    content: ''
};
ReactDOM.render(<CKEditorViewer appState={appState} />, document.getElementById('root'));
