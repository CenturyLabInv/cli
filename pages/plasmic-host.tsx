import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import Script from "next/script";
import { PLASMIC } from "../plasmic-init";
import { NextSeo } from "next-seo";

export default function Host() {
  return (
    PLASMIC && (
      <div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PEKZYG5K8S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-PEKZYG5K8S');
        `}
        </Script>
        <NextSeo
          title="Century Lab Innovation"
          description="Century Lab Innovation is a global IT company providing innovative prototyping and market testing services for Companies. We provide creative, customized, and high-quality solutions to help clients accelerate their time-to-market."
        />
        <Script
          src="https://static1.plasmic.app/preamble.js"
          strategy="beforeInteractive"
        />
        <PlasmicCanvasHost />
      </div>
    )
  );
}
