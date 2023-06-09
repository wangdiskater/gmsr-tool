"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [636], {
        94636: (y, d, l) => {
            l.r(d), l.d(d, {
                MaplestorySacredSymbolsModule: () => O
            });
            var t = l(69808),
                p = l(69414);
            const g = JSON.parse('{"X":[{"level":1,"stat":500,"statXenon":240,"statDemonAvenger":10500,"sacredForce":10,"symbolExpRequired":29},{"level":2,"stat":700,"statXenon":336,"statDemonAvenger":14700,"sacredForce":20,"symbolExpRequired":76},{"level":3,"stat":900,"statXenon":432,"statDemonAvenger":18900,"sacredForce":30,"symbolExpRequired":141},{"level":4,"stat":1100,"statXenon":528,"statDemonAvenger":23100,"sacredForce":40,"symbolExpRequired":224},{"level":5,"stat":1300,"statXenon":624,"statDemonAvenger":27300,"sacredForce":50,"symbolExpRequired":325},{"level":6,"stat":1500,"statXenon":720,"statDemonAvenger":31500,"sacredForce":60,"symbolExpRequired":444},{"level":7,"stat":1700,"statXenon":816,"statDemonAvenger":35700,"sacredForce":70,"symbolExpRequired":581},{"level":8,"stat":1900,"statXenon":912,"statDemonAvenger":39900,"sacredForce":80,"symbolExpRequired":736},{"level":9,"stat":2100,"statXenon":1008,"statDemonAvenger":44100,"sacredForce":90,"symbolExpRequired":909},{"level":10,"stat":2300,"statXenon":1104,"statDemonAvenger":48300,"sacredForce":10,"symbolExpRequired":1100},{"level":11,"stat":2500,"statXenon":1200,"statDemonAvenger":52500,"sacredForce":110,"symbolExpRequired":0}]}'),
                m = JSON.parse('{"VY":[185400000,273900000,362400000,450900000,539400000,627900000,716400000,804900000,893400000,981900000,0],"Ou":[203900000,301200000,398500000,495800000,593100000,690400000,787700000,885000000,982300000,1079600000,0],"FP":[224500000,331600000,438700000,545800000,652900000,760000000,867100000,974200000,1081300000,1188400000,0]}');
            var e = l(72096),
                s = l(34182);
            const c = function() {
                return {
                    standalone: !0
                }
            };
            let h = (() => {
                class r {
                    constructor() {
                        this.valueChange = new e.vpe, this.cerniumDailyQuest = !0, this.burningCerniumDailyQuest = !0
                    }
                    ngOnInit() {}
                    calculateDailySymbols() {
                        var a = 0;
                        return this.cerniumDailyQuest && (a += 5), this.burningCerniumDailyQuest && (a += 5), a
                    }
                    valueChanged() {
                        this.valueChange.emit()
                    }
                }
                return r.\u0275fac = function(a) {
                    return new(a || r)
                }, r.\u0275cmp = e.Xpm({
                    type: r,
                    selectors: [
                        ["app-cernium"]
                    ],
                    outputs: {
                        valueChange: "valueChange"
                    },
                    decls: 10,
                    vars: 6,
                    consts: [
                        [1, "symbolInput"],
                        [1, "checkboxWrapper"],
                        ["name", "dailyQuest", "id", "dailyQuest", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "dailyQuest"],
                        ["name", "erdaSpectrum", "id", "erdaSpectrum", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "erdaSpectrum"]
                    ],
                    template: function(a, n) {
                        1 & a && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "input", 2), e.NdJ("change", function() {
                            return n.valueChanged()
                        })("ngModelChange", function(u) {
                            return n.cerniumDailyQuest = u
                        }), e.qZA(), e.TgZ(3, "label", 3), e._uU(4, "Cernium (5)"), e.qZA()()(), e.TgZ(5, "div", 0)(6, "div", 1)(7, "input", 4), e.NdJ("change", function() {
                            return n.valueChanged()
                        })("ngModelChange", function(u) {
                            return n.burningCerniumDailyQuest = u
                        }), e.qZA(), e.TgZ(8, "label", 5), e._uU(9, "Burning Cernium (5)"), e.qZA()()()), 2 & a && (e.xp6(2), e.Q6J("ngModel", n.cerniumDailyQuest)("ngModelOptions", e.DdM(4, c)), e.xp6(5), e.Q6J("ngModel", n.burningCerniumDailyQuest)("ngModelOptions", e.DdM(5, c)))
                    },
                    directives: [s.Wl, s.JJ, s.On],
                    styles: [".symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}"]
                }), r
            })();
            const _ = function() {
                return {
                    standalone: !0
                }
            };
            let v = (() => {
                class r {
                    constructor() {
                        this.valueChange = new e.vpe, this.clearOutput = new e.vpe, this.dailyQuest = !0
                    }
                    ngOnInit() {}
                    calculateDailySymbols() {
                        var a = 0;
                        return this.dailyQuest && (a += 5), a
                    }
                    valueChanged() {
                        this.valueChange.emit()
                    }
                    emitClearOutput() {
                        this.clearOutput.emit()
                    }
                }
                return r.\u0275fac = function(a) {
                    return new(a || r)
                }, r.\u0275cmp = e.Xpm({
                    type: r,
                    selectors: [
                        ["app-arcus"]
                    ],
                    outputs: {
                        valueChange: "valueChange",
                        clearOutput: "clearOutput"
                    },
                    decls: 5,
                    vars: 3,
                    consts: [
                        [1, "symbolInput"],
                        [1, "checkboxWrapper"],
                        ["name", "dailyQuest", "id", "dailyQuest", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "dailyQuest"]
                    ],
                    template: function(a, n) {
                        1 & a && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "input", 2), e.NdJ("change", function() {
                            return n.valueChanged()
                        })("ngModelChange", function(u) {
                            return n.dailyQuest = u
                        }), e.qZA(), e.TgZ(3, "label", 3), e._uU(4, "Daily Quest (5)"), e.qZA()()()), 2 & a && (e.xp6(2), e.Q6J("ngModel", n.dailyQuest)("ngModelOptions", e.DdM(2, _)))
                    },
                    directives: [s.Wl, s.JJ, s.On],
                    styles: [".symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}"]
                }), r
            })();
            const C = function() {
                return {
                    standalone: !0
                }
            };
            let b = (() => {
                class r {
                    constructor() {
                        this.valueChange = new e.vpe, this.clearOutput = new e.vpe, this.dailyQuest = !0
                    }
                    ngOnInit() {}
                    calculateDailySymbols() {
                        var a = 0;
                        return this.dailyQuest && (a += 5), a
                    }
                    valueChanged() {
                        this.valueChange.emit()
                    }
                    emitClearOutput() {
                        this.clearOutput.emit()
                    }
                }
                return r.\u0275fac = function(a) {
                    return new(a || r)
                }, r.\u0275cmp = e.Xpm({
                    type: r,
                    selectors: [
                        ["app-odium"]
                    ],
                    outputs: {
                        valueChange: "valueChange",
                        clearOutput: "clearOutput"
                    },
                    decls: 5,
                    vars: 3,
                    consts: [
                        [1, "symbolInput"],
                        [1, "checkboxWrapper"],
                        ["name", "dailyQuest", "id", "dailyQuest", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "dailyQuest"]
                    ],
                    template: function(a, n) {
                        1 & a && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "input", 2), e.NdJ("change", function() {
                            return n.valueChanged()
                        })("ngModelChange", function(u) {
                            return n.dailyQuest = u
                        }), e.qZA(), e.TgZ(3, "label", 3), e._uU(4, "Daily Quest (5)"), e.qZA()()()), 2 & a && (e.xp6(2), e.Q6J("ngModel", n.dailyQuest)("ngModelOptions", e.DdM(2, C)))
                    },
                    directives: [s.Wl, s.JJ, s.On],
                    styles: [".symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}"]
                }), r
            })();
            var S = l(22313),
                f = l(65534);

            function x(r, o) {
                if (1 & r) {
                    const a = e.EpF();
                    e.TgZ(0, "app-cernium", 32), e.NdJ("valueChange", function() {
                        return e.CHM(a), e.oxw().submit()
                    }), e.qZA()
                }
            }

            function M(r, o) {
                if (1 & r) {
                    const a = e.EpF();
                    e.TgZ(0, "app-arcus", 33), e.NdJ("valueChange", function() {
                        return e.CHM(a), e.oxw().submit()
                    })("clearOutput", function() {
                        return e.CHM(a), e.oxw().clearOutputVariables()
                    }), e.qZA()
                }
            }

            function D(r, o) {
                if (1 & r) {
                    const a = e.EpF();
                    e.TgZ(0, "app-odium", 33), e.NdJ("valueChange", function() {
                        return e.CHM(a), e.oxw().submit()
                    })("clearOutput", function() {
                        return e.CHM(a), e.oxw().clearOutputVariables()
                    }), e.qZA()
                }
            }
            const A = [{
                path: "",
                component: (() => {
                    class r {
                        constructor(a, n, i) {
                            this.changeDetector = a, this.titleService = n, this.metaService = i, this.sacredSymbolStats = g.X, this.sacredSymbolCost = m.VY, this.sacredSymbolNames = ["Cernium", "Arcus", "Odium"], this.currentLevel = 1, this.currentXp = 1, this.activeSymbolIndex = 0, this.daysLeft = 0, this.upgradeCost = 0, this.sacredForceGain = 0, this.statGain = 0, this.xenonStatGain = 0, this.demonAvengerHpGain = 0
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Maplestory Sacred Symbol Calculator | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "A sacred symbol calculator to determine the amount of time & money required to max out a symbol."
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "index, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "index, follow"
                            }), this.initialise()
                        }
                        initialise() {
                            localStorage.getItem("sacredSymbolSaveDataV2") ? this.sacredSymbolSaveData = JSON.parse(localStorage.getItem("sacredSymbolSaveDataV2")) : this.initiateData(), this.changeActiveSymbolIndex(0)
                        }
                        initiateData() {
                            this.sacredSymbolSaveData = {
                                cerniumLevel: 1,
                                cerniumExp: 1,
                                cerniumDailyQuest: !0,
                                burningCerniumDailyQuest: !1,
                                arcusLevel: 1,
                                arcusExp: 1,
                                arcusDailyQuest: !0,
                                odiumLevel: 1,
                                odiumExp: 1,
                                odiumDailyQuest: !0
                            }, localStorage.setItem("sacredSymbolSaveDataV2", JSON.stringify(this.sacredSymbolSaveData))
                        }
                        changeActiveSymbolIndex(a) {
                            switch (this.activeSymbolIndex = a, this.changeDetector.detectChanges(), this.activeSymbolIndex) {
                                case 0:
                                    this.sacredSymbolCost = m.VY, this.currentLevel = this.sacredSymbolSaveData.cerniumLevel, this.currentXp = this.sacredSymbolSaveData.cerniumExp, this.cerniumChild.cerniumDailyQuest = this.sacredSymbolSaveData.cerniumDailyQuest, this.cerniumChild.burningCerniumDailyQuest = this.sacredSymbolSaveData.burningCerniumDailyQuest;
                                    break;
                                case 1:
                                    this.sacredSymbolCost = m.Ou, this.currentLevel = this.sacredSymbolSaveData.arcusLevel, this.currentXp = this.sacredSymbolSaveData.arcusExp, this.arcusChild.dailyQuest = this.sacredSymbolSaveData.arcusDailyQuest;
                                    break;
                                case 2:
                                    this.sacredSymbolCost = m.FP, this.currentLevel = this.sacredSymbolSaveData.odiumLevel, this.currentXp = this.sacredSymbolSaveData.odiumExp, this.odiumChild.dailyQuest = this.sacredSymbolSaveData.odiumDailyQuest
                            }
                            this.clearOutputVariables(), this.submit()
                        }
                        submit() {
                            switch (this.activeSymbolIndex) {
                                case 0:
                                    this.calculateSymbolStats(this.cerniumChild.calculateDailySymbols());
                                    break;
                                case 1:
                                    this.calculateSymbolStats(this.arcusChild.calculateDailySymbols());
                                    break;
                                case 2:
                                    this.calculateSymbolStats(this.odiumChild.calculateDailySymbols())
                            }
                            this.updateSavedData()
                        }
                        currentLevelInput(a) {
                            if (null != a.data || 1 == a.target.value) {
                                if ("insertFromPaste" == a.inputType) return a.target.value = "", void this.clearOutputVariables();
                                isNaN(a.data) && (a.target.value = "", this.currentLevel = 1), (this.currentLevel < 1 && "" != a.target.value || this.currentLevel % 1 != 0) && (a.target.value = 1, this.currentLevel = 1), this.currentLevel > 11 && (a.target.value = 11, this.currentLevel = 11), 1 == this.currentLevel && 0 == this.currentXp && (this.currentXp = 1);
                                var n = 0;
                                for (let i = this.currentLevel - 1; i < 11; i++) n += this.sacredSymbolStats[i].symbolExpRequired;
                                this.currentXp > n && (this.currentXp = n), this.submit()
                            } else this.clearOutputVariables()
                        }
                        currentExpInput(a) {
                            if (null != a.data || "" != a.target.value) {
                                if ("insertFromPaste" == a.inputType) return a.target.value = "", void this.clearOutputVariables();
                                null == this.currentLevel && (this.currentLevel = 1), isNaN(a.data) && (a.target.value = "", this.currentXp = 1), (1 == this.currentLevel && this.currentXp < 1 && "" != a.target.value || this.currentXp % 1 != 0) && (a.target.value = 1, this.currentXp = 1), (1 != this.currentLevel && this.currentXp < 0 && "" != a.target.value || this.currentXp % 1 != 0) && (a.target.value = 0, this.currentXp = 0);
                                var n = 0;
                                for (let i = this.currentLevel - 1; i < 11; i++) n += this.sacredSymbolStats[i].symbolExpRequired;
                                this.currentXp > n && (a.target.value = n, this.currentXp = n), this.submit()
                            } else this.clearOutputVariables()
                        }
                        updateSavedData() {
                            switch (this.activeSymbolIndex) {
                                case 0:
                                    this.sacredSymbolSaveData.cerniumLevel = this.currentLevel, this.sacredSymbolSaveData.cerniumExp = this.currentXp, this.sacredSymbolSaveData.cerniumDailyQuest = this.cerniumChild.cerniumDailyQuest, this.sacredSymbolSaveData.burningCerniumDailyQuest = this.cerniumChild.burningCerniumDailyQuest;
                                    break;
                                case 1:
                                    this.sacredSymbolSaveData.arcusLevel = this.currentLevel, this.sacredSymbolSaveData.arcusExp = this.currentXp, this.sacredSymbolSaveData.arcusDailyQuest = this.arcusChild.dailyQuest;
                                    break;
                                case 2:
                                    this.sacredSymbolSaveData.odiumLevel = this.currentLevel, this.sacredSymbolSaveData.odiumExp = this.currentXp, this.sacredSymbolSaveData.odiumDailyQuest = this.odiumChild.dailyQuest
                            }
                            localStorage.setItem("sacredSymbolSaveDataV2", JSON.stringify(this.sacredSymbolSaveData))
                        }
                        calculateSymbolStats(a) {
                            var n = 0;
                            n = this.sacredSymbolStats[this.currentLevel - 1].symbolExpRequired - this.currentXp, this.upgradeCost = this.sacredSymbolCost[this.currentLevel - 1];
                            for (let i = this.currentLevel; i < 11; i++) n += this.sacredSymbolStats[i].symbolExpRequired, this.upgradeCost += this.sacredSymbolCost[i];
                            this.sacredForceGain = this.sacredSymbolStats[10].sacredForce - this.sacredSymbolStats[this.currentLevel - 1].sacredForce, this.statGain = this.sacredSymbolStats[10].stat - this.sacredSymbolStats[this.currentLevel - 1].stat, this.xenonStatGain = this.sacredSymbolStats[10].statXenon - this.sacredSymbolStats[this.currentLevel - 1].statXenon, this.demonAvengerHpGain = this.sacredSymbolStats[10].statDemonAvenger - this.sacredSymbolStats[this.currentLevel - 1].statDemonAvenger, this.daysLeft = Math.ceil(n / a)
                        }
                        clearOutputVariables() {
                            this.daysLeft = 0, this.upgradeCost = 0, this.sacredForceGain = 0, this.statGain = 0, this.xenonStatGain = 0, this.demonAvengerHpGain = 0
                        }
                    }
                    return r.\u0275fac = function(a) {
                        return new(a || r)(e.Y36(e.sBO), e.Y36(S.Dx), e.Y36(S.h_))
                    }, r.\u0275cmp = e.Xpm({
                        type: r,
                        selectors: [
                            ["app-maplestory-sacred-symbols"]
                        ],
                        viewQuery: function(a, n) {
                            if (1 & a && (e.Gf(h, 5), e.Gf(v, 5), e.Gf(b, 5)), 2 & a) {
                                let i;
                                e.iGM(i = e.CRH()) && (n.cerniumChild = i.first), e.iGM(i = e.CRH()) && (n.arcusChild = i.first), e.iGM(i = e.CRH()) && (n.odiumChild = i.first)
                            }
                        },
                        decls: 66,
                        vars: 30,
                        consts: [
                            [1, "editedGamePageContent"],
                            [1, "symbolNavigationBar"],
                            [3, "ngClass", "click"],
                            [1, "imgWrapper"],
                            ["src", "assets/Games/Maplestory/SymbolImages/Cernium.png", "alt", "cernium"],
                            ["src", "assets/Games/Maplestory/SymbolImages/Arcus.png", "alt", "arcus"],
                            ["src", "assets/Games/Maplestory/SymbolImages/Odium.png", "alt", "odium"],
                            [1, "symbolTitle"],
                            [3, "ngSubmit"],
                            [1, "symbolInput"],
                            [1, "inputLabelWrapper"],
                            ["for", "currentLevel"],
                            ["name", "currentLevel", "id", "currentLevel", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            ["for", "currentXp"],
                            ["name", "currentXp", "id", "currentXp", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            [1, "symbolDailyTitle"],
                            [3, "valueChange", 4, "ngIf"],
                            [3, "valueChange", "clearOutput", 4, "ngIf"],
                            [1, "outputWrapper"],
                            [1, "outputLabelWrapper"],
                            ["for", "daysLeft"],
                            ["name", "daysLeft", "id", "daysLeft", "type", "text", "disabled", "", 1, "textInput", 3, "value"],
                            ["for", "upgradeCost"],
                            ["name", "upgradeCost", "id", "upgradeCost", "type", "text", "disabled", "", 1, "textInput", 3, "value"],
                            ["for", "sacredForceGain"],
                            ["name", "sacredForceGain", "id", "sacredForceGain", "type", "text", "disabled", "", 1, "textInput", 3, "value"],
                            ["for", "statGain"],
                            ["name", "statGain", "id", "statGain", "type", "text", "disabled", "", 1, "textInput", 3, "value"],
                            ["for", "xenonStatGain"],
                            ["name", "xenonStatGain", "id", "xenonStatGain", "type", "text", "disabled", "", 1, "textInput", 3, "value"],
                            ["for", "demonAvengerHpGain"],
                            ["name", "demonAvengerHpGain", "id", "demonAvengerHpGain", "type", "text", "disabled", "", 1, "textInput", 3, "value"],
                            [3, "valueChange"],
                            [3, "valueChange", "clearOutput"]
                        ],
                        template: function(a, n) {
                            1 & a && (e._UZ(0, "app-maplestory-side-navigation"), e.TgZ(1, "div", 0)(2, "div", 1)(3, "a", 2), e.NdJ("click", function() {
                                return n.changeActiveSymbolIndex(0)
                            }), e.TgZ(4, "div", 3), e._UZ(5, "img", 4), e.qZA()(), e.TgZ(6, "a", 2), e.NdJ("click", function() {
                                return n.changeActiveSymbolIndex(1)
                            }), e.TgZ(7, "div", 3), e._UZ(8, "img", 5), e.qZA()(), e.TgZ(9, "a", 2), e.NdJ("click", function() {
                                return n.changeActiveSymbolIndex(2)
                            }), e.TgZ(10, "div", 3), e._UZ(11, "img", 6), e.qZA()()(), e.TgZ(12, "p", 7), e._uU(13), e.qZA(), e.TgZ(14, "form", 8), e.NdJ("ngSubmit", function() {
                                return n.submit()
                            }), e.TgZ(15, "div", 9)(16, "div", 10)(17, "label", 11), e._uU(18, "Symbol Level"), e.qZA(), e.TgZ(19, "input", 12), e.NdJ("ngModelChange", function(u) {
                                return n.currentLevel = u
                            })("input", function(u) {
                                return n.currentLevelInput(u)
                            }), e.qZA()()(), e.TgZ(20, "div", 9)(21, "div", 10)(22, "label", 13), e._uU(23, "Symbol Experience"), e.qZA(), e.TgZ(24, "input", 14), e.NdJ("ngModelChange", function(u) {
                                return n.currentXp = u
                            })("input", function(u) {
                                return n.currentExpInput(u)
                            }), e.qZA()()(), e.TgZ(25, "p", 15), e._uU(26, "Daily symbols"), e.qZA(), e.YNc(27, x, 1, 0, "app-cernium", 16), e.YNc(28, M, 1, 0, "app-arcus", 17), e.YNc(29, D, 1, 0, "app-odium", 17), e.qZA(), e.TgZ(30, "div", 18)(31, "div", 9)(32, "div", 19)(33, "label", 20), e._uU(34, "Day(s) to Level 11"), e.qZA(), e._UZ(35, "input", 21), e.qZA()(), e.TgZ(36, "div", 9)(37, "div", 19)(38, "label", 22), e._uU(39, "Remaining Cost to Level 11"), e.qZA(), e._UZ(40, "input", 23), e.ALo(41, "number"), e.qZA()(), e.TgZ(42, "div", 9)(43, "div", 19)(44, "label", 24), e._uU(45, "Remaining Sacred Force to gain"), e.qZA(), e._UZ(46, "input", 25), e.ALo(47, "number"), e.qZA()(), e.TgZ(48, "div", 9)(49, "div", 19)(50, "label", 26), e._uU(51, "Remaining Stat to Gain"), e.qZA(), e._UZ(52, "input", 27), e.ALo(53, "number"), e.qZA()(), e.TgZ(54, "div", 9)(55, "div", 19)(56, "label", 28), e._uU(57, "Remaining All Stat to Gain (Xenon)"), e.qZA(), e._UZ(58, "input", 29), e.ALo(59, "number"), e.qZA()(), e.TgZ(60, "div", 9)(61, "div", 19)(62, "label", 30), e._uU(63, "Remaining HP to Gain (Demon Avenger)"), e.qZA(), e._UZ(64, "input", 31), e.ALo(65, "number"), e.qZA()()()()), 2 & a && (e.xp6(3), e.Q6J("ngClass", 0 == n.activeSymbolIndex ? "selected" : "notSelected"), e.xp6(3), e.Q6J("ngClass", 1 == n.activeSymbolIndex ? "selected" : "notSelected"), e.xp6(3), e.Q6J("ngClass", 2 == n.activeSymbolIndex ? "selected" : "notSelected"), e.xp6(4), e.Oqu(n.sacredSymbolNames[n.activeSymbolIndex]), e.xp6(6), e.Q6J("ngModel", n.currentLevel), e.xp6(5), e.Q6J("ngModel", n.currentXp), e.xp6(3), e.Q6J("ngIf", 0 == n.activeSymbolIndex), e.xp6(1), e.Q6J("ngIf", 1 == n.activeSymbolIndex), e.xp6(1), e.Q6J("ngIf", 2 == n.activeSymbolIndex), e.xp6(6), e.MGl("value", "", n.daysLeft, " Day(s)"), e.xp6(5), e.MGl("value", "", e.xi3(41, 15, n.upgradeCost, "0.0-0"), " Mesos"), e.xp6(6), e.MGl("value", "", e.xi3(47, 18, n.sacredForceGain, "0.0-0"), " SF"), e.xp6(6), e.MGl("value", "", e.xi3(53, 21, n.statGain, "0.0-0"), " Stat"), e.xp6(6), e.MGl("value", "", e.xi3(59, 24, n.xenonStatGain, "0.0-0"), " AS"), e.xp6(6), e.MGl("value", "", e.xi3(65, 27, n.demonAvengerHpGain, "0.0-0"), " HP"))
                        },
                        directives: [f.G, t.mk, s._Y, s.JL, s.F, s.wV, s.Fj, s.JJ, s.On, t.O5, h, v, b],
                        pipes: [t.JJ],
                        styles: [".symbolNavigationBar[_ngcontent-%COMP%]{text-align:center;height:57px}.symbolTitle[_ngcontent-%COMP%]{text-align:center;font-size:30px;margin:8px 0}.symbolNavigationBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;width:33px;height:33px;background-color:var(--background-color);margin:5px;padding:5px}.notSelected[_ngcontent-%COMP%]{border:2px solid var(--game-page-border-color)}.selected[_ngcontent-%COMP%]{border:2px solid var(--game-page-accent-color)}.symbolNavigationBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:var(--radial-color-1);background:radial-gradient(ellipse at center,var(--radial-color-1) 0%,var(--radial-color-2) 38%,var(--radial-color-3) 70%,var(--radial-color-4) 100%)}.symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}.outputWrapper[_ngcontent-%COMP%]{margin-top:20px}.editedGamePageContent[_ngcontent-%COMP%]{width:600px;margin:8px auto;background-color:var(--game-page-background-color);border:1px solid var(--game-page-border-color);min-height:calc(100vh - 72px)}@media only screen and (max-width: 1104px){.editedGamePageContent[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 862px){.editedGamePageContent[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width: 813px){.editedGamePageContent[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}"]
                    }), r
                })()
            }];
            let Z = (() => {
                class r {}
                return r.\u0275fac = function(a) {
                    return new(a || r)
                }, r.\u0275mod = e.oAB({
                    type: r
                }), r.\u0275inj = e.cJS({
                    imports: [
                        [p.Bz.forChild(A)], p.Bz
                    ]
                }), r
            })();
            var T = l(56928);
            let O = (() => {
                class r {}
                return r.\u0275fac = function(a) {
                    return new(a || r)
                }, r.\u0275mod = e.oAB({
                    type: r
                }), r.\u0275inj = e.cJS({
                    imports: [
                        [t.ez, Z, T.C]
                    ]
                }), r
            })()
        },
        56928: (y, d, l) => {
            l.d(d, {
                C: () => m
            });
            var t = l(69808),
                p = l(75326),
                g = l(72096);
            let m = (() => {
                class e {}
                return e.\u0275fac = function(c) {
                    return new(c || e)
                }, e.\u0275mod = g.oAB({
                    type: e
                }), e.\u0275inj = g.cJS({
                    imports: [
                        [t.ez, p.m], p.m
                    ]
                }), e
            })()
        },
        65534: (y, d, l) => {
            l.d(d, {
                G: () => g
            });
            var t = l(72096),
                p = l(69414);
            let g = (() => {
                class m {
                    constructor(s) {
                        this.router = s
                    }
                    ngOnInit() {}
                }
                return m.\u0275fac = function(s) {
                    return new(s || m)(t.Y36(p.F0))
                }, m.\u0275cmp = t.Xpm({
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
                    template: function(s, c) {
                        1 & s && (t.TgZ(0, "div", 0)(1, "div", 1), t._uU(2, "Maplestory"), t.qZA(), t.TgZ(3, "p"), t._uU(4, "General"), t.qZA(), t.TgZ(5, "a", 2)(6, "span"), t._uU(7, "Home"), t.qZA()(), t._UZ(8, "div", 3), t.TgZ(9, "p"), t._uU(10, "Calculators"), t.qZA(), t.TgZ(11, "a", 2)(12, "span"), t._uU(13, "Arcane symbols"), t.qZA()(), t.TgZ(14, "a", 2)(15, "span"), t._uU(16, "Sacred symbols"), t.qZA()(), t.TgZ(17, "a", 2)(18, "span"), t._uU(19, "Item flames"), t.qZA()(), t.TgZ(20, "a", 2)(21, "span"), t._uU(22, "Weapon flame"), t.qZA()(), t._UZ(23, "div", 3), t.TgZ(24, "p"), t._uU(25, "Trackers"), t.qZA(), t.TgZ(26, "a", 2)(27, "span"), t._uU(28, "Dailies"), t.qZA()(), t.TgZ(29, "a", 2)(30, "span"), t._uU(31, "Weeklies"), t.qZA()(), t._UZ(32, "div", 3), t.TgZ(33, "a", 2)(34, "span"), t._uU(35, "Export settings"), t.qZA()(), t._UZ(36, "div", 3), t.TgZ(37, "p"), t._uU(38, "Enjoying my creations?"), t.qZA(), t.TgZ(39, "a", 4)(40, "span"), t._uU(41, "consider donating here"), t.qZA()()()), 2 & s && (t.xp6(5), t.Q6J("routerLink", "/games/maplestory/home"), t.xp6(1), t.ekj("sidenavbaractivelink", c.router.isActive("/games/maplestory/home", !1)), t.xp6(5), t.Q6J("routerLink", "/games/maplestory/arcane-symbols"), t.xp6(1), t.ekj("sidenavbaractivelink", c.router.isActive("/games/maplestory/arcane-symbols", !1)), t.xp6(2), t.Q6J("routerLink", "/games/maplestory/sacred-symbols"), t.xp6(1), t.ekj("sidenavbaractivelink", c.router.isActive("/games/maplestory/sacred-symbols", !1)), t.xp6(2), t.Q6J("routerLink", "/games/maplestory/item-flames"), t.xp6(1), t.ekj("sidenavbaractivelink", c.router.isActive("/games/maplestory/item-flames", !1)), t.xp6(2), t.Q6J("routerLink", "/games/maplestory/weapon-flame"), t.xp6(1), t.ekj("sidenavbaractivelink", c.router.isActive("/games/maplestory/weapon-flame", !1)), t.xp6(5), t.Q6J("routerLink", "/games/maplestory/dailies"), t.xp6(1), t.ekj("sidenavbaractivelink", c.router.isActive("/games/maplestory/dailies", !1)), t.xp6(2), t.Q6J("routerLink", "/games/maplestory/weeklies"), t.xp6(1), t.ekj("sidenavbaractivelink", c.router.isActive("/games/maplestory/weeklies", !1)), t.xp6(3), t.Q6J("routerLink", "/games/maplestory/settings"), t.xp6(1), t.ekj("sidenavbaractivelink", c.router.isActive("/games/maplestory/settings", !1)))
                    },
                    directives: [p.yS],
                    styles: [""]
                }), m
            })()
        }
    }
]);