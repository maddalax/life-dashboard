import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Color } from '../../../layout/common/Colors';
import type { Note } from './useNotes';
import type { onTextChange } from './useNotes';
import { AiFillCloseCircle } from 'react-icons/all';
import type { onDelete } from './useNotes';

const Wrapper = styled.div`
  position: relative;
  background-color: ${Color.LightRed};
  color: white;
  padding: 0.5em 2em 0.5em 0.5em;
  outline: 0 solid transparent;
  min-height: 125px;
  &:hover {
    opacity: 85%;
  }
`;

const DeleteButton = styled.div`
  position: absolute;
  top: 3px;
  right: 2px;
  font-size: 14pt;
  cursor: pointer;
`;

const Editable = styled.div``;

export function NoteItem({
  note,
  onTextChange,
  onDelete,
}: {
  note: Note;
  onTextChange: onTextChange;
  onDelete: onDelete;
}) {
  const editor = useRef<any>();
  const value = useRef<string>(note.text);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!editing && note.text !== value.current) {
      onTextChange(note.id, value.current);
    }
  }, [editing]);

  return (
    <Wrapper
      data-placeholder="Edit me"
      contentEditable={true}
      ref={editor}
      onClick={() => {
        if (editing) {
          return;
        }
        setEditing(true);
      }}
      onBlur={() => {
        setEditing(false);
        if (!value.current.trim()) {
          value.current = 'Replace this text.';
        }
      }}
      onInput={() => {
        value.current = editor.current.innerText;
      }}
    >
      <DeleteButton onClick={() => onDelete(note.id)}>
        <AiFillCloseCircle />
      </DeleteButton>
      <Editable>{note.text}</Editable>
    </Wrapper>
  );
}
