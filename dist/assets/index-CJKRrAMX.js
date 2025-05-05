(function () {
	const R = document.createElement("link").relList;
	if (R && R.supports && R.supports("modulepreload")) {
		return;
	}
	for (const H of document.querySelectorAll('link[rel="modulepreload"]')) {
		d(H);
	}
	new MutationObserver((H) => {
		for (const p of H) {
			if (p.type === "childList") {
				for (const J of p.addedNodes) {
					J.tagName === "LINK" && J.rel === "modulepreload" && d(J);
				}
			}
		}
	}).observe(document, { childList: !0, subtree: !0 });
	function D(H) {
		const p = {};
		return (
			H.integrity && (p.integrity = H.integrity),
			H.referrerPolicy && (p.referrerPolicy = H.referrerPolicy),
			H.crossOrigin === "use-credentials"
				? (p.credentials = "include")
				: H.crossOrigin === "anonymous"
					? (p.credentials = "omit")
					: (p.credentials = "same-origin"),
			p
		);
	}
	function d(H) {
		if (H.ep) {
			return;
		}
		H.ep = !0;
		const p = D(H);
		fetch(H.href, p);
	}
})();
var Ic = { exports: {} },
	me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pv;
function Xy() {
	if (Pv) {
		return me;
	}
	Pv = 1;
	var E = Symbol.for("react.transitional.element"),
		R = Symbol.for("react.fragment");
	function D(d, H, p) {
		var J = null;
		if (
			(p !== void 0 && (J = "" + p),
			H.key !== void 0 && (J = "" + H.key),
			"key" in H)
		) {
			p = {};
			for (var tl in H) {
				tl !== "key" && (p[tl] = H[tl]);
			}
		} else {
			p = H;
		}
		return (
			(H = p.ref),
			{ $$typeof: E, type: d, key: J, ref: H !== void 0 ? H : null, props: p }
		);
	}
	return (me.Fragment = R), (me.jsx = D), (me.jsxs = D), me;
}
var ld;
function Qy() {
	return ld || ((ld = 1), (Ic.exports = Xy())), Ic.exports;
}
var ll = Qy(),
	Pc = { exports: {} },
	C = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var td;
function Cy() {
	if (td) {
		return C;
	}
	td = 1;
	var E = Symbol.for("react.transitional.element"),
		R = Symbol.for("react.portal"),
		D = Symbol.for("react.fragment"),
		d = Symbol.for("react.strict_mode"),
		H = Symbol.for("react.profiler"),
		p = Symbol.for("react.consumer"),
		J = Symbol.for("react.context"),
		tl = Symbol.for("react.forward_ref"),
		q = Symbol.for("react.suspense"),
		A = Symbol.for("react.memo"),
		N = Symbol.for("react.lazy"),
		P = Symbol.iterator;
	function W(s) {
		return s === null || typeof s != "object"
			? null
			: ((s = (P && s[P]) || s["@@iterator"]),
				typeof s == "function" ? s : null);
	}
	var Ol = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		Bl = Object.assign,
		dt = {};
	function Gl(s, z, M) {
		(this.props = s),
			(this.context = z),
			(this.refs = dt),
			(this.updater = M || Ol);
	}
	(Gl.prototype.isReactComponent = {}),
		(Gl.prototype.setState = function (s, z) {
			if (typeof s != "object" && typeof s != "function" && s != null) {
				throw Error(
					"takes an object of state variables to update or a function which returns an object of state variables.",
				);
			}
			this.updater.enqueueSetState(this, s, z, "setState");
		}),
		(Gl.prototype.forceUpdate = function (s) {
			this.updater.enqueueForceUpdate(this, s, "forceUpdate");
		});
	function ou() {}
	ou.prototype = Gl.prototype;
	function _t(s, z, M) {
		(this.props = s),
			(this.context = z),
			(this.refs = dt),
			(this.updater = M || Ol);
	}
	var Rl = (_t.prototype = new ou());
	(Rl.constructor = _t), Bl(Rl, Gl.prototype), (Rl.isPureReactComponent = !0);
	var ot = Array.isArray,
		$ = { H: null, A: null, T: null, S: null, V: null },
		Vl = Object.prototype.hasOwnProperty;
	function Ll(s, z, M, _, B, k) {
		return (
			(M = k.ref),
			{ $$typeof: E, type: s, key: z, ref: M !== void 0 ? M : null, props: k }
		);
	}
	function Kl(s, z) {
		return Ll(s.type, z, void 0, void 0, void 0, s.props);
	}
	function St(s) {
		return typeof s == "object" && s !== null && s.$$typeof === E;
	}
	function qu(s) {
		var z = { "=": "=0", ":": "=2" };
		return (
			"$" +
			s.replace(/[=:]/g, function (M) {
				return z[M];
			})
		);
	}
	var Ot = /\/+/g;
	function pl(s, z) {
		return typeof s == "object" && s !== null && s.key != null
			? qu("" + s.key)
			: z.toString(36);
	}
	function yu() {}
	function ru(s) {
		switch (s.status) {
			case "fulfilled":
				return s.value;
			case "rejected":
				throw s.reason;
			default:
				switch (
					(typeof s.status == "string"
						? s.then(yu, yu)
						: ((s.status = "pending"),
							s.then(
								function (z) {
									s.status === "pending" &&
										((s.status = "fulfilled"), (s.value = z));
								},
								function (z) {
									s.status === "pending" &&
										((s.status = "rejected"), (s.reason = z));
								},
							)),
					s.status)
				) {
					case "fulfilled":
						return s.value;
					case "rejected":
						throw s.reason;
				}
		}
		throw s;
	}
	function Nl(s, z, M, _, B) {
		var k = typeof s;
		(k === "undefined" || k === "boolean") && (s = null);
		var Q = !1;
		if (s === null) {
			Q = !0;
		} else {
			switch (k) {
				case "bigint":
				case "string":
				case "number":
					Q = !0;
					break;
				case "object":
					switch (s.$$typeof) {
						case E:
						case R:
							Q = !0;
							break;
						case N:
							return (Q = s._init), Nl(Q(s._payload), z, M, _, B);
					}
			}
		}
		if (Q) {
			return (
				(B = B(s)),
				(Q = _ === "" ? "." + pl(s, 0) : _),
				ot(B)
					? ((M = ""),
						Q != null && (M = Q.replace(Ot, "$&/") + "/"),
						Nl(B, z, M, "", function (Ct) {
							return Ct;
						}))
					: B != null &&
						(St(B) &&
							(B = Kl(
								B,
								M +
									(B.key == null || (s && s.key === B.key)
										? ""
										: ("" + B.key).replace(Ot, "$&/") + "/") +
									Q,
							)),
						z.push(B)),
				1
			);
		}
		Q = 0;
		var Jl = _ === "" ? "." : _ + ":";
		if (ot(s)) {
			for (var vl = 0; vl < s.length; vl++) {
				(_ = s[vl]), (k = Jl + pl(_, vl)), (Q += Nl(_, z, M, k, B));
			}
		} else if (((vl = W(s)), typeof vl == "function")) {
			for (s = vl.call(s), vl = 0; !(_ = s.next()).done; ) {
				(_ = _.value), (k = Jl + pl(_, vl++)), (Q += Nl(_, z, M, k, B));
			}
		} else if (k === "object") {
			if (typeof s.then == "function") {
				return Nl(ru(s), z, M, _, B);
			}
			throw (
				((z = String(s)),
				Error(
					"Objects are not valid as a React child (found: " +
						(z === "[object Object]"
							? "object with keys {" + Object.keys(s).join(", ") + "}"
							: z) +
						"). If you meant to render a collection of children, use an array instead.",
				))
			);
		}
		return Q;
	}
	function g(s, z, M) {
		if (s == null) {
			return s;
		}
		var _ = [],
			B = 0;
		return (
			Nl(s, _, "", "", function (k) {
				return z.call(M, k, B++);
			}),
			_
		);
	}
	function O(s) {
		if (s._status === -1) {
			var z = s._result;
			(z = z()),
				z.then(
					function (M) {
						(s._status === 0 || s._status === -1) &&
							((s._status = 1), (s._result = M));
					},
					function (M) {
						(s._status === 0 || s._status === -1) &&
							((s._status = 2), (s._result = M));
					},
				),
				s._status === -1 && ((s._status = 0), (s._result = z));
		}
		if (s._status === 1) {
			return s._result.default;
		}
		throw s._result;
	}
	var j =
		typeof reportError == "function"
			? reportError
			: function (s) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var z = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof s == "object" &&
								s !== null &&
								typeof s.message == "string"
									? String(s.message)
									: String(s),
							error: s,
						});
						if (!window.dispatchEvent(z)) {
							return;
						}
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", s);
						return;
					}
					console.error(s);
				};
	function cl() {}
	return (
		(C.Children = {
			map: g,
			forEach: function (s, z, M) {
				g(
					s,
					function () {
						z.apply(this, arguments);
					},
					M,
				);
			},
			count: function (s) {
				var z = 0;
				return (
					g(s, function () {
						z++;
					}),
					z
				);
			},
			toArray: function (s) {
				return (
					g(s, function (z) {
						return z;
					}) || []
				);
			},
			only: function (s) {
				if (!St(s)) {
					throw Error(
						"React.Children.only expected to receive a single React element child.",
					);
				}
				return s;
			},
		}),
		(C.Component = Gl),
		(C.Fragment = D),
		(C.Profiler = H),
		(C.PureComponent = _t),
		(C.StrictMode = d),
		(C.Suspense = q),
		(C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
		(C.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (s) {
				return $.H.useMemoCache(s);
			},
		}),
		(C.cache = function (s) {
			return function () {
				return s.apply(null, arguments);
			};
		}),
		(C.cloneElement = function (s, z, M) {
			if (s == null) {
				throw Error(
					"The argument must be a React element, but you passed " + s + ".",
				);
			}
			var _ = Bl({}, s.props),
				B = s.key,
				k = void 0;
			if (z != null) {
				for (Q in (z.ref !== void 0 && (k = void 0),
				z.key !== void 0 && (B = "" + z.key),
				z)) {
					!Vl.call(z, Q) ||
						Q === "key" ||
						Q === "__self" ||
						Q === "__source" ||
						(Q === "ref" && z.ref === void 0) ||
						(_[Q] = z[Q]);
				}
			}
			var Q = arguments.length - 2;
			if (Q === 1) {
				_.children = M;
			} else if (1 < Q) {
				for (var Jl = Array(Q), vl = 0; vl < Q; vl++) {
					Jl[vl] = arguments[vl + 2];
				}
				_.children = Jl;
			}
			return Ll(s.type, B, void 0, void 0, k, _);
		}),
		(C.createContext = function (s) {
			return (
				(s = {
					$$typeof: J,
					_currentValue: s,
					_currentValue2: s,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(s.Provider = s),
				(s.Consumer = { $$typeof: p, _context: s }),
				s
			);
		}),
		(C.createElement = function (s, z, M) {
			var _,
				B = {},
				k = null;
			if (z != null) {
				for (_ in (z.key !== void 0 && (k = "" + z.key), z)) {
					Vl.call(z, _) &&
						_ !== "key" &&
						_ !== "__self" &&
						_ !== "__source" &&
						(B[_] = z[_]);
				}
			}
			var Q = arguments.length - 2;
			if (Q === 1) {
				B.children = M;
			} else if (1 < Q) {
				for (var Jl = Array(Q), vl = 0; vl < Q; vl++) {
					Jl[vl] = arguments[vl + 2];
				}
				B.children = Jl;
			}
			if (s && s.defaultProps) {
				for (_ in ((Q = s.defaultProps), Q)) {
					B[_] === void 0 && (B[_] = Q[_]);
				}
			}
			return Ll(s, k, void 0, void 0, null, B);
		}),
		(C.createRef = function () {
			return { current: null };
		}),
		(C.forwardRef = function (s) {
			return { $$typeof: tl, render: s };
		}),
		(C.isValidElement = St),
		(C.lazy = function (s) {
			return { $$typeof: N, _payload: { _status: -1, _result: s }, _init: O };
		}),
		(C.memo = function (s, z) {
			return { $$typeof: A, type: s, compare: z === void 0 ? null : z };
		}),
		(C.startTransition = function (s) {
			var z = $.T,
				M = {};
			$.T = M;
			try {
				var _ = s(),
					B = $.S;
				B !== null && B(M, _),
					typeof _ == "object" &&
						_ !== null &&
						typeof _.then == "function" &&
						_.then(cl, j);
			} catch (k) {
				j(k);
			} finally {
				$.T = z;
			}
		}),
		(C.unstable_useCacheRefresh = function () {
			return $.H.useCacheRefresh();
		}),
		(C.use = function (s) {
			return $.H.use(s);
		}),
		(C.useActionState = function (s, z, M) {
			return $.H.useActionState(s, z, M);
		}),
		(C.useCallback = function (s, z) {
			return $.H.useCallback(s, z);
		}),
		(C.useContext = function (s) {
			return $.H.useContext(s);
		}),
		(C.useDebugValue = function () {}),
		(C.useDeferredValue = function (s, z) {
			return $.H.useDeferredValue(s, z);
		}),
		(C.useEffect = function (s, z, M) {
			var _ = $.H;
			if (typeof M == "function") {
				throw Error(
					"useEffect CRUD overload is not enabled in this build of React.",
				);
			}
			return _.useEffect(s, z);
		}),
		(C.useId = function () {
			return $.H.useId();
		}),
		(C.useImperativeHandle = function (s, z, M) {
			return $.H.useImperativeHandle(s, z, M);
		}),
		(C.useInsertionEffect = function (s, z) {
			return $.H.useInsertionEffect(s, z);
		}),
		(C.useLayoutEffect = function (s, z) {
			return $.H.useLayoutEffect(s, z);
		}),
		(C.useMemo = function (s, z) {
			return $.H.useMemo(s, z);
		}),
		(C.useOptimistic = function (s, z) {
			return $.H.useOptimistic(s, z);
		}),
		(C.useReducer = function (s, z, M) {
			return $.H.useReducer(s, z, M);
		}),
		(C.useRef = function (s) {
			return $.H.useRef(s);
		}),
		(C.useState = function (s) {
			return $.H.useState(s);
		}),
		(C.useSyncExternalStore = function (s, z, M) {
			return $.H.useSyncExternalStore(s, z, M);
		}),
		(C.useTransition = function () {
			return $.H.useTransition();
		}),
		(C.version = "19.1.0"),
		C
	);
}
var ud;
function fi() {
	return ud || ((ud = 1), (Pc.exports = Cy())), Pc.exports;
}
var mt = fi(),
	li = { exports: {} },
	Se = {},
	ti = { exports: {} },
	ui = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad;
function Zy() {
	return (
		ad ||
			((ad = 1),
			(function (E) {
				function R(g, O) {
					var j = g.length;
					g.push(O);
					l: for (; 0 < j; ) {
						var cl = (j - 1) >>> 1,
							s = g[cl];
						if (0 < H(s, O)) {
							(g[cl] = O), (g[j] = s), (j = cl);
						} else {
							break l;
						}
					}
				}
				function D(g) {
					return g.length === 0 ? null : g[0];
				}
				function d(g) {
					if (g.length === 0) {
						return null;
					}
					var O = g[0],
						j = g.pop();
					if (j !== O) {
						g[0] = j;
						l: for (var cl = 0, s = g.length, z = s >>> 1; cl < z; ) {
							var M = 2 * (cl + 1) - 1,
								_ = g[M],
								B = M + 1,
								k = g[B];
							if (0 > H(_, j)) {
								B < s && 0 > H(k, _)
									? ((g[cl] = k), (g[B] = j), (cl = B))
									: ((g[cl] = _), (g[M] = j), (cl = M));
							} else if (B < s && 0 > H(k, j)) {
								(g[cl] = k), (g[B] = j), (cl = B);
							} else {
								break l;
							}
						}
					}
					return O;
				}
				function H(g, O) {
					var j = g.sortIndex - O.sortIndex;
					return j !== 0 ? j : g.id - O.id;
				}
				if (
					((E.unstable_now = void 0),
					typeof performance == "object" &&
						typeof performance.now == "function")
				) {
					var p = performance;
					E.unstable_now = function () {
						return p.now();
					};
				} else {
					var J = Date,
						tl = J.now();
					E.unstable_now = function () {
						return J.now() - tl;
					};
				}
				var q = [],
					A = [],
					N = 1,
					P = null,
					W = 3,
					Ol = !1,
					Bl = !1,
					dt = !1,
					Gl = !1,
					ou = typeof setTimeout == "function" ? setTimeout : null,
					_t = typeof clearTimeout == "function" ? clearTimeout : null,
					Rl = typeof setImmediate < "u" ? setImmediate : null;
				function ot(g) {
					for (var O = D(A); O !== null; ) {
						if (O.callback === null) {
							d(A);
						} else if (O.startTime <= g) {
							d(A), (O.sortIndex = O.expirationTime), R(q, O);
						} else {
							break;
						}
						O = D(A);
					}
				}
				function $(g) {
					if (((dt = !1), ot(g), !Bl)) {
						if (D(q) !== null) {
							(Bl = !0), Vl || ((Vl = !0), pl());
						} else {
							var O = D(A);
							O !== null && Nl($, O.startTime - g);
						}
					}
				}
				var Vl = !1,
					Ll = -1,
					Kl = 5,
					St = -1;
				function qu() {
					return Gl ? !0 : !(E.unstable_now() - St < Kl);
				}
				function Ot() {
					if (((Gl = !1), Vl)) {
						var g = E.unstable_now();
						St = g;
						var O = !0;
						try {
							l: {
								(Bl = !1), dt && ((dt = !1), _t(Ll), (Ll = -1)), (Ol = !0);
								var j = W;
								try {
									t: {
										for (
											ot(g), P = D(q);
											P !== null && !(P.expirationTime > g && qu());

										) {
											var cl = P.callback;
											if (typeof cl == "function") {
												(P.callback = null), (W = P.priorityLevel);
												var s = cl(P.expirationTime <= g);
												if (((g = E.unstable_now()), typeof s == "function")) {
													(P.callback = s), ot(g), (O = !0);
													break t;
												}
												P === D(q) && d(q), ot(g);
											} else {
												d(q);
											}
											P = D(q);
										}
										if (P !== null) {
											O = !0;
										} else {
											var z = D(A);
											z !== null && Nl($, z.startTime - g), (O = !1);
										}
									}
									break l;
								} finally {
									(P = null), (W = j), (Ol = !1);
								}
								O = void 0;
							}
						} finally {
							O ? pl() : (Vl = !1);
						}
					}
				}
				var pl;
				if (typeof Rl == "function") {
					pl = function () {
						Rl(Ot);
					};
				} else if (typeof MessageChannel < "u") {
					var yu = new MessageChannel(),
						ru = yu.port2;
					(yu.port1.onmessage = Ot),
						(pl = function () {
							ru.postMessage(null);
						});
				} else {
					pl = function () {
						ou(Ot, 0);
					};
				}
				function Nl(g, O) {
					Ll = ou(function () {
						g(E.unstable_now());
					}, O);
				}
				(E.unstable_IdlePriority = 5),
					(E.unstable_ImmediatePriority = 1),
					(E.unstable_LowPriority = 4),
					(E.unstable_NormalPriority = 3),
					(E.unstable_Profiling = null),
					(E.unstable_UserBlockingPriority = 2),
					(E.unstable_cancelCallback = function (g) {
						g.callback = null;
					}),
					(E.unstable_forceFrameRate = function (g) {
						0 > g || 125 < g
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
								)
							: (Kl = 0 < g ? Math.floor(1e3 / g) : 5);
					}),
					(E.unstable_getCurrentPriorityLevel = function () {
						return W;
					}),
					(E.unstable_next = function (g) {
						switch (W) {
							case 1:
							case 2:
							case 3:
								var O = 3;
								break;
							default:
								O = W;
						}
						var j = W;
						W = O;
						try {
							return g();
						} finally {
							W = j;
						}
					}),
					(E.unstable_requestPaint = function () {
						Gl = !0;
					}),
					(E.unstable_runWithPriority = function (g, O) {
						switch (g) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								g = 3;
						}
						var j = W;
						W = g;
						try {
							return O();
						} finally {
							W = j;
						}
					}),
					(E.unstable_scheduleCallback = function (g, O, j) {
						var cl = E.unstable_now();
						switch (
							(typeof j == "object" && j !== null
								? ((j = j.delay),
									(j = typeof j == "number" && 0 < j ? cl + j : cl))
								: (j = cl),
							g)
						) {
							case 1:
								var s = -1;
								break;
							case 2:
								s = 250;
								break;
							case 5:
								s = 1073741823;
								break;
							case 4:
								s = 1e4;
								break;
							default:
								s = 5e3;
						}
						return (
							(s = j + s),
							(g = {
								id: N++,
								callback: O,
								priorityLevel: g,
								startTime: j,
								expirationTime: s,
								sortIndex: -1,
							}),
							j > cl
								? ((g.sortIndex = j),
									R(A, g),
									D(q) === null &&
										g === D(A) &&
										(dt ? (_t(Ll), (Ll = -1)) : (dt = !0), Nl($, j - cl)))
								: ((g.sortIndex = s),
									R(q, g),
									Bl || Ol || ((Bl = !0), Vl || ((Vl = !0), pl()))),
							g
						);
					}),
					(E.unstable_shouldYield = qu),
					(E.unstable_wrapCallback = function (g) {
						var O = W;
						return function () {
							var j = W;
							W = O;
							try {
								return g.apply(this, arguments);
							} finally {
								W = j;
							}
						};
					});
			})(ui)),
		ui
	);
}
var ed;
function Vy() {
	return ed || ((ed = 1), (ti.exports = Zy())), ti.exports;
}
var ai = { exports: {} },
	Yl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function Ly() {
	if (nd) {
		return Yl;
	}
	nd = 1;
	var E = fi();
	function R(q) {
		var A = "https://react.dev/errors/" + q;
		if (1 < arguments.length) {
			A += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var N = 2; N < arguments.length; N++) {
				A += "&args[]=" + encodeURIComponent(arguments[N]);
			}
		}
		return (
			"Minified React error #" +
			q +
			"; visit " +
			A +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function D() {}
	var d = {
			d: {
				f: D,
				r: function () {
					throw Error(R(522));
				},
				D,
				C: D,
				L: D,
				m: D,
				X: D,
				S: D,
				M: D,
			},
			p: 0,
			findDOMNode: null,
		},
		H = Symbol.for("react.portal");
	function p(q, A, N) {
		var P =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: H,
			key: P == null ? null : "" + P,
			children: q,
			containerInfo: A,
			implementation: N,
		};
	}
	var J = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function tl(q, A) {
		if (q === "font") {
			return "";
		}
		if (typeof A == "string") {
			return A === "use-credentials" ? A : "";
		}
	}
	return (
		(Yl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
		(Yl.createPortal = function (q, A) {
			var N =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!A || (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)) {
				throw Error(R(299));
			}
			return p(q, A, null, N);
		}),
		(Yl.flushSync = function (q) {
			var A = J.T,
				N = d.p;
			try {
				if (((J.T = null), (d.p = 2), q)) {
					return q();
				}
			} finally {
				(J.T = A), (d.p = N), d.d.f();
			}
		}),
		(Yl.preconnect = function (q, A) {
			typeof q == "string" &&
				(A
					? ((A = A.crossOrigin),
						(A =
							typeof A == "string"
								? A === "use-credentials"
									? A
									: ""
								: void 0))
					: (A = null),
				d.d.C(q, A));
		}),
		(Yl.prefetchDNS = function (q) {
			typeof q == "string" && d.d.D(q);
		}),
		(Yl.preinit = function (q, A) {
			if (typeof q == "string" && A && typeof A.as == "string") {
				var N = A.as,
					P = tl(N, A.crossOrigin),
					W = typeof A.integrity == "string" ? A.integrity : void 0,
					Ol = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
				N === "style"
					? d.d.S(q, typeof A.precedence == "string" ? A.precedence : void 0, {
							crossOrigin: P,
							integrity: W,
							fetchPriority: Ol,
						})
					: N === "script" &&
						d.d.X(q, {
							crossOrigin: P,
							integrity: W,
							fetchPriority: Ol,
							nonce: typeof A.nonce == "string" ? A.nonce : void 0,
						});
			}
		}),
		(Yl.preinitModule = function (q, A) {
			if (typeof q == "string") {
				if (typeof A == "object" && A !== null) {
					if (A.as == null || A.as === "script") {
						var N = tl(A.as, A.crossOrigin);
						d.d.M(q, {
							crossOrigin: N,
							integrity: typeof A.integrity == "string" ? A.integrity : void 0,
							nonce: typeof A.nonce == "string" ? A.nonce : void 0,
						});
					}
				} else {
					A == null && d.d.M(q);
				}
			}
		}),
		(Yl.preload = function (q, A) {
			if (
				typeof q == "string" &&
				typeof A == "object" &&
				A !== null &&
				typeof A.as == "string"
			) {
				var N = A.as,
					P = tl(N, A.crossOrigin);
				d.d.L(q, N, {
					crossOrigin: P,
					integrity: typeof A.integrity == "string" ? A.integrity : void 0,
					nonce: typeof A.nonce == "string" ? A.nonce : void 0,
					type: typeof A.type == "string" ? A.type : void 0,
					fetchPriority:
						typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
					referrerPolicy:
						typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
					imageSrcSet:
						typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
					imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
					media: typeof A.media == "string" ? A.media : void 0,
				});
			}
		}),
		(Yl.preloadModule = function (q, A) {
			if (typeof q == "string") {
				if (A) {
					var N = tl(A.as, A.crossOrigin);
					d.d.m(q, {
						as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
						crossOrigin: N,
						integrity: typeof A.integrity == "string" ? A.integrity : void 0,
					});
				} else {
					d.d.m(q);
				}
			}
		}),
		(Yl.requestFormReset = function (q) {
			d.d.r(q);
		}),
		(Yl.unstable_batchedUpdates = function (q, A) {
			return q(A);
		}),
		(Yl.useFormState = function (q, A, N) {
			return J.H.useFormState(q, A, N);
		}),
		(Yl.useFormStatus = function () {
			return J.H.useHostTransitionStatus();
		}),
		(Yl.version = "19.1.0"),
		Yl
	);
}
var fd;
function Ky() {
	if (fd) {
		return ai.exports;
	}
	fd = 1;
	function E() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		) {
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
			} catch (R) {
				console.error(R);
			}
		}
	}
	return E(), (ai.exports = Ly()), ai.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cd;
