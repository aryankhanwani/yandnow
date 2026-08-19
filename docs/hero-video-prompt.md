# Y&Now — Hero Video Prompt

Target: `public/hero-video.mp4` · 1920×1080 · 16:9 · ~12s · silent · seamless loop.
Sits in a white rounded card on a pure-white homepage (`components/sections/HeroSection.tsx`).
No logo, no text, no watermark.

---

## THE PROMPT

A single continuous 12-second cinematic tracking shot gliding forward through a bright,
immaculate, modern Indian advanced-technology and workforce-skilling campus, revealing one
capability after another as the camera moves — photorealistic corporate technology film, shot
on an ARRI Alexa with 35mm and 50mm prime lenses at T2.0, shallow depth of field with creamy
falloff, 24fps with natural motion blur, mounted on a smooth stabilised dolly with the faintest
organic micro-drift, one unbroken take with no cuts.

The camera opens tight on a high-precision 5-axis CNC machining centre behind glass: the spindle
descends and carves a bright aluminium aerospace bracket, fine metal chips curling away in a soft
coolant mist that catches the light, a cool cyan LED strip glowing inside the machine enclosure,
while behind the safety glass and softly out of focus a young Indian machinist in clean light-grey
workwear reads a tablet. The camera drifts right and pulls back to reveal a spotless white robotics
cell where a six-axis industrial robot arm executes one fluid, precise pick-and-place arc, deep
indigo and bright cyan status LEDs tracing each joint, hard sunlight from a high window raking
across the polished floor, a second robot working quietly in the background haze. It glides on past
a woman engineer in her late twenties wearing a slim modern AR headset in a white training lab —
suspended in the air in front of her moving hands, a translucent cyan holographic wireframe of a
weld joint slowly rotates, threaded with thin indigo measurement lines and softly pulsing nodes,
her face calm and focused, lit by the glow. The camera rises into a wide, sunlit open hangar bay
where a compact white-and-indigo quadcopter drone lifts off a clean white launch pad, rotors
blurring, faint concentric cyan telemetry rings expanding outward across the floor beneath it,
an Indian technician in a light jacket watching from the background with a controller, out of
focus. It sweeps past a white workbench above which a volumetric data visualisation forms in
mid-air — an indigo node graph resolving into an orderly cyan competency heatmap grid, cells
igniting one by one in sequence, rising progress rings drawing themselves, purely geometric with
no readable numbers or labels, its glow reflecting on the white surface below. It moves through a
glass-walled classroom where three Indian students aged around sixteen to eighteen, in clean modern
uniforms, lean over a small desktop robotic arm on a white lab bench; one reaches out and the arm
responds, their concentration genuine and unposed. The camera cranes up and pulls back over a
bright open industrial training floor — rows of clean workstations where Indian trainees of mixed
ages and genders work alongside instructors, a wall of soft indigo and cyan light panels, a robotic
cell at the far end — and finally settles into a near-white, softly defocused modern interior with
faint indigo and cyan bokeh, framed and exposed to match the opening frame exactly so the video
loops without a visible cut.

HIGH-KEY LIGHTING throughout: bright, clean, airy, open; soft diffused daylight pouring through
large windows combined with even white overhead panels; white, pale-grey and brushed-aluminium
surfaces dominate every frame; deep blacks and heavy shadows are avoided entirely; the image sits
in the upper half of the exposure range. The colour grade is neutral and gently desaturated in the
environment, with saturated accent colour appearing ONLY as deep indigo-blue (#2E3191) and bright
cyan (#27AAE1) — LED strips, machine status lights, holographic interfaces, drone telemetry, floor
markings and light panels. Every location is new, spotless, well-ventilated and precisely
engineered. Every person is contemporary and Indian, in clean modern workwear or smart-casual
clothing, absorbed in their work, never looking into the lens. The overall feeling is premium,
calm, confident, intelligent and forward-looking — a country building advanced capability, shot
like a flagship technology brand film. Silent: no audio, no music, no sound effects, no dialogue.

NEGATIVE — do not include: text, letters, words, numbers, captions, subtitles, signage, logos,
brand marks, watermarks, readable interface labels; dark moody lighting, dim or cavernous factory
interiors, orange-and-teal blockbuster grade, warm amber industrial haze, heavy smoke or dust,
dramatic showers of welding sparks; grungy rusty machinery, cluttered workshops, oil stains, dated
equipment; clichéd India imagery — Taj Mahal, monuments, rickshaws, street markets, temples, rural
poverty framing, crowded chaotic scenes; stock-photo forced smiles, handshakes, thumbs-up, people
staring into camera; sci-fi cyberpunk neon, glowing purple, Iron-Man-style hologram overkill,
humanoid androids; deformed hands, extra fingers, warped faces, morphing objects, flickering,
jitter, glitch artifacts; low resolution, oversharpening, lens-flare overload; fast cuts, whip pans,
zoom punches, vertical format, letterboxing, split screens.

---

## AFTER GENERATION

```bash
# strip any audio track and encode for web
ffmpeg -i raw.mp4 -an -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p \
  -vf "scale=1920:1080:flags=lanczos" -movflags +faststart public/hero-video.mp4

# poster frame
ffmpeg -i public/hero-video.mp4 -frames:v 1 -q:v 3 public/hero-poster.jpg
```

The current `public/hero-video.mp4` is 42 MB for 11 seconds — an LCP problem on the
homepage. Target under 6 MB, and add `poster="/hero-poster.jpg"` to the `<video>` tag.
