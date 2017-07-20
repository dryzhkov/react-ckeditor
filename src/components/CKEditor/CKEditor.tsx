import * as React from 'react';

import { CKEditorService } from '../../services/ckeditor';

export class CKEditor extends React.Component<ICKEditorProp, {}> {
  private ckEditorService: CKEditorService;
  componentDidMount() {
    this.ckEditorService = new CKEditorService();
    this.ckEditorService.initialize(this.props.handlers, this.props.data);
  }

  render() {
    const {data, handlers} = this.props;
    return (
       <div id="editor1"></div>
    );
  }

  public getData() {
    return this.ckEditorService.getData();
  }
}

export interface ICKEditorProp {
  data: ICKEditorDataProp;
  handlers: ICKEditorHandlersProp;
}

export interface ICKEditorDataProp {
  width: string;
  height: string;
}

export interface ICKEditorHandlersProp {
  onContentChange: (evt: any, content: string) => void;
}