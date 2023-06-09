"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [987], {
        54987: (d, m, o) => {
            o.r(m), o.d(m, {
                MaplestorySettingsModule: () => f
            });
            var e = o(69808),
                p = o(69414),
                t = o(72096),
                g = o(22313),
                l = o(65534);
            const r = [{
                path: "",
                component: (() => {
                    class a {
                        constructor(n, s) {
                            this.titleService = n, this.metaService = s, this.settingsData = {
                                dailiesDataV3: "",
                                weekliesDataV3: "",
                                arcaneSymbolSaveData: "",
                                flameData: "",
                                weaponFlameData: ""
                            }
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Maplestory Settings Export | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "The page for exporting your saved settings for the various Maplestory calculators and trackers."
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "index, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "index, follow"
                            })
                        }
                        exportSettings() {
                            localStorage.getItem("dailiesDataV3") && (this.settingsData.dailiesDataV3 = localStorage.getItem("dailiesDataV3")), localStorage.getItem("weekliesDataV3") && (this.settingsData.weekliesDataV3 = localStorage.getItem("weekliesDataV3")), localStorage.getItem("arcaneSymbolSaveData") && (this.settingsData.arcaneSymbolSaveData = localStorage.getItem("arcaneSymbolSaveData")), localStorage.getItem("flameData") && (this.settingsData.flameData = localStorage.getItem("flameData")), localStorage.getItem("weaponFlameData") && (this.settingsData.weaponFlameData = localStorage.getItem("weaponFlameData"));
                            var n = document.createElement("a");
                            n.setAttribute("href", "data:text/plain;charset=utf-u," + encodeURIComponent(JSON.stringify(this.settingsData))), n.setAttribute("download", "MapleTrackerSettings.json"), n.click(), this.clearSettingsData()
                        }
                        importSettings(n) {
                            var s = n.target.files[0];
                            let i = new FileReader;
                            i.onload = _ => {
                                try {
                                    this.settingsData = JSON.parse(i.result.toString()), this.settingsData.dailiesDataV3 && localStorage.setItem("dailiesDataV3", this.settingsData.dailiesDataV3), this.settingsData.weekliesDataV3 && localStorage.setItem("weekliesDataV3", this.settingsData.weekliesDataV3), this.settingsData.arcaneSymbolSaveData && localStorage.setItem("arcaneSymbolSaveData", this.settingsData.arcaneSymbolSaveData), this.settingsData.flameData && localStorage.setItem("flameData", this.settingsData.flameData), this.settingsData.weaponFlameData && localStorage.setItem("weaponFlameData", this.settingsData.weaponFlameData), alert("The settings have been successfully imported.")
                                } catch (v) {
                                    alert("Something went wrong when importing the settings, make sure you are selecting the correct file.")
                                }
                            }, i.readAsText(s), this.clearSettingsData()
                        }
                        resetData(n) {
                            localStorage.getItem(n) && localStorage.removeItem(n)
                        }
                        clearSettingsData() {
                            this.settingsData = {
                                dailiesDataV3: "",
                                weekliesDataV3: "",
                                arcaneSymbolSaveData: "",
                                flameData: "",
                                weaponFlameData: ""
                            }
                        }
                    }
                    return a.\u0275fac = function(n) {
                        return new(n || a)(t.Y36(g.Dx), t.Y36(g.h_))
                    }, a.\u0275cmp = t.Xpm({
                        type: a,
                        selectors: [
                            ["app-maplestory-settings"]
                        ],
                        decls: 45,
                        vars: 0,
                        consts: [
                            [1, "contentPageOverride"],
                            [1, "title"],
                            [1, "intro"],
                            [1, "buttonWrapper"],
                            [1, "buttonStyle", 3, "click"],
                            ["for", "file-upload", 1, "buttonStyle"],
                            ["id", "file-upload", "type", "file", 3, "change"],
                            [1, "title", "title2"],
                            [1, "reset"],
                            [1, "resetTitle"]
                        ],
                        template: function(n, s) {
                            1 & n && (t._UZ(0, "app-maplestory-side-navigation"), t.TgZ(1, "div", 0)(2, "p", 1), t._uU(3, "Settings Export"), t.qZA(), t.TgZ(4, "p", 2), t._uU(5, "Create an export if your settings or import previously saved settings."), t.qZA(), t.TgZ(6, "div", 3)(7, "button", 4), t.NdJ("click", function() {
                                return s.exportSettings()
                            }), t._uU(8, " Export Settings "), t.qZA(), t.TgZ(9, "label", 5), t._uU(10, " Import Settings "), t.qZA(), t.TgZ(11, "input", 6), t.NdJ("change", function(_) {
                                return s.importSettings(_)
                            }), t.qZA()(), t.TgZ(12, "p", 7), t._uU(13, "Reset saved data"), t.qZA(), t.TgZ(14, "p", 2), t._uU(15, "Experiencing issues with a tracker or calculator? Use this to reset the saved data, if this doesn't fix the issue please contact me on discord so i can look into it (StarLines#0001)."), t.qZA(), t.TgZ(16, "div", 8)(17, "p", 9), t._uU(18, "Calculators"), t.qZA(), t.TgZ(19, "p"), t._uU(20, "Arcane symbols"), t.qZA(), t.TgZ(21, "button", 4), t.NdJ("click", function() {
                                return s.resetData("arcaneSymbolSaveData")
                            }), t._uU(22, "Reset"), t.qZA(), t.TgZ(23, "p"), t._uU(24, "Sacred symbols"), t.qZA(), t.TgZ(25, "button", 4), t.NdJ("click", function() {
                                return s.resetData("sacredSymbolSaveDataV2")
                            }), t._uU(26, "Reset"), t.qZA(), t.TgZ(27, "p"), t._uU(28, "Item flame"), t.qZA(), t.TgZ(29, "button", 4), t.NdJ("click", function() {
                                return s.resetData("flameData")
                            }), t._uU(30, "Reset"), t.qZA(), t.TgZ(31, "p"), t._uU(32, "Weapon flame"), t.qZA(), t.TgZ(33, "button", 4), t.NdJ("click", function() {
                                return s.resetData("weaponFlameData")
                            }), t._uU(34, "Reset"), t.qZA(), t.TgZ(35, "p", 9), t._uU(36, "Trackers"), t.qZA(), t.TgZ(37, "p"), t._uU(38, "Dailies"), t.qZA(), t.TgZ(39, "button", 4), t.NdJ("click", function() {
                                return s.resetData("dailiesData")
                            })("click", function() {
                                return s.resetData("dailiesDataV3")
                            }), t._uU(40, "Reset"), t.qZA(), t.TgZ(41, "p"), t._uU(42, "Weeklies"), t.qZA(), t.TgZ(43, "button", 4), t.NdJ("click", function() {
                                return s.resetData("weekliesData")
                            })("click", function() {
                                return s.resetData("weekliesDataV3")
                            }), t._uU(44, "Reset"), t.qZA()()())
                        },
                        directives: [l.G],
                        styles: [".contentPageOverride[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:5px 0 0;text-align:center;font-size:25px;text-decoration:underline}.contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 72px);margin:8px auto}.contentPageOverride[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.contentPageOverride[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]{margin-left:50px;margin-right:50px;font-size:18px;text-align:center;margin-bottom:5px}.buttonWrapper[_ngcontent-%COMP%]{text-align:center}.title2[_ngcontent-%COMP%]{padding-top:30px}input[type=file][_ngcontent-%COMP%]{display:none}.reset[_ngcontent-%COMP%]{width:210px;margin:0 auto}.reset[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:150px;display:inline-block}.reset[_ngcontent-%COMP%]   .resetTitle[_ngcontent-%COMP%]{width:210px;text-align:center;margin-bottom:0;font-size:20px}.reset[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:60px;margin-right:0}@media only screen and (max-width: 1305px){.contentPageOverride[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 1061px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width: 813px){.contentPageOverride[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}"]
                    }), a
                })()
            }];
            let y = (() => {
                class a {}
                return a.\u0275fac = function(n) {
                    return new(n || a)
                }, a.\u0275mod = t.oAB({
                    type: a
                }), a.\u0275inj = t.cJS({
                    imports: [
                        [p.Bz.forChild(r)], p.Bz
                    ]
                }), a
            })();
            var S = o(56928);
            let f = (() => {
                class a {}
                return a.\u0275fac = function(n) {
                    return new(n || a)
                }, a.\u0275mod = t.oAB({
                    type: a
                }), a.\u0275inj = t.cJS({
                    imports: [
                        [e.ez, y, S.C]
                    ]
                }), a
            })()
        },
        56928: (d, m, o) => {
            o.d(m, {
                C: () => g
            });
            var e = o(69808),
                p = o(75326),
                t = o(72096);
            let g = (() => {
                class l {}
                return l.\u0275fac = function(r) {
                    return new(r || l)
                }, l.\u0275mod = t.oAB({
                    type: l
                }), l.\u0275inj = t.cJS({
                    imports: [
                        [e.ez, p.m], p.m
                    ]
                }), l
            })()
        },
        65534: (d, m, o) => {
            o.d(m, {
                G: () => t
            });
            var e = o(72096),
                p = o(69414);
            let t = (() => {
                class g {
                    constructor(c) {
                        this.router = c
                    }
                    ngOnInit() {}
                }
                return g.\u0275fac = function(c) {
                    return new(c || g)(e.Y36(p.F0))
                }, g.\u0275cmp = e.Xpm({
                    type: g,
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
                    template: function(c, r) {
                        1 & c && (e.TgZ(0, "div", 0)(1, "div", 1), e._uU(2, "Maplestory"), e.qZA(), e.TgZ(3, "p"), e._uU(4, "General"), e.qZA(), e.TgZ(5, "a", 2)(6, "span"), e._uU(7, "Home"), e.qZA()(), e._UZ(8, "div", 3), e.TgZ(9, "p"), e._uU(10, "Calculators"), e.qZA(), e.TgZ(11, "a", 2)(12, "span"), e._uU(13, "Arcane symbols"), e.qZA()(), e.TgZ(14, "a", 2)(15, "span"), e._uU(16, "Sacred symbols"), e.qZA()(), e.TgZ(17, "a", 2)(18, "span"), e._uU(19, "Item flames"), e.qZA()(), e.TgZ(20, "a", 2)(21, "span"), e._uU(22, "Weapon flame"), e.qZA()(), e._UZ(23, "div", 3), e.TgZ(24, "p"), e._uU(25, "Trackers"), e.qZA(), e.TgZ(26, "a", 2)(27, "span"), e._uU(28, "Dailies"), e.qZA()(), e.TgZ(29, "a", 2)(30, "span"), e._uU(31, "Weeklies"), e.qZA()(), e._UZ(32, "div", 3), e.TgZ(33, "a", 2)(34, "span"), e._uU(35, "Export settings"), e.qZA()(), e._UZ(36, "div", 3), e.TgZ(37, "p"), e._uU(38, "Enjoying my creations?"), e.qZA(), e.TgZ(39, "a", 4)(40, "span"), e._uU(41, "consider donating here"), e.qZA()()()), 2 & c && (e.xp6(5), e.Q6J("routerLink", "/games/maplestory/home"), e.xp6(1), e.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/home", !1)), e.xp6(5), e.Q6J("routerLink", "/games/maplestory/arcane-symbols"), e.xp6(1), e.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/arcane-symbols", !1)), e.xp6(2), e.Q6J("routerLink", "/games/maplestory/sacred-symbols"), e.xp6(1), e.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/sacred-symbols", !1)), e.xp6(2), e.Q6J("routerLink", "/games/maplestory/item-flames"), e.xp6(1), e.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/item-flames", !1)), e.xp6(2), e.Q6J("routerLink", "/games/maplestory/weapon-flame"), e.xp6(1), e.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/weapon-flame", !1)), e.xp6(5), e.Q6J("routerLink", "/games/maplestory/dailies"), e.xp6(1), e.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/dailies", !1)), e.xp6(2), e.Q6J("routerLink", "/games/maplestory/weeklies"), e.xp6(1), e.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/weeklies", !1)), e.xp6(3), e.Q6J("routerLink", "/games/maplestory/settings"), e.xp6(1), e.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/settings", !1)))
                    },
                    directives: [p.yS],
                    styles: [""]
                }), g
            })()
        }
    }
]);