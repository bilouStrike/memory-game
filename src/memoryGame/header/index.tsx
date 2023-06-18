import Button from "../button";
import Logo from "../logo";
import { StyledHeader, StyledMenu } from "./style";
import { GridContext } from "..";
import { useContext } from "react";
import generateNewCard from "../generateNewCard";

const Header = () => {
    const { gameRef, newGameState, setNewGame, setGrid, level }  = useContext(GridContext);
    const newGame = () => { 
        setNewGame(!newGameState);
        setGrid(generateNewCard(level))
    };
    const restartGame = () => {
        const newGrid = [...gameRef.current];
        const newGame1 = newGrid.map((item) => ({...item, status: false}));
        setGrid(newGame1);
    };

    return  (
        <StyledHeader>
            <Logo />
            <StyledMenu>
                <Button name="Restart" color="primary" onClick={restartGame} />
                <Button name="New Game" color="default" onClick={newGame}/>
            </StyledMenu>
        </StyledHeader>
    );
}

export default Header;