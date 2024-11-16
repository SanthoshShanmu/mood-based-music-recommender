import { Mood, MusicRecommendation } from '../lib/types';

export const moodToMusic: Record<Mood, MusicRecommendation> = {
  happy: {
    genre: 'Pop/Upbeat',
    description: 'Uplifting pop music with positive lyrics and bright melodies to enhance your good mood',
    exampleArtists: ['Pharrell Williams', 'Justin Timberlake', 'Dua Lipa'],
    color: 'bg-yellow-400'
  },
  sad: {
    genre: 'Indie/Folk',
    description: 'Melodic and emotional songs that help process feelings and provide comfort',
    exampleArtists: ['Bon Iver', 'The National', 'Phoebe Bridgers'],
    color: 'bg-blue-400'
  },
  energetic: {
    genre: 'Electronic/Dance',
    description: 'High-energy beats and rhythms to keep your momentum going',
    exampleArtists: ['Daft Punk', 'The Chemical Brothers', 'Calvin Harris'],
    color: 'bg-red-400'
  },
  calm: {
    genre: 'Ambient/Classical',
    description: 'Soothing melodies and peaceful compositions to help you relax',
    exampleArtists: ['Brian Eno', 'Max Richter', 'Nils Frahm'],
    color: 'bg-green-400'
  },
  angry: {
    genre: 'Rock/Metal',
    description: 'Intense and powerful music to channel your energy',
    exampleArtists: ['System of a Down', 'Rage Against the Machine', 'Metallica'],
    color: 'bg-purple-400'
  },
  romantic: {
    genre: 'R&B/Soul',
    description: 'Smooth and passionate songs to match your romantic mood',
    exampleArtists: ['John Legend', 'Daniel Caesar', 'H.E.R.'],
    color: 'bg-pink-400'
  }
};