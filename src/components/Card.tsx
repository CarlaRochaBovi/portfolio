interface CardProps {
  size?: keyof typeof sizeVariants;
  className?: string;
  children: React.ReactNode;
}

const sizeVariants = {
  small: "px-6 py-4 items-center",
  large: "w-full p-4 items-start",
};

export function Card({ size = "small", children, className }: CardProps) {
  return (
    <div
      className={`${sizeVariants[size]} ${className ?? ""} flex gap-4 bg-[#1F1F26] border rounded-xs border-[#474658]/40 hover:border-[#C799FF]/50 transition`}
    >
      {children}
    </div>
  );
}
