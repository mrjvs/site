---
title: "Planning and designing - The most important step"
description: I get it, as a developer you don't want to bother with planning ahead. How annoying it may be, it is very important.
slug: starting-fresh
createdAt: mar 17, 2022 15:28 GMT+1
categories: ["skillform"]
---

A few months ago, I pitched an idea to my business partner Gary Simon.
I worked with him on DesignCourse.com, which is a course platform for customized courses.
All of his courses have something special added to them to make them as effective as possible.

For DesignCourse, he added something called "tests". It's where you get to see a broken UI design and you have to point out
which parts can be fixed and you get to see to fixed version in real time.

For the upcoming CSS course we have a code challenge module.
This is a module where you get to write your own code and it will let you test the theory you heard about in the videos into practice immediately.

## The idea behind SkillForm

After having made an entire CMS, payment system and his customized modules. I wondered: Why can't there be a platform that
allows you to make all these things without having to start from scratch. This is the idea I pitched to Gary.

Here are the features in a an easy list:

- Headless API, You're not tied to our frontend. Make your own.
- Customizable modules, Teach in your own effective way!
- Fully managed payment, We do it for you.

This all sounds great and Gary was enthusiastic about it. He immediately hit up his creator friends to see if that would interest them.
In those groups it also got good reactions. Then it hit me... I'll have to make all of that!

## The challenges

I encountered a few pretty major issues with how I designed the backend for DesignCourse. I desperately want to avoid falling into those same pitfalls.

### Scalability

First on the list is scalability. The code I wrote was not horizontally scalable and it was already showing signs of slowing down at usage peaks.
I need to make sure I make everything horizontally scalable from the start.

### Payment system

Next on the list was the payment system, I designed it poorly. Using the PSP as the source of truth caused way more problems than it solved.
I originially thought that getting the truth from an external source would remove the risk of failed database
commits causing an unsolvable desync between the real world and my database.

While this is a valid concern, using the PSP as a source of truth caused our data structure caused the following limitations:

- subscriptions could not have meta data, so I was stuck with storing data in loosely linked ID's. I had no control over how I stored my data
- The PSP API calls had item limits with no pagination. So it's a ticking time bomb that will eventually stop working.

I will have to move truth over to our own database without loosing reliability.

### Payout system

how to do payouts
