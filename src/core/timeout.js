function catTimeout(foo) {
    return function (cb, timeout) {
    	// for setTimeout(string, delay)
    	if (typeof cb === 'string') {
    		try {
    			cb = new Function(cb);
    		} catch(e) {
    			_onthrow(e);
    		}
    	}
    	var args = [].slice.apply(arguments, 2);
        cb = cat(cb, args.length && args);
        foo(cb, timeout);
    }
}

root.setTimeout = catTimeout(root.setTimeout);
root.setIntveral = catTimeout(root.setInterval);