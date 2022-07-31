import React, { useState } from 'react';
import './App.css';
import CharactersList from './components/Characters/CharacterList';
import NewCharacterForm from './components/CharacterForm/NewCharacterForm';
import Chart from './components/Chart/Chart';
import APLInfo from './components/APLInfo/APLInfo';
//const sum = (accumulator, curr) => accumulator + curr;

function App() {
  const [Characters, setCharacters] = useState([]);
  const [APL, setAPL] = useState(1);
  const MaxXPMultiplyer = 300;
  const MinXPMultiplyer = 200;
  const MaxGoldAwardMultiplyer = 500;
  const [MaxXPAward, setMaxXPAward] = useState(300);
  const [MinXPAward, setMinXPAward] = useState(200);
  const [GoldAward, setGoldAward] = useState(500);
  const [TreasureLevels, setTreasureLevels] = useState('');
  const [TotalCharacterLevels,setTotalCharacterLevels] = useState(1);



  const AddCharacterHandler = (character) => {
    let tempCharacters = [character,...Characters];
    setCharacters((prevState) => {
      return tempCharacters;
    });

    let levelTotal=0;
    tempCharacters.forEach(function(char){
      levelTotal += parseInt(char.level);
    });

    setTotalCharacterLevels(levelTotal);
    let tempAPL = parseFloat(Math.round(levelTotal/(tempCharacters.length))).toFixed(1)
    setAPL(tempAPL);
    setMaxXPAward(tempAPL*MaxXPMultiplyer);
    setMinXPAward(tempAPL*MinXPMultiplyer);
    setGoldAward(tempAPL*MaxGoldAwardMultiplyer);
    setTreasureLevels((prevState) => {
      let treasureArray=['Uncommon'];
      if(tempAPL >= 10){
        treasureArray.push('Rare');
      }
      if(tempAPL >= 16){
        treasureArray.push('Very Rare');
      }
      return treasureArray.join(', ');
    });
  }

  return (
    <div className="App">
      <h1>DM Helper</h1>
      <NewCharacterForm onAddCharacter={AddCharacterHandler} />
      <hr/>
      <Chart dataPoints={Characters} />
      <APLInfo totalCharacterLevels={TotalCharacterLevels} apl={APL} xpmax={MaxXPAward} xpmin={MinXPAward} gold={GoldAward} treasureLevels={TreasureLevels}/>
      <hr/>
      <CharactersList characterList={Characters} />
    </div>
  );
}

export default App;
