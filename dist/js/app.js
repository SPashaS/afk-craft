(() => {
  var e = {
      144: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            r = t && "classList" in document.createElement("p"),
            n = t && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            o = function (t) {
              return e({}, a, t);
            },
            l = function (e, t) {
              var s,
                i = "LazyLoad::Initialized",
                r = new e(t);
              try {
                s = new CustomEvent(i, { detail: { instance: r } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: r },
                );
              }
              window.dispatchEvent(s);
            },
            d = "src",
            c = "srcset",
            u = "sizes",
            p = "poster",
            f = "llOriginalAttrs",
            m = "data",
            h = "loading",
            v = "loaded",
            g = "applied",
            w = "error",
            b = "native",
            y = "data-",
            S = "ll-status",
            E = function (e, t) {
              return e.getAttribute(y + t);
            },
            T = function (e) {
              return E(e, S);
            },
            x = function (e, t) {
              return (function (e, t, s) {
                var i = "data-ll-status";
                null !== s ? e.setAttribute(i, s) : e.removeAttribute(i);
              })(e, 0, t);
            },
            _ = function (e) {
              return x(e, null);
            },
            L = function (e) {
              return null === T(e);
            },
            C = function (e) {
              return T(e) === b;
            },
            M = [h, v, g, w],
            P = function (e, t, s, i) {
              e &&
                "function" == typeof e &&
                (void 0 === i ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, i));
            },
            k = function (e, t) {
              r
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            A = function (e, t) {
              r
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            I = function (e) {
              return e.llTempImage;
            },
            O = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            z = function (e, t) {
              e && (e.loadingCount += t);
            },
            D = function (e, t) {
              e && (e.toLoadCount = t);
            },
            G = function (e) {
              for (var t, s = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            N = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && G(s).forEach(t);
            },
            V = function (e, t) {
              G(e).forEach(t);
            },
            q = [d],
            B = [d, p],
            F = [d, c, u],
            $ = [m],
            R = function (e) {
              return !!e[f];
            },
            H = function (e) {
              return e[f];
            },
            j = function (e) {
              return delete e[f];
            },
            W = function (e, t) {
              if (!R(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[f] = s);
              }
            },
            Y = function (e, t) {
              if (R(e)) {
                var s = H(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            X = function (e, t, s) {
              k(e, t.class_applied),
                x(e, g),
                s &&
                  (t.unobserve_completed && O(e, t),
                  P(t.callback_applied, e, s));
            },
            U = function (e, t, s) {
              k(e, t.class_loading),
                x(e, h),
                s && (z(s, 1), P(t.callback_loading, e, s));
            },
            K = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            J = function (e, t) {
              K(e, u, E(e, t.data_sizes)),
                K(e, c, E(e, t.data_srcset)),
                K(e, d, E(e, t.data_src));
            },
            Q = {
              IMG: function (e, t) {
                N(e, function (e) {
                  W(e, F), J(e, t);
                }),
                  W(e, F),
                  J(e, t);
              },
              IFRAME: function (e, t) {
                W(e, q), K(e, d, E(e, t.data_src));
              },
              VIDEO: function (e, t) {
                V(e, function (e) {
                  W(e, q), K(e, d, E(e, t.data_src));
                }),
                  W(e, B),
                  K(e, p, E(e, t.data_poster)),
                  K(e, d, E(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                W(e, $), K(e, m, E(e, t.data_src));
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                P(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ie = function (e) {
              return !!e.llEvLisnrs;
            },
            re = function (e) {
              if (ie(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var i = t[s];
                  se(e, s, i);
                }
                delete e.llEvLisnrs;
              }
            },
            ne = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                z(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                A(e, t.class_loading),
                t.unobserve_completed && O(e, s);
            },
            ae = function (e, t, s) {
              var i = I(e) || e;
              ie(i) ||
                (function (e, t, s) {
                  ie(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, i, t), te(e, "error", s);
                })(
                  i,
                  function (r) {
                    !(function (e, t, s, i) {
                      var r = C(t);
                      ne(t, s, i),
                        k(t, s.class_loaded),
                        x(t, v),
                        P(s.callback_loaded, t, i),
                        r || ee(s, i);
                    })(0, e, t, s),
                      re(i);
                  },
                  function (r) {
                    !(function (e, t, s, i) {
                      var r = C(t);
                      ne(t, s, i),
                        k(t, s.class_error),
                        x(t, w),
                        P(s.callback_error, t, i),
                        s.restore_on_error && Y(t, F),
                        r || ee(s, i);
                    })(0, e, t, s),
                      re(i);
                  },
                );
            },
            oe = function (e, t, s) {
              !(function (e) {
                return Z.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      ae(e, t, s),
                      (function (e) {
                        R(e) ||
                          (e[f] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var i = E(e, t.data_bg),
                          r = E(e, t.data_bg_hidpi),
                          a = n && r ? r : i;
                        a &&
                          ((e.style.backgroundImage = 'url("'.concat(a, '")')),
                          I(e).setAttribute(d, a),
                          U(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = E(e, t.data_bg_multi),
                          r = E(e, t.data_bg_multi_hidpi),
                          a = n && r ? r : i;
                        a && ((e.style.backgroundImage = a), X(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = E(e, t.data_bg_set);
                        if (i) {
                          var r = i.split("|"),
                            n = r.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = n.join()),
                            "" === e.style.backgroundImage &&
                              ((n = r.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = n.join())),
                            X(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    ae(e, t, s),
                      (function (e, t, s) {
                        var i = Q[e.tagName];
                        i && (i(e, t), U(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            le = function (e) {
              e.removeAttribute(d), e.removeAttribute(c), e.removeAttribute(u);
            },
            de = function (e) {
              N(e, function (e) {
                Y(e, F);
              }),
                Y(e, F);
            },
            ce = {
              IMG: de,
              IFRAME: function (e) {
                Y(e, q);
              },
              VIDEO: function (e) {
                V(e, function (e) {
                  Y(e, q);
                }),
                  Y(e, B),
                  e.load();
              },
              OBJECT: function (e) {
                Y(e, $);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = ce[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (R(e)) {
                        var t = H(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  L(e) ||
                    C(e) ||
                    (A(e, t.class_entered),
                    A(e, t.class_exited),
                    A(e, t.class_applied),
                    A(e, t.class_loading),
                    A(e, t.class_loaded),
                    A(e, t.class_error));
                })(e, t),
                _(e),
                j(e);
            },
            pe = ["IMG", "IFRAME", "VIDEO"],
            fe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            me = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, i) {
                      var r = (function (e) {
                        return M.indexOf(T(e)) >= 0;
                      })(e);
                      x(e, "entered"),
                        k(e, s.class_entered),
                        A(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && O(e, s);
                        })(e, s, i),
                        P(s.callback_enter, e, t, i),
                        r || oe(e, s, i);
                    })(e.target, e, t, s)
                  : (function (e, t, s, i) {
                      L(e) ||
                        (k(e, s.class_exited),
                        (function (e, t, s, i) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return T(e) === h;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (re(e),
                            (function (e) {
                              N(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            de(e),
                            A(e, s.class_loading),
                            z(i, -1),
                            _(e),
                            P(s.callback_cancel, e, t, i));
                        })(e, t, s, i),
                        P(s.callback_exit, e, t, i));
                    })(e.target, e, t, s);
              });
            },
            he = function (e) {
              return Array.prototype.slice.call(e);
            },
            ve = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ge = function (e) {
              return (function (e) {
                return T(e) === w;
              })(e);
            },
            we = function (e, t) {
              return (function (e) {
                return he(e).filter(L);
              })(e || ve(t));
            },
            be = function (e, s) {
              var r = o(e);
              (this._settings = r),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !fe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        me(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e),
                    ));
                })(r, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = ve(e)), he(s).filter(ge)).forEach(function (t) {
                          A(t, e.class_error), _(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(r, this),
                this.update(s);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  r,
                  n = this._settings,
                  a = we(e, n);
                D(this, a.length),
                  !s && i
                    ? fe(n)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  ae(e, t, s),
                                  (function (e, t) {
                                    var s = Q[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  x(e, b);
                              })(e, t, s);
                          }),
                            D(s, 0);
                        })(a, n, this)
                      : ((r = a),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, r))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ve(this._settings).forEach(function (e) {
                    j(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                we(e, s).forEach(function (e) {
                  O(e, t), oe(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ve(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var s = o(t);
              oe(e, s);
            }),
            (be.resetStatus = function (e) {
              _(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, i = 0; (s = t[i]); i += 1) l(e, s);
                  else l(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function s(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var n = (t[i] = { exports: {} });
    return e[i].call(n.exports, n, n.exports, s), n.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } }),
              );
          }, t));
      },
      i = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } }),
                );
            }, t);
        }
      },
      r = !0,
      n = (e = 0) => {
        let t = document.querySelector("body");
        if (r) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      },
      a = (e = 0) => {
        let t = document.querySelector("body");
        if (r) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      };
    function o() {
      document
        .querySelectorAll(".menu-item-has-children.sub-menu_open")
        .forEach((e) => {
          e.classList.remove("sub-menu_open");
        });
    }
    function l(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function d(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            r = s.dataset[t].split(",");
          (i.value = r[0]),
            (i.type = r[1] ? r[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = (function (e) {
          return e.filter(function (e, t, s) {
            return s.indexOf(e) === t;
          });
        })(i);
        const r = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                n = s[2],
                a = window.matchMedia(s[0]),
                o = e.filter(function (e) {
                  if (e.value === i && e.type === n) return !0;
                });
              r.push({ itemsArray: o, matchMedia: a });
            }),
            r
          );
      }
    }
    let c = (e, t = !1, s = 500, i = 0) => {
      const r = "string" == typeof e ? document.querySelector(e) : e;
      if (r) {
        let a = "",
          d = 0;
        t &&
          ((a = "header.header"), (d = document.querySelector(a).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: s,
          header: a,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (n(), o(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(r, "", c);
        else {
          let e = r.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: d ? e - d : e, behavior: "smooth" });
        }
        l(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else l(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    let u = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
              ? this.removeError(e)
              : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.closest(".form-order__row").classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`,
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error"),
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let s = t.querySelectorAll("input,textarea");
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                u.removeError(t);
            }
            let i = t.querySelectorAll(".checkbox__input");
            if (i.length > 0)
              for (let e = 0; e < i.length; e++) {
                i[e].checked = !1;
              }
            if (e.select) {
              let s = t.querySelectorAll(".select");
              if (s.length)
                for (let t = 0; t < s.length; t++) {
                  const i = s[t].querySelector("select");
                  e.select.selectBuild(i);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function p(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function f(e, t) {
      void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach((s) => {
          void 0 === e[s]
            ? (e[s] = t[s])
            : p(t[s]) &&
              p(e[s]) &&
              Object.keys(t[s]).length > 0 &&
              f(e[s], t[s]);
        });
    }
    const m = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function h() {
      const e = "undefined" != typeof document ? document : {};
      return f(e, m), e;
    }
    const v = {
      document: m,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function g() {
      const e = "undefined" != typeof window ? window : {};
      return f(e, v), e;
    }
    function w(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function b() {
      return Date.now();
    }
    function y(e, t) {
      void 0 === t && (t = "x");
      const s = g();
      let i, r, n;
      const a = (function (e) {
        const t = g();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((r = a.transform || a.webkitTransform),
            r.split(",").length > 6 &&
              (r = r
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (n = new s.WebKitCSSMatrix("none" === r ? "" : r)))
          : ((n =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = n.toString().split(","))),
        "x" === t &&
          (r = s.WebKitCSSMatrix
            ? n.m41
            : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
        "y" === t &&
          (r = s.WebKitCSSMatrix
            ? n.m42
            : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
        r || 0
      );
    }
    function S(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function E() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < arguments.length; i += 1) {
        const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (
          null != r &&
          ((s = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? s instanceof HTMLElement
            : s && (1 === s.nodeType || 11 === s.nodeType)))
        ) {
          const s = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = s.length; t < i; t += 1) {
            const i = s[t],
              n = Object.getOwnPropertyDescriptor(r, i);
            void 0 !== n &&
              n.enumerable &&
              (S(e[i]) && S(r[i])
                ? r[i].__swiper__
                  ? (e[i] = r[i])
                  : E(e[i], r[i])
                : !S(e[i]) && S(r[i])
                  ? ((e[i] = {}),
                    r[i].__swiper__ ? (e[i] = r[i]) : E(e[i], r[i]))
                  : (e[i] = r[i]));
          }
        }
      }
      var s;
      return e;
    }
    function T(e, t, s) {
      e.style.setProperty(t, s);
    }
    function x(e) {
      let { swiper: t, targetPosition: s, side: i } = e;
      const r = g(),
        n = -t.translate;
      let a,
        o = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        r.cancelAnimationFrame(t.cssModeFrameID);
      const d = s > n ? "next" : "prev",
        c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
        u = () => {
          (a = new Date().getTime()), null === o && (o = a);
          const e = Math.max(Math.min((a - o) / l, 1), 0),
            d = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = n + d * (s - n);
          if ((c(p, s) && (p = s), t.wrapperEl.scrollTo({ [i]: p }), c(p, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: p });
              }),
              void r.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = r.requestAnimationFrame(u);
        };
      u();
    }
    function _(e) {
      return (
        e.querySelector(".swiper-slide-transform") ||
        (e.shadowRoot &&
          e.shadowRoot.querySelector(".swiper-slide-transform")) ||
        e
      );
    }
    function L(e, t) {
      return (
        void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
      );
    }
    function C(e) {
      try {
        return void console.warn(e);
      } catch (e) {}
    }
    function M(e, t) {
      void 0 === t && (t = []);
      const s = document.createElement(e);
      return (
        s.classList.add(
          ...(Array.isArray(t)
            ? t
            : (function (e) {
                return (
                  void 0 === e && (e = ""),
                  e
                    .trim()
                    .split(" ")
                    .filter((e) => !!e.trim())
                );
              })(t)),
        ),
        s
      );
    }
    function P(e, t) {
      return g().getComputedStyle(e, null).getPropertyValue(t);
    }
    function k(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); )
          1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function A(e, t, s) {
      const i = g();
      return s
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-right" : "margin-top",
                ),
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom",
                ),
            )
        : e.offsetWidth;
    }
    function I(e) {
      return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
    }
    let O, z, D;
    function G() {
      return (
        O ||
          (O = (function () {
            const e = g(),
              t = h();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        O
      );
    }
    function N(e) {
      return (
        void 0 === e && (e = {}),
        z ||
          (z = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = G(),
              i = g(),
              r = i.navigator.platform,
              n = t || i.navigator.userAgent,
              a = { ios: !1, android: !1 },
              o = i.screen.width,
              l = i.screen.height,
              d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === r;
            let m = "MacIntel" === r;
            return (
              !c &&
                m &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${l}`) >= 0 &&
                ((c = n.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (m = !1)),
              d && !f && ((a.os = "android"), (a.android = !0)),
              (c || p || u) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        z
      );
    }
    function V() {
      return (
        D ||
          (D = (function () {
            const e = g(),
              t = N();
            let s = !1;
            function i() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (i()) {
              const t = String(e.navigator.userAgent);
              if (t.includes("Version/")) {
                const [e, i] = t
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                s = e < 16 || (16 === e && i < 2);
              }
            }
            const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent,
              ),
              n = i();
            return {
              isSafari: s || n,
              needPerspectiveFix: s,
              need3dFix: n || (r && t.ios),
              isWebView: r,
            };
          })()),
        D
      );
    }
    var q = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const r = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][r](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function r() {
          i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
          for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
            n[a] = arguments[a];
          t.apply(i, n);
        }
        return (r.__emitterProxy = t), i.on(e, r, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((i, r) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(r, 1);
                    });
              }),
              s)
            : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
          n[a] = arguments[a];
        "string" == typeof n[0] || Array.isArray(n[0])
          ? ((t = n[0]), (s = n.slice(1, n.length)), (i = e))
          : ((t = n[0].events), (s = n[0].data), (i = n[0].context || e)),
          s.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, s);
                });
          }),
          e
        );
      },
    };
    const B = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        );
        if (s) {
          let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
          !t &&
            e.isElement &&
            (s.shadowRoot
              ? (t = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                ))
              : requestAnimationFrame(() => {
                  s.shadowRoot &&
                    ((t = s.shadowRoot.querySelector(
                      `.${e.params.lazyPreloaderClass}`,
                    )),
                    t && t.remove());
                })),
            t && t.remove();
        }
      },
      F = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading");
      },
      $ = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const i =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          r = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
          const s = r,
            n = [s - t];
          return (
            n.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
            void e.slides.forEach((t, s) => {
              n.includes(t.column) && F(e, s);
            })
          );
        }
        const n = r + i - 1;
        if (e.params.rewind || e.params.loop)
          for (let i = r - t; i <= n + t; i += 1) {
            const t = ((i % s) + s) % s;
            (t < r || t > n) && F(e, t);
          }
        else
          for (let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1)
            i !== r && (i > n || i < r) && F(e, i);
      };
    var R = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(P(i, "padding-left") || 0, 10) -
              parseInt(P(i, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(P(i, "padding-top") || 0, 10) -
              parseInt(P(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t, s) {
          return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
        }
        const s = e.params,
          {
            wrapperEl: i,
            slidesEl: r,
            size: n,
            rtlTranslate: a,
            wrongRTL: o,
          } = e,
          l = e.virtual && s.virtual.enabled,
          d = l ? e.virtual.slides.length : e.slides.length,
          c = L(r, `.${e.params.slideClass}, swiper-slide`),
          u = l ? e.virtual.slides.length : c.length;
        let p = [];
        const f = [],
          m = [];
        let h = s.slidesOffsetBefore;
        "function" == typeof h && (h = s.slidesOffsetBefore.call(e));
        let v = s.slidesOffsetAfter;
        "function" == typeof v && (v = s.slidesOffsetAfter.call(e));
        const g = e.snapGrid.length,
          w = e.slidesGrid.length;
        let b = s.spaceBetween,
          y = -h,
          S = 0,
          E = 0;
        if (void 0 === n) return;
        "string" == typeof b && b.indexOf("%") >= 0
          ? (b = (parseFloat(b.replace("%", "")) / 100) * n)
          : "string" == typeof b && (b = parseFloat(b)),
          (e.virtualSize = -b),
          c.forEach((e) => {
            a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          s.centeredSlides &&
            s.cssMode &&
            (T(i, "--swiper-centered-offset-before", ""),
            T(i, "--swiper-centered-offset-after", ""));
        const x = s.grid && s.grid.rows > 1 && e.grid;
        let _;
        x ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
        const C =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView,
          ).length > 0;
        for (let i = 0; i < u; i += 1) {
          let r;
          if (
            ((_ = 0),
            c[i] && (r = c[i]),
            x && e.grid.updateSlide(i, r, c),
            !c[i] || "none" !== P(r, "display"))
          ) {
            if ("auto" === s.slidesPerView) {
              C && (c[i].style[e.getDirectionLabel("width")] = "");
              const n = getComputedStyle(r),
                a = r.style.transform,
                o = r.style.webkitTransform;
              if (
                (a && (r.style.transform = "none"),
                o && (r.style.webkitTransform = "none"),
                s.roundLengths)
              )
                _ = e.isHorizontal() ? A(r, "width", !0) : A(r, "height", !0);
              else {
                const e = t(n, "width"),
                  s = t(n, "padding-left"),
                  i = t(n, "padding-right"),
                  a = t(n, "margin-left"),
                  o = t(n, "margin-right"),
                  l = n.getPropertyValue("box-sizing");
                if (l && "border-box" === l) _ = e + a + o;
                else {
                  const { clientWidth: t, offsetWidth: n } = r;
                  _ = e + s + i + a + o + (n - t);
                }
              }
              a && (r.style.transform = a),
                o && (r.style.webkitTransform = o),
                s.roundLengths && (_ = Math.floor(_));
            } else
              (_ = (n - (s.slidesPerView - 1) * b) / s.slidesPerView),
                s.roundLengths && (_ = Math.floor(_)),
                c[i] && (c[i].style[e.getDirectionLabel("width")] = `${_}px`);
            c[i] && (c[i].swiperSlideSize = _),
              m.push(_),
              s.centeredSlides
                ? ((y = y + _ / 2 + S / 2 + b),
                  0 === S && 0 !== i && (y = y - n / 2 - b),
                  0 === i && (y = y - n / 2 - b),
                  Math.abs(y) < 0.001 && (y = 0),
                  s.roundLengths && (y = Math.floor(y)),
                  E % s.slidesPerGroup == 0 && p.push(y),
                  f.push(y))
                : (s.roundLengths && (y = Math.floor(y)),
                  (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(y),
                  f.push(y),
                  (y = y + _ + b)),
              (e.virtualSize += _ + b),
              (S = _),
              (E += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, n) + v),
          a &&
            o &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            (i.style.width = `${e.virtualSize + b}px`),
          s.setWrapperSize &&
            (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + b}px`),
          x && e.grid.updateWrapperSize(_, p),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < p.length; i += 1) {
            let r = p[i];
            s.roundLengths && (r = Math.floor(r)),
              p[i] <= e.virtualSize - n && t.push(r);
          }
          (p = t),
            Math.floor(e.virtualSize - n) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - n);
        }
        if (l && s.loop) {
          const t = m[0] + b;
          if (s.slidesPerGroup > 1) {
            const i = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  s.slidesPerGroup,
              ),
              r = t * s.slidesPerGroup;
            for (let e = 0; e < i; e += 1) p.push(p[p.length - 1] + r);
          }
          for (
            let i = 0;
            i < e.virtual.slidesBefore + e.virtual.slidesAfter;
            i += 1
          )
            1 === s.slidesPerGroup && p.push(p[p.length - 1] + t),
              f.push(f[f.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === p.length && (p = [0]), 0 !== b)) {
          const t =
            e.isHorizontal() && a
              ? "marginLeft"
              : e.getDirectionLabel("marginRight");
          c.filter(
            (e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1,
          ).forEach((e) => {
            e.style[t] = `${b}px`;
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          m.forEach((t) => {
            e += t + (b || 0);
          }),
            (e -= b);
          const t = e - n;
          p = p.map((e) => (e <= 0 ? -h : e > t ? t + v : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          if (
            (m.forEach((t) => {
              e += t + (b || 0);
            }),
            (e -= b),
            e < n)
          ) {
            const t = (n - e) / 2;
            p.forEach((e, s) => {
              p[s] = e - t;
            }),
              f.forEach((e, s) => {
                f[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: c,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: m,
          }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          T(i, "--swiper-centered-offset-before", -p[0] + "px"),
            T(
              i,
              "--swiper-centered-offset-after",
              e.size / 2 - m[m.length - 1] / 2 + "px",
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (u !== d && e.emit("slidesLengthChange"),
          p.length !== g &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== w && e.emit("slidesGridLengthChange"),
          s.watchSlidesProgress && e.updateSlidesOffset(),
          e.emit("slidesUpdated"),
          !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
        ) {
          const t = `${s.containerModifierClass}backface-hidden`,
            i = e.el.classList.contains(t);
          u <= s.maxBackfaceHiddenSlides
            ? i || e.el.classList.add(t)
            : i && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let r,
          n = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
              const e = t.activeIndex + r;
              if (e > t.slides.length && !i) break;
              s.push(a(e));
            }
        else s.push(a(t.activeIndex));
        for (r = 0; r < s.length; r += 1)
          if (void 0 !== s[r]) {
            const e = s[r].offsetHeight;
            n = e > n ? e : n;
          }
        (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
            s -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: r, snapGrid: n } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        r && (a = e),
          i.forEach((e) => {
            e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let o = s.spaceBetween;
        "string" == typeof o && o.indexOf("%") >= 0
          ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
          : "string" == typeof o && (o = parseFloat(o));
        for (let e = 0; e < i.length; e += 1) {
          const l = i[e];
          let d = l.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
          const c =
              (a + (s.centeredSlides ? t.minTranslate() : 0) - d) /
              (l.swiperSlideSize + o),
            u =
              (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
              (l.swiperSlideSize + o),
            p = -(a - d),
            f = p + t.slidesSizesGrid[e],
            m = p >= 0 && p <= t.size - t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) ||
            (f > 1 && f <= t.size) ||
            (p <= 0 && f >= t.size)) &&
            (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(s.slideVisibleClass)),
            m && i[e].classList.add(s.slideFullyVisibleClass),
            (l.progress = r ? -c : c),
            (l.originalProgress = r ? -u : u);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: r, isBeginning: n, isEnd: a, progressLoop: o } = t;
        const l = n,
          d = a;
        if (0 === i) (r = 0), (n = !0), (a = !0);
        else {
          r = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            o = Math.abs(e - t.maxTranslate()) < 1;
          (n = s || r <= 0), (a = o || r >= 1), s && (r = 0), o && (r = 1);
        }
        if (s.loop) {
          const s = t.getSlideIndexByData(0),
            i = t.getSlideIndexByData(t.slides.length - 1),
            r = t.slidesGrid[s],
            n = t.slidesGrid[i],
            a = t.slidesGrid[t.slidesGrid.length - 1],
            l = Math.abs(e);
          (o = l >= r ? (l - r) / a : (l + a - n) / a), o > 1 && (o -= 1);
        }
        Object.assign(t, {
          progress: r,
          progressLoop: o,
          isBeginning: n,
          isEnd: a,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          n && !l && t.emit("reachBeginning toEdge"),
          a && !d && t.emit("reachEnd toEdge"),
          ((l && !n) || (d && !a)) && t.emit("fromEdge"),
          t.emit("progress", r);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: r } = e,
          n = e.virtual && s.virtual.enabled,
          a = e.grid && s.grid && s.grid.rows > 1,
          o = (e) => L(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let l, d, c;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              s.slideActiveClass,
              s.slideNextClass,
              s.slidePrevClass,
            );
          }),
          n)
        )
          if (s.loop) {
            let t = r - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (l = o(`[data-swiper-slide-index="${t}"]`));
          } else l = o(`[data-swiper-slide-index="${r}"]`);
        else
          a
            ? ((l = t.filter((e) => e.column === r)[0]),
              (c = t.filter((e) => e.column === r + 1)[0]),
              (d = t.filter((e) => e.column === r - 1)[0]))
            : (l = t[r]);
        l &&
          (l.classList.add(s.slideActiveClass),
          a
            ? (c && c.classList.add(s.slideNextClass),
              d && d.classList.add(s.slidePrevClass))
            : ((c = (function (e, t) {
                const s = [];
                for (; e.nextElementSibling; ) {
                  const i = e.nextElementSibling;
                  t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
                }
                return s;
              })(l, `.${s.slideClass}, swiper-slide`)[0]),
              s.loop && !c && (c = t[0]),
              c && c.classList.add(s.slideNextClass),
              (d = (function (e, t) {
                const s = [];
                for (; e.previousElementSibling; ) {
                  const i = e.previousElementSibling;
                  t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
                }
                return s;
              })(l, `.${s.slideClass}, swiper-slide`)[0]),
              s.loop && 0 === !d && (d = t[t.length - 1]),
              d && d.classList.add(s.slidePrevClass))),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: r,
            activeIndex: n,
            realIndex: a,
            snapIndex: o,
          } = t;
        let l,
          d = e;
        const c = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === d &&
            (d = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let r;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (r = e)
                    : i >= t[e] && i < t[e + 1] && (r = e + 1)
                  : i >= t[e] && (r = e);
              return (
                s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
              );
            })(t)),
          i.indexOf(s) >= 0)
        )
          l = i.indexOf(s);
        else {
          const e = Math.min(r.slidesPerGroupSkip, d);
          l = e + Math.floor((d - e) / r.slidesPerGroup);
        }
        if ((l >= i.length && (l = i.length - 1), d === n && !t.params.loop))
          return void (
            l !== o && ((t.snapIndex = l), t.emit("snapIndexChange"))
          );
        if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled)
          return void (t.realIndex = c(d));
        const u = t.grid && r.grid && r.grid.rows > 1;
        let p;
        if (t.virtual && r.virtual.enabled && r.loop) p = c(d);
        else if (u) {
          const e = t.slides.filter((e) => e.column === d)[0];
          let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
          Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
            (p = Math.floor(s / r.grid.rows));
        } else if (t.slides[d]) {
          const e = t.slides[d].getAttribute("data-swiper-slide-index");
          p = e ? parseInt(e, 10) : d;
        } else p = d;
        Object.assign(t, {
          previousSnapIndex: o,
          snapIndex: l,
          previousRealIndex: a,
          realIndex: p,
          previousIndex: n,
          activeIndex: d,
        }),
          t.initialized && $(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            (a !== p && t.emit("realIndexChange"), t.emit("slideChange"));
      },
      updateClickedSlide: function (e, t) {
        const s = this,
          i = s.params;
        let r = e.closest(`.${i.slideClass}, swiper-slide`);
        !r &&
          s.isElement &&
          t &&
          t.length > 1 &&
          t.includes(e) &&
          [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
            !r &&
              e.matches &&
              e.matches(`.${i.slideClass}, swiper-slide`) &&
              (r = e);
          });
        let n,
          a = !1;
        if (r)
          for (let e = 0; e < s.slides.length; e += 1)
            if (s.slides[e] === r) {
              (a = !0), (n = e);
              break;
            }
        if (!r || !a)
          return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
        (s.clickedSlide = r),
          s.virtual && s.params.virtual.enabled
            ? (s.clickedIndex = parseInt(
                r.getAttribute("data-swiper-slide-index"),
                10,
              ))
            : (s.clickedIndex = n),
          i.slideToClickedSlide &&
            void 0 !== s.clickedIndex &&
            s.clickedIndex !== s.activeIndex &&
            s.slideToClickedSlide();
      },
    };
    var H = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: r } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let n = y(r, e);
        return (n += this.cssOverflowAdjustment()), s && (n = -n), n || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = s;
        let o,
          l = 0,
          d = 0;
        s.isHorizontal() ? (l = i ? -e : e) : (d = e),
          r.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? l : d),
          r.cssMode
            ? (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -l : -d)
            : r.virtualTranslate ||
              (s.isHorizontal()
                ? (l -= s.cssOverflowAdjustment())
                : (d -= s.cssOverflowAdjustment()),
              (n.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
        const c = s.maxTranslate() - s.minTranslate();
        (o = 0 === c ? 0 : (e - s.minTranslate()) / c),
          o !== a && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, i, r) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === i && (i = !0);
        const n = this,
          { params: a, wrapperEl: o } = n;
        if (n.animating && a.preventInteractionOnTransition) return !1;
        const l = n.minTranslate(),
          d = n.maxTranslate();
        let c;
        if (
          ((c = i && e > l ? l : i && e < d ? d : e),
          n.updateProgress(c),
          a.cssMode)
        ) {
          const e = n.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!n.support.smoothScroll)
              return (
                x({ swiper: n, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (n.setTransition(0),
              n.setTranslate(c),
              s &&
                (n.emit("beforeTransitionStart", t, r),
                n.emit("transitionEnd")))
            : (n.setTransition(t),
              n.setTranslate(c),
              s &&
                (n.emit("beforeTransitionStart", t, r),
                n.emit("transitionStart")),
              n.animating ||
                ((n.animating = !0),
                n.onTranslateToWrapperTransitionEnd ||
                  (n.onTranslateToWrapperTransitionEnd = function (e) {
                    n &&
                      !n.destroyed &&
                      e.target === this &&
                      (n.wrapperEl.removeEventListener(
                        "transitionend",
                        n.onTranslateToWrapperTransitionEnd,
                      ),
                      (n.onTranslateToWrapperTransitionEnd = null),
                      delete n.onTranslateToWrapperTransitionEnd,
                      s && n.emit("transitionEnd"));
                  }),
                n.wrapperEl.addEventListener(
                  "transitionend",
                  n.onTranslateToWrapperTransitionEnd,
                ))),
          !0
        );
      },
    };
    function j(e) {
      let { swiper: t, runCallbacks: s, direction: i, step: r } = e;
      const { activeIndex: n, previousIndex: a } = t;
      let o = i;
      if (
        (o || (o = n > a ? "next" : n < a ? "prev" : "reset"),
        t.emit(`transition${r}`),
        s && n !== a)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${r}`);
        t.emit(`slideChangeTransition${r}`),
          "next" === o
            ? t.emit(`slideNextTransition${r}`)
            : t.emit(`slidePrevTransition${r}`);
      }
    }
    var W = {
      slideTo: function (e, t, s, i, r) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "string" == typeof e && (e = parseInt(e, 10));
        const n = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: m,
        } = n;
        if (
          (n.animating && o.preventInteractionOnTransition) ||
          (!m && !i && !r) ||
          n.destroyed
        )
          return !1;
        const h = Math.min(n.params.slidesPerGroupSkip, a);
        let v = h + Math.floor((a - h) / n.params.slidesPerGroup);
        v >= l.length && (v = l.length - 1);
        const g = -l[v];
        if (o.normalizeSlideIndex)
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * g),
              s = Math.floor(100 * d[e]),
              i = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (a = e)
                : t >= s && t < i && (a = e + 1)
              : t >= s && (a = e);
          }
        if (n.initialized && a !== u) {
          if (
            !n.allowSlideNext &&
            (p
              ? g > n.translate && g > n.minTranslate()
              : g < n.translate && g < n.minTranslate())
          )
            return !1;
          if (
            !n.allowSlidePrev &&
            g > n.translate &&
            g > n.maxTranslate() &&
            (u || 0) !== a
          )
            return !1;
        }
        let w;
        if (
          (a !== (c || 0) && s && n.emit("beforeSlideChangeStart"),
          n.updateProgress(g),
          (w = a > u ? "next" : a < u ? "prev" : "reset"),
          (p && -g === n.translate) || (!p && g === n.translate))
        )
          return (
            n.updateActiveIndex(a),
            o.autoHeight && n.updateAutoHeight(),
            n.updateSlidesClasses(),
            "slide" !== o.effect && n.setTranslate(g),
            "reset" !== w && (n.transitionStart(s, w), n.transitionEnd(s, w)),
            !1
          );
        if (o.cssMode) {
          const e = n.isHorizontal(),
            s = p ? g : -g;
          if (0 === t) {
            const t = n.virtual && n.params.virtual.enabled;
            t &&
              ((n.wrapperEl.style.scrollSnapType = "none"),
              (n._immediateVirtual = !0)),
              t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
                ? ((n._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    f[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (f[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (n.wrapperEl.style.scrollSnapType = ""),
                    (n._immediateVirtual = !1);
                });
          } else {
            if (!n.support.smoothScroll)
              return (
                x({ swiper: n, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          n.setTransition(t),
          n.setTranslate(g),
          n.updateActiveIndex(a),
          n.updateSlidesClasses(),
          n.emit("beforeTransitionStart", t, i),
          n.transitionStart(s, w),
          0 === t
            ? n.transitionEnd(s, w)
            : n.animating ||
              ((n.animating = !0),
              n.onSlideToWrapperTransitionEnd ||
                (n.onSlideToWrapperTransitionEnd = function (e) {
                  n &&
                    !n.destroyed &&
                    e.target === this &&
                    (n.wrapperEl.removeEventListener(
                      "transitionend",
                      n.onSlideToWrapperTransitionEnd,
                    ),
                    (n.onSlideToWrapperTransitionEnd = null),
                    delete n.onSlideToWrapperTransitionEnd,
                    n.transitionEnd(s, w));
                }),
              n.wrapperEl.addEventListener(
                "transitionend",
                n.onSlideToWrapperTransitionEnd,
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "string" == typeof e)
        ) {
          e = parseInt(e, 10);
        }
        const r = this;
        if (r.destroyed) return;
        const n = r.grid && r.params.grid && r.params.grid.rows > 1;
        let a = e;
        if (r.params.loop)
          if (r.virtual && r.params.virtual.enabled)
            a += r.virtual.slidesBefore;
          else {
            let e;
            if (n) {
              const t = a * r.params.grid.rows;
              e = r.slides.filter(
                (e) => 1 * e.getAttribute("data-swiper-slide-index") === t,
              )[0].column;
            } else e = r.getSlideIndexByData(a);
            const t = n
                ? Math.ceil(r.slides.length / r.params.grid.rows)
                : r.slides.length,
              { centeredSlides: s } = r.params;
            let i = r.params.slidesPerView;
            "auto" === i
              ? (i = r.slidesPerViewDynamic())
              : ((i = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
                s && i % 2 == 0 && (i += 1));
            let o = t - e < i;
            if ((s && (o = o || e < Math.ceil(i / 2)), o)) {
              const i = s
                ? e < r.activeIndex
                  ? "prev"
                  : "next"
                : e - r.activeIndex - 1 < r.params.slidesPerView
                  ? "next"
                  : "prev";
              r.loopFix({
                direction: i,
                slideTo: !0,
                activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                slideRealIndex: "next" === i ? r.realIndex : void 0,
              });
            }
            if (n) {
              const e = a * r.params.grid.rows;
              a = r.slides.filter(
                (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
              )[0].column;
            } else a = r.getSlideIndexByData(a);
          }
        return (
          requestAnimationFrame(() => {
            r.slideTo(a, t, s, i);
          }),
          r
        );
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { enabled: r, params: n, animating: a } = i;
        if (!r || i.destroyed) return i;
        let o = n.slidesPerGroup;
        "auto" === n.slidesPerView &&
          1 === n.slidesPerGroup &&
          n.slidesPerGroupAuto &&
          (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
          d = i.virtual && n.virtual.enabled;
        if (n.loop) {
          if (a && !d && n.loopPreventsSliding) return !1;
          if (
            (i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft),
            i.activeIndex === i.slides.length - 1 && n.cssMode)
          )
            return (
              requestAnimationFrame(() => {
                i.slideTo(i.activeIndex + l, e, t, s);
              }),
              !0
            );
        }
        return n.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + l, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          {
            params: r,
            snapGrid: n,
            slidesGrid: a,
            rtlTranslate: o,
            enabled: l,
            animating: d,
          } = i;
        if (!l || i.destroyed) return i;
        const c = i.virtual && r.virtual.enabled;
        if (r.loop) {
          if (d && !c && r.loopPreventsSliding) return !1;
          i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = u(o ? i.translate : -i.translate),
          f = n.map((e) => u(e));
        let m = n[f.indexOf(p) - 1];
        if (void 0 === m && r.cssMode) {
          let e;
          n.forEach((t, s) => {
            p >= t && (e = s);
          }),
            void 0 !== e && (m = n[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== m &&
            ((h = a.indexOf(m)),
            h < 0 && (h = i.activeIndex - 1),
            "auto" === r.slidesPerView &&
              1 === r.slidesPerGroup &&
              r.slidesPerGroupAuto &&
              ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          r.rewind && i.isBeginning)
        ) {
          const r =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(r, e, t, s);
        }
        return r.loop && 0 === i.activeIndex && r.cssMode
          ? (requestAnimationFrame(() => {
              i.slideTo(h, e, t, s);
            }),
            !0)
          : i.slideTo(h, e, t, s);
      },
      slideReset: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this;
        if (!i.destroyed) return i.slideTo(i.activeIndex, e, t, s);
      },
      slideToClosest: function (e, t, s, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const r = this;
        if (r.destroyed) return;
        let n = r.activeIndex;
        const a = Math.min(r.params.slidesPerGroupSkip, n),
          o = a + Math.floor((n - a) / r.params.slidesPerGroup),
          l = r.rtlTranslate ? r.translate : -r.translate;
        if (l >= r.snapGrid[o]) {
          const e = r.snapGrid[o];
          l - e > (r.snapGrid[o + 1] - e) * i && (n += r.params.slidesPerGroup);
        } else {
          const e = r.snapGrid[o - 1];
          l - e <= (r.snapGrid[o] - e) * i && (n -= r.params.slidesPerGroup);
        }
        return (
          (n = Math.max(n, 0)),
          (n = Math.min(n, r.slidesGrid.length - 1)),
          r.slideTo(n, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this;
        if (e.destroyed) return;
        const { params: t, slidesEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let r,
          n = e.clickedIndex;
        const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (r = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10,
          )),
            t.centeredSlides
              ? n < e.loopedSlides - i / 2 ||
                n > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (n = e.getSlideIndex(
                    L(s, `${a}[data-swiper-slide-index="${r}"]`)[0],
                  )),
                  w(() => {
                    e.slideTo(n);
                  }))
                : e.slideTo(n)
              : n > e.slides.length - i
                ? (e.loopFix(),
                  (n = e.getSlideIndex(
                    L(s, `${a}[data-swiper-slide-index="${r}"]`)[0],
                  )),
                  w(() => {
                    e.slideTo(n);
                  }))
                : e.slideTo(n);
        } else e.slideTo(n);
      },
    };
    var Y = {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        const r = () => {
            L(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t);
            });
          },
          n = t.grid && s.grid && s.grid.rows > 1,
          a = s.slidesPerGroup * (n ? s.grid.rows : 1),
          o = t.slides.length % a != 0,
          l = n && t.slides.length % s.grid.rows != 0,
          d = (e) => {
            for (let i = 0; i < e; i += 1) {
              const e = t.isElement
                ? M("swiper-slide", [s.slideBlankClass])
                : M("div", [s.slideClass, s.slideBlankClass]);
              t.slidesEl.append(e);
            }
          };
        if (o) {
          if (s.loopAddBlankSlides) {
            d(a - (t.slides.length % a)), t.recalcSlides(), t.updateSlides();
          } else
            C(
              "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
            );
          r();
        } else if (l) {
          if (s.loopAddBlankSlides) {
            d(s.grid.rows - (t.slides.length % s.grid.rows)),
              t.recalcSlides(),
              t.updateSlides();
          } else
            C(
              "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
            );
          r();
        } else r();
        t.loopFix({
          slideRealIndex: e,
          direction: s.centeredSlides ? void 0 : "next",
        });
      },
      loopFix: function (e) {
        let {
          slideRealIndex: t,
          slideTo: s = !0,
          direction: i,
          setTranslate: r,
          activeSlideIndex: n,
          byController: a,
          byMousewheel: o,
        } = void 0 === e ? {} : e;
        const l = this;
        if (!l.params.loop) return;
        l.emit("beforeLoopFix");
        const {
            slides: d,
            allowSlidePrev: c,
            allowSlideNext: u,
            slidesEl: p,
            params: f,
          } = l,
          { centeredSlides: m } = f;
        if (
          ((l.allowSlidePrev = !0),
          (l.allowSlideNext = !0),
          l.virtual && f.virtual.enabled)
        )
          return (
            s &&
              (f.centeredSlides || 0 !== l.snapIndex
                ? f.centeredSlides && l.snapIndex < f.slidesPerView
                  ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                  : l.snapIndex === l.snapGrid.length - 1 &&
                    l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
            (l.allowSlidePrev = c),
            (l.allowSlideNext = u),
            void l.emit("loopFix")
          );
        let h = f.slidesPerView;
        "auto" === h
          ? (h = l.slidesPerViewDynamic())
          : ((h = Math.ceil(parseFloat(f.slidesPerView, 10))),
            m && h % 2 == 0 && (h += 1));
        const v = f.slidesPerGroupAuto ? h : f.slidesPerGroup;
        let g = v;
        g % v != 0 && (g += v - (g % v)),
          (g += f.loopAdditionalSlides),
          (l.loopedSlides = g);
        const w = l.grid && f.grid && f.grid.rows > 1;
        d.length < h + g
          ? C(
              "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
            )
          : w &&
            "row" === f.grid.fill &&
            C(
              "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
            );
        const b = [],
          y = [];
        let S = l.activeIndex;
        void 0 === n
          ? (n = l.getSlideIndex(
              d.filter((e) => e.classList.contains(f.slideActiveClass))[0],
            ))
          : (S = n);
        const E = "next" === i || !i,
          T = "prev" === i || !i;
        let x = 0,
          _ = 0;
        const L = w ? Math.ceil(d.length / f.grid.rows) : d.length,
          M = (w ? d[n].column : n) + (m && void 0 === r ? -h / 2 + 0.5 : 0);
        if (M < g) {
          x = Math.max(g - M, v);
          for (let e = 0; e < g - M; e += 1) {
            const t = e - Math.floor(e / L) * L;
            if (w) {
              const e = L - t - 1;
              for (let t = d.length - 1; t >= 0; t -= 1)
                d[t].column === e && b.push(t);
            } else b.push(L - t - 1);
          }
        } else if (M + h > L - g) {
          _ = Math.max(M - (L - 2 * g), v);
          for (let e = 0; e < _; e += 1) {
            const t = e - Math.floor(e / L) * L;
            w
              ? d.forEach((e, s) => {
                  e.column === t && y.push(s);
                })
              : y.push(t);
          }
        }
        if (
          ((l.__preventObserver__ = !0),
          requestAnimationFrame(() => {
            l.__preventObserver__ = !1;
          }),
          T &&
            b.forEach((e) => {
              (d[e].swiperLoopMoveDOM = !0),
                p.prepend(d[e]),
                (d[e].swiperLoopMoveDOM = !1);
            }),
          E &&
            y.forEach((e) => {
              (d[e].swiperLoopMoveDOM = !0),
                p.append(d[e]),
                (d[e].swiperLoopMoveDOM = !1);
            }),
          l.recalcSlides(),
          "auto" === f.slidesPerView
            ? l.updateSlides()
            : w &&
              ((b.length > 0 && T) || (y.length > 0 && E)) &&
              l.slides.forEach((e, t) => {
                l.grid.updateSlide(t, e, l.slides);
              }),
          f.watchSlidesProgress && l.updateSlidesOffset(),
          s)
        )
          if (b.length > 0 && T) {
            if (void 0 === t) {
              const e = l.slidesGrid[S],
                t = l.slidesGrid[S + x] - e;
              o
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(S + Math.ceil(x), 0, !1, !0),
                  r &&
                    ((l.touchEventsData.startTranslate =
                      l.touchEventsData.startTranslate - t),
                    (l.touchEventsData.currentTranslate =
                      l.touchEventsData.currentTranslate - t)));
            } else if (r) {
              const e = w ? b.length / f.grid.rows : b.length;
              l.slideTo(l.activeIndex + e, 0, !1, !0),
                (l.touchEventsData.currentTranslate = l.translate);
            }
          } else if (y.length > 0 && E)
            if (void 0 === t) {
              const e = l.slidesGrid[S],
                t = l.slidesGrid[S - _] - e;
              o
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(S - _, 0, !1, !0),
                  r &&
                    ((l.touchEventsData.startTranslate =
                      l.touchEventsData.startTranslate - t),
                    (l.touchEventsData.currentTranslate =
                      l.touchEventsData.currentTranslate - t)));
            } else {
              const e = w ? y.length / f.grid.rows : y.length;
              l.slideTo(l.activeIndex - e, 0, !1, !0);
            }
        if (
          ((l.allowSlidePrev = c),
          (l.allowSlideNext = u),
          l.controller && l.controller.control && !a)
        ) {
          const e = {
            slideRealIndex: t,
            direction: i,
            setTranslate: r,
            activeSlideIndex: n,
            byController: !0,
          };
          Array.isArray(l.controller.control)
            ? l.controller.control.forEach((t) => {
                !t.destroyed &&
                  t.params.loop &&
                  t.loopFix({
                    ...e,
                    slideTo: t.params.slidesPerView === f.slidesPerView && s,
                  });
              })
            : l.controller.control instanceof l.constructor &&
              l.controller.control.params.loop &&
              l.controller.control.loopFix({
                ...e,
                slideTo:
                  l.controller.control.params.slidesPerView ===
                    f.slidesPerView && s,
              });
        }
        l.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: s } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const i = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          i[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          i.forEach((e) => {
            s.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function X(e, t, s) {
      const i = g(),
        { params: r } = e,
        n = r.edgeSwipeDetection,
        a = r.edgeSwipeThreshold;
      return (
        !n ||
        !(s <= a || s >= i.innerWidth - a) ||
        ("prevent" === n && (t.preventDefault(), !0))
      );
    }
    function U(e) {
      const t = this,
        s = h();
      let i = e;
      i.originalEvent && (i = i.originalEvent);
      const r = t.touchEventsData;
      if ("pointerdown" === i.type) {
        if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
        r.pointerId = i.pointerId;
      } else
        "touchstart" === i.type &&
          1 === i.targetTouches.length &&
          (r.touchId = i.targetTouches[0].identifier);
      if ("touchstart" === i.type)
        return void X(t, i, i.targetTouches[0].pageX);
      const { params: n, touches: a, enabled: o } = t;
      if (!o) return;
      if (!n.simulateTouch && "mouse" === i.pointerType) return;
      if (t.animating && n.preventInteractionOnTransition) return;
      !t.animating && n.cssMode && n.loop && t.loopFix();
      let l = i.target;
      if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(l)) return;
      if ("which" in i && 3 === i.which) return;
      if ("button" in i && i.button > 0) return;
      if (r.isTouched && r.isMoved) return;
      const d = !!n.noSwipingClass && "" !== n.noSwipingClass,
        c = i.composedPath ? i.composedPath() : i.path;
      d && i.target && i.target.shadowRoot && c && (l = c[0]);
      const u = n.noSwipingSelector
          ? n.noSwipingSelector
          : `.${n.noSwipingClass}`,
        p = !(!i.target || !i.target.shadowRoot);
      if (
        n.noSwiping &&
        (p
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  if (!s || s === h() || s === g()) return null;
                  s.assignedSlot && (s = s.assignedSlot);
                  const i = s.closest(e);
                  return i || s.getRootNode
                    ? i || t(s.getRootNode().host)
                    : null;
                })(t)
              );
            })(u, l)
          : l.closest(u))
      )
        return void (t.allowClick = !0);
      if (n.swipeHandler && !l.closest(n.swipeHandler)) return;
      (a.currentX = i.pageX), (a.currentY = i.pageY);
      const f = a.currentX,
        m = a.currentY;
      if (!X(t, i, f)) return;
      Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (a.startX = f),
        (a.startY = m),
        (r.touchStartTime = b()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        n.threshold > 0 && (r.allowThresholdMove = !1);
      let v = !0;
      l.matches(r.focusableElements) &&
        ((v = !1), "SELECT" === l.nodeName && (r.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(r.focusableElements) &&
          s.activeElement !== l &&
          s.activeElement.blur();
      const w = v && t.allowTouchMove && n.touchStartPreventDefault;
      (!n.touchStartForcePreventDefault && !w) ||
        l.isContentEditable ||
        i.preventDefault(),
        n.freeMode &&
          n.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !n.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", i);
    }
    function K(e) {
      const t = h(),
        s = this,
        i = s.touchEventsData,
        { params: r, touches: n, rtlTranslate: a, enabled: o } = s;
      if (!o) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      let l,
        d = e;
      if (
        (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type)
      ) {
        if (null !== i.touchId) return;
        if (d.pointerId !== i.pointerId) return;
      }
      if ("touchmove" === d.type) {
        if (
          ((l = [...d.changedTouches].filter(
            (e) => e.identifier === i.touchId,
          )[0]),
          !l || l.identifier !== i.touchId)
        )
          return;
      } else l = d;
      if (!i.isTouched)
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", d)
        );
      const c = l.pageX,
        u = l.pageY;
      if (d.preventedByNestedSwiper) return (n.startX = c), void (n.startY = u);
      if (!s.allowTouchMove)
        return (
          d.target.matches(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(n, {
              startX: c,
              startY: u,
              currentX: c,
              currentY: u,
            }),
            (i.touchStartTime = b()))
          )
        );
      if (r.touchReleaseOnEdges && !r.loop)
        if (s.isVertical()) {
          if (
            (u < n.startY && s.translate <= s.maxTranslate()) ||
            (u > n.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (c < n.startX && s.translate <= s.maxTranslate()) ||
          (c > n.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        d.target === t.activeElement &&
        d.target.matches(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      i.allowTouchCallbacks && s.emit("touchMove", d),
        (n.previousX = n.currentX),
        (n.previousY = n.currentY),
        (n.currentX = c),
        (n.currentY = u);
      const p = n.currentX - n.startX,
        f = n.currentY - n.startY;
      if (s.params.threshold && Math.sqrt(p ** 2 + f ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && n.currentY === n.startY) ||
        (s.isVertical() && n.currentX === n.startX)
          ? (i.isScrolling = !1)
          : p * p + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > r.touchAngle
              : 90 - e > r.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", d),
        void 0 === i.startMoving &&
          ((n.currentX === n.startX && n.currentY === n.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !r.cssMode && d.cancelable && d.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && d.stopPropagation();
      let m = s.isHorizontal() ? p : f,
        v = s.isHorizontal()
          ? n.currentX - n.previousX
          : n.currentY - n.previousY;
      r.oneWayMovement &&
        ((m = Math.abs(m) * (a ? 1 : -1)), (v = Math.abs(v) * (a ? 1 : -1))),
        (n.diff = m),
        (m *= r.touchRatio),
        a && ((m = -m), (v = -v));
      const g = s.touchesDirection;
      (s.swipeDirection = m > 0 ? "prev" : "next"),
        (s.touchesDirection = v > 0 ? "prev" : "next");
      const w = s.params.loop && !r.cssMode,
        y =
          ("next" === s.touchesDirection && s.allowSlideNext) ||
          ("prev" === s.touchesDirection && s.allowSlidePrev);
      if (!i.isMoved) {
        if (
          (w && y && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          s.wrapperEl.dispatchEvent(e);
        }
        (i.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", d);
      }
      if (
        (new Date().getTime(),
        i.isMoved &&
          i.allowThresholdMove &&
          g !== s.touchesDirection &&
          w &&
          y &&
          Math.abs(m) >= 1)
      )
        return (
          Object.assign(n, {
            startX: c,
            startY: u,
            currentX: c,
            currentY: u,
            startTranslate: i.currentTranslate,
          }),
          (i.loopSwapReset = !0),
          void (i.startTranslate = i.currentTranslate)
        );
      s.emit("sliderMove", d),
        (i.isMoved = !0),
        (i.currentTranslate = m + i.startTranslate);
      let S = !0,
        E = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (E = 0),
        m > 0
          ? (w &&
              y &&
              i.allowThresholdMove &&
              i.currentTranslate >
                (r.centeredSlides
                  ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1]
                  : s.minTranslate()) &&
              s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            i.currentTranslate > s.minTranslate() &&
              ((S = !1),
              r.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + m) ** E)))
          : m < 0 &&
            (w &&
              y &&
              i.allowThresholdMove &&
              i.currentTranslate <
                (r.centeredSlides
                  ? s.maxTranslate() +
                    s.slidesSizesGrid[s.slidesSizesGrid.length - 1]
                  : s.maxTranslate()) &&
              s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ("auto" === r.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(r.slidesPerView, 10))),
              }),
            i.currentTranslate < s.maxTranslate() &&
              ((S = !1),
              r.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - m) ** E))),
        S && (d.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(m) > r.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (n.startX = n.currentX),
            (n.startY = n.currentY),
            (i.currentTranslate = i.startTranslate),
            void (n.diff = s.isHorizontal()
              ? n.currentX - n.startX
              : n.currentY - n.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
          r.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        r.freeMode &&
          r.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function J(e) {
      const t = this,
        s = t.touchEventsData;
      let i,
        r = e;
      r.originalEvent && (r = r.originalEvent);
      if ("touchend" === r.type || "touchcancel" === r.type) {
        if (
          ((i = [...r.changedTouches].filter(
            (e) => e.identifier === s.touchId,
          )[0]),
          !i || i.identifier !== s.touchId)
        )
          return;
      } else {
        if (null !== s.touchId) return;
        if (r.pointerId !== s.pointerId) return;
        i = r;
      }
      if (
        ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
          r.type,
        )
      ) {
        if (
          !(
            ["pointercancel", "contextmenu"].includes(r.type) &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      (s.pointerId = null), (s.touchId = null);
      const {
        params: n,
        touches: a,
        rtlTranslate: o,
        slidesGrid: l,
        enabled: d,
      } = t;
      if (!d) return;
      if (!n.simulateTouch && "mouse" === r.pointerType) return;
      if (
        (s.allowTouchCallbacks && t.emit("touchEnd", r),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = b(),
        u = c - s.touchStartTime;
      if (t.allowClick) {
        const e = r.path || (r.composedPath && r.composedPath());
        t.updateClickedSlide((e && e[0]) || r.target, e),
          t.emit("tap click", r),
          u < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", r);
      }
      if (
        ((s.lastClickTime = b()),
        w(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          (0 === a.diff && !s.loopSwapReset) ||
          (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let p;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (p = n.followFinger
          ? o
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (n.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      const f = p >= -t.maxTranslate() && !t.params.loop;
      let m = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < l.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== l[e + t]
          ? (f || (p >= l[e] && p < l[e + t])) &&
            ((m = e), (h = l[e + t] - l[e]))
          : (f || p >= l[e]) &&
            ((m = e), (h = l[l.length - 1] - l[l.length - 2]));
      }
      let v = null,
        g = null;
      n.rewind &&
        (t.isBeginning
          ? (g =
              n.virtual && n.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (v = 0));
      const y = (p - l[m]) / h,
        S = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (u > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (y >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? v : m + S)
            : t.slideTo(m)),
          "prev" === t.swipeDirection &&
            (y > 1 - n.longSwipesRatio
              ? t.slideTo(m + S)
              : null !== g && y < 0 && Math.abs(y) > n.longSwipesRatio
                ? t.slideTo(g)
                : t.slideTo(m));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
          ? r.target === t.navigation.nextEl
            ? t.slideTo(m + S)
            : t.slideTo(m)
          : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + S),
            "prev" === t.swipeDirection && t.slideTo(null !== g ? g : m));
      }
    }
    function Q() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = e,
        a = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const o = a && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      o
        ? e.params.loop && !a
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = i),
        e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
    }
    function Z(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function ee() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let r;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const n = e.maxTranslate() - e.minTranslate();
      (r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
        r !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function te(e) {
      const t = this;
      B(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    function se() {
      const e = this;
      e.documentTouchHandlerProceeded ||
        ((e.documentTouchHandlerProceeded = !0),
        e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
    }
    const ie = (e, t) => {
      const s = h(),
        { params: i, el: r, wrapperEl: n, device: a } = e,
        o = !!i.nested,
        l = "on" === t ? "addEventListener" : "removeEventListener",
        d = t;
      s[l]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: o }),
        r[l]("touchstart", e.onTouchStart, { passive: !1 }),
        r[l]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[l]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
        s[l]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
        s[l]("touchend", e.onTouchEnd, { passive: !0 }),
        s[l]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[l]("touchcancel", e.onTouchEnd, { passive: !0 }),
        s[l]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
        s[l]("contextmenu", e.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
          r[l]("click", e.onClick, !0),
        i.cssMode && n[l]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[d](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Q,
              !0,
            )
          : e[d]("observerUpdate", Q, !0),
        r[l]("load", e.onLoad, { capture: !0 });
    };
    const re = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var ne = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ae(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0],
          r = s[i];
        "object" == typeof r && null !== r
          ? (!0 === e[i] && (e[i] = { enabled: !0 }),
            "navigation" === i &&
              e[i] &&
              e[i].enabled &&
              !e[i].prevEl &&
              !e[i].nextEl &&
              (e[i].auto = !0),
            ["pagination", "scrollbar"].indexOf(i) >= 0 &&
              e[i] &&
              e[i].enabled &&
              !e[i].el &&
              (e[i].auto = !0),
            i in e && "enabled" in r
              ? ("object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                E(t, s))
              : E(t, s))
          : E(t, s);
      };
    }
    const oe = {
        eventsEmitter: q,
        update: R,
        translate: H,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode ||
              ((s.wrapperEl.style.transitionDuration = `${e}ms`),
              (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              j({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                j({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: W,
        loop: Y,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              { params: t } = e;
            (e.onTouchStart = U.bind(e)),
              (e.onTouchMove = K.bind(e)),
              (e.onTouchEnd = J.bind(e)),
              (e.onDocumentTouchStart = se.bind(e)),
              t.cssMode && (e.onScroll = ee.bind(e)),
              (e.onClick = Z.bind(e)),
              (e.onLoad = te.bind(e)),
              ie(e, "on");
          },
          detachEvents: function () {
            ie(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: s, params: i, el: r } = e,
              n = i.breakpoints;
            if (!n || (n && 0 === Object.keys(n).length)) return;
            const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const o = (a in n ? n[a] : void 0) || e.originalParams,
              l = re(e, i),
              d = re(e, o),
              c = i.enabled;
            l && !d
              ? (r.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`,
                ),
                e.emitContainerClasses())
              : !l &&
                d &&
                (r.classList.add(`${i.containerModifierClass}grid`),
                ((o.grid.fill && "column" === o.grid.fill) ||
                  (!o.grid.fill && "column" === i.grid.fill)) &&
                  r.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                if (void 0 === o[t]) return;
                const s = i[t] && i[t].enabled,
                  r = o[t] && o[t].enabled;
                s && !r && e[t].disable(), !s && r && e[t].enable();
              });
            const u = o.direction && o.direction !== i.direction,
              p = i.loop && (o.slidesPerView !== i.slidesPerView || u),
              f = i.loop;
            u && s && e.changeDirection(), E(e.params, o);
            const m = e.params.enabled,
              h = e.params.loop;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              c && !m ? e.disable() : !c && m && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", o),
              s &&
                (p
                  ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                  : !f && h
                    ? (e.loopCreate(t), e.updateSlides())
                    : f && !h && e.loopDestroy()),
              e.emit("breakpoint", o);
          },
          getBreakpoint: function (e, t, s) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !s))
            )
              return;
            let i = !1;
            const r = g(),
              n = "window" === t ? r.innerHeight : s.clientHeight,
              a = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: n * t, point: e };
                }
                return { value: e, point: e };
              });
            a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < a.length; e += 1) {
              const { point: n, value: o } = a[e];
              "window" === t
                ? r.matchMedia(`(min-width: ${o}px)`).matches && (i = n)
                : o <= s.clientWidth && (i = n);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: s, rtl: i, el: r, device: n } = e,
              a = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && s.push(t + i);
                        })
                      : "string" == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  "initialized",
                  s.direction,
                  { "free-mode": e.params.freeMode && s.freeMode.enabled },
                  { autoheight: s.autoHeight },
                  { rtl: i },
                  { grid: s.grid && s.grid.rows > 1 },
                  {
                    "grid-column":
                      s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                  },
                  { android: n.android },
                  { ios: n.ios },
                  { "css-mode": s.cssMode },
                  { centered: s.cssMode && s.centeredSlides },
                  { "watch-progress": s.watchSlidesProgress },
                ],
                s.containerModifierClass,
              );
            t.push(...a), r.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      le = {};
    class de {
      constructor() {
        let e, t;
        for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
          i[r] = arguments[r];
        1 === i.length &&
        i[0].constructor &&
        "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
          ? (t = i[0])
          : ([e, t] = i),
          t || (t = {}),
          (t = E({}, t)),
          e && !t.el && (t.el = e);
        const n = h();
        if (
          t.el &&
          "string" == typeof t.el &&
          n.querySelectorAll(t.el).length > 1
        ) {
          const e = [];
          return (
            n.querySelectorAll(t.el).forEach((s) => {
              const i = E({}, t, { el: s });
              e.push(new de(i));
            }),
            e
          );
        }
        const a = this;
        (a.__swiper__ = !0),
          (a.support = G()),
          (a.device = N({ userAgent: t.userAgent })),
          (a.browser = V()),
          (a.eventsListeners = {}),
          (a.eventsAnyListeners = []),
          (a.modules = [...a.__modules__]),
          t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
        const o = {};
        a.modules.forEach((e) => {
          e({
            params: t,
            swiper: a,
            extendParams: ae(t, o),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a),
          });
        });
        const l = E({}, ne, o);
        return (
          (a.params = E({}, l, le, t)),
          (a.originalParams = E({}, a.params)),
          (a.passedParams = E({}, t)),
          a.params &&
            a.params.on &&
            Object.keys(a.params.on).forEach((e) => {
              a.on(e, a.params.on[e]);
            }),
          a.params && a.params.onAny && a.onAny(a.params.onAny),
          Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === a.params.direction,
            isVertical: () => "vertical" === a.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: a.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null,
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          a.emit("_swiper"),
          a.params.init && a.init(),
          a
        );
      }
      getDirectionLabel(e) {
        return this.isHorizontal()
          ? e
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[e];
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: s } = this,
          i = k(L(t, `.${s.slideClass}, swiper-slide`)[0]);
        return k(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
          )[0],
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = L(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          r = (s.maxTranslate() - i) * e + i;
        s.translateTo(r, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass),
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass),
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: i,
          slidesGrid: r,
          slidesSizesGrid: n,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if ("number" == typeof s.slidesPerView) return s.slidesPerView;
        if (s.centeredSlides) {
          let e,
            t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
          for (let s = o + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += Math.ceil(i[s].swiperSlideSize)),
              (l += 1),
              t > a && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < i.length; e += 1) {
            (t ? r[e] + n[e] - r[o] < a : r[e] - r[o] < a) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            r[o] - r[e] < a && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        if (
          (s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && B(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          s.freeMode && s.freeMode.enabled && !s.cssMode)
        )
          i(), s.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
            e.isEnd &&
            !s.centeredSlides
          ) {
            const t =
              e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
            r = e.slideTo(t.length - 1, 0, !1, !0);
          } else r = e.slideTo(e.activeIndex, 0, !1, !0);
          r || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s))
          return !1;
        (s.swiper = t),
          s.parentNode &&
            s.parentNode.host &&
            s.parentNode.host.nodeName ===
              t.params.swiperElementNodeName.toUpperCase() &&
            (t.isElement = !0);
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return L(s, i())[0];
        })();
        return (
          !r &&
            t.params.createElements &&
            ((r = M("div", t.params.wrapperClass)),
            s.append(r),
            L(s, `.${t.params.slideClass}`).forEach((e) => {
              r.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: r,
            slidesEl:
              t.isElement && !s.parentNode.host.slideSlots
                ? s.parentNode.host
                : r,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === P(s, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === P(s, "direction")),
            wrongRTL: "-webkit-box" === P(r, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents();
        const s = [...t.el.querySelectorAll('[loading="lazy"]')];
        return (
          t.isElement &&
            s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
          s.forEach((e) => {
            e.complete
              ? B(t, e)
              : e.addEventListener("load", (e) => {
                  B(t, e.target);
                });
          }),
          $(t),
          (t.initialized = !0),
          $(t),
          t.emit("init"),
          t.emit("afterInit"),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: i, el: r, wrapperEl: n, slides: a } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              r.removeAttribute("style"),
              n.removeAttribute("style"),
              a &&
                a.length &&
                a.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideFullyVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        E(le, e);
      }
      static get extendedDefaults() {
        return le;
      }
      static get defaults() {
        return ne;
      }
      static installModule(e) {
        de.prototype.__modules__ || (de.prototype.__modules__ = []);
        const t = de.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => de.installModule(e)), de)
          : (de.installModule(e), de);
      }
    }
    function ce(e) {
      let { swiper: t, extendParams: s, on: i, emit: r } = e;
      function n(e) {
        let s;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((s = t.el.querySelector(e)), s)
          ? s
          : (e &&
              ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                s.length > 1 &&
                1 === t.el.querySelectorAll(e).length &&
                (s = t.el.querySelector(e))),
            e && !s ? e : s);
      }
      function a(e, s) {
        const i = t.params.navigation;
        (e = I(e)).forEach((e) => {
          e &&
            (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = s),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
        });
      }
      function o() {
        const { nextEl: e, prevEl: s } = t.navigation;
        if (t.params.loop) return a(s, !1), void a(e, !1);
        a(s, t.isBeginning && !t.params.rewind),
          a(e, t.isEnd && !t.params.rewind);
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), r("navigationPrev"));
      }
      function d(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), r("navigationNext"));
      }
      function c() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = (function (e, t, s, i) {
            return (
              e.params.createElements &&
                Object.keys(i).forEach((r) => {
                  if (!s[r] && !0 === s.auto) {
                    let n = L(e.el, `.${i[r]}`)[0];
                    n ||
                      ((n = M("div", i[r])),
                      (n.className = i[r]),
                      e.el.append(n)),
                      (s[r] = n),
                      (t[r] = n);
                  }
                }),
              s
            );
          })(t, t.originalParams.navigation, t.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev",
          })),
          !e.nextEl && !e.prevEl)
        )
          return;
        let s = n(e.nextEl),
          i = n(e.prevEl);
        Object.assign(t.navigation, { nextEl: s, prevEl: i }),
          (s = I(s)),
          (i = I(i));
        const r = (s, i) => {
          s && s.addEventListener("click", "next" === i ? d : l),
            !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
        };
        s.forEach((e) => r(e, "next")), i.forEach((e) => r(e, "prev"));
      }
      function u() {
        let { nextEl: e, prevEl: s } = t.navigation;
        (e = I(e)), (s = I(s));
        const i = (e, s) => {
          e.removeEventListener("click", "next" === s ? d : l),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
      }
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null }),
        i("init", () => {
          !1 === t.params.navigation.enabled ? p() : (c(), o());
        }),
        i("toEdge fromEdge lock unlock", () => {
          o();
        }),
        i("destroy", () => {
          u();
        }),
        i("enable disable", () => {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = I(e)),
            (s = I(s)),
            t.enabled
              ? o()
              : [...e, ...s]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.add(t.params.navigation.lockClass),
                  );
        }),
        i("click", (e, s) => {
          let { nextEl: i, prevEl: n } = t.navigation;
          (i = I(i)), (n = I(n));
          const a = s.target;
          if (
            t.params.navigation.hideOnClick &&
            !n.includes(a) &&
            !i.includes(a)
          ) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === a || t.pagination.el.contains(a))
            )
              return;
            let e;
            i.length
              ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
              : n.length &&
                (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
              r(!0 === e ? "navigationShow" : "navigationHide"),
              [...i, ...n]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass),
                );
          }
        });
      const p = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" "),
        ),
          u();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" "),
          ),
            c(),
            o();
        },
        disable: p,
        update: o,
        init: c,
        destroy: u,
      });
    }
    function ue(e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let r = !1,
        n = !1;
      function a() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          i = e.clickedSlide;
        if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass))
          return;
        if (null == s) return;
        let r;
        (r = e.params.loop
          ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : s),
          t.params.loop ? t.slideToLoop(r) : t.slideTo(r);
      }
      function o() {
        const { thumbs: e } = t.params;
        if (r) return !1;
        r = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            t.thumbs.swiper.update();
        else if (S(e.swiper)) {
          const i = Object.assign({}, e.swiper);
          Object.assign(i, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new s(i)),
            (n = !0);
        }
        return (
          t.thumbs.swiper.el.classList.add(
            t.params.thumbs.thumbsContainerClass,
          ),
          t.thumbs.swiper.on("tap", a),
          !0
        );
      }
      function l(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const i =
          "auto" === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView;
        let r = 1;
        const n = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (r = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (r = 1),
          (r = Math.floor(r)),
          s.slides.forEach((e) => e.classList.remove(n)),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < r; e += 1)
            L(
              s.slidesEl,
              `[data-swiper-slide-index="${t.realIndex + e}"]`,
            ).forEach((e) => {
              e.classList.add(n);
            });
        else
          for (let e = 0; e < r; e += 1)
            s.slides[t.realIndex + e] &&
              s.slides[t.realIndex + e].classList.add(n);
        const a = t.params.thumbs.autoScrollOffset,
          o = a && !s.params.loop;
        if (t.realIndex !== s.realIndex || o) {
          const r = s.activeIndex;
          let n, l;
          if (s.params.loop) {
            const e = s.slides.filter(
              (e) =>
                e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`,
            )[0];
            (n = s.slides.indexOf(e)),
              (l = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (n = t.realIndex), (l = n > t.previousIndex ? "next" : "prev");
          o && (n += "next" === l ? a : -1 * a),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(n) < 0 &&
              (s.params.centeredSlides
                ? (n =
                    n > r
                      ? n - Math.floor(i / 2) + 1
                      : n + Math.floor(i / 2) - 1)
                : n > r && s.params.slidesPerGroup,
              s.slideTo(n, e ? 0 : void 0));
        }
      }
      (t.thumbs = { swiper: null }),
        i("beforeInit", () => {
          const { thumbs: e } = t.params;
          if (e && e.swiper)
            if (
              "string" == typeof e.swiper ||
              e.swiper instanceof HTMLElement
            ) {
              const s = h(),
                i = () => {
                  const i =
                    "string" == typeof e.swiper
                      ? s.querySelector(e.swiper)
                      : e.swiper;
                  if (i && i.swiper) (e.swiper = i.swiper), o(), l(!0);
                  else if (i) {
                    const s = (r) => {
                      (e.swiper = r.detail[0]),
                        i.removeEventListener("init", s),
                        o(),
                        l(!0),
                        e.swiper.update(),
                        t.update();
                    };
                    i.addEventListener("init", s);
                  }
                  return i;
                },
                r = () => {
                  if (t.destroyed) return;
                  i() || requestAnimationFrame(r);
                };
              requestAnimationFrame(r);
            } else o(), l(!0);
        }),
        i("slideChange update resize observerUpdate", () => {
          l();
        }),
        i("setTransition", (e, s) => {
          const i = t.thumbs.swiper;
          i && !i.destroyed && i.setTransition(s);
        }),
        i("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && n && e.destroy();
        }),
        Object.assign(t.thumbs, { init: o, update: l });
    }
    function pe(e, t) {
      const s = _(t);
      return (
        s !== t &&
          ((s.style.backfaceVisibility = "hidden"),
          (s.style["-webkit-backface-visibility"] = "hidden")),
        s
      );
    }
    function fe(e) {
      let { swiper: t, duration: s, transformElements: i, allSlides: r } = e;
      const { activeIndex: n } = t;
      if (t.params.virtualTranslate && 0 !== s) {
        let e,
          s = !1;
        (e = r
          ? i
          : i.filter((e) => {
              const s = e.classList.contains("swiper-slide-transform")
                ? ((e) => {
                    if (!e.parentElement)
                      return t.slides.filter(
                        (t) => t.shadowRoot && t.shadowRoot === e.parentNode,
                      )[0];
                    return e.parentElement;
                  })(e)
                : e;
              return t.getSlideIndex(s) === n;
            })),
          e.forEach((e) => {
            !(function (e, t) {
              t &&
                e.addEventListener("transitionend", function s(i) {
                  i.target === e &&
                    (t.call(e, i), e.removeEventListener("transitionend", s));
                });
            })(e, () => {
              if (s) return;
              if (!t || t.destroyed) return;
              (s = !0), (t.animating = !1);
              const e = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
              });
              t.wrapperEl.dispatchEvent(e);
            });
          });
      }
    }
    function me(e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({ fadeEffect: { crossFade: !1 } });
      !(function (e) {
        const {
          effect: t,
          swiper: s,
          on: i,
          setTranslate: r,
          setTransition: n,
          overwriteParams: a,
          perspective: o,
          recreateShadows: l,
          getEffectParams: d,
        } = e;
        let c;
        i("beforeInit", () => {
          if (s.params.effect !== t) return;
          s.classNames.push(`${s.params.containerModifierClass}${t}`),
            o &&
              o() &&
              s.classNames.push(`${s.params.containerModifierClass}3d`);
          const e = a ? a() : {};
          Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }),
          i("setTranslate", () => {
            s.params.effect === t && r();
          }),
          i("setTransition", (e, i) => {
            s.params.effect === t && n(i);
          }),
          i("transitionEnd", () => {
            if (s.params.effect === t && l) {
              if (!d || !d().slideShadows) return;
              s.slides.forEach((e) => {
                e.querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                ).forEach((e) => e.remove());
              }),
                l();
            }
          }),
          i("virtualUpdate", () => {
            s.params.effect === t &&
              (s.slides.length || (c = !0),
              requestAnimationFrame(() => {
                c && s.slides && s.slides.length && (r(), (c = !1));
              }));
          });
      })({
        effect: "fade",
        swiper: t,
        on: i,
        setTranslate: () => {
          const { slides: e } = t;
          t.params.fadeEffect;
          for (let s = 0; s < e.length; s += 1) {
            const e = t.slides[s];
            let i = -e.swiperSlideOffset;
            t.params.virtualTranslate || (i -= t.translate);
            let r = 0;
            t.isHorizontal() || ((r = i), (i = 0));
            const n = t.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(e.progress), 0)
                : 1 + Math.min(Math.max(e.progress, -1), 0),
              a = pe(0, e);
            (a.style.opacity = n),
              (a.style.transform = `translate3d(${i}px, ${r}px, 0px)`);
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => _(e));
          s.forEach((t) => {
            t.style.transitionDuration = `${e}ms`;
          }),
            fe({ swiper: t, duration: e, transformElements: s, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    }
    function he() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)',
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    Object.keys(oe).forEach((e) => {
      Object.keys(oe[e]).forEach((t) => {
        de.prototype[t] = oe[e][t];
      });
    }),
      de.use([
        function (e) {
          let { swiper: t, on: s, emit: i } = e;
          const r = g();
          let n = null,
            a = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          s("init", () => {
            t.params.resizeObserver && void 0 !== r.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((n = new ResizeObserver((e) => {
                  a = r.requestAnimationFrame(() => {
                    const { width: s, height: i } = t;
                    let r = s,
                      n = i;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: i, target: a } = e;
                      (a && a !== t.el) ||
                        ((r = i ? i.width : (s[0] || s).inlineSize),
                        (n = i ? i.height : (s[0] || s).blockSize));
                    }),
                      (r === s && n === i) || o();
                  });
                })),
                n.observe(t.el))
              : (r.addEventListener("resize", o),
                r.addEventListener("orientationchange", l));
          }),
            s("destroy", () => {
              a && r.cancelAnimationFrame(a),
                n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
                r.removeEventListener("resize", o),
                r.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: i, emit: r } = e;
          const n = [],
            a = g(),
            o = function (e, s) {
              void 0 === s && (s = {});
              const i = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void r("observerUpdate", e[0]);
                  const s = function () {
                    r("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(s)
                    : a.setTimeout(s, 0);
                },
              );
              i.observe(e, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData,
              }),
                n.push(i);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = (function (e, t) {
                    const s = [];
                    let i = e.parentElement;
                    for (; i; )
                      t ? i.matches(t) && s.push(i) : s.push(i),
                        (i = i.parentElement);
                    return s;
                  })(t.hostEl);
                  for (let t = 0; t < e.length; t += 1) o(e[t]);
                }
                o(t.hostEl, { childList: t.params.observeSlideChildren }),
                  o(t.wrapperEl, { attributes: !1 });
              }
            }),
            i("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]);
    window.addEventListener("load", function (e) {
      !(function () {
        if ((he(), document.querySelector(".product__carousels"))) {
          const e = new de(".thumbs-carousel__slider", {
            modules: [ce, ue],
            direction: "vertical",
            slidesPerView: 5,
            spaceBetween: 10,
            speed: 800,
            navigation: {
              prevEl: ".thumbs-carousel__navigation .thumbs-carousel__btn_prev",
              nextEl: ".thumbs-carousel__navigation .thumbs-carousel__btn_next",
            },
            on: {},
          });
          new de(".main-carousel__slider", {
            modules: [ce, me, ue],
            effect: "fade",
            slidesPerView: 1,
            speed: 800,
            navigation: {
              prevEl: ".promo__slider-nav .slider-nav-n__btn_prev",
              nextEl: ".promo__slider-nav .slider-nav-n__btn_next",
            },
            thumbs: { swiper: e },
            on: {},
          });
        }
        document.querySelector(".carousel__body") &&
          new de(".carousel__slider", {
            modules: [ce],
            slidesPerView: 6,
            spaceBetween: 20,
            speed: 800,
            navigation: {
              prevEl: ".carousel__nav .carousel__btn_prev",
              nextEl: ".carousel__nav .carousel__btn_next",
            },
            breakpoints: {
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
              1366: { slidesPerView: 6 },
            },
            on: {},
          });
      })();
    });
    new (s(144))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    let ve;
    function ge(e) {
      document.querySelectorAll(".pop-message").forEach((e) => {
        e.classList.remove("pop-message-active");
      }),
        clearTimeout(ve);
      const t = document.querySelector(`.${e}`);
      t &&
        (t.classList.add("pop-message-active"),
        (ve = setTimeout(() => {
          t.classList.remove("pop-message-active");
        }, 1e3)));
    }
    document.addEventListener("DOMContentLoaded", function () {
      const e = document.querySelector(".search__input"),
        t = document.querySelector(".search__block");
      e.addEventListener("input", function () {
        e.value.length >= 2
          ? (t.classList.add("search__block--active"),
            (t.style.display = "block"))
          : (t.classList.remove("search__block--active"),
            (t.style.display = "none"));
      });
    }),
      document.addEventListener("click", function (e) {
        const t = e.target;
        if (t.closest(".basket-card")) {
          t.closest(".basket-card").classList.toggle("basket-card--active");
        }
      }),
      document.addEventListener("change", function (e) {
        if (e.target.classList.contains("size__input")) {
          e.target.checked ? ge("pop-message--add") : ge("pop-message--remove");
        }
      }),
      document.querySelectorAll(".favorite-btn").forEach((e) => {
        e.addEventListener("click", function () {
          e.classList.toggle("favorite-btn--active");
        });
      }),
      (window.FLS = !0),
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.documentElement.classList.add("loaded");
        }, 0);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            r &&
              (document.documentElement.classList.contains("menu-open")
                ? (document.documentElement.classList.remove("menu-open"),
                  n(),
                  o())
                : (document.documentElement.classList.add("menu-open"), a()));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const s = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          s.length && n(s);
          let r = d(e, "spollers");
          function n(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    a(e),
                    e.addEventListener("click", o))
                  : (e.classList.remove("_spoller-init"),
                    a(e, !1),
                    e.removeEventListener("click", o));
            });
          }
          function a(e, t = !0) {
            let s = e.querySelectorAll("[data-spoller]");
            s.length &&
              ((s = Array.from(s).filter(
                (t) => t.closest("[data-spollers]") === e,
              )),
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              }));
          }
          function o(e) {
            const s = e.target;
            if (s.closest("[data-spoller]")) {
              const r = s.closest("[data-spoller]"),
                n = r.closest("[data-spollers]"),
                a = !!n.hasAttribute("data-one-spoller");
              n.querySelectorAll("._slide").length ||
                (a && !r.classList.contains("_spoller-active") && l(n),
                r.classList.toggle("_spoller-active"),
                ((e, s = 500) => {
                  e.hidden ? i(e, s) : t(e, s);
                })(r.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function l(e) {
            const s = e.querySelector("[data-spoller]._spoller-active");
            s &&
              (s.classList.remove("_spoller-active"),
              t(s.nextElementSibling, 500));
          }
          r &&
            r.length &&
            r.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                n(e.itemsArray, e.matchMedia);
              }),
                n(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      window.addEventListener("load", function (e) {
        const s = document.querySelectorAll("[data-showmore]");
        let r, n;
        function a(e) {
          e.forEach((e) => {
            o(e.itemsArray, e.matchMedia);
          });
        }
        function o(e, s) {
          e.forEach((e) => {
            !(function (e, s = !1) {
              let r = (e = s ? e.item : e).querySelectorAll(
                  "[data-showmore-content]",
                ),
                n = e.querySelectorAll("[data-showmore-button]");
              (r = Array.from(r).filter(
                (t) => t.closest("[data-showmore]") === e,
              )[0]),
                (n = Array.from(n).filter(
                  (t) => t.closest("[data-showmore]") === e,
                )[0]);
              const a = l(e, r);
              (s.matches || !s) &&
              a <
                (function (e) {
                  let t = e.offsetHeight;
                  e.style.removeProperty("height");
                  let s = e.offsetHeight;
                  return (e.style.height = `${t}px`), s;
                })(r)
                ? (t(r, 0, a), (n.hidden = !1))
                : (i(r, 0, a), (n.hidden = !0));
            })(e, s);
          });
        }
        function l(e, t) {
          let s = 0;
          if ("items" === (e.dataset.showmore ? e.dataset.showmore : "size")) {
            const e = t.dataset.showmoreContent ? t.dataset.showmoreContent : 3,
              i = t.children;
            for (
              let t = 1;
              t < i.length && ((s += i[t - 1].offsetHeight), t != e);
              t++
            );
          } else
            s = t.dataset.showmoreContent ? t.dataset.showmoreContent : 150;
          return s;
        }
        function c(e) {
          const s = e.target,
            d = e.type;
          if ("click" === d) {
            if (s.closest("[data-showmore-button]")) {
              const e = s
                  .closest("[data-showmore-button]")
                  .closest("[data-showmore]"),
                r = e.querySelector("[data-showmore-content]"),
                n = e.dataset.showmoreButton ? e.dataset.showmoreButton : "500",
                a = l(e, r);
              r.classList.contains("_slide") ||
                (e.classList.contains("_showmore-active")
                  ? t(r, n, a)
                  : i(r, n, a),
                e.classList.toggle("_showmore-active"));
            }
          } else
            "resize" === d && (r && r.length && o(r), n && n.length && a(n));
        }
        s.length &&
          ((r = Array.from(s).filter(function (e, t, s) {
            return !e.dataset.showmoreMedia;
          })),
          r.length && o(r),
          document.addEventListener("click", c),
          window.addEventListener("resize", c),
          (n = d(s, "showmoreMedia")),
          n &&
            n.length &&
            (n.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                o(e.itemsArray, e.matchMedia);
              });
            }),
            a(n)));
      }),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]",
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              u.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && u.validateInput(t));
          });
      })(),
      (function (t) {
        e.popup && e.popup.open("some");
        const s = document.forms;
        if (s.length)
          for (const e of s)
            e.addEventListener("submit", function (e) {
              i(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                u.formClean(t);
              });
        async function i(e, s) {
          if (0 === (t ? u.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              s.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                i = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                n = new FormData(e);
              e.classList.add("_sending");
              const a = await fetch(t, { method: i, body: n });
              if (a.ok) {
                await a.json();
                e.classList.remove("_sending"), r(e);
              } else alert("Ошибка"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (s.preventDefault(), r(e));
          } else {
            s.preventDefault();
            const t = e.querySelector("._form-error");
            t && e.hasAttribute("data-goto-error") && c(t, !0, 1e3);
          }
        }
        function r(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } }),
          ),
            setTimeout(() => {
              if (e.popup) {
                const s = t.dataset.popupMessage;
                s && e.popup.open(s);
              }
            }, 0),
            u.formClean(t),
            l(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      document.addEventListener("click", function (e) {
        let t = e.target;
        if (t.closest(".quantity__button")) {
          let e = t.closest(".quantity"),
            s = e.querySelector("input"),
            i = e.querySelector(".quantity__button_minus"),
            r = e.querySelector(".quantity__button_plus"),
            n = parseInt(e.getAttribute("data-quantity-max")),
            a = parseInt(s.value);
          t.classList.contains("quantity__button_plus")
            ? a++
            : (a--, a < 1 && (a = 1)),
            (s.value = a),
            1 === a
              ? i.setAttribute("disabled", !0)
              : i.removeAttribute("disabled"),
            !isNaN(n) && a >= n
              ? r.setAttribute("disabled", !0)
              : r.removeAttribute("disabled");
        }
      });
  })();
})();
