"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [907], {
        36953: (t, a, e) => {
            e.d(a, {
                T: () => o
            });
            var _ = e(72096);
            let o = (() => {
                class s {
                    constructor() {
                        this.onLongPress = new _.vpe, this.onShortPress = new _.vpe, this.onLongPressing = new _.vpe
                    }
                    get press() {
                        return this.pressing
                    }
                    get longPress() {
                        return this.longPressing
                    }
                    onMouseDown(n) {
                        this.pressing = !0, this.longPressing = !1, this.timeout = setTimeout(() => {
                            this.longPressing = !0, this.onLongPress.emit(n), this.interval = setInterval(() => {
                                this.onLongPressing.emit(n)
                            }, 50)
                        }, 400)
                    }
                    endPress(n) {
                        clearTimeout(this.timeout), clearInterval(this.interval), !this.longPressing && this.pressing && this.onShortPress.emit(n), this.longPressing = !1, this.pressing = !1
                    }
                }
                return s.\u0275fac = function(n) {
                    return new(n || s)
                }, s.\u0275dir = _.lG2({
                    type: s,
                    selectors: [
                        ["", "longPress", ""]
                    ],
                    hostVars: 4,
                    hostBindings: function(n, i) {
                        1 & n && _.NdJ("touchstart", function(c) {
                            return i.onMouseDown(c)
                        })("mousedown", function(c) {
                            return i.onMouseDown(c)
                        })("touchend", function() {
                            return i.endPress()
                        })("mouseup", function() {
                            return i.endPress()
                        })("mouseleave", function() {
                            return i.endPress()
                        }), 2 & n && _.ekj("press", i.press)("longpress", i.longPress)
                    },
                    outputs: {
                        onLongPress: "onLongPress",
                        onShortPress: "onShortPress",
                        onLongPressing: "onLongPressing"
                    }
                }), s
            })()
        },
        57856: (t, a, e) => {
            e.d(a, {
                c: () => E
            });
            var _ = e(72096);
            let o = (() => {
                class n {
                    constructor(r) {
                        this.elRef = r
                    }
                    ngAfterViewInit() {
                        this.elRef.nativeElement.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                }
                return n.\u0275fac = function(r) {
                    return new(r || n)(_.Y36(_.SBq))
                }, n.\u0275dir = _.lG2({
                    type: n,
                    selectors: [
                        ["", "scrollTo", ""]
                    ]
                }), n
            })();
            var s = e(34182);
            let E = (() => {
                class n {
                    constructor() {
                        this.cancelAddingTaskEvent = new _.vpe, this.confirmAddingTaskEvent = new _.vpe, this.customTaskName = "", this.customTaskImageUrl = ""
                    }
                    confirmAddingCustomTask() {
                        "" != this.customTaskName ? ("" == this.customTaskImageUrl && (this.customTaskImageUrl = "assets/TrackerImages/Custom.png"), this.confirmAddingTaskEvent.emit({
                            name: this.customTaskName,
                            image: this.customTaskImageUrl,
                            done: !1,
                            enabled: !0,
                            type: "custom",
                            dispCon: "true"
                        })) : this.cancelAddingCustomTask()
                    }
                    cancelAddingCustomTask() {
                        this.cancelAddingTaskEvent.emit()
                    }
                }
                return n.\u0275fac = function(r) {
                    return new(r || n)
                }, n.\u0275cmp = _.Xpm({
                    type: n,
                    selectors: [
                        ["app-task-adder"]
                    ],
                    outputs: {
                        cancelAddingTaskEvent: "cancelAddingTaskEvent",
                        confirmAddingTaskEvent: "confirmAddingTaskEvent"
                    },
                    decls: 16,
                    vars: 2,
                    consts: [
                        ["scrollTo", "", 1, "customNameInputWrapper"],
                        [1, "customNameInput"],
                        [1, "inputWrapper"],
                        [1, "characterNameInput"],
                        ["for", "customName"],
                        ["type", "text", "id", "customName", "name", "customName", "maxlength", "30", 1, "textInput", 3, "ngModel", "ngModelChange", "keyup.enter"],
                        ["for", "customUrl"],
                        ["type", "text", "id", "customUrl", "name", "customUrl", 1, "textInput", 3, "ngModel", "ngModelChange", "keyup.enter"],
                        [1, "buttonWrapper"],
                        [1, "buttonStyle", "left", 3, "click"],
                        [1, "buttonStyle", "right", 3, "click"]
                    ],
                    template: function(r, c) {
                        1 & r && (_.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4), _._uU(5, "Custom task name"), _.qZA(), _.TgZ(6, "input", 5), _.NdJ("ngModelChange", function(g) {
                            return c.customTaskName = g
                        })("keyup.enter", function() {
                            return c.confirmAddingCustomTask()
                        }), _.qZA()(), _.TgZ(7, "div", 3)(8, "label", 6), _._uU(9, "Optional custom image url"), _.qZA(), _.TgZ(10, "input", 7), _.NdJ("ngModelChange", function(g) {
                            return c.customTaskImageUrl = g
                        })("keyup.enter", function() {
                            return c.confirmAddingCustomTask()
                        }), _.qZA()()(), _.TgZ(11, "div", 8)(12, "button", 9), _.NdJ("click", function() {
                            return c.confirmAddingCustomTask()
                        }), _._uU(13, "Confirm"), _.qZA(), _.TgZ(14, "button", 10), _.NdJ("click", function() {
                            return c.cancelAddingCustomTask()
                        }), _._uU(15, "Cancel"), _.qZA()()()()), 2 & r && (_.xp6(6), _.Q6J("ngModel", c.customTaskName), _.xp6(4), _.Q6J("ngModel", c.customTaskImageUrl))
                    },
                    directives: [o, s.Fj, s.nD, s.JJ, s.On],
                    styles: [".customNameInputWrapper[_ngcontent-%COMP%]{position:absolute;background-color:var(--custom-task-input-wrapper-color);width:100%;height:100%;z-index:50;top:0}.customNameInput[_ngcontent-%COMP%]{width:250px;height:170px;background-color:var(--custom-task-input-color);border-radius:4px;position:absolute;margin:auto;top:300px;left:0;right:0;border:2px solid var(--custom-task-input-border-color)}.customNameInput[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%;height:100%;margin:0 auto}.customNameInput[_ngcontent-%COMP%]   .buttonStyle[_ngcontent-%COMP%]{width:80px}.customNameInput[_ngcontent-%COMP%]   .characterNameInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:220px}.buttonWrapper[_ngcontent-%COMP%]{width:175px;margin:10px auto 0}.buttonWrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0}.buttonWrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{float:left}.buttonWrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{float:right}.characterNameInput[_ngcontent-%COMP%]{display:inline-block;margin-top:3px}.characterNameInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;text-align:center;font-size:15px}.characterNameInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;margin-top:3px;text-align:center;width:180px}"]
                }), n
            })()
        },
        49587: (t, a, e) => {
            e.d(a, {
                r: () => i
            });
            var _ = e(72096),
                o = e(69808),
                s = e(36953);

            function E(r, c) {
                if (1 & r) {
                    const l = _.EpF();
                    _.ynx(0), _.TgZ(1, "a", 3), _.NdJ("onShortPress", function() {
                        const p = _.CHM(l).index;
                        return _.oxw().changeCharacter(p)
                    })("onLongPress", function() {
                        const p = _.CHM(l).index;
                        return _.oxw().removeCharacter(p)
                    }), _._uU(2), _.qZA(), _.BQk()
                }
                if (2 & r) {
                    const l = c.$implicit,
                        g = c.index,
                        u = _.oxw();
                    _.xp6(1), _.Q6J("ngClass", u.taskData.selectedCharacterIndex == g ? "selected" : "notSelected"), _.xp6(1), _.Oqu(l.characterName)
                }
            }

            function n(r, c) {
                if (1 & r) {
                    const l = _.EpF();
                    _.TgZ(0, "a", 4), _.NdJ("click", function() {
                        return _.CHM(l), _.oxw().addCharacter()
                    }), _._uU(1, "+"), _.qZA()
                }
            }
            let i = (() => {
                class r {
                    constructor() {
                        this.changeEvent = new _.vpe, this.addCharacterEvent = new _.vpe
                    }
                    changeCharacter(l) {
                        this.taskData.selectedCharacterIndex = l, this.changeHandler()
                    }
                    addCharacter() {
                        this.taskData.characters.length < 20 ? this.addCharacterEvent.emit() : window.alert("You have reached the limit of 20 characters.\nI really hope you don't actually have this many characters to track...")
                    }
                    removeCharacter(l) {
                        !this.editModeActive || (this.taskData.characters.length > 1 ? window.confirm("Are sure you want to delete '" + this.taskData.characters[l].characterName + "'?") && (this.taskData.selectedCharacterIndex >= this.taskData.characters.length - 1 ? this.taskData.selectedCharacterIndex = this.taskData.selectedCharacterIndex - 1 : 0 == this.taskData.selectedCharacterIndex || l < this.taskData.selectedCharacterIndex && (this.taskData.selectedCharacterIndex = this.taskData.selectedCharacterIndex - 1), this.taskData.characters.splice(l, 1), this.changeHandler()) : window.alert("Cannot remove this character as the minimum character count is one."))
                    }
                    changeHandler() {
                        this.changeEvent.emit()
                    }
                }
                return r.\u0275fac = function(l) {
                    return new(l || r)
                }, r.\u0275cmp = _.Xpm({
                    type: r,
                    selectors: [
                        ["app-task-character-navigation-bar"]
                    ],
                    inputs: {
                        taskData: "taskData",
                        editModeActive: "editModeActive"
                    },
                    outputs: {
                        changeEvent: "changeEvent",
                        addCharacterEvent: "addCharacterEvent"
                    },
                    decls: 3,
                    vars: 2,
                    consts: [
                        [1, "characterNavigationBar"],
                        [4, "ngFor", "ngForOf"],
                        ["class", "notSelected", 3, "click", 4, "ngIf"],
                        ["longPress", "", 3, "ngClass", "onShortPress", "onLongPress"],
                        [1, "notSelected", 3, "click"]
                    ],
                    template: function(l, g) {
                        1 & l && (_.TgZ(0, "div", 0), _.YNc(1, E, 3, 2, "ng-container", 1), _.YNc(2, n, 2, 0, "a", 2), _.qZA()), 2 & l && (_.xp6(1), _.Q6J("ngForOf", g.taskData.characters), _.xp6(1), _.Q6J("ngIf", g.editModeActive))
                    },
                    directives: [o.sg, s.T, o.mk, o.O5],
                    styles: [".characterNavigationBar[_ngcontent-%COMP%]{max-width:700px;margin:25px auto 20px;text-align:center;overflow-wrap:break-word}.characterNavigationBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:2px 4px;margin:4px 4px 0;font-size:18px;display:inline-block}.characterNavigationBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer}.notSelected[_ngcontent-%COMP%]{border:2px solid var(--game-page-border-color)}.selected[_ngcontent-%COMP%]{border:2px solid var(--game-page-accent-color)}"]
                }), r
            })()
        },
        90873: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                H: () => TaskGroupComponent
            });
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72096),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69808),
                _task_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57756),
                _task_custom_tasks_ursus_task_ursus_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54753),
                _task_custom_tasks_yu_garden_task_yu_garden_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44846),
                _task_adder_task_adder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57856);

            function TaskGroupComponent_div_0_ng_container_5_app_task_1_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "app-task", 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("disableEvent", function(o) {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(3).disableTask(o)
                    })("moveEvent", function(o) {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(3).moveTask(o)
                    })("changeEvent", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(3).changeHandler()
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()
                }
                if (2 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(),
                        _ = e.$implicit,
                        o = e.index,
                        s = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("task", _)("editModeActive", s.taskData.editModeActive)("title", s.title)("index", o)("imagePrefix", s.taskData.imagePrefix)
                }
            }

            function TaskGroupComponent_div_0_ng_container_5_app_ursus_task_2_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "app-ursus-task", 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("disableEvent", function(o) {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(3).disableTask(o)
                    })("moveEvent", function(o) {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(3).moveTask(o)
                    })("changeEvent", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(3).changeHandler()
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()
                }
                if (2 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(),
                        _ = e.$implicit,
                        o = e.index,
                        s = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("task", _)("editModeActive", s.taskData.editModeActive)("title", s.title)("index", o)("imagePrefix", s.taskData.imagePrefix)("resetUtcOffset", s.taskData.mapleRegion.resetUtcOffset)
                }
            }

            function TaskGroupComponent_div_0_ng_container_5_app_yu_garden_task_3_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "app-yu-garden-task", 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("disableEvent", function(o) {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(3).disableTask(o)
                    })("moveEvent", function(o) {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(3).moveTask(o)
                    })("changeEvent", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(3).changeHandler()
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()
                }
                if (2 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(),
                        _ = e.$implicit,
                        o = e.index,
                        s = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("task", _)("editModeActive", s.taskData.editModeActive)("title", s.title)("index", o)("imagePrefix", s.taskData.imagePrefix)("resetUtcOffset", s.taskData.mapleRegion.resetUtcOffset)
                }
            }

            function TaskGroupComponent_div_0_ng_container_5_Template(t, a) {
                if (1 & t && (_angular_core__WEBPACK_IMPORTED_MODULE_0__.ynx(0), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(1, TaskGroupComponent_div_0_ng_container_5_app_task_1_Template, 1, 5, "app-task", 7), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(2, TaskGroupComponent_div_0_ng_container_5_app_ursus_task_2_Template, 1, 6, "app-ursus-task", 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(3, TaskGroupComponent_div_0_ng_container_5_app_yu_garden_task_3_Template, 1, 6, "app-yu-garden-task", 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__.BQk()), 2 & t) {
                    const e = a.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", "Ursus" != e.name && "Yu Garden" != e.name), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", "Ursus" == e.name), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", "Yu Garden" == e.name)
                }
            }

            function TaskGroupComponent_div_0_div_6_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "div", 11), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).customTaskStartAdding()
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(1, "div", 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(2, "img", 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(3, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(4, "Add Custom Task"), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(5, "div", 14)(6, "div", 15), _angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(7, "i", 16), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()()
                }
            }

            function TaskGroupComponent_div_0_Template(t, a) {
                if (1 & t && (_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "div", 2)(1, "p", 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(2), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(3, "p", 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(4), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(5, TaskGroupComponent_div_0_ng_container_5_Template, 4, 3, "ng-container", 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(6, TaskGroupComponent_div_0_div_6_Template, 8, 0, "div", 6), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()), 2 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Oqu(e.title), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Oqu(e.timerString), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngForOf", e.taskGroup.tasks), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", e.taskData.editModeActive)
                }
            }

            function TaskGroupComponent_app_task_adder_1_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "app-task-adder", 17), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("cancelAddingTaskEvent", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw().customTaskCancelAdding()
                    })("confirmAddingTaskEvent", function(o) {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw().customTaskConfirmAdding(o)
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()
                }
            }
            let TaskGroupComponent = (() => {
                class TaskGroupComponent {
                    constructor() {
                        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.vpe, this.allTasksDisabled = !1, this.addingCustomTask = !1
                    }
                    ngOnInit() {
                        this.checkIfGroupIsFullyDisabled()
                    }
                    moveTask(t) {
                        if ("up" == t.direction) {
                            if (0 == t.index) return;
                            var a = this.taskGroup.tasks[t.index - 1];
                            this.taskGroup.tasks[t.index - 1] = this.taskGroup.tasks[t.index], this.taskGroup.tasks[t.index] = a
                        }
                        if ("down" == t.direction) {
                            if (t.index + 1 == this.taskGroup.tasks.length) return;
                            a = this.taskGroup.tasks[t.index + 1], this.taskGroup.tasks[t.index + 1] = this.taskGroup.tasks[t.index], this.taskGroup.tasks[t.index] = a
                        }
                    }
                    disableTask(t) {
                        "custom" != this.taskGroup.tasks[t].type && "Custom.png" != this.taskGroup.tasks[t].image ? (this.taskGroup.tasks[t].enabled = !this.taskGroup.tasks[t].enabled, this.checkIfGroupIsFullyDisabled()) : this.taskGroup.tasks.splice(t, 1)
                    }
                    evaluateDisplayCondition(condition) {
                        try {
                            return eval(condition)
                        } catch (t) {
                            return !0
                        }
                    }
                    checkIfGroupIsFullyDisabled() {
                        this.taskGroup.allDisabled = !this.taskGroup.tasks.some(t => t.enabled), this.changeHandler()
                    }
                    customTaskStartAdding() {
                        this.addingCustomTask = !0
                    }
                    customTaskConfirmAdding(t) {
                        this.taskGroup.tasks.push(t), this.addingCustomTask = !1, this.checkIfGroupIsFullyDisabled(), this.changeHandler()
                    }
                    customTaskCancelAdding() {
                        this.addingCustomTask = !1
                    }
                    changeHandler() {
                        this.changeEvent.emit()
                    }
                }
                return TaskGroupComponent.\u0275fac = function t(a) {
                    return new(a || TaskGroupComponent)
                }, TaskGroupComponent.\u0275cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Xpm({
                    type: TaskGroupComponent,
                    selectors: [
                        ["app-task-group"]
                    ],
                    inputs: {
                        taskData: "taskData",
                        taskGroup: "taskGroup",
                        title: "title",
                        timerString: "timerString"
                    },
                    outputs: {
                        changeEvent: "changeEvent"
                    },
                    decls: 2,
                    vars: 2,
                    consts: [
                        ["class", "taskGroupWrapper", 4, "ngIf"],
                        [3, "cancelAddingTaskEvent", "confirmAddingTaskEvent", 4, "ngIf"],
                        [1, "taskGroupWrapper"],
                        [1, "taskGroupTitle"],
                        [1, "timer"],
                        [4, "ngFor", "ngForOf"],
                        ["class", "taskWrapper addTask", 3, "click", 4, "ngIf"],
                        [3, "task", "editModeActive", "title", "index", "imagePrefix", "disableEvent", "moveEvent", "changeEvent", 4, "ngIf"],
                        [3, "task", "editModeActive", "title", "index", "imagePrefix", "resetUtcOffset", "disableEvent", "moveEvent", "changeEvent", 4, "ngIf"],
                        [3, "task", "editModeActive", "title", "index", "imagePrefix", "disableEvent", "moveEvent", "changeEvent"],
                        [3, "task", "editModeActive", "title", "index", "imagePrefix", "resetUtcOffset", "disableEvent", "moveEvent", "changeEvent"],
                        [1, "taskWrapper", "addTask", 3, "click"],
                        [1, "imgWrapper"],
                        ["src", "assets/TrackerImages/Custom.png", "alt", "custom"],
                        [1, "inputWrapper"],
                        [1, "taskAdder"],
                        [1, "fa", "fa-plus", "fa-2x"],
                        [3, "cancelAddingTaskEvent", "confirmAddingTaskEvent"]
                    ],
                    template: function t(a, e) {
                        1 & a && (_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(0, TaskGroupComponent_div_0_Template, 7, 4, "div", 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(1, TaskGroupComponent_app_task_adder_1_Template, 1, 0, "app-task-adder", 1)), 2 & a && (_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", !e.taskGroup.allDisabled || e.taskData.editModeActive), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", e.addingCustomTask))
                    },
                    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.O5, _angular_common__WEBPACK_IMPORTED_MODULE_1__.sg, _task_task_component__WEBPACK_IMPORTED_MODULE_2__.m, _task_custom_tasks_ursus_task_ursus_task_component__WEBPACK_IMPORTED_MODULE_3__.n, _task_custom_tasks_yu_garden_task_yu_garden_task_component__WEBPACK_IMPORTED_MODULE_4__.B, _task_adder_task_adder_component__WEBPACK_IMPORTED_MODULE_5__.c],
                    styles: [".taskGroupWrapper[_ngcontent-%COMP%]{margin:0 7px;float:left;vertical-align:top}.taskGroupTitle[_ngcontent-%COMP%]{margin:0;font-size:20px;width:262px}.taskWrapper[_ngcontent-%COMP%]{position:relative;width:250px;height:54px;margin:5px 0;padding:5px;border-radius:10px}.taskWrapper[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%]{position:relative;float:left;width:52px;height:52px}.taskWrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;max-width:50px;max-height:50px;top:0;bottom:0;left:0;right:0;margin:auto}.taskWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;float:left;width:165px;height:100%;justify-content:center;align-items:center}.taskWrapper[_ngcontent-%COMP%]   .inputWrapper[_ngcontent-%COMP%]{float:left;display:flex;width:25px;height:100%;justify-content:center;align-items:center}.inputWrapper[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px}.addTask[_ngcontent-%COMP%]{border:1px solid var(--game-page-accent-color);box-shadow:0 0 1px 0 var(--game-page-accent-color) inset,0 0 1px 0 var(--game-page-accent-color)}.taskAdder[_ngcontent-%COMP%]{color:var(--navigation-bar-settings-icon-font-color)}.timer[_ngcontent-%COMP%]{text-align:center;margin:0;font-size:14px}"]
                }), TaskGroupComponent
            })()
        },
        89019: (t, a, e) => {
            e.d(a, {
                R: () => s
            });
            var _ = e(72096),
                o = e(49587);
            let s = (() => {
                class E {
                    constructor() {
                        this.changeEvent = new _.vpe
                    }
                    enterEditMode() {
                        this.taskData.editModeActive = !0, this.changeHandler()
                    }
                    changeHandler() {
                        this.changeEvent.emit()
                    }
                }
                return E.\u0275fac = function(i) {
                    return new(i || E)
                }, E.\u0275cmp = _.Xpm({
                    type: E,
                    selectors: [
                        ["app-task-topbar-default"]
                    ],
                    inputs: {
                        taskData: "taskData",
                        topBarTitle: "topBarTitle",
                        editButtonTitle: "editButtonTitle"
                    },
                    outputs: {
                        changeEvent: "changeEvent"
                    },
                    decls: 5,
                    vars: 5,
                    consts: [
                        [1, "editButton", 3, "click"],
                        [1, "title"],
                        [3, "taskData", "editModeActive", "changeEvent"]
                    ],
                    template: function(i, r) {
                        1 & i && (_.TgZ(0, "button", 0), _.NdJ("click", function() {
                            return r.enterEditMode()
                        }), _._uU(1), _.qZA(), _.TgZ(2, "p", 1), _._uU(3), _.qZA(), _.TgZ(4, "app-task-character-navigation-bar", 2), _.NdJ("changeEvent", function() {
                            return r.changeHandler()
                        }), _.qZA()), 2 & i && (_.xp6(1), _.hij("Edit ", r.editButtonTitle, ""), _.xp6(2), _.AsE("", r.topBarTitle, " ", r.taskData.characters[r.taskData.selectedCharacterIndex].characterName, ""), _.xp6(1), _.Q6J("taskData", r.taskData)("editModeActive", !1))
                    },
                    directives: [o.r],
                    styles: [".editButton[_ngcontent-%COMP%]{background-color:var(--game-page-accent-color);border:none;color:#fff;padding:5px 8px;text-align:center;font-size:16px;margin:8px 8px 0 0;outline:none;position:absolute;top:0;right:0;cursor:pointer}.title[_ngcontent-%COMP%]{margin:5px 0 0;text-align:center;font-size:25px;text-decoration:underline}@media only screen and (max-width: 950px){.title[_ngcontent-%COMP%]{padding-top:48px}}"]
                }), E
            })()
        },
        32724: (t, a, e) => {
            e.d(a, {
                t: () => i
            });
            var _ = e(72096),
                o = e(69808),
                s = e(34182),
                E = e(49587);

            function n(r, c) {
                if (1 & r && (_.TgZ(0, "option", 11), _._uU(1), _.qZA()), 2 & r) {
                    const l = c.$implicit,
                        g = _.oxw();
                    _.Q6J("selected", l.resetUtcOffset == g.taskData.mapleRegion.resetUtcOffset), _.xp6(1), _.Oqu(l.name)
                }
            }
            let i = (() => {
                class r {
                    constructor() {
                        this.changeEvent = new _.vpe, this.regionChangeEvent = new _.vpe, this.addCharacterEvent = new _.vpe
                    }
                    ngOnDestroy() {
                        this.taskData.editModeActive = !1, this.changeHandler()
                    }
                    regionChange(l) {
                        this.taskData.mapleRegion = this.regions[l.target.selectedIndex], this.changeHandler(), this.regionChangeEvent.emit()
                    }
                    exitEditMode() {
                        this.taskData.editModeActive = !1, this.changeHandler()
                    }
                    changeHandler() {
                        this.changeEvent.emit()
                    }
                    addCharacterEmitter() {
                        this.addCharacterEvent.emit()
                    }
                }
                return r.\u0275fac = function(l) {
                    return new(l || r)
                }, r.\u0275cmp = _.Xpm({
                    type: r,
                    selectors: [
                        ["app-task-topbar-editmode"]
                    ],
                    inputs: {
                        taskData: "taskData",
                        topBarTitle: "topBarTitle",
                        regions: "regions"
                    },
                    outputs: {
                        changeEvent: "changeEvent",
                        regionChangeEvent: "regionChangeEvent",
                        addCharacterEvent: "addCharacterEvent"
                    },
                    decls: 21,
                    vars: 6,
                    consts: [
                        [1, "regionSelector"],
                        [1, "select", 3, "change"],
                        ["value", "r.resetUtcOffset", 3, "selected", 4, "ngFor", "ngForOf"],
                        [1, "editButton", 3, "click"],
                        [1, "title"],
                        [3, "taskData", "editModeActive", "changeEvent", "addCharacterEvent"],
                        [1, "editModeMessage"],
                        [1, "inputWrapper"],
                        [1, "characterNameInput"],
                        ["for", "characterName"],
                        ["type", "text", "id", "characterName", "name", "characterName", "maxlength", "12", 1, "textInput", 3, "ngModel", "ngModelChange"],
                        ["value", "r.resetUtcOffset", 3, "selected"]
                    ],
                    template: function(l, g) {
                        1 & l && (_.TgZ(0, "div", 0), _._uU(1, " Region: "), _.TgZ(2, "select", 1), _.NdJ("change", function(p) {
                            return g.regionChange(p)
                        }), _.YNc(3, n, 2, 2, "option", 2), _.qZA()(), _.TgZ(4, "button", 3), _.NdJ("click", function() {
                            return g.exitEditMode()
                        }), _._uU(5, "Exit Edit Mode"), _.qZA(), _.TgZ(6, "p", 4), _._uU(7), _.qZA(), _.TgZ(8, "app-task-character-navigation-bar", 5), _.NdJ("changeEvent", function() {
                            return g.changeHandler()
                        })("addCharacterEvent", function() {
                            return g.addCharacterEmitter()
                        }), _.qZA(), _.TgZ(9, "p", 6), _._uU(10, "Edit mode active, click on the names of dailies to disable them (this will prevent them from showing up outside of the edit mode)"), _._UZ(11, "br"), _._uU(12, " Adding custom dailies is possible with the option at the bottom of each list (custom dailies cannot be disabled but are instead removed when trying to do so)"), _._UZ(13, "br"), _._uU(14, " More characters can be added by pressing on the '+' at the end of the character list. A long press on a character will ask you if you want to remove it."), _.qZA(), _.TgZ(15, "div", 7)(16, "div", 8)(17, "label", 9), _._uU(18, "Character Name"), _.qZA(), _.TgZ(19, "input", 10), _.NdJ("ngModelChange", function(p) {
                            return g.taskData.characters[g.taskData.selectedCharacterIndex].characterName = p
                        }), _.qZA()(), _._UZ(20, "div"), _.qZA()), 2 & l && (_.xp6(3), _.Q6J("ngForOf", g.regions), _.xp6(4), _.AsE("", g.topBarTitle, " ", g.taskData.characters[g.taskData.selectedCharacterIndex].characterName, ""), _.xp6(1), _.Q6J("taskData", g.taskData)("editModeActive", !0), _.xp6(11), _.Q6J("ngModel", g.taskData.characters[g.taskData.selectedCharacterIndex].characterName))
                    },
                    directives: [o.sg, s.YN, s.Kr, E.r, s.Fj, s.nD, s.JJ, s.On],
                    styles: [".regionSelector[_ngcontent-%COMP%]{position:absolute;top:0;left:0;margin:8px 0 0 8px}.regionSelector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:80px;margin:0}.editModeMessage[_ngcontent-%COMP%]{color:red;margin:0 0 10px;text-align:center}.characterNameInput[_ngcontent-%COMP%]{display:inline-block;margin-top:3px}.characterNameInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;text-align:center;font-size:15px}.characterNameInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;margin-top:3px;text-align:center;width:180px}.inputWrapper[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px}.editButton[_ngcontent-%COMP%]{background-color:var(--game-page-accent-color);border:none;color:#fff;padding:5px 8px;text-align:center;font-size:16px;margin:8px 8px 0 0;outline:none;position:absolute;top:0;right:0;cursor:pointer}.title[_ngcontent-%COMP%]{margin:5px 0 0;text-align:center;font-size:25px;text-decoration:underline}@media only screen and (max-width: 950px){.title[_ngcontent-%COMP%]{padding-top:48px}}"]
                }), r
            })()
        },
        54753: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                n: () => UrsusTaskComponent
            });
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72096),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69808),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34182);

            function UrsusTaskComponent_div_0_span_5_Template(t, a) {
                if (1 & t && (_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "span", 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()), 2 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.AsE("", e.ursusTimerPrefix, " ", e.ursusTimerString, "")
                }
            }

            function UrsusTaskComponent_div_0_input_7_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "input", 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("ngModelChange", function(o) {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).task.done = o
                    })("change", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).changeHandler()
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()
                }
                if (2 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.hYB("name", "", e.title, "", e.index, "")("id", "", e.title, "", e.index, ""), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngModel", e.task.done)
                }
            }

            function UrsusTaskComponent_div_0_div_8_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "div", 11)(1, "i", 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).moveTask("up")
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(2, "i", 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).moveTask("down")
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()
                }
            }
            const _c0 = function(t, a, e) {
                return {
                    enabledTask: t,
                    disabledTask: a,
                    ursusTaskWrapper: e
                }
            };

            function UrsusTaskComponent_div_0_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "div", 1)(1, "div", 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(2, "img", 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(3, "label", 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw().disableTask()
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(4), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(5, UrsusTaskComponent_div_0_span_5_Template, 2, 2, "span", 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(6, "div", 6), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(7, UrsusTaskComponent_div_0_input_7_Template, 1, 5, "input", 7), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(8, UrsusTaskComponent_div_0_div_8_Template, 3, 0, "div", 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()
                }
                if (2 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__.kEZ(9, _c0, e.task.enabled, !e.task.enabled, "Golden Time ending in" == e.ursusTimerPrefix && 0 == e.resetUtcOffset)), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2), _angular_core__WEBPACK_IMPORTED_MODULE_0__.s9C("alt", e.task.name), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("src", "custom" != e.task.type ? "assets/TrackerImages/" + e.imagePrefix + e.task.image : e.task.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__.LSH), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.hYB("for", "", e.title, "", e.index, ""), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Oqu(e.task.name), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", 0 == e.resetUtcOffset), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", !e.editModeActive), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", e.editModeActive)
                }
            }
            let UrsusTaskComponent = (() => {
                class UrsusTaskComponent {
                    constructor() {
                        this.resetUtcOffset = 0, this.disableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.vpe, this.moveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.vpe, this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.vpe
                    }
                    ngOnInit() {
                        this.startUrsusTimer()
                    }
                    ngOnDestroy() {}
                    disableTask() {
                        this.editModeActive && this.disableEvent.emit(this.index)
                    }
                    moveTask(t) {
                        this.moveEvent.emit({
                            index: this.index,
                            direction: t
                        })
                    }
                    changeHandler() {
                        this.changeEvent.emit()
                    }
                    evaluateDisplayCondition(condition) {
                        try {
                            return eval(condition)
                        } catch (t) {
                            return !0
                        }
                    }
                    startUrsusTimer() {
                        clearInterval(this.ursusTimer);
                        var t = this.determineUrsusEndTime();
                        this.calculateAndOutPutUrsusTime(t - (new Date).getTime()), this.ursusTimer = setInterval(() => {
                            var a = t - (new Date).getTime();
                            this.calculateAndOutPutUrsusTime(a), a < 0 && (clearInterval(this.ursusTimer), this.startUrsusTimer())
                        }, 1e3)
                    }
                    determineUrsusEndTime() {
                        var t = new Date;
                        return t.getUTCHours() < 1 ? (this.ursusTimerPrefix = "Golden Time in ", Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 1, 0, 0, 0)) : t.getUTCHours() >= 1 && t.getUTCHours() < 5 ? (this.ursusTimerPrefix = "Golden Time ending in", Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 5, 0, 0, 0)) : t.getUTCHours() >= 5 && t.getUTCHours() < 18 ? (this.ursusTimerPrefix = "Golden Time in", Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 18, 0, 0, 0)) : t.getUTCHours() >= 18 && t.getUTCHours() < 22 ? (this.ursusTimerPrefix = "Golden Time ending in", Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 22, 0, 0, 0)) : t.getUTCHours() >= 22 ? (this.ursusTimerPrefix = "Golden Time in ", Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() + 1, 1, 0, 0, 0)) : void 0
                    }
                    calculateAndOutPutUrsusTime(t) {
                        var a = Math.floor(t % 864e5 / 36e5),
                            e = Math.floor(t % 36e5 / 6e4),
                            _ = Math.floor(t % 6e4 / 1e3);
                        this.ursusTimerString = a + "h " + e + "m " + ("00" + _).slice(-2) + "s "
                    }
                }
                return UrsusTaskComponent.\u0275fac = function t(a) {
                    return new(a || UrsusTaskComponent)
                }, UrsusTaskComponent.\u0275cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Xpm({
                    type: UrsusTaskComponent,
                    selectors: [
                        ["app-ursus-task"]
                    ],
                    inputs: {
                        task: "task",
                        editModeActive: "editModeActive",
                        title: "title",
                        index: "index",
                        resetUtcOffset: "resetUtcOffset",
                        imagePrefix: "imagePrefix"
                    },
                    outputs: {
                        disableEvent: "disableEvent",
                        moveEvent: "moveEvent",
                        changeEvent: "changeEvent"
                    },
                    decls: 1,
                    vars: 1,
                    consts: [
                        ["class", "taskWrapper", 3, "ngClass", 4, "ngIf"],
                        [1, "taskWrapper", 3, "ngClass"],
                        [1, "imgWrapper"],
                        ["onerror", "this.onerror=null; this.src='assets/TrackerImages/Custom.png'", 3, "src", "alt"],
                        [3, "for", "click"],
                        ["class", "ursusCountdown", "style", "pointer-events:none", 4, "ngIf"],
                        [1, "inputWrapper"],
                        ["type", "checkbox", 3, "name", "id", "ngModel", "ngModelChange", "change", 4, "ngIf"],
                        ["class", "orderChanger", 4, "ngIf"],
                        [1, "ursusCountdown", 2, "pointer-events", "none"],
                        ["type", "checkbox", 3, "name", "id", "ngModel", "ngModelChange", "change"],
                        [1, "orderChanger"],
                        [1, "fa", "fa-caret-up", "fa-2x", 3, "click"],
                        [1, "fa", "fa-caret-down", "fa-2x", 3, "click"]
                    ],
                    template: function t(a, e) {
                        1 & a && _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(0, UrsusTaskComponent_div_0_Template, 9, 13, "div", 0), 2 & a && _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", e.task.enabled || e.editModeActive)
                    },
                    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.O5, _angular_common__WEBPACK_IMPORTED_MODULE_1__.mk, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Wl, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.On],
                    styles: [".taskWrapper[_ngcontent-%COMP%]{position:relative;width:250px;height:54px;margin:5px 0;padding:5px;border-radius:10px}.taskWrapper[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%]{position:relative;float:left;width:52px;height:52px}.taskWrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;max-width:50px;max-height:50px;top:0;bottom:0;left:0;right:0;margin:auto}.taskWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;float:left;width:165px;height:100%;justify-content:center;align-items:center}.taskWrapper[_ngcontent-%COMP%]   .inputWrapper[_ngcontent-%COMP%]{float:left;display:flex;width:25px;height:100%;justify-content:center;align-items:center}.enabledTask[_ngcontent-%COMP%]{border:1px solid var(--navigation-bar-settings-icon-font-color);box-shadow:0 0 1px 0 var(--navigation-bar-settings-icon-font-color) inset,0 0 1px 0 var(--navigation-bar-settings-icon-font-color)}.disabledTask[_ngcontent-%COMP%]{border:1px solid red;box-shadow:0 0 1px red inset,0 0 1px red}.ursusTaskWrapper[_ngcontent-%COMP%]{box-shadow:inset 0 0 15px #f9d77e}.taskWrapper[_ngcontent-%COMP%]   .ursusCountdown[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;margin-left:19px;padding-bottom:5px;font-size:12px}"]
                }), UrsusTaskComponent
            })()
        },
        44846: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                B: () => YuGardenTaskComponent
            });
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72096),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69808),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34182);

            function YuGardenTaskComponent_div_0_span_5_Template(t, a) {
                if (1 & t && (_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "span", 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()), 2 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.AsE("", e.yuGardenTimerPrefix, " ", e.yuGardenTimerString, "")
                }
            }

            function YuGardenTaskComponent_div_0_input_7_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "input", 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("ngModelChange", function(o) {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).task.done = o
                    })("change", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).changeHandler()
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()
                }
                if (2 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.hYB("name", "", e.title, "", e.index, "")("id", "", e.title, "", e.index, ""), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngModel", e.task.done)
                }
            }

            function YuGardenTaskComponent_div_0_div_8_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "div", 11)(1, "i", 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).moveTask("up")
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(2, "i", 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).moveTask("down")
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()
                }
            }
            const _c0 = function(t, a) {
                return {
                    enabledTask: t,
                    disabledTask: a
                }
            };

            function YuGardenTaskComponent_div_0_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "div", 1)(1, "div", 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(2, "img", 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(3, "label", 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw().disableTask()
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(4), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(5, YuGardenTaskComponent_div_0_span_5_Template, 2, 2, "span", 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(6, "div", 6), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(7, YuGardenTaskComponent_div_0_input_7_Template, 1, 5, "input", 7), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(8, YuGardenTaskComponent_div_0_div_8_Template, 3, 0, "div", 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()
                }
                if (2 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__.WLB(9, _c0, e.task.enabled, !e.task.enabled)), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2), _angular_core__WEBPACK_IMPORTED_MODULE_0__.s9C("alt", e.task.name), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("src", "custom" != e.task.type ? "assets/TrackerImages/" + e.imagePrefix + e.task.image : e.task.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__.LSH), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.hYB("for", "", e.title, "", e.index, ""), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Oqu(e.task.name), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", 0 == e.resetUtcOffset), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", !e.editModeActive), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", e.editModeActive)
                }
            }
            let YuGardenTaskComponent = (() => {
                class YuGardenTaskComponent {
                    constructor() {
                        this.resetUtcOffset = 0, this.disableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.vpe, this.moveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.vpe, this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.vpe
                    }
                    ngOnInit() {
                        this.startYuGardenTimer()
                    }
                    ngOnDestroy() {}
                    disableTask() {
                        this.editModeActive && this.disableEvent.emit(this.index)
                    }
                    moveTask(t) {
                        this.moveEvent.emit({
                            index: this.index,
                            direction: t
                        })
                    }
                    changeHandler() {
                        this.changeEvent.emit()
                    }
                    evaluateDisplayCondition(condition) {
                        try {
                            return eval(condition)
                        } catch (t) {
                            return !0
                        }
                    }
                    startYuGardenTimer() {
                        clearInterval(this.yuGardenTimer);
                        var t = this.determineYuGardenEndTime();
                        this.calculateAndOutPutYuGardenTime(t - (new Date).getTime()), this.yuGardenTimer = setInterval(() => {
                            var a = t - (new Date).getTime();
                            this.calculateAndOutPutYuGardenTime(a), a < 0 && (clearInterval(this.yuGardenTimer), this.startYuGardenTimer())
                        }, 1e3)
                    }
                    determineYuGardenEndTime() {
                        var t = new Date;
                        return t.getUTCHours() < 2 ? (this.yuGardenTimerPrefix = "Merchant leaves in ", console.log(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 2, 0, 0, 0)), Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 2, 0, 0, 0)) : t.getUTCHours() >= 2 && t.getUTCHours() < 18 ? (this.yuGardenTimerPrefix = "Merchant arrives in  ", Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 18, 0, 0, 0)) : t.getUTCHours() >= 18 ? (this.yuGardenTimerPrefix = "Merchant leaves in ", Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() + 1, 2, 0, 0, 0)) : void 0
                    }
                    calculateAndOutPutYuGardenTime(t) {
                        var a = Math.floor(t % 864e5 / 36e5),
                            e = Math.floor(t % 36e5 / 6e4),
                            _ = Math.floor(t % 6e4 / 1e3);
                        this.yuGardenTimerString = a + "h " + e + "m " + ("00" + _).slice(-2) + "s "
                    }
                }
                return YuGardenTaskComponent.\u0275fac = function t(a) {
                    return new(a || YuGardenTaskComponent)
                }, YuGardenTaskComponent.\u0275cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Xpm({
                    type: YuGardenTaskComponent,
                    selectors: [
                        ["app-yu-garden-task"]
                    ],
                    inputs: {
                        task: "task",
                        editModeActive: "editModeActive",
                        title: "title",
                        index: "index",
                        resetUtcOffset: "resetUtcOffset",
                        imagePrefix: "imagePrefix"
                    },
                    outputs: {
                        disableEvent: "disableEvent",
                        moveEvent: "moveEvent",
                        changeEvent: "changeEvent"
                    },
                    decls: 1,
                    vars: 1,
                    consts: [
                        ["class", "taskWrapper", 3, "ngClass", 4, "ngIf"],
                        [1, "taskWrapper", 3, "ngClass"],
                        [1, "imgWrapper"],
                        ["onerror", "this.onerror=null; this.src='assets/TrackerImages/Custom.png'", 3, "src", "alt"],
                        [3, "for", "click"],
                        ["class", "yuGardenCountdown", "style", "pointer-events:none", 4, "ngIf"],
                        [1, "inputWrapper"],
                        ["type", "checkbox", 3, "name", "id", "ngModel", "ngModelChange", "change", 4, "ngIf"],
                        ["class", "orderChanger", 4, "ngIf"],
                        [1, "yuGardenCountdown", 2, "pointer-events", "none"],
                        ["type", "checkbox", 3, "name", "id", "ngModel", "ngModelChange", "change"],
                        [1, "orderChanger"],
                        [1, "fa", "fa-caret-up", "fa-2x", 3, "click"],
                        [1, "fa", "fa-caret-down", "fa-2x", 3, "click"]
                    ],
                    template: function t(a, e) {
                        1 & a && _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(0, YuGardenTaskComponent_div_0_Template, 9, 12, "div", 0), 2 & a && _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", e.task.enabled || e.editModeActive)
                    },
                    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.O5, _angular_common__WEBPACK_IMPORTED_MODULE_1__.mk, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Wl, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.On],
                    styles: [".taskWrapper[_ngcontent-%COMP%]{position:relative;width:250px;height:54px;margin:5px 0;padding:5px;border-radius:10px}.taskWrapper[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%]{position:relative;float:left;width:52px;height:52px}.taskWrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;max-width:50px;max-height:50px;top:0;bottom:0;left:0;right:0;margin:auto}.taskWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;float:left;width:165px;height:100%;justify-content:center;align-items:center}.taskWrapper[_ngcontent-%COMP%]   .inputWrapper[_ngcontent-%COMP%]{float:left;display:flex;width:25px;height:100%;justify-content:center;align-items:center}.enabledTask[_ngcontent-%COMP%]{border:1px solid var(--navigation-bar-settings-icon-font-color);box-shadow:0 0 1px 0 var(--navigation-bar-settings-icon-font-color) inset,0 0 1px 0 var(--navigation-bar-settings-icon-font-color)}.disabledTask[_ngcontent-%COMP%]{border:1px solid red;box-shadow:0 0 1px red inset,0 0 1px red}.taskWrapper[_ngcontent-%COMP%]   .yuGardenCountdown[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;margin-left:19px;padding-bottom:5px;font-size:12px}"]
                }), YuGardenTaskComponent
            })()
        },
        57756: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                m: () => TaskComponent
            });
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72096),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69808),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34182);

            function TaskComponent_div_0_input_6_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "input", 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("ngModelChange", function(o) {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).task.done = o
                    })("change", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).changeHandler()
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()
                }
                if (2 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.hYB("name", "", e.title, "", e.index, "")("id", "", e.title, "", e.index, ""), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngModel", e.task.done)
                }
            }

            function TaskComponent_div_0_div_7_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "div", 9)(1, "i", 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).moveTask("up")
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(2, "i", 11), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2).moveTask("down")
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()
                }
            }

            function TaskComponent_div_0_Template(t, a) {
                if (1 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0, "div", 1)(1, "div", 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(2, "img", 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(3, "label", 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click", function() {
                        return _angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(e), _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw().disableTask()
                    }), _angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(4), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(5, "div", 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(6, TaskComponent_div_0_input_6_Template, 1, 5, "input", 6), _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(7, TaskComponent_div_0_div_7_Template, 3, 0, "div", 7), _angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()
                }
                if (2 & t) {
                    const e = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngClass", e.task.enabled ? "enabledTask" : "disabledTask"), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2), _angular_core__WEBPACK_IMPORTED_MODULE_0__.s9C("alt", e.task.name), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("src", "custom" != e.task.type ? "assets/TrackerImages/" + e.imagePrefix + e.task.image : e.task.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__.LSH), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.hYB("for", "", e.title, "", e.index, ""), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Oqu(e.task.name), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", !e.editModeActive), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", e.editModeActive)
                }
            }
            let TaskComponent = (() => {
                class TaskComponent {
                    constructor() {
                        this.disableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.vpe, this.moveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.vpe, this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.vpe
                    }
                    disableTask() {
                        this.editModeActive && this.disableEvent.emit(this.index)
                    }
                    moveTask(t) {
                        this.moveEvent.emit({
                            index: this.index,
                            direction: t
                        })
                    }
                    changeHandler() {
                        this.changeEvent.emit()
                    }
                    evaluateDisplayCondition(condition) {
                        try {
                            return eval(condition)
                        } catch (t) {
                            return !0
                        }
                    }
                }
                return TaskComponent.\u0275fac = function t(a) {
                    return new(a || TaskComponent)
                }, TaskComponent.\u0275cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Xpm({
                    type: TaskComponent,
                    selectors: [
                        ["app-task"]
                    ],
                    inputs: {
                        task: "task",
                        editModeActive: "editModeActive",
                        title: "title",
                        index: "index",
                        imagePrefix: "imagePrefix"
                    },
                    outputs: {
                        disableEvent: "disableEvent",
                        moveEvent: "moveEvent",
                        changeEvent: "changeEvent"
                    },
                    decls: 1,
                    vars: 1,
                    consts: [
                        ["class", "taskWrapper", 3, "ngClass", 4, "ngIf"],
                        [1, "taskWrapper", 3, "ngClass"],
                        [1, "imgWrapper"],
                        ["onerror", "this.onerror=null; this.src='assets/TrackerImages/Custom.png'", 3, "src", "alt"],
                        [3, "for", "click"],
                        [1, "inputWrapper"],
                        ["type", "checkbox", 3, "name", "id", "ngModel", "ngModelChange", "change", 4, "ngIf"],
                        ["class", "orderChanger", 4, "ngIf"],
                        ["type", "checkbox", 3, "name", "id", "ngModel", "ngModelChange", "change"],
                        [1, "orderChanger"],
                        [1, "fa", "fa-caret-up", "fa-2x", 3, "click"],
                        [1, "fa", "fa-caret-down", "fa-2x", 3, "click"]
                    ],
                    template: function t(a, e) {
                        1 & a && _angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(0, TaskComponent_div_0_Template, 8, 8, "div", 0), 2 & a && _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf", (e.task.enabled || e.editModeActive) && e.evaluateDisplayCondition(e.task.dispCon))
                    },
                    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.O5, _angular_common__WEBPACK_IMPORTED_MODULE_1__.mk, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Wl, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.On],
                    styles: [".taskWrapper[_ngcontent-%COMP%]{position:relative;width:250px;height:54px;margin:5px 0;padding:5px;border-radius:10px}.taskWrapper[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%]{position:relative;float:left;width:52px;height:52px}.taskWrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;max-width:50px;max-height:50px;top:0;bottom:0;left:0;right:0;margin:auto}.taskWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;float:left;width:165px;height:100%;justify-content:center;align-items:center}.taskWrapper[_ngcontent-%COMP%]   .inputWrapper[_ngcontent-%COMP%]{float:left;display:flex;width:25px;height:100%;justify-content:center;align-items:center}.enabledTask[_ngcontent-%COMP%]{border:1px solid var(--navigation-bar-settings-icon-font-color);box-shadow:0 0 1px 0 var(--navigation-bar-settings-icon-font-color) inset,0 0 1px 0 var(--navigation-bar-settings-icon-font-color)}.disabledTask[_ngcontent-%COMP%]{border:1px solid red;box-shadow:0 0 1px red inset,0 0 1px red}"]
                }), TaskComponent
            })()
        },
        84165: (t, a, e) => {
            e.d(a, {
                M: () => o
            });
            var _ = e(72096);
            let o = (() => {
                class s {
                    v2v3Updater(n) {
                        var i = localStorage.getItem(n);
                        return i = (i = i.split("completed").join("done")).split("displayCondition").join("dispCon"), localStorage.removeItem(n), JSON.parse(i)
                    }
                    initiateDataSet(n, i) {
                        var r = {
                                characterName: "",
                                taskGroups: n.taskGroups
                            },
                            c = {
                                characters: [],
                                version: n.version,
                                lastTrackerVisit: Date.now().toString(),
                                selectedCharacterIndex: 0,
                                mapleRegion: {
                                    resetUtcOffset: 0,
                                    name: "GMS"
                                },
                                editModeActive: !1,
                                infoVisible: !1,
                                imagePrefix: n.imagePrefix
                            };
                        for (let l = 0; l < i; l++) r.characterName = "Char" + (l + 1), c.characters[l] = JSON.parse(JSON.stringify(r));
                        return c
                    }
                    updateTaskStructure(n, i) {
                        var r = this.initiateDataSet(i, n.characters.length),
                            c = this.initiateDataSet(i, n.characters.length);
                        for (let u = 0; u < n.characters.length; u++) {
                            if (r.characters[u].characterName = n.characters[u].characterName, r.characters[u].taskGroups.length > n.characters[u].taskGroups.length) {
                                var l = r.characters[u].taskGroups.slice(n.characters[u].taskGroups.length);
                                for (let p = 0; p < l.length; p++) n.characters[u].taskGroups.push(l[p])
                            }
                            for (let p = 0; p < r.characters[u].taskGroups.length; p++) {
                                r.characters[u].taskGroups[p].tasks = [];
                                for (let d = 0; d < n.characters[u].taskGroups[p].tasks.length; d++)
                                    if ("custom" != n.characters[u].taskGroups[p].tasks[d].type)
                                        for (let M = 0; M < c.characters[u].taskGroups[p].tasks.length; M++) n.characters[u].taskGroups[p].tasks[d].name == c.characters[u].taskGroups[p].tasks[M].name && (r.characters[u].taskGroups[p].tasks.push({
                                            name: n.characters[u].taskGroups[p].tasks[d].name,
                                            image: c.characters[u].taskGroups[p].tasks[M].image,
                                            done: n.characters[u].taskGroups[p].tasks[d].done,
                                            enabled: n.characters[u].taskGroups[p].tasks[d].enabled,
                                            type: c.characters[u].taskGroups[p].tasks[M].type,
                                            dispCon: c.characters[u].taskGroups[p].tasks[M].dispCon
                                        }), c.characters[u].taskGroups[p].tasks.splice(M, 1));
                                    else n.characters[u].taskGroups[p].tasks[d].image.includes("ustom.png") && (n.characters[u].taskGroups[p].tasks[d].image = "assets/TrackerImages/Custom.png"), r.characters[u].taskGroups[p].tasks.push(n.characters[u].taskGroups[p].tasks[d]);
                                for (let d = 0; d < c.characters[u].taskGroups[p].tasks.length; d++) r.characters[u].taskGroups[p].tasks.push(c.characters[u].taskGroups[p].tasks[d])
                            }
                        }
                        return r.lastTrackerVisit = Date.now().toString(), r.selectedCharacterIndex = n.selectedCharacterIndex, r.mapleRegion = n.mapleRegion, r.infoVisible = !0, r
                    }
                    addCharacter(n, i) {
                        var r = {
                            characterName: "",
                            taskGroups: i.taskGroups
                        };
                        return r.characterName = "Char" + (n.characters.length + 1), n.characters.push(JSON.parse(JSON.stringify(r)))
                    }
                    resetCompletionAll(n) {
                        return n.characters.forEach(i => {
                            i.taskGroups.forEach(r => {
                                r.tasks.forEach(c => {
                                    c.done = !1
                                })
                            })
                        }), n
                    }
                    resetCompletionIndex(n, i) {
                        return n.characters.forEach(r => {
                            r.taskGroups[i].tasks.forEach(c => {
                                c.done = !1
                            })
                        }), n
                    }
                }
                return s.\u0275fac = function(n) {
                    return new(n || s)
                }, s.\u0275prov = _.Yz7({
                    token: s,
                    factory: s.\u0275fac,
                    providedIn: "root"
                }), s
            })()
        },
        56928: (t, a, e) => {
            e.d(a, {
                C: () => E
            });
            var _ = e(69808),
                o = e(75326),
                s = e(72096);
            let E = (() => {
                class n {}
                return n.\u0275fac = function(r) {
                    return new(r || n)
                }, n.\u0275mod = s.oAB({
                    type: n
                }), n.\u0275inj = s.cJS({
                    imports: [
                        [_.ez, o.m], o.m
                    ]
                }), n
            })()
        },
        24447: (t, a, e) => {
            e.d(a, {
                m: () => E
            });
            var _ = e(69808),
                o = e(75326),
                s = e(72096);
            let E = (() => {
                class n {}
                return n.\u0275fac = function(r) {
                    return new(r || n)
                }, n.\u0275mod = s.oAB({
                    type: n
                }), n.\u0275inj = s.cJS({
                    imports: [
                        [_.ez, o.m]
                    ]
                }), n
            })()
        },
        65534: (t, a, e) => {
            e.d(a, {
                G: () => s
            });
            var _ = e(72096),
                o = e(69414);
            let s = (() => {
                class E {
                    constructor(i) {
                        this.router = i
                    }
                    ngOnInit() {}
                }
                return E.\u0275fac = function(i) {
                    return new(i || E)(_.Y36(o.F0))
                }, E.\u0275cmp = _.Xpm({
                    type: E,
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
                    template: function(i, r) {
                        1 & i && (_.TgZ(0, "div", 0)(1, "div", 1), _._uU(2, "Maplestory"), _.qZA(), _.TgZ(3, "p"), _._uU(4, "General"), _.qZA(), _.TgZ(5, "a", 2)(6, "span"), _._uU(7, "Home"), _.qZA()(), _._UZ(8, "div", 3), _.TgZ(9, "p"), _._uU(10, "Calculators"), _.qZA(), _.TgZ(11, "a", 2)(12, "span"), _._uU(13, "Arcane symbols"), _.qZA()(), _.TgZ(14, "a", 2)(15, "span"), _._uU(16, "Sacred symbols"), _.qZA()(), _.TgZ(17, "a", 2)(18, "span"), _._uU(19, "Item flames"), _.qZA()(), _.TgZ(20, "a", 2)(21, "span"), _._uU(22, "Weapon flame"), _.qZA()(), _._UZ(23, "div", 3), _.TgZ(24, "p"), _._uU(25, "Trackers"), _.qZA(), _.TgZ(26, "a", 2)(27, "span"), _._uU(28, "Dailies"), _.qZA()(), _.TgZ(29, "a", 2)(30, "span"), _._uU(31, "Weeklies"), _.qZA()(), _._UZ(32, "div", 3), _.TgZ(33, "a", 2)(34, "span"), _._uU(35, "Export settings"), _.qZA()(), _._UZ(36, "div", 3), _.TgZ(37, "p"), _._uU(38, "Enjoying my creations?"), _.qZA(), _.TgZ(39, "a", 4)(40, "span"), _._uU(41, "consider donating here"), _.qZA()()()), 2 & i && (_.xp6(5), _.Q6J("routerLink", "/games/maplestory/home"), _.xp6(1), _.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/home", !1)), _.xp6(5), _.Q6J("routerLink", "/games/maplestory/arcane-symbols"), _.xp6(1), _.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/arcane-symbols", !1)), _.xp6(2), _.Q6J("routerLink", "/games/maplestory/sacred-symbols"), _.xp6(1), _.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/sacred-symbols", !1)), _.xp6(2), _.Q6J("routerLink", "/games/maplestory/item-flames"), _.xp6(1), _.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/item-flames", !1)), _.xp6(2), _.Q6J("routerLink", "/games/maplestory/weapon-flame"), _.xp6(1), _.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/weapon-flame", !1)), _.xp6(5), _.Q6J("routerLink", "/games/maplestory/dailies"), _.xp6(1), _.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/dailies", !1)), _.xp6(2), _.Q6J("routerLink", "/games/maplestory/weeklies"), _.xp6(1), _.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/weeklies", !1)), _.xp6(3), _.Q6J("routerLink", "/games/maplestory/settings"), _.xp6(1), _.ekj("sidenavbaractivelink", r.router.isActive("/games/maplestory/settings", !1)))
                    },
                    directives: [o.yS],
                    styles: [""]
                }), E
            })()
        }
    }
]);