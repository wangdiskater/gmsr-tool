"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [937], {
        73937: (h, g, l) => {
            l.r(g), l.d(g, {
                MaplestoryWeaponFlameCalculatorModule: () => A
            });
            var a = l(69808),
                d = l(69414),
                e = l(72096),
                m = l(22313),
                p = l(65534),
                r = l(34182);

            function i(n, c) {
                if (1 & n && (e.TgZ(0, "option", 16), e._uU(1), e.qZA()), 2 & n) {
                    const o = c.$implicit,
                        t = c.index,
                        u = e.oxw();
                    e.Q6J("selected", t == u.weaponFlameData.selectedItemLevelRangeIndex), e.xp6(1), e.Oqu(o)
                }
            }
            const _ = function(n) {
                    return {
                        hidden: n
                    }
                },
                v = function() {
                    return {
                        standalone: !0
                    }
                },
                f = [{
                    path: "",
                    component: (() => {
                        class n {
                            constructor(o, t) {
                                this.titleService = o, this.metaService = t, this.normalWeaponTierMultipliers = [.01, .022, .03626, .05325, .073, .088, .1025], this.advantageWeaponTierMultipliers = [.03, .044, .0605, .0799, .1025], this.itemLevelRanges = ["0-39", "40-79", "80-119", "120-159", "160-199", "200-239", "240-275"], this.calculatedTier = 0, this.tableOutput = new Array(7)
                            }
                            ngOnInit() {
                                this.titleService.setTitle("Maplestory Weapon Flame Calculator | Random Stuff"), this.metaService.updateTag({
                                    name: "description",
                                    content: "Maplestory weapon flame calculator to determine the tier of an attack flame on a weapon."
                                }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                    name: "robots",
                                    content: "index, follow"
                                }) : this.metaService.addTag({
                                    name: "robots",
                                    content: "index, follow"
                                }), this.initialise()
                            }
                            initialise() {
                                localStorage.getItem("weaponFlameData") ? (this.weaponFlameData = JSON.parse(localStorage.getItem("weaponFlameData")), this.calculateWeaponFlameTier()) : this.weaponFlameData = {
                                    flameAdvantage: !1,
                                    baseAttack: null,
                                    flameAttack: null,
                                    selectedItemLevelRangeIndex: 0
                                }
                            }
                            calculateWeaponFlameTier() {
                                var o = this.weaponFlameData.flameAdvantage ? this.advantageWeaponTierMultipliers : this.normalWeaponTierMultipliers;
                                this.tableOutput = this.weaponFlameData.flameAdvantage ? [null, null] : [], this.calculatedTier = 0, o.forEach((t, u) => {
                                    var s = Math.ceil((this.weaponFlameData.selectedItemLevelRangeIndex + 1) * t * this.weaponFlameData.baseAttack) || 0;
                                    this.tableOutput.push(s), this.weaponFlameData.flameAttack == s && 0 != s && (this.calculatedTier += u + 1, this.calculatedTier = this.weaponFlameData.flameAdvantage ? this.calculatedTier + 2 : this.calculatedTier)
                                })
                            }
                            itemLevelRangeChange(o) {
                                this.weaponFlameData.selectedItemLevelRangeIndex = o.target.selectedIndex, this.changeHandler()
                            }
                            changeHandler() {
                                this.calculateWeaponFlameTier(), localStorage.setItem("weaponFlameData", JSON.stringify(this.weaponFlameData))
                            }
                        }
                        return n.\u0275fac = function(o) {
                            return new(o || n)(e.Y36(m.Dx), e.Y36(m.h_))
                        }, n.\u0275cmp = e.Xpm({
                            type: n,
                            selectors: [
                                ["app-maplestory-weapon-flame-calculator"]
                            ],
                            decls: 57,
                            vars: 17,
                            consts: [
                                [1, "editedGamePageContent"],
                                [1, "flameOutput"],
                                [3, "ngClass"],
                                [1, "flameInput"],
                                [1, "inputLabelWrapper"],
                                ["for", "baseAttack"],
                                ["name", "baseAttack", "id", "baseAttack", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                                ["for", "flameAttack"],
                                ["name", "flameAttack", "id", "flameAttack", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                                ["for", "itemLevel"],
                                ["name", "itemLevel", "id", "itemLevel", 1, "select", 3, "change"],
                                ["value", "r", 3, "selected", 4, "ngFor", "ngForOf"],
                                [1, "checkboxWrapper"],
                                ["for", "flameAdvantage"],
                                ["name", "flameAdvantage", "id", "flameAdvantage", "type", "checkbox", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"],
                                [1, "tableOutputWrapper"],
                                ["value", "r", 3, "selected"]
                            ],
                            template: function(o, t) {
                                1 & o && (e._UZ(0, "app-maplestory-side-navigation"), e.TgZ(1, "div", 0)(2, "div", 1), e._uU(3, " Tier: "), e.TgZ(4, "span", 2), e._uU(5), e.qZA()(), e.TgZ(6, "div", 3)(7, "div", 4)(8, "label", 5), e._uU(9, "Base Attack"), e.qZA(), e.TgZ(10, "input", 6), e.NdJ("ngModelChange", function(s) {
                                    return t.weaponFlameData.baseAttack = s
                                })("input", function() {
                                    return t.changeHandler()
                                }), e.qZA()(), e.TgZ(11, "div", 4)(12, "label", 7), e._uU(13, "Flame Attack"), e.qZA(), e.TgZ(14, "input", 8), e.NdJ("ngModelChange", function(s) {
                                    return t.weaponFlameData.flameAttack = s
                                })("input", function() {
                                    return t.changeHandler()
                                }), e.qZA()(), e.TgZ(15, "div", 4)(16, "label", 9), e._uU(17, "Weapon Level"), e.qZA(), e.TgZ(18, "select", 10), e.NdJ("change", function(s) {
                                    return t.itemLevelRangeChange(s)
                                }), e.YNc(19, i, 2, 2, "option", 11), e.qZA()(), e.TgZ(20, "div", 12)(21, "label", 13), e._uU(22, "Flame Advantage"), e.qZA(), e.TgZ(23, "input", 14), e.NdJ("ngModelChange", function(s) {
                                    return t.weaponFlameData.flameAdvantage = s
                                })("change", function() {
                                    return t.changeHandler()
                                }), e.qZA()()(), e.TgZ(24, "div", 15), e._uU(25, " Attack for each tier "), e.TgZ(26, "table")(27, "tr")(28, "th"), e._uU(29, "1"), e.qZA(), e.TgZ(30, "th"), e._uU(31, "2"), e.qZA(), e.TgZ(32, "th"), e._uU(33, "3"), e.qZA(), e.TgZ(34, "th"), e._uU(35, "4"), e.qZA(), e.TgZ(36, "th"), e._uU(37, "5"), e.qZA(), e.TgZ(38, "th"), e._uU(39, "6"), e.qZA(), e.TgZ(40, "th"), e._uU(41, "7"), e.qZA()(), e.TgZ(42, "tr")(43, "td"), e._uU(44), e.qZA(), e.TgZ(45, "td"), e._uU(46), e.qZA(), e.TgZ(47, "td"), e._uU(48), e.qZA(), e.TgZ(49, "td"), e._uU(50), e.qZA(), e.TgZ(51, "td"), e._uU(52), e.qZA(), e.TgZ(53, "td"), e._uU(54), e.qZA(), e.TgZ(55, "td"), e._uU(56), e.qZA()()()()()), 2 & o && (e.xp6(4), e.Q6J("ngClass", e.VKq(14, _, 0 == t.calculatedTier)), e.xp6(1), e.Oqu(t.calculatedTier), e.xp6(5), e.Q6J("ngModel", t.weaponFlameData.baseAttack), e.xp6(4), e.Q6J("ngModel", t.weaponFlameData.flameAttack), e.xp6(5), e.Q6J("ngForOf", t.itemLevelRanges), e.xp6(4), e.Q6J("ngModel", t.weaponFlameData.flameAdvantage)("ngModelOptions", e.DdM(16, v)), e.xp6(21), e.Oqu(t.tableOutput[0]), e.xp6(2), e.Oqu(t.tableOutput[1]), e.xp6(2), e.Oqu(t.tableOutput[2]), e.xp6(2), e.Oqu(t.tableOutput[3]), e.xp6(2), e.Oqu(t.tableOutput[4]), e.xp6(2), e.Oqu(t.tableOutput[5]), e.xp6(2), e.Oqu(t.tableOutput[6]))
                            },
                            directives: [p.G, a.mk, r.wV, r.Fj, r.JJ, r.On, a.sg, r.YN, r.Kr, r.Wl],
                            styles: [".editedGamePageContent[_ngcontent-%COMP%]{position:relative;width:600px;margin:8px auto;background-color:var(--game-page-background-color);border:1px solid var(--game-page-border-color);min-height:calc(100vh - 87px);padding-top:15px}.hidden[_ngcontent-%COMP%]{visibility:hidden}.select[_ngcontent-%COMP%]{margin-top:3px;width:240px}.numberInput[_ngcontent-%COMP%]{width:240px}.checkboxWrapper[_ngcontent-%COMP%]{margin:1px 0 0 -1px;padding:0}.flameInput[_ngcontent-%COMP%], .flameOutput[_ngcontent-%COMP%]{width:240px;margin:0 auto}.flameOutput[_ngcontent-%COMP%]{font-size:20px;text-align:center;margin-bottom:4px}.tableOutputWrapper[_ngcontent-%COMP%]{width:240px;margin:15px auto 0;text-align:center}.tableOutputWrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.tableOutputWrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{width:30px;height:21px;text-align:center;border:1px solid gray}@media only screen and (max-width: 1104px){.editedGamePageContent[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 862px){.editedGamePageContent[_ngcontent-%COMP%]{width:calc(100% - 262px)}.explanation[_ngcontent-%COMP%]{max-width:360px}}@media only screen and (max-width: 813px){.editedGamePageContent[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}"]
                        }), n
                    })()
                }];
            let M = (() => {
                class n {}
                return n.\u0275fac = function(o) {
                    return new(o || n)
                }, n.\u0275mod = e.oAB({
                    type: n
                }), n.\u0275inj = e.cJS({
                    imports: [
                        [d.Bz.forChild(f)], d.Bz
                    ]
                }), n
            })();
            var C = l(56928);
            let A = (() => {
                class n {}
                return n.\u0275fac = function(o) {
                    return new(o || n)
                }, n.\u0275mod = e.oAB({
                    type: n
                }), n.\u0275inj = e.cJS({
                    imports: [
                        [a.ez, M, C.C]
                    ]
                }), n
            })()
        },
        56928: (h, g, l) => {
            l.d(g, {
                C: () => m
            });
            var a = l(69808),
                d = l(75326),
                e = l(72096);
            let m = (() => {
                class p {}
                return p.\u0275fac = function(i) {
                    return new(i || p)
                }, p.\u0275mod = e.oAB({
                    type: p
                }), p.\u0275inj = e.cJS({
                    imports: [
                        [a.ez, d.m], d.m
                    ]
                }), p
            })()
        },
        65534: (h, g, l) => {
            l.d(g, {
                G: () => e
            });
            var a = l(72096),
                d = l(69414);
            let e = (() => {
                class m {
                    constructor(r) {
                        this.router = r
                    }
                    ngOnInit() {}
                }
                return m.\u0275fac = function(r) {
                    return new(r || m)(a.Y36(d.F0))
                }, m.\u0275cmp = a.Xpm({
                    type: m,
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
                    template: function(r, i) {
                        1 & r && (a.TgZ(0, "div", 0)(1, "div", 1), a._uU(2, "Maplestory"), a.qZA(), a.TgZ(3, "p"), a._uU(4, "General"), a.qZA(), a.TgZ(5, "a", 2)(6, "span"), a._uU(7, "Home"), a.qZA()(), a._UZ(8, "div", 3), a.TgZ(9, "p"), a._uU(10, "Calculators"), a.qZA(), a.TgZ(11, "a", 2)(12, "span"), a._uU(13, "Arcane symbols"), a.qZA()(), a.TgZ(14, "a", 2)(15, "span"), a._uU(16, "Sacred symbols"), a.qZA()(), a.TgZ(17, "a", 2)(18, "span"), a._uU(19, "Item flames"), a.qZA()(), a.TgZ(20, "a", 2)(21, "span"), a._uU(22, "Weapon flame"), a.qZA()(), a._UZ(23, "div", 3), a.TgZ(24, "p"), a._uU(25, "Trackers"), a.qZA(), a.TgZ(26, "a", 2)(27, "span"), a._uU(28, "Dailies"), a.qZA()(), a.TgZ(29, "a", 2)(30, "span"), a._uU(31, "Weeklies"), a.qZA()(), a._UZ(32, "div", 3), a.TgZ(33, "a", 2)(34, "span"), a._uU(35, "Export settings"), a.qZA()(), a._UZ(36, "div", 3), a.TgZ(37, "p"), a._uU(38, "Enjoying my creations?"), a.qZA(), a.TgZ(39, "a", 4)(40, "span"), a._uU(41, "consider donating here"), a.qZA()()()), 2 & r && (a.xp6(5), a.Q6J("routerLink", "/games/maplestory/home"), a.xp6(1), a.ekj("sidenavbaractivelink", i.router.isActive("/games/maplestory/home", !1)), a.xp6(5), a.Q6J("routerLink", "/games/maplestory/arcane-symbols"), a.xp6(1), a.ekj("sidenavbaractivelink", i.router.isActive("/games/maplestory/arcane-symbols", !1)), a.xp6(2), a.Q6J("routerLink", "/games/maplestory/sacred-symbols"), a.xp6(1), a.ekj("sidenavbaractivelink", i.router.isActive("/games/maplestory/sacred-symbols", !1)), a.xp6(2), a.Q6J("routerLink", "/games/maplestory/item-flames"), a.xp6(1), a.ekj("sidenavbaractivelink", i.router.isActive("/games/maplestory/item-flames", !1)), a.xp6(2), a.Q6J("routerLink", "/games/maplestory/weapon-flame"), a.xp6(1), a.ekj("sidenavbaractivelink", i.router.isActive("/games/maplestory/weapon-flame", !1)), a.xp6(5), a.Q6J("routerLink", "/games/maplestory/dailies"), a.xp6(1), a.ekj("sidenavbaractivelink", i.router.isActive("/games/maplestory/dailies", !1)), a.xp6(2), a.Q6J("routerLink", "/games/maplestory/weeklies"), a.xp6(1), a.ekj("sidenavbaractivelink", i.router.isActive("/games/maplestory/weeklies", !1)), a.xp6(3), a.Q6J("routerLink", "/games/maplestory/settings"), a.xp6(1), a.ekj("sidenavbaractivelink", i.router.isActive("/games/maplestory/settings", !1)))
                    },
                    directives: [d.yS],
                    styles: [""]
                }), m
            })()
        }
    }
]);