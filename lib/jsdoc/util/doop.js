/**
    Deep clone a simple object.
    @private
 */
function doop(o) {
    var clone;
    var props;
    var i;
    var l;

    if (o instanceof Object && o.constructor != Function) {
        if ( Array.isArray(o) ) {
            clone = [];
            for (i = 0, l = o.length; i < l; i++) {
                clone[i] = (o[i] instanceof Object) ? doop(o[i]) : o[i];
            }
        }
        else {
            clone = Object.create(o);
            props = Object.getOwnPropertyNames(o);
            for (i = 0, l = props.length; i < l; i++) {
                Object.defineProperty(clone, props[i],
                    Object.getOwnPropertyDescriptor(o, props[i]));
            }
        }
        
        return clone;
    }
    
    return o;
}

// for backwards compatibility
doop.doop = doop;

module.exports = doop;
