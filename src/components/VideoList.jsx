import VideoListEntry from './VideoListEntry.js';
var VideoList = ({videos}) => (
  <div className="video-list">
    {videos.map((video) => (
      <VideoListEntry
        video={video}
        key={video.id.videoId}
      />
    )
    )}
  </div>
);

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
/* <div>[{props.videoEntry}]</div>
<div>{props.videoEntry}</div>
<div>{props.videoEntry}</div>
<div>{props.videoEntry}</div>
<div>{props.videoEntry}</div> */
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
