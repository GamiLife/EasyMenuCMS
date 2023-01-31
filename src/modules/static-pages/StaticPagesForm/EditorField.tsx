import { TOnChangeFormItem } from '@gamiui/standard/lib/types/designSystem/atoms/Input/Input';
import { useState } from 'react';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export interface IEditor {
  onChangeFormItem?: TOnChangeFormItem;
  value?: any;
}

export const EditorField = ({ value, onChangeFormItem }: IEditor) => {
  const htmlInitial = ContentState.createFromBlockArray(
    htmlToDraft(value).contentBlocks
  );
  const [stateEditor, setStateEditor] = useState(
    EditorState.createWithContent(htmlInitial)
  );
  const html = draftToHtml(convertToRaw(stateEditor.getCurrentContent()));

  return (
    <Editor
      editorState={stateEditor}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={(state) => {
        onChangeFormItem?.(html);
        setStateEditor(state);
      }}
    />
  );
};
