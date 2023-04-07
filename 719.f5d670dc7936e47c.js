"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [719], {
        25719: (M, a, i) => {
            i.r(a), i.d(a, {
                HiddenStopwatchModule: () => _
            });
            var p = i(69808),
                c = i(69414),
                t = i(72096),
                r = i(22313),
                h = i(90567);

            function d(n, s) {
                if (1 & n && (t.TgZ(0, "span", 10), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.hours.toString().padStart(2, "0"))
                }
            }

            function l(n, s) {
                if (1 & n && (t.TgZ(0, "span", 10), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.hours.toString())
                }
            }

            function u(n, s) {
                1 & n && (t.TgZ(0, "span", 5), t._uU(1, "h"), t.qZA())
            }

            function m(n, s) {
                if (1 & n && (t.TgZ(0, "span", 10), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.minutes.toString().padStart(2, "0"))
                }
            }

            function g(n, s) {
                if (1 & n && (t.TgZ(0, "span", 10), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.minutes.toString())
                }
            }

            function f(n, s) {
                1 & n && (t.TgZ(0, "span", 5), t._uU(1, "m"), t.qZA())
            }

            function w(n, s) {
                if (1 & n && (t.TgZ(0, "span", 10), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.seconds.toString().padStart(2, "0"))
                }
            }

            function x(n, s) {
                if (1 & n && (t.TgZ(0, "span", 10), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.seconds.toString())
                }
            }
            const T = [{
                path: "",
                component: (() => {
                    class n {
                        constructor(e, o) {
                            this.titleService = e, this.metaService = o, this.hours = 0, this.minutes = 0, this.seconds = 0, this.milliseconds = 0, this.stopwatchMessage = "start", this.startTime = 0, this.totalTime = 0, this.savedTime = 0
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Stopwatch | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "Personal stopwatch project."
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "noindex, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "noindex, follow"
                            })
                        }
                        ngOnDestroy() {
                            this.stopwatchInterval && clearInterval(this.stopwatchInterval)
                        }
                        startStopButton() {
                            this.stopwatchInterval ? this.stop() : this.start()
                        }
                        start() {
                            this.startTime = (new Date).getTime(), this.stopwatchMessage = "stop", this.stopwatchInterval = setInterval(() => {
                                this.calculateAndOutPutTime()
                            })
                        }
                        stop() {
                            clearInterval(this.stopwatchInterval), this.stopwatchInterval = void 0, this.stopwatchMessage = "start", this.savedTime = this.totalTime
                        }
                        reset() {
                            clearInterval(this.stopwatchInterval), this.stopwatchInterval = void 0, this.stopwatchMessage = "start", this.startTime = 0, this.savedTime = 0, this.totalTime = 0, this.hours = 0, this.minutes = 0, this.seconds = 0, this.milliseconds = 0
                        }
                        calculateAndOutPutTime() {
                            var e = (new Date).getTime();
                            this.totalTime = 0 != this.savedTime ? e - this.startTime + this.savedTime : e - this.startTime, this.hours = Math.floor(this.totalTime / 36e5), this.minutes = Math.floor(this.totalTime % 36e5 / 6e4), this.seconds = Math.floor(this.totalTime % 6e4 / 1e3), this.milliseconds = Math.floor(this.totalTime % 1e3 / 10)
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.Y36(r.Dx), t.Y36(r.h_))
                    }, n.\u0275cmp = t.Xpm({
                        type: n,
                        selectors: [
                            ["app-hidden-timer"]
                        ],
                        decls: 22,
                        vars: 10,
                        consts: [
                            [1, "stopwatchWrapper"],
                            [1, "stopwatch"],
                            [1, "stopwatchOutput", "noselect"],
                            ["class", "digit", 4, "ngIf"],
                            ["class", "sepatrator", 4, "ngIf"],
                            [1, "sepatrator"],
                            [1, "digitSmall"],
                            [1, "customSeparator"],
                            [1, "controls"],
                            [3, "click"],
                            [1, "digit"]
                        ],
                        template: function(e, o) {
                            1 & e && (t._UZ(0, "app-hidden-side-navigation"), t.TgZ(1, "div", 0)(2, "div", 1)(3, "div", 2), t.YNc(4, d, 2, 1, "span", 3), t.YNc(5, l, 2, 1, "span", 3), t.YNc(6, u, 2, 0, "span", 4), t.YNc(7, m, 2, 1, "span", 3), t.YNc(8, g, 2, 1, "span", 3), t.YNc(9, f, 2, 0, "span", 4), t.YNc(10, w, 2, 1, "span", 3), t.YNc(11, x, 2, 1, "span", 3), t.TgZ(12, "span", 5), t._uU(13, "s"), t.qZA(), t.TgZ(14, "span", 6), t._uU(15), t.qZA()(), t._UZ(16, "div", 7), t.TgZ(17, "div", 8)(18, "button", 9), t.NdJ("click", function() {
                                return o.startStopButton()
                            }), t._uU(19), t.qZA(), t.TgZ(20, "button", 9), t.NdJ("click", function() {
                                return o.reset()
                            }), t._uU(21, "reset"), t.qZA()()()()), 2 & e && (t.xp6(4), t.Q6J("ngIf", o.hours >= 10), t.xp6(1), t.Q6J("ngIf", 0 != o.hours && o.hours < 10), t.xp6(1), t.Q6J("ngIf", 0 != o.hours), t.xp6(1), t.Q6J("ngIf", 0 != o.hours), t.xp6(1), t.Q6J("ngIf", 0 == o.hours && 0 != o.minutes), t.xp6(1), t.Q6J("ngIf", 0 != o.minutes || 0 != o.hours), t.xp6(1), t.Q6J("ngIf", 0 != o.minutes || 0 != o.hours), t.xp6(1), t.Q6J("ngIf", 0 == o.minutes && 0 == o.hours), t.xp6(4), t.Oqu(o.milliseconds.toString().padStart(2, "0")), t.xp6(4), t.Oqu(o.stopwatchMessage))
                        },
                        directives: [h.x, p.O5],
                        styles: [".stopwatchWrapper[_ngcontent-%COMP%]{width:324px;min-height:calc(100vh - 72px);margin:8px auto 0}.stopwatch[_ngcontent-%COMP%]{position:relative;width:320px;height:128px;margin:30px auto 0;border:2px solid var(--game-page-border-color);border-radius:3px;background-color:var(--game-page-background-color)}.stopwatch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--game-page-accent-color);border:none;color:#fff;padding:5px 10px;text-align:center;font-size:16px;width:75px;margin:0 5px 0 0;outline:none;float:left}.controls[_ngcontent-%COMP%]{position:absolute;bottom:0px;margin:0 5px 5px}.customSeparator[_ngcontent-%COMP%]{width:100%;height:0px;margin:0;border-bottom:2px solid var(--game-page-border-color)}.stopwatchOutput[_ngcontent-%COMP%]{margin:10px 0 9px 10px}.digit[_ngcontent-%COMP%]{font-size:50px}.digitSmall[_ngcontent-%COMP%]{font-size:30px}.sepatrator[_ngcontent-%COMP%]{font-size:30px;margin-right:12px}.noselect[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media only screen and (max-width: 826px){.stopwatchWrapper[_ngcontent-%COMP%]{float:left;margin:unset;margin-left:9px}}@media only screen and (max-width: 800px){.stopwatchWrapper[_ngcontent-%COMP%]{width:100%}}"]
                    }), n
                })()
            }];
            let S = (() => {
                class n {}
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275mod = t.oAB({
                    type: n
                }), n.\u0275inj = t.cJS({
                    imports: [
                        [c.Bz.forChild(T)], c.Bz
                    ]
                }), n
            })();
            var v = i(41474);
            let _ = (() => {
                class n {}
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275mod = t.oAB({
                    type: n
                }), n.\u0275inj = t.cJS({
                    imports: [
                        [p.ez, S, v.e]
                    ]
                }), n
            })()
        }
    }
]);