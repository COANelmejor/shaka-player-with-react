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

function App() {
  const [show, setShow] = React.useState(true);
  const [chromeless, setChromeless] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    window.getShakaInst = () => ref.current;
  }, []);

  function onToggle() {
    setShow(!show);
  }

  function onChromeless() {
    setChromeless(!chromeless);
  }

  const [src, setSrc] = React.useState(STREAMS[0].id);
  const [video , setVideo] = React.useState(STREAMS[0]);

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
        {/* <BasicSelect elements={STREAMS} initialValue={src} onChange={onSelectSrc} /> */}
        <SelectVideoList elements={STREAMS} initialValue={src} onChange={onSelectSrc}/>

        {/* <select value={src} onChange={onSelectSrc}>
          {STREAMS.map(stream => (
            <option key={stream.id} value={stream.id}>{stream.name}</option>
          ))}
        </select>*/}
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

export default App;
