function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* global document, Office, Word */

var API_BASE = window.location.hostname === "localhost" ? "http://localhost:8787" : "https://nh63xr91-8787.uks1.devtunnels.ms";
var AI_AUTHOR = "Fuse Legal AI";
var SEARCH_LIMIT = 200;
var sessionId = crypto.randomUUID();
var inWord = false;
var busy = false;
var SESSION_KEY_PREFIX = "fuse-legal-session:";
function adoptDocumentSession() {
  var _Office$context$docum;
  var url = (_Office$context$docum = Office.context.document) === null || _Office$context$docum === void 0 ? void 0 : _Office$context$docum.url;
  if (!url) {
    return;
  }
  var key = "".concat(SESSION_KEY_PREFIX).concat(url);
  var stored = localStorage.getItem(key);
  if (stored) {
    sessionId = stored;
  } else {
    localStorage.setItem(key, sessionId);
  }
}
var USER_STORAGE_KEY = "fuse-legal-user";
var currentUser = null;
function adoptUser(user) {
  var _user$name;
  currentUser = user;
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  setStatus("Ready \u2014 signed in as ".concat((_user$name = user.name) !== null && _user$name !== void 0 ? _user$name : user.email, "."));
}
function resolveUser() {
  return _resolveUser.apply(this, arguments);
}
function _resolveUser() {
  _resolveUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var stored, storedUser, _claims$name, _ref5, _claims$preferred_use, token, claims, probed, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          stored = localStorage.getItem(USER_STORAGE_KEY);
          storedUser = stored ? JSON.parse(stored) : null;
          if (!(storedUser && storedUser.source !== "manual")) {
            _context.n = 1;
            break;
          }
          adoptUser(storedUser);
          return _context.a(2);
        case 1:
          _context.p = 1;
          _context.n = 2;
          return Office.auth.getAccessToken({
            allowSignInPrompt: false
          });
        case 2:
          token = _context.v;
          claims = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
          adoptUser({
            name: (_claims$name = claims.name) !== null && _claims$name !== void 0 ? _claims$name : null,
            email: (_ref5 = (_claims$preferred_use = claims.preferred_username) !== null && _claims$preferred_use !== void 0 ? _claims$preferred_use : claims.upn) !== null && _ref5 !== void 0 ? _ref5 : null,
            source: "sso"
          });
          return _context.a(2);
        case 3:
          _context.p = 3;
          _t = _context.v;
          _context.n = 4;
          return probeSignedInUser();
        case 4:
          probed = _context.v;
          if (!probed) {
            _context.n = 5;
            break;
          }
          adoptUser(probed);
          return _context.a(2);
        case 5:
          if (!storedUser) {
            _context.n = 6;
            break;
          }
          adoptUser(storedUser);
          return _context.a(2);
        case 6:
          showUserForm();
        case 7:
          return _context.a(2);
      }
    }, _callee, null, [[1, 3]]);
  }));
  return _resolveUser.apply(this, arguments);
}
function probeSignedInUser() {
  return _probeSignedInUser.apply(this, arguments);
}
function _probeSignedInUser() {
  _probeSignedInUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var _t2;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          if (inWord) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2, null);
        case 1:
          _context3.p = 1;
          _context3.n = 2;
          return Word.run(/*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(context) {
              var comment, user;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    comment = context.document.body.getRange("End").insertComment("Fuse Legal AI sign-in check — removed automatically");
                    comment.load("authorName,authorEmail");
                    _context2.n = 1;
                    return context.sync();
                  case 1:
                    user = {
                      name: comment.authorName || null,
                      email: comment.authorEmail || null,
                      source: "probe"
                    };
                    comment.delete();
                    _context2.n = 2;
                    return context.sync();
                  case 2:
                    return _context2.a(2, user.name !== null || user.email !== null ? user : null);
                }
              }, _callee2);
            }));
            return function (_x23) {
              return _ref6.apply(this, arguments);
            };
          }());
        case 2:
          return _context3.a(2, _context3.v);
        case 3:
          _context3.p = 3;
          _t2 = _context3.v;
          return _context3.a(2, null);
      }
    }, _callee3, null, [[1, 3]]);
  }));
  return _probeSignedInUser.apply(this, arguments);
}
function showUserForm() {
  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = "<p class=\"card-title\">Who's using the pane?</p>\n    <p class=\"card-note\">Stored once in this browser so your feedback is attributed correctly.</p>";
  var input = document.createElement("textarea");
  input.className = "reason-input";
  input.placeholder = "Your name and Fuse email, e.g. Viola — viola@fuseenergy.com";
  input.rows = 1;
  var actions = document.createElement("div");
  actions.className = "card-actions";
  var save = button("Save", function () {
    var _value$match$, _value$match, _currentUser$name;
    var value = input.value.trim();
    if (!value) {
      input.focus();
      return;
    }
    var email = (_value$match$ = (_value$match = value.match(/\S+@\S+/)) === null || _value$match === void 0 ? void 0 : _value$match[0]) !== null && _value$match$ !== void 0 ? _value$match$ : null;
    currentUser = {
      name: value.replace(email !== null && email !== void 0 ? email : "", "").replace(/[—–-]\s*$/, "").trim() || null,
      email: email,
      source: "manual"
    };
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(currentUser));
    card.remove();
    setStatus("Ready \u2014 signed in as ".concat((_currentUser$name = currentUser.name) !== null && _currentUser$name !== void 0 ? _currentUser$name : currentUser.email, "."));
  });
  actions.appendChild(save);
  card.append(input, actions);
  document.getElementById("chat-log").prepend(card);
}
Office.onReady(function (info) {
  inWord = info.host === Office.HostType.Word;
  if (!inWord) {
    document.getElementById("browser-doc").style.display = "block";
  }
  if (inWord) {
    adoptDocumentSession();
  }
  document.getElementById("chat-send").onclick = function () {
    return sendChat();
  };
  document.getElementById("chip-review").onclick = function () {
    return sendChat("Review this document against the Fuse NDA style guide.", "review");
  };
  document.getElementById("chip-summarize").onclick = function () {
    return sendChat("Summarize the key terms of this contract.");
  };
  document.getElementById("chip-history").onclick = function () {
    return void showHistory();
  };
  document.getElementById("chat-input").onkeydown = function (event) {
    if (event.key === "Enter") sendChat();
  };
  appendBubble("assistant", "Hi, I'm Fuse's legal agent. Ask me anything about this contract, or start with a review.");
  void resolveUser().then(function () {
    return restoreCurrentSession();
  });
});
function setStatus(text) {
  document.getElementById("status").textContent = text;
}
function getDocumentText() {
  return _getDocumentText.apply(this, arguments);
}
function _getDocumentText() {
  _getDocumentText = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          if (inWord) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2, document.getElementById("doc-input").value);
        case 1:
          return _context5.a(2, Word.run(/*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(context) {
              var body;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    body = context.document.body;
                    body.load("text");
                    _context4.n = 1;
                    return context.sync();
                  case 1:
                    return _context4.a(2, body.text);
                }
              }, _callee4);
            }));
            return function (_x24) {
              return _ref7.apply(this, arguments);
            };
          }()));
      }
    }, _callee5);
  }));
  return _getDocumentText.apply(this, arguments);
}
function post(_x, _x2) {
  return _post.apply(this, arguments);
}
function _post() {
  _post = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(path, payload) {
    var response, detail;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _context6.n = 1;
          return fetch("".concat(API_BASE).concat(path), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Tunnel-Skip-AntiPhishing-Page": "true"
            },
            body: JSON.stringify(_objectSpread(_objectSpread({}, payload), {}, {
              user: currentUser
            }))
          });
        case 1:
          response = _context6.v;
          if (response.ok) {
            _context6.n = 3;
            break;
          }
          _context6.n = 2;
          return response.text();
        case 2:
          detail = _context6.v;
          throw new Error("".concat(path, " failed (").concat(response.status, "): ").concat(detail));
        case 3:
          return _context6.a(2, response.json());
      }
    }, _callee6);
  }));
  return _post.apply(this, arguments);
}
function get(_x3) {
  return _get.apply(this, arguments);
}
function _get() {
  _get = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(path) {
    var response;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          _context7.n = 1;
          return fetch("".concat(API_BASE).concat(path), {
            headers: {
              "X-Tunnel-Skip-AntiPhishing-Page": "true"
            }
          });
        case 1:
          response = _context7.v;
          if (!(response.status === 404)) {
            _context7.n = 2;
            break;
          }
          return _context7.a(2, null);
        case 2:
          if (response.ok) {
            _context7.n = 3;
            break;
          }
          throw new Error("".concat(path, " failed (").concat(response.status, ")"));
        case 3:
          return _context7.a(2, response.json());
      }
    }, _callee7);
  }));
  return _get.apply(this, arguments);
}
function labelNote(action) {
  return action === "accepted" || action === "accepted_with_edits" ? "Accepted earlier — the tracked change stays in the document" : "Dismissed earlier";
}
function renderSessionState(state, interactive) {
  var lastLabelByCriterion = new Map();
  var _iterator = _createForOfIteratorHelper(state.labels),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var label = _step.value;
      if (label.criterion) {
        lastLabelByCriterion.set(label.criterion, label);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(state.transcript),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _entry$message;
      var entry = _step2.value;
      appendBubble("user", (_entry$message = entry.message) !== null && _entry$message !== void 0 ? _entry$message : "Review this document against the Fuse NDA style guide.");
      if (entry.reply) {
        appendBubble("assistant", entry.reply);
      }
      if (entry.extractions.length > 0) {
        appendCard(renderContractProfile(entry.extractions, interactive));
      }
      var _iterator3 = _createForOfIteratorHelper(entry.findings),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var finding = _step3.value;
          var card = renderFinding(finding, interactive);
          appendCard(card);
          var _label = lastLabelByCriterion.get(findingLabel(finding));
          if (_label) {
            markSectionDone(card, labelNote(_label.action));
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function restoreCurrentSession() {
  return _restoreCurrentSession.apply(this, arguments);
}
function _restoreCurrentSession() {
  _restoreCurrentSession = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
    var state, _t3;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          _context8.n = 1;
          return get("/sessions/".concat(sessionId, "/state"));
        case 1:
          state = _context8.v;
          if (!(!state || state.transcript.length === 0)) {
            _context8.n = 2;
            break;
          }
          return _context8.a(2);
        case 2:
          appendBubble("assistant", "Here's where we left off on this document:");
          renderSessionState(state, true);
          setStatus("Previous session restored.");
          _context8.n = 4;
          break;
        case 3:
          _context8.p = 3;
          _t3 = _context8.v;
        case 4:
          return _context8.a(2);
      }
    }, _callee8, null, [[0, 3]]);
  }));
  return _restoreCurrentSession.apply(this, arguments);
}
function showHistory() {
  return _showHistory.apply(this, arguments);
}
function _showHistory() {
  _showHistory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
    var _currentUser;
    var sessions, card, _iterator6, _step6, _loop2, _t4, _t5;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          if ((_currentUser = currentUser) !== null && _currentUser !== void 0 && _currentUser.email) {
            _context0.n = 1;
            break;
          }
          setStatus("Sign in first so I know whose history to show.");
          return _context0.a(2);
        case 1:
          sessions = null;
          _context0.p = 2;
          _context0.n = 3;
          return get("/sessions?email=".concat(encodeURIComponent(currentUser.email)));
        case 3:
          sessions = _context0.v;
          _context0.n = 5;
          break;
        case 4:
          _context0.p = 4;
          _t4 = _context0.v;
          setStatus("Couldn't load your history; is the server reachable?");
          return _context0.a(2);
        case 5:
          card = document.createElement("div");
          card.className = "card";
          card.innerHTML = "<p class=\"card-title\">Your sessions</p>";
          if (!sessions || sessions.length === 0) {
            card.innerHTML += "<p class=\"card-note\">No previous sessions found for ".concat(currentUser.email, ".</p>");
          }
          _iterator6 = _createForOfIteratorHelper(sessions !== null && sessions !== void 0 ? sessions : []);
          _context0.p = 6;
          _loop2 = /*#__PURE__*/_regenerator().m(function _loop2() {
            var session, row, snippet, actions;
            return _regenerator().w(function (_context9) {
              while (1) switch (_context9.n) {
                case 0:
                  session = _step6.value;
                  row = document.createElement("div");
                  row.className = "card-section";
                  snippet = session.document_snippet ? "\u201C".concat(session.document_snippet.slice(0, 70), "\u2026\u201D") : "(no document captured)";
                  row.innerHTML = "<p class=\"card-body\"><b>".concat(session.last_ts.slice(0, 16).replace("T", " "), "</b> \u2014 ").concat(session.turns, " turn(s), ").concat(session.labels, " decision(s)</p><p class=\"card-note\">").concat(snippet, "</p>");
                  actions = actionRow(row);
                  actions.appendChild(button("View", function () {
                    return void viewPastSession(session);
                  }));
                  card.appendChild(row);
                case 1:
                  return _context9.a(2);
              }
            }, _loop2);
          });
          _iterator6.s();
        case 7:
          if ((_step6 = _iterator6.n()).done) {
            _context0.n = 9;
            break;
          }
          return _context0.d(_regeneratorValues(_loop2()), 8);
        case 8:
          _context0.n = 7;
          break;
        case 9:
          _context0.n = 11;
          break;
        case 10:
          _context0.p = 10;
          _t5 = _context0.v;
          _iterator6.e(_t5);
        case 11:
          _context0.p = 11;
          _iterator6.f();
          return _context0.f(11);
        case 12:
          appendCard(card);
        case 13:
          return _context0.a(2);
      }
    }, _callee9, null, [[6, 10, 11, 12], [2, 4]]);
  }));
  return _showHistory.apply(this, arguments);
}
function viewPastSession(_x4) {
  return _viewPastSession.apply(this, arguments);
}
function _viewPastSession() {
  _viewPastSession = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(session) {
    var state, isCurrent, log, banner, actions;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          _context1.n = 1;
          return get("/sessions/".concat(session.session_id, "/state"));
        case 1:
          state = _context1.v;
          if (state) {
            _context1.n = 2;
            break;
          }
          setStatus("That session's history could not be loaded.");
          return _context1.a(2);
        case 2:
          isCurrent = session.session_id === sessionId;
          log = document.getElementById("chat-log");
          log.innerHTML = "";
          banner = document.createElement("div");
          banner.className = "card";
          banner.innerHTML = "<p class=\"card-title\">Past session \u2014 ".concat(session.last_ts.slice(0, 16).replace("T", " "), "</p>\n    <p class=\"card-note\">").concat(isCurrent ? "This is the session for the open document." : "Read-only: this session belongs to a different document, so nothing here edits the open one.", "</p>");
          actions = actionRow(banner);
          actions.appendChild(button("Back to current session", function () {
            return void backToCurrentSession();
          }));
          log.appendChild(banner);
          renderSessionState(state, isCurrent);
        case 3:
          return _context1.a(2);
      }
    }, _callee0);
  }));
  return _viewPastSession.apply(this, arguments);
}
function backToCurrentSession() {
  return _backToCurrentSession.apply(this, arguments);
}
function _backToCurrentSession() {
  _backToCurrentSession = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
    var log;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          log = document.getElementById("chat-log");
          log.innerHTML = "";
          appendBubble("assistant", "Hi, I'm Fuse's legal agent. Ask me anything about this contract, or start with a review.");
          _context10.n = 1;
          return restoreCurrentSession();
        case 1:
          return _context10.a(2);
      }
    }, _callee1);
  }));
  return _backToCurrentSession.apply(this, arguments);
}
function sendChat(_x5) {
  return _sendChat.apply(this, arguments);
}
function _sendChat() {
  _sendChat = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(canned) {
    var action,
      input,
      message,
      typing,
      _live$bubble,
      documentText,
      started,
      live,
      result,
      findings,
      cards,
      outcomes,
      _message,
      _args11 = arguments,
      _t6;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          action = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : "chat";
          if (!busy) {
            _context11.n = 1;
            break;
          }
          return _context11.a(2);
        case 1:
          input = document.getElementById("chat-input");
          message = canned !== null && canned !== void 0 ? canned : input.value.trim();
          if (message) {
            _context11.n = 2;
            break;
          }
          return _context11.a(2);
        case 2:
          if (!canned) {
            input.value = "";
          }
          appendBubble("user", message);
          busy = true;
          setStatus(action === "review" ? "Running the NDA review pipeline (about two minutes)…" : "The agent is working…");
          typing = showTyping();
          _context11.p = 3;
          _context11.n = 4;
          return getDocumentText();
        case 4:
          documentText = _context11.v;
          _context11.n = 5;
          return post("/chat", {
            session_id: sessionId,
            message: message,
            document_text: documentText || null,
            action: action
          });
        case 5:
          started = _context11.v;
          live = {
            bubble: null
          };
          _context11.n = 6;
          return pollReview(started.job_id, action, function (partial) {
            typing.remove();
            if (live.bubble === null) {
              live.bubble = appendBubble("assistant", "");
            }
            live.bubble.textContent = partial;
          });
        case 6:
          result = _context11.v;
          (_live$bubble = live.bubble) === null || _live$bubble === void 0 || _live$bubble.remove();
          if (result.reply) {
            appendBubble("assistant", result.reply);
          }
          if (result.extractions.length > 0) {
            appendCard(renderContractProfile(result.extractions));
          }
          findings = orderByDocument(result.findings, documentText);
          cards = findings.map(function (finding) {
            var card = renderFinding(finding);
            appendCard(card);
            return card;
          });
          if (!(inWord && findings.length > 0)) {
            _context11.n = 8;
            break;
          }
          setStatus("Adding suggested edits to the document…");
          _context11.n = 7;
          return applyAllFindings(findings);
        case 7:
          outcomes = _context11.v;
          outcomes.forEach(function (outcome, index) {
            return markApplied(cards[index], outcome);
          });
        case 8:
          setStatus("Ready.");
          _context11.n = 10;
          break;
        case 9:
          _context11.p = 9;
          _t6 = _context11.v;
          _message = _t6 instanceof Error ? _t6.message : String(_t6);
          appendBubble("assistant", "Something went wrong: ".concat(_message, ". Please try again."));
          setStatus("Error — see chat.");
        case 10:
          _context11.p = 10;
          typing.remove();
          busy = false;
          return _context11.f(10);
        case 11:
          return _context11.a(2);
      }
    }, _callee10, null, [[3, 9, 10, 11]]);
  }));
  return _sendChat.apply(this, arguments);
}
var PHASE_LABELS = {
  starting: "starting up",
  thinking: "thinking",
  classify: "classifying the document",
  review: "reviewing criteria C1–C4 in parallel",
  residual: "sweeping residual clauses",
  verify: "verifying each finding independently",
  suggest: "drafting suggestions",
  reconcile: "reconciling overlapping edits"
};
function pollReview(_x6) {
  return _pollReview.apply(this, arguments);
}
function _pollReview() {
  _pollReview = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(jobId) {
    var action,
      onPartial,
      interval,
      consecutiveFailures,
      attempt,
      _ref8,
      _PHASE_LABELS,
      _state$phase,
      state,
      response,
      _state$detail,
      label,
      _args12 = arguments,
      _t7;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.p = _context12.n) {
        case 0:
          action = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : "review";
          onPartial = _args12.length > 2 ? _args12[2] : undefined;
          interval = action === "chat" ? 1000 : 4000;
          consecutiveFailures = 0;
          attempt = 0;
        case 1:
          if (!(attempt < 300)) {
            _context12.n = 13;
            break;
          }
          _context12.n = 2;
          return new Promise(function (resolve) {
            return setTimeout(resolve, interval);
          });
        case 2:
          state = void 0;
          _context12.p = 3;
          _context12.n = 4;
          return fetch("".concat(API_BASE, "/review/").concat(jobId), {
            headers: {
              "X-Tunnel-Skip-AntiPhishing-Page": "true"
            }
          });
        case 4:
          response = _context12.v;
          if (response.ok) {
            _context12.n = 5;
            break;
          }
          throw new Error("review poll failed (".concat(response.status, ")"));
        case 5:
          _context12.n = 6;
          return response.json();
        case 6:
          state = _context12.v;
          consecutiveFailures = 0;
          _context12.n = 9;
          break;
        case 7:
          _context12.p = 7;
          _t7 = _context12.v;
          consecutiveFailures += 1;
          if (!(consecutiveFailures >= 8)) {
            _context12.n = 8;
            break;
          }
          throw _t7;
        case 8:
          setStatus("Connection hiccup — retrying…");
          return _context12.a(3, 12);
        case 9:
          if (!(state.status === "done" && state.result)) {
            _context12.n = 10;
            break;
          }
          return _context12.a(2, state.result);
        case 10:
          if (!(state.status === "error")) {
            _context12.n = 11;
            break;
          }
          throw new Error((_state$detail = state.detail) !== null && _state$detail !== void 0 ? _state$detail : "review failed");
        case 11:
          if (state.partial && onPartial) {
            onPartial(state.partial);
          }
          label = (_ref8 = (_PHASE_LABELS = PHASE_LABELS[(_state$phase = state.phase) !== null && _state$phase !== void 0 ? _state$phase : ""]) !== null && _PHASE_LABELS !== void 0 ? _PHASE_LABELS : state.phase) !== null && _ref8 !== void 0 ? _ref8 : "working";
          setStatus(action === "review" ? "Review running: ".concat(label, "\u2026") : "The agent is ".concat(label, "\u2026"));
        case 12:
          attempt++;
          _context12.n = 1;
          break;
        case 13:
          throw new Error("the agent timed out");
        case 14:
          return _context12.a(2);
      }
    }, _callee11, null, [[3, 7]]);
  }));
  return _pollReview.apply(this, arguments);
}
function showTyping() {
  var bubble = document.createElement("div");
  bubble.className = "typing";
  bubble.innerHTML = "<span></span><span></span><span></span>";
  appendCard(bubble);
  return bubble;
}
function findingLabel(finding) {
  var _finding$rule_id;
  return (_finding$rule_id = finding.rule_id) !== null && _finding$rule_id !== void 0 ? _finding$rule_id : finding.criterion;
}
function hasInlineSuggestion(finding) {
  var suggestion = finding.suggestion;
  return Boolean((suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "replace" && suggestion.old && suggestion.new || (suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "insert" && suggestion.after && suggestion.new);
}
function clauseKey(finding) {
  var _finding$clause_ancho;
  var match = ((_finding$clause_ancho = finding.clause_anchor) !== null && _finding$clause_ancho !== void 0 ? _finding$clause_ancho : "").match(/\d+(?:\.\d+)*/);
  return match ? match[0].split(".").map(Number) : [Number.MAX_SAFE_INTEGER];
}
function byClauseOrder(a, b) {
  var keyA = clauseKey(a);
  var keyB = clauseKey(b);
  for (var index = 0; index < Math.max(keyA.length, keyB.length); index++) {
    var _keyA$index, _keyB$index;
    var diff = ((_keyA$index = keyA[index]) !== null && _keyA$index !== void 0 ? _keyA$index : 0) - ((_keyB$index = keyB[index]) !== null && _keyB$index !== void 0 ? _keyB$index : 0);
    if (diff !== 0) {
      return diff;
    }
  }
  return 0;
}
function documentPosition(doc, finding) {
  var _finding$suggestion, _finding$suggestion2;
  var candidates = [(_finding$suggestion = finding.suggestion) === null || _finding$suggestion === void 0 ? void 0 : _finding$suggestion.old, finding.quote, (_finding$suggestion2 = finding.suggestion) === null || _finding$suggestion2 === void 0 ? void 0 : _finding$suggestion2.after, finding.clause_anchor];
  for (var _i = 0, _candidates = candidates; _i < _candidates.length; _i++) {
    var candidate = _candidates[_i];
    if (!candidate) {
      continue;
    }
    var target = normalizeWithMap(candidate).normalized.slice(0, 80);
    if (!target) {
      continue;
    }
    var at = doc.normalized.indexOf(target);
    if (at >= 0) {
      return at;
    }
  }
  return Number.MAX_SAFE_INTEGER;
}
function orderByDocument(findings, documentText) {
  var doc = normalizeWithMap(documentText);
  return findings.map(function (finding) {
    return {
      finding: finding,
      position: documentPosition(doc, finding)
    };
  }).sort(function (a, b) {
    return a.position - b.position || byClauseOrder(a.finding, b.finding);
  }).map(function (_ref) {
    var finding = _ref.finding;
    return finding;
  });
}
function renderFinding(finding) {
  var _finding$suggestion3;
  var interactive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var card = document.createElement("div");
  var severityClass = finding.severity.toLowerCase();
  card.className = "card card-finding card-".concat(severityClass);
  var anchor = finding.clause_anchor ? " \xB7 ".concat(finding.clause_anchor) : "";
  card.innerHTML = "<p class=\"card-title\"><span class=\"severity severity-".concat(severityClass, "\">").concat(finding.severity, "</span>").concat(findingLabel(finding)).concat(anchor, "</p>");
  var body = document.createElement("div");
  body.className = "card-section";
  var html = "<p class=\"card-body\">".concat(finding.problem, "</p>");
  if (finding.impact) {
    html += "<p class=\"card-body\">".concat(finding.impact, "</p>");
  }
  if (((_finding$suggestion3 = finding.suggestion) === null || _finding$suggestion3 === void 0 ? void 0 : _finding$suggestion3.kind) === "instruct" && finding.suggestion.instruction) {
    html += "<p class=\"card-body\"><b>".concat(finding.suggestion.instruction, "</b></p>");
  } else if (!hasInlineSuggestion(finding) && finding.quote) {
    html += "<p class=\"card-body\"><span class=\"card-quote\">\"".concat(finding.quote, "\"</span></p>");
  }
  if (finding.verdict === "PLAUSIBLE") {
    html += "<p class=\"card-note\">Unverified \u2014 raised as a question</p>";
  }
  body.innerHTML = html;
  card.appendChild(body);
  if (!interactive) {
    return card;
  }
  var actions = actionRow(card);
  if (inWord) {
    actions.appendChild(button("Go to clause", function () {
      return goToFinding(finding);
    }));
  }
  if (inWord && hasInlineSuggestion(finding)) {
    var _iterator4 = _createForOfIteratorHelper([["Accept", function () {
        return acceptSuggestion(finding, card);
      }], ["Reject", function () {
        return rejectSuggestion(finding, card);
      }]]),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _step4$value = _slicedToArray(_step4.value, 2),
          label = _step4$value[0],
          handler = _step4$value[1];
        var vote = button(label, handler);
        vote.classList.add("vote");
        actions.appendChild(vote);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  } else {
    var dismiss = button("Dismiss", function () {
      return dismissFinding(finding, card);
    });
    dismiss.classList.add("vote");
    actions.appendChild(dismiss);
  }
  return card;
}
function actionRow(card) {
  var row = document.createElement("div");
  row.className = "card-actions";
  card.appendChild(row);
  return row;
}
function askReason(card, placeholder, onSubmit) {
  if (card.querySelector(".reason-form")) {
    return;
  }
  var form = document.createElement("div");
  form.className = "reason-form";
  var input = document.createElement("textarea");
  input.className = "reason-input";
  input.placeholder = placeholder;
  input.rows = 2;
  var actions = document.createElement("div");
  actions.className = "card-actions";
  var submit = button("Send", function () {
    var reason = input.value.trim();
    if (!reason) {
      input.focus();
      return;
    }
    form.remove();
    void onSubmit(reason);
  });
  var cancel = button("Cancel", function () {
    return form.remove();
  });
  actions.append(submit, cancel);
  form.append(input, actions);
  card.appendChild(form);
  input.focus();
}
function searchAnchor(finding) {
  var _ref2, _ref3, _ref4, _finding$suggestion$o, _finding$suggestion4, _finding$suggestion5;
  return (_ref2 = (_ref3 = (_ref4 = (_finding$suggestion$o = (_finding$suggestion4 = finding.suggestion) === null || _finding$suggestion4 === void 0 ? void 0 : _finding$suggestion4.old) !== null && _finding$suggestion$o !== void 0 ? _finding$suggestion$o : finding.quote) !== null && _ref4 !== void 0 ? _ref4 : (_finding$suggestion5 = finding.suggestion) === null || _finding$suggestion5 === void 0 ? void 0 : _finding$suggestion5.after) !== null && _ref3 !== void 0 ? _ref3 : finding.clause_anchor) !== null && _ref2 !== void 0 ? _ref2 : null;
}
var CHAR_EQUIVALENTS = {
  "\u2018": "'",
  "\u2019": "'",
  "\u201A": "'",
  "\u201C": '"',
  "\u201D": '"',
  "\u201E": '"',
  "\u2013": "-",
  "\u2014": "-"
};
function normalizeWithMap(text) {
  var normalized = "";
  var map = [];
  var index = 0;
  while (index < text.length) {
    var _CHAR_EQUIVALENTS$low;
    if (/\s/.test(text[index])) {
      var runStart = index;
      while (index < text.length && /\s/.test(text[index])) {
        index += 1;
      }
      if (normalized.length > 0 && index < text.length) {
        normalized += " ";
        map.push(runStart);
      }
      continue;
    }
    var lower = text[index].toLowerCase();
    normalized += (_CHAR_EQUIVALENTS$low = CHAR_EQUIVALENTS[lower]) !== null && _CHAR_EQUIVALENTS$low !== void 0 ? _CHAR_EQUIVALENTS$low : lower.length === 1 ? lower : text[index];
    map.push(index);
    index += 1;
  }
  return {
    original: text,
    normalized: normalized,
    map: map
  };
}
function resolveAnchor(doc, anchor) {
  var target = normalizeWithMap(anchor).normalized;
  if (!target) {
    return null;
  }
  var at = doc.normalized.indexOf(target);
  if (at === -1) {
    return null;
  }
  return doc.original.slice(doc.map[at], doc.map[at + target.length - 1] + 1);
}
function renderContractProfile(extractions) {
  var interactive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var card = document.createElement("div");
  card.className = "card";
  var rows = extractions.map(function (extraction) {
    return "<p class=\"card-body\"><strong>".concat(extraction.field, "</strong>: ").concat(extraction.value, "</p>");
  }).join("");
  card.innerHTML = "<p class=\"card-title\">Contract profile</p>".concat(rows);
  var quote = extractions.map(function (extraction) {
    return extraction.quote;
  }).find(function (text) {
    return text;
  });
  if (quote) {
    card.innerHTML += "<span class=\"card-quote\">\"".concat(quote, "\"</span>");
  }
  if (!interactive) {
    return card;
  }
  var actions = actionRow(card);
  if (inWord && quote) {
    actions.appendChild(button("Highlight", function () {
      return selectInDocument(quote);
    }));
  }
  var _iterator5 = _createForOfIteratorHelper([["👍 Correct", "accepted"], ["👎 Wrong", "dismissed"]]),
    _step5;
  try {
    var _loop = function _loop() {
      var _step5$value = _slicedToArray(_step5.value, 2),
        label = _step5$value[0],
        action = _step5$value[1];
      var vote = button(label, function () {
        return recordProfileVerdict(card, extractions, action);
      });
      vote.classList.add("vote");
      actions.appendChild(vote);
    };
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return card;
}
function recordProfileVerdict(_x7, _x8, _x9) {
  return _recordProfileVerdict.apply(this, arguments);
}
function _recordProfileVerdict() {
  _recordProfileVerdict = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(card, extractions, action) {
    var reason,
      _args13 = arguments,
      _t8;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.p = _context13.n) {
        case 0:
          reason = _args13.length > 3 && _args13[3] !== undefined ? _args13[3] : null;
          if (!(action === "dismissed" && reason === null)) {
            _context13.n = 1;
            break;
          }
          askReason(card, "What did the AI get wrong here?", function (text) {
            return recordProfileVerdict(card, extractions, action, text);
          });
          return _context13.a(2);
        case 1:
          _context13.p = 1;
          _context13.n = 2;
          return post("/labels", {
            session_id: sessionId,
            criterion: "contract_profile",
            action: action,
            target: "extraction",
            reason: reason,
            final_text: JSON.stringify(Object.fromEntries(extractions.map(function (extraction) {
              return [extraction.field, extraction.value];
            })))
          });
        case 2:
          _context13.n = 4;
          break;
        case 3:
          _context13.p = 3;
          _t8 = _context13.v;
          setStatus("Could not record the rating; it was not saved.");
          return _context13.a(2);
        case 4:
          card.querySelectorAll("button.vote").forEach(function (vote) {
            return vote.remove();
          });
          card.style.opacity = "0.6";
          setStatus(action === "accepted" ? "Profile marked correct — recorded." : "Profile marked wrong — recorded.");
        case 5:
          return _context13.a(2);
      }
    }, _callee12, null, [[1, 3]]);
  }));
  return _recordProfileVerdict.apply(this, arguments);
}
function button(label, onClick) {
  var el = document.createElement("button");
  el.textContent = label;
  el.className = "card-button";
  el.onclick = onClick;
  return el;
}
function selectFirstMatch(_x0) {
  return _selectFirstMatch.apply(this, arguments);
}
function _selectFirstMatch() {
  _selectFirstMatch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(candidates) {
    var _t9;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.p = _context15.n) {
        case 0:
          _context15.p = 0;
          _context15.n = 1;
          return Word.run(/*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(context) {
              var body, doc, attempts, _iterator7, _step7, _resolveAnchor, candidate, anchor, _i3, _arr, length, _attempt, _i2, _attempts, attempt, results;
              return _regenerator().w(function (_context14) {
                while (1) switch (_context14.n) {
                  case 0:
                    body = context.document.body;
                    body.load("text");
                    _context14.n = 1;
                    return context.sync();
                  case 1:
                    doc = normalizeWithMap(body.text);
                    attempts = [];
                    _iterator7 = _createForOfIteratorHelper(candidates);
                    try {
                      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                        candidate = _step7.value;
                        anchor = (_resolveAnchor = resolveAnchor(doc, candidate)) !== null && _resolveAnchor !== void 0 ? _resolveAnchor : candidate;
                        for (_i3 = 0, _arr = [SEARCH_LIMIT, 80, 40]; _i3 < _arr.length; _i3++) {
                          length = _arr[_i3];
                          _attempt = anchor.slice(0, length).trim();
                          if (_attempt && !attempts.includes(_attempt)) {
                            attempts.push(_attempt);
                          }
                        }
                      }
                    } catch (err) {
                      _iterator7.e(err);
                    } finally {
                      _iterator7.f();
                    }
                    _i2 = 0, _attempts = attempts;
                  case 2:
                    if (!(_i2 < _attempts.length)) {
                      _context14.n = 6;
                      break;
                    }
                    attempt = _attempts[_i2];
                    results = body.search(attempt, {
                      matchCase: false
                    });
                    results.load("items");
                    _context14.n = 3;
                    return context.sync();
                  case 3:
                    if (!(results.items.length > 0)) {
                      _context14.n = 5;
                      break;
                    }
                    results.items[0].select();
                    _context14.n = 4;
                    return context.sync();
                  case 4:
                    return _context14.a(2, true);
                  case 5:
                    _i2++;
                    _context14.n = 2;
                    break;
                  case 6:
                    return _context14.a(2, false);
                }
              }, _callee13);
            }));
            return function (_x25) {
              return _ref9.apply(this, arguments);
            };
          }());
        case 1:
          return _context15.a(2, _context15.v);
        case 2:
          _context15.p = 2;
          _t9 = _context15.v;
          return _context15.a(2, false);
      }
    }, _callee14, null, [[0, 2]]);
  }));
  return _selectFirstMatch.apply(this, arguments);
}
function goToFinding(_x1) {
  return _goToFinding.apply(this, arguments);
}
function _goToFinding() {
  _goToFinding = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(finding) {
    var _finding$suggestion6;
    var candidates, found;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.n) {
        case 0:
          candidates = [(_finding$suggestion6 = finding.suggestion) === null || _finding$suggestion6 === void 0 ? void 0 : _finding$suggestion6.new, searchAnchor(finding)].filter(function (candidate) {
            return Boolean(candidate);
          });
          _context16.n = 1;
          return selectFirstMatch(candidates);
        case 1:
          found = _context16.v;
          if (!found) {
            setStatus("Couldn't locate this clause in the document.");
          }
        case 2:
          return _context16.a(2);
      }
    }, _callee15);
  }));
  return _goToFinding.apply(this, arguments);
}
function selectInDocument(_x10) {
  return _selectInDocument.apply(this, arguments);
}
function _selectInDocument() {
  _selectInDocument = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(text) {
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.n) {
        case 0:
          _context17.n = 1;
          return selectFirstMatch([text]);
        case 1:
          return _context17.a(2);
      }
    }, _callee16);
  }));
  return _selectInDocument.apply(this, arguments);
}
function planAction(finding) {
  var suggestion = finding.suggestion;
  if ((suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "replace" && suggestion.old && suggestion.new && suggestion.old.length <= SEARCH_LIMIT && finding.verdict !== "PLAUSIBLE") {
    var newText = suggestion.new;
    return {
      anchor: suggestion.old,
      kind: "redline",
      buildOoxml: function buildOoxml(rangeText) {
        return redlineOoxml(rangeText, newText);
      }
    };
  }
  if ((suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "insert" && suggestion.after && suggestion.new && finding.verdict !== "PLAUSIBLE") {
    var _newText = suggestion.new;
    return {
      anchor: suggestion.after,
      kind: "insert",
      buildOoxml: function buildOoxml() {
        return insertOnlyOoxml(_newText);
      }
    };
  }
  return null;
}
var APPLY_PAUSE_MS = 150;
function applyAllFindings(_x11) {
  return _applyAllFindings.apply(this, arguments);
}
function _applyAllFindings() {
  _applyAllFindings = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(findings) {
    var plans, results, total, _t1;
    return _regenerator().w(function (_context19) {
      while (1) switch (_context19.p = _context19.n) {
        case 0:
          plans = findings.map(planAction);
          results = plans.map(function (plan) {
            return plan === null ? "panel" : "not-found";
          });
          total = plans.filter(function (plan) {
            return plan !== null;
          }).length;
          _context19.p = 1;
          _context19.n = 2;
          return Word.run(/*#__PURE__*/function () {
            var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(context) {
              var body, doc, searches, applied, index, _searches$index, plan, items, _t0;
              return _regenerator().w(function (_context18) {
                while (1) switch (_context18.p = _context18.n) {
                  case 0:
                    body = context.document.body;
                    body.load("text");
                    _context18.n = 1;
                    return context.sync();
                  case 1:
                    doc = normalizeWithMap(body.text);
                    searches = plans.map(function (plan) {
                      var _resolveAnchor2;
                      if (!plan) {
                        return null;
                      }
                      var anchor = (_resolveAnchor2 = resolveAnchor(doc, plan.anchor)) !== null && _resolveAnchor2 !== void 0 ? _resolveAnchor2 : plan.anchor;
                      return body.search(anchor.slice(0, SEARCH_LIMIT), {
                        matchCase: false
                      });
                    });
                    searches.forEach(function (collection) {
                      return collection === null || collection === void 0 ? void 0 : collection.load("items,text");
                    });
                    _context18.n = 2;
                    return context.sync();
                  case 2:
                    applied = 0;
                    index = 0;
                  case 3:
                    if (!(index < plans.length)) {
                      _context18.n = 10;
                      break;
                    }
                    plan = plans[index];
                    items = (_searches$index = searches[index]) === null || _searches$index === void 0 ? void 0 : _searches$index.items;
                    if (!(!plan || !items || items.length === 0)) {
                      _context18.n = 4;
                      break;
                    }
                    return _context18.a(3, 9);
                  case 4:
                    applied += 1;
                    setStatus("Applying edit ".concat(applied, " of ").concat(total, "\u2026"));
                    items[0].insertOoxml(plan.buildOoxml(items[0].text), plan.kind === "insert" ? Word.InsertLocation.after : Word.InsertLocation.replace);
                    _context18.p = 5;
                    _context18.n = 6;
                    return context.sync();
                  case 6:
                    results[index] = plan.kind;
                    _context18.n = 8;
                    break;
                  case 7:
                    _context18.p = 7;
                    _t0 = _context18.v;
                  case 8:
                    _context18.n = 9;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, APPLY_PAUSE_MS);
                    });
                  case 9:
                    index++;
                    _context18.n = 3;
                    break;
                  case 10:
                    return _context18.a(2);
                }
              }, _callee17, null, [[5, 7]]);
            }));
            return function (_x26) {
              return _ref0.apply(this, arguments);
            };
          }());
        case 2:
          _context19.n = 4;
          break;
        case 3:
          _context19.p = 3;
          _t1 = _context19.v;
        case 4:
          return _context19.a(2, results);
      }
    }, _callee18, null, [[1, 3]]);
  }));
  return _applyAllFindings.apply(this, arguments);
}
function ooxmlTimestamp() {
  return new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
}
function xmlEscape(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function redlineOoxml(oldText, newText) {
  var date = ooxmlTimestamp();
  return ooxmlPackage("<w:del w:id=\"101\" w:author=\"".concat(AI_AUTHOR, "\" w:date=\"").concat(date, "\">\n       <w:r><w:delText xml:space=\"preserve\">").concat(xmlEscape(oldText), "</w:delText></w:r>\n     </w:del>\n     <w:ins w:id=\"102\" w:author=\"").concat(AI_AUTHOR, "\" w:date=\"").concat(date, "\">\n       <w:r><w:t xml:space=\"preserve\">").concat(xmlEscape(newText), "</w:t></w:r>\n     </w:ins>"));
}
function insertOnlyOoxml(newText) {
  var date = ooxmlTimestamp();
  return ooxmlPackage("<w:ins w:id=\"102\" w:author=\"".concat(AI_AUTHOR, "\" w:date=\"").concat(date, "\">\n       <w:r><w:t xml:space=\"preserve\">").concat(xmlEscape(" " + newText), "</w:t></w:r>\n     </w:ins>"));
}
function ooxmlPackage(paragraphInner) {
  return "<?xml version=\"1.0\" standalone=\"yes\"?>\n<?mso-application progid=\"Word.Document\"?>\n<pkg:package xmlns:pkg=\"http://schemas.microsoft.com/office/2006/xmlPackage\">\n  <pkg:part pkg:name=\"/_rels/.rels\" pkg:contentType=\"application/vnd.openxmlformats-package.relationships+xml\">\n    <pkg:xmlData>\n      <Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\n        <Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\" Target=\"word/document.xml\"/>\n      </Relationships>\n    </pkg:xmlData>\n  </pkg:part>\n  <pkg:part pkg:name=\"/word/document.xml\" pkg:contentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml\">\n    <pkg:xmlData>\n      <w:document xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">\n        <w:body>\n          <w:p>\n            ".concat(paragraphInner, "\n          </w:p>\n        </w:body>\n      </w:document>\n    </pkg:xmlData>\n  </pkg:part>\n</pkg:package>");
}
function markApplied(card, applied) {
  var _card$children$;
  var note = document.createElement("p");
  note.className = "card-note";
  note.textContent = applied === "redline" ? "Redline suggested in the document, attributed to Fuse Legal AI" : applied === "insert" ? "Insertion suggested in the document, attributed to Fuse Legal AI" : applied === "panel" ? "Shown here only — nothing was added to the document" : "Clause not found — no edit was applied";
  card.insertBefore(note, (_card$children$ = card.children[1]) !== null && _card$children$ !== void 0 ? _card$children$ : null);
}
function markSectionDone(section, note) {
  section.classList.add("card-section-done");
  section.querySelectorAll("button.vote").forEach(function (element) {
    return element.remove();
  });
  var status = document.createElement("p");
  status.className = "card-note";
  status.textContent = note;
  section.appendChild(status);
}
function revertTrackedChanges(_x12) {
  return _revertTrackedChanges.apply(this, arguments);
}
function _revertTrackedChanges() {
  _revertTrackedChanges = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(finding) {
    var _finding$suggestion7, _finding$suggestion8;
    var targets, _t11;
    return _regenerator().w(function (_context21) {
      while (1) switch (_context21.p = _context21.n) {
        case 0:
          targets = [(_finding$suggestion7 = finding.suggestion) === null || _finding$suggestion7 === void 0 ? void 0 : _finding$suggestion7.new, (_finding$suggestion8 = finding.suggestion) === null || _finding$suggestion8 === void 0 ? void 0 : _finding$suggestion8.old].filter(function (target) {
            return Boolean(target);
          });
          _context21.p = 1;
          _context21.n = 2;
          return Word.run(/*#__PURE__*/function () {
            var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(context) {
              var body, doc, reverted, _iterator8, _step8, _resolveAnchor3, target, anchor, _i4, _arr2, length, results, _t10;
              return _regenerator().w(function (_context20) {
                while (1) switch (_context20.p = _context20.n) {
                  case 0:
                    body = context.document.body;
                    body.load("text");
                    _context20.n = 1;
                    return context.sync();
                  case 1:
                    doc = normalizeWithMap(body.text);
                    reverted = false;
                    _iterator8 = _createForOfIteratorHelper(targets);
                    _context20.p = 2;
                    _iterator8.s();
                  case 3:
                    if ((_step8 = _iterator8.n()).done) {
                      _context20.n = 9;
                      break;
                    }
                    target = _step8.value;
                    anchor = (_resolveAnchor3 = resolveAnchor(doc, target)) !== null && _resolveAnchor3 !== void 0 ? _resolveAnchor3 : target;
                    _i4 = 0, _arr2 = [SEARCH_LIMIT, 80];
                  case 4:
                    if (!(_i4 < _arr2.length)) {
                      _context20.n = 8;
                      break;
                    }
                    length = _arr2[_i4];
                    results = body.search(anchor.slice(0, length), {
                      matchCase: false
                    });
                    results.load("items");
                    _context20.n = 5;
                    return context.sync();
                  case 5:
                    if (!(results.items.length > 0)) {
                      _context20.n = 7;
                      break;
                    }
                    results.items[0].getTrackedChanges().rejectAll();
                    _context20.n = 6;
                    return context.sync();
                  case 6:
                    reverted = true;
                    return _context20.a(3, 8);
                  case 7:
                    _i4++;
                    _context20.n = 4;
                    break;
                  case 8:
                    _context20.n = 3;
                    break;
                  case 9:
                    _context20.n = 11;
                    break;
                  case 10:
                    _context20.p = 10;
                    _t10 = _context20.v;
                    _iterator8.e(_t10);
                  case 11:
                    _context20.p = 11;
                    _iterator8.f();
                    return _context20.f(11);
                  case 12:
                    return _context20.a(2, reverted);
                }
              }, _callee19, null, [[2, 10, 11, 12]]);
            }));
            return function (_x27) {
              return _ref1.apply(this, arguments);
            };
          }());
        case 2:
          return _context21.a(2, _context21.v);
        case 3:
          _context21.p = 3;
          _t11 = _context21.v;
          return _context21.a(2, false);
      }
    }, _callee20, null, [[1, 3]]);
  }));
  return _revertTrackedChanges.apply(this, arguments);
}
function acceptSuggestion(_x13, _x14) {
  return _acceptSuggestion.apply(this, arguments);
}
function _acceptSuggestion() {
  _acceptSuggestion = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(finding, card) {
    return _regenerator().w(function (_context22) {
      while (1) switch (_context22.n) {
        case 0:
          _context22.n = 1;
          return recordLabel(finding, "accepted", "suggestion");
        case 1:
          markSectionDone(card, "Accepted — the tracked change stays in the document for the counterparty");
          setStatus("Accepted the suggestion for ".concat(findingLabel(finding), ". Recorded for the eval loop."));
        case 2:
          return _context22.a(2);
      }
    }, _callee21);
  }));
  return _acceptSuggestion.apply(this, arguments);
}
function rejectSuggestion(_x15, _x16) {
  return _rejectSuggestion.apply(this, arguments);
}
function _rejectSuggestion() {
  _rejectSuggestion = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(finding, card) {
    return _regenerator().w(function (_context24) {
      while (1) switch (_context24.n) {
        case 0:
          askReason(card, "Why is this suggestion wrong? This trains the AI.", /*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(reason) {
              var reverted;
              return _regenerator().w(function (_context23) {
                while (1) switch (_context23.n) {
                  case 0:
                    _context23.n = 1;
                    return revertTrackedChanges(finding);
                  case 1:
                    reverted = _context23.v;
                    if (!reverted && hasInlineSuggestion(finding)) {
                      setStatus("Could not undo the tracked change automatically; reject it from Word's review pane.");
                    }
                    _context23.n = 2;
                    return recordLabel(finding, "dismissed", "suggestion", reason);
                  case 2:
                    markSectionDone(card, reverted ? "Rejected — the edit was removed from the document" : "Rejected");
                    setStatus("Rejected the suggestion for ".concat(findingLabel(finding), ". The agent sees this next turn."));
                  case 3:
                    return _context23.a(2);
                }
              }, _callee22);
            }));
            return function (_x28) {
              return _ref10.apply(this, arguments);
            };
          }());
        case 1:
          return _context24.a(2);
      }
    }, _callee23);
  }));
  return _rejectSuggestion.apply(this, arguments);
}
function dismissFinding(_x17, _x18) {
  return _dismissFinding.apply(this, arguments);
}
function _dismissFinding() {
  _dismissFinding = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(finding, card) {
    return _regenerator().w(function (_context26) {
      while (1) switch (_context26.n) {
        case 0:
          askReason(card, "Why should this be dismissed? This trains the AI.", /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(reason) {
              return _regenerator().w(function (_context25) {
                while (1) switch (_context25.n) {
                  case 0:
                    _context25.n = 1;
                    return recordLabel(finding, "dismissed", "finding", reason);
                  case 1:
                    markSectionDone(card, "Dismissed");
                    card.style.opacity = "0.5";
                    setStatus("Dismissed ".concat(findingLabel(finding), ". The agent sees this next turn."));
                  case 2:
                    return _context25.a(2);
                }
              }, _callee24);
            }));
            return function (_x29) {
              return _ref11.apply(this, arguments);
            };
          }());
        case 1:
          return _context26.a(2);
      }
    }, _callee25);
  }));
  return _dismissFinding.apply(this, arguments);
}
function recordLabel(_x19, _x20, _x21, _x22) {
  return _recordLabel.apply(this, arguments);
}
function _recordLabel() {
  _recordLabel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26(finding, action, target, reason) {
    var _t12;
    return _regenerator().w(function (_context27) {
      while (1) switch (_context27.p = _context27.n) {
        case 0:
          _context27.p = 0;
          _context27.n = 1;
          return post("/labels", {
            session_id: sessionId,
            criterion: findingLabel(finding),
            action: action,
            target: target,
            reason: reason !== null && reason !== void 0 ? reason : null
          });
        case 1:
          _context27.n = 3;
          break;
        case 2:
          _context27.p = 2;
          _t12 = _context27.v;
          setStatus("Label not recorded: ".concat(String(_t12)));
        case 3:
          return _context27.a(2);
      }
    }, _callee26, null, [[0, 2]]);
  }));
  return _recordLabel.apply(this, arguments);
}
function appendBubble(role, text) {
  var bubble = document.createElement("div");
  bubble.className = role === "user" ? "bubble bubble-user" : "bubble bubble-assistant";
  bubble.textContent = text;
  appendCard(bubble);
  return bubble;
}
function appendCard(element) {
  var log = document.getElementById("chat-log");
  log.appendChild(element);
  log.scrollTop = log.scrollHeight;
}