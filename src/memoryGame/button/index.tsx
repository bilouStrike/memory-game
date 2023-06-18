import StyledButton from "./style"

type ButtonT = {
    name: string,
    color: string,
    onClick: () => void
}
const Button: React.FC<ButtonT> = ({name, color, onClick}) => {
    return (
        <StyledButton color={color} onClick={onClick}>{name}</StyledButton>
    )
}

export default Button;