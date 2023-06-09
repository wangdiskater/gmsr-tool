"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [538], {
        57538: (v, r, o) => {
            o.r(r), o.d(r, {
                OverwatchHomeModule: () => p
            });
            var m = o(69808),
                i = o(69414),
                e = o(72096),
                c = o(22313),
                d = o(42698);
            const s = [{
                path: "",
                component: (() => {
                    class t {
                        constructor(n, g) {
                            this.titleService = n, this.metaService = g
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Overwatch Home | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "The home page for the various Overwatch projects on here."
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "index, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "index, follow"
                            })
                        }
                    }
                    return t.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(c.Dx), e.Y36(c.h_))
                    }, t.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["app-overwatch-home"]
                        ],
                        decls: 21,
                        vars: 0,
                        consts: [
                            [1, "contentPageOverride"],
                            [1, "title"],
                            [1, "intro"],
                            [1, "changeLog"],
                            [1, "changeLogTitle"],
                            [1, "individualLog"]
                        ],
                        template: function(n, g) {
                            1 & n && (e._UZ(0, "app-overwatch-side-navigation"), e.TgZ(1, "div", 0)(2, "p", 1), e._uU(3, "Overwatch"), e.qZA(), e.TgZ(4, "p", 2), e._uU(5, "Welcome to the Overwatch section of my website of random stuff. Here you will find stuff like a random hero selector."), e.qZA(), e.TgZ(6, "p", 2), e._uU(7, "If you run into any issues, have some suggestions or feature requests feel free to contact me on discord StarLines#0001"), e.qZA(), e.TgZ(8, "div", 3)(9, "p", 4), e._uU(10, "Change Log"), e.qZA(), e.TgZ(11, "div", 5)(12, "span"), e._uU(13, "Aug 1, 2020"), e.qZA(), e.TgZ(14, "p"), e._uU(15, "- Implemented the home page."), e.qZA()(), e.TgZ(16, "div", 5)(17, "span"), e._uU(18, "July 24, 2020"), e.qZA(), e.TgZ(19, "p"), e._uU(20, "- Implemented the random hero selector."), e.qZA()()()())
                        },
                        directives: [d.j],
                        styles: [".contentPageOverride[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:5px 0 0;text-align:center;font-size:25px;text-decoration:underline}.contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 72px);margin:8px auto 0}.contentPageOverride[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.contentPageOverride[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]{margin-left:50px;margin-right:50px;font-size:18px}.changeLog[_ngcontent-%COMP%]{margin-top:100px;margin-left:50px;margin-right:50px;font-size:16px}.changeLog[_ngcontent-%COMP%]   .changeLogTitle[_ngcontent-%COMP%]{margin:0;font-size:18px;text-decoration:underline}.individualLog[_ngcontent-%COMP%]{margin-top:5px;font-size:16px}.individualLog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 10px}@media only screen and (max-width: 1305px){.contentPageOverride[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 1061px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width: 813px){.contentPageOverride[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}"]
                    }), t
                })()
            }];
            let l = (() => {
                class t {}
                return t.\u0275fac = function(n) {
                    return new(n || t)
                }, t.\u0275mod = e.oAB({
                    type: t
                }), t.\u0275inj = e.cJS({
                    imports: [
                        [i.Bz.forChild(s)], i.Bz
                    ]
                }), t
            })();
            var h = o(16378);
            let p = (() => {
                class t {}
                return t.\u0275fac = function(n) {
                    return new(n || t)
                }, t.\u0275mod = e.oAB({
                    type: t
                }), t.\u0275inj = e.cJS({
                    imports: [
                        [m.ez, l, h.F]
                    ]
                }), t
            })()
        }
    }
]);