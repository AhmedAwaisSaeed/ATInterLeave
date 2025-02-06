import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import TrackPlayer, { State, useProgress, Event, useTrackPlayerEvents } from 'react-native-track-player';
import { useTheme } from '../../../../theme';
import { getStyles } from './styles';
import { useTranscriptStore } from '../../../../store/Transcriptstore';
import { HeaderComponent } from '../../../../components';
import { useTranslation } from 'react-i18next';
import { exampleAudio } from '../../../../assets/audios';

const HomeScreen = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const {t} = useTranslation();
  const progress = useProgress();
  const { transcript, currentPhraseIndex, setCurrentPhraseIndex } = useTranscriptStore();
  const [playbackState, setPlaybackState] = useState<State>(State.None);

  useEffect(() => {
    setupPlayer();
    return () => {
      TrackPlayer.stop(); // Cleanup: Stop the track player when the component unmounts
    };
  }, []);

  // Event listener for playback state changes
  useTrackPlayerEvents([Event.PlaybackState], async (event) => {
    if (event.type === Event.PlaybackState) {
      setPlaybackState(event.state);
    }
  });

  useEffect(() => {
    syncPhraseWithAudio(); // Sync phrases with the current audio position
  }, [progress.position]);

  // Setup TrackPlayer with audio file
  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: 'audio-track',
      url: exampleAudio,
      title: 'Example Audio',
      artist: 'Speaker',
    });
  };

  // Sync the currently spoken phrase based on elapsed audio time
  const syncPhraseWithAudio = () => {
    let elapsedTime = progress.position * 1000;
    let totalDuration = 0;

    for (let i = 0; i < interleavedTranscript.length; i++) {
      totalDuration += interleavedTranscript[i].time + transcript.pause;
      if (elapsedTime < totalDuration) {
        setCurrentPhraseIndex(i);
        return;
      }
    }
  };

  // Handle Play/Pause button toggle
  const handlePlayPause = async () => {
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setPlaybackState(await TrackPlayer.getState());
  };

  // Reset playback to the beginning
  const handleRewind = async () => {
    await TrackPlayer.seekTo(0);
    setCurrentPhraseIndex(0);
  };

  // Skip to the end of the track
  const handleForward = async () => {
    await TrackPlayer.seekTo(progress.duration);
  };

  // 🛠️ Fix: Create an interleaved transcript list to maintain spoken order
  const interleavedTranscript = [];
  const maxPhrases = Math.max(...transcript.speakers.map(s => s.phrases.length));

  for (let i = 0; i < maxPhrases; i++) {
    transcript.speakers.forEach(speaker => {
      if (i < speaker.phrases.length) {
        interleavedTranscript.push({
          speaker: speaker.name,
          words: speaker.phrases[i].words,
          time: speaker.phrases[i].time,
        });
      }
    });
  }

  return (
    <View style={styles.container}>
      <HeaderComponent  title={t('common.home')} />
      {/* Display the transcript with interleaved spoken phrases */}
      <FlatList
        data={interleavedTranscript}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text style={[styles.phrase, index === currentPhraseIndex ? styles.highlighted : null]}>
            {item.speaker}: {item.words}
          </Text>
        )}
      />
      
      {/* Audio control buttons */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={handleRewind}><Text>⏪</Text></TouchableOpacity>
        <TouchableOpacity onPress={handlePlayPause}>
          <Text>{playbackState === State.Playing ? '⏸️' : '▶️'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForward}><Text>⏩</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export { HomeScreen };
