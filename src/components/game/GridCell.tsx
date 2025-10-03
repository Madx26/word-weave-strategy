import { Input } from "@/components/ui/input";
import { Player } from "@/pages/Game";
import { cn } from "@/lib/utils";

interface GridCellProps {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  player: Player;
}

export const GridCell = ({ value, onChange, disabled, player }: GridCellProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    if (val.length <= 1 && /^[A-Z]*$/.test(val)) {
      onChange(val);
    }
  };

  return (
    <Input
      type="text"
      value={value}
      onChange={handleChange}
      disabled={disabled}
      maxLength={1}
      className={cn(
        "w-full aspect-square text-center text-2xl font-bold uppercase",
        "transition-all duration-200",
        "bg-grid-cell border-2 border-grid-border",
        !disabled && !value && "hover:bg-grid-hover hover:border-primary/30",
        !disabled && !value && player === 1 && "focus:ring-2 focus:ring-primary",
        !disabled && !value && player === 2 && "focus:ring-2 focus:ring-secondary",
        value && player === 1 && "bg-primary-light text-primary border-primary/50",
        value && player === 2 && "bg-secondary-light text-secondary-foreground border-secondary/50",
        value && "shadow-soft",
        disabled && !value && "cursor-not-allowed opacity-40"
      )}
    />
  );
};
