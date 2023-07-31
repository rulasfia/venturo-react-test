import { cn } from "mxcn";
import { InputHTMLAttributes } from "react";

type ComponentProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: ComponentProps) {
	return (
		<input
			{...props}
			className={cn(
				"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
		/>
	);
}