function Jy() {
	if (cd) {
		return Se;
	}
	cd = 1;
	var E = Vy(),
		R = fi(),
		D = Ky();
	function d(l) {
		var t = "https://react.dev/errors/" + l;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var u = 2; u < arguments.length; u++) {
				t += "&args[]=" + encodeURIComponent(arguments[u]);
			}
		}
		return (
			"Minified React error #" +
			l +
			"; visit " +
			t +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function H(l) {
		return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
	}
	function p(l) {
		var t = l,
			u = l;
		if (l.alternate) {
			for (; t.return; ) {
				t = t.return;
			}
		} else {
			l = t;
			do {
				(t = l), (t.flags & 4098) !== 0 && (u = t.return), (l = t.return);
			} while (l);
		}
		return t.tag === 3 ? u : null;
	}
	function J(l) {
		if (l.tag === 13) {
			var t = l.memoizedState;
			if (
				(t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
				t !== null)
			) {
				return t.dehydrated;
			}
		}
		return null;
	}
	function tl(l) {
		if (p(l) !== l) {
			throw Error(d(188));
		}
	}
	function q(l) {
		var t = l.alternate;
		if (!t) {
			if (((t = p(l)), t === null)) {
				throw Error(d(188));
			}
			return t !== l ? null : l;
		}
		for (var u = l, a = t; ; ) {
			var e = u.return;
			if (e === null) {
				break;
			}
			var n = e.alternate;
			if (n === null) {
				if (((a = e.return), a !== null)) {
					u = a;
					continue;
				}
				break;
			}
			if (e.child === n.child) {
				for (n = e.child; n; ) {
					if (n === u) {
						return tl(e), l;
					}
					if (n === a) {
						return tl(e), t;
					}
					n = n.sibling;
				}
				throw Error(d(188));
			}
			if (u.return !== a.return) {
				(u = e), (a = n);
			} else {
				for (var f = !1, c = e.child; c; ) {
					if (c === u) {
						(f = !0), (u = e), (a = n);
						break;
					}
					if (c === a) {
						(f = !0), (a = e), (u = n);
						break;
					}
					c = c.sibling;
				}
				if (!f) {
					for (c = n.child; c; ) {
						if (c === u) {
							(f = !0), (u = n), (a = e);
							break;
						}
						if (c === a) {
							(f = !0), (a = n), (u = e);
							break;
						}
						c = c.sibling;
					}
					if (!f) {
						throw Error(d(189));
					}
				}
			}
			if (u.alternate !== a) {
				throw Error(d(190));
			}
		}
		if (u.tag !== 3) {
			throw Error(d(188));
		}
		return u.stateNode.current === u ? l : t;
	}
	function A(l) {
		var t = l.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) {
			return l;
		}
		for (l = l.child; l !== null; ) {
			if (((t = A(l)), t !== null)) {
				return t;
			}
			l = l.sibling;
		}
		return null;
	}
	var N = Object.assign,
		P = Symbol.for("react.element"),
		W = Symbol.for("react.transitional.element"),
		Ol = Symbol.for("react.portal"),
		Bl = Symbol.for("react.fragment"),
		dt = Symbol.for("react.strict_mode"),
		Gl = Symbol.for("react.profiler"),
		ou = Symbol.for("react.provider"),
		_t = Symbol.for("react.consumer"),
		Rl = Symbol.for("react.context"),
		ot = Symbol.for("react.forward_ref"),
		$ = Symbol.for("react.suspense"),
		Vl = Symbol.for("react.suspense_list"),
		Ll = Symbol.for("react.memo"),
		Kl = Symbol.for("react.lazy"),
		St = Symbol.for("react.activity"),
		qu = Symbol.for("react.memo_cache_sentinel"),
		Ot = Symbol.iterator;
	function pl(l) {
		return l === null || typeof l != "object"
			? null
			: ((l = (Ot && l[Ot]) || l["@@iterator"]),
				typeof l == "function" ? l : null);
	}
	var yu = Symbol.for("react.client.reference");
	function ru(l) {
		if (l == null) {
			return null;
		}
		if (typeof l == "function") {
			return l.$$typeof === yu ? null : l.displayName || l.name || null;
		}
		if (typeof l == "string") {
			return l;
		}
		switch (l) {
			case Bl:
				return "Fragment";
			case Gl:
				return "Profiler";
			case dt:
				return "StrictMode";
			case $:
				return "Suspense";
			case Vl:
				return "SuspenseList";
			case St:
				return "Activity";
		}
		if (typeof l == "object") {
			switch (l.$$typeof) {
				case Ol:
					return "Portal";
				case Rl:
					return (l.displayName || "Context") + ".Provider";
				case _t:
					return (l._context.displayName || "Context") + ".Consumer";
				case ot:
					var t = l.render;
					return (
						(l = l.displayName),
						l ||
							((l = t.displayName || t.name || ""),
							(l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
						l
					);
				case Ll:
					return (
						(t = l.displayName || null), t !== null ? t : ru(l.type) || "Memo"
					);
				case Kl:
					(t = l._payload), (l = l._init);
					try {
						return ru(l(t));
					} catch {}
			}
		}
		return null;
	}
	var Nl = Array.isArray,
		g = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		O = D.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		j = { pending: !1, data: null, method: null, action: null },
		cl = [],
		s = -1;
	function z(l) {
		return { current: l };
	}
	function M(l) {
		0 > s || ((l.current = cl[s]), (cl[s] = null), s--);
	}
	function _(l, t) {
		s++, (cl[s] = l.current), (l.current = t);
	}
	var B = z(null),
		k = z(null),
		Q = z(null),
		Jl = z(null);
	function vl(l, t) {
		switch ((_(Q, t), _(k, l), _(B, null), t.nodeType)) {
			case 9:
			case 11:
				l = (l = t.documentElement) && (l = l.namespaceURI) ? Dv(l) : 0;
				break;
			default:
				if (((l = t.tagName), (t = t.namespaceURI))) {
					(t = Dv(t)), (l = Uv(t, l));
				} else {
					switch (l) {
						case "svg":
							l = 1;
							break;
						case "math":
							l = 2;
							break;
						default:
							l = 0;
					}
				}
		}
		M(B), _(B, l);
	}
	function Ct() {
		M(B), M(k), M(Q);
	}
	function xn(l) {
		l.memoizedState !== null && _(Jl, l);
		var t = B.current,
			u = Uv(t, l.type);
		t !== u && (_(k, l), _(B, u));
	}
	function ge(l) {
		k.current === l && (M(B), M(k)),
			Jl.current === l && (M(Jl), (de._currentValue = j));
	}
	var Gn = Object.prototype.hasOwnProperty,
		jn = E.unstable_scheduleCallback,
		Xn = E.unstable_cancelCallback,
		md = E.unstable_shouldYield,
		Sd = E.unstable_requestPaint,
		gt = E.unstable_now,
		gd = E.unstable_getCurrentPriorityLevel,
		ci = E.unstable_ImmediatePriority,
		ii = E.unstable_UserBlockingPriority,
		be = E.unstable_NormalPriority,
		bd = E.unstable_LowPriority,
		si = E.unstable_IdlePriority,
		Td = E.log,
		Ed = E.unstable_setDisableYieldValue,
		ba = null,
		wl = null;
	function Zt(l) {
		if (
			(typeof Td == "function" && Ed(l),
			wl && typeof wl.setStrictMode == "function")
		) {
			try {
				wl.setStrictMode(ba, l);
			} catch {}
		}
	}
	var Wl = Math.clz32 ? Math.clz32 : _d,
		Ad = Math.log,
		zd = Math.LN2;
	function _d(l) {
		return (l >>>= 0), l === 0 ? 32 : (31 - ((Ad(l) / zd) | 0)) | 0;
	}
	var Te = 256,
		Ee = 4194304;
	function hu(l) {
		var t = l & 42;
		if (t !== 0) {
			return t;
		}
		switch (l & -l) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return l & 4194048;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return l & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return l;
		}
	}
	function Ae(l, t, u) {
		var a = l.pendingLanes;
		if (a === 0) {
			return 0;
		}
		var e = 0,
			n = l.suspendedLanes,
			f = l.pingedLanes;
		l = l.warmLanes;
		var c = a & 134217727;
		return (
			c !== 0
				? ((a = c & ~n),
					a !== 0
						? (e = hu(a))
						: ((f &= c),
							f !== 0
								? (e = hu(f))
								: u || ((u = c & ~l), u !== 0 && (e = hu(u)))))
				: ((c = a & ~n),
					c !== 0
						? (e = hu(c))
						: f !== 0
							? (e = hu(f))
							: u || ((u = a & ~l), u !== 0 && (e = hu(u)))),
			e === 0
				? 0
				: t !== 0 &&
					  t !== e &&
					  (t & n) === 0 &&
					  ((n = e & -e),
					  (u = t & -t),
					  n >= u || (n === 32 && (u & 4194048) !== 0))
					? t
					: e
		);
	}
	function Ta(l, t) {
		return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
	}
	function Od(l, t) {
		switch (l) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function vi() {
		var l = Te;
		return (Te <<= 1), (Te & 4194048) === 0 && (Te = 256), l;
	}
	function di() {
		var l = Ee;
		return (Ee <<= 1), (Ee & 62914560) === 0 && (Ee = 4194304), l;
	}
	function Qn(l) {
		for (var t = [], u = 0; 31 > u; u++) {
			t.push(l);
		}
		return t;
	}
	function Ea(l, t) {
		(l.pendingLanes |= t),
			t !== 268435456 &&
				((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
	}
	function Md(l, t, u, a, e, n) {
		var f = l.pendingLanes;
		(l.pendingLanes = u),
			(l.suspendedLanes = 0),
			(l.pingedLanes = 0),
			(l.warmLanes = 0),
			(l.expiredLanes &= u),
			(l.entangledLanes &= u),
			(l.errorRecoveryDisabledLanes &= u),
			(l.shellSuspendCounter = 0);
		var c = l.entanglements,
			i = l.expirationTimes,
			r = l.hiddenUpdates;
		for (u = f & ~u; 0 < u; ) {
			var S = 31 - Wl(u),
				T = 1 << S;
			(c[S] = 0), (i[S] = -1);
			var h = r[S];
			if (h !== null) {
				for (r[S] = null, S = 0; S < h.length; S++) {
					var m = h[S];
					m !== null && (m.lane &= -536870913);
				}
			}
			u &= ~T;
		}
		a !== 0 && oi(l, a, 0),
			n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
	}
	function oi(l, t, u) {
		(l.pendingLanes |= t), (l.suspendedLanes &= ~t);
		var a = 31 - Wl(t);
		(l.entangledLanes |= t),
			(l.entanglements[a] = l.entanglements[a] | 1073741824 | (u & 4194090));
	}
	function yi(l, t) {
		var u = (l.entangledLanes |= t);
		for (l = l.entanglements; u; ) {
			var a = 31 - Wl(u),
				e = 1 << a;
			(e & t) | (l[a] & t) && (l[a] |= t), (u &= ~e);
		}
	}
	function Cn(l) {
		switch (l) {
			case 2:
				l = 1;
				break;
			case 8:
				l = 4;
				break;
			case 32:
				l = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				l = 128;
				break;
			case 268435456:
				l = 134217728;
				break;
			default:
				l = 0;
		}
		return l;
	}
	function Zn(l) {
		return (
			(l &= -l),
			2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function ri() {
		var l = O.p;
		return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : wv(l.type));
	}
	function Dd(l, t) {
		var u = O.p;
		try {
			return (O.p = l), t();
		} finally {
			O.p = u;
		}
	}
	var Vt = Math.random().toString(36).slice(2),
		Hl = "__reactFiber$" + Vt,
		jl = "__reactProps$" + Vt,
		Yu = "__reactContainer$" + Vt,
		Vn = "__reactEvents$" + Vt,
		Ud = "__reactListeners$" + Vt,
		Rd = "__reactHandles$" + Vt,
		hi = "__reactResources$" + Vt,
		Aa = "__reactMarker$" + Vt;
	function Ln(l) {
		delete l[Hl], delete l[jl], delete l[Vn], delete l[Ud], delete l[Rd];
	}
	function Bu(l) {
		var t = l[Hl];
		if (t) {
			return t;
		}
		for (var u = l.parentNode; u; ) {
			if ((t = u[Yu] || u[Hl])) {
				if (
					((u = t.alternate),
					t.child !== null || (u !== null && u.child !== null))
				) {
					for (l = Hv(l); l !== null; ) {
						if ((u = l[Hl])) {
							return u;
						}
						l = Hv(l);
					}
				}
				return t;
			}
			(l = u), (u = l.parentNode);
		}
		return null;
	}
	function xu(l) {
		if ((l = l[Hl] || l[Yu])) {
			var t = l.tag;
			if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) {
				return l;
			}
		}
		return null;
	}
	function za(l) {
		var t = l.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) {
			return l.stateNode;
		}
		throw Error(d(33));
	}
	function Gu(l) {
		var t = l[hi];
		return (
			t ||
				(t = l[hi] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			t
		);
	}
	function El(l) {
		l[Aa] = !0;
	}
	var mi = new Set(),
		Si = {};
	function mu(l, t) {
		ju(l, t), ju(l + "Capture", t);
	}
	function ju(l, t) {
		for (Si[l] = t, l = 0; l < t.length; l++) {
			mi.add(t[l]);
		}
	}
	var pd = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
		),
		gi = {},
		bi = {};
	function Nd(l) {
		return Gn.call(bi, l)
			? !0
			: Gn.call(gi, l)
				? !1
				: pd.test(l)
					? (bi[l] = !0)
					: ((gi[l] = !0), !1);
	}
	function ze(l, t, u) {
		if (Nd(t)) {
			if (u === null) {
				l.removeAttribute(t);
			} else {
				switch (typeof u) {
					case "undefined":
					case "function":
					case "symbol":
						l.removeAttribute(t);
						return;
					case "boolean":
						var a = t.toLowerCase().slice(0, 5);
						if (a !== "data-" && a !== "aria-") {
							l.removeAttribute(t);
							return;
						}
				}
				l.setAttribute(t, "" + u);
			}
		}
	}
	function _e(l, t, u) {
		if (u === null) {
			l.removeAttribute(t);
		} else {
			switch (typeof u) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					l.removeAttribute(t);
					return;
			}
			l.setAttribute(t, "" + u);
		}
	}
	function Mt(l, t, u, a) {
		if (a === null) {
			l.removeAttribute(u);
		} else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					l.removeAttribute(u);
					return;
			}
			l.setAttributeNS(t, u, "" + a);
		}
	}
	var Kn, Ti;
	function Xu(l) {
		if (Kn === void 0) {
			try {
				throw Error();
			} catch (u) {
				var t = u.stack.trim().match(/\n( *(at )?)/);
				(Kn = (t && t[1]) || ""),
					(Ti =
						-1 <
						u.stack.indexOf(`
    at`)
							? " (<anonymous>)"
							: -1 < u.stack.indexOf("@")
								? "@unknown:0:0"
								: "");
			}
		}
		return (
			`
` +
			Kn +
			l +
			Ti
		);
	}
	var Jn = !1;
	function wn(l, t) {
		if (!l || Jn) {
			return "";
		}
		Jn = !0;
		var u = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function () {
					try {
						if (t) {
							var T = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(T.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(T, []);
								} catch (m) {
									var h = m;
								}
								Reflect.construct(l, [], T);
							} else {
								try {
									T.call();
								} catch (m) {
									h = m;
								}
								l.call(T.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (m) {
								h = m;
							}
							(T = l()) &&
								typeof T.catch == "function" &&
								T.catch(function () {});
						}
					} catch (m) {
						if (m && h && typeof m.stack == "string") {
							return [m.stack, h.stack];
						}
					}
					return [null, null];
				},
			};
			a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var e = Object.getOwnPropertyDescriptor(
				a.DetermineComponentFrameRoot,
				"name",
			);
			e &&
				e.configurable &&
				Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var n = a.DetermineComponentFrameRoot(),
				f = n[0],
				c = n[1];
			if (f && c) {
				var i = f.split(`
`),
					r = c.split(`
`);
				for (
					e = a = 0;
					a < i.length && !i[a].includes("DetermineComponentFrameRoot");

				) {
					a++;
				}
				for (
					;
					e < r.length && !r[e].includes("DetermineComponentFrameRoot");

				) {
					e++;
				}
				if (a === i.length || e === r.length) {
					for (
						a = i.length - 1, e = r.length - 1;
						1 <= a && 0 <= e && i[a] !== r[e];

					) {
						e--;
					}
				}
				for (; 1 <= a && 0 <= e; a--, e--) {
					if (i[a] !== r[e]) {
						if (a !== 1 || e !== 1) {
							do {
								if ((a--, e--, 0 > e || i[a] !== r[e])) {
									var S =
										`
` + i[a].replace(" at new ", " at ");
									return (
										l.displayName &&
											S.includes("<anonymous>") &&
											(S = S.replace("<anonymous>", l.displayName)),
										S
									);
								}
							} while (1 <= a && 0 <= e);
						}
						break;
					}
				}
			}
		} finally {
			(Jn = !1), (Error.prepareStackTrace = u);
		}
		return (u = l ? l.displayName || l.name : "") ? Xu(u) : "";
	}
	function Hd(l) {
		switch (l.tag) {
			case 26:
			case 27:
			case 5:
				return Xu(l.type);
			case 16:
				return Xu("Lazy");
			case 13:
				return Xu("Suspense");
			case 19:
				return Xu("SuspenseList");
			case 0:
			case 15:
				return wn(l.type, !1);
			case 11:
				return wn(l.type.render, !1);
			case 1:
				return wn(l.type, !0);
			case 31:
				return Xu("Activity");
			default:
				return "";
		}
	}
	function Ei(l) {
		try {
			var t = "";
			do {
				(t += Hd(l)), (l = l.return);
			} while (l);
			return t;
		} catch (u) {
			return (
				`
Error generating stack: ` +
				u.message +
				`
` +
				u.stack
			);
		}
	}
	function ut(l) {
		switch (typeof l) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return l;
			case "object":
				return l;
			default:
				return "";
		}
	}
	function Ai(l) {
		var t = l.type;
		return (
			(l = l.nodeName) &&
			l.toLowerCase() === "input" &&
			(t === "checkbox" || t === "radio")
		);
	}
	function qd(l) {
		var t = Ai(l) ? "checked" : "value",
			u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
			a = "" + l[t];
		if (
			!l.hasOwnProperty(t) &&
			typeof u < "u" &&
			typeof u.get == "function" &&
			typeof u.set == "function"
		) {
			var e = u.get,
				n = u.set;
			return (
				Object.defineProperty(l, t, {
					configurable: !0,
					get: function () {
						return e.call(this);
					},
					set: function (f) {
						(a = "" + f), n.call(this, f);
					},
				}),
				Object.defineProperty(l, t, { enumerable: u.enumerable }),
				{
					getValue: function () {
						return a;
					},
					setValue: function (f) {
						a = "" + f;
					},
					stopTracking: function () {
						(l._valueTracker = null), delete l[t];
					},
				}
			);
		}
	}
	function Oe(l) {
		l._valueTracker || (l._valueTracker = qd(l));
	}
	function zi(l) {
		if (!l) {
			return !1;
		}
		var t = l._valueTracker;
		if (!t) {
			return !0;
		}
		var u = t.getValue(),
			a = "";
		return (
			l && (a = Ai(l) ? (l.checked ? "true" : "false") : l.value),
			(l = a),
			l !== u ? (t.setValue(l), !0) : !1
		);
	}
	function Me(l) {
		if (
			((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
		) {
			return null;
		}
		try {
			return l.activeElement || l.body;
		} catch {
			return l.body;
		}
	}
	var Yd = /[\n"\\]/g;
	function at(l) {
		return l.replace(Yd, function (t) {
			return "\\" + t.charCodeAt(0).toString(16) + " ";
		});
	}
	function Wn(l, t, u, a, e, n, f, c) {
		(l.name = ""),
			f != null &&
			typeof f != "function" &&
			typeof f != "symbol" &&
			typeof f != "boolean"
				? (l.type = f)
				: l.removeAttribute("type"),
			t != null
				? f === "number"
					? ((t === 0 && l.value === "") || l.value != t) &&
						(l.value = "" + ut(t))
					: l.value !== "" + ut(t) && (l.value = "" + ut(t))
				: (f !== "submit" && f !== "reset") || l.removeAttribute("value"),
			t != null
				? $n(l, f, ut(t))
				: u != null
					? $n(l, f, ut(u))
					: a != null && l.removeAttribute("value"),
			e == null && n != null && (l.defaultChecked = !!n),
			e != null &&
				(l.checked = e && typeof e != "function" && typeof e != "symbol"),
			c != null &&
			typeof c != "function" &&
			typeof c != "symbol" &&
			typeof c != "boolean"
				? (l.name = "" + ut(c))
				: l.removeAttribute("name");
	}
	function _i(l, t, u, a, e, n, f, c) {
		if (
			(n != null &&
				typeof n != "function" &&
				typeof n != "symbol" &&
				typeof n != "boolean" &&
				(l.type = n),
			t != null || u != null)
		) {
			if (!((n !== "submit" && n !== "reset") || t != null)) {
				return;
			}
			(u = u != null ? "" + ut(u) : ""),
				(t = t != null ? "" + ut(t) : u),
				c || t === l.value || (l.value = t),
				(l.defaultValue = t);
		}
		(a = a ?? e),
			(a = typeof a != "function" && typeof a != "symbol" && !!a),
			(l.checked = c ? l.checked : !!a),
			(l.defaultChecked = !!a),
			f != null &&
				typeof f != "function" &&
				typeof f != "symbol" &&
				typeof f != "boolean" &&
				(l.name = f);
	}
	function $n(l, t, u) {
		(t === "number" && Me(l.ownerDocument) === l) ||
			l.defaultValue === "" + u ||
			(l.defaultValue = "" + u);
	}
	function Qu(l, t, u, a) {
		if (((l = l.options), t)) {
			t = {};
			for (var e = 0; e < u.length; e++) {
				t["$" + u[e]] = !0;
			}
			for (u = 0; u < l.length; u++) {
				(e = t.hasOwnProperty("$" + l[u].value)),
					l[u].selected !== e && (l[u].selected = e),
					e && a && (l[u].defaultSelected = !0);
			}
		} else {
			for (u = "" + ut(u), t = null, e = 0; e < l.length; e++) {
				if (l[e].value === u) {
					(l[e].selected = !0), a && (l[e].defaultSelected = !0);
					return;
				}
				t !== null || l[e].disabled || (t = l[e]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Oi(l, t, u) {
		if (
			t != null &&
			((t = "" + ut(t)), t !== l.value && (l.value = t), u == null)
		) {
			l.defaultValue !== t && (l.defaultValue = t);
			return;
		}
		l.defaultValue = u != null ? "" + ut(u) : "";
	}
	function Mi(l, t, u, a) {
		if (t == null) {
			if (a != null) {
				if (u != null) {
					throw Error(d(92));
				}
				if (Nl(a)) {
					if (1 < a.length) {
						throw Error(d(93));
					}
					a = a[0];
				}
				u = a;
			}
			u == null && (u = ""), (t = u);
		}
		(u = ut(t)),
			(l.defaultValue = u),
			(a = l.textContent),
			a === u && a !== "" && a !== null && (l.value = a);
	}
	function Cu(l, t) {
		if (t) {
			var u = l.firstChild;
			if (u && u === l.lastChild && u.nodeType === 3) {
				u.nodeValue = t;
				return;
			}
		}
		l.textContent = t;
	}
	var Bd = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" ",
		),
	);
	function Di(l, t, u) {
		var a = t.indexOf("--") === 0;
		u == null || typeof u == "boolean" || u === ""
			? a
				? l.setProperty(t, "")
				: t === "float"
					? (l.cssFloat = "")
					: (l[t] = "")
			: a
				? l.setProperty(t, u)
				: typeof u != "number" || u === 0 || Bd.has(t)
					? t === "float"
						? (l.cssFloat = u)
						: (l[t] = ("" + u).trim())
					: (l[t] = u + "px");
	}
	function Ui(l, t, u) {
		if (t != null && typeof t != "object") {
			throw Error(d(62));
		}
		if (((l = l.style), u != null)) {
			for (var a in u) {
				!u.hasOwnProperty(a) ||
					(t != null && t.hasOwnProperty(a)) ||
					(a.indexOf("--") === 0
						? l.setProperty(a, "")
						: a === "float"
							? (l.cssFloat = "")
							: (l[a] = ""));
			}
			for (var e in t) {
				(a = t[e]), t.hasOwnProperty(e) && u[e] !== a && Di(l, e, a);
			}
		} else {
			for (var n in t) {
				t.hasOwnProperty(n) && Di(l, n, t[n]);
			}
		}
	}
	function kn(l) {
		if (l.indexOf("-") === -1) {
			return !1;
		}
		switch (l) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0;
		}
	}
	var xd = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"],
		]),
		Gd =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function De(l) {
		return Gd.test("" + l)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: l;
	}
	var Fn = null;
	function In(l) {
		return (
			(l = l.target || l.srcElement || window),
			l.correspondingUseElement && (l = l.correspondingUseElement),
			l.nodeType === 3 ? l.parentNode : l
		);
	}
	var Zu = null,
		Vu = null;
	function Ri(l) {
		var t = xu(l);
		if (t && (l = t.stateNode)) {
			var u = l[jl] || null;
			l: switch (((l = t.stateNode), t.type)) {
				case "input":
					if (
						(Wn(
							l,
							u.value,
							u.defaultValue,
							u.defaultValue,
							u.checked,
							u.defaultChecked,
							u.type,
							u.name,
						),
						(t = u.name),
						u.type === "radio" && t != null)
					) {
						for (u = l; u.parentNode; ) {
							u = u.parentNode;
						}
						for (
							u = u.querySelectorAll(
								'input[name="' + at("" + t) + '"][type="radio"]',
							),
								t = 0;
							t < u.length;
							t++
						) {
							var a = u[t];
							if (a !== l && a.form === l.form) {
								var e = a[jl] || null;
								if (!e) {
									throw Error(d(90));
								}
								Wn(
									a,
									e.value,
									e.defaultValue,
									e.defaultValue,
									e.checked,
									e.defaultChecked,
									e.type,
									e.name,
								);
							}
						}
						for (t = 0; t < u.length; t++) {
							(a = u[t]), a.form === l.form && zi(a);
						}
					}
					break l;
				case "textarea":
					Oi(l, u.value, u.defaultValue);
					break l;
				case "select":
					(t = u.value), t != null && Qu(l, !!u.multiple, t, !1);
			}
		}
	}
	var Pn = !1;
	function pi(l, t, u) {
		if (Pn) {
			return l(t, u);
		}
		Pn = !0;
		try {
			var a = l(t);
			return a;
		} finally {
			if (
				((Pn = !1),
				(Zu !== null || Vu !== null) &&
					(yn(), Zu && ((t = Zu), (l = Vu), (Vu = Zu = null), Ri(t), l)))
			) {
				for (t = 0; t < l.length; t++) {
					Ri(l[t]);
				}
			}
		}
	}
	function _a(l, t) {
		var u = l.stateNode;
		if (u === null) {
			return null;
		}
		var a = u[jl] || null;
		if (a === null) {
			return null;
		}
		u = a[t];
		l: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(a = !a.disabled) ||
					((l = l.type),
					(a = !(
						l === "button" ||
						l === "input" ||
						l === "select" ||
						l === "textarea"
					))),
					(l = !a);
				break l;
			default:
				l = !1;
		}
		if (l) {
			return null;
		}
		if (u && typeof u != "function") {
			throw Error(d(231, t, typeof u));
		}
		return u;
	}
	var Dt = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		lf = !1;
	if (Dt) {
		try {
			var Oa = {};
			Object.defineProperty(Oa, "passive", {
				get: function () {
					lf = !0;
				},
			}),
				window.addEventListener("test", Oa, Oa),
				window.removeEventListener("test", Oa, Oa);
		} catch {
			lf = !1;
		}
	}
	var Lt = null,
		tf = null,
		Ue = null;
	function Ni() {
		if (Ue) {
			return Ue;
		}
		var l,
			t = tf,
			u = t.length,
			a,
			e = "value" in Lt ? Lt.value : Lt.textContent,
			n = e.length;
		for (l = 0; l < u && t[l] === e[l]; l++);
		var f = u - l;
		for (a = 1; a <= f && t[u - a] === e[n - a]; a++);
		return (Ue = e.slice(l, 1 < a ? 1 - a : void 0));
	}
	function Re(l) {
		var t = l.keyCode;
		return (
			"charCode" in l
				? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
				: (l = t),
			l === 10 && (l = 13),
			32 <= l || l === 13 ? l : 0
		);
	}
	function pe() {
		return !0;
	}
	function Hi() {
		return !1;
	}
	function Xl(l) {
		function t(u, a, e, n, f) {
			(this._reactName = u),
				(this._targetInst = e),
				(this.type = a),
				(this.nativeEvent = n),
				(this.target = f),
				(this.currentTarget = null);
			for (var c in l) {
				l.hasOwnProperty(c) && ((u = l[c]), (this[c] = u ? u(n) : n[c]));
			}
			return (
				(this.isDefaultPrevented = (
					n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
				)
					? pe
					: Hi),
				(this.isPropagationStopped = Hi),
				this
			);
		}
		return (
			N(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var u = this.nativeEvent;
					u &&
						(u.preventDefault
							? u.preventDefault()
							: typeof u.returnValue != "unknown" && (u.returnValue = !1),
						(this.isDefaultPrevented = pe));
				},
				stopPropagation: function () {
					var u = this.nativeEvent;
					u &&
						(u.stopPropagation
							? u.stopPropagation()
							: typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0),
						(this.isPropagationStopped = pe));
				},
				persist: function () {},
				isPersistent: pe,
			}),
			t
		);
	}
	var Su = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (l) {
				return l.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Ne = Xl(Su),
		Ma = N({}, Su, { view: 0, detail: 0 }),
		jd = Xl(Ma),
		uf,
		af,
		Da,
		He = N({}, Ma, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: nf,
			button: 0,
			buttons: 0,
			relatedTarget: function (l) {
				return l.relatedTarget === void 0
					? l.fromElement === l.srcElement
						? l.toElement
						: l.fromElement
					: l.relatedTarget;
			},
			movementX: function (l) {
				return "movementX" in l
					? l.movementX
					: (l !== Da &&
							(Da && l.type === "mousemove"
								? ((uf = l.screenX - Da.screenX), (af = l.screenY - Da.screenY))
								: (af = uf = 0),
							(Da = l)),
						uf);
			},
			movementY: function (l) {
				return "movementY" in l ? l.movementY : af;
			},
		}),
		qi = Xl(He),
		Xd = N({}, He, { dataTransfer: 0 }),
		Qd = Xl(Xd),
		Cd = N({}, Ma, { relatedTarget: 0 }),
		ef = Xl(Cd),
		Zd = N({}, Su, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Vd = Xl(Zd),
		Ld = N({}, Su, {
			clipboardData: function (l) {
				return "clipboardData" in l ? l.clipboardData : window.clipboardData;
			},
		}),
		Kd = Xl(Ld),
		Jd = N({}, Su, { data: 0 }),
		Yi = Xl(Jd),
		wd = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified",
		},
		Wd = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta",
		},
		$d = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function kd(l) {
		var t = this.nativeEvent;
		return t.getModifierState
			? t.getModifierState(l)
			: (l = $d[l])
				? !!t[l]
				: !1;
	}
	function nf() {
		return kd;
	}
	var Fd = N({}, Ma, {
			key: function (l) {
				if (l.key) {
					var t = wd[l.key] || l.key;
					if (t !== "Unidentified") {
						return t;
					}
				}
				return l.type === "keypress"
					? ((l = Re(l)), l === 13 ? "Enter" : String.fromCharCode(l))
					: l.type === "keydown" || l.type === "keyup"
						? Wd[l.keyCode] || "Unidentified"
						: "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: nf,
			charCode: function (l) {
				return l.type === "keypress" ? Re(l) : 0;
			},
			keyCode: function (l) {
				return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
			},
			which: function (l) {
				return l.type === "keypress"
					? Re(l)
					: l.type === "keydown" || l.type === "keyup"
						? l.keyCode
						: 0;
			},
		}),
		Id = Xl(Fd),
		Pd = N({}, He, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		Bi = Xl(Pd),
		lo = N({}, Ma, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: nf,
		}),
		to = Xl(lo),
		uo = N({}, Su, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		ao = Xl(uo),
		eo = N({}, He, {
			deltaX: function (l) {
				return "deltaX" in l
					? l.deltaX
					: "wheelDeltaX" in l
						? -l.wheelDeltaX
						: 0;
			},
			deltaY: function (l) {
				return "deltaY" in l
					? l.deltaY
					: "wheelDeltaY" in l
						? -l.wheelDeltaY
						: "wheelDelta" in l
							? -l.wheelDelta
							: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		no = Xl(eo),
		fo = N({}, Su, { newState: 0, oldState: 0 }),
		co = Xl(fo),
		io = [9, 13, 27, 32],
		ff = Dt && "CompositionEvent" in window,
		Ua = null;
	Dt && "documentMode" in document && (Ua = document.documentMode);
	var so = Dt && "TextEvent" in window && !Ua,
		xi = Dt && (!ff || (Ua && 8 < Ua && 11 >= Ua)),
		Gi = " ",
		ji = !1;
	function Xi(l, t) {
		switch (l) {
			case "keyup":
				return io.indexOf(t.keyCode) !== -1;
			case "keydown":
				return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function Qi(l) {
		return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
	}
	var Lu = !1;
	function vo(l, t) {
		switch (l) {
			case "compositionend":
				return Qi(t);
			case "keypress":
				return t.which !== 32 ? null : ((ji = !0), Gi);
			case "textInput":
				return (l = t.data), l === Gi && ji ? null : l;
			default:
				return null;
		}
	}
	function oo(l, t) {
		if (Lu) {
			return l === "compositionend" || (!ff && Xi(l, t))
				? ((l = Ni()), (Ue = tf = Lt = null), (Lu = !1), l)
				: null;
		}
		switch (l) {
			case "paste":
				return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
					if (t.char && 1 < t.char.length) {
						return t.char;
					}
					if (t.which) {
						return String.fromCharCode(t.which);
					}
				}
				return null;
			case "compositionend":
				return xi && t.locale !== "ko" ? null : t.data;
			default:
				return null;
		}
	}
	var yo = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function Ci(l) {
		var t = l && l.nodeName && l.nodeName.toLowerCase();
		return t === "input" ? !!yo[l.type] : t === "textarea";
	}
	function Zi(l, t, u, a) {
		Zu ? (Vu ? Vu.push(a) : (Vu = [a])) : (Zu = a),
			(t = bn(t, "onChange")),
			0 < t.length &&
				((u = new Ne("onChange", "change", null, u, a)),
				l.push({ event: u, listeners: t }));
	}
	var Ra = null,
		pa = null;
	function ro(l) {
		Av(l, 0);
	}
	function qe(l) {
		var t = za(l);
		if (zi(t)) {
			return l;
		}
	}
	function Vi(l, t) {
		if (l === "change") {
			return t;
		}
	}
	var Li = !1;
	if (Dt) {
		var cf;
		if (Dt) {
			var sf = "oninput" in document;
			if (!sf) {
				var Ki = document.createElement("div");
				Ki.setAttribute("oninput", "return;"),
					(sf = typeof Ki.oninput == "function");
			}
			cf = sf;
		} else {
			cf = !1;
		}
		Li = cf && (!document.documentMode || 9 < document.documentMode);
	}
	function Ji() {
		Ra && (Ra.detachEvent("onpropertychange", wi), (pa = Ra = null));
	}
	function wi(l) {
		if (l.propertyName === "value" && qe(pa)) {
			var t = [];
			Zi(t, pa, l, In(l)), pi(ro, t);
		}
	}
	function ho(l, t, u) {
		l === "focusin"
			? (Ji(), (Ra = t), (pa = u), Ra.attachEvent("onpropertychange", wi))
			: l === "focusout" && Ji();
	}
	function mo(l) {
		if (l === "selectionchange" || l === "keyup" || l === "keydown") {
			return qe(pa);
		}
	}
	function So(l, t) {
		if (l === "click") {
			return qe(t);
		}
	}
	function go(l, t) {
		if (l === "input" || l === "change") {
			return qe(t);
		}
	}
	function bo(l, t) {
		return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
	}
	var $l = typeof Object.is == "function" ? Object.is : bo;
	function Na(l, t) {
		if ($l(l, t)) {
			return !0;
		}
		if (
			typeof l != "object" ||
			l === null ||
			typeof t != "object" ||
			t === null
		) {
			return !1;
		}
		var u = Object.keys(l),
			a = Object.keys(t);
		if (u.length !== a.length) {
			return !1;
		}
		for (a = 0; a < u.length; a++) {
			var e = u[a];
			if (!Gn.call(t, e) || !$l(l[e], t[e])) {
				return !1;
			}
		}
		return !0;
	}
	function Wi(l) {
		for (; l && l.firstChild; ) {
			l = l.firstChild;
		}
		return l;
	}
	function $i(l, t) {
		var u = Wi(l);
		l = 0;
		for (var a; u; ) {
			if (u.nodeType === 3) {
				if (((a = l + u.textContent.length), l <= t && a >= t)) {
					return { node: u, offset: t - l };
				}
				l = a;
			}
			l: {
				for (; u; ) {
					if (u.nextSibling) {
						u = u.nextSibling;
						break l;
					}
					u = u.parentNode;
				}
				u = void 0;
			}
			u = Wi(u);
		}
	}
	function ki(l, t) {
		return l && t
			? l === t
				? !0
				: l && l.nodeType === 3
					? !1
					: t && t.nodeType === 3
						? ki(l, t.parentNode)
						: "contains" in l
							? l.contains(t)
							: l.compareDocumentPosition
								? !!(l.compareDocumentPosition(t) & 16)
								: !1
			: !1;
	}
	function Fi(l) {
		l =
			l != null &&
			l.ownerDocument != null &&
			l.ownerDocument.defaultView != null
				? l.ownerDocument.defaultView
				: window;
		for (var t = Me(l.document); t instanceof l.HTMLIFrameElement; ) {
			try {
				var u = typeof t.contentWindow.location.href == "string";
			} catch {
				u = !1;
			}
			if (u) {
				l = t.contentWindow;
			} else {
				break;
			}
			t = Me(l.document);
		}
		return t;
	}
	function vf(l) {
		var t = l && l.nodeName && l.nodeName.toLowerCase();
		return (
			t &&
			((t === "input" &&
				(l.type === "text" ||
					l.type === "search" ||
					l.type === "tel" ||
					l.type === "url" ||
					l.type === "password")) ||
				t === "textarea" ||
				l.contentEditable === "true")
		);
	}
	var To = Dt && "documentMode" in document && 11 >= document.documentMode,
		Ku = null,
		df = null,
		Ha = null,
		of = !1;
	function Ii(l, t, u) {
		var a =
			u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
		of ||
			Ku == null ||
			Ku !== Me(a) ||
			((a = Ku),
			"selectionStart" in a && vf(a)
				? (a = { start: a.selectionStart, end: a.selectionEnd })
				: ((a = (
						(a.ownerDocument && a.ownerDocument.defaultView) ||
						window
					).getSelection()),
					(a = {
						anchorNode: a.anchorNode,
						anchorOffset: a.anchorOffset,
						focusNode: a.focusNode,
						focusOffset: a.focusOffset,
					})),
			(Ha && Na(Ha, a)) ||
				((Ha = a),
				(a = bn(df, "onSelect")),
				0 < a.length &&
					((t = new Ne("onSelect", "select", null, t, u)),
					l.push({ event: t, listeners: a }),
					(t.target = Ku))));
	}
	function gu(l, t) {
		var u = {};
		return (
			(u[l.toLowerCase()] = t.toLowerCase()),
			(u["Webkit" + l] = "webkit" + t),
			(u["Moz" + l] = "moz" + t),
			u
		);
	}
	var Ju = {
			animationend: gu("Animation", "AnimationEnd"),
			animationiteration: gu("Animation", "AnimationIteration"),
			animationstart: gu("Animation", "AnimationStart"),
			transitionrun: gu("Transition", "TransitionRun"),
			transitionstart: gu("Transition", "TransitionStart"),
			transitioncancel: gu("Transition", "TransitionCancel"),
			transitionend: gu("Transition", "TransitionEnd"),
		},
		yf = {},
		Pi = {};
	Dt &&
		((Pi = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete Ju.animationend.animation,
			delete Ju.animationiteration.animation,
			delete Ju.animationstart.animation),
		"TransitionEvent" in window || delete Ju.transitionend.transition);
	function bu(l) {
		if (yf[l]) {
			return yf[l];
		}
		if (!Ju[l]) {
			return l;
		}
		var t = Ju[l],
			u;
		for (u in t) {
			if (t.hasOwnProperty(u) && u in Pi) {
				return (yf[l] = t[u]);
			}
		}
		return l;
	}
	var ls = bu("animationend"),
		ts = bu("animationiteration"),
		us = bu("animationstart"),
		Eo = bu("transitionrun"),
		Ao = bu("transitionstart"),
		zo = bu("transitioncancel"),
		as = bu("transitionend"),
		es = new Map(),
		rf =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" ",
			);
	rf.push("scrollEnd");
	function yt(l, t) {
		es.set(l, t), mu(t, [l]);
	}
	var ns = new WeakMap();
	function et(l, t) {
		if (typeof l == "object" && l !== null) {
			var u = ns.get(l);
			return u !== void 0
				? u
				: ((t = { value: l, source: t, stack: Ei(t) }), ns.set(l, t), t);
		}
		return { value: l, source: t, stack: Ei(t) };
	}
	var nt = [],
		wu = 0,
		hf = 0;
	function Ye() {
		for (var l = wu, t = (hf = wu = 0); t < l; ) {
			var u = nt[t];
			nt[t++] = null;
			var a = nt[t];
			nt[t++] = null;
			var e = nt[t];
			nt[t++] = null;
			var n = nt[t];
			if (((nt[t++] = null), a !== null && e !== null)) {
				var f = a.pending;
				f === null ? (e.next = e) : ((e.next = f.next), (f.next = e)),
					(a.pending = e);
			}
			n !== 0 && fs(u, e, n);
		}
	}
	function Be(l, t, u, a) {
		(nt[wu++] = l),
			(nt[wu++] = t),
			(nt[wu++] = u),
			(nt[wu++] = a),
			(hf |= a),
			(l.lanes |= a),
			(l = l.alternate),
			l !== null && (l.lanes |= a);
	}
	function mf(l, t, u, a) {
		return Be(l, t, u, a), xe(l);
	}
	function Wu(l, t) {
		return Be(l, null, null, t), xe(l);
	}
	function fs(l, t, u) {
		l.lanes |= u;
		var a = l.alternate;
		a !== null && (a.lanes |= u);
		for (var e = !1, n = l.return; n !== null; ) {
			(n.childLanes |= u),
				(a = n.alternate),
				a !== null && (a.childLanes |= u),
				n.tag === 22 &&
					((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
				(l = n),
				(n = n.return);
		}
		return l.tag === 3
			? ((n = l.stateNode),
				e &&
					t !== null &&
					((e = 31 - Wl(u)),
					(l = n.hiddenUpdates),
					(a = l[e]),
					a === null ? (l[e] = [t]) : a.push(t),
					(t.lane = u | 536870912)),
				n)
			: null;
	}
	function xe(l) {
		if (50 < ae) {
			throw ((ae = 0), (Ac = null), Error(d(185)));
		}
		for (var t = l.return; t !== null; ) {
			(l = t), (t = l.return);
		}
		return l.tag === 3 ? l.stateNode : null;
	}
	var $u = {};
	function _o(l, t, u, a) {
		(this.tag = l),
			(this.key = u),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = t),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = a),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function kl(l, t, u, a) {
		return new _o(l, t, u, a);
	}
	function Sf(l) {
		return (l = l.prototype), !(!l || !l.isReactComponent);
	}
	function Ut(l, t) {
		var u = l.alternate;
		return (
			u === null
				? ((u = kl(l.tag, t, l.key, l.mode)),
					(u.elementType = l.elementType),
					(u.type = l.type),
					(u.stateNode = l.stateNode),
					(u.alternate = l),
					(l.alternate = u))
				: ((u.pendingProps = t),
					(u.type = l.type),
					(u.flags = 0),
					(u.subtreeFlags = 0),
					(u.deletions = null)),
			(u.flags = l.flags & 65011712),
			(u.childLanes = l.childLanes),
			(u.lanes = l.lanes),
			(u.child = l.child),
			(u.memoizedProps = l.memoizedProps),
			(u.memoizedState = l.memoizedState),
			(u.updateQueue = l.updateQueue),
			(t = l.dependencies),
			(u.dependencies =
				t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
			(u.sibling = l.sibling),
			(u.index = l.index),
			(u.ref = l.ref),
			(u.refCleanup = l.refCleanup),
			u
		);
	}
	function cs(l, t) {
		l.flags &= 65011714;
		var u = l.alternate;
		return (
			u === null
				? ((l.childLanes = 0),
					(l.lanes = t),
					(l.child = null),
					(l.subtreeFlags = 0),
					(l.memoizedProps = null),
					(l.memoizedState = null),
					(l.updateQueue = null),
					(l.dependencies = null),
					(l.stateNode = null))
				: ((l.childLanes = u.childLanes),
					(l.lanes = u.lanes),
					(l.child = u.child),
					(l.subtreeFlags = 0),
					(l.deletions = null),
					(l.memoizedProps = u.memoizedProps),
					(l.memoizedState = u.memoizedState),
					(l.updateQueue = u.updateQueue),
					(l.type = u.type),
					(t = u.dependencies),
					(l.dependencies =
						t === null
							? null
							: { lanes: t.lanes, firstContext: t.firstContext })),
			l
		);
	}
	function Ge(l, t, u, a, e, n) {
		var f = 0;
		if (((a = l), typeof l == "function")) {
			Sf(l) && (f = 1);
		} else if (typeof l == "string") {
			f = My(l, u, B.current)
				? 26
				: l === "html" || l === "head" || l === "body"
					? 27
					: 5;
		} else {
			l: switch (l) {
				case St:
					return (l = kl(31, u, t, e)), (l.elementType = St), (l.lanes = n), l;
				case Bl:
					return Tu(u.children, e, n, t);
				case dt:
					(f = 8), (e |= 24);
					break;
				case Gl:
					return (
						(l = kl(12, u, t, e | 2)), (l.elementType = Gl), (l.lanes = n), l
					);
				case $:
					return (l = kl(13, u, t, e)), (l.elementType = $), (l.lanes = n), l;
				case Vl:
					return (l = kl(19, u, t, e)), (l.elementType = Vl), (l.lanes = n), l;
				default:
					if (typeof l == "object" && l !== null) {
						switch (l.$$typeof) {
							case ou:
							case Rl:
								f = 10;
								break l;
							case _t:
								f = 9;
								break l;
							case ot:
								f = 11;
								break l;
							case Ll:
								f = 14;
								break l;
							case Kl:
								(f = 16), (a = null);
								break l;
						}
					}
					(f = 29),
						(u = Error(d(130, l === null ? "null" : typeof l, ""))),
						(a = null);
			}
		}
		return (
			(t = kl(f, u, t, e)), (t.elementType = l), (t.type = a), (t.lanes = n), t
		);
	}
	function Tu(l, t, u, a) {
		return (l = kl(7, l, a, t)), (l.lanes = u), l;
	}
	function gf(l, t, u) {
		return (l = kl(6, l, null, t)), (l.lanes = u), l;
	}
	function bf(l, t, u) {
		return (
			(t = kl(4, l.children !== null ? l.children : [], l.key, t)),
			(t.lanes = u),
			(t.stateNode = {
				containerInfo: l.containerInfo,
				pendingChildren: null,
				implementation: l.implementation,
			}),
			t
		);
	}
	var ku = [],
		Fu = 0,
		je = null,
		Xe = 0,
		ft = [],
		ct = 0,
		Eu = null,
		Rt = 1,
		pt = "";
	function Au(l, t) {
		(ku[Fu++] = Xe), (ku[Fu++] = je), (je = l), (Xe = t);
	}
	function is(l, t, u) {
		(ft[ct++] = Rt), (ft[ct++] = pt), (ft[ct++] = Eu), (Eu = l);
		var a = Rt;
		l = pt;
		var e = 32 - Wl(a) - 1;
		(a &= ~(1 << e)), (u += 1);
		var n = 32 - Wl(t) + e;
		if (30 < n) {
			var f = e - (e % 5);
			(n = (a & ((1 << f) - 1)).toString(32)),
				(a >>= f),
				(e -= f),
				(Rt = (1 << (32 - Wl(t) + e)) | (u << e) | a),
				(pt = n + l);
		} else {
			(Rt = (1 << n) | (u << e) | a), (pt = l);
		}
	}
	function Tf(l) {
		l.return !== null && (Au(l, 1), is(l, 1, 0));
	}
	function Ef(l) {
		for (; l === je; ) {
			(je = ku[--Fu]), (ku[Fu] = null), (Xe = ku[--Fu]), (ku[Fu] = null);
		}
		for (; l === Eu; ) {
			(Eu = ft[--ct]),
				(ft[ct] = null),
				(pt = ft[--ct]),
				(ft[ct] = null),
				(Rt = ft[--ct]),
				(ft[ct] = null);
		}
	}
	var xl = null,
		yl = null,
		I = !1,
		zu = null,
		bt = !1,
		Af = Error(d(519));
	function _u(l) {
		var t = Error(d(418, ""));
		throw (Ba(et(t, l)), Af);
	}
	function ss(l) {
		var t = l.stateNode,
			u = l.type,
			a = l.memoizedProps;
		switch (((t[Hl] = l), (t[jl] = a), u)) {
			case "dialog":
				K("cancel", t), K("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				K("load", t);
				break;
			case "video":
			case "audio":
				for (u = 0; u < ne.length; u++) {
					K(ne[u], t);
				}
				break;
			case "source":
				K("error", t);
				break;
			case "img":
			case "image":
			case "link":
				K("error", t), K("load", t);
				break;
			case "details":
				K("toggle", t);
				break;
			case "input":
				K("invalid", t),
					_i(
						t,
						a.value,
						a.defaultValue,
						a.checked,
						a.defaultChecked,
						a.type,
						a.name,
						!0,
					),
					Oe(t);
				break;
			case "select":
				K("invalid", t);
				break;
			case "textarea":
				K("invalid", t), Mi(t, a.value, a.defaultValue, a.children), Oe(t);
		}
		(u = a.children),
			(typeof u != "string" && typeof u != "number" && typeof u != "bigint") ||
			t.textContent === "" + u ||
			a.suppressHydrationWarning === !0 ||
			Mv(t.textContent, u)
				? (a.popover != null && (K("beforetoggle", t), K("toggle", t)),
					a.onScroll != null && K("scroll", t),
					a.onScrollEnd != null && K("scrollend", t),
					a.onClick != null && (t.onclick = Tn),
					(t = !0))
				: (t = !1),
			t || _u(l);
	}
	function vs(l) {
		for (xl = l.return; xl; ) {
			switch (xl.tag) {
				case 5:
				case 13:
					bt = !1;
					return;
				case 27:
				case 3:
					bt = !0;
					return;
				default:
					xl = xl.return;
			}
		}
	}
	function qa(l) {
		if (l !== xl) {
			return !1;
		}
		if (!I) {
			return vs(l), (I = !0), !1;
		}
		var t = l.tag,
			u;
		if (
			((u = t !== 3 && t !== 27) &&
				((u = t === 5) &&
					((u = l.type),
					(u =
						!(u !== "form" && u !== "button") || jc(l.type, l.memoizedProps))),
				(u = !u)),
			u && yl && _u(l),
			vs(l),
			t === 13)
		) {
			if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) {
				throw Error(d(317));
			}
			l: {
				for (l = l.nextSibling, t = 0; l; ) {
					if (l.nodeType === 8) {
						if (((u = l.data), u === "/$")) {
							if (t === 0) {
								yl = ht(l.nextSibling);
								break l;
							}
							t--;
						} else {
							(u !== "$" && u !== "$!" && u !== "$?") || t++;
						}
					}
					l = l.nextSibling;
				}
				yl = null;
			}
		} else {
			t === 27
				? ((t = yl), fu(l.type) ? ((l = Zc), (Zc = null), (yl = l)) : (yl = t))
				: (yl = xl ? ht(l.stateNode.nextSibling) : null);
		}
		return !0;
	}
	function Ya() {
		(yl = xl = null), (I = !1);
	}
	function ds() {
		var l = zu;
		return (
			l !== null &&
				(Zl === null ? (Zl = l) : Zl.push.apply(Zl, l), (zu = null)),
			l
		);
	}
	function Ba(l) {
		zu === null ? (zu = [l]) : zu.push(l);
	}
	var zf = z(null),
		Ou = null,
		Nt = null;
	function Kt(l, t, u) {
		_(zf, t._currentValue), (t._currentValue = u);
	}
	function Ht(l) {
		(l._currentValue = zf.current), M(zf);
	}
	function _f(l, t, u) {
		for (; l !== null; ) {
			var a = l.alternate;
			if (
				((l.childLanes & t) !== t
					? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
					: a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
				l === u)
			) {
				break;
			}
			l = l.return;
		}
	}
	function Of(l, t, u, a) {
		var e = l.child;
		for (e !== null && (e.return = l); e !== null; ) {
			var n = e.dependencies;
			if (n !== null) {
				var f = e.child;
				n = n.firstContext;
				l: for (; n !== null; ) {
					var c = n;
					n = e;
					for (var i = 0; i < t.length; i++) {
						if (c.context === t[i]) {
							(n.lanes |= u),
								(c = n.alternate),
								c !== null && (c.lanes |= u),
								_f(n.return, u, l),
								a || (f = null);
							break l;
						}
					}
					n = c.next;
				}
			} else if (e.tag === 18) {
				if (((f = e.return), f === null)) {
					throw Error(d(341));
				}
				(f.lanes |= u),
					(n = f.alternate),
					n !== null && (n.lanes |= u),
					_f(f, u, l),
					(f = null);
			} else {
				f = e.child;
			}
			if (f !== null) {
				f.return = e;
			} else {
				for (f = e; f !== null; ) {
					if (f === l) {
						f = null;
						break;
					}
					if (((e = f.sibling), e !== null)) {
						(e.return = f.return), (f = e);
						break;
					}
					f = f.return;
				}
			}
			e = f;
		}
	}
	function xa(l, t, u, a) {
		l = null;
		for (var e = t, n = !1; e !== null; ) {
			if (!n) {
				if ((e.flags & 524288) !== 0) {
					n = !0;
				} else if ((e.flags & 262144) !== 0) {
					break;
				}
			}
			if (e.tag === 10) {
				var f = e.alternate;
				if (f === null) {
					throw Error(d(387));
				}
				if (((f = f.memoizedProps), f !== null)) {
					var c = e.type;
					$l(e.pendingProps.value, f.value) ||
						(l !== null ? l.push(c) : (l = [c]));
				}
			} else if (e === Jl.current) {
				if (((f = e.alternate), f === null)) {
					throw Error(d(387));
				}
				f.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
					(l !== null ? l.push(de) : (l = [de]));
			}
			e = e.return;
		}
		l !== null && Of(t, l, u, a), (t.flags |= 262144);
	}
	function Qe(l) {
		for (l = l.firstContext; l !== null; ) {
			if (!$l(l.context._currentValue, l.memoizedValue)) {
				return !0;
			}
			l = l.next;
		}
		return !1;
	}
	function Mu(l) {
		(Ou = l),
			(Nt = null),
			(l = l.dependencies),
			l !== null && (l.firstContext = null);
	}
	function ql(l) {
		return os(Ou, l);
	}
	function Ce(l, t) {
		return Ou === null && Mu(l), os(l, t);
	}
	function os(l, t) {
		var u = t._currentValue;
		if (((t = { context: t, memoizedValue: u, next: null }), Nt === null)) {
			if (l === null) {
				throw Error(d(308));
			}
			(Nt = t),
				(l.dependencies = { lanes: 0, firstContext: t }),
				(l.flags |= 524288);
		} else {
			Nt = Nt.next = t;
		}
		return u;
	}
	var Oo =
			typeof AbortController < "u"
				? AbortController
				: function () {
						var l = [],
							t = (this.signal = {
								aborted: !1,
								addEventListener: function (u, a) {
									l.push(a);
								},
							});
						this.abort = function () {
							(t.aborted = !0),
								l.forEach(function (u) {
									return u();
								});
						};
					},
		Mo = E.unstable_scheduleCallback,
		Do = E.unstable_NormalPriority,
		bl = {
			$$typeof: Rl,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function Mf() {
		return { controller: new Oo(), data: new Map(), refCount: 0 };
	}
	function Ga(l) {
		l.refCount--,
			l.refCount === 0 &&
				Mo(Do, function () {
					l.controller.abort();
				});
	}
	var ja = null,
		Df = 0,
		Iu = 0,
		Pu = null;
	function Uo(l, t) {
		if (ja === null) {
			var u = (ja = []);
			(Df = 0),
				(Iu = Rc()),
				(Pu = {
					status: "pending",
					value: void 0,
					then: function (a) {
						u.push(a);
					},
				});
		}
		return Df++, t.then(ys, ys), t;
	}
	function ys() {
		if (--Df === 0 && ja !== null) {
			Pu !== null && (Pu.status = "fulfilled");
			var l = ja;
			(ja = null), (Iu = 0), (Pu = null);
			for (var t = 0; t < l.length; t++) {
				(0, l[t])();
			}
		}
	}
	function Ro(l, t) {
		var u = [],
			a = {
				status: "pending",
				value: null,
				reason: null,
				then: function (e) {
					u.push(e);
				},
			};
		return (
			l.then(
				function () {
					(a.status = "fulfilled"), (a.value = t);
					for (var e = 0; e < u.length; e++) {
						(0, u[e])(t);
					}
				},
				function (e) {
					for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++) {
						(0, u[e])(void 0);
					}
				},
			),
			a
		);
	}
	var rs = g.S;
	g.S = function (l, t) {
		typeof t == "object" &&
			t !== null &&
			typeof t.then == "function" &&
			Uo(l, t),
			rs !== null && rs(l, t);
	};
	var Du = z(null);
	function Uf() {
		var l = Du.current;
		return l !== null ? l : sl.pooledCache;
	}
	function Ze(l, t) {
		t === null ? _(Du, Du.current) : _(Du, t.pool);
	}
	function hs() {
		var l = Uf();
		return l === null ? null : { parent: bl._currentValue, pool: l };
	}
	var Xa = Error(d(460)),
		ms = Error(d(474)),
		Ve = Error(d(542)),
		Rf = { then: function () {} };
	function Ss(l) {
		return (l = l.status), l === "fulfilled" || l === "rejected";
	}
	function Le() {}
	function gs(l, t, u) {
		switch (
			((u = l[u]),
			u === void 0 ? l.push(t) : u !== t && (t.then(Le, Le), (t = u)),
			t.status)
		) {
			case "fulfilled":
				return t.value;
			case "rejected":
				throw ((l = t.reason), Ts(l), l);
			default:
				if (typeof t.status == "string") {
					t.then(Le, Le);
				} else {
					if (((l = sl), l !== null && 100 < l.shellSuspendCounter)) {
						throw Error(d(482));
					}
					(l = t),
						(l.status = "pending"),
						l.then(
							function (a) {
								if (t.status === "pending") {
									var e = t;
									(e.status = "fulfilled"), (e.value = a);
								}
							},
							function (a) {
								if (t.status === "pending") {
									var e = t;
									(e.status = "rejected"), (e.reason = a);
								}
							},
						);
				}
				switch (t.status) {
					case "fulfilled":
						return t.value;
					case "rejected":
						throw ((l = t.reason), Ts(l), l);
				}
				throw ((Qa = t), Xa);
		}
	}
	var Qa = null;
	function bs() {
		if (Qa === null) {
			throw Error(d(459));
		}
		var l = Qa;
		return (Qa = null), l;
	}
	function Ts(l) {
		if (l === Xa || l === Ve) {
			throw Error(d(483));
		}
	}
	var Jt = !1;
	function pf(l) {
		l.updateQueue = {
			baseState: l.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function Nf(l, t) {
		(l = l.updateQueue),
			t.updateQueue === l &&
				(t.updateQueue = {
					baseState: l.baseState,
					firstBaseUpdate: l.firstBaseUpdate,
					lastBaseUpdate: l.lastBaseUpdate,
					shared: l.shared,
					callbacks: null,
				});
	}
	function wt(l) {
		return { lane: l, tag: 0, payload: null, callback: null, next: null };
	}
	function Wt(l, t, u) {
		var a = l.updateQueue;
		if (a === null) {
			return null;
		}
		if (((a = a.shared), (ul & 2) !== 0)) {
			var e = a.pending;
			return (
				e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
				(a.pending = t),
				(t = xe(l)),
				fs(l, null, u),
				t
			);
		}
		return Be(l, a, t, u), xe(l);
	}
	function Ca(l, t, u) {
		if (
			((t = t.updateQueue), t !== null && ((t = t.shared), (u & 4194048) !== 0))
		) {
			var a = t.lanes;
			(a &= l.pendingLanes), (u |= a), (t.lanes = u), yi(l, u);
		}
	}
	function Hf(l, t) {
		var u = l.updateQueue,
			a = l.alternate;
		if (a !== null && ((a = a.updateQueue), u === a)) {
			var e = null,
				n = null;
			if (((u = u.firstBaseUpdate), u !== null)) {
				do {
					var f = {
						lane: u.lane,
						tag: u.tag,
						payload: u.payload,
						callback: null,
						next: null,
					};
					n === null ? (e = n = f) : (n = n.next = f), (u = u.next);
				} while (u !== null);
				n === null ? (e = n = t) : (n = n.next = t);
			} else {
				e = n = t;
			}
			(u = {
				baseState: a.baseState,
				firstBaseUpdate: e,
				lastBaseUpdate: n,
				shared: a.shared,
				callbacks: a.callbacks,
			}),
				(l.updateQueue = u);
			return;
		}
		(l = u.lastBaseUpdate),
			l === null ? (u.firstBaseUpdate = t) : (l.next = t),
			(u.lastBaseUpdate = t);
	}
	var qf = !1;
	function Za() {
		if (qf) {
			var l = Pu;
			if (l !== null) {
				throw l;
			}
		}
	}
	function Va(l, t, u, a) {
		qf = !1;
		var e = l.updateQueue;
		Jt = !1;
		var n = e.firstBaseUpdate,
			f = e.lastBaseUpdate,
			c = e.shared.pending;
		if (c !== null) {
			e.shared.pending = null;
			var i = c,
				r = i.next;
			(i.next = null), f === null ? (n = r) : (f.next = r), (f = i);
			var S = l.alternate;
			S !== null &&
				((S = S.updateQueue),
				(c = S.lastBaseUpdate),
				c !== f &&
					(c === null ? (S.firstBaseUpdate = r) : (c.next = r),
					(S.lastBaseUpdate = i)));
		}
		if (n !== null) {
			var T = e.baseState;
			(f = 0), (S = r = i = null), (c = n);
			do {
				var h = c.lane & -536870913,
					m = h !== c.lane;
				if (m ? (w & h) === h : (a & h) === h) {
					h !== 0 && h === Iu && (qf = !0),
						S !== null &&
							(S = S.next =
								{
									lane: 0,
									tag: c.tag,
									payload: c.payload,
									callback: null,
									next: null,
								});
					l: {
						var X = l,
							x = c;
						h = t;
						var fl = u;
						switch (x.tag) {
							case 1:
								if (((X = x.payload), typeof X == "function")) {
									T = X.call(fl, T, h);
									break l;
								}
								T = X;
								break l;
							case 3:
								X.flags = (X.flags & -65537) | 128;
							case 0:
								if (
									((X = x.payload),
									(h = typeof X == "function" ? X.call(fl, T, h) : X),
									h == null)
								) {
									break l;
								}
								T = N({}, T, h);
								break l;
							case 2:
								Jt = !0;
						}
					}
					(h = c.callback),
						h !== null &&
							((l.flags |= 64),
							m && (l.flags |= 8192),
							(m = e.callbacks),
							m === null ? (e.callbacks = [h]) : m.push(h));
				} else {
					(m = {
						lane: h,
						tag: c.tag,
						payload: c.payload,
						callback: c.callback,
						next: null,
					}),
						S === null ? ((r = S = m), (i = T)) : (S = S.next = m),
						(f |= h);
				}
				if (((c = c.next), c === null)) {
					if (((c = e.shared.pending), c === null)) {
						break;
					}
					(m = c),
						(c = m.next),
						(m.next = null),
						(e.lastBaseUpdate = m),
						(e.shared.pending = null);
				}
			} while (!0);
			S === null && (i = T),
				(e.baseState = i),
				(e.firstBaseUpdate = r),
				(e.lastBaseUpdate = S),
				n === null && (e.shared.lanes = 0),
				(uu |= f),
				(l.lanes = f),
				(l.memoizedState = T);
		}
	}
	function Es(l, t) {
		if (typeof l != "function") {
			throw Error(d(191, l));
		}
		l.call(t);
	}
	function As(l, t) {
		var u = l.callbacks;
		if (u !== null) {
			for (l.callbacks = null, l = 0; l < u.length; l++) {
				Es(u[l], t);
			}
		}
	}
	var la = z(null),
		Ke = z(0);
	function zs(l, t) {
		(l = Xt), _(Ke, l), _(la, t), (Xt = l | t.baseLanes);
	}
	function Yf() {
		_(Ke, Xt), _(la, la.current);
	}
	function Bf() {
		(Xt = Ke.current), M(la), M(Ke);
	}
	var $t = 0,
		Z = null,
		el = null,
		Sl = null,
		Je = !1,
		ta = !1,
		Uu = !1,
		we = 0,
		La = 0,
		ua = null,
		po = 0;
	function hl() {
		throw Error(d(321));
	}
	function xf(l, t) {
		if (t === null) {
			return !1;
		}
		for (var u = 0; u < t.length && u < l.length; u++) {
			if (!$l(l[u], t[u])) {
				return !1;
			}
		}
		return !0;
	}
	function Gf(l, t, u, a, e, n) {
		return (
			($t = n),
			(Z = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(g.H = l === null || l.memoizedState === null ? f0 : c0),
			(Uu = !1),
			(n = u(a, e)),
			(Uu = !1),
			ta && (n = Os(t, u, a, e)),
			_s(l),
			n
		);
	}
	function _s(l) {
		g.H = Pe;
		var t = el !== null && el.next !== null;
		if ((($t = 0), (Sl = el = Z = null), (Je = !1), (La = 0), (ua = null), t)) {
			throw Error(d(300));
		}
		l === null ||
			Al ||
			((l = l.dependencies), l !== null && Qe(l) && (Al = !0));
	}
	function Os(l, t, u, a) {
		Z = l;
		var e = 0;
		do {
			if ((ta && (ua = null), (La = 0), (ta = !1), 25 <= e)) {
				throw Error(d(301));
			}
			if (((e += 1), (Sl = el = null), l.updateQueue != null)) {
				var n = l.updateQueue;
				(n.lastEffect = null),
					(n.events = null),
					(n.stores = null),
					n.memoCache != null && (n.memoCache.index = 0);
			}
			(g.H = Go), (n = t(u, a));
		} while (ta);
		return n;
	}
	function No() {
		var l = g.H,
			t = l.useState()[0];
		return (
			(t = typeof t.then == "function" ? Ka(t) : t),
			(l = l.useState()[0]),
			(el !== null ? el.memoizedState : null) !== l && (Z.flags |= 1024),
			t
		);
	}
	function jf() {
		var l = we !== 0;
		return (we = 0), l;
	}
	function Xf(l, t, u) {
		(t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~u);
	}
	function Qf(l) {
		if (Je) {
			for (l = l.memoizedState; l !== null; ) {
				var t = l.queue;
				t !== null && (t.pending = null), (l = l.next);
			}
			Je = !1;
		}
		($t = 0), (Sl = el = Z = null), (ta = !1), (La = we = 0), (ua = null);
	}
	function Ql() {
		var l = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return Sl === null ? (Z.memoizedState = Sl = l) : (Sl = Sl.next = l), Sl;
	}
	function gl() {
		if (el === null) {
			var l = Z.alternate;
			l = l !== null ? l.memoizedState : null;
		} else {
			l = el.next;
		}
		var t = Sl === null ? Z.memoizedState : Sl.next;
		if (t !== null) {
			(Sl = t), (el = l);
		} else {
			if (l === null) {
				throw Z.alternate === null ? Error(d(467)) : Error(d(310));
			}
			(el = l),
				(l = {
					memoizedState: el.memoizedState,
					baseState: el.baseState,
					baseQueue: el.baseQueue,
					queue: el.queue,
					next: null,
				}),
				Sl === null ? (Z.memoizedState = Sl = l) : (Sl = Sl.next = l);
		}
		return Sl;
	}
	function Cf() {
		return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function Ka(l) {
		var t = La;
		return (
			(La += 1),
			ua === null && (ua = []),
			(l = gs(ua, l, t)),
			(t = Z),
			(Sl === null ? t.memoizedState : Sl.next) === null &&
				((t = t.alternate),
				(g.H = t === null || t.memoizedState === null ? f0 : c0)),
			l
		);
	}
	function We(l) {
		if (l !== null && typeof l == "object") {
			if (typeof l.then == "function") {
				return Ka(l);
			}
			if (l.$$typeof === Rl) {
				return ql(l);
			}
		}
		throw Error(d(438, String(l)));
	}
	function Zf(l) {
		var t = null,
			u = Z.updateQueue;
		if ((u !== null && (t = u.memoCache), t == null)) {
			var a = Z.alternate;
			a !== null &&
				((a = a.updateQueue),
				a !== null &&
					((a = a.memoCache),
					a != null &&
						(t = {
							data: a.data.map(function (e) {
								return e.slice();
							}),
							index: 0,
						})));
		}
		if (
			(t == null && (t = { data: [], index: 0 }),
			u === null && ((u = Cf()), (Z.updateQueue = u)),
			(u.memoCache = t),
			(u = t.data[t.index]),
			u === void 0)
		) {
			for (u = t.data[t.index] = Array(l), a = 0; a < l; a++) {
				u[a] = qu;
			}
		}
		return t.index++, u;
	}
	function qt(l, t) {
		return typeof t == "function" ? t(l) : t;
	}
	function $e(l) {
		var t = gl();
		return Vf(t, el, l);
	}
	function Vf(l, t, u) {
		var a = l.queue;
		if (a === null) {
			throw Error(d(311));
		}
		a.lastRenderedReducer = u;
		var e = l.baseQueue,
			n = a.pending;
		if (n !== null) {
			if (e !== null) {
				var f = e.next;
				(e.next = n.next), (n.next = f);
			}
			(t.baseQueue = e = n), (a.pending = null);
		}
		if (((n = l.baseState), e === null)) {
			l.memoizedState = n;
		} else {
			t = e.next;
			var c = (f = null),
				i = null,
				r = t,
				S = !1;
			do {
				var T = r.lane & -536870913;
				if (T !== r.lane ? (w & T) === T : ($t & T) === T) {
					var h = r.revertLane;
					if (h === 0) {
						i !== null &&
							(i = i.next =
								{
									lane: 0,
									revertLane: 0,
									action: r.action,
									hasEagerState: r.hasEagerState,
									eagerState: r.eagerState,
									next: null,
								}),
							T === Iu && (S = !0);
					} else if (($t & h) === h) {
						(r = r.next), h === Iu && (S = !0);
						continue;
					} else {
						(T = {
							lane: 0,
							revertLane: r.revertLane,
							action: r.action,
							hasEagerState: r.hasEagerState,
							eagerState: r.eagerState,
							next: null,
						}),
							i === null ? ((c = i = T), (f = n)) : (i = i.next = T),
							(Z.lanes |= h),
							(uu |= h);
					}
					(T = r.action),
						Uu && u(n, T),
						(n = r.hasEagerState ? r.eagerState : u(n, T));
				} else {
					(h = {
						lane: T,
						revertLane: r.revertLane,
						action: r.action,
						hasEagerState: r.hasEagerState,
						eagerState: r.eagerState,
						next: null,
					}),
						i === null ? ((c = i = h), (f = n)) : (i = i.next = h),
						(Z.lanes |= T),
						(uu |= T);
				}
				r = r.next;
			} while (r !== null && r !== t);
			if (
				(i === null ? (f = n) : (i.next = c),
				!$l(n, l.memoizedState) && ((Al = !0), S && ((u = Pu), u !== null)))
			) {
				throw u;
			}
			(l.memoizedState = n),
				(l.baseState = f),
				(l.baseQueue = i),
				(a.lastRenderedState = n);
		}
		return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
	}
	function Lf(l) {
		var t = gl(),
			u = t.queue;
		if (u === null) {
			throw Error(d(311));
		}
		u.lastRenderedReducer = l;
		var a = u.dispatch,
			e = u.pending,
			n = t.memoizedState;
		if (e !== null) {
			u.pending = null;
			var f = (e = e.next);
			do {
				(n = l(n, f.action)), (f = f.next);
			} while (f !== e);
			$l(n, t.memoizedState) || (Al = !0),
				(t.memoizedState = n),
				t.baseQueue === null && (t.baseState = n),
				(u.lastRenderedState = n);
		}
		return [n, a];
	}
	function Ms(l, t, u) {
		var a = Z,
			e = gl(),
			n = I;
		if (n) {
			if (u === void 0) {
				throw Error(d(407));
			}
			u = u();
		} else {
			u = t();
		}
		var f = !$l((el || e).memoizedState, u);
		f && ((e.memoizedState = u), (Al = !0)), (e = e.queue);
		var c = Rs.bind(null, a, e, l);
		if (
			(Ja(2048, 8, c, [l]),
			e.getSnapshot !== t || f || (Sl !== null && Sl.memoizedState.tag & 1))
		) {
			if (
				((a.flags |= 2048),
				aa(9, ke(), Us.bind(null, a, e, u, t), null),
				sl === null)
			) {
				throw Error(d(349));
			}
			n || ($t & 124) !== 0 || Ds(a, t, u);
		}
		return u;
	}
	function Ds(l, t, u) {
		(l.flags |= 16384),
			(l = { getSnapshot: t, value: u }),
			(t = Z.updateQueue),
			t === null
				? ((t = Cf()), (Z.updateQueue = t), (t.stores = [l]))
				: ((u = t.stores), u === null ? (t.stores = [l]) : u.push(l));
	}
	function Us(l, t, u, a) {
		(t.value = u), (t.getSnapshot = a), ps(t) && Ns(l);
	}
	function Rs(l, t, u) {
		return u(function () {
			ps(t) && Ns(l);
		});
	}
	function ps(l) {
		var t = l.getSnapshot;
		l = l.value;
		try {
			var u = t();
			return !$l(l, u);
		} catch {
			return !0;
		}
	}
	function Ns(l) {
		var t = Wu(l, 2);
		t !== null && tt(t, l, 2);
	}
	function Kf(l) {
		var t = Ql();
		if (typeof l == "function") {
			var u = l;
			if (((l = u()), Uu)) {
				Zt(!0);
				try {
					u();
				} finally {
					Zt(!1);
				}
			}
		}
		return (
			(t.memoizedState = t.baseState = l),
			(t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: qt,
				lastRenderedState: l,
			}),
			t
		);
	}
	function Hs(l, t, u, a) {
		return (l.baseState = u), Vf(l, el, typeof a == "function" ? a : qt);
	}
	function Ho(l, t, u, a, e) {
		if (Ie(l)) {
			throw Error(d(485));
		}
		if (((l = t.action), l !== null)) {
			var n = {
				payload: e,
				action: l,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (f) {
					n.listeners.push(f);
				},
			};
			g.T !== null ? u(!0) : (n.isTransition = !1),
				a(n),
				(u = t.pending),
				u === null
					? ((n.next = t.pending = n), qs(t, n))
					: ((n.next = u.next), (t.pending = u.next = n));
		}
	}
	function qs(l, t) {
		var u = t.action,
			a = t.payload,
			e = l.state;
		if (t.isTransition) {
			var n = g.T,
				f = {};
			g.T = f;
			try {
				var c = u(e, a),
					i = g.S;
				i !== null && i(f, c), Ys(l, t, c);
			} catch (r) {
				Jf(l, t, r);
			} finally {
				g.T = n;
			}
		} else {
			try {
				(n = u(e, a)), Ys(l, t, n);
			} catch (r) {
				Jf(l, t, r);
			}
		}
	}
	function Ys(l, t, u) {
		u !== null && typeof u == "object" && typeof u.then == "function"
			? u.then(
					function (a) {
						Bs(l, t, a);
					},
					function (a) {
						return Jf(l, t, a);
					},
				)
			: Bs(l, t, u);
	}
	function Bs(l, t, u) {
		(t.status = "fulfilled"),
			(t.value = u),
			xs(t),
			(l.state = u),
			(t = l.pending),
			t !== null &&
				((u = t.next),
				u === t ? (l.pending = null) : ((u = u.next), (t.next = u), qs(l, u)));
	}
	function Jf(l, t, u) {
		var a = l.pending;
		if (((l.pending = null), a !== null)) {
			a = a.next;
			do {
				(t.status = "rejected"), (t.reason = u), xs(t), (t = t.next);
			} while (t !== a);
		}
		l.action = null;
	}
	function xs(l) {
		l = l.listeners;
		for (var t = 0; t < l.length; t++) {
			(0, l[t])();
		}
	}
	function Gs(l, t) {
		return t;
	}
	function js(l, t) {
		if (I) {
			var u = sl.formState;
			if (u !== null) {
				l: {
					var a = Z;
					if (I) {
						if (yl) {
							t: {
								for (var e = yl, n = bt; e.nodeType !== 8; ) {
									if (!n) {
										e = null;
										break t;
									}
									if (((e = ht(e.nextSibling)), e === null)) {
										e = null;
										break t;
									}
								}
								(n = e.data), (e = n === "F!" || n === "F" ? e : null);
							}
							if (e) {
								(yl = ht(e.nextSibling)), (a = e.data === "F!");
								break l;
							}
						}
						_u(a);
					}
					a = !1;
				}
				a && (t = u[0]);
			}
		}
		return (
			(u = Ql()),
			(u.memoizedState = u.baseState = t),
			(a = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Gs,
				lastRenderedState: t,
			}),
			(u.queue = a),
			(u = a0.bind(null, Z, a)),
			(a.dispatch = u),
			(a = Kf(!1)),
			(n = Ff.bind(null, Z, !1, a.queue)),
			(a = Ql()),
			(e = { state: t, dispatch: null, action: l, pending: null }),
			(a.queue = e),
			(u = Ho.bind(null, Z, e, n, u)),
			(e.dispatch = u),
			(a.memoizedState = l),
			[t, u, !1]
		);
	}
	function Xs(l) {
		var t = gl();
		return Qs(t, el, l);
	}
	function Qs(l, t, u) {
		if (
			((t = Vf(l, t, Gs)[0]),
			(l = $e(qt)[0]),
			typeof t == "object" && t !== null && typeof t.then == "function")
		) {
			try {
				var a = Ka(t);
			} catch (f) {
				throw f === Xa ? Ve : f;
			}
		} else {
			a = t;
		}
		t = gl();
		var e = t.queue,
			n = e.dispatch;
		return (
			u !== t.memoizedState &&
				((Z.flags |= 2048), aa(9, ke(), qo.bind(null, e, u), null)),
			[a, n, l]
		);
	}
	function qo(l, t) {
		l.action = t;
	}
	function Cs(l) {
		var t = gl(),
			u = el;
		if (u !== null) {
			return Qs(t, u, l);
		}
		gl(), (t = t.memoizedState), (u = gl());
		var a = u.queue.dispatch;
		return (u.memoizedState = l), [t, a, !1];
	}
	function aa(l, t, u, a) {
		return (
			(l = { tag: l, create: u, deps: a, inst: t, next: null }),
			(t = Z.updateQueue),
			t === null && ((t = Cf()), (Z.updateQueue = t)),
			(u = t.lastEffect),
			u === null
				? (t.lastEffect = l.next = l)
				: ((a = u.next), (u.next = l), (l.next = a), (t.lastEffect = l)),
			l
		);
	}
	function ke() {
		return { destroy: void 0, resource: void 0 };
	}
	function Zs() {
		return gl().memoizedState;
	}
	function Fe(l, t, u, a) {
		var e = Ql();
		(a = a === void 0 ? null : a),
			(Z.flags |= l),
			(e.memoizedState = aa(1 | t, ke(), u, a));
	}
	function Ja(l, t, u, a) {
		var e = gl();
		a = a === void 0 ? null : a;
		var n = e.memoizedState.inst;
		el !== null && a !== null && xf(a, el.memoizedState.deps)
			? (e.memoizedState = aa(t, n, u, a))
			: ((Z.flags |= l), (e.memoizedState = aa(1 | t, n, u, a)));
	}
	function Vs(l, t) {
		Fe(8390656, 8, l, t);
	}
	function Ls(l, t) {
		Ja(2048, 8, l, t);
	}
	function Ks(l, t) {
		return Ja(4, 2, l, t);
	}
	function Js(l, t) {
		return Ja(4, 4, l, t);
	}
	function ws(l, t) {
		if (typeof t == "function") {
			l = l();
			var u = t(l);
			return function () {
				typeof u == "function" ? u() : t(null);
			};
		}
		if (t != null) {
			return (
				(l = l()),
				(t.current = l),
				function () {
					t.current = null;
				}
			);
		}
	}
	function Ws(l, t, u) {
		(u = u != null ? u.concat([l]) : null), Ja(4, 4, ws.bind(null, t, l), u);
	}
	function wf() {}
	function $s(l, t) {
		var u = gl();
		t = t === void 0 ? null : t;
		var a = u.memoizedState;
		return t !== null && xf(t, a[1]) ? a[0] : ((u.memoizedState = [l, t]), l);
	}
	function ks(l, t) {
		var u = gl();
		t = t === void 0 ? null : t;
		var a = u.memoizedState;
		if (t !== null && xf(t, a[1])) {
			return a[0];
		}
		if (((a = l()), Uu)) {
			Zt(!0);
			try {
				l();
			} finally {
				Zt(!1);
			}
		}
		return (u.memoizedState = [a, t]), a;
	}
	function Wf(l, t, u) {
		return u === void 0 || ($t & 1073741824) !== 0
			? (l.memoizedState = t)
			: ((l.memoizedState = u), (l = P0()), (Z.lanes |= l), (uu |= l), u);
	}
	function Fs(l, t, u, a) {
		return $l(u, t)
			? u
			: la.current !== null
				? ((l = Wf(l, u, a)), $l(l, t) || (Al = !0), l)
				: ($t & 42) === 0
					? ((Al = !0), (l.memoizedState = u))
					: ((l = P0()), (Z.lanes |= l), (uu |= l), t);
	}
	function Is(l, t, u, a, e) {
		var n = O.p;
		O.p = n !== 0 && 8 > n ? n : 8;
		var f = g.T,
			c = {};
		(g.T = c), Ff(l, !1, t, u);
		try {
			var i = e(),
				r = g.S;
			if (
				(r !== null && r(c, i),
				i !== null && typeof i == "object" && typeof i.then == "function")
			) {
				var S = Ro(i, a);
				wa(l, t, S, lt(l));
			} else {
				wa(l, t, a, lt(l));
			}
		} catch (T) {
			wa(l, t, { then: function () {}, status: "rejected", reason: T }, lt());
		} finally {
			(O.p = n), (g.T = f);
		}
	}
	function Yo() {}
	function $f(l, t, u, a) {
		if (l.tag !== 5) {
			throw Error(d(476));
		}
		var e = Ps(l).queue;
		Is(
			l,
			e,
			t,
			j,
			u === null
				? Yo
				: function () {
						return l0(l), u(a);
					},
		);
	}
	function Ps(l) {
		var t = l.memoizedState;
		if (t !== null) {
			return t;
		}
		t = {
			memoizedState: j,
			baseState: j,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: qt,
				lastRenderedState: j,
			},
			next: null,
		};
		var u = {};
		return (
			(t.next = {
				memoizedState: u,
				baseState: u,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: qt,
					lastRenderedState: u,
				},
				next: null,
			}),
			(l.memoizedState = t),
			(l = l.alternate),
			l !== null && (l.memoizedState = t),
			t
		);
	}
	function l0(l) {
		var t = Ps(l).next.queue;
		wa(l, t, {}, lt());
	}
	function kf() {
		return ql(de);
	}
	function t0() {
		return gl().memoizedState;
	}
	function u0() {
		return gl().memoizedState;
	}
	function Bo(l) {
		for (var t = l.return; t !== null; ) {
			switch (t.tag) {
				case 24:
				case 3:
					var u = lt();
					l = wt(u);
					var a = Wt(t, l, u);
					a !== null && (tt(a, t, u), Ca(a, t, u)),
						(t = { cache: Mf() }),
						(l.payload = t);
					return;
			}
			t = t.return;
		}
	}
	function xo(l, t, u) {
		var a = lt();
		(u = {
			lane: a,
			revertLane: 0,
			action: u,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			Ie(l)
				? e0(t, u)
				: ((u = mf(l, t, u, a)), u !== null && (tt(u, l, a), n0(u, t, a)));
	}
	function a0(l, t, u) {
		var a = lt();
		wa(l, t, u, a);
	}
	function wa(l, t, u, a) {
		var e = {
			lane: a,
			revertLane: 0,
			action: u,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (Ie(l)) {
			e0(t, e);
		} else {
			var n = l.alternate;
			if (
				l.lanes === 0 &&
				(n === null || n.lanes === 0) &&
				((n = t.lastRenderedReducer), n !== null)
			) {
				try {
					var f = t.lastRenderedState,
						c = n(f, u);
					if (((e.hasEagerState = !0), (e.eagerState = c), $l(c, f))) {
						return Be(l, t, e, 0), sl === null && Ye(), !1;
					}
				} catch {
				} finally {
				}
			}
			if (((u = mf(l, t, e, a)), u !== null)) {
				return tt(u, l, a), n0(u, t, a), !0;
			}
		}
		return !1;
	}
	function Ff(l, t, u, a) {
		if (
			((a = {
				lane: 2,
				revertLane: Rc(),
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			Ie(l))
		) {
			if (t) {
				throw Error(d(479));
			}
		} else {
			(t = mf(l, u, a, 2)), t !== null && tt(t, l, 2);
		}
	}
	function Ie(l) {
		var t = l.alternate;
		return l === Z || (t !== null && t === Z);
	}
	function e0(l, t) {
		ta = Je = !0;
		var u = l.pending;
		u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
			(l.pending = t);
	}
	function n0(l, t, u) {
		if ((u & 4194048) !== 0) {
			var a = t.lanes;
			(a &= l.pendingLanes), (u |= a), (t.lanes = u), yi(l, u);
		}
	}
	var Pe = {
			readContext: ql,
			use: We,
			useCallback: hl,
			useContext: hl,
			useEffect: hl,
			useImperativeHandle: hl,
			useLayoutEffect: hl,
			useInsertionEffect: hl,
			useMemo: hl,
			useReducer: hl,
			useRef: hl,
			useState: hl,
			useDebugValue: hl,
			useDeferredValue: hl,
			useTransition: hl,
			useSyncExternalStore: hl,
			useId: hl,
			useHostTransitionStatus: hl,
			useFormState: hl,
			useActionState: hl,
			useOptimistic: hl,
			useMemoCache: hl,
			useCacheRefresh: hl,
		},
		f0 = {
			readContext: ql,
			use: We,
			useCallback: function (l, t) {
				return (Ql().memoizedState = [l, t === void 0 ? null : t]), l;
			},
			useContext: ql,
			useEffect: Vs,
			useImperativeHandle: function (l, t, u) {
				(u = u != null ? u.concat([l]) : null),
					Fe(4194308, 4, ws.bind(null, t, l), u);
			},
			useLayoutEffect: function (l, t) {
				return Fe(4194308, 4, l, t);
			},
			useInsertionEffect: function (l, t) {
				Fe(4, 2, l, t);
			},
			useMemo: function (l, t) {
				var u = Ql();
				t = t === void 0 ? null : t;
				var a = l();
				if (Uu) {
					Zt(!0);
					try {
						l();
					} finally {
						Zt(!1);
					}
				}
				return (u.memoizedState = [a, t]), a;
			},
			useReducer: function (l, t, u) {
				var a = Ql();
				if (u !== void 0) {
					var e = u(t);
					if (Uu) {
						Zt(!0);
						try {
							u(t);
						} finally {
							Zt(!1);
						}
					}
				} else {
					e = t;
				}
				return (
					(a.memoizedState = a.baseState = e),
					(l = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: l,
						lastRenderedState: e,
					}),
					(a.queue = l),
					(l = l.dispatch = xo.bind(null, Z, l)),
					[a.memoizedState, l]
				);
			},
			useRef: function (l) {
				var t = Ql();
				return (l = { current: l }), (t.memoizedState = l);
			},
			useState: function (l) {
				l = Kf(l);
				var t = l.queue,
					u = a0.bind(null, Z, t);
				return (t.dispatch = u), [l.memoizedState, u];
			},
			useDebugValue: wf,
			useDeferredValue: function (l, t) {
				var u = Ql();
				return Wf(u, l, t);
			},
			useTransition: function () {
				var l = Kf(!1);
				return (
					(l = Is.bind(null, Z, l.queue, !0, !1)),
					(Ql().memoizedState = l),
					[!1, l]
				);
			},
			useSyncExternalStore: function (l, t, u) {
				var a = Z,
					e = Ql();
				if (I) {
					if (u === void 0) {
						throw Error(d(407));
					}
					u = u();
				} else {
					if (((u = t()), sl === null)) {
						throw Error(d(349));
					}
					(w & 124) !== 0 || Ds(a, t, u);
				}
				e.memoizedState = u;
				var n = { value: u, getSnapshot: t };
				return (
					(e.queue = n),
					Vs(Rs.bind(null, a, n, l), [l]),
					(a.flags |= 2048),
					aa(9, ke(), Us.bind(null, a, n, u, t), null),
					u
				);
			},
			useId: function () {
				var l = Ql(),
					t = sl.identifierPrefix;
				if (I) {
					var u = pt,
						a = Rt;
					(u = (a & ~(1 << (32 - Wl(a) - 1))).toString(32) + u),
						(t = "\xAB" + t + "R" + u),
						(u = we++),
						0 < u && (t += "H" + u.toString(32)),
						(t += "\xBB");
				} else {
					(u = po++), (t = "\xAB" + t + "r" + u.toString(32) + "\xBB");
				}
				return (l.memoizedState = t);
			},
			useHostTransitionStatus: kf,
			useFormState: js,
			useActionState: js,
			useOptimistic: function (l) {
				var t = Ql();
				t.memoizedState = t.baseState = l;
				var u = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(t.queue = u), (t = Ff.bind(null, Z, !0, u)), (u.dispatch = t), [l, t]
				);
			},
			useMemoCache: Zf,
			useCacheRefresh: function () {
				return (Ql().memoizedState = Bo.bind(null, Z));
			},
		},
		c0 = {
			readContext: ql,
			use: We,
			useCallback: $s,
			useContext: ql,
			useEffect: Ls,
			useImperativeHandle: Ws,
			useInsertionEffect: Ks,
			useLayoutEffect: Js,
			useMemo: ks,
			useReducer: $e,
			useRef: Zs,
			useState: function () {
				return $e(qt);
			},
			useDebugValue: wf,
			useDeferredValue: function (l, t) {
				var u = gl();
				return Fs(u, el.memoizedState, l, t);
			},
			useTransition: function () {
				var l = $e(qt)[0],
					t = gl().memoizedState;
				return [typeof l == "boolean" ? l : Ka(l), t];
			},
			useSyncExternalStore: Ms,
			useId: t0,
			useHostTransitionStatus: kf,
			useFormState: Xs,
			useActionState: Xs,
			useOptimistic: function (l, t) {
				var u = gl();
				return Hs(u, el, l, t);
			},
			useMemoCache: Zf,
			useCacheRefresh: u0,
		},
		Go = {
			readContext: ql,
			use: We,
			useCallback: $s,
			useContext: ql,
			useEffect: Ls,
			useImperativeHandle: Ws,
			useInsertionEffect: Ks,
			useLayoutEffect: Js,
			useMemo: ks,
			useReducer: Lf,
			useRef: Zs,
			useState: function () {
				return Lf(qt);
			},
			useDebugValue: wf,
			useDeferredValue: function (l, t) {
				var u = gl();
				return el === null ? Wf(u, l, t) : Fs(u, el.memoizedState, l, t);
			},
			useTransition: function () {
				var l = Lf(qt)[0],
					t = gl().memoizedState;
				return [typeof l == "boolean" ? l : Ka(l), t];
			},
			useSyncExternalStore: Ms,
			useId: t0,
			useHostTransitionStatus: kf,
			useFormState: Cs,
			useActionState: Cs,
			useOptimistic: function (l, t) {
				var u = gl();
				return el !== null
					? Hs(u, el, l, t)
					: ((u.baseState = l), [l, u.queue.dispatch]);
			},
			useMemoCache: Zf,
			useCacheRefresh: u0,
		},
		ea = null,
		Wa = 0;
	function ln(l) {
		var t = Wa;
		return (Wa += 1), ea === null && (ea = []), gs(ea, l, t);
	}
	function $a(l, t) {
		(t = t.props.ref), (l.ref = t !== void 0 ? t : null);
	}
	function tn(l, t) {
		throw t.$$typeof === P
			? Error(d(525))
			: ((l = Object.prototype.toString.call(t)),
				Error(
					d(
						31,
						l === "[object Object]"
							? "object with keys {" + Object.keys(t).join(", ") + "}"
							: l,
					),
				));
	}
	function i0(l) {
		var t = l._init;
		return t(l._payload);
	}
	function s0(l) {
		function t(o, v) {
			if (l) {
				var y = o.deletions;
				y === null ? ((o.deletions = [v]), (o.flags |= 16)) : y.push(v);
			}
		}
		function u(o, v) {
			if (!l) {
				return null;
			}
			for (; v !== null; ) {
				t(o, v), (v = v.sibling);
			}
			return null;
		}
		function a(o) {
			for (var v = new Map(); o !== null; ) {
				o.key !== null ? v.set(o.key, o) : v.set(o.index, o), (o = o.sibling);
			}
			return v;
		}
		function e(o, v) {
			return (o = Ut(o, v)), (o.index = 0), (o.sibling = null), o;
		}
		function n(o, v, y) {
			return (
				(o.index = y),
				l
					? ((y = o.alternate),
						y !== null
							? ((y = y.index), y < v ? ((o.flags |= 67108866), v) : y)
							: ((o.flags |= 67108866), v))
					: ((o.flags |= 1048576), v)
			);
		}
		function f(o) {
			return l && o.alternate === null && (o.flags |= 67108866), o;
		}
		function c(o, v, y, b) {
			return v === null || v.tag !== 6
				? ((v = gf(y, o.mode, b)), (v.return = o), v)
				: ((v = e(v, y)), (v.return = o), v);
		}
		function i(o, v, y, b) {
			var U = y.type;
			return U === Bl
				? S(o, v, y.props.children, b, y.key)
				: v !== null &&
					  (v.elementType === U ||
							(typeof U == "object" &&
								U !== null &&
								U.$$typeof === Kl &&
								i0(U) === v.type))
					? ((v = e(v, y.props)), $a(v, y), (v.return = o), v)
					: ((v = Ge(y.type, y.key, y.props, null, o.mode, b)),
						$a(v, y),
						(v.return = o),
						v);
		}
		function r(o, v, y, b) {
			return v === null ||
				v.tag !== 4 ||
				v.stateNode.containerInfo !== y.containerInfo ||
				v.stateNode.implementation !== y.implementation
				? ((v = bf(y, o.mode, b)), (v.return = o), v)
				: ((v = e(v, y.children || [])), (v.return = o), v);
		}
		function S(o, v, y, b, U) {
			return v === null || v.tag !== 7
				? ((v = Tu(y, o.mode, b, U)), (v.return = o), v)
				: ((v = e(v, y)), (v.return = o), v);
		}
		function T(o, v, y) {
			if (
				(typeof v == "string" && v !== "") ||
				typeof v == "number" ||
				typeof v == "bigint"
			) {
				return (v = gf("" + v, o.mode, y)), (v.return = o), v;
			}
			if (typeof v == "object" && v !== null) {
				switch (v.$$typeof) {
					case W:
						return (
							(y = Ge(v.type, v.key, v.props, null, o.mode, y)),
							$a(y, v),
							(y.return = o),
							y
						);
					case Ol:
						return (v = bf(v, o.mode, y)), (v.return = o), v;
					case Kl:
						var b = v._init;
						return (v = b(v._payload)), T(o, v, y);
				}
				if (Nl(v) || pl(v)) {
					return (v = Tu(v, o.mode, y, null)), (v.return = o), v;
				}
				if (typeof v.then == "function") {
					return T(o, ln(v), y);
				}
				if (v.$$typeof === Rl) {
					return T(o, Ce(o, v), y);
				}
				tn(o, v);
			}
			return null;
		}
		function h(o, v, y, b) {
			var U = v !== null ? v.key : null;
			if (
				(typeof y == "string" && y !== "") ||
				typeof y == "number" ||
				typeof y == "bigint"
			) {
				return U !== null ? null : c(o, v, "" + y, b);
			}
			if (typeof y == "object" && y !== null) {
				switch (y.$$typeof) {
					case W:
						return y.key === U ? i(o, v, y, b) : null;
					case Ol:
						return y.key === U ? r(o, v, y, b) : null;
					case Kl:
						return (U = y._init), (y = U(y._payload)), h(o, v, y, b);
				}
				if (Nl(y) || pl(y)) {
					return U !== null ? null : S(o, v, y, b, null);
				}
				if (typeof y.then == "function") {
					return h(o, v, ln(y), b);
				}
				if (y.$$typeof === Rl) {
					return h(o, v, Ce(o, y), b);
				}
				tn(o, y);
			}
			return null;
		}
		function m(o, v, y, b, U) {
			if (
				(typeof b == "string" && b !== "") ||
				typeof b == "number" ||
				typeof b == "bigint"
			) {
				return (o = o.get(y) || null), c(v, o, "" + b, U);
			}
			if (typeof b == "object" && b !== null) {
				switch (b.$$typeof) {
					case W:
						return (
							(o = o.get(b.key === null ? y : b.key) || null), i(v, o, b, U)
						);
					case Ol:
						return (
							(o = o.get(b.key === null ? y : b.key) || null), r(v, o, b, U)
						);
					case Kl:
						var V = b._init;
						return (b = V(b._payload)), m(o, v, y, b, U);
				}
				if (Nl(b) || pl(b)) {
					return (o = o.get(y) || null), S(v, o, b, U, null);
				}
				if (typeof b.then == "function") {
					return m(o, v, y, ln(b), U);
				}
				if (b.$$typeof === Rl) {
					return m(o, v, y, Ce(v, b), U);
				}
				tn(v, b);
			}
			return null;
		}
		function X(o, v, y, b) {
			for (
				var U = null, V = null, Y = v, G = (v = 0), _l = null;
				Y !== null && G < y.length;
				G++
			) {
				Y.index > G ? ((_l = Y), (Y = null)) : (_l = Y.sibling);
				var F = h(o, Y, y[G], b);
				if (F === null) {
					Y === null && (Y = _l);
					break;
				}
				l && Y && F.alternate === null && t(o, Y),
					(v = n(F, v, G)),
					V === null ? (U = F) : (V.sibling = F),
					(V = F),
					(Y = _l);
			}
			if (G === y.length) {
				return u(o, Y), I && Au(o, G), U;
			}
			if (Y === null) {
				for (; G < y.length; G++) {
					(Y = T(o, y[G], b)),
						Y !== null &&
							((v = n(Y, v, G)),
							V === null ? (U = Y) : (V.sibling = Y),
							(V = Y));
				}
				return I && Au(o, G), U;
			}
			for (Y = a(Y); G < y.length; G++) {
				(_l = m(Y, o, G, y[G], b)),
					_l !== null &&
						(l &&
							_l.alternate !== null &&
							Y.delete(_l.key === null ? G : _l.key),
						(v = n(_l, v, G)),
						V === null ? (U = _l) : (V.sibling = _l),
						(V = _l));
			}
			return (
				l &&
					Y.forEach(function (du) {
						return t(o, du);
					}),
				I && Au(o, G),
				U
			);
		}
		function x(o, v, y, b) {
			if (y == null) {
				throw Error(d(151));
			}
			for (
				var U = null, V = null, Y = v, G = (v = 0), _l = null, F = y.next();
				Y !== null && !F.done;
				G++, F = y.next()
			) {
				Y.index > G ? ((_l = Y), (Y = null)) : (_l = Y.sibling);
				var du = h(o, Y, F.value, b);
				if (du === null) {
					Y === null && (Y = _l);
					break;
				}
				l && Y && du.alternate === null && t(o, Y),
					(v = n(du, v, G)),
					V === null ? (U = du) : (V.sibling = du),
					(V = du),
					(Y = _l);
			}
			if (F.done) {
				return u(o, Y), I && Au(o, G), U;
			}
			if (Y === null) {
				for (; !F.done; G++, F = y.next()) {
					(F = T(o, F.value, b)),
						F !== null &&
							((v = n(F, v, G)),
							V === null ? (U = F) : (V.sibling = F),
							(V = F));
				}
				return I && Au(o, G), U;
			}
			for (Y = a(Y); !F.done; G++, F = y.next()) {
				(F = m(Y, o, G, F.value, b)),
					F !== null &&
						(l && F.alternate !== null && Y.delete(F.key === null ? G : F.key),
						(v = n(F, v, G)),
						V === null ? (U = F) : (V.sibling = F),
						(V = F));
			}
			return (
				l &&
					Y.forEach(function (jy) {
						return t(o, jy);
					}),
				I && Au(o, G),
				U
			);
		}
		function fl(o, v, y, b) {
			if (
				(typeof y == "object" &&
					y !== null &&
					y.type === Bl &&
					y.key === null &&
					(y = y.props.children),
				typeof y == "object" && y !== null)
			) {
				switch (y.$$typeof) {
					case W:
						l: {
							for (var U = y.key; v !== null; ) {
								if (v.key === U) {
									if (((U = y.type), U === Bl)) {
										if (v.tag === 7) {
											u(o, v.sibling),
												(b = e(v, y.props.children)),
												(b.return = o),
												(o = b);
											break l;
										}
									} else if (
										v.elementType === U ||
										(typeof U == "object" &&
											U !== null &&
											U.$$typeof === Kl &&
											i0(U) === v.type)
									) {
										u(o, v.sibling),
											(b = e(v, y.props)),
											$a(b, y),
											(b.return = o),
											(o = b);
										break l;
									}
									u(o, v);
									break;
								} else {
									t(o, v);
								}
								v = v.sibling;
							}
							y.type === Bl
								? ((b = Tu(y.props.children, o.mode, b, y.key)),
									(b.return = o),
									(o = b))
								: ((b = Ge(y.type, y.key, y.props, null, o.mode, b)),
									$a(b, y),
									(b.return = o),
									(o = b));
						}
						return f(o);
					case Ol:
						l: {
							for (U = y.key; v !== null; ) {
								if (v.key === U) {
									if (
										v.tag === 4 &&
										v.stateNode.containerInfo === y.containerInfo &&
										v.stateNode.implementation === y.implementation
									) {
										u(o, v.sibling),
											(b = e(v, y.children || [])),
											(b.return = o),
											(o = b);
										break l;
									} else {
										u(o, v);
										break;
									}
								} else {
									t(o, v);
								}
								v = v.sibling;
							}
							(b = bf(y, o.mode, b)), (b.return = o), (o = b);
						}
						return f(o);
					case Kl:
						return (U = y._init), (y = U(y._payload)), fl(o, v, y, b);
				}
				if (Nl(y)) {
					return X(o, v, y, b);
				}
				if (pl(y)) {
					if (((U = pl(y)), typeof U != "function")) {
						throw Error(d(150));
					}
					return (y = U.call(y)), x(o, v, y, b);
				}
				if (typeof y.then == "function") {
					return fl(o, v, ln(y), b);
				}
				if (y.$$typeof === Rl) {
					return fl(o, v, Ce(o, y), b);
				}
				tn(o, y);
			}
			return (typeof y == "string" && y !== "") ||
				typeof y == "number" ||
				typeof y == "bigint"
				? ((y = "" + y),
					v !== null && v.tag === 6
						? (u(o, v.sibling), (b = e(v, y)), (b.return = o), (o = b))
						: (u(o, v), (b = gf(y, o.mode, b)), (b.return = o), (o = b)),
					f(o))
				: u(o, v);
		}
		return function (o, v, y, b) {
			try {
				Wa = 0;
				var U = fl(o, v, y, b);
				return (ea = null), U;
			} catch (Y) {
				if (Y === Xa || Y === Ve) {
					throw Y;
				}
				var V = kl(29, Y, null, o.mode);
				return (V.lanes = b), (V.return = o), V;
			} finally {
			}
		};
	}
	var na = s0(!0),
		v0 = s0(!1),
		it = z(null),
		Tt = null;
	function kt(l) {
		var t = l.alternate;
		_(Tl, Tl.current & 1),
			_(it, l),
			Tt === null &&
				(t === null || la.current !== null || t.memoizedState !== null) &&
				(Tt = l);
	}
	function d0(l) {
		if (l.tag === 22) {
			if ((_(Tl, Tl.current), _(it, l), Tt === null)) {
				var t = l.alternate;
				t !== null && t.memoizedState !== null && (Tt = l);
			}
		} else {
			Ft();
		}
	}
	function Ft() {
		_(Tl, Tl.current), _(it, it.current);
	}
	function Yt(l) {
		M(it), Tt === l && (Tt = null), M(Tl);
	}
	var Tl = z(0);
	function un(l) {
		for (var t = l; t !== null; ) {
			if (t.tag === 13) {
				var u = t.memoizedState;
				if (
					u !== null &&
					((u = u.dehydrated), u === null || u.data === "$?" || Cc(u))
				) {
					return t;
				}
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if ((t.flags & 128) !== 0) {
					return t;
				}
			} else if (t.child !== null) {
				(t.child.return = t), (t = t.child);
				continue;
			}
			if (t === l) {
				break;
			}
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === l) {
					return null;
				}
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
		return null;
	}
	function If(l, t, u, a) {
		(t = l.memoizedState),
			(u = u(a, t)),
			(u = u == null ? t : N({}, t, u)),
			(l.memoizedState = u),
			l.lanes === 0 && (l.updateQueue.baseState = u);
	}
	var Pf = {
		enqueueSetState: function (l, t, u) {
			l = l._reactInternals;
			var a = lt(),
				e = wt(a);
			(e.payload = t),
				u != null && (e.callback = u),
				(t = Wt(l, e, a)),
				t !== null && (tt(t, l, a), Ca(t, l, a));
		},
		enqueueReplaceState: function (l, t, u) {
			l = l._reactInternals;
			var a = lt(),
				e = wt(a);
			(e.tag = 1),
				(e.payload = t),
				u != null && (e.callback = u),
				(t = Wt(l, e, a)),
				t !== null && (tt(t, l, a), Ca(t, l, a));
		},
		enqueueForceUpdate: function (l, t) {
			l = l._reactInternals;
			var u = lt(),
				a = wt(u);
			(a.tag = 2),
				t != null && (a.callback = t),
				(t = Wt(l, a, u)),
				t !== null && (tt(t, l, u), Ca(t, l, u));
		},
	};
	function o0(l, t, u, a, e, n, f) {
		return (
			(l = l.stateNode),
			typeof l.shouldComponentUpdate == "function"
				? l.shouldComponentUpdate(a, n, f)
				: t.prototype && t.prototype.isPureReactComponent
					? !Na(u, a) || !Na(e, n)
					: !0
		);
	}
	function y0(l, t, u, a) {
		(l = t.state),
			typeof t.componentWillReceiveProps == "function" &&
				t.componentWillReceiveProps(u, a),
			typeof t.UNSAFE_componentWillReceiveProps == "function" &&
				t.UNSAFE_componentWillReceiveProps(u, a),
			t.state !== l && Pf.enqueueReplaceState(t, t.state, null);
	}
	function Ru(l, t) {
		var u = t;
		if ("ref" in t) {
			u = {};
			for (var a in t) {
				a !== "ref" && (u[a] = t[a]);
			}
		}
		if ((l = l.defaultProps)) {
			u === t && (u = N({}, u));
			for (var e in l) {
				u[e] === void 0 && (u[e] = l[e]);
			}
		}
		return u;
	}
	var an =
		typeof reportError == "function"
			? reportError
			: function (l) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var t = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof l == "object" &&
								l !== null &&
								typeof l.message == "string"
									? String(l.message)
									: String(l),
							error: l,
						});
						if (!window.dispatchEvent(t)) {
							return;
						}
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", l);
						return;
					}
					console.error(l);
				};
	function r0(l) {
		an(l);
	}
	function h0(l) {
		console.error(l);
	}
	function m0(l) {
		an(l);
	}
	function en(l, t) {
		try {
			var u = l.onUncaughtError;
			u(t.value, { componentStack: t.stack });
		} catch (a) {
			setTimeout(function () {
				throw a;
			});
		}
	}
	function S0(l, t, u) {
		try {
			var a = l.onCaughtError;
			a(u.value, {
				componentStack: u.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null,
			});
		} catch (e) {
			setTimeout(function () {
				throw e;
			});
		}
	}
	function lc(l, t, u) {
		return (
			(u = wt(u)),
			(u.tag = 3),
			(u.payload = { element: null }),
			(u.callback = function () {
				en(l, t);
			}),
			u
		);
	}
	function g0(l) {
		return (l = wt(l)), (l.tag = 3), l;
	}
	function b0(l, t, u, a) {
		var e = u.type.getDerivedStateFromError;
		if (typeof e == "function") {
			var n = a.value;
			(l.payload = function () {
				return e(n);
			}),
				(l.callback = function () {
					S0(t, u, a);
				});
		}
		var f = u.stateNode;
		f !== null &&
			typeof f.componentDidCatch == "function" &&
			(l.callback = function () {
				S0(t, u, a),
					typeof e != "function" &&
						(au === null ? (au = new Set([this])) : au.add(this));
				var c = a.stack;
				this.componentDidCatch(a.value, {
					componentStack: c !== null ? c : "",
				});
			});
	}
	function jo(l, t, u, a, e) {
		if (
			((u.flags |= 32768),
			a !== null && typeof a == "object" && typeof a.then == "function")
		) {
			if (
				((t = u.alternate),
				t !== null && xa(t, u, e, !0),
				(u = it.current),
				u !== null)
			) {
				switch (u.tag) {
					case 13:
						return (
							Tt === null ? _c() : u.alternate === null && rl === 0 && (rl = 3),
							(u.flags &= -257),
							(u.flags |= 65536),
							(u.lanes = e),
							a === Rf
								? (u.flags |= 16384)
								: ((t = u.updateQueue),
									t === null ? (u.updateQueue = new Set([a])) : t.add(a),
									Mc(l, a, e)),
							!1
						);
					case 22:
						return (
							(u.flags |= 65536),
							a === Rf
								? (u.flags |= 16384)
								: ((t = u.updateQueue),
									t === null
										? ((t = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([a]),
											}),
											(u.updateQueue = t))
										: ((u = t.retryQueue),
											u === null ? (t.retryQueue = new Set([a])) : u.add(a)),
									Mc(l, a, e)),
							!1
						);
				}
				throw Error(d(435, u.tag));
			}
			return Mc(l, a, e), _c(), !1;
		}
		if (I) {
			return (
				(t = it.current),
				t !== null
					? ((t.flags & 65536) === 0 && (t.flags |= 256),
						(t.flags |= 65536),
						(t.lanes = e),
						a !== Af && ((l = Error(d(422), { cause: a })), Ba(et(l, u))))
					: (a !== Af && ((t = Error(d(423), { cause: a })), Ba(et(t, u))),
						(l = l.current.alternate),
						(l.flags |= 65536),
						(e &= -e),
						(l.lanes |= e),
						(a = et(a, u)),
						(e = lc(l.stateNode, a, e)),
						Hf(l, e),
						rl !== 4 && (rl = 2)),
				!1
			);
		}
		var n = Error(d(520), { cause: a });
		if (
			((n = et(n, u)),
			ue === null ? (ue = [n]) : ue.push(n),
			rl !== 4 && (rl = 2),
			t === null)
		) {
			return !0;
		}
		(a = et(a, u)), (u = t);
		do {
			switch (u.tag) {
				case 3:
					return (
						(u.flags |= 65536),
						(l = e & -e),
						(u.lanes |= l),
						(l = lc(u.stateNode, a, l)),
						Hf(u, l),
						!1
					);
				case 1:
					if (
						((t = u.type),
						(n = u.stateNode),
						(u.flags & 128) === 0 &&
							(typeof t.getDerivedStateFromError == "function" ||
								(n !== null &&
									typeof n.componentDidCatch == "function" &&
									(au === null || !au.has(n)))))
					) {
						return (
							(u.flags |= 65536),
							(e &= -e),
							(u.lanes |= e),
							(e = g0(e)),
							b0(e, l, u, a),
							Hf(u, e),
							!1
						);
					}
			}
			u = u.return;
		} while (u !== null);
		return !1;
	}
	var T0 = Error(d(461)),
		Al = !1;
	function Ml(l, t, u, a) {
		t.child = l === null ? v0(t, null, u, a) : na(t, l.child, u, a);
	}
	function E0(l, t, u, a, e) {
		u = u.render;
		var n = t.ref;
		if ("ref" in a) {
			var f = {};
			for (var c in a) {
				c !== "ref" && (f[c] = a[c]);
			}
		} else {
			f = a;
		}
		return (
			Mu(t),
			(a = Gf(l, t, u, f, n, e)),
			(c = jf()),
			l !== null && !Al
				? (Xf(l, t, e), Bt(l, t, e))
				: (I && c && Tf(t), (t.flags |= 1), Ml(l, t, a, e), t.child)
		);
	}
	function A0(l, t, u, a, e) {
		if (l === null) {
			var n = u.type;
			return typeof n == "function" &&
				!Sf(n) &&
				n.defaultProps === void 0 &&
				u.compare === null
				? ((t.tag = 15), (t.type = n), z0(l, t, n, a, e))
				: ((l = Ge(u.type, null, a, t, t.mode, e)),
					(l.ref = t.ref),
					(l.return = t),
					(t.child = l));
		}
		if (((n = l.child), !ic(l, e))) {
			var f = n.memoizedProps;
			if (
				((u = u.compare), (u = u !== null ? u : Na), u(f, a) && l.ref === t.ref)
			) {
				return Bt(l, t, e);
			}
		}
		return (
			(t.flags |= 1),
			(l = Ut(n, a)),
			(l.ref = t.ref),
			(l.return = t),
			(t.child = l)
		);
	}
	function z0(l, t, u, a, e) {
		if (l !== null) {
			var n = l.memoizedProps;
			if (Na(n, a) && l.ref === t.ref) {
				if (((Al = !1), (t.pendingProps = a = n), ic(l, e))) {
					(l.flags & 131072) !== 0 && (Al = !0);
				} else {
					return (t.lanes = l.lanes), Bt(l, t, e);
				}
			}
		}
		return tc(l, t, u, a, e);
	}
	function _0(l, t, u) {
		var a = t.pendingProps,
			e = a.children,
			n = l !== null ? l.memoizedState : null;
		if (a.mode === "hidden") {
			if ((t.flags & 128) !== 0) {
				if (((a = n !== null ? n.baseLanes | u : u), l !== null)) {
					for (e = t.child = l.child, n = 0; e !== null; ) {
						(n = n | e.lanes | e.childLanes), (e = e.sibling);
					}
					t.childLanes = n & ~a;
				} else {
					(t.childLanes = 0), (t.child = null);
				}
				return O0(l, t, a, u);
			}
			if ((u & 536870912) !== 0) {
				(t.memoizedState = { baseLanes: 0, cachePool: null }),
					l !== null && Ze(t, n !== null ? n.cachePool : null),
					n !== null ? zs(t, n) : Yf(),
					d0(t);
			} else {
				return (
					(t.lanes = t.childLanes = 536870912),
					O0(l, t, n !== null ? n.baseLanes | u : u, u)
				);
			}
		} else {
			n !== null
				? (Ze(t, n.cachePool), zs(t, n), Ft(), (t.memoizedState = null))
				: (l !== null && Ze(t, null), Yf(), Ft());
		}
		return Ml(l, t, e, u), t.child;
	}
	function O0(l, t, u, a) {
		var e = Uf();
		return (
			(e = e === null ? null : { parent: bl._currentValue, pool: e }),
			(t.memoizedState = { baseLanes: u, cachePool: e }),
			l !== null && Ze(t, null),
			Yf(),
			d0(t),
			l !== null && xa(l, t, a, !0),
			null
		);
	}
	function nn(l, t) {
		var u = t.ref;
		if (u === null) {
			l !== null && l.ref !== null && (t.flags |= 4194816);
		} else {
			if (typeof u != "function" && typeof u != "object") {
				throw Error(d(284));
			}
			(l === null || l.ref !== u) && (t.flags |= 4194816);
		}
	}
	function tc(l, t, u, a, e) {
		return (
			Mu(t),
			(u = Gf(l, t, u, a, void 0, e)),
			(a = jf()),
			l !== null && !Al
				? (Xf(l, t, e), Bt(l, t, e))
				: (I && a && Tf(t), (t.flags |= 1), Ml(l, t, u, e), t.child)
		);
	}
	function M0(l, t, u, a, e, n) {
		return (
			Mu(t),
			(t.updateQueue = null),
			(u = Os(t, a, u, e)),
			_s(l),
			(a = jf()),
			l !== null && !Al
				? (Xf(l, t, n), Bt(l, t, n))
				: (I && a && Tf(t), (t.flags |= 1), Ml(l, t, u, n), t.child)
		);
	}
	function D0(l, t, u, a, e) {
		if ((Mu(t), t.stateNode === null)) {
			var n = $u,
				f = u.contextType;
			typeof f == "object" && f !== null && (n = ql(f)),
				(n = new u(a, n)),
				(t.memoizedState =
					n.state !== null && n.state !== void 0 ? n.state : null),
				(n.updater = Pf),
				(t.stateNode = n),
				(n._reactInternals = t),
				(n = t.stateNode),
				(n.props = a),
				(n.state = t.memoizedState),
				(n.refs = {}),
				pf(t),
				(f = u.contextType),
				(n.context = typeof f == "object" && f !== null ? ql(f) : $u),
				(n.state = t.memoizedState),
				(f = u.getDerivedStateFromProps),
				typeof f == "function" && (If(t, u, f, a), (n.state = t.memoizedState)),
				typeof u.getDerivedStateFromProps == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function" ||
					(typeof n.UNSAFE_componentWillMount != "function" &&
						typeof n.componentWillMount != "function") ||
					((f = n.state),
					typeof n.componentWillMount == "function" && n.componentWillMount(),
					typeof n.UNSAFE_componentWillMount == "function" &&
						n.UNSAFE_componentWillMount(),
					f !== n.state && Pf.enqueueReplaceState(n, n.state, null),
					Va(t, a, n, e),
					Za(),
					(n.state = t.memoizedState)),
				typeof n.componentDidMount == "function" && (t.flags |= 4194308),
				(a = !0);
		} else if (l === null) {
			n = t.stateNode;
			var c = t.memoizedProps,
				i = Ru(u, c);
			n.props = i;
			var r = n.context,
				S = u.contextType;
			(f = $u), typeof S == "object" && S !== null && (f = ql(S));
			var T = u.getDerivedStateFromProps;
			(S =
				typeof T == "function" ||
				typeof n.getSnapshotBeforeUpdate == "function"),
				(c = t.pendingProps !== c),
				S ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((c || r !== f) && y0(t, n, a, f)),
				(Jt = !1);
			var h = t.memoizedState;
			(n.state = h),
				Va(t, a, n, e),
				Za(),
				(r = t.memoizedState),
				c || h !== r || Jt
					? (typeof T == "function" && (If(t, u, T, a), (r = t.memoizedState)),
						(i = Jt || o0(t, u, i, a, h, r, f))
							? (S ||
									(typeof n.UNSAFE_componentWillMount != "function" &&
										typeof n.componentWillMount != "function") ||
									(typeof n.componentWillMount == "function" &&
										n.componentWillMount(),
									typeof n.UNSAFE_componentWillMount == "function" &&
										n.UNSAFE_componentWillMount()),
								typeof n.componentDidMount == "function" &&
									(t.flags |= 4194308))
							: (typeof n.componentDidMount == "function" &&
									(t.flags |= 4194308),
								(t.memoizedProps = a),
								(t.memoizedState = r)),
						(n.props = a),
						(n.state = r),
						(n.context = f),
						(a = i))
					: (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
						(a = !1));
		} else {
			(n = t.stateNode),
				Nf(l, t),
				(f = t.memoizedProps),
				(S = Ru(u, f)),
				(n.props = S),
				(T = t.pendingProps),
				(h = n.context),
				(r = u.contextType),
				(i = $u),
				typeof r == "object" && r !== null && (i = ql(r)),
				(c = u.getDerivedStateFromProps),
				(r =
					typeof c == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function") ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((f !== T || h !== i) && y0(t, n, a, i)),
				(Jt = !1),
				(h = t.memoizedState),
				(n.state = h),
				Va(t, a, n, e),
				Za();
			var m = t.memoizedState;
			f !== T ||
			h !== m ||
			Jt ||
			(l !== null && l.dependencies !== null && Qe(l.dependencies))
				? (typeof c == "function" && (If(t, u, c, a), (m = t.memoizedState)),
					(S =
						Jt ||
						o0(t, u, S, a, h, m, i) ||
						(l !== null && l.dependencies !== null && Qe(l.dependencies)))
						? (r ||
								(typeof n.UNSAFE_componentWillUpdate != "function" &&
									typeof n.componentWillUpdate != "function") ||
								(typeof n.componentWillUpdate == "function" &&
									n.componentWillUpdate(a, m, i),
								typeof n.UNSAFE_componentWillUpdate == "function" &&
									n.UNSAFE_componentWillUpdate(a, m, i)),
							typeof n.componentDidUpdate == "function" && (t.flags |= 4),
							typeof n.getSnapshotBeforeUpdate == "function" &&
								(t.flags |= 1024))
						: (typeof n.componentDidUpdate != "function" ||
								(f === l.memoizedProps && h === l.memoizedState) ||
								(t.flags |= 4),
							typeof n.getSnapshotBeforeUpdate != "function" ||
								(f === l.memoizedProps && h === l.memoizedState) ||
								(t.flags |= 1024),
							(t.memoizedProps = a),
							(t.memoizedState = m)),
					(n.props = a),
					(n.state = m),
					(n.context = i),
					(a = S))
				: (typeof n.componentDidUpdate != "function" ||
						(f === l.memoizedProps && h === l.memoizedState) ||
						(t.flags |= 4),
					typeof n.getSnapshotBeforeUpdate != "function" ||
						(f === l.memoizedProps && h === l.memoizedState) ||
						(t.flags |= 1024),
					(a = !1));
		}
		return (
			(n = a),
			nn(l, t),
			(a = (t.flags & 128) !== 0),
			n || a
				? ((n = t.stateNode),
					(u =
						a && typeof u.getDerivedStateFromError != "function"
							? null
							: n.render()),
					(t.flags |= 1),
					l !== null && a
						? ((t.child = na(t, l.child, null, e)),
							(t.child = na(t, null, u, e)))
						: Ml(l, t, u, e),
					(t.memoizedState = n.state),
					(l = t.child))
				: (l = Bt(l, t, e)),
			l
		);
	}
	function U0(l, t, u, a) {
		return Ya(), (t.flags |= 256), Ml(l, t, u, a), t.child;
	}
	var uc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function ac(l) {
		return { baseLanes: l, cachePool: hs() };
	}
	function ec(l, t, u) {
		return (l = l !== null ? l.childLanes & ~u : 0), t && (l |= st), l;
	}
	function R0(l, t, u) {
		var a = t.pendingProps,
			e = !1,
			n = (t.flags & 128) !== 0,
			f;
		if (
			((f = n) ||
				(f =
					l !== null && l.memoizedState === null ? !1 : (Tl.current & 2) !== 0),
			f && ((e = !0), (t.flags &= -129)),
			(f = (t.flags & 32) !== 0),
			(t.flags &= -33),
			l === null)
		) {
			if (I) {
				if ((e ? kt(t) : Ft(), I)) {
					var c = yl,
						i;
					if ((i = c)) {
						l: {
							for (i = c, c = bt; i.nodeType !== 8; ) {
								if (!c) {
									c = null;
									break l;
								}
								if (((i = ht(i.nextSibling)), i === null)) {
									c = null;
									break l;
								}
							}
							c = i;
						}
						c !== null
							? ((t.memoizedState = {
									dehydrated: c,
									treeContext: Eu !== null ? { id: Rt, overflow: pt } : null,
									retryLane: 536870912,
									hydrationErrors: null,
								}),
								(i = kl(18, null, null, 0)),
								(i.stateNode = c),
								(i.return = t),
								(t.child = i),
								(xl = t),
								(yl = null),
								(i = !0))
							: (i = !1);
					}
					i || _u(t);
				}
				if (
					((c = t.memoizedState),
					c !== null && ((c = c.dehydrated), c !== null))
				) {
					return Cc(c) ? (t.lanes = 32) : (t.lanes = 536870912), null;
				}
				Yt(t);
			}
			return (
				(c = a.children),
				(a = a.fallback),
				e
					? (Ft(),
						(e = t.mode),
						(c = fn({ mode: "hidden", children: c }, e)),
						(a = Tu(a, e, u, null)),
						(c.return = t),
						(a.return = t),
						(c.sibling = a),
						(t.child = c),
						(e = t.child),
						(e.memoizedState = ac(u)),
						(e.childLanes = ec(l, f, u)),
						(t.memoizedState = uc),
						a)
					: (kt(t), nc(t, c))
			);
		}
		if (
			((i = l.memoizedState), i !== null && ((c = i.dehydrated), c !== null))
		) {
			if (n) {
				t.flags & 256
					? (kt(t), (t.flags &= -257), (t = fc(l, t, u)))
					: t.memoizedState !== null
						? (Ft(), (t.child = l.child), (t.flags |= 128), (t = null))
						: (Ft(),
							(e = a.fallback),
							(c = t.mode),
							(a = fn({ mode: "visible", children: a.children }, c)),
							(e = Tu(e, c, u, null)),
							(e.flags |= 2),
							(a.return = t),
							(e.return = t),
							(a.sibling = e),
							(t.child = a),
							na(t, l.child, null, u),
							(a = t.child),
							(a.memoizedState = ac(u)),
							(a.childLanes = ec(l, f, u)),
							(t.memoizedState = uc),
							(t = e));
			} else if ((kt(t), Cc(c))) {
				if (((f = c.nextSibling && c.nextSibling.dataset), f)) {
					var r = f.dgst;
				}
				(f = r),
					(a = Error(d(419))),
					(a.stack = ""),
					(a.digest = f),
					Ba({ value: a, source: null, stack: null }),
					(t = fc(l, t, u));
			} else if (
				(Al || xa(l, t, u, !1), (f = (u & l.childLanes) !== 0), Al || f)
			) {
				if (
					((f = sl),
					f !== null &&
						((a = u & -u),
						(a = (a & 42) !== 0 ? 1 : Cn(a)),
						(a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a),
						a !== 0 && a !== i.retryLane))
				) {
					throw ((i.retryLane = a), Wu(l, a), tt(f, l, a), T0);
				}
				c.data === "$?" || _c(), (t = fc(l, t, u));
			} else {
				c.data === "$?"
					? ((t.flags |= 192), (t.child = l.child), (t = null))
					: ((l = i.treeContext),
						(yl = ht(c.nextSibling)),
						(xl = t),
						(I = !0),
						(zu = null),
						(bt = !1),
						l !== null &&
							((ft[ct++] = Rt),
							(ft[ct++] = pt),
							(ft[ct++] = Eu),
							(Rt = l.id),
							(pt = l.overflow),
							(Eu = t)),
						(t = nc(t, a.children)),
						(t.flags |= 4096));
			}
			return t;
		}
		return e
			? (Ft(),
				(e = a.fallback),
				(c = t.mode),
				(i = l.child),
				(r = i.sibling),
				(a = Ut(i, { mode: "hidden", children: a.children })),
				(a.subtreeFlags = i.subtreeFlags & 65011712),
				r !== null ? (e = Ut(r, e)) : ((e = Tu(e, c, u, null)), (e.flags |= 2)),
				(e.return = t),
				(a.return = t),
				(a.sibling = e),
				(t.child = a),
				(a = e),
				(e = t.child),
				(c = l.child.memoizedState),
				c === null
					? (c = ac(u))
					: ((i = c.cachePool),
						i !== null
							? ((r = bl._currentValue),
								(i = i.parent !== r ? { parent: r, pool: r } : i))
							: (i = hs()),
						(c = { baseLanes: c.baseLanes | u, cachePool: i })),
				(e.memoizedState = c),
				(e.childLanes = ec(l, f, u)),
				(t.memoizedState = uc),
				a)
			: (kt(t),
				(u = l.child),
				(l = u.sibling),
				(u = Ut(u, { mode: "visible", children: a.children })),
				(u.return = t),
				(u.sibling = null),
				l !== null &&
					((f = t.deletions),
					f === null ? ((t.deletions = [l]), (t.flags |= 16)) : f.push(l)),
				(t.child = u),
				(t.memoizedState = null),
				u);
	}
	function nc(l, t) {
		return (
			(t = fn({ mode: "visible", children: t }, l.mode)),
			(t.return = l),
			(l.child = t)
		);
	}
	function fn(l, t) {
		return (
			(l = kl(22, l, null, t)),
			(l.lanes = 0),
			(l.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null,
			}),
			l
		);
	}
	function fc(l, t, u) {
		return (
			na(t, l.child, null, u),
			(l = nc(t, t.pendingProps.children)),
			(l.flags |= 2),
			(t.memoizedState = null),
			l
		);
	}
	function p0(l, t, u) {
		l.lanes |= t;
		var a = l.alternate;
		a !== null && (a.lanes |= t), _f(l.return, t, u);
	}
	function cc(l, t, u, a, e) {
		var n = l.memoizedState;
		n === null
			? (l.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: a,
					tail: u,
					tailMode: e,
				})
			: ((n.isBackwards = t),
				(n.rendering = null),
				(n.renderingStartTime = 0),
				(n.last = a),
				(n.tail = u),
				(n.tailMode = e));
	}
	function N0(l, t, u) {
		var a = t.pendingProps,
			e = a.revealOrder,
			n = a.tail;
		if ((Ml(l, t, a.children, u), (a = Tl.current), (a & 2) !== 0)) {
			(a = (a & 1) | 2), (t.flags |= 128);
		} else {
			if (l !== null && (l.flags & 128) !== 0) {
				l: for (l = t.child; l !== null; ) {
					if (l.tag === 13) {
						l.memoizedState !== null && p0(l, u, t);
					} else if (l.tag === 19) {
						p0(l, u, t);
					} else if (l.child !== null) {
						(l.child.return = l), (l = l.child);
						continue;
					}
					if (l === t) {
						break l;
					}
					for (; l.sibling === null; ) {
						if (l.return === null || l.return === t) {
							break l;
						}
						l = l.return;
					}
					(l.sibling.return = l.return), (l = l.sibling);
				}
			}
			a &= 1;
		}
		switch ((_(Tl, a), e)) {
			case "forwards":
				for (u = t.child, e = null; u !== null; ) {
					(l = u.alternate),
						l !== null && un(l) === null && (e = u),
						(u = u.sibling);
				}
				(u = e),
					u === null
						? ((e = t.child), (t.child = null))
						: ((e = u.sibling), (u.sibling = null)),
					cc(t, !1, e, u, n);
				break;
			case "backwards":
				for (u = null, e = t.child, t.child = null; e !== null; ) {
					if (((l = e.alternate), l !== null && un(l) === null)) {
						t.child = e;
						break;
					}
					(l = e.sibling), (e.sibling = u), (u = e), (e = l);
				}
				cc(t, !0, u, null, n);
				break;
			case "together":
				cc(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
		return t.child;
	}
	function Bt(l, t, u) {
		if (
			(l !== null && (t.dependencies = l.dependencies),
			(uu |= t.lanes),
			(u & t.childLanes) === 0)
		) {
			if (l !== null) {
				if ((xa(l, t, u, !1), (u & t.childLanes) === 0)) {
					return null;
				}
			} else {
				return null;
			}
		}
		if (l !== null && t.child !== l.child) {
			throw Error(d(153));
		}
		if (t.child !== null) {
			for (
				l = t.child, u = Ut(l, l.pendingProps), t.child = u, u.return = t;
				l.sibling !== null;

			) {
				(l = l.sibling),
					(u = u.sibling = Ut(l, l.pendingProps)),
					(u.return = t);
			}
			u.sibling = null;
		}
		return t.child;
	}
	function ic(l, t) {
		return (l.lanes & t) !== 0
			? !0
			: ((l = l.dependencies), !!(l !== null && Qe(l)));
	}
	function Xo(l, t, u) {
		switch (t.tag) {
			case 3:
				vl(t, t.stateNode.containerInfo),
					Kt(t, bl, l.memoizedState.cache),
					Ya();
				break;
			case 27:
			case 5:
				xn(t);
				break;
			case 4:
				vl(t, t.stateNode.containerInfo);
				break;
			case 10:
				Kt(t, t.type, t.memoizedProps.value);
				break;
			case 13:
				var a = t.memoizedState;
				if (a !== null) {
					return a.dehydrated !== null
						? (kt(t), (t.flags |= 128), null)
						: (u & t.child.childLanes) !== 0
							? R0(l, t, u)
							: (kt(t), (l = Bt(l, t, u)), l !== null ? l.sibling : null);
				}
				kt(t);
				break;
			case 19:
				var e = (l.flags & 128) !== 0;
				if (
					((a = (u & t.childLanes) !== 0),
					a || (xa(l, t, u, !1), (a = (u & t.childLanes) !== 0)),
					e)
				) {
					if (a) {
						return N0(l, t, u);
					}
					t.flags |= 128;
				}
				if (
					((e = t.memoizedState),
					e !== null &&
						((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
					_(Tl, Tl.current),
					a)
				) {
					break;
				}
				return null;
			case 22:
			case 23:
				return (t.lanes = 0), _0(l, t, u);
			case 24:
				Kt(t, bl, l.memoizedState.cache);
		}
		return Bt(l, t, u);
	}
	function H0(l, t, u) {
		if (l !== null) {
			if (l.memoizedProps !== t.pendingProps) {
				Al = !0;
			} else {
				if (!ic(l, u) && (t.flags & 128) === 0) {
					return (Al = !1), Xo(l, t, u);
				}
				Al = (l.flags & 131072) !== 0;
			}
		} else {
			(Al = !1), I && (t.flags & 1048576) !== 0 && is(t, Xe, t.index);
		}
		switch (((t.lanes = 0), t.tag)) {
			case 16:
				l: {
					l = t.pendingProps;
					var a = t.elementType,
						e = a._init;
					if (((a = e(a._payload)), (t.type = a), typeof a == "function")) {
						Sf(a)
							? ((l = Ru(a, l)), (t.tag = 1), (t = D0(null, t, a, l, u)))
							: ((t.tag = 0), (t = tc(null, t, a, l, u)));
					} else {
						if (a != null) {
							if (((e = a.$$typeof), e === ot)) {
								(t.tag = 11), (t = E0(null, t, a, l, u));
								break l;
							} else if (e === Ll) {
								(t.tag = 14), (t = A0(null, t, a, l, u));
								break l;
							}
						}
						throw ((t = ru(a) || a), Error(d(306, t, "")));
					}
				}
				return t;
			case 0:
				return tc(l, t, t.type, t.pendingProps, u);
			case 1:
				return (a = t.type), (e = Ru(a, t.pendingProps)), D0(l, t, a, e, u);
			case 3:
				l: {
					if ((vl(t, t.stateNode.containerInfo), l === null)) {
						throw Error(d(387));
					}
					a = t.pendingProps;
					var n = t.memoizedState;
					(e = n.element), Nf(l, t), Va(t, a, null, u);
					var f = t.memoizedState;
					if (
						((a = f.cache),
						Kt(t, bl, a),
						a !== n.cache && Of(t, [bl], u, !0),
						Za(),
						(a = f.element),
						n.isDehydrated)
					) {
						if (
							((n = { element: a, isDehydrated: !1, cache: f.cache }),
							(t.updateQueue.baseState = n),
							(t.memoizedState = n),
							t.flags & 256)
						) {
							t = U0(l, t, a, u);
							break l;
						} else if (a !== e) {
							(e = et(Error(d(424)), t)), Ba(e), (t = U0(l, t, a, u));
							break l;
						} else {
							switch (((l = t.stateNode.containerInfo), l.nodeType)) {
								case 9:
									l = l.body;
									break;
								default:
									l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
							}
							for (
								yl = ht(l.firstChild),
									xl = t,
									I = !0,
									zu = null,
									bt = !0,
									u = v0(t, null, a, u),
									t.child = u;
								u;

							) {
								(u.flags = (u.flags & -3) | 4096), (u = u.sibling);
							}
						}
					} else {
						if ((Ya(), a === e)) {
							t = Bt(l, t, u);
							break l;
						}
						Ml(l, t, a, u);
					}
					t = t.child;
				}
				return t;
			case 26:
				return (
					nn(l, t),
					l === null
						? (u = xv(t.type, null, t.pendingProps, null))
							? (t.memoizedState = u)
							: I ||
								((u = t.type),
								(l = t.pendingProps),
								(a = En(Q.current).createElement(u)),
								(a[Hl] = t),
								(a[jl] = l),
								Ul(a, u, l),
								El(a),
								(t.stateNode = a))
						: (t.memoizedState = xv(
								t.type,
								l.memoizedProps,
								t.pendingProps,
								l.memoizedState,
							)),
					null
				);
			case 27:
				return (
					xn(t),
					l === null &&
						I &&
						((a = t.stateNode = qv(t.type, t.pendingProps, Q.current)),
						(xl = t),
						(bt = !0),
						(e = yl),
						fu(t.type) ? ((Zc = e), (yl = ht(a.firstChild))) : (yl = e)),
					Ml(l, t, t.pendingProps.children, u),
					nn(l, t),
					l === null && (t.flags |= 4194304),
					t.child
				);
			case 5:
				return (
					l === null &&
						I &&
						((e = a = yl) &&
							((a = yy(a, t.type, t.pendingProps, bt)),
							a !== null
								? ((t.stateNode = a),
									(xl = t),
									(yl = ht(a.firstChild)),
									(bt = !1),
									(e = !0))
								: (e = !1)),
						e || _u(t)),
					xn(t),
					(e = t.type),
					(n = t.pendingProps),
					(f = l !== null ? l.memoizedProps : null),
					(a = n.children),
					jc(e, n) ? (a = null) : f !== null && jc(e, f) && (t.flags |= 32),
					t.memoizedState !== null &&
						((e = Gf(l, t, No, null, null, u)), (de._currentValue = e)),
					nn(l, t),
					Ml(l, t, a, u),
					t.child
				);
			case 6:
				return (
					l === null &&
						I &&
						((l = u = yl) &&
							((u = ry(u, t.pendingProps, bt)),
							u !== null
								? ((t.stateNode = u), (xl = t), (yl = null), (l = !0))
								: (l = !1)),
						l || _u(t)),
					null
				);
			case 13:
				return R0(l, t, u);
			case 4:
				return (
					vl(t, t.stateNode.containerInfo),
					(a = t.pendingProps),
					l === null ? (t.child = na(t, null, a, u)) : Ml(l, t, a, u),
					t.child
				);
			case 11:
				return E0(l, t, t.type, t.pendingProps, u);
			case 7:
				return Ml(l, t, t.pendingProps, u), t.child;
			case 8:
				return Ml(l, t, t.pendingProps.children, u), t.child;
			case 12:
				return Ml(l, t, t.pendingProps.children, u), t.child;
			case 10:
				return (
					(a = t.pendingProps),
					Kt(t, t.type, a.value),
					Ml(l, t, a.children, u),
					t.child
				);
			case 9:
				return (
					(e = t.type._context),
					(a = t.pendingProps.children),
					Mu(t),
					(e = ql(e)),
					(a = a(e)),
					(t.flags |= 1),
					Ml(l, t, a, u),
					t.child
				);
			case 14:
				return A0(l, t, t.type, t.pendingProps, u);
			case 15:
				return z0(l, t, t.type, t.pendingProps, u);
			case 19:
				return N0(l, t, u);
			case 31:
				return (
					(a = t.pendingProps),
					(u = t.mode),
					(a = { mode: a.mode, children: a.children }),
					l === null
						? ((u = fn(a, u)),
							(u.ref = t.ref),
							(t.child = u),
							(u.return = t),
							(t = u))
						: ((u = Ut(l.child, a)),
							(u.ref = t.ref),
							(t.child = u),
							(u.return = t),
							(t = u)),
					t
				);
			case 22:
				return _0(l, t, u);
			case 24:
				return (
					Mu(t),
					(a = ql(bl)),
					l === null
						? ((e = Uf()),
							e === null &&
								((e = sl),
								(n = Mf()),
								(e.pooledCache = n),
								n.refCount++,
								n !== null && (e.pooledCacheLanes |= u),
								(e = n)),
							(t.memoizedState = { parent: a, cache: e }),
							pf(t),
							Kt(t, bl, e))
						: ((l.lanes & u) !== 0 && (Nf(l, t), Va(t, null, null, u), Za()),
							(e = l.memoizedState),
							(n = t.memoizedState),
							e.parent !== a
								? ((e = { parent: a, cache: a }),
									(t.memoizedState = e),
									t.lanes === 0 &&
										(t.memoizedState = t.updateQueue.baseState = e),
									Kt(t, bl, a))
								: ((a = n.cache),
									Kt(t, bl, a),
									a !== e.cache && Of(t, [bl], u, !0))),
					Ml(l, t, t.pendingProps.children, u),
					t.child
				);
			case 29:
				throw t.pendingProps;
		}
		throw Error(d(156, t.tag));
	}
	function xt(l) {
		l.flags |= 4;
	}
	function q0(l, t) {
		if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) {
			l.flags &= -16777217;
		} else if (((l.flags |= 16777216), !Cv(t))) {
			if (
				((t = it.current),
				t !== null &&
					((w & 4194048) === w
						? Tt !== null
						: ((w & 62914560) !== w && (w & 536870912) === 0) || t !== Tt))
			) {
				throw ((Qa = Rf), ms);
			}
			l.flags |= 8192;
		}
	}
	function cn(l, t) {
		t !== null && (l.flags |= 4),
			l.flags & 16384 &&
				((t = l.tag !== 22 ? di() : 536870912), (l.lanes |= t), (sa |= t));
	}
	function ka(l, t) {
		if (!I) {
			switch (l.tailMode) {
				case "hidden":
					t = l.tail;
					for (var u = null; t !== null; ) {
						t.alternate !== null && (u = t), (t = t.sibling);
					}
					u === null ? (l.tail = null) : (u.sibling = null);
					break;
				case "collapsed":
					u = l.tail;
					for (var a = null; u !== null; ) {
						u.alternate !== null && (a = u), (u = u.sibling);
					}
					a === null
						? t || l.tail === null
							? (l.tail = null)
							: (l.tail.sibling = null)
						: (a.sibling = null);
			}
		}
	}
	function ol(l) {
		var t = l.alternate !== null && l.alternate.child === l.child,
			u = 0,
			a = 0;
		if (t) {
			for (var e = l.child; e !== null; ) {
				(u |= e.lanes | e.childLanes),
					(a |= e.subtreeFlags & 65011712),
					(a |= e.flags & 65011712),
					(e.return = l),
					(e = e.sibling);
			}
		} else {
			for (e = l.child; e !== null; ) {
				(u |= e.lanes | e.childLanes),
					(a |= e.subtreeFlags),
					(a |= e.flags),
					(e.return = l),
					(e = e.sibling);
			}
		}
		return (l.subtreeFlags |= a), (l.childLanes = u), t;
	}
	function Qo(l, t, u) {
		var a = t.pendingProps;
		switch ((Ef(t), t.tag)) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return ol(t), null;
			case 1:
				return ol(t), null;
			case 3:
				return (
					(u = t.stateNode),
					(a = null),
					l !== null && (a = l.memoizedState.cache),
					t.memoizedState.cache !== a && (t.flags |= 2048),
					Ht(bl),
					Ct(),
					u.pendingContext &&
						((u.context = u.pendingContext), (u.pendingContext = null)),
					(l === null || l.child === null) &&
						(qa(t)
							? xt(t)
							: l === null ||
								(l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
								((t.flags |= 1024), ds())),
					ol(t),
					null
				);
			case 26:
				return (
					(u = t.memoizedState),
					l === null
						? (xt(t),
							u !== null ? (ol(t), q0(t, u)) : (ol(t), (t.flags &= -16777217)))
						: u
							? u !== l.memoizedState
								? (xt(t), ol(t), q0(t, u))
								: (ol(t), (t.flags &= -16777217))
							: (l.memoizedProps !== a && xt(t), ol(t), (t.flags &= -16777217)),
					null
				);
			case 27:
				ge(t), (u = Q.current);
				var e = t.type;
				if (l !== null && t.stateNode != null) {
					l.memoizedProps !== a && xt(t);
				} else {
					if (!a) {
						if (t.stateNode === null) {
							throw Error(d(166));
						}
						return ol(t), null;
					}
					(l = B.current),
						qa(t) ? ss(t) : ((l = qv(e, a, u)), (t.stateNode = l), xt(t));
				}
				return ol(t), null;
			case 5:
				if ((ge(t), (u = t.type), l !== null && t.stateNode != null)) {
					l.memoizedProps !== a && xt(t);
				} else {
					if (!a) {
						if (t.stateNode === null) {
							throw Error(d(166));
						}
						return ol(t), null;
					}
					if (((l = B.current), qa(t))) {
						ss(t);
					} else {
						switch (((e = En(Q.current)), l)) {
							case 1:
								l = e.createElementNS("http://www.w3.org/2000/svg", u);
								break;
							case 2:
								l = e.createElementNS("http://www.w3.org/1998/Math/MathML", u);
								break;
							default:
								switch (u) {
									case "svg":
										l = e.createElementNS("http://www.w3.org/2000/svg", u);
										break;
									case "math":
										l = e.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											u,
										);
										break;
									case "script":
										(l = e.createElement("div")),
											(l.innerHTML = "<script></script>"),
											(l = l.removeChild(l.firstChild));
										break;
									case "select":
										(l =
											typeof a.is == "string"
												? e.createElement("select", { is: a.is })
												: e.createElement("select")),
											a.multiple
												? (l.multiple = !0)
												: a.size && (l.size = a.size);
										break;
									default:
										l =
											typeof a.is == "string"
												? e.createElement(u, { is: a.is })
												: e.createElement(u);
								}
						}
						(l[Hl] = t), (l[jl] = a);
						l: for (e = t.child; e !== null; ) {
							if (e.tag === 5 || e.tag === 6) {
								l.appendChild(e.stateNode);
							} else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
								(e.child.return = e), (e = e.child);
								continue;
							}
							if (e === t) {
								break l;
							}
							for (; e.sibling === null; ) {
								if (e.return === null || e.return === t) {
									break l;
								}
								e = e.return;
							}
							(e.sibling.return = e.return), (e = e.sibling);
						}
						t.stateNode = l;
						l: switch ((Ul(l, u, a), u)) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								l = !!a.autoFocus;
								break l;
							case "img":
								l = !0;
								break l;
							default:
								l = !1;
						}
						l && xt(t);
					}
				}
				return ol(t), (t.flags &= -16777217), null;
			case 6:
				if (l && t.stateNode != null) {
					l.memoizedProps !== a && xt(t);
				} else {
					if (typeof a != "string" && t.stateNode === null) {
						throw Error(d(166));
					}
					if (((l = Q.current), qa(t))) {
						if (
							((l = t.stateNode),
							(u = t.memoizedProps),
							(a = null),
							(e = xl),
							e !== null)
						) {
							switch (e.tag) {
								case 27:
								case 5:
									a = e.memoizedProps;
							}
						}
						(l[Hl] = t),
							(l = !!(
								l.nodeValue === u ||
								(a !== null && a.suppressHydrationWarning === !0) ||
								Mv(l.nodeValue, u)
							)),
							l || _u(t);
					} else {
						(l = En(l).createTextNode(a)), (l[Hl] = t), (t.stateNode = l);
					}
				}
				return ol(t), null;
			case 13:
				if (
					((a = t.memoizedState),
					l === null ||
						(l.memoizedState !== null && l.memoizedState.dehydrated !== null))
				) {
					if (((e = qa(t)), a !== null && a.dehydrated !== null)) {
						if (l === null) {
							if (!e) {
								throw Error(d(318));
							}
							if (
								((e = t.memoizedState),
								(e = e !== null ? e.dehydrated : null),
								!e)
							) {
								throw Error(d(317));
							}
							e[Hl] = t;
						} else {
							Ya(),
								(t.flags & 128) === 0 && (t.memoizedState = null),
								(t.flags |= 4);
						}
						ol(t), (e = !1);
					} else {
						(e = ds()),
							l !== null &&
								l.memoizedState !== null &&
								(l.memoizedState.hydrationErrors = e),
							(e = !0);
					}
					if (!e) {
						return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
					}
				}
				if ((Yt(t), (t.flags & 128) !== 0)) {
					return (t.lanes = u), t;
				}
				if (
					((u = a !== null), (l = l !== null && l.memoizedState !== null), u)
				) {
					(a = t.child),
						(e = null),
						a.alternate !== null &&
							a.alternate.memoizedState !== null &&
							a.alternate.memoizedState.cachePool !== null &&
							(e = a.alternate.memoizedState.cachePool.pool);
					var n = null;
					a.memoizedState !== null &&
						a.memoizedState.cachePool !== null &&
						(n = a.memoizedState.cachePool.pool),
						n !== e && (a.flags |= 2048);
				}
				return (
					u !== l && u && (t.child.flags |= 8192),
					cn(t, t.updateQueue),
					ol(t),
					null
				);
			case 4:
				return Ct(), l === null && qc(t.stateNode.containerInfo), ol(t), null;
			case 10:
				return Ht(t.type), ol(t), null;
			case 19:
				if ((M(Tl), (e = t.memoizedState), e === null)) {
					return ol(t), null;
				}
				if (((a = (t.flags & 128) !== 0), (n = e.rendering), n === null)) {
					if (a) {
						ka(e, !1);
					} else {
						if (rl !== 0 || (l !== null && (l.flags & 128) !== 0)) {
							for (l = t.child; l !== null; ) {
								if (((n = un(l)), n !== null)) {
									for (
										t.flags |= 128,
											ka(e, !1),
											l = n.updateQueue,
											t.updateQueue = l,
											cn(t, l),
											t.subtreeFlags = 0,
											l = u,
											u = t.child;
										u !== null;

									) {
										cs(u, l), (u = u.sibling);
									}
									return _(Tl, (Tl.current & 1) | 2), t.child;
								}
								l = l.sibling;
							}
						}
						e.tail !== null &&
							gt() > dn &&
							((t.flags |= 128), (a = !0), ka(e, !1), (t.lanes = 4194304));
					}
				} else {
					if (!a) {
						if (((l = un(n)), l !== null)) {
							if (
								((t.flags |= 128),
								(a = !0),
								(l = l.updateQueue),
								(t.updateQueue = l),
								cn(t, l),
								ka(e, !0),
								e.tail === null &&
									e.tailMode === "hidden" &&
									!n.alternate &&
									!I)
							) {
								return ol(t), null;
							}
						} else {
							2 * gt() - e.renderingStartTime > dn &&
								u !== 536870912 &&
								((t.flags |= 128), (a = !0), ka(e, !1), (t.lanes = 4194304));
						}
					}
					e.isBackwards
						? ((n.sibling = t.child), (t.child = n))
						: ((l = e.last),
							l !== null ? (l.sibling = n) : (t.child = n),
							(e.last = n));
				}
				return e.tail !== null
					? ((t = e.tail),
						(e.rendering = t),
						(e.tail = t.sibling),
						(e.renderingStartTime = gt()),
						(t.sibling = null),
						(l = Tl.current),
						_(Tl, a ? (l & 1) | 2 : l & 1),
						t)
					: (ol(t), null);
			case 22:
			case 23:
				return (
					Yt(t),
					Bf(),
					(a = t.memoizedState !== null),
					l !== null
						? (l.memoizedState !== null) !== a && (t.flags |= 8192)
						: a && (t.flags |= 8192),
					a
						? (u & 536870912) !== 0 &&
							(t.flags & 128) === 0 &&
							(ol(t), t.subtreeFlags & 6 && (t.flags |= 8192))
						: ol(t),
					(u = t.updateQueue),
					u !== null && cn(t, u.retryQueue),
					(u = null),
					l !== null &&
						l.memoizedState !== null &&
						l.memoizedState.cachePool !== null &&
						(u = l.memoizedState.cachePool.pool),
					(a = null),
					t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(a = t.memoizedState.cachePool.pool),
					a !== u && (t.flags |= 2048),
					l !== null && M(Du),
					null
				);
			case 24:
				return (
					(u = null),
					l !== null && (u = l.memoizedState.cache),
					t.memoizedState.cache !== u && (t.flags |= 2048),
					Ht(bl),
					ol(t),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(d(156, t.tag));
	}
	function Co(l, t) {
		switch ((Ef(t), t.tag)) {
			case 1:
				return (
					(l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 3:
				return (
					Ht(bl),
					Ct(),
					(l = t.flags),
					(l & 65536) !== 0 && (l & 128) === 0
						? ((t.flags = (l & -65537) | 128), t)
						: null
				);
			case 26:
			case 27:
			case 5:
				return ge(t), null;
			case 13:
				if (
					(Yt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
				) {
					if (t.alternate === null) {
						throw Error(d(340));
					}
					Ya();
				}
				return (
					(l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 19:
				return M(Tl), null;
			case 4:
				return Ct(), null;
			case 10:
				return Ht(t.type), null;
			case 22:
			case 23:
				return (
					Yt(t),
					Bf(),
					l !== null && M(Du),
					(l = t.flags),
					l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 24:
				return Ht(bl), null;
			case 25:
				return null;
			default:
				return null;
		}
	}
	function Y0(l, t) {
		switch ((Ef(t), t.tag)) {
			case 3:
				Ht(bl), Ct();
				break;
			case 26:
			case 27:
			case 5:
				ge(t);
				break;
			case 4:
				Ct();
				break;
			case 13:
				Yt(t);
				break;
			case 19:
				M(Tl);
				break;
			case 10:
				Ht(t.type);
				break;
			case 22:
			case 23:
				Yt(t), Bf(), l !== null && M(Du);
				break;
			case 24:
				Ht(bl);
		}
	}
	function Fa(l, t) {
		try {
			var u = t.updateQueue,
				a = u !== null ? u.lastEffect : null;
			if (a !== null) {
				var e = a.next;
				u = e;
				do {
					if ((u.tag & l) === l) {
						a = void 0;
						var n = u.create,
							f = u.inst;
						(a = n()), (f.destroy = a);
					}
					u = u.next;
				} while (u !== e);
			}
		} catch (c) {
			il(t, t.return, c);
		}
	}
	function It(l, t, u) {
		try {
			var a = t.updateQueue,
				e = a !== null ? a.lastEffect : null;
			if (e !== null) {
				var n = e.next;
				a = n;
				do {
					if ((a.tag & l) === l) {
						var f = a.inst,
							c = f.destroy;
						if (c !== void 0) {
							(f.destroy = void 0), (e = t);
							var i = u,
								r = c;
							try {
								r();
							} catch (S) {
								il(e, i, S);
							}
						}
					}
					a = a.next;
				} while (a !== n);
			}
		} catch (S) {
			il(t, t.return, S);
		}
	}
	function B0(l) {
		var t = l.updateQueue;
		if (t !== null) {
			var u = l.stateNode;
			try {
				As(t, u);
			} catch (a) {
				il(l, l.return, a);
			}
		}
	}
	function x0(l, t, u) {
		(u.props = Ru(l.type, l.memoizedProps)), (u.state = l.memoizedState);
		try {
			u.componentWillUnmount();
		} catch (a) {
			il(l, t, a);
		}
	}
	function Ia(l, t) {
		try {
			var u = l.ref;
			if (u !== null) {
				switch (l.tag) {
					case 26:
					case 27:
					case 5:
						var a = l.stateNode;
						break;
					case 30:
						a = l.stateNode;
						break;
					default:
						a = l.stateNode;
				}
				typeof u == "function" ? (l.refCleanup = u(a)) : (u.current = a);
			}
		} catch (e) {
			il(l, t, e);
		}
	}
	function Et(l, t) {
		var u = l.ref,
			a = l.refCleanup;
		if (u !== null) {
			if (typeof a == "function") {
				try {
					a();
				} catch (e) {
					il(l, t, e);
				} finally {
					(l.refCleanup = null),
						(l = l.alternate),
						l != null && (l.refCleanup = null);
				}
			} else if (typeof u == "function") {
				try {
					u(null);
				} catch (e) {
					il(l, t, e);
				}
			} else {
				u.current = null;
			}
		}
	}
	function G0(l) {
		var t = l.type,
			u = l.memoizedProps,
			a = l.stateNode;
		try {
			l: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					u.autoFocus && a.focus();
					break l;
				case "img":
					u.src ? (a.src = u.src) : u.srcSet && (a.srcset = u.srcSet);
			}
		} catch (e) {
			il(l, l.return, e);
		}
	}
	function sc(l, t, u) {
		try {
			var a = l.stateNode;
			iy(a, l.type, u, t), (a[jl] = t);
		} catch (e) {
			il(l, l.return, e);
		}
	}
	function j0(l) {
		return (
			l.tag === 5 ||
			l.tag === 3 ||
			l.tag === 26 ||
			(l.tag === 27 && fu(l.type)) ||
			l.tag === 4
		);
	}
	function vc(l) {
		l: for (;;) {
			for (; l.sibling === null; ) {
				if (l.return === null || j0(l.return)) {
					return null;
				}
				l = l.return;
			}
			for (
				l.sibling.return = l.return, l = l.sibling;
				l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

			) {
				if (
					(l.tag === 27 && fu(l.type)) ||
					l.flags & 2 ||
					l.child === null ||
					l.tag === 4
				) {
					continue l;
				}
				(l.child.return = l), (l = l.child);
			}
			if (!(l.flags & 2)) {
				return l.stateNode;
			}
		}
	}
	function dc(l, t, u) {
		var a = l.tag;
		if (a === 5 || a === 6) {
			(l = l.stateNode),
				t
					? (u.nodeType === 9
							? u.body
							: u.nodeName === "HTML"
								? u.ownerDocument.body
								: u
						).insertBefore(l, t)
					: ((t =
							u.nodeType === 9
								? u.body
								: u.nodeName === "HTML"
									? u.ownerDocument.body
									: u),
						t.appendChild(l),
						(u = u._reactRootContainer),
						u != null || t.onclick !== null || (t.onclick = Tn));
		} else if (
			a !== 4 &&
			(a === 27 && fu(l.type) && ((u = l.stateNode), (t = null)),
			(l = l.child),
			l !== null)
		) {
			for (dc(l, t, u), l = l.sibling; l !== null; ) {
				dc(l, t, u), (l = l.sibling);
			}
		}
	}
	function sn(l, t, u) {
		var a = l.tag;
		if (a === 5 || a === 6) {
			(l = l.stateNode), t ? u.insertBefore(l, t) : u.appendChild(l);
		} else if (
			a !== 4 &&
			(a === 27 && fu(l.type) && (u = l.stateNode), (l = l.child), l !== null)
		) {
			for (sn(l, t, u), l = l.sibling; l !== null; ) {
				sn(l, t, u), (l = l.sibling);
			}
		}
	}
	function X0(l) {
		var t = l.stateNode,
			u = l.memoizedProps;
		try {
			for (var a = l.type, e = t.attributes; e.length; ) {
				t.removeAttributeNode(e[0]);
			}
			Ul(t, a, u), (t[Hl] = l), (t[jl] = u);
		} catch (n) {
			il(l, l.return, n);
		}
	}
	var Gt = !1,
		ml = !1,
		oc = !1,
		Q0 = typeof WeakSet == "function" ? WeakSet : Set,
		zl = null;
	function Zo(l, t) {
		if (((l = l.containerInfo), (xc = Dn), (l = Fi(l)), vf(l))) {
			if ("selectionStart" in l) {
				var u = { start: l.selectionStart, end: l.selectionEnd };
			} else {
				l: {
					u = ((u = l.ownerDocument) && u.defaultView) || window;
					var a = u.getSelection && u.getSelection();
					if (a && a.rangeCount !== 0) {
						u = a.anchorNode;
						var e = a.anchorOffset,
							n = a.focusNode;
						a = a.focusOffset;
						try {
							u.nodeType, n.nodeType;
						} catch {
							u = null;
							break l;
						}
						var f = 0,
							c = -1,
							i = -1,
							r = 0,
							S = 0,
							T = l,
							h = null;
						t: for (;;) {
							for (
								var m;
								T !== u || (e !== 0 && T.nodeType !== 3) || (c = f + e),
									T !== n || (a !== 0 && T.nodeType !== 3) || (i = f + a),
									T.nodeType === 3 && (f += T.nodeValue.length),
									(m = T.firstChild) !== null;

							) {
								(h = T), (T = m);
							}
							for (;;) {
								if (T === l) {
									break t;
								}
								if (
									(h === u && ++r === e && (c = f),
									h === n && ++S === a && (i = f),
									(m = T.nextSibling) !== null)
								) {
									break;
								}
								(T = h), (h = T.parentNode);
							}
							T = m;
						}
						u = c === -1 || i === -1 ? null : { start: c, end: i };
					} else {
						u = null;
					}
				}
			}
			u = u || { start: 0, end: 0 };
		} else {
			u = null;
		}
		for (
			Gc = { focusedElem: l, selectionRange: u }, Dn = !1, zl = t;
			zl !== null;

		) {
			if (
				((t = zl), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
			) {
				(l.return = t), (zl = l);
			} else {
				for (; zl !== null; ) {
					switch (((t = zl), (n = t.alternate), (l = t.flags), t.tag)) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((l & 1024) !== 0 && n !== null) {
								(l = void 0),
									(u = t),
									(e = n.memoizedProps),
									(n = n.memoizedState),
									(a = u.stateNode);
								try {
									var X = Ru(u.type, e, u.elementType === u.type);
									(l = a.getSnapshotBeforeUpdate(X, n)),
										(a.__reactInternalSnapshotBeforeUpdate = l);
								} catch (x) {
									il(u, u.return, x);
								}
							}
							break;
						case 3:
							if ((l & 1024) !== 0) {
								if (
									((l = t.stateNode.containerInfo), (u = l.nodeType), u === 9)
								) {
									Qc(l);
								} else if (u === 1) {
									switch (l.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											Qc(l);
											break;
										default:
											l.textContent = "";
									}
								}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((l & 1024) !== 0) {
								throw Error(d(163));
							}
					}
					if (((l = t.sibling), l !== null)) {
						(l.return = t.return), (zl = l);
						break;
					}
					zl = t.return;
				}
			}
		}
	}
	function C0(l, t, u) {
		var a = u.flags;
		switch (u.tag) {
			case 0:
			case 11:
			case 15:
				Pt(l, u), a & 4 && Fa(5, u);
				break;
			case 1:
				if ((Pt(l, u), a & 4)) {
					if (((l = u.stateNode), t === null)) {
						try {
							l.componentDidMount();
						} catch (f) {
							il(u, u.return, f);
						}
					} else {
						var e = Ru(u.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
						} catch (f) {
							il(u, u.return, f);
						}
					}
				}
				a & 64 && B0(u), a & 512 && Ia(u, u.return);
				break;
			case 3:
				if ((Pt(l, u), a & 64 && ((l = u.updateQueue), l !== null))) {
					if (((t = null), u.child !== null)) {
						switch (u.child.tag) {
							case 27:
							case 5:
								t = u.child.stateNode;
								break;
							case 1:
								t = u.child.stateNode;
						}
					}
					try {
						As(l, t);
					} catch (f) {
						il(u, u.return, f);
					}
				}
				break;
			case 27:
				t === null && a & 4 && X0(u);
			case 26:
			case 5:
				Pt(l, u), t === null && a & 4 && G0(u), a & 512 && Ia(u, u.return);
				break;
			case 12:
				Pt(l, u);
				break;
			case 13:
				Pt(l, u),
					a & 4 && L0(l, u),
					a & 64 &&
						((l = u.memoizedState),
						l !== null &&
							((l = l.dehydrated),
							l !== null && ((u = Fo.bind(null, u)), hy(l, u))));
				break;
			case 22:
				if (((a = u.memoizedState !== null || Gt), !a)) {
					(t = (t !== null && t.memoizedState !== null) || ml), (e = Gt);
					var n = ml;
					(Gt = a),
						(ml = t) && !n ? lu(l, u, (u.subtreeFlags & 8772) !== 0) : Pt(l, u),
						(Gt = e),
						(ml = n);
				}
				break;
			case 30:
				break;
			default:
				Pt(l, u);
		}
	}
	function Z0(l) {
		var t = l.alternate;
		t !== null && ((l.alternate = null), Z0(t)),
			(l.child = null),
			(l.deletions = null),
			(l.sibling = null),
			l.tag === 5 && ((t = l.stateNode), t !== null && Ln(t)),
			(l.stateNode = null),
			(l.return = null),
			(l.dependencies = null),
			(l.memoizedProps = null),
			(l.memoizedState = null),
			(l.pendingProps = null),
			(l.stateNode = null),
			(l.updateQueue = null);
	}
	var dl = null,
		Cl = !1;
	function jt(l, t, u) {
		for (u = u.child; u !== null; ) {
			V0(l, t, u), (u = u.sibling);
		}
	}
	function V0(l, t, u) {
		if (wl && typeof wl.onCommitFiberUnmount == "function") {
			try {
				wl.onCommitFiberUnmount(ba, u);
			} catch {}
		}
		switch (u.tag) {
			case 26:
				ml || Et(u, t),
					jt(l, t, u),
					u.memoizedState
						? u.memoizedState.count--
						: u.stateNode && ((u = u.stateNode), u.parentNode.removeChild(u));
				break;
			case 27:
				ml || Et(u, t);
				var a = dl,
					e = Cl;
				fu(u.type) && ((dl = u.stateNode), (Cl = !1)),
					jt(l, t, u),
					ce(u.stateNode),
					(dl = a),
					(Cl = e);
				break;
			case 5:
				ml || Et(u, t);
			case 6:
				if (
					((a = dl),
					(e = Cl),
					(dl = null),
					jt(l, t, u),
					(dl = a),
					(Cl = e),
					dl !== null)
				) {
					if (Cl) {
						try {
							(dl.nodeType === 9
								? dl.body
								: dl.nodeName === "HTML"
									? dl.ownerDocument.body
									: dl
							).removeChild(u.stateNode);
						} catch (n) {
							il(u, t, n);
						}
					} else {
						try {
							dl.removeChild(u.stateNode);
						} catch (n) {
							il(u, t, n);
						}
					}
				}
				break;
			case 18:
				dl !== null &&
					(Cl
						? ((l = dl),
							Nv(
								l.nodeType === 9
									? l.body
									: l.nodeName === "HTML"
										? l.ownerDocument.body
										: l,
								u.stateNode,
							),
							he(l))
						: Nv(dl, u.stateNode));
				break;
			case 4:
				(a = dl),
					(e = Cl),
					(dl = u.stateNode.containerInfo),
					(Cl = !0),
					jt(l, t, u),
					(dl = a),
					(Cl = e);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				ml || It(2, u, t), ml || It(4, u, t), jt(l, t, u);
				break;
			case 1:
				ml ||
					(Et(u, t),
					(a = u.stateNode),
					typeof a.componentWillUnmount == "function" && x0(u, t, a)),
					jt(l, t, u);
				break;
			case 21:
				jt(l, t, u);
				break;
			case 22:
				(ml = (a = ml) || u.memoizedState !== null), jt(l, t, u), (ml = a);
				break;
			default:
				jt(l, t, u);
		}
	}
	function L0(l, t) {
		if (
			t.memoizedState === null &&
			((l = t.alternate),
			l !== null &&
				((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
		) {
			try {
				he(l);
			} catch (u) {
				il(t, t.return, u);
			}
		}
	}
	function Vo(l) {
		switch (l.tag) {
			case 13:
			case 19:
				var t = l.stateNode;
				return t === null && (t = l.stateNode = new Q0()), t;
			case 22:
				return (
					(l = l.stateNode),
					(t = l._retryCache),
					t === null && (t = l._retryCache = new Q0()),
					t
				);
			default:
				throw Error(d(435, l.tag));
		}
	}
	function yc(l, t) {
		var u = Vo(l);
		t.forEach(function (a) {
			var e = Io.bind(null, l, a);
			u.has(a) || (u.add(a), a.then(e, e));
		});
	}
	function Fl(l, t) {
		var u = t.deletions;
		if (u !== null) {
			for (var a = 0; a < u.length; a++) {
				var e = u[a],
					n = l,
					f = t,
					c = f;
				l: for (; c !== null; ) {
					switch (c.tag) {
						case 27:
							if (fu(c.type)) {
								(dl = c.stateNode), (Cl = !1);
								break l;
							}
							break;
						case 5:
							(dl = c.stateNode), (Cl = !1);
							break l;
						case 3:
						case 4:
							(dl = c.stateNode.containerInfo), (Cl = !0);
							break l;
					}
					c = c.return;
				}
				if (dl === null) {
					throw Error(d(160));
				}
				V0(n, f, e),
					(dl = null),
					(Cl = !1),
					(n = e.alternate),
					n !== null && (n.return = null),
					(e.return = null);
			}
		}
		if (t.subtreeFlags & 13878) {
			for (t = t.child; t !== null; ) {
				K0(t, l), (t = t.sibling);
			}
		}
	}
	var rt = null;
	function K0(l, t) {
		var u = l.alternate,
			a = l.flags;
		switch (l.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				Fl(t, l),
					Il(l),
					a & 4 && (It(3, l, l.return), Fa(3, l), It(5, l, l.return));
				break;
			case 1:
				Fl(t, l),
					Il(l),
					a & 512 && (ml || u === null || Et(u, u.return)),
					a & 64 &&
						Gt &&
						((l = l.updateQueue),
						l !== null &&
							((a = l.callbacks),
							a !== null &&
								((u = l.shared.hiddenCallbacks),
								(l.shared.hiddenCallbacks = u === null ? a : u.concat(a)))));
				break;
			case 26:
				var e = rt;
				if (
					(Fl(t, l),
					Il(l),
					a & 512 && (ml || u === null || Et(u, u.return)),
					a & 4)
				) {
					var n = u !== null ? u.memoizedState : null;
					if (((a = l.memoizedState), u === null)) {
						if (a === null) {
							if (l.stateNode === null) {
								l: {
									(a = l.type),
										(u = l.memoizedProps),
										(e = e.ownerDocument || e);
									t: switch (a) {
										case "title":
											(n = e.getElementsByTagName("title")[0]),
												(!n ||
													n[Aa] ||
													n[Hl] ||
													n.namespaceURI === "http://www.w3.org/2000/svg" ||
													n.hasAttribute("itemprop")) &&
													((n = e.createElement(a)),
													e.head.insertBefore(
														n,
														e.querySelector("head > title"),
													)),
												Ul(n, a, u),
												(n[Hl] = l),
												El(n),
												(a = n);
											break l;
										case "link":
											var f = Xv("link", "href", e).get(a + (u.href || ""));
											if (f) {
												for (var c = 0; c < f.length; c++) {
													if (
														((n = f[c]),
														n.getAttribute("href") ===
															(u.href == null || u.href === ""
																? null
																: u.href) &&
															n.getAttribute("rel") ===
																(u.rel == null ? null : u.rel) &&
															n.getAttribute("title") ===
																(u.title == null ? null : u.title) &&
															n.getAttribute("crossorigin") ===
																(u.crossOrigin == null ? null : u.crossOrigin))
													) {
														f.splice(c, 1);
														break t;
													}
												}
											}
											(n = e.createElement(a)),
												Ul(n, a, u),
												e.head.appendChild(n);
											break;
										case "meta":
											if (
												(f = Xv("meta", "content", e).get(
													a + (u.content || ""),
												))
											) {
												for (c = 0; c < f.length; c++) {
													if (
														((n = f[c]),
														n.getAttribute("content") ===
															(u.content == null ? null : "" + u.content) &&
															n.getAttribute("name") ===
																(u.name == null ? null : u.name) &&
															n.getAttribute("property") ===
																(u.property == null ? null : u.property) &&
															n.getAttribute("http-equiv") ===
																(u.httpEquiv == null ? null : u.httpEquiv) &&
															n.getAttribute("charset") ===
																(u.charSet == null ? null : u.charSet))
													) {
														f.splice(c, 1);
														break t;
													}
												}
											}
											(n = e.createElement(a)),
												Ul(n, a, u),
												e.head.appendChild(n);
											break;
										default:
											throw Error(d(468, a));
									}
									(n[Hl] = l), El(n), (a = n);
								}
								l.stateNode = a;
							} else {
								Qv(e, l.type, l.stateNode);
							}
						} else {
							l.stateNode = jv(e, a, l.memoizedProps);
						}
					} else {
						n !== a
							? (n === null
									? u.stateNode !== null &&
										((u = u.stateNode), u.parentNode.removeChild(u))
									: n.count--,
								a === null
									? Qv(e, l.type, l.stateNode)
									: jv(e, a, l.memoizedProps))
							: a === null &&
								l.stateNode !== null &&
								sc(l, l.memoizedProps, u.memoizedProps);
					}
				}
				break;
			case 27:
				Fl(t, l),
					Il(l),
					a & 512 && (ml || u === null || Et(u, u.return)),
					u !== null && a & 4 && sc(l, l.memoizedProps, u.memoizedProps);
				break;
			case 5:
				if (
					(Fl(t, l),
					Il(l),
					a & 512 && (ml || u === null || Et(u, u.return)),
					l.flags & 32)
				) {
					e = l.stateNode;
					try {
						Cu(e, "");
					} catch (m) {
						il(l, l.return, m);
					}
				}
				a & 4 &&
					l.stateNode != null &&
					((e = l.memoizedProps), sc(l, e, u !== null ? u.memoizedProps : e)),
					a & 1024 && (oc = !0);
				break;
			case 6:
				if ((Fl(t, l), Il(l), a & 4)) {
					if (l.stateNode === null) {
						throw Error(d(162));
					}
					(a = l.memoizedProps), (u = l.stateNode);
					try {
						u.nodeValue = a;
					} catch (m) {
						il(l, l.return, m);
					}
				}
				break;
			case 3:
				if (
					((_n = null),
					(e = rt),
					(rt = An(t.containerInfo)),
					Fl(t, l),
					(rt = e),
					Il(l),
					a & 4 && u !== null && u.memoizedState.isDehydrated)
				) {
					try {
						he(t.containerInfo);
					} catch (m) {
						il(l, l.return, m);
					}
				}
				oc && ((oc = !1), J0(l));
				break;
			case 4:
				(a = rt),
					(rt = An(l.stateNode.containerInfo)),
					Fl(t, l),
					Il(l),
					(rt = a);
				break;
			case 12:
				Fl(t, l), Il(l);
				break;
			case 13:
				Fl(t, l),
					Il(l),
					l.child.flags & 8192 &&
						(l.memoizedState !== null) !=
							(u !== null && u.memoizedState !== null) &&
						(bc = gt()),
					a & 4 &&
						((a = l.updateQueue),
						a !== null && ((l.updateQueue = null), yc(l, a)));
				break;
			case 22:
				e = l.memoizedState !== null;
				var i = u !== null && u.memoizedState !== null,
					r = Gt,
					S = ml;
				if (
					((Gt = r || e),
					(ml = S || i),
					Fl(t, l),
					(ml = S),
					(Gt = r),
					Il(l),
					a & 8192)
				) {
					l: for (
						t = l.stateNode,
							t._visibility = e ? t._visibility & -2 : t._visibility | 1,
							e && (u === null || i || Gt || ml || pu(l)),
							u = null,
							t = l;
						;

					) {
						if (t.tag === 5 || t.tag === 26) {
							if (u === null) {
								i = u = t;
								try {
									if (((n = i.stateNode), e)) {
										(f = n.style),
											typeof f.setProperty == "function"
												? f.setProperty("display", "none", "important")
												: (f.display = "none");
									} else {
										c = i.stateNode;
										var T = i.memoizedProps.style,
											h =
												T != null && T.hasOwnProperty("display")
													? T.display
													: null;
										c.style.display =
											h == null || typeof h == "boolean" ? "" : ("" + h).trim();
									}
								} catch (m) {
									il(i, i.return, m);
								}
							}
						} else if (t.tag === 6) {
							if (u === null) {
								i = t;
								try {
									i.stateNode.nodeValue = e ? "" : i.memoizedProps;
								} catch (m) {
									il(i, i.return, m);
								}
							}
						} else if (
							((t.tag !== 22 && t.tag !== 23) ||
								t.memoizedState === null ||
								t === l) &&
							t.child !== null
						) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === l) {
							break l;
						}
						for (; t.sibling === null; ) {
							if (t.return === null || t.return === l) {
								break l;
							}
							u === t && (u = null), (t = t.return);
						}
						u === t && (u = null),
							(t.sibling.return = t.return),
							(t = t.sibling);
					}
				}
				a & 4 &&
					((a = l.updateQueue),
					a !== null &&
						((u = a.retryQueue),
						u !== null && ((a.retryQueue = null), yc(l, u))));
				break;
			case 19:
				Fl(t, l),
					Il(l),
					a & 4 &&
						((a = l.updateQueue),
						a !== null && ((l.updateQueue = null), yc(l, a)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				Fl(t, l), Il(l);
		}
	}
	function Il(l) {
		var t = l.flags;
		if (t & 2) {
			try {
				for (var u, a = l.return; a !== null; ) {
					if (j0(a)) {
						u = a;
						break;
					}
					a = a.return;
				}
				if (u == null) {
					throw Error(d(160));
				}
				switch (u.tag) {
					case 27:
						var e = u.stateNode,
							n = vc(l);
						sn(l, n, e);
						break;
					case 5:
						var f = u.stateNode;
						u.flags & 32 && (Cu(f, ""), (u.flags &= -33));
						var c = vc(l);
						sn(l, c, f);
						break;
					case 3:
					case 4:
						var i = u.stateNode.containerInfo,
							r = vc(l);
						dc(l, r, i);
						break;
					default:
						throw Error(d(161));
				}
			} catch (S) {
				il(l, l.return, S);
			}
			l.flags &= -3;
		}
		t & 4096 && (l.flags &= -4097);
	}
	function J0(l) {
		if (l.subtreeFlags & 1024) {
			for (l = l.child; l !== null; ) {
				var t = l;
				J0(t),
					t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
					(l = l.sibling);
			}
		}
	}
	function Pt(l, t) {
		if (t.subtreeFlags & 8772) {
			for (t = t.child; t !== null; ) {
				C0(l, t.alternate, t), (t = t.sibling);
			}
		}
	}
	function pu(l) {
		for (l = l.child; l !== null; ) {
			var t = l;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					It(4, t, t.return), pu(t);
					break;
				case 1:
					Et(t, t.return);
					var u = t.stateNode;
					typeof u.componentWillUnmount == "function" && x0(t, t.return, u),
						pu(t);
					break;
				case 27:
					ce(t.stateNode);
				case 26:
				case 5:
					Et(t, t.return), pu(t);
					break;
				case 22:
					t.memoizedState === null && pu(t);
					break;
				case 30:
					pu(t);
					break;
				default:
					pu(t);
			}
			l = l.sibling;
		}
	}
	function lu(l, t, u) {
		for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
			var a = t.alternate,
				e = l,
				n = t,
				f = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					lu(e, n, u), Fa(4, n);
					break;
				case 1:
					if (
						(lu(e, n, u),
						(a = n),
						(e = a.stateNode),
						typeof e.componentDidMount == "function")
					) {
						try {
							e.componentDidMount();
						} catch (r) {
							il(a, a.return, r);
						}
					}
					if (((a = n), (e = a.updateQueue), e !== null)) {
						var c = a.stateNode;
						try {
							var i = e.shared.hiddenCallbacks;
							if (i !== null) {
								for (
									e.shared.hiddenCallbacks = null, e = 0;
									e < i.length;
									e++
								) {
									Es(i[e], c);
								}
							}
						} catch (r) {
							il(a, a.return, r);
						}
					}
					u && f & 64 && B0(n), Ia(n, n.return);
					break;
				case 27:
					X0(n);
				case 26:
				case 5:
					lu(e, n, u), u && a === null && f & 4 && G0(n), Ia(n, n.return);
					break;
				case 12:
					lu(e, n, u);
					break;
				case 13:
					lu(e, n, u), u && f & 4 && L0(e, n);
					break;
				case 22:
					n.memoizedState === null && lu(e, n, u), Ia(n, n.return);
					break;
				case 30:
					break;
				default:
					lu(e, n, u);
			}
			t = t.sibling;
		}
	}
	function rc(l, t) {
		var u = null;
		l !== null &&
			l.memoizedState !== null &&
			l.memoizedState.cachePool !== null &&
			(u = l.memoizedState.cachePool.pool),
			(l = null),
			t.memoizedState !== null &&
				t.memoizedState.cachePool !== null &&
				(l = t.memoizedState.cachePool.pool),
			l !== u && (l != null && l.refCount++, u != null && Ga(u));
	}
	function hc(l, t) {
		(l = null),
			t.alternate !== null && (l = t.alternate.memoizedState.cache),
			(t = t.memoizedState.cache),
			t !== l && (t.refCount++, l != null && Ga(l));
	}
	function At(l, t, u, a) {
		if (t.subtreeFlags & 10256) {
			for (t = t.child; t !== null; ) {
				w0(l, t, u, a), (t = t.sibling);
			}
		}
	}
	function w0(l, t, u, a) {
		var e = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				At(l, t, u, a), e & 2048 && Fa(9, t);
				break;
			case 1:
				At(l, t, u, a);
				break;
			case 3:
				At(l, t, u, a),
					e & 2048 &&
						((l = null),
						t.alternate !== null && (l = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache),
						t !== l && (t.refCount++, l != null && Ga(l)));
				break;
			case 12:
				if (e & 2048) {
					At(l, t, u, a), (l = t.stateNode);
					try {
						var n = t.memoizedProps,
							f = n.id,
							c = n.onPostCommit;
						typeof c == "function" &&
							c(
								f,
								t.alternate === null ? "mount" : "update",
								l.passiveEffectDuration,
								-0,
							);
					} catch (i) {
						il(t, t.return, i);
					}
				} else {
					At(l, t, u, a);
				}
				break;
			case 13:
				At(l, t, u, a);
				break;
			case 23:
				break;
			case 22:
				(n = t.stateNode),
					(f = t.alternate),
					t.memoizedState !== null
						? n._visibility & 2
							? At(l, t, u, a)
							: Pa(l, t)
						: n._visibility & 2
							? At(l, t, u, a)
							: ((n._visibility |= 2),
								fa(l, t, u, a, (t.subtreeFlags & 10256) !== 0)),
					e & 2048 && rc(f, t);
				break;
			case 24:
				At(l, t, u, a), e & 2048 && hc(t.alternate, t);
				break;
			default:
				At(l, t, u, a);
		}
	}
	function fa(l, t, u, a, e) {
		for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
			var n = l,
				f = t,
				c = u,
				i = a,
				r = f.flags;
			switch (f.tag) {
				case 0:
				case 11:
				case 15:
					fa(n, f, c, i, e), Fa(8, f);
					break;
				case 23:
					break;
				case 22:
					var S = f.stateNode;
					f.memoizedState !== null
						? S._visibility & 2
							? fa(n, f, c, i, e)
							: Pa(n, f)
						: ((S._visibility |= 2), fa(n, f, c, i, e)),
						e && r & 2048 && rc(f.alternate, f);
					break;
				case 24:
					fa(n, f, c, i, e), e && r & 2048 && hc(f.alternate, f);
					break;
				default:
					fa(n, f, c, i, e);
			}
			t = t.sibling;
		}
	}
	function Pa(l, t) {
		if (t.subtreeFlags & 10256) {
			for (t = t.child; t !== null; ) {
				var u = l,
					a = t,
					e = a.flags;
				switch (a.tag) {
					case 22:
						Pa(u, a), e & 2048 && rc(a.alternate, a);
						break;
					case 24:
						Pa(u, a), e & 2048 && hc(a.alternate, a);
						break;
					default:
						Pa(u, a);
				}
				t = t.sibling;
			}
		}
	}
	var le = 8192;
	function ca(l) {
		if (l.subtreeFlags & le) {
			for (l = l.child; l !== null; ) {
				W0(l), (l = l.sibling);
			}
		}
	}
	function W0(l) {
		switch (l.tag) {
			case 26:
				ca(l),
					l.flags & le &&
						l.memoizedState !== null &&
						Uy(rt, l.memoizedState, l.memoizedProps);
				break;
			case 5:
				ca(l);
				break;
			case 3:
			case 4:
				var t = rt;
				(rt = An(l.stateNode.containerInfo)), ca(l), (rt = t);
				break;
			case 22:
				l.memoizedState === null &&
					((t = l.alternate),
					t !== null && t.memoizedState !== null
						? ((t = le), (le = 16777216), ca(l), (le = t))
						: ca(l));
				break;
			default:
				ca(l);
		}
	}
	function $0(l) {
		var t = l.alternate;
		if (t !== null && ((l = t.child), l !== null)) {
			t.child = null;
			do {
				(t = l.sibling), (l.sibling = null), (l = t);
			} while (l !== null);
		}
	}
	function te(l) {
		var t = l.deletions;
		if ((l.flags & 16) !== 0) {
			if (t !== null) {
				for (var u = 0; u < t.length; u++) {
					var a = t[u];
					(zl = a), F0(a, l);
				}
			}
			$0(l);
		}
		if (l.subtreeFlags & 10256) {
			for (l = l.child; l !== null; ) {
				k0(l), (l = l.sibling);
			}
		}
	}
	function k0(l) {
		switch (l.tag) {
			case 0:
			case 11:
			case 15:
				te(l), l.flags & 2048 && It(9, l, l.return);
				break;
			case 3:
				te(l);
				break;
			case 12:
				te(l);
				break;
			case 22:
				var t = l.stateNode;
				l.memoizedState !== null &&
				t._visibility & 2 &&
				(l.return === null || l.return.tag !== 13)
					? ((t._visibility &= -3), vn(l))
					: te(l);
				break;
			default:
				te(l);
		}
	}
	function vn(l) {
		var t = l.deletions;
		if ((l.flags & 16) !== 0) {
			if (t !== null) {
				for (var u = 0; u < t.length; u++) {
					var a = t[u];
					(zl = a), F0(a, l);
				}
			}
			$0(l);
		}
		for (l = l.child; l !== null; ) {
			switch (((t = l), t.tag)) {
				case 0:
				case 11:
				case 15:
					It(8, t, t.return), vn(t);
					break;
				case 22:
					(u = t.stateNode),
						u._visibility & 2 && ((u._visibility &= -3), vn(t));
					break;
				default:
					vn(t);
			}
			l = l.sibling;
		}
	}
	function F0(l, t) {
		for (; zl !== null; ) {
			var u = zl;
			switch (u.tag) {
				case 0:
				case 11:
				case 15:
					It(8, u, t);
					break;
				case 23:
				case 22:
					if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
						var a = u.memoizedState.cachePool.pool;
						a != null && a.refCount++;
					}
					break;
				case 24:
					Ga(u.memoizedState.cache);
			}
			if (((a = u.child), a !== null)) {
				(a.return = u), (zl = a);
			} else {
				l: for (u = l; zl !== null; ) {
					a = zl;
					var e = a.sibling,
						n = a.return;
					if ((Z0(a), a === u)) {
						zl = null;
						break l;
					}
					if (e !== null) {
						(e.return = n), (zl = e);
						break l;
					}
					zl = n;
				}
			}
		}
	}
	var Lo = {
			getCacheForType: function (l) {
				var t = ql(bl),
					u = t.data.get(l);
				return u === void 0 && ((u = l()), t.data.set(l, u)), u;
			},
		},
		Ko = typeof WeakMap == "function" ? WeakMap : Map,
		ul = 0,
		sl = null,
		L = null,
		w = 0,
		al = 0,
		Pl = null,
		tu = !1,
		ia = !1,
		mc = !1,
		Xt = 0,
		rl = 0,
		uu = 0,
		Nu = 0,
		Sc = 0,
		st = 0,
		sa = 0,
		ue = null,
		Zl = null,
		gc = !1,
		bc = 0,
		dn = 1 / 0,
		on = null,
		au = null,
		Dl = 0,
		eu = null,
		va = null,
		da = 0,
		Tc = 0,
		Ec = null,
		I0 = null,
		ae = 0,
		Ac = null;
	function lt() {
		if ((ul & 2) !== 0 && w !== 0) {
			return w & -w;
		}
		if (g.T !== null) {
			var l = Iu;
			return l !== 0 ? l : Rc();
		}
		return ri();
	}
	function P0() {
		st === 0 && (st = (w & 536870912) === 0 || I ? vi() : 536870912);
		var l = it.current;
		return l !== null && (l.flags |= 32), st;
	}
	function tt(l, t, u) {
		((l === sl && (al === 2 || al === 9)) || l.cancelPendingCommit !== null) &&
			(oa(l, 0), nu(l, w, st, !1)),
			Ea(l, u),
			((ul & 2) === 0 || l !== sl) &&
				(l === sl &&
					((ul & 2) === 0 && (Nu |= u), rl === 4 && nu(l, w, st, !1)),
				zt(l));
	}
	function lv(l, t, u) {
		if ((ul & 6) !== 0) {
			throw Error(d(327));
		}
		var a = (!u && (t & 124) === 0 && (t & l.expiredLanes) === 0) || Ta(l, t),
			e = a ? Wo(l, t) : Oc(l, t, !0),
			n = a;
		do {
			if (e === 0) {
				ia && !a && nu(l, t, 0, !1);
				break;
			} else {
				if (((u = l.current.alternate), n && !Jo(u))) {
					(e = Oc(l, t, !1)), (n = !1);
					continue;
				}
				if (e === 2) {
					if (((n = t), l.errorRecoveryDisabledLanes & n)) {
						var f = 0;
					} else {
						(f = l.pendingLanes & -536870913),
							(f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
					}
					if (f !== 0) {
						t = f;
						l: {
							var c = l;
							e = ue;
							var i = c.current.memoizedState.isDehydrated;
							if ((i && (oa(c, f).flags |= 256), (f = Oc(c, f, !1)), f !== 2)) {
								if (mc && !i) {
									(c.errorRecoveryDisabledLanes |= n), (Nu |= n), (e = 4);
									break l;
								}
								(n = Zl),
									(Zl = e),
									n !== null && (Zl === null ? (Zl = n) : Zl.push.apply(Zl, n));
							}
							e = f;
						}
						if (((n = !1), e !== 2)) {
							continue;
						}
					}
				}
				if (e === 1) {
					oa(l, 0), nu(l, t, 0, !0);
					break;
				}
				l: {
					switch (((a = l), (n = e), n)) {
						case 0:
						case 1:
							throw Error(d(345));
						case 4:
							if ((t & 4194048) !== t) {
								break;
							}
						case 6:
							nu(a, t, st, !tu);
							break l;
						case 2:
							Zl = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(d(329));
					}
					if ((t & 62914560) === t && ((e = bc + 300 - gt()), 10 < e)) {
						if ((nu(a, t, st, !tu), Ae(a, 0, !0) !== 0)) {
							break l;
						}
						a.timeoutHandle = Rv(
							tv.bind(null, a, u, Zl, on, gc, t, st, Nu, sa, tu, n, 2, -0, 0),
							e,
						);
						break l;
					}
					tv(a, u, Zl, on, gc, t, st, Nu, sa, tu, n, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		zt(l);
	}
	function tv(l, t, u, a, e, n, f, c, i, r, S, T, h, m) {
		if (
			((l.timeoutHandle = -1),
			(T = t.subtreeFlags),
			(T & 8192 || (T & 16785408) === 16785408) &&
				((ve = { stylesheets: null, count: 0, unsuspend: Dy }),
				W0(t),
				(T = Ry()),
				T !== null))
		) {
			(l.cancelPendingCommit = T(
				iv.bind(null, l, t, n, u, a, e, f, c, i, S, 1, h, m),
			)),
				nu(l, n, f, !r);
			return;
		}
		iv(l, t, n, u, a, e, f, c, i);
	}
	function Jo(l) {
		for (var t = l; ; ) {
			var u = t.tag;
			if (
				(u === 0 || u === 11 || u === 15) &&
				t.flags & 16384 &&
				((u = t.updateQueue), u !== null && ((u = u.stores), u !== null))
			) {
				for (var a = 0; a < u.length; a++) {
					var e = u[a],
						n = e.getSnapshot;
					e = e.value;
					try {
						if (!$l(n(), e)) {
							return !1;
						}
					} catch {
						return !1;
					}
				}
			}
			if (((u = t.child), t.subtreeFlags & 16384 && u !== null)) {
				(u.return = t), (t = u);
			} else {
				if (t === l) {
					break;
				}
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === l) {
						return !0;
					}
					t = t.return;
				}
				(t.sibling.return = t.return), (t = t.sibling);
			}
		}
		return !0;
	}
	function nu(l, t, u, a) {
		(t &= ~Sc),
			(t &= ~Nu),
			(l.suspendedLanes |= t),
			(l.pingedLanes &= ~t),
			a && (l.warmLanes |= t),
			(a = l.expirationTimes);
		for (var e = t; 0 < e; ) {
			var n = 31 - Wl(e),
				f = 1 << n;
			(a[n] = -1), (e &= ~f);
		}
		u !== 0 && oi(l, u, t);
	}
	function yn() {
		return (ul & 6) === 0 ? (ee(0), !1) : !0;
	}
	function zc() {
		if (L !== null) {
			if (al === 0) {
				var l = L.return;
			} else {
				(l = L), (Nt = Ou = null), Qf(l), (ea = null), (Wa = 0), (l = L);
			}
			for (; l !== null; ) {
				Y0(l.alternate, l), (l = l.return);
			}
			L = null;
		}
	}
	function oa(l, t) {
		var u = l.timeoutHandle;
		u !== -1 && ((l.timeoutHandle = -1), vy(u)),
			(u = l.cancelPendingCommit),
			u !== null && ((l.cancelPendingCommit = null), u()),
			zc(),
			(sl = l),
			(L = u = Ut(l.current, null)),
			(w = t),
			(al = 0),
			(Pl = null),
			(tu = !1),
			(ia = Ta(l, t)),
			(mc = !1),
			(sa = st = Sc = Nu = uu = rl = 0),
			(Zl = ue = null),
			(gc = !1),
			(t & 8) !== 0 && (t |= t & 32);
		var a = l.entangledLanes;
		if (a !== 0) {
			for (l = l.entanglements, a &= t; 0 < a; ) {
				var e = 31 - Wl(a),
					n = 1 << e;
				(t |= l[e]), (a &= ~n);
			}
		}
		return (Xt = t), Ye(), u;
	}
	function uv(l, t) {
		(Z = null),
			(g.H = Pe),
			t === Xa || t === Ve
				? ((t = bs()), (al = 3))
				: t === ms
					? ((t = bs()), (al = 4))
					: (al =
							t === T0
								? 8
								: t !== null &&
									  typeof t == "object" &&
									  typeof t.then == "function"
									? 6
									: 1),
			(Pl = t),
			L === null && ((rl = 1), en(l, et(t, l.current)));
	}
	function av() {
		var l = g.H;
		return (g.H = Pe), l === null ? Pe : l;
	}
	function ev() {
		var l = g.A;
		return (g.A = Lo), l;
	}
	function _c() {
		(rl = 4),
			tu || ((w & 4194048) !== w && it.current !== null) || (ia = !0),
			((uu & 134217727) === 0 && (Nu & 134217727) === 0) ||
				sl === null ||
				nu(sl, w, st, !1);
	}
	function Oc(l, t, u) {
		var a = ul;
		ul |= 2;
		var e = av(),
			n = ev();
		(sl !== l || w !== t) && ((on = null), oa(l, t)), (t = !1);
		var f = rl;
		l: do {
			try {
				if (al !== 0 && L !== null) {
					var c = L,
						i = Pl;
					switch (al) {
						case 8:
							zc(), (f = 6);
							break l;
						case 3:
						case 2:
						case 9:
						case 6:
							it.current === null && (t = !0);
							var r = al;
							if (((al = 0), (Pl = null), ya(l, c, i, r), u && ia)) {
								f = 0;
								break l;
							}
							break;
						default:
							(r = al), (al = 0), (Pl = null), ya(l, c, i, r);
					}
				}
				wo(), (f = rl);
				break;
			} catch (S) {
				uv(l, S);
			}
		} while (!0);
		return (
			t && l.shellSuspendCounter++,
			(Nt = Ou = null),
			(ul = a),
			(g.H = e),
			(g.A = n),
			L === null && ((sl = null), (w = 0), Ye()),
			f
		);
	}
	function wo() {
		for (; L !== null; ) {
			nv(L);
		}
	}
	function Wo(l, t) {
		var u = ul;
		ul |= 2;
		var a = av(),
			e = ev();
		sl !== l || w !== t
			? ((on = null), (dn = gt() + 500), oa(l, t))
			: (ia = Ta(l, t));
		l: do {
			try {
				if (al !== 0 && L !== null) {
					t = L;
					var n = Pl;
					t: switch (al) {
						case 1:
							(al = 0), (Pl = null), ya(l, t, n, 1);
							break;
						case 2:
						case 9:
							if (Ss(n)) {
								(al = 0), (Pl = null), fv(t);
								break;
							}
							(t = function () {
								(al !== 2 && al !== 9) || sl !== l || (al = 7), zt(l);
							}),
								n.then(t, t);
							break l;
						case 3:
							al = 7;
							break l;
						case 4:
							al = 5;
							break l;
						case 7:
							Ss(n)
								? ((al = 0), (Pl = null), fv(t))
								: ((al = 0), (Pl = null), ya(l, t, n, 7));
							break;
						case 5:
							var f = null;
							switch (L.tag) {
								case 26:
									f = L.memoizedState;
								case 5:
								case 27:
									var c = L;
									if (!f || Cv(f)) {
										(al = 0), (Pl = null);
										var i = c.sibling;
										if (i !== null) {
											L = i;
										} else {
											var r = c.return;
											r !== null ? ((L = r), rn(r)) : (L = null);
										}
										break t;
									}
							}
							(al = 0), (Pl = null), ya(l, t, n, 5);
							break;
						case 6:
							(al = 0), (Pl = null), ya(l, t, n, 6);
							break;
						case 8:
							zc(), (rl = 6);
							break l;
						default:
							throw Error(d(462));
					}
				}
				$o();
				break;
			} catch (S) {
				uv(l, S);
			}
		} while (!0);
		return (
			(Nt = Ou = null),
			(g.H = a),
			(g.A = e),
			(ul = u),
			L !== null ? 0 : ((sl = null), (w = 0), Ye(), rl)
		);
	}
	function $o() {
		for (; L !== null && !md(); ) {
			nv(L);
		}
	}
	function nv(l) {
		var t = H0(l.alternate, l, Xt);
		(l.memoizedProps = l.pendingProps), t === null ? rn(l) : (L = t);
	}
	function fv(l) {
		var t = l,
			u = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = M0(u, t, t.pendingProps, t.type, void 0, w);
				break;
			case 11:
				t = M0(u, t, t.pendingProps, t.type.render, t.ref, w);
				break;
			case 5:
				Qf(t);
			default:
				Y0(u, t), (t = L = cs(t, Xt)), (t = H0(u, t, Xt));
		}
		(l.memoizedProps = l.pendingProps), t === null ? rn(l) : (L = t);
	}
	function ya(l, t, u, a) {
		(Nt = Ou = null), Qf(t), (ea = null), (Wa = 0);
		var e = t.return;
		try {
			if (jo(l, e, t, u, w)) {
				(rl = 1), en(l, et(u, l.current)), (L = null);
				return;
			}
		} catch (n) {
			if (e !== null) {
				throw ((L = e), n);
			}
			(rl = 1), en(l, et(u, l.current)), (L = null);
			return;
		}
		t.flags & 32768
			? (I || a === 1
					? (l = !0)
					: ia || (w & 536870912) !== 0
						? (l = !1)
						: ((tu = l = !0),
							(a === 2 || a === 9 || a === 3 || a === 6) &&
								((a = it.current),
								a !== null && a.tag === 13 && (a.flags |= 16384))),
				cv(t, l))
			: rn(t);
	}
	function rn(l) {
		var t = l;
		do {
			if ((t.flags & 32768) !== 0) {
				cv(t, tu);
				return;
			}
			l = t.return;
			var u = Qo(t.alternate, t, Xt);
			if (u !== null) {
				L = u;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				L = t;
				return;
			}
			L = t = l;
		} while (t !== null);
		rl === 0 && (rl = 5);
	}
	function cv(l, t) {
		do {
			var u = Co(l.alternate, l);
			if (u !== null) {
				(u.flags &= 32767), (L = u);
				return;
			}
			if (
				((u = l.return),
				u !== null &&
					((u.flags |= 32768), (u.subtreeFlags = 0), (u.deletions = null)),
				!t && ((l = l.sibling), l !== null))
			) {
				L = l;
				return;
			}
			L = l = u;
		} while (l !== null);
		(rl = 6), (L = null);
	}
	function iv(l, t, u, a, e, n, f, c, i) {
		l.cancelPendingCommit = null;
		do {
			hn();
		} while (Dl !== 0);
		if ((ul & 6) !== 0) {
			throw Error(d(327));
		}
		if (t !== null) {
			if (t === l.current) {
				throw Error(d(177));
			}
			if (
				((n = t.lanes | t.childLanes),
				(n |= hf),
				Md(l, u, n, f, c, i),
				l === sl && ((L = sl = null), (w = 0)),
				(va = t),
				(eu = l),
				(da = u),
				(Tc = n),
				(Ec = e),
				(I0 = a),
				(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
					? ((l.callbackNode = null),
						(l.callbackPriority = 0),
						Po(be, function () {
							return yv(), null;
						}))
					: ((l.callbackNode = null), (l.callbackPriority = 0)),
				(a = (t.flags & 13878) !== 0),
				(t.subtreeFlags & 13878) !== 0 || a)
			) {
				(a = g.T), (g.T = null), (e = O.p), (O.p = 2), (f = ul), (ul |= 4);
				try {
					Zo(l, t, u);
				} finally {
					(ul = f), (O.p = e), (g.T = a);
				}
			}
			(Dl = 1), sv(), vv(), dv();
		}
	}
	function sv() {
		if (Dl === 1) {
			Dl = 0;
			var l = eu,
				t = va,
				u = (t.flags & 13878) !== 0;
			if ((t.subtreeFlags & 13878) !== 0 || u) {
				(u = g.T), (g.T = null);
				var a = O.p;
				O.p = 2;
				var e = ul;
				ul |= 4;
				try {
					K0(t, l);
					var n = Gc,
						f = Fi(l.containerInfo),
						c = n.focusedElem,
						i = n.selectionRange;
					if (
						f !== c &&
						c &&
						c.ownerDocument &&
						ki(c.ownerDocument.documentElement, c)
					) {
						if (i !== null && vf(c)) {
							var r = i.start,
								S = i.end;
							if ((S === void 0 && (S = r), "selectionStart" in c)) {
								(c.selectionStart = r),
									(c.selectionEnd = Math.min(S, c.value.length));
							} else {
								var T = c.ownerDocument || document,
									h = (T && T.defaultView) || window;
								if (h.getSelection) {
									var m = h.getSelection(),
										X = c.textContent.length,
										x = Math.min(i.start, X),
										fl = i.end === void 0 ? x : Math.min(i.end, X);
									!m.extend && x > fl && ((f = fl), (fl = x), (x = f));
									var o = $i(c, x),
										v = $i(c, fl);
									if (
										o &&
										v &&
										(m.rangeCount !== 1 ||
											m.anchorNode !== o.node ||
											m.anchorOffset !== o.offset ||
											m.focusNode !== v.node ||
											m.focusOffset !== v.offset)
									) {
										var y = T.createRange();
										y.setStart(o.node, o.offset),
											m.removeAllRanges(),
											x > fl
												? (m.addRange(y), m.extend(v.node, v.offset))
												: (y.setEnd(v.node, v.offset), m.addRange(y));
									}
								}
							}
						}
						for (T = [], m = c; (m = m.parentNode); ) {
							m.nodeType === 1 &&
								T.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
						}
						for (
							typeof c.focus == "function" && c.focus(), c = 0;
							c < T.length;
							c++
						) {
							var b = T[c];
							(b.element.scrollLeft = b.left), (b.element.scrollTop = b.top);
						}
					}
					(Dn = !!xc), (Gc = xc = null);
				} finally {
					(ul = e), (O.p = a), (g.T = u);
				}
			}
			(l.current = t), (Dl = 2);
		}
	}
	function vv() {
		if (Dl === 2) {
			Dl = 0;
			var l = eu,
				t = va,
				u = (t.flags & 8772) !== 0;
			if ((t.subtreeFlags & 8772) !== 0 || u) {
				(u = g.T), (g.T = null);
				var a = O.p;
				O.p = 2;
				var e = ul;
				ul |= 4;
				try {
					C0(l, t.alternate, t);
				} finally {
					(ul = e), (O.p = a), (g.T = u);
				}
			}
			Dl = 3;
		}
	}
	function dv() {
		if (Dl === 4 || Dl === 3) {
			(Dl = 0), Sd();
			var l = eu,
				t = va,
				u = da,
				a = I0;
			(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
				? (Dl = 5)
				: ((Dl = 0), (va = eu = null), ov(l, l.pendingLanes));
			var e = l.pendingLanes;
			if (
				(e === 0 && (au = null),
				Zn(u),
				(t = t.stateNode),
				wl && typeof wl.onCommitFiberRoot == "function")
			) {
				try {
					wl.onCommitFiberRoot(ba, t, void 0, (t.current.flags & 128) === 128);
				} catch {}
			}
			if (a !== null) {
				(t = g.T), (e = O.p), (O.p = 2), (g.T = null);
				try {
					for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
						var c = a[f];
						n(c.value, { componentStack: c.stack });
					}
				} finally {
					(g.T = t), (O.p = e);
				}
			}
			(da & 3) !== 0 && hn(),
				zt(l),
				(e = l.pendingLanes),
				(u & 4194090) !== 0 && (e & 42) !== 0
					? l === Ac
						? ae++
						: ((ae = 0), (Ac = l))
					: (ae = 0),
				ee(0);
		}
	}
	function ov(l, t) {
		(l.pooledCacheLanes &= t) === 0 &&
			((t = l.pooledCache), t != null && ((l.pooledCache = null), Ga(t)));
	}
	function hn(l) {
		return sv(), vv(), dv(), yv();
	}
	function yv() {
		if (Dl !== 5) {
			return !1;
		}
		var l = eu,
			t = Tc;
		Tc = 0;
		var u = Zn(da),
			a = g.T,
			e = O.p;
		try {
			(O.p = 32 > u ? 32 : u), (g.T = null), (u = Ec), (Ec = null);
			var n = eu,
				f = da;
			if (((Dl = 0), (va = eu = null), (da = 0), (ul & 6) !== 0)) {
				throw Error(d(331));
			}
			var c = ul;
			if (
				((ul |= 4),
				k0(n.current),
				w0(n, n.current, f, u),
				(ul = c),
				ee(0, !1),
				wl && typeof wl.onPostCommitFiberRoot == "function")
			) {
				try {
					wl.onPostCommitFiberRoot(ba, n);
				} catch {}
			}
			return !0;
		} finally {
			(O.p = e), (g.T = a), ov(l, t);
		}
	}
	function rv(l, t, u) {
		(t = et(u, t)),
			(t = lc(l.stateNode, t, 2)),
			(l = Wt(l, t, 2)),
			l !== null && (Ea(l, 2), zt(l));
	}
	function il(l, t, u) {
		if (l.tag === 3) {
			rv(l, l, u);
		} else {
			for (; t !== null; ) {
				if (t.tag === 3) {
					rv(t, l, u);
					break;
				} else if (t.tag === 1) {
					var a = t.stateNode;
					if (
						typeof t.type.getDerivedStateFromError == "function" ||
						(typeof a.componentDidCatch == "function" &&
							(au === null || !au.has(a)))
					) {
						(l = et(u, l)),
							(u = g0(2)),
							(a = Wt(t, u, 2)),
							a !== null && (b0(u, a, t, l), Ea(a, 2), zt(a));
						break;
					}
				}
				t = t.return;
			}
		}
	}
	function Mc(l, t, u) {
		var a = l.pingCache;
		if (a === null) {
			a = l.pingCache = new Ko();
			var e = new Set();
			a.set(t, e);
		} else {
			(e = a.get(t)), e === void 0 && ((e = new Set()), a.set(t, e));
		}
		e.has(u) ||
			((mc = !0), e.add(u), (l = ko.bind(null, l, t, u)), t.then(l, l));
	}
	function ko(l, t, u) {
		var a = l.pingCache;
		a !== null && a.delete(t),
			(l.pingedLanes |= l.suspendedLanes & u),
			(l.warmLanes &= ~u),
			sl === l &&
				(w & u) === u &&
				(rl === 4 || (rl === 3 && (w & 62914560) === w && 300 > gt() - bc)
					? (ul & 2) === 0 && oa(l, 0)
					: (Sc |= u),
				sa === w && (sa = 0)),
			zt(l);
	}
	function hv(l, t) {
		t === 0 && (t = di()), (l = Wu(l, t)), l !== null && (Ea(l, t), zt(l));
	}
	function Fo(l) {
		var t = l.memoizedState,
			u = 0;
		t !== null && (u = t.retryLane), hv(l, u);
	}
	function Io(l, t) {
		var u = 0;
		switch (l.tag) {
			case 13:
				var a = l.stateNode,
					e = l.memoizedState;
				e !== null && (u = e.retryLane);
				break;
			case 19:
				a = l.stateNode;
				break;
			case 22:
				a = l.stateNode._retryCache;
				break;
			default:
				throw Error(d(314));
		}
		a !== null && a.delete(t), hv(l, u);
	}
	function Po(l, t) {
		return jn(l, t);
	}
	var mn = null,
		ra = null,
		Dc = !1,
		Sn = !1,
		Uc = !1,
		Hu = 0;
	function zt(l) {
		l !== ra &&
			l.next === null &&
			(ra === null ? (mn = ra = l) : (ra = ra.next = l)),
			(Sn = !0),
			Dc || ((Dc = !0), ty());
	}
	function ee(l, t) {
		if (!Uc && Sn) {
			Uc = !0;
			do {
				for (var u = !1, a = mn; a !== null; ) {
					if (l !== 0) {
						var e = a.pendingLanes;
						if (e === 0) {
							var n = 0;
						} else {
							var f = a.suspendedLanes,
								c = a.pingedLanes;
							(n = (1 << (31 - Wl(42 | l) + 1)) - 1),
								(n &= e & ~(f & ~c)),
								(n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
						}
						n !== 0 && ((u = !0), bv(a, n));
					} else {
						(n = w),
							(n = Ae(
								a,
								a === sl ? n : 0,
								a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
							)),
							(n & 3) === 0 || Ta(a, n) || ((u = !0), bv(a, n));
					}
					a = a.next;
				}
			} while (u);
			Uc = !1;
		}
	}
	function ly() {
		mv();
	}
	function mv() {
		Sn = Dc = !1;
		var l = 0;
		Hu !== 0 && (sy() && (l = Hu), (Hu = 0));
		for (var t = gt(), u = null, a = mn; a !== null; ) {
			var e = a.next,
				n = Sv(a, t);
			n === 0
				? ((a.next = null),
					u === null ? (mn = e) : (u.next = e),
					e === null && (ra = u))
				: ((u = a), (l !== 0 || (n & 3) !== 0) && (Sn = !0)),
				(a = e);
		}
		ee(l);
	}
	function Sv(l, t) {
		for (
			var u = l.suspendedLanes,
				a = l.pingedLanes,
				e = l.expirationTimes,
				n = l.pendingLanes & -62914561;
			0 < n;

		) {
			var f = 31 - Wl(n),
				c = 1 << f,
				i = e[f];
			i === -1
				? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Od(c, t))
				: i <= t && (l.expiredLanes |= c),
				(n &= ~c);
		}
		if (
			((t = sl),
			(u = w),
			(u = Ae(
				l,
				l === t ? u : 0,
				l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
			)),
			(a = l.callbackNode),
			u === 0 ||
				(l === t && (al === 2 || al === 9)) ||
				l.cancelPendingCommit !== null)
		) {
			return (
				a !== null && a !== null && Xn(a),
				(l.callbackNode = null),
				(l.callbackPriority = 0)
			);
		}
		if ((u & 3) === 0 || Ta(l, u)) {
			if (((t = u & -u), t === l.callbackPriority)) {
				return t;
			}
			switch ((a !== null && Xn(a), Zn(u))) {
				case 2:
				case 8:
					u = ii;
					break;
				case 32:
					u = be;
					break;
				case 268435456:
					u = si;
					break;
				default:
					u = be;
			}
			return (
				(a = gv.bind(null, l)),
				(u = jn(u, a)),
				(l.callbackPriority = t),
				(l.callbackNode = u),
				t
			);
		}
		return (
			a !== null && a !== null && Xn(a),
			(l.callbackPriority = 2),
			(l.callbackNode = null),
			2
		);
	}
	function gv(l, t) {
		if (Dl !== 0 && Dl !== 5) {
			return (l.callbackNode = null), (l.callbackPriority = 0), null;
		}
		var u = l.callbackNode;
		if (hn() && l.callbackNode !== u) {
			return null;
		}
		var a = w;
		return (
			(a = Ae(
				l,
				l === sl ? a : 0,
				l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
			)),
			a === 0
				? null
				: (lv(l, a, t),
					Sv(l, gt()),
					l.callbackNode != null && l.callbackNode === u
						? gv.bind(null, l)
						: null)
		);
	}
	function bv(l, t) {
		if (hn()) {
			return null;
		}
		lv(l, t, !0);
	}
	function ty() {
		dy(function () {
			(ul & 6) !== 0 ? jn(ci, ly) : mv();
		});
	}
	function Rc() {
		return Hu === 0 && (Hu = vi()), Hu;
	}
	function Tv(l) {
		return l == null || typeof l == "symbol" || typeof l == "boolean"
			? null
			: typeof l == "function"
				? l
				: De("" + l);
	}
	function Ev(l, t) {
		var u = t.ownerDocument.createElement("input");
		return (
			(u.name = t.name),
			(u.value = t.value),
			l.id && u.setAttribute("form", l.id),
			t.parentNode.insertBefore(u, t),
			(l = new FormData(l)),
			u.parentNode.removeChild(u),
			l
		);
	}
	function uy(l, t, u, a, e) {
		if (t === "submit" && u && u.stateNode === e) {
			var n = Tv((e[jl] || null).action),
				f = a.submitter;
			f &&
				((t = (t = f[jl] || null)
					? Tv(t.formAction)
					: f.getAttribute("formAction")),
				t !== null && ((n = t), (f = null)));
			var c = new Ne("action", "action", null, a, e);
			l.push({
				event: c,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (a.defaultPrevented) {
								if (Hu !== 0) {
									var i = f ? Ev(e, f) : new FormData(e);
									$f(
										u,
										{ pending: !0, data: i, method: e.method, action: n },
										null,
										i,
									);
								}
							} else {
								typeof n == "function" &&
									(c.preventDefault(),
									(i = f ? Ev(e, f) : new FormData(e)),
									$f(
										u,
										{ pending: !0, data: i, method: e.method, action: n },
										n,
										i,
									));
							}
						},
						currentTarget: e,
					},
				],
			});
		}
	}
	for (var pc = 0; pc < rf.length; pc++) {
		var Nc = rf[pc],
			ay = Nc.toLowerCase(),
			ey = Nc[0].toUpperCase() + Nc.slice(1);
		yt(ay, "on" + ey);
	}
	yt(ls, "onAnimationEnd"),
		yt(ts, "onAnimationIteration"),
		yt(us, "onAnimationStart"),
		yt("dblclick", "onDoubleClick"),
		yt("focusin", "onFocus"),
		yt("focusout", "onBlur"),
		yt(Eo, "onTransitionRun"),
		yt(Ao, "onTransitionStart"),
		yt(zo, "onTransitionCancel"),
		yt(as, "onTransitionEnd"),
		ju("onMouseEnter", ["mouseout", "mouseover"]),
		ju("onMouseLeave", ["mouseout", "mouseover"]),
		ju("onPointerEnter", ["pointerout", "pointerover"]),
		ju("onPointerLeave", ["pointerout", "pointerover"]),
		mu(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" ",
			),
		),
		mu(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" ",
			),
		),
		mu("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
		mu(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(" "),
		),
		mu(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(" "),
		),
		mu(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
		);
	var ne =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" ",
			),
		ny = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(ne),
		);
	function Av(l, t) {
		t = (t & 4) !== 0;
		for (var u = 0; u < l.length; u++) {
			var a = l[u],
				e = a.event;
			a = a.listeners;
			l: {
				var n = void 0;
				if (t) {
					for (var f = a.length - 1; 0 <= f; f--) {
						var c = a[f],
							i = c.instance,
							r = c.currentTarget;
						if (((c = c.listener), i !== n && e.isPropagationStopped())) {
							break l;
						}
						(n = c), (e.currentTarget = r);
						try {
							n(e);
						} catch (S) {
							an(S);
						}
						(e.currentTarget = null), (n = i);
					}
				} else {
					for (f = 0; f < a.length; f++) {
						if (
							((c = a[f]),
							(i = c.instance),
							(r = c.currentTarget),
							(c = c.listener),
							i !== n && e.isPropagationStopped())
						) {
							break l;
						}
						(n = c), (e.currentTarget = r);
						try {
							n(e);
						} catch (S) {
							an(S);
						}
						(e.currentTarget = null), (n = i);
					}
				}
			}
		}
	}
	function K(l, t) {
		var u = t[Vn];
		u === void 0 && (u = t[Vn] = new Set());
		var a = l + "__bubble";
		u.has(a) || (zv(t, l, 2, !1), u.add(a));
	}
	function Hc(l, t, u) {
		var a = 0;
		t && (a |= 4), zv(u, l, a, t);
	}
	var gn = "_reactListening" + Math.random().toString(36).slice(2);
	function qc(l) {
		if (!l[gn]) {
			(l[gn] = !0),
				mi.forEach(function (u) {
					u !== "selectionchange" && (ny.has(u) || Hc(u, !1, l), Hc(u, !0, l));
				});
			var t = l.nodeType === 9 ? l : l.ownerDocument;
			t === null || t[gn] || ((t[gn] = !0), Hc("selectionchange", !1, t));
		}
	}
	function zv(l, t, u, a) {
		switch (wv(t)) {
			case 2:
				var e = Hy;
				break;
			case 8:
				e = qy;
				break;
			default:
				e = wc;
		}
		(u = e.bind(null, t, u, l)),
			(e = void 0),
			!lf ||
				(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
				(e = !0),
			a
				? e !== void 0
					? l.addEventListener(t, u, { capture: !0, passive: e })
					: l.addEventListener(t, u, !0)
				: e !== void 0
					? l.addEventListener(t, u, { passive: e })
					: l.addEventListener(t, u, !1);
	}
	function Yc(l, t, u, a, e) {
		var n = a;
		if ((t & 1) === 0 && (t & 2) === 0 && a !== null) {
			l: for (;;) {
				if (a === null) {
					return;
				}
				var f = a.tag;
				if (f === 3 || f === 4) {
					var c = a.stateNode.containerInfo;
					if (c === e) {
						break;
					}
					if (f === 4) {
						for (f = a.return; f !== null; ) {
							var i = f.tag;
							if ((i === 3 || i === 4) && f.stateNode.containerInfo === e) {
								return;
							}
							f = f.return;
						}
					}
					for (; c !== null; ) {
						if (((f = Bu(c)), f === null)) {
							return;
						}
						if (((i = f.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
							a = n = f;
							continue l;
						}
						c = c.parentNode;
					}
				}
				a = a.return;
			}
		}
		pi(function () {
			var r = n,
				S = In(u),
				T = [];
			l: {
				var h = es.get(l);
				if (h !== void 0) {
					var m = Ne,
						X = l;
					switch (l) {
						case "keypress":
							if (Re(u) === 0) {
								break l;
							}
						case "keydown":
						case "keyup":
							m = Id;
							break;
						case "focusin":
							(X = "focus"), (m = ef);
							break;
						case "focusout":
							(X = "blur"), (m = ef);
							break;
						case "beforeblur":
						case "afterblur":
							m = ef;
							break;
						case "click":
							if (u.button === 2) {
								break l;
							}
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							m = qi;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							m = Qd;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							m = to;
							break;
						case ls:
						case ts:
						case us:
							m = Vd;
							break;
						case as:
							m = ao;
							break;
						case "scroll":
						case "scrollend":
							m = jd;
							break;
						case "wheel":
							m = no;
							break;
						case "copy":
						case "cut":
						case "paste":
							m = Kd;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							m = Bi;
							break;
						case "toggle":
						case "beforetoggle":
							m = co;
					}
					var x = (t & 4) !== 0,
						fl = !x && (l === "scroll" || l === "scrollend"),
						o = x ? (h !== null ? h + "Capture" : null) : h;
					x = [];
					for (var v = r, y; v !== null; ) {
						var b = v;
						if (
							((y = b.stateNode),
							(b = b.tag),
							(b !== 5 && b !== 26 && b !== 27) ||
								y === null ||
								o === null ||
								((b = _a(v, o)), b != null && x.push(fe(v, b, y))),
							fl)
						) {
							break;
						}
						v = v.return;
					}
					0 < x.length &&
						((h = new m(h, X, null, u, S)), T.push({ event: h, listeners: x }));
				}
			}
			if ((t & 7) === 0) {
				l: {
					if (
						((h = l === "mouseover" || l === "pointerover"),
						(m = l === "mouseout" || l === "pointerout"),
						h &&
							u !== Fn &&
							(X = u.relatedTarget || u.fromElement) &&
							(Bu(X) || X[Yu]))
					) {
						break l;
					}
					if (
						(m || h) &&
						((h =
							S.window === S
								? S
								: (h = S.ownerDocument)
									? h.defaultView || h.parentWindow
									: window),
						m
							? ((X = u.relatedTarget || u.toElement),
								(m = r),
								(X = X ? Bu(X) : null),
								X !== null &&
									((fl = p(X)),
									(x = X.tag),
									X !== fl || (x !== 5 && x !== 27 && x !== 6)) &&
									(X = null))
							: ((m = null), (X = r)),
						m !== X)
					) {
						if (
							((x = qi),
							(b = "onMouseLeave"),
							(o = "onMouseEnter"),
							(v = "mouse"),
							(l === "pointerout" || l === "pointerover") &&
								((x = Bi),
								(b = "onPointerLeave"),
								(o = "onPointerEnter"),
								(v = "pointer")),
							(fl = m == null ? h : za(m)),
							(y = X == null ? h : za(X)),
							(h = new x(b, v + "leave", m, u, S)),
							(h.target = fl),
							(h.relatedTarget = y),
							(b = null),
							Bu(S) === r &&
								((x = new x(o, v + "enter", X, u, S)),
								(x.target = y),
								(x.relatedTarget = fl),
								(b = x)),
							(fl = b),
							m && X)
						) {
							t: {
								for (x = m, o = X, v = 0, y = x; y; y = ha(y)) {
									v++;
								}
								for (y = 0, b = o; b; b = ha(b)) {
									y++;
								}
								for (; 0 < v - y; ) {
									(x = ha(x)), v--;
								}
								for (; 0 < y - v; ) {
									(o = ha(o)), y--;
								}
								for (; v--; ) {
									if (x === o || (o !== null && x === o.alternate)) {
										break t;
									}
									(x = ha(x)), (o = ha(o));
								}
								x = null;
							}
						} else {
							x = null;
						}
						m !== null && _v(T, h, m, x, !1),
							X !== null && fl !== null && _v(T, fl, X, x, !0);
					}
				}
				l: {
					if (
						((h = r ? za(r) : window),
						(m = h.nodeName && h.nodeName.toLowerCase()),
						m === "select" || (m === "input" && h.type === "file"))
					) {
						var U = Vi;
					} else if (Ci(h)) {
						if (Li) {
							U = go;
						} else {
							U = mo;
							var V = ho;
						}
					} else {
						(m = h.nodeName),
							!m ||
							m.toLowerCase() !== "input" ||
							(h.type !== "checkbox" && h.type !== "radio")
								? r && kn(r.elementType) && (U = Vi)
								: (U = So);
					}
					if (U && (U = U(l, r))) {
						Zi(T, U, u, S);
						break l;
					}
					V && V(l, h, r),
						l === "focusout" &&
							r &&
							h.type === "number" &&
							r.memoizedProps.value != null &&
							$n(h, "number", h.value);
				}
				switch (((V = r ? za(r) : window), l)) {
					case "focusin":
						(Ci(V) || V.contentEditable === "true") &&
							((Ku = V), (df = r), (Ha = null));
						break;
					case "focusout":
						Ha = df = Ku = null;
						break;
					case "mousedown":
						of = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						(of = !1), Ii(T, u, S);
						break;
					case "selectionchange":
						if (To) {
							break;
						}
					case "keydown":
					case "keyup":
						Ii(T, u, S);
				}
				var Y;
				if (ff) {
					l: {
						switch (l) {
							case "compositionstart":
								var G = "onCompositionStart";
								break l;
							case "compositionend":
								G = "onCompositionEnd";
								break l;
							case "compositionupdate":
								G = "onCompositionUpdate";
								break l;
						}
						G = void 0;
					}
				} else {
					Lu
						? Xi(l, u) && (G = "onCompositionEnd")
						: l === "keydown" &&
							u.keyCode === 229 &&
							(G = "onCompositionStart");
				}
				G &&
					(xi &&
						u.locale !== "ko" &&
						(Lu || G !== "onCompositionStart"
							? G === "onCompositionEnd" && Lu && (Y = Ni())
							: ((Lt = S),
								(tf = "value" in Lt ? Lt.value : Lt.textContent),
								(Lu = !0))),
					(V = bn(r, G)),
					0 < V.length &&
						((G = new Yi(G, l, null, u, S)),
						T.push({ event: G, listeners: V }),
						Y ? (G.data = Y) : ((Y = Qi(u)), Y !== null && (G.data = Y)))),
					(Y = so ? vo(l, u) : oo(l, u)) &&
						((G = bn(r, "onBeforeInput")),
						0 < G.length &&
							((V = new Yi("onBeforeInput", "beforeinput", null, u, S)),
							T.push({ event: V, listeners: G }),
							(V.data = Y))),
					uy(T, l, r, u, S);
			}
			Av(T, t);
		});
	}
	function fe(l, t, u) {
		return { instance: l, listener: t, currentTarget: u };
	}
	function bn(l, t) {
		for (var u = t + "Capture", a = []; l !== null; ) {
			var e = l,
				n = e.stateNode;
			if (
				((e = e.tag),
				(e !== 5 && e !== 26 && e !== 27) ||
					n === null ||
					((e = _a(l, u)),
					e != null && a.unshift(fe(l, e, n)),
					(e = _a(l, t)),
					e != null && a.push(fe(l, e, n))),
				l.tag === 3)
			) {
				return a;
			}
			l = l.return;
		}
		return [];
	}
	function ha(l) {
		if (l === null) {
			return null;
		}
		do {
			l = l.return;
		} while (l && l.tag !== 5 && l.tag !== 27);
		return l || null;
	}
	function _v(l, t, u, a, e) {
		for (var n = t._reactName, f = []; u !== null && u !== a; ) {
			var c = u,
				i = c.alternate,
				r = c.stateNode;
			if (((c = c.tag), i !== null && i === a)) {
				break;
			}
			(c !== 5 && c !== 26 && c !== 27) ||
				r === null ||
				((i = r),
				e
					? ((r = _a(u, n)), r != null && f.unshift(fe(u, r, i)))
					: e || ((r = _a(u, n)), r != null && f.push(fe(u, r, i)))),
				(u = u.return);
		}
		f.length !== 0 && l.push({ event: t, listeners: f });
	}
	var fy = /\r\n?/g,
		cy = /\u0000|\uFFFD/g;
	function Ov(l) {
		return (typeof l == "string" ? l : "" + l)
			.replace(
				fy,
				`
`,
			)
			.replace(cy, "");
	}
	function Mv(l, t) {
		return (t = Ov(t)), Ov(l) === t;
	}
	function Tn() {}
	function nl(l, t, u, a, e, n) {
		switch (u) {
			case "children":
				typeof a == "string"
					? t === "body" || (t === "textarea" && a === "") || Cu(l, a)
					: (typeof a == "number" || typeof a == "bigint") &&
						t !== "body" &&
						Cu(l, "" + a);
				break;
			case "className":
				_e(l, "class", a);
				break;
			case "tabIndex":
				_e(l, "tabindex", a);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				_e(l, u, a);
				break;
			case "style":
				Ui(l, a, n);
				break;
			case "data":
				if (t !== "object") {
					_e(l, "data", a);
					break;
				}
			case "src":
			case "href":
				if (a === "" && (t !== "a" || u !== "href")) {
					l.removeAttribute(u);
					break;
				}
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "symbol" ||
					typeof a == "boolean"
				) {
					l.removeAttribute(u);
					break;
				}
				(a = De("" + a)), l.setAttribute(u, a);
				break;
			case "action":
			case "formAction":
				if (typeof a == "function") {
					l.setAttribute(
						u,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
					);
					break;
				} else {
					typeof n == "function" &&
						(u === "formAction"
							? (t !== "input" && nl(l, t, "name", e.name, e, null),
								nl(l, t, "formEncType", e.formEncType, e, null),
								nl(l, t, "formMethod", e.formMethod, e, null),
								nl(l, t, "formTarget", e.formTarget, e, null))
							: (nl(l, t, "encType", e.encType, e, null),
								nl(l, t, "method", e.method, e, null),
								nl(l, t, "target", e.target, e, null)));
				}
				if (a == null || typeof a == "symbol" || typeof a == "boolean") {
					l.removeAttribute(u);
					break;
				}
				(a = De("" + a)), l.setAttribute(u, a);
				break;
			case "onClick":
				a != null && (l.onclick = Tn);
				break;
			case "onScroll":
				a != null && K("scroll", l);
				break;
			case "onScrollEnd":
				a != null && K("scrollend", l);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) {
						throw Error(d(61));
					}
					if (((u = a.__html), u != null)) {
						if (e.children != null) {
							throw Error(d(60));
						}
						l.innerHTML = u;
					}
				}
				break;
			case "multiple":
				l.multiple = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "muted":
				l.muted = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "boolean" ||
					typeof a == "symbol"
				) {
					l.removeAttribute("xlink:href");
					break;
				}
				(u = De("" + a)),
					l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", u);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				a != null && typeof a != "function" && typeof a != "symbol"
					? l.setAttribute(u, "" + a)
					: l.removeAttribute(u);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				a && typeof a != "function" && typeof a != "symbol"
					? l.setAttribute(u, "")
					: l.removeAttribute(u);
				break;
			case "capture":
			case "download":
				a === !0
					? l.setAttribute(u, "")
					: a !== !1 &&
						  a != null &&
						  typeof a != "function" &&
						  typeof a != "symbol"
						? l.setAttribute(u, a)
						: l.removeAttribute(u);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				a != null &&
				typeof a != "function" &&
				typeof a != "symbol" &&
				!isNaN(a) &&
				1 <= a
					? l.setAttribute(u, a)
					: l.removeAttribute(u);
				break;
			case "rowSpan":
			case "start":
				a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
					? l.removeAttribute(u)
					: l.setAttribute(u, a);
				break;
			case "popover":
				K("beforetoggle", l), K("toggle", l), ze(l, "popover", a);
				break;
			case "xlinkActuate":
				Mt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
				break;
			case "xlinkArcrole":
				Mt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
				break;
			case "xlinkRole":
				Mt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
				break;
			case "xlinkShow":
				Mt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
				break;
			case "xlinkTitle":
				Mt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
				break;
			case "xlinkType":
				Mt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
				break;
			case "xmlBase":
				Mt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
				break;
			case "xmlLang":
				Mt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
				break;
			case "xmlSpace":
				Mt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
				break;
			case "is":
				ze(l, "is", a);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < u.length) ||
					(u[0] !== "o" && u[0] !== "O") ||
					(u[1] !== "n" && u[1] !== "N")) &&
					((u = xd.get(u) || u), ze(l, u, a));
		}
	}
	function Bc(l, t, u, a, e, n) {
		switch (u) {
			case "style":
				Ui(l, a, n);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) {
						throw Error(d(61));
					}
					if (((u = a.__html), u != null)) {
						if (e.children != null) {
							throw Error(d(60));
						}
						l.innerHTML = u;
					}
				}
				break;
			case "children":
				typeof a == "string"
					? Cu(l, a)
					: (typeof a == "number" || typeof a == "bigint") && Cu(l, "" + a);
				break;
			case "onScroll":
				a != null && K("scroll", l);
				break;
			case "onScrollEnd":
				a != null && K("scrollend", l);
				break;
			case "onClick":
				a != null && (l.onclick = Tn);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!Si.hasOwnProperty(u)) {
					l: {
						if (
							u[0] === "o" &&
							u[1] === "n" &&
							((e = u.endsWith("Capture")),
							(t = u.slice(2, e ? u.length - 7 : void 0)),
							(n = l[jl] || null),
							(n = n != null ? n[u] : null),
							typeof n == "function" && l.removeEventListener(t, n, e),
							typeof a == "function")
						) {
							typeof n != "function" &&
								n !== null &&
								(u in l
									? (l[u] = null)
									: l.hasAttribute(u) && l.removeAttribute(u)),
								l.addEventListener(t, a, e);
							break l;
						}
						u in l
							? (l[u] = a)
							: a === !0
								? l.setAttribute(u, "")
								: ze(l, u, a);
					}
				}
		}
	}
	function Ul(l, t, u) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				K("error", l), K("load", l);
				var a = !1,
					e = !1,
					n;
				for (n in u) {
					if (u.hasOwnProperty(n)) {
						var f = u[n];
						if (f != null) {
							switch (n) {
								case "src":
									a = !0;
									break;
								case "srcSet":
									e = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(d(137, t));
								default:
									nl(l, t, n, f, u, null);
							}
						}
					}
				}
				e && nl(l, t, "srcSet", u.srcSet, u, null),
					a && nl(l, t, "src", u.src, u, null);
				return;
			case "input":
				K("invalid", l);
				var c = (n = f = e = null),
					i = null,
					r = null;
				for (a in u) {
					if (u.hasOwnProperty(a)) {
						var S = u[a];
						if (S != null) {
							switch (a) {
								case "name":
									e = S;
									break;
								case "type":
									f = S;
									break;
								case "checked":
									i = S;
									break;
								case "defaultChecked":
									r = S;
									break;
								case "value":
									n = S;
									break;
								case "defaultValue":
									c = S;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (S != null) {
										throw Error(d(137, t));
									}
									break;
								default:
									nl(l, t, a, S, u, null);
							}
						}
					}
				}
				_i(l, n, c, i, r, f, e, !1), Oe(l);
				return;
			case "select":
				K("invalid", l), (a = f = n = null);
				for (e in u) {
					if (u.hasOwnProperty(e) && ((c = u[e]), c != null)) {
						switch (e) {
							case "value":
								n = c;
								break;
							case "defaultValue":
								f = c;
								break;
							case "multiple":
								a = c;
							default:
								nl(l, t, e, c, u, null);
						}
					}
				}
				(t = n),
					(u = f),
					(l.multiple = !!a),
					t != null ? Qu(l, !!a, t, !1) : u != null && Qu(l, !!a, u, !0);
				return;
			case "textarea":
				K("invalid", l), (n = e = a = null);
				for (f in u) {
					if (u.hasOwnProperty(f) && ((c = u[f]), c != null)) {
						switch (f) {
							case "value":
								a = c;
								break;
							case "defaultValue":
								e = c;
								break;
							case "children":
								n = c;
								break;
							case "dangerouslySetInnerHTML":
								if (c != null) {
									throw Error(d(91));
								}
								break;
							default:
								nl(l, t, f, c, u, null);
						}
					}
				}
				Mi(l, a, e, n), Oe(l);
				return;
			case "option":
				for (i in u) {
					if (u.hasOwnProperty(i) && ((a = u[i]), a != null)) {
						switch (i) {
							case "selected":
								l.selected =
									a && typeof a != "function" && typeof a != "symbol";
								break;
							default:
								nl(l, t, i, a, u, null);
						}
					}
				}
				return;
			case "dialog":
				K("beforetoggle", l), K("toggle", l), K("cancel", l), K("close", l);
				break;
			case "iframe":
			case "object":
				K("load", l);
				break;
			case "video":
			case "audio":
				for (a = 0; a < ne.length; a++) {
					K(ne[a], l);
				}
				break;
			case "image":
				K("error", l), K("load", l);
				break;
			case "details":
				K("toggle", l);
				break;
			case "embed":
			case "source":
			case "link":
				K("error", l), K("load", l);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (r in u) {
					if (u.hasOwnProperty(r) && ((a = u[r]), a != null)) {
						switch (r) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(d(137, t));
							default:
								nl(l, t, r, a, u, null);
						}
					}
				}
				return;
			default:
				if (kn(t)) {
					for (S in u) {
						u.hasOwnProperty(S) &&
							((a = u[S]), a !== void 0 && Bc(l, t, S, a, u, void 0));
					}
					return;
				}
		}
		for (c in u) {
			u.hasOwnProperty(c) && ((a = u[c]), a != null && nl(l, t, c, a, u, null));
		}
	}
	function iy(l, t, u, a) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var e = null,
					n = null,
					f = null,
					c = null,
					i = null,
					r = null,
					S = null;
				for (m in u) {
					var T = u[m];
					if (u.hasOwnProperty(m) && T != null) {
						switch (m) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								i = T;
							default:
								a.hasOwnProperty(m) || nl(l, t, m, null, a, T);
						}
					}
				}
				for (var h in a) {
					var m = a[h];
					if (((T = u[h]), a.hasOwnProperty(h) && (m != null || T != null))) {
						switch (h) {
							case "type":
								n = m;
								break;
							case "name":
								e = m;
								break;
							case "checked":
								r = m;
								break;
							case "defaultChecked":
								S = m;
								break;
							case "value":
								f = m;
								break;
							case "defaultValue":
								c = m;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (m != null) {
									throw Error(d(137, t));
								}
								break;
							default:
								m !== T && nl(l, t, h, m, a, T);
						}
					}
				}
				Wn(l, f, c, i, r, S, n, e);
				return;
			case "select":
				m = f = c = h = null;
				for (n in u) {
					if (((i = u[n]), u.hasOwnProperty(n) && i != null)) {
						switch (n) {
							case "value":
								break;
							case "multiple":
								m = i;
							default:
								a.hasOwnProperty(n) || nl(l, t, n, null, a, i);
						}
					}
				}
				for (e in a) {
					if (
						((n = a[e]),
						(i = u[e]),
						a.hasOwnProperty(e) && (n != null || i != null))
					) {
						switch (e) {
							case "value":
								h = n;
								break;
							case "defaultValue":
								c = n;
								break;
							case "multiple":
								f = n;
							default:
								n !== i && nl(l, t, e, n, a, i);
						}
					}
				}
				(t = c),
					(u = f),
					(a = m),
					h != null
						? Qu(l, !!u, h, !1)
						: !!a != !!u &&
							(t != null ? Qu(l, !!u, t, !0) : Qu(l, !!u, u ? [] : "", !1));
				return;
			case "textarea":
				m = h = null;
				for (c in u) {
					if (
						((e = u[c]),
						u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
					) {
						switch (c) {
							case "value":
								break;
							case "children":
								break;
							default:
								nl(l, t, c, null, a, e);
						}
					}
				}
				for (f in a) {
					if (
						((e = a[f]),
						(n = u[f]),
						a.hasOwnProperty(f) && (e != null || n != null))
					) {
						switch (f) {
							case "value":
								h = e;
								break;
							case "defaultValue":
								m = e;
								break;
							case "children":
								break;
							case "dangerouslySetInnerHTML":
								if (e != null) {
									throw Error(d(91));
								}
								break;
							default:
								e !== n && nl(l, t, f, e, a, n);
						}
					}
				}
				Oi(l, h, m);
				return;
			case "option":
				for (var X in u) {
					if (
						((h = u[X]),
						u.hasOwnProperty(X) && h != null && !a.hasOwnProperty(X))
					) {
						switch (X) {
							case "selected":
								l.selected = !1;
								break;
							default:
								nl(l, t, X, null, a, h);
						}
					}
				}
				for (i in a) {
					if (
						((h = a[i]),
						(m = u[i]),
						a.hasOwnProperty(i) && h !== m && (h != null || m != null))
					) {
						switch (i) {
							case "selected":
								l.selected =
									h && typeof h != "function" && typeof h != "symbol";
								break;
							default:
								nl(l, t, i, h, a, m);
						}
					}
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var x in u) {
					(h = u[x]),
						u.hasOwnProperty(x) &&
							h != null &&
							!a.hasOwnProperty(x) &&
							nl(l, t, x, null, a, h);
				}
				for (r in a) {
					if (
						((h = a[r]),
						(m = u[r]),
						a.hasOwnProperty(r) && h !== m && (h != null || m != null))
					) {
						switch (r) {
							case "children":
							case "dangerouslySetInnerHTML":
								if (h != null) {
									throw Error(d(137, t));
								}
								break;
							default:
								nl(l, t, r, h, a, m);
						}
					}
				}
				return;
			default:
				if (kn(t)) {
					for (var fl in u) {
						(h = u[fl]),
							u.hasOwnProperty(fl) &&
								h !== void 0 &&
								!a.hasOwnProperty(fl) &&
								Bc(l, t, fl, void 0, a, h);
					}
					for (S in a) {
						(h = a[S]),
							(m = u[S]),
							!a.hasOwnProperty(S) ||
								h === m ||
								(h === void 0 && m === void 0) ||
								Bc(l, t, S, h, a, m);
					}
					return;
				}
		}
		for (var o in u) {
			(h = u[o]),
				u.hasOwnProperty(o) &&
					h != null &&
					!a.hasOwnProperty(o) &&
					nl(l, t, o, null, a, h);
		}
		for (T in a) {
			(h = a[T]),
				(m = u[T]),
				!a.hasOwnProperty(T) ||
					h === m ||
					(h == null && m == null) ||
					nl(l, t, T, h, a, m);
		}
	}
	var xc = null,
		Gc = null;
	function En(l) {
		return l.nodeType === 9 ? l : l.ownerDocument;
	}
	function Dv(l) {
		switch (l) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function Uv(l, t) {
		if (l === 0) {
			switch (t) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		}
		return l === 1 && t === "foreignObject" ? 0 : l;
	}
	function jc(l, t) {
		return (
			l === "textarea" ||
			l === "noscript" ||
			typeof t.children == "string" ||
			typeof t.children == "number" ||
			typeof t.children == "bigint" ||
			(typeof t.dangerouslySetInnerHTML == "object" &&
				t.dangerouslySetInnerHTML !== null &&
				t.dangerouslySetInnerHTML.__html != null)
		);
	}
	var Xc = null;
	function sy() {
		var l = window.event;
		return l && l.type === "popstate"
			? l === Xc
				? !1
				: ((Xc = l), !0)
			: ((Xc = null), !1);
	}
	var Rv = typeof setTimeout == "function" ? setTimeout : void 0,
		vy = typeof clearTimeout == "function" ? clearTimeout : void 0,
		pv = typeof Promise == "function" ? Promise : void 0,
		dy =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof pv < "u"
					? function (l) {
							return pv.resolve(null).then(l).catch(oy);
						}
					: Rv;
	function oy(l) {
		setTimeout(function () {
			throw l;
		});
	}
	function fu(l) {
		return l === "head";
	}
	function Nv(l, t) {
		var u = t,
			a = 0,
			e = 0;
		do {
			var n = u.nextSibling;
			if ((l.removeChild(u), n && n.nodeType === 8)) {
				if (((u = n.data), u === "/$")) {
					if (0 < a && 8 > a) {
						u = a;
						var f = l.ownerDocument;
						if ((u & 1 && ce(f.documentElement), u & 2 && ce(f.body), u & 4)) {
							for (u = f.head, ce(u), f = u.firstChild; f; ) {
								var c = f.nextSibling,
									i = f.nodeName;
								f[Aa] ||
									i === "SCRIPT" ||
									i === "STYLE" ||
									(i === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
									u.removeChild(f),
									(f = c);
							}
						}
					}
					if (e === 0) {
						l.removeChild(n), he(t);
						return;
					}
					e--;
				} else {
					u === "$" || u === "$?" || u === "$!"
						? e++
						: (a = u.charCodeAt(0) - 48);
				}
			} else {
				a = 0;
			}
			u = n;
		} while (u);
		he(t);
	}
	function Qc(l) {
		var t = l.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
			var u = t;
			switch (((t = t.nextSibling), u.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					Qc(u), Ln(u);
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (u.rel.toLowerCase() === "stylesheet") {
						continue;
					}
			}
			l.removeChild(u);
		}
	}
	function yy(l, t, u, a) {
		for (; l.nodeType === 1; ) {
			var e = u;
			if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) {
					break;
				}
			} else if (a) {
				if (!l[Aa]) {
					switch (t) {
						case "meta":
							if (!l.hasAttribute("itemprop")) {
								break;
							}
							return l;
						case "link":
							if (
								((n = l.getAttribute("rel")),
								n === "stylesheet" && l.hasAttribute("data-precedence"))
							) {
								break;
							}
							if (
								n !== e.rel ||
								l.getAttribute("href") !==
									(e.href == null || e.href === "" ? null : e.href) ||
								l.getAttribute("crossorigin") !==
									(e.crossOrigin == null ? null : e.crossOrigin) ||
								l.getAttribute("title") !== (e.title == null ? null : e.title)
							) {
								break;
							}
							return l;
						case "style":
							if (l.hasAttribute("data-precedence")) {
								break;
							}
							return l;
						case "script":
							if (
								((n = l.getAttribute("src")),
								(n !== (e.src == null ? null : e.src) ||
									l.getAttribute("type") !== (e.type == null ? null : e.type) ||
									l.getAttribute("crossorigin") !==
										(e.crossOrigin == null ? null : e.crossOrigin)) &&
									n &&
									l.hasAttribute("async") &&
									!l.hasAttribute("itemprop"))
							) {
								break;
							}
							return l;
						default:
							return l;
					}
				}
			} else if (t === "input" && l.type === "hidden") {
				var n = e.name == null ? null : "" + e.name;
				if (e.type === "hidden" && l.getAttribute("name") === n) {
					return l;
				}
			} else {
				return l;
			}
			if (((l = ht(l.nextSibling)), l === null)) {
				break;
			}
		}
		return null;
	}
	function ry(l, t, u) {
		if (t === "") {
			return null;
		}
		for (; l.nodeType !== 3; ) {
			if (
				((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
					!u) ||
				((l = ht(l.nextSibling)), l === null)
			) {
				return null;
			}
		}
		return l;
	}
	function Cc(l) {
		return (
			l.data === "$!" ||
			(l.data === "$?" && l.ownerDocument.readyState === "complete")
		);
	}
	function hy(l, t) {
		var u = l.ownerDocument;
		if (l.data !== "$?" || u.readyState === "complete") {
			t();
		} else {
			var a = function () {
				t(), u.removeEventListener("DOMContentLoaded", a);
			};
			u.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
		}
	}
	function ht(l) {
		for (; l != null; l = l.nextSibling) {
			var t = l.nodeType;
			if (t === 1 || t === 3) {
				break;
			}
			if (t === 8) {
				if (
					((t = l.data),
					t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
				) {
					break;
				}
				if (t === "/$") {
					return null;
				}
			}
		}
		return l;
	}
	var Zc = null;
	function Hv(l) {
		l = l.previousSibling;
		for (var t = 0; l; ) {
			if (l.nodeType === 8) {
				var u = l.data;
				if (u === "$" || u === "$!" || u === "$?") {
					if (t === 0) {
						return l;
					}
					t--;
				} else {
					u === "/$" && t++;
				}
			}
			l = l.previousSibling;
		}
		return null;
	}
	function qv(l, t, u) {
		switch (((t = En(u)), l)) {
			case "html":
				if (((l = t.documentElement), !l)) {
					throw Error(d(452));
				}
				return l;
			case "head":
				if (((l = t.head), !l)) {
					throw Error(d(453));
				}
				return l;
			case "body":
				if (((l = t.body), !l)) {
					throw Error(d(454));
				}
				return l;
			default:
				throw Error(d(451));
		}
	}
	function ce(l) {
		for (var t = l.attributes; t.length; ) {
			l.removeAttributeNode(t[0]);
		}
		Ln(l);
	}
	var vt = new Map(),
		Yv = new Set();
	function An(l) {
		return typeof l.getRootNode == "function"
			? l.getRootNode()
			: l.nodeType === 9
				? l
				: l.ownerDocument;
	}
	var Qt = O.d;
	O.d = { f: my, r: Sy, D: gy, C: by, L: Ty, m: Ey, X: zy, S: Ay, M: _y };
	function my() {
		var l = Qt.f(),
			t = yn();
		return l || t;
	}
	function Sy(l) {
		var t = xu(l);
		t !== null && t.tag === 5 && t.type === "form" ? l0(t) : Qt.r(l);
	}
	var ma = typeof document > "u" ? null : document;
	function Bv(l, t, u) {
		var a = ma;
		if (a && typeof t == "string" && t) {
			var e = at(t);
			(e = 'link[rel="' + l + '"][href="' + e + '"]'),
				typeof u == "string" && (e += '[crossorigin="' + u + '"]'),
				Yv.has(e) ||
					(Yv.add(e),
					(l = { rel: l, crossOrigin: u, href: t }),
					a.querySelector(e) === null &&
						((t = a.createElement("link")),
						Ul(t, "link", l),
						El(t),
						a.head.appendChild(t)));
		}
	}
	function gy(l) {
		Qt.D(l), Bv("dns-prefetch", l, null);
	}
	function by(l, t) {
		Qt.C(l, t), Bv("preconnect", l, t);
	}
	function Ty(l, t, u) {
		Qt.L(l, t, u);
		var a = ma;
		if (a && l && t) {
			var e = 'link[rel="preload"][as="' + at(t) + '"]';
			t === "image" && u && u.imageSrcSet
				? ((e += '[imagesrcset="' + at(u.imageSrcSet) + '"]'),
					typeof u.imageSizes == "string" &&
						(e += '[imagesizes="' + at(u.imageSizes) + '"]'))
				: (e += '[href="' + at(l) + '"]');
			var n = e;
			switch (t) {
				case "style":
					n = Sa(l);
					break;
				case "script":
					n = ga(l);
			}
			vt.has(n) ||
				((l = N(
					{
						rel: "preload",
						href: t === "image" && u && u.imageSrcSet ? void 0 : l,
						as: t,
					},
					u,
				)),
				vt.set(n, l),
				a.querySelector(e) !== null ||
					(t === "style" && a.querySelector(ie(n))) ||
					(t === "script" && a.querySelector(se(n))) ||
					((t = a.createElement("link")),
					Ul(t, "link", l),
					El(t),
					a.head.appendChild(t)));
		}
	}
	function Ey(l, t) {
		Qt.m(l, t);
		var u = ma;
		if (u && l) {
			var a = t && typeof t.as == "string" ? t.as : "script",
				e =
					'link[rel="modulepreload"][as="' + at(a) + '"][href="' + at(l) + '"]',
				n = e;
			switch (a) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					n = ga(l);
			}
			if (
				!vt.has(n) &&
				((l = N({ rel: "modulepreload", href: l }, t)),
				vt.set(n, l),
				u.querySelector(e) === null)
			) {
				switch (a) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (u.querySelector(se(n))) {
							return;
						}
				}
				(a = u.createElement("link")),
					Ul(a, "link", l),
					El(a),
					u.head.appendChild(a);
			}
		}
	}
	function Ay(l, t, u) {
		Qt.S(l, t, u);
		var a = ma;
		if (a && l) {
			var e = Gu(a).hoistableStyles,
				n = Sa(l);
			t = t || "default";
			var f = e.get(n);
			if (!f) {
				var c = { loading: 0, preload: null };
				if ((f = a.querySelector(ie(n)))) {
					c.loading = 5;
				} else {
					(l = N({ rel: "stylesheet", href: l, "data-precedence": t }, u)),
						(u = vt.get(n)) && Vc(l, u);
					var i = (f = a.createElement("link"));
					El(i),
						Ul(i, "link", l),
						(i._p = new Promise(function (r, S) {
							(i.onload = r), (i.onerror = S);
						})),
						i.addEventListener("load", function () {
							c.loading |= 1;
						}),
						i.addEventListener("error", function () {
							c.loading |= 2;
						}),
						(c.loading |= 4),
						zn(f, t, a);
				}
				(f = { type: "stylesheet", instance: f, count: 1, state: c }),
					e.set(n, f);
			}
		}
	}
	function zy(l, t) {
		Qt.X(l, t);
		var u = ma;
		if (u && l) {
			var a = Gu(u).hoistableScripts,
				e = ga(l),
				n = a.get(e);
			n ||
				((n = u.querySelector(se(e))),
				n ||
					((l = N({ src: l, async: !0 }, t)),
					(t = vt.get(e)) && Lc(l, t),
					(n = u.createElement("script")),
					El(n),
					Ul(n, "link", l),
					u.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(e, n));
		}
	}
	function _y(l, t) {
		Qt.M(l, t);
		var u = ma;
		if (u && l) {
			var a = Gu(u).hoistableScripts,
				e = ga(l),
				n = a.get(e);
			n ||
				((n = u.querySelector(se(e))),
				n ||
					((l = N({ src: l, async: !0, type: "module" }, t)),
					(t = vt.get(e)) && Lc(l, t),
					(n = u.createElement("script")),
					El(n),
					Ul(n, "link", l),
					u.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(e, n));
		}
	}
	function xv(l, t, u, a) {
		var e = (e = Q.current) ? An(e) : null;
		if (!e) {
			throw Error(d(446));
		}
		switch (l) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof u.precedence == "string" && typeof u.href == "string"
					? ((t = Sa(u.href)),
						(u = Gu(e).hoistableStyles),
						(a = u.get(t)),
						a ||
							((a = { type: "style", instance: null, count: 0, state: null }),
							u.set(t, a)),
						a)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					u.rel === "stylesheet" &&
					typeof u.href == "string" &&
					typeof u.precedence == "string"
				) {
					l = Sa(u.href);
					var n = Gu(e).hoistableStyles,
						f = n.get(l);
					if (
						(f ||
							((e = e.ownerDocument || e),
							(f = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							n.set(l, f),
							(n = e.querySelector(ie(l))) &&
								!n._p &&
								((f.instance = n), (f.state.loading = 5)),
							vt.has(l) ||
								((u = {
									rel: "preload",
									as: "style",
									href: u.href,
									crossOrigin: u.crossOrigin,
									integrity: u.integrity,
									media: u.media,
									hrefLang: u.hrefLang,
									referrerPolicy: u.referrerPolicy,
								}),
								vt.set(l, u),
								n || Oy(e, l, u, f.state))),
						t && a === null)
					) {
						throw Error(d(528, ""));
					}
					return f;
				}
				if (t && a !== null) {
					throw Error(d(529, ""));
				}
				return null;
			case "script":
				return (
					(t = u.async),
					(u = u.src),
					typeof u == "string" &&
					t &&
					typeof t != "function" &&
					typeof t != "symbol"
						? ((t = ga(u)),
							(u = Gu(e).hoistableScripts),
							(a = u.get(t)),
							a ||
								((a = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								u.set(t, a)),
							a)
						: { type: "void", instance: null, count: 0, state: null }
				);
			default:
				throw Error(d(444, l));
		}
	}
	function Sa(l) {
		return 'href="' + at(l) + '"';
	}
	function ie(l) {
		return 'link[rel="stylesheet"][' + l + "]";
	}
	function Gv(l) {
		return N({}, l, { "data-precedence": l.precedence, precedence: null });
	}
	function Oy(l, t, u, a) {
		l.querySelector('link[rel="preload"][as="style"][' + t + "]")
			? (a.loading = 1)
			: ((t = l.createElement("link")),
				(a.preload = t),
				t.addEventListener("load", function () {
					return (a.loading |= 1);
				}),
				t.addEventListener("error", function () {
					return (a.loading |= 2);
				}),
				Ul(t, "link", u),
				El(t),
				l.head.appendChild(t));
	}
	function ga(l) {
		return '[src="' + at(l) + '"]';
	}
	function se(l) {
		return "script[async]" + l;
	}
	function jv(l, t, u) {
		if ((t.count++, t.instance === null)) {
			switch (t.type) {
				case "style":
					var a = l.querySelector('style[data-href~="' + at(u.href) + '"]');
					if (a) {
						return (t.instance = a), El(a), a;
					}
					var e = N({}, u, {
						"data-href": u.href,
						"data-precedence": u.precedence,
						href: null,
						precedence: null,
					});
					return (
						(a = (l.ownerDocument || l).createElement("style")),
						El(a),
						Ul(a, "style", e),
						zn(a, u.precedence, l),
						(t.instance = a)
					);
				case "stylesheet":
					e = Sa(u.href);
					var n = l.querySelector(ie(e));
					if (n) {
						return (t.state.loading |= 4), (t.instance = n), El(n), n;
					}
					(a = Gv(u)),
						(e = vt.get(e)) && Vc(a, e),
						(n = (l.ownerDocument || l).createElement("link")),
						El(n);
					var f = n;
					return (
						(f._p = new Promise(function (c, i) {
							(f.onload = c), (f.onerror = i);
						})),
						Ul(n, "link", a),
						(t.state.loading |= 4),
						zn(n, u.precedence, l),
						(t.instance = n)
					);
				case "script":
					return (
						(n = ga(u.src)),
						(e = l.querySelector(se(n)))
							? ((t.instance = e), El(e), e)
							: ((a = u),
								(e = vt.get(n)) && ((a = N({}, u)), Lc(a, e)),
								(l = l.ownerDocument || l),
								(e = l.createElement("script")),
								El(e),
								Ul(e, "link", a),
								l.head.appendChild(e),
								(t.instance = e))
					);
				case "void":
					return null;
				default:
					throw Error(d(443, t.type));
			}
		} else {
			t.type === "stylesheet" &&
				(t.state.loading & 4) === 0 &&
				((a = t.instance), (t.state.loading |= 4), zn(a, u.precedence, l));
		}
		return t.instance;
	}
	function zn(l, t, u) {
		for (
			var a = u.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]',
				),
				e = a.length ? a[a.length - 1] : null,
				n = e,
				f = 0;
			f < a.length;
			f++
		) {
			var c = a[f];
			if (c.dataset.precedence === t) {
				n = c;
			} else if (n !== e) {
				break;
			}
		}
		n
			? n.parentNode.insertBefore(l, n.nextSibling)
			: ((t = u.nodeType === 9 ? u.head : u), t.insertBefore(l, t.firstChild));
	}
	function Vc(l, t) {
		l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
			l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
			l.title == null && (l.title = t.title);
	}
	function Lc(l, t) {
		l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
			l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
			l.integrity == null && (l.integrity = t.integrity);
	}
	var _n = null;
	function Xv(l, t, u) {
		if (_n === null) {
			var a = new Map(),
				e = (_n = new Map());
			e.set(u, a);
		} else {
			(e = _n), (a = e.get(u)), a || ((a = new Map()), e.set(u, a));
		}
		if (a.has(l)) {
			return a;
		}
		for (
			a.set(l, null), u = u.getElementsByTagName(l), e = 0;
			e < u.length;
			e++
		) {
			var n = u[e];
			if (
				!(
					n[Aa] ||
					n[Hl] ||
					(l === "link" && n.getAttribute("rel") === "stylesheet")
				) &&
				n.namespaceURI !== "http://www.w3.org/2000/svg"
			) {
				var f = n.getAttribute(t) || "";
				f = l + f;
				var c = a.get(f);
				c ? c.push(n) : a.set(f, [n]);
			}
		}
		return a;
	}
	function Qv(l, t, u) {
		(l = l.ownerDocument || l),
			l.head.insertBefore(
				u,
				t === "title" ? l.querySelector("head > title") : null,
			);
	}
	function My(l, t, u) {
		if (u === 1 || t.itemProp != null) {
			return !1;
		}
		switch (l) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (
					typeof t.precedence != "string" ||
					typeof t.href != "string" ||
					t.href === ""
				) {
					break;
				}
				return !0;
			case "link":
				if (
					typeof t.rel != "string" ||
					typeof t.href != "string" ||
					t.href === "" ||
					t.onLoad ||
					t.onError
				) {
					break;
				}
				switch (t.rel) {
					case "stylesheet":
						return (
							(l = t.disabled), typeof t.precedence == "string" && l == null
						);
					default:
						return !0;
				}
			case "script":
				if (
					t.async &&
					typeof t.async != "function" &&
					typeof t.async != "symbol" &&
					!t.onLoad &&
					!t.onError &&
					t.src &&
					typeof t.src == "string"
				) {
					return !0;
				}
		}
		return !1;
	}
	function Cv(l) {
		return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
	}
	var ve = null;
	function Dy() {}
	function Uy(l, t, u) {
		if (ve === null) {
			throw Error(d(475));
		}
		var a = ve;
		if (
			t.type === "stylesheet" &&
			(typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
			(t.state.loading & 4) === 0
		) {
			if (t.instance === null) {
				var e = Sa(u.href),
					n = l.querySelector(ie(e));
				if (n) {
					(l = n._p),
						l !== null &&
							typeof l == "object" &&
							typeof l.then == "function" &&
							(a.count++, (a = On.bind(a)), l.then(a, a)),
						(t.state.loading |= 4),
						(t.instance = n),
						El(n);
					return;
				}
				(n = l.ownerDocument || l),
					(u = Gv(u)),
					(e = vt.get(e)) && Vc(u, e),
					(n = n.createElement("link")),
					El(n);
				var f = n;
				(f._p = new Promise(function (c, i) {
					(f.onload = c), (f.onerror = i);
				})),
					Ul(n, "link", u),
					(t.instance = n);
			}
			a.stylesheets === null && (a.stylesheets = new Map()),
				a.stylesheets.set(t, l),
				(l = t.state.preload) &&
					(t.state.loading & 3) === 0 &&
					(a.count++,
					(t = On.bind(a)),
					l.addEventListener("load", t),
					l.addEventListener("error", t));
		}
	}
	function Ry() {
		if (ve === null) {
			throw Error(d(475));
		}
		var l = ve;
		return (
			l.stylesheets && l.count === 0 && Kc(l, l.stylesheets),
			0 < l.count
				? function (t) {
						var u = setTimeout(function () {
							if ((l.stylesheets && Kc(l, l.stylesheets), l.unsuspend)) {
								var a = l.unsuspend;
								(l.unsuspend = null), a();
							}
						}, 6e4);
						return (
							(l.unsuspend = t),
							function () {
								(l.unsuspend = null), clearTimeout(u);
							}
						);
					}
				: null
		);
	}
	function On() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) {
				Kc(this, this.stylesheets);
			} else if (this.unsuspend) {
				var l = this.unsuspend;
				(this.unsuspend = null), l();
			}
		}
	}
	var Mn = null;
	function Kc(l, t) {
		(l.stylesheets = null),
			l.unsuspend !== null &&
				(l.count++,
				(Mn = new Map()),
				t.forEach(py, l),
				(Mn = null),
				On.call(l));
	}
	function py(l, t) {
		if (!(t.state.loading & 4)) {
			var u = Mn.get(l);
			if (u) {
				var a = u.get(null);
			} else {
				(u = new Map()), Mn.set(l, u);
				for (
					var e = l.querySelectorAll(
							"link[data-precedence],style[data-precedence]",
						),
						n = 0;
					n < e.length;
					n++
				) {
					var f = e[n];
					(f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
						(u.set(f.dataset.precedence, f), (a = f));
				}
				a && u.set(null, a);
			}
			(e = t.instance),
				(f = e.getAttribute("data-precedence")),
				(n = u.get(f) || a),
				n === a && u.set(null, e),
				u.set(f, e),
				this.count++,
				(a = On.bind(this)),
				e.addEventListener("load", a),
				e.addEventListener("error", a),
				n
					? n.parentNode.insertBefore(e, n.nextSibling)
					: ((l = l.nodeType === 9 ? l.head : l),
						l.insertBefore(e, l.firstChild)),
				(t.state.loading |= 4);
		}
	}
	var de = {
		$$typeof: Rl,
		Provider: null,
		Consumer: null,
		_currentValue: j,
		_currentValue2: j,
		_threadCount: 0,
	};
	function Ny(l, t, u, a, e, n, f, c) {
		(this.tag = 1),
			(this.containerInfo = l),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = Qn(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = Qn(0)),
			(this.hiddenUpdates = Qn(null)),
			(this.identifierPrefix = a),
			(this.onUncaughtError = e),
			(this.onCaughtError = n),
			(this.onRecoverableError = f),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = c),
			(this.incompleteTransitions = new Map());
	}
	function Zv(l, t, u, a, e, n, f, c, i, r, S, T) {
		return (
			(l = new Ny(l, t, u, f, c, i, r, T)),
			(t = 1),
			n === !0 && (t |= 24),
			(n = kl(3, null, null, t)),
			(l.current = n),
			(n.stateNode = l),
			(t = Mf()),
			t.refCount++,
			(l.pooledCache = t),
			t.refCount++,
			(n.memoizedState = { element: a, isDehydrated: u, cache: t }),
			pf(n),
			l
		);
	}
	function Vv(l) {
		return l ? ((l = $u), l) : $u;
	}
	function Lv(l, t, u, a, e, n) {
		(e = Vv(e)),
			a.context === null ? (a.context = e) : (a.pendingContext = e),
			(a = wt(t)),
			(a.payload = { element: u }),
			(n = n === void 0 ? null : n),
			n !== null && (a.callback = n),
			(u = Wt(l, a, t)),
			u !== null && (tt(u, l, t), Ca(u, l, t));
	}
	function Kv(l, t) {
		if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
			var u = l.retryLane;
			l.retryLane = u !== 0 && u < t ? u : t;
		}
	}
	function Jc(l, t) {
		Kv(l, t), (l = l.alternate) && Kv(l, t);
	}
	function Jv(l) {
		if (l.tag === 13) {
			var t = Wu(l, 67108864);
			t !== null && tt(t, l, 67108864), Jc(l, 67108864);
		}
	}
	var Dn = !0;
	function Hy(l, t, u, a) {
		var e = g.T;
		g.T = null;
		var n = O.p;
		try {
			(O.p = 2), wc(l, t, u, a);
		} finally {
			(O.p = n), (g.T = e);
		}
	}
	function qy(l, t, u, a) {
		var e = g.T;
		g.T = null;
		var n = O.p;
		try {
			(O.p = 8), wc(l, t, u, a);
		} finally {
			(O.p = n), (g.T = e);
		}
	}
	function wc(l, t, u, a) {
		if (Dn) {
			var e = Wc(a);
			if (e === null) {
				Yc(l, t, a, Un, u), Wv(l, a);
			} else if (By(e, l, t, u, a)) {
				a.stopPropagation();
			} else if ((Wv(l, a), t & 4 && -1 < Yy.indexOf(l))) {
				for (; e !== null; ) {
					var n = xu(e);
					if (n !== null) {
						switch (n.tag) {
							case 3:
								if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
									var f = hu(n.pendingLanes);
									if (f !== 0) {
										var c = n;
										for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
											var i = 1 << (31 - Wl(f));
											(c.entanglements[1] |= i), (f &= ~i);
										}
										zt(n), (ul & 6) === 0 && ((dn = gt() + 500), ee(0));
									}
								}
								break;
							case 13:
								(c = Wu(n, 2)), c !== null && tt(c, n, 2), yn(), Jc(n, 2);
						}
					}
					if (((n = Wc(a)), n === null && Yc(l, t, a, Un, u), n === e)) {
						break;
					}
					e = n;
				}
				e !== null && a.stopPropagation();
			} else {
				Yc(l, t, a, null, u);
			}
		}
	}
	function Wc(l) {
		return (l = In(l)), $c(l);
	}
	var Un = null;
	function $c(l) {
		if (((Un = null), (l = Bu(l)), l !== null)) {
			var t = p(l);
			if (t === null) {
				l = null;
			} else {
				var u = t.tag;
				if (u === 13) {
					if (((l = J(t)), l !== null)) {
						return l;
					}
					l = null;
				} else if (u === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) {
						return t.tag === 3 ? t.stateNode.containerInfo : null;
					}
					l = null;
				} else {
					t !== l && (l = null);
				}
			}
		}
		return (Un = l), null;
	}
	function wv(l) {
		switch (l) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (gd()) {
					case ci:
						return 2;
					case ii:
						return 8;
					case be:
					case bd:
						return 32;
					case si:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var kc = !1,
		cu = null,
		iu = null,
		su = null,
		oe = new Map(),
		ye = new Map(),
		vu = [],
		Yy =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" ",
			);
	function Wv(l, t) {
		switch (l) {
			case "focusin":
			case "focusout":
				cu = null;
				break;
			case "dragenter":
			case "dragleave":
				iu = null;
				break;
			case "mouseover":
			case "mouseout":
				su = null;
				break;
			case "pointerover":
			case "pointerout":
				oe.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				ye.delete(t.pointerId);
		}
	}
	function re(l, t, u, a, e, n) {
		return l === null || l.nativeEvent !== n
			? ((l = {
					blockedOn: t,
					domEventName: u,
					eventSystemFlags: a,
					nativeEvent: n,
					targetContainers: [e],
				}),
				t !== null && ((t = xu(t)), t !== null && Jv(t)),
				l)
			: ((l.eventSystemFlags |= a),
				(t = l.targetContainers),
				e !== null && t.indexOf(e) === -1 && t.push(e),
				l);
	}
	function By(l, t, u, a, e) {
		switch (t) {
			case "focusin":
				return (cu = re(cu, l, t, u, a, e)), !0;
			case "dragenter":
				return (iu = re(iu, l, t, u, a, e)), !0;
			case "mouseover":
				return (su = re(su, l, t, u, a, e)), !0;
			case "pointerover":
				var n = e.pointerId;
				return oe.set(n, re(oe.get(n) || null, l, t, u, a, e)), !0;
			case "gotpointercapture":
				return (
					(n = e.pointerId), ye.set(n, re(ye.get(n) || null, l, t, u, a, e)), !0
				);
		}
		return !1;
	}
	function $v(l) {
		var t = Bu(l.target);
		if (t !== null) {
			var u = p(t);
			if (u !== null) {
				if (((t = u.tag), t === 13)) {
					if (((t = J(u)), t !== null)) {
						(l.blockedOn = t),
							Dd(l.priority, function () {
								if (u.tag === 13) {
									var a = lt();
									a = Cn(a);
									var e = Wu(u, a);
									e !== null && tt(e, u, a), Jc(u, a);
								}
							});
						return;
					}
				} else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
					l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
					return;
				}
			}
		}
		l.blockedOn = null;
	}
	function Rn(l) {
		if (l.blockedOn !== null) {
			return !1;
		}
		for (var t = l.targetContainers; 0 < t.length; ) {
			var u = Wc(l.nativeEvent);
			if (u === null) {
				u = l.nativeEvent;
				var a = new u.constructor(u.type, u);
				(Fn = a), u.target.dispatchEvent(a), (Fn = null);
			} else {
				return (t = xu(u)), t !== null && Jv(t), (l.blockedOn = u), !1;
			}
			t.shift();
		}
		return !0;
	}
	function kv(l, t, u) {
		Rn(l) && u.delete(t);
	}
	function xy() {
		(kc = !1),
			cu !== null && Rn(cu) && (cu = null),
			iu !== null && Rn(iu) && (iu = null),
			su !== null && Rn(su) && (su = null),
			oe.forEach(kv),
			ye.forEach(kv);
	}
	function pn(l, t) {
		l.blockedOn === t &&
			((l.blockedOn = null),
			kc ||
				((kc = !0),
				E.unstable_scheduleCallback(E.unstable_NormalPriority, xy)));
	}
	var Nn = null;
	function Fv(l) {
		Nn !== l &&
			((Nn = l),
			E.unstable_scheduleCallback(E.unstable_NormalPriority, function () {
				Nn === l && (Nn = null);
				for (var t = 0; t < l.length; t += 3) {
					var u = l[t],
						a = l[t + 1],
						e = l[t + 2];
					if (typeof a != "function") {
						if ($c(a || u) === null) {
							continue;
						}
						break;
					}
					var n = xu(u);
					n !== null &&
						(l.splice(t, 3),
						(t -= 3),
						$f(n, { pending: !0, data: e, method: u.method, action: a }, a, e));
				}
			}));
	}
	function he(l) {
		function t(i) {
			return pn(i, l);
		}
		cu !== null && pn(cu, l),
			iu !== null && pn(iu, l),
			su !== null && pn(su, l),
			oe.forEach(t),
			ye.forEach(t);
		for (var u = 0; u < vu.length; u++) {
			var a = vu[u];
			a.blockedOn === l && (a.blockedOn = null);
		}
		for (; 0 < vu.length && ((u = vu[0]), u.blockedOn === null); ) {
			$v(u), u.blockedOn === null && vu.shift();
		}
		if (((u = (l.ownerDocument || l).$$reactFormReplay), u != null)) {
			for (a = 0; a < u.length; a += 3) {
				var e = u[a],
					n = u[a + 1],
					f = e[jl] || null;
				if (typeof n == "function") {
					f || Fv(u);
				} else if (f) {
					var c = null;
					if (n && n.hasAttribute("formAction")) {
						if (((e = n), (f = n[jl] || null))) {
							c = f.formAction;
						} else if ($c(e) !== null) {
							continue;
						}
					} else {
						c = f.action;
					}
					typeof c == "function" ? (u[a + 1] = c) : (u.splice(a, 3), (a -= 3)),
						Fv(u);
				}
			}
		}
	}
	function Fc(l) {
		this._internalRoot = l;
	}
	(Hn.prototype.render = Fc.prototype.render =
		function (l) {
			var t = this._internalRoot;
			if (t === null) {
				throw Error(d(409));
			}
			var u = t.current,
				a = lt();
			Lv(u, a, l, t, null, null);
		}),
		(Hn.prototype.unmount = Fc.prototype.unmount =
			function () {
				var l = this._internalRoot;
				if (l !== null) {
					this._internalRoot = null;
					var t = l.containerInfo;
					Lv(l.current, 2, null, l, null, null), yn(), (t[Yu] = null);
				}
			});
	function Hn(l) {
		this._internalRoot = l;
	}
	Hn.prototype.unstable_scheduleHydration = function (l) {
		if (l) {
			var t = ri();
			l = { blockedOn: null, target: l, priority: t };
			for (var u = 0; u < vu.length && t !== 0 && t < vu[u].priority; u++);
			vu.splice(u, 0, l), u === 0 && $v(l);
		}
	};
	var Iv = R.version;
	if (Iv !== "19.1.0") {
		throw Error(d(527, Iv, "19.1.0"));
	}
	O.findDOMNode = function (l) {
		var t = l._reactInternals;
		if (t === void 0) {
			throw typeof l.render == "function"
				? Error(d(188))
				: ((l = Object.keys(l).join(",")), Error(d(268, l)));
		}
		return (
			(l = q(t)),
			(l = l !== null ? A(l) : null),
			(l = l === null ? null : l.stateNode),
			l
		);
	};
	var Gy = {
		bundleType: 0,
		version: "19.1.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: g,
		reconcilerVersion: "19.1.0",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!qn.isDisabled && qn.supportsFiber) {
			try {
				(ba = qn.inject(Gy)), (wl = qn);
			} catch {}
		}
	}
	return (
		(Se.createRoot = function (l, t) {
			if (!H(l)) {
				throw Error(d(299));
			}
			var u = !1,
				a = "",
				e = r0,
				n = h0,
				f = m0,
				c = null;
			return (
				t != null &&
					(t.unstable_strictMode === !0 && (u = !0),
					t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
					t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
					t.onCaughtError !== void 0 && (n = t.onCaughtError),
					t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
					t.unstable_transitionCallbacks !== void 0 &&
						(c = t.unstable_transitionCallbacks)),
				(t = Zv(l, 1, !1, null, null, u, a, e, n, f, c, null)),
				(l[Yu] = t.current),
				qc(l),
				new Fc(t)
			);
		}),
		(Se.hydrateRoot = function (l, t, u) {
			if (!H(l)) {
				throw Error(d(299));
			}
			var a = !1,
				e = "",
				n = r0,
				f = h0,
				c = m0,
				i = null,
				r = null;
			return (
				u != null &&
					(u.unstable_strictMode === !0 && (a = !0),
					u.identifierPrefix !== void 0 && (e = u.identifierPrefix),
					u.onUncaughtError !== void 0 && (n = u.onUncaughtError),
					u.onCaughtError !== void 0 && (f = u.onCaughtError),
					u.onRecoverableError !== void 0 && (c = u.onRecoverableError),
					u.unstable_transitionCallbacks !== void 0 &&
						(i = u.unstable_transitionCallbacks),
					u.formState !== void 0 && (r = u.formState)),
				(t = Zv(l, 1, !0, t, u ?? null, a, e, n, f, c, i, r)),
				(t.context = Vv(null)),
				(u = t.current),
				(a = lt()),
				(a = Cn(a)),
				(e = wt(a)),
				(e.callback = null),
				Wt(u, e, a),
				(u = a),
				(t.current.lanes = u),
				Ea(t, u),
				zt(t),
				(l[Yu] = t.current),
				qc(l),
				new Hn(t)
			);
		}),
		(Se.version = "19.1.0"),
		Se
	);
}
var id;
function wy() {
	if (id) {
		return li.exports;
	}
	id = 1;
	function E() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		) {
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
			} catch (R) {
				console.error(R);
			}
		}
	}
	return E(), (li.exports = Jy()), li.exports;
}
var Wy = wy();
const $y = "_app_1hu0d_1",
	ky = { app: $y };
