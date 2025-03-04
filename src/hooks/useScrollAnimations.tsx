
import { useEffect, useRef } from "react";

export const useScrollAnimations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create a new IntersectionObserver
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Add the animation class when the element is in view
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // Stop observing the element after it's been shown
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // When 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Slightly before the element comes into view
    });

    // Target all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Start observing each element
    animatedElements.forEach((el) => {
      el.classList.add('opacity-0');
      observerRef.current?.observe(el);
    });

    // Cleanup
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
};
