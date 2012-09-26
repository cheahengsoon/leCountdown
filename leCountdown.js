var LeCountdown = (function(root) { "use strict";
    var convert = function(timeLeft) {
        var date = new Date(timeLeft*1000);

        return {
            "years": date.getUTCFullYear() - 1970, // the year everything started.
            "months": date.getUTCMonth(),
            "days": date.getUTCDate() - 1,
            "hours": date.getUTCHours(),
            "minutes": date.getUTCMinutes(),
            "seconds": date.getUTCSeconds()
        }
    }

    var find = function(arg1,arg2,callback) {
        var result = arg1.querySelectorAll(arg2);
        for (var k in result) if (result.hasOwnProperty(k) && k != "length") callback(result[k])
    }

    function LeCountdown() {
        this.items = [];
        return this
    }

    LeCountdown.prototype.create = function(end,callback) {
        var iL = this.items.length, self = this;
        this.items[iL] = ({"el": [], "end": Number(end)});
        if (callback) this.items[iL].cb = callback;
        return function(item) {
            self.items[iL].el.push(item);
            return self
        }
    }

    LeCountdown.prototype.launch = function(start) {
        var self = this;
        this.s = Number(start)
        setTimeout(function() {self.updateTimer()},1000)
    }

    LeCountdown.prototype.updateTimer = function() {
        var self = this;
        for (var k in this.items) {
            this.items[k].end -= 1
            
            var remaining = this.items[k].end - this.s,
                obj = convert(remaining), 
                el = this.items[k].el;

            for (var k2 in el) {
                find(el[k2],".number", function(el) {
                    el.innerHTML = obj[el.parentNode.className]
                })
            }
            
            if (remaining <= 0) {
                if(this.items[k].cb) this.items[k].cb(this.items[k].el)
                this.items.splice(k,1)
            }
        }
        
        if(this.items.length) setTimeout(function() {self.updateTimer()},1000)
    }

    return LeCountdown
}(this))