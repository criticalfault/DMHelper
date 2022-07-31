import Character from '../Characters/Character';
import Stack from 'react-bootstrap/Stack';
import Card from '../UI/Card'
const CharactersList = (props) => {

    if(props.characterList.length === 0){
      return (<Card><h2>No Characters Found.</h2></Card>);
    }


    return (
        <Stack gap={3}>
                {
                    props.characterList.map((item,index) => 
                        <Character
                        key={Math.random().toString()}
                        id={index}
                        characterName={item.name}
                        level={item.level}
                        onDelete={props.onDeleteCharacter}
                        />
                    )
                }
        </Stack>
    )
};

export default CharactersList;