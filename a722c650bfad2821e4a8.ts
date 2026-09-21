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
            return function (_x24) {
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
          cards = result.findings.map(function (finding) {
            var card = renderFinding(finding);
            appendCard(card);
            return card;
          });
          if (!(inWord && result.findings.length > 0)) {
            _context4.n = 8;
            break;
          }
          setStatus("Adding suggested edits to the document…");
          _context4.n = 7;
          return applyAllFindings(result.findings);
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
function hasInlineSuggestion(finding) {
  var suggestion = finding.suggestion;
  return Boolean((suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "replace" && suggestion.old && suggestion.new || (suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "insert" && suggestion.after && suggestion.new);
}
function renderFinding(finding) {
  var card = document.createElement("div");
  var severityClass = finding.severity.toLowerCase();
  card.className = "card card-finding card-".concat(severityClass);
  var anchor = finding.clause_anchor ? " \xB7 ".concat(finding.clause_anchor) : "";
  card.innerHTML = "<p class=\"card-title\"><span class=\"severity severity-".concat(severityClass, "\">").concat(finding.severity, "</span>").concat(findingLabel(finding)).concat(anchor, "</p>");
  var suggestion = finding.suggestion;
  var suggestionSection = null;
  if (hasInlineSuggestion(finding) && suggestion) {
    suggestionSection = document.createElement("div");
    suggestionSection.className = "card-section card-section-suggestion";
    var preview = suggestion.kind === "replace" ? "<p class=\"card-body\"><s>".concat(suggestion.old, "</s> \u2192 <b>").concat(suggestion.new, "</b></p>") : "<p class=\"card-body\">Insert: <b>".concat(suggestion.new, "</b></p>");
    suggestionSection.innerHTML = "<span class=\"card-section-label\">Suggestion</span>".concat(preview);
    card.appendChild(suggestionSection);
  } else {
    card.classList.add("card-comment-only");
  }
  var commentSection = document.createElement("div");
  commentSection.className = "card-section card-section-comment";
  var commentBody = "<span class=\"card-section-label\">Comment</span><p class=\"card-body\">".concat(finding.problem, "</p>");
  if (finding.impact) {
    commentBody += "<p class=\"card-body\">".concat(finding.impact, "</p>");
  }
  if ((suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "instruct" && suggestion.instruction) {
    commentBody += "<p class=\"card-body\"><b>".concat(suggestion.instruction, "</b></p>");
  } else if (!suggestionSection && finding.quote) {
    commentBody += "<p class=\"card-body\"><span class=\"card-quote\">\"".concat(finding.quote, "\"</span></p>");
  }
  if (finding.verdict === "PLAUSIBLE") {
    commentBody += "<p class=\"card-note\">Unverified \u2014 raised as a question</p>";
  }
  commentSection.innerHTML = commentBody;
  card.appendChild(commentSection);
  var anchorText = searchAnchor(finding);
  if (inWord && anchorText) {
    card.appendChild(button("Go to clause", function () {
      return selectInDocument(anchorText);
    }));
  }
  if (inWord) {
    if (suggestionSection) {
      var section = suggestionSection;
      section.appendChild(button("Accept", function () {
        return acceptSuggestion(finding, section);
      }));
      section.appendChild(button("Reject", function () {
        return rejectSuggestion(finding, section);
      }));
    }
    commentSection.appendChild(button("Keep", function () {
      return keepComment(finding, commentSection);
    }));
    commentSection.appendChild(button("Remove", function () {
      return removeComment(finding, commentSection);
    }));
  } else {
    card.appendChild(button("Dismiss", function () {
      return dismissFinding(finding, card);
    }));
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
  var _iterator = _createForOfIteratorHelper([["👍 Correct", "accepted"], ["👎 Wrong", "dismissed"]]),
    _step;
  try {
    var _loop = function _loop() {
      var _step$value = _slicedToArray(_step.value, 2),
        label = _step$value[0],
        action = _step$value[1];
      var vote = button(label, function () {
        return recordProfileVerdict(card, extractions, action);
      });
      vote.classList.add("vote");
      card.appendChild(vote);
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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
function selectInDocument(_x8) {
  return _selectInDocument.apply(this, arguments);
}
function _selectInDocument() {
  _selectInDocument = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(text) {
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          _context8.n = 1;
          return Word.run(/*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(context) {
              var _resolveAnchor;
              var body, anchor, results;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    body = context.document.body;
                    body.load("text");
                    _context7.n = 1;
                    return context.sync();
                  case 1:
                    anchor = (_resolveAnchor = resolveAnchor(normalizeWithMap(body.text), text)) !== null && _resolveAnchor !== void 0 ? _resolveAnchor : text;
                    results = body.search(anchor.slice(0, SEARCH_LIMIT), {
                      matchCase: false
                    });
                    results.load("items");
                    _context7.n = 2;
                    return context.sync();
                  case 2:
                    if (!(results.items.length > 0)) {
                      _context7.n = 3;
                      break;
                    }
                    results.items[0].select();
                    _context7.n = 3;
                    return context.sync();
                  case 3:
                    return _context7.a(2);
                }
              }, _callee7);
            }));
            return function (_x25) {
              return _ref6.apply(this, arguments);
            };
          }());
        case 1:
          return _context8.a(2);
      }
    }, _callee8);
  }));
  return _selectInDocument.apply(this, arguments);
}
function planAction(finding) {
  var suggestion = finding.suggestion;
  var comment = commentText(finding);
  if ((suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "replace" && suggestion.old && suggestion.new && suggestion.old.length <= SEARCH_LIMIT && finding.verdict !== "PLAUSIBLE") {
    var oldText = suggestion.old,
      newText = suggestion.new;
    return {
      anchor: oldText,
      kind: "redline",
      buildOoxml: function buildOoxml(rangeText) {
        return redlineOoxml(rangeText, newText, comment);
      }
    };
  }
  if ((suggestion === null || suggestion === void 0 ? void 0 : suggestion.kind) === "insert" && suggestion.after && suggestion.new && finding.verdict !== "PLAUSIBLE") {
    var _newText = suggestion.new;
    return {
      anchor: suggestion.after,
      kind: "insert",
      buildOoxml: function buildOoxml() {
        return insertOnlyOoxml(_newText, comment);
      }
    };
  }
  var anchor = searchAnchor(finding);
  if (anchor) {
    return {
      anchor: anchor,
      kind: "comment",
      buildOoxml: function buildOoxml(rangeText) {
        return commentOnlyOoxml(rangeText, comment);
      }
    };
  }
  return null;
}
var APPLY_PAUSE_MS = 150;
function applyAllFindings(_x9) {
  return _applyAllFindings.apply(this, arguments);
}
function _applyAllFindings() {
  _applyAllFindings = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(findings) {
    var plans, results, total, pending, _t7, _t8;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          plans = findings.map(planAction);
          results = findings.map(function () {
            return "not-found";
          });
          total = plans.filter(function (plan) {
            return plan !== null;
          }).length;
          _context1.p = 1;
          _context1.n = 2;
          return Word.run(/*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(context) {
              var body, doc, searches, applied, index, _searches$index, plan, items, _t4;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.p = _context9.n) {
                  case 0:
                    body = context.document.body;
                    body.load("text");
                    _context9.n = 1;
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
                    _context9.n = 2;
                    return context.sync();
                  case 2:
                    applied = 0;
                    index = 0;
                  case 3:
                    if (!(index < plans.length)) {
                      _context9.n = 10;
                      break;
                    }
                    plan = plans[index];
                    items = (_searches$index = searches[index]) === null || _searches$index === void 0 ? void 0 : _searches$index.items;
                    if (!(!plan || !items || items.length === 0)) {
                      _context9.n = 4;
                      break;
                    }
                    return _context9.a(3, 9);
                  case 4:
                    applied += 1;
                    setStatus("Applying edit ".concat(applied, " of ").concat(total, "\u2026"));
                    items[0].insertOoxml(plan.buildOoxml(items[0].text), plan.kind === "insert" ? Word.InsertLocation.after : Word.InsertLocation.replace);
                    _context9.p = 5;
                    _context9.n = 6;
                    return context.sync();
                  case 6:
                    results[index] = plan.kind;
                    _context9.n = 8;
                    break;
                  case 7:
                    _context9.p = 7;
                    _t4 = _context9.v;
                  case 8:
                    _context9.n = 9;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, APPLY_PAUSE_MS);
                    });
                  case 9:
                    index++;
                    _context9.n = 3;
                    break;
                  case 10:
                    return _context9.a(2);
                }
              }, _callee9, null, [[5, 7]]);
            }));
            return function (_x26) {
              return _ref7.apply(this, arguments);
            };
          }());
        case 2:
          _context1.n = 4;
          break;
        case 3:
          _context1.p = 3;
          _t7 = _context1.v;
        case 4:
          pending = findings.map(function (finding, index) {
            return {
              finding: finding,
              index: index
            };
          }).filter(function (_ref8) {
            var index = _ref8.index;
            return results[index] === "not-found";
          });
          if (!(pending.length === 0)) {
            _context1.n = 5;
            break;
          }
          return _context1.a(2, results);
        case 5:
          setStatus("Adding comments…");
          _context1.p = 6;
          _context1.n = 7;
          return Word.run(/*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(context) {
              var body, doc, anchored, _iterator2, _step2, _anchored$pendingInde, _step2$value, pendingIndex, _step2$value$, finding, index, items, range, _t5, _t6;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.p = _context0.n) {
                  case 0:
                    body = context.document.body;
                    body.load("text");
                    _context0.n = 1;
                    return context.sync();
                  case 1:
                    doc = normalizeWithMap(body.text);
                    anchored = pending.map(function (_ref0) {
                      var _resolveAnchor3;
                      var finding = _ref0.finding;
                      var rawAnchor = searchAnchor(finding);
                      var anchor = rawAnchor ? (_resolveAnchor3 = resolveAnchor(doc, rawAnchor)) !== null && _resolveAnchor3 !== void 0 ? _resolveAnchor3 : rawAnchor : null;
                      return anchor ? body.search(anchor.slice(0, SEARCH_LIMIT), {
                        matchCase: false
                      }) : null;
                    });
                    anchored.forEach(function (collection) {
                      return collection === null || collection === void 0 ? void 0 : collection.load("items,text");
                    });
                    _context0.n = 2;
                    return context.sync();
                  case 2:
                    _iterator2 = _createForOfIteratorHelper(pending.entries());
                    _context0.p = 3;
                    _iterator2.s();
                  case 4:
                    if ((_step2 = _iterator2.n()).done) {
                      _context0.n = 10;
                      break;
                    }
                    _step2$value = _slicedToArray(_step2.value, 2), pendingIndex = _step2$value[0], _step2$value$ = _step2$value[1], finding = _step2$value$.finding, index = _step2$value$.index;
                    items = (_anchored$pendingInde = anchored[pendingIndex]) === null || _anchored$pendingInde === void 0 ? void 0 : _anchored$pendingInde.items;
                    if (!(items && items.length > 0)) {
                      _context0.n = 8;
                      break;
                    }
                    items[0].insertOoxml(commentOnlyOoxml(items[0].text, commentText(finding)), Word.InsertLocation.replace);
                    _context0.p = 5;
                    _context0.n = 6;
                    return context.sync();
                  case 6:
                    results[index] = "comment";
                    return _context0.a(3, 9);
                  case 7:
                    _context0.p = 7;
                    _t5 = _context0.v;
                  case 8:
                    range = body.paragraphs.getFirst().getRange();
                    range.insertComment("".concat(AI_AUTHOR, " \u2014 ").concat(commentText(finding)));
                    results[index] = "user-comment";
                  case 9:
                    _context0.n = 4;
                    break;
                  case 10:
                    _context0.n = 12;
                    break;
                  case 11:
                    _context0.p = 11;
                    _t6 = _context0.v;
                    _iterator2.e(_t6);
                  case 12:
                    _context0.p = 12;
                    _iterator2.f();
                    return _context0.f(12);
                  case 13:
                    _context0.n = 14;
                    return context.sync();
                  case 14:
                    return _context0.a(2);
                }
              }, _callee0, null, [[5, 7], [3, 11, 12, 13]]);
            }));
            return function (_x27) {
              return _ref9.apply(this, arguments);
            };
          }());
        case 7:
          _context1.n = 9;
          break;
        case 8:
          _context1.p = 8;
          _t8 = _context1.v;
        case 9:
          return _context1.a(2, results);
      }
    }, _callee1, null, [[6, 8], [1, 3]]);
  }));
  return _applyAllFindings.apply(this, arguments);
}
function ooxmlTimestamp() {
  return new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
}
function xmlEscape(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function redlineOoxml(oldText, newText, comment) {
  var date = ooxmlTimestamp();
  return ooxmlPackage("<w:del w:id=\"101\" w:author=\"".concat(AI_AUTHOR, "\" w:date=\"").concat(date, "\">\n       <w:r><w:delText xml:space=\"preserve\">").concat(xmlEscape(oldText), "</w:delText></w:r>\n     </w:del>\n     <w:ins w:id=\"102\" w:author=\"").concat(AI_AUTHOR, "\" w:date=\"").concat(date, "\">\n       <w:r><w:t xml:space=\"preserve\">").concat(xmlEscape(newText), "</w:t></w:r>\n     </w:ins>"), comment);
}
function insertOnlyOoxml(newText, comment) {
  var date = ooxmlTimestamp();
  return ooxmlPackage("<w:ins w:id=\"102\" w:author=\"".concat(AI_AUTHOR, "\" w:date=\"").concat(date, "\">\n       <w:r><w:t xml:space=\"preserve\">").concat(xmlEscape(" " + newText), "</w:t></w:r>\n     </w:ins>"), comment);
}
function commentOnlyOoxml(anchorText, comment) {
  return ooxmlPackage("<w:r><w:t xml:space=\"preserve\">".concat(xmlEscape(anchorText), "</w:t></w:r>"), comment);
}
function ooxmlPackage(paragraphInner, comment) {
  var date = ooxmlTimestamp();
  return "<?xml version=\"1.0\" standalone=\"yes\"?>\n<?mso-application progid=\"Word.Document\"?>\n<pkg:package xmlns:pkg=\"http://schemas.microsoft.com/office/2006/xmlPackage\">\n  <pkg:part pkg:name=\"/_rels/.rels\" pkg:contentType=\"application/vnd.openxmlformats-package.relationships+xml\">\n    <pkg:xmlData>\n      <Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\n        <Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\" Target=\"word/document.xml\"/>\n      </Relationships>\n    </pkg:xmlData>\n  </pkg:part>\n  <pkg:part pkg:name=\"/word/_rels/document.xml.rels\" pkg:contentType=\"application/vnd.openxmlformats-package.relationships+xml\">\n    <pkg:xmlData>\n      <Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\n        <Relationship Id=\"rId2\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments\" Target=\"comments.xml\"/>\n      </Relationships>\n    </pkg:xmlData>\n  </pkg:part>\n  <pkg:part pkg:name=\"/word/comments.xml\" pkg:contentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml\">\n    <pkg:xmlData>\n      <w:comments xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">\n        <w:comment w:id=\"1\" w:author=\"".concat(AI_AUTHOR, "\" w:initials=\"AI\" w:date=\"").concat(date, "\">\n          <w:p><w:r><w:t xml:space=\"preserve\">").concat(xmlEscape(comment), "</w:t></w:r></w:p>\n        </w:comment>\n      </w:comments>\n    </pkg:xmlData>\n  </pkg:part>\n  <pkg:part pkg:name=\"/word/document.xml\" pkg:contentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml\">\n    <pkg:xmlData>\n      <w:document xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">\n        <w:body>\n          <w:p>\n            <w:commentRangeStart w:id=\"1\"/>\n            ").concat(paragraphInner, "\n            <w:commentRangeEnd w:id=\"1\"/>\n            <w:r><w:commentReference w:id=\"1\"/></w:r>\n          </w:p>\n        </w:body>\n      </w:document>\n    </pkg:xmlData>\n  </pkg:part>\n</pkg:package>");
}
function markApplied(card, applied) {
  var _card$children$;
  var note = document.createElement("p");
  note.className = "card-note";
  note.textContent = applied === "redline" ? "Redline suggested in the document, attributed to Fuse Legal AI" : applied === "insert" ? "Insertion suggested in the document, attributed to Fuse Legal AI" : applied === "comment" ? "Comment added in the document, attributed to Fuse Legal AI" : applied === "user-comment" ? "Comment added in the document (prefixed Fuse Legal AI)" : "Clause not found in the document";
  card.insertBefore(note, (_card$children$ = card.children[1]) !== null && _card$children$ !== void 0 ? _card$children$ : null);
}
function markSectionDone(section, note) {
  section.classList.add("card-section-done");
  var status = document.createElement("p");
  status.className = "card-note";
  status.textContent = note;
  section.appendChild(status);
}
function resolveTrackedChanges(_x0, _x1) {
  return _resolveTrackedChanges.apply(this, arguments);
}
function _resolveTrackedChanges() {
  _resolveTrackedChanges = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(inserted, accept) {
    var _t9;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          _context11.p = 0;
          _context11.n = 1;
          return Word.run(/*#__PURE__*/function () {
            var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(context) {
              var results, changes;
              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.n) {
                  case 0:
                    results = context.document.body.search(inserted.slice(0, SEARCH_LIMIT), {
                      matchCase: false
                    });
                    results.load("items");
                    _context10.n = 1;
                    return context.sync();
                  case 1:
                    if (!(results.items.length > 0)) {
                      _context10.n = 2;
                      break;
                    }
                    changes = results.items[0].getTrackedChanges();
                    if (accept) {
                      changes.acceptAll();
                    } else {
                      changes.rejectAll();
                    }
                    _context10.n = 2;
                    return context.sync();
                  case 2:
                    return _context10.a(2);
                }
              }, _callee10);
            }));
            return function (_x28) {
              return _ref1.apply(this, arguments);
            };
          }());
        case 1:
          _context11.n = 3;
          break;
        case 2:
          _context11.p = 2;
          _t9 = _context11.v;
          setStatus(accept ? "Could not accept the tracked change here; accept it from Word's review pane." : "Could not undo the tracked change here; reject it from Word's review pane.");
        case 3:
          return _context11.a(2);
      }
    }, _callee11, null, [[0, 2]]);
  }));
  return _resolveTrackedChanges.apply(this, arguments);
}
function acceptSuggestion(_x10, _x11) {
  return _acceptSuggestion.apply(this, arguments);
}
function _acceptSuggestion() {
  _acceptSuggestion = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(finding, section) {
    var _finding$suggestion4;
    var inserted;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          inserted = (_finding$suggestion4 = finding.suggestion) === null || _finding$suggestion4 === void 0 ? void 0 : _finding$suggestion4.new;
          if (!inserted) {
            _context12.n = 1;
            break;
          }
          _context12.n = 1;
          return resolveTrackedChanges(inserted, true);
        case 1:
          _context12.n = 2;
          return recordLabel(finding, "accepted", "suggestion");
        case 2:
          markSectionDone(section, "Suggestion accepted");
          setStatus("Accepted the suggestion for ".concat(findingLabel(finding), ". Recorded for the eval loop."));
        case 3:
          return _context12.a(2);
      }
    }, _callee12);
  }));
  return _acceptSuggestion.apply(this, arguments);
}
function rejectSuggestion(_x12, _x13) {
  return _rejectSuggestion.apply(this, arguments);
}
function _rejectSuggestion() {
  _rejectSuggestion = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(finding, section) {
    var _finding$suggestion5;
    var reason, inserted;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.n) {
        case 0:
          reason = window.prompt("Reason for rejecting the suggestion (required):");
          if (reason) {
            _context13.n = 1;
            break;
          }
          return _context13.a(2);
        case 1:
          inserted = (_finding$suggestion5 = finding.suggestion) === null || _finding$suggestion5 === void 0 ? void 0 : _finding$suggestion5.new;
          if (!inserted) {
            _context13.n = 2;
            break;
          }
          _context13.n = 2;
          return resolveTrackedChanges(inserted, false);
        case 2:
          _context13.n = 3;
          return recordLabel(finding, "dismissed", "suggestion", reason);
        case 3:
          markSectionDone(section, "Suggestion rejected");
          setStatus("Rejected the suggestion for ".concat(findingLabel(finding), ". The agent sees this next turn."));
        case 4:
          return _context13.a(2);
      }
    }, _callee13);
  }));
  return _rejectSuggestion.apply(this, arguments);
}
function keepComment(_x14, _x15) {
  return _keepComment.apply(this, arguments);
}
function _keepComment() {
  _keepComment = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(finding, section) {
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          _context14.n = 1;
          return recordLabel(finding, "accepted", "comment");
        case 1:
          markSectionDone(section, "Comment kept");
          setStatus("Kept the comment for ".concat(findingLabel(finding), ". Recorded for the eval loop."));
        case 2:
          return _context14.a(2);
      }
    }, _callee14);
  }));
  return _keepComment.apply(this, arguments);
}
function removeComment(_x16, _x17) {
  return _removeComment.apply(this, arguments);
}
function _removeComment() {
  _removeComment = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(finding, section) {
    var reason, _t0;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.p = _context16.n) {
        case 0:
          reason = window.prompt("Reason for removing the comment (required):");
          if (reason) {
            _context16.n = 1;
            break;
          }
          return _context16.a(2);
        case 1:
          _context16.p = 1;
          _context16.n = 2;
          return Word.run(/*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(context) {
              var comments, match;
              return _regenerator().w(function (_context15) {
                while (1) switch (_context15.n) {
                  case 0:
                    comments = context.document.body.getRange().getComments();
                    comments.load("items/content");
                    _context15.n = 1;
                    return context.sync();
                  case 1:
                    match = comments.items.find(function (comment) {
                      var _comment$content;
                      return (_comment$content = comment.content) === null || _comment$content === void 0 ? void 0 : _comment$content.includes(findingLabel(finding));
                    });
                    if (!match) {
                      _context15.n = 2;
                      break;
                    }
                    match.delete();
                    _context15.n = 2;
                    return context.sync();
                  case 2:
                    return _context15.a(2);
                }
              }, _callee15);
            }));
            return function (_x29) {
              return _ref10.apply(this, arguments);
            };
          }());
        case 2:
          _context16.n = 4;
          break;
        case 3:
          _context16.p = 3;
          _t0 = _context16.v;
          setStatus("Could not delete the comment here; remove it from Word's review pane.");
        case 4:
          _context16.n = 5;
          return recordLabel(finding, "dismissed", "comment", reason);
        case 5:
          markSectionDone(section, "Comment removed");
          setStatus("Removed the comment for ".concat(findingLabel(finding), ". The agent sees this next turn."));
        case 6:
          return _context16.a(2);
      }
    }, _callee16, null, [[1, 3]]);
  }));
  return _removeComment.apply(this, arguments);
}
function dismissFinding(_x18, _x19) {
  return _dismissFinding.apply(this, arguments);
}
function _dismissFinding() {
  _dismissFinding = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(finding, card) {
    var reason;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.n) {
        case 0:
          reason = window.prompt("Reason for dismissing (required):");
          if (reason) {
            _context17.n = 1;
            break;
          }
          return _context17.a(2);
        case 1:
          _context17.n = 2;
          return recordLabel(finding, "dismissed", "finding", reason);
        case 2:
          card.style.opacity = "0.5";
          setStatus("Dismissed ".concat(findingLabel(finding), ". The agent sees this next turn."));
        case 3:
          return _context17.a(2);
      }
    }, _callee17);
  }));
  return _dismissFinding.apply(this, arguments);
}
function recordLabel(_x20, _x21, _x22, _x23) {
  return _recordLabel.apply(this, arguments);
}
function _recordLabel() {
  _recordLabel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(finding, action, target, reason) {
    var _t1;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.p = _context18.n) {
        case 0:
          _context18.p = 0;
          _context18.n = 1;
          return post("/labels", {
            session_id: sessionId,
            criterion: findingLabel(finding),
            action: action,
            target: target,
            reason: reason !== null && reason !== void 0 ? reason : null
          });
        case 1:
          _context18.n = 3;
          break;
        case 2:
          _context18.p = 2;
          _t1 = _context18.v;
          setStatus("Label not recorded: ".concat(String(_t1)));
        case 3:
          return _context18.a(2);
      }
    }, _callee18, null, [[0, 2]]);
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