var sd = function () {},
	Fy = typeof window < "u",
	Iy = function (E, R) {
		var D = mt.useRef(function () {});
		mt.useEffect(function () {
			D.current = E;
		}),
			mt.useEffect(
				function () {
					if (R !== null) {
						var d = setInterval(function () {
							return D.current();
						}, R || 0);
						return function () {
							return clearInterval(d);
						};
					}
				},
				[R],
			);
	},
	Py = function (E, R, D) {
		if (!Fy) {
			return [R, sd, sd];
		}
		var d = JSON.parse,
			H = mt.useRef(function (N) {
				try {
					var P = D ? (D.raw ? String : D.serializer) : JSON.stringify,
						W = localStorage.getItem(N);
					return W !== null ? d(W) : (R && localStorage.setItem(N, P(R)), R);
				} catch {
					return R;
				}
			}),
			p = mt.useState(function () {
				return H.current(E);
			}),
			J = p[0],
			tl = p[1];
		mt.useLayoutEffect(
			function () {
				return tl(H.current(E));
			},
			[E],
		);
		var q = mt.useCallback(
				function (N) {
					try {
						var P = typeof N == "function" ? N(J) : N;
						if (typeof P > "u") {
							return;
						}
						var W = void 0;
						D || (W = JSON.stringify(P)), localStorage.setItem(E, W), tl(d(W));
					} catch {}
				},
				[E, tl],
			),
			A = mt.useCallback(
				function () {
					try {
						localStorage.removeItem(E), tl(void 0);
					} catch {}
				},
				[E, tl],
			);
		return [J, q, A];
	};
