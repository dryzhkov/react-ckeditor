import { ICKEditorHandlersProp, ICKEditorDataProp } from '../components/CKEditor';

export class CKEditorService {
  private editor: any;
  private onInstanceReady: (evt: any) => void;

  private EDITOR_OPTIONS = {
    resize_enabled:false,
    title:false,
    // toolbar: "Basic"
    toolbarGroups:[  
      {  
        name:"basicstyles",
        groups:[  
          "basicstyles"
        ]
      }
    ],
    removeButtons:"Strike,Subscript,Superscript,Anchor,Styles,Specialchar",
    removePlugins:"a11yhelp,liststyle,tabletools,contextmenu,elementspath,resize,magicline,toolbar",
    width:"40%",
    height:"20%",
    extraPlugins:"sharedspace,divarea,widget,font,colorbutton,button,panelbutton,panel,floatpanel,codesnippet,pastefromword",
    allowedContent:"area br col hr img wbr colgroup dd dt li p tbody td tfoot th thead tr rp rt address article aside blockquote caption center dir div dl figure figcaption footer h1 h2 h3 h4 h5 h6 header hgroup map menu nav ol pre section table ul a abbr acronym b bdi bdo big cite code del dfn em font i img ins kbd label map mark q ruby rp rt s samp small span strike strong sub sup time tt u var[href,src,abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,contenteditable,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,usemap,valign,value,vspace,width,data-ts-imgid,data-ts-imglen,style,itemscope,itemtype,itemprop,itemid,content,data-itemprops,data-ignore-semantic-link]{*}(swift-*,ts-image,emojione,emoticon-*,animated-emoticon-*,copy-paste-table,hljs*,language-*)",
    disallowedContent:"script style",
    pasteFilter:"area br col hr img wbr colgroup dd dt li p tbody td tfoot th thead tr rp rt address article aside blockquote caption center dir div dl figure figcaption footer h1 h2 h3 h4 h5 h6 header hgroup map menu nav ol pre section table ul a abbr acronym b bdi bdo big cite code del dfn em font i img ins kbd label map mark q ruby rp rt s samp small span strike strong sub sup time tt u var[height,width,style,itemscope,itemtype,itemprop,itemid,content,data-itemprops]{font-style,font-weight,text-decoration,background,background-color,color}(swift-*,ts-image,emojione,emoticon-*,animated-emoticon-*,copy-paste-table,hljs*,language-*);img[!src];a[!href];",
    pasteFromWordRemoveStyles:true,
    pasteFromWordRemoveFontStyles:false,
    startupFocus:false,
    enterMode:3,
    shiftEnterMode:3,
    disableNativeSpellChecker:false,
    on: {},
    uiColor : '#4285f4'
  };

  public initialize(handlers: ICKEditorHandlersProp, data: ICKEditorDataProp) {
    this.EDITOR_OPTIONS.on['instanceReady'] = (evt: any) => {
      this.editor = (<any>window).CKEDITOR.instances.editor1;
      this.initEventHandler(handlers);
    };

    this.EDITOR_OPTIONS.width = data && data.width || '500px';
    this.EDITOR_OPTIONS.height = data && data.height || '250px';

    (<any>window).CKEDITOR.replace('editor1', this.EDITOR_OPTIONS);
  }

  private initEventHandler(handlers: ICKEditorHandlersProp) {
    this.editor.on('change', (evt) => {
      handlers.onContentChange(evt, this.editor.getData());
    });
  }

  public getData() {
    return this.editor.getData();
  }
}