import { EmotionIcons } from '../icons/EmotionIcons';
import { Mood } from '@/lib/types';
import { moodToMusic } from '@/data/moodMappings';

interface MoodSelectorProps {
  onMoodSelect: (mood: Mood) => void;
  selectedMood: Mood | null;
}

const MoodSelector = ({ onMoodSelect, selectedMood }: MoodSelectorProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {(Object.keys(moodToMusic) as Mood[]).map((mood) => {
        const Icon = EmotionIcons[mood];
        return (
          <button
            key={mood}
            onClick={() => onMoodSelect(mood)}
            className={`
              p-6 rounded-lg shadow-lg transition-all duration-300
              ${moodToMusic[mood].color} hover:scale-105
              ${selectedMood === mood ? 'ring-4 ring-white' : ''}
              flex flex-col items-center justify-center gap-2
            `}
          >
            <Icon className="w-8 h-8 text-black" />
            <span className="text-black font-semibold capitalize">{mood}</span>
          </button>
        );
      })}
    </div>
  );
};

export default MoodSelector;