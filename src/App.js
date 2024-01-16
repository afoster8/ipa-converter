import React, { useState } from "react";
import "./App.css";
import { convertToIpa, convertToEnglish } from "./components/converter.js";

function App({ json }) {
  const [error, setError] = useState("");
  const [ipaResult, setIpaResult] = useState("");
  const [englishResult, setEnglishResult] = useState("");
  const [ipaInput, setIpaInput] = useState("");
  const [englishInput, setEnglishInput] = useState("");

  const handleConvertClick = (selection) => {
    var result = "";
    setError("");

    try {

      switch (selection) {
        case "english-input":
          setEnglishInput("");
          setIpaResult("");

          result = convertToIpa(json);
          setEnglishInput(document.getElementById("input-english").value);
          setIpaResult(result);

          break;

        case "ipa-input":
          setIpaInput("");
          setEnglishResult("");

          result = convertToEnglish(json);
          setIpaInput(document.getElementById("input-ipa").value);
          setEnglishResult(result);

          break;

        default:
          break;
      }

    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };


  return (
    <div className="App">

      <div className="title">
        <h1>IPA Converter</h1>
        <p>(for English only)</p>
      </div>

      <div className="page">
        {error && <p className="error-message">{error}</p>}

        <div className="modes">
          <p> Input English, output IPA! </p>

          <div className="input-container">
            <input type="text" id="input-english" maxLength={200}></input>
            <button onClick={() => handleConvertClick("english-input")}>Convert</button>
          </div>

          {ipaResult &&
            <div className="ipa-output-container">
              <div className="user-input">
                <p id="user-input">{englishInput}</p>
              </div>

              <div className="user-output">
                <p id="ipa-output">{ipaResult}</p>
              </div>
            </div>
          }
        </div>

        <div className="modes">
          <p> Input IPA, output English! </p>

          <div className="input-container">
            <input type="text" id="input-ipa" maxLength={200}></input>
            <button onClick={() => handleConvertClick("ipa-input")}>Convert</button>
          </div>

          {englishResult &&
            <div className="english-output-container">

              <div className="user-input">
                <p id="user-input">{ipaInput}</p>
              </div>

              <div className="user-output">
                <p id="english-output">{englishResult}</p>
              </div>
            </div>
          }
        </div>

        <br />
      </div>
      <p>Note that there is not a one-to-one mapping of IPA to English words and vice versa, and there may be some homonym/homophone imprecision that you may need to work out yourself.</p>
      <p>There is some stripping of punctuation built into the converter, but if you get word-not-found errors, check for extra punctuation to see if that resolves it. </p>
      <p>If a word you know exists in English is not found in the mapping, sorry! Try <a href="https://www.wiktionary.org">Wiktionary</a> as another source!</p>
      <p>Uses the <a href="http://www.speech.cs.cmu.edu/cgi-bin/cmudict">CMU Pronouncing Dictionary</a> as a resource for ARPAbet mappings and word list. </p>
    </div>
  );
}

export default App;

