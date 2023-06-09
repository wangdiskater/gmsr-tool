"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [913], {
        91913: (V, p, s) => {
            s.r(p), s.d(p, {
                MaplestoryWeekliesV3Module: () => x
            });
            var d = s(69808),
                c = s(69414);
            const l = JSON.parse('{"version":"7.0","imagePrefix":"MapleWeeklies/","taskGroups":[{"title":"Weekly Bosses","tasks":[{"name":"Chaos Pink Bean","image":"ChaosPinkBean.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Hard Hilla","image":"HardHilla.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Cygnus","image":"Cygnus.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Chaos Zakum","image":"ChaosZakum.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Princess No","image":"PrincessNo.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Chaos Crimson Queen","image":"ChaosCrimsonQueen.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Chaos Pierre","image":"ChaosPierre.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Chaos Von Bon","image":"ChaosVonBon.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Chaos Vellum","image":"ChaosVellum.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Akechi Mitsuhide","image":"AkechiMitsuhide.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Hard Magnus","image":"HardMagnus.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Chaos Papulatus","image":"ChaosPapulatus.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Lotus","image":"Lotus.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Damien","image":"Damien.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Guardian Angel Slime","image":"GuardianAngelSlime.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Lucid","image":"Lucid.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Will","image":"Will.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Gloom","image":"Gloom.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Verus Hilla","image":"VerusHilla.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Darknell","image":"Darknell.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Harmony Coin Capping","image":"Event/Destiny/HarmonyCoin.png","done":false,"enabled":true,"type":"event","dispCon":"new Date().getTime() < 1661903999000"}],"allDisabled":false},{"title":"Weekly Tasks","tasks":[{"name":"Guild Buff","image":"GuildBuff.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Scrapyard","image":"Scrapyard.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Dark World Tree","image":"Dark World Tree.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Mu Lung Dojo","image":"MuLungDojo.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Kritias","image":"Kritias.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Flag Race","image":"FlagRace.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Sharenian Culvert","image":"SharenianCulvert.png","done":false,"enabled":true,"type":"default","dispCon":"true"}],"allDisabled":false}]}');
            var e = s(72096),
                m = s(22313),
                g = s(84165),
                h = s(65534),
                f = s(89019),
                k = s(32724),
                C = s(90873);

            function _(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 7)(1, "p"), e._uU(2, "The weeklies tracker has been updated!"), e._UZ(3, "br"), e._uU(4, ' There is now support for more than 4 characters, new characters can be added and removed in "Edit Weeklies". (more info can be found in "Edit Weeklies" itself)'), e._UZ(5, "br")(6, "br"), e._uU(7, " If you are experiencing issues press the reset button to reset the saved data, if not you can press the dismiss button."), e._UZ(8, "br"), e._uU(9, " If this does not resolve the issue please contact me on discord StarLines#0001. "), e.qZA(), e.TgZ(10, "button", 8), e.NdJ("click", function() {
                        return e.CHM(t), e.oxw().infoReset()
                    }), e._uU(11, "Reset Data"), e.qZA(), e.TgZ(12, "button", 8), e.NdJ("click", function() {
                        return e.CHM(t), e.oxw().infoDismiss()
                    }), e._uU(13, "Dismiss"), e.qZA()()
                }
            }

            function y(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "app-task-topbar-default", 9), e.NdJ("changeEvent", function() {
                        return e.CHM(t), e.oxw().changeHandler()
                    }), e.qZA()
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.Q6J("taskData", t.weekliesData)("topBarTitle", "Weekly Tracker")("editButtonTitle", "Weeklies")
                }
            }

            function v(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "app-task-topbar-editmode", 10), e.NdJ("changeEvent", function() {
                        return e.CHM(t), e.oxw().changeHandler()
                    })("regionChangeEvent", function() {
                        return e.CHM(t), e.oxw().regionChangeHandler()
                    })("addCharacterEvent", function() {
                        return e.CHM(t), e.oxw().addCharacter()
                    }), e.qZA()
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.Q6J("taskData", t.weekliesData)("topBarTitle", "Weekly Tracker")("regions", t.regions)
                }
            }

            function D(n, o) {
                1 & n && (e.TgZ(0, "div"), e._uU(1, ' All weeklies are disabled, click on the "Edit Weeklies" button to enable weeklies. '), e.qZA())
            }

            function M(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.ynx(0), e.TgZ(1, "app-task-group", 11), e.NdJ("changeEvent", function() {
                        return e.CHM(t), e.oxw().changeHandler()
                    }), e.qZA(), e.BQk()
                }
                if (2 & n) {
                    const t = o.$implicit,
                        a = o.index,
                        i = e.oxw();
                    e.xp6(1), e.Q6J("taskData", i.weekliesData)("taskGroup", t)("title", t.title)("timerString", i.timerStrings[a])
                }
            }
            const b = [{
                path: "",
                component: (() => {
                    class n {
                        constructor(t, a, i) {
                            this.titleService = t, this.metaService = a, this.taskService = i, this.initialisationComplete = !1, this.characterIndex = 0, this.timers = [], this.timerStrings = ["", ""], this.regions = [{
                                resetUtcOffset: 0,
                                name: "GMS"
                            }, {
                                resetUtcOffset: 8,
                                name: "MSEA"
                            }, {
                                resetUtcOffset: 9,
                                name: "KMS"
                            }]
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Maplestory Weeklies Tracker | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "A weeklies tracker for Maplestory to keep track of your completed weekly tasks. Keep track of your weeklies across multiple different characters."
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "index, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "index, follow"
                            }), this.initialise()
                        }
                        ngOnDestroy() {
                            this.timers[0] && clearInterval(this.timers[0]), this.timers[1] && clearInterval(this.timers[1])
                        }
                        initialise() {
                            localStorage.getItem("weekliesDataV3") ? (this.weekliesData = JSON.parse(localStorage.getItem("weekliesDataV3")), void 0 === this.weekliesData.mapleRegion && (this.weekliesData.mapleRegion = {
                                resetUtcOffset: 0,
                                name: "GMS"
                            }), this.weekliesData.editModeActive = !1, this.weeklyResetChecker(), this.updateChecker(), this.checkIfAllGroupsAreDisabled()) : localStorage.getItem("weekliesData") ? (this.weekliesData = this.taskService.v2v3Updater("weekliesData"), this.changeHandler(), this.initialise()) : this.weekliesData = this.taskService.initiateDataSet(l, 4), this.startTimer(0), this.startTimer(1), this.initialisationComplete = !0
                        }
                        weeklyResetChecker() {
                            var t = this.calculateResetDayTime(4) - 6048e5,
                                a = this.calculateResetDayTime(1) - 6048e5,
                                i = parseInt(this.weekliesData.lastTrackerVisit);
                            i < t && this.taskService.resetCompletionIndex(this.weekliesData, 0), i < a && this.taskService.resetCompletionIndex(this.weekliesData, 1), this.weekliesData.lastTrackerVisit = Date.now().toString(), this.changeHandler()
                        }
                        updateChecker() {
                            this.weekliesData.version != l.version && (this.weekliesData = this.taskService.updateTaskStructure(this.weekliesData, l), this.changeHandler())
                        }
                        startTimer(t) {
                            var a;
                            clearInterval(this.timers[t]), a = this.calculateResetDayTime(0 == t ? 4 : 1), this.calculateAndOutPutTimes(a - (new Date).getTime(), t), this.timers[t] = setInterval(() => {
                                var i = a - (new Date).getTime();
                                this.calculateAndOutPutTimes(i, t), i < 0 && (clearInterval(this.timers[t]), this.liveReset(t))
                            }, 1e3)
                        }
                        calculateResetDayTime(t) {
                            var a = new Date,
                                i = new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), 0, 0, 0, 0));
                            i.setTime(i.getTime() + 24 * ((7 + t - i.getUTCDay() - 1) % 7 + 1) * 60 * 60 * 1e3);
                            var r = i.valueOf();
                            return (r -= 60 * this.weekliesData.mapleRegion.resetUtcOffset * 60 * 1e3) < a.getTime() && (r += 6048e5), r
                        }
                        calculateAndOutPutTimes(t, a) {
                            if (t < 0) this.timerStrings[a] = "RESET!";
                            else {
                                var i = Math.floor(t / 864e5),
                                    r = Math.floor(t % 864e5 / 36e5),
                                    S = Math.floor(t % 36e5 / 6e4),
                                    W = Math.floor(t % 6e4 / 1e3);
                                this.timerStrings[a] = i + "d " + r + "h " + S + "m " + ("00" + W).slice(-2) + "s "
                            }
                        }
                        liveReset(t) {
                            this.taskService.resetCompletionIndex(this.weekliesData, t), this.startTimer(t), this.weekliesData.lastTrackerVisit = (parseInt(Date.now().toString()) + 5e3).toString(), this.changeHandler()
                        }
                        checkIfAllGroupsAreDisabled() {
                            this.allGroupsAreDisabled = !this.weekliesData.characters[this.weekliesData.selectedCharacterIndex].taskGroups.some(t => !t.allDisabled)
                        }
                        addCharacter() {
                            this.taskService.addCharacter(this.weekliesData, l), this.changeHandler()
                        }
                        infoReset() {
                            localStorage.removeItem("weeklies"), localStorage.removeItem("weekliesData"), localStorage.removeItem("weekliesDataV3"), this.initialise(), this.weekliesData.infoVisible = !0
                        }
                        infoDismiss() {
                            this.weekliesData.infoVisible = !1, this.changeHandler()
                        }
                        changeHandler() {
                            localStorage.setItem("weekliesDataV3", JSON.stringify(this.weekliesData)), this.checkIfAllGroupsAreDisabled()
                        }
                        regionChangeHandler() {
                            this.weeklyResetChecker(), this.startTimer(0), this.startTimer(1)
                        }
                    }
                    return n.\u0275fac = function(t) {
                        return new(t || n)(e.Y36(m.Dx), e.Y36(m.h_), e.Y36(g.M))
                    }, n.\u0275cmp = e.Xpm({
                        type: n,
                        selectors: [
                            ["app-maplestory-weeklies-v3"]
                        ],
                        decls: 8,
                        vars: 5,
                        consts: [
                            ["class", "info", 4, "ngIf"],
                            [1, "gamePageContent"],
                            [3, "taskData", "topBarTitle", "editButtonTitle", "changeEvent", 4, "ngIf"],
                            [3, "taskData", "topBarTitle", "regions", "changeEvent", "regionChangeEvent", "addCharacterEvent", 4, "ngIf"],
                            [1, "dailyGroups"],
                            [4, "ngIf"],
                            [4, "ngFor", "ngForOf"],
                            [1, "info"],
                            [1, "buttonStyle", 3, "click"],
                            [3, "taskData", "topBarTitle", "editButtonTitle", "changeEvent"],
                            [3, "taskData", "topBarTitle", "regions", "changeEvent", "regionChangeEvent", "addCharacterEvent"],
                            [3, "taskData", "taskGroup", "title", "timerString", "changeEvent"]
                        ],
                        template: function(t, a) {
                            1 & t && (e._UZ(0, "app-maplestory-side-navigation"), e.YNc(1, _, 14, 0, "div", 0), e.TgZ(2, "div", 1), e.YNc(3, y, 1, 3, "app-task-topbar-default", 2), e.YNc(4, v, 1, 3, "app-task-topbar-editmode", 3), e.TgZ(5, "div", 4), e.YNc(6, D, 2, 0, "div", 5), e.YNc(7, M, 2, 4, "ng-container", 6), e.qZA()()), 2 & t && (e.xp6(1), e.Q6J("ngIf", !a.initialisationComplete || a.weekliesData.infoVisible), e.xp6(2), e.Q6J("ngIf", !a.weekliesData.editModeActive), e.xp6(1), e.Q6J("ngIf", a.weekliesData.editModeActive), e.xp6(2), e.Q6J("ngIf", a.allGroupsAreDisabled && !a.weekliesData.editModeActive), e.xp6(1), e.Q6J("ngForOf", a.weekliesData.characters[a.weekliesData.selectedCharacterIndex].taskGroups))
                        },
                        directives: [h.G, d.O5, f.R, k.t, d.sg, C.H],
                        styles: [".gamePageContent[_ngcontent-%COMP%]{position:relative;padding-bottom:8px;margin-bottom:8px}.taskGroupWrapper[_ngcontent-%COMP%]{display:inline-block;margin:0 7px;vertical-align:top}.taskGroupTitle[_ngcontent-%COMP%]{margin:0;font-size:20px;width:262px}.disableMode[_ngcontent-%COMP%]{width:100px;height:50px}.dailyGroups[_ngcontent-%COMP%]{height:100%;max-width:552px;margin:0 auto;overflow:hidden;text-align:center}.buttonWrapper[_ngcontent-%COMP%]{width:175px;margin:0 auto}.buttonWrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0}.buttonWrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{float:left}.buttonWrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{float:right}.info[_ngcontent-%COMP%]{width:1130px;margin:8px auto;background-color:var(--game-page-background-color);border:1px solid var(--game-page-border-color);text-align:center}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:600px;text-align:center;margin:0 auto;padding-top:8px}.info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:8px}@media only screen and (max-width: 1635px){.info[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 1391px){.info[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width: 800px){.info[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;width:calc(100% - 18px)}}@media only screen and (max-width: 576px){.dailyGroups[_ngcontent-%COMP%]{max-width:276px}}"]
                    }), n
                })()
            }];
            let w = (() => {
                class n {}
                return n.\u0275fac = function(t) {
                    return new(t || n)
                }, n.\u0275mod = e.oAB({
                    type: n
                }), n.\u0275inj = e.cJS({
                    imports: [
                        [c.Bz.forChild(b)], c.Bz
                    ]
                }), n
            })();
            var T = s(56928),
                u = s(24447);
            let x = (() => {
                class n {}
                return n.\u0275fac = function(t) {
                    return new(t || n)
                }, n.\u0275mod = e.oAB({
                    type: n
                }), n.\u0275inj = e.cJS({
                    imports: [
                        [d.ez, w, T.C, u.m], u.m
                    ]
                }), n
            })()
        }
    }
]);