---
title: "The challenges of planning SkillForm"
description: I get it, as a developer you don't want to bother with planning ahead. How annoying it may be, it is very important.
slug: the-challenges-of-planning-skillform
createdAt: mar 17, 2022 15:28 GMT+1
categories: ["skillform"]
---

A few months ago, I pitched an idea to my business partner Gary.
I worked with him on DesignCourse, which is a course platform where you can purchase Gary's courses.
All of his courses have something special added to them to make them as effective as possible.

For the UI/UX course, he added something called "tests". It's a module where you get to see a broken UI design and you have to point out
which parts can be fixed and you get to see to fixed version update in real time.

For the upcoming CSS course we have a code challenge module.
This is a module where you get to write your own code - allowing you to practice what you were just taught.

## The idea behind SkillForm

After making an entire CMS, payment system and his customized modules. I wondered: Why can't there be a platform that
allows you to make all these things without having to start from scratch. This is the idea I pitched to Gary.

Here are the features in an easy list:

- Headless API, You're not tied to our frontend. You can make your own one.
- Customizable modules, Teach in your own personal way!
- Fully managed payment, We do it for you.

This all sounds great and Gary was very enthusiastic about it. He immediately hit up his creator friends to see if that would interest them.
In those groups it also got good reactions. Then it hit me... I'll be the one that has to make all of this!

## The challenges

I encountered a few pretty major issues with how I designed the backend for DesignCourse. I desperately want to avoid falling into those same pitfalls.
We also have a few new challenges to find solutions for.

### 1. Scalability

First on the list is scalability. The code I wrote for DesignCourse was not horizontally scalable and it was already showing signs of slowing down at high usage peaks.
I need to make sure I make everything horizontally scalable from the very beginning.

### 2. Payment system

Next on the list was the payment system, I designed it poorly. Using the payment service provider (PSP) as the source of truth caused way more problems than it solved.
I originally thought that getting the truth from an external source would remove the risk of failed database
commits causing an unsolvable desync between the real world and my database.

While this is a valid concern, using the PSP as a source of truth resulted in the following problems:

- Subscriptions could not have meta data, so I was stuck with storing data in loosely linked ID's that easily desync. I had no control over how I stored the payment data.
- The PSP API calls had item limits with no pagination. So it's a ticking time bomb that will eventually stop working when that limit is reached.

I will have to move the truth over to our own database without losing reliability.

### 3. Payout system

I've been looking online for quite a while, searching desperately for a good method to do payouts programatically.
We need to support payouts to PayPal and credit card at the very least.

It's challenging to find a good service that does that for us.

## What's next?

It's going to be a long journey to get to the point where we can comfortably show off our product and have people start using it.
I'm having to balance my time between this project and school (Yes, I'm still studying).

But I am very confident that I will manage to get it all working in the end, it just requires
a good amount of planning and thinking. The next few posts I'll be doing a writeup of every challenge and how I'm planning to tackle it.

Thanks for reading,<br/>
I'll be documenting the entire process here on my blog.
