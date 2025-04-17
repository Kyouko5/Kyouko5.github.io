import { useState, useEffect } from "react";

export enum ScrollDirection {
  UP = "up",
  DOWN = "down",
}

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(
    ScrollDirection.UP
  );

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    // Add scroll event listener
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? ScrollDirection.DOWN : ScrollDirection.UP;

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
} 