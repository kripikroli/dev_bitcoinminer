---
title: Why a GPU mines faster
seotitle: GPU mines faster than a CPU
description: Why a GPU mines faster than a CPU
excerpt: Why are AMD GPUs faster than Nvidia GPUs
keywords: gpu mines faster, why gpu mines faster
alt: gpu mines faster
featured: 
layout: post
---
Why a GPU mines faster than a CPUThe page titled “Why a GPU mines faster than a CPU” on the Bitcoin Wiki got some nice additions, courtesy of blogger mrb.
Short AnswerA typical CPU core can execute 4 32-bit instructions per clock (using a 128-bit SSE instruction), whereas a GPU like the Radeon HD 5970 can execute 3200 32-bit instructions per clock (using its 3200 ALUs or shaders). This is a difference of 800 times more instructions per clock. As of 2011, the fastest CPUs have up to 6, 8, or 12 cores and a somewhat higher frequency clock (2000-3000 MHz vs. 725 MHz for the Radeon HD 5970), but this is far from enough to compensate for this huge difference. 
Why are AMD GPUs faster than Nvidia GPUs?
Firstly, AMD designs GPUs with many simple ALUs/shaders (VLIW design) that run at a relatively low frequency clock (typically 1120-3200 ALUs at 625-900 MHz), whereas Nvidia’s microarchitecture consists of fewer more complex ALUs and tries to compensate with a higher shader clock (typically 448-1024 ALUs at 1150-1544 MHz).Because of this VLIW vs. non-VLIW difference, Nvidia uses up more square millimeters of die space per ALU, hence can pack fewer of them per chip, and they hit the frequency wall sooner than AMD which prevents them from increasing the clock high enough to match or surpass AMD’s performance. This translates to a raw ALU performance advantage for AMD:- AMD Radeon HD 6990: 3072 ALUs x 830 MHz = 2550 32-bit instruction per second- Nvidia GTX 590: 1024 ALUs x 1214 MHz = 1243 32-bit instruction per second
This approximate 2x-3x performance difference exists across the entire range of AMD and Nvidia GPUs. It is noticeably visible in all ALU-bound GPGPU workloads such as Bitcoin, password bruteforcers, etc.
Secondly, another difference favoring Bitcoin mining on AMD GPUs instead of Nvidia’s is that the mining algorithm is based on SHA-256, which makes heavy use of the 32-bit integer right rotate operation. This operation can be implemented as a single hardware instruction on AMD GPUs, but requires three separate hardware instructions to be emulated on Nvidia GPUs (2 shifts + 1 add). This alone gives AMD another 1.7x performance advantage (~1900 instructions instead of ~3250 to execute the SHA-256 compression function).
Combined together, these 2 factors make AMD GPUs overall 3x-5x faster when mining Bitcoins.
Previous Posts
