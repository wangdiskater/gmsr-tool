"use strict";
(self.webpackChunkRandomProject = self.webpackChunkRandomProject || []).push([
    [943], {
        20943: (f, i, a) => {
            a.r(i), a.d(i, {
                OverwatchRandomHeroSelectorModule: () => u
            });
            var m = a(69808),
                c = a(69414);
            const s = JSON.parse('{"e":[{"name":"Ana","image":"Ana.png"},{"name":"Ashe","image":"Ashe.png"},{"name":"Baptiste","image":"Baptiste.png"},{"name":"Bastion","image":"Bastion.png"},{"name":"Brigitte","image":"Brigitte.png"},{"name":"D.Va","image":"Dva.png"},{"name":"Doomfist","image":"Doomfist.png"},{"name":"Echo","image":"Echo.png"},{"name":"Genji","image":"Genji.png"},{"name":"Hanzo","image":"Hanzo.png"},{"name":"Junkrat","image":"Junkrat.png"},{"name":"L\xfacio","image":"Lucio.png"},{"name":"Mccree","image":"Mccree.png"},{"name":"Mei","image":"Mei.png"},{"name":"Mercy","image":"Mercy.png"},{"name":"Moira","image":"Moira.png"},{"name":"Orisa","image":"Orisa.png"},{"name":"Pharah","image":"Pharah.png"},{"name":"Reaper","image":"Reaper.png"},{"name":"Reinhardt","image":"Reinhardt.png"},{"name":"Roadhog","image":"Roadhog.png"},{"name":"Sigma","image":"Sigma.png"},{"name":"Soldier: 76","image":"Soldier76.png"},{"name":"Sombra","image":"Sombra.png"},{"name":"Symmetra","image":"Symmetra.png"},{"name":"Torbj\xf6rn","image":"Torbjorn.png"},{"name":"Tracer","image":"Tracer.png"},{"name":"Widowmaker","image":"Widowmaker.png"},{"name":"Winston","image":"Winston.png"},{"name":"Wrecking Ball","image":"WreckingBall.png"},{"name":"Zarya","image":"Zarya.png"},{"name":"Zenyatta","image":"Zenyatta.png"}]}');
            var e = a(72096),
                g = a(22313),
                h = a(42698);

            function p(n, o) {
                if (1 & n && e._UZ(0, "img", 5), 2 & n) {
                    const t = e.oxw();
                    e.MGl("src", "assets/Games/Overwatch/HeroImages/", t.selectedHero.image, "", e.LSH)
                }
            }

            function d(n, o) {
                1 & n && (e.O4$(), e.TgZ(0, "svg", 6)(1, "g"), e._UZ(2, "path", 7)(3, "path", 8), e.qZA()())
            }
            const l = [{
                path: "",
                component: (() => {
                    class n {
                        constructor(t, r) {
                            this.titleService = t, this.metaService = r, this.heroesList = s.e, this.selectedHero = {
                                name: "Unknown",
                                image: ""
                            }
                        }
                        ngOnInit() {
                            this.titleService.setTitle("Overwatch Random Hero Selector | Random Stuff"), this.metaService.updateTag({
                                name: "description",
                                content: "A randomized Overwatch hero picker, get assigned a random hero to play."
                            }), this.metaService.getTag("name='robots'") ? this.metaService.updateTag({
                                name: "robots",
                                content: "index, follow"
                            }) : this.metaService.addTag({
                                name: "robots",
                                content: "index, follow"
                            })
                        }
                        selectRandomHero() {
                            for (var t = this.heroesList[this.getRandomArrayIndex(this.heroesList.length)]; this.selectedHero.name === t.name;) t = this.heroesList[this.getRandomArrayIndex(this.heroesList.length)];
                            this.selectedHero = t
                        }
                        getRandomArrayIndex(t) {
                            return Math.floor(Math.random() * t)
                        }
                    }
                    return n.\u0275fac = function(t) {
                        return new(t || n)(e.Y36(g.Dx), e.Y36(g.h_))
                    }, n.\u0275cmp = e.Xpm({
                        type: n,
                        selectors: [
                            ["app-overwatch-random-hero-selector"]
                        ],
                        decls: 9,
                        vars: 3,
                        consts: [
                            [1, "heroWrapper"],
                            [1, "hero"],
                            ["alt", "", 3, "src", 4, "ngIf"],
                            ["id", "Capa_1", "enable-background", "new 0 0 512 512", "height", "512", "viewBox", "0 0 512 512", "width", "512", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"],
                            [3, "click"],
                            ["alt", "", 3, "src"],
                            ["id", "Capa_1", "enable-background", "new 0 0 512 512", "height", "512", "viewBox", "0 0 512 512", "width", "512", "xmlns", "http://www.w3.org/2000/svg"],
                            ["d", "m256 392c-33.084 0-60 26.916-60 60s26.916 60 60 60 60-26.916 60-60-26.916-60-60-60zm0 90c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30z"],
                            ["d", "m256 0c-86.019 0-156 69.981-156 156v15h120v-15c0-19.851 16.149-36 36-36s36 16.149 36 36c0 10.578-4.643 20.59-12.74 27.471l-83.26 70.787v107.742h120v-52.258l40.976-34.837c34.968-29.714 55.024-73.052 55.024-118.905 0-86.019-69.981-156-156-156zm81.547 252.047-51.547 43.824v36.129h-60v-63.871l72.688-61.8c14.815-12.589 23.312-30.933 23.312-50.329 0-36.393-29.607-66-66-66-31.235 0-57.471 21.81-64.281 51h-60.832c7.441-62.431 60.712-111 125.113-111 69.477 0 126 56.523 126 126 0 37.034-16.201 72.04-44.453 96.047z"]
                        ],
                        template: function(t, r) {
                            1 & t && (e._UZ(0, "app-overwatch-side-navigation"), e.TgZ(1, "div", 0)(2, "div", 1), e.YNc(3, p, 1, 1, "img", 2), e.YNc(4, d, 4, 0, "svg", 3), e.TgZ(5, "p"), e._uU(6), e.qZA(), e.TgZ(7, "button", 4), e.NdJ("click", function() {
                                return r.selectRandomHero()
                            }), e._uU(8, "Roll!"), e.qZA()()()), 2 & t && (e.xp6(3), e.Q6J("ngIf", "Unknown" !== r.selectedHero.name), e.xp6(1), e.Q6J("ngIf", "Unknown" === r.selectedHero.name), e.xp6(2), e.Oqu(r.selectedHero.name))
                        },
                        directives: [h.j, m.O5],
                        styles: [".heroWrapper[_ngcontent-%COMP%]{width:324px;min-height:calc(100vh - 72px);margin:8px auto 0}.hero[_ngcontent-%COMP%]{width:180px;height:400px;margin:30px auto 0}.hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:180px;height:310px;border:1px solid white}.hero[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:180px;height:310px;fill:var(--font-color);border:1px solid white}.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;margin:5px 0 8px;font-size:22px;text-align:center}.hero[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--game-page-accent-color);border:none;color:#fff;padding:10px;text-align:center;font-size:16px;width:100%;margin:1px;outline:none}@media only screen and (max-width: 813px){.heroWrapper[_ngcontent-%COMP%]{width:100%;margin-left:0}}"]
                    }), n
                })()
            }];
            let v = (() => {
                class n {}
                return n.\u0275fac = function(t) {
                    return new(t || n)
                }, n.\u0275mod = e.oAB({
                    type: n
                }), n.\u0275inj = e.cJS({
                    imports: [
                        [c.Bz.forChild(l)], c.Bz
                    ]
                }), n
            })();
            var w = a(16378);
            let u = (() => {
                class n {}
                return n.\u0275fac = function(t) {
                    return new(t || n)
                }, n.\u0275mod = e.oAB({
                    type: n
                }), n.\u0275inj = e.cJS({
                    imports: [
                        [m.ez, v, w.F]
                    ]
                }), n
            })()
        }
    }
]);