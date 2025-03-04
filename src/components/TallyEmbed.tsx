import { useEffect } from "react";

const TallyEmbed: React.FC = () => {
  useEffect(() => {
    const scriptSrc = "https://tally.so/widgets/embed.js";

    // Check if script is already present
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = () => {
        if (typeof (window as any).Tally !== "undefined") {
          (window as any).Tally.loadEmbeds();
        }
      };
      document.body.appendChild(script);
    } else {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
    }
  }, []);

  return (
    <div>
      <iframe
        data-tally-src="https://tally.so/embed/mVDLBj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="416"
        // frameBorder="0"
        // marginHeight={0}
        // marginWidth={0}
        title="🎉 Join the Free Beta !"
      ></iframe>
    </div>
  );
};

export default TallyEmbed;
