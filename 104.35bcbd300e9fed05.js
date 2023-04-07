"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [104], {
        36953: (h, d, s) => {
            s.d(d, {
                T: () => _
            });
            var l = s(72096);
            let _ = (() => {
                class t {
                    constructor() {
                        this.onLongPress = new l.vpe, this.onShortPress = new l.vpe, this.onLongPressing = new l.vpe
                    }
                    get press() {
                        return this.pressing
                    }
                    get longPress() {
                        return this.longPressing
                    }
                    onMouseDown(c) {
                        this.pressing = !0, this.longPressing = !1, this.timeout = setTimeout(() => {
                            this.longPressing = !0, this.onLongPress.emit(c), this.interval = setInterval(() => {
                                this.onLongPressing.emit(c)
                            }, 50)
                        }, 400)
                    }
                    endPress(c) {
                        clearTimeout(this.timeout), clearInterval(this.interval), !this.longPressing && this.pressing && this.onShortPress.emit(c), this.longPressing = !1, this.pressing = !1
                    }
                }
                return t.\u0275fac = function(c) {
                    return new(c || t)
                }, t.\u0275dir = l.lG2({
                    type: t,
                    selectors: [
                        ["", "longPress", ""]
                    ],
                    hostVars: 4,
                    hostBindings: function(c, m) {
                        1 & c && l.NdJ("touchstart", function(g) {
                            return m.onMouseDown(g)
                        })("mousedown", function(g) {
                            return m.onMouseDown(g)
                        })("touchend", function() {
                            return m.endPress()
                        })("mouseup", function() {
                            return m.endPress()
                        })("mouseleave", function() {
                            return m.endPress()
                        }), 2 & c && l.ekj("press", m.press)("longpress", m.longPress)
                    },
                    outputs: {
                        onLongPress: "onLongPress",
                        onShortPress: "onShortPress",
                        onLongPressing: "onLongPressing"
                    }
                }), t
            })()
        },
        13104: (h, d, s) => {
            s.r(d), s.d(d, {
                MaplestoryItemFlameCalculatorModule: () => j
            });
            var l = s(69808),
                _ = s(69414),
                t = s(72096),
                p = s(34182),
                c = s(88325);

            function m(o, i) {
                if (1 & o && (t.TgZ(0, "label", 7), t._uU(1), t.qZA()), 2 & o) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.inputTitle)
                }
            }

            function u(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "li", 11), t.NdJ("click", function() {
                        t.CHM(e);
                        const n = t.oxw().$implicit;
                        return t.oxw(2).returnItem(n)
                    }), t._uU(1), t.qZA()
                }
                if (2 & o) {
                    const e = t.oxw().$implicit;
                    t.xp6(1), t.hij(" ", e.name, "")
                }
            }

            function g(o, i) {
                if (1 & o && (t.ynx(0), t.YNc(1, u, 2, 1, "li", 10), t.BQk()), 2 & o) {
                    const e = i.$implicit,
                        a = t.oxw(2);
                    t.xp6(1), t.Q6J("ngIf", e.name.toLowerCase().includes(a.filter.toLowerCase()) || "" == a.filter)
                }
            }

            function C(o, i) {
                if (1 & o && (t.TgZ(0, "ul", 8), t.YNc(1, g, 2, 1, "ng-container", 9), t.qZA()), 2 & o) {
                    const e = t.oxw();
                    t.xp6(1), t.Q6J("ngForOf", e.mappedData)
                }
            }
            const v = function(o) {
                return {
                    bottomBorder: o
                }
            };
            let f = (() => {
                class o {
                    constructor() {
                        this.inputTitle = "", this.result = new t.vpe, this.showList = !1, this.selectedItem = "", this.filter = ""
                    }
                    ngOnInit() {
                        this.mappedData = this.data, this.returnItem(this.data[this.defaultIndex])
                    }
                    show() {
                        this.showList = !0, this.filter == this.selectedItem && (this.filter = "")
                    }
                    hide() {
                        this.showList = !1, this.filter != this.selectedItem && (this.filter = this.selectedItem)
                    }
                    returnItem(e) {
                        this.filter = e.name, this.selectedItem = e.name, this.emitResult(e)
                    }
                    findMatch() {
                        var e = [];
                        this.mappedData.forEach(a => {
                            a.name.toLowerCase().includes(this.filter.toLowerCase()) && e.push(a)
                        }), e.length >= 1 ? (this.showList = !1, this.filter = e[0].name, this.selectedItem = e[0].name, this.emitResult(e[0])) : this.hide()
                    }
                    emitResult(e) {
                        this.result.emit(e)
                    }
                }
                return o.\u0275fac = function(e) {
                    return new(e || o)
                }, o.\u0275cmp = t.Xpm({
                    type: o,
                    selectors: [
                        ["search-select"]
                    ],
                    inputs: {
                        data: "data",
                        defaultIndex: "defaultIndex",
                        inputTitle: "inputTitle"
                    },
                    outputs: {
                        result: "result"
                    },
                    decls: 7,
                    vars: 6,
                    consts: [
                        [1, "selectSearchWrapper"],
                        [1, "inputLabelWrapper"],
                        ["for", "filter", 4, "ngIf"],
                        [1, "inputIconWrapper"],
                        ["type", "text", "id", "filter", "name", "filter", "maxlength", "12", "autocomplete", "off", 1, "selectInput", 3, "ngClass", "ngModel", "ngModelChange", "keydown.tab", "focus", "keyup", "clickOutside", "keyup.enter"],
                        [1, "fa", "fa-angle-down"],
                        ["class", "select-data", 4, "ngIf"],
                        ["for", "filter"],
                        [1, "select-data"],
                        [4, "ngFor", "ngForOf"],
                        [3, "click", 4, "ngIf"],
                        [3, "click"]
                    ],
                    template: function(e, a) {
                        1 & e && (t.TgZ(0, "div", 0)(1, "div", 1), t.YNc(2, m, 2, 1, "label", 2), t.TgZ(3, "div", 3)(4, "input", 4), t.NdJ("ngModelChange", function(r) {
                            return a.filter = r
                        })("keydown.tab", function() {
                            return a.hide()
                        })("focus", function() {
                            return a.show()
                        })("keyup", function() {
                            return a.show()
                        })("clickOutside", function() {
                            return a.hide()
                        })("keyup.enter", function() {
                            return a.findMatch()
                        }), t.qZA(), t._UZ(5, "i", 5), t.qZA()(), t.YNc(6, C, 2, 1, "ul", 6), t.qZA()), 2 & e && (t.xp6(2), t.Q6J("ngIf", "" != a.inputTitle), t.xp6(2), t.Q6J("ngClass", t.VKq(4, v, !a.showList))("ngModel", a.filter), t.xp6(2), t.Q6J("ngIf", a.showList))
                    },
                    directives: [l.O5, p.Fj, p.nD, l.mk, p.JJ, p.On, c._, l.sg],
                    styles: [".selectSearchWrapper[_ngcontent-%COMP%]{display:table;width:200px;box-sizing:border-box;margin:0 auto}.select-data[_ngcontent-%COMP%]{position:absolute;background-color:var(--input-box-background-color);width:198px;z-index:1;margin:0;list-style-type:none;border:1px solid var(--input-box-border-color);padding:0;max-height:150px;border-top:0;overflow-y:scroll;scrollbar-width:thin;-ms-overflow-style:8px}li[_ngcontent-%COMP%]{padding-left:6px;font-size:14px;cursor:pointer;text-align:left}li[_ngcontent-%COMP%]:hover{background-color:Highlight}.select-data[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:initial}.selectInput[_ngcontent-%COMP%]{position:relative;display:inline-block;width:200px;padding:6px;margin:0;border-radius:4px 4px 0 0;border:1px solid var(--input-box-border-color);box-sizing:border-box;color:var(--font-color);background-color:var(--input-box-background-color)}.selectInput[_ngcontent-%COMP%]:hover   .select-data[_ngcontent-%COMP%]{display:block}.selectInput[_ngcontent-%COMP%]:focus{outline:none}.bottomBorder[_ngcontent-%COMP%]{border-radius:4px}.inputIconWrapper[_ngcontent-%COMP%]{position:relative}.inputIconWrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;right:0;top:0;padding:0 8px;font-style:normal;-webkit-user-select:none;user-select:none;pointer-events:none;font-size:17px;margin-top:5px}.inputLabelWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;text-align:left;font-size:15px;padding-left:3px}"]
                }), o
            })();
            const y = JSON.parse('{"S":[{"name":"Adele","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Angelic Buster","flameStats":["dex","str","att","allstat"],"flameType":"dex"},{"name":"Aran","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Ark","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Battle Mage","flameStats":["int","luk","matt","allstat"],"flameType":"int"},{"name":"Beast Tamer","flameStats":["int","luk","matt","allstat"],"flameType":"int"},{"name":"Beginner","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Bishop","flameStats":["int","luk","matt","allstat"],"flameType":"int"},{"name":"Blaster","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Blaze Wizard","flameStats":["int","luk","matt","allstat"],"flameType":"int"},{"name":"Bowmaster","flameStats":["dex","str","att","allstat"],"flameType":"dex"},{"name":"Buccaneer","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Cadena","flameStats":["luk","dex","str","att","allstat"],"flameType":"lukDoubleSecondary"},{"name":"Cannoneer","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Corsair","flameStats":["dex","str","att","allstat"],"flameType":"dex"},{"name":"Dark Knight","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Dawn Warrior","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Demon Avenger","flameStats":["da"],"flameType":"da"},{"name":"Demon Slayer","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Dual Blade","flameStats":["luk","dex","str","att","allstat"],"flameType":"lukDoubleSecondary"},{"name":"Evan","flameStats":["int","luk","matt","allstat"],"flameType":"int"},{"name":"Fire Poison","flameStats":["int","luk","matt","allstat"],"flameType":"int"},{"name":"Hayato","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Hero","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Hoyoung","flameStats":["luk","dex","att","allstat"],"flameType":"luk"},{"name":"Ice Lightning","flameStats":["int","luk","matt","allstat"],"flameType":"int"},{"name":"Illium","flameStats":["int","luk","matt","allstat"],"flameType":"int"},{"name":"Jett","flameStats":["dex","str","att","allstat"],"flameType":"dex"},{"name":"Kain","flameStats":["dex","str","att","allstat"],"flameType":"dex"},{"name":"Kaiser","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Kanna","flameStats":["int","luk","hp","mp","matt","allstat"],"flameType":"kanna"},{"name":"Kinesis","flameStats":["int","luk","matt","allstat"],"flameType":"int"},{"name":"Lara","flameStats":["int","luk","matt","allstat"],"flameType":"int"},{"name":"Luminous","flameStats":["int","luk","matt","allstat"],"flameType":"int"},{"name":"Marksman","flameStats":["dex","str","att","allstat"],"flameType":"dex"},{"name":"Mechanic","flameStats":["dex","str","att","allstat"],"flameType":"dex"},{"name":"Mercedes","flameStats":["dex","str","att","allstat"],"flameType":"dex"},{"name":"Mihile","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Nightlord","flameStats":["luk","dex","att","allstat"],"flameType":"luk"},{"name":"Night Walker","flameStats":["luk","dex","att","allstat"],"flameType":"luk"},{"name":"Paladin","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Pathfinder","flameStats":["dex","str","att","allstat"],"flameType":"dex"},{"name":"Phantom","flameStats":["luk","dex","att","allstat"],"flameType":"luk"},{"name":"Shade","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Shadower","flameStats":["luk","dex","str","att","allstat"],"flameType":"lukDoubleSecondary"},{"name":"Thunder Breaker","flameStats":["str","dex","att","allstat"],"flameType":"str"},{"name":"Wild Hunter","flameStats":["dex","str","att","allstat"],"flameType":"dex"},{"name":"Wind Archer","flameStats":["dex","str","att","allstat"],"flameType":"dex"},{"name":"Xenon","flameStats":["luk","dex","str","att","allstat"],"flameType":"xenon"},{"name":"Zero","flameStats":["str","dex","att","allstat"],"flameType":"str"}]}');
            var M = s(22313),
                S = s(65534),
                T = s(36953);

            function P(o, i) {
                1 & o && (t.TgZ(0, "div", 4)(1, "h2"), t._uU(2, "Change info"), t.qZA(), t.TgZ(3, "p"), t._uU(4, "The addition of Lara to the list of classes to select could have caused your previously select class to change. All you have to do is reselect the correct class, your flame information will still be correct."), t.qZA()())
            }

            function I(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 26)(1, "label", 27), t._uU(2, "Str"), t.qZA(), t.TgZ(3, "input", 28), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw(3).currentFlame.str = n
                    })("input", function() {
                        return t.CHM(e), t.oxw(3).inputHandler()
                    }), t.qZA()()
                }
                if (2 & o) {
                    const e = t.oxw(3);
                    t.xp6(3), t.Q6J("ngModel", e.currentFlame.str)
                }
            }

            function b(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 26)(1, "label", 29), t._uU(2, "Dex"), t.qZA(), t.TgZ(3, "input", 30), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw(3).currentFlame.dex = n
                    })("input", function() {
                        return t.CHM(e), t.oxw(3).inputHandler()
                    }), t.qZA()()
                }
                if (2 & o) {
                    const e = t.oxw(3);
                    t.xp6(3), t.Q6J("ngModel", e.currentFlame.dex)
                }
            }

            function Z(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 26)(1, "label", 31), t._uU(2, "Luk"), t.qZA(), t.TgZ(3, "input", 32), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw(3).currentFlame.luk = n
                    })("input", function() {
                        return t.CHM(e), t.oxw(3).inputHandler()
                    }), t.qZA()()
                }
                if (2 & o) {
                    const e = t.oxw(3);
                    t.xp6(3), t.Q6J("ngModel", e.currentFlame.luk)
                }
            }

            function D(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 26)(1, "label", 33), t._uU(2, "Int"), t.qZA(), t.TgZ(3, "input", 34), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw(3).currentFlame.int = n
                    })("input", function() {
                        return t.CHM(e), t.oxw(3).inputHandler()
                    }), t.qZA()()
                }
                if (2 & o) {
                    const e = t.oxw(3);
                    t.xp6(3), t.Q6J("ngModel", e.currentFlame.int)
                }
            }

            function w(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 26)(1, "label", 35), t._uU(2, "HP"), t.qZA(), t.TgZ(3, "input", 36), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw(3).currentFlame.hp = n
                    })("input", function() {
                        return t.CHM(e), t.oxw(3).inputHandler()
                    }), t.qZA()()
                }
                if (2 & o) {
                    const e = t.oxw(3);
                    t.xp6(3), t.Q6J("ngModel", e.currentFlame.hp)
                }
            }

            function F(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 26)(1, "label", 37), t._uU(2, "MP"), t.qZA(), t.TgZ(3, "input", 38), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw(3).currentFlame.mp = n
                    })("input", function() {
                        return t.CHM(e), t.oxw(3).inputHandler()
                    }), t.qZA()()
                }
                if (2 & o) {
                    const e = t.oxw(3);
                    t.xp6(3), t.Q6J("ngModel", e.currentFlame.mp)
                }
            }

            function k(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 26)(1, "label", 39), t._uU(2, "Weapon Att"), t.qZA(), t.TgZ(3, "input", 40), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw(3).currentFlame.att = n
                    })("input", function() {
                        return t.CHM(e), t.oxw(3).inputHandler()
                    }), t.qZA()()
                }
                if (2 & o) {
                    const e = t.oxw(3);
                    t.xp6(3), t.Q6J("ngModel", e.currentFlame.att)
                }
            }

            function O(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 26)(1, "label", 41), t._uU(2, "Magic Att"), t.qZA(), t.TgZ(3, "input", 42), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw(3).currentFlame.matt = n
                    })("input", function() {
                        return t.CHM(e), t.oxw(3).inputHandler()
                    }), t.qZA()()
                }
                if (2 & o) {
                    const e = t.oxw(3);
                    t.xp6(3), t.Q6J("ngModel", e.currentFlame.matt)
                }
            }

            function A(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 26)(1, "label", 43), t._uU(2, "All Stat (%)"), t.qZA(), t.TgZ(3, "input", 44), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw(3).currentFlame.allstat = n
                    })("input", function() {
                        return t.CHM(e), t.oxw(3).inputHandler()
                    }), t.qZA()()
                }
                if (2 & o) {
                    const e = t.oxw(3);
                    t.xp6(3), t.Q6J("ngModel", e.currentFlame.allstat)
                }
            }

            function J(o, i) {
                if (1 & o && (t.TgZ(0, "div", 24), t.YNc(1, I, 4, 1, "div", 25), t.YNc(2, b, 4, 1, "div", 25), t.YNc(3, Z, 4, 1, "div", 25), t.YNc(4, D, 4, 1, "div", 25), t.YNc(5, w, 4, 1, "div", 25), t.YNc(6, F, 4, 1, "div", 25), t.YNc(7, k, 4, 1, "div", 25), t.YNc(8, O, 4, 1, "div", 25), t.YNc(9, A, 4, 1, "div", 25), t.qZA()), 2 & o) {
                    const e = t.oxw(2);
                    t.xp6(1), t.Q6J("ngIf", e.selectedClass.flameStats.includes("str")), t.xp6(1), t.Q6J("ngIf", e.selectedClass.flameStats.includes("dex")), t.xp6(1), t.Q6J("ngIf", e.selectedClass.flameStats.includes("luk")), t.xp6(1), t.Q6J("ngIf", e.selectedClass.flameStats.includes("int")), t.xp6(1), t.Q6J("ngIf", e.selectedClass.flameStats.includes("hp")), t.xp6(1), t.Q6J("ngIf", e.selectedClass.flameStats.includes("mp")), t.xp6(1), t.Q6J("ngIf", e.selectedClass.flameStats.includes("att")), t.xp6(1), t.Q6J("ngIf", e.selectedClass.flameStats.includes("matt")), t.xp6(1), t.Q6J("ngIf", e.selectedClass.flameStats.includes("allstat"))
                }
            }

            function q(o, i) {
                1 & o && (t.TgZ(0, "div", 45), t._uU(1, " Unfortunately, I'm not aware of a flame scoring system for demon avengers. But according to scardor's guide your late game aim is going for tier 6 HP flames and your endgame aim is tier 6HP + 6att flames. A table to findout what tier a HP flame is can be found "), t.TgZ(2, "a", 46), t._uU(3, "here"), t.qZA(), t._uU(4, ". "), t.qZA())
            }

            function N(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.ynx(0), t.TgZ(1, "a", 47), t.NdJ("click", function() {
                        const r = t.CHM(e).index;
                        return t.oxw(2).changeCharacter(r)
                    }), t._uU(2), t.qZA(), t.BQk()
                }
                if (2 & o) {
                    const e = i.index,
                        a = t.oxw(2);
                    t.xp6(1), t.Q6J("ngClass", a.characterIndex == e ? "selected" : "notSelected"), t.xp6(1), t.Oqu(a.flameData.saveData[e].characterName)
                }
            }

            function U(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 48)(1, "div", 49)(2, "p"), t._uU(3, "Are you sure you want to overwrite this flame?"), t.qZA(), t.TgZ(4, "div", 50)(5, "button", 51), t.NdJ("click", function() {
                        return t.CHM(e), t.oxw(2).confirmSaving()
                    }), t._uU(6, "Yes"), t.qZA(), t.TgZ(7, "button", 52), t.NdJ("click", function() {
                        return t.CHM(e), t.oxw(2).cancelSaving()
                    }), t._uU(8, "No"), t.qZA()()()()
                }
            }

            function H(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "div")(1, "p", 5), t._uU(2, "The default flamescore multipliers are based on the flaming "), t.TgZ(3, "a", 6), t._uU(4, "guide"), t.qZA(), t._uU(5, " made by "), t.TgZ(6, "a", 7), t._uU(7, "Scardor"), t.qZA(), t._uU(8, ". The multipliers can be edited in the settings menu accessible on the right."), t.qZA(), t.TgZ(9, "div", 8)(10, "p"), t._uU(11, "Select your class"), t.qZA(), t.TgZ(12, "search-select", 9), t.NdJ("result", function(n) {
                        return t.CHM(e), t.oxw().updateSelectedClass(n)
                    }), t.qZA()(), t.TgZ(13, "div", 10)(14, "p"), t._uU(15, "Flame score"), t.qZA(), t.TgZ(16, "p", 11), t._uU(17), t.qZA()(), t.YNc(18, J, 10, 9, "div", 12), t.YNc(19, q, 5, 0, "div", 13), t.TgZ(20, "div", 14)(21, "h3"), t._uU(22, "Save your flamescores"), t.qZA(), t.TgZ(23, "p"), t._uU(24, "Click on a slot to save the current flame to it."), t._UZ(25, "br"), t._uU(26, "Clicking on a slot containing a flame will overwrite it."), t._UZ(27, "br"), t._uU(28, "A long press on a saved flame will load its stats back into the input fields above."), t.qZA(), t.TgZ(29, "div", 15), t.YNc(30, N, 3, 2, "ng-container", 16), t.qZA(), t.TgZ(31, "div", 17), t.YNc(32, U, 9, 0, "div", 18), t._UZ(33, "img", 19), t.TgZ(34, "table", 20)(35, "tr"), t._UZ(36, "th", 21)(37, "th", 21), t.TgZ(38, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("hat")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("hat")
                    }), t._uU(39), t.qZA(), t._UZ(40, "th", 21)(41, "th", 21), t.qZA(), t.TgZ(42, "tr"), t._UZ(43, "th", 21), t.TgZ(44, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("pendant2")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("pendant2")
                    }), t._uU(45), t.qZA(), t.TgZ(46, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("face")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("face")
                    }), t._uU(47), t.qZA(), t._UZ(48, "th", 21)(49, "th", 21), t.qZA(), t.TgZ(50, "tr"), t._UZ(51, "th", 21), t.TgZ(52, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("pendant1")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("pendant1")
                    }), t._uU(53), t.qZA(), t.TgZ(54, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("eye")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("eye")
                    }), t._uU(55), t.qZA(), t.TgZ(56, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("earrings")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("earrings")
                    }), t._uU(57), t.qZA(), t._UZ(58, "th", 21), t.qZA(), t.TgZ(59, "tr"), t._UZ(60, "th", 21)(61, "th", 21), t.TgZ(62, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("top")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("top")
                    }), t._uU(63), t.qZA(), t.TgZ(64, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("shoulder")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("shoulder")
                    }), t._uU(65), t.qZA(), t._UZ(66, "th", 21), t.qZA(), t.TgZ(67, "tr")(68, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("pocket")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("pocket")
                    }), t._uU(69), t.qZA(), t.TgZ(70, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("belt")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("belt")
                    }), t._uU(71), t.qZA(), t.TgZ(72, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("bottom")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("bottom")
                    }), t._uU(73), t.qZA(), t.TgZ(74, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("gloves")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("gloves")
                    }), t._uU(75), t.qZA(), t.TgZ(76, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("cape")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("cape")
                    }), t._uU(77), t.qZA()(), t.TgZ(78, "tr"), t._UZ(79, "th", 21)(80, "th", 21), t.TgZ(81, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("shoes")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("shoes")
                    }), t._uU(82), t.qZA(), t._UZ(83, "th", 21)(84, "th", 21), t.qZA(), t._UZ(85, "div", 23), t.TgZ(86, "tr")(87, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("extra1")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("extra1")
                    }), t._uU(88), t.qZA(), t.TgZ(89, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("extra2")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("extra2")
                    }), t._uU(90), t.qZA(), t.TgZ(91, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("extra3")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("extra3")
                    }), t._uU(92), t.qZA(), t.TgZ(93, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("extra4")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("extra4")
                    }), t._uU(94), t.qZA(), t.TgZ(95, "th", 22), t.NdJ("onShortPress", function() {
                        return t.CHM(e), t.oxw().saveFlame("extra5")
                    })("onLongPress", function() {
                        return t.CHM(e), t.oxw().loadFlame("extra5")
                    }), t._uU(96), t.qZA()()()()()()
                }
                if (2 & o) {
                    const e = t.oxw();
                    t.xp6(12), t.Q6J("data", e.classes)("defaultIndex", e.flameData.saveData[e.characterIndex].selectedClassIndex), t.xp6(5), t.Oqu(e.flameScore), t.xp6(1), t.Q6J("ngIf", null != e.selectedClass), t.xp6(1), t.Q6J("ngIf", e.selectedClass.flameStats.includes("da")), t.xp6(11), t.Q6J("ngForOf", e.flameData.saveData), t.xp6(2), t.Q6J("ngIf", e.saveConfirmationEnabled), t.xp6(7), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].hat)), t.xp6(6), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].pendant2)), t.xp6(2), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].face)), t.xp6(6), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].pendant1)), t.xp6(2), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].eye)), t.xp6(2), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].earrings)), t.xp6(6), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].top)), t.xp6(2), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].shoulder)), t.xp6(4), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].pocket)), t.xp6(2), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].belt)), t.xp6(2), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].bottom)), t.xp6(2), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].gloves)), t.xp6(2), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].cape)), t.xp6(5), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].shoes)), t.xp6(6), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].extra1)), t.xp6(2), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].extra2)), t.xp6(2), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].extra3)), t.xp6(2), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].extra4)), t.xp6(2), t.Oqu(e.calculateScore(e.flameData.saveData[e.characterIndex].extra5))
                }
            }

            function L(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.ynx(0), t.TgZ(1, "div", 56)(2, "label", 74), t.NdJ("click", function() {
                        const r = t.CHM(e).index;
                        return t.oxw(2).removeCharacter(r)
                    }), t._uU(3), t.qZA(), t.TgZ(4, "input", 75), t.NdJ("ngModelChange", function(n) {
                        const x = t.CHM(e).index;
                        return t.oxw(2).flameData.saveData[x].characterName = n
                    }), t.qZA()(), t.BQk()
                }
                if (2 & o) {
                    const e = i.index,
                        a = t.oxw(2);
                    t.xp6(2), t.s9C("for", "character" + e + "Name"), t.xp6(1), t.hij("Save slot ", e + 1, " name \xa0 [X]"), t.xp6(1), t.s9C("id", "character" + e + "Name"), t.s9C("name", "character" + e + "Name"), t.Q6J("ngModel", a.flameData.saveData[e].characterName)
                }
            }

            function B(o, i) {
                if (1 & o) {
                    const e = t.EpF();
                    t.TgZ(0, "div")(1, "div", 53)(2, "div", 54)(3, "p"), t._uU(4, "Multiplier presets:"), t.qZA(), t.TgZ(5, "button", 55), t.NdJ("click", function() {
                        return t.CHM(e), t.oxw().enablePreset("scardorLateGame")
                    }), t._uU(6, "Scardor Late Game"), t.qZA(), t.TgZ(7, "button", 55), t.NdJ("click", function() {
                        return t.CHM(e), t.oxw().enablePreset("scardorEndGame")
                    }), t._uU(8, "Scardor End Game"), t.qZA()(), t.TgZ(9, "h3"), t._uU(10, "Stat multipliers"), t.qZA(), t.TgZ(11, "div", 56)(12, "label", 57), t._uU(13, "Mainstat"), t.qZA(), t.TgZ(14, "input", 58), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw().flameData.mainStatMultiplier = n
                    }), t.qZA()(), t.TgZ(15, "div", 56)(16, "label", 59), t._uU(17, "Secondary Stat"), t.qZA(), t.TgZ(18, "input", 60), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw().flameData.secondaryStatMultiplier = n
                    }), t.qZA()(), t.TgZ(19, "div", 56)(20, "label", 61), t._uU(21, "HP & MP"), t.qZA(), t.TgZ(22, "input", 62), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw().flameData.hpMpMultiplier = n
                    }), t.qZA()(), t.TgZ(23, "div", 56)(24, "label", 63), t._uU(25, "Att & Matt"), t.qZA(), t.TgZ(26, "input", 64), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw().flameData.attMattMultiplier = n
                    }), t.qZA()(), t.TgZ(27, "div", 56)(28, "label", 65), t._uU(29, "All Stat"), t.qZA(), t.TgZ(30, "input", 66), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw().flameData.allstatMultiplier = n
                    }), t.qZA()(), t.TgZ(31, "div", 56)(32, "label", 67), t._uU(33, "Xenon All Stat"), t.qZA(), t.TgZ(34, "input", 68), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw().flameData.xenonAllstatMultiplier = n
                    }), t.qZA()(), t.TgZ(35, "div", 56)(36, "label", 69), t._uU(37, "Shadower/DB/Cadena AS"), t.qZA(), t.TgZ(38, "input", 70), t.NdJ("ngModelChange", function(n) {
                        return t.CHM(e), t.oxw().flameData.lukDoubleSecondaryAllStatMultiplier = n
                    }), t.qZA()()(), t._UZ(39, "div", 71), t.TgZ(40, "div", 53)(41, "h3"), t._uU(42, "Save slot names"), t.qZA(), t.TgZ(43, "p", 72), t._uU(44, "Additional characters can be added and removed. To remove a character click on the [X]"), t.qZA(), t.YNc(45, L, 5, 5, "ng-container", 16), t._UZ(46, "br"), t.TgZ(47, "button", 73), t.NdJ("click", function() {
                        return t.CHM(e), t.oxw().addCharacter()
                    }), t._uU(48, "Add Character"), t.qZA()()()
                }
                if (2 & o) {
                    const e = t.oxw();
                    t.xp6(14), t.Q6J("ngModel", e.flameData.mainStatMultiplier), t.xp6(4), t.Q6J("ngModel", e.flameData.secondaryStatMultiplier), t.xp6(4), t.Q6J("ngModel", e.flameData.hpMpMultiplier), t.xp6(4), t.Q6J("ngModel", e.flameData.attMattMultiplier), t.xp6(4), t.Q6J("ngModel", e.flameData.allstatMultiplier), t.xp6(4), t.Q6J("ngModel", e.flameData.xenonAllstatMultiplier), t.xp6(4), t.Q6J("ngModel", e.flameData.lukDoubleSecondaryAllStatMultiplier), t.xp6(7), t.Q6J("ngForOf", e.flameData.saveData)
                }
            }
            const E = [{
                path: "",
                component: (() => {
                    class o {
                        constructor(e, a) {
                            this.titleService = e, this.metaService = a, this.classes = y.S, this.characterIndex = 0, this.flameScore = 0, this.currentFlame = {
                                str: null,
                                dex: null,
                                luk: null,
                                int: null,
                                hp: null,
                                mp: null,
                                att: null,
                                matt: null,
                                allstat: null
                            }, this.editModeActive = !1, this.editButtonMessage = "Settings", this.saveConfirmationEnabled = !1, this.showInfo = !1
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Maplestory Flame Score Calculator | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "Maplestory flame score calculator to calculate and store the flame score of each equipment. Store and compare the scores of your equipment flames, supports storing scores for multiple characters."
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "index, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "index, follow"
                            }), this.initialise()
                        }
                        initialise() {
                            localStorage.getItem("flameData") ? this.flameData = JSON.parse(localStorage.getItem("flameData")) : this.initiateData()
                        }
                        initiateData() {
                            var e = this.getEmptySaveDataPreset(),
                                a = [];
                            for (let r = 0; r < 4; r++) e.characterName = "char" + (r + 1), a.push(JSON.parse(JSON.stringify(e)));
                            this.flameData = {
                                mainStatMultiplier: 1,
                                secondaryStatMultiplier: .125,
                                hpMpMultiplier: .014285,
                                attMattMultiplier: 4,
                                allstatMultiplier: 8.5,
                                xenonAllstatMultiplier: 15,
                                lukDoubleSecondaryAllStatMultiplier: 9,
                                saveData: a
                            }
                        }
                        getEmptySaveDataPreset() {
                            var e = {
                                str: null,
                                dex: null,
                                luk: null,
                                int: null,
                                hp: null,
                                mp: null,
                                att: null,
                                matt: null,
                                allstat: null
                            };
                            return {
                                characterName: "",
                                selectedClassIndex: 3,
                                hat: e,
                                top: e,
                                belt: e,
                                bottom: e,
                                shoes: e,
                                gloves: e,
                                cape: e,
                                shoulder: e,
                                pocket: e,
                                pendant1: e,
                                pendant2: e,
                                face: e,
                                eye: e,
                                earrings: e,
                                extra1: e,
                                extra2: e,
                                extra3: e,
                                extra4: e,
                                extra5: e
                            }
                        }
                        updateSelectedClass(e) {
                            this.selectedClass = e, this.resetValues(), this.flameData.saveData[this.characterIndex].selectedClassIndex = this.classes.findIndex(a => a.name == e.name), localStorage.setItem("flameData", JSON.stringify(this.flameData))
                        }
                        calculateScore(e) {
                            var a;
                            switch (this.selectedClass.flameType) {
                                case "str":
                                    a = this.calculateStrTypeScore(e);
                                    break;
                                case "dex":
                                    a = this.calculateDexTypeScore(e);
                                    break;
                                case "luk":
                                    a = this.calculateLukTypeScore(e);
                                    break;
                                case "int":
                                    a = this.calculateIntTypeScore(e);
                                    break;
                                case "lukDoubleSecondary":
                                    a = this.calculateLukDoubleSecondaryTypeScore(e);
                                    break;
                                case "kanna":
                                    a = this.calculateKannaTypeScore(e);
                                    break;
                                case "xenon":
                                    a = this.calculateXenonTypeScore(e)
                            }
                            return (a = Math.round(10 * (a + Number.EPSILON)) / 10) > 999 && (a = 999), a
                        }
                        inputHandler() {
                            this.flameScore = this.calculateScore(this.currentFlame), localStorage.setItem("flameData", JSON.stringify(this.flameData))
                        }
                        calculateStrTypeScore(e) {
                            return e.str * this.flameData.mainStatMultiplier + e.dex * this.flameData.secondaryStatMultiplier + e.att * this.flameData.attMattMultiplier + e.allstat * this.flameData.allstatMultiplier
                        }
                        calculateDexTypeScore(e) {
                            return e.dex * this.flameData.mainStatMultiplier + e.str * this.flameData.secondaryStatMultiplier + e.att * this.flameData.attMattMultiplier + e.allstat * this.flameData.allstatMultiplier
                        }
                        calculateLukTypeScore(e) {
                            return e.luk * this.flameData.mainStatMultiplier + e.dex * this.flameData.secondaryStatMultiplier + e.att * this.flameData.attMattMultiplier + e.allstat * this.flameData.allstatMultiplier
                        }
                        calculateIntTypeScore(e) {
                            return e.int * this.flameData.mainStatMultiplier + e.luk * this.flameData.secondaryStatMultiplier + e.matt * this.flameData.attMattMultiplier + e.allstat * this.flameData.allstatMultiplier
                        }
                        calculateLukDoubleSecondaryTypeScore(e) {
                            return e.luk * this.flameData.mainStatMultiplier + e.dex * this.flameData.secondaryStatMultiplier + e.str * this.flameData.secondaryStatMultiplier + e.att * this.flameData.attMattMultiplier + e.allstat * this.flameData.lukDoubleSecondaryAllStatMultiplier
                        }
                        calculateKannaTypeScore(e) {
                            return e.int * this.flameData.mainStatMultiplier + e.luk * this.flameData.secondaryStatMultiplier + e.matt * this.flameData.attMattMultiplier + e.allstat * this.flameData.allstatMultiplier + e.hp * this.flameData.hpMpMultiplier + e.mp * this.flameData.hpMpMultiplier
                        }
                        calculateXenonTypeScore(e) {
                            return e.luk * this.flameData.mainStatMultiplier + e.dex * this.flameData.mainStatMultiplier + e.str * this.flameData.mainStatMultiplier + e.att * this.flameData.attMattMultiplier + e.allstat * this.flameData.xenonAllstatMultiplier
                        }
                        resetValues() {
                            this.currentFlame.str = null, this.currentFlame.dex = null, this.currentFlame.luk = null, this.currentFlame.int = null, this.currentFlame.hp = null, this.currentFlame.mp = null, this.currentFlame.att = null, this.currentFlame.matt = null, this.currentFlame.allstat = null, this.flameScore = 0
                        }
                        changeCharacter(e) {
                            this.characterIndex = e, this.searchSelectChild.returnItem(this.classes[this.flameData.saveData[e].selectedClassIndex])
                        }
                        saveFlame(e) {
                            if (0 == this.calculateScore(this.flameData.saveData[this.characterIndex][e])) return this.flameData.saveData[this.characterIndex][e] = JSON.parse(JSON.stringify(this.currentFlame)), void localStorage.setItem("flameData", JSON.stringify(this.flameData));
                            this.saveConfirmationEnabled = !0, this.equipToSaveTo = e
                        }
                        loadFlame(e) {
                            this.currentFlame = JSON.parse(JSON.stringify(this.flameData.saveData[this.characterIndex][e])), this.inputHandler()
                        }
                        toggleEditMode() {
                            this.editModeActive ? (this.editModeActive = !1, this.editButtonMessage = "Settings", localStorage.setItem("flameData", JSON.stringify(this.flameData))) : (this.editModeActive = !0, this.editButtonMessage = "Exit Settings")
                        }
                        enablePreset(e) {
                            return "scardorLateGame" == e ? (this.flameData.mainStatMultiplier = 1, this.flameData.secondaryStatMultiplier = .125, this.flameData.hpMpMultiplier = .014285, this.flameData.attMattMultiplier = 4, this.flameData.allstatMultiplier = 8.5, this.flameData.xenonAllstatMultiplier = 15, void(this.flameData.lukDoubleSecondaryAllStatMultiplier = 9)) : "scardorEndGame" == e ? (this.flameData.mainStatMultiplier = 1, this.flameData.secondaryStatMultiplier = .1, this.flameData.hpMpMultiplier = .01, this.flameData.attMattMultiplier = 3, this.flameData.allstatMultiplier = 9, this.flameData.xenonAllstatMultiplier = 22, void(this.flameData.lukDoubleSecondaryAllStatMultiplier = 10)) : void 0
                        }
                        confirmSaving() {
                            this.saveConfirmationEnabled = !1, this.flameData.saveData[this.characterIndex][this.equipToSaveTo] = JSON.parse(JSON.stringify(this.currentFlame)), localStorage.setItem("flameData", JSON.stringify(this.flameData))
                        }
                        cancelSaving() {
                            this.saveConfirmationEnabled = !1
                        }
                        addCharacter() {
                            if (this.flameData.saveData.length < 20) {
                                var e = this.getEmptySaveDataPreset();
                                e.characterName = "char" + (this.flameData.saveData.length + 1), this.flameData.saveData.push(e)
                            } else window.alert("You have reached the limit of 20 characters.\nI really hope you don't actually have this many characters to track...")
                        }
                        removeCharacter(e) {
                            this.flameData.saveData.length > 1 ? window.confirm("Are sure you want to delete '" + this.flameData.saveData[e].characterName + "'?") && (this.characterIndex >= this.flameData.saveData.length - 1 ? this.characterIndex = this.characterIndex - 1 : 0 == this.characterIndex || e < this.characterIndex && (this.characterIndex = this.characterIndex - 1), this.flameData.saveData.splice(e, 1), localStorage.setItem("flameData", JSON.stringify(this.flameData))) : window.alert("Cannot remove this character as the minimum character count is one.")
                        }
                    }
                    return o.\u0275fac = function(e) {
                        return new(e || o)(t.Y36(M.Dx), t.Y36(M.h_))
                    }, o.\u0275cmp = t.Xpm({
                        type: o,
                        selectors: [
                            ["app-maplestory-item-flame-calculator"]
                        ],
                        viewQuery: function(e, a) {
                            if (1 & e && t.Gf(f, 5), 2 & e) {
                                let n;
                                t.iGM(n = t.CRH()) && (a.searchSelectChild = n.first)
                            }
                        },
                        decls: 7,
                        vars: 4,
                        consts: [
                            ["class", "info", 4, "ngIf"],
                            [1, "editedGamePageContent"],
                            [1, "editButton", 3, "click"],
                            [4, "ngIf"],
                            [1, "info"],
                            [1, "explanation"],
                            ["href", "https://docs.google.com/document/d/1R6dLFOEO5OfeiSZHgcUhCzplPLeeL0YSh9YaZFCRDE0", "target", "_blank"],
                            ["href", "https://www.twitch.tv/scardor", "target", "_blank"],
                            [1, "classSelector"],
                            [3, "data", "defaultIndex", "result"],
                            [1, "output"],
                            [1, "score"],
                            ["class", "flameInput", 4, "ngIf"],
                            ["class", "daNotice", 4, "ngIf"],
                            [1, "scoreSaverWrapper"],
                            [1, "characterNavigationBar"],
                            [4, "ngFor", "ngForOf"],
                            [1, "scoreSaver"],
                            ["class", "confirmationBoxWrapper", 4, "ngIf"],
                            ["src", "assets/Games/Maplestory/EquipWindow.png", "alt", "equipWindow"],
                            [1, "equipScoreGrid"],
                            [1, "hiddenOption"],
                            ["longPress", "", 3, "onShortPress", "onLongPress"],
                            [1, "extraSlotSpacer"],
                            [1, "flameInput"],
                            ["class", "inputLabelWrapper", 4, "ngIf"],
                            [1, "inputLabelWrapper"],
                            ["for", "str"],
                            ["name", "str", "id", "str", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            ["for", "dex"],
                            ["name", "dex", "id", "dex", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            ["for", "luk"],
                            ["name", "luk", "id", "luk", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            ["for", "int"],
                            ["name", "int", "id", "int", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            ["for", "hp"],
                            ["name", "hp", "id", "hp", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            ["for", "mp"],
                            ["name", "mp", "id", "mp", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            ["for", "att"],
                            ["name", "att", "id", "att", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            ["for", "matt"],
                            ["name", "matt", "id", "matt", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            ["for", "allstat"],
                            ["name", "allstat", "id", "allstat", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange", "input"],
                            [1, "daNotice"],
                            ["href", "https://strategywiki.org/wiki/MapleStory/Bonus_Stats#HP_increase", "target", "_blank"],
                            [3, "ngClass", "click"],
                            [1, "confirmationBoxWrapper"],
                            [1, "confirmationBox"],
                            [1, "buttonWrapper"],
                            [1, "buttonStyle", "left", 3, "click"],
                            [1, "buttonStyle", "right", 3, "click"],
                            [1, "settingsWrapper"],
                            [1, "presetWrapper"],
                            [1, "buttonStyle", 3, "click"],
                            [1, "characterNameInput"],
                            ["for", "mainStatMultiplier"],
                            ["name", "mainStatMultiplier", "id", "mainStatMultiplier", "type", "number", 1, "numberInput", 3, "ngModel", "ngModelChange"],
                            ["for", "secondaryStatMultiplier"],
                            ["type", "text", "id", "secondaryStatMultiplier", "name", "secondaryStatMultiplier", "maxlength", "12", 1, "textInput", 3, "ngModel", "ngModelChange"],
                            ["for", "hpMpMultiplier"],
                            ["type", "text", "id", "hpMpMultiplier", "name", "hpMpMultiplier", "maxlength", "12", 1, "textInput", 3, "ngModel", "ngModelChange"],
                            ["for", "attMattMultiplier"],
                            ["type", "text", "id", "attMattMultiplier", "name", "attMattMultiplier", "maxlength", "12", 1, "textInput", 3, "ngModel", "ngModelChange"],
                            ["for", "allstatMultiplier"],
                            ["type", "text", "id", "allstatMultiplier", "name", "allstatMultiplier", "maxlength", "12", 1, "textInput", 3, "ngModel", "ngModelChange"],
                            ["for", "xenonAllstatMultiplier"],
                            ["type", "text", "id", "xenonAllstatMultiplier", "name", "xenonAllstatMultiplier", "maxlength", "12", 1, "textInput", 3, "ngModel", "ngModelChange"],
                            ["for", "lukDoubleSecondaryAllStatMultiplier"],
                            ["type", "text", "id", "lukDoubleSecondaryAllStatMultiplier", "name", "lukDoubleSecondaryAllStatMultiplier", "maxlength", "12", 1, "textInput", 3, "ngModel", "ngModelChange"],
                            [1, "separator"],
                            [1, "multiCharInfo"],
                            [1, "buttonStyle", "addCharacterButton", 3, "click"],
                            [3, "for", "click"],
                            ["type", "text", "maxlength", "12", 1, "textInput", 3, "id", "name", "ngModel", "ngModelChange"]
                        ],
                        template: function(e, a) {
                            1 & e && (t._UZ(0, "app-maplestory-side-navigation"), t.YNc(1, P, 5, 0, "div", 0), t.TgZ(2, "div", 1)(3, "button", 2), t.NdJ("click", function() {
                                return a.toggleEditMode()
                            }), t._uU(4), t.qZA(), t.YNc(5, H, 97, 26, "div", 3), t.YNc(6, B, 49, 8, "div", 3), t.qZA()), 2 & e && (t.xp6(1), t.Q6J("ngIf", a.showInfo), t.xp6(3), t.Oqu(a.editButtonMessage), t.xp6(1), t.Q6J("ngIf", !a.editModeActive), t.xp6(1), t.Q6J("ngIf", a.editModeActive))
                        },
                        directives: [S.G, l.O5, f, p.wV, p.Fj, p.JJ, p.On, l.sg, l.mk, T.T, p.nD],
                        styles: [".selectSearchWrapper[_ngcontent-%COMP%]{display:table;width:200px;box-sizing:border-box;margin:0}.editButton[_ngcontent-%COMP%]{background-color:var(--game-page-accent-color);border:none;color:#fff;padding:5px 8px;text-align:center;font-size:16px;margin:8px 8px 0 0;outline:none;position:absolute;top:0;right:0;cursor:pointer}.explanation[_ngcontent-%COMP%]{text-align:center;max-width:400px;margin:0 auto 20px;padding-top:8px}.dropdown[_ngcontent-%COMP%]{position:relative;display:inline-block}.inputLabelWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-bottom:3px}.dropdown-content[_ngcontent-%COMP%]{position:absolute;background-color:var(--input-box-background-color);width:198px;z-index:1;margin:0;list-style-type:none;border:1px solid var(--input-box-border-color);padding:0;max-height:150px;border-top:0;overflow-y:scroll;scrollbar-width:thin;-ms-overflow-style:8px}li[_ngcontent-%COMP%]{padding-left:6px;font-size:14px;cursor:pointer}.dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:initial}.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%]{display:block}.selectInput[_ngcontent-%COMP%]{width:200px;padding:6px;margin:0;display:inline-block;border-radius:4px 4px 0 0;border:1px solid var(--input-box-border-color);box-sizing:border-box;color:var(--font-color);background-color:var(--input-box-background-color)}.selectInput[_ngcontent-%COMP%]:focus{outline:none}.bottomBorder[_ngcontent-%COMP%]{border-radius:4px}.classSelector[_ngcontent-%COMP%]{width:250px;margin:0 auto;text-align:center}.classSelector[_ngcontent-%COMP%]{width:210px;margin:0 auto;text-align:center}.classSelector[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:20px 0 3px}a[_ngcontent-%COMP%]{color:#fff}.output[_ngcontent-%COMP%]{margin:15px auto 0;width:90px;border:2px solid var(--game-page-accent-color);padding:5px}.output[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}.score[_ngcontent-%COMP%]{margin-top:3px}.flameInput[_ngcontent-%COMP%]{width:200px;margin:0 auto}.editedGamePageContent[_ngcontent-%COMP%]{position:relative;width:600px;margin:8px auto;background-color:var(--game-page-background-color);border:1px solid var(--game-page-border-color);min-height:calc(100vh - 72px)}.scoreSaverWrapper[_ngcontent-%COMP%]{margin:0 auto 10px;max-width:400px}.scoreSaverWrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:20px 0 0;text-align:center}.scoreSaverWrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}.scoreSaver[_ngcontent-%COMP%]{position:relative;margin:0 auto;width:232px;height:337px}.equipScoreGrid[_ngcontent-%COMP%]{position:absolute;top:27px;right:12px;border-spacing:3px}.equipScoreGrid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:38px;height:38px;padding:0;color:#fff;font-size:15px;cursor:pointer}.extraSlotSpacer[_ngcontent-%COMP%]{width:100%;height:7px}.hiddenOption[_ngcontent-%COMP%]{visibility:hidden}.characterNavigationBar[_ngcontent-%COMP%]{width:100%;margin-top:8px;margin-bottom:10px;text-align:center;overflow-wrap:break-word}.characterNavigationBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:2px 4px;margin:4px 4px 0;font-size:18px;display:inline-block;color:var(--font-color)}.characterNavigationBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer}.notSelected[_ngcontent-%COMP%]{border:2px solid var(--game-page-border-color)}.selected[_ngcontent-%COMP%]{border:2px solid var(--game-page-accent-color)}.settingsWrapper[_ngcontent-%COMP%]{text-align:center;margin:8px auto;max-width:350px}.settingsWrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 2px}.characterNameInput[_ngcontent-%COMP%]{display:inline-block;margin-top:3px}.characterNameInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;text-align:center;font-size:15px;cursor:pointer}.characterNameInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;margin-top:3px;text-align:center;width:180px}.buttonStyle[_ngcontent-%COMP%]{background-color:var(--game-page-accent-color);border:none;color:#fff;padding:5px 8px;text-align:center;font-size:16px;margin:0 auto 5px;width:170px;outline:none}.presetWrapper[_ngcontent-%COMP%]{max-width:250px;margin:0 auto 8px}.presetWrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 3px}.separator[_ngcontent-%COMP%]{max-width:230px;margin:0 auto 8px;border-bottom:1px solid gray}.confirmationBoxWrapper[_ngcontent-%COMP%]{position:absolute;background-color:#c8c8c833;width:100%;height:100%;z-index:50;border-radius:10px}.confirmationBox[_ngcontent-%COMP%]{width:182px;height:80px;background-color:#585858d9;border-radius:4px;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0}.confirmationBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px}.confirmationBox[_ngcontent-%COMP%]   .buttonStyle[_ngcontent-%COMP%]{width:60px}.buttonWrapper[_ngcontent-%COMP%]{width:135px;margin:0 auto}.buttonWrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{float:left}.buttonWrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{float:right}.daNotice[_ngcontent-%COMP%]{width:350px;margin:8px auto 0;text-align:center}.info[_ngcontent-%COMP%]{width:600px;margin:8px auto;background-color:var(--game-page-background-color);border:1px solid var(--game-page-border-color);text-align:center}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:400px;text-align:justify;margin:0 auto;padding-top:4px;padding-bottom:8px}.info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-top:8px;margin:0}.addCharacterButton[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px}.multiCharInfo[_ngcontent-%COMP%]{margin-top:3px;margin-bottom:7px}@media only screen and (max-width: 1104px){.editedGamePageContent[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 862px){.editedGamePageContent[_ngcontent-%COMP%]{width:calc(100% - 262px)}.explanation[_ngcontent-%COMP%]{max-width:360px}.info[_ngcontent-%COMP%]{width:calc(100% - 262px)}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:360px}}@media only screen and (max-width: 813px){.editedGamePageContent[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}.info[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;width:calc(100% - 18px)}}@media only screen and (max-width: 575px){.explanation[_ngcontent-%COMP%]{padding-top:38px}}"]
                    }), o
                })()
            }];
            let Q = (() => {
                class o {}
                return o.\u0275fac = function(e) {
                    return new(e || o)
                }, o.\u0275mod = t.oAB({
                    type: o
                }), o.\u0275inj = t.cJS({
                    imports: [
                        [_.Bz.forChild(E)], _.Bz
                    ]
                }), o
            })();
            var W = s(56928),
                Y = s(75326);
            let z = (() => {
                    class o {}
                    return o.\u0275fac = function(e) {
                        return new(e || o)
                    }, o.\u0275mod = t.oAB({
                        type: o
                    }), o.\u0275inj = t.cJS({
                        imports: [
                            [l.ez, Y.m]
                        ]
                    }), o
                })(),
                j = (() => {
                    class o {}
                    return o.\u0275fac = function(e) {
                        return new(e || o)
                    }, o.\u0275mod = t.oAB({
                        type: o
                    }), o.\u0275inj = t.cJS({
                        imports: [
                            [l.ez, z, Q, W.C]
                        ]
                    }), o
                })()
        },
        56928: (h, d, s) => {
            s.d(d, {
                C: () => p
            });
            var l = s(69808),
                _ = s(75326),
                t = s(72096);
            let p = (() => {
                class c {}
                return c.\u0275fac = function(u) {
                    return new(u || c)
                }, c.\u0275mod = t.oAB({
                    type: c
                }), c.\u0275inj = t.cJS({
                    imports: [
                        [l.ez, _.m], _.m
                    ]
                }), c
            })()
        },
        65534: (h, d, s) => {
            s.d(d, {
                G: () => t
            });
            var l = s(72096),
                _ = s(69414);
            let t = (() => {
                class p {
                    constructor(m) {
                        this.router = m
                    }
                    ngOnInit() {}
                }
                return p.\u0275fac = function(m) {
                    return new(m || p)(l.Y36(_.F0))
                }, p.\u0275cmp = l.Xpm({
                    type: p,
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
                    template: function(m, u) {
                        1 & m && (l.TgZ(0, "div", 0)(1, "div", 1), l._uU(2, "Maplestory"), l.qZA(), l.TgZ(3, "p"), l._uU(4, "General"), l.qZA(), l.TgZ(5, "a", 2)(6, "span"), l._uU(7, "Home"), l.qZA()(), l._UZ(8, "div", 3), l.TgZ(9, "p"), l._uU(10, "Calculators"), l.qZA(), l.TgZ(11, "a", 2)(12, "span"), l._uU(13, "Arcane symbols"), l.qZA()(), l.TgZ(14, "a", 2)(15, "span"), l._uU(16, "Sacred symbols"), l.qZA()(), l.TgZ(17, "a", 2)(18, "span"), l._uU(19, "Item flames"), l.qZA()(), l.TgZ(20, "a", 2)(21, "span"), l._uU(22, "Weapon flame"), l.qZA()(), l._UZ(23, "div", 3), l.TgZ(24, "p"), l._uU(25, "Trackers"), l.qZA(), l.TgZ(26, "a", 2)(27, "span"), l._uU(28, "Dailies"), l.qZA()(), l.TgZ(29, "a", 2)(30, "span"), l._uU(31, "Weeklies"), l.qZA()(), l._UZ(32, "div", 3), l.TgZ(33, "a", 2)(34, "span"), l._uU(35, "Export settings"), l.qZA()(), l._UZ(36, "div", 3), l.TgZ(37, "p"), l._uU(38, "Enjoying my creations?"), l.qZA(), l.TgZ(39, "a", 4)(40, "span"), l._uU(41, "consider donating here"), l.qZA()()()), 2 & m && (l.xp6(5), l.Q6J("routerLink", "/games/maplestory/home"), l.xp6(1), l.ekj("sidenavbaractivelink", u.router.isActive("/games/maplestory/home", !1)), l.xp6(5), l.Q6J("routerLink", "/games/maplestory/arcane-symbols"), l.xp6(1), l.ekj("sidenavbaractivelink", u.router.isActive("/games/maplestory/arcane-symbols", !1)), l.xp6(2), l.Q6J("routerLink", "/games/maplestory/sacred-symbols"), l.xp6(1), l.ekj("sidenavbaractivelink", u.router.isActive("/games/maplestory/sacred-symbols", !1)), l.xp6(2), l.Q6J("routerLink", "/games/maplestory/item-flames"), l.xp6(1), l.ekj("sidenavbaractivelink", u.router.isActive("/games/maplestory/item-flames", !1)), l.xp6(2), l.Q6J("routerLink", "/games/maplestory/weapon-flame"), l.xp6(1), l.ekj("sidenavbaractivelink", u.router.isActive("/games/maplestory/weapon-flame", !1)), l.xp6(5), l.Q6J("routerLink", "/games/maplestory/dailies"), l.xp6(1), l.ekj("sidenavbaractivelink", u.router.isActive("/games/maplestory/dailies", !1)), l.xp6(2), l.Q6J("routerLink", "/games/maplestory/weeklies"), l.xp6(1), l.ekj("sidenavbaractivelink", u.router.isActive("/games/maplestory/weeklies", !1)), l.xp6(3), l.Q6J("routerLink", "/games/maplestory/settings"), l.xp6(1), l.ekj("sidenavbaractivelink", u.router.isActive("/games/maplestory/settings", !1)))
                    },
                    directives: [_.yS],
                    styles: [""]
                }), p
            })()
        }
    }
]);