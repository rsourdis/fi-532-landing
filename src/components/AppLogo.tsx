import Image from "next/image";
import logoIcon from "@/assets/logo/icon.png";
import { cn } from "@/lib/utils";

type AppLogoProps = {
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  href?: string;
};

export default function AppLogo({
  className,
  textClassName,
  iconClassName,
  href,
}: AppLogoProps) {
  const content = (
    <>
      <Image
        src={logoIcon}
        alt=""
        width={64}
        height={64}
        sizes="32px"
        quality={100}
        className={cn(
          "size-12 shrink-0 rounded-lg object-cover",
          iconClassName,
        )}
        priority={href === "#"}
      />
      <span
        className={cn(
          "font-display font-bold tracking-tight text-stone-900",
          textClassName,
        )}
      >
        FI-532
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label="FI-532 home"
        className={cn("flex items-center gap-2.5", className)}
      >
        {content}
      </a>
    );
  }

  return <div className={cn("flex items-center gap-2.5", className)}>{content}</div>;
}
