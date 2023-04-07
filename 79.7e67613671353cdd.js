"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [79], {
        13079: (M, l, u) => {
            u.r(l), u.d(l, {
                HiddenHexRGBConverterModule: () => T
            });
            var a = u(69808),
                c = u(69414),
                e = u(72096),
                g = u(22313),
                s = u(90567),
                d = u(34182);

            function x(o, p) {
                if (1 & o) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 14)(1, "div", 15)(2, "label", 16), e._uU(3, "Hex color code (#RRGGBB)"), e.qZA(), e.TgZ(4, "input", 17), e.NdJ("ngModelChange", function(r) {
                        return e.CHM(t), e.oxw().hexInput = r
                    })("input", function() {
                        return e.CHM(t), e.oxw().convert()
                    }), e.qZA()()()
                }
                if (2 & o) {
                    const t = e.oxw();
                    e.xp6(4), e.Q6J("ngModel", t.hexInput)
                }
            }

            function h(o, p) {
                if (1 & o) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 18)(1, "div", 15)(2, "label", 19), e._uU(3, "Red (R)"), e.qZA(), e.TgZ(4, "input", 20), e.NdJ("ngModelChange", function(r) {
                        return e.CHM(t), e.oxw().rgbRedInput = r
                    })("input", function() {
                        return e.CHM(t), e.oxw().convert()
                    }), e.qZA()(), e.TgZ(5, "div", 15)(6, "label", 21), e._uU(7, "Green (G)"), e.qZA(), e.TgZ(8, "input", 22), e.NdJ("ngModelChange", function(r) {
                        return e.CHM(t), e.oxw().rgbGreenInput = r
                    })("input", function() {
                        return e.CHM(t), e.oxw().convert()
                    }), e.qZA()(), e.TgZ(9, "div", 15)(10, "label", 23), e._uU(11, "Blue (B)"), e.qZA(), e.TgZ(12, "input", 24), e.NdJ("ngModelChange", function(r) {
                        return e.CHM(t), e.oxw().rgbBlueInput = r
                    })("input", function() {
                        return e.CHM(t), e.oxw().convert()
                    }), e.qZA()()()
                }
                if (2 & o) {
                    const t = e.oxw();
                    e.xp6(4), e.Q6J("ngModel", t.rgbRedInput), e.xp6(4), e.Q6J("ngModel", t.rgbGreenInput), e.xp6(4), e.Q6J("ngModel", t.rgbBlueInput)
                }
            }

            function _(o, p) {
                if (1 & o) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 25)(1, "div", 26)(2, "label", 27), e._uU(3, "Hex color code"), e.qZA(), e.TgZ(4, "input", 28), e.NdJ("ngModelChange", function(r) {
                        return e.CHM(t), e.oxw().hexOutput = r
                    }), e.qZA()()()
                }
                if (2 & o) {
                    const t = e.oxw();
                    e.xp6(4), e.Q6J("ngModel", t.hexOutput)
                }
            }

            function C(o, p) {
                if (1 & o) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 29)(1, "div", 26)(2, "label", 30), e._uU(3, "RGB color code"), e.qZA(), e.TgZ(4, "input", 31), e.NdJ("ngModelChange", function(r) {
                        return e.CHM(t), e.oxw().rgbOutput = r
                    }), e.qZA()()()
                }
                if (2 & o) {
                    const t = e.oxw();
                    e.xp6(4), e.Q6J("ngModel", t.rgbOutput)
                }
            }

            function v(o, p) {
                if (1 & o && (e.TgZ(0, "tr"), e._UZ(1, "td"), e.TgZ(2, "td"), e._uU(3), e.qZA(), e._UZ(4, "td"), e.TgZ(5, "td"), e._uU(6), e.qZA(), e._UZ(7, "td"), e.qZA()), 2 & o) {
                    const t = p.index,
                        n = e.oxw();
                    e.xp6(1), e.Udp("background", n.colorShades[t]), e.xp6(2), e.Oqu(n.colorShades[t]), e.xp6(3), e.Oqu(n.colorTints[t]), e.xp6(1), e.Udp("background", n.colorTints[t])
                }
            }
            const m = [{
                path: "",
                component: (() => {
                    class o {
                        constructor(t, n) {
                            this.titleService = t, this.metaService = n, this.inputSetToHex = !0, this.hexInput = "", this.rgbRedInput = null, this.rgbGreenInput = null, this.rgbBlueInput = null, this.hexOutput = "", this.rgbOutput = "", this.color = "", this.colorShades = new Array(11), this.colorTints = new Array(11)
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Hex & RGB Converter | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "Personal Hex & RGB converter."
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "noindex, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "noindex, follow"
                            })
                        }
                        ngOnDestroy() {
                            this.titleService.setTitle("Random Stuff")
                        }
                        swapConversion() {
                            this.inputSetToHex = !this.inputSetToHex, this.clearInput()
                        }
                        convert() {
                            if (this.inputSetToHex) {
                                var t = this.hexToRGB(this.hexInput);
                                t ? (this.rgbOutput = "rgb(" + t.red + ", " + t.green + ", " + t.blue + ")", this.createTintsAndShades(this.hexInput)) : (this.rgbOutput = null, this.clearShadesAndTintsOutput()), this.color = this.rgbOutput
                            } else this.hexOutput = "#" + this.rgbToHex(this.rgbRedInput, this.rgbGreenInput, this.rgbBlueInput), this.createTintsAndShades(this.hexOutput), this.color = this.hexOutput
                        }
                        createTintsAndShades(t) {
                            var n = this.hexToRGB(t);
                            this.colorShades = this.calculateShades(n), this.colorTints = this.calculateTints(n)
                        }
                        calculateShades(t) {
                            for (var n = [], r = 0; r < 10; r++) n[r] = "#" + this.rgbToHex(t.red * (1 - .1 * r), t.green * (1 - .1 * r), t.blue * (1 - .1 * r));
                            return n.push("#000000"), n
                        }
                        calculateTints(t) {
                            for (var n = [], r = 0; r < 10; r++) n[r] = "#" + this.rgbToHex(t.red + (255 - t.red) * r * .1, t.green + (255 - t.green) * r * .1, t.blue + (255 - t.blue) * r * .1);
                            return n.push("#FFFFFF"), n
                        }
                        hexToRGB(t) {
                            var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                            return n ? {
                                red: parseInt(n[1], 16),
                                green: parseInt(n[2], 16),
                                blue: parseInt(n[3], 16)
                            } : null
                        }
                        rgbToHex(t, n, r) {
                            return (this.intToHex(t) + this.intToHex(n) + this.intToHex(r)).toUpperCase()
                        }
                        intToHex(t) {
                            return this.pad(Math.min(Math.max(Math.round(t), 0), 255).toString(16), 2)
                        }
                        pad(t, n) {
                            for (var r = "" + t; r.length < n;) r = "0" + r;
                            return r
                        }
                        clearInput() {
                            this.hexInput = "", this.rgbRedInput = null, this.rgbGreenInput = null, this.rgbBlueInput = null, this.hexOutput = "", this.rgbOutput = "", this.color = "", this.clearShadesAndTintsOutput()
                        }
                        clearShadesAndTintsOutput() {
                            this.colorShades = new Array(11), this.colorTints = new Array(11)
                        }
                    }
                    return o.\u0275fac = function(t) {
                        return new(t || o)(e.Y36(g.Dx), e.Y36(g.h_))
                    }, o.\u0275cmp = e.Xpm({
                        type: o,
                        selectors: [
                            ["app-hidden-hexrgb-converter"]
                        ],
                        decls: 23,
                        vars: 7,
                        consts: [
                            [1, "contentPageOverride"],
                            [1, "inputWrapper"],
                            ["class", "hexInputWrapper", 4, "ngIf"],
                            ["class", "rgbInputWrapper", 4, "ngIf"],
                            [1, "controlsWrapper"],
                            [1, "buttonStyle", "clear", 3, "click"],
                            [1, "buttonStyle", "swap", 3, "click"],
                            [1, "outputWrapper"],
                            ["class", "hexOutputWrapper", 4, "ngIf"],
                            ["class", "rgbOutputWrapper", 4, "ngIf"],
                            [1, "colorPreviewLabel"],
                            [1, "colorPreview"],
                            [1, "colorTable"],
                            [4, "ngFor", "ngForOf"],
                            [1, "hexInputWrapper"],
                            [1, "inputLabelWrapper"],
                            ["for", "hexInput"],
                            ["name", "hexInput", "id", "hexInput", "type", "text", "placeholder", "#000000", 1, "textInput", 3, "ngModel", "ngModelChange", "input"],
                            [1, "rgbInputWrapper"],
                            ["for", "rgbRedInput"],
                            ["name", "rgbRedInput", "id", "rgbRedInput", "type", "number", "placeholder", "0", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            ["for", "rgbGreenInput"],
                            ["name", "rgbGreenInput", "id", "rgbGreenInput", "type", "number", "placeholder", "0", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            ["for", "rgbBlueInput"],
                            ["name", "rgbBlueInput", "id", "rgbBlueInput", "type", "number", "placeholder", "0", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            [1, "hexOutputWrapper"],
                            [1, "outputLabelWrapper"],
                            ["for", "hexOutput"],
                            ["name", "hexOutput", "id", "hexOutput", "type", "text", "disabled", "", 1, "textInput", 3, "ngModel", "ngModelChange"],
                            [1, "rgbOutputWrapper"],
                            ["for", "rgbOutput"],
                            ["name", "rgbOutput", "id", "rgbOutput", "type", "text", "disabled", "", 1, "textInput", 3, "ngModel", "ngModelChange"]
                        ],
                        template: function(t, n) {
                            1 & t && (e._UZ(0, "app-hidden-side-navigation"), e.TgZ(1, "div", 0)(2, "div", 1), e.YNc(3, x, 5, 1, "div", 2), e.YNc(4, h, 13, 3, "div", 3), e.qZA(), e.TgZ(5, "div", 4)(6, "button", 5), e.NdJ("click", function() {
                                return n.clearInput()
                            }), e.TgZ(7, "span"), e._uU(8, "\u2716"), e.qZA(), e._uU(9, " Clear Input"), e.qZA(), e.TgZ(10, "button", 6), e.NdJ("click", function() {
                                return n.swapConversion()
                            }), e.TgZ(11, "span"), e._uU(12, "\u21c5"), e.qZA(), e._uU(13, " Swap Conversion"), e.qZA()(), e.TgZ(14, "div", 7), e.YNc(15, _, 5, 1, "div", 8), e.YNc(16, C, 5, 1, "div", 9), e.TgZ(17, "p", 10), e._uU(18, "Color preview"), e.qZA(), e._UZ(19, "div", 11), e.qZA(), e.TgZ(20, "div", 12)(21, "table"), e.YNc(22, v, 8, 6, "tr", 13), e.qZA()()()), 2 & t && (e.xp6(3), e.Q6J("ngIf", n.inputSetToHex), e.xp6(1), e.Q6J("ngIf", !n.inputSetToHex), e.xp6(11), e.Q6J("ngIf", !n.inputSetToHex), e.xp6(1), e.Q6J("ngIf", n.inputSetToHex), e.xp6(3), e.Udp("background", n.color), e.xp6(3), e.Q6J("ngForOf", n.colorShades))
                        },
                        directives: [s.x, a.O5, d.Fj, d.JJ, d.On, d.wV, a.sg],
                        styles: [".contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 72px);margin:8px auto 0}#hexInput[_ngcontent-%COMP%], #hexOutput[_ngcontent-%COMP%], #rgbOutput[_ngcontent-%COMP%]{width:330px}#rgbRedInput[_ngcontent-%COMP%], #rgbGreenInput[_ngcontent-%COMP%], #rgbBlueInput[_ngcontent-%COMP%]{width:100px}#rgbRedInput[_ngcontent-%COMP%], #rgbGreenInput[_ngcontent-%COMP%]{margin-right:15px}.inputWrapper[_ngcontent-%COMP%], .outputWrapper[_ngcontent-%COMP%]{width:330px;margin:0 auto}.inputWrapper[_ngcontent-%COMP%]{margin-top:15px}.controlsWrapper[_ngcontent-%COMP%]{width:330px;height:50px;margin:0 auto}.buttonStyle[_ngcontent-%COMP%]{float:left;height:35px;line-height:normal}.clear[_ngcontent-%COMP%]{margin-left:4px}.swap[_ngcontent-%COMP%]{padding-top:9px}.colorPreviewLabel[_ngcontent-%COMP%]{margin:6px 0 2px 3px}.colorPreview[_ngcontent-%COMP%]{width:328px;height:65px;border:1px solid var(--input-box-border-color);border-radius:5px}.colorTable[_ngcontent-%COMP%]{width:330px;margin:15px auto 0;text-align:center}.colorTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.colorTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:70px;height:30px;text-align:left;padding-left:3px}.colorTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){width:20px}@media only screen and (max-width: 1305px){.contentPageOverride[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 1061px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width: 800px){.contentPageOverride[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}@media only screen and (max-width: 444px){.inputWrapper[_ngcontent-%COMP%]{margin-top:5px}}"]
                    }), o
                })()
            }];
            let b = (() => {
                class o {}
                return o.\u0275fac = function(t) {
                    return new(t || o)
                }, o.\u0275mod = e.oAB({
                    type: o
                }), o.\u0275inj = e.cJS({
                    imports: [
                        [c.Bz.forChild(m)], c.Bz
                    ]
                }), o
            })();
            var H = u(41474);
            let T = (() => {
                class o {}
                return o.\u0275fac = function(t) {
                    return new(t || o)
                }, o.\u0275mod = e.oAB({
                    type: o
                }), o.\u0275inj = e.cJS({
                    imports: [
                        [a.ez, b, H.e]
                    ]
                }), o
            })()
        }
    }
]);