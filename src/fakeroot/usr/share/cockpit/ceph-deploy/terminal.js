! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 487)
}({
    0: function(e, t, r) {
        "use strict";
        e.exports = r(261)
    },
    1: function(e, t, r) {
        "use strict";

        function n(...e) {
            const t = [],
                r = {}.hasOwnProperty;
            return e.filter(Boolean).forEach(e => {
                const i = typeof e;
                if ("string" === i || "number" === i) t.push(e);
                else if (Array.isArray(e) && e.length) {
                    const r = n(...e);
                    r && t.push(r)
                } else if ("object" === i)
                    for (const n in e) r.call(e, n) && e[n] && t.push(n)
            }), t.join(" ")
        }
        r.d(t, "a", (function() {
            return n
        }))
    },
    10: function(e, t, r) {
        e.exports = r(265)()
    },
    13: function(e, t, r) {
        "use strict";
        t.__esModule = !0, r(268), t.default = {
            button: "pf-c-button",
            buttonIcon: "pf-c-button__icon",
            buttonProgress: "pf-c-button__progress",
            modifiers: {
                active: "pf-m-active",
                block: "pf-m-block",
                small: "pf-m-small",
                primary: "pf-m-primary",
                displayLg: "pf-m-display-lg",
                secondary: "pf-m-secondary",
                tertiary: "pf-m-tertiary",
                link: "pf-m-link",
                danger: "pf-m-danger",
                warning: "pf-m-warning",
                inline: "pf-m-inline",
                control: "pf-m-control",
                expanded: "pf-m-expanded",
                plain: "pf-m-plain",
                disabled: "pf-m-disabled",
                ariaDisabled: "pf-m-aria-disabled",
                progress: "pf-m-progress",
                inProgress: "pf-m-in-progress",
                start: "pf-m-start",
                end: "pf-m-end",
                overpassFont: "pf-m-overpass-font"
            },
            spinner: "pf-c-spinner"
        }
    },
    14: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return n
        })), r.d(t, "c", (function() {
            return i
        })), r.d(t, "a", (function() {
            return o
        })), r.d(t, "d", (function() {
            return s
        }));
        const n = {
                ARROW_UP: 38,
                ARROW_DOWN: 40,
                ESCAPE_KEY: 27,
                TAB: 9,
                ENTER: 13,
                SPACE: 32
            },
            i = {
                RIGHT: "right",
                LEFT: "left",
                BOTH: "both",
                NONE: "none"
            },
            o = {
                UP: "up",
                DOWN: "down",
                RIGHT: "right",
                LEFT: "left"
            };
        var s;
        ! function(e) {
            e.success = "success", e.error = "error", e.warning = "warning", e.default = "default"
        }(s || (s = {}))
    },
    2: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return n
        }));

        function n(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
            }
            return r
        }
    },
    20: function(e, t, r) {
        "use strict";
        ! function e() {
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
                0;
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (e) {
                    console.error(e)
                }
            }
        }(), e.exports = r(262)
    },
    254: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return f
        }));
        var n, i = r(2),
            o = r(0),
            s = r(28),
            a = r.n(s),
            l = r(1),
            c = r(8),
            u = r(78);
        ! function(e) {
            e.separator = "separator", e["bulk-select"] = "bulk-select", e["overflow-menu"] = "overflow-menu", e.pagination = "pagination", e["search-filter"] = "search-filter", e.label = "label", e["chip-group"] = "chip-group", e["expand-all"] = "expand-all"
        }(n || (n = {}));
        const f = e => {
            var {
                className: t,
                variant: r,
                visibility: s,
                visiblity: f,
                alignment: h,
                spacer: d,
                id: p,
                children: _,
                isAllExpanded: v
            } = e, m = Object(i.a)(e, ["className", "variant", "visibility", "visiblity", "alignment", "spacer", "id", "children", "isAllExpanded"]);
            return r === n.separator ? o.createElement(u.a, Object.assign({
                className: Object(l.a)(a.a.modifiers.vertical, t)
            }, m)) : (void 0 !== f && console.warn("The ToolbarItem visiblity prop has been deprecated. Please use the correctly spelled visibility prop instead."), o.createElement("div", Object.assign({
                className: Object(l.a)(a.a.toolbarItem, r && a.a.modifiers[Object(c.k)(r)], v && a.a.modifiers.expanded, Object(c.e)(s || f, a.a), Object(c.e)(h, a.a), Object(c.e)(d, a.a), t)
            }, "label" === r && {
                "aria-hidden": !0
            }, {
                id: p
            }, m), _))
        };
        f.displayName = "ToolbarItem"
    },
    258: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return o
        }));
        var n = r(0);
        let i = 0;
        class o extends n.Component {
            constructor() {
                super(...arguments), this.id = `${this.props.prefix}${i++}`
            }
            render() {
                return this.props.children(this.id)
            }
        }
        o.displayName = "GenerateId", o.defaultProps = {
            prefix: "pf-random-id-"
        }
    },
    261: function(e, t, r) {
        "use strict";
        /** @license React v16.14.0
         * react.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var n = r(93),
            i = "function" == typeof Symbol && Symbol.for,
            o = i ? Symbol.for("react.element") : 60103,
            s = i ? Symbol.for("react.portal") : 60106,
            a = i ? Symbol.for("react.fragment") : 60107,
            l = i ? Symbol.for("react.strict_mode") : 60108,
            c = i ? Symbol.for("react.profiler") : 60114,
            u = i ? Symbol.for("react.provider") : 60109,
            f = i ? Symbol.for("react.context") : 60110,
            h = i ? Symbol.for("react.forward_ref") : 60112,
            d = i ? Symbol.for("react.suspense") : 60113,
            p = i ? Symbol.for("react.memo") : 60115,
            _ = i ? Symbol.for("react.lazy") : 60116,
            v = "function" == typeof Symbol && Symbol.iterator;

        function m(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        var g = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            },
            y = {};

        function b(e, t, r) {
            this.props = e, this.context = t, this.refs = y, this.updater = r || g
        }

        function S() {}

        function C(e, t, r) {
            this.props = e, this.context = t, this.refs = y, this.updater = r || g
        }
        b.prototype.isReactComponent = {}, b.prototype.setState = function(e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e) throw Error(m(85));
            this.updater.enqueueSetState(this, e, t, "setState")
        }, b.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }, S.prototype = b.prototype;
        var w = C.prototype = new S;
        w.constructor = C, n(w, b.prototype), w.isPureReactComponent = !0;
        var E = {
                current: null
            },
            x = Object.prototype.hasOwnProperty,
            k = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function T(e, t, r) {
            var n, i = {},
                s = null,
                a = null;
            if (null != t)
                for (n in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (s = "" + t.key), t) x.call(t, n) && !k.hasOwnProperty(n) && (i[n] = t[n]);
            var l = arguments.length - 2;
            if (1 === l) i.children = r;
            else if (1 < l) {
                for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
                i.children = c
            }
            if (e && e.defaultProps)
                for (n in l = e.defaultProps) void 0 === i[n] && (i[n] = l[n]);
            return {
                $$typeof: o,
                type: e,
                key: s,
                ref: a,
                props: i,
                _owner: E.current
            }
        }

        function L(e) {
            return "object" == typeof e && null !== e && e.$$typeof === o
        }
        var O = /\/+/g,
            R = [];

        function A(e, t, r, n) {
            if (R.length) {
                var i = R.pop();
                return i.result = e, i.keyPrefix = t, i.func = r, i.context = n, i.count = 0, i
            }
            return {
                result: e,
                keyPrefix: t,
                func: r,
                context: n,
                count: 0
            }
        }

        function P(e) {
            e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > R.length && R.push(e)
        }

        function M(e, t, r) {
            return null == e ? 0 : function e(t, r, n, i) {
                var a = typeof t;
                "undefined" !== a && "boolean" !== a || (t = null);
                var l = !1;
                if (null === t) l = !0;
                else switch (a) {
                    case "string":
                    case "number":
                        l = !0;
                        break;
                    case "object":
                        switch (t.$$typeof) {
                            case o:
                            case s:
                                l = !0
                        }
                }
                if (l) return n(i, t, "" === r ? "." + D(t, 0) : r), 1;
                if (l = 0, r = "" === r ? "." : r + ":", Array.isArray(t))
                    for (var c = 0; c < t.length; c++) {
                        var u = r + D(a = t[c], c);
                        l += e(a, u, n, i)
                    } else if (null === t || "object" != typeof t ? u = null : u = "function" == typeof(u = v && t[v] || t["@@iterator"]) ? u : null, "function" == typeof u)
                        for (t = u.call(t), c = 0; !(a = t.next()).done;) l += e(a = a.value, u = r + D(a, c++), n, i);
                    else if ("object" === a) throw n = "" + t, Error(m(31, "[object Object]" === n ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, ""));
                return l
            }(e, "", t, r)
        }

        function D(e, t) {
            return "object" == typeof e && null !== e && null != e.key ? function(e) {
                var t = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + ("" + e).replace(/[=:]/g, (function(e) {
                    return t[e]
                }))
            }(e.key) : t.toString(36)
        }

        function I(e, t) {
            e.func.call(e.context, t, e.count++)
        }

        function F(e, t, r) {
            var n = e.result,
                i = e.keyPrefix;
            e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? B(e, n, r, (function(e) {
                return e
            })) : null != e && (L(e) && (e = function(e, t) {
                return {
                    $$typeof: o,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                }
            }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(O, "$&/") + "/") + r)), n.push(e))
        }

        function B(e, t, r, n, i) {
            var o = "";
            null != r && (o = ("" + r).replace(O, "$&/") + "/"), M(e, F, t = A(t, o, n, i)), P(t)
        }
        var H = {
            current: null
        };

        function N() {
            var e = H.current;
            if (null === e) throw Error(m(321));
            return e
        }
        var j = {
            ReactCurrentDispatcher: H,
            ReactCurrentBatchConfig: {
                suspense: null
            },
            ReactCurrentOwner: E,
            IsSomeRendererActing: {
                current: !1
            },
            assign: n
        };
        t.Children = {
            map: function(e, t, r) {
                if (null == e) return e;
                var n = [];
                return B(e, n, null, t, r), n
            },
            forEach: function(e, t, r) {
                if (null == e) return e;
                M(e, I, t = A(null, null, t, r)), P(t)
            },
            count: function(e) {
                return M(e, (function() {
                    return null
                }), null)
            },
            toArray: function(e) {
                var t = [];
                return B(e, t, null, (function(e) {
                    return e
                })), t
            },
            only: function(e) {
                if (!L(e)) throw Error(m(143));
                return e
            }
        }, t.Component = b, t.Fragment = a, t.Profiler = c, t.PureComponent = C, t.StrictMode = l, t.Suspense = d, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, t.cloneElement = function(e, t, r) {
            if (null == e) throw Error(m(267, e));
            var i = n({}, e.props),
                s = e.key,
                a = e.ref,
                l = e._owner;
            if (null != t) {
                if (void 0 !== t.ref && (a = t.ref, l = E.current), void 0 !== t.key && (s = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                for (u in t) x.call(t, u) && !k.hasOwnProperty(u) && (i[u] = void 0 === t[u] && void 0 !== c ? c[u] : t[u])
            }
            var u = arguments.length - 2;
            if (1 === u) i.children = r;
            else if (1 < u) {
                c = Array(u);
                for (var f = 0; f < u; f++) c[f] = arguments[f + 2];
                i.children = c
            }
            return {
                $$typeof: o,
                type: e.type,
                key: s,
                ref: a,
                props: i,
                _owner: l
            }
        }, t.createContext = function(e, t) {
            return void 0 === t && (t = null), (e = {
                $$typeof: f,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }).Provider = {
                $$typeof: u,
                _context: e
            }, e.Consumer = e
        }, t.createElement = T, t.createFactory = function(e) {
            var t = T.bind(null, e);
            return t.type = e, t
        }, t.createRef = function() {
            return {
                current: null
            }
        }, t.forwardRef = function(e) {
            return {
                $$typeof: h,
                render: e
            }
        }, t.isValidElement = L, t.lazy = function(e) {
            return {
                $$typeof: _,
                _ctor: e,
                _status: -1,
                _result: null
            }
        }, t.memo = function(e, t) {
            return {
                $$typeof: p,
                type: e,
                compare: void 0 === t ? null : t
            }
        }, t.useCallback = function(e, t) {
            return N().useCallback(e, t)
        }, t.useContext = function(e, t) {
            return N().useContext(e, t)
        }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
            return N().useEffect(e, t)
        }, t.useImperativeHandle = function(e, t, r) {
            return N().useImperativeHandle(e, t, r)
        }, t.useLayoutEffect = function(e, t) {
            return N().useLayoutEffect(e, t)
        }, t.useMemo = function(e, t) {
            return N().useMemo(e, t)
        }, t.useReducer = function(e, t, r) {
            return N().useReducer(e, t, r)
        }, t.useRef = function(e) {
            return N().useRef(e)
        }, t.useState = function(e) {
            return N().useState(e)
        }, t.version = "16.14.0"
    },
    262: function(e, t, r) {
        "use strict";
        /** @license React v16.14.0
         * react-dom.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var n = r(0),
            i = r(93),
            o = r(263);

        function s(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        if (!n) throw Error(s(227));

        function a(e, t, r, n, i, o, s, a, l) {
            var c = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(r, c)
            } catch (e) {
                this.onError(e)
            }
        }
        var l = !1,
            c = null,
            u = !1,
            f = null,
            h = {
                onError: function(e) {
                    l = !0, c = e
                }
            };

        function d(e, t, r, n, i, o, s, u, f) {
            l = !1, c = null, a.apply(h, arguments)
        }
        var p = null,
            _ = null,
            v = null;

        function m(e, t, r) {
            var n = e.type || "unknown-event";
            e.currentTarget = v(r),
                function(e, t, r, n, i, o, a, h, p) {
                    if (d.apply(this, arguments), l) {
                        if (!l) throw Error(s(198));
                        var _ = c;
                        l = !1, c = null, u || (u = !0, f = _)
                    }
                }(n, t, void 0, e), e.currentTarget = null
        }
        var g = null,
            y = {};

        function b() {
            if (g)
                for (var e in y) {
                    var t = y[e],
                        r = g.indexOf(e);
                    if (!(-1 < r)) throw Error(s(96, e));
                    if (!C[r]) {
                        if (!t.extractEvents) throw Error(s(97, e));
                        for (var n in C[r] = t, r = t.eventTypes) {
                            var i = void 0,
                                o = r[n],
                                a = t,
                                l = n;
                            if (w.hasOwnProperty(l)) throw Error(s(99, l));
                            w[l] = o;
                            var c = o.phasedRegistrationNames;
                            if (c) {
                                for (i in c) c.hasOwnProperty(i) && S(c[i], a, l);
                                i = !0
                            } else o.registrationName ? (S(o.registrationName, a, l), i = !0) : i = !1;
                            if (!i) throw Error(s(98, n, e))
                        }
                    }
                }
        }

        function S(e, t, r) {
            if (E[e]) throw Error(s(100, e));
            E[e] = t, x[e] = t.eventTypes[r].dependencies
        }
        var C = [],
            w = {},
            E = {},
            x = {};

        function k(e) {
            var t, r = !1;
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    var n = e[t];
                    if (!y.hasOwnProperty(t) || y[t] !== n) {
                        if (y[t]) throw Error(s(102, t));
                        y[t] = n, r = !0
                    }
                } r && b()
        }
        var T = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
            L = null,
            O = null,
            R = null;

        function A(e) {
            if (e = _(e)) {
                if ("function" != typeof L) throw Error(s(280));
                var t = e.stateNode;
                t && (t = p(t), L(e.stateNode, e.type, t))
            }
        }

        function P(e) {
            O ? R ? R.push(e) : R = [e] : O = e
        }

        function M() {
            if (O) {
                var e = O,
                    t = R;
                if (R = O = null, A(e), t)
                    for (e = 0; e < t.length; e++) A(t[e])
            }
        }

        function D(e, t) {
            return e(t)
        }

        function I(e, t, r, n, i) {
            return e(t, r, n, i)
        }

        function F() {}
        var B = D,
            H = !1,
            N = !1;

        function j() {
            null === O && null === R || (F(), M())
        }

        function U(e, t, r) {
            if (N) return e(t, r);
            N = !0;
            try {
                return B(e, t, r)
            } finally {
                N = !1, j()
            }
        }
        var W = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            z = Object.prototype.hasOwnProperty,
            q = {},
            K = {};

        function V(e, t, r, n, i, o) {
            this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = o
        }
        var X = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
            X[e] = new V(e, 0, !1, e, null, !1)
        })), [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"]
        ].forEach((function(e) {
            var t = e[0];
            X[t] = new V(t, 1, !1, e[1], null, !1)
        })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
            X[e] = new V(e, 2, !1, e.toLowerCase(), null, !1)
        })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
            X[e] = new V(e, 2, !1, e, null, !1)
        })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
            X[e] = new V(e, 3, !1, e.toLowerCase(), null, !1)
        })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
            X[e] = new V(e, 3, !0, e, null, !1)
        })), ["capture", "download"].forEach((function(e) {
            X[e] = new V(e, 4, !1, e, null, !1)
        })), ["cols", "rows", "size", "span"].forEach((function(e) {
            X[e] = new V(e, 6, !1, e, null, !1)
        })), ["rowSpan", "start"].forEach((function(e) {
            X[e] = new V(e, 5, !1, e.toLowerCase(), null, !1)
        }));
        var G = /[\-:]([a-z])/g;

        function $(e) {
            return e[1].toUpperCase()
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
            var t = e.replace(G, $);
            X[t] = new V(t, 1, !1, e, null, !1)
        })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
            var t = e.replace(G, $);
            X[t] = new V(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
        })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
            var t = e.replace(G, $);
            X[t] = new V(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
        })), ["tabIndex", "crossOrigin"].forEach((function(e) {
            X[e] = new V(e, 1, !1, e.toLowerCase(), null, !1)
        })), X.xlinkHref = new V("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(e) {
            X[e] = new V(e, 1, !1, e.toLowerCase(), null, !0)
        }));
        var Y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

        function Q(e, t, r, n) {
            var i = X.hasOwnProperty(t) ? X[t] : null;
            (null !== i ? 0 === i.type : !n && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, r, n) {
                if (null == t || function(e, t, r, n) {
                        if (null !== r && 0 === r.type) return !1;
                        switch (typeof t) {
                            case "function":
                            case "symbol":
                                return !0;
                            case "boolean":
                                return !n && (null !== r ? !r.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                            default:
                                return !1
                        }
                    }(e, t, r, n)) return !0;
                if (n) return !1;
                if (null !== r) switch (r.type) {
                    case 3:
                        return !t;
                    case 4:
                        return !1 === t;
                    case 5:
                        return isNaN(t);
                    case 6:
                        return isNaN(t) || 1 > t
                }
                return !1
            }(t, r, i, n) && (r = null), n || null === i ? function(e) {
                return !!z.call(K, e) || !z.call(q, e) && (W.test(e) ? K[e] = !0 : (q[e] = !0, !1))
            }(t) && (null === r ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = null === r ? 3 !== i.type && "" : r : (t = i.attributeName, n = i.attributeNamespace, null === r ? e.removeAttribute(t) : (r = 3 === (i = i.type) || 4 === i && !0 === r ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
        }
        Y.hasOwnProperty("ReactCurrentDispatcher") || (Y.ReactCurrentDispatcher = {
            current: null
        }), Y.hasOwnProperty("ReactCurrentBatchConfig") || (Y.ReactCurrentBatchConfig = {
            suspense: null
        });
        var Z = /^(.*)[\\\/]/,
            J = "function" == typeof Symbol && Symbol.for,
            ee = J ? Symbol.for("react.element") : 60103,
            te = J ? Symbol.for("react.portal") : 60106,
            re = J ? Symbol.for("react.fragment") : 60107,
            ne = J ? Symbol.for("react.strict_mode") : 60108,
            ie = J ? Symbol.for("react.profiler") : 60114,
            oe = J ? Symbol.for("react.provider") : 60109,
            se = J ? Symbol.for("react.context") : 60110,
            ae = J ? Symbol.for("react.concurrent_mode") : 60111,
            le = J ? Symbol.for("react.forward_ref") : 60112,
            ce = J ? Symbol.for("react.suspense") : 60113,
            ue = J ? Symbol.for("react.suspense_list") : 60120,
            fe = J ? Symbol.for("react.memo") : 60115,
            he = J ? Symbol.for("react.lazy") : 60116,
            de = J ? Symbol.for("react.block") : 60121,
            pe = "function" == typeof Symbol && Symbol.iterator;

        function _e(e) {
            return null === e || "object" != typeof e ? null : "function" == typeof(e = pe && e[pe] || e["@@iterator"]) ? e : null
        }

        function ve(e) {
            if (null == e) return null;
            if ("function" == typeof e) return e.displayName || e.name || null;
            if ("string" == typeof e) return e;
            switch (e) {
                case re:
                    return "Fragment";
                case te:
                    return "Portal";
                case ie:
                    return "Profiler";
                case ne:
                    return "StrictMode";
                case ce:
                    return "Suspense";
                case ue:
                    return "SuspenseList"
            }
            if ("object" == typeof e) switch (e.$$typeof) {
                case se:
                    return "Context.Consumer";
                case oe:
                    return "Context.Provider";
                case le:
                    var t = e.render;
                    return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                case fe:
                    return ve(e.type);
                case de:
                    return ve(e.render);
                case he:
                    if (e = 1 === e._status ? e._result : null) return ve(e)
            }
            return null
        }

        function me(e) {
            var t = "";
            do {
                e: switch (e.tag) {
                    case 3:
                    case 4:
                    case 6:
                    case 7:
                    case 10:
                    case 9:
                        var r = "";
                        break e;
                    default:
                        var n = e._debugOwner,
                            i = e._debugSource,
                            o = ve(e.type);
                        r = null, n && (r = ve(n.type)), n = o, o = "", i ? o = " (at " + i.fileName.replace(Z, "") + ":" + i.lineNumber + ")" : r && (o = " (created by " + r + ")"), r = "\n    in " + (n || "Unknown") + o
                }
                t += r,
                e = e.return
            } while (e);
            return t
        }

        function ge(e) {
            switch (typeof e) {
                case "boolean":
                case "number":
                case "object":
                case "string":
                case "undefined":
                    return e;
                default:
                    return ""
            }
        }

        function ye(e) {
            var t = e.type;
            return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
        }

        function be(e) {
            e._valueTracker || (e._valueTracker = function(e) {
                var t = ye(e) ? "checked" : "value",
                    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                    n = "" + e[t];
                if (!e.hasOwnProperty(t) && void 0 !== r && "function" == typeof r.get && "function" == typeof r.set) {
                    var i = r.get,
                        o = r.set;
                    return Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function() {
                            return i.call(this)
                        },
                        set: function(e) {
                            n = "" + e, o.call(this, e)
                        }
                    }), Object.defineProperty(e, t, {
                        enumerable: r.enumerable
                    }), {
                        getValue: function() {
                            return n
                        },
                        setValue: function(e) {
                            n = "" + e
                        },
                        stopTracking: function() {
                            e._valueTracker = null, delete e[t]
                        }
                    }
                }
            }(e))
        }

        function Se(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var r = t.getValue(),
                n = "";
            return e && (n = ye(e) ? e.checked ? "true" : "false" : e.value), (e = n) !== r && (t.setValue(e), !0)
        }

        function Ce(e, t) {
            var r = t.checked;
            return i({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: null != r ? r : e._wrapperState.initialChecked
            })
        }

        function we(e, t) {
            var r = null == t.defaultValue ? "" : t.defaultValue,
                n = null != t.checked ? t.checked : t.defaultChecked;
            r = ge(null != t.value ? t.value : r), e._wrapperState = {
                initialChecked: n,
                initialValue: r,
                controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
            }
        }

        function Ee(e, t) {
            null != (t = t.checked) && Q(e, "checked", t, !1)
        }

        function xe(e, t) {
            Ee(e, t);
            var r = ge(t.value),
                n = t.type;
            if (null != r) "number" === n ? (0 === r && "" === e.value || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
            else if ("submit" === n || "reset" === n) return void e.removeAttribute("value");
            t.hasOwnProperty("value") ? Te(e, t.type, r) : t.hasOwnProperty("defaultValue") && Te(e, t.type, ge(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
        }

        function ke(e, t, r) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var n = t.type;
                if (!("submit" !== n && "reset" !== n || void 0 !== t.value && null !== t.value)) return;
                t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
            }
            "" !== (r = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== r && (e.name = r)
        }

        function Te(e, t, r) {
            "number" === t && e.ownerDocument.activeElement === e || (null == r ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
        }

        function Le(e, t) {
            return e = i({
                children: void 0
            }, t), (t = function(e) {
                var t = "";
                return n.Children.forEach(e, (function(e) {
                    null != e && (t += e)
                })), t
            }(t.children)) && (e.children = t), e
        }

        function Oe(e, t, r, n) {
            if (e = e.options, t) {
                t = {};
                for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
                for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0)
            } else {
                for (r = "" + ge(r), t = null, i = 0; i < e.length; i++) {
                    if (e[i].value === r) return e[i].selected = !0, void(n && (e[i].defaultSelected = !0));
                    null !== t || e[i].disabled || (t = e[i])
                }
                null !== t && (t.selected = !0)
            }
        }

        function Re(e, t) {
            if (null != t.dangerouslySetInnerHTML) throw Error(s(91));
            return i({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: "" + e._wrapperState.initialValue
            })
        }

        function Ae(e, t) {
            var r = t.value;
            if (null == r) {
                if (r = t.children, t = t.defaultValue, null != r) {
                    if (null != t) throw Error(s(92));
                    if (Array.isArray(r)) {
                        if (!(1 >= r.length)) throw Error(s(93));
                        r = r[0]
                    }
                    t = r
                }
                null == t && (t = ""), r = t
            }
            e._wrapperState = {
                initialValue: ge(r)
            }
        }

        function Pe(e, t) {
            var r = ge(t.value),
                n = ge(t.defaultValue);
            null != r && ((r = "" + r) !== e.value && (e.value = r), null == t.defaultValue && e.defaultValue !== r && (e.defaultValue = r)), null != n && (e.defaultValue = "" + n)
        }

        function Me(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
        }
        var De = "http://www.w3.org/1999/xhtml",
            Ie = "http://www.w3.org/2000/svg";

        function Fe(e) {
            switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
            }
        }

        function Be(e, t) {
            return null == e || "http://www.w3.org/1999/xhtml" === e ? Fe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
        }
        var He, Ne = function(e) {
            return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
                MSApp.execUnsafeLocalFunction((function() {
                    return e(t, r)
                }))
            } : e
        }((function(e, t) {
            if (e.namespaceURI !== Ie || "innerHTML" in e) e.innerHTML = t;
            else {
                for ((He = He || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = He.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                for (; t.firstChild;) e.appendChild(t.firstChild)
            }
        }));

        function je(e, t) {
            if (t) {
                var r = e.firstChild;
                if (r && r === e.lastChild && 3 === r.nodeType) return void(r.nodeValue = t)
            }
            e.textContent = t
        }

        function Ue(e, t) {
            var r = {};
            return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
        }
        var We = {
                animationend: Ue("Animation", "AnimationEnd"),
                animationiteration: Ue("Animation", "AnimationIteration"),
                animationstart: Ue("Animation", "AnimationStart"),
                transitionend: Ue("Transition", "TransitionEnd")
            },
            ze = {},
            qe = {};

        function Ke(e) {
            if (ze[e]) return ze[e];
            if (!We[e]) return e;
            var t, r = We[e];
            for (t in r)
                if (r.hasOwnProperty(t) && t in qe) return ze[e] = r[t];
            return e
        }
        T && (qe = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
        var Ve = Ke("animationend"),
            Xe = Ke("animationiteration"),
            Ge = Ke("animationstart"),
            $e = Ke("transitionend"),
            Ye = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            Qe = new("function" == typeof WeakMap ? WeakMap : Map);

        function Ze(e) {
            var t = Qe.get(e);
            return void 0 === t && (t = new Map, Qe.set(e, t)), t
        }

        function Je(e) {
            var t = e,
                r = e;
            if (e.alternate)
                for (; t.return;) t = t.return;
            else {
                e = t;
                do {
                    0 != (1026 & (t = e).effectTag) && (r = t.return), e = t.return
                } while (e)
            }
            return 3 === t.tag ? r : null
        }

        function et(e) {
            if (13 === e.tag) {
                var t = e.memoizedState;
                if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
            }
            return null
        }

        function tt(e) {
            if (Je(e) !== e) throw Error(s(188))
        }

        function rt(e) {
            if (!(e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Je(e))) throw Error(s(188));
                        return t !== e ? null : e
                    }
                    for (var r = e, n = t;;) {
                        var i = r.return;
                        if (null === i) break;
                        var o = i.alternate;
                        if (null === o) {
                            if (null !== (n = i.return)) {
                                r = n;
                                continue
                            }
                            break
                        }
                        if (i.child === o.child) {
                            for (o = i.child; o;) {
                                if (o === r) return tt(i), e;
                                if (o === n) return tt(i), t;
                                o = o.sibling
                            }
                            throw Error(s(188))
                        }
                        if (r.return !== n.return) r = i, n = o;
                        else {
                            for (var a = !1, l = i.child; l;) {
                                if (l === r) {
                                    a = !0, r = i, n = o;
                                    break
                                }
                                if (l === n) {
                                    a = !0, n = i, r = o;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!a) {
                                for (l = o.child; l;) {
                                    if (l === r) {
                                        a = !0, r = o, n = i;
                                        break
                                    }
                                    if (l === n) {
                                        a = !0, n = o, r = i;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!a) throw Error(s(189))
                            }
                        }
                        if (r.alternate !== n) throw Error(s(190))
                    }
                    if (3 !== r.tag) throw Error(s(188));
                    return r.stateNode.current === r ? e : t
                }(e))) return null;
            for (var t = e;;) {
                if (5 === t.tag || 6 === t.tag) return t;
                if (t.child) t.child.return = t, t = t.child;
                else {
                    if (t === e) break;
                    for (; !t.sibling;) {
                        if (!t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
            }
            return null
        }

        function nt(e, t) {
            if (null == t) throw Error(s(30));
            return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
        }

        function it(e, t, r) {
            Array.isArray(e) ? e.forEach(t, r) : e && t.call(r, e)
        }
        var ot = null;

        function st(e) {
            if (e) {
                var t = e._dispatchListeners,
                    r = e._dispatchInstances;
                if (Array.isArray(t))
                    for (var n = 0; n < t.length && !e.isPropagationStopped(); n++) m(e, t[n], r[n]);
                else t && m(e, t, r);
                e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
            }
        }

        function at(e) {
            if (null !== e && (ot = nt(ot, e)), e = ot, ot = null, e) {
                if (it(e, st), ot) throw Error(s(95));
                if (u) throw e = f, u = !1, f = null, e
            }
        }

        function lt(e) {
            return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
        }

        function ct(e) {
            if (!T) return !1;
            var t = (e = "on" + e) in document;
            return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
        }
        var ut = [];

        function ft(e) {
            e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > ut.length && ut.push(e)
        }

        function ht(e, t, r, n) {
            if (ut.length) {
                var i = ut.pop();
                return i.topLevelType = e, i.eventSystemFlags = n, i.nativeEvent = t, i.targetInst = r, i
            }
            return {
                topLevelType: e,
                eventSystemFlags: n,
                nativeEvent: t,
                targetInst: r,
                ancestors: []
            }
        }

        function dt(e) {
            var t = e.targetInst,
                r = t;
            do {
                if (!r) {
                    e.ancestors.push(r);
                    break
                }
                var n = r;
                if (3 === n.tag) n = n.stateNode.containerInfo;
                else {
                    for (; n.return;) n = n.return;
                    n = 3 !== n.tag ? null : n.stateNode.containerInfo
                }
                if (!n) break;
                5 !== (t = r.tag) && 6 !== t || e.ancestors.push(r), r = kr(n)
            } while (r);
            for (r = 0; r < e.ancestors.length; r++) {
                t = e.ancestors[r];
                var i = lt(e.nativeEvent);
                n = e.topLevelType;
                var o = e.nativeEvent,
                    s = e.eventSystemFlags;
                0 === r && (s |= 64);
                for (var a = null, l = 0; l < C.length; l++) {
                    var c = C[l];
                    c && (c = c.extractEvents(n, t, o, i, s)) && (a = nt(a, c))
                }
                at(a)
            }
        }

        function pt(e, t, r) {
            if (!r.has(e)) {
                switch (e) {
                    case "scroll":
                        Gt(t, "scroll", !0);
                        break;
                    case "focus":
                    case "blur":
                        Gt(t, "focus", !0), Gt(t, "blur", !0), r.set("blur", null), r.set("focus", null);
                        break;
                    case "cancel":
                    case "close":
                        ct(e) && Gt(t, e, !0);
                        break;
                    case "invalid":
                    case "submit":
                    case "reset":
                        break;
                    default:
                        -1 === Ye.indexOf(e) && Xt(e, t)
                }
                r.set(e, null)
            }
        }
        var _t, vt, mt, gt = !1,
            yt = [],
            bt = null,
            St = null,
            Ct = null,
            wt = new Map,
            Et = new Map,
            xt = [],
            kt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
            Tt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

        function Lt(e, t, r, n, i) {
            return {
                blockedOn: e,
                topLevelType: t,
                eventSystemFlags: 32 | r,
                nativeEvent: i,
                container: n
            }
        }

        function Ot(e, t) {
            switch (e) {
                case "focus":
                case "blur":
                    bt = null;
                    break;
                case "dragenter":
                case "dragleave":
                    St = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Ct = null;
                    break;
                case "pointerover":
                case "pointerout":
                    wt.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Et.delete(t.pointerId)
            }
        }

        function Rt(e, t, r, n, i, o) {
            return null === e || e.nativeEvent !== o ? (e = Lt(t, r, n, i, o), null !== t && (null !== (t = Tr(t)) && vt(t)), e) : (e.eventSystemFlags |= n, e)
        }

        function At(e) {
            var t = kr(e.target);
            if (null !== t) {
                var r = Je(t);
                if (null !== r)
                    if (13 === (t = r.tag)) {
                        if (null !== (t = et(r))) return e.blockedOn = t, void o.unstable_runWithPriority(e.priority, (function() {
                            mt(r)
                        }))
                    } else if (3 === t && r.stateNode.hydrate) return void(e.blockedOn = 3 === r.tag ? r.stateNode.containerInfo : null)
            }
            e.blockedOn = null
        }

        function Pt(e) {
            if (null !== e.blockedOn) return !1;
            var t = Zt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
            if (null !== t) {
                var r = Tr(t);
                return null !== r && vt(r), e.blockedOn = t, !1
            }
            return !0
        }

        function Mt(e, t, r) {
            Pt(e) && r.delete(t)
        }

        function Dt() {
            for (gt = !1; 0 < yt.length;) {
                var e = yt[0];
                if (null !== e.blockedOn) {
                    null !== (e = Tr(e.blockedOn)) && _t(e);
                    break
                }
                var t = Zt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
                null !== t ? e.blockedOn = t : yt.shift()
            }
            null !== bt && Pt(bt) && (bt = null), null !== St && Pt(St) && (St = null), null !== Ct && Pt(Ct) && (Ct = null), wt.forEach(Mt), Et.forEach(Mt)
        }

        function It(e, t) {
            e.blockedOn === t && (e.blockedOn = null, gt || (gt = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Dt)))
        }

        function Ft(e) {
            function t(t) {
                return It(t, e)
            }
            if (0 < yt.length) {
                It(yt[0], e);
                for (var r = 1; r < yt.length; r++) {
                    var n = yt[r];
                    n.blockedOn === e && (n.blockedOn = null)
                }
            }
            for (null !== bt && It(bt, e), null !== St && It(St, e), null !== Ct && It(Ct, e), wt.forEach(t), Et.forEach(t), r = 0; r < xt.length; r++)(n = xt[r]).blockedOn === e && (n.blockedOn = null);
            for (; 0 < xt.length && null === (r = xt[0]).blockedOn;) At(r), null === r.blockedOn && xt.shift()
        }
        var Bt = {},
            Ht = new Map,
            Nt = new Map,
            jt = ["abort", "abort", Ve, "animationEnd", Xe, "animationIteration", Ge, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", $e, "transitionEnd", "waiting", "waiting"];

        function Ut(e, t) {
            for (var r = 0; r < e.length; r += 2) {
                var n = e[r],
                    i = e[r + 1],
                    o = "on" + (i[0].toUpperCase() + i.slice(1));
                o = {
                    phasedRegistrationNames: {
                        bubbled: o,
                        captured: o + "Capture"
                    },
                    dependencies: [n],
                    eventPriority: t
                }, Nt.set(n, t), Ht.set(n, o), Bt[i] = o
            }
        }
        Ut("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Ut("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Ut(jt, 2);
        for (var Wt = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), zt = 0; zt < Wt.length; zt++) Nt.set(Wt[zt], 0);
        var qt = o.unstable_UserBlockingPriority,
            Kt = o.unstable_runWithPriority,
            Vt = !0;

        function Xt(e, t) {
            Gt(t, e, !1)
        }

        function Gt(e, t, r) {
            var n = Nt.get(t);
            switch (void 0 === n ? 2 : n) {
                case 0:
                    n = $t.bind(null, t, 1, e);
                    break;
                case 1:
                    n = Yt.bind(null, t, 1, e);
                    break;
                default:
                    n = Qt.bind(null, t, 1, e)
            }
            r ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, !1)
        }

        function $t(e, t, r, n) {
            H || F();
            var i = Qt,
                o = H;
            H = !0;
            try {
                I(i, e, t, r, n)
            } finally {
                (H = o) || j()
            }
        }

        function Yt(e, t, r, n) {
            Kt(qt, Qt.bind(null, e, t, r, n))
        }

        function Qt(e, t, r, n) {
            if (Vt)
                if (0 < yt.length && -1 < kt.indexOf(e)) e = Lt(null, e, t, r, n), yt.push(e);
                else {
                    var i = Zt(e, t, r, n);
                    if (null === i) Ot(e, n);
                    else if (-1 < kt.indexOf(e)) e = Lt(i, e, t, r, n), yt.push(e);
                    else if (! function(e, t, r, n, i) {
                            switch (t) {
                                case "focus":
                                    return bt = Rt(bt, e, t, r, n, i), !0;
                                case "dragenter":
                                    return St = Rt(St, e, t, r, n, i), !0;
                                case "mouseover":
                                    return Ct = Rt(Ct, e, t, r, n, i), !0;
                                case "pointerover":
                                    var o = i.pointerId;
                                    return wt.set(o, Rt(wt.get(o) || null, e, t, r, n, i)), !0;
                                case "gotpointercapture":
                                    return o = i.pointerId, Et.set(o, Rt(Et.get(o) || null, e, t, r, n, i)), !0
                            }
                            return !1
                        }(i, e, t, r, n)) {
                        Ot(e, n), e = ht(e, n, null, t);
                        try {
                            U(dt, e)
                        } finally {
                            ft(e)
                        }
                    }
                }
        }

        function Zt(e, t, r, n) {
            if (null !== (r = kr(r = lt(n)))) {
                var i = Je(r);
                if (null === i) r = null;
                else {
                    var o = i.tag;
                    if (13 === o) {
                        if (null !== (r = et(i))) return r;
                        r = null
                    } else if (3 === o) {
                        if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                        r = null
                    } else i !== r && (r = null)
                }
            }
            e = ht(e, n, r, t);
            try {
                U(dt, e)
            } finally {
                ft(e)
            }
            return null
        }
        var Jt = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            },
            er = ["Webkit", "ms", "Moz", "O"];

        function tr(e, t, r) {
            return null == t || "boolean" == typeof t || "" === t ? "" : r || "number" != typeof t || 0 === t || Jt.hasOwnProperty(e) && Jt[e] ? ("" + t).trim() : t + "px"
        }

        function rr(e, t) {
            for (var r in e = e.style, t)
                if (t.hasOwnProperty(r)) {
                    var n = 0 === r.indexOf("--"),
                        i = tr(r, t[r], n);
                    "float" === r && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i
                }
        }
        Object.keys(Jt).forEach((function(e) {
            er.forEach((function(t) {
                t = t + e.charAt(0).toUpperCase() + e.substring(1), Jt[t] = Jt[e]
            }))
        }));
        var nr = i({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        });

        function ir(e, t) {
            if (t) {
                if (nr[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(s(137, e, ""));
                if (null != t.dangerouslySetInnerHTML) {
                    if (null != t.children) throw Error(s(60));
                    if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
                }
                if (null != t.style && "object" != typeof t.style) throw Error(s(62, ""))
            }
        }

        function or(e, t) {
            if (-1 === e.indexOf("-")) return "string" == typeof t.is;
            switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
            }
        }
        var sr = De;

        function ar(e, t) {
            var r = Ze(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
            t = x[t];
            for (var n = 0; n < t.length; n++) pt(t[n], e, r)
        }

        function lr() {}

        function cr(e) {
            if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
            try {
                return e.activeElement || e.body
            } catch (t) {
                return e.body
            }
        }

        function ur(e) {
            for (; e && e.firstChild;) e = e.firstChild;
            return e
        }

        function fr(e, t) {
            var r, n = ur(e);
            for (e = 0; n;) {
                if (3 === n.nodeType) {
                    if (r = e + n.textContent.length, e <= t && r >= t) return {
                        node: n,
                        offset: t - e
                    };
                    e = r
                }
                e: {
                    for (; n;) {
                        if (n.nextSibling) {
                            n = n.nextSibling;
                            break e
                        }
                        n = n.parentNode
                    }
                    n = void 0
                }
                n = ur(n)
            }
        }

        function hr() {
            for (var e = window, t = cr(); t instanceof e.HTMLIFrameElement;) {
                try {
                    var r = "string" == typeof t.contentWindow.location.href
                } catch (e) {
                    r = !1
                }
                if (!r) break;
                t = cr((e = t.contentWindow).document)
            }
            return t
        }

        function dr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
        }
        var pr = null,
            _r = null;

        function vr(e, t) {
            switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    return !!t.autoFocus
            }
            return !1
        }

        function mr(e, t) {
            return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
        }
        var gr = "function" == typeof setTimeout ? setTimeout : void 0,
            yr = "function" == typeof clearTimeout ? clearTimeout : void 0;

        function br(e) {
            for (; null != e; e = e.nextSibling) {
                var t = e.nodeType;
                if (1 === t || 3 === t) break
            }
            return e
        }

        function Sr(e) {
            e = e.previousSibling;
            for (var t = 0; e;) {
                if (8 === e.nodeType) {
                    var r = e.data;
                    if ("$" === r || "$!" === r || "$?" === r) {
                        if (0 === t) return e;
                        t--
                    } else "/$" === r && t++
                }
                e = e.previousSibling
            }
            return null
        }
        var Cr = Math.random().toString(36).slice(2),
            wr = "__reactInternalInstance$" + Cr,
            Er = "__reactEventHandlers$" + Cr,
            xr = "__reactContainere$" + Cr;

        function kr(e) {
            var t = e[wr];
            if (t) return t;
            for (var r = e.parentNode; r;) {
                if (t = r[xr] || r[wr]) {
                    if (r = t.alternate, null !== t.child || null !== r && null !== r.child)
                        for (e = Sr(e); null !== e;) {
                            if (r = e[wr]) return r;
                            e = Sr(e)
                        }
                    return t
                }
                r = (e = r).parentNode
            }
            return null
        }

        function Tr(e) {
            return !(e = e[wr] || e[xr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
        }

        function Lr(e) {
            if (5 === e.tag || 6 === e.tag) return e.stateNode;
            throw Error(s(33))
        }

        function Or(e) {
            return e[Er] || null
        }

        function Rr(e) {
            do {
                e = e.return
            } while (e && 5 !== e.tag);
            return e || null
        }

        function Ar(e, t) {
            var r = e.stateNode;
            if (!r) return null;
            var n = p(r);
            if (!n) return null;
            r = n[t];
            e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (n = !n.disabled) || (n = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !n;
                    break e;
                default:
                    e = !1
            }
            if (e) return null;
            if (r && "function" != typeof r) throw Error(s(231, t, typeof r));
            return r
        }

        function Pr(e, t, r) {
            (t = Ar(e, r.dispatchConfig.phasedRegistrationNames[t])) && (r._dispatchListeners = nt(r._dispatchListeners, t), r._dispatchInstances = nt(r._dispatchInstances, e))
        }

        function Mr(e) {
            if (e && e.dispatchConfig.phasedRegistrationNames) {
                for (var t = e._targetInst, r = []; t;) r.push(t), t = Rr(t);
                for (t = r.length; 0 < t--;) Pr(r[t], "captured", e);
                for (t = 0; t < r.length; t++) Pr(r[t], "bubbled", e)
            }
        }

        function Dr(e, t, r) {
            e && r && r.dispatchConfig.registrationName && (t = Ar(e, r.dispatchConfig.registrationName)) && (r._dispatchListeners = nt(r._dispatchListeners, t), r._dispatchInstances = nt(r._dispatchInstances, e))
        }

        function Ir(e) {
            e && e.dispatchConfig.registrationName && Dr(e._targetInst, null, e)
        }

        function Fr(e) {
            it(e, Mr)
        }
        var Br = null,
            Hr = null,
            Nr = null;

        function jr() {
            if (Nr) return Nr;
            var e, t, r = Hr,
                n = r.length,
                i = "value" in Br ? Br.value : Br.textContent,
                o = i.length;
            for (e = 0; e < n && r[e] === i[e]; e++);
            var s = n - e;
            for (t = 1; t <= s && r[n - t] === i[o - t]; t++);
            return Nr = i.slice(e, 1 < t ? 1 - t : void 0)
        }

        function Ur() {
            return !0
        }

        function Wr() {
            return !1
        }

        function zr(e, t, r, n) {
            for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = r, e = this.constructor.Interface) e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(r) : "target" === i ? this.target = n : this[i] = r[i]);
            return this.isDefaultPrevented = (null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue) ? Ur : Wr, this.isPropagationStopped = Wr, this
        }

        function qr(e, t, r, n) {
            if (this.eventPool.length) {
                var i = this.eventPool.pop();
                return this.call(i, e, t, r, n), i
            }
            return new this(e, t, r, n)
        }

        function Kr(e) {
            if (!(e instanceof this)) throw Error(s(279));
            e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
        }

        function Vr(e) {
            e.eventPool = [], e.getPooled = qr, e.release = Kr
        }
        i(zr.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Ur)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Ur)
            },
            persist: function() {
                this.isPersistent = Ur
            },
            isPersistent: Wr,
            destructor: function() {
                var e, t = this.constructor.Interface;
                for (e in t) this[e] = null;
                this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Wr, this._dispatchInstances = this._dispatchListeners = null
            }
        }), zr.Interface = {
            type: null,
            target: null,
            currentTarget: function() {
                return null
            },
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        }, zr.extend = function(e) {
            function t() {}

            function r() {
                return n.apply(this, arguments)
            }
            var n = this;
            t.prototype = n.prototype;
            var o = new t;
            return i(o, r.prototype), r.prototype = o, r.prototype.constructor = r, r.Interface = i({}, n.Interface, e), r.extend = n.extend, Vr(r), r
        }, Vr(zr);
        var Xr = zr.extend({
                data: null
            }),
            Gr = zr.extend({
                data: null
            }),
            $r = [9, 13, 27, 32],
            Yr = T && "CompositionEvent" in window,
            Qr = null;
        T && "documentMode" in document && (Qr = document.documentMode);
        var Zr = T && "TextEvent" in window && !Qr,
            Jr = T && (!Yr || Qr && 8 < Qr && 11 >= Qr),
            en = String.fromCharCode(32),
            tn = {
                beforeInput: {
                    phasedRegistrationNames: {
                        bubbled: "onBeforeInput",
                        captured: "onBeforeInputCapture"
                    },
                    dependencies: ["compositionend", "keypress", "textInput", "paste"]
                },
                compositionEnd: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionEnd",
                        captured: "onCompositionEndCapture"
                    },
                    dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
                },
                compositionStart: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionStart",
                        captured: "onCompositionStartCapture"
                    },
                    dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
                },
                compositionUpdate: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionUpdate",
                        captured: "onCompositionUpdateCapture"
                    },
                    dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
                }
            },
            rn = !1;

        function nn(e, t) {
            switch (e) {
                case "keyup":
                    return -1 !== $r.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "blur":
                    return !0;
                default:
                    return !1
            }
        }

        function on(e) {
            return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
        }
        var sn = !1;
        var an = {
                eventTypes: tn,
                extractEvents: function(e, t, r, n) {
                    var i;
                    if (Yr) e: {
                        switch (e) {
                            case "compositionstart":
                                var o = tn.compositionStart;
                                break e;
                            case "compositionend":
                                o = tn.compositionEnd;
                                break e;
                            case "compositionupdate":
                                o = tn.compositionUpdate;
                                break e
                        }
                        o = void 0
                    }
                    else sn ? nn(e, r) && (o = tn.compositionEnd) : "keydown" === e && 229 === r.keyCode && (o = tn.compositionStart);
                    return o ? (Jr && "ko" !== r.locale && (sn || o !== tn.compositionStart ? o === tn.compositionEnd && sn && (i = jr()) : (Hr = "value" in (Br = n) ? Br.value : Br.textContent, sn = !0)), o = Xr.getPooled(o, t, r, n), i ? o.data = i : null !== (i = on(r)) && (o.data = i), Fr(o), i = o) : i = null, (e = Zr ? function(e, t) {
                        switch (e) {
                            case "compositionend":
                                return on(t);
                            case "keypress":
                                return 32 !== t.which ? null : (rn = !0, en);
                            case "textInput":
                                return (e = t.data) === en && rn ? null : e;
                            default:
                                return null
                        }
                    }(e, r) : function(e, t) {
                        if (sn) return "compositionend" === e || !Yr && nn(e, t) ? (e = jr(), Nr = Hr = Br = null, sn = !1, e) : null;
                        switch (e) {
                            case "paste":
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length) return t.char;
                                    if (t.which) return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return Jr && "ko" !== t.locale ? null : t.data;
                            default:
                                return null
                        }
                    }(e, r)) ? ((t = Gr.getPooled(tn.beforeInput, t, r, n)).data = e, Fr(t)) : t = null, null === i ? t : null === t ? i : [i, t]
                }
            },
            ln = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

        function cn(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!ln[e.type] : "textarea" === t
        }
        var un = {
            change: {
                phasedRegistrationNames: {
                    bubbled: "onChange",
                    captured: "onChangeCapture"
                },
                dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
            }
        };

        function fn(e, t, r) {
            return (e = zr.getPooled(un.change, e, t, r)).type = "change", P(r), Fr(e), e
        }
        var hn = null,
            dn = null;

        function pn(e) {
            at(e)
        }

        function _n(e) {
            if (Se(Lr(e))) return e
        }

        function vn(e, t) {
            if ("change" === e) return t
        }
        var mn = !1;

        function gn() {
            hn && (hn.detachEvent("onpropertychange", yn), dn = hn = null)
        }

        function yn(e) {
            if ("value" === e.propertyName && _n(dn))
                if (e = fn(dn, e, lt(e)), H) at(e);
                else {
                    H = !0;
                    try {
                        D(pn, e)
                    } finally {
                        H = !1, j()
                    }
                }
        }

        function bn(e, t, r) {
            "focus" === e ? (gn(), dn = r, (hn = t).attachEvent("onpropertychange", yn)) : "blur" === e && gn()
        }

        function Sn(e) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e) return _n(dn)
        }

        function Cn(e, t) {
            if ("click" === e) return _n(t)
        }

        function wn(e, t) {
            if ("input" === e || "change" === e) return _n(t)
        }
        T && (mn = ct("input") && (!document.documentMode || 9 < document.documentMode));
        var En = {
                eventTypes: un,
                _isInputEventSupported: mn,
                extractEvents: function(e, t, r, n) {
                    var i = t ? Lr(t) : window,
                        o = i.nodeName && i.nodeName.toLowerCase();
                    if ("select" === o || "input" === o && "file" === i.type) var s = vn;
                    else if (cn(i))
                        if (mn) s = wn;
                        else {
                            s = Sn;
                            var a = bn
                        }
                    else(o = i.nodeName) && "input" === o.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (s = Cn);
                    if (s && (s = s(e, t))) return fn(s, r, n);
                    a && a(e, i, t), "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && Te(i, "number", i.value)
                }
            },
            xn = zr.extend({
                view: null,
                detail: null
            }),
            kn = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };

        function Tn(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e]
        }

        function Ln() {
            return Tn
        }
        var On = 0,
            Rn = 0,
            An = !1,
            Pn = !1,
            Mn = xn.extend({
                screenX: null,
                screenY: null,
                clientX: null,
                clientY: null,
                pageX: null,
                pageY: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                getModifierState: Ln,
                button: null,
                buttons: null,
                relatedTarget: function(e) {
                    return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
                },
                movementX: function(e) {
                    if ("movementX" in e) return e.movementX;
                    var t = On;
                    return On = e.screenX, An ? "mousemove" === e.type ? e.screenX - t : 0 : (An = !0, 0)
                },
                movementY: function(e) {
                    if ("movementY" in e) return e.movementY;
                    var t = Rn;
                    return Rn = e.screenY, Pn ? "mousemove" === e.type ? e.screenY - t : 0 : (Pn = !0, 0)
                }
            }),
            Dn = Mn.extend({
                pointerId: null,
                width: null,
                height: null,
                pressure: null,
                tangentialPressure: null,
                tiltX: null,
                tiltY: null,
                twist: null,
                pointerType: null,
                isPrimary: null
            }),
            In = {
                mouseEnter: {
                    registrationName: "onMouseEnter",
                    dependencies: ["mouseout", "mouseover"]
                },
                mouseLeave: {
                    registrationName: "onMouseLeave",
                    dependencies: ["mouseout", "mouseover"]
                },
                pointerEnter: {
                    registrationName: "onPointerEnter",
                    dependencies: ["pointerout", "pointerover"]
                },
                pointerLeave: {
                    registrationName: "onPointerLeave",
                    dependencies: ["pointerout", "pointerover"]
                }
            },
            Fn = {
                eventTypes: In,
                extractEvents: function(e, t, r, n, i) {
                    var o = "mouseover" === e || "pointerover" === e,
                        s = "mouseout" === e || "pointerout" === e;
                    if (o && 0 == (32 & i) && (r.relatedTarget || r.fromElement) || !s && !o) return null;
                    (o = n.window === n ? n : (o = n.ownerDocument) ? o.defaultView || o.parentWindow : window, s) ? (s = t, null !== (t = (t = r.relatedTarget || r.toElement) ? kr(t) : null) && (t !== Je(t) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : s = null;
                    if (s === t) return null;
                    if ("mouseout" === e || "mouseover" === e) var a = Mn,
                        l = In.mouseLeave,
                        c = In.mouseEnter,
                        u = "mouse";
                    else "pointerout" !== e && "pointerover" !== e || (a = Dn, l = In.pointerLeave, c = In.pointerEnter, u = "pointer");
                    if (e = null == s ? o : Lr(s), o = null == t ? o : Lr(t), (l = a.getPooled(l, s, r, n)).type = u + "leave", l.target = e, l.relatedTarget = o, (r = a.getPooled(c, t, r, n)).type = u + "enter", r.target = o, r.relatedTarget = e, u = t, (n = s) && u) e: {
                        for (c = u, s = 0, e = a = n; e; e = Rr(e)) s++;
                        for (e = 0, t = c; t; t = Rr(t)) e++;
                        for (; 0 < s - e;) a = Rr(a),
                        s--;
                        for (; 0 < e - s;) c = Rr(c),
                        e--;
                        for (; s--;) {
                            if (a === c || a === c.alternate) break e;
                            a = Rr(a), c = Rr(c)
                        }
                        a = null
                    }
                    else a = null;
                    for (c = a, a = []; n && n !== c && (null === (s = n.alternate) || s !== c);) a.push(n), n = Rr(n);
                    for (n = []; u && u !== c && (null === (s = u.alternate) || s !== c);) n.push(u), u = Rr(u);
                    for (u = 0; u < a.length; u++) Dr(a[u], "bubbled", l);
                    for (u = n.length; 0 < u--;) Dr(n[u], "captured", r);
                    return 0 == (64 & i) ? [l] : [l, r]
                }
            };
        var Bn = "function" == typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            },
            Hn = Object.prototype.hasOwnProperty;

        function Nn(e, t) {
            if (Bn(e, t)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
            var r = Object.keys(e),
                n = Object.keys(t);
            if (r.length !== n.length) return !1;
            for (n = 0; n < r.length; n++)
                if (!Hn.call(t, r[n]) || !Bn(e[r[n]], t[r[n]])) return !1;
            return !0
        }
        var jn = T && "documentMode" in document && 11 >= document.documentMode,
            Un = {
                select: {
                    phasedRegistrationNames: {
                        bubbled: "onSelect",
                        captured: "onSelectCapture"
                    },
                    dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
                }
            },
            Wn = null,
            zn = null,
            qn = null,
            Kn = !1;

        function Vn(e, t) {
            var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
            return Kn || null == Wn || Wn !== cr(r) ? null : ("selectionStart" in (r = Wn) && dr(r) ? r = {
                start: r.selectionStart,
                end: r.selectionEnd
            } : r = {
                anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }, qn && Nn(qn, r) ? null : (qn = r, (e = zr.getPooled(Un.select, zn, e, t)).type = "select", e.target = Wn, Fr(e), e))
        }
        var Xn = {
                eventTypes: Un,
                extractEvents: function(e, t, r, n, i, o) {
                    if (!(o = !(i = o || (n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument)))) {
                        e: {
                            i = Ze(i),
                            o = x.onSelect;
                            for (var s = 0; s < o.length; s++)
                                if (!i.has(o[s])) {
                                    i = !1;
                                    break e
                                } i = !0
                        }
                        o = !i
                    }
                    if (o) return null;
                    switch (i = t ? Lr(t) : window, e) {
                        case "focus":
                            (cn(i) || "true" === i.contentEditable) && (Wn = i, zn = t, qn = null);
                            break;
                        case "blur":
                            qn = zn = Wn = null;
                            break;
                        case "mousedown":
                            Kn = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            return Kn = !1, Vn(r, n);
                        case "selectionchange":
                            if (jn) break;
                        case "keydown":
                        case "keyup":
                            return Vn(r, n)
                    }
                    return null
                }
            },
            Gn = zr.extend({
                animationName: null,
                elapsedTime: null,
                pseudoElement: null
            }),
            $n = zr.extend({
                clipboardData: function(e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData
                }
            }),
            Yn = xn.extend({
                relatedTarget: null
            });

        function Qn(e) {
            var t = e.keyCode;
            return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
        }
        var Zn = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            },
            Jn = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            },
            ei = xn.extend({
                key: function(e) {
                    if (e.key) {
                        var t = Zn[e.key] || e.key;
                        if ("Unidentified" !== t) return t
                    }
                    return "keypress" === e.type ? 13 === (e = Qn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Jn[e.keyCode] || "Unidentified" : ""
                },
                location: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                repeat: null,
                locale: null,
                getModifierState: Ln,
                charCode: function(e) {
                    return "keypress" === e.type ? Qn(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? Qn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            }),
            ti = Mn.extend({
                dataTransfer: null
            }),
            ri = xn.extend({
                touches: null,
                targetTouches: null,
                changedTouches: null,
                altKey: null,
                metaKey: null,
                ctrlKey: null,
                shiftKey: null,
                getModifierState: Ln
            }),
            ni = zr.extend({
                propertyName: null,
                elapsedTime: null,
                pseudoElement: null
            }),
            ii = Mn.extend({
                deltaX: function(e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                },
                deltaZ: null,
                deltaMode: null
            }),
            oi = {
                eventTypes: Bt,
                extractEvents: function(e, t, r, n) {
                    var i = Ht.get(e);
                    if (!i) return null;
                    switch (e) {
                        case "keypress":
                            if (0 === Qn(r)) return null;
                        case "keydown":
                        case "keyup":
                            e = ei;
                            break;
                        case "blur":
                        case "focus":
                            e = Yn;
                            break;
                        case "click":
                            if (2 === r.button) return null;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            e = Mn;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            e = ti;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            e = ri;
                            break;
                        case Ve:
                        case Xe:
                        case Ge:
                            e = Gn;
                            break;
                        case $e:
                            e = ni;
                            break;
                        case "scroll":
                            e = xn;
                            break;
                        case "wheel":
                            e = ii;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            e = $n;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            e = Dn;
                            break;
                        default:
                            e = zr
                    }
                    return Fr(t = e.getPooled(i, t, r, n)), t
                }
            };
        if (g) throw Error(s(101));
        g = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), b(), p = Or, _ = Tr, v = Lr, k({
            SimpleEventPlugin: oi,
            EnterLeaveEventPlugin: Fn,
            ChangeEventPlugin: En,
            SelectEventPlugin: Xn,
            BeforeInputEventPlugin: an
        });
        var si = [],
            ai = -1;

        function li(e) {
            0 > ai || (e.current = si[ai], si[ai] = null, ai--)
        }

        function ci(e, t) {
            ai++, si[ai] = e.current, e.current = t
        }
        var ui = {},
            fi = {
                current: ui
            },
            hi = {
                current: !1
            },
            di = ui;

        function pi(e, t) {
            var r = e.type.contextTypes;
            if (!r) return ui;
            var n = e.stateNode;
            if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
            var i, o = {};
            for (i in r) o[i] = t[i];
            return n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
        }

        function _i(e) {
            return null != (e = e.childContextTypes)
        }

        function vi() {
            li(hi), li(fi)
        }

        function mi(e, t, r) {
            if (fi.current !== ui) throw Error(s(168));
            ci(fi, t), ci(hi, r)
        }

        function gi(e, t, r) {
            var n = e.stateNode;
            if (e = t.childContextTypes, "function" != typeof n.getChildContext) return r;
            for (var o in n = n.getChildContext())
                if (!(o in e)) throw Error(s(108, ve(t) || "Unknown", o));
            return i({}, r, {}, n)
        }

        function yi(e) {
            return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ui, di = fi.current, ci(fi, e), ci(hi, hi.current), !0
        }

        function bi(e, t, r) {
            var n = e.stateNode;
            if (!n) throw Error(s(169));
            r ? (e = gi(e, t, di), n.__reactInternalMemoizedMergedChildContext = e, li(hi), li(fi), ci(fi, e)) : li(hi), ci(hi, r)
        }
        var Si = o.unstable_runWithPriority,
            Ci = o.unstable_scheduleCallback,
            wi = o.unstable_cancelCallback,
            Ei = o.unstable_requestPaint,
            xi = o.unstable_now,
            ki = o.unstable_getCurrentPriorityLevel,
            Ti = o.unstable_ImmediatePriority,
            Li = o.unstable_UserBlockingPriority,
            Oi = o.unstable_NormalPriority,
            Ri = o.unstable_LowPriority,
            Ai = o.unstable_IdlePriority,
            Pi = {},
            Mi = o.unstable_shouldYield,
            Di = void 0 !== Ei ? Ei : function() {},
            Ii = null,
            Fi = null,
            Bi = !1,
            Hi = xi(),
            Ni = 1e4 > Hi ? xi : function() {
                return xi() - Hi
            };

        function ji() {
            switch (ki()) {
                case Ti:
                    return 99;
                case Li:
                    return 98;
                case Oi:
                    return 97;
                case Ri:
                    return 96;
                case Ai:
                    return 95;
                default:
                    throw Error(s(332))
            }
        }

        function Ui(e) {
            switch (e) {
                case 99:
                    return Ti;
                case 98:
                    return Li;
                case 97:
                    return Oi;
                case 96:
                    return Ri;
                case 95:
                    return Ai;
                default:
                    throw Error(s(332))
            }
        }

        function Wi(e, t) {
            return e = Ui(e), Si(e, t)
        }

        function zi(e, t, r) {
            return e = Ui(e), Ci(e, t, r)
        }

        function qi(e) {
            return null === Ii ? (Ii = [e], Fi = Ci(Ti, Vi)) : Ii.push(e), Pi
        }

        function Ki() {
            if (null !== Fi) {
                var e = Fi;
                Fi = null, wi(e)
            }
            Vi()
        }

        function Vi() {
            if (!Bi && null !== Ii) {
                Bi = !0;
                var e = 0;
                try {
                    var t = Ii;
                    Wi(99, (function() {
                        for (; e < t.length; e++) {
                            var r = t[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                    })), Ii = null
                } catch (t) {
                    throw null !== Ii && (Ii = Ii.slice(e + 1)), Ci(Ti, Ki), t
                } finally {
                    Bi = !1
                }
            }
        }

        function Xi(e, t, r) {
            return 1073741821 - (1 + ((1073741821 - e + t / 10) / (r /= 10) | 0)) * r
        }

        function Gi(e, t) {
            if (e && e.defaultProps)
                for (var r in t = i({}, t), e = e.defaultProps) void 0 === t[r] && (t[r] = e[r]);
            return t
        }
        var $i = {
                current: null
            },
            Yi = null,
            Qi = null,
            Zi = null;

        function Ji() {
            Zi = Qi = Yi = null
        }

        function eo(e) {
            var t = $i.current;
            li($i), e.type._context._currentValue = t
        }

        function to(e, t) {
            for (; null !== e;) {
                var r = e.alternate;
                if (e.childExpirationTime < t) e.childExpirationTime = t, null !== r && r.childExpirationTime < t && (r.childExpirationTime = t);
                else {
                    if (!(null !== r && r.childExpirationTime < t)) break;
                    r.childExpirationTime = t
                }
                e = e.return
            }
        }

        function ro(e, t) {
            Yi = e, Zi = Qi = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Rs = !0), e.firstContext = null)
        }

        function no(e, t) {
            if (Zi !== e && !1 !== t && 0 !== t)
                if ("number" == typeof t && 1073741823 !== t || (Zi = e, t = 1073741823), t = {
                        context: e,
                        observedBits: t,
                        next: null
                    }, null === Qi) {
                    if (null === Yi) throw Error(s(308));
                    Qi = t, Yi.dependencies = {
                        expirationTime: 0,
                        firstContext: t,
                        responders: null
                    }
                } else Qi = Qi.next = t;
            return e._currentValue
        }
        var io = !1;

        function oo(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                baseQueue: null,
                shared: {
                    pending: null
                },
                effects: null
            }
        }

        function so(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                baseQueue: e.baseQueue,
                shared: e.shared,
                effects: e.effects
            })
        }

        function ao(e, t) {
            return (e = {
                expirationTime: e,
                suspenseConfig: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }).next = e
        }

        function lo(e, t) {
            if (null !== (e = e.updateQueue)) {
                var r = (e = e.shared).pending;
                null === r ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
            }
        }

        function co(e, t) {
            var r = e.alternate;
            null !== r && so(r, e), null === (r = (e = e.updateQueue).baseQueue) ? (e.baseQueue = t.next = t, t.next = t) : (t.next = r.next, r.next = t)
        }

        function uo(e, t, r, n) {
            var o = e.updateQueue;
            io = !1;
            var s = o.baseQueue,
                a = o.shared.pending;
            if (null !== a) {
                if (null !== s) {
                    var l = s.next;
                    s.next = a.next, a.next = l
                }
                s = a, o.shared.pending = null, null !== (l = e.alternate) && (null !== (l = l.updateQueue) && (l.baseQueue = a))
            }
            if (null !== s) {
                l = s.next;
                var c = o.baseState,
                    u = 0,
                    f = null,
                    h = null,
                    d = null;
                if (null !== l)
                    for (var p = l;;) {
                        if ((a = p.expirationTime) < n) {
                            var _ = {
                                expirationTime: p.expirationTime,
                                suspenseConfig: p.suspenseConfig,
                                tag: p.tag,
                                payload: p.payload,
                                callback: p.callback,
                                next: null
                            };
                            null === d ? (h = d = _, f = c) : d = d.next = _, a > u && (u = a)
                        } else {
                            null !== d && (d = d.next = {
                                expirationTime: 1073741823,
                                suspenseConfig: p.suspenseConfig,
                                tag: p.tag,
                                payload: p.payload,
                                callback: p.callback,
                                next: null
                            }), ol(a, p.suspenseConfig);
                            e: {
                                var v = e,
                                    m = p;
                                switch (a = t, _ = r, m.tag) {
                                    case 1:
                                        if ("function" == typeof(v = m.payload)) {
                                            c = v.call(_, c, a);
                                            break e
                                        }
                                        c = v;
                                        break e;
                                    case 3:
                                        v.effectTag = -4097 & v.effectTag | 64;
                                    case 0:
                                        if (null == (a = "function" == typeof(v = m.payload) ? v.call(_, c, a) : v)) break e;
                                        c = i({}, c, a);
                                        break e;
                                    case 2:
                                        io = !0
                                }
                            }
                            null !== p.callback && (e.effectTag |= 32, null === (a = o.effects) ? o.effects = [p] : a.push(p))
                        }
                        if (null === (p = p.next) || p === l) {
                            if (null === (a = o.shared.pending)) break;
                            p = s.next = a.next, a.next = l, o.baseQueue = s = a, o.shared.pending = null
                        }
                    }
                null === d ? f = c : d.next = h, o.baseState = f, o.baseQueue = d, sl(u), e.expirationTime = u, e.memoizedState = c
            }
        }

        function fo(e, t, r) {
            if (e = t.effects, t.effects = null, null !== e)
                for (t = 0; t < e.length; t++) {
                    var n = e[t],
                        i = n.callback;
                    if (null !== i) {
                        if (n.callback = null, n = i, i = r, "function" != typeof n) throw Error(s(191, n));
                        n.call(i)
                    }
                }
        }
        var ho = Y.ReactCurrentBatchConfig,
            po = (new n.Component).refs;

        function _o(e, t, r, n) {
            r = null == (r = r(n, t = e.memoizedState)) ? t : i({}, t, r), e.memoizedState = r, 0 === e.expirationTime && (e.updateQueue.baseState = r)
        }
        var vo = {
            isMounted: function(e) {
                return !!(e = e._reactInternalFiber) && Je(e) === e
            },
            enqueueSetState: function(e, t, r) {
                e = e._reactInternalFiber;
                var n = Va(),
                    i = ho.suspense;
                (i = ao(n = Xa(n, e, i), i)).payload = t, null != r && (i.callback = r), lo(e, i), Ga(e, n)
            },
            enqueueReplaceState: function(e, t, r) {
                e = e._reactInternalFiber;
                var n = Va(),
                    i = ho.suspense;
                (i = ao(n = Xa(n, e, i), i)).tag = 1, i.payload = t, null != r && (i.callback = r), lo(e, i), Ga(e, n)
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternalFiber;
                var r = Va(),
                    n = ho.suspense;
                (n = ao(r = Xa(r, e, n), n)).tag = 2, null != t && (n.callback = t), lo(e, n), Ga(e, r)
            }
        };

        function mo(e, t, r, n, i, o, s) {
            return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(n, o, s) : !t.prototype || !t.prototype.isPureReactComponent || (!Nn(r, n) || !Nn(i, o))
        }

        function go(e, t, r) {
            var n = !1,
                i = ui,
                o = t.contextType;
            return "object" == typeof o && null !== o ? o = no(o) : (i = _i(t) ? di : fi.current, o = (n = null != (n = t.contextTypes)) ? pi(e, i) : ui), t = new t(r, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = vo, e.stateNode = t, t._reactInternalFiber = e, n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
        }

        function yo(e, t, r, n) {
            e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(r, n), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && vo.enqueueReplaceState(t, t.state, null)
        }

        function bo(e, t, r, n) {
            var i = e.stateNode;
            i.props = r, i.state = e.memoizedState, i.refs = po, oo(e);
            var o = t.contextType;
            "object" == typeof o && null !== o ? i.context = no(o) : (o = _i(t) ? di : fi.current, i.context = pi(e, o)), uo(e, r, i, n), i.state = e.memoizedState, "function" == typeof(o = t.getDerivedStateFromProps) && (_o(e, t, o, r), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && vo.enqueueReplaceState(i, i.state, null), uo(e, r, i, n), i.state = e.memoizedState), "function" == typeof i.componentDidMount && (e.effectTag |= 4)
        }
        var So = Array.isArray;

        function Co(e, t, r) {
            if (null !== (e = r.ref) && "function" != typeof e && "object" != typeof e) {
                if (r._owner) {
                    if (r = r._owner) {
                        if (1 !== r.tag) throw Error(s(309));
                        var n = r.stateNode
                    }
                    if (!n) throw Error(s(147, e));
                    var i = "" + e;
                    return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function(e) {
                        var t = n.refs;
                        t === po && (t = n.refs = {}), null === e ? delete t[i] : t[i] = e
                    })._stringRef = i, t)
                }
                if ("string" != typeof e) throw Error(s(284));
                if (!r._owner) throw Error(s(290, e))
            }
            return e
        }

        function wo(e, t) {
            if ("textarea" !== e.type) throw Error(s(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
        }

        function Eo(e) {
            function t(t, r) {
                if (e) {
                    var n = t.lastEffect;
                    null !== n ? (n.nextEffect = r, t.lastEffect = r) : t.firstEffect = t.lastEffect = r, r.nextEffect = null, r.effectTag = 8
                }
            }

            function r(r, n) {
                if (!e) return null;
                for (; null !== n;) t(r, n), n = n.sibling;
                return null
            }

            function n(e, t) {
                for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                return e
            }

            function i(e, t) {
                return (e = kl(e, t)).index = 0, e.sibling = null, e
            }

            function o(t, r, n) {
                return t.index = n, e ? null !== (n = t.alternate) ? (n = n.index) < r ? (t.effectTag = 2, r) : n : (t.effectTag = 2, r) : r
            }

            function a(t) {
                return e && null === t.alternate && (t.effectTag = 2), t
            }

            function l(e, t, r, n) {
                return null === t || 6 !== t.tag ? ((t = Ol(r, e.mode, n)).return = e, t) : ((t = i(t, r)).return = e, t)
            }

            function c(e, t, r, n) {
                return null !== t && t.elementType === r.type ? ((n = i(t, r.props)).ref = Co(e, t, r), n.return = e, n) : ((n = Tl(r.type, r.key, r.props, null, e.mode, n)).ref = Co(e, t, r), n.return = e, n)
            }

            function u(e, t, r, n) {
                return null === t || 4 !== t.tag || t.stateNode.containerInfo !== r.containerInfo || t.stateNode.implementation !== r.implementation ? ((t = Rl(r, e.mode, n)).return = e, t) : ((t = i(t, r.children || [])).return = e, t)
            }

            function f(e, t, r, n, o) {
                return null === t || 7 !== t.tag ? ((t = Ll(r, e.mode, n, o)).return = e, t) : ((t = i(t, r)).return = e, t)
            }

            function h(e, t, r) {
                if ("string" == typeof t || "number" == typeof t) return (t = Ol("" + t, e.mode, r)).return = e, t;
                if ("object" == typeof t && null !== t) {
                    switch (t.$$typeof) {
                        case ee:
                            return (r = Tl(t.type, t.key, t.props, null, e.mode, r)).ref = Co(e, null, t), r.return = e, r;
                        case te:
                            return (t = Rl(t, e.mode, r)).return = e, t
                    }
                    if (So(t) || _e(t)) return (t = Ll(t, e.mode, r, null)).return = e, t;
                    wo(e, t)
                }
                return null
            }

            function d(e, t, r, n) {
                var i = null !== t ? t.key : null;
                if ("string" == typeof r || "number" == typeof r) return null !== i ? null : l(e, t, "" + r, n);
                if ("object" == typeof r && null !== r) {
                    switch (r.$$typeof) {
                        case ee:
                            return r.key === i ? r.type === re ? f(e, t, r.props.children, n, i) : c(e, t, r, n) : null;
                        case te:
                            return r.key === i ? u(e, t, r, n) : null
                    }
                    if (So(r) || _e(r)) return null !== i ? null : f(e, t, r, n, null);
                    wo(e, r)
                }
                return null
            }

            function p(e, t, r, n, i) {
                if ("string" == typeof n || "number" == typeof n) return l(t, e = e.get(r) || null, "" + n, i);
                if ("object" == typeof n && null !== n) {
                    switch (n.$$typeof) {
                        case ee:
                            return e = e.get(null === n.key ? r : n.key) || null, n.type === re ? f(t, e, n.props.children, i, n.key) : c(t, e, n, i);
                        case te:
                            return u(t, e = e.get(null === n.key ? r : n.key) || null, n, i)
                    }
                    if (So(n) || _e(n)) return f(t, e = e.get(r) || null, n, i, null);
                    wo(t, n)
                }
                return null
            }

            function _(i, s, a, l) {
                for (var c = null, u = null, f = s, _ = s = 0, v = null; null !== f && _ < a.length; _++) {
                    f.index > _ ? (v = f, f = null) : v = f.sibling;
                    var m = d(i, f, a[_], l);
                    if (null === m) {
                        null === f && (f = v);
                        break
                    }
                    e && f && null === m.alternate && t(i, f), s = o(m, s, _), null === u ? c = m : u.sibling = m, u = m, f = v
                }
                if (_ === a.length) return r(i, f), c;
                if (null === f) {
                    for (; _ < a.length; _++) null !== (f = h(i, a[_], l)) && (s = o(f, s, _), null === u ? c = f : u.sibling = f, u = f);
                    return c
                }
                for (f = n(i, f); _ < a.length; _++) null !== (v = p(f, i, _, a[_], l)) && (e && null !== v.alternate && f.delete(null === v.key ? _ : v.key), s = o(v, s, _), null === u ? c = v : u.sibling = v, u = v);
                return e && f.forEach((function(e) {
                    return t(i, e)
                })), c
            }

            function v(i, a, l, c) {
                var u = _e(l);
                if ("function" != typeof u) throw Error(s(150));
                if (null == (l = u.call(l))) throw Error(s(151));
                for (var f = u = null, _ = a, v = a = 0, m = null, g = l.next(); null !== _ && !g.done; v++, g = l.next()) {
                    _.index > v ? (m = _, _ = null) : m = _.sibling;
                    var y = d(i, _, g.value, c);
                    if (null === y) {
                        null === _ && (_ = m);
                        break
                    }
                    e && _ && null === y.alternate && t(i, _), a = o(y, a, v), null === f ? u = y : f.sibling = y, f = y, _ = m
                }
                if (g.done) return r(i, _), u;
                if (null === _) {
                    for (; !g.done; v++, g = l.next()) null !== (g = h(i, g.value, c)) && (a = o(g, a, v), null === f ? u = g : f.sibling = g, f = g);
                    return u
                }
                for (_ = n(i, _); !g.done; v++, g = l.next()) null !== (g = p(_, i, v, g.value, c)) && (e && null !== g.alternate && _.delete(null === g.key ? v : g.key), a = o(g, a, v), null === f ? u = g : f.sibling = g, f = g);
                return e && _.forEach((function(e) {
                    return t(i, e)
                })), u
            }
            return function(e, n, o, l) {
                var c = "object" == typeof o && null !== o && o.type === re && null === o.key;
                c && (o = o.props.children);
                var u = "object" == typeof o && null !== o;
                if (u) switch (o.$$typeof) {
                    case ee:
                        e: {
                            for (u = o.key, c = n; null !== c;) {
                                if (c.key === u) {
                                    switch (c.tag) {
                                        case 7:
                                            if (o.type === re) {
                                                r(e, c.sibling), (n = i(c, o.props.children)).return = e, e = n;
                                                break e
                                            }
                                            break;
                                        default:
                                            if (c.elementType === o.type) {
                                                r(e, c.sibling), (n = i(c, o.props)).ref = Co(e, c, o), n.return = e, e = n;
                                                break e
                                            }
                                    }
                                    r(e, c);
                                    break
                                }
                                t(e, c), c = c.sibling
                            }
                            o.type === re ? ((n = Ll(o.props.children, e.mode, l, o.key)).return = e, e = n) : ((l = Tl(o.type, o.key, o.props, null, e.mode, l)).ref = Co(e, n, o), l.return = e, e = l)
                        }
                        return a(e);
                    case te:
                        e: {
                            for (c = o.key; null !== n;) {
                                if (n.key === c) {
                                    if (4 === n.tag && n.stateNode.containerInfo === o.containerInfo && n.stateNode.implementation === o.implementation) {
                                        r(e, n.sibling), (n = i(n, o.children || [])).return = e, e = n;
                                        break e
                                    }
                                    r(e, n);
                                    break
                                }
                                t(e, n), n = n.sibling
                            }(n = Rl(o, e.mode, l)).return = e,
                            e = n
                        }
                        return a(e)
                }
                if ("string" == typeof o || "number" == typeof o) return o = "" + o, null !== n && 6 === n.tag ? (r(e, n.sibling), (n = i(n, o)).return = e, e = n) : (r(e, n), (n = Ol(o, e.mode, l)).return = e, e = n), a(e);
                if (So(o)) return _(e, n, o, l);
                if (_e(o)) return v(e, n, o, l);
                if (u && wo(e, o), void 0 === o && !c) switch (e.tag) {
                    case 1:
                    case 0:
                        throw e = e.type, Error(s(152, e.displayName || e.name || "Component"))
                }
                return r(e, n)
            }
        }
        var xo = Eo(!0),
            ko = Eo(!1),
            To = {},
            Lo = {
                current: To
            },
            Oo = {
                current: To
            },
            Ro = {
                current: To
            };

        function Ao(e) {
            if (e === To) throw Error(s(174));
            return e
        }

        function Po(e, t) {
            switch (ci(Ro, t), ci(Oo, e), ci(Lo, To), e = t.nodeType) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : Be(null, "");
                    break;
                default:
                    t = Be(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
            }
            li(Lo), ci(Lo, t)
        }

        function Mo() {
            li(Lo), li(Oo), li(Ro)
        }

        function Do(e) {
            Ao(Ro.current);
            var t = Ao(Lo.current),
                r = Be(t, e.type);
            t !== r && (ci(Oo, e), ci(Lo, r))
        }

        function Io(e) {
            Oo.current === e && (li(Lo), li(Oo))
        }
        var Fo = {
            current: 0
        };

        function Bo(e) {
            for (var t = e; null !== t;) {
                if (13 === t.tag) {
                    var r = t.memoizedState;
                    if (null !== r && (null === (r = r.dehydrated) || "$?" === r.data || "$!" === r.data)) return t
                } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                    if (0 != (64 & t.effectTag)) return t
                } else if (null !== t.child) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === e) break;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            return null
        }

        function Ho(e, t) {
            return {
                responder: e,
                props: t
            }
        }
        var No = Y.ReactCurrentDispatcher,
            jo = Y.ReactCurrentBatchConfig,
            Uo = 0,
            Wo = null,
            zo = null,
            qo = null,
            Ko = !1;

        function Vo() {
            throw Error(s(321))
        }

        function Xo(e, t) {
            if (null === t) return !1;
            for (var r = 0; r < t.length && r < e.length; r++)
                if (!Bn(e[r], t[r])) return !1;
            return !0
        }

        function Go(e, t, r, n, i, o) {
            if (Uo = o, Wo = t, t.memoizedState = null, t.updateQueue = null, t.expirationTime = 0, No.current = null === e || null === e.memoizedState ? ms : gs, e = r(n, i), t.expirationTime === Uo) {
                o = 0;
                do {
                    if (t.expirationTime = 0, !(25 > o)) throw Error(s(301));
                    o += 1, qo = zo = null, t.updateQueue = null, No.current = ys, e = r(n, i)
                } while (t.expirationTime === Uo)
            }
            if (No.current = vs, t = null !== zo && null !== zo.next, Uo = 0, qo = zo = Wo = null, Ko = !1, t) throw Error(s(300));
            return e
        }

        function $o() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return null === qo ? Wo.memoizedState = qo = e : qo = qo.next = e, qo
        }

        function Yo() {
            if (null === zo) {
                var e = Wo.alternate;
                e = null !== e ? e.memoizedState : null
            } else e = zo.next;
            var t = null === qo ? Wo.memoizedState : qo.next;
            if (null !== t) qo = t, zo = e;
            else {
                if (null === e) throw Error(s(310));
                e = {
                    memoizedState: (zo = e).memoizedState,
                    baseState: zo.baseState,
                    baseQueue: zo.baseQueue,
                    queue: zo.queue,
                    next: null
                }, null === qo ? Wo.memoizedState = qo = e : qo = qo.next = e
            }
            return qo
        }

        function Qo(e, t) {
            return "function" == typeof t ? t(e) : t
        }

        function Zo(e) {
            var t = Yo(),
                r = t.queue;
            if (null === r) throw Error(s(311));
            r.lastRenderedReducer = e;
            var n = zo,
                i = n.baseQueue,
                o = r.pending;
            if (null !== o) {
                if (null !== i) {
                    var a = i.next;
                    i.next = o.next, o.next = a
                }
                n.baseQueue = i = o, r.pending = null
            }
            if (null !== i) {
                i = i.next, n = n.baseState;
                var l = a = o = null,
                    c = i;
                do {
                    var u = c.expirationTime;
                    if (u < Uo) {
                        var f = {
                            expirationTime: c.expirationTime,
                            suspenseConfig: c.suspenseConfig,
                            action: c.action,
                            eagerReducer: c.eagerReducer,
                            eagerState: c.eagerState,
                            next: null
                        };
                        null === l ? (a = l = f, o = n) : l = l.next = f, u > Wo.expirationTime && (Wo.expirationTime = u, sl(u))
                    } else null !== l && (l = l.next = {
                        expirationTime: 1073741823,
                        suspenseConfig: c.suspenseConfig,
                        action: c.action,
                        eagerReducer: c.eagerReducer,
                        eagerState: c.eagerState,
                        next: null
                    }), ol(u, c.suspenseConfig), n = c.eagerReducer === e ? c.eagerState : e(n, c.action);
                    c = c.next
                } while (null !== c && c !== i);
                null === l ? o = n : l.next = a, Bn(n, t.memoizedState) || (Rs = !0), t.memoizedState = n, t.baseState = o, t.baseQueue = l, r.lastRenderedState = n
            }
            return [t.memoizedState, r.dispatch]
        }

        function Jo(e) {
            var t = Yo(),
                r = t.queue;
            if (null === r) throw Error(s(311));
            r.lastRenderedReducer = e;
            var n = r.dispatch,
                i = r.pending,
                o = t.memoizedState;
            if (null !== i) {
                r.pending = null;
                var a = i = i.next;
                do {
                    o = e(o, a.action), a = a.next
                } while (a !== i);
                Bn(o, t.memoizedState) || (Rs = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), r.lastRenderedState = o
            }
            return [o, n]
        }

        function es(e) {
            var t = $o();
            return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: Qo,
                lastRenderedState: e
            }).dispatch = _s.bind(null, Wo, e), [t.memoizedState, e]
        }

        function ts(e, t, r, n) {
            return e = {
                tag: e,
                create: t,
                destroy: r,
                deps: n,
                next: null
            }, null === (t = Wo.updateQueue) ? (t = {
                lastEffect: null
            }, Wo.updateQueue = t, t.lastEffect = e.next = e) : null === (r = t.lastEffect) ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e), e
        }

        function rs() {
            return Yo().memoizedState
        }

        function ns(e, t, r, n) {
            var i = $o();
            Wo.effectTag |= e, i.memoizedState = ts(1 | t, r, void 0, void 0 === n ? null : n)
        }

        function is(e, t, r, n) {
            var i = Yo();
            n = void 0 === n ? null : n;
            var o = void 0;
            if (null !== zo) {
                var s = zo.memoizedState;
                if (o = s.destroy, null !== n && Xo(n, s.deps)) return void ts(t, r, o, n)
            }
            Wo.effectTag |= e, i.memoizedState = ts(1 | t, r, o, n)
        }

        function os(e, t) {
            return ns(516, 4, e, t)
        }

        function ss(e, t) {
            return is(516, 4, e, t)
        }

        function as(e, t) {
            return is(4, 2, e, t)
        }

        function ls(e, t) {
            return "function" == typeof t ? (e = e(), t(e), function() {
                t(null)
            }) : null != t ? (e = e(), t.current = e, function() {
                t.current = null
            }) : void 0
        }

        function cs(e, t, r) {
            return r = null != r ? r.concat([e]) : null, is(4, 2, ls.bind(null, t, e), r)
        }

        function us() {}

        function fs(e, t) {
            return $o().memoizedState = [e, void 0 === t ? null : t], e
        }

        function hs(e, t) {
            var r = Yo();
            t = void 0 === t ? null : t;
            var n = r.memoizedState;
            return null !== n && null !== t && Xo(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
        }

        function ds(e, t) {
            var r = Yo();
            t = void 0 === t ? null : t;
            var n = r.memoizedState;
            return null !== n && null !== t && Xo(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
        }

        function ps(e, t, r) {
            var n = ji();
            Wi(98 > n ? 98 : n, (function() {
                e(!0)
            })), Wi(97 < n ? 97 : n, (function() {
                var n = jo.suspense;
                jo.suspense = void 0 === t ? null : t;
                try {
                    e(!1), r()
                } finally {
                    jo.suspense = n
                }
            }))
        }

        function _s(e, t, r) {
            var n = Va(),
                i = ho.suspense;
            i = {
                expirationTime: n = Xa(n, e, i),
                suspenseConfig: i,
                action: r,
                eagerReducer: null,
                eagerState: null,
                next: null
            };
            var o = t.pending;
            if (null === o ? i.next = i : (i.next = o.next, o.next = i), t.pending = i, o = e.alternate, e === Wo || null !== o && o === Wo) Ko = !0, i.expirationTime = Uo, Wo.expirationTime = Uo;
            else {
                if (0 === e.expirationTime && (null === o || 0 === o.expirationTime) && null !== (o = t.lastRenderedReducer)) try {
                    var s = t.lastRenderedState,
                        a = o(s, r);
                    if (i.eagerReducer = o, i.eagerState = a, Bn(a, s)) return
                } catch (e) {}
                Ga(e, n)
            }
        }
        var vs = {
                readContext: no,
                useCallback: Vo,
                useContext: Vo,
                useEffect: Vo,
                useImperativeHandle: Vo,
                useLayoutEffect: Vo,
                useMemo: Vo,
                useReducer: Vo,
                useRef: Vo,
                useState: Vo,
                useDebugValue: Vo,
                useResponder: Vo,
                useDeferredValue: Vo,
                useTransition: Vo
            },
            ms = {
                readContext: no,
                useCallback: fs,
                useContext: no,
                useEffect: os,
                useImperativeHandle: function(e, t, r) {
                    return r = null != r ? r.concat([e]) : null, ns(4, 2, ls.bind(null, t, e), r)
                },
                useLayoutEffect: function(e, t) {
                    return ns(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var r = $o();
                    return t = void 0 === t ? null : t, e = e(), r.memoizedState = [e, t], e
                },
                useReducer: function(e, t, r) {
                    var n = $o();
                    return t = void 0 !== r ? r(t) : t, n.memoizedState = n.baseState = t, e = (e = n.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }).dispatch = _s.bind(null, Wo, e), [n.memoizedState, e]
                },
                useRef: function(e) {
                    return e = {
                        current: e
                    }, $o().memoizedState = e
                },
                useState: es,
                useDebugValue: us,
                useResponder: Ho,
                useDeferredValue: function(e, t) {
                    var r = es(e),
                        n = r[0],
                        i = r[1];
                    return os((function() {
                        var r = jo.suspense;
                        jo.suspense = void 0 === t ? null : t;
                        try {
                            i(e)
                        } finally {
                            jo.suspense = r
                        }
                    }), [e, t]), n
                },
                useTransition: function(e) {
                    var t = es(!1),
                        r = t[0];
                    return t = t[1], [fs(ps.bind(null, t, e), [t, e]), r]
                }
            },
            gs = {
                readContext: no,
                useCallback: hs,
                useContext: no,
                useEffect: ss,
                useImperativeHandle: cs,
                useLayoutEffect: as,
                useMemo: ds,
                useReducer: Zo,
                useRef: rs,
                useState: function() {
                    return Zo(Qo)
                },
                useDebugValue: us,
                useResponder: Ho,
                useDeferredValue: function(e, t) {
                    var r = Zo(Qo),
                        n = r[0],
                        i = r[1];
                    return ss((function() {
                        var r = jo.suspense;
                        jo.suspense = void 0 === t ? null : t;
                        try {
                            i(e)
                        } finally {
                            jo.suspense = r
                        }
                    }), [e, t]), n
                },
                useTransition: function(e) {
                    var t = Zo(Qo),
                        r = t[0];
                    return t = t[1], [hs(ps.bind(null, t, e), [t, e]), r]
                }
            },
            ys = {
                readContext: no,
                useCallback: hs,
                useContext: no,
                useEffect: ss,
                useImperativeHandle: cs,
                useLayoutEffect: as,
                useMemo: ds,
                useReducer: Jo,
                useRef: rs,
                useState: function() {
                    return Jo(Qo)
                },
                useDebugValue: us,
                useResponder: Ho,
                useDeferredValue: function(e, t) {
                    var r = Jo(Qo),
                        n = r[0],
                        i = r[1];
                    return ss((function() {
                        var r = jo.suspense;
                        jo.suspense = void 0 === t ? null : t;
                        try {
                            i(e)
                        } finally {
                            jo.suspense = r
                        }
                    }), [e, t]), n
                },
                useTransition: function(e) {
                    var t = Jo(Qo),
                        r = t[0];
                    return t = t[1], [hs(ps.bind(null, t, e), [t, e]), r]
                }
            },
            bs = null,
            Ss = null,
            Cs = !1;

        function ws(e, t) {
            var r = El(5, null, null, 0);
            r.elementType = "DELETED", r.type = "DELETED", r.stateNode = t, r.return = e, r.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = r, e.lastEffect = r) : e.firstEffect = e.lastEffect = r
        }

        function Es(e, t) {
            switch (e.tag) {
                case 5:
                    var r = e.type;
                    return null !== (t = 1 !== t.nodeType || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                case 6:
                    return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                case 13:
                default:
                    return !1
            }
        }

        function xs(e) {
            if (Cs) {
                var t = Ss;
                if (t) {
                    var r = t;
                    if (!Es(e, t)) {
                        if (!(t = br(r.nextSibling)) || !Es(e, t)) return e.effectTag = -1025 & e.effectTag | 2, Cs = !1, void(bs = e);
                        ws(bs, r)
                    }
                    bs = e, Ss = br(t.firstChild)
                } else e.effectTag = -1025 & e.effectTag | 2, Cs = !1, bs = e
            }
        }

        function ks(e) {
            for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
            bs = e
        }

        function Ts(e) {
            if (e !== bs) return !1;
            if (!Cs) return ks(e), Cs = !0, !1;
            var t = e.type;
            if (5 !== e.tag || "head" !== t && "body" !== t && !mr(t, e.memoizedProps))
                for (t = Ss; t;) ws(e, t), t = br(t.nextSibling);
            if (ks(e), 13 === e.tag) {
                if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(s(317));
                e: {
                    for (e = e.nextSibling, t = 0; e;) {
                        if (8 === e.nodeType) {
                            var r = e.data;
                            if ("/$" === r) {
                                if (0 === t) {
                                    Ss = br(e.nextSibling);
                                    break e
                                }
                                t--
                            } else "$" !== r && "$!" !== r && "$?" !== r || t++
                        }
                        e = e.nextSibling
                    }
                    Ss = null
                }
            } else Ss = bs ? br(e.stateNode.nextSibling) : null;
            return !0
        }

        function Ls() {
            Ss = bs = null, Cs = !1
        }
        var Os = Y.ReactCurrentOwner,
            Rs = !1;

        function As(e, t, r, n) {
            t.child = null === e ? ko(t, null, r, n) : xo(t, e.child, r, n)
        }

        function Ps(e, t, r, n, i) {
            r = r.render;
            var o = t.ref;
            return ro(t, i), n = Go(e, t, r, n, o, i), null === e || Rs ? (t.effectTag |= 1, As(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), Gs(e, t, i))
        }

        function Ms(e, t, r, n, i, o) {
            if (null === e) {
                var s = r.type;
                return "function" != typeof s || xl(s) || void 0 !== s.defaultProps || null !== r.compare || void 0 !== r.defaultProps ? ((e = Tl(r.type, null, n, null, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = s, Ds(e, t, s, n, i, o))
            }
            return s = e.child, i < o && (i = s.memoizedProps, (r = null !== (r = r.compare) ? r : Nn)(i, n) && e.ref === t.ref) ? Gs(e, t, o) : (t.effectTag |= 1, (e = kl(s, n)).ref = t.ref, e.return = t, t.child = e)
        }

        function Ds(e, t, r, n, i, o) {
            return null !== e && Nn(e.memoizedProps, n) && e.ref === t.ref && (Rs = !1, i < o) ? (t.expirationTime = e.expirationTime, Gs(e, t, o)) : Fs(e, t, r, n, o)
        }

        function Is(e, t) {
            var r = t.ref;
            (null === e && null !== r || null !== e && e.ref !== r) && (t.effectTag |= 128)
        }

        function Fs(e, t, r, n, i) {
            var o = _i(r) ? di : fi.current;
            return o = pi(t, o), ro(t, i), r = Go(e, t, r, n, o, i), null === e || Rs ? (t.effectTag |= 1, As(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), Gs(e, t, i))
        }

        function Bs(e, t, r, n, i) {
            if (_i(r)) {
                var o = !0;
                yi(t)
            } else o = !1;
            if (ro(t, i), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), go(t, r, n), bo(t, r, n, i), n = !0;
            else if (null === e) {
                var s = t.stateNode,
                    a = t.memoizedProps;
                s.props = a;
                var l = s.context,
                    c = r.contextType;
                "object" == typeof c && null !== c ? c = no(c) : c = pi(t, c = _i(r) ? di : fi.current);
                var u = r.getDerivedStateFromProps,
                    f = "function" == typeof u || "function" == typeof s.getSnapshotBeforeUpdate;
                f || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (a !== n || l !== c) && yo(t, s, n, c), io = !1;
                var h = t.memoizedState;
                s.state = h, uo(t, n, s, i), l = t.memoizedState, a !== n || h !== l || hi.current || io ? ("function" == typeof u && (_o(t, r, u, n), l = t.memoizedState), (a = io || mo(t, r, a, n, h, l, c)) ? (f || "function" != typeof s.UNSAFE_componentWillMount && "function" != typeof s.componentWillMount || ("function" == typeof s.componentWillMount && s.componentWillMount(), "function" == typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" == typeof s.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof s.componentDidMount && (t.effectTag |= 4), t.memoizedProps = n, t.memoizedState = l), s.props = n, s.state = l, s.context = c, n = a) : ("function" == typeof s.componentDidMount && (t.effectTag |= 4), n = !1)
            } else s = t.stateNode, so(e, t), a = t.memoizedProps, s.props = t.type === t.elementType ? a : Gi(t.type, a), l = s.context, "object" == typeof(c = r.contextType) && null !== c ? c = no(c) : c = pi(t, c = _i(r) ? di : fi.current), (f = "function" == typeof(u = r.getDerivedStateFromProps) || "function" == typeof s.getSnapshotBeforeUpdate) || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (a !== n || l !== c) && yo(t, s, n, c), io = !1, l = t.memoizedState, s.state = l, uo(t, n, s, i), h = t.memoizedState, a !== n || l !== h || hi.current || io ? ("function" == typeof u && (_o(t, r, u, n), h = t.memoizedState), (u = io || mo(t, r, a, n, l, h, c)) ? (f || "function" != typeof s.UNSAFE_componentWillUpdate && "function" != typeof s.componentWillUpdate || ("function" == typeof s.componentWillUpdate && s.componentWillUpdate(n, h, c), "function" == typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(n, h, c)), "function" == typeof s.componentDidUpdate && (t.effectTag |= 4), "function" == typeof s.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof s.componentDidUpdate || a === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof s.getSnapshotBeforeUpdate || a === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = n, t.memoizedState = h), s.props = n, s.state = h, s.context = c, n = u) : ("function" != typeof s.componentDidUpdate || a === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof s.getSnapshotBeforeUpdate || a === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), n = !1);
            return Hs(e, t, r, n, o, i)
        }

        function Hs(e, t, r, n, i, o) {
            Is(e, t);
            var s = 0 != (64 & t.effectTag);
            if (!n && !s) return i && bi(t, r, !1), Gs(e, t, o);
            n = t.stateNode, Os.current = t;
            var a = s && "function" != typeof r.getDerivedStateFromError ? null : n.render();
            return t.effectTag |= 1, null !== e && s ? (t.child = xo(t, e.child, null, o), t.child = xo(t, null, a, o)) : As(e, t, a, o), t.memoizedState = n.state, i && bi(t, r, !0), t.child
        }

        function Ns(e) {
            var t = e.stateNode;
            t.pendingContext ? mi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && mi(0, t.context, !1), Po(e, t.containerInfo)
        }
        var js, Us, Ws, zs = {
            dehydrated: null,
            retryTime: 0
        };

        function qs(e, t, r) {
            var n, i = t.mode,
                o = t.pendingProps,
                s = Fo.current,
                a = !1;
            if ((n = 0 != (64 & t.effectTag)) || (n = 0 != (2 & s) && (null === e || null !== e.memoizedState)), n ? (a = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (s |= 1), ci(Fo, 1 & s), null === e) {
                if (void 0 !== o.fallback && xs(t), a) {
                    if (a = o.fallback, (o = Ll(null, i, 0, null)).return = t, 0 == (2 & t.mode))
                        for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e;) e.return = o, e = e.sibling;
                    return (r = Ll(a, i, r, null)).return = t, o.sibling = r, t.memoizedState = zs, t.child = o, r
                }
                return i = o.children, t.memoizedState = null, t.child = ko(t, null, i, r)
            }
            if (null !== e.memoizedState) {
                if (i = (e = e.child).sibling, a) {
                    if (o = o.fallback, (r = kl(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (a = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
                        for (r.child = a; null !== a;) a.return = r, a = a.sibling;
                    return (i = kl(i, o)).return = t, r.sibling = i, r.childExpirationTime = 0, t.memoizedState = zs, t.child = r, i
                }
                return r = xo(t, e.child, o.children, r), t.memoizedState = null, t.child = r
            }
            if (e = e.child, a) {
                if (a = o.fallback, (o = Ll(null, i, 0, null)).return = t, o.child = e, null !== e && (e.return = o), 0 == (2 & t.mode))
                    for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e;) e.return = o, e = e.sibling;
                return (r = Ll(a, i, r, null)).return = t, o.sibling = r, r.effectTag |= 2, o.childExpirationTime = 0, t.memoizedState = zs, t.child = o, r
            }
            return t.memoizedState = null, t.child = xo(t, e, o.children, r)
        }

        function Ks(e, t) {
            e.expirationTime < t && (e.expirationTime = t);
            var r = e.alternate;
            null !== r && r.expirationTime < t && (r.expirationTime = t), to(e.return, t)
        }

        function Vs(e, t, r, n, i, o) {
            var s = e.memoizedState;
            null === s ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: n,
                tail: r,
                tailExpiration: 0,
                tailMode: i,
                lastEffect: o
            } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = r, s.tailExpiration = 0, s.tailMode = i, s.lastEffect = o)
        }

        function Xs(e, t, r) {
            var n = t.pendingProps,
                i = n.revealOrder,
                o = n.tail;
            if (As(e, t, n.children, r), 0 != (2 & (n = Fo.current))) n = 1 & n | 2, t.effectTag |= 64;
            else {
                if (null !== e && 0 != (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
                    if (13 === e.tag) null !== e.memoizedState && Ks(e, r);
                    else if (19 === e.tag) Ks(e, r);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t) break e;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                n &= 1
            }
            if (ci(Fo, n), 0 == (2 & t.mode)) t.memoizedState = null;
            else switch (i) {
                case "forwards":
                    for (r = t.child, i = null; null !== r;) null !== (e = r.alternate) && null === Bo(e) && (i = r), r = r.sibling;
                    null === (r = i) ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), Vs(t, !1, i, r, o, t.lastEffect);
                    break;
                case "backwards":
                    for (r = null, i = t.child, t.child = null; null !== i;) {
                        if (null !== (e = i.alternate) && null === Bo(e)) {
                            t.child = i;
                            break
                        }
                        e = i.sibling, i.sibling = r, r = i, i = e
                    }
                    Vs(t, !0, r, null, o, t.lastEffect);
                    break;
                case "together":
                    Vs(t, !1, null, null, void 0, t.lastEffect);
                    break;
                default:
                    t.memoizedState = null
            }
            return t.child
        }

        function Gs(e, t, r) {
            null !== e && (t.dependencies = e.dependencies);
            var n = t.expirationTime;
            if (0 !== n && sl(n), t.childExpirationTime < r) return null;
            if (null !== e && t.child !== e.child) throw Error(s(153));
            if (null !== t.child) {
                for (r = kl(e = t.child, e.pendingProps), t.child = r, r.return = t; null !== e.sibling;) e = e.sibling, (r = r.sibling = kl(e, e.pendingProps)).return = t;
                r.sibling = null
            }
            return t.child
        }

        function $s(e, t) {
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var r = null; null !== t;) null !== t.alternate && (r = t), t = t.sibling;
                    null === r ? e.tail = null : r.sibling = null;
                    break;
                case "collapsed":
                    r = e.tail;
                    for (var n = null; null !== r;) null !== r.alternate && (n = r), r = r.sibling;
                    null === n ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : n.sibling = null
            }
        }

        function Ys(e, t, r) {
            var n = t.pendingProps;
            switch (t.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return null;
                case 1:
                    return _i(t.type) && vi(), null;
                case 3:
                    return Mo(), li(hi), li(fi), (r = t.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || !Ts(t) || (t.effectTag |= 4), null;
                case 5:
                    Io(t), r = Ao(Ro.current);
                    var o = t.type;
                    if (null !== e && null != t.stateNode) Us(e, t, o, n, r), e.ref !== t.ref && (t.effectTag |= 128);
                    else {
                        if (!n) {
                            if (null === t.stateNode) throw Error(s(166));
                            return null
                        }
                        if (e = Ao(Lo.current), Ts(t)) {
                            n = t.stateNode, o = t.type;
                            var a = t.memoizedProps;
                            switch (n[wr] = t, n[Er] = a, o) {
                                case "iframe":
                                case "object":
                                case "embed":
                                    Xt("load", n);
                                    break;
                                case "video":
                                case "audio":
                                    for (e = 0; e < Ye.length; e++) Xt(Ye[e], n);
                                    break;
                                case "source":
                                    Xt("error", n);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Xt("error", n), Xt("load", n);
                                    break;
                                case "form":
                                    Xt("reset", n), Xt("submit", n);
                                    break;
                                case "details":
                                    Xt("toggle", n);
                                    break;
                                case "input":
                                    we(n, a), Xt("invalid", n), ar(r, "onChange");
                                    break;
                                case "select":
                                    n._wrapperState = {
                                        wasMultiple: !!a.multiple
                                    }, Xt("invalid", n), ar(r, "onChange");
                                    break;
                                case "textarea":
                                    Ae(n, a), Xt("invalid", n), ar(r, "onChange")
                            }
                            for (var l in ir(o, a), e = null, a)
                                if (a.hasOwnProperty(l)) {
                                    var c = a[l];
                                    "children" === l ? "string" == typeof c ? n.textContent !== c && (e = ["children", c]) : "number" == typeof c && n.textContent !== "" + c && (e = ["children", "" + c]) : E.hasOwnProperty(l) && null != c && ar(r, l)
                                } switch (o) {
                                case "input":
                                    be(n), ke(n, a, !0);
                                    break;
                                case "textarea":
                                    be(n), Me(n);
                                    break;
                                case "select":
                                case "option":
                                    break;
                                default:
                                    "function" == typeof a.onClick && (n.onclick = lr)
                            }
                            r = e, t.updateQueue = r, null !== r && (t.effectTag |= 4)
                        } else {
                            switch (l = 9 === r.nodeType ? r : r.ownerDocument, e === sr && (e = Fe(o)), e === sr ? "script" === o ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof n.is ? e = l.createElement(o, {
                                    is: n.is
                                }) : (e = l.createElement(o), "select" === o && (l = e, n.multiple ? l.multiple = !0 : n.size && (l.size = n.size))) : e = l.createElementNS(e, o), e[wr] = t, e[Er] = n, js(e, t), t.stateNode = e, l = or(o, n), o) {
                                case "iframe":
                                case "object":
                                case "embed":
                                    Xt("load", e), c = n;
                                    break;
                                case "video":
                                case "audio":
                                    for (c = 0; c < Ye.length; c++) Xt(Ye[c], e);
                                    c = n;
                                    break;
                                case "source":
                                    Xt("error", e), c = n;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Xt("error", e), Xt("load", e), c = n;
                                    break;
                                case "form":
                                    Xt("reset", e), Xt("submit", e), c = n;
                                    break;
                                case "details":
                                    Xt("toggle", e), c = n;
                                    break;
                                case "input":
                                    we(e, n), c = Ce(e, n), Xt("invalid", e), ar(r, "onChange");
                                    break;
                                case "option":
                                    c = Le(e, n);
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!n.multiple
                                    }, c = i({}, n, {
                                        value: void 0
                                    }), Xt("invalid", e), ar(r, "onChange");
                                    break;
                                case "textarea":
                                    Ae(e, n), c = Re(e, n), Xt("invalid", e), ar(r, "onChange");
                                    break;
                                default:
                                    c = n
                            }
                            ir(o, c);
                            var u = c;
                            for (a in u)
                                if (u.hasOwnProperty(a)) {
                                    var f = u[a];
                                    "style" === a ? rr(e, f) : "dangerouslySetInnerHTML" === a ? null != (f = f ? f.__html : void 0) && Ne(e, f) : "children" === a ? "string" == typeof f ? ("textarea" !== o || "" !== f) && je(e, f) : "number" == typeof f && je(e, "" + f) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (E.hasOwnProperty(a) ? null != f && ar(r, a) : null != f && Q(e, a, f, l))
                                } switch (o) {
                                case "input":
                                    be(e), ke(e, n, !1);
                                    break;
                                case "textarea":
                                    be(e), Me(e);
                                    break;
                                case "option":
                                    null != n.value && e.setAttribute("value", "" + ge(n.value));
                                    break;
                                case "select":
                                    e.multiple = !!n.multiple, null != (r = n.value) ? Oe(e, !!n.multiple, r, !1) : null != n.defaultValue && Oe(e, !!n.multiple, n.defaultValue, !0);
                                    break;
                                default:
                                    "function" == typeof c.onClick && (e.onclick = lr)
                            }
                            vr(o, n) && (t.effectTag |= 4)
                        }
                        null !== t.ref && (t.effectTag |= 128)
                    }
                    return null;
                case 6:
                    if (e && null != t.stateNode) Ws(0, t, e.memoizedProps, n);
                    else {
                        if ("string" != typeof n && null === t.stateNode) throw Error(s(166));
                        r = Ao(Ro.current), Ao(Lo.current), Ts(t) ? (r = t.stateNode, n = t.memoizedProps, r[wr] = t, r.nodeValue !== n && (t.effectTag |= 4)) : ((r = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(n))[wr] = t, t.stateNode = r)
                    }
                    return null;
                case 13:
                    return li(Fo), n = t.memoizedState, 0 != (64 & t.effectTag) ? (t.expirationTime = r, t) : (r = null !== n, n = !1, null === e ? void 0 !== t.memoizedProps.fallback && Ts(t) : (n = null !== (o = e.memoizedState), r || null === o || null !== (o = e.child.sibling) && (null !== (a = t.firstEffect) ? (t.firstEffect = o, o.nextEffect = a) : (t.firstEffect = t.lastEffect = o, o.nextEffect = null), o.effectTag = 8)), r && !n && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Fo.current) ? Ta === ba && (Ta = Sa) : (Ta !== ba && Ta !== Sa || (Ta = Ca), 0 !== Pa && null !== Ea && (Ml(Ea, ka), Dl(Ea, Pa)))), (r || n) && (t.effectTag |= 4), null);
                case 4:
                    return Mo(), null;
                case 10:
                    return eo(t), null;
                case 17:
                    return _i(t.type) && vi(), null;
                case 19:
                    if (li(Fo), null === (n = t.memoizedState)) return null;
                    if (o = 0 != (64 & t.effectTag), null === (a = n.rendering)) {
                        if (o) $s(n, !1);
                        else if (Ta !== ba || null !== e && 0 != (64 & e.effectTag))
                            for (a = t.child; null !== a;) {
                                if (null !== (e = Bo(a))) {
                                    for (t.effectTag |= 64, $s(n, !1), null !== (o = e.updateQueue) && (t.updateQueue = o, t.effectTag |= 4), null === n.lastEffect && (t.firstEffect = null), t.lastEffect = n.lastEffect, n = t.child; null !== n;) a = r, (o = n).effectTag &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, null === (e = o.alternate) ? (o.childExpirationTime = 0, o.expirationTime = a, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null) : (o.childExpirationTime = e.childExpirationTime, o.expirationTime = e.expirationTime, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, a = e.dependencies, o.dependencies = null === a ? null : {
                                        expirationTime: a.expirationTime,
                                        firstContext: a.firstContext,
                                        responders: a.responders
                                    }), n = n.sibling;
                                    return ci(Fo, 1 & Fo.current | 2), t.child
                                }
                                a = a.sibling
                            }
                    } else {
                        if (!o)
                            if (null !== (e = Bo(a))) {
                                if (t.effectTag |= 64, o = !0, null !== (r = e.updateQueue) && (t.updateQueue = r, t.effectTag |= 4), $s(n, !0), null === n.tail && "hidden" === n.tailMode && !a.alternate) return null !== (t = t.lastEffect = n.lastEffect) && (t.nextEffect = null), null
                            } else 2 * Ni() - n.renderingStartTime > n.tailExpiration && 1 < r && (t.effectTag |= 64, o = !0, $s(n, !1), t.expirationTime = t.childExpirationTime = r - 1);
                        n.isBackwards ? (a.sibling = t.child, t.child = a) : (null !== (r = n.last) ? r.sibling = a : t.child = a, n.last = a)
                    }
                    return null !== n.tail ? (0 === n.tailExpiration && (n.tailExpiration = Ni() + 500), r = n.tail, n.rendering = r, n.tail = r.sibling, n.lastEffect = t.lastEffect, n.renderingStartTime = Ni(), r.sibling = null, t = Fo.current, ci(Fo, o ? 1 & t | 2 : 1 & t), r) : null
            }
            throw Error(s(156, t.tag))
        }

        function Qs(e) {
            switch (e.tag) {
                case 1:
                    _i(e.type) && vi();
                    var t = e.effectTag;
                    return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
                case 3:
                    if (Mo(), li(hi), li(fi), 0 != (64 & (t = e.effectTag))) throw Error(s(285));
                    return e.effectTag = -4097 & t | 64, e;
                case 5:
                    return Io(e), null;
                case 13:
                    return li(Fo), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
                case 19:
                    return li(Fo), null;
                case 4:
                    return Mo(), null;
                case 10:
                    return eo(e), null;
                default:
                    return null
            }
        }

        function Zs(e, t) {
            return {
                value: e,
                source: t,
                stack: me(t)
            }
        }
        js = function(e, t) {
            for (var r = t.child; null !== r;) {
                if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
                else if (4 !== r.tag && null !== r.child) {
                    r.child.return = r, r = r.child;
                    continue
                }
                if (r === t) break;
                for (; null === r.sibling;) {
                    if (null === r.return || r.return === t) return;
                    r = r.return
                }
                r.sibling.return = r.return, r = r.sibling
            }
        }, Us = function(e, t, r, n, o) {
            var s = e.memoizedProps;
            if (s !== n) {
                var a, l, c = t.stateNode;
                switch (Ao(Lo.current), e = null, r) {
                    case "input":
                        s = Ce(c, s), n = Ce(c, n), e = [];
                        break;
                    case "option":
                        s = Le(c, s), n = Le(c, n), e = [];
                        break;
                    case "select":
                        s = i({}, s, {
                            value: void 0
                        }), n = i({}, n, {
                            value: void 0
                        }), e = [];
                        break;
                    case "textarea":
                        s = Re(c, s), n = Re(c, n), e = [];
                        break;
                    default:
                        "function" != typeof s.onClick && "function" == typeof n.onClick && (c.onclick = lr)
                }
                for (a in ir(r, n), r = null, s)
                    if (!n.hasOwnProperty(a) && s.hasOwnProperty(a) && null != s[a])
                        if ("style" === a)
                            for (l in c = s[a]) c.hasOwnProperty(l) && (r || (r = {}), r[l] = "");
                        else "dangerouslySetInnerHTML" !== a && "children" !== a && "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (E.hasOwnProperty(a) ? e || (e = []) : (e = e || []).push(a, null));
                for (a in n) {
                    var u = n[a];
                    if (c = null != s ? s[a] : void 0, n.hasOwnProperty(a) && u !== c && (null != u || null != c))
                        if ("style" === a)
                            if (c) {
                                for (l in c) !c.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (r || (r = {}), r[l] = "");
                                for (l in u) u.hasOwnProperty(l) && c[l] !== u[l] && (r || (r = {}), r[l] = u[l])
                            } else r || (e || (e = []), e.push(a, r)), r = u;
                    else "dangerouslySetInnerHTML" === a ? (u = u ? u.__html : void 0, c = c ? c.__html : void 0, null != u && c !== u && (e = e || []).push(a, u)) : "children" === a ? c === u || "string" != typeof u && "number" != typeof u || (e = e || []).push(a, "" + u) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && (E.hasOwnProperty(a) ? (null != u && ar(o, a), e || c === u || (e = [])) : (e = e || []).push(a, u))
                }
                r && (e = e || []).push("style", r), o = e, (t.updateQueue = o) && (t.effectTag |= 4)
            }
        }, Ws = function(e, t, r, n) {
            r !== n && (t.effectTag |= 4)
        };
        var Js = "function" == typeof WeakSet ? WeakSet : Set;

        function ea(e, t) {
            var r = t.source,
                n = t.stack;
            null === n && null !== r && (n = me(r)), null !== r && ve(r.type), t = t.value, null !== e && 1 === e.tag && ve(e.type);
            try {
                console.error(t)
            } catch (e) {
                setTimeout((function() {
                    throw e
                }))
            }
        }

        function ta(e) {
            var t = e.ref;
            if (null !== t)
                if ("function" == typeof t) try {
                    t(null)
                } catch (t) {
                    gl(e, t)
                } else t.current = null
        }

        function ra(e, t) {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                    return;
                case 1:
                    if (256 & t.effectTag && null !== e) {
                        var r = e.memoizedProps,
                            n = e.memoizedState;
                        t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? r : Gi(t.type, r), n), e.__reactInternalSnapshotBeforeUpdate = t
                    }
                    return;
                case 3:
                case 5:
                case 6:
                case 4:
                case 17:
                    return
            }
            throw Error(s(163))
        }

        function na(e, t) {
            if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                var r = t = t.next;
                do {
                    if ((r.tag & e) === e) {
                        var n = r.destroy;
                        r.destroy = void 0, void 0 !== n && n()
                    }
                    r = r.next
                } while (r !== t)
            }
        }

        function ia(e, t) {
            if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                var r = t = t.next;
                do {
                    if ((r.tag & e) === e) {
                        var n = r.create;
                        r.destroy = n()
                    }
                    r = r.next
                } while (r !== t)
            }
        }

        function oa(e, t, r) {
            switch (r.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                    return void ia(3, r);
                case 1:
                    if (e = r.stateNode, 4 & r.effectTag)
                        if (null === t) e.componentDidMount();
                        else {
                            var n = r.elementType === r.type ? t.memoizedProps : Gi(r.type, t.memoizedProps);
                            e.componentDidUpdate(n, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate)
                        } return void(null !== (t = r.updateQueue) && fo(r, t, e));
                case 3:
                    if (null !== (t = r.updateQueue)) {
                        if (e = null, null !== r.child) switch (r.child.tag) {
                            case 5:
                                e = r.child.stateNode;
                                break;
                            case 1:
                                e = r.child.stateNode
                        }
                        fo(r, t, e)
                    }
                    return;
                case 5:
                    return e = r.stateNode, void(null === t && 4 & r.effectTag && vr(r.type, r.memoizedProps) && e.focus());
                case 6:
                case 4:
                case 12:
                    return;
                case 13:
                    return void(null === r.memoizedState && (r = r.alternate, null !== r && (r = r.memoizedState, null !== r && (r = r.dehydrated, null !== r && Ft(r)))));
                case 19:
                case 17:
                case 20:
                case 21:
                    return
            }
            throw Error(s(163))
        }

        function sa(e, t, r) {
            switch ("function" == typeof Cl && Cl(t), t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                        var n = e.next;
                        Wi(97 < r ? 97 : r, (function() {
                            var e = n;
                            do {
                                var r = e.destroy;
                                if (void 0 !== r) {
                                    var i = t;
                                    try {
                                        r()
                                    } catch (e) {
                                        gl(i, e)
                                    }
                                }
                                e = e.next
                            } while (e !== n)
                        }))
                    }
                    break;
                case 1:
                    ta(t), "function" == typeof(r = t.stateNode).componentWillUnmount && function(e, t) {
                        try {
                            t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                        } catch (t) {
                            gl(e, t)
                        }
                    }(t, r);
                    break;
                case 5:
                    ta(t);
                    break;
                case 4:
                    ua(e, t, r)
            }
        }

        function aa(e) {
            var t = e.alternate;
            e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, null !== t && aa(t)
        }

        function la(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag
        }

        function ca(e) {
            e: {
                for (var t = e.return; null !== t;) {
                    if (la(t)) {
                        var r = t;
                        break e
                    }
                    t = t.return
                }
                throw Error(s(160))
            }
            switch (t = r.stateNode, r.tag) {
                case 5:
                    var n = !1;
                    break;
                case 3:
                case 4:
                    t = t.containerInfo, n = !0;
                    break;
                default:
                    throw Error(s(161))
            }
            16 & r.effectTag && (je(t, ""), r.effectTag &= -17);e: t: for (r = e;;) {
                for (; null === r.sibling;) {
                    if (null === r.return || la(r.return)) {
                        r = null;
                        break e
                    }
                    r = r.return
                }
                for (r.sibling.return = r.return, r = r.sibling; 5 !== r.tag && 6 !== r.tag && 18 !== r.tag;) {
                    if (2 & r.effectTag) continue t;
                    if (null === r.child || 4 === r.tag) continue t;
                    r.child.return = r, r = r.child
                }
                if (!(2 & r.effectTag)) {
                    r = r.stateNode;
                    break e
                }
            }
            n ? function e(t, r, n) {
                var i = t.tag,
                    o = 5 === i || 6 === i;
                if (o) t = o ? t.stateNode : t.stateNode.instance, r ? 8 === n.nodeType ? n.parentNode.insertBefore(t, r) : n.insertBefore(t, r) : (8 === n.nodeType ? (r = n.parentNode).insertBefore(t, n) : (r = n).appendChild(t), null !== (n = n._reactRootContainer) && void 0 !== n || null !== r.onclick || (r.onclick = lr));
                else if (4 !== i && null !== (t = t.child))
                    for (e(t, r, n), t = t.sibling; null !== t;) e(t, r, n), t = t.sibling
            }(e, r, t) : function e(t, r, n) {
                var i = t.tag,
                    o = 5 === i || 6 === i;
                if (o) t = o ? t.stateNode : t.stateNode.instance, r ? n.insertBefore(t, r) : n.appendChild(t);
                else if (4 !== i && null !== (t = t.child))
                    for (e(t, r, n), t = t.sibling; null !== t;) e(t, r, n), t = t.sibling
            }(e, r, t)
        }

        function ua(e, t, r) {
            for (var n, i, o = t, a = !1;;) {
                if (!a) {
                    a = o.return;
                    e: for (;;) {
                        if (null === a) throw Error(s(160));
                        switch (n = a.stateNode, a.tag) {
                            case 5:
                                i = !1;
                                break e;
                            case 3:
                            case 4:
                                n = n.containerInfo, i = !0;
                                break e
                        }
                        a = a.return
                    }
                    a = !0
                }
                if (5 === o.tag || 6 === o.tag) {
                    e: for (var l = e, c = o, u = r, f = c;;)
                        if (sa(l, f, u), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child;
                        else {
                            if (f === c) break e;
                            for (; null === f.sibling;) {
                                if (null === f.return || f.return === c) break e;
                                f = f.return
                            }
                            f.sibling.return = f.return, f = f.sibling
                        }i ? (l = n, c = o.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(c) : l.removeChild(c)) : n.removeChild(o.stateNode)
                }
                else if (4 === o.tag) {
                    if (null !== o.child) {
                        n = o.stateNode.containerInfo, i = !0, o.child.return = o, o = o.child;
                        continue
                    }
                } else if (sa(e, o, r), null !== o.child) {
                    o.child.return = o, o = o.child;
                    continue
                }
                if (o === t) break;
                for (; null === o.sibling;) {
                    if (null === o.return || o.return === t) return;
                    4 === (o = o.return).tag && (a = !1)
                }
                o.sibling.return = o.return, o = o.sibling
            }
        }

        function fa(e, t) {
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    return void na(3, t);
                case 1:
                    return;
                case 5:
                    var r = t.stateNode;
                    if (null != r) {
                        var n = t.memoizedProps,
                            i = null !== e ? e.memoizedProps : n;
                        e = t.type;
                        var o = t.updateQueue;
                        if (t.updateQueue = null, null !== o) {
                            for (r[Er] = n, "input" === e && "radio" === n.type && null != n.name && Ee(r, n), or(e, i), t = or(e, n), i = 0; i < o.length; i += 2) {
                                var a = o[i],
                                    l = o[i + 1];
                                "style" === a ? rr(r, l) : "dangerouslySetInnerHTML" === a ? Ne(r, l) : "children" === a ? je(r, l) : Q(r, a, l, t)
                            }
                            switch (e) {
                                case "input":
                                    xe(r, n);
                                    break;
                                case "textarea":
                                    Pe(r, n);
                                    break;
                                case "select":
                                    t = r._wrapperState.wasMultiple, r._wrapperState.wasMultiple = !!n.multiple, null != (e = n.value) ? Oe(r, !!n.multiple, e, !1) : t !== !!n.multiple && (null != n.defaultValue ? Oe(r, !!n.multiple, n.defaultValue, !0) : Oe(r, !!n.multiple, n.multiple ? [] : "", !1))
                            }
                        }
                    }
                    return;
                case 6:
                    if (null === t.stateNode) throw Error(s(162));
                    return void(t.stateNode.nodeValue = t.memoizedProps);
                case 3:
                    return void((t = t.stateNode).hydrate && (t.hydrate = !1, Ft(t.containerInfo)));
                case 12:
                    return;
                case 13:
                    if (r = t, null === t.memoizedState ? n = !1 : (n = !0, r = t.child, Da = Ni()), null !== r) e: for (e = r;;) {
                        if (5 === e.tag) o = e.stateNode, n ? "function" == typeof(o = o.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (o = e.stateNode, i = null != (i = e.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null, o.style.display = tr("display", i));
                        else if (6 === e.tag) e.stateNode.nodeValue = n ? "" : e.memoizedProps;
                        else {
                            if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                                (o = e.child.sibling).return = e, e = o;
                                continue
                            }
                            if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                        }
                        if (e === r) break;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === r) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    return void ha(t);
                case 19:
                    return void ha(t);
                case 17:
                    return
            }
            throw Error(s(163))
        }

        function ha(e) {
            var t = e.updateQueue;
            if (null !== t) {
                e.updateQueue = null;
                var r = e.stateNode;
                null === r && (r = e.stateNode = new Js), t.forEach((function(t) {
                    var n = bl.bind(null, e, t);
                    r.has(t) || (r.add(t), t.then(n, n))
                }))
            }
        }
        var da = "function" == typeof WeakMap ? WeakMap : Map;

        function pa(e, t, r) {
            (r = ao(r, null)).tag = 3, r.payload = {
                element: null
            };
            var n = t.value;
            return r.callback = function() {
                Fa || (Fa = !0, Ba = n), ea(e, t)
            }, r
        }

        function _a(e, t, r) {
            (r = ao(r, null)).tag = 3;
            var n = e.type.getDerivedStateFromError;
            if ("function" == typeof n) {
                var i = t.value;
                r.payload = function() {
                    return ea(e, t), n(i)
                }
            }
            var o = e.stateNode;
            return null !== o && "function" == typeof o.componentDidCatch && (r.callback = function() {
                "function" != typeof n && (null === Ha ? Ha = new Set([this]) : Ha.add(this), ea(e, t));
                var r = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: null !== r ? r : ""
                })
            }), r
        }
        var va, ma = Math.ceil,
            ga = Y.ReactCurrentDispatcher,
            ya = Y.ReactCurrentOwner,
            ba = 0,
            Sa = 3,
            Ca = 4,
            wa = 0,
            Ea = null,
            xa = null,
            ka = 0,
            Ta = ba,
            La = null,
            Oa = 1073741823,
            Ra = 1073741823,
            Aa = null,
            Pa = 0,
            Ma = !1,
            Da = 0,
            Ia = null,
            Fa = !1,
            Ba = null,
            Ha = null,
            Na = !1,
            ja = null,
            Ua = 90,
            Wa = null,
            za = 0,
            qa = null,
            Ka = 0;

        function Va() {
            return 0 != (48 & wa) ? 1073741821 - (Ni() / 10 | 0) : 0 !== Ka ? Ka : Ka = 1073741821 - (Ni() / 10 | 0)
        }

        function Xa(e, t, r) {
            if (0 == (2 & (t = t.mode))) return 1073741823;
            var n = ji();
            if (0 == (4 & t)) return 99 === n ? 1073741823 : 1073741822;
            if (0 != (16 & wa)) return ka;
            if (null !== r) e = Xi(e, 0 | r.timeoutMs || 5e3, 250);
            else switch (n) {
                case 99:
                    e = 1073741823;
                    break;
                case 98:
                    e = Xi(e, 150, 100);
                    break;
                case 97:
                case 96:
                    e = Xi(e, 5e3, 250);
                    break;
                case 95:
                    e = 2;
                    break;
                default:
                    throw Error(s(326))
            }
            return null !== Ea && e === ka && --e, e
        }

        function Ga(e, t) {
            if (50 < za) throw za = 0, qa = null, Error(s(185));
            if (null !== (e = $a(e, t))) {
                var r = ji();
                1073741823 === t ? 0 != (8 & wa) && 0 == (48 & wa) ? Ja(e) : (Qa(e), 0 === wa && Ki()) : Qa(e), 0 == (4 & wa) || 98 !== r && 99 !== r || (null === Wa ? Wa = new Map([
                    [e, t]
                ]) : (void 0 === (r = Wa.get(e)) || r > t) && Wa.set(e, t))
            }
        }

        function $a(e, t) {
            e.expirationTime < t && (e.expirationTime = t);
            var r = e.alternate;
            null !== r && r.expirationTime < t && (r.expirationTime = t);
            var n = e.return,
                i = null;
            if (null === n && 3 === e.tag) i = e.stateNode;
            else
                for (; null !== n;) {
                    if (r = n.alternate, n.childExpirationTime < t && (n.childExpirationTime = t), null !== r && r.childExpirationTime < t && (r.childExpirationTime = t), null === n.return && 3 === n.tag) {
                        i = n.stateNode;
                        break
                    }
                    n = n.return
                }
            return null !== i && (Ea === i && (sl(t), Ta === Ca && Ml(i, ka)), Dl(i, t)), i
        }

        function Ya(e) {
            var t = e.lastExpiredTime;
            if (0 !== t) return t;
            if (!Pl(e, t = e.firstPendingTime)) return t;
            var r = e.lastPingedTime;
            return 2 >= (e = r > (e = e.nextKnownPendingLevel) ? r : e) && t !== e ? 0 : e
        }

        function Qa(e) {
            if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = qi(Ja.bind(null, e));
            else {
                var t = Ya(e),
                    r = e.callbackNode;
                if (0 === t) null !== r && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
                else {
                    var n = Va();
                    if (1073741823 === t ? n = 99 : 1 === t || 2 === t ? n = 95 : n = 0 >= (n = 10 * (1073741821 - t) - 10 * (1073741821 - n)) ? 99 : 250 >= n ? 98 : 5250 >= n ? 97 : 95, null !== r) {
                        var i = e.callbackPriority;
                        if (e.callbackExpirationTime === t && i >= n) return;
                        r !== Pi && wi(r)
                    }
                    e.callbackExpirationTime = t, e.callbackPriority = n, t = 1073741823 === t ? qi(Ja.bind(null, e)) : zi(n, Za.bind(null, e), {
                        timeout: 10 * (1073741821 - t) - Ni()
                    }), e.callbackNode = t
                }
            }
        }

        function Za(e, t) {
            if (Ka = 0, t) return Il(e, t = Va()), Qa(e), null;
            var r = Ya(e);
            if (0 !== r) {
                if (t = e.callbackNode, 0 != (48 & wa)) throw Error(s(327));
                if (_l(), e === Ea && r === ka || rl(e, r), null !== xa) {
                    var n = wa;
                    wa |= 16;
                    for (var i = il();;) try {
                        ll();
                        break
                    } catch (t) {
                        nl(e, t)
                    }
                    if (Ji(), wa = n, ga.current = i, 1 === Ta) throw t = La, rl(e, r), Ml(e, r), Qa(e), t;
                    if (null === xa) switch (i = e.finishedWork = e.current.alternate, e.finishedExpirationTime = r, n = Ta, Ea = null, n) {
                        case ba:
                        case 1:
                            throw Error(s(345));
                        case 2:
                            Il(e, 2 < r ? 2 : r);
                            break;
                        case Sa:
                            if (Ml(e, r), r === (n = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fl(i)), 1073741823 === Oa && 10 < (i = Da + 500 - Ni())) {
                                if (Ma) {
                                    var o = e.lastPingedTime;
                                    if (0 === o || o >= r) {
                                        e.lastPingedTime = r, rl(e, r);
                                        break
                                    }
                                }
                                if (0 !== (o = Ya(e)) && o !== r) break;
                                if (0 !== n && n !== r) {
                                    e.lastPingedTime = n;
                                    break
                                }
                                e.timeoutHandle = gr(hl.bind(null, e), i);
                                break
                            }
                            hl(e);
                            break;
                        case Ca:
                            if (Ml(e, r), r === (n = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fl(i)), Ma && (0 === (i = e.lastPingedTime) || i >= r)) {
                                e.lastPingedTime = r, rl(e, r);
                                break
                            }
                            if (0 !== (i = Ya(e)) && i !== r) break;
                            if (0 !== n && n !== r) {
                                e.lastPingedTime = n;
                                break
                            }
                            if (1073741823 !== Ra ? n = 10 * (1073741821 - Ra) - Ni() : 1073741823 === Oa ? n = 0 : (n = 10 * (1073741821 - Oa) - 5e3, 0 > (n = (i = Ni()) - n) && (n = 0), (r = 10 * (1073741821 - r) - i) < (n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * ma(n / 1960)) - n) && (n = r)), 10 < n) {
                                e.timeoutHandle = gr(hl.bind(null, e), n);
                                break
                            }
                            hl(e);
                            break;
                        case 5:
                            if (1073741823 !== Oa && null !== Aa) {
                                o = Oa;
                                var a = Aa;
                                if (0 >= (n = 0 | a.busyMinDurationMs) ? n = 0 : (i = 0 | a.busyDelayMs, n = (o = Ni() - (10 * (1073741821 - o) - (0 | a.timeoutMs || 5e3))) <= i ? 0 : i + n - o), 10 < n) {
                                    Ml(e, r), e.timeoutHandle = gr(hl.bind(null, e), n);
                                    break
                                }
                            }
                            hl(e);
                            break;
                        default:
                            throw Error(s(329))
                    }
                    if (Qa(e), e.callbackNode === t) return Za.bind(null, e)
                }
            }
            return null
        }

        function Ja(e) {
            var t = e.lastExpiredTime;
            if (t = 0 !== t ? t : 1073741823, 0 != (48 & wa)) throw Error(s(327));
            if (_l(), e === Ea && t === ka || rl(e, t), null !== xa) {
                var r = wa;
                wa |= 16;
                for (var n = il();;) try {
                    al();
                    break
                } catch (t) {
                    nl(e, t)
                }
                if (Ji(), wa = r, ga.current = n, 1 === Ta) throw r = La, rl(e, t), Ml(e, t), Qa(e), r;
                if (null !== xa) throw Error(s(261));
                e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, Ea = null, hl(e), Qa(e)
            }
            return null
        }

        function el(e, t) {
            var r = wa;
            wa |= 1;
            try {
                return e(t)
            } finally {
                0 === (wa = r) && Ki()
            }
        }

        function tl(e, t) {
            var r = wa;
            wa &= -2, wa |= 8;
            try {
                return e(t)
            } finally {
                0 === (wa = r) && Ki()
            }
        }

        function rl(e, t) {
            e.finishedWork = null, e.finishedExpirationTime = 0;
            var r = e.timeoutHandle;
            if (-1 !== r && (e.timeoutHandle = -1, yr(r)), null !== xa)
                for (r = xa.return; null !== r;) {
                    var n = r;
                    switch (n.tag) {
                        case 1:
                            null != (n = n.type.childContextTypes) && vi();
                            break;
                        case 3:
                            Mo(), li(hi), li(fi);
                            break;
                        case 5:
                            Io(n);
                            break;
                        case 4:
                            Mo();
                            break;
                        case 13:
                        case 19:
                            li(Fo);
                            break;
                        case 10:
                            eo(n)
                    }
                    r = r.return
                }
            Ea = e, xa = kl(e.current, null), ka = t, Ta = ba, La = null, Ra = Oa = 1073741823, Aa = null, Pa = 0, Ma = !1
        }

        function nl(e, t) {
            for (;;) {
                try {
                    if (Ji(), No.current = vs, Ko)
                        for (var r = Wo.memoizedState; null !== r;) {
                            var n = r.queue;
                            null !== n && (n.pending = null), r = r.next
                        }
                    if (Uo = 0, qo = zo = Wo = null, Ko = !1, null === xa || null === xa.return) return Ta = 1, La = t, xa = null;
                    e: {
                        var i = e,
                            o = xa.return,
                            s = xa,
                            a = t;
                        if (t = ka, s.effectTag |= 2048, s.firstEffect = s.lastEffect = null, null !== a && "object" == typeof a && "function" == typeof a.then) {
                            var l = a;
                            if (0 == (2 & s.mode)) {
                                var c = s.alternate;
                                c ? (s.updateQueue = c.updateQueue, s.memoizedState = c.memoizedState, s.expirationTime = c.expirationTime) : (s.updateQueue = null, s.memoizedState = null)
                            }
                            var u = 0 != (1 & Fo.current),
                                f = o;
                            do {
                                var h;
                                if (h = 13 === f.tag) {
                                    var d = f.memoizedState;
                                    if (null !== d) h = null !== d.dehydrated;
                                    else {
                                        var p = f.memoizedProps;
                                        h = void 0 !== p.fallback && (!0 !== p.unstable_avoidThisFallback || !u)
                                    }
                                }
                                if (h) {
                                    var _ = f.updateQueue;
                                    if (null === _) {
                                        var v = new Set;
                                        v.add(l), f.updateQueue = v
                                    } else _.add(l);
                                    if (0 == (2 & f.mode)) {
                                        if (f.effectTag |= 64, s.effectTag &= -2981, 1 === s.tag)
                                            if (null === s.alternate) s.tag = 17;
                                            else {
                                                var m = ao(1073741823, null);
                                                m.tag = 2, lo(s, m)
                                            } s.expirationTime = 1073741823;
                                        break e
                                    }
                                    a = void 0, s = t;
                                    var g = i.pingCache;
                                    if (null === g ? (g = i.pingCache = new da, a = new Set, g.set(l, a)) : void 0 === (a = g.get(l)) && (a = new Set, g.set(l, a)), !a.has(s)) {
                                        a.add(s);
                                        var y = yl.bind(null, i, l, s);
                                        l.then(y, y)
                                    }
                                    f.effectTag |= 4096, f.expirationTime = t;
                                    break e
                                }
                                f = f.return
                            } while (null !== f);
                            a = Error((ve(s.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + me(s))
                        }
                        5 !== Ta && (Ta = 2),
                        a = Zs(a, s),
                        f = o;do {
                            switch (f.tag) {
                                case 3:
                                    l = a, f.effectTag |= 4096, f.expirationTime = t, co(f, pa(f, l, t));
                                    break e;
                                case 1:
                                    l = a;
                                    var b = f.type,
                                        S = f.stateNode;
                                    if (0 == (64 & f.effectTag) && ("function" == typeof b.getDerivedStateFromError || null !== S && "function" == typeof S.componentDidCatch && (null === Ha || !Ha.has(S)))) {
                                        f.effectTag |= 4096, f.expirationTime = t, co(f, _a(f, l, t));
                                        break e
                                    }
                            }
                            f = f.return
                        } while (null !== f)
                    }
                    xa = ul(xa)
                } catch (e) {
                    t = e;
                    continue
                }
                break
            }
        }

        function il() {
            var e = ga.current;
            return ga.current = vs, null === e ? vs : e
        }

        function ol(e, t) {
            e < Oa && 2 < e && (Oa = e), null !== t && e < Ra && 2 < e && (Ra = e, Aa = t)
        }

        function sl(e) {
            e > Pa && (Pa = e)
        }

        function al() {
            for (; null !== xa;) xa = cl(xa)
        }

        function ll() {
            for (; null !== xa && !Mi();) xa = cl(xa)
        }

        function cl(e) {
            var t = va(e.alternate, e, ka);
            return e.memoizedProps = e.pendingProps, null === t && (t = ul(e)), ya.current = null, t
        }

        function ul(e) {
            xa = e;
            do {
                var t = xa.alternate;
                if (e = xa.return, 0 == (2048 & xa.effectTag)) {
                    if (t = Ys(t, xa, ka), 1 === ka || 1 !== xa.childExpirationTime) {
                        for (var r = 0, n = xa.child; null !== n;) {
                            var i = n.expirationTime,
                                o = n.childExpirationTime;
                            i > r && (r = i), o > r && (r = o), n = n.sibling
                        }
                        xa.childExpirationTime = r
                    }
                    if (null !== t) return t;
                    null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = xa.firstEffect), null !== xa.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = xa.firstEffect), e.lastEffect = xa.lastEffect), 1 < xa.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = xa : e.firstEffect = xa, e.lastEffect = xa))
                } else {
                    if (null !== (t = Qs(xa))) return t.effectTag &= 2047, t;
                    null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
                }
                if (null !== (t = xa.sibling)) return t;
                xa = e
            } while (null !== xa);
            return Ta === ba && (Ta = 5), null
        }

        function fl(e) {
            var t = e.expirationTime;
            return t > (e = e.childExpirationTime) ? t : e
        }

        function hl(e) {
            var t = ji();
            return Wi(99, dl.bind(null, e, t)), null
        }

        function dl(e, t) {
            do {
                _l()
            } while (null !== ja);
            if (0 != (48 & wa)) throw Error(s(327));
            var r = e.finishedWork,
                n = e.finishedExpirationTime;
            if (null === r) return null;
            if (e.finishedWork = null, e.finishedExpirationTime = 0, r === e.current) throw Error(s(177));
            e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
            var i = fl(r);
            if (e.firstPendingTime = i, n <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : n <= e.firstSuspendedTime && (e.firstSuspendedTime = n - 1), n <= e.lastPingedTime && (e.lastPingedTime = 0), n <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === Ea && (xa = Ea = null, ka = 0), 1 < r.effectTag ? null !== r.lastEffect ? (r.lastEffect.nextEffect = r, i = r.firstEffect) : i = r : i = r.firstEffect, null !== i) {
                var o = wa;
                wa |= 32, ya.current = null, pr = Vt;
                var a = hr();
                if (dr(a)) {
                    if ("selectionStart" in a) var l = {
                        start: a.selectionStart,
                        end: a.selectionEnd
                    };
                    else e: {
                        var c = (l = (l = a.ownerDocument) && l.defaultView || window).getSelection && l.getSelection();
                        if (c && 0 !== c.rangeCount) {
                            l = c.anchorNode;
                            var u = c.anchorOffset,
                                f = c.focusNode;
                            c = c.focusOffset;
                            try {
                                l.nodeType, f.nodeType
                            } catch (e) {
                                l = null;
                                break e
                            }
                            var h = 0,
                                d = -1,
                                p = -1,
                                _ = 0,
                                v = 0,
                                m = a,
                                g = null;
                            t: for (;;) {
                                for (var y; m !== l || 0 !== u && 3 !== m.nodeType || (d = h + u), m !== f || 0 !== c && 3 !== m.nodeType || (p = h + c), 3 === m.nodeType && (h += m.nodeValue.length), null !== (y = m.firstChild);) g = m, m = y;
                                for (;;) {
                                    if (m === a) break t;
                                    if (g === l && ++_ === u && (d = h), g === f && ++v === c && (p = h), null !== (y = m.nextSibling)) break;
                                    g = (m = g).parentNode
                                }
                                m = y
                            }
                            l = -1 === d || -1 === p ? null : {
                                start: d,
                                end: p
                            }
                        } else l = null
                    }
                    l = l || {
                        start: 0,
                        end: 0
                    }
                } else l = null;
                _r = {
                    activeElementDetached: null,
                    focusedElem: a,
                    selectionRange: l
                }, Vt = !1, Ia = i;
                do {
                    try {
                        pl()
                    } catch (e) {
                        if (null === Ia) throw Error(s(330));
                        gl(Ia, e), Ia = Ia.nextEffect
                    }
                } while (null !== Ia);
                Ia = i;
                do {
                    try {
                        for (a = e, l = t; null !== Ia;) {
                            var b = Ia.effectTag;
                            if (16 & b && je(Ia.stateNode, ""), 128 & b) {
                                var S = Ia.alternate;
                                if (null !== S) {
                                    var C = S.ref;
                                    null !== C && ("function" == typeof C ? C(null) : C.current = null)
                                }
                            }
                            switch (1038 & b) {
                                case 2:
                                    ca(Ia), Ia.effectTag &= -3;
                                    break;
                                case 6:
                                    ca(Ia), Ia.effectTag &= -3, fa(Ia.alternate, Ia);
                                    break;
                                case 1024:
                                    Ia.effectTag &= -1025;
                                    break;
                                case 1028:
                                    Ia.effectTag &= -1025, fa(Ia.alternate, Ia);
                                    break;
                                case 4:
                                    fa(Ia.alternate, Ia);
                                    break;
                                case 8:
                                    ua(a, u = Ia, l), aa(u)
                            }
                            Ia = Ia.nextEffect
                        }
                    } catch (e) {
                        if (null === Ia) throw Error(s(330));
                        gl(Ia, e), Ia = Ia.nextEffect
                    }
                } while (null !== Ia);
                if (C = _r, S = hr(), b = C.focusedElem, l = C.selectionRange, S !== b && b && b.ownerDocument && function e(t, r) {
                        return !(!t || !r) && (t === r || (!t || 3 !== t.nodeType) && (r && 3 === r.nodeType ? e(t, r.parentNode) : "contains" in t ? t.contains(r) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(r))))
                    }(b.ownerDocument.documentElement, b)) {
                    null !== l && dr(b) && (S = l.start, void 0 === (C = l.end) && (C = S), "selectionStart" in b ? (b.selectionStart = S, b.selectionEnd = Math.min(C, b.value.length)) : (C = (S = b.ownerDocument || document) && S.defaultView || window).getSelection && (C = C.getSelection(), u = b.textContent.length, a = Math.min(l.start, u), l = void 0 === l.end ? a : Math.min(l.end, u), !C.extend && a > l && (u = l, l = a, a = u), u = fr(b, a), f = fr(b, l), u && f && (1 !== C.rangeCount || C.anchorNode !== u.node || C.anchorOffset !== u.offset || C.focusNode !== f.node || C.focusOffset !== f.offset) && ((S = S.createRange()).setStart(u.node, u.offset), C.removeAllRanges(), a > l ? (C.addRange(S), C.extend(f.node, f.offset)) : (S.setEnd(f.node, f.offset), C.addRange(S))))), S = [];
                    for (C = b; C = C.parentNode;) 1 === C.nodeType && S.push({
                        element: C,
                        left: C.scrollLeft,
                        top: C.scrollTop
                    });
                    for ("function" == typeof b.focus && b.focus(), b = 0; b < S.length; b++)(C = S[b]).element.scrollLeft = C.left, C.element.scrollTop = C.top
                }
                Vt = !!pr, _r = pr = null, e.current = r, Ia = i;
                do {
                    try {
                        for (b = e; null !== Ia;) {
                            var w = Ia.effectTag;
                            if (36 & w && oa(b, Ia.alternate, Ia), 128 & w) {
                                S = void 0;
                                var E = Ia.ref;
                                if (null !== E) {
                                    var x = Ia.stateNode;
                                    switch (Ia.tag) {
                                        case 5:
                                            S = x;
                                            break;
                                        default:
                                            S = x
                                    }
                                    "function" == typeof E ? E(S) : E.current = S
                                }
                            }
                            Ia = Ia.nextEffect
                        }
                    } catch (e) {
                        if (null === Ia) throw Error(s(330));
                        gl(Ia, e), Ia = Ia.nextEffect
                    }
                } while (null !== Ia);
                Ia = null, Di(), wa = o
            } else e.current = r;
            if (Na) Na = !1, ja = e, Ua = t;
            else
                for (Ia = i; null !== Ia;) t = Ia.nextEffect, Ia.nextEffect = null, Ia = t;
            if (0 === (t = e.firstPendingTime) && (Ha = null), 1073741823 === t ? e === qa ? za++ : (za = 0, qa = e) : za = 0, "function" == typeof Sl && Sl(r.stateNode, n), Qa(e), Fa) throw Fa = !1, e = Ba, Ba = null, e;
            return 0 != (8 & wa) || Ki(), null
        }

        function pl() {
            for (; null !== Ia;) {
                var e = Ia.effectTag;
                0 != (256 & e) && ra(Ia.alternate, Ia), 0 == (512 & e) || Na || (Na = !0, zi(97, (function() {
                    return _l(), null
                }))), Ia = Ia.nextEffect
            }
        }

        function _l() {
            if (90 !== Ua) {
                var e = 97 < Ua ? 97 : Ua;
                return Ua = 90, Wi(e, vl)
            }
        }

        function vl() {
            if (null === ja) return !1;
            var e = ja;
            if (ja = null, 0 != (48 & wa)) throw Error(s(331));
            var t = wa;
            for (wa |= 32, e = e.current.firstEffect; null !== e;) {
                try {
                    var r = e;
                    if (0 != (512 & r.effectTag)) switch (r.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                            na(5, r), ia(5, r)
                    }
                } catch (t) {
                    if (null === e) throw Error(s(330));
                    gl(e, t)
                }
                r = e.nextEffect, e.nextEffect = null, e = r
            }
            return wa = t, Ki(), !0
        }

        function ml(e, t, r) {
            lo(e, t = pa(e, t = Zs(r, t), 1073741823)), null !== (e = $a(e, 1073741823)) && Qa(e)
        }

        function gl(e, t) {
            if (3 === e.tag) ml(e, e, t);
            else
                for (var r = e.return; null !== r;) {
                    if (3 === r.tag) {
                        ml(r, e, t);
                        break
                    }
                    if (1 === r.tag) {
                        var n = r.stateNode;
                        if ("function" == typeof r.type.getDerivedStateFromError || "function" == typeof n.componentDidCatch && (null === Ha || !Ha.has(n))) {
                            lo(r, e = _a(r, e = Zs(t, e), 1073741823)), null !== (r = $a(r, 1073741823)) && Qa(r);
                            break
                        }
                    }
                    r = r.return
                }
        }

        function yl(e, t, r) {
            var n = e.pingCache;
            null !== n && n.delete(t), Ea === e && ka === r ? Ta === Ca || Ta === Sa && 1073741823 === Oa && Ni() - Da < 500 ? rl(e, ka) : Ma = !0 : Pl(e, r) && (0 !== (t = e.lastPingedTime) && t < r || (e.lastPingedTime = r, Qa(e)))
        }

        function bl(e, t) {
            var r = e.stateNode;
            null !== r && r.delete(t), 0 === (t = 0) && (t = Xa(t = Va(), e, null)), null !== (e = $a(e, t)) && Qa(e)
        }
        va = function(e, t, r) {
            var n = t.expirationTime;
            if (null !== e) {
                var i = t.pendingProps;
                if (e.memoizedProps !== i || hi.current) Rs = !0;
                else {
                    if (n < r) {
                        switch (Rs = !1, t.tag) {
                            case 3:
                                Ns(t), Ls();
                                break;
                            case 5:
                                if (Do(t), 4 & t.mode && 1 !== r && i.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                                break;
                            case 1:
                                _i(t.type) && yi(t);
                                break;
                            case 4:
                                Po(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                n = t.memoizedProps.value, i = t.type._context, ci($i, i._currentValue), i._currentValue = n;
                                break;
                            case 13:
                                if (null !== t.memoizedState) return 0 !== (n = t.child.childExpirationTime) && n >= r ? qs(e, t, r) : (ci(Fo, 1 & Fo.current), null !== (t = Gs(e, t, r)) ? t.sibling : null);
                                ci(Fo, 1 & Fo.current);
                                break;
                            case 19:
                                if (n = t.childExpirationTime >= r, 0 != (64 & e.effectTag)) {
                                    if (n) return Xs(e, t, r);
                                    t.effectTag |= 64
                                }
                                if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null), ci(Fo, Fo.current), !n) return null
                        }
                        return Gs(e, t, r)
                    }
                    Rs = !1
                }
            } else Rs = !1;
            switch (t.expirationTime = 0, t.tag) {
                case 2:
                    if (n = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, i = pi(t, fi.current), ro(t, r), i = Go(null, t, n, e, i, r), t.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
                        if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _i(n)) {
                            var o = !0;
                            yi(t)
                        } else o = !1;
                        t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, oo(t);
                        var a = n.getDerivedStateFromProps;
                        "function" == typeof a && _o(t, n, a, e), i.updater = vo, t.stateNode = i, i._reactInternalFiber = t, bo(t, n, e, r), t = Hs(null, t, n, !0, o, r)
                    } else t.tag = 0, As(null, t, i, r), t = t.child;
                    return t;
                case 16:
                    e: {
                        if (i = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, function(e) {
                                if (-1 === e._status) {
                                    e._status = 0;
                                    var t = e._ctor;
                                    t = t(), e._result = t, t.then((function(t) {
                                        0 === e._status && (t = t.default, e._status = 1, e._result = t)
                                    }), (function(t) {
                                        0 === e._status && (e._status = 2, e._result = t)
                                    }))
                                }
                            }(i), 1 !== i._status) throw i._result;
                        switch (i = i._result, t.type = i, o = t.tag = function(e) {
                                if ("function" == typeof e) return xl(e) ? 1 : 0;
                                if (null != e) {
                                    if ((e = e.$$typeof) === le) return 11;
                                    if (e === fe) return 14
                                }
                                return 2
                            }(i), e = Gi(i, e), o) {
                            case 0:
                                t = Fs(null, t, i, e, r);
                                break e;
                            case 1:
                                t = Bs(null, t, i, e, r);
                                break e;
                            case 11:
                                t = Ps(null, t, i, e, r);
                                break e;
                            case 14:
                                t = Ms(null, t, i, Gi(i.type, e), n, r);
                                break e
                        }
                        throw Error(s(306, i, ""))
                    }
                    return t;
                case 0:
                    return n = t.type, i = t.pendingProps, Fs(e, t, n, i = t.elementType === n ? i : Gi(n, i), r);
                case 1:
                    return n = t.type, i = t.pendingProps, Bs(e, t, n, i = t.elementType === n ? i : Gi(n, i), r);
                case 3:
                    if (Ns(t), n = t.updateQueue, null === e || null === n) throw Error(s(282));
                    if (n = t.pendingProps, i = null !== (i = t.memoizedState) ? i.element : null, so(e, t), uo(t, n, null, r), (n = t.memoizedState.element) === i) Ls(), t = Gs(e, t, r);
                    else {
                        if ((i = t.stateNode.hydrate) && (Ss = br(t.stateNode.containerInfo.firstChild), bs = t, i = Cs = !0), i)
                            for (r = ko(t, null, n, r), t.child = r; r;) r.effectTag = -3 & r.effectTag | 1024, r = r.sibling;
                        else As(e, t, n, r), Ls();
                        t = t.child
                    }
                    return t;
                case 5:
                    return Do(t), null === e && xs(t), n = t.type, i = t.pendingProps, o = null !== e ? e.memoizedProps : null, a = i.children, mr(n, i) ? a = null : null !== o && mr(n, o) && (t.effectTag |= 16), Is(e, t), 4 & t.mode && 1 !== r && i.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (As(e, t, a, r), t = t.child), t;
                case 6:
                    return null === e && xs(t), null;
                case 13:
                    return qs(e, t, r);
                case 4:
                    return Po(t, t.stateNode.containerInfo), n = t.pendingProps, null === e ? t.child = xo(t, null, n, r) : As(e, t, n, r), t.child;
                case 11:
                    return n = t.type, i = t.pendingProps, Ps(e, t, n, i = t.elementType === n ? i : Gi(n, i), r);
                case 7:
                    return As(e, t, t.pendingProps, r), t.child;
                case 8:
                case 12:
                    return As(e, t, t.pendingProps.children, r), t.child;
                case 10:
                    e: {
                        n = t.type._context,
                        i = t.pendingProps,
                        a = t.memoizedProps,
                        o = i.value;
                        var l = t.type._context;
                        if (ci($i, l._currentValue), l._currentValue = o, null !== a)
                            if (l = a.value, 0 === (o = Bn(l, o) ? 0 : 0 | ("function" == typeof n._calculateChangedBits ? n._calculateChangedBits(l, o) : 1073741823))) {
                                if (a.children === i.children && !hi.current) {
                                    t = Gs(e, t, r);
                                    break e
                                }
                            } else
                                for (null !== (l = t.child) && (l.return = t); null !== l;) {
                                    var c = l.dependencies;
                                    if (null !== c) {
                                        a = l.child;
                                        for (var u = c.firstContext; null !== u;) {
                                            if (u.context === n && 0 != (u.observedBits & o)) {
                                                1 === l.tag && ((u = ao(r, null)).tag = 2, lo(l, u)), l.expirationTime < r && (l.expirationTime = r), null !== (u = l.alternate) && u.expirationTime < r && (u.expirationTime = r), to(l.return, r), c.expirationTime < r && (c.expirationTime = r);
                                                break
                                            }
                                            u = u.next
                                        }
                                    } else a = 10 === l.tag && l.type === t.type ? null : l.child;
                                    if (null !== a) a.return = l;
                                    else
                                        for (a = l; null !== a;) {
                                            if (a === t) {
                                                a = null;
                                                break
                                            }
                                            if (null !== (l = a.sibling)) {
                                                l.return = a.return, a = l;
                                                break
                                            }
                                            a = a.return
                                        }
                                    l = a
                                }
                        As(e, t, i.children, r),
                        t = t.child
                    }
                    return t;
                case 9:
                    return i = t.type, n = (o = t.pendingProps).children, ro(t, r), n = n(i = no(i, o.unstable_observedBits)), t.effectTag |= 1, As(e, t, n, r), t.child;
                case 14:
                    return o = Gi(i = t.type, t.pendingProps), Ms(e, t, i, o = Gi(i.type, o), n, r);
                case 15:
                    return Ds(e, t, t.type, t.pendingProps, n, r);
                case 17:
                    return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Gi(n, i), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, _i(n) ? (e = !0, yi(t)) : e = !1, ro(t, r), go(t, n, i), bo(t, n, i, r), Hs(null, t, n, !0, e, r);
                case 19:
                    return Xs(e, t, r)
            }
            throw Error(s(156, t.tag))
        };
        var Sl = null,
            Cl = null;

        function wl(e, t, r, n) {
            this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
        }

        function El(e, t, r, n) {
            return new wl(e, t, r, n)
        }

        function xl(e) {
            return !(!(e = e.prototype) || !e.isReactComponent)
        }

        function kl(e, t) {
            var r = e.alternate;
            return null === r ? ((r = El(e.tag, t, e.key, e.mode)).elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.effectTag = 0, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null), r.childExpirationTime = e.childExpirationTime, r.expirationTime = e.expirationTime, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = null === t ? null : {
                expirationTime: t.expirationTime,
                firstContext: t.firstContext,
                responders: t.responders
            }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
        }

        function Tl(e, t, r, n, i, o) {
            var a = 2;
            if (n = e, "function" == typeof e) xl(e) && (a = 1);
            else if ("string" == typeof e) a = 5;
            else e: switch (e) {
                case re:
                    return Ll(r.children, i, o, t);
                case ae:
                    a = 8, i |= 7;
                    break;
                case ne:
                    a = 8, i |= 1;
                    break;
                case ie:
                    return (e = El(12, r, t, 8 | i)).elementType = ie, e.type = ie, e.expirationTime = o, e;
                case ce:
                    return (e = El(13, r, t, i)).type = ce, e.elementType = ce, e.expirationTime = o, e;
                case ue:
                    return (e = El(19, r, t, i)).elementType = ue, e.expirationTime = o, e;
                default:
                    if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                        case oe:
                            a = 10;
                            break e;
                        case se:
                            a = 9;
                            break e;
                        case le:
                            a = 11;
                            break e;
                        case fe:
                            a = 14;
                            break e;
                        case he:
                            a = 16, n = null;
                            break e;
                        case de:
                            a = 22;
                            break e
                    }
                    throw Error(s(130, null == e ? e : typeof e, ""))
            }
            return (t = El(a, r, t, i)).elementType = e, t.type = n, t.expirationTime = o, t
        }

        function Ll(e, t, r, n) {
            return (e = El(7, e, n, t)).expirationTime = r, e
        }

        function Ol(e, t, r) {
            return (e = El(6, e, null, t)).expirationTime = r, e
        }

        function Rl(e, t, r) {
            return (t = El(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = r, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t
        }

        function Al(e, t, r) {
            this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = r, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
        }

        function Pl(e, t) {
            var r = e.firstSuspendedTime;
            return e = e.lastSuspendedTime, 0 !== r && r >= t && e <= t
        }

        function Ml(e, t) {
            var r = e.firstSuspendedTime,
                n = e.lastSuspendedTime;
            r < t && (e.firstSuspendedTime = t), (n > t || 0 === r) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
        }

        function Dl(e, t) {
            t > e.firstPendingTime && (e.firstPendingTime = t);
            var r = e.firstSuspendedTime;
            0 !== r && (t >= r ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
        }

        function Il(e, t) {
            var r = e.lastExpiredTime;
            (0 === r || r > t) && (e.lastExpiredTime = t)
        }

        function Fl(e, t, r, n) {
            var i = t.current,
                o = Va(),
                a = ho.suspense;
            o = Xa(o, i, a);
            e: if (r) {
                t: {
                    if (Je(r = r._reactInternalFiber) !== r || 1 !== r.tag) throw Error(s(170));
                    var l = r;do {
                        switch (l.tag) {
                            case 3:
                                l = l.stateNode.context;
                                break t;
                            case 1:
                                if (_i(l.type)) {
                                    l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break t
                                }
                        }
                        l = l.return
                    } while (null !== l);
                    throw Error(s(171))
                }
                if (1 === r.tag) {
                    var c = r.type;
                    if (_i(c)) {
                        r = gi(r, c, l);
                        break e
                    }
                }
                r = l
            }
            else r = ui;
            return null === t.context ? t.context = r : t.pendingContext = r, (t = ao(o, a)).payload = {
                element: e
            }, null !== (n = void 0 === n ? null : n) && (t.callback = n), lo(i, t), Ga(i, o), o
        }

        function Bl(e) {
            if (!(e = e.current).child) return null;
            switch (e.child.tag) {
                case 5:
                default:
                    return e.child.stateNode
            }
        }

        function Hl(e, t) {
            null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
        }

        function Nl(e, t) {
            Hl(e, t), (e = e.alternate) && Hl(e, t)
        }

        function jl(e, t, r) {
            var n = new Al(e, t, r = null != r && !0 === r.hydrate),
                i = El(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
            n.current = i, i.stateNode = n, oo(i), e[xr] = n.current, r && 0 !== t && function(e, t) {
                var r = Ze(t);
                kt.forEach((function(e) {
                    pt(e, t, r)
                })), Tt.forEach((function(e) {
                    pt(e, t, r)
                }))
            }(0, 9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = n
        }

        function Ul(e) {
            return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
        }

        function Wl(e, t, r, n, i) {
            var o = r._reactRootContainer;
            if (o) {
                var s = o._internalRoot;
                if ("function" == typeof i) {
                    var a = i;
                    i = function() {
                        var e = Bl(s);
                        a.call(e)
                    }
                }
                Fl(t, s, e, i)
            } else {
                if (o = r._reactRootContainer = function(e, t) {
                        if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                            for (var r; r = e.lastChild;) e.removeChild(r);
                        return new jl(e, 0, t ? {
                            hydrate: !0
                        } : void 0)
                    }(r, n), s = o._internalRoot, "function" == typeof i) {
                    var l = i;
                    i = function() {
                        var e = Bl(s);
                        l.call(e)
                    }
                }
                tl((function() {
                    Fl(t, s, e, i)
                }))
            }
            return Bl(s)
        }

        function zl(e, t, r) {
            var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: te,
                key: null == n ? null : "" + n,
                children: e,
                containerInfo: t,
                implementation: r
            }
        }

        function ql(e, t) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Ul(t)) throw Error(s(200));
            return zl(e, t, null, r)
        }
        jl.prototype.render = function(e) {
            Fl(e, this._internalRoot, null, null)
        }, jl.prototype.unmount = function() {
            var e = this._internalRoot,
                t = e.containerInfo;
            Fl(null, e, null, (function() {
                t[xr] = null
            }))
        }, _t = function(e) {
            if (13 === e.tag) {
                var t = Xi(Va(), 150, 100);
                Ga(e, t), Nl(e, t)
            }
        }, vt = function(e) {
            13 === e.tag && (Ga(e, 3), Nl(e, 3))
        }, mt = function(e) {
            if (13 === e.tag) {
                var t = Va();
                Ga(e, t = Xa(t, e, null)), Nl(e, t)
            }
        }, L = function(e, t, r) {
            switch (t) {
                case "input":
                    if (xe(e, r), t = r.name, "radio" === r.type && null != t) {
                        for (r = e; r.parentNode;) r = r.parentNode;
                        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                            var n = r[t];
                            if (n !== e && n.form === e.form) {
                                var i = Or(n);
                                if (!i) throw Error(s(90));
                                Se(n), xe(n, i)
                            }
                        }
                    }
                    break;
                case "textarea":
                    Pe(e, r);
                    break;
                case "select":
                    null != (t = r.value) && Oe(e, !!r.multiple, t, !1)
            }
        }, D = el, I = function(e, t, r, n, i) {
            var o = wa;
            wa |= 4;
            try {
                return Wi(98, e.bind(null, t, r, n, i))
            } finally {
                0 === (wa = o) && Ki()
            }
        }, F = function() {
            0 == (49 & wa) && (function() {
                if (null !== Wa) {
                    var e = Wa;
                    Wa = null, e.forEach((function(e, t) {
                        Il(t, e), Qa(t)
                    })), Ki()
                }
            }(), _l())
        }, B = function(e, t) {
            var r = wa;
            wa |= 2;
            try {
                return e(t)
            } finally {
                0 === (wa = r) && Ki()
            }
        };
        var Kl, Vl, Xl = {
            Events: [Tr, Lr, Or, k, w, Fr, function(e) {
                it(e, Ir)
            }, P, M, Qt, at, _l, {
                current: !1
            }]
        };
        Vl = (Kl = {
                findFiberByHostInstance: kr,
                bundleType: 0,
                version: "16.14.0",
                rendererPackageName: "react-dom"
            }).findFiberByHostInstance,
            function(e) {
                if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (t.isDisabled || !t.supportsFiber) return !0;
                try {
                    var r = t.inject(e);
                    Sl = function(e) {
                        try {
                            t.onCommitFiberRoot(r, e, void 0, 64 == (64 & e.current.effectTag))
                        } catch (e) {}
                    }, Cl = function(e) {
                        try {
                            t.onCommitFiberUnmount(r, e)
                        } catch (e) {}
                    }
                } catch (e) {}
            }(i({}, Kl, {
                overrideHookState: null,
                overrideProps: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: Y.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return null === (e = rt(e)) ? null : e.stateNode
                },
                findFiberByHostInstance: function(e) {
                    return Vl ? Vl(e) : null
                },
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null
            })), t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xl, t.createPortal = ql, t.findDOMNode = function(e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternalFiber;
                if (void 0 === t) {
                    if ("function" == typeof e.render) throw Error(s(188));
                    throw Error(s(268, Object.keys(e)))
                }
                return e = null === (e = rt(t)) ? null : e.stateNode
            }, t.flushSync = function(e, t) {
                if (0 != (48 & wa)) throw Error(s(187));
                var r = wa;
                wa |= 1;
                try {
                    return Wi(99, e.bind(null, t))
                } finally {
                    wa = r, Ki()
                }
            }, t.hydrate = function(e, t, r) {
                if (!Ul(t)) throw Error(s(200));
                return Wl(null, e, t, !0, r)
            }, t.render = function(e, t, r) {
                if (!Ul(t)) throw Error(s(200));
                return Wl(null, e, t, !1, r)
            }, t.unmountComponentAtNode = function(e) {
                if (!Ul(e)) throw Error(s(40));
                return !!e._reactRootContainer && (tl((function() {
                    Wl(null, null, e, !1, (function() {
                        e._reactRootContainer = null, e[xr] = null
                    }))
                })), !0)
            }, t.unstable_batchedUpdates = el, t.unstable_createPortal = function(e, t) {
                return ql(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
            }, t.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
                if (!Ul(r)) throw Error(s(200));
                if (null == e || void 0 === e._reactInternalFiber) throw Error(s(38));
                return Wl(e, t, r, !1, n)
            }, t.version = "16.14.0"
    },
    263: function(e, t, r) {
        "use strict";
        e.exports = r(264)
    },
    264: function(e, t, r) {
        "use strict";
        /** @license React v0.19.1
         * scheduler.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var n, i, o, s, a;
        if ("undefined" == typeof window || "function" != typeof MessageChannel) {
            var l = null,
                c = null,
                u = function() {
                    if (null !== l) try {
                        var e = t.unstable_now();
                        l(!0, e), l = null
                    } catch (e) {
                        throw setTimeout(u, 0), e
                    }
                },
                f = Date.now();
            t.unstable_now = function() {
                return Date.now() - f
            }, n = function(e) {
                null !== l ? setTimeout(n, 0, e) : (l = e, setTimeout(u, 0))
            }, i = function(e, t) {
                c = setTimeout(e, t)
            }, o = function() {
                clearTimeout(c)
            }, s = function() {
                return !1
            }, a = t.unstable_forceFrameRate = function() {}
        } else {
            var h = window.performance,
                d = window.Date,
                p = window.setTimeout,
                _ = window.clearTimeout;
            if ("undefined" != typeof console) {
                var v = window.cancelAnimationFrame;
                "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof v && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
            }
            if ("object" == typeof h && "function" == typeof h.now) t.unstable_now = function() {
                return h.now()
            };
            else {
                var m = d.now();
                t.unstable_now = function() {
                    return d.now() - m
                }
            }
            var g = !1,
                y = null,
                b = -1,
                S = 5,
                C = 0;
            s = function() {
                return t.unstable_now() >= C
            }, a = function() {}, t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : S = 0 < e ? Math.floor(1e3 / e) : 5
            };
            var w = new MessageChannel,
                E = w.port2;
            w.port1.onmessage = function() {
                if (null !== y) {
                    var e = t.unstable_now();
                    C = e + S;
                    try {
                        y(!0, e) ? E.postMessage(null) : (g = !1, y = null)
                    } catch (e) {
                        throw E.postMessage(null), e
                    }
                } else g = !1
            }, n = function(e) {
                y = e, g || (g = !0, E.postMessage(null))
            }, i = function(e, r) {
                b = p((function() {
                    e(t.unstable_now())
                }), r)
            }, o = function() {
                _(b), b = -1
            }
        }

        function x(e, t) {
            var r = e.length;
            e.push(t);
            e: for (;;) {
                var n = r - 1 >>> 1,
                    i = e[n];
                if (!(void 0 !== i && 0 < L(i, t))) break e;
                e[n] = t, e[r] = i, r = n
            }
        }

        function k(e) {
            return void 0 === (e = e[0]) ? null : e
        }

        function T(e) {
            var t = e[0];
            if (void 0 !== t) {
                var r = e.pop();
                if (r !== t) {
                    e[0] = r;
                    e: for (var n = 0, i = e.length; n < i;) {
                        var o = 2 * (n + 1) - 1,
                            s = e[o],
                            a = o + 1,
                            l = e[a];
                        if (void 0 !== s && 0 > L(s, r)) void 0 !== l && 0 > L(l, s) ? (e[n] = l, e[a] = r, n = a) : (e[n] = s, e[o] = r, n = o);
                        else {
                            if (!(void 0 !== l && 0 > L(l, r))) break e;
                            e[n] = l, e[a] = r, n = a
                        }
                    }
                }
                return t
            }
            return null
        }

        function L(e, t) {
            var r = e.sortIndex - t.sortIndex;
            return 0 !== r ? r : e.id - t.id
        }
        var O = [],
            R = [],
            A = 1,
            P = null,
            M = 3,
            D = !1,
            I = !1,
            F = !1;

        function B(e) {
            for (var t = k(R); null !== t;) {
                if (null === t.callback) T(R);
                else {
                    if (!(t.startTime <= e)) break;
                    T(R), t.sortIndex = t.expirationTime, x(O, t)
                }
                t = k(R)
            }
        }

        function H(e) {
            if (F = !1, B(e), !I)
                if (null !== k(O)) I = !0, n(N);
                else {
                    var t = k(R);
                    null !== t && i(H, t.startTime - e)
                }
        }

        function N(e, r) {
            I = !1, F && (F = !1, o()), D = !0;
            var n = M;
            try {
                for (B(r), P = k(O); null !== P && (!(P.expirationTime > r) || e && !s());) {
                    var a = P.callback;
                    if (null !== a) {
                        P.callback = null, M = P.priorityLevel;
                        var l = a(P.expirationTime <= r);
                        r = t.unstable_now(), "function" == typeof l ? P.callback = l : P === k(O) && T(O), B(r)
                    } else T(O);
                    P = k(O)
                }
                if (null !== P) var c = !0;
                else {
                    var u = k(R);
                    null !== u && i(H, u.startTime - r), c = !1
                }
                return c
            } finally {
                P = null, M = n, D = !1
            }
        }

        function j(e) {
            switch (e) {
                case 1:
                    return -1;
                case 2:
                    return 250;
                case 5:
                    return 1073741823;
                case 4:
                    return 1e4;
                default:
                    return 5e3
            }
        }
        var U = a;
        t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
            e.callback = null
        }, t.unstable_continueExecution = function() {
            I || D || (I = !0, n(N))
        }, t.unstable_getCurrentPriorityLevel = function() {
            return M
        }, t.unstable_getFirstCallbackNode = function() {
            return k(O)
        }, t.unstable_next = function(e) {
            switch (M) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = M
            }
            var r = M;
            M = t;
            try {
                return e()
            } finally {
                M = r
            }
        }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = U, t.unstable_runWithPriority = function(e, t) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
            }
            var r = M;
            M = e;
            try {
                return t()
            } finally {
                M = r
            }
        }, t.unstable_scheduleCallback = function(e, r, s) {
            var a = t.unstable_now();
            if ("object" == typeof s && null !== s) {
                var l = s.delay;
                l = "number" == typeof l && 0 < l ? a + l : a, s = "number" == typeof s.timeout ? s.timeout : j(e)
            } else s = j(e), l = a;
            return e = {
                id: A++,
                callback: r,
                priorityLevel: e,
                startTime: l,
                expirationTime: s = l + s,
                sortIndex: -1
            }, l > a ? (e.sortIndex = l, x(R, e), null === k(O) && e === k(R) && (F ? o() : F = !0, i(H, l - a))) : (e.sortIndex = s, x(O, e), I || D || (I = !0, n(N))), e
        }, t.unstable_shouldYield = function() {
            var e = t.unstable_now();
            B(e);
            var r = k(O);
            return r !== P && null !== P && null !== r && null !== r.callback && r.startTime <= e && r.expirationTime < P.expirationTime || s()
        }, t.unstable_wrapCallback = function(e) {
            var t = M;
            return function() {
                var r = M;
                M = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    M = r
                }
            }
        }
    },
    265: function(e, t, r) {
        "use strict";
        var n = r(266);

        function i() {}

        function o() {}
        o.resetWarningCache = i, e.exports = function() {
            function e(e, t, r, i, o, s) {
                if (s !== n) {
                    var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw a.name = "Invariant Violation", a
                }
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var r = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: o,
                resetWarningCache: i
            };
            return r.PropTypes = r, r
        }
    },
    266: function(e, t, r) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    267: function(e, t, r) {},
    268: function(e, t, r) {},
    28: function(e, t, r) {
        "use strict";
        t.__esModule = !0, r(394), t.default = {
            button: "pf-c-button",
            chipGroup: "pf-c-chip-group",
            divider: "pf-c-divider",
            modifiers: {
                pageInsets: "pf-m-page-insets",
                vertical: "pf-m-vertical",
                buttonGroup: "pf-m-button-group",
                iconButtonGroup: "pf-m-icon-button-group",
                filterGroup: "pf-m-filter-group",
                toggleGroup: "pf-m-toggle-group",
                overflowMenu: "pf-m-overflow-menu",
                bulkSelect: "pf-m-bulk-select",
                expandAll: "pf-m-expand-all",
                expanded: "pf-m-expanded",
                searchFilter: "pf-m-search-filter",
                chipGroup: "pf-m-chip-group",
                label: "pf-m-label",
                pagination: "pf-m-pagination",
                chipContainer: "pf-m-chip-container",
                plain: "pf-m-plain",
                show: "pf-m-show",
                showOnSm: "pf-m-show-on-sm",
                showOnMd: "pf-m-show-on-md",
                showOnLg: "pf-m-show-on-lg",
                showOnXl: "pf-m-show-on-xl",
                showOn_2xl: "pf-m-show-on-2xl",
                alignRight: "pf-m-align-right",
                alignLeft: "pf-m-align-left",
                hidden: "pf-m-hidden",
                visible: "pf-m-visible",
                nowrap: "pf-m-nowrap",
                wrap: "pf-m-wrap",
                alignRightOnSm: "pf-m-align-right-on-sm",
                alignLeftOnSm: "pf-m-align-left-on-sm",
                hiddenOnSm: "pf-m-hidden-on-sm",
                visibleOnSm: "pf-m-visible-on-sm",
                nowrapOnSm: "pf-m-nowrap-on-sm",
                wrapOnSm: "pf-m-wrap-on-sm",
                alignRightOnMd: "pf-m-align-right-on-md",
                alignLeftOnMd: "pf-m-align-left-on-md",
                hiddenOnMd: "pf-m-hidden-on-md",
                visibleOnMd: "pf-m-visible-on-md",
                nowrapOnMd: "pf-m-nowrap-on-md",
                wrapOnMd: "pf-m-wrap-on-md",
                alignRightOnLg: "pf-m-align-right-on-lg",
                alignLeftOnLg: "pf-m-align-left-on-lg",
                hiddenOnLg: "pf-m-hidden-on-lg",
                visibleOnLg: "pf-m-visible-on-lg",
                nowrapOnLg: "pf-m-nowrap-on-lg",
                wrapOnLg: "pf-m-wrap-on-lg",
                alignRightOnXl: "pf-m-align-right-on-xl",
                alignLeftOnXl: "pf-m-align-left-on-xl",
                hiddenOnXl: "pf-m-hidden-on-xl",
                visibleOnXl: "pf-m-visible-on-xl",
                nowrapOnXl: "pf-m-nowrap-on-xl",
                wrapOnXl: "pf-m-wrap-on-xl",
                alignRightOn_2xl: "pf-m-align-right-on-2xl",
                alignLeftOn_2xl: "pf-m-align-left-on-2xl",
                hiddenOn_2xl: "pf-m-hidden-on-2xl",
                visibleOn_2xl: "pf-m-visible-on-2xl",
                nowrapOn_2xl: "pf-m-nowrap-on-2xl",
                wrapOn_2xl: "pf-m-wrap-on-2xl",
                spaceItemsNone: "pf-m-space-items-none",
                spaceItemsSm: "pf-m-space-items-sm",
                spaceItemsMd: "pf-m-space-items-md",
                spaceItemsLg: "pf-m-space-items-lg",
                spaceItemsNoneOnSm: "pf-m-space-items-none-on-sm",
                spaceItemsSmOnSm: "pf-m-space-items-sm-on-sm",
                spaceItemsMdOnSm: "pf-m-space-items-md-on-sm",
                spaceItemsLgOnSm: "pf-m-space-items-lg-on-sm",
                spaceItemsNoneOnMd: "pf-m-space-items-none-on-md",
                spaceItemsSmOnMd: "pf-m-space-items-sm-on-md",
                spaceItemsMdOnMd: "pf-m-space-items-md-on-md",
                spaceItemsLgOnMd: "pf-m-space-items-lg-on-md",
                spaceItemsNoneOnLg: "pf-m-space-items-none-on-lg",
                spaceItemsSmOnLg: "pf-m-space-items-sm-on-lg",
                spaceItemsMdOnLg: "pf-m-space-items-md-on-lg",
                spaceItemsLgOnLg: "pf-m-space-items-lg-on-lg",
                spaceItemsNoneOnXl: "pf-m-space-items-none-on-xl",
                spaceItemsSmOnXl: "pf-m-space-items-sm-on-xl",
                spaceItemsMdOnXl: "pf-m-space-items-md-on-xl",
                spaceItemsLgOnXl: "pf-m-space-items-lg-on-xl",
                spaceItemsNoneOn_2xl: "pf-m-space-items-none-on-2xl",
                spaceItemsSmOn_2xl: "pf-m-space-items-sm-on-2xl",
                spaceItemsMdOn_2xl: "pf-m-space-items-md-on-2xl",
                spaceItemsLgOn_2xl: "pf-m-space-items-lg-on-2xl",
                spacerNone: "pf-m-spacer-none",
                spacerSm: "pf-m-spacer-sm",
                spacerMd: "pf-m-spacer-md",
                spacerLg: "pf-m-spacer-lg",
                spacerNoneOnSm: "pf-m-spacer-none-on-sm",
                spacerSmOnSm: "pf-m-spacer-sm-on-sm",
                spacerMdOnSm: "pf-m-spacer-md-on-sm",
                spacerLgOnSm: "pf-m-spacer-lg-on-sm",
                spacerNoneOnMd: "pf-m-spacer-none-on-md",
                spacerSmOnMd: "pf-m-spacer-sm-on-md",
                spacerMdOnMd: "pf-m-spacer-md-on-md",
                spacerLgOnMd: "pf-m-spacer-lg-on-md",
                spacerNoneOnLg: "pf-m-spacer-none-on-lg",
                spacerSmOnLg: "pf-m-spacer-sm-on-lg",
                spacerMdOnLg: "pf-m-spacer-md-on-lg",
                spacerLgOnLg: "pf-m-spacer-lg-on-lg",
                spacerNoneOnXl: "pf-m-spacer-none-on-xl",
                spacerSmOnXl: "pf-m-spacer-sm-on-xl",
                spacerMdOnXl: "pf-m-spacer-md-on-xl",
                spacerLgOnXl: "pf-m-spacer-lg-on-xl",
                spacerNoneOn_2xl: "pf-m-spacer-none-on-2xl",
                spacerSmOn_2xl: "pf-m-spacer-sm-on-2xl",
                spacerMdOn_2xl: "pf-m-spacer-md-on-2xl",
                spacerLgOn_2xl: "pf-m-spacer-lg-on-2xl",
                insetNone: "pf-m-inset-none",
                insetSm: "pf-m-inset-sm",
                insetMd: "pf-m-inset-md",
                insetLg: "pf-m-inset-lg",
                insetXl: "pf-m-inset-xl",
                inset_2xl: "pf-m-inset-2xl",
                insetNoneOnSm: "pf-m-inset-none-on-sm",
                insetSmOnSm: "pf-m-inset-sm-on-sm",
                insetMdOnSm: "pf-m-inset-md-on-sm",
                insetLgOnSm: "pf-m-inset-lg-on-sm",
                insetXlOnSm: "pf-m-inset-xl-on-sm",
                inset_2xlOnSm: "pf-m-inset-2xl-on-sm",
                insetNoneOnMd: "pf-m-inset-none-on-md",
                insetSmOnMd: "pf-m-inset-sm-on-md",
                insetMdOnMd: "pf-m-inset-md-on-md",
                insetLgOnMd: "pf-m-inset-lg-on-md",
                insetXlOnMd: "pf-m-inset-xl-on-md",
                inset_2xlOnMd: "pf-m-inset-2xl-on-md",
                insetNoneOnLg: "pf-m-inset-none-on-lg",
                insetSmOnLg: "pf-m-inset-sm-on-lg",
                insetMdOnLg: "pf-m-inset-md-on-lg",
                insetLgOnLg: "pf-m-inset-lg-on-lg",
                insetXlOnLg: "pf-m-inset-xl-on-lg",
                inset_2xlOnLg: "pf-m-inset-2xl-on-lg",
                insetNoneOnXl: "pf-m-inset-none-on-xl",
                insetSmOnXl: "pf-m-inset-sm-on-xl",
                insetMdOnXl: "pf-m-inset-md-on-xl",
                insetLgOnXl: "pf-m-inset-lg-on-xl",
                insetXlOnXl: "pf-m-inset-xl-on-xl",
                inset_2xlOnXl: "pf-m-inset-2xl-on-xl",
                insetNoneOn_2xl: "pf-m-inset-none-on-2xl",
                insetSmOn_2xl: "pf-m-inset-sm-on-2xl",
                insetMdOn_2xl: "pf-m-inset-md-on-2xl",
                insetLgOn_2xl: "pf-m-inset-lg-on-2xl",
                insetXlOn_2xl: "pf-m-inset-xl-on-2xl",
                inset_2xlOn_2xl: "pf-m-inset-2xl-on-2xl"
            },
            pagination: "pf-c-pagination",
            toolbar: "pf-c-toolbar",
            toolbarContent: "pf-c-toolbar__content",
            toolbarContentSection: "pf-c-toolbar__content-section",
            toolbarExpandAllIcon: "pf-c-toolbar__expand-all-icon",
            toolbarExpandableContent: "pf-c-toolbar__expandable-content",
            toolbarGroup: "pf-c-toolbar__group",
            toolbarItem: "pf-c-toolbar__item",
            toolbarToggle: "pf-c-toolbar__toggle"
        }
    },
    285: function(e, t, r) {},
    329: function(e, t, r) {},
    394: function(e, t, r) {},
    398: function(e, t, r) {},
    4: function(e, t) {
        e.exports = cockpit
    },
    40: function(e, t, r) {
        "use strict";
        t.__esModule = !0, r(267), t.default = {
            modifiers: {
                sm: "pf-m-sm",
                md: "pf-m-md",
                lg: "pf-m-lg",
                xl: "pf-m-xl"
            },
            spinner: "pf-c-spinner",
            spinnerClipper: "pf-c-spinner__clipper",
            spinnerLeadBall: "pf-c-spinner__lead-ball",
            spinnerPath: "pf-c-spinner__path",
            spinnerTailBall: "pf-c-spinner__tail-ball"
        }
    },
    41: function(e, t, r) {
        "use strict";
        t.__esModule = !0, r(329), t.default = {
            formControl: "pf-c-form-control",
            modifiers: {
                success: "pf-m-success",
                expanded: "pf-m-expanded",
                icon: "pf-m-icon",
                warning: "pf-m-warning",
                search: "pf-m-search",
                calendar: "pf-m-calendar",
                clock: "pf-m-clock",
                placeholder: "pf-m-placeholder",
                resizeVertical: "pf-m-resize-vertical",
                resizeHorizontal: "pf-m-resize-horizontal"
            }
        }
    },
    419: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return u
        }));
        var n = r(2),
            i = r(0),
            o = r(41),
            s = r.n(o),
            a = r(1),
            l = r(14),
            c = r(45);
        class u extends i.Component {
            constructor(e) {
                super(e), this.handleChange = e => {
                    this.props.onChange(e.currentTarget.value, e)
                }, e.id || e["aria-label"] || console.error("FormSelect requires either an id or aria-label to be specified"), this.state = {
                    ouiaStateId: Object(c.a)(u.displayName, e.validated)
                }
            }
            render() {
                const e = this.props,
                    {
                        children: t,
                        className: r,
                        value: o,
                        validated: f,
                        isDisabled: h,
                        isRequired: d,
                        ouiaId: p,
                        ouiaSafe: _
                    } = e,
                    v = Object(n.a)(e, ["children", "className", "value", "validated", "isDisabled", "isRequired", "ouiaId", "ouiaSafe"]);
                return i.createElement("select", Object.assign({}, v, {
                    className: Object(a.a)(s.a.formControl, r, f === l.d.success && s.a.modifiers.success, f === l.d.warning && s.a.modifiers.warning),
                    "aria-invalid": f === l.d.error
                }, Object(c.b)(u.displayName, void 0 !== p ? p : this.state.ouiaStateId, _), {
                    onChange: this.handleChange,
                    disabled: h,
                    required: d,
                    value: o
                }), t)
            }
        }
        u.displayName = "FormSelect", u.defaultProps = {
            className: "",
            value: "",
            validated: "default",
            isDisabled: !1,
            isRequired: !1,
            onBlur: () => {},
            onFocus: () => {},
            onChange: () => {},
            ouiaSafe: !0
        }
    },
    420: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return o
        }));
        var n = r(2),
            i = r(0);
        const o = e => {
            var {
                className: t = "",
                value: r = "",
                isDisabled: o = !1,
                label: s
            } = e, a = Object(n.a)(e, ["className", "value", "isDisabled", "label"]);
            return i.createElement("option", Object.assign({}, a, {
                className: t,
                value: r,
                disabled: o
            }), s)
        };
        o.displayName = "FormSelectOption"
    },
    442: function(e, t, r) {
        self,
        e.exports = (() => {
            "use strict";
            var e = {
                    4567: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.AccessibilityManager = void 0;
                        var o = r(9042),
                            s = r(6114),
                            a = r(6193),
                            l = r(3656),
                            c = r(844),
                            u = r(5596),
                            f = r(9631),
                            h = function(e) {
                                function t(t, r) {
                                    var n = e.call(this) || this;
                                    n._terminal = t, n._renderService = r, n._liveRegionLineCount = 0, n._charsToConsume = [], n._charsToAnnounce = "", n._accessibilityTreeRoot = document.createElement("div"), n._accessibilityTreeRoot.classList.add("xterm-accessibility"), n._rowContainer = document.createElement("div"), n._rowContainer.setAttribute("role", "list"), n._rowContainer.classList.add("xterm-accessibility-tree"), n._rowElements = [];
                                    for (var i = 0; i < n._terminal.rows; i++) n._rowElements[i] = n._createAccessibilityTreeNode(), n._rowContainer.appendChild(n._rowElements[i]);
                                    if (n._topBoundaryFocusListener = function(e) {
                                            return n._onBoundaryFocus(e, 0)
                                        }, n._bottomBoundaryFocusListener = function(e) {
                                            return n._onBoundaryFocus(e, 1)
                                        }, n._rowElements[0].addEventListener("focus", n._topBoundaryFocusListener), n._rowElements[n._rowElements.length - 1].addEventListener("focus", n._bottomBoundaryFocusListener), n._refreshRowsDimensions(), n._accessibilityTreeRoot.appendChild(n._rowContainer), n._renderRowsDebouncer = new a.RenderDebouncer(n._renderRows.bind(n)), n._refreshRows(), n._liveRegion = document.createElement("div"), n._liveRegion.classList.add("live-region"), n._liveRegion.setAttribute("aria-live", "assertive"), n._accessibilityTreeRoot.appendChild(n._liveRegion), !n._terminal.element) throw new Error("Cannot enable accessibility before Terminal.open");
                                    return n._terminal.element.insertAdjacentElement("afterbegin", n._accessibilityTreeRoot), n.register(n._renderRowsDebouncer), n.register(n._terminal.onResize((function(e) {
                                        return n._onResize(e.rows)
                                    }))), n.register(n._terminal.onRender((function(e) {
                                        return n._refreshRows(e.start, e.end)
                                    }))), n.register(n._terminal.onScroll((function() {
                                        return n._refreshRows()
                                    }))), n.register(n._terminal.onA11yChar((function(e) {
                                        return n._onChar(e)
                                    }))), n.register(n._terminal.onLineFeed((function() {
                                        return n._onChar("\n")
                                    }))), n.register(n._terminal.onA11yTab((function(e) {
                                        return n._onTab(e)
                                    }))), n.register(n._terminal.onKey((function(e) {
                                        return n._onKey(e.key)
                                    }))), n.register(n._terminal.onBlur((function() {
                                        return n._clearLiveRegion()
                                    }))), n.register(n._renderService.onDimensionsChange((function() {
                                        return n._refreshRowsDimensions()
                                    }))), n._screenDprMonitor = new u.ScreenDprMonitor, n.register(n._screenDprMonitor), n._screenDprMonitor.setListener((function() {
                                        return n._refreshRowsDimensions()
                                    })), n.register(l.addDisposableDomListener(window, "resize", (function() {
                                        return n._refreshRowsDimensions()
                                    }))), n
                                }
                                return i(t, e), t.prototype.dispose = function() {
                                    e.prototype.dispose.call(this), f.removeElementFromParent(this._accessibilityTreeRoot), this._rowElements.length = 0
                                }, t.prototype._onBoundaryFocus = function(e, t) {
                                    var r = e.target,
                                        n = this._rowElements[0 === t ? 1 : this._rowElements.length - 2];
                                    if (r.getAttribute("aria-posinset") !== (0 === t ? "1" : "" + this._terminal.buffer.lines.length) && e.relatedTarget === n) {
                                        var i, o;
                                        if (0 === t ? (i = r, o = this._rowElements.pop(), this._rowContainer.removeChild(o)) : (i = this._rowElements.shift(), o = r, this._rowContainer.removeChild(i)), i.removeEventListener("focus", this._topBoundaryFocusListener), o.removeEventListener("focus", this._bottomBoundaryFocusListener), 0 === t) {
                                            var s = this._createAccessibilityTreeNode();
                                            this._rowElements.unshift(s), this._rowContainer.insertAdjacentElement("afterbegin", s)
                                        } else s = this._createAccessibilityTreeNode(), this._rowElements.push(s), this._rowContainer.appendChild(s);
                                        this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(0 === t ? -1 : 1), this._rowElements[0 === t ? 1 : this._rowElements.length - 2].focus(), e.preventDefault(), e.stopImmediatePropagation()
                                    }
                                }, t.prototype._onResize = function(e) {
                                    this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
                                    for (var t = this._rowContainer.children.length; t < this._terminal.rows; t++) this._rowElements[t] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[t]);
                                    for (; this._rowElements.length > e;) this._rowContainer.removeChild(this._rowElements.pop());
                                    this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions()
                                }, t.prototype._createAccessibilityTreeNode = function() {
                                    var e = document.createElement("div");
                                    return e.setAttribute("role", "listitem"), e.tabIndex = -1, this._refreshRowDimensions(e), e
                                }, t.prototype._onTab = function(e) {
                                    for (var t = 0; t < e; t++) this._onChar(" ")
                                }, t.prototype._onChar = function(e) {
                                    var t = this;
                                    this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e && (this._charsToAnnounce += e) : this._charsToAnnounce += e, "\n" === e && (this._liveRegionLineCount++, 21 === this._liveRegionLineCount && (this._liveRegion.textContent += o.tooMuchOutput)), s.isMac && this._liveRegion.textContent && this._liveRegion.textContent.length > 0 && !this._liveRegion.parentNode && setTimeout((function() {
                                        t._accessibilityTreeRoot.appendChild(t._liveRegion)
                                    }), 0))
                                }, t.prototype._clearLiveRegion = function() {
                                    this._liveRegion.textContent = "", this._liveRegionLineCount = 0, s.isMac && f.removeElementFromParent(this._liveRegion)
                                }, t.prototype._onKey = function(e) {
                                    this._clearLiveRegion(), this._charsToConsume.push(e)
                                }, t.prototype._refreshRows = function(e, t) {
                                    this._renderRowsDebouncer.refresh(e, t, this._terminal.rows)
                                }, t.prototype._renderRows = function(e, t) {
                                    for (var r = this._terminal.buffer, n = r.lines.length.toString(), i = e; i <= t; i++) {
                                        var o = r.translateBufferLineToString(r.ydisp + i, !0),
                                            s = (r.ydisp + i + 1).toString(),
                                            a = this._rowElements[i];
                                        a && (0 === o.length ? a.innerText = " " : a.textContent = o, a.setAttribute("aria-posinset", s), a.setAttribute("aria-setsize", n))
                                    }
                                    this._announceCharacters()
                                }, t.prototype._refreshRowsDimensions = function() {
                                    if (this._renderService.dimensions.actualCellHeight) {
                                        this._rowElements.length !== this._terminal.rows && this._onResize(this._terminal.rows);
                                        for (var e = 0; e < this._terminal.rows; e++) this._refreshRowDimensions(this._rowElements[e])
                                    }
                                }, t.prototype._refreshRowDimensions = function(e) {
                                    e.style.height = this._renderService.dimensions.actualCellHeight + "px"
                                }, t.prototype._announceCharacters = function() {
                                    0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "")
                                }, t
                            }(c.Disposable);
                        t.AccessibilityManager = h
                    },
                    3614: (e, t) => {
                        function r(e) {
                            return e.replace(/\r?\n/g, "\r")
                        }

                        function n(e, t) {
                            return t ? "[200~" + e + "[201~" : e
                        }

                        function i(e, t, i) {
                            e = n(e = r(e), i.decPrivateModes.bracketedPasteMode), i.triggerDataEvent(e, !0), t.value = ""
                        }

                        function o(e, t, r) {
                            var n = r.getBoundingClientRect(),
                                i = e.clientX - n.left - 10,
                                o = e.clientY - n.top - 10;
                            t.style.width = "20px", t.style.height = "20px", t.style.left = i + "px", t.style.top = o + "px", t.style.zIndex = "1000", t.focus()
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.rightClickHandler = t.moveTextAreaUnderMouseCursor = t.paste = t.handlePasteEvent = t.copyHandler = t.bracketTextForPaste = t.prepareTextForTerminal = void 0, t.prepareTextForTerminal = r, t.bracketTextForPaste = n, t.copyHandler = function(e, t) {
                            e.clipboardData && e.clipboardData.setData("text/plain", t.selectionText), e.preventDefault()
                        }, t.handlePasteEvent = function(e, t, r) {
                            e.stopPropagation(), e.clipboardData && i(e.clipboardData.getData("text/plain"), t, r)
                        }, t.paste = i, t.moveTextAreaUnderMouseCursor = o, t.rightClickHandler = function(e, t, r, n, i) {
                            o(e, t, r), i && n.rightClickSelect(e), t.value = n.selectionText, t.select()
                        }
                    },
                    4774: (e, t) => {
                        var r, n, i, o;

                        function s(e) {
                            var t = e.toString(16);
                            return t.length < 2 ? "0" + t : t
                        }

                        function a(e, t) {
                            return e < t ? (t + .05) / (e + .05) : (e + .05) / (t + .05)
                        }
                        Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.contrastRatio = t.toPaddedHex = t.rgba = t.rgb = t.css = t.color = t.channels = void 0,
                            function(e) {
                                e.toCss = function(e, t, r, n) {
                                    return void 0 !== n ? "#" + s(e) + s(t) + s(r) + s(n) : "#" + s(e) + s(t) + s(r)
                                }, e.toRgba = function(e, t, r, n) {
                                    return void 0 === n && (n = 255), (e << 24 | t << 16 | r << 8 | n) >>> 0
                                }
                            }(r = t.channels || (t.channels = {})), (n = t.color || (t.color = {})).blend = function(e, t) {
                                var n = (255 & t.rgba) / 255;
                                if (1 === n) return {
                                    css: t.css,
                                    rgba: t.rgba
                                };
                                var i = t.rgba >> 24 & 255,
                                    o = t.rgba >> 16 & 255,
                                    s = t.rgba >> 8 & 255,
                                    a = e.rgba >> 24 & 255,
                                    l = e.rgba >> 16 & 255,
                                    c = e.rgba >> 8 & 255,
                                    u = a + Math.round((i - a) * n),
                                    f = l + Math.round((o - l) * n),
                                    h = c + Math.round((s - c) * n);
                                return {
                                    css: r.toCss(u, f, h),
                                    rgba: r.toRgba(u, f, h)
                                }
                            }, n.isOpaque = function(e) {
                                return 255 == (255 & e.rgba)
                            }, n.ensureContrastRatio = function(e, t, r) {
                                var n = o.ensureContrastRatio(e.rgba, t.rgba, r);
                                if (n) return o.toColor(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255)
                            }, n.opaque = function(e) {
                                var t = (255 | e.rgba) >>> 0,
                                    n = o.toChannels(t),
                                    i = n[0],
                                    s = n[1],
                                    a = n[2];
                                return {
                                    css: r.toCss(i, s, a),
                                    rgba: t
                                }
                            }, n.opacity = function(e, t) {
                                var n = Math.round(255 * t),
                                    i = o.toChannels(e.rgba),
                                    s = i[0],
                                    a = i[1],
                                    l = i[2];
                                return {
                                    css: r.toCss(s, a, l, n),
                                    rgba: r.toRgba(s, a, l, n)
                                }
                            }, (t.css || (t.css = {})).toColor = function(e) {
                                switch (e.length) {
                                    case 7:
                                        return {
                                            css: e, rgba: (parseInt(e.slice(1), 16) << 8 | 255) >>> 0
                                        };
                                    case 9:
                                        return {
                                            css: e, rgba: parseInt(e.slice(1), 16) >>> 0
                                        }
                                }
                                throw new Error("css.toColor: Unsupported css format")
                            },
                            function(e) {
                                function t(e, t, r) {
                                    var n = e / 255,
                                        i = t / 255,
                                        o = r / 255;
                                    return .2126 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)) + .7152 * (i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)) + .0722 * (o <= .03928 ? o / 12.92 : Math.pow((o + .055) / 1.055, 2.4))
                                }
                                e.relativeLuminance = function(e) {
                                    return t(e >> 16 & 255, e >> 8 & 255, 255 & e)
                                }, e.relativeLuminance2 = t
                            }(i = t.rgb || (t.rgb = {})),
                            function(e) {
                                function t(e, t, r) {
                                    for (var n = e >> 24 & 255, o = e >> 16 & 255, s = e >> 8 & 255, l = t >> 24 & 255, c = t >> 16 & 255, u = t >> 8 & 255, f = a(i.relativeLuminance2(l, u, c), i.relativeLuminance2(n, o, s)); f < r && (l > 0 || c > 0 || u > 0);) l -= Math.max(0, Math.ceil(.1 * l)), c -= Math.max(0, Math.ceil(.1 * c)), u -= Math.max(0, Math.ceil(.1 * u)), f = a(i.relativeLuminance2(l, u, c), i.relativeLuminance2(n, o, s));
                                    return (l << 24 | c << 16 | u << 8 | 255) >>> 0
                                }

                                function n(e, t, r) {
                                    for (var n = e >> 24 & 255, o = e >> 16 & 255, s = e >> 8 & 255, l = t >> 24 & 255, c = t >> 16 & 255, u = t >> 8 & 255, f = a(i.relativeLuminance2(l, u, c), i.relativeLuminance2(n, o, s)); f < r && (l < 255 || c < 255 || u < 255);) l = Math.min(255, l + Math.ceil(.1 * (255 - l))), c = Math.min(255, c + Math.ceil(.1 * (255 - c))), u = Math.min(255, u + Math.ceil(.1 * (255 - u))), f = a(i.relativeLuminance2(l, u, c), i.relativeLuminance2(n, o, s));
                                    return (l << 24 | c << 16 | u << 8 | 255) >>> 0
                                }
                                e.ensureContrastRatio = function(e, r, o) {
                                    var s = i.relativeLuminance(e >> 8),
                                        l = i.relativeLuminance(r >> 8);
                                    if (a(s, l) < o) return l < s ? t(e, r, o) : n(e, r, o)
                                }, e.reduceLuminance = t, e.increaseLuminance = n, e.toChannels = function(e) {
                                    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
                                }, e.toColor = function(e, t, n) {
                                    return {
                                        css: r.toCss(e, t, n),
                                        rgba: r.toRgba(e, t, n)
                                    }
                                }
                            }(o = t.rgba || (t.rgba = {})), t.toPaddedHex = s, t.contrastRatio = a
                    },
                    7239: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.ColorContrastCache = void 0;
                        var r = function() {
                            function e() {
                                this._color = {}, this._rgba = {}
                            }
                            return e.prototype.clear = function() {
                                this._color = {}, this._rgba = {}
                            }, e.prototype.setCss = function(e, t, r) {
                                this._rgba[e] || (this._rgba[e] = {}), this._rgba[e][t] = r
                            }, e.prototype.getCss = function(e, t) {
                                return this._rgba[e] ? this._rgba[e][t] : void 0
                            }, e.prototype.setColor = function(e, t, r) {
                                this._color[e] || (this._color[e] = {}), this._color[e][t] = r
                            }, e.prototype.getColor = function(e, t) {
                                return this._color[e] ? this._color[e][t] : void 0
                            }, e
                        }();
                        t.ColorContrastCache = r
                    },
                    5680: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.ColorManager = t.DEFAULT_ANSI_COLORS = void 0;
                        var n = r(4774),
                            i = r(7239),
                            o = n.css.toColor("#ffffff"),
                            s = n.css.toColor("#000000"),
                            a = n.css.toColor("#ffffff"),
                            l = n.css.toColor("#000000"),
                            c = {
                                css: "rgba(255, 255, 255, 0.3)",
                                rgba: 4294967117
                            };
                        t.DEFAULT_ANSI_COLORS = Object.freeze(function() {
                            for (var e = [n.css.toColor("#2e3436"), n.css.toColor("#cc0000"), n.css.toColor("#4e9a06"), n.css.toColor("#c4a000"), n.css.toColor("#3465a4"), n.css.toColor("#75507b"), n.css.toColor("#06989a"), n.css.toColor("#d3d7cf"), n.css.toColor("#555753"), n.css.toColor("#ef2929"), n.css.toColor("#8ae234"), n.css.toColor("#fce94f"), n.css.toColor("#729fcf"), n.css.toColor("#ad7fa8"), n.css.toColor("#34e2e2"), n.css.toColor("#eeeeec")], t = [0, 95, 135, 175, 215, 255], r = 0; r < 216; r++) {
                                var i = t[r / 36 % 6 | 0],
                                    o = t[r / 6 % 6 | 0],
                                    s = t[r % 6];
                                e.push({
                                    css: n.channels.toCss(i, o, s),
                                    rgba: n.channels.toRgba(i, o, s)
                                })
                            }
                            for (r = 0; r < 24; r++) {
                                var a = 8 + 10 * r;
                                e.push({
                                    css: n.channels.toCss(a, a, a),
                                    rgba: n.channels.toRgba(a, a, a)
                                })
                            }
                            return e
                        }());
                        var u = function() {
                            function e(e, r) {
                                this.allowTransparency = r;
                                var u = e.createElement("canvas");
                                u.width = 1, u.height = 1;
                                var f = u.getContext("2d");
                                if (!f) throw new Error("Could not get rendering context");
                                this._ctx = f, this._ctx.globalCompositeOperation = "copy", this._litmusColor = this._ctx.createLinearGradient(0, 0, 1, 1), this._contrastCache = new i.ColorContrastCache, this.colors = {
                                    foreground: o,
                                    background: s,
                                    cursor: a,
                                    cursorAccent: l,
                                    selectionTransparent: c,
                                    selectionOpaque: n.color.blend(s, c),
                                    ansi: t.DEFAULT_ANSI_COLORS.slice(),
                                    contrastCache: this._contrastCache
                                }
                            }
                            return e.prototype.onOptionsChange = function(e) {
                                "minimumContrastRatio" === e && this._contrastCache.clear()
                            }, e.prototype.setTheme = function(e) {
                                void 0 === e && (e = {}), this.colors.foreground = this._parseColor(e.foreground, o), this.colors.background = this._parseColor(e.background, s), this.colors.cursor = this._parseColor(e.cursor, a, !0), this.colors.cursorAccent = this._parseColor(e.cursorAccent, l, !0), this.colors.selectionTransparent = this._parseColor(e.selection, c, !0), this.colors.selectionOpaque = n.color.blend(this.colors.background, this.colors.selectionTransparent), n.color.isOpaque(this.colors.selectionTransparent) && (this.colors.selectionTransparent = n.color.opacity(this.colors.selectionTransparent, .3)), this.colors.ansi[0] = this._parseColor(e.black, t.DEFAULT_ANSI_COLORS[0]), this.colors.ansi[1] = this._parseColor(e.red, t.DEFAULT_ANSI_COLORS[1]), this.colors.ansi[2] = this._parseColor(e.green, t.DEFAULT_ANSI_COLORS[2]), this.colors.ansi[3] = this._parseColor(e.yellow, t.DEFAULT_ANSI_COLORS[3]), this.colors.ansi[4] = this._parseColor(e.blue, t.DEFAULT_ANSI_COLORS[4]), this.colors.ansi[5] = this._parseColor(e.magenta, t.DEFAULT_ANSI_COLORS[5]), this.colors.ansi[6] = this._parseColor(e.cyan, t.DEFAULT_ANSI_COLORS[6]), this.colors.ansi[7] = this._parseColor(e.white, t.DEFAULT_ANSI_COLORS[7]), this.colors.ansi[8] = this._parseColor(e.brightBlack, t.DEFAULT_ANSI_COLORS[8]), this.colors.ansi[9] = this._parseColor(e.brightRed, t.DEFAULT_ANSI_COLORS[9]), this.colors.ansi[10] = this._parseColor(e.brightGreen, t.DEFAULT_ANSI_COLORS[10]), this.colors.ansi[11] = this._parseColor(e.brightYellow, t.DEFAULT_ANSI_COLORS[11]), this.colors.ansi[12] = this._parseColor(e.brightBlue, t.DEFAULT_ANSI_COLORS[12]), this.colors.ansi[13] = this._parseColor(e.brightMagenta, t.DEFAULT_ANSI_COLORS[13]), this.colors.ansi[14] = this._parseColor(e.brightCyan, t.DEFAULT_ANSI_COLORS[14]), this.colors.ansi[15] = this._parseColor(e.brightWhite, t.DEFAULT_ANSI_COLORS[15]), this._contrastCache.clear()
                            }, e.prototype._parseColor = function(e, t, r) {
                                if (void 0 === r && (r = this.allowTransparency), void 0 === e) return t;
                                if (this._ctx.fillStyle = this._litmusColor, this._ctx.fillStyle = e, "string" != typeof this._ctx.fillStyle) return console.warn("Color: " + e + " is invalid using fallback " + t.css), t;
                                this._ctx.fillRect(0, 0, 1, 1);
                                var i = this._ctx.getImageData(0, 0, 1, 1).data;
                                if (255 !== i[3]) {
                                    if (!r) return console.warn("Color: " + e + " is using transparency, but allowTransparency is false. Using fallback " + t.css + "."), t;
                                    var o = this._ctx.fillStyle.substring(5, this._ctx.fillStyle.length - 1).split(",").map((function(e) {
                                            return Number(e)
                                        })),
                                        s = o[0],
                                        a = o[1],
                                        l = o[2],
                                        c = o[3],
                                        u = Math.round(255 * c);
                                    return {
                                        rgba: n.channels.toRgba(s, a, l, u),
                                        css: e
                                    }
                                }
                                return {
                                    css: this._ctx.fillStyle,
                                    rgba: n.channels.toRgba(i[0], i[1], i[2], i[3])
                                }
                            }, e
                        }();
                        t.ColorManager = u
                    },
                    9631: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.removeElementFromParent = void 0, t.removeElementFromParent = function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            for (var n = 0, i = t; n < i.length; n++) {
                                var o = i[n];
                                null === (e = null == o ? void 0 : o.parentElement) || void 0 === e || e.removeChild(o)
                            }
                        }
                    },
                    3656: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.addDisposableDomListener = void 0, t.addDisposableDomListener = function(e, t, r, n) {
                            e.addEventListener(t, r, n);
                            var i = !1;
                            return {
                                dispose: function() {
                                    i || (i = !0, e.removeEventListener(t, r, n))
                                }
                            }
                        }
                    },
                    3551: function(e, t, r) {
                        var n = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            i = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.MouseZone = t.Linkifier = void 0;
                        var o = r(8460),
                            s = r(2585),
                            a = function() {
                                function e(e, t, r) {
                                    this._bufferService = e, this._logService = t, this._unicodeService = r, this._linkMatchers = [], this._nextLinkMatcherId = 0, this._onShowLinkUnderline = new o.EventEmitter, this._onHideLinkUnderline = new o.EventEmitter, this._onLinkTooltip = new o.EventEmitter, this._rowsToLinkify = {
                                        start: void 0,
                                        end: void 0
                                    }
                                }
                                return Object.defineProperty(e.prototype, "onShowLinkUnderline", {
                                    get: function() {
                                        return this._onShowLinkUnderline.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onHideLinkUnderline", {
                                    get: function() {
                                        return this._onHideLinkUnderline.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onLinkTooltip", {
                                    get: function() {
                                        return this._onLinkTooltip.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.attachToDom = function(e, t) {
                                    this._element = e, this._mouseZoneManager = t
                                }, e.prototype.linkifyRows = function(t, r) {
                                    var n = this;
                                    this._mouseZoneManager && (void 0 === this._rowsToLinkify.start || void 0 === this._rowsToLinkify.end ? (this._rowsToLinkify.start = t, this._rowsToLinkify.end = r) : (this._rowsToLinkify.start = Math.min(this._rowsToLinkify.start, t), this._rowsToLinkify.end = Math.max(this._rowsToLinkify.end, r)), this._mouseZoneManager.clearAll(t, r), this._rowsTimeoutId && clearTimeout(this._rowsTimeoutId), this._rowsTimeoutId = setTimeout((function() {
                                        return n._linkifyRows()
                                    }), e._timeBeforeLatency))
                                }, e.prototype._linkifyRows = function() {
                                    this._rowsTimeoutId = void 0;
                                    var e = this._bufferService.buffer;
                                    if (void 0 !== this._rowsToLinkify.start && void 0 !== this._rowsToLinkify.end) {
                                        var t = e.ydisp + this._rowsToLinkify.start;
                                        if (!(t >= e.lines.length)) {
                                            for (var r = e.ydisp + Math.min(this._rowsToLinkify.end, this._bufferService.rows) + 1, n = Math.ceil(2e3 / this._bufferService.cols), i = this._bufferService.buffer.iterator(!1, t, r, n, n); i.hasNext();)
                                                for (var o = i.next(), s = 0; s < this._linkMatchers.length; s++) this._doLinkifyRow(o.range.first, o.content, this._linkMatchers[s]);
                                            this._rowsToLinkify.start = void 0, this._rowsToLinkify.end = void 0
                                        }
                                    } else this._logService.debug("_rowToLinkify was unset before _linkifyRows was called")
                                }, e.prototype.registerLinkMatcher = function(e, t, r) {
                                    if (void 0 === r && (r = {}), !t) throw new Error("handler must be defined");
                                    var n = {
                                        id: this._nextLinkMatcherId++,
                                        regex: e,
                                        handler: t,
                                        matchIndex: r.matchIndex,
                                        validationCallback: r.validationCallback,
                                        hoverTooltipCallback: r.tooltipCallback,
                                        hoverLeaveCallback: r.leaveCallback,
                                        willLinkActivate: r.willLinkActivate,
                                        priority: r.priority || 0
                                    };
                                    return this._addLinkMatcherToList(n), n.id
                                }, e.prototype._addLinkMatcherToList = function(e) {
                                    if (0 !== this._linkMatchers.length) {
                                        for (var t = this._linkMatchers.length - 1; t >= 0; t--)
                                            if (e.priority <= this._linkMatchers[t].priority) return void this._linkMatchers.splice(t + 1, 0, e);
                                        this._linkMatchers.splice(0, 0, e)
                                    } else this._linkMatchers.push(e)
                                }, e.prototype.deregisterLinkMatcher = function(e) {
                                    for (var t = 0; t < this._linkMatchers.length; t++)
                                        if (this._linkMatchers[t].id === e) return this._linkMatchers.splice(t, 1), !0;
                                    return !1
                                }, e.prototype._doLinkifyRow = function(e, t, r) {
                                    for (var n, i = this, o = new RegExp(r.regex.source, (r.regex.flags || "") + "g"), s = -1, a = function() {
                                            var a = n["number" != typeof r.matchIndex ? 0 : r.matchIndex];
                                            if (!a) return l._logService.debug("match found without corresponding matchIndex", n, r), "break";
                                            if (s = t.indexOf(a, s + 1), o.lastIndex = s + a.length, s < 0) return "break";
                                            var c = l._bufferService.buffer.stringIndexToBufferIndex(e, s);
                                            if (c[0] < 0) return "break";
                                            var u = l._bufferService.buffer.lines.get(c[0]);
                                            if (!u) return "break";
                                            var f = u.getFg(c[1]),
                                                h = f ? f >> 9 & 511 : void 0;
                                            r.validationCallback ? r.validationCallback(a, (function(e) {
                                                i._rowsTimeoutId || e && i._addLink(c[1], c[0] - i._bufferService.buffer.ydisp, a, r, h)
                                            })) : l._addLink(c[1], c[0] - l._bufferService.buffer.ydisp, a, r, h)
                                        }, l = this; null !== (n = o.exec(t)) && "break" !== a(););
                                }, e.prototype._addLink = function(e, t, r, n, i) {
                                    var o = this;
                                    if (this._mouseZoneManager && this._element) {
                                        var s = this._unicodeService.getStringCellWidth(r),
                                            a = e % this._bufferService.cols,
                                            c = t + Math.floor(e / this._bufferService.cols),
                                            u = (a + s) % this._bufferService.cols,
                                            f = c + Math.floor((a + s) / this._bufferService.cols);
                                        0 === u && (u = this._bufferService.cols, f--), this._mouseZoneManager.add(new l(a + 1, c + 1, u + 1, f + 1, (function(e) {
                                            if (n.handler) return n.handler(e, r);
                                            var t = window.open();
                                            t ? (t.opener = null, t.location.href = r) : console.warn("Opening link blocked as opener could not be cleared")
                                        }), (function() {
                                            o._onShowLinkUnderline.fire(o._createLinkHoverEvent(a, c, u, f, i)), o._element.classList.add("xterm-cursor-pointer")
                                        }), (function(e) {
                                            o._onLinkTooltip.fire(o._createLinkHoverEvent(a, c, u, f, i)), n.hoverTooltipCallback && n.hoverTooltipCallback(e, r, {
                                                start: {
                                                    x: a,
                                                    y: c
                                                },
                                                end: {
                                                    x: u,
                                                    y: f
                                                }
                                            })
                                        }), (function() {
                                            o._onHideLinkUnderline.fire(o._createLinkHoverEvent(a, c, u, f, i)), o._element.classList.remove("xterm-cursor-pointer"), n.hoverLeaveCallback && n.hoverLeaveCallback()
                                        }), (function(e) {
                                            return !n.willLinkActivate || n.willLinkActivate(e, r)
                                        })))
                                    }
                                }, e.prototype._createLinkHoverEvent = function(e, t, r, n, i) {
                                    return {
                                        x1: e,
                                        y1: t,
                                        x2: r,
                                        y2: n,
                                        cols: this._bufferService.cols,
                                        fg: i
                                    }
                                }, e._timeBeforeLatency = 200, e = n([i(0, s.IBufferService), i(1, s.ILogService), i(2, s.IUnicodeService)], e)
                            }();
                        t.Linkifier = a;
                        var l = function(e, t, r, n, i, o, s, a, l) {
                            this.x1 = e, this.y1 = t, this.x2 = r, this.y2 = n, this.clickCallback = i, this.hoverCallback = o, this.tooltipCallback = s, this.leaveCallback = a, this.willLinkActivate = l
                        };
                        t.MouseZone = l
                    },
                    6465: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                                return (n = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(e, t) {
                                        e.__proto__ = t
                                    } || function(e, t) {
                                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                    })(e, t)
                            }, function(e, t) {
                                function r() {
                                    this.constructor = e
                                }
                                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                            }),
                            o = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            s = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Linkifier2 = void 0;
                        var a = r(2585),
                            l = r(8460),
                            c = r(844),
                            u = r(3656),
                            f = function(e) {
                                function t(t) {
                                    var r = e.call(this) || this;
                                    return r._bufferService = t, r._linkProviders = [], r._linkCacheDisposables = [], r._isMouseOut = !0, r._activeLine = -1, r._onShowLinkUnderline = r.register(new l.EventEmitter), r._onHideLinkUnderline = r.register(new l.EventEmitter), r.register(c.getDisposeArrayDisposable(r._linkCacheDisposables)), r
                                }
                                return i(t, e), Object.defineProperty(t.prototype, "onShowLinkUnderline", {
                                    get: function() {
                                        return this._onShowLinkUnderline.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onHideLinkUnderline", {
                                    get: function() {
                                        return this._onHideLinkUnderline.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.registerLinkProvider = function(e) {
                                    var t = this;
                                    return this._linkProviders.push(e), {
                                        dispose: function() {
                                            var r = t._linkProviders.indexOf(e); - 1 !== r && t._linkProviders.splice(r, 1)
                                        }
                                    }
                                }, t.prototype.attachToDom = function(e, t, r) {
                                    var n = this;
                                    this._element = e, this._mouseService = t, this._renderService = r, this.register(u.addDisposableDomListener(this._element, "mouseleave", (function() {
                                        n._isMouseOut = !0, n._clearCurrentLink()
                                    }))), this.register(u.addDisposableDomListener(this._element, "mousemove", this._onMouseMove.bind(this))), this.register(u.addDisposableDomListener(this._element, "click", this._onClick.bind(this)))
                                }, t.prototype._onMouseMove = function(e) {
                                    if (this._lastMouseEvent = e, this._element && this._mouseService) {
                                        var t = this._positionFromMouseEvent(e, this._element, this._mouseService);
                                        if (t) {
                                            this._isMouseOut = !1;
                                            for (var r = e.composedPath(), n = 0; n < r.length; n++) {
                                                var i = r[n];
                                                if (i.classList.contains("xterm")) break;
                                                if (i.classList.contains("xterm-hover")) return
                                            }
                                            this._lastBufferCell && t.x === this._lastBufferCell.x && t.y === this._lastBufferCell.y || (this._onHover(t), this._lastBufferCell = t)
                                        }
                                    }
                                }, t.prototype._onHover = function(e) {
                                    if (this._activeLine !== e.y) return this._clearCurrentLink(), void this._askForLink(e, !1);
                                    this._currentLink && this._linkAtPosition(this._currentLink.link, e) || (this._clearCurrentLink(), this._askForLink(e, !0))
                                }, t.prototype._askForLink = function(e, t) {
                                    var r, n = this;
                                    this._activeProviderReplies && t || (null === (r = this._activeProviderReplies) || void 0 === r || r.forEach((function(e) {
                                        null == e || e.forEach((function(e) {
                                            e.link.dispose && e.link.dispose()
                                        }))
                                    })), this._activeProviderReplies = new Map, this._activeLine = e.y);
                                    var i = !1;
                                    this._linkProviders.forEach((function(r, o) {
                                        var s;
                                        t ? (null === (s = n._activeProviderReplies) || void 0 === s ? void 0 : s.get(o)) && (i = n._checkLinkProviderResult(o, e, i)) : r.provideLinks(e.y, (function(t) {
                                            var r, s;
                                            if (!n._isMouseOut) {
                                                var a = null == t ? void 0 : t.map((function(e) {
                                                    return {
                                                        link: e
                                                    }
                                                }));
                                                null === (r = n._activeProviderReplies) || void 0 === r || r.set(o, a), i = n._checkLinkProviderResult(o, e, i), (null === (s = n._activeProviderReplies) || void 0 === s ? void 0 : s.size) === n._linkProviders.length && n._removeIntersectingLinks(e.y, n._activeProviderReplies)
                                            }
                                        }))
                                    }))
                                }, t.prototype._removeIntersectingLinks = function(e, t) {
                                    for (var r = new Set, n = 0; n < t.size; n++) {
                                        var i = t.get(n);
                                        if (i)
                                            for (var o = 0; o < i.length; o++)
                                                for (var s = i[o], a = s.link.range.start.y < e ? 0 : s.link.range.start.x, l = s.link.range.end.y > e ? this._bufferService.cols : s.link.range.end.x, c = a; c <= l; c++) {
                                                    if (r.has(c)) {
                                                        i.splice(o--, 1);
                                                        break
                                                    }
                                                    r.add(c)
                                                }
                                    }
                                }, t.prototype._checkLinkProviderResult = function(e, t, r) {
                                    var n, i = this;
                                    if (!this._activeProviderReplies) return r;
                                    for (var o = this._activeProviderReplies.get(e), s = !1, a = 0; a < e; a++) this._activeProviderReplies.has(a) && !this._activeProviderReplies.get(a) || (s = !0);
                                    if (!s && o) {
                                        var l = o.find((function(e) {
                                            return i._linkAtPosition(e.link, t)
                                        }));
                                        l && (r = !0, this._handleNewLink(l))
                                    }
                                    if (this._activeProviderReplies.size === this._linkProviders.length && !r)
                                        for (a = 0; a < this._activeProviderReplies.size; a++) {
                                            var c = null === (n = this._activeProviderReplies.get(a)) || void 0 === n ? void 0 : n.find((function(e) {
                                                return i._linkAtPosition(e.link, t)
                                            }));
                                            if (c) {
                                                r = !0, this._handleNewLink(c);
                                                break
                                            }
                                        }
                                    return r
                                }, t.prototype._onClick = function(e) {
                                    if (this._element && this._mouseService && this._currentLink) {
                                        var t = this._positionFromMouseEvent(e, this._element, this._mouseService);
                                        t && this._linkAtPosition(this._currentLink.link, t) && this._currentLink.link.activate(e, this._currentLink.link.text)
                                    }
                                }, t.prototype._clearCurrentLink = function(e, t) {
                                    this._element && this._currentLink && this._lastMouseEvent && (!e || !t || this._currentLink.link.range.start.y >= e && this._currentLink.link.range.end.y <= t) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, c.disposeArray(this._linkCacheDisposables))
                                }, t.prototype._handleNewLink = function(e) {
                                    var t = this;
                                    if (this._element && this._lastMouseEvent && this._mouseService) {
                                        var r = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
                                        r && this._linkAtPosition(e.link, r) && (this._currentLink = e, this._currentLink.state = {
                                            decorations: {
                                                underline: void 0 === e.link.decorations || e.link.decorations.underline,
                                                pointerCursor: void 0 === e.link.decorations || e.link.decorations.pointerCursor
                                            },
                                            isHovered: !0
                                        }, this._linkHover(this._element, e.link, this._lastMouseEvent), e.link.decorations = {}, Object.defineProperties(e.link.decorations, {
                                            pointerCursor: {
                                                get: function() {
                                                    var e, r;
                                                    return null === (r = null === (e = t._currentLink) || void 0 === e ? void 0 : e.state) || void 0 === r ? void 0 : r.decorations.pointerCursor
                                                },
                                                set: function(e) {
                                                    var r, n;
                                                    (null === (r = t._currentLink) || void 0 === r ? void 0 : r.state) && t._currentLink.state.decorations.pointerCursor !== e && (t._currentLink.state.decorations.pointerCursor = e, t._currentLink.state.isHovered && (null === (n = t._element) || void 0 === n || n.classList.toggle("xterm-cursor-pointer", e)))
                                                }
                                            },
                                            underline: {
                                                get: function() {
                                                    var e, r;
                                                    return null === (r = null === (e = t._currentLink) || void 0 === e ? void 0 : e.state) || void 0 === r ? void 0 : r.decorations.underline
                                                },
                                                set: function(r) {
                                                    var n, i, o;
                                                    (null === (n = t._currentLink) || void 0 === n ? void 0 : n.state) && (null === (o = null === (i = t._currentLink) || void 0 === i ? void 0 : i.state) || void 0 === o ? void 0 : o.decorations.underline) !== r && (t._currentLink.state.decorations.underline = r, t._currentLink.state.isHovered && t._fireUnderlineEvent(e.link, r))
                                                }
                                            }
                                        }), this._renderService && this._linkCacheDisposables.push(this._renderService.onRenderedBufferChange((function(e) {
                                            var r = 0 === e.start ? 0 : e.start + 1 + t._bufferService.buffer.ydisp;
                                            t._clearCurrentLink(r, e.end + 1 + t._bufferService.buffer.ydisp)
                                        }))))
                                    }
                                }, t.prototype._linkHover = function(e, t, r) {
                                    var n;
                                    (null === (n = this._currentLink) || void 0 === n ? void 0 : n.state) && (this._currentLink.state.isHovered = !0, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t, !0), this._currentLink.state.decorations.pointerCursor && e.classList.add("xterm-cursor-pointer")), t.hover && t.hover(r, t.text)
                                }, t.prototype._fireUnderlineEvent = function(e, t) {
                                    var r = e.range,
                                        n = this._bufferService.buffer.ydisp,
                                        i = this._createLinkUnderlineEvent(r.start.x - 1, r.start.y - n - 1, r.end.x, r.end.y - n - 1, void 0);
                                    (t ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(i)
                                }, t.prototype._linkLeave = function(e, t, r) {
                                    var n;
                                    (null === (n = this._currentLink) || void 0 === n ? void 0 : n.state) && (this._currentLink.state.isHovered = !1, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t, !1), this._currentLink.state.decorations.pointerCursor && e.classList.remove("xterm-cursor-pointer")), t.leave && t.leave(r, t.text)
                                }, t.prototype._linkAtPosition = function(e, t) {
                                    var r = e.range.start.y === e.range.end.y,
                                        n = e.range.start.y < t.y,
                                        i = e.range.end.y > t.y;
                                    return (r && e.range.start.x <= t.x && e.range.end.x >= t.x || n && e.range.end.x >= t.x || i && e.range.start.x <= t.x || n && i) && e.range.start.y <= t.y && e.range.end.y >= t.y
                                }, t.prototype._positionFromMouseEvent = function(e, t, r) {
                                    var n = r.getCoords(e, t, this._bufferService.cols, this._bufferService.rows);
                                    if (n) return {
                                        x: n[0],
                                        y: n[1] + this._bufferService.buffer.ydisp
                                    }
                                }, t.prototype._createLinkUnderlineEvent = function(e, t, r, n, i) {
                                    return {
                                        x1: e,
                                        y1: t,
                                        x2: r,
                                        y2: n,
                                        cols: this._bufferService.cols,
                                        fg: i
                                    }
                                }, o([s(0, a.IBufferService)], t)
                            }(c.Disposable);
                        t.Linkifier2 = f
                    },
                    9042: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.tooMuchOutput = t.promptLabel = void 0, t.promptLabel = "Terminal input", t.tooMuchOutput = "Too much output to announce, navigate to rows manually to read"
                    },
                    6954: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                                return (n = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(e, t) {
                                        e.__proto__ = t
                                    } || function(e, t) {
                                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                    })(e, t)
                            }, function(e, t) {
                                function r() {
                                    this.constructor = e
                                }
                                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                            }),
                            o = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            s = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.MouseZoneManager = void 0;
                        var a = r(844),
                            l = r(3656),
                            c = r(4725),
                            u = r(2585),
                            f = function(e) {
                                function t(t, r, n, i, o, s) {
                                    var a = e.call(this) || this;
                                    return a._element = t, a._screenElement = r, a._bufferService = n, a._mouseService = i, a._selectionService = o, a._optionsService = s, a._zones = [], a._areZonesActive = !1, a._lastHoverCoords = [void 0, void 0], a._initialSelectionLength = 0, a.register(l.addDisposableDomListener(a._element, "mousedown", (function(e) {
                                        return a._onMouseDown(e)
                                    }))), a._mouseMoveListener = function(e) {
                                        return a._onMouseMove(e)
                                    }, a._mouseLeaveListener = function(e) {
                                        return a._onMouseLeave(e)
                                    }, a._clickListener = function(e) {
                                        return a._onClick(e)
                                    }, a
                                }
                                return i(t, e), t.prototype.dispose = function() {
                                    e.prototype.dispose.call(this), this._deactivate()
                                }, t.prototype.add = function(e) {
                                    this._zones.push(e), 1 === this._zones.length && this._activate()
                                }, t.prototype.clearAll = function(e, t) {
                                    if (0 !== this._zones.length) {
                                        e && t || (e = 0, t = this._bufferService.rows - 1);
                                        for (var r = 0; r < this._zones.length; r++) {
                                            var n = this._zones[r];
                                            (n.y1 > e && n.y1 <= t + 1 || n.y2 > e && n.y2 <= t + 1 || n.y1 < e && n.y2 > t + 1) && (this._currentZone && this._currentZone === n && (this._currentZone.leaveCallback(), this._currentZone = void 0), this._zones.splice(r--, 1))
                                        }
                                        0 === this._zones.length && this._deactivate()
                                    }
                                }, t.prototype._activate = function() {
                                    this._areZonesActive || (this._areZonesActive = !0, this._element.addEventListener("mousemove", this._mouseMoveListener), this._element.addEventListener("mouseleave", this._mouseLeaveListener), this._element.addEventListener("click", this._clickListener))
                                }, t.prototype._deactivate = function() {
                                    this._areZonesActive && (this._areZonesActive = !1, this._element.removeEventListener("mousemove", this._mouseMoveListener), this._element.removeEventListener("mouseleave", this._mouseLeaveListener), this._element.removeEventListener("click", this._clickListener))
                                }, t.prototype._onMouseMove = function(e) {
                                    this._lastHoverCoords[0] === e.pageX && this._lastHoverCoords[1] === e.pageY || (this._onHover(e), this._lastHoverCoords = [e.pageX, e.pageY])
                                }, t.prototype._onHover = function(e) {
                                    var t = this,
                                        r = this._findZoneEventAt(e);
                                    r !== this._currentZone && (this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout)), r && (this._currentZone = r, r.hoverCallback && r.hoverCallback(e), this._tooltipTimeout = window.setTimeout((function() {
                                        return t._onTooltip(e)
                                    }), this._optionsService.options.linkTooltipHoverDuration)))
                                }, t.prototype._onTooltip = function(e) {
                                    this._tooltipTimeout = void 0;
                                    var t = this._findZoneEventAt(e);
                                    t && t.tooltipCallback && t.tooltipCallback(e)
                                }, t.prototype._onMouseDown = function(e) {
                                    if (this._initialSelectionLength = this._getSelectionLength(), this._areZonesActive) {
                                        var t = this._findZoneEventAt(e);
                                        (null == t ? void 0 : t.willLinkActivate(e)) && (e.preventDefault(), e.stopImmediatePropagation())
                                    }
                                }, t.prototype._onMouseLeave = function(e) {
                                    this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout))
                                }, t.prototype._onClick = function(e) {
                                    var t = this._findZoneEventAt(e),
                                        r = this._getSelectionLength();
                                    t && r === this._initialSelectionLength && (t.clickCallback(e), e.preventDefault(), e.stopImmediatePropagation())
                                }, t.prototype._getSelectionLength = function() {
                                    var e = this._selectionService.selectionText;
                                    return e ? e.length : 0
                                }, t.prototype._findZoneEventAt = function(e) {
                                    var t = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows);
                                    if (t)
                                        for (var r = t[0], n = t[1], i = 0; i < this._zones.length; i++) {
                                            var o = this._zones[i];
                                            if (o.y1 === o.y2) {
                                                if (n === o.y1 && r >= o.x1 && r < o.x2) return o
                                            } else if (n === o.y1 && r >= o.x1 || n === o.y2 && r < o.x2 || n > o.y1 && n < o.y2) return o
                                        }
                                }, o([s(2, u.IBufferService), s(3, c.IMouseService), s(4, c.ISelectionService), s(5, u.IOptionsService)], t)
                            }(a.Disposable);
                        t.MouseZoneManager = f
                    },
                    6193: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.RenderDebouncer = void 0;
                        var r = function() {
                            function e(e) {
                                this._renderCallback = e
                            }
                            return e.prototype.dispose = function() {
                                this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
                            }, e.prototype.refresh = function(e, t, r) {
                                var n = this;
                                this._rowCount = r, e = void 0 !== e ? e : 0, t = void 0 !== t ? t : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e) : e, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t) : t, this._animationFrame || (this._animationFrame = window.requestAnimationFrame((function() {
                                    return n._innerRefresh()
                                })))
                            }, e.prototype._innerRefresh = function() {
                                if (void 0 !== this._rowStart && void 0 !== this._rowEnd && void 0 !== this._rowCount) {
                                    var e = Math.max(this._rowStart, 0),
                                        t = Math.min(this._rowEnd, this._rowCount - 1);
                                    this._rowStart = void 0, this._rowEnd = void 0, this._animationFrame = void 0, this._renderCallback(e, t)
                                }
                            }, e
                        }();
                        t.RenderDebouncer = r
                    },
                    5596: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.ScreenDprMonitor = void 0;
                        var o = function(e) {
                            function t() {
                                var t = null !== e && e.apply(this, arguments) || this;
                                return t._currentDevicePixelRatio = window.devicePixelRatio, t
                            }
                            return i(t, e), t.prototype.setListener = function(e) {
                                var t = this;
                                this._listener && this.clearListener(), this._listener = e, this._outerListener = function() {
                                    t._listener && (t._listener(window.devicePixelRatio, t._currentDevicePixelRatio), t._updateDpr())
                                }, this._updateDpr()
                            }, t.prototype.dispose = function() {
                                e.prototype.dispose.call(this), this.clearListener()
                            }, t.prototype._updateDpr = function() {
                                var e;
                                this._outerListener && (null === (e = this._resolutionMediaMatchList) || void 0 === e || e.removeListener(this._outerListener), this._currentDevicePixelRatio = window.devicePixelRatio, this._resolutionMediaMatchList = window.matchMedia("screen and (resolution: " + window.devicePixelRatio + "dppx)"), this._resolutionMediaMatchList.addListener(this._outerListener))
                            }, t.prototype.clearListener = function() {
                                this._resolutionMediaMatchList && this._listener && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._listener = void 0, this._outerListener = void 0)
                            }, t
                        }(r(844).Disposable);
                        t.ScreenDprMonitor = o
                    },
                    3236: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Terminal = void 0;
                        var o = r(2950),
                            s = r(1680),
                            a = r(3614),
                            l = r(2584),
                            c = r(5435),
                            u = r(3525),
                            f = r(3551),
                            h = r(9312),
                            d = r(6114),
                            p = r(3656),
                            _ = r(9042),
                            v = r(357),
                            m = r(6954),
                            g = r(4567),
                            y = r(1296),
                            b = r(7399),
                            S = r(8460),
                            C = r(8437),
                            w = r(5680),
                            E = r(3230),
                            x = r(4725),
                            k = r(428),
                            T = r(8934),
                            L = r(6465),
                            O = r(5114),
                            R = r(8969),
                            A = r(4774),
                            P = "undefined" != typeof window ? window.document : null,
                            M = function(e) {
                                function t(t) {
                                    void 0 === t && (t = {});
                                    var r = e.call(this, t) || this;
                                    return r.browser = d, r._keyDownHandled = !1, r._onCursorMove = new S.EventEmitter, r._onKey = new S.EventEmitter, r._onRender = new S.EventEmitter, r._onSelectionChange = new S.EventEmitter, r._onTitleChange = new S.EventEmitter, r._onFocus = new S.EventEmitter, r._onBlur = new S.EventEmitter, r._onA11yCharEmitter = new S.EventEmitter, r._onA11yTabEmitter = new S.EventEmitter, r._setup(), r.linkifier = r._instantiationService.createInstance(f.Linkifier), r.linkifier2 = r.register(r._instantiationService.createInstance(L.Linkifier2)), r.register(r._inputHandler.onRequestBell((function() {
                                        return r.bell()
                                    }))), r.register(r._inputHandler.onRequestRefreshRows((function(e, t) {
                                        return r.refresh(e, t)
                                    }))), r.register(r._inputHandler.onRequestReset((function() {
                                        return r.reset()
                                    }))), r.register(r._inputHandler.onRequestScroll((function(e, t) {
                                        return r.scroll(e, t || void 0)
                                    }))), r.register(r._inputHandler.onRequestWindowsOptionsReport((function(e) {
                                        return r._reportWindowsOptions(e)
                                    }))), r.register(r._inputHandler.onAnsiColorChange((function(e) {
                                        return r._changeAnsiColor(e)
                                    }))), r.register(S.forwardEvent(r._inputHandler.onCursorMove, r._onCursorMove)), r.register(S.forwardEvent(r._inputHandler.onTitleChange, r._onTitleChange)), r.register(S.forwardEvent(r._inputHandler.onA11yChar, r._onA11yCharEmitter)), r.register(S.forwardEvent(r._inputHandler.onA11yTab, r._onA11yTabEmitter)), r.register(r._bufferService.onResize((function(e) {
                                        return r._afterResize(e.cols, e.rows)
                                    }))), r
                                }
                                return i(t, e), Object.defineProperty(t.prototype, "options", {
                                    get: function() {
                                        return this.optionsService.options
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onCursorMove", {
                                    get: function() {
                                        return this._onCursorMove.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onKey", {
                                    get: function() {
                                        return this._onKey.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onRender", {
                                    get: function() {
                                        return this._onRender.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onSelectionChange", {
                                    get: function() {
                                        return this._onSelectionChange.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onTitleChange", {
                                    get: function() {
                                        return this._onTitleChange.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onFocus", {
                                    get: function() {
                                        return this._onFocus.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onBlur", {
                                    get: function() {
                                        return this._onBlur.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onA11yChar", {
                                    get: function() {
                                        return this._onA11yCharEmitter.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onA11yTab", {
                                    get: function() {
                                        return this._onA11yTabEmitter.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype._changeAnsiColor = function(e) {
                                    var t, r, n = this;
                                    this._colorManager && (e.colors.forEach((function(e) {
                                        var t = A.rgba.toColor(e.red, e.green, e.blue);
                                        n._colorManager.colors.ansi[e.colorIndex] = t
                                    })), null === (t = this._renderService) || void 0 === t || t.setColors(this._colorManager.colors), null === (r = this.viewport) || void 0 === r || r.onThemeChange(this._colorManager.colors))
                                }, t.prototype.dispose = function() {
                                    var t, r, n;
                                    this._isDisposed || (e.prototype.dispose.call(this), null === (t = this._renderService) || void 0 === t || t.dispose(), this._customKeyEventHandler = void 0, this.write = function() {}, null === (n = null === (r = this.element) || void 0 === r ? void 0 : r.parentNode) || void 0 === n || n.removeChild(this.element))
                                }, t.prototype._setup = function() {
                                    e.prototype._setup.call(this), this._customKeyEventHandler = void 0
                                }, Object.defineProperty(t.prototype, "buffer", {
                                    get: function() {
                                        return this.buffers.active
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.focus = function() {
                                    this.textarea && this.textarea.focus({
                                        preventScroll: !0
                                    })
                                }, t.prototype._updateOptions = function(t) {
                                    var r, n, i, o;
                                    switch (e.prototype._updateOptions.call(this, t), t) {
                                        case "fontFamily":
                                        case "fontSize":
                                            null === (r = this._renderService) || void 0 === r || r.clear(), null === (n = this._charSizeService) || void 0 === n || n.measure();
                                            break;
                                        case "cursorBlink":
                                        case "cursorStyle":
                                            this.refresh(this.buffer.y, this.buffer.y);
                                            break;
                                        case "drawBoldTextInBrightColors":
                                        case "letterSpacing":
                                        case "lineHeight":
                                        case "fontWeight":
                                        case "fontWeightBold":
                                        case "minimumContrastRatio":
                                            this._renderService && (this._renderService.clear(), this._renderService.onResize(this.cols, this.rows), this.refresh(0, this.rows - 1));
                                            break;
                                        case "rendererType":
                                            this._renderService && (this._renderService.setRenderer(this._createRenderer()), this._renderService.onResize(this.cols, this.rows));
                                            break;
                                        case "scrollback":
                                            null === (i = this.viewport) || void 0 === i || i.syncScrollArea();
                                            break;
                                        case "screenReaderMode":
                                            this.optionsService.options.screenReaderMode ? !this._accessibilityManager && this._renderService && (this._accessibilityManager = new g.AccessibilityManager(this, this._renderService)) : (null === (o = this._accessibilityManager) || void 0 === o || o.dispose(), this._accessibilityManager = void 0);
                                            break;
                                        case "tabStopWidth":
                                            this.buffers.setupTabStops();
                                            break;
                                        case "theme":
                                            this._setTheme(this.optionsService.options.theme)
                                    }
                                }, t.prototype._onTextAreaFocus = function(e) {
                                    this._coreService.decPrivateModes.sendFocus && this._coreService.triggerDataEvent(l.C0.ESC + "[I"), this.updateCursorStyle(e), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire()
                                }, t.prototype.blur = function() {
                                    var e;
                                    return null === (e = this.textarea) || void 0 === e ? void 0 : e.blur()
                                }, t.prototype._onTextAreaBlur = function() {
                                    this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this._coreService.decPrivateModes.sendFocus && this._coreService.triggerDataEvent(l.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire()
                                }, t.prototype._syncTextArea = function() {
                                    if (this.textarea && this.buffer.isCursorInViewport && !this._compositionHelper.isComposing) {
                                        var e = Math.ceil(this._charSizeService.height * this.optionsService.options.lineHeight),
                                            t = this._bufferService.buffer.y * e,
                                            r = this._bufferService.buffer.x * this._charSizeService.width;
                                        this.textarea.style.left = r + "px", this.textarea.style.top = t + "px", this.textarea.style.width = this._charSizeService.width + "px", this.textarea.style.height = e + "px", this.textarea.style.lineHeight = e + "px", this.textarea.style.zIndex = "-5"
                                    }
                                }, t.prototype._initGlobal = function() {
                                    var e = this;
                                    this._bindKeys(), this.register(p.addDisposableDomListener(this.element, "copy", (function(t) {
                                        e.hasSelection() && a.copyHandler(t, e._selectionService)
                                    })));
                                    var t = function(t) {
                                        return a.handlePasteEvent(t, e.textarea, e._coreService)
                                    };
                                    this.register(p.addDisposableDomListener(this.textarea, "paste", t)), this.register(p.addDisposableDomListener(this.element, "paste", t)), d.isFirefox ? this.register(p.addDisposableDomListener(this.element, "mousedown", (function(t) {
                                        2 === t.button && a.rightClickHandler(t, e.textarea, e.screenElement, e._selectionService, e.options.rightClickSelectsWord)
                                    }))) : this.register(p.addDisposableDomListener(this.element, "contextmenu", (function(t) {
                                        a.rightClickHandler(t, e.textarea, e.screenElement, e._selectionService, e.options.rightClickSelectsWord)
                                    }))), d.isLinux && this.register(p.addDisposableDomListener(this.element, "auxclick", (function(t) {
                                        1 === t.button && a.moveTextAreaUnderMouseCursor(t, e.textarea, e.screenElement)
                                    })))
                                }, t.prototype._bindKeys = function() {
                                    var e = this;
                                    this.register(p.addDisposableDomListener(this.textarea, "keyup", (function(t) {
                                        return e._keyUp(t)
                                    }), !0)), this.register(p.addDisposableDomListener(this.textarea, "keydown", (function(t) {
                                        return e._keyDown(t)
                                    }), !0)), this.register(p.addDisposableDomListener(this.textarea, "keypress", (function(t) {
                                        return e._keyPress(t)
                                    }), !0)), this.register(p.addDisposableDomListener(this.textarea, "compositionstart", (function() {
                                        return e._compositionHelper.compositionstart()
                                    }))), this.register(p.addDisposableDomListener(this.textarea, "compositionupdate", (function(t) {
                                        return e._compositionHelper.compositionupdate(t)
                                    }))), this.register(p.addDisposableDomListener(this.textarea, "compositionend", (function() {
                                        return e._compositionHelper.compositionend()
                                    }))), this.register(this.onRender((function() {
                                        return e._compositionHelper.updateCompositionElements()
                                    }))), this.register(this.onRender((function(t) {
                                        return e._queueLinkification(t.start, t.end)
                                    })))
                                }, t.prototype.open = function(e) {
                                    var t = this;
                                    if (!e) throw new Error("Terminal requires a parent element.");
                                    P.body.contains(e) || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this._document = e.ownerDocument, this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), this.element.setAttribute("tabindex", "0"), this.element.setAttribute("role", "document"), e.appendChild(this.element);
                                    var r = P.createDocumentFragment();
                                    this._viewportElement = P.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), r.appendChild(this._viewportElement), this._viewportScrollArea = P.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = P.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._helperContainer = P.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), r.appendChild(this.screenElement), this.textarea = P.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", _.promptLabel), this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this.register(p.addDisposableDomListener(this.textarea, "focus", (function(e) {
                                        return t._onTextAreaFocus(e)
                                    }))), this.register(p.addDisposableDomListener(this.textarea, "blur", (function() {
                                        return t._onTextAreaBlur()
                                    }))), this._helperContainer.appendChild(this.textarea);
                                    var n = this._instantiationService.createInstance(O.CoreBrowserService, this.textarea);
                                    this._instantiationService.setService(x.ICoreBrowserService, n), this._charSizeService = this._instantiationService.createInstance(k.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(x.ICharSizeService, this._charSizeService), this._compositionView = P.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(o.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this.element.appendChild(r), this._theme = this.options.theme || this._theme, this._colorManager = new w.ColorManager(P, this.options.allowTransparency), this.register(this.optionsService.onOptionChange((function(e) {
                                        return t._colorManager.onOptionsChange(e)
                                    }))), this._colorManager.setTheme(this._theme);
                                    var i = this._createRenderer();
                                    this._renderService = this.register(this._instantiationService.createInstance(E.RenderService, i, this.rows, this.screenElement)), this._instantiationService.setService(x.IRenderService, this._renderService), this.register(this._renderService.onRenderedBufferChange((function(e) {
                                        return t._onRender.fire(e)
                                    }))), this.onResize((function(e) {
                                        return t._renderService.resize(e.cols, e.rows)
                                    })), this._soundService = this._instantiationService.createInstance(v.SoundService), this._instantiationService.setService(x.ISoundService, this._soundService), this._mouseService = this._instantiationService.createInstance(T.MouseService), this._instantiationService.setService(x.IMouseService, this._mouseService), this.viewport = this._instantiationService.createInstance(s.Viewport, (function(e, r) {
                                        return t.scrollLines(e, r)
                                    }), this._viewportElement, this._viewportScrollArea), this.viewport.onThemeChange(this._colorManager.colors), this.register(this._inputHandler.onRequestSyncScrollBar((function() {
                                        return t.viewport.syncScrollArea()
                                    }))), this.register(this.viewport), this.register(this.onCursorMove((function() {
                                        t._renderService.onCursorMove(), t._syncTextArea()
                                    }))), this.register(this.onResize((function() {
                                        return t._renderService.onResize(t.cols, t.rows)
                                    }))), this.register(this.onBlur((function() {
                                        return t._renderService.onBlur()
                                    }))), this.register(this.onFocus((function() {
                                        return t._renderService.onFocus()
                                    }))), this.register(this._renderService.onDimensionsChange((function() {
                                        return t.viewport.syncScrollArea()
                                    }))), this._selectionService = this.register(this._instantiationService.createInstance(h.SelectionService, this.element, this.screenElement)), this._instantiationService.setService(x.ISelectionService, this._selectionService), this.register(this._selectionService.onRequestScrollLines((function(e) {
                                        return t.scrollLines(e.amount, e.suppressScrollEvent)
                                    }))), this.register(this._selectionService.onSelectionChange((function() {
                                        return t._onSelectionChange.fire()
                                    }))), this.register(this._selectionService.onRequestRedraw((function(e) {
                                        return t._renderService.onSelectionChanged(e.start, e.end, e.columnSelectMode)
                                    }))), this.register(this._selectionService.onLinuxMouseSelection((function(e) {
                                        t.textarea.value = e, t.textarea.focus(), t.textarea.select()
                                    }))), this.register(this.onScroll((function() {
                                        t.viewport.syncScrollArea(), t._selectionService.refresh()
                                    }))), this.register(p.addDisposableDomListener(this._viewportElement, "scroll", (function() {
                                        return t._selectionService.refresh()
                                    }))), this._mouseZoneManager = this._instantiationService.createInstance(m.MouseZoneManager, this.element, this.screenElement), this.register(this._mouseZoneManager), this.register(this.onScroll((function() {
                                        return t._mouseZoneManager.clearAll()
                                    }))), this.linkifier.attachToDom(this.element, this._mouseZoneManager), this.linkifier2.attachToDom(this.element, this._mouseService, this._renderService), this.register(p.addDisposableDomListener(this.element, "mousedown", (function(e) {
                                        return t._selectionService.onMouseDown(e)
                                    }))), this._coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager = new g.AccessibilityManager(this, this._renderService)), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse()
                                }, t.prototype._createRenderer = function() {
                                    switch (this.options.rendererType) {
                                        case "canvas":
                                            return this._instantiationService.createInstance(u.Renderer, this._colorManager.colors, this.screenElement, this.linkifier, this.linkifier2);
                                        case "dom":
                                            return this._instantiationService.createInstance(y.DomRenderer, this._colorManager.colors, this.element, this.screenElement, this._viewportElement, this.linkifier, this.linkifier2);
                                        default:
                                            throw new Error('Unrecognized rendererType "' + this.options.rendererType + '"')
                                    }
                                }, t.prototype._setTheme = function(e) {
                                    var t, r, n;
                                    this._theme = e, null === (t = this._colorManager) || void 0 === t || t.setTheme(e), null === (r = this._renderService) || void 0 === r || r.setColors(this._colorManager.colors), null === (n = this.viewport) || void 0 === n || n.onThemeChange(this._colorManager.colors)
                                }, t.prototype.bindMouse = function() {
                                    var e = this,
                                        t = this,
                                        r = this.element;

                                    function n(e) {
                                        var r, n, i = t._mouseService.getRawByteCoords(e, t.screenElement, t.cols, t.rows);
                                        if (!i) return !1;
                                        switch (e.overrideType || e.type) {
                                            case "mousemove":
                                                n = 32, void 0 === e.buttons ? (r = 3, void 0 !== e.button && (r = e.button < 3 ? e.button : 3)) : r = 1 & e.buttons ? 0 : 4 & e.buttons ? 1 : 2 & e.buttons ? 2 : 3;
                                                break;
                                            case "mouseup":
                                                n = 0, r = e.button < 3 ? e.button : 3;
                                                break;
                                            case "mousedown":
                                                n = 1, r = e.button < 3 ? e.button : 3;
                                                break;
                                            case "wheel":
                                                0 !== e.deltaY && (n = e.deltaY < 0 ? 0 : 1), r = 4;
                                                break;
                                            default:
                                                return !1
                                        }
                                        return !(void 0 === n || void 0 === r || r > 4) && t._coreMouseService.triggerMouseEvent({
                                            col: i.x - 33,
                                            row: i.y - 33,
                                            button: r,
                                            action: n,
                                            ctrl: e.ctrlKey,
                                            alt: e.altKey,
                                            shift: e.shiftKey
                                        })
                                    }
                                    var i = {
                                            mouseup: null,
                                            wheel: null,
                                            mousedrag: null,
                                            mousemove: null
                                        },
                                        o = function(t) {
                                            return n(t), t.buttons || (e._document.removeEventListener("mouseup", i.mouseup), i.mousedrag && e._document.removeEventListener("mousemove", i.mousedrag)), e.cancel(t)
                                        },
                                        s = function(t) {
                                            return n(t), t.preventDefault(), e.cancel(t)
                                        },
                                        a = function(e) {
                                            e.buttons && n(e)
                                        },
                                        c = function(e) {
                                            e.buttons || n(e)
                                        };
                                    this.register(this._coreMouseService.onProtocolChange((function(t) {
                                        t ? ("debug" === e.optionsService.options.logLevel && e._logService.debug("Binding to mouse events:", e._coreMouseService.explainEvents(t)), e.element.classList.add("enable-mouse-events"), e._selectionService.disable()) : (e._logService.debug("Unbinding from mouse events."), e.element.classList.remove("enable-mouse-events"), e._selectionService.enable()), 8 & t ? i.mousemove || (r.addEventListener("mousemove", c), i.mousemove = c) : (r.removeEventListener("mousemove", i.mousemove), i.mousemove = null), 16 & t ? i.wheel || (r.addEventListener("wheel", s, {
                                            passive: !1
                                        }), i.wheel = s) : (r.removeEventListener("wheel", i.wheel), i.wheel = null), 2 & t ? i.mouseup || (i.mouseup = o) : (e._document.removeEventListener("mouseup", i.mouseup), i.mouseup = null), 4 & t ? i.mousedrag || (i.mousedrag = a) : (e._document.removeEventListener("mousemove", i.mousedrag), i.mousedrag = null)
                                    }))), this._coreMouseService.activeProtocol = this._coreMouseService.activeProtocol, this.register(p.addDisposableDomListener(r, "mousedown", (function(t) {
                                        if (t.preventDefault(), e.focus(), e._coreMouseService.areMouseEventsActive && !e._selectionService.shouldForceSelection(t)) return n(t), i.mouseup && e._document.addEventListener("mouseup", i.mouseup), i.mousedrag && e._document.addEventListener("mousemove", i.mousedrag), e.cancel(t)
                                    }))), this.register(p.addDisposableDomListener(r, "wheel", (function(t) {
                                        if (i.wheel);
                                        else if (!e.buffer.hasScrollback) {
                                            var r = e.viewport.getLinesScrolled(t);
                                            if (0 === r) return;
                                            for (var n = l.C0.ESC + (e._coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (t.deltaY < 0 ? "A" : "B"), o = "", s = 0; s < Math.abs(r); s++) o += n;
                                            e._coreService.triggerDataEvent(o, !0)
                                        }
                                    }), {
                                        passive: !0
                                    })), this.register(p.addDisposableDomListener(r, "wheel", (function(t) {
                                        if (!i.wheel) return e.viewport.onWheel(t) ? void 0 : e.cancel(t)
                                    }), {
                                        passive: !1
                                    })), this.register(p.addDisposableDomListener(r, "touchstart", (function(t) {
                                        if (!e._coreMouseService.areMouseEventsActive) return e.viewport.onTouchStart(t), e.cancel(t)
                                    }), {
                                        passive: !0
                                    })), this.register(p.addDisposableDomListener(r, "touchmove", (function(t) {
                                        if (!e._coreMouseService.areMouseEventsActive) return e.viewport.onTouchMove(t) ? void 0 : e.cancel(t)
                                    }), {
                                        passive: !1
                                    }))
                                }, t.prototype.refresh = function(e, t) {
                                    var r;
                                    null === (r = this._renderService) || void 0 === r || r.refreshRows(e, t)
                                }, t.prototype._queueLinkification = function(e, t) {
                                    var r;
                                    null === (r = this.linkifier) || void 0 === r || r.linkifyRows(e, t)
                                }, t.prototype.updateCursorStyle = function(e) {
                                    this._selectionService && this._selectionService.shouldColumnSelect(e) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select")
                                }, t.prototype._showCursor = function() {
                                    this._coreService.isCursorInitialized || (this._coreService.isCursorInitialized = !0, this.refresh(this.buffer.y, this.buffer.y))
                                }, t.prototype.scrollLines = function(t, r) {
                                    e.prototype.scrollLines.call(this, t, r), this.refresh(0, this.rows - 1)
                                }, t.prototype.paste = function(e) {
                                    a.paste(e, this.textarea, this._coreService)
                                }, t.prototype.attachCustomKeyEventHandler = function(e) {
                                    this._customKeyEventHandler = e
                                }, t.prototype.registerLinkMatcher = function(e, t, r) {
                                    var n = this.linkifier.registerLinkMatcher(e, t, r);
                                    return this.refresh(0, this.rows - 1), n
                                }, t.prototype.deregisterLinkMatcher = function(e) {
                                    this.linkifier.deregisterLinkMatcher(e) && this.refresh(0, this.rows - 1)
                                }, t.prototype.registerLinkProvider = function(e) {
                                    return this.linkifier2.registerLinkProvider(e)
                                }, t.prototype.registerCharacterJoiner = function(e) {
                                    var t = this._renderService.registerCharacterJoiner(e);
                                    return this.refresh(0, this.rows - 1), t
                                }, t.prototype.deregisterCharacterJoiner = function(e) {
                                    this._renderService.deregisterCharacterJoiner(e) && this.refresh(0, this.rows - 1)
                                }, Object.defineProperty(t.prototype, "markers", {
                                    get: function() {
                                        return this.buffer.markers
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.addMarker = function(e) {
                                    if (this.buffer === this.buffers.normal) return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e)
                                }, t.prototype.hasSelection = function() {
                                    return !!this._selectionService && this._selectionService.hasSelection
                                }, t.prototype.select = function(e, t, r) {
                                    this._selectionService.setSelection(e, t, r)
                                }, t.prototype.getSelection = function() {
                                    return this._selectionService ? this._selectionService.selectionText : ""
                                }, t.prototype.getSelectionPosition = function() {
                                    if (this._selectionService && this._selectionService.hasSelection) return {
                                        startColumn: this._selectionService.selectionStart[0],
                                        startRow: this._selectionService.selectionStart[1],
                                        endColumn: this._selectionService.selectionEnd[0],
                                        endRow: this._selectionService.selectionEnd[1]
                                    }
                                }, t.prototype.clearSelection = function() {
                                    var e;
                                    null === (e = this._selectionService) || void 0 === e || e.clearSelection()
                                }, t.prototype.selectAll = function() {
                                    var e;
                                    null === (e = this._selectionService) || void 0 === e || e.selectAll()
                                }, t.prototype.selectLines = function(e, t) {
                                    var r;
                                    null === (r = this._selectionService) || void 0 === r || r.selectLines(e, t)
                                }, t.prototype._keyDown = function(e) {
                                    if (this._keyDownHandled = !1, this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
                                    if (!this._compositionHelper.keydown(e)) return this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), !1;
                                    var t = b.evaluateKeyboardEvent(e, this._coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
                                    if (this.updateCursorStyle(e), 3 === t.type || 2 === t.type) {
                                        var r = this.rows - 1;
                                        return this.scrollLines(2 === t.type ? -r : r), this.cancel(e, !0)
                                    }
                                    return 1 === t.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, e) || (t.cancel && this.cancel(e, !0), !t.key || (t.key !== l.C0.ETX && t.key !== l.C0.CR || (this.textarea.value = ""), this._onKey.fire({
                                        key: t.key,
                                        domEvent: e
                                    }), this._showCursor(), this._coreService.triggerDataEvent(t.key, !0), this.optionsService.options.screenReaderMode ? void(this._keyDownHandled = !0) : this.cancel(e, !0)))
                                }, t.prototype._isThirdLevelShift = function(e, t) {
                                    var r = e.isMac && !this.options.macOptionIsMeta && t.altKey && !t.ctrlKey && !t.metaKey || e.isWindows && t.altKey && t.ctrlKey && !t.metaKey;
                                    return "keypress" === t.type ? r : r && (!t.keyCode || t.keyCode > 47)
                                }, t.prototype._keyUp = function(e) {
                                    this._customKeyEventHandler && !1 === this._customKeyEventHandler(e) || (function(e) {
                                        return 16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode
                                    }(e) || this.focus(), this.updateCursorStyle(e))
                                }, t.prototype._keyPress = function(e) {
                                    var t;
                                    if (this._keyDownHandled) return !1;
                                    if (this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
                                    if (this.cancel(e), e.charCode) t = e.charCode;
                                    else if (null === e.which || void 0 === e.which) t = e.keyCode;
                                    else {
                                        if (0 === e.which || 0 === e.charCode) return !1;
                                        t = e.which
                                    }
                                    return !(!t || (e.altKey || e.ctrlKey || e.metaKey) && !this._isThirdLevelShift(this.browser, e) || (t = String.fromCharCode(t), this._onKey.fire({
                                        key: t,
                                        domEvent: e
                                    }), this._showCursor(), this._coreService.triggerDataEvent(t, !0), 0))
                                }, t.prototype.bell = function() {
                                    this._soundBell() && this._soundService.playBellSound()
                                }, t.prototype.resize = function(t, r) {
                                    t !== this.cols || r !== this.rows ? e.prototype.resize.call(this, t, r) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure()
                                }, t.prototype._afterResize = function(e, t) {
                                    var r, n;
                                    null === (r = this._charSizeService) || void 0 === r || r.measure(), null === (n = this.viewport) || void 0 === n || n.syncScrollArea(!0)
                                }, t.prototype.clear = function() {
                                    if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
                                        this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
                                        for (var e = 1; e < this.rows; e++) this.buffer.lines.push(this.buffer.getBlankLine(C.DEFAULT_ATTR_DATA));
                                        this.refresh(0, this.rows - 1), this._onScroll.fire(this.buffer.ydisp)
                                    }
                                }, t.prototype.reset = function() {
                                    var t, r;
                                    this.options.rows = this.rows, this.options.cols = this.cols;
                                    var n = this._customKeyEventHandler;
                                    this._setup(), e.prototype.reset.call(this), null === (t = this._selectionService) || void 0 === t || t.reset(), this._customKeyEventHandler = n, this.refresh(0, this.rows - 1), null === (r = this.viewport) || void 0 === r || r.syncScrollArea()
                                }, t.prototype._reportWindowsOptions = function(e) {
                                    if (this._renderService) switch (e) {
                                        case c.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
                                            var t = this._renderService.dimensions.scaledCanvasWidth.toFixed(0),
                                                r = this._renderService.dimensions.scaledCanvasHeight.toFixed(0);
                                            this._coreService.triggerDataEvent(l.C0.ESC + "[4;" + r + ";" + t + "t");
                                            break;
                                        case c.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
                                            var n = this._renderService.dimensions.scaledCellWidth.toFixed(0),
                                                i = this._renderService.dimensions.scaledCellHeight.toFixed(0);
                                            this._coreService.triggerDataEvent(l.C0.ESC + "[6;" + i + ";" + n + "t")
                                    }
                                }, t.prototype.cancel = function(e, t) {
                                    if (this.options.cancelEvents || t) return e.preventDefault(), e.stopPropagation(), !1
                                }, t.prototype._visualBell = function() {
                                    return !1
                                }, t.prototype._soundBell = function() {
                                    return "sound" === this.options.bellStyle
                                }, t
                            }(R.CoreTerminal);
                        t.Terminal = M
                    },
                    1680: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                                return (n = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(e, t) {
                                        e.__proto__ = t
                                    } || function(e, t) {
                                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                    })(e, t)
                            }, function(e, t) {
                                function r() {
                                    this.constructor = e
                                }
                                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                            }),
                            o = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            s = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Viewport = void 0;
                        var a = r(844),
                            l = r(3656),
                            c = r(4725),
                            u = r(2585),
                            f = function(e) {
                                function t(t, r, n, i, o, s, a) {
                                    var c = e.call(this) || this;
                                    return c._scrollLines = t, c._viewportElement = r, c._scrollArea = n, c._bufferService = i, c._optionsService = o, c._charSizeService = s, c._renderService = a, c.scrollBarWidth = 0, c._currentRowHeight = 0, c._lastRecordedBufferLength = 0, c._lastRecordedViewportHeight = 0, c._lastRecordedBufferHeight = 0, c._lastTouchY = 0, c._lastScrollTop = 0, c._wheelPartialScroll = 0, c._refreshAnimationFrame = null, c._ignoreNextScrollEvent = !1, c.scrollBarWidth = c._viewportElement.offsetWidth - c._scrollArea.offsetWidth || 15, c.register(l.addDisposableDomListener(c._viewportElement, "scroll", c._onScroll.bind(c))), setTimeout((function() {
                                        return c.syncScrollArea()
                                    }), 0), c
                                }
                                return i(t, e), t.prototype.onThemeChange = function(e) {
                                    this._viewportElement.style.backgroundColor = e.background.css
                                }, t.prototype._refresh = function(e) {
                                    var t = this;
                                    if (e) return this._innerRefresh(), void(null !== this._refreshAnimationFrame && cancelAnimationFrame(this._refreshAnimationFrame));
                                    null === this._refreshAnimationFrame && (this._refreshAnimationFrame = requestAnimationFrame((function() {
                                        return t._innerRefresh()
                                    })))
                                }, t.prototype._innerRefresh = function() {
                                    if (this._charSizeService.height > 0) {
                                        this._currentRowHeight = this._renderService.dimensions.scaledCellHeight / window.devicePixelRatio, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
                                        var e = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderService.dimensions.canvasHeight);
                                        this._lastRecordedBufferHeight !== e && (this._lastRecordedBufferHeight = e, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px")
                                    }
                                    var t = this._bufferService.buffer.ydisp * this._currentRowHeight;
                                    this._viewportElement.scrollTop !== t && (this._ignoreNextScrollEvent = !0, this._viewportElement.scrollTop = t), this._refreshAnimationFrame = null
                                }, t.prototype.syncScrollArea = function(e) {
                                    if (void 0 === e && (e = !1), this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length) return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(e);
                                    if (this._lastRecordedViewportHeight === this._renderService.dimensions.canvasHeight) {
                                        var t = this._bufferService.buffer.ydisp * this._currentRowHeight;
                                        this._lastScrollTop === t && this._lastScrollTop === this._viewportElement.scrollTop && this._renderService.dimensions.scaledCellHeight / window.devicePixelRatio === this._currentRowHeight || this._refresh(e)
                                    } else this._refresh(e)
                                }, t.prototype._onScroll = function(e) {
                                    if (this._lastScrollTop = this._viewportElement.scrollTop, this._viewportElement.offsetParent)
                                        if (this._ignoreNextScrollEvent) this._ignoreNextScrollEvent = !1;
                                        else {
                                            var t = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
                                            this._scrollLines(t, !0)
                                        }
                                }, t.prototype._bubbleScroll = function(e, t) {
                                    var r = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
                                    return !(t < 0 && 0 !== this._viewportElement.scrollTop || t > 0 && r < this._lastRecordedBufferHeight) || (e.cancelable && e.preventDefault(), !1)
                                }, t.prototype.onWheel = function(e) {
                                    var t = this._getPixelsScrolled(e);
                                    return 0 !== t && (this._viewportElement.scrollTop += t, this._bubbleScroll(e, t))
                                }, t.prototype._getPixelsScrolled = function(e) {
                                    if (0 === e.deltaY) return 0;
                                    var t = this._applyScrollModifier(e.deltaY, e);
                                    return e.deltaMode === WheelEvent.DOM_DELTA_LINE ? t *= this._currentRowHeight : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._currentRowHeight * this._bufferService.rows), t
                                }, t.prototype.getLinesScrolled = function(e) {
                                    if (0 === e.deltaY) return 0;
                                    var t = this._applyScrollModifier(e.deltaY, e);
                                    return e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t /= this._currentRowHeight + 0, this._wheelPartialScroll += t, t = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._bufferService.rows), t
                                }, t.prototype._applyScrollModifier = function(e, t) {
                                    var r = this._optionsService.options.fastScrollModifier;
                                    return "alt" === r && t.altKey || "ctrl" === r && t.ctrlKey || "shift" === r && t.shiftKey ? e * this._optionsService.options.fastScrollSensitivity * this._optionsService.options.scrollSensitivity : e * this._optionsService.options.scrollSensitivity
                                }, t.prototype.onTouchStart = function(e) {
                                    this._lastTouchY = e.touches[0].pageY
                                }, t.prototype.onTouchMove = function(e) {
                                    var t = this._lastTouchY - e.touches[0].pageY;
                                    return this._lastTouchY = e.touches[0].pageY, 0 !== t && (this._viewportElement.scrollTop += t, this._bubbleScroll(e, t))
                                }, o([s(3, u.IBufferService), s(4, u.IOptionsService), s(5, c.ICharSizeService), s(6, c.IRenderService)], t)
                            }(a.Disposable);
                        t.Viewport = f
                    },
                    2950: function(e, t, r) {
                        var n = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            i = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CompositionHelper = void 0;
                        var o = r(4725),
                            s = r(2585),
                            a = function() {
                                function e(e, t, r, n, i, o) {
                                    this._textarea = e, this._compositionView = t, this._bufferService = r, this._optionsService = n, this._charSizeService = i, this._coreService = o, this._isComposing = !1, this._isSendingComposition = !1, this._compositionPosition = {
                                        start: 0,
                                        end: 0
                                    }, this._dataAlreadySent = ""
                                }
                                return Object.defineProperty(e.prototype, "isComposing", {
                                    get: function() {
                                        return this._isComposing
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.compositionstart = function() {
                                    this._isComposing = !0, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active")
                                }, e.prototype.compositionupdate = function(e) {
                                    var t = this;
                                    this._compositionView.textContent = e.data, this.updateCompositionElements(), setTimeout((function() {
                                        t._compositionPosition.end = t._textarea.value.length
                                    }), 0)
                                }, e.prototype.compositionend = function() {
                                    this._finalizeComposition(!0)
                                }, e.prototype.keydown = function(e) {
                                    if (this._isComposing || this._isSendingComposition) {
                                        if (229 === e.keyCode) return !1;
                                        if (16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode) return !1;
                                        this._finalizeComposition(!1)
                                    }
                                    return 229 !== e.keyCode || (this._handleAnyTextareaChanges(), !1)
                                }, e.prototype._finalizeComposition = function(e) {
                                    var t = this;
                                    if (this._compositionView.classList.remove("active"), this._isComposing = !1, e) {
                                        var r = {
                                            start: this._compositionPosition.start,
                                            end: this._compositionPosition.end
                                        };
                                        this._isSendingComposition = !0, setTimeout((function() {
                                            var e;
                                            t._isSendingComposition && (t._isSendingComposition = !1, r.start += t._dataAlreadySent.length, (e = t._isComposing ? t._textarea.value.substring(r.start, r.end) : t._textarea.value.substring(r.start)).length > 0 && t._coreService.triggerDataEvent(e, !0))
                                        }), 0)
                                    } else {
                                        this._isSendingComposition = !1;
                                        var n = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
                                        this._coreService.triggerDataEvent(n, !0)
                                    }
                                }, e.prototype._handleAnyTextareaChanges = function() {
                                    var e = this,
                                        t = this._textarea.value;
                                    setTimeout((function() {
                                        if (!e._isComposing) {
                                            var r = e._textarea.value.replace(t, "");
                                            r.length > 0 && (e._dataAlreadySent = r, e._coreService.triggerDataEvent(r, !0))
                                        }
                                    }), 0)
                                }, e.prototype.updateCompositionElements = function(e) {
                                    var t = this;
                                    if (this._isComposing) {
                                        if (this._bufferService.buffer.isCursorInViewport) {
                                            var r = Math.ceil(this._charSizeService.height * this._optionsService.options.lineHeight),
                                                n = this._bufferService.buffer.y * r,
                                                i = this._bufferService.buffer.x * this._charSizeService.width;
                                            this._compositionView.style.left = i + "px", this._compositionView.style.top = n + "px", this._compositionView.style.height = r + "px", this._compositionView.style.lineHeight = r + "px", this._compositionView.style.fontFamily = this._optionsService.options.fontFamily, this._compositionView.style.fontSize = this._optionsService.options.fontSize + "px";
                                            var o = this._compositionView.getBoundingClientRect();
                                            this._textarea.style.left = i + "px", this._textarea.style.top = n + "px", this._textarea.style.width = o.width + "px", this._textarea.style.height = o.height + "px", this._textarea.style.lineHeight = o.height + "px"
                                        }
                                        e || setTimeout((function() {
                                            return t.updateCompositionElements(!0)
                                        }), 0)
                                    }
                                }, n([i(2, s.IBufferService), i(3, s.IOptionsService), i(4, o.ICharSizeService), i(5, s.ICoreService)], e)
                            }();
                        t.CompositionHelper = a
                    },
                    9806: (e, t) => {
                        function r(e, t) {
                            var r = t.getBoundingClientRect();
                            return [e.clientX - r.left, e.clientY - r.top]
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.getRawByteCoords = t.getCoords = t.getCoordsRelativeToElement = void 0, t.getCoordsRelativeToElement = r, t.getCoords = function(e, t, n, i, o, s, a, l) {
                            if (o) {
                                var c = r(e, t);
                                if (c) return c[0] = Math.ceil((c[0] + (l ? s / 2 : 0)) / s), c[1] = Math.ceil(c[1] / a), c[0] = Math.min(Math.max(c[0], 1), n + (l ? 1 : 0)), c[1] = Math.min(Math.max(c[1], 1), i), c
                            }
                        }, t.getRawByteCoords = function(e) {
                            if (e) return {
                                x: e[0] + 32,
                                y: e[1] + 32
                            }
                        }
                    },
                    9504: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.moveToCellSequence = void 0;
                        var n = r(2584);

                        function i(e, t, r, n) {
                            var i = e - o(r, e),
                                a = t - o(r, t);
                            return c(Math.abs(i - a) - function(e, t, r) {
                                for (var n = 0, i = e - o(r, e), a = t - o(r, t), l = 0; l < Math.abs(i - a); l++) {
                                    var c = "A" === s(e, t) ? -1 : 1,
                                        u = r.buffer.lines.get(i + c * l);
                                    u && u.isWrapped && n++
                                }
                                return n
                            }(e, t, r), l(s(e, t), n))
                        }

                        function o(e, t) {
                            for (var r = 0, n = e.buffer.lines.get(t), i = n && n.isWrapped; i && t >= 0 && t < e.rows;) r++, i = (n = e.buffer.lines.get(--t)) && n.isWrapped;
                            return r
                        }

                        function s(e, t) {
                            return e > t ? "A" : "B"
                        }

                        function a(e, t, r, n, i, o) {
                            for (var s = e, a = t, l = ""; s !== r || a !== n;) s += i ? 1 : -1, i && s > o.cols - 1 ? (l += o.buffer.translateBufferLineToString(a, !1, e, s), s = 0, e = 0, a++) : !i && s < 0 && (l += o.buffer.translateBufferLineToString(a, !1, 0, e + 1), e = s = o.cols - 1, a--);
                            return l + o.buffer.translateBufferLineToString(a, !1, e, s)
                        }

                        function l(e, t) {
                            var r = t ? "O" : "[";
                            return n.C0.ESC + r + e
                        }

                        function c(e, t) {
                            e = Math.floor(e);
                            for (var r = "", n = 0; n < e; n++) r += t;
                            return r
                        }
                        t.moveToCellSequence = function(e, t, r, n) {
                            var s, u = r.buffer.x,
                                f = r.buffer.y;
                            if (!r.buffer.hasScrollback) return function(e, t, r, n, s, u) {
                                return 0 === i(t, n, s, u).length ? "" : c(a(e, t, e, t - o(s, t), !1, s).length, l("D", u))
                            }(u, f, 0, t, r, n) + i(f, t, r, n) + function(e, t, r, n, s, u) {
                                var f;
                                f = i(t, n, s, u).length > 0 ? n - o(s, n) : t;
                                var h = n,
                                    d = function(e, t, r, n, s, a) {
                                        var l;
                                        return l = i(r, n, s, a).length > 0 ? n - o(s, n) : t, e < r && l <= n || e >= r && l < n ? "C" : "D"
                                    }(e, t, r, n, s, u);
                                return c(a(e, f, r, h, "C" === d, s).length, l(d, u))
                            }(u, f, e, t, r, n);
                            if (f === t) return s = u > e ? "D" : "C", c(Math.abs(u - e), l(s, n));
                            s = f > t ? "D" : "C";
                            var h = Math.abs(f - t);
                            return c(function(e, t) {
                                return t.cols - e
                            }(f > t ? e : u, r) + (h - 1) * r.cols + 1 + ((f > t ? u : e) - 1), l(s, n))
                        }
                    },
                    244: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.AddonManager = void 0;
                        var r = function() {
                            function e() {
                                this._addons = []
                            }
                            return e.prototype.dispose = function() {
                                for (var e = this._addons.length - 1; e >= 0; e--) this._addons[e].instance.dispose()
                            }, e.prototype.loadAddon = function(e, t) {
                                var r = this,
                                    n = {
                                        instance: t,
                                        dispose: t.dispose,
                                        isDisposed: !1
                                    };
                                this._addons.push(n), t.dispose = function() {
                                    return r._wrappedAddonDispose(n)
                                }, t.activate(e)
                            }, e.prototype._wrappedAddonDispose = function(e) {
                                if (!e.isDisposed) {
                                    for (var t = -1, r = 0; r < this._addons.length; r++)
                                        if (this._addons[r] === e) {
                                            t = r;
                                            break
                                        } if (-1 === t) throw new Error("Could not dispose an addon that has not been loaded");
                                    e.isDisposed = !0, e.dispose.apply(e.instance), this._addons.splice(t, 1)
                                }
                            }, e
                        }();
                        t.AddonManager = r
                    },
                    4389: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Terminal = void 0;
                        var n = r(511),
                            i = r(3236),
                            o = r(9042),
                            s = r(8460),
                            a = r(244),
                            l = function() {
                                function e(e) {
                                    this._core = new i.Terminal(e), this._addonManager = new a.AddonManager
                                }
                                return e.prototype._checkProposedApi = function() {
                                    if (!this._core.optionsService.options.allowProposedApi) throw new Error("You must set the allowProposedApi option to true to use proposed API")
                                }, Object.defineProperty(e.prototype, "onCursorMove", {
                                    get: function() {
                                        return this._core.onCursorMove
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onLineFeed", {
                                    get: function() {
                                        return this._core.onLineFeed
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onSelectionChange", {
                                    get: function() {
                                        return this._core.onSelectionChange
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onData", {
                                    get: function() {
                                        return this._core.onData
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onBinary", {
                                    get: function() {
                                        return this._core.onBinary
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onTitleChange", {
                                    get: function() {
                                        return this._core.onTitleChange
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onScroll", {
                                    get: function() {
                                        return this._core.onScroll
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onKey", {
                                    get: function() {
                                        return this._core.onKey
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onRender", {
                                    get: function() {
                                        return this._core.onRender
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onResize", {
                                    get: function() {
                                        return this._core.onResize
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "element", {
                                    get: function() {
                                        return this._core.element
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "parser", {
                                    get: function() {
                                        return this._checkProposedApi(), this._parser || (this._parser = new h(this._core)), this._parser
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "unicode", {
                                    get: function() {
                                        return this._checkProposedApi(), new d(this._core)
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "textarea", {
                                    get: function() {
                                        return this._core.textarea
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "rows", {
                                    get: function() {
                                        return this._core.rows
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "cols", {
                                    get: function() {
                                        return this._core.cols
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "buffer", {
                                    get: function() {
                                        return this._checkProposedApi(), this._buffer || (this._buffer = new u(this._core)), this._buffer
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "markers", {
                                    get: function() {
                                        return this._checkProposedApi(), this._core.markers
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.blur = function() {
                                    this._core.blur()
                                }, e.prototype.focus = function() {
                                    this._core.focus()
                                }, e.prototype.resize = function(e, t) {
                                    this._verifyIntegers(e, t), this._core.resize(e, t)
                                }, e.prototype.open = function(e) {
                                    this._core.open(e)
                                }, e.prototype.attachCustomKeyEventHandler = function(e) {
                                    this._core.attachCustomKeyEventHandler(e)
                                }, e.prototype.registerLinkMatcher = function(e, t, r) {
                                    return this._checkProposedApi(), this._core.registerLinkMatcher(e, t, r)
                                }, e.prototype.deregisterLinkMatcher = function(e) {
                                    this._checkProposedApi(), this._core.deregisterLinkMatcher(e)
                                }, e.prototype.registerLinkProvider = function(e) {
                                    return this._checkProposedApi(), this._core.registerLinkProvider(e)
                                }, e.prototype.registerCharacterJoiner = function(e) {
                                    return this._checkProposedApi(), this._core.registerCharacterJoiner(e)
                                }, e.prototype.deregisterCharacterJoiner = function(e) {
                                    this._checkProposedApi(), this._core.deregisterCharacterJoiner(e)
                                }, e.prototype.registerMarker = function(e) {
                                    return this._checkProposedApi(), this._verifyIntegers(e), this._core.addMarker(e)
                                }, e.prototype.addMarker = function(e) {
                                    return this.registerMarker(e)
                                }, e.prototype.hasSelection = function() {
                                    return this._core.hasSelection()
                                }, e.prototype.select = function(e, t, r) {
                                    this._verifyIntegers(e, t, r), this._core.select(e, t, r)
                                }, e.prototype.getSelection = function() {
                                    return this._core.getSelection()
                                }, e.prototype.getSelectionPosition = function() {
                                    return this._core.getSelectionPosition()
                                }, e.prototype.clearSelection = function() {
                                    this._core.clearSelection()
                                }, e.prototype.selectAll = function() {
                                    this._core.selectAll()
                                }, e.prototype.selectLines = function(e, t) {
                                    this._verifyIntegers(e, t), this._core.selectLines(e, t)
                                }, e.prototype.dispose = function() {
                                    this._addonManager.dispose(), this._core.dispose()
                                }, e.prototype.scrollLines = function(e) {
                                    this._verifyIntegers(e), this._core.scrollLines(e)
                                }, e.prototype.scrollPages = function(e) {
                                    this._verifyIntegers(e), this._core.scrollPages(e)
                                }, e.prototype.scrollToTop = function() {
                                    this._core.scrollToTop()
                                }, e.prototype.scrollToBottom = function() {
                                    this._core.scrollToBottom()
                                }, e.prototype.scrollToLine = function(e) {
                                    this._verifyIntegers(e), this._core.scrollToLine(e)
                                }, e.prototype.clear = function() {
                                    this._core.clear()
                                }, e.prototype.write = function(e, t) {
                                    this._core.write(e, t)
                                }, e.prototype.writeUtf8 = function(e, t) {
                                    this._core.write(e, t)
                                }, e.prototype.writeln = function(e, t) {
                                    this._core.write(e), this._core.write("\r\n", t)
                                }, e.prototype.paste = function(e) {
                                    this._core.paste(e)
                                }, e.prototype.getOption = function(e) {
                                    return this._core.optionsService.getOption(e)
                                }, e.prototype.setOption = function(e, t) {
                                    this._core.optionsService.setOption(e, t)
                                }, e.prototype.refresh = function(e, t) {
                                    this._verifyIntegers(e, t), this._core.refresh(e, t)
                                }, e.prototype.reset = function() {
                                    this._core.reset()
                                }, e.prototype.loadAddon = function(e) {
                                    return this._addonManager.loadAddon(this, e)
                                }, Object.defineProperty(e, "strings", {
                                    get: function() {
                                        return o
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype._verifyIntegers = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    for (var r = 0, n = e; r < n.length; r++) {
                                        var i = n[r];
                                        if (i === 1 / 0 || isNaN(i) || i % 1 != 0) throw new Error("This API only accepts integers")
                                    }
                                }, e
                            }();
                        t.Terminal = l;
                        var c = function() {
                                function e(e, t) {
                                    this._buffer = e, this.type = t
                                }
                                return e.prototype.init = function(e) {
                                    return this._buffer = e, this
                                }, Object.defineProperty(e.prototype, "cursorY", {
                                    get: function() {
                                        return this._buffer.y
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "cursorX", {
                                    get: function() {
                                        return this._buffer.x
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "viewportY", {
                                    get: function() {
                                        return this._buffer.ydisp
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "baseY", {
                                    get: function() {
                                        return this._buffer.ybase
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "length", {
                                    get: function() {
                                        return this._buffer.lines.length
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.getLine = function(e) {
                                    var t = this._buffer.lines.get(e);
                                    if (t) return new f(t)
                                }, e.prototype.getNullCell = function() {
                                    return new n.CellData
                                }, e
                            }(),
                            u = function() {
                                function e(e) {
                                    var t = this;
                                    this._core = e, this._onBufferChange = new s.EventEmitter, this._normal = new c(this._core.buffers.normal, "normal"), this._alternate = new c(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate((function() {
                                        return t._onBufferChange.fire(t.active)
                                    }))
                                }
                                return Object.defineProperty(e.prototype, "onBufferChange", {
                                    get: function() {
                                        return this._onBufferChange.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "active", {
                                    get: function() {
                                        if (this._core.buffers.active === this._core.buffers.normal) return this.normal;
                                        if (this._core.buffers.active === this._core.buffers.alt) return this.alternate;
                                        throw new Error("Active buffer is neither normal nor alternate")
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "normal", {
                                    get: function() {
                                        return this._normal.init(this._core.buffers.normal)
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "alternate", {
                                    get: function() {
                                        return this._alternate.init(this._core.buffers.alt)
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e
                            }(),
                            f = function() {
                                function e(e) {
                                    this._line = e
                                }
                                return Object.defineProperty(e.prototype, "isWrapped", {
                                    get: function() {
                                        return this._line.isWrapped
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "length", {
                                    get: function() {
                                        return this._line.length
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.getCell = function(e, t) {
                                    if (!(e < 0 || e >= this._line.length)) return t ? (this._line.loadCell(e, t), t) : this._line.loadCell(e, new n.CellData)
                                }, e.prototype.translateToString = function(e, t, r) {
                                    return this._line.translateToString(e, t, r)
                                }, e
                            }(),
                            h = function() {
                                function e(e) {
                                    this._core = e
                                }
                                return e.prototype.registerCsiHandler = function(e, t) {
                                    return this._core.addCsiHandler(e, (function(e) {
                                        return t(e.toArray())
                                    }))
                                }, e.prototype.addCsiHandler = function(e, t) {
                                    return this.registerCsiHandler(e, t)
                                }, e.prototype.registerDcsHandler = function(e, t) {
                                    return this._core.addDcsHandler(e, (function(e, r) {
                                        return t(e, r.toArray())
                                    }))
                                }, e.prototype.addDcsHandler = function(e, t) {
                                    return this.registerDcsHandler(e, t)
                                }, e.prototype.registerEscHandler = function(e, t) {
                                    return this._core.addEscHandler(e, t)
                                }, e.prototype.addEscHandler = function(e, t) {
                                    return this.registerEscHandler(e, t)
                                }, e.prototype.registerOscHandler = function(e, t) {
                                    return this._core.addOscHandler(e, t)
                                }, e.prototype.addOscHandler = function(e, t) {
                                    return this.registerOscHandler(e, t)
                                }, e
                            }(),
                            d = function() {
                                function e(e) {
                                    this._core = e
                                }
                                return e.prototype.register = function(e) {
                                    this._core.unicodeService.register(e)
                                }, Object.defineProperty(e.prototype, "versions", {
                                    get: function() {
                                        return this._core.unicodeService.versions
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "activeVersion", {
                                    get: function() {
                                        return this._core.unicodeService.activeVersion
                                    },
                                    set: function(e) {
                                        this._core.unicodeService.activeVersion = e
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e
                            }()
                    },
                    1546: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.BaseRenderLayer = void 0;
                        var n = r(643),
                            i = r(8803),
                            o = r(1420),
                            s = r(3734),
                            a = r(1752),
                            l = r(4774),
                            c = r(9631),
                            u = function() {
                                function e(e, t, r, n, i, o, s, a) {
                                    this._container = e, this._alpha = n, this._colors = i, this._rendererId = o, this._bufferService = s, this._optionsService = a, this._scaledCharWidth = 0, this._scaledCharHeight = 0, this._scaledCellWidth = 0, this._scaledCellHeight = 0, this._scaledCharLeft = 0, this._scaledCharTop = 0, this._currentGlyphIdentifier = {
                                        chars: "",
                                        code: 0,
                                        bg: 0,
                                        fg: 0,
                                        bold: !1,
                                        dim: !1,
                                        italic: !1
                                    }, this._canvas = document.createElement("canvas"), this._canvas.classList.add("xterm-" + t + "-layer"), this._canvas.style.zIndex = r.toString(), this._initCanvas(), this._container.appendChild(this._canvas)
                                }
                                return e.prototype.dispose = function() {
                                    var e;
                                    c.removeElementFromParent(this._canvas), null === (e = this._charAtlas) || void 0 === e || e.dispose()
                                }, e.prototype._initCanvas = function() {
                                    this._ctx = a.throwIfFalsy(this._canvas.getContext("2d", {
                                        alpha: this._alpha
                                    })), this._alpha || this._clearAll()
                                }, e.prototype.onOptionsChanged = function() {}, e.prototype.onBlur = function() {}, e.prototype.onFocus = function() {}, e.prototype.onCursorMove = function() {}, e.prototype.onGridChanged = function(e, t) {}, e.prototype.onSelectionChanged = function(e, t, r) {
                                    void 0 === r && (r = !1)
                                }, e.prototype.setColors = function(e) {
                                    this._refreshCharAtlas(e)
                                }, e.prototype._setTransparency = function(e) {
                                    if (e !== this._alpha) {
                                        var t = this._canvas;
                                        this._alpha = e, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, t), this._refreshCharAtlas(this._colors), this.onGridChanged(0, this._bufferService.rows - 1)
                                    }
                                }, e.prototype._refreshCharAtlas = function(e) {
                                    this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0 || (this._charAtlas = o.acquireCharAtlas(this._optionsService.options, this._rendererId, e, this._scaledCharWidth, this._scaledCharHeight), this._charAtlas.warmUp())
                                }, e.prototype.resize = function(e) {
                                    this._scaledCellWidth = e.scaledCellWidth, this._scaledCellHeight = e.scaledCellHeight, this._scaledCharWidth = e.scaledCharWidth, this._scaledCharHeight = e.scaledCharHeight, this._scaledCharLeft = e.scaledCharLeft, this._scaledCharTop = e.scaledCharTop, this._canvas.width = e.scaledCanvasWidth, this._canvas.height = e.scaledCanvasHeight, this._canvas.style.width = e.canvasWidth + "px", this._canvas.style.height = e.canvasHeight + "px", this._alpha || this._clearAll(), this._refreshCharAtlas(this._colors)
                                }, e.prototype._fillCells = function(e, t, r, n) {
                                    this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, n * this._scaledCellHeight)
                                }, e.prototype._fillBottomLineAtCells = function(e, t, r) {
                                    void 0 === r && (r = 1), this._ctx.fillRect(e * this._scaledCellWidth, (t + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, r * this._scaledCellWidth, window.devicePixelRatio)
                                }, e.prototype._fillLeftLineAtCell = function(e, t, r) {
                                    this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, window.devicePixelRatio * r, this._scaledCellHeight)
                                }, e.prototype._strokeRectAtCell = function(e, t, r, n) {
                                    this._ctx.lineWidth = window.devicePixelRatio, this._ctx.strokeRect(e * this._scaledCellWidth + window.devicePixelRatio / 2, t * this._scaledCellHeight + window.devicePixelRatio / 2, r * this._scaledCellWidth - window.devicePixelRatio, n * this._scaledCellHeight - window.devicePixelRatio)
                                }, e.prototype._clearAll = function() {
                                    this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height))
                                }, e.prototype._clearCells = function(e, t, r, n) {
                                    this._alpha ? this._ctx.clearRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, n * this._scaledCellHeight) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, n * this._scaledCellHeight))
                                }, e.prototype._fillCharTrueColor = function(e, t, r) {
                                    this._ctx.font = this._getFont(!1, !1), this._ctx.textBaseline = "middle", this._clipRow(r), this._ctx.fillText(e.getChars(), t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2)
                                }, e.prototype._drawChars = function(e, t, r) {
                                    var o, s, a = this._getContrastColor(e);
                                    a || e.isFgRGB() || e.isBgRGB() ? this._drawUncachedChars(e, t, r, a) : (e.isInverse() ? (o = e.isBgDefault() ? i.INVERTED_DEFAULT_COLOR : e.getBgColor(), s = e.isFgDefault() ? i.INVERTED_DEFAULT_COLOR : e.getFgColor()) : (s = e.isBgDefault() ? n.DEFAULT_COLOR : e.getBgColor(), o = e.isFgDefault() ? n.DEFAULT_COLOR : e.getFgColor()), o += this._optionsService.options.drawBoldTextInBrightColors && e.isBold() && o < 8 ? 8 : 0, this._currentGlyphIdentifier.chars = e.getChars() || n.WHITESPACE_CELL_CHAR, this._currentGlyphIdentifier.code = e.getCode() || n.WHITESPACE_CELL_CODE, this._currentGlyphIdentifier.bg = s, this._currentGlyphIdentifier.fg = o, this._currentGlyphIdentifier.bold = !!e.isBold(), this._currentGlyphIdentifier.dim = !!e.isDim(), this._currentGlyphIdentifier.italic = !!e.isItalic(), this._charAtlas && this._charAtlas.draw(this._ctx, this._currentGlyphIdentifier, t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop) || this._drawUncachedChars(e, t, r))
                                }, e.prototype._drawUncachedChars = function(e, t, r, n) {
                                    if (this._ctx.save(), this._ctx.font = this._getFont(!!e.isBold(), !!e.isItalic()), this._ctx.textBaseline = "middle", e.isInverse())
                                        if (n) this._ctx.fillStyle = n.css;
                                        else if (e.isBgDefault()) this._ctx.fillStyle = l.color.opaque(this._colors.background).css;
                                    else if (e.isBgRGB()) this._ctx.fillStyle = "rgb(" + s.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")";
                                    else {
                                        var o = e.getBgColor();
                                        this._optionsService.options.drawBoldTextInBrightColors && e.isBold() && o < 8 && (o += 8), this._ctx.fillStyle = this._colors.ansi[o].css
                                    } else if (n) this._ctx.fillStyle = n.css;
                                    else if (e.isFgDefault()) this._ctx.fillStyle = this._colors.foreground.css;
                                    else if (e.isFgRGB()) this._ctx.fillStyle = "rgb(" + s.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")";
                                    else {
                                        var a = e.getFgColor();
                                        this._optionsService.options.drawBoldTextInBrightColors && e.isBold() && a < 8 && (a += 8), this._ctx.fillStyle = this._colors.ansi[a].css
                                    }
                                    this._clipRow(r), e.isDim() && (this._ctx.globalAlpha = i.DIM_OPACITY), this._ctx.fillText(e.getChars(), t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2), this._ctx.restore()
                                }, e.prototype._clipRow = function(e) {
                                    this._ctx.beginPath(), this._ctx.rect(0, e * this._scaledCellHeight, this._bufferService.cols * this._scaledCellWidth, this._scaledCellHeight), this._ctx.clip()
                                }, e.prototype._getFont = function(e, t) {
                                    return (t ? "italic" : "") + " " + (e ? this._optionsService.options.fontWeightBold : this._optionsService.options.fontWeight) + " " + this._optionsService.options.fontSize * window.devicePixelRatio + "px " + this._optionsService.options.fontFamily
                                }, e.prototype._getContrastColor = function(e) {
                                    if (1 !== this._optionsService.options.minimumContrastRatio) {
                                        var t = this._colors.contrastCache.getColor(e.bg, e.fg);
                                        if (void 0 !== t) return t || void 0;
                                        var r = e.getFgColor(),
                                            n = e.getFgColorMode(),
                                            i = e.getBgColor(),
                                            o = e.getBgColorMode(),
                                            s = !!e.isInverse(),
                                            a = !!e.isInverse();
                                        if (s) {
                                            var c = r;
                                            r = i, i = c;
                                            var u = n;
                                            n = o, o = u
                                        }
                                        var f = this._resolveBackgroundRgba(o, i, s),
                                            h = this._resolveForegroundRgba(n, r, s, a),
                                            d = l.rgba.ensureContrastRatio(f, h, this._optionsService.options.minimumContrastRatio);
                                        if (d) {
                                            var p = {
                                                css: l.channels.toCss(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255),
                                                rgba: d
                                            };
                                            return this._colors.contrastCache.setColor(e.bg, e.fg, p), p
                                        }
                                        this._colors.contrastCache.setColor(e.bg, e.fg, null)
                                    }
                                }, e.prototype._resolveBackgroundRgba = function(e, t, r) {
                                    switch (e) {
                                        case 16777216:
                                        case 33554432:
                                            return this._colors.ansi[t].rgba;
                                        case 50331648:
                                            return t << 8;
                                        case 0:
                                        default:
                                            return r ? this._colors.foreground.rgba : this._colors.background.rgba
                                    }
                                }, e.prototype._resolveForegroundRgba = function(e, t, r, n) {
                                    switch (e) {
                                        case 16777216:
                                        case 33554432:
                                            return this._optionsService.options.drawBoldTextInBrightColors && n && t < 8 && (t += 8), this._colors.ansi[t].rgba;
                                        case 50331648:
                                            return t << 8;
                                        case 0:
                                        default:
                                            return r ? this._colors.background.rgba : this._colors.foreground.rgba
                                    }
                                }, e
                            }();
                        t.BaseRenderLayer = u
                    },
                    5879: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CharacterJoinerRegistry = t.JoinedCellData = void 0;
                        var o = r(3734),
                            s = r(643),
                            a = r(511),
                            l = function(e) {
                                function t(t, r, n) {
                                    var i = e.call(this) || this;
                                    return i.content = 0, i.combinedData = "", i.fg = t.fg, i.bg = t.bg, i.combinedData = r, i._width = n, i
                                }
                                return i(t, e), t.prototype.isCombined = function() {
                                    return 2097152
                                }, t.prototype.getWidth = function() {
                                    return this._width
                                }, t.prototype.getChars = function() {
                                    return this.combinedData
                                }, t.prototype.getCode = function() {
                                    return 2097151
                                }, t.prototype.setFromCharData = function(e) {
                                    throw new Error("not implemented")
                                }, t.prototype.getAsCharData = function() {
                                    return [this.fg, this.getChars(), this.getWidth(), this.getCode()]
                                }, t
                            }(o.AttributeData);
                        t.JoinedCellData = l;
                        var c = function() {
                            function e(e) {
                                this._bufferService = e, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new a.CellData
                            }
                            return e.prototype.registerCharacterJoiner = function(e) {
                                var t = {
                                    id: this._nextCharacterJoinerId++,
                                    handler: e
                                };
                                return this._characterJoiners.push(t), t.id
                            }, e.prototype.deregisterCharacterJoiner = function(e) {
                                for (var t = 0; t < this._characterJoiners.length; t++)
                                    if (this._characterJoiners[t].id === e) return this._characterJoiners.splice(t, 1), !0;
                                return !1
                            }, e.prototype.getJoinedCharacters = function(e) {
                                if (0 === this._characterJoiners.length) return [];
                                var t = this._bufferService.buffer.lines.get(e);
                                if (!t || 0 === t.length) return [];
                                for (var r = [], n = t.translateToString(!0), i = 0, o = 0, a = 0, l = t.getFg(0), c = t.getBg(0), u = 0; u < t.getTrimmedLength(); u++)
                                    if (t.loadCell(u, this._workCell), 0 !== this._workCell.getWidth()) {
                                        if (this._workCell.fg !== l || this._workCell.bg !== c) {
                                            if (u - i > 1)
                                                for (var f = this._getJoinedRanges(n, a, o, t, i), h = 0; h < f.length; h++) r.push(f[h]);
                                            i = u, a = o, l = this._workCell.fg, c = this._workCell.bg
                                        }
                                        o += this._workCell.getChars().length || s.WHITESPACE_CELL_CHAR.length
                                    } if (this._bufferService.cols - i > 1)
                                    for (f = this._getJoinedRanges(n, a, o, t, i), h = 0; h < f.length; h++) r.push(f[h]);
                                return r
                            }, e.prototype._getJoinedRanges = function(t, r, n, i, o) {
                                for (var s = t.substring(r, n), a = this._characterJoiners[0].handler(s), l = 1; l < this._characterJoiners.length; l++)
                                    for (var c = this._characterJoiners[l].handler(s), u = 0; u < c.length; u++) e._mergeRanges(a, c[u]);
                                return this._stringRangesToCellRanges(a, i, o), a
                            }, e.prototype._stringRangesToCellRanges = function(e, t, r) {
                                var n = 0,
                                    i = !1,
                                    o = 0,
                                    a = e[n];
                                if (a) {
                                    for (var l = r; l < this._bufferService.cols; l++) {
                                        var c = t.getWidth(l),
                                            u = t.getString(l).length || s.WHITESPACE_CELL_CHAR.length;
                                        if (0 !== c) {
                                            if (!i && a[0] <= o && (a[0] = l, i = !0), a[1] <= o) {
                                                if (a[1] = l, !(a = e[++n])) break;
                                                a[0] <= o ? (a[0] = l, i = !0) : i = !1
                                            }
                                            o += u
                                        }
                                    }
                                    a && (a[1] = this._bufferService.cols)
                                }
                            }, e._mergeRanges = function(e, t) {
                                for (var r = !1, n = 0; n < e.length; n++) {
                                    var i = e[n];
                                    if (r) {
                                        if (t[1] <= i[0]) return e[n - 1][1] = t[1], e;
                                        if (t[1] <= i[1]) return e[n - 1][1] = Math.max(t[1], i[1]), e.splice(n, 1), e;
                                        e.splice(n, 1), n--
                                    } else {
                                        if (t[1] <= i[0]) return e.splice(n, 0, t), e;
                                        if (t[1] <= i[1]) return i[0] = Math.min(t[0], i[0]), e;
                                        t[0] < i[1] && (i[0] = Math.min(t[0], i[0]), r = !0)
                                    }
                                }
                                return r ? e[e.length - 1][1] = t[1] : e.push(t), e
                            }, e
                        }();
                        t.CharacterJoinerRegistry = c
                    },
                    2512: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CursorRenderLayer = void 0;
                        var o = r(1546),
                            s = r(511),
                            a = 600,
                            l = function(e) {
                                function t(t, r, n, i, o, a, l, c, u) {
                                    var f = e.call(this, t, "cursor", r, !0, n, i, a, l) || this;
                                    return f._onRequestRedraw = o, f._coreService = c, f._coreBrowserService = u, f._cell = new s.CellData, f._state = {
                                        x: 0,
                                        y: 0,
                                        isFocused: !1,
                                        style: "",
                                        width: 0
                                    }, f._cursorRenderers = {
                                        bar: f._renderBarCursor.bind(f),
                                        block: f._renderBlockCursor.bind(f),
                                        underline: f._renderUnderlineCursor.bind(f)
                                    }, f
                                }
                                return i(t, e), t.prototype.resize = function(t) {
                                    e.prototype.resize.call(this, t), this._state = {
                                        x: 0,
                                        y: 0,
                                        isFocused: !1,
                                        style: "",
                                        width: 0
                                    }
                                }, t.prototype.reset = function() {
                                    this._clearCursor(), this._cursorBlinkStateManager && (this._cursorBlinkStateManager.dispose(), this._cursorBlinkStateManager = void 0, this.onOptionsChanged())
                                }, t.prototype.onBlur = function() {
                                    this._cursorBlinkStateManager && this._cursorBlinkStateManager.pause(), this._onRequestRedraw.fire({
                                        start: this._bufferService.buffer.y,
                                        end: this._bufferService.buffer.y
                                    })
                                }, t.prototype.onFocus = function() {
                                    this._cursorBlinkStateManager ? this._cursorBlinkStateManager.resume() : this._onRequestRedraw.fire({
                                        start: this._bufferService.buffer.y,
                                        end: this._bufferService.buffer.y
                                    })
                                }, t.prototype.onOptionsChanged = function() {
                                    var e, t = this;
                                    this._optionsService.options.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new c(this._coreBrowserService.isFocused, (function() {
                                        t._render(!0)
                                    }))) : (null === (e = this._cursorBlinkStateManager) || void 0 === e || e.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRedraw.fire({
                                        start: this._bufferService.buffer.y,
                                        end: this._bufferService.buffer.y
                                    })
                                }, t.prototype.onCursorMove = function() {
                                    this._cursorBlinkStateManager && this._cursorBlinkStateManager.restartBlinkAnimation()
                                }, t.prototype.onGridChanged = function(e, t) {
                                    !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(!1) : this._cursorBlinkStateManager.restartBlinkAnimation()
                                }, t.prototype._render = function(e) {
                                    if (this._coreService.isCursorInitialized && !this._coreService.isCursorHidden) {
                                        var t = this._bufferService.buffer.ybase + this._bufferService.buffer.y,
                                            r = t - this._bufferService.buffer.ydisp;
                                        if (r < 0 || r >= this._bufferService.rows) this._clearCursor();
                                        else {
                                            var n = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1);
                                            if (this._bufferService.buffer.lines.get(t).loadCell(n, this._cell), void 0 !== this._cell.content) {
                                                if (!this._coreBrowserService.isFocused) {
                                                    this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css;
                                                    var i = this._optionsService.options.cursorStyle;
                                                    return i && "block" !== i ? this._cursorRenderers[i](n, r, this._cell) : this._renderBlurCursor(n, r, this._cell), this._ctx.restore(), this._state.x = n, this._state.y = r, this._state.isFocused = !1, this._state.style = i, void(this._state.width = this._cell.getWidth())
                                                }
                                                if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                                                    if (this._state) {
                                                        if (this._state.x === n && this._state.y === r && this._state.isFocused === this._coreBrowserService.isFocused && this._state.style === this._optionsService.options.cursorStyle && this._state.width === this._cell.getWidth()) return;
                                                        this._clearCursor()
                                                    }
                                                    this._ctx.save(), this._cursorRenderers[this._optionsService.options.cursorStyle || "block"](n, r, this._cell), this._ctx.restore(), this._state.x = n, this._state.y = r, this._state.isFocused = !1, this._state.style = this._optionsService.options.cursorStyle, this._state.width = this._cell.getWidth()
                                                } else this._clearCursor()
                                            }
                                        }
                                    } else this._clearCursor()
                                }, t.prototype._clearCursor = function() {
                                    this._state && (this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = {
                                        x: 0,
                                        y: 0,
                                        isFocused: !1,
                                        style: "",
                                        width: 0
                                    })
                                }, t.prototype._renderBarCursor = function(e, t, r) {
                                    this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillLeftLineAtCell(e, t, this._optionsService.options.cursorWidth), this._ctx.restore()
                                }, t.prototype._renderBlockCursor = function(e, t, r) {
                                    this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillCells(e, t, r.getWidth(), 1), this._ctx.fillStyle = this._colors.cursorAccent.css, this._fillCharTrueColor(r, e, t), this._ctx.restore()
                                }, t.prototype._renderUnderlineCursor = function(e, t, r) {
                                    this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillBottomLineAtCells(e, t), this._ctx.restore()
                                }, t.prototype._renderBlurCursor = function(e, t, r) {
                                    this._ctx.save(), this._ctx.strokeStyle = this._colors.cursor.css, this._strokeRectAtCell(e, t, r.getWidth(), 1), this._ctx.restore()
                                }, t
                            }(o.BaseRenderLayer);
                        t.CursorRenderLayer = l;
                        var c = function() {
                            function e(e, t) {
                                this._renderCallback = t, this.isCursorVisible = !0, e && this._restartInterval()
                            }
                            return Object.defineProperty(e.prototype, "isPaused", {
                                get: function() {
                                    return !(this._blinkStartTimeout || this._blinkInterval)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype.dispose = function() {
                                this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
                            }, e.prototype.restartBlinkAnimation = function() {
                                var e = this;
                                this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = !0, this._animationFrame || (this._animationFrame = window.requestAnimationFrame((function() {
                                    e._renderCallback(), e._animationFrame = void 0
                                }))))
                            }, e.prototype._restartInterval = function(e) {
                                var t = this;
                                void 0 === e && (e = a), this._blinkInterval && window.clearInterval(this._blinkInterval), this._blinkStartTimeout = window.setTimeout((function() {
                                    if (t._animationTimeRestarted) {
                                        var e = a - (Date.now() - t._animationTimeRestarted);
                                        if (t._animationTimeRestarted = void 0, e > 0) return void t._restartInterval(e)
                                    }
                                    t.isCursorVisible = !1, t._animationFrame = window.requestAnimationFrame((function() {
                                        t._renderCallback(), t._animationFrame = void 0
                                    })), t._blinkInterval = window.setInterval((function() {
                                        if (t._animationTimeRestarted) {
                                            var e = a - (Date.now() - t._animationTimeRestarted);
                                            return t._animationTimeRestarted = void 0, void t._restartInterval(e)
                                        }
                                        t.isCursorVisible = !t.isCursorVisible, t._animationFrame = window.requestAnimationFrame((function() {
                                            t._renderCallback(), t._animationFrame = void 0
                                        }))
                                    }), a)
                                }), e)
                            }, e.prototype.pause = function() {
                                this.isCursorVisible = !0, this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
                            }, e.prototype.resume = function() {
                                this.pause(), this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation()
                            }, e
                        }()
                    },
                    3700: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.GridCache = void 0;
                        var r = function() {
                            function e() {
                                this.cache = []
                            }
                            return e.prototype.resize = function(e, t) {
                                for (var r = 0; r < e; r++) {
                                    this.cache.length <= r && this.cache.push([]);
                                    for (var n = this.cache[r].length; n < t; n++) this.cache[r].push(void 0);
                                    this.cache[r].length = t
                                }
                                this.cache.length = e
                            }, e.prototype.clear = function() {
                                for (var e = 0; e < this.cache.length; e++)
                                    for (var t = 0; t < this.cache[e].length; t++) this.cache[e][t] = void 0
                            }, e
                        }();
                        t.GridCache = r
                    },
                    5098: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.LinkRenderLayer = void 0;
                        var o = r(1546),
                            s = r(8803),
                            a = r(2040),
                            l = function(e) {
                                function t(t, r, n, i, o, s, a, l) {
                                    var c = e.call(this, t, "link", r, !0, n, i, a, l) || this;
                                    return o.onShowLinkUnderline((function(e) {
                                        return c._onShowLinkUnderline(e)
                                    })), o.onHideLinkUnderline((function(e) {
                                        return c._onHideLinkUnderline(e)
                                    })), s.onShowLinkUnderline((function(e) {
                                        return c._onShowLinkUnderline(e)
                                    })), s.onHideLinkUnderline((function(e) {
                                        return c._onHideLinkUnderline(e)
                                    })), c
                                }
                                return i(t, e), t.prototype.resize = function(t) {
                                    e.prototype.resize.call(this, t), this._state = void 0
                                }, t.prototype.reset = function() {
                                    this._clearCurrentLink()
                                }, t.prototype._clearCurrentLink = function() {
                                    if (this._state) {
                                        this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
                                        var e = this._state.y2 - this._state.y1 - 1;
                                        e > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, e), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0
                                    }
                                }, t.prototype._onShowLinkUnderline = function(e) {
                                    if (e.fg === s.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._colors.background.css : e.fg && a.is256Color(e.fg) ? this._ctx.fillStyle = this._colors.ansi[e.fg].css : this._ctx.fillStyle = this._colors.foreground.css, e.y1 === e.y2) this._fillBottomLineAtCells(e.x1, e.y1, e.x2 - e.x1);
                                    else {
                                        this._fillBottomLineAtCells(e.x1, e.y1, e.cols - e.x1);
                                        for (var t = e.y1 + 1; t < e.y2; t++) this._fillBottomLineAtCells(0, t, e.cols);
                                        this._fillBottomLineAtCells(0, e.y2, e.x2)
                                    }
                                    this._state = e
                                }, t.prototype._onHideLinkUnderline = function(e) {
                                    this._clearCurrentLink()
                                }, t
                            }(o.BaseRenderLayer);
                        t.LinkRenderLayer = l
                    },
                    3525: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                                return (n = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(e, t) {
                                        e.__proto__ = t
                                    } || function(e, t) {
                                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                    })(e, t)
                            }, function(e, t) {
                                function r() {
                                    this.constructor = e
                                }
                                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                            }),
                            o = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            s = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Renderer = void 0;
                        var a = r(9596),
                            l = r(4149),
                            c = r(2512),
                            u = r(5098),
                            f = r(5879),
                            h = r(844),
                            d = r(4725),
                            p = r(2585),
                            _ = r(1420),
                            v = r(8460),
                            m = 1,
                            g = function(e) {
                                function t(t, r, n, i, o, s, h, d, p) {
                                    var _ = e.call(this) || this;
                                    _._colors = t, _._screenElement = r, _._bufferService = o, _._charSizeService = s, _._optionsService = h, _._id = m++, _._onRequestRedraw = new v.EventEmitter;
                                    var g = _._optionsService.options.allowTransparency;
                                    return _._characterJoinerRegistry = new f.CharacterJoinerRegistry(_._bufferService), _._renderLayers = [new a.TextRenderLayer(_._screenElement, 0, _._colors, _._characterJoinerRegistry, g, _._id, _._bufferService, h), new l.SelectionRenderLayer(_._screenElement, 1, _._colors, _._id, _._bufferService, h), new u.LinkRenderLayer(_._screenElement, 2, _._colors, _._id, n, i, _._bufferService, h), new c.CursorRenderLayer(_._screenElement, 3, _._colors, _._id, _._onRequestRedraw, _._bufferService, h, d, p)], _.dimensions = {
                                        scaledCharWidth: 0,
                                        scaledCharHeight: 0,
                                        scaledCellWidth: 0,
                                        scaledCellHeight: 0,
                                        scaledCharLeft: 0,
                                        scaledCharTop: 0,
                                        scaledCanvasWidth: 0,
                                        scaledCanvasHeight: 0,
                                        canvasWidth: 0,
                                        canvasHeight: 0,
                                        actualCellWidth: 0,
                                        actualCellHeight: 0
                                    }, _._devicePixelRatio = window.devicePixelRatio, _._updateDimensions(), _.onOptionsChanged(), _
                                }
                                return i(t, e), Object.defineProperty(t.prototype, "onRequestRedraw", {
                                    get: function() {
                                        return this._onRequestRedraw.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.dispose = function() {
                                    for (var t = 0, r = this._renderLayers; t < r.length; t++) r[t].dispose();
                                    e.prototype.dispose.call(this), _.removeTerminalFromCache(this._id)
                                }, t.prototype.onDevicePixelRatioChange = function() {
                                    this._devicePixelRatio !== window.devicePixelRatio && (this._devicePixelRatio = window.devicePixelRatio, this.onResize(this._bufferService.cols, this._bufferService.rows))
                                }, t.prototype.setColors = function(e) {
                                    this._colors = e;
                                    for (var t = 0, r = this._renderLayers; t < r.length; t++) {
                                        var n = r[t];
                                        n.setColors(this._colors), n.reset()
                                    }
                                }, t.prototype.onResize = function(e, t) {
                                    this._updateDimensions();
                                    for (var r = 0, n = this._renderLayers; r < n.length; r++) n[r].resize(this.dimensions);
                                    this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px"
                                }, t.prototype.onCharSizeChanged = function() {
                                    this.onResize(this._bufferService.cols, this._bufferService.rows)
                                }, t.prototype.onBlur = function() {
                                    this._runOperation((function(e) {
                                        return e.onBlur()
                                    }))
                                }, t.prototype.onFocus = function() {
                                    this._runOperation((function(e) {
                                        return e.onFocus()
                                    }))
                                }, t.prototype.onSelectionChanged = function(e, t, r) {
                                    void 0 === r && (r = !1), this._runOperation((function(n) {
                                        return n.onSelectionChanged(e, t, r)
                                    }))
                                }, t.prototype.onCursorMove = function() {
                                    this._runOperation((function(e) {
                                        return e.onCursorMove()
                                    }))
                                }, t.prototype.onOptionsChanged = function() {
                                    this._runOperation((function(e) {
                                        return e.onOptionsChanged()
                                    }))
                                }, t.prototype.clear = function() {
                                    this._runOperation((function(e) {
                                        return e.reset()
                                    }))
                                }, t.prototype._runOperation = function(e) {
                                    for (var t = 0, r = this._renderLayers; t < r.length; t++) e(r[t])
                                }, t.prototype.renderRows = function(e, t) {
                                    for (var r = 0, n = this._renderLayers; r < n.length; r++) n[r].onGridChanged(e, t)
                                }, t.prototype._updateDimensions = function() {
                                    this._charSizeService.hasValidSize && (this.dimensions.scaledCharWidth = Math.floor(this._charSizeService.width * window.devicePixelRatio), this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.options.lineHeight), this.dimensions.scaledCharTop = 1 === this._optionsService.options.lineHeight ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.options.letterSpacing), this.dimensions.scaledCharLeft = Math.floor(this._optionsService.options.letterSpacing / 2), this.dimensions.scaledCanvasHeight = this._bufferService.rows * this.dimensions.scaledCellHeight, this.dimensions.scaledCanvasWidth = this._bufferService.cols * this.dimensions.scaledCellWidth, this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows, this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols)
                                }, t.prototype.registerCharacterJoiner = function(e) {
                                    return this._characterJoinerRegistry.registerCharacterJoiner(e)
                                }, t.prototype.deregisterCharacterJoiner = function(e) {
                                    return this._characterJoinerRegistry.deregisterCharacterJoiner(e)
                                }, o([s(4, p.IBufferService), s(5, d.ICharSizeService), s(6, p.IOptionsService), s(7, p.ICoreService), s(8, d.ICoreBrowserService)], t)
                            }(h.Disposable);
                        t.Renderer = g
                    },
                    1752: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.throwIfFalsy = void 0, t.throwIfFalsy = function(e) {
                            if (!e) throw new Error("value must not be falsy");
                            return e
                        }
                    },
                    4149: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.SelectionRenderLayer = void 0;
                        var o = function(e) {
                            function t(t, r, n, i, o, s) {
                                var a = e.call(this, t, "selection", r, !0, n, i, o, s) || this;
                                return a._clearState(), a
                            }
                            return i(t, e), t.prototype._clearState = function() {
                                this._state = {
                                    start: void 0,
                                    end: void 0,
                                    columnSelectMode: void 0,
                                    ydisp: void 0
                                }
                            }, t.prototype.resize = function(t) {
                                e.prototype.resize.call(this, t), this._clearState()
                            }, t.prototype.reset = function() {
                                this._state.start && this._state.end && (this._clearState(), this._clearAll())
                            }, t.prototype.onSelectionChanged = function(e, t, r) {
                                if (this._didStateChange(e, t, r, this._bufferService.buffer.ydisp))
                                    if (this._clearAll(), e && t) {
                                        var n = e[1] - this._bufferService.buffer.ydisp,
                                            i = t[1] - this._bufferService.buffer.ydisp,
                                            o = Math.max(n, 0),
                                            s = Math.min(i, this._bufferService.rows - 1);
                                        if (o >= this._bufferService.rows || s < 0) this._state.ydisp = this._bufferService.buffer.ydisp;
                                        else {
                                            if (this._ctx.fillStyle = this._colors.selectionTransparent.css, r) {
                                                var a = e[0],
                                                    l = t[0] - a,
                                                    c = s - o + 1;
                                                this._fillCells(a, o, l, c)
                                            } else {
                                                a = n === o ? e[0] : 0;
                                                var u = o === i ? t[0] : this._bufferService.cols;
                                                this._fillCells(a, o, u - a, 1);
                                                var f = Math.max(s - o - 1, 0);
                                                if (this._fillCells(0, o + 1, this._bufferService.cols, f), o !== s) {
                                                    var h = i === s ? t[0] : this._bufferService.cols;
                                                    this._fillCells(0, s, h, 1)
                                                }
                                            }
                                            this._state.start = [e[0], e[1]], this._state.end = [t[0], t[1]], this._state.columnSelectMode = r, this._state.ydisp = this._bufferService.buffer.ydisp
                                        }
                                    } else this._clearState()
                            }, t.prototype._didStateChange = function(e, t, r, n) {
                                return !this._areCoordinatesEqual(e, this._state.start) || !this._areCoordinatesEqual(t, this._state.end) || r !== this._state.columnSelectMode || n !== this._state.ydisp
                            }, t.prototype._areCoordinatesEqual = function(e, t) {
                                return !(!e || !t) && e[0] === t[0] && e[1] === t[1]
                            }, t
                        }(r(1546).BaseRenderLayer);
                        t.SelectionRenderLayer = o
                    },
                    9596: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.TextRenderLayer = void 0;
                        var o = r(3700),
                            s = r(1546),
                            a = r(3734),
                            l = r(643),
                            c = r(5879),
                            u = r(511),
                            f = function(e) {
                                function t(t, r, n, i, s, a, l, c) {
                                    var f = e.call(this, t, "text", r, s, n, a, l, c) || this;
                                    return f._characterWidth = 0, f._characterFont = "", f._characterOverlapCache = {}, f._workCell = new u.CellData, f._state = new o.GridCache, f._characterJoinerRegistry = i, f
                                }
                                return i(t, e), t.prototype.resize = function(t) {
                                    e.prototype.resize.call(this, t);
                                    var r = this._getFont(!1, !1);
                                    this._characterWidth === t.scaledCharWidth && this._characterFont === r || (this._characterWidth = t.scaledCharWidth, this._characterFont = r, this._characterOverlapCache = {}), this._state.clear(), this._state.resize(this._bufferService.cols, this._bufferService.rows)
                                }, t.prototype.reset = function() {
                                    this._state.clear(), this._clearAll()
                                }, t.prototype._forEachCell = function(e, t, r, n) {
                                    for (var i = e; i <= t; i++)
                                        for (var o = i + this._bufferService.buffer.ydisp, s = this._bufferService.buffer.lines.get(o), a = r ? r.getJoinedCharacters(o) : [], u = 0; u < this._bufferService.cols; u++) {
                                            s.loadCell(u, this._workCell);
                                            var f = this._workCell,
                                                h = !1,
                                                d = u;
                                            if (0 !== f.getWidth()) {
                                                if (a.length > 0 && u === a[0][0]) {
                                                    h = !0;
                                                    var p = a.shift();
                                                    f = new c.JoinedCellData(this._workCell, s.translateToString(!0, p[0], p[1]), p[1] - p[0]), d = p[1] - 1
                                                }!h && this._isOverlapping(f) && d < s.length - 1 && s.getCodePoint(d + 1) === l.NULL_CELL_CODE && (f.content &= -12582913, f.content |= 2 << 22), n(f, u, i), u = d
                                            }
                                        }
                                }, t.prototype._drawBackground = function(e, t) {
                                    var r = this,
                                        n = this._ctx,
                                        i = this._bufferService.cols,
                                        o = 0,
                                        s = 0,
                                        l = null;
                                    n.save(), this._forEachCell(e, t, null, (function(e, t, c) {
                                        var u = null;
                                        e.isInverse() ? u = e.isFgDefault() ? r._colors.foreground.css : e.isFgRGB() ? "rgb(" + a.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")" : r._colors.ansi[e.getFgColor()].css : e.isBgRGB() ? u = "rgb(" + a.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")" : e.isBgPalette() && (u = r._colors.ansi[e.getBgColor()].css), null === l && (o = t, s = c), c !== s ? (n.fillStyle = l || "", r._fillCells(o, s, i - o, 1), o = t, s = c) : l !== u && (n.fillStyle = l || "", r._fillCells(o, s, t - o, 1), o = t, s = c), l = u
                                    })), null !== l && (n.fillStyle = l, this._fillCells(o, s, i - o, 1)), n.restore()
                                }, t.prototype._drawForeground = function(e, t) {
                                    var r = this;
                                    this._forEachCell(e, t, this._characterJoinerRegistry, (function(e, t, n) {
                                        if (!e.isInvisible() && (r._drawChars(e, t, n), e.isUnderline())) {
                                            if (r._ctx.save(), e.isInverse())
                                                if (e.isBgDefault()) r._ctx.fillStyle = r._colors.background.css;
                                                else if (e.isBgRGB()) r._ctx.fillStyle = "rgb(" + a.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")";
                                            else {
                                                var i = e.getBgColor();
                                                r._optionsService.options.drawBoldTextInBrightColors && e.isBold() && i < 8 && (i += 8), r._ctx.fillStyle = r._colors.ansi[i].css
                                            } else if (e.isFgDefault()) r._ctx.fillStyle = r._colors.foreground.css;
                                            else if (e.isFgRGB()) r._ctx.fillStyle = "rgb(" + a.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")";
                                            else {
                                                var o = e.getFgColor();
                                                r._optionsService.options.drawBoldTextInBrightColors && e.isBold() && o < 8 && (o += 8), r._ctx.fillStyle = r._colors.ansi[o].css
                                            }
                                            r._fillBottomLineAtCells(t, n, e.getWidth()), r._ctx.restore()
                                        }
                                    }))
                                }, t.prototype.onGridChanged = function(e, t) {
                                    0 !== this._state.cache.length && (this._charAtlas && this._charAtlas.beginFrame(), this._clearCells(0, e, this._bufferService.cols, t - e + 1), this._drawBackground(e, t), this._drawForeground(e, t))
                                }, t.prototype.onOptionsChanged = function() {
                                    this._setTransparency(this._optionsService.options.allowTransparency)
                                }, t.prototype._isOverlapping = function(e) {
                                    if (1 !== e.getWidth()) return !1;
                                    if (e.getCode() < 256) return !1;
                                    var t = e.getChars();
                                    if (this._characterOverlapCache.hasOwnProperty(t)) return this._characterOverlapCache[t];
                                    this._ctx.save(), this._ctx.font = this._characterFont;
                                    var r = Math.floor(this._ctx.measureText(t).width) > this._characterWidth;
                                    return this._ctx.restore(), this._characterOverlapCache[t] = r, r
                                }, t
                            }(s.BaseRenderLayer);
                        t.TextRenderLayer = f
                    },
                    9616: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.BaseCharAtlas = void 0;
                        var r = function() {
                            function e() {
                                this._didWarmUp = !1
                            }
                            return e.prototype.dispose = function() {}, e.prototype.warmUp = function() {
                                this._didWarmUp || (this._doWarmUp(), this._didWarmUp = !0)
                            }, e.prototype._doWarmUp = function() {}, e.prototype.beginFrame = function() {}, e
                        }();
                        t.BaseCharAtlas = r
                    },
                    1420: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.removeTerminalFromCache = t.acquireCharAtlas = void 0;
                        var n = r(2040),
                            i = r(1906),
                            o = [];
                        t.acquireCharAtlas = function(e, t, r, s, a) {
                            for (var l = n.generateConfig(s, a, e, r), c = 0; c < o.length; c++) {
                                var u = (f = o[c]).ownedBy.indexOf(t);
                                if (u >= 0) {
                                    if (n.configEquals(f.config, l)) return f.atlas;
                                    1 === f.ownedBy.length ? (f.atlas.dispose(), o.splice(c, 1)) : f.ownedBy.splice(u, 1);
                                    break
                                }
                            }
                            for (c = 0; c < o.length; c++) {
                                var f = o[c];
                                if (n.configEquals(f.config, l)) return f.ownedBy.push(t), f.atlas
                            }
                            var h = {
                                atlas: new i.DynamicCharAtlas(document, l),
                                config: l,
                                ownedBy: [t]
                            };
                            return o.push(h), h.atlas
                        }, t.removeTerminalFromCache = function(e) {
                            for (var t = 0; t < o.length; t++) {
                                var r = o[t].ownedBy.indexOf(e);
                                if (-1 !== r) {
                                    1 === o[t].ownedBy.length ? (o[t].atlas.dispose(), o.splice(t, 1)) : o[t].ownedBy.splice(r, 1);
                                    break
                                }
                            }
                        }
                    },
                    2040: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.is256Color = t.configEquals = t.generateConfig = void 0;
                        var n = r(643);
                        t.generateConfig = function(e, t, r, n) {
                            var i = {
                                foreground: n.foreground,
                                background: n.background,
                                cursor: void 0,
                                cursorAccent: void 0,
                                selection: void 0,
                                ansi: n.ansi
                            };
                            return {
                                devicePixelRatio: window.devicePixelRatio,
                                scaledCharWidth: e,
                                scaledCharHeight: t,
                                fontFamily: r.fontFamily,
                                fontSize: r.fontSize,
                                fontWeight: r.fontWeight,
                                fontWeightBold: r.fontWeightBold,
                                allowTransparency: r.allowTransparency,
                                colors: i
                            }
                        }, t.configEquals = function(e, t) {
                            for (var r = 0; r < e.colors.ansi.length; r++)
                                if (e.colors.ansi[r].rgba !== t.colors.ansi[r].rgba) return !1;
                            return e.devicePixelRatio === t.devicePixelRatio && e.fontFamily === t.fontFamily && e.fontSize === t.fontSize && e.fontWeight === t.fontWeight && e.fontWeightBold === t.fontWeightBold && e.allowTransparency === t.allowTransparency && e.scaledCharWidth === t.scaledCharWidth && e.scaledCharHeight === t.scaledCharHeight && e.colors.foreground === t.colors.foreground && e.colors.background === t.colors.background
                        }, t.is256Color = function(e) {
                            return e < n.DEFAULT_COLOR
                        }
                    },
                    8803: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CHAR_ATLAS_CELL_SPACING = t.DIM_OPACITY = t.INVERTED_DEFAULT_COLOR = void 0, t.INVERTED_DEFAULT_COLOR = 257, t.DIM_OPACITY = .5, t.CHAR_ATLAS_CELL_SPACING = 1
                    },
                    1906: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.NoneCharAtlas = t.DynamicCharAtlas = t.getGlyphCacheKey = void 0;
                        var o = r(8803),
                            s = r(9616),
                            a = r(5680),
                            l = r(7001),
                            c = r(6114),
                            u = r(1752),
                            f = r(4774),
                            h = {
                                css: "rgba(0, 0, 0, 0)",
                                rgba: 0
                            };

                        function d(e) {
                            return e.code << 21 | e.bg << 12 | e.fg << 3 | (e.bold ? 0 : 4) + (e.dim ? 0 : 2) + (e.italic ? 0 : 1)
                        }
                        t.getGlyphCacheKey = d;
                        var p = function(e) {
                            function t(t, r) {
                                var n = e.call(this) || this;
                                n._config = r, n._drawToCacheCount = 0, n._glyphsWaitingOnBitmap = [], n._bitmapCommitTimeout = null, n._bitmap = null, n._cacheCanvas = t.createElement("canvas"), n._cacheCanvas.width = 1024, n._cacheCanvas.height = 1024, n._cacheCtx = u.throwIfFalsy(n._cacheCanvas.getContext("2d", {
                                    alpha: !0
                                }));
                                var i = t.createElement("canvas");
                                i.width = n._config.scaledCharWidth, i.height = n._config.scaledCharHeight, n._tmpCtx = u.throwIfFalsy(i.getContext("2d", {
                                    alpha: n._config.allowTransparency
                                })), n._width = Math.floor(1024 / n._config.scaledCharWidth), n._height = Math.floor(1024 / n._config.scaledCharHeight);
                                var o = n._width * n._height;
                                return n._cacheMap = new l.LRUMap(o), n._cacheMap.prealloc(o), n
                            }
                            return i(t, e), t.prototype.dispose = function() {
                                null !== this._bitmapCommitTimeout && (window.clearTimeout(this._bitmapCommitTimeout), this._bitmapCommitTimeout = null)
                            }, t.prototype.beginFrame = function() {
                                this._drawToCacheCount = 0
                            }, t.prototype.draw = function(e, t, r, n) {
                                if (32 === t.code) return !0;
                                if (!this._canCache(t)) return !1;
                                var i = d(t),
                                    o = this._cacheMap.get(i);
                                if (null != o) return this._drawFromCache(e, o, r, n), !0;
                                if (this._drawToCacheCount < 100) {
                                    var s;
                                    s = this._cacheMap.size < this._cacheMap.capacity ? this._cacheMap.size : this._cacheMap.peek().index;
                                    var a = this._drawToCache(t, s);
                                    return this._cacheMap.set(i, a), this._drawFromCache(e, a, r, n), !0
                                }
                                return !1
                            }, t.prototype._canCache = function(e) {
                                return e.code < 256
                            }, t.prototype._toCoordinateX = function(e) {
                                return e % this._width * this._config.scaledCharWidth
                            }, t.prototype._toCoordinateY = function(e) {
                                return Math.floor(e / this._width) * this._config.scaledCharHeight
                            }, t.prototype._drawFromCache = function(e, t, r, n) {
                                if (!t.isEmpty) {
                                    var i = this._toCoordinateX(t.index),
                                        o = this._toCoordinateY(t.index);
                                    e.drawImage(t.inBitmap ? this._bitmap : this._cacheCanvas, i, o, this._config.scaledCharWidth, this._config.scaledCharHeight, r, n, this._config.scaledCharWidth, this._config.scaledCharHeight)
                                }
                            }, t.prototype._getColorFromAnsiIndex = function(e) {
                                return e < this._config.colors.ansi.length ? this._config.colors.ansi[e] : a.DEFAULT_ANSI_COLORS[e]
                            }, t.prototype._getBackgroundColor = function(e) {
                                return this._config.allowTransparency ? h : e.bg === o.INVERTED_DEFAULT_COLOR ? this._config.colors.foreground : e.bg < 256 ? this._getColorFromAnsiIndex(e.bg) : this._config.colors.background
                            }, t.prototype._getForegroundColor = function(e) {
                                return e.fg === o.INVERTED_DEFAULT_COLOR ? f.color.opaque(this._config.colors.background) : e.fg < 256 ? this._getColorFromAnsiIndex(e.fg) : this._config.colors.foreground
                            }, t.prototype._drawToCache = function(e, t) {
                                this._drawToCacheCount++, this._tmpCtx.save();
                                var r = this._getBackgroundColor(e);
                                this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = r.css, this._tmpCtx.fillRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), this._tmpCtx.globalCompositeOperation = "source-over";
                                var n = e.bold ? this._config.fontWeightBold : this._config.fontWeight,
                                    i = e.italic ? "italic" : "";
                                this._tmpCtx.font = i + " " + n + " " + this._config.fontSize * this._config.devicePixelRatio + "px " + this._config.fontFamily, this._tmpCtx.textBaseline = "middle", this._tmpCtx.fillStyle = this._getForegroundColor(e).css, e.dim && (this._tmpCtx.globalAlpha = o.DIM_OPACITY), this._tmpCtx.fillText(e.chars, 0, this._config.scaledCharHeight / 2), this._tmpCtx.restore();
                                var s = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight),
                                    a = !1;
                                this._config.allowTransparency || (a = function(e, t) {
                                    for (var r = !0, n = t.rgba >>> 24, i = t.rgba >>> 16 & 255, o = t.rgba >>> 8 & 255, s = 0; s < e.data.length; s += 4) e.data[s] === n && e.data[s + 1] === i && e.data[s + 2] === o ? e.data[s + 3] = 0 : r = !1;
                                    return r
                                }(s, r));
                                var l = this._toCoordinateX(t),
                                    c = this._toCoordinateY(t);
                                this._cacheCtx.putImageData(s, l, c);
                                var u = {
                                    index: t,
                                    isEmpty: a,
                                    inBitmap: !1
                                };
                                return this._addGlyphToBitmap(u), u
                            }, t.prototype._addGlyphToBitmap = function(e) {
                                var t = this;
                                !("createImageBitmap" in window) || c.isFirefox || c.isSafari || (this._glyphsWaitingOnBitmap.push(e), null === this._bitmapCommitTimeout && (this._bitmapCommitTimeout = window.setTimeout((function() {
                                    return t._generateBitmap()
                                }), 100)))
                            }, t.prototype._generateBitmap = function() {
                                var e = this,
                                    t = this._glyphsWaitingOnBitmap;
                                this._glyphsWaitingOnBitmap = [], window.createImageBitmap(this._cacheCanvas).then((function(r) {
                                    e._bitmap = r;
                                    for (var n = 0; n < t.length; n++) t[n].inBitmap = !0
                                })), this._bitmapCommitTimeout = null
                            }, t
                        }(s.BaseCharAtlas);
                        t.DynamicCharAtlas = p;
                        var _ = function(e) {
                            function t(t, r) {
                                return e.call(this) || this
                            }
                            return i(t, e), t.prototype.draw = function(e, t, r, n) {
                                return !1
                            }, t
                        }(s.BaseCharAtlas);
                        t.NoneCharAtlas = _
                    },
                    7001: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.LRUMap = void 0;
                        var r = function() {
                            function e(e) {
                                this.capacity = e, this._map = {}, this._head = null, this._tail = null, this._nodePool = [], this.size = 0
                            }
                            return e.prototype._unlinkNode = function(e) {
                                var t = e.prev,
                                    r = e.next;
                                e === this._head && (this._head = r), e === this._tail && (this._tail = t), null !== t && (t.next = r), null !== r && (r.prev = t)
                            }, e.prototype._appendNode = function(e) {
                                var t = this._tail;
                                null !== t && (t.next = e), e.prev = t, e.next = null, this._tail = e, null === this._head && (this._head = e)
                            }, e.prototype.prealloc = function(e) {
                                for (var t = this._nodePool, r = 0; r < e; r++) t.push({
                                    prev: null,
                                    next: null,
                                    key: null,
                                    value: null
                                })
                            }, e.prototype.get = function(e) {
                                var t = this._map[e];
                                return void 0 !== t ? (this._unlinkNode(t), this._appendNode(t), t.value) : null
                            }, e.prototype.peekValue = function(e) {
                                var t = this._map[e];
                                return void 0 !== t ? t.value : null
                            }, e.prototype.peek = function() {
                                var e = this._head;
                                return null === e ? null : e.value
                            }, e.prototype.set = function(e, t) {
                                var r = this._map[e];
                                if (void 0 !== r) r = this._map[e], this._unlinkNode(r), r.value = t;
                                else if (this.size >= this.capacity) r = this._head, this._unlinkNode(r), delete this._map[r.key], r.key = e, r.value = t, this._map[e] = r;
                                else {
                                    var n = this._nodePool;
                                    n.length > 0 ? ((r = n.pop()).key = e, r.value = t) : r = {
                                        prev: null,
                                        next: null,
                                        key: e,
                                        value: t
                                    }, this._map[e] = r, this.size++
                                }
                                this._appendNode(r)
                            }, e
                        }();
                        t.LRUMap = r
                    },
                    1296: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                                return (n = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(e, t) {
                                        e.__proto__ = t
                                    } || function(e, t) {
                                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                    })(e, t)
                            }, function(e, t) {
                                function r() {
                                    this.constructor = e
                                }
                                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                            }),
                            o = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            s = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.DomRenderer = void 0;
                        var a = r(3787),
                            l = r(8803),
                            c = r(844),
                            u = r(4725),
                            f = r(2585),
                            h = r(8460),
                            d = r(4774),
                            p = r(9631),
                            _ = "xterm-dom-renderer-owner-",
                            v = "xterm-fg-",
                            m = "xterm-bg-",
                            g = "xterm-focus",
                            y = 1,
                            b = function(e) {
                                function t(t, r, n, i, o, s, l, c, u) {
                                    var f = e.call(this) || this;
                                    return f._colors = t, f._element = r, f._screenElement = n, f._viewportElement = i, f._linkifier = o, f._linkifier2 = s, f._charSizeService = l, f._optionsService = c, f._bufferService = u, f._terminalClass = y++, f._rowElements = [], f._rowContainer = document.createElement("div"), f._rowContainer.classList.add("xterm-rows"), f._rowContainer.style.lineHeight = "normal", f._rowContainer.setAttribute("aria-hidden", "true"), f._refreshRowElements(f._bufferService.cols, f._bufferService.rows), f._selectionContainer = document.createElement("div"), f._selectionContainer.classList.add("xterm-selection"), f._selectionContainer.setAttribute("aria-hidden", "true"), f.dimensions = {
                                        scaledCharWidth: 0,
                                        scaledCharHeight: 0,
                                        scaledCellWidth: 0,
                                        scaledCellHeight: 0,
                                        scaledCharLeft: 0,
                                        scaledCharTop: 0,
                                        scaledCanvasWidth: 0,
                                        scaledCanvasHeight: 0,
                                        canvasWidth: 0,
                                        canvasHeight: 0,
                                        actualCellWidth: 0,
                                        actualCellHeight: 0
                                    }, f._updateDimensions(), f._injectCss(), f._rowFactory = new a.DomRendererRowFactory(document, f._optionsService, f._colors), f._element.classList.add(_ + f._terminalClass), f._screenElement.appendChild(f._rowContainer), f._screenElement.appendChild(f._selectionContainer), f._linkifier.onShowLinkUnderline((function(e) {
                                        return f._onLinkHover(e)
                                    })), f._linkifier.onHideLinkUnderline((function(e) {
                                        return f._onLinkLeave(e)
                                    })), f._linkifier2.onShowLinkUnderline((function(e) {
                                        return f._onLinkHover(e)
                                    })), f._linkifier2.onHideLinkUnderline((function(e) {
                                        return f._onLinkLeave(e)
                                    })), f
                                }
                                return i(t, e), Object.defineProperty(t.prototype, "onRequestRedraw", {
                                    get: function() {
                                        return (new h.EventEmitter).event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.dispose = function() {
                                    this._element.classList.remove(_ + this._terminalClass), p.removeElementFromParent(this._rowContainer, this._selectionContainer, this._themeStyleElement, this._dimensionsStyleElement), e.prototype.dispose.call(this)
                                }, t.prototype._updateDimensions = function() {
                                    this.dimensions.scaledCharWidth = this._charSizeService.width * window.devicePixelRatio, this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.options.letterSpacing), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.options.lineHeight), this.dimensions.scaledCharLeft = 0, this.dimensions.scaledCharTop = 0, this.dimensions.scaledCanvasWidth = this.dimensions.scaledCellWidth * this._bufferService.cols, this.dimensions.scaledCanvasHeight = this.dimensions.scaledCellHeight * this._bufferService.rows, this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols, this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows;
                                    for (var e = 0, t = this._rowElements; e < t.length; e++) {
                                        var r = t[e];
                                        r.style.width = this.dimensions.canvasWidth + "px", r.style.height = this.dimensions.actualCellHeight + "px", r.style.lineHeight = this.dimensions.actualCellHeight + "px", r.style.overflow = "hidden"
                                    }
                                    this._dimensionsStyleElement || (this._dimensionsStyleElement = document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
                                    var n = this._terminalSelector + " .xterm-rows span { display: inline-block; height: 100%; vertical-align: top; width: " + this.dimensions.actualCellWidth + "px}";
                                    this._dimensionsStyleElement.textContent = n, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px"
                                }, t.prototype.setColors = function(e) {
                                    this._colors = e, this._injectCss()
                                }, t.prototype._injectCss = function() {
                                    var e = this;
                                    this._themeStyleElement || (this._themeStyleElement = document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
                                    var t = this._terminalSelector + " .xterm-rows { color: " + this._colors.foreground.css + "; font-family: " + this._optionsService.options.fontFamily + "; font-size: " + this._optionsService.options.fontSize + "px;}";
                                    t += this._terminalSelector + " span:not(." + a.BOLD_CLASS + ") { font-weight: " + this._optionsService.options.fontWeight + ";}" + this._terminalSelector + " span." + a.BOLD_CLASS + " { font-weight: " + this._optionsService.options.fontWeightBold + ";}" + this._terminalSelector + " span." + a.ITALIC_CLASS + " { font-style: italic;}", t += "@keyframes blink_box_shadow_" + this._terminalClass + " { 50% {  box-shadow: none; }}", t += "@keyframes blink_block_" + this._terminalClass + " { 0% {  background-color: " + this._colors.cursor.css + ";  color: " + this._colors.cursorAccent.css + "; } 50% {  background-color: " + this._colors.cursorAccent.css + ";  color: " + this._colors.cursor.css + "; }}", t += this._terminalSelector + " .xterm-rows:not(.xterm-focus) ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_BLOCK_CLASS + " { outline: 1px solid " + this._colors.cursor.css + "; outline-offset: -1px;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + a.CURSOR_CLASS + "." + a.CURSOR_BLINK_CLASS + ":not(." + a.CURSOR_STYLE_BLOCK_CLASS + ") { animation: blink_box_shadow_" + this._terminalClass + " 1s step-end infinite;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + a.CURSOR_CLASS + "." + a.CURSOR_BLINK_CLASS + "." + a.CURSOR_STYLE_BLOCK_CLASS + " { animation: blink_block_" + this._terminalClass + " 1s step-end infinite;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_BLOCK_CLASS + " { background-color: " + this._colors.cursor.css + "; color: " + this._colors.cursorAccent.css + ";}" + this._terminalSelector + " .xterm-rows ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_BAR_CLASS + " { box-shadow: " + this._optionsService.options.cursorWidth + "px 0 0 " + this._colors.cursor.css + " inset;}" + this._terminalSelector + " .xterm-rows ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_UNDERLINE_CLASS + " { box-shadow: 0 -1px 0 " + this._colors.cursor.css + " inset;}", t += this._terminalSelector + " .xterm-selection { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}" + this._terminalSelector + " .xterm-selection div { position: absolute; background-color: " + this._colors.selectionTransparent.css + ";}", this._colors.ansi.forEach((function(r, n) {
                                        t += e._terminalSelector + " ." + v + n + " { color: " + r.css + "; }" + e._terminalSelector + " ." + m + n + " { background-color: " + r.css + "; }"
                                    })), t += this._terminalSelector + " ." + v + l.INVERTED_DEFAULT_COLOR + " { color: " + d.color.opaque(this._colors.background).css + "; }" + this._terminalSelector + " ." + m + l.INVERTED_DEFAULT_COLOR + " { background-color: " + this._colors.foreground.css + "; }", this._themeStyleElement.textContent = t
                                }, t.prototype.onDevicePixelRatioChange = function() {
                                    this._updateDimensions()
                                }, t.prototype._refreshRowElements = function(e, t) {
                                    for (var r = this._rowElements.length; r <= t; r++) {
                                        var n = document.createElement("div");
                                        this._rowContainer.appendChild(n), this._rowElements.push(n)
                                    }
                                    for (; this._rowElements.length > t;) this._rowContainer.removeChild(this._rowElements.pop())
                                }, t.prototype.onResize = function(e, t) {
                                    this._refreshRowElements(e, t), this._updateDimensions()
                                }, t.prototype.onCharSizeChanged = function() {
                                    this._updateDimensions()
                                }, t.prototype.onBlur = function() {
                                    this._rowContainer.classList.remove(g)
                                }, t.prototype.onFocus = function() {
                                    this._rowContainer.classList.add(g)
                                }, t.prototype.onSelectionChanged = function(e, t, r) {
                                    for (; this._selectionContainer.children.length;) this._selectionContainer.removeChild(this._selectionContainer.children[0]);
                                    if (e && t) {
                                        var n = e[1] - this._bufferService.buffer.ydisp,
                                            i = t[1] - this._bufferService.buffer.ydisp,
                                            o = Math.max(n, 0),
                                            s = Math.min(i, this._bufferService.rows - 1);
                                        if (!(o >= this._bufferService.rows || s < 0)) {
                                            var a = document.createDocumentFragment();
                                            if (r) a.appendChild(this._createSelectionElement(o, e[0], t[0], s - o + 1));
                                            else {
                                                var l = n === o ? e[0] : 0,
                                                    c = o === i ? t[0] : this._bufferService.cols;
                                                a.appendChild(this._createSelectionElement(o, l, c));
                                                var u = s - o - 1;
                                                if (a.appendChild(this._createSelectionElement(o + 1, 0, this._bufferService.cols, u)), o !== s) {
                                                    var f = i === s ? t[0] : this._bufferService.cols;
                                                    a.appendChild(this._createSelectionElement(s, 0, f))
                                                }
                                            }
                                            this._selectionContainer.appendChild(a)
                                        }
                                    }
                                }, t.prototype._createSelectionElement = function(e, t, r, n) {
                                    void 0 === n && (n = 1);
                                    var i = document.createElement("div");
                                    return i.style.height = n * this.dimensions.actualCellHeight + "px", i.style.top = e * this.dimensions.actualCellHeight + "px", i.style.left = t * this.dimensions.actualCellWidth + "px", i.style.width = this.dimensions.actualCellWidth * (r - t) + "px", i
                                }, t.prototype.onCursorMove = function() {}, t.prototype.onOptionsChanged = function() {
                                    this._updateDimensions(), this._injectCss()
                                }, t.prototype.clear = function() {
                                    for (var e = 0, t = this._rowElements; e < t.length; e++) t[e].innerText = ""
                                }, t.prototype.renderRows = function(e, t) {
                                    for (var r = this._bufferService.buffer.ybase + this._bufferService.buffer.y, n = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), i = this._optionsService.options.cursorBlink, o = e; o <= t; o++) {
                                        var s = this._rowElements[o];
                                        s.innerText = "";
                                        var a = o + this._bufferService.buffer.ydisp,
                                            l = this._bufferService.buffer.lines.get(a),
                                            c = this._optionsService.options.cursorStyle;
                                        s.appendChild(this._rowFactory.createRow(l, a === r, c, n, i, this.dimensions.actualCellWidth, this._bufferService.cols))
                                    }
                                }, Object.defineProperty(t.prototype, "_terminalSelector", {
                                    get: function() {
                                        return "." + _ + this._terminalClass
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.registerCharacterJoiner = function(e) {
                                    return -1
                                }, t.prototype.deregisterCharacterJoiner = function(e) {
                                    return !1
                                }, t.prototype._onLinkHover = function(e) {
                                    this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !0)
                                }, t.prototype._onLinkLeave = function(e) {
                                    this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !1)
                                }, t.prototype._setCellUnderline = function(e, t, r, n, i, o) {
                                    for (; e !== t || r !== n;) {
                                        var s = this._rowElements[r];
                                        if (!s) return;
                                        var a = s.children[e];
                                        a && (a.style.textDecoration = o ? "underline" : "none"), ++e >= i && (e = 0, r++)
                                    }
                                }, o([s(6, u.ICharSizeService), s(7, f.IOptionsService), s(8, f.IBufferService)], t)
                            }(c.Disposable);
                        t.DomRenderer = b
                    },
                    3787: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.DomRendererRowFactory = t.CURSOR_STYLE_UNDERLINE_CLASS = t.CURSOR_STYLE_BAR_CLASS = t.CURSOR_STYLE_BLOCK_CLASS = t.CURSOR_BLINK_CLASS = t.CURSOR_CLASS = t.UNDERLINE_CLASS = t.ITALIC_CLASS = t.DIM_CLASS = t.BOLD_CLASS = void 0;
                        var n = r(8803),
                            i = r(643),
                            o = r(511),
                            s = r(4774);
                        t.BOLD_CLASS = "xterm-bold", t.DIM_CLASS = "xterm-dim", t.ITALIC_CLASS = "xterm-italic", t.UNDERLINE_CLASS = "xterm-underline", t.CURSOR_CLASS = "xterm-cursor", t.CURSOR_BLINK_CLASS = "xterm-cursor-blink", t.CURSOR_STYLE_BLOCK_CLASS = "xterm-cursor-block", t.CURSOR_STYLE_BAR_CLASS = "xterm-cursor-bar", t.CURSOR_STYLE_UNDERLINE_CLASS = "xterm-cursor-underline";
                        var a = function() {
                            function e(e, t, r) {
                                this._document = e, this._optionsService = t, this._colors = r, this._workCell = new o.CellData
                            }
                            return e.prototype.setColors = function(e) {
                                this._colors = e
                            }, e.prototype.createRow = function(e, r, o, a, c, u, f) {
                                for (var h = this._document.createDocumentFragment(), d = 0, p = Math.min(e.length, f) - 1; p >= 0; p--)
                                    if (e.loadCell(p, this._workCell).getCode() !== i.NULL_CELL_CODE || r && p === a) {
                                        d = p + 1;
                                        break
                                    } for (p = 0; p < d; p++) {
                                    e.loadCell(p, this._workCell);
                                    var _ = this._workCell.getWidth();
                                    if (0 !== _) {
                                        var v = this._document.createElement("span");
                                        if (_ > 1 && (v.style.width = u * _ + "px"), r && p === a) switch (v.classList.add(t.CURSOR_CLASS), c && v.classList.add(t.CURSOR_BLINK_CLASS), o) {
                                            case "bar":
                                                v.classList.add(t.CURSOR_STYLE_BAR_CLASS);
                                                break;
                                            case "underline":
                                                v.classList.add(t.CURSOR_STYLE_UNDERLINE_CLASS);
                                                break;
                                            default:
                                                v.classList.add(t.CURSOR_STYLE_BLOCK_CLASS)
                                        }
                                        this._workCell.isBold() && v.classList.add(t.BOLD_CLASS), this._workCell.isItalic() && v.classList.add(t.ITALIC_CLASS), this._workCell.isDim() && v.classList.add(t.DIM_CLASS), this._workCell.isUnderline() && v.classList.add(t.UNDERLINE_CLASS), this._workCell.isInvisible() ? v.textContent = i.WHITESPACE_CELL_CHAR : v.textContent = this._workCell.getChars() || i.WHITESPACE_CELL_CHAR;
                                        var m = this._workCell.getFgColor(),
                                            g = this._workCell.getFgColorMode(),
                                            y = this._workCell.getBgColor(),
                                            b = this._workCell.getBgColorMode(),
                                            S = !!this._workCell.isInverse();
                                        if (S) {
                                            var C = m;
                                            m = y, y = C;
                                            var w = g;
                                            g = b, b = w
                                        }
                                        switch (g) {
                                            case 16777216:
                                            case 33554432:
                                                this._workCell.isBold() && m < 8 && this._optionsService.options.drawBoldTextInBrightColors && (m += 8), this._applyMinimumContrast(v, this._colors.background, this._colors.ansi[m]) || v.classList.add("xterm-fg-" + m);
                                                break;
                                            case 50331648:
                                                var E = s.rgba.toColor(m >> 16 & 255, m >> 8 & 255, 255 & m);
                                                this._applyMinimumContrast(v, this._colors.background, E) || this._addStyle(v, "color:#" + l(m.toString(16), "0", 6));
                                                break;
                                            case 0:
                                            default:
                                                this._applyMinimumContrast(v, this._colors.background, this._colors.foreground) || S && v.classList.add("xterm-fg-" + n.INVERTED_DEFAULT_COLOR)
                                        }
                                        switch (b) {
                                            case 16777216:
                                            case 33554432:
                                                v.classList.add("xterm-bg-" + y);
                                                break;
                                            case 50331648:
                                                this._addStyle(v, "background-color:#" + l(y.toString(16), "0", 6));
                                                break;
                                            case 0:
                                            default:
                                                S && v.classList.add("xterm-bg-" + n.INVERTED_DEFAULT_COLOR)
                                        }
                                        h.appendChild(v)
                                    }
                                }
                                return h
                            }, e.prototype._applyMinimumContrast = function(e, t, r) {
                                if (1 === this._optionsService.options.minimumContrastRatio) return !1;
                                var n = this._colors.contrastCache.getColor(this._workCell.bg, this._workCell.fg);
                                return void 0 === n && (n = s.color.ensureContrastRatio(t, r, this._optionsService.options.minimumContrastRatio), this._colors.contrastCache.setColor(this._workCell.bg, this._workCell.fg, null != n ? n : null)), !!n && (this._addStyle(e, "color:" + n.css), !0)
                            }, e.prototype._addStyle = function(e, t) {
                                e.setAttribute("style", "" + (e.getAttribute("style") || "") + t + ";")
                            }, e
                        }();

                        function l(e, t, r) {
                            for (; e.length < r;) e = t + e;
                            return e
                        }
                        t.DomRendererRowFactory = a
                    },
                    456: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.SelectionModel = void 0;
                        var r = function() {
                            function e(e) {
                                this._bufferService = e, this.isSelectAllActive = !1, this.selectionStartLength = 0
                            }
                            return e.prototype.clearSelection = function() {
                                this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = !1, this.selectionStartLength = 0
                            }, Object.defineProperty(e.prototype, "finalSelectionStart", {
                                get: function() {
                                    return this.isSelectAllActive ? [0, 0] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "finalSelectionEnd", {
                                get: function() {
                                    if (this.isSelectAllActive) return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
                                    if (this.selectionStart) {
                                        if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                                            var e = this.selectionStart[0] + this.selectionStartLength;
                                            return e > this._bufferService.cols ? [e % this._bufferService.cols, this.selectionStart[1] + Math.floor(e / this._bufferService.cols)] : [e, this.selectionStart[1]]
                                        }
                                        return this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1] ? [Math.max(this.selectionStart[0] + this.selectionStartLength, this.selectionEnd[0]), this.selectionEnd[1]] : this.selectionEnd
                                    }
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype.areSelectionValuesReversed = function() {
                                var e = this.selectionStart,
                                    t = this.selectionEnd;
                                return !(!e || !t) && (e[1] > t[1] || e[1] === t[1] && e[0] > t[0])
                            }, e.prototype.onTrim = function(e) {
                                return this.selectionStart && (this.selectionStart[1] -= e), this.selectionEnd && (this.selectionEnd[1] -= e), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), !0) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), !1)
                            }, e
                        }();
                        t.SelectionModel = r
                    },
                    428: function(e, t, r) {
                        var n = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            i = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CharSizeService = void 0;
                        var o = r(2585),
                            s = r(8460),
                            a = function() {
                                function e(e, t, r) {
                                    this._optionsService = r, this.width = 0, this.height = 0, this._onCharSizeChange = new s.EventEmitter, this._measureStrategy = new l(e, t, this._optionsService)
                                }
                                return Object.defineProperty(e.prototype, "hasValidSize", {
                                    get: function() {
                                        return this.width > 0 && this.height > 0
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onCharSizeChange", {
                                    get: function() {
                                        return this._onCharSizeChange.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.measure = function() {
                                    var e = this._measureStrategy.measure();
                                    e.width === this.width && e.height === this.height || (this.width = e.width, this.height = e.height, this._onCharSizeChange.fire())
                                }, n([i(2, o.IOptionsService)], e)
                            }();
                        t.CharSizeService = a;
                        var l = function() {
                            function e(e, t, r) {
                                this._document = e, this._parentElement = t, this._optionsService = r, this._result = {
                                    width: 0,
                                    height: 0
                                }, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W", this._measureElement.setAttribute("aria-hidden", "true"), this._parentElement.appendChild(this._measureElement)
                            }
                            return e.prototype.measure = function() {
                                this._measureElement.style.fontFamily = this._optionsService.options.fontFamily, this._measureElement.style.fontSize = this._optionsService.options.fontSize + "px";
                                var e = this._measureElement.getBoundingClientRect();
                                return 0 !== e.width && 0 !== e.height && (this._result.width = e.width, this._result.height = Math.ceil(e.height)), this._result
                            }, e
                        }()
                    },
                    5114: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CoreBrowserService = void 0;
                        var r = function() {
                            function e(e) {
                                this._textarea = e
                            }
                            return Object.defineProperty(e.prototype, "isFocused", {
                                get: function() {
                                    return (this._textarea.getRootNode ? this._textarea.getRootNode() : document).activeElement === this._textarea && document.hasFocus()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e
                        }();
                        t.CoreBrowserService = r
                    },
                    8934: function(e, t, r) {
                        var n = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            i = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.MouseService = void 0;
                        var o = r(4725),
                            s = r(9806),
                            a = function() {
                                function e(e, t) {
                                    this._renderService = e, this._charSizeService = t
                                }
                                return e.prototype.getCoords = function(e, t, r, n, i) {
                                    return s.getCoords(e, t, r, n, this._charSizeService.hasValidSize, this._renderService.dimensions.actualCellWidth, this._renderService.dimensions.actualCellHeight, i)
                                }, e.prototype.getRawByteCoords = function(e, t, r, n) {
                                    var i = this.getCoords(e, t, r, n);
                                    return s.getRawByteCoords(i)
                                }, n([i(0, o.IRenderService), i(1, o.ICharSizeService)], e)
                            }();
                        t.MouseService = a
                    },
                    3230: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                                return (n = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(e, t) {
                                        e.__proto__ = t
                                    } || function(e, t) {
                                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                    })(e, t)
                            }, function(e, t) {
                                function r() {
                                    this.constructor = e
                                }
                                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                            }),
                            o = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            s = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.RenderService = void 0;
                        var a = r(6193),
                            l = r(8460),
                            c = r(844),
                            u = r(5596),
                            f = r(3656),
                            h = r(2585),
                            d = r(4725),
                            p = function(e) {
                                function t(t, r, n, i, o, s) {
                                    var c = e.call(this) || this;
                                    if (c._renderer = t, c._rowCount = r, c._charSizeService = o, c._isPaused = !1, c._needsFullRefresh = !1, c._isNextRenderRedrawOnly = !0, c._needsSelectionRefresh = !1, c._canvasWidth = 0, c._canvasHeight = 0, c._selectionState = {
                                            start: void 0,
                                            end: void 0,
                                            columnSelectMode: !1
                                        }, c._onDimensionsChange = new l.EventEmitter, c._onRender = new l.EventEmitter, c._onRefreshRequest = new l.EventEmitter, c.register({
                                            dispose: function() {
                                                return c._renderer.dispose()
                                            }
                                        }), c._renderDebouncer = new a.RenderDebouncer((function(e, t) {
                                            return c._renderRows(e, t)
                                        })), c.register(c._renderDebouncer), c._screenDprMonitor = new u.ScreenDprMonitor, c._screenDprMonitor.setListener((function() {
                                            return c.onDevicePixelRatioChange()
                                        })), c.register(c._screenDprMonitor), c.register(s.onResize((function(e) {
                                            return c._fullRefresh()
                                        }))), c.register(i.onOptionChange((function() {
                                            return c._renderer.onOptionsChanged()
                                        }))), c.register(c._charSizeService.onCharSizeChange((function() {
                                            return c.onCharSizeChanged()
                                        }))), c._renderer.onRequestRedraw((function(e) {
                                            return c.refreshRows(e.start, e.end, !0)
                                        })), c.register(f.addDisposableDomListener(window, "resize", (function() {
                                            return c.onDevicePixelRatioChange()
                                        }))), "IntersectionObserver" in window) {
                                        var h = new IntersectionObserver((function(e) {
                                            return c._onIntersectionChange(e[e.length - 1])
                                        }), {
                                            threshold: 0
                                        });
                                        h.observe(n), c.register({
                                            dispose: function() {
                                                return h.disconnect()
                                            }
                                        })
                                    }
                                    return c
                                }
                                return i(t, e), Object.defineProperty(t.prototype, "onDimensionsChange", {
                                    get: function() {
                                        return this._onDimensionsChange.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onRenderedBufferChange", {
                                    get: function() {
                                        return this._onRender.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onRefreshRequest", {
                                    get: function() {
                                        return this._onRefreshRequest.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "dimensions", {
                                    get: function() {
                                        return this._renderer.dimensions
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype._onIntersectionChange = function(e) {
                                    this._isPaused = void 0 === e.isIntersecting ? 0 === e.intersectionRatio : !e.isIntersecting, this._isPaused || this._charSizeService.hasValidSize || this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = !1)
                                }, t.prototype.refreshRows = function(e, t, r) {
                                    void 0 === r && (r = !1), this._isPaused ? this._needsFullRefresh = !0 : (r || (this._isNextRenderRedrawOnly = !1), this._renderDebouncer.refresh(e, t, this._rowCount))
                                }, t.prototype._renderRows = function(e, t) {
                                    this._renderer.renderRows(e, t), this._needsSelectionRefresh && (this._renderer.onSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = !1), this._isNextRenderRedrawOnly || this._onRender.fire({
                                        start: e,
                                        end: t
                                    }), this._isNextRenderRedrawOnly = !0
                                }, t.prototype.resize = function(e, t) {
                                    this._rowCount = t, this._fireOnCanvasResize()
                                }, t.prototype.changeOptions = function() {
                                    this._renderer.onOptionsChanged(), this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize()
                                }, t.prototype._fireOnCanvasResize = function() {
                                    this._renderer.dimensions.canvasWidth === this._canvasWidth && this._renderer.dimensions.canvasHeight === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.dimensions)
                                }, t.prototype.dispose = function() {
                                    e.prototype.dispose.call(this)
                                }, t.prototype.setRenderer = function(e) {
                                    var t = this;
                                    this._renderer.dispose(), this._renderer = e, this._renderer.onRequestRedraw((function(e) {
                                        return t.refreshRows(e.start, e.end, !0)
                                    })), this._needsSelectionRefresh = !0, this._fullRefresh()
                                }, t.prototype._fullRefresh = function() {
                                    this._isPaused ? this._needsFullRefresh = !0 : this.refreshRows(0, this._rowCount - 1)
                                }, t.prototype.setColors = function(e) {
                                    this._renderer.setColors(e), this._fullRefresh()
                                }, t.prototype.onDevicePixelRatioChange = function() {
                                    this._renderer.onDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1)
                                }, t.prototype.onResize = function(e, t) {
                                    this._renderer.onResize(e, t), this._fullRefresh()
                                }, t.prototype.onCharSizeChanged = function() {
                                    this._renderer.onCharSizeChanged()
                                }, t.prototype.onBlur = function() {
                                    this._renderer.onBlur()
                                }, t.prototype.onFocus = function() {
                                    this._renderer.onFocus()
                                }, t.prototype.onSelectionChanged = function(e, t, r) {
                                    this._selectionState.start = e, this._selectionState.end = t, this._selectionState.columnSelectMode = r, this._renderer.onSelectionChanged(e, t, r)
                                }, t.prototype.onCursorMove = function() {
                                    this._renderer.onCursorMove()
                                }, t.prototype.clear = function() {
                                    this._renderer.clear()
                                }, t.prototype.registerCharacterJoiner = function(e) {
                                    return this._renderer.registerCharacterJoiner(e)
                                }, t.prototype.deregisterCharacterJoiner = function(e) {
                                    return this._renderer.deregisterCharacterJoiner(e)
                                }, o([s(3, h.IOptionsService), s(4, d.ICharSizeService), s(5, h.IBufferService)], t)
                            }(c.Disposable);
                        t.RenderService = p
                    },
                    9312: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                                return (n = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(e, t) {
                                        e.__proto__ = t
                                    } || function(e, t) {
                                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                    })(e, t)
                            }, function(e, t) {
                                function r() {
                                    this.constructor = e
                                }
                                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                            }),
                            o = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            s = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.SelectionService = void 0;
                        var a = r(6114),
                            l = r(456),
                            c = r(511),
                            u = r(8460),
                            f = r(4725),
                            h = r(2585),
                            d = r(9806),
                            p = r(9504),
                            _ = r(844),
                            v = String.fromCharCode(160),
                            m = new RegExp(v, "g"),
                            g = function(e) {
                                function t(t, r, n, i, o, s, a) {
                                    var f = e.call(this) || this;
                                    return f._element = t, f._screenElement = r, f._bufferService = n, f._coreService = i, f._mouseService = o, f._optionsService = s, f._renderService = a, f._dragScrollAmount = 0, f._enabled = !0, f._workCell = new c.CellData, f._mouseDownTimeStamp = 0, f._oldHasSelection = !1, f._oldSelectionStart = void 0, f._oldSelectionEnd = void 0, f._onLinuxMouseSelection = f.register(new u.EventEmitter), f._onRedrawRequest = f.register(new u.EventEmitter), f._onSelectionChange = f.register(new u.EventEmitter), f._onRequestScrollLines = f.register(new u.EventEmitter), f._mouseMoveListener = function(e) {
                                        return f._onMouseMove(e)
                                    }, f._mouseUpListener = function(e) {
                                        return f._onMouseUp(e)
                                    }, f._coreService.onUserInput((function() {
                                        f.hasSelection && f.clearSelection()
                                    })), f._trimListener = f._bufferService.buffer.lines.onTrim((function(e) {
                                        return f._onTrim(e)
                                    })), f.register(f._bufferService.buffers.onBufferActivate((function(e) {
                                        return f._onBufferActivate(e)
                                    }))), f.enable(), f._model = new l.SelectionModel(f._bufferService), f._activeSelectionMode = 0, f
                                }
                                return i(t, e), Object.defineProperty(t.prototype, "onLinuxMouseSelection", {
                                    get: function() {
                                        return this._onLinuxMouseSelection.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onRequestRedraw", {
                                    get: function() {
                                        return this._onRedrawRequest.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onSelectionChange", {
                                    get: function() {
                                        return this._onSelectionChange.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onRequestScrollLines", {
                                    get: function() {
                                        return this._onRequestScrollLines.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.dispose = function() {
                                    this._removeMouseDownListeners()
                                }, t.prototype.reset = function() {
                                    this.clearSelection()
                                }, t.prototype.disable = function() {
                                    this.clearSelection(), this._enabled = !1
                                }, t.prototype.enable = function() {
                                    this._enabled = !0
                                }, Object.defineProperty(t.prototype, "selectionStart", {
                                    get: function() {
                                        return this._model.finalSelectionStart
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "selectionEnd", {
                                    get: function() {
                                        return this._model.finalSelectionEnd
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "hasSelection", {
                                    get: function() {
                                        var e = this._model.finalSelectionStart,
                                            t = this._model.finalSelectionEnd;
                                        return !(!e || !t || e[0] === t[0] && e[1] === t[1])
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "selectionText", {
                                    get: function() {
                                        var e = this._model.finalSelectionStart,
                                            t = this._model.finalSelectionEnd;
                                        if (!e || !t) return "";
                                        var r = this._bufferService.buffer,
                                            n = [];
                                        if (3 === this._activeSelectionMode) {
                                            if (e[0] === t[0]) return "";
                                            for (var i = e[1]; i <= t[1]; i++) {
                                                var o = r.translateBufferLineToString(i, !0, e[0], t[0]);
                                                n.push(o)
                                            }
                                        } else {
                                            var s = e[1] === t[1] ? t[0] : void 0;
                                            for (n.push(r.translateBufferLineToString(e[1], !0, e[0], s)), i = e[1] + 1; i <= t[1] - 1; i++) {
                                                var l = r.lines.get(i);
                                                o = r.translateBufferLineToString(i, !0), l && l.isWrapped ? n[n.length - 1] += o : n.push(o)
                                            }
                                            e[1] !== t[1] && (l = r.lines.get(t[1]), o = r.translateBufferLineToString(t[1], !0, 0, t[0]), l && l.isWrapped ? n[n.length - 1] += o : n.push(o))
                                        }
                                        return n.map((function(e) {
                                            return e.replace(m, " ")
                                        })).join(a.isWindows ? "\r\n" : "\n")
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.clearSelection = function() {
                                    this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire()
                                }, t.prototype.refresh = function(e) {
                                    var t = this;
                                    this._refreshAnimationFrame || (this._refreshAnimationFrame = window.requestAnimationFrame((function() {
                                        return t._refresh()
                                    }))), a.isLinux && e && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText)
                                }, t.prototype._refresh = function() {
                                    this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({
                                        start: this._model.finalSelectionStart,
                                        end: this._model.finalSelectionEnd,
                                        columnSelectMode: 3 === this._activeSelectionMode
                                    })
                                }, t.prototype._isClickInSelection = function(e) {
                                    var t = this._getMouseBufferCoords(e),
                                        r = this._model.finalSelectionStart,
                                        n = this._model.finalSelectionEnd;
                                    return !!(r && n && t) && this._areCoordsInSelection(t, r, n)
                                }, t.prototype._areCoordsInSelection = function(e, t, r) {
                                    return e[1] > t[1] && e[1] < r[1] || t[1] === r[1] && e[1] === t[1] && e[0] >= t[0] && e[0] < r[0] || t[1] < r[1] && e[1] === r[1] && e[0] < r[0] || t[1] < r[1] && e[1] === t[1] && e[0] >= t[0]
                                }, t.prototype._selectWordAtCursor = function(e) {
                                    var t = this._getMouseBufferCoords(e);
                                    t && (this._selectWordAt(t, !1), this._model.selectionEnd = void 0, this.refresh(!0))
                                }, t.prototype.selectAll = function() {
                                    this._model.isSelectAllActive = !0, this.refresh(), this._onSelectionChange.fire()
                                }, t.prototype.selectLines = function(e, t) {
                                    this._model.clearSelection(), e = Math.max(e, 0), t = Math.min(t, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, e], this._model.selectionEnd = [this._bufferService.cols, t], this.refresh(), this._onSelectionChange.fire()
                                }, t.prototype._onTrim = function(e) {
                                    this._model.onTrim(e) && this.refresh()
                                }, t.prototype._getMouseBufferCoords = function(e) {
                                    var t = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows, !0);
                                    if (t) return t[0]--, t[1]--, t[1] += this._bufferService.buffer.ydisp, t
                                }, t.prototype._getMouseEventScrollAmount = function(e) {
                                    var t = d.getCoordsRelativeToElement(e, this._screenElement)[1],
                                        r = this._renderService.dimensions.canvasHeight;
                                    return t >= 0 && t <= r ? 0 : (t > r && (t -= r), t = Math.min(Math.max(t, -50), 50), (t /= 50) / Math.abs(t) + Math.round(14 * t))
                                }, t.prototype.shouldForceSelection = function(e) {
                                    return a.isMac ? e.altKey && this._optionsService.options.macOptionClickForcesSelection : e.shiftKey
                                }, t.prototype.onMouseDown = function(e) {
                                    if (this._mouseDownTimeStamp = e.timeStamp, (2 !== e.button || !this.hasSelection) && 0 === e.button) {
                                        if (!this._enabled) {
                                            if (!this.shouldForceSelection(e)) return;
                                            e.stopPropagation()
                                        }
                                        e.preventDefault(), this._dragScrollAmount = 0, this._enabled && e.shiftKey ? this._onIncrementalClick(e) : 1 === e.detail ? this._onSingleClick(e) : 2 === e.detail ? this._onDoubleClick(e) : 3 === e.detail && this._onTripleClick(e), this._addMouseDownListeners(), this.refresh(!0)
                                    }
                                }, t.prototype._addMouseDownListeners = function() {
                                    var e = this;
                                    this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = window.setInterval((function() {
                                        return e._dragScroll()
                                    }), 50)
                                }, t.prototype._removeMouseDownListeners = function() {
                                    this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0
                                }, t.prototype._onIncrementalClick = function(e) {
                                    this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e))
                                }, t.prototype._onSingleClick = function(e) {
                                    if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = !1, this._activeSelectionMode = this.shouldColumnSelect(e) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e), this._model.selectionStart) {
                                        this._model.selectionEnd = void 0;
                                        var t = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
                                        t && t.length !== this._model.selectionStart[0] && 0 === t.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++
                                    }
                                }, t.prototype._onDoubleClick = function(e) {
                                    var t = this._getMouseBufferCoords(e);
                                    t && (this._activeSelectionMode = 1, this._selectWordAt(t, !0))
                                }, t.prototype._onTripleClick = function(e) {
                                    var t = this._getMouseBufferCoords(e);
                                    t && (this._activeSelectionMode = 2, this._selectLineAt(t[1]))
                                }, t.prototype.shouldColumnSelect = function(e) {
                                    return e.altKey && !(a.isMac && this._optionsService.options.macOptionClickForcesSelection)
                                }, t.prototype._onMouseMove = function(e) {
                                    if (e.stopImmediatePropagation(), this._model.selectionStart) {
                                        var t = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
                                        if (this._model.selectionEnd = this._getMouseBufferCoords(e), this._model.selectionEnd) {
                                            2 === this._activeSelectionMode ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
                                            var r = this._bufferService.buffer;
                                            if (this._model.selectionEnd[1] < r.lines.length) {
                                                var n = r.lines.get(this._model.selectionEnd[1]);
                                                n && 0 === n.hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0]++
                                            }
                                            t && t[0] === this._model.selectionEnd[0] && t[1] === this._model.selectionEnd[1] || this.refresh(!0)
                                        } else this.refresh(!0)
                                    }
                                }, t.prototype._dragScroll = function() {
                                    if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
                                        this._onRequestScrollLines.fire({
                                            amount: this._dragScrollAmount,
                                            suppressScrollEvent: !1
                                        });
                                        var e = this._bufferService.buffer;
                                        this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e.ydisp + this._bufferService.rows, e.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e.ydisp), this.refresh()
                                    }
                                }, t.prototype._onMouseUp = function(e) {
                                    var t = e.timeStamp - this._mouseDownTimeStamp;
                                    if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t < 500 && e.altKey && this._optionsService.getOption("altClickMovesCursor")) {
                                        if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
                                            var r = this._mouseService.getCoords(e, this._element, this._bufferService.cols, this._bufferService.rows, !1);
                                            if (r && void 0 !== r[0] && void 0 !== r[1]) {
                                                var n = p.moveToCellSequence(r[0] - 1, r[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                                                this._coreService.triggerDataEvent(n, !0)
                                            }
                                        }
                                    } else this._fireEventIfSelectionChanged()
                                }, t.prototype._fireEventIfSelectionChanged = function() {
                                    var e = this._model.finalSelectionStart,
                                        t = this._model.finalSelectionEnd,
                                        r = !(!e || !t || e[0] === t[0] && e[1] === t[1]);
                                    r ? e && t && (this._oldSelectionStart && this._oldSelectionEnd && e[0] === this._oldSelectionStart[0] && e[1] === this._oldSelectionStart[1] && t[0] === this._oldSelectionEnd[0] && t[1] === this._oldSelectionEnd[1] || this._fireOnSelectionChange(e, t, r)) : this._oldHasSelection && this._fireOnSelectionChange(e, t, r)
                                }, t.prototype._fireOnSelectionChange = function(e, t, r) {
                                    this._oldSelectionStart = e, this._oldSelectionEnd = t, this._oldHasSelection = r, this._onSelectionChange.fire()
                                }, t.prototype._onBufferActivate = function(e) {
                                    var t = this;
                                    this.clearSelection(), this._trimListener.dispose(), this._trimListener = e.activeBuffer.lines.onTrim((function(e) {
                                        return t._onTrim(e)
                                    }))
                                }, t.prototype._convertViewportColToCharacterIndex = function(e, t) {
                                    for (var r = t[0], n = 0; t[0] >= n; n++) {
                                        var i = e.loadCell(n, this._workCell).getChars().length;
                                        0 === this._workCell.getWidth() ? r-- : i > 1 && t[0] !== n && (r += i - 1)
                                    }
                                    return r
                                }, t.prototype.setSelection = function(e, t, r) {
                                    this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [e, t], this._model.selectionStartLength = r, this.refresh()
                                }, t.prototype.rightClickSelect = function(e) {
                                    this._isClickInSelection(e) || (this._selectWordAtCursor(e), this._fireEventIfSelectionChanged())
                                }, t.prototype._getWordAt = function(e, t, r, n) {
                                    if (void 0 === r && (r = !0), void 0 === n && (n = !0), !(e[0] >= this._bufferService.cols)) {
                                        var i = this._bufferService.buffer,
                                            o = i.lines.get(e[1]);
                                        if (o) {
                                            var s = i.translateBufferLineToString(e[1], !1),
                                                a = this._convertViewportColToCharacterIndex(o, e),
                                                l = a,
                                                c = e[0] - a,
                                                u = 0,
                                                f = 0,
                                                h = 0,
                                                d = 0;
                                            if (" " === s.charAt(a)) {
                                                for (; a > 0 && " " === s.charAt(a - 1);) a--;
                                                for (; l < s.length && " " === s.charAt(l + 1);) l++
                                            } else {
                                                var p = e[0],
                                                    _ = e[0];
                                                0 === o.getWidth(p) && (u++, p--), 2 === o.getWidth(_) && (f++, _++);
                                                var v = o.getString(_).length;
                                                for (v > 1 && (d += v - 1, l += v - 1); p > 0 && a > 0 && !this._isCharWordSeparator(o.loadCell(p - 1, this._workCell));) {
                                                    o.loadCell(p - 1, this._workCell);
                                                    var m = this._workCell.getChars().length;
                                                    0 === this._workCell.getWidth() ? (u++, p--) : m > 1 && (h += m - 1, a -= m - 1), a--, p--
                                                }
                                                for (; _ < o.length && l + 1 < s.length && !this._isCharWordSeparator(o.loadCell(_ + 1, this._workCell));) {
                                                    o.loadCell(_ + 1, this._workCell);
                                                    var g = this._workCell.getChars().length;
                                                    2 === this._workCell.getWidth() ? (f++, _++) : g > 1 && (d += g - 1, l += g - 1), l++, _++
                                                }
                                            }
                                            l++;
                                            var y = a + c - u + h,
                                                b = Math.min(this._bufferService.cols, l - a + u + f - h - d);
                                            if (t || "" !== s.slice(a, l).trim()) {
                                                if (r && 0 === y && 32 !== o.getCodePoint(0)) {
                                                    var S = i.lines.get(e[1] - 1);
                                                    if (S && o.isWrapped && 32 !== S.getCodePoint(this._bufferService.cols - 1)) {
                                                        var C = this._getWordAt([this._bufferService.cols - 1, e[1] - 1], !1, !0, !1);
                                                        if (C) {
                                                            var w = this._bufferService.cols - C.start;
                                                            y -= w, b += w
                                                        }
                                                    }
                                                }
                                                if (n && y + b === this._bufferService.cols && 32 !== o.getCodePoint(this._bufferService.cols - 1)) {
                                                    var E = i.lines.get(e[1] + 1);
                                                    if (E && E.isWrapped && 32 !== E.getCodePoint(0)) {
                                                        var x = this._getWordAt([0, e[1] + 1], !1, !1, !0);
                                                        x && (b += x.length)
                                                    }
                                                }
                                                return {
                                                    start: y,
                                                    length: b
                                                }
                                            }
                                        }
                                    }
                                }, t.prototype._selectWordAt = function(e, t) {
                                    var r = this._getWordAt(e, t);
                                    if (r) {
                                        for (; r.start < 0;) r.start += this._bufferService.cols, e[1]--;
                                        this._model.selectionStart = [r.start, e[1]], this._model.selectionStartLength = r.length
                                    }
                                }, t.prototype._selectToWordAt = function(e) {
                                    var t = this._getWordAt(e, !0);
                                    if (t) {
                                        for (var r = e[1]; t.start < 0;) t.start += this._bufferService.cols, r--;
                                        if (!this._model.areSelectionValuesReversed())
                                            for (; t.start + t.length > this._bufferService.cols;) t.length -= this._bufferService.cols, r++;
                                        this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? t.start : t.start + t.length, r]
                                    }
                                }, t.prototype._isCharWordSeparator = function(e) {
                                    return 0 !== e.getWidth() && this._optionsService.options.wordSeparator.indexOf(e.getChars()) >= 0
                                }, t.prototype._selectLineAt = function(e) {
                                    var t = this._bufferService.buffer.getWrappedRangeForLine(e);
                                    this._model.selectionStart = [0, t.first], this._model.selectionEnd = [this._bufferService.cols, t.last], this._model.selectionStartLength = 0
                                }, o([s(2, h.IBufferService), s(3, h.ICoreService), s(4, f.IMouseService), s(5, h.IOptionsService), s(6, f.IRenderService)], t)
                            }(_.Disposable);
                        t.SelectionService = g
                    },
                    4725: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.ISoundService = t.ISelectionService = t.IRenderService = t.IMouseService = t.ICoreBrowserService = t.ICharSizeService = void 0;
                        var n = r(8343);
                        t.ICharSizeService = n.createDecorator("CharSizeService"), t.ICoreBrowserService = n.createDecorator("CoreBrowserService"), t.IMouseService = n.createDecorator("MouseService"), t.IRenderService = n.createDecorator("RenderService"), t.ISelectionService = n.createDecorator("SelectionService"), t.ISoundService = n.createDecorator("SoundService")
                    },
                    357: function(e, t, r) {
                        var n = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            i = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.SoundService = void 0;
                        var o = r(2585),
                            s = function() {
                                function e(e) {
                                    this._optionsService = e
                                }
                                return Object.defineProperty(e, "audioContext", {
                                    get: function() {
                                        if (!e._audioContext) {
                                            var t = window.AudioContext || window.webkitAudioContext;
                                            if (!t) return console.warn("Web Audio API is not supported by this browser. Consider upgrading to the latest version"), null;
                                            e._audioContext = new t
                                        }
                                        return e._audioContext
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.playBellSound = function() {
                                    var t = e.audioContext;
                                    if (t) {
                                        var r = t.createBufferSource();
                                        t.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._optionsService.options.bellSound)), (function(e) {
                                            r.buffer = e, r.connect(t.destination), r.start(0)
                                        }))
                                    }
                                }, e.prototype._base64ToArrayBuffer = function(e) {
                                    for (var t = window.atob(e), r = t.length, n = new Uint8Array(r), i = 0; i < r; i++) n[i] = t.charCodeAt(i);
                                    return n.buffer
                                }, e.prototype._removeMimeType = function(e) {
                                    return e.split(",")[1]
                                }, e = n([i(0, o.IOptionsService)], e)
                            }();
                        t.SoundService = s
                    },
                    6349: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CircularList = void 0;
                        var n = r(8460),
                            i = function() {
                                function e(e) {
                                    this._maxLength = e, this.onDeleteEmitter = new n.EventEmitter, this.onInsertEmitter = new n.EventEmitter, this.onTrimEmitter = new n.EventEmitter, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0
                                }
                                return Object.defineProperty(e.prototype, "onDelete", {
                                    get: function() {
                                        return this.onDeleteEmitter.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onInsert", {
                                    get: function() {
                                        return this.onInsertEmitter.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "onTrim", {
                                    get: function() {
                                        return this.onTrimEmitter.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "maxLength", {
                                    get: function() {
                                        return this._maxLength
                                    },
                                    set: function(e) {
                                        if (this._maxLength !== e) {
                                            for (var t = new Array(e), r = 0; r < Math.min(e, this.length); r++) t[r] = this._array[this._getCyclicIndex(r)];
                                            this._array = t, this._maxLength = e, this._startIndex = 0
                                        }
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "length", {
                                    get: function() {
                                        return this._length
                                    },
                                    set: function(e) {
                                        if (e > this._length)
                                            for (var t = this._length; t < e; t++) this._array[t] = void 0;
                                        this._length = e
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.get = function(e) {
                                    return this._array[this._getCyclicIndex(e)]
                                }, e.prototype.set = function(e, t) {
                                    this._array[this._getCyclicIndex(e)] = t
                                }, e.prototype.push = function(e) {
                                    this._array[this._getCyclicIndex(this._length)] = e, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++
                                }, e.prototype.recycle = function() {
                                    if (this._length !== this._maxLength) throw new Error("Can only recycle when the buffer is full");
                                    return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)]
                                }, Object.defineProperty(e.prototype, "isFull", {
                                    get: function() {
                                        return this._length === this._maxLength
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.pop = function() {
                                    return this._array[this._getCyclicIndex(this._length-- - 1)]
                                }, e.prototype.splice = function(e, t) {
                                    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                                    if (t) {
                                        for (var i = e; i < this._length - t; i++) this._array[this._getCyclicIndex(i)] = this._array[this._getCyclicIndex(i + t)];
                                        this._length -= t, this.onDeleteEmitter.fire({
                                            index: e,
                                            amount: t
                                        })
                                    }
                                    for (i = this._length - 1; i >= e; i--) this._array[this._getCyclicIndex(i + r.length)] = this._array[this._getCyclicIndex(i)];
                                    for (i = 0; i < r.length; i++) this._array[this._getCyclicIndex(e + i)] = r[i];
                                    if (r.length && this.onInsertEmitter.fire({
                                            index: e,
                                            amount: r.length
                                        }), this._length + r.length > this._maxLength) {
                                        var o = this._length + r.length - this._maxLength;
                                        this._startIndex += o, this._length = this._maxLength, this.onTrimEmitter.fire(o)
                                    } else this._length += r.length
                                }, e.prototype.trimStart = function(e) {
                                    e > this._length && (e = this._length), this._startIndex += e, this._length -= e, this.onTrimEmitter.fire(e)
                                }, e.prototype.shiftElements = function(e, t, r) {
                                    if (!(t <= 0)) {
                                        if (e < 0 || e >= this._length) throw new Error("start argument out of range");
                                        if (e + r < 0) throw new Error("Cannot shift elements in list beyond index 0");
                                        if (r > 0) {
                                            for (var n = t - 1; n >= 0; n--) this.set(e + n + r, this.get(e + n));
                                            var i = e + t + r - this._length;
                                            if (i > 0)
                                                for (this._length += i; this._length > this._maxLength;) this._length--, this._startIndex++, this.onTrimEmitter.fire(1)
                                        } else
                                            for (n = 0; n < t; n++) this.set(e + n + r, this.get(e + n))
                                    }
                                }, e.prototype._getCyclicIndex = function(e) {
                                    return (this._startIndex + e) % this._maxLength
                                }, e
                            }();
                        t.CircularList = i
                    },
                    1439: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.clone = void 0, t.clone = function e(t, r) {
                            if (void 0 === r && (r = 5), "object" != typeof t) return t;
                            var n = Array.isArray(t) ? [] : {};
                            for (var i in t) n[i] = r <= 1 ? t[i] : t[i] ? e(t[i], r - 1) : t[i];
                            return n
                        }
                    },
                    8969: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CoreTerminal = void 0;
                        var o = r(844),
                            s = r(2585),
                            a = r(4348),
                            l = r(7866),
                            c = r(744),
                            u = r(7302),
                            f = r(6975),
                            h = r(8460),
                            d = r(1753),
                            p = r(3730),
                            _ = r(1480),
                            v = r(7994),
                            m = r(9282),
                            g = r(5435),
                            y = r(5981),
                            b = function(e) {
                                function t(t) {
                                    var r = e.call(this) || this;
                                    return r._onBinary = new h.EventEmitter, r._onData = new h.EventEmitter, r._onLineFeed = new h.EventEmitter, r._onResize = new h.EventEmitter, r._onScroll = new h.EventEmitter, r._instantiationService = new a.InstantiationService, r.optionsService = new u.OptionsService(t), r._instantiationService.setService(s.IOptionsService, r.optionsService), r._bufferService = r.register(r._instantiationService.createInstance(c.BufferService)), r._instantiationService.setService(s.IBufferService, r._bufferService), r._logService = r._instantiationService.createInstance(l.LogService), r._instantiationService.setService(s.ILogService, r._logService), r._coreService = r.register(r._instantiationService.createInstance(f.CoreService, (function() {
                                        return r.scrollToBottom()
                                    }))), r._instantiationService.setService(s.ICoreService, r._coreService), r._coreMouseService = r._instantiationService.createInstance(d.CoreMouseService), r._instantiationService.setService(s.ICoreMouseService, r._coreMouseService), r._dirtyRowService = r._instantiationService.createInstance(p.DirtyRowService), r._instantiationService.setService(s.IDirtyRowService, r._dirtyRowService), r.unicodeService = r._instantiationService.createInstance(_.UnicodeService), r._instantiationService.setService(s.IUnicodeService, r.unicodeService), r._charsetService = r._instantiationService.createInstance(v.CharsetService), r._instantiationService.setService(s.ICharsetService, r._charsetService), r._inputHandler = new g.InputHandler(r._bufferService, r._charsetService, r._coreService, r._dirtyRowService, r._logService, r.optionsService, r._coreMouseService, r.unicodeService), r.register(h.forwardEvent(r._inputHandler.onLineFeed, r._onLineFeed)), r.register(r._inputHandler), r.register(h.forwardEvent(r._bufferService.onResize, r._onResize)), r.register(h.forwardEvent(r._coreService.onData, r._onData)), r.register(h.forwardEvent(r._coreService.onBinary, r._onBinary)), r.register(r.optionsService.onOptionChange((function(e) {
                                        return r._updateOptions(e)
                                    }))), r._writeBuffer = new y.WriteBuffer((function(e) {
                                        return r._inputHandler.parse(e)
                                    })), r
                                }
                                return i(t, e), Object.defineProperty(t.prototype, "onBinary", {
                                    get: function() {
                                        return this._onBinary.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onData", {
                                    get: function() {
                                        return this._onData.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onLineFeed", {
                                    get: function() {
                                        return this._onLineFeed.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onResize", {
                                    get: function() {
                                        return this._onResize.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onScroll", {
                                    get: function() {
                                        return this._onScroll.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "cols", {
                                    get: function() {
                                        return this._bufferService.cols
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "rows", {
                                    get: function() {
                                        return this._bufferService.rows
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "buffers", {
                                    get: function() {
                                        return this._bufferService.buffers
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.dispose = function() {
                                    var t;
                                    this._isDisposed || (e.prototype.dispose.call(this), null === (t = this._windowsMode) || void 0 === t || t.dispose(), this._windowsMode = void 0)
                                }, t.prototype.write = function(e, t) {
                                    this._writeBuffer.write(e, t)
                                }, t.prototype.writeSync = function(e) {
                                    this._writeBuffer.writeSync(e)
                                }, t.prototype.resize = function(e, t) {
                                    isNaN(e) || isNaN(t) || (e = Math.max(e, c.MINIMUM_COLS), t = Math.max(t, c.MINIMUM_ROWS), this._bufferService.resize(e, t))
                                }, t.prototype.scroll = function(e, t) {
                                    void 0 === t && (t = !1);
                                    var r, n = this._bufferService.buffer;
                                    (r = this._cachedBlankLine) && r.length === this.cols && r.getFg(0) === e.fg && r.getBg(0) === e.bg || (r = n.getBlankLine(e, t), this._cachedBlankLine = r), r.isWrapped = t;
                                    var i = n.ybase + n.scrollTop,
                                        o = n.ybase + n.scrollBottom;
                                    if (0 === n.scrollTop) {
                                        var s = n.lines.isFull;
                                        o === n.lines.length - 1 ? s ? n.lines.recycle().copyFrom(r) : n.lines.push(r.clone()) : n.lines.splice(o + 1, 0, r.clone()), s ? this._bufferService.isUserScrolling && (n.ydisp = Math.max(n.ydisp - 1, 0)) : (n.ybase++, this._bufferService.isUserScrolling || n.ydisp++)
                                    } else {
                                        var a = o - i + 1;
                                        n.lines.shiftElements(i + 1, a - 1, -1), n.lines.set(o, r.clone())
                                    }
                                    this._bufferService.isUserScrolling || (n.ydisp = n.ybase), this._dirtyRowService.markRangeDirty(n.scrollTop, n.scrollBottom), this._onScroll.fire(n.ydisp)
                                }, t.prototype.scrollLines = function(e, t) {
                                    var r = this._bufferService.buffer;
                                    if (e < 0) {
                                        if (0 === r.ydisp) return;
                                        this._bufferService.isUserScrolling = !0
                                    } else e + r.ydisp >= r.ybase && (this._bufferService.isUserScrolling = !1);
                                    var n = r.ydisp;
                                    r.ydisp = Math.max(Math.min(r.ydisp + e, r.ybase), 0), n !== r.ydisp && (t || this._onScroll.fire(r.ydisp))
                                }, t.prototype.scrollPages = function(e) {
                                    this.scrollLines(e * (this.rows - 1))
                                }, t.prototype.scrollToTop = function() {
                                    this.scrollLines(-this._bufferService.buffer.ydisp)
                                }, t.prototype.scrollToBottom = function() {
                                    this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp)
                                }, t.prototype.scrollToLine = function(e) {
                                    var t = e - this._bufferService.buffer.ydisp;
                                    0 !== t && this.scrollLines(t)
                                }, t.prototype.addEscHandler = function(e, t) {
                                    return this._inputHandler.addEscHandler(e, t)
                                }, t.prototype.addDcsHandler = function(e, t) {
                                    return this._inputHandler.addDcsHandler(e, t)
                                }, t.prototype.addCsiHandler = function(e, t) {
                                    return this._inputHandler.addCsiHandler(e, t)
                                }, t.prototype.addOscHandler = function(e, t) {
                                    return this._inputHandler.addOscHandler(e, t)
                                }, t.prototype._setup = function() {
                                    this.optionsService.options.windowsMode && this._enableWindowsMode()
                                }, t.prototype.reset = function() {
                                    this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this._coreService.reset(), this._coreMouseService.reset()
                                }, t.prototype._updateOptions = function(e) {
                                    var t;
                                    switch (e) {
                                        case "scrollback":
                                            this.buffers.resize(this.cols, this.rows);
                                            break;
                                        case "windowsMode":
                                            this.optionsService.options.windowsMode ? this._enableWindowsMode() : (null === (t = this._windowsMode) || void 0 === t || t.dispose(), this._windowsMode = void 0)
                                    }
                                }, t.prototype._enableWindowsMode = function() {
                                    var e = this;
                                    if (!this._windowsMode) {
                                        var t = [];
                                        t.push(this.onLineFeed(m.updateWindowsModeWrappedState.bind(null, this._bufferService))), t.push(this.addCsiHandler({
                                            final: "H"
                                        }, (function() {
                                            return m.updateWindowsModeWrappedState(e._bufferService), !1
                                        }))), this._windowsMode = {
                                            dispose: function() {
                                                for (var e = 0, r = t; e < r.length; e++) r[e].dispose()
                                            }
                                        }
                                    }
                                }, t
                            }(o.Disposable);
                        t.CoreTerminal = b
                    },
                    8460: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.forwardEvent = t.EventEmitter = void 0;
                        var r = function() {
                            function e() {
                                this._listeners = [], this._disposed = !1
                            }
                            return Object.defineProperty(e.prototype, "event", {
                                get: function() {
                                    var e = this;
                                    return this._event || (this._event = function(t) {
                                        return e._listeners.push(t), {
                                            dispose: function() {
                                                if (!e._disposed)
                                                    for (var r = 0; r < e._listeners.length; r++)
                                                        if (e._listeners[r] === t) return void e._listeners.splice(r, 1)
                                            }
                                        }
                                    }), this._event
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype.fire = function(e, t) {
                                for (var r = [], n = 0; n < this._listeners.length; n++) r.push(this._listeners[n]);
                                for (n = 0; n < r.length; n++) r[n].call(void 0, e, t)
                            }, e.prototype.dispose = function() {
                                this._listeners && (this._listeners.length = 0), this._disposed = !0
                            }, e
                        }();
                        t.EventEmitter = r, t.forwardEvent = function(e, t) {
                            return e((function(e) {
                                return t.fire(e)
                            }))
                        }
                    },
                    5435: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.InputHandler = t.WindowsOptionsReportType = void 0;
                        var o, s = r(2584),
                            a = r(7116),
                            l = r(2015),
                            c = r(844),
                            u = r(8273),
                            f = r(482),
                            h = r(8437),
                            d = r(8460),
                            p = r(643),
                            _ = r(511),
                            v = r(3734),
                            m = r(6242),
                            g = r(6351),
                            y = {
                                "(": 0,
                                ")": 1,
                                "*": 2,
                                "+": 3,
                                "-": 1,
                                ".": 2
                            },
                            b = 131072;

                        function S(e, t) {
                            if (e > 24) return t.setWinLines || !1;
                            switch (e) {
                                case 1:
                                    return !!t.restoreWin;
                                case 2:
                                    return !!t.minimizeWin;
                                case 3:
                                    return !!t.setWinPosition;
                                case 4:
                                    return !!t.setWinSizePixels;
                                case 5:
                                    return !!t.raiseWin;
                                case 6:
                                    return !!t.lowerWin;
                                case 7:
                                    return !!t.refreshWin;
                                case 8:
                                    return !!t.setWinSizeChars;
                                case 9:
                                    return !!t.maximizeWin;
                                case 10:
                                    return !!t.fullscreenWin;
                                case 11:
                                    return !!t.getWinState;
                                case 13:
                                    return !!t.getWinPosition;
                                case 14:
                                    return !!t.getWinSizePixels;
                                case 15:
                                    return !!t.getScreenSizePixels;
                                case 16:
                                    return !!t.getCellSizePixels;
                                case 18:
                                    return !!t.getWinSizeChars;
                                case 19:
                                    return !!t.getScreenSizeChars;
                                case 20:
                                    return !!t.getIconTitle;
                                case 21:
                                    return !!t.getWinTitle;
                                case 22:
                                    return !!t.pushTitle;
                                case 23:
                                    return !!t.popTitle;
                                case 24:
                                    return !!t.setWinLines
                            }
                            return !1
                        }! function(e) {
                            e[e.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS", e[e.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS"
                        }(o = t.WindowsOptionsReportType || (t.WindowsOptionsReportType = {}));
                        var C = function() {
                                function e(e, t, r, n) {
                                    this._bufferService = e, this._coreService = t, this._logService = r, this._optionsService = n, this._data = new Uint32Array(0)
                                }
                                return e.prototype.hook = function(e) {
                                    this._data = new Uint32Array(0)
                                }, e.prototype.put = function(e, t, r) {
                                    this._data = u.concat(this._data, e.subarray(t, r))
                                }, e.prototype.unhook = function(e) {
                                    if (!e) return this._data = new Uint32Array(0), !0;
                                    var t = f.utf32ToString(this._data);
                                    switch (this._data = new Uint32Array(0), t) {
                                        case '"q':
                                            this._coreService.triggerDataEvent(s.C0.ESC + 'P1$r0"q' + s.C0.ESC + "\\");
                                            break;
                                        case '"p':
                                            this._coreService.triggerDataEvent(s.C0.ESC + 'P1$r61;1"p' + s.C0.ESC + "\\");
                                            break;
                                        case "r":
                                            var r = this._bufferService.buffer.scrollTop + 1 + ";" + (this._bufferService.buffer.scrollBottom + 1) + "r";
                                            this._coreService.triggerDataEvent(s.C0.ESC + "P1$r" + r + s.C0.ESC + "\\");
                                            break;
                                        case "m":
                                            this._coreService.triggerDataEvent(s.C0.ESC + "P1$r0m" + s.C0.ESC + "\\");
                                            break;
                                        case " q":
                                            var n = {
                                                block: 2,
                                                underline: 4,
                                                bar: 6
                                            } [this._optionsService.options.cursorStyle];
                                            n -= this._optionsService.options.cursorBlink ? 1 : 0, this._coreService.triggerDataEvent(s.C0.ESC + "P1$r" + n + " q" + s.C0.ESC + "\\");
                                            break;
                                        default:
                                            this._logService.debug("Unknown DCS $q %s", t), this._coreService.triggerDataEvent(s.C0.ESC + "P0$r" + s.C0.ESC + "\\")
                                    }
                                    return !0
                                }, e
                            }(),
                            w = function(e) {
                                function t(t, r, n, i, o, c, u, p, v) {
                                    void 0 === v && (v = new l.EscapeSequenceParser);
                                    var g = e.call(this) || this;
                                    g._bufferService = t, g._charsetService = r, g._coreService = n, g._dirtyRowService = i, g._logService = o, g._optionsService = c, g._coreMouseService = u, g._unicodeService = p, g._parser = v, g._parseBuffer = new Uint32Array(4096), g._stringDecoder = new f.StringToUtf32, g._utf8Decoder = new f.Utf8ToUtf32, g._workCell = new _.CellData, g._windowTitle = "", g._iconName = "", g._windowTitleStack = [], g._iconNameStack = [], g._curAttrData = h.DEFAULT_ATTR_DATA.clone(), g._eraseAttrDataInternal = h.DEFAULT_ATTR_DATA.clone(), g._onRequestBell = new d.EventEmitter, g._onRequestRefreshRows = new d.EventEmitter, g._onRequestReset = new d.EventEmitter, g._onRequestScroll = new d.EventEmitter, g._onRequestSyncScrollBar = new d.EventEmitter, g._onRequestWindowsOptionsReport = new d.EventEmitter, g._onA11yChar = new d.EventEmitter, g._onA11yTab = new d.EventEmitter, g._onCursorMove = new d.EventEmitter, g._onLineFeed = new d.EventEmitter, g._onScroll = new d.EventEmitter, g._onTitleChange = new d.EventEmitter, g._onAnsiColorChange = new d.EventEmitter, g.register(g._parser), g._parser.setCsiHandlerFallback((function(e, t) {
                                        g._logService.debug("Unknown CSI code: ", {
                                            identifier: g._parser.identToString(e),
                                            params: t.toArray()
                                        })
                                    })), g._parser.setEscHandlerFallback((function(e) {
                                        g._logService.debug("Unknown ESC code: ", {
                                            identifier: g._parser.identToString(e)
                                        })
                                    })), g._parser.setExecuteHandlerFallback((function(e) {
                                        g._logService.debug("Unknown EXECUTE code: ", {
                                            code: e
                                        })
                                    })), g._parser.setOscHandlerFallback((function(e, t, r) {
                                        g._logService.debug("Unknown OSC code: ", {
                                            identifier: e,
                                            action: t,
                                            data: r
                                        })
                                    })), g._parser.setDcsHandlerFallback((function(e, t, r) {
                                        "HOOK" === t && (r = r.toArray()), g._logService.debug("Unknown DCS code: ", {
                                            identifier: g._parser.identToString(e),
                                            action: t,
                                            payload: r
                                        })
                                    })), g._parser.setPrintHandler((function(e, t, r) {
                                        return g.print(e, t, r)
                                    })), g._parser.registerCsiHandler({
                                        final: "@"
                                    }, (function(e) {
                                        return g.insertChars(e)
                                    })), g._parser.registerCsiHandler({
                                        intermediates: " ",
                                        final: "@"
                                    }, (function(e) {
                                        return g.scrollLeft(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "A"
                                    }, (function(e) {
                                        return g.cursorUp(e)
                                    })), g._parser.registerCsiHandler({
                                        intermediates: " ",
                                        final: "A"
                                    }, (function(e) {
                                        return g.scrollRight(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "B"
                                    }, (function(e) {
                                        return g.cursorDown(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "C"
                                    }, (function(e) {
                                        return g.cursorForward(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "D"
                                    }, (function(e) {
                                        return g.cursorBackward(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "E"
                                    }, (function(e) {
                                        return g.cursorNextLine(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "F"
                                    }, (function(e) {
                                        return g.cursorPrecedingLine(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "G"
                                    }, (function(e) {
                                        return g.cursorCharAbsolute(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "H"
                                    }, (function(e) {
                                        return g.cursorPosition(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "I"
                                    }, (function(e) {
                                        return g.cursorForwardTab(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "J"
                                    }, (function(e) {
                                        return g.eraseInDisplay(e)
                                    })), g._parser.registerCsiHandler({
                                        prefix: "?",
                                        final: "J"
                                    }, (function(e) {
                                        return g.eraseInDisplay(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "K"
                                    }, (function(e) {
                                        return g.eraseInLine(e)
                                    })), g._parser.registerCsiHandler({
                                        prefix: "?",
                                        final: "K"
                                    }, (function(e) {
                                        return g.eraseInLine(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "L"
                                    }, (function(e) {
                                        return g.insertLines(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "M"
                                    }, (function(e) {
                                        return g.deleteLines(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "P"
                                    }, (function(e) {
                                        return g.deleteChars(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "S"
                                    }, (function(e) {
                                        return g.scrollUp(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "T"
                                    }, (function(e) {
                                        return g.scrollDown(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "X"
                                    }, (function(e) {
                                        return g.eraseChars(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "Z"
                                    }, (function(e) {
                                        return g.cursorBackwardTab(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "`"
                                    }, (function(e) {
                                        return g.charPosAbsolute(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "a"
                                    }, (function(e) {
                                        return g.hPositionRelative(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "b"
                                    }, (function(e) {
                                        return g.repeatPrecedingCharacter(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "c"
                                    }, (function(e) {
                                        return g.sendDeviceAttributesPrimary(e)
                                    })), g._parser.registerCsiHandler({
                                        prefix: ">",
                                        final: "c"
                                    }, (function(e) {
                                        return g.sendDeviceAttributesSecondary(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "d"
                                    }, (function(e) {
                                        return g.linePosAbsolute(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "e"
                                    }, (function(e) {
                                        return g.vPositionRelative(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "f"
                                    }, (function(e) {
                                        return g.hVPosition(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "g"
                                    }, (function(e) {
                                        return g.tabClear(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "h"
                                    }, (function(e) {
                                        return g.setMode(e)
                                    })), g._parser.registerCsiHandler({
                                        prefix: "?",
                                        final: "h"
                                    }, (function(e) {
                                        return g.setModePrivate(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "l"
                                    }, (function(e) {
                                        return g.resetMode(e)
                                    })), g._parser.registerCsiHandler({
                                        prefix: "?",
                                        final: "l"
                                    }, (function(e) {
                                        return g.resetModePrivate(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "m"
                                    }, (function(e) {
                                        return g.charAttributes(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "n"
                                    }, (function(e) {
                                        return g.deviceStatus(e)
                                    })), g._parser.registerCsiHandler({
                                        prefix: "?",
                                        final: "n"
                                    }, (function(e) {
                                        return g.deviceStatusPrivate(e)
                                    })), g._parser.registerCsiHandler({
                                        intermediates: "!",
                                        final: "p"
                                    }, (function(e) {
                                        return g.softReset(e)
                                    })), g._parser.registerCsiHandler({
                                        intermediates: " ",
                                        final: "q"
                                    }, (function(e) {
                                        return g.setCursorStyle(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "r"
                                    }, (function(e) {
                                        return g.setScrollRegion(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "s"
                                    }, (function(e) {
                                        return g.saveCursor(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "t"
                                    }, (function(e) {
                                        return g.windowOptions(e)
                                    })), g._parser.registerCsiHandler({
                                        final: "u"
                                    }, (function(e) {
                                        return g.restoreCursor(e)
                                    })), g._parser.registerCsiHandler({
                                        intermediates: "'",
                                        final: "}"
                                    }, (function(e) {
                                        return g.insertColumns(e)
                                    })), g._parser.registerCsiHandler({
                                        intermediates: "'",
                                        final: "~"
                                    }, (function(e) {
                                        return g.deleteColumns(e)
                                    })), g._parser.setExecuteHandler(s.C0.BEL, (function() {
                                        return g.bell()
                                    })), g._parser.setExecuteHandler(s.C0.LF, (function() {
                                        return g.lineFeed()
                                    })), g._parser.setExecuteHandler(s.C0.VT, (function() {
                                        return g.lineFeed()
                                    })), g._parser.setExecuteHandler(s.C0.FF, (function() {
                                        return g.lineFeed()
                                    })), g._parser.setExecuteHandler(s.C0.CR, (function() {
                                        return g.carriageReturn()
                                    })), g._parser.setExecuteHandler(s.C0.BS, (function() {
                                        return g.backspace()
                                    })), g._parser.setExecuteHandler(s.C0.HT, (function() {
                                        return g.tab()
                                    })), g._parser.setExecuteHandler(s.C0.SO, (function() {
                                        return g.shiftOut()
                                    })), g._parser.setExecuteHandler(s.C0.SI, (function() {
                                        return g.shiftIn()
                                    })), g._parser.setExecuteHandler(s.C1.IND, (function() {
                                        return g.index()
                                    })), g._parser.setExecuteHandler(s.C1.NEL, (function() {
                                        return g.nextLine()
                                    })), g._parser.setExecuteHandler(s.C1.HTS, (function() {
                                        return g.tabSet()
                                    })), g._parser.registerOscHandler(0, new m.OscHandler((function(e) {
                                        return g.setTitle(e), g.setIconName(e), !0
                                    }))), g._parser.registerOscHandler(1, new m.OscHandler((function(e) {
                                        return g.setIconName(e)
                                    }))), g._parser.registerOscHandler(2, new m.OscHandler((function(e) {
                                        return g.setTitle(e)
                                    }))), g._parser.registerOscHandler(4, new m.OscHandler((function(e) {
                                        return g.setAnsiColor(e)
                                    }))), g._parser.registerEscHandler({
                                        final: "7"
                                    }, (function() {
                                        return g.saveCursor()
                                    })), g._parser.registerEscHandler({
                                        final: "8"
                                    }, (function() {
                                        return g.restoreCursor()
                                    })), g._parser.registerEscHandler({
                                        final: "D"
                                    }, (function() {
                                        return g.index()
                                    })), g._parser.registerEscHandler({
                                        final: "E"
                                    }, (function() {
                                        return g.nextLine()
                                    })), g._parser.registerEscHandler({
                                        final: "H"
                                    }, (function() {
                                        return g.tabSet()
                                    })), g._parser.registerEscHandler({
                                        final: "M"
                                    }, (function() {
                                        return g.reverseIndex()
                                    })), g._parser.registerEscHandler({
                                        final: "="
                                    }, (function() {
                                        return g.keypadApplicationMode()
                                    })), g._parser.registerEscHandler({
                                        final: ">"
                                    }, (function() {
                                        return g.keypadNumericMode()
                                    })), g._parser.registerEscHandler({
                                        final: "c"
                                    }, (function() {
                                        return g.fullReset()
                                    })), g._parser.registerEscHandler({
                                        final: "n"
                                    }, (function() {
                                        return g.setgLevel(2)
                                    })), g._parser.registerEscHandler({
                                        final: "o"
                                    }, (function() {
                                        return g.setgLevel(3)
                                    })), g._parser.registerEscHandler({
                                        final: "|"
                                    }, (function() {
                                        return g.setgLevel(3)
                                    })), g._parser.registerEscHandler({
                                        final: "}"
                                    }, (function() {
                                        return g.setgLevel(2)
                                    })), g._parser.registerEscHandler({
                                        final: "~"
                                    }, (function() {
                                        return g.setgLevel(1)
                                    })), g._parser.registerEscHandler({
                                        intermediates: "%",
                                        final: "@"
                                    }, (function() {
                                        return g.selectDefaultCharset()
                                    })), g._parser.registerEscHandler({
                                        intermediates: "%",
                                        final: "G"
                                    }, (function() {
                                        return g.selectDefaultCharset()
                                    }));
                                    var y = function(e) {
                                            b._parser.registerEscHandler({
                                                intermediates: "(",
                                                final: e
                                            }, (function() {
                                                return g.selectCharset("(" + e)
                                            })), b._parser.registerEscHandler({
                                                intermediates: ")",
                                                final: e
                                            }, (function() {
                                                return g.selectCharset(")" + e)
                                            })), b._parser.registerEscHandler({
                                                intermediates: "*",
                                                final: e
                                            }, (function() {
                                                return g.selectCharset("*" + e)
                                            })), b._parser.registerEscHandler({
                                                intermediates: "+",
                                                final: e
                                            }, (function() {
                                                return g.selectCharset("+" + e)
                                            })), b._parser.registerEscHandler({
                                                intermediates: "-",
                                                final: e
                                            }, (function() {
                                                return g.selectCharset("-" + e)
                                            })), b._parser.registerEscHandler({
                                                intermediates: ".",
                                                final: e
                                            }, (function() {
                                                return g.selectCharset("." + e)
                                            })), b._parser.registerEscHandler({
                                                intermediates: "/",
                                                final: e
                                            }, (function() {
                                                return g.selectCharset("/" + e)
                                            }))
                                        },
                                        b = this;
                                    for (var S in a.CHARSETS) y(S);
                                    return g._parser.registerEscHandler({
                                        intermediates: "#",
                                        final: "8"
                                    }, (function() {
                                        return g.screenAlignmentPattern()
                                    })), g._parser.setErrorHandler((function(e) {
                                        return g._logService.error("Parsing error: ", e), e
                                    })), g._parser.registerDcsHandler({
                                        intermediates: "$",
                                        final: "q"
                                    }, new C(g._bufferService, g._coreService, g._logService, g._optionsService)), g
                                }
                                return i(t, e), Object.defineProperty(t.prototype, "onRequestBell", {
                                    get: function() {
                                        return this._onRequestBell.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onRequestRefreshRows", {
                                    get: function() {
                                        return this._onRequestRefreshRows.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onRequestReset", {
                                    get: function() {
                                        return this._onRequestReset.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onRequestScroll", {
                                    get: function() {
                                        return this._onRequestScroll.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onRequestSyncScrollBar", {
                                    get: function() {
                                        return this._onRequestSyncScrollBar.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onRequestWindowsOptionsReport", {
                                    get: function() {
                                        return this._onRequestWindowsOptionsReport.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onA11yChar", {
                                    get: function() {
                                        return this._onA11yChar.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onA11yTab", {
                                    get: function() {
                                        return this._onA11yTab.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onCursorMove", {
                                    get: function() {
                                        return this._onCursorMove.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onLineFeed", {
                                    get: function() {
                                        return this._onLineFeed.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onScroll", {
                                    get: function() {
                                        return this._onScroll.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onTitleChange", {
                                    get: function() {
                                        return this._onTitleChange.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onAnsiColorChange", {
                                    get: function() {
                                        return this._onAnsiColorChange.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.dispose = function() {
                                    e.prototype.dispose.call(this)
                                }, t.prototype.parse = function(e) {
                                    var t = this._bufferService.buffer,
                                        r = t.x,
                                        n = t.y;
                                    if (this._logService.debug("parsing data", e), this._parseBuffer.length < e.length && this._parseBuffer.length < b && (this._parseBuffer = new Uint32Array(Math.min(e.length, b))), this._dirtyRowService.clearRange(), e.length > b)
                                        for (var i = 0; i < e.length; i += b) {
                                            var o = i + b < e.length ? i + b : e.length,
                                                s = "string" == typeof e ? this._stringDecoder.decode(e.substring(i, o), this._parseBuffer) : this._utf8Decoder.decode(e.subarray(i, o), this._parseBuffer);
                                            this._parser.parse(this._parseBuffer, s)
                                        } else s = "string" == typeof e ? this._stringDecoder.decode(e, this._parseBuffer) : this._utf8Decoder.decode(e, this._parseBuffer), this._parser.parse(this._parseBuffer, s);
                                    (t = this._bufferService.buffer).x === r && t.y === n || this._onCursorMove.fire(), this._onRequestRefreshRows.fire(this._dirtyRowService.start, this._dirtyRowService.end)
                                }, t.prototype.print = function(e, t, r) {
                                    var n, i, o = this._bufferService.buffer,
                                        s = this._charsetService.charset,
                                        a = this._optionsService.options.screenReaderMode,
                                        l = this._bufferService.cols,
                                        c = this._coreService.decPrivateModes.wraparound,
                                        u = this._coreService.modes.insertMode,
                                        h = this._curAttrData,
                                        d = o.lines.get(o.ybase + o.y);
                                    this._dirtyRowService.markDirty(o.y), o.x && r - t > 0 && 2 === d.getWidth(o.x - 1) && d.setCellFromCodePoint(o.x - 1, 0, 1, h.fg, h.bg, h.extended);
                                    for (var _ = t; _ < r; ++_) {
                                        if (n = e[_], i = this._unicodeService.wcwidth(n), n < 127 && s) {
                                            var v = s[String.fromCharCode(n)];
                                            v && (n = v.charCodeAt(0))
                                        }
                                        if (a && this._onA11yChar.fire(f.stringFromCodePoint(n)), i || !o.x) {
                                            if (o.x + i - 1 >= l)
                                                if (c) {
                                                    for (; o.x < l;) d.setCellFromCodePoint(o.x++, 0, 1, h.fg, h.bg, h.extended);
                                                    o.x = 0, o.y++, o.y === o.scrollBottom + 1 ? (o.y--, this._onRequestScroll.fire(this._eraseAttrData(), !0)) : (o.y >= this._bufferService.rows && (o.y = this._bufferService.rows - 1), o.lines.get(o.ybase + o.y).isWrapped = !0), d = o.lines.get(o.ybase + o.y)
                                                } else if (o.x = l - 1, 2 === i) continue;
                                            if (u && (d.insertCells(o.x, i, o.getNullCell(h), h), 2 === d.getWidth(l - 1) && d.setCellFromCodePoint(l - 1, p.NULL_CELL_CODE, p.NULL_CELL_WIDTH, h.fg, h.bg, h.extended)), d.setCellFromCodePoint(o.x++, n, i, h.fg, h.bg, h.extended), i > 0)
                                                for (; --i;) d.setCellFromCodePoint(o.x++, 0, 0, h.fg, h.bg, h.extended)
                                        } else d.getWidth(o.x - 1) ? d.addCodepointToCell(o.x - 1, n) : d.addCodepointToCell(o.x - 2, n)
                                    }
                                    r - t > 0 && (d.loadCell(o.x - 1, this._workCell), 2 === this._workCell.getWidth() || this._workCell.getCode() > 65535 ? this._parser.precedingCodepoint = 0 : this._workCell.isCombined() ? this._parser.precedingCodepoint = this._workCell.getChars().charCodeAt(0) : this._parser.precedingCodepoint = this._workCell.content), o.x < l && r - t > 0 && 0 === d.getWidth(o.x) && !d.hasContent(o.x) && d.setCellFromCodePoint(o.x, 0, 1, h.fg, h.bg, h.extended), this._dirtyRowService.markDirty(o.y)
                                }, t.prototype.addCsiHandler = function(e, t) {
                                    var r = this;
                                    return "t" !== e.final || e.prefix || e.intermediates ? this._parser.registerCsiHandler(e, t) : this._parser.registerCsiHandler(e, (function(e) {
                                        return !S(e.params[0], r._optionsService.options.windowOptions) || t(e)
                                    }))
                                }, t.prototype.addDcsHandler = function(e, t) {
                                    return this._parser.registerDcsHandler(e, new g.DcsHandler(t))
                                }, t.prototype.addEscHandler = function(e, t) {
                                    return this._parser.registerEscHandler(e, t)
                                }, t.prototype.addOscHandler = function(e, t) {
                                    return this._parser.registerOscHandler(e, new m.OscHandler(t))
                                }, t.prototype.bell = function() {
                                    return this._onRequestBell.fire(), !0
                                }, t.prototype.lineFeed = function() {
                                    var e = this._bufferService.buffer;
                                    return this._dirtyRowService.markDirty(e.y), this._optionsService.options.convertEol && (e.x = 0), e.y++, e.y === e.scrollBottom + 1 ? (e.y--, this._onRequestScroll.fire(this._eraseAttrData())) : e.y >= this._bufferService.rows && (e.y = this._bufferService.rows - 1), e.x >= this._bufferService.cols && e.x--, this._dirtyRowService.markDirty(e.y), this._onLineFeed.fire(), !0
                                }, t.prototype.carriageReturn = function() {
                                    return this._bufferService.buffer.x = 0, !0
                                }, t.prototype.backspace = function() {
                                    var e, t = this._bufferService.buffer;
                                    if (!this._coreService.decPrivateModes.reverseWraparound) return this._restrictCursor(), t.x > 0 && t.x--, !0;
                                    if (this._restrictCursor(this._bufferService.cols), t.x > 0) t.x--;
                                    else if (0 === t.x && t.y > t.scrollTop && t.y <= t.scrollBottom && (null === (e = t.lines.get(t.ybase + t.y)) || void 0 === e ? void 0 : e.isWrapped)) {
                                        t.lines.get(t.ybase + t.y).isWrapped = !1, t.y--, t.x = this._bufferService.cols - 1;
                                        var r = t.lines.get(t.ybase + t.y);
                                        r.hasWidth(t.x) && !r.hasContent(t.x) && t.x--
                                    }
                                    return this._restrictCursor(), !0
                                }, t.prototype.tab = function() {
                                    if (this._bufferService.buffer.x >= this._bufferService.cols) return !0;
                                    var e = this._bufferService.buffer.x;
                                    return this._bufferService.buffer.x = this._bufferService.buffer.nextStop(), this._optionsService.options.screenReaderMode && this._onA11yTab.fire(this._bufferService.buffer.x - e), !0
                                }, t.prototype.shiftOut = function() {
                                    return this._charsetService.setgLevel(1), !0
                                }, t.prototype.shiftIn = function() {
                                    return this._charsetService.setgLevel(0), !0
                                }, t.prototype._restrictCursor = function(e) {
                                    void 0 === e && (e = this._bufferService.cols - 1), this._bufferService.buffer.x = Math.min(e, Math.max(0, this._bufferService.buffer.x)), this._bufferService.buffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._bufferService.buffer.scrollBottom, Math.max(this._bufferService.buffer.scrollTop, this._bufferService.buffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._bufferService.buffer.y)), this._dirtyRowService.markDirty(this._bufferService.buffer.y)
                                }, t.prototype._setCursor = function(e, t) {
                                    this._dirtyRowService.markDirty(this._bufferService.buffer.y), this._coreService.decPrivateModes.origin ? (this._bufferService.buffer.x = e, this._bufferService.buffer.y = this._bufferService.buffer.scrollTop + t) : (this._bufferService.buffer.x = e, this._bufferService.buffer.y = t), this._restrictCursor(), this._dirtyRowService.markDirty(this._bufferService.buffer.y)
                                }, t.prototype._moveCursor = function(e, t) {
                                    this._restrictCursor(), this._setCursor(this._bufferService.buffer.x + e, this._bufferService.buffer.y + t)
                                }, t.prototype.cursorUp = function(e) {
                                    var t = this._bufferService.buffer.y - this._bufferService.buffer.scrollTop;
                                    return t >= 0 ? this._moveCursor(0, -Math.min(t, e.params[0] || 1)) : this._moveCursor(0, -(e.params[0] || 1)), !0
                                }, t.prototype.cursorDown = function(e) {
                                    var t = this._bufferService.buffer.scrollBottom - this._bufferService.buffer.y;
                                    return t >= 0 ? this._moveCursor(0, Math.min(t, e.params[0] || 1)) : this._moveCursor(0, e.params[0] || 1), !0
                                }, t.prototype.cursorForward = function(e) {
                                    return this._moveCursor(e.params[0] || 1, 0), !0
                                }, t.prototype.cursorBackward = function(e) {
                                    return this._moveCursor(-(e.params[0] || 1), 0), !0
                                }, t.prototype.cursorNextLine = function(e) {
                                    return this.cursorDown(e), this._bufferService.buffer.x = 0, !0
                                }, t.prototype.cursorPrecedingLine = function(e) {
                                    return this.cursorUp(e), this._bufferService.buffer.x = 0, !0
                                }, t.prototype.cursorCharAbsolute = function(e) {
                                    return this._setCursor((e.params[0] || 1) - 1, this._bufferService.buffer.y), !0
                                }, t.prototype.cursorPosition = function(e) {
                                    return this._setCursor(e.length >= 2 ? (e.params[1] || 1) - 1 : 0, (e.params[0] || 1) - 1), !0
                                }, t.prototype.charPosAbsolute = function(e) {
                                    return this._setCursor((e.params[0] || 1) - 1, this._bufferService.buffer.y), !0
                                }, t.prototype.hPositionRelative = function(e) {
                                    return this._moveCursor(e.params[0] || 1, 0), !0
                                }, t.prototype.linePosAbsolute = function(e) {
                                    return this._setCursor(this._bufferService.buffer.x, (e.params[0] || 1) - 1), !0
                                }, t.prototype.vPositionRelative = function(e) {
                                    return this._moveCursor(0, e.params[0] || 1), !0
                                }, t.prototype.hVPosition = function(e) {
                                    return this.cursorPosition(e), !0
                                }, t.prototype.tabClear = function(e) {
                                    var t = e.params[0];
                                    return 0 === t ? delete this._bufferService.buffer.tabs[this._bufferService.buffer.x] : 3 === t && (this._bufferService.buffer.tabs = {}), !0
                                }, t.prototype.cursorForwardTab = function(e) {
                                    if (this._bufferService.buffer.x >= this._bufferService.cols) return !0;
                                    for (var t = e.params[0] || 1; t--;) this._bufferService.buffer.x = this._bufferService.buffer.nextStop();
                                    return !0
                                }, t.prototype.cursorBackwardTab = function(e) {
                                    if (this._bufferService.buffer.x >= this._bufferService.cols) return !0;
                                    for (var t = e.params[0] || 1, r = this._bufferService.buffer; t--;) r.x = r.prevStop();
                                    return !0
                                }, t.prototype._eraseInBufferLine = function(e, t, r, n) {
                                    void 0 === n && (n = !1);
                                    var i = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + e);
                                    i.replaceCells(t, r, this._bufferService.buffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), n && (i.isWrapped = !1)
                                }, t.prototype._resetBufferLine = function(e) {
                                    var t = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + e);
                                    t.fill(this._bufferService.buffer.getNullCell(this._eraseAttrData())), t.isWrapped = !1
                                }, t.prototype.eraseInDisplay = function(e) {
                                    var t;
                                    switch (this._restrictCursor(), e.params[0]) {
                                        case 0:
                                            for (t = this._bufferService.buffer.y, this._dirtyRowService.markDirty(t), this._eraseInBufferLine(t++, this._bufferService.buffer.x, this._bufferService.cols, 0 === this._bufferService.buffer.x); t < this._bufferService.rows; t++) this._resetBufferLine(t);
                                            this._dirtyRowService.markDirty(t);
                                            break;
                                        case 1:
                                            for (t = this._bufferService.buffer.y, this._dirtyRowService.markDirty(t), this._eraseInBufferLine(t, 0, this._bufferService.buffer.x + 1, !0), this._bufferService.buffer.x + 1 >= this._bufferService.cols && (this._bufferService.buffer.lines.get(t + 1).isWrapped = !1); t--;) this._resetBufferLine(t);
                                            this._dirtyRowService.markDirty(0);
                                            break;
                                        case 2:
                                            for (t = this._bufferService.rows, this._dirtyRowService.markDirty(t - 1); t--;) this._resetBufferLine(t);
                                            this._dirtyRowService.markDirty(0);
                                            break;
                                        case 3:
                                            var r = this._bufferService.buffer.lines.length - this._bufferService.rows;
                                            r > 0 && (this._bufferService.buffer.lines.trimStart(r), this._bufferService.buffer.ybase = Math.max(this._bufferService.buffer.ybase - r, 0), this._bufferService.buffer.ydisp = Math.max(this._bufferService.buffer.ydisp - r, 0), this._onScroll.fire(0))
                                    }
                                    return !0
                                }, t.prototype.eraseInLine = function(e) {
                                    switch (this._restrictCursor(), e.params[0]) {
                                        case 0:
                                            this._eraseInBufferLine(this._bufferService.buffer.y, this._bufferService.buffer.x, this._bufferService.cols);
                                            break;
                                        case 1:
                                            this._eraseInBufferLine(this._bufferService.buffer.y, 0, this._bufferService.buffer.x + 1);
                                            break;
                                        case 2:
                                            this._eraseInBufferLine(this._bufferService.buffer.y, 0, this._bufferService.cols)
                                    }
                                    return this._dirtyRowService.markDirty(this._bufferService.buffer.y), !0
                                }, t.prototype.insertLines = function(e) {
                                    this._restrictCursor();
                                    var t = e.params[0] || 1,
                                        r = this._bufferService.buffer;
                                    if (r.y > r.scrollBottom || r.y < r.scrollTop) return !0;
                                    for (var n = r.ybase + r.y, i = this._bufferService.rows - 1 - r.scrollBottom, o = this._bufferService.rows - 1 + r.ybase - i + 1; t--;) r.lines.splice(o - 1, 1), r.lines.splice(n, 0, r.getBlankLine(this._eraseAttrData()));
                                    return this._dirtyRowService.markRangeDirty(r.y, r.scrollBottom), r.x = 0, !0
                                }, t.prototype.deleteLines = function(e) {
                                    this._restrictCursor();
                                    var t = e.params[0] || 1,
                                        r = this._bufferService.buffer;
                                    if (r.y > r.scrollBottom || r.y < r.scrollTop) return !0;
                                    var n, i = r.ybase + r.y;
                                    for (n = this._bufferService.rows - 1 - r.scrollBottom, n = this._bufferService.rows - 1 + r.ybase - n; t--;) r.lines.splice(i, 1), r.lines.splice(n, 0, r.getBlankLine(this._eraseAttrData()));
                                    return this._dirtyRowService.markRangeDirty(r.y, r.scrollBottom), r.x = 0, !0
                                }, t.prototype.insertChars = function(e) {
                                    this._restrictCursor();
                                    var t = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + this._bufferService.buffer.y);
                                    return t && (t.insertCells(this._bufferService.buffer.x, e.params[0] || 1, this._bufferService.buffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._bufferService.buffer.y)), !0
                                }, t.prototype.deleteChars = function(e) {
                                    this._restrictCursor();
                                    var t = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + this._bufferService.buffer.y);
                                    return t && (t.deleteCells(this._bufferService.buffer.x, e.params[0] || 1, this._bufferService.buffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._bufferService.buffer.y)), !0
                                }, t.prototype.scrollUp = function(e) {
                                    for (var t = e.params[0] || 1, r = this._bufferService.buffer; t--;) r.lines.splice(r.ybase + r.scrollTop, 1), r.lines.splice(r.ybase + r.scrollBottom, 0, r.getBlankLine(this._eraseAttrData()));
                                    return this._dirtyRowService.markRangeDirty(r.scrollTop, r.scrollBottom), !0
                                }, t.prototype.scrollDown = function(e) {
                                    for (var t = e.params[0] || 1, r = this._bufferService.buffer; t--;) r.lines.splice(r.ybase + r.scrollBottom, 1), r.lines.splice(r.ybase + r.scrollTop, 0, r.getBlankLine(h.DEFAULT_ATTR_DATA));
                                    return this._dirtyRowService.markRangeDirty(r.scrollTop, r.scrollBottom), !0
                                }, t.prototype.scrollLeft = function(e) {
                                    var t = this._bufferService.buffer;
                                    if (t.y > t.scrollBottom || t.y < t.scrollTop) return !0;
                                    for (var r = e.params[0] || 1, n = t.scrollTop; n <= t.scrollBottom; ++n) {
                                        var i = t.lines.get(t.ybase + n);
                                        i.deleteCells(0, r, t.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i.isWrapped = !1
                                    }
                                    return this._dirtyRowService.markRangeDirty(t.scrollTop, t.scrollBottom), !0
                                }, t.prototype.scrollRight = function(e) {
                                    var t = this._bufferService.buffer;
                                    if (t.y > t.scrollBottom || t.y < t.scrollTop) return !0;
                                    for (var r = e.params[0] || 1, n = t.scrollTop; n <= t.scrollBottom; ++n) {
                                        var i = t.lines.get(t.ybase + n);
                                        i.insertCells(0, r, t.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i.isWrapped = !1
                                    }
                                    return this._dirtyRowService.markRangeDirty(t.scrollTop, t.scrollBottom), !0
                                }, t.prototype.insertColumns = function(e) {
                                    var t = this._bufferService.buffer;
                                    if (t.y > t.scrollBottom || t.y < t.scrollTop) return !0;
                                    for (var r = e.params[0] || 1, n = t.scrollTop; n <= t.scrollBottom; ++n) {
                                        var i = this._bufferService.buffer.lines.get(t.ybase + n);
                                        i.insertCells(t.x, r, t.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i.isWrapped = !1
                                    }
                                    return this._dirtyRowService.markRangeDirty(t.scrollTop, t.scrollBottom), !0
                                }, t.prototype.deleteColumns = function(e) {
                                    var t = this._bufferService.buffer;
                                    if (t.y > t.scrollBottom || t.y < t.scrollTop) return !0;
                                    for (var r = e.params[0] || 1, n = t.scrollTop; n <= t.scrollBottom; ++n) {
                                        var i = t.lines.get(t.ybase + n);
                                        i.deleteCells(t.x, r, t.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i.isWrapped = !1
                                    }
                                    return this._dirtyRowService.markRangeDirty(t.scrollTop, t.scrollBottom), !0
                                }, t.prototype.eraseChars = function(e) {
                                    this._restrictCursor();
                                    var t = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + this._bufferService.buffer.y);
                                    return t && (t.replaceCells(this._bufferService.buffer.x, this._bufferService.buffer.x + (e.params[0] || 1), this._bufferService.buffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._bufferService.buffer.y)), !0
                                }, t.prototype.repeatPrecedingCharacter = function(e) {
                                    if (!this._parser.precedingCodepoint) return !0;
                                    for (var t = e.params[0] || 1, r = new Uint32Array(t), n = 0; n < t; ++n) r[n] = this._parser.precedingCodepoint;
                                    return this.print(r, 0, r.length), !0
                                }, t.prototype.sendDeviceAttributesPrimary = function(e) {
                                    return e.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(s.C0.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(s.C0.ESC + "[?6c")), !0
                                }, t.prototype.sendDeviceAttributesSecondary = function(e) {
                                    return e.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(s.C0.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(s.C0.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(s.C0.ESC + "[>83;40003;0c")), !0
                                }, t.prototype._is = function(e) {
                                    return 0 === (this._optionsService.options.termName + "").indexOf(e)
                                }, t.prototype.setMode = function(e) {
                                    for (var t = 0; t < e.length; t++) switch (e.params[t]) {
                                        case 4:
                                            this._coreService.modes.insertMode = !0
                                    }
                                    return !0
                                }, t.prototype.setModePrivate = function(e) {
                                    for (var t = 0; t < e.length; t++) switch (e.params[t]) {
                                        case 1:
                                            this._coreService.decPrivateModes.applicationCursorKeys = !0;
                                            break;
                                        case 2:
                                            this._charsetService.setgCharset(0, a.DEFAULT_CHARSET), this._charsetService.setgCharset(1, a.DEFAULT_CHARSET), this._charsetService.setgCharset(2, a.DEFAULT_CHARSET), this._charsetService.setgCharset(3, a.DEFAULT_CHARSET);
                                            break;
                                        case 3:
                                            this._optionsService.options.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                                            break;
                                        case 6:
                                            this._coreService.decPrivateModes.origin = !0, this._setCursor(0, 0);
                                            break;
                                        case 7:
                                            this._coreService.decPrivateModes.wraparound = !0;
                                            break;
                                        case 12:
                                            break;
                                        case 45:
                                            this._coreService.decPrivateModes.reverseWraparound = !0;
                                            break;
                                        case 66:
                                            this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, this._onRequestSyncScrollBar.fire();
                                            break;
                                        case 9:
                                            this._coreMouseService.activeProtocol = "X10";
                                            break;
                                        case 1e3:
                                            this._coreMouseService.activeProtocol = "VT200";
                                            break;
                                        case 1002:
                                            this._coreMouseService.activeProtocol = "DRAG";
                                            break;
                                        case 1003:
                                            this._coreMouseService.activeProtocol = "ANY";
                                            break;
                                        case 1004:
                                            this._coreService.decPrivateModes.sendFocus = !0;
                                            break;
                                        case 1005:
                                            this._logService.debug("DECSET 1005 not supported (see #2507)");
                                            break;
                                        case 1006:
                                            this._coreMouseService.activeEncoding = "SGR";
                                            break;
                                        case 1015:
                                            this._logService.debug("DECSET 1015 not supported (see #2507)");
                                            break;
                                        case 25:
                                            this._coreService.isCursorHidden = !1;
                                            break;
                                        case 1048:
                                            this.saveCursor();
                                            break;
                                        case 1049:
                                            this.saveCursor();
                                        case 47:
                                        case 1047:
                                            this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = !0, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                                            break;
                                        case 2004:
                                            this._coreService.decPrivateModes.bracketedPasteMode = !0
                                    }
                                    return !0
                                }, t.prototype.resetMode = function(e) {
                                    for (var t = 0; t < e.length; t++) switch (e.params[t]) {
                                        case 4:
                                            this._coreService.modes.insertMode = !1
                                    }
                                    return !0
                                }, t.prototype.resetModePrivate = function(e) {
                                    for (var t = 0; t < e.length; t++) switch (e.params[t]) {
                                        case 1:
                                            this._coreService.decPrivateModes.applicationCursorKeys = !1;
                                            break;
                                        case 3:
                                            this._optionsService.options.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                                            break;
                                        case 6:
                                            this._coreService.decPrivateModes.origin = !1, this._setCursor(0, 0);
                                            break;
                                        case 7:
                                            this._coreService.decPrivateModes.wraparound = !1;
                                            break;
                                        case 12:
                                            break;
                                        case 45:
                                            this._coreService.decPrivateModes.reverseWraparound = !1;
                                            break;
                                        case 66:
                                            this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, this._onRequestSyncScrollBar.fire();
                                            break;
                                        case 9:
                                        case 1e3:
                                        case 1002:
                                        case 1003:
                                            this._coreMouseService.activeProtocol = "NONE";
                                            break;
                                        case 1004:
                                            this._coreService.decPrivateModes.sendFocus = !1;
                                            break;
                                        case 1005:
                                            this._logService.debug("DECRST 1005 not supported (see #2507)");
                                            break;
                                        case 1006:
                                            this._coreMouseService.activeEncoding = "DEFAULT";
                                            break;
                                        case 1015:
                                            this._logService.debug("DECRST 1015 not supported (see #2507)");
                                            break;
                                        case 25:
                                            this._coreService.isCursorHidden = !0;
                                            break;
                                        case 1048:
                                            this.restoreCursor();
                                            break;
                                        case 1049:
                                        case 47:
                                        case 1047:
                                            this._bufferService.buffers.activateNormalBuffer(), 1049 === e.params[t] && this.restoreCursor(), this._coreService.isCursorInitialized = !0, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                                            break;
                                        case 2004:
                                            this._coreService.decPrivateModes.bracketedPasteMode = !1
                                    }
                                    return !0
                                }, t.prototype._updateAttrColor = function(e, t, r, n, i) {
                                    return 2 === t ? (e |= 50331648, e &= -16777216, e |= v.AttributeData.fromColorRGB([r, n, i])) : 5 === t && (e &= -50331904, e |= 33554432 | 255 & r), e
                                }, t.prototype._extractColor = function(e, t, r) {
                                    var n = [0, 0, -1, 0, 0, 0],
                                        i = 0,
                                        o = 0;
                                    do {
                                        if (n[o + i] = e.params[t + o], e.hasSubParams(t + o)) {
                                            var s = e.getSubParams(t + o),
                                                a = 0;
                                            do {
                                                5 === n[1] && (i = 1), n[o + a + 1 + i] = s[a]
                                            } while (++a < s.length && a + o + 1 + i < n.length);
                                            break
                                        }
                                        if (5 === n[1] && o + i >= 2 || 2 === n[1] && o + i >= 5) break;
                                        n[1] && (i = 1)
                                    } while (++o + t < e.length && o + i < n.length);
                                    for (a = 2; a < n.length; ++a) - 1 === n[a] && (n[a] = 0);
                                    switch (n[0]) {
                                        case 38:
                                            r.fg = this._updateAttrColor(r.fg, n[1], n[3], n[4], n[5]);
                                            break;
                                        case 48:
                                            r.bg = this._updateAttrColor(r.bg, n[1], n[3], n[4], n[5]);
                                            break;
                                        case 58:
                                            r.extended = r.extended.clone(), r.extended.underlineColor = this._updateAttrColor(r.extended.underlineColor, n[1], n[3], n[4], n[5])
                                    }
                                    return o
                                }, t.prototype._processUnderline = function(e, t) {
                                    t.extended = t.extended.clone(), (!~e || e > 5) && (e = 1), t.extended.underlineStyle = e, t.fg |= 268435456, 0 === e && (t.fg &= -268435457), t.updateExtended()
                                }, t.prototype.charAttributes = function(e) {
                                    if (1 === e.length && 0 === e.params[0]) return this._curAttrData.fg = h.DEFAULT_ATTR_DATA.fg, this._curAttrData.bg = h.DEFAULT_ATTR_DATA.bg, !0;
                                    for (var t, r = e.length, n = this._curAttrData, i = 0; i < r; i++)(t = e.params[i]) >= 30 && t <= 37 ? (n.fg &= -50331904, n.fg |= 16777216 | t - 30) : t >= 40 && t <= 47 ? (n.bg &= -50331904, n.bg |= 16777216 | t - 40) : t >= 90 && t <= 97 ? (n.fg &= -50331904, n.fg |= 16777224 | t - 90) : t >= 100 && t <= 107 ? (n.bg &= -50331904, n.bg |= 16777224 | t - 100) : 0 === t ? (n.fg = h.DEFAULT_ATTR_DATA.fg, n.bg = h.DEFAULT_ATTR_DATA.bg) : 1 === t ? n.fg |= 134217728 : 3 === t ? n.bg |= 67108864 : 4 === t ? (n.fg |= 268435456, this._processUnderline(e.hasSubParams(i) ? e.getSubParams(i)[0] : 1, n)) : 5 === t ? n.fg |= 536870912 : 7 === t ? n.fg |= 67108864 : 8 === t ? n.fg |= 1073741824 : 2 === t ? n.bg |= 134217728 : 21 === t ? this._processUnderline(2, n) : 22 === t ? (n.fg &= -134217729, n.bg &= -134217729) : 23 === t ? n.bg &= -67108865 : 24 === t ? n.fg &= -268435457 : 25 === t ? n.fg &= -536870913 : 27 === t ? n.fg &= -67108865 : 28 === t ? n.fg &= -1073741825 : 39 === t ? (n.fg &= -67108864, n.fg |= 16777215 & h.DEFAULT_ATTR_DATA.fg) : 49 === t ? (n.bg &= -67108864, n.bg |= 16777215 & h.DEFAULT_ATTR_DATA.bg) : 38 === t || 48 === t || 58 === t ? i += this._extractColor(e, i, n) : 59 === t ? (n.extended = n.extended.clone(), n.extended.underlineColor = -1, n.updateExtended()) : 100 === t ? (n.fg &= -67108864, n.fg |= 16777215 & h.DEFAULT_ATTR_DATA.fg, n.bg &= -67108864, n.bg |= 16777215 & h.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", t);
                                    return !0
                                }, t.prototype.deviceStatus = function(e) {
                                    switch (e.params[0]) {
                                        case 5:
                                            this._coreService.triggerDataEvent(s.C0.ESC + "[0n");
                                            break;
                                        case 6:
                                            var t = this._bufferService.buffer.y + 1,
                                                r = this._bufferService.buffer.x + 1;
                                            this._coreService.triggerDataEvent(s.C0.ESC + "[" + t + ";" + r + "R")
                                    }
                                    return !0
                                }, t.prototype.deviceStatusPrivate = function(e) {
                                    switch (e.params[0]) {
                                        case 6:
                                            var t = this._bufferService.buffer.y + 1,
                                                r = this._bufferService.buffer.x + 1;
                                            this._coreService.triggerDataEvent(s.C0.ESC + "[?" + t + ";" + r + "R")
                                    }
                                    return !0
                                }, t.prototype.softReset = function(e) {
                                    return this._coreService.isCursorHidden = !1, this._onRequestSyncScrollBar.fire(), this._bufferService.buffer.scrollTop = 0, this._bufferService.buffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = h.DEFAULT_ATTR_DATA.clone(), this._coreService.reset(), this._charsetService.reset(), this._bufferService.buffer.savedX = 0, this._bufferService.buffer.savedY = this._bufferService.buffer.ybase, this._bufferService.buffer.savedCurAttrData.fg = this._curAttrData.fg, this._bufferService.buffer.savedCurAttrData.bg = this._curAttrData.bg, this._bufferService.buffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = !1, !0
                                }, t.prototype.setCursorStyle = function(e) {
                                    var t = e.params[0] || 1;
                                    switch (t) {
                                        case 1:
                                        case 2:
                                            this._optionsService.options.cursorStyle = "block";
                                            break;
                                        case 3:
                                        case 4:
                                            this._optionsService.options.cursorStyle = "underline";
                                            break;
                                        case 5:
                                        case 6:
                                            this._optionsService.options.cursorStyle = "bar"
                                    }
                                    var r = t % 2 == 1;
                                    return this._optionsService.options.cursorBlink = r, !0
                                }, t.prototype.setScrollRegion = function(e) {
                                    var t, r = e.params[0] || 1;
                                    return (e.length < 2 || (t = e.params[1]) > this._bufferService.rows || 0 === t) && (t = this._bufferService.rows), t > r && (this._bufferService.buffer.scrollTop = r - 1, this._bufferService.buffer.scrollBottom = t - 1, this._setCursor(0, 0)), !0
                                }, t.prototype.windowOptions = function(e) {
                                    if (!S(e.params[0], this._optionsService.options.windowOptions)) return !0;
                                    var t = e.length > 1 ? e.params[1] : 0;
                                    switch (e.params[0]) {
                                        case 14:
                                            2 !== t && this._onRequestWindowsOptionsReport.fire(o.GET_WIN_SIZE_PIXELS);
                                            break;
                                        case 16:
                                            this._onRequestWindowsOptionsReport.fire(o.GET_CELL_SIZE_PIXELS);
                                            break;
                                        case 18:
                                            this._bufferService && this._coreService.triggerDataEvent(s.C0.ESC + "[8;" + this._bufferService.rows + ";" + this._bufferService.cols + "t");
                                            break;
                                        case 22:
                                            0 !== t && 2 !== t || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), 0 !== t && 1 !== t || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
                                            break;
                                        case 23:
                                            0 !== t && 2 !== t || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), 0 !== t && 1 !== t || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop())
                                    }
                                    return !0
                                }, t.prototype.saveCursor = function(e) {
                                    return this._bufferService.buffer.savedX = this._bufferService.buffer.x, this._bufferService.buffer.savedY = this._bufferService.buffer.ybase + this._bufferService.buffer.y, this._bufferService.buffer.savedCurAttrData.fg = this._curAttrData.fg, this._bufferService.buffer.savedCurAttrData.bg = this._curAttrData.bg, this._bufferService.buffer.savedCharset = this._charsetService.charset, !0
                                }, t.prototype.restoreCursor = function(e) {
                                    return this._bufferService.buffer.x = this._bufferService.buffer.savedX || 0, this._bufferService.buffer.y = Math.max(this._bufferService.buffer.savedY - this._bufferService.buffer.ybase, 0), this._curAttrData.fg = this._bufferService.buffer.savedCurAttrData.fg, this._curAttrData.bg = this._bufferService.buffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._bufferService.buffer.savedCharset && (this._charsetService.charset = this._bufferService.buffer.savedCharset), this._restrictCursor(), !0
                                }, t.prototype.setTitle = function(e) {
                                    return this._windowTitle = e, this._onTitleChange.fire(e), !0
                                }, t.prototype.setIconName = function(e) {
                                    return this._iconName = e, !0
                                }, t.prototype._parseAnsiColorChange = function(e) {
                                    for (var t, r = {
                                            colors: []
                                        }, n = /(\d+);rgb:([0-9a-f]{2})\/([0-9a-f]{2})\/([0-9a-f]{2})/gi; null !== (t = n.exec(e));) r.colors.push({
                                        colorIndex: parseInt(t[1]),
                                        red: parseInt(t[2], 16),
                                        green: parseInt(t[3], 16),
                                        blue: parseInt(t[4], 16)
                                    });
                                    return 0 === r.colors.length ? null : r
                                }, t.prototype.setAnsiColor = function(e) {
                                    var t = this._parseAnsiColorChange(e);
                                    return t ? this._onAnsiColorChange.fire(t) : this._logService.warn("Expected format <num>;rgb:<rr>/<gg>/<bb> but got data: " + e), !0
                                }, t.prototype.nextLine = function() {
                                    return this._bufferService.buffer.x = 0, this.index(), !0
                                }, t.prototype.keypadApplicationMode = function() {
                                    return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, this._onRequestSyncScrollBar.fire(), !0
                                }, t.prototype.keypadNumericMode = function() {
                                    return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, this._onRequestSyncScrollBar.fire(), !0
                                }, t.prototype.selectDefaultCharset = function() {
                                    return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, a.DEFAULT_CHARSET), !0
                                }, t.prototype.selectCharset = function(e) {
                                    return 2 !== e.length ? (this.selectDefaultCharset(), !0) : ("/" === e[0] || this._charsetService.setgCharset(y[e[0]], a.CHARSETS[e[1]] || a.DEFAULT_CHARSET), !0)
                                }, t.prototype.index = function() {
                                    this._restrictCursor();
                                    var e = this._bufferService.buffer;
                                    return this._bufferService.buffer.y++, e.y === e.scrollBottom + 1 ? (e.y--, this._onRequestScroll.fire(this._eraseAttrData())) : e.y >= this._bufferService.rows && (e.y = this._bufferService.rows - 1), this._restrictCursor(), !0
                                }, t.prototype.tabSet = function() {
                                    return this._bufferService.buffer.tabs[this._bufferService.buffer.x] = !0, !0
                                }, t.prototype.reverseIndex = function() {
                                    this._restrictCursor();
                                    var e = this._bufferService.buffer;
                                    if (e.y === e.scrollTop) {
                                        var t = e.scrollBottom - e.scrollTop;
                                        e.lines.shiftElements(e.ybase + e.y, t, 1), e.lines.set(e.ybase + e.y, e.getBlankLine(this._eraseAttrData())), this._dirtyRowService.markRangeDirty(e.scrollTop, e.scrollBottom)
                                    } else e.y--, this._restrictCursor();
                                    return !0
                                }, t.prototype.fullReset = function() {
                                    return this._parser.reset(), this._onRequestReset.fire(), !0
                                }, t.prototype.reset = function() {
                                    this._curAttrData = h.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = h.DEFAULT_ATTR_DATA.clone()
                                }, t.prototype._eraseAttrData = function() {
                                    return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal
                                }, t.prototype.setgLevel = function(e) {
                                    return this._charsetService.setgLevel(e), !0
                                }, t.prototype.screenAlignmentPattern = function() {
                                    var e = new _.CellData;
                                    e.content = 1 << 22 | "E".charCodeAt(0), e.fg = this._curAttrData.fg, e.bg = this._curAttrData.bg;
                                    var t = this._bufferService.buffer;
                                    this._setCursor(0, 0);
                                    for (var r = 0; r < this._bufferService.rows; ++r) {
                                        var n = t.ybase + t.y + r,
                                            i = t.lines.get(n);
                                        i && (i.fill(e), i.isWrapped = !1)
                                    }
                                    return this._dirtyRowService.markAllDirty(), this._setCursor(0, 0), !0
                                }, t
                            }(c.Disposable);
                        t.InputHandler = w
                    },
                    844: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.getDisposeArrayDisposable = t.disposeArray = t.Disposable = void 0;
                        var r = function() {
                            function e() {
                                this._disposables = [], this._isDisposed = !1
                            }
                            return e.prototype.dispose = function() {
                                this._isDisposed = !0;
                                for (var e = 0, t = this._disposables; e < t.length; e++) t[e].dispose();
                                this._disposables.length = 0
                            }, e.prototype.register = function(e) {
                                return this._disposables.push(e), e
                            }, e.prototype.unregister = function(e) {
                                var t = this._disposables.indexOf(e); - 1 !== t && this._disposables.splice(t, 1)
                            }, e
                        }();

                        function n(e) {
                            for (var t = 0, r = e; t < r.length; t++) r[t].dispose();
                            e.length = 0
                        }
                        t.Disposable = r, t.disposeArray = n, t.getDisposeArrayDisposable = function(e) {
                            return {
                                dispose: function() {
                                    return n(e)
                                }
                            }
                        }
                    },
                    6114: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.isLinux = t.isWindows = t.isIphone = t.isIpad = t.isMac = t.isSafari = t.isFirefox = void 0;
                        var r = "undefined" == typeof navigator,
                            n = r ? "node" : navigator.userAgent,
                            i = r ? "node" : navigator.platform;
                        t.isFirefox = n.includes("Firefox"), t.isSafari = /^((?!chrome|android).)*safari/i.test(n), t.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(i), t.isIpad = "iPad" === i, t.isIphone = "iPhone" === i, t.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(i), t.isLinux = i.indexOf("Linux") >= 0
                    },
                    8273: (e, t) => {
                        function r(e, t, r, n) {
                            if (void 0 === r && (r = 0), void 0 === n && (n = e.length), r >= e.length) return e;
                            r = (e.length + r) % e.length, n = n >= e.length ? e.length : (e.length + n) % e.length;
                            for (var i = r; i < n; ++i) e[i] = t;
                            return e
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.concat = t.fillFallback = t.fill = void 0, t.fill = function(e, t, n, i) {
                            return e.fill ? e.fill(t, n, i) : r(e, t, n, i)
                        }, t.fillFallback = r, t.concat = function(e, t) {
                            var r = new e.constructor(e.length + t.length);
                            return r.set(e), r.set(t, e.length), r
                        }
                    },
                    9282: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.updateWindowsModeWrappedState = void 0;
                        var n = r(643);
                        t.updateWindowsModeWrappedState = function(e) {
                            var t = e.buffer.lines.get(e.buffer.ybase + e.buffer.y - 1),
                                r = null == t ? void 0 : t.get(e.cols - 1),
                                i = e.buffer.lines.get(e.buffer.ybase + e.buffer.y);
                            i && r && (i.isWrapped = r[n.CHAR_DATA_CODE_INDEX] !== n.NULL_CELL_CODE && r[n.CHAR_DATA_CODE_INDEX] !== n.WHITESPACE_CELL_CODE)
                        }
                    },
                    3734: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.ExtendedAttrs = t.AttributeData = void 0;
                        var r = function() {
                            function e() {
                                this.fg = 0, this.bg = 0, this.extended = new n
                            }
                            return e.toColorRGB = function(e) {
                                return [e >>> 16 & 255, e >>> 8 & 255, 255 & e]
                            }, e.fromColorRGB = function(e) {
                                return (255 & e[0]) << 16 | (255 & e[1]) << 8 | 255 & e[2]
                            }, e.prototype.clone = function() {
                                var t = new e;
                                return t.fg = this.fg, t.bg = this.bg, t.extended = this.extended.clone(), t
                            }, e.prototype.isInverse = function() {
                                return 67108864 & this.fg
                            }, e.prototype.isBold = function() {
                                return 134217728 & this.fg
                            }, e.prototype.isUnderline = function() {
                                return 268435456 & this.fg
                            }, e.prototype.isBlink = function() {
                                return 536870912 & this.fg
                            }, e.prototype.isInvisible = function() {
                                return 1073741824 & this.fg
                            }, e.prototype.isItalic = function() {
                                return 67108864 & this.bg
                            }, e.prototype.isDim = function() {
                                return 134217728 & this.bg
                            }, e.prototype.getFgColorMode = function() {
                                return 50331648 & this.fg
                            }, e.prototype.getBgColorMode = function() {
                                return 50331648 & this.bg
                            }, e.prototype.isFgRGB = function() {
                                return 50331648 == (50331648 & this.fg)
                            }, e.prototype.isBgRGB = function() {
                                return 50331648 == (50331648 & this.bg)
                            }, e.prototype.isFgPalette = function() {
                                return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg)
                            }, e.prototype.isBgPalette = function() {
                                return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg)
                            }, e.prototype.isFgDefault = function() {
                                return 0 == (50331648 & this.fg)
                            }, e.prototype.isBgDefault = function() {
                                return 0 == (50331648 & this.bg)
                            }, e.prototype.isAttributeDefault = function() {
                                return 0 === this.fg && 0 === this.bg
                            }, e.prototype.getFgColor = function() {
                                switch (50331648 & this.fg) {
                                    case 16777216:
                                    case 33554432:
                                        return 255 & this.fg;
                                    case 50331648:
                                        return 16777215 & this.fg;
                                    default:
                                        return -1
                                }
                            }, e.prototype.getBgColor = function() {
                                switch (50331648 & this.bg) {
                                    case 16777216:
                                    case 33554432:
                                        return 255 & this.bg;
                                    case 50331648:
                                        return 16777215 & this.bg;
                                    default:
                                        return -1
                                }
                            }, e.prototype.hasExtendedAttrs = function() {
                                return 268435456 & this.bg
                            }, e.prototype.updateExtended = function() {
                                this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456
                            }, e.prototype.getUnderlineColor = function() {
                                if (268435456 & this.bg && ~this.extended.underlineColor) switch (50331648 & this.extended.underlineColor) {
                                    case 16777216:
                                    case 33554432:
                                        return 255 & this.extended.underlineColor;
                                    case 50331648:
                                        return 16777215 & this.extended.underlineColor;
                                    default:
                                        return this.getFgColor()
                                }
                                return this.getFgColor()
                            }, e.prototype.getUnderlineColorMode = function() {
                                return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode()
                            }, e.prototype.isUnderlineColorRGB = function() {
                                return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 == (50331648 & this.extended.underlineColor) : this.isFgRGB()
                            }, e.prototype.isUnderlineColorPalette = function() {
                                return 268435456 & this.bg && ~this.extended.underlineColor ? 16777216 == (50331648 & this.extended.underlineColor) || 33554432 == (50331648 & this.extended.underlineColor) : this.isFgPalette()
                            }, e.prototype.isUnderlineColorDefault = function() {
                                return 268435456 & this.bg && ~this.extended.underlineColor ? 0 == (50331648 & this.extended.underlineColor) : this.isFgDefault()
                            }, e.prototype.getUnderlineStyle = function() {
                                return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0
                            }, e
                        }();
                        t.AttributeData = r;
                        var n = function() {
                            function e(e, t) {
                                void 0 === e && (e = 0), void 0 === t && (t = -1), this.underlineStyle = e, this.underlineColor = t
                            }
                            return e.prototype.clone = function() {
                                return new e(this.underlineStyle, this.underlineColor)
                            }, e.prototype.isEmpty = function() {
                                return 0 === this.underlineStyle
                            }, e
                        }();
                        t.ExtendedAttrs = n
                    },
                    9092: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.BufferStringIterator = t.Buffer = t.MAX_BUFFER_SIZE = void 0;
                        var n = r(6349),
                            i = r(8437),
                            o = r(511),
                            s = r(643),
                            a = r(4634),
                            l = r(4863),
                            c = r(7116),
                            u = r(3734);
                        t.MAX_BUFFER_SIZE = 4294967295;
                        var f = function() {
                            function e(e, t, r) {
                                this._hasScrollback = e, this._optionsService = t, this._bufferService = r, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = i.DEFAULT_ATTR_DATA.clone(), this.savedCharset = c.DEFAULT_CHARSET, this.markers = [], this._nullCell = o.CellData.fromCharData([0, s.NULL_CELL_CHAR, s.NULL_CELL_WIDTH, s.NULL_CELL_CODE]), this._whitespaceCell = o.CellData.fromCharData([0, s.WHITESPACE_CELL_CHAR, s.WHITESPACE_CELL_WIDTH, s.WHITESPACE_CELL_CODE]), this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new n.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops()
                            }
                            return e.prototype.getNullCell = function(e) {
                                return e ? (this._nullCell.fg = e.fg, this._nullCell.bg = e.bg, this._nullCell.extended = e.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new u.ExtendedAttrs), this._nullCell
                            }, e.prototype.getWhitespaceCell = function(e) {
                                return e ? (this._whitespaceCell.fg = e.fg, this._whitespaceCell.bg = e.bg, this._whitespaceCell.extended = e.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new u.ExtendedAttrs), this._whitespaceCell
                            }, e.prototype.getBlankLine = function(e, t) {
                                return new i.BufferLine(this._bufferService.cols, this.getNullCell(e), t)
                            }, Object.defineProperty(e.prototype, "hasScrollback", {
                                get: function() {
                                    return this._hasScrollback && this.lines.maxLength > this._rows
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "isCursorInViewport", {
                                get: function() {
                                    var e = this.ybase + this.y - this.ydisp;
                                    return e >= 0 && e < this._rows
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype._getCorrectBufferLength = function(e) {
                                if (!this._hasScrollback) return e;
                                var r = e + this._optionsService.options.scrollback;
                                return r > t.MAX_BUFFER_SIZE ? t.MAX_BUFFER_SIZE : r
                            }, e.prototype.fillViewportRows = function(e) {
                                if (0 === this.lines.length) {
                                    void 0 === e && (e = i.DEFAULT_ATTR_DATA);
                                    for (var t = this._rows; t--;) this.lines.push(this.getBlankLine(e))
                                }
                            }, e.prototype.clear = function() {
                                this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new n.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops()
                            }, e.prototype.resize = function(e, t) {
                                var r = this.getNullCell(i.DEFAULT_ATTR_DATA),
                                    n = this._getCorrectBufferLength(t);
                                if (n > this.lines.maxLength && (this.lines.maxLength = n), this.lines.length > 0) {
                                    if (this._cols < e)
                                        for (var o = 0; o < this.lines.length; o++) this.lines.get(o).resize(e, r);
                                    var s = 0;
                                    if (this._rows < t)
                                        for (var a = this._rows; a < t; a++) this.lines.length < t + this.ybase && (this._optionsService.options.windowsMode ? this.lines.push(new i.BufferLine(e, r)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + s + 1 ? (this.ybase--, s++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new i.BufferLine(e, r)));
                                    else
                                        for (a = this._rows; a > t; a--) this.lines.length > t + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
                                    if (n < this.lines.maxLength) {
                                        var l = this.lines.length - n;
                                        l > 0 && (this.lines.trimStart(l), this.ybase = Math.max(this.ybase - l, 0), this.ydisp = Math.max(this.ydisp - l, 0), this.savedY = Math.max(this.savedY - l, 0)), this.lines.maxLength = n
                                    }
                                    this.x = Math.min(this.x, e - 1), this.y = Math.min(this.y, t - 1), s && (this.y += s), this.savedX = Math.min(this.savedX, e - 1), this.scrollTop = 0
                                }
                                if (this.scrollBottom = t - 1, this._isReflowEnabled && (this._reflow(e, t), this._cols > e))
                                    for (o = 0; o < this.lines.length; o++) this.lines.get(o).resize(e, r);
                                this._cols = e, this._rows = t
                            }, Object.defineProperty(e.prototype, "_isReflowEnabled", {
                                get: function() {
                                    return this._hasScrollback && !this._optionsService.options.windowsMode
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype._reflow = function(e, t) {
                                this._cols !== e && (e > this._cols ? this._reflowLarger(e, t) : this._reflowSmaller(e, t))
                            }, e.prototype._reflowLarger = function(e, t) {
                                var r = a.reflowLargerGetLinesToRemove(this.lines, this._cols, e, this.ybase + this.y, this.getNullCell(i.DEFAULT_ATTR_DATA));
                                if (r.length > 0) {
                                    var n = a.reflowLargerCreateNewLayout(this.lines, r);
                                    a.reflowLargerApplyNewLayout(this.lines, n.layout), this._reflowLargerAdjustViewport(e, t, n.countRemoved)
                                }
                            }, e.prototype._reflowLargerAdjustViewport = function(e, t, r) {
                                for (var n = this.getNullCell(i.DEFAULT_ATTR_DATA), o = r; o-- > 0;) 0 === this.ybase ? (this.y > 0 && this.y--, this.lines.length < t && this.lines.push(new i.BufferLine(e, n))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
                                this.savedY = Math.max(this.savedY - r, 0)
                            }, e.prototype._reflowSmaller = function(e, t) {
                                for (var r = this.getNullCell(i.DEFAULT_ATTR_DATA), n = [], o = 0, s = this.lines.length - 1; s >= 0; s--) {
                                    var l = this.lines.get(s);
                                    if (!(!l || !l.isWrapped && l.getTrimmedLength() <= e)) {
                                        for (var c = [l]; l.isWrapped && s > 0;) l = this.lines.get(--s), c.unshift(l);
                                        var u = this.ybase + this.y;
                                        if (!(u >= s && u < s + c.length)) {
                                            var f, h = c[c.length - 1].getTrimmedLength(),
                                                d = a.reflowSmallerGetNewLineLengths(c, this._cols, e),
                                                p = d.length - c.length;
                                            f = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + p) : Math.max(0, this.lines.length - this.lines.maxLength + p);
                                            for (var _ = [], v = 0; v < p; v++) {
                                                var m = this.getBlankLine(i.DEFAULT_ATTR_DATA, !0);
                                                _.push(m)
                                            }
                                            _.length > 0 && (n.push({
                                                start: s + c.length + o,
                                                newLines: _
                                            }), o += _.length), c.push.apply(c, _);
                                            var g = d.length - 1,
                                                y = d[g];
                                            0 === y && (y = d[--g]);
                                            for (var b = c.length - p - 1, S = h; b >= 0;) {
                                                var C = Math.min(S, y);
                                                if (c[g].copyCellsFrom(c[b], S - C, y - C, C, !0), 0 == (y -= C) && (y = d[--g]), 0 == (S -= C)) {
                                                    b--;
                                                    var w = Math.max(b, 0);
                                                    S = a.getWrappedLineTrimmedLength(c, w, this._cols)
                                                }
                                            }
                                            for (v = 0; v < c.length; v++) d[v] < e && c[v].setCell(d[v], r);
                                            for (var E = p - f; E-- > 0;) 0 === this.ybase ? this.y < t - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + o) - t && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
                                            this.savedY = Math.min(this.savedY + p, this.ybase + t - 1)
                                        }
                                    }
                                }
                                if (n.length > 0) {
                                    var x = [],
                                        k = [];
                                    for (v = 0; v < this.lines.length; v++) k.push(this.lines.get(v));
                                    var T = this.lines.length,
                                        L = T - 1,
                                        O = 0,
                                        R = n[O];
                                    this.lines.length = Math.min(this.lines.maxLength, this.lines.length + o);
                                    var A = 0;
                                    for (v = Math.min(this.lines.maxLength - 1, T + o - 1); v >= 0; v--)
                                        if (R && R.start > L + A) {
                                            for (var P = R.newLines.length - 1; P >= 0; P--) this.lines.set(v--, R.newLines[P]);
                                            v++, x.push({
                                                index: L + 1,
                                                amount: R.newLines.length
                                            }), A += R.newLines.length, R = n[++O]
                                        } else this.lines.set(v, k[L--]);
                                    var M = 0;
                                    for (v = x.length - 1; v >= 0; v--) x[v].index += M, this.lines.onInsertEmitter.fire(x[v]), M += x[v].amount;
                                    var D = Math.max(0, T + o - this.lines.maxLength);
                                    D > 0 && this.lines.onTrimEmitter.fire(D)
                                }
                            }, e.prototype.stringIndexToBufferIndex = function(e, t, r) {
                                for (void 0 === r && (r = !1); t;) {
                                    var n = this.lines.get(e);
                                    if (!n) return [-1, -1];
                                    for (var i = r ? n.getTrimmedLength() : n.length, o = 0; o < i; ++o)
                                        if (n.get(o)[s.CHAR_DATA_WIDTH_INDEX] && (t -= n.get(o)[s.CHAR_DATA_CHAR_INDEX].length || 1), t < 0) return [e, o];
                                    e++
                                }
                                return [e, 0]
                            }, e.prototype.translateBufferLineToString = function(e, t, r, n) {
                                void 0 === r && (r = 0);
                                var i = this.lines.get(e);
                                return i ? i.translateToString(t, r, n) : ""
                            }, e.prototype.getWrappedRangeForLine = function(e) {
                                for (var t = e, r = e; t > 0 && this.lines.get(t).isWrapped;) t--;
                                for (; r + 1 < this.lines.length && this.lines.get(r + 1).isWrapped;) r++;
                                return {
                                    first: t,
                                    last: r
                                }
                            }, e.prototype.setupTabStops = function(e) {
                                for (null != e ? this.tabs[e] || (e = this.prevStop(e)) : (this.tabs = {}, e = 0); e < this._cols; e += this._optionsService.options.tabStopWidth) this.tabs[e] = !0
                            }, e.prototype.prevStop = function(e) {
                                for (null == e && (e = this.x); !this.tabs[--e] && e > 0;);
                                return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e
                            }, e.prototype.nextStop = function(e) {
                                for (null == e && (e = this.x); !this.tabs[++e] && e < this._cols;);
                                return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e
                            }, e.prototype.addMarker = function(e) {
                                var t = this,
                                    r = new l.Marker(e);
                                return this.markers.push(r), r.register(this.lines.onTrim((function(e) {
                                    r.line -= e, r.line < 0 && r.dispose()
                                }))), r.register(this.lines.onInsert((function(e) {
                                    r.line >= e.index && (r.line += e.amount)
                                }))), r.register(this.lines.onDelete((function(e) {
                                    r.line >= e.index && r.line < e.index + e.amount && r.dispose(), r.line > e.index && (r.line -= e.amount)
                                }))), r.register(r.onDispose((function() {
                                    return t._removeMarker(r)
                                }))), r
                            }, e.prototype._removeMarker = function(e) {
                                this.markers.splice(this.markers.indexOf(e), 1)
                            }, e.prototype.iterator = function(e, t, r, n, i) {
                                return new h(this, e, t, r, n, i)
                            }, e
                        }();
                        t.Buffer = f;
                        var h = function() {
                            function e(e, t, r, n, i, o) {
                                void 0 === r && (r = 0), void 0 === n && (n = e.lines.length), void 0 === i && (i = 0), void 0 === o && (o = 0), this._buffer = e, this._trimRight = t, this._startIndex = r, this._endIndex = n, this._startOverscan = i, this._endOverscan = o, this._startIndex < 0 && (this._startIndex = 0), this._endIndex > this._buffer.lines.length && (this._endIndex = this._buffer.lines.length), this._current = this._startIndex
                            }
                            return e.prototype.hasNext = function() {
                                return this._current < this._endIndex
                            }, e.prototype.next = function() {
                                var e = this._buffer.getWrappedRangeForLine(this._current);
                                e.first < this._startIndex - this._startOverscan && (e.first = this._startIndex - this._startOverscan), e.last > this._endIndex + this._endOverscan && (e.last = this._endIndex + this._endOverscan), e.first = Math.max(e.first, 0), e.last = Math.min(e.last, this._buffer.lines.length);
                                for (var t = "", r = e.first; r <= e.last; ++r) t += this._buffer.translateBufferLineToString(r, this._trimRight);
                                return this._current = e.last + 1, {
                                    range: e,
                                    content: t
                                }
                            }, e
                        }();
                        t.BufferStringIterator = h
                    },
                    8437: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.BufferLine = t.DEFAULT_ATTR_DATA = void 0;
                        var n = r(482),
                            i = r(643),
                            o = r(511),
                            s = r(3734);
                        t.DEFAULT_ATTR_DATA = Object.freeze(new s.AttributeData);
                        var a = function() {
                            function e(e, t, r) {
                                void 0 === r && (r = !1), this.isWrapped = r, this._combined = {}, this._extendedAttrs = {}, this._data = new Uint32Array(3 * e);
                                for (var n = t || o.CellData.fromCharData([0, i.NULL_CELL_CHAR, i.NULL_CELL_WIDTH, i.NULL_CELL_CODE]), s = 0; s < e; ++s) this.setCell(s, n);
                                this.length = e
                            }
                            return e.prototype.get = function(e) {
                                var t = this._data[3 * e + 0],
                                    r = 2097151 & t;
                                return [this._data[3 * e + 1], 2097152 & t ? this._combined[e] : r ? n.stringFromCodePoint(r) : "", t >> 22, 2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : r]
                            }, e.prototype.set = function(e, t) {
                                this._data[3 * e + 1] = t[i.CHAR_DATA_ATTR_INDEX], t[i.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e] = t[1], this._data[3 * e + 0] = 2097152 | e | t[i.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[3 * e + 0] = t[i.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t[i.CHAR_DATA_WIDTH_INDEX] << 22
                            }, e.prototype.getWidth = function(e) {
                                return this._data[3 * e + 0] >> 22
                            }, e.prototype.hasWidth = function(e) {
                                return 12582912 & this._data[3 * e + 0]
                            }, e.prototype.getFg = function(e) {
                                return this._data[3 * e + 1]
                            }, e.prototype.getBg = function(e) {
                                return this._data[3 * e + 2]
                            }, e.prototype.hasContent = function(e) {
                                return 4194303 & this._data[3 * e + 0]
                            }, e.prototype.getCodePoint = function(e) {
                                var t = this._data[3 * e + 0];
                                return 2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : 2097151 & t
                            }, e.prototype.isCombined = function(e) {
                                return 2097152 & this._data[3 * e + 0]
                            }, e.prototype.getString = function(e) {
                                var t = this._data[3 * e + 0];
                                return 2097152 & t ? this._combined[e] : 2097151 & t ? n.stringFromCodePoint(2097151 & t) : ""
                            }, e.prototype.loadCell = function(e, t) {
                                var r = 3 * e;
                                return t.content = this._data[r + 0], t.fg = this._data[r + 1], t.bg = this._data[r + 2], 2097152 & t.content && (t.combinedData = this._combined[e]), 268435456 & t.bg && (t.extended = this._extendedAttrs[e]), t
                            }, e.prototype.setCell = function(e, t) {
                                2097152 & t.content && (this._combined[e] = t.combinedData), 268435456 & t.bg && (this._extendedAttrs[e] = t.extended), this._data[3 * e + 0] = t.content, this._data[3 * e + 1] = t.fg, this._data[3 * e + 2] = t.bg
                            }, e.prototype.setCellFromCodePoint = function(e, t, r, n, i, o) {
                                268435456 & i && (this._extendedAttrs[e] = o), this._data[3 * e + 0] = t | r << 22, this._data[3 * e + 1] = n, this._data[3 * e + 2] = i
                            }, e.prototype.addCodepointToCell = function(e, t) {
                                var r = this._data[3 * e + 0];
                                2097152 & r ? this._combined[e] += n.stringFromCodePoint(t) : (2097151 & r ? (this._combined[e] = n.stringFromCodePoint(2097151 & r) + n.stringFromCodePoint(t), r &= -2097152, r |= 2097152) : r = t | 1 << 22, this._data[3 * e + 0] = r)
                            }, e.prototype.insertCells = function(e, t, r, n) {
                                if ((e %= this.length) && 2 === this.getWidth(e - 1) && this.setCellFromCodePoint(e - 1, 0, 1, (null == n ? void 0 : n.fg) || 0, (null == n ? void 0 : n.bg) || 0, (null == n ? void 0 : n.extended) || new s.ExtendedAttrs), t < this.length - e) {
                                    for (var i = new o.CellData, a = this.length - e - t - 1; a >= 0; --a) this.setCell(e + t + a, this.loadCell(e + a, i));
                                    for (a = 0; a < t; ++a) this.setCell(e + a, r)
                                } else
                                    for (a = e; a < this.length; ++a) this.setCell(a, r);
                                2 === this.getWidth(this.length - 1) && this.setCellFromCodePoint(this.length - 1, 0, 1, (null == n ? void 0 : n.fg) || 0, (null == n ? void 0 : n.bg) || 0, (null == n ? void 0 : n.extended) || new s.ExtendedAttrs)
                            }, e.prototype.deleteCells = function(e, t, r, n) {
                                if (e %= this.length, t < this.length - e) {
                                    for (var i = new o.CellData, a = 0; a < this.length - e - t; ++a) this.setCell(e + a, this.loadCell(e + t + a, i));
                                    for (a = this.length - t; a < this.length; ++a) this.setCell(a, r)
                                } else
                                    for (a = e; a < this.length; ++a) this.setCell(a, r);
                                e && 2 === this.getWidth(e - 1) && this.setCellFromCodePoint(e - 1, 0, 1, (null == n ? void 0 : n.fg) || 0, (null == n ? void 0 : n.bg) || 0, (null == n ? void 0 : n.extended) || new s.ExtendedAttrs), 0 !== this.getWidth(e) || this.hasContent(e) || this.setCellFromCodePoint(e, 0, 1, (null == n ? void 0 : n.fg) || 0, (null == n ? void 0 : n.bg) || 0, (null == n ? void 0 : n.extended) || new s.ExtendedAttrs)
                            }, e.prototype.replaceCells = function(e, t, r, n) {
                                for (e && 2 === this.getWidth(e - 1) && this.setCellFromCodePoint(e - 1, 0, 1, (null == n ? void 0 : n.fg) || 0, (null == n ? void 0 : n.bg) || 0, (null == n ? void 0 : n.extended) || new s.ExtendedAttrs), t < this.length && 2 === this.getWidth(t - 1) && this.setCellFromCodePoint(t, 0, 1, (null == n ? void 0 : n.fg) || 0, (null == n ? void 0 : n.bg) || 0, (null == n ? void 0 : n.extended) || new s.ExtendedAttrs); e < t && e < this.length;) this.setCell(e++, r)
                            }, e.prototype.resize = function(e, t) {
                                if (e !== this.length) {
                                    if (e > this.length) {
                                        var r = new Uint32Array(3 * e);
                                        this.length && (3 * e < this._data.length ? r.set(this._data.subarray(0, 3 * e)) : r.set(this._data)), this._data = r;
                                        for (var n = this.length; n < e; ++n) this.setCell(n, t)
                                    } else if (e) {
                                        (r = new Uint32Array(3 * e)).set(this._data.subarray(0, 3 * e)), this._data = r;
                                        var i = Object.keys(this._combined);
                                        for (n = 0; n < i.length; n++) {
                                            var o = parseInt(i[n], 10);
                                            o >= e && delete this._combined[o]
                                        }
                                    } else this._data = new Uint32Array(0), this._combined = {};
                                    this.length = e
                                }
                            }, e.prototype.fill = function(e) {
                                this._combined = {}, this._extendedAttrs = {};
                                for (var t = 0; t < this.length; ++t) this.setCell(t, e)
                            }, e.prototype.copyFrom = function(e) {
                                for (var t in this.length !== e.length ? this._data = new Uint32Array(e._data) : this._data.set(e._data), this.length = e.length, this._combined = {}, e._combined) this._combined[t] = e._combined[t];
                                for (var t in this._extendedAttrs = {}, e._extendedAttrs) this._extendedAttrs[t] = e._extendedAttrs[t];
                                this.isWrapped = e.isWrapped
                            }, e.prototype.clone = function() {
                                var t = new e(0);
                                for (var r in t._data = new Uint32Array(this._data), t.length = this.length, this._combined) t._combined[r] = this._combined[r];
                                for (var r in this._extendedAttrs) t._extendedAttrs[r] = this._extendedAttrs[r];
                                return t.isWrapped = this.isWrapped, t
                            }, e.prototype.getTrimmedLength = function() {
                                for (var e = this.length - 1; e >= 0; --e)
                                    if (4194303 & this._data[3 * e + 0]) return e + (this._data[3 * e + 0] >> 22);
                                return 0
                            }, e.prototype.copyCellsFrom = function(e, t, r, n, i) {
                                var o = e._data;
                                if (i)
                                    for (var s = n - 1; s >= 0; s--)
                                        for (var a = 0; a < 3; a++) this._data[3 * (r + s) + a] = o[3 * (t + s) + a];
                                else
                                    for (s = 0; s < n; s++)
                                        for (a = 0; a < 3; a++) this._data[3 * (r + s) + a] = o[3 * (t + s) + a];
                                var l = Object.keys(e._combined);
                                for (a = 0; a < l.length; a++) {
                                    var c = parseInt(l[a], 10);
                                    c >= t && (this._combined[c - t + r] = e._combined[c])
                                }
                            }, e.prototype.translateToString = function(e, t, r) {
                                void 0 === e && (e = !1), void 0 === t && (t = 0), void 0 === r && (r = this.length), e && (r = Math.min(r, this.getTrimmedLength()));
                                for (var o = ""; t < r;) {
                                    var s = this._data[3 * t + 0],
                                        a = 2097151 & s;
                                    o += 2097152 & s ? this._combined[t] : a ? n.stringFromCodePoint(a) : i.WHITESPACE_CELL_CHAR, t += s >> 22 || 1
                                }
                                return o
                            }, e
                        }();
                        t.BufferLine = a
                    },
                    4634: (e, t) => {
                        function r(e, t, r) {
                            if (t === e.length - 1) return e[t].getTrimmedLength();
                            var n = !e[t].hasContent(r - 1) && 1 === e[t].getWidth(r - 1),
                                i = 2 === e[t + 1].getWidth(0);
                            return n && i ? r - 1 : r
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.getWrappedLineTrimmedLength = t.reflowSmallerGetNewLineLengths = t.reflowLargerApplyNewLayout = t.reflowLargerCreateNewLayout = t.reflowLargerGetLinesToRemove = void 0, t.reflowLargerGetLinesToRemove = function(e, t, n, i, o) {
                            for (var s = [], a = 0; a < e.length - 1; a++) {
                                var l = a,
                                    c = e.get(++l);
                                if (c.isWrapped) {
                                    for (var u = [e.get(a)]; l < e.length && c.isWrapped;) u.push(c), c = e.get(++l);
                                    if (i >= a && i < l) a += u.length - 1;
                                    else {
                                        for (var f = 0, h = r(u, f, t), d = 1, p = 0; d < u.length;) {
                                            var _ = r(u, d, t),
                                                v = _ - p,
                                                m = n - h,
                                                g = Math.min(v, m);
                                            u[f].copyCellsFrom(u[d], p, h, g, !1), (h += g) === n && (f++, h = 0), (p += g) === _ && (d++, p = 0), 0 === h && 0 !== f && 2 === u[f - 1].getWidth(n - 1) && (u[f].copyCellsFrom(u[f - 1], n - 1, h++, 1, !1), u[f - 1].setCell(n - 1, o))
                                        }
                                        u[f].replaceCells(h, n, o);
                                        for (var y = 0, b = u.length - 1; b > 0 && (b > f || 0 === u[b].getTrimmedLength()); b--) y++;
                                        y > 0 && (s.push(a + u.length - y), s.push(y)), a += u.length - 1
                                    }
                                }
                            }
                            return s
                        }, t.reflowLargerCreateNewLayout = function(e, t) {
                            for (var r = [], n = 0, i = t[n], o = 0, s = 0; s < e.length; s++)
                                if (i === s) {
                                    var a = t[++n];
                                    e.onDeleteEmitter.fire({
                                        index: s - o,
                                        amount: a
                                    }), s += a - 1, o += a, i = t[++n]
                                } else r.push(s);
                            return {
                                layout: r,
                                countRemoved: o
                            }
                        }, t.reflowLargerApplyNewLayout = function(e, t) {
                            for (var r = [], n = 0; n < t.length; n++) r.push(e.get(t[n]));
                            for (n = 0; n < r.length; n++) e.set(n, r[n]);
                            e.length = t.length
                        }, t.reflowSmallerGetNewLineLengths = function(e, t, n) {
                            for (var i = [], o = e.map((function(n, i) {
                                    return r(e, i, t)
                                })).reduce((function(e, t) {
                                    return e + t
                                })), s = 0, a = 0, l = 0; l < o;) {
                                if (o - l < n) {
                                    i.push(o - l);
                                    break
                                }
                                s += n;
                                var c = r(e, a, t);
                                s > c && (s -= c, a++);
                                var u = 2 === e[a].getWidth(s - 1);
                                u && s--;
                                var f = u ? n - 1 : n;
                                i.push(f), l += f
                            }
                            return i
                        }, t.getWrappedLineTrimmedLength = r
                    },
                    5295: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.BufferSet = void 0;
                        var o = r(9092),
                            s = r(8460),
                            a = function(e) {
                                function t(t, r) {
                                    var n = e.call(this) || this;
                                    return n._optionsService = t, n._bufferService = r, n._onBufferActivate = n.register(new s.EventEmitter), n.reset(), n
                                }
                                return i(t, e), Object.defineProperty(t.prototype, "onBufferActivate", {
                                    get: function() {
                                        return this._onBufferActivate.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.reset = function() {
                                    this._normal = new o.Buffer(!0, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new o.Buffer(!1, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this.setupTabStops()
                                }, Object.defineProperty(t.prototype, "alt", {
                                    get: function() {
                                        return this._alt
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "active", {
                                    get: function() {
                                        return this._activeBuffer
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "normal", {
                                    get: function() {
                                        return this._normal
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.activateNormalBuffer = function() {
                                    this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({
                                        activeBuffer: this._normal,
                                        inactiveBuffer: this._alt
                                    }))
                                }, t.prototype.activateAltBuffer = function(e) {
                                    this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({
                                        activeBuffer: this._alt,
                                        inactiveBuffer: this._normal
                                    }))
                                }, t.prototype.resize = function(e, t) {
                                    this._normal.resize(e, t), this._alt.resize(e, t)
                                }, t.prototype.setupTabStops = function(e) {
                                    this._normal.setupTabStops(e), this._alt.setupTabStops(e)
                                }, t
                            }(r(844).Disposable);
                        t.BufferSet = a
                    },
                    511: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CellData = void 0;
                        var o = r(482),
                            s = r(643),
                            a = r(3734),
                            l = function(e) {
                                function t() {
                                    var t = null !== e && e.apply(this, arguments) || this;
                                    return t.content = 0, t.fg = 0, t.bg = 0, t.extended = new a.ExtendedAttrs, t.combinedData = "", t
                                }
                                return i(t, e), t.fromCharData = function(e) {
                                    var r = new t;
                                    return r.setFromCharData(e), r
                                }, t.prototype.isCombined = function() {
                                    return 2097152 & this.content
                                }, t.prototype.getWidth = function() {
                                    return this.content >> 22
                                }, t.prototype.getChars = function() {
                                    return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? o.stringFromCodePoint(2097151 & this.content) : ""
                                }, t.prototype.getCode = function() {
                                    return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content
                                }, t.prototype.setFromCharData = function(e) {
                                    this.fg = e[s.CHAR_DATA_ATTR_INDEX], this.bg = 0;
                                    var t = !1;
                                    if (e[s.CHAR_DATA_CHAR_INDEX].length > 2) t = !0;
                                    else if (2 === e[s.CHAR_DATA_CHAR_INDEX].length) {
                                        var r = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                                        if (55296 <= r && r <= 56319) {
                                            var n = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                                            56320 <= n && n <= 57343 ? this.content = 1024 * (r - 55296) + n - 56320 + 65536 | e[s.CHAR_DATA_WIDTH_INDEX] << 22 : t = !0
                                        } else t = !0
                                    } else this.content = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e[s.CHAR_DATA_WIDTH_INDEX] << 22;
                                    t && (this.combinedData = e[s.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e[s.CHAR_DATA_WIDTH_INDEX] << 22)
                                }, t.prototype.getAsCharData = function() {
                                    return [this.fg, this.getChars(), this.getWidth(), this.getCode()]
                                }, t
                            }(a.AttributeData);
                        t.CellData = l
                    },
                    643: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.WHITESPACE_CELL_CODE = t.WHITESPACE_CELL_WIDTH = t.WHITESPACE_CELL_CHAR = t.NULL_CELL_CODE = t.NULL_CELL_WIDTH = t.NULL_CELL_CHAR = t.CHAR_DATA_CODE_INDEX = t.CHAR_DATA_WIDTH_INDEX = t.CHAR_DATA_CHAR_INDEX = t.CHAR_DATA_ATTR_INDEX = t.DEFAULT_ATTR = t.DEFAULT_COLOR = void 0, t.DEFAULT_COLOR = 256, t.DEFAULT_ATTR = 256 | t.DEFAULT_COLOR << 9, t.CHAR_DATA_ATTR_INDEX = 0, t.CHAR_DATA_CHAR_INDEX = 1, t.CHAR_DATA_WIDTH_INDEX = 2, t.CHAR_DATA_CODE_INDEX = 3, t.NULL_CELL_CHAR = "", t.NULL_CELL_WIDTH = 1, t.NULL_CELL_CODE = 0, t.WHITESPACE_CELL_CHAR = " ", t.WHITESPACE_CELL_WIDTH = 1, t.WHITESPACE_CELL_CODE = 32
                    },
                    4863: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Marker = void 0;
                        var o = r(8460),
                            s = function(e) {
                                function t(r) {
                                    var n = e.call(this) || this;
                                    return n.line = r, n._id = t._nextId++, n.isDisposed = !1, n._onDispose = new o.EventEmitter, n
                                }
                                return i(t, e), Object.defineProperty(t.prototype, "id", {
                                    get: function() {
                                        return this._id
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onDispose", {
                                    get: function() {
                                        return this._onDispose.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.dispose = function() {
                                    this.isDisposed || (this.isDisposed = !0, this.line = -1, this._onDispose.fire(), e.prototype.dispose.call(this))
                                }, t._nextId = 1, t
                            }(r(844).Disposable);
                        t.Marker = s
                    },
                    7116: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.DEFAULT_CHARSET = t.CHARSETS = void 0, t.CHARSETS = {}, t.DEFAULT_CHARSET = t.CHARSETS.B, t.CHARSETS[0] = {
                            "`": "◆",
                            a: "▒",
                            b: "␉",
                            c: "␌",
                            d: "␍",
                            e: "␊",
                            f: "°",
                            g: "±",
                            h: "␤",
                            i: "␋",
                            j: "┘",
                            k: "┐",
                            l: "┌",
                            m: "└",
                            n: "┼",
                            o: "⎺",
                            p: "⎻",
                            q: "─",
                            r: "⎼",
                            s: "⎽",
                            t: "├",
                            u: "┤",
                            v: "┴",
                            w: "┬",
                            x: "│",
                            y: "≤",
                            z: "≥",
                            "{": "π",
                            "|": "≠",
                            "}": "£",
                            "~": "·"
                        }, t.CHARSETS.A = {
                            "#": "£"
                        }, t.CHARSETS.B = void 0, t.CHARSETS[4] = {
                            "#": "£",
                            "@": "¾",
                            "[": "ij",
                            "\\": "½",
                            "]": "|",
                            "{": "¨",
                            "|": "f",
                            "}": "¼",
                            "~": "´"
                        }, t.CHARSETS.C = t.CHARSETS[5] = {
                            "[": "Ä",
                            "\\": "Ö",
                            "]": "Å",
                            "^": "Ü",
                            "`": "é",
                            "{": "ä",
                            "|": "ö",
                            "}": "å",
                            "~": "ü"
                        }, t.CHARSETS.R = {
                            "#": "£",
                            "@": "à",
                            "[": "°",
                            "\\": "ç",
                            "]": "§",
                            "{": "é",
                            "|": "ù",
                            "}": "è",
                            "~": "¨"
                        }, t.CHARSETS.Q = {
                            "@": "à",
                            "[": "â",
                            "\\": "ç",
                            "]": "ê",
                            "^": "î",
                            "`": "ô",
                            "{": "é",
                            "|": "ù",
                            "}": "è",
                            "~": "û"
                        }, t.CHARSETS.K = {
                            "@": "§",
                            "[": "Ä",
                            "\\": "Ö",
                            "]": "Ü",
                            "{": "ä",
                            "|": "ö",
                            "}": "ü",
                            "~": "ß"
                        }, t.CHARSETS.Y = {
                            "#": "£",
                            "@": "§",
                            "[": "°",
                            "\\": "ç",
                            "]": "é",
                            "`": "ù",
                            "{": "à",
                            "|": "ò",
                            "}": "è",
                            "~": "ì"
                        }, t.CHARSETS.E = t.CHARSETS[6] = {
                            "@": "Ä",
                            "[": "Æ",
                            "\\": "Ø",
                            "]": "Å",
                            "^": "Ü",
                            "`": "ä",
                            "{": "æ",
                            "|": "ø",
                            "}": "å",
                            "~": "ü"
                        }, t.CHARSETS.Z = {
                            "#": "£",
                            "@": "§",
                            "[": "¡",
                            "\\": "Ñ",
                            "]": "¿",
                            "{": "°",
                            "|": "ñ",
                            "}": "ç"
                        }, t.CHARSETS.H = t.CHARSETS[7] = {
                            "@": "É",
                            "[": "Ä",
                            "\\": "Ö",
                            "]": "Å",
                            "^": "Ü",
                            "`": "é",
                            "{": "ä",
                            "|": "ö",
                            "}": "å",
                            "~": "ü"
                        }, t.CHARSETS["="] = {
                            "#": "ù",
                            "@": "à",
                            "[": "é",
                            "\\": "ç",
                            "]": "ê",
                            "^": "î",
                            _: "è",
                            "`": "ô",
                            "{": "ä",
                            "|": "ö",
                            "}": "ü",
                            "~": "û"
                        }
                    },
                    2584: (e, t) => {
                        var r, n;
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.C1 = t.C0 = void 0, (n = t.C0 || (t.C0 = {})).NUL = "\0", n.SOH = "", n.STX = "", n.ETX = "", n.EOT = "", n.ENQ = "", n.ACK = "", n.BEL = "", n.BS = "\b", n.HT = "\t", n.LF = "\n", n.VT = "\v", n.FF = "\f", n.CR = "\r", n.SO = "", n.SI = "", n.DLE = "", n.DC1 = "", n.DC2 = "", n.DC3 = "", n.DC4 = "", n.NAK = "", n.SYN = "", n.ETB = "", n.CAN = "", n.EM = "", n.SUB = "", n.ESC = "", n.FS = "", n.GS = "", n.RS = "", n.US = "", n.SP = " ", n.DEL = "", (r = t.C1 || (t.C1 = {})).PAD = "", r.HOP = "", r.BPH = "", r.NBH = "", r.IND = "", r.NEL = "", r.SSA = "", r.ESA = "", r.HTS = "", r.HTJ = "", r.VTS = "", r.PLD = "", r.PLU = "", r.RI = "", r.SS2 = "", r.SS3 = "", r.DCS = "", r.PU1 = "", r.PU2 = "", r.STS = "", r.CCH = "", r.MW = "", r.SPA = "", r.EPA = "", r.SOS = "", r.SGCI = "", r.SCI = "", r.CSI = "", r.ST = "", r.OSC = "", r.PM = "", r.APC = ""
                    },
                    7399: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.evaluateKeyboardEvent = void 0;
                        var n = r(2584),
                            i = {
                                48: ["0", ")"],
                                49: ["1", "!"],
                                50: ["2", "@"],
                                51: ["3", "#"],
                                52: ["4", "$"],
                                53: ["5", "%"],
                                54: ["6", "^"],
                                55: ["7", "&"],
                                56: ["8", "*"],
                                57: ["9", "("],
                                186: [";", ":"],
                                187: ["=", "+"],
                                188: [",", "<"],
                                189: ["-", "_"],
                                190: [".", ">"],
                                191: ["/", "?"],
                                192: ["`", "~"],
                                219: ["[", "{"],
                                220: ["\\", "|"],
                                221: ["]", "}"],
                                222: ["'", '"']
                            };
                        t.evaluateKeyboardEvent = function(e, t, r, o) {
                            var s = {
                                    type: 0,
                                    cancel: !1,
                                    key: void 0
                                },
                                a = (e.shiftKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.ctrlKey ? 4 : 0) | (e.metaKey ? 8 : 0);
                            switch (e.keyCode) {
                                case 0:
                                    "UIKeyInputUpArrow" === e.key ? s.key = t ? n.C0.ESC + "OA" : n.C0.ESC + "[A" : "UIKeyInputLeftArrow" === e.key ? s.key = t ? n.C0.ESC + "OD" : n.C0.ESC + "[D" : "UIKeyInputRightArrow" === e.key ? s.key = t ? n.C0.ESC + "OC" : n.C0.ESC + "[C" : "UIKeyInputDownArrow" === e.key && (s.key = t ? n.C0.ESC + "OB" : n.C0.ESC + "[B");
                                    break;
                                case 8:
                                    if (e.shiftKey) {
                                        s.key = n.C0.BS;
                                        break
                                    }
                                    if (e.altKey) {
                                        s.key = n.C0.ESC + n.C0.DEL;
                                        break
                                    }
                                    s.key = n.C0.DEL;
                                    break;
                                case 9:
                                    if (e.shiftKey) {
                                        s.key = n.C0.ESC + "[Z";
                                        break
                                    }
                                    s.key = n.C0.HT, s.cancel = !0;
                                    break;
                                case 13:
                                    s.key = e.altKey ? n.C0.ESC + n.C0.CR : n.C0.CR, s.cancel = !0;
                                    break;
                                case 27:
                                    s.key = n.C0.ESC, e.altKey && (s.key = n.C0.ESC + n.C0.ESC), s.cancel = !0;
                                    break;
                                case 37:
                                    if (e.metaKey) break;
                                    a ? (s.key = n.C0.ESC + "[1;" + (a + 1) + "D", s.key === n.C0.ESC + "[1;3D" && (s.key = n.C0.ESC + (r ? "b" : "[1;5D"))) : s.key = t ? n.C0.ESC + "OD" : n.C0.ESC + "[D";
                                    break;
                                case 39:
                                    if (e.metaKey) break;
                                    a ? (s.key = n.C0.ESC + "[1;" + (a + 1) + "C", s.key === n.C0.ESC + "[1;3C" && (s.key = n.C0.ESC + (r ? "f" : "[1;5C"))) : s.key = t ? n.C0.ESC + "OC" : n.C0.ESC + "[C";
                                    break;
                                case 38:
                                    if (e.metaKey) break;
                                    a ? (s.key = n.C0.ESC + "[1;" + (a + 1) + "A", r || s.key !== n.C0.ESC + "[1;3A" || (s.key = n.C0.ESC + "[1;5A")) : s.key = t ? n.C0.ESC + "OA" : n.C0.ESC + "[A";
                                    break;
                                case 40:
                                    if (e.metaKey) break;
                                    a ? (s.key = n.C0.ESC + "[1;" + (a + 1) + "B", r || s.key !== n.C0.ESC + "[1;3B" || (s.key = n.C0.ESC + "[1;5B")) : s.key = t ? n.C0.ESC + "OB" : n.C0.ESC + "[B";
                                    break;
                                case 45:
                                    e.shiftKey || e.ctrlKey || (s.key = n.C0.ESC + "[2~");
                                    break;
                                case 46:
                                    s.key = a ? n.C0.ESC + "[3;" + (a + 1) + "~" : n.C0.ESC + "[3~";
                                    break;
                                case 36:
                                    s.key = a ? n.C0.ESC + "[1;" + (a + 1) + "H" : t ? n.C0.ESC + "OH" : n.C0.ESC + "[H";
                                    break;
                                case 35:
                                    s.key = a ? n.C0.ESC + "[1;" + (a + 1) + "F" : t ? n.C0.ESC + "OF" : n.C0.ESC + "[F";
                                    break;
                                case 33:
                                    e.shiftKey ? s.type = 2 : s.key = n.C0.ESC + "[5~";
                                    break;
                                case 34:
                                    e.shiftKey ? s.type = 3 : s.key = n.C0.ESC + "[6~";
                                    break;
                                case 112:
                                    s.key = a ? n.C0.ESC + "[1;" + (a + 1) + "P" : n.C0.ESC + "OP";
                                    break;
                                case 113:
                                    s.key = a ? n.C0.ESC + "[1;" + (a + 1) + "Q" : n.C0.ESC + "OQ";
                                    break;
                                case 114:
                                    s.key = a ? n.C0.ESC + "[1;" + (a + 1) + "R" : n.C0.ESC + "OR";
                                    break;
                                case 115:
                                    s.key = a ? n.C0.ESC + "[1;" + (a + 1) + "S" : n.C0.ESC + "OS";
                                    break;
                                case 116:
                                    s.key = a ? n.C0.ESC + "[15;" + (a + 1) + "~" : n.C0.ESC + "[15~";
                                    break;
                                case 117:
                                    s.key = a ? n.C0.ESC + "[17;" + (a + 1) + "~" : n.C0.ESC + "[17~";
                                    break;
                                case 118:
                                    s.key = a ? n.C0.ESC + "[18;" + (a + 1) + "~" : n.C0.ESC + "[18~";
                                    break;
                                case 119:
                                    s.key = a ? n.C0.ESC + "[19;" + (a + 1) + "~" : n.C0.ESC + "[19~";
                                    break;
                                case 120:
                                    s.key = a ? n.C0.ESC + "[20;" + (a + 1) + "~" : n.C0.ESC + "[20~";
                                    break;
                                case 121:
                                    s.key = a ? n.C0.ESC + "[21;" + (a + 1) + "~" : n.C0.ESC + "[21~";
                                    break;
                                case 122:
                                    s.key = a ? n.C0.ESC + "[23;" + (a + 1) + "~" : n.C0.ESC + "[23~";
                                    break;
                                case 123:
                                    s.key = a ? n.C0.ESC + "[24;" + (a + 1) + "~" : n.C0.ESC + "[24~";
                                    break;
                                default:
                                    if (!e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
                                        if (r && !o || !e.altKey || e.metaKey) !r || e.altKey || e.ctrlKey || e.shiftKey || !e.metaKey ? e.key && !e.ctrlKey && !e.altKey && !e.metaKey && e.keyCode >= 48 && 1 === e.key.length ? s.key = e.key : e.key && e.ctrlKey && "_" === e.key && (s.key = n.C0.US) : 65 === e.keyCode && (s.type = 1);
                                        else {
                                            var l = i[e.keyCode],
                                                c = l && l[e.shiftKey ? 1 : 0];
                                            if (c) s.key = n.C0.ESC + c;
                                            else if (e.keyCode >= 65 && e.keyCode <= 90) {
                                                var u = e.ctrlKey ? e.keyCode - 64 : e.keyCode + 32;
                                                s.key = n.C0.ESC + String.fromCharCode(u)
                                            }
                                        }
                                    else e.keyCode >= 65 && e.keyCode <= 90 ? s.key = String.fromCharCode(e.keyCode - 64) : 32 === e.keyCode ? s.key = n.C0.NUL : e.keyCode >= 51 && e.keyCode <= 55 ? s.key = String.fromCharCode(e.keyCode - 51 + 27) : 56 === e.keyCode ? s.key = n.C0.DEL : 219 === e.keyCode ? s.key = n.C0.ESC : 220 === e.keyCode ? s.key = n.C0.FS : 221 === e.keyCode && (s.key = n.C0.GS)
                            }
                            return s
                        }
                    },
                    482: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Utf8ToUtf32 = t.StringToUtf32 = t.utf32ToString = t.stringFromCodePoint = void 0, t.stringFromCodePoint = function(e) {
                            return e > 65535 ? (e -= 65536, String.fromCharCode(55296 + (e >> 10)) + String.fromCharCode(e % 1024 + 56320)) : String.fromCharCode(e)
                        }, t.utf32ToString = function(e, t, r) {
                            void 0 === t && (t = 0), void 0 === r && (r = e.length);
                            for (var n = "", i = t; i < r; ++i) {
                                var o = e[i];
                                o > 65535 ? (o -= 65536, n += String.fromCharCode(55296 + (o >> 10)) + String.fromCharCode(o % 1024 + 56320)) : n += String.fromCharCode(o)
                            }
                            return n
                        };
                        var r = function() {
                            function e() {
                                this._interim = 0
                            }
                            return e.prototype.clear = function() {
                                this._interim = 0
                            }, e.prototype.decode = function(e, t) {
                                var r = e.length;
                                if (!r) return 0;
                                var n = 0,
                                    i = 0;
                                this._interim && (56320 <= (a = e.charCodeAt(i++)) && a <= 57343 ? t[n++] = 1024 * (this._interim - 55296) + a - 56320 + 65536 : (t[n++] = this._interim, t[n++] = a), this._interim = 0);
                                for (var o = i; o < r; ++o) {
                                    var s = e.charCodeAt(o);
                                    if (55296 <= s && s <= 56319) {
                                        if (++o >= r) return this._interim = s, n;
                                        var a;
                                        56320 <= (a = e.charCodeAt(o)) && a <= 57343 ? t[n++] = 1024 * (s - 55296) + a - 56320 + 65536 : (t[n++] = s, t[n++] = a)
                                    } else 65279 !== s && (t[n++] = s)
                                }
                                return n
                            }, e
                        }();
                        t.StringToUtf32 = r;
                        var n = function() {
                            function e() {
                                this.interim = new Uint8Array(3)
                            }
                            return e.prototype.clear = function() {
                                this.interim.fill(0)
                            }, e.prototype.decode = function(e, t) {
                                var r = e.length;
                                if (!r) return 0;
                                var n, i, o, s, a = 0,
                                    l = 0,
                                    c = 0;
                                if (this.interim[0]) {
                                    var u = !1,
                                        f = this.interim[0];
                                    f &= 192 == (224 & f) ? 31 : 224 == (240 & f) ? 15 : 7;
                                    for (var h = 0, d = void 0;
                                        (d = 63 & this.interim[++h]) && h < 4;) f <<= 6, f |= d;
                                    for (var p = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, _ = p - h; c < _;) {
                                        if (c >= r) return 0;
                                        if (128 != (192 & (d = e[c++]))) {
                                            c--, u = !0;
                                            break
                                        }
                                        this.interim[h++] = d, f <<= 6, f |= 63 & d
                                    }
                                    u || (2 === p ? f < 128 ? c-- : t[a++] = f : 3 === p ? f < 2048 || f >= 55296 && f <= 57343 || 65279 === f || (t[a++] = f) : f < 65536 || f > 1114111 || (t[a++] = f)), this.interim.fill(0)
                                }
                                for (var v = r - 4, m = c; m < r;) {
                                    for (; !(!(m < v) || 128 & (n = e[m]) || 128 & (i = e[m + 1]) || 128 & (o = e[m + 2]) || 128 & (s = e[m + 3]));) t[a++] = n, t[a++] = i, t[a++] = o, t[a++] = s, m += 4;
                                    if ((n = e[m++]) < 128) t[a++] = n;
                                    else if (192 == (224 & n)) {
                                        if (m >= r) return this.interim[0] = n, a;
                                        if (128 != (192 & (i = e[m++]))) {
                                            m--;
                                            continue
                                        }
                                        if ((l = (31 & n) << 6 | 63 & i) < 128) {
                                            m--;
                                            continue
                                        }
                                        t[a++] = l
                                    } else if (224 == (240 & n)) {
                                        if (m >= r) return this.interim[0] = n, a;
                                        if (128 != (192 & (i = e[m++]))) {
                                            m--;
                                            continue
                                        }
                                        if (m >= r) return this.interim[0] = n, this.interim[1] = i, a;
                                        if (128 != (192 & (o = e[m++]))) {
                                            m--;
                                            continue
                                        }
                                        if ((l = (15 & n) << 12 | (63 & i) << 6 | 63 & o) < 2048 || l >= 55296 && l <= 57343 || 65279 === l) continue;
                                        t[a++] = l
                                    } else if (240 == (248 & n)) {
                                        if (m >= r) return this.interim[0] = n, a;
                                        if (128 != (192 & (i = e[m++]))) {
                                            m--;
                                            continue
                                        }
                                        if (m >= r) return this.interim[0] = n, this.interim[1] = i, a;
                                        if (128 != (192 & (o = e[m++]))) {
                                            m--;
                                            continue
                                        }
                                        if (m >= r) return this.interim[0] = n, this.interim[1] = i, this.interim[2] = o, a;
                                        if (128 != (192 & (s = e[m++]))) {
                                            m--;
                                            continue
                                        }
                                        if ((l = (7 & n) << 18 | (63 & i) << 12 | (63 & o) << 6 | 63 & s) < 65536 || l > 1114111) continue;
                                        t[a++] = l
                                    }
                                }
                                return a
                            }, e
                        }();
                        t.Utf8ToUtf32 = n
                    },
                    225: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.UnicodeV6 = void 0;
                        var n, i = r(8273),
                            o = [
                                [768, 879],
                                [1155, 1158],
                                [1160, 1161],
                                [1425, 1469],
                                [1471, 1471],
                                [1473, 1474],
                                [1476, 1477],
                                [1479, 1479],
                                [1536, 1539],
                                [1552, 1557],
                                [1611, 1630],
                                [1648, 1648],
                                [1750, 1764],
                                [1767, 1768],
                                [1770, 1773],
                                [1807, 1807],
                                [1809, 1809],
                                [1840, 1866],
                                [1958, 1968],
                                [2027, 2035],
                                [2305, 2306],
                                [2364, 2364],
                                [2369, 2376],
                                [2381, 2381],
                                [2385, 2388],
                                [2402, 2403],
                                [2433, 2433],
                                [2492, 2492],
                                [2497, 2500],
                                [2509, 2509],
                                [2530, 2531],
                                [2561, 2562],
                                [2620, 2620],
                                [2625, 2626],
                                [2631, 2632],
                                [2635, 2637],
                                [2672, 2673],
                                [2689, 2690],
                                [2748, 2748],
                                [2753, 2757],
                                [2759, 2760],
                                [2765, 2765],
                                [2786, 2787],
                                [2817, 2817],
                                [2876, 2876],
                                [2879, 2879],
                                [2881, 2883],
                                [2893, 2893],
                                [2902, 2902],
                                [2946, 2946],
                                [3008, 3008],
                                [3021, 3021],
                                [3134, 3136],
                                [3142, 3144],
                                [3146, 3149],
                                [3157, 3158],
                                [3260, 3260],
                                [3263, 3263],
                                [3270, 3270],
                                [3276, 3277],
                                [3298, 3299],
                                [3393, 3395],
                                [3405, 3405],
                                [3530, 3530],
                                [3538, 3540],
                                [3542, 3542],
                                [3633, 3633],
                                [3636, 3642],
                                [3655, 3662],
                                [3761, 3761],
                                [3764, 3769],
                                [3771, 3772],
                                [3784, 3789],
                                [3864, 3865],
                                [3893, 3893],
                                [3895, 3895],
                                [3897, 3897],
                                [3953, 3966],
                                [3968, 3972],
                                [3974, 3975],
                                [3984, 3991],
                                [3993, 4028],
                                [4038, 4038],
                                [4141, 4144],
                                [4146, 4146],
                                [4150, 4151],
                                [4153, 4153],
                                [4184, 4185],
                                [4448, 4607],
                                [4959, 4959],
                                [5906, 5908],
                                [5938, 5940],
                                [5970, 5971],
                                [6002, 6003],
                                [6068, 6069],
                                [6071, 6077],
                                [6086, 6086],
                                [6089, 6099],
                                [6109, 6109],
                                [6155, 6157],
                                [6313, 6313],
                                [6432, 6434],
                                [6439, 6440],
                                [6450, 6450],
                                [6457, 6459],
                                [6679, 6680],
                                [6912, 6915],
                                [6964, 6964],
                                [6966, 6970],
                                [6972, 6972],
                                [6978, 6978],
                                [7019, 7027],
                                [7616, 7626],
                                [7678, 7679],
                                [8203, 8207],
                                [8234, 8238],
                                [8288, 8291],
                                [8298, 8303],
                                [8400, 8431],
                                [12330, 12335],
                                [12441, 12442],
                                [43014, 43014],
                                [43019, 43019],
                                [43045, 43046],
                                [64286, 64286],
                                [65024, 65039],
                                [65056, 65059],
                                [65279, 65279],
                                [65529, 65531]
                            ],
                            s = [
                                [68097, 68099],
                                [68101, 68102],
                                [68108, 68111],
                                [68152, 68154],
                                [68159, 68159],
                                [119143, 119145],
                                [119155, 119170],
                                [119173, 119179],
                                [119210, 119213],
                                [119362, 119364],
                                [917505, 917505],
                                [917536, 917631],
                                [917760, 917999]
                            ],
                            a = function() {
                                function e() {
                                    if (this.version = "6", !n) {
                                        n = new Uint8Array(65536), i.fill(n, 1), n[0] = 0, i.fill(n, 0, 1, 32), i.fill(n, 0, 127, 160), i.fill(n, 2, 4352, 4448), n[9001] = 2, n[9002] = 2, i.fill(n, 2, 11904, 42192), n[12351] = 1, i.fill(n, 2, 44032, 55204), i.fill(n, 2, 63744, 64256), i.fill(n, 2, 65040, 65050), i.fill(n, 2, 65072, 65136), i.fill(n, 2, 65280, 65377), i.fill(n, 2, 65504, 65511);
                                        for (var e = 0; e < o.length; ++e) i.fill(n, 0, o[e][0], o[e][1] + 1)
                                    }
                                }
                                return e.prototype.wcwidth = function(e) {
                                    return e < 32 ? 0 : e < 127 ? 1 : e < 65536 ? n[e] : function(e, t) {
                                        var r, n = 0,
                                            i = t.length - 1;
                                        if (e < t[0][0] || e > t[i][1]) return !1;
                                        for (; i >= n;)
                                            if (e > t[r = n + i >> 1][1]) n = r + 1;
                                            else {
                                                if (!(e < t[r][0])) return !0;
                                                i = r - 1
                                            } return !1
                                    }(e, s) ? 0 : e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141 ? 2 : 1
                                }, e
                            }();
                        t.UnicodeV6 = a
                    },
                    5981: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.WriteBuffer = void 0;
                        var r = function() {
                            function e(e) {
                                this._action = e, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0
                            }
                            return e.prototype.writeSync = function(e) {
                                if (this._writeBuffer.length) {
                                    for (var t = this._bufferOffset; t < this._writeBuffer.length; ++t) {
                                        var r = this._writeBuffer[t],
                                            n = this._callbacks[t];
                                        this._action(r), n && n()
                                    }
                                    this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 2147483647
                                }
                                this._action(e)
                            }, e.prototype.write = function(e, t) {
                                var r = this;
                                if (this._pendingData > 5e7) throw new Error("write data discarded, use flow control to avoid losing data");
                                this._writeBuffer.length || (this._bufferOffset = 0, setTimeout((function() {
                                    return r._innerWrite()
                                }))), this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(t)
                            }, e.prototype._innerWrite = function() {
                                for (var e = this, t = Date.now(); this._writeBuffer.length > this._bufferOffset;) {
                                    var r = this._writeBuffer[this._bufferOffset],
                                        n = this._callbacks[this._bufferOffset];
                                    if (this._bufferOffset++, this._action(r), this._pendingData -= r.length, n && n(), Date.now() - t >= 12) break
                                }
                                this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout((function() {
                                    return e._innerWrite()
                                }), 0)) : (this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0)
                            }, e
                        }();
                        t.WriteBuffer = r
                    },
                    5770: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.PAYLOAD_LIMIT = void 0, t.PAYLOAD_LIMIT = 1e7
                    },
                    6351: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.DcsHandler = t.DcsParser = void 0;
                        var n = r(482),
                            i = r(8742),
                            o = r(5770),
                            s = [],
                            a = function() {
                                function e() {
                                    this._handlers = Object.create(null), this._active = s, this._ident = 0, this._handlerFb = function() {}
                                }
                                return e.prototype.dispose = function() {
                                    this._handlers = Object.create(null), this._handlerFb = function() {}, this._active = s
                                }, e.prototype.registerHandler = function(e, t) {
                                    void 0 === this._handlers[e] && (this._handlers[e] = []);
                                    var r = this._handlers[e];
                                    return r.push(t), {
                                        dispose: function() {
                                            var e = r.indexOf(t); - 1 !== e && r.splice(e, 1)
                                        }
                                    }
                                }, e.prototype.clearHandler = function(e) {
                                    this._handlers[e] && delete this._handlers[e]
                                }, e.prototype.setHandlerFallback = function(e) {
                                    this._handlerFb = e
                                }, e.prototype.reset = function() {
                                    this._active.length && this.unhook(!1), this._active = s, this._ident = 0
                                }, e.prototype.hook = function(e, t) {
                                    if (this.reset(), this._ident = e, this._active = this._handlers[e] || s, this._active.length)
                                        for (var r = this._active.length - 1; r >= 0; r--) this._active[r].hook(t);
                                    else this._handlerFb(this._ident, "HOOK", t)
                                }, e.prototype.put = function(e, t, r) {
                                    if (this._active.length)
                                        for (var i = this._active.length - 1; i >= 0; i--) this._active[i].put(e, t, r);
                                    else this._handlerFb(this._ident, "PUT", n.utf32ToString(e, t, r))
                                }, e.prototype.unhook = function(e) {
                                    if (this._active.length) {
                                        for (var t = this._active.length - 1; t >= 0 && !this._active[t].unhook(e); t--);
                                        for (t--; t >= 0; t--) this._active[t].unhook(!1)
                                    } else this._handlerFb(this._ident, "UNHOOK", e);
                                    this._active = s, this._ident = 0
                                }, e
                            }();
                        t.DcsParser = a;
                        var l = new i.Params;
                        l.addParam(0);
                        var c = function() {
                            function e(e) {
                                this._handler = e, this._data = "", this._params = l, this._hitLimit = !1
                            }
                            return e.prototype.hook = function(e) {
                                this._params = e.length > 1 || e.params[0] ? e.clone() : l, this._data = "", this._hitLimit = !1
                            }, e.prototype.put = function(e, t, r) {
                                this._hitLimit || (this._data += n.utf32ToString(e, t, r), this._data.length > o.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0))
                            }, e.prototype.unhook = function(e) {
                                var t = !1;
                                return this._hitLimit ? t = !1 : e && (t = this._handler(this._data, this._params)), this._params = l, this._data = "", this._hitLimit = !1, t
                            }, e
                        }();
                        t.DcsHandler = c
                    },
                    2015: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                })(e, t)
                        }, function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.EscapeSequenceParser = t.VT500_TRANSITION_TABLE = t.TransitionTable = void 0;
                        var o = r(844),
                            s = r(8273),
                            a = r(8742),
                            l = r(6242),
                            c = r(6351),
                            u = function() {
                                function e(e) {
                                    this.table = new Uint8Array(e)
                                }
                                return e.prototype.setDefault = function(e, t) {
                                    s.fill(this.table, e << 4 | t)
                                }, e.prototype.add = function(e, t, r, n) {
                                    this.table[t << 8 | e] = r << 4 | n
                                }, e.prototype.addMany = function(e, t, r, n) {
                                    for (var i = 0; i < e.length; i++) this.table[t << 8 | e[i]] = r << 4 | n
                                }, e
                            }();
                        t.TransitionTable = u;
                        var f = 160;
                        t.VT500_TRANSITION_TABLE = function() {
                            var e = new u(4095),
                                t = Array.apply(null, Array(256)).map((function(e, t) {
                                    return t
                                })),
                                r = function(e, r) {
                                    return t.slice(e, r)
                                },
                                n = r(32, 127),
                                i = r(0, 24);
                            i.push(25), i.push.apply(i, r(28, 32));
                            var o, s = r(0, 14);
                            for (o in e.setDefault(1, 0), e.addMany(n, 0, 2, 0), s) e.addMany([24, 26, 153, 154], o, 3, 0), e.addMany(r(128, 144), o, 3, 0), e.addMany(r(144, 152), o, 3, 0), e.add(156, o, 0, 0), e.add(27, o, 11, 1), e.add(157, o, 4, 8), e.addMany([152, 158, 159], o, 0, 7), e.add(155, o, 11, 3), e.add(144, o, 11, 9);
                            return e.addMany(i, 0, 3, 0), e.addMany(i, 1, 3, 1), e.add(127, 1, 0, 1), e.addMany(i, 8, 0, 8), e.addMany(i, 3, 3, 3), e.add(127, 3, 0, 3), e.addMany(i, 4, 3, 4), e.add(127, 4, 0, 4), e.addMany(i, 6, 3, 6), e.addMany(i, 5, 3, 5), e.add(127, 5, 0, 5), e.addMany(i, 2, 3, 2), e.add(127, 2, 0, 2), e.add(93, 1, 4, 8), e.addMany(n, 8, 5, 8), e.add(127, 8, 5, 8), e.addMany([156, 27, 24, 26, 7], 8, 6, 0), e.addMany(r(28, 32), 8, 0, 8), e.addMany([88, 94, 95], 1, 0, 7), e.addMany(n, 7, 0, 7), e.addMany(i, 7, 0, 7), e.add(156, 7, 0, 0), e.add(127, 7, 0, 7), e.add(91, 1, 11, 3), e.addMany(r(64, 127), 3, 7, 0), e.addMany(r(48, 60), 3, 8, 4), e.addMany([60, 61, 62, 63], 3, 9, 4), e.addMany(r(48, 60), 4, 8, 4), e.addMany(r(64, 127), 4, 7, 0), e.addMany([60, 61, 62, 63], 4, 0, 6), e.addMany(r(32, 64), 6, 0, 6), e.add(127, 6, 0, 6), e.addMany(r(64, 127), 6, 0, 0), e.addMany(r(32, 48), 3, 9, 5), e.addMany(r(32, 48), 5, 9, 5), e.addMany(r(48, 64), 5, 0, 6), e.addMany(r(64, 127), 5, 7, 0), e.addMany(r(32, 48), 4, 9, 5), e.addMany(r(32, 48), 1, 9, 2), e.addMany(r(32, 48), 2, 9, 2), e.addMany(r(48, 127), 2, 10, 0), e.addMany(r(48, 80), 1, 10, 0), e.addMany(r(81, 88), 1, 10, 0), e.addMany([89, 90, 92], 1, 10, 0), e.addMany(r(96, 127), 1, 10, 0), e.add(80, 1, 11, 9), e.addMany(i, 9, 0, 9), e.add(127, 9, 0, 9), e.addMany(r(28, 32), 9, 0, 9), e.addMany(r(32, 48), 9, 9, 12), e.addMany(r(48, 60), 9, 8, 10), e.addMany([60, 61, 62, 63], 9, 9, 10), e.addMany(i, 11, 0, 11), e.addMany(r(32, 128), 11, 0, 11), e.addMany(r(28, 32), 11, 0, 11), e.addMany(i, 10, 0, 10), e.add(127, 10, 0, 10), e.addMany(r(28, 32), 10, 0, 10), e.addMany(r(48, 60), 10, 8, 10), e.addMany([60, 61, 62, 63], 10, 0, 11), e.addMany(r(32, 48), 10, 9, 12), e.addMany(i, 12, 0, 12), e.add(127, 12, 0, 12), e.addMany(r(28, 32), 12, 0, 12), e.addMany(r(32, 48), 12, 9, 12), e.addMany(r(48, 64), 12, 0, 11), e.addMany(r(64, 127), 12, 12, 13), e.addMany(r(64, 127), 10, 12, 13), e.addMany(r(64, 127), 9, 12, 13), e.addMany(i, 13, 13, 13), e.addMany(n, 13, 13, 13), e.add(127, 13, 0, 13), e.addMany([27, 156, 24, 26], 13, 14, 0), e.add(f, 0, 2, 0), e.add(f, 8, 5, 8), e.add(f, 6, 0, 6), e.add(f, 11, 0, 11), e.add(f, 13, 13, 13), e
                        }();
                        var h = function(e) {
                            function r(r) {
                                void 0 === r && (r = t.VT500_TRANSITION_TABLE);
                                var n = e.call(this) || this;
                                return n._transitions = r, n.initialState = 0, n.currentState = n.initialState, n._params = new a.Params, n._params.addParam(0), n._collect = 0, n.precedingCodepoint = 0, n._printHandlerFb = function(e, t, r) {}, n._executeHandlerFb = function(e) {}, n._csiHandlerFb = function(e, t) {}, n._escHandlerFb = function(e) {}, n._errorHandlerFb = function(e) {
                                    return e
                                }, n._printHandler = n._printHandlerFb, n._executeHandlers = Object.create(null), n._csiHandlers = Object.create(null), n._escHandlers = Object.create(null), n._oscParser = new l.OscParser, n._dcsParser = new c.DcsParser, n._errorHandler = n._errorHandlerFb, n.registerEscHandler({
                                    final: "\\"
                                }, (function() {
                                    return !0
                                })), n
                            }
                            return i(r, e), r.prototype._identifier = function(e, t) {
                                void 0 === t && (t = [64, 126]);
                                var r = 0;
                                if (e.prefix) {
                                    if (e.prefix.length > 1) throw new Error("only one byte as prefix supported");
                                    if ((r = e.prefix.charCodeAt(0)) && 60 > r || r > 63) throw new Error("prefix must be in range 0x3c .. 0x3f")
                                }
                                if (e.intermediates) {
                                    if (e.intermediates.length > 2) throw new Error("only two bytes as intermediates are supported");
                                    for (var n = 0; n < e.intermediates.length; ++n) {
                                        var i = e.intermediates.charCodeAt(n);
                                        if (32 > i || i > 47) throw new Error("intermediate must be in range 0x20 .. 0x2f");
                                        r <<= 8, r |= i
                                    }
                                }
                                if (1 !== e.final.length) throw new Error("final must be a single byte");
                                var o = e.final.charCodeAt(0);
                                if (t[0] > o || o > t[1]) throw new Error("final must be in range " + t[0] + " .. " + t[1]);
                                return (r <<= 8) | o
                            }, r.prototype.identToString = function(e) {
                                for (var t = []; e;) t.push(String.fromCharCode(255 & e)), e >>= 8;
                                return t.reverse().join("")
                            }, r.prototype.dispose = function() {
                                this._csiHandlers = Object.create(null), this._executeHandlers = Object.create(null), this._escHandlers = Object.create(null), this._oscParser.dispose(), this._dcsParser.dispose()
                            }, r.prototype.setPrintHandler = function(e) {
                                this._printHandler = e
                            }, r.prototype.clearPrintHandler = function() {
                                this._printHandler = this._printHandlerFb
                            }, r.prototype.registerEscHandler = function(e, t) {
                                var r = this._identifier(e, [48, 126]);
                                void 0 === this._escHandlers[r] && (this._escHandlers[r] = []);
                                var n = this._escHandlers[r];
                                return n.push(t), {
                                    dispose: function() {
                                        var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                                    }
                                }
                            }, r.prototype.clearEscHandler = function(e) {
                                this._escHandlers[this._identifier(e, [48, 126])] && delete this._escHandlers[this._identifier(e, [48, 126])]
                            }, r.prototype.setEscHandlerFallback = function(e) {
                                this._escHandlerFb = e
                            }, r.prototype.setExecuteHandler = function(e, t) {
                                this._executeHandlers[e.charCodeAt(0)] = t
                            }, r.prototype.clearExecuteHandler = function(e) {
                                this._executeHandlers[e.charCodeAt(0)] && delete this._executeHandlers[e.charCodeAt(0)]
                            }, r.prototype.setExecuteHandlerFallback = function(e) {
                                this._executeHandlerFb = e
                            }, r.prototype.registerCsiHandler = function(e, t) {
                                var r = this._identifier(e);
                                void 0 === this._csiHandlers[r] && (this._csiHandlers[r] = []);
                                var n = this._csiHandlers[r];
                                return n.push(t), {
                                    dispose: function() {
                                        var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                                    }
                                }
                            }, r.prototype.clearCsiHandler = function(e) {
                                this._csiHandlers[this._identifier(e)] && delete this._csiHandlers[this._identifier(e)]
                            }, r.prototype.setCsiHandlerFallback = function(e) {
                                this._csiHandlerFb = e
                            }, r.prototype.registerDcsHandler = function(e, t) {
                                return this._dcsParser.registerHandler(this._identifier(e), t)
                            }, r.prototype.clearDcsHandler = function(e) {
                                this._dcsParser.clearHandler(this._identifier(e))
                            }, r.prototype.setDcsHandlerFallback = function(e) {
                                this._dcsParser.setHandlerFallback(e)
                            }, r.prototype.registerOscHandler = function(e, t) {
                                return this._oscParser.registerHandler(e, t)
                            }, r.prototype.clearOscHandler = function(e) {
                                this._oscParser.clearHandler(e)
                            }, r.prototype.setOscHandlerFallback = function(e) {
                                this._oscParser.setHandlerFallback(e)
                            }, r.prototype.setErrorHandler = function(e) {
                                this._errorHandler = e
                            }, r.prototype.clearErrorHandler = function() {
                                this._errorHandler = this._errorHandlerFb
                            }, r.prototype.reset = function() {
                                this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0
                            }, r.prototype.parse = function(e, t) {
                                for (var r = 0, n = 0, i = this.currentState, o = this._oscParser, s = this._dcsParser, a = this._collect, l = this._params, c = this._transitions.table, u = 0; u < t; ++u) {
                                    switch ((n = c[i << 8 | ((r = e[u]) < 160 ? r : f)]) >> 4) {
                                        case 2:
                                            for (var h = u + 1;; ++h) {
                                                if (h >= t || (r = e[h]) < 32 || r > 126 && r < f) {
                                                    this._printHandler(e, u, h), u = h - 1;
                                                    break
                                                }
                                                if (++h >= t || (r = e[h]) < 32 || r > 126 && r < f) {
                                                    this._printHandler(e, u, h), u = h - 1;
                                                    break
                                                }
                                                if (++h >= t || (r = e[h]) < 32 || r > 126 && r < f) {
                                                    this._printHandler(e, u, h), u = h - 1;
                                                    break
                                                }
                                                if (++h >= t || (r = e[h]) < 32 || r > 126 && r < f) {
                                                    this._printHandler(e, u, h), u = h - 1;
                                                    break
                                                }
                                            }
                                            break;
                                        case 3:
                                            this._executeHandlers[r] ? this._executeHandlers[r]() : this._executeHandlerFb(r), this.precedingCodepoint = 0;
                                            break;
                                        case 0:
                                            break;
                                        case 1:
                                            if (this._errorHandler({
                                                    position: u,
                                                    code: r,
                                                    currentState: i,
                                                    collect: a,
                                                    params: l,
                                                    abort: !1
                                                }).abort) return;
                                            break;
                                        case 7:
                                            for (var d = this._csiHandlers[a << 8 | r], p = d ? d.length - 1 : -1; p >= 0 && !d[p](l); p--);
                                            p < 0 && this._csiHandlerFb(a << 8 | r, l), this.precedingCodepoint = 0;
                                            break;
                                        case 8:
                                            do {
                                                switch (r) {
                                                    case 59:
                                                        l.addParam(0);
                                                        break;
                                                    case 58:
                                                        l.addSubParam(-1);
                                                        break;
                                                    default:
                                                        l.addDigit(r - 48)
                                                }
                                            } while (++u < t && (r = e[u]) > 47 && r < 60);
                                            u--;
                                            break;
                                        case 9:
                                            a <<= 8, a |= r;
                                            break;
                                        case 10:
                                            for (var _ = this._escHandlers[a << 8 | r], v = _ ? _.length - 1 : -1; v >= 0 && !_[v](); v--);
                                            v < 0 && this._escHandlerFb(a << 8 | r), this.precedingCodepoint = 0;
                                            break;
                                        case 11:
                                            l.reset(), l.addParam(0), a = 0;
                                            break;
                                        case 12:
                                            s.hook(a << 8 | r, l);
                                            break;
                                        case 13:
                                            for (var m = u + 1;; ++m)
                                                if (m >= t || 24 === (r = e[m]) || 26 === r || 27 === r || r > 127 && r < f) {
                                                    s.put(e, u, m), u = m - 1;
                                                    break
                                                } break;
                                        case 14:
                                            s.unhook(24 !== r && 26 !== r), 27 === r && (n |= 1), l.reset(), l.addParam(0), a = 0, this.precedingCodepoint = 0;
                                            break;
                                        case 4:
                                            o.start();
                                            break;
                                        case 5:
                                            for (var g = u + 1;; g++)
                                                if (g >= t || (r = e[g]) < 32 || r > 127 && r < f) {
                                                    o.put(e, u, g), u = g - 1;
                                                    break
                                                } break;
                                        case 6:
                                            o.end(24 !== r && 26 !== r), 27 === r && (n |= 1), l.reset(), l.addParam(0), a = 0, this.precedingCodepoint = 0
                                    }
                                    i = 15 & n
                                }
                                this._collect = a, this.currentState = i
                            }, r
                        }(o.Disposable);
                        t.EscapeSequenceParser = h
                    },
                    6242: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.OscHandler = t.OscParser = void 0;
                        var n = r(5770),
                            i = r(482),
                            o = [],
                            s = function() {
                                function e() {
                                    this._state = 0, this._active = o, this._id = -1, this._handlers = Object.create(null), this._handlerFb = function() {}
                                }
                                return e.prototype.registerHandler = function(e, t) {
                                    void 0 === this._handlers[e] && (this._handlers[e] = []);
                                    var r = this._handlers[e];
                                    return r.push(t), {
                                        dispose: function() {
                                            var e = r.indexOf(t); - 1 !== e && r.splice(e, 1)
                                        }
                                    }
                                }, e.prototype.clearHandler = function(e) {
                                    this._handlers[e] && delete this._handlers[e]
                                }, e.prototype.setHandlerFallback = function(e) {
                                    this._handlerFb = e
                                }, e.prototype.dispose = function() {
                                    this._handlers = Object.create(null), this._handlerFb = function() {}, this._active = o
                                }, e.prototype.reset = function() {
                                    2 === this._state && this.end(!1), this._active = o, this._id = -1, this._state = 0
                                }, e.prototype._start = function() {
                                    if (this._active = this._handlers[this._id] || o, this._active.length)
                                        for (var e = this._active.length - 1; e >= 0; e--) this._active[e].start();
                                    else this._handlerFb(this._id, "START")
                                }, e.prototype._put = function(e, t, r) {
                                    if (this._active.length)
                                        for (var n = this._active.length - 1; n >= 0; n--) this._active[n].put(e, t, r);
                                    else this._handlerFb(this._id, "PUT", i.utf32ToString(e, t, r))
                                }, e.prototype._end = function(e) {
                                    if (this._active.length) {
                                        for (var t = this._active.length - 1; t >= 0 && !this._active[t].end(e); t--);
                                        for (t--; t >= 0; t--) this._active[t].end(!1)
                                    } else this._handlerFb(this._id, "END", e)
                                }, e.prototype.start = function() {
                                    this.reset(), this._state = 1
                                }, e.prototype.put = function(e, t, r) {
                                    if (3 !== this._state) {
                                        if (1 === this._state)
                                            for (; t < r;) {
                                                var n = e[t++];
                                                if (59 === n) {
                                                    this._state = 2, this._start();
                                                    break
                                                }
                                                if (n < 48 || 57 < n) return void(this._state = 3); - 1 === this._id && (this._id = 0), this._id = 10 * this._id + n - 48
                                            }
                                        2 === this._state && r - t > 0 && this._put(e, t, r)
                                    }
                                }, e.prototype.end = function(e) {
                                    0 !== this._state && (3 !== this._state && (1 === this._state && this._start(), this._end(e)), this._active = o, this._id = -1, this._state = 0)
                                }, e
                            }();
                        t.OscParser = s;
                        var a = function() {
                            function e(e) {
                                this._handler = e, this._data = "", this._hitLimit = !1
                            }
                            return e.prototype.start = function() {
                                this._data = "", this._hitLimit = !1
                            }, e.prototype.put = function(e, t, r) {
                                this._hitLimit || (this._data += i.utf32ToString(e, t, r), this._data.length > n.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0))
                            }, e.prototype.end = function(e) {
                                var t = !1;
                                return this._hitLimit ? t = !1 : e && (t = this._handler(this._data)), this._data = "", this._hitLimit = !1, t
                            }, e
                        }();
                        t.OscHandler = a
                    },
                    8742: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Params = void 0;
                        var r = 2147483647,
                            n = function() {
                                function e(e, t) {
                                    if (void 0 === e && (e = 32), void 0 === t && (t = 32), this.maxLength = e, this.maxSubParamsLength = t, t > 256) throw new Error("maxSubParamsLength must not be greater than 256");
                                    this.params = new Int32Array(e), this.length = 0, this._subParams = new Int32Array(t), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e), this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1
                                }
                                return e.fromArray = function(t) {
                                    var r = new e;
                                    if (!t.length) return r;
                                    for (var n = t[0] instanceof Array ? 1 : 0; n < t.length; ++n) {
                                        var i = t[n];
                                        if (i instanceof Array)
                                            for (var o = 0; o < i.length; ++o) r.addSubParam(i[o]);
                                        else r.addParam(i)
                                    }
                                    return r
                                }, e.prototype.clone = function() {
                                    var t = new e(this.maxLength, this.maxSubParamsLength);
                                    return t.params.set(this.params), t.length = this.length, t._subParams.set(this._subParams), t._subParamsLength = this._subParamsLength, t._subParamsIdx.set(this._subParamsIdx), t._rejectDigits = this._rejectDigits, t._rejectSubDigits = this._rejectSubDigits, t._digitIsSub = this._digitIsSub, t
                                }, e.prototype.toArray = function() {
                                    for (var e = [], t = 0; t < this.length; ++t) {
                                        e.push(this.params[t]);
                                        var r = this._subParamsIdx[t] >> 8,
                                            n = 255 & this._subParamsIdx[t];
                                        n - r > 0 && e.push(Array.prototype.slice.call(this._subParams, r, n))
                                    }
                                    return e
                                }, e.prototype.reset = function() {
                                    this.length = 0, this._subParamsLength = 0, this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1
                                }, e.prototype.addParam = function(e) {
                                    if (this._digitIsSub = !1, this.length >= this.maxLength) this._rejectDigits = !0;
                                    else {
                                        if (e < -1) throw new Error("values lesser than -1 are not allowed");
                                        this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e > r ? r : e
                                    }
                                }, e.prototype.addSubParam = function(e) {
                                    if (this._digitIsSub = !0, this.length)
                                        if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength) this._rejectSubDigits = !0;
                                        else {
                                            if (e < -1) throw new Error("values lesser than -1 are not allowed");
                                            this._subParams[this._subParamsLength++] = e > r ? r : e, this._subParamsIdx[this.length - 1]++
                                        }
                                }, e.prototype.hasSubParams = function(e) {
                                    return (255 & this._subParamsIdx[e]) - (this._subParamsIdx[e] >> 8) > 0
                                }, e.prototype.getSubParams = function(e) {
                                    var t = this._subParamsIdx[e] >> 8,
                                        r = 255 & this._subParamsIdx[e];
                                    return r - t > 0 ? this._subParams.subarray(t, r) : null
                                }, e.prototype.getSubParamsAll = function() {
                                    for (var e = {}, t = 0; t < this.length; ++t) {
                                        var r = this._subParamsIdx[t] >> 8,
                                            n = 255 & this._subParamsIdx[t];
                                        n - r > 0 && (e[t] = this._subParams.slice(r, n))
                                    }
                                    return e
                                }, e.prototype.addDigit = function(e) {
                                    var t;
                                    if (!(this._rejectDigits || !(t = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)) {
                                        var n = this._digitIsSub ? this._subParams : this.params,
                                            i = n[t - 1];
                                        n[t - 1] = ~i ? Math.min(10 * i + e, r) : e
                                    }
                                }, e
                            }();
                        t.Params = n
                    },
                    744: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                                return (n = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(e, t) {
                                        e.__proto__ = t
                                    } || function(e, t) {
                                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                    })(e, t)
                            }, function(e, t) {
                                function r() {
                                    this.constructor = e
                                }
                                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                            }),
                            o = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            s = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.BufferService = t.MINIMUM_ROWS = t.MINIMUM_COLS = void 0;
                        var a = r(2585),
                            l = r(5295),
                            c = r(8460),
                            u = r(844);
                        t.MINIMUM_COLS = 2, t.MINIMUM_ROWS = 1;
                        var f = function(e) {
                            function r(r) {
                                var n = e.call(this) || this;
                                return n._optionsService = r, n.isUserScrolling = !1, n._onResize = new c.EventEmitter, n.cols = Math.max(r.options.cols, t.MINIMUM_COLS), n.rows = Math.max(r.options.rows, t.MINIMUM_ROWS), n.buffers = new l.BufferSet(r, n), n
                            }
                            return i(r, e), Object.defineProperty(r.prototype, "onResize", {
                                get: function() {
                                    return this._onResize.event
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(r.prototype, "buffer", {
                                get: function() {
                                    return this.buffers.active
                                },
                                enumerable: !1,
                                configurable: !0
                            }), r.prototype.dispose = function() {
                                e.prototype.dispose.call(this), this.buffers.dispose()
                            }, r.prototype.resize = function(e, t) {
                                this.cols = e, this.rows = t, this.buffers.resize(e, t), this.buffers.setupTabStops(this.cols), this._onResize.fire({
                                    cols: e,
                                    rows: t
                                })
                            }, r.prototype.reset = function() {
                                this.buffers.reset(), this.isUserScrolling = !1
                            }, o([s(0, a.IOptionsService)], r)
                        }(u.Disposable);
                        t.BufferService = f
                    },
                    7994: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CharsetService = void 0;
                        var r = function() {
                            function e() {
                                this.glevel = 0, this._charsets = []
                            }
                            return e.prototype.reset = function() {
                                this.charset = void 0, this._charsets = [], this.glevel = 0
                            }, e.prototype.setgLevel = function(e) {
                                this.glevel = e, this.charset = this._charsets[e]
                            }, e.prototype.setgCharset = function(e, t) {
                                this._charsets[e] = t, this.glevel === e && (this.charset = t)
                            }, e
                        }();
                        t.CharsetService = r
                    },
                    1753: function(e, t, r) {
                        var n = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            i = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CoreMouseService = void 0;
                        var o = r(2585),
                            s = r(8460),
                            a = {
                                NONE: {
                                    events: 0,
                                    restrict: function() {
                                        return !1
                                    }
                                },
                                X10: {
                                    events: 1,
                                    restrict: function(e) {
                                        return 4 !== e.button && 1 === e.action && (e.ctrl = !1, e.alt = !1, e.shift = !1, !0)
                                    }
                                },
                                VT200: {
                                    events: 19,
                                    restrict: function(e) {
                                        return 32 !== e.action
                                    }
                                },
                                DRAG: {
                                    events: 23,
                                    restrict: function(e) {
                                        return 32 !== e.action || 3 !== e.button
                                    }
                                },
                                ANY: {
                                    events: 31,
                                    restrict: function(e) {
                                        return !0
                                    }
                                }
                            };

                        function l(e, t) {
                            var r = (e.ctrl ? 16 : 0) | (e.shift ? 4 : 0) | (e.alt ? 8 : 0);
                            return 4 === e.button ? (r |= 64, r |= e.action) : (r |= 3 & e.button, 4 & e.button && (r |= 64), 8 & e.button && (r |= 128), 32 === e.action ? r |= 32 : 0 !== e.action || t || (r |= 3)), r
                        }
                        var c = String.fromCharCode,
                            u = {
                                DEFAULT: function(e) {
                                    var t = [l(e, !1) + 32, e.col + 32, e.row + 32];
                                    return t[0] > 255 || t[1] > 255 || t[2] > 255 ? "" : "[M" + c(t[0]) + c(t[1]) + c(t[2])
                                },
                                SGR: function(e) {
                                    var t = 0 === e.action && 4 !== e.button ? "m" : "M";
                                    return "[<" + l(e, !0) + ";" + e.col + ";" + e.row + t
                                }
                            },
                            f = function() {
                                function e(e, t) {
                                    this._bufferService = e, this._coreService = t, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._onProtocolChange = new s.EventEmitter, this._lastEvent = null;
                                    for (var r = 0, n = Object.keys(a); r < n.length; r++) {
                                        var i = n[r];
                                        this.addProtocol(i, a[i])
                                    }
                                    for (var o = 0, l = Object.keys(u); o < l.length; o++) {
                                        var c = l[o];
                                        this.addEncoding(c, u[c])
                                    }
                                    this.reset()
                                }
                                return e.prototype.addProtocol = function(e, t) {
                                    this._protocols[e] = t
                                }, e.prototype.addEncoding = function(e, t) {
                                    this._encodings[e] = t
                                }, Object.defineProperty(e.prototype, "activeProtocol", {
                                    get: function() {
                                        return this._activeProtocol
                                    },
                                    set: function(e) {
                                        if (!this._protocols[e]) throw new Error('unknown protocol "' + e + '"');
                                        this._activeProtocol = e, this._onProtocolChange.fire(this._protocols[e].events)
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "areMouseEventsActive", {
                                    get: function() {
                                        return 0 !== this._protocols[this._activeProtocol].events
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "activeEncoding", {
                                    get: function() {
                                        return this._activeEncoding
                                    },
                                    set: function(e) {
                                        if (!this._encodings[e]) throw new Error('unknown encoding "' + e + '"');
                                        this._activeEncoding = e
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.reset = function() {
                                    this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null
                                }, Object.defineProperty(e.prototype, "onProtocolChange", {
                                    get: function() {
                                        return this._onProtocolChange.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.triggerMouseEvent = function(e) {
                                    if (e.col < 0 || e.col >= this._bufferService.cols || e.row < 0 || e.row >= this._bufferService.rows) return !1;
                                    if (4 === e.button && 32 === e.action) return !1;
                                    if (3 === e.button && 32 !== e.action) return !1;
                                    if (4 !== e.button && (2 === e.action || 3 === e.action)) return !1;
                                    if (e.col++, e.row++, 32 === e.action && this._lastEvent && this._compareEvents(this._lastEvent, e)) return !1;
                                    if (!this._protocols[this._activeProtocol].restrict(e)) return !1;
                                    var t = this._encodings[this._activeEncoding](e);
                                    return t && ("DEFAULT" === this._activeEncoding ? this._coreService.triggerBinaryEvent(t) : this._coreService.triggerDataEvent(t, !0)), this._lastEvent = e, !0
                                }, e.prototype.explainEvents = function(e) {
                                    return {
                                        down: !!(1 & e),
                                        up: !!(2 & e),
                                        drag: !!(4 & e),
                                        move: !!(8 & e),
                                        wheel: !!(16 & e)
                                    }
                                }, e.prototype._compareEvents = function(e, t) {
                                    return e.col === t.col && e.row === t.row && e.button === t.button && e.action === t.action && e.ctrl === t.ctrl && e.alt === t.alt && e.shift === t.shift
                                }, n([i(0, o.IBufferService), i(1, o.ICoreService)], e)
                            }();
                        t.CoreMouseService = f
                    },
                    6975: function(e, t, r) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                                return (n = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(e, t) {
                                        e.__proto__ = t
                                    } || function(e, t) {
                                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                    })(e, t)
                            }, function(e, t) {
                                function r() {
                                    this.constructor = e
                                }
                                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                            }),
                            o = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            s = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CoreService = void 0;
                        var a = r(2585),
                            l = r(8460),
                            c = r(1439),
                            u = r(844),
                            f = Object.freeze({
                                insertMode: !1
                            }),
                            h = Object.freeze({
                                applicationCursorKeys: !1,
                                applicationKeypad: !1,
                                bracketedPasteMode: !1,
                                origin: !1,
                                reverseWraparound: !1,
                                sendFocus: !1,
                                wraparound: !0
                            }),
                            d = function(e) {
                                function t(t, r, n, i) {
                                    var o = e.call(this) || this;
                                    return o._bufferService = r, o._logService = n, o._optionsService = i, o.isCursorInitialized = !1, o.isCursorHidden = !1, o._onData = o.register(new l.EventEmitter), o._onUserInput = o.register(new l.EventEmitter), o._onBinary = o.register(new l.EventEmitter), o._scrollToBottom = t, o.register({
                                        dispose: function() {
                                            return o._scrollToBottom = void 0
                                        }
                                    }), o.modes = c.clone(f), o.decPrivateModes = c.clone(h), o
                                }
                                return i(t, e), Object.defineProperty(t.prototype, "onData", {
                                    get: function() {
                                        return this._onData.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onUserInput", {
                                    get: function() {
                                        return this._onUserInput.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(t.prototype, "onBinary", {
                                    get: function() {
                                        return this._onBinary.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.reset = function() {
                                    this.modes = c.clone(f), this.decPrivateModes = c.clone(h)
                                }, t.prototype.triggerDataEvent = function(e, t) {
                                    if (void 0 === t && (t = !1), !this._optionsService.options.disableStdin) {
                                        var r = this._bufferService.buffer;
                                        r.ybase !== r.ydisp && this._scrollToBottom(), t && this._onUserInput.fire(), this._logService.debug('sending data "' + e + '"', (function() {
                                            return e.split("").map((function(e) {
                                                return e.charCodeAt(0)
                                            }))
                                        })), this._onData.fire(e)
                                    }
                                }, t.prototype.triggerBinaryEvent = function(e) {
                                    this._optionsService.options.disableStdin || (this._logService.debug('sending binary "' + e + '"', (function() {
                                        return e.split("").map((function(e) {
                                            return e.charCodeAt(0)
                                        }))
                                    })), this._onBinary.fire(e))
                                }, o([s(1, a.IBufferService), s(2, a.ILogService), s(3, a.IOptionsService)], t)
                            }(u.Disposable);
                        t.CoreService = d
                    },
                    3730: function(e, t, r) {
                        var n = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            i = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.DirtyRowService = void 0;
                        var o = r(2585),
                            s = function() {
                                function e(e) {
                                    this._bufferService = e, this.clearRange()
                                }
                                return Object.defineProperty(e.prototype, "start", {
                                    get: function() {
                                        return this._start
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "end", {
                                    get: function() {
                                        return this._end
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.clearRange = function() {
                                    this._start = this._bufferService.buffer.y, this._end = this._bufferService.buffer.y
                                }, e.prototype.markDirty = function(e) {
                                    e < this._start ? this._start = e : e > this._end && (this._end = e)
                                }, e.prototype.markRangeDirty = function(e, t) {
                                    if (e > t) {
                                        var r = e;
                                        e = t, t = r
                                    }
                                    e < this._start && (this._start = e), t > this._end && (this._end = t)
                                }, e.prototype.markAllDirty = function() {
                                    this.markRangeDirty(0, this._bufferService.rows - 1)
                                }, n([i(0, o.IBufferService)], e)
                            }();
                        t.DirtyRowService = s
                    },
                    4348: function(e, t, r) {
                        var n = this && this.__spreadArrays || function() {
                            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                            var n = Array(e),
                                i = 0;
                            for (t = 0; t < r; t++)
                                for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) n[i] = o[s];
                            return n
                        };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.InstantiationService = t.ServiceCollection = void 0;
                        var i = r(2585),
                            o = r(8343),
                            s = function() {
                                function e() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    this._entries = new Map;
                                    for (var r = 0, n = e; r < n.length; r++) {
                                        var i = n[r],
                                            o = i[0],
                                            s = i[1];
                                        this.set(o, s)
                                    }
                                }
                                return e.prototype.set = function(e, t) {
                                    var r = this._entries.get(e);
                                    return this._entries.set(e, t), r
                                }, e.prototype.forEach = function(e) {
                                    this._entries.forEach((function(t, r) {
                                        return e(r, t)
                                    }))
                                }, e.prototype.has = function(e) {
                                    return this._entries.has(e)
                                }, e.prototype.get = function(e) {
                                    return this._entries.get(e)
                                }, e
                            }();
                        t.ServiceCollection = s;
                        var a = function() {
                            function e() {
                                this._services = new s, this._services.set(i.IInstantiationService, this)
                            }
                            return e.prototype.setService = function(e, t) {
                                this._services.set(e, t)
                            }, e.prototype.getService = function(e) {
                                return this._services.get(e)
                            }, e.prototype.createInstance = function(e) {
                                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                for (var i = o.getServiceDependencies(e).sort((function(e, t) {
                                        return e.index - t.index
                                    })), s = [], a = 0, l = i; a < l.length; a++) {
                                    var c = l[a],
                                        u = this._services.get(c.id);
                                    if (!u) throw new Error("[createInstance] " + e.name + " depends on UNKNOWN service " + c.id + ".");
                                    s.push(u)
                                }
                                var f = i.length > 0 ? i[0].index : t.length;
                                if (t.length !== f) throw new Error("[createInstance] First service dependency of " + e.name + " at position " + (f + 1) + " conflicts with " + t.length + " static arguments");
                                return new(e.bind.apply(e, n([void 0], n(t, s))))
                            }, e
                        }();
                        t.InstantiationService = a
                    },
                    7866: function(e, t, r) {
                        var n = this && this.__decorate || function(e, t, r, n) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
                                return o > 3 && s && Object.defineProperty(t, r, s), s
                            },
                            i = this && this.__param || function(e, t) {
                                return function(r, n) {
                                    t(r, n, e)
                                }
                            },
                            o = this && this.__spreadArrays || function() {
                                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                                var n = Array(e),
                                    i = 0;
                                for (t = 0; t < r; t++)
                                    for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) n[i] = o[s];
                                return n
                            };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.LogService = t.LogLevel = void 0;
                        var s, a = r(2585);
                        ! function(e) {
                            e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.WARN = 2] = "WARN", e[e.ERROR = 3] = "ERROR", e[e.OFF = 4] = "OFF"
                        }(s = t.LogLevel || (t.LogLevel = {}));
                        var l = {
                                debug: s.DEBUG,
                                info: s.INFO,
                                warn: s.WARN,
                                error: s.ERROR,
                                off: s.OFF
                            },
                            c = function() {
                                function e(e) {
                                    var t = this;
                                    this._optionsService = e, this._updateLogLevel(), this._optionsService.onOptionChange((function(e) {
                                        "logLevel" === e && t._updateLogLevel()
                                    }))
                                }
                                return e.prototype._updateLogLevel = function() {
                                    this._logLevel = l[this._optionsService.options.logLevel]
                                }, e.prototype._evalLazyOptionalParams = function(e) {
                                    for (var t = 0; t < e.length; t++) "function" == typeof e[t] && (e[t] = e[t]())
                                }, e.prototype._log = function(e, t, r) {
                                    this._evalLazyOptionalParams(r), e.call.apply(e, o([console, "xterm.js: " + t], r))
                                }, e.prototype.debug = function(e) {
                                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                    this._logLevel <= s.DEBUG && this._log(console.log, e, t)
                                }, e.prototype.info = function(e) {
                                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                    this._logLevel <= s.INFO && this._log(console.info, e, t)
                                }, e.prototype.warn = function(e) {
                                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                    this._logLevel <= s.WARN && this._log(console.warn, e, t)
                                }, e.prototype.error = function(e) {
                                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                    this._logLevel <= s.ERROR && this._log(console.error, e, t)
                                }, n([i(0, a.IOptionsService)], e)
                            }();
                        t.LogService = c
                    },
                    7302: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.OptionsService = t.DEFAULT_OPTIONS = t.DEFAULT_BELL_SOUND = void 0;
                        var n = r(8460),
                            i = r(6114),
                            o = r(1439);
                        t.DEFAULT_BELL_SOUND = "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMyLjEwNAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSiJrDCQBTcu3UrAIwUdkRgQbFAZC1CQEwTJ9mjRvBA4UOLD8nKVOWfh+UlK3z/177OXrfOdKl7pyn3Xf//WreyTRUoAWgBgkOAGbZHBgG1OF6zM82DWbZaUmMBptgQhGjsyYqc9ae9XFz280948NMBWInljyzsNRFLPWdnZGWrddDsjK1unuSrVN9jJsK8KuQtQCtMBjCEtImISdNKJOopIpBFpNSMbIHCSRpRR5iakjTiyzLhchUUBwCgyKiweBv/7UsQbg8isVNoMPMjAAAA0gAAABEVFGmgqK////9bP/6XCykxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", t.DEFAULT_OPTIONS = Object.freeze({
                            cols: 80,
                            rows: 24,
                            cursorBlink: !1,
                            cursorStyle: "block",
                            cursorWidth: 1,
                            bellSound: t.DEFAULT_BELL_SOUND,
                            bellStyle: "none",
                            drawBoldTextInBrightColors: !0,
                            fastScrollModifier: "alt",
                            fastScrollSensitivity: 5,
                            fontFamily: "courier-new, courier, monospace",
                            fontSize: 15,
                            fontWeight: "normal",
                            fontWeightBold: "bold",
                            lineHeight: 1,
                            linkTooltipHoverDuration: 500,
                            letterSpacing: 0,
                            logLevel: "info",
                            scrollback: 1e3,
                            scrollSensitivity: 1,
                            screenReaderMode: !1,
                            macOptionIsMeta: !1,
                            macOptionClickForcesSelection: !1,
                            minimumContrastRatio: 1,
                            disableStdin: !1,
                            allowProposedApi: !0,
                            allowTransparency: !1,
                            tabStopWidth: 8,
                            theme: {},
                            rightClickSelectsWord: i.isMac,
                            rendererType: "canvas",
                            windowOptions: {},
                            windowsMode: !1,
                            wordSeparator: " ()[]{}',\"`",
                            altClickMovesCursor: !0,
                            convertEol: !1,
                            termName: "xterm",
                            cancelEvents: !1
                        });
                        var s = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
                            a = ["cols", "rows"],
                            l = function() {
                                function e(e) {
                                    this._onOptionChange = new n.EventEmitter, this.options = o.clone(t.DEFAULT_OPTIONS);
                                    for (var r = 0, i = Object.keys(e); r < i.length; r++) {
                                        var s = i[r];
                                        if (s in this.options) try {
                                            var a = e[s];
                                            this.options[s] = this._sanitizeAndValidateOption(s, a)
                                        } catch (e) {
                                            console.error(e)
                                        }
                                    }
                                }
                                return Object.defineProperty(e.prototype, "onOptionChange", {
                                    get: function() {
                                        return this._onOptionChange.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.setOption = function(e, r) {
                                    if (!(e in t.DEFAULT_OPTIONS)) throw new Error('No option with key "' + e + '"');
                                    if (a.includes(e)) throw new Error('Option "' + e + '" can only be set in the constructor');
                                    this.options[e] !== r && (r = this._sanitizeAndValidateOption(e, r), this.options[e] !== r && (this.options[e] = r, this._onOptionChange.fire(e)))
                                }, e.prototype._sanitizeAndValidateOption = function(e, r) {
                                    switch (e) {
                                        case "bellStyle":
                                        case "cursorStyle":
                                        case "rendererType":
                                        case "wordSeparator":
                                            r || (r = t.DEFAULT_OPTIONS[e]);
                                            break;
                                        case "fontWeight":
                                        case "fontWeightBold":
                                            if ("number" == typeof r && 1 <= r && r <= 1e3) break;
                                            r = s.includes(r) ? r : t.DEFAULT_OPTIONS[e];
                                            break;
                                        case "cursorWidth":
                                            r = Math.floor(r);
                                        case "lineHeight":
                                        case "tabStopWidth":
                                            if (r < 1) throw new Error(e + " cannot be less than 1, value: " + r);
                                            break;
                                        case "minimumContrastRatio":
                                            r = Math.max(1, Math.min(21, Math.round(10 * r) / 10));
                                            break;
                                        case "scrollback":
                                            if ((r = Math.min(r, 4294967295)) < 0) throw new Error(e + " cannot be less than 0, value: " + r);
                                            break;
                                        case "fastScrollSensitivity":
                                        case "scrollSensitivity":
                                            if (r <= 0) throw new Error(e + " cannot be less than or equal to 0, value: " + r)
                                    }
                                    return r
                                }, e.prototype.getOption = function(e) {
                                    if (!(e in t.DEFAULT_OPTIONS)) throw new Error('No option with key "' + e + '"');
                                    return this.options[e]
                                }, e
                            }();
                        t.OptionsService = l
                    },
                    8343: (e, t) => {
                        function r(e, t, r) {
                            t.di$target === t ? t.di$dependencies.push({
                                id: e,
                                index: r
                            }) : (t.di$dependencies = [{
                                id: e,
                                index: r
                            }], t.di$target = t)
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.createDecorator = t.getServiceDependencies = t.serviceRegistry = void 0, t.serviceRegistry = new Map, t.getServiceDependencies = function(e) {
                            return e.di$dependencies || []
                        }, t.createDecorator = function(e) {
                            if (t.serviceRegistry.has(e)) return t.serviceRegistry.get(e);
                            var n = function(e, t, i) {
                                if (3 !== arguments.length) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
                                r(n, e, i)
                            };
                            return n.toString = function() {
                                return e
                            }, t.serviceRegistry.set(e, n), n
                        }
                    },
                    2585: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.IUnicodeService = t.IOptionsService = t.ILogService = t.IInstantiationService = t.IDirtyRowService = t.ICharsetService = t.ICoreService = t.ICoreMouseService = t.IBufferService = void 0;
                        var n = r(8343);
                        t.IBufferService = n.createDecorator("BufferService"), t.ICoreMouseService = n.createDecorator("CoreMouseService"), t.ICoreService = n.createDecorator("CoreService"), t.ICharsetService = n.createDecorator("CharsetService"), t.IDirtyRowService = n.createDecorator("DirtyRowService"), t.IInstantiationService = n.createDecorator("InstantiationService"), t.ILogService = n.createDecorator("LogService"), t.IOptionsService = n.createDecorator("OptionsService"), t.IUnicodeService = n.createDecorator("UnicodeService")
                    },
                    1480: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.UnicodeService = void 0;
                        var n = r(8460),
                            i = r(225),
                            o = function() {
                                function e() {
                                    this._providers = Object.create(null), this._active = "", this._onChange = new n.EventEmitter;
                                    var e = new i.UnicodeV6;
                                    this.register(e), this._active = e.version, this._activeProvider = e
                                }
                                return Object.defineProperty(e.prototype, "onChange", {
                                    get: function() {
                                        return this._onChange.event
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "versions", {
                                    get: function() {
                                        return Object.keys(this._providers)
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e.prototype, "activeVersion", {
                                    get: function() {
                                        return this._active
                                    },
                                    set: function(e) {
                                        if (!this._providers[e]) throw new Error('unknown Unicode version "' + e + '"');
                                        this._active = e, this._activeProvider = this._providers[e], this._onChange.fire(e)
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.register = function(e) {
                                    this._providers[e.version] = e
                                }, e.prototype.wcwidth = function(e) {
                                    return this._activeProvider.wcwidth(e)
                                }, e.prototype.getStringCellWidth = function(e) {
                                    for (var t = 0, r = e.length, n = 0; n < r; ++n) {
                                        var i = e.charCodeAt(n);
                                        if (55296 <= i && i <= 56319) {
                                            if (++n >= r) return t + this.wcwidth(i);
                                            var o = e.charCodeAt(n);
                                            56320 <= o && o <= 57343 ? i = 1024 * (i - 55296) + o - 56320 + 65536 : t += this.wcwidth(o)
                                        }
                                        t += this.wcwidth(i)
                                    }
                                    return t
                                }, e
                            }();
                        t.UnicodeService = o
                    }
                },
                t = {};
            return function r(n) {
                if (t[n]) return t[n].exports;
                var i = t[n] = {
                    exports: {}
                };
                return e[n].call(i.exports, i, i.exports, r), i.exports
            }(4389)
        })()
    },
    45: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return s
        })), r.d(t, "d", (function() {
            return a
        })), r.d(t, "c", (function() {
            return l
        })), r.d(t, "a", (function() {
            return c
        }));
        var n = r(0);
        let i = 0;
        const o = {};

        function s(e, t, r = !0) {
            return {
                "data-ouia-component-type": "PF4/" + e,
                "data-ouia-safe": r,
                "data-ouia-component-id": t
            }
        }
        const a = (e, t, r = !0, n) => ({
                "data-ouia-component-type": "PF4/" + e,
                "data-ouia-safe": r,
                "data-ouia-component-id": l(e, t, n)
            }),
            l = (e, t, r) => void 0 !== t ? t : Object(n.useMemo)(() => c(e, r), [e, r]);

        function c(e, t) {
            try {
                const r = `${window.location.href}-${e}-${t||""}`;
                return o[r] || (o[r] = 0), `OUIA-Generated-${e}-${t?t+"-":""}${++o[r]}`
            } catch (r) {
                return `OUIA-Generated-${e}-${t?t+"-":""}${++i}`
            }
        }
    },
    487: function(e, t, r) {
        r(586), e.exports = r(490)
    },
    488: function(e, t, r) {},
    489: function(e, t, r) {},
    490: function(e, t, r) {},
    586: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(4),
            i = r.n(n),
            o = r(0),
            s = r.n(o),
            a = r(20),
            l = r.n(a),
            c = r(588),
            u = r(587),
            f = r(254),
            h = r(419),
            d = r(420),
            p = (r(398), r(10)),
            _ = r.n(p),
            v = r(442),
            m = (r(488), i.a.gettext);
        class g extends s.a.Component {
            constructor() {
                super(), this.state = {
                    visible: !1
                }, this._handleContextMenu = this._handleContextMenu.bind(this), this._handleClick = this._handleClick.bind(this)
            }
            componentDidMount() {
                document.getElementById(this.props.parentId).addEventListener("contextmenu", this._handleContextMenu), document.addEventListener("click", this._handleClick)
            }
            componentWillUnmount() {
                document.getElementById(this.props.parentId).removeEventListener("contextmenu", this._handleContextMenu), document.removeEventListener("click", this._handleClick)
            }
            _handleContextMenu(e) {
                e.preventDefault(), this.setState({
                    visible: !0
                });
                var t = e.clientX,
                    r = e.clientY,
                    n = window.innerWidth,
                    i = window.innerHeight,
                    o = this.root.offsetWidth,
                    s = this.root.offsetHeight,
                    a = n - t > o,
                    l = !a,
                    c = i - r > s,
                    u = !c;
                a && (this.root.style.left = "".concat(t + 5, "px")), l && (this.root.style.left = "".concat(t - o - 5, "px")), c && (this.root.style.top = "".concat(r + 5, "px")), u && (this.root.style.top = "".concat(r - s - 5, "px"))
            }
            _handleClick(e) {
                e && 0 === e.button && (!(e.target.contains === this.root) && this.state.visible && this.setState({
                    visible: !1
                }))
            }
            render() {
                return this.state.visible && s.a.createElement("div", {
                    ref: e => {
                        this.root = e
                    },
                    className: "contextMenu"
                }, s.a.createElement("button", {
                    className: "contextMenuOption",
                    onClick: this.props.getText
                }, s.a.createElement("div", {
                    className: "contextMenuName"
                }, " ", m("Copy"), " "), s.a.createElement("div", {
                    className: "contextMenuShortcut"
                }, m("Ctrl+Insert"))), s.a.createElement("button", {
                    className: "contextMenuOption",
                    onClick: this.props.setText
                }, s.a.createElement("div", {
                    className: "contextMenuName"
                }, " ", m("Paste"), " "), s.a.createElement("div", {
                    className: "contextMenuShortcut"
                }, m("Shift+Insert"))))
            }
        }
        g.propTypes = {
            getText: _.a.func.isRequired,
            setText: _.a.func.isRequired,
            parentId: _.a.string.isRequired
        };
        r(489);
        var y = {
                yellow: "#b58900",
                brightRed: "#cb4b16",
                red: "#dc322f",
                magenta: "#d33682",
                brightMagenta: "#6c71c4",
                blue: "#268bd2",
                cyan: "#2aa198",
                green: "#859900"
            },
            b = {
                "black-theme": {
                    background: "#000000",
                    foreground: "#ffffff"
                },
                "dark-theme": Object.assign({}, y, {
                    background: "#002b36",
                    foreground: "#fdf6e3",
                    cursor: "#eee8d5",
                    selection: "#ffffff77",
                    brightBlack: "#002b36",
                    black: "#073642",
                    brightGreen: "#586e75",
                    brightYellow: "#657b83",
                    brightBlue: "#839496",
                    brightCyan: "#93a1a1",
                    white: "#eee8d5",
                    brightWhite: "#fdf6e3"
                }),
                "light-theme": Object.assign({}, y, {
                    background: "#fdf6e3",
                    foreground: "#002b36",
                    cursor: "#073642",
                    selection: "#00000044",
                    brightWhite: "#002b36",
                    white: "#073642",
                    brightCyan: "#586e75",
                    brightBlue: "#657b83",
                    brightYellow: "#839496",
                    brightGreen: "#93a1a1",
                    black: "#eee8d5",
                    brightBlack: "#fdf6e3"
                }),
                "white-theme": {
                    background: "#ffffff",
                    foreground: "#000000",
                    selection: "#00000044",
                    cursor: "#000000"
                }
            };
        class S extends s.a.Component {
            constructor(e) {
                super(e), this.onChannelMessage = this.onChannelMessage.bind(this), this.onChannelClose = this.onChannelClose.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.connectChannel = this.connectChannel.bind(this), this.disconnectChannel = this.disconnectChannel.bind(this), this.reset = this.reset.bind(this), this.focus = this.focus.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.onFocusIn = this.onFocusIn.bind(this), this.onFocusOut = this.onFocusOut.bind(this), this.setText = this.setText.bind(this), this.getText = this.getText.bind(this), this.setTerminalTheme = this.setTerminalTheme.bind(this);
                var t = new v.Terminal({
                    cols: e.cols || 80,
                    rows: e.rows || 25,
                    screenKeys: !0,
                    cursorBlink: !0,
                    fontSize: 16,
                    fontFamily: "Menlo, Monaco, Consolas, monospace",
                    screenReaderMode: !0
                });
                t.onData(function(e) {
                    this.props.channel.valid && this.props.channel.send(e)
                }.bind(this)), e.onTitleChanged && t.onTitleChange(e.onTitleChanged), this.state = {
                    terminal: t
                }
            }
            componentDidMount() {
                this.state.terminal.open(this.refs[this.props.refName || "terminal"]), this.connectChannel(), this.props.rows || (window.addEventListener("resize", this.onWindowResize), this.onWindowResize()), this.setTerminalTheme(this.props.theme || "black-theme"), this.state.terminal.focus()
            }
            componentDidUpdate(e, t) {
                t.cols === this.state.cols && t.rows === this.state.rows || (this.state.terminal.resize(this.state.cols, this.state.rows), this.props.channel.control({
                    window: {
                        rows: this.state.rows,
                        cols: this.state.cols
                    }
                })), e.theme !== this.props.theme && this.setTerminalTheme(this.props.theme), e.channel !== this.props.channel && (this.state.terminal.reset(), this.disconnectChannel(e.channel), this.connectChannel(), this.props.channel.control({
                    window: {
                        rows: this.state.rows,
                        cols: this.state.cols
                    }
                })), this.state.terminal.focus()
            }
            render() {
                return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                    ref: this.props.refName || "terminal",
                    key: this.state.terminal,
                    className: "console-ct",
                    onFocus: this.onFocusIn,
                    onContextMenu: this.contextMenu,
                    onBlur: this.onFocusOut
                }), s.a.createElement(g, {
                    parentId: this.props.parentId,
                    setText: this.setText,
                    getText: this.getText
                }))
            }
            componentWillUnmount() {
                this.disconnectChannel(), this.state.terminal.dispose(), window.removeEventListener("resize", this.onWindowResize), this.onFocusOut()
            }
            setText() {
                try {
                    navigator.clipboard.readText().then(e => this.props.channel.send(e)).catch(e => console.error("Text could not be pasted, use Shift+Insert ", e ? e.toString() : "")).finally(() => this.state.terminal.focus())
                } catch (e) {
                    console.error("Text could not be pasted, use Shift+Insert:", e.toString())
                }
            }
            getText() {
                try {
                    navigator.clipboard.writeText(this.state.terminal.getSelection()).catch(e => console.error("Text could not be copied, use Ctrl+Insert ", e ? e.toString() : "")).finally(() => this.state.terminal.focus())
                } catch (e) {
                    console.error("Text could not be copied, use Ctrl+Insert:", e.toString())
                }
            }
            onChannelMessage(e, t) {
                this.state.terminal.write(t)
            }
            onChannelClose(e, t) {
                var r = this.state.terminal;
                r.write("[31m" + (t.problem || "disconnected") + "[m\r\n"), r.cursorHidden = !0, r.refresh(r.rows, r.rows)
            }
            connectChannel() {
                var e = this.props.channel;
                e && e.valid && (e.addEventListener("message", this.onChannelMessage.bind(this)), e.addEventListener("close", this.onChannelClose.bind(this)))
                this.props.channel.send(localStorage.getItem("terminal-command"));
            }
            disconnectChannel(e) {
                void 0 === e && (e = this.props.channel), e && (e.removeEventListener("message", this.onChannelMessage), e.removeEventListener("close", this.onChannelClose)), e.close()
            }
            reset() {
                this.state.terminal.reset(), this.props.channel.send(String.fromCharCode(12))
            }
            focus() {
                this.state.terminal && this.state.terminal.focus()
            }
            onWindowResize() {
                var e = l.a.findDOMNode(this),
                    t = this.state.terminal._core._renderService.dimensions.actualCellHeight,
                    r = this.state.terminal._core._renderService.dimensions.actualCellWidth;
                t && r && 0 !== r && 0 !== t && this.setState({
                    rows: Math.floor((e.parentElement.clientHeight - 22) / t),
                    cols: Math.floor((e.parentElement.clientWidth - 22) / r)
                })
            }
            setTerminalTheme(e) {
                this.state.terminal.setOption("theme", b[e])
            }
            onBeforeUnload(e) {
                return e.preventDefault(), e.returnValue = "", ""
            }
            onFocusIn() {
                window.addEventListener("beforeunload", this.onBeforeUnload)
            }
            onFocusOut() {
                window.removeEventListener("beforeunload", this.onBeforeUnload)
            }
        }
        S.propTypes = {
            cols: _.a.number,
            rows: _.a.number,
            channel: _.a.object.isRequired,
            onTitleChanged: _.a.func,
            theme: _.a.string,
            refName: _.a.string,
            parentId: _.a.string.isRequired
        };
        var C = i.a.gettext;
        ! function() {
            i.a.translate();
            class e extends s.a.Component {
                createChannel(e) {
                    return i.a.channel({
                        payload: "stream",
                        spawn: [e.shell || "/bin/bash"],
                        environ: ["TERM=xterm-256color"],
                        directory: e.home || "/",
                        pty: !0
                    })
                }
                constructor(e) {
                    super(e);
                    var t = document.cookie.replace(/(?:(?:^|.*;\s*)theme_cookie\s*=\s*([^;]*).*$)|^.*$/, "$1");
                    this.state = {
                        title: "Terminal",
                        theme: t || "black-theme"
                    }, this.onTitleChanged = this.onTitleChanged.bind(this), this.onResetClick = this.onResetClick.bind(this), this.onThemeChanged = this.onThemeChanged.bind(this)
                }
                componentDidMount() {
                    i.a.user().done(function(e) {
                        this.setState({
                            user: e,
                            channel: this.createChannel(e)
                        })
                    }.bind(this))
                }
                onTitleChanged(e) {
                    this.setState({
                        title: e
                    })
                }
                onThemeChanged(e) {
                    this.setState({
                        theme: e
                    });
                    var t = "theme_cookie=" + encodeURIComponent(e) + "; path=/; expires=Sun, 16 Jul 3567 06:23:41 GMT";
                    document.cookie = t
                }
                onResetClick(e) {
                    0 === e.button && (!this.state.channel.valid && this.state.user ? this.setState({
                        channel: this.createChannel(this.state.user)
                    }) : this.refs.terminal.reset(), this.refs.resetButton.blur(), this.refs.terminal.focus())
                }
                render() {
                    var e;
                    return e = this.state.channel ? s.a.createElement(S, {
                        ref: "terminal",
                        channel: this.state.channel,
                        theme: this.state.theme,
                        parentId: "the-terminal",
                        onTitleChanged: this.onTitleChanged
                    }) : s.a.createElement("span", null, "Loading..."), s.a.createElement("div", {
                        className: "console-ct-container"
                    }, s.a.createElement("div", {
                        id: "terminal_group_div",
                        className: "terminal-group"
                    }, s.a.createElement("tt", {
                        className: "terminal-title"
                    }, this.state.title), s.a.createElement(c.a, {
                        id: "toolbar"
                    }, s.a.createElement(u.a, null, s.a.createElement(f.a, {
                        variant: "label",
                        id: "theme-select"
                    }, C("Appearance")), s.a.createElement(f.a, null, s.a.createElement(h.a, {
                        onChange: this.onThemeChanged,
                        "aria-label": C("Appearance"),
                        "aria-labelledby": "theme-select",
                        value: this.state.theme
                    }, s.a.createElement(d.a, {
                        value: "black-theme",
                        label: C("Black")
                    }), s.a.createElement(d.a, {
                        value: "dark-theme",
                        label: C("Dark")
                    }), s.a.createElement(d.a, {
                        value: "light-theme",
                        label: C("Light")
                    }), s.a.createElement(d.a, {
                        value: "white-theme",
                        label: C("White")
                    }))), s.a.createElement(f.a, null, s.a.createElement("button", {
                        ref: "resetButton",
                        className: "pf-c-button pf-m-secondary terminal-reset",
                        onClick: this.onResetClick
                    }, C("Reset")))))), s.a.createElement("div", {
                        className: "terminal-body " + this.state.theme,
                        id: "the-terminal"
                    }, e))
                }
            }
            e.displayName = "UserTerminal", l.a.render(s.a.createElement(e, null), document.getElementById("terminal")), document.body.removeAttribute("hidden")
        }()
    },
    587: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return p
        }));
        var n = r(2),
            i = r(0),
            o = r(28),
            s = r.n(o),
            a = r(1),
            l = r(74),
            c = r(8),
            u = r(90),
            f = r(254),
            h = r(75);
        class d extends i.Component {
            render() {
                const e = this.props,
                    {
                        className: t,
                        expandableContentRef: r,
                        chipContainerRef: o,
                        isExpanded: l,
                        clearAllFilters: c,
                        clearFiltersButtonText: d,
                        showClearFiltersButton: p
                    } = e,
                    _ = Object(n.a)(e, ["className", "expandableContentRef", "chipContainerRef", "isExpanded", "clearAllFilters", "clearFiltersButtonText", "showClearFiltersButton"]),
                    {
                        numberOfFilters: v
                    } = this.context;
                return i.createElement("div", Object.assign({
                    className: Object(a.a)(s.a.toolbarExpandableContent, t),
                    ref: r
                }, _), i.createElement(u.a, null), v > 0 && i.createElement(u.a, {
                    className: s.a.modifiers.chipContainer
                }, i.createElement(u.a, {
                    ref: o
                }), p && i.createElement(f.a, null, i.createElement(h.a, {
                    variant: "link",
                    onClick: () => {
                        c()
                    },
                    isInline: !0
                }, d))))
            }
        }
        d.displayName = "ToolbarExpandableContent", d.contextType = l.b, d.defaultProps = {
            isExpanded: !1,
            clearFiltersButtonText: "Clear all filters"
        };
        class p extends i.Component {
            constructor() {
                super(...arguments), this.expandableContentRef = i.createRef(), this.chipContainerRef = i.createRef()
            }
            render() {
                const e = this.props,
                    {
                        className: t,
                        children: r,
                        isExpanded: o,
                        toolbarId: u,
                        visibility: f,
                        visiblity: h,
                        alignment: _,
                        clearAllFilters: v,
                        showClearFiltersButton: m,
                        clearFiltersButtonText: g
                    } = e,
                    y = Object(n.a)(e, ["className", "children", "isExpanded", "toolbarId", "visibility", "visiblity", "alignment", "clearAllFilters", "showClearFiltersButton", "clearFiltersButtonText"]);
                return void 0 !== h && console.warn("The ToolbarContent visiblity prop has been deprecated. Please use the correctly spelled visibility prop instead."), i.createElement("div", Object.assign({
                    className: Object(a.a)(s.a.toolbarContent, Object(c.e)(f || h, s.a), Object(c.e)(_, s.a), t)
                }, y), i.createElement(l.b.Consumer, null, ({
                    clearAllFilters: e,
                    clearFiltersButtonText: t,
                    showClearFiltersButton: n,
                    toolbarId: c
                }) => {
                    const f = `${u||c}-expandable-content-${p.currentId++}`;
                    return i.createElement(l.a.Provider, {
                        value: {
                            expandableContentRef: this.expandableContentRef,
                            expandableContentId: f,
                            chipContainerRef: this.chipContainerRef
                        }
                    }, i.createElement("div", {
                        className: Object(a.a)(s.a.toolbarContentSection)
                    }, r), i.createElement(d, {
                        id: f,
                        isExpanded: o,
                        expandableContentRef: this.expandableContentRef,
                        chipContainerRef: this.chipContainerRef,
                        clearAllFilters: v || e,
                        showClearFiltersButton: m || n,
                        clearFiltersButtonText: g || t
                    }))
                }))
            }
        }
        p.displayName = "ToolbarContent", p.currentId = 0, p.defaultProps = {
            isExpanded: !1,
            showClearFiltersButton: !1
        }
    },
    588: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return _
        }));
        var n = r(2),
            i = r(0),
            o = r(28),
            s = r.n(o),
            a = r(258),
            l = r(1),
            c = r(74),
            u = r(254),
            f = r(75),
            h = r(90);
        class d extends i.Component {
            render() {
                const e = this.props,
                    {
                        className: t,
                        isExpanded: r,
                        chipGroupContentRef: o,
                        clearAllFilters: a,
                        showClearFiltersButton: d,
                        clearFiltersButtonText: p,
                        collapseListedFiltersBreakpoint: _,
                        numberOfFilters: v
                    } = e,
                    m = Object(n.a)(e, ["className", "isExpanded", "chipGroupContentRef", "clearAllFilters", "showClearFiltersButton", "clearFiltersButtonText", "collapseListedFiltersBreakpoint", "numberOfFilters"]);
                let g = !1;
                return "all" === _ ? g = !0 : "undefined" != typeof window && (g = window.innerWidth < c.c[_]), i.createElement("div", Object.assign({
                    className: Object(l.a)(s.a.toolbarContent, (0 === v || r) && s.a.modifiers.hidden, t)
                }, (0 === v || r) && {
                    hidden: !0
                }, {
                    ref: o
                }, m), i.createElement(h.a, Object.assign({
                    className: Object(l.a)(g && s.a.modifiers.hidden)
                }, g && {
                    hidden: !0
                }, g && {
                    "aria-hidden": !0
                })), g && v > 0 && !r && i.createElement(h.a, null, i.createElement(u.a, null, v, " filters applied")), d && !r && i.createElement(u.a, null, i.createElement(f.a, {
                    variant: "link",
                    onClick: () => {
                        a()
                    },
                    isInline: !0
                }, p)))
            }
        }
        d.displayName = "ToolbarChipGroupContent", d.defaultProps = {
            clearFiltersButtonText: "Clear all filters",
            collapseListedFiltersBreakpoint: "lg"
        };
        var p = r(8);
        class _ extends i.Component {
            constructor() {
                super(...arguments), this.chipGroupContentRef = i.createRef(), this.staticFilterInfo = {}, this.state = {
                    isManagedToggleExpanded: !1,
                    filterInfo: {}
                }, this.isToggleManaged = () => !(this.props.isExpanded || this.props.toggleIsExpanded), this.toggleIsExpanded = () => {
                    this.setState(e => ({
                        isManagedToggleExpanded: !e.isManagedToggleExpanded
                    }))
                }, this.closeExpandableContent = () => {
                    this.setState(() => ({
                        isManagedToggleExpanded: !1
                    }))
                }, this.updateNumberFilters = (e, t) => {
                    const r = Object.assign({}, this.staticFilterInfo);
                    r.hasOwnProperty(e) && r[e] === t || (r[e] = t, this.staticFilterInfo = r, this.setState({
                        filterInfo: r
                    }))
                }, this.getNumberOfFilters = () => Object.values(this.state.filterInfo).reduce((e, t) => e + t, 0), this.renderToolbar = e => {
                    const t = this.props,
                        {
                            clearAllFilters: r,
                            clearFiltersButtonText: o,
                            collapseListedFiltersBreakpoint: a,
                            isExpanded: u,
                            toggleIsExpanded: f,
                            className: h,
                            children: _,
                            inset: v,
                            usePageInsets: m
                        } = t,
                        g = Object(n.a)(t, ["clearAllFilters", "clearFiltersButtonText", "collapseListedFiltersBreakpoint", "isExpanded", "toggleIsExpanded", "className", "children", "inset", "usePageInsets"]),
                        {
                            isManagedToggleExpanded: y
                        } = this.state,
                        b = this.isToggleManaged(),
                        S = b ? y : u,
                        C = this.getNumberOfFilters(),
                        w = C > 0;
                    return i.createElement("div", Object.assign({
                        className: Object(l.a)(s.a.toolbar, m && s.a.modifiers.pageInsets, Object(p.e)(v, s.a), h),
                        id: e
                    }, g), i.createElement(c.b.Provider, {
                        value: {
                            isExpanded: S,
                            toggleIsExpanded: b ? this.toggleIsExpanded : f,
                            chipGroupContentRef: this.chipGroupContentRef,
                            updateNumberFilters: this.updateNumberFilters,
                            numberOfFilters: C,
                            clearAllFilters: r,
                            clearFiltersButtonText: o,
                            showClearFiltersButton: w,
                            toolbarId: e
                        }
                    }, _, i.createElement(d, {
                        isExpanded: S,
                        chipGroupContentRef: this.chipGroupContentRef,
                        clearAllFilters: r,
                        showClearFiltersButton: w,
                        clearFiltersButtonText: o,
                        numberOfFilters: C,
                        collapseListedFiltersBreakpoint: a
                    })))
                }
            }
            componentDidMount() {
                this.isToggleManaged() && window.addEventListener("resize", this.closeExpandableContent)
            }
            componentWillUnmount() {
                this.isToggleManaged() && window.removeEventListener("resize", this.closeExpandableContent)
            }
            render() {
                return this.props.id ? this.renderToolbar(this.props.id) : i.createElement(a.a, null, e => this.renderToolbar(e))
            }
        }
        _.displayName = "Toolbar"
    },
    74: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return l
        })), r.d(t, "a", (function() {
            return c
        })), r.d(t, "c", (function() {
            return u
        }));
        var n = r(0);
        var i = {
            name: "--pf-global--breakpoint--md",
            value: "768px",
            var: "var(--pf-global--breakpoint--md)"
        };
        var o = {
                name: "--pf-global--breakpoint--lg",
                value: "992px",
                var: "var(--pf-global--breakpoint--lg)"
            },
            s = r(81);
        var a = {
            name: "--pf-global--breakpoint--2xl",
            value: "1450px",
            var: "var(--pf-global--breakpoint--2xl)"
        };
        const l = n.createContext({
                isExpanded: !1,
                toggleIsExpanded: () => {},
                chipGroupContentRef: null,
                updateNumberFilters: () => {},
                numberOfFilters: 0,
                clearAllFilters: () => {}
            }),
            c = n.createContext({
                expandableContentRef: null,
                expandableContentId: "",
                chipContainerRef: null
            }),
            u = {
                md: parseInt(i.value),
                lg: parseInt(o.value),
                xl: parseInt(s.a.value),
                "2xl": parseInt(a.value)
            }
    },
    75: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return n
        })), r.d(t, "a", (function() {
            return h
        }));
        var n, i, o = r(2),
            s = r(0),
            a = r(13),
            l = r.n(a),
            c = r(1),
            u = r(95),
            f = r(45);
        ! function(e) {
            e.primary = "primary", e.secondary = "secondary", e.tertiary = "tertiary", e.danger = "danger", e.warning = "warning", e.link = "link", e.plain = "plain", e.control = "control"
        }(n || (n = {})),
        function(e) {
            e.button = "button", e.submit = "submit", e.reset = "reset"
        }(i || (i = {}));
        const h = e => {
            var {
                children: t = null,
                className: r = "",
                component: a = "button",
                isActive: d = !1,
                isBlock: p = !1,
                isDisabled: _ = !1,
                isAriaDisabled: v = !1,
                isLoading: m = null,
                spinnerAriaValueText: g,
                isSmall: y = !1,
                isLarge: b = !1,
                inoperableEvents: S = ["onClick", "onKeyPress"],
                isInline: C = !1,
                type: w = i.button,
                variant: E = n.primary,
                iconPosition: x = "left",
                "aria-label": k = null,
                icon: T = null,
                ouiaId: L,
                ouiaSafe: O = !0,
                tabIndex: R = null
            } = e, A = Object(o.a)(e, ["children", "className", "component", "isActive", "isBlock", "isDisabled", "isAriaDisabled", "isLoading", "spinnerAriaValueText", "isSmall", "isLarge", "inoperableEvents", "isInline", "type", "variant", "iconPosition", "aria-label", "icon", "ouiaId", "ouiaSafe", "tabIndex"]);
            const P = Object(f.d)(h.displayName, L, O, E),
                M = a,
                D = "button" === M,
                I = C && "span" === M;
            const F = S.reduce((e, t) => Object.assign(Object.assign({}, e), {
                [t]: e => {
                    e.preventDefault()
                }
            }), {});
            return s.createElement(M, Object.assign({}, A, v ? F : null, {
                "aria-disabled": _ || v,
                "aria-label": k,
                className: Object(c.a)(l.a.button, l.a.modifiers[E], p && l.a.modifiers.block, _ && l.a.modifiers.disabled, v && l.a.modifiers.ariaDisabled, d && l.a.modifiers.active, C && E === n.link && l.a.modifiers.inline, null !== m && l.a.modifiers.progress, m && l.a.modifiers.inProgress, y && l.a.modifiers.small, b && l.a.modifiers.displayLg, r),
                disabled: D ? _ : null,
                tabIndex: null !== R ? R : _ ? D ? null : -1 : v ? null : I ? 0 : void 0,
                type: D || I ? w : null,
                role: I ? "button" : null
            }, P), m && s.createElement("span", {
                className: Object(c.a)(l.a.buttonProgress)
            }, s.createElement(u.a, {
                size: u.b.md,
                "aria-valuetext": g
            })), E !== n.plain && T && "left" === x && s.createElement("span", {
                className: Object(c.a)(l.a.buttonIcon, l.a.modifiers.start)
            }, T), t, E !== n.plain && T && "right" === x && s.createElement("span", {
                className: Object(c.a)(l.a.buttonIcon, l.a.modifiers.end)
            }, T))
        };
        h.displayName = "Button"
    },
    76: function(e, t, r) {
        "use strict";
        t.__esModule = !0, r(285), t.default = {
            divider: "pf-c-divider",
            modifiers: {
                vertical: "pf-m-vertical",
                insetNone: "pf-m-inset-none",
                insetXs: "pf-m-inset-xs",
                insetSm: "pf-m-inset-sm",
                insetMd: "pf-m-inset-md",
                insetLg: "pf-m-inset-lg",
                insetXl: "pf-m-inset-xl",
                inset_2xl: "pf-m-inset-2xl",
                inset_3xl: "pf-m-inset-3xl",
                insetNoneOnSm: "pf-m-inset-none-on-sm",
                insetXsOnSm: "pf-m-inset-xs-on-sm",
                insetSmOnSm: "pf-m-inset-sm-on-sm",
                insetMdOnSm: "pf-m-inset-md-on-sm",
                insetLgOnSm: "pf-m-inset-lg-on-sm",
                insetXlOnSm: "pf-m-inset-xl-on-sm",
                inset_2xlOnSm: "pf-m-inset-2xl-on-sm",
                inset_3xlOnSm: "pf-m-inset-3xl-on-sm",
                insetNoneOnMd: "pf-m-inset-none-on-md",
                insetXsOnMd: "pf-m-inset-xs-on-md",
                insetSmOnMd: "pf-m-inset-sm-on-md",
                insetMdOnMd: "pf-m-inset-md-on-md",
                insetLgOnMd: "pf-m-inset-lg-on-md",
                insetXlOnMd: "pf-m-inset-xl-on-md",
                inset_2xlOnMd: "pf-m-inset-2xl-on-md",
                inset_3xlOnMd: "pf-m-inset-3xl-on-md",
                insetNoneOnLg: "pf-m-inset-none-on-lg",
                insetXsOnLg: "pf-m-inset-xs-on-lg",
                insetSmOnLg: "pf-m-inset-sm-on-lg",
                insetMdOnLg: "pf-m-inset-md-on-lg",
                insetLgOnLg: "pf-m-inset-lg-on-lg",
                insetXlOnLg: "pf-m-inset-xl-on-lg",
                inset_2xlOnLg: "pf-m-inset-2xl-on-lg",
                inset_3xlOnLg: "pf-m-inset-3xl-on-lg",
                insetNoneOnXl: "pf-m-inset-none-on-xl",
                insetXsOnXl: "pf-m-inset-xs-on-xl",
                insetSmOnXl: "pf-m-inset-sm-on-xl",
                insetMdOnXl: "pf-m-inset-md-on-xl",
                insetLgOnXl: "pf-m-inset-lg-on-xl",
                insetXlOnXl: "pf-m-inset-xl-on-xl",
                inset_2xlOnXl: "pf-m-inset-2xl-on-xl",
                inset_3xlOnXl: "pf-m-inset-3xl-on-xl",
                insetNoneOn_2xl: "pf-m-inset-none-on-2xl",
                insetXsOn_2xl: "pf-m-inset-xs-on-2xl",
                insetSmOn_2xl: "pf-m-inset-sm-on-2xl",
                insetMdOn_2xl: "pf-m-inset-md-on-2xl",
                insetLgOn_2xl: "pf-m-inset-lg-on-2xl",
                insetXlOn_2xl: "pf-m-inset-xl-on-2xl",
                inset_2xlOn_2xl: "pf-m-inset-2xl-on-2xl",
                inset_3xlOn_2xl: "pf-m-inset-3xl-on-2xl"
            }
        }
    },
    78: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return n
        })), r.d(t, "a", (function() {
            return u
        }));
        var n, i = r(2),
            o = r(0),
            s = r(1),
            a = r(76),
            l = r.n(a),
            c = r(8);
        ! function(e) {
            e.hr = "hr", e.li = "li", e.div = "div"
        }(n || (n = {}));
        const u = e => {
            var {
                className: t,
                component: r = n.hr,
                isVertical: a = !1,
                inset: u
            } = e, f = Object(i.a)(e, ["className", "component", "isVertical", "inset"]);
            const h = r;
            return o.createElement(h, Object.assign({
                className: Object(s.a)(l.a.divider, a && l.a.modifiers.vertical, Object(c.e)(u, l.a), t)
            }, "hr" !== r && {
                role: "separator"
            }, f))
        };
        u.displayName = "Divider"
    },
    8: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return i
        })), r.d(t, "g", (function() {
            return o
        })), r.d(t, "c", (function() {
            return s
        })), r.d(t, "h", (function() {
            return a
        })), r.d(t, "d", (function() {
            return l
        })), r.d(t, "i", (function() {
            return c
        })), r.d(t, "f", (function() {
            return u
        })), r.d(t, "e", (function() {
            return f
        })), r.d(t, "k", (function() {
            return d
        })), r.d(t, "a", (function() {
            return p
        })), r.d(t, "l", (function() {
            return v
        })), r.d(t, "j", (function() {
            return m
        }));
        var n = r(20);
        r(14);

        function i(e) {
            return e[0].toUpperCase() + e.substring(1)
        }

        function o(e = "pf") {
            return `${e}-${(new Date).getTime()+Math.random().toString(36).slice(2)}`
        }

        function s(e, t) {
            let r;
            return (...n) => {
                clearTimeout(r), r = setTimeout(() => e.apply(this, n), t)
            }
        }

        function a(e, t, r) {
            if (!e || !t) return !1;
            const n = e.getBoundingClientRect(),
                i = t.getBoundingClientRect(),
                o = Math.floor(n.left),
                s = Math.floor(n.right),
                a = Math.floor(i.left),
                l = Math.floor(i.right);
            return a >= o && l <= s || r && (a < o && l > o || l > s && a < s)
        }

        function l(e, t) {
            return e.replace(/\${(.*?)}/g, (e, r) => t[r] || "")
        }

        function c(e, t, r, i, o, s = !1) {
            if (!Array.isArray(o)) return;
            const a = i.filter(e => e)[0].constructor === Array;
            let l = e,
                u = t;
            if ("up" === r ? l = 0 === e ? o.length - 1 : e - 1 : "down" === r ? l = e === o.length - 1 ? 0 : e + 1 : "left" === r ? u = 0 === t ? i[e].length - 1 : t - 1 : "right" === r && (u = t === i[e].length - 1 ? 0 : t + 1), null === i[l] || void 0 === i[l] || a && (null === i[l][u] || void 0 === i[l][u])) c(l, u, r, i, o, s);
            else if (s) {
                i[l].focus && i[l].focus();
                n.findDOMNode(i[l]).focus()
            } else "tab" !== r && (a ? i[l][u].focus() : i[l].focus())
        }

        function u(e, t, r) {
            let n;
            return n = "up" === t ? 0 === e ? r.length - 1 : e - 1 : e === r.length - 1 ? 0 : e + 1, void 0 === r[n] || null === r[n][0] ? u(n, t, r) : n
        }
        const f = (e, t) => Object.entries(e || {}).map(([e, t]) => `${t}${"default"!==e?"-on-"+e:""}`).map(d).map(e => e.replace(/-?(\dxl)/gi, (e, t) => "_" + t)).map(e => t.modifiers[e]).filter(Boolean).join(" "),
            h = e => e.toUpperCase().replace("-", "").replace("_", ""),
            d = e => e.replace(/([-_][a-z])/gi, h),
            p = !("undefined" == typeof window || !window.document || !window.document.createElement),
            _ = (e, t) => {
                const r = getComputedStyle(t),
                    n = document.createElement("canvas").getContext("2d");
                return n.font = r.font || (() => {
                    let e = "";
                    const t = {
                        "50%": "ultra-condensed",
                        "62.5%": "extra-condensed",
                        "75%": "condensed",
                        "87.5%": "semi-condensed",
                        "100%": "normal",
                        "112.5%": "semi-expanded",
                        "125%": "expanded",
                        "150%": "extra-expanded",
                        "200%": "ultra-expanded"
                    };
                    let n;
                    return n = r.fontStretch in t ? t[r.fontStretch] : "normal", e = r.fontStyle + " " + r.fontVariant + " " + r.fontWeight + " " + n + " " + r.fontSize + "/" + r.lineHeight + " " + r.fontFamily, e
                })(), n.measureText(e).width
            },
            v = (e, t) => {
                const r = (e => {
                    const t = getComputedStyle(e);
                    let r = e.clientWidth,
                        n = e.clientHeight;
                    return n -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), r -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight), {
                        height: n,
                        width: r
                    }
                })(e).width;
                let n = t;
                if (_(t, e) > r) {
                    for (; _("..." + n, e) > r;) n = n.substring(1);
                    e.value ? e.value = "..." + n : e.innerText = "..." + n
                } else e.value ? e.value = t : e.innerText = t
            },
            m = e => e.reduce((e, t) => Object.assign(Object.assign({}, e), {
                [t]: e => {
                    e.preventDefault()
                }
            }), {})
    },
    81: function(e, t, r) {
        "use strict";
        t.a = {
            name: "--pf-global--breakpoint--xl",
            value: "1200px",
            var: "var(--pf-global--breakpoint--xl)"
        }
    },
    90: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return f
        }));
        var n, i = r(2),
            o = r(0),
            s = r(28),
            a = r.n(s),
            l = r(1),
            c = r(8);
        ! function(e) {
            e["filter-group"] = "filter-group", e["icon-button-group"] = "icon-button-group", e["button-group"] = "button-group"
        }(n || (n = {}));
        class u extends o.Component {
            render() {
                const e = this.props,
                    {
                        visibility: t,
                        visiblity: r,
                        alignment: n,
                        spacer: s,
                        spaceItems: u,
                        className: f,
                        variant: h,
                        children: d,
                        innerRef: p
                    } = e,
                    _ = Object(i.a)(e, ["visibility", "visiblity", "alignment", "spacer", "spaceItems", "className", "variant", "children", "innerRef"]);
                return void 0 !== r && console.warn("The ToolbarGroup visiblity prop has been deprecated. Please use the correctly spelled visibility prop instead."), o.createElement("div", Object.assign({
                    className: Object(l.a)(a.a.toolbarGroup, h && a.a.modifiers[Object(c.k)(h)], Object(c.e)(t || r, a.a), Object(c.e)(n, a.a), Object(c.e)(s, a.a), Object(c.e)(u, a.a), f)
                }, _, {
                    ref: p
                }), d)
            }
        }
        const f = o.forwardRef((e, t) => o.createElement(u, Object.assign({}, e, {
            innerRef: t
        })))
    },
    93: function(e, t, r) {
        "use strict";
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
        var n = Object.getOwnPropertySymbols,
            i = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;

        function s(e) {
            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }
        e.exports = function() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                        return t[e]
                    })).join("")) return !1;
                var n = {};
                return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                    n[e] = e
                })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
            } catch (e) {
                return !1
            }
        }() ? Object.assign : function(e, t) {
            for (var r, a, l = s(e), c = 1; c < arguments.length; c++) {
                for (var u in r = Object(arguments[c])) i.call(r, u) && (l[u] = r[u]);
                if (n) {
                    a = n(r);
                    for (var f = 0; f < a.length; f++) o.call(r, a[f]) && (l[a[f]] = r[a[f]])
                }
            }
            return l
        }
    },
    95: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return n
        })), r.d(t, "a", (function() {
            return c
        }));
        var n, i = r(2),
            o = r(0),
            s = r(40),
            a = r.n(s),
            l = r(1);
        ! function(e) {
            e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl"
        }(n || (n = {}));
        const c = e => {
            var {
                className: t = "",
                size: r = "xl",
                "aria-valuetext": n = "Loading...",
                isSVG: s = !1,
                diameter: c
            } = e, u = Object(i.a)(e, ["className", "size", "aria-valuetext", "isSVG", "diameter"]);
            const f = s ? "svg" : "span";
            return o.createElement(f, Object.assign({
                className: Object(l.a)(a.a.spinner, a.a.modifiers[r], t),
                role: "progressbar",
                "aria-valuetext": n
            }, s && {
                viewBox: "0 0 100 100"
            }, c && {
                style: {
                    "--pf-c-spinner--diameter": c
                }
            }, u), s ? o.createElement("circle", {
                className: a.a.spinnerPath,
                cx: "50",
                cy: "50",
                r: "45",
                fill: "none"
            }) : o.createElement(o.Fragment, null, o.createElement("span", {
                className: Object(l.a)(a.a.spinnerClipper)
            }), o.createElement("span", {
                className: Object(l.a)(a.a.spinnerLeadBall)
            }), o.createElement("span", {
                className: Object(l.a)(a.a.spinnerTailBall)
            })))
        };
        c.displayName = "Spinner"
    }
});
//# sourceMappingURL=terminal.js.map