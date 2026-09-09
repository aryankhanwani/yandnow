"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";

/* ============================================================
   HERO
   ------------------------------------------------------------
   The page's one orchestrated moment: the route line draws
   itself left to right under the headline, once, on load. There
   is no eyebrow chip, no rotating typewriter, and no ambient
   drifting behind the copy - all of it was motion that repeated
   forever and said nothing.

   Two calls to action of unequal weight, not two buttons: one
   solid, one quiet text link. Everything else on this page's CTA
   budget is spent on the closing band.

   Height uses svh, not vh: on mobile browsers vh includes the
   collapsing address bar, so a vh-sized hero jumps as the bar
   retracts. Landscape phones get a hard cap, since 88% of a
   390px-tall viewport leaves no room for the headline.
   ============================================================ */

const POSTER = "/hero-bg-poster.jpg";

/** Video is heavy, unreliable to autoplay, and expensive on
    battery on a phone. Below md - and under reduced motion - the
    poster is the hero. */
function useBackgroundVideo() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlay(wide.matches && !still.matches);
    update();
    wide.addEventListener("change", update);
    still.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      still.removeEventListener("change", update);
    };
  }, []);

  return play;
}

export default function HeroSection() {
  const playVideo = useBackgroundVideo();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[88svh] flex-col justify-end overflow-hidden bg-ink pb-16 pt-32 landscape:max-h-[560px] lg:min-h-[92svh] lg:pb-24"
    >
      <Image
        src={POSTER}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      {playVideo && (
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/hero-video-clean.mp4"
          poster={POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        />
      )}

      {/* The single overlay scrim used wherever text sits on an
          image. Strong enough for AA at the mobile crop, where the
          composition puts more light behind the copy. */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/60 to-ink/35"
      />

      <Container>
        <div className="max-w-3xl">
          <h1 id="hero-heading" className="text-h1 balance-text text-white">
            Discover the right route to grow
          </h1>

          <span aria-hidden className="route-rule route-rule-inverse hero-route-draw mt-8" />

          <p className="mt-8 measure text-body-lg text-white/85">
            We help people and organisations build practical skills and stay ready for
            what comes next.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-8">
            <CtaButton href="/contact-us" id="hero-cta-primary" onDark>
              Talk to us
            </CtaButton>
            <CtaButton href="#find-your-route" id="hero-cta-secondary" variant="link" onDark>
              Explore solutions
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
