---
title: P2Pool Decentralized Pool
seotitle: The P2Pool Decentralized Pool
description: P2Pool Decentralized Pool
excerpt: P2Pool Decentralized Pool Nearly Ready For Prime
keywords: p2pool decentralized pool, bitcoin miner
alt: p2pool decentralized pool
featured: 
layout: post
---

<p>P2Pool Decentralized Pool Nearly Ready For Prime-TimeA project to create the first decentralized Bitcoin mining pool, P2Pool, appears to be making headway.<p>

<p>P2Pool mining nodes work on a chain of shares similar to Bitcoin’s blockchain.  There is no central point of failure and thus P2Pool becomes DoS resistant.<p>

<p>P2Pool works different from existing mining pool technologies – each node works on a block that includes payouts to the previous shares’ owners and the node itself.  99% of the block reward is distributed evenly to miners based on work done recently.  An additional 0.5% is awarded to the node which solves the block.<p>

<p>A P2Pool node process is run locally and the miner daemon is then configured to connect to that local P2Pool node.<p>

<p>Because P2Pool’s long polling is incompatible with how other pool servers operate, not all miner daemons will support mining against P2Pool just yet.  At this time, CGMiner is the only miner to work against P2Pool without requiring any changes.<p>

<p>Forked versions of DiabloMiner and Poclbm which include the patch necessary for the long polling issue are available on the project’s forum thread on the Bitcoin forum.<p>

<p>The project’s author, Forrestv, is continuing to make optimizations to help with one of P2Pool’s constraints that cause work to be invalidated within an average of 5 seconds.  This will cause an overall higher level of shares to be stale.  With P2Pool’s unique approach though as long as the rate of stales is equal among participants, a higher overall level of stales doesn’t cause losses to those mining.<p>

<p>Though the pool has been in testing against mainnet for a number of days now, the miner variants with the long polling fix have just finally become available.  The pool has not yet found any blocks but miners up until now have only been participating for testing and the pool wasn’t expected to have found a block by now.<p>

<p>This still is an early release of this pool.  Mining against this pool does have a learning curve and there is a higher level of administration required for a while longer yet.<p>

<p>There could be unknown issues arising yet as well including what impact differences in network latency will bring, for example.<p>

<p>Those seeking the benefits that a decentralized pool will bring though may deem the effort to be well worth it.<p>

<p>P2Pool forum thread on Bitcoin.org forum<p>
<p>#p2pool IRC channel<p>
<p>P2Pool project on GitHub<p>
<p>CGMiner <p>
<p>DiaboMiner fork on GitHub (use fast_long_polling branch)<p>
<p>Poclbm fork on GitHub<p>
<p>P2Pool wiki<p>

