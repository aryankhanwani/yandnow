# Y&Now — Hero Video Prompt

Target: `public/hero-video.mp4` · 1920×1080 · 16:9 · ~12s · silent · seamless loop.
Sits in a white rounded card on a pure-white homepage (`components/sections/HeroSection.tsx`).
No logo, no text, no watermark.

Framing: Y&Now is a workforce **skill-development** company — the technology is what people are
being *trained on*, not the subject. Every beat is a learner gaining capability, with an instructor
or an assessment present. Humans lead; machines support.

---

## THE PROMPT

A single continuous 12-second cinematic tracking shot gliding forward through a bright, immaculate,
modern Indian skill-development and workforce-training centre, moving from one live training bay to
the next as people are taught, practise, and are assessed on advanced technology — photorealistic
corporate technology film, shot on an ARRI Alexa with 35mm and 50mm prime lenses at T2.0, shallow
depth of field with creamy falloff, 24fps with natural motion blur, mounted on a smooth stabilised
dolly with the faintest organic micro-drift, one unbroken take with no cuts. The subject is always
the people learning; the machines are the tools they are being trained on.

The camera opens over the shoulder of a young Indian trainee in clean light-grey workwear standing
at a high-precision 5-axis CNC machining centre, an experienced instructor beside him guiding his
hand to the control panel; through the glass the spindle carves a bright aluminium part in a fine
coolant mist, and the trainee glances between the machine and the tablet in his hand, checking his
work. The camera drifts right and pulls back into a spotless white robotics training cell where two
young Indian technicians, a woman and a man, program a six-axis robot arm from a teaching pendant —
the arm answers their input with one fluid, precise pick-and-place arc, indigo and cyan status LEDs
tracing each joint, their instructor watching from a step behind, arms folded, letting them work.
It glides on past a welding simulation bay where a woman engineer in her late twenties, wearing a
slim modern AR headset, practises a weld pass in mid-air: a translucent cyan holographic wireframe
of the weld joint hovers in front of her moving hands, threaded with thin indigo guide lines that
correct her angle in real time, a mentor observing the same overlay on a screen beside her. The
camera rises into a wide, sunlit open hangar bay where a small group of trainees clusters around a
compact white-and-indigo quadcopter drone lifting off a clean launch pad — one of them flying it
with a controller, an instructor pointing out something in the air, faint concentric cyan telemetry
rings expanding across the floor beneath the aircraft. It sweeps past a white assessment bench where
a trainer and a learner review a volumetric data visualisation forming in mid-air between them — an
indigo node graph resolving into an orderly cyan competency heatmap grid, cells igniting one by one
as skills are marked proficient, progress rings drawing themselves upward, purely geometric with no
readable numbers or labels, the glow reflecting on the white surface below. It moves through a
glass-walled classroom where three Indian students aged around sixteen to eighteen, in clean modern
uniforms, lean over a small desktop robotic arm with a teacher crouched at their level; one reaches
out, the arm responds, and their concentration breaks into quiet delight. The camera cranes up and
pulls back over a bright open training floor — rows of clean workstations where Indian trainees of
mixed ages and genders work hands-on alongside instructors moving between them, a wall of soft
indigo and cyan light panels, a robotics bay at the far end — and finally settles into a near-white,
softly defocused modern interior with faint indigo and cyan bokeh, framed and exposed to match the
opening frame exactly so the video loops without a visible cut.

HIGH-KEY LIGHTING throughout: bright, clean, airy, open; soft diffused daylight pouring through
large windows combined with even white overhead panels; white, pale-grey and brushed-aluminium
surfaces dominate every frame; deep blacks and heavy shadows are avoided entirely; the image sits
in the upper half of the exposure range. The colour grade is neutral and gently desaturated in the
environment, with saturated accent colour appearing ONLY as deep indigo-blue (#2E3191) and bright
cyan (#27AAE1) — LED strips, machine status lights, holographic interfaces, drone telemetry, floor
markings and light panels. Every location is a new, spotless, purpose-built training facility.
Every person is contemporary and Indian, in clean modern workwear or smart-casual clothing, mixed
in age and gender, absorbed in learning or teaching, never looking into the lens. Body language
carries the story: hands on equipment, instructors demonstrating and stepping back, trainees
concentrating, small moments of understanding landing. The overall feeling is premium, calm,
confident and forward-looking — a country building advanced capability in its workforce, shot like
a flagship technology brand film. Silent: no audio, no music, no sound effects, no dialogue.

NEGATIVE — do not include: text, letters, words, numbers, captions, subtitles, signage, logos,
brand marks, watermarks, readable interface labels; empty unmanned factories, machines running with
nobody present, robots as the hero of the shot; dark moody lighting, dim or cavernous factory
interiors, orange-and-teal blockbuster grade, warm amber industrial haze, heavy smoke or dust,
dramatic showers of welding sparks; grungy rusty machinery, cluttered workshops, oil stains, dated
equipment; rows of students passively facing a lecturer, chalkboards, exam halls, stacks of
textbooks; clichéd India imagery — Taj Mahal, monuments, rickshaws, street markets, temples, rural
poverty framing, crowded chaotic scenes; stock-photo forced smiles, handshakes, thumbs-up,
graduation caps, certificates held to camera, people staring into camera; sci-fi cyberpunk neon,
glowing purple, Iron-Man-style hologram overkill, humanoid androids; deformed hands, extra fingers,
warped faces, morphing objects, flickering, jitter, glitch artifacts; low resolution,
oversharpening, lens-flare overload; fast cuts, whip pans, zoom punches, vertical format,
letterboxing, split screens.

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
