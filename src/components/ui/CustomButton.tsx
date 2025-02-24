import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Motion_Button from "@/motion/Motion_Button";
import { motion } from "motion/react";

const ButtonVariant = cva(
  " relative whitespace-nowrap overflow-hidden px-5 py-2 hidden md:block text-black ",
  {
    variants: {
      variant: {
        default: "bg-white  rounded-md ",
        destructive: "",
      },
      fontSize: {
        sm: "font-semibold text-sm ",
        md: "font-bold text-base",
      },
      size: {
        sm: "px-2 py-1",
        md: "px-5 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariant> {}

const CustomButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant, fontSize, size, className, ...props }, ref) => {
    return (
      <Motion_Button>
        <button
          ref={ref}
          className={ButtonVariant({ variant, fontSize, size, className })}
          {...props}
        >
          <div className="flex items-center gap-5">
            {children &&
              Array.isArray(children) &&
              children.map((item, inx) =>
                item.props && typeof item.props.children === "string" ? (
                  <motion.span
                    variants={{
                      initialValue: {
                        y: 0,
                      },
                      hover: {
                        y: "-120%",
                      },
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "circOut",
                      delay: 0.3 * inx,
                    }}
                    key={inx}
                  >
                    {item.props.children}
                  </motion.span>
                ) : (
                  children[1]
                )
              )}
          </div>

          <div className="flex items-center gap-5 absolute inset-0 translate-y-full bg-orange-600 px-5 py-2 ">
            {children &&
              Array.isArray(children) &&
              children.map((item, inx) =>
                item.props && typeof item.props.children === "string" ? (
                  <motion.span
                    className="inline-block"
                    variants={{
                      initialValue: {
                        y: 0,
                      },
                      hover: {
                        y: "-180%",
                      },
                    }}
                    transition={{
                      duration: 0.2,
                      delay: 0.3 * inx,
                      ease: "circOut",
                    }}
                    key={inx}
                  >
                    {item.props.children}
                  </motion.span>
                ) : (
                  children[1]
                )
              )}
          </div>
        </button>
      </Motion_Button>
    );
  }
);

CustomButton.displayName = "CustomButton";
export default CustomButton;
