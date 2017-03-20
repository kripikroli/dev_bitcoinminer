---
title: Overclock ATI Cards In Linux
seotitle: How to Overclock ATI Cards In Linux
description: Overclocking ATI Cards In Linux
excerpt: Ways to Overclock ATI Cards In Linux
keywords: overclock ati linux card, overclocking ati linux card
alt: overclock ati linux card
featured: 
layout: post
---

<p>[How-To] Overclocking ATI cards in LinuxLink goes to an article on Overclock.net.
tl;dr version:</p>

<p>$ aticonfig –od-enable$ aticonfig –odsc</p> <GPUspeed>,<MEMspeed>

<p>For example. to overclock at 800 for gpu, and 1000 for ram, on chips 0 and 1:
$ aticonfig –odsc 800,1000 –adapter 0,1</p>

<p>Tip: Overclocking dual-GPU cards (e.g., ATI 5970) individually:</p>

<p>Use –adapter=0,1 for first card, –adapter=2,3 for second card, etc.</p>

<p>If using poclbm, can use -d n instead of DISPLAY=:n.n</p>

<p>Tip: To set fanspeed to 80:</p>

<p>aticonfig –pplib-cmd ‘set fanspeed 0 80'' </p>

