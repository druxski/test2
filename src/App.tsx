"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nie",
      "Jesteś pewna?",
      "Jesteś przekonana?",
      "Proszę ):",
      "Nie :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://pouch.jumpshare.com/preview/NJp-00zRpN_pEFLV7OGybV9q-BJcd47fL-VZIHOrKnob_ZnG4D5B4ReIef9ux5_NW-zG8WmAfnDZLauPmDWx7o5ohOwOkkPTw6tOhJAo-AA" />
          <div className="my-4 text-4xl font-bold">W takim razie możesz zejść na dół ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://pouch.jumpshare.com/preview/NJp-00zRpN_pEFLV7OGybV9q-BJcd47fL-VZIHOrKnob_ZnG4D5B4ReIef9ux5_NW-zG8WmAfnDZLauPmDWx7o5ohOwOkkPTw6tOhJAo-AA"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Nie" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
