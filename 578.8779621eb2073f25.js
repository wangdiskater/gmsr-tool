"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [578], {
        93578: (g, h, u) => {
            u.r(h), u.d(h, {
                MaplestoryArcaneSymbolsModule: () => U
            });
            var n = u(69808),
                m = u(69414);
            const d = JSON.parse('{"x":[{"level":1,"stat":300,"statXenon":144,"statDemonAvenger":6300,"arcaneForce":30,"symbolExpRequired":12},{"level":2,"stat":400,"statXenon":192,"statDemonAvenger":8400,"arcaneForce":40,"symbolExpRequired":15},{"level":3,"stat":500,"statXenon":240,"statDemonAvenger":10500,"arcaneForce":50,"symbolExpRequired":20},{"level":4,"stat":600,"statXenon":288,"statDemonAvenger":12600,"arcaneForce":60,"symbolExpRequired":27},{"level":5,"stat":700,"statXenon":336,"statDemonAvenger":14700,"arcaneForce":70,"symbolExpRequired":36},{"level":6,"stat":800,"statXenon":384,"statDemonAvenger":16800,"arcaneForce":80,"symbolExpRequired":47},{"level":7,"stat":900,"statXenon":432,"statDemonAvenger":18900,"arcaneForce":90,"symbolExpRequired":60},{"level":8,"stat":1000,"statXenon":480,"statDemonAvenger":21000,"arcaneForce":100,"symbolExpRequired":75},{"level":9,"stat":1100,"statXenon":528,"statDemonAvenger":23100,"arcaneForce":110,"symbolExpRequired":92},{"level":10,"stat":1200,"statXenon":576,"statDemonAvenger":25200,"arcaneForce":120,"symbolExpRequired":111},{"level":11,"stat":1300,"statXenon":624,"statDemonAvenger":27300,"arcaneForce":130,"symbolExpRequired":132},{"level":12,"stat":1400,"statXenon":672,"statDemonAvenger":29400,"arcaneForce":140,"symbolExpRequired":155},{"level":13,"stat":1500,"statXenon":720,"statDemonAvenger":31500,"arcaneForce":150,"symbolExpRequired":180},{"level":14,"stat":1600,"statXenon":768,"statDemonAvenger":33600,"arcaneForce":160,"symbolExpRequired":207},{"level":15,"stat":1700,"statXenon":816,"statDemonAvenger":35700,"arcaneForce":170,"symbolExpRequired":236},{"level":16,"stat":1800,"statXenon":864,"statDemonAvenger":37800,"arcaneForce":180,"symbolExpRequired":267},{"level":17,"stat":1900,"statXenon":912,"statDemonAvenger":39900,"arcaneForce":190,"symbolExpRequired":300},{"level":18,"stat":2000,"statXenon":960,"statDemonAvenger":42000,"arcaneForce":200,"symbolExpRequired":335},{"level":19,"stat":2100,"statXenon":1008,"statDemonAvenger":44100,"arcaneForce":210,"symbolExpRequired":372},{"level":20,"stat":2200,"statXenon":1056,"statDemonAvenger":46200,"arcaneForce":220,"symbolExpRequired":0}]}'),
                c = JSON.parse('{"sg":[7070000,11030000,14990000,18950000,22910000,26870000,30830000,34790000,38750000,42710000,46670000,50630000,54590000,58550000,62510000,66470000,70430000,74390000,78350000,0],"tK":[10840000,15460000,20080000,24700000,29320000,33940000,38560000,43180000,47800000,52420000,57040000,61660000,66280000,70900000,75520000,80140000,84760000,89380000,94000000,0],"QA":[14610000,19890000,25170000,30450000,35730000,41010000,46290000,51570000,56850000,62130000,67410000,72690000,77970000,83250000,88530000,93810000,99090000,104370000,109650000,0],"BV":[17136000,23076000,29016000,34956000,40896000,46836000,52776000,58716000,64656000,70596000,76536000,82476000,88416000,94356000,100296000,106236000,112176000,118116000,124056000,0],"se":[17136000,23076000,29016000,34956000,40896000,46836000,52776000,58716000,64656000,70596000,76536000,82476000,88416000,94356000,100296000,106236000,112176000,118116000,124056000,0],"Lf":[17136000,23076000,29016000,34956000,40896000,46836000,52776000,58716000,64656000,70596000,76536000,82476000,88416000,94356000,100296000,106236000,112176000,118116000,124056000,0]}');
            var e = u(72096),
                l = u(34182);
            const p = function() {
                return {
                    standalone: !0
                }
            };
            let y = (() => {
                class i {
                    constructor() {
                        this.valueChange = new e.vpe, this.dailyQuest = !0, this.erdaSpectrum = !0, this.reverseCity = !1
                    }
                    ngOnInit() {}
                    calculateDailySymbols() {
                        var a = 0;
                        return this.dailyQuest && (a += 8), this.erdaSpectrum && (a += 6), this.reverseCity && (a += 8), a
                    }
                    valueChanged() {
                        this.valueChange.emit()
                    }
                }
                return i.\u0275fac = function(a) {
                    return new(a || i)
                }, i.\u0275cmp = e.Xpm({
                    type: i,
                    selectors: [
                        ["app-vanishing-journey"]
                    ],
                    outputs: {
                        valueChange: "valueChange"
                    },
                    decls: 17,
                    vars: 9,
                    consts: [
                        [1, "symbolInput"],
                        [1, "checkboxWrapper"],
                        ["name", "dailyQuest", "id", "dailyQuest", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "dailyQuest"],
                        ["name", "erdaSpectrum", "id", "erdaSpectrum", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "erdaSpectrum"],
                        [1, "symbolDailyTitle"],
                        ["name", "reverseCity", "id", "reverseCity", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "reverseCity"]
                    ],
                    template: function(a, t) {
                        1 & a && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "input", 2), e.NdJ("change", function() {
                            return t.valueChanged()
                        })("ngModelChange", function(s) {
                            return t.dailyQuest = s
                        }), e.qZA(), e.TgZ(3, "label", 3), e._uU(4, "Daily Quest (8)"), e.qZA()()(), e.TgZ(5, "div", 0)(6, "div", 1)(7, "input", 4), e.NdJ("change", function() {
                            return t.valueChanged()
                        })("ngModelChange", function(s) {
                            return t.erdaSpectrum = s
                        }), e.qZA(), e.TgZ(8, "label", 5), e._uU(9, "Erda Spectrum (6)"), e.qZA()()(), e.TgZ(10, "p", 6), e._uU(11, "Daily quest reward x2"), e.qZA(), e.TgZ(12, "div", 0)(13, "div", 1)(14, "input", 7), e.NdJ("change", function() {
                            return t.valueChanged()
                        })("ngModelChange", function(s) {
                            return t.reverseCity = s
                        }), e.qZA(), e.TgZ(15, "label", 8), e._uU(16, "Reverse City Unlocked"), e.qZA()()()), 2 & a && (e.xp6(2), e.Q6J("ngModel", t.dailyQuest)("ngModelOptions", e.DdM(6, p)), e.xp6(5), e.Q6J("ngModel", t.erdaSpectrum)("ngModelOptions", e.DdM(7, p)), e.xp6(7), e.Q6J("ngModel", t.reverseCity)("ngModelOptions", e.DdM(8, p)))
                    },
                    directives: [l.Wl, l.JJ, l.On],
                    styles: [".symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}"]
                }), i
            })();
            const v = function() {
                return {
                    standalone: !0
                }
            };
            let _ = (() => {
                class i {
                    constructor() {
                        this.valueChange = new e.vpe, this.clearOutput = new e.vpe, this.dailyQuest = !0, this.hungryMuto = 0, this.yumYumIsland = !1
                    }
                    ngOnInit() {}
                    hungryMutoInput(a) {
                        null == a.data && "" == a.target.value || "insertFromPaste" == a.inputType ? this.emitClearOutput() : (isNaN(a.data) && (a.target.value = 0, this.hungryMuto = 0), (this.hungryMuto < 0 && "" != a.target.value || this.hungryMuto % 1 != 0) && (a.target.value = 0, this.hungryMuto = 0), this.hungryMuto > 15 && (a.target.value = 15, this.hungryMuto = 15), this.valueChanged())
                    }
                    calculateDailySymbols() {
                        var a = 0;
                        return this.dailyQuest && (a += 4), a += +this.hungryMuto, this.yumYumIsland && (a += 4), a
                    }
                    valueChanged() {
                        this.valueChange.emit()
                    }
                    emitClearOutput() {
                        this.clearOutput.emit()
                    }
                }
                return i.\u0275fac = function(a) {
                    return new(a || i)
                }, i.\u0275cmp = e.Xpm({
                    type: i,
                    selectors: [
                        ["app-chu-chu"]
                    ],
                    outputs: {
                        valueChange: "valueChange",
                        clearOutput: "clearOutput"
                    },
                    decls: 17,
                    vars: 7,
                    consts: [
                        [1, "symbolInput"],
                        [1, "checkboxWrapper"],
                        ["name", "dailyQuest", "id", "dailyQuest", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "dailyQuest"],
                        [1, "inputLabelWrapper"],
                        ["for", "hungryMuto"],
                        ["name", "hungryMuto", "id", "hungryMuto", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                        [1, "symbolDailyTitle"],
                        ["name", "yumYumIsland", "id", "yumYumIsland", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "yumYumIsland"]
                    ],
                    template: function(a, t) {
                        1 & a && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "input", 2), e.NdJ("change", function() {
                            return t.valueChanged()
                        })("ngModelChange", function(s) {
                            return t.dailyQuest = s
                        }), e.qZA(), e.TgZ(3, "label", 3), e._uU(4, "Daily Quest (4)"), e.qZA()()(), e.TgZ(5, "div", 0)(6, "div", 4)(7, "label", 5), e._uU(8, "Hungry Muto"), e.qZA(), e.TgZ(9, "input", 6), e.NdJ("ngModelChange", function(s) {
                            return t.hungryMuto = s
                        })("input", function(s) {
                            return t.hungryMutoInput(s)
                        }), e.qZA()()(), e.TgZ(10, "p", 7), e._uU(11, "Daily quest reward x2"), e.qZA(), e.TgZ(12, "div", 0)(13, "div", 1)(14, "input", 8), e.NdJ("change", function() {
                            return t.valueChanged()
                        })("ngModelChange", function(s) {
                            return t.yumYumIsland = s
                        }), e.qZA(), e.TgZ(15, "label", 9), e._uU(16, "Yum Yum Isl Unlocked"), e.qZA()()()), 2 & a && (e.xp6(2), e.Q6J("ngModel", t.dailyQuest)("ngModelOptions", e.DdM(5, v)), e.xp6(7), e.Q6J("ngModel", t.hungryMuto), e.xp6(5), e.Q6J("ngModel", t.yumYumIsland)("ngModelOptions", e.DdM(6, v)))
                    },
                    directives: [l.Wl, l.JJ, l.On, l.wV, l.Fj],
                    styles: [".symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}"]
                }), i
            })();
            const x = function() {
                return {
                    standalone: !0
                }
            };
            let b = (() => {
                class i {
                    constructor() {
                        this.valueChange = new e.vpe, this.clearOutput = new e.vpe, this.dailyQuest = !0, this.dreamDefender = 0
                    }
                    ngOnInit() {}
                    dreamDefenderInput(a) {
                        null == a.data && "" == a.target.value || "insertFromPaste" == a.inputType ? this.emitClearOutput() : (isNaN(a.data) && (a.target.value = 0, this.dreamDefender = 0), (this.dreamDefender < 0 && "" != a.target.value || this.dreamDefender % 1 != 0) && (a.target.value = 0, this.dreamDefender = 0), this.dreamDefender > 30 && (a.target.value = 30, this.dreamDefender = 30), this.valueChanged())
                    }
                    calculateDailySymbols() {
                        var a = 0;
                        return this.dailyQuest && (a += 8), a + +this.dreamDefender
                    }
                    valueChanged() {
                        this.valueChange.emit()
                    }
                    emitClearOutput() {
                        this.clearOutput.emit()
                    }
                }
                return i.\u0275fac = function(a) {
                    return new(a || i)
                }, i.\u0275cmp = e.Xpm({
                    type: i,
                    selectors: [
                        ["app-lachelein"]
                    ],
                    outputs: {
                        valueChange: "valueChange",
                        clearOutput: "clearOutput"
                    },
                    decls: 10,
                    vars: 4,
                    consts: [
                        [1, "symbolInput"],
                        [1, "checkboxWrapper"],
                        ["name", "dailyQuest", "id", "dailyQuest", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "dailyQuest"],
                        [1, "inputLabelWrapper"],
                        ["for", "dreamDefender"],
                        ["name", "dreamDefender", "id", "dreamDefender", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"]
                    ],
                    template: function(a, t) {
                        1 & a && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "input", 2), e.NdJ("change", function() {
                            return t.valueChanged()
                        })("ngModelChange", function(s) {
                            return t.dailyQuest = s
                        }), e.qZA(), e.TgZ(3, "label", 3), e._uU(4, "Daily Quest (8)"), e.qZA()()(), e.TgZ(5, "div", 0)(6, "div", 4)(7, "label", 5), e._uU(8, "Dream Defender"), e.qZA(), e.TgZ(9, "input", 6), e.NdJ("ngModelChange", function(s) {
                            return t.dreamDefender = s
                        })("input", function(s) {
                            return t.dreamDefenderInput(s)
                        }), e.qZA()()()), 2 & a && (e.xp6(2), e.Q6J("ngModel", t.dailyQuest)("ngModelOptions", e.DdM(3, x)), e.xp6(7), e.Q6J("ngModel", t.dreamDefender))
                    },
                    directives: [l.Wl, l.JJ, l.On, l.wV, l.Fj],
                    styles: [""]
                }), i
            })();
            const Z = function() {
                return {
                    standalone: !0
                }
            };
            let C = (() => {
                class i {
                    constructor() {
                        this.valueChange = new e.vpe, this.clearOutput = new e.vpe, this.dailyQuest = !0, this.spiritSaviour = 0
                    }
                    ngOnInit() {}
                    spiritSaviourInput(a) {
                        null == a.data && "" == a.target.value || "insertFromPaste" == a.inputType ? this.emitClearOutput() : (isNaN(a.data) && (a.target.value = 0, this.spiritSaviour = 0), (this.spiritSaviour < 0 && "" != a.target.value || this.spiritSaviour % 1 != 0) && (a.target.value = 0, this.spiritSaviour = 0), this.spiritSaviour > 10 && (a.target.value = 10, this.spiritSaviour = 10), this.valueChanged())
                    }
                    calculateDailySymbols() {
                        var a = 0;
                        return this.dailyQuest && (a += 8), a + +this.spiritSaviour
                    }
                    valueChanged() {
                        this.valueChange.emit()
                    }
                    emitClearOutput() {
                        this.clearOutput.emit()
                    }
                }
                return i.\u0275fac = function(a) {
                    return new(a || i)
                }, i.\u0275cmp = e.Xpm({
                    type: i,
                    selectors: [
                        ["app-arcana"]
                    ],
                    outputs: {
                        valueChange: "valueChange",
                        clearOutput: "clearOutput"
                    },
                    decls: 10,
                    vars: 4,
                    consts: [
                        [1, "symbolInput"],
                        [1, "checkboxWrapper"],
                        ["name", "dailyQuest", "id", "dailyQuest", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "dailyQuest"],
                        [1, "inputLabelWrapper"],
                        ["for", "spiritSaviour"],
                        ["name", "spiritSaviour", "id", "spiritSaviour", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"]
                    ],
                    template: function(a, t) {
                        1 & a && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "input", 2), e.NdJ("change", function() {
                            return t.valueChanged()
                        })("ngModelChange", function(s) {
                            return t.dailyQuest = s
                        }), e.qZA(), e.TgZ(3, "label", 3), e._uU(4, "Daily Quest (8)"), e.qZA()()(), e.TgZ(5, "div", 0)(6, "div", 4)(7, "label", 5), e._uU(8, "Spirit Saviour"), e.qZA(), e.TgZ(9, "input", 6), e.NdJ("ngModelChange", function(s) {
                            return t.spiritSaviour = s
                        })("input", function(s) {
                            return t.spiritSaviourInput(s)
                        }), e.qZA()()()), 2 & a && (e.xp6(2), e.Q6J("ngModel", t.dailyQuest)("ngModelOptions", e.DdM(3, Z)), e.xp6(7), e.Q6J("ngModel", t.spiritSaviour))
                    },
                    directives: [l.Wl, l.JJ, l.On, l.wV, l.Fj],
                    styles: [""]
                }), i
            })();
            const S = function() {
                return {
                    standalone: !0
                }
            };
            let f = (() => {
                class i {
                    constructor() {
                        this.valueChange = new e.vpe, this.dailyQuest = !0, this.ranheimDefense = !0
                    }
                    ngOnInit() {}
                    calculateDailySymbols() {
                        var a = 0;
                        return this.dailyQuest && (a += 8), this.ranheimDefense && (a += 6), a
                    }
                    valueChanged() {
                        this.valueChange.emit()
                    }
                }
                return i.\u0275fac = function(a) {
                    return new(a || i)
                }, i.\u0275cmp = e.Xpm({
                    type: i,
                    selectors: [
                        ["app-morass"]
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
                        ["name", "ranheimDefense", "id", "ranheimDefense", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "ranheimDefense"]
                    ],
                    template: function(a, t) {
                        1 & a && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "input", 2), e.NdJ("change", function() {
                            return t.valueChanged()
                        })("ngModelChange", function(s) {
                            return t.dailyQuest = s
                        }), e.qZA(), e.TgZ(3, "label", 3), e._uU(4, "Daily Quest (8)"), e.qZA()()(), e.TgZ(5, "div", 0)(6, "div", 1)(7, "input", 4), e.NdJ("change", function() {
                            return t.valueChanged()
                        })("ngModelChange", function(s) {
                            return t.ranheimDefense = s
                        }), e.qZA(), e.TgZ(8, "label", 5), e._uU(9, "Ranheim Defense (6)"), e.qZA()()()), 2 & a && (e.xp6(2), e.Q6J("ngModel", t.dailyQuest)("ngModelOptions", e.DdM(4, S)), e.xp6(5), e.Q6J("ngModel", t.ranheimDefense)("ngModelOptions", e.DdM(5, S)))
                    },
                    directives: [l.Wl, l.JJ, l.On],
                    styles: [""]
                }), i
            })();
            const M = function() {
                return {
                    standalone: !0
                }
            };
            let D = (() => {
                class i {
                    constructor() {
                        this.valueChange = new e.vpe, this.dailyQuest = !0, this.esferaGuardian = !0
                    }
                    ngOnInit() {}
                    calculateDailySymbols() {
                        var a = 0;
                        return this.dailyQuest && (a += 8), this.esferaGuardian && (a += 6), a
                    }
                    valueChanged() {
                        this.valueChange.emit()
                    }
                }
                return i.\u0275fac = function(a) {
                    return new(a || i)
                }, i.\u0275cmp = e.Xpm({
                    type: i,
                    selectors: [
                        ["app-esfera"]
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
                        ["name", "esferaGuardian", "id", "esferaGuardian", "type", "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"],
                        ["for", "esferaGuardian"]
                    ],
                    template: function(a, t) {
                        1 & a && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "input", 2), e.NdJ("change", function() {
                            return t.valueChanged()
                        })("ngModelChange", function(s) {
                            return t.dailyQuest = s
                        }), e.qZA(), e.TgZ(3, "label", 3), e._uU(4, "Daily Quest (8)"), e.qZA()()(), e.TgZ(5, "div", 0)(6, "div", 1)(7, "input", 4), e.NdJ("change", function() {
                            return t.valueChanged()
                        })("ngModelChange", function(s) {
                            return t.esferaGuardian = s
                        }), e.qZA(), e.TgZ(8, "label", 5), e._uU(9, "Esfera Guardian (6)"), e.qZA()()()), 2 & a && (e.xp6(2), e.Q6J("ngModel", t.dailyQuest)("ngModelOptions", e.DdM(4, M)), e.xp6(5), e.Q6J("ngModel", t.esferaGuardian)("ngModelOptions", e.DdM(5, M)))
                    },
                    directives: [l.Wl, l.JJ, l.On],
                    styles: [""]
                }), i
            })();
            var A = u(22313),
                T = u(65534);

            function Q(i, o) {
                if (1 & i) {
                    const a = e.EpF();
                    e.TgZ(0, "app-vanishing-journey", 35), e.NdJ("valueChange", function() {
                        return e.CHM(a), e.oxw().submit()
                    }), e.qZA()
                }
            }

            function J(i, o) {
                if (1 & i) {
                    const a = e.EpF();
                    e.TgZ(0, "app-chu-chu", 36), e.NdJ("valueChange", function() {
                        return e.CHM(a), e.oxw().submit()
                    })("clearOutput", function() {
                        return e.CHM(a), e.oxw().clearOutputVariables()
                    }), e.qZA()
                }
            }

            function O(i, o) {
                if (1 & i) {
                    const a = e.EpF();
                    e.TgZ(0, "app-lachelein", 36), e.NdJ("valueChange", function() {
                        return e.CHM(a), e.oxw().submit()
                    })("clearOutput", function() {
                        return e.CHM(a), e.oxw().clearOutputVariables()
                    }), e.qZA()
                }
            }

            function L(i, o) {
                if (1 & i) {
                    const a = e.EpF();
                    e.TgZ(0, "app-arcana", 36), e.NdJ("valueChange", function() {
                        return e.CHM(a), e.oxw().submit()
                    })("clearOutput", function() {
                        return e.CHM(a), e.oxw().clearOutputVariables()
                    }), e.qZA()
                }
            }

            function I(i, o) {
                if (1 & i) {
                    const a = e.EpF();
                    e.TgZ(0, "app-morass", 35), e.NdJ("valueChange", function() {
                        return e.CHM(a), e.oxw().submit()
                    }), e.qZA()
                }
            }

            function q(i, o) {
                if (1 & i) {
                    const a = e.EpF();
                    e.TgZ(0, "app-esfera", 35), e.NdJ("valueChange", function() {
                        return e.CHM(a), e.oxw().submit()
                    }), e.qZA()
                }
            }
            const k = [{
                path: "",
                component: (() => {
                    class i {
                        constructor(a, t, r) {
                            this.changeDetector = a, this.titleService = t, this.metaService = r, this.arcaneSymbolStats = d.x, this.arcaneSymbolCost = c.sg, this.arcaneSymbolNames = ["Vanishing Journey", "Chu Chu", "Lachelein", "Arcana", "Morass", "Esfera"], this.currentLevel = 1, this.currentXp = 1, this.activeSymbolIndex = 0, this.daysLeft = 0, this.upgradeCost = 0, this.arcaneForceGain = 0, this.statGain = 0, this.xenonStatGain = 0, this.demonAvengerHpGain = 0
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Maplestory Arcane Symbol Calculator | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "An arcane symbol calculator to determine the amount of time & money required to max out a symbol."
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "index, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "index, follow"
                            }), this.initialise()
                        }
                        initialise() {
                            localStorage.getItem("arcaneSymbolSaveData") ? this.arcaneSymbolSaveData = JSON.parse(localStorage.getItem("arcaneSymbolSaveData")) : this.initiateData(), this.changeActiveSymbolIndex(0)
                        }
                        initiateData() {
                            this.arcaneSymbolSaveData = {
                                vjLevel: 1,
                                vjExp: 1,
                                vjDailyQuest: !0,
                                vjErdaSpectrum: !0,
                                vjReverseCity: !1,
                                chuchuLevel: 1,
                                chuchuExp: 1,
                                chuchuDailyQuest: !0,
                                chuchuHungryMuto: 1,
                                chuchuYumYumIsland: !1,
                                lacheleinLevel: 1,
                                lacheleinExp: 1,
                                lacheleinDailyQuest: !0,
                                lacheleinDreamDefender: 1,
                                arcanaLevel: 1,
                                arcanaExp: 1,
                                arcanaDailyQuest: !0,
                                arcanaSpiritSaviour: 1,
                                morassLevel: 1,
                                morassExp: 1,
                                morassDailyQuest: !0,
                                moreassRanheimDefense: !0,
                                esferaLevel: 1,
                                esferaExp: 1,
                                esferaDailyQuest: !0,
                                esferaGuardian: !0
                            }, localStorage.setItem("arcaneSymbolSaveData", JSON.stringify(this.arcaneSymbolSaveData))
                        }
                        changeActiveSymbolIndex(a) {
                            switch (this.activeSymbolIndex = a, this.changeDetector.detectChanges(), this.activeSymbolIndex) {
                                case 0:
                                    this.arcaneSymbolCost = c.sg, this.currentLevel = this.arcaneSymbolSaveData.vjLevel, this.currentXp = this.arcaneSymbolSaveData.vjExp, this.vanishingJourneyChild.dailyQuest = this.arcaneSymbolSaveData.vjDailyQuest, this.vanishingJourneyChild.erdaSpectrum = this.arcaneSymbolSaveData.vjErdaSpectrum, this.vanishingJourneyChild.reverseCity = this.arcaneSymbolSaveData.vjReverseCity;
                                    break;
                                case 1:
                                    this.arcaneSymbolCost = c.tK, this.currentLevel = this.arcaneSymbolSaveData.chuchuLevel, this.currentXp = this.arcaneSymbolSaveData.chuchuExp, this.chuChuChild.dailyQuest = this.arcaneSymbolSaveData.chuchuDailyQuest, this.chuChuChild.hungryMuto = this.arcaneSymbolSaveData.chuchuHungryMuto, this.chuChuChild.yumYumIsland = this.arcaneSymbolSaveData.chuchuYumYumIsland;
                                    break;
                                case 2:
                                    this.arcaneSymbolCost = c.QA, this.currentLevel = this.arcaneSymbolSaveData.lacheleinLevel, this.currentXp = this.arcaneSymbolSaveData.lacheleinExp, this.lacheleinChild.dailyQuest = this.arcaneSymbolSaveData.lacheleinDailyQuest, this.lacheleinChild.dreamDefender = this.arcaneSymbolSaveData.lacheleinDreamDefender;
                                    break;
                                case 3:
                                    this.arcaneSymbolCost = c.BV, this.currentLevel = this.arcaneSymbolSaveData.arcanaLevel, this.currentXp = this.arcaneSymbolSaveData.arcanaExp, this.arcanaChild.dailyQuest = this.arcaneSymbolSaveData.arcanaDailyQuest, this.arcanaChild.spiritSaviour = this.arcaneSymbolSaveData.arcanaSpiritSaviour;
                                    break;
                                case 4:
                                    this.arcaneSymbolCost = c.se, this.currentLevel = this.arcaneSymbolSaveData.morassLevel, this.currentXp = this.arcaneSymbolSaveData.morassExp, this.morassChild.dailyQuest = this.arcaneSymbolSaveData.morassDailyQuest, this.morassChild.ranheimDefense = this.arcaneSymbolSaveData.moreassRanheimDefense;
                                    break;
                                case 5:
                                    this.arcaneSymbolCost = c.Lf, this.currentLevel = this.arcaneSymbolSaveData.esferaLevel, this.currentXp = this.arcaneSymbolSaveData.esferaExp, this.esferaChild.dailyQuest = this.arcaneSymbolSaveData.esferaDailyQuest, this.esferaChild.esferaGuardian = this.arcaneSymbolSaveData.esferaGuardian
                            }
                            this.clearOutputVariables(), this.submit()
                        }
                        submit() {
                            switch (this.activeSymbolIndex) {
                                case 0:
                                    this.calculateSymbolStats(this.vanishingJourneyChild.calculateDailySymbols());
                                    break;
                                case 1:
                                    this.calculateSymbolStats(this.chuChuChild.calculateDailySymbols());
                                    break;
                                case 2:
                                    this.calculateSymbolStats(this.lacheleinChild.calculateDailySymbols());
                                    break;
                                case 3:
                                    this.calculateSymbolStats(this.arcanaChild.calculateDailySymbols());
                                    break;
                                case 4:
                                    this.calculateSymbolStats(this.morassChild.calculateDailySymbols());
                                    break;
                                case 5:
                                    this.calculateSymbolStats(this.esferaChild.calculateDailySymbols())
                            }
                            this.updateSavedData()
                        }
                        currentLevelInput(a) {
                            if (null != a.data || 1 == a.target.value) {
                                if ("insertFromPaste" == a.inputType) return a.target.value = "", void this.clearOutputVariables();
                                isNaN(a.data) && (a.target.value = "", this.currentLevel = 1), (this.currentLevel < 1 && "" != a.target.value || this.currentLevel % 1 != 0) && (a.target.value = 1, this.currentLevel = 1), this.currentLevel > 20 && (a.target.value = 20, this.currentLevel = 20), 1 == this.currentLevel && 0 == this.currentXp && (this.currentXp = 1);
                                var t = 0;
                                for (let r = this.currentLevel - 1; r < 20; r++) t += this.arcaneSymbolStats[r].symbolExpRequired;
                                this.currentXp > t && (this.currentXp = t), this.submit()
                            } else this.clearOutputVariables()
                        }
                        currentExpInput(a) {
                            if (null != a.data || "" != a.target.value) {
                                if ("insertFromPaste" == a.inputType) return a.target.value = "", void this.clearOutputVariables();
                                null == this.currentLevel && (this.currentLevel = 1), isNaN(a.data) && (a.target.value = "", this.currentXp = 1), (1 == this.currentLevel && this.currentXp < 1 && "" != a.target.value || this.currentXp % 1 != 0) && (a.target.value = 1, this.currentXp = 1), (1 != this.currentLevel && this.currentXp < 0 && "" != a.target.value || this.currentXp % 1 != 0) && (a.target.value = 0, this.currentXp = 0);
                                var t = 0;
                                for (let r = this.currentLevel - 1; r < 20; r++) t += this.arcaneSymbolStats[r].symbolExpRequired;
                                this.currentXp > t && (a.target.value = t, this.currentXp = t), this.submit()
                            } else this.clearOutputVariables()
                        }
                        updateSavedData() {
                            switch (this.activeSymbolIndex) {
                                case 0:
                                    this.arcaneSymbolSaveData.vjLevel = this.currentLevel, this.arcaneSymbolSaveData.vjExp = this.currentXp, this.arcaneSymbolSaveData.vjDailyQuest = this.vanishingJourneyChild.dailyQuest, this.arcaneSymbolSaveData.vjErdaSpectrum = this.vanishingJourneyChild.erdaSpectrum, this.arcaneSymbolSaveData.vjReverseCity = this.vanishingJourneyChild.reverseCity;
                                    break;
                                case 1:
                                    this.arcaneSymbolSaveData.chuchuLevel = this.currentLevel, this.arcaneSymbolSaveData.chuchuExp = this.currentXp, this.arcaneSymbolSaveData.chuchuDailyQuest = this.chuChuChild.dailyQuest, this.arcaneSymbolSaveData.chuchuHungryMuto = this.chuChuChild.hungryMuto, this.arcaneSymbolSaveData.chuchuYumYumIsland = this.chuChuChild.yumYumIsland;
                                    break;
                                case 2:
                                    this.arcaneSymbolSaveData.lacheleinLevel = this.currentLevel, this.arcaneSymbolSaveData.lacheleinExp = this.currentXp, this.arcaneSymbolSaveData.lacheleinDailyQuest = this.lacheleinChild.dailyQuest, this.arcaneSymbolSaveData.lacheleinDreamDefender = this.lacheleinChild.dreamDefender;
                                    break;
                                case 3:
                                    this.arcaneSymbolSaveData.arcanaLevel = this.currentLevel, this.arcaneSymbolSaveData.arcanaExp = this.currentXp, this.arcaneSymbolSaveData.arcanaDailyQuest = this.arcanaChild.dailyQuest, this.arcaneSymbolSaveData.arcanaSpiritSaviour = this.arcanaChild.spiritSaviour;
                                    break;
                                case 4:
                                    this.arcaneSymbolSaveData.morassLevel = this.currentLevel, this.arcaneSymbolSaveData.morassExp = this.currentXp, this.arcaneSymbolSaveData.morassDailyQuest = this.morassChild.dailyQuest, this.arcaneSymbolSaveData.moreassRanheimDefense = this.morassChild.ranheimDefense;
                                    break;
                                case 5:
                                    this.arcaneSymbolSaveData.esferaLevel = this.currentLevel, this.arcaneSymbolSaveData.esferaExp = this.currentXp, this.arcaneSymbolSaveData.esferaDailyQuest = this.esferaChild.dailyQuest, this.arcaneSymbolSaveData.esferaGuardian = this.esferaChild.esferaGuardian
                            }
                            localStorage.setItem("arcaneSymbolSaveData", JSON.stringify(this.arcaneSymbolSaveData))
                        }
                        calculateSymbolStats(a) {
                            var t = 0;
                            t = this.arcaneSymbolStats[this.currentLevel - 1].symbolExpRequired - this.currentXp, this.upgradeCost = this.arcaneSymbolCost[this.currentLevel - 1];
                            for (let r = this.currentLevel; r < 20; r++) t += this.arcaneSymbolStats[r].symbolExpRequired, this.upgradeCost += this.arcaneSymbolCost[r];
                            this.arcaneForceGain = this.arcaneSymbolStats[19].arcaneForce - this.arcaneSymbolStats[this.currentLevel - 1].arcaneForce, this.statGain = this.arcaneSymbolStats[19].stat - this.arcaneSymbolStats[this.currentLevel - 1].stat, this.xenonStatGain = this.arcaneSymbolStats[19].statXenon - this.arcaneSymbolStats[this.currentLevel - 1].statXenon, this.demonAvengerHpGain = this.arcaneSymbolStats[19].statDemonAvenger - this.arcaneSymbolStats[this.currentLevel - 1].statDemonAvenger, this.daysLeft = Math.ceil(t / a)
                        }
                        clearOutputVariables() {
                            this.daysLeft = 0, this.upgradeCost = 0, this.arcaneForceGain = 0, this.statGain = 0, this.xenonStatGain = 0, this.demonAvengerHpGain = 0
                        }
                    }
                    return i.\u0275fac = function(a) {
                        return new(a || i)(e.Y36(e.sBO), e.Y36(A.Dx), e.Y36(A.h_))
                    }, i.\u0275cmp = e.Xpm({
                        type: i,
                        selectors: [
                            ["app-maplestory-arcane-symbols"]
                        ],
                        viewQuery: function(a, t) {
                            if (1 & a && (e.Gf(y, 5), e.Gf(_, 5), e.Gf(b, 5), e.Gf(C, 5), e.Gf(f, 5), e.Gf(D, 5)), 2 & a) {
                                let r;
                                e.iGM(r = e.CRH()) && (t.vanishingJourneyChild = r.first), e.iGM(r = e.CRH()) && (t.chuChuChild = r.first), e.iGM(r = e.CRH()) && (t.lacheleinChild = r.first), e.iGM(r = e.CRH()) && (t.arcanaChild = r.first), e.iGM(r = e.CRH()) && (t.morassChild = r.first), e.iGM(r = e.CRH()) && (t.esferaChild = r.first)
                            }
                        },
                        decls: 78,
                        vars: 36,
                        consts: [
                            [1, "editedGamePageContent"],
                            [1, "symbolNavigationBar"],
                            [3, "ngClass", "click"],
                            [1, "imgWrapper"],
                            ["src", "assets/Games/Maplestory/SymbolImages/VanishingJourney.png", "alt", "vanishingJourney"],
                            ["src", "assets/Games/Maplestory/SymbolImages/ChuChu.png", "alt", "chuchu"],
                            ["src", "assets/Games/Maplestory/SymbolImages/Lachelein.png", "alt", "lachelein"],
                            ["src", "assets/Games/Maplestory/SymbolImages/Arcana.png", "alt", "arcana"],
                            ["src", "assets/Games/Maplestory/SymbolImages/Morass.png", "alt", "morass"],
                            ["src", "assets/Games/Maplestory/SymbolImages/Esfera.png", "alt", "esfera"],
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
                            ["for", "arcaneForceGain"],
                            ["name", "arcaneForceGain", "id", "arcaneForceGain", "type", "text", "disabled", "", 1, "textInput", 3, "value"],
                            ["for", "statGain"],
                            ["name", "statGain", "id", "statGain", "type", "text", "disabled", "", 1, "textInput", 3, "value"],
                            ["for", "xenonStatGain"],
                            ["name", "xenonStatGain", "id", "xenonStatGain", "type", "text", "disabled", "", 1, "textInput", 3, "value"],
                            ["for", "demonAvengerHpGain"],
                            ["name", "demonAvengerHpGain", "id", "demonAvengerHpGain", "type", "text", "disabled", "", 1, "textInput", 3, "value"],
                            [3, "valueChange"],
                            [3, "valueChange", "clearOutput"]
                        ],
                        template: function(a, t) {
                            1 & a && (e._UZ(0, "app-maplestory-side-navigation"), e.TgZ(1, "div", 0)(2, "div", 1)(3, "a", 2), e.NdJ("click", function() {
                                return t.changeActiveSymbolIndex(0)
                            }), e.TgZ(4, "div", 3), e._UZ(5, "img", 4), e.qZA()(), e.TgZ(6, "a", 2), e.NdJ("click", function() {
                                return t.changeActiveSymbolIndex(1)
                            }), e.TgZ(7, "div", 3), e._UZ(8, "img", 5), e.qZA()(), e.TgZ(9, "a", 2), e.NdJ("click", function() {
                                return t.changeActiveSymbolIndex(2)
                            }), e.TgZ(10, "div", 3), e._UZ(11, "img", 6), e.qZA()(), e.TgZ(12, "a", 2), e.NdJ("click", function() {
                                return t.changeActiveSymbolIndex(3)
                            }), e.TgZ(13, "div", 3), e._UZ(14, "img", 7), e.qZA()(), e.TgZ(15, "a", 2), e.NdJ("click", function() {
                                return t.changeActiveSymbolIndex(4)
                            }), e.TgZ(16, "div", 3), e._UZ(17, "img", 8), e.qZA()(), e.TgZ(18, "a", 2), e.NdJ("click", function() {
                                return t.changeActiveSymbolIndex(5)
                            }), e.TgZ(19, "div", 3), e._UZ(20, "img", 9), e.qZA()()(), e.TgZ(21, "p", 10), e._uU(22), e.qZA(), e.TgZ(23, "form", 11), e.NdJ("ngSubmit", function() {
                                return t.submit()
                            }), e.TgZ(24, "div", 12)(25, "div", 13)(26, "label", 14), e._uU(27, "Symbol Level"), e.qZA(), e.TgZ(28, "input", 15), e.NdJ("ngModelChange", function(s) {
                                return t.currentLevel = s
                            })("input", function(s) {
                                return t.currentLevelInput(s)
                            }), e.qZA()()(), e.TgZ(29, "div", 12)(30, "div", 13)(31, "label", 16), e._uU(32, "Symbol Experience"), e.qZA(), e.TgZ(33, "input", 17), e.NdJ("ngModelChange", function(s) {
                                return t.currentXp = s
                            })("input", function(s) {
                                return t.currentExpInput(s)
                            }), e.qZA()()(), e.TgZ(34, "p", 18), e._uU(35, "Daily symbols"), e.qZA(), e.YNc(36, Q, 1, 0, "app-vanishing-journey", 19), e.YNc(37, J, 1, 0, "app-chu-chu", 20), e.YNc(38, O, 1, 0, "app-lachelein", 20), e.YNc(39, L, 1, 0, "app-arcana", 20), e.YNc(40, I, 1, 0, "app-morass", 19), e.YNc(41, q, 1, 0, "app-esfera", 19), e.qZA(), e.TgZ(42, "div", 21)(43, "div", 12)(44, "div", 22)(45, "label", 23), e._uU(46, "Day(s) to Level 20"), e.qZA(), e._UZ(47, "input", 24), e.qZA()(), e.TgZ(48, "div", 12)(49, "div", 22)(50, "label", 25), e._uU(51, "Remaining Cost to Level 20"), e.qZA(), e._UZ(52, "input", 26), e.ALo(53, "number"), e.qZA()(), e.TgZ(54, "div", 12)(55, "div", 22)(56, "label", 27), e._uU(57, "Remaining Arcane Force to gain"), e.qZA(), e._UZ(58, "input", 28), e.ALo(59, "number"), e.qZA()(), e.TgZ(60, "div", 12)(61, "div", 22)(62, "label", 29), e._uU(63, "Remaining Stat to Gain"), e.qZA(), e._UZ(64, "input", 30), e.ALo(65, "number"), e.qZA()(), e.TgZ(66, "div", 12)(67, "div", 22)(68, "label", 31), e._uU(69, "Remaining All Stat to Gain (Xenon)"), e.qZA(), e._UZ(70, "input", 32), e.ALo(71, "number"), e.qZA()(), e.TgZ(72, "div", 12)(73, "div", 22)(74, "label", 33), e._uU(75, "Remaining HP to Gain (Demon Avenger)"), e.qZA(), e._UZ(76, "input", 34), e.ALo(77, "number"), e.qZA()()()()), 2 & a && (e.xp6(3), e.Q6J("ngClass", 0 == t.activeSymbolIndex ? "selected" : "notSelected"), e.xp6(3), e.Q6J("ngClass", 1 == t.activeSymbolIndex ? "selected" : "notSelected"), e.xp6(3), e.Q6J("ngClass", 2 == t.activeSymbolIndex ? "selected" : "notSelected"), e.xp6(3), e.Q6J("ngClass", 3 == t.activeSymbolIndex ? "selected" : "notSelected"), e.xp6(3), e.Q6J("ngClass", 4 == t.activeSymbolIndex ? "selected" : "notSelected"), e.xp6(3), e.Q6J("ngClass", 5 == t.activeSymbolIndex ? "selected" : "notSelected"), e.xp6(4), e.Oqu(t.arcaneSymbolNames[t.activeSymbolIndex]), e.xp6(6), e.Q6J("ngModel", t.currentLevel), e.xp6(5), e.Q6J("ngModel", t.currentXp), e.xp6(3), e.Q6J("ngIf", 0 == t.activeSymbolIndex), e.xp6(1), e.Q6J("ngIf", 1 == t.activeSymbolIndex), e.xp6(1), e.Q6J("ngIf", 2 == t.activeSymbolIndex), e.xp6(1), e.Q6J("ngIf", 3 == t.activeSymbolIndex), e.xp6(1), e.Q6J("ngIf", 4 == t.activeSymbolIndex), e.xp6(1), e.Q6J("ngIf", 5 == t.activeSymbolIndex), e.xp6(6), e.MGl("value", "", t.daysLeft, " Day(s)"), e.xp6(5), e.MGl("value", "", e.xi3(53, 21, t.upgradeCost, "0.0-0"), " Mesos"), e.xp6(6), e.MGl("value", "", e.xi3(59, 24, t.arcaneForceGain, "0.0-0"), " AF"), e.xp6(6), e.MGl("value", "", e.xi3(65, 27, t.statGain, "0.0-0"), " Stat"), e.xp6(6), e.MGl("value", "", e.xi3(71, 30, t.xenonStatGain, "0.0-0"), " AS"), e.xp6(6), e.MGl("value", "", e.xi3(77, 33, t.demonAvengerHpGain, "0.0-0"), " HP"))
                        },
                        directives: [T.G, n.mk, l._Y, l.JL, l.F, l.wV, l.Fj, l.JJ, l.On, n.O5, y, _, b, C, f, D],
                        pipes: [n.JJ],
                        styles: [".symbolNavigationBar[_ngcontent-%COMP%]{text-align:center;height:57px}.symbolTitle[_ngcontent-%COMP%]{text-align:center;font-size:30px;margin:8px 0}.symbolNavigationBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;width:33px;height:33px;background-color:var(--background-color);margin:5px;padding:5px}.notSelected[_ngcontent-%COMP%]{border:2px solid var(--game-page-border-color)}.selected[_ngcontent-%COMP%]{border:2px solid var(--game-page-accent-color)}.symbolNavigationBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:var(--radial-color-1);background:radial-gradient(ellipse at center,var(--radial-color-1) 0%,var(--radial-color-2) 38%,var(--radial-color-3) 70%,var(--radial-color-4) 100%)}.symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}.outputWrapper[_ngcontent-%COMP%]{margin-top:20px}.editedGamePageContent[_ngcontent-%COMP%]{width:600px;margin:8px auto;background-color:var(--game-page-background-color);border:1px solid var(--game-page-border-color);min-height:calc(100vh - 72px)}@media only screen and (max-width: 1104px){.editedGamePageContent[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 862px){.editedGamePageContent[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width: 813px){.editedGamePageContent[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}"]
                    }), i
                })()
            }];
            let E = (() => {
                class i {}
                return i.\u0275fac = function(a) {
                    return new(a || i)
                }, i.\u0275mod = e.oAB({
                    type: i
                }), i.\u0275inj = e.cJS({
                    imports: [
                        [m.Bz.forChild(k)], m.Bz
                    ]
                }), i
            })();
            var G = u(56928);
            let U = (() => {
                class i {}
                return i.\u0275fac = function(a) {
                    return new(a || i)
                }, i.\u0275mod = e.oAB({
                    type: i
                }), i.\u0275inj = e.cJS({
                    imports: [
                        [n.ez, E, G.C]
                    ]
                }), i
            })()
        },
        56928: (g, h, u) => {
            u.d(h, {
                C: () => c
            });
            var n = u(69808),
                m = u(75326),
                d = u(72096);
            let c = (() => {
                class e {}
                return e.\u0275fac = function(p) {
                    return new(p || e)
                }, e.\u0275mod = d.oAB({
                    type: e
                }), e.\u0275inj = d.cJS({
                    imports: [
                        [n.ez, m.m], m.m
                    ]
                }), e
            })()
        },
        65534: (g, h, u) => {
            u.d(h, {
                G: () => d
            });
            var n = u(72096),
                m = u(69414);
            let d = (() => {
                class c {
                    constructor(l) {
                        this.router = l
                    }
                    ngOnInit() {}
                }
                return c.\u0275fac = function(l) {
                    return new(l || c)(n.Y36(m.F0))
                }, c.\u0275cmp = n.Xpm({
                    type: c,
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
                    template: function(l, p) {
                        1 & l && (n.TgZ(0, "div", 0)(1, "div", 1), n._uU(2, "Maplestory"), n.qZA(), n.TgZ(3, "p"), n._uU(4, "General"), n.qZA(), n.TgZ(5, "a", 2)(6, "span"), n._uU(7, "Home"), n.qZA()(), n._UZ(8, "div", 3), n.TgZ(9, "p"), n._uU(10, "Calculators"), n.qZA(), n.TgZ(11, "a", 2)(12, "span"), n._uU(13, "Arcane symbols"), n.qZA()(), n.TgZ(14, "a", 2)(15, "span"), n._uU(16, "Sacred symbols"), n.qZA()(), n.TgZ(17, "a", 2)(18, "span"), n._uU(19, "Item flames"), n.qZA()(), n.TgZ(20, "a", 2)(21, "span"), n._uU(22, "Weapon flame"), n.qZA()(), n._UZ(23, "div", 3), n.TgZ(24, "p"), n._uU(25, "Trackers"), n.qZA(), n.TgZ(26, "a", 2)(27, "span"), n._uU(28, "Dailies"), n.qZA()(), n.TgZ(29, "a", 2)(30, "span"), n._uU(31, "Weeklies"), n.qZA()(), n._UZ(32, "div", 3), n.TgZ(33, "a", 2)(34, "span"), n._uU(35, "Export settings"), n.qZA()(), n._UZ(36, "div", 3), n.TgZ(37, "p"), n._uU(38, "Enjoying my creations?"), n.qZA(), n.TgZ(39, "a", 4)(40, "span"), n._uU(41, "consider donating here"), n.qZA()()()), 2 & l && (n.xp6(5), n.Q6J("routerLink", "/games/maplestory/home"), n.xp6(1), n.ekj("sidenavbaractivelink", p.router.isActive("/games/maplestory/home", !1)), n.xp6(5), n.Q6J("routerLink", "/games/maplestory/arcane-symbols"), n.xp6(1), n.ekj("sidenavbaractivelink", p.router.isActive("/games/maplestory/arcane-symbols", !1)), n.xp6(2), n.Q6J("routerLink", "/games/maplestory/sacred-symbols"), n.xp6(1), n.ekj("sidenavbaractivelink", p.router.isActive("/games/maplestory/sacred-symbols", !1)), n.xp6(2), n.Q6J("routerLink", "/games/maplestory/item-flames"), n.xp6(1), n.ekj("sidenavbaractivelink", p.router.isActive("/games/maplestory/item-flames", !1)), n.xp6(2), n.Q6J("routerLink", "/games/maplestory/weapon-flame"), n.xp6(1), n.ekj("sidenavbaractivelink", p.router.isActive("/games/maplestory/weapon-flame", !1)), n.xp6(5), n.Q6J("routerLink", "/games/maplestory/dailies"), n.xp6(1), n.ekj("sidenavbaractivelink", p.router.isActive("/games/maplestory/dailies", !1)), n.xp6(2), n.Q6J("routerLink", "/games/maplestory/weeklies"), n.xp6(1), n.ekj("sidenavbaractivelink", p.router.isActive("/games/maplestory/weeklies", !1)), n.xp6(3), n.Q6J("routerLink", "/games/maplestory/settings"), n.xp6(1), n.ekj("sidenavbaractivelink", p.router.isActive("/games/maplestory/settings", !1)))
                    },
                    directives: [m.yS],
                    styles: [""]
                }), c
            })()
        }
    }
]);