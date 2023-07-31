import { cn } from "mxcn";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "outline";
	size?: "md" | "sm";
	isLoading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ComponentProps>(
	(
		{
			variant = "primary",
			size = "md",
			className,
			children,
			isLoading,
			...props
		},
		ref
	) => {
		return (
			<>
				<button
					{...props}
					ref={ref}
					disabled={isLoading ? true : false}
					className={cn(
						"font-medium relative rounded-md inline-flex items-center justify-center disabled:pointer-events-none disabled:opacity-50",
						variant === "primary" &&
							"bg-primary border-primary text-primary-foreground hover:bg-primary/90",
						variant === "outline" &&
							"bg-transparent border-primary hover:bg-black/10",
						size === "md" && "py-2 px-4 border-2 gap-x-2",
						size === "sm" && "py-1 px-2 border-2 gap-x-1",
						className
					)}
				>
					{isLoading ? "Loading..." : children}
				</button>
			</>
		);
	}
);

export default Button;
