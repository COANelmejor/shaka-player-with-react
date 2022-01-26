import React from 'react';
import ShakaPlayer from 'shaka-player-react';
import uuid from 'react-uuid'
import './App.css'
import { videoAssets } from './data/video-list';
import { Button } from '@mui/material';
import FeaturesList from './components/FeaturesList';
import SelectVideoList from './components/SelectVideoList';
// import BasicSelect from './components/BasicList';

const STREAMS = videoAssets.map(asset => ({
  id: uuid(),
  src: asset.manifestUri,
  name: asset.name,
  features: asset.feature || []
}));

export default function App() {
  // Determine if the video is presented
  const [show, setShow] = React.useState(true);

  // Determine if the UI is presented
  const [chromeless, setChromeless] = React.useState(false);

  // TODO Find out what ref is for
  const ref = React.useRef(null);

  // Current video data
  const [video , setVideo] = React.useState(STREAMS[0]);
  // Source of video to present
  const [src, setSrc] = React.useState(STREAMS[0].id);

  // TODO Determine what is window.getShakaInst used for
  React.useEffect(() => {
    window.getShakaInst = () => ref.current;
  }, []);

  // Tooggle the visibility of video
  function onToggle() {
    setShow(!show);
  }

  // Tooggle the visibility of UI
  function onChromeless() {
    setChromeless(!chromeless);
  }

  // Detect the change of selected video, and update the respective hooks
  function onSelectSrc(event) {
    const id = event.target.value;
    setSrc(id);
    setVideo(STREAMS.find(stream => stream.id === id));
  }

  return (
    <div>
      <div>
        <Button
          onClick={onToggle}
          variant={show ? 'outlined' : 'contained'}
          size={show ? 'small' : 'large'}>
            {show ? 'Hide' : 'Show'}
          </Button>
      </div>
      <div>
        <input type="checkbox" onChange={onChromeless} /> Chromeless
      </div>
      <div>
        <SelectVideoList elements={STREAMS} initialValue={src} onChange={onSelectSrc}/>
      </div>
      {show && (
        <>
          <ShakaPlayer ref={ref} autoPlay src={video.src} chromeless={chromeless} lang="es" />
          <pre>{JSON.stringify(video, null, 2)}</pre>
          <FeaturesList features={video.features} />
        </>
      )}
    </div>
  );
}