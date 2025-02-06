import {create} from 'zustand';

interface Phrase {
  words: string;
  time: number;
}

interface Speaker {
  name: string;
  phrases: Phrase[];
}

interface TranscriptState {
  transcript: {
    pause: number;
    speakers: Speaker[];
  };
  currentPhraseIndex: number;
  setCurrentPhraseIndex: (index: number) => void;
}

export const useTranscriptStore = create<TranscriptState>((set) => ({
  transcript: {
    pause: 250,
    speakers: [
      {
        name: 'John',
        phrases: [
          { words: 'this is one phrase.', time: 1474 },
          { words: 'now the second phrase.', time: 1667 },
          { words: 'end with last phrase.', time: 1214 },
        ],
      },
      {
        name: 'Jack',
        phrases: [
          { words: 'another speaker here.', time: 1570 },
          { words: 'saying her second phrase.', time: 1989 },
          { words: 'and eventually finishing up.', time: 1486 },
        ],
      },
    ],
  },
  currentPhraseIndex: 0,
  setCurrentPhraseIndex: (index) => set({ currentPhraseIndex: index }),
}));
