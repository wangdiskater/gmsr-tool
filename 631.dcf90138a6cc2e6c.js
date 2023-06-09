"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [631], {
        55631: (F, d, o) => {
            o.r(d), o.d(d, {
                HiddenTimerModule: () => Z
            });
            var l = o(69808),
                h = o(69414),
                a = (() => {
                    return (n = a || (a = {}))[n.Full = 0] = "Full", n[n.Preview = 1] = "Preview", a;
                    var n
                })(),
                t = o(72096),
                c = o(22313),
                g = o(90567),
                f = o(88325),
                m = o(34182);
            const T = ["inputField"];

            function _(n, r) {
                if (1 & n && (t.TgZ(0, "span", 17), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.timeOutputString.charAt(0))
                }
            }

            function S(n, r) {
                if (1 & n && (t.TgZ(0, "span", 17), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.timeOutputString.charAt(1))
                }
            }

            function v(n, r) {
                1 & n && (t.TgZ(0, "span", 6), t._uU(1, "h"), t.qZA())
            }

            function O(n, r) {
                if (1 & n && (t.TgZ(0, "span", 17), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.timeOutputString.charAt(2))
                }
            }

            function A(n, r) {
                if (1 & n && (t.TgZ(0, "span", 17), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.timeOutputString.charAt(3))
                }
            }

            function I(n, r) {
                1 & n && (t.TgZ(0, "span", 6), t._uU(1, "m"), t.qZA())
            }

            function M(n, r) {
                if (1 & n && (t.TgZ(0, "span", 17), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.timeOutputString.charAt(4))
                }
            }

            function x(n, r) {
                if (1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 12), t.NdJ("click", function() {
                        return t.CHM(e), t.oxw().startStopButton()
                    }), t._uU(1), t.qZA()
                }
                if (2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.timerMessage)
                }
            }

            function C(n, r) {
                if (1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 12), t.NdJ("click", function() {
                        return t.CHM(e), t.oxw().stopAudio()
                    }), t._uU(1), t.qZA()
                }
                if (2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.timerMessage)
                }
            }
            const w = function(n) {
                    return {
                        digit: !0,
                        inputMarker: n
                    }
                },
                b = [{
                    path: "",
                    component: (() => {
                        class n {
                            constructor(e, i) {
                                this.titleService = e, this.metaService = i, this.previewAudio = new Audio, this.fullAudio = new Audio, this.volume = .5, this.timeInputFocussed = !1, this.timeInput = 500, this.timeOutputString = "000500", this.timeOutputStringIsDirty = !1, this.hours = 0, this.minutes = 5, this.seconds = 0, this.totalMilliseconds = 3e5, this.timerMessage = "start"
                            }
                            ngOnInit() {
                                this.titleService.setTitle("Timer | Random Stuff"), this.metaService.updateTag({
                                    name: "description",
                                    content: "Personal timer project."
                                }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                    name: "robots",
                                    content: "noindex, follow"
                                }) : this.metaService.addTag({
                                    name: "robots",
                                    content: "noindex, follow"
                                }), this.loadAudio()
                            }
                            ngOnDestroy() {
                                this.timer && clearInterval(this.timer), this.titleService.setTitle("Random Stuff")
                            }
                            loadAudio() {
                                this.volume = localStorage.getItem("siteVolume") ? JSON.parse(localStorage.getItem("siteVolume")) : .5, this.previewAudio.volume = this.volume, this.previewAudio.src = "assets/hidden/timer/PreviewSound.mp3", this.fullAudio.volume = this.volume, this.fullAudio.src = "assets/hidden/timer/FullSound.mp3"
                            }
                            updateVolume() {
                                this.previewAudio.volume = this.volume, this.fullAudio.volume = this.volume, localStorage.setItem("siteVolume", JSON.stringify(this.volume)), this.playAudio(a.Preview)
                            }
                            playAudio(e) {
                                e == a.Preview && (this.previewAudio.currentTime = 0, this.previewAudio.play()), e == a.Full && (this.fullAudio.currentTime = 0, this.fullAudio.play())
                            }
                            stopAudio() {
                                this.fullAudio.pause()
                            }
                            timeInputHandler(e) {
                                if (this.timeOutputStringIsDirty = !0, null != e.data || 1 == e.target.value || "deleteContentBackward" == e.inputType) {
                                    if ("insertFromPaste" == e.inputType) return void(e.target.value = "");
                                    isNaN(e.data) && (e.target.value = "", this.timeInput = 1), null == this.timeInput && (this.timeInput = 0), this.timeOutputString = ("000000" + this.timeInput).substr(-6, 6), this.timeInput = parseInt(this.timeOutputString), e.target.value > 999999 && (e.target.value = this.timeInput)
                                }
                            }
                            focusInput() {
                                this.inputField.nativeElement.focus(), this.timeInputFocussed = !0, this.setCursorToTheEnd(), this.timerMessage = "start", this.timer && (this.titleService.setTitle("Random Stuff"), this.stopTimer())
                            }
                            focusOut() {
                                !this.timeInputFocussed || (this.inputField.nativeElement.blur(), this.timeInputFocussed = !1, this.calculateActualTime())
                            }
                            calculateActualTime() {
                                !this.timeOutputStringIsDirty || (this.hours = parseInt(this.timeOutputString.substr(0, 2)), this.minutes = parseInt(this.timeOutputString.substr(2, 2)), this.seconds = parseInt(this.timeOutputString.substr(4, 2)), this.seconds >= 60 && (this.seconds = this.seconds % 60, this.minutes++), this.minutes >= 60 && (this.minutes = this.minutes % 60, this.hours++), this.hours > 99 && (this.hours = 99, this.minutes = 59, this.seconds = 59), this.totalMilliseconds = 1e3 * (60 * this.hours * 60 + 60 * this.minutes + this.seconds), this.timeOutputString = this.hours.toString().padStart(2, "0") + this.minutes.toString().padStart(2, "0") + this.seconds.toString().padStart(2, "0"), this.timeInput = parseInt(this.timeOutputString), this.timeOutputStringIsDirty = !1)
                            }
                            startStopButton() {
                                this.calculateActualTime(), this.timer ? (this.titleService.setTitle("Random Stuff"), this.stopTimer(), this.timerMessage = "start") : this.startTimer()
                            }
                            startTimer() {
                                if (0 != this.totalMilliseconds) {
                                    var e = new Date;
                                    this.startTimeEpoch = e.getTime();
                                    var i = this.startTimeEpoch + this.totalMilliseconds;
                                    this.timerMessage = "stop", this.calculateAndOutPutTime(i - (new Date).getTime()), this.timer = setInterval(() => {
                                        var s = i - (new Date).getTime();
                                        this.calculateAndOutPutTime(s), s <= 0 && (this.stopTimer(), this.playAudio(a.Full), this.timerMessage = "ok")
                                    }, 1e3)
                                }
                            }
                            stopTimer() {
                                clearInterval(this.timer), this.timer = void 0;
                                var e = (new Date).getTime(),
                                    i = 1e3 * Math.round((e - this.startTimeEpoch) / 1e3);
                                this.totalMilliseconds = this.totalMilliseconds - i
                            }
                            resetTimer() {
                                this.timer && this.stopTimer(), this.timerMessage = "start", this.titleService.setTitle("Random Stuff"), this.stopAudio(), this.timeOutputString = this.hours.toString().padStart(2, "0") + this.minutes.toString().padStart(2, "0") + this.seconds.toString().padStart(2, "0"), this.timeInput = parseInt(this.timeOutputString), this.totalMilliseconds = 1e3 * (60 * this.hours * 60 + 60 * this.minutes + this.seconds)
                            }
                            calculateAndOutPutTime(e) {
                                e < 0 ? e = 0 : e += 50;
                                var i = Math.floor(e / 36e5),
                                    s = Math.floor(e % 36e5 / 6e4),
                                    u = Math.floor(e % 6e4 / 1e3);
                                this.timeOutputString = i.toString().padStart(2, "0") + s.toString().padStart(2, "0") + u.toString().padStart(2, "0"), this.timeInput = parseInt(this.timeOutputString), this.outputPageTitle(i, s, u, e)
                            }
                            outputPageTitle(e, i, s, u) {
                                if (0 != u) {
                                    var p = "";
                                    if (0 != e) return p += e.toString() + "h ", p += i.toString().padStart(2, "0") + "m ", p += s.toString().padStart(2, "0") + "s", void this.titleService.setTitle(p);
                                    if (0 != i) return p += i.toString().padStart(2, "0") + "m ", p += s.toString().padStart(2, "0") + "s", void this.titleService.setTitle(p);
                                    this.titleService.setTitle(s + "s")
                                } else this.titleService.setTitle("It's over")
                            }
                            setCursorToTheEnd() {
                                if (this.inputField.nativeElement.setSelectionRange) {
                                    var e = 2 * this.timeInput.toString().length;
                                    setTimeout(() => {
                                        this.inputField.nativeElement.type = "text", this.inputField.nativeElement.setSelectionRange(e, e), this.inputField.nativeElement.type = "number"
                                    }, 1)
                                } else this.timeInput = this.timeInput
                            }
                        }
                        return n.\u0275fac = function(e) {
                            return new(e || n)(t.Y36(c.Dx), t.Y36(c.h_))
                        }, n.\u0275cmp = t.Xpm({
                            type: n,
                            selectors: [
                                ["app-hidden-timer"]
                            ],
                            viewQuery: function(e, i) {
                                if (1 & e && t.Gf(T, 5), 2 & e) {
                                    let s;
                                    t.iGM(s = t.CRH()) && (i.inputField = s.first)
                                }
                            },
                            decls: 27,
                            vars: 15,
                            consts: [
                                [1, "timerWrapper"],
                                [1, "timer"],
                                [1, "timeOutput", "noselect", 3, "click", "clickOutside"],
                                ["class", "digit", 4, "ngIf"],
                                ["class", "sepatrator", 4, "ngIf"],
                                [3, "ngClass"],
                                [1, "sepatrator"],
                                ["name", "timeInput", "id", "timeInput", "type", "number", 3, "ngModel", "ngModelChange", "input", "keyup.enter"],
                                ["inputField", ""],
                                [1, "customSeparator"],
                                [1, "controls"],
                                [3, "click", 4, "ngIf"],
                                [3, "click"],
                                [1, "volume"],
                                [1, "fa", "fa-volume-down", "fa-lm"],
                                [1, "volumeSlider"],
                                ["type", "range", "min", "0", "max", "1", "step", "0.01", 3, "ngModel", "ngModelChange", "mouseup"],
                                [1, "digit"]
                            ],
                            template: function(e, i) {
                                1 & e && (t._UZ(0, "app-hidden-side-navigation"), t.TgZ(1, "div", 0)(2, "div", 1)(3, "div", 2), t.NdJ("click", function() {
                                    return i.focusInput()
                                })("clickOutside", function() {
                                    return i.focusOut()
                                }), t.YNc(4, _, 2, 1, "span", 3), t.YNc(5, S, 2, 1, "span", 3), t.YNc(6, v, 2, 0, "span", 4), t.YNc(7, O, 2, 1, "span", 3), t.YNc(8, A, 2, 1, "span", 3), t.YNc(9, I, 2, 0, "span", 4), t.YNc(10, M, 2, 1, "span", 3), t.TgZ(11, "span", 5), t._uU(12), t.qZA(), t.TgZ(13, "span", 6), t._uU(14, "s"), t.qZA()(), t.TgZ(15, "input", 7, 8), t.NdJ("ngModelChange", function(u) {
                                    return i.timeInput = u
                                })("input", function(u) {
                                    return i.timeInputHandler(u)
                                })("keyup.enter", function() {
                                    return i.focusOut()
                                }), t.qZA(), t._UZ(17, "div", 9), t.TgZ(18, "div", 10), t.YNc(19, x, 2, 1, "button", 11), t.YNc(20, C, 2, 1, "button", 11), t.TgZ(21, "button", 12), t.NdJ("click", function() {
                                    return i.resetTimer()
                                }), t._uU(22, "reset"), t.qZA(), t.TgZ(23, "div", 13), t._UZ(24, "i", 14), t.TgZ(25, "div", 15)(26, "input", 16), t.NdJ("ngModelChange", function(u) {
                                    return i.volume = u
                                })("mouseup", function() {
                                    return i.updateVolume()
                                }), t.qZA()()()()()()), 2 & e && (t.xp6(4), t.Q6J("ngIf", i.timeInputFocussed || "0" != i.timeOutputString.charAt(0)), t.xp6(1), t.Q6J("ngIf", i.timeInputFocussed || "0" != i.timeOutputString.charAt(1) || "0" != i.timeOutputString.charAt(0)), t.xp6(1), t.Q6J("ngIf", i.timeInputFocussed || "0" != i.timeOutputString.charAt(1) || "0" != i.timeOutputString.charAt(0)), t.xp6(1), t.Q6J("ngIf", i.timeInputFocussed || "0" != i.timeOutputString.charAt(2) || "0" != i.timeOutputString.charAt(0) || "0" != i.timeOutputString.charAt(1)), t.xp6(1), t.Q6J("ngIf", i.timeInputFocussed || "0" != i.timeOutputString.charAt(3) || "0" != i.timeOutputString.charAt(0) || "0" != i.timeOutputString.charAt(1) || "0" != i.timeOutputString.charAt(2)), t.xp6(1), t.Q6J("ngIf", i.timeInputFocussed || "0" != i.timeOutputString.charAt(2) || "0" != i.timeOutputString.charAt(0) || "0" != i.timeOutputString.charAt(1) || "0" != i.timeOutputString.charAt(3)), t.xp6(1), t.Q6J("ngIf", i.timeInputFocussed || "0" != i.timeOutputString.charAt(4) || "0" != i.timeOutputString.charAt(0) || "0" != i.timeOutputString.charAt(1) || "0" != i.timeOutputString.charAt(2) || "0" != i.timeOutputString.charAt(3)), t.xp6(1), t.Q6J("ngClass", t.VKq(13, w, i.timeInputFocussed)), t.xp6(1), t.Oqu(i.timeOutputString.charAt(5)), t.xp6(3), t.Q6J("ngModel", i.timeInput), t.xp6(4), t.Q6J("ngIf", "ok" != i.timerMessage), t.xp6(1), t.Q6J("ngIf", "ok" == i.timerMessage), t.xp6(6), t.Q6J("ngModel", i.volume))
                            },
                            directives: [g.x, f._, l.O5, l.mk, m.wV, m.Fj, m.JJ, m.On, m.eT],
                            styles: [".timerWrapper[_ngcontent-%COMP%]{width:324px;min-height:calc(100vh - 72px);margin:8px auto 0}.timer[_ngcontent-%COMP%]{position:relative;width:320px;height:128px;margin:30px auto 0;border:2px solid var(--game-page-border-color);border-radius:3px;background-color:var(--game-page-background-color)}.timer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--game-page-accent-color);border:none;color:#fff;padding:5px 10px;text-align:center;font-size:16px;width:75px;margin:0 5px 0 0;outline:none;float:left}.controls[_ngcontent-%COMP%]{position:absolute;bottom:0px;margin:0 5px 5px}.customSeparator[_ngcontent-%COMP%]{width:100%;height:0px;margin:0;border-bottom:2px solid var(--game-page-border-color)}#timeInput[_ngcontent-%COMP%]{position:absolute;width:0px;height:0px;opacity:0;margin:0;z-index:-2;border:none;padding:0}.volume[_ngcontent-%COMP%]{overflow:hidden;margin:4px 0 0 11px;height:24px;width:139px;text-align:right;float:left}.volumeSlider[_ngcontent-%COMP%]{display:inline-block}i[_ngcontent-%COMP%]{display:inline-block;font-size:20px}.timeOutput[_ngcontent-%COMP%]{margin:10px 0 9px 10px}.digit[_ngcontent-%COMP%]{font-size:60px;border-right:1px solid transparent}.inputMarker[_ngcontent-%COMP%]{border-right:1px solid var(--font-color)}.sepatrator[_ngcontent-%COMP%]{font-size:30px;margin-right:12px}.noselect[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}input[type=range][_ngcontent-%COMP%]{width:120px;height:14px;margin:0 3px 2px}[_ngcontent-%COMP%]::-webkit-slider-thumb{width:14px;height:14px}[_ngcontent-%COMP%]::-moz-range-track{height:14px}[_ngcontent-%COMP%]::-moz-range-thumb{height:14px;width:14px}@media only screen and (max-width: 826px){.timerWrapper[_ngcontent-%COMP%]{float:left;margin:unset;margin-left:9px}}@media only screen and (max-width: 800px){.timerWrapper[_ngcontent-%COMP%]{width:100%}}"]
                        }), n
                    })()
                }];
            let H = (() => {
                class n {}
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275mod = t.oAB({
                    type: n
                }), n.\u0275inj = t.cJS({
                    imports: [
                        [h.Bz.forChild(b)], h.Bz
                    ]
                }), n
            })();
            var P = o(41474);
            let Z = (() => {
                class n {}
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275mod = t.oAB({
                    type: n
                }), n.\u0275inj = t.cJS({
                    imports: [
                        [l.ez, H, P.e]
                    ]
                }), n
            })()
        }
    }
]);