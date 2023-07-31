import { cn } from "mxcn";
import { ButtonHTMLAttributes } from "react";

type ComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "outline";
};

export default function Button({
	children,
	variant = "primary",
	className,
	...props
}: ComponentProps) {
	return (
		<button
			{...props}
			className={cn(
				"py-2 px-4 border-2 font-medium rounded-md inline-flex items-center justify-center gap-x-2",
				variant === "primary" &&
					"bg-primary border-primary text-primary-foreground hover:bg-primary/90",
				variant === "outline" && "bg-transparent border-primary",
				className
			)}
		>
			{children}
		</button>
	);
}
