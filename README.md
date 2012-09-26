leCountdown
===========

One more simple countdown for your websites.
It's just a proof of concept, having one setTimeout every 1s only, for controlling groups of countdown, containing one or more elements.

How to use
----------

var cd = new leCountdown();

=> Will create a new countdown, return this.

var group = cd.create(endTime,callback) // endTime is an UNIX timestamp, callback is.. obviously a function

=> Will create a group, returns a function for adding elements

group(DOMEl) // libraries user are invited to learn how to get the DOM element :)
group(DOMEl2)
group(DOMEl3)

=> add elements to the group

cd.launch(startTime) 

=> Pro(o)fit.