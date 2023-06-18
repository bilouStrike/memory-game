import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1150px;
`;

export const StyledGrid = styled.div<{cell: number}>`
    display: grid;
    justify-content: center;
    gap: 20px;
    grid-template-columns: repeat(${props => props.cell}, 100px);
    grid-template-rows: repeat(${props => props.cell}, 100px);
    margin-top: 60px;
    margin-bottom: 60px;
`;

export const StyledCell = styled.div<{isHidden: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => !props.isHidden ? '#31485a' : '#bccedb'} ;
    border-radius: 50%;
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.5s ease;
`;

export const CellSpan = styled(StyledCell)<{isHidden: boolean}>`
    ${props => !props.isHidden ? 'display: none' : ''}
`;