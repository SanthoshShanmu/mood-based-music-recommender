'use client';

import Layout from '@/components/ui/Layout';
import MoodSelector from '@/components/ui/MoodSelector';
import MusicRecommendation from '@/components/ui/MusicRecommendation';
import { useMoodRecommendation } from '@/hooks/useMoodRecommendation';

export default function Home() {
  const { selectedMood, recommendation, selectMood } = useMoodRecommendation();

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How are you feeling today?</h2>
          <p className="text-gray-600">Select your mood to get personalized music recommendations</p>
        </div>

        <MoodSelector onMoodSelect={selectMood} selectedMood={selectedMood} />
        
        {recommendation && <MusicRecommendation recommendation={recommendation} />}
      </div>
    </Layout>
  );
}