function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context) {
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
            return function (_x21) {
              return _ref4.apply(this, arguments);
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
      _live$bubble,
      documentText,
      started,
      live,
      result,
      findings,
      cards,
      outcomes,
      _message,
      _args4 = arguments,
      _t;
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
          live = {
            bubble: null
          };
          _context4.n = 6;
          return pollReview(started.job_id, action, function (partial) {
            typing.remove();
            if (live.bubble === null) {
              live.bubble = appendBubble("assistant", "");
            }
            live.bubble.textContent = partial;
          });
        case 6:
          result = _context4.v;
          (_live$bubble = live.bubble) === null || _live$bubble === void 0 || _live$bubble.remove();
          if (result.reply) {
            appendBubble("assistant", result.reply);
          }
          if (result.extractions.length > 0) {
            appendCard(renderContractProfile(result.extractions));
          }
          findings = _toConsumableArray(result.findings).sort(byClauseOrder);
          cards = findings.map(function (finding) {
            var card = renderFinding(finding);
            appendCard(card);
            return card;
          });
          if (!(inWord && findings.length > 0)) {
            _context4.n = 8;
            break;
          }
          setStatus("Adding suggested edits to the document…");
          _context4.n = 7;
          return applyAllFindings(findings);
        case 7:
          outcomes = _context4.v;
          outcomes.forEach(function (outcome, index) {
            return markApplied(cards[index], outcome);
          });
        case 8:
          setStatus("Ready.");
          _context4.n = 10;
          break;
        case 9:
          _context4.p = 9;
          _t = _context4.v;
          _message = _t instanceof Error ? _t.message : String(_t);
          appendBubble("assistant", "Something went wrong: ".concat(_message, ". Please try again."));
          setStatus("Error — see chat.");
        case 10:
          _context4.p = 10;
          typing.remove();
          busy = false;
          return _context4.f(10);
        case 11:
          return _context4.a(2);
      }
    }, _callee4, null, [[3, 9, 10, 11]]);
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
      onPartial,
      interval,
      consecutiveFailures,
      attempt,
      _ref5,
      _PHASE_LABELS,
      _state$phase,
      state,
      response,
      _state$detail,
      label,
      _args5 = arguments,
      _t2;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          action = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : "review";
          onPartial = _args5.length > 2 ? _args5[2] : undefined;
          interval = action === "chat" ? 1000 : 4000;
          consecutiveFailures = 0;
          attempt = 0;
        case 1:
          if (!(attempt < 300)) {
            _context5.n = 13;
            break;
          }
          _context5.n = 2;
          return new Promise(function (resolve) {
            return setTimeout(resolve, interval);
          });
        case 2:
          state = void 0;
          _context5.p = 3;
          _context5.n = 4;
          return fetch("".concat(API_BASE, "/review/").concat(jobId), {
            headers: {
              "X-Tunnel-Skip-AntiPhishing-Page": "true"
            }
          });
        case 4:
          response = _context5.v;
          if (response.ok) {
            _context5.n = 5;
            break;
          }
          throw new Error("review poll failed (".concat(response.status, ")"));
        case 5:
          _context5.n = 6;
          return response.json();
        case 6:
          state = _context5.v;
          consecutiveFailures = 0;
          _context5.n = 9;
          break;
        case 7:
          _context5.p = 7;
          _t2 = _context5.v;
          consecutiveFailures += 1;
          if (!(consecutiveFailures >= 8)) {
            _context5.n = 8;
            break;
          }
          throw _t2;
        case 8:
          setStatus("Connection hiccup — retrying…");
          return _context5.a(3, 12);
        case 9:
          if (!(state.status === "done" && state.result)) {
            _context5.n = 10;
            break;
          }
          return _context5.a(2, state.result);
        case 10:
          if (!(state.status === "error")) {
            _context5.n = 11;
            break;
          }
          throw new Error((_state$detail = state.detail) !== null && _state$detail !== void 0 ? _state$detail : "review failed");
        case 11:
          if (state.partial && onPartial) {
            onPartial(state.partial);
          }
          label = (_ref5 = (_PHASE_LABELS = PHASE_LABELS[(_state$phase = state.phase) !== null && _state$phase !== void 0 ? _state$phase : ""]) !== null && _PHASE_LABELS !== void 0 ? _PHASE_LABELS : state.phase) !== null && _ref5 !== void 0 ? _ref5 : "working";
          setStatus(action === "review" ? "Review running: ".concat(label, "\u2026") : "The agent is ".concat(label, "\u2026"));
        case 12:
          attempt++;
          _context5.n = 1;
          break;
        case 13:
          throw new Error("the agent timed out");
        case 14:
          return _context5.a(2);
      }
    }, _callee5, null, [[3, 7]]);
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
function renderFinding(finding) {
  var _finding$suggestion;
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
  if (((_finding$suggestion = finding.suggestion) === null || _finding$suggestion === void 0 ? void 0 : _finding$suggestion.kind) === "instruct" && finding.suggestion.instruction) {
    html += "<p class=\"card-body\"><b>".concat(finding.suggestion.instruction, "</b></p>");
  } else if (!hasInlineSuggestion(finding) && finding.quote) {
    html += "<p class=\"card-body\"><span class=\"card-quote\">\"".concat(finding.quote, "\"</span></p>");
  }
  if (finding.verdict === "PLAUSIBLE") {
    html += "<p class=\"card-note\">Unverified \u2014 raised as a question</p>";
  }
  body.innerHTML = html;
  card.appendChild(body);
  if (inWord) {
    card.appendChild(button("Go to clause", function () {
      return goToFinding(finding);
    }));
  }
  if (inWord && hasInlineSuggestion(finding)) {
    var _iterator = _createForOfIteratorHelper([["Accept", function () {
        return acceptSuggestion(finding, card);
      }], ["Reject", function () {
        return rejectSuggestion(finding, card);
      }]]),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          label = _step$value[0],
          handler = _step$value[1];
        var vote = button(label, handler);
        vote.classList.add("vote");
        card.appendChild(vote);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    var dismiss = button("Dismiss", function () {
      return dismissFinding(finding, card);
    });
    dismiss.classList.add("vote");
    card.appendChild(dismiss);
  }
  return card;
}
function searchAnchor(finding) {
  var _ref, _ref2, _ref3, _finding$suggestion$o, _finding$suggestion2, _finding$suggestion3;
  return (_ref = (_ref2 = (_ref3 = (_finding$suggestion$o = (_finding$suggestion2 = finding.suggestion) === null || _finding$suggestion2 === void 0 ? void 0 : _finding$suggestion2.old) !== null && _finding$suggestion$o !== void 0 ? _finding$suggestion$o : finding.quote) !== null && _ref3 !== void 0 ? _ref3 : (_finding$suggestion3 = finding.suggestion) === null || _finding$suggestion3 === void 0 ? void 0 : _finding$suggestion3.after) !== null && _ref2 !== void 0 ? _ref2 : finding.clause_anchor) !== null && _ref !== void 0 ? _ref : null;
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
  var card = document.createElement("div");
  card.className = "card";
  var rows = extractions.map(function (extraction) {
    return "<p class=\"card-body\"><strong>".concat(extraction.field, "</strong>: ").concat(extraction.value, "</p>");
  }).join("");
  var quote = extractions.map(function (extraction) {
    return extraction.quote;
  }).find(function (text) {
    return text;
  });
  card.innerHTML = "<p class=\"card-title\">Contract profile</p>".concat(rows).concat(quote ? "<span class=\"card-quote\">\"".concat(quote, "\"</span>") : "");
  if (inWord && quote) {
    card.appendChild(button("Highlight", function () {
      return selectInDocument(quote);
    }));
  }
  var _iterator2 = _createForOfIteratorHelper([["👍 Correct", "accepted"], ["👎 Wrong", "dismissed"]]),
    _step2;
  try {
    var _loop = function _loop() {
      var _step2$value = _slicedToArray(_step2.value, 2),
        label = _step2$value[0],
        action = _step2$value[1];
      var vote = button(label, function () {
        return recordProfileVerdict(card, extractions, action);
      });
      vote.classList.add("vote");
      card.appendChild(vote);
    };
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return card;
}
function recordProfileVerdict(_x5, _x6, _x7) {
  return _recordProfileVerdict.apply(this, arguments);
}
function _recordProfileVerdict() {
  _recordProfileVerdict = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(card, extractions, action) {
    var reason, _t3;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          reason = null;
          if (!(action === "dismissed")) {
            _context6.n = 1;
            break;
          }
          reason = window.prompt("What did the AI get wrong here?");
          if (reason) {
            _context6.n = 1;
            break;
          }
          return _context6.a(2);
        case 1:
          _context6.p = 1;
          _context6.n = 2;
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
          _context6.n = 4;
          break;
        case 3:
          _context6.p = 3;
          _t3 = _context6.v;
          setStatus("Could not record the rating; it was not saved.");
          return _context6.a(2);
        case 4:
          card.querySelectorAll("button.vote").forEach(function (vote) {
            return vote.remove();
          });
          card.style.opacity = "0.6";
          setStatus(action === "accepted" ? "Profile marked correct — recorded." : "Profile marked wrong — recorded.");
        case 5:
          return _context6.a(2);
      }
    }, _callee6, null, [[1, 3]]);
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
function selectFirstMatch(_x8) {
  return _selectFirstMatch.apply(this, arguments);
}
function _selectFirstMatch() {
  _selectFirstMatch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(candidates) {
    var _t4;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          _context8.n = 1;
          return Word.run(/*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(context) {
              var body, doc, attempts, _iterator3, _step3, _resolveAnchor, candidate, anchor, _i2, _arr, length, _attempt, _i, _attempts, attempt, results;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    body = context.document.body;
                    body.load("text");
                    _context7.n = 1;
                    return context.sync();
                  case 1:
                    doc = normalizeWithMap(body.text);
                    attempts = [];
                    _iterator3 = _createForOfIteratorHelper(candidates);
                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        candidate = _step3.value;
                        anchor = (_resolveAnchor = resolveAnchor(doc, candidate)) !== null && _resolveAnchor !== void 0 ? _resolveAnchor : candidate;
                        for (_i2 = 0, _arr = [SEARCH_LIMIT, 80, 40]; _i2 < _arr.length; _i2++) {
                          length = _arr[_i2];
                          _attempt = anchor.slice(0, length).trim();
                          if (_attempt && !attempts.includes(_attempt)) {
                            attempts.push(_attempt);
                          }
                        }
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }
                    _i = 0, _attempts = attempts;
                  case 2:
                    if (!(_i < _attempts.length)) {
                      _context7.n = 6;
                      break;
                    }
                    attempt = _attempts[_i];
                    results = body.search(attempt, {
                      matchCase: false
                    });
                    results.load("items");
                    _context7.n = 3;
                    return context.sync();
                  case 3:
                    if (!(results.items.length > 0)) {
                      _context7.n = 5;
                      break;
                    }
                    results.items[0].select();
                    _context7.n = 4;
                    return context.sync();
                  case 4:
                    return _context7.a(2, true);
                  case 5:
                    _i++;
                    _context7.n = 2;
                    break;
                  case 6:
                    return _context7.a(2, false);
                }
              }, _callee7);
            }));
            return function (_x22) {
              return _ref6.apply(this, arguments);
            };
          }());
        case 1:
          return _context8.a(2, _context8.v);
        case 2:
          _context8.p = 2;
          _t4 = _context8.v;
          return _context8.a(2, false);
      }
    }, _callee8, null, [[0, 2]]);
  }));
  return _selectFirstMatch.apply(this, arguments);
}
function goToFinding(_x9) {
  return _goToFinding.apply(this, arguments);
}
function _goToFinding() {
  _goToFinding = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(finding) {
    var _finding$suggestion4;
    var candidates, found;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          candidates = [(_finding$suggestion4 = finding.suggestion) === null || _finding$suggestion4 === void 0 ? void 0 : _finding$suggestion4.new, searchAnchor(finding)].filter(function (candidate) {
            return Boolean(candidate);
          });
          _context9.n = 1;
          return selectFirstMatch(candidates);
        case 1:
          found = _context9.v;
          if (!found) {
            setStatus("Couldn't locate this clause in the document.");
          }
        case 2:
          return _context9.a(2);
      }
    }, _callee9);
  }));
  return _goToFinding.apply(this, arguments);
}
function selectInDocument(_x0) {
  return _selectInDocument.apply(this, arguments);
}
function _selectInDocument() {
  _selectInDocument = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(text) {
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          _context0.n = 1;
          return selectFirstMatch([text]);
        case 1:
          return _context0.a(2);
      }
    }, _callee0);
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
function applyAllFindings(_x1) {
  return _applyAllFindings.apply(this, arguments);
}
function _applyAllFindings() {
  _applyAllFindings = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(findings) {
    var plans, results, total, _t6;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          plans = findings.map(planAction);
          results = plans.map(function (plan) {
            return plan === null ? "panel" : "not-found";
          });
          total = plans.filter(function (plan) {
            return plan !== null;
          }).length;
          _context10.p = 1;
          _context10.n = 2;
          return Word.run(/*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(context) {
              var body, doc, searches, applied, index, _searches$index, plan, items, _t5;
              return _regenerator().w(function (_context1) {
                while (1) switch (_context1.p = _context1.n) {
                  case 0:
                    body = context.document.body;
                    body.load("text");
                    _context1.n = 1;
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
                    _context1.n = 2;
                    return context.sync();
                  case 2:
                    applied = 0;
                    index = 0;
                  case 3:
                    if (!(index < plans.length)) {
                      _context1.n = 10;
                      break;
                    }
                    plan = plans[index];
                    items = (_searches$index = searches[index]) === null || _searches$index === void 0 ? void 0 : _searches$index.items;
                    if (!(!plan || !items || items.length === 0)) {
                      _context1.n = 4;
                      break;
                    }
                    return _context1.a(3, 9);
                  case 4:
                    applied += 1;
                    setStatus("Applying edit ".concat(applied, " of ").concat(total, "\u2026"));
                    items[0].insertOoxml(plan.buildOoxml(items[0].text), plan.kind === "insert" ? Word.InsertLocation.after : Word.InsertLocation.replace);
                    _context1.p = 5;
                    _context1.n = 6;
                    return context.sync();
                  case 6:
                    results[index] = plan.kind;
                    _context1.n = 8;
                    break;
                  case 7:
                    _context1.p = 7;
                    _t5 = _context1.v;
                  case 8:
                    _context1.n = 9;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, APPLY_PAUSE_MS);
                    });
                  case 9:
                    index++;
                    _context1.n = 3;
                    break;
                  case 10:
                    return _context1.a(2);
                }
              }, _callee1, null, [[5, 7]]);
            }));
            return function (_x23) {
              return _ref7.apply(this, arguments);
            };
          }());
        case 2:
          _context10.n = 4;
          break;
        case 3:
          _context10.p = 3;
          _t6 = _context10.v;
        case 4:
          return _context10.a(2, results);
      }
    }, _callee10, null, [[1, 3]]);
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
function revertTrackedChanges(_x10) {
  return _revertTrackedChanges.apply(this, arguments);
}
function _revertTrackedChanges() {
  _revertTrackedChanges = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(finding) {
    var _finding$suggestion5, _finding$suggestion6;
    var targets, _t8;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.p = _context12.n) {
        case 0:
          targets = [(_finding$suggestion5 = finding.suggestion) === null || _finding$suggestion5 === void 0 ? void 0 : _finding$suggestion5.new, (_finding$suggestion6 = finding.suggestion) === null || _finding$suggestion6 === void 0 ? void 0 : _finding$suggestion6.old].filter(function (target) {
            return Boolean(target);
          });
          _context12.p = 1;
          _context12.n = 2;
          return Word.run(/*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(context) {
              var body, doc, reverted, _iterator4, _step4, _resolveAnchor3, target, anchor, _i3, _arr2, length, results, _t7;
              return _regenerator().w(function (_context11) {
                while (1) switch (_context11.p = _context11.n) {
                  case 0:
                    body = context.document.body;
                    body.load("text");
                    _context11.n = 1;
                    return context.sync();
                  case 1:
                    doc = normalizeWithMap(body.text);
                    reverted = false;
                    _iterator4 = _createForOfIteratorHelper(targets);
                    _context11.p = 2;
                    _iterator4.s();
                  case 3:
                    if ((_step4 = _iterator4.n()).done) {
                      _context11.n = 9;
                      break;
                    }
                    target = _step4.value;
                    anchor = (_resolveAnchor3 = resolveAnchor(doc, target)) !== null && _resolveAnchor3 !== void 0 ? _resolveAnchor3 : target;
                    _i3 = 0, _arr2 = [SEARCH_LIMIT, 80];
                  case 4:
                    if (!(_i3 < _arr2.length)) {
                      _context11.n = 8;
                      break;
                    }
                    length = _arr2[_i3];
                    results = body.search(anchor.slice(0, length), {
                      matchCase: false
                    });
                    results.load("items");
                    _context11.n = 5;
                    return context.sync();
                  case 5:
                    if (!(results.items.length > 0)) {
                      _context11.n = 7;
                      break;
                    }
                    results.items[0].getTrackedChanges().rejectAll();
                    _context11.n = 6;
                    return context.sync();
                  case 6:
                    reverted = true;
                    return _context11.a(3, 8);
                  case 7:
                    _i3++;
                    _context11.n = 4;
                    break;
                  case 8:
                    _context11.n = 3;
                    break;
                  case 9:
                    _context11.n = 11;
                    break;
                  case 10:
                    _context11.p = 10;
                    _t7 = _context11.v;
                    _iterator4.e(_t7);
                  case 11:
                    _context11.p = 11;
                    _iterator4.f();
                    return _context11.f(11);
                  case 12:
                    return _context11.a(2, reverted);
                }
              }, _callee11, null, [[2, 10, 11, 12]]);
            }));
            return function (_x24) {
              return _ref8.apply(this, arguments);
            };
          }());
        case 2:
          return _context12.a(2, _context12.v);
        case 3:
          _context12.p = 3;
          _t8 = _context12.v;
          return _context12.a(2, false);
      }
    }, _callee12, null, [[1, 3]]);
  }));
  return _revertTrackedChanges.apply(this, arguments);
}
function acceptSuggestion(_x11, _x12) {
  return _acceptSuggestion.apply(this, arguments);
}
function _acceptSuggestion() {
  _acceptSuggestion = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(finding, card) {
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.n) {
        case 0:
          _context13.n = 1;
          return recordLabel(finding, "accepted", "suggestion");
        case 1:
          markSectionDone(card, "Accepted — the tracked change stays in the document for the counterparty");
          setStatus("Accepted the suggestion for ".concat(findingLabel(finding), ". Recorded for the eval loop."));
        case 2:
          return _context13.a(2);
      }
    }, _callee13);
  }));
  return _acceptSuggestion.apply(this, arguments);
}
function rejectSuggestion(_x13, _x14) {
  return _rejectSuggestion.apply(this, arguments);
}
function _rejectSuggestion() {
  _rejectSuggestion = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(finding, card) {
    var reason, reverted;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          reason = window.prompt("Why is this suggestion wrong? (required — this trains the AI)");
          if (reason) {
            _context14.n = 1;
            break;
          }
          return _context14.a(2);
        case 1:
          _context14.n = 2;
          return revertTrackedChanges(finding);
        case 2:
          reverted = _context14.v;
          if (!reverted && hasInlineSuggestion(finding)) {
            setStatus("Could not undo the tracked change automatically; reject it from Word's review pane.");
          }
          _context14.n = 3;
          return recordLabel(finding, "dismissed", "suggestion", reason);
        case 3:
          markSectionDone(card, reverted ? "Rejected — the edit was removed from the document" : "Rejected");
          setStatus("Rejected the suggestion for ".concat(findingLabel(finding), ". The agent sees this next turn."));
        case 4:
          return _context14.a(2);
      }
    }, _callee14);
  }));
  return _rejectSuggestion.apply(this, arguments);
}
function dismissFinding(_x15, _x16) {
  return _dismissFinding.apply(this, arguments);
}
function _dismissFinding() {
  _dismissFinding = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(finding, card) {
    var reason;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.n) {
        case 0:
          reason = window.prompt("Reason for dismissing (required):");
          if (reason) {
            _context15.n = 1;
            break;
          }
          return _context15.a(2);
        case 1:
          _context15.n = 2;
          return recordLabel(finding, "dismissed", "finding", reason);
        case 2:
          markSectionDone(card, "Dismissed");
          card.style.opacity = "0.5";
          setStatus("Dismissed ".concat(findingLabel(finding), ". The agent sees this next turn."));
        case 3:
          return _context15.a(2);
      }
    }, _callee15);
  }));
  return _dismissFinding.apply(this, arguments);
}
function recordLabel(_x17, _x18, _x19, _x20) {
  return _recordLabel.apply(this, arguments);
}
function _recordLabel() {
  _recordLabel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(finding, action, target, reason) {
    var _t9;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.p = _context16.n) {
        case 0:
          _context16.p = 0;
          _context16.n = 1;
          return post("/labels", {
            session_id: sessionId,
            criterion: findingLabel(finding),
            action: action,
            target: target,
            reason: reason !== null && reason !== void 0 ? reason : null
          });
        case 1:
          _context16.n = 3;
          break;
        case 2:
          _context16.p = 2;
          _t9 = _context16.v;
          setStatus("Label not recorded: ".concat(String(_t9)));
        case 3:
          return _context16.a(2);
      }
    }, _callee16, null, [[0, 2]]);
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