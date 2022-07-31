import React, { useState } from 'react';
import './App.css';
import CharactersList from './components/Characters/CharacterList';
import NewCharacterForm from './components/CharacterForm/NewCharacterForm';
import Chart from './components/Chart/Chart';
import APLInfo from './components/APLInfo/APLInfo';

function App() {
  const [Characters, setCharacters] = useState([]);
  const [APL, setAPL] = useState(1);
  const MaxXPMultiplyer = 300;
  const MinXPMultiplyer = 200;
  const MaxGoldAwardMultiplyer = 500;
  const [MaxXPAward, setMaxXPAward] = useState(300);
  const [MinXPAward, setMinXPAward] = useState(200);
  const [GoldAward, setGoldAward] = useState(500);
  const [TreasureLevels, setTreasureLevels] = useState('Uncommon');
  const [TotalCharacterLevels,setTotalCharacterLevels] = useState(1);

  const AddCharacterHandler = (character) => {
    let tempCharacters = [character,...Characters];
    charactersWereUpdated(tempCharacters);
  }

  const onDeleteCharacterHandler = (characterName) =>{
    console.log(Characters)
    let tempCharacters = [...Characters].filter(charact => charact.name !== characterName);
    console.log(tempCharacters);
    charactersWereUpdated(tempCharacters)
  }

  const charactersWereUpdated = (tempCharacters) =>{
    if(tempCharacters.length === 0){
      setCharacters((prevState) => {
        return tempCharacters;
      });
      setTotalCharacterLevels(1);
      setAPL(1);
      setMaxXPAward(500);
      setMinXPAward(200);
      setGoldAward(500);
      setTreasureLevels('Uncommon');
      return;
    }
    
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
      <CharactersList characterList={Characters} onDeleteCharacter={onDeleteCharacterHandler} />
    </div>
  );
}

export default App;
