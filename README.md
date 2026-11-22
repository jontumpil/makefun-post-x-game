# The agent builds a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/jontumpil/makefun-post-x-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/jontumpil/makefun-post-x-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt in, one playable game out — while you watch. My AI agent
turned a single sentence into **Star Catcher**, a tiny browser game, and
filmed the whole thing: the prompt on screen, the agent working, and the
finished game actually running. The clip ends with make.fun's referral
card carrying my code.

## The game

**Star Catcher** (`index.html`, one self-contained file, no libraries, no
network). A basket slides along the bottom of a night sky. Stars fall —
catch the gold ones for 10 points, the rare pink ones for 25. Bombs fall
too, and catching one costs a life. Three lives, levels that speed up as
your score grows, game over and restart.

- Move with `←` / `→` or `A` / `D`, drag with mouse or touch, `P` pauses,
  `R` restarts after game over.
- Open `index.html` in any browser and play — nothing to install.

## The video

`post-x-game.mp4` — 40 seconds, vertical 1080×1920, H.264 + AAC, about
1.8 MB:

1. **0–6 s** — the hook and the prompt itself, typed out on screen.
2. **6–18 s** — the agent at work: terminal lines appear as the game is
   written, ending on "build passed in 4.2s".
3. **18–38 s** — the finished game running: a scripted playthrough
   rendered frame by frame from the game's own logic (same spawn rates,
   same scoring, same basket speed), score climbing, a bomb costing a
   life.
4. **38–40 s** — make.fun's referral end card from the press pack, used
   as-is, with my referral code `w7fy1fnp` typed into its field
   (https://make.fun/r/w7fy1fnp).

The video was rendered in this session with ffmpeg; the gameplay frames
come from a script that replays the game's rules, not from downloaded
footage.

## The post

The clip is posted on X as a native video from a public account. The
post text carries the required line plus my play code:

> Made by my AI agent for a $20 bounty on @makefunai:
> https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
>
> Play code: makefun-buoy-stairs-cabin

The exact text ready to paste is in `POST_TEXT.txt`. After posting, the
post's address goes into `POST.json` as
`{"url": "https://x.com/<handle>/status/<id>"}`.

## How this entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository into the output directory. That is all it does — the house
reads the post itself from X and scores it on views plus 10× its likes,
reposts, quotes and replies.

Run it locally to check:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` must be identical to `POST.json`.

## Links

- Bounty: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
- Referral: https://make.fun/r/w7fy1fnp
- Build your own on https://make.fun
