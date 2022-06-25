"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [4666],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => p, kt: () => d });
      var r = n(2784);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var s = r.createContext({}),
        c = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        p = function (e) {
          var t = c(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        f = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            p = l(e, ["components", "mdxType", "originalType", "parentName"]),
            f = c(n),
            d = o,
            m = f["".concat(s, ".").concat(d)] || f[d] || u[d] || i;
          return n
            ? r.createElement(m, a(a({ ref: t }, p), {}, { components: n }))
            : r.createElement(m, a({ ref: t }, p));
        });
      function d(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var i = n.length,
            a = new Array(i);
          a[0] = f;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l.mdxType = "string" == typeof e ? e : o),
            (a[1] = l);
          for (var c = 2; c < i; c++) a[c] = n[c];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, n);
      }
      f.displayName = "MDXCreateElement";
    },
    7956: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => s,
          default: () => d,
          frontMatter: () => l,
          metadata: () => c,
          toc: () => u,
        });
      var r = n(7896),
        o = n(1461),
        i = (n(2784), n(876)),
        a = ["components"],
        l = { sidebar_position: 1 },
        s = "Plugins Introduction",
        c = {
          unversionedId: "plugins/intro",
          id: "plugins/intro",
          title: "Plugins Introduction",
          description: "Plugins list",
          source: "@site/docs/plugins/intro.md",
          sourceDirName: "plugins",
          slug: "/plugins/intro",
          permalink: "/eslint-extensions/docs/plugins/intro",
          draft: !1,
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "pluginsGeneralSidebar",
        },
        p = {},
        u = [],
        f = { toc: u };
      function d(e) {
        var t = e.components,
          n = (0, o.Z)(e, a);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, f, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)(
            "h1",
            { id: "plugins-introduction" },
            "Plugins Introduction"
          ),
          (0, i.kt)("p", null, "Plugins list"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/eslint-extensions/docs/plugins/migrate-to-typescript/intro",
                },
                "eslint-plugin-migrate-to-typescript"
              )
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
