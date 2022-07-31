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
                    props.characterList.map(item => 
                        <Character
                        key={Math.random().toString()}
                        characterName={item.name}
                        level={item.level}
                        />
                    )
                }
        </Stack>
    )
};

export default CharactersList;