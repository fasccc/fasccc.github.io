function toggleMenu() {
    var t = $(".nav"),
        n = $(".logo--small"),
        r = $(".navicon"),
        e = $("html");

    function i() {
        e.removeClass("no-scroll")
    }
    r.click(function() {
        $(this).toggleClass("navicon--close"), t.toggleClass("is-open"), n.toggleClass("is-inverted"), e.toggleClass("no-scroll")
    }), $(document).keydown(function(e) {
        27 == e.keyCode && (r.removeClass("navicon--close"), t.removeClass("is-open"), n.removeClass("is-inverted"), i())
    }), $(window).resize(function() {
        "2" == t.css("z-index") && t.hasClass("is-open") && (i(), n.removeClass("is-inverted")), "1" == t.css("z-index") && t.hasClass("is-open") && (e.addClass("no-scroll"), n.addClass("is-inverted"))
    })
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";

    function g(e) {
        return null != e && e === e.window
    }
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        m = t.concat,
        l = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        u = a.call(Object),
        v = {},
        x = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.0",
        A = function(e, t) {
            return new A.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !x(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    A.fn = A.prototype = {
        jquery: f,
        constructor: A,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = A.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return A.each(this, e)
        },
        map: function(n) {
            return this.pushStack(A.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, A.extend = A.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || x(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (u && r && (A.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || A.isPlainObject(n) ? n : {}, i = !1, a[t] = A.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, A.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = y.call(t, "constructor") && t.constructor) && a.call(n) === u)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? A.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return m.apply([], a)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (A.fn[Symbol.iterator] = t[Symbol.iterator]), A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        function f(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }

        function i() {
            T()
        }
        var e, p, b, o, a, h, d, g, w, l, u, T, C, s, E, m, c, y, v, A = "sizzle" + 1 * new Date,
            x = n.document,
            S = 0,
            r = 0,
            k = le(),
            N = le(),
            D = le(),
            j = le(),
            L = function(e, t) {
                return e === t && (u = !0), 0
            },
            q = {}.hasOwnProperty,
            t = [],
            H = t.pop,
            M = t.push,
            z = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            $ = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + I + "*(" + $ + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + I + "*\\]",
            F = ":(" + $ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(I + "+", "g"),
            _ = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            U = new RegExp("^" + I + "*," + I + "*"),
            X = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            V = new RegExp(I + "|>"),
            Y = new RegExp(F),
            G = new RegExp("^" + $ + "$"),
            Q = {
                ID: new RegExp("^#(" + $ + ")"),
                CLASS: new RegExp("^\\.(" + $ + ")"),
                TAG: new RegExp("^(" + $ + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            re = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function(e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            z.apply(t = O.call(x.childNodes), x.childNodes), t[x.childNodes.length].nodeType
        } catch (e) {
            z = {
                apply: t.length ? function(e, t) {
                    M.apply(e, O.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, l, u, c, f = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!r && ((e ? e.ownerDocument || e : x) !== C && T(e), e = e || C, E)) {
                if (11 !== d && (l = te.exec(t)))
                    if (i = l[1]) {
                        if (9 === d) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (l[2]) return z.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return z.apply(n, e.getElementsByClassName(i)), n
                    }
                if (p.qsa && !j[t + " "] && (!m || !m.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === d && V.test(t)) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(ie, oe) : e.setAttribute("id", s = A), o = (u = h(t)).length; o--;) u[o] = "#" + s + " " + xe(u[o]);
                        c = u.join(","), f = ne.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return z.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        j(t, !0)
                    } finally {
                        s === A && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(_, "$1"), e, n, r)
        }

        function le() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function ue(e) {
            return e[A] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function pe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function me(a) {
            return ue(function(o) {
                return o = +o, ue(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = se.support = {}, a = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !J.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : x;
                return r !== C && 9 === r.nodeType && r.documentElement && (s = (C = r).documentElement, E = !a(C), x !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)), p.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), p.getElementsByClassName = ee.test(C.getElementsByClassName), p.getById = ce(function(e) {
                    return s.appendChild(e).id = A, !C.getElementsByName || !C.getElementsByName(A).length
                }), p.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(re, f);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(re, f);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, b.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, c = [], m = [], (p.qsa = ee.test(C.querySelectorAll)) && (ce(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + I + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + A + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || m.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (p.matchesSelector = ee.test(y = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ce(function(e) {
                    p.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), c.push("!=", F)
                }), m = m.length && new RegExp(m.join("|")), c = c.length && new RegExp(c.join("|")), t = ee.test(s.compareDocumentPosition), v = t || ee.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, L = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === x && v(x, e) ? -1 : t === C || t.ownerDocument === x && v(x, t) ? 1 : l ? P(l, e) - P(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : l ? P(l, e) - P(l, t) : 0;
                    if (i === o) return de(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? de(a[r], s[r]) : a[r] === x ? -1 : s[r] === x ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), p.matchesSelector && E && !j[t + " "] && (!c || !c.test(t)) && (!m || !m.test(t))) try {
                    var n = y.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    j(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), v(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && q.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : p.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(ie, oe)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (u = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(L), u) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return l = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: ue,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(re, f), e[3] = (e[3] || e[4] || e[5] || "").replace(re, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(re, f).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = k[e + " "];
                        return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && k(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, m) {
                        var y = "nth" !== h.slice(0, 3),
                            v = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, l, u = y != v ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                d = !n && !x,
                                p = !1;
                            if (c) {
                                if (y) {
                                    for (; u;) {
                                        for (a = e; a = a[u];)
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        l = u = "only" === h && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [v ? c.firstChild : c.lastChild], v && d) {
                                    for (p = (s = (r = (i = (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[u] || (p = s = 0) || l.pop();)
                                        if (1 === a.nodeType && ++p && a === e) {
                                            i[h] = [S, s, p];
                                            break
                                        }
                                } else if (d && (p = s = (r = (i = (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === p)
                                    for (;
                                        (a = ++s && a && a[u] || (p = s = 0) || l.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((i = (o = a[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, p]), a !== e)););
                                return (p -= m) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[A] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, t) {
                            for (var n, r = a(e, o), i = r.length; i--;) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: ue(function(e) {
                        var r = [],
                            i = [],
                            s = d(e.replace(_, "$1"));
                        return s[A] ? ue(function(e, t, n, r) {
                            for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: ue(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: ue(function(t) {
                        return t = t.replace(re, f),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: ue(function(n) {
                        return G.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(re, f).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Z.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = pe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function ve() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var l = e.dir,
                u = e.next,
                c = u || l,
                f = t && "parentNode" === c,
                d = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [S, d];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || f)
                            if (i = (o = e[A] || (e[A] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === d) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
            return a
        }

        function Ce(p, h, g, m, y, e) {
            return m && !m[A] && (m = Ce(m)), y && !y[A] && (y = Ce(y, e)), ue(function(e, t, n, r) {
                var i, o, a, s = [],
                    l = [],
                    u = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !p || !e && h ? c : Te(c, s, p, n, r),
                    d = g ? y || (e ? p : u || m) ? [] : t : f;
                if (g && g(f, d, n, r), m)
                    for (i = Te(d, l), m(i, [], n, r), o = i.length; o--;)(a = i[o]) && (d[l[o]] = !(f[l[o]] = a));
                if (e) {
                    if (y || p) {
                        if (y) {
                            for (i = [], o = d.length; o--;)(a = d[o]) && i.push(f[o] = a);
                            y(null, d = [], i, r)
                        }
                        for (o = d.length; o--;)(a = d[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else d = Te(d === t ? d.splice(u, d.length) : d), y ? y(null, t, d, r) : z.apply(t, d)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, l = be(function(e) {
                    return e === i
                }, a, !0), u = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[A]) {
                        for (n = ++s; n < r && !b.relative[e[n].type]; n++);
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(_, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return ve.prototype = b.filters = b.pseudos, b.setFilters = new ve, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, l, u = N[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, s = [], l = b.preFilter; a;) {
                for (o in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(_, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = Q[o].exec(a)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : N(e, s).slice(0)
        }, d = se.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = D[e + " "];
            if (!o) {
                for (t || (t = h(e)), n = t.length; n--;)(o = Ee(t[n]))[A] ? r.push(o) : i.push(o);
                (o = D(e, function(m, y) {
                    function e(e, t, n, r, i) {
                        var o, a, s, l = 0,
                            u = "0",
                            c = e && [],
                            f = [],
                            d = w,
                            p = e || x && b.find.TAG("*", i),
                            h = S += null == d ? 1 : Math.random() || .1,
                            g = p.length;
                        for (i && (w = t === C || t || i); u !== g && null != (o = p[u]); u++) {
                            if (x && o) {
                                for (a = 0, t || o.ownerDocument === C || (T(o), n = !E); s = m[a++];)
                                    if (s(o, t || C, n)) {
                                        r.push(o);
                                        break
                                    }
                                i && (S = h)
                            }
                            v && ((o = !s && o) && l--, e && c.push(o))
                        }
                        if (l += u, v && u !== l) {
                            for (a = 0; s = y[a++];) s(c, f, t, n);
                            if (e) {
                                if (0 < l)
                                    for (; u--;) c[u] || f[u] || (f[u] = H.call(r));
                                f = Te(f)
                            }
                            z.apply(r, f), i && !e && 0 < f.length && 1 < l + y.length && se.uniqueSort(r)
                        }
                        return i && (S = h, w = d), c
                    }
                    var v = 0 < y.length,
                        x = 0 < m.length;
                    return v ? ue(e) : e
                }(i, r))).selector = e
            }
            return o
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, l, u = "function" == typeof e && e,
                c = !r && h(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(re, f), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = Q.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
                    if ((l = b.find[s]) && (r = l(a.matches[0].replace(re, f), ne.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return z.apply(n, r), n;
                        break
                    }
            }
            return (u || d(e, c))(r, t, !E, n, !t || ne.test(e) && ye(t.parentNode) || t), n
        }, p.sortStable = A.split("").sort(L).join("") === A, p.detectDuplicates = !!u, T(), p.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    A.find = h, A.expr = h.selectors, A.expr[":"] = A.expr.pseudos, A.uniqueSort = A.unique = h.uniqueSort, A.text = h.getText, A.isXMLDoc = h.isXML, A.contains = h.contains, A.escapeSelector = h.escape;

    function T(e, t, n) {
        for (var r = [], i = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (i && A(e).is(n)) break;
                r.push(e)
            }
        return r
    }

    function S(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var k = A.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return x(n) ? A.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? A.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? A.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : A.filter(n, e, r)
    }
    A.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? A.find.matchesSelector(r, e) ? [r] : [] : A.find.matches(e, A.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, A.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(A(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (A.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) A.find(e, i[t], n);
            return 1 < r ? A.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? A(e) : e || [], !1).length
        }
    });
    var L, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (A.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || L, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : x(e) ? void 0 !== n.ready ? n.ready(e) : e(A) : A.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof A ? t[0] : t, A.merge(this, A.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && A.isPlainObject(t))
                for (r in t) x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }).prototype = A.fn, L = A(E);
    var H = /^(?:parents|prev(?:Until|All))/,
        M = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function z(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    A.fn.extend({
        has: function(e) {
            var t = A(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (A.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && A(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && A.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? A.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(A(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(A.uniqueSort(A.merge(this.get(), A(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), A.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return z(e, "nextSibling")
        },
        prev: function(e) {
            return z(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (N(e, "template") && (e = e.content || e), A.merge([], e.childNodes))
        }
    }, function(r, i) {
        A.fn[r] = function(e, t) {
            var n = A.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = A.filter(t, n)), 1 < this.length && (M[r] || A.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var O = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && x(i = e.promise) ? i.call(e).done(t).fail(n) : e && x(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    A.Callbacks = function(r) {
        r = "string" == typeof r ? function(e) {
            var n = {};
            return A.each(e.match(O) || [], function(e, t) {
                n[t] = !0
            }), n
        }(r) : A.extend({}, r);

        function n() {
            for (o = o || r.once, t = i = !0; s.length; l = -1)
                for (e = s.shift(); ++l < a.length;) !1 === a[l].apply(e[0], e[1]) && r.stopOnFalse && (l = a.length, e = !1);
            r.memory || (e = !1), i = !1, o && (a = e ? [] : "")
        }
        var i, e, t, o, a = [],
            s = [],
            l = -1,
            u = {
                add: function() {
                    return a && (e && !i && (l = a.length - 1, s.push(e)), function n(e) {
                        A.each(e, function(e, t) {
                            x(t) ? r.unique && u.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), e && !i && n()), this
                },
                remove: function() {
                    return A.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = A.inArray(t, a, n));) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < A.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return o = s = [], a = e = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return o = s = [], e || i || (a = e = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, t) {
                    return o || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), i || n()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!t
                }
            };
        return u
    }, A.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", A.Callbacks("memory"), A.Callbacks("memory"), 2],
                    ["resolve", "done", A.Callbacks("once memory"), A.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", A.Callbacks("once memory"), A.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return A.Deferred(function(r) {
                            A.each(o, function(e, t) {
                                var n = x(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && x(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var l = 0;

                        function u(i, o, a, s) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(i < l)) {
                                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, x(t) ? s ? t.call(e, u(l, o, P, s), u(l, o, R, s)) : (l++, t.call(e, u(l, o, P, s), u(l, o, R, s), u(l, o, P, o.notifyWith))) : (a !== P && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                    }
                                }
                                var n = this,
                                    r = arguments,
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            A.Deferred.exceptionHook && A.Deferred.exceptionHook(e, t.stackTrace), l <= i + 1 && (a !== R && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (A.Deferred.getStackHook && (t.stackTrace = A.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return A.Deferred(function(e) {
                            o[0][3].add(u(0, e, x(r) ? r : P, e.notifyWith)), o[1][3].add(u(0, e, x(t) ? t : P)), o[2][3].add(u(0, e, x(n) ? n : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? A.extend(e, a) : a
                    }
                },
                s = {};
            return A.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    i[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(i, o)
                }
            }
            var n = arguments.length,
                r = n,
                i = Array(r),
                o = s.call(arguments),
                a = A.Deferred();
            if (n <= 1 && (I(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || x(o[r] && o[r].then))) return a.then();
            for (; r--;) I(o[r], t(r), a.reject);
            return a.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    A.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, A.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var W = A.Deferred();

    function F() {
        E.removeEventListener("DOMContentLoaded", F), C.removeEventListener("load", F), A.ready()
    }
    A.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            A.readyException(e)
        }), this
    }, A.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --A.readyWait : A.isReady) || (A.isReady = !0) !== e && 0 < --A.readyWait || W.resolveWith(E, [A])
        }
    }), A.ready.then = W.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(A.ready) : (E.addEventListener("DOMContentLoaded", F), C.addEventListener("load", F));
    var B = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, x(r) || (a = !0), u && (t = a ? (t.call(e, r), null) : (u = t, function(e, t, n) {
                    return u.call(A(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        U = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(_, "ms-").replace(U, X)
    }

    function Y(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function G() {
        this.expando = A.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(O) || []).length;
                    for (; n--;) delete r[t[n]]
                }
                void 0 !== t && !A.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !A.isEmptyObject(t)
        }
    };
    var Q = new G,
        J = new G,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    A.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), A.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : B(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--;) !a[t] || 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                Q.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }), A.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, A.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = A.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = A._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                A.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: A.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), A.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? A.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = A.queue(this, t, n);
                A._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && A.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                A.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(a, [a])
            }
            var r, i = 1,
                o = A.Deferred(),
                a = this,
                s = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(r = Q.get(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
            return n(), o.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = E.documentElement,
        oe = function(e) {
            return A.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    ie.attachShadow && (oe = function(e) {
        return A.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });

    function se(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
        return i
    }
    var le = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === A.css(e, "display")
    };

    function ue(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return A.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (A.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (A.cssNumber[t] || "px" !== u && +l) && ne.exec(A.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--;) A.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, A.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }
    var ce = {};

    function fe(e, t) {
        for (var n, r, i, o, a, s, l, u = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (u[c] = Q.get(r, "display") || null, u[c] || (r.style.display = "")), "" === r.style.display && le(r) && (u[c] = (l = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (l = ce[s]) || (o = a.body.appendChild(a.createElement(s)), l = A.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ce[s] = l)))) : "none" !== n && (u[c] = "none", Q.set(r, "display", n)));
        for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    A.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                le(this) ? A(this).show() : A(this).hide()
            })
        }
    });
    var de = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? A.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ve, xe, be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === w(o)) A.merge(d, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), l = ge[s] || ge._default, a.innerHTML = l[1] + A.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
            A.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
            if (r && -1 < A.inArray(o, r)) i && i.push(o);
            else if (u = oe(o), a = me(f.appendChild(o), "script"), u && ye(a), n)
            for (c = 0; o = a[c++];) he.test(o.type || "") && n.push(o);
        return f
    }
    ve = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), ve.appendChild(xe), v.checkClone = ve.cloneNode(!0).cloneNode(!0).lastChild.checked, ve.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ve.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function Ae() {
        return !0
    }

    function Se() {
        return !1
    }

    function ke(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ne(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return A().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = A.guid++)), e.each(function() {
            A.event.add(this, t, i, r, n)
        })
    }

    function De(e, i, o) {
        o ? (Q.set(e, i, !1), A.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r)(A.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = void 0, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n
                } else r && (Q.set(this, i, A.event.trigger(A.extend(r.shift(), A.Event.prototype), r, this)), e.stopImmediatePropagation())
            }
        })) : A.event.add(e, i, Ae)
    }
    A.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, g, m = Q.get(t);
            if (m)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && A.find.matchesSelector(ie, i), n.guid || (n.guid = A.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                        return void 0 !== A && A.event.triggered !== e.type ? A.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(O) || [""]).length; u--;) p = g = (s = Ee.exec(e[u]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = A.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = A.event.special[p] || {}, c = A.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && A.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), A.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, g, m = Q.hasData(e) && Q.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(O) || [""]).length; u--;)
                    if (p = g = (s = Ee.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = A.event.special[p] || {}, d = l[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || A.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) A.event.remove(e, p + t[u], n, r, !0);
                A.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = A.event.fix(e),
                l = new Array(arguments.length),
                u = (Q.get(this, "events") || {})[s.type] || [],
                c = A.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = A.event.handlers.call(this, s, u), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 === (r = ((A.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) || !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < A(i, this).index(u) : A.find(i, this, null, [u]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(A.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: x(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[A.expando] ? e : new A.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && N(t, "input") && void 0 === Q.get(t, "click") && De(t, "click", Ae), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && N(t, "input") && void 0 === Q.get(t, "click") && De(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && N(t, "input") && Q.get(t, "click") || N(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, A.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, A.Event = function(e, t) {
        if (!(this instanceof A.Event)) return new A.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && A.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[A.expando] = !0
    }, A.Event.prototype = {
        constructor: A.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, A.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, A.event.addProp), A.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        A.event.special[e] = {
            setup: function() {
                return De(this, e, ke), !1
            },
            trigger: function() {
                return De(this, e), !0
            },
            delegateType: t
        }
    }), A.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        A.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || A.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), A.fn.extend({
        on: function(e, t, n, r) {
            return Ne(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ne(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, A(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                A.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Le = /<script|<style|<link/i,
        qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Me(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && A(e).children("tbody")[0] || e
    }

    function ze(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, l, u;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), u = o.events))
                for (i in delete a.handle, a.events = {}, u)
                    for (n = 0, r = u[i].length; n < r; n++) A.event.add(t, i, u[i][n]);
            J.hasData(e) && (s = J.access(e), l = A.extend({}, s), J.set(t, l))
        }
    }

    function Re(n, r, i, o) {
        r = m.apply([], r);
        var e, t, a, s, l, u, c = 0,
            f = n.length,
            d = f - 1,
            p = r[0],
            h = x(p);
        if (h || 1 < f && "string" == typeof p && !v.checkClone && qe.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), Re(t, r, i, o)
        });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = A.map(me(e, "script"), ze)).length; c < f; c++) l = e, c !== d && (l = A.clone(l, !0, !0), s && A.merge(a, me(l, "script"))), i.call(n[c], l, c);
            if (s)
                for (u = a[a.length - 1].ownerDocument, A.map(a, Oe), c = 0; c < s; c++) l = a[c], he.test(l.type || "") && !Q.access(l, "globalEval") && A.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? A._evalUrl && !l.noModule && A._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }) : b(l.textContent.replace(He, ""), l, u))
        }
        return n
    }

    function Ie(e, t, n) {
        for (var r, i = t ? A.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || A.cleanData(me(r)), r.parentNode && (n && oe(r) && ye(me(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    A.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, l, u, c = e.cloneNode(!0),
                f = oe(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || A.isXMLDoc(e)))
                for (a = me(c), r = 0, i = (o = me(e)).length; r < i; r++) s = o[r], l = a[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && de.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), a = a || me(c), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, c);
            return 0 < (a = me(c, "script")).length && ye(a, !f && me(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = A.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? A.event.remove(n, r) : A.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), A.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? A.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (A.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return A.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Le.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = A.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (A.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Re(this, arguments, function(e) {
                var t = this.parentNode;
                A.inArray(this, n) < 0 && (A.cleanData(me(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), A.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        A.fn[e] = function(e) {
            for (var t, n = [], r = A(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), A(r[o])[a](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e, We, Fe, Be, _e, Ue, Xe, Ve = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Ye = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Ge = new RegExp(re.join("|"), "i");

    function Qe() {
        if (Xe) {
            Ue.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Xe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(Ue).appendChild(Xe);
            var e = C.getComputedStyle(Xe);
            $e = "1%" !== e.top, _e = 12 === Je(e.marginLeft), Xe.style.right = "60%", Be = 36 === Je(e.right), We = 36 === Je(e.width), Xe.style.position = "absolute", Fe = 12 === Je(Xe.offsetWidth / 3), ie.removeChild(Ue), Xe = null
        }
    }

    function Je(e) {
        return Math.round(parseFloat(e))
    }

    function Ke(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ye(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = A.style(e, t)), !v.pixelBoxStyles() && Ve.test(a) && Ge.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Ue = E.createElement("div"), (Xe = E.createElement("div")).style && (Xe.style.backgroundClip = "content-box", Xe.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === Xe.style.backgroundClip, A.extend(v, {
        boxSizingReliable: function() {
            return Qe(), We
        },
        pixelBoxStyles: function() {
            return Qe(), Be
        },
        pixelPosition: function() {
            return Qe(), $e
        },
        reliableMarginLeft: function() {
            return Qe(), _e
        },
        scrollboxSize: function() {
            return Qe(), Fe
        }
    }));
    var et = ["Webkit", "Moz", "ms"],
        tt = E.createElement("div").style,
        nt = {};

    function rt(e) {
        var t = A.cssProps[e] || nt[e];
        return t || (e in tt ? e : nt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
                if ((e = et[n] + t) in tt) return e
        }(e) || e)
    }
    var it = /^(none|table(?!-c[ea]).+)/,
        ot = /^--/,
        at = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        st = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function lt(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function ut(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += A.css(e, n + re[a], !0, i)), r ? ("content" === n && (l -= A.css(e, "padding" + re[a], !0, i)), "margin" !== n && (l -= A.css(e, "border" + re[a] + "Width", !0, i))) : (l += A.css(e, "padding" + re[a], !0, i), "padding" !== n ? l += A.css(e, "border" + re[a] + "Width", !0, i) : s += A.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
    }

    function ct(e, t, n) {
        var r = Ye(e),
            i = (!v.boxSizingReliable() || n) && "border-box" === A.css(e, "boxSizing", !1, r),
            o = i,
            a = Ke(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ve.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === A.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === A.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ut(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function ft(e, t, n, r, i) {
        return new ft.prototype.init(e, t, n, r, i)
    }
    A.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ke(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    l = ot.test(t),
                    u = e.style;
                if (l || (t = rt(s)), a = A.cssHooks[t] || A.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (A.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return ot.test(t) || (t = rt(s)), (a = A.cssHooks[t] || A.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ke(e, t, r)), "normal" === i && t in st && (i = st[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), A.each(["height", "width"], function(e, l) {
        A.cssHooks[l] = {
            get: function(e, t, n) {
                if (t) return !it.test(A.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ct(e, l, n) : se(e, at, function() {
                    return ct(e, l, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Ye(e),
                    o = !v.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === A.css(e, "boxSizing", !1, i),
                    s = n ? ut(e, l, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(i[l]) - ut(e, l, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[l] = t, t = A.css(e, l)), lt(0, t, s)
            }
        }
    }), A.cssHooks.marginLeft = Ze(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), A.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        A.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (A.cssHooks[i + o].set = lt)
    }), A.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ye(e), i = t.length; a < i; a++) o[t[a]] = A.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? A.style(e, t, n) : A.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((A.Tween = ft).prototype = {
        constructor: ft,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || A.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (A.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ft.propHooks[this.prop];
            return e && e.get ? e.get(this) : ft.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = ft.propHooks[this.prop];
            return this.options.duration ? this.pos = t = A.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ft.propHooks._default.set(this), this
        }
    }).init.prototype = ft.prototype, (ft.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = A.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                A.fx.step[e.prop] ? A.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !A.cssHooks[e.prop] && null == e.elem.style[rt(e.prop)] ? e.elem[e.prop] = e.now : A.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = ft.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, A.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, A.fx = ft.prototype.init, A.fx.step = {};
    var dt, pt, ht, gt, mt = /^(?:toggle|show|hide)$/,
        yt = /queueHooks$/;

    function vt() {
        pt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(vt) : C.setTimeout(vt, A.fx.interval), A.fx.tick())
    }

    function xt() {
        return C.setTimeout(function() {
            dt = void 0
        }), dt = Date.now()
    }

    function bt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function wt(e, t, n) {
        for (var r, i = (Tt.tweeners[t] || []).concat(Tt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function Tt(o, e, t) {
        var n, a, r = 0,
            i = Tt.prefilters.length,
            s = A.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (a) return !1;
                for (var e = dt || xt(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++) u.tweens[r].run(n);
                return s.notifyWith(o, [u, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [u, 1, 0]), s.resolveWith(o, [u]), !1)
            },
            u = s.promise({
                elem: o,
                props: A.extend({}, e),
                opts: A.extend(!0, {
                    specialEasing: {},
                    easing: A.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: dt || xt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = A.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [u, 1, 0]), s.resolveWith(o, [u, e])) : s.rejectWith(o, [u, e]), this
                }
            }),
            c = u.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = A.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, u.opts.specialEasing); r < i; r++)
            if (n = Tt.prefilters[r].call(u, o, c, u.opts)) return x(n.stop) && (A._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return A.map(c, wt, u), x(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), A.fx.timer(A.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    A.Animation = A.extend(Tt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = x(e) ? (t = e, ["*"]) : e.match(O)).length; r < i; r++) n = e[r], Tt.tweeners[n] = Tt.tweeners[n] || [], Tt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, l, u, c, f = "width" in t || "height" in t,
                d = this,
                p = {},
                h = e.style,
                g = e.nodeType && le(e),
                m = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = A._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, d.always(function() {
                    d.always(function() {
                        a.unqueued--, A.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], mt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        g = !0
                    }
                    p[r] = m && m[r] || A.style(e, r)
                }
            if ((l = !A.isEmptyObject(t)) || !A.isEmptyObject(p))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = m && m.display) && (u = Q.get(e, "display")), "none" === (c = A.css(e, "display")) && (u ? c = u : (fe([e], !0), u = e.style.display || u, c = A.css(e, "display"), fe([e]))), "inline" !== c && ("inline-block" !== c || null == u) || "none" === A.css(e, "float") && (l || (d.done(function() {
                        h.display = u
                    }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(e, "fxshow", {
                    display: u
                }), o && (m.hidden = !g), g && fe([e], !0), d.done(function() {
                    for (r in g || fe([e]), Q.remove(e, "fxshow"), p) A.style(e, r, p[r])
                })), l = wt(g ? m[r] : 0, r, d), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? Tt.prefilters.unshift(e) : Tt.prefilters.push(e)
        }
    }), A.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? A.extend({}, e) : {
            complete: n || !n && t || x(e) && e,
            duration: e,
            easing: n && t || t && !x(t) && t
        };
        return A.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in A.fx.speeds ? r.duration = A.fx.speeds[r.duration] : r.duration = A.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x(r.old) && r.old.call(this), r.queue && A.dequeue(this, r.queue)
        }, r
    }, A.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(le).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            function i() {
                var e = Tt(this, A.extend({}, t), a);
                (o || Q.get(this, "finish")) && e.stop(!0)
            }
            var o = A.isEmptyObject(t),
                a = A.speed(e, n, r);
            return i.finish = i, o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
        },
        stop: function(i, e, o) {
            function a(e) {
                var t = e.stop;
                delete e.stop, t(o)
            }
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = A.timers,
                    r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && yt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || A.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = A.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, A.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), A.each(["toggle", "show", "hide"], function(e, r) {
        var i = A.fn[r];
        A.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(bt(r, !0), e, t, n)
        }
    }), A.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        A.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), A.timers = [], A.fx.tick = function() {
        var e, t = 0,
            n = A.timers;
        for (dt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || A.fx.stop(), dt = void 0
    }, A.fx.timer = function(e) {
        A.timers.push(e), A.fx.start()
    }, A.fx.interval = 13, A.fx.start = function() {
        pt || (pt = !0, vt())
    }, A.fx.stop = function() {
        pt = null
    }, A.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, A.fn.delay = function(r, e) {
        return r = A.fx && A.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, ht = E.createElement("input"), gt = E.createElement("select").appendChild(E.createElement("option")), ht.type = "checkbox", v.checkOn = "" !== ht.value, v.optSelected = gt.selected, (ht = E.createElement("input")).value = "t", ht.type = "radio", v.radioValue = "t" === ht.value;
    var Ct, Et = A.expr.attrHandle;
    A.fn.extend({
        attr: function(e, t) {
            return B(this, A.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                A.removeAttr(this, e)
            })
        }
    }), A.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? A.prop(e, t, n) : (1 === o && A.isXMLDoc(e) || (i = A.attrHooks[t.toLowerCase()] || (A.expr.match.bool.test(t) ? Ct : void 0)), void 0 !== n ? null === n ? void A.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = A.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(O);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), Ct = {
        set: function(e, t, n) {
            return !1 === t ? A.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, A.each(A.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = Et[t] || A.find.attr;
        Et[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = Et[o], Et[o] = r, r = null != a(e, t, n) ? o : null, Et[o] = i), r
        }
    });
    var At = /^(?:input|select|textarea|button)$/i,
        St = /^(?:a|area)$/i;

    function kt(e) {
        return (e.match(O) || []).join(" ")
    }

    function Nt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Dt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
    }
    A.fn.extend({
        prop: function(e, t) {
            return B(this, A.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[A.propFix[e] || e]
            })
        }
    }), A.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && A.isXMLDoc(e) || (t = A.propFix[t] || t, i = A.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = A.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : At.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (A.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), A.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        A.propFix[this.toLowerCase()] = this
    }), A.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, l = 0;
            if (x(t)) return this.each(function(e) {
                A(this).addClass(t.call(this, e, Nt(this)))
            });
            if ((e = Dt(t)).length)
                for (; n = this[l++];)
                    if (i = Nt(n), r = 1 === n.nodeType && " " + kt(i) + " ") {
                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = kt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, l = 0;
            if (x(t)) return this.each(function(e) {
                A(this).removeClass(t.call(this, e, Nt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = Dt(t)).length)
                for (; n = this[l++];)
                    if (i = Nt(n), r = 1 === n.nodeType && " " + kt(i) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (s = kt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" == o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : x(i) ? this.each(function(e) {
                A(this).toggleClass(i.call(this, e, Nt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0, n = A(this), r = Dt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" != o || ((e = Nt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + kt(Nt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var jt = /\r/g;
    A.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = x(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, A(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = A.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = A.valHooks[this.type] || A.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = A.valHooks[t.type] || A.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(jt, "") : null == e ? "" : e : void 0
        }
    }), A.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = A.find.attr(e, "value");
                    return null != t ? t : kt(A.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : i.length;
                    for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = A(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = A.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < A.inArray(A.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), A.each(["radio", "checkbox"], function() {
        A.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < A.inArray(A(e).val(), t)
            }
        }, v.checkOn || (A.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in C;

    function Lt(e) {
        e.stopPropagation()
    }
    var qt = /^(?:focusinfocus|focusoutblur)$/;
    A.extend(A.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, l, u, c, f, d = [n || E],
                p = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !qt.test(p + A.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[A.expando] ? e : new A.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : A.makeArray(t, [e]), c = A.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !g(n)) {
                    for (s = c.delegateType || p, qt.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                    a === (n.ownerDocument || E) && d.push(a.defaultView || a.parentWindow || C)
                }
                for (i = 0;
                    (o = d[i++]) && !e.isPropagationStopped();) f = o, e.type = 1 < i ? s : c.bindType || p, (u = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && u.apply(o, t), (u = l && o[l]) && u.apply && Y(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !Y(n) || l && x(n[p]) && !g(n) && ((a = n[l]) && (n[l] = null), A.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, Lt), n[p](), e.isPropagationStopped() && f.removeEventListener(p, Lt), A.event.triggered = void 0, a && (n[l] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = A.extend(new A.Event, n, {
                type: e,
                isSimulated: !0
            });
            A.event.trigger(r, null, t)
        }
    }), A.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                A.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return A.event.trigger(e, t, n, !0)
        }
    }), v.focusin || A.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            A.event.simulate(r, e.target, A.event.fix(e))
        }
        A.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r);
                t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
            }
        }
    });
    var Ht = C.location,
        Mt = Date.now(),
        zt = /\?/;
    A.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || A.error("Invalid XML: " + e), t
    };
    var Ot = /\[\]$/,
        Pt = /\r?\n/g,
        Rt = /^(?:submit|button|image|reset|file)$/i,
        It = /^(?:input|select|textarea|keygen)/i;

    function $t(n, e, r, i) {
        var t;
        if (Array.isArray(e)) A.each(e, function(e, t) {
            r || Ot.test(n) ? i(n, t) : $t(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) $t(n + "[" + t + "]", e[t], r, i)
    }
    A.param = function(e, t) {
        function n(e, t) {
            var n = x(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var r, i = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !A.isPlainObject(e)) A.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (r in e) $t(r, e[r], t, n);
        return i.join("&")
    }, A.fn.extend({
        serialize: function() {
            return A.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = A.prop(this, "elements");
                return e ? A.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !A(this).is(":disabled") && It.test(this.nodeName) && !Rt.test(e) && (this.checked || !de.test(e))
            }).map(function(e, t) {
                var n = A(this).val();
                return null == n ? null : Array.isArray(n) ? A.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Pt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Pt, "\r\n")
                }
            }).get()
        }
    });
    var Wt = /%20/g,
        Ft = /#.*$/,
        Bt = /([?&])_=[^&]*/,
        _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ut = /^(?:GET|HEAD)$/,
        Xt = /^\/\//,
        Vt = {},
        Yt = {},
        Gt = "*/".concat("*"),
        Qt = E.createElement("a");

    function Jt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(O) || [];
            if (x(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Kt(t, i, o, a) {
        var s = {},
            l = t === Yt;

        function u(e) {
            var r;
            return s[e] = !0, A.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || l || s[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n), u(n), !1)
            }), r
        }
        return u(i.dataTypes[0]) || !s["*"] && u("*")
    }

    function Zt(e, t) {
        var n, r, i = A.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && A.extend(!0, e, r), e
    }
    Qt.href = Ht.href, A.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ht.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ht.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Gt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": A.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Zt(Zt(e, A.ajaxSettings), t) : Zt(A.ajaxSettings, e)
        },
        ajaxPrefilter: Jt(Vt),
        ajaxTransport: Jt(Yt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, d, n, p, r, h, g, i, o, m = A.ajaxSetup({}, t),
                y = m.context || m,
                v = m.context && (y.nodeType || y.jquery) ? A(y) : A.event,
                x = A.Deferred(),
                b = A.Callbacks("once memory"),
                w = m.statusCode || {},
                a = {},
                s = {},
                l = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n)
                                for (n = {}; t = _t.exec(d);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? d : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return c && c.abort(t), u(0, t), this
                    }
                };
            if (x.promise(T), m.url = ((e || m.url || Ht.href) + "").replace(Xt, Ht.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(O) || [""], null == m.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = m.url, r.href = r.href, m.crossDomain = Qt.protocol + "//" + Qt.host != r.protocol + "//" + r.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = A.param(m.data, m.traditional)), Kt(Vt, m, t, T), h) return T;
            for (i in (g = A.event && m.global) && 0 == A.active++ && A.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Ut.test(m.type), f = m.url.replace(Ft, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Wt, "+")) : (o = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += (zt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Bt, "$1"), o = (zt.test(f) ? "&" : "?") + "_=" + Mt++ + o), m.url = f + o), m.ifModified && (A.lastModified[f] && T.setRequestHeader("If-Modified-Since", A.lastModified[f]), A.etag[f] && T.setRequestHeader("If-None-Match", A.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (!1 === m.beforeSend.call(y, T, m) || h)) return T.abort();
            if (l = "abort", b.add(m.complete), T.done(m.success), T.fail(m.error), c = Kt(Yt, m, t, T)) {
                if (T.readyState = 1, g && v.trigger("ajaxSend", [T, m]), h) return T;
                m.async && 0 < m.timeout && (p = C.setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    h = !1, c.send(a, u)
                } catch (e) {
                    if (h) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, r) {
                var i, o, a, s, l, u = t;
                h || (h = !0, p && C.clearTimeout(p), c = void 0, d = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(m, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = u[l + " " + o] || u["* " + o]))
                            for (i in u)
                                if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, s, T, i), i ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (A.lastModified[f] = l), (l = T.getResponseHeader("etag")) && (A.etag[f] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, o = s.data, i = !(a = s.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || u) + "", i ? x.resolveWith(y, [o, u, T]) : x.rejectWith(y, [T, u, a]), T.statusCode(w), w = void 0, g && v.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : a]), b.fireWith(y, [T, u]), g && (v.trigger("ajaxComplete", [T, m]), --A.active || A.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return A.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return A.get(e, void 0, t, "script")
        }
    }), A.each(["get", "post"], function(e, i) {
        A[i] = function(e, t, n, r) {
            return x(t) && (r = r || n, n = t, t = void 0), A.ajax(A.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, A.isPlainObject(e) && e))
        }
    }), A._evalUrl = function(e, t) {
        return A.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                A.globalEval(e, t)
            }
        })
    }, A.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (x(e) && (e = e.call(this[0])), t = A(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return x(n) ? this.each(function(e) {
                A(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = A(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = x(t);
            return this.each(function(e) {
                A(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                A(this).replaceWith(this.childNodes)
            }), this
        }
    }), A.expr.pseudos.hidden = function(e) {
        return !A.expr.pseudos.visible(e)
    }, A.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, A.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var en = {
            0: 200,
            1223: 204
        },
        tn = A.ajaxSettings.xhr();
    v.cors = !!tn && "withCredentials" in tn, v.ajax = tn = !!tn, A.ajaxTransport(function(i) {
        var o, a;
        if (v.cors || tn && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(en[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), A.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), A.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return A.globalEval(e), e
            }
        }
    }), A.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), A.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = A("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var nn, rn = [],
        on = /(=)\?(?=&|$)|\?\?/;
    A.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = rn.pop() || A.expando + "_" + Mt++;
            return this[e] = !0, e
        }
    }), A.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = x(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(on, "$1" + r) : !1 !== e.jsonp && (e.url += (zt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || A.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? A(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, rn.push(r)), o && x(i) && i(o[0]), o = i = void 0
        }), "script"
    }), v.createHTMLDocument = ((nn = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === nn.childNodes.length), A.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && A(o).remove(), A.merge([], i.childNodes)));
        var r, i, o
    }, A.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = kt(e.slice(s)), e = e.slice(0, s)), x(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && A.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? A("<div>").append(A.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, A.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        A.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), A.expr.pseudos.animated = function(t) {
        return A.grep(A.timers, function(e) {
            return t === e.elem
        }).length
    }, A.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u = A.css(e, "position"),
                c = A(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = A.css(e, "top"), l = A.css(e, "left"), i = ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (a = (r = c.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(l) || 0), x(t) && (t = t.call(e, n, A.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, A.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                A.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === A.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === A.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = A(e).offset()).top += A.css(e, "borderTopWidth", !0), i.left += A.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - A.css(r, "marginTop", !0),
                    left: t.left - i.left - A.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === A.css(e, "position");) e = e.offsetParent;
                return e || ie
            })
        }
    }), A.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        A.fn[t] = function(e) {
            return B(this, function(e, t, n) {
                var r;
                if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), A.each(["top", "left"], function(e, n) {
        A.cssHooks[n] = Ze(v.pixelPosition, function(e, t) {
            if (t) return t = Ke(e, n), Ve.test(t) ? A(e).position()[n] + "px" : t
        })
    }), A.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        A.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            A.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function(e, t, n) {
                    var r;
                    return g(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? A.css(e, t, i) : A.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), A.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        A.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), A.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), A.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), A.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), x(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || A.guid++, i
    }, A.holdReady = function(e) {
        e ? A.readyWait++ : A.ready(!0)
    }, A.isArray = Array.isArray, A.parseJSON = JSON.parse, A.nodeName = N, A.isFunction = x, A.isWindow = g, A.camelCase = V, A.type = w, A.now = Date.now, A.isNumeric = function(e) {
        var t = A.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return A
    });
    var an = C.jQuery,
        sn = C.$;
    return A.noConflict = function(e) {
        return C.$ === A && (C.$ = sn), e && C.jQuery === A && (C.jQuery = an), A
    }, e || (C.jQuery = C.$ = A), A
}),
function(e, t) {
    var n = function(s, M) {
        "use strict";
        if (!M.getElementsByClassName) return;
        var z, O, P = M.documentElement,
            l = s.Date,
            r = s.HTMLPictureElement,
            u = "addEventListener",
            R = "getAttribute",
            c = s[u],
            I = s.setTimeout,
            f = s.requestAnimationFrame || I,
            $ = s.requestIdleCallback,
            W = /^picture$/i,
            i = ["load", "error", "lazyincluded", "_lazyloaded"],
            n = {},
            F = Array.prototype.forEach,
            B = function(e, t) {
                return n[t] || (n[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), n[t].test(e[R]("class") || "") && n[t]
            },
            _ = function(e, t) {
                B(e, t) || e.setAttribute("class", (e[R]("class") || "").trim() + " " + t)
            },
            U = function(e, t) {
                var n;
                (n = B(e, t)) && e.setAttribute("class", (e[R]("class") || "").replace(n, " "))
            },
            X = function(t, n, e) {
                var r = e ? u : "removeEventListener";
                e && X(t, n), i.forEach(function(e) {
                    t[r](e, n)
                })
            },
            V = function(e, t, n, r, i) {
                var o = M.createEvent("Event");
                return n || (n = {}), n.instance = z, o.initEvent(t, !r, !i), o.detail = n, e.dispatchEvent(o), o
            },
            Y = function(e, t) {
                var n;
                !r && (n = s.picturefill || O.pf) ? (t && t.src && !e[R]("srcset") && e.setAttribute("srcset", t.src), n({
                    reevaluate: !0,
                    elements: [e]
                })) : t && t.src && (e.src = t.src)
            },
            G = function(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            },
            a = function(e, t, n) {
                for (n = n || e.offsetWidth; n < O.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                return n
            },
            Q = function() {
                var n, r, t = [],
                    i = [],
                    o = t,
                    a = function() {
                        var e = o;
                        for (o = t.length ? i : t, r = !(n = !0); e.length;) e.shift()();
                        n = !1
                    },
                    e = function(e, t) {
                        n && !t ? e.apply(this, arguments) : (o.push(e), r || (r = !0, (M.hidden ? I : f)(a)))
                    };
                return e._lsFlush = a, e
            }(),
            J = function(n, e) {
                return e ? function() {
                    Q(n)
                } : function() {
                    var e = this,
                        t = arguments;
                    Q(function() {
                        n.apply(e, t)
                    })
                }
            },
            K = function(e) {
                var t, n, r = function() {
                        t = null, e()
                    },
                    i = function() {
                        var e = l.now() - n;
                        e < 99 ? I(i, 99 - e) : ($ || r)(r)
                    };
                return function() {
                    n = l.now(), t || (t = I(i, 99))
                }
            };
        ! function() {
            var e, t = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            for (e in O = s.lazySizesConfig || s.lazysizesConfig || {}, t) e in O || (O[e] = t[e]);
            s.lazySizesConfig = O, I(function() {
                O.init && o()
            })
        }();
        var e = function() {
                var p, h, f, g, t, m, y, v, x, b, w, T, o = /^img$/i,
                    d = /^iframe$/i,
                    C = "onscroll" in s && !/(gle|ing)bot/.test(navigator.userAgent),
                    E = 0,
                    A = 0,
                    S = -1,
                    k = function(e) {
                        A--, e && !(A < 0) && e.target || (A = 0)
                    },
                    N = function(e) {
                        return null == T && (T = "hidden" == G(M.body, "visibility")), T || "hidden" != G(e.parentNode, "visibility") && "hidden" != G(e, "visibility")
                    },
                    D = function(e, t) {
                        var n, r = e,
                            i = N(e);
                        for (v -= t, w += t, x -= t, b += t; i && (r = r.offsetParent) && r != M.body && r != P;)(i = 0 < (G(r, "opacity") || 1)) && "visible" != G(r, "overflow") && (n = r.getBoundingClientRect(), i = b > n.left && x < n.right && w > n.top - 1 && v < n.bottom + 1);
                        return i
                    },
                    e = function() {
                        var e, t, n, r, i, o, a, s, l, u, c, f, d = z.elements;
                        if ((g = O.loadMode) && A < 8 && (e = d.length)) {
                            for (t = 0, S++, u = !O.expand || O.expand < 1 ? 500 < P.clientHeight && 500 < P.clientWidth ? 500 : 370 : O.expand, z._defEx = u, c = u * O.expFactor, f = O.hFac, T = null, E < c && A < 1 && 2 < S && 2 < g && !M.hidden ? (E = c, S = 0) : E = 1 < g && 1 < S && A < 6 ? u : 0; t < e; t++)
                                if (d[t] && !d[t]._lazyRace)
                                    if (C)
                                        if ((s = d[t][R]("data-expand")) && (o = 1 * s) || (o = E), l !== o && (m = innerWidth + o * f, y = innerHeight + o, a = -1 * o, l = o), n = d[t].getBoundingClientRect(), (w = n.bottom) >= a && (v = n.top) <= y && (b = n.right) >= a * f && (x = n.left) <= m && (w || b || x || v) && (O.loadHidden || N(d[t])) && (h && A < 3 && !s && (g < 3 || S < 4) || D(d[t], o))) {
                                            if (H(d[t]), i = !0, 9 < A) break
                                        } else !i && h && !r && A < 4 && S < 4 && 2 < g && (p[0] || O.preloadAfterLoad) && (p[0] || !s && (w || b || x || v || "auto" != d[t][R](O.sizesAttr))) && (r = p[0] || d[t]);
                            else H(d[t]);
                            r && !i && H(r)
                        }
                    },
                    n = function(e) {
                        var n, r = 0,
                            i = O.throttleDelay,
                            o = O.ricTimeout,
                            t = function() {
                                n = !1, r = l.now(), e()
                            },
                            a = $ && 49 < o ? function() {
                                $(t, {
                                    timeout: o
                                }), o !== O.ricTimeout && (o = O.ricTimeout)
                            } : J(function() {
                                I(t)
                            }, !0);
                        return function(e) {
                            var t;
                            (e = !0 === e) && (o = 33), n || (n = !0, (t = i - (l.now() - r)) < 0 && (t = 0), e || t < 9 ? a() : I(a, t))
                        }
                    }(e),
                    j = function(e) {
                        var t = e.target;
                        t._lazyCache ? delete t._lazyCache : (k(e), _(t, O.loadedClass), U(t, O.loadingClass), X(t, L), V(t, "lazyloaded"))
                    },
                    r = J(j),
                    L = function(e) {
                        r({
                            target: e.target
                        })
                    },
                    q = function(e) {
                        var t, n = e[R](O.srcsetAttr);
                        (t = O.customMedia[e[R]("data-media") || e[R]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                    },
                    a = J(function(t, e, n, r, i) {
                        var o, a, s, l, u, c;
                        (u = V(t, "lazybeforeunveil", e)).defaultPrevented || (r && (n ? _(t, O.autosizesClass) : t.setAttribute("sizes", r)), a = t[R](O.srcsetAttr), o = t[R](O.srcAttr), i && (s = t.parentNode, l = s && W.test(s.nodeName || "")), c = e.firesLoad || "src" in t && (a || o || l), u = {
                            target: t
                        }, _(t, O.loadingClass), c && (clearTimeout(f), f = I(k, 2500), X(t, L, !0)), l && F.call(s.getElementsByTagName("source"), q), a ? t.setAttribute("srcset", a) : o && !l && (d.test(t.nodeName) ? function(t, n) {
                            try {
                                t.contentWindow.location.replace(n)
                            } catch (e) {
                                t.src = n
                            }
                        }(t, o) : t.src = o), i && (a || l) && Y(t, {
                            src: o
                        })), t._lazyRace && delete t._lazyRace, U(t, O.lazyClass), Q(function() {
                            var e = t.complete && 1 < t.naturalWidth;
                            c && !e || (e && _(t, "ls-is-cached"), j(u), t._lazyCache = !0, I(function() {
                                "_lazyCache" in t && delete t._lazyCache
                            }, 9))
                        }, !0)
                    }),
                    H = function(e) {
                        var t, n = o.test(e.nodeName),
                            r = n && (e[R](O.sizesAttr) || e[R]("sizes")),
                            i = "auto" == r;
                        (!i && h || !n || !e[R]("src") && !e.srcset || e.complete || B(e, O.errorClass) || !B(e, O.lazyClass)) && (t = V(e, "lazyunveilread").detail, i && Z.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, A++, a(e, t, i, r, n))
                    },
                    i = function() {
                        if (!h)
                            if (l.now() - t < 999) I(i, 999);
                            else {
                                var e = K(function() {
                                    O.loadMode = 3, n()
                                });
                                h = !0, O.loadMode = 3, n(), c("scroll", function() {
                                    3 == O.loadMode && (O.loadMode = 2), e()
                                }, !0)
                            }
                    };
                return {
                    _: function() {
                        t = l.now(), z.elements = M.getElementsByClassName(O.lazyClass), p = M.getElementsByClassName(O.lazyClass + " " + O.preloadClass), c("scroll", n, !0), c("resize", n, !0), s.MutationObserver ? new MutationObserver(n).observe(P, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (P[u]("DOMNodeInserted", n, !0), P[u]("DOMAttrModified", n, !0), setInterval(n, 999)), c("hashchange", n, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) {
                            M[u](e, n, !0)
                        }), /d$|^c/.test(M.readyState) ? i() : (c("load", i), M[u]("DOMContentLoaded", n), I(i, 2e4)), z.elements.length ? (e(), Q._lsFlush()) : n()
                    },
                    checkElems: n,
                    unveil: H
                }
            }(),
            Z = function() {
                var n, o = J(function(e, t, n, r) {
                        var i, o, a;
                        if (e._lazysizesWidth = r, r += "px", e.setAttribute("sizes", r), W.test(t.nodeName || ""))
                            for (i = t.getElementsByTagName("source"), o = 0, a = i.length; o < a; o++) i[o].setAttribute("sizes", r);
                        n.detail.dataAttr || Y(e, n.detail)
                    }),
                    r = function(e, t, n) {
                        var r, i = e.parentNode;
                        i && (n = a(e, i, n), (r = V(e, "lazybeforesizes", {
                            width: n,
                            dataAttr: !!t
                        })).defaultPrevented || (n = r.detail.width) && n !== e._lazysizesWidth && o(e, i, r, n))
                    },
                    e = K(function() {
                        var e, t = n.length;
                        if (t)
                            for (e = 0; e < t; e++) r(n[e])
                    });
                return {
                    _: function() {
                        n = M.getElementsByClassName(O.autosizesClass), c("resize", e)
                    },
                    checkElems: e,
                    updateElem: r
                }
            }(),
            o = function() {
                o.i || (o.i = !0, Z._(), e._())
            };
        return z = {
            cfg: O,
            autoSizer: Z,
            loader: e,
            init: o,
            uP: Y,
            aC: _,
            rC: U,
            hC: B,
            fire: V,
            gW: a,
            rAF: Q
        }
    }(e, e.document);
    e.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
}(window), $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var e = $(this.hash);
        if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html, body").animate({
            scrollTop: e.offset().top - 36
        }, 300), !1
    }
}), $(function() {
    toggleMenu()
});
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var iframeIds = [],
    iframes = document.querySelectorAll(".video iframe");

function onYouTubeIframeAPIReady() {
    iframeIds.forEach(function(e) {
        new YT.Player(e, {
            events: {
                onReady: onPlayerReady
            }
        })
    })
}
iframes.forEach(function(e) {
    iframeIds.push(e.id)
});
var mapMunich, mapBerlin, iframeObjects = [];

function onPlayerReady(e) {
    var t = e.target,
        n = t.a,
        r = n.parentElement,
        i = r.querySelector(".play");
    r.querySelector(".stop");
    iframeObjects.push(t), i.addEventListener("click", function() {
        iframeObjects.forEach(function(e) {
            e.pauseVideo(), e.a.classList.remove("is-playing")
        }), t.playVideo(), n.classList.add("is-playing")
    })
}

function drawMap() {
    var e = new google.maps.LatLng(48.12886, 11.56786),
        t = document.getElementById("map80469"),
        n = new google.maps.LatLng(52.52458, 13.40474),
        r = document.getElementById("map10178"),
        i = [{
            featureType: "administrative",
            elementType: "all",
            stylers: [{
                hue: "#ffffff"
            }, {
                lightness: 100
            }, {
                visibility: "off"
            }]
        }, {
            featureType: "landscape",
            elementType: "all",
            stylers: [{
                hue: "#ffffff"
            }, {
                saturation: -100
            }, {
                lightness: 100
            }, {
                visibility: "on"
            }]
        }, {
            featureType: "landscape.man_made",
            elementType: "geometry",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{
                visibility: "off"
            }, {
                hue: "#ffbf00"
            }]
        }, {
            featureType: "landscape.man_made",
            elementType: "geometry.stroke",
            stylers: [{
                visibility: "off"
            }, {
                color: "#fa0000"
            }]
        }, {
            featureType: "poi",
            elementType: "all",
            stylers: [{
                hue: "#ffffff"
            }, {
                saturation: -100
            }, {
                lightness: 100
            }, {
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                hue: "#ff0000"
            }, {
                saturation: "-100"
            }, {
                lightness: "-100"
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
                hue: "#ffffff"
            }, {
                saturation: -100
            }, {
                lightness: 100
            }, {
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "labels.text",
            stylers: [{
                color: "#FFFFFF"
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                hue: "#000000"
            }, {
                lightness: -100
            }, {
                visibility: "on"
            }]
        }, {
            featureType: "transit",
            elementType: "labels",
            stylers: [{
                hue: "#ffffff"
            }, {
                lightness: 100
            }, {
                visibility: "off"
            }]
        }, {
            featureType: "water",
            elementType: "all",
            stylers: [{
                hue: "#ffffff"
            }, {
                saturation: -100
            }, {
                lightness: 100
            }, {
                visibility: "on"
            }]
        }],
        o = {
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: !0,
            center: e,
            fullscreenControl: !1,
            styles: i,
            disableDefaultUI: !0,
            mapTypeControl: !1,
            zoomControl: !0
        },
        a = {
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: !0,
            center: n,
            fullscreenControl: !1,
            styles: i,
            disableDefaultUI: !0,
            mapTypeControl: !1,
            zoomControl: !0
        },
        s = {
            url: "data:image/svg+xml,%3Csvg viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle id='Oval' fill='red' cx='6' cy='6' r='6'/%3E%3C/svg%3E%0A",
            size: new google.maps.Size(12, 12),
            scaledSize: new google.maps.Size(12, 12)
        },
        l = new google.maps.Marker({
            position: e,
            icon: s,
            clickable: !1
        }),
        u = new google.maps.Marker({
            position: n,
            icon: s,
            clickable: !1
        });
    if (t) {
        var c = new google.maps.Map(t, o);
        l.setMap(c)
    }
    if (r) {
        var f = new google.maps.Map(r, a);
        u.setMap(f)
    }
}