import { cn } from "mxcn";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "outline";
	size?: "md" | "sm";
};

const Button = forwardRef<HTMLButtonElement, ComponentProps>(
	(
		{ variant = "primary", size = "md", className, children, ...props },
		ref
	) => {
		return (
			<>
				<button
					{...props}
					ref={ref}
					className={cn(
						"font-medium relative rounded-md inline-flex items-center justify-center ",
						variant === "primary" &&
							"bg-primary border-primary text-primary-foreground hover:bg-primary/90",
						variant === "outline" &&
							"bg-transparent border-primary hover:bg-black/10",
						size === "md" && "py-2 px-4 border-2 gap-x-2",
						size === "sm" && "py-1 px-2 border-2 gap-x-1",
						className
					)}
				>
					{children}
				</button>
			</>
		);
	}
);

export default Button;
