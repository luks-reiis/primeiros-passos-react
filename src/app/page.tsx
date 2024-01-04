"use client"

import { use, useEffect, useState } from "react";
import { VideoPlayer } from "./components/VideoPlayer";

function Page(){

  const[playing, setPlaying] = useState(false);

  return (
    <div className="">
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl text-blue-400 mb-3">{playing ? 'Rodando' : 'Pausado'}</p>
        <button className="bg-blue-400 rounded-md p-3 text-black" onClick={() => setPlaying(!playing)}>Play/Pause</button>
      </div>

      <VideoPlayer
        src="/assets/videoTeste.mp4"
        isPlaying={playing}
      />
    </div>
    );
}

export default Page;