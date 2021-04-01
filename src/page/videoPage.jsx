import React from "react";

function VideoPage() {
  window["onYouTubeIframeAPIReady"] = e => {
    let YT = window["YT"];
    let reframed = false;
    let player = new window["YT"].Player("player", {
      videoId: video,
      events: {
        onStateChange: onPlayerStateChange,
        onError: onPlayerError,
        onReady: e => {
          if (!reframed) {
            reframed = true;
            reframe(e.target.a);
          }
        },
      },
    });
  };

  const init = () => {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  };

  const nPlayerStateChange = event => {
    console.log(event);
    switch (event.data) {
      case window["YT"].PlayerState.PLAYING:
        if (cleanTime() == 0) {
          console.log("started " + cleanTime());
        } else {
          console.log("playing " + cleanTime());
        }
        break;
      case window["YT"].PlayerState.PAUSED:
        if (player.getDuration() - player.getCurrentTime() != 0) {
          console.log("paused" + " @ " + cleanTime());
        }
        break;
      case window["YT"].PlayerState.ENDED:
        console.log("ended ");
        break;
    }
  };
  //utility
  const cleanTime = () => {
    return Math.round(player.getCurrentTime());
  };
  const onPlayerError = event => {
    switch (event.data) {
      case 2:
        console.log("" + video);
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
  };

  return (
    <>
      <div id='player'></div>
    </>
  );
}

export default VideoPage;

function reframe(e, t) {
  var i = "string" == typeof e ? document.querySelectorAll(e) : e,
    n = t || "js-reframe";
  "length" in i || (i = [i]);
  for (var o = 0; o < i.length; o += 1) {
    var r = i[o];
    if (-1 !== r.className.split(" ").indexOf(n)) return;
    var f = (r.offsetHeight / r.offsetWidth) * 100,
      d = document.createElement("div");
    d.className = n;
    var a = d.style;
    (a.position = "relative"), (a.width = "100%"), (a.paddingTop = f + "%");
    var s = r.style;
    (s.position = "absolute"),
      (s.width = "100%"),
      (s.height = "100%"),
      (s.left = "0"),
      (s.top = "0"),
      r.parentNode.insertBefore(d, r),
      r.parentNode.removeChild(r),
      d.appendChild(r);
  }
}
