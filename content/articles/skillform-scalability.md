---
title: "Skillform: Planning for scale"
description: Scale is beginning to be a problem, this is how I'm planning on avoiding problems for SkillForm
slug: planning-for-scale
createdAt: mar 17, 2000 15:28 GMT+1
categories: ["skillform"]
---

Past few months, I spent way too much time reading up on scaling. I noticed that
my previous project was already showing signs of needing to scale up, especially noticable on high usage days where its slowing down quite a lot.

While designing SkillForm, I do not want to rely on vertical scaling. It's simply the wrong choice. So how do I want to start scaling? The answer is simple: Microservices.

## Why microservices?

You may argue that just making your monolith stateless would solve all your scaling issues as well.
It would be horizontally scalable and thats all I want, right?

Well no, Microservices can scale in more ways than just handling more requests. Let me explain:

### 1. Scaling for development

When you have to scale, it will most likely not be just your servers. You will eventually get more developers on your team
or you will hire more freelancers.

With properly decoupled microservices, you can give a freelancer a small microservice and tell them to work on adding a new feature.
They do not have to study the entire infrastructure before starting work, the microservice functions on its own.

It has its own documentation, it's own inputs and outputs, it's own database. The developer can basically start work immediately.

### 2. Scaling for flexabilty

In a monolithic codebase, you are pretty much stuck with one tech stack. You cannot choose the right tools for the job as you have to keep using
the same language and framework (if you use one). This doesn't mean that it will always turn out to be a bad codebase, but you simply do not have the flexability to do everything.

In a microservice architecture, every service can be designed individually. You are not locked into going one specific way.
When you need to add a complex feature that may require specific technologies, the infrastructure would be flexible enough to allow for it.

## Common microservice pitfalls

When I first decided on going with microservices, I immediately encountered some pretty
big problems. I could already see the bugs forming at every service, but after some research it turns
out that I was just designing my services badly.

That's one of the drawbacks of microservices, you need to plan a service extremely well for it to succeed.
Anyways, here are the common pitfalls that I also fell into.

### 1. Transactions & the saga pattern

My first instinct was to look up how to do database transactions.
... example here...

If you look up about doing distributed transactions, you will find out about the saga pattern.
Which is where everything is queued up for commiting, when one fails it will tell all services to rollback and when everything works it will commit everything.

This works but is still not resilient, it can still fail through network errors or a service perhaps a service dies before the commit.

The best way to deal with distributed transactions is to avoid them, you most likely don't even need them.
... explain example ...

### 2. shared databases

Don't
