import React from 'react';
import kumaImage from './rsc/images/kuma.png';
import sounds from './sounds';

export default function App() {
  function playKumaSound() {
    const soundNumber = Math.floor(Math.random() * 4);
    const kumaPlayer = new Audio(sounds[soundNumber]);
    kumaPlayer.play();
  }

  return (
    <div className="MAIN_CONTAINER w-screen h-screen flex flex-col items-center justify-between py-8">
      <div className="text-center">
        <h1 className="TITLE text-4xl text-yellow-500 font-black">Bear Time!</h1>
        <p className="animate-pulse">Press Little Kuma to hear a sound!</p>
      </div>
      <button onClick={playKumaSound}>
        <img width="350px" src={kumaImage} alt="Kuma" className="animate-wiggle" />
      </button>
      <p className="text-xs text-gray-500">Bear Time! © 2021 by Conner Turmon</p>
    </div>
  );
}