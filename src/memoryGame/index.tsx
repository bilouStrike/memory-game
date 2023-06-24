import { Dispatch, SetStateAction, createContext, useEffect, useRef, useState } from "react";
import { Container, StyledGrid, StyledCell, CellSpan } from "./style";
import generateNewCard from "./generateNewCard";
import Header from "./header";
import { GridItemT } from "./type";
import Button from "./button";

type contextT = {
    level: number,
    setGrid: Dispatch<SetStateAction<GridItemT[]>>,
    setLevel: Dispatch<SetStateAction<number>>,
    gameRef: React.MutableRefObject<GridItemT[]>,
    newGameState: boolean,
    setNewGame: Dispatch<SetStateAction<boolean>>
}

export const GridContext = createContext<contextT>({} as contextT);

const MemoryGame = () => {
    const [level, setLevel] = useState<number>(6);
    const [grid, setGrid] = useState<GridItemT[]>(generateNewCard(level));
    const [prev, setPrev] = useState<number>(-1);
    const [lockClick, setLockClick] = useState<boolean>(false);
    const [newGameState, setNewGame] = useState(false);
    const gameRef = useRef<GridItemT[]>([]);

    const handleCellClick = (id: number) => {
        if (lockClick === true) return;
        if (prev === -1) {
            grid[id].status = true;
            setGrid([...grid]);
            setPrev(id);
        } else {
            checkTwocard(id);
        }
    }

    const checkTwocard = (current:number) => {  
        grid[current].status = true;
        setLockClick(true);
        setGrid([...grid]);
        if (grid[current].value === grid[prev].value) {     
            grid[prev].status = true;
            setGrid([...grid]);
            setPrev(-1);
            setLockClick(false);
        } else {
            setTimeout(() => {
                grid[prev].status = false;
                grid[current].status = false;
                setGrid([...grid]);
                setPrev(-1);
                setLockClick(false);
            }
            , 1000);
        }
    }

    const switchLevel = (level: number) => {
        generateNewCard(level);
        setLevel(level);
    }

    useEffect(() => {
        if (gameRef.current === null || !newGameState) {
            gameRef.current = grid;        
        }
    }, 
    [newGameState, grid, level]);

    return (
        <GridContext.Provider value={{gameRef, newGameState, setNewGame , setGrid, level, setLevel}}>
            <Container>
                <Header />
                <h3>The objective of the game is to find pairs of matching cards by flipping them over and remembering their positions.<br/> When a player clicks on a card, it flips over to reveal the image.<br/> If the flipped cards match</h3>
                <Button name="Easy" color={level === 6 ? 'primary' : 'default'} onClick={() => switchLevel(6)} />
                <Button name="Mediem" color={level === 8 ? 'primary' : 'default'} onClick={() => switchLevel(8)} />
                <StyledGrid cell={level === 6 ? 3 : 4}>
                    {grid.map((item, index) => 
                        <StyledCell onClick={() => handleCellClick(index)} isHidden={item.status}>
                            <CellSpan isHidden={item.status}>{item.value}</CellSpan>
                        </StyledCell>
                    )}
                </StyledGrid>
            </Container>
        </GridContext.Provider>
    )
}

export default MemoryGame;