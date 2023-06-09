"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [179], {
        88325: (ot, pe, L) => {
            L.d(pe, {
                _: () => O
            });
            var g = L(72096);
            let O = (() => {
                class De {
                    constructor(re) {
                        this.elementRef = re, this.clickOutside = new g.vpe
                    }
                    onClick(re) {
                        this.elementRef.nativeElement.contains(re) || this.clickOutside.emit()
                    }
                }
                return De.\u0275fac = function(re) {
                    return new(re || De)(g.Y36(g.SBq))
                }, De.\u0275dir = g.lG2({
                    type: De,
                    selectors: [
                        ["", "clickOutside", ""]
                    ],
                    hostBindings: function(re, ie) {
                        1 & re && g.NdJ("click", function(_e) {
                            return ie.onClick(_e.target)
                        }, !1, g.evT)
                    },
                    outputs: {
                        clickOutside: "clickOutside"
                    }
                }), De
            })()
        },
        75326: (ot, pe, L) => {
            L.d(pe, {
                m: () => re
            });
            var g = L(69808),
                O = L(69414),
                De = L(34182),
                Ce = L(72096);
            let re = (() => {
                class ie {}
                return ie.\u0275fac = function(_e) {
                    return new(_e || ie)
                }, ie.\u0275mod = Ce.oAB({
                    type: ie
                }), ie.\u0275inj = Ce.cJS({
                    imports: [
                        [g.ez, O.Bz, De.u5], O.Bz, De.u5
                    ]
                }), ie
            })()
        },
        91240: (ot, pe, L) => {
            var g = L(22313),
                O = L(72096);
            class Ce {}
            const ie = "*";

            function q(D, o = null) {
                return {
                    type: 2,
                    steps: D,
                    options: o
                }
            }

            function Y(D) {
                return {
                    type: 6,
                    styles: D,
                    offset: null
                }
            }

            function be(D) {
                Promise.resolve(null).then(D)
            }
            class nt {
                constructor(o = 0, l = 0) {
                    this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this._position = 0, this.parentPlayer = null, this.totalTime = o + l
                }
                _onFinish() {
                    this._finished || (this._finished = !0, this._onDoneFns.forEach(o => o()), this._onDoneFns = [])
                }
                onStart(o) {
                    this._onStartFns.push(o)
                }
                onDone(o) {
                    this._onDoneFns.push(o)
                }
                onDestroy(o) {
                    this._onDestroyFns.push(o)
                }
                hasStarted() {
                    return this._started
                }
                init() {}
                play() {
                    this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
                }
                triggerMicrotask() {
                    be(() => this._onFinish())
                }
                _onStart() {
                    this._onStartFns.forEach(o => o()), this._onStartFns = []
                }
                pause() {}
                restart() {}
                finish() {
                    this._onFinish()
                }
                destroy() {
                    this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(o => o()), this._onDestroyFns = [])
                }
                reset() {
                    this._started = !1
                }
                setPosition(o) {
                    this._position = this.totalTime ? o * this.totalTime : 1
                }
                getPosition() {
                    return this.totalTime ? this._position / this.totalTime : 1
                }
                triggerCallback(o) {
                    const l = "start" == o ? this._onStartFns : this._onDoneFns;
                    l.forEach(p => p()), l.length = 0
                }
            }
            class cn {
                constructor(o) {
                    this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = o;
                    let l = 0,
                        p = 0,
                        S = 0;
                    const F = this.players.length;
                    0 == F ? be(() => this._onFinish()) : this.players.forEach(k => {
                        k.onDone(() => {
                            ++l == F && this._onFinish()
                        }), k.onDestroy(() => {
                            ++p == F && this._onDestroy()
                        }), k.onStart(() => {
                            ++S == F && this._onStart()
                        })
                    }), this.totalTime = this.players.reduce((k, V) => Math.max(k, V.totalTime), 0)
                }
                _onFinish() {
                    this._finished || (this._finished = !0, this._onDoneFns.forEach(o => o()), this._onDoneFns = [])
                }
                init() {
                    this.players.forEach(o => o.init())
                }
                onStart(o) {
                    this._onStartFns.push(o)
                }
                _onStart() {
                    this.hasStarted() || (this._started = !0, this._onStartFns.forEach(o => o()), this._onStartFns = [])
                }
                onDone(o) {
                    this._onDoneFns.push(o)
                }
                onDestroy(o) {
                    this._onDestroyFns.push(o)
                }
                hasStarted() {
                    return this._started
                }
                play() {
                    this.parentPlayer || this.init(), this._onStart(), this.players.forEach(o => o.play())
                }
                pause() {
                    this.players.forEach(o => o.pause())
                }
                restart() {
                    this.players.forEach(o => o.restart())
                }
                finish() {
                    this._onFinish(), this.players.forEach(o => o.finish())
                }
                destroy() {
                    this._onDestroy()
                }
                _onDestroy() {
                    this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(o => o.destroy()), this._onDestroyFns.forEach(o => o()), this._onDestroyFns = [])
                }
                reset() {
                    this.players.forEach(o => o.reset()), this._destroyed = !1, this._finished = !1, this._started = !1
                }
                setPosition(o) {
                    const l = o * this.totalTime;
                    this.players.forEach(p => {
                        const S = p.totalTime ? Math.min(1, l / p.totalTime) : 1;
                        p.setPosition(S)
                    })
                }
                getPosition() {
                    const o = this.players.reduce((l, p) => null === l || p.totalTime > l.totalTime ? p : l, null);
                    return null != o ? o.getPosition() : 0
                }
                beforeDestroy() {
                    this.players.forEach(o => {
                        o.beforeDestroy && o.beforeDestroy()
                    })
                }
                triggerCallback(o) {
                    const l = "start" == o ? this._onStartFns : this._onDoneFns;
                    l.forEach(p => p()), l.length = 0
                }
            }
            const ke = !1;

            function Ot(D) {
                return new O.vHH(3e3, ke)
            }

            function yn() {
                return "undefined" != typeof window && void 0 !== window.document
            }

            function _t() {
                return "undefined" != typeof process && "[object process]" === {}.toString.call(process)
            }

            function ye(D) {
                switch (D.length) {
                    case 0:
                        return new nt;
                    case 1:
                        return D[0];
                    default:
                        return new cn(D)
                }
            }

            function Ue(D, o, l, p, S = {}, F = {}) {
                const k = [],
                    V = [];
                let G = -1,
                    ee = null;
                if (p.forEach(Ee => {
                        const Oe = Ee.offset,
                            Ge = Oe == G,
                            ut = Ge && ee || {};
                        Object.keys(Ee).forEach(je => {
                            let it = je,
                                It = Ee[je];
                            if ("offset" !== je) switch (it = o.normalizePropertyName(it, k), It) {
                                case "!":
                                    It = S[je];
                                    break;
                                case ie:
                                    It = F[je];
                                    break;
                                default:
                                    It = o.normalizeStyleValue(je, it, It, k)
                            }
                            ut[it] = It
                        }), Ge || V.push(ut), ee = ut, G = Oe
                    }), k.length) throw function rr(D) {
                    return new O.vHH(3502, ke)
                }();
                return V
            }

            function on(D, o, l, p) {
                switch (o) {
                    case "start":
                        D.onStart(() => p(l && En(l, "start", D)));
                        break;
                    case "done":
                        D.onDone(() => p(l && En(l, "done", D)));
                        break;
                    case "destroy":
                        D.onDestroy(() => p(l && En(l, "destroy", D)))
                }
            }

            function En(D, o, l) {
                const p = l.totalTime,
                    F = Ut(D.element, D.triggerName, D.fromState, D.toState, o || D.phaseName, null == p ? D.totalTime : p, !!l.disabled),
                    k = D._data;
                return null != k && (F._data = k), F
            }

            function Ut(D, o, l, p, S = "", F = 0, k) {
                return {
                    element: D,
                    triggerName: o,
                    fromState: l,
                    toState: p,
                    phaseName: S,
                    totalTime: F,
                    disabled: !!k
                }
            }

            function dn(D, o, l) {
                let p;
                return D instanceof Map ? (p = D.get(o), p || D.set(o, p = l)) : (p = D[o], p || (p = D[o] = l)), p
            }

            function bn(D) {
                const o = D.indexOf(":");
                return [D.substring(1, o), D.substr(o + 1)]
            }
            let wn = (D, o) => !1,
                xt = (D, o, l) => [],
                Ei = null;

            function tt(D) {
                const o = D.parentNode || D.host;
                return o === Ei ? null : o
            }(_t() || "undefined" != typeof Element) && (yn() ? (Ei = (() => document.documentElement)(), wn = (D, o) => {
                for (; o;) {
                    if (o === D) return !0;
                    o = tt(o)
                }
                return !1
            }) : wn = (D, o) => D.contains(o), xt = (D, o, l) => {
                if (l) return Array.from(D.querySelectorAll(o));
                const p = D.querySelector(o);
                return p ? [p] : []
            });
            let fn = null,
                Zn = !1;

            function ir(D) {
                fn || (fn = function ht() {
                    return "undefined" != typeof document ? document.body : null
                }() || {}, Zn = !!fn.style && "WebkitAppearance" in fn.style);
                let o = !0;
                return fn.style && ! function at(D) {
                    return "ebkit" == D.substring(1, 6)
                }(D) && (o = D in fn.style, !o && Zn && (o = "Webkit" + D.charAt(0).toUpperCase() + D.substr(1) in fn.style)), o
            }
            const xn = wn,
                sr = xt;
            let Kr = (() => {
                    class D {
                        validateStyleProperty(l) {
                            return ir(l)
                        }
                        matchesElement(l, p) {
                            return !1
                        }
                        containsElement(l, p) {
                            return xn(l, p)
                        }
                        getParentElement(l) {
                            return tt(l)
                        }
                        query(l, p, S) {
                            return sr(l, p, S)
                        }
                        computeStyle(l, p, S) {
                            return S || ""
                        }
                        animate(l, p, S, F, k, V = [], G) {
                            return new nt(S, F)
                        }
                    }
                    return D.\u0275fac = function(l) {
                        return new(l || D)
                    }, D.\u0275prov = O.Yz7({
                        token: D,
                        factory: D.\u0275fac
                    }), D
                })(),
                hn = (() => {
                    class D {}
                    return D.NOOP = new Kr, D
                })();
            const x = "ng-enter",
                z = "ng-leave",
                te = "ng-trigger",
                ue = ".ng-trigger",
                Xe = "ng-animating",
                gt = ".ng-animating";

            function Ft(D) {
                if ("number" == typeof D) return D;
                const o = D.match(/^(-?[\.\d]+)(m?s)/);
                return !o || o.length < 2 ? 0 : Rn(parseFloat(o[1]), o[2])
            }

            function Rn(D, o) {
                return "s" === o ? 1e3 * D : D
            }

            function xr(D, o, l) {
                return D.hasOwnProperty("duration") ? D : function Wt(D, o, l) {
                    let S, F = 0,
                        k = "";
                    if ("string" == typeof D) {
                        const V = D.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                        if (null === V) return o.push(Ot()), {
                            duration: 0,
                            delay: 0,
                            easing: ""
                        };
                        S = Rn(parseFloat(V[1]), V[2]);
                        const G = V[3];
                        null != G && (F = Rn(parseFloat(G), V[4]));
                        const ee = V[5];
                        ee && (k = ee)
                    } else S = D;
                    if (!l) {
                        let V = !1,
                            G = o.length;
                        S < 0 && (o.push(function en() {
                            return new O.vHH(3100, ke)
                        }()), V = !0), F < 0 && (o.push(function wt() {
                            return new O.vHH(3101, ke)
                        }()), V = !0), V && o.splice(G, 0, Ot())
                    }
                    return {
                        duration: S,
                        delay: F,
                        easing: k
                    }
                }(D, o, l)
            }

            function tn(D, o = {}) {
                return Object.keys(D).forEach(l => {
                    o[l] = D[l]
                }), o
            }

            function St(D, o, l = {}) {
                if (o)
                    for (let p in D) l[p] = D[p];
                else tn(D, l);
                return l
            }

            function Wn(D, o, l) {
                return l ? o + ":" + l + ";" : ""
            }

            function Qr(D) {
                let o = "";
                for (let l = 0; l < D.style.length; l++) {
                    const p = D.style.item(l);
                    o += Wn(0, p, D.style.getPropertyValue(p))
                }
                for (const l in D.style) D.style.hasOwnProperty(l) && !l.startsWith("_") && (o += Wn(0, Yn(l), D.style[l]));
                D.setAttribute("style", o)
            }

            function nn(D, o, l) {
                D.style && (Object.keys(o).forEach(p => {
                    const S = an(p);
                    l && !l.hasOwnProperty(p) && (l[p] = D.style[S]), D.style[S] = o[p]
                }), _t() && Qr(D))
            }

            function bt(D, o) {
                D.style && (Object.keys(o).forEach(l => {
                    const p = an(l);
                    D.style[p] = ""
                }), _t() && Qr(D))
            }

            function Bt(D) {
                return Array.isArray(D) ? 1 == D.length ? D[0] : q(D) : D
            }
            const ar = new RegExp("{{\\s*(.+?)\\s*}}", "g");

            function sn(D) {
                let o = [];
                if ("string" == typeof D) {
                    let l;
                    for (; l = ar.exec(D);) o.push(l[1]);
                    ar.lastIndex = 0
                }
                return o
            }

            function he(D, o, l) {
                const p = D.toString(),
                    S = p.replace(ar, (F, k) => {
                        let V = o[k];
                        return o.hasOwnProperty(k) || (l.push(function We(D) {
                            return new O.vHH(3003, ke)
                        }()), V = ""), V.toString()
                    });
                return S == p ? D : S
            }

            function Je(D) {
                const o = [];
                let l = D.next();
                for (; !l.done;) o.push(l.value), l = D.next();
                return o
            }
            const Mt = /-+([a-z0-9])/g;

            function an(D) {
                return D.replace(Mt, (...o) => o[1].toUpperCase())
            }

            function Yn(D) {
                return D.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            }

            function Ke(D, o, l) {
                switch (o.type) {
                    case 7:
                        return D.visitTrigger(o, l);
                    case 0:
                        return D.visitState(o, l);
                    case 1:
                        return D.visitTransition(o, l);
                    case 2:
                        return D.visitSequence(o, l);
                    case 3:
                        return D.visitGroup(o, l);
                    case 4:
                        return D.visitAnimate(o, l);
                    case 5:
                        return D.visitKeyframes(o, l);
                    case 6:
                        return D.visitStyle(o, l);
                    case 8:
                        return D.visitReference(o, l);
                    case 9:
                        return D.visitAnimateChild(o, l);
                    case 10:
                        return D.visitAnimateRef(o, l);
                    case 11:
                        return D.visitQuery(o, l);
                    case 12:
                        return D.visitStagger(o, l);
                    default:
                        throw function we(D) {
                            return new O.vHH(3004, ke)
                        }()
                }
            }

            function Qe(D, o) {
                return window.getComputedStyle(D)[o]
            }

            function Jn(D, o) {
                const l = [];
                return "string" == typeof D ? D.split(/\s*,\s*/).forEach(p => function vn(D, o, l) {
                    if (":" == D[0]) {
                        const G = function mt(D, o) {
                            switch (D) {
                                case ":enter":
                                    return "void => *";
                                case ":leave":
                                    return "* => void";
                                case ":increment":
                                    return (l, p) => parseFloat(p) > parseFloat(l);
                                case ":decrement":
                                    return (l, p) => parseFloat(p) < parseFloat(l);
                                default:
                                    return o.push(function $i(D) {
                                        return new O.vHH(3016, ke)
                                    }()), "* => *"
                            }
                        }(D, l);
                        if ("function" == typeof G) return void o.push(G);
                        D = G
                    }
                    const p = D.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                    if (null == p || p.length < 4) return l.push(function et(D) {
                        return new O.vHH(3015, ke)
                    }()), o;
                    const S = p[1],
                        F = p[2],
                        k = p[3];
                    o.push(_n(S, k));
                    "<" == F[0] && !("*" == S && "*" == k) && o.push(_n(k, S))
                }(p, l, o)) : l.push(D), l
            }
            const Rr = new Set(["true", "1"]),
                ur = new Set(["false", "0"]);

            function _n(D, o) {
                const l = Rr.has(D) || ur.has(D),
                    p = Rr.has(o) || ur.has(o);
                return (S, F) => {
                    let k = "*" == D || D == S,
                        V = "*" == o || o == F;
                    return !k && l && "boolean" == typeof S && (k = S ? Rr.has(D) : ur.has(D)), !V && p && "boolean" == typeof F && (V = F ? Rr.has(o) : ur.has(o)), k && V
                }
            }
            const Lr = new RegExp("s*:selfs*,?", "g");

            function kr(D, o, l, p) {
                return new Pn(D).build(o, l, p)
            }
            class Pn {
                constructor(o) {
                    this._driver = o
                }
                build(o, l, p) {
                    const S = new cs(l);
                    this._resetContextStyleTimingState(S);
                    const F = Ke(this, Bt(o), S);
                    return S.unsupportedCSSPropertiesFound.size && S.unsupportedCSSPropertiesFound.keys(), F
                }
                _resetContextStyleTimingState(o) {
                    o.currentQuerySelector = "", o.collectedStyles = {}, o.collectedStyles[""] = {}, o.currentTime = 0
                }
                visitTrigger(o, l) {
                    let p = l.queryCount = 0,
                        S = l.depCount = 0;
                    const F = [],
                        k = [];
                    return "@" == o.name.charAt(0) && l.errors.push(function zr() {
                        return new O.vHH(3006, ke)
                    }()), o.definitions.forEach(V => {
                        if (this._resetContextStyleTimingState(l), 0 == V.type) {
                            const G = V,
                                ee = G.name;
                            ee.toString().split(/\s*,\s*/).forEach(Ee => {
                                G.name = Ee, F.push(this.visitState(G, l))
                            }), G.name = ee
                        } else if (1 == V.type) {
                            const G = this.visitTransition(V, l);
                            p += G.queryCount, S += G.depCount, k.push(G)
                        } else l.errors.push(function ii() {
                            return new O.vHH(3007, ke)
                        }())
                    }), {
                        type: 7,
                        name: o.name,
                        states: F,
                        transitions: k,
                        queryCount: p,
                        depCount: S,
                        options: null
                    }
                }
                visitState(o, l) {
                    const p = this.visitStyle(o.styles, l),
                        S = o.options && o.options.params || null;
                    if (p.containsDynamicStyles) {
                        const F = new Set,
                            k = S || {};
                        p.styles.forEach(V => {
                            if (ui(V)) {
                                const G = V;
                                Object.keys(G).forEach(ee => {
                                    sn(G[ee]).forEach(Ee => {
                                        k.hasOwnProperty(Ee) || F.add(Ee)
                                    })
                                })
                            }
                        }), F.size && (Je(F.values()), l.errors.push(function Zt(D, o) {
                            return new O.vHH(3008, ke)
                        }()))
                    }
                    return {
                        type: 0,
                        name: o.name,
                        style: p,
                        options: S ? {
                            params: S
                        } : null
                    }
                }
                visitTransition(o, l) {
                    l.queryCount = 0, l.depCount = 0;
                    const p = Ke(this, Bt(o.animation), l);
                    return {
                        type: 1,
                        matchers: Jn(o.expr, l.errors),
                        animation: p,
                        queryCount: l.queryCount,
                        depCount: l.depCount,
                        options: cr(o.options)
                    }
                }
                visitSequence(o, l) {
                    return {
                        type: 2,
                        steps: o.steps.map(p => Ke(this, p, l)),
                        options: cr(o.options)
                    }
                }
                visitGroup(o, l) {
                    const p = l.currentTime;
                    let S = 0;
                    const F = o.steps.map(k => {
                        l.currentTime = p;
                        const V = Ke(this, k, l);
                        return S = Math.max(S, l.currentTime), V
                    });
                    return l.currentTime = S, {
                        type: 3,
                        steps: F,
                        options: cr(o.options)
                    }
                }
                visitAnimate(o, l) {
                    const p = function Ds(D, o) {
                        if (D.hasOwnProperty("duration")) return D;
                        if ("number" == typeof D) return ci(xr(D, o).duration, 0, "");
                        const l = D;
                        if (l.split(/\s+/).some(F => "{" == F.charAt(0) && "{" == F.charAt(1))) {
                            const F = ci(0, 0, "");
                            return F.dynamic = !0, F.strValue = l, F
                        }
                        const S = xr(l, o);
                        return ci(S.duration, S.delay, S.easing)
                    }(o.timings, l.errors);
                    l.currentAnimateTimings = p;
                    let S, F = o.styles ? o.styles : Y({});
                    if (5 == F.type) S = this.visitKeyframes(F, l);
                    else {
                        let k = o.styles,
                            V = !1;
                        if (!k) {
                            V = !0;
                            const ee = {};
                            p.easing && (ee.easing = p.easing), k = Y(ee)
                        }
                        l.currentTime += p.duration + p.delay;
                        const G = this.visitStyle(k, l);
                        G.isEmptyStep = V, S = G
                    }
                    return l.currentAnimateTimings = null, {
                        type: 4,
                        timings: p,
                        style: S,
                        options: null
                    }
                }
                visitStyle(o, l) {
                    const p = this._makeStyleAst(o, l);
                    return this._validateStyleAst(p, l), p
                }
                _makeStyleAst(o, l) {
                    const p = [];
                    Array.isArray(o.styles) ? o.styles.forEach(k => {
                        "string" == typeof k ? k == ie ? p.push(k) : l.errors.push(function Hi(D) {
                            return new O.vHH(3002, ke)
                        }()) : p.push(k)
                    }) : p.push(o.styles);
                    let S = !1,
                        F = null;
                    return p.forEach(k => {
                        if (ui(k)) {
                            const V = k,
                                G = V.easing;
                            if (G && (F = G, delete V.easing), !S)
                                for (let ee in V)
                                    if (V[ee].toString().indexOf("{{") >= 0) {
                                        S = !0;
                                        break
                                    }
                        }
                    }), {
                        type: 6,
                        styles: p,
                        easing: F,
                        offset: o.offset,
                        containsDynamicStyles: S,
                        options: null
                    }
                }
                _validateStyleAst(o, l) {
                    const p = l.currentAnimateTimings;
                    let S = l.currentTime,
                        F = l.currentTime;
                    p && F > 0 && (F -= p.duration + p.delay), o.styles.forEach(k => {
                        "string" != typeof k && Object.keys(k).forEach(V => {
                            if (!this._driver.validateStyleProperty(V)) return delete k[V], void l.unsupportedCSSPropertiesFound.add(V);
                            const G = l.collectedStyles[l.currentQuerySelector],
                                ee = G[V];
                            let Ee = !0;
                            ee && (F != S && F >= ee.startTime && S <= ee.endTime && (l.errors.push(function Wr(D, o, l, p, S) {
                                return new O.vHH(3010, ke)
                            }()), Ee = !1), F = ee.startTime), Ee && (G[V] = {
                                startTime: F,
                                endTime: S
                            }), l.options && function rn(D, o, l) {
                                const p = o.params || {},
                                    S = sn(D);
                                S.length && S.forEach(F => {
                                    p.hasOwnProperty(F) || l.push(function Pt(D) {
                                        return new O.vHH(3001, ke)
                                    }())
                                })
                            }(k[V], l.options, l.errors)
                        })
                    })
                }
                visitKeyframes(o, l) {
                    const p = {
                        type: 5,
                        styles: [],
                        options: null
                    };
                    if (!l.currentAnimateTimings) return l.errors.push(function Ui() {
                        return new O.vHH(3011, ke)
                    }()), p;
                    let F = 0;
                    const k = [];
                    let V = !1,
                        G = !1,
                        ee = 0;
                    const Ee = o.steps.map(Kt => {
                        const mn = this._makeStyleAst(Kt, l);
                        let An = null != mn.offset ? mn.offset : function bi(D) {
                                if ("string" == typeof D) return null;
                                let o = null;
                                if (Array.isArray(D)) D.forEach(l => {
                                    if (ui(l) && l.hasOwnProperty("offset")) {
                                        const p = l;
                                        o = parseFloat(p.offset), delete p.offset
                                    }
                                });
                                else if (ui(D) && D.hasOwnProperty("offset")) {
                                    const l = D;
                                    o = parseFloat(l.offset), delete l.offset
                                }
                                return o
                            }(mn.styles),
                            ln = 0;
                        return null != An && (F++, ln = mn.offset = An), G = G || ln < 0 || ln > 1, V = V || ln < ee, ee = ln, k.push(ln), mn
                    });
                    G && l.errors.push(function Di() {
                        return new O.vHH(3012, ke)
                    }()), V && l.errors.push(function tr() {
                        return new O.vHH(3200, ke)
                    }());
                    const Oe = o.steps.length;
                    let Ge = 0;
                    F > 0 && F < Oe ? l.errors.push(function nr() {
                        return new O.vHH(3202, ke)
                    }()) : 0 == F && (Ge = 1 / (Oe - 1));
                    const ut = Oe - 1,
                        je = l.currentTime,
                        it = l.currentAnimateTimings,
                        It = it.duration;
                    return Ee.forEach((Kt, mn) => {
                        const An = Ge > 0 ? mn == ut ? 1 : Ge * mn : k[mn],
                            ln = An * It;
                        l.currentTime = je + it.delay + ln, it.duration = ln, this._validateStyleAst(Kt, l), Kt.offset = An, p.styles.push(Kt)
                    }), p
                }
                visitReference(o, l) {
                    return {
                        type: 8,
                        animation: Ke(this, Bt(o.animation), l),
                        options: cr(o.options)
                    }
                }
                visitAnimateChild(o, l) {
                    return l.depCount++, {
                        type: 9,
                        options: cr(o.options)
                    }
                }
                visitAnimateRef(o, l) {
                    return {
                        type: 10,
                        animation: this.visitReference(o.animation, l),
                        options: cr(o.options)
                    }
                }
                visitQuery(o, l) {
                    const p = l.currentQuerySelector,
                        S = o.options || {};
                    l.queryCount++, l.currentQuery = o;
                    const [F, k] = function li(D) {
                        const o = !!D.split(/\s*,\s*/).find(l => ":self" == l);
                        return o && (D = D.replace(Lr, "")), D = D.replace(/@\*/g, ue).replace(/@\w+/g, l => ue + "-" + l.substr(1)).replace(/:animating/g, gt), [D, o]
                    }(o.selector);
                    l.currentQuerySelector = p.length ? p + " " + F : F, dn(l.collectedStyles, l.currentQuerySelector, {});
                    const V = Ke(this, Bt(o.animation), l);
                    return l.currentQuery = null, l.currentQuerySelector = p, {
                        type: 11,
                        selector: F,
                        limit: S.limit || 0,
                        optional: !!S.optional,
                        includeSelf: k,
                        animation: V,
                        originalSelector: o.selector,
                        options: cr(o.options)
                    }
                }
                visitStagger(o, l) {
                    l.currentQuery || l.errors.push(function vr() {
                        return new O.vHH(3013, ke)
                    }());
                    const p = "full" === o.timings ? {
                        duration: 0,
                        delay: 0,
                        easing: "full"
                    } : xr(o.timings, l.errors, !0);
                    return {
                        type: 12,
                        animation: Ke(this, Bt(o.animation), l),
                        timings: p,
                        options: null
                    }
                }
            }
            class cs {
                constructor(o) {
                    this.errors = o, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null, this.unsupportedCSSPropertiesFound = new Set
                }
            }

            function ui(D) {
                return !Array.isArray(D) && "object" == typeof D
            }

            function cr(D) {
                return D ? (D = tn(D)).params && (D.params = function us(D) {
                    return D ? tn(D) : null
                }(D.params)) : D = {}, D
            }

            function ci(D, o, l) {
                return {
                    duration: D,
                    delay: o,
                    easing: l
                }
            }

            function Vr(D, o, l, p, S, F, k = null, V = !1) {
                return {
                    type: 1,
                    element: D,
                    keyframes: o,
                    preStyleProps: l,
                    postStyleProps: p,
                    duration: S,
                    delay: F,
                    totalTime: S + F,
                    easing: k,
                    subTimeline: V
                }
            }
            class kn {
                constructor() {
                    this._map = new Map
                }
                get(o) {
                    return this._map.get(o) || []
                }
                append(o, l) {
                    let p = this._map.get(o);
                    p || this._map.set(o, p = []), p.push(...l)
                }
                has(o) {
                    return this._map.has(o)
                }
                clear() {
                    this._map.clear()
                }
            }
            const wi = new RegExp(":enter", "g"),
                Br = new RegExp(":leave", "g");

            function di(D, o, l, p, S, F = {}, k = {}, V, G, ee = []) {
                return (new Cs).buildKeyframes(D, o, l, p, S, F, k, V, G, ee)
            }
            class Cs {
                buildKeyframes(o, l, p, S, F, k, V, G, ee, Ee = []) {
                    ee = ee || new kn;
                    const Oe = new br(o, l, ee, S, F, Ee, []);
                    Oe.options = G, Oe.currentTimeline.setStyles([k], null, Oe.errors, G), Ke(this, p, Oe);
                    const Ge = Oe.timelines.filter(ut => ut.containsAnimation());
                    if (Object.keys(V).length) {
                        let ut;
                        for (let je = Ge.length - 1; je >= 0; je--) {
                            const it = Ge[je];
                            if (it.element === l) {
                                ut = it;
                                break
                            }
                        }
                        ut && !ut.allowOnlyTimelineStyles() && ut.setStyles([V], null, Oe.errors, G)
                    }
                    return Ge.length ? Ge.map(ut => ut.buildKeyframes()) : [Vr(l, [], [], [], 0, 0, "", !1)]
                }
                visitTrigger(o, l) {}
                visitState(o, l) {}
                visitTransition(o, l) {}
                visitAnimateChild(o, l) {
                    const p = l.subInstructions.get(l.element);
                    if (p) {
                        const S = l.createSubContext(o.options),
                            F = l.currentTimeline.currentTime,
                            k = this._visitSubInstructions(p, S, S.options);
                        F != k && l.transformIntoNewTimeline(k)
                    }
                    l.previousNode = o
                }
                visitAnimateRef(o, l) {
                    const p = l.createSubContext(o.options);
                    p.transformIntoNewTimeline(), this.visitReference(o.animation, p), l.transformIntoNewTimeline(p.currentTimeline.currentTime), l.previousNode = o
                }
                _visitSubInstructions(o, l, p) {
                    let F = l.currentTimeline.currentTime;
                    const k = null != p.duration ? Ft(p.duration) : null,
                        V = null != p.delay ? Ft(p.delay) : null;
                    return 0 !== k && o.forEach(G => {
                        const ee = l.appendInstructionToTimeline(G, k, V);
                        F = Math.max(F, ee.duration + ee.delay)
                    }), F
                }
                visitReference(o, l) {
                    l.updateOptions(o.options, !0), Ke(this, o.animation, l), l.previousNode = o
                }
                visitSequence(o, l) {
                    const p = l.subContextCount;
                    let S = l;
                    const F = o.options;
                    if (F && (F.params || F.delay) && (S = l.createSubContext(F), S.transformIntoNewTimeline(), null != F.delay)) {
                        6 == S.previousNode.type && (S.currentTimeline.snapshotCurrentStyles(), S.previousNode = Xn);
                        const k = Ft(F.delay);
                        S.delayNextStep(k)
                    }
                    o.steps.length && (o.steps.forEach(k => Ke(this, k, S)), S.currentTimeline.applyStylesToKeyframe(), S.subContextCount > p && S.transformIntoNewTimeline()), l.previousNode = o
                }
                visitGroup(o, l) {
                    const p = [];
                    let S = l.currentTimeline.currentTime;
                    const F = o.options && o.options.delay ? Ft(o.options.delay) : 0;
                    o.steps.forEach(k => {
                        const V = l.createSubContext(o.options);
                        F && V.delayNextStep(F), Ke(this, k, V), S = Math.max(S, V.currentTimeline.currentTime), p.push(V.currentTimeline)
                    }), p.forEach(k => l.currentTimeline.mergeTimelineCollectedStyles(k)), l.transformIntoNewTimeline(S), l.previousNode = o
                }
                _visitTiming(o, l) {
                    if (o.dynamic) {
                        const p = o.strValue;
                        return xr(l.params ? he(p, l.params, l.errors) : p, l.errors)
                    }
                    return {
                        duration: o.duration,
                        delay: o.delay,
                        easing: o.easing
                    }
                }
                visitAnimate(o, l) {
                    const p = l.currentAnimateTimings = this._visitTiming(o.timings, l),
                        S = l.currentTimeline;
                    p.delay && (l.incrementTime(p.delay), S.snapshotCurrentStyles());
                    const F = o.style;
                    5 == F.type ? this.visitKeyframes(F, l) : (l.incrementTime(p.duration), this.visitStyle(F, l), S.applyStylesToKeyframe()), l.currentAnimateTimings = null, l.previousNode = o
                }
                visitStyle(o, l) {
                    const p = l.currentTimeline,
                        S = l.currentAnimateTimings;
                    !S && p.getCurrentStyleProperties().length && p.forwardFrame();
                    const F = S && S.easing || o.easing;
                    o.isEmptyStep ? p.applyEmptyStep(F) : p.setStyles(o.styles, F, l.errors, l.options), l.previousNode = o
                }
                visitKeyframes(o, l) {
                    const p = l.currentAnimateTimings,
                        S = l.currentTimeline.duration,
                        F = p.duration,
                        V = l.createSubContext().currentTimeline;
                    V.easing = p.easing, o.styles.forEach(G => {
                        V.forwardTime((G.offset || 0) * F), V.setStyles(G.styles, G.easing, l.errors, l.options), V.applyStylesToKeyframe()
                    }), l.currentTimeline.mergeTimelineCollectedStyles(V), l.transformIntoNewTimeline(S + F), l.previousNode = o
                }
                visitQuery(o, l) {
                    const p = l.currentTimeline.currentTime,
                        S = o.options || {},
                        F = S.delay ? Ft(S.delay) : 0;
                    F && (6 === l.previousNode.type || 0 == p && l.currentTimeline.getCurrentStyleProperties().length) && (l.currentTimeline.snapshotCurrentStyles(), l.previousNode = Xn);
                    let k = p;
                    const V = l.invokeQuery(o.selector, o.originalSelector, o.limit, o.includeSelf, !!S.optional, l.errors);
                    l.currentQueryTotal = V.length;
                    let G = null;
                    V.forEach((ee, Ee) => {
                        l.currentQueryIndex = Ee;
                        const Oe = l.createSubContext(o.options, ee);
                        F && Oe.delayNextStep(F), ee === l.element && (G = Oe.currentTimeline), Ke(this, o.animation, Oe), Oe.currentTimeline.applyStylesToKeyframe(), k = Math.max(k, Oe.currentTimeline.currentTime)
                    }), l.currentQueryIndex = 0, l.currentQueryTotal = 0, l.transformIntoNewTimeline(k), G && (l.currentTimeline.mergeTimelineCollectedStyles(G), l.currentTimeline.snapshotCurrentStyles()), l.previousNode = o
                }
                visitStagger(o, l) {
                    const p = l.parentContext,
                        S = l.currentTimeline,
                        F = o.timings,
                        k = Math.abs(F.duration),
                        V = k * (l.currentQueryTotal - 1);
                    let G = k * l.currentQueryIndex;
                    switch (F.duration < 0 ? "reverse" : F.easing) {
                        case "reverse":
                            G = V - G;
                            break;
                        case "full":
                            G = p.currentStaggerTime
                    }
                    const Ee = l.currentTimeline;
                    G && Ee.delayNextStep(G);
                    const Oe = Ee.currentTime;
                    Ke(this, o.animation, l), l.previousNode = o, p.currentStaggerTime = S.currentTime - Oe + (S.startTime - p.currentTimeline.startTime)
                }
            }
            const Xn = {};
            class br {
                constructor(o, l, p, S, F, k, V, G) {
                    this._driver = o, this.element = l, this.subInstructions = p, this._enterClassName = S, this._leaveClassName = F, this.errors = k, this.timelines = V, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = Xn, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = G || new Kn(this._driver, l, 0), V.push(this.currentTimeline)
                }
                get params() {
                    return this.options.params
                }
                updateOptions(o, l) {
                    if (!o) return;
                    const p = o;
                    let S = this.options;
                    null != p.duration && (S.duration = Ft(p.duration)), null != p.delay && (S.delay = Ft(p.delay));
                    const F = p.params;
                    if (F) {
                        let k = S.params;
                        k || (k = this.options.params = {}), Object.keys(F).forEach(V => {
                            (!l || !k.hasOwnProperty(V)) && (k[V] = he(F[V], k, this.errors))
                        })
                    }
                }
                _copyOptions() {
                    const o = {};
                    if (this.options) {
                        const l = this.options.params;
                        if (l) {
                            const p = o.params = {};
                            Object.keys(l).forEach(S => {
                                p[S] = l[S]
                            })
                        }
                    }
                    return o
                }
                createSubContext(o = null, l, p) {
                    const S = l || this.element,
                        F = new br(this._driver, S, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(S, p || 0));
                    return F.previousNode = this.previousNode, F.currentAnimateTimings = this.currentAnimateTimings, F.options = this._copyOptions(), F.updateOptions(o), F.currentQueryIndex = this.currentQueryIndex, F.currentQueryTotal = this.currentQueryTotal, F.parentContext = this, this.subContextCount++, F
                }
                transformIntoNewTimeline(o) {
                    return this.previousNode = Xn, this.currentTimeline = this.currentTimeline.fork(this.element, o), this.timelines.push(this.currentTimeline), this.currentTimeline
                }
                appendInstructionToTimeline(o, l, p) {
                    const S = {
                            duration: null != l ? l : o.duration,
                            delay: this.currentTimeline.currentTime + (null != p ? p : 0) + o.delay,
                            easing: ""
                        },
                        F = new fs(this._driver, o.element, o.keyframes, o.preStyleProps, o.postStyleProps, S, o.stretchStartingKeyframe);
                    return this.timelines.push(F), S
                }
                incrementTime(o) {
                    this.currentTimeline.forwardTime(this.currentTimeline.duration + o)
                }
                delayNextStep(o) {
                    o > 0 && this.currentTimeline.delayNextStep(o)
                }
                invokeQuery(o, l, p, S, F, k) {
                    let V = [];
                    if (S && V.push(this.element), o.length > 0) {
                        o = (o = o.replace(wi, "." + this._enterClassName)).replace(Br, "." + this._leaveClassName);
                        let ee = this._driver.query(this.element, o, 1 != p);
                        0 !== p && (ee = p < 0 ? ee.slice(ee.length + p, ee.length) : ee.slice(0, p)), V.push(...ee)
                    }
                    return !F && 0 == V.length && k.push(function Et(D) {
                        return new O.vHH(3014, ke)
                    }()), V
                }
            }
            class Kn {
                constructor(o, l, p, S) {
                    this._driver = o, this.element = l, this.startTime = p, this._elementTimelineStylesLookup = S, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(l), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(l, this._localTimelineStyles)), this._loadKeyframe()
                }
                containsAnimation() {
                    switch (this._keyframes.size) {
                        case 0:
                            return !1;
                        case 1:
                            return this.getCurrentStyleProperties().length > 0;
                        default:
                            return !0
                    }
                }
                getCurrentStyleProperties() {
                    return Object.keys(this._currentKeyframe)
                }
                get currentTime() {
                    return this.startTime + this.duration
                }
                delayNextStep(o) {
                    const l = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
                    this.duration || l ? (this.forwardTime(this.currentTime + o), l && this.snapshotCurrentStyles()) : this.startTime += o
                }
                fork(o, l) {
                    return this.applyStylesToKeyframe(), new Kn(this._driver, o, l || this.currentTime, this._elementTimelineStylesLookup)
                }
                _loadKeyframe() {
                    this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe))
                }
                forwardFrame() {
                    this.duration += 1, this._loadKeyframe()
                }
                forwardTime(o) {
                    this.applyStylesToKeyframe(), this.duration = o, this._loadKeyframe()
                }
                _updateStyle(o, l) {
                    this._localTimelineStyles[o] = l, this._globalTimelineStyles[o] = l, this._styleSummary[o] = {
                        time: this.currentTime,
                        value: l
                    }
                }
                allowOnlyTimelineStyles() {
                    return this._currentEmptyStepKeyframe !== this._currentKeyframe
                }
                applyEmptyStep(o) {
                    o && (this._previousKeyframe.easing = o), Object.keys(this._globalTimelineStyles).forEach(l => {
                        this._backFill[l] = this._globalTimelineStyles[l] || ie, this._currentKeyframe[l] = ie
                    }), this._currentEmptyStepKeyframe = this._currentKeyframe
                }
                setStyles(o, l, p, S) {
                    l && (this._previousKeyframe.easing = l);
                    const F = S && S.params || {},
                        k = function fi(D, o) {
                            const l = {};
                            let p;
                            return D.forEach(S => {
                                "*" === S ? (p = p || Object.keys(o), p.forEach(F => {
                                    l[F] = ie
                                })) : St(S, !1, l)
                            }), l
                        }(o, this._globalTimelineStyles);
                    Object.keys(k).forEach(V => {
                        const G = he(k[V], F, p);
                        this._pendingStyles[V] = G, this._localTimelineStyles.hasOwnProperty(V) || (this._backFill[V] = this._globalTimelineStyles.hasOwnProperty(V) ? this._globalTimelineStyles[V] : ie), this._updateStyle(V, G)
                    })
                }
                applyStylesToKeyframe() {
                    const o = this._pendingStyles,
                        l = Object.keys(o);
                    0 != l.length && (this._pendingStyles = {}, l.forEach(p => {
                        this._currentKeyframe[p] = o[p]
                    }), Object.keys(this._localTimelineStyles).forEach(p => {
                        this._currentKeyframe.hasOwnProperty(p) || (this._currentKeyframe[p] = this._localTimelineStyles[p])
                    }))
                }
                snapshotCurrentStyles() {
                    Object.keys(this._localTimelineStyles).forEach(o => {
                        const l = this._localTimelineStyles[o];
                        this._pendingStyles[o] = l, this._updateStyle(o, l)
                    })
                }
                getFinalKeyframe() {
                    return this._keyframes.get(this.duration)
                }
                get properties() {
                    const o = [];
                    for (let l in this._currentKeyframe) o.push(l);
                    return o
                }
                mergeTimelineCollectedStyles(o) {
                    Object.keys(o._styleSummary).forEach(l => {
                        const p = this._styleSummary[l],
                            S = o._styleSummary[l];
                        (!p || S.time > p.time) && this._updateStyle(l, S.value)
                    })
                }
                buildKeyframes() {
                    this.applyStylesToKeyframe();
                    const o = new Set,
                        l = new Set,
                        p = 1 === this._keyframes.size && 0 === this.duration;
                    let S = [];
                    this._keyframes.forEach((V, G) => {
                        const ee = St(V, !0);
                        Object.keys(ee).forEach(Ee => {
                            const Oe = ee[Ee];
                            "!" == Oe ? o.add(Ee) : Oe == ie && l.add(Ee)
                        }), p || (ee.offset = G / this.duration), S.push(ee)
                    });
                    const F = o.size ? Je(o.values()) : [],
                        k = l.size ? Je(l.values()) : [];
                    if (p) {
                        const V = S[0],
                            G = tn(V);
                        V.offset = 0, G.offset = 1, S = [V, G]
                    }
                    return Vr(this.element, S, F, k, this.duration, this.startTime, this.easing, !1)
                }
            }
            class fs extends Kn {
                constructor(o, l, p, S, F, k, V = !1) {
                    super(o, l, k.delay), this.keyframes = p, this.preStyleProps = S, this.postStyleProps = F, this._stretchStartingKeyframe = V, this.timings = {
                        duration: k.duration,
                        delay: k.delay,
                        easing: k.easing
                    }
                }
                containsAnimation() {
                    return this.keyframes.length > 1
                }
                buildKeyframes() {
                    let o = this.keyframes,
                        {
                            delay: l,
                            duration: p,
                            easing: S
                        } = this.timings;
                    if (this._stretchStartingKeyframe && l) {
                        const F = [],
                            k = p + l,
                            V = l / k,
                            G = St(o[0], !1);
                        G.offset = 0, F.push(G);
                        const ee = St(o[0], !1);
                        ee.offset = Si(V), F.push(ee);
                        const Ee = o.length - 1;
                        for (let Oe = 1; Oe <= Ee; Oe++) {
                            let Ge = St(o[Oe], !1);
                            Ge.offset = Si((l + Ge.offset * p) / k), F.push(Ge)
                        }
                        p = k, l = 0, S = "", o = F
                    }
                    return Vr(this.element, o, this.preStyleProps, this.postStyleProps, p, l, S, !0)
                }
            }

            function Si(D, o = 3) {
                const l = Math.pow(10, o - 1);
                return Math.round(D * l) / l
            }
            class Hr {}
            class zi extends Hr {
                normalizePropertyName(o, l) {
                    return an(o)
                }
                normalizeStyleValue(o, l, p, S) {
                    let F = "";
                    const k = p.toString().trim();
                    if (hs[l] && 0 !== p && "0" !== p)
                        if ("number" == typeof p) F = "px";
                        else {
                            const V = p.match(/^[+-]?[\d\.]+([a-z]*)$/);
                            V && 0 == V[1].length && S.push(function Ae(D, o) {
                                return new O.vHH(3005, ke)
                            }())
                        } return k + F
                }
            }
            const hs = (() => function Mi(D) {
                const o = {};
                return D.forEach(l => o[l] = !0), o
            }("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();

            function wr(D, o, l, p, S, F, k, V, G, ee, Ee, Oe, Ge) {
                return {
                    type: 0,
                    element: D,
                    triggerName: o,
                    isRemovalTransition: S,
                    fromState: l,
                    fromStyles: F,
                    toState: p,
                    toStyles: k,
                    timelines: V,
                    queriedElements: G,
                    preStyleProps: ee,
                    postStyleProps: Ee,
                    totalTime: Oe,
                    errors: Ge
                }
            }
            const Vn = {};
            class Ai {
                constructor(o, l, p) {
                    this._triggerName = o, this.ast = l, this._stateStyles = p
                }
                match(o, l, p, S) {
                    return function Jr(D, o, l, p, S) {
                        return D.some(F => F(o, l, p, S))
                    }(this.ast.matchers, o, l, p, S)
                }
                buildStyles(o, l, p) {
                    const S = this._stateStyles["*"],
                        F = this._stateStyles[o],
                        k = S ? S.buildStyles(l, p) : {};
                    return F ? F.buildStyles(l, p) : k
                }
                build(o, l, p, S, F, k, V, G, ee, Ee) {
                    const Oe = [],
                        Ge = this.ast.options && this.ast.options.params || Vn,
                        je = this.buildStyles(p, V && V.params || Vn, Oe),
                        it = G && G.params || Vn,
                        It = this.buildStyles(S, it, Oe),
                        Kt = new Set,
                        mn = new Map,
                        An = new Map,
                        ln = "void" === S,
                        Fi = {
                            params: Object.assign(Object.assign({}, Ge), it)
                        },
                        pr = Ee ? [] : di(o, l, this.ast.animation, F, k, je, It, Fi, ee, Oe);
                    let un = 0;
                    if (pr.forEach(Lt => {
                            un = Math.max(Lt.duration + Lt.delay, un)
                        }), Oe.length) return wr(l, this._triggerName, p, S, ln, je, It, [], [], mn, An, un, Oe);
                    pr.forEach(Lt => {
                        const Ar = Lt.element,
                            Zi = dn(mn, Ar, {});
                        Lt.preStyleProps.forEach(Tr => Zi[Tr] = !0);
                        const Ji = dn(An, Ar, {});
                        Lt.postStyleProps.forEach(Tr => Ji[Tr] = !0), Ar !== l && Kt.add(Ar)
                    });
                    const ei = Je(Kt.values());
                    return wr(l, this._triggerName, p, S, ln, je, It, pr, ei, mn, An, un)
                }
            }
            class Wi {
                constructor(o, l, p) {
                    this.styles = o, this.defaultParams = l, this.normalizer = p
                }
                buildStyles(o, l) {
                    const p = {},
                        S = tn(this.defaultParams);
                    return Object.keys(o).forEach(F => {
                        const k = o[F];
                        null != k && (S[F] = k)
                    }), this.styles.styles.forEach(F => {
                        if ("string" != typeof F) {
                            const k = F;
                            Object.keys(k).forEach(V => {
                                let G = k[V];
                                G.length > 1 && (G = he(G, S, l));
                                const ee = this.normalizer.normalizePropertyName(V, l);
                                G = this.normalizer.normalizeStyleValue(V, ee, G, l), p[ee] = G
                            })
                        }
                    }), p
                }
            }
            class Yi {
                constructor(o, l, p) {
                    this.name = o, this.ast = l, this._normalizer = p, this.transitionFactories = [], this.states = {}, l.states.forEach(S => {
                        this.states[S.name] = new Wi(S.style, S.options && S.options.params || {}, p)
                    }), _(this.states, "true", "1"), _(this.states, "false", "0"), l.transitions.forEach(S => {
                        this.transitionFactories.push(new Ai(o, S, this.states))
                    }), this.fallbackTransition = function ps(D, o, l) {
                        return new Ai(D, {
                            type: 1,
                            animation: {
                                type: 2,
                                steps: [],
                                options: null
                            },
                            matchers: [(k, V) => !0],
                            options: null,
                            queryCount: 0,
                            depCount: 0
                        }, o)
                    }(o, this.states)
                }
                get containsQueries() {
                    return this.ast.queryCount > 0
                }
                matchTransition(o, l, p, S) {
                    return this.transitionFactories.find(k => k.match(o, l, p, S)) || null
                }
                matchStyles(o, l, p) {
                    return this.fallbackTransition.buildStyles(o, l, p)
                }
            }

            function _(D, o, l) {
                D.hasOwnProperty(o) ? D.hasOwnProperty(l) || (D[l] = D[o]) : D.hasOwnProperty(l) && (D[o] = D[l])
            }
            const T = new kn;
            class C {
                constructor(o, l, p) {
                    this.bodyNode = o, this._driver = l, this._normalizer = p, this._animations = {}, this._playersById = {}, this.players = []
                }
                register(o, l) {
                    const p = [],
                        F = kr(this._driver, l, p, []);
                    if (p.length) throw function zn(D) {
                        return new O.vHH(3503, ke)
                    }();
                    this._animations[o] = F
                }
                _buildPlayer(o, l, p) {
                    const S = o.element,
                        F = Ue(0, this._normalizer, 0, o.keyframes, l, p);
                    return this._driver.animate(S, F, o.duration, o.delay, o.easing, [], !0)
                }
                create(o, l, p = {}) {
                    const S = [],
                        F = this._animations[o];
                    let k;
                    const V = new Map;
                    if (F ? (k = di(this._driver, l, F, x, z, {}, {}, p, T, S), k.forEach(Ee => {
                            const Oe = dn(V, Ee.element, {});
                            Ee.postStyleProps.forEach(Ge => Oe[Ge] = null)
                        })) : (S.push(function Tn() {
                            return new O.vHH(3300, ke)
                        }()), k = []), S.length) throw function zt(D) {
                        return new O.vHH(3504, ke)
                    }();
                    V.forEach((Ee, Oe) => {
                        Object.keys(Ee).forEach(Ge => {
                            Ee[Ge] = this._driver.computeStyle(Oe, Ge, ie)
                        })
                    });
                    const ee = ye(k.map(Ee => {
                        const Oe = V.get(Ee.element);
                        return this._buildPlayer(Ee, {}, Oe)
                    }));
                    return this._playersById[o] = ee, ee.onDestroy(() => this.destroy(o)), this.players.push(ee), ee
                }
                destroy(o) {
                    const l = this._getPlayer(o);
                    l.destroy(), delete this._playersById[o];
                    const p = this.players.indexOf(l);
                    p >= 0 && this.players.splice(p, 1)
                }
                _getPlayer(o) {
                    const l = this._playersById[o];
                    if (!l) throw function si(D) {
                        return new O.vHH(3301, ke)
                    }();
                    return l
                }
                listen(o, l, p, S) {
                    const F = Ut(l, "", "", "");
                    return on(this._getPlayer(o), p, F, S), () => {}
                }
                command(o, l, p, S) {
                    if ("register" == p) return void this.register(o, S[0]);
                    if ("create" == p) return void this.create(o, l, S[0] || {});
                    const F = this._getPlayer(o);
                    switch (p) {
                        case "play":
                            F.play();
                            break;
                        case "pause":
                            F.pause();
                            break;
                        case "reset":
                            F.reset();
                            break;
                        case "restart":
                            F.restart();
                            break;
                        case "finish":
                            F.finish();
                            break;
                        case "init":
                            F.init();
                            break;
                        case "setPosition":
                            F.setPosition(parseFloat(S[0]));
                            break;
                        case "destroy":
                            this.destroy(o)
                    }
                }
            }
            const P = "ng-animate-queued",
                K = "ng-animate-disabled",
                Tt = [],
                Ye = {
                    namespaceId: "",
                    setForRemoval: !1,
                    setForMove: !1,
                    hasAnimation: !1,
                    removedBeforeQueried: !1
                },
                lt = {
                    namespaceId: "",
                    setForMove: !1,
                    setForRemoval: !1,
                    hasAnimation: !1,
                    removedBeforeQueried: !0
                },
                ct = "__ng_removed";
            class Dt {
                constructor(o, l = "") {
                    this.namespaceId = l;
                    const p = o && o.hasOwnProperty("value");
                    if (this.value = function y(D) {
                            return null != D ? D : null
                        }(p ? o.value : o), p) {
                        const F = tn(o);
                        delete F.value, this.options = F
                    } else this.options = {};
                    this.options.params || (this.options.params = {})
                }
                get params() {
                    return this.options.params
                }
                absorbOptions(o) {
                    const l = o.params;
                    if (l) {
                        const p = this.options.params;
                        Object.keys(l).forEach(S => {
                            null == p[S] && (p[S] = l[S])
                        })
                    }
                }
            }
            const rt = "void",
                Ur = new Dt(rt);
            class dr {
                constructor(o, l, p) {
                    this.id = o, this.hostElement = l, this._engine = p, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + o, Nt(l, this._hostClassName)
                }
                listen(o, l, p, S) {
                    if (!this._triggers.hasOwnProperty(l)) throw function Cn(D, o) {
                        return new O.vHH(3302, ke)
                    }();
                    if (null == p || 0 == p.length) throw function Nr(D) {
                        return new O.vHH(3303, ke)
                    }();
                    if (! function I(D) {
                            return "start" == D || "done" == D
                        }(p)) throw function _r(D, o) {
                        return new O.vHH(3400, ke)
                    }();
                    const F = dn(this._elementListeners, o, []),
                        k = {
                            name: l,
                            phase: p,
                            callback: S
                        };
                    F.push(k);
                    const V = dn(this._engine.statesByElement, o, {});
                    return V.hasOwnProperty(l) || (Nt(o, te), Nt(o, te + "-" + l), V[l] = Ur), () => {
                        this._engine.afterFlush(() => {
                            const G = F.indexOf(k);
                            G >= 0 && F.splice(G, 1), this._triggers[l] || delete V[l]
                        })
                    }
                }
                register(o, l) {
                    return !this._triggers[o] && (this._triggers[o] = l, !0)
                }
                _getTrigger(o) {
                    const l = this._triggers[o];
                    if (!l) throw function Dr(D) {
                        return new O.vHH(3401, ke)
                    }();
                    return l
                }
                trigger(o, l, p, S = !0) {
                    const F = this._getTrigger(l),
                        k = new Yt(this.id, l, o);
                    let V = this._engine.statesByElement.get(o);
                    V || (Nt(o, te), Nt(o, te + "-" + l), this._engine.statesByElement.set(o, V = {}));
                    let G = V[l];
                    const ee = new Dt(p, this.id);
                    if (!(p && p.hasOwnProperty("value")) && G && ee.absorbOptions(G.options), V[l] = ee, G || (G = Ur), ee.value !== rt && G.value === ee.value) {
                        if (! function gs(D, o) {
                                const l = Object.keys(D),
                                    p = Object.keys(o);
                                if (l.length != p.length) return !1;
                                for (let S = 0; S < l.length; S++) {
                                    const F = l[S];
                                    if (!o.hasOwnProperty(F) || D[F] !== o[F]) return !1
                                }
                                return !0
                            }(G.params, ee.params)) {
                            const it = [],
                                It = F.matchStyles(G.value, G.params, it),
                                Kt = F.matchStyles(ee.value, ee.params, it);
                            it.length ? this._engine.reportError(it) : this._engine.afterFlush(() => {
                                bt(o, It), nn(o, Kt)
                            })
                        }
                        return
                    }
                    const Ge = dn(this._engine.playersByElement, o, []);
                    Ge.forEach(it => {
                        it.namespaceId == this.id && it.triggerName == l && it.queued && it.destroy()
                    });
                    let ut = F.matchTransition(G.value, ee.value, o, ee.params),
                        je = !1;
                    if (!ut) {
                        if (!S) return;
                        ut = F.fallbackTransition, je = !0
                    }
                    return this._engine.totalQueuedPlayers++, this._queue.push({
                        element: o,
                        triggerName: l,
                        transition: ut,
                        fromState: G,
                        toState: ee,
                        player: k,
                        isFallbackTransition: je
                    }), je || (Nt(o, P), k.onStart(() => {
                        hr(o, P)
                    })), k.onDone(() => {
                        let it = this.players.indexOf(k);
                        it >= 0 && this.players.splice(it, 1);
                        const It = this._engine.playersByElement.get(o);
                        if (It) {
                            let Kt = It.indexOf(k);
                            Kt >= 0 && It.splice(Kt, 1)
                        }
                    }), this.players.push(k), Ge.push(k), k
                }
                deregister(o) {
                    delete this._triggers[o], this._engine.statesByElement.forEach((l, p) => {
                        delete l[o]
                    }), this._elementListeners.forEach((l, p) => {
                        this._elementListeners.set(p, l.filter(S => S.name != o))
                    })
                }
                clearElementCache(o) {
                    this._engine.statesByElement.delete(o), this._elementListeners.delete(o);
                    const l = this._engine.playersByElement.get(o);
                    l && (l.forEach(p => p.destroy()), this._engine.playersByElement.delete(o))
                }
                _signalRemovalForInnerTriggers(o, l) {
                    const p = this._engine.driver.query(o, ue, !0);
                    p.forEach(S => {
                        if (S[ct]) return;
                        const F = this._engine.fetchNamespacesByElement(S);
                        F.size ? F.forEach(k => k.triggerLeaveAnimation(S, l, !1, !0)) : this.clearElementCache(S)
                    }), this._engine.afterFlushAnimationsDone(() => p.forEach(S => this.clearElementCache(S)))
                }
                triggerLeaveAnimation(o, l, p, S) {
                    const F = this._engine.statesByElement.get(o),
                        k = new Map;
                    if (F) {
                        const V = [];
                        if (Object.keys(F).forEach(G => {
                                if (k.set(G, F[G].value), this._triggers[G]) {
                                    const ee = this.trigger(o, G, rt, S);
                                    ee && V.push(ee)
                                }
                            }), V.length) return this._engine.markElementAsRemoved(this.id, o, !0, l, k), p && ye(V).onDone(() => this._engine.processLeaveNode(o)), !0
                    }
                    return !1
                }
                prepareLeaveAnimationListeners(o) {
                    const l = this._elementListeners.get(o),
                        p = this._engine.statesByElement.get(o);
                    if (l && p) {
                        const S = new Set;
                        l.forEach(F => {
                            const k = F.name;
                            if (S.has(k)) return;
                            S.add(k);
                            const G = this._triggers[k].fallbackTransition,
                                ee = p[k] || Ur,
                                Ee = new Dt(rt),
                                Oe = new Yt(this.id, k, o);
                            this._engine.totalQueuedPlayers++, this._queue.push({
                                element: o,
                                triggerName: k,
                                transition: G,
                                fromState: ee,
                                toState: Ee,
                                player: Oe,
                                isFallbackTransition: !0
                            })
                        })
                    }
                }
                removeNode(o, l) {
                    const p = this._engine;
                    if (o.childElementCount && this._signalRemovalForInnerTriggers(o, l), this.triggerLeaveAnimation(o, l, !0)) return;
                    let S = !1;
                    if (p.totalAnimations) {
                        const F = p.players.length ? p.playersByQueriedElement.get(o) : [];
                        if (F && F.length) S = !0;
                        else {
                            let k = o;
                            for (; k = k.parentNode;)
                                if (p.statesByElement.get(k)) {
                                    S = !0;
                                    break
                                }
                        }
                    }
                    if (this.prepareLeaveAnimationListeners(o), S) p.markElementAsRemoved(this.id, o, !1, l);
                    else {
                        const F = o[ct];
                        (!F || F === Ye) && (p.afterFlush(() => this.clearElementCache(o)), p.destroyInnerAnimations(o), p._onRemovalComplete(o, l))
                    }
                }
                insertNode(o, l) {
                    Nt(o, this._hostClassName)
                }
                drainQueuedTransitions(o) {
                    const l = [];
                    return this._queue.forEach(p => {
                        const S = p.player;
                        if (S.destroyed) return;
                        const F = p.element,
                            k = this._elementListeners.get(F);
                        k && k.forEach(V => {
                            if (V.name == p.triggerName) {
                                const G = Ut(F, p.triggerName, p.fromState.value, p.toState.value);
                                G._data = o, on(p.player, V.phase, G, V.callback)
                            }
                        }), S.markedForDestroy ? this._engine.afterFlush(() => {
                            S.destroy()
                        }) : l.push(p)
                    }), this._queue = [], l.sort((p, S) => {
                        const F = p.transition.ast.depCount,
                            k = S.transition.ast.depCount;
                        return 0 == F || 0 == k ? F - k : this._engine.driver.containsElement(p.element, S.element) ? 1 : -1
                    })
                }
                destroy(o) {
                    this.players.forEach(l => l.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, o)
                }
                elementContainsData(o) {
                    let l = !1;
                    return this._elementListeners.has(o) && (l = !0), l = !!this._queue.find(p => p.element === o) || l, l
                }
            }
            class fr {
                constructor(o, l, p) {
                    this.bodyNode = o, this.driver = l, this._normalizer = p, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = (S, F) => {}
                }
                _onRemovalComplete(o, l) {
                    this.onRemovalComplete(o, l)
                }
                get queuedPlayers() {
                    const o = [];
                    return this._namespaceList.forEach(l => {
                        l.players.forEach(p => {
                            p.queued && o.push(p)
                        })
                    }), o
                }
                createNamespace(o, l) {
                    const p = new dr(o, l, this);
                    return this.bodyNode && this.driver.containsElement(this.bodyNode, l) ? this._balanceNamespaceList(p, l) : (this.newHostElements.set(l, p), this.collectEnterElement(l)), this._namespaceLookup[o] = p
                }
                _balanceNamespaceList(o, l) {
                    const p = this._namespaceList,
                        S = this.namespacesByHostElement,
                        F = p.length - 1;
                    if (F >= 0) {
                        let k = !1;
                        if (void 0 !== this.driver.getParentElement) {
                            let V = this.driver.getParentElement(l);
                            for (; V;) {
                                const G = S.get(V);
                                if (G) {
                                    const ee = p.indexOf(G);
                                    p.splice(ee + 1, 0, o), k = !0;
                                    break
                                }
                                V = this.driver.getParentElement(V)
                            }
                        } else
                            for (let V = F; V >= 0; V--)
                                if (this.driver.containsElement(p[V].hostElement, l)) {
                                    p.splice(V + 1, 0, o), k = !0;
                                    break
                                } k || p.unshift(o)
                    } else p.push(o);
                    return S.set(l, o), o
                }
                register(o, l) {
                    let p = this._namespaceLookup[o];
                    return p || (p = this.createNamespace(o, l)), p
                }
                registerTrigger(o, l, p) {
                    let S = this._namespaceLookup[o];
                    S && S.register(l, p) && this.totalAnimations++
                }
                destroy(o, l) {
                    if (!o) return;
                    const p = this._fetchNamespace(o);
                    this.afterFlush(() => {
                        this.namespacesByHostElement.delete(p.hostElement), delete this._namespaceLookup[o];
                        const S = this._namespaceList.indexOf(p);
                        S >= 0 && this._namespaceList.splice(S, 1)
                    }), this.afterFlushAnimationsDone(() => p.destroy(l))
                }
                _fetchNamespace(o) {
                    return this._namespaceLookup[o]
                }
                fetchNamespacesByElement(o) {
                    const l = new Set,
                        p = this.statesByElement.get(o);
                    if (p) {
                        const S = Object.keys(p);
                        for (let F = 0; F < S.length; F++) {
                            const k = p[S[F]].namespaceId;
                            if (k) {
                                const V = this._fetchNamespace(k);
                                V && l.add(V)
                            }
                        }
                    }
                    return l
                }
                trigger(o, l, p, S) {
                    if (m(l)) {
                        const F = this._fetchNamespace(o);
                        if (F) return F.trigger(l, p, S), !0
                    }
                    return !1
                }
                insertNode(o, l, p, S) {
                    if (!m(l)) return;
                    const F = l[ct];
                    if (F && F.setForRemoval) {
                        F.setForRemoval = !1, F.setForMove = !0;
                        const k = this.collectedLeaveElements.indexOf(l);
                        k >= 0 && this.collectedLeaveElements.splice(k, 1)
                    }
                    if (o) {
                        const k = this._fetchNamespace(o);
                        k && k.insertNode(l, p)
                    }
                    S && this.collectEnterElement(l)
                }
                collectEnterElement(o) {
                    this.collectedEnterElements.push(o)
                }
                markElementAsDisabled(o, l) {
                    l ? this.disabledNodes.has(o) || (this.disabledNodes.add(o), Nt(o, K)) : this.disabledNodes.has(o) && (this.disabledNodes.delete(o), hr(o, K))
                }
                removeNode(o, l, p, S) {
                    if (m(l)) {
                        const F = o ? this._fetchNamespace(o) : null;
                        if (F ? F.removeNode(l, S) : this.markElementAsRemoved(o, l, !1, S), p) {
                            const k = this.namespacesByHostElement.get(l);
                            k && k.id !== o && k.removeNode(l, S)
                        }
                    } else this._onRemovalComplete(l, S)
                }
                markElementAsRemoved(o, l, p, S, F) {
                    this.collectedLeaveElements.push(l), l[ct] = {
                        namespaceId: o,
                        setForRemoval: S,
                        hasAnimation: p,
                        removedBeforeQueried: !1,
                        previousTriggersValues: F
                    }
                }
                listen(o, l, p, S, F) {
                    return m(l) ? this._fetchNamespace(o).listen(l, p, S, F) : () => {}
                }
                _buildInstruction(o, l, p, S, F) {
                    return o.transition.build(this.driver, o.element, o.fromState.value, o.toState.value, p, S, o.fromState.options, o.toState.options, l, F)
                }
                destroyInnerAnimations(o) {
                    let l = this.driver.query(o, ue, !0);
                    l.forEach(p => this.destroyActiveAnimationsForElement(p)), 0 != this.playersByQueriedElement.size && (l = this.driver.query(o, gt, !0), l.forEach(p => this.finishActiveQueriedAnimationOnElement(p)))
                }
                destroyActiveAnimationsForElement(o) {
                    const l = this.playersByElement.get(o);
                    l && l.forEach(p => {
                        p.queued ? p.markedForDestroy = !0 : p.destroy()
                    })
                }
                finishActiveQueriedAnimationOnElement(o) {
                    const l = this.playersByQueriedElement.get(o);
                    l && l.forEach(p => p.finish())
                }
                whenRenderingDone() {
                    return new Promise(o => {
                        if (this.players.length) return ye(this.players).onDone(() => o());
                        o()
                    })
                }
                processLeaveNode(o) {
                    var l;
                    const p = o[ct];
                    if (p && p.setForRemoval) {
                        if (o[ct] = Ye, p.namespaceId) {
                            this.destroyInnerAnimations(o);
                            const S = this._fetchNamespace(p.namespaceId);
                            S && S.clearElementCache(o)
                        }
                        this._onRemovalComplete(o, p.setForRemoval)
                    }(null === (l = o.classList) || void 0 === l ? void 0 : l.contains(K)) && this.markElementAsDisabled(o, !1), this.driver.query(o, ".ng-animate-disabled", !0).forEach(S => {
                        this.markElementAsDisabled(S, !1)
                    })
                }
                flush(o = -1) {
                    let l = [];
                    if (this.newHostElements.size && (this.newHostElements.forEach((p, S) => this._balanceNamespaceList(p, S)), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length)
                        for (let p = 0; p < this.collectedEnterElements.length; p++) Nt(this.collectedEnterElements[p], "ng-star-inserted");
                    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                        const p = [];
                        try {
                            l = this._flushAnimations(p, o)
                        } finally {
                            for (let S = 0; S < p.length; S++) p[S]()
                        }
                    } else
                        for (let p = 0; p < this.collectedLeaveElements.length; p++) this.processLeaveNode(this.collectedLeaveElements[p]);
                    if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(p => p()), this._flushFns = [], this._whenQuietFns.length) {
                        const p = this._whenQuietFns;
                        this._whenQuietFns = [], l.length ? ye(l).onDone(() => {
                            p.forEach(S => S())
                        }) : p.forEach(S => S())
                    }
                }
                reportError(o) {
                    throw function Yr(D) {
                        return new O.vHH(3402, ke)
                    }()
                }
                _flushAnimations(o, l) {
                    const p = new kn,
                        S = [],
                        F = new Map,
                        k = [],
                        V = new Map,
                        G = new Map,
                        ee = new Map,
                        Ee = new Set;
                    this.disabledNodes.forEach(Pe => {
                        Ee.add(Pe);
                        const xe = this.driver.query(Pe, ".ng-animate-queued", !0);
                        for (let $e = 0; $e < xe.length; $e++) Ee.add(xe[$e])
                    });
                    const Oe = this.bodyNode,
                        Ge = Array.from(this.statesByElement.keys()),
                        ut = Me(Ge, this.collectedEnterElements),
                        je = new Map;
                    let it = 0;
                    ut.forEach((Pe, xe) => {
                        const $e = x + it++;
                        je.set(xe, $e), Pe.forEach(dt => Nt(dt, $e))
                    });
                    const It = [],
                        Kt = new Set,
                        mn = new Set;
                    for (let Pe = 0; Pe < this.collectedLeaveElements.length; Pe++) {
                        const xe = this.collectedLeaveElements[Pe],
                            $e = xe[ct];
                        $e && $e.setForRemoval && (It.push(xe), Kt.add(xe), $e.hasAnimation ? this.driver.query(xe, ".ng-star-inserted", !0).forEach(dt => Kt.add(dt)) : mn.add(xe))
                    }
                    const An = new Map,
                        ln = Me(Ge, Array.from(Kt));
                    ln.forEach((Pe, xe) => {
                        const $e = z + it++;
                        An.set(xe, $e), Pe.forEach(dt => Nt(dt, $e))
                    }), o.push(() => {
                        ut.forEach((Pe, xe) => {
                            const $e = je.get(xe);
                            Pe.forEach(dt => hr(dt, $e))
                        }), ln.forEach((Pe, xe) => {
                            const $e = An.get(xe);
                            Pe.forEach(dt => hr(dt, $e))
                        }), It.forEach(Pe => {
                            this.processLeaveNode(Pe)
                        })
                    });
                    const Fi = [],
                        pr = [];
                    for (let Pe = this._namespaceList.length - 1; Pe >= 0; Pe--) this._namespaceList[Pe].drainQueuedTransitions(l).forEach($e => {
                        const dt = $e.player,
                            Xt = $e.element;
                        if (Fi.push(dt), this.collectedEnterElements.length) {
                            const $n = Xt[ct];
                            if ($n && $n.setForMove) {
                                if ($n.previousTriggersValues && $n.previousTriggersValues.has($e.triggerName)) {
                                    const Ni = $n.previousTriggersValues.get($e.triggerName),
                                        Ir = this.statesByElement.get($e.element);
                                    Ir && Ir[$e.triggerName] && (Ir[$e.triggerName].value = Ni)
                                }
                                return void dt.destroy()
                            }
                        }
                        const Hn = !Oe || !this.driver.containsElement(Oe, Xt),
                            gr = An.get(Xt),
                            Un = je.get(Xt),
                            Gt = this._buildInstruction($e, p, Un, gr, Hn);
                        if (Gt.errors && Gt.errors.length) return void pr.push(Gt);
                        if (Hn) return dt.onStart(() => bt(Xt, Gt.fromStyles)), dt.onDestroy(() => nn(Xt, Gt.toStyles)), void S.push(dt);
                        if ($e.isFallbackTransition) return dt.onStart(() => bt(Xt, Gt.fromStyles)), dt.onDestroy(() => nn(Xt, Gt.toStyles)), void S.push(dt);
                        const Vs = [];
                        Gt.timelines.forEach($n => {
                            $n.stretchStartingKeyframe = !0, this.disabledNodes.has($n.element) || Vs.push($n)
                        }), Gt.timelines = Vs, p.append(Xt, Gt.timelines), k.push({
                            instruction: Gt,
                            player: dt,
                            element: Xt
                        }), Gt.queriedElements.forEach($n => dn(V, $n, []).push(dt)), Gt.preStyleProps.forEach(($n, Ni) => {
                            const Ir = Object.keys($n);
                            if (Ir.length) {
                                let Or = G.get(Ni);
                                Or || G.set(Ni, Or = new Set), Ir.forEach(Ts => Or.add(Ts))
                            }
                        }), Gt.postStyleProps.forEach(($n, Ni) => {
                            const Ir = Object.keys($n);
                            let Or = ee.get(Ni);
                            Or || ee.set(Ni, Or = new Set), Ir.forEach(Ts => Or.add(Ts))
                        })
                    });
                    if (pr.length) {
                        const Pe = [];
                        pr.forEach(xe => {
                            Pe.push(function Le(D, o) {
                                return new O.vHH(3505, ke)
                            }())
                        }), Fi.forEach(xe => xe.destroy()), this.reportError(Pe)
                    }
                    const un = new Map,
                        ei = new Map;
                    k.forEach(Pe => {
                        const xe = Pe.element;
                        p.has(xe) && (ei.set(xe, xe), this._beforeAnimationBuild(Pe.player.namespaceId, Pe.instruction, un))
                    }), S.forEach(Pe => {
                        const xe = Pe.element;
                        this._getPreviousPlayers(xe, !1, Pe.namespaceId, Pe.triggerName, null).forEach(dt => {
                            dn(un, xe, []).push(dt), dt.destroy()
                        })
                    });
                    const Lt = It.filter(Pe => Rs(Pe, G, ee)),
                        Ar = new Map;
                    Te(Ar, this.driver, mn, ee, ie).forEach(Pe => {
                        Rs(Pe, G, ee) && Lt.push(Pe)
                    });
                    const Ji = new Map;
                    ut.forEach((Pe, xe) => {
                        Te(Ji, this.driver, new Set(Pe), G, "!")
                    }), Lt.forEach(Pe => {
                        const xe = Ar.get(Pe),
                            $e = Ji.get(Pe);
                        Ar.set(Pe, Object.assign(Object.assign({}, xe), $e))
                    });
                    const Tr = [],
                        mi = [],
                        Xs = {};
                    k.forEach(Pe => {
                        const {
                            element: xe,
                            player: $e,
                            instruction: dt
                        } = Pe;
                        if (p.has(xe)) {
                            if (Ee.has(xe)) return $e.onDestroy(() => nn(xe, dt.toStyles)), $e.disabled = !0, $e.overrideTotalTime(dt.totalTime), void S.push($e);
                            let Xt = Xs;
                            if (ei.size > 1) {
                                let gr = xe;
                                const Un = [];
                                for (; gr = gr.parentNode;) {
                                    const Gt = ei.get(gr);
                                    if (Gt) {
                                        Xt = Gt;
                                        break
                                    }
                                    Un.push(gr)
                                }
                                Un.forEach(Gt => ei.set(Gt, Xt))
                            }
                            const Hn = this._buildAnimation($e.namespaceId, dt, un, F, Ji, Ar);
                            if ($e.setRealPlayer(Hn), Xt === Xs) Tr.push($e);
                            else {
                                const gr = this.playersByElement.get(Xt);
                                gr && gr.length && ($e.parentPlayer = ye(gr)), S.push($e)
                            }
                        } else bt(xe, dt.fromStyles), $e.onDestroy(() => nn(xe, dt.toStyles)), mi.push($e), Ee.has(xe) && S.push($e)
                    }), mi.forEach(Pe => {
                        const xe = F.get(Pe.element);
                        if (xe && xe.length) {
                            const $e = ye(xe);
                            Pe.setRealPlayer($e)
                        }
                    }), S.forEach(Pe => {
                        Pe.parentPlayer ? Pe.syncPlayerEvents(Pe.parentPlayer) : Pe.destroy()
                    });
                    for (let Pe = 0; Pe < It.length; Pe++) {
                        const xe = It[Pe],
                            $e = xe[ct];
                        if (hr(xe, z), $e && $e.hasAnimation) continue;
                        let dt = [];
                        if (V.size) {
                            let Hn = V.get(xe);
                            Hn && Hn.length && dt.push(...Hn);
                            let gr = this.driver.query(xe, gt, !0);
                            for (let Un = 0; Un < gr.length; Un++) {
                                let Gt = V.get(gr[Un]);
                                Gt && Gt.length && dt.push(...Gt)
                            }
                        }
                        const Xt = dt.filter(Hn => !Hn.destroyed);
                        Xt.length ? Xr(this, xe, Xt) : this.processLeaveNode(xe)
                    }
                    return It.length = 0, Tr.forEach(Pe => {
                        this.players.push(Pe), Pe.onDone(() => {
                            Pe.destroy();
                            const xe = this.players.indexOf(Pe);
                            this.players.splice(xe, 1)
                        }), Pe.play()
                    }), Tr
                }
                elementContainsData(o, l) {
                    let p = !1;
                    const S = l[ct];
                    return S && S.setForRemoval && (p = !0), this.playersByElement.has(l) && (p = !0), this.playersByQueriedElement.has(l) && (p = !0), this.statesByElement.has(l) && (p = !0), this._fetchNamespace(o).elementContainsData(l) || p
                }
                afterFlush(o) {
                    this._flushFns.push(o)
                }
                afterFlushAnimationsDone(o) {
                    this._whenQuietFns.push(o)
                }
                _getPreviousPlayers(o, l, p, S, F) {
                    let k = [];
                    if (l) {
                        const V = this.playersByQueriedElement.get(o);
                        V && (k = V)
                    } else {
                        const V = this.playersByElement.get(o);
                        if (V) {
                            const G = !F || F == rt;
                            V.forEach(ee => {
                                ee.queued || !G && ee.triggerName != S || k.push(ee)
                            })
                        }
                    }
                    return (p || S) && (k = k.filter(V => !(p && p != V.namespaceId || S && S != V.triggerName))), k
                }
                _beforeAnimationBuild(o, l, p) {
                    const F = l.element,
                        k = l.isRemovalTransition ? void 0 : o,
                        V = l.isRemovalTransition ? void 0 : l.triggerName;
                    for (const G of l.timelines) {
                        const ee = G.element,
                            Ee = ee !== F,
                            Oe = dn(p, ee, []);
                        this._getPreviousPlayers(ee, Ee, k, V, l.toState).forEach(ut => {
                            const je = ut.getRealPlayer();
                            je.beforeDestroy && je.beforeDestroy(), ut.destroy(), Oe.push(ut)
                        })
                    }
                    bt(F, l.fromStyles)
                }
                _buildAnimation(o, l, p, S, F, k) {
                    const V = l.triggerName,
                        G = l.element,
                        ee = [],
                        Ee = new Set,
                        Oe = new Set,
                        Ge = l.timelines.map(je => {
                            const it = je.element;
                            Ee.add(it);
                            const It = it[ct];
                            if (It && It.removedBeforeQueried) return new nt(je.duration, je.delay);
                            const Kt = it !== G,
                                mn = function $r(D) {
                                    const o = [];
                                    return Bn(D, o), o
                                }((p.get(it) || Tt).map(un => un.getRealPlayer())).filter(un => !!un.element && un.element === it),
                                An = F.get(it),
                                ln = k.get(it),
                                Fi = Ue(0, this._normalizer, 0, je.keyframes, An, ln),
                                pr = this._buildPlayer(je, Fi, mn);
                            if (je.subTimeline && S && Oe.add(it), Kt) {
                                const un = new Yt(o, V, it);
                                un.setRealPlayer(pr), ee.push(un)
                            }
                            return pr
                        });
                    ee.forEach(je => {
                        dn(this.playersByQueriedElement, je.element, []).push(je), je.onDone(() => function E(D, o, l) {
                            let p;
                            if (D instanceof Map) {
                                if (p = D.get(o), p) {
                                    if (p.length) {
                                        const S = p.indexOf(l);
                                        p.splice(S, 1)
                                    }
                                    0 == p.length && D.delete(o)
                                }
                            } else if (p = D[o], p) {
                                if (p.length) {
                                    const S = p.indexOf(l);
                                    p.splice(S, 1)
                                }
                                0 == p.length && delete D[o]
                            }
                            return p
                        }(this.playersByQueriedElement, je.element, je))
                    }), Ee.forEach(je => Nt(je, Xe));
                    const ut = ye(Ge);
                    return ut.onDestroy(() => {
                        Ee.forEach(je => hr(je, Xe)), nn(G, l.toStyles)
                    }), Oe.forEach(je => {
                        dn(S, je, []).push(ut)
                    }), ut
                }
                _buildPlayer(o, l, p) {
                    return l.length > 0 ? this.driver.animate(o.element, l, o.duration, o.delay, o.easing, p) : new nt(o.duration, o.delay)
                }
            }
            class Yt {
                constructor(o, l, p) {
                    this.namespaceId = o, this.triggerName = l, this.element = p, this._player = new nt, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
                }
                setRealPlayer(o) {
                    this._containsRealPlayer || (this._player = o, Object.keys(this._queuedCallbacks).forEach(l => {
                        this._queuedCallbacks[l].forEach(p => on(o, l, void 0, p))
                    }), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(o.totalTime), this.queued = !1)
                }
                getRealPlayer() {
                    return this._player
                }
                overrideTotalTime(o) {
                    this.totalTime = o
                }
                syncPlayerEvents(o) {
                    const l = this._player;
                    l.triggerCallback && o.onStart(() => l.triggerCallback("start")), o.onDone(() => this.finish()), o.onDestroy(() => this.destroy())
                }
                _queueEvent(o, l) {
                    dn(this._queuedCallbacks, o, []).push(l)
                }
                onDone(o) {
                    this.queued && this._queueEvent("done", o), this._player.onDone(o)
                }
                onStart(o) {
                    this.queued && this._queueEvent("start", o), this._player.onStart(o)
                }
                onDestroy(o) {
                    this.queued && this._queueEvent("destroy", o), this._player.onDestroy(o)
                }
                init() {
                    this._player.init()
                }
                hasStarted() {
                    return !this.queued && this._player.hasStarted()
                }
                play() {
                    !this.queued && this._player.play()
                }
                pause() {
                    !this.queued && this._player.pause()
                }
                restart() {
                    !this.queued && this._player.restart()
                }
                finish() {
                    this._player.finish()
                }
                destroy() {
                    this.destroyed = !0, this._player.destroy()
                }
                reset() {
                    !this.queued && this._player.reset()
                }
                setPosition(o) {
                    this.queued || this._player.setPosition(o)
                }
                getPosition() {
                    return this.queued ? 0 : this._player.getPosition()
                }
                triggerCallback(o) {
                    const l = this._player;
                    l.triggerCallback && l.triggerCallback(o)
                }
            }

            function m(D) {
                return D && 1 === D.nodeType
            }

            function Z(D, o) {
                const l = D.style.display;
                return D.style.display = null != o ? o : "none", l
            }

            function Te(D, o, l, p, S) {
                const F = [];
                l.forEach(G => F.push(Z(G)));
                const k = [];
                p.forEach((G, ee) => {
                    const Ee = {};
                    G.forEach(Oe => {
                        const Ge = Ee[Oe] = o.computeStyle(ee, Oe, S);
                        (!Ge || 0 == Ge.length) && (ee[ct] = lt, k.push(ee))
                    }), D.set(ee, Ee)
                });
                let V = 0;
                return l.forEach(G => Z(G, F[V++])), k
            }

            function Me(D, o) {
                const l = new Map;
                if (D.forEach(V => l.set(V, [])), 0 == o.length) return l;
                const S = new Set(o),
                    F = new Map;

                function k(V) {
                    if (!V) return 1;
                    let G = F.get(V);
                    if (G) return G;
                    const ee = V.parentNode;
                    return G = l.has(ee) ? ee : S.has(ee) ? 1 : k(ee), F.set(V, G), G
                }
                return o.forEach(V => {
                    const G = k(V);
                    1 !== G && l.get(G).push(V)
                }), l
            }

            function Nt(D, o) {
                var l;
                null === (l = D.classList) || void 0 === l || l.add(o)
            }

            function hr(D, o) {
                var l;
                null === (l = D.classList) || void 0 === l || l.remove(o)
            }

            function Xr(D, o, l) {
                ye(l).onDone(() => D.processLeaveNode(o))
            }

            function Bn(D, o) {
                for (let l = 0; l < D.length; l++) {
                    const p = D[l];
                    p instanceof cn ? Bn(p.players, o) : o.push(p)
                }
            }

            function Rs(D, o, l) {
                const p = l.get(D);
                if (!p) return !1;
                let S = o.get(D);
                return S ? p.forEach(F => S.add(F)) : o.set(D, p), l.delete(D), !0
            }
            class Ti {
                constructor(o, l, p) {
                    this.bodyNode = o, this._driver = l, this._normalizer = p, this._triggerCache = {}, this.onRemovalComplete = (S, F) => {}, this._transitionEngine = new fr(o, l, p), this._timelineEngine = new C(o, l, p), this._transitionEngine.onRemovalComplete = (S, F) => this.onRemovalComplete(S, F)
                }
                registerTrigger(o, l, p, S, F) {
                    const k = o + "-" + S;
                    let V = this._triggerCache[k];
                    if (!V) {
                        const G = [],
                            Ee = kr(this._driver, F, G, []);
                        if (G.length) throw function kt(D, o) {
                            return new O.vHH(3404, ke)
                        }();
                        V = function pn(D, o, l) {
                            return new Yi(D, o, l)
                        }(S, Ee, this._normalizer), this._triggerCache[k] = V
                    }
                    this._transitionEngine.registerTrigger(l, S, V)
                }
                register(o, l) {
                    this._transitionEngine.register(o, l)
                }
                destroy(o, l) {
                    this._transitionEngine.destroy(o, l)
                }
                onInsert(o, l, p, S) {
                    this._transitionEngine.insertNode(o, l, p, S)
                }
                onRemove(o, l, p, S) {
                    this._transitionEngine.removeNode(o, l, S || !1, p)
                }
                disableAnimations(o, l) {
                    this._transitionEngine.markElementAsDisabled(o, l)
                }
                process(o, l, p, S) {
                    if ("@" == p.charAt(0)) {
                        const [F, k] = bn(p);
                        this._timelineEngine.command(F, l, k, S)
                    } else this._transitionEngine.trigger(o, l, p, S)
                }
                listen(o, l, p, S, F) {
                    if ("@" == p.charAt(0)) {
                        const [k, V] = bn(p);
                        return this._timelineEngine.listen(k, l, V, F)
                    }
                    return this._transitionEngine.listen(o, l, p, S, F)
                }
                flush(o = -1) {
                    this._transitionEngine.flush(o)
                }
                get players() {
                    return this._transitionEngine.players.concat(this._timelineEngine.players)
                }
                whenRenderingDone() {
                    return this._transitionEngine.whenRenderingDone()
                }
            }
            let pt = (() => {
                class D {
                    constructor(l, p, S) {
                        this._element = l, this._startStyles = p, this._endStyles = S, this._state = 0;
                        let F = D.initialStylesByElement.get(l);
                        F || D.initialStylesByElement.set(l, F = {}), this._initialStyles = F
                    }
                    start() {
                        this._state < 1 && (this._startStyles && nn(this._element, this._startStyles, this._initialStyles), this._state = 1)
                    }
                    finish() {
                        this.start(), this._state < 2 && (nn(this._element, this._initialStyles), this._endStyles && (nn(this._element, this._endStyles), this._endStyles = null), this._state = 1)
                    }
                    destroy() {
                        this.finish(), this._state < 3 && (D.initialStylesByElement.delete(this._element), this._startStyles && (bt(this._element, this._startStyles), this._endStyles = null), this._endStyles && (bt(this._element, this._endStyles), this._endStyles = null), nn(this._element, this._initialStyles), this._state = 3)
                    }
                }
                return D.initialStylesByElement = new WeakMap, D
            })();

            function Es(D) {
                let o = null;
                const l = Object.keys(D);
                for (let p = 0; p < l.length; p++) {
                    const S = l[p];
                    gn(S) && (o = o || {}, o[S] = D[S])
                }
                return o
            }

            function gn(D) {
                return "display" === D || "position" === D
            }
            class Ls {
                constructor(o, l, p, S) {
                    this.element = o, this.keyframes = l, this.options = p, this._specialStyles = S, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = p.duration, this._delay = p.delay || 0, this.time = this._duration + this._delay
                }
                _onFinish() {
                    this._finished || (this._finished = !0, this._onDoneFns.forEach(o => o()), this._onDoneFns = [])
                }
                init() {
                    this._buildPlayer(), this._preparePlayerBeforeStart()
                }
                _buildPlayer() {
                    if (this._initialized) return;
                    this._initialized = !0;
                    const o = this.keyframes;
                    this.domPlayer = this._triggerWebAnimation(this.element, o, this.options), this._finalKeyframe = o.length ? o[o.length - 1] : {}, this.domPlayer.addEventListener("finish", () => this._onFinish())
                }
                _preparePlayerBeforeStart() {
                    this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
                }
                _triggerWebAnimation(o, l, p) {
                    return o.animate(l, p)
                }
                onStart(o) {
                    this._onStartFns.push(o)
                }
                onDone(o) {
                    this._onDoneFns.push(o)
                }
                onDestroy(o) {
                    this._onDestroyFns.push(o)
                }
                play() {
                    this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(o => o()), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play()
                }
                pause() {
                    this.init(), this.domPlayer.pause()
                }
                finish() {
                    this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish()
                }
                reset() {
                    this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1
                }
                _resetDomPlayerState() {
                    this.domPlayer && this.domPlayer.cancel()
                }
                restart() {
                    this.reset(), this.play()
                }
                hasStarted() {
                    return this._started
                }
                destroy() {
                    this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(o => o()), this._onDestroyFns = [])
                }
                setPosition(o) {
                    void 0 === this.domPlayer && this.init(), this.domPlayer.currentTime = o * this.time
                }
                getPosition() {
                    return this.domPlayer.currentTime / this.time
                }
                get totalTime() {
                    return this._delay + this._duration
                }
                beforeDestroy() {
                    const o = {};
                    if (this.hasStarted()) {
                        const l = this._finalKeyframe;
                        Object.keys(l).forEach(p => {
                            "offset" != p && (o[p] = this._finished ? l[p] : Qe(this.element, p))
                        })
                    }
                    this.currentSnapshot = o
                }
                triggerCallback(o) {
                    const l = "start" == o ? this._onStartFns : this._onDoneFns;
                    l.forEach(p => p()), l.length = 0
                }
            }
            class pi {
                validateStyleProperty(o) {
                    return ir(o)
                }
                matchesElement(o, l) {
                    return !1
                }
                containsElement(o, l) {
                    return xn(o, l)
                }
                getParentElement(o) {
                    return tt(o)
                }
                query(o, l, p) {
                    return sr(o, l, p)
                }
                computeStyle(o, l, p) {
                    return window.getComputedStyle(o)[l]
                }
                animate(o, l, p, S, F, k = []) {
                    const G = {
                        duration: p,
                        delay: S,
                        fill: 0 == S ? "both" : "forwards"
                    };
                    F && (G.easing = F);
                    const ee = {},
                        Ee = k.filter(Ge => Ge instanceof Ls);
                    (function $t(D, o) {
                        return 0 === D || 0 === o
                    })(p, S) && Ee.forEach(Ge => {
                        let ut = Ge.currentSnapshot;
                        Object.keys(ut).forEach(je => ee[je] = ut[je])
                    }), l = function Ln(D, o, l) {
                        const p = Object.keys(l);
                        if (p.length && o.length) {
                            let F = o[0],
                                k = [];
                            if (p.forEach(V => {
                                    F.hasOwnProperty(V) || k.push(V), F[V] = l[V]
                                }), k.length)
                                for (var S = 1; S < o.length; S++) {
                                    let V = o[S];
                                    k.forEach(function(G) {
                                        V[G] = Qe(D, G)
                                    })
                                }
                        }
                        return o
                    }(o, l = l.map(Ge => St(Ge, !1)), ee);
                    const Oe = function ae(D, o) {
                        let l = null,
                            p = null;
                        return Array.isArray(o) && o.length ? (l = Es(o[0]), o.length > 1 && (p = Es(o[o.length - 1]))) : o && (l = Es(o)), l || p ? new pt(D, l, p) : null
                    }(o, l);
                    return new Ls(o, l, G, Oe)
                }
            }
            var Qn = L(69808);
            let bs = (() => {
                class D extends Ce {
                    constructor(l, p) {
                        super(), this._nextAnimationId = 0, this._renderer = l.createRenderer(p.body, {
                            id: "0",
                            encapsulation: O.ifc.None,
                            styles: [],
                            data: {
                                animation: []
                            }
                        })
                    }
                    build(l) {
                        const p = this._nextAnimationId.toString();
                        this._nextAnimationId++;
                        const S = Array.isArray(l) ? q(l) : l;
                        return Ki(this._renderer, null, p, "register", [S]), new qi(p, this._renderer)
                    }
                }
                return D.\u0275fac = function(l) {
                    return new(l || D)(O.LFG(O.FYo), O.LFG(Qn.K0))
                }, D.\u0275prov = O.Yz7({
                    token: D,
                    factory: D.\u0275fac
                }), D
            })();
            class qi extends class re {} {
                constructor(o, l) {
                    super(), this._id = o, this._renderer = l
                }
                create(o, l) {
                    return new Fo(this._id, o, l || {}, this._renderer)
                }
            }
            class Fo {
                constructor(o, l, p, S) {
                    this.id = o, this.element = l, this._renderer = S, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", p)
                }
                _listen(o, l) {
                    return this._renderer.listen(this.element, `@@${this.id}:${o}`, l)
                }
                _command(o, ...l) {
                    return Ki(this._renderer, this.element, this.id, o, l)
                }
                onDone(o) {
                    this._listen("done", o)
                }
                onStart(o) {
                    this._listen("start", o)
                }
                onDestroy(o) {
                    this._listen("destroy", o)
                }
                init() {
                    this._command("init")
                }
                hasStarted() {
                    return this._started
                }
                play() {
                    this._command("play"), this._started = !0
                }
                pause() {
                    this._command("pause")
                }
                restart() {
                    this._command("restart")
                }
                finish() {
                    this._command("finish")
                }
                destroy() {
                    this._command("destroy")
                }
                reset() {
                    this._command("reset"), this._started = !1
                }
                setPosition(o) {
                    this._command("setPosition", o)
                }
                getPosition() {
                    var o, l;
                    return null !== (l = null === (o = this._renderer.engine.players[+this.id]) || void 0 === o ? void 0 : o.getPosition()) && void 0 !== l ? l : 0
                }
            }

            function Ki(D, o, l, p, S) {
                return D.setProperty(o, `@@${l}:${p}`, S)
            }
            const ms = "@.disabled";
            let jn = (() => {
                class D {
                    constructor(l, p, S) {
                        this.delegate = l, this.engine = p, this._zone = S, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), p.onRemovalComplete = (F, k) => {
                            const V = null == k ? void 0 : k.parentNode(F);
                            V && k.removeChild(V, F)
                        }
                    }
                    createRenderer(l, p) {
                        const F = this.delegate.createRenderer(l, p);
                        if (!(l && p && p.data && p.data.animation)) {
                            let Ee = this._rendererCache.get(F);
                            return Ee || (Ee = new Gr("", F, this.engine), this._rendererCache.set(F, Ee)), Ee
                        }
                        const k = p.id,
                            V = p.id + "-" + this._currentId;
                        this._currentId++, this.engine.register(V, l);
                        const G = Ee => {
                            Array.isArray(Ee) ? Ee.forEach(G) : this.engine.registerTrigger(k, V, l, Ee.name, Ee)
                        };
                        return p.data.animation.forEach(G), new Ys(this, V, F, this.engine)
                    }
                    begin() {
                        this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
                    }
                    _scheduleCountTask() {
                        this.promise.then(() => {
                            this._microtaskId++
                        })
                    }
                    scheduleListenerCallback(l, p, S) {
                        l >= 0 && l < this._microtaskId ? this._zone.run(() => p(S)) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(() => {
                            this._zone.run(() => {
                                this._animationCallbacksBuffer.forEach(F => {
                                    const [k, V] = F;
                                    k(V)
                                }), this._animationCallbacksBuffer = []
                            })
                        }), this._animationCallbacksBuffer.push([p, S]))
                    }
                    end() {
                        this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(() => {
                            this._scheduleCountTask(), this.engine.flush(this._microtaskId)
                        }), this.delegate.end && this.delegate.end()
                    }
                    whenRenderingDone() {
                        return this.engine.whenRenderingDone()
                    }
                }
                return D.\u0275fac = function(l) {
                    return new(l || D)(O.LFG(O.FYo), O.LFG(Ti), O.LFG(O.R0b))
                }, D.\u0275prov = O.Yz7({
                    token: D,
                    factory: D.\u0275fac
                }), D
            })();
            class Gr {
                constructor(o, l, p) {
                    this.namespaceId = o, this.delegate = l, this.engine = p, this.destroyNode = this.delegate.destroyNode ? S => l.destroyNode(S) : null
                }
                get data() {
                    return this.delegate.data
                }
                destroy() {
                    this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy()
                }
                createElement(o, l) {
                    return this.delegate.createElement(o, l)
                }
                createComment(o) {
                    return this.delegate.createComment(o)
                }
                createText(o) {
                    return this.delegate.createText(o)
                }
                appendChild(o, l) {
                    this.delegate.appendChild(o, l), this.engine.onInsert(this.namespaceId, l, o, !1)
                }
                insertBefore(o, l, p, S = !0) {
                    this.delegate.insertBefore(o, l, p), this.engine.onInsert(this.namespaceId, l, o, S)
                }
                removeChild(o, l, p) {
                    this.engine.onRemove(this.namespaceId, l, this.delegate, p)
                }
                selectRootElement(o, l) {
                    return this.delegate.selectRootElement(o, l)
                }
                parentNode(o) {
                    return this.delegate.parentNode(o)
                }
                nextSibling(o) {
                    return this.delegate.nextSibling(o)
                }
                setAttribute(o, l, p, S) {
                    this.delegate.setAttribute(o, l, p, S)
                }
                removeAttribute(o, l, p) {
                    this.delegate.removeAttribute(o, l, p)
                }
                addClass(o, l) {
                    this.delegate.addClass(o, l)
                }
                removeClass(o, l) {
                    this.delegate.removeClass(o, l)
                }
                setStyle(o, l, p, S) {
                    this.delegate.setStyle(o, l, p, S)
                }
                removeStyle(o, l, p) {
                    this.delegate.removeStyle(o, l, p)
                }
                setProperty(o, l, p) {
                    "@" == l.charAt(0) && l == ms ? this.disableAnimations(o, !!p) : this.delegate.setProperty(o, l, p)
                }
                setValue(o, l) {
                    this.delegate.setValue(o, l)
                }
                listen(o, l, p) {
                    return this.delegate.listen(o, l, p)
                }
                disableAnimations(o, l) {
                    this.engine.disableAnimations(o, l)
                }
            }
            class Ys extends Gr {
                constructor(o, l, p, S) {
                    super(l, p, S), this.factory = o, this.namespaceId = l
                }
                setProperty(o, l, p) {
                    "@" == l.charAt(0) ? "." == l.charAt(1) && l == ms ? this.disableAnimations(o, p = void 0 === p || !!p) : this.engine.process(this.namespaceId, o, l.substr(1), p) : this.delegate.setProperty(o, l, p)
                }
                listen(o, l, p) {
                    if ("@" == l.charAt(0)) {
                        const S = function Qi(D) {
                            switch (D) {
                                case "body":
                                    return document.body;
                                case "document":
                                    return document;
                                case "window":
                                    return window;
                                default:
                                    return D
                            }
                        }(o);
                        let F = l.substr(1),
                            k = "";
                        return "@" != F.charAt(0) && ([F, k] = function Sr(D) {
                            const o = D.indexOf(".");
                            return [D.substring(0, o), D.substr(o + 1)]
                        }(F)), this.engine.listen(this.namespaceId, S, F, k, V => {
                            this.factory.scheduleListenerCallback(V._data || -1, p, V)
                        })
                    }
                    return this.delegate.listen(o, l, p)
                }
            }
            let No = (() => {
                class D extends Ti {
                    constructor(l, p, S) {
                        super(l.body, p, S)
                    }
                    ngOnDestroy() {
                        this.flush()
                    }
                }
                return D.\u0275fac = function(l) {
                    return new(l || D)(O.LFG(Qn.K0), O.LFG(hn), O.LFG(Hr))
                }, D.\u0275prov = O.Yz7({
                    token: D,
                    factory: D.\u0275fac
                }), D
            })();
            const qs = new O.OlP("AnimationModuleType"),
                Ms = [{
                    provide: Ce,
                    useClass: bs
                }, {
                    provide: Hr,
                    useFactory: function ks() {
                        return new zi
                    }
                }, {
                    provide: Ti,
                    useClass: No
                }, {
                    provide: O.FYo,
                    useFactory: function Ss(D, o, l) {
                        return new jn(D, o, l)
                    },
                    deps: [g.se, Ti, O.R0b]
                }],
                Ii = [{
                    provide: hn,
                    useFactory: () => new pi
                }, {
                    provide: qs,
                    useValue: "BrowserAnimations"
                }, ...Ms],
                Ks = [{
                    provide: hn,
                    useClass: Kr
                }, {
                    provide: qs,
                    useValue: "NoopAnimations"
                }, ...Ms];
            let Oi = (() => {
                class D {
                    static withConfig(l) {
                        return {
                            ngModule: D,
                            providers: l.disableAnimations ? Ks : Ii
                        }
                    }
                }
                return D.\u0275fac = function(l) {
                    return new(l || D)
                }, D.\u0275mod = O.oAB({
                    type: D
                }), D.\u0275inj = O.cJS({
                    providers: Ii,
                    imports: [g.b2]
                }), D
            })();
            var Mr = L(69414);
            const Qs = [{
                path: "",
                redirectTo: "home",
                pathMatch: "full"
            }, {
                path: "home",
                component: (() => {
                    class D {
                        constructor(l, p) {
                            this.titleService = l, this.metaService = p
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "A personal web development project where I create and test random things"
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "index, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "index, follow"
                            })
                        }
                    }
                    return D.\u0275fac = function(l) {
                        return new(l || D)(O.Y36(g.Dx), O.Y36(g.h_))
                    }, D.\u0275cmp = O.Xpm({
                        type: D,
                        selectors: [
                            ["app-home"]
                        ],
                        decls: 17,
                        vars: 0,
                        consts: [
                            [1, "contentPage"],
                            [1, "invisible"]
                        ],
                        template: function(l, p) {
                            1 & l && (O.TgZ(0, "div", 0)(1, "h2"), O._uU(2, "Home"), O.qZA(), O.TgZ(3, "p"), O._uU(4, "Hello there! "), O.TgZ(5, "span", 1), O._uU(6, "General Kenobi."), O.qZA()(), O.TgZ(7, "p"), O._uU(8, "Welcome to the place where I create random things and experiment with stuff."), O.qZA(), O.TgZ(9, "p"), O._uU(10, "Some of the things you can find here are various calculators, trackers and more that I create for games that I enjoy playing. These are created to make mine and other people's lives a bit easier."), O.qZA(), O.TgZ(11, "p"), O._uU(12, "Some info about me:"), O._UZ(13, "br"), O._uU(14, " I love programming and experimenting with new things."), O._UZ(15, "br"), O._uU(16, " My development preferences are C# and Angular which explains why this site is made with Angular. Designing a user interface is not one of my strong points so you may run into some less optimal design choices."), O.qZA()())
                        },
                        styles: [""]
                    }), D
                })()
            }, {
                path: "about",
                component: (() => {
                    class D {
                        constructor(l, p) {
                            this.titleService = l, this.metaService = p
                        }
                        ngOnInit() {
                            this.titleService.setTitle("About | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "The about section of my web development project where I create and test random things"
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "index, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "index, follow"
                            })
                        }
                    }
                    return D.\u0275fac = function(l) {
                        return new(l || D)(O.Y36(g.Dx), O.Y36(g.h_))
                    }, D.\u0275cmp = O.Xpm({
                        type: D,
                        selectors: [
                            ["app-about"]
                        ],
                        decls: 3,
                        vars: 0,
                        consts: [
                            [1, "contentPage"]
                        ],
                        template: function(l, p) {
                            1 & l && (O.TgZ(0, "div", 0)(1, "p"), O._uU(2, " The empty about page which might get removed/renamed. "), O.qZA()())
                        },
                        styles: [""]
                    }), D
                })()
            }, {
                path: "games/maplestory/home",
                loadChildren: () => L.e(626).then(L.bind(L, 5626)).then(D => D.MaplestoryHomeModule)
            }, {
                path: "games/maplestory/arcane-symbols",
                loadChildren: () => L.e(578).then(L.bind(L, 93578)).then(D => D.MaplestoryArcaneSymbolsModule)
            }, {
                path: "games/maplestory/sacred-symbols",
                loadChildren: () => L.e(636).then(L.bind(L, 94636)).then(D => D.MaplestorySacredSymbolsModule)
            }, {
                path: "games/maplestory/item-flames",
                loadChildren: () => L.e(104).then(L.bind(L, 13104)).then(D => D.MaplestoryItemFlameCalculatorModule)
            }, {
                path: "games/maplestory/weapon-flame",
                loadChildren: () => L.e(937).then(L.bind(L, 73937)).then(D => D.MaplestoryWeaponFlameCalculatorModule)
            }, {
                path: "games/maplestory/settings",
                loadChildren: () => L.e(987).then(L.bind(L, 54987)).then(D => D.MaplestorySettingsModule)
            }, {
                path: "games/maplestory/dailies",
                loadChildren: () => Promise.all([L.e(907), L.e(704)]).then(L.bind(L, 38704)).then(D => D.MaplestoryDailiesV3Module)
            }, {
                path: "games/maplestory/weeklies",
                loadChildren: () => Promise.all([L.e(907), L.e(913)]).then(L.bind(L, 91913)).then(D => D.MaplestoryWeekliesV3Module)
            }, {
                path: "games/overwatch/home",
                loadChildren: () => Promise.all([L.e(592), L.e(538)]).then(L.bind(L, 57538)).then(D => D.OverwatchHomeModule)
            }, {
                path: "games/overwatch/random-hero-selector",
                loadChildren: () => Promise.all([L.e(592), L.e(943)]).then(L.bind(L, 20943)).then(D => D.OverwatchRandomHeroSelectorModule)
            }, {
                path: "hidden",
                loadChildren: () => Promise.all([L.e(592), L.e(900)]).then(L.bind(L, 19900)).then(D => D.HiddenHomeModule)
            }, {
                path: "hidden/timer",
                loadChildren: () => Promise.all([L.e(592), L.e(631)]).then(L.bind(L, 55631)).then(D => D.HiddenTimerModule)
            }, {
                path: "hidden/stopwatch",
                loadChildren: () => Promise.all([L.e(592), L.e(719)]).then(L.bind(L, 25719)).then(D => D.HiddenStopwatchModule)
            }, {
                path: "hidden/binary-translator",
                loadChildren: () => Promise.all([L.e(592), L.e(200)]).then(L.bind(L, 86200)).then(D => D.HiddenBinaryTranslatorModule)
            }, {
                path: "hidden/hexrgb-converter",
                loadChildren: () => Promise.all([L.e(592), L.e(79)]).then(L.bind(L, 13079)).then(D => D.HiddenHexRGBConverterModule)
            }, {
                path: "hidden/palette-generator",
                loadChildren: () => Promise.all([L.e(592), L.e(473)]).then(L.bind(L, 97473)).then(D => D.HiddenPaletteGeneratorModule)
            }, {
                path: "misc/skribbl",
                loadChildren: () => L.e(886).then(L.bind(L, 95886)).then(D => D.MiscSkribblModule)
            }, {
                path: "**",
                redirectTo: "404",
                pathMatch: "full"
            }, {
                path: "404",
                component: (() => {
                    class D {
                        constructor(l, p, S) {
                            this.router = l, this.titleService = p, this.metaService = S, this.darkMode = !0
                        }
                        ngOnInit() {
                            this.titleService.setTitle("404 | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "Random Stuff 404 page."
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "noindex, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "noindex, follow"
                            })
                        }
                    }
                    return D.\u0275fac = function(l) {
                        return new(l || D)(O.Y36(Mr.F0), O.Y36(g.Dx), O.Y36(g.h_))
                    }, D.\u0275cmp = O.Xpm({
                        type: D,
                        selectors: [
                            ["app-not-found"]
                        ],
                        decls: 16,
                        vars: 1,
                        consts: [
                            ["id", "notfound"],
                            [1, "notfound-bg"],
                            [1, "notfound"],
                            [1, "notfound-404"],
                            [3, "routerLink"]
                        ],
                        template: function(l, p) {
                            1 & l && (O.TgZ(0, "div", 0)(1, "div", 1), O._UZ(2, "div")(3, "div")(4, "div")(5, "div"), O.qZA(), O.TgZ(6, "div", 2)(7, "div", 3)(8, "h1"), O._uU(9, "404"), O.qZA()(), O.TgZ(10, "h2"), O._uU(11, "Page Not Found"), O.qZA(), O.TgZ(12, "p"), O._uU(13, "The page you are looking for might have been removed had its name changed or is temporarily unavailable."), O.qZA(), O.TgZ(14, "a", 4), O._uU(15, "Homepage"), O.qZA()()()), 2 & l && (O.xp6(14), O.Q6J("routerLink", "/home"))
                        },
                        directives: [Mr.yS],
                        styles: ['body[_ngcontent-%COMP%]{padding:0;margin:0}#notfound[_ngcontent-%COMP%]{position:relative;height:100vh}#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}#notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden}#notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;width:1px;background-color:#696969}#notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){left:20%}#notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){left:40%}#notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){left:60%}#notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){left:80%}#notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0px;left:-.5px;transform:translateY(-160px);height:160px;width:2px;background-color:#ff9f34}@keyframes drop{90%{height:20px}to{height:160px;transform:translateY(calc(100vh + 160px))}}#notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1):after{animation:drop 3s infinite linear;animation-delay:.2s}#notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2):after{animation:drop 2s infinite linear;animation-delay:.7s}#notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3):after{animation:drop 3s infinite linear;animation-delay:.9s}#notfound[_ngcontent-%COMP%]   .notfound-bg[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4):after{animation:drop 2s infinite linear;animation-delay:1.2s}.notfound[_ngcontent-%COMP%]{max-width:520px;width:100%;text-align:center}.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]{height:210px;line-height:210px}.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Oswald,sans-serif;font-size:188px;font-weight:700;margin:0;text-shadow:4px 4px 0px #FF9F34}.notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Oswald,sans-serif;font-size:42px;font-weight:700;margin:0;text-transform:uppercase;letter-spacing:1.6px}.notfound[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Lato,sans-serif;color:var(--font-color);font-weight:400;margin-top:20px;margin-bottom:25px}.notfound[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Lato,sans-serif;padding:10px 30px;display:inline-block;color:var(--font-color);font-weight:400;text-transform:uppercase;box-shadow:0 0 0 2px var(--font-color),2px 2px 0 2px #ff9f34;text-decoration:none;transition:.2s all}.notfound[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ff9f34;box-shadow:0 0 0 0 var(--font-color),0 0 0 2px #ff9f34}*[_ngcontent-%COMP%]{box-sizing:border-box}@media only screen and (max-width: 480px){.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]{height:122px;line-height:122px}.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:122px}.notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}}']
                    }), D
                })()
            }];
            let Zs = (() => {
                class D {}
                return D.\u0275fac = function(l) {
                    return new(l || D)
                }, D.\u0275mod = O.oAB({
                    type: D
                }), D.\u0275inj = O.cJS({
                    imports: [
                        [Mr.Bz.forRoot(Qs)], Mr.Bz
                    ]
                }), D
            })();
            var As = L(92198),
                Lo = L(24850),
                ko = L(88325),
                Mn = L(34182);

            function gi(D, o) {
                if (1 & D) {
                    const l = O.EpF();
                    O.TgZ(0, "div", 11), O.NdJ("clickOutside", function() {
                        return O.CHM(l), O.oxw().hideDropDown("games")
                    }), O.TgZ(1, "a", 3)(2, "span"), O._uU(3, "Maplestory"), O.qZA()(), O.TgZ(4, "a", 3)(5, "span"), O._uU(6, "Overwatch"), O.qZA()()()
                }
                if (2 & D) {
                    const l = O.oxw();
                    O.xp6(1), O.Q6J("routerLink", "games/maplestory/home"), O.xp6(1), O.ekj("underline", l.router.isActive("/games/maplestory", !1)), O.xp6(2), O.Q6J("routerLink", "games/overwatch/home"), O.xp6(1), O.ekj("underline", l.router.isActive("/games/overwatch", !1))
                }
            }

            function qt(D, o) {
                if (1 & D) {
                    const l = O.EpF();
                    O.TgZ(0, "div", 12), O.NdJ("clickOutside", function() {
                        return O.CHM(l), O.oxw().hideDropDown("settings")
                    }), O.TgZ(1, "p", 13), O._uU(2, " Dark Mode "), O.TgZ(3, "input", 14), O.NdJ("ngModelChange", function(S) {
                        return O.CHM(l), O.oxw().darkMode = S
                    })("change", function(S) {
                        return O.CHM(l), O.oxw().toggleTheme(S)
                    }), O.qZA(), O._UZ(4, "label", 15), O.qZA()()
                }
                if (2 & D) {
                    const l = O.oxw();
                    O.xp6(3), O.Q6J("ngModel", l.darkMode)
                }
            }
            let Js = (() => {
                class D {
                    constructor(l) {
                        this.router = l, this.showGamesDropDown = !1, this.showSettingsDropDown = !1, this.darkMode = !0
                    }
                    ngOnInit() {
                        const l = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;
                        l && (document.documentElement.setAttribute("data-theme", l), "light" === l && (this.darkMode = !1))
                    }
                    toggleTheme() {
                        this.darkMode ? (document.documentElement.setAttribute("data-theme", "dark"), localStorage.setItem("theme", "dark")) : (document.documentElement.setAttribute("data-theme", "light"), localStorage.setItem("theme", "light"))
                    }
                    showDropDown(l, p) {
                        "games" == p && (this.showGamesDropDown || (this.showGamesDropDown = !0, this.showSettingsDropDown = !1, l.stopPropagation())), "settings" == p && (this.showSettingsDropDown || (this.showSettingsDropDown = !0, this.showGamesDropDown = !1, l.stopPropagation()))
                    }
                    hideDropDown(l) {
                        "games" == l && (this.showGamesDropDown = !1), "settings" == l && (this.showSettingsDropDown = !1)
                    }
                }
                return D.\u0275fac = function(l) {
                    return new(l || D)(O.Y36(Mr.F0))
                }, D.\u0275cmp = O.Xpm({
                    type: D,
                    selectors: [
                        ["app-navigation"]
                    ],
                    decls: 21,
                    vars: 10,
                    consts: [
                        [1, "navbar"],
                        [1, "navbartitle"],
                        [1, "verticalSeparator"],
                        [3, "routerLink"],
                        [1, "dropdown"],
                        [1, "dropbtn", 3, "click"],
                        [1, "fa", "fa-caret-down"],
                        ["class", "dropdown-content", 3, "clickOutside", 4, "ngIf"],
                        [1, "dropdown", "settings"],
                        [1, "fa", "fa-cog", "fa-lg"],
                        ["class", "dropdown-content settings-content", 3, "clickOutside", 4, "ngIf"],
                        [1, "dropdown-content", 3, "clickOutside"],
                        [1, "dropdown-content", "settings-content", 3, "clickOutside"],
                        [1, "settingsp"],
                        ["type", "checkbox", "id", "switch", 3, "ngModel", "ngModelChange", "change"],
                        ["for", "switch"]
                    ],
                    template: function(l, p) {
                        1 & l && (O.TgZ(0, "div", 0)(1, "p", 1), O._uU(2, "Random Stuff"), O.qZA(), O._UZ(3, "div", 2), O.TgZ(4, "a", 3)(5, "span"), O._uU(6, "Home"), O.qZA()(), O.TgZ(7, "a", 3)(8, "span"), O._uU(9, "About"), O.qZA()(), O.TgZ(10, "div", 4)(11, "button", 5), O.NdJ("click", function(F) {
                            return p.showDropDown(F, "games")
                        }), O.TgZ(12, "span"), O._uU(13, " Games "), O._UZ(14, "i", 6), O.qZA()(), O.YNc(15, gi, 7, 6, "div", 7), O.qZA(), O.TgZ(16, "div", 8)(17, "button", 5), O.NdJ("click", function(F) {
                            return p.showDropDown(F, "settings")
                        }), O._UZ(18, "i", 9)(19, "i", 6), O.qZA(), O.YNc(20, qt, 5, 1, "div", 10), O.qZA()()), 2 & l && (O.xp6(4), O.Q6J("routerLink", "home"), O.xp6(1), O.ekj("underline", p.router.isActive("/home", !1)), O.xp6(2), O.Q6J("routerLink", "about"), O.xp6(1), O.ekj("underline", p.router.isActive("/about", !1)), O.xp6(4), O.ekj("underline", p.router.isActive("/games", !1)), O.xp6(3), O.Q6J("ngIf", p.showGamesDropDown), O.xp6(5), O.Q6J("ngIf", p.showSettingsDropDown))
                    },
                    directives: [Mr.yS, Qn.O5, ko._, Mn.Wl, Mn.JJ, Mn.On],
                    styles: ['.navbar[_ngcontent-%COMP%]{overflow:hidden;background-color:var(--navigation-bar-background-color);font-family:Arial,Helvetica,sans-serif}.navbartitle[_ngcontent-%COMP%]{width:203px}.verticalSeparator[_ngcontent-%COMP%]{margin-top:9px;float:left;border-left:1px solid var(--navigation-bar-separator-color);height:36px}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left;font-size:16px;color:var(--navigation-bar-font-color);text-align:center;padding:18px 20px;text-decoration:none}.navbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{float:left;font-size:20px;color:var(--navigation-bar-font-color);text-align:center;margin:0;padding:15px 20px;text-decoration:none}.dropdown[_ngcontent-%COMP%]{float:left;overflow:hidden}.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%]{cursor:pointer;font-size:16px;border:none;outline:none;color:var(--navigation-bar-font-color);padding:18px 20px;background-color:inherit;font-family:inherit;margin:0}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dropbtn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 3px}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--navigation-bar-accent-color)}.underline[_ngcontent-%COMP%]{border-bottom:3px solid var(--navigation-bar-accent-color)}.dropdown-content[_ngcontent-%COMP%]{position:absolute;background-color:var(--navigation-bar-dropdown-color);min-width:160px;box-shadow:0 8px 16px #0003;z-index:100}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:none;color:var(--navigation-bar-font-color);padding:12px 16px;text-decoration:none;display:block;text-align:left}.dropdown-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{float:none;color:var(--navigation-bar-font-color);margin:0;padding:12px 16px;text-decoration:none;display:block;text-align:left}.settings[_ngcontent-%COMP%]{float:right}.settings[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.settings-content[_ngcontent-%COMP%]{right:0}.settings[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%]{color:var(--navigation-bar-settings-icon-font-color)}.settings[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:2px}input[type=checkbox][_ngcontent-%COMP%]{height:0;width:0;visibility:hidden}label[_ngcontent-%COMP%]{cursor:pointer;text-indent:-9999px;width:35px;height:17px;background:var(--toggleswitch-off-background-color);display:block;border-radius:3px;position:relative;float:right}label[_ngcontent-%COMP%]:after{content:"";position:absolute;top:2px;left:2px;width:13px;height:13px;background:var(--toggleswitch-slider-color);border-radius:3px;transition:.3s}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--toggleswitch-on-background-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{left:calc(100% - 2px);transform:translate(-100%)}label[_ngcontent-%COMP%]:active:after{width:35px}@media only screen and (max-width: 720px){.verticalSeparator[_ngcontent-%COMP%], .navbartitle[_ngcontent-%COMP%]{display:none}}']
                }), D
            })();

            function Vo(D, o) {
                1 & D && O._UZ(0, "app-navigation")
            }
            let Bo = (() => {
                class D {
                    constructor(l) {
                        this.router = l, this.lastInputs = [], this.konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"], this.router.events.subscribe(p => {
                            p instanceof Mr.m2 && gtag("config", "UA-174027920-1", {
                                page_path: p.urlAfterRedirects
                            })
                        }), sessionStorage.getItem("redirect") && l.navigateByUrl(sessionStorage.getItem("redirect"))
                    }
                    ngOnInit() {
                        this.router.events.pipe((0, As.h)(l => l instanceof Mr.m2), (0, Lo.U)(l => this.url = l.urlAfterRedirects)).subscribe()
                    }
                    handleKeyboardEvent(l) {
                        l.repeat || "Unidentified" != l.key && (this.lastInputs.push(l.key), this.lastInputs.length > this.konamiCode.length && this.lastInputs.shift(), this.lastInputs.join() == this.konamiCode.join() && this.router.navigateByUrl("/hidden"))
                    }
                }
                return D.\u0275fac = function(l) {
                    return new(l || D)(O.Y36(Mr.F0))
                }, D.\u0275cmp = O.Xpm({
                    type: D,
                    selectors: [
                        ["app-root"]
                    ],
                    hostBindings: function(l, p) {
                        1 & l && O.NdJ("keydown", function(F) {
                            return p.handleKeyboardEvent(F)
                        }, !1, O.evT)
                    },
                    decls: 2,
                    vars: 1,
                    consts: [
                        [4, "ngIf"]
                    ],
                    template: function(l, p) {
                        1 & l && (O.YNc(0, Vo, 1, 0, "app-navigation", 0), O._UZ(1, "router-outlet")), 2 & l && O.Q6J("ngIf", "/404" !== p.url)
                    },
                    directives: [Qn.O5, Js, Mr.lC],
                    styles: [""]
                }), D
            })();
            var jo = L(75326);
            let Ho = (() => {
                class D {}
                return D.\u0275fac = function(l) {
                    return new(l || D)
                }, D.\u0275mod = O.oAB({
                    type: D,
                    bootstrap: [Bo]
                }), D.\u0275inj = O.cJS({
                    providers: [],
                    imports: [
                        [g.b2, Oi, Zs, jo.m]
                    ]
                }), D
            })();
            (0, O.G48)(), g.q6().bootstrapModule(Ho)
        },
        51869: (ot, pe, L) => {
            L.d(pe, {
                d: () => O
            });
            var g = L(43489);
            class O extends g.L {
                constructor(Ce, re, ie) {
                    super(), this.parent = Ce, this.outerValue = re, this.outerIndex = ie, this.index = 0
                }
                _next(Ce) {
                    this.parent.notifyNext(this.outerValue, Ce, this.outerIndex, this.index++, this)
                }
                _error(Ce) {
                    this.parent.notifyError(Ce, this), this.unsubscribe()
                }
                _complete() {
                    this.parent.notifyComplete(this), this.unsubscribe()
                }
            }
        },
        32916: (ot, pe, L) => {
            L.d(pe, {
                y: () => Y
            });
            var g = L(43489),
                De = L(57668),
                Ce = L(73292),
                ie = L(93821),
                ve = L(35379);
            var q = L(92830);
            let Y = (() => {
                class oe {
                    constructor(me) {
                        this._isScalar = !1, me && (this._subscribe = me)
                    }
                    lift(me) {
                        const ne = new oe;
                        return ne.source = this, ne.operator = me, ne
                    }
                    subscribe(me, ne, Ze) {
                        const {
                            operator: ft
                        } = this, Re = function re(oe, ce, me) {
                            if (oe) {
                                if (oe instanceof g.L) return oe;
                                if (oe[De.b]) return oe[De.b]()
                            }
                            return oe || ce || me ? new g.L(oe, ce, me) : new g.L(Ce.c)
                        }(me, ne, Ze);
                        if (Re.add(ft ? ft.call(Re, this.source) : this.source || q.v.useDeprecatedSynchronousErrorHandling && !Re.syncErrorThrowable ? this._subscribe(Re) : this._trySubscribe(Re)), q.v.useDeprecatedSynchronousErrorHandling && Re.syncErrorThrowable && (Re.syncErrorThrowable = !1, Re.syncErrorThrown)) throw Re.syncErrorValue;
                        return Re
                    }
                    _trySubscribe(me) {
                        try {
                            return this._subscribe(me)
                        } catch (ne) {
                            q.v.useDeprecatedSynchronousErrorHandling && (me.syncErrorThrown = !0, me.syncErrorValue = ne),
                                function O(oe) {
                                    for (; oe;) {
                                        const {
                                            closed: ce,
                                            destination: me,
                                            isStopped: ne
                                        } = oe;
                                        if (ce || ne) return !1;
                                        oe = me && me instanceof g.L ? me : null
                                    }
                                    return !0
                                }(me) ? me.error(ne) : console.warn(ne)
                        }
                    }
                    forEach(me, ne) {
                        return new(ne = Q(ne))((Ze, ft) => {
                            let Re;
                            Re = this.subscribe(be => {
                                try {
                                    me(be)
                                } catch (nt) {
                                    ft(nt), Re && Re.unsubscribe()
                                }
                            }, ft, Ze)
                        })
                    }
                    _subscribe(me) {
                        const {
                            source: ne
                        } = this;
                        return ne && ne.subscribe(me)
                    } [ie.L]() {
                        return this
                    }
                    pipe(...me) {
                        return 0 === me.length ? this : function Se(oe) {
                            return 0 === oe.length ? ve.y : 1 === oe.length ? oe[0] : function(me) {
                                return oe.reduce((ne, Ze) => Ze(ne), me)
                            }
                        }(me)(this)
                    }
                    toPromise(me) {
                        return new(me = Q(me))((ne, Ze) => {
                            let ft;
                            this.subscribe(Re => ft = Re, Re => Ze(Re), () => ne(ft))
                        })
                    }
                }
                return oe.create = ce => new oe(ce), oe
            })();

            function Q(oe) {
                if (oe || (oe = q.v.Promise || Promise), !oe) throw new Error("no Promise impl found");
                return oe
            }
        },
        73292: (ot, pe, L) => {
            L.d(pe, {
                c: () => De
            });
            var g = L(92830),
                O = L(22782);
            const De = {
                closed: !0,
                next(Ce) {},
                error(Ce) {
                    if (g.v.useDeprecatedSynchronousErrorHandling) throw Ce;
                    (0, O.z)(Ce)
                },
                complete() {}
            }
        },
        826: (ot, pe, L) => {
            L.d(pe, {
                L: () => O
            });
            var g = L(43489);
            class O extends g.L {
                notifyNext(Ce, re, ie, ve, _e) {
                    this.destination.next(re)
                }
                notifyError(Ce, re) {
                    this.destination.error(Ce)
                }
                notifyComplete(Ce) {
                    this.destination.complete()
                }
            }
        },
        5529: (ot, pe, L) => {
            L.d(pe, {
                xQ: () => _e,
                Yc: () => ve
            });
            var g = L(32916),
                O = L(43489),
                De = L(42654),
                Ce = L(95279);
            class re extends De.w {
                constructor(Y, Q) {
                    super(), this.subject = Y, this.subscriber = Q, this.closed = !1
                }
                unsubscribe() {
                    if (this.closed) return;
                    this.closed = !0;
                    const Y = this.subject,
                        Q = Y.observers;
                    if (this.subject = null, !Q || 0 === Q.length || Y.isStopped || Y.closed) return;
                    const oe = Q.indexOf(this.subscriber); - 1 !== oe && Q.splice(oe, 1)
                }
            }
            var ie = L(57668);
            class ve extends O.L {
                constructor(Y) {
                    super(Y), this.destination = Y
                }
            }
            let _e = (() => {
                class q extends g.y {
                    constructor() {
                        super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
                    } [ie.b]() {
                        return new ve(this)
                    }
                    lift(Q) {
                        const oe = new Se(this, this);
                        return oe.operator = Q, oe
                    }
                    next(Q) {
                        if (this.closed) throw new Ce.N;
                        if (!this.isStopped) {
                            const {
                                observers: oe
                            } = this, ce = oe.length, me = oe.slice();
                            for (let ne = 0; ne < ce; ne++) me[ne].next(Q)
                        }
                    }
                    error(Q) {
                        if (this.closed) throw new Ce.N;
                        this.hasError = !0, this.thrownError = Q, this.isStopped = !0;
                        const {
                            observers: oe
                        } = this, ce = oe.length, me = oe.slice();
                        for (let ne = 0; ne < ce; ne++) me[ne].error(Q);
                        this.observers.length = 0
                    }
                    complete() {
                        if (this.closed) throw new Ce.N;
                        this.isStopped = !0;
                        const {
                            observers: Q
                        } = this, oe = Q.length, ce = Q.slice();
                        for (let me = 0; me < oe; me++) ce[me].complete();
                        this.observers.length = 0
                    }
                    unsubscribe() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }
                    _trySubscribe(Q) {
                        if (this.closed) throw new Ce.N;
                        return super._trySubscribe(Q)
                    }
                    _subscribe(Q) {
                        if (this.closed) throw new Ce.N;
                        return this.hasError ? (Q.error(this.thrownError), De.w.EMPTY) : this.isStopped ? (Q.complete(), De.w.EMPTY) : (this.observers.push(Q), new re(this, Q))
                    }
                    asObservable() {
                        const Q = new g.y;
                        return Q.source = this, Q
                    }
                }
                return q.create = (Y, Q) => new Se(Y, Q), q
            })();
            class Se extends _e {
                constructor(Y, Q) {
                    super(), this.destination = Y, this.source = Q
                }
                next(Y) {
                    const {
                        destination: Q
                    } = this;
                    Q && Q.next && Q.next(Y)
                }
                error(Y) {
                    const {
                        destination: Q
                    } = this;
                    Q && Q.error && this.destination.error(Y)
                }
                complete() {
                    const {
                        destination: Y
                    } = this;
                    Y && Y.complete && this.destination.complete()
                }
                _subscribe(Y) {
                    const {
                        source: Q
                    } = this;
                    return Q ? this.source.subscribe(Y) : De.w.EMPTY
                }
            }
        },
        43489: (ot, pe, L) => {
            L.d(pe, {
                L: () => ve
            });
            var g = L(67043),
                O = L(73292),
                De = L(42654),
                Ce = L(57668),
                re = L(92830),
                ie = L(22782);
            class ve extends De.w {
                constructor(q, Y, Q) {
                    switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                        case 0:
                            this.destination = O.c;
                            break;
                        case 1:
                            if (!q) {
                                this.destination = O.c;
                                break
                            }
                            if ("object" == typeof q) {
                                q instanceof ve ? (this.syncErrorThrowable = q.syncErrorThrowable, this.destination = q, q.add(this)) : (this.syncErrorThrowable = !0, this.destination = new _e(this, q));
                                break
                            }
                            default:
                                this.syncErrorThrowable = !0, this.destination = new _e(this, q, Y, Q)
                    }
                } [Ce.b]() {
                    return this
                }
                static create(q, Y, Q) {
                    const oe = new ve(q, Y, Q);
                    return oe.syncErrorThrowable = !1, oe
                }
                next(q) {
                    this.isStopped || this._next(q)
                }
                error(q) {
                    this.isStopped || (this.isStopped = !0, this._error(q))
                }
                complete() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }
                unsubscribe() {
                    this.closed || (this.isStopped = !0, super.unsubscribe())
                }
                _next(q) {
                    this.destination.next(q)
                }
                _error(q) {
                    this.destination.error(q), this.unsubscribe()
                }
                _complete() {
                    this.destination.complete(), this.unsubscribe()
                }
                _unsubscribeAndRecycle() {
                    const {
                        _parentOrParents: q
                    } = this;
                    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = q, this
                }
            }
            class _e extends ve {
                constructor(q, Y, Q, oe) {
                    super(), this._parentSubscriber = q;
                    let ce, me = this;
                    (0, g.m)(Y) ? ce = Y: Y && (ce = Y.next, Q = Y.error, oe = Y.complete, Y !== O.c && (me = Object.create(Y), (0, g.m)(me.unsubscribe) && this.add(me.unsubscribe.bind(me)), me.unsubscribe = this.unsubscribe.bind(this))), this._context = me, this._next = ce, this._error = Q, this._complete = oe
                }
                next(q) {
                    if (!this.isStopped && this._next) {
                        const {
                            _parentSubscriber: Y
                        } = this;
                        re.v.useDeprecatedSynchronousErrorHandling && Y.syncErrorThrowable ? this.__tryOrSetError(Y, this._next, q) && this.unsubscribe() : this.__tryOrUnsub(this._next, q)
                    }
                }
                error(q) {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: Y
                        } = this, {
                            useDeprecatedSynchronousErrorHandling: Q
                        } = re.v;
                        if (this._error) Q && Y.syncErrorThrowable ? (this.__tryOrSetError(Y, this._error, q), this.unsubscribe()) : (this.__tryOrUnsub(this._error, q), this.unsubscribe());
                        else if (Y.syncErrorThrowable) Q ? (Y.syncErrorValue = q, Y.syncErrorThrown = !0) : (0, ie.z)(q), this.unsubscribe();
                        else {
                            if (this.unsubscribe(), Q) throw q;
                            (0, ie.z)(q)
                        }
                    }
                }
                complete() {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: q
                        } = this;
                        if (this._complete) {
                            const Y = () => this._complete.call(this._context);
                            re.v.useDeprecatedSynchronousErrorHandling && q.syncErrorThrowable ? (this.__tryOrSetError(q, Y), this.unsubscribe()) : (this.__tryOrUnsub(Y), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }
                __tryOrUnsub(q, Y) {
                    try {
                        q.call(this._context, Y)
                    } catch (Q) {
                        if (this.unsubscribe(), re.v.useDeprecatedSynchronousErrorHandling) throw Q;
                        (0, ie.z)(Q)
                    }
                }
                __tryOrSetError(q, Y, Q) {
                    if (!re.v.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        Y.call(this._context, Q)
                    } catch (oe) {
                        return re.v.useDeprecatedSynchronousErrorHandling ? (q.syncErrorValue = oe, q.syncErrorThrown = !0, !0) : ((0, ie.z)(oe), !0)
                    }
                    return !1
                }
                _unsubscribe() {
                    const {
                        _parentSubscriber: q
                    } = this;
                    this._context = null, this._parentSubscriber = null, q.unsubscribe()
                }
            }
        },
        42654: (ot, pe, L) => {
            L.d(pe, {
                w: () => ie
            });
            var g = L(66688),
                O = L(57830),
                De = L(67043);
            const re = (() => {
                function _e(Se) {
                    return Error.call(this), this.message = Se ? `${Se.length} errors occurred during unsubscription:\n${Se.map((q,Y)=>`${Y+1}) ${q.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = Se, this
                }
                return _e.prototype = Object.create(Error.prototype), _e
            })();
            class ie {
                constructor(Se) {
                    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, Se && (this._unsubscribe = Se)
                }
                unsubscribe() {
                    let Se;
                    if (this.closed) return;
                    let {
                        _parentOrParents: q,
                        _unsubscribe: Y,
                        _subscriptions: Q
                    } = this;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, q instanceof ie) q.remove(this);
                    else if (null !== q)
                        for (let oe = 0; oe < q.length; ++oe) q[oe].remove(this);
                    if ((0, De.m)(Y)) try {
                        Y.call(this)
                    } catch (oe) {
                        Se = oe instanceof re ? ve(oe.errors) : [oe]
                    }
                    if ((0, g.k)(Q)) {
                        let oe = -1,
                            ce = Q.length;
                        for (; ++oe < ce;) {
                            const me = Q[oe];
                            if ((0, O.K)(me)) try {
                                me.unsubscribe()
                            } catch (ne) {
                                Se = Se || [], ne instanceof re ? Se = Se.concat(ve(ne.errors)) : Se.push(ne)
                            }
                        }
                    }
                    if (Se) throw new re(Se)
                }
                add(Se) {
                    let q = Se;
                    if (!Se) return ie.EMPTY;
                    switch (typeof Se) {
                        case "function":
                            q = new ie(Se);
                        case "object":
                            if (q === this || q.closed || "function" != typeof q.unsubscribe) return q;
                            if (this.closed) return q.unsubscribe(), q;
                            if (!(q instanceof ie)) {
                                const oe = q;
                                q = new ie, q._subscriptions = [oe]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + Se + " added to Subscription.")
                    }
                    let {
                        _parentOrParents: Y
                    } = q;
                    if (null === Y) q._parentOrParents = this;
                    else if (Y instanceof ie) {
                        if (Y === this) return q;
                        q._parentOrParents = [Y, this]
                    } else {
                        if (-1 !== Y.indexOf(this)) return q;
                        Y.push(this)
                    }
                    const Q = this._subscriptions;
                    return null === Q ? this._subscriptions = [q] : Q.push(q), q
                }
                remove(Se) {
                    const q = this._subscriptions;
                    if (q) {
                        const Y = q.indexOf(Se); - 1 !== Y && q.splice(Y, 1)
                    }
                }
            }
            var _e;

            function ve(_e) {
                return _e.reduce((Se, q) => Se.concat(q instanceof re ? q.errors : q), [])
            }
            ie.EMPTY = ((_e = new ie).closed = !0, _e)
        },
        92830: (ot, pe, L) => {
            L.d(pe, {
                v: () => O
            });
            let g = !1;
            const O = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(De) {
                    if (De) {
                        const Ce = new Error;
                        console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + Ce.stack)
                    } else g && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                    g = De
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return g
                }
            }
        },
        71762: (ot, pe, L) => {
            L.d(pe, {
                N: () => ie,
                c: () => re
            });
            var g = L(5529),
                O = L(32916),
                De = L(42654),
                Ce = L(74327);
            class re extends O.y {
                constructor(Y, Q) {
                    super(), this.source = Y, this.subjectFactory = Q, this._refCount = 0, this._isComplete = !1
                }
                _subscribe(Y) {
                    return this.getSubject().subscribe(Y)
                }
                getSubject() {
                    const Y = this._subject;
                    return (!Y || Y.isStopped) && (this._subject = this.subjectFactory()), this._subject
                }
                connect() {
                    let Y = this._connection;
                    return Y || (this._isComplete = !1, Y = this._connection = new De.w, Y.add(this.source.subscribe(new ve(this.getSubject(), this))), Y.closed && (this._connection = null, Y = De.w.EMPTY)), Y
                }
                refCount() {
                    return (0, Ce.x)()(this)
                }
            }
            const ie = (() => {
                const q = re.prototype;
                return {
                    operator: {
                        value: null
                    },
                    _refCount: {
                        value: 0,
                        writable: !0
                    },
                    _subject: {
                        value: null,
                        writable: !0
                    },
                    _connection: {
                        value: null,
                        writable: !0
                    },
                    _subscribe: {
                        value: q._subscribe
                    },
                    _isComplete: {
                        value: q._isComplete,
                        writable: !0
                    },
                    getSubject: {
                        value: q.getSubject
                    },
                    connect: {
                        value: q.connect
                    },
                    refCount: {
                        value: q.refCount
                    }
                }
            })();
            class ve extends g.Yc {
                constructor(Y, Q) {
                    super(Y), this.connectable = Q
                }
                _error(Y) {
                    this._unsubscribe(), super._error(Y)
                }
                _complete() {
                    this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
                }
                _unsubscribe() {
                    const Y = this.connectable;
                    if (Y) {
                        this.connectable = null;
                        const Q = Y._connection;
                        Y._refCount = 0, Y._subject = null, Y._connection = null, Q && Q.unsubscribe()
                    }
                }
            }
        },
        5254: (ot, pe, L) => {
            L.d(pe, {
                D: () => me
            });
            var g = L(32916),
                O = L(59249),
                De = L(42654),
                Ce = L(93821),
                ve = L(66454),
                _e = L(5430),
                Y = L(98955),
                Q = L(58515);

            function me(ne, Ze) {
                return Ze ? function ce(ne, Ze) {
                    if (null != ne) {
                        if (function q(ne) {
                                return ne && "function" == typeof ne[Ce.L]
                            }(ne)) return function re(ne, Ze) {
                            return new g.y(ft => {
                                const Re = new De.w;
                                return Re.add(Ze.schedule(() => {
                                    const be = ne[Ce.L]();
                                    Re.add(be.subscribe({
                                        next(nt) {
                                            Re.add(Ze.schedule(() => ft.next(nt)))
                                        },
                                        error(nt) {
                                            Re.add(Ze.schedule(() => ft.error(nt)))
                                        },
                                        complete() {
                                            Re.add(Ze.schedule(() => ft.complete()))
                                        }
                                    }))
                                })), Re
                            })
                        }(ne, Ze);
                        if ((0, Y.t)(ne)) return function ie(ne, Ze) {
                            return new g.y(ft => {
                                const Re = new De.w;
                                return Re.add(Ze.schedule(() => ne.then(be => {
                                    Re.add(Ze.schedule(() => {
                                        ft.next(be), Re.add(Ze.schedule(() => ft.complete()))
                                    }))
                                }, be => {
                                    Re.add(Ze.schedule(() => ft.error(be)))
                                }))), Re
                            })
                        }(ne, Ze);
                        if ((0, Q.z)(ne)) return (0, ve.r)(ne, Ze);
                        if (function oe(ne) {
                                return ne && "function" == typeof ne[_e.hZ]
                            }(ne) || "string" == typeof ne) return function Se(ne, Ze) {
                            if (!ne) throw new Error("Iterable cannot be null");
                            return new g.y(ft => {
                                const Re = new De.w;
                                let be;
                                return Re.add(() => {
                                    be && "function" == typeof be.return && be.return()
                                }), Re.add(Ze.schedule(() => {
                                    be = ne[_e.hZ](), Re.add(Ze.schedule(function() {
                                        if (ft.closed) return;
                                        let nt, cn;
                                        try {
                                            const qe = be.next();
                                            nt = qe.value, cn = qe.done
                                        } catch (qe) {
                                            return void ft.error(qe)
                                        }
                                        cn ? ft.complete() : (ft.next(nt), this.schedule())
                                    }))
                                })), Re
                            })
                        }(ne, Ze)
                    }
                    throw new TypeError((null !== ne && typeof ne || ne) + " is not observable")
                }(ne, Ze) : ne instanceof g.y ? ne : new g.y((0, O.s)(ne))
            }
        },
        33009: (ot, pe, L) => {
            L.d(pe, {
                n: () => Ce
            });
            var g = L(32916),
                O = L(13650),
                De = L(66454);

            function Ce(re, ie) {
                return ie ? (0, De.r)(re, ie) : new g.y((0, O.V)(re))
            }
        },
        92198: (ot, pe, L) => {
            L.d(pe, {
                h: () => O
            });
            var g = L(43489);

            function O(re, ie) {
                return function(_e) {
                    return _e.lift(new De(re, ie))
                }
            }
            class De {
                constructor(ie, ve) {
                    this.predicate = ie, this.thisArg = ve
                }
                call(ie, ve) {
                    return ve.subscribe(new Ce(ie, this.predicate, this.thisArg))
                }
            }
            class Ce extends g.L {
                constructor(ie, ve, _e) {
                    super(ie), this.predicate = ve, this.thisArg = _e, this.count = 0
                }
                _next(ie) {
                    let ve;
                    try {
                        ve = this.predicate.call(this.thisArg, ie, this.count++)
                    } catch (_e) {
                        return void this.destination.error(_e)
                    }
                    ve && this.destination.next(ie)
                }
            }
        },
        24850: (ot, pe, L) => {
            L.d(pe, {
                U: () => O
            });
            var g = L(43489);

            function O(re, ie) {
                return function(_e) {
                    if ("function" != typeof re) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return _e.lift(new De(re, ie))
                }
            }
            class De {
                constructor(ie, ve) {
                    this.project = ie, this.thisArg = ve
                }
                call(ie, ve) {
                    return ve.subscribe(new Ce(ie, this.project, this.thisArg))
                }
            }
            class Ce extends g.L {
                constructor(ie, ve, _e) {
                    super(ie), this.project = ve, this.count = 0, this.thisArg = _e || this
                }
                _next(ie) {
                    let ve;
                    try {
                        ve = this.project.call(this.thisArg, ie, this.count++)
                    } catch (_e) {
                        return void this.destination.error(_e)
                    }
                    this.destination.next(ve)
                }
            }
        },
        89146: (ot, pe, L) => {
            L.d(pe, {
                J: () => De
            });
            var g = L(61709),
                O = L(35379);

            function De(Ce = Number.POSITIVE_INFINITY) {
                return (0, g.zg)(O.y, Ce)
            }
        },
        61709: (ot, pe, L) => {
            L.d(pe, {
                zg: () => ie
            });
            var g = L(69054),
                O = L(826),
                De = L(51869),
                Ce = L(24850),
                re = L(5254);

            function ie(Se, q, Y = Number.POSITIVE_INFINITY) {
                return "function" == typeof q ? Q => Q.pipe(ie((oe, ce) => (0, re.D)(Se(oe, ce)).pipe((0, Ce.U)((me, ne) => q(oe, me, ce, ne))), Y)) : ("number" == typeof q && (Y = q), Q => Q.lift(new ve(Se, Y)))
            }
            class ve {
                constructor(q, Y = Number.POSITIVE_INFINITY) {
                    this.project = q, this.concurrent = Y
                }
                call(q, Y) {
                    return Y.subscribe(new _e(q, this.project, this.concurrent))
                }
            }
            class _e extends O.L {
                constructor(q, Y, Q = Number.POSITIVE_INFINITY) {
                    super(q), this.project = Y, this.concurrent = Q, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
                }
                _next(q) {
                    this.active < this.concurrent ? this._tryNext(q) : this.buffer.push(q)
                }
                _tryNext(q) {
                    let Y;
                    const Q = this.index++;
                    try {
                        Y = this.project(q, Q)
                    } catch (oe) {
                        return void this.destination.error(oe)
                    }
                    this.active++, this._innerSub(Y, q, Q)
                }
                _innerSub(q, Y, Q) {
                    const oe = new De.d(this, Y, Q),
                        ce = this.destination;
                    ce.add(oe);
                    const me = (0, g.D)(this, q, void 0, void 0, oe);
                    me !== oe && ce.add(me)
                }
                _complete() {
                    this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                }
                notifyNext(q, Y, Q, oe, ce) {
                    this.destination.next(Y)
                }
                notifyComplete(q) {
                    const Y = this.buffer;
                    this.remove(q), this.active--, Y.length > 0 ? this._next(Y.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                }
            }
        },
        74327: (ot, pe, L) => {
            L.d(pe, {
                x: () => O
            });
            var g = L(43489);

            function O() {
                return function(ie) {
                    return ie.lift(new De(ie))
                }
            }
            class De {
                constructor(ie) {
                    this.connectable = ie
                }
                call(ie, ve) {
                    const {
                        connectable: _e
                    } = this;
                    _e._refCount++;
                    const Se = new Ce(ie, _e),
                        q = ve.subscribe(Se);
                    return Se.closed || (Se.connection = _e.connect()), q
                }
            }
            class Ce extends g.L {
                constructor(ie, ve) {
                    super(ie), this.connectable = ve
                }
                _unsubscribe() {
                    const {
                        connectable: ie
                    } = this;
                    if (!ie) return void(this.connection = null);
                    this.connectable = null;
                    const ve = ie._refCount;
                    if (ve <= 0) return void(this.connection = null);
                    if (ie._refCount = ve - 1, ve > 1) return void(this.connection = null);
                    const {
                        connection: _e
                    } = this, Se = ie._connection;
                    this.connection = null, Se && (!_e || Se === _e) && Se.unsubscribe()
                }
            }
        },
        66454: (ot, pe, L) => {
            L.d(pe, {
                r: () => De
            });
            var g = L(32916),
                O = L(42654);

            function De(Ce, re) {
                return new g.y(ie => {
                    const ve = new O.w;
                    let _e = 0;
                    return ve.add(re.schedule(function() {
                        _e !== Ce.length ? (ie.next(Ce[_e++]), ie.closed || ve.add(this.schedule())) : ie.complete()
                    })), ve
                })
            }
        },
        5430: (ot, pe, L) => {
            L.d(pe, {
                hZ: () => O
            });
            const O = function g() {
                return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
            }()
        },
        93821: (ot, pe, L) => {
            L.d(pe, {
                L: () => g
            });
            const g = "function" == typeof Symbol && Symbol.observable || "@@observable"
        },
        57668: (ot, pe, L) => {
            L.d(pe, {
                b: () => g
            });
            const g = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
        },
        95279: (ot, pe, L) => {
            L.d(pe, {
                N: () => O
            });
            const O = (() => {
                function De() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return De.prototype = Object.create(Error.prototype), De
            })()
        },
        22782: (ot, pe, L) => {
            function g(O) {
                setTimeout(() => {
                    throw O
                }, 0)
            }
            L.d(pe, {
                z: () => g
            })
        },
        35379: (ot, pe, L) => {
            function g(O) {
                return O
            }
            L.d(pe, {
                y: () => g
            })
        },
        66688: (ot, pe, L) => {
            L.d(pe, {
                k: () => g
            });
            const g = Array.isArray || (O => O && "number" == typeof O.length)
        },
        58515: (ot, pe, L) => {
            L.d(pe, {
                z: () => g
            });
            const g = O => O && "number" == typeof O.length && "function" != typeof O
        },
        67043: (ot, pe, L) => {
            function g(O) {
                return "function" == typeof O
            }
            L.d(pe, {
                m: () => g
            })
        },
        57830: (ot, pe, L) => {
            function g(O) {
                return null !== O && "object" == typeof O
            }
            L.d(pe, {
                K: () => g
            })
        },
        98955: (ot, pe, L) => {
            function g(O) {
                return !!O && "function" != typeof O.subscribe && "function" == typeof O.then
            }
            L.d(pe, {
                t: () => g
            })
        },
        72866: (ot, pe, L) => {
            function g(O) {
                return O && "function" == typeof O.schedule
            }
            L.d(pe, {
                K: () => g
            })
        },
        59249: (ot, pe, L) => {
            L.d(pe, {
                s: () => Y
            });
            var g = L(13650),
                O = L(22782),
                Ce = L(5430),
                ie = L(93821),
                _e = L(58515),
                Se = L(98955),
                q = L(57830);
            const Y = Q => {
                if (Q && "function" == typeof Q[ie.L]) return (Q => oe => {
                    const ce = Q[ie.L]();
                    if ("function" != typeof ce.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                    return ce.subscribe(oe)
                })(Q);
                if ((0, _e.z)(Q)) return (0, g.V)(Q);
                if ((0, Se.t)(Q)) return (Q => oe => (Q.then(ce => {
                    oe.closed || (oe.next(ce), oe.complete())
                }, ce => oe.error(ce)).then(null, O.z), oe))(Q);
                if (Q && "function" == typeof Q[Ce.hZ]) return (Q => oe => {
                    const ce = Q[Ce.hZ]();
                    for (;;) {
                        const me = ce.next();
                        if (me.done) {
                            oe.complete();
                            break
                        }
                        if (oe.next(me.value), oe.closed) break
                    }
                    return "function" == typeof ce.return && oe.add(() => {
                        ce.return && ce.return()
                    }), oe
                })(Q); {
                    const ce = `You provided ${(0,q.K)(Q)?"an invalid object":`'${Q}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;
                    throw new TypeError(ce)
                }
            }
        },
        13650: (ot, pe, L) => {
            L.d(pe, {
                V: () => g
            });
            const g = O => De => {
                for (let Ce = 0, re = O.length; Ce < re && !De.closed; Ce++) De.next(O[Ce]);
                De.complete()
            }
        },
        69054: (ot, pe, L) => {
            L.d(pe, {
                D: () => Ce
            });
            var g = L(51869),
                O = L(59249),
                De = L(32916);

            function Ce(re, ie, ve, _e, Se = new g.d(re, ve, _e)) {
                if (!Se.closed) return ie instanceof De.y ? ie.subscribe(Se) : (0, O.s)(ie)(Se)
            }
        },
        69808: (ot, pe, L) => {
            L.d(pe, {
                Do: () => nt,
                EM: () => Ai,
                HT: () => re,
                JF: () => ps,
                JJ: () => Br,
                K0: () => ve,
                Mx: () => an,
                O5: () => Be,
                PC: () => Rr,
                S$: () => Ze,
                V_: () => q,
                Ye: () => cn,
                b0: () => be,
                bD: () => fi,
                ez: () => Si,
                lw: () => _e,
                mk: () => Yn,
                mr: () => Re,
                q: () => De,
                sg: () => Ke,
                w_: () => ie
            });
            var g = L(72096);
            let O = null;

            function De() {
                return O
            }

            function re(_) {
                O || (O = _)
            }
            class ie {}
            const ve = new g.OlP("DocumentToken");
            let _e = (() => {
                class _ {
                    historyGo(C) {
                        throw new Error("Not implemented")
                    }
                }
                return _.\u0275fac = function(C) {
                    return new(C || _)
                }, _.\u0275prov = g.Yz7({
                    token: _,
                    factory: function() {
                        return function Se() {
                            return (0, g.LFG)(Y)
                        }()
                    },
                    providedIn: "platform"
                }), _
            })();
            const q = new g.OlP("Location Initialized");
            let Y = (() => {
                class _ extends _e {
                    constructor(C) {
                        super(), this._doc = C, this._init()
                    }
                    _init() {
                        this.location = window.location, this._history = window.history
                    }
                    getBaseHrefFromDOM() {
                        return De().getBaseHref(this._doc)
                    }
                    onPopState(C) {
                        const P = De().getGlobalEventTarget(this._doc, "window");
                        return P.addEventListener("popstate", C, !1), () => P.removeEventListener("popstate", C)
                    }
                    onHashChange(C) {
                        const P = De().getGlobalEventTarget(this._doc, "window");
                        return P.addEventListener("hashchange", C, !1), () => P.removeEventListener("hashchange", C)
                    }
                    get href() {
                        return this.location.href
                    }
                    get protocol() {
                        return this.location.protocol
                    }
                    get hostname() {
                        return this.location.hostname
                    }
                    get port() {
                        return this.location.port
                    }
                    get pathname() {
                        return this.location.pathname
                    }
                    get search() {
                        return this.location.search
                    }
                    get hash() {
                        return this.location.hash
                    }
                    set pathname(C) {
                        this.location.pathname = C
                    }
                    pushState(C, P, B) {
                        Q() ? this._history.pushState(C, P, B) : this.location.hash = B
                    }
                    replaceState(C, P, B) {
                        Q() ? this._history.replaceState(C, P, B) : this.location.hash = B
                    }
                    forward() {
                        this._history.forward()
                    }
                    back() {
                        this._history.back()
                    }
                    historyGo(C = 0) {
                        this._history.go(C)
                    }
                    getState() {
                        return this._history.state
                    }
                }
                return _.\u0275fac = function(C) {
                    return new(C || _)(g.LFG(ve))
                }, _.\u0275prov = g.Yz7({
                    token: _,
                    factory: function() {
                        return function oe() {
                            return new Y((0, g.LFG)(ve))
                        }()
                    },
                    providedIn: "platform"
                }), _
            })();

            function Q() {
                return !!window.history.pushState
            }

            function ce(_, T) {
                if (0 == _.length) return T;
                if (0 == T.length) return _;
                let C = 0;
                return _.endsWith("/") && C++, T.startsWith("/") && C++, 2 == C ? _ + T.substring(1) : 1 == C ? _ + T : _ + "/" + T
            }

            function me(_) {
                const T = _.match(/#|\?|$/),
                    C = T && T.index || _.length;
                return _.slice(0, C - ("/" === _[C - 1] ? 1 : 0)) + _.slice(C)
            }

            function ne(_) {
                return _ && "?" !== _[0] ? "?" + _ : _
            }
            let Ze = (() => {
                class _ {
                    historyGo(C) {
                        throw new Error("Not implemented")
                    }
                }
                return _.\u0275fac = function(C) {
                    return new(C || _)
                }, _.\u0275prov = g.Yz7({
                    token: _,
                    factory: function() {
                        return function ft(_) {
                            const T = (0, g.LFG)(ve).location;
                            return new be((0, g.LFG)(_e), T && T.origin || "")
                        }()
                    },
                    providedIn: "root"
                }), _
            })();
            const Re = new g.OlP("appBaseHref");
            let be = (() => {
                    class _ extends Ze {
                        constructor(C, P) {
                            if (super(), this._platformLocation = C, this._removeListenerFns = [], null == P && (P = this._platformLocation.getBaseHrefFromDOM()), null == P) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                            this._baseHref = P
                        }
                        ngOnDestroy() {
                            for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
                        }
                        onPopState(C) {
                            this._removeListenerFns.push(this._platformLocation.onPopState(C), this._platformLocation.onHashChange(C))
                        }
                        getBaseHref() {
                            return this._baseHref
                        }
                        prepareExternalUrl(C) {
                            return ce(this._baseHref, C)
                        }
                        path(C = !1) {
                            const P = this._platformLocation.pathname + ne(this._platformLocation.search),
                                B = this._platformLocation.hash;
                            return B && C ? `${P}${B}` : P
                        }
                        pushState(C, P, B, K) {
                            const le = this.prepareExternalUrl(B + ne(K));
                            this._platformLocation.pushState(C, P, le)
                        }
                        replaceState(C, P, B, K) {
                            const le = this.prepareExternalUrl(B + ne(K));
                            this._platformLocation.replaceState(C, P, le)
                        }
                        forward() {
                            this._platformLocation.forward()
                        }
                        back() {
                            this._platformLocation.back()
                        }
                        historyGo(C = 0) {
                            var P, B;
                            null === (B = (P = this._platformLocation).historyGo) || void 0 === B || B.call(P, C)
                        }
                    }
                    return _.\u0275fac = function(C) {
                        return new(C || _)(g.LFG(_e), g.LFG(Re, 8))
                    }, _.\u0275prov = g.Yz7({
                        token: _,
                        factory: _.\u0275fac
                    }), _
                })(),
                nt = (() => {
                    class _ extends Ze {
                        constructor(C, P) {
                            super(), this._platformLocation = C, this._baseHref = "", this._removeListenerFns = [], null != P && (this._baseHref = P)
                        }
                        ngOnDestroy() {
                            for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
                        }
                        onPopState(C) {
                            this._removeListenerFns.push(this._platformLocation.onPopState(C), this._platformLocation.onHashChange(C))
                        }
                        getBaseHref() {
                            return this._baseHref
                        }
                        path(C = !1) {
                            let P = this._platformLocation.hash;
                            return null == P && (P = "#"), P.length > 0 ? P.substring(1) : P
                        }
                        prepareExternalUrl(C) {
                            const P = ce(this._baseHref, C);
                            return P.length > 0 ? "#" + P : P
                        }
                        pushState(C, P, B, K) {
                            let le = this.prepareExternalUrl(B + ne(K));
                            0 == le.length && (le = this._platformLocation.pathname), this._platformLocation.pushState(C, P, le)
                        }
                        replaceState(C, P, B, K) {
                            let le = this.prepareExternalUrl(B + ne(K));
                            0 == le.length && (le = this._platformLocation.pathname), this._platformLocation.replaceState(C, P, le)
                        }
                        forward() {
                            this._platformLocation.forward()
                        }
                        back() {
                            this._platformLocation.back()
                        }
                        historyGo(C = 0) {
                            var P, B;
                            null === (B = (P = this._platformLocation).historyGo) || void 0 === B || B.call(P, C)
                        }
                    }
                    return _.\u0275fac = function(C) {
                        return new(C || _)(g.LFG(_e), g.LFG(Re, 8))
                    }, _.\u0275prov = g.Yz7({
                        token: _,
                        factory: _.\u0275fac
                    }), _
                })(),
                cn = (() => {
                    class _ {
                        constructor(C, P) {
                            this._subject = new g.vpe, this._urlChangeListeners = [], this._platformStrategy = C;
                            const B = this._platformStrategy.getBaseHref();
                            this._platformLocation = P, this._baseHref = me(Ne(B)), this._platformStrategy.onPopState(K => {
                                this._subject.emit({
                                    url: this.path(!0),
                                    pop: !0,
                                    state: K.state,
                                    type: K.type
                                })
                            })
                        }
                        path(C = !1) {
                            return this.normalize(this._platformStrategy.path(C))
                        }
                        getState() {
                            return this._platformLocation.getState()
                        }
                        isCurrentPathEqualTo(C, P = "") {
                            return this.path() == this.normalize(C + ne(P))
                        }
                        normalize(C) {
                            return _.stripTrailingSlash(function ke(_, T) {
                                return _ && T.startsWith(_) ? T.substring(_.length) : T
                            }(this._baseHref, Ne(C)))
                        }
                        prepareExternalUrl(C) {
                            return C && "/" !== C[0] && (C = "/" + C), this._platformStrategy.prepareExternalUrl(C)
                        }
                        go(C, P = "", B = null) {
                            this._platformStrategy.pushState(B, "", C, P), this._notifyUrlChangeListeners(this.prepareExternalUrl(C + ne(P)), B)
                        }
                        replaceState(C, P = "", B = null) {
                            this._platformStrategy.replaceState(B, "", C, P), this._notifyUrlChangeListeners(this.prepareExternalUrl(C + ne(P)), B)
                        }
                        forward() {
                            this._platformStrategy.forward()
                        }
                        back() {
                            this._platformStrategy.back()
                        }
                        historyGo(C = 0) {
                            var P, B;
                            null === (B = (P = this._platformStrategy).historyGo) || void 0 === B || B.call(P, C)
                        }
                        onUrlChange(C) {
                            this._urlChangeListeners.push(C), this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(P => {
                                this._notifyUrlChangeListeners(P.url, P.state)
                            }))
                        }
                        _notifyUrlChangeListeners(C = "", P) {
                            this._urlChangeListeners.forEach(B => B(C, P))
                        }
                        subscribe(C, P, B) {
                            return this._subject.subscribe({
                                next: C,
                                error: P,
                                complete: B
                            })
                        }
                    }
                    return _.normalizeQueryParams = ne, _.joinWithSlash = ce, _.stripTrailingSlash = me, _.\u0275fac = function(C) {
                        return new(C || _)(g.LFG(Ze), g.LFG(_e))
                    }, _.\u0275prov = g.Yz7({
                        token: _,
                        factory: function() {
                            return function qe() {
                                return new cn((0, g.LFG)(Ze), (0, g.LFG)(_e))
                            }()
                        },
                        providedIn: "root"
                    }), _
                })();

            function Ne(_) {
                return _.replace(/\/index.html$/, "")
            }
            var en = (() => ((en = en || {})[en.Decimal = 0] = "Decimal", en[en.Percent = 1] = "Percent", en[en.Currency = 2] = "Currency", en[en.Scientific = 3] = "Scientific", en))(),
                Ae = (() => ((Ae = Ae || {})[Ae.Decimal = 0] = "Decimal", Ae[Ae.Group = 1] = "Group", Ae[Ae.List = 2] = "List", Ae[Ae.PercentSign = 3] = "PercentSign", Ae[Ae.PlusSign = 4] = "PlusSign", Ae[Ae.MinusSign = 5] = "MinusSign", Ae[Ae.Exponential = 6] = "Exponential", Ae[Ae.SuperscriptingExponent = 7] = "SuperscriptingExponent", Ae[Ae.PerMille = 8] = "PerMille", Ae[Ae.Infinity = 9] = "Infinity", Ae[Ae.NaN = 10] = "NaN", Ae[Ae.TimeSeparator = 11] = "TimeSeparator", Ae[Ae.CurrencyDecimal = 12] = "CurrencyDecimal", Ae[Ae.CurrencyGroup = 13] = "CurrencyGroup", Ae))();

            function Et(_, T) {
                const C = (0, g.cg1)(_),
                    P = C[g.wAp.NumberSymbols][T];
                if (void 0 === P) {
                    if (T === Ae.CurrencyDecimal) return C[g.wAp.NumberSymbols][Ae.Decimal];
                    if (T === Ae.CurrencyGroup) return C[g.wAp.NumberSymbols][Ae.Group]
                }
                return P
            }
            const te = /^(\d+)?\.((\d+)(-(\d+))?)?$/;

            function ar(_) {
                const T = parseInt(_);
                if (isNaN(T)) throw new Error("Invalid integer literal when parsing " + _);
                return T
            }

            function an(_, T) {
                T = encodeURIComponent(T);
                for (const C of _.split(";")) {
                    const P = C.indexOf("="),
                        [B, K] = -1 == P ? [C, ""] : [C.slice(0, P), C.slice(P + 1)];
                    if (B.trim() === T) return decodeURIComponent(K)
                }
                return null
            }
            let Yn = (() => {
                class _ {
                    constructor(C, P, B, K) {
                        this._iterableDiffers = C, this._keyValueDiffers = P, this._ngEl = B, this._renderer = K, this._iterableDiffer = null, this._keyValueDiffer = null, this._initialClasses = [], this._rawClass = null
                    }
                    set klass(C) {
                        this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof C ? C.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
                    }
                    set ngClass(C) {
                        this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof C ? C.split(/\s+/) : C, this._rawClass && ((0, g.sIi)(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
                    }
                    ngDoCheck() {
                        if (this._iterableDiffer) {
                            const C = this._iterableDiffer.diff(this._rawClass);
                            C && this._applyIterableChanges(C)
                        } else if (this._keyValueDiffer) {
                            const C = this._keyValueDiffer.diff(this._rawClass);
                            C && this._applyKeyValueChanges(C)
                        }
                    }
                    _applyKeyValueChanges(C) {
                        C.forEachAddedItem(P => this._toggleClass(P.key, P.currentValue)), C.forEachChangedItem(P => this._toggleClass(P.key, P.currentValue)), C.forEachRemovedItem(P => {
                            P.previousValue && this._toggleClass(P.key, !1)
                        })
                    }
                    _applyIterableChanges(C) {
                        C.forEachAddedItem(P => {
                            if ("string" != typeof P.item) throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,g.AaK)(P.item)}`);
                            this._toggleClass(P.item, !0)
                        }), C.forEachRemovedItem(P => this._toggleClass(P.item, !1))
                    }
                    _applyClasses(C) {
                        C && (Array.isArray(C) || C instanceof Set ? C.forEach(P => this._toggleClass(P, !0)) : Object.keys(C).forEach(P => this._toggleClass(P, !!C[P])))
                    }
                    _removeClasses(C) {
                        C && (Array.isArray(C) || C instanceof Set ? C.forEach(P => this._toggleClass(P, !1)) : Object.keys(C).forEach(P => this._toggleClass(P, !1)))
                    }
                    _toggleClass(C, P) {
                        (C = C.trim()) && C.split(/\s+/g).forEach(B => {
                            P ? this._renderer.addClass(this._ngEl.nativeElement, B) : this._renderer.removeClass(this._ngEl.nativeElement, B)
                        })
                    }
                }
                return _.\u0275fac = function(C) {
                    return new(C || _)(g.Y36(g.ZZ4), g.Y36(g.aQg), g.Y36(g.SBq), g.Y36(g.Qsj))
                }, _.\u0275dir = g.lG2({
                    type: _,
                    selectors: [
                        ["", "ngClass", ""]
                    ],
                    inputs: {
                        klass: ["class", "klass"],
                        ngClass: "ngClass"
                    }
                }), _
            })();
            class Ln {
                constructor(T, C, P, B) {
                    this.$implicit = T, this.ngForOf = C, this.index = P, this.count = B
                }
                get first() {
                    return 0 === this.index
                }
                get last() {
                    return this.index === this.count - 1
                }
                get even() {
                    return this.index % 2 == 0
                }
                get odd() {
                    return !this.even
                }
            }
            let Ke = (() => {
                class _ {
                    constructor(C, P, B) {
                        this._viewContainer = C, this._template = P, this._differs = B, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
                    }
                    set ngForOf(C) {
                        this._ngForOf = C, this._ngForOfDirty = !0
                    }
                    set ngForTrackBy(C) {
                        this._trackByFn = C
                    }
                    get ngForTrackBy() {
                        return this._trackByFn
                    }
                    set ngForTemplate(C) {
                        C && (this._template = C)
                    }
                    ngDoCheck() {
                        if (this._ngForOfDirty) {
                            this._ngForOfDirty = !1;
                            const C = this._ngForOf;
                            !this._differ && C && (this._differ = this._differs.find(C).create(this.ngForTrackBy))
                        }
                        if (this._differ) {
                            const C = this._differ.diff(this._ngForOf);
                            C && this._applyChanges(C)
                        }
                    }
                    _applyChanges(C) {
                        const P = this._viewContainer;
                        C.forEachOperation((B, K, le) => {
                            if (null == B.previousIndex) P.createEmbeddedView(this._template, new Ln(B.item, this._ngForOf, -1, -1), null === le ? void 0 : le);
                            else if (null == le) P.remove(null === K ? void 0 : K);
                            else if (null !== K) {
                                const de = P.get(K);
                                P.move(de, le), Qe(de, B)
                            }
                        });
                        for (let B = 0, K = P.length; B < K; B++) {
                            const de = P.get(B).context;
                            de.index = B, de.count = K, de.ngForOf = this._ngForOf
                        }
                        C.forEachIdentityChange(B => {
                            Qe(P.get(B.currentIndex), B)
                        })
                    }
                    static ngTemplateContextGuard(C, P) {
                        return !0
                    }
                }
                return _.\u0275fac = function(C) {
                    return new(C || _)(g.Y36(g.s_b), g.Y36(g.Rgc), g.Y36(g.ZZ4))
                }, _.\u0275dir = g.lG2({
                    type: _,
                    selectors: [
                        ["", "ngFor", "", "ngForOf", ""]
                    ],
                    inputs: {
                        ngForOf: "ngForOf",
                        ngForTrackBy: "ngForTrackBy",
                        ngForTemplate: "ngForTemplate"
                    }
                }), _
            })();

            function Qe(_, T) {
                _.context.$implicit = T.item
            }
            let Be = (() => {
                class _ {
                    constructor(C, P) {
                        this._viewContainer = C, this._context = new Sn, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = P
                    }
                    set ngIf(C) {
                        this._context.$implicit = this._context.ngIf = C, this._updateView()
                    }
                    set ngIfThen(C) {
                        lr("ngIfThen", C), this._thenTemplateRef = C, this._thenViewRef = null, this._updateView()
                    }
                    set ngIfElse(C) {
                        lr("ngIfElse", C), this._elseTemplateRef = C, this._elseViewRef = null, this._updateView()
                    }
                    _updateView() {
                        this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                    }
                    static ngTemplateContextGuard(C, P) {
                        return !0
                    }
                }
                return _.\u0275fac = function(C) {
                    return new(C || _)(g.Y36(g.s_b), g.Y36(g.Rgc))
                }, _.\u0275dir = g.lG2({
                    type: _,
                    selectors: [
                        ["", "ngIf", ""]
                    ],
                    inputs: {
                        ngIf: "ngIf",
                        ngIfThen: "ngIfThen",
                        ngIfElse: "ngIfElse"
                    }
                }), _
            })();
            class Sn {
                constructor() {
                    this.$implicit = null, this.ngIf = null
                }
            }

            function lr(_, T) {
                if (T && !T.createEmbeddedView) throw new Error(`${_} must be a TemplateRef, but received '${(0,g.AaK)(T)}'.`)
            }
            let Rr = (() => {
                class _ {
                    constructor(C, P, B) {
                        this._ngEl = C, this._differs = P, this._renderer = B, this._ngStyle = null, this._differ = null
                    }
                    set ngStyle(C) {
                        this._ngStyle = C, !this._differ && C && (this._differ = this._differs.find(C).create())
                    }
                    ngDoCheck() {
                        if (this._differ) {
                            const C = this._differ.diff(this._ngStyle);
                            C && this._applyChanges(C)
                        }
                    }
                    _setStyle(C, P) {
                        const [B, K] = C.split(".");
                        null != (P = null != P && K ? `${P}${K}` : P) ? this._renderer.setStyle(this._ngEl.nativeElement, B, P) : this._renderer.removeStyle(this._ngEl.nativeElement, B)
                    }
                    _applyChanges(C) {
                        C.forEachRemovedItem(P => this._setStyle(P.key, null)), C.forEachAddedItem(P => this._setStyle(P.key, P.currentValue)), C.forEachChangedItem(P => this._setStyle(P.key, P.currentValue))
                    }
                }
                return _.\u0275fac = function(C) {
                    return new(C || _)(g.Y36(g.SBq), g.Y36(g.aQg), g.Y36(g.Qsj))
                }, _.\u0275dir = g.lG2({
                    type: _,
                    selectors: [
                        ["", "ngStyle", ""]
                    ],
                    inputs: {
                        ngStyle: "ngStyle"
                    }
                }), _
            })();
            let Br = (() => {
                class _ {
                    constructor(C) {
                        this._locale = C
                    }
                    transform(C, P, B) {
                        if (! function Xn(_) {
                                return !(null == _ || "" === _ || _ != _)
                            }(C)) return null;
                        B = B || this._locale;
                        try {
                            return function Qr(_, T, C) {
                                return function Vt(_, T, C, P, B, K, le = !1) {
                                    let de = "",
                                        At = !1;
                                    if (isFinite(_)) {
                                        let Tt = function Bt(_) {
                                            let P, B, K, le, de, T = Math.abs(_) + "",
                                                C = 0;
                                            for ((B = T.indexOf(".")) > -1 && (T = T.replace(".", "")), (K = T.search(/e/i)) > 0 ? (B < 0 && (B = K), B += +T.slice(K + 1), T = T.substring(0, K)) : B < 0 && (B = T.length), K = 0;
                                                "0" === T.charAt(K); K++);
                                            if (K === (de = T.length)) P = [0], B = 1;
                                            else {
                                                for (de--;
                                                    "0" === T.charAt(de);) de--;
                                                for (B -= K, P = [], le = 0; K <= de; K++, le++) P[le] = Number(T.charAt(K))
                                            }
                                            return B > 22 && (P = P.splice(0, 21), C = B - 1, B = 1), {
                                                digits: P,
                                                exponent: C,
                                                integerLen: B
                                            }
                                        }(_);
                                        le && (Tt = function bt(_) {
                                            if (0 === _.digits[0]) return _;
                                            const T = _.digits.length - _.integerLen;
                                            return _.exponent ? _.exponent += 2 : (0 === T ? _.digits.push(0, 0) : 1 === T && _.digits.push(0), _.integerLen += 2), _
                                        }(Tt));
                                        let Ye = T.minInt,
                                            lt = T.minFrac,
                                            ct = T.maxFrac;
                                        if (K) {
                                            const Yt = K.match(te);
                                            if (null === Yt) throw new Error(`${K} is not a valid digit info`);
                                            const E = Yt[1],
                                                y = Yt[3],
                                                m = Yt[5];
                                            null != E && (Ye = ar(E)), null != y && (lt = ar(y)), null != m ? ct = ar(m) : null != y && lt > ct && (ct = lt)
                                        }! function rn(_, T, C) {
                                            if (T > C) throw new Error(`The minimum number of digits after fraction (${T}) is higher than the maximum (${C}).`);
                                            let P = _.digits,
                                                B = P.length - _.integerLen;
                                            const K = Math.min(Math.max(T, B), C);
                                            let le = K + _.integerLen,
                                                de = P[le];
                                            if (le > 0) {
                                                P.splice(Math.max(_.integerLen, le));
                                                for (let lt = le; lt < P.length; lt++) P[lt] = 0
                                            } else {
                                                B = Math.max(0, B), _.integerLen = 1, P.length = Math.max(1, le = K + 1), P[0] = 0;
                                                for (let lt = 1; lt < le; lt++) P[lt] = 0
                                            }
                                            if (de >= 5)
                                                if (le - 1 < 0) {
                                                    for (let lt = 0; lt > le; lt--) P.unshift(0), _.integerLen++;
                                                    P.unshift(1), _.integerLen++
                                                } else P[le - 1]++;
                                            for (; B < Math.max(0, K); B++) P.push(0);
                                            let At = 0 !== K;
                                            const Tt = T + _.integerLen,
                                                Ye = P.reduceRight(function(lt, ct, Dt, rt) {
                                                    return rt[Dt] = (ct += lt) < 10 ? ct : ct - 10, At && (0 === rt[Dt] && Dt >= Tt ? rt.pop() : At = !1), ct >= 10 ? 1 : 0
                                                }, 0);
                                            Ye && (P.unshift(Ye), _.integerLen++)
                                        }(Tt, lt, ct);
                                        let Dt = Tt.digits,
                                            rt = Tt.integerLen;
                                        const Ur = Tt.exponent;
                                        let dr = [];
                                        for (At = Dt.every(Yt => !Yt); rt < Ye; rt++) Dt.unshift(0);
                                        for (; rt < 0; rt++) Dt.unshift(0);
                                        rt > 0 ? dr = Dt.splice(rt, Dt.length) : (dr = Dt, Dt = [0]);
                                        const fr = [];
                                        for (Dt.length >= T.lgSize && fr.unshift(Dt.splice(-T.lgSize, Dt.length).join("")); Dt.length > T.gSize;) fr.unshift(Dt.splice(-T.gSize, Dt.length).join(""));
                                        Dt.length && fr.unshift(Dt.join("")), de = fr.join(Et(C, P)), dr.length && (de += Et(C, B) + dr.join("")), Ur && (de += Et(C, Ae.Exponential) + "+" + Ur)
                                    } else de = Et(C, Ae.Infinity);
                                    return de = _ < 0 && !At ? T.negPre + de + T.negSuf : T.posPre + de + T.posSuf, de
                                }(_, function nn(_, T = "-") {
                                    const C = {
                                            minInt: 1,
                                            minFrac: 0,
                                            maxFrac: 0,
                                            posPre: "",
                                            posSuf: "",
                                            negPre: "",
                                            negSuf: "",
                                            gSize: 0,
                                            lgSize: 0
                                        },
                                        P = _.split(";"),
                                        B = P[0],
                                        K = P[1],
                                        le = -1 !== B.indexOf(".") ? B.split(".") : [B.substring(0, B.lastIndexOf("0") + 1), B.substring(B.lastIndexOf("0") + 1)],
                                        de = le[0],
                                        At = le[1] || "";
                                    C.posPre = de.substr(0, de.indexOf("#"));
                                    for (let Ye = 0; Ye < At.length; Ye++) {
                                        const lt = At.charAt(Ye);
                                        "0" === lt ? C.minFrac = C.maxFrac = Ye + 1 : "#" === lt ? C.maxFrac = Ye + 1 : C.posSuf += lt
                                    }
                                    const Tt = de.split(",");
                                    if (C.gSize = Tt[1] ? Tt[1].length : 0, C.lgSize = Tt[2] || Tt[1] ? (Tt[2] || Tt[1]).length : 0, K) {
                                        const Ye = B.length - C.posPre.length - C.posSuf.length,
                                            lt = K.indexOf("#");
                                        C.negPre = K.substr(0, lt).replace(/'/g, ""), C.negSuf = K.substr(lt + Ye).replace(/'/g, "")
                                    } else C.negPre = T + C.posPre, C.negSuf = C.posSuf;
                                    return C
                                }(function et(_, T) {
                                    return (0, g.cg1)(_)[g.wAp.NumberFormats][T]
                                }(T, en.Decimal), Et(T, Ae.MinusSign)), T, Ae.Group, Ae.Decimal, C)
                            }(function br(_) {
                                if ("string" == typeof _ && !isNaN(Number(_) - parseFloat(_))) return Number(_);
                                if ("number" != typeof _) throw new Error(`${_} is not a number`);
                                return _
                            }(C), B, P)
                        } catch (K) {
                            throw function Rt(_, T) {
                                return new g.vHH(2100, "")
                            }()
                        }
                    }
                }
                return _.\u0275fac = function(C) {
                    return new(C || _)(g.Y36(g.soG, 16))
                }, _.\u0275pipe = g.Yjl({
                    name: "number",
                    type: _,
                    pure: !0
                }), _
            })();
            let Si = (() => {
                class _ {}
                return _.\u0275fac = function(C) {
                    return new(C || _)
                }, _.\u0275mod = g.oAB({
                    type: _
                }), _.\u0275inj = g.cJS({}), _
            })();
            const fi = "browser";
            let Ai = (() => {
                class _ {}
                return _.\u0275prov = (0, g.Yz7)({
                    token: _,
                    providedIn: "root",
                    factory: () => new Jr((0, g.LFG)(ve), window)
                }), _
            })();
            class Jr {
                constructor(T, C) {
                    this.document = T, this.window = C, this.offset = () => [0, 0]
                }
                setOffset(T) {
                    this.offset = Array.isArray(T) ? () => T : T
                }
                getScrollPosition() {
                    return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0]
                }
                scrollToPosition(T) {
                    this.supportsScrolling() && this.window.scrollTo(T[0], T[1])
                }
                scrollToAnchor(T) {
                    if (!this.supportsScrolling()) return;
                    const C = function pn(_, T) {
                        const C = _.getElementById(T) || _.getElementsByName(T)[0];
                        if (C) return C;
                        if ("function" == typeof _.createTreeWalker && _.body && (_.body.createShadowRoot || _.body.attachShadow)) {
                            const P = _.createTreeWalker(_.body, NodeFilter.SHOW_ELEMENT);
                            let B = P.currentNode;
                            for (; B;) {
                                const K = B.shadowRoot;
                                if (K) {
                                    const le = K.getElementById(T) || K.querySelector(`[name="${T}"]`);
                                    if (le) return le
                                }
                                B = P.nextNode()
                            }
                        }
                        return null
                    }(this.document, T);
                    C && (this.scrollToElement(C), C.focus())
                }
                setHistoryScrollRestoration(T) {
                    if (this.supportScrollRestoration()) {
                        const C = this.window.history;
                        C && C.scrollRestoration && (C.scrollRestoration = T)
                    }
                }
                scrollToElement(T) {
                    const C = T.getBoundingClientRect(),
                        P = C.left + this.window.pageXOffset,
                        B = C.top + this.window.pageYOffset,
                        K = this.offset();
                    this.window.scrollTo(P - K[0], B - K[1])
                }
                supportScrollRestoration() {
                    try {
                        if (!this.supportsScrolling()) return !1;
                        const T = Wi(this.window.history) || Wi(Object.getPrototypeOf(this.window.history));
                        return !(!T || !T.writable && !T.set)
                    } catch (T) {
                        return !1
                    }
                }
                supportsScrolling() {
                    try {
                        return !!this.window && !!this.window.scrollTo && "pageXOffset" in this.window
                    } catch (T) {
                        return !1
                    }
                }
            }

            function Wi(_) {
                return Object.getOwnPropertyDescriptor(_, "scrollRestoration")
            }
            class ps {}
        },
        72096: (ot, pe, L) => {
            L.d(pe, {
                deG: () => R,
                tb: () => mg,
                AFp: () => hg,
                ip1: () => fg,
                CZH: () => ic,
                hGG: () => zE,
                z2F: () => fc,
                sBO: () => IE,
                Sil: () => lE,
                _Vd: () => rl,
                EJc: () => oE,
                SBq: () => pa,
                qLn: () => Fa,
                vpe: () => ls,
                tBr: () => Ma,
                XFs: () => Le,
                OlP: () => A,
                zs3: () => is,
                ZZ4: () => vc,
                aQg: () => _c,
                soG: () => oc,
                YKP: () => bp,
                h0i: () => Io,
                PXZ: () => CE,
                R0b: () => ji,
                FiY: () => qo,
                Lbi: () => rE,
                g9A: () => gg,
                Qsj: () => nC,
                FYo: () => _p,
                JOm: () => ns,
                tp0: () => Ko,
                Rgc: () => va,
                dDg: () => _g,
                GfV: () => Dp,
                s_b: () => ol,
                ifc: () => wn,
                eFA: () => Eg,
                G48: () => TE,
                Gpc: () => Re,
                _c5: () => GE,
                VLi: () => vE,
                c2e: () => iE,
                zSh: () => uu,
                wAp: () => ze,
                vHH: () => qe,
                cg1: () => Ru,
                kL8: () => $h,
                dqk: () => at,
                sIi: () => oa,
                CqO: () => Xf,
                QGY: () => Su,
                F4k: () => Jf,
                RDi: () => B,
                AaK: () => ne,
                qOj: () => pu,
                TTD: () => hi,
                _Bn: () => mp,
                xp6: () => Pd,
                uIk: () => yu,
                ekj: () => Pu,
                Suo: () => zp,
                Xpm: () => U,
                lG2: () => Rn,
                Yz7: () => kt,
                cJS: () => zn,
                oAB: () => Xe,
                Yjl: () => xr,
                Y36: () => la,
                _UZ: () => wu,
                BQk: () => qa,
                ynx: () => Ya,
                qZA: () => Wa,
                TgZ: () => za,
                EpF: () => Zf,
                n5z: () => to,
                LFG: () => er,
                $8M: () => $o,
                $Z: () => Kf,
                NdJ: () => Mu,
                CRH: () => Wp,
                O4$: () => Js,
                oxw: () => rh,
                ALo: () => Lp,
                xi3: () => kp,
                Q6J: () => Eu,
                s9C: () => Tu,
                MGl: () => Ka,
                hYB: () => Iu,
                DdM: () => Ap,
                VKq: () => Tp,
                WLB: () => Ip,
                kEZ: () => Op,
                iGM: () => $p,
                evT: () => sd,
                CHM: () => Es,
                LSH: () => wl,
                Udp: () => Ou,
                YNc: () => Vf,
                _uU: () => wh,
                Oqu: () => Nu,
                hij: () => Za,
                AsE: () => xu,
                Gf: () => Gp
            });
            var g = L(32916),
                O = L(72866),
                De = L(89146),
                Ce = L(33009),
                ie = L(5529),
                ve = L(42654),
                _e = L(71762);
            class q {
                constructor(t, n) {
                    this.subjectFactory = t, this.selector = n
                }
                call(t, n) {
                    const {
                        selector: r
                    } = this, i = this.subjectFactory(), s = r(i).subscribe(t);
                    return s.add(n.subscribe(i)), s
                }
            }
            var Y = L(74327);

            function Q() {
                return new ie.xQ
            }

            function ce(e) {
                for (let t in e)
                    if (e[t] === ce) return t;
                throw Error("Could not find renamed property on target object.")
            }

            function me(e, t) {
                for (const n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
            }

            function ne(e) {
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) return "[" + e.map(ne).join(", ") + "]";
                if (null == e) return "" + e;
                if (e.overriddenName) return `${e.overriddenName}`;
                if (e.name) return `${e.name}`;
                const t = e.toString();
                if (null == t) return "" + t;
                const n = t.indexOf("\n");
                return -1 === n ? t : t.substring(0, n)
            }

            function Ze(e, t) {
                return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
            }
            const ft = ce({
                __forward_ref__: ce
            });

            function Re(e) {
                return e.__forward_ref__ = Re, e.toString = function() {
                    return ne(this())
                }, e
            }

            function be(e) {
                return nt(e) ? e() : e
            }

            function nt(e) {
                return "function" == typeof e && e.hasOwnProperty(ft) && e.__forward_ref__ === Re
            }
            class qe extends Error {
                constructor(t, n) {
                    super(function ke(e, t) {
                        return `NG0${Math.abs(e)}${t?": "+t:""}`
                    }(t, n)), this.code = t
                }
            }

            function Ne(e) {
                return "string" == typeof e ? e : null == e ? "" : String(e)
            }

            function Ot(e) {
                return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : Ne(e)
            }

            function We(e, t) {
                const n = t ? ` in ${t}` : "";
                throw new qe(-201, `No provider for ${Ot(e)} found${n}`)
            }

            function Et(e, t) {
                null == e && function et(e, t, n, r) {
                    throw new Error(`ASSERTION ERROR: ${e}` + (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`))
                }(t, e, null, "!=")
            }

            function kt(e) {
                return {
                    token: e.token,
                    providedIn: e.providedIn || null,
                    factory: e.factory,
                    value: void 0
                }
            }

            function zn(e) {
                return {
                    providers: e.providers || [],
                    imports: e.imports || []
                }
            }

            function Tn(e) {
                return zt(e, _r) || zt(e, Yr)
            }

            function zt(e, t) {
                return e.hasOwnProperty(t) ? e[t] : null
            }

            function Nr(e) {
                return e && (e.hasOwnProperty(Dr) || e.hasOwnProperty(oi)) ? e[Dr] : null
            }
            const _r = ce({
                    \u0275prov: ce
                }),
                Dr = ce({
                    \u0275inj: ce
                }),
                Yr = ce({
                    ngInjectableDef: ce
                }),
                oi = ce({
                    ngInjectorDef: ce
                });
            var Le = (() => ((Le = Le || {})[Le.Default = 0] = "Default", Le[Le.Host = 1] = "Host", Le[Le.Self = 2] = "Self", Le[Le.SkipSelf = 4] = "SkipSelf", Le[Le.Optional = 8] = "Optional", Le))();
            let yn;

            function ye(e) {
                const t = yn;
                return yn = e, t
            }

            function Ue(e, t, n) {
                const r = Tn(e);
                return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & Le.Optional ? null : void 0 !== t ? t : void We(ne(e), "Injector")
            }

            function En(e) {
                return {
                    toString: e
                }.toString()
            }
            var Ut = (() => ((Ut = Ut || {})[Ut.OnPush = 0] = "OnPush", Ut[Ut.Default = 1] = "Default", Ut))(),
                wn = (() => {
                    return (e = wn || (wn = {}))[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", wn;
                    var e
                })();
            const xt = "undefined" != typeof globalThis && globalThis,
                Ei = "undefined" != typeof window && window,
                tt = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                at = xt || "undefined" != typeof global && global || Ei || tt,
                ir = {},
                ht = [],
                xn = ce({
                    \u0275cmp: ce
                }),
                sr = ce({
                    \u0275dir: ce
                }),
                qr = ce({
                    \u0275pipe: ce
                }),
                Kr = ce({
                    \u0275mod: ce
                }),
                hn = ce({
                    \u0275fac: ce
                }),
                or = ce({
                    __NG_ELEMENT_ID__: ce
                });
            let W = 0;

            function U(e) {
                return En(() => {
                    const n = {},
                        r = {
                            type: e.type,
                            providersResolver: null,
                            decls: e.decls,
                            vars: e.vars,
                            factory: null,
                            template: e.template || null,
                            consts: e.consts || null,
                            ngContentSelectors: e.ngContentSelectors,
                            hostBindings: e.hostBindings || null,
                            hostVars: e.hostVars || 0,
                            hostAttrs: e.hostAttrs || null,
                            contentQueries: e.contentQueries || null,
                            declaredInputs: n,
                            inputs: null,
                            outputs: null,
                            exportAs: e.exportAs || null,
                            onPush: e.changeDetection === Ut.OnPush,
                            directiveDefs: null,
                            pipeDefs: null,
                            selectors: e.selectors || ht,
                            viewQuery: e.viewQuery || null,
                            features: e.features || null,
                            data: e.data || {},
                            encapsulation: e.encapsulation || wn.Emulated,
                            id: "c",
                            styles: e.styles || ht,
                            _: null,
                            setInput: null,
                            schemas: e.schemas || null,
                            tView: null
                        },
                        i = e.directives,
                        s = e.features,
                        u = e.pipes;
                    return r.id += W++, r.inputs = Ft(e.inputs, n), r.outputs = Ft(e.outputs), s && s.forEach(d => d(r)), r.directiveDefs = i ? () => ("function" == typeof i ? i() : i).map(z) : null, r.pipeDefs = u ? () => ("function" == typeof u ? u() : u).map(te) : null, r
                })
            }

            function z(e) {
                return Wt(e) || function tn(e) {
                    return e[sr] || null
                }(e)
            }

            function te(e) {
                return function Vt(e) {
                    return e[qr] || null
                }(e)
            }
            const ue = {};

            function Xe(e) {
                return En(() => {
                    const t = {
                        type: e.type,
                        bootstrap: e.bootstrap || ht,
                        declarations: e.declarations || ht,
                        imports: e.imports || ht,
                        exports: e.exports || ht,
                        transitiveCompileScopes: null,
                        schemas: e.schemas || null,
                        id: e.id || null
                    };
                    return null != e.id && (ue[e.id] = e.type), t
                })
            }

            function Ft(e, t) {
                if (null == e) return ir;
                const n = {};
                for (const r in e)
                    if (e.hasOwnProperty(r)) {
                        let i = e[r],
                            s = i;
                        Array.isArray(i) && (s = i[1], i = i[0]), n[i] = r, t && (t[i] = s)
                    } return n
            }
            const Rn = U;

            function xr(e) {
                return {
                    type: e.type,
                    name: e.name,
                    factory: null,
                    pure: !1 !== e.pure,
                    onDestroy: e.type.prototype.ngOnDestroy || null
                }
            }

            function Wt(e) {
                return e[xn] || null
            }

            function St(e, t) {
                const n = e[Kr] || null;
                if (!n && !0 === t) throw new Error(`Type ${ne(e)} does not have '\u0275mod' property.`);
                return n
            }

            function _n(e) {
                return Array.isArray(e) && "object" == typeof e[1]
            }

            function Rt(e) {
                return Array.isArray(e) && !0 === e[1]
            }

            function Lr(e) {
                return 0 != (8 & e.flags)
            }

            function kr(e) {
                return 2 == (2 & e.flags)
            }

            function ai(e) {
                return 1 == (1 & e.flags)
            }

            function Pn(e) {
                return null !== e.template
            }

            function li(e) {
                return 0 != (512 & e[2])
            }

            function jr(e, t) {
                return e.hasOwnProperty(hn) ? e[hn] : null
            }
            class Hr {
                constructor(t, n, r) {
                    this.previousValue = t, this.currentValue = n, this.firstChange = r
                }
                isFirstChange() {
                    return this.firstChange
                }
            }

            function hi() {
                return zi
            }

            function zi(e) {
                return e.type.prototype.ngOnChanges && (e.setInput = Mi), hs
            }

            function hs() {
                const e = Vn(this),
                    t = null == e ? void 0 : e.current;
                if (t) {
                    const n = e.previous;
                    if (n === ir) e.previous = t;
                    else
                        for (let r in t) n[r] = t[r];
                    e.current = null, this.ngOnChanges(t)
                }
            }

            function Mi(e, t, n, r) {
                const i = Vn(e) || function Ai(e, t) {
                        return e[wr] = t
                    }(e, {
                        previous: ir,
                        current: null
                    }),
                    s = i.current || (i.current = {}),
                    u = i.previous,
                    d = this.declaredInputs[n],
                    h = u[d];
                s[d] = new Hr(h && h.currentValue, t, u === ir), e[r] = t
            }
            hi.ngInherit = !0;
            const wr = "__ngSimpleChanges__";

            function Vn(e) {
                return e[wr] || null
            }
            const _ = "math";
            let P;

            function B(e) {
                P = e
            }

            function de(e) {
                return !!e.listen
            }
            const At = {
                createRenderer: (e, t) => function K() {
                    return void 0 !== P ? P : "undefined" != typeof document ? document : void 0
                }()
            };

            function Ye(e) {
                for (; Array.isArray(e);) e = e[0];
                return e
            }

            function Dt(e, t) {
                return Ye(t[e])
            }

            function rt(e, t) {
                return Ye(t[e.index])
            }

            function dr(e, t) {
                return e.data[t]
            }

            function Yt(e, t) {
                const n = t[e];
                return _n(n) ? n : n[0]
            }

            function E(e) {
                return 4 == (4 & e[2])
            }

            function y(e) {
                return 128 == (128 & e[2])
            }

            function I(e, t) {
                return null == t ? null : e[t]
            }

            function Z(e) {
                e[18] = 0
            }

            function Te(e, t) {
                e[5] += t;
                let n = e,
                    r = e[3];
                for (; null !== r && (1 === t && 1 === n[5] || -1 === t && 0 === n[5]);) r[5] += t, n = r, r = r[3]
            }
            const Me = {
                lFrame: Ro(null),
                bindingsEnabled: !0
            };

            function gs() {
                return Me.bindingsEnabled
            }

            function ae() {
                return Me.lFrame.lView
            }

            function pt() {
                return Me.lFrame.tView
            }

            function Es(e) {
                return Me.lFrame.contextLView = e, e[8]
            }

            function gn() {
                let e = Ls();
                for (; null !== e && 64 === e.type;) e = e.parent;
                return e
            }

            function Ls() {
                return Me.lFrame.currentTNode
            }

            function Qn(e, t) {
                const n = Me.lFrame;
                n.currentTNode = e, n.isParent = t
            }

            function bs() {
                return Me.lFrame.isParent
            }

            function qi() {
                Me.lFrame.isParent = !1
            }

            function jn() {
                const e = Me.lFrame;
                let t = e.bindingRootIndex;
                return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
            }

            function Qi() {
                return Me.lFrame.bindingIndex++
            }

            function Sr(e) {
                const t = Me.lFrame,
                    n = t.bindingIndex;
                return t.bindingIndex = t.bindingIndex + e, n
            }

            function Ss(e, t) {
                const n = Me.lFrame;
                n.bindingIndex = n.bindingRootIndex = e, Ms(t)
            }

            function Ms(e) {
                Me.lFrame.currentDirectiveIndex = e
            }

            function Ks() {
                return Me.lFrame.currentQueryIndex
            }

            function Oi(e) {
                Me.lFrame.currentQueryIndex = e
            }

            function Da(e) {
                const t = e[1];
                return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null
            }

            function Mr(e, t, n) {
                if (n & Le.SkipSelf) {
                    let i = t,
                        s = e;
                    for (; !(i = i.parent, null !== i || n & Le.Host || (i = Da(s), null === i || (s = s[15], 10 & i.type))););
                    if (null === i) return !1;
                    t = i, e = s
                }
                const r = Me.lFrame = xo();
                return r.currentTNode = t, r.lView = e, !0
            }

            function Pi(e) {
                const t = xo(),
                    n = e[1];
                Me.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1
            }

            function xo() {
                const e = Me.lFrame,
                    t = null === e ? null : e.child;
                return null === t ? Ro(e) : t
            }

            function Ro(e) {
                const t = {
                    currentTNode: null,
                    isParent: !0,
                    lView: null,
                    tView: null,
                    selectedIndex: -1,
                    contextLView: null,
                    elementDepthCount: 0,
                    currentNamespace: null,
                    currentDirectiveIndex: -1,
                    bindingRootIndex: -1,
                    bindingIndex: -1,
                    currentQueryIndex: 0,
                    parent: e,
                    child: null,
                    inI18n: !1
                };
                return null !== e && (e.child = t), t
            }

            function Qs() {
                const e = Me.lFrame;
                return Me.lFrame = e.parent, e.currentTNode = null, e.lView = null, e
            }
            const Zs = Qs;

            function As() {
                const e = Qs();
                e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0
            }

            function Mn() {
                return Me.lFrame.selectedIndex
            }

            function gi(e) {
                Me.lFrame.selectedIndex = e
            }

            function qt() {
                const e = Me.lFrame;
                return dr(e.tView, e.selectedIndex)
            }

            function Js() {
                Me.lFrame.currentNamespace = "svg"
            }

            function o(e, t) {
                for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
                    const s = e.data[n].type.prototype,
                        {
                            ngAfterContentInit: u,
                            ngAfterContentChecked: d,
                            ngAfterViewInit: h,
                            ngAfterViewChecked: w,
                            ngOnDestroy: M
                        } = s;
                    u && (e.contentHooks || (e.contentHooks = [])).push(-n, u), d && ((e.contentHooks || (e.contentHooks = [])).push(n, d), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, d)), h && (e.viewHooks || (e.viewHooks = [])).push(-n, h), w && ((e.viewHooks || (e.viewHooks = [])).push(n, w), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, w)), null != M && (e.destroyHooks || (e.destroyHooks = [])).push(n, M)
                }
            }

            function l(e, t, n) {
                F(e, t, 3, n)
            }

            function p(e, t, n, r) {
                (3 & e[2]) === n && F(e, t, n, r)
            }

            function S(e, t) {
                let n = e[2];
                (3 & n) === t && (n &= 2047, n += 1, e[2] = n)
            }

            function F(e, t, n, r) {
                const s = null != r ? r : -1,
                    u = t.length - 1;
                let d = 0;
                for (let h = void 0 !== r ? 65535 & e[18] : 0; h < u; h++)
                    if ("number" == typeof t[h + 1]) {
                        if (d = t[h], null != r && d >= r) break
                    } else t[h] < 0 && (e[18] += 65536), (d < s || -1 == s) && (k(e, n, t, h), e[18] = (4294901760 & e[18]) + h + 2), h++
            }

            function k(e, t, n, r) {
                const i = n[r] < 0,
                    s = n[r + 1],
                    d = e[i ? -n[r] : n[r]];
                if (i) {
                    if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
                        e[2] += 2048;
                        try {
                            s.call(d)
                        } finally {}
                    }
                } else try {
                    s.call(d)
                } finally {}
            }
            const V = -1;
            class G {
                constructor(t, n, r) {
                    this.factory = t, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r
                }
            }

            function Kt(e, t, n) {
                const r = de(e);
                let i = 0;
                for (; i < n.length;) {
                    const s = n[i];
                    if ("number" == typeof s) {
                        if (0 !== s) break;
                        i++;
                        const u = n[i++],
                            d = n[i++],
                            h = n[i++];
                        r ? e.setAttribute(t, d, h, u) : t.setAttributeNS(u, d, h)
                    } else {
                        const u = s,
                            d = n[++i];
                        An(u) ? r && e.setProperty(t, u, d) : r ? e.setAttribute(t, u, d) : t.setAttribute(u, d), i++
                    }
                }
                return i
            }

            function mn(e) {
                return 3 === e || 4 === e || 6 === e
            }

            function An(e) {
                return 64 === e.charCodeAt(0)
            }

            function ln(e, t) {
                if (null !== t && 0 !== t.length)
                    if (null === e || 0 === e.length) e = t.slice();
                    else {
                        let n = -1;
                        for (let r = 0; r < t.length; r++) {
                            const i = t[r];
                            "number" == typeof i ? n = i : 0 === n || Fi(e, n, i, null, -1 === n || 2 === n ? t[++r] : null)
                        }
                    } return e
            }

            function Fi(e, t, n, r, i) {
                let s = 0,
                    u = e.length;
                if (-1 === t) u = -1;
                else
                    for (; s < e.length;) {
                        const d = e[s++];
                        if ("number" == typeof d) {
                            if (d === t) {
                                u = -1;
                                break
                            }
                            if (d > t) {
                                u = s - 1;
                                break
                            }
                        }
                    }
                for (; s < e.length;) {
                    const d = e[s];
                    if ("number" == typeof d) break;
                    if (d === n) {
                        if (null === r) return void(null !== i && (e[s + 1] = i));
                        if (r === e[s + 1]) return void(e[s + 2] = i)
                    }
                    s++, null !== r && s++, null !== i && s++
                } - 1 !== u && (e.splice(u, 0, t), s = u + 1), e.splice(s++, 0, n), null !== r && e.splice(s++, 0, r), null !== i && e.splice(s++, 0, i)
            }

            function pr(e) {
                return e !== V
            }

            function un(e) {
                return 32767 & e
            }

            function Lt(e, t) {
                let n = function ei(e) {
                        return e >> 16
                    }(e),
                    r = t;
                for (; n > 0;) r = r[15], n--;
                return r
            }
            let Ar = !0;

            function Zi(e) {
                const t = Ar;
                return Ar = e, t
            }
            let Xs = 0;

            function xe(e, t) {
                const n = dt(e, t);
                if (-1 !== n) return n;
                const r = t[1];
                r.firstCreatePass && (e.injectorIndex = t.length, $e(r.data, e), $e(t, null), $e(r.blueprint, null));
                const i = Xt(e, t),
                    s = e.injectorIndex;
                if (pr(i)) {
                    const u = un(i),
                        d = Lt(i, t),
                        h = d[1].data;
                    for (let w = 0; w < 8; w++) t[s + w] = d[u + w] | h[u + w]
                }
                return t[s + 8] = i, s
            }

            function $e(e, t) {
                e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
            }

            function dt(e, t) {
                return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null === t[e.injectorIndex + 8] ? -1 : e.injectorIndex
            }

            function Xt(e, t) {
                if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
                let n = 0,
                    r = null,
                    i = t;
                for (; null !== i;) {
                    const s = i[1],
                        u = s.type;
                    if (r = 2 === u ? s.declTNode : 1 === u ? i[6] : null, null === r) return V;
                    if (n++, i = i[15], -1 !== r.injectorIndex) return r.injectorIndex | n << 16
                }
                return V
            }

            function Hn(e, t, n) {
                ! function Pe(e, t, n) {
                    let r;
                    "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(or) && (r = n[or]), null == r && (r = n[or] = Xs++);
                    const i = 255 & r;
                    t.data[e + (i >> 5)] |= 1 << i
                }(e, t, n)
            }

            function Un(e, t, n) {
                if (n & Le.Optional) return e;
                We(t, "NodeInjector")
            }

            function Gt(e, t, n, r) {
                if (n & Le.Optional && void 0 === r && (r = null), 0 == (n & (Le.Self | Le.Host))) {
                    const i = e[9],
                        s = ye(void 0);
                    try {
                        return i ? i.get(t, r, n & Le.Optional) : Ue(t, r, n & Le.Optional)
                    } finally {
                        ye(s)
                    }
                }
                return Un(r, t, n)
            }

            function Vs(e, t, n, r = Le.Default, i) {
                if (null !== e) {
                    const s = function Ts(e) {
                        if ("string" == typeof e) return e.charCodeAt(0) || 0;
                        const t = e.hasOwnProperty(or) ? e[or] : void 0;
                        return "number" == typeof t ? t >= 0 ? 255 & t : $n : t
                    }(n);
                    if ("function" == typeof s) {
                        if (!Mr(t, e, r)) return r & Le.Host ? Un(i, n, r) : Gt(t, n, r, i);
                        try {
                            const u = s(r);
                            if (null != u || r & Le.Optional) return u;
                            We(n)
                        } finally {
                            Zs()
                        }
                    } else if ("number" == typeof s) {
                        let u = null,
                            d = dt(e, t),
                            h = V,
                            w = r & Le.Host ? t[16][6] : null;
                        for ((-1 === d || r & Le.SkipSelf) && (h = -1 === d ? Xt(e, t) : t[d + 8], h !== V && Ea(r, !1) ? (u = t[1], d = un(h), t = Lt(h, t)) : d = -1); - 1 !== d;) {
                            const M = t[1];
                            if (Ca(s, d, M.data)) {
                                const N = Ni(d, t, n, u, r, w);
                                if (N !== eo) return N
                            }
                            h = t[d + 8], h !== V && Ea(r, t[1].data[d + 8] === w) && Ca(s, d, t) ? (u = M, d = un(h), t = Lt(h, t)) : d = -1
                        }
                    }
                }
                return Gt(t, n, r, i)
            }
            const eo = {};

            function $n() {
                return new Is(gn(), ae())
            }

            function Ni(e, t, n, r, i, s) {
                const u = t[1],
                    d = u.data[e + 8],
                    M = Ir(d, u, n, null == r ? kr(d) && Ar : r != u && 0 != (3 & d.type), i & Le.Host && s === d);
                return null !== M ? Or(t, u, M, d) : eo
            }

            function Ir(e, t, n, r, i) {
                const s = e.providerIndexes,
                    u = t.data,
                    d = 1048575 & s,
                    h = e.directiveStart,
                    M = s >> 20,
                    j = i ? d + M : e.directiveEnd;
                for (let $ = r ? d : d + M; $ < j; $++) {
                    const X = u[$];
                    if ($ < h && n === X || $ >= h && X.type === n) return $
                }
                if (i) {
                    const $ = u[h];
                    if ($ && Pn($) && $.type === n) return h
                }
                return null
            }

            function Or(e, t, n, r) {
                let i = e[n];
                const s = t.data;
                if (function ee(e) {
                        return e instanceof G
                    }(i)) {
                    const u = i;
                    u.resolving && function en(e, t) {
                        const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
                        throw new qe(-200, `Circular dependency in DI detected for ${e}${n}`)
                    }(Ot(s[n]));
                    const d = Zi(u.canSeeViewProviders);
                    u.resolving = !0;
                    const h = u.injectImpl ? ye(u.injectImpl) : null;
                    Mr(e, r, Le.Default);
                    try {
                        i = e[n] = u.factory(void 0, s, e, r), t.firstCreatePass && n >= r.directiveStart && function D(e, t, n) {
                            const {
                                ngOnChanges: r,
                                ngOnInit: i,
                                ngDoCheck: s
                            } = t.type.prototype;
                            if (r) {
                                const u = zi(t);
                                (n.preOrderHooks || (n.preOrderHooks = [])).push(e, u), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, u)
                            }
                            i && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, i), s && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, s), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, s))
                        }(n, s[n], t)
                    } finally {
                        null !== h && ye(h), Zi(d), u.resolving = !1, Zs()
                    }
                }
                return i
            }

            function Ca(e, t, n) {
                return !!(n[t + (e >> 5)] & 1 << e)
            }

            function Ea(e, t) {
                return !(e & Le.Self || e & Le.Host && t)
            }
            class Is {
                constructor(t, n) {
                    this._tNode = t, this._lView = n
                }
                get(t, n, r) {
                    return Vs(this._tNode, this._lView, t, r, n)
                }
            }

            function to(e) {
                return En(() => {
                    const t = e.prototype.constructor,
                        n = t[hn] || Uo(t),
                        r = Object.prototype;
                    let i = Object.getPrototypeOf(e.prototype).constructor;
                    for (; i && i !== r;) {
                        const s = i[hn] || Uo(i);
                        if (s && s !== n) return s;
                        i = Object.getPrototypeOf(i)
                    }
                    return s => new s
                })
            }

            function Uo(e) {
                return nt(e) ? () => {
                    const t = Uo(be(e));
                    return t && t()
                } : jr(e)
            }

            function $o(e) {
                return function gr(e, t) {
                    if ("class" === t) return e.classes;
                    if ("style" === t) return e.styles;
                    const n = e.attrs;
                    if (n) {
                        const r = n.length;
                        let i = 0;
                        for (; i < r;) {
                            const s = n[i];
                            if (mn(s)) break;
                            if (0 === s) i += 2;
                            else if ("number" == typeof s)
                                for (i++; i < r && "string" == typeof n[i];) i++;
                            else {
                                if (s === t) return n[i + 1];
                                i += 2
                            }
                        }
                    }
                    return null
                }(gn(), e)
            }
            const Os = "__parameters__";

            function a(e, t, n) {
                return En(() => {
                    const r = function c(e) {
                        return function(...n) {
                            if (e) {
                                const r = e(...n);
                                for (const i in r) this[i] = r[i]
                            }
                        }
                    }(t);

                    function i(...s) {
                        if (this instanceof i) return r.apply(this, s), this;
                        const u = new i(...s);
                        return d.annotation = u, d;

                        function d(h, w, M) {
                            const N = h.hasOwnProperty(Os) ? h[Os] : Object.defineProperty(h, Os, {
                                value: []
                            })[Os];
                            for (; N.length <= M;) N.push(null);
                            return (N[M] = N[M] || []).push(u), h
                        }
                    }
                    return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i
                })
            }
            class A {
                constructor(t, n) {
                    this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = kt({
                        token: this,
                        providedIn: n.providedIn || "root",
                        factory: n.factory
                    }))
                }
                toString() {
                    return `InjectionToken ${this._desc}`
                }
            }
            const R = new A("AnalyzeForEntryComponents");

            function yi(e, t) {
                void 0 === t && (t = e);
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    Array.isArray(r) ? (t === e && (t = e.slice(0, n)), yi(r, t)) : t !== e && t.push(r)
                }
                return t
            }

            function Xi(e, t) {
                e.forEach(n => Array.isArray(n) ? Xi(n, t) : t(n))
            }

            function Ic(e, t, n) {
                t >= e.length ? e.push(n) : e.splice(t, 0, n)
            }

            function ba(e, t) {
                return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
            }

            function ti(e, t, n) {
                let r = ro(e, t);
                return r >= 0 ? e[1 | r] = n : (r = ~r, function Vg(e, t, n, r) {
                    let i = e.length;
                    if (i == t) e.push(n, r);
                    else if (1 === i) e.push(r, e[0]), e[0] = n;
                    else {
                        for (i--, e.push(e[i - 1], e[i]); i > t;) e[i] = e[i - 2], i--;
                        e[t] = n, e[t + 1] = r
                    }
                }(e, r, t, n)), r
            }

            function hl(e, t) {
                const n = ro(e, t);
                if (n >= 0) return e[1 | n]
            }

            function ro(e, t) {
                return function Fc(e, t, n) {
                    let r = 0,
                        i = e.length >> n;
                    for (; i !== r;) {
                        const s = r + (i - r >> 1),
                            u = e[s << n];
                        if (t === u) return s << n;
                        u > t ? i = s : r = s + 1
                    }
                    return ~(i << n)
                }(e, t, 1)
            }
            const zo = {},
                gl = "__NG_DI_FLAG__",
                Sa = "ngTempTokenPath",
                zg = /\n/gm,
                xc = "__source",
                Yg = ce({
                    provide: String,
                    useValue: ce
                });
            let Wo;

            function Rc(e) {
                const t = Wo;
                return Wo = e, t
            }

            function qg(e, t = Le.Default) {
                if (void 0 === Wo) throw new qe(203, "");
                return null === Wo ? Ue(e, void 0, t) : Wo.get(e, t & Le.Optional ? null : void 0, t)
            }

            function er(e, t = Le.Default) {
                return (function _t() {
                    return yn
                }() || qg)(be(e), t)
            }
            const Kg = er;

            function ml(e) {
                const t = [];
                for (let n = 0; n < e.length; n++) {
                    const r = be(e[n]);
                    if (Array.isArray(r)) {
                        if (0 === r.length) throw new qe(900, "");
                        let i, s = Le.Default;
                        for (let u = 0; u < r.length; u++) {
                            const d = r[u],
                                h = Qg(d);
                            "number" == typeof h ? -1 === h ? i = d.token : s |= h : i = d
                        }
                        t.push(er(i, s))
                    } else t.push(er(r))
                }
                return t
            }

            function Yo(e, t) {
                return e[gl] = t, e.prototype[gl] = t, e
            }

            function Qg(e) {
                return e[gl]
            }
            const Ma = Yo(a("Inject", e => ({
                    token: e
                })), -1),
                qo = Yo(a("Optional"), 8),
                Ko = Yo(a("SkipSelf"), 4);
            class Gc {
                constructor(t) {
                    this.changingThisBreaksApplicationSecurity = t
                }
                toString() {
                    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`
                }
            }

            function Fs(e) {
                return e instanceof Gc ? e.changingThisBreaksApplicationSecurity : e
            }
            const vm = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
                _m = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
            var Fn = (() => ((Fn = Fn || {})[Fn.NONE = 0] = "NONE", Fn[Fn.HTML = 1] = "HTML", Fn[Fn.STYLE = 2] = "STYLE", Fn[Fn.SCRIPT = 3] = "SCRIPT", Fn[Fn.URL = 4] = "URL", Fn[Fn.RESOURCE_URL = 5] = "RESOURCE_URL", Fn))();

            function wl(e) {
                const t = function Xo() {
                    const e = ae();
                    return e && e[12]
                }();
                return t ? t.sanitize(Fn.URL, e) || "" : function Zo(e, t) {
                    const n = function pm(e) {
                        return e instanceof Gc && e.getTypeName() || null
                    }(e);
                    if (null != n && n !== t) {
                        if ("ResourceURL" === n && "URL" === t) return !0;
                        throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)
                    }
                    return n === t
                }(e, "URL") ? Fs(e) : function Oa(e) {
                    return (e = String(e)).match(vm) || e.match(_m) ? e : "unsafe:" + e
                }(Ne(e))
            }
            const ed = "__ngContext__";

            function mr(e, t) {
                e[ed] = t
            }

            function Ml(e) {
                const t = function ea(e) {
                    return e[ed] || null
                }(e);
                return t ? Array.isArray(t) ? t : t.lView : null
            }

            function Tl(e) {
                return e.ngOriginalError
            }

            function Um(e, ...t) {
                e.error(...t)
            }
            class Fa {
                constructor() {
                    this._console = console
                }
                handleError(t) {
                    const n = this._findOriginalError(t),
                        r = function Hm(e) {
                            return e && e.ngErrorLogger || Um
                        }(t);
                    r(this._console, "ERROR", t), n && r(this._console, "ORIGINAL ERROR", n)
                }
                _findOriginalError(t) {
                    let n = t && Tl(t);
                    for (; n && Tl(n);) n = Tl(n);
                    return n || null
                }
            }
            const Jm = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(at))();

            function sd(e) {
                return e.ownerDocument
            }

            function ts(e) {
                return e instanceof Function ? e() : e
            }
            var ns = (() => ((ns = ns || {})[ns.Important = 1] = "Important", ns[ns.DashCase = 2] = "DashCase", ns))();

            function Ol(e, t) {
                return undefined(e, t)
            }

            function ta(e) {
                const t = e[3];
                return Rt(t) ? t[3] : t
            }

            function Pl(e) {
                return cd(e[13])
            }

            function Fl(e) {
                return cd(e[4])
            }

            function cd(e) {
                for (; null !== e && !Rt(e);) e = e[4];
                return e
            }

            function ao(e, t, n, r, i) {
                if (null != r) {
                    let s, u = !1;
                    Rt(r) ? s = r : _n(r) && (u = !0, r = r[0]);
                    const d = Ye(r);
                    0 === e && null !== n ? null == i ? md(t, n, d) : Hs(t, n, d, i || null, !0) : 1 === e && null !== n ? Hs(t, n, d, i || null, !0) : 2 === e ? function bd(e, t, n) {
                        const r = Na(e, t);
                        r && function dy(e, t, n, r) {
                            de(e) ? e.removeChild(t, n, r) : t.removeChild(n)
                        }(e, r, t, n)
                    }(t, d, u) : 3 === e && t.destroyNode(d), null != s && function py(e, t, n, r, i) {
                        const s = n[7];
                        s !== Ye(n) && ao(t, e, r, s, i);
                        for (let d = 10; d < n.length; d++) {
                            const h = n[d];
                            na(h[1], h, e, t, r, s)
                        }
                    }(t, e, s, n, i)
                }
            }

            function xl(e, t, n) {
                if (de(e)) return e.createElement(t, n); {
                    const r = null !== n ? function C(e) {
                        const t = e.toLowerCase();
                        return "svg" === t ? "http://www.w3.org/2000/svg" : t === _ ? "http://www.w3.org/1998/MathML/" : null
                    }(n) : null;
                    return null === r ? e.createElement(t) : e.createElementNS(r, t)
                }
            }

            function fd(e, t) {
                const n = e[9],
                    r = n.indexOf(t),
                    i = t[3];
                1024 & t[2] && (t[2] &= -1025, Te(i, -1)), n.splice(r, 1)
            }

            function Rl(e, t) {
                if (e.length <= 10) return;
                const n = 10 + t,
                    r = e[n];
                if (r) {
                    const i = r[17];
                    null !== i && i !== e && fd(i, r), t > 0 && (e[n - 1][4] = r[4]);
                    const s = ba(e, 10 + t);
                    ! function ry(e, t) {
                        na(e, t, t[11], 2, null, null), t[0] = null, t[6] = null
                    }(r[1], r);
                    const u = s[19];
                    null !== u && u.detachView(s[1]), r[3] = null, r[4] = null, r[2] &= -129
                }
                return r
            }

            function hd(e, t) {
                if (!(256 & t[2])) {
                    const n = t[11];
                    de(n) && n.destroyNode && na(e, t, n, 3, null, null),
                        function oy(e) {
                            let t = e[13];
                            if (!t) return Ll(e[1], e);
                            for (; t;) {
                                let n = null;
                                if (_n(t)) n = t[13];
                                else {
                                    const r = t[10];
                                    r && (n = r)
                                }
                                if (!n) {
                                    for (; t && !t[4] && t !== e;) _n(t) && Ll(t[1], t), t = t[3];
                                    null === t && (t = e), _n(t) && Ll(t[1], t), n = t && t[4]
                                }
                                t = n
                            }
                        }(t)
                }
            }

            function Ll(e, t) {
                if (!(256 & t[2])) {
                    t[2] &= -129, t[2] |= 256,
                        function cy(e, t) {
                            let n;
                            if (null != e && null != (n = e.destroyHooks))
                                for (let r = 0; r < n.length; r += 2) {
                                    const i = t[n[r]];
                                    if (!(i instanceof G)) {
                                        const s = n[r + 1];
                                        if (Array.isArray(s))
                                            for (let u = 0; u < s.length; u += 2) {
                                                const d = i[s[u]],
                                                    h = s[u + 1];
                                                try {
                                                    h.call(d)
                                                } finally {}
                                            } else try {
                                                s.call(i)
                                            } finally {}
                                    }
                                }
                        }(e, t),
                        function uy(e, t) {
                            const n = e.cleanup,
                                r = t[7];
                            let i = -1;
                            if (null !== n)
                                for (let s = 0; s < n.length - 1; s += 2)
                                    if ("string" == typeof n[s]) {
                                        const u = n[s + 1],
                                            d = "function" == typeof u ? u(t) : Ye(t[u]),
                                            h = r[i = n[s + 2]],
                                            w = n[s + 3];
                                        "boolean" == typeof w ? d.removeEventListener(n[s], h, w) : w >= 0 ? r[i = w]() : r[i = -w].unsubscribe(), s += 2
                                    } else {
                                        const u = r[i = n[s + 1]];
                                        n[s].call(u)
                                    } if (null !== r) {
                                for (let s = i + 1; s < r.length; s++) r[s]();
                                t[7] = null
                            }
                        }(e, t), 1 === t[1].type && de(t[11]) && t[11].destroy();
                    const n = t[17];
                    if (null !== n && Rt(t[3])) {
                        n !== t[3] && fd(n, t);
                        const r = t[19];
                        null !== r && r.detachView(e)
                    }
                }
            }

            function pd(e, t, n) {
                return function gd(e, t, n) {
                    let r = t;
                    for (; null !== r && 40 & r.type;) r = (t = r).parent;
                    if (null === r) return n[0];
                    if (2 & r.flags) {
                        const i = e.data[r.directiveStart].encapsulation;
                        if (i === wn.None || i === wn.Emulated) return null
                    }
                    return rt(r, n)
                }(e, t.parent, n)
            }

            function Hs(e, t, n, r, i) {
                de(e) ? e.insertBefore(t, n, r, i) : t.insertBefore(n, r, i)
            }

            function md(e, t, n) {
                de(e) ? e.appendChild(t, n) : t.appendChild(n)
            }

            function yd(e, t, n, r, i) {
                null !== r ? Hs(e, t, n, r, i) : md(e, t, n)
            }

            function Na(e, t) {
                return de(e) ? e.parentNode(t) : t.parentNode
            }
            let Dd = function _d(e, t, n) {
                return 40 & e.type ? rt(e, n) : null
            };

            function xa(e, t, n, r) {
                const i = pd(e, r, t),
                    s = t[11],
                    d = function vd(e, t, n) {
                        return Dd(e, t, n)
                    }(r.parent || t[6], r, t);
                if (null != i)
                    if (Array.isArray(n))
                        for (let h = 0; h < n.length; h++) yd(s, i, n[h], d, !1);
                    else yd(s, i, n, d, !1)
            }

            function Ra(e, t) {
                if (null !== t) {
                    const n = t.type;
                    if (3 & n) return rt(t, e);
                    if (4 & n) return Vl(-1, e[t.index]);
                    if (8 & n) {
                        const r = t.child;
                        if (null !== r) return Ra(e, r); {
                            const i = e[t.index];
                            return Rt(i) ? Vl(-1, i) : Ye(i)
                        }
                    }
                    if (32 & n) return Ol(t, e)() || Ye(e[t.index]); {
                        const r = Ed(e, t);
                        return null !== r ? Array.isArray(r) ? r[0] : Ra(ta(e[16]), r) : Ra(e, t.next)
                    }
                }
                return null
            }

            function Ed(e, t) {
                return null !== t ? e[16][6].projection[t.projection] : null
            }

            function Vl(e, t) {
                const n = 10 + e + 1;
                if (n < t.length) {
                    const r = t[n],
                        i = r[1].firstChild;
                    if (null !== i) return Ra(r, i)
                }
                return t[7]
            }

            function Bl(e, t, n, r, i, s, u) {
                for (; null != n;) {
                    const d = r[n.index],
                        h = n.type;
                    if (u && 0 === t && (d && mr(Ye(d), r), n.flags |= 4), 64 != (64 & n.flags))
                        if (8 & h) Bl(e, t, n.child, r, i, s, !1), ao(t, e, i, d, s);
                        else if (32 & h) {
                        const w = Ol(n, r);
                        let M;
                        for (; M = w();) ao(t, e, i, M, s);
                        ao(t, e, i, d, s)
                    } else 16 & h ? wd(e, t, r, n, i, s) : ao(t, e, i, d, s);
                    n = u ? n.projectionNext : n.next
                }
            }

            function na(e, t, n, r, i, s) {
                Bl(n, r, e.firstChild, t, i, s, !1)
            }

            function wd(e, t, n, r, i, s) {
                const u = n[16],
                    h = u[6].projection[r.projection];
                if (Array.isArray(h))
                    for (let w = 0; w < h.length; w++) ao(t, e, i, h[w], s);
                else Bl(e, t, h, u[3], i, s, !0)
            }

            function Sd(e, t, n) {
                de(e) ? e.setAttribute(t, "style", n) : t.style.cssText = n
            }

            function jl(e, t, n) {
                de(e) ? "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n) : t.className = n
            }

            function Md(e, t, n) {
                let r = e.length;
                for (;;) {
                    const i = e.indexOf(t, n);
                    if (-1 === i) return i;
                    if (0 === i || e.charCodeAt(i - 1) <= 32) {
                        const s = t.length;
                        if (i + s === r || e.charCodeAt(i + s) <= 32) return i
                    }
                    n = i + 1
                }
            }
            const Ad = "ng-template";

            function my(e, t, n) {
                let r = 0;
                for (; r < e.length;) {
                    let i = e[r++];
                    if (n && "class" === i) {
                        if (i = e[r], -1 !== Md(i.toLowerCase(), t, 0)) return !0
                    } else if (1 === i) {
                        for (; r < e.length && "string" == typeof(i = e[r++]);)
                            if (i.toLowerCase() === t) return !0;
                        return !1
                    }
                }
                return !1
            }

            function Td(e) {
                return 4 === e.type && e.value !== Ad
            }

            function yy(e, t, n) {
                return t === (4 !== e.type || n ? e.value : Ad)
            }

            function vy(e, t, n) {
                let r = 4;
                const i = e.attrs || [],
                    s = function Cy(e) {
                        for (let t = 0; t < e.length; t++)
                            if (mn(e[t])) return t;
                        return e.length
                    }(i);
                let u = !1;
                for (let d = 0; d < t.length; d++) {
                    const h = t[d];
                    if ("number" != typeof h) {
                        if (!u)
                            if (4 & r) {
                                if (r = 2 | 1 & r, "" !== h && !yy(e, h, n) || "" === h && 1 === t.length) {
                                    if (Ri(r)) return !1;
                                    u = !0
                                }
                            } else {
                                const w = 8 & r ? h : t[++d];
                                if (8 & r && null !== e.attrs) {
                                    if (!my(e.attrs, w, n)) {
                                        if (Ri(r)) return !1;
                                        u = !0
                                    }
                                    continue
                                }
                                const N = _y(8 & r ? "class" : h, i, Td(e), n);
                                if (-1 === N) {
                                    if (Ri(r)) return !1;
                                    u = !0;
                                    continue
                                }
                                if ("" !== w) {
                                    let j;
                                    j = N > s ? "" : i[N + 1].toLowerCase();
                                    const $ = 8 & r ? j : null;
                                    if ($ && -1 !== Md($, w, 0) || 2 & r && w !== j) {
                                        if (Ri(r)) return !1;
                                        u = !0
                                    }
                                }
                            }
                    } else {
                        if (!u && !Ri(r) && !Ri(h)) return !1;
                        if (u && Ri(h)) continue;
                        u = !1, r = h | 1 & r
                    }
                }
                return Ri(r) || u
            }

            function Ri(e) {
                return 0 == (1 & e)
            }

            function _y(e, t, n, r) {
                if (null === t) return -1;
                let i = 0;
                if (r || !n) {
                    let s = !1;
                    for (; i < t.length;) {
                        const u = t[i];
                        if (u === e) return i;
                        if (3 === u || 6 === u) s = !0;
                        else {
                            if (1 === u || 2 === u) {
                                let d = t[++i];
                                for (;
                                    "string" == typeof d;) d = t[++i];
                                continue
                            }
                            if (4 === u) break;
                            if (0 === u) {
                                i += 4;
                                continue
                            }
                        }
                        i += s ? 1 : 2
                    }
                    return -1
                }
                return function Ey(e, t) {
                    let n = e.indexOf(4);
                    if (n > -1)
                        for (n++; n < e.length;) {
                            const r = e[n];
                            if ("number" == typeof r) return -1;
                            if (r === t) return n;
                            n++
                        }
                    return -1
                }(t, e)
            }

            function Id(e, t, n = !1) {
                for (let r = 0; r < t.length; r++)
                    if (vy(e, t[r], n)) return !0;
                return !1
            }

            function Od(e, t) {
                return e ? ":not(" + t.trim() + ")" : t
            }

            function wy(e) {
                let t = e[0],
                    n = 1,
                    r = 2,
                    i = "",
                    s = !1;
                for (; n < e.length;) {
                    let u = e[n];
                    if ("string" == typeof u)
                        if (2 & r) {
                            const d = e[++n];
                            i += "[" + u + (d.length > 0 ? '="' + d + '"' : "") + "]"
                        } else 8 & r ? i += "." + u : 4 & r && (i += " " + u);
                    else "" !== i && !Ri(u) && (t += Od(s, i), i = ""), r = u, s = s || !Ri(r);
                    n++
                }
                return "" !== i && (t += Od(s, i)), t
            }
            const st = {};

            function Pd(e) {
                Fd(pt(), ae(), Mn() + e, !1)
            }

            function Fd(e, t, n, r) {
                if (!r)
                    if (3 == (3 & t[2])) {
                        const s = e.preOrderCheckHooks;
                        null !== s && l(t, s, n)
                    } else {
                        const s = e.preOrderHooks;
                        null !== s && p(t, s, 0, n)
                    } gi(n)
            }

            function La(e, t) {
                return e << 17 | t << 2
            }

            function Li(e) {
                return e >> 17 & 32767
            }

            function Hl(e) {
                return 2 | e
            }

            function vs(e) {
                return (131068 & e) >> 2
            }

            function Ul(e, t) {
                return -131069 & e | t << 2
            }

            function $l(e) {
                return 1 | e
            }

            function $d(e, t) {
                const n = e.contentQueries;
                if (null !== n)
                    for (let r = 0; r < n.length; r += 2) {
                        const i = n[r],
                            s = n[r + 1];
                        if (-1 !== s) {
                            const u = e.data[s];
                            Oi(i), u.contentQueries(2, t[s], s)
                        }
                    }
            }

            function ra(e, t, n, r, i, s, u, d, h, w) {
                const M = t.blueprint.slice();
                return M[0] = i, M[2] = 140 | r, Z(M), M[3] = M[15] = e, M[8] = n, M[10] = u || e && e[10], M[11] = d || e && e[11], M[12] = h || e && e[12] || null, M[9] = w || e && e[9] || null, M[6] = s, M[16] = 2 == t.type ? e[16] : M, M
            }

            function lo(e, t, n, r, i) {
                let s = e.data[t];
                if (null === s) s = function Jl(e, t, n, r, i) {
                        const s = Ls(),
                            u = bs(),
                            h = e.data[t] = function Uy(e, t, n, r, i, s) {
                                return {
                                    type: n,
                                    index: r,
                                    insertBeforeIndex: null,
                                    injectorIndex: t ? t.injectorIndex : -1,
                                    directiveStart: -1,
                                    directiveEnd: -1,
                                    directiveStylingLast: -1,
                                    propertyBindings: null,
                                    flags: 0,
                                    providerIndexes: 0,
                                    value: i,
                                    attrs: s,
                                    mergedAttrs: null,
                                    localNames: null,
                                    initialInputs: void 0,
                                    inputs: null,
                                    outputs: null,
                                    tViews: null,
                                    next: null,
                                    projectionNext: null,
                                    child: null,
                                    parent: t,
                                    projection: null,
                                    styles: null,
                                    stylesWithoutHost: null,
                                    residualStyles: void 0,
                                    classes: null,
                                    classesWithoutHost: null,
                                    residualClasses: void 0,
                                    classBindings: 0,
                                    styleBindings: 0
                                }
                            }(0, u ? s : s && s.parent, n, t, r, i);
                        return null === e.firstChild && (e.firstChild = h), null !== s && (u ? null == s.child && null !== h.parent && (s.child = h) : null === s.next && (s.next = h)), h
                    }(e, t, n, r, i),
                    function No() {
                        return Me.lFrame.inI18n
                    }() && (s.flags |= 64);
                else if (64 & s.type) {
                    s.type = n, s.value = r, s.attrs = i;
                    const u = function pi() {
                        const e = Me.lFrame,
                            t = e.currentTNode;
                        return e.isParent ? t : t.parent
                    }();
                    s.injectorIndex = null === u ? -1 : u.injectorIndex
                }
                return Qn(s, !0), s
            }

            function uo(e, t, n, r) {
                if (0 === n) return -1;
                const i = t.length;
                for (let s = 0; s < n; s++) t.push(r), e.blueprint.push(r), e.data.push(null);
                return i
            }

            function ia(e, t, n) {
                Pi(t);
                try {
                    const r = e.viewQuery;
                    null !== r && au(1, r, n);
                    const i = e.template;
                    null !== i && Gd(e, t, i, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && $d(e, t), e.staticViewQueries && au(2, e.viewQuery, n);
                    const s = e.components;
                    null !== s && function By(e, t) {
                        for (let n = 0; n < t.length; n++) ov(e, t[n])
                    }(t, s)
                } catch (r) {
                    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), r
                } finally {
                    t[2] &= -5, As()
                }
            }

            function co(e, t, n, r) {
                const i = t[2];
                if (256 != (256 & i)) {
                    Pi(t);
                    try {
                        Z(t),
                            function Ys(e) {
                                return Me.lFrame.bindingIndex = e
                            }(e.bindingStartIndex), null !== n && Gd(e, t, n, 2, r);
                        const u = 3 == (3 & i);
                        if (u) {
                            const w = e.preOrderCheckHooks;
                            null !== w && l(t, w, null)
                        } else {
                            const w = e.preOrderHooks;
                            null !== w && p(t, w, 0, null), S(t, 0)
                        }
                        if (function iv(e) {
                                for (let t = Pl(e); null !== t; t = Fl(t)) {
                                    if (!t[2]) continue;
                                    const n = t[9];
                                    for (let r = 0; r < n.length; r++) {
                                        const i = n[r],
                                            s = i[3];
                                        0 == (1024 & i[2]) && Te(s, 1), i[2] |= 1024
                                    }
                                }
                            }(t), function rv(e) {
                                for (let t = Pl(e); null !== t; t = Fl(t))
                                    for (let n = 10; n < t.length; n++) {
                                        const r = t[n],
                                            i = r[1];
                                        y(r) && co(i, r, i.template, r[8])
                                    }
                            }(t), null !== e.contentQueries && $d(e, t), u) {
                            const w = e.contentCheckHooks;
                            null !== w && l(t, w)
                        } else {
                            const w = e.contentHooks;
                            null !== w && p(t, w, 1), S(t, 1)
                        }! function ky(e, t) {
                            const n = e.hostBindingOpCodes;
                            if (null !== n) try {
                                for (let r = 0; r < n.length; r++) {
                                    const i = n[r];
                                    if (i < 0) gi(~i);
                                    else {
                                        const s = i,
                                            u = n[++r],
                                            d = n[++r];
                                        Ss(u, s), d(2, t[s])
                                    }
                                }
                            } finally {
                                gi(-1)
                            }
                        }(e, t);
                        const d = e.components;
                        null !== d && function Vy(e, t) {
                            for (let n = 0; n < t.length; n++) sv(e, t[n])
                        }(t, d);
                        const h = e.viewQuery;
                        if (null !== h && au(2, h, r), u) {
                            const w = e.viewCheckHooks;
                            null !== w && l(t, w)
                        } else {
                            const w = e.viewHooks;
                            null !== w && p(t, w, 2), S(t, 2)
                        }!0 === e.firstUpdatePass && (e.firstUpdatePass = !1), t[2] &= -73, 1024 & t[2] && (t[2] &= -1025, Te(t[3], -1))
                    } finally {
                        As()
                    }
                }
            }

            function jy(e, t, n, r) {
                const i = t[10],
                    u = E(t);
                try {
                    !u && i.begin && i.begin(), u && ia(e, t, r), co(e, t, n, r)
                } finally {
                    !u && i.end && i.end()
                }
            }

            function Gd(e, t, n, r, i) {
                const s = Mn(),
                    u = 2 & r;
                try {
                    gi(-1), u && t.length > 20 && Fd(e, t, 20, !1), n(r, i)
                } finally {
                    gi(s)
                }
            }

            function zd(e, t, n) {
                if (Lr(t)) {
                    const i = t.directiveEnd;
                    for (let s = t.directiveStart; s < i; s++) {
                        const u = e.data[s];
                        u.contentQueries && u.contentQueries(1, n[s], s)
                    }
                }
            }

            function Xl(e, t, n) {
                !gs() || (function Ky(e, t, n, r) {
                    const i = n.directiveStart,
                        s = n.directiveEnd;
                    e.firstCreatePass || xe(n, t), mr(r, t);
                    const u = n.initialInputs;
                    for (let d = i; d < s; d++) {
                        const h = e.data[d],
                            w = Pn(h);
                        w && ev(t, n, h);
                        const M = Or(t, e, d, n);
                        mr(M, t), null !== u && tv(0, d - i, M, h, 0, u), w && (Yt(n.index, t)[8] = M)
                    }
                }(e, t, n, rt(n, t)), 128 == (128 & n.flags) && function Qy(e, t, n) {
                    const r = n.directiveStart,
                        i = n.directiveEnd,
                        u = n.index,
                        d = function qs() {
                            return Me.lFrame.currentDirectiveIndex
                        }();
                    try {
                        gi(u);
                        for (let h = r; h < i; h++) {
                            const w = e.data[h],
                                M = t[h];
                            Ms(h), (null !== w.hostBindings || 0 !== w.hostVars || null !== w.hostAttrs) && Xd(w, M)
                        }
                    } finally {
                        gi(-1), Ms(d)
                    }
                }(e, t, n))
            }

            function eu(e, t, n = rt) {
                const r = t.localNames;
                if (null !== r) {
                    let i = t.index + 1;
                    for (let s = 0; s < r.length; s += 2) {
                        const u = r[s + 1],
                            d = -1 === u ? n(t, e) : e[u];
                        e[i++] = d
                    }
                }
            }

            function Wd(e) {
                const t = e.tView;
                return null === t || t.incompleteFirstPass ? e.tView = Ba(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts) : t
            }

            function Ba(e, t, n, r, i, s, u, d, h, w) {
                const M = 20 + r,
                    N = M + i,
                    j = function Hy(e, t) {
                        const n = [];
                        for (let r = 0; r < t; r++) n.push(r < e ? null : st);
                        return n
                    }(M, N),
                    $ = "function" == typeof w ? w() : w;
                return j[1] = {
                    type: e,
                    blueprint: j,
                    template: n,
                    queries: null,
                    viewQuery: d,
                    declTNode: t,
                    data: j.slice().fill(null, M),
                    bindingStartIndex: M,
                    expandoStartIndex: N,
                    hostBindingOpCodes: null,
                    firstCreatePass: !0,
                    firstUpdatePass: !0,
                    staticViewQueries: !1,
                    staticContentQueries: !1,
                    preOrderHooks: null,
                    preOrderCheckHooks: null,
                    contentHooks: null,
                    contentCheckHooks: null,
                    viewHooks: null,
                    viewCheckHooks: null,
                    destroyHooks: null,
                    cleanup: null,
                    contentQueries: null,
                    components: null,
                    directiveRegistry: "function" == typeof s ? s() : s,
                    pipeRegistry: "function" == typeof u ? u() : u,
                    firstChild: null,
                    schemas: h,
                    consts: $,
                    incompleteFirstPass: !1
                }
            }

            function Kd(e, t, n, r) {
                const i = of (t);
                null === n ? i.push(r) : (i.push(n), e.firstCreatePass && af(e).push(r, i.length - 1))
            }

            function Qd(e, t, n) {
                for (let r in e)
                    if (e.hasOwnProperty(r)) {
                        const i = e[r];
                        (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(t, i) : n[r] = [t, i]
                    } return n
            }

            function ni(e, t, n, r, i, s, u, d) {
                const h = rt(t, n);
                let M, w = t.inputs;
                !d && null != w && (M = w[r]) ? (cf(e, n, M, r, i), kr(t) && function zy(e, t) {
                    const n = Yt(t, e);
                    16 & n[2] || (n[2] |= 64)
                }(n, t.index)) : 3 & t.type && (r = function Gy(e) {
                    return "class" === e ? "className" : "for" === e ? "htmlFor" : "formaction" === e ? "formAction" : "innerHtml" === e ? "innerHTML" : "readonly" === e ? "readOnly" : "tabindex" === e ? "tabIndex" : e
                }(r), i = null != u ? u(i, t.value || "", r) : i, de(s) ? s.setProperty(h, r, i) : An(r) || (h.setProperty ? h.setProperty(r, i) : h[r] = i))
            }

            function tu(e, t, n, r) {
                let i = !1;
                if (gs()) {
                    const s = function Zy(e, t, n) {
                            const r = e.directiveRegistry;
                            let i = null;
                            if (r)
                                for (let s = 0; s < r.length; s++) {
                                    const u = r[s];
                                    Id(n, u.selectors, !1) && (i || (i = []), Hn(xe(n, t), e, u.type), Pn(u) ? (ef(e, n), i.unshift(u)) : i.push(u))
                                }
                            return i
                        }(e, t, n),
                        u = null === r ? null : {
                            "": -1
                        };
                    if (null !== s) {
                        i = !0, tf(n, e.data.length, s.length);
                        for (let M = 0; M < s.length; M++) {
                            const N = s[M];
                            N.providersResolver && N.providersResolver(N)
                        }
                        let d = !1,
                            h = !1,
                            w = uo(e, t, s.length, null);
                        for (let M = 0; M < s.length; M++) {
                            const N = s[M];
                            n.mergedAttrs = ln(n.mergedAttrs, N.hostAttrs), nf(e, n, t, w, N), Xy(w, N, u), null !== N.contentQueries && (n.flags |= 8), (null !== N.hostBindings || null !== N.hostAttrs || 0 !== N.hostVars) && (n.flags |= 128);
                            const j = N.type.prototype;
                            !d && (j.ngOnChanges || j.ngOnInit || j.ngDoCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index), d = !0), !h && (j.ngOnChanges || j.ngDoCheck) && ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index), h = !0), w++
                        }! function $y(e, t) {
                            const r = t.directiveEnd,
                                i = e.data,
                                s = t.attrs,
                                u = [];
                            let d = null,
                                h = null;
                            for (let w = t.directiveStart; w < r; w++) {
                                const M = i[w],
                                    N = M.inputs,
                                    j = null === s || Td(t) ? null : nv(N, s);
                                u.push(j), d = Qd(N, w, d), h = Qd(M.outputs, w, h)
                            }
                            null !== d && (d.hasOwnProperty("class") && (t.flags |= 16), d.hasOwnProperty("style") && (t.flags |= 32)), t.initialInputs = u, t.inputs = d, t.outputs = h
                        }(e, n)
                    }
                    u && function Jy(e, t, n) {
                        if (t) {
                            const r = e.localNames = [];
                            for (let i = 0; i < t.length; i += 2) {
                                const s = n[t[i + 1]];
                                if (null == s) throw new qe(-301, !1);
                                r.push(t[i], s)
                            }
                        }
                    }(n, r, u)
                }
                return n.mergedAttrs = ln(n.mergedAttrs, n.attrs), i
            }

            function Jd(e, t, n, r, i, s) {
                const u = s.hostBindings;
                if (u) {
                    let d = e.hostBindingOpCodes;
                    null === d && (d = e.hostBindingOpCodes = []);
                    const h = ~t.index;
                    (function qy(e) {
                        let t = e.length;
                        for (; t > 0;) {
                            const n = e[--t];
                            if ("number" == typeof n && n < 0) return n
                        }
                        return 0
                    })(d) != h && d.push(h), d.push(r, i, u)
                }
            }

            function Xd(e, t) {
                null !== e.hostBindings && e.hostBindings(1, t)
            }

            function ef(e, t) {
                t.flags |= 2, (e.components || (e.components = [])).push(t.index)
            }

            function Xy(e, t, n) {
                if (n) {
                    if (t.exportAs)
                        for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
                    Pn(t) && (n[""] = e)
                }
            }

            function tf(e, t, n) {
                e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t
            }

            function nf(e, t, n, r, i) {
                e.data[r] = i;
                const s = i.factory || (i.factory = jr(i.type)),
                    u = new G(s, Pn(i), null);
                e.blueprint[r] = u, n[r] = u, Jd(e, t, 0, r, uo(e, n, i.hostVars, st), i)
            }

            function ev(e, t, n) {
                const r = rt(t, e),
                    i = Wd(n),
                    s = e[10],
                    u = ja(e, ra(e, i, null, n.onPush ? 64 : 16, r, t, s, s.createRenderer(r, n), null, null));
                e[t.index] = u
            }

            function rs(e, t, n, r, i, s) {
                const u = rt(e, t);
                ! function nu(e, t, n, r, i, s, u) {
                    if (null == s) de(e) ? e.removeAttribute(t, i, n) : t.removeAttribute(i);
                    else {
                        const d = null == u ? Ne(s) : u(s, r || "", i);
                        de(e) ? e.setAttribute(t, i, d, n) : n ? t.setAttributeNS(n, i, d) : t.setAttribute(i, d)
                    }
                }(t[11], u, s, e.value, n, r, i)
            }

            function tv(e, t, n, r, i, s) {
                const u = s[t];
                if (null !== u) {
                    const d = r.setInput;
                    for (let h = 0; h < u.length;) {
                        const w = u[h++],
                            M = u[h++],
                            N = u[h++];
                        null !== d ? r.setInput(n, N, w, M) : n[M] = N
                    }
                }
            }

            function nv(e, t) {
                let n = null,
                    r = 0;
                for (; r < t.length;) {
                    const i = t[r];
                    if (0 !== i)
                        if (5 !== i) {
                            if ("number" == typeof i) break;
                            e.hasOwnProperty(i) && (null === n && (n = []), n.push(i, e[i], t[r + 1])), r += 2
                        } else r += 2;
                    else r += 4
                }
                return n
            }

            function rf(e, t, n, r) {
                return new Array(e, !0, !1, t, null, 0, r, n, null, null)
            }

            function sv(e, t) {
                const n = Yt(t, e);
                if (y(n)) {
                    const r = n[1];
                    80 & n[2] ? co(r, n, r.template, n[8]) : n[5] > 0 && ru(n)
                }
            }

            function ru(e) {
                for (let r = Pl(e); null !== r; r = Fl(r))
                    for (let i = 10; i < r.length; i++) {
                        const s = r[i];
                        if (1024 & s[2]) {
                            const u = s[1];
                            co(u, s, u.template, s[8])
                        } else s[5] > 0 && ru(s)
                    }
                const n = e[1].components;
                if (null !== n)
                    for (let r = 0; r < n.length; r++) {
                        const i = Yt(n[r], e);
                        y(i) && i[5] > 0 && ru(i)
                    }
            }

            function ov(e, t) {
                const n = Yt(t, e),
                    r = n[1];
                (function av(e, t) {
                    for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n])
                })(r, n), ia(r, n, n[8])
            }

            function ja(e, t) {
                return e[13] ? e[14][4] = t : e[13] = t, e[14] = t, t
            }

            function iu(e) {
                for (; e;) {
                    e[2] |= 64;
                    const t = ta(e);
                    if (li(e) && !t) return e;
                    e = t
                }
                return null
            }

            function sf(e) {
                ! function su(e) {
                    for (let t = 0; t < e.components.length; t++) {
                        const n = e.components[t],
                            r = Ml(n),
                            i = r[1];
                        jy(i, r, i.template, n)
                    }
                }(e[8])
            }

            function au(e, t, n) {
                Oi(0), t(e, n)
            }
            const uv = (() => Promise.resolve(null))();

            function of (e) {
                return e[7] || (e[7] = [])
            }

            function af(e) {
                return e.cleanup || (e.cleanup = [])
            }

            function uf(e, t) {
                const n = e[9],
                    r = n ? n.get(Fa, null) : null;
                r && r.handleError(t)
            }

            function cf(e, t, n, r, i) {
                for (let s = 0; s < n.length;) {
                    const u = n[s++],
                        d = n[s++],
                        h = t[u],
                        w = e.data[u];
                    null !== w.setInput ? w.setInput(h, i, r, d) : h[d] = i
                }
            }

            function _s(e, t, n) {
                const r = Dt(t, e);
                ! function dd(e, t, n) {
                    de(e) ? e.setValue(t, n) : t.textContent = n
                }(e[11], r, n)
            }

            function Ha(e, t, n) {
                let r = n ? e.styles : null,
                    i = n ? e.classes : null,
                    s = 0;
                if (null !== t)
                    for (let u = 0; u < t.length; u++) {
                        const d = t[u];
                        "number" == typeof d ? s = d : 1 == s ? i = Ze(i, d) : 2 == s && (r = Ze(r, d + ": " + t[++u] + ";"))
                    }
                n ? e.styles = r : e.stylesWithoutHost = r, n ? e.classes = i : e.classesWithoutHost = i
            }
            const lu = new A("INJECTOR", -1);
            class df {
                get(t, n = zo) {
                    if (n === zo) {
                        const r = new Error(`NullInjectorError: No provider for ${ne(t)}!`);
                        throw r.name = "NullInjectorError", r
                    }
                    return n
                }
            }
            const uu = new A("Set Injector scope."),
                sa = {},
                fv = {};
            let cu;

            function ff() {
                return void 0 === cu && (cu = new df), cu
            }

            function hf(e, t = null, n = null, r) {
                const i = pf(e, t, n, r);
                return i._resolveInjectorDefTypes(), i
            }

            function pf(e, t = null, n = null, r) {
                return new hv(e, n, t || ff(), r)
            }
            class hv {
                constructor(t, n, r, i = null) {
                    this.parent = r, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
                    const s = [];
                    n && Xi(n, d => this.processProvider(d, t, n)), Xi([t], d => this.processInjectorType(d, [], s)), this.records.set(lu, fo(void 0, this));
                    const u = this.records.get(uu);
                    this.scope = null != u ? u.value : null, this.source = i || ("object" == typeof t ? null : ne(t))
                }
                get destroyed() {
                    return this._destroyed
                }
                destroy() {
                    this.assertNotDestroyed(), this._destroyed = !0;
                    try {
                        this.onDestroy.forEach(t => t.ngOnDestroy())
                    } finally {
                        this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                    }
                }
                get(t, n = zo, r = Le.Default) {
                    this.assertNotDestroyed();
                    const i = Rc(this),
                        s = ye(void 0);
                    try {
                        if (!(r & Le.SkipSelf)) {
                            let d = this.records.get(t);
                            if (void 0 === d) {
                                const h = function Cv(e) {
                                    return "function" == typeof e || "object" == typeof e && e instanceof A
                                }(t) && Tn(t);
                                d = h && this.injectableDefInScope(h) ? fo(du(t), sa) : null, this.records.set(t, d)
                            }
                            if (null != d) return this.hydrate(t, d)
                        }
                        return (r & Le.Self ? ff() : this.parent).get(t, n = r & Le.Optional && n === zo ? null : n)
                    } catch (u) {
                        if ("NullInjectorError" === u.name) {
                            if ((u[Sa] = u[Sa] || []).unshift(ne(t)), i) throw u;
                            return function Zg(e, t, n, r) {
                                const i = e[Sa];
                                throw t[xc] && i.unshift(t[xc]), e.message = function Jg(e, t, n, r = null) {
                                    e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.substr(2) : e;
                                    let i = ne(t);
                                    if (Array.isArray(t)) i = t.map(ne).join(" -> ");
                                    else if ("object" == typeof t) {
                                        let s = [];
                                        for (let u in t)
                                            if (t.hasOwnProperty(u)) {
                                                let d = t[u];
                                                s.push(u + ":" + ("string" == typeof d ? JSON.stringify(d) : ne(d)))
                                            } i = `{${s.join(", ")}}`
                                    }
                                    return `${n}${r?"("+r+")":""}[${i}]: ${e.replace(zg,"\n  ")}`
                                }("\n" + e.message, i, n, r), e.ngTokenPath = i, e[Sa] = null, e
                            }(u, t, "R3InjectorError", this.source)
                        }
                        throw u
                    } finally {
                        ye(s), Rc(i)
                    }
                }
                _resolveInjectorDefTypes() {
                    this.injectorDefTypes.forEach(t => this.get(t))
                }
                toString() {
                    const t = [];
                    return this.records.forEach((r, i) => t.push(ne(i))), `R3Injector[${t.join(", ")}]`
                }
                assertNotDestroyed() {
                    if (this._destroyed) throw new qe(205, !1)
                }
                processInjectorType(t, n, r) {
                    if (!(t = be(t))) return !1;
                    let i = Nr(t);
                    const s = null == i && t.ngModule || void 0,
                        u = void 0 === s ? t : s,
                        d = -1 !== r.indexOf(u);
                    if (void 0 !== s && (i = Nr(s)), null == i) return !1;
                    if (null != i.imports && !d) {
                        let M;
                        r.push(u);
                        try {
                            Xi(i.imports, N => {
                                this.processInjectorType(N, n, r) && (void 0 === M && (M = []), M.push(N))
                            })
                        } finally {}
                        if (void 0 !== M)
                            for (let N = 0; N < M.length; N++) {
                                const {
                                    ngModule: j,
                                    providers: $
                                } = M[N];
                                Xi($, X => this.processProvider(X, j, $ || ht))
                            }
                    }
                    this.injectorDefTypes.add(u);
                    const h = jr(u) || (() => new u);
                    this.records.set(u, fo(h, sa));
                    const w = i.providers;
                    if (null != w && !d) {
                        const M = t;
                        Xi(w, N => this.processProvider(N, M, w))
                    }
                    return void 0 !== s && void 0 !== t.providers
                }
                processProvider(t, n, r) {
                    let i = ho(t = be(t)) ? t : be(t && t.provide);
                    const s = function gv(e, t, n) {
                        return mf(e) ? fo(void 0, e.useValue) : fo(gf(e), sa)
                    }(t);
                    if (ho(t) || !0 !== t.multi) this.records.get(i);
                    else {
                        let u = this.records.get(i);
                        u || (u = fo(void 0, sa, !0), u.factory = () => ml(u.multi), this.records.set(i, u)), i = t, u.multi.push(t)
                    }
                    this.records.set(i, s)
                }
                hydrate(t, n) {
                    return n.value === sa && (n.value = fv, n.value = n.factory()), "object" == typeof n.value && n.value && function Dv(e) {
                        return null !== e && "object" == typeof e && "function" == typeof e.ngOnDestroy
                    }(n.value) && this.onDestroy.add(n.value), n.value
                }
                injectableDefInScope(t) {
                    if (!t.providedIn) return !1;
                    const n = be(t.providedIn);
                    return "string" == typeof n ? "any" === n || n === this.scope : this.injectorDefTypes.has(n)
                }
            }

            function du(e) {
                const t = Tn(e),
                    n = null !== t ? t.factory : jr(e);
                if (null !== n) return n;
                if (e instanceof A) throw new qe(204, !1);
                if (e instanceof Function) return function pv(e) {
                    const t = e.length;
                    if (t > 0) throw function Go(e, t) {
                        const n = [];
                        for (let r = 0; r < e; r++) n.push(t);
                        return n
                    }(t, "?"), new qe(204, !1);
                    const n = function si(e) {
                        const t = e && (e[_r] || e[Yr]);
                        if (t) {
                            const n = function Cn(e) {
                                if (e.hasOwnProperty("name")) return e.name;
                                const t = ("" + e).match(/^function\s*([^\s(]+)/);
                                return null === t ? "" : t[1]
                            }(e);
                            return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`), t
                        }
                        return null
                    }(e);
                    return null !== n ? () => n.factory(e) : () => new e
                }(e);
                throw new qe(204, !1)
            }

            function gf(e, t, n) {
                let r;
                if (ho(e)) {
                    const i = be(e);
                    return jr(i) || du(i)
                }
                if (mf(e)) r = () => be(e.useValue);
                else if (function yv(e) {
                        return !(!e || !e.useFactory)
                    }(e)) r = () => e.useFactory(...ml(e.deps || []));
                else if (function mv(e) {
                        return !(!e || !e.useExisting)
                    }(e)) r = () => er(be(e.useExisting));
                else {
                    const i = be(e && (e.useClass || e.provide));
                    if (! function _v(e) {
                            return !!e.deps
                        }(e)) return jr(i) || du(i);
                    r = () => new i(...ml(e.deps))
                }
                return r
            }

            function fo(e, t, n = !1) {
                return {
                    factory: e,
                    value: t,
                    multi: n ? [] : void 0
                }
            }

            function mf(e) {
                return null !== e && "object" == typeof e && Yg in e
            }

            function ho(e) {
                return "function" == typeof e
            }
            let is = (() => {
                class e {
                    static create(n, r) {
                        var i;
                        if (Array.isArray(n)) return hf({
                            name: ""
                        }, r, n, ""); {
                            const s = null !== (i = n.name) && void 0 !== i ? i : "";
                            return hf({
                                name: s
                            }, n.parent, n.providers, s)
                        }
                    }
                }
                return e.THROW_IF_NOT_FOUND = zo, e.NULL = new df, e.\u0275prov = kt({
                    token: e,
                    providedIn: "any",
                    factory: () => er(lu)
                }), e.__NG_ELEMENT_ID__ = -1, e
            })();

            function Iv(e, t) {
                o(Ml(e)[1], gn())
            }

            function pu(e) {
                let t = function Tf(e) {
                        return Object.getPrototypeOf(e.prototype).constructor
                    }(e.type),
                    n = !0;
                const r = [e];
                for (; t;) {
                    let i;
                    if (Pn(e)) i = t.\u0275cmp || t.\u0275dir;
                    else {
                        if (t.\u0275cmp) throw new qe(903, "");
                        i = t.\u0275dir
                    }
                    if (i) {
                        if (n) {
                            r.push(i);
                            const u = e;
                            u.inputs = gu(e.inputs), u.declaredInputs = gu(e.declaredInputs), u.outputs = gu(e.outputs);
                            const d = i.hostBindings;
                            d && Nv(e, d);
                            const h = i.viewQuery,
                                w = i.contentQueries;
                            if (h && Pv(e, h), w && Fv(e, w), me(e.inputs, i.inputs), me(e.declaredInputs, i.declaredInputs), me(e.outputs, i.outputs), Pn(i) && i.data.animation) {
                                const M = e.data;
                                M.animation = (M.animation || []).concat(i.data.animation)
                            }
                        }
                        const s = i.features;
                        if (s)
                            for (let u = 0; u < s.length; u++) {
                                const d = s[u];
                                d && d.ngInherit && d(e), d === pu && (n = !1)
                            }
                    }
                    t = Object.getPrototypeOf(t)
                }! function Ov(e) {
                    let t = 0,
                        n = null;
                    for (let r = e.length - 1; r >= 0; r--) {
                        const i = e[r];
                        i.hostVars = t += i.hostVars, i.hostAttrs = ln(i.hostAttrs, n = ln(n, i.hostAttrs))
                    }
                }(r)
            }

            function gu(e) {
                return e === ir ? {} : e === ht ? [] : e
            }

            function Pv(e, t) {
                const n = e.viewQuery;
                e.viewQuery = n ? (r, i) => {
                    t(r, i), n(r, i)
                } : t
            }

            function Fv(e, t) {
                const n = e.contentQueries;
                e.contentQueries = n ? (r, i, s) => {
                    t(r, i, s), n(r, i, s)
                } : t
            }

            function Nv(e, t) {
                const n = e.hostBindings;
                e.hostBindings = n ? (r, i) => {
                    t(r, i), n(r, i)
                } : t
            }
            let Ua = null;

            function po() {
                if (!Ua) {
                    const e = at.Symbol;
                    if (e && e.iterator) Ua = e.iterator;
                    else {
                        const t = Object.getOwnPropertyNames(Map.prototype);
                        for (let n = 0; n < t.length; ++n) {
                            const r = t[n];
                            "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Ua = r)
                        }
                    }
                }
                return Ua
            }

            function oa(e) {
                return !!mu(e) && (Array.isArray(e) || !(e instanceof Map) && po() in e)
            }

            function mu(e) {
                return null !== e && ("function" == typeof e || "object" == typeof e)
            }

            function ss(e, t, n) {
                return e[t] = n
            }

            function yr(e, t, n) {
                return !Object.is(e[t], n) && (e[t] = n, !0)
            }

            function Us(e, t, n, r) {
                const i = yr(e, t, n);
                return yr(e, t + 1, r) || i
            }

            function yu(e, t, n, r) {
                const i = ae();
                return yr(i, Qi(), t) && (pt(), rs(qt(), i, e, t, n, r)), yu
            }

            function mo(e, t, n, r) {
                return yr(e, Qi(), n) ? t + Ne(n) + r : st
            }

            function yo(e, t, n, r, i, s) {
                const d = Us(e, function Gr() {
                    return Me.lFrame.bindingIndex
                }(), n, i);
                return Sr(2), d ? t + Ne(n) + r + Ne(i) + s : st
            }

            function Vf(e, t, n, r, i, s, u, d) {
                const h = ae(),
                    w = pt(),
                    M = e + 20,
                    N = w.firstCreatePass ? function jv(e, t, n, r, i, s, u, d, h) {
                        const w = t.consts,
                            M = lo(t, e, 4, u || null, I(w, d));
                        tu(t, n, M, I(w, h)), o(t, M);
                        const N = M.tViews = Ba(2, M, r, i, s, t.directiveRegistry, t.pipeRegistry, null, t.schemas, w);
                        return null !== t.queries && (t.queries.template(t, M), N.queries = t.queries.embeddedTView(M)), M
                    }(M, w, h, t, n, r, i, s, u) : w.data[M];
                Qn(N, !1);
                const j = h[11].createComment("");
                xa(w, h, j, N), mr(j, h), ja(h, h[M] = rf(j, h, j, N)), ai(N) && Xl(w, h, N), null != u && eu(h, N, d)
            }

            function la(e, t = Le.Default) {
                const n = ae();
                return null === n ? er(e, t) : Vs(gn(), n, be(e), t)
            }

            function Kf() {
                throw new Error("invalid")
            }

            function Eu(e, t, n) {
                const r = ae();
                return yr(r, Qi(), t) && ni(pt(), qt(), r, e, t, r[11], n, !1), Eu
            }

            function bu(e, t, n, r, i) {
                const u = i ? "class" : "style";
                cf(e, n, t.inputs[u], u, r)
            }

            function za(e, t, n, r) {
                const i = ae(),
                    s = pt(),
                    u = 20 + e,
                    d = i[11],
                    h = i[u] = xl(d, t, function Ho() {
                        return Me.lFrame.currentNamespace
                    }()),
                    w = s.firstCreatePass ? function l_(e, t, n, r, i, s, u) {
                        const d = t.consts,
                            w = lo(t, e, 2, i, I(d, s));
                        return tu(t, n, w, I(d, u)), null !== w.attrs && Ha(w, w.attrs, !1), null !== w.mergedAttrs && Ha(w, w.mergedAttrs, !0), null !== t.queries && t.queries.elementStart(t, w), w
                    }(u, s, i, 0, t, n, r) : s.data[u];
                Qn(w, !0);
                const M = w.mergedAttrs;
                null !== M && Kt(d, h, M);
                const N = w.classes;
                null !== N && jl(d, h, N);
                const j = w.styles;
                return null !== j && Sd(d, h, j), 64 != (64 & w.flags) && xa(s, i, h, w), 0 === function Xr() {
                        return Me.lFrame.elementDepthCount
                    }() && mr(h, i),
                    function $r() {
                        Me.lFrame.elementDepthCount++
                    }(), ai(w) && (Xl(s, i, w), zd(s, w, i)), null !== r && eu(i, w), za
            }

            function Wa() {
                let e = gn();
                bs() ? qi() : (e = e.parent, Qn(e, !1));
                const t = e;
                ! function Bn() {
                    Me.lFrame.elementDepthCount--
                }();
                const n = pt();
                return n.firstCreatePass && (o(n, e), Lr(e) && n.queries.elementEnd(e)), null != t.classesWithoutHost && function ut(e) {
                    return 0 != (16 & e.flags)
                }(t) && bu(n, t, ae(), t.classesWithoutHost, !0), null != t.stylesWithoutHost && function je(e) {
                    return 0 != (32 & e.flags)
                }(t) && bu(n, t, ae(), t.stylesWithoutHost, !1), Wa
            }

            function wu(e, t, n, r) {
                return za(e, t, n, r), Wa(), wu
            }

            function Ya(e, t, n) {
                const r = ae(),
                    i = pt(),
                    s = e + 20,
                    u = i.firstCreatePass ? function u_(e, t, n, r, i) {
                        const s = t.consts,
                            u = I(s, r),
                            d = lo(t, e, 8, "ng-container", u);
                        return null !== u && Ha(d, u, !0), tu(t, n, d, I(s, i)), null !== t.queries && t.queries.elementStart(t, d), d
                    }(s, i, r, t, n) : i.data[s];
                Qn(u, !0);
                const d = r[s] = r[11].createComment("");
                return xa(i, r, d, u), mr(d, r), ai(u) && (Xl(i, r, u), zd(i, u, r)), null != n && eu(r, u), Ya
            }

            function qa() {
                let e = gn();
                const t = pt();
                return bs() ? qi() : (e = e.parent, Qn(e, !1)), t.firstCreatePass && (o(t, e), Lr(e) && t.queries.elementEnd(e)), qa
            }

            function Zf() {
                return ae()
            }

            function Su(e) {
                return !!e && "function" == typeof e.then
            }

            function Jf(e) {
                return !!e && "function" == typeof e.subscribe
            }
            const Xf = Jf;

            function Mu(e, t, n, r) {
                const i = ae(),
                    s = pt(),
                    u = gn();
                return function th(e, t, n, r, i, s, u, d) {
                    const h = ai(r),
                        M = e.firstCreatePass && af(e),
                        N = t[8],
                        j = of (t);
                    let $ = !0;
                    if (3 & r.type || d) {
                        const ge = rt(r, t),
                            Fe = d ? d(ge) : ge,
                            se = j.length,
                            He = d ? vt => d(Ye(vt[r.index])) : r.index;
                        if (de(n)) {
                            let vt = null;
                            if (!d && h && (vt = function c_(e, t, n, r) {
                                    const i = e.cleanup;
                                    if (null != i)
                                        for (let s = 0; s < i.length - 1; s += 2) {
                                            const u = i[s];
                                            if (u === n && i[s + 1] === r) {
                                                const d = t[7],
                                                    h = i[s + 2];
                                                return d.length > h ? d[h] : null
                                            }
                                            "string" == typeof u && (s += 2)
                                        }
                                    return null
                                }(e, t, i, r.index)), null !== vt)(vt.__ngLastListenerFn__ || vt).__ngNextListenerFn__ = s, vt.__ngLastListenerFn__ = s, $ = !1;
                            else {
                                s = Au(r, t, N, s, !1);
                                const Ht = n.listen(Fe, i, s);
                                j.push(s, Ht), M && M.push(i, He, se, se + 1)
                            }
                        } else s = Au(r, t, N, s, !0), Fe.addEventListener(i, s, u), j.push(s), M && M.push(i, He, se, u)
                    } else s = Au(r, t, N, s, !1);
                    const X = r.outputs;
                    let fe;
                    if ($ && null !== X && (fe = X[i])) {
                        const ge = fe.length;
                        if (ge)
                            for (let Fe = 0; Fe < ge; Fe += 2) {
                                const ri = t[fe[Fe]][fe[Fe + 1]].subscribe(s),
                                    Ws = j.length;
                                j.push(s, ri), M && M.push(i, r.index, Ws, -(Ws + 1))
                            }
                    }
                }(s, i, i[11], u, e, t, !!n, r), Mu
            }

            function nh(e, t, n, r) {
                try {
                    return !1 !== n(r)
                } catch (i) {
                    return uf(e, i), !1
                }
            }

            function Au(e, t, n, r, i) {
                return function s(u) {
                    if (u === Function) return r;
                    const d = 2 & e.flags ? Yt(e.index, t) : t;
                    0 == (32 & t[2]) && iu(d);
                    let h = nh(t, 0, r, u),
                        w = s.__ngNextListenerFn__;
                    for (; w;) h = nh(t, 0, w, u) && h, w = w.__ngNextListenerFn__;
                    return i && !1 === h && (u.preventDefault(), u.returnValue = !1), h
                }
            }

            function rh(e = 1) {
                return function Lo(e) {
                    return (Me.lFrame.contextLView = function ko(e, t) {
                        for (; e > 0;) t = t[15], e--;
                        return t
                    }(e, Me.lFrame.contextLView))[8]
                }(e)
            }

            function Tu(e, t, n) {
                return Ka(e, "", t, "", n), Tu
            }

            function Ka(e, t, n, r, i) {
                const s = ae(),
                    u = mo(s, t, n, r);
                return u !== st && ni(pt(), qt(), s, e, u, s[11], i, !1), Ka
            }

            function Iu(e, t, n, r, i, s, u) {
                const d = ae(),
                    h = yo(d, t, n, r, i, s);
                return h !== st && ni(pt(), qt(), d, e, h, d[11], u, !1), Iu
            }

            function dh(e, t, n, r, i) {
                const s = e[n + 1],
                    u = null === t;
                let d = r ? Li(s) : vs(s),
                    h = !1;
                for (; 0 !== d && (!1 === h || u);) {
                    const M = e[d + 1];
                    m_(e[d], t) && (h = !0, e[d + 1] = r ? $l(M) : Hl(M)), d = r ? Li(M) : vs(M)
                }
                h && (e[n + 1] = r ? Hl(s) : $l(s))
            }

            function m_(e, t) {
                return null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && ro(e, t) >= 0
            }

            function Ou(e, t, n) {
                return Vi(e, t, n, !1), Ou
            }

            function Pu(e, t) {
                return Vi(e, t, null, !0), Pu
            }

            function Vi(e, t, n, r) {
                const i = ae(),
                    s = pt(),
                    u = Sr(2);
                s.firstUpdatePass && function _h(e, t, n, r) {
                    const i = e.data;
                    if (null === i[n + 1]) {
                        const s = i[Mn()],
                            u = function vh(e, t) {
                                return t >= e.expandoStartIndex
                            }(e, n);
                        (function bh(e, t) {
                            return 0 != (e.flags & (t ? 16 : 32))
                        })(s, r) && null === t && !u && (t = !1), t = function S_(e, t, n, r) {
                                const i = function Ii(e) {
                                    const t = Me.lFrame.currentDirectiveIndex;
                                    return -1 === t ? null : e[t]
                                }(e);
                                let s = r ? t.residualClasses : t.residualStyles;
                                if (null === i) 0 === (r ? t.classBindings : t.styleBindings) && (n = ua(n = Fu(null, e, t, n, r), t.attrs, r), s = null);
                                else {
                                    const u = t.directiveStylingLast;
                                    if (-1 === u || e[u] !== i)
                                        if (n = Fu(i, e, t, n, r), null === s) {
                                            let h = function M_(e, t, n) {
                                                const r = n ? t.classBindings : t.styleBindings;
                                                if (0 !== vs(r)) return e[Li(r)]
                                            }(e, t, r);
                                            void 0 !== h && Array.isArray(h) && (h = Fu(null, e, t, h[1], r), h = ua(h, t.attrs, r), function A_(e, t, n, r) {
                                                e[Li(n ? t.classBindings : t.styleBindings)] = r
                                            }(e, t, r, h))
                                        } else s = function T_(e, t, n) {
                                            let r;
                                            const i = t.directiveEnd;
                                            for (let s = 1 + t.directiveStylingLast; s < i; s++) r = ua(r, e[s].hostAttrs, n);
                                            return ua(r, t.attrs, n)
                                        }(e, t, r)
                                }
                                return void 0 !== s && (r ? t.residualClasses = s : t.residualStyles = s), n
                            }(i, s, t, r),
                            function p_(e, t, n, r, i, s) {
                                let u = s ? t.classBindings : t.styleBindings,
                                    d = Li(u),
                                    h = vs(u);
                                e[r] = n;
                                let M, w = !1;
                                if (Array.isArray(n)) {
                                    const N = n;
                                    M = N[1], (null === M || ro(N, M) > 0) && (w = !0)
                                } else M = n;
                                if (i)
                                    if (0 !== h) {
                                        const j = Li(e[d + 1]);
                                        e[r + 1] = La(j, d), 0 !== j && (e[j + 1] = Ul(e[j + 1], r)), e[d + 1] = function Ay(e, t) {
                                            return 131071 & e | t << 17
                                        }(e[d + 1], r)
                                    } else e[r + 1] = La(d, 0), 0 !== d && (e[d + 1] = Ul(e[d + 1], r)), d = r;
                                else e[r + 1] = La(h, 0), 0 === d ? d = r : e[h + 1] = Ul(e[h + 1], r), h = r;
                                w && (e[r + 1] = Hl(e[r + 1])), dh(e, M, r, !0), dh(e, M, r, !1),
                                    function g_(e, t, n, r, i) {
                                        const s = i ? e.residualClasses : e.residualStyles;
                                        null != s && "string" == typeof t && ro(s, t) >= 0 && (n[r + 1] = $l(n[r + 1]))
                                    }(t, M, e, r, s), u = La(d, h), s ? t.classBindings = u : t.styleBindings = u
                            }(i, s, t, n, u, r)
                    }
                }(s, e, u, r), t !== st && yr(i, u, t) && function Ch(e, t, n, r, i, s, u, d) {
                    if (!(3 & t.type)) return;
                    const h = e.data,
                        w = h[d + 1];
                    Qa(function Rd(e) {
                        return 1 == (1 & e)
                    }(w) ? Eh(h, t, n, i, vs(w), u) : void 0) || (Qa(s) || function xd(e) {
                        return 2 == (2 & e)
                    }(w) && (s = Eh(h, null, n, i, d, u)), function gy(e, t, n, r, i) {
                        const s = de(e);
                        if (t) i ? s ? e.addClass(n, r) : n.classList.add(r) : s ? e.removeClass(n, r) : n.classList.remove(r);
                        else {
                            let u = -1 === r.indexOf("-") ? void 0 : ns.DashCase;
                            if (null == i) s ? e.removeStyle(n, r, u) : n.style.removeProperty(r);
                            else {
                                const d = "string" == typeof i && i.endsWith("!important");
                                d && (i = i.slice(0, -10), u |= ns.Important), s ? e.setStyle(n, r, i, u) : n.style.setProperty(r, i, d ? "important" : "")
                            }
                        }
                    }(r, u, Dt(Mn(), n), i, s))
                }(s, s.data[Mn()], i, i[11], e, i[u + 1] = function P_(e, t) {
                    return null == e || ("string" == typeof t ? e += t : "object" == typeof e && (e = ne(Fs(e)))), e
                }(t, n), r, u)
            }

            function Fu(e, t, n, r, i) {
                let s = null;
                const u = n.directiveEnd;
                let d = n.directiveStylingLast;
                for (-1 === d ? d = n.directiveStart : d++; d < u && (s = t[d], r = ua(r, s.hostAttrs, i), s !== e);) d++;
                return null !== e && (n.directiveStylingLast = d), r
            }

            function ua(e, t, n) {
                const r = n ? 1 : 2;
                let i = -1;
                if (null !== t)
                    for (let s = 0; s < t.length; s++) {
                        const u = t[s];
                        "number" == typeof u ? i = u : i === r && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]), ti(e, u, !!n || t[++s]))
                    }
                return void 0 === e ? null : e
            }

            function Eh(e, t, n, r, i, s) {
                const u = null === t;
                let d;
                for (; i > 0;) {
                    const h = e[i],
                        w = Array.isArray(h),
                        M = w ? h[1] : h,
                        N = null === M;
                    let j = n[i + 1];
                    j === st && (j = N ? ht : void 0);
                    let $ = N ? hl(j, r) : M === r ? j : void 0;
                    if (w && !Qa($) && ($ = hl(h, r)), Qa($) && (d = $, u)) return d;
                    const X = e[i + 1];
                    i = u ? Li(X) : vs(X)
                }
                if (null !== t) {
                    let h = s ? t.residualClasses : t.residualStyles;
                    null != h && (d = hl(h, r))
                }
                return d
            }

            function Qa(e) {
                return void 0 !== e
            }

            function wh(e, t = "") {
                const n = ae(),
                    r = pt(),
                    i = e + 20,
                    s = r.firstCreatePass ? lo(r, i, 1, t, null) : r.data[i],
                    u = n[i] = function Nl(e, t) {
                        return de(e) ? e.createText(t) : e.createTextNode(t)
                    }(n[11], t);
                xa(r, n, u, s), Qn(s, !1)
            }

            function Nu(e) {
                return Za("", e, ""), Nu
            }

            function Za(e, t, n) {
                const r = ae(),
                    i = mo(r, e, t, n);
                return i !== st && _s(r, Mn(), i), Za
            }

            function xu(e, t, n, r, i) {
                const s = ae(),
                    u = yo(s, e, t, n, r, i);
                return u !== st && _s(s, Mn(), u), xu
            }
            const $s = void 0;
            var Z_ = ["en", [
                    ["a", "p"],
                    ["AM", "PM"], $s
                ],
                [
                    ["AM", "PM"], $s, $s
                ],
                [
                    ["S", "M", "T", "W", "T", "F", "S"],
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                ], $s, [
                    ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                ], $s, [
                    ["B", "A"],
                    ["BC", "AD"],
                    ["Before Christ", "Anno Domini"]
                ], 0, [6, 0],
                ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                ["{1}, {0}", $s, "{1} 'at' {0}", $s],
                [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
                function Q_(e) {
                    const n = Math.floor(Math.abs(e)),
                        r = e.toString().replace(/^[^.]*\.?/, "").length;
                    return 1 === n && 0 === r ? 1 : 5
                }
            ];
            let Mo = {};

            function Ru(e) {
                const t = function J_(e) {
                    return e.toLowerCase().replace(/_/g, "-")
                }(e);
                let n = Gh(t);
                if (n) return n;
                const r = t.split("-")[0];
                if (n = Gh(r), n) return n;
                if ("en" === r) return Z_;
                throw new Error(`Missing locale data for the locale "${e}".`)
            }

            function $h(e) {
                return Ru(e)[ze.PluralCase]
            }

            function Gh(e) {
                return e in Mo || (Mo[e] = at.ng && at.ng.common && at.ng.common.locales && at.ng.common.locales[e]), Mo[e]
            }
            var ze = (() => ((ze = ze || {})[ze.LocaleId = 0] = "LocaleId", ze[ze.DayPeriodsFormat = 1] = "DayPeriodsFormat", ze[ze.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", ze[ze.DaysFormat = 3] = "DaysFormat", ze[ze.DaysStandalone = 4] = "DaysStandalone", ze[ze.MonthsFormat = 5] = "MonthsFormat", ze[ze.MonthsStandalone = 6] = "MonthsStandalone", ze[ze.Eras = 7] = "Eras", ze[ze.FirstDayOfWeek = 8] = "FirstDayOfWeek", ze[ze.WeekendRange = 9] = "WeekendRange", ze[ze.DateFormat = 10] = "DateFormat", ze[ze.TimeFormat = 11] = "TimeFormat", ze[ze.DateTimeFormat = 12] = "DateTimeFormat", ze[ze.NumberSymbols = 13] = "NumberSymbols", ze[ze.NumberFormats = 14] = "NumberFormats", ze[ze.CurrencyCode = 15] = "CurrencyCode", ze[ze.CurrencySymbol = 16] = "CurrencySymbol", ze[ze.CurrencyName = 17] = "CurrencyName", ze[ze.Currencies = 18] = "Currencies", ze[ze.Directionality = 19] = "Directionality", ze[ze.PluralCase = 20] = "PluralCase", ze[ze.ExtraData = 21] = "ExtraData", ze))();
            const Ja = "en-US";
            let zh = Ja;

            function Vu(e, t, n, r, i) {
                if (e = be(e), Array.isArray(e))
                    for (let s = 0; s < e.length; s++) Vu(e[s], t, n, r, i);
                else {
                    const s = pt(),
                        u = ae();
                    let d = ho(e) ? e : be(e.provide),
                        h = gf(e);
                    const w = gn(),
                        M = 1048575 & w.providerIndexes,
                        N = w.directiveStart,
                        j = w.providerIndexes >> 20;
                    if (ho(e) || !e.multi) {
                        const $ = new G(h, i, la),
                            X = ju(d, t, i ? M : M + j, N); - 1 === X ? (Hn(xe(w, u), s, d), Bu(s, e, t.length), t.push(d), w.directiveStart++, w.directiveEnd++, i && (w.providerIndexes += 1048576), n.push($), u.push($)) : (n[X] = $, u[X] = $)
                    } else {
                        const $ = ju(d, t, M + j, N),
                            X = ju(d, t, M, M + j),
                            fe = $ >= 0 && n[$],
                            ge = X >= 0 && n[X];
                        if (i && !ge || !i && !fe) {
                            Hn(xe(w, u), s, d);
                            const Fe = function QD(e, t, n, r, i) {
                                const s = new G(e, n, la);
                                return s.multi = [], s.index = t, s.componentProviders = 0, gp(s, i, r && !n), s
                            }(i ? KD : qD, n.length, i, r, h);
                            !i && ge && (n[X].providerFactory = Fe), Bu(s, e, t.length, 0), t.push(d), w.directiveStart++, w.directiveEnd++, i && (w.providerIndexes += 1048576), n.push(Fe), u.push(Fe)
                        } else Bu(s, e, $ > -1 ? $ : X, gp(n[i ? X : $], h, !i && r));
                        !i && r && ge && n[X].componentProviders++
                    }
                }
            }

            function Bu(e, t, n, r) {
                const i = ho(t),
                    s = function vv(e) {
                        return !!e.useClass
                    }(t);
                if (i || s) {
                    const h = (s ? be(t.useClass) : t).prototype.ngOnDestroy;
                    if (h) {
                        const w = e.destroyHooks || (e.destroyHooks = []);
                        if (!i && t.multi) {
                            const M = w.indexOf(n); - 1 === M ? w.push(n, [r, h]) : w[M + 1].push(r, h)
                        } else w.push(n, h)
                    }
                }
            }

            function gp(e, t, n) {
                return n && e.componentProviders++, e.multi.push(t) - 1
            }

            function ju(e, t, n, r) {
                for (let i = n; i < r; i++)
                    if (t[i] === e) return i;
                return -1
            }

            function qD(e, t, n, r) {
                return Hu(this.multi, [])
            }

            function KD(e, t, n, r) {
                const i = this.multi;
                let s;
                if (this.providerFactory) {
                    const u = this.providerFactory.componentProviders,
                        d = Or(n, n[1], this.providerFactory.index, r);
                    s = d.slice(0, u), Hu(i, s);
                    for (let h = u; h < d.length; h++) s.push(d[h])
                } else s = [], Hu(i, s);
                return s
            }

            function Hu(e, t) {
                for (let n = 0; n < e.length; n++) t.push((0, e[n])());
                return t
            }

            function mp(e, t = []) {
                return n => {
                    n.providersResolver = (r, i) => function YD(e, t, n) {
                        const r = pt();
                        if (r.firstCreatePass) {
                            const i = Pn(e);
                            Vu(n, r.data, r.blueprint, i, !0), Vu(t, r.data, r.blueprint, i, !1)
                        }
                    }(r, i ? i(e) : e, t)
                }
            }
            class yp {}
            class XD {
                resolveComponentFactory(t) {
                    throw function JD(e) {
                        const t = Error(`No component factory found for ${ne(e)}. Did you add it to @NgModule.entryComponents?`);
                        return t.ngComponent = e, t
                    }(t)
                }
            }
            let rl = (() => {
                class e {}
                return e.NULL = new XD, e
            })();

            function eC() {
                return To(gn(), ae())
            }

            function To(e, t) {
                return new pa(rt(e, t))
            }
            let pa = (() => {
                class e {
                    constructor(n) {
                        this.nativeElement = n
                    }
                }
                return e.__NG_ELEMENT_ID__ = eC, e
            })();

            function tC(e) {
                return e instanceof pa ? e.nativeElement : e
            }
            class _p {}
            let nC = (() => {
                    class e {}
                    return e.__NG_ELEMENT_ID__ = () => function iC() {
                        const e = ae(),
                            n = Yt(gn().index, e);
                        return function rC(e) {
                            return e[11]
                        }(_n(n) ? n : e)
                    }(), e
                })(),
                sC = (() => {
                    class e {}
                    return e.\u0275prov = kt({
                        token: e,
                        providedIn: "root",
                        factory: () => null
                    }), e
                })();
            class Dp {
                constructor(t) {
                    this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
                }
            }
            const oC = new Dp("13.3.11"),
                Uu = {};

            function il(e, t, n, r, i = !1) {
                for (; null !== n;) {
                    const s = t[n.index];
                    if (null !== s && r.push(Ye(s)), Rt(s))
                        for (let d = 10; d < s.length; d++) {
                            const h = s[d],
                                w = h[1].firstChild;
                            null !== w && il(h[1], h, w, r)
                        }
                    const u = n.type;
                    if (8 & u) il(e, t, n.child, r);
                    else if (32 & u) {
                        const d = Ol(n, t);
                        let h;
                        for (; h = d();) r.push(h)
                    } else if (16 & u) {
                        const d = Ed(t, n);
                        if (Array.isArray(d)) r.push(...d);
                        else {
                            const h = ta(t[16]);
                            il(h[1], h, d, r, !0)
                        }
                    }
                    n = i ? n.projectionNext : n.next
                }
                return r
            }
            class ga {
                constructor(t, n) {
                    this._lView = t, this._cdRefInjectingView = n, this._appRef = null, this._attachedToViewContainer = !1
                }
                get rootNodes() {
                    const t = this._lView,
                        n = t[1];
                    return il(n, t, n.firstChild, [])
                }
                get context() {
                    return this._lView[8]
                }
                set context(t) {
                    this._lView[8] = t
                }
                get destroyed() {
                    return 256 == (256 & this._lView[2])
                }
                destroy() {
                    if (this._appRef) this._appRef.detachView(this);
                    else if (this._attachedToViewContainer) {
                        const t = this._lView[3];
                        if (Rt(t)) {
                            const n = t[8],
                                r = n ? n.indexOf(this) : -1;
                            r > -1 && (Rl(t, r), ba(n, r))
                        }
                        this._attachedToViewContainer = !1
                    }
                    hd(this._lView[1], this._lView)
                }
                onDestroy(t) {
                    Kd(this._lView[1], this._lView, null, t)
                }
                markForCheck() {
                    iu(this._cdRefInjectingView || this._lView)
                }
                detach() {
                    this._lView[2] &= -129
                }
                reattach() {
                    this._lView[2] |= 128
                }
                detectChanges() {
                    ! function ou(e, t, n) {
                        const r = t[10];
                        r.begin && r.begin();
                        try {
                            co(e, t, e.template, n)
                        } catch (i) {
                            throw uf(t, i), i
                        } finally {
                            r.end && r.end()
                        }
                    }(this._lView[1], this._lView, this.context)
                }
                checkNoChanges() {}
                attachToViewContainerRef() {
                    if (this._appRef) throw new qe(902, "");
                    this._attachedToViewContainer = !0
                }
                detachFromAppRef() {
                    this._appRef = null,
                        function sy(e, t) {
                            na(e, t, t[11], 2, null, null)
                        }(this._lView[1], this._lView)
                }
                attachToAppRef(t) {
                    if (this._attachedToViewContainer) throw new qe(902, "");
                    this._appRef = t
                }
            }
            class aC extends ga {
                constructor(t) {
                    super(t), this._view = t
                }
                detectChanges() {
                    sf(this._view)
                }
                checkNoChanges() {}
                get context() {
                    return null
                }
            }
            class Cp extends rl {
                constructor(t) {
                    super(), this.ngModule = t
                }
                resolveComponentFactory(t) {
                    const n = Wt(t);
                    return new $u(n, this.ngModule)
                }
            }

            function Ep(e) {
                const t = [];
                for (let n in e) e.hasOwnProperty(n) && t.push({
                    propName: e[n],
                    templateName: n
                });
                return t
            }
            class $u extends yp {
                constructor(t, n) {
                    super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = function Sy(e) {
                        return e.map(wy).join(",")
                    }(t.selectors), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!n
                }
                get inputs() {
                    return Ep(this.componentDef.inputs)
                }
                get outputs() {
                    return Ep(this.componentDef.outputs)
                }
                create(t, n, r, i) {
                    const s = (i = i || this.ngModule) ? function uC(e, t) {
                            return {
                                get: (n, r, i) => {
                                    const s = e.get(n, Uu, i);
                                    return s !== Uu || r === Uu ? s : t.get(n, r, i)
                                }
                            }
                        }(t, i.injector) : t,
                        u = s.get(_p, At),
                        d = s.get(sC, null),
                        h = u.createRenderer(null, this.componentDef),
                        w = this.componentDef.selectors[0][0] || "div",
                        M = r ? function qd(e, t, n) {
                            if (de(e)) return e.selectRootElement(t, n === wn.ShadowDom);
                            let r = "string" == typeof t ? e.querySelector(t) : t;
                            return r.textContent = "", r
                        }(h, r, this.componentDef.encapsulation) : xl(u.createRenderer(null, this.componentDef), w, function lC(e) {
                            const t = e.toLowerCase();
                            return "svg" === t ? "svg" : "math" === t ? _ : null
                        }(w)),
                        N = this.componentDef.onPush ? 576 : 528,
                        j = function Af(e, t) {
                            return {
                                components: [],
                                scheduler: e || Jm,
                                clean: uv,
                                playerHandler: t || null,
                                flags: 0
                            }
                        }(),
                        $ = Ba(0, null, null, 1, 0, null, null, null, null, null),
                        X = ra(null, $, j, N, null, null, u, h, d, s);
                    let fe, ge;
                    Pi(X);
                    try {
                        const Fe = function Sf(e, t, n, r, i, s) {
                            const u = n[1];
                            n[20] = e;
                            const h = lo(u, 20, 2, "#host", null),
                                w = h.mergedAttrs = t.hostAttrs;
                            null !== w && (Ha(h, w, !0), null !== e && (Kt(i, e, w), null !== h.classes && jl(i, e, h.classes), null !== h.styles && Sd(i, e, h.styles)));
                            const M = r.createRenderer(e, t),
                                N = ra(n, Wd(t), null, t.onPush ? 64 : 16, n[20], h, r, M, s || null, null);
                            return u.firstCreatePass && (Hn(xe(h, n), u, t.type), ef(u, h), tf(h, n.length, 1)), ja(n, N), n[20] = N
                        }(M, this.componentDef, X, u, h);
                        if (M)
                            if (r) Kt(h, M, ["ng-version", oC.full]);
                            else {
                                const {
                                    attrs: se,
                                    classes: He
                                } = function My(e) {
                                    const t = [],
                                        n = [];
                                    let r = 1,
                                        i = 2;
                                    for (; r < e.length;) {
                                        let s = e[r];
                                        if ("string" == typeof s) 2 === i ? "" !== s && t.push(s, e[++r]) : 8 === i && n.push(s);
                                        else {
                                            if (!Ri(i)) break;
                                            i = s
                                        }
                                        r++
                                    }
                                    return {
                                        attrs: t,
                                        classes: n
                                    }
                                }(this.componentDef.selectors[0]);
                                se && Kt(h, M, se), He && He.length > 0 && jl(h, M, He.join(" "))
                            } if (ge = dr($, 20), void 0 !== n) {
                            const se = ge.projection = [];
                            for (let He = 0; He < this.ngContentSelectors.length; He++) {
                                const vt = n[He];
                                se.push(null != vt ? Array.from(vt) : null)
                            }
                        }
                        fe = function Mf(e, t, n, r, i) {
                            const s = n[1],
                                u = function Yy(e, t, n) {
                                    const r = gn();
                                    e.firstCreatePass && (n.providersResolver && n.providersResolver(n), nf(e, r, t, uo(e, t, 1, null), n));
                                    const i = Or(t, e, r.directiveStart, r);
                                    mr(i, t);
                                    const s = rt(r, t);
                                    return s && mr(s, t), i
                                }(s, n, t);
                            if (r.components.push(u), e[8] = u, i && i.forEach(h => h(u, t)), t.contentQueries) {
                                const h = gn();
                                t.contentQueries(1, u, h.directiveStart)
                            }
                            const d = gn();
                            return !s.firstCreatePass || null === t.hostBindings && null === t.hostAttrs || (gi(d.index), Jd(n[1], d, 0, d.directiveStart, d.directiveEnd, t), Xd(t, u)), u
                        }(Fe, this.componentDef, X, j, [Iv]), ia($, X, null)
                    } finally {
                        As()
                    }
                    return new dC(this.componentType, fe, To(ge, X), X, ge)
                }
            }
            class dC extends class ZD {} {
                constructor(t, n, r, i, s) {
                    super(), this.location = r, this._rootLView = i, this._tNode = s, this.instance = n, this.hostView = this.changeDetectorRef = new aC(i), this.componentType = t
                }
                get injector() {
                    return new Is(this._tNode, this._rootLView)
                }
                destroy() {
                    this.hostView.destroy()
                }
                onDestroy(t) {
                    this.hostView.onDestroy(t)
                }
            }
            class Io {}
            class bp {}
            const Oo = new Map;
            class Mp extends Io {
                constructor(t, n) {
                    super(), this._parent = n, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new Cp(this);
                    const r = St(t);
                    this._bootstrapComponents = ts(r.bootstrap), this._r3Injector = pf(t, n, [{
                        provide: Io,
                        useValue: this
                    }, {
                        provide: rl,
                        useValue: this.componentFactoryResolver
                    }], ne(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t)
                }
                get(t, n = is.THROW_IF_NOT_FOUND, r = Le.Default) {
                    return t === is || t === Io || t === lu ? this : this._r3Injector.get(t, n, r)
                }
                destroy() {
                    const t = this._r3Injector;
                    !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null
                }
                onDestroy(t) {
                    this.destroyCbs.push(t)
                }
            }
            class Gu extends bp {
                constructor(t) {
                    super(), this.moduleType = t, null !== St(t) && function hC(e) {
                        const t = new Set;
                        ! function n(r) {
                            const i = St(r, !0),
                                s = i.id;
                            null !== s && (function wp(e, t, n) {
                                if (t && t !== n) throw new Error(`Duplicate module registered for ${e} - ${ne(t)} vs ${ne(t.name)}`)
                            }(s, Oo.get(s), r), Oo.set(s, r));
                            const u = ts(i.imports);
                            for (const d of u) t.has(d) || (t.add(d), n(d))
                        }(e)
                    }(t)
                }
                create(t) {
                    return new Mp(this.moduleType, t)
                }
            }

            function Ap(e, t, n) {
                const r = jn() + e,
                    i = ae();
                return i[r] === st ? ss(i, r, n ? t.call(n) : t()) : function aa(e, t) {
                    return e[t]
                }(i, r)
            }

            function Tp(e, t, n, r) {
                return function Pp(e, t, n, r, i, s) {
                    const u = t + n;
                    return yr(e, u, i) ? ss(e, u + 1, s ? r.call(s, i) : r(i)) : ma(e, u + 1)
                }(ae(), jn(), e, t, n, r)
            }

            function Ip(e, t, n, r, i) {
                return Fp(ae(), jn(), e, t, n, r, i)
            }

            function Op(e, t, n, r, i, s) {
                return function Np(e, t, n, r, i, s, u, d) {
                    const h = t + n;
                    return function $a(e, t, n, r, i) {
                        const s = Us(e, t, n, r);
                        return yr(e, t + 2, i) || s
                    }(e, h, i, s, u) ? ss(e, h + 3, d ? r.call(d, i, s, u) : r(i, s, u)) : ma(e, h + 3)
                }(ae(), jn(), e, t, n, r, i, s)
            }

            function ma(e, t) {
                const n = e[t];
                return n === st ? void 0 : n
            }

            function Fp(e, t, n, r, i, s, u) {
                const d = t + n;
                return Us(e, d, i, s) ? ss(e, d + 2, u ? r.call(u, i, s) : r(i, s)) : ma(e, d + 2)
            }

            function Lp(e, t) {
                const n = pt();
                let r;
                const i = e + 20;
                n.firstCreatePass ? (r = function DC(e, t) {
                    if (t)
                        for (let n = t.length - 1; n >= 0; n--) {
                            const r = t[n];
                            if (e === r.name) return r
                        }
                }(t, n.pipeRegistry), n.data[i] = r, r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(i, r.onDestroy)) : r = n.data[i];
                const s = r.factory || (r.factory = jr(r.type)),
                    u = ye(la);
                try {
                    const d = Zi(!1),
                        h = s();
                    return Zi(d),
                        function Hv(e, t, n, r) {
                            n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = r
                        }(n, ae(), i, h), h
                } finally {
                    ye(u)
                }
            }

            function kp(e, t, n, r) {
                const i = e + 20,
                    s = ae(),
                    u = function fr(e, t) {
                        return e[t]
                    }(s, i);
                return function ya(e, t) {
                    return e[1].data[t].pure
                }(s, i) ? Fp(s, jn(), t, u.transform, n, r, u) : u.transform(n, r)
            }

            function zu(e) {
                return t => {
                    setTimeout(e, void 0, t)
                }
            }
            const ls = class SC extends ie.xQ {
                constructor(t = !1) {
                    super(), this.__isAsync = t
                }
                emit(t) {
                    super.next(t)
                }
                subscribe(t, n, r) {
                    var i, s, u;
                    let d = t,
                        h = n || (() => null),
                        w = r;
                    if (t && "object" == typeof t) {
                        const N = t;
                        d = null === (i = N.next) || void 0 === i ? void 0 : i.bind(N), h = null === (s = N.error) || void 0 === s ? void 0 : s.bind(N), w = null === (u = N.complete) || void 0 === u ? void 0 : u.bind(N)
                    }
                    this.__isAsync && (h = zu(h), d && (d = zu(d)), w && (w = zu(w)));
                    const M = super.subscribe({
                        next: d,
                        error: h,
                        complete: w
                    });
                    return t instanceof ve.w && t.add(M), M
                }
            };

            function MC() {
                return this._results[po()]()
            }
            class Wu {
                constructor(t = !1) {
                    this._emitDistinctChangesOnly = t, this.dirty = !0, this._results = [], this._changesDetected = !1, this._changes = null, this.length = 0, this.first = void 0, this.last = void 0;
                    const n = po(),
                        r = Wu.prototype;
                    r[n] || (r[n] = MC)
                }
                get changes() {
                    return this._changes || (this._changes = new ls)
                }
                get(t) {
                    return this._results[t]
                }
                map(t) {
                    return this._results.map(t)
                }
                filter(t) {
                    return this._results.filter(t)
                }
                find(t) {
                    return this._results.find(t)
                }
                reduce(t, n) {
                    return this._results.reduce(t, n)
                }
                forEach(t) {
                    this._results.forEach(t)
                }
                some(t) {
                    return this._results.some(t)
                }
                toArray() {
                    return this._results.slice()
                }
                toString() {
                    return this._results.toString()
                }
                reset(t, n) {
                    const r = this;
                    r.dirty = !1;
                    const i = yi(t);
                    (this._changesDetected = ! function fl(e, t, n) {
                        if (e.length !== t.length) return !1;
                        for (let r = 0; r < e.length; r++) {
                            let i = e[r],
                                s = t[r];
                            if (n && (i = n(i), s = n(s)), s !== i) return !1
                        }
                        return !0
                    }(r._results, i, n)) && (r._results = i, r.length = i.length, r.last = i[this.length - 1], r.first = i[0])
                }
                notifyOnChanges() {
                    this._changes && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this)
                }
                setDirty() {
                    this.dirty = !0
                }
                destroy() {
                    this.changes.complete(), this.changes.unsubscribe()
                }
            }
            Symbol;
            let va = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = IC, e
            })();
            const AC = va,
                TC = class extends AC {
                    constructor(t, n, r) {
                        super(), this._declarationLView = t, this._declarationTContainer = n, this.elementRef = r
                    }
                    createEmbeddedView(t) {
                        const n = this._declarationTContainer.tViews,
                            r = ra(this._declarationLView, n, t, 16, null, n.declTNode, null, null, null, null);
                        r[17] = this._declarationLView[this._declarationTContainer.index];
                        const s = this._declarationLView[19];
                        return null !== s && (r[19] = s.createEmbeddedView(n)), ia(n, r, t), new ga(r)
                    }
                };

            function IC() {
                return sl(gn(), ae())
            }

            function sl(e, t) {
                return 4 & e.type ? new TC(t, e, To(e, t)) : null
            }
            let ol = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = OC, e
            })();

            function OC() {
                return jp(gn(), ae())
            }
            const PC = ol,
                Vp = class extends PC {
                    constructor(t, n, r) {
                        super(), this._lContainer = t, this._hostTNode = n, this._hostLView = r
                    }
                    get element() {
                        return To(this._hostTNode, this._hostLView)
                    }
                    get injector() {
                        return new Is(this._hostTNode, this._hostLView)
                    }
                    get parentInjector() {
                        const t = Xt(this._hostTNode, this._hostLView);
                        if (pr(t)) {
                            const n = Lt(t, this._hostLView),
                                r = un(t);
                            return new Is(n[1].data[r + 8], n)
                        }
                        return new Is(null, this._hostLView)
                    }
                    clear() {
                        for (; this.length > 0;) this.remove(this.length - 1)
                    }
                    get(t) {
                        const n = Bp(this._lContainer);
                        return null !== n && n[t] || null
                    }
                    get length() {
                        return this._lContainer.length - 10
                    }
                    createEmbeddedView(t, n, r) {
                        const i = t.createEmbeddedView(n || {});
                        return this.insert(i, r), i
                    }
                    createComponent(t, n, r, i, s) {
                        const u = t && ! function Ps(e) {
                            return "function" == typeof e
                        }(t);
                        let d;
                        if (u) d = n;
                        else {
                            const N = n || {};
                            d = N.index, r = N.injector, i = N.projectableNodes, s = N.ngModuleRef
                        }
                        const h = u ? t : new $u(Wt(t)),
                            w = r || this.parentInjector;
                        if (!s && null == h.ngModule) {
                            const j = (u ? w : this.parentInjector).get(Io, null);
                            j && (s = j)
                        }
                        const M = h.create(w, i, void 0, s);
                        return this.insert(M.hostView, d), M
                    }
                    insert(t, n) {
                        const r = t._lView,
                            i = r[1];
                        if (function m(e) {
                                return Rt(e[3])
                            }(r)) {
                            const M = this.indexOf(t);
                            if (-1 !== M) this.detach(M);
                            else {
                                const N = r[3],
                                    j = new Vp(N, N[6], N[3]);
                                j.detach(j.indexOf(t))
                            }
                        }
                        const s = this._adjustIndex(n),
                            u = this._lContainer;
                        ! function ay(e, t, n, r) {
                            const i = 10 + r,
                                s = n.length;
                            r > 0 && (n[i - 1][4] = t), r < s - 10 ? (t[4] = n[i], Ic(n, 10 + r, t)) : (n.push(t), t[4] = null), t[3] = n;
                            const u = t[17];
                            null !== u && n !== u && function ly(e, t) {
                                const n = e[9];
                                t[16] !== t[3][3][16] && (e[2] = !0), null === n ? e[9] = [t] : n.push(t)
                            }(u, t);
                            const d = t[19];
                            null !== d && d.insertView(e), t[2] |= 128
                        }(i, r, u, s);
                        const d = Vl(s, u),
                            h = r[11],
                            w = Na(h, u[7]);
                        return null !== w && function iy(e, t, n, r, i, s) {
                            r[0] = i, r[6] = t, na(e, r, n, 1, i, s)
                        }(i, u[6], h, r, w, d), t.attachToViewContainerRef(), Ic(Yu(u), s, t), t
                    }
                    move(t, n) {
                        return this.insert(t, n)
                    }
                    indexOf(t) {
                        const n = Bp(this._lContainer);
                        return null !== n ? n.indexOf(t) : -1
                    }
                    remove(t) {
                        const n = this._adjustIndex(t, -1),
                            r = Rl(this._lContainer, n);
                        r && (ba(Yu(this._lContainer), n), hd(r[1], r))
                    }
                    detach(t) {
                        const n = this._adjustIndex(t, -1),
                            r = Rl(this._lContainer, n);
                        return r && null != ba(Yu(this._lContainer), n) ? new ga(r) : null
                    }
                    _adjustIndex(t, n = 0) {
                        return null == t ? this.length + n : t
                    }
                };

            function Bp(e) {
                return e[8]
            }

            function Yu(e) {
                return e[8] || (e[8] = [])
            }

            function jp(e, t) {
                let n;
                const r = t[e.index];
                if (Rt(r)) n = r;
                else {
                    let i;
                    if (8 & e.type) i = Ye(r);
                    else {
                        const s = t[11];
                        i = s.createComment("");
                        const u = rt(e, t);
                        Hs(s, Na(s, u), i, function fy(e, t) {
                            return de(e) ? e.nextSibling(t) : t.nextSibling
                        }(s, u), !1)
                    }
                    t[e.index] = n = rf(r, t, i, e), ja(t, n)
                }
                return new Vp(n, e, t)
            }
            class qu {
                constructor(t) {
                    this.queryList = t, this.matches = null
                }
                clone() {
                    return new qu(this.queryList)
                }
                setDirty() {
                    this.queryList.setDirty()
                }
            }
            class Ku {
                constructor(t = []) {
                    this.queries = t
                }
                createEmbeddedView(t) {
                    const n = t.queries;
                    if (null !== n) {
                        const r = null !== t.contentQueries ? t.contentQueries[0] : n.length,
                            i = [];
                        for (let s = 0; s < r; s++) {
                            const u = n.getByIndex(s);
                            i.push(this.queries[u.indexInDeclarationView].clone())
                        }
                        return new Ku(i)
                    }
                    return null
                }
                insertView(t) {
                    this.dirtyQueriesWithMatches(t)
                }
                detachView(t) {
                    this.dirtyQueriesWithMatches(t)
                }
                dirtyQueriesWithMatches(t) {
                    for (let n = 0; n < this.queries.length; n++) null !== Kp(t, n).matches && this.queries[n].setDirty()
                }
            }
            class Hp {
                constructor(t, n, r = null) {
                    this.predicate = t, this.flags = n, this.read = r
                }
            }
            class Qu {
                constructor(t = []) {
                    this.queries = t
                }
                elementStart(t, n) {
                    for (let r = 0; r < this.queries.length; r++) this.queries[r].elementStart(t, n)
                }
                elementEnd(t) {
                    for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(t)
                }
                embeddedTView(t) {
                    let n = null;
                    for (let r = 0; r < this.length; r++) {
                        const i = null !== n ? n.length : 0,
                            s = this.getByIndex(r).embeddedTView(t, i);
                        s && (s.indexInDeclarationView = r, null !== n ? n.push(s) : n = [s])
                    }
                    return null !== n ? new Qu(n) : null
                }
                template(t, n) {
                    for (let r = 0; r < this.queries.length; r++) this.queries[r].template(t, n)
                }
                getByIndex(t) {
                    return this.queries[t]
                }
                get length() {
                    return this.queries.length
                }
                track(t) {
                    this.queries.push(t)
                }
            }
            class Zu {
                constructor(t, n = -1) {
                    this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n
                }
                elementStart(t, n) {
                    this.isApplyingToNode(n) && this.matchTNode(t, n)
                }
                elementEnd(t) {
                    this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
                }
                template(t, n) {
                    this.elementStart(t, n)
                }
                embeddedTView(t, n) {
                    return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new Zu(this.metadata)) : null
                }
                isApplyingToNode(t) {
                    if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
                        const n = this._declarationNodeIndex;
                        let r = t.parent;
                        for (; null !== r && 8 & r.type && r.index !== n;) r = r.parent;
                        return n === (null !== r ? r.index : -1)
                    }
                    return this._appliesToNextNode
                }
                matchTNode(t, n) {
                    const r = this.metadata.predicate;
                    if (Array.isArray(r))
                        for (let i = 0; i < r.length; i++) {
                            const s = r[i];
                            this.matchTNodeWithReadOption(t, n, xC(n, s)), this.matchTNodeWithReadOption(t, n, Ir(n, t, s, !1, !1))
                        } else r === va ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Ir(n, t, r, !1, !1))
                }
                matchTNodeWithReadOption(t, n, r) {
                    if (null !== r) {
                        const i = this.metadata.read;
                        if (null !== i)
                            if (i === pa || i === ol || i === va && 4 & n.type) this.addMatch(n.index, -2);
                            else {
                                const s = Ir(n, t, i, !1, !1);
                                null !== s && this.addMatch(n.index, s)
                            }
                        else this.addMatch(n.index, r)
                    }
                }
                addMatch(t, n) {
                    null === this.matches ? this.matches = [t, n] : this.matches.push(t, n)
                }
            }

            function xC(e, t) {
                const n = e.localNames;
                if (null !== n)
                    for (let r = 0; r < n.length; r += 2)
                        if (n[r] === t) return n[r + 1];
                return null
            }

            function LC(e, t, n, r) {
                return -1 === n ? function RC(e, t) {
                    return 11 & e.type ? To(e, t) : 4 & e.type ? sl(e, t) : null
                }(t, e) : -2 === n ? function kC(e, t, n) {
                    return n === pa ? To(t, e) : n === va ? sl(t, e) : n === ol ? jp(t, e) : void 0
                }(e, t, r) : Or(e, e[1], n, t)
            }

            function Up(e, t, n, r) {
                const i = t[19].queries[r];
                if (null === i.matches) {
                    const s = e.data,
                        u = n.matches,
                        d = [];
                    for (let h = 0; h < u.length; h += 2) {
                        const w = u[h];
                        d.push(w < 0 ? null : LC(t, s[w], u[h + 1], n.metadata.read))
                    }
                    i.matches = d
                }
                return i.matches
            }

            function Ju(e, t, n, r) {
                const i = e.queries.getByIndex(n),
                    s = i.matches;
                if (null !== s) {
                    const u = Up(e, t, i, n);
                    for (let d = 0; d < s.length; d += 2) {
                        const h = s[d];
                        if (h > 0) r.push(u[d / 2]);
                        else {
                            const w = s[d + 1],
                                M = t[-h];
                            for (let N = 10; N < M.length; N++) {
                                const j = M[N];
                                j[17] === j[3] && Ju(j[1], j, w, r)
                            }
                            if (null !== M[9]) {
                                const N = M[9];
                                for (let j = 0; j < N.length; j++) {
                                    const $ = N[j];
                                    Ju($[1], $, w, r)
                                }
                            }
                        }
                    }
                }
                return r
            }

            function $p(e) {
                const t = ae(),
                    n = pt(),
                    r = Ks();
                Oi(r + 1);
                const i = Kp(n, r);
                if (e.dirty && E(t) === (2 == (2 & i.metadata.flags))) {
                    if (null === i.matches) e.reset([]);
                    else {
                        const s = i.crossesNgTemplate ? Ju(n, t, r, []) : Up(n, t, i, r);
                        e.reset(s, tC), e.notifyOnChanges()
                    }
                    return !0
                }
                return !1
            }

            function Gp(e, t, n) {
                const r = pt();
                r.firstCreatePass && (qp(r, new Hp(e, t, n), -1), 2 == (2 & t) && (r.staticViewQueries = !0)), Yp(r, ae(), t)
            }

            function zp(e, t, n, r) {
                const i = pt();
                if (i.firstCreatePass) {
                    const s = gn();
                    qp(i, new Hp(t, n, r), s.index),
                        function BC(e, t) {
                            const n = e.contentQueries || (e.contentQueries = []);
                            t !== (n.length ? n[n.length - 1] : -1) && n.push(e.queries.length - 1, t)
                        }(i, e), 2 == (2 & n) && (i.staticContentQueries = !0)
                }
                Yp(i, ae(), n)
            }

            function Wp() {
                return function VC(e, t) {
                    return e[19].queries[t].queryList
                }(ae(), Ks())
            }

            function Yp(e, t, n) {
                const r = new Wu(4 == (4 & n));
                Kd(e, t, r, r.destroy), null === t[19] && (t[19] = new Ku), t[19].queries.push(new qu(r))
            }

            function qp(e, t, n) {
                null === e.queries && (e.queries = new Qu), e.queries.track(new Zu(t, n))
            }

            function Kp(e, t) {
                return e.queries.getByIndex(t)
            }

            function ul(...e) {}
            const fg = new A("Application Initializer");
            let ic = (() => {
                class e {
                    constructor(n) {
                        this.appInits = n, this.resolve = ul, this.reject = ul, this.initialized = !1, this.done = !1, this.donePromise = new Promise((r, i) => {
                            this.resolve = r, this.reject = i
                        })
                    }
                    runInitializers() {
                        if (this.initialized) return;
                        const n = [],
                            r = () => {
                                this.done = !0, this.resolve()
                            };
                        if (this.appInits)
                            for (let i = 0; i < this.appInits.length; i++) {
                                const s = this.appInits[i]();
                                if (Su(s)) n.push(s);
                                else if (Xf(s)) {
                                    const u = new Promise((d, h) => {
                                        s.subscribe({
                                            complete: d,
                                            error: h
                                        })
                                    });
                                    n.push(u)
                                }
                            }
                        Promise.all(n).then(() => {
                            r()
                        }).catch(i => {
                            this.reject(i)
                        }), 0 === n.length && r(), this.initialized = !0
                    }
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)(er(fg, 8))
                }, e.\u0275prov = kt({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })();
            const hg = new A("AppId", {
                providedIn: "root",
                factory: function pg() {
                    return `${sc()}${sc()}${sc()}`
                }
            });

            function sc() {
                return String.fromCharCode(97 + Math.floor(25 * Math.random()))
            }
            const gg = new A("Platform Initializer"),
                rE = new A("Platform ID", {
                    providedIn: "platform",
                    factory: () => "unknown"
                }),
                mg = new A("appBootstrapListener");
            let iE = (() => {
                class e {
                    log(n) {
                        console.log(n)
                    }
                    warn(n) {
                        console.warn(n)
                    }
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)
                }, e.\u0275prov = kt({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "platform"
                }), e
            })();
            const oc = new A("LocaleId", {
                    providedIn: "root",
                    factory: () => Kg(oc, Le.Optional | Le.SkipSelf) || function sE() {
                        return "undefined" != typeof $localize && $localize.locale || Ja
                    }()
                }),
                oE = new A("DefaultCurrencyCode", {
                    providedIn: "root",
                    factory: () => "USD"
                });
            class aE {
                constructor(t, n) {
                    this.ngModuleFactory = t, this.componentFactories = n
                }
            }
            let lE = (() => {
                class e {
                    compileModuleSync(n) {
                        return new Gu(n)
                    }
                    compileModuleAsync(n) {
                        return Promise.resolve(this.compileModuleSync(n))
                    }
                    compileModuleAndAllComponentsSync(n) {
                        const r = this.compileModuleSync(n),
                            s = ts(St(n).declarations).reduce((u, d) => {
                                const h = Wt(d);
                                return h && u.push(new $u(h)), u
                            }, []);
                        return new aE(r, s)
                    }
                    compileModuleAndAllComponentsAsync(n) {
                        return Promise.resolve(this.compileModuleAndAllComponentsSync(n))
                    }
                    clearCache() {}
                    clearCacheFor(n) {}
                    getModuleId(n) {}
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)
                }, e.\u0275prov = kt({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })();
            const cE = (() => Promise.resolve(0))();

            function ac(e) {
                "undefined" == typeof Zone ? cE.then(() => {
                    e && e.apply(null, null)
                }) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
            }
            class ji {
                constructor({
                    enableLongStackTrace: t = !1,
                    shouldCoalesceEventChangeDetection: n = !1,
                    shouldCoalesceRunChangeDetection: r = !1
                }) {
                    if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ls(!1), this.onMicrotaskEmpty = new ls(!1), this.onStable = new ls(!1), this.onError = new ls(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                    Zone.assertZonePatched();
                    const i = this;
                    i._nesting = 0, i._outer = i._inner = Zone.current, Zone.TaskTrackingZoneSpec && (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)), i.shouldCoalesceEventChangeDetection = !r && n, i.shouldCoalesceRunChangeDetection = r, i.lastRequestAnimationFrameId = -1, i.nativeRequestAnimationFrame = function dE() {
                            let e = at.requestAnimationFrame,
                                t = at.cancelAnimationFrame;
                            if ("undefined" != typeof Zone && e && t) {
                                const n = e[Zone.__symbol__("OriginalDelegate")];
                                n && (e = n);
                                const r = t[Zone.__symbol__("OriginalDelegate")];
                                r && (t = r)
                            }
                            return {
                                nativeRequestAnimationFrame: e,
                                nativeCancelAnimationFrame: t
                            }
                        }().nativeRequestAnimationFrame,
                        function pE(e) {
                            const t = () => {
                                ! function hE(e) {
                                    e.isCheckStableRunning || -1 !== e.lastRequestAnimationFrameId || (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(at, () => {
                                        e.fakeTopEventTask || (e.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                                            e.lastRequestAnimationFrameId = -1, uc(e), e.isCheckStableRunning = !0, lc(e), e.isCheckStableRunning = !1
                                        }, void 0, () => {}, () => {})), e.fakeTopEventTask.invoke()
                                    }), uc(e))
                                }(e)
                            };
                            e._inner = e._inner.fork({
                                name: "angular",
                                properties: {
                                    isAngularZone: !0
                                },
                                onInvokeTask: (n, r, i, s, u, d) => {
                                    try {
                                        return yg(e), n.invokeTask(i, s, u, d)
                                    } finally {
                                        (e.shouldCoalesceEventChangeDetection && "eventTask" === s.type || e.shouldCoalesceRunChangeDetection) && t(), vg(e)
                                    }
                                },
                                onInvoke: (n, r, i, s, u, d, h) => {
                                    try {
                                        return yg(e), n.invoke(i, s, u, d, h)
                                    } finally {
                                        e.shouldCoalesceRunChangeDetection && t(), vg(e)
                                    }
                                },
                                onHasTask: (n, r, i, s) => {
                                    n.hasTask(i, s), r === i && ("microTask" == s.change ? (e._hasPendingMicrotasks = s.microTask, uc(e), lc(e)) : "macroTask" == s.change && (e.hasPendingMacrotasks = s.macroTask))
                                },
                                onHandleError: (n, r, i, s) => (n.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1)
                            })
                        }(i)
                }
                static isInAngularZone() {
                    return "undefined" != typeof Zone && !0 === Zone.current.get("isAngularZone")
                }
                static assertInAngularZone() {
                    if (!ji.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                }
                static assertNotInAngularZone() {
                    if (ji.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                }
                run(t, n, r) {
                    return this._inner.run(t, n, r)
                }
                runTask(t, n, r, i) {
                    const s = this._inner,
                        u = s.scheduleEventTask("NgZoneEvent: " + i, t, fE, ul, ul);
                    try {
                        return s.runTask(u, n, r)
                    } finally {
                        s.cancelTask(u)
                    }
                }
                runGuarded(t, n, r) {
                    return this._inner.runGuarded(t, n, r)
                }
                runOutsideAngular(t) {
                    return this._outer.run(t)
                }
            }
            const fE = {};

            function lc(e) {
                if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
                    e._nesting++, e.onMicrotaskEmpty.emit(null)
                } finally {
                    if (e._nesting--, !e.hasPendingMicrotasks) try {
                        e.runOutsideAngular(() => e.onStable.emit(null))
                    } finally {
                        e.isStable = !0
                    }
                }
            }

            function uc(e) {
                e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && -1 !== e.lastRequestAnimationFrameId)
            }

            function yg(e) {
                e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
            }

            function vg(e) {
                e._nesting--, lc(e)
            }
            class gE {
                constructor() {
                    this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ls, this.onMicrotaskEmpty = new ls, this.onStable = new ls, this.onError = new ls
                }
                run(t, n, r) {
                    return t.apply(n, r)
                }
                runGuarded(t, n, r) {
                    return t.apply(n, r)
                }
                runOutsideAngular(t) {
                    return t()
                }
                runTask(t, n, r, i) {
                    return t.apply(n, r)
                }
            }
            let _g = (() => {
                    class e {
                        constructor(n) {
                            this._ngZone = n, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), n.run(() => {
                                this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                            })
                        }
                        _watchAngularEvents() {
                            this._ngZone.onUnstable.subscribe({
                                next: () => {
                                    this._didWork = !0, this._isZoneStable = !1
                                }
                            }), this._ngZone.runOutsideAngular(() => {
                                this._ngZone.onStable.subscribe({
                                    next: () => {
                                        ji.assertNotInAngularZone(), ac(() => {
                                            this._isZoneStable = !0, this._runCallbacksIfReady()
                                        })
                                    }
                                })
                            })
                        }
                        increasePendingRequestCount() {
                            return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                        }
                        decreasePendingRequestCount() {
                            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                            return this._runCallbacksIfReady(), this._pendingCount
                        }
                        isStable() {
                            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                        }
                        _runCallbacksIfReady() {
                            if (this.isStable()) ac(() => {
                                for (; 0 !== this._callbacks.length;) {
                                    let n = this._callbacks.pop();
                                    clearTimeout(n.timeoutId), n.doneCb(this._didWork)
                                }
                                this._didWork = !1
                            });
                            else {
                                let n = this.getPendingTasks();
                                this._callbacks = this._callbacks.filter(r => !r.updateCb || !r.updateCb(n) || (clearTimeout(r.timeoutId), !1)), this._didWork = !0
                            }
                        }
                        getPendingTasks() {
                            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n => ({
                                source: n.source,
                                creationLocation: n.creationLocation,
                                data: n.data
                            })) : []
                        }
                        addCallback(n, r, i) {
                            let s = -1;
                            r && r > 0 && (s = setTimeout(() => {
                                this._callbacks = this._callbacks.filter(u => u.timeoutId !== s), n(this._didWork, this.getPendingTasks())
                            }, r)), this._callbacks.push({
                                doneCb: n,
                                timeoutId: s,
                                updateCb: i
                            })
                        }
                        whenStable(n, r, i) {
                            if (i && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
                            this.addCallback(n, r, i), this._runCallbacksIfReady()
                        }
                        getPendingRequestCount() {
                            return this._pendingCount
                        }
                        findProviders(n, r, i) {
                            return []
                        }
                    }
                    return e.\u0275fac = function(n) {
                        return new(n || e)(er(ji))
                    }, e.\u0275prov = kt({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                mE = (() => {
                    class e {
                        constructor() {
                            this._applications = new Map, cc.addToWindow(this)
                        }
                        registerApplication(n, r) {
                            this._applications.set(n, r)
                        }
                        unregisterApplication(n) {
                            this._applications.delete(n)
                        }
                        unregisterAllApplications() {
                            this._applications.clear()
                        }
                        getTestability(n) {
                            return this._applications.get(n) || null
                        }
                        getAllTestabilities() {
                            return Array.from(this._applications.values())
                        }
                        getAllRootElements() {
                            return Array.from(this._applications.keys())
                        }
                        findTestabilityInTree(n, r = !0) {
                            return cc.findTestabilityInTree(this, n, r)
                        }
                    }
                    return e.\u0275fac = function(n) {
                        return new(n || e)
                    }, e.\u0275prov = kt({
                        token: e,
                        factory: e.\u0275fac,
                        providedIn: "platform"
                    }), e
                })();
            class yE {
                addToWindow(t) {}
                findTestabilityInTree(t, n, r) {
                    return null
                }
            }

            function vE(e) {
                cc = e
            }
            let cc = new yE,
                Gs = null;
            const Dg = new A("AllowMultipleToken"),
                Cg = new A("PlatformOnDestroy");
            class CE {
                constructor(t, n) {
                    this.name = t, this.token = n
                }
            }

            function Eg(e, t, n = []) {
                const r = `Platform: ${t}`,
                    i = new A(r);
                return (s = []) => {
                    let u = dc();
                    if (!u || u.injector.get(Dg, !1)) {
                        const d = [...n, ...s, {
                            provide: i,
                            useValue: !0
                        }];
                        e ? e(d) : function EE(e) {
                            if (Gs && !Gs.get(Dg, !1)) throw new qe(400, "");
                            Gs = e;
                            const t = e.get(bg),
                                n = e.get(gg, null);
                            n && n.forEach(r => r())
                        }(function wE(e = [], t) {
                            return is.create({
                                name: t,
                                providers: [{
                                    provide: uu,
                                    useValue: "platform"
                                }, {
                                    provide: Cg,
                                    useValue: () => Gs = null
                                }, ...e]
                            })
                        }(d, r))
                    }
                    return function bE(e) {
                        const t = dc();
                        if (!t) throw new qe(401, "");
                        return t
                    }()
                }
            }

            function dc() {
                var e;
                return null !== (e = null == Gs ? void 0 : Gs.get(bg)) && void 0 !== e ? e : null
            }
            let bg = (() => {
                class e {
                    constructor(n) {
                        this._injector = n, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                    }
                    bootstrapModuleFactory(n, r) {
                        const d = function SE(e, t) {
                                let n;
                                return n = "noop" === e ? new gE : ("zone.js" === e ? void 0 : e) || new ji({
                                    enableLongStackTrace: !1,
                                    shouldCoalesceEventChangeDetection: !!(null == t ? void 0 : t.ngZoneEventCoalescing),
                                    shouldCoalesceRunChangeDetection: !!(null == t ? void 0 : t.ngZoneRunCoalescing)
                                }), n
                            }(r ? r.ngZone : void 0, {
                                ngZoneEventCoalescing: r && r.ngZoneEventCoalescing || !1,
                                ngZoneRunCoalescing: r && r.ngZoneRunCoalescing || !1
                            }),
                            h = [{
                                provide: ji,
                                useValue: d
                            }];
                        return d.run(() => {
                            const w = is.create({
                                    providers: h,
                                    parent: this.injector,
                                    name: n.moduleType.name
                                }),
                                M = n.create(w),
                                N = M.injector.get(Fa, null);
                            if (!N) throw new qe(402, "");
                            return d.runOutsideAngular(() => {
                                    const j = d.onError.subscribe({
                                        next: $ => {
                                            N.handleError($)
                                        }
                                    });
                                    M.onDestroy(() => {
                                        hc(this._modules, M), j.unsubscribe()
                                    })
                                }),
                                function ME(e, t, n) {
                                    try {
                                        const r = n();
                                        return Su(r) ? r.catch(i => {
                                            throw t.runOutsideAngular(() => e.handleError(i)), i
                                        }) : r
                                    } catch (r) {
                                        throw t.runOutsideAngular(() => e.handleError(r)), r
                                    }
                                }(N, d, () => {
                                    const j = M.injector.get(ic);
                                    return j.runInitializers(), j.donePromise.then(() => (function nD(e) {
                                        Et(e, "Expected localeId to be defined"), "string" == typeof e && (zh = e.toLowerCase().replace(/_/g, "-"))
                                    }(M.injector.get(oc, Ja) || Ja), this._moduleDoBootstrap(M), M))
                                })
                        })
                    }
                    bootstrapModule(n, r = []) {
                        const i = wg({}, r);
                        return function _E(e, t, n) {
                            const r = new Gu(n);
                            return Promise.resolve(r)
                        }(0, 0, n).then(s => this.bootstrapModuleFactory(s, i))
                    }
                    _moduleDoBootstrap(n) {
                        const r = n.injector.get(fc);
                        if (n._bootstrapComponents.length > 0) n._bootstrapComponents.forEach(i => r.bootstrap(i));
                        else {
                            if (!n.instance.ngDoBootstrap) throw new qe(403, "");
                            n.instance.ngDoBootstrap(r)
                        }
                        this._modules.push(n)
                    }
                    onDestroy(n) {
                        this._destroyListeners.push(n)
                    }
                    get injector() {
                        return this._injector
                    }
                    destroy() {
                        if (this._destroyed) throw new qe(404, "");
                        this._modules.slice().forEach(r => r.destroy()), this._destroyListeners.forEach(r => r());
                        const n = this._injector.get(Cg, null);
                        null == n || n(), this._destroyed = !0
                    }
                    get destroyed() {
                        return this._destroyed
                    }
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)(er(is))
                }, e.\u0275prov = kt({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "platform"
                }), e
            })();

            function wg(e, t) {
                return Array.isArray(t) ? t.reduce(wg, e) : Object.assign(Object.assign({}, e), t)
            }
            let fc = (() => {
                class e {
                    constructor(n, r, i, s) {
                        this._zone = n, this._injector = r, this._exceptionHandler = i, this._initStatus = s, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                            next: () => {
                                this._zone.run(() => {
                                    this.tick()
                                })
                            }
                        });
                        const u = new g.y(h => {
                                this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                                    h.next(this._stable), h.complete()
                                })
                            }),
                            d = new g.y(h => {
                                let w;
                                this._zone.runOutsideAngular(() => {
                                    w = this._zone.onStable.subscribe(() => {
                                        ji.assertNotInAngularZone(), ac(() => {
                                            !this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks && (this._stable = !0, h.next(!0))
                                        })
                                    })
                                });
                                const M = this._zone.onUnstable.subscribe(() => {
                                    ji.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                                        h.next(!1)
                                    }))
                                });
                                return () => {
                                    w.unsubscribe(), M.unsubscribe()
                                }
                            });
                        this.isStable = function re(...e) {
                            let t = Number.POSITIVE_INFINITY,
                                n = null,
                                r = e[e.length - 1];
                            return (0, O.K)(r) ? (n = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (t = e.pop())) : "number" == typeof r && (t = e.pop()), null === n && 1 === e.length && e[0] instanceof g.y ? e[0] : (0, De.J)(t)((0, Ce.n)(e, n))
                        }(u, d.pipe(function oe() {
                            return e => (0, Y.x)()(function Se(e, t) {
                                return function(r) {
                                    let i;
                                    if (i = "function" == typeof e ? e : function() {
                                            return e
                                        }, "function" == typeof t) return r.lift(new q(i, t));
                                    const s = Object.create(r, _e.N);
                                    return s.source = r, s.subjectFactory = i, s
                                }
                            }(Q)(e))
                        }()))
                    }
                    bootstrap(n, r) {
                        if (!this._initStatus.done) throw new qe(405, "");
                        let i;
                        i = n instanceof yp ? n : this._injector.get(rl).resolveComponentFactory(n), this.componentTypes.push(i.componentType);
                        const s = function DE(e) {
                                return e.isBoundToModule
                            }(i) ? void 0 : this._injector.get(Io),
                            d = i.create(is.NULL, [], r || i.selector, s),
                            h = d.location.nativeElement,
                            w = d.injector.get(_g, null),
                            M = w && d.injector.get(mE);
                        return w && M && M.registerApplication(h, w), d.onDestroy(() => {
                            this.detachView(d.hostView), hc(this.components, d), M && M.unregisterApplication(h)
                        }), this._loadComponent(d), d
                    }
                    tick() {
                        if (this._runningTick) throw new qe(101, "");
                        try {
                            this._runningTick = !0;
                            for (let n of this._views) n.detectChanges()
                        } catch (n) {
                            this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n))
                        } finally {
                            this._runningTick = !1
                        }
                    }
                    attachView(n) {
                        const r = n;
                        this._views.push(r), r.attachToAppRef(this)
                    }
                    detachView(n) {
                        const r = n;
                        hc(this._views, r), r.detachFromAppRef()
                    }
                    _loadComponent(n) {
                        this.attachView(n.hostView), this.tick(), this.components.push(n), this._injector.get(mg, []).concat(this._bootstrapListeners).forEach(i => i(n))
                    }
                    ngOnDestroy() {
                        this._views.slice().forEach(n => n.destroy()), this._onMicrotaskEmptySubscription.unsubscribe()
                    }
                    get viewCount() {
                        return this._views.length
                    }
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)(er(ji), er(is), er(Fa), er(ic))
                }, e.\u0275prov = kt({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })();

            function hc(e, t) {
                const n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
            let Mg = !0;

            function TE() {
                Mg = !1
            }
            let IE = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = OE, e
            })();

            function OE(e) {
                return function PE(e, t, n) {
                    if (kr(e) && !n) {
                        const r = Yt(e.index, t);
                        return new ga(r, r)
                    }
                    return 47 & e.type ? new ga(t[16], t) : null
                }(gn(), ae(), 16 == (16 & e))
            }
            class Pg {
                constructor() {}
                supports(t) {
                    return oa(t)
                }
                create(t) {
                    return new kE(t)
                }
            }
            const LE = (e, t) => t;
            class kE {
                constructor(t) {
                    this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || LE
                }
                forEachItem(t) {
                    let n;
                    for (n = this._itHead; null !== n; n = n._next) t(n)
                }
                forEachOperation(t) {
                    let n = this._itHead,
                        r = this._removalsHead,
                        i = 0,
                        s = null;
                    for (; n || r;) {
                        const u = !r || n && n.currentIndex < Ng(r, i, s) ? n : r,
                            d = Ng(u, i, s),
                            h = u.currentIndex;
                        if (u === r) i--, r = r._nextRemoved;
                        else if (n = n._next, null == u.previousIndex) i++;
                        else {
                            s || (s = []);
                            const w = d - i,
                                M = h - i;
                            if (w != M) {
                                for (let j = 0; j < w; j++) {
                                    const $ = j < s.length ? s[j] : s[j] = 0,
                                        X = $ + j;
                                    M <= X && X < w && (s[j] = $ + 1)
                                }
                                s[u.previousIndex] = M - w
                            }
                        }
                        d !== h && t(u, d, h)
                    }
                }
                forEachPreviousItem(t) {
                    let n;
                    for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n)
                }
                forEachAddedItem(t) {
                    let n;
                    for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n)
                }
                forEachMovedItem(t) {
                    let n;
                    for (n = this._movesHead; null !== n; n = n._nextMoved) t(n)
                }
                forEachRemovedItem(t) {
                    let n;
                    for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n)
                }
                forEachIdentityChange(t) {
                    let n;
                    for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) t(n)
                }
                diff(t) {
                    if (null == t && (t = []), !oa(t)) throw new qe(900, "");
                    return this.check(t) ? this : null
                }
                onDestroy() {}
                check(t) {
                    this._reset();
                    let i, s, u, n = this._itHead,
                        r = !1;
                    if (Array.isArray(t)) {
                        this.length = t.length;
                        for (let d = 0; d < this.length; d++) s = t[d], u = this._trackByFn(d, s), null !== n && Object.is(n.trackById, u) ? (r && (n = this._verifyReinsertion(n, s, u, d)), Object.is(n.item, s) || this._addIdentityChange(n, s)) : (n = this._mismatch(n, s, u, d), r = !0), n = n._next
                    } else i = 0,
                        function Bv(e, t) {
                            if (Array.isArray(e))
                                for (let n = 0; n < e.length; n++) t(e[n]);
                            else {
                                const n = e[po()]();
                                let r;
                                for (; !(r = n.next()).done;) t(r.value)
                            }
                        }(t, d => {
                            u = this._trackByFn(i, d), null !== n && Object.is(n.trackById, u) ? (r && (n = this._verifyReinsertion(n, d, u, i)), Object.is(n.item, d) || this._addIdentityChange(n, d)) : (n = this._mismatch(n, d, u, i), r = !0), n = n._next, i++
                        }), this.length = i;
                    return this._truncate(n), this.collection = t, this.isDirty
                }
                get isDirty() {
                    return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                }
                _reset() {
                    if (this.isDirty) {
                        let t;
                        for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                        for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = t._nextMoved) t.previousIndex = t.currentIndex;
                        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                    }
                }
                _mismatch(t, n, r, i) {
                    let s;
                    return null === t ? s = this._itTail : (s = t._prev, this._remove(t)), null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, s, i)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(r, i)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, s, i)) : t = this._addAfter(new VE(n, r), s, i), t
                }
                _verifyReinsertion(t, n, r, i) {
                    let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null);
                    return null !== s ? t = this._reinsertAfter(s, t._prev, i) : t.currentIndex != i && (t.currentIndex = i, this._addToMoves(t, i)), t
                }
                _truncate(t) {
                    for (; null !== t;) {
                        const n = t._next;
                        this._addToRemovals(this._unlink(t)), t = n
                    }
                    null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                }
                _reinsertAfter(t, n, r) {
                    null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                    const i = t._prevRemoved,
                        s = t._nextRemoved;
                    return null === i ? this._removalsHead = s : i._nextRemoved = s, null === s ? this._removalsTail = i : s._prevRemoved = i, this._insertAfter(t, n, r), this._addToMoves(t, r), t
                }
                _moveAfter(t, n, r) {
                    return this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t
                }
                _addAfter(t, n, r) {
                    return this._insertAfter(t, n, r), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
                }
                _insertAfter(t, n, r) {
                    const i = null === n ? this._itHead : n._next;
                    return t._next = i, t._prev = n, null === i ? this._itTail = t : i._prev = t, null === n ? this._itHead = t : n._next = t, null === this._linkedRecords && (this._linkedRecords = new Fg), this._linkedRecords.put(t), t.currentIndex = r, t
                }
                _remove(t) {
                    return this._addToRemovals(this._unlink(t))
                }
                _unlink(t) {
                    null !== this._linkedRecords && this._linkedRecords.remove(t);
                    const n = t._prev,
                        r = t._next;
                    return null === n ? this._itHead = r : n._next = r, null === r ? this._itTail = n : r._prev = n, t
                }
                _addToMoves(t, n) {
                    return t.previousIndex === n || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t
                }
                _addToRemovals(t) {
                    return null === this._unlinkedRecords && (this._unlinkedRecords = new Fg), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
                }
                _addIdentityChange(t, n) {
                    return t.item = n, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
                }
            }
            class VE {
                constructor(t, n) {
                    this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
                }
            }
            class BE {
                constructor() {
                    this._head = null, this._tail = null
                }
                add(t) {
                    null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
                }
                get(t, n) {
                    let r;
                    for (r = this._head; null !== r; r = r._nextDup)
                        if ((null === n || n <= r.currentIndex) && Object.is(r.trackById, t)) return r;
                    return null
                }
                remove(t) {
                    const n = t._prevDup,
                        r = t._nextDup;
                    return null === n ? this._head = r : n._nextDup = r, null === r ? this._tail = n : r._prevDup = n, null === this._head
                }
            }
            class Fg {
                constructor() {
                    this.map = new Map
                }
                put(t) {
                    const n = t.trackById;
                    let r = this.map.get(n);
                    r || (r = new BE, this.map.set(n, r)), r.add(t)
                }
                get(t, n) {
                    const i = this.map.get(t);
                    return i ? i.get(t, n) : null
                }
                remove(t) {
                    const n = t.trackById;
                    return this.map.get(n).remove(t) && this.map.delete(n), t
                }
                get isEmpty() {
                    return 0 === this.map.size
                }
                clear() {
                    this.map.clear()
                }
            }

            function Ng(e, t, n) {
                const r = e.previousIndex;
                if (null === r) return r;
                let i = 0;
                return n && r < n.length && (i = n[r]), r + t + i
            }
            class xg {
                constructor() {}
                supports(t) {
                    return t instanceof Map || mu(t)
                }
                create() {
                    return new jE
                }
            }
            class jE {
                constructor() {
                    this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                }
                get isDirty() {
                    return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                }
                forEachItem(t) {
                    let n;
                    for (n = this._mapHead; null !== n; n = n._next) t(n)
                }
                forEachPreviousItem(t) {
                    let n;
                    for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n)
                }
                forEachChangedItem(t) {
                    let n;
                    for (n = this._changesHead; null !== n; n = n._nextChanged) t(n)
                }
                forEachAddedItem(t) {
                    let n;
                    for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n)
                }
                forEachRemovedItem(t) {
                    let n;
                    for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n)
                }
                diff(t) {
                    if (t) {
                        if (!(t instanceof Map || mu(t))) throw new qe(900, "")
                    } else t = new Map;
                    return this.check(t) ? this : null
                }
                onDestroy() {}
                check(t) {
                    this._reset();
                    let n = this._mapHead;
                    if (this._appendAfter = null, this._forEach(t, (r, i) => {
                            if (n && n.key === i) this._maybeAddToChanges(n, r), this._appendAfter = n, n = n._next;
                            else {
                                const s = this._getOrCreateRecordForKey(i, r);
                                n = this._insertBeforeOrAppend(n, s)
                            }
                        }), n) {
                        n._prev && (n._prev._next = null), this._removalsHead = n;
                        for (let r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
                    }
                    return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                }
                _insertBeforeOrAppend(t, n) {
                    if (t) {
                        const r = t._prev;
                        return n._next = t, n._prev = r, t._prev = n, r && (r._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t
                    }
                    return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null
                }
                _getOrCreateRecordForKey(t, n) {
                    if (this._records.has(t)) {
                        const i = this._records.get(t);
                        this._maybeAddToChanges(i, n);
                        const s = i._prev,
                            u = i._next;
                        return s && (s._next = u), u && (u._prev = s), i._next = null, i._prev = null, i
                    }
                    const r = new HE(t);
                    return this._records.set(t, r), r.currentValue = n, this._addToAdditions(r), r
                }
                _reset() {
                    if (this.isDirty) {
                        let t;
                        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                        for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                        for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                    }
                }
                _maybeAddToChanges(t, n) {
                    Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t))
                }
                _addToAdditions(t) {
                    null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
                }
                _addToChanges(t) {
                    null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
                }
                _forEach(t, n) {
                    t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(r => n(t[r], r))
                }
            }
            class HE {
                constructor(t) {
                    this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                }
            }

            function Rg() {
                return new vc([new Pg])
            }
            let vc = (() => {
                class e {
                    constructor(n) {
                        this.factories = n
                    }
                    static create(n, r) {
                        if (null != r) {
                            const i = r.factories.slice();
                            n = n.concat(i)
                        }
                        return new e(n)
                    }
                    static extend(n) {
                        return {
                            provide: e,
                            useFactory: r => e.create(n, r || Rg()),
                            deps: [
                                [e, new Ko, new qo]
                            ]
                        }
                    }
                    find(n) {
                        const r = this.factories.find(i => i.supports(n));
                        if (null != r) return r;
                        throw new qe(901, "")
                    }
                }
                return e.\u0275prov = kt({
                    token: e,
                    providedIn: "root",
                    factory: Rg
                }), e
            })();

            function Lg() {
                return new _c([new xg])
            }
            let _c = (() => {
                class e {
                    constructor(n) {
                        this.factories = n
                    }
                    static create(n, r) {
                        if (r) {
                            const i = r.factories.slice();
                            n = n.concat(i)
                        }
                        return new e(n)
                    }
                    static extend(n) {
                        return {
                            provide: e,
                            useFactory: r => e.create(n, r || Lg()),
                            deps: [
                                [e, new Ko, new qo]
                            ]
                        }
                    }
                    find(n) {
                        const r = this.factories.find(s => s.supports(n));
                        if (r) return r;
                        throw new qe(901, "")
                    }
                }
                return e.\u0275prov = kt({
                    token: e,
                    providedIn: "root",
                    factory: Lg
                }), e
            })();
            const GE = Eg(null, "core", []);
            let zE = (() => {
                class e {
                    constructor(n) {}
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)(er(fc))
                }, e.\u0275mod = Xe({
                    type: e
                }), e.\u0275inj = zn({}), e
            })()
        },
        34182: (ot, pe, L) => {
            L.d(pe, {
                Wl: () => ce,
                Fj: () => ft,
                u5: () => rt,
                nD: () => de,
                JJ: () => _r,
                JL: () => Dr,
                F: () => Sn,
                On: () => ur,
                YN: () => fs,
                wV: () => Lr,
                eT: () => bi,
                _Y: () => _n,
                Kr: () => zi
            });
            var g = L(72096),
                O = L(69808),
                De = L(32916),
                Ce = L(66688),
                re = L(24850),
                ie = L(57830),
                ve = L(5254);

            function Se(E, y) {
                return new De.y(m => {
                    const I = E.length;
                    if (0 === I) return void m.complete();
                    const Z = new Array(I);
                    let Te = 0,
                        Me = 0;
                    for (let Nt = 0; Nt < I; Nt++) {
                        const hr = (0, ve.D)(E[Nt]);
                        let Xr = !1;
                        m.add(hr.subscribe({
                            next: $r => {
                                Xr || (Xr = !0, Me++), Z[Nt] = $r
                            },
                            error: $r => m.error($r),
                            complete: () => {
                                Te++, (Te === I || !Xr) && (Me === I && m.next(y ? y.reduce(($r, Bn, gs) => ($r[Bn] = Z[gs], $r), {}) : Z), m.complete())
                            }
                        }))
                    }
                })
            }
            let q = (() => {
                    class E {
                        constructor(m, I) {
                            this._renderer = m, this._elementRef = I, this.onChange = Z => {}, this.onTouched = () => {}
                        }
                        setProperty(m, I) {
                            this._renderer.setProperty(this._elementRef.nativeElement, m, I)
                        }
                        registerOnTouched(m) {
                            this.onTouched = m
                        }
                        registerOnChange(m) {
                            this.onChange = m
                        }
                        setDisabledState(m) {
                            this.setProperty("disabled", m)
                        }
                    }
                    return E.\u0275fac = function(m) {
                        return new(m || E)(g.Y36(g.Qsj), g.Y36(g.SBq))
                    }, E.\u0275dir = g.lG2({
                        type: E
                    }), E
                })(),
                Y = (() => {
                    class E extends q {}
                    return E.\u0275fac = function() {
                        let y;
                        return function(I) {
                            return (y || (y = g.n5z(E)))(I || E)
                        }
                    }(), E.\u0275dir = g.lG2({
                        type: E,
                        features: [g.qOj]
                    }), E
                })();
            const Q = new g.OlP("NgValueAccessor"),
                oe = {
                    provide: Q,
                    useExisting: (0, g.Gpc)(() => ce),
                    multi: !0
                };
            let ce = (() => {
                class E extends Y {
                    writeValue(m) {
                        this.setProperty("checked", m)
                    }
                }
                return E.\u0275fac = function() {
                    let y;
                    return function(I) {
                        return (y || (y = g.n5z(E)))(I || E)
                    }
                }(), E.\u0275dir = g.lG2({
                    type: E,
                    selectors: [
                        ["input", "type", "checkbox", "formControlName", ""],
                        ["input", "type", "checkbox", "formControl", ""],
                        ["input", "type", "checkbox", "ngModel", ""]
                    ],
                    hostBindings: function(m, I) {
                        1 & m && g.NdJ("change", function(Te) {
                            return I.onChange(Te.target.checked)
                        })("blur", function() {
                            return I.onTouched()
                        })
                    },
                    features: [g._Bn([oe]), g.qOj]
                }), E
            })();
            const me = {
                    provide: Q,
                    useExisting: (0, g.Gpc)(() => ft),
                    multi: !0
                },
                Ze = new g.OlP("CompositionEventMode");
            let ft = (() => {
                class E extends q {
                    constructor(m, I, Z) {
                        super(m, I), this._compositionMode = Z, this._composing = !1, null == this._compositionMode && (this._compositionMode = ! function ne() {
                            const E = (0, O.q)() ? (0, O.q)().getUserAgent() : "";
                            return /android (\d+)/.test(E.toLowerCase())
                        }())
                    }
                    writeValue(m) {
                        this.setProperty("value", null == m ? "" : m)
                    }
                    _handleInput(m) {
                        (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(m)
                    }
                    _compositionStart() {
                        this._composing = !0
                    }
                    _compositionEnd(m) {
                        this._composing = !1, this._compositionMode && this.onChange(m)
                    }
                }
                return E.\u0275fac = function(m) {
                    return new(m || E)(g.Y36(g.Qsj), g.Y36(g.SBq), g.Y36(Ze, 8))
                }, E.\u0275dir = g.lG2({
                    type: E,
                    selectors: [
                        ["input", "formControlName", "", 3, "type", "checkbox"],
                        ["textarea", "formControlName", ""],
                        ["input", "formControl", "", 3, "type", "checkbox"],
                        ["textarea", "formControl", ""],
                        ["input", "ngModel", "", 3, "type", "checkbox"],
                        ["textarea", "ngModel", ""],
                        ["", "ngDefaultControl", ""]
                    ],
                    hostBindings: function(m, I) {
                        1 & m && g.NdJ("input", function(Te) {
                            return I._handleInput(Te.target.value)
                        })("blur", function() {
                            return I.onTouched()
                        })("compositionstart", function() {
                            return I._compositionStart()
                        })("compositionend", function(Te) {
                            return I._compositionEnd(Te.target.value)
                        })
                    },
                    features: [g._Bn([me]), g.qOj]
                }), E
            })();
            const nt = new g.OlP("NgValidators"),
                cn = new g.OlP("NgAsyncValidators");

            function zr(E) {
                return null
            }

            function ii(E) {
                return null != E
            }

            function Zt(E) {
                const y = (0, g.QGY)(E) ? (0, ve.D)(E) : E;
                return (0, g.CqO)(y), y
            }

            function Hi(E) {
                let y = {};
                return E.forEach(m => {
                    y = null != m ? Object.assign(Object.assign({}, y), m) : y
                }), 0 === Object.keys(y).length ? null : y
            }

            function _i(E, y) {
                return y.map(m => m(E))
            }

            function Ui(E) {
                return E.map(y => function Wr(E) {
                    return !E.validate
                }(y) ? y : m => y.validate(m))
            }

            function tr(E) {
                return null != E ? function Di(E) {
                    if (!E) return null;
                    const y = E.filter(ii);
                    return 0 == y.length ? null : function(m) {
                        return Hi(_i(m, y))
                    }
                }(Ui(E)) : null
            }

            function vr(E) {
                return null != E ? function nr(E) {
                    if (!E) return null;
                    const y = E.filter(ii);
                    return 0 == y.length ? null : function(m) {
                        return function _e(...E) {
                            if (1 === E.length) {
                                const y = E[0];
                                if ((0, Ce.k)(y)) return Se(y, null);
                                if ((0, ie.K)(y) && Object.getPrototypeOf(y) === Object.prototype) {
                                    const m = Object.keys(y);
                                    return Se(m.map(I => y[I]), m)
                                }
                            }
                            if ("function" == typeof E[E.length - 1]) {
                                const y = E.pop();
                                return Se(E = 1 === E.length && (0, Ce.k)(E[0]) ? E[0] : E, null).pipe((0, re.U)(m => y(...m)))
                            }
                            return Se(E, null)
                        }(_i(m, y).map(Zt)).pipe((0, re.U)(Hi))
                    }
                }(Ui(E)) : null
            }

            function Et(E, y) {
                return null === E ? [y] : Array.isArray(E) ? [...E, y] : [E, y]
            }

            function Ci(E) {
                return E ? Array.isArray(E) ? E : [E] : []
            }

            function Jt(E, y) {
                return Array.isArray(E) ? E.includes(y) : E === y
            }

            function kt(E, y) {
                const m = Ci(y);
                return Ci(E).forEach(Z => {
                    Jt(m, Z) || m.push(Z)
                }), m
            }

            function rr(E, y) {
                return Ci(y).filter(m => !Jt(E, m))
            }
            class zn {
                constructor() {
                    this._rawValidators = [], this._rawAsyncValidators = [], this._onDestroyCallbacks = []
                }
                get value() {
                    return this.control ? this.control.value : null
                }
                get valid() {
                    return this.control ? this.control.valid : null
                }
                get invalid() {
                    return this.control ? this.control.invalid : null
                }
                get pending() {
                    return this.control ? this.control.pending : null
                }
                get disabled() {
                    return this.control ? this.control.disabled : null
                }
                get enabled() {
                    return this.control ? this.control.enabled : null
                }
                get errors() {
                    return this.control ? this.control.errors : null
                }
                get pristine() {
                    return this.control ? this.control.pristine : null
                }
                get dirty() {
                    return this.control ? this.control.dirty : null
                }
                get touched() {
                    return this.control ? this.control.touched : null
                }
                get status() {
                    return this.control ? this.control.status : null
                }
                get untouched() {
                    return this.control ? this.control.untouched : null
                }
                get statusChanges() {
                    return this.control ? this.control.statusChanges : null
                }
                get valueChanges() {
                    return this.control ? this.control.valueChanges : null
                }
                get path() {
                    return null
                }
                _setValidators(y) {
                    this._rawValidators = y || [], this._composedValidatorFn = tr(this._rawValidators)
                }
                _setAsyncValidators(y) {
                    this._rawAsyncValidators = y || [], this._composedAsyncValidatorFn = vr(this._rawAsyncValidators)
                }
                get validator() {
                    return this._composedValidatorFn || null
                }
                get asyncValidator() {
                    return this._composedAsyncValidatorFn || null
                }
                _registerOnDestroy(y) {
                    this._onDestroyCallbacks.push(y)
                }
                _invokeOnDestroyCallbacks() {
                    this._onDestroyCallbacks.forEach(y => y()), this._onDestroyCallbacks = []
                }
                reset(y) {
                    this.control && this.control.reset(y)
                }
                hasError(y, m) {
                    return !!this.control && this.control.hasError(y, m)
                }
                getError(y, m) {
                    return this.control ? this.control.getError(y, m) : null
                }
            }
            class Tn extends zn {
                constructor() {
                    super(...arguments), this._parent = null, this.name = null, this.valueAccessor = null
                }
            }
            class zt extends zn {
                get formDirective() {
                    return null
                }
                get path() {
                    return null
                }
            }
            class si {
                constructor(y) {
                    this._cd = y
                }
                is(y) {
                    var m, I, Z;
                    return "submitted" === y ? !!(null === (m = this._cd) || void 0 === m ? void 0 : m.submitted) : !!(null === (Z = null === (I = this._cd) || void 0 === I ? void 0 : I.control) || void 0 === Z ? void 0 : Z[y])
                }
            }
            let _r = (() => {
                    class E extends si {
                        constructor(m) {
                            super(m)
                        }
                    }
                    return E.\u0275fac = function(m) {
                        return new(m || E)(g.Y36(Tn, 2))
                    }, E.\u0275dir = g.lG2({
                        type: E,
                        selectors: [
                            ["", "formControlName", ""],
                            ["", "ngModel", ""],
                            ["", "formControl", ""]
                        ],
                        hostVars: 14,
                        hostBindings: function(m, I) {
                            2 & m && g.ekj("ng-untouched", I.is("untouched"))("ng-touched", I.is("touched"))("ng-pristine", I.is("pristine"))("ng-dirty", I.is("dirty"))("ng-valid", I.is("valid"))("ng-invalid", I.is("invalid"))("ng-pending", I.is("pending"))
                        },
                        features: [g.qOj]
                    }), E
                })(),
                Dr = (() => {
                    class E extends si {
                        constructor(m) {
                            super(m)
                        }
                    }
                    return E.\u0275fac = function(m) {
                        return new(m || E)(g.Y36(zt, 10))
                    }, E.\u0275dir = g.lG2({
                        type: E,
                        selectors: [
                            ["", "formGroupName", ""],
                            ["", "formArrayName", ""],
                            ["", "ngModelGroup", ""],
                            ["", "formGroup", ""],
                            ["form", 3, "ngNoForm", ""],
                            ["", "ngForm", ""]
                        ],
                        hostVars: 16,
                        hostBindings: function(m, I) {
                            2 & m && g.ekj("ng-untouched", I.is("untouched"))("ng-touched", I.is("touched"))("ng-pristine", I.is("pristine"))("ng-dirty", I.is("dirty"))("ng-valid", I.is("valid"))("ng-invalid", I.is("invalid"))("ng-pending", I.is("pending"))("ng-submitted", I.is("submitted"))
                        },
                        features: [g.qOj]
                    }), E
                })();

            function at(E, y) {
                ht(E, y), y.valueAccessor.writeValue(E.value),
                    function sr(E, y) {
                        y.valueAccessor.registerOnChange(m => {
                            E._pendingValue = m, E._pendingChange = !0, E._pendingDirty = !0, "change" === E.updateOn && Kr(E, y)
                        })
                    }(E, y),
                    function hn(E, y) {
                        const m = (I, Z) => {
                            y.valueAccessor.writeValue(I), Z && y.viewToModelUpdate(I)
                        };
                        E.registerOnChange(m), y._registerOnDestroy(() => {
                            E._unregisterOnChange(m)
                        })
                    }(E, y),
                    function qr(E, y) {
                        y.valueAccessor.registerOnTouched(() => {
                            E._pendingTouched = !0, "blur" === E.updateOn && E._pendingChange && Kr(E, y), "submit" !== E.updateOn && E.markAsTouched()
                        })
                    }(E, y),
                    function ir(E, y) {
                        if (y.valueAccessor.setDisabledState) {
                            const m = I => {
                                y.valueAccessor.setDisabledState(I)
                            };
                            E.registerOnDisabledChange(m), y._registerOnDestroy(() => {
                                E._unregisterOnDisabledChange(m)
                            })
                        }
                    }(E, y)
            }

            function Zn(E, y) {
                E.forEach(m => {
                    m.registerOnValidatorChange && m.registerOnValidatorChange(y)
                })
            }

            function ht(E, y) {
                const m = function et(E) {
                    return E._rawValidators
                }(E);
                null !== y.validator ? E.setValidators(Et(m, y.validator)) : "function" == typeof m && E.setValidators([m]);
                const I = function $i(E) {
                    return E._rawAsyncValidators
                }(E);
                null !== y.asyncValidator ? E.setAsyncValidators(Et(I, y.asyncValidator)) : "function" == typeof I && E.setAsyncValidators([I]);
                const Z = () => E.updateValueAndValidity();
                Zn(y._rawValidators, Z), Zn(y._rawAsyncValidators, Z)
            }

            function Kr(E, y) {
                E._pendingDirty && E.markAsDirty(), E.setValue(E._pendingValue, {
                    emitModelToViewChange: !1
                }), y.viewToModelUpdate(E._pendingValue), E._pendingChange = !1
            }

            function Rn(E, y) {
                const m = E.indexOf(y);
                m > -1 && E.splice(m, 1)
            }
            const tn = "VALID",
                Vt = "INVALID",
                St = "PENDING",
                Wn = "DISABLED";

            function nn(E) {
                return (ar(E) ? E.validators : E) || null
            }

            function bt(E) {
                return Array.isArray(E) ? tr(E) : E || null
            }

            function Bt(E, y) {
                return (ar(y) ? y.asyncValidators : E) || null
            }

            function rn(E) {
                return Array.isArray(E) ? vr(E) : E || null
            }

            function ar(E) {
                return null != E && !Array.isArray(E) && "object" == typeof E
            }
            const he = E => E instanceof Ke;

            function Mt(E) {
                return (E => E instanceof Ln)(E) ? E.value : E.getRawValue()
            }

            function an(E, y) {
                const m = he(E),
                    I = E.controls;
                if (!(m ? Object.keys(I) : I).length) throw new g.vHH(1e3, "");
                if (!I[y]) throw new g.vHH(1001, "")
            }

            function Yn(E, y) {
                he(E), E._forEachChild((I, Z) => {
                    if (void 0 === y[Z]) throw new g.vHH(1002, "")
                })
            }
            class $t {
                constructor(y, m) {
                    this._pendingDirty = !1, this._hasOwnPendingAsyncValidator = !1, this._pendingTouched = !1, this._onCollectionChange = () => {}, this._parent = null, this.pristine = !0, this.touched = !1, this._onDisabledChange = [], this._rawValidators = y, this._rawAsyncValidators = m, this._composedValidatorFn = bt(this._rawValidators), this._composedAsyncValidatorFn = rn(this._rawAsyncValidators)
                }
                get validator() {
                    return this._composedValidatorFn
                }
                set validator(y) {
                    this._rawValidators = this._composedValidatorFn = y
                }
                get asyncValidator() {
                    return this._composedAsyncValidatorFn
                }
                set asyncValidator(y) {
                    this._rawAsyncValidators = this._composedAsyncValidatorFn = y
                }
                get parent() {
                    return this._parent
                }
                get valid() {
                    return this.status === tn
                }
                get invalid() {
                    return this.status === Vt
                }
                get pending() {
                    return this.status == St
                }
                get disabled() {
                    return this.status === Wn
                }
                get enabled() {
                    return this.status !== Wn
                }
                get dirty() {
                    return !this.pristine
                }
                get untouched() {
                    return !this.touched
                }
                get updateOn() {
                    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
                }
                setValidators(y) {
                    this._rawValidators = y, this._composedValidatorFn = bt(y)
                }
                setAsyncValidators(y) {
                    this._rawAsyncValidators = y, this._composedAsyncValidatorFn = rn(y)
                }
                addValidators(y) {
                    this.setValidators(kt(y, this._rawValidators))
                }
                addAsyncValidators(y) {
                    this.setAsyncValidators(kt(y, this._rawAsyncValidators))
                }
                removeValidators(y) {
                    this.setValidators(rr(y, this._rawValidators))
                }
                removeAsyncValidators(y) {
                    this.setAsyncValidators(rr(y, this._rawAsyncValidators))
                }
                hasValidator(y) {
                    return Jt(this._rawValidators, y)
                }
                hasAsyncValidator(y) {
                    return Jt(this._rawAsyncValidators, y)
                }
                clearValidators() {
                    this.validator = null
                }
                clearAsyncValidators() {
                    this.asyncValidator = null
                }
                markAsTouched(y = {}) {
                    this.touched = !0, this._parent && !y.onlySelf && this._parent.markAsTouched(y)
                }
                markAllAsTouched() {
                    this.markAsTouched({
                        onlySelf: !0
                    }), this._forEachChild(y => y.markAllAsTouched())
                }
                markAsUntouched(y = {}) {
                    this.touched = !1, this._pendingTouched = !1, this._forEachChild(m => {
                        m.markAsUntouched({
                            onlySelf: !0
                        })
                    }), this._parent && !y.onlySelf && this._parent._updateTouched(y)
                }
                markAsDirty(y = {}) {
                    this.pristine = !1, this._parent && !y.onlySelf && this._parent.markAsDirty(y)
                }
                markAsPristine(y = {}) {
                    this.pristine = !0, this._pendingDirty = !1, this._forEachChild(m => {
                        m.markAsPristine({
                            onlySelf: !0
                        })
                    }), this._parent && !y.onlySelf && this._parent._updatePristine(y)
                }
                markAsPending(y = {}) {
                    this.status = St, !1 !== y.emitEvent && this.statusChanges.emit(this.status), this._parent && !y.onlySelf && this._parent.markAsPending(y)
                }
                disable(y = {}) {
                    const m = this._parentMarkedDirty(y.onlySelf);
                    this.status = Wn, this.errors = null, this._forEachChild(I => {
                        I.disable(Object.assign(Object.assign({}, y), {
                            onlySelf: !0
                        }))
                    }), this._updateValue(), !1 !== y.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(Object.assign(Object.assign({}, y), {
                        skipPristineCheck: m
                    })), this._onDisabledChange.forEach(I => I(!0))
                }
                enable(y = {}) {
                    const m = this._parentMarkedDirty(y.onlySelf);
                    this.status = tn, this._forEachChild(I => {
                        I.enable(Object.assign(Object.assign({}, y), {
                            onlySelf: !0
                        }))
                    }), this.updateValueAndValidity({
                        onlySelf: !0,
                        emitEvent: y.emitEvent
                    }), this._updateAncestors(Object.assign(Object.assign({}, y), {
                        skipPristineCheck: m
                    })), this._onDisabledChange.forEach(I => I(!1))
                }
                _updateAncestors(y) {
                    this._parent && !y.onlySelf && (this._parent.updateValueAndValidity(y), y.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched())
                }
                setParent(y) {
                    this._parent = y
                }
                updateValueAndValidity(y = {}) {
                    this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), (this.status === tn || this.status === St) && this._runAsyncValidator(y.emitEvent)), !1 !== y.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !y.onlySelf && this._parent.updateValueAndValidity(y)
                }
                _updateTreeValidity(y = {
                    emitEvent: !0
                }) {
                    this._forEachChild(m => m._updateTreeValidity(y)), this.updateValueAndValidity({
                        onlySelf: !0,
                        emitEvent: y.emitEvent
                    })
                }
                _setInitialStatus() {
                    this.status = this._allControlsDisabled() ? Wn : tn
                }
                _runValidator() {
                    return this.validator ? this.validator(this) : null
                }
                _runAsyncValidator(y) {
                    if (this.asyncValidator) {
                        this.status = St, this._hasOwnPendingAsyncValidator = !0;
                        const m = Zt(this.asyncValidator(this));
                        this._asyncValidationSubscription = m.subscribe(I => {
                            this._hasOwnPendingAsyncValidator = !1, this.setErrors(I, {
                                emitEvent: y
                            })
                        })
                    }
                }
                _cancelExistingSubscription() {
                    this._asyncValidationSubscription && (this._asyncValidationSubscription.unsubscribe(), this._hasOwnPendingAsyncValidator = !1)
                }
                setErrors(y, m = {}) {
                    this.errors = y, this._updateControlsErrors(!1 !== m.emitEvent)
                }
                get(y) {
                    return function Qr(E, y, m) {
                        if (null == y || (Array.isArray(y) || (y = y.split(m)), Array.isArray(y) && 0 === y.length)) return null;
                        let I = E;
                        return y.forEach(Z => {
                            I = he(I) ? I.controls.hasOwnProperty(Z) ? I.controls[Z] : null : (E => E instanceof Qe)(I) && I.at(Z) || null
                        }), I
                    }(this, y, ".")
                }
                getError(y, m) {
                    const I = m ? this.get(m) : this;
                    return I && I.errors ? I.errors[y] : null
                }
                hasError(y, m) {
                    return !!this.getError(y, m)
                }
                get root() {
                    let y = this;
                    for (; y._parent;) y = y._parent;
                    return y
                }
                _updateControlsErrors(y) {
                    this.status = this._calculateStatus(), y && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(y)
                }
                _initObservables() {
                    this.valueChanges = new g.vpe, this.statusChanges = new g.vpe
                }
                _calculateStatus() {
                    return this._allControlsDisabled() ? Wn : this.errors ? Vt : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(St) ? St : this._anyControlsHaveStatus(Vt) ? Vt : tn
                }
                _anyControlsHaveStatus(y) {
                    return this._anyControls(m => m.status === y)
                }
                _anyControlsDirty() {
                    return this._anyControls(y => y.dirty)
                }
                _anyControlsTouched() {
                    return this._anyControls(y => y.touched)
                }
                _updatePristine(y = {}) {
                    this.pristine = !this._anyControlsDirty(), this._parent && !y.onlySelf && this._parent._updatePristine(y)
                }
                _updateTouched(y = {}) {
                    this.touched = this._anyControlsTouched(), this._parent && !y.onlySelf && this._parent._updateTouched(y)
                }
                _isBoxedValue(y) {
                    return "object" == typeof y && null !== y && 2 === Object.keys(y).length && "value" in y && "disabled" in y
                }
                _registerOnCollectionChange(y) {
                    this._onCollectionChange = y
                }
                _setUpdateStrategy(y) {
                    ar(y) && null != y.updateOn && (this._updateOn = y.updateOn)
                }
                _parentMarkedDirty(y) {
                    return !y && !(!this._parent || !this._parent.dirty) && !this._parent._anyControlsDirty()
                }
            }
            class Ln extends $t {
                constructor(y = null, m, I) {
                    super(nn(m), Bt(I, m)), this.defaultValue = null, this._onChange = [], this._pendingChange = !1, this._applyFormState(y), this._setUpdateStrategy(m), this._initObservables(), this.updateValueAndValidity({
                        onlySelf: !0,
                        emitEvent: !!this.asyncValidator
                    }), ar(m) && m.initialValueIsDefault && (this.defaultValue = this._isBoxedValue(y) ? y.value : y)
                }
                setValue(y, m = {}) {
                    this.value = this._pendingValue = y, this._onChange.length && !1 !== m.emitModelToViewChange && this._onChange.forEach(I => I(this.value, !1 !== m.emitViewToModelChange)), this.updateValueAndValidity(m)
                }
                patchValue(y, m = {}) {
                    this.setValue(y, m)
                }
                reset(y = this.defaultValue, m = {}) {
                    this._applyFormState(y), this.markAsPristine(m), this.markAsUntouched(m), this.setValue(this.value, m), this._pendingChange = !1
                }
                _updateValue() {}
                _anyControls(y) {
                    return !1
                }
                _allControlsDisabled() {
                    return this.disabled
                }
                registerOnChange(y) {
                    this._onChange.push(y)
                }
                _unregisterOnChange(y) {
                    Rn(this._onChange, y)
                }
                registerOnDisabledChange(y) {
                    this._onDisabledChange.push(y)
                }
                _unregisterOnDisabledChange(y) {
                    Rn(this._onDisabledChange, y)
                }
                _forEachChild(y) {}
                _syncPendingControls() {
                    return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, {
                        onlySelf: !0,
                        emitModelToViewChange: !1
                    }), 0))
                }
                _applyFormState(y) {
                    this._isBoxedValue(y) ? (this.value = this._pendingValue = y.value, y.disabled ? this.disable({
                        onlySelf: !0,
                        emitEvent: !1
                    }) : this.enable({
                        onlySelf: !0,
                        emitEvent: !1
                    })) : this.value = this._pendingValue = y
                }
            }
            class Ke extends $t {
                constructor(y, m, I) {
                    super(nn(m), Bt(I, m)), this.controls = y, this._initObservables(), this._setUpdateStrategy(m), this._setUpControls(), this.updateValueAndValidity({
                        onlySelf: !0,
                        emitEvent: !!this.asyncValidator
                    })
                }
                registerControl(y, m) {
                    return this.controls[y] ? this.controls[y] : (this.controls[y] = m, m.setParent(this), m._registerOnCollectionChange(this._onCollectionChange), m)
                }
                addControl(y, m, I = {}) {
                    this.registerControl(y, m), this.updateValueAndValidity({
                        emitEvent: I.emitEvent
                    }), this._onCollectionChange()
                }
                removeControl(y, m = {}) {
                    this.controls[y] && this.controls[y]._registerOnCollectionChange(() => {}), delete this.controls[y], this.updateValueAndValidity({
                        emitEvent: m.emitEvent
                    }), this._onCollectionChange()
                }
                setControl(y, m, I = {}) {
                    this.controls[y] && this.controls[y]._registerOnCollectionChange(() => {}), delete this.controls[y], m && this.registerControl(y, m), this.updateValueAndValidity({
                        emitEvent: I.emitEvent
                    }), this._onCollectionChange()
                }
                contains(y) {
                    return this.controls.hasOwnProperty(y) && this.controls[y].enabled
                }
                setValue(y, m = {}) {
                    Yn(this, y), Object.keys(y).forEach(I => {
                        an(this, I), this.controls[I].setValue(y[I], {
                            onlySelf: !0,
                            emitEvent: m.emitEvent
                        })
                    }), this.updateValueAndValidity(m)
                }
                patchValue(y, m = {}) {
                    null != y && (Object.keys(y).forEach(I => {
                        this.controls[I] && this.controls[I].patchValue(y[I], {
                            onlySelf: !0,
                            emitEvent: m.emitEvent
                        })
                    }), this.updateValueAndValidity(m))
                }
                reset(y = {}, m = {}) {
                    this._forEachChild((I, Z) => {
                        I.reset(y[Z], {
                            onlySelf: !0,
                            emitEvent: m.emitEvent
                        })
                    }), this._updatePristine(m), this._updateTouched(m), this.updateValueAndValidity(m)
                }
                getRawValue() {
                    return this._reduceChildren({}, (y, m, I) => (y[I] = Mt(m), y))
                }
                _syncPendingControls() {
                    let y = this._reduceChildren(!1, (m, I) => !!I._syncPendingControls() || m);
                    return y && this.updateValueAndValidity({
                        onlySelf: !0
                    }), y
                }
                _forEachChild(y) {
                    Object.keys(this.controls).forEach(m => {
                        const I = this.controls[m];
                        I && y(I, m)
                    })
                }
                _setUpControls() {
                    this._forEachChild(y => {
                        y.setParent(this), y._registerOnCollectionChange(this._onCollectionChange)
                    })
                }
                _updateValue() {
                    this.value = this._reduceValue()
                }
                _anyControls(y) {
                    for (const m of Object.keys(this.controls)) {
                        const I = this.controls[m];
                        if (this.contains(m) && y(I)) return !0
                    }
                    return !1
                }
                _reduceValue() {
                    return this._reduceChildren({}, (y, m, I) => ((m.enabled || this.disabled) && (y[I] = m.value), y))
                }
                _reduceChildren(y, m) {
                    let I = y;
                    return this._forEachChild((Z, Te) => {
                        I = m(I, Z, Te)
                    }), I
                }
                _allControlsDisabled() {
                    for (const y of Object.keys(this.controls))
                        if (this.controls[y].enabled) return !1;
                    return Object.keys(this.controls).length > 0 || this.disabled
                }
            }
            class Qe extends $t {
                constructor(y, m, I) {
                    super(nn(m), Bt(I, m)), this.controls = y, this._initObservables(), this._setUpdateStrategy(m), this._setUpControls(), this.updateValueAndValidity({
                        onlySelf: !0,
                        emitEvent: !!this.asyncValidator
                    })
                }
                at(y) {
                    return this.controls[y]
                }
                push(y, m = {}) {
                    this.controls.push(y), this._registerControl(y), this.updateValueAndValidity({
                        emitEvent: m.emitEvent
                    }), this._onCollectionChange()
                }
                insert(y, m, I = {}) {
                    this.controls.splice(y, 0, m), this._registerControl(m), this.updateValueAndValidity({
                        emitEvent: I.emitEvent
                    })
                }
                removeAt(y, m = {}) {
                    this.controls[y] && this.controls[y]._registerOnCollectionChange(() => {}), this.controls.splice(y, 1), this.updateValueAndValidity({
                        emitEvent: m.emitEvent
                    })
                }
                setControl(y, m, I = {}) {
                    this.controls[y] && this.controls[y]._registerOnCollectionChange(() => {}), this.controls.splice(y, 1), m && (this.controls.splice(y, 0, m), this._registerControl(m)), this.updateValueAndValidity({
                        emitEvent: I.emitEvent
                    }), this._onCollectionChange()
                }
                get length() {
                    return this.controls.length
                }
                setValue(y, m = {}) {
                    Yn(this, y), y.forEach((I, Z) => {
                        an(this, Z), this.at(Z).setValue(I, {
                            onlySelf: !0,
                            emitEvent: m.emitEvent
                        })
                    }), this.updateValueAndValidity(m)
                }
                patchValue(y, m = {}) {
                    null != y && (y.forEach((I, Z) => {
                        this.at(Z) && this.at(Z).patchValue(I, {
                            onlySelf: !0,
                            emitEvent: m.emitEvent
                        })
                    }), this.updateValueAndValidity(m))
                }
                reset(y = [], m = {}) {
                    this._forEachChild((I, Z) => {
                        I.reset(y[Z], {
                            onlySelf: !0,
                            emitEvent: m.emitEvent
                        })
                    }), this._updatePristine(m), this._updateTouched(m), this.updateValueAndValidity(m)
                }
                getRawValue() {
                    return this.controls.map(y => Mt(y))
                }
                clear(y = {}) {
                    this.controls.length < 1 || (this._forEachChild(m => m._registerOnCollectionChange(() => {})), this.controls.splice(0), this.updateValueAndValidity({
                        emitEvent: y.emitEvent
                    }))
                }
                _syncPendingControls() {
                    let y = this.controls.reduce((m, I) => !!I._syncPendingControls() || m, !1);
                    return y && this.updateValueAndValidity({
                        onlySelf: !0
                    }), y
                }
                _forEachChild(y) {
                    this.controls.forEach((m, I) => {
                        y(m, I)
                    })
                }
                _updateValue() {
                    this.value = this.controls.filter(y => y.enabled || this.disabled).map(y => y.value)
                }
                _anyControls(y) {
                    return this.controls.some(m => m.enabled && y(m))
                }
                _setUpControls() {
                    this._forEachChild(y => this._registerControl(y))
                }
                _allControlsDisabled() {
                    for (const y of this.controls)
                        if (y.enabled) return !1;
                    return this.controls.length > 0 || this.disabled
                }
                _registerControl(y) {
                    y.setParent(this), y._registerOnCollectionChange(this._onCollectionChange)
                }
            }
            const In = {
                    provide: zt,
                    useExisting: (0, g.Gpc)(() => Sn)
                },
                Be = (() => Promise.resolve(null))();
            let Sn = (() => {
                class E extends zt {
                    constructor(m, I) {
                        super(), this.submitted = !1, this._directives = new Set, this.ngSubmit = new g.vpe, this.form = new Ke({}, tr(m), vr(I))
                    }
                    ngAfterViewInit() {
                        this._setUpdateStrategy()
                    }
                    get formDirective() {
                        return this
                    }
                    get control() {
                        return this.form
                    }
                    get path() {
                        return []
                    }
                    get controls() {
                        return this.form.controls
                    }
                    addControl(m) {
                        Be.then(() => {
                            const I = this._findContainer(m.path);
                            m.control = I.registerControl(m.name, m.control), at(m.control, m), m.control.updateValueAndValidity({
                                emitEvent: !1
                            }), this._directives.add(m)
                        })
                    }
                    getControl(m) {
                        return this.form.get(m.path)
                    }
                    removeControl(m) {
                        Be.then(() => {
                            const I = this._findContainer(m.path);
                            I && I.removeControl(m.name), this._directives.delete(m)
                        })
                    }
                    addFormGroup(m) {
                        Be.then(() => {
                            const I = this._findContainer(m.path),
                                Z = new Ke({});
                            (function or(E, y) {
                                ht(E, y)
                            })(Z, m), I.registerControl(m.name, Z), Z.updateValueAndValidity({
                                emitEvent: !1
                            })
                        })
                    }
                    removeFormGroup(m) {
                        Be.then(() => {
                            const I = this._findContainer(m.path);
                            I && I.removeControl(m.name)
                        })
                    }
                    getFormGroup(m) {
                        return this.form.get(m.path)
                    }
                    updateModel(m, I) {
                        Be.then(() => {
                            this.form.get(m.path).setValue(I)
                        })
                    }
                    setValue(m) {
                        this.control.setValue(m)
                    }
                    onSubmit(m) {
                        return this.submitted = !0,
                            function gt(E, y) {
                                E._syncPendingControls(), y.forEach(m => {
                                    const I = m.control;
                                    "submit" === I.updateOn && I._pendingChange && (m.viewToModelUpdate(I._pendingValue), I._pendingChange = !1)
                                })
                            }(this.form, this._directives), this.ngSubmit.emit(m), !1
                    }
                    onReset() {
                        this.resetForm()
                    }
                    resetForm(m) {
                        this.form.reset(m), this.submitted = !1
                    }
                    _setUpdateStrategy() {
                        this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn)
                    }
                    _findContainer(m) {
                        return m.pop(), m.length ? this.form.get(m) : this.form
                    }
                }
                return E.\u0275fac = function(m) {
                    return new(m || E)(g.Y36(nt, 10), g.Y36(cn, 10))
                }, E.\u0275dir = g.lG2({
                    type: E,
                    selectors: [
                        ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
                        ["ng-form"],
                        ["", "ngForm", ""]
                    ],
                    hostBindings: function(m, I) {
                        1 & m && g.NdJ("submit", function(Te) {
                            return I.onSubmit(Te)
                        })("reset", function() {
                            return I.onReset()
                        })
                    },
                    inputs: {
                        options: ["ngFormOptions", "options"]
                    },
                    outputs: {
                        ngSubmit: "ngSubmit"
                    },
                    exportAs: ["ngForm"],
                    features: [g._Bn([In]), g.qOj]
                }), E
            })();
            const mt = {
                    provide: Tn,
                    useExisting: (0, g.Gpc)(() => ur)
                },
                Rr = (() => Promise.resolve(null))();
            let ur = (() => {
                    class E extends Tn {
                        constructor(m, I, Z, Te, Me) {
                            super(), this._changeDetectorRef = Me, this.control = new Ln, this._registered = !1, this.update = new g.vpe, this._parent = m, this._setValidators(I), this._setAsyncValidators(Z), this.valueAccessor = function Ft(E, y) {
                                if (!y) return null;
                                let m, I, Z;
                                return Array.isArray(y), y.forEach(Te => {
                                    Te.constructor === ft ? m = Te : function Xe(E) {
                                        return Object.getPrototypeOf(E.constructor) === Y
                                    }(Te) ? I = Te : Z = Te
                                }), Z || I || m || null
                            }(0, Te)
                        }
                        ngOnChanges(m) {
                            if (this._checkForErrors(), !this._registered || "name" in m) {
                                if (this._registered && (this._checkName(), this.formDirective)) {
                                    const I = m.name.previousValue;
                                    this.formDirective.removeControl({
                                        name: I,
                                        path: this._getPath(I)
                                    })
                                }
                                this._setUpControl()
                            }
                            "isDisabled" in m && this._updateDisabled(m),
                                function ue(E, y) {
                                    if (!E.hasOwnProperty("model")) return !1;
                                    const m = E.model;
                                    return !!m.isFirstChange() || !Object.is(y, m.currentValue)
                                }(m, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model)
                        }
                        ngOnDestroy() {
                            this.formDirective && this.formDirective.removeControl(this)
                        }
                        get path() {
                            return this._getPath(this.name)
                        }
                        get formDirective() {
                            return this._parent ? this._parent.formDirective : null
                        }
                        viewToModelUpdate(m) {
                            this.viewModel = m, this.update.emit(m)
                        }
                        _setUpControl() {
                            this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0
                        }
                        _setUpdateStrategy() {
                            this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn)
                        }
                        _isStandalone() {
                            return !this._parent || !(!this.options || !this.options.standalone)
                        }
                        _setUpStandalone() {
                            at(this.control, this), this.control.updateValueAndValidity({
                                emitEvent: !1
                            })
                        }
                        _checkForErrors() {
                            this._isStandalone() || this._checkParentType(), this._checkName()
                        }
                        _checkParentType() {}
                        _checkName() {
                            this.options && this.options.name && (this.name = this.options.name), this._isStandalone()
                        }
                        _updateValue(m) {
                            Rr.then(() => {
                                var I;
                                this.control.setValue(m, {
                                    emitViewToModelChange: !1
                                }), null === (I = this._changeDetectorRef) || void 0 === I || I.markForCheck()
                            })
                        }
                        _updateDisabled(m) {
                            const I = m.isDisabled.currentValue,
                                Z = "" === I || I && "false" !== I;
                            Rr.then(() => {
                                var Te;
                                Z && !this.control.disabled ? this.control.disable() : !Z && this.control.disabled && this.control.enable(), null === (Te = this._changeDetectorRef) || void 0 === Te || Te.markForCheck()
                            })
                        }
                        _getPath(m) {
                            return this._parent ? function Nn(E, y) {
                                return [...y.path, E]
                            }(m, this._parent) : [m]
                        }
                    }
                    return E.\u0275fac = function(m) {
                        return new(m || E)(g.Y36(zt, 9), g.Y36(nt, 10), g.Y36(cn, 10), g.Y36(Q, 10), g.Y36(g.sBO, 8))
                    }, E.\u0275dir = g.lG2({
                        type: E,
                        selectors: [
                            ["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]
                        ],
                        inputs: {
                            name: "name",
                            isDisabled: ["disabled", "isDisabled"],
                            model: ["ngModel", "model"],
                            options: ["ngModelOptions", "options"]
                        },
                        outputs: {
                            update: "ngModelChange"
                        },
                        exportAs: ["ngModel"],
                        features: [g._Bn([mt]), g.qOj, g.TTD]
                    }), E
                })(),
                _n = (() => {
                    class E {}
                    return E.\u0275fac = function(m) {
                        return new(m || E)
                    }, E.\u0275dir = g.lG2({
                        type: E,
                        selectors: [
                            ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]
                        ],
                        hostAttrs: ["novalidate", ""]
                    }), E
                })();
            const Rt = {
                provide: Q,
                useExisting: (0, g.Gpc)(() => Lr),
                multi: !0
            };
            let Lr = (() => {
                    class E extends Y {
                        writeValue(m) {
                            this.setProperty("value", null == m ? "" : m)
                        }
                        registerOnChange(m) {
                            this.onChange = I => {
                                m("" == I ? null : parseFloat(I))
                            }
                        }
                    }
                    return E.\u0275fac = function() {
                        let y;
                        return function(I) {
                            return (y || (y = g.n5z(E)))(I || E)
                        }
                    }(), E.\u0275dir = g.lG2({
                        type: E,
                        selectors: [
                            ["input", "type", "number", "formControlName", ""],
                            ["input", "type", "number", "formControl", ""],
                            ["input", "type", "number", "ngModel", ""]
                        ],
                        hostBindings: function(m, I) {
                            1 & m && g.NdJ("input", function(Te) {
                                return I.onChange(Te.target.value)
                            })("blur", function() {
                                return I.onTouched()
                            })
                        },
                        features: [g._Bn([Rt]), g.qOj]
                    }), E
                })(),
                Pn = (() => {
                    class E {}
                    return E.\u0275fac = function(m) {
                        return new(m || E)
                    }, E.\u0275mod = g.oAB({
                        type: E
                    }), E.\u0275inj = g.cJS({}), E
                })();
            const cs = {
                provide: Q,
                useExisting: (0, g.Gpc)(() => bi),
                multi: !0
            };
            let bi = (() => {
                class E extends Y {
                    writeValue(m) {
                        this.setProperty("value", parseFloat(m))
                    }
                    registerOnChange(m) {
                        this.onChange = I => {
                            m("" == I ? null : parseFloat(I))
                        }
                    }
                }
                return E.\u0275fac = function() {
                    let y;
                    return function(I) {
                        return (y || (y = g.n5z(E)))(I || E)
                    }
                }(), E.\u0275dir = g.lG2({
                    type: E,
                    selectors: [
                        ["input", "type", "range", "formControlName", ""],
                        ["input", "type", "range", "formControl", ""],
                        ["input", "type", "range", "ngModel", ""]
                    ],
                    hostBindings: function(m, I) {
                        1 & m && g.NdJ("change", function(Te) {
                            return I.onChange(Te.target.value)
                        })("input", function(Te) {
                            return I.onChange(Te.target.value)
                        })("blur", function() {
                            return I.onTouched()
                        })
                    },
                    features: [g._Bn([cs]), g.qOj]
                }), E
            })();
            const Cs = {
                provide: Q,
                useExisting: (0, g.Gpc)(() => Kn),
                multi: !0
            };

            function Xn(E, y) {
                return null == E ? `${y}` : (y && "object" == typeof y && (y = "Object"), `${E}: ${y}`.slice(0, 50))
            }
            let Kn = (() => {
                    class E extends Y {
                        constructor() {
                            super(...arguments), this._optionMap = new Map, this._idCounter = 0, this._compareWith = Object.is
                        }
                        set compareWith(m) {
                            this._compareWith = m
                        }
                        writeValue(m) {
                            this.value = m;
                            const Z = Xn(this._getOptionId(m), m);
                            this.setProperty("value", Z)
                        }
                        registerOnChange(m) {
                            this.onChange = I => {
                                this.value = this._getOptionValue(I), m(this.value)
                            }
                        }
                        _registerOption() {
                            return (this._idCounter++).toString()
                        }
                        _getOptionId(m) {
                            for (const I of Array.from(this._optionMap.keys()))
                                if (this._compareWith(this._optionMap.get(I), m)) return I;
                            return null
                        }
                        _getOptionValue(m) {
                            const I = function br(E) {
                                return E.split(":")[0]
                            }(m);
                            return this._optionMap.has(I) ? this._optionMap.get(I) : m
                        }
                    }
                    return E.\u0275fac = function() {
                        let y;
                        return function(I) {
                            return (y || (y = g.n5z(E)))(I || E)
                        }
                    }(), E.\u0275dir = g.lG2({
                        type: E,
                        selectors: [
                            ["select", "formControlName", "", 3, "multiple", ""],
                            ["select", "formControl", "", 3, "multiple", ""],
                            ["select", "ngModel", "", 3, "multiple", ""]
                        ],
                        hostBindings: function(m, I) {
                            1 & m && g.NdJ("change", function(Te) {
                                return I.onChange(Te.target.value)
                            })("blur", function() {
                                return I.onTouched()
                            })
                        },
                        inputs: {
                            compareWith: "compareWith"
                        },
                        features: [g._Bn([Cs]), g.qOj]
                    }), E
                })(),
                fs = (() => {
                    class E {
                        constructor(m, I, Z) {
                            this._element = m, this._renderer = I, this._select = Z, this._select && (this.id = this._select._registerOption())
                        }
                        set ngValue(m) {
                            null != this._select && (this._select._optionMap.set(this.id, m), this._setElementValue(Xn(this.id, m)), this._select.writeValue(this._select.value))
                        }
                        set value(m) {
                            this._setElementValue(m), this._select && this._select.writeValue(this._select.value)
                        }
                        _setElementValue(m) {
                            this._renderer.setProperty(this._element.nativeElement, "value", m)
                        }
                        ngOnDestroy() {
                            this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
                        }
                    }
                    return E.\u0275fac = function(m) {
                        return new(m || E)(g.Y36(g.SBq), g.Y36(g.Qsj), g.Y36(Kn, 9))
                    }, E.\u0275dir = g.lG2({
                        type: E,
                        selectors: [
                            ["option"]
                        ],
                        inputs: {
                            ngValue: "ngValue",
                            value: "value"
                        }
                    }), E
                })();
            const Si = {
                provide: Q,
                useExisting: (0, g.Gpc)(() => hi),
                multi: !0
            };

            function fi(E, y) {
                return null == E ? `${y}` : ("string" == typeof y && (y = `'${y}'`), y && "object" == typeof y && (y = "Object"), `${E}: ${y}`.slice(0, 50))
            }
            let hi = (() => {
                    class E extends Y {
                        constructor() {
                            super(...arguments), this._optionMap = new Map, this._idCounter = 0, this._compareWith = Object.is
                        }
                        set compareWith(m) {
                            this._compareWith = m
                        }
                        writeValue(m) {
                            let I;
                            if (this.value = m, Array.isArray(m)) {
                                const Z = m.map(Te => this._getOptionId(Te));
                                I = (Te, Me) => {
                                    Te._setSelected(Z.indexOf(Me.toString()) > -1)
                                }
                            } else I = (Z, Te) => {
                                Z._setSelected(!1)
                            };
                            this._optionMap.forEach(I)
                        }
                        registerOnChange(m) {
                            this.onChange = I => {
                                const Z = [],
                                    Te = I.selectedOptions;
                                if (void 0 !== Te) {
                                    const Me = Te;
                                    for (let Nt = 0; Nt < Me.length; Nt++) {
                                        const Xr = this._getOptionValue(Me[Nt].value);
                                        Z.push(Xr)
                                    }
                                } else {
                                    const Me = I.options;
                                    for (let Nt = 0; Nt < Me.length; Nt++) {
                                        const hr = Me[Nt];
                                        if (hr.selected) {
                                            const Xr = this._getOptionValue(hr.value);
                                            Z.push(Xr)
                                        }
                                    }
                                }
                                this.value = Z, m(Z)
                            }
                        }
                        _registerOption(m) {
                            const I = (this._idCounter++).toString();
                            return this._optionMap.set(I, m), I
                        }
                        _getOptionId(m) {
                            for (const I of Array.from(this._optionMap.keys()))
                                if (this._compareWith(this._optionMap.get(I)._value, m)) return I;
                            return null
                        }
                        _getOptionValue(m) {
                            const I = function jr(E) {
                                return E.split(":")[0]
                            }(m);
                            return this._optionMap.has(I) ? this._optionMap.get(I)._value : m
                        }
                    }
                    return E.\u0275fac = function() {
                        let y;
                        return function(I) {
                            return (y || (y = g.n5z(E)))(I || E)
                        }
                    }(), E.\u0275dir = g.lG2({
                        type: E,
                        selectors: [
                            ["select", "multiple", "", "formControlName", ""],
                            ["select", "multiple", "", "formControl", ""],
                            ["select", "multiple", "", "ngModel", ""]
                        ],
                        hostBindings: function(m, I) {
                            1 & m && g.NdJ("change", function(Te) {
                                return I.onChange(Te.target)
                            })("blur", function() {
                                return I.onTouched()
                            })
                        },
                        inputs: {
                            compareWith: "compareWith"
                        },
                        features: [g._Bn([Si]), g.qOj]
                    }), E
                })(),
                zi = (() => {
                    class E {
                        constructor(m, I, Z) {
                            this._element = m, this._renderer = I, this._select = Z, this._select && (this.id = this._select._registerOption(this))
                        }
                        set ngValue(m) {
                            null != this._select && (this._value = m, this._setElementValue(fi(this.id, m)), this._select.writeValue(this._select.value))
                        }
                        set value(m) {
                            this._select ? (this._value = m, this._setElementValue(fi(this.id, m)), this._select.writeValue(this._select.value)) : this._setElementValue(m)
                        }
                        _setElementValue(m) {
                            this._renderer.setProperty(this._element.nativeElement, "value", m)
                        }
                        _setSelected(m) {
                            this._renderer.setProperty(this._element.nativeElement, "selected", m)
                        }
                        ngOnDestroy() {
                            this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
                        }
                    }
                    return E.\u0275fac = function(m) {
                        return new(m || E)(g.Y36(g.SBq), g.Y36(g.Qsj), g.Y36(hi, 9))
                    }, E.\u0275dir = g.lG2({
                        type: E,
                        selectors: [
                            ["option"]
                        ],
                        inputs: {
                            ngValue: "ngValue",
                            value: "value"
                        }
                    }), E
                })();
            let Vn = (() => {
                class E {
                    constructor() {
                        this._validator = zr
                    }
                    ngOnChanges(m) {
                        if (this.inputName in m) {
                            const I = this.normalizeInput(m[this.inputName].currentValue);
                            this._enabled = this.enabled(I), this._validator = this._enabled ? this.createValidator(I) : zr, this._onChange && this._onChange()
                        }
                    }
                    validate(m) {
                        return this._validator(m)
                    }
                    registerOnValidatorChange(m) {
                        this._onChange = m
                    }
                    enabled(m) {
                        return null != m
                    }
                }
                return E.\u0275fac = function(m) {
                    return new(m || E)
                }, E.\u0275dir = g.lG2({
                    type: E,
                    features: [g.TTD]
                }), E
            })();
            const le = {
                provide: nt,
                useExisting: (0, g.Gpc)(() => de),
                multi: !0
            };
            let de = (() => {
                    class E extends Vn {
                        constructor() {
                            super(...arguments), this.inputName = "maxlength", this.normalizeInput = m => function hs(E) {
                                return "number" == typeof E ? E : parseInt(E, 10)
                            }(m), this.createValidator = m => function we(E) {
                                return y => function be(E) {
                                    return null != E && "number" == typeof E.length
                                }(y.value) && y.value.length > E ? {
                                    maxlength: {
                                        requiredLength: E,
                                        actualLength: y.value.length
                                    }
                                } : null
                            }(m)
                        }
                    }
                    return E.\u0275fac = function() {
                        let y;
                        return function(I) {
                            return (y || (y = g.n5z(E)))(I || E)
                        }
                    }(), E.\u0275dir = g.lG2({
                        type: E,
                        selectors: [
                            ["", "maxlength", "", "formControlName", ""],
                            ["", "maxlength", "", "formControl", ""],
                            ["", "maxlength", "", "ngModel", ""]
                        ],
                        hostVars: 1,
                        hostBindings: function(m, I) {
                            2 & m && g.uIk("maxlength", I._enabled ? I.maxlength : null)
                        },
                        inputs: {
                            maxlength: "maxlength"
                        },
                        features: [g._Bn([le]), g.qOj]
                    }), E
                })(),
                Dt = (() => {
                    class E {}
                    return E.\u0275fac = function(m) {
                        return new(m || E)
                    }, E.\u0275mod = g.oAB({
                        type: E
                    }), E.\u0275inj = g.cJS({
                        imports: [
                            [Pn]
                        ]
                    }), E
                })(),
                rt = (() => {
                    class E {}
                    return E.\u0275fac = function(m) {
                        return new(m || E)
                    }, E.\u0275mod = g.oAB({
                        type: E
                    }), E.\u0275inj = g.cJS({
                        imports: [Dt]
                    }), E
                })()
        },
        22313: (ot, pe, L) => {
            L.d(pe, {
                Dx: () => Nr,
                b2: () => zn,
                h_: () => zt,
                q6: () => kt,
                se: () => we
            });
            var g = L(69808),
                O = L(72096);
            class De extends g.w_ {
                constructor() {
                    super(...arguments), this.supportsDOMEvents = !0
                }
            }
            class Ce extends De {
                static makeCurrent() {
                    (0, g.HT)(new Ce)
                }
                onAndCancel(U, x, z) {
                    return U.addEventListener(x, z, !1), () => {
                        U.removeEventListener(x, z, !1)
                    }
                }
                dispatchEvent(U, x) {
                    U.dispatchEvent(x)
                }
                remove(U) {
                    U.parentNode && U.parentNode.removeChild(U)
                }
                createElement(U, x) {
                    return (x = x || this.getDefaultDocument()).createElement(U)
                }
                createHtmlDocument() {
                    return document.implementation.createHTMLDocument("fakeTitle")
                }
                getDefaultDocument() {
                    return document
                }
                isElementNode(U) {
                    return U.nodeType === Node.ELEMENT_NODE
                }
                isShadowRoot(U) {
                    return U instanceof DocumentFragment
                }
                getGlobalEventTarget(U, x) {
                    return "window" === x ? window : "document" === x ? U : "body" === x ? U.body : null
                }
                getBaseHref(U) {
                    const x = function ie() {
                        return re = re || document.querySelector("base"), re ? re.getAttribute("href") : null
                    }();
                    return null == x ? null : function _e(W) {
                        ve = ve || document.createElement("a"), ve.setAttribute("href", W);
                        const U = ve.pathname;
                        return "/" === U.charAt(0) ? U : `/${U}`
                    }(x)
                }
                resetBaseElement() {
                    re = null
                }
                getUserAgent() {
                    return window.navigator.userAgent
                }
                getCookie(U) {
                    return (0, g.Mx)(document.cookie, U)
                }
            }
            let ve, re = null;
            const Se = new O.OlP("TRANSITION_ID"),
                Y = [{
                    provide: O.ip1,
                    useFactory: function q(W, U, x) {
                        return () => {
                            x.get(O.CZH).donePromise.then(() => {
                                const z = (0, g.q)(),
                                    te = U.querySelectorAll(`style[ng-transition="${W}"]`);
                                for (let ue = 0; ue < te.length; ue++) z.remove(te[ue])
                            })
                        }
                    },
                    deps: [Se, g.K0, O.zs3],
                    multi: !0
                }];
            class Q {
                static init() {
                    (0, O.VLi)(new Q)
                }
                addToWindow(U) {
                    O.dqk.getAngularTestability = (z, te = !0) => {
                        const ue = U.findTestabilityInTree(z, te);
                        if (null == ue) throw new Error("Could not find testability for element.");
                        return ue
                    }, O.dqk.getAllAngularTestabilities = () => U.getAllTestabilities(), O.dqk.getAllAngularRootElements = () => U.getAllRootElements(), O.dqk.frameworkStabilizers || (O.dqk.frameworkStabilizers = []), O.dqk.frameworkStabilizers.push(z => {
                        const te = O.dqk.getAllAngularTestabilities();
                        let ue = te.length,
                            Xe = !1;
                        const gt = function(Ft) {
                            Xe = Xe || Ft, ue--, 0 == ue && z(Xe)
                        };
                        te.forEach(function(Ft) {
                            Ft.whenStable(gt)
                        })
                    })
                }
                findTestabilityInTree(U, x, z) {
                    if (null == x) return null;
                    const te = U.getTestability(x);
                    return null != te ? te : z ? (0, g.q)().isShadowRoot(x) ? this.findTestabilityInTree(U, x.host, !0) : this.findTestabilityInTree(U, x.parentElement, !0) : null
                }
            }
            let oe = (() => {
                class W {
                    build() {
                        return new XMLHttpRequest
                    }
                }
                return W.\u0275fac = function(x) {
                    return new(x || W)
                }, W.\u0275prov = O.Yz7({
                    token: W,
                    factory: W.\u0275fac
                }), W
            })();
            const ce = new O.OlP("EventManagerPlugins");
            let me = (() => {
                class W {
                    constructor(x, z) {
                        this._zone = z, this._eventNameToPlugin = new Map, x.forEach(te => te.manager = this), this._plugins = x.slice().reverse()
                    }
                    addEventListener(x, z, te) {
                        return this._findPluginFor(z).addEventListener(x, z, te)
                    }
                    addGlobalEventListener(x, z, te) {
                        return this._findPluginFor(z).addGlobalEventListener(x, z, te)
                    }
                    getZone() {
                        return this._zone
                    }
                    _findPluginFor(x) {
                        const z = this._eventNameToPlugin.get(x);
                        if (z) return z;
                        const te = this._plugins;
                        for (let ue = 0; ue < te.length; ue++) {
                            const Xe = te[ue];
                            if (Xe.supports(x)) return this._eventNameToPlugin.set(x, Xe), Xe
                        }
                        throw new Error(`No event manager plugin found for event ${x}`)
                    }
                }
                return W.\u0275fac = function(x) {
                    return new(x || W)(O.LFG(ce), O.LFG(O.R0b))
                }, W.\u0275prov = O.Yz7({
                    token: W,
                    factory: W.\u0275fac
                }), W
            })();
            class ne {
                constructor(U) {
                    this._doc = U
                }
                addGlobalEventListener(U, x, z) {
                    const te = (0, g.q)().getGlobalEventTarget(this._doc, U);
                    if (!te) throw new Error(`Unsupported event target ${te} for event ${x}`);
                    return this.addEventListener(te, x, z)
                }
            }
            let Ze = (() => {
                    class W {
                        constructor() {
                            this._stylesSet = new Set
                        }
                        addStyles(x) {
                            const z = new Set;
                            x.forEach(te => {
                                this._stylesSet.has(te) || (this._stylesSet.add(te), z.add(te))
                            }), this.onStylesAdded(z)
                        }
                        onStylesAdded(x) {}
                        getAllStyles() {
                            return Array.from(this._stylesSet)
                        }
                    }
                    return W.\u0275fac = function(x) {
                        return new(x || W)
                    }, W.\u0275prov = O.Yz7({
                        token: W,
                        factory: W.\u0275fac
                    }), W
                })(),
                ft = (() => {
                    class W extends Ze {
                        constructor(x) {
                            super(), this._doc = x, this._hostNodes = new Map, this._hostNodes.set(x.head, [])
                        }
                        _addStylesToHost(x, z, te) {
                            x.forEach(ue => {
                                const Xe = this._doc.createElement("style");
                                Xe.textContent = ue, te.push(z.appendChild(Xe))
                            })
                        }
                        addHost(x) {
                            const z = [];
                            this._addStylesToHost(this._stylesSet, x, z), this._hostNodes.set(x, z)
                        }
                        removeHost(x) {
                            const z = this._hostNodes.get(x);
                            z && z.forEach(Re), this._hostNodes.delete(x)
                        }
                        onStylesAdded(x) {
                            this._hostNodes.forEach((z, te) => {
                                this._addStylesToHost(x, te, z)
                            })
                        }
                        ngOnDestroy() {
                            this._hostNodes.forEach(x => x.forEach(Re))
                        }
                    }
                    return W.\u0275fac = function(x) {
                        return new(x || W)(O.LFG(g.K0))
                    }, W.\u0275prov = O.Yz7({
                        token: W,
                        factory: W.\u0275fac
                    }), W
                })();

            function Re(W) {
                (0, g.q)().remove(W)
            }
            const be = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: "http://www.w3.org/1999/xhtml",
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/",
                    math: "http://www.w3.org/1998/MathML/"
                },
                nt = /%COMP%/g;

            function wt(W, U, x) {
                for (let z = 0; z < U.length; z++) {
                    let te = U[z];
                    Array.isArray(te) ? wt(W, te, x) : (te = te.replace(nt, W), x.push(te))
                }
                return x
            }

            function Pt(W) {
                return U => {
                    if ("__ngUnwrap__" === U) return W;
                    !1 === W(U) && (U.preventDefault(), U.returnValue = !1)
                }
            }
            let we = (() => {
                class W {
                    constructor(x, z, te) {
                        this.eventManager = x, this.sharedStylesHost = z, this.appId = te, this.rendererByCompId = new Map, this.defaultRenderer = new Ae(x)
                    }
                    createRenderer(x, z) {
                        if (!x || !z) return this.defaultRenderer;
                        switch (z.encapsulation) {
                            case O.ifc.Emulated: {
                                let te = this.rendererByCompId.get(z.id);
                                return te || (te = new Zt(this.eventManager, this.sharedStylesHost, z, this.appId), this.rendererByCompId.set(z.id, te)), te.applyToHost(x), te
                            }
                            case 1:
                            case O.ifc.ShadowDom:
                                return new Hi(this.eventManager, this.sharedStylesHost, x, z);
                            default:
                                if (!this.rendererByCompId.has(z.id)) {
                                    const te = wt(z.id, z.styles, []);
                                    this.sharedStylesHost.addStyles(te), this.rendererByCompId.set(z.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }
                    begin() {}
                    end() {}
                }
                return W.\u0275fac = function(x) {
                    return new(x || W)(O.LFG(me), O.LFG(ft), O.LFG(O.AFp))
                }, W.\u0275prov = O.Yz7({
                    token: W,
                    factory: W.\u0275fac
                }), W
            })();
            class Ae {
                constructor(U) {
                    this.eventManager = U, this.data = Object.create(null), this.destroyNode = null
                }
                destroy() {}
                createElement(U, x) {
                    return x ? document.createElementNS(be[x] || x, U) : document.createElement(U)
                }
                createComment(U) {
                    return document.createComment(U)
                }
                createText(U) {
                    return document.createTextNode(U)
                }
                appendChild(U, x) {
                    U.appendChild(x)
                }
                insertBefore(U, x, z) {
                    U && U.insertBefore(x, z)
                }
                removeChild(U, x) {
                    U && U.removeChild(x)
                }
                selectRootElement(U, x) {
                    let z = "string" == typeof U ? document.querySelector(U) : U;
                    if (!z) throw new Error(`The selector "${U}" did not match any elements`);
                    return x || (z.textContent = ""), z
                }
                parentNode(U) {
                    return U.parentNode
                }
                nextSibling(U) {
                    return U.nextSibling
                }
                setAttribute(U, x, z, te) {
                    if (te) {
                        x = te + ":" + x;
                        const ue = be[te];
                        ue ? U.setAttributeNS(ue, x, z) : U.setAttribute(x, z)
                    } else U.setAttribute(x, z)
                }
                removeAttribute(U, x, z) {
                    if (z) {
                        const te = be[z];
                        te ? U.removeAttributeNS(te, x) : U.removeAttribute(`${z}:${x}`)
                    } else U.removeAttribute(x)
                }
                addClass(U, x) {
                    U.classList.add(x)
                }
                removeClass(U, x) {
                    U.classList.remove(x)
                }
                setStyle(U, x, z, te) {
                    te & (O.JOm.DashCase | O.JOm.Important) ? U.style.setProperty(x, z, te & O.JOm.Important ? "important" : "") : U.style[x] = z
                }
                removeStyle(U, x, z) {
                    z & O.JOm.DashCase ? U.style.removeProperty(x) : U.style[x] = ""
                }
                setProperty(U, x, z) {
                    U[x] = z
                }
                setValue(U, x) {
                    U.nodeValue = x
                }
                listen(U, x, z) {
                    return "string" == typeof U ? this.eventManager.addGlobalEventListener(U, x, Pt(z)) : this.eventManager.addEventListener(U, x, Pt(z))
                }
            }
            class Zt extends Ae {
                constructor(U, x, z, te) {
                    super(U), this.component = z;
                    const ue = wt(te + "-" + z.id, z.styles, []);
                    x.addStyles(ue), this.contentAttr = function Ot(W) {
                        return "_ngcontent-%COMP%".replace(nt, W)
                    }(te + "-" + z.id), this.hostAttr = function en(W) {
                        return "_nghost-%COMP%".replace(nt, W)
                    }(te + "-" + z.id)
                }
                applyToHost(U) {
                    super.setAttribute(U, this.hostAttr, "")
                }
                createElement(U, x) {
                    const z = super.createElement(U, x);
                    return super.setAttribute(z, this.contentAttr, ""), z
                }
            }
            class Hi extends Ae {
                constructor(U, x, z, te) {
                    super(U), this.sharedStylesHost = x, this.hostEl = z, this.shadowRoot = z.attachShadow({
                        mode: "open"
                    }), this.sharedStylesHost.addHost(this.shadowRoot);
                    const ue = wt(te.id, te.styles, []);
                    for (let Xe = 0; Xe < ue.length; Xe++) {
                        const gt = document.createElement("style");
                        gt.textContent = ue[Xe], this.shadowRoot.appendChild(gt)
                    }
                }
                nodeOrShadowRoot(U) {
                    return U === this.hostEl ? this.shadowRoot : U
                }
                destroy() {
                    this.sharedStylesHost.removeHost(this.shadowRoot)
                }
                appendChild(U, x) {
                    return super.appendChild(this.nodeOrShadowRoot(U), x)
                }
                insertBefore(U, x, z) {
                    return super.insertBefore(this.nodeOrShadowRoot(U), x, z)
                }
                removeChild(U, x) {
                    return super.removeChild(this.nodeOrShadowRoot(U), x)
                }
                parentNode(U) {
                    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(U)))
                }
            }
            let _i = (() => {
                class W extends ne {
                    constructor(x) {
                        super(x)
                    }
                    supports(x) {
                        return !0
                    }
                    addEventListener(x, z, te) {
                        return x.addEventListener(z, te, !1), () => this.removeEventListener(x, z, te)
                    }
                    removeEventListener(x, z, te) {
                        return x.removeEventListener(z, te)
                    }
                }
                return W.\u0275fac = function(x) {
                    return new(x || W)(O.LFG(g.K0))
                }, W.\u0275prov = O.Yz7({
                    token: W,
                    factory: W.\u0275fac
                }), W
            })();
            const Wr = ["alt", "control", "meta", "shift"],
                Di = {
                    "\b": "Backspace",
                    "\t": "Tab",
                    "\x7f": "Delete",
                    "\x1b": "Escape",
                    Del: "Delete",
                    Esc: "Escape",
                    Left: "ArrowLeft",
                    Right: "ArrowRight",
                    Up: "ArrowUp",
                    Down: "ArrowDown",
                    Menu: "ContextMenu",
                    Scroll: "ScrollLock",
                    Win: "OS"
                },
                tr = {
                    A: "1",
                    B: "2",
                    C: "3",
                    D: "4",
                    E: "5",
                    F: "6",
                    G: "7",
                    H: "8",
                    I: "9",
                    J: "*",
                    K: "+",
                    M: "-",
                    N: ".",
                    O: "/",
                    "`": "0",
                    "\x90": "NumLock"
                },
                nr = {
                    alt: W => W.altKey,
                    control: W => W.ctrlKey,
                    meta: W => W.metaKey,
                    shift: W => W.shiftKey
                };
            let vr = (() => {
                class W extends ne {
                    constructor(x) {
                        super(x)
                    }
                    supports(x) {
                        return null != W.parseEventName(x)
                    }
                    addEventListener(x, z, te) {
                        const ue = W.parseEventName(z),
                            Xe = W.eventCallback(ue.fullKey, te, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular(() => (0, g.q)().onAndCancel(x, ue.domEventName, Xe))
                    }
                    static parseEventName(x) {
                        const z = x.toLowerCase().split("."),
                            te = z.shift();
                        if (0 === z.length || "keydown" !== te && "keyup" !== te) return null;
                        const ue = W._normalizeKey(z.pop());
                        let Xe = "";
                        if (Wr.forEach(Ft => {
                                const Rn = z.indexOf(Ft);
                                Rn > -1 && (z.splice(Rn, 1), Xe += Ft + ".")
                            }), Xe += ue, 0 != z.length || 0 === ue.length) return null;
                        const gt = {};
                        return gt.domEventName = te, gt.fullKey = Xe, gt
                    }
                    static getEventFullKey(x) {
                        let z = "",
                            te = function Et(W) {
                                let U = W.key;
                                if (null == U) {
                                    if (U = W.keyIdentifier, null == U) return "Unidentified";
                                    U.startsWith("U+") && (U = String.fromCharCode(parseInt(U.substring(2), 16)), 3 === W.location && tr.hasOwnProperty(U) && (U = tr[U]))
                                }
                                return Di[U] || U
                            }(x);
                        return te = te.toLowerCase(), " " === te ? te = "space" : "." === te && (te = "dot"), Wr.forEach(ue => {
                            ue != te && nr[ue](x) && (z += ue + ".")
                        }), z += te, z
                    }
                    static eventCallback(x, z, te) {
                        return ue => {
                            W.getEventFullKey(ue) === x && te.runGuarded(() => z(ue))
                        }
                    }
                    static _normalizeKey(x) {
                        return "esc" === x ? "escape" : x
                    }
                }
                return W.\u0275fac = function(x) {
                    return new(x || W)(O.LFG(g.K0))
                }, W.\u0275prov = O.Yz7({
                    token: W,
                    factory: W.\u0275fac
                }), W
            })();
            const kt = (0, O.eFA)(O._c5, "browser", [{
                    provide: O.Lbi,
                    useValue: g.bD
                }, {
                    provide: O.g9A,
                    useValue: function et() {
                        Ce.makeCurrent(), Q.init()
                    },
                    multi: !0
                }, {
                    provide: g.K0,
                    useFactory: function Ci() {
                        return (0, O.RDi)(document), document
                    },
                    deps: []
                }]),
                rr = [{
                    provide: O.zSh,
                    useValue: "root"
                }, {
                    provide: O.qLn,
                    useFactory: function $i() {
                        return new O.qLn
                    },
                    deps: []
                }, {
                    provide: ce,
                    useClass: _i,
                    multi: !0,
                    deps: [g.K0, O.R0b, O.Lbi]
                }, {
                    provide: ce,
                    useClass: vr,
                    multi: !0,
                    deps: [g.K0]
                }, {
                    provide: we,
                    useClass: we,
                    deps: [me, ft, O.AFp]
                }, {
                    provide: O.FYo,
                    useExisting: we
                }, {
                    provide: Ze,
                    useExisting: ft
                }, {
                    provide: ft,
                    useClass: ft,
                    deps: [g.K0]
                }, {
                    provide: O.dDg,
                    useClass: O.dDg,
                    deps: [O.R0b]
                }, {
                    provide: me,
                    useClass: me,
                    deps: [ce, O.R0b]
                }, {
                    provide: g.JF,
                    useClass: oe,
                    deps: []
                }];
            let zn = (() => {
                    class W {
                        constructor(x) {
                            if (x) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                        }
                        static withServerTransition(x) {
                            return {
                                ngModule: W,
                                providers: [{
                                    provide: O.AFp,
                                    useValue: x.appId
                                }, {
                                    provide: Se,
                                    useExisting: O.AFp
                                }, Y]
                            }
                        }
                    }
                    return W.\u0275fac = function(x) {
                        return new(x || W)(O.LFG(W, 12))
                    }, W.\u0275mod = O.oAB({
                        type: W
                    }), W.\u0275inj = O.cJS({
                        providers: rr,
                        imports: [g.ez, O.hGG]
                    }), W
                })(),
                zt = (() => {
                    class W {
                        constructor(x) {
                            this._doc = x, this._dom = (0, g.q)()
                        }
                        addTag(x, z = !1) {
                            return x ? this._getOrCreateElement(x, z) : null
                        }
                        addTags(x, z = !1) {
                            return x ? x.reduce((te, ue) => (ue && te.push(this._getOrCreateElement(ue, z)), te), []) : []
                        }
                        getTag(x) {
                            return x && this._doc.querySelector(`meta[${x}]`) || null
                        }
                        getTags(x) {
                            if (!x) return [];
                            const z = this._doc.querySelectorAll(`meta[${x}]`);
                            return z ? [].slice.call(z) : []
                        }
                        updateTag(x, z) {
                            if (!x) return null;
                            z = z || this._parseSelector(x);
                            const te = this.getTag(z);
                            return te ? this._setMetaElementAttributes(x, te) : this._getOrCreateElement(x, !0)
                        }
                        removeTag(x) {
                            this.removeTagElement(this.getTag(x))
                        }
                        removeTagElement(x) {
                            x && this._dom.remove(x)
                        }
                        _getOrCreateElement(x, z = !1) {
                            if (!z) {
                                const Xe = this._parseSelector(x),
                                    gt = this.getTags(Xe).filter(Ft => this._containsAttributes(x, Ft))[0];
                                if (void 0 !== gt) return gt
                            }
                            const te = this._dom.createElement("meta");
                            return this._setMetaElementAttributes(x, te), this._doc.getElementsByTagName("head")[0].appendChild(te), te
                        }
                        _setMetaElementAttributes(x, z) {
                            return Object.keys(x).forEach(te => z.setAttribute(this._getMetaKeyMap(te), x[te])), z
                        }
                        _parseSelector(x) {
                            const z = x.name ? "name" : "property";
                            return `${z}="${x[z]}"`
                        }
                        _containsAttributes(x, z) {
                            return Object.keys(x).every(te => z.getAttribute(this._getMetaKeyMap(te)) === x[te])
                        }
                        _getMetaKeyMap(x) {
                            return si[x] || x
                        }
                    }
                    return W.\u0275fac = function(x) {
                        return new(x || W)(O.LFG(g.K0))
                    }, W.\u0275prov = O.Yz7({
                        token: W,
                        factory: function(x) {
                            let z = null;
                            return z = x ? new x : function Tn() {
                                return new zt((0, O.LFG)(g.K0))
                            }(), z
                        },
                        providedIn: "root"
                    }), W
                })();
            const si = {
                httpEquiv: "http-equiv"
            };
            let Nr = (() => {
                class W {
                    constructor(x) {
                        this._doc = x
                    }
                    getTitle() {
                        return this._doc.title
                    }
                    setTitle(x) {
                        this._doc.title = x || ""
                    }
                }
                return W.\u0275fac = function(x) {
                    return new(x || W)(O.LFG(g.K0))
                }, W.\u0275prov = O.Yz7({
                    token: W,
                    factory: function(x) {
                        let z = null;
                        return z = x ? new x : function Cn() {
                            return new Nr((0, O.LFG)(g.K0))
                        }(), z
                    },
                    providedIn: "root"
                }), W
            })();
            "undefined" != typeof window && window
        },
        69414: (ot, pe, L) => {
            L.d(pe, {
                m2: () => fn,
                F0: () => Lt,
                yS: () => Tr,
                Bz: () => $n,
                lC: () => Z
            });
            var g = L(72096),
                O = L(72866),
                De = L(33009),
                Ce = L(66454);

            function re(...f) {
                let c = f[f.length - 1];
                return (0, O.K)(c) ? (f.pop(), (0, Ce.r)(f, c)) : (0, De.n)(f)
            }
            var ie = L(5529),
                ve = L(95279);
            class _e extends ie.xQ {
                constructor(c) {
                    super(), this._value = c
                }
                get value() {
                    return this.getValue()
                }
                _subscribe(c) {
                    const a = super._subscribe(c);
                    return a && !a.closed && c.next(this._value), a
                }
                getValue() {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new ve.N;
                    return this._value
                }
                next(c) {
                    super.next(this._value = c)
                }
            }
            var Se = L(66688),
                q = L(826),
                Y = L(69054);
            const Q = {};
            class ce {
                constructor(c) {
                    this.resultSelector = c
                }
                call(c, a) {
                    return a.subscribe(new me(c, this.resultSelector))
                }
            }
            class me extends q.L {
                constructor(c, a) {
                    super(c), this.resultSelector = a, this.active = 0, this.values = [], this.observables = []
                }
                _next(c) {
                    this.values.push(Q), this.observables.push(c)
                }
                _complete() {
                    const c = this.observables,
                        a = c.length;
                    if (0 === a) this.destination.complete();
                    else {
                        this.active = a, this.toRespond = a;
                        for (let v = 0; v < a; v++) {
                            const b = c[v];
                            this.add((0, Y.D)(this, b, b, v))
                        }
                    }
                }
                notifyComplete(c) {
                    0 == (this.active -= 1) && this.destination.complete()
                }
                notifyNext(c, a, v, b, A) {
                    const R = this.values,
                        J = this.toRespond ? R[v] === Q ? --this.toRespond : this.toRespond : 0;
                    R[v] = a, 0 === J && (this.resultSelector ? this._tryResultSelector(R) : this.destination.next(R.slice()))
                }
                _tryResultSelector(c) {
                    let a;
                    try {
                        a = this.resultSelector.apply(this, c)
                    } catch (v) {
                        return void this.destination.error(v)
                    }
                    this.destination.next(a)
                }
            }
            var ne = L(32916);

            function Ze(f, c) {
                return new ne.y(c ? a => c.schedule(ft, 0, {
                    error: f,
                    subscriber: a
                }) : a => a.error(f))
            }

            function ft({
                error: f,
                subscriber: c
            }) {
                c.error(f)
            }
            const be = (() => {
                function f() {
                    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                }
                return f.prototype = Object.create(Error.prototype), f
            })();
            var nt = L(89146);

            function qe(...f) {
                return function cn() {
                    return (0, nt.J)(1)
                }()(re(...f))
            }
            var ke = L(5254);
            const Ne = new ne.y(f => f.complete());

            function Ot(f) {
                return f ? function en(f) {
                    return new ne.y(c => f.schedule(() => c.complete()))
                }(f) : Ne
            }

            function wt(f) {
                return new ne.y(c => {
                    let a;
                    try {
                        a = f()
                    } catch (b) {
                        return void c.error(b)
                    }
                    return (a ? (0, ke.D)(a) : Ot()).subscribe(c)
                })
            }
            var Pt = L(71762),
                We = L(51869),
                we = L(24850);

            function Ae(f, c) {
                return "function" == typeof c ? a => a.pipe(Ae((v, b) => (0, ke.D)(f(v, b)).pipe((0, we.U)((A, R) => c(v, A, b, R))))) : a => a.lift(new zr(f))
            }
            class zr {
                constructor(c) {
                    this.project = c
                }
                call(c, a) {
                    return a.subscribe(new ii(c, this.project))
                }
            }
            class ii extends q.L {
                constructor(c, a) {
                    super(c), this.project = a, this.index = 0
                }
                _next(c) {
                    let a;
                    const v = this.index++;
                    try {
                        a = this.project(c, v)
                    } catch (b) {
                        return void this.destination.error(b)
                    }
                    this._innerSub(a, c, v)
                }
                _innerSub(c, a, v) {
                    const b = this.innerSubscription;
                    b && b.unsubscribe();
                    const A = new We.d(this, a, v),
                        R = this.destination;
                    R.add(A), this.innerSubscription = (0, Y.D)(this, c, void 0, void 0, A), this.innerSubscription !== A && R.add(this.innerSubscription)
                }
                _complete() {
                    const {
                        innerSubscription: c
                    } = this;
                    (!c || c.closed) && super._complete(), this.unsubscribe()
                }
                _unsubscribe() {
                    this.innerSubscription = null
                }
                notifyComplete(c) {
                    this.destination.remove(c), this.innerSubscription = null, this.isStopped && super._complete()
                }
                notifyNext(c, a, v, b, A) {
                    this.destination.next(a)
                }
            }
            var Zt = L(43489);
            const _i = (() => {
                function f() {
                    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                }
                return f.prototype = Object.create(Error.prototype), f
            })();

            function Wr(f) {
                return c => 0 === f ? Ot() : c.lift(new Ui(f))
            }
            class Ui {
                constructor(c) {
                    if (this.total = c, this.total < 0) throw new _i
                }
                call(c, a) {
                    return a.subscribe(new Di(c, this.total))
                }
            }
            class Di extends Zt.L {
                constructor(c, a) {
                    super(c), this.total = a, this.count = 0
                }
                _next(c) {
                    const a = this.total,
                        v = ++this.count;
                    v <= a && (this.destination.next(c), v === a && (this.destination.complete(), this.unsubscribe()))
                }
            }

            function nr(f, c) {
                let a = !1;
                return arguments.length >= 2 && (a = !0),
                    function(b) {
                        return b.lift(new vr(f, c, a))
                    }
            }
            class vr {
                constructor(c, a, v = !1) {
                    this.accumulator = c, this.seed = a, this.hasSeed = v
                }
                call(c, a) {
                    return a.subscribe(new Et(c, this.accumulator, this.seed, this.hasSeed))
                }
            }
            class Et extends Zt.L {
                constructor(c, a, v, b) {
                    super(c), this.accumulator = a, this._seed = v, this.hasSeed = b, this.index = 0
                }
                get seed() {
                    return this._seed
                }
                set seed(c) {
                    this.hasSeed = !0, this._seed = c
                }
                _next(c) {
                    if (this.hasSeed) return this._tryNext(c);
                    this.seed = c, this.destination.next(c)
                }
                _tryNext(c) {
                    const a = this.index++;
                    let v;
                    try {
                        v = this.accumulator(this.seed, c, a)
                    } catch (b) {
                        this.destination.error(b)
                    }
                    this.seed = v, this.destination.next(v)
                }
            }

            function et(f) {
                return function(a) {
                    const v = new $i(f),
                        b = a.lift(v);
                    return v.caught = b
                }
            }
            class $i {
                constructor(c) {
                    this.selector = c
                }
                call(c, a) {
                    return a.subscribe(new Ci(c, this.selector, this.caught))
                }
            }
            class Ci extends q.L {
                constructor(c, a, v) {
                    super(c), this.selector = a, this.caught = v
                }
                error(c) {
                    if (!this.isStopped) {
                        let a;
                        try {
                            a = this.selector(c, this.caught)
                        } catch (A) {
                            return void super.error(A)
                        }
                        this._unsubscribeAndRecycle();
                        const v = new We.d(this, void 0, void 0);
                        this.add(v);
                        const b = (0, Y.D)(this, a, void 0, void 0, v);
                        b !== v && this.add(b)
                    }
                }
            }
            var Jt = L(61709);

            function kt(f, c) {
                return (0, Jt.zg)(f, c, 1)
            }
            var rr = L(92198);

            function zn(f) {
                return function(a) {
                    return 0 === f ? Ot() : a.lift(new Tn(f))
                }
            }
            class Tn {
                constructor(c) {
                    if (this.total = c, this.total < 0) throw new _i
                }
                call(c, a) {
                    return a.subscribe(new zt(c, this.total))
                }
            }
            class zt extends Zt.L {
                constructor(c, a) {
                    super(c), this.total = a, this.ring = new Array, this.count = 0
                }
                _next(c) {
                    const a = this.ring,
                        v = this.total,
                        b = this.count++;
                    a.length < v ? a.push(c) : a[b % v] = c
                }
                _complete() {
                    const c = this.destination;
                    let a = this.count;
                    if (a > 0) {
                        const v = this.count >= this.total ? this.total : this.count,
                            b = this.ring;
                        for (let A = 0; A < v; A++) {
                            const R = a++ % v;
                            c.next(b[R])
                        }
                    }
                    c.complete()
                }
            }

            function si(f = _r) {
                return c => c.lift(new Cn(f))
            }
            class Cn {
                constructor(c) {
                    this.errorFactory = c
                }
                call(c, a) {
                    return a.subscribe(new Nr(c, this.errorFactory))
                }
            }
            class Nr extends Zt.L {
                constructor(c, a) {
                    super(c), this.errorFactory = a, this.hasValue = !1
                }
                _next(c) {
                    this.hasValue = !0, this.destination.next(c)
                }
                _complete() {
                    if (this.hasValue) return this.destination.complete(); {
                        let c;
                        try {
                            c = this.errorFactory()
                        } catch (a) {
                            c = a
                        }
                        this.destination.error(c)
                    }
                }
            }

            function _r() {
                return new be
            }

            function Dr(f = null) {
                return c => c.lift(new Yr(f))
            }
            class Yr {
                constructor(c) {
                    this.defaultValue = c
                }
                call(c, a) {
                    return a.subscribe(new oi(c, this.defaultValue))
                }
            }
            class oi extends Zt.L {
                constructor(c, a) {
                    super(c), this.defaultValue = a, this.isEmpty = !0
                }
                _next(c) {
                    this.isEmpty = !1, this.destination.next(c)
                }
                _complete() {
                    this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                }
            }
            var Le = L(35379);

            function _t(f, c) {
                const a = arguments.length >= 2;
                return v => v.pipe(f ? (0, rr.h)((b, A) => f(b, A, v)) : Le.y, Wr(1), a ? Dr(c) : si(() => new be))
            }

            function ye() {}
            var Ue = L(67043);

            function on(f, c, a) {
                return function(b) {
                    return b.lift(new En(f, c, a))
                }
            }
            class En {
                constructor(c, a, v) {
                    this.nextOrObserver = c, this.error = a, this.complete = v
                }
                call(c, a) {
                    return a.subscribe(new Ut(c, this.nextOrObserver, this.error, this.complete))
                }
            }
            class Ut extends Zt.L {
                constructor(c, a, v, b) {
                    super(c), this._tapNext = ye, this._tapError = ye, this._tapComplete = ye, this._tapError = v || ye, this._tapComplete = b || ye, (0, Ue.m)(a) ? (this._context = this, this._tapNext = a) : a && (this._context = a, this._tapNext = a.next || ye, this._tapError = a.error || ye, this._tapComplete = a.complete || ye)
                }
                _next(c) {
                    try {
                        this._tapNext.call(this._context, c)
                    } catch (a) {
                        return void this.destination.error(a)
                    }
                    this.destination.next(c)
                }
                _error(c) {
                    try {
                        this._tapError.call(this._context, c)
                    } catch (a) {
                        return void this.destination.error(a)
                    }
                    this.destination.error(c)
                }
                _complete() {
                    try {
                        this._tapComplete.call(this._context)
                    } catch (c) {
                        return void this.destination.error(c)
                    }
                    return this.destination.complete()
                }
            }
            var dn = L(42654);
            class wn {
                constructor(c) {
                    this.callback = c
                }
                call(c, a) {
                    return a.subscribe(new xt(c, this.callback))
                }
            }
            class xt extends Zt.L {
                constructor(c, a) {
                    super(c), this.add(new dn.w(a))
                }
            }
            var Ei = L(74327),
                tt = L(69808);
            class Nn {
                constructor(c, a) {
                    this.id = c, this.url = a
                }
            }
            class at extends Nn {
                constructor(c, a, v = "imperative", b = null) {
                    super(c, a), this.navigationTrigger = v, this.restoredState = b
                }
                toString() {
                    return `NavigationStart(id: ${this.id}, url: '${this.url}')`
                }
            }
            class fn extends Nn {
                constructor(c, a, v) {
                    super(c, a), this.urlAfterRedirects = v
                }
                toString() {
                    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
                }
            }
            class Zn extends Nn {
                constructor(c, a, v) {
                    super(c, a), this.reason = v
                }
                toString() {
                    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
                }
            }
            class ir extends Nn {
                constructor(c, a, v) {
                    super(c, a), this.error = v
                }
                toString() {
                    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
                }
            }
            class ht extends Nn {
                constructor(c, a, v, b) {
                    super(c, a), this.urlAfterRedirects = v, this.state = b
                }
                toString() {
                    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class xn extends Nn {
                constructor(c, a, v, b) {
                    super(c, a), this.urlAfterRedirects = v, this.state = b
                }
                toString() {
                    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class sr extends Nn {
                constructor(c, a, v, b, A) {
                    super(c, a), this.urlAfterRedirects = v, this.state = b, this.shouldActivate = A
                }
                toString() {
                    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
                }
            }
            class qr extends Nn {
                constructor(c, a, v, b) {
                    super(c, a), this.urlAfterRedirects = v, this.state = b
                }
                toString() {
                    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class Kr extends Nn {
                constructor(c, a, v, b) {
                    super(c, a), this.urlAfterRedirects = v, this.state = b
                }
                toString() {
                    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class hn {
                constructor(c) {
                    this.route = c
                }
                toString() {
                    return `RouteConfigLoadStart(path: ${this.route.path})`
                }
            }
            class or {
                constructor(c) {
                    this.route = c
                }
                toString() {
                    return `RouteConfigLoadEnd(path: ${this.route.path})`
                }
            }
            class W {
                constructor(c) {
                    this.snapshot = c
                }
                toString() {
                    return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class U {
                constructor(c) {
                    this.snapshot = c
                }
                toString() {
                    return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class x {
                constructor(c) {
                    this.snapshot = c
                }
                toString() {
                    return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class z {
                constructor(c) {
                    this.snapshot = c
                }
                toString() {
                    return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class te {
                constructor(c, a, v) {
                    this.routerEvent = c, this.position = a, this.anchor = v
                }
                toString() {
                    return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`
                }
            }
            const ue = "primary";
            class Xe {
                constructor(c) {
                    this.params = c || {}
                }
                has(c) {
                    return Object.prototype.hasOwnProperty.call(this.params, c)
                }
                get(c) {
                    if (this.has(c)) {
                        const a = this.params[c];
                        return Array.isArray(a) ? a[0] : a
                    }
                    return null
                }
                getAll(c) {
                    if (this.has(c)) {
                        const a = this.params[c];
                        return Array.isArray(a) ? a : [a]
                    }
                    return []
                }
                get keys() {
                    return Object.keys(this.params)
                }
            }

            function gt(f) {
                return new Xe(f)
            }
            const Ft = "ngNavigationCancelingError";

            function Rn(f) {
                const c = Error("NavigationCancelingError: " + f);
                return c[Ft] = !0, c
            }

            function Wt(f, c, a) {
                const v = a.path.split("/");
                if (v.length > f.length || "full" === a.pathMatch && (c.hasChildren() || v.length < f.length)) return null;
                const b = {};
                for (let A = 0; A < v.length; A++) {
                    const R = v[A],
                        H = f[A];
                    if (R.startsWith(":")) b[R.substring(1)] = H;
                    else if (R !== H.path) return null
                }
                return {
                    consumed: f.slice(0, v.length),
                    posParams: b
                }
            }

            function Vt(f, c) {
                const a = f ? Object.keys(f) : void 0,
                    v = c ? Object.keys(c) : void 0;
                if (!a || !v || a.length != v.length) return !1;
                let b;
                for (let A = 0; A < a.length; A++)
                    if (b = a[A], !St(f[b], c[b])) return !1;
                return !0
            }

            function St(f, c) {
                if (Array.isArray(f) && Array.isArray(c)) {
                    if (f.length !== c.length) return !1;
                    const a = [...f].sort(),
                        v = [...c].sort();
                    return a.every((b, A) => v[A] === b)
                }
                return f === c
            }

            function Wn(f) {
                return Array.prototype.concat.apply([], f)
            }

            function Qr(f) {
                return f.length > 0 ? f[f.length - 1] : null
            }

            function bt(f, c) {
                for (const a in f) f.hasOwnProperty(a) && c(f[a], a)
            }

            function Bt(f) {
                return (0, g.CqO)(f) ? f : (0, g.QGY)(f) ? (0, ke.D)(Promise.resolve(f)) : re(f)
            }
            const ar = {
                    exact: function Mt(f, c, a) {
                        if (!Sn(f.segments, c.segments) || !Ln(f.segments, c.segments, a) || f.numberOfChildren !== c.numberOfChildren) return !1;
                        for (const v in c.children)
                            if (!f.children[v] || !Mt(f.children[v], c.children[v], a)) return !1;
                        return !0
                    },
                    subset: Yn
                },
                sn = {
                    exact: function Je(f, c) {
                        return Vt(f, c)
                    },
                    subset: function an(f, c) {
                        return Object.keys(c).length <= Object.keys(f).length && Object.keys(c).every(a => St(f[a], c[a]))
                    },
                    ignored: () => !0
                };

            function he(f, c, a) {
                return ar[a.paths](f.root, c.root, a.matrixParams) && sn[a.queryParams](f.queryParams, c.queryParams) && !("exact" === a.fragment && f.fragment !== c.fragment)
            }

            function Yn(f, c, a) {
                return $t(f, c, c.segments, a)
            }

            function $t(f, c, a, v) {
                if (f.segments.length > a.length) {
                    const b = f.segments.slice(0, a.length);
                    return !(!Sn(b, a) || c.hasChildren() || !Ln(b, a, v))
                }
                if (f.segments.length === a.length) {
                    if (!Sn(f.segments, a) || !Ln(f.segments, a, v)) return !1;
                    for (const b in c.children)
                        if (!f.children[b] || !Yn(f.children[b], c.children[b], v)) return !1;
                    return !0
                } {
                    const b = a.slice(0, f.segments.length),
                        A = a.slice(f.segments.length);
                    return !!(Sn(f.segments, b) && Ln(f.segments, b, v) && f.children[ue]) && $t(f.children[ue], c, A, v)
                }
            }

            function Ln(f, c, a) {
                return c.every((v, b) => sn[a](f[b].parameters, v.parameters))
            }
            class Ke {
                constructor(c, a, v) {
                    this.root = c, this.queryParams = a, this.fragment = v
                }
                get queryParamMap() {
                    return this._queryParamMap || (this._queryParamMap = gt(this.queryParams)), this._queryParamMap
                }
                toString() {
                    return On.serialize(this)
                }
            }
            class Qe {
                constructor(c, a) {
                    this.segments = c, this.children = a, this.parent = null, bt(a, (v, b) => v.parent = this)
                }
                hasChildren() {
                    return this.numberOfChildren > 0
                }
                get numberOfChildren() {
                    return Object.keys(this.children).length
                }
                toString() {
                    return qn(this)
                }
            }
            class In {
                constructor(c, a) {
                    this.path = c, this.parameters = a
                }
                get parameterMap() {
                    return this._parameterMap || (this._parameterMap = gt(this.parameters)), this._parameterMap
                }
                toString() {
                    return Lr(this)
                }
            }

            function Sn(f, c) {
                return f.length === c.length && f.every((a, v) => a.path === c[v].path)
            }
            class Zr {}
            class Cr {
                parse(c) {
                    const a = new Ds(c);
                    return new Ke(a.parseRootSegment(), a.parseQueryParams(), a.parseFragment())
                }
                serialize(c) {
                    const a = `/${Jn(c.root,!0)}`,
                        v = function ai(f) {
                            const c = Object.keys(f).map(a => {
                                const v = f[a];
                                return Array.isArray(v) ? v.map(b => `${mt(a)}=${mt(b)}`).join("&") : `${mt(a)}=${mt(v)}`
                            }).filter(a => !!a);
                            return c.length ? `?${c.join("&")}` : ""
                        }(c.queryParams);
                    return `${a}${v}${"string"==typeof c.fragment?`#${function Rr(f){return encodeURI(f)}(c.fragment)}`:""}`
                }
            }
            const On = new Cr;

            function qn(f) {
                return f.segments.map(c => Lr(c)).join("/")
            }

            function Jn(f, c) {
                if (!f.hasChildren()) return qn(f);
                if (c) {
                    const a = f.children[ue] ? Jn(f.children[ue], !1) : "",
                        v = [];
                    return bt(f.children, (b, A) => {
                        A !== ue && v.push(`${A}:${Jn(b,!1)}`)
                    }), v.length > 0 ? `${a}(${v.join("//")})` : a
                } {
                    const a = function lr(f, c) {
                        let a = [];
                        return bt(f.children, (v, b) => {
                            b === ue && (a = a.concat(c(v, b)))
                        }), bt(f.children, (v, b) => {
                            b !== ue && (a = a.concat(c(v, b)))
                        }), a
                    }(f, (v, b) => b === ue ? [Jn(f.children[ue], !1)] : [`${b}:${Jn(v,!1)}`]);
                    return 1 === Object.keys(f.children).length && null != f.children[ue] ? `${qn(f)}/${a[0]}` : `${qn(f)}/(${a.join("//")})`
                }
            }

            function vn(f) {
                return encodeURIComponent(f).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
            }

            function mt(f) {
                return vn(f).replace(/%3B/gi, ";")
            }

            function ur(f) {
                return vn(f).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
            }

            function _n(f) {
                return decodeURIComponent(f)
            }

            function Rt(f) {
                return _n(f.replace(/\+/g, "%20"))
            }

            function Lr(f) {
                return `${ur(f.path)}${function kr(f){return Object.keys(f).map(c=>`;${ur(c)}=${ur(f[c])}`).join("")}(f.parameters)}`
            }
            const Pn = /^[^\/()?;=#]+/;

            function li(f) {
                const c = f.match(Pn);
                return c ? c[0] : ""
            }
            const us = /^[^=?&#]+/,
                bi = /^[^&#]+/;
            class Ds {
                constructor(c) {
                    this.url = c, this.remaining = c
                }
                parseRootSegment() {
                    return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Qe([], {}) : new Qe([], this.parseChildren())
                }
                parseQueryParams() {
                    const c = {};
                    if (this.consumeOptional("?"))
                        do {
                            this.parseQueryParam(c)
                        } while (this.consumeOptional("&"));
                    return c
                }
                parseFragment() {
                    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
                }
                parseChildren() {
                    if ("" === this.remaining) return {};
                    this.consumeOptional("/");
                    const c = [];
                    for (this.peekStartsWith("(") || c.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), c.push(this.parseSegment());
                    let a = {};
                    this.peekStartsWith("/(") && (this.capture("/"), a = this.parseParens(!0));
                    let v = {};
                    return this.peekStartsWith("(") && (v = this.parseParens(!1)), (c.length > 0 || Object.keys(a).length > 0) && (v[ue] = new Qe(c, a)), v
                }
                parseSegment() {
                    const c = li(this.remaining);
                    if ("" === c && this.peekStartsWith(";")) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
                    return this.capture(c), new In(_n(c), this.parseMatrixParams())
                }
                parseMatrixParams() {
                    const c = {};
                    for (; this.consumeOptional(";");) this.parseParam(c);
                    return c
                }
                parseParam(c) {
                    const a = li(this.remaining);
                    if (!a) return;
                    this.capture(a);
                    let v = "";
                    if (this.consumeOptional("=")) {
                        const b = li(this.remaining);
                        b && (v = b, this.capture(v))
                    }
                    c[_n(a)] = _n(v)
                }
                parseQueryParam(c) {
                    const a = function cs(f) {
                        const c = f.match(us);
                        return c ? c[0] : ""
                    }(this.remaining);
                    if (!a) return;
                    this.capture(a);
                    let v = "";
                    if (this.consumeOptional("=")) {
                        const R = function ui(f) {
                            const c = f.match(bi);
                            return c ? c[0] : ""
                        }(this.remaining);
                        R && (v = R, this.capture(v))
                    }
                    const b = Rt(a),
                        A = Rt(v);
                    if (c.hasOwnProperty(b)) {
                        let R = c[b];
                        Array.isArray(R) || (R = [R], c[b] = R), R.push(A)
                    } else c[b] = A
                }
                parseParens(c) {
                    const a = {};
                    for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                        const v = li(this.remaining),
                            b = this.remaining[v.length];
                        if ("/" !== b && ")" !== b && ";" !== b) throw new Error(`Cannot parse url '${this.url}'`);
                        let A;
                        v.indexOf(":") > -1 ? (A = v.substr(0, v.indexOf(":")), this.capture(A), this.capture(":")) : c && (A = ue);
                        const R = this.parseChildren();
                        a[A] = 1 === Object.keys(R).length ? R[ue] : new Qe([], R), this.consumeOptional("//")
                    }
                    return a
                }
                peekStartsWith(c) {
                    return this.remaining.startsWith(c)
                }
                consumeOptional(c) {
                    return !!this.peekStartsWith(c) && (this.remaining = this.remaining.substring(c.length), !0)
                }
                capture(c) {
                    if (!this.consumeOptional(c)) throw new Error(`Expected "${c}".`)
                }
            }
            class cr {
                constructor(c) {
                    this._root = c
                }
                get root() {
                    return this._root.value
                }
                parent(c) {
                    const a = this.pathFromRoot(c);
                    return a.length > 1 ? a[a.length - 2] : null
                }
                children(c) {
                    const a = ci(c, this._root);
                    return a ? a.children.map(v => v.value) : []
                }
                firstChild(c) {
                    const a = ci(c, this._root);
                    return a && a.children.length > 0 ? a.children[0].value : null
                }
                siblings(c) {
                    const a = Vr(c, this._root);
                    return a.length < 2 ? [] : a[a.length - 2].children.map(b => b.value).filter(b => b !== c)
                }
                pathFromRoot(c) {
                    return Vr(c, this._root).map(a => a.value)
                }
            }

            function ci(f, c) {
                if (f === c.value) return c;
                for (const a of c.children) {
                    const v = ci(f, a);
                    if (v) return v
                }
                return null
            }

            function Vr(f, c) {
                if (f === c.value) return [c];
                for (const a of c.children) {
                    const v = Vr(f, a);
                    if (v.length) return v.unshift(c), v
                }
                return []
            }
            class kn {
                constructor(c, a) {
                    this.value = c, this.children = a
                }
                toString() {
                    return `TreeNode(${this.value})`
                }
            }

            function Er(f) {
                const c = {};
                return f && f.children.forEach(a => c[a.value.outlet] = a), c
            }
            class ds extends cr {
                constructor(c, a) {
                    super(c), this.snapshot = a, Kn(this, c)
                }
                toString() {
                    return this.snapshot.toString()
                }
            }

            function wi(f, c) {
                const a = function Gi(f, c) {
                        const R = new Xn([], {}, {}, "", {}, ue, c, null, f.root, -1, {});
                        return new br("", new kn(R, []))
                    }(f, c),
                    v = new _e([new In("", {})]),
                    b = new _e({}),
                    A = new _e({}),
                    R = new _e({}),
                    H = new _e(""),
                    J = new Br(v, b, R, H, A, ue, c, a.root);
                return J.snapshot = a.root, new ds(new kn(J, []), a)
            }
            class Br {
                constructor(c, a, v, b, A, R, H, J) {
                    this.url = c, this.params = a, this.queryParams = v, this.fragment = b, this.data = A, this.outlet = R, this.component = H, this._futureSnapshot = J
                }
                get routeConfig() {
                    return this._futureSnapshot.routeConfig
                }
                get root() {
                    return this._routerState.root
                }
                get parent() {
                    return this._routerState.parent(this)
                }
                get firstChild() {
                    return this._routerState.firstChild(this)
                }
                get children() {
                    return this._routerState.children(this)
                }
                get pathFromRoot() {
                    return this._routerState.pathFromRoot(this)
                }
                get paramMap() {
                    return this._paramMap || (this._paramMap = this.params.pipe((0, we.U)(c => gt(c)))), this._paramMap
                }
                get queryParamMap() {
                    return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe((0, we.U)(c => gt(c)))), this._queryParamMap
                }
                toString() {
                    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
                }
            }

            function di(f, c = "emptyOnly") {
                const a = f.pathFromRoot;
                let v = 0;
                if ("always" !== c)
                    for (v = a.length - 1; v >= 1;) {
                        const b = a[v],
                            A = a[v - 1];
                        if (b.routeConfig && "" === b.routeConfig.path) v--;
                        else {
                            if (A.component) break;
                            v--
                        }
                    }
                return function Cs(f) {
                    return f.reduce((c, a) => ({
                        params: Object.assign(Object.assign({}, c.params), a.params),
                        data: Object.assign(Object.assign({}, c.data), a.data),
                        resolve: Object.assign(Object.assign({}, c.resolve), a._resolvedData)
                    }), {
                        params: {},
                        data: {},
                        resolve: {}
                    })
                }(a.slice(v))
            }
            class Xn {
                constructor(c, a, v, b, A, R, H, J, Ie, yt, Ve) {
                    this.url = c, this.params = a, this.queryParams = v, this.fragment = b, this.data = A, this.outlet = R, this.component = H, this.routeConfig = J, this._urlSegment = Ie, this._lastPathIndex = yt, this._resolve = Ve
                }
                get root() {
                    return this._routerState.root
                }
                get parent() {
                    return this._routerState.parent(this)
                }
                get firstChild() {
                    return this._routerState.firstChild(this)
                }
                get children() {
                    return this._routerState.children(this)
                }
                get pathFromRoot() {
                    return this._routerState.pathFromRoot(this)
                }
                get paramMap() {
                    return this._paramMap || (this._paramMap = gt(this.params)), this._paramMap
                }
                get queryParamMap() {
                    return this._queryParamMap || (this._queryParamMap = gt(this.queryParams)), this._queryParamMap
                }
                toString() {
                    return `Route(url:'${this.url.map(v=>v.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`
                }
            }
            class br extends cr {
                constructor(c, a) {
                    super(a), this.url = c, Kn(this, a)
                }
                toString() {
                    return fs(this._root)
                }
            }

            function Kn(f, c) {
                c.value._routerState = f, c.children.forEach(a => Kn(f, a))
            }

            function fs(f) {
                const c = f.children.length > 0 ? ` { ${f.children.map(fs).join(", ")} } ` : "";
                return `${f.value}${c}`
            }

            function Si(f) {
                if (f.snapshot) {
                    const c = f.snapshot,
                        a = f._futureSnapshot;
                    f.snapshot = a, Vt(c.queryParams, a.queryParams) || f.queryParams.next(a.queryParams), c.fragment !== a.fragment && f.fragment.next(a.fragment), Vt(c.params, a.params) || f.params.next(a.params),
                        function tn(f, c) {
                            if (f.length !== c.length) return !1;
                            for (let a = 0; a < f.length; ++a)
                                if (!Vt(f[a], c[a])) return !1;
                            return !0
                        }(c.url, a.url) || f.url.next(a.url), Vt(c.data, a.data) || f.data.next(a.data)
                } else f.snapshot = f._futureSnapshot, f.data.next(f._futureSnapshot.data)
            }

            function fi(f, c) {
                const a = Vt(f.params, c.params) && function Be(f, c) {
                    return Sn(f, c) && f.every((a, v) => Vt(a.parameters, c[v].parameters))
                }(f.url, c.url);
                return a && !(!f.parent != !c.parent) && (!f.parent || fi(f.parent, c.parent))
            }

            function Hr(f, c, a) {
                if (a && f.shouldReuseRoute(c.value, a.value.snapshot)) {
                    const v = a.value;
                    v._futureSnapshot = c.value;
                    const b = function hi(f, c, a) {
                        return c.children.map(v => {
                            for (const b of a.children)
                                if (f.shouldReuseRoute(v.value, b.value.snapshot)) return Hr(f, v, b);
                            return Hr(f, v)
                        })
                    }(f, c, a);
                    return new kn(v, b)
                } {
                    if (f.shouldAttach(c.value)) {
                        const A = f.retrieve(c.value);
                        if (null !== A) {
                            const R = A.route;
                            return R.value._futureSnapshot = c.value, R.children = c.children.map(H => Hr(f, H)), R
                        }
                    }
                    const v = function zi(f) {
                            return new Br(new _e(f.url), new _e(f.params), new _e(f.queryParams), new _e(f.fragment), new _e(f.data), f.outlet, f.component, f)
                        }(c.value),
                        b = c.children.map(A => Hr(f, A));
                    return new kn(v, b)
                }
            }

            function Mi(f) {
                return "object" == typeof f && null != f && !f.outlets && !f.segmentPath
            }

            function wr(f) {
                return "object" == typeof f && null != f && f.outlets
            }

            function Vn(f, c, a, v, b) {
                let A = {};
                if (v && bt(v, (H, J) => {
                        A[J] = Array.isArray(H) ? H.map(Ie => `${Ie}`) : `${H}`
                    }), f === c) return new Ke(a, A, b);
                const R = Ai(f, c, a);
                return new Ke(R, A, b)
            }

            function Ai(f, c, a) {
                const v = {};
                return bt(f.children, (b, A) => {
                    v[A] = b === c ? a : Ai(b, c, a)
                }), new Qe(f.segments, v)
            }
            class Jr {
                constructor(c, a, v) {
                    if (this.isAbsolute = c, this.numberOfDoubleDots = a, this.commands = v, c && v.length > 0 && Mi(v[0])) throw new Error("Root segment cannot have matrix parameters");
                    const b = v.find(wr);
                    if (b && b !== Qr(v)) throw new Error("{outlets:{}} has to be the last command")
                }
                toRoot() {
                    return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
                }
            }
            class pn {
                constructor(c, a, v) {
                    this.segmentGroup = c, this.processChildren = a, this.index = v
                }
            }

            function T(f, c, a) {
                if (f || (f = new Qe([], {})), 0 === f.segments.length && f.hasChildren()) return C(f, c, a);
                const v = function P(f, c, a) {
                        let v = 0,
                            b = c;
                        const A = {
                            match: !1,
                            pathIndex: 0,
                            commandIndex: 0
                        };
                        for (; b < f.segments.length;) {
                            if (v >= a.length) return A;
                            const R = f.segments[b],
                                H = a[v];
                            if (wr(H)) break;
                            const J = `${H}`,
                                Ie = v < a.length - 1 ? a[v + 1] : null;
                            if (b > 0 && void 0 === J) break;
                            if (J && Ie && "object" == typeof Ie && void 0 === Ie.outlets) {
                                if (!de(J, Ie, R)) return A;
                                v += 2
                            } else {
                                if (!de(J, {}, R)) return A;
                                v++
                            }
                            b++
                        }
                        return {
                            match: !0,
                            pathIndex: b,
                            commandIndex: v
                        }
                    }(f, c, a),
                    b = a.slice(v.commandIndex);
                if (v.match && v.pathIndex < f.segments.length) {
                    const A = new Qe(f.segments.slice(0, v.pathIndex), {});
                    return A.children[ue] = new Qe(f.segments.slice(v.pathIndex), f.children), C(A, 0, b)
                }
                return v.match && 0 === b.length ? new Qe(f.segments, {}) : v.match && !f.hasChildren() ? B(f, c, a) : v.match ? C(f, 0, b) : B(f, c, a)
            }

            function C(f, c, a) {
                if (0 === a.length) return new Qe(f.segments, {}); {
                    const v = function _(f) {
                            return wr(f[0]) ? f[0].outlets : {
                                [ue]: f
                            }
                        }(a),
                        b = {};
                    return bt(v, (A, R) => {
                        "string" == typeof A && (A = [A]), null !== A && (b[R] = T(f.children[R], c, A))
                    }), bt(f.children, (A, R) => {
                        void 0 === v[R] && (b[R] = A)
                    }), new Qe(f.segments, b)
                }
            }

            function B(f, c, a) {
                const v = f.segments.slice(0, c);
                let b = 0;
                for (; b < a.length;) {
                    const A = a[b];
                    if (wr(A)) {
                        const J = K(A.outlets);
                        return new Qe(v, J)
                    }
                    if (0 === b && Mi(a[0])) {
                        v.push(new In(f.segments[c].path, le(a[0]))), b++;
                        continue
                    }
                    const R = wr(A) ? A.outlets[ue] : `${A}`,
                        H = b < a.length - 1 ? a[b + 1] : null;
                    R && H && Mi(H) ? (v.push(new In(R, le(H))), b += 2) : (v.push(new In(R, {})), b++)
                }
                return new Qe(v, {})
            }

            function K(f) {
                const c = {};
                return bt(f, (a, v) => {
                    "string" == typeof a && (a = [a]), null !== a && (c[v] = B(new Qe([], {}), 0, a))
                }), c
            }

            function le(f) {
                const c = {};
                return bt(f, (a, v) => c[v] = `${a}`), c
            }

            function de(f, c, a) {
                return f == a.path && Vt(c, a.parameters)
            }
            class Tt {
                constructor(c, a, v, b) {
                    this.routeReuseStrategy = c, this.futureState = a, this.currState = v, this.forwardEvent = b
                }
                activate(c) {
                    const a = this.futureState._root,
                        v = this.currState ? this.currState._root : null;
                    this.deactivateChildRoutes(a, v, c), Si(this.futureState.root), this.activateChildRoutes(a, v, c)
                }
                deactivateChildRoutes(c, a, v) {
                    const b = Er(a);
                    c.children.forEach(A => {
                        const R = A.value.outlet;
                        this.deactivateRoutes(A, b[R], v), delete b[R]
                    }), bt(b, (A, R) => {
                        this.deactivateRouteAndItsChildren(A, v)
                    })
                }
                deactivateRoutes(c, a, v) {
                    const b = c.value,
                        A = a ? a.value : null;
                    if (b === A)
                        if (b.component) {
                            const R = v.getContext(b.outlet);
                            R && this.deactivateChildRoutes(c, a, R.children)
                        } else this.deactivateChildRoutes(c, a, v);
                    else A && this.deactivateRouteAndItsChildren(a, v)
                }
                deactivateRouteAndItsChildren(c, a) {
                    c.value.component && this.routeReuseStrategy.shouldDetach(c.value.snapshot) ? this.detachAndStoreRouteSubtree(c, a) : this.deactivateRouteAndOutlet(c, a)
                }
                detachAndStoreRouteSubtree(c, a) {
                    const v = a.getContext(c.value.outlet),
                        b = v && c.value.component ? v.children : a,
                        A = Er(c);
                    for (const R of Object.keys(A)) this.deactivateRouteAndItsChildren(A[R], b);
                    if (v && v.outlet) {
                        const R = v.outlet.detach(),
                            H = v.children.onOutletDeactivated();
                        this.routeReuseStrategy.store(c.value.snapshot, {
                            componentRef: R,
                            route: c,
                            contexts: H
                        })
                    }
                }
                deactivateRouteAndOutlet(c, a) {
                    const v = a.getContext(c.value.outlet),
                        b = v && c.value.component ? v.children : a,
                        A = Er(c);
                    for (const R of Object.keys(A)) this.deactivateRouteAndItsChildren(A[R], b);
                    v && v.outlet && (v.outlet.deactivate(), v.children.onOutletDeactivated(), v.attachRef = null, v.resolver = null, v.route = null)
                }
                activateChildRoutes(c, a, v) {
                    const b = Er(a);
                    c.children.forEach(A => {
                        this.activateRoutes(A, b[A.value.outlet], v), this.forwardEvent(new z(A.value.snapshot))
                    }), c.children.length && this.forwardEvent(new U(c.value.snapshot))
                }
                activateRoutes(c, a, v) {
                    const b = c.value,
                        A = a ? a.value : null;
                    if (Si(b), b === A)
                        if (b.component) {
                            const R = v.getOrCreateContext(b.outlet);
                            this.activateChildRoutes(c, a, R.children)
                        } else this.activateChildRoutes(c, a, v);
                    else if (b.component) {
                        const R = v.getOrCreateContext(b.outlet);
                        if (this.routeReuseStrategy.shouldAttach(b.snapshot)) {
                            const H = this.routeReuseStrategy.retrieve(b.snapshot);
                            this.routeReuseStrategy.store(b.snapshot, null), R.children.onOutletReAttached(H.contexts), R.attachRef = H.componentRef, R.route = H.route.value, R.outlet && R.outlet.attach(H.componentRef, H.route.value), Si(H.route.value), this.activateChildRoutes(c, null, R.children)
                        } else {
                            const H = function Ye(f) {
                                    for (let c = f.parent; c; c = c.parent) {
                                        const a = c.routeConfig;
                                        if (a && a._loadedConfig) return a._loadedConfig;
                                        if (a && a.component) return null
                                    }
                                    return null
                                }(b.snapshot),
                                J = H ? H.module.componentFactoryResolver : null;
                            R.attachRef = null, R.route = b, R.resolver = J, R.outlet && R.outlet.activateWith(b, J), this.activateChildRoutes(c, null, R.children)
                        }
                    } else this.activateChildRoutes(c, null, v)
                }
            }
            class lt {
                constructor(c, a) {
                    this.routes = c, this.module = a
                }
            }

            function ct(f) {
                return "function" == typeof f
            }

            function rt(f) {
                return f instanceof Ke
            }
            const E = Symbol("INITIAL_VALUE");

            function y() {
                return Ae(f => function oe(...f) {
                    let c = null,
                        a = null;
                    return (0, O.K)(f[f.length - 1]) && (a = f.pop()), "function" == typeof f[f.length - 1] && (c = f.pop()), 1 === f.length && (0, Se.k)(f[0]) && (f = f[0]), (0, De.n)(f, a).lift(new ce(c))
                }(f.map(c => c.pipe(Wr(1), function tr(...f) {
                    const c = f[f.length - 1];
                    return (0, O.K)(c) ? (f.pop(), a => qe(f, a, c)) : a => qe(f, a)
                }(E)))).pipe(nr((c, a) => {
                    let v = !1;
                    return a.reduce((b, A, R) => b !== E ? b : (A === E && (v = !0), v || !1 !== A && R !== a.length - 1 && !rt(A) ? b : A), c)
                }, E), (0, rr.h)(c => c !== E), (0, we.U)(c => rt(c) ? c : !0 === c), Wr(1)))
            }
            class m {
                constructor() {
                    this.outlet = null, this.route = null, this.resolver = null, this.children = new I, this.attachRef = null
                }
            }
            class I {
                constructor() {
                    this.contexts = new Map
                }
                onChildOutletCreated(c, a) {
                    const v = this.getOrCreateContext(c);
                    v.outlet = a, this.contexts.set(c, v)
                }
                onChildOutletDestroyed(c) {
                    const a = this.getContext(c);
                    a && (a.outlet = null, a.attachRef = null)
                }
                onOutletDeactivated() {
                    const c = this.contexts;
                    return this.contexts = new Map, c
                }
                onOutletReAttached(c) {
                    this.contexts = c
                }
                getOrCreateContext(c) {
                    let a = this.getContext(c);
                    return a || (a = new m, this.contexts.set(c, a)), a
                }
                getContext(c) {
                    return this.contexts.get(c) || null
                }
            }
            let Z = (() => {
                class f {
                    constructor(a, v, b, A, R) {
                        this.parentContexts = a, this.location = v, this.resolver = b, this.changeDetector = R, this.activated = null, this._activatedRoute = null, this.activateEvents = new g.vpe, this.deactivateEvents = new g.vpe, this.attachEvents = new g.vpe, this.detachEvents = new g.vpe, this.name = A || ue, a.onChildOutletCreated(this.name, this)
                    }
                    ngOnDestroy() {
                        this.parentContexts.onChildOutletDestroyed(this.name)
                    }
                    ngOnInit() {
                        if (!this.activated) {
                            const a = this.parentContexts.getContext(this.name);
                            a && a.route && (a.attachRef ? this.attach(a.attachRef, a.route) : this.activateWith(a.route, a.resolver || null))
                        }
                    }
                    get isActivated() {
                        return !!this.activated
                    }
                    get component() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this.activated.instance
                    }
                    get activatedRoute() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this._activatedRoute
                    }
                    get activatedRouteData() {
                        return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                    }
                    detach() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        this.location.detach();
                        const a = this.activated;
                        return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(a.instance), a
                    }
                    attach(a, v) {
                        this.activated = a, this._activatedRoute = v, this.location.insert(a.hostView), this.attachEvents.emit(a.instance)
                    }
                    deactivate() {
                        if (this.activated) {
                            const a = this.component;
                            this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(a)
                        }
                    }
                    activateWith(a, v) {
                        if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                        this._activatedRoute = a;
                        const R = (v = v || this.resolver).resolveComponentFactory(a._futureSnapshot.routeConfig.component),
                            H = this.parentContexts.getOrCreateContext(this.name).children,
                            J = new Te(a, H, this.location.injector);
                        this.activated = this.location.createComponent(R, this.location.length, J), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                    }
                }
                return f.\u0275fac = function(a) {
                    return new(a || f)(g.Y36(I), g.Y36(g.s_b), g.Y36(g._Vd), g.$8M("name"), g.Y36(g.sBO))
                }, f.\u0275dir = g.lG2({
                    type: f,
                    selectors: [
                        ["router-outlet"]
                    ],
                    outputs: {
                        activateEvents: "activate",
                        deactivateEvents: "deactivate",
                        attachEvents: "attach",
                        detachEvents: "detach"
                    },
                    exportAs: ["outlet"]
                }), f
            })();
            class Te {
                constructor(c, a, v) {
                    this.route = c, this.childContexts = a, this.parent = v
                }
                get(c, a) {
                    return c === Br ? this.route : c === I ? this.childContexts : this.parent.get(c, a)
                }
            }
            let Me = (() => {
                class f {}
                return f.\u0275fac = function(a) {
                    return new(a || f)
                }, f.\u0275cmp = g.Xpm({
                    type: f,
                    selectors: [
                        ["ng-component"]
                    ],
                    decls: 1,
                    vars: 0,
                    template: function(a, v) {
                        1 & a && g._UZ(0, "router-outlet")
                    },
                    directives: [Z],
                    encapsulation: 2
                }), f
            })();

            function Nt(f, c = "") {
                for (let a = 0; a < f.length; a++) {
                    const v = f[a];
                    hr(v, Xr(c, v))
                }
            }

            function hr(f, c) {
                f.children && Nt(f.children, c)
            }

            function Xr(f, c) {
                return c ? f || c.path ? f && !c.path ? `${f}/` : !f && c.path ? c.path : `${f}/${c.path}` : "" : f
            }

            function $r(f) {
                const c = f.children && f.children.map($r),
                    a = c ? Object.assign(Object.assign({}, f), {
                        children: c
                    }) : Object.assign({}, f);
                return !a.component && (c || a.loadChildren) && a.outlet && a.outlet !== ue && (a.component = Me), a
            }

            function Bn(f) {
                return f.outlet || ue
            }

            function gs(f, c) {
                const a = f.filter(v => Bn(v) === c);
                return a.push(...f.filter(v => Bn(v) !== c)), a
            }
            const Rs = {
                matched: !1,
                consumedSegments: [],
                remainingSegments: [],
                parameters: {},
                positionalParamSegments: {}
            };

            function Ti(f, c, a) {
                var v;
                if ("" === c.path) return "full" === c.pathMatch && (f.hasChildren() || a.length > 0) ? Object.assign({}, Rs) : {
                    matched: !0,
                    consumedSegments: [],
                    remainingSegments: a,
                    parameters: {},
                    positionalParamSegments: {}
                };
                const A = (c.matcher || Wt)(a, f, c);
                if (!A) return Object.assign({}, Rs);
                const R = {};
                bt(A.posParams, (J, Ie) => {
                    R[Ie] = J.path
                });
                const H = A.consumed.length > 0 ? Object.assign(Object.assign({}, R), A.consumed[A.consumed.length - 1].parameters) : R;
                return {
                    matched: !0,
                    consumedSegments: A.consumed,
                    remainingSegments: a.slice(A.consumed.length),
                    parameters: H,
                    positionalParamSegments: null !== (v = A.posParams) && void 0 !== v ? v : {}
                }
            }

            function ae(f, c, a, v, b = "corrected") {
                if (a.length > 0 && function gn(f, c, a) {
                        return a.some(v => pi(f, c, v) && Bn(v) !== ue)
                    }(f, a, v)) {
                    const R = new Qe(c, function Es(f, c, a, v) {
                        const b = {};
                        b[ue] = v, v._sourceSegment = f, v._segmentIndexShift = c.length;
                        for (const A of a)
                            if ("" === A.path && Bn(A) !== ue) {
                                const R = new Qe([], {});
                                R._sourceSegment = f, R._segmentIndexShift = c.length, b[Bn(A)] = R
                            } return b
                    }(f, c, v, new Qe(a, f.children)));
                    return R._sourceSegment = f, R._segmentIndexShift = c.length, {
                        segmentGroup: R,
                        slicedSegments: []
                    }
                }
                if (0 === a.length && function Ls(f, c, a) {
                        return a.some(v => pi(f, c, v))
                    }(f, a, v)) {
                    const R = new Qe(f.segments, function pt(f, c, a, v, b, A) {
                        const R = {};
                        for (const H of v)
                            if (pi(f, a, H) && !b[Bn(H)]) {
                                const J = new Qe([], {});
                                J._sourceSegment = f, J._segmentIndexShift = "legacy" === A ? f.segments.length : c.length, R[Bn(H)] = J
                            } return Object.assign(Object.assign({}, b), R)
                    }(f, c, a, v, f.children, b));
                    return R._sourceSegment = f, R._segmentIndexShift = c.length, {
                        segmentGroup: R,
                        slicedSegments: a
                    }
                }
                const A = new Qe(f.segments, f.children);
                return A._sourceSegment = f, A._segmentIndexShift = c.length, {
                    segmentGroup: A,
                    slicedSegments: a
                }
            }

            function pi(f, c, a) {
                return (!(f.hasChildren() || c.length > 0) || "full" !== a.pathMatch) && "" === a.path
            }

            function Qn(f, c, a, v) {
                return !!(Bn(f) === v || v !== ue && pi(c, a, f)) && ("**" === f.path || Ti(c, f, a).matched)
            }

            function bs(f, c, a) {
                return 0 === c.length && !f.children[a]
            }
            class qi {
                constructor(c) {
                    this.segmentGroup = c || null
                }
            }
            class Fo {
                constructor(c) {
                    this.urlTree = c
                }
            }

            function Ki(f) {
                return Ze(new qi(f))
            }

            function ws(f) {
                return Ze(new Fo(f))
            }
            class Ys {
                constructor(c, a, v, b, A) {
                    this.configLoader = a, this.urlSerializer = v, this.urlTree = b, this.config = A, this.allowRedirects = !0, this.ngModule = c.get(g.h0i)
                }
                apply() {
                    const c = ae(this.urlTree.root, [], [], this.config).segmentGroup,
                        a = new Qe(c.segments, c.children);
                    return this.expandSegmentGroup(this.ngModule, this.config, a, ue).pipe((0, we.U)(A => this.createUrlTree(Sr(A), this.urlTree.queryParams, this.urlTree.fragment))).pipe(et(A => {
                        if (A instanceof Fo) return this.allowRedirects = !1, this.match(A.urlTree);
                        throw A instanceof qi ? this.noMatchError(A) : A
                    }))
                }
                match(c) {
                    return this.expandSegmentGroup(this.ngModule, this.config, c.root, ue).pipe((0, we.U)(b => this.createUrlTree(Sr(b), c.queryParams, c.fragment))).pipe(et(b => {
                        throw b instanceof qi ? this.noMatchError(b) : b
                    }))
                }
                noMatchError(c) {
                    return new Error(`Cannot match any routes. URL Segment: '${c.segmentGroup}'`)
                }
                createUrlTree(c, a, v) {
                    const b = c.segments.length > 0 ? new Qe([], {
                        [ue]: c
                    }) : c;
                    return new Ke(b, a, v)
                }
                expandSegmentGroup(c, a, v, b) {
                    return 0 === v.segments.length && v.hasChildren() ? this.expandChildren(c, a, v).pipe((0, we.U)(A => new Qe([], A))) : this.expandSegment(c, v, a, v.segments, b, !0)
                }
                expandChildren(c, a, v) {
                    const b = [];
                    for (const A of Object.keys(v.children)) "primary" === A ? b.unshift(A) : b.push(A);
                    return (0, ke.D)(b).pipe(kt(A => {
                        const R = v.children[A],
                            H = gs(a, A);
                        return this.expandSegmentGroup(c, H, R, A).pipe((0, we.U)(J => ({
                            segment: J,
                            outlet: A
                        })))
                    }), nr((A, R) => (A[R.outlet] = R.segment, A), {}), function yn(f, c) {
                        const a = arguments.length >= 2;
                        return v => v.pipe(f ? (0, rr.h)((b, A) => f(b, A, v)) : Le.y, zn(1), a ? Dr(c) : si(() => new be))
                    }())
                }
                expandSegment(c, a, v, b, A, R) {
                    return (0, ke.D)(v).pipe(kt(H => this.expandSegmentAgainstRoute(c, a, v, H, b, A, R).pipe(et(Ie => {
                        if (Ie instanceof qi) return re(null);
                        throw Ie
                    }))), _t(H => !!H), et((H, J) => {
                        if (H instanceof be || "EmptyError" === H.name) return bs(a, b, A) ? re(new Qe([], {})) : Ki(a);
                        throw H
                    }))
                }
                expandSegmentAgainstRoute(c, a, v, b, A, R, H) {
                    return Qn(b, a, A, R) ? void 0 === b.redirectTo ? this.matchSegmentAgainstRoute(c, a, b, A, R) : H && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(c, a, v, b, A, R) : Ki(a) : Ki(a)
                }
                expandSegmentAgainstRouteUsingRedirect(c, a, v, b, A, R) {
                    return "**" === b.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(c, v, b, R) : this.expandRegularSegmentAgainstRouteUsingRedirect(c, a, v, b, A, R)
                }
                expandWildCardWithParamsAgainstRouteUsingRedirect(c, a, v, b) {
                    const A = this.applyRedirectCommands([], v.redirectTo, {});
                    return v.redirectTo.startsWith("/") ? ws(A) : this.lineralizeSegments(v, A).pipe((0, Jt.zg)(R => {
                        const H = new Qe(R, {});
                        return this.expandSegment(c, H, a, R, b, !1)
                    }))
                }
                expandRegularSegmentAgainstRouteUsingRedirect(c, a, v, b, A, R) {
                    const {
                        matched: H,
                        consumedSegments: J,
                        remainingSegments: Ie,
                        positionalParamSegments: yt
                    } = Ti(a, b, A);
                    if (!H) return Ki(a);
                    const Ve = this.applyRedirectCommands(J, b.redirectTo, yt);
                    return b.redirectTo.startsWith("/") ? ws(Ve) : this.lineralizeSegments(b, Ve).pipe((0, Jt.zg)(jt => this.expandSegment(c, a, v, jt.concat(Ie), R, !1)))
                }
                matchSegmentAgainstRoute(c, a, v, b, A) {
                    if ("**" === v.path) return v.loadChildren ? (v._loadedConfig ? re(v._loadedConfig) : this.configLoader.load(c.injector, v)).pipe((0, we.U)(Ve => (v._loadedConfig = Ve, new Qe(b, {})))) : re(new Qe(b, {}));
                    const {
                        matched: R,
                        consumedSegments: H,
                        remainingSegments: J
                    } = Ti(a, v, b);
                    return R ? this.getChildConfig(c, v, b).pipe((0, Jt.zg)(yt => {
                        const Ve = yt.module,
                            jt = yt.routes,
                            {
                                segmentGroup: Ct,
                                slicedSegments: xi
                            } = ae(a, H, J, jt),
                            Qt = new Qe(Ct.segments, Ct.children);
                        if (0 === xi.length && Qt.hasChildren()) return this.expandChildren(Ve, jt, Qt).pipe((0, we.U)(fl => new Qe(H, fl)));
                        if (0 === jt.length && 0 === xi.length) return re(new Qe(H, {}));
                        const js = Bn(v) === A;
                        return this.expandSegment(Ve, Qt, jt, xi, js ? ue : A, !0).pipe((0, we.U)(no => new Qe(H.concat(no.segments), no.children)))
                    })) : Ki(a)
                }
                getChildConfig(c, a, v) {
                    return a.children ? re(new lt(a.children, c)) : a.loadChildren ? void 0 !== a._loadedConfig ? re(a._loadedConfig) : this.runCanLoadGuards(c.injector, a, v).pipe((0, Jt.zg)(b => b ? this.configLoader.load(c.injector, a).pipe((0, we.U)(A => (a._loadedConfig = A, A))) : function jn(f) {
                        return Ze(Rn(`Cannot load children because the guard of the route "path: '${f.path}'" returned false`))
                    }(a))) : re(new lt([], c))
                }
                runCanLoadGuards(c, a, v) {
                    const b = a.canLoad;
                    return b && 0 !== b.length ? re(b.map(R => {
                        const H = c.get(R);
                        let J;
                        if (function Ur(f) {
                                return f && ct(f.canLoad)
                            }(H)) J = H.canLoad(a, v);
                        else {
                            if (!ct(H)) throw new Error("Invalid CanLoad guard");
                            J = H(a, v)
                        }
                        return Bt(J)
                    })).pipe(y(), on(R => {
                        if (!rt(R)) return;
                        const H = Rn(`Redirecting to "${this.urlSerializer.serialize(R)}"`);
                        throw H.url = R, H
                    }), (0, we.U)(R => !0 === R)) : re(!0)
                }
                lineralizeSegments(c, a) {
                    let v = [],
                        b = a.root;
                    for (;;) {
                        if (v = v.concat(b.segments), 0 === b.numberOfChildren) return re(v);
                        if (b.numberOfChildren > 1 || !b.children[ue]) return Ze(new Error(`Only absolute redirects can have named outlets. redirectTo: '${c.redirectTo}'`));
                        b = b.children[ue]
                    }
                }
                applyRedirectCommands(c, a, v) {
                    return this.applyRedirectCreatreUrlTree(a, this.urlSerializer.parse(a), c, v)
                }
                applyRedirectCreatreUrlTree(c, a, v, b) {
                    const A = this.createSegmentGroup(c, a.root, v, b);
                    return new Ke(A, this.createQueryParams(a.queryParams, this.urlTree.queryParams), a.fragment)
                }
                createQueryParams(c, a) {
                    const v = {};
                    return bt(c, (b, A) => {
                        if ("string" == typeof b && b.startsWith(":")) {
                            const H = b.substring(1);
                            v[A] = a[H]
                        } else v[A] = b
                    }), v
                }
                createSegmentGroup(c, a, v, b) {
                    const A = this.createSegments(c, a.segments, v, b);
                    let R = {};
                    return bt(a.children, (H, J) => {
                        R[J] = this.createSegmentGroup(c, H, v, b)
                    }), new Qe(A, R)
                }
                createSegments(c, a, v, b) {
                    return a.map(A => A.path.startsWith(":") ? this.findPosParam(c, A, b) : this.findOrReturn(A, v))
                }
                findPosParam(c, a, v) {
                    const b = v[a.path.substring(1)];
                    if (!b) throw new Error(`Cannot redirect to '${c}'. Cannot find '${a.path}'.`);
                    return b
                }
                findOrReturn(c, a) {
                    let v = 0;
                    for (const b of a) {
                        if (b.path === c.path) return a.splice(v), b;
                        v++
                    }
                    return c
                }
            }

            function Sr(f) {
                const c = {};
                for (const v of Object.keys(f.children)) {
                    const A = Sr(f.children[v]);
                    (A.segments.length > 0 || A.hasChildren()) && (c[v] = A)
                }
                return function Qi(f) {
                    if (1 === f.numberOfChildren && f.children[ue]) {
                        const c = f.children[ue];
                        return new Qe(f.segments.concat(c.segments), c.children)
                    }
                    return f
                }(new Qe(f.segments, c))
            }
            class ks {
                constructor(c) {
                    this.path = c, this.route = this.path[this.path.length - 1]
                }
            }
            class Ss {
                constructor(c, a) {
                    this.component = c, this.route = a
                }
            }

            function qs(f, c, a) {
                const v = f._root;
                return Oi(v, c ? c._root : null, a, [v.value])
            }

            function Ii(f, c, a) {
                const v = function Ks(f) {
                    if (!f) return null;
                    for (let c = f.parent; c; c = c.parent) {
                        const a = c.routeConfig;
                        if (a && a._loadedConfig) return a._loadedConfig
                    }
                    return null
                }(c);
                return (v ? v.module.injector : a).get(f)
            }

            function Oi(f, c, a, v, b = {
                canDeactivateChecks: [],
                canActivateChecks: []
            }) {
                const A = Er(c);
                return f.children.forEach(R => {
                    (function Da(f, c, a, v, b = {
                        canDeactivateChecks: [],
                        canActivateChecks: []
                    }) {
                        const A = f.value,
                            R = c ? c.value : null,
                            H = a ? a.getContext(f.value.outlet) : null;
                        if (R && A.routeConfig === R.routeConfig) {
                            const J = function Mr(f, c, a) {
                                if ("function" == typeof a) return a(f, c);
                                switch (a) {
                                    case "pathParamsChange":
                                        return !Sn(f.url, c.url);
                                    case "pathParamsOrQueryParamsChange":
                                        return !Sn(f.url, c.url) || !Vt(f.queryParams, c.queryParams);
                                    case "always":
                                        return !0;
                                    case "paramsOrQueryParamsChange":
                                        return !fi(f, c) || !Vt(f.queryParams, c.queryParams);
                                    default:
                                        return !fi(f, c)
                                }
                            }(R, A, A.routeConfig.runGuardsAndResolvers);
                            J ? b.canActivateChecks.push(new ks(v)) : (A.data = R.data, A._resolvedData = R._resolvedData), Oi(f, c, A.component ? H ? H.children : null : a, v, b), J && H && H.outlet && H.outlet.isActivated && b.canDeactivateChecks.push(new Ss(H.outlet.component, R))
                        } else R && Pi(c, H, b), b.canActivateChecks.push(new ks(v)), Oi(f, null, A.component ? H ? H.children : null : a, v, b)
                    })(R, A[R.value.outlet], a, v.concat([R.value]), b), delete A[R.value.outlet]
                }), bt(A, (R, H) => Pi(R, a.getContext(H), b)), b
            }

            function Pi(f, c, a) {
                const v = Er(f),
                    b = f.value;
                bt(v, (A, R) => {
                    Pi(A, b.component ? c ? c.children.getContext(R) : null : c, a)
                }), a.canDeactivateChecks.push(new Ss(b.component && c && c.outlet && c.outlet.isActivated ? c.outlet.component : null, b))
            }
            class gi {}

            function qt(f) {
                return new ne.y(c => c.error(f))
            }
            class Vo {
                constructor(c, a, v, b, A, R) {
                    this.rootComponentType = c, this.config = a, this.urlTree = v, this.url = b, this.paramsInheritanceStrategy = A, this.relativeLinkResolution = R
                }
                recognize() {
                    const c = ae(this.urlTree.root, [], [], this.config.filter(R => void 0 === R.redirectTo), this.relativeLinkResolution).segmentGroup,
                        a = this.processSegmentGroup(this.config, c, ue);
                    if (null === a) return null;
                    const v = new Xn([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, ue, this.rootComponentType, null, this.urlTree.root, -1, {}),
                        b = new kn(v, a),
                        A = new br(this.url, b);
                    return this.inheritParamsAndData(A._root), A
                }
                inheritParamsAndData(c) {
                    const a = c.value,
                        v = di(a, this.paramsInheritanceStrategy);
                    a.params = Object.freeze(v.params), a.data = Object.freeze(v.data), c.children.forEach(b => this.inheritParamsAndData(b))
                }
                processSegmentGroup(c, a, v) {
                    return 0 === a.segments.length && a.hasChildren() ? this.processChildren(c, a) : this.processSegment(c, a, a.segments, v)
                }
                processChildren(c, a) {
                    const v = [];
                    for (const A of Object.keys(a.children)) {
                        const R = a.children[A],
                            H = gs(c, A),
                            J = this.processSegmentGroup(H, R, A);
                        if (null === J) return null;
                        v.push(...J)
                    }
                    const b = D(v);
                    return function Bo(f) {
                        f.sort((c, a) => c.value.outlet === ue ? -1 : a.value.outlet === ue ? 1 : c.value.outlet.localeCompare(a.value.outlet))
                    }(b), b
                }
                processSegment(c, a, v, b) {
                    for (const A of c) {
                        const R = this.processSegmentAgainstRoute(A, a, v, b);
                        if (null !== R) return R
                    }
                    return bs(a, v, b) ? [] : null
                }
                processSegmentAgainstRoute(c, a, v, b) {
                    if (c.redirectTo || !Qn(c, a, v, b)) return null;
                    let A, R = [],
                        H = [];
                    if ("**" === c.path) {
                        const Ct = v.length > 0 ? Qr(v).parameters : {};
                        A = new Xn(v, Ct, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, S(c), Bn(c), c.component, c, l(a), p(a) + v.length, F(c))
                    } else {
                        const Ct = Ti(a, c, v);
                        if (!Ct.matched) return null;
                        R = Ct.consumedSegments, H = Ct.remainingSegments, A = new Xn(R, Ct.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, S(c), Bn(c), c.component, c, l(a), p(a) + R.length, F(c))
                    }
                    const J = function jo(f) {
                            return f.children ? f.children : f.loadChildren ? f._loadedConfig.routes : []
                        }(c),
                        {
                            segmentGroup: Ie,
                            slicedSegments: yt
                        } = ae(a, R, H, J.filter(Ct => void 0 === Ct.redirectTo), this.relativeLinkResolution);
                    if (0 === yt.length && Ie.hasChildren()) {
                        const Ct = this.processChildren(J, Ie);
                        return null === Ct ? null : [new kn(A, Ct)]
                    }
                    if (0 === J.length && 0 === yt.length) return [new kn(A, [])];
                    const Ve = Bn(c) === b,
                        jt = this.processSegment(J, Ie, yt, Ve ? ue : b);
                    return null === jt ? null : [new kn(A, jt)]
                }
            }

            function Ho(f) {
                const c = f.value.routeConfig;
                return c && "" === c.path && void 0 === c.redirectTo
            }

            function D(f) {
                const c = [],
                    a = new Set;
                for (const v of f) {
                    if (!Ho(v)) {
                        c.push(v);
                        continue
                    }
                    const b = c.find(A => v.value.routeConfig === A.value.routeConfig);
                    void 0 !== b ? (b.children.push(...v.children), a.add(b)) : c.push(v)
                }
                for (const v of a) {
                    const b = D(v.children);
                    c.push(new kn(v.value, b))
                }
                return c.filter(v => !a.has(v))
            }

            function l(f) {
                let c = f;
                for (; c._sourceSegment;) c = c._sourceSegment;
                return c
            }

            function p(f) {
                let c = f,
                    a = c._segmentIndexShift ? c._segmentIndexShift : 0;
                for (; c._sourceSegment;) c = c._sourceSegment, a += c._segmentIndexShift ? c._segmentIndexShift : 0;
                return a - 1
            }

            function S(f) {
                return f.data || {}
            }

            function F(f) {
                return f.resolve || {}
            }

            function Ee(f) {
                return [...Object.keys(f), ...Object.getOwnPropertySymbols(f)]
            }

            function Ge(f) {
                return Ae(c => {
                    const a = f(c);
                    return a ? (0, ke.D)(a).pipe((0, we.U)(() => c)) : re(c)
                })
            }
            class it extends class je {
                shouldDetach(c) {
                    return !1
                }
                store(c, a) {}
                shouldAttach(c) {
                    return !1
                }
                retrieve(c) {
                    return null
                }
                shouldReuseRoute(c, a) {
                    return c.routeConfig === a.routeConfig
                }
            } {}
            const It = new g.OlP("ROUTES");
            class Kt {
                constructor(c, a, v, b) {
                    this.injector = c, this.compiler = a, this.onLoadStartListener = v, this.onLoadEndListener = b
                }
                load(c, a) {
                    if (a._loader$) return a._loader$;
                    this.onLoadStartListener && this.onLoadStartListener(a);
                    const b = this.loadModuleFactory(a.loadChildren).pipe((0, we.U)(A => {
                        this.onLoadEndListener && this.onLoadEndListener(a);
                        const R = A.create(c);
                        return new lt(Wn(R.injector.get(It, void 0, g.XFs.Self | g.XFs.Optional)).map($r), R)
                    }), et(A => {
                        throw a._loader$ = void 0, A
                    }));
                    return a._loader$ = new Pt.c(b, () => new ie.xQ).pipe((0, Ei.x)()), a._loader$
                }
                loadModuleFactory(c) {
                    return Bt(c()).pipe((0, Jt.zg)(a => a instanceof g.YKP ? re(a) : (0, ke.D)(this.compiler.compileModuleAsync(a))))
                }
            }
            class An {
                shouldProcessUrl(c) {
                    return !0
                }
                extract(c) {
                    return c
                }
                merge(c, a) {
                    return c
                }
            }

            function ln(f) {
                throw f
            }

            function Fi(f, c, a) {
                return c.parse("/")
            }

            function pr(f, c) {
                return re(null)
            }
            const un = {
                    paths: "exact",
                    fragment: "ignored",
                    matrixParams: "ignored",
                    queryParams: "exact"
                },
                ei = {
                    paths: "subset",
                    fragment: "ignored",
                    matrixParams: "ignored",
                    queryParams: "subset"
                };
            let Lt = (() => {
                class f {
                    constructor(a, v, b, A, R, H, J) {
                        this.rootComponentType = a, this.urlSerializer = v, this.rootContexts = b, this.location = A, this.config = J, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.disposed = !1, this.navigationId = 0, this.currentPageId = 0, this.isNgZoneEnabled = !1, this.events = new ie.xQ, this.errorHandler = ln, this.malformedUriErrorHandler = Fi, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                            beforePreactivation: pr,
                            afterPreactivation: pr
                        }, this.urlHandlingStrategy = new An, this.routeReuseStrategy = new it, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "corrected", this.canceledNavigationResolution = "replace", this.ngModule = R.get(g.h0i), this.console = R.get(g.c2e);
                        const Ve = R.get(g.R0b);
                        this.isNgZoneEnabled = Ve instanceof g.R0b && g.R0b.isInAngularZone(), this.resetConfig(J), this.currentUrlTree = function rn() {
                            return new Ke(new Qe([], {}), {}, null)
                        }(), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new Kt(R, H, jt => this.triggerEvent(new hn(jt)), jt => this.triggerEvent(new or(jt))), this.routerState = wi(this.currentUrlTree, this.rootComponentType), this.transitions = new _e({
                            id: 0,
                            targetPageId: 0,
                            currentUrlTree: this.currentUrlTree,
                            currentRawUrl: this.currentUrlTree,
                            extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                            urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                            rawUrl: this.currentUrlTree,
                            extras: {},
                            resolve: null,
                            reject: null,
                            promise: Promise.resolve(!0),
                            source: "imperative",
                            restoredState: null,
                            currentSnapshot: this.routerState.snapshot,
                            targetSnapshot: null,
                            currentRouterState: this.routerState,
                            targetRouterState: null,
                            guards: {
                                canActivateChecks: [],
                                canDeactivateChecks: []
                            },
                            guardsResult: null
                        }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
                    }
                    get browserPageId() {
                        var a;
                        return null === (a = this.location.getState()) || void 0 === a ? void 0 : a.\u0275routerPageId
                    }
                    setupNavigations(a) {
                        const v = this.events;
                        return a.pipe((0, rr.h)(b => 0 !== b.id), (0, we.U)(b => Object.assign(Object.assign({}, b), {
                            extractedUrl: this.urlHandlingStrategy.extract(b.rawUrl)
                        })), Ae(b => {
                            let A = !1,
                                R = !1;
                            return re(b).pipe(on(H => {
                                this.currentNavigation = {
                                    id: H.id,
                                    initialUrl: H.currentRawUrl,
                                    extractedUrl: H.extractedUrl,
                                    trigger: H.source,
                                    extras: H.extras,
                                    previousNavigation: this.lastSuccessfulNavigation ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {
                                        previousNavigation: null
                                    }) : null
                                }
                            }), Ae(H => {
                                const J = this.browserUrlTree.toString(),
                                    Ie = !this.navigated || H.extractedUrl.toString() !== J || J !== this.currentUrlTree.toString();
                                if (("reload" === this.onSameUrlNavigation || Ie) && this.urlHandlingStrategy.shouldProcessUrl(H.rawUrl)) return Zi(H.source) && (this.browserUrlTree = H.extractedUrl), re(H).pipe(Ae(Ve => {
                                    const jt = this.transitions.getValue();
                                    return v.next(new at(Ve.id, this.serializeUrl(Ve.extractedUrl), Ve.source, Ve.restoredState)), jt !== this.transitions.getValue() ? Ne : Promise.resolve(Ve)
                                }), function No(f, c, a, v) {
                                    return Ae(b => function Gr(f, c, a, v, b) {
                                        return new Ys(f, c, a, v, b).apply()
                                    }(f, c, a, b.extractedUrl, v).pipe((0, we.U)(A => Object.assign(Object.assign({}, b), {
                                        urlAfterRedirects: A
                                    }))))
                                }(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config), on(Ve => {
                                    this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {
                                        finalUrl: Ve.urlAfterRedirects
                                    })
                                }), function k(f, c, a, v, b) {
                                    return (0, Jt.zg)(A => function Js(f, c, a, v, b = "emptyOnly", A = "legacy") {
                                        try {
                                            const R = new Vo(f, c, a, v, b, A).recognize();
                                            return null === R ? qt(new gi) : re(R)
                                        } catch (R) {
                                            return qt(R)
                                        }
                                    }(f, c, A.urlAfterRedirects, a(A.urlAfterRedirects), v, b).pipe((0, we.U)(R => Object.assign(Object.assign({}, A), {
                                        targetSnapshot: R
                                    }))))
                                }(this.rootComponentType, this.config, Ve => this.serializeUrl(Ve), this.paramsInheritanceStrategy, this.relativeLinkResolution), on(Ve => {
                                    if ("eager" === this.urlUpdateStrategy) {
                                        if (!Ve.extras.skipLocationChange) {
                                            const Ct = this.urlHandlingStrategy.merge(Ve.urlAfterRedirects, Ve.rawUrl);
                                            this.setBrowserUrl(Ct, Ve)
                                        }
                                        this.browserUrlTree = Ve.urlAfterRedirects
                                    }
                                    const jt = new ht(Ve.id, this.serializeUrl(Ve.extractedUrl), this.serializeUrl(Ve.urlAfterRedirects), Ve.targetSnapshot);
                                    v.next(jt)
                                }));
                                if (Ie && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                                    const {
                                        id: jt,
                                        extractedUrl: Ct,
                                        source: xi,
                                        restoredState: Qt,
                                        extras: js
                                    } = H, Ps = new at(jt, this.serializeUrl(Ct), xi, Qt);
                                    v.next(Ps);
                                    const no = wi(Ct, this.rootComponentType).snapshot;
                                    return re(Object.assign(Object.assign({}, H), {
                                        targetSnapshot: no,
                                        urlAfterRedirects: Ct,
                                        extras: Object.assign(Object.assign({}, js), {
                                            skipLocationChange: !1,
                                            replaceUrl: !1
                                        })
                                    }))
                                }
                                return this.rawUrlTree = H.rawUrl, H.resolve(null), Ne
                            }), Ge(H => {
                                const {
                                    targetSnapshot: J,
                                    id: Ie,
                                    extractedUrl: yt,
                                    rawUrl: Ve,
                                    extras: {
                                        skipLocationChange: jt,
                                        replaceUrl: Ct
                                    }
                                } = H;
                                return this.hooks.beforePreactivation(J, {
                                    navigationId: Ie,
                                    appliedUrlTree: yt,
                                    rawUrlTree: Ve,
                                    skipLocationChange: !!jt,
                                    replaceUrl: !!Ct
                                })
                            }), on(H => {
                                const J = new xn(H.id, this.serializeUrl(H.extractedUrl), this.serializeUrl(H.urlAfterRedirects), H.targetSnapshot);
                                this.triggerEvent(J)
                            }), (0, we.U)(H => Object.assign(Object.assign({}, H), {
                                guards: qs(H.targetSnapshot, H.currentSnapshot, this.rootContexts)
                            })), function xo(f, c) {
                                return (0, Jt.zg)(a => {
                                    const {
                                        targetSnapshot: v,
                                        currentSnapshot: b,
                                        guards: {
                                            canActivateChecks: A,
                                            canDeactivateChecks: R
                                        }
                                    } = a;
                                    return 0 === R.length && 0 === A.length ? re(Object.assign(Object.assign({}, a), {
                                        guardsResult: !0
                                    })) : function Ro(f, c, a, v) {
                                        return (0, ke.D)(f).pipe((0, Jt.zg)(b => function Mn(f, c, a, v, b) {
                                            const A = c && c.routeConfig ? c.routeConfig.canDeactivate : null;
                                            return A && 0 !== A.length ? re(A.map(H => {
                                                const J = Ii(H, c, b);
                                                let Ie;
                                                if (function Yt(f) {
                                                        return f && ct(f.canDeactivate)
                                                    }(J)) Ie = Bt(J.canDeactivate(f, c, a, v));
                                                else {
                                                    if (!ct(J)) throw new Error("Invalid CanDeactivate guard");
                                                    Ie = Bt(J(f, c, a, v))
                                                }
                                                return Ie.pipe(_t())
                                            })).pipe(y()) : re(!0)
                                        }(b.component, b.route, a, c, v)), _t(b => !0 !== b, !0))
                                    }(R, v, b, f).pipe((0, Jt.zg)(H => H && function Dt(f) {
                                        return "boolean" == typeof f
                                    }(H) ? function Qs(f, c, a, v) {
                                        return (0, ke.D)(c).pipe(kt(b => qe(function As(f, c) {
                                            return null !== f && c && c(new W(f)), re(!0)
                                        }(b.route.parent, v), function Zs(f, c) {
                                            return null !== f && c && c(new x(f)), re(!0)
                                        }(b.route, v), function ko(f, c, a) {
                                            const v = c[c.length - 1],
                                                A = c.slice(0, c.length - 1).reverse().map(R => function Ms(f) {
                                                    const c = f.routeConfig ? f.routeConfig.canActivateChild : null;
                                                    return c && 0 !== c.length ? {
                                                        node: f,
                                                        guards: c
                                                    } : null
                                                }(R)).filter(R => null !== R).map(R => wt(() => re(R.guards.map(J => {
                                                    const Ie = Ii(J, R.node, a);
                                                    let yt;
                                                    if (function fr(f) {
                                                            return f && ct(f.canActivateChild)
                                                        }(Ie)) yt = Bt(Ie.canActivateChild(v, f));
                                                    else {
                                                        if (!ct(Ie)) throw new Error("Invalid CanActivateChild guard");
                                                        yt = Bt(Ie(v, f))
                                                    }
                                                    return yt.pipe(_t())
                                                })).pipe(y())));
                                            return re(A).pipe(y())
                                        }(f, b.path, a), function Lo(f, c, a) {
                                            const v = c.routeConfig ? c.routeConfig.canActivate : null;
                                            if (!v || 0 === v.length) return re(!0);
                                            const b = v.map(A => wt(() => {
                                                const R = Ii(A, c, a);
                                                let H;
                                                if (function dr(f) {
                                                        return f && ct(f.canActivate)
                                                    }(R)) H = Bt(R.canActivate(c, f));
                                                else {
                                                    if (!ct(R)) throw new Error("Invalid CanActivate guard");
                                                    H = Bt(R(c, f))
                                                }
                                                return H.pipe(_t())
                                            }));
                                            return re(b).pipe(y())
                                        }(f, b.route, a))), _t(b => !0 !== b, !0))
                                    }(v, A, f, c) : re(H)), (0, we.U)(H => Object.assign(Object.assign({}, a), {
                                        guardsResult: H
                                    })))
                                })
                            }(this.ngModule.injector, H => this.triggerEvent(H)), on(H => {
                                if (rt(H.guardsResult)) {
                                    const Ie = Rn(`Redirecting to "${this.serializeUrl(H.guardsResult)}"`);
                                    throw Ie.url = H.guardsResult, Ie
                                }
                                const J = new sr(H.id, this.serializeUrl(H.extractedUrl), this.serializeUrl(H.urlAfterRedirects), H.targetSnapshot, !!H.guardsResult);
                                this.triggerEvent(J)
                            }), (0, rr.h)(H => !!H.guardsResult || (this.restoreHistory(H), this.cancelNavigationTransition(H, ""), !1)), Ge(H => {
                                if (H.guards.canActivateChecks.length) return re(H).pipe(on(J => {
                                    const Ie = new qr(J.id, this.serializeUrl(J.extractedUrl), this.serializeUrl(J.urlAfterRedirects), J.targetSnapshot);
                                    this.triggerEvent(Ie)
                                }), Ae(J => {
                                    let Ie = !1;
                                    return re(J).pipe(function V(f, c) {
                                        return (0, Jt.zg)(a => {
                                            const {
                                                targetSnapshot: v,
                                                guards: {
                                                    canActivateChecks: b
                                                }
                                            } = a;
                                            if (!b.length) return re(a);
                                            let A = 0;
                                            return (0, ke.D)(b).pipe(kt(R => function G(f, c, a, v) {
                                                return function ee(f, c, a, v) {
                                                    const b = Ee(f);
                                                    if (0 === b.length) return re({});
                                                    const A = {};
                                                    return (0, ke.D)(b).pipe((0, Jt.zg)(R => function Oe(f, c, a, v) {
                                                        const b = Ii(f, c, v);
                                                        return Bt(b.resolve ? b.resolve(c, a) : b(c, a))
                                                    }(f[R], c, a, v).pipe(on(H => {
                                                        A[R] = H
                                                    }))), zn(1), (0, Jt.zg)(() => Ee(A).length === b.length ? re(A) : Ne))
                                                }(f._resolve, f, c, v).pipe((0, we.U)(A => (f._resolvedData = A, f.data = Object.assign(Object.assign({}, f.data), di(f, a).resolve), null)))
                                            }(R.route, v, f, c)), on(() => A++), zn(1), (0, Jt.zg)(R => A === b.length ? re(a) : Ne))
                                        })
                                    }(this.paramsInheritanceStrategy, this.ngModule.injector), on({
                                        next: () => Ie = !0,
                                        complete: () => {
                                            Ie || (this.restoreHistory(J), this.cancelNavigationTransition(J, "At least one route resolver didn't emit any value."))
                                        }
                                    }))
                                }), on(J => {
                                    const Ie = new Kr(J.id, this.serializeUrl(J.extractedUrl), this.serializeUrl(J.urlAfterRedirects), J.targetSnapshot);
                                    this.triggerEvent(Ie)
                                }))
                            }), Ge(H => {
                                const {
                                    targetSnapshot: J,
                                    id: Ie,
                                    extractedUrl: yt,
                                    rawUrl: Ve,
                                    extras: {
                                        skipLocationChange: jt,
                                        replaceUrl: Ct
                                    }
                                } = H;
                                return this.hooks.afterPreactivation(J, {
                                    navigationId: Ie,
                                    appliedUrlTree: yt,
                                    rawUrlTree: Ve,
                                    skipLocationChange: !!jt,
                                    replaceUrl: !!Ct
                                })
                            }), (0, we.U)(H => {
                                const J = function jr(f, c, a) {
                                    const v = Hr(f, c._root, a ? a._root : void 0);
                                    return new ds(v, c)
                                }(this.routeReuseStrategy, H.targetSnapshot, H.currentRouterState);
                                return Object.assign(Object.assign({}, H), {
                                    targetRouterState: J
                                })
                            }), on(H => {
                                this.currentUrlTree = H.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(H.urlAfterRedirects, H.rawUrl), this.routerState = H.targetRouterState, "deferred" === this.urlUpdateStrategy && (H.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, H), this.browserUrlTree = H.urlAfterRedirects)
                            }), ((f, c, a) => (0, we.U)(v => (new Tt(c, v.targetRouterState, v.currentRouterState, a).activate(f), v)))(this.rootContexts, this.routeReuseStrategy, H => this.triggerEvent(H)), on({
                                next() {
                                    A = !0
                                },
                                complete() {
                                    A = !0
                                }
                            }), function bn(f) {
                                return c => c.lift(new wn(f))
                            }(() => {
                                var H;
                                A || R || this.cancelNavigationTransition(b, `Navigation ID ${b.id} is not equal to the current navigation id ${this.navigationId}`), (null === (H = this.currentNavigation) || void 0 === H ? void 0 : H.id) === b.id && (this.currentNavigation = null)
                            }), et(H => {
                                if (R = !0, function xr(f) {
                                        return f && f[Ft]
                                    }(H)) {
                                    const J = rt(H.url);
                                    J || (this.navigated = !0, this.restoreHistory(b, !0));
                                    const Ie = new Zn(b.id, this.serializeUrl(b.extractedUrl), H.message);
                                    v.next(Ie), J ? setTimeout(() => {
                                        const yt = this.urlHandlingStrategy.merge(H.url, this.rawUrlTree),
                                            Ve = {
                                                skipLocationChange: b.extras.skipLocationChange,
                                                replaceUrl: "eager" === this.urlUpdateStrategy || Zi(b.source)
                                            };
                                        this.scheduleNavigation(yt, "imperative", null, Ve, {
                                            resolve: b.resolve,
                                            reject: b.reject,
                                            promise: b.promise
                                        })
                                    }, 0) : b.resolve(!1)
                                } else {
                                    this.restoreHistory(b, !0);
                                    const J = new ir(b.id, this.serializeUrl(b.extractedUrl), H);
                                    v.next(J);
                                    try {
                                        b.resolve(this.errorHandler(H))
                                    } catch (Ie) {
                                        b.reject(Ie)
                                    }
                                }
                                return Ne
                            }))
                        }))
                    }
                    resetRootComponentType(a) {
                        this.rootComponentType = a, this.routerState.root.component = this.rootComponentType
                    }
                    setTransition(a) {
                        this.transitions.next(Object.assign(Object.assign({}, this.transitions.value), a))
                    }
                    initialNavigation() {
                        this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                            replaceUrl: !0
                        })
                    }
                    setUpLocationChangeListener() {
                        this.locationSubscription || (this.locationSubscription = this.location.subscribe(a => {
                            const v = "popstate" === a.type ? "popstate" : "hashchange";
                            "popstate" === v && setTimeout(() => {
                                var b;
                                const A = {
                                        replaceUrl: !0
                                    },
                                    R = (null === (b = a.state) || void 0 === b ? void 0 : b.navigationId) ? a.state : null;
                                if (R) {
                                    const J = Object.assign({}, R);
                                    delete J.navigationId, delete J.\u0275routerPageId, 0 !== Object.keys(J).length && (A.state = J)
                                }
                                const H = this.parseUrl(a.url);
                                this.scheduleNavigation(H, v, R, A)
                            }, 0)
                        }))
                    }
                    get url() {
                        return this.serializeUrl(this.currentUrlTree)
                    }
                    getCurrentNavigation() {
                        return this.currentNavigation
                    }
                    triggerEvent(a) {
                        this.events.next(a)
                    }
                    resetConfig(a) {
                        Nt(a), this.config = a.map($r), this.navigated = !1, this.lastSuccessfulId = -1
                    }
                    ngOnDestroy() {
                        this.dispose()
                    }
                    dispose() {
                        this.transitions.complete(), this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = void 0), this.disposed = !0
                    }
                    createUrlTree(a, v = {}) {
                        const {
                            relativeTo: b,
                            queryParams: A,
                            fragment: R,
                            queryParamsHandling: H,
                            preserveFragment: J
                        } = v, Ie = b || this.routerState.root, yt = J ? this.currentUrlTree.fragment : R;
                        let Ve = null;
                        switch (H) {
                            case "merge":
                                Ve = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), A);
                                break;
                            case "preserve":
                                Ve = this.currentUrlTree.queryParams;
                                break;
                            default:
                                Ve = A || null
                        }
                        return null !== Ve && (Ve = this.removeEmptyProps(Ve)),
                            function hs(f, c, a, v, b) {
                                if (0 === a.length) return Vn(c.root, c.root, c.root, v, b);
                                const A = function Wi(f) {
                                    if ("string" == typeof f[0] && 1 === f.length && "/" === f[0]) return new Jr(!0, 0, f);
                                    let c = 0,
                                        a = !1;
                                    const v = f.reduce((b, A, R) => {
                                        if ("object" == typeof A && null != A) {
                                            if (A.outlets) {
                                                const H = {};
                                                return bt(A.outlets, (J, Ie) => {
                                                    H[Ie] = "string" == typeof J ? J.split("/") : J
                                                }), [...b, {
                                                    outlets: H
                                                }]
                                            }
                                            if (A.segmentPath) return [...b, A.segmentPath]
                                        }
                                        return "string" != typeof A ? [...b, A] : 0 === R ? (A.split("/").forEach((H, J) => {
                                            0 == J && "." === H || (0 == J && "" === H ? a = !0 : ".." === H ? c++ : "" != H && b.push(H))
                                        }), b) : [...b, A]
                                    }, []);
                                    return new Jr(a, c, v)
                                }(a);
                                if (A.toRoot()) return Vn(c.root, c.root, new Qe([], {}), v, b);
                                const R = function Yi(f, c, a) {
                                        if (f.isAbsolute) return new pn(c.root, !0, 0);
                                        if (-1 === a.snapshot._lastPathIndex) {
                                            const A = a.snapshot._urlSegment;
                                            return new pn(A, A === c.root, 0)
                                        }
                                        const v = Mi(f.commands[0]) ? 0 : 1;
                                        return function ps(f, c, a) {
                                            let v = f,
                                                b = c,
                                                A = a;
                                            for (; A > b;) {
                                                if (A -= b, v = v.parent, !v) throw new Error("Invalid number of '../'");
                                                b = v.segments.length
                                            }
                                            return new pn(v, !1, b - A)
                                        }(a.snapshot._urlSegment, a.snapshot._lastPathIndex + v, f.numberOfDoubleDots)
                                    }(A, c, f),
                                    H = R.processChildren ? C(R.segmentGroup, R.index, A.commands) : T(R.segmentGroup, R.index, A.commands);
                                return Vn(c.root, R.segmentGroup, H, v, b)
                            }(Ie, this.currentUrlTree, a, Ve, null != yt ? yt : null)
                    }
                    navigateByUrl(a, v = {
                        skipLocationChange: !1
                    }) {
                        const b = rt(a) ? a : this.parseUrl(a),
                            A = this.urlHandlingStrategy.merge(b, this.rawUrlTree);
                        return this.scheduleNavigation(A, "imperative", null, v)
                    }
                    navigate(a, v = {
                        skipLocationChange: !1
                    }) {
                        return function Ar(f) {
                            for (let c = 0; c < f.length; c++) {
                                const a = f[c];
                                if (null == a) throw new Error(`The requested path contains ${a} segment at index ${c}`)
                            }
                        }(a), this.navigateByUrl(this.createUrlTree(a, v), v)
                    }
                    serializeUrl(a) {
                        return this.urlSerializer.serialize(a)
                    }
                    parseUrl(a) {
                        let v;
                        try {
                            v = this.urlSerializer.parse(a)
                        } catch (b) {
                            v = this.malformedUriErrorHandler(b, this.urlSerializer, a)
                        }
                        return v
                    }
                    isActive(a, v) {
                        let b;
                        if (b = !0 === v ? Object.assign({}, un) : !1 === v ? Object.assign({}, ei) : v, rt(a)) return he(this.currentUrlTree, a, b);
                        const A = this.parseUrl(a);
                        return he(this.currentUrlTree, A, b)
                    }
                    removeEmptyProps(a) {
                        return Object.keys(a).reduce((v, b) => {
                            const A = a[b];
                            return null != A && (v[b] = A), v
                        }, {})
                    }
                    processNavigations() {
                        this.navigations.subscribe(a => {
                            this.navigated = !0, this.lastSuccessfulId = a.id, this.currentPageId = a.targetPageId, this.events.next(new fn(a.id, this.serializeUrl(a.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, a.resolve(!0)
                        }, a => {
                            this.console.warn(`Unhandled Navigation Error: ${a}`)
                        })
                    }
                    scheduleNavigation(a, v, b, A, R) {
                        var H, J;
                        if (this.disposed) return Promise.resolve(!1);
                        let Ie, yt, Ve;
                        R ? (Ie = R.resolve, yt = R.reject, Ve = R.promise) : Ve = new Promise((xi, Qt) => {
                            Ie = xi, yt = Qt
                        });
                        const jt = ++this.navigationId;
                        let Ct;
                        return "computed" === this.canceledNavigationResolution ? (0 === this.currentPageId && (b = this.location.getState()), Ct = b && b.\u0275routerPageId ? b.\u0275routerPageId : A.replaceUrl || A.skipLocationChange ? null !== (H = this.browserPageId) && void 0 !== H ? H : 0 : (null !== (J = this.browserPageId) && void 0 !== J ? J : 0) + 1) : Ct = 0, this.setTransition({
                            id: jt,
                            targetPageId: Ct,
                            source: v,
                            restoredState: b,
                            currentUrlTree: this.currentUrlTree,
                            currentRawUrl: this.rawUrlTree,
                            rawUrl: a,
                            extras: A,
                            resolve: Ie,
                            reject: yt,
                            promise: Ve,
                            currentSnapshot: this.routerState.snapshot,
                            currentRouterState: this.routerState
                        }), Ve.catch(xi => Promise.reject(xi))
                    }
                    setBrowserUrl(a, v) {
                        const b = this.urlSerializer.serialize(a),
                            A = Object.assign(Object.assign({}, v.extras.state), this.generateNgRouterState(v.id, v.targetPageId));
                        this.location.isCurrentPathEqualTo(b) || v.extras.replaceUrl ? this.location.replaceState(b, "", A) : this.location.go(b, "", A)
                    }
                    restoreHistory(a, v = !1) {
                        var b, A;
                        if ("computed" === this.canceledNavigationResolution) {
                            const R = this.currentPageId - a.targetPageId;
                            "popstate" !== a.source && "eager" !== this.urlUpdateStrategy && this.currentUrlTree !== (null === (b = this.currentNavigation) || void 0 === b ? void 0 : b.finalUrl) || 0 === R ? this.currentUrlTree === (null === (A = this.currentNavigation) || void 0 === A ? void 0 : A.finalUrl) && 0 === R && (this.resetState(a), this.browserUrlTree = a.currentUrlTree, this.resetUrlToCurrentUrlTree()) : this.location.historyGo(R)
                        } else "replace" === this.canceledNavigationResolution && (v && this.resetState(a), this.resetUrlToCurrentUrlTree())
                    }
                    resetState(a) {
                        this.routerState = a.currentRouterState, this.currentUrlTree = a.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, a.rawUrl)
                    }
                    resetUrlToCurrentUrlTree() {
                        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
                    }
                    cancelNavigationTransition(a, v) {
                        const b = new Zn(a.id, this.serializeUrl(a.extractedUrl), v);
                        this.triggerEvent(b), a.resolve(!1)
                    }
                    generateNgRouterState(a, v) {
                        return "computed" === this.canceledNavigationResolution ? {
                            navigationId: a,
                            \u0275routerPageId: v
                        } : {
                            navigationId: a
                        }
                    }
                }
                return f.\u0275fac = function(a) {
                    g.$Z()
                }, f.\u0275prov = g.Yz7({
                    token: f,
                    factory: f.\u0275fac
                }), f
            })();

            function Zi(f) {
                return "imperative" !== f
            }
            let Tr = (() => {
                class f {
                    constructor(a, v, b) {
                        this.router = a, this.route = v, this.locationStrategy = b, this.commands = null, this.href = null, this.onChanges = new ie.xQ, this.subscription = a.events.subscribe(A => {
                            A instanceof fn && this.updateTargetUrlAndHref()
                        })
                    }
                    set routerLink(a) {
                        this.commands = null != a ? Array.isArray(a) ? a : [a] : null
                    }
                    ngOnChanges(a) {
                        this.updateTargetUrlAndHref(), this.onChanges.next(this)
                    }
                    ngOnDestroy() {
                        this.subscription.unsubscribe()
                    }
                    onClick(a, v, b, A, R) {
                        if (0 !== a || v || b || A || R || "string" == typeof this.target && "_self" != this.target || null === this.urlTree) return !0;
                        const H = {
                            skipLocationChange: mi(this.skipLocationChange),
                            replaceUrl: mi(this.replaceUrl),
                            state: this.state
                        };
                        return this.router.navigateByUrl(this.urlTree, H), !1
                    }
                    updateTargetUrlAndHref() {
                        this.href = null !== this.urlTree ? this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) : null
                    }
                    get urlTree() {
                        return null === this.commands ? null : this.router.createUrlTree(this.commands, {
                            relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                            queryParams: this.queryParams,
                            fragment: this.fragment,
                            queryParamsHandling: this.queryParamsHandling,
                            preserveFragment: mi(this.preserveFragment)
                        })
                    }
                }
                return f.\u0275fac = function(a) {
                    return new(a || f)(g.Y36(Lt), g.Y36(Br), g.Y36(tt.S$))
                }, f.\u0275dir = g.lG2({
                    type: f,
                    selectors: [
                        ["a", "routerLink", ""],
                        ["area", "routerLink", ""]
                    ],
                    hostVars: 2,
                    hostBindings: function(a, v) {
                        1 & a && g.NdJ("click", function(A) {
                            return v.onClick(A.button, A.ctrlKey, A.shiftKey, A.altKey, A.metaKey)
                        }), 2 & a && g.uIk("target", v.target)("href", v.href, g.LSH)
                    },
                    inputs: {
                        target: "target",
                        queryParams: "queryParams",
                        fragment: "fragment",
                        queryParamsHandling: "queryParamsHandling",
                        preserveFragment: "preserveFragment",
                        skipLocationChange: "skipLocationChange",
                        replaceUrl: "replaceUrl",
                        state: "state",
                        relativeTo: "relativeTo",
                        routerLink: "routerLink"
                    },
                    features: [g.TTD]
                }), f
            })();

            function mi(f) {
                return "" === f || !!f
            }
            class xe {}
            class dt {
                preload(c, a) {
                    return re(null)
                }
            }
            let Xt = (() => {
                    class f {
                        constructor(a, v, b, A) {
                            this.router = a, this.injector = b, this.preloadingStrategy = A, this.loader = new Kt(b, v, J => a.triggerEvent(new hn(J)), J => a.triggerEvent(new or(J)))
                        }
                        setUpPreloading() {
                            this.subscription = this.router.events.pipe((0, rr.h)(a => a instanceof fn), kt(() => this.preload())).subscribe(() => {})
                        }
                        preload() {
                            const a = this.injector.get(g.h0i);
                            return this.processRoutes(a, this.router.config)
                        }
                        ngOnDestroy() {
                            this.subscription && this.subscription.unsubscribe()
                        }
                        processRoutes(a, v) {
                            const b = [];
                            for (const A of v)
                                if (A.loadChildren && !A.canLoad && A._loadedConfig) {
                                    const R = A._loadedConfig;
                                    b.push(this.processRoutes(R.module, R.routes))
                                } else A.loadChildren && !A.canLoad ? b.push(this.preloadConfig(a, A)) : A.children && b.push(this.processRoutes(a, A.children));
                            return (0, ke.D)(b).pipe((0, nt.J)(), (0, we.U)(A => {}))
                        }
                        preloadConfig(a, v) {
                            return this.preloadingStrategy.preload(v, () => (v._loadedConfig ? re(v._loadedConfig) : this.loader.load(a.injector, v)).pipe((0, Jt.zg)(A => (v._loadedConfig = A, this.processRoutes(A.module, A.routes)))))
                        }
                    }
                    return f.\u0275fac = function(a) {
                        return new(a || f)(g.LFG(Lt), g.LFG(g.Sil), g.LFG(g.zs3), g.LFG(xe))
                    }, f.\u0275prov = g.Yz7({
                        token: f,
                        factory: f.\u0275fac
                    }), f
                })(),
                Hn = (() => {
                    class f {
                        constructor(a, v, b = {}) {
                            this.router = a, this.viewportScroller = v, this.options = b, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, b.scrollPositionRestoration = b.scrollPositionRestoration || "disabled", b.anchorScrolling = b.anchorScrolling || "disabled"
                        }
                        init() {
                            "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
                        }
                        createScrollEvents() {
                            return this.router.events.subscribe(a => {
                                a instanceof at ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = a.navigationTrigger, this.restoredId = a.restoredState ? a.restoredState.navigationId : 0) : a instanceof fn && (this.lastId = a.id, this.scheduleScrollEvent(a, this.router.parseUrl(a.urlAfterRedirects).fragment))
                            })
                        }
                        consumeScrollEvents() {
                            return this.router.events.subscribe(a => {
                                a instanceof te && (a.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(a.position) : a.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(a.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
                            })
                        }
                        scheduleScrollEvent(a, v) {
                            this.router.triggerEvent(new te(a, "popstate" === this.lastSource ? this.store[this.restoredId] : null, v))
                        }
                        ngOnDestroy() {
                            this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                        }
                    }
                    return f.\u0275fac = function(a) {
                        g.$Z()
                    }, f.\u0275prov = g.Yz7({
                        token: f,
                        factory: f.\u0275fac
                    }), f
                })();
            const Un = new g.OlP("ROUTER_CONFIGURATION"),
                Gt = new g.OlP("ROUTER_FORROOT_GUARD"),
                Vs = [tt.Ye, {
                    provide: Zr,
                    useClass: Cr
                }, {
                    provide: Lt,
                    useFactory: function Ca(f, c, a, v, b, A, R = {}, H, J) {
                        const Ie = new Lt(null, f, c, a, v, b, Wn(A));
                        return H && (Ie.urlHandlingStrategy = H), J && (Ie.routeReuseStrategy = J),
                            function Ea(f, c) {
                                f.errorHandler && (c.errorHandler = f.errorHandler), f.malformedUriErrorHandler && (c.malformedUriErrorHandler = f.malformedUriErrorHandler), f.onSameUrlNavigation && (c.onSameUrlNavigation = f.onSameUrlNavigation), f.paramsInheritanceStrategy && (c.paramsInheritanceStrategy = f.paramsInheritanceStrategy), f.relativeLinkResolution && (c.relativeLinkResolution = f.relativeLinkResolution), f.urlUpdateStrategy && (c.urlUpdateStrategy = f.urlUpdateStrategy), f.canceledNavigationResolution && (c.canceledNavigationResolution = f.canceledNavigationResolution)
                            }(R, Ie), R.enableTracing && Ie.events.subscribe(yt => {
                                var Ve, jt;
                                null === (Ve = console.group) || void 0 === Ve || Ve.call(console, `Router Event: ${yt.constructor.name}`), console.log(yt.toString()), console.log(yt), null === (jt = console.groupEnd) || void 0 === jt || jt.call(console)
                            }), Ie
                    },
                    deps: [Zr, I, tt.Ye, g.zs3, g.Sil, It, Un, [class mn {}, new g.FiY],
                        [class ut {}, new g.FiY]
                    ]
                }, I, {
                    provide: Br,
                    useFactory: function Is(f) {
                        return f.routerState.root
                    },
                    deps: [Lt]
                }, Xt, dt, class $e {
                    preload(c, a) {
                        return a().pipe(et(() => re(null)))
                    }
                }, {
                    provide: Un,
                    useValue: {
                        enableTracing: !1
                    }
                }];

            function eo() {
                return new g.PXZ("Router", Lt)
            }
            let $n = (() => {
                class f {
                    constructor(a, v) {}
                    static forRoot(a, v) {
                        return {
                            ngModule: f,
                            providers: [Vs, Ts(a), {
                                    provide: Gt,
                                    useFactory: Or,
                                    deps: [
                                        [Lt, new g.FiY, new g.tp0]
                                    ]
                                }, {
                                    provide: Un,
                                    useValue: v || {}
                                }, {
                                    provide: tt.S$,
                                    useFactory: Ir,
                                    deps: [tt.lw, [new g.tBr(tt.mr), new g.FiY], Un]
                                }, {
                                    provide: Hn,
                                    useFactory: Ni,
                                    deps: [Lt, tt.EM, Un]
                                }, {
                                    provide: xe,
                                    useExisting: v && v.preloadingStrategy ? v.preloadingStrategy : dt
                                }, {
                                    provide: g.PXZ,
                                    multi: !0,
                                    useFactory: eo
                                },
                                [to, {
                                    provide: g.ip1,
                                    multi: !0,
                                    useFactory: Uo,
                                    deps: [to]
                                }, {
                                    provide: ys,
                                    useFactory: $o,
                                    deps: [to]
                                }, {
                                    provide: g.tb,
                                    multi: !0,
                                    useExisting: ys
                                }]
                            ]
                        }
                    }
                    static forChild(a) {
                        return {
                            ngModule: f,
                            providers: [Ts(a)]
                        }
                    }
                }
                return f.\u0275fac = function(a) {
                    return new(a || f)(g.LFG(Gt, 8), g.LFG(Lt, 8))
                }, f.\u0275mod = g.oAB({
                    type: f
                }), f.\u0275inj = g.cJS({}), f
            })();

            function Ni(f, c, a) {
                return a.scrollOffset && c.setOffset(a.scrollOffset), new Hn(f, c, a)
            }

            function Ir(f, c, a = {}) {
                return a.useHash ? new tt.Do(f, c) : new tt.b0(f, c)
            }

            function Or(f) {
                return "guarded"
            }

            function Ts(f) {
                return [{
                    provide: g.deG,
                    multi: !0,
                    useValue: f
                }, {
                    provide: It,
                    multi: !0,
                    useValue: f
                }]
            }
            let to = (() => {
                class f {
                    constructor(a) {
                        this.injector = a, this.initNavigation = !1, this.destroyed = !1, this.resultOfPreactivationDone = new ie.xQ
                    }
                    appInitializer() {
                        return this.injector.get(tt.V_, Promise.resolve(null)).then(() => {
                            if (this.destroyed) return Promise.resolve(!0);
                            let v = null;
                            const b = new Promise(H => v = H),
                                A = this.injector.get(Lt),
                                R = this.injector.get(Un);
                            return "disabled" === R.initialNavigation ? (A.setUpLocationChangeListener(), v(!0)) : "enabled" === R.initialNavigation || "enabledBlocking" === R.initialNavigation ? (A.hooks.afterPreactivation = () => this.initNavigation ? re(null) : (this.initNavigation = !0, v(!0), this.resultOfPreactivationDone), A.initialNavigation()) : v(!0), b
                        })
                    }
                    bootstrapListener(a) {
                        const v = this.injector.get(Un),
                            b = this.injector.get(Xt),
                            A = this.injector.get(Hn),
                            R = this.injector.get(Lt),
                            H = this.injector.get(g.z2F);
                        a === H.components[0] && (("enabledNonBlocking" === v.initialNavigation || void 0 === v.initialNavigation) && R.initialNavigation(), b.setUpPreloading(), A.init(), R.resetRootComponentType(H.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
                    }
                    ngOnDestroy() {
                        this.destroyed = !0
                    }
                }
                return f.\u0275fac = function(a) {
                    return new(a || f)(g.LFG(g.zs3))
                }, f.\u0275prov = g.Yz7({
                    token: f,
                    factory: f.\u0275fac
                }), f
            })();

            function Uo(f) {
                return f.appInitializer.bind(f)
            }

            function $o(f) {
                return f.bootstrapListener.bind(f)
            }
            const ys = new g.OlP("Router Initializer")
        }
    },
    ot => {
        ot(ot.s = 91240)
    }
]);