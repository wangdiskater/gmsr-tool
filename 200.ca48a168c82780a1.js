"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [200], {
        86200: (y, l, r) => {
            r.r(l), r.d(l, {
                HiddenBinaryTranslatorModule: () => T
            });
            var c = r(69808),
                u = r(69414),
                t = r(72096),
                s = r(22313),
                h = r(90567),
                p = r(34182);
            const g = [{
                path: "",
                component: (() => {
                    class n {
                        constructor(a, e) {
                            this.titleService = a, this.metaService = e, this.input = "", this.output = "", this.inputHeader = "Binary", this.outputHeader = "Text"
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Binary Translator | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "Personal binary translator project."
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
                        convert() {
                            this.output = "Binary" == this.inputHeader ? this.binaryToText(this.input.replace(/[^0-1]/g, "")) : this.textToBinary(this.input)
                        }
                        clearInput() {
                            this.input = "", this.output = ""
                        }
                        swapTranslation() {
                            "Binary" == this.inputHeader ? (this.inputHeader = "Text", this.outputHeader = "Binary") : (this.inputHeader = "Binary", this.outputHeader = "Text"), this.convert()
                        }
                        binaryToText(a) {
                            return 0 == a.length ? "" : a.replace(/\s/g, "").match(/.{1,8}/g).map(function(e) {
                                return String.fromCharCode(parseInt(e, 2))
                            }).join("")
                        }
                        textToBinary(a) {
                            return a.split("").map(function(e) {
                                return e.charCodeAt(0).toString(2).padStart(8, "0")
                            }).join(" ")
                        }
                    }
                    return n.\u0275fac = function(a) {
                        return new(a || n)(t.Y36(s.Dx), t.Y36(s.h_))
                    }, n.\u0275cmp = t.Xpm({
                        type: n,
                        selectors: [
                            ["app-hidden-binary-translator"]
                        ],
                        decls: 19,
                        vars: 6,
                        consts: [
                            [1, "contentPageOverride"],
                            [1, "textAreaWrapper", "inputWrapper"],
                            ["for", "input"],
                            ["id", "input", "name", "input", 1, "textAreaInput", 3, "placeholder", "ngModel", "ngModelChange", "input"],
                            [1, "controlsWrapper"],
                            [1, "buttonStyle", "clear", 3, "click"],
                            [1, "buttonStyle", "swap", 3, "click"],
                            [1, "textAreaWrapper", "outputWrapper"],
                            ["id", "input", "name", "input", "readonly", "", 1, "textAreaOutput", 3, "placeholder", "ngModel", "ngModelChange"]
                        ],
                        template: function(a, e) {
                            1 & a && (t._UZ(0, "app-hidden-side-navigation"), t.TgZ(1, "div", 0)(2, "div", 1)(3, "label", 2), t._uU(4), t.qZA(), t.TgZ(5, "textarea", 3), t.NdJ("ngModelChange", function(d) {
                                return e.input = d
                            })("input", function() {
                                return e.convert()
                            }), t.qZA()(), t.TgZ(6, "div", 4)(7, "button", 5), t.NdJ("click", function() {
                                return e.clearInput()
                            }), t.TgZ(8, "span"), t._uU(9, "\u2716"), t.qZA(), t._uU(10, " Clear Input"), t.qZA(), t.TgZ(11, "button", 6), t.NdJ("click", function() {
                                return e.swapTranslation()
                            }), t.TgZ(12, "span"), t._uU(13, "\u21c5"), t.qZA(), t._uU(14, " Swap Translation"), t.qZA()(), t.TgZ(15, "div", 7)(16, "label", 2), t._uU(17), t.qZA(), t.TgZ(18, "textarea", 8), t.NdJ("ngModelChange", function(d) {
                                return e.output = d
                            }), t.qZA()()()), 2 & a && (t.xp6(4), t.hij("", e.inputHeader, " input:"), t.xp6(1), t.MGl("placeholder", "", e.inputHeader, " input..."), t.Q6J("ngModel", e.input), t.xp6(12), t.hij("", e.outputHeader, " output:"), t.xp6(1), t.MGl("placeholder", "", e.outputHeader, " output..."), t.Q6J("ngModel", e.output))
                        },
                        directives: [h.x, p.Fj, p.JJ, p.On],
                        styles: [".contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 72px);margin:8px auto 0}.textAreaWrapper[_ngcontent-%COMP%]{width:400px;height:108px}.textAreaOutput[_ngcontent-%COMP%]:focus{box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none}.inputWrapper[_ngcontent-%COMP%]{margin-top:15px}.controlsWrapper[_ngcontent-%COMP%]{width:400px;height:50px;margin:0 auto}.buttonStyle[_ngcontent-%COMP%]{float:left;height:35px;line-height:normal}.clear[_ngcontent-%COMP%]{margin-left:4px}.swap[_ngcontent-%COMP%]{padding-top:9px}@media only screen and (max-width: 1305px){.contentPageOverride[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 1061px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width: 800px){.contentPageOverride[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}@media only screen and (max-width: 444px){.inputWrapper[_ngcontent-%COMP%]{margin-top:5px}}@media only screen and (max-width: 427px){.textAreaWrapper[_ngcontent-%COMP%]{width:calc(100% - 8px)}}"]
                    }), n
                })()
            }];
            let m = (() => {
                class n {}
                return n.\u0275fac = function(a) {
                    return new(a || n)
                }, n.\u0275mod = t.oAB({
                    type: n
                }), n.\u0275inj = t.cJS({
                    imports: [
                        [u.Bz.forChild(g)], u.Bz
                    ]
                }), n
            })();
            var x = r(41474);
            let T = (() => {
                class n {}
                return n.\u0275fac = function(a) {
                    return new(a || n)
                }, n.\u0275mod = t.oAB({
                    type: n
                }), n.\u0275inj = t.cJS({
                    imports: [
                        [c.ez, m, x.e]
                    ]
                }), n
            })()
        }
    }
]);