/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import './App.css'
 
class App extends Component {
  constructor(props) {
    super(props);

    this.player = {}
    this.state = {
        video: "",
        title: "Video JS"
    }
  }
 
    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }
 
    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }
 
    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }
 
    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }
 
    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }
 
    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }
 
    onVideoEnd(){
        console.log("Video ended");
    }

    change = (event) => {
      const vids = {
        "Sintel": "https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
        "HD World": "https://multiplatform-f.akamaihd.net/i/multi/april11/hdworld/hdworld_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
        "Big Buck Bunny": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
        "CCTV": "https://multiplatform-f.akamaihd.net/i/multi/april11/cctv/cctv_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8"
      }
     this.setState({video: vids[event.target.value]})
     this.setState({title: event.target.value})

    }
    
 
    render() {
        return (
            <div key={this.state.video} className="container middle">
            <h1>{this.state.title}</h1>
            <div className="dropdown ">
              <select onChange={this.change} className="btn btn-secondary dropdown-toggle" aria-labelledby="dropdownMenuButton" name='videos'>
              <option value="None" selected disabled hidden> 
              Select an Option </option> 
                <option value="Big Buck Bunny">Big Buck Bunny</option>
                <option value="HD World"> HD World</option>
                <option value="CCTV"> CCTV</option>
                <option value="Sintel">Sintel</option>
            </select>
              </div>
              <div className="">
                <VideoPlayer
                    controls={true}
                    src={this.state.video}
                    key={this.state.video}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
                </div>
            </div>
        );
    }
}
export default App;