function l1({ settings: E }) {
	const R = E.text.split(""),
		[D, d] = mt.useState(-E.visibleCharacters - 1),
		H = Math.round(6e3 / E.wordsPerMinute);
	return (
		Iy(() => {
			D > R.length + E.visibleCharacters ? d(-E.visibleCharacters) : d(D + 1);
		}, H),
		ll.jsx("div", {
			style: {
				fontSize: `${E.fontSize}px`,
				fontWeight: "bold",
				letterSpacing: `${E.fontWidth / 10}px`,
			},
			children: R.map((p, J) => {
				const tl = Math.abs(J - D),
					q =
						tl > E.visibleCharacters
							? 0
							: tl < E.visibleCharacters
								? 1
								: 1 / tl;
				return ll.jsx(
					"span",
					{
						style: { opacity: q, transition: `opacity ${H * 2}ms` },
						children: p,
					},
					J,
				);
			}),
		})
	);
}
const Yn = {
	fontSize: 40,
	fontWeight: "bolder",
	fontWidth: 16,
	text: "",
	visibleCharacters: 10,
	wordsPerMinute: 105,
};
function rd(E) {
	var R,
		D,
		d = "";
	if (typeof E == "string" || typeof E == "number") {
		d += E;
	} else if (typeof E == "object") {
		if (Array.isArray(E)) {
			var H = E.length;
			for (R = 0; R < H; R++) {
				E[R] && (D = rd(E[R])) && (d && (d += " "), (d += D));
			}
		} else {
			for (D in E) {
				E[D] && (d && (d += " "), (d += D));
			}
		}
	}
	return d;
}
function t1() {
	for (var E, R, D = 0, d = "", H = arguments.length; D < H; D++) {
		(E = arguments[D]) && (R = rd(E)) && (d && (d += " "), (d += R));
	}
	return d;
}
const u1 = "_button_vbdma_1",
	a1 = "_bold_vbdma_8",
	e1 = "_disabled_vbdma_13",
	ei = { button: u1, bold: a1, disabled: e1 };
function vd({ bold: E, children: R, className: D, disabled: d, onClick: H }) {
	return ll.jsx("button", {
		className: t1(ei.button, E && ei.bold, d && ei.disabled, D),
		disabled: d,
		onClick: (p) => {
			p.preventDefault(), H();
		},
		type: "button",
		children: R,
	});
}
const n1 = "_labeled_io5pg_1",
	f1 = "_label_io5pg_1",
	dd = { labeled: n1, label: f1 };
function hd({ children: E, label: R, name: D }) {
	return ll.jsxs("div", {
		className: dd.labeled,
		children: [
			ll.jsxs("label", { className: dd.label, htmlFor: D, children: [R, ":"] }),
			E,
		],
	});
}
const c1 = "_numberInput_j052z_1",
	i1 = { numberInput: c1 };
function Bn({ label: E, name: R, setValue: D, value: d }) {
	return ll.jsx(hd, {
		label: E,
		name: R,
		children: ll.jsx("input", {
			className: i1.numberInput,
			id: R,
			name: R,
			onChange: (H) => {
				D(+H.target.value);
			},
			type: "number",
			value: d,
		}),
	});
}
const s1 = "_selectInput_1v6p5_1",
	v1 = { selectInput: s1 };
function d1({ label: E, name: R, options: D, setValue: d, value: H }) {
	return ll.jsx(hd, {
		label: E,
		name: R,
		children: ll.jsx("select", {
			className: v1.selectInput,
			id: R,
			name: R,
			onChange: (p) => {
				d(p.target.value);
			},
			value: H,
			children: D.map((p) => ll.jsx("option", { value: p, children: p }, p)),
		}),
	});
}
const o1 = "_settingsForm_1dilw_1",
	y1 = "_buttons_1dilw_10",
	od = { settingsForm: o1, buttons: y1 },
	yd = new Map([
		["(blank)", ""],
		[
			"One Sentence",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		],
		[
			"What is Lorem Ipsum?",
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		],
	]),
	r1 = "_storyInput_1jzjn_1",
	h1 = "_textarea_1jzjn_8",
	m1 = "_select_1jzjn_16",
	ni = { storyInput: r1, textarea: h1, select: m1 };
function S1({ setValue: E, value: R }) {
	var H;
	const D = Array.from(yd),
		d = ((H = D.find(([, p]) => p === R)) == null ? void 0 : H[0]) ?? "";
	return ll.jsxs("div", {
		className: ni.storyInput,
		children: [
			ll.jsx("textarea", {
				className: ni.textarea,
				onChange: (p) => {
					E(p.target.value);
				},
				value: R,
			}),
			ll.jsxs("select", {
				className: ni.select,
				onChange: (p) => {
					const J = yd.get(p.target.value);
					J === void 0
						? console.error("Story not found:", p.target.value)
						: E(J);
				},
				value: d,
				children: [
					!d &&
						ll.jsx("option", {
							disabled: !0,
							value: "",
							children: "(custom story)",
						}),
					D.map(([p]) => ll.jsx("option", { value: p, children: p }, p)),
				],
			}),
		],
	});
}
function g1({ setSettings: E }) {
	const [R, D] = Py("scrolling-text-reader-state", { ...Yn }),
		d = { ...Yn, ...R },
		H = (J, tl) => {
			D((q) => ({ ...Yn, ...q, [J]: tl }));
		},
		p = (J) => (tl) => {
			H(J, tl);
		};
	return ll.jsxs("form", {
		className: od.settingsForm,
		children: [
			ll.jsx(Bn, {
				label: "Font Size",
				name: "fontSize",
				setValue: p("fontSize"),
				value: d.fontSize,
			}),
			ll.jsx(d1, {
				label: "Font Weight",
				name: "fontWeight",
				options: ["bold", "bolder", "normal"],
				setValue: p("fontWeight"),
				value: d.fontWeight,
			}),
			ll.jsx(Bn, {
				label: "Font Width",
				name: "fontWidth",
				setValue: p("fontWidth"),
				value: d.fontWidth,
			}),
			ll.jsx(Bn, {
				label: "Visible Characters",
				name: "visibleCharacters",
				setValue: p("visibleCharacters"),
				value: d.visibleCharacters,
			}),
			ll.jsx(Bn, {
				label: "Words Per Minute",
				name: "wordsPerMinute",
				setValue: p("wordsPerMinute"),
				value: d.wordsPerMinute,
			}),
			ll.jsx(S1, { setValue: p("text"), value: d.text }),
			ll.jsxs("div", {
				className: od.buttons,
				children: [
					ll.jsx(vd, {
						onClick: () => {
							D(Yn);
						},
						children: "Reset",
					}),
					ll.jsx(vd, {
						bold: !0,
						disabled:
							!d.fontSize ||
							!d.fontWidth ||
							!d.text ||
							!d.visibleCharacters ||
							!d.wordsPerMinute,
						onClick: () => {
							E(d);
						},
						children: "Start",
					}),
				],
			}),
		],
	});
}
function b1() {
	const [E, R] = mt.useState();
	return ll.jsx("div", {
		className: ky.app,
		children: E ? ll.jsx(l1, { settings: E }) : ll.jsx(g1, { setSettings: R }),
	});
}
Wy.createRoot(document.getElementById("root")).render(
	ll.jsx(mt.StrictMode, { children: ll.jsx(b1, {}) }),
);
