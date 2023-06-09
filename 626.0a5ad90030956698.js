"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [626], {
        5626: (u, p, o) => {
            o.r(p), o.d(p, {
                MaplestoryHomeModule: () => h
            });
            var t = o(69808),
                d = o(69414),
                e = o(72096),
                s = o(22313),
                r = o(65534);
            const n = [{
                path: "",
                component: (() => {
                    class a {
                        constructor(l, m) {
                            this.titleService = l, this.metaService = m
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Maplestory Home | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "The home page for the various Maplestory calculators and trackers on here."
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "index, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "index, follow"
                            })
                        }
                    }
                    return a.\u0275fac = function(l) {
                        return new(l || a)(e.Y36(s.Dx), e.Y36(s.h_))
                    }, a.\u0275cmp = e.Xpm({
                        type: a,
                        selectors: [
                            ["app-maplestory-home"]
                        ],
                        decls: 130,
                        vars: 0,
                        consts: [
                            [1, "contentPageOverride"],
                            [1, "title"],
                            [1, "intro"],
                            [1, "changeLog"],
                            [1, "changeLogTitle"],
                            [1, "individualLog"]
                        ],
                        template: function(l, m) {
                            1 & l && (e._UZ(0, "app-maplestory-side-navigation"), e.TgZ(1, "div", 0)(2, "p", 1), e._uU(3, "MapleStory"), e.qZA(), e.TgZ(4, "p", 2), e._uU(5, "Welcome to the MapleStory section of my website of random stuff. Here you will find things like calculators and trackers. The daily and weekly trackers have an option to show the reset times for other regions but because i play on GMS the trackers are based on GMS content and events."), e.qZA(), e.TgZ(6, "p", 2), e._uU(7, "If you run into any issues, have some suggestions or feature requests feel free to contact me on discord StarLines#0001"), e.qZA(), e.TgZ(8, "div", 3)(9, "p", 4), e._uU(10, "Change Log"), e.qZA(), e.TgZ(11, "div", 5)(12, "span"), e._uU(13, "March 11, 2023"), e.qZA(), e.TgZ(14, "p"), e._uU(15, "- Add support for tracking up to 20 characters in the item flame calculator."), e.qZA()(), e.TgZ(16, "div", 5)(17, "span"), e._uU(18, "March 7, 2023"), e.qZA(), e.TgZ(19, "p"), e._uU(20, "- Added the odium symbol to the symbol calculator."), e.qZA()(), e.TgZ(21, "div", 5)(22, "span"), e._uU(23, "March 6, 2023"), e.qZA(), e.TgZ(24, "p"), e._uU(25, "- Added tenebris research to Arcane river dailies."), e.qZA(), e.TgZ(26, "p"), e._uU(27, "- Added a new dailies group for Grandis dailies."), e.qZA()(), e.TgZ(28, "div", 5)(29, "span"), e._uU(30, "July 15, 2022"), e.qZA(), e.TgZ(31, "p"), e._uU(32, "- Updated the code behind the dailies & weeklies tracker."), e.qZA(), e.TgZ(33, "p"), e._uU(34, "- Added support for more than 4 characters in the dailies & weeklies tracker."), e.qZA(), e.TgZ(35, "p"), e._uU(36, "- Added the sacred symbol calculator (works identitcal to the arcane symbol calculator)"), e.qZA()(), e.TgZ(37, "div", 5)(38, "span"), e._uU(39, "June 15, 2022"), e.qZA(), e.TgZ(40, "p"), e._uU(41, "- Adjusted the Arcane symbol calculator to use the new values for level up cost, demon avenger hp & xenon stats introduced by the Destiny update."), e.qZA()(), e.TgZ(42, "div", 5)(43, "span"), e._uU(44, "December 5, 2021"), e.qZA(), e.TgZ(45, "p"), e._uU(46, "- Adjusted the Arcane symbol calculator to work with the new overflow symbols for symbol experience."), e.qZA(), e.TgZ(47, "p"), e._uU(48, "- Increased the symbols gained from the Lachelein daily quest from 4 to 8. This now matches the recent ingame change."), e.qZA()(), e.TgZ(49, "div", 5)(50, "span"), e._uU(51, "November 26, 2021"), e.qZA(), e.TgZ(52, "p"), e._uU(53, "- Added Lara to the list of classes to select in the item flame calculator."), e.qZA()(), e.TgZ(54, "div", 5)(55, "span"), e._uU(56, "July 7, 2021"), e.qZA(), e.TgZ(57, "p"), e._uU(58, "- Added Kain to the list of classes to select in the item flame calculator."), e.qZA()(), e.TgZ(59, "div", 5)(60, "span"), e._uU(61, "July 6, 2021"), e.qZA(), e.TgZ(62, "p"), e._uU(63, "- Dailies Tracker added countdown timer to Yu Garden for when the merchant arrives and leaves."), e.qZA(), e.TgZ(64, "p"), e._uU(65, "- Arcane symbol calculator now supports the x2 multiplier for unlocking reverse city and yum yum island."), e.qZA()(), e.TgZ(66, "div", 5)(67, "span"), e._uU(68, "April 21, 2021"), e.qZA(), e.TgZ(69, "p"), e._uU(70, "- Restructured the code behind the dailies & weeklies tracker. This makes the addition of new features easier."), e.qZA(), e.TgZ(71, "p"), e._uU(72, "- Dailies & weeklies now keep track of the character you had last selected."), e.qZA()(), e.TgZ(73, "div", 5)(74, "span"), e._uU(75, "Jan 16, 2021"), e.qZA(), e.TgZ(76, "p"), e._uU(77, "- Event dailies & weeklies are now scheduled to appear and dissapear based on their start and end date."), e.qZA()(), e.TgZ(78, "div", 5)(79, "span"), e._uU(80, "Dec 24, 2020"), e.qZA(), e.TgZ(81, "p"), e._uU(82, "- Added weapon flame tier calculator."), e.qZA()(), e.TgZ(83, "div", 5)(84, "span"), e._uU(85, "Sept 20, 2020"), e.qZA(), e.TgZ(86, "p"), e._uU(87, "- Added option to create custom dailies/weeklies."), e.qZA()(), e.TgZ(88, "div", 5)(89, "span"), e._uU(90, "Sept 16, 2020"), e.qZA(), e.TgZ(91, "p"), e._uU(92, "- Added flamescore calculator."), e.qZA()(), e.TgZ(93, "div", 5)(94, "span"), e._uU(95, "Sept 2, 2020"), e.qZA(), e.TgZ(96, "p"), e._uU(97, "- Added support for other region reset times to the daily and weekly tracker."), e.qZA()(), e.TgZ(98, "div", 5)(99, "span"), e._uU(100, "Aug 29, 2020"), e.qZA(), e.TgZ(101, "p"), e._uU(102, "- Added count down timer for golden time in the ursus daily task."), e.qZA()(), e.TgZ(103, "div", 5)(104, "span"), e._uU(105, "Aug 4, 2020"), e.qZA(), e.TgZ(106, "p"), e._uU(107, "- Added multi character support to the daily and weekly tracker."), e.qZA()(), e.TgZ(108, "div", 5)(109, "span"), e._uU(110, "Aug 1, 2020"), e.qZA(), e.TgZ(111, "p"), e._uU(112, "- Implemented the home page."), e.qZA(), e.TgZ(113, "p"), e._uU(114, "- Fixed an issue in the weeklies tracker for timezones that are behind UTC."), e.qZA()(), e.TgZ(115, "div", 5)(116, "span"), e._uU(117, "July 30, 2020"), e.qZA(), e.TgZ(118, "p"), e._uU(119, "- Added the weeklies tracker."), e.qZA()(), e.TgZ(120, "div", 5)(121, "span"), e._uU(122, "July 29, 2020"), e.qZA(), e.TgZ(123, "p"), e._uU(124, "- Added the dailies tracker."), e.qZA()(), e.TgZ(125, "div", 5)(126, "span"), e._uU(127, "July 28, 2020"), e.qZA(), e.TgZ(128, "p"), e._uU(129, "- Added the arcane symbol calculator."), e.qZA()()()())
                        },
                        directives: [r.G],
                        styles: [".contentPageOverride[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:5px 0 8px;text-align:center;font-size:25px;text-decoration:underline}.contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 87px);margin:8px auto;padding-bottom:16px}.contentPageOverride[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.contentPageOverride[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]{margin-left:50px;margin-right:50px;font-size:18px}.changeLog[_ngcontent-%COMP%]{margin-top:100px;margin-left:50px;margin-right:50px;font-size:16px}.changeLog[_ngcontent-%COMP%]   .changeLogTitle[_ngcontent-%COMP%]{margin:0;font-size:18px;text-decoration:underline}.individualLog[_ngcontent-%COMP%]{margin-top:14px;font-size:16px}.individualLog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 10px}@media only screen and (max-width: 1305px){.contentPageOverride[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 1061px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width: 813px){.contentPageOverride[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}"]
                    }), a
                })()
            }];
            let g = (() => {
                class a {}
                return a.\u0275fac = function(l) {
                    return new(l || a)
                }, a.\u0275mod = e.oAB({
                    type: a
                }), a.\u0275inj = e.cJS({
                    imports: [
                        [d.Bz.forChild(n)], d.Bz
                    ]
                }), a
            })();
            var Z = o(56928);
            let h = (() => {
                class a {}
                return a.\u0275fac = function(l) {
                    return new(l || a)
                }, a.\u0275mod = e.oAB({
                    type: a
                }), a.\u0275inj = e.cJS({
                    imports: [
                        [t.ez, g, Z.C]
                    ]
                }), a
            })()
        },
        56928: (u, p, o) => {
            o.d(p, {
                C: () => s
            });
            var t = o(69808),
                d = o(75326),
                e = o(72096);
            let s = (() => {
                class r {}
                return r.\u0275fac = function(n) {
                    return new(n || r)
                }, r.\u0275mod = e.oAB({
                    type: r
                }), r.\u0275inj = e.cJS({
                    imports: [
                        [t.ez, d.m], d.m
                    ]
                }), r
            })()
        },
        65534: (u, p, o) => {
            o.d(p, {
                G: () => e
            });
            var t = o(72096),
                d = o(69414);
            let e = (() => {
                class s {
                    constructor(i) {
                        this.router = i
                    }
                    ngOnInit() {}
                }
                return s.\u0275fac = function(i) {
                    return new(i || s)(t.Y36(d.F0))
                }, s.\u0275cmp = t.Xpm({
                    type: s,
                    selectors: [
                        ["app-maplestory-side-navigation"]
                    ],
                    decls: 42,
                    vars: 24,
                    consts: [
                        [1, "sidenavbar"],
                        [1, "sidenavbartitle"],
                        [3, "routerLink"],
                        [1, "horizontalSeparator"],
                        ["href", "https://www.buymeacoffee.com/starlines", "target", "_blank"]
                    ],
                    template: function(i, n) {
                        1 & i && (t.TgZ(0, "div", 0)(1, "div", 1), t._uU(2, "Maplestory"), t.qZA(), t.TgZ(3, "p"), t._uU(4, "General"), t.qZA(), t.TgZ(5, "a", 2)(6, "span"), t._uU(7, "Home"), t.qZA()(), t._UZ(8, "div", 3), t.TgZ(9, "p"), t._uU(10, "Calculators"), t.qZA(), t.TgZ(11, "a", 2)(12, "span"), t._uU(13, "Arcane symbols"), t.qZA()(), t.TgZ(14, "a", 2)(15, "span"), t._uU(16, "Sacred symbols"), t.qZA()(), t.TgZ(17, "a", 2)(18, "span"), t._uU(19, "Item flames"), t.qZA()(), t.TgZ(20, "a", 2)(21, "span"), t._uU(22, "Weapon flame"), t.qZA()(), t._UZ(23, "div", 3), t.TgZ(24, "p"), t._uU(25, "Trackers"), t.qZA(), t.TgZ(26, "a", 2)(27, "span"), t._uU(28, "Dailies"), t.qZA()(), t.TgZ(29, "a", 2)(30, "span"), t._uU(31, "Weeklies"), t.qZA()(), t._UZ(32, "div", 3), t.TgZ(33, "a", 2)(34, "span"), t._uU(35, "Export settings"), t.qZA()(), t._UZ(36, "div", 3), t.TgZ(37, "p"), t._uU(38, "Enjoying my creations?"), t.qZA(), t.TgZ(39, "a", 4)(40, "span"), t._uU(41, "consider donating here"), t.qZA()()()), 2 & i && (t.xp6(5), t.Q6J("routerLink", "/games/maplestory/home"), t.xp6(1), t.ekj("sidenavbaractivelink", n.router.isActive("/games/maplestory/home", !1)), t.xp6(5), t.Q6J("routerLink", "/games/maplestory/arcane-symbols"), t.xp6(1), t.ekj("sidenavbaractivelink", n.router.isActive("/games/maplestory/arcane-symbols", !1)), t.xp6(2), t.Q6J("routerLink", "/games/maplestory/sacred-symbols"), t.xp6(1), t.ekj("sidenavbaractivelink", n.router.isActive("/games/maplestory/sacred-symbols", !1)), t.xp6(2), t.Q6J("routerLink", "/games/maplestory/item-flames"), t.xp6(1), t.ekj("sidenavbaractivelink", n.router.isActive("/games/maplestory/item-flames", !1)), t.xp6(2), t.Q6J("routerLink", "/games/maplestory/weapon-flame"), t.xp6(1), t.ekj("sidenavbaractivelink", n.router.isActive("/games/maplestory/weapon-flame", !1)), t.xp6(5), t.Q6J("routerLink", "/games/maplestory/dailies"), t.xp6(1), t.ekj("sidenavbaractivelink", n.router.isActive("/games/maplestory/dailies", !1)), t.xp6(2), t.Q6J("routerLink", "/games/maplestory/weeklies"), t.xp6(1), t.ekj("sidenavbaractivelink", n.router.isActive("/games/maplestory/weeklies", !1)), t.xp6(3), t.Q6J("routerLink", "/games/maplestory/settings"), t.xp6(1), t.ekj("sidenavbaractivelink", n.router.isActive("/games/maplestory/settings", !1)))
                    },
                    directives: [d.yS],
                    styles: [""]
                }), s
            })()
        }
    }
]);