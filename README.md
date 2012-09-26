leCountdown
===========

One more simple countdown for your websites.
It's just a proof of concept, having one setTimeout every 1s only, for controlling groups of countdown, containing one or more elements.

How to use
----------

```js
var cd = new leCountdown();
```
=> Will create a new countdown, return this.

```js
var group = cd.create(endTime,callback) // endTime is an UNIX timestamp, callback is.. obviously a function
```

=> Will create a group, returns a function for adding elements

```js
group(DOMEl) // libraries user are invited to learn how to get the DOM element :)
group(DOMEl2)
group(DOMEl3)
```

=> add elements to the group

```js
cd.launch(startTime) 
```

=> Pro(o)fit.

License
-------

CC by-nc-sa (http://creativecommons.org/licenses/by-nc-sa/2.0/) 
So yes, you simple user can use it, you nice coder can alter it... but companies are not even welcome to pay me for it, go let your developers code their own modules, they'll love you.