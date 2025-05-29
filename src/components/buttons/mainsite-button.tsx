import Link from "next/link";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/layout/icons";
import { buttonVariants } from "@/components/ui/button";

export const MainsiteButton = () => (
  <Link
    href="https://mcexp.it"
    target="_blank"
    rel="noreferrer"
  >
    <div
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-9 px-0"
      )}
    >
      <Icons.gitHub className="h-4 w-4" />
      <span className="sr-only">Homepage</span>
    </div>
  </Link>
)