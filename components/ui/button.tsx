interface ButtonProps {
  name: string;
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <button className="bg-green-yellow p-1 rounded-md text-black font-medium text-sm border border-dark-slatgray" onClick={onClick}>{name}</button>
  )
}