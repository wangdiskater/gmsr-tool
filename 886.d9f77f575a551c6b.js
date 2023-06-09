"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [886], {
        95886: (M, c, r) => {
            r.r(c), r.d(c, {
                MiscSkribblModule: () => b
            });
            var d = r(69808),
                u = r(69414),
                t = r(72096),
                s = r(22313),
                l = r(34182);
            const m = [{
                path: "",
                component: (() => {
                    class e {
                        constructor(n, o) {
                            this.titleService = n, this.metaService = o, this.input = "", this.output = "", this.wordCount = 0
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Misc Skribbl | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "Custom skribble.io words duplicate filter"
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
                        removeDuplicates() {
                            var n = this.input.split(","),
                                o = (n = n.map(function(i) {
                                    return i.trim()
                                })).reduce(function(i, p) {
                                    return i.indexOf(p) < 0 && i.push(p), i
                                }, []);
                            this.wordCount = o.length, this.output = o.join(", ")
                        }
                    }
                    return e.\u0275fac = function(n) {
                        return new(n || e)(t.Y36(s.Dx), t.Y36(s.h_))
                    }, e.\u0275cmp = t.Xpm({
                        type: e,
                        selectors: [
                            ["app-misc-skribbl"]
                        ],
                        decls: 14,
                        vars: 3,
                        consts: [
                            [1, "contentPageOverride"],
                            [1, "textAreaWrapper", "inputWrapper"],
                            ["for", "input"],
                            ["id", "input", "name", "input", "placeholder", "input...", 1, "textAreaInput", 3, "ngModel", "ngModelChange"],
                            [1, "controlsWrapper"],
                            [1, "buttonStyle", "clear", 3, "click"],
                            [1, "textAreaWrapper", "outputWrapper"],
                            ["id", "input", "name", "input", "placeholder", "output...", "readonly", "", 1, "textAreaOutput", 3, "ngModel", "ngModelChange"],
                            [1, "countWrapper"]
                        ],
                        template: function(n, o) {
                            1 & n && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "label", 2), t._uU(3, "Input words separated by a comma:"), t.qZA(), t.TgZ(4, "textarea", 3), t.NdJ("ngModelChange", function(p) {
                                return o.input = p
                            }), t.qZA()(), t.TgZ(5, "div", 4)(6, "button", 5), t.NdJ("click", function() {
                                return o.removeDuplicates()
                            }), t._uU(7, "Remove Duplicates"), t.qZA()(), t.TgZ(8, "div", 6)(9, "label", 2), t._uU(10, "Output"), t.qZA(), t.TgZ(11, "textarea", 7), t.NdJ("ngModelChange", function(p) {
                                return o.output = p
                            }), t.qZA()(), t.TgZ(12, "div", 8), t._uU(13), t.qZA()()), 2 & n && (t.xp6(4), t.Q6J("ngModel", o.input), t.xp6(7), t.Q6J("ngModel", o.output), t.xp6(2), t.hij(" Word count: ", o.wordCount, " "))
                        },
                        directives: [l.Fj, l.JJ, l.On],
                        styles: [".contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 72px);margin:8px auto 0}.textAreaWrapper[_ngcontent-%COMP%]{width:400px;height:108px}.textAreaOutput[_ngcontent-%COMP%]:focus{box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none}.inputWrapper[_ngcontent-%COMP%]{margin-top:15px}.controlsWrapper[_ngcontent-%COMP%]{width:400px;height:50px;margin:0 auto}.buttonStyle[_ngcontent-%COMP%]{float:left;height:35px;line-height:normal;transform:translate(3px)}.countWrapper[_ngcontent-%COMP%]{width:400px;height:50px;margin:7px auto 0;transform:translate(5.5px)}@media only screen and (max-width: 818px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 18px)}}@media only screen and (max-width: 444px){.inputWrapper[_ngcontent-%COMP%]{margin-top:5px}.textAreaWrapper[_ngcontent-%COMP%]{width:calc(100% - 8px)}.controlsWrapper[_ngcontent-%COMP%], .countWrapper[_ngcontent-%COMP%]{margin-left:4px}}"]
                    }), e
                })()
            }];
            let g = (() => {
                class e {}
                return e.\u0275fac = function(n) {
                    return new(n || e)
                }, e.\u0275mod = t.oAB({
                    type: e
                }), e.\u0275inj = t.cJS({
                    imports: [
                        [u.Bz.forChild(m)], u.Bz
                    ]
                }), e
            })();
            var h = r(75326);
            let b = (() => {
                class e {}
                return e.\u0275fac = function(n) {
                    return new(n || e)
                }, e.\u0275mod = t.oAB({
                    type: e
                }), e.\u0275inj = t.cJS({
                    imports: [
                        [d.ez, h.m, g]
                    ]
                }), e
            })()
        }
    }
]);