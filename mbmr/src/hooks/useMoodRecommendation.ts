import { useState } from 'react';
import { Mood, MusicRecommendation } from '../lib/types';
import { moodToMusic } from '../data/moodMappings';

export function useMoodRecommendation() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [recommendation, setRecommendation] = useState<MusicRecommendation | null>(null);

  const selectMood = (mood: Mood) => {
    setSelectedMood(mood);
    setRecommendation(moodToMusic[mood]);
  };

  return { selectedMood, recommendation, selectMood };
}