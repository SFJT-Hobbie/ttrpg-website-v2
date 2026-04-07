import { useState, useRef, useEffect } from 'react';
import { motion as M, AnimatePresence } from 'framer-motion';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { AUDIO_TRACKS } from '../config/audioTracks.js';
import { Icon } from '@mdi/react';
import { mdiMusic, mdiMusicOff } from '@mdi/js';

const VOLUME_KEY = 'aristilia_music_volume';

const FloatingAudioPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const audio = playerRef.current?.audio?.current;
    if (!audio) return;
    const stored = localStorage.getItem(VOLUME_KEY);
    if (stored != null) {
      const v = Number.parseFloat(stored);
      if (!Number.isNaN(v) && v >= 0 && v <= 1) audio.volume = v;
    }
  }, [currentTrackIndex]);

  const track = AUDIO_TRACKS[currentTrackIndex] ?? AUDIO_TRACKS[0];
  const hasMultipleTracks = AUDIO_TRACKS.length > 1;

  return (
    <>
      {/* Music toggle FAB — sits above the dice FAB */}
      <M.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setExpanded((v) => !v)}
        className={`fab-base fixed bottom-[4.75rem] right-4 z-50 flex h-13 w-13 items-center justify-center md:bottom-6 md:right-[5.5rem] md:h-14 md:w-14 ${expanded ? 'border-amber-400/40 bg-white/12' : ''}`}
        aria-label={expanded ? 'Hide music player' : 'Show music player'}
      >
        <Icon path={isPlaying ? mdiMusic : mdiMusicOff} size={0.9} className="text-amber-200/80" />
      </M.button>

      {/* Expanded player panel */}
      <AnimatePresence>
        {expanded && (
          <M.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="floating-audio-fab pointer-events-auto fixed bottom-[8.5rem] right-4 left-4 z-50 ml-auto max-w-[18rem] md:bottom-[5.5rem] md:left-auto md:right-6"
            role="region"
            aria-label="Background music"
          >
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-zinc-950/92 p-2 shadow-2xl backdrop-blur-xl">
              <p className="cinzel truncate px-1 text-center text-[11px] tracking-wide text-amber-200/85">
                {track.title}
              </p>
              <AudioPlayer
                ref={playerRef}
                className="floating-audio-fab__player"
                src={track.src}
                autoPlay={false}
                layout="stacked"
                showSkipControls={hasMultipleTracks}
                showJumpControls={false}
                showFilledProgress={false}
                customAdditionalControls={[]}
                autoPlayAfterSrcChange
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClickPrevious={() =>
                  setCurrentTrackIndex((prev) => (prev - 1 + AUDIO_TRACKS.length) % AUDIO_TRACKS.length)
                }
                onClickNext={() =>
                  setCurrentTrackIndex((prev) => (prev + 1) % AUDIO_TRACKS.length)
                }
                onEnded={() =>
                  setCurrentTrackIndex((prev) => (prev + 1) % AUDIO_TRACKS.length)
                }
                onVolumeChange={(e) => {
                  const el = e.currentTarget;
                  if (el && typeof el.volume === 'number' && !Number.isNaN(el.volume)) {
                    localStorage.setItem(VOLUME_KEY, String(el.volume));
                  }
                }}
              />
            </div>
          </M.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingAudioPlayer;
