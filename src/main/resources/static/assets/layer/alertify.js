/**
 * alertify
 * An unobtrusive customizable JavaScript notification system
 *
 * @author Fabien Doiron <fabien.doiron@gmail.com>
 * @copyright Fabien Doiron 2013
 * @license MIT <http://opensource.org/licenses/mit-license.php>
 * @link http://fabien-d.github.com/alertify.js/
 * @module alertify
 * @version 0.3.8
 */
(function (e, t) {
    "use strict";
    var n = e.document, r;
    r = function () {
        var r = {}, i = {}, s = !1, o = {ENTER: 13, ESC: 27, SPACE: 32}, u = [], a, f, l, c, h, p, d, v, m, g, y, b;
        return i = {
            buttons: {
                holder: '<nav class="alertify-buttons">{{buttons}}</nav>',
                submit: '<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
                ok: '<a class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</a>',
                cancel: '<a class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</a>'
            },
            input: '<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',
            message: '<p class="alertify-message">{{message}}</p>',
            log: '<article class="alertify-log{{class}}">{{message}}</article>'
        }, b = function () {
            var e, r = n.createElement("fakeelement"), i = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            };
            for (e in i) if (r.style[e] !== t) return i[e]
        }, a = function (e) {
            return n.getElementById(e)
        }, r = {
            labels: {ok: "确定", cancel: "取消"},
            delay: 5e3,
            buttonReverse: !1,
            buttonFocus: "ok",
            transition: t,
            addListeners: function (e) {
                var t = typeof l != "undefined", r = typeof f != "undefined", i = typeof y != "undefined", s = "",
                    u = this, a, h, p, d, v;
                a = function (t) {
                    return typeof t.preventDefault != "undefined" && t.preventDefault(), p(t), typeof y != "undefined" && (s = y.value), typeof e == "function" && (typeof y != "undefined" ? e(!0, s) : e(!0)), !1
                }, h = function (t) {
                    return typeof t.preventDefault != "undefined" && t.preventDefault(), p(t), typeof e == "function" && e(!1), !1
                }, p = function (e) {
                    u.hide(), u.unbind(n.body, "keyup", d), u.unbind(c, "focus", v), i && u.unbind(g, "submit", a), t && u.unbind(l, "click", a), r && u.unbind(f, "click", h)
                }, d = function (e) {
                    var t = e.keyCode;
                    t === o.SPACE && !i && a(e), t === o.ESC && r && h(e)
                }, v = function (e) {
                    i ? y.focus() : r ? f.focus() : l.focus()
                }, this.bind(c, "focus", v), t && this.bind(l, "click", a), r && this.bind(f, "click", h), this.bind(n.body, "keyup", d), i && this.bind(g, "submit", a), typeof this.transition == "undefined" && this.setFocus()
            },
            bind: function (e, t, n) {
                typeof e.addEventListener == "function" ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            },
            handleErrors: function () {
                if (typeof e.onerror != "undefined") {
                    var t = this;
                    return e.onerror = function (e, n, r) {
                        t.error("[" + e + " on line " + r + " of " + n + "]", 0)
                    }, !0
                }
                return !1
            },
            appendButtons: function (e, t) {
                return this.buttonReverse ? t + e : e + t
            },
            build: function (e) {
                var t = "", n = e.type, s = e.message, o = e.cssClass || "";
                t += '<div class="alertify-dialog">', r.buttonFocus === "none" && (t += '<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>'), n === "prompt" && (t += '<form id="alertify-form">'), t += '<article class="alertify-inner">', t += i.message.replace("{{message}}", s), n === "prompt" && (t += i.input), t += i.buttons.holder, t += "</article>", n === "prompt" && (t += "</form>"), t += '<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>', t += "</div>";
                switch (n) {
                    case"confirm":
                        t = t.replace("{{buttons}}", this.appendButtons( i.buttons.ok,i.buttons.cancel)), t = t.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                        break;
                    case"prompt":
                        t = t.replace("{{buttons}}", this.appendButtons(i.buttons.cancel, i.buttons.submit)), t = t.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                        break;
                    case"alert":
                        t = t.replace("{{buttons}}", i.buttons.ok), t = t.replace("{{ok}}", this.labels.ok);
                        break;
                    default:
                }
                return v.className = "alertify alertify-show alertify-" + n + " " + o, d.className = "alertify-cover", t
            },
            close: function (e, t) {
                var n = t && !isNaN(t) ? +t : this.delay, r = this, i, s;
                this.bind(e, "click", function () {
                    i(e)
                }), s = function (e) {
                    e.stopPropagation(), r.unbind(this, r.transition, s), m.removeChild(this), m.hasChildNodes() || (m.className += " alertify-logs-hidden")
                }, i = function (e) {
                    typeof e != "undefined" && e.parentNode === m && (typeof r.transition != "undefined" ? (r.bind(e, r.transition, s), e.className += " alertify-log-hide") : (m.removeChild(e), m.hasChildNodes() || (m.className += " alertify-logs-hidden")))
                };
                if (t === 0) return;
                setTimeout(function () {
                    i(e)
                }, n)
            },
            dialog: function (e, t, r, i, o) {
                p = n.activeElement;
                var a = function () {
                    if (v && v.scrollTop !== null) return;
                    a()
                };
                if (typeof e != "string") throw new Error("message must be a string");
                if (typeof t != "string") throw new Error("type must be a string");
                if (typeof r != "undefined" && typeof r != "function") throw new Error("fn must be a function");
                return typeof this.init == "function" && (this.init(), a()), u.push({
                    type: t,
                    message: e,
                    callback: r,
                    placeholder: i,
                    cssClass: o
                }), s || this.setup(), this
            },
            extend: function (e) {
                if (typeof e != "string") throw new Error("extend method must have exactly one paramter");
                return function (t, n) {
                    return this.log(t, e, n), this
                }
            },
            hide: function () {
                var e, t = this;
                u.splice(0, 1), u.length > 0 ? this.setup() : (s = !1, e = function (n) {
                    n.stopPropagation(), v.className += " alertify-isHidden", t.unbind(v, t.transition, e)
                }, typeof this.transition != "undefined" ? (this.bind(v, this.transition, e), v.className = "alertify alertify-hide alertify-hidden") : v.className = "alertify alertify-hide alertify-hidden alertify-isHidden", d.className = "alertify-cover alertify-cover-hidden", p.focus())
            },
            init: function () {
                n.createElement("nav"), n.createElement("article"), n.createElement("section"), d = n.createElement("div"), d.setAttribute("id", "alertify-cover"), d.className = "alertify-cover alertify-cover-hidden", n.body.appendChild(d), v = n.createElement("section"), v.setAttribute("id", "alertify"), v.className = "alertify alertify-hidden", n.body.appendChild(v), m = n.createElement("section"), m.setAttribute("id", "alertify-logs"), m.className = "alertify-logs alertify-logs-hidden", n.body.appendChild(m), n.body.setAttribute("tabindex", "0"), this.transition = b(), delete this.init
            },
            log: function (e, t, n) {
                var r = function () {
                    if (m && m.scrollTop !== null) return;
                    r()
                };
                return typeof this.init == "function" && (this.init(), r()), m.className = "alertify-logs", this.notify(e, t, n), this
            },
            notify: function (e, t, r) {
                var i = n.createElement("article");
                i.className = "alertify-log" + (typeof t == "string" && t !== "" ? " alertify-log-" + t : ""), i.innerHTML = e, m.insertBefore(i, m.firstChild), setTimeout(function () {
                    i.className = i.className + " alertify-log-show"
                }, 50), this.close(i, r)
            },
            set: function (e) {
                var t;
                if (typeof e != "object" && e instanceof Array) throw new Error("args must be an object");
                for (t in e) e.hasOwnProperty(t) && (this[t] = e[t])
            },
            setFocus: function () {
                y ? (y.focus(), y.select()) : h.focus()
            },
            setup: function () {
                var e = u[0], n = this, i;
                s = !0, i = function (e) {
                    e.stopPropagation(), n.setFocus(), n.unbind(v, n.transition, i)
                }, typeof this.transition != "undefined" && this.bind(v, this.transition, i), v.innerHTML = this.build(e), c = a("alertify-resetFocus"), l = a("alertify-ok") || t, f = a("alertify-cancel") || t, h = r.buttonFocus === "cancel" ? f : r.buttonFocus === "none" ? a("alertify-noneFocus") : l, y = a("alertify-text") || t, g = a("alertify-form") || t, typeof e.placeholder == "string" && e.placeholder !== "" && (y.value = e.placeholder), this.addListeners(e.callback)
            },
            unbind: function (e, t, n) {
                typeof e.removeEventListener == "function" ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            }
        }, {
            alert: function (e, t, n) {
                return r.dialog(e, "alert", t, "", n), this
            }, confirm: function (e, t, n) {
                return r.dialog(e, "confirm", t, "", n), this
            }, extend: r.extend, init: r.init, log: function (e, t, n) {
                return r.log(e, t, n), this
            }, prompt: function (e, t, n, i) {
                return r.dialog(e, "prompt", t, n, i), this
            }, success: function (e, t) {
                return r.log(e, "success", t), this
            }, error: function (e, t) {
                return r.log(e, "error", t), this
            }, set: function (e) {
                r.set(e)
            }, labels: r.labels, debug: r.handleErrors
        }
    }, typeof define == "function" ? define([], function () {
        return new r
    }) : typeof e.alertify == "undefined" && (e.alertify = new r)
})(this);