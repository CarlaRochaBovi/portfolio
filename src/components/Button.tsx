interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof styleVariants;
  size?: keyof typeof sizeVariants;
  children: React.ReactNode;
  className?: string;
}

const styleVariants = {
  primary: "text-[#3c2c50] border-[#C799FF] bg-[#C799FF] hover:brightness-85",
  inverted_white:
    "text-[#E6E3FA] border-[#E6E3FA] bg-[#131319] hover:bg-[#E6E3FA] hover:text-[#131319] ",
  iconOnly: 'border-none'
};

const sizeVariants = {
  default: "max-h-min min-w-max text-md px-6 py-3",
  minimum: "max-h-min min-w-max text-sm px-4 py-2",
  fit: 'w-fit h-fit hover:scale-115 scale-100',
  maximum: "w-full text-md px-6 py-3",
};
// the const names above are confusing, change later

export function Button({
  variant = "primary",
  size = "default",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`${styleVariants[variant]} ${sizeVariants[size]} ${className ?? ""} uppercase border-2 rounded-xs font-semibold duration-150 transition cursor-pointer`}
    >
      {children}
    </button>
  );
}
