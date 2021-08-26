import { useEffect, useState } from 'react';
import { guid } from '../../../common/Utility';
import { useDebouncedFn } from 'beautiful-react-hooks';

export interface Note {
  text: string;
  id: string;
  timestamp: number;
  deletedAt?: number;
}

export type onTextChange = (id: string, text: string) => void;
export type onDelete = (id: string) => void;

export function useNotes() {
  const [notes, setNotes] = useState<Record<string, Note>>({});

  const save = useDebouncedFn(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, 250);

  useEffect(() => {
    const items = localStorage.getItem('notes');
    if (!items) {
      return;
    }
    setNotes(JSON.parse(items));
  }, []);

  useEffect(() => {
    save();
  }, [notes]);

  return {
    list: Object.values(notes)
      .filter((w) => !w.deletedAt)
      .sort((a, b) => {
        return (
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
      }),
    onAdd: () => {
      setNotes((prev) => {
        const copy = { ...prev };
        const id = guid();
        copy[id] = {
          timestamp: Date.now(),
          text: 'This is a note.',
          id,
        };
        return copy;
      });
    },
    onDelete: (id: string) => {
      setNotes((prev) => {
        const copy = { ...prev };
        copy[id].deletedAt = Date.now();
        return { ...prev };
      });
    },
    onTextChange: (id: string, text: string) => {
      setNotes((prev) => {
        prev[id].text = text;
        return { ...prev };
      });
    },
  };
}
