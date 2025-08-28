import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// Define your audio tracks (replace with actual files from public/assets/audio)
const tracks = [
  { src: '/assets/audio/Narcissistic-Tendencies.mp3', title: 'Narcissistic Tendencies' },
  // Add more tracks as needed, e.g., { src: '/assets/audio/track4.mp3', title: 'Track 4' }
];

const FloatingAudioPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  return (
    <div className="fixed top-0 right-0 z-50 flex flex-col items-end w-80 opacity-80">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-gray-400 hover:text-white rounded-full p-3 m-3 transition-colors w-15 text-3xl font-extralight landing-title cursor-pointer"
        aria-label={isExpanded ? 'Minimize Audio Player' : 'Expand Audio Player'}
      >
        {isExpanded ? 'x' : '♪'}
      </button>
      {isExpanded && (
        <AudioPlayer
          className="mt-2 mr-4 text-black bg-black" // Fixed width for compact display; adjust as needed
          header={tracks[currentTrackIndex].title}
          src={tracks[currentTrackIndex].src}
          autoPlay={true}
          onClickPrevious={() =>
            setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length)
          }
          onClickNext={() =>
            setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)
          }
          onEnded={() =>
            setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)
          }
          showSkipControls={false} // Enables previous/next buttons
          showJumpControls={false} // Disables rewind/forward for simplicity
          layout="stacked" // Slim horizontal layout for expanded view
          customAdditionalControls={[]} // Removes extra controls if not needed
          autoPlayAfterSrcChange={true} // Auto-plays after track change
        />
      )}
    </div>
  );
};

export default FloatingAudioPlayer;