---
layout: post
title: "[How-To] Overclocking ATI cards in Linux"
date: '2011-01-20T13:13:00+08:00'
tags:
- overclock
- ati
- '5970'
- linux
- ubuntu
- gpu
- hd
- radeon
- '5870'
- hd5970
- hd5870
- overclocking
tumblr_url: http://bitcoinminer.com/post/2844161933/overclock-ati-cards-in-linux
---
[How-To] Overclocking ATI cards in LinuxLink goes to an article on Overclock.net.
tl;dr version:
$ aticonfig –od-enable$ aticonfig –odsc <GPUspeed>,<MEMspeed>
For example. to overclock at 800 for gpu, and 1000 for ram, on chips 0 and 1:
$ aticonfig –odsc 800,1000 –adapter 0,1
Tip: Overclocking dual-GPU cards (e.g., ATI 5970) individually:
Use –adapter=0,1 for first card, –adapter=2,3 for second card, etc.
If using poclbm, can use -d n instead of DISPLAY=:n.n
Tip: To set fanspeed to 80:
aticonfig –pplib-cmd ‘set fanspeed 0 80'' 
Previous Posts
