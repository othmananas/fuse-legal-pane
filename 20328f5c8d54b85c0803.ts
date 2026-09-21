function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* global document, Office, Word */

var API_BASE = window.location.hostname === "localhost" ? "http://localhost:8787" : "https://nh63xr91-8787.uks1.devtunnels.ms";
var AI_AUTHOR = "Fuse Legal AI";
var SEARCH_LIMIT = 200;
var sessionId = crypto.randomUUID();
var inWord = false;
var busy = false;
Office.onReady(function (info) {
  inWord = info.host === Office.HostType.Word;
  if (!inWord) {
    document.getElementById("browser-doc").style.display = "block";
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
  document.getElementById("chat-input").onkeydown = function (event) {
    if (event.key === "Enter") sendChat();
  };
  appendBubble("assistant", "Hi, I'm Fuse's legal agent. Ask me anything about this contract, or start with a review.");
});
function setStatus(text) {
  document.getElementById("status").textContent = text;
}
function getDocumentText() {
  return _getDocumentText.apply(this, arguments);
}
function _getDocumentText() {
  _getDocumentText = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          if (inWord) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, document.getElementById("doc-input").value);
        case 1:
          return _context2.a(2, Word.run(/*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context) {
              var body;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    body = context.document.body;
                    body.load("text");
                    _context.n = 1;
                    return context.sync();
                  case 1:
                    return _context.a(2, body.text);
                }
              }, _callee);
            }));
            return function (_x19) {
              return _ref3.apply(this, arguments);
            };
          }()));
      }
    }, _callee2);
  }));
  return _getDocumentText.apply(this, arguments);
}
function post(_x, _x2) {
  return _post.apply(this, arguments);
}
function _post() {
  _post = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(path, payload) {
    var response, detail;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return fetch("".concat(API_BASE).concat(path), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Tunnel-Skip-AntiPhishing-Page": "true"
            },
            body: JSON.stringify(payload)
          });
        case 1:
          response = _context3.v;
          if (response.ok) {
            _context3.n = 3;
            break;
          }
          _context3.n = 2;
          return response.text();
        case 2:
          detail = _context3.v;
          throw new Error("".concat(path, " failed (").concat(response.status, "): ").concat(detail));
        case 3:
          return _context3.a(2, response.json());
      }
    }, _callee3);
  }));
  return _post.apply(this, arguments);
}
function sendChat(_x3) {
  return _sendChat.apply(this, arguments);
}
function _sendChat() {
  _sendChat = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(canned) {
    var action,
      input,
      message,
      typing,
      documentText,
      started,
      result,
      _iterator,
      _step,
      extraction,
      _iterator2,
      _step2,
      finding,
      card,
      _args4 = arguments,
      _t,
      _t2,
      _t3,
      _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          action = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : "chat";
          if (!busy) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2);
        case 1:
          input = document.getElementById("chat-input");
          message = canned !== null && canned !== void 0 ? canned : input.value.trim();
          if (message) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2);
        case 2:
          if (!canned) {
            input.value = "";
          }
          appendBubble("user", message);
          busy = true;
          setStatus(action === "review" ? "Running the NDA review pipeline (about two minutes)…" : "The agent is working…");
          typing = showTyping();
          _context4.p = 3;
          _context4.n = 4;
          return getDocumentText();
        case 4:
          documentText = _context4.v;
          _context4.n = 5;
          return post("/chat", {
            session_id: sessionId,
            message: message,
            document_text: documentText || null,
            action: action
          });
        case 5:
          started = _context4.v;
          _context4.n = 6;
          return pollReview(started.job_id, action);
        case 6:
          result = _context4.v;
          if (result.reply) {
            appendBubble("assistant", result.reply);
          }
          _iterator = _createForOfIteratorHelper(result.extractions);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              extraction = _step.value;
              appendCard(renderExtraction(extraction));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (inWord && result.findings.length > 0) {
            setStatus("Adding suggested edits to the document…");
          }
          _iterator2 = _createForOfIteratorHelper(result.findings);
          _context4.p = 7;
          _iterator2.s();
        case 8:
          if ((_step2 = _iterator2.n()).done) {
            _context4.n = 11;
            break;
          }
          finding = _step2.value;
          card = renderFinding(finding);
          appendCard(card);
          if (!inWord) {
            _context4.n = 10;
            break;
          }
          _t = markApplied;
          _t2 = card;
          _context4.n = 9;
          return applyFindingInline(finding);
        case 9:
          _t(_t2, _context4.v);
        case 10:
          _context4.n = 8;
          break;
        case 11:
          _context4.n = 13;
          break;
        case 12:
          _context4.p = 12;
          _t3 = _context4.v;
          _iterator2.e(_t3);
        case 13:
          _context4.p = 13;
          _iterator2.f();
          return _context4.f(13);
        case 14:
          setStatus("Ready.");
          _context4.n = 16;
          break;
        case 15:
          _context4.p = 15;
          _t4 = _context4.v;
          setStatus(String(_t4));
        case 16:
          _context4.p = 16;
          typing.remove();
          busy = false;
          return _context4.f(16);
        case 17:
          return _context4.a(2);
      }
    }, _callee4, null, [[7, 12, 13, 14], [3, 15, 16, 17]]);
  }));
  return _sendChat.apply(this, arguments);
}
var PHASE_LABELS = {
  starting: "starting up",
  thinking: "thinking",
  classify: "classifying the document",
  review: "reviewing against the style guide",
  verify: "verifying and drafting suggestions"
};
function pollReview(_x4) {
  return _pollReview.apply(this, arguments);
}
function _pollReview() {
  _pollReview = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(jobId) {
    var action,
      interval,
      attempt,
      _ref4,
      _PHASE_LABELS,
      _state$phase,
      response,
      state,
      _state$detail,
      label,
      _args5 = arguments;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          action = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : "review";
          interval = action === "chat" ? 1500 : 4000;
          attempt = 0;
        case 1:
          if (!(attempt < 300)) {
            _context5.n = 9;
            break;
          }
          _context5.n = 2;
          return new Promise(function (resolve) {
            return setTimeout(resolve, interval);
          });
        case 2:
          _context5.n = 3;
          return fetch("".concat(API_BASE, "/review/").concat(jobId), {
            headers: {
              "X-Tunnel-Skip-AntiPhishing-Page": "true"
            }
          });
        case 3:
          response = _context5.v;
          if (response.ok) {
            _context5.n = 4;
            break;
          }
          throw new Error("review poll failed (".concat(response.status, ")"));
        case 4:
          _context5.n = 5;
          return response.json();
        case 5:
          state = _context5.v;
          if (!(state.status === "done" && state.result)) {
            _context5.n = 6;
            break;
          }
          return _context5.a(2, state.result);
        case 6:
          if (!(state.status === "error")) {
            _context5.n = 7;
            break;
          }
          throw new Error((_state$detail = state.detail) !== null && _state$detail !== void 0 ? _state$detail : "review failed");
        case 7:
          label = (_ref4 = (_PHASE_LABELS = PHASE_LABELS[(_state$phase = state.phase) !== null && _state$phase !== void 0 ? _state$phase : ""]) !== null && _PHASE_LABELS !== void 0 ? _PHASE_LABELS : state.phase) !== null && _ref4 !== void 0 ? _ref4 : "working";
          setStatus(action === "review" ? "Review running: ".concat(label, "\u2026") : "The agent is ".concat(label, "\u2026"));
        case 8:
          attempt++;
          _context5.n = 1;
          break;
        case 9:
          throw new Error("the agent timed out");
        case 10:
          return _context5.a(2);
      }
    }, _callee5);
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
function commentText(finding) {
  var _finding$suggestion;
  var text = "[".concat(finding.severity, "] ").concat(findingLabel(finding), " \u2014 ").concat(finding.problem);
  if (finding.impact) {
    text += " Impact: ".concat(finding.impact);
  }
  if (finding.verdict === "PLAUSIBLE") {
    text += " (unverified — raised as a question)";
  }
  if (((_finding$suggestion = finding.suggestion) === null || _finding$suggestion === void 0 ? void 0 : _finding$suggestion.kind) === "instruct" && finding.suggestion.instruction) {
    text += " Suggestion: ".concat(finding.suggestion.instruction);
  }
  return text;
}
function renderFinding(finding) {
  var card = document.createElement("div");
  card.className = "card card-finding";
  var anchor = finding.clause_anchor ? " \xB7 ".concat(finding.clause_anchor) : "";
  var body = "\n    <p class=\"card-title\"><span class=\"severity\">".concat(finding.severity, "</span>").concat(findingLabel(finding)).concat(anchor, "</p>\n    <p class=\"card-body\">").concat(finding.problem, "</p>\n  ");
  if (finding.impact) {
    body += "<p class=\"card-body\">".concat(finding.impact, "</p>");
  }
  var suggestion = finding.suggestion;
  if ((suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "replace" && suggestion.old && suggestion.new) {
    body += "<p class=\"card-body\"><s>".concat(suggestion.old, "</s> \u2192 <b>").concat(suggestion.new, "</b></p>");
  } else if ((suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "insert" && suggestion.new) {
    body += "<p class=\"card-body\">Insert: <b>".concat(suggestion.new, "</b></p>");
  } else if ((suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "instruct" && suggestion.instruction) {
    body += "<p class=\"card-body\"><b>".concat(suggestion.instruction, "</b></p>");
  } else if (finding.quote) {
    body += "<p class=\"card-body\"><span class=\"card-quote\">\"".concat(finding.quote, "\"</span></p>");
  }
  if (finding.verdict === "PLAUSIBLE") {
    body += "<p class=\"card-note\">Unverified \u2014 raised as a question</p>";
  }
  card.innerHTML = body;
  var anchorText = searchAnchor(finding);
  if (inWord && anchorText) {
    card.appendChild(button("Go to clause", function () {
      return selectInDocument(anchorText);
    }));
  }
  if (inWord) {
    card.appendChild(button("Accept", function () {
      return acceptFinding(finding, card);
    }));
    card.appendChild(button("Reject", function () {
      return rejectFinding(finding, card);
    }));
  } else {
    card.appendChild(button("Dismiss", function () {
      return dismissFinding(finding, card);
    }));
  }
  return card;
}
function searchAnchor(finding) {
  var _ref, _ref2, _finding$suggestion$o, _finding$suggestion2, _finding$suggestion3;
  return (_ref = (_ref2 = (_finding$suggestion$o = (_finding$suggestion2 = finding.suggestion) === null || _finding$suggestion2 === void 0 ? void 0 : _finding$suggestion2.old) !== null && _finding$suggestion$o !== void 0 ? _finding$suggestion$o : finding.quote) !== null && _ref2 !== void 0 ? _ref2 : (_finding$suggestion3 = finding.suggestion) === null || _finding$suggestion3 === void 0 ? void 0 : _finding$suggestion3.after) !== null && _ref !== void 0 ? _ref : null;
}
function renderExtraction(extraction) {
  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = "<p class=\"card-title\">".concat(extraction.field, "</p><p class=\"card-body\">").concat(extraction.value, "</p><span class=\"card-quote\">").concat(extraction.quote ? "\"".concat(extraction.quote, "\"") : "", "</span>");
  if (inWord && extraction.quote) {
    card.appendChild(button("Highlight", function () {
      return selectInDocument(extraction.quote);
    }));
  }
  return card;
}
function button(label, onClick) {
  var el = document.createElement("button");
  el.textContent = label;
  el.className = "card-button";
  el.onclick = onClick;
  return el;
}
function selectInDocument(_x5) {
  return _selectInDocument.apply(this, arguments);
}
function _selectInDocument() {
  _selectInDocument = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(text) {
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          _context7.n = 1;
          return Word.run(/*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(context) {
              var results;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    results = context.document.body.search(text.slice(0, SEARCH_LIMIT), {
                      matchCase: false
                    });
                    results.load("items");
                    _context6.n = 1;
                    return context.sync();
                  case 1:
                    if (!(results.items.length > 0)) {
                      _context6.n = 2;
                      break;
                    }
                    results.items[0].select();
                    _context6.n = 2;
                    return context.sync();
                  case 2:
                    return _context6.a(2);
                }
              }, _callee6);
            }));
            return function (_x20) {
              return _ref5.apply(this, arguments);
            };
          }());
        case 1:
          return _context7.a(2);
      }
    }, _callee7);
  }));
  return _selectInDocument.apply(this, arguments);
}
function applyFindingInline(_x6) {
  return _applyFindingInline.apply(this, arguments);
}
function _applyFindingInline() {
  _applyFindingInline = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(finding) {
    var suggestion, comment, anchor, applied;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          suggestion = finding.suggestion;
          comment = commentText(finding);
          if (!((suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "replace" && suggestion.old && suggestion.new && suggestion.old.length <= SEARCH_LIMIT && finding.verdict !== "PLAUSIBLE")) {
            _context9.n = 2;
            break;
          }
          _context9.n = 1;
          return tryInsertOoxml(suggestion.old, redlineOoxml(suggestion.old, suggestion.new, comment), "Replace");
        case 1:
          if (!_context9.v) {
            _context9.n = 2;
            break;
          }
          return _context9.a(2, "redline");
        case 2:
          if (!((suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "insert" && suggestion.after && suggestion.new && finding.verdict !== "PLAUSIBLE")) {
            _context9.n = 4;
            break;
          }
          _context9.n = 3;
          return tryInsertOoxml(suggestion.after, insertOnlyOoxml(suggestion.new, comment), "After");
        case 3:
          if (!_context9.v) {
            _context9.n = 4;
            break;
          }
          return _context9.a(2, "insert");
        case 4:
          anchor = searchAnchor(finding);
          if (!anchor) {
            _context9.n = 6;
            break;
          }
          _context9.n = 5;
          return Word.run(/*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(context) {
              var results, range, _t5;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.p = _context8.n) {
                  case 0:
                    results = context.document.body.search(anchor.slice(0, SEARCH_LIMIT), {
                      matchCase: false
                    });
                    results.load("items,text");
                    _context8.n = 1;
                    return context.sync();
                  case 1:
                    if (!(results.items.length === 0)) {
                      _context8.n = 2;
                      break;
                    }
                    return _context8.a(2, false);
                  case 2:
                    range = results.items[0];
                    _context8.p = 3;
                    range.insertOoxml(commentOnlyOoxml(range.text, comment), Word.InsertLocation.replace);
                    _context8.n = 4;
                    return context.sync();
                  case 4:
                    return _context8.a(2, true);
                  case 5:
                    _context8.p = 5;
                    _t5 = _context8.v;
                    return _context8.a(2, false);
                }
              }, _callee8, null, [[3, 5]]);
            }));
            return function (_x21) {
              return _ref6.apply(this, arguments);
            };
          }()).catch(function () {
            return false;
          });
        case 5:
          applied = _context9.v;
          if (!applied) {
            _context9.n = 6;
            break;
          }
          return _context9.a(2, "comment");
        case 6:
          return _context9.a(2, tryUserComment(finding, comment));
      }
    }, _callee9);
  }));
  return _applyFindingInline.apply(this, arguments);
}
function tryInsertOoxml(_x7, _x8, _x9) {
  return _tryInsertOoxml.apply(this, arguments);
}
function _tryInsertOoxml() {
  _tryInsertOoxml = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(anchor, ooxml, location) {
    var _t6;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _context1.p = 0;
          _context1.n = 1;
          return Word.run(/*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(context) {
              var results;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.n) {
                  case 0:
                    results = context.document.body.search(anchor.slice(0, SEARCH_LIMIT), {
                      matchCase: false
                    });
                    results.load("items");
                    _context0.n = 1;
                    return context.sync();
                  case 1:
                    if (!(results.items.length === 0)) {
                      _context0.n = 2;
                      break;
                    }
                    return _context0.a(2, false);
                  case 2:
                    results.items[0].insertOoxml(ooxml, location === "Replace" ? Word.InsertLocation.replace : Word.InsertLocation.after);
                    _context0.n = 3;
                    return context.sync();
                  case 3:
                    return _context0.a(2, true);
                }
              }, _callee0);
            }));
            return function (_x22) {
              return _ref7.apply(this, arguments);
            };
          }());
        case 1:
          return _context1.a(2, _context1.v);
        case 2:
          _context1.p = 2;
          _t6 = _context1.v;
          return _context1.a(2, false);
      }
    }, _callee1, null, [[0, 2]]);
  }));
  return _tryInsertOoxml.apply(this, arguments);
}
function tryUserComment(_x0, _x1) {
  return _tryUserComment.apply(this, arguments);
}
function _tryUserComment() {
  _tryUserComment = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(finding, comment) {
    var _t7;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          _context11.p = 0;
          _context11.n = 1;
          return Word.run(/*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(context) {
              var anchor, range, results;
              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.n) {
                  case 0:
                    anchor = searchAnchor(finding);
                    if (!anchor) {
                      _context10.n = 3;
                      break;
                    }
                    results = context.document.body.search(anchor.slice(0, SEARCH_LIMIT), {
                      matchCase: false
                    });
                    results.load("items");
                    _context10.n = 1;
                    return context.sync();
                  case 1:
                    if (!(results.items.length === 0)) {
                      _context10.n = 2;
                      break;
                    }
                    return _context10.a(2, "not-found");
                  case 2:
                    range = results.items[0];
                    _context10.n = 4;
                    break;
                  case 3:
                    range = context.document.body.paragraphs.getFirst().getRange();
                  case 4:
                    range.insertComment("".concat(AI_AUTHOR, " \u2014 ").concat(comment));
                    _context10.n = 5;
                    return context.sync();
                  case 5:
                    return _context10.a(2, "user-comment");
                }
              }, _callee10);
            }));
            return function (_x23) {
              return _ref8.apply(this, arguments);
            };
          }());
        case 1:
          return _context11.a(2, _context11.v);
        case 2:
          _context11.p = 2;
          _t7 = _context11.v;
          return _context11.a(2, "not-found");
      }
    }, _callee11, null, [[0, 2]]);
  }));
  return _tryUserComment.apply(this, arguments);
}
function localWallClock() {
  var now = new Date();
  var pad = function pad(value) {
    return String(value).padStart(2, "0");
  };
  return "".concat(now.getFullYear(), "-").concat(pad(now.getMonth() + 1), "-").concat(pad(now.getDate())) + "T".concat(pad(now.getHours()), ":").concat(pad(now.getMinutes()), ":").concat(pad(now.getSeconds()));
}
function xmlEscape(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function redlineOoxml(oldText, newText, comment) {
  var date = localWallClock();
  return ooxmlPackage("<w:del w:id=\"101\" w:author=\"".concat(AI_AUTHOR, "\" w:date=\"").concat(date, "\">\n       <w:r><w:delText xml:space=\"preserve\">").concat(xmlEscape(oldText), "</w:delText></w:r>\n     </w:del>\n     <w:ins w:id=\"102\" w:author=\"").concat(AI_AUTHOR, "\" w:date=\"").concat(date, "\">\n       <w:r><w:t xml:space=\"preserve\">").concat(xmlEscape(newText), "</w:t></w:r>\n     </w:ins>"), comment);
}
function insertOnlyOoxml(newText, comment) {
  var date = localWallClock();
  return ooxmlPackage("<w:ins w:id=\"102\" w:author=\"".concat(AI_AUTHOR, "\" w:date=\"").concat(date, "\">\n       <w:r><w:t xml:space=\"preserve\">").concat(xmlEscape(" " + newText), "</w:t></w:r>\n     </w:ins>"), comment);
}
function commentOnlyOoxml(anchorText, comment) {
  return ooxmlPackage("<w:r><w:t xml:space=\"preserve\">".concat(xmlEscape(anchorText), "</w:t></w:r>"), comment);
}
function ooxmlPackage(paragraphInner, comment) {
  var date = localWallClock();
  return "<?xml version=\"1.0\" standalone=\"yes\"?>\n<?mso-application progid=\"Word.Document\"?>\n<pkg:package xmlns:pkg=\"http://schemas.microsoft.com/office/2006/xmlPackage\">\n  <pkg:part pkg:name=\"/_rels/.rels\" pkg:contentType=\"application/vnd.openxmlformats-package.relationships+xml\">\n    <pkg:xmlData>\n      <Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\n        <Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\" Target=\"word/document.xml\"/>\n      </Relationships>\n    </pkg:xmlData>\n  </pkg:part>\n  <pkg:part pkg:name=\"/word/_rels/document.xml.rels\" pkg:contentType=\"application/vnd.openxmlformats-package.relationships+xml\">\n    <pkg:xmlData>\n      <Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\n        <Relationship Id=\"rId2\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments\" Target=\"comments.xml\"/>\n      </Relationships>\n    </pkg:xmlData>\n  </pkg:part>\n  <pkg:part pkg:name=\"/word/comments.xml\" pkg:contentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml\">\n    <pkg:xmlData>\n      <w:comments xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">\n        <w:comment w:id=\"1\" w:author=\"".concat(AI_AUTHOR, "\" w:initials=\"AI\" w:date=\"").concat(date, "\">\n          <w:p><w:r><w:t xml:space=\"preserve\">").concat(xmlEscape(comment), "</w:t></w:r></w:p>\n        </w:comment>\n      </w:comments>\n    </pkg:xmlData>\n  </pkg:part>\n  <pkg:part pkg:name=\"/word/document.xml\" pkg:contentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml\">\n    <pkg:xmlData>\n      <w:document xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">\n        <w:body>\n          <w:p>\n            <w:commentRangeStart w:id=\"1\"/>\n            ").concat(paragraphInner, "\n            <w:commentRangeEnd w:id=\"1\"/>\n            <w:r><w:commentReference w:id=\"1\"/></w:r>\n          </w:p>\n        </w:body>\n      </w:document>\n    </pkg:xmlData>\n  </pkg:part>\n</pkg:package>");
}
function markApplied(card, applied) {
  var note = document.createElement("p");
  note.className = "card-note";
  note.textContent = applied === "redline" ? "Redline suggested in the document, attributed to Fuse Legal AI" : applied === "insert" ? "Insertion suggested in the document, attributed to Fuse Legal AI" : applied === "comment" ? "Comment added in the document, attributed to Fuse Legal AI" : applied === "user-comment" ? "Comment added in the document (attributed to you)" : "Clause not found in the document";
  card.insertBefore(note, card.querySelector("button"));
}
function acceptFinding(_x10, _x11) {
  return _acceptFinding.apply(this, arguments);
}
function _acceptFinding() {
  _acceptFinding = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(finding, card) {
    var _finding$suggestion4;
    var inserted, _t8;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.p = _context13.n) {
        case 0:
          inserted = (_finding$suggestion4 = finding.suggestion) === null || _finding$suggestion4 === void 0 ? void 0 : _finding$suggestion4.new;
          if (!inserted) {
            _context13.n = 4;
            break;
          }
          _context13.p = 1;
          _context13.n = 2;
          return Word.run(/*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(context) {
              var results;
              return _regenerator().w(function (_context12) {
                while (1) switch (_context12.n) {
                  case 0:
                    results = context.document.body.search(inserted.slice(0, SEARCH_LIMIT), {
                      matchCase: false
                    });
                    results.load("items");
                    _context12.n = 1;
                    return context.sync();
                  case 1:
                    if (!(results.items.length > 0)) {
                      _context12.n = 2;
                      break;
                    }
                    results.items[0].getTrackedChanges().acceptAll();
                    _context12.n = 2;
                    return context.sync();
                  case 2:
                    return _context12.a(2);
                }
              }, _callee12);
            }));
            return function (_x24) {
              return _ref9.apply(this, arguments);
            };
          }());
        case 2:
          _context13.n = 4;
          break;
        case 3:
          _context13.p = 3;
          _t8 = _context13.v;
          setStatus("Could not accept the tracked change here; accept it from Word's review pane.");
        case 4:
          _context13.n = 5;
          return recordLabel(finding, "accepted");
        case 5:
          card.style.opacity = "0.5";
          setStatus("Accepted ".concat(findingLabel(finding), ". Recorded for the eval loop."));
        case 6:
          return _context13.a(2);
      }
    }, _callee13, null, [[1, 3]]);
  }));
  return _acceptFinding.apply(this, arguments);
}
function rejectFinding(_x12, _x13) {
  return _rejectFinding.apply(this, arguments);
}
function _rejectFinding() {
  _rejectFinding = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(finding, card) {
    var _finding$suggestion5;
    var reason, inserted, _t9;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.p = _context15.n) {
        case 0:
          reason = window.prompt("Reason for rejecting (required):");
          if (reason) {
            _context15.n = 1;
            break;
          }
          return _context15.a(2);
        case 1:
          inserted = (_finding$suggestion5 = finding.suggestion) === null || _finding$suggestion5 === void 0 ? void 0 : _finding$suggestion5.new;
          if (!inserted) {
            _context15.n = 5;
            break;
          }
          _context15.p = 2;
          _context15.n = 3;
          return Word.run(/*#__PURE__*/function () {
            var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(context) {
              var results;
              return _regenerator().w(function (_context14) {
                while (1) switch (_context14.n) {
                  case 0:
                    results = context.document.body.search(inserted.slice(0, SEARCH_LIMIT), {
                      matchCase: false
                    });
                    results.load("items");
                    _context14.n = 1;
                    return context.sync();
                  case 1:
                    if (!(results.items.length > 0)) {
                      _context14.n = 2;
                      break;
                    }
                    results.items[0].getTrackedChanges().rejectAll();
                    _context14.n = 2;
                    return context.sync();
                  case 2:
                    return _context14.a(2);
                }
              }, _callee14);
            }));
            return function (_x25) {
              return _ref0.apply(this, arguments);
            };
          }());
        case 3:
          _context15.n = 5;
          break;
        case 4:
          _context15.p = 4;
          _t9 = _context15.v;
          setStatus("Could not undo the tracked change here; reject it from Word's review pane.");
        case 5:
          _context15.n = 6;
          return recordLabel(finding, "dismissed", reason);
        case 6:
          card.style.opacity = "0.5";
          setStatus("Rejected ".concat(findingLabel(finding), ". The agent sees this next turn."));
        case 7:
          return _context15.a(2);
      }
    }, _callee15, null, [[2, 4]]);
  }));
  return _rejectFinding.apply(this, arguments);
}
function dismissFinding(_x14, _x15) {
  return _dismissFinding.apply(this, arguments);
}
function _dismissFinding() {
  _dismissFinding = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(finding, card) {
    var reason;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.n) {
        case 0:
          reason = window.prompt("Reason for dismissing (required):");
          if (reason) {
            _context16.n = 1;
            break;
          }
          return _context16.a(2);
        case 1:
          _context16.n = 2;
          return recordLabel(finding, "dismissed", reason);
        case 2:
          card.style.opacity = "0.5";
          setStatus("Dismissed ".concat(findingLabel(finding), ". The agent sees this next turn."));
        case 3:
          return _context16.a(2);
      }
    }, _callee16);
  }));
  return _dismissFinding.apply(this, arguments);
}
function recordLabel(_x16, _x17, _x18) {
  return _recordLabel.apply(this, arguments);
}
function _recordLabel() {
  _recordLabel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(finding, action, reason) {
    var _t0;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.p = _context17.n) {
        case 0:
          _context17.p = 0;
          _context17.n = 1;
          return post("/labels", {
            session_id: sessionId,
            criterion: findingLabel(finding),
            action: action,
            reason: reason !== null && reason !== void 0 ? reason : null
          });
        case 1:
          _context17.n = 3;
          break;
        case 2:
          _context17.p = 2;
          _t0 = _context17.v;
          setStatus("Label not recorded: ".concat(String(_t0)));
        case 3:
          return _context17.a(2);
      }
    }, _callee17, null, [[0, 2]]);
  }));
  return _recordLabel.apply(this, arguments);
}
function appendBubble(role, text) {
  var bubble = document.createElement("div");
  bubble.className = role === "user" ? "bubble bubble-user" : "bubble bubble-assistant";
  bubble.textContent = text;
  appendCard(bubble);
}
function appendCard(element) {
  var log = document.getElementById("chat-log");
  log.appendChild(element);
  log.scrollTop = log.scrollHeight;
}