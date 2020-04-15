if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = ot.type(e);
        return "function" === n || ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {nex 
        if (ot.isFunction(t)) return ot.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return ot.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ft.test(t)) return ot.filter(t, e, n);
            t = ot.filter(t, e)
        }
        return ot.grep(e, function(e) {
            return ot.inArray(e, t) >= 0 !== n
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function a(e) {
        var t = wt[e] = {};
        return ot.each(e.match(bt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function r() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (r(), ot.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Ct, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : _t.test(n) ? ot.parseJSON(n) : n
                } catch (o) {}
                ot.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ot.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function d(e, t, n, i) {
        if (ot.acceptData(e)) {
            var o, a, r = ot.expando,
                s = e.nodeType,
                l = s ? ot.cache : e,
                c = s ? e[r] : e[r] && r;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[r] = G.pop() || ot.guid++ : r), l[c] || (l[c] = s ? {} : {
                toJSON: ot.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = ot.extend(l[c], t) : l[c].data = ot.extend(l[c].data, t)), a = l[c], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[ot.camelCase(t)] = n), "string" == typeof t ? (o = a[t], null == o && (o = a[ot.camelCase(t)])) : o = a, o
        }
    }

    function u(e, t, n) {
        if (ot.acceptData(e)) {
            var i, o, a = e.nodeType,
                r = a ? ot.cache : e,
                s = a ? e[ot.expando] : ot.expando;
            if (r[s]) {
                if (t && (i = n ? r[s] : r[s].data)) {
                    ot.isArray(t) ? t = t.concat(ot.map(t, ot.camelCase)) : t in i ? t = [t] : (t = ot.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !c(i) : !ot.isEmptyObject(i)) return
                }(n || (delete r[s].data, c(r[s]))) && (a ? ot.cleanData([e], !0) : nt.deleteExpando || r != r.window ? delete r[s] : r[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return ht.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = zt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, i, o = 0,
            a = typeof e.getElementsByTagName !== Tt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Tt ? e.querySelectorAll(t || "*") : void 0;
        if (!a)
            for (a = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || ot.nodeName(i, t) ? a.push(i) : ot.merge(a, g(i, t));
        return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([e], a) : a
    }

    function v(e) {
        jt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== ot.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Ut.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) ot._data(n, "globalEval", !t || ot._data(t[i], "globalEval"))
    }

    function k(e, t) {
        if (1 === t.nodeType && ot.hasData(e)) {
            var n, i, o, a = ot._data(e),
                r = ot._data(t, a),
                s = a.events;
            if (s) {
                delete r.handle, r.events = {};
                for (n in s)
                    for (i = 0, o = s[n].length; o > i; i++) ot.event.add(t, n, s[n][i])
            }
            r.data && (r.data = ot.extend({}, r.data))
        }
    }

    function T(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[ot.expando]) {
                o = ot._data(t);
                for (i in o.events) ot.removeEvent(t, i, o.handle);
                t.removeAttribute(ot.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !ot.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && jt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function _(t, n) {
        var i, o = ot(n.createElement(t)).appendTo(n.body),
            a = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : ot.css(o[0], "display");
        return o.detach(), a
    }

    function C(e) {
        var t = ht,
            n = Kt[e];
        return n || (n = _(e, t), "none" !== n && n || (Jt = (Jt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Jt[0].contentWindow || Jt[0].contentDocument).document, t.write(), t.close(), n = _(e, t), Jt.detach()), Kt[e] = n), n
    }

    function S(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function D(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = pn.length; o--;)
            if (t = pn[o] + n, t in e) return t;
        return i
    }

    function A(e, t) {
        for (var n, i, o, a = [], r = 0, s = e.length; s > r; r++) i = e[r], i.style && (a[r] = ot._data(i, "olddisplay"), n = i.style.display, t ? (a[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && At(i) && (a[r] = ot._data(i, "olddisplay", C(i.nodeName)))) : (o = At(i), (n && "none" !== n || !o) && ot._data(i, "olddisplay", o ? n : ot.css(i, "display"))));
        for (r = 0; s > r; r++) i = e[r], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[r] || "" : "none"));
        return e
    }

    function E(e, t, n) {
        var i = cn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function j(e, t, n, i, o) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > a; a += 2) "margin" === n && (r += ot.css(e, n + Dt[a], !0, o)), i ? ("content" === n && (r -= ot.css(e, "padding" + Dt[a], !0, o)), "margin" !== n && (r -= ot.css(e, "border" + Dt[a] + "Width", !0, o))) : (r += ot.css(e, "padding" + Dt[a], !0, o), "padding" !== n && (r += ot.css(e, "border" + Dt[a] + "Width", !0, o)));
        return r
    }

    function M(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            a = en(e),
            r = nt.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, a);
        if (0 >= o || null == o) {
            if (o = tn(e, t, a), (0 > o || null == o) && (o = e.style[t]), on.test(o)) return o;
            i = r && (nt.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + j(e, t, n || (r ? "border" : "content"), i, a) + "px"
    }

    function $(e, t, n, i, o) {
        return new $.prototype.init(e, t, n, i, o)
    }

    function P() {
        return setTimeout(function() {
            hn = void 0
        }), hn = ot.now()
    }

    function I(e, t) {
        var n, i = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Dt[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function N(e, t, n) {
        for (var i, o = (wn[t] || []).concat(wn["*"]), a = 0, r = o.length; r > a; a++)
            if (i = o[a].call(n, t, e)) return i
    }

    function z(e, t, n) {
        var i, o, a, r, s, l, c, d, u = this,
            f = {},
            p = e.style,
            h = e.nodeType && At(e),
            m = ot._data(e, "fxshow");
        n.queue || (s = ot._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, ot.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = ot.css(e, "display"), d = "none" === c ? ot._data(e, "olddisplay") || C(e.nodeName) : c, "inline" === d && "none" === ot.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], gn.exec(o)) {
                if (delete t[i], a = a || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i]) continue;
                    h = !0
                }
                f[i] = m && m[i] || ot.style(e, i)
            } else c = void 0;
        if (ot.isEmptyObject(f)) "inline" === ("none" === c ? C(e.nodeName) : c) && (p.display = c);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = ot._data(e, "fxshow", {}), a && (m.hidden = !h), h ? ot(e).show() : u.done(function() {
                ot(e).hide()
            }), u.done(function() {
                var t;
                ot._removeData(e, "fxshow");
                for (t in f) ot.style(e, t, f[t])
            });
            for (i in f) r = N(h ? m[i] : 0, i, u), i in m || (m[i] = r.start, h && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, i, o, a, r;
        for (n in e)
            if (i = ot.camelCase(n), o = t[i], a = e[n], ot.isArray(a) && (o = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), r = ot.cssHooks[i], r && "expand" in r) {
                a = r.expand(a), delete e[i];
                for (n in a) n in e || (e[n] = a[n], t[n] = o)
            } else t[i] = o
    }

    function O(e, t, n) {
        var i, o, a = 0,
            r = bn.length,
            s = ot.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = hn || P(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, a = 1 - i, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(a);
                return s.notifyWith(e, [c, a, n]), 1 > a && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: ot.extend({}, t),
                opts: ot.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: hn || P(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = ot.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (H(d, c.opts.specialEasing); r > a; a++)
            if (i = bn[a].call(c, e, d, c.opts)) return i;
        return ot.map(d, N, c), ot.isFunction(c.opts.start) && c.opts.start.call(e, c), ot.fx.timer(ot.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                a = t.toLowerCase().match(bt) || [];
            if (ot.isFunction(n))
                for (; i = a[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function F(e, t, n, i) {
        function o(s) {
            var l;
            return a[s] = !0, ot.each(e[s] || [], function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || r || a[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var a = {},
            r = e === Rn;
        return o(t.dataTypes[0]) || !a["*"] && o("*")
    }

    function Y(e, t) {
        var n, i, o = ot.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && ot.extend(!0, e, n), e
    }

    function W(e, t, n) {
        for (var i, o, a, r, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (r in s)
                if (s[r] && s[r].test(o)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) a = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    a = r;
                    break
                }
                i || (i = r)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
    }

    function q(e, t, n, i) {
        var o, a, r, s, l, c = {},
            d = e.dataTypes.slice();
        if (d[1])
            for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
        for (a = d.shift(); a;)
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift())
                if ("*" === a) a = l;
                else if ("*" !== l && l !== a) {
            if (r = c[l + " " + a] || c["* " + a], !r)
                for (o in c)
                    if (s = o.split(" "), s[1] === a && (r = c[l + " " + s[0]] || c["* " + s[0]])) {
                        r === !0 ? r = c[o] : c[o] !== !0 && (a = s[0], d.unshift(s[1]));
                        break
                    }
            if (r !== !0)
                if (r && e["throws"]) t = r(t);
                else try {
                    t = r(t)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: r ? u : "No conversion from " + l + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function R(e, t, n, i) {
        var o;
        if (ot.isArray(t)) ot.each(t, function(t, o) {
            n || Gn.test(e) ? i(e, o) : R(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== ot.type(t)) i(e, t);
        else
            for (o in t) R(e + "[" + o + "]", t[o], n, i)
    }

    function B() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Z() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function U(e) {
        return ot.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var G = [],
        V = G.slice,
        X = G.concat,
        Q = G.push,
        J = G.indexOf,
        K = {},
        et = K.toString,
        tt = K.hasOwnProperty,
        nt = {},
        it = "1.11.1",
        ot = function(e, t) {
            return new ot.fn.init(e, t)
        },
        at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rt = /^-ms-/,
        st = /-([\da-z])/gi,
        lt = function(e, t) {
            return t.toUpperCase()
        };
    ot.fn = ot.prototype = {
        jquery: it,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return V.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : V.call(this)
        },
        pushStack: function(e) {
            var t = ot.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ot.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ot.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: G.sort,
        splice: G.splice
    }, ot.extend = ot.fn.extend = function() {
        var e, t, n, i, o, a, r = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[s] || {}, s++), "object" == typeof r || ot.isFunction(r) || (r = {}), s === l && (r = this, s--); l > s; s++)
            if (null != (o = arguments[s]))
                for (i in o) e = r[i], n = o[i], r !== n && (c && n && (ot.isPlainObject(n) || (t = ot.isArray(n))) ? (t ? (t = !1, a = e && ot.isArray(e) ? e : []) : a = e && ot.isPlainObject(e) ? e : {}, r[i] = ot.extend(c, a, n)) : void 0 !== n && (r[i] = n));
        return r
    }, ot.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ot.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === ot.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !ot.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[et.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && ot.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(rt, "ms-").replace(st, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var o, a = 0,
                r = e.length,
                s = n(e);
            if (i) {
                if (s)
                    for (; r > a && (o = t.apply(e[a], i), o !== !1); a++);
                else
                    for (a in e)
                        if (o = t.apply(e[a], i), o === !1) break
            } else if (s)
                for (; r > a && (o = t.call(e[a], a, e[a]), o !== !1); a++);
            else
                for (a in e)
                    if (o = t.call(e[a], a, e[a]), o === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(at, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ot.merge(i, "string" == typeof e ? [e] : e) : Q.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (J) return J.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[o++] = t[i++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], a = 0, r = e.length, s = !n; r > a; a++) i = !t(e[a], a), i !== s && o.push(e[a]);
            return o
        },
        map: function(e, t, i) {
            var o, a = 0,
                r = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; r > a; a++) o = t(e[a], a, i), null != o && l.push(o);
            else
                for (a in e) o = t(e[a], a, i), null != o && l.push(o);
            return X.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), ot.isFunction(e) ? (n = V.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(V.call(arguments)))
            }, i.guid = e.guid = e.guid || ot.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: nt
    }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    });
    var ct = function(e) {
        function t(e, t, n, i) {
            var o, a, r, s, l, c, u, p, h, m;
            if ((t ? t.ownerDocument || t : F) !== $ && M(t), t = t || $, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (I && !i) {
                if (o = yt.exec(e))
                    if (r = o[1]) {
                        if (9 === s) {
                            if (a = t.getElementById(r), !a || !a.parentNode) return n;
                            if (a.id === r) return n.push(a), n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(r)) && O(t, a) && a.id === r) return n.push(a), n
                    } else {
                        if (o[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = o[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                    }
                if (x.qsa && (!N || !N.test(e))) {
                    if (p = u = L, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = C(e), (u = t.getAttribute("id")) ? p = u.replace(wt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
                        h = bt.test(e) && d(t.parentNode) || t, m = c.join(",")
                    }
                    if (m) try {
                        return K.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(lt, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[L] = !0, e
        }

        function o(e) {
            var t = $.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) k.attrHandle[n[i]] = t
        }

        function r(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, a = e([], n.length, t), r = a.length; r--;) n[o = a[r]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function d(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }

        function u() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                a = W++;
            return t.first ? function(t, n, a) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, a)
            } : function(t, n, r) {
                var s, l, c = [Y, a];
                if (r) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, r)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (l = t[L] || (t[L] = {}), (s = l[i]) && s[0] === Y && s[1] === a) return c[2] = s[2];
                            if (l[i] = c, c[2] = e(t, n, r)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var o = 0, a = n.length; a > o; o++) t(e, n[o], i);
            return i
        }

        function g(e, t, n, i, o) {
            for (var a, r = [], s = 0, l = e.length, c = null != t; l > s; s++)(a = e[s]) && (!n || n(a, i, o)) && (r.push(a), c && t.push(s));
            return r
        }

        function v(e, t, n, o, a, r) {
            return o && !o[L] && (o = v(o)), a && !a[L] && (a = v(a, r)), i(function(i, r, s, l) {
                var c, d, u, f = [],
                    p = [],
                    h = r.length,
                    v = i || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? v : g(v, f, e, s, l),
                    b = n ? a || (i ? e : h || o) ? [] : r : y;
                if (n && n(y, b, s, l), o)
                    for (c = g(b, p), o(c, [], s, l), d = c.length; d--;)(u = c[d]) && (b[p[d]] = !(y[p[d]] = u));
                if (i) {
                    if (a || e) {
                        if (a) {
                            for (c = [], d = b.length; d--;)(u = b[d]) && c.push(y[d] = u);
                            a(null, b = [], c, l)
                        }
                        for (d = b.length; d--;)(u = b[d]) && (c = a ? tt.call(i, u) : f[d]) > -1 && (i[c] = !(r[c] = u))
                    }
                } else b = g(b === r ? b.splice(h, b.length) : b), a ? a(null, r, b, l) : K.apply(r, b)
            })
        }

        function y(e) {
            for (var t, n, i, o = e.length, a = k.relative[e[0].type], r = a || k.relative[" "], s = a ? 1 : 0, l = p(function(e) {
                    return e === t
                }, r, !0), c = p(function(e) {
                    return tt.call(t, e) > -1
                }, r, !0), d = [function(e, n, i) {
                    return !a && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                }]; o > s; s++)
                if (n = k.relative[e[s].type]) d = [p(h(d), n)];
                else {
                    if (n = k.filter[e[s].type].apply(null, e[s].matches), n[L]) {
                        for (i = ++s; o > i && !k.relative[e[i].type]; i++);
                        return v(s > 1 && h(d), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, i > s && y(e.slice(s, i)), o > i && y(e = e.slice(i)), o > i && f(e))
                    }
                    d.push(n)
                }
            return h(d)
        }

        function b(e, n) {
            var o = n.length > 0,
                a = e.length > 0,
                r = function(i, r, s, l, c) {
                    var d, u, f, p = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        y = A,
                        b = i || a && k.find.TAG("*", c),
                        w = Y += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (c && (A = r !== $ && r); h !== x && null != (d = b[h]); h++) {
                        if (a && d) {
                            for (u = 0; f = e[u++];)
                                if (f(d, r, s)) {
                                    l.push(d);
                                    break
                                }
                            c && (Y = w)
                        }
                        o && ((d = !f && d) && p--, i && m.push(d))
                    }
                    if (p += h, o && h !== p) {
                        for (u = 0; f = n[u++];) f(m, v, r, s);
                        if (i) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
                            v = g(v)
                        }
                        K.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (Y = w, A = y), m
                };
            return o ? i(r) : r
        }
        var w, x, k, T, _, C, S, D, A, E, j, M, $, P, I, N, z, H, O, L = "sizzle" + -new Date,
            F = e.document,
            Y = 0,
            W = 0,
            q = n(),
            R = n(),
            B = n(),
            Z = function(e, t) {
                return e === t && (j = !0), 0
            },
            U = "undefined",
            G = 1 << 31,
            V = {}.hasOwnProperty,
            X = [],
            Q = X.pop,
            J = X.push,
            K = X.push,
            et = X.slice,
            tt = X.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            at = ot.replace("w", "w#"),
            rt = "\\[" + it + "*(" + ot + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + at + "))|)" + it + "*\\]",
            st = ":(" + ot + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            ct = new RegExp("^" + it + "*," + it + "*"),
            dt = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ut = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            ft = new RegExp(st),
            pt = new RegExp("^" + at + "$"),
            ht = {
                ID: new RegExp("^#(" + ot + ")"),
                CLASS: new RegExp("^\\.(" + ot + ")"),
                TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            wt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            kt = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            K.apply(X = et.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType
        } catch (Tt) {
            K = {
                apply: X.length ? function(e, t) {
                    J.apply(e, et.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, _ = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, M = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : F,
                i = n.defaultView;
            return n !== $ && 9 === n.nodeType && n.documentElement ? ($ = n, P = n.documentElement, I = !_(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                M()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                M()
            })), x.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = vt.test(n.getElementsByClassName) && o(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), x.getById = o(function(e) {
                return P.appendChild(e).id = L, !n.getElementsByName || !n.getElementsByName(L).length
            }), x.getById ? (k.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && I) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function(e) {
                var t = e.replace(xt, kt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function(e) {
                var t = e.replace(xt, kt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = x.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return a
            }, k.find.CLASS = x.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== U && I ? t.getElementsByClassName(e) : void 0
            }, z = [], N = [], (x.qsa = vt.test(n.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && N.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + it + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || N.push(":checked")
            }), o(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + it + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
            })), (x.matchesSelector = vt.test(H = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), z.push("!=", st)
            }), N = N.length && new RegExp(N.join("|")), z = z.length && new RegExp(z.join("|")), t = vt.test(P.compareDocumentPosition), O = t || vt.test(P.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Z = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === F && O(F, e) ? -1 : t === n || t.ownerDocument === F && O(F, t) ? 1 : E ? tt.call(E, e) - tt.call(E, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var i, o = 0,
                    a = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    c = [t];
                if (!a || !s) return e === n ? -1 : t === n ? 1 : a ? -1 : s ? 1 : E ? tt.call(E, e) - tt.call(E, t) : 0;
                if (a === s) return r(e, t);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (i = t; i = i.parentNode;) c.unshift(i);
                for (; l[o] === c[o];) o++;
                return o ? r(l[o], c[o]) : l[o] === F ? -1 : c[o] === F ? 1 : 0
            }, n) : $
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== $ && M(e), n = n.replace(ut, "='$1']"), !(!x.matchesSelector || !I || z && z.test(n) || N && N.test(n))) try {
                var i = H.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) {}
            return t(n, $, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== $ && M(e), O(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== $ && M(e);
            var n = k.attrHandle[t.toLowerCase()],
                i = n && V.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== i ? i : x.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (j = !x.detectDuplicates, E = !x.sortStable && e.slice(0), e.sort(Z), j) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return E = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += T(t);
            return n
        }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
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
                    return e[1] = e[1].replace(xt, kt), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, kt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xt, kt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && q(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var a = t.attr(o, e);
                        return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a + " ").indexOf(i) > -1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var a = "nth" !== e.slice(0, 3),
                        r = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, d, u, f, p, h, m = a !== r ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (a) {
                                for (; m;) {
                                    for (u = t; u = u[m];)
                                        if (s ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [r ? g.firstChild : g.lastChild], r && y) {
                                for (d = g[L] || (g[L] = {}), c = d[e] || [], p = c[0] === Y && c[1], f = c[0] === Y && c[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (f = p = 0) || h.pop();)
                                    if (1 === u.nodeType && ++f && u === t) {
                                        d[e] = [Y, p, f];
                                        break
                                    }
                            } else if (y && (c = (t[L] || (t[L] = {}))[e]) && c[0] === Y) f = c[1];
                            else
                                for (;
                                    (u = ++p && u && u[m] || (f = p = 0) || h.pop()) && ((s ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++f || (y && ((u[L] || (u[L] = {}))[e] = [Y, f]), u !== t)););
                            return f -= o, f === i || f % i === 0 && f / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, a = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[L] ? a(n) : a.length > 1 ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = a(e, n), r = o.length; r--;) i = tt.call(e, o[r]), e[i] = !(t[i] = o[r])
                    }) : function(e) {
                        return a(e, 0, o)
                    }) : a
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = S(e.replace(lt, "$1"));
                    return o[L] ? i(function(e, t, n, i) {
                        for (var a, r = o(e, null, i, []), s = e.length; s--;)(a = r[s]) && (e[s] = !(t[s] = a))
                    }) : function(e, i, a) {
                        return t[0] = e, o(t, null, a, n), !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, kt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            }) k.pseudos[w] = l(w);
        return u.prototype = k.filters = k.pseudos, k.setFilters = new u, C = t.tokenize = function(e, n) {
            var i, o, a, r, s, l, c, d = R[e + " "];
            if (d) return n ? 0 : d.slice(0);
            for (s = e, l = [], c = k.preFilter; s;) {
                (!i || (o = ct.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(a = [])), i = !1, (o = dt.exec(s)) && (i = o.shift(), a.push({
                    value: i,
                    type: o[0].replace(lt, " ")
                }), s = s.slice(i.length));
                for (r in k.filter) !(o = ht[r].exec(s)) || c[r] && !(o = c[r](o)) || (i = o.shift(), a.push({
                    value: i,
                    type: r,
                    matches: o
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : R(e, l).slice(0)
        }, S = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                a = B[e + " "];
            if (!a) {
                for (t || (t = C(e)), n = t.length; n--;) a = y(t[n]), a[L] ? i.push(a) : o.push(a);
                a = B(e, b(o, i)), a.selector = e
            }
            return a
        }, D = t.select = function(e, t, n, i) {
            var o, a, r, s, l, c = "function" == typeof e && e,
                u = !i && C(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (a = u[0] = u[0].slice(0), a.length > 2 && "ID" === (r = a[0]).type && x.getById && 9 === t.nodeType && I && k.relative[a[1].type]) {
                    if (t = (k.find.ID(r.matches[0].replace(xt, kt), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (o = ht.needsContext.test(e) ? 0 : a.length; o-- && (r = a[o], !k.relative[s = r.type]);)
                    if ((l = k.find[s]) && (i = l(r.matches[0].replace(xt, kt), bt.test(a[0].type) && d(t.parentNode) || t))) {
                        if (a.splice(o, 1), e = i.length && f(a), !e) return K.apply(n, i), n;
                        break
                    }
            }
            return (c || S(e, u))(i, t, !I, n, bt.test(e) && d(t.parentNode) || t), n
        }, x.sortStable = L.split("").sort(Z).join("") === L, x.detectDuplicates = !!j, M(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition($.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(nt, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
    var dt = ot.expr.match.needsContext,
        ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ft = /^.[^:#\[\.,]*$/;
    ot.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ot.find.matchesSelector(i, e) ? [i] : [] : ot.find.matches(e, ot.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ot.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
                for (t = 0; o > t; t++)
                    if (ot.contains(i[t], this)) return !0
            }));
            for (t = 0; o > t; t++) ot.find(e, i[t], n);
            return n = this.pushStack(o > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && dt.test(e) ? ot(e) : e || [], !1).length
        }
    });
    var pt, ht = e.document,
        mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = ot.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ot ? t[0] : t, ot.merge(this, ot.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), ut.test(n[1]) && ot.isPlainObject(t))
                        for (n in t) ot.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = ht.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return pt.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = ht, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(ot) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
        };
    gt.prototype = ot.fn, pt = ot(ht);
    var vt = /^(?:parents|prev(?:Until|All))/,
        yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ot.extend({
        dir: function(e, t, n) {
            for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !ot(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ot.fn.extend({
        has: function(e) {
            var t, n = ot(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (ot.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, a = [], r = dt.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    }
            return this.pushStack(a.length > 1 ? ot.unique(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ot.inArray(this[0], ot(e)) : ot.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ot.unique(ot.merge(this.get(), ot(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ot.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ot.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ot.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return ot.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ot.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ot.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ot.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ot.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ot.sibling(e.firstChild)
        },
        contents: function(e) {
            return ot.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ot.merge([], e.childNodes)
        }
    }, function(e, t) {
        ot.fn[e] = function(n, i) {
            var o = ot.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ot.filter(i, o)), this.length > 1 && (yt[e] || (o = ot.unique(o)), vt.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var bt = /\S+/g,
        wt = {};
    ot.Callbacks = function(e) {
        e = "string" == typeof e ? wt[e] || a(e) : ot.extend({}, e);
        var t, n, i, o, r, s, l = [],
            c = !e.once && [],
            d = function(a) {
                for (n = e.memory && a, i = !0, r = s || 0, s = 0, o = l.length, t = !0; l && o > r; r++)
                    if (l[r].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (c ? c.length && d(c.shift()) : n ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function a(t) {
                            ot.each(t, function(t, n) {
                                var i = ot.type(n);
                                "function" === i ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && a(n)
                            })
                        }(arguments), t ? o = l.length : n && (s = i, d(n))
                    }
                    return this
                },
                remove: function() {
                    return l && ot.each(arguments, function(e, n) {
                        for (var i;
                            (i = ot.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (o >= i && o--, r >= i && r--)
                    }), this
                },
                has: function(e) {
                    return e ? ot.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = c = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, n || u.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, n) {
                    return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : d(n)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, ot.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ot.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ot.Deferred(function(n) {
                            ot.each(t, function(t, a) {
                                var r = ot.isFunction(e[t]) && e[t];
                                o[a[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && ot.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ot.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, ot.each(t, function(e, a) {
                var r = a[2],
                    s = a[3];
                i[a[1]] = r.add, s && r.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[a[0]] = function() {
                    return o[a[0] + "With"](this === o ? i : this, arguments), this
                }, o[a[0] + "With"] = r.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0,
                a = V.call(arguments),
                r = a.length,
                s = 1 !== r || e && ot.isFunction(e.promise) ? r : 0,
                l = 1 === s ? e : ot.Deferred(),
                c = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? V.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (r > 1)
                for (t = new Array(r), n = new Array(r), i = new Array(r); r > o; o++) a[o] && ot.isFunction(a[o].promise) ? a[o].promise().done(c(o, i, a)).fail(l.reject).progress(c(o, n, t)) : --s;
            return s || l.resolveWith(i, a), l.promise()
        }
    });
    var xt;
    ot.fn.ready = function(e) {
        return ot.ready.promise().done(e), this
    }, ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ot.readyWait++ : ot.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ot.readyWait : !ot.isReady) {
                if (!ht.body) return setTimeout(ot.ready);
                ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (xt.resolveWith(ht, [ot]), ot.fn.triggerHandler && (ot(ht).triggerHandler("ready"), ot(ht).off("ready")))
            }
        }
    }), ot.ready.promise = function(t) {
        if (!xt)
            if (xt = ot.Deferred(), "complete" === ht.readyState) setTimeout(ot.ready);
            else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            ht.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ht.documentElement
            } catch (i) {}
            n && n.doScroll && ! function o() {
                if (!ot.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    r(), ot.ready()
                }
            }()
        }
        return xt.promise(t)
    };
    var kt, Tt = "undefined";
    for (kt in ot(nt)) break;
    nt.ownLast = "0" !== kt, nt.inlineBlockNeedsLayout = !1, ot(function() {
            var e, t, n, i;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = ht.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    nt.deleteExpando = !1
                }
            }
            e = null
        }(), ot.acceptData = function(e) {
            var t = ot.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var _t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ct = /([A-Z])/g;
    ot.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ot.cache[e[ot.expando]] : e[ot.expando], !!e && !c(e)
        },
        data: function(e, t, n) {
            return d(e, t, n)
        },
        removeData: function(e, t) {
            return u(e, t)
        },
        _data: function(e, t, n) {
            return d(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return u(e, t, !0)
        }
    }), ot.fn.extend({
        data: function(e, t) {
            var n, i, o, a = this[0],
                r = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (o = ot.data(a), 1 === a.nodeType && !ot._data(a, "parsedAttrs"))) {
                    for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(a, i, o[i])));
                    ot._data(a, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                ot.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ot.data(this, e, t)
            }) : a ? l(a, e, ot.data(a, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                ot.removeData(this, e)
            })
        }
    }), ot.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ot._data(e, t), n && (!i || ot.isArray(n) ? i = ot._data(e, t, ot.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ot.queue(e, t),
                i = n.length,
                o = n.shift(),
                a = ot._queueHooks(e, t),
                r = function() {
                    ot.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete a.stop, o.call(e, r, a)), !i && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ot._data(e, n) || ot._data(e, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    ot._removeData(e, t + "queue"), ot._removeData(e, n)
                })
            })
        }
    }), ot.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ot.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ot.queue(this, e, t);
                ot._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ot.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = ot.Deferred(),
                a = this,
                r = this.length,
                s = function() {
                    --i || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) n = ot._data(a[r], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Dt = ["Top", "Right", "Bottom", "Left"],
        At = function(e, t) {
            return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
        },
        Et = ot.access = function(e, t, n, i, o, a, r) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === ot.type(n)) {
                o = !0;
                for (s in n) ot.access(e, t, s, n[s], !0, a, r)
            } else if (void 0 !== i && (o = !0, ot.isFunction(i) || (r = !0), c && (r ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(ot(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, r ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : a
        },
        jt = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = ht.createElement("input"),
            t = ht.createElement("div"),
            n = ht.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                nt.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                nt.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, i = ht.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), nt[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Mt = /^(?:input|select|textarea)$/i,
        $t = /^key/,
        Pt = /^(?:mouse|pointer|contextmenu)|click/,
        It = /^(?:focusinfocus|focusoutblur)$/,
        Nt = /^([^.]*)(?:\.(.+)|)$/;
    ot.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var a, r, s, l, c, d, u, f, p, h, m, g = ot._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ot.guid++), (r = g.events) || (r = g.events = {}), (d = g.handle) || (d = g.handle = function(e) {
                        return typeof ot === Tt || e && ot.event.triggered === e.type ? void 0 : ot.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) a = Nt.exec(t[s]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p && (c = ot.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = ot.event.special[p] || {}, u = ot.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ot.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, l), (f = r[p]) || (f = r[p] = [], f.delegateCount = 0, c.setup && c.setup.call(e, i, h, d) !== !1 || (e.addEventListener ? e.addEventListener(p, d, !1) : e.attachEvent && e.attachEvent("on" + p, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), ot.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var a, r, s, l, c, d, u, f, p, h, m, g = ot.hasData(e) && ot._data(e);
            if (g && (d = g.events)) {
                for (t = (t || "").match(bt) || [""], c = t.length; c--;)
                    if (s = Nt.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (u = ot.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, f = d[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = f.length; a--;) r = f[a], !o && m !== r.origType || n && n.guid !== r.guid || s && !s.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (f.splice(a, 1), r.selector && f.delegateCount--, u.remove && u.remove.call(e, r));
                        l && !f.length && (u.teardown && u.teardown.call(e, h, g.handle) !== !1 || ot.removeEvent(e, p, g.handle), delete d[p])
                    } else
                        for (p in d) ot.event.remove(e, p + t[c], n, i, !0);
                ot.isEmptyObject(d) && (delete g.handle, ot._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var a, r, s, l, c, d, u, f = [i || ht],
                p = tt.call(t, "type") ? t.type : t,
                h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = d = i = i || ht, 3 !== i.nodeType && 8 !== i.nodeType && !It.test(p + ot.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), r = p.indexOf(":") < 0 && "on" + p, t = t[ot.expando] ? t : new ot.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ot.makeArray(n, [t]), c = ot.event.special[p] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!o && !c.noBubble && !ot.isWindow(i)) {
                    for (l = c.delegateType || p, It.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), d = s;
                    d === (i.ownerDocument || ht) && f.push(d.defaultView || d.parentWindow || e)
                }
                for (u = 0;
                    (s = f[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? l : c.bindType || p, a = (ot._data(s, "events") || {})[t.type] && ot._data(s, "handle"), a && a.apply(s, n), a = r && s[r], a && a.apply && ot.acceptData(s) && (t.result = a.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !o && !t.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), n) === !1) && ot.acceptData(i) && r && i[p] && !ot.isWindow(i)) {
                    d = i[r], d && (i[r] = null), ot.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {}
                    ot.event.triggered = void 0, d && (i[r] = d)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = ot.event.fix(e);
            var t, n, i, o, a, r = [],
                s = V.call(arguments),
                l = (ot._data(this, "events") || {})[e.type] || [],
                c = ot.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (r = ot.event.handlers.call(this, e, l), t = 0;
                    (o = r[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, a = 0;
                        (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((ot.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, a, r = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; s > a; a++) i = t[a], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? ot(n, this).index(l) >= 0 : ot.find(n, this, null, [l]).length), o[n] && o.push(i);
                        o.length && r.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return s < t.length && r.push({
                elem: this,
                handlers: t.slice(s)
            }), r
        },
        fix: function(e) {
            if (e[ot.expando]) return e;
            var t, n, i, o = e.type,
                a = e,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = Pt.test(o) ? this.mouseHooks : $t.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new ot.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
            return e.target || (e.target = a.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, a = t.button,
                    r = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ht, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ot.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = ot.extend(new ot.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ot.event.trigger(o, null, t) : ot.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, ot.removeEvent = ht.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Tt && (e[i] = null), e.detachEvent(i, n))
    }, ot.Event = function(e, t) {
        return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && ot.extend(this, t), this.timeStamp = e && e.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(e, t)
    }, ot.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ot.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    a = e.handleObj;
                return (!o || o !== i && !ot.contains(i, o)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), nt.submitBubbles || (ot.event.special.submit = {
        setup: function() {
            return ot.nodeName(this, "form") ? !1 : void ot.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = ot.nodeName(t, "input") || ot.nodeName(t, "button") ? t.form : void 0;
                n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ot._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ot.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ot.nodeName(this, "form") ? !1 : void ot.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (ot.event.special.change = {
        setup: function() {
            return Mt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ot.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, e, !0)
            })), !1) : void ot.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Mt.test(t.nodeName) && !ot._data(t, "changeBubbles") && (ot.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ot.event.simulate("change", this.parentNode, e, !0)
                }), ot._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ot.event.remove(this, "._change"), !Mt.test(this.nodeName)
        }
    }), nt.focusinBubbles || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ot.event.simulate(t, e.target, ot.event.fix(e), !0)
        };
        ot.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = ot._data(i, t);
                o || i.addEventListener(e, n, !0), ot._data(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = ot._data(i, t) - 1;
                o ? ot._data(i, t, o) : (i.removeEventListener(e, n, !0), ot._removeData(i, t))
            }
        }
    }), ot.fn.extend({
        on: function(e, t, n, i, o) {
            var a, r;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = p;
            else if (!i) return this;
            return 1 === o && (r = i, i = function(e) {
                return ot().off(e), r.apply(this, arguments)
            }, i.guid = r.guid || (r.guid = ot.guid++)), this.each(function() {
                ot.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ot(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                ot.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ot.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ot.event.trigger(e, t, n, !0) : void 0
        }
    });
    var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ht = / jQuery\d+="(?:null|\d+)"/g,
        Ot = new RegExp("<(?:" + zt + ")[\\s/>]", "i"),
        Lt = /^\s+/,
        Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Yt = /<([\w:]+)/,
        Wt = /<tbody/i,
        qt = /<|&#?\w+;/,
        Rt = /<(?:script|style|link)/i,
        Bt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Zt = /^$|\/(?:java|ecma)script/i,
        Ut = /^true\/(.*)/,
        Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Vt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Xt = m(ht),
        Qt = Xt.appendChild(ht.createElement("div"));
    Vt.optgroup = Vt.option, Vt.tbody = Vt.tfoot = Vt.colgroup = Vt.caption = Vt.thead, Vt.th = Vt.td, ot.extend({
        clone: function(e, t, n) {
            var i, o, a, r, s, l = ot.contains(e.ownerDocument, e);
            if (nt.html5Clone || ot.isXMLDoc(e) || !Ot.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (Qt.innerHTML = e.outerHTML, Qt.removeChild(a = Qt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e)))
                for (i = g(a), s = g(e), r = 0; null != (o = s[r]); ++r) i[r] && T(o, i[r]);
            if (t)
                if (n)
                    for (s = s || g(e), i = i || g(a), r = 0; null != (o = s[r]); r++) k(o, i[r]);
                else k(e, a);
            return i = g(a, "script"), i.length > 0 && x(i, !l && g(e, "script")), i = s = o = null, a
        },
        buildFragment: function(e, t, n, i) {
            for (var o, a, r, s, l, c, d, u = e.length, f = m(t), p = [], h = 0; u > h; h++)
                if (a = e[h], a || 0 === a)
                    if ("object" === ot.type(a)) ot.merge(p, a.nodeType ? [a] : a);
                    else if (qt.test(a)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (Yt.exec(a) || ["", ""])[1].toLowerCase(), d = Vt[l] || Vt._default, s.innerHTML = d[1] + a.replace(Ft, "<$1></$2>") + d[2], o = d[0]; o--;) s = s.lastChild;
                if (!nt.leadingWhitespace && Lt.test(a) && p.push(t.createTextNode(Lt.exec(a)[0])), !nt.tbody)
                    for (a = "table" !== l || Wt.test(a) ? "<table>" !== d[1] || Wt.test(a) ? 0 : s : s.firstChild, o = a && a.childNodes.length; o--;) ot.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                for (ot.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(a));
            for (s && f.removeChild(s), nt.appendChecked || ot.grep(g(p, "input"), v), h = 0; a = p[h++];)
                if ((!i || -1 === ot.inArray(a, i)) && (r = ot.contains(a.ownerDocument, a), s = g(f.appendChild(a), "script"), r && x(s), n))
                    for (o = 0; a = s[o++];) Zt.test(a.type || "") && n.push(a);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, i, o, a, r = 0, s = ot.expando, l = ot.cache, c = nt.deleteExpando, d = ot.event.special; null != (n = e[r]); r++)
                if ((t || ot.acceptData(n)) && (o = n[s], a = o && l[o])) {
                    if (a.events)
                        for (i in a.events) d[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, a.handle);
                    l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== Tt ? n.removeAttribute(s) : n[s] = null, G.push(o))
                }
        }
    }), ot.fn.extend({
        text: function(e) {
            return Et(this, function(e) {
                return void 0 === e ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? ot.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || ot.cleanData(g(n)), n.parentNode && (t && ot.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ot.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ot.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ot.clone(this, e, t)
            })
        },
        html: function(e) {
            return Et(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ht, "") : void 0;
                if (!("string" != typeof e || Rt.test(e) || !nt.htmlSerialize && Ot.test(e) || !nt.leadingWhitespace && Lt.test(e) || Vt[(Yt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ft, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ot.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, ot.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = X.apply([], e);
            var n, i, o, a, r, s, l = 0,
                c = this.length,
                d = this,
                u = c - 1,
                f = e[0],
                p = ot.isFunction(f);
            if (p || c > 1 && "string" == typeof f && !nt.checkClone && Bt.test(f)) return this.each(function(n) {
                var i = d.eq(n);
                p && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
            });
            if (c && (s = ot.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (a = ot.map(g(s, "script"), b), o = a.length; c > l; l++) i = s, l !== u && (i = ot.clone(i, !0, !0), o && ot.merge(a, g(i, "script"))), t.call(this[l], i, l);
                if (o)
                    for (r = a[a.length - 1].ownerDocument, ot.map(a, w), l = 0; o > l; l++) i = a[l], Zt.test(i.type || "") && !ot._data(i, "globalEval") && ot.contains(r, i) && (i.src ? ot._evalUrl && ot._evalUrl(i.src) : ot.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Gt, "")));
                s = n = null
            }
            return this
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ot.fn[e] = function(e) {
            for (var n, i = 0, o = [], a = ot(e), r = a.length - 1; r >= i; i++) n = i === r ? this : this.clone(!0), ot(a[i])[t](n), Q.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Jt, Kt = {};
    ! function() {
        var e;
        nt.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var en, tn, nn = /^margin/,
        on = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
        an = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, tn = function(e, t, n) {
            var i, o, a, r, s = e.style;
            return n = n || en(e), r = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== r || ot.contains(e.ownerDocument, e) || (r = ot.style(e, t)), on.test(r) && nn.test(t) && (i = s.width, o = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = r, r = n.width, s.width = i, s.minWidth = o, s.maxWidth = a)), void 0 === r ? r : r + ""
        }) : ht.documentElement.currentStyle && (en = function(e) {
            return e.currentStyle
        }, tn = function(e, t, n) {
            var i, o, a, r, s = e.style;
            return n = n || en(e), r = n ? n[t] : void 0, null == r && s && s[t] && (r = s[t]), on.test(r) && !an.test(t) && (i = s.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : r, r = s.pixelLeft + "px", s.left = i, a && (o.left = a)), void 0 === r ? r : r + "" || "auto"
        }),
        function() {
            function t() {
                var t, n, i, o;
                n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = r = !1, l = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(t, null) || {}).top, r = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, o = t.appendChild(ht.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === o[0].offsetHeight, s && (o[0].style.display = "", o[1].style.display = "none", s = 0 === o[0].offsetHeight), n.removeChild(i))
            }
            var n, i, o, a, r, s, l;
            n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], i = o && o.style, i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ot.extend(nt, {
                reliableHiddenOffsets: function() {
                    return null == s && t(), s
                },
                boxSizingReliable: function() {
                    return null == r && t(), r
                },
                pixelPosition: function() {
                    return null == a && t(), a
                },
                reliableMarginRight: function() {
                    return null == l && t(), l
                }
            }))
        }(), ot.swap = function(e, t, n, i) {
            var o, a, r = {};
            for (a in t) r[a] = e.style[a], e.style[a] = t[a];
            o = n.apply(e, i || []);
            for (a in t) e.style[a] = r[a];
            return o
        };
    var rn = /alpha\([^)]*\)/i,
        sn = /opacity\s*=\s*([^)]*)/,
        ln = /^(none|table(?!-c[ea]).+)/,
        cn = new RegExp("^(" + St + ")(.*)$", "i"),
        dn = new RegExp("^([+-])=(" + St + ")", "i"),
        un = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        fn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pn = ["Webkit", "O", "Moz", "ms"];
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, r, s = ot.camelCase(t),
                    l = e.style;
                if (t = ot.cssProps[s] || (ot.cssProps[s] = D(l, s)), r = ot.cssHooks[t] || ot.cssHooks[s], void 0 === n) return r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : l[t];
                if (a = typeof n, "string" === a && (o = dn.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ot.css(e, t)), a = "number"), null != n && n === n && ("number" !== a || ot.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (n = r.set(e, n, i))))) try {
                    l[t] = n
                } catch (c) {}
            }
        },
        css: function(e, t, n, i) {
            var o, a, r, s = ot.camelCase(t);
            return t = ot.cssProps[s] || (ot.cssProps[s] = D(e.style, s)), r = ot.cssHooks[t] || ot.cssHooks[s], r && "get" in r && (a = r.get(e, !0, n)), void 0 === a && (a = tn(e, t, i)), "normal" === a && t in fn && (a = fn[t]), "" === n || n ? (o = parseFloat(a), n === !0 || ot.isNumeric(o) ? o || 0 : a) : a
        }
    }), ot.each(["height", "width"], function(e, t) {
        ot.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? ln.test(ot.css(e, "display")) && 0 === e.offsetWidth ? ot.swap(e, un, function() {
                    return M(e, t, i)
                }) : M(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && en(e);
                return E(e, n, i ? j(e, t, i, nt.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), nt.opacity || (ot.cssHooks.opacity = {
        get: function(e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = ot.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                a = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ot.trim(a.replace(rn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = rn.test(a) ? a.replace(rn, o) : a + " " + o)
        }
    }), ot.cssHooks.marginRight = S(nt.reliableMarginRight, function(e, t) {
        return t ? ot.swap(e, {
            display: "inline-block"
        }, tn, [e, "marginRight"]) : void 0
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ot.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Dt[i] + t] = a[i] || a[i - 2] || a[0];
                return o
            }
        }, nn.test(e) || (ot.cssHooks[e + t].set = E)
    }), ot.fn.extend({
        css: function(e, t) {
            return Et(this, function(e, t, n) {
                var i, o, a = {},
                    r = 0;
                if (ot.isArray(t)) {
                    for (i = en(e), o = t.length; o > r; r++) a[t[r]] = ot.css(e, t[r], !1, i);
                    return a
                }
                return void 0 !== n ? ot.style(e, t, n) : ot.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                At(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.Tween = $, $.prototype = {
        constructor: $,
        init: function(e, t, n, i, o, a) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ot.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ot.fx = $.prototype.init, ot.fx.step = {};
    var hn, mn, gn = /^(?:toggle|show|hide)$/,
        vn = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
        yn = /queueHooks$/,
        bn = [z],
        wn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = vn.exec(t),
                    a = o && o[3] || (ot.cssNumber[e] ? "" : "px"),
                    r = (ot.cssNumber[e] || "px" !== a && +i) && vn.exec(ot.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (r && r[3] !== a) {
                    a = a || r[3], o = o || [], r = +i || 1;
                    do s = s || ".5", r /= s, ot.style(n.elem, e, r + a); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return o && (r = n.start = +r || +i || 0, n.unit = a, n.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    ot.Animation = ot.extend(O, {
            tweener: function(e, t) {
                ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], wn[n] = wn[n] || [], wn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? bn.unshift(e) : bn.push(e)
            }
        }), ot.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ot.extend({}, e) : {
                complete: n || !n && t || ot.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ot.isFunction(t) && t
            };
            return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
            }, i
        }, ot.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(At).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = ot.isEmptyObject(e),
                    a = ot.speed(t, n, i),
                    r = function() {
                        var t = O(this, ot.extend({}, e), a);
                        (o || ot._data(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r, o || a.queue === !1 ? this.each(r) : this.queue(a.queue, r)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        a = ot.timers,
                        r = ot._data(this);
                    if (o) r[o] && r[o].stop && i(r[o]);
                    else
                        for (o in r) r[o] && r[o].stop && yn.test(o) && i(r[o]);
                    for (o = a.length; o--;) a[o].elem !== this || null != e && a[o].queue !== e || (a[o].anim.stop(n), t = !1, a.splice(o, 1));
                    (t || !n) && ot.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ot._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        a = ot.timers,
                        r = i ? i.length : 0;
                    for (n.finish = !0, ot.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; r > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ot.each(["toggle", "show", "hide"], function(e, t) {
            var n = ot.fn[t];
            ot.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, i, o)
            }
        }), ot.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ot.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ot.timers = [], ot.fx.tick = function() {
            var e, t = ot.timers,
                n = 0;
            for (hn = ot.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ot.fx.stop(), hn = void 0
        }, ot.fx.timer = function(e) {
            ot.timers.push(e), e() ? ot.fx.start() : ot.timers.pop()
        }, ot.fx.interval = 13, ot.fx.start = function() {
            mn || (mn = setInterval(ot.fx.tick, ot.fx.interval))
        }, ot.fx.stop = function() {
            clearInterval(mn), mn = null
        }, ot.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ot.fn.delay = function(e, t) {
            return e = ot.fx ? ot.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e, t, n, i, o;
            t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = ht.createElement("select"), o = n.appendChild(ht.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = o.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !o.disabled, e = ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
        }();
    var xn = /\r/g;
    ot.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0]; {
                if (arguments.length) return i = ot.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, ot(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return t = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xn, "") : null == n ? "" : n)
            }
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ot.find.attr(e, "value");
                    return null != t ? t : ot.trim(ot.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, a = "select-one" === e.type || 0 > o, r = a ? null : [], s = a ? o + 1 : i.length, l = 0 > o ? s : a ? o : 0; s > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ot(n).val(), a) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, a = ot.makeArray(t), r = o.length; r--;)
                        if (i = o[r], ot.inArray(ot.valHooks.option.get(i), a) >= 0) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(e, t) {
                return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) >= 0 : void 0
            }
        }, nt.checkOn || (ot.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var kn, Tn, _n = ot.expr.attrHandle,
        Cn = /^(?:checked|selected)$/i,
        Sn = nt.getSetAttribute,
        Dn = nt.input;
    ot.fn.extend({
        attr: function(e, t) {
            return Et(this, ot.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ot.removeAttr(this, e)
            })
        }
    }), ot.extend({
        attr: function(e, t, n) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Tt ? ot.prop(e, t, n) : (1 === a && ot.isXMLDoc(e) || (t = t.toLowerCase(), i = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? Tn : kn)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = ot.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void ot.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                a = t && t.match(bt);
            if (a && 1 === e.nodeType)
                for (; n = a[o++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? Dn && Sn || !Cn.test(n) ? e[i] = !1 : e[ot.camelCase("default-" + n)] = e[i] = !1 : ot.attr(e, n, ""), e.removeAttribute(Sn ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!nt.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Tn = {
        set: function(e, t, n) {
            return t === !1 ? ot.removeAttr(e, n) : Dn && Sn || !Cn.test(n) ? e.setAttribute(!Sn && ot.propFix[n] || n, n) : e[ot.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = _n[t] || ot.find.attr;
        _n[t] = Dn && Sn || !Cn.test(t) ? function(e, t, i) {
            var o, a;
            return i || (a = _n[t], _n[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, _n[t] = a), o
        } : function(e, t, n) {
            return n ? void 0 : e[ot.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Dn && Sn || (ot.attrHooks.value = {
        set: function(e, t, n) {
            return ot.nodeName(e, "input") ? void(e.defaultValue = t) : kn && kn.set(e, t, n)
        }
    }), Sn || (kn = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, _n.id = _n.name = _n.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, ot.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: kn.set
    }, ot.attrHooks.contenteditable = {
        set: function(e, t, n) {
            kn.set(e, "" === t ? !1 : t, n)
        }
    }, ot.each(["width", "height"], function(e, t) {
        ot.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), nt.style || (ot.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var An = /^(?:input|select|textarea|button|object)$/i,
        En = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(e, t) {
            return Et(this, ot.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ot.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), ot.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, o, a, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return a = 1 !== r || !ot.isXMLDoc(e), a && (t = ot.propFix[t] || t, o = ot.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ot.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : An.test(e.nodeName) || En.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || ot.each(["href", "src"], function(e, t) {
        ot.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), nt.optSelected || (ot.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ot.propFix[this.toLowerCase()] = this
    }), nt.enctype || (ot.propFix.enctype = "encoding");
    var jn = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(e) {
            var t, n, i, o, a, r, s = 0,
                l = this.length,
                c = "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).addClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : " ")) {
                        for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r = ot.trim(i), n.className !== r && (n.className = r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, a, r, s = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).removeClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : "")) {
                        for (a = 0; o = t[a++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        r = e ? ot.trim(i) : "", n.className !== r && (n.className = r)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ot.isFunction(e) ? function(n) {
                ot(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, o = ot(this), a = e.match(bt) || []; t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === Tt || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ot._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ot.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ot.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Mn = ot.now(),
        $n = /\?/,
        Pn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ot.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            o = ot.trim(t + "");
        return o && !ot.trim(o.replace(Pn, function(e, t, o, a) {
            return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !a - !o, "")
        })) ? Function("return " + o)() : ot.error("Invalid JSON: " + t)
    }, ot.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + t), n
    };
    var In, Nn, zn = /#.*$/,
        Hn = /([?&])_=[^&]*/,
        On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ln = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fn = /^(?:GET|HEAD)$/,
        Yn = /^\/\//,
        Wn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        qn = {},
        Rn = {},
        Bn = "*/".concat("*");
    try {
        Nn = location.href
    } catch (Zn) {
        Nn = ht.createElement("a"), Nn.href = "", Nn = Nn.href
    }
    In = Wn.exec(Nn.toLowerCase()) || [], ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Nn,
            type: "GET",
            isLocal: Ln.test(In[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Y(Y(e, ot.ajaxSettings), t) : Y(ot.ajaxSettings, e)
        },
        ajaxPrefilter: L(qn),
        ajaxTransport: L(Rn),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var o, d, v, y, w, k = t;
                2 !== b && (b = 2, s && clearTimeout(s), c = void 0, r = i || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (y = W(u, x, n)), y = q(u, y, x, o), o ? (u.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ot.lastModified[a] = w), w = x.getResponseHeader("etag"), w && (ot.etag[a] = w)), 204 === e || "HEAD" === u.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, d = y.data, v = y.error, o = !v)) : (v = k, (e || !k) && (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || k) + "", o ? h.resolveWith(f, [d, k, x]) : h.rejectWith(f, [x, k, v]), x.statusCode(g), g = void 0, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, u, o ? d : v]), m.fireWith(f, [x, k]), l && (p.trigger("ajaxComplete", [x, u]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, a, r, s, l, c, d, u = ot.ajaxSetup({}, t),
                f = u.context || u,
                p = u.context && (f.nodeType || f.jquery) ? ot(f) : ot.event,
                h = ot.Deferred(),
                m = ot.Callbacks("once memory"),
                g = u.statusCode || {},
                v = {},
                y = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!d)
                                for (d = {}; t = On.exec(r);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (u.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), n(0, t), this
                    }
                };
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, u.url = ((e || u.url || Nn) + "").replace(zn, "").replace(Yn, In[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = ot.trim(u.dataType || "*").toLowerCase().match(bt) || [""], null == u.crossDomain && (i = Wn.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === In[1] && i[2] === In[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (In[3] || ("http:" === In[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = ot.param(u.data, u.traditional)), F(qn, u, t, x), 2 === b) return x;
            l = u.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Fn.test(u.type), a = u.url, u.hasContent || (u.data && (a = u.url += ($n.test(a) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Hn.test(a) ? a.replace(Hn, "$1_=" + Mn++) : a + ($n.test(a) ? "&" : "?") + "_=" + Mn++)), u.ifModified && (ot.lastModified[a] && x.setRequestHeader("If-Modified-Since", ot.lastModified[a]), ot.etag[a] && x.setRequestHeader("If-None-Match", ot.etag[a])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Bn + "; q=0.01" : "") : u.accepts["*"]);
            for (o in u.headers) x.setRequestHeader(o, u.headers[o]);
            if (u.beforeSend && (u.beforeSend.call(f, x, u) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](u[o]);
            if (c = F(Rn, u, t, x)) {
                x.readyState = 1, l && p.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (s = setTimeout(function() {
                    x.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, c.send(v, n)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return ot.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ot.get(e, void 0, t, "script")
        }
    }), ot.each(["get", "post"], function(e, t) {
        ot[t] = function(e, n, i, o) {
            return ot.isFunction(n) && (o = o || i, i = n, n = void 0), ot.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ot.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ot._evalUrl = function(e) {
        return ot.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ot.fn.extend({
        wrapAll: function(e) {
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ot(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(ot.isFunction(e) ? function(t) {
                ot(this).wrapInner(e.call(this, t))
            } : function() {
                var t = ot(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ot.isFunction(e);
            return this.each(function(n) {
                ot(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ot.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ot.css(e, "display"))
    }, ot.expr.filters.visible = function(e) {
        return !ot.expr.filters.hidden(e)
    };
    var Un = /%20/g,
        Gn = /\[\]$/,
        Vn = /\r?\n/g,
        Xn = /^(?:submit|button|image|reset|file)$/i,
        Qn = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = ot.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) R(n, e[n], t, o);
        return i.join("&").replace(Un, "+")
    }, ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ot.prop(this, "elements");
                return e ? ot.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ot(this).is(":disabled") && Qn.test(this.nodeName) && !Xn.test(e) && (this.checked || !jt.test(e))
            }).map(function(e, t) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Vn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Vn, "\r\n")
                }
            }).get()
        }
    }), ot.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && B() || Z()
    } : B;
    var Jn = 0,
        Kn = {},
        ei = ot.ajaxSettings.xhr();
    e.ActiveXObject && ot(e).on("unload", function() {
        for (var e in Kn) Kn[e](void 0, !0)
    }), nt.cors = !!ei && "withCredentials" in ei, ei = nt.ajax = !!ei, ei && ot.ajaxTransport(function(e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function(n, i) {
                    var o, a = e.xhr(),
                        r = ++Jn;
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && a.setRequestHeader(o, n[o] + "");
                    a.send(e.hasContent && e.data || null), t = function(n, o) {
                        var s, l, c;
                        if (t && (o || 4 === a.readyState))
                            if (delete Kn[r], t = void 0, a.onreadystatechange = ot.noop, o) 4 !== a.readyState && a.abort();
                            else {
                                c = {}, s = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (d) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            }
                        c && i(s, l, c, a.getAllResponseHeaders())
                    }, e.async ? 4 === a.readyState ? setTimeout(t) : a.onreadystatechange = Kn[r] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ot.globalEval(e), e
            }
        }
    }), ot.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ot.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ht.head || ot("head")[0] || ht.documentElement;
            return {
                send: function(i, o) {
                    t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ti = [],
        ni = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ti.pop() || ot.expando + "_" + Mn++;
            return this[e] = !0, e
        }
    }), ot.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, a, r, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + o) : t.jsonp !== !1 && (t.url += ($n.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return r || ot.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", a = e[o], e[o] = function() {
            r = arguments
        }, i.always(function() {
            e[o] = a, t[o] && (t.jsonpCallback = n.jsonpCallback, ti.push(o)), r && ot.isFunction(a) && a(r[0]), r = a = void 0
        }), "script") : void 0
    }), ot.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ht;
        var i = ut.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = ot.buildFragment([e], t, o), o && o.length && ot(o).remove(), ot.merge([], i.childNodes))
    };
    var ii = ot.fn.load;
    ot.fn.load = function(e, t, n) {
        if ("string" != typeof e && ii) return ii.apply(this, arguments);
        var i, o, a, r = this,
            s = e.indexOf(" ");
        return s >= 0 && (i = ot.trim(e.slice(s, e.length)), e = e.slice(0, s)), ot.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), r.length > 0 && ot.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, r.html(i ? ot("<div>").append(ot.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            r.each(n, o || [e.responseText, t, e])
        }), this
    }, ot.expr.filters.animated = function(e) {
        return ot.grep(ot.timers, function(t) {
            return e === t.elem
        }).length
    };
    var oi = e.document.documentElement;
    ot.offset = {
        setOffset: function(e, t, n) {
            var i, o, a, r, s, l, c, d = ot.css(e, "position"),
                u = ot(e),
                f = {};
            "static" === d && (e.style.position = "relative"), s = u.offset(), a = ot.css(e, "top"), l = ot.css(e, "left"), c = ("absolute" === d || "fixed" === d) && ot.inArray("auto", [a, l]) > -1, c ? (i = u.position(), r = i.top, o = i.left) : (r = parseFloat(a) || 0, o = parseFloat(l) || 0), ot.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + r), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : u.css(f)
        }
    }, ot.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ot.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                a = o && o.ownerDocument;
            if (a) return t = a.documentElement, ot.contains(t, o) ? (typeof o.getBoundingClientRect !== Tt && (i = o.getBoundingClientRect()), n = U(a), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === ot.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (n = e.offset()), n.top += ot.css(e[0], "borderTopWidth", !0), n.left += ot.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ot.css(i, "marginTop", !0),
                    left: t.left - n.left - ot.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || oi; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position");) e = e.offsetParent;
                return e || oi
            })
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        ot.fn[e] = function(i) {
            return Et(this, function(e, i, o) {
                var a = U(e);
                return void 0 === o ? a ? t in a ? a[t] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(n ? ot(a).scrollLeft() : o, n ? o : ot(a).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), ot.each(["top", "left"], function(e, t) {
        ot.cssHooks[t] = S(nt.pixelPosition, function(e, n) {
            return n ? (n = tn(e, t), on.test(n) ? ot(e).position()[t] + "px" : n) : void 0
        })
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ot.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            ot.fn[i] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    r = n || (i === !0 || o === !0 ? "margin" : "border");
                return Et(this, function(t, n, i) {
                    var o;
                    return ot.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ot.css(t, n, r) : ot.style(t, n, i, r)
                }, t, a ? i : void 0, a, null)
            }
        })
    }), ot.fn.size = function() {
        return this.length
    }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot
    });
    var ai = e.jQuery,
        ri = e.$;
    return ot.noConflict = function(t) {
        return e.$ === ot && (e.$ = ri), t && e.jQuery === ot && (e.jQuery = ai), ot
    }, typeof t === Tt && (e.jQuery = e.$ = ot), ot
}), function(e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function() {
            var t = e("meta[name=csrf-token]").attr("content"),
                n = e("meta[name=csrf-param]").attr("content");
            e('form input[name="' + n + '"]').val(t)
        },
        fire: function(t, n, i) {
            var o = e.Event(n);
            return t.trigger(o, i), o.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e.attr("href")
        },
        handleRemote: function(i) {
            var o, a, r, s, l, c, d, u;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("cross-domain"), l = s === t ? null : s, c = i.data("with-credentials") || null, d = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    o = i.attr("method"), a = i.attr("action"), r = i.serializeArray();
                    var f = i.data("ujs:submit-button");
                    f && (r.push(f), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (o = i.data("method"), a = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", a = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : (o = i.data("method"), a = n.href(i), r = i.data("params") || null);
                return u = {
                    type: o || "GET",
                    data: r,
                    dataType: d,
                    beforeSend: function(e, o) {
                        return o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [e, o]) ? void i.trigger("ajax:send", e) : !1
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: l
                }, c && (u.xhrFields = {
                    withCredentials: c
                }), a && (u.url = a), n.ajax(u)
            }
            return !1
        },
        handleMethod: function(i) {
            var o = n.href(i),
                a = i.data("method"),
                r = i.attr("target"),
                s = e("meta[name=csrf-token]").attr("content"),
                l = e("meta[name=csrf-param]").attr("content"),
                c = e('<form method="post" action="' + o + '"></form>'),
                d = '<input name="_method" value="' + a + '" type="hidden" />';
            l !== t && s !== t && (d += '<input name="' + l + '" value="' + s + '" type="hidden" />'), r && c.attr("target", r), c.hide().append(d).appendTo("body"), c.submit()
        },
        formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function(t) {
            n.formElements(t, n.disableSelector).each(function() {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var n, i;
            n = e.is("button") ? "html" : "val", i = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), i !== t && e[n](i), e.prop("disabled", !0)
        },
        enableFormElements: function(t) {
            n.formElements(t, n.enableSelector).each(function() {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var t = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
        },
        allowAction: function(e) {
            var t, i = e.data("confirm"),
                o = !1;
            return i ? (n.fire(e, "confirm") && (o = n.confirm(i), t = n.fire(e, "confirm:complete", [o])), o && t) : !0
        },
        blankInputs: function(t, n, i) {
            var o, a, r = e(),
                s = n || "input,textarea",
                l = t.find(s);
            return l.each(function() {
                if (o = e(this), a = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !a == !i) {
                    if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
                    r = r.add(o)
                }
            }), r.length ? r : !1
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            var i = e.data("disable-with");
            e.data("ujs:enable-with", e.html()), i !== t && e.html(i), e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(e(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
        n.enableFormElement(e(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
        var o = e(this),
            a = o.data("method"),
            r = o.data("params"),
            s = i.metaKey || i.ctrlKey;
        if (!n.allowAction(o)) return n.stopEverything(i);
        if (!s && o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== t) {
            if (s && (!a || "GET" === a) && !r) return !0;
            var l = n.handleRemote(o);
            return l === !1 ? n.enableElement(o) : l.error(function() {
                n.enableElement(o)
            }), !1
        }
        return o.data("method") ? (n.handleMethod(o), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var o = n.handleRemote(i);
        return o === !1 ? n.enableFormElement(i) : o.error(function() {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
        var i = e(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var o, a, r = e(this),
            s = r.data("remote") !== t;
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (r.attr("novalidate") == t && (o = n.blankInputs(r, n.requiredInputSelector), o && n.fire(r, "ajax:aborted:required", [o]))) return n.stopEverything(i);
        if (s) {
            if (a = n.nonBlankInputs(r, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(r)
                }, 13);
                var l = n.fire(r, "ajax:aborted:file", [a]);
                return l || setTimeout(function() {
                    n.enableFormElements(r)
                }, 13), l
            }
            return n.handleRemote(r), !1
        }
        setTimeout(function() {
            n.disableFormElements(r)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var o = i.attr("name"),
            a = o ? {
                name: o,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", a)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
        this == t.target && n.disableFormElements(e(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
        this == t.target && n.enableFormElements(e(this))
    }), e(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
"use strict";

function t() {
    var e = document.createElement("bootstrap"),
        t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
    for (var n in t)
        if (void 0 !== e.style[n]) return {
            end: t[n]
        };
    return !1
}
e.fn.emulateTransitionEnd = function(t) {
    var n = !1,
        i = this;
    e(this).one("bsTransitionEnd", function() {
        n = !0
    });
    var o = function() {
        n || e(i).trigger(e.support.transition.end)
    };
    return setTimeout(o, t), this
}, e(function() {
    e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
        bindType: e.support.transition.end,
        delegateType: e.support.transition.end,
        handle: function(t) {
            return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
        }
    })
})
}(jQuery), + function(e) {
"use strict";

function t(t) {
    return this.each(function() {
        var n = e(this),
            o = n.data("bs.alert");
        o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n)
    })
}
var n = '[data-dismiss="alert"]',
    i = function(t) {
        e(t).on("click", n, this.close)
    };
i.VERSION = "3.2.0", i.prototype.close = function(t) {
    function n() {
        a.detach().trigger("closed.bs.alert").remove()
    }
    var i = e(this),
        o = i.attr("data-target");
    o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
    var a = e(o);
    t && t.preventDefault(), a.length || (a = i.hasClass("alert") ? i : i.parent()), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
};
var o = e.fn.alert;
e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
    return e.fn.alert = o, this
}, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(e) {
"use strict";

function t(t) {
    return this.each(function() {
        var i = e(this),
            o = i.data("bs.button"),
            a = "object" == typeof t && t;
        o || i.data("bs.button", o = new n(this, a)), "toggle" == t ? o.toggle() : t && o.setState(t)
    })
}
var n = function(t, i) {
    this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
};
n.VERSION = "3.2.0", n.DEFAULTS = {
    loadingText: "loading..."
}, n.prototype.setState = function(t) {
    var n = "disabled",
        i = this.$element,
        o = i.is("input") ? "val" : "html",
        a = i.data();
    t += "Text", null == a.resetText && i.data("resetText", i[o]()), i[o](null == a[t] ? this.options[t] : a[t]), setTimeout(e.proxy(function() {
        "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
    }, this), 0)
}, n.prototype.toggle = function() {
    var e = !0,
        t = this.$element.closest('[data-toggle="buttons"]');
    if (t.length) {
        var n = this.$element.find("input");
        "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
    }
    e && this.$element.toggleClass("active")
};
var i = e.fn.button;
e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
    return e.fn.button = i, this
}, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
    var i = e(n.target);
    i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), n.preventDefault()
})
}(jQuery), + function(e) {
"use strict";

function t(t) {
    return this.each(function() {
        var i = e(this),
            o = i.data("bs.carousel"),
            a = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
            r = "string" == typeof t ? t : a.slide;
        o || i.data("bs.carousel", o = new n(this, a)), "number" == typeof t ? o.to(t) : r ? o[r]() : a.interval && o.pause().cycle()
    })
}
var n = function(t, n) {
    this.$element = e(t).on("keydown.bs.carousel", e.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
};
n.VERSION = "3.2.0", n.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0
}, n.prototype.keydown = function(e) {
    switch (e.which) {
        case 37:
            this.prev();
            break;
        case 39:
            this.next();
            break;
        default:
            return
    }
    e.preventDefault()
}, n.prototype.cycle = function(t) {
    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
}, n.prototype.getItemIndex = function(e) {
    return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
}, n.prototype.to = function(t) {
    var n = this,
        i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
        n.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", e(this.$items[t]))
}, n.prototype.pause = function(t) {
    return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, n.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next")
}, n.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev")
}, n.prototype.slide = function(t, n) {
    var i = this.$element.find(".item.active"),
        o = n || i[t](),
        a = this.interval,
        r = "next" == t ? "left" : "right",
        s = "next" == t ? "first" : "last",
        l = this;
    if (!o.length) {
        if (!this.options.wrap) return;
        o = this.$element.find(".item")[s]()
    }
    if (o.hasClass("active")) return this.sliding = !1;
    var c = o[0],
        d = e.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: r
        });
    if (this.$element.trigger(d), !d.isDefaultPrevented()) {
        if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var u = e(this.$indicators.children()[this.getItemIndex(o)]);
            u && u.addClass("active")
        }
        var f = e.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: r
        });
        return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, i.addClass(r), o.addClass(r), i.one("bsTransitionEnd", function() {
            o.removeClass([t, r].join(" ")).addClass("active"), i.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                l.$element.trigger(f)
            }, 0)
        }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(f)), a && this.cycle(), this
    }
};
var i = e.fn.carousel;
e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
    return e.fn.carousel = i, this
}, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(n) {
    var i, o = e(this),
        a = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
    if (a.hasClass("carousel")) {
        var r = e.extend({}, a.data(), o.data()),
            s = o.attr("data-slide-to");
        s && (r.interval = !1), t.call(a, r), s && a.data("bs.carousel").to(s), n.preventDefault()
    }
}), e(window).on("load", function() {
    e('[data-ride="carousel"]').each(function() {
        var n = e(this);
        t.call(n, n.data())
    })
})
}(jQuery), + function(e) {
"use strict";

function t(t) {
    return this.each(function() {
        var i = e(this),
            o = i.data("bs.collapse"),
            a = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
        !o && a.toggle && "show" == t && (t = !t), o || i.data("bs.collapse", o = new n(this, a)), "string" == typeof t && o[t]()
    })
}
var n = function(t, i) {
    this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
};
n.VERSION = "3.2.0", n.DEFAULTS = {
    toggle: !0
}, n.prototype.dimension = function() {
    var e = this.$element.hasClass("width");
    return e ? "width" : "height"
}, n.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
        var n = e.Event("show.bs.collapse");
        if (this.$element.trigger(n), !n.isDefaultPrevented()) {
            var i = this.$parent && this.$parent.find("> .panel > .in");
            if (i && i.length) {
                var o = i.data("bs.collapse");
                if (o && o.transitioning) return;
                t.call(i, "hide"), o || i.data("bs.collapse", null)
            }
            var a = this.dimension();
            this.$element.removeClass("collapse").addClass("collapsing")[a](0), this.transitioning = 1;
            var r = function() {
                this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
            };
            if (!e.support.transition) return r.call(this);
            var s = e.camelCase(["scroll", a].join("-"));
            this.$element.one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(350)[a](this.$element[0][s])
        }
    }
}, n.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
        var t = e.Event("hide.bs.collapse");
        if (this.$element.trigger(t), !t.isDefaultPrevented()) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
            var i = function() {
                this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
            };
            return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
        }
    }
}, n.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
};
var i = e.fn.collapse;
e.fn.collapse = t, e.fn.collapse.Constructor = n, e.fn.collapse.noConflict = function() {
    return e.fn.collapse = i, this
}, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
    var i, o = e(this),
        a = o.attr("data-target") || n.preventDefault() || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
        r = e(a),
        s = r.data("bs.collapse"),
        l = s ? "toggle" : o.data(),
        c = o.attr("data-parent"),
        d = c && e(c);
    s && s.transitioning || (d && d.find('[data-toggle="collapse"][data-parent="' + c + '"]').not(o).addClass("collapsed"), o[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), t.call(r, l)
})
}(jQuery), + function(e) {
"use strict";

function t(t) {
    t && 3 === t.which || (e(o).remove(), e(a).each(function() {
        var i = n(e(this)),
            o = {
                relatedTarget: this
            };
        i.hasClass("open") && (i.trigger(t = e.Event("hide.bs.dropdown", o)), t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", o))
    }))
}

function n(t) {
    var n = t.attr("data-target");
    n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
    var i = n && e(n);
    return i && i.length ? i : t.parent()
}

function i(t) {
    return this.each(function() {
        var n = e(this),
            i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", i = new r(this)), "string" == typeof t && i[t].call(n)
    })
}
var o = ".dropdown-backdrop",
    a = '[data-toggle="dropdown"]',
    r = function(t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
r.VERSION = "3.2.0", r.prototype.toggle = function(i) {
    var o = e(this);
    if (!o.is(".disabled, :disabled")) {
        var a = n(o),
            r = a.hasClass("open");
        if (t(), !r) {
            "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
            var s = {
                relatedTarget: this
            };
            if (a.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
            o.trigger("focus"), a.toggleClass("open").trigger("shown.bs.dropdown", s)
        }
        return !1
    }
}, r.prototype.keydown = function(t) {
    if (/(38|40|27)/.test(t.keyCode)) {
        var i = e(this);
        if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
            var o = n(i),
                r = o.hasClass("open");
            if (!r || r && 27 == t.keyCode) return 27 == t.which && o.find(a).trigger("focus"), i.trigger("click");
            var s = " li:not(.divider):visible a",
                l = o.find('[role="menu"]' + s + ', [role="listbox"]' + s);
            if (l.length) {
                var c = l.index(l.filter(":focus"));
                38 == t.keyCode && c > 0 && c--, 40 == t.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
            }
        }
    }
};
var s = e.fn.dropdown;
e.fn.dropdown = i, e.fn.dropdown.Constructor = r, e.fn.dropdown.noConflict = function() {
    return e.fn.dropdown = s, this
}, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
    e.stopPropagation()
}).on("click.bs.dropdown.data-api", a, r.prototype.toggle).on("keydown.bs.dropdown.data-api", a + ', [role="menu"], [role="listbox"]', r.prototype.keydown)
}(jQuery), + function(e) {
"use strict";

function t(t, i) {
    return this.each(function() {
        var o = e(this),
            a = o.data("bs.modal"),
            r = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
        a || o.data("bs.modal", a = new n(this, r)), "string" == typeof t ? a[t](i) : r.show && a.show(i)
    })
}
var n = function(t, n) {
    this.options = n, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
    }, this))
};
n.VERSION = "3.2.0", n.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
}, n.prototype.toggle = function(e) {
    return this.isShown ? this.hide() : this.show(e)
}, n.prototype.show = function(t) {
    var n = this,
        i = e.Event("show.bs.modal", {
            relatedTarget: t
        });
    this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
        var i = e.support.transition && n.$element.hasClass("fade");
        n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
        var o = e.Event("shown.bs.modal", {
            relatedTarget: t
        });
        i ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
            n.$element.trigger("focus").trigger(o)
        }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(o)
    }))
}, n.prototype.hide = function(t) {
    t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
}, n.prototype.enforceFocus = function() {
    e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
        this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
    }, this))
}, n.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
        27 == e.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
}, n.prototype.hideModal = function() {
    var e = this;
    this.$element.hide(), this.backdrop(function() {
        e.$element.trigger("hidden.bs.modal")
    })
}, n.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, n.prototype.backdrop = function(t) {
    var n = this,
        i = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
        var o = e.support.transition && i;
        if (this.$backdrop = e('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
        o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t()
    } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var a = function() {
            n.removeBackdrop(), t && t()
        };
        e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(150) : a()
    } else t && t()
}, n.prototype.checkScrollbar = function() {
    document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
}, n.prototype.setScrollbar = function() {
    var e = parseInt(this.$body.css("padding-right") || 0, 10);
    this.scrollbarWidth && this.$body.css("padding-right", e + this.scrollbarWidth)
}, n.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", "")
}, n.prototype.measureScrollbar = function() {
    var e = document.createElement("div");
    e.className = "modal-scrollbar-measure", this.$body.append(e);
    var t = e.offsetWidth - e.clientWidth;
    return this.$body[0].removeChild(e), t
};
var i = e.fn.modal;
e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
    return e.fn.modal = i, this
}, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
    var i = e(this),
        o = i.attr("href"),
        a = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
        r = a.data("bs.modal") ? "toggle" : e.extend({
            remote: !/#/.test(o) && o
        }, a.data(), i.data());
    i.is("a") && n.preventDefault(), a.one("show.bs.modal", function(e) {
        e.isDefaultPrevented() || a.one("hidden.bs.modal", function() {
            i.is(":visible") && i.trigger("focus")
        })
    }), t.call(a, r, this)
})
}(jQuery), + function(e) {
"use strict";

function t(t) {
    return this.each(function() {
        var i = e(this),
            o = i.data("bs.tooltip"),
            a = "object" == typeof t && t;
        (o || "destroy" != t) && (o || i.data("bs.tooltip", o = new n(this, a)), "string" == typeof t && o[t]())
    })
}
var n = function(e, t) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
};
n.VERSION = "3.2.0", n.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
        selector: "body",
        padding: 0
    }
}, n.prototype.init = function(t, n, i) {
    this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
    for (var o = this.options.trigger.split(" "), a = o.length; a--;) {
        var r = o[a];
        if ("click" == r) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
        else if ("manual" != r) {
            var s = "hover" == r ? "mouseenter" : "focusin",
                l = "hover" == r ? "mouseleave" : "focusout";
            this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
        }
    }
    this.options.selector ? this._options = e.extend({}, this.options, {
        trigger: "manual",
        selector: ""
    }) : this.fixTitle()
}, n.prototype.getDefaults = function() {
    return n.DEFAULTS
}, n.prototype.getOptions = function(t) {
    return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
        show: t.delay,
        hide: t.delay
    }), t
}, n.prototype.getDelegateOptions = function() {
    var t = {},
        n = this.getDefaults();
    return this._options && e.each(this._options, function(e, i) {
        n[e] != i && (t[e] = i)
    }), t
}, n.prototype.enter = function(t) {
    var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
    return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
        "in" == n.hoverState && n.show()
    }, n.options.delay.show)) : n.show()
}, n.prototype.leave = function(t) {
    var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
    return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
        "out" == n.hoverState && n.hide()
    }, n.options.delay.hide)) : n.hide()
}, n.prototype.show = function() {
    var t = e.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
        this.$element.trigger(t);
        var n = e.contains(document.documentElement, this.$element[0]);
        if (t.isDefaultPrevented() || !n) return;
        var i = this,
            o = this.tip(),
            a = this.getUID(this.type);
        this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
        var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
            s = /\s?auto?\s?/i,
            l = s.test(r);
        l && (r = r.replace(s, "") || "top"), o.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
        var c = this.getPosition(),
            d = o[0].offsetWidth,
            u = o[0].offsetHeight;
        if (l) {
            var f = r,
                p = this.$element.parent(),
                h = this.getPosition(p);
            r = "bottom" == r && c.top + c.height + u - h.scroll > h.height ? "top" : "top" == r && c.top - h.scroll - u < 0 ? "bottom" : "right" == r && c.right + d > h.width ? "left" : "left" == r && c.left - d < h.left ? "right" : r, o.removeClass(f).addClass(r)
        }
        var m = this.getCalculatedOffset(r, c, d, u);
        this.applyPlacement(m, r);
        var g = function() {
            i.$element.trigger("shown.bs." + i.type), i.hoverState = null
        };
        e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g()
    }
}, n.prototype.applyPlacement = function(t, n) {
    var i = this.tip(),
        o = i[0].offsetWidth,
        a = i[0].offsetHeight,
        r = parseInt(i.css("margin-top"), 10),
        s = parseInt(i.css("margin-left"), 10);
    isNaN(r) && (r = 0), isNaN(s) && (s = 0), t.top = t.top + r, t.left = t.left + s, e.offset.setOffset(i[0], e.extend({
        using: function(e) {
            i.css({
                top: Math.round(e.top),
                left: Math.round(e.left)
            })
        }
    }, t), 0), i.addClass("in");
    var l = i[0].offsetWidth,
        c = i[0].offsetHeight;
    "top" == n && c != a && (t.top = t.top + a - c);
    var d = this.getViewportAdjustedDelta(n, t, l, c);
    d.left ? t.left += d.left : t.top += d.top;
    var u = d.left ? 2 * d.left - o + l : 2 * d.top - a + c,
        f = d.left ? "left" : "top",
        p = d.left ? "offsetWidth" : "offsetHeight";
    i.offset(t), this.replaceArrow(u, i[0][p], f)
}, n.prototype.replaceArrow = function(e, t, n) {
    this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
}, n.prototype.setContent = function() {
    var e = this.tip(),
        t = this.getTitle();
    e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
}, n.prototype.hide = function() {
    function t() {
        "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
    }
    var n = this,
        i = this.tip(),
        o = e.Event("hide.bs." + this.type);
    return this.$element.removeAttr("aria-describedby"), this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t(), this.hoverState = null, this)
}, n.prototype.fixTitle = function() {
    var e = this.$element;
    (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
}, n.prototype.hasContent = function() {
    return this.getTitle()
}, n.prototype.getPosition = function(t) {
    t = t || this.$element;
    var n = t[0],
        i = "BODY" == n.tagName;
    return e.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
        scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop(),
        width: i ? e(window).width() : t.outerWidth(),
        height: i ? e(window).height() : t.outerHeight()
    }, i ? {
        top: 0,
        left: 0
    } : t.offset())
}, n.prototype.getCalculatedOffset = function(e, t, n, i) {
    return "bottom" == e ? {
        top: t.top + t.height,
        left: t.left + t.width / 2 - n / 2
    } : "top" == e ? {
        top: t.top - i,
        left: t.left + t.width / 2 - n / 2
    } : "left" == e ? {
        top: t.top + t.height / 2 - i / 2,
        left: t.left - n
    } : {
        top: t.top + t.height / 2 - i / 2,
        left: t.left + t.width
    }
}, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
    var o = {
        top: 0,
        left: 0
    };
    if (!this.$viewport) return o;
    var a = this.options.viewport && this.options.viewport.padding || 0,
        r = this.getPosition(this.$viewport);
    if (/right|left/.test(e)) {
        var s = t.top - a - r.scroll,
            l = t.top + a - r.scroll + i;
        s < r.top ? o.top = r.top - s : l > r.top + r.height && (o.top = r.top + r.height - l)
    } else {
        var c = t.left - a,
            d = t.left + a + n;
        c < r.left ? o.left = r.left - c : d > r.width && (o.left = r.left + r.width - d)
    }
    return o
}, n.prototype.getTitle = function() {
    var e, t = this.$element,
        n = this.options;
    return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
}, n.prototype.getUID = function(e) {
    do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
    return e
}, n.prototype.tip = function() {
    return this.$tip = this.$tip || e(this.options.template)
}, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, n.prototype.validate = function() {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
}, n.prototype.enable = function() {
    this.enabled = !0
}, n.prototype.disable = function() {
    this.enabled = !1
}, n.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
}, n.prototype.toggle = function(t) {
    var n = this;
    t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
}, n.prototype.destroy = function() {
    clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
};
var i = e.fn.tooltip;
e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
    return e.fn.tooltip = i, this
}
}(jQuery), + function(e) {
"use strict";

function t(t) {
    return this.each(function() {
        var i = e(this),
            o = i.data("bs.popover"),
            a = "object" == typeof t && t;
        (o || "destroy" != t) && (o || i.data("bs.popover", o = new n(this, a)), "string" == typeof t && o[t]())
    })
}
var n = function(e, t) {
    this.init("popover", e, t)
};
if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
n.VERSION = "3.2.0", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
    return n.DEFAULTS
}, n.prototype.setContent = function() {
    var e = this.tip(),
        t = this.getTitle(),
        n = this.getContent();
    e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
}, n.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
}, n.prototype.getContent = function() {
    var e = this.$element,
        t = this.options;
    return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
}, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
}, n.prototype.tip = function() {
    return this.$tip || (this.$tip = e(this.options.template)), this.$tip
};
var i = e.fn.popover;
e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
    return e.fn.popover = i, this
}
}(jQuery), + function(e) {
"use strict";

function t(n, i) {
    var o = e.proxy(this.process, this);
    this.$body = e("body"), this.$scrollElement = e(e(n).is("body") ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
}

function n(n) {
    return this.each(function() {
        var i = e(this),
            o = i.data("bs.scrollspy"),
            a = "object" == typeof n && n;
        o || i.data("bs.scrollspy", o = new t(this, a)), "string" == typeof n && o[n]()
    })
}
t.VERSION = "3.2.0", t.DEFAULTS = {
    offset: 10
}, t.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}, t.prototype.refresh = function() {
    var t = "offset",
        n = 0;
    e.isWindow(this.$scrollElement[0]) || (t = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
    var i = this;
    this.$body.find(this.selector).map(function() {
        var i = e(this),
            o = i.data("target") || i.attr("href"),
            a = /^#./.test(o) && e(o);
        return a && a.length && a.is(":visible") && [
            [a[t]().top + n, o]
        ] || null
    }).sort(function(e, t) {
        return e[0] - t[0]
    }).each(function() {
        i.offsets.push(this[0]), i.targets.push(this[1])
    })
}, t.prototype.process = function() {
    var e, t = this.$scrollElement.scrollTop() + this.options.offset,
        n = this.getScrollHeight(),
        i = this.options.offset + n - this.$scrollElement.height(),
        o = this.offsets,
        a = this.targets,
        r = this.activeTarget;
    if (this.scrollHeight != n && this.refresh(), t >= i) return r != (e = a[a.length - 1]) && this.activate(e);
    if (r && t <= o[0]) return r != (e = a[0]) && this.activate(e);
    for (e = o.length; e--;) r != a[e] && t >= o[e] && (!o[e + 1] || t <= o[e + 1]) && this.activate(a[e])
}, t.prototype.activate = function(t) {
    this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
        i = e(n).parents("li").addClass("active");
    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
};
var i = e.fn.scrollspy;
e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
    return e.fn.scrollspy = i, this
}, e(window).on("load.bs.scrollspy.data-api", function() {
    e('[data-spy="scroll"]').each(function() {
        var t = e(this);
        n.call(t, t.data())
    })
})
}(jQuery), + function(e) {
"use strict";

function t(t) {
    return this.each(function() {
        var i = e(this),
            o = i.data("bs.tab");
        o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
    })
}
var n = function(t) {
    this.element = e(t)
};
n.VERSION = "3.2.0", n.prototype.show = function() {
    var t = this.element,
        n = t.closest("ul:not(.dropdown-menu)"),
        i = t.data("target");
    if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
        var o = n.find(".active:last a")[0],
            a = e.Event("show.bs.tab", {
                relatedTarget: o
            });
        if (t.trigger(a), !a.isDefaultPrevented()) {
            var r = e(i);
            this.activate(t.closest("li"), n), this.activate(r, r.parent(), function() {
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: o
                })
            })
        }
    }
}, n.prototype.activate = function(t, n, i) {
    function o() {
        a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), r ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i()
    }
    var a = n.find("> .active"),
        r = i && e.support.transition && a.hasClass("fade");
    r ? a.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), a.removeClass("in")
};
var i = e.fn.tab;
e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
    return e.fn.tab = i, this
}, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
    n.preventDefault(), t.call(e(this), "show")
})
}(jQuery), + function(e) {
"use strict";

function t(t) {
    return this.each(function() {
        var i = e(this),
            o = i.data("bs.affix"),
            a = "object" == typeof t && t;
        o || i.data("bs.affix", o = new n(this, a)), "string" == typeof t && o[t]()
    })
}
var n = function(t, i) {
    this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
};
n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
    offset: 0,
    target: window
}, n.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(n.RESET).addClass("affix");
    var e = this.$target.scrollTop(),
        t = this.$element.offset();
    return this.pinnedOffset = t.top - e
}, n.prototype.checkPositionWithEventLoop = function() {
    setTimeout(e.proxy(this.checkPosition, this), 1)
}, n.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
        var t = e(document).height(),
            i = this.$target.scrollTop(),
            o = this.$element.offset(),
            a = this.options.offset,
            r = a.top,
            s = a.bottom;
        "object" != typeof a && (s = r = a), "function" == typeof r && (r = a.top(this.$element)), "function" == typeof s && (s = a.bottom(this.$element));
        var l = null != this.unpin && i + this.unpin <= o.top ? !1 : null != s && o.top + this.$element.height() >= t - s ? "bottom" : null != r && r >= i ? "top" : !1;
        if (this.affixed !== l) {
            null != this.unpin && this.$element.css("top", "");
            var c = "affix" + (l ? "-" + l : ""),
                d = e.Event(c + ".bs.affix");
            this.$element.trigger(d), d.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(c).trigger(e.Event(c.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                top: t - this.$element.height() - s
            }))
        }
    }
};
var i = e.fn.affix;
e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
    return e.fn.affix = i, this
}, e(window).on("load", function() {
    e('[data-spy="affix"]').each(function() {
        var n = e(this),
            i = n.data();
        i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
    })
})
}(jQuery), ! function(e) {
"use strict";

function t(e) {
    return (e || "").toLowerCase()
}
var n = "2.1.5";
e.fn.cycle = function(n) {
    var i;
    return 0 !== this.length || e.isReady ? this.each(function() {
        var i, o, a, r, s = e(this),
            l = e.fn.cycle.log;
        if (!s.data("cycle.opts")) {
            (s.data("cycle-log") === !1 || n && n.log === !1 || o && o.log === !1) && (l = e.noop), l("--c2 init--"), i = s.data();
            for (var c in i) i.hasOwnProperty(c) && /^cycle[A-Z]+/.test(c) && (r = i[c], a = c.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, t), l(a + ":", r, "(" + typeof r + ")"), i[a] = r);
            o = e.extend({}, e.fn.cycle.defaults, i, n || {}), o.timeoutId = 0, o.paused = o.paused || !1, o.container = s, o._maxZ = o.maxZ, o.API = e.extend({
                _container: s
            }, e.fn.cycle.API), o.API.log = l, o.API.trigger = function(e, t) {
                return o.container.trigger(e, t), o.API
            }, s.data("cycle.opts", o), s.data("cycle.API", o.API), o.API.trigger("cycle-bootstrap", [o, o.API]), o.API.addInitialSlides(), o.API.preInitSlideshow(), o.slides.length && o.API.initSlideshow()
        }
    }) : (i = {
        s: this.selector,
        c: this.context
    }, e.fn.cycle.log("requeuing slideshow (dom not ready)"), e(function() {
        e(i.s, i.c).cycle(n)
    }), this)
}, e.fn.cycle.API = {
    opts: function() {
        return this._container.data("cycle.opts")
    },
    addInitialSlides: function() {
        var t = this.opts(),
            n = t.slides;
        t.slideCount = 0, t.slides = e(), n = n.jquery ? n : t.container.find(n), t.random && n.sort(function() {
            return Math.random() - .5
        }), t.API.add(n)
    },
    preInitSlideshow: function() {
        var t = this.opts();
        t.API.trigger("cycle-pre-initialize", [t]);
        var n = e.fn.cycle.transitions[t.fx];
        n && e.isFunction(n.preInit) && n.preInit(t), t._preInitialized = !0
    },
    postInitSlideshow: function() {
        var t = this.opts();
        t.API.trigger("cycle-post-initialize", [t]);
        var n = e.fn.cycle.transitions[t.fx];
        n && e.isFunction(n.postInit) && n.postInit(t)
    },
    initSlideshow: function() {
        var t, n = this.opts(),
            i = n.container;
        n.API.calcFirstSlide(), "static" == n.container.css("position") && n.container.css("position", "relative"), e(n.slides[n.currSlide]).css({
            opacity: 1,
            display: "block",
            visibility: "visible"
        }), n.API.stackSlides(n.slides[n.currSlide], n.slides[n.nextSlide], !n.reverse), n.pauseOnHover && (n.pauseOnHover !== !0 && (i = e(n.pauseOnHover)), i.hover(function() {
            n.API.pause(!0)
        }, function() {
            n.API.resume(!0)
        })), n.timeout && (t = n.API.getSlideOpts(n.currSlide), n.API.queueTransition(t, t.timeout + n.delay)), n._initialized = !0, n.API.updateView(!0), n.API.trigger("cycle-initialized", [n]), n.API.postInitSlideshow()
    },
    pause: function(t) {
        var n = this.opts(),
            i = n.API.getSlideOpts(),
            o = n.hoverPaused || n.paused;
        t ? n.hoverPaused = !0 : n.paused = !0, o || (n.container.addClass("cycle-paused"), n.API.trigger("cycle-paused", [n]).log("cycle-paused"), i.timeout && (clearTimeout(n.timeoutId), n.timeoutId = 0, n._remainingTimeout -= e.now() - n._lastQueue, (n._remainingTimeout < 0 || isNaN(n._remainingTimeout)) && (n._remainingTimeout = void 0)))
    },
    resume: function(e) {
        var t = this.opts(),
            n = !t.hoverPaused && !t.paused;
        e ? t.hoverPaused = !1 : t.paused = !1, n || (t.container.removeClass("cycle-paused"), 0 === t.slides.filter(":animated").length && t.API.queueTransition(t.API.getSlideOpts(), t._remainingTimeout), t.API.trigger("cycle-resumed", [t, t._remainingTimeout]).log("cycle-resumed"))
    },
    add: function(t, n) {
        var i, o = this.opts(),
            a = o.slideCount,
            r = !1;
        "string" == e.type(t) && (t = e.trim(t)), e(t).each(function() {
            var t, i = e(this);
            n ? o.container.prepend(i) : o.container.append(i), o.slideCount++, t = o.API.buildSlideOpts(i), o.slides = n ? e(i).add(o.slides) : o.slides.add(i), o.API.initSlide(t, i, --o._maxZ), i.data("cycle.opts", t), o.API.trigger("cycle-slide-added", [o, t, i])
        }), o.API.updateView(!0), r = o._preInitialized && 2 > a && o.slideCount >= 1, r && (o._initialized ? o.timeout && (i = o.slides.length, o.nextSlide = o.reverse ? i - 1 : 1, o.timeoutId || o.API.queueTransition(o)) : o.API.initSlideshow())
    },
    calcFirstSlide: function() {
        var e, t = this.opts();
        e = parseInt(t.startingSlide || 0, 10), (e >= t.slides.length || 0 > e) && (e = 0), t.currSlide = e, t.reverse ? (t.nextSlide = e - 1, t.nextSlide < 0 && (t.nextSlide = t.slides.length - 1)) : (t.nextSlide = e + 1, t.nextSlide == t.slides.length && (t.nextSlide = 0))
    },
    calcNextSlide: function() {
        var e, t = this.opts();
        t.reverse ? (e = t.nextSlide - 1 < 0, t.nextSlide = e ? t.slideCount - 1 : t.nextSlide - 1, t.currSlide = e ? 0 : t.nextSlide + 1) : (e = t.nextSlide + 1 == t.slides.length, t.nextSlide = e ? 0 : t.nextSlide + 1, t.currSlide = e ? t.slides.length - 1 : t.nextSlide - 1)
    },
    calcTx: function(t, n) {
        var i, o = t;
        return o._tempFx ? i = e.fn.cycle.transitions[o._tempFx] : n && o.manualFx && (i = e.fn.cycle.transitions[o.manualFx]), i || (i = e.fn.cycle.transitions[o.fx]), o._tempFx = null, this.opts()._tempFx = null, i || (i = e.fn.cycle.transitions.fade, o.API.log('Transition "' + o.fx + '" not found.  Using fade.')), i
    },
    prepareTx: function(e, t) {
        var n, i, o, a, r, s = this.opts();
        return s.slideCount < 2 ? void(s.timeoutId = 0) : (!e || s.busy && !s.manualTrump || (s.API.stopTransition(), s.busy = !1, clearTimeout(s.timeoutId), s.timeoutId = 0), void(s.busy || (0 !== s.timeoutId || e) && (i = s.slides[s.currSlide], o = s.slides[s.nextSlide], a = s.API.getSlideOpts(s.nextSlide), r = s.API.calcTx(a, e), s._tx = r, e && void 0 !== a.manualSpeed && (a.speed = a.manualSpeed), s.nextSlide != s.currSlide && (e || !s.paused && !s.hoverPaused && s.timeout) ? (s.API.trigger("cycle-before", [a, i, o, t]), r.before && r.before(a, i, o, t), n = function() {
            s.busy = !1, s.container.data("cycle.opts") && (r.after && r.after(a, i, o, t), s.API.trigger("cycle-after", [a, i, o, t]), s.API.queueTransition(a), s.API.updateView(!0))
        }, s.busy = !0, r.transition ? r.transition(a, i, o, t, n) : s.API.doTransition(a, i, o, t, n), s.API.calcNextSlide(), s.API.updateView()) : s.API.queueTransition(a))))
    },
    doTransition: function(t, n, i, o, a) {
        var r = t,
            s = e(n),
            l = e(i),
            c = function() {
                l.animate(r.animIn || {
                    opacity: 1
                }, r.speed, r.easeIn || r.easing, a)
            };
        l.css(r.cssBefore || {}), s.animate(r.animOut || {}, r.speed, r.easeOut || r.easing, function() {
            s.css(r.cssAfter || {}), r.sync || c()
        }), r.sync && c()
    },
    queueTransition: function(t, n) {
        var i = this.opts(),
            o = void 0 !== n ? n : t.timeout;
        return 0 === i.nextSlide && 0 === --i.loop ? (i.API.log("terminating; loop=0"), i.timeout = 0, o ? setTimeout(function() {
            i.API.trigger("cycle-finished", [i])
        }, o) : i.API.trigger("cycle-finished", [i]), void(i.nextSlide = i.currSlide)) : void 0 !== i.continueAuto && (i.continueAuto === !1 || e.isFunction(i.continueAuto) && i.continueAuto() === !1) ? (i.API.log("terminating automatic transitions"), i.timeout = 0, void(i.timeoutId && clearTimeout(i.timeoutId))) : void(o && (i._lastQueue = e.now(), void 0 === n && (i._remainingTimeout = t.timeout), i.paused || i.hoverPaused || (i.timeoutId = setTimeout(function() {
            i.API.prepareTx(!1, !i.reverse)
        }, o))))
    },
    stopTransition: function() {
        var e = this.opts();
        e.slides.filter(":animated").length && (e.slides.stop(!1, !0), e.API.trigger("cycle-transition-stopped", [e])), e._tx && e._tx.stopTransition && e._tx.stopTransition(e)
    },
    advanceSlide: function(e) {
        var t = this.opts();
        return clearTimeout(t.timeoutId), t.timeoutId = 0, t.nextSlide = t.currSlide + e, t.nextSlide < 0 ? t.nextSlide = t.slides.length - 1 : t.nextSlide >= t.slides.length && (t.nextSlide = 0), t.API.prepareTx(!0, e >= 0), !1
    },
    buildSlideOpts: function(n) {
        var i, o, a = this.opts(),
            r = n.data() || {};
        for (var s in r) r.hasOwnProperty(s) && /^cycle[A-Z]+/.test(s) && (i = r[s], o = s.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, t), a.API.log("[" + (a.slideCount - 1) + "]", o + ":", i, "(" + typeof i + ")"), r[o] = i);
        r = e.extend({}, e.fn.cycle.defaults, a, r), r.slideNum = a.slideCount;
        try {
            delete r.API, delete r.slideCount, delete r.currSlide, delete r.nextSlide, delete r.slides
        } catch (l) {}
        return r
    },
    getSlideOpts: function(t) {
        var n = this.opts();
        void 0 === t && (t = n.currSlide);
        var i = n.slides[t],
            o = e(i).data("cycle.opts");
        return e.extend({}, n, o)
    },
    initSlide: function(t, n, i) {
        var o = this.opts();
        n.css(t.slideCss || {}), i > 0 && n.css("zIndex", i), isNaN(t.speed) && (t.speed = e.fx.speeds[t.speed] || e.fx.speeds._default), t.sync || (t.speed = t.speed / 2), n.addClass(o.slideClass)
    },
    updateView: function(e, t) {
        var n = this.opts();
        if (n._initialized) {
            var i = n.API.getSlideOpts(),
                o = n.slides[n.currSlide];
            !e && t !== !0 && (n.API.trigger("cycle-update-view-before", [n, i, o]), n.updateView < 0) || (n.slideActiveClass && n.slides.removeClass(n.slideActiveClass).eq(n.currSlide).addClass(n.slideActiveClass), e && n.hideNonActive && n.slides.filter(":not(." + n.slideActiveClass + ")").css("visibility", "hidden"), 0 === n.updateView && setTimeout(function() {
                n.API.trigger("cycle-update-view", [n, i, o, e])
            }, i.speed / (n.sync ? 2 : 1)), 0 !== n.updateView && n.API.trigger("cycle-update-view", [n, i, o, e]), e && n.API.trigger("cycle-update-view-after", [n, i, o]))
        }
    },
    getComponent: function(t) {
        var n = this.opts(),
            i = n[t];
        return "string" == typeof i ? /^\s*[\>|\+|~]/.test(i) ? n.container.find(i) : e(i) : i.jquery ? i : e(i)
    },
    stackSlides: function(t, n, i) {
        var o = this.opts();
        t || (t = o.slides[o.currSlide], n = o.slides[o.nextSlide], i = !o.reverse), e(t).css("zIndex", o.maxZ);
        var a, r = o.maxZ - 2,
            s = o.slideCount;
        if (i) {
            for (a = o.currSlide + 1; s > a; a++) e(o.slides[a]).css("zIndex", r--);
            for (a = 0; a < o.currSlide; a++) e(o.slides[a]).css("zIndex", r--)
        } else {
            for (a = o.currSlide - 1; a >= 0; a--) e(o.slides[a]).css("zIndex", r--);
            for (a = s - 1; a > o.currSlide; a--) e(o.slides[a]).css("zIndex", r--)
        }
        e(n).css("zIndex", o.maxZ - 1)
    },
    getSlideIndex: function(e) {
        return this.opts().slides.index(e)
    }
}, e.fn.cycle.log = function() {
    window.console && console.log && console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
}, e.fn.cycle.version = function() {
    return "Cycle2: " + n
}, e.fn.cycle.transitions = {
    custom: {},
    none: {
        before: function(e, t, n, i) {
            e.API.stackSlides(n, t, i), e.cssBefore = {
                opacity: 1,
                visibility: "visible",
                display: "block"
            }
        }
    },
    fade: {
        before: function(t, n, i, o) {
            var a = t.API.getSlideOpts(t.nextSlide).slideCss || {};
            t.API.stackSlides(n, i, o), t.cssBefore = e.extend(a, {
                opacity: 0,
                visibility: "visible",
                display: "block"
            }), t.animIn = {
                opacity: 1
            }, t.animOut = {
                opacity: 0
            }
        }
    },
    fadeout: {
        before: function(t, n, i, o) {
            var a = t.API.getSlideOpts(t.nextSlide).slideCss || {};
            t.API.stackSlides(n, i, o), t.cssBefore = e.extend(a, {
                opacity: 1,
                visibility: "visible",
                display: "block"
            }), t.animOut = {
                opacity: 0
            }
        }
    },
    scrollHorz: {
        before: function(e, t, n, i) {
            e.API.stackSlides(t, n, i);
            var o = e.container.css("overflow", "hidden").width();
            e.cssBefore = {
                left: i ? o : -o,
                top: 0,
                opacity: 1,
                visibility: "visible",
                display: "block"
            }, e.cssAfter = {
                zIndex: e._maxZ - 2,
                left: 0
            }, e.animIn = {
                left: 0
            }, e.animOut = {
                left: i ? -o : o
            }
        }
    }
}, e.fn.cycle.defaults = {
    allowWrap: !0,
    autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
    delay: 0,
    easing: null,
    fx: "fade",
    hideNonActive: !0,
    loop: 0,
    manualFx: void 0,
    manualSpeed: void 0,
    manualTrump: !0,
    maxZ: 100,
    pauseOnHover: !1,
    reverse: !1,
    slideActiveClass: "cycle-slide-active",
    slideClass: "cycle-slide",
    slideCss: {
        position: "absolute",
        top: 0,
        left: 0
    },
    slides: "> img",
    speed: 500,
    startingSlide: 0,
    sync: !0,
    timeout: 4e3,
    updateView: 0
}, e(document).ready(function() {
    e(e.fn.cycle.defaults.autoSelector).cycle()
})
}(jQuery),
function(e) {
"use strict";

function t(t, i) {
    var o, a, r, s = i.autoHeight;
    if ("container" == s) a = e(i.slides[i.currSlide]).outerHeight(), i.container.height(a);
    else if (i._autoHeightRatio) i.container.height(i.container.width() / i._autoHeightRatio);
    else if ("calc" === s || "number" == e.type(s) && s >= 0) {
        if (r = "calc" === s ? n(t, i) : s >= i.slides.length ? 0 : s, r == i._sentinelIndex) return;
        i._sentinelIndex = r, i._sentinel && i._sentinel.remove(), o = e(i.slides[r].cloneNode(!0)), o.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), o.css({
            position: "static",
            visibility: "hidden",
            display: "block"
        }).prependTo(i.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), o.find("*").css("visibility", "hidden"), i._sentinel = o
    }
}

function n(t, n) {
    var i = 0,
        o = -1;
    return n.slides.each(function(t) {
        var n = e(this).height();
        n > o && (o = n, i = t)
    }), i
}

function i(t, n, i, o) {
    var a = e(o).outerHeight();
    n.container.animate({
        height: a
    }, n.autoHeightSpeed, n.autoHeightEasing)
}

function o(n, a) {
    a._autoHeightOnResize && (e(window).off("resize orientationchange", a._autoHeightOnResize), a._autoHeightOnResize = null), a.container.off("cycle-slide-added cycle-slide-removed", t), a.container.off("cycle-destroyed", o), a.container.off("cycle-before", i), a._sentinel && (a._sentinel.remove(), a._sentinel = null)
}
e.extend(e.fn.cycle.defaults, {
    autoHeight: 0,
    autoHeightSpeed: 250,
    autoHeightEasing: null
}), e(document).on("cycle-initialized", function(n, a) {
    function r() {
        t(n, a)
    }
    var s, l = a.autoHeight,
        c = e.type(l),
        d = null;
    ("string" === c || "number" === c) && (a.container.on("cycle-slide-added cycle-slide-removed", t), a.container.on("cycle-destroyed", o), "container" == l ? a.container.on("cycle-before", i) : "string" === c && /\d+\:\d+/.test(l) && (s = l.match(/(\d+)\:(\d+)/), s = s[1] / s[2], a._autoHeightRatio = s), "number" !== c && (a._autoHeightOnResize = function() {
        clearTimeout(d), d = setTimeout(r, 50)
    }, e(window).on("resize orientationchange", a._autoHeightOnResize)), setTimeout(r, 30))
})
}(jQuery),
function(e) {
"use strict";
e.extend(e.fn.cycle.defaults, {
    caption: "> .cycle-caption",
    captionTemplate: "{{slideNum}} / {{slideCount}}",
    overlay: "> .cycle-overlay",
    overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
    captionModule: "caption"
}), e(document).on("cycle-update-view", function(t, n, i, o) {
    "caption" === n.captionModule && e.each(["caption", "overlay"], function() {
        var e = this,
            t = i[e + "Template"],
            a = n.API.getComponent(e);
        a.length && t ? (a.html(n.API.tmpl(t, i, n, o)), a.show()) : a.hide()
    })
}), e(document).on("cycle-destroyed", function(t, n) {
    var i;
    e.each(["caption", "overlay"], function() {
        var e = this,
            t = n[e + "Template"];
        n[e] && t && (i = n.API.getComponent("caption"), i.empty())
    })
})
}(jQuery),
function(e) {
"use strict";
var t = e.fn.cycle;
e.fn.cycle = function(n) {
    var i, o, a, r = e.makeArray(arguments);
    return "number" == e.type(n) ? this.cycle("goto", n) : "string" == e.type(n) ? this.each(function() {
        var s;
        return i = n, a = e(this).data("cycle.opts"), void 0 === a ? void t.log('slideshow must be initialized before sending commands; "' + i + '" ignored') : (i = "goto" == i ? "jump" : i, o = a.API[i], e.isFunction(o) ? (s = e.makeArray(r), s.shift(), o.apply(a.API, s)) : void t.log("unknown command: ", i))
    }) : t.apply(this, arguments)
}, e.extend(e.fn.cycle, t), e.extend(t.API, {
    next: function() {
        var e = this.opts();
        if (!e.busy || e.manualTrump) {
            var t = e.reverse ? -1 : 1;
            e.allowWrap === !1 && e.currSlide + t >= e.slideCount || (e.API.advanceSlide(t), e.API.trigger("cycle-next", [e]).log("cycle-next"))
        }
    },
    prev: function() {
        var e = this.opts();
        if (!e.busy || e.manualTrump) {
            var t = e.reverse ? 1 : -1;
            e.allowWrap === !1 && e.currSlide + t < 0 || (e.API.advanceSlide(t), e.API.trigger("cycle-prev", [e]).log("cycle-prev"))
        }
    },
    destroy: function() {
        this.stop();
        var t = this.opts(),
            n = e.isFunction(e._data) ? e._data : e.noop;
        clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stop(), t.API.trigger("cycle-destroyed", [t]).log("cycle-destroyed"), t.container.removeData(), n(t.container[0], "parsedAttrs", !1), t.retainStylesOnDestroy || (t.container.removeAttr("style"), t.slides.removeAttr("style"), t.slides.removeClass(t.slideActiveClass)), t.slides.each(function() {
            e(this).removeData(), n(this, "parsedAttrs", !1)
        })
    },
    jump: function(e, t) {
        var n, i = this.opts();
        if (!i.busy || i.manualTrump) {
            var o = parseInt(e, 10);
            if (isNaN(o) || 0 > o || o >= i.slides.length) return void i.API.log("goto: invalid slide index: " + o);
            if (o == i.currSlide) return void i.API.log("goto: skipping, already on slide", o);
            i.nextSlide = o, clearTimeout(i.timeoutId), i.timeoutId = 0, i.API.log("goto: ", o, " (zero-index)"), n = i.currSlide < i.nextSlide, i._tempFx = t, i.API.prepareTx(!0, n)
        }
    },
    stop: function() {
        var t = this.opts(),
            n = t.container;
        clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stopTransition(), t.pauseOnHover && (t.pauseOnHover !== !0 && (n = e(t.pauseOnHover)), n.off("mouseenter mouseleave")), t.API.trigger("cycle-stopped", [t]).log("cycle-stopped")
    },
    reinit: function() {
        var e = this.opts();
        e.API.destroy(), e.container.cycle()
    },
    remove: function(t) {
        for (var n, i, o = this.opts(), a = [], r = 1, s = 0; s < o.slides.length; s++) n = o.slides[s], s == t ? i = n : (a.push(n), e(n).data("cycle.opts").slideNum = r, r++);
        i && (o.slides = e(a), o.slideCount--, e(i).remove(), t == o.currSlide ? o.API.advanceSlide(1) : t < o.currSlide ? o.currSlide-- : o.currSlide++, o.API.trigger("cycle-slide-removed", [o, t, i]).log("cycle-slide-removed"), o.API.updateView())
    }
}), e(document).on("click.cycle", "[data-cycle-cmd]", function(t) {
    t.preventDefault();
    var n = e(this),
        i = n.data("cycle-cmd"),
        o = n.data("cycle-context") || ".cycle-slideshow";
    e(o).cycle(i, n.data("cycle-arg"))
})
}(jQuery),
function(e) {
"use strict";

function t(t, n) {
    var i;
    return t._hashFence ? void(t._hashFence = !1) : (i = window.location.hash.substring(1), void t.slides.each(function(o) {
        if (e(this).data("cycle-hash") == i) {
            if (n === !0) t.startingSlide = o;
            else {
                var a = t.currSlide < o;
                t.nextSlide = o, t.API.prepareTx(!0, a)
            }
            return !1
        }
    }))
}
e(document).on("cycle-pre-initialize", function(n, i) {
    t(i, !0), i._onHashChange = function() {
        t(i, !1)
    }, e(window).on("hashchange", i._onHashChange)
}), e(document).on("cycle-update-view", function(e, t, n) {
    n.hash && "#" + n.hash != window.location.hash && (t._hashFence = !0, window.location.hash = n.hash)
}), e(document).on("cycle-destroyed", function(t, n) {
    n._onHashChange && e(window).off("hashchange", n._onHashChange)
})
}(jQuery),
function(e) {
"use strict";
e.extend(e.fn.cycle.defaults, {
    loader: !1
}), e(document).on("cycle-bootstrap", function(t, n) {
    function i(t, i) {
        function a(t) {
            var a;
            "wait" == n.loader ? (s.push(t), 0 === c && (s.sort(r), o.apply(n.API, [s, i]), n.container.removeClass("cycle-loading"))) : (a = e(n.slides[n.currSlide]), o.apply(n.API, [t, i]), a.show(), n.container.removeClass("cycle-loading"))
        }

        function r(e, t) {
            return e.data("index") - t.data("index")
        }
        var s = [];
        if ("string" == e.type(t)) t = e.trim(t);
        else if ("array" === e.type(t))
            for (var l = 0; l < t.length; l++) t[l] = e(t[l])[0];
        t = e(t);
        var c = t.length;
        c && (t.css("visibility", "hidden").appendTo("body").each(function(t) {
            function r() {
                0 === --l && (--c, a(d))
            }
            var l = 0,
                d = e(this),
                u = d.is("img") ? d : d.find("img");
            return d.data("index", t), u = u.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'), u.length ? (l = u.length, void u.each(function() {
                this.complete ? r() : e(this).load(function() {
                    r()
                }).on("error", function() {
                    0 === --l && (n.API.log("slide skipped; img not loaded:", this.src), 0 === --c && "wait" == n.loader && o.apply(n.API, [s, i]))
                })
            })) : (--c, void s.push(d))
        }), c && n.container.addClass("cycle-loading"))
    }
    var o;
    n.loader && (o = n.API.add, n.API.add = i)
})
}(jQuery),
function(e) {
"use strict";

function t(t, n, i) {
    var o, a = t.API.getComponent("pager");
    a.each(function() {
        var a = e(this);
        if (n.pagerTemplate) {
            var r = t.API.tmpl(n.pagerTemplate, n, t, i[0]);
            o = e(r).appendTo(a)
        } else o = a.children().eq(t.slideCount - 1);
        o.on(t.pagerEvent, function(e) {
            t.pagerEventBubble || e.preventDefault(), t.API.page(a, e.currentTarget)
        })
    })
}

function n(e, t) {
    var n = this.opts();
    if (!n.busy || n.manualTrump) {
        var i = e.children().index(t),
            o = i,
            a = n.currSlide < o;
        n.currSlide != o && (n.nextSlide = o, n._tempFx = n.pagerFx, n.API.prepareTx(!0, a), n.API.trigger("cycle-pager-activated", [n, e, t]))
    }
}
e.extend(e.fn.cycle.defaults, {
    pager: "> .cycle-pager",
    pagerActiveClass: "cycle-pager-active",
    pagerEvent: "click.cycle",
    pagerEventBubble: void 0,
    pagerTemplate: "<span>&bull;</span>"
}), e(document).on("cycle-bootstrap", function(e, n, i) {
    i.buildPagerLink = t
}), e(document).on("cycle-slide-added", function(e, t, i, o) {
    t.pager && (t.API.buildPagerLink(t, i, o), t.API.page = n)
}), e(document).on("cycle-slide-removed", function(t, n, i) {
    if (n.pager) {
        var o = n.API.getComponent("pager");
        o.each(function() {
            var t = e(this);
            e(t.children()[i]).remove()
        })
    }
}), e(document).on("cycle-update-view", function(t, n) {
    var i;
    n.pager && (i = n.API.getComponent("pager"), i.each(function() {
        e(this).children().removeClass(n.pagerActiveClass).eq(n.currSlide).addClass(n.pagerActiveClass)
    }))
}), e(document).on("cycle-destroyed", function(e, t) {
    var n = t.API.getComponent("pager");
    n && (n.children().off(t.pagerEvent), t.pagerTemplate && n.empty())
})
}(jQuery),
function(e) {
"use strict";
e.extend(e.fn.cycle.defaults, {
    next: "> .cycle-next",
    nextEvent: "click.cycle",
    disabledClass: "disabled",
    prev: "> .cycle-prev",
    prevEvent: "click.cycle",
    swipe: !1
}), e(document).on("cycle-initialized", function(e, t) {
    if (t.API.getComponent("next").on(t.nextEvent, function(e) {
            e.preventDefault(), t.API.next()
        }), t.API.getComponent("prev").on(t.prevEvent, function(e) {
            e.preventDefault(), t.API.prev()
        }), t.swipe) {
        var n = t.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle",
            i = t.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
        t.container.on(n, function() {
            t._tempFx = t.swipeFx, t.API.next()
        }), t.container.on(i, function() {
            t._tempFx = t.swipeFx, t.API.prev()
        })
    }
}), e(document).on("cycle-update-view", function(e, t) {
    if (!t.allowWrap) {
        var n = t.disabledClass,
            i = t.API.getComponent("next"),
            o = t.API.getComponent("prev"),
            a = t._prevBoundry || 0,
            r = void 0 !== t._nextBoundry ? t._nextBoundry : t.slideCount - 1;
        t.currSlide == r ? i.addClass(n).prop("disabled", !0) : i.removeClass(n).prop("disabled", !1), t.currSlide === a ? o.addClass(n).prop("disabled", !0) : o.removeClass(n).prop("disabled", !1)
    }
}), e(document).on("cycle-destroyed", function(e, t) {
    t.API.getComponent("prev").off(t.nextEvent), t.API.getComponent("next").off(t.prevEvent), t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
})
}(jQuery),
function(e) {
"use strict";
e.extend(e.fn.cycle.defaults, {
    progressive: !1
}), e(document).on("cycle-pre-initialize", function(t, n) {
    if (n.progressive) {
        var i, o, a = n.API,
            r = a.next,
            s = a.prev,
            l = a.prepareTx,
            c = e.type(n.progressive);
        if ("array" == c) i = n.progressive;
        else if (e.isFunction(n.progressive)) i = n.progressive(n);
        else if ("string" == c) {
            if (o = e(n.progressive), i = e.trim(o.html()), !i) return;
            if (/^(\[)/.test(i)) try {
                i = e.parseJSON(i)
            } catch (d) {
                return void a.log("error parsing progressive slides", d)
            } else i = i.split(new RegExp(o.data("cycle-split") || "\n")), i[i.length - 1] || i.pop()
        }
        l && (a.prepareTx = function(e, t) {
            var o, a;
            return e || 0 === i.length ? void l.apply(n.API, [e, t]) : void(t && n.currSlide == n.slideCount - 1 ? (a = i[0], i = i.slice(1), n.container.one("cycle-slide-added", function(e, t) {
                setTimeout(function() {
                    t.API.advanceSlide(1)
                }, 50)
            }), n.API.add(a)) : t || 0 !== n.currSlide ? l.apply(n.API, [e, t]) : (o = i.length - 1, a = i[o], i = i.slice(0, o), n.container.one("cycle-slide-added", function(e, t) {
                setTimeout(function() {
                    t.currSlide = 1, t.API.advanceSlide(-1)
                }, 50)
            }), n.API.add(a, !0)))
        }), r && (a.next = function() {
            var e = this.opts();
            if (i.length && e.currSlide == e.slideCount - 1) {
                var t = i[0];
                i = i.slice(1), e.container.one("cycle-slide-added", function(e, t) {
                    r.apply(t.API), t.container.removeClass("cycle-loading")
                }), e.container.addClass("cycle-loading"), e.API.add(t)
            } else r.apply(e.API)
        }), s && (a.prev = function() {
            var e = this.opts();
            if (i.length && 0 === e.currSlide) {
                var t = i.length - 1,
                    n = i[t];
                i = i.slice(0, t), e.container.one("cycle-slide-added", function(e, t) {
                    t.currSlide = 1, t.API.advanceSlide(-1), t.container.removeClass("cycle-loading")
                }), e.container.addClass("cycle-loading"), e.API.add(n, !0)
            } else s.apply(e.API)
        })
    }
})
}(jQuery),
function(e) {
"use strict";
e.extend(e.fn.cycle.defaults, {
    tmplRegex: "{{((.)?.*?)}}"
}), e.extend(e.fn.cycle.API, {
    tmpl: function(t, n) {
        var i = new RegExp(n.tmplRegex || e.fn.cycle.defaults.tmplRegex, "g"),
            o = e.makeArray(arguments);
        return o.shift(), t.replace(i, function(t, n) {
            var i, a, r, s, l = n.split(".");
            for (i = 0; i < o.length; i++)
                if (r = o[i]) {
                    if (l.length > 1)
                        for (s = r, a = 0; a < l.length; a++) r = s, s = s[l[a]] || n;
                    else s = r[n];
                    if (e.isFunction(s)) return s.apply(r, o);
                    if (void 0 !== s && null !== s && s != n) return s
                }
            return n
        })
    }
})
}(jQuery),
function(e) {
"use strict";
e.extend(e.fn.cycle.defaults, {
    centerHorz: !1,
    centerVert: !1
}), e(document).on("cycle-pre-initialize", function(t, n) {
    function i() {
        clearTimeout(l), l = setTimeout(r, 50)
    }

    function o() {
        clearTimeout(l), clearTimeout(c), e(window).off("resize orientationchange", i)
    }

    function a() {
        n.slides.each(s)
    }

    function r() {
        s.apply(n.container.find("." + n.slideActiveClass)), clearTimeout(c), c = setTimeout(a, 50)
    }

    function s() {
        var t = e(this),
            i = n.container.width(),
            o = n.container.height(),
            a = t.outerWidth(),
            r = t.outerHeight();
        a && (n.centerHorz && i >= a && t.css("marginLeft", (i - a) / 2), n.centerVert && o >= r && t.css("marginTop", (o - r) / 2))
    }
    if (n.centerHorz || n.centerVert) {
        var l, c;
        e(window).on("resize orientationchange load", i), n.container.on("cycle-destroyed", o), n.container.on("cycle-initialized cycle-slide-added cycle-slide-removed", function() {
            i()
        }), r()
    }
})
}(jQuery),
function(e) {
"use strict";
e.event.special.swipe = e.event.special.swipe || {
    scrollSupressionThreshold: 10,
    durationThreshold: 1e3,
    horizontalDistanceThreshold: 30,
    verticalDistanceThreshold: 75,
    setup: function() {
        var t = e(this);
        t.bind("touchstart", function(n) {
            function i(t) {
                if (r) {
                    var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
                    o = {
                        time: (new Date).getTime(),
                        coords: [n.pageX, n.pageY]
                    }, Math.abs(r.coords[0] - o.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault()
                }
            }
            var o, a = n.originalEvent.touches ? n.originalEvent.touches[0] : n,
                r = {
                    time: (new Date).getTime(),
                    coords: [a.pageX, a.pageY],
                    origin: e(n.target)
                };
            t.bind("touchmove", i).one("touchend", function() {
                t.unbind("touchmove", i), r && o && o.time - r.time < e.event.special.swipe.durationThreshold && Math.abs(r.coords[0] - o.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(r.coords[1] - o.coords[1]) < e.event.special.swipe.verticalDistanceThreshold && r.origin.trigger("swipe").trigger(r.coords[0] > o.coords[0] ? "swipeleft" : "swiperight"), r = o = void 0
            })
        })
    }
}, e.event.special.swipeleft = e.event.special.swipeleft || {
    setup: function() {
        e(this).bind("swipe", e.noop)
    }
}, e.event.special.swiperight = e.event.special.swiperight || e.event.special.swipeleft
}(jQuery);
var jstz = {};
jstz.HEMISPHERE_SOUTH = "SOUTH", jstz.HEMISPHERE_NORTH = "NORTH", jstz.HEMISPHERE_UNKNOWN = "N/A", jstz.olson = {}, jstz.TimeZone = function(e, t, n) {
    this.utc_offset = e, this.olson_tz = t, this.uses_dst = n
}, jstz.TimeZone.prototype.display = function() {
    this.ambiguity_check();
    var e = "<b>UTC-offset</b>: " + this.utc_offset + "<br/>";
    return e += "<b>Zoneinfo key</b>: " + this.olson_tz + "<br/>", e += "<b>Zone uses DST</b>: " + (this.uses_dst ? "yes" : "no") + "<br/>"
}, jstz.TimeZone.prototype.ambiguity_check = function() {
    var e, t, n, i;
    if (e = jstz.olson.ambiguity_list[this.olson_tz], "undefined" != typeof e)
        for (t = e.length, n = 0; t > n; n += 1)
            if (i = e[n], jstz.date_is_dst(jstz.olson.dst_start_dates[i])) return void(this.olson_tz = i)
}, jstz.date_is_dst = function(e) {
    var t, n;
    return n = e.getMonth() > 5 ? jstz.get_june_offset() : jstz.get_january_offset(), t = jstz.get_date_offset(e), n - t !== 0
}, jstz.get_date_offset = function(e) {
    return -e.getTimezoneOffset()
}, jstz.get_timezone_info = function() {
    var e, t, n;
    return e = jstz.get_january_offset(), t = jstz.get_june_offset(), n = e - t, 0 > n ? {
        utc_offset: e,
        dst: 1,
        hemisphere: jstz.HEMISPHERE_NORTH
    } : n > 0 ? {
        utc_offset: t,
        dst: 1,
        hemisphere: jstz.HEMISPHERE_SOUTH
    } : {
        utc_offset: e,
        dst: 0,
        hemisphere: jstz.HEMISPHERE_UNKNOWN
    }
}, jstz.get_january_offset = function() {
    return jstz.get_date_offset(new Date(2011, 0, 1, 0, 0, 0, 0))
}, jstz.get_june_offset = function() {
    return jstz.get_date_offset(new Date(2011, 5, 1, 0, 0, 0, 0))
}, jstz.determine_timezone = function() {
    var e, t, n;
    return e = jstz.get_timezone_info(), t = "", e.hemisphere === jstz.HEMISPHERE_SOUTH && (t = ",s"), n = e.utc_offset + "," + e.dst + t, {
        timezone: jstz.olson.timezones[n],
        key: n
    }
}, jstz.olson.timezones = {
    "-720,0": new jstz.TimeZone("-12:00", "Etc/GMT+12", !1),
    "-660,0": new jstz.TimeZone("-11:00", "Pacific/Pago_Pago", !1),
    "-600,1": new jstz.TimeZone("-11:00", "America/Adak", !0),
    "-660,1,s": new jstz.TimeZone("-11:00", "Pacific/Apia", !0),
    "-600,0": new jstz.TimeZone("-10:00", "Pacific/Honolulu", !1),
    "-570,0": new jstz.TimeZone("-10:30", "Pacific/Marquesas", !1),
    "-540,0": new jstz.TimeZone("-09:00", "Pacific/Gambier", !1),
    "-540,1": new jstz.TimeZone("-09:00", "America/Anchorage", !0),
    "-480,1": new jstz.TimeZone("-08:00", "America/Los_Angeles", !0),
    "-480,0": new jstz.TimeZone("-08:00", "Pacific/Pitcairn", !1),
    "-420,0": new jstz.TimeZone("-07:00", "America/Phoenix", !1),
    "-420,1": new jstz.TimeZone("-07:00", "America/Denver", !0),
    "-360,0": new jstz.TimeZone("-06:00", "America/Guatemala", !1),
    "-360,1": new jstz.TimeZone("-06:00", "America/Chicago", !0),
    "-360,1,s": new jstz.TimeZone("-06:00", "Pacific/Easter", !0),
    "-300,0": new jstz.TimeZone("-05:00", "America/Bogota", !1),
    "-300,1": new jstz.TimeZone("-05:00", "America/New_York", !0),
    "-270,0": new jstz.TimeZone("-04:30", "America/Caracas", !1),
    "-240,1": new jstz.TimeZone("-04:00", "America/Halifax", !0),
    "-240,0": new jstz.TimeZone("-04:00", "America/Santo_Domingo", !1),
    "-240,1,s": new jstz.TimeZone("-04:00", "America/Asuncion", !0),
    "-210,1": new jstz.TimeZone("-03:30", "America/St_Johns", !0),
    "-180,1": new jstz.TimeZone("-03:00", "America/Godthab", !0),
    "-180,0": new jstz.TimeZone("-03:00", "America/Argentina/Buenos_Aires", !1),
    "-180,1,s": new jstz.TimeZone("-03:00", "America/Montevideo", !0),
    "-120,0": new jstz.TimeZone("-02:00", "America/Noronha", !1),
    "-120,1": new jstz.TimeZone("-02:00", "Etc/GMT+2", !0),
    "-60,1": new jstz.TimeZone("-01:00", "Atlantic/Azores", !0),
    "-60,0": new jstz.TimeZone("-01:00", "Atlantic/Cape_Verde", !1),
    "0,0": new jstz.TimeZone("00:00", "Etc/UTC", !1),
    "0,1": new jstz.TimeZone("00:00", "Europe/London", !0),
    "60,1": new jstz.TimeZone("+01:00", "Europe/Berlin", !0),
    "60,0": new jstz.TimeZone("+01:00", "Africa/Lagos", !1),
    "60,1,s": new jstz.TimeZone("+01:00", "Africa/Windhoek", !0),
    "120,1": new jstz.TimeZone("+02:00", "Asia/Beirut", !0),
    "120,0": new jstz.TimeZone("+02:00", "Africa/Johannesburg", !1),
    "180,1": new jstz.TimeZone("+03:00", "Europe/Moscow", !0),
    "180,0": new jstz.TimeZone("+03:00", "Asia/Baghdad", !1),
    "210,1": new jstz.TimeZone("+03:30", "Asia/Tehran", !0),
    "240,0": new jstz.TimeZone("+04:00", "Asia/Dubai", !1),
    "240,1": new jstz.TimeZone("+04:00", "Asia/Yerevan", !0),
    "270,0": new jstz.TimeZone("+04:30", "Asia/Kabul", !1),
    "300,1": new jstz.TimeZone("+05:00", "Asia/Yekaterinburg", !0),
    "300,0": new jstz.TimeZone("+05:00", "Asia/Karachi", !1),
    "330,0": new jstz.TimeZone("+05:30", "Asia/Kolkata", !1),
    "345,0": new jstz.TimeZone("+05:45", "Asia/Kathmandu", !1),
    "360,0": new jstz.TimeZone("+06:00", "Asia/Dhaka", !1),
    "360,1": new jstz.TimeZone("+06:00", "Asia/Omsk", !0),
    "390,0": new jstz.TimeZone("+06:30", "Asia/Rangoon", !1),
    "420,1": new jstz.TimeZone("+07:00", "Asia/Krasnoyarsk", !0),
    "420,0": new jstz.TimeZone("+07:00", "Asia/Jakarta", !1),
    "480,0": new jstz.TimeZone("+08:00", "Asia/Shanghai", !1),
    "480,1": new jstz.TimeZone("+08:00", "Asia/Irkutsk", !0),
    "525,0": new jstz.TimeZone("+08:45", "Australia/Eucla", !0),
    "525,1,s": new jstz.TimeZone("+08:45", "Australia/Eucla", !0),
    "540,1": new jstz.TimeZone("+09:00", "Asia/Yakutsk", !0),
    "540,0": new jstz.TimeZone("+09:00", "Asia/Tokyo", !1),
    "570,0": new jstz.TimeZone("+09:30", "Australia/Darwin", !1),
    "570,1,s": new jstz.TimeZone("+09:30", "Australia/Adelaide", !0),
    "600,0": new jstz.TimeZone("+10:00", "Australia/Brisbane", !1),
    "600,1": new jstz.TimeZone("+10:00", "Asia/Vladivostok", !0),
    "600,1,s": new jstz.TimeZone("+10:00", "Australia/Sydney", !0),
    "630,1,s": new jstz.TimeZone("+10:30", "Australia/Lord_Howe", !0),
    "660,1": new jstz.TimeZone("+11:00", "Asia/Kamchatka", !0),
    "660,0": new jstz.TimeZone("+11:00", "Pacific/Noumea", !1),
    "690,0": new jstz.TimeZone("+11:30", "Pacific/Norfolk", !1),
    "720,1,s": new jstz.TimeZone("+12:00", "Pacific/Auckland", !0),
    "720,0": new jstz.TimeZone("+12:00", "Pacific/Tarawa", !1),
    "765,1,s": new jstz.TimeZone("+12:45", "Pacific/Chatham", !0),
    "780,0": new jstz.TimeZone("+13:00", "Pacific/Tongatapu", !1),
    "840,0": new jstz.TimeZone("+14:00", "Pacific/Kiritimati", !1)
}, jstz.olson.dst_start_dates = {
    "America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0),
    "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0),
    "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0),
    "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0),
    "Atlantic/Stanley": new Date(2011, 8, 4, 7, 0, 0, 0),
    "America/Asuncion": new Date(2011, 9, 2, 3, 0, 0, 0),
    "America/Santiago": new Date(2011, 9, 9, 3, 0, 0, 0),
    "America/Campo_Grande": new Date(2011, 9, 16, 5, 0, 0, 0),
    "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0),
    "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0),
    "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0),
    "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0),
    "America/Havana": new Date(2011, 2, 13, 2, 0, 0, 0),
    "America/New_York": new Date(2011, 2, 13, 7, 0, 0, 0),
    "Asia/Gaza": new Date(2011, 2, 26, 23, 0, 0, 0),
    "Asia/Beirut": new Date(2011, 2, 27, 1, 0, 0, 0),
    "Europe/Minsk": new Date(2011, 2, 27, 3, 0, 0, 0),
    "Europe/Istanbul": new Date(2011, 2, 27, 7, 0, 0, 0),
    "Asia/Damascus": new Date(2011, 3, 1, 2, 0, 0, 0),
    "Asia/Jerusalem": new Date(2011, 3, 1, 6, 0, 0, 0),
    "Africa/Cairo": new Date(2011, 3, 29, 4, 0, 0, 0),
    "Asia/Yerevan": new Date(2011, 2, 27, 4, 0, 0, 0),
    "Asia/Baku": new Date(2011, 2, 27, 8, 0, 0, 0),
    "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0),
    "Pacific/Fiji": new Date(2010, 11, 29, 23, 0, 0, 0),
    "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0),
    "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0),
    "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0),
    "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0)
}, jstz.olson.ambiguity_list = {
    "America/Denver": ["America/Denver", "America/Mazatlan"],
    "America/Chicago": ["America/Chicago", "America/Mexico_City"],
    "America/Asuncion": ["Atlantic/Stanley", "America/Asuncion", "America/Santiago", "America/Campo_Grande"],
    "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
    "Asia/Beirut": ["Asia/Gaza", "Asia/Beirut", "Europe/Minsk", "Europe/Istanbul", "Asia/Damascus", "Asia/Jerusalem", "Africa/Cairo"],
    "Asia/Yerevan": ["Asia/Yerevan", "Asia/Baku"],
    "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
    "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"],
    "America/New_York": ["America/Havana", "America/New_York"],
    "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
    "America/Godthab": ["America/Miquelon", "America/Godthab"]
},
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("notify", [], function() {
        return t(e, document)
    }) : "object" == typeof exports ? module.exports = t(e, document) : e.Notify = t(e, document)
}(window, function(e) {
    "use strict";

    function t(e, n) {
        if ("string" != typeof e) throw new Error("Notify(): first arg (title) must be a string.");
        if (this.title = e, this.options = {
                icon: "",
                body: "",
                tag: "",
                notifyShow: null,
                notifyClose: null,
                notifyClick: null,
                notifyError: null,
                permissionGranted: null,
                permissionDenied: null,
                timeout: null
            }, this.permission = null, t.isSupported() && "object" == typeof n) {
            for (var i in n) n.hasOwnProperty(i) && (this.options[i] = n[i]);
            "function" == typeof this.options.notifyShow && (this.onShowCallback = this.options.notifyShow), "function" == typeof this.options.notifyClose && (this.onCloseCallback = this.options.notifyClose), "function" == typeof this.options.notifyClick && (this.onClickCallback = this.options.notifyClick), "function" == typeof this.options.notifyError && (this.onErrorCallback = this.options.notifyError)
        }
    }
    return t.isSupported = function() {
        return "Notification" in e ? !0 : !1
    }, t.needsPermission = function() {
        return t.isSupported() && "granted" === Notification.permission ? !1 : !0
    }, t.requestPermission = function(n, i) {
        t.isSupported() && e.Notification.requestPermission(function(e) {
            switch (e) {
                case "granted":
                    "function" == typeof n && n();
                    break;
                case "denied":
                    "function" == typeof i && i()
            }
        })
    }, t.prototype.show = function() {
        t.isSupported() && (this.myNotify = new Notification(this.title, {
            body: this.options.body,
            tag: this.options.tag,
            icon: this.options.icon
        }), this.options.timeout && !isNaN(this.options.timeout) && setTimeout(this.close.bind(this), 1e3 * this.options.timeout), this.myNotify.addEventListener("show", this, !1), this.myNotify.addEventListener("error", this, !1), this.myNotify.addEventListener("close", this, !1), this.myNotify.addEventListener("click", this, !1))
    }, t.prototype.onShowNotification = function(e) {
        this.onShowCallback && this.onShowCallback(e)
    }, t.prototype.onCloseNotification = function(e) {
        this.onCloseCallback && this.onCloseCallback(e), this.destroy()
    }, t.prototype.onClickNotification = function(e) {
        this.onClickCallback && this.onClickCallback(e)
    }, t.prototype.onErrorNotification = function(e) {
        this.onErrorCallback && this.onErrorCallback(e), this.destroy()
    }, t.prototype.destroy = function() {
        this.myNotify.removeEventListener("show", this, !1), this.myNotify.removeEventListener("error", this, !1), this.myNotify.removeEventListener("close", this, !1), this.myNotify.removeEventListener("click", this, !1)
    }, t.prototype.close = function() {
        this.myNotify.close()
    }, t.prototype.handleEvent = function(e) {
        switch (e.type) {
            case "show":
                this.onShowNotification(e);
                break;
            case "close":
                this.onCloseNotification(e);
                break;
            case "click":
                this.onClickNotification(e);
                break;
            case "error":
                this.onErrorNotification(e)
        }
    }, t
}),
function(e) {
    function t() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function n(e, t) {
        return function(n) {
            return d(e.call(this, n), t)
        }
    }

    function i(e, t) {
        return function(n) {
            return this.lang().ordinal(e.call(this, n), t)
        }
    }

    function o() {}

    function a(e) {
        k(e), s(this, e)
    }

    function r(e) {
        var t = g(e),
            n = t.year || 0,
            i = t.month || 0,
            o = t.week || 0,
            a = t.day || 0,
            r = t.hour || 0,
            s = t.minute || 0,
            l = t.second || 0,
            c = t.millisecond || 0;
        this._milliseconds = +c + 1e3 * l + 6e4 * s + 36e5 * r, this._days = +a + 7 * o, this._months = +i + 12 * n, this._data = {}, this._bubble()
    }

    function s(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return t.hasOwnProperty("toString") && (e.toString = t.toString), t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf), e
    }

    function l(e) {
        var t, n = {};
        for (t in e) e.hasOwnProperty(t) && gt.hasOwnProperty(t) && (n[t] = e[t]);
        return n
    }

    function c(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }

    function d(e, t, n) {
        for (var i = "" + Math.abs(e), o = e >= 0; i.length < t;) i = "0" + i;
        return (o ? n ? "+" : "" : "-") + i
    }

    function u(e, t, n, i) {
        var o, a, r = t._milliseconds,
            s = t._days,
            l = t._months;
        r && e._d.setTime(+e._d + r * n), (s || l) && (o = e.minute(), a = e.hour()), s && e.date(e.date() + s * n), l && e.month(e.month() + l * n), r && !i && it.updateOffset(e), (s || l) && (e.minute(o), e.hour(a))
    }

    function f(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function p(e) {
        return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
    }

    function h(e, t, n) {
        var i, o = Math.min(e.length, t.length),
            a = Math.abs(e.length - t.length),
            r = 0;
        for (i = 0; o > i; i++)(n && e[i] !== t[i] || !n && y(e[i]) !== y(t[i])) && r++;
        return r + a
    }

    function m(e) {
        if (e) {
            var t = e.toLowerCase().replace(/(.)s$/, "$1");
            e = Bt[e] || Zt[t] || t
        }
        return e
    }

    function g(e) {
        var t, n, i = {};
        for (n in e) e.hasOwnProperty(n) && (t = m(n), t && (i[t] = e[n]));
        return i
    }

    function v(t) {
        var n, i;
        if (0 === t.indexOf("week")) n = 7, i = "day";
        else {
            if (0 !== t.indexOf("month")) return;
            n = 12, i = "month"
        }
        it[t] = function(o, a) {
            var r, s, l = it.fn._lang[t],
                c = [];
            if ("number" == typeof o && (a = o, o = e), s = function(e) {
                    var t = it().utc().set(i, e);
                    return l.call(it.fn._lang, t, o || "")
                }, null != a) return s(a);
            for (r = 0; n > r; r++) c.push(s(r));
            return c
        }
    }

    function y(e) {
        var t = +e,
            n = 0;
        return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
    }

    function b(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }

    function w(e) {
        return x(e) ? 366 : 365
    }

    function x(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }

    function k(e) {
        var t;
        e._a && -2 === e._pf.overflow && (t = e._a[ct] < 0 || e._a[ct] > 11 ? ct : e._a[dt] < 1 || e._a[dt] > b(e._a[lt], e._a[ct]) ? dt : e._a[ut] < 0 || e._a[ut] > 23 ? ut : e._a[ft] < 0 || e._a[ft] > 59 ? ft : e._a[pt] < 0 || e._a[pt] > 59 ? pt : e._a[ht] < 0 || e._a[ht] > 999 ? ht : -1, e._pf._overflowDayOfYear && (lt > t || t > dt) && (t = dt), e._pf.overflow = t)
    }

    function T(e) {
        return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length)), e._isValid
    }

    function _(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function C(e, t) {
        return t._isUTC ? it(e).zone(t._offset || 0) : it(e).local()
    }

    function S(e, t) {
        return t.abbr = e, mt[e] || (mt[e] = new o), mt[e].set(t), mt[e]
    }

    function D(e) {
        delete mt[e]
    }

    function A(e) {
        var t, n, i, o, a = 0,
            r = function(e) {
                if (!mt[e] && vt) try {
                    require("./lang/" + e)
                } catch (t) {}
                return mt[e]
            };
        if (!e) return it.fn._lang;
        if (!f(e)) {
            if (n = r(e)) return n;
            e = [e]
        }
        for (; a < e.length;) {
            for (o = _(e[a]).split("-"), t = o.length, i = _(e[a + 1]), i = i ? i.split("-") : null; t > 0;) {
                if (n = r(o.slice(0, t).join("-"))) return n;
                if (i && i.length >= t && h(o, i, !0) >= t - 1) break;
                t--
            }
            a++
        }
        return it.fn._lang
    }

    function E(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function j(e) {
        var t, n, i = e.match(xt);
        for (t = 0, n = i.length; n > t; t++) i[t] = Xt[i[t]] ? Xt[i[t]] : E(i[t]);
        return function(o) {
            var a = "";
            for (t = 0; n > t; t++) a += i[t] instanceof Function ? i[t].call(o, e) : i[t];
            return a
        }
    }

    function M(e, t) {
        return e.isValid() ? (t = $(t, e.lang()), Ut[t] || (Ut[t] = j(t)), Ut[t](e)) : e.lang().invalidDate()
    }

    function $(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var i = 5;
        for (kt.lastIndex = 0; i >= 0 && kt.test(e);) e = e.replace(kt, n), kt.lastIndex = 0, i -= 1;
        return e
    }

    function P(e, t) {
        var n, i = t._strict;
        switch (e) {
            case "DDDD":
                return It;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return i ? Nt : Ct;
            case "Y":
            case "G":
            case "g":
                return Ht;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return i ? zt : St;
            case "S":
                if (i) return $t;
            case "SS":
                if (i) return Pt;
            case "SSS":
                if (i) return It;
            case "DDD":
                return _t;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return At;
            case "a":
            case "A":
                return A(t._l)._meridiemParse;
            case "X":
                return Mt;
            case "Z":
            case "ZZ":
                return Et;
            case "T":
                return jt;
            case "SSSS":
                return Dt;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return i ? Pt : Tt;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return Tt;
            default:
                return n = new RegExp(Y(F(e.replace("\\", "")), "i"))
        }
    }

    function I(e) {
        e = e || "";
        var t = e.match(Et) || [],
            n = t[t.length - 1] || [],
            i = (n + "").match(Wt) || ["-", 0, 0],
            o = +(60 * i[1]) + y(i[2]);
        return "+" === i[0] ? -o : o
    }

    function N(e, t, n) {
        var i, o = n._a;
        switch (e) {
            case "M":
            case "MM":
                null != t && (o[ct] = y(t) - 1);
                break;
            case "MMM":
            case "MMMM":
                i = A(n._l).monthsParse(t), null != i ? o[ct] = i : n._pf.invalidMonth = t;
                break;
            case "D":
            case "DD":
                null != t && (o[dt] = y(t));
                break;
            case "DDD":
            case "DDDD":
                null != t && (n._dayOfYear = y(t));
                break;
            case "YY":
                o[lt] = y(t) + (y(t) > 68 ? 1900 : 2e3);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                o[lt] = y(t);
                break;
            case "a":
            case "A":
                n._isPm = A(n._l).isPM(t);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                o[ut] = y(t);
                break;
            case "m":
            case "mm":
                o[ft] = y(t);
                break;
            case "s":
            case "ss":
                o[pt] = y(t);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                o[ht] = y(1e3 * ("0." + t));
                break;
            case "X":
                n._d = new Date(1e3 * parseFloat(t));
                break;
            case "Z":
            case "ZZ":
                n._useUTC = !0, n._tzm = I(t);
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "dd":
            case "ddd":
            case "dddd":
            case "e":
            case "E":
                e = e.substr(0, 1);
            case "gg":
            case "gggg":
            case "GG":
            case "GGGG":
            case "GGGGG":
                e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = t)
        }
    }

    function z(e) {
        var t, n, i, o, a, r, s, l, c, d, u = [];
        if (!e._d) {
            for (i = O(e), e._w && null == e._a[dt] && null == e._a[ct] && (a = function(t) {
                    var n = parseInt(t, 10);
                    return t ? t.length < 3 ? n > 68 ? 1900 + n : 2e3 + n : n : null == e._a[lt] ? it().weekYear() : e._a[lt]
                }, r = e._w, null != r.GG || null != r.W || null != r.E ? s = Q(a(r.GG), r.W || 1, r.E, 4, 1) : (l = A(e._l), c = null != r.d ? U(r.d, l) : null != r.e ? parseInt(r.e, 10) + l._week.dow : 0, d = parseInt(r.w, 10) || 1, null != r.d && c < l._week.dow && d++, s = Q(a(r.gg), d, c, l._week.doy, l._week.dow)), e._a[lt] = s.year, e._dayOfYear = s.dayOfYear), e._dayOfYear && (o = null == e._a[lt] ? i[lt] : e._a[lt], e._dayOfYear > w(o) && (e._pf._overflowDayOfYear = !0), n = Z(o, 0, e._dayOfYear), e._a[ct] = n.getUTCMonth(), e._a[dt] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = u[t] = i[t];
            for (; 7 > t; t++) e._a[t] = u[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            u[ut] += y((e._tzm || 0) / 60), u[ft] += y((e._tzm || 0) % 60), e._d = (e._useUTC ? Z : B).apply(null, u)
        }
    }

    function H(e) {
        var t;
        e._d || (t = g(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], z(e))
    }

    function O(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function L(e) {
        e._a = [], e._pf.empty = !0;
        var t, n, i, o, a, r = A(e._l),
            s = "" + e._i,
            l = s.length,
            c = 0;
        for (i = $(e._f, r).match(xt) || [], t = 0; t < i.length; t++) o = i[t], n = (s.match(P(o, e)) || [])[0], n && (a = s.substr(0, s.indexOf(n)), a.length > 0 && e._pf.unusedInput.push(a), s = s.slice(s.indexOf(n) + n.length), c += n.length), Xt[o] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(o), N(o, n, e)) : e._strict && !n && e._pf.unusedTokens.push(o);
        e._pf.charsLeftOver = l - c, s.length > 0 && e._pf.unusedInput.push(s), e._isPm && e._a[ut] < 12 && (e._a[ut] += 12), e._isPm === !1 && 12 === e._a[ut] && (e._a[ut] = 0), z(e), k(e)
    }

    function F(e) {
        return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, o) {
            return t || n || i || o
        })
    }

    function Y(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function W(e) {
        var n, i, o, a, r;
        if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(0 / 0));
        for (a = 0; a < e._f.length; a++) r = 0, n = s({}, e), n._pf = t(), n._f = e._f[a], L(n), T(n) && (r += n._pf.charsLeftOver, r += 10 * n._pf.unusedTokens.length, n._pf.score = r, (null == o || o > r) && (o = r, i = n));
        s(e, i || n)
    }

    function q(e) {
        var t, n, i = e._i,
            o = Ot.exec(i);
        if (o) {
            for (e._pf.iso = !0, t = 0, n = Ft.length; n > t; t++)
                if (Ft[t][1].exec(i)) {
                    e._f = Ft[t][0] + (o[6] || " ");
                    break
                }
            for (t = 0, n = Yt.length; n > t; t++)
                if (Yt[t][1].exec(i)) {
                    e._f += Yt[t][0];
                    break
                }
            i.match(Et) && (e._f += "Z"), L(e)
        } else e._d = new Date(i)
    }

    function R(t) {
        var n = t._i,
            i = yt.exec(n);
        n === e ? t._d = new Date : i ? t._d = new Date(+i[1]) : "string" == typeof n ? q(t) : f(n) ? (t._a = n.slice(0), z(t)) : p(n) ? t._d = new Date(+n) : "object" == typeof n ? H(t) : t._d = new Date(n)
    }

    function B(e, t, n, i, o, a, r) {
        var s = new Date(e, t, n, i, o, a, r);
        return 1970 > e && s.setFullYear(e), s
    }

    function Z(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 1970 > e && t.setUTCFullYear(e), t
    }

    function U(e, t) {
        if ("string" == typeof e)
            if (isNaN(e)) {
                if (e = t.weekdaysParse(e), "number" != typeof e) return null
            } else e = parseInt(e, 10);
        return e
    }

    function G(e, t, n, i, o) {
        return o.relativeTime(t || 1, !!n, e, i)
    }

    function V(e, t, n) {
        var i = st(Math.abs(e) / 1e3),
            o = st(i / 60),
            a = st(o / 60),
            r = st(a / 24),
            s = st(r / 365),
            l = 45 > i && ["s", i] || 1 === o && ["m"] || 45 > o && ["mm", o] || 1 === a && ["h"] || 22 > a && ["hh", a] || 1 === r && ["d"] || 25 >= r && ["dd", r] || 45 >= r && ["M"] || 345 > r && ["MM", st(r / 30)] || 1 === s && ["y"] || ["yy", s];
        return l[2] = t, l[3] = e > 0, l[4] = n, G.apply({}, l)
    }

    function X(e, t, n) {
        var i, o = n - t,
            a = n - e.day();
        return a > o && (a -= 7), o - 7 > a && (a += 7), i = it(e).add("d", a), {
            week: Math.ceil(i.dayOfYear() / 7),
            year: i.year()
        }
    }

    function Q(e, t, n, i, o) {
        var a, r, s = Z(e, 0, 1).getUTCDay();
        return n = null != n ? n : o, a = o - s + (s > i ? 7 : 0) - (o > s ? 7 : 0), r = 7 * (t - 1) + (n - o) + a + 1, {
            year: r > 0 ? e : e - 1,
            dayOfYear: r > 0 ? r : w(e - 1) + r
        }
    }

    function J(e) {
        var t = e._i,
            n = e._f;
        return null === t ? it.invalid({
            nullInput: !0
        }) : ("string" == typeof t && (e._i = t = A().preparse(t)), it.isMoment(t) ? (e = l(t), e._d = new Date(+t._d)) : n ? f(n) ? W(e) : L(e) : R(e), new a(e))
    }

    function K(e, t) {
        it.fn[e] = it.fn[e + "s"] = function(e) {
            var n = this._isUTC ? "UTC" : "";
            return null != e ? (this._d["set" + n + t](e), it.updateOffset(this), this) : this._d["get" + n + t]()
        }
    }

    function et(e) {
        it.duration.fn[e] = function() {
            return this._data[e]
        }
    }

    function tt(e, t) {
        it.duration.fn["as" + e] = function() {
            return +this / t
        }
    }

    function nt(e) {
        var t = !1,
            n = it;
        "undefined" == typeof ender && (e ? (rt.moment = function() {
            return !t && console && console.warn && (t = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), n.apply(null, arguments)
        }, s(rt.moment, n)) : rt.moment = it)
    }
    for (var it, ot, at = "2.5.1", rt = this, st = Math.round, lt = 0, ct = 1, dt = 2, ut = 3, ft = 4, pt = 5, ht = 6, mt = {}, gt = {
            _isAMomentObject: null,
            _i: null,
            _f: null,
            _l: null,
            _strict: null,
            _isUTC: null,
            _offset: null,
            _pf: null,
            _lang: null
        }, vt = "undefined" != typeof module && module.exports && "undefined" != typeof require, yt = /^\/?Date\((\-?\d+)/i, bt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, wt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, xt = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, kt = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Tt = /\d\d?/, _t = /\d{1,3}/, Ct = /\d{1,4}/, St = /[+\-]?\d{1,6}/, Dt = /\d+/, At = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Et = /Z|[\+\-]\d\d:?\d\d/gi, jt = /T/i, Mt = /[\+\-]?\d+(\.\d{1,3})?/, $t = /\d/, Pt = /\d\d/, It = /\d{3}/, Nt = /\d{4}/, zt = /[+-]?\d{6}/, Ht = /[+-]?\d+/, Ot = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Lt = "YYYY-MM-DDTHH:mm:ssZ", Ft = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ], Yt = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], Wt = /([\+\-]|\d\d)/gi, qt = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Rt = {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }, Bt = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, Zt = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, Ut = {}, Gt = "DDD w W M D d".split(" "), Vt = "M D H h m s w W".split(" "), Xt = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(e) {
                return this.lang().monthsShort(this, e)
            },
            MMMM: function(e) {
                return this.lang().months(this, e)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(e) {
                return this.lang().weekdaysMin(this, e)
            },
            ddd: function(e) {
                return this.lang().weekdaysShort(this, e)
            },
            dddd: function(e) {
                return this.lang().weekdays(this, e)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return d(this.year() % 100, 2)
            },
            YYYY: function() {
                return d(this.year(), 4)
            },
            YYYYY: function() {
                return d(this.year(), 5)
            },
            YYYYYY: function() {
                var e = this.year(),
                    t = e >= 0 ? "+" : "-";
                return t + d(Math.abs(e), 6)
            },
            gg: function() {
                return d(this.weekYear() % 100, 2)
            },
            gggg: function() {
                return d(this.weekYear(), 4)
            },
            ggggg: function() {
                return d(this.weekYear(), 5)
            },
            GG: function() {
                return d(this.isoWeekYear() % 100, 2)
            },
            GGGG: function() {
                return d(this.isoWeekYear(), 4)
            },
            GGGGG: function() {
                return d(this.isoWeekYear(), 5)
            },
            e: function() {
                return this.weekday()
            },
            E: function() {
                return this.isoWeekday()
            },
            a: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return y(this.milliseconds() / 100)
            },
            SS: function() {
                return d(y(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return d(this.milliseconds(), 3)
            },
            SSSS: function() {
                return d(this.milliseconds(), 3)
            },
            Z: function() {
                var e = -this.zone(),
                    t = "+";
                return 0 > e && (e = -e, t = "-"), t + d(y(e / 60), 2) + ":" + d(y(e) % 60, 2)
            },
            ZZ: function() {
                var e = -this.zone(),
                    t = "+";
                return 0 > e && (e = -e, t = "-"), t + d(y(e / 60), 2) + d(y(e) % 60, 2)
            },
            z: function() {
                return this.zoneAbbr()
            },
            zz: function() {
                return this.zoneName()
            },
            X: function() {
                return this.unix()
            },
            Q: function() {
                return this.quarter()
            }
        }, Qt = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Gt.length;) ot = Gt.pop(), Xt[ot + "o"] = i(Xt[ot], ot);
    for (; Vt.length;) ot = Vt.pop(), Xt[ot + ot] = n(Xt[ot], 2);
    for (Xt.DDDD = n(Xt.DDD, 3), s(o.prototype, {
            set: function(e) {
                var t, n;
                for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function(e) {
                return this._months[e.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function(e) {
                return this._monthsShort[e.month()]
            },
            monthsParse: function(e) {
                var t, n, i;
                for (this._monthsParse || (this._monthsParse = []), t = 0; 12 > t; t++)
                    if (this._monthsParse[t] || (n = it.utc([2e3, t]), i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[t] = new RegExp(i.replace(".", ""), "i")), this._monthsParse[t].test(e)) return t
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function(e) {
                return this._weekdays[e.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function(e) {
                return this._weekdaysShort[e.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function(e) {
                return this._weekdaysMin[e.day()]
            },
            weekdaysParse: function(e) {
                var t, n, i;
                for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
                    if (this._weekdaysParse[t] || (n = it([2e3, 1]).day(t), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
            },
            _longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D YYYY",
                LLL: "MMMM D YYYY LT",
                LLLL: "dddd, MMMM D YYYY LT"
            },
            longDateFormat: function(e) {
                var t = this._longDateFormat[e];
                return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1)
                }), this._longDateFormat[e] = t), t
            },
            isPM: function(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function(e, t) {
                var n = this._calendar[e];
                return "function" == typeof n ? n.apply(t) : n
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function(e, t, n, i) {
                var o = this._relativeTime[n];
                return "function" == typeof o ? o(e, t, n, i) : o.replace(/%d/i, e)
            },
            pastFuture: function(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
            },
            ordinal: function(e) {
                return this._ordinal.replace("%d", e)
            },
            _ordinal: "%d",
            preparse: function(e) {
                return e
            },
            postformat: function(e) {
                return e
            },
            week: function(e) {
                return X(e, this._week.dow, this._week.doy).week
            },
            _week: {
                dow: 0,
                doy: 6
            },
            _invalidDate: "Invalid date",
            invalidDate: function() {
                return this._invalidDate
            }
        }), it = function(n, i, o, a) {
            var r;
            return "boolean" == typeof o && (a = o, o = e), r = {}, r._isAMomentObject = !0, r._i = n, r._f = i, r._l = o, r._strict = a, r._isUTC = !1, r._pf = t(), J(r)
        }, it.utc = function(n, i, o, a) {
            var r;
            return "boolean" == typeof o && (a = o, o = e), r = {}, r._isAMomentObject = !0, r._useUTC = !0, r._isUTC = !0, r._l = o, r._i = n, r._f = i, r._strict = a, r._pf = t(), J(r).utc()
        }, it.unix = function(e) {
            return it(1e3 * e)
        }, it.duration = function(e, t) {
            var n, i, o, a = e,
                s = null;
            return it.isDuration(e) ? a = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : "number" == typeof e ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (s = bt.exec(e)) ? (n = "-" === s[1] ? -1 : 1, a = {
                y: 0,
                d: y(s[dt]) * n,
                h: y(s[ut]) * n,
                m: y(s[ft]) * n,
                s: y(s[pt]) * n,
                ms: y(s[ht]) * n
            }) : (s = wt.exec(e)) && (n = "-" === s[1] ? -1 : 1, o = function(e) {
                var t = e && parseFloat(e.replace(",", "."));
                return (isNaN(t) ? 0 : t) * n
            }, a = {
                y: o(s[2]),
                M: o(s[3]),
                d: o(s[4]),
                h: o(s[5]),
                m: o(s[6]),
                s: o(s[7]),
                w: o(s[8])
            }), i = new r(a), it.isDuration(e) && e.hasOwnProperty("_lang") && (i._lang = e._lang), i
        }, it.version = at, it.defaultFormat = Lt, it.updateOffset = function() {}, it.lang = function(e, t) {
            var n;
            return e ? (t ? S(_(e), t) : null === t ? (D(e), e = "en") : mt[e] || A(e), n = it.duration.fn._lang = it.fn._lang = A(e), n._abbr) : it.fn._lang._abbr
        }, it.langData = function(e) {
            return e && e._lang && e._lang._abbr && (e = e._lang._abbr), A(e)
        }, it.isMoment = function(e) {
            return e instanceof a || null != e && e.hasOwnProperty("_isAMomentObject")
        }, it.isDuration = function(e) {
            return e instanceof r
        }, ot = Qt.length - 1; ot >= 0; --ot) v(Qt[ot]);
    for (it.normalizeUnits = function(e) {
            return m(e)
        }, it.invalid = function(e) {
            var t = it.utc(0 / 0);
            return null != e ? s(t._pf, e) : t._pf.userInvalidated = !0, t
        }, it.parseZone = function(e) {
            return it(e).parseZone()
        }, s(it.fn = a.prototype, {
            clone: function() {
                return it(this)
            },
            valueOf: function() {
                return +this._d + 6e4 * (this._offset || 0)
            },
            unix: function() {
                return Math.floor(+this / 1e3)
            },
            toString: function() {
                return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function() {
                return this._offset ? new Date(+this) : this._d
            },
            toISOString: function() {
                var e = it(this).utc();
                return 0 < e.year() && e.year() <= 9999 ? M(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
            },
            isValid: function() {
                return T(this)
            },
            isDSTShifted: function() {
                return this._a ? this.isValid() && h(this._a, (this._isUTC ? it.utc(this._a) : it(this._a)).toArray()) > 0 : !1
            },
            parsingFlags: function() {
                return s({}, this._pf)
            },
            invalidAt: function() {
                return this._pf.overflow
            },
            utc: function() {
                return this.zone(0)
            },
            local: function() {
                return this.zone(0), this._isUTC = !1, this
            },
            format: function(e) {
                var t = M(this, e || it.defaultFormat);
                return this.lang().postformat(t)
            },
            add: function(e, t) {
                var n;
                return n = "string" == typeof e ? it.duration(+t, e) : it.duration(e, t), u(this, n, 1), this
            },
            subtract: function(e, t) {
                var n;
                return n = "string" == typeof e ? it.duration(+t, e) : it.duration(e, t), u(this, n, -1), this
            },
            diff: function(e, t, n) {
                var i, o, a = C(e, this),
                    r = 6e4 * (this.zone() - a.zone());
                return t = m(t), "year" === t || "month" === t ? (i = 432e5 * (this.daysInMonth() + a.daysInMonth()), o = 12 * (this.year() - a.year()) + (this.month() - a.month()), o += (this - it(this).startOf("month") - (a - it(a).startOf("month"))) / i, o -= 6e4 * (this.zone() - it(this).startOf("month").zone() - (a.zone() - it(a).startOf("month").zone())) / i, "year" === t && (o /= 12)) : (i = this - a, o = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - r) / 864e5 : "week" === t ? (i - r) / 6048e5 : i), n ? o : c(o)
            },
            from: function(e, t) {
                return it.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)
            },
            fromNow: function(e) {
                return this.from(it(), e)
            },
            calendar: function() {
                var e = C(it(), this).startOf("day"),
                    t = this.diff(e, "days", !0),
                    n = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
                return this.format(this.lang().calendar(n, this))
            },
            isLeapYear: function() {
                return x(this.year())
            },
            isDST: function() {
                return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
            },
            day: function(e) {
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = U(e, this.lang()), this.add({
                    d: e - t
                })) : t
            },
            month: function(e) {
                var t, n = this._isUTC ? "UTC" : "";
                return null != e ? "string" == typeof e && (e = this.lang().monthsParse(e), "number" != typeof e) ? this : (t = this.date(), this.date(1), this._d["set" + n + "Month"](e), this.date(Math.min(t, this.daysInMonth())), it.updateOffset(this), this) : this._d["get" + n + "Month"]()
            },
            startOf: function(e) {
                switch (e = m(e)) {
                    case "year":
                        this.month(0);
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), this
            },
            endOf: function(e) {
                return e = m(e), this.startOf(e).add("isoWeek" === e ? "week" : e, 1).subtract("ms", 1)
            },
            isAfter: function(e, t) {
                return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) > +it(e).startOf(t)
            },
            isBefore: function(e, t) {
                return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) < +it(e).startOf(t)
            },
            isSame: function(e, t) {
                return t = t || "ms", +this.clone().startOf(t) === +C(e, this).startOf(t)
            },
            min: function(e) {
                return e = it.apply(null, arguments), this > e ? this : e
            },
            max: function(e) {
                return e = it.apply(null, arguments), e > this ? this : e
            },
            zone: function(e) {
                var t = this._offset || 0;
                return null == e ? this._isUTC ? t : this._d.getTimezoneOffset() : ("string" == typeof e && (e = I(e)), Math.abs(e) < 16 && (e = 60 * e), this._offset = e, this._isUTC = !0, t !== e && u(this, it.duration(t - e, "m"), 1, !0), this)
            },
            zoneAbbr: function() {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            parseZone: function() {
                return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
            },
            hasAlignedHourOffset: function(e) {
                return e = e ? it(e).zone() : 0, (this.zone() - e) % 60 === 0
            },
            daysInMonth: function() {
                return b(this.year(), this.month())
            },
            dayOfYear: function(e) {
                var t = st((it(this).startOf("day") - it(this).startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add("d", e - t)
            },
            quarter: function() {
                return Math.ceil((this.month() + 1) / 3)
            },
            weekYear: function(e) {
                var t = X(this, this.lang()._week.dow, this.lang()._week.doy).year;
                return null == e ? t : this.add("y", e - t)
            },
            isoWeekYear: function(e) {
                var t = X(this, 1, 4).year;
                return null == e ? t : this.add("y", e - t)
            },
            week: function(e) {
                var t = this.lang().week(this);
                return null == e ? t : this.add("d", 7 * (e - t))
            },
            isoWeek: function(e) {
                var t = X(this, 1, 4).week;
                return null == e ? t : this.add("d", 7 * (e - t))
            },
            weekday: function(e) {
                var t = (this.day() + 7 - this.lang()._week.dow) % 7;
                return null == e ? t : this.add("d", e - t)
            },
            isoWeekday: function(e) {
                return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
            },
            get: function(e) {
                return e = m(e), this[e]()
            },
            set: function(e, t) {
                return e = m(e), "function" == typeof this[e] && this[e](t), this
            },
            lang: function(t) {
                return t === e ? this._lang : (this._lang = A(t), this)
            }
        }), ot = 0; ot < qt.length; ot++) K(qt[ot].toLowerCase().replace(/s$/, ""), qt[ot]);
    K("year", "FullYear"), it.fn.days = it.fn.day, it.fn.months = it.fn.month, it.fn.weeks = it.fn.week, it.fn.isoWeeks = it.fn.isoWeek, it.fn.toJSON = it.fn.toISOString, s(it.duration.fn = r.prototype, {
        _bubble: function() {
            var e, t, n, i, o = this._milliseconds,
                a = this._days,
                r = this._months,
                s = this._data;
            s.milliseconds = o % 1e3, e = c(o / 1e3), s.seconds = e % 60, t = c(e / 60), s.minutes = t % 60, n = c(t / 60), s.hours = n % 24, a += c(n / 24), s.days = a % 30, r += c(a / 30), s.months = r % 12, i = c(r / 12), s.years = i
        },
        weeks: function() {
            return c(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12)
        },
        humanize: function(e) {
            var t = +this,
                n = V(t, !e, this.lang());
            return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n)
        },
        add: function(e, t) {
            var n = it.duration(e, t);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
        },
        subtract: function(e, t) {
            var n = it.duration(e, t);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
        },
        get: function(e) {
            return e = m(e), this[e.toLowerCase() + "s"]()
        },
        as: function(e) {
            return e = m(e), this["as" + e.charAt(0).toUpperCase() + e.slice(1) + "s"]()
        },
        lang: it.fn.lang,
        toIsoString: function() {
            var e = Math.abs(this.years()),
                t = Math.abs(this.months()),
                n = Math.abs(this.days()),
                i = Math.abs(this.hours()),
                o = Math.abs(this.minutes()),
                a = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (i || o || a ? "T" : "") + (i ? i + "H" : "") + (o ? o + "M" : "") + (a ? a + "S" : "") : "P0D"
        }
    });
    for (ot in Rt) Rt.hasOwnProperty(ot) && (tt(ot, Rt[ot]), et(ot.toLowerCase()));
    tt("Weeks", 6048e5), it.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, it.lang("en", {
        ordinal: function(e) {
            var t = e % 10,
                n = 1 === y(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        }
    }), vt ? (module.exports = it, nt(!0)) : "function" == typeof define && define.amd ? define("moment", function(t, n, i) {
        return i.config && i.config() && i.config().noGlobal !== !0 && nt(i.config().noGlobal === e), it
    }) : nt()
}.call(this),
function(e) {
    if ("function" == typeof define && define.amd) define(["jquery", "moment"], e);
    else {
        if (!jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
        if (!moment) throw "bootstrap-datetimepicker requires moment.js to be loaded first";
        e(jQuery, moment)
    }
}(function(e, t) {
    if ("undefined" == typeof t) throw alert("momentjs is required"), new Error("momentjs is required");
    var n = 0,
        o = t,
        a = function(t, a) {
            var r = e.fn.datetimepicker.defaults,
                s = {
                    time: "glyphicon glyphicon-time",
                    date: "glyphicon glyphicon-calendar",
                    up: "glyphicon glyphicon-chevron-up",
                    down: "glyphicon glyphicon-chevron-down"
                },
                l = this,
                c = function() {
                    var i, c = !1;
                    if (l.options = e.extend({}, r, a), l.options.icons = e.extend({}, s, l.options.icons), l.element = e(t), u(), !l.options.pickTime && !l.options.pickDate) throw new Error("Must choose at least one picker");
                    if (l.id = n++, o.lang(l.options.language), l.date = o(), l.unset = !1, l.isInput = l.element.is("input"), l.component = !1, l.element.hasClass("input-group") && (l.component = l.element.find(0 == l.element.find(".datepickerbutton").size() ? "[class^='input-group-']" : ".datepickerbutton")), l.format = l.options.format, i = o()._lang._longDateFormat, l.format || (l.format = l.options.pickDate ? i.L : "", l.options.pickDate && l.options.pickTime && (l.format += " "), l.format += l.options.pickTime ? i.LT : "", l.options.useSeconds && (~i.LT.indexOf(" A") ? l.format = l.format.split(" A")[0] + ":ss A" : l.format += ":ss")), l.use24hours = l.format.toLowerCase().indexOf("a") < 1, l.component && (c = l.component.find("span")), l.options.pickTime && c && c.addClass(l.options.icons.time), l.options.pickDate && c && (c.removeClass(l.options.icons.time), c.addClass(l.options.icons.date)), l.widget = e(Y()).appendTo("body"), l.options.useSeconds && !l.use24hours && l.widget.width(300), l.minViewMode = l.options.minViewMode || 0, "string" == typeof l.minViewMode) switch (l.minViewMode) {
                        case "months":
                            l.minViewMode = 1;
                            break;
                        case "years":
                            l.minViewMode = 2;
                            break;
                        default:
                            l.minViewMode = 0
                    }
                    if (l.viewMode = l.options.viewMode || 0, "string" == typeof l.viewMode) switch (l.viewMode) {
                        case "months":
                            l.viewMode = 1;
                            break;
                        case "years":
                            l.viewMode = 2;
                            break;
                        default:
                            l.viewMode = 0
                    }
                    if (l.options.disabledDates = L(l.options.disabledDates), l.options.enabledDates = L(l.options.enabledDates), l.startViewMode = l.viewMode, l.setMinDate(l.options.minDate), l.setMaxDate(l.options.maxDate), g(), v(), b(), w(), x(), m(), E(), j(), "" !== l.options.defaultDate && "" == d().val() && l.setValue(l.options.defaultDate), 1 !== l.options.minuteStepping) {
                        var f = l.options.minuteStepping;
                        l.date.minutes(Math.round(l.date.minutes() / f) * f % 60).seconds(0)
                    }
                },
                d = function() {
                    var e;
                    if (l.isInput) return l.element;
                    if (e = l.element.find(".datepickerinput"), 0 === e.size()) e = l.element.find("input");
                    else if (!e.is("input")) throw new Error('CSS class "datepickerinput" cannot be applied to non input element');
                    return e
                },
                u = function() {
                    var e;
                    e = (l.element.is("input"), l.element.data()), void 0 !== e.dateFormat && (l.options.format = e.dateFormat), void 0 !== e.datePickdate && (l.options.pickDate = e.datePickdate), void 0 !== e.datePicktime && (l.options.pickTime = e.datePicktime), void 0 !== e.dateUseminutes && (l.options.useMinutes = e.dateUseminutes), void 0 !== e.dateUseseconds && (l.options.useSeconds = e.dateUseseconds), void 0 !== e.dateUsecurrent && (l.options.useCurrent = e.dateUsecurrent), void 0 !== e.dateMinutestepping && (l.options.minuteStepping = e.dateMinutestepping), void 0 !== e.dateMindate && (l.options.minDate = e.dateMindate), void 0 !== e.dateMaxdate && (l.options.maxDate = e.dateMaxdate), void 0 !== e.dateShowtoday && (l.options.showToday = e.dateShowtoday), void 0 !== e.dateCollapse && (l.options.collapse = e.dateCollapse), void 0 !== e.dateLanguage && (l.options.language = e.dateLanguage), void 0 !== e.dateDefaultdate && (l.options.defaultDate = e.dateDefaultdate), void 0 !== e.dateDisableddates && (l.options.disabledDates = e.dateDisableddates), void 0 !== e.dateEnableddates && (l.options.enabledDates = e.dateEnableddates), void 0 !== e.dateIcons && (l.options.icons = e.dateIcons), void 0 !== e.dateUsestrict && (l.options.useStrict = e.dateUsestrict), void 0 !== e.dateDirection && (l.options.direction = e.dateDirection), void 0 !== e.dateSidebyside && (l.options.sideBySide = e.dateSidebyside)
                },
                f = function() {
                    var t = "absolute",
                        n = l.component ? l.component.offset() : l.element.offset(),
                        i = e(window);
                    l.width = l.component ? l.component.outerWidth() : l.element.outerWidth(), n.top = n.top + l.element.outerHeight();
                    var o;
                    "up" === l.options.direction ? o = "top" : "bottom" === l.options.direction ? o = "bottom" : "auto" === l.options.direction && (o = n.top + l.widget.height() > i.height() + i.scrollTop() && l.widget.height() + l.element.outerHeight() < n.top ? "top" : "bottom"), "top" === o ? (n.top -= l.widget.height() + l.element.outerHeight() + 15, l.widget.addClass("top").removeClass("bottom")) : (n.top += 1, l.widget.addClass("bottom").removeClass("top")), void 0 !== l.options.width && l.widget.width(l.options.width), "left" === l.options.orientation && (l.widget.addClass("left-oriented"), n.left = n.left - l.widget.width() + 20), I() && (t = "fixed", n.top -= i.scrollTop(), n.left -= i.scrollLeft()), i.width() < n.left + l.widget.outerWidth() ? (n.right = i.width() - n.left - l.width, n.left = "auto", l.widget.addClass("pull-right")) : (n.right = "auto", l.widget.removeClass("pull-right")), l.widget.css({
                        position: t,
                        top: n.top,
                        left: n.left,
                        right: n.right
                    })
                },
                p = function(e, t) {
                    o(l.date).isSame(o(e)) || (l.element.trigger({
                        type: "dp.change",
                        date: o(l.date),
                        oldDate: o(e)
                    }), "change" !== t && l.element.change())
                },
                h = function(e) {
                    l.element.trigger({
                        type: "dp.error",
                        date: o(e)
                    })
                },
                m = function(e) {
                    o.lang(l.options.language);
                    var t = e;
                    t || (t = d().val(), t && (l.date = o(t, l.format, l.options.useStrict)), l.date || (l.date = o())), l.viewDate = o(l.date).startOf("month"), y(), k()
                },
                g = function() {
                    o.lang(l.options.language);
                    var t, n = e("<tr>"),
                        i = o.weekdaysMin();
                    if (0 == o()._lang._week.dow)
                        for (t = 0; 7 > t; t++) n.append('<th class="dow">' + i[t] + "</th>");
                    else
                        for (t = 1; 8 > t; t++) n.append(7 == t ? '<th class="dow">' + i[0] + "</th>" : '<th class="dow">' + i[t] + "</th>");
                    l.widget.find(".datepicker-days thead").append(n)
                },
                v = function() {
                    o.lang(l.options.language);
                    for (var e = "", t = 0, n = o.monthsShort(); 12 > t;) e += '<span class="month">' + n[t++] + "</span>";
                    l.widget.find(".datepicker-months td").append(e)
                },
                y = function() {
                    if (l.options.pickDate) {
                        o.lang(l.options.language);
                        var t, n, i, a, r, s, c, d, u, f = l.viewDate.year(),
                            p = l.viewDate.month(),
                            h = l.options.minDate.year(),
                            m = l.options.minDate.month(),
                            g = l.options.maxDate.year(),
                            v = l.options.maxDate.month(),
                            y = [],
                            b = o.months();
                        for (l.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"), l.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"), l.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"), l.widget.find(".datepicker-days th:eq(1)").text(b[p] + " " + f), n = o(l.viewDate).subtract("months", 1), c = n.daysInMonth(), n.date(c).startOf("week"), (f == h && m >= p || h > f) && l.widget.find(".datepicker-days th:eq(0)").addClass("disabled"), (f == g && p >= v || f > g) && l.widget.find(".datepicker-days th:eq(2)").addClass("disabled"), i = o(n).add(42, "d"); n.isBefore(i);) {
                            if (n.weekday() === o().startOf("week").weekday() && (a = e("<tr>"), y.push(a)), r = "", n.year() < f || n.year() == f && n.month() < p ? r += " old" : (n.year() > f || n.year() == f && n.month() > p) && (r += " new"), n.isSame(o({
                                    y: l.date.year(),
                                    M: l.date.month(),
                                    d: l.date.date()
                                })) && (r += " active"), (H(n, "day") || !O(n)) && (r += " disabled"), l.options.showToday === !0 && n.isSame(o(), "day") && (r += " today"), l.options.daysOfWeekDisabled)
                                for (s in l.options.daysOfWeekDisabled)
                                    if (n.day() == l.options.daysOfWeekDisabled[s]) {
                                        r += " disabled";
                                        break
                                    }
                            a.append('<td class="day' + r + '">' + n.date() + "</td>"), t = n.date(), n.add(1, "d"), t == n.date() && n.add(1, "d")
                        }
                        for (l.widget.find(".datepicker-days tbody").empty().append(y), u = l.date.year(), b = l.widget.find(".datepicker-months").find("th:eq(1)").text(f).end().find("span").removeClass("active"), u === f && b.eq(l.date.month()).addClass("active"), h > u - 1 && l.widget.find(".datepicker-months th:eq(0)").addClass("disabled"), u + 1 > g && l.widget.find(".datepicker-months th:eq(2)").addClass("disabled"), s = 0; 12 > s; s++) f == h && m > s || h > f ? e(b[s]).addClass("disabled") : (f == g && s > v || f > g) && e(b[s]).addClass("disabled");
                        for (y = "", f = 10 * parseInt(f / 10, 10), d = l.widget.find(".datepicker-years").find("th:eq(1)").text(f + "-" + (f + 9)).end().find("td"), l.widget.find(".datepicker-years").find("th").removeClass("disabled"), h > f && l.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"), f + 9 > g && l.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"), f -= 1, s = -1; 11 > s; s++) y += '<span class="year' + (-1 === s || 10 === s ? " old" : "") + (u === f ? " active" : "") + (h > f || f > g ? " disabled" : "") + '">' + f + "</span>", f += 1;
                        d.html(y)
                    }
                },
                b = function() {
                    o.lang(l.options.language);
                    var e, t, n, i = l.widget.find(".timepicker .timepicker-hours table"),
                        a = "";
                    if (i.parent().hide(), l.use24hours)
                        for (e = 0, t = 0; 6 > t; t += 1) {
                            for (a += "<tr>", n = 0; 4 > n; n += 1) a += '<td class="hour">' + F(e.toString()) + "</td>", e++;
                            a += "</tr>"
                        } else
                            for (e = 1, t = 0; 3 > t; t += 1) {
                                for (a += "<tr>", n = 0; 4 > n; n += 1) a += '<td class="hour">' + F(e.toString()) + "</td>", e++;
                                a += "</tr>"
                            }
                    i.html(a)
                },
                w = function() {
                    var e, t, n = l.widget.find(".timepicker .timepicker-minutes table"),
                        i = "",
                        o = 0,
                        a = l.options.minuteStepping;
                    for (n.parent().hide(), 1 == a && (a = 5), e = 0; e < Math.ceil(60 / a / 4); e++) {
                        for (i += "<tr>", t = 0; 4 > t; t += 1) 60 > o ? (i += '<td class="minute">' + F(o.toString()) + "</td>", o += a) : i += "<td></td>";
                        i += "</tr>"
                    }
                    n.html(i)
                },
                x = function() {
                    var e, t, n = l.widget.find(".timepicker .timepicker-seconds table"),
                        i = "",
                        o = 0;
                    for (n.parent().hide(), e = 0; 3 > e; e++) {
                        for (i += "<tr>", t = 0; 4 > t; t += 1) i += '<td class="second">' + F(o.toString()) + "</td>", o += 5;
                        i += "</tr>"
                    }
                    n.html(i)
                },
                k = function() {
                    if (l.date) {
                        var e = l.widget.find(".timepicker span[data-time-component]"),
                            t = l.date.hours(),
                            n = "AM";
                        l.use24hours || (t >= 12 && (n = "PM"), 0 === t ? t = 12 : 12 != t && (t %= 12), l.widget.find(".timepicker [data-action=togglePeriod]").text(n)), e.filter("[data-time-component=hours]").text(F(t)), e.filter("[data-time-component=minutes]").text(F(l.date.minutes())), e.filter("[data-time-component=seconds]").text(F(l.date.second()))
                    }
                },
                T = function(t) {
                    t.stopPropagation(), t.preventDefault(), l.unset = !1;
                    var n, i, a, r, s = e(t.target).closest("span, td, th"),
                        c = o(l.date);
                    if (1 === s.length && !s.is(".disabled")) switch (s[0].nodeName.toLowerCase()) {
                        case "th":
                            switch (s[0].className) {
                                case "switch":
                                    E(1);
                                    break;
                                case "prev":
                                case "next":
                                    a = W.modes[l.viewMode].navStep, "prev" === s[0].className && (a = -1 * a), l.viewDate.add(a, W.modes[l.viewMode].navFnc), y()
                            }
                            break;
                        case "span":
                            s.is(".month") ? (n = s.parent().find("span").index(s), l.viewDate.month(n)) : (i = parseInt(s.text(), 10) || 0, l.viewDate.year(i)), l.viewMode === l.minViewMode && (l.date = o({
                                y: l.viewDate.year(),
                                M: l.viewDate.month(),
                                d: l.viewDate.date(),
                                h: l.date.hours(),
                                m: l.date.minutes(),
                                s: l.date.seconds()
                            }), p(c, t.type), N()), E(-1), y();
                            break;
                        case "td":
                            s.is(".day") && (r = parseInt(s.text(), 10) || 1, n = l.viewDate.month(), i = l.viewDate.year(), s.is(".old") ? 0 === n ? (n = 11, i -= 1) : n -= 1 : s.is(".new") && (11 == n ? (n = 0, i += 1) : n += 1), l.date = o({
                                y: i,
                                M: n,
                                d: r,
                                h: l.date.hours(),
                                m: l.date.minutes(),
                                s: l.date.seconds()
                            }), l.viewDate = o({
                                y: i,
                                M: n,
                                d: Math.min(28, r)
                            }), y(), N(), p(c, t.type))
                    }
                },
                _ = {
                    incrementHours: function() {
                        z("add", "hours", 1)
                    },
                    incrementMinutes: function() {
                        z("add", "minutes", l.options.minuteStepping)
                    },
                    incrementSeconds: function() {
                        z("add", "seconds", 1)
                    },
                    decrementHours: function() {
                        z("subtract", "hours", 1)
                    },
                    decrementMinutes: function() {
                        z("subtract", "minutes", l.options.minuteStepping)
                    },
                    decrementSeconds: function() {
                        z("subtract", "seconds", 1)
                    },
                    togglePeriod: function() {
                        var e = l.date.hours();
                        e >= 12 ? e -= 12 : e += 12, l.date.hours(e)
                    },
                    showPicker: function() {
                        l.widget.find(".timepicker > div:not(.timepicker-picker)").hide(), l.widget.find(".timepicker .timepicker-picker").show()
                    },
                    showHours: function() {
                        l.widget.find(".timepicker .timepicker-picker").hide(), l.widget.find(".timepicker .timepicker-hours").show()
                    },
                    showMinutes: function() {
                        l.widget.find(".timepicker .timepicker-picker").hide(), l.widget.find(".timepicker .timepicker-minutes").show()
                    },
                    showSeconds: function() {
                        l.widget.find(".timepicker .timepicker-picker").hide(), l.widget.find(".timepicker .timepicker-seconds").show()
                    },
                    selectHour: function(t) {
                        var n = l.widget.find(".timepicker [data-action=togglePeriod]").text(),
                            i = parseInt(e(t.target).text(), 10);
                        "PM" == n && (i += 12), l.date.hours(i), _.showPicker.call(l)
                    },
                    selectMinute: function(t) {
                        l.date.minutes(parseInt(e(t.target).text(), 10)), _.showPicker.call(l)
                    },
                    selectSecond: function(t) {
                        l.date.seconds(parseInt(e(t.target).text(), 10)), _.showPicker.call(l)
                    }
                },
                C = function(t) {
                    var n = o(l.date),
                        i = e(t.currentTarget).data("action"),
                        a = _[i].apply(l, arguments);
                    return S(t), l.date || (l.date = o({
                        y: 1970
                    })), N(), k(), p(n, t.type), a
                },
                S = function(e) {
                    e.stopPropagation(), e.preventDefault()
                },
                D = function(e) {
                    27 === e.keyCode && l.hide()
                },
                A = function(t) {
                    o.lang(l.options.language);
                    var n = e(t.target),
                        i = o(l.date),
                        a = o(n.val(), l.format, l.options.useStrict);
                    a.isValid() && !H(a) && O(a) ? (m(), l.setValue(a), p(i, t.type), N()) : (l.viewDate = i, p(i, t.type), h(a), l.unset = !0)
                },
                E = function(e) {
                    e && (l.viewMode = Math.max(l.minViewMode, Math.min(2, l.viewMode + e)));
                    W.modes[l.viewMode].clsName;
                    l.widget.find(".datepicker > div").hide().filter(".datepicker-" + W.modes[l.viewMode].clsName).show()
                },
                j = function() {
                    var t, n, i, o, a;
                    l.widget.on("click", ".datepicker *", e.proxy(T, this)), l.widget.on("click", "[data-action]", e.proxy(C, this)), l.widget.on("mousedown", e.proxy(S, this)), l.element.on("keydown", e.proxy(D, this)), l.options.pickDate && l.options.pickTime && l.widget.on("click.togglePicker", ".accordion-toggle", function(r) {
                        if (r.stopPropagation(), t = e(this), n = t.closest("ul"), i = n.find(".in"), o = n.find(".collapse:not(.in)"), i && i.length) {
                            if (a = i.data("collapse"), a && a.transitioning) return;
                            i.collapse("hide"), o.collapse("show"), t.find("span").toggleClass(l.options.icons.time + " " + l.options.icons.date), l.element.find(".input-group-addon span").toggleClass(l.options.icons.time + " " + l.options.icons.date)
                        }
                    }), l.isInput ? l.element.on({
                        focus: e.proxy(l.show, this),
                        change: e.proxy(A, this),
                        blur: e.proxy(l.hide, this)
                    }) : (l.element.on({
                        change: e.proxy(A, this)
                    }, "input"), l.component ? l.component.on("click", e.proxy(l.show, this)) : l.element.on("click", e.proxy(l.show, this)))
                },
                M = function() {
                    e(window).on("resize.datetimepicker" + l.id, e.proxy(f, this)), l.isInput || e(document).on("mousedown.datetimepicker" + l.id, e.proxy(l.hide, this))
                },
                $ = function() {
                    l.widget.off("click", ".datepicker *", l.click), l.widget.off("click", "[data-action]"), l.widget.off("mousedown", l.stopEvent), l.options.pickDate && l.options.pickTime && l.widget.off("click.togglePicker"), l.isInput ? l.element.off({
                        focus: l.show,
                        change: l.change
                    }) : (l.element.off({
                        change: l.change
                    }, "input"), l.component ? l.component.off("click", l.show) : l.element.off("click", l.show))
                },
                P = function() {
                    e(window).off("resize.datetimepicker" + l.id), l.isInput || e(document).off("mousedown.datetimepicker" + l.id)
                },
                I = function() {
                    if (l.element) {
                        var t, n = l.element.parents(),
                            i = !1;
                        for (t = 0; t < n.length; t++)
                            if ("fixed" == e(n[t]).css("position")) {
                                i = !0;
                                break
                            }
                        return i
                    }
                    return !1
                },
                N = function() {
                    o.lang(l.options.language);
                    var e = "";
                    l.unset || (e = o(l.date).format(l.format)), d().val(e), l.element.data("date", e), l.options.pickTime || l.hide()
                },
                z = function(e, t, n) {
                    o.lang(l.options.language);
                    var i;
                    return "add" == e ? (i = o(l.date), 23 == i.hours() && i.add(n, t), i.add(n, t)) : i = o(l.date).subtract(n, t), H(o(i.subtract(n, t))) || H(i) ? void h(i.format(l.format)) : ("add" == e ? l.date.add(n, t) : l.date.subtract(n, t), void(l.unset = !1))
                },
                H = function(e, t) {
                    o.lang(l.options.language);
                    var n = l.options.maxDate,
                        i = l.options.minDate;
                    return t && (n = o(n).endOf(t), i = o(i).startOf(t)), e.isAfter(n) || e.isBefore(i) ? !0 : l.options.disabledDates === !1 ? !1 : l.options.disabledDates[o(e).format("YYYY-MM-DD")] === !0
                },
                O = function(e) {
                    return o.lang(l.options.language), l.options.enabledDates === !1 ? !0 : l.options.enabledDates[o(e).format("YYYY-MM-DD")] === !0
                },
                L = function(e) {
                    var t = {},
                        n = 0;
                    for (i = 0; i < e.length; i++) dDate = o(e[i]), dDate.isValid() && (t[dDate.format("YYYY-MM-DD")] = !0, n++);
                    return n > 0 ? t : !1
                },
                F = function(e) {
                    return e = e.toString(), e.length >= 2 ? e : "0" + e
                },
                Y = function() {
                    if (l.options.pickDate && l.options.pickTime) {
                        var e = "";
                        return e = '<div class="bootstrap-datetimepicker-widget' + (l.options.sideBySide ? " timepicker-sbs" : "") + ' dropdown-menu" style="z-index:9999 !important;">', e += l.options.sideBySide ? '<div class="row"><div class="col-sm-6 datepicker">' + W.template + '</div><div class="col-sm-6 timepicker">' + q.getTemplate() + "</div></div>" : '<ul class="list-unstyled"><li' + (l.options.collapse ? ' class="collapse in"' : "") + '><div class="datepicker">' + W.template + '</div></li><li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="' + l.options.icons.time + '"></span></a></li><li' + (l.options.collapse ? ' class="collapse"' : "") + '><div class="timepicker">' + q.getTemplate() + "</div></li></ul>", e += "</div>"
                    }
                    return l.options.pickTime ? '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">' + q.getTemplate() + "</div></div>" : '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">' + W.template + "</div></div>"
                },
                W = {
                    modes: [{
                        clsName: "days",
                        navFnc: "month",
                        navStep: 1
                    }, {
                        clsName: "months",
                        navFnc: "year",
                        navStep: 1
                    }, {
                        clsName: "years",
                        navFnc: "year",
                        navStep: 10
                    }],
                    headTemplate: '<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',
                    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
                },
                q = {
                    hourTemplate: '<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>',
                    minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',
                    secondTemplate: '<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>'
                };
            W.template = '<div class="datepicker-days"><table class="table-condensed">' + W.headTemplate + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + W.headTemplate + W.contTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + W.headTemplate + W.contTemplate + "</table></div>", q.getTemplate = function() {
                return '<div class="timepicker-picker"><table class="table-condensed"><tr><td><a href="#" class="btn" data-action="incrementHours"><span class="' + l.options.icons.up + '"></span></a></td><td class="separator"></td><td>' + (l.options.useMinutes ? '<a href="#" class="btn" data-action="incrementMinutes"><span class="' + l.options.icons.up + '"></span></a>' : "") + "</td>" + (l.options.useSeconds ? '<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="' + l.options.icons.up + '"></span></a></td>' : "") + (l.use24hours ? "" : '<td class="separator"></td>') + "</tr><tr><td>" + q.hourTemplate + '</td> <td class="separator">:</td><td>' + (l.options.useMinutes ? q.minuteTemplate : '<span class="timepicker-minute">00</span>') + "</td> " + (l.options.useSeconds ? '<td class="separator">:</td><td>' + q.secondTemplate + "</td>" : "") + (l.use24hours ? "" : '<td class="separator"></td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>') + '</tr><tr><td><a href="#" class="btn" data-action="decrementHours"><span class="' + l.options.icons.down + '"></span></a></td><td class="separator"></td><td>' + (l.options.useMinutes ? '<a href="#" class="btn" data-action="decrementMinutes"><span class="' + l.options.icons.down + '"></span></a>' : "") + "</td>" + (l.options.useSeconds ? '<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="' + l.options.icons.down + '"></span></a></td>' : "") + (l.use24hours ? "" : '<td class="separator"></td>') + '</tr></table></div><div class="timepicker-hours" data-action="selectHour"><table class="table-condensed"></table></div><div class="timepicker-minutes" data-action="selectMinute"><table class="table-condensed"></table></div>' + (l.options.useSeconds ? '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>' : "")
            }, l.destroy = function() {
                $(), P(), l.widget.remove(), l.element.removeData("DateTimePicker"), l.component && l.component.removeData("DateTimePicker")
            }, l.show = function(e) {
                if (l.options.useCurrent && "" == d().val())
                    if (1 !== l.options.minuteStepping) {
                        var t = o(),
                            n = l.options.minuteStepping;
                        t.minutes(Math.round(t.minutes() / n) * n % 60).seconds(0), l.setValue(t.format(l.format))
                    } else l.setValue(o().format(l.format));
                l.widget.hasClass("picker-open") ? (l.widget.hide(), l.widget.removeClass("picker-open")) : (l.widget.show(), l.widget.addClass("picker-open")), l.height = l.component ? l.component.outerHeight() : l.element.outerHeight(), f(), l.element.trigger({
                    type: "dp.show",
                    date: o(l.date)
                }), M(), e && S(e)
            }, l.disable = function() {
                var e = l.element.find("input");
                e.prop("disabled") || (e.prop("disabled", !0), $())
            }, l.enable = function() {
                var e = l.element.find("input");
                e.prop("disabled") && (e.prop("disabled", !1), j())
            }, l.hide = function(t) {
                if (!t || !e(t.target).is(l.element.attr("id"))) {
                    var n, i, a = l.widget.find(".collapse");
                    for (n = 0; n < a.length; n++)
                        if (i = a.eq(n).data("collapse"), i && i.transitioning) return;
                    l.widget.hide(), l.widget.removeClass("picker-open"), l.viewMode = l.startViewMode, E(), l.element.trigger({
                        type: "dp.hide",
                        date: o(l.date)
                    }), P()
                }
            }, l.setValue = function(e) {
                o.lang(l.options.language), e ? l.unset = !1 : (l.unset = !0, N()), o.isMoment(e) || (e = e instanceof Date ? o(e) : o(e, l.format)), e.isValid() ? (l.date = e, N(), l.viewDate = o({
                    y: l.date.year(),
                    M: l.date.month()
                }), y(), k()) : h(e)
            }, l.getDate = function() {
                return l.unset ? null : l.date
            }, l.setDate = function(e) {
                var t = o(l.date);
                l.setValue(e ? e : null), p(t, "function")
            }, l.setDisabledDates = function(e) {
                l.options.disabledDates = L(e), l.viewDate && m()
            }, l.setEnabledDates = function(e) {
                l.options.enabledDates = L(e), l.viewDate && m()
            }, l.setMaxDate = function(e) {
                void 0 != e && (l.options.maxDate = o(e), l.viewDate && m())
            }, l.setMinDate = function(e) {
                void 0 != e && (l.options.minDate = o(e), l.viewDate && m())
            }, c()
        };
    e.fn.datetimepicker = function(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("DateTimePicker");
            i || n.data("DateTimePicker", new a(this, t))
        })
    }, e.fn.datetimepicker.defaults = {
        pickDate: !0,
        pickTime: !0,
        useMinutes: !0,
        useSeconds: !1,
        useCurrent: !0,
        minuteStepping: 1,
        minDate: new o({
            y: 1900
        }),
        maxDate: (new o).add(100, "y"),
        showToday: !0,
        collapse: !0,
        language: "en",
        defaultDate: "",
        disabledDates: !1,
        enabledDates: !1,
        icons: {},
        useStrict: !1,
        direction: "auto",
        sideBySide: !1,
        daysOfWeekDisabled: !1
    }
}),
function() {}.call(this),
function() {
    $(function() {
        return $(".new-task-btn").click(function(e) {
            var t, n, i, o;
            return t = $(this).parent(), n = t.siblings(".body").text(), $("#task_title").val(n), i = window.delay / 3600, o = i > 1 ? "s" : "", $("#task_due_at").val("in " + i + " hour" + o), e.preventDefault()
        }), $(".time-extenders > a").click(function(e) {
            var t, n, i, o, a;
            return a = parseInt($("#task_due_at").data("timestamp")), a || (a = Date.now()), t = parseInt($(this).data("delta")), i = a + t, $("#task_due_at").data("timestamp", i), n = t / 3600, o = n > 1 ? "s" : "", $("#task_due_at").val("in " + n + " hour" + o), e.preventDefault()
        })
    })
}.call(this),
function() {
    $(function() {
        var e, t;
        return t = function(e) {
            return $.ajax("/p/" + window.ping_slug, {
                type: "put",
                data: {
                    latitude: e.coords.latitude,
                    longitude: e.coords.longitude,
                    accuracy: e.coords.accuracy
                }
            })
        }, e = function() {
            return navigator.geolocation ? navigator.geolocation.getCurrentPosition(t) : void 0
        }, window.showPingDialog ? e() : void 0
    })
}.call(this),
function() {
    window.promises = [], $(function() {
        var e, t, n;
        return $.wait = function(e) {
            var t;
            return t = $.Deferred(function(t) {
                return setTimeout(t.resolve, e)
            }), window.promises.push(t), t
        }, t = {
            shopping: [
                [1e3, "right", "Hi Jarvis, I want the best headphones for under $300"],
                [1e3, "left", "Okay, just a minute. Checking now."],
                [2500, "left", "The best choice is the Bose QC-15. Best price is $295 on Amazon."],
                [2e3, "left", "Shall I have them shipped to you?"],
                [2e3, "right", "Yes please!"],
                [1e3, "left", "Great, they'll be at your office tomorrow."],
                [1e3, "right", "Awesome, you're the best"]
            ],
            gifts: [
                [1e3, "right", "Hey! I'm about to place an order but I wanted to check on shipping times. How long does this item take to ship?"],
                [3e3, "left", "Hey! Thanks for reaching out. We ship out all orders next day with USPS."],
                [3e3, "left", "Which means you should have it within 3-5 days after it ships out."],
                [3e3, "right", "Ok! Thanks so much."],
                 [3e3, "right", "I'm so eccited to try out the  product."],
                [4e3, "left", "Of course. Let me know if I can help with anything else."],
            ],
            reservations: [
                [1e3, "right", "Hey! I saw great reviews for your restaurant and just wanted to see if you all had any vegetarian options?"],
                [1e3, "left", "Thanks for reaching out! Let me check."],
                [2e3, "left", "Yes! We have a homemade veggie burger and we can make any of our pasta dishes vegetarian."],
                [1e3, "left", "Would you like to make a reservation for tonight?"],
                [2e3, "right", "That's perfect! I'm craving a veggie burger. Can I do 8pm for 2?"],
                [2e3, "left", "Of course! Can I just get  name for the reservation?"],
                [1e3, "right", "Alice"],
                [3e3, "left", "All set, table for 2 under your name at 8pm."]
            ],
            travel: [
                [1e3, "right", "Could you look up flights back to DC for BOO?"],
                [2e3, "left", "Sure thing. I'll check OneWorld flights first since you're a member."],
                [3e3, "left", "Okay, have SFO -> DCA on Virgin, departing at 8:30am on 11/23 and returning at 10a on 11/30."],
                [2e3, "right", "I have something on the 23rd. Need a flight departing on the 24th"],
                [2e3, "left", "Okay, how about SFO -> IAD on Virgin, departing at 9am on 11/24 and returning at 10a on 11/30?"],
                [2e3, "right", "Perfect. How much?"],
                [1e3, "left", "$523 r/t including tax."],
                [2e3, "right", "Okay, book it with my miles."],
                [1e3, "left", "On it now!"],
                [3e3, "left", "Confirmed. Have a great time back home!"]
            ]
        }, e = function(e, t) {
            var n;
            return n = $(".imessage-conversation"), n.append("<div class='mb b-" + e + "'>" + t + "</div>"), n.animate({
                scrollTop: n[0].scrollHeight
            }, 500)
        }, n = function(n) {
            var i, o, a, r, s, l, c, d, u, f, p;
            for (u = window.promises, s = 0, c = u.length; c > s; s++) r = u[s], r.reject();
            for ($(".imessage-conversation").children(".mb").remove(), o = 0, f = t[n], p = [], a = l = 0, d = f.length; d > l; a = ++l) i = f[a], p.push(function(t) {
                return o += t[0], $.wait(o).then(function() {
                    return e(t[1], t[2])
                })
            }(i, a));
            return p
        }, $(".demo-selector").click(function(e) {
            var t;
            return e.preventDefault(), t = $(this).attr("href"), t = t.slice(1, +t.length + 1 || 9e9), window.example = t + "", n(t)
        }), n("gifts")
    })
}.call(this),
function() {
    $(function() {
        return $("tr.task_row > td.click").click(function() {
            return window.location = "/internal/users/" + $(this).parent().data("url")
        }), $("li.operator > a.op").click(function(e) {
            var t, n;
            return e.preventDefault(), $(this).parent().parent().parent().find("button.btn-default").find("span.current_op").text($(this).text()), n = $(this).parent().parent().parent().parent().parent().data("task_id"), t = $(this).attr("href"), $.ajax("/internal/tasks/" + n, {
                type: "put",
                data: {
                    operator_slug: t
                }
            })
        }), $("ul.task-options > li.status > a").click(function(e) {
            var t, n;
            return e.preventDefault(), n = $(this).parent().parent().parent().parent().parent().data("task_id"), t = $(this).attr("href"), $.ajax("/internal/tasks/" + n + "/", {
                type: "put",
                dataType: "json",
                data: {
                    status: t
                },
                success: function() {
                    return location.reload()
                }
            })
        }), $("ul.task-options > li.extend > a").click(function(e) {
            var t, n;
            return e.preventDefault(), n = $(this).parent().parent().parent().parent().parent().data("task_id"), t = $(this).attr("href"), $.ajax("/internal/tasks/" + n + "/", {
                type: "put",
                dataType: "json",
                data: {
                    extension: t
                },
                success: function() {
                    return location.reload()
                }
            })
        })
    })
}.call(this),
function() {
    $(function() {
        var e;
        return e = jstz.determine_timezone()
    })
}.call(this),
function() {
    $(function() {
        var e;
        return $("#user_olson_timezone").change(function() {
            return $(this).parent().submit()
        }), $(".list-group-item").click(function() {
            var e;
            return $(".list-group-item").removeClass("active"), $(this).addClass("active"), window.location.hash = $(this).attr("href"), $(".tab-pane").hide(), e = window.location.hash.replace("#", ""), $(".tab-pane#" + e).show()
        }), 0 === window.location.pathname.indexOf("/users") && window.location.hash.length > 0 ? ($(".list-group-item").removeClass("active"), e = window.location.hash.replace("#", "") || "account", $('a[href="#' + e + '"]').addClass("active"), $(".tab-pane").hide(), $(".tab-pane#" + e).show()) : void 0
    })
}.call(this),
function() {
    $(function() {
        return $(".waitlist_activate_link").click(function(e) {
            var t, n;
            return e.preventDefault(), $(this).html("Activating..."), n = encodeURIComponent($(this).data("email")), t = $(this), $.ajax({
                url: "/internal/waitlists/activate?email=" + n,
                dataType: "json",
                success: function() {
                    return t.parent().html("Emailed")
                }
            }), !1
        }), $(".waitlist_delete_link").click(function(e) {
            var t, n;
            return e.preventDefault(), $(this).html("Deleting..."), n = $(this).data("id"), t = $(this), $.ajax({
                url: "/internal/waitlists/delete/?wid=" + n,
                success: function() {
                    return t.parent().parent().parent().remove()
                }
            })
        })
    })
}.call(this),
function() {
    $(document).ready(function() {
        return $("#waitlist form").on("ajax:beforeSend", function() {
            return $("#waitlist").on("hidden.bs.modal", function() {
                return $("#waitlist-confirmation").modal("show")
            }), $(".modal-footer input").prop("disabled", !0).val("Joining...")
        }), $("#waitlist form").on("ajax:success", function() {
            return $(".modal-footer input").prop("disabled", !1).val("Join Waitlist"), $("#waitlist").modal("hide")
        }), $("#datetimepicker").datetimepicker()
    })
}.call(this);
