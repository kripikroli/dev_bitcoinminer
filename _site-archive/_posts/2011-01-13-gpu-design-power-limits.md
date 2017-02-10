---
layout: post
title: gpu design power limits
date: '2011-01-13T04:28:00+08:00'
tags:
- gpu
- gpus
- power
- watts
- limits
- graphics card
- graphic
- graphics
tumblr_url: http://bitcoinminer.com/post/2727159096/gpu-design-power-limits
---
Excellent discussion occurring on the #bitcoin-dev IRC channel (see channel log) regarding GPUs:

m: GPUs have plateau’d at 300W over the past 3 years
m: despite constant improvement of the perf/W
m: 300W is the max authorized by the PCIe specs for double-width cards
s: every watt has to be cooled too
l: so cant they use two 8 pins?
m: 75W from the slot, 75W from the 6-pin power connector, and 150W from the 8-pin one
s: wow, 75W from the PCIe slot?
m: electrically speaking they could, but they would be violating the specs
m: same thing for CPUs. they have plateau’d at ~130W because that’s 5.4 Amp on each wire of the 4-pin ATX12V connector which is dedicated to the CPU.
m: You can do up to 6, 7 Amps without the wires heating too much but it requires 16 gauge which most PSUs don’t have

Previous Posts
