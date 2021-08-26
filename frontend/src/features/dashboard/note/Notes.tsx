import styled from 'styled-components';
import { Breakpoint } from '../../../layout/common/Breakpoints';
import { NoteItem } from './NoteItem';
import React from 'react';
import { Color } from '../../../layout/common/Colors';
import { IoAddCircle } from 'react-icons/all';
import { useNotes } from './useNotes';

const NoteGrid = styled.div`
  padding: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media screen and (min-width: ${Breakpoint.Md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${Breakpoint.Xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const AddNoteWrapper = styled.div`
  background-color: ${Color.LightRed};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 85%;
  }
  cursor: pointer;
`;

const AddIcon = styled.div`
  color: white;
  font-size: 48pt;
`;

export function Notes() {
  const { list, onAdd, onTextChange, onDelete } = useNotes();

  return (
    <NoteGrid>
      <AddNewNote onAdd={onAdd} />
      {list.map((w) => {
        return (
          <NoteItem
            key={w.id}
            note={w}
            onTextChange={onTextChange}
            onDelete={onDelete}
          />
        );
      })}
    </NoteGrid>
  );
}

function AddNewNote({ onAdd }: { onAdd: () => void }) {
  return (
    <AddNoteWrapper>
      <AddIcon onClick={onAdd}>
        <IoAddCircle />
      </AddIcon>
    </AddNoteWrapper>
  );
}
