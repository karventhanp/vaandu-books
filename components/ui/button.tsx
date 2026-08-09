interface ButtonProps {
  name: string;
  onClick?: () => void
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ name, onClick, className }) => {
  return (
    <button className={`bg-green-yellow p-1 rounded-md text-black font-medium text-sm border border-dark-slatgray ${className}`} onClick={onClick}>{name}</button>
  )
}