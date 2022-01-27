// Modules
import React from 'react';
import ShakaPlayer from 'shaka-player-react';
import uuid from 'react-uuid'

// Material UI Components
import { videoAssets } from './data/video-list';
import { Button } from '@mui/material';

// Custom Components
import FeaturesList from './components/FeaturesList';
// import SelectVideoList from './components/SelectVideoList';
import ChromelessSwitch from './components/ChromelessSwitch';
import VideoSlider from './components/VideoSlider';

// Styles
import './styles/App.css'
import './styles/home.css'
import './styles/ShakaPlayer.css'

// Mapping video assets to video objects to correct use in the video list
const STREAMS = videoAssets.map(asset => ({
  id: uuid(),
  src: asset.manifestUri,
  name: asset.name,
  thumbnail: asset.iconUri || `https://via.placeholder.com/300x210/000000/FFFFFF/?text=${asset.name.substring(0, 10).split(' ').join('+')}`,
  features: asset.feature || []
}));

// Main App Component
export default function App() {
  // Determine if the video is presented
  const [show, setShow] = React.useState(false);

  // Determine if the UI is presented
  const [chromeless, setChromeless] = React.useState(false);

  // TODO Find out what ref is for
  const ref = React.useRef(null);

  // Current video data
  const [video , setVideo] = React.useState(STREAMS[0]);
  // Source of video to present
  // eslint-disable-next-line no-unused-vars
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
  function onChromeless(event) {
    const { checked } = event.target;
    setChromeless(checked);
  }

  // Detect the change of selected video, and update the respective hooks
  // function onSelectSrc(event) {
  //   const id = event.target.value;
  //   setSrc(id);
  //   setVideo(STREAMS.find(stream => stream.id === id));
  // }

  // Get Video Id and automatically update the hooks that make the video to play.
  function onSelectSrcShow (event) {
    const id = event.target.value;
    setShow(true);
    setSrc(id);
    setVideo(STREAMS.find(stream => stream.id === id));
  }

  return (
    <div>
      <div className="video__control-bar">
        {/* <div className='video__select-video-list-div'>
          <SelectVideoList
            elements={STREAMS}
            initialValue={src}
            onChange={onSelectSrc}
          />
        </div> */}
        <div className='video__toggle-button-div'>
          <Button
            onClick={onToggle}
            variant={show ? 'outlined' : 'contained'}
            size={show ? 'small' : 'large'}
          >
            {show ? 'Hide player' : 'Show player'}
          </Button>
        </div>
        <div className='video__toggle-ui-button-div'>
          <ChromelessSwitch
            label="Disable UI"
            helperText='Show and hide the UI to take effect.'
            onChange={onChromeless}
          />
        </div>
      </div>
      {show && (
        <div className='video__features'>
          <ShakaPlayer autoPlay ref={ref} src={video.src} chromeless={chromeless} />
          <pre>{JSON.stringify(video, null, 2)}</pre>
          <FeaturesList features={video.features} />
        </div>
      )}
      <div className='video__slicker'>
        <VideoSlider videoList={STREAMS} onSelectVideo={onSelectSrcShow}/>
      </div>
    </div>
  );
}