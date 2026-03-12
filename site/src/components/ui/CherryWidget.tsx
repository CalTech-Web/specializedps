"use client";

import Script from "next/script";

export default function CherryWidget() {
  return (
    <>
      <Script
        src="https://files.withcherry.com/widgets/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-expect-error Cherry widget global
          window._hw?.("init", {
            debug: false,
            variables: {
              slug: "dr-chris-devulapalli-specialized-plastic-surgery",
              name: "Dr. Chris Devulapalli, Specialized Plastic Surgery Westchester",
              images: [52],
              customLogo: "",
              defaultPurchaseAmount: 5000,
              customImage: "",
              imageCategory: "plastics",
            },
            styles: {
              primaryColor: "#1f385f",
              secondaryColor: "#1f385f10",
              fontFamily: "Source Sans Pro",
              headerFontFamily: "Source Sans Pro",
              floatingEstimator: {
                position: "bottom-right",
                offset: { x: "0px", y: "0px" },
                zIndex: 9999,
                ctaFontFamily: "Source Sans Pro",
                bodyFontFamily: "Source Sans Pro",
                ctaColor: "#1f385f",
                ctaTextColor: "#FFFFFF",
              },
            },
          }, ["floatingEstimator"]);
        }}
      />
      <div id="floatingEstimator" />
    </>
  );
}
