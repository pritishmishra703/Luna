var WebVoiceProcessor = (function (exports) {
  'use strict';

  function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator$1(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  function createCommonjsModule$1(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var _typeof_1$1 = createCommonjsModule$1(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var regeneratorRuntime$2 = createCommonjsModule$1(function (module) {
  var _typeof = _typeof_1$1["default"];
  function _regeneratorRuntime() {
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function value(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // TODO(Babel 8): Remove this file.

  var runtime = regeneratorRuntime$2();
  var regenerator$1 = runtime;

  // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  if (typeof AudioWorkletNode !== 'function' || !('audioWorklet' in AudioContext.prototype)) {
    if (AudioContext) {
      // @ts-ignore
      AudioContext.prototype.audioWorklet = {
        addModule: function () {
          var _addModule = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee(moduleURL, options) {
            return regenerator$1.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return");
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function addModule(_x, _x2) {
            return _addModule.apply(this, arguments);
          }
          return addModule;
        }()
      };
      // @ts-ignore
      // eslint-disable-next-line no-native-reassign
      window.AudioWorkletNode = function (context, processorName, options) {
        var _ref = options && options.processorOptions,
          _ref$numberOfChannels = _ref.numberOfChannels,
          numberOfChannels = _ref$numberOfChannels === void 0 ? 1 : _ref$numberOfChannels,
          _ref$frameLength = _ref.frameLength,
          frameLength = _ref$frameLength === void 0 ? 512 : _ref$frameLength;
        var scriptProcessor = context.createScriptProcessor(frameLength, numberOfChannels, numberOfChannels);
        if (!scriptProcessor.port) {
          scriptProcessor.port = {};
        }
        scriptProcessor.onaudioprocess = function (event) {
          if (scriptProcessor.port && scriptProcessor.port.onmessage) {
            var buffer = [];
            for (var i = 0; i < event.inputBuffer.numberOfChannels; i++) {
              buffer.push(event.inputBuffer.getChannelData(i));
            }
            scriptProcessor.port.onmessage({
              data: {
                buffer: buffer
              }
            });
          }
        };
        // @ts-ignore
        scriptProcessor.port.close = function () {
          return;
        };
        return scriptProcessor;
      };
    }
  }

  function _typeof$1(obj) {
    "@babel/helpers - typeof";

    return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof$1(obj);
  }

  function _toPrimitive(input, hint) {
    if (_typeof$1(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof$1(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof$1(key) === "symbol" ? key : String(key);
  }

  function _defineProperty$1(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _setPrototypeOf$1(o, p) {
    _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf$1(o, p);
  }

  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf$1(subClass, superClass);
  }

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  function _possibleConstructorReturn$1(self, call) {
    if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized$1(self);
  }

  function _getPrototypeOf$1(o) {
    _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$1(o);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _isNativeReflectConstruct$2() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct$2()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf$1(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf$1(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf$1(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }

  const E_CANCELED = new Error('request for lock canceled');

  var __awaiter$2 = function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  class Semaphore {
      constructor(_maxConcurrency, _cancelError = E_CANCELED) {
          this._maxConcurrency = _maxConcurrency;
          this._cancelError = _cancelError;
          this._queue = [];
          this._waiters = [];
          if (_maxConcurrency <= 0) {
              throw new Error('semaphore must be initialized to a positive value');
          }
          this._value = _maxConcurrency;
      }
      acquire() {
          const locked = this.isLocked();
          const ticketPromise = new Promise((resolve, reject) => this._queue.push({ resolve, reject }));
          if (!locked)
              this._dispatch();
          return ticketPromise;
      }
      runExclusive(callback) {
          return __awaiter$2(this, void 0, void 0, function* () {
              const [value, release] = yield this.acquire();
              try {
                  return yield callback(value);
              }
              finally {
                  release();
              }
          });
      }
      waitForUnlock() {
          return __awaiter$2(this, void 0, void 0, function* () {
              if (!this.isLocked()) {
                  return Promise.resolve();
              }
              const waitPromise = new Promise((resolve) => this._waiters.push({ resolve }));
              return waitPromise;
          });
      }
      isLocked() {
          return this._value <= 0;
      }
      /** @deprecated Deprecated in 0.3.0, will be removed in 0.4.0. Use runExclusive instead. */
      release() {
          if (this._maxConcurrency > 1) {
              throw new Error('this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead');
          }
          if (this._currentReleaser) {
              const releaser = this._currentReleaser;
              this._currentReleaser = undefined;
              releaser();
          }
      }
      cancel() {
          this._queue.forEach((ticket) => ticket.reject(this._cancelError));
          this._queue = [];
      }
      _dispatch() {
          const nextTicket = this._queue.shift();
          if (!nextTicket)
              return;
          let released = false;
          this._currentReleaser = () => {
              if (released)
                  return;
              released = true;
              this._value++;
              this._resolveWaiters();
              this._dispatch();
          };
          nextTicket.resolve([this._value--, this._currentReleaser]);
      }
      _resolveWaiters() {
          this._waiters.forEach((waiter) => waiter.resolve());
          this._waiters = [];
      }
  }

  var __awaiter$1 = function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  class Mutex {
      constructor(cancelError) {
          this._semaphore = new Semaphore(1, cancelError);
      }
      acquire() {
          return __awaiter$1(this, void 0, void 0, function* () {
              const [, releaser] = yield this._semaphore.acquire();
              return releaser;
          });
      }
      runExclusive(callback) {
          return this._semaphore.runExclusive(() => callback());
      }
      isLocked() {
          return this._semaphore.isLocked();
      }
      waitForUnlock() {
          return this._semaphore.waitForUnlock();
      }
      /** @deprecated Deprecated in 0.3.0, will be removed in 0.4.0. Use runExclusive instead. */
      release() {
          this._semaphore.release();
      }
      cancel() {
          return this._semaphore.cancel();
      }
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }

  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var regeneratorRuntime$1 = createCommonjsModule(function (module) {
  var _typeof = _typeof_1["default"];

  function _regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {},
        Op = Object.prototype,
        hasOwn = Op.hasOwnProperty,
        $Symbol = "function" == typeof Symbol ? Symbol : {},
        iteratorSymbol = $Symbol.iterator || "@@iterator",
        asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
        toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }

    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
          generator = Object.create(protoGenerator.prototype),
          context = new Context(tryLocsList || []);
      return generator._invoke = function (innerFn, self, context) {
        var state = "suspendedStart";
        return function (method, arg) {
          if ("executing" === state) throw new Error("Generator is already running");

          if ("completed" === state) {
            if ("throw" === method) throw arg;
            return doneResult();
          }

          for (context.method = method, context.arg = arg;;) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
              if ("suspendedStart" === state) throw state = "completed", context.arg;
              context.dispatchException(context.arg);
            } else "return" === context.method && context.abrupt("return", context.arg);
            state = "executing";
            var record = tryCatch(innerFn, self, context);

            if ("normal" === record.type) {
              if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
              return {
                value: record.arg,
                done: context.done
              };
            }

            "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
          }
        };
      }(innerFn, self, context), generator;
    }

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    exports.wrap = wrap;
    var ContinueSentinel = {};

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {}

    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
        NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if ("throw" !== record.type) {
          var result = record.arg,
              value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }

        reject(record.arg);
      }

      var previousPromise;

      this._invoke = function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      };
    }

    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (undefined === method) {
        if (context.delegate = null, "throw" === context.method) {
          if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
          context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }

    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }

            return next.value = undefined, next.done = !0, next;
          };

          return next.next = next;
        }
      }

      return {
        next: doneResult
      };
    }

    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }

    return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }

        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
          "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        }
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;

        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
              record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
                hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        }

        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }

  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var regenerator = regeneratorRuntime$1();

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  /*
    Copyright 2022 Picovoice Inc.

    You may not use this file except in compliance with the license. A copy of the license is located in the "LICENSE"
    file accompanying this source.

    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
    an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
    specific language governing permissions and limitations under the License.
  */

  /**
   * BasePvFile Class
   * This class mocks the file system using in-memory storage.
   */
  var PvFile = /*#__PURE__*/function () {
    function PvFile() {
      _classCallCheck(this, PvFile);

      _defineProperty(this, "_path", void 0);

      _defineProperty(this, "_meta", void 0);
    }

    _createClass(PvFile, [{
      key: "meta",
      get:
      /**
       * Getter for file's meta information.
       */
      function get() {
        if (this._meta === undefined) {
          return undefined;
        }

        return _objectSpread$1({
          version: 0
        }, this._meta);
      }
      /**
       * Get the file pointer from the _filePtrs map.
       * @param ptr The pointer to BasePvFile instance to get from the map.
       * @returns BasePvFile returns the current file instance related to ptr.
       */

    }], [{
      key: "getPtr",
      value: function getPtr(ptr) {
        return PvFile._filePtrs.get(ptr);
      }
      /**
       * Saves the BasePvFile instance to the map with an associated ptr.
       * @param ptr The file pointer to save as the key.
       * @param instance The BasePvFile instance to save as the value.
       */

    }, {
      key: "setPtr",
      value: function setPtr(ptr, instance) {
        PvFile._filePtrs.set(ptr, instance);
      }
      /**
       * Removes the ptr from the _filePtrs map.
       * @param ptr The file pointer to remove.
       */

    }, {
      key: "removePtr",
      value: function removePtr(ptr) {
        PvFile._filePtrs["delete"](ptr);
      }
    }]);

    return PvFile;
  }();

  _defineProperty(PvFile, "_filePtrs", new Map());

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  /**
   * PvFileMem Class
   * This class mocks the file system using in-memory storage.
   */

  var PvFileMem = /*#__PURE__*/function (_PvFile) {
    _inherits(PvFileMem, _PvFile);

    var _super = _createSuper$1(PvFileMem);

    function PvFileMem(path, meta, db, mode) {
      var _this;

      _classCallCheck(this, PvFileMem);

      _this = _super.call(this);

      _defineProperty(_assertThisInitialized(_this), "_pos", 0);

      _defineProperty(_assertThisInitialized(_this), "_mode", void 0);

      _this._path = path;
      _this._meta = meta;
      _this._mode = mode;
      return _this;
    }

    _createClass(PvFileMem, [{
      key: "close",
      value: function close() {
        return;
      }
    }, {
      key: "read",
      value: function read(size, count) {
        if (!this.exists()) {
          throw new Error("'".concat(this._path, "' doesn't exist."));
        }

        if (this._isEOF) {
          var err = new Error("EOF");
          err.name = "EndOfFile";
          throw err;
        }

        var toCopy = Math.min(size * count, this._file.length - this._pos);
        var totalElems = toCopy - toCopy % size;
        var buffer = new Uint8Array(totalElems);
        buffer.set(this._file.slice(this._pos, this._pos + totalElems), 0);
        this._pos += totalElems;
        return buffer;
      }
    }, {
      key: "write",
      value: function write(content) {
        var newFile = new Uint8Array(this._pos + content.length);

        if (this._file !== undefined) {
          newFile.set(this._file.slice(0, this._pos));
          newFile.set(content, this._pos);
        } else {
          newFile.set(content);
        }

        this._file = newFile;
        this._pos += content.length;
      }
    }, {
      key: "seek",
      value: function seek(offset, whence) {
        if (!this.exists() && this._mode === "readonly") {
          throw new Error("'".concat(this._path, "' doesn't exist."));
        }

        if (offset < 0) {
          var err = new Error("EOF");
          err.name = "EndOfFile";
          throw err;
        }

        var newOffset;

        if (whence === 0) {
          newOffset = Math.min(offset, this._file.length);
        } else if (whence === 1) {
          newOffset = Math.min(this._pos + offset, this._file.length);
        } else if (whence === 2) {
          newOffset = Math.min(this._file.length + offset, this._file.length);
        } else {
          throw new Error("Invalid operation: ".concat(whence, "."));
        }

        this._pos = newOffset;
      }
    }, {
      key: "tell",
      value: function tell() {
        if (!this.exists()) {
          return -1;
        }

        return this._pos;
      }
    }, {
      key: "remove",
      value: function () {
        var _remove = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  PvFileMem._memFiles["delete"](this._path);

                  this._file = undefined;
                  this._pos = 0;

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function remove() {
          return _remove.apply(this, arguments);
        }

        return remove;
      }()
    }, {
      key: "exists",
      value: function exists() {
        return this._file !== undefined;
      }
    }, {
      key: "_isEOF",
      get: function get() {
        return this._pos >= this._file.length;
      }
    }, {
      key: "_file",
      get: function get() {
        return PvFileMem._memFiles.get(this._path);
      },
      set: function set(content) {
        PvFileMem._memFiles.set(this._path, content);
      }
    }], [{
      key: "open",
      value: function open(path, mode) {
        var file = PvFileMem._memFiles.get(path);

        var dbMode = mode.includes('r') ? "readonly" : "readwrite";

        if (file === undefined && dbMode === "readonly") {
          throw new Error("'".concat(path, "' doesn't exist."));
        }

        var fileMem = new PvFileMem(path, undefined, undefined, dbMode);

        if (mode.includes('a')) {
          fileMem.seek(0, 2);
        }

        return fileMem;
      }
    }]);

    return PvFileMem;
  }(PvFile);

  _defineProperty(PvFileMem, "_memFiles", new Map());
  /**
   * Convert a null terminated phrase stored inside an array buffer to a string
   *
   * @param arrayBuffer input array buffer
   * @param indexStart the index at which the phrase is stored
   * @return retrieved string
   */

  function arrayBufferToStringAtIndex(arrayBuffer, indexStart) {
    var indexEnd = indexStart;

    while (arrayBuffer[indexEnd] !== 0) {
      indexEnd++;
    }

    var utf8decoder = new TextDecoder('utf-8');
    return utf8decoder.decode(arrayBuffer.subarray(indexStart, indexEnd));
  }
  /**
   * Decode a base64 string and stored it in a Uint8Array array
   *
   * @param base64String input base64 string
   * @return decoded array
   */

  function base64ToUint8Array(base64String) {
    var base64StringDecoded = atob(base64String);
    var binaryArray = new Uint8Array(base64StringDecoded.length);

    for (var i = 0; i < base64StringDecoded.length; i++) {
      binaryArray[i] = base64StringDecoded.charCodeAt(i);
    }

    return binaryArray;
  }

  function decodeBase64(base64, enableUnicode) {
      var binaryString = atob(base64);
      if (enableUnicode) {
          var binaryView = new Uint8Array(binaryString.length);
          for (var i = 0, n = binaryString.length; i < n; ++i) {
              binaryView[i] = binaryString.charCodeAt(i);
          }
          return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
      }
      return binaryString;
  }

  function createURL(base64, sourcemapArg, enableUnicodeArg) {
      var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
      var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
      var source = decodeBase64(base64, enableUnicode);
      var start = source.indexOf('\n', 10) + 1;
      var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
      var blob = new Blob([body], { type: 'application/javascript' });
      return URL.createObjectURL(blob);
  }

  function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
      var url;
      return function WorkerFactory(options) {
          url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
          return new Worker(url, options);
      };
  }

  var WorkerFactory$1 = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwJDEoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7CiAgICB0cnkgewogICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7CiAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7CiAgICB9IGNhdGNoIChlcnJvcikgewogICAgICByZWplY3QoZXJyb3IpOwogICAgICByZXR1cm47CiAgICB9CiAgICBpZiAoaW5mby5kb25lKSB7CiAgICAgIHJlc29sdmUodmFsdWUpOwogICAgfSBlbHNlIHsKICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOwogICAgfQogIH0KICBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvciQxKGZuKSB7CiAgICByZXR1cm4gZnVuY3Rpb24gKCkgewogICAgICB2YXIgc2VsZiA9IHRoaXMsCiAgICAgICAgYXJncyA9IGFyZ3VtZW50czsKICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsKICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7CiAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHsKICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcCQxKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCAibmV4dCIsIHZhbHVlKTsKICAgICAgICB9CiAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikgewogICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwJDEoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csICJ0aHJvdyIsIGVycik7CiAgICAgICAgfQogICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7CiAgICAgIH0pOwogICAgfTsKICB9CgogIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayQxKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgewogICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsKICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uIik7CiAgICB9CiAgfQoKICBmdW5jdGlvbiBfdHlwZW9mJDEob2JqKSB7CiAgICAiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2YiOwoKICAgIHJldHVybiBfdHlwZW9mJDEgPSAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYgInN5bWJvbCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsKICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7CiAgICB9IDogZnVuY3Rpb24gKG9iaikgewogICAgICByZXR1cm4gb2JqICYmICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyAic3ltYm9sIiA6IHR5cGVvZiBvYmo7CiAgICB9LCBfdHlwZW9mJDEob2JqKTsKICB9CgogIGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgewogICAgaWYgKF90eXBlb2YkMShpbnB1dCkgIT09ICJvYmplY3QiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7CiAgICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07CiAgICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7CiAgICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgImRlZmF1bHQiKTsKICAgICAgaWYgKF90eXBlb2YkMShyZXMpICE9PSAib2JqZWN0IikgcmV0dXJuIHJlczsKICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS4iKTsKICAgIH0KICAgIHJldHVybiAoaGludCA9PT0gInN0cmluZyIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsKICB9CgogIGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgewogICAgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsICJzdHJpbmciKTsKICAgIHJldHVybiBfdHlwZW9mJDEoa2V5KSA9PT0gInN5bWJvbCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsKICB9CgogIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzJDEodGFyZ2V0LCBwcm9wcykgewogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgewogICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOwogICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7CiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsKICAgICAgaWYgKCJ2YWx1ZSIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7CiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7CiAgICB9CiAgfQogIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyQxKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgewogICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzJDEoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsKICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMkMShDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOwogICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCAicHJvdG90eXBlIiwgewogICAgICB3cml0YWJsZTogZmFsc2UKICAgIH0pOwogICAgcmV0dXJuIENvbnN0cnVjdG9yOwogIH0KCiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5JDEob2JqLCBrZXksIHZhbHVlKSB7CiAgICBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOwogICAgaWYgKGtleSBpbiBvYmopIHsKICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7CiAgICAgICAgdmFsdWU6IHZhbHVlLAogICAgICAgIGVudW1lcmFibGU6IHRydWUsCiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLAogICAgICAgIHdyaXRhYmxlOiB0cnVlCiAgICAgIH0pOwogICAgfSBlbHNlIHsKICAgICAgb2JqW2tleV0gPSB2YWx1ZTsKICAgIH0KICAgIHJldHVybiBvYmo7CiAgfQoKICBmdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZSQxKGZuKSB7CiAgICB2YXIgbW9kdWxlID0geyBleHBvcnRzOiB7fSB9OwogIAlyZXR1cm4gZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzOwogIH0KCiAgdmFyIF90eXBlb2ZfMSQxID0gY3JlYXRlQ29tbW9uanNNb2R1bGUkMShmdW5jdGlvbiAobW9kdWxlKSB7CiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHsKICAgICJAYmFiZWwvaGVscGVycyAtIHR5cGVvZiI7CgogICAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYgInN5bWJvbCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsKICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7CiAgICB9IDogZnVuY3Rpb24gKG9iaikgewogICAgICByZXR1cm4gb2JqICYmICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyAic3ltYm9sIiA6IHR5cGVvZiBvYmo7CiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbImRlZmF1bHQiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopOwogIH0KICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1siZGVmYXVsdCJdID0gbW9kdWxlLmV4cG9ydHM7CiAgfSk7CgogIHZhciByZWdlbmVyYXRvclJ1bnRpbWUkMiA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlJDEoZnVuY3Rpb24gKG1vZHVsZSkgewogIHZhciBfdHlwZW9mID0gX3R5cGVvZl8xJDFbImRlZmF1bHQiXTsKICBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkgewogICAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHsKICAgICAgcmV0dXJuIGV4cG9ydHM7CiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbImRlZmF1bHQiXSA9IG1vZHVsZS5leHBvcnRzOwogICAgdmFyIGV4cG9ydHMgPSB7fSwKICAgICAgT3AgPSBPYmplY3QucHJvdG90eXBlLAogICAgICBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eSwKICAgICAgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKG9iaiwga2V5LCBkZXNjKSB7CiAgICAgICAgb2JqW2tleV0gPSBkZXNjLnZhbHVlOwogICAgICB9LAogICAgICAkU3ltYm9sID0gImZ1bmN0aW9uIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sCiAgICAgIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCAiQEBpdGVyYXRvciIsCiAgICAgIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgIkBAYXN5bmNJdGVyYXRvciIsCiAgICAgIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCAiQEB0b1N0cmluZ1RhZyI7CiAgICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7CiAgICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsKICAgICAgICB2YWx1ZTogdmFsdWUsCiAgICAgICAgZW51bWVyYWJsZTogITAsCiAgICAgICAgY29uZmlndXJhYmxlOiAhMCwKICAgICAgICB3cml0YWJsZTogITAKICAgICAgfSksIG9ialtrZXldOwogICAgfQogICAgdHJ5IHsKICAgICAgZGVmaW5lKHt9LCAiIik7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgZGVmaW5lID0gZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkgewogICAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkgewogICAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvciwKICAgICAgICBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksCiAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTsKICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGdlbmVyYXRvciwgIl9pbnZva2UiLCB7CiAgICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkKICAgICAgfSksIGdlbmVyYXRvcjsKICAgIH0KICAgIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykgewogICAgICB0cnkgewogICAgICAgIHJldHVybiB7CiAgICAgICAgICB0eXBlOiAibm9ybWFsIiwKICAgICAgICAgIGFyZzogZm4uY2FsbChvYmosIGFyZykKICAgICAgICB9OwogICAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgICByZXR1cm4gewogICAgICAgICAgdHlwZTogInRocm93IiwKICAgICAgICAgIGFyZzogZXJyCiAgICAgICAgfTsKICAgICAgfQogICAgfQogICAgZXhwb3J0cy53cmFwID0gd3JhcDsKICAgIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307CiAgICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fQogICAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fQogICAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fQogICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307CiAgICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfSk7CiAgICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsCiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpOwogICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkgJiYgKEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUpOwogICAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpOwogICAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkgewogICAgICBbIm5leHQiLCAidGhyb3ciLCAicmV0dXJuIl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7CiAgICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTsKICAgICAgICB9KTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHsKICAgICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHsKICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTsKICAgICAgICBpZiAoInRocm93IiAhPT0gcmVjb3JkLnR5cGUpIHsKICAgICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnLAogICAgICAgICAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTsKICAgICAgICAgIHJldHVybiB2YWx1ZSAmJiAib2JqZWN0IiA9PSBfdHlwZW9mKHZhbHVlKSAmJiBoYXNPd24uY2FsbCh2YWx1ZSwgIl9fYXdhaXQiKSA/IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsKICAgICAgICAgICAgaW52b2tlKCJuZXh0IiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7CiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7CiAgICAgICAgICAgIGludm9rZSgidGhyb3ciLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7CiAgICAgICAgICB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkgewogICAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQsIHJlc29sdmUocmVzdWx0KTsKICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikgewogICAgICAgICAgICByZXR1cm4gaW52b2tlKCJ0aHJvdyIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpOwogICAgICAgICAgfSk7CiAgICAgICAgfQogICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTsKICAgICAgfQogICAgICB2YXIgcHJldmlvdXNQcm9taXNlOwogICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAiX2ludm9rZSIsIHsKICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUobWV0aG9kLCBhcmcpIHsKICAgICAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkgewogICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsKICAgICAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7CiAgICAgICAgICAgIH0pOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpOwogICAgICAgIH0KICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHsKICAgICAgdmFyIHN0YXRlID0gInN1c3BlbmRlZFN0YXJ0IjsKICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXRob2QsIGFyZykgewogICAgICAgIGlmICgiZXhlY3V0aW5nIiA9PT0gc3RhdGUpIHRocm93IG5ldyBFcnJvcigiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZyIpOwogICAgICAgIGlmICgiY29tcGxldGVkIiA9PT0gc3RhdGUpIHsKICAgICAgICAgIGlmICgidGhyb3ciID09PSBtZXRob2QpIHRocm93IGFyZzsKICAgICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7CiAgICAgICAgfQogICAgICAgIGZvciAoY29udGV4dC5tZXRob2QgPSBtZXRob2QsIGNvbnRleHQuYXJnID0gYXJnOzspIHsKICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7CiAgICAgICAgICBpZiAoZGVsZWdhdGUpIHsKICAgICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7CiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkgewogICAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7CiAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0OwogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoIm5leHQiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKCJ0aHJvdyIgPT09IGNvbnRleHQubWV0aG9kKSB7CiAgICAgICAgICAgIGlmICgic3VzcGVuZGVkU3RhcnQiID09PSBzdGF0ZSkgdGhyb3cgc3RhdGUgPSAiY29tcGxldGVkIiwgY29udGV4dC5hcmc7CiAgICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpOwogICAgICAgICAgfSBlbHNlICJyZXR1cm4iID09PSBjb250ZXh0Lm1ldGhvZCAmJiBjb250ZXh0LmFicnVwdCgicmV0dXJuIiwgY29udGV4dC5hcmcpOwogICAgICAgICAgc3RhdGUgPSAiZXhlY3V0aW5nIjsKICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTsKICAgICAgICAgIGlmICgibm9ybWFsIiA9PT0gcmVjb3JkLnR5cGUpIHsKICAgICAgICAgICAgaWYgKHN0YXRlID0gY29udGV4dC5kb25lID8gImNvbXBsZXRlZCIgOiAic3VzcGVuZGVkWWllbGQiLCByZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTsKICAgICAgICAgICAgcmV0dXJuIHsKICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZywKICAgICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmUKICAgICAgICAgICAgfTsKICAgICAgICAgIH0KICAgICAgICAgICJ0aHJvdyIgPT09IHJlY29yZC50eXBlICYmIChzdGF0ZSA9ICJjb21wbGV0ZWQiLCBjb250ZXh0Lm1ldGhvZCA9ICJ0aHJvdyIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZyk7CiAgICAgICAgfQogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkgewogICAgICB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kLAogICAgICAgIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZE5hbWVdOwogICAgICBpZiAodW5kZWZpbmVkID09PSBtZXRob2QpIHJldHVybiBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgInRocm93IiA9PT0gbWV0aG9kTmFtZSAmJiBkZWxlZ2F0ZS5pdGVyYXRvclsicmV0dXJuIl0gJiYgKGNvbnRleHQubWV0aG9kID0gInJldHVybiIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkLCBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSwgInRocm93IiA9PT0gY29udGV4dC5tZXRob2QpIHx8ICJyZXR1cm4iICE9PSBtZXRob2ROYW1lICYmIChjb250ZXh0Lm1ldGhvZCA9ICJ0aHJvdyIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcigiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAnIiArIG1ldGhvZE5hbWUgKyAiJyBtZXRob2QiKSksIENvbnRpbnVlU2VudGluZWw7CiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7CiAgICAgIGlmICgidGhyb3ciID09PSByZWNvcmQudHlwZSkgcmV0dXJuIGNvbnRleHQubWV0aG9kID0gInRocm93IiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbDsKICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnOwogICAgICByZXR1cm4gaW5mbyA/IGluZm8uZG9uZSA/IChjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZSwgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYywgInJldHVybiIgIT09IGNvbnRleHQubWV0aG9kICYmIChjb250ZXh0Lm1ldGhvZCA9ICJuZXh0IiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCkgOiBpbmZvIDogKGNvbnRleHQubWV0aG9kID0gInRocm93IiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdCIpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCk7CiAgICB9CiAgICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykgewogICAgICB2YXIgZW50cnkgPSB7CiAgICAgICAgdHJ5TG9jOiBsb2NzWzBdCiAgICAgIH07CiAgICAgIDEgaW4gbG9jcyAmJiAoZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdKSwgMiBpbiBsb2NzICYmIChlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXSwgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdKSwgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpOwogICAgfQogICAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkgewogICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTsKICAgICAgcmVjb3JkLnR5cGUgPSAibm9ybWFsIiwgZGVsZXRlIHJlY29yZC5hcmcsIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7CiAgICB9CiAgICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7CiAgICAgIHRoaXMudHJ5RW50cmllcyA9IFt7CiAgICAgICAgdHJ5TG9jOiAicm9vdCIKICAgICAgfV0sIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7CiAgICB9CiAgICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHsKICAgICAgaWYgKGl0ZXJhYmxlKSB7CiAgICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdOwogICAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpOwogICAgICAgIGlmICgiZnVuY3Rpb24iID09IHR5cGVvZiBpdGVyYWJsZS5uZXh0KSByZXR1cm4gaXRlcmFibGU7CiAgICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7CiAgICAgICAgICB2YXIgaSA9IC0xLAogICAgICAgICAgICBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHsKICAgICAgICAgICAgICBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7CiAgICAgICAgICAgICAgcmV0dXJuIG5leHQudmFsdWUgPSB1bmRlZmluZWQsIG5leHQuZG9uZSA9ICEwLCBuZXh0OwogICAgICAgICAgICB9OwogICAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7CiAgICAgICAgfQogICAgICB9CiAgICAgIHJldHVybiB7CiAgICAgICAgbmV4dDogZG9uZVJlc3VsdAogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHsKICAgICAgcmV0dXJuIHsKICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLAogICAgICAgIGRvbmU6ICEwCiAgICAgIH07CiAgICB9CiAgICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZVByb3BlcnR5KEdwLCAiY29uc3RydWN0b3IiLCB7CiAgICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwKICAgICAgY29uZmlndXJhYmxlOiAhMAogICAgfSksIGRlZmluZVByb3BlcnR5KEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCAiY29uc3RydWN0b3IiLCB7CiAgICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbiwKICAgICAgY29uZmlndXJhYmxlOiAhMAogICAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB0b1N0cmluZ1RhZ1N5bWJvbCwgIkdlbmVyYXRvckZ1bmN0aW9uIiksIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChnZW5GdW4pIHsKICAgICAgdmFyIGN0b3IgPSAiZnVuY3Rpb24iID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yOwogICAgICByZXR1cm4gISFjdG9yICYmIChjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCAiR2VuZXJhdG9yRnVuY3Rpb24iID09PSAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpKTsKICAgIH0sIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uIChnZW5GdW4pIHsKICAgICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6IChnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCAiR2VuZXJhdG9yRnVuY3Rpb24iKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuOwogICAgfSwgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uIChhcmcpIHsKICAgICAgcmV0dXJuIHsKICAgICAgICBfX2F3YWl0OiBhcmcKICAgICAgfTsKICAgIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSksIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkgewogICAgICByZXR1cm4gdGhpczsKICAgIH0pLCBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkgewogICAgICB2b2lkIDAgPT09IFByb21pc2VJbXBsICYmIChQcm9taXNlSW1wbCA9IFByb21pc2UpOwogICAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLCBQcm9taXNlSW1wbCk7CiAgICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7CiAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7CiAgICAgIH0pOwogICAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKSwgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgIkdlbmVyYXRvciIpLCBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfSksIGRlZmluZShHcCwgInRvU3RyaW5nIiwgZnVuY3Rpb24gKCkgewogICAgICByZXR1cm4gIltvYmplY3QgR2VuZXJhdG9yXSI7CiAgICB9KSwgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24gKHZhbCkgewogICAgICB2YXIgb2JqZWN0ID0gT2JqZWN0KHZhbCksCiAgICAgICAga2V5cyA9IFtdOwogICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSBrZXlzLnB1c2goa2V5KTsKICAgICAgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkgewogICAgICAgIGZvciAoOyBrZXlzLmxlbmd0aDspIHsKICAgICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpOwogICAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHJldHVybiBuZXh0LnZhbHVlID0ga2V5LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0OwogICAgICB9OwogICAgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0gewogICAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCwKICAgICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHsKICAgICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9ICJuZXh0IiwgdGhpcy5hcmcgPSB1bmRlZmluZWQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhc2tpcFRlbXBSZXNldCkgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSAidCIgPT09IG5hbWUuY2hhckF0KDApICYmIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmICFpc05hTigrbmFtZS5zbGljZSgxKSkgJiYgKHRoaXNbbmFtZV0gPSB1bmRlZmluZWQpOwogICAgICB9LAogICAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkgewogICAgICAgIHRoaXMuZG9uZSA9ICEwOwogICAgICAgIHZhciByb290UmVjb3JkID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247CiAgICAgICAgaWYgKCJ0aHJvdyIgPT09IHJvb3RSZWNvcmQudHlwZSkgdGhyb3cgcm9vdFJlY29yZC5hcmc7CiAgICAgICAgcmV0dXJuIHRoaXMucnZhbDsKICAgICAgfSwKICAgICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGV4Y2VwdGlvbikgewogICAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjsKICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7CiAgICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7CiAgICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSAidGhyb3ciLCByZWNvcmQuYXJnID0gZXhjZXB0aW9uLCBjb250ZXh0Lm5leHQgPSBsb2MsIGNhdWdodCAmJiAoY29udGV4dC5tZXRob2QgPSAibmV4dCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgISFjYXVnaHQ7CiAgICAgICAgfQogICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsKICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXSwKICAgICAgICAgICAgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjsKICAgICAgICAgIGlmICgicm9vdCIgPT09IGVudHJ5LnRyeUxvYykgcmV0dXJuIGhhbmRsZSgiZW5kIik7CiAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikgewogICAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgImNhdGNoTG9jIiksCiAgICAgICAgICAgICAgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCAiZmluYWxseUxvYyIpOwogICAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkgewogICAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApOwogICAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpOwogICAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7CiAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5Iik7CiAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0sCiAgICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykgewogICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsKICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTsKICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIGhhc093bi5jYWxsKGVudHJ5LCAiZmluYWxseUxvYyIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHsKICAgICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgZmluYWxseUVudHJ5ICYmICgiYnJlYWsiID09PSB0eXBlIHx8ICJjb250aW51ZSIgPT09IHR5cGUpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYyAmJiAoZmluYWxseUVudHJ5ID0gbnVsbCk7CiAgICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307CiAgICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gdHlwZSwgcmVjb3JkLmFyZyA9IGFyZywgZmluYWxseUVudHJ5ID8gKHRoaXMubWV0aG9kID0gIm5leHQiLCB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYywgQ29udGludWVTZW50aW5lbCkgOiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7CiAgICAgIH0sCiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7CiAgICAgICAgaWYgKCJ0aHJvdyIgPT09IHJlY29yZC50eXBlKSB0aHJvdyByZWNvcmQuYXJnOwogICAgICAgIHJldHVybiAiYnJlYWsiID09PSByZWNvcmQudHlwZSB8fCAiY29udGludWUiID09PSByZWNvcmQudHlwZSA/IHRoaXMubmV4dCA9IHJlY29yZC5hcmcgOiAicmV0dXJuIiA9PT0gcmVjb3JkLnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnLCB0aGlzLm1ldGhvZCA9ICJyZXR1cm4iLCB0aGlzLm5leHQgPSAiZW5kIikgOiAibm9ybWFsIiA9PT0gcmVjb3JkLnR5cGUgJiYgYWZ0ZXJMb2MgJiYgKHRoaXMubmV4dCA9IGFmdGVyTG9jKSwgQ29udGludWVTZW50aW5lbDsKICAgICAgfSwKICAgICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2goZmluYWxseUxvYykgewogICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsKICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTsKICAgICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkoZW50cnkpLCBDb250aW51ZVNlbnRpbmVsOwogICAgICAgIH0KICAgICAgfSwKICAgICAgImNhdGNoIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykgewogICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsKICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTsKICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykgewogICAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjsKICAgICAgICAgICAgaWYgKCJ0aHJvdyIgPT09IHJlY29yZC50eXBlKSB7CiAgICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7CiAgICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHRocm93bjsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHQiKTsKICAgICAgfSwKICAgICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykgewogICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0gewogICAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksCiAgICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLAogICAgICAgICAgbmV4dExvYzogbmV4dExvYwogICAgICAgIH0sICJuZXh0IiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdW5kZWZpbmVkKSwgQ29udGludWVTZW50aW5lbDsKICAgICAgfQogICAgfSwgZXhwb3J0czsKICB9CiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbImRlZmF1bHQiXSA9IG1vZHVsZS5leHBvcnRzOwogIH0pOwoKICAvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLgoKICB2YXIgcnVudGltZSA9IHJlZ2VuZXJhdG9yUnVudGltZSQyKCk7CiAgdmFyIHJlZ2VuZXJhdG9yJDEgPSBydW50aW1lOwoKICAvLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PQogIHRyeSB7CiAgICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lOwogIH0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7CiAgICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICJvYmplY3QiKSB7CiAgICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTsKICAgIH0gZWxzZSB7CiAgICAgIEZ1bmN0aW9uKCJyIiwgInJlZ2VuZXJhdG9yUnVudGltZSA9IHIiKShydW50aW1lKTsKICAgIH0KICB9CgogIGZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHsKICAgIHRyeSB7CiAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsKICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsKICAgIH0gY2F0Y2ggKGVycm9yKSB7CiAgICAgIHJlamVjdChlcnJvcik7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBpZiAoaW5mby5kb25lKSB7CiAgICAgIHJlc29sdmUodmFsdWUpOwogICAgfSBlbHNlIHsKICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOwogICAgfQogIH0KCiAgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsKICAgIHJldHVybiBmdW5jdGlvbiAoKSB7CiAgICAgIHZhciBzZWxmID0gdGhpcywKICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7CiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7CiAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOwoKICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgewogICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCAibmV4dCIsIHZhbHVlKTsKICAgICAgICB9CgogICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHsKICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgInRocm93IiwgZXJyKTsKICAgICAgICB9CgogICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7CiAgICAgIH0pOwogICAgfTsKICB9CgogIGZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuKSB7CiAgICB2YXIgbW9kdWxlID0geyBleHBvcnRzOiB7fSB9OwogIAlyZXR1cm4gZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzOwogIH0KCiAgdmFyIF90eXBlb2ZfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHsKICBmdW5jdGlvbiBfdHlwZW9mKG9iaikgewogICAgIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mIjsKCiAgICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9ICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiAic3ltYm9sIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgewogICAgICByZXR1cm4gdHlwZW9mIG9iajsKICAgIH0gOiBmdW5jdGlvbiAob2JqKSB7CiAgICAgIHJldHVybiBvYmogJiYgImZ1bmN0aW9uIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/ICJzeW1ib2wiIDogdHlwZW9mIG9iajsKICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1siZGVmYXVsdCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7CiAgfQoKICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1siZGVmYXVsdCJdID0gbW9kdWxlLmV4cG9ydHM7CiAgfSk7CgogIHZhciByZWdlbmVyYXRvclJ1bnRpbWUkMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHsKICB2YXIgX3R5cGVvZiA9IF90eXBlb2ZfMVsiZGVmYXVsdCJdOwoKICBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkgewogICAgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqLwoKICAgIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7CiAgICAgIHJldHVybiBleHBvcnRzOwogICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzWyJkZWZhdWx0Il0gPSBtb2R1bGUuZXhwb3J0czsKICAgIHZhciBleHBvcnRzID0ge30sCiAgICAgICAgT3AgPSBPYmplY3QucHJvdG90eXBlLAogICAgICAgIGhhc093biA9IE9wLmhhc093blByb3BlcnR5LAogICAgICAgICRTeW1ib2wgPSAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wgOiB7fSwKICAgICAgICBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgIkBAaXRlcmF0b3IiLAogICAgICAgIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgIkBAYXN5bmNJdGVyYXRvciIsCiAgICAgICAgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8ICJAQHRvU3RyaW5nVGFnIjsKCiAgICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7CiAgICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsKICAgICAgICB2YWx1ZTogdmFsdWUsCiAgICAgICAgZW51bWVyYWJsZTogITAsCiAgICAgICAgY29uZmlndXJhYmxlOiAhMCwKICAgICAgICB3cml0YWJsZTogITAKICAgICAgfSksIG9ialtrZXldOwogICAgfQoKICAgIHRyeSB7CiAgICAgIGRlZmluZSh7fSwgIiIpOwogICAgfSBjYXRjaCAoZXJyKSB7CiAgICAgIGRlZmluZSA9IGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHsKICAgICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTsKICAgICAgfTsKICAgIH0KCiAgICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7CiAgICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yLAogICAgICAgICAgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpLAogICAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTsKICAgICAgcmV0dXJuIGdlbmVyYXRvci5faW52b2tlID0gZnVuY3Rpb24gKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHsKICAgICAgICB2YXIgc3RhdGUgPSAic3VzcGVuZGVkU3RhcnQiOwogICAgICAgIHJldHVybiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHsKICAgICAgICAgIGlmICgiZXhlY3V0aW5nIiA9PT0gc3RhdGUpIHRocm93IG5ldyBFcnJvcigiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZyIpOwoKICAgICAgICAgIGlmICgiY29tcGxldGVkIiA9PT0gc3RhdGUpIHsKICAgICAgICAgICAgaWYgKCJ0aHJvdyIgPT09IG1ldGhvZCkgdGhyb3cgYXJnOwogICAgICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpOwogICAgICAgICAgfQoKICAgICAgICAgIGZvciAoY29udGV4dC5tZXRob2QgPSBtZXRob2QsIGNvbnRleHQuYXJnID0gYXJnOzspIHsKICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTsKCiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZSkgewogICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpOwoKICAgICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHsKICAgICAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7CiAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CgogICAgICAgICAgICBpZiAoIm5leHQiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKCJ0aHJvdyIgPT09IGNvbnRleHQubWV0aG9kKSB7CiAgICAgICAgICAgICAgaWYgKCJzdXNwZW5kZWRTdGFydCIgPT09IHN0YXRlKSB0aHJvdyBzdGF0ZSA9ICJjb21wbGV0ZWQiLCBjb250ZXh0LmFyZzsKICAgICAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTsKICAgICAgICAgICAgfSBlbHNlICJyZXR1cm4iID09PSBjb250ZXh0Lm1ldGhvZCAmJiBjb250ZXh0LmFicnVwdCgicmV0dXJuIiwgY29udGV4dC5hcmcpOwogICAgICAgICAgICBzdGF0ZSA9ICJleGVjdXRpbmciOwogICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7CgogICAgICAgICAgICBpZiAoIm5vcm1hbCIgPT09IHJlY29yZC50eXBlKSB7CiAgICAgICAgICAgICAgaWYgKHN0YXRlID0gY29udGV4dC5kb25lID8gImNvbXBsZXRlZCIgOiAic3VzcGVuZGVkWWllbGQiLCByZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTsKICAgICAgICAgICAgICByZXR1cm4gewogICAgICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsCiAgICAgICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmUKICAgICAgICAgICAgICB9OwogICAgICAgICAgICB9CgogICAgICAgICAgICAidGhyb3ciID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSAiY29tcGxldGVkIiwgY29udGV4dC5tZXRob2QgPSAidGhyb3ciLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcpOwogICAgICAgICAgfQogICAgICAgIH07CiAgICAgIH0oaW5uZXJGbiwgc2VsZiwgY29udGV4dCksIGdlbmVyYXRvcjsKICAgIH0KCiAgICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHsKICAgICAgdHJ5IHsKICAgICAgICByZXR1cm4gewogICAgICAgICAgdHlwZTogIm5vcm1hbCIsCiAgICAgICAgICBhcmc6IGZuLmNhbGwob2JqLCBhcmcpCiAgICAgICAgfTsKICAgICAgfSBjYXRjaCAoZXJyKSB7CiAgICAgICAgcmV0dXJuIHsKICAgICAgICAgIHR5cGU6ICJ0aHJvdyIsCiAgICAgICAgICBhcmc6IGVycgogICAgICAgIH07CiAgICAgIH0KICAgIH0KCiAgICBleHBvcnRzLndyYXAgPSB3cmFwOwogICAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTsKCiAgICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fQoKICAgIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge30KCiAgICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9CgogICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307CiAgICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfSk7CiAgICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsCiAgICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7CiAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7CiAgICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7CgogICAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkgewogICAgICBbIm5leHQiLCAidGhyb3ciLCAicmV0dXJuIl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7CiAgICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTsKICAgICAgICB9KTsKICAgICAgfSk7CiAgICB9CgogICAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7CiAgICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7CiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7CgogICAgICAgIGlmICgidGhyb3ciICE9PSByZWNvcmQudHlwZSkgewogICAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmcsCiAgICAgICAgICAgICAgdmFsdWUgPSByZXN1bHQudmFsdWU7CiAgICAgICAgICByZXR1cm4gdmFsdWUgJiYgIm9iamVjdCIgPT0gX3R5cGVvZih2YWx1ZSkgJiYgaGFzT3duLmNhbGwodmFsdWUsICJfX2F3YWl0IikgPyBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7CiAgICAgICAgICAgIGludm9rZSgibmV4dCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpOwogICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikgewogICAgICAgICAgICBpbnZva2UoInRocm93IiwgZXJyLCByZXNvbHZlLCByZWplY3QpOwogICAgICAgICAgfSkgOiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh1bndyYXBwZWQpIHsKICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkLCByZXNvbHZlKHJlc3VsdCk7CiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHsKICAgICAgICAgICAgcmV0dXJuIGludm9rZSgidGhyb3ciLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0KCiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpOwogICAgICB9CgogICAgICB2YXIgcHJldmlvdXNQcm9taXNlOwoKICAgICAgdGhpcy5faW52b2tlID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7CiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7CiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsKICAgICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpOwogICAgICAgICAgfSk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7CiAgICAgIH07CiAgICB9CgogICAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkgewogICAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdOwoKICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSB7CiAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCAidGhyb3ciID09PSBjb250ZXh0Lm1ldGhvZCkgewogICAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yWyJyZXR1cm4iXSAmJiAoY29udGV4dC5tZXRob2QgPSAicmV0dXJuIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQsIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpLCAidGhyb3ciID09PSBjb250ZXh0Lm1ldGhvZCkpIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgICAgICAgY29udGV4dC5tZXRob2QgPSAidGhyb3ciLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2QiKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgICB9CgogICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpOwogICAgICBpZiAoInRocm93IiA9PT0gcmVjb3JkLnR5cGUpIHJldHVybiBjb250ZXh0Lm1ldGhvZCA9ICJ0aHJvdyIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZywgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWw7CiAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZzsKICAgICAgcmV0dXJuIGluZm8gPyBpbmZvLmRvbmUgPyAoY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWUsIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2MsICJyZXR1cm4iICE9PSBjb250ZXh0Lm1ldGhvZCAmJiAoY29udGV4dC5tZXRob2QgPSAibmV4dCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpIDogaW5mbyA6IChjb250ZXh0Lm1ldGhvZCA9ICJ0aHJvdyIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcigiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3QiKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpOwogICAgfQoKICAgIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7CiAgICAgIHZhciBlbnRyeSA9IHsKICAgICAgICB0cnlMb2M6IGxvY3NbMF0KICAgICAgfTsKICAgICAgMSBpbiBsb2NzICYmIChlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV0pLCAyIGluIGxvY3MgJiYgKGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdLCBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7CiAgICB9CgogICAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkgewogICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTsKICAgICAgcmVjb3JkLnR5cGUgPSAibm9ybWFsIiwgZGVsZXRlIHJlY29yZC5hcmcsIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7CiAgICB9CgogICAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkgewogICAgICB0aGlzLnRyeUVudHJpZXMgPSBbewogICAgICAgIHRyeUxvYzogInJvb3QiCiAgICAgIH1dLCB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApOwogICAgfQoKICAgIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkgewogICAgICBpZiAoaXRlcmFibGUpIHsKICAgICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07CiAgICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7CiAgICAgICAgaWYgKCJmdW5jdGlvbiIgPT0gdHlwZW9mIGl0ZXJhYmxlLm5leHQpIHJldHVybiBpdGVyYWJsZTsKCiAgICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7CiAgICAgICAgICB2YXIgaSA9IC0xLAogICAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkgewogICAgICAgICAgICBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykgewogICAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHJldHVybiBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV0sIG5leHQuZG9uZSA9ICExLCBuZXh0OwogICAgICAgICAgICB9CgogICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCwgbmV4dC5kb25lID0gITAsIG5leHQ7CiAgICAgICAgICB9OwoKICAgICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0OwogICAgICAgIH0KICAgICAgfQoKICAgICAgcmV0dXJuIHsKICAgICAgICBuZXh0OiBkb25lUmVzdWx0CiAgICAgIH07CiAgICB9CgogICAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHsKICAgICAgcmV0dXJuIHsKICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLAogICAgICAgIGRvbmU6ICEwCiAgICAgIH07CiAgICB9CgogICAgcmV0dXJuIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoR3AsICJjb25zdHJ1Y3RvciIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSwgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCAiY29uc3RydWN0b3IiLCBHZW5lcmF0b3JGdW5jdGlvbiksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB0b1N0cmluZ1RhZ1N5bWJvbCwgIkdlbmVyYXRvckZ1bmN0aW9uIiksIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChnZW5GdW4pIHsKICAgICAgdmFyIGN0b3IgPSAiZnVuY3Rpb24iID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yOwogICAgICByZXR1cm4gISFjdG9yICYmIChjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCAiR2VuZXJhdG9yRnVuY3Rpb24iID09PSAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpKTsKICAgIH0sIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uIChnZW5GdW4pIHsKICAgICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6IChnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCAiR2VuZXJhdG9yRnVuY3Rpb24iKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuOwogICAgfSwgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uIChhcmcpIHsKICAgICAgcmV0dXJuIHsKICAgICAgICBfX2F3YWl0OiBhcmcKICAgICAgfTsKICAgIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSksIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkgewogICAgICByZXR1cm4gdGhpczsKICAgIH0pLCBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkgewogICAgICB2b2lkIDAgPT09IFByb21pc2VJbXBsICYmIChQcm9taXNlSW1wbCA9IFByb21pc2UpOwogICAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLCBQcm9taXNlSW1wbCk7CiAgICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7CiAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7CiAgICAgIH0pOwogICAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKSwgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgIkdlbmVyYXRvciIpLCBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfSksIGRlZmluZShHcCwgInRvU3RyaW5nIiwgZnVuY3Rpb24gKCkgewogICAgICByZXR1cm4gIltvYmplY3QgR2VuZXJhdG9yXSI7CiAgICB9KSwgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24gKG9iamVjdCkgewogICAgICB2YXIga2V5cyA9IFtdOwoKICAgICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkgewogICAgICAgIGtleXMucHVzaChrZXkpOwogICAgICB9CgogICAgICByZXR1cm4ga2V5cy5yZXZlcnNlKCksIGZ1bmN0aW9uIG5leHQoKSB7CiAgICAgICAgZm9yICg7IGtleXMubGVuZ3RoOykgewogICAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7CiAgICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkgcmV0dXJuIG5leHQudmFsdWUgPSBrZXksIG5leHQuZG9uZSA9ICExLCBuZXh0OwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0OwogICAgICB9OwogICAgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0gewogICAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCwKICAgICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHsKICAgICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9ICJuZXh0IiwgdGhpcy5hcmcgPSB1bmRlZmluZWQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhc2tpcFRlbXBSZXNldCkgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7CiAgICAgICAgICAidCIgPT09IG5hbWUuY2hhckF0KDApICYmIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmICFpc05hTigrbmFtZS5zbGljZSgxKSkgJiYgKHRoaXNbbmFtZV0gPSB1bmRlZmluZWQpOwogICAgICAgIH0KICAgICAgfSwKICAgICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHsKICAgICAgICB0aGlzLmRvbmUgPSAhMDsKICAgICAgICB2YXIgcm9vdFJlY29yZCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uOwogICAgICAgIGlmICgidGhyb3ciID09PSByb290UmVjb3JkLnR5cGUpIHRocm93IHJvb3RSZWNvcmQuYXJnOwogICAgICAgIHJldHVybiB0aGlzLnJ2YWw7CiAgICAgIH0sCiAgICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihleGNlcHRpb24pIHsKICAgICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBleGNlcHRpb247CiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzOwoKICAgICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHsKICAgICAgICAgIHJldHVybiByZWNvcmQudHlwZSA9ICJ0aHJvdyIsIHJlY29yZC5hcmcgPSBleGNlcHRpb24sIGNvbnRleHQubmV4dCA9IGxvYywgY2F1Z2h0ICYmIChjb250ZXh0Lm1ldGhvZCA9ICJuZXh0IiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCAhIWNhdWdodDsKICAgICAgICB9CgogICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsKICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXSwKICAgICAgICAgICAgICByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uOwogICAgICAgICAgaWYgKCJyb290IiA9PT0gZW50cnkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKCJlbmQiKTsKCiAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikgewogICAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgImNhdGNoTG9jIiksCiAgICAgICAgICAgICAgICBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksICJmaW5hbGx5TG9jIik7CgogICAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkgewogICAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApOwogICAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpOwogICAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7CiAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5Iik7CiAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0sCiAgICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykgewogICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsKICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTsKCiAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgImZpbmFsbHlMb2MiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7CiAgICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICBmaW5hbGx5RW50cnkgJiYgKCJicmVhayIgPT09IHR5cGUgfHwgImNvbnRpbnVlIiA9PT0gdHlwZSkgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jICYmIChmaW5hbGx5RW50cnkgPSBudWxsKTsKICAgICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTsKICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSB0eXBlLCByZWNvcmQuYXJnID0gYXJnLCBmaW5hbGx5RW50cnkgPyAodGhpcy5tZXRob2QgPSAibmV4dCIsIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jLCBDb250aW51ZVNlbnRpbmVsKSA6IHRoaXMuY29tcGxldGUocmVjb3JkKTsKICAgICAgfSwKICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHJlY29yZCwgYWZ0ZXJMb2MpIHsKICAgICAgICBpZiAoInRocm93IiA9PT0gcmVjb3JkLnR5cGUpIHRocm93IHJlY29yZC5hcmc7CiAgICAgICAgcmV0dXJuICJicmVhayIgPT09IHJlY29yZC50eXBlIHx8ICJjb250aW51ZSIgPT09IHJlY29yZC50eXBlID8gdGhpcy5uZXh0ID0gcmVjb3JkLmFyZyA6ICJyZXR1cm4iID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gInJldHVybiIsIHRoaXMubmV4dCA9ICJlbmQiKSA6ICJub3JtYWwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsOwogICAgICB9LAogICAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7CiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgewogICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOwogICAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHJldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShlbnRyeSksIENvbnRpbnVlU2VudGluZWw7CiAgICAgICAgfQogICAgICB9LAogICAgICAiY2F0Y2giOiBmdW5jdGlvbiBfY2F0Y2godHJ5TG9jKSB7CiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgewogICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOwoKICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykgewogICAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjsKCiAgICAgICAgICAgIGlmICgidGhyb3ciID09PSByZWNvcmQudHlwZSkgewogICAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnOwogICAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpOwogICAgICAgICAgICB9CgogICAgICAgICAgICByZXR1cm4gdGhyb3duOwogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHQiKTsKICAgICAgfSwKICAgICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykgewogICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0gewogICAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksCiAgICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLAogICAgICAgICAgbmV4dExvYzogbmV4dExvYwogICAgICAgIH0sICJuZXh0IiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdW5kZWZpbmVkKSwgQ29udGludWVTZW50aW5lbDsKICAgICAgfQogICAgfSwgZXhwb3J0czsKICB9CgogIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzWyJkZWZhdWx0Il0gPSBtb2R1bGUuZXhwb3J0czsKICB9KTsKCiAgdmFyIHJlZ2VuZXJhdG9yID0gcmVnZW5lcmF0b3JSdW50aW1lJDEoKTsKCiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgewogICAgaWYgKGtleSBpbiBvYmopIHsKICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7CiAgICAgICAgdmFsdWU6IHZhbHVlLAogICAgICAgIGVudW1lcmFibGU6IHRydWUsCiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLAogICAgICAgIHdyaXRhYmxlOiB0cnVlCiAgICAgIH0pOwogICAgfSBlbHNlIHsKICAgICAgb2JqW2tleV0gPSB2YWx1ZTsKICAgIH0KCiAgICByZXR1cm4gb2JqOwogIH0KCiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgewogICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsKICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uIik7CiAgICB9CiAgfQoKICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7CiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7CiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07CiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsKICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOwogICAgICBpZiAoInZhbHVlIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsKICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOwogICAgfQogIH0KCiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgewogICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7CiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7CiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsICJwcm90b3R5cGUiLCB7CiAgICAgIHdyaXRhYmxlOiBmYWxzZQogICAgfSk7CiAgICByZXR1cm4gQ29uc3RydWN0b3I7CiAgfQoKICBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsKICAgIGlmIChzZWxmID09PSB2b2lkIDApIHsKICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWQiKTsKICAgIH0KCiAgICByZXR1cm4gc2VsZjsKICB9CgogIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7CiAgICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsKICAgICAgby5fX3Byb3RvX18gPSBwOwogICAgICByZXR1cm4gbzsKICAgIH07CgogICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsKICB9CgogIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgewogICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAiZnVuY3Rpb24iICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsKICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24iKTsKICAgIH0KCiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsKICAgICAgY29uc3RydWN0b3I6IHsKICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsCiAgICAgICAgd3JpdGFibGU6IHRydWUsCiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlCiAgICAgIH0KICAgIH0pOwogICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCAicHJvdG90eXBlIiwgewogICAgICB3cml0YWJsZTogZmFsc2UKICAgIH0pOwogICAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7CiAgfQoKICBmdW5jdGlvbiBfdHlwZW9mKG9iaikgewogICAgIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mIjsKCiAgICByZXR1cm4gX3R5cGVvZiA9ICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiAic3ltYm9sIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgewogICAgICByZXR1cm4gdHlwZW9mIG9iajsKICAgIH0gOiBmdW5jdGlvbiAob2JqKSB7CiAgICAgIHJldHVybiBvYmogJiYgImZ1bmN0aW9uIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/ICJzeW1ib2wiIDogdHlwZW9mIG9iajsKICAgIH0sIF90eXBlb2Yob2JqKTsKICB9CgogIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsKICAgIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSAib2JqZWN0IiB8fCB0eXBlb2YgY2FsbCA9PT0gImZ1bmN0aW9uIikpIHsKICAgICAgcmV0dXJuIGNhbGw7CiAgICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgewogICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZCIpOwogICAgfQoKICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOwogIH0KCiAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsKICAgIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7CiAgICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7CiAgICB9OwogICAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsKICB9CgogIGZ1bmN0aW9uIG93bktleXMkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH0KCiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQxKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH0KCiAgLyoNCiAgICBDb3B5cmlnaHQgMjAyMiBQaWNvdm9pY2UgSW5jLg0KCiAgICBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIGxpY2Vuc2UuIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBsb2NhdGVkIGluIHRoZSAiTElDRU5TRSINCiAgICBmaWxlIGFjY29tcGFueWluZyB0aGlzIHNvdXJjZS4NCgogICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbg0KICAgIGFuICJBUyBJUyIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZQ0KICAgIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuDQogICovCgogIC8qKg0KICAgKiBCYXNlUHZGaWxlIENsYXNzDQogICAqIFRoaXMgY2xhc3MgbW9ja3MgdGhlIGZpbGUgc3lzdGVtIHVzaW5nIGluLW1lbW9yeSBzdG9yYWdlLg0KICAgKi8KICB2YXIgUHZGaWxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgIGZ1bmN0aW9uIFB2RmlsZSgpIHsKICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFB2RmlsZSk7CgogICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgIl9wYXRoIiwgdm9pZCAwKTsKCiAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAiX21ldGEiLCB2b2lkIDApOwogICAgfQoKICAgIF9jcmVhdGVDbGFzcyhQdkZpbGUsIFt7CiAgICAgIGtleTogIm1ldGEiLAogICAgICBnZXQ6CiAgICAgIC8qKg0KICAgICAgICogR2V0dGVyIGZvciBmaWxlJ3MgbWV0YSBpbmZvcm1hdGlvbi4NCiAgICAgICAqLwogICAgICBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgaWYgKHRoaXMuX21ldGEgPT09IHVuZGVmaW5lZCkgewogICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsKICAgICAgICB9CgogICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDEoewogICAgICAgICAgdmVyc2lvbjogMAogICAgICAgIH0sIHRoaXMuX21ldGEpOwogICAgICB9CiAgICAgIC8qKg0KICAgICAgICogR2V0IHRoZSBmaWxlIHBvaW50ZXIgZnJvbSB0aGUgX2ZpbGVQdHJzIG1hcC4NCiAgICAgICAqIEBwYXJhbSBwdHIgVGhlIHBvaW50ZXIgdG8gQmFzZVB2RmlsZSBpbnN0YW5jZSB0byBnZXQgZnJvbSB0aGUgbWFwLg0KICAgICAgICogQHJldHVybnMgQmFzZVB2RmlsZSByZXR1cm5zIHRoZSBjdXJyZW50IGZpbGUgaW5zdGFuY2UgcmVsYXRlZCB0byBwdHIuDQogICAgICAgKi8KCiAgICB9XSwgW3sKICAgICAga2V5OiAiZ2V0UHRyIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFB0cihwdHIpIHsKICAgICAgICByZXR1cm4gUHZGaWxlLl9maWxlUHRycy5nZXQocHRyKTsKICAgICAgfQogICAgICAvKioNCiAgICAgICAqIFNhdmVzIHRoZSBCYXNlUHZGaWxlIGluc3RhbmNlIHRvIHRoZSBtYXAgd2l0aCBhbiBhc3NvY2lhdGVkIHB0ci4NCiAgICAgICAqIEBwYXJhbSBwdHIgVGhlIGZpbGUgcG9pbnRlciB0byBzYXZlIGFzIHRoZSBrZXkuDQogICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIEJhc2VQdkZpbGUgaW5zdGFuY2UgdG8gc2F2ZSBhcyB0aGUgdmFsdWUuDQogICAgICAgKi8KCiAgICB9LCB7CiAgICAgIGtleTogInNldFB0ciIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQdHIocHRyLCBpbnN0YW5jZSkgewogICAgICAgIFB2RmlsZS5fZmlsZVB0cnMuc2V0KHB0ciwgaW5zdGFuY2UpOwogICAgICB9CiAgICAgIC8qKg0KICAgICAgICogUmVtb3ZlcyB0aGUgcHRyIGZyb20gdGhlIF9maWxlUHRycyBtYXAuDQogICAgICAgKiBAcGFyYW0gcHRyIFRoZSBmaWxlIHBvaW50ZXIgdG8gcmVtb3ZlLg0KICAgICAgICovCgogICAgfSwgewogICAgICBrZXk6ICJyZW1vdmVQdHIiLAogICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlUHRyKHB0cikgewogICAgICAgIFB2RmlsZS5fZmlsZVB0cnNbImRlbGV0ZSJdKHB0cik7CiAgICAgIH0KICAgIH1dKTsKCiAgICByZXR1cm4gUHZGaWxlOwogIH0oKTsKCiAgX2RlZmluZVByb3BlcnR5KFB2RmlsZSwgIl9maWxlUHRycyIsIG5ldyBNYXAoKSk7CgogIGZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9CgogIGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gInVuZGVmaW5lZCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09ICJmdW5jdGlvbiIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9CiAgLyoqDQogICAqIFB2RmlsZU1lbSBDbGFzcw0KICAgKiBUaGlzIGNsYXNzIG1vY2tzIHRoZSBmaWxlIHN5c3RlbSB1c2luZyBpbi1tZW1vcnkgc3RvcmFnZS4NCiAgICovCgogIHZhciBQdkZpbGVNZW0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QdkZpbGUpIHsKICAgIF9pbmhlcml0cyhQdkZpbGVNZW0sIF9QdkZpbGUpOwoKICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUHZGaWxlTWVtKTsKCiAgICBmdW5jdGlvbiBQdkZpbGVNZW0ocGF0aCwgbWV0YSwgZGIsIG1vZGUpIHsKICAgICAgdmFyIF90aGlzOwoKICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFB2RmlsZU1lbSk7CgogICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpOwoKICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAiX3BvcyIsIDApOwoKICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAiX21vZGUiLCB2b2lkIDApOwoKICAgICAgX3RoaXMuX3BhdGggPSBwYXRoOwogICAgICBfdGhpcy5fbWV0YSA9IG1ldGE7CiAgICAgIF90aGlzLl9tb2RlID0gbW9kZTsKICAgICAgcmV0dXJuIF90aGlzOwogICAgfQoKICAgIF9jcmVhdGVDbGFzcyhQdkZpbGVNZW0sIFt7CiAgICAgIGtleTogImNsb3NlIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkgewogICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSwgewogICAgICBrZXk6ICJyZWFkIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWQoc2l6ZSwgY291bnQpIHsKICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHsKICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiJyIuY29uY2F0KHRoaXMuX3BhdGgsICInIGRvZXNuJ3QgZXhpc3QuIikpOwogICAgICAgIH0KCiAgICAgICAgaWYgKHRoaXMuX2lzRU9GKSB7CiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCJFT0YiKTsKICAgICAgICAgIGVyci5uYW1lID0gIkVuZE9mRmlsZSI7CiAgICAgICAgICB0aHJvdyBlcnI7CiAgICAgICAgfQoKICAgICAgICB2YXIgdG9Db3B5ID0gTWF0aC5taW4oc2l6ZSAqIGNvdW50LCB0aGlzLl9maWxlLmxlbmd0aCAtIHRoaXMuX3Bvcyk7CiAgICAgICAgdmFyIHRvdGFsRWxlbXMgPSB0b0NvcHkgLSB0b0NvcHkgJSBzaXplOwogICAgICAgIHZhciBidWZmZXIgPSBuZXcgVWludDhBcnJheSh0b3RhbEVsZW1zKTsKICAgICAgICBidWZmZXIuc2V0KHRoaXMuX2ZpbGUuc2xpY2UodGhpcy5fcG9zLCB0aGlzLl9wb3MgKyB0b3RhbEVsZW1zKSwgMCk7CiAgICAgICAgdGhpcy5fcG9zICs9IHRvdGFsRWxlbXM7CiAgICAgICAgcmV0dXJuIGJ1ZmZlcjsKICAgICAgfQogICAgfSwgewogICAgICBrZXk6ICJ3cml0ZSIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiB3cml0ZShjb250ZW50KSB7CiAgICAgICAgdmFyIG5ld0ZpbGUgPSBuZXcgVWludDhBcnJheSh0aGlzLl9wb3MgKyBjb250ZW50Lmxlbmd0aCk7CgogICAgICAgIGlmICh0aGlzLl9maWxlICE9PSB1bmRlZmluZWQpIHsKICAgICAgICAgIG5ld0ZpbGUuc2V0KHRoaXMuX2ZpbGUuc2xpY2UoMCwgdGhpcy5fcG9zKSk7CiAgICAgICAgICBuZXdGaWxlLnNldChjb250ZW50LCB0aGlzLl9wb3MpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBuZXdGaWxlLnNldChjb250ZW50KTsKICAgICAgICB9CgogICAgICAgIHRoaXMuX2ZpbGUgPSBuZXdGaWxlOwogICAgICAgIHRoaXMuX3BvcyArPSBjb250ZW50Lmxlbmd0aDsKICAgICAgfQogICAgfSwgewogICAgICBrZXk6ICJzZWVrIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlZWsob2Zmc2V0LCB3aGVuY2UpIHsKICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkgJiYgdGhpcy5fbW9kZSA9PT0gInJlYWRvbmx5IikgewogICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCInIi5jb25jYXQodGhpcy5fcGF0aCwgIicgZG9lc24ndCBleGlzdC4iKSk7CiAgICAgICAgfQoKICAgICAgICBpZiAob2Zmc2V0IDwgMCkgewogICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcigiRU9GIik7CiAgICAgICAgICBlcnIubmFtZSA9ICJFbmRPZkZpbGUiOwogICAgICAgICAgdGhyb3cgZXJyOwogICAgICAgIH0KCiAgICAgICAgdmFyIG5ld09mZnNldDsKCiAgICAgICAgaWYgKHdoZW5jZSA9PT0gMCkgewogICAgICAgICAgbmV3T2Zmc2V0ID0gTWF0aC5taW4ob2Zmc2V0LCB0aGlzLl9maWxlLmxlbmd0aCk7CiAgICAgICAgfSBlbHNlIGlmICh3aGVuY2UgPT09IDEpIHsKICAgICAgICAgIG5ld09mZnNldCA9IE1hdGgubWluKHRoaXMuX3BvcyArIG9mZnNldCwgdGhpcy5fZmlsZS5sZW5ndGgpOwogICAgICAgIH0gZWxzZSBpZiAod2hlbmNlID09PSAyKSB7CiAgICAgICAgICBuZXdPZmZzZXQgPSBNYXRoLm1pbih0aGlzLl9maWxlLmxlbmd0aCArIG9mZnNldCwgdGhpcy5fZmlsZS5sZW5ndGgpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkludmFsaWQgb3BlcmF0aW9uOiAiLmNvbmNhdCh3aGVuY2UsICIuIikpOwogICAgICAgIH0KCiAgICAgICAgdGhpcy5fcG9zID0gbmV3T2Zmc2V0OwogICAgICB9CiAgICB9LCB7CiAgICAgIGtleTogInRlbGwiLAogICAgICB2YWx1ZTogZnVuY3Rpb24gdGVsbCgpIHsKICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHsKICAgICAgICAgIHJldHVybiAtMTsKICAgICAgICB9CgogICAgICAgIHJldHVybiB0aGlzLl9wb3M7CiAgICAgIH0KICAgIH0sIHsKICAgICAga2V5OiAicmVtb3ZlIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICB2YXIgX3JlbW92ZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3IubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkgewogICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHsKICAgICAgICAgICAgd2hpbGUgKDEpIHsKICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7CiAgICAgICAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgICAgICAgIFB2RmlsZU1lbS5fbWVtRmlsZXNbImRlbGV0ZSJdKHRoaXMuX3BhdGgpOwoKICAgICAgICAgICAgICAgICAgdGhpcy5fZmlsZSA9IHVuZGVmaW5lZDsKICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zID0gMDsKCiAgICAgICAgICAgICAgICBjYXNlIDM6CiAgICAgICAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7CiAgICAgICAgfSkpOwoKICAgICAgICBmdW5jdGlvbiByZW1vdmUoKSB7CiAgICAgICAgICByZXR1cm4gX3JlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHJlbW92ZTsKICAgICAgfSgpCiAgICB9LCB7CiAgICAgIGtleTogImV4aXN0cyIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiBleGlzdHMoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbGUgIT09IHVuZGVmaW5lZDsKICAgICAgfQogICAgfSwgewogICAgICBrZXk6ICJfaXNFT0YiLAogICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5fcG9zID49IHRoaXMuX2ZpbGUubGVuZ3RoOwogICAgICB9CiAgICB9LCB7CiAgICAgIGtleTogIl9maWxlIiwKICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgcmV0dXJuIFB2RmlsZU1lbS5fbWVtRmlsZXMuZ2V0KHRoaXMuX3BhdGgpOwogICAgICB9LAogICAgICBzZXQ6IGZ1bmN0aW9uIHNldChjb250ZW50KSB7CiAgICAgICAgUHZGaWxlTWVtLl9tZW1GaWxlcy5zZXQodGhpcy5fcGF0aCwgY29udGVudCk7CiAgICAgIH0KICAgIH1dLCBbewogICAgICBrZXk6ICJvcGVuIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4ocGF0aCwgbW9kZSkgewogICAgICAgIHZhciBmaWxlID0gUHZGaWxlTWVtLl9tZW1GaWxlcy5nZXQocGF0aCk7CgogICAgICAgIHZhciBkYk1vZGUgPSBtb2RlLmluY2x1ZGVzKCdyJykgPyAicmVhZG9ubHkiIDogInJlYWR3cml0ZSI7CgogICAgICAgIGlmIChmaWxlID09PSB1bmRlZmluZWQgJiYgZGJNb2RlID09PSAicmVhZG9ubHkiKSB7CiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIiciLmNvbmNhdChwYXRoLCAiJyBkb2Vzbid0IGV4aXN0LiIpKTsKICAgICAgICB9CgogICAgICAgIHZhciBmaWxlTWVtID0gbmV3IFB2RmlsZU1lbShwYXRoLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZGJNb2RlKTsKCiAgICAgICAgaWYgKG1vZGUuaW5jbHVkZXMoJ2EnKSkgewogICAgICAgICAgZmlsZU1lbS5zZWVrKDAsIDIpOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIGZpbGVNZW07CiAgICAgIH0KICAgIH1dKTsKCiAgICByZXR1cm4gUHZGaWxlTWVtOwogIH0oUHZGaWxlKTsKCiAgX2RlZmluZVByb3BlcnR5KFB2RmlsZU1lbSwgIl9tZW1GaWxlcyIsIG5ldyBNYXAoKSk7CiAgLyoqDQogICAqIENvbnZlcnQgYSBudWxsIHRlcm1pbmF0ZWQgcGhyYXNlIHN0b3JlZCBpbnNpZGUgYW4gYXJyYXkgYnVmZmVyIHRvIGEgc3RyaW5nDQogICAqDQogICAqIEBwYXJhbSBhcnJheUJ1ZmZlciBpbnB1dCBhcnJheSBidWZmZXINCiAgICogQHBhcmFtIGluZGV4U3RhcnQgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBwaHJhc2UgaXMgc3RvcmVkDQogICAqIEByZXR1cm4gcmV0cmlldmVkIHN0cmluZw0KICAgKi8KCiAgZnVuY3Rpb24gYXJyYXlCdWZmZXJUb1N0cmluZ0F0SW5kZXgoYXJyYXlCdWZmZXIsIGluZGV4U3RhcnQpIHsKICAgIHZhciBpbmRleEVuZCA9IGluZGV4U3RhcnQ7CgogICAgd2hpbGUgKGFycmF5QnVmZmVyW2luZGV4RW5kXSAhPT0gMCkgewogICAgICBpbmRleEVuZCsrOwogICAgfQoKICAgIHZhciB1dGY4ZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKTsKICAgIHJldHVybiB1dGY4ZGVjb2Rlci5kZWNvZGUoYXJyYXlCdWZmZXIuc3ViYXJyYXkoaW5kZXhTdGFydCwgaW5kZXhFbmQpKTsKICB9CiAgLyoqDQogICAqIERlY29kZSBhIGJhc2U2NCBzdHJpbmcgYW5kIHN0b3JlZCBpdCBpbiBhIFVpbnQ4QXJyYXkgYXJyYXkNCiAgICoNCiAgICogQHBhcmFtIGJhc2U2NFN0cmluZyBpbnB1dCBiYXNlNjQgc3RyaW5nDQogICAqIEByZXR1cm4gZGVjb2RlZCBhcnJheQ0KICAgKi8KCiAgZnVuY3Rpb24gYmFzZTY0VG9VaW50OEFycmF5KGJhc2U2NFN0cmluZykgewogICAgdmFyIGJhc2U2NFN0cmluZ0RlY29kZWQgPSBhdG9iKGJhc2U2NFN0cmluZyk7CiAgICB2YXIgYmluYXJ5QXJyYXkgPSBuZXcgVWludDhBcnJheShiYXNlNjRTdHJpbmdEZWNvZGVkLmxlbmd0aCk7CgogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiYXNlNjRTdHJpbmdEZWNvZGVkLmxlbmd0aDsgaSsrKSB7CiAgICAgIGJpbmFyeUFycmF5W2ldID0gYmFzZTY0U3RyaW5nRGVjb2RlZC5jaGFyQ29kZUF0KGkpOwogICAgfQoKICAgIHJldHVybiBiaW5hcnlBcnJheTsKICB9CgogIC8qDQogICAgICBDb3B5cmlnaHQgMjAyMSBQaWNvdm9pY2UgSW5jLg0KCiAgICAgIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgbGljZW5zZS4gQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGxvY2F0ZWQgaW4gdGhlICJMSUNFTlNFIg0KICAgICAgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBzb3VyY2UuDQoKICAgICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbg0KICAgICAgYW4gIkFTIElTIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlDQogICAgICBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLg0KICAqLwogIC8qIGVzbGludCBjYW1lbGNhc2U6IDAsIGFycm93LWJvZHktc3R5bGU6IDAsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyczogMCwgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlczogMCAqLwogIHZhciB3YXNpU25hcHNob3RQcmV2aWV3MUVtdWxhdG9yID0gewogICAgYXJnc19nZXQ6IGZ1bmN0aW9uIGFyZ3NfZ2V0KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGFyZ3Nfc2l6ZXNfZ2V0OiBmdW5jdGlvbiBhcmdzX3NpemVzX2dldChpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBlbnZpcm9uX2dldDogZnVuY3Rpb24gZW52aXJvbl9nZXQoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZW52aXJvbl9zaXplc19nZXQ6IGZ1bmN0aW9uIGVudmlyb25fc2l6ZXNfZ2V0KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGNsb2NrX3Jlc19nZXQ6IGZ1bmN0aW9uIGNsb2NrX3Jlc19nZXQoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgY2xvY2tfdGltZV9nZXQ6IGZ1bmN0aW9uIGNsb2NrX3RpbWVfZ2V0KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX2FkdmlzZTogZnVuY3Rpb24gZmRfYWR2aXNlKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX2FsbG9jYXRlOiBmdW5jdGlvbiBmZF9hbGxvY2F0ZShpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF9jbG9zZTogZnVuY3Rpb24gZmRfY2xvc2UoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfZGF0YXN5bmM6IGZ1bmN0aW9uIGZkX2RhdGFzeW5jKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX2Zkc3RhdF9nZXQ6IGZ1bmN0aW9uIGZkX2Zkc3RhdF9nZXQoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfZmRzdGF0X3NldF9mbGFnczogZnVuY3Rpb24gZmRfZmRzdGF0X3NldF9mbGFncyhpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF9mZHN0YXRfc2V0X3JpZ2h0czogZnVuY3Rpb24gZmRfZmRzdGF0X3NldF9yaWdodHMoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfZmlsZXN0YXRfZ2V0OiBmdW5jdGlvbiBmZF9maWxlc3RhdF9nZXQoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfZmlsZXN0YXRfc2V0X3NpemU6IGZ1bmN0aW9uIGZkX2ZpbGVzdGF0X3NldF9zaXplKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX2ZpbGVzdGF0X3NldF90aW1lczogZnVuY3Rpb24gZmRfZmlsZXN0YXRfc2V0X3RpbWVzKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX3ByZWFkOiBmdW5jdGlvbiBmZF9wcmVhZChpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF9wcmVzdGF0X2dldDogZnVuY3Rpb24gZmRfcHJlc3RhdF9nZXQoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfcHJlc3RhdF9kaXJfbmFtZTogZnVuY3Rpb24gZmRfcHJlc3RhdF9kaXJfbmFtZShpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF9wd3JpdGU6IGZ1bmN0aW9uIGZkX3B3cml0ZShpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF9yZWFkOiBmdW5jdGlvbiBmZF9yZWFkKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX3JlYWRkaXI6IGZ1bmN0aW9uIGZkX3JlYWRkaXIoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfcmVudW1iZXI6IGZ1bmN0aW9uIGZkX3JlbnVtYmVyKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX3NlZWs6IGZ1bmN0aW9uIGZkX3NlZWsoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfc3luYzogZnVuY3Rpb24gZmRfc3luYyhpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF90ZWxsOiBmdW5jdGlvbiBmZF90ZWxsKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX3dyaXRlOiBmdW5jdGlvbiBmZF93cml0ZShpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBwYXRoX2NyZWF0ZV9kaXJlY3Rvcnk6IGZ1bmN0aW9uIHBhdGhfY3JlYXRlX2RpcmVjdG9yeShpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBwYXRoX2ZpbGVzdGF0X2dldDogZnVuY3Rpb24gcGF0aF9maWxlc3RhdF9nZXQoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgcGF0aF9maWxlc3RhdF9zZXRfdGltZXM6IGZ1bmN0aW9uIHBhdGhfZmlsZXN0YXRfc2V0X3RpbWVzKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHBhdGhfbGluazogZnVuY3Rpb24gcGF0aF9saW5rKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHBhdGhfb3BlbjogZnVuY3Rpb24gcGF0aF9vcGVuKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHBhdGhfcmVhZGxpbms6IGZ1bmN0aW9uIHBhdGhfcmVhZGxpbmsoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgcGF0aF9yZW1vdmVfZGlyZWN0b3J5OiBmdW5jdGlvbiBwYXRoX3JlbW92ZV9kaXJlY3RvcnkoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgcGF0aF9yZW5hbWU6IGZ1bmN0aW9uIHBhdGhfcmVuYW1lKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHBhdGhfc3ltbGluazogZnVuY3Rpb24gcGF0aF9zeW1saW5rKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHBhdGhfdW5saW5rX2ZpbGU6IGZ1bmN0aW9uIHBhdGhfdW5saW5rX2ZpbGUoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgcG9sbF9vbmVvZmY6IGZ1bmN0aW9uIHBvbGxfb25lb2ZmKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHByb2NfZXhpdDogZnVuY3Rpb24gcHJvY19leGl0KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHByb2NfcmFpc2U6IGZ1bmN0aW9uIHByb2NfcmFpc2UoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgc2NoZWRfeWllbGQ6IGZ1bmN0aW9uIHNjaGVkX3lpZWxkKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHJhbmRvbV9nZXQ6IGZ1bmN0aW9uIHJhbmRvbV9nZXQoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgc29ja19yZWN2OiBmdW5jdGlvbiBzb2NrX3JlY3YoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgc29ja19zZW5kOiBmdW5jdGlvbiBzb2NrX3NlbmQoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgc29ja19zaHV0ZG93bjogZnVuY3Rpb24gc29ja19zaHV0ZG93bihpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0KICB9OwoKICB2YXIgUFZfU1RBVFVTX1NVQ0NFU1MgPSAxMDAwMDsKICB2YXIgUmVzYW1wbGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgIGZ1bmN0aW9uIFJlc2FtcGxlcihoYW5kbGVXYXNtKSB7CiAgICAgIF9jbGFzc0NhbGxDaGVjayQxKHRoaXMsIFJlc2FtcGxlcik7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKHRoaXMsICJfcHZSZXNhbXBsZXJDb252ZXJ0TnVtU2FtcGxlc1RvSW5wdXRTYW1wbGVSYXRlIiwgdm9pZCAwKTsKICAgICAgX2RlZmluZVByb3BlcnR5JDEodGhpcywgIl9wdlJlc2FtcGxlckNvbnZlcnROdW1TYW1wbGVzVG9PdXRwdXRTYW1wbGVSYXRlIiwgdm9pZCAwKTsKICAgICAgX2RlZmluZVByb3BlcnR5JDEodGhpcywgIl9wdlJlc2FtcGxlckRlbGV0ZSIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKHRoaXMsICJfcHZSZXNhbXBsZXJQcm9jZXNzIiwgdm9pZCAwKTsKICAgICAgX2RlZmluZVByb3BlcnR5JDEodGhpcywgIl9wdlJlc2FtcGxlclJlc2V0Iiwgdm9pZCAwKTsKICAgICAgX2RlZmluZVByb3BlcnR5JDEodGhpcywgIl9jQWxpZ25lZEFsbG9jIiwgdm9pZCAwKTsKICAgICAgX2RlZmluZVByb3BlcnR5JDEodGhpcywgIl9pbnB1dEJ1ZmZlckFkZHJlc3MiLCB2b2lkIDApOwogICAgICBfZGVmaW5lUHJvcGVydHkkMSh0aGlzLCAiX29iamVjdEFkZHJlc3MiLCB2b2lkIDApOwogICAgICBfZGVmaW5lUHJvcGVydHkkMSh0aGlzLCAiX291dHB1dEJ1ZmZlckFkZHJlc3MiLCB2b2lkIDApOwogICAgICBfZGVmaW5lUHJvcGVydHkkMSh0aGlzLCAiX3dhc21NZW1vcnkiLCB2b2lkIDApOwogICAgICBfZGVmaW5lUHJvcGVydHkkMSh0aGlzLCAiX21lbW9yeUJ1ZmZlciIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKHRoaXMsICJfbWVtb3J5QnVmZmVyVmlldyIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKHRoaXMsICJfZnJhbWVMZW5ndGgiLCB2b2lkIDApOwogICAgICBfZGVmaW5lUHJvcGVydHkkMSh0aGlzLCAiX2lucHV0QnVmZmVyTGVuZ3RoIiwgdm9pZCAwKTsKICAgICAgUmVzYW1wbGVyLl92ZXJzaW9uID0gaGFuZGxlV2FzbS52ZXJzaW9uOwogICAgICB0aGlzLl9wdlJlc2FtcGxlckNvbnZlcnROdW1TYW1wbGVzVG9JbnB1dFNhbXBsZVJhdGUgPSBoYW5kbGVXYXNtLnB2UmVzYW1wbGVyQ29udmVydE51bVNhbXBsZXNUb0lucHV0U2FtcGxlUmF0ZTsKICAgICAgdGhpcy5fcHZSZXNhbXBsZXJDb252ZXJ0TnVtU2FtcGxlc1RvT3V0cHV0U2FtcGxlUmF0ZSA9IGhhbmRsZVdhc20ucHZSZXNhbXBsZXJDb252ZXJ0TnVtU2FtcGxlc1RvT3V0cHV0U2FtcGxlUmF0ZTsKICAgICAgdGhpcy5fcHZSZXNhbXBsZXJSZXNldCA9IGhhbmRsZVdhc20ucHZSZXNhbXBsZXJSZXNldDsKICAgICAgdGhpcy5fcHZSZXNhbXBsZXJQcm9jZXNzID0gaGFuZGxlV2FzbS5wdlJlc2FtcGxlclByb2Nlc3M7CiAgICAgIHRoaXMuX3B2UmVzYW1wbGVyRGVsZXRlID0gaGFuZGxlV2FzbS5wdlJlc2FtcGxlckRlbGV0ZTsKICAgICAgdGhpcy5fY0FsaWduZWRBbGxvYyA9IGhhbmRsZVdhc20uY0FsaWduZWRBbGxvYzsKICAgICAgdGhpcy5fd2FzbU1lbW9yeSA9IGhhbmRsZVdhc20ubWVtb3J5OwogICAgICB0aGlzLl9pbnB1dEJ1ZmZlckFkZHJlc3MgPSBoYW5kbGVXYXNtLmlucHV0QnVmZmVyQWRkcmVzczsKICAgICAgdGhpcy5fb2JqZWN0QWRkcmVzcyA9IGhhbmRsZVdhc20ub2JqZWN0QWRkcmVzczsKICAgICAgdGhpcy5fb3V0cHV0QnVmZmVyQWRkcmVzcyA9IGhhbmRsZVdhc20ub3V0cHV0QnVmZmVyQWRkcmVzczsKICAgICAgdGhpcy5fbWVtb3J5QnVmZmVyID0gbmV3IEludDE2QXJyYXkoaGFuZGxlV2FzbS5tZW1vcnkuYnVmZmVyKTsKICAgICAgdGhpcy5fbWVtb3J5QnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhoYW5kbGVXYXNtLm1lbW9yeS5idWZmZXIpOwogICAgICB0aGlzLl9mcmFtZUxlbmd0aCA9IGhhbmRsZVdhc20uZnJhbWVMZW5ndGg7CiAgICAgIHRoaXMuX2lucHV0QnVmZmVyTGVuZ3RoID0gaGFuZGxlV2FzbS5pbnB1dEZyYW1lTGVuZ3RoOwogICAgfQogICAgX2NyZWF0ZUNsYXNzJDEoUmVzYW1wbGVyLCBbewogICAgICBrZXk6ICJwcm9jZXNzIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByb2Nlc3MoaW5wdXRGcmFtZSwgb3V0cHV0QnVmZmVyKSB7CiAgICAgICAgaWYgKGlucHV0RnJhbWUubGVuZ3RoID4gdGhpcy5faW5wdXRCdWZmZXJMZW5ndGgpIHsKICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiSW5wdXRGcmFtZSBsZW5ndGggJyIuY29uY2F0KGlucHV0RnJhbWUubGVuZ3RoLCAiJyBtdXN0IGJlIHNtYWxsZXIgdGhhbiAiKS5jb25jYXQodGhpcy5faW5wdXRCdWZmZXJMZW5ndGgsICIuIikpOwogICAgICAgIH0KICAgICAgICB2YXIgaW5wdXRCdWZmZXIgPSBuZXcgSW50MTZBcnJheShpbnB1dEZyYW1lLmxlbmd0aCk7CiAgICAgICAgaWYgKGlucHV0RnJhbWUuY29uc3RydWN0b3IgPT09IEZsb2F0MzJBcnJheSkgewogICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dEZyYW1lLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIGlmIChpbnB1dEZyYW1lW2ldIDwgMCkgewogICAgICAgICAgICAgIGlucHV0QnVmZmVyW2ldID0gMHg4MDAwICogaW5wdXRGcmFtZVtpXTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpbnB1dEJ1ZmZlcltpXSA9IDB4N2ZmZiAqIGlucHV0RnJhbWVbaV07CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9IGVsc2UgaWYgKGlucHV0RnJhbWUuY29uc3RydWN0b3IgPT09IEludDE2QXJyYXkpIHsKICAgICAgICAgIGlucHV0QnVmZmVyID0gaW5wdXRGcmFtZTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJJbnZhbGlkIGlucHV0RnJhbWUgdHlwZTogIi5jb25jYXQoX3R5cGVvZiQxKGlucHV0RnJhbWUpLCAiLiBFeHBlY3RlZCBGbG9hdDMyQXJyYXkgb3IgSW50MTZBcnJheS4iKSk7CiAgICAgICAgfQogICAgICAgIHRoaXMuX21lbW9yeUJ1ZmZlci5zZXQoaW5wdXRCdWZmZXIsIHRoaXMuX2lucHV0QnVmZmVyQWRkcmVzcyAvIEludDE2QXJyYXkuQllURVNfUEVSX0VMRU1FTlQpOwogICAgICAgIHZhciBwcm9jZXNzZWRTYW1wbGVzID0gdGhpcy5fcHZSZXNhbXBsZXJQcm9jZXNzKHRoaXMuX29iamVjdEFkZHJlc3MsIHRoaXMuX2lucHV0QnVmZmVyQWRkcmVzcywgaW5wdXRGcmFtZS5sZW5ndGgsIHRoaXMuX291dHB1dEJ1ZmZlckFkZHJlc3MpOwogICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBwcm9jZXNzZWRTYW1wbGVzOyBfaSsrKSB7CiAgICAgICAgICBvdXRwdXRCdWZmZXJbX2ldID0gdGhpcy5fbWVtb3J5QnVmZmVyVmlldy5nZXRJbnQxNih0aGlzLl9vdXRwdXRCdWZmZXJBZGRyZXNzICsgX2kgKiBJbnQxNkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCB0cnVlKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFNhbXBsZXM7CiAgICAgIH0KICAgIH0sIHsKICAgICAga2V5OiAicmVzZXQiLAogICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7CiAgICAgICAgdGhpcy5fcHZSZXNhbXBsZXJSZXNldCh0aGlzLl9vYmplY3RBZGRyZXNzKTsKICAgICAgfQogICAgfSwgewogICAgICBrZXk6ICJyZWxlYXNlIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbGVhc2UoKSB7CiAgICAgICAgdGhpcy5fcHZSZXNhbXBsZXJEZWxldGUodGhpcy5fb2JqZWN0QWRkcmVzcyk7CiAgICAgIH0KICAgIH0sIHsKICAgICAga2V5OiAiaW5wdXRCdWZmZXJMZW5ndGgiLAogICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRCdWZmZXJMZW5ndGg7CiAgICAgIH0KICAgIH0sIHsKICAgICAga2V5OiAiZnJhbWVMZW5ndGgiLAogICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5fZnJhbWVMZW5ndGg7CiAgICAgIH0KICAgIH0sIHsKICAgICAga2V5OiAidmVyc2lvbiIsCiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgIHJldHVybiBSZXNhbXBsZXIuX3ZlcnNpb247CiAgICAgIH0KICAgIH0sIHsKICAgICAga2V5OiAiZ2V0TnVtUmVxdWlyZWRJbnB1dFNhbXBsZXMiLAogICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TnVtUmVxdWlyZWRJbnB1dFNhbXBsZXMobnVtU2FtcGxlKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuX3B2UmVzYW1wbGVyQ29udmVydE51bVNhbXBsZXNUb0lucHV0U2FtcGxlUmF0ZSh0aGlzLl9vYmplY3RBZGRyZXNzLCBudW1TYW1wbGUpOwogICAgICB9CiAgICB9LCB7CiAgICAgIGtleTogImdldE51bVJlcXVpcmVkT3V0cHV0U2FtcGxlcyIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXROdW1SZXF1aXJlZE91dHB1dFNhbXBsZXMobnVtU2FtcGxlKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuX3B2UmVzYW1wbGVyQ29udmVydE51bVNhbXBsZXNUb091dHB1dFNhbXBsZVJhdGUodGhpcy5fb2JqZWN0QWRkcmVzcywgbnVtU2FtcGxlKTsKICAgICAgfQogICAgfV0sIFt7CiAgICAgIGtleTogInNldFdhc20iLAogICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0V2FzbSh3YXNtKSB7CiAgICAgICAgaWYgKHRoaXMuX3dhc20gPT09IHVuZGVmaW5lZCkgewogICAgICAgICAgdGhpcy5fd2FzbSA9IHdhc207CiAgICAgICAgfQogICAgICB9CiAgICB9LCB7CiAgICAgIGtleTogImNyZWF0ZSIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgdmFyIF9jcmVhdGUgPSBfYXN5bmNUb0dlbmVyYXRvciQxKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3IkMS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoaW5wdXRGcmVxdWVuY3ksIG91dHB1dEZyZXF1ZW5jeSwgb3JkZXIsIGZyYW1lTGVuZ3RoKSB7CiAgICAgICAgICB2YXIgd2FzbU91dHB1dDsKICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvciQxLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHsKICAgICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHsKICAgICAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjsKICAgICAgICAgICAgICAgIHJldHVybiBSZXNhbXBsZXIuaW5pdFdhc20oaW5wdXRGcmVxdWVuY3ksIG91dHB1dEZyZXF1ZW5jeSwgb3JkZXIsIGZyYW1lTGVuZ3RoKTsKICAgICAgICAgICAgICBjYXNlIDI6CiAgICAgICAgICAgICAgICB3YXNtT3V0cHV0ID0gX2NvbnRleHQuc2VudDsKICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoInJldHVybiIsIG5ldyBSZXNhbXBsZXIod2FzbU91dHB1dCkpOwogICAgICAgICAgICAgIGNhc2UgNDoKICAgICAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSwgX2NhbGxlZSk7CiAgICAgICAgfSkpOwogICAgICAgIGZ1bmN0aW9uIGNyZWF0ZShfeCwgX3gyLCBfeDMsIF94NCkgewogICAgICAgICAgcmV0dXJuIF9jcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGNyZWF0ZTsKICAgICAgfSgpCiAgICB9LCB7CiAgICAgIGtleTogImluaXRXYXNtIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICB2YXIgX2luaXRXYXNtID0gX2FzeW5jVG9HZW5lcmF0b3IkMSggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yJDEubWFyayhmdW5jdGlvbiBfY2FsbGVlMihpbnB1dEZyZXF1ZW5jeSwgb3V0cHV0RnJlcXVlbmN5LCBvcmRlciwgZnJhbWVMZW5ndGgpIHsKICAgICAgICAgIHZhciBtZW1vcnksIG1lbW9yeUJ1ZmZlclVpbnQ4LCBwdkNvbnNvbGVMb2dXYXNtLCBwdkFzc2VydFdhc20sIGltcG9ydE9iamVjdCwgd2FzbUNvZGVBcnJheSwgX3lpZWxkJFdlYkFzc2VtYmx5JGluLCBpbnN0YW5jZSwgY0FsaWduZWRBbGxvYywgcHZSZXNhbXBsZXJJbml0LCBwdlJlc2FtcGxlckNvbnZlcnROdW1TYW1wbGVzVG9JbnB1dFNhbXBsZVJhdGUsIHB2UmVzYW1wbGVyQ29udmVydE51bVNhbXBsZXNUb091dHB1dFNhbXBsZVJhdGUsIHB2UmVzYW1wbGVyVmVyc2lvbiwgb2JqZWN0QWRkcmVzc0FkZHJlc3MsIHN0YXR1cywgdmVyc2lvbkFkZHJlc3MsIHZlcnNpb24sIG1lbW9yeUJ1ZmZlclZpZXcsIG9iamVjdEFkZHJlc3MsIGlucHV0RnJhbWVMZW5ndGgsIGlucHV0QnVmZmVyQWRkcmVzcywgb3V0cHV0QnVmZmVyQWRkcmVzcywgcHZSZXNhbXBsZXJSZXNldCwgcHZSZXNhbXBsZXJQcm9jZXNzLCBwdlJlc2FtcGxlckRlbGV0ZTsKICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvciQxLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0MikgewogICAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7CiAgICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgICAgLy8gQSBXZWJBc3NlbWJseSBwYWdlIGhhcyBhIGNvbnN0YW50IHNpemUgb2YgNjRLaUIuIC0+IDRNaUIgfj0gNjQgcGFnZXMKICAgICAgICAgICAgICAgIC8vIG1pbmltdW0gbWVtb3J5IHJlcXVpcmVtZW50cyBmb3IgaW5pdDogMiBwYWdlcwogICAgICAgICAgICAgICAgbWVtb3J5ID0gbmV3IFdlYkFzc2VtYmx5Lk1lbW9yeSh7CiAgICAgICAgICAgICAgICAgIGluaXRpYWw6IDY0CiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlclVpbnQ4ID0gbmV3IFVpbnQ4QXJyYXkobWVtb3J5LmJ1ZmZlcik7CiAgICAgICAgICAgICAgICBwdkNvbnNvbGVMb2dXYXNtID0gZnVuY3Rpb24gcHZDb25zb2xlTG9nV2FzbShpbmRleCkgewogICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZQogICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheUJ1ZmZlclRvU3RyaW5nQXRJbmRleChtZW1vcnlCdWZmZXJVaW50OCwgaW5kZXgpKTsKICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICBwdkFzc2VydFdhc20gPSBmdW5jdGlvbiBwdkFzc2VydFdhc20oZXhwciwgbGluZSwgZmlsZU5hbWVBZGRyZXNzKSB7CiAgICAgICAgICAgICAgICAgIGlmIChleHByID09PSAwKSB7CiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVOYW1lID0gYXJyYXlCdWZmZXJUb1N0cmluZ0F0SW5kZXgobWVtb3J5QnVmZmVyVWludDgsIGZpbGVOYW1lQWRkcmVzcyk7CiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJhc3NlcnRpb24gZmFpbGVkIGF0IGxpbmUgIi5jb25jYXQobGluZSwgIiBpbiBcIiIpLmNvbmNhdChmaWxlTmFtZSwgIlwiIikpOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgaW1wb3J0T2JqZWN0ID0gewogICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlCiAgICAgICAgICAgICAgICAgIHdhc2lfc25hcHNob3RfcHJldmlldzE6IHdhc2lTbmFwc2hvdFByZXZpZXcxRW11bGF0b3IsCiAgICAgICAgICAgICAgICAgIGVudjogewogICAgICAgICAgICAgICAgICAgIG1lbW9yeTogbWVtb3J5LAogICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UKICAgICAgICAgICAgICAgICAgICBwdl9jb25zb2xlX2xvZ193YXNtOiBwdkNvbnNvbGVMb2dXYXNtLAogICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UKICAgICAgICAgICAgICAgICAgICBwdl9hc3NlcnRfd2FzbTogcHZBc3NlcnRXYXNtCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICB3YXNtQ29kZUFycmF5ID0gYmFzZTY0VG9VaW50OEFycmF5KHRoaXMuX3dhc20pOwogICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA4OwogICAgICAgICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKHdhc21Db2RlQXJyYXksIGltcG9ydE9iamVjdCk7CiAgICAgICAgICAgICAgY2FzZSA4OgogICAgICAgICAgICAgICAgX3lpZWxkJFdlYkFzc2VtYmx5JGluID0gX2NvbnRleHQyLnNlbnQ7CiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IF95aWVsZCRXZWJBc3NlbWJseSRpbi5pbnN0YW5jZTsKICAgICAgICAgICAgICAgIGNBbGlnbmVkQWxsb2MgPSBpbnN0YW5jZS5leHBvcnRzLmFsaWduZWRfYWxsb2M7CiAgICAgICAgICAgICAgICBwdlJlc2FtcGxlckluaXQgPSBpbnN0YW5jZS5leHBvcnRzLnB2X3Jlc2FtcGxlcl9pbml0OwogICAgICAgICAgICAgICAgcHZSZXNhbXBsZXJDb252ZXJ0TnVtU2FtcGxlc1RvSW5wdXRTYW1wbGVSYXRlID0gaW5zdGFuY2UuZXhwb3J0cy5wdl9yZXNhbXBsZXJfY29udmVydF9udW1fc2FtcGxlc190b19pbnB1dF9zYW1wbGVfcmF0ZTsKICAgICAgICAgICAgICAgIHB2UmVzYW1wbGVyQ29udmVydE51bVNhbXBsZXNUb091dHB1dFNhbXBsZVJhdGUgPSBpbnN0YW5jZS5leHBvcnRzLnB2X3Jlc2FtcGxlcl9jb252ZXJ0X251bV9zYW1wbGVzX3RvX291dHB1dF9zYW1wbGVfcmF0ZTsKICAgICAgICAgICAgICAgIHB2UmVzYW1wbGVyVmVyc2lvbiA9IGluc3RhbmNlLmV4cG9ydHMucHZfcmVzYW1wbGVyX3ZlcnNpb247CiAgICAgICAgICAgICAgICBvYmplY3RBZGRyZXNzQWRkcmVzcyA9IGNBbGlnbmVkQWxsb2MoSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICAgICAgICAgICAgICBpZiAoIShvYmplY3RBZGRyZXNzQWRkcmVzcyA9PT0gMCkpIHsKICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxODsKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hbGxvYyBmYWlsZWQ6IENhbm5vdCBhbGxvY2F0ZSBtZW1vcnknKTsKICAgICAgICAgICAgICBjYXNlIDE4OgogICAgICAgICAgICAgICAgc3RhdHVzID0gcHZSZXNhbXBsZXJJbml0KGlucHV0RnJlcXVlbmN5LCBvdXRwdXRGcmVxdWVuY3ksIG9yZGVyLCBvYmplY3RBZGRyZXNzQWRkcmVzcyk7CiAgICAgICAgICAgICAgICB2ZXJzaW9uQWRkcmVzcyA9IHB2UmVzYW1wbGVyVmVyc2lvbigpOwogICAgICAgICAgICAgICAgdmVyc2lvbiA9IGFycmF5QnVmZmVyVG9TdHJpbmdBdEluZGV4KG1lbW9yeUJ1ZmZlclVpbnQ4LCB2ZXJzaW9uQWRkcmVzcyk7CiAgICAgICAgICAgICAgICBpZiAoIShzdGF0dXMgIT09IFBWX1NUQVRVU19TVUNDRVNTKSkgewogICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDIzOwogICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigicHZfcmVzYW1wbGVyX2luaXQgZmFpbGVkIHdpdGggc3RhdHVzICIuY29uY2F0KHN0YXR1cykpOwogICAgICAgICAgICAgIGNhc2UgMjM6CiAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJWaWV3ID0gbmV3IERhdGFWaWV3KG1lbW9yeS5idWZmZXIpOwogICAgICAgICAgICAgICAgb2JqZWN0QWRkcmVzcyA9IG1lbW9yeUJ1ZmZlclZpZXcuZ2V0SW50MzIob2JqZWN0QWRkcmVzc0FkZHJlc3MsIHRydWUpOwogICAgICAgICAgICAgICAgaW5wdXRGcmFtZUxlbmd0aCA9IHB2UmVzYW1wbGVyQ29udmVydE51bVNhbXBsZXNUb0lucHV0U2FtcGxlUmF0ZShvYmplY3RBZGRyZXNzLCBmcmFtZUxlbmd0aCkgKyAxOwogICAgICAgICAgICAgICAgaW5wdXRCdWZmZXJBZGRyZXNzID0gY0FsaWduZWRBbGxvYyhJbnQxNkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCBpbnB1dEZyYW1lTGVuZ3RoICogSW50MTZBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICAgICAgICAgICAgICBpZiAoIShpbnB1dEJ1ZmZlckFkZHJlc3MgPT09IDApKSB7CiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjk7CiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYWxsb2MgZmFpbGVkOiBDYW5ub3QgYWxsb2NhdGUgbWVtb3J5Jyk7CiAgICAgICAgICAgICAgY2FzZSAyOToKICAgICAgICAgICAgICAgIG91dHB1dEJ1ZmZlckFkZHJlc3MgPSBjQWxpZ25lZEFsbG9jKEludDE2QXJyYXkuQllURVNfUEVSX0VMRU1FTlQsIGZyYW1lTGVuZ3RoICogSW50MTZBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICAgICAgICAgICAgICBpZiAoIShvdXRwdXRCdWZmZXJBZGRyZXNzID09PSAwKSkgewogICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDMyOwogICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWFsbG9jIGZhaWxlZDogQ2Fubm90IGFsbG9jYXRlIG1lbW9yeScpOwogICAgICAgICAgICAgIGNhc2UgMzI6CiAgICAgICAgICAgICAgICBwdlJlc2FtcGxlclJlc2V0ID0gaW5zdGFuY2UuZXhwb3J0cy5wdl9yZXNhbXBsZXJfcmVzZXQ7CiAgICAgICAgICAgICAgICBwdlJlc2FtcGxlclByb2Nlc3MgPSBpbnN0YW5jZS5leHBvcnRzLnB2X3Jlc2FtcGxlcl9wcm9jZXNzOwogICAgICAgICAgICAgICAgcHZSZXNhbXBsZXJEZWxldGUgPSBpbnN0YW5jZS5leHBvcnRzLnB2X3Jlc2FtcGxlcl9kZWxldGU7CiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdCgicmV0dXJuIiwgewogICAgICAgICAgICAgICAgICBjQWxpZ25lZEFsbG9jOiBjQWxpZ25lZEFsbG9jLAogICAgICAgICAgICAgICAgICBmcmFtZUxlbmd0aDogZnJhbWVMZW5ndGgsCiAgICAgICAgICAgICAgICAgIGlucHV0QnVmZmVyQWRkcmVzczogaW5wdXRCdWZmZXJBZGRyZXNzLAogICAgICAgICAgICAgICAgICBpbnB1dEZyYW1lTGVuZ3RoOiBpbnB1dEZyYW1lTGVuZ3RoLAogICAgICAgICAgICAgICAgICBtZW1vcnk6IG1lbW9yeSwKICAgICAgICAgICAgICAgICAgb2JqZWN0QWRkcmVzczogb2JqZWN0QWRkcmVzcywKICAgICAgICAgICAgICAgICAgb3V0cHV0QnVmZmVyQWRkcmVzczogb3V0cHV0QnVmZmVyQWRkcmVzcywKICAgICAgICAgICAgICAgICAgcHZSZXNhbXBsZXJDb252ZXJ0TnVtU2FtcGxlc1RvSW5wdXRTYW1wbGVSYXRlOiBwdlJlc2FtcGxlckNvbnZlcnROdW1TYW1wbGVzVG9JbnB1dFNhbXBsZVJhdGUsCiAgICAgICAgICAgICAgICAgIHB2UmVzYW1wbGVyQ29udmVydE51bVNhbXBsZXNUb091dHB1dFNhbXBsZVJhdGU6IHB2UmVzYW1wbGVyQ29udmVydE51bVNhbXBsZXNUb091dHB1dFNhbXBsZVJhdGUsCiAgICAgICAgICAgICAgICAgIHB2UmVzYW1wbGVyRGVsZXRlOiBwdlJlc2FtcGxlckRlbGV0ZSwKICAgICAgICAgICAgICAgICAgcHZSZXNhbXBsZXJJbml0OiBwdlJlc2FtcGxlckluaXQsCiAgICAgICAgICAgICAgICAgIHB2UmVzYW1wbGVyUHJvY2VzczogcHZSZXNhbXBsZXJQcm9jZXNzLAogICAgICAgICAgICAgICAgICBwdlJlc2FtcGxlclJlc2V0OiBwdlJlc2FtcGxlclJlc2V0LAogICAgICAgICAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uCiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICBjYXNlIDM2OgogICAgICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSwgX2NhbGxlZTIsIHRoaXMpOwogICAgICAgIH0pKTsKICAgICAgICBmdW5jdGlvbiBpbml0V2FzbShfeDUsIF94NiwgX3g3LCBfeDgpIHsKICAgICAgICAgIHJldHVybiBfaW5pdFdhc20uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGluaXRXYXNtOwogICAgICB9KCkKICAgIH1dKTsKICAgIHJldHVybiBSZXNhbXBsZXI7CiAgfSgpOwogIF9kZWZpbmVQcm9wZXJ0eSQxKFJlc2FtcGxlciwgIl93YXNtIiwgdm9pZCAwKTsKICBfZGVmaW5lUHJvcGVydHkkMShSZXNhbXBsZXIsICJfdmVyc2lvbiIsIHZvaWQgMCk7CgogIHZhciBhY2N1bXVsYXRvciA9IG51bGw7CiAgdmFyIHJlc2FtcGxlciA9IG51bGw7CiAgdmFyIEJ1ZmZlckFjY3VtdWxhdG9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgIGZ1bmN0aW9uIEJ1ZmZlckFjY3VtdWxhdG9yKGZyYW1lTGVuZ3RoLCBpbnB1dEJ1ZmZlckxlbmd0aCkgewogICAgICBfY2xhc3NDYWxsQ2hlY2skMSh0aGlzLCBCdWZmZXJBY2N1bXVsYXRvcik7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKHRoaXMsICJfZnJhbWVMZW5ndGgiLCB2b2lkIDApOwogICAgICBfZGVmaW5lUHJvcGVydHkkMSh0aGlzLCAiX2lucHV0QnVmZmVyTGVuZ3RoIiwgdm9pZCAwKTsKICAgICAgX2RlZmluZVByb3BlcnR5JDEodGhpcywgIl9idWZmZXIiLCB2b2lkIDApOwogICAgICBfZGVmaW5lUHJvcGVydHkkMSh0aGlzLCAiX2NvcGllZCIsIHZvaWQgMCk7CiAgICAgIHRoaXMuX2ZyYW1lTGVuZ3RoID0gZnJhbWVMZW5ndGg7CiAgICAgIHRoaXMuX2lucHV0QnVmZmVyTGVuZ3RoID0gaW5wdXRCdWZmZXJMZW5ndGg7CiAgICAgIHRoaXMuX2J1ZmZlciA9IG5ldyBJbnQxNkFycmF5KGZyYW1lTGVuZ3RoKTsKICAgICAgdGhpcy5fY29waWVkID0gMDsKICAgIH0KICAgIF9jcmVhdGVDbGFzcyQxKEJ1ZmZlckFjY3VtdWxhdG9yLCBbewogICAgICBrZXk6ICJwcm9jZXNzIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByb2Nlc3MoZnJhbWVzKSB7CiAgICAgICAgdmFyIHJlbWFpbmluZyA9IGZyYW1lcy5sZW5ndGg7CiAgICAgICAgd2hpbGUgKHJlbWFpbmluZyA+IDApIHsKICAgICAgICAgIHZhciBfcmVzYW1wbGVyJHByb2Nlc3MsIF9yZXNhbXBsZXI7CiAgICAgICAgICB2YXIgdG9Qcm9jZXNzID0gTWF0aC5taW4ocmVtYWluaW5nLCB0aGlzLl9pbnB1dEJ1ZmZlckxlbmd0aCk7CiAgICAgICAgICB2YXIgb3V0cHV0QnVmZmVyID0gbmV3IEludDE2QXJyYXkodGhpcy5fZnJhbWVMZW5ndGgpOwogICAgICAgICAgdmFyIHByb2Nlc3NlZFNhbXBsZXMgPSAoX3Jlc2FtcGxlciRwcm9jZXNzID0gKF9yZXNhbXBsZXIgPSByZXNhbXBsZXIpID09PSBudWxsIHx8IF9yZXNhbXBsZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZXNhbXBsZXIucHJvY2VzcyhmcmFtZXMuc2xpY2UoMCwgdG9Qcm9jZXNzKSwgb3V0cHV0QnVmZmVyKSkgIT09IG51bGwgJiYgX3Jlc2FtcGxlciRwcm9jZXNzICE9PSB2b2lkIDAgPyBfcmVzYW1wbGVyJHByb2Nlc3MgOiAwOwogICAgICAgICAgdmFyIHRvQ29weSA9IE1hdGgubWluKHByb2Nlc3NlZFNhbXBsZXMsIHRoaXMuX2ZyYW1lTGVuZ3RoIC0gdGhpcy5fY29waWVkKTsKICAgICAgICAgIHRoaXMuX2J1ZmZlci5zZXQob3V0cHV0QnVmZmVyLnNsaWNlKDAsIHRvQ29weSksIHRoaXMuX2NvcGllZCk7CiAgICAgICAgICBpZiAodG9Db3B5IDwgcHJvY2Vzc2VkU2FtcGxlcykgewogICAgICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgICBjb21tYW5kOiAnb2snLAogICAgICAgICAgICAgIHJlc3VsdDogdGhpcy5fYnVmZmVyCiAgICAgICAgICAgIH0pOwogICAgICAgICAgICB0aGlzLl9jb3BpZWQgPSAwOwogICAgICAgICAgICB0aGlzLl9idWZmZXIgPSBuZXcgSW50MTZBcnJheSh0aGlzLl9mcmFtZUxlbmd0aCk7CiAgICAgICAgICAgIHRoaXMuX2J1ZmZlci5zZXQob3V0cHV0QnVmZmVyLnNsaWNlKHRvQ29weSwgcHJvY2Vzc2VkU2FtcGxlcyksIDApOwogICAgICAgICAgICB0aGlzLl9jb3BpZWQgPSBwcm9jZXNzZWRTYW1wbGVzIC0gdG9Db3B5OwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgdGhpcy5fY29waWVkICs9IHRvQ29weTsKICAgICAgICAgIH0KICAgICAgICAgIGZyYW1lcyA9IGZyYW1lcy5zbGljZSh0b1Byb2Nlc3MsIGZyYW1lcy5sZW5ndGgpOwogICAgICAgICAgcmVtYWluaW5nIC09IHRvUHJvY2VzczsKICAgICAgICB9CiAgICAgIH0KICAgIH1dKTsKICAgIHJldHVybiBCdWZmZXJBY2N1bXVsYXRvcjsKICB9KCk7CiAgb25tZXNzYWdlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IkMSggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yJDEubWFyayhmdW5jdGlvbiBfY2FsbGVlKGV2ZW50KSB7CiAgICAgIHZhciBfYWNjdW11bGF0b3IsIGlucHV0RnJhbWU7CiAgICAgIHJldHVybiByZWdlbmVyYXRvciQxLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHsKICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkgewogICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICBfY29udGV4dC50MCA9IGV2ZW50LmRhdGEuY29tbWFuZDsKICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IF9jb250ZXh0LnQwID09PSAnaW5pdCcgPyAzIDogX2NvbnRleHQudDAgPT09ICdwcm9jZXNzJyA/IDE5IDogX2NvbnRleHQudDAgPT09ICdyZXNldCcgPyAzMiA6IF9jb250ZXh0LnQwID09PSAncmVsZWFzZScgPyAzOCA6IF9jb250ZXh0LnQwID09PSAnbnVtUmVxdWlyZWRJbnB1dFNhbXBsZXMnID8gNDYgOiA1MTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDM6CiAgICAgICAgICAgIGlmICghKHJlc2FtcGxlciAhPT0gbnVsbCkpIHsKICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgICBjb21tYW5kOiAnZXJyb3InLAogICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZXNhbXBsZXIgYWxyZWFkeSBpbml0aWFsaXplZCcKICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoInJldHVybiIpOwogICAgICAgICAgY2FzZSA2OgogICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gNjsKICAgICAgICAgICAgUmVzYW1wbGVyLnNldFdhc20oZXZlbnQuZGF0YS53YXNtKTsKICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEwOwogICAgICAgICAgICByZXR1cm4gUmVzYW1wbGVyLmNyZWF0ZShldmVudC5kYXRhLmlucHV0U2FtcGxlUmF0ZSwgZXZlbnQuZGF0YS5vdXRwdXRTYW1wbGVSYXRlLCBldmVudC5kYXRhLmZpbHRlck9yZGVyLCBldmVudC5kYXRhLmZyYW1lTGVuZ3RoKTsKICAgICAgICAgIGNhc2UgMTA6CiAgICAgICAgICAgIHJlc2FtcGxlciA9IF9jb250ZXh0LnNlbnQ7CiAgICAgICAgICAgIGFjY3VtdWxhdG9yID0gbmV3IEJ1ZmZlckFjY3VtdWxhdG9yKHJlc2FtcGxlci5mcmFtZUxlbmd0aCwgcmVzYW1wbGVyLmlucHV0QnVmZmVyTGVuZ3RoKTsKICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgY29tbWFuZDogJ29rJywKICAgICAgICAgICAgICB2ZXJzaW9uOiByZXNhbXBsZXIudmVyc2lvbgogICAgICAgICAgICB9KTsKICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE4OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgMTU6CiAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxNTsKICAgICAgICAgICAgX2NvbnRleHQudDEgPSBfY29udGV4dFsiY2F0Y2giXSg2KTsKICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgY29tbWFuZDogJ2Vycm9yJywKICAgICAgICAgICAgICBtZXNzYWdlOiBfY29udGV4dC50MS5tZXNzYWdlCiAgICAgICAgICAgIH0pOwogICAgICAgICAgY2FzZSAxODoKICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgiYnJlYWsiLCA1Myk7CiAgICAgICAgICBjYXNlIDE5OgogICAgICAgICAgICBpZiAoIShyZXNhbXBsZXIgPT09IG51bGwpKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIyOwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICAgICAgICAgIGNvbW1hbmQ6ICdlcnJvcicsCiAgICAgICAgICAgICAgbWVzc2FnZTogJ1Jlc2FtcGxlciBub3QgaW5pdGlhbGl6ZWQnCiAgICAgICAgICAgIH0pOwogICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCJyZXR1cm4iKTsKICAgICAgICAgIGNhc2UgMjI6CiAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAyMjsKICAgICAgICAgICAgaW5wdXRGcmFtZSA9IGV2ZW50LmRhdGEuaW5wdXRGcmFtZTsKICAgICAgICAgICAgKF9hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yKSA9PT0gbnVsbCB8fCBfYWNjdW11bGF0b3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hY2N1bXVsYXRvci5wcm9jZXNzKGlucHV0RnJhbWUpOwogICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzE7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAyNzoKICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDI3OwogICAgICAgICAgICBfY29udGV4dC50MiA9IF9jb250ZXh0WyJjYXRjaCJdKDIyKTsKICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgY29tbWFuZDogJ2Vycm9yJywKICAgICAgICAgICAgICBtZXNzYWdlOiBfY29udGV4dC50Mi5tZXNzYWdlCiAgICAgICAgICAgIH0pOwogICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCJyZXR1cm4iKTsKICAgICAgICAgIGNhc2UgMzE6CiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoImJyZWFrIiwgNTMpOwogICAgICAgICAgY2FzZSAzMjoKICAgICAgICAgICAgaWYgKCEocmVzYW1wbGVyID09PSBudWxsKSkgewogICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzNTsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgICBjb21tYW5kOiAnZXJyb3InLAogICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZXNhbXBsZXIgbm90IGluaXRpYWxpemVkJwogICAgICAgICAgICB9KTsKICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgicmV0dXJuIik7CiAgICAgICAgICBjYXNlIDM1OgogICAgICAgICAgICByZXNhbXBsZXIucmVzZXQoKTsKICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgY29tbWFuZDogJ29rJwogICAgICAgICAgICB9KTsKICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgiYnJlYWsiLCA1Myk7CiAgICAgICAgICBjYXNlIDM4OgogICAgICAgICAgICBpZiAoIShyZXNhbXBsZXIgPT09IG51bGwpKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQxOwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICAgICAgICAgIGNvbW1hbmQ6ICdlcnJvcicsCiAgICAgICAgICAgICAgbWVzc2FnZTogJ1Jlc2FtcGxlciBub3QgaW5pdGlhbGl6ZWQnCiAgICAgICAgICAgIH0pOwogICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCJyZXR1cm4iKTsKICAgICAgICAgIGNhc2UgNDE6CiAgICAgICAgICAgIHJlc2FtcGxlci5yZWxlYXNlKCk7CiAgICAgICAgICAgIHJlc2FtcGxlciA9IG51bGw7CiAgICAgICAgICAgIGFjY3VtdWxhdG9yID0gbnVsbDsKICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgY29tbWFuZDogJ29rJwogICAgICAgICAgICB9KTsKICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgiYnJlYWsiLCA1Myk7CiAgICAgICAgICBjYXNlIDQ2OgogICAgICAgICAgICBpZiAoIShyZXNhbXBsZXIgPT09IG51bGwpKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ5OwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICAgICAgICAgIGNvbW1hbmQ6ICdlcnJvcicsCiAgICAgICAgICAgICAgbWVzc2FnZTogJ1Jlc2FtcGxlciBub3QgaW5pdGlhbGl6ZWQnCiAgICAgICAgICAgIH0pOwogICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCJyZXR1cm4iKTsKICAgICAgICAgIGNhc2UgNDk6CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgICBjb21tYW5kOiAnb2snLAogICAgICAgICAgICAgICAgcmVzdWx0OiByZXNhbXBsZXIuZ2V0TnVtUmVxdWlyZWRJbnB1dFNhbXBsZXMoZXZlbnQuZGF0YS5udW1TYW1wbGUpCiAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsKICAgICAgICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdlcnJvcicsCiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UKICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCJicmVhayIsIDUzKTsKICAgICAgICAgIGNhc2UgNTE6CiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUKICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGUKICAgICAgICAgICAgY29uc29sZS53YXJuKCJVbmhhbmRsZWQgbWVzc2FnZSBpbiByZXNhbXBsZXJfd29ya2VyLnRzOiAiLmNvbmNhdChldmVudC5kYXRhLmNvbW1hbmQpKTsKICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgiYnJlYWsiLCA1Myk7CiAgICAgICAgICBjYXNlIDUzOgogICAgICAgICAgY2FzZSAiZW5kIjoKICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTsKICAgICAgICB9CiAgICAgIH0sIF9jYWxsZWUsIG51bGwsIFtbNiwgMTVdLCBbMjIsIDI3XV0pOwogICAgfSkpOwogICAgcmV0dXJuIGZ1bmN0aW9uIG9ubWVzc2FnZShfeCkgewogICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgfTsKICB9KCk7Cgp9KSgpOwoK', null, false);
  /* eslint-enable */

  var ResamplerWorker = /*#__PURE__*/function () {
    function ResamplerWorker(worker, version) {
      _classCallCheck$1(this, ResamplerWorker);
      _defineProperty$1(this, "_worker", void 0);
      _defineProperty$1(this, "_version", void 0);
      this._worker = worker;
      this._version = version;
    }
    _createClass$1(ResamplerWorker, [{
      key: "process",
      value: function process(inputFrame) {
        this._worker.postMessage({
          command: 'process',
          inputFrame: inputFrame
        }, [inputFrame.buffer]);
      }
    }, {
      key: "reset",
      value: function reset() {
        var _this = this;
        var returnPromise = new Promise(function (resolve, reject) {
          _this._worker.onmessage = function (event) {
            switch (event.data.command) {
              case 'ok':
                resolve();
                break;
              case 'failed':
              case 'error':
                reject(event.data.message);
                break;
              default:
                // @ts-ignore
                reject("Unrecognized command: ".concat(event.data.command));
            }
          };
        });
        this._worker.postMessage({
          command: 'reset'
        });
        return returnPromise;
      }
    }, {
      key: "release",
      value: function release() {
        var _this2 = this;
        var returnPromise = new Promise(function (resolve, reject) {
          _this2._worker.onmessage = function (event) {
            switch (event.data.command) {
              case 'ok':
                resolve();
                break;
              case 'failed':
              case 'error':
                reject(event.data.message);
                break;
              default:
                // @ts-ignore
                reject("Unrecognized command: ".concat(event.data.command));
            }
          };
        });
        this._worker.postMessage({
          command: 'release'
        });
        return returnPromise;
      }
    }, {
      key: "terminate",
      value: function terminate() {
        this._worker.terminate();
      }
    }, {
      key: "getNumRequiredInputSamples",
      value: function getNumRequiredInputSamples(numSample) {
        var _this3 = this;
        var returnPromise = new Promise(function (resolve, reject) {
          _this3._worker.onmessage = function (event) {
            switch (event.data.command) {
              case 'ok':
                resolve(event.data.result);
                break;
              case 'failed':
              case 'error':
                reject(event.data.message);
                break;
              default:
                // @ts-ignore
                reject("Unrecognized command: ".concat(event.data.command));
            }
          };
        });
        this._worker.postMessage({
          command: 'numRequiredInputSamples',
          numSample: numSample
        });
        return returnPromise;
      }
    }], [{
      key: "setWasm",
      value: function setWasm(wasm) {
        if (this._wasm === undefined) {
          this._wasm = wasm;
        }
      }
    }, {
      key: "create",
      value: function () {
        var _create = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee(inputSampleRate, outputSampleRate, filterOrder, frameLength, resampleCallback) {
          var _this4 = this;
          var worker, returnPromise;
          return regenerator$1.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                worker = new WorkerFactory$1();
                returnPromise = new Promise(function (resolve, reject) {
                  // @ts-ignore - block from GC
                  _this4.worker = worker;
                  worker.onmessage = function (event) {
                    switch (event.data.command) {
                      case 'ok':
                        worker.onmessage = function (ev) {
                          switch (ev.data.command) {
                            case 'ok':
                              resampleCallback(ev.data.result);
                              break;
                            case 'failed':
                            case 'error':
                              // eslint-disable-next-line no-console
                              console.error(ev.data.message);
                              break;
                            default:
                              // @ts-ignore
                              console.error("Unrecognized command: ".concat(event.data.command));
                          }
                        };
                        resolve(new ResamplerWorker(worker, event.data.version));
                        break;
                      case 'failed':
                      case 'error':
                        reject(event.data.message);
                        break;
                      default:
                        // @ts-ignore
                        reject("Unrecognized command: ".concat(event.data.command));
                    }
                  };
                });
                worker.postMessage({
                  command: 'init',
                  wasm: this._wasm,
                  inputSampleRate: inputSampleRate,
                  outputSampleRate: outputSampleRate,
                  filterOrder: filterOrder,
                  frameLength: frameLength
                });
                return _context.abrupt("return", returnPromise);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function create(_x, _x2, _x3, _x4, _x5) {
          return _create.apply(this, arguments);
        }
        return create;
      }()
    }]);
    return ResamplerWorker;
  }();
  _defineProperty$1(ResamplerWorker, "_wasm", void 0);

  var recorderProcessor = "LyoKICBDb3B5cmlnaHQgMjAyMiBQaWNvdm9pY2UgSW5jLgoKICBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIGxpY2Vuc2UuIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBsb2NhdGVkIGluIHRoZSAiTElDRU5TRSIKICBmaWxlIGFjY29tcGFueWluZyB0aGlzIHNvdXJjZS4KCiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbgogIGFuICJBUyBJUyIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZQogIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCiovCgpjbGFzcyBSZWNvcmRlclByb2Nlc3NvciBleHRlbmRzIEF1ZGlvV29ya2xldFByb2Nlc3NvciB7CiAgY29uc3RydWN0b3Iob3B0aW9ucykgewogICAgc3VwZXIoKTsKCiAgICBjb25zdCB7IG51bWJlck9mQ2hhbm5lbHMgPSAxIH0gPSBvcHRpb25zPy5wcm9jZXNzb3JPcHRpb25zOwoKICAgIHRoaXMuX251bWJlck9mQ2hhbm5lbHMgPSBudW1iZXJPZkNoYW5uZWxzOwogIH0KCiAgcHJvY2VzcyhpbnB1dHMsIG91dHB1dHMsIHBhcmFtZXRlcnMpIHsKICAgIGxldCBpbnB1dCA9IGlucHV0c1swXTsgLy8gZ2V0IGZpcnN0IGlucHV0CiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7CiAgICAgIHJldHVybiB0cnVlOwogICAgfQoKICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZSh7CiAgICAgIGJ1ZmZlcjogaW5wdXQuc2xpY2UoMCwgdGhpcy5fbnVtYmVyT2ZDaGFubmVscykKICAgIH0pOwogICAgcmV0dXJuIHRydWU7CiAgfQp9CgpyZWdpc3RlclByb2Nlc3NvcigncmVjb3JkZXItcHJvY2Vzc29yJywgUmVjb3JkZXJQcm9jZXNzb3IpOwo=";

  /*
      Copyright 2018-2022 Picovoice Inc.

      You may not use this file except in compliance with the license. A copy of the license is located in the "LICENSE"
      file accompanying this source.

      Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
      an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
      specific language governing permissions and limitations under the License.
  */
  var WvpState;
  (function (WvpState) {
    WvpState[WvpState["STARTED"] = 0] = "STARTED";
    WvpState[WvpState["STOPPED"] = 1] = "STOPPED";
  })(WvpState || (WvpState = {}));

  /*
    Copyright 2022 Picovoice Inc.

    You may not use this file except in compliance with the license. A copy of the license is located in the "LICENSE"
    file accompanying this source.

    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
    an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
    specific language governing permissions and limitations under the License.
  */
  var AudioDumpEngine = /*#__PURE__*/function () {
    function AudioDumpEngine() {
      _classCallCheck$1(this, AudioDumpEngine);
      _defineProperty$1(this, "_buffers", []);
    }
    _createClass$1(AudioDumpEngine, [{
      key: "onmessage",
      value: function onmessage(e) {
        switch (e.data.command) {
          case 'process':
            this._buffers.push(e.data.inputFrame);
            break;
        }
      }
    }, {
      key: "onend",
      value: function onend() {
        return new Blob(this._buffers);
      }
    }]);
    return AudioDumpEngine;
  }();

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  /**
   * WebVoiceProcessor Error Class
   */
  var WvpError = /*#__PURE__*/function (_Error) {
    _inherits$1(WvpError, _Error);
    var _super = _createSuper(WvpError);
    function WvpError(name, message) {
      var _this;
      _classCallCheck$1(this, WvpError);
      _this = _super.call(this, message);
      _this.name = name;
      return _this;
    }
    return _createClass$1(WvpError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  /**
   * Obtain microphone permission and audio stream;
   * Down sample audio into 16kHz single-channel PCM for speech recognition (via ResamplerWorker).
   * Continuously send audio frames to voice processing engines.
   */
  var WebVoiceProcessor = /*#__PURE__*/function () {
    function WebVoiceProcessor() {
      _classCallCheck$1(this, WebVoiceProcessor);
      _defineProperty$1(this, "_mutex", new Mutex());
      _defineProperty$1(this, "_audioContext", null);
      _defineProperty$1(this, "_microphoneStream", null);
      _defineProperty$1(this, "_recorderNode", null);
      _defineProperty$1(this, "_resamplerWorker", null);
      _defineProperty$1(this, "_engines", void 0);
      _defineProperty$1(this, "_options", {});
      _defineProperty$1(this, "_state", void 0);
      this._engines = new Set();
      this._options = {};
      this._state = WvpState.STOPPED;
    }
    /**
     * Gets the WebVoiceProcessor singleton instance.
     *
     * @return WebVoiceProcessor singleton.
     */
    _createClass$1(WebVoiceProcessor, [{
      key: "start",
      value:
      /**
       * Resumes or starts audio context. Also initializes resampler, capture device and other configurations
       * based on `options`.
       */
      function start() {
        var _this2 = this;
        return new Promise(function (resolve, reject) {
          _this2._mutex.runExclusive( /*#__PURE__*/_asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee() {
            var _yield$_this2$setupRe, audioContext, microphoneStream, recorderNode, resamplerWorker;
            return regenerator$1.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  if (!(_this2._audioContext === null || _this2._state === WvpState.STOPPED || _this2.isReleased)) {
                    _context.next = 15;
                    break;
                  }
                  _context.next = 4;
                  return _this2.setupRecorder(_this2._options);
                case 4:
                  _yield$_this2$setupRe = _context.sent;
                  audioContext = _yield$_this2$setupRe.audioContext;
                  microphoneStream = _yield$_this2$setupRe.microphoneStream;
                  recorderNode = _yield$_this2$setupRe.recorderNode;
                  resamplerWorker = _yield$_this2$setupRe.resamplerWorker;
                  _this2._audioContext = audioContext;
                  _this2._microphoneStream = microphoneStream;
                  _this2._recorderNode = recorderNode;
                  _this2._resamplerWorker = resamplerWorker;
                  recorderNode.port.onmessage = function (event) {
                    resamplerWorker.process(event.data.buffer[0]);
                  };
                  _this2._state = WvpState.STARTED;
                case 15:
                  if (!(_this2._audioContext !== null && _this2.isSuspended)) {
                    _context.next = 18;
                    break;
                  }
                  _context.next = 18;
                  return _this2._audioContext.resume();
                case 18:
                  _context.next = 36;
                  break;
                case 20:
                  _context.prev = 20;
                  _context.t0 = _context["catch"](0);
                  if (!(_context.t0 && _context.t0.name)) {
                    _context.next = 35;
                    break;
                  }
                  if (!(_context.t0.name === 'SecurityError' || _context.t0.name === 'NotAllowedError')) {
                    _context.next = 27;
                    break;
                  }
                  throw new WvpError('PermissionError', 'Failed to record audio: microphone permissions denied.');
                case 27:
                  if (!(_context.t0.name === 'NotFoundError' || _context.t0.name === 'OverconstrainedError')) {
                    _context.next = 31;
                    break;
                  }
                  throw new WvpError('DeviceMissingError', 'Failed to record audio: audio recording device was not found.');
                case 31:
                  if (!(_context.t0.name === 'NotReadableError')) {
                    _context.next = 33;
                    break;
                  }
                  throw new WvpError('DeviceReadError', 'Failed to record audio: audio recording device is not working correctly.');
                case 33:
                  _context.next = 36;
                  break;
                case 35:
                  throw _context.t0;
                case 36:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[0, 20]]);
          }))).then(function () {
            resolve();
          })["catch"](function (error) {
            reject(error);
          });
        });
      }
      /**
       * Stops and closes resources used. Furthermore, terminates and stops any other
       * instance created initially.
       * AudioContext is kept alive to be used when starting again.
       */
    }, {
      key: "stop",
      value: function stop() {
        var _this3 = this;
        return new Promise(function (resolve, reject) {
          _this3._mutex.runExclusive( /*#__PURE__*/_asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee2() {
            var _this3$_resamplerWork, _this3$_recorderNode, _this3$_microphoneStr;
            return regenerator$1.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (_this3._audioContext !== null && _this3._state !== WvpState.STOPPED) {
                    (_this3$_resamplerWork = _this3._resamplerWorker) === null || _this3$_resamplerWork === void 0 ? void 0 : _this3$_resamplerWork.terminate();
                    (_this3$_recorderNode = _this3._recorderNode) === null || _this3$_recorderNode === void 0 ? void 0 : _this3$_recorderNode.port.close();
                    (_this3$_microphoneStr = _this3._microphoneStream) === null || _this3$_microphoneStr === void 0 ? void 0 : _this3$_microphoneStr.getAudioTracks().forEach(function (track) {
                      track.stop();
                    });
                    _this3._state = WvpState.STOPPED;
                  }
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }))).then(function () {
            resolve();
          })["catch"](function (error) {
            reject(error);
          });
        });
      }
      /**
       * Flag to check if audio context has been suspended.
       */
    }, {
      key: "isSuspended",
      get: function get() {
        var _this$_audioContext;
        return ((_this$_audioContext = this._audioContext) === null || _this$_audioContext === void 0 ? void 0 : _this$_audioContext.state) === "suspended";
      }
      /**
       * Flag to check if audio context has been released.
       */
    }, {
      key: "isReleased",
      get: function get() {
        var _this$_audioContext2;
        return ((_this$_audioContext2 = this._audioContext) === null || _this$_audioContext2 === void 0 ? void 0 : _this$_audioContext2.state) === "closed";
      }
    }, {
      key: "recorderCallback",
      value: function recorderCallback(inputFrame) {
        var _iterator = _createForOfIteratorHelper(this._engines),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var engine = _step.value;
            if (engine.worker && engine.worker.postMessage) {
              engine.worker.postMessage({
                command: 'process',
                inputFrame: inputFrame
              });
            } else if (engine.postMessage) {
              engine.postMessage({
                command: 'process',
                inputFrame: inputFrame
              });
            } else if (engine.onmessage) {
              engine.onmessage({
                data: {
                  command: 'process',
                  inputFrame: inputFrame
                }
              });
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "getAudioContext",
      value: function () {
        var _getAudioContext = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee3() {
          var objectURL;
          return regenerator$1.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this._audioContext === null || this.isReleased)) {
                  _context3.next = 5;
                  break;
                }
                this._audioContext = new AudioContext();
                objectURL = URL.createObjectURL(new Blob([base64ToUint8Array(recorderProcessor).buffer], {
                  type: 'application/javascript'
                }));
                _context3.next = 5;
                return this._audioContext.audioWorklet.addModule(objectURL);
              case 5:
                return _context3.abrupt("return", this._audioContext);
              case 6:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
        function getAudioContext() {
          return _getAudioContext.apply(this, arguments);
        }
        return getAudioContext;
      }()
    }, {
      key: "setupRecorder",
      value: function () {
        var _setupRecorder = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee4(options) {
          var _options$outputSample, outputSampleRate, _options$frameLength, frameLength, _options$deviceId, deviceId, _options$filterOrder, filterOrder, numberOfChannels, audioContext, microphoneStream, audioSource, resamplerWorker, recorderNode;
          return regenerator$1.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (!(navigator.mediaDevices === undefined)) {
                  _context4.next = 2;
                  break;
                }
                throw new WvpError("DeviceDisabledError", "Audio recording is not allowed or disabled.");
              case 2:
                _options$outputSample = options.outputSampleRate, outputSampleRate = _options$outputSample === void 0 ? 16000 : _options$outputSample, _options$frameLength = options.frameLength, frameLength = _options$frameLength === void 0 ? 512 : _options$frameLength, _options$deviceId = options.deviceId, deviceId = _options$deviceId === void 0 ? null : _options$deviceId, _options$filterOrder = options.filterOrder, filterOrder = _options$filterOrder === void 0 ? 50 : _options$filterOrder;
                numberOfChannels = 1;
                _context4.next = 6;
                return this.getAudioContext();
              case 6:
                audioContext = _context4.sent;
                _context4.next = 9;
                return navigator.mediaDevices.getUserMedia({
                  audio: {
                    deviceId: deviceId ? {
                      exact: deviceId
                    } : undefined
                  }
                });
              case 9:
                microphoneStream = _context4.sent;
                audioSource = audioContext.createMediaStreamSource(microphoneStream);
                _context4.next = 13;
                return ResamplerWorker.create(audioSource.context.sampleRate, outputSampleRate, filterOrder, frameLength, this.recorderCallback.bind(this));
              case 13:
                resamplerWorker = _context4.sent;
                recorderNode = new window.AudioWorkletNode(audioContext, 'recorder-processor', {
                  processorOptions: {
                    frameLength: frameLength,
                    numberOfChannels: numberOfChannels
                  }
                });
                audioSource.connect(recorderNode);
                recorderNode.connect(audioContext.destination);
                return _context4.abrupt("return", {
                  audioContext: audioContext,
                  microphoneStream: microphoneStream,
                  recorderNode: recorderNode,
                  resamplerWorker: resamplerWorker
                });
              case 18:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
        function setupRecorder(_x) {
          return _setupRecorder.apply(this, arguments);
        }
        return setupRecorder;
      }()
    }], [{
      key: "instance",
      value: function instance() {
        if (!this._instance) {
          this._instance = new WebVoiceProcessor();
        }
        return this._instance;
      }
      /**
       * Record some sample raw signed 16-bit PCM data for some duration, then pack it as a Blob.
       *
       * @param durationMs the duration of the recording, in milliseconds
       * @return the data in Blob format, wrapped in a promise
       */
    }, {
      key: "audioDump",
      value: function () {
        var _audioDump = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee5() {
          var _this4 = this;
          var durationMs,
            audioDumpEngine,
            _args5 = arguments;
          return regenerator$1.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                durationMs = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : 3000;
                audioDumpEngine = new AudioDumpEngine();
                _context5.next = 4;
                return this.subscribe(audioDumpEngine);
              case 4:
                return _context5.abrupt("return", new Promise(function (resolve) {
                  // @ts-ignore
                  _this4.audioDumpEngine = audioDumpEngine;
                  setTimeout(function () {
                    _this4.unsubscribe(audioDumpEngine);
                    resolve(audioDumpEngine.onend());
                  }, durationMs);
                }));
              case 5:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        }));
        function audioDump() {
          return _audioDump.apply(this, arguments);
        }
        return audioDump;
      }()
      /**
       * Subscribe an engine. A subscribed engine will receive audio frames via
       * `.postMessage({command: 'process', inputFrame: inputFrame})`.
       * @param engines The engine(s) to subscribe.
       */
    }, {
      key: "subscribe",
      value: function () {
        var _subscribe = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee6(engines) {
          var _iterator2, _step2, engine;
          return regenerator$1.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _iterator2 = _createForOfIteratorHelper(Array.isArray(engines) ? engines : [engines]);
                _context6.prev = 1;
                _iterator2.s();
              case 3:
                if ((_step2 = _iterator2.n()).done) {
                  _context6.next = 26;
                  break;
                }
                engine = _step2.value;
                if (engine) {
                  _context6.next = 7;
                  break;
                }
                throw new WvpError("InvalidEngine", "Null or undefined engine.");
              case 7:
                if (!engine.worker) {
                  _context6.next = 15;
                  break;
                }
                if (!(engine.worker.postMessage && typeof engine.worker.postMessage === 'function')) {
                  _context6.next = 12;
                  break;
                }
                this.instance()._engines.add(engine);
                _context6.next = 13;
                break;
              case 12:
                throw new WvpError("InvalidEngine", "Engine must have a 'onmessage' handler.");
              case 13:
                _context6.next = 24;
                break;
              case 15:
                if (!(engine.postMessage && typeof engine.postMessage === 'function')) {
                  _context6.next = 19;
                  break;
                }
                this.instance()._engines.add(engine);
                _context6.next = 24;
                break;
              case 19:
                if (!(engine.onmessage && typeof engine.onmessage === 'function')) {
                  _context6.next = 23;
                  break;
                }
                this.instance()._engines.add(engine);
                _context6.next = 24;
                break;
              case 23:
                throw new WvpError("InvalidEngine", "Engine must have a 'onmessage' handler.");
              case 24:
                _context6.next = 3;
                break;
              case 26:
                _context6.next = 31;
                break;
              case 28:
                _context6.prev = 28;
                _context6.t0 = _context6["catch"](1);
                _iterator2.e(_context6.t0);
              case 31:
                _context6.prev = 31;
                _iterator2.f();
                return _context6.finish(31);
              case 34:
                if (!(this.instance()._engines.size > 0 && this.instance()._state !== WvpState.STARTED)) {
                  _context6.next = 37;
                  break;
                }
                _context6.next = 37;
                return this.instance().start();
              case 37:
              case "end":
                return _context6.stop();
            }
          }, _callee6, this, [[1, 28, 31, 34]]);
        }));
        function subscribe(_x2) {
          return _subscribe.apply(this, arguments);
        }
        return subscribe;
      }()
      /**
       * Unsubscribe an engine.
       * @param engines The engine(s) to unsubscribe.
       */
    }, {
      key: "unsubscribe",
      value: function () {
        var _unsubscribe = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee7(engines) {
          var _iterator3, _step3, engine;
          return regenerator$1.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                _iterator3 = _createForOfIteratorHelper(Array.isArray(engines) ? engines : [engines]);
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    engine = _step3.value;
                    this.instance()._engines["delete"](engine);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
                if (!(this.instance()._engines.size === 0 && this.instance()._state !== WvpState.STOPPED)) {
                  _context7.next = 5;
                  break;
                }
                _context7.next = 5;
                return this.instance().stop();
              case 5:
              case "end":
                return _context7.stop();
            }
          }, _callee7, this);
        }));
        function unsubscribe(_x3) {
          return _unsubscribe.apply(this, arguments);
        }
        return unsubscribe;
      }()
      /**
       * Removes all engines and stops recording audio.
       */
    }, {
      key: "reset",
      value: function () {
        var _reset = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee8() {
          return regenerator$1.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                this.instance()._engines.clear();
                _context8.next = 3;
                return this.instance().stop();
              case 3:
              case "end":
                return _context8.stop();
            }
          }, _callee8, this);
        }));
        function reset() {
          return _reset.apply(this, arguments);
        }
        return reset;
      }()
      /**
       * Set new WebVoiceProcessor options.
       * If forceUpdate is not set to true, all engines must be unsubscribed and subscribed
       * again in order for the recorder to take the new changes.
       * Using forceUpdate might allow a small gap where audio frames is not received.
       *
       * @param options WebVoiceProcessor recording options.
       * @param forceUpdate Flag to force update recorder with new options.
       */
    }, {
      key: "setOptions",
      value: function setOptions(options) {
        var _this5 = this;
        var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.instance()._options = options;
        if (forceUpdate) {
          this.instance().stop().then( /*#__PURE__*/_asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee9() {
            return regenerator$1.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return _this5.instance().start();
                case 2:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          })));
        }
      }
      /**
       * Gets the current audio context.
       */
    }, {
      key: "audioContext",
      get: function get() {
        return this.instance()._audioContext;
      }
      /**
       * Flag to check if it is currently recording.
       */
    }, {
      key: "isRecording",
      get: function get() {
        return this.instance()._state === WvpState.STARTED;
      }
    }]);
    return WebVoiceProcessor;
  }();
  _defineProperty$1(WebVoiceProcessor, "_instance", void 0);

  /*
      Copyright 2021-2022 Picovoice Inc.

      You may not use this file except in compliance with the license. A copy of the license is located in the "LICENSE"
      file accompanying this source.

      Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
      an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
      specific language governing permissions and limitations under the License.
  */
  /**
   * Check for browser compatibility with Picovoice: WebAssembly, Web Audio API, etc.
   *
   * @return object with compatibility details, with special key '_picovoice' offering a yes/no answer.
   */
  function browserCompatibilityCheck() {
    // Are we in a secure context? Microphone access requires HTTPS (with the exception of localhost, for development)
    var _isSecureContext = window.isSecureContext;
    // Web Audio API
    var _mediaDevices = navigator.mediaDevices !== undefined;
    var _webkitGetUserMedia =
    // @ts-ignore
    navigator.webkitGetUserMedia !== undefined;
    // Web Workers
    var _Worker = window.Worker !== undefined;
    // WebAssembly
    var _WebAssembly = (typeof WebAssembly === "undefined" ? "undefined" : _typeof$1(WebAssembly)) === 'object';
    // AudioWorklet (not yet used, due to lack of Safari support)
    var _AudioWorklet = typeof AudioWorklet === 'function';
    // Picovoice requirements met?
    var _picovoice = _mediaDevices && _WebAssembly && _Worker;
    return {
      _picovoice: _picovoice,
      AudioWorklet: _AudioWorklet,
      isSecureContext: _isSecureContext,
      mediaDevices: _mediaDevices,
      WebAssembly: _WebAssembly,
      webKitGetUserMedia: _webkitGetUserMedia,
      Worker: _Worker
    };
  }

  var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsKICAgIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOwogICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldOwogICAgcmV0dXJuIGFycjI7CiAgfQoKICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7CiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsKICB9CgogIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgewogICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICJ1bmRlZmluZWQiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbIkBAaXRlcmF0b3IiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsKICB9CgogIGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsKICAgIGlmICghbykgcmV0dXJuOwogICAgaWYgKHR5cGVvZiBvID09PSAic3RyaW5nIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7CiAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7CiAgICBpZiAobiA9PT0gIk9iamVjdCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsKICAgIGlmIChuID09PSAiTWFwIiB8fCBuID09PSAiU2V0IikgcmV0dXJuIEFycmF5LmZyb20obyk7CiAgICBpZiAobiA9PT0gIkFyZ3VtZW50cyIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOwogIH0KCiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgewogICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuIik7CiAgfQoKICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7CiAgICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOwogIH0KCiAgLyoNCiAgICBDb3B5cmlnaHQgMjAyMiBQaWNvdm9pY2UgSW5jLg0KCiAgICBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIGxpY2Vuc2UuIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBsb2NhdGVkIGluIHRoZSAiTElDRU5TRSINCiAgICBmaWxlIGFjY29tcGFueWluZyB0aGlzIHNvdXJjZS4NCgogICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbg0KICAgIGFuICJBUyBJUyIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZQ0KICAgIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuDQogICovCiAgdmFyIElOVF8xNl9NQVggPSAzMjc2NzsKICB2YXIgRVBTSUxPTiA9IDFlLTk7CiAgdmFyIHByb2Nlc3MgPSBmdW5jdGlvbiBwcm9jZXNzKGZyYW1lcykgewogICAgdmFyIHN1bSA9IF90b0NvbnN1bWFibGVBcnJheShmcmFtZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGZyYW1lKSB7CiAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIE1hdGgucG93KGZyYW1lLCAyKTsKICAgIH0sIDApOwogICAgdmFyIHJtcyA9IHN1bSAvIGZyYW1lcy5sZW5ndGggLyBJTlRfMTZfTUFYIC8gSU5UXzE2X01BWDsKICAgIHJldHVybiAxMCAqIE1hdGgubG9nMTAoTWF0aC5tYXgocm1zLCBFUFNJTE9OKSk7CiAgfTsKICBvbm1lc3NhZ2UgPSBmdW5jdGlvbiBvbm1lc3NhZ2UoZSkgewogICAgc3dpdGNoIChlLmRhdGEuY29tbWFuZCkgewogICAgICBjYXNlICdwcm9jZXNzJzoKICAgICAgICBwb3N0TWVzc2FnZShwcm9jZXNzKGUuZGF0YS5pbnB1dEZyYW1lKSk7CiAgICAgICAgYnJlYWs7CiAgICB9CiAgfTsKCn0pKCk7Cgo=', null, false);
  /* eslint-enable */

  var VuMeterEngine = /*#__PURE__*/function () {
    function VuMeterEngine(vuMeterCallback) {
      var _this = this;
      _classCallCheck$1(this, VuMeterEngine);
      _defineProperty$1(this, "_vuMeterCallback", void 0);
      _defineProperty$1(this, "_worker", void 0);
      this._vuMeterCallback = vuMeterCallback;
      this._worker = new WorkerFactory();
      this._worker.onmessage = function (e) {
        _this._vuMeterCallback(e.data);
      };
    }
    _createClass$1(VuMeterEngine, [{
      key: "worker",
      get: function get() {
        return this._worker;
      }
    }]);
    return VuMeterEngine;
  }();

  var resamplerWasm = "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B0kNACAAIACTIQQMAQsCQAJAAkACQCAAIAFBCGoQoICAgABBA3EOAwABAgMLIAErAwgQnICAgAAhBAwDCyABKwMImhCdgICAACEEDAILIAErAwgQnICAgACMIQQMAQsgASsDCBCdgICAACEECyABQRBqJICAgIAAIAQLygMCA38BfCOAgICAAEEQayIBJICAgIAAAkACQCAAvCICQf////8HcSIDQdqfpPoDSw0AIANBgICAzANJDQEgALsQnYCAgAAhAAwBCwJAIANB0aftgwRLDQAgALshBAJAIANB45fbgARLDQACQCACQX9KDQAgBEQYLURU+yH5P6AQnICAgACMIQAMAwsgBEQYLURU+yH5v6AQnICAgAAhAAwCC0QYLURU+yEJwEQYLURU+yEJQCACQX9KGyAEoJoQnYCAgAAhAAwBCwJAIANB1eOIhwRLDQACQCADQd/bv4UESw0AIAC7IQQCQCACQX9KDQAgBETSITN/fNkSQKAQnICAgAAhAAwDCyAERNIhM3982RLAoBCcgICAAIwhAAwCC0QYLURU+yEZQEQYLURU+yEZwCACQQBIGyAAu6AQnYCAgAAhAAwBCwJAIANBgICA/AdJDQAgACAAkyEADAELAkACQAJAAkAgACABQQhqEKCAgIAAQQNxDgMAAQIDCyABKwMIEJ2AgIAAIQAMAwsgASsDCBCcgICAACEADAILIAErAwiaEJ2AgIAAIQAMAQsgASsDCBCcgICAAIwhAAsgAUEQaiSAgICAACAAC4cKAQR/AkAgACABRg0AAkAgASAAIAJqIgNrQQAgAkEBdGtLDQAgACABIAIQmICAgAAaDAELIAEgAHNBA3EhBAJAAkACQCAAIAFPDQACQCAERQ0AIAIhBCAAIQMMAwsCQCAAQQNxDQAgAiEEIAAhAwwCCyACRQ0DIAAgAS0AADoAACACQX9qIQQCQCAAQQFqIgNBA3ENACABQQFqIQEMAgsgBEUNAyAAIAEtAAE6AAEgAkF+aiEEAkAgAEECaiIDQQNxDQAgAUECaiEBDAILIARFDQMgACABLQACOgACIAJBfWohBAJAIABBA2oiA0EDcQ0AIAFBA2ohAQwCCyAERQ0DIAAgAS0AAzoAAyAAQQRqIQMgAUEEaiEBIAJBfGohBAwBCwJAIAQNAAJAIANBA3FFDQAgAkUNBCAAIAJB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";

  /*
      Copyright 2021 Picovoice Inc.

      You may not use this file except in compliance with the license. A copy of the license is located in the "LICENSE"
      file accompanying this source.

      Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
      an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
      specific language governing permissions and limitations under the License.
  */
  /* eslint camelcase: 0, arrow-body-style: 0, @typescript-eslint/no-unused-vars: 0, @typescript-eslint/explicit-module-boundary-types: 0 */
  var wasiSnapshotPreview1Emulator = {
    args_get: function args_get(input) {
      return 0;
    },
    args_sizes_get: function args_sizes_get(input) {
      return 0;
    },
    environ_get: function environ_get(input) {
      return 0;
    },
    environ_sizes_get: function environ_sizes_get(input) {
      return 0;
    },
    clock_res_get: function clock_res_get(input) {
      return 0;
    },
    clock_time_get: function clock_time_get(input) {
      return 0;
    },
    fd_advise: function fd_advise(input) {
      return 0;
    },
    fd_allocate: function fd_allocate(input) {
      return 0;
    },
    fd_close: function fd_close(input) {
      return 0;
    },
    fd_datasync: function fd_datasync(input) {
      return 0;
    },
    fd_fdstat_get: function fd_fdstat_get(input) {
      return 0;
    },
    fd_fdstat_set_flags: function fd_fdstat_set_flags(input) {
      return 0;
    },
    fd_fdstat_set_rights: function fd_fdstat_set_rights(input) {
      return 0;
    },
    fd_filestat_get: function fd_filestat_get(input) {
      return 0;
    },
    fd_filestat_set_size: function fd_filestat_set_size(input) {
      return 0;
    },
    fd_filestat_set_times: function fd_filestat_set_times(input) {
      return 0;
    },
    fd_pread: function fd_pread(input) {
      return 0;
    },
    fd_prestat_get: function fd_prestat_get(input) {
      return 0;
    },
    fd_prestat_dir_name: function fd_prestat_dir_name(input) {
      return 0;
    },
    fd_pwrite: function fd_pwrite(input) {
      return 0;
    },
    fd_read: function fd_read(input) {
      return 0;
    },
    fd_readdir: function fd_readdir(input) {
      return 0;
    },
    fd_renumber: function fd_renumber(input) {
      return 0;
    },
    fd_seek: function fd_seek(input) {
      return 0;
    },
    fd_sync: function fd_sync(input) {
      return 0;
    },
    fd_tell: function fd_tell(input) {
      return 0;
    },
    fd_write: function fd_write(input) {
      return 0;
    },
    path_create_directory: function path_create_directory(input) {
      return 0;
    },
    path_filestat_get: function path_filestat_get(input) {
      return 0;
    },
    path_filestat_set_times: function path_filestat_set_times(input) {
      return 0;
    },
    path_link: function path_link(input) {
      return 0;
    },
    path_open: function path_open(input) {
      return 0;
    },
    path_readlink: function path_readlink(input) {
      return 0;
    },
    path_remove_directory: function path_remove_directory(input) {
      return 0;
    },
    path_rename: function path_rename(input) {
      return 0;
    },
    path_symlink: function path_symlink(input) {
      return 0;
    },
    path_unlink_file: function path_unlink_file(input) {
      return 0;
    },
    poll_oneoff: function poll_oneoff(input) {
      return 0;
    },
    proc_exit: function proc_exit(input) {
      return 0;
    },
    proc_raise: function proc_raise(input) {
      return 0;
    },
    sched_yield: function sched_yield(input) {
      return 0;
    },
    random_get: function random_get(input) {
      return 0;
    },
    sock_recv: function sock_recv(input) {
      return 0;
    },
    sock_send: function sock_send(input) {
      return 0;
    },
    sock_shutdown: function sock_shutdown(input) {
      return 0;
    }
  };

  var PV_STATUS_SUCCESS = 10000;
  var Resampler = /*#__PURE__*/function () {
    function Resampler(handleWasm) {
      _classCallCheck$1(this, Resampler);
      _defineProperty$1(this, "_pvResamplerConvertNumSamplesToInputSampleRate", void 0);
      _defineProperty$1(this, "_pvResamplerConvertNumSamplesToOutputSampleRate", void 0);
      _defineProperty$1(this, "_pvResamplerDelete", void 0);
      _defineProperty$1(this, "_pvResamplerProcess", void 0);
      _defineProperty$1(this, "_pvResamplerReset", void 0);
      _defineProperty$1(this, "_cAlignedAlloc", void 0);
      _defineProperty$1(this, "_inputBufferAddress", void 0);
      _defineProperty$1(this, "_objectAddress", void 0);
      _defineProperty$1(this, "_outputBufferAddress", void 0);
      _defineProperty$1(this, "_wasmMemory", void 0);
      _defineProperty$1(this, "_memoryBuffer", void 0);
      _defineProperty$1(this, "_memoryBufferView", void 0);
      _defineProperty$1(this, "_frameLength", void 0);
      _defineProperty$1(this, "_inputBufferLength", void 0);
      Resampler._version = handleWasm.version;
      this._pvResamplerConvertNumSamplesToInputSampleRate = handleWasm.pvResamplerConvertNumSamplesToInputSampleRate;
      this._pvResamplerConvertNumSamplesToOutputSampleRate = handleWasm.pvResamplerConvertNumSamplesToOutputSampleRate;
      this._pvResamplerReset = handleWasm.pvResamplerReset;
      this._pvResamplerProcess = handleWasm.pvResamplerProcess;
      this._pvResamplerDelete = handleWasm.pvResamplerDelete;
      this._cAlignedAlloc = handleWasm.cAlignedAlloc;
      this._wasmMemory = handleWasm.memory;
      this._inputBufferAddress = handleWasm.inputBufferAddress;
      this._objectAddress = handleWasm.objectAddress;
      this._outputBufferAddress = handleWasm.outputBufferAddress;
      this._memoryBuffer = new Int16Array(handleWasm.memory.buffer);
      this._memoryBufferView = new DataView(handleWasm.memory.buffer);
      this._frameLength = handleWasm.frameLength;
      this._inputBufferLength = handleWasm.inputFrameLength;
    }
    _createClass$1(Resampler, [{
      key: "process",
      value: function process(inputFrame, outputBuffer) {
        if (inputFrame.length > this._inputBufferLength) {
          throw new Error("InputFrame length '".concat(inputFrame.length, "' must be smaller than ").concat(this._inputBufferLength, "."));
        }
        var inputBuffer = new Int16Array(inputFrame.length);
        if (inputFrame.constructor === Float32Array) {
          for (var i = 0; i < inputFrame.length; i++) {
            if (inputFrame[i] < 0) {
              inputBuffer[i] = 0x8000 * inputFrame[i];
            } else {
              inputBuffer[i] = 0x7fff * inputFrame[i];
            }
          }
        } else if (inputFrame.constructor === Int16Array) {
          inputBuffer = inputFrame;
        } else {
          throw new Error("Invalid inputFrame type: ".concat(_typeof$1(inputFrame), ". Expected Float32Array or Int16Array."));
        }
        this._memoryBuffer.set(inputBuffer, this._inputBufferAddress / Int16Array.BYTES_PER_ELEMENT);
        var processedSamples = this._pvResamplerProcess(this._objectAddress, this._inputBufferAddress, inputFrame.length, this._outputBufferAddress);
        for (var _i = 0; _i < processedSamples; _i++) {
          outputBuffer[_i] = this._memoryBufferView.getInt16(this._outputBufferAddress + _i * Int16Array.BYTES_PER_ELEMENT, true);
        }
        return processedSamples;
      }
    }, {
      key: "reset",
      value: function reset() {
        this._pvResamplerReset(this._objectAddress);
      }
    }, {
      key: "release",
      value: function release() {
        this._pvResamplerDelete(this._objectAddress);
      }
    }, {
      key: "inputBufferLength",
      get: function get() {
        return this._inputBufferLength;
      }
    }, {
      key: "frameLength",
      get: function get() {
        return this._frameLength;
      }
    }, {
      key: "version",
      get: function get() {
        return Resampler._version;
      }
    }, {
      key: "getNumRequiredInputSamples",
      value: function getNumRequiredInputSamples(numSample) {
        return this._pvResamplerConvertNumSamplesToInputSampleRate(this._objectAddress, numSample);
      }
    }, {
      key: "getNumRequiredOutputSamples",
      value: function getNumRequiredOutputSamples(numSample) {
        return this._pvResamplerConvertNumSamplesToOutputSampleRate(this._objectAddress, numSample);
      }
    }], [{
      key: "setWasm",
      value: function setWasm(wasm) {
        if (this._wasm === undefined) {
          this._wasm = wasm;
        }
      }
    }, {
      key: "create",
      value: function () {
        var _create = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee(inputFrequency, outputFrequency, order, frameLength) {
          var wasmOutput;
          return regenerator$1.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Resampler.initWasm(inputFrequency, outputFrequency, order, frameLength);
              case 2:
                wasmOutput = _context.sent;
                return _context.abrupt("return", new Resampler(wasmOutput));
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function create(_x, _x2, _x3, _x4) {
          return _create.apply(this, arguments);
        }
        return create;
      }()
    }, {
      key: "initWasm",
      value: function () {
        var _initWasm = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee2(inputFrequency, outputFrequency, order, frameLength) {
          var memory, memoryBufferUint8, pvConsoleLogWasm, pvAssertWasm, importObject, wasmCodeArray, _yield$WebAssembly$in, instance, cAlignedAlloc, pvResamplerInit, pvResamplerConvertNumSamplesToInputSampleRate, pvResamplerConvertNumSamplesToOutputSampleRate, pvResamplerVersion, objectAddressAddress, status, versionAddress, version, memoryBufferView, objectAddress, inputFrameLength, inputBufferAddress, outputBufferAddress, pvResamplerReset, pvResamplerProcess, pvResamplerDelete;
          return regenerator$1.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                // A WebAssembly page has a constant size of 64KiB. -> 4MiB ~= 64 pages
                // minimum memory requirements for init: 2 pages
                memory = new WebAssembly.Memory({
                  initial: 64
                });
                memoryBufferUint8 = new Uint8Array(memory.buffer);
                pvConsoleLogWasm = function pvConsoleLogWasm(index) {
                  // eslint-disable-next-line no-console
                  console.log(arrayBufferToStringAtIndex(memoryBufferUint8, index));
                };
                pvAssertWasm = function pvAssertWasm(expr, line, fileNameAddress) {
                  if (expr === 0) {
                    var fileName = arrayBufferToStringAtIndex(memoryBufferUint8, fileNameAddress);
                    throw new Error("assertion failed at line ".concat(line, " in \"").concat(fileName, "\""));
                  }
                };
                importObject = {
                  // eslint-disable-next-line camelcase
                  wasi_snapshot_preview1: wasiSnapshotPreview1Emulator,
                  env: {
                    memory: memory,
                    // eslint-disable-next-line camelcase
                    pv_console_log_wasm: pvConsoleLogWasm,
                    // eslint-disable-next-line camelcase
                    pv_assert_wasm: pvAssertWasm
                  }
                };
                wasmCodeArray = base64ToUint8Array(this._wasm);
                _context2.next = 8;
                return WebAssembly.instantiate(wasmCodeArray, importObject);
              case 8:
                _yield$WebAssembly$in = _context2.sent;
                instance = _yield$WebAssembly$in.instance;
                cAlignedAlloc = instance.exports.aligned_alloc;
                pvResamplerInit = instance.exports.pv_resampler_init;
                pvResamplerConvertNumSamplesToInputSampleRate = instance.exports.pv_resampler_convert_num_samples_to_input_sample_rate;
                pvResamplerConvertNumSamplesToOutputSampleRate = instance.exports.pv_resampler_convert_num_samples_to_output_sample_rate;
                pvResamplerVersion = instance.exports.pv_resampler_version;
                objectAddressAddress = cAlignedAlloc(Int32Array.BYTES_PER_ELEMENT, Int32Array.BYTES_PER_ELEMENT);
                if (!(objectAddressAddress === 0)) {
                  _context2.next = 18;
                  break;
                }
                throw new Error('malloc failed: Cannot allocate memory');
              case 18:
                status = pvResamplerInit(inputFrequency, outputFrequency, order, objectAddressAddress);
                versionAddress = pvResamplerVersion();
                version = arrayBufferToStringAtIndex(memoryBufferUint8, versionAddress);
                if (!(status !== PV_STATUS_SUCCESS)) {
                  _context2.next = 23;
                  break;
                }
                throw new Error("pv_resampler_init failed with status ".concat(status));
              case 23:
                memoryBufferView = new DataView(memory.buffer);
                objectAddress = memoryBufferView.getInt32(objectAddressAddress, true);
                inputFrameLength = pvResamplerConvertNumSamplesToInputSampleRate(objectAddress, frameLength) + 1;
                inputBufferAddress = cAlignedAlloc(Int16Array.BYTES_PER_ELEMENT, inputFrameLength * Int16Array.BYTES_PER_ELEMENT);
                if (!(inputBufferAddress === 0)) {
                  _context2.next = 29;
                  break;
                }
                throw new Error('malloc failed: Cannot allocate memory');
              case 29:
                outputBufferAddress = cAlignedAlloc(Int16Array.BYTES_PER_ELEMENT, frameLength * Int16Array.BYTES_PER_ELEMENT);
                if (!(outputBufferAddress === 0)) {
                  _context2.next = 32;
                  break;
                }
                throw new Error('malloc failed: Cannot allocate memory');
              case 32:
                pvResamplerReset = instance.exports.pv_resampler_reset;
                pvResamplerProcess = instance.exports.pv_resampler_process;
                pvResamplerDelete = instance.exports.pv_resampler_delete;
                return _context2.abrupt("return", {
                  cAlignedAlloc: cAlignedAlloc,
                  frameLength: frameLength,
                  inputBufferAddress: inputBufferAddress,
                  inputFrameLength: inputFrameLength,
                  memory: memory,
                  objectAddress: objectAddress,
                  outputBufferAddress: outputBufferAddress,
                  pvResamplerConvertNumSamplesToInputSampleRate: pvResamplerConvertNumSamplesToInputSampleRate,
                  pvResamplerConvertNumSamplesToOutputSampleRate: pvResamplerConvertNumSamplesToOutputSampleRate,
                  pvResamplerDelete: pvResamplerDelete,
                  pvResamplerInit: pvResamplerInit,
                  pvResamplerProcess: pvResamplerProcess,
                  pvResamplerReset: pvResamplerReset,
                  version: version
                });
              case 36:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function initWasm(_x5, _x6, _x7, _x8) {
          return _initWasm.apply(this, arguments);
        }
        return initWasm;
      }()
    }]);
    return Resampler;
  }();
  _defineProperty$1(Resampler, "_wasm", void 0);
  _defineProperty$1(Resampler, "_version", void 0);

  Resampler.setWasm(resamplerWasm);
  ResamplerWorker.setWasm(resamplerWasm);

  exports.ResamplerWorker = ResamplerWorker;
  exports.VuMeterEngine = VuMeterEngine;
  exports.WebVoiceProcessor = WebVoiceProcessor;
  exports.WvpError = WvpError;
  exports.browserCompatibilityCheck = browserCompatibilityCheck;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
