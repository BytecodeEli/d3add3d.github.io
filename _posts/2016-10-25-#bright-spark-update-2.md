---
layout: post
title: #bright-spark update 2
date:   2016-10-25 15:42:00 +0200
---
So after a long delay all the required parts have arrived and I am able to continue with the project. I figuerd I won't use the coin cell batteries and instead use a single-cell Li-Po battery with the MCP73831T charging circuit and wire it up according to the Sparkfun charging circuit based on this IC. The completed circuit should be able to charge the battery even while running if the input current for charging is greater than the overall current draw of the device. Since I am also considering the option that the current draw will be too big for the battery to charge I will add a "power off"/"standby"/"charging" switch that, while active, will make the ATTiny85 utilize the low-power/sleep modes and will cut-off the power to the LED.

The case for the project will have to be 3D printed which will affect the overall cost of the project but my main concern right now is the placement of the components so that the device can be charged using the Digispark USB connection.

And while I am at it I would also love to write some program that would allow the end-user to upload custom animations for the LED to the Digispark.

PS: I was to announce this post on my Twitter but my login verification code is not being delivered. :sadface:
