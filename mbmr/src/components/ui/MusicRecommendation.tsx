import { MusicRecommendation as MusicRecommendationType } from '@/lib/types';
import { Music } from 'lucide-react';

interface MusicRecommendationProps {
  recommendation: MusicRecommendationType;
}

const MusicRecommendation = ({ recommendation }: MusicRecommendationProps) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg animate-fadeIn">
      <div className="flex items-center gap-4 mb-4">
        <Music className="w-8 h-8 text-gray-600" />
        <h2 className="text-2xl font-bold text-gray-800">{recommendation.genre}</h2>
      </div>
      
      <p className="text-gray-600 mb-4">{recommendation.description}</p>
      
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700">Recommended Artists:</h3>
        <ul className="list-disc list-inside space-y-2">
          {recommendation.exampleArtists.map((artist) => (
            <li key={artist} className="text-gray-600">{artist}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MusicRecommendation;