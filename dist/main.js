/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MainWindow.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainWindow.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libui-node */ "libui-node");
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var systeminformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! systeminformation */ "./node_modules/systeminformation/lib/index.js");
/* harmony import */ var systeminformation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(systeminformation__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      msg: 'First Desktop App Using Vuido',
      checkboxState: false,
      text: '',
      dselected: 'Option 1',
      progress: 50,
      rselected: 'Option 3',
      slider: 20,
      spinbox: 40,
      batteryCycle: 0,
      batteryPercent: 0,
      batteryIsCharging: false,
      batteryUpdateInfo: false
    };
  },
  mounted() {
    this.updateDataBattery();
    this.$options.interval = setInterval(this.updateDataBattery, 10000);
  },
  beforeDestroy() {
    clearTimeout(this.$options.timeout);
    clearInterval(this.$options.interval);
  },
  methods: {
    updateDataBattery() {
      systeminformation__WEBPACK_IMPORTED_MODULE_1___default.a.battery(data => {
        this.batteryUpdateInfo = false;
        this.batteryPercent = data.percent;
        this.batteryIsCharging = data.ischarging;
        this.batteryCycle = data.cyclecount;

        this.$options.timeout = setTimeout(() => {
          this.batteryUpdateInfo = true;
        }, 1000);
      });
    },
    reverse() {
      this.msg = this.msg.split('').reverse().join('');
    },
    increase() {
      if (this.slider < 100) {
        this.slider++;
      }
    },
    decrease() {
      if (this.slider != 0) {
        this.slider--;
      }
    },
    exit() {
      libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.stopLoop();
    }
  }
});

/***/ }),

/***/ "./node_modules/systeminformation/lib/battery.js":
/*!*******************************************************!*\
  !*** ./node_modules/systeminformation/lib/battery.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// battery.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 6. Battery
// ----------------------------------------------------------------------------------

const exec = __webpack_require__(/*! child_process */ "child_process").exec;
const fs = __webpack_require__(/*! fs */ "fs");
const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");

let _platform = process.platform;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _sunos = (_platform === 'sunos');

const opts = {
  windowsHide: true
};

module.exports = function (callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let result = {
        hasbattery: false,
        cyclecount: 0,
        ischarging: false,
        maxcapacity: 0,
        currentcapacity: 0,
        percent: 0,
        acconnected: true
      };

      if (_linux) {
        let battery_path = '';
        if (fs.existsSync('/sys/class/power_supply/BAT1/status')) {
          battery_path = '/sys/class/power_supply/BAT1/';
        } else if (fs.existsSync('/sys/class/power_supply/BAT0/status')) {
          battery_path = '/sys/class/power_supply/BAT0/';
        }
        if (battery_path) {
          exec('cat ' + battery_path + 'status', function (error, stdout) {
            if (!error) {
              let lines = stdout.toString().split('\n');
              if (lines.length > 0 && lines[0]) result.ischarging = (lines[0].trim().toLowerCase() === 'charging');
              result.acconnected = result.ischarging;
            }
            exec('cat ' + battery_path + 'cyclec_ount', function (error, stdout) {
              if (!error) {
                let lines = stdout.toString().split('\n');
                if (lines.length > 0 && lines[0]) result.cyclecount = parseFloat(lines[0].trim());
              }
              exec('cat ' + battery_path + 'charge_full', function (error, stdout) {
                if (!error) {
                  let lines = stdout.toString().split('\n');
                  if (lines.length > 0 && lines[0]) result.maxcapacity = parseFloat(lines[0].trim());
                }
                exec('cat ' + battery_path + 'charge_now', function (error, stdout) {
                  if (!error) {
                    let lines = stdout.toString().split('\n');
                    if (lines.length > 0 && lines[0]) result.currentcapacity = parseFloat(lines[0].trim());
                  }
                  if (result.maxcapacity && result.currentcapacity) {
                    result.hasbattery = true;
                    result.percent = 100.0 * result.currentcapacity / result.maxcapacity;
                  }
                  if (callback) { callback(result); }
                  resolve(result);
                });
              });
            });
          });
        } else {
          if (callback) { callback(result); }
          resolve(result);
        }
      }
      if (_freebsd || _openbsd) {
        exec('sysctl hw.acpi.battery hw.acpi.acline', function (error, stdout) {
          let lines = stdout.toString().split('\n');
          const batteries = parseInt('0' + util.getValue(lines, 'hw.acpi.battery.units'), 10);
          const percent = parseInt('0' + util.getValue(lines, 'hw.acpi.battery.life'), 10);
          result.hasbattery = (batteries > 0);
          result.cyclecount = -1;
          result.ischarging = util.getValue(lines, 'hw.acpi.acline') !== '1';
          result.acconnected = result.ischarging;
          result.maxcapacity = -1;
          result.currentcapacity = -1;
          result.percent = batteries ? percent : -1;
          if (callback) { callback(result); }
          resolve(result);
        });
      }

      if (_darwin) {
        exec('ioreg -n AppleSmartBattery -r | egrep "CycleCount|IsCharging|MaxCapacity|CurrentCapacity"; pmset -g batt | grep %', function (error, stdout) {
          if (stdout) {
            let lines = stdout.toString().replace(/ +/g, '').replace(/"+/g, '').replace(/-/g, '').split('\n');
            result.cyclecount = parseInt('0' + util.getValue(lines, 'cyclecount', '='), 10);
            result.maxcapacity = parseInt('0' + util.getValue(lines, 'maxcapacity', '='), 10);
            result.currentcapacity = parseInt('0' + util.getValue(lines, 'currentcapacity', '='), 10);
            let percent = -1;
            const line = util.getValue(lines, 'internal', 'Battery');
            let parts = line.split(';');
            if (parts && parts[0]) {
              let parts2 = parts[0].split('\t');
              if (parts2 && parts2[1]) {
                percent = parseFloat(parts2[1].trim().replace('%', ''));
              }
            }
            if (parts && parts[1]) {
              result.ischarging = (parts[1].trim() === 'charging');
              result.acconnected = (parts[1].trim() !== 'discharging');
            } else {
              result.ischarging = util.getValue(lines, 'ischarging', '=').toLowerCase() === 'yes';
              result.acconnected = result.ischarging;
            }
            if (result.maxcapacity && result.currentcapacity) {
              result.hasbattery = true;
              result.percent = percent !== -1 ? percent : Math.round(100.0 * result.currentcapacity / result.maxcapacity);
            }
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_sunos) {
        if (callback) { callback(result); }
        resolve(result);
      }
      if (_windows) {
        try {
          exec(util.getWmic() + ' Path Win32_Battery Get BatteryStatus, DesignCapacity, EstimatedChargeRemaining /value', opts, function (error, stdout) {
            if (stdout) {
              let lines = stdout.split('\r\n');
              let status = util.getValue(lines, 'BatteryStatus', '=').trim();
              if (status) {
                status = parseInt(status || '2');
                result.hasbattery = true;
                result.maxcapacity = parseInt(util.getValue(lines, 'DesignCapacity', '=') || 0);
                result.percent = parseInt(util.getValue(lines, 'EstimatedChargeRemaining', '=') || 0);
                result.currentcapacity = parseInt(result.maxcapacity * result.percent / 100);
                result.ischarging = (status >= 6 && status <= 9) || (!(status === 3) && !(status === 1) && result.percent < 100);
                result.acconnected = result.ischarging;
              }
            }
            if (callback) { callback(result); }
            resolve(result);
          });
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);    
        }
      }
    });
  });
};


/***/ }),

/***/ "./node_modules/systeminformation/lib/cpu.js":
/*!***************************************************!*\
  !*** ./node_modules/systeminformation/lib/cpu.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// cpu.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 4. CPU
// ----------------------------------------------------------------------------------

const os = __webpack_require__(/*! os */ "os");
const exec = __webpack_require__(/*! child_process */ "child_process").exec;
const fs = __webpack_require__(/*! fs */ "fs");
const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");

let _platform = process.platform;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _sunos = (_platform === 'sunos');

const opts = {
  windowsHide: true
};

let _cpu_speed = '0.00';
let _current_cpu = {
  user: 0,
  nice: 0,
  system: 0,
  idle: 0,
  irq: 0,
  load: 0,
  tick: 0,
  ms: 0,
  currentload: 0,
  currentload_user: 0,
  currentload_system: 0,
  currentload_nice: 0,
  currentload_idle: 0,
  currentload_irq: 0,
  raw_currentload: 0,
  raw_currentload_user: 0,
  raw_currentload_system: 0,
  raw_currentload_nice: 0,
  raw_currentload_idle: 0,
  raw_currentload_irq: 0
};
let _cpus = [];
let _corecount = 0;

const AMDBaseFrequencies = {
  'FX|4100': '3.6',
  'FX|4120': '3.9',
  'FX|4130': '3.8',
  'FX|4150': '3.8',
  'FX|4170': '4.2',
  'FX|6100': '3.3',
  'FX|6120': '3.6',
  'FX|6130': '3.6',
  'FX|6200': '3.8',
  'FX|8100': '2.8',
  'FX|8120': '3.1',
  'FX|8140': '3.2',
  'FX|8150': '3.6',
  'FX|8170': '3.9',
  'FX|4300': '3.8',
  'FX|4320': '4.0',
  'FX|4350': '4.2',
  'FX|6300': '3.5',
  'FX|6350': '3.9',
  'FX|8300': '3.3',
  'FX|8310': '3.4',
  'FX|8320': '3.5',
  'FX|8350': '4.0',
  'FX|8370': '4.0',
  'FX|9370': '4.4',
  'FX|9590': '4.7',
  'FX|8320E': '3.2',
  'FX|8370E': '3.3',
  '1950X': '3.4',
  '1920X': '3.5',
  '1920': '3.2',
  '1900X': '3.8',
  '1800X': '3.6',
  '1700X': '3.4',
  'Pro 1700X': '3.5',
  '1700': '3.0',
  'Pro 1700': '3.0',
  '1600X': '3.6',
  '1600': '3.2',
  'Pro 1600': '3.2',
  '1500X': '3.5',
  'Pro 1500': '3.5',
  '1400': '3.2',
  '1300X': '3.5',
  'Pro 1300': '3.5',
  '1200': '3.1',
  'Pro 1200': '3.1',
  '7601': '2.2',
  '7551': '2.0',
  '7501': '2.0',
  '74501': '2.3',
  '7401': '2.0',
  '7351': '2.4',
  '7301': '2.2',
  '7281': '2.1',
  '7251': '2.1',
  '7551P': '2.0',
  '7401P': '2.0',
  '7351P': '2.4'
};

function cpuBrandManufacturer(res) {
  res.brand = res.brand.replace(/\(R\)+/g, '®');
  res.brand = res.brand.replace(/\(TM\)+/g, '™');
  res.brand = res.brand.replace(/\(C\)+/g, '©');
  res.brand = res.brand.replace(/CPU+/g, '').trim();
  res.manufacturer = res.brand.split(' ')[0];

  let parts = res.brand.split(' ');
  parts.shift();
  res.brand = parts.join(' ');
  return res;
}

function getAMDSpeed(brand) {
  let result = '0.00';
  for (let key in AMDBaseFrequencies) {
    if (AMDBaseFrequencies.hasOwnProperty(key)) {
      let parts = key.split('|');
      //console.log(item);
      let found = 0;
      parts.forEach(item => {
        if (brand.indexOf(item) > -1) {
          found++;
        }
      });
      if (found === parts.length) {
        result = AMDBaseFrequencies[key];
      }
    }
  }
  return result;
}

// --------------------------
// CPU - brand, speed

function getCpu() {

  return new Promise((resolve) => {
    process.nextTick(() => {
      const UNKNOWN = 'unknown';
      let result = {
        manufacturer: UNKNOWN,
        brand: UNKNOWN,
        vendor: '',
        family: '',
        model: '',
        stepping: '',
        revision: '',
        voltage: '',
        speed: '0.00',
        speedmin: '',
        speedmax: '',
        cores: util.cores(),
        cache: {}
      };
      if (_darwin) {
        exec('sysctl machdep.cpu hw.cpufrequency_max hw.cpufrequency_min', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            const modelline = util.getValue(lines, 'machdep.cpu.brand_string');
            result.brand = modelline.split('@')[0].trim();
            result.speed = modelline.split('@')[1].trim();
            result.speed = parseFloat(result.speed.replace(/GHz+/g, '')).toFixed(2);
            _cpu_speed = result.speed;
            result = cpuBrandManufacturer(result);
            result.speedmin = (util.getValue(lines, 'hw.cpufrequency_min') / 1000000000.0 ).toFixed(2);
            result.speedmax = (util.getValue(lines, 'hw.cpufrequency_max') / 1000000000.0 ).toFixed(2);
            result.vendor = util.getValue(lines, 'machdep.cpu.vendor');
            result.family = util.getValue(lines, 'machdep.cpu.family');
            result.model = util.getValue(lines, 'machdep.cpu.model');
            result.stepping = util.getValue(lines, 'machdep.cpu.stepping');

          }
          cpuCache().then(res => {
            result.cache = res;
            resolve(result);
          });
        });
      }
      if (_linux) {
        let modelline = '';
        let lines = [];
        if (os.cpus()[0] && os.cpus()[0].model) modelline = os.cpus()[0].model;
        exec('export LC_ALL=C; lscpu; unset LC_ALL', function (error, stdout) {
          if (!error) {
            lines = stdout.toString().split('\n');
          }
          modelline = util.getValue(lines, 'model name') || modelline;
          result.brand = modelline.split('@')[0].trim();
          result.speed = modelline.split('@')[1] ? parseFloat(modelline.split('@')[1].trim()).toFixed(2) : '0.00';
          if (result.speed === '0.00' && result.brand.indexOf('AMD') > -1) {
            result.speed = getAMDSpeed(result.brand);
          }
          if (result.speed === '0.00') {
            let current = getCpuCurrentSpeedSync();
            if (current !== '0.00') result.speed = current.avg.toFixed(2);
          }
          _cpu_speed = result.speed;
          result.speedmin = Math.round(parseFloat(util.getValue(lines, 'cpu min mhz').replace(/,/g, '.')) / 10.0) / 100;
          result.speedmin = result.speedmin ? parseFloat(result.speedmin).toFixed(2) : '';
          result.speedmax = Math.round(parseFloat(util.getValue(lines, 'cpu max mhz').replace(/,/g, '.')) / 10.0) / 100;
          result.speedmax = result.speedmax ? parseFloat(result.speedmax).toFixed(2) : '';

          result = cpuBrandManufacturer(result);
          result.vendor = util.getValue(lines, 'vendor id');
          // if (!result.vendor) { result.vendor = util.getValue(lines, 'anbieterkennung'); }
          result.family = util.getValue(lines, 'cpu family');
          // if (!result.family) { result.family = util.getValue(lines, 'prozessorfamilie'); }
          result.model = util.getValue(lines, 'model:');
          // if (!result.model) { result.model = util.getValue(lines, 'modell:'); }
          result.stepping = util.getValue(lines, 'stepping');
          result.revision = util.getValue(lines, 'cpu revision');
          result.cache.l1d = util.getValue(lines, 'l1d cache');
          if (result.cache.l1d) { result.cache.l1d = parseInt(result.cache.l1d) * (result.cache.l1d.indexOf('K') !== -1 ? 1024 : 1); }
          result.cache.l1i = util.getValue(lines, 'l1i cache');
          if (result.cache.l1i) { result.cache.l1i = parseInt(result.cache.l1i) * (result.cache.l1i.indexOf('K') !== -1 ? 1024 : 1); }
          result.cache.l2 = util.getValue(lines, 'l2 cache');
          if (result.cache.l2) { result.cache.l2 = parseInt(result.cache.l2) * (result.cache.l2.indexOf('K') !== -1 ? 1024 : 1); }
          result.cache.l3 = util.getValue(lines, 'l3 cache');
          if (result.cache.l3) { result.cache.l3 = parseInt(result.cache.l3) * (result.cache.l3.indexOf('K') !== -1 ? 1024 : 1); }
          resolve(result);
        });
      }
      if (_freebsd || _openbsd) {
        let modelline = '';
        let lines = [];
        if (os.cpus()[0] && os.cpus()[0].model) modelline = os.cpus()[0].model;
        exec('export LC_ALL=C; dmidecode -t 4; dmidecode -t 7 ; unset LC_ALL', function (error, stdout) {
          let cache = [];
          if (!error) {
            const data = stdout.toString().split('# dmidecode');
            const processor = data.length > 0 ? data[1] : '';
            cache = data.length > 1 ? data[2].split('Cache Information') : [];

            lines = processor.split('\n');
          }
          result.brand = modelline.split('@')[0].trim();
          result.speed = modelline.split('@')[1] ? parseFloat(modelline.split('@')[1].trim()).toFixed(2) : '0.00';
          if (result.speed === '0.00' && result.brand.indexOf('AMD') > -1) {
            result.speed = getAMDSpeed(result.brand);
          }
          if (result.speed === '0.00') {
            let current = getCpuCurrentSpeedSync();
            if (current !== '0.00') result.speed = current.avg.toFixed(2);
          }
          _cpu_speed = result.speed;
          result.speedmin = '';
          result.speedmax = Math.round(parseFloat(util.getValue(lines, 'max speed').replace(/Mhz/g, '')) / 10.0) / 100;
          result.speedmax = result.speedmax ? parseFloat(result.speedmax).toFixed(2) : '';

          result = cpuBrandManufacturer(result);
          result.vendor = util.getValue(lines, 'manufacturer');
          let sig = util.getValue(lines, 'signature');
          sig = sig.split(',');
          for (var i = 0; i < sig.length; i++) {
            sig[i] = sig[i].trim();
          }
          result.family = util.getValue(sig, 'Family', ' ', true);
          result.model = util.getValue(sig, 'Model', ' ', true);
          result.stepping = util.getValue(sig, 'Stepping', ' ', true);
          result.revision = '';
          const voltage = parseFloat(util.getValue(lines, 'voltage'));
          result.voltage = isNaN(voltage) ? '' : voltage.toFixed(2);
          for (let i = 0; i < cache.length; i++) {
            lines = cache[i].split('\n');
            let cacheType = util.getValue(lines,'Socket Designation').toLowerCase().replace(' ', '-').split('-');
            cacheType = cacheType.length ? cacheType[0] : '';
            const sizeParts = util.getValue(lines,'Installed Size').split(' ');
            let size = parseInt(sizeParts[0], 10);
            const unit = sizeParts.length > 1 ? sizeParts[1] : 'kb';
            size = size * (unit === 'kb' ? 1024 : (unit === 'mb' ? 1024 * 1024 : (unit === 'gb' ? 1024 * 1024 * 1024 : 1)));
            if (cacheType) {
              if (cacheType === 'l1') {
                result.cache[cacheType + 'd'] = size / 2;
                result.cache[cacheType + 'i'] = size / 2;
              } else {
                result.cache[cacheType] = size;
              }
            }
          }
          resolve(result);
        });
      }
      if (_sunos) {
        resolve(result);
      }
      if (_windows) {
        try {
          exec(util.getWmic() + ' cpu get name, description, revision, l2cachesize, l3cachesize, manufacturer, currentclockspeed, maxclockspeed /value', opts, function (error, stdout) {
            if (!error) {
              let lines = stdout.split('\r\n');
              let name = util.getValue(lines, 'name', '=') || '';
              if (name.indexOf('@') >= 0) {
                result.brand = name.split('@')[0].trim();
                result.speed = name.split('@')[1].trim();
                result.speed = parseFloat(result.speed.replace(/GHz+/g, '').trim()).toFixed(2);
                _cpu_speed = result.speed;
              } else {
                result.brand = name.trim();
                result.speed = 0;
              }
              result = cpuBrandManufacturer(result);
              result.revision = util.getValue(lines, 'revision', '=');
              result.cache.l1d = 0;
              result.cache.l1i = 0;
              result.cache.l2 = util.getValue(lines, 'l2cachesize', '=');
              result.cache.l3 = util.getValue(lines, 'l3cachesize', '=');
              if (result.cache.l2) { result.cache.l2 = parseInt(result.cache.l2, 10) * 1024; }
              if (result.cache.l3) { result.cache.l3 = parseInt(result.cache.l3, 10) * 1024; }
              result.vendor = util.getValue(lines, 'manufacturer', '=');
              result.speedmax = Math.round(parseFloat(util.getValue(lines, 'maxclockspeed', '=').replace(/,/g, '.')) / 10.0) / 100;
              result.speedmax = result.speedmax ? parseFloat(result.speedmax).toFixed(2) : '';
              if (!result.speed && result.brand.indexOf('AMD') > -1) {
                result.speed = getAMDSpeed(result.brand);
              }
              if (!result.speed) {
                result.speed = result.speedmax;
              }
  
              let description = util.getValue(lines, 'description', '=').split(' ');
              for (let i = 0; i < description.length; i++) {
                if (description[i].toLowerCase().startsWith('family') && (i+1) < description.length && description[i+1]) {
                  result.family = description[i+1];
                }
                if (description[i].toLowerCase().startsWith('model') && (i+1) < description.length && description[i+1]) {
                  result.model = description[i+1];
                }
                if (description[i].toLowerCase().startsWith('stepping') && (i+1) < description.length && description[i+1]) {
                  result.stepping = description[i+1];
                }
              }
            }
            exec(util.getWmic() + ' path Win32_CacheMemory get CacheType,InstalledSize,Purpose', function (error, stdout) {
              if (!error) {
                let lines = stdout.split('\r\n').filter(line => line.trim() !== '').filter((line, idx) => idx > 0);
                lines.forEach(function (line) {
                  if (line !== '') {
                    line = line.trim().split(/\s\s+/);
                    // L1 Instructions
                    if (line[2] === 'L1 Cache' && line[0] === '3') {
                      result.cache.l1i = parseInt(line[1], 10);
                    }
                    // L1 Data
                    if (line[2] === 'L1 Cache' && line[0] === '4') {
                      result.cache.l1d = parseInt(line[1], 10);
                    }
                  }
                });
              }
              resolve(result);
            });
          });
        } catch (e) {
          resolve(result);    
        }
      }
    });
  });
}

// --------------------------
// CPU - Processor Data

function cpu(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      getCpu().then(result => {
        if (callback) { callback(result); }
        resolve(result);
      });
    });
  });
}

exports.cpu = cpu;

// --------------------------
// CPU - current speed - in GHz

function getCpuCurrentSpeedSync() {

  let cpus = os.cpus();
  let minFreq = 999999999;
  let maxFreq = 0;
  let avgFreq = 0;

  if (cpus.length) {
    for (let i in cpus) {
      if (cpus.hasOwnProperty(i)) {
        avgFreq = avgFreq + cpus[i].speed;
        if (cpus[i].speed > maxFreq) maxFreq = cpus[i].speed;
        if (cpus[i].speed < minFreq) minFreq = cpus[i].speed;
      }
    }
    avgFreq = avgFreq / cpus.length;
    return {
      min: parseFloat(((minFreq + 1) / 1000).toFixed(2)),
      max: parseFloat(((maxFreq + 1)  / 1000).toFixed(2)),
      avg: parseFloat(((avgFreq + 1)  / 1000).toFixed(2))
    };
  } else {
    return {
      min: 0,
      max: 0,
      avg: 0
    };
  }
}

function cpuCurrentspeed(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let result = getCpuCurrentSpeedSync();
      if (result === 0 && _cpu_speed !== '0.00') result = parseFloat(_cpu_speed);

      if (callback) { callback(result); }
      resolve(result);
    });
  });
}

exports.cpuCurrentspeed = cpuCurrentspeed;

// --------------------------
// CPU - temperature
// if sensors are installed

function cpuTemperature(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let result = {
        main: -1.0,
        cores: [],
        max: -1.0
      };
      if (_linux) {
        exec('sensors', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            lines.forEach(function (line) {
              let regex = /\+([^°]*)/g;
              let temps = line.match(regex);
              if (line.split(':')[0].toUpperCase().indexOf('PHYSICAL') !== -1) {
                result.main = parseFloat(temps);
              }
              if (line.split(':')[0].toUpperCase().indexOf('CORE ') !== -1) {
                result.cores.push(parseFloat(temps));
              }
            });
            if (result.cores.length > 0) {
              let maxtmp = Math.max.apply(Math, result.cores);
              result.max = (maxtmp > result.main) ? maxtmp : result.main;
            }
            if (callback) { callback(result); }
            resolve(result);
          } else {
            fs.stat('/sys/class/thermal/thermal_zone0/temp', function(err) {
              if(err === null) {
                exec('cat /sys/class/thermal/thermal_zone0/temp', function (error, stdout) {
                  if (!error) {
                    let lines = stdout.toString().split('\n');
                    if (lines.length > 0) {
                      result.main = parseFloat(lines[0]) / 1000.0;
                      result.max = result.main;
                    }
                  }
                  if (callback) { callback(result); }
                  resolve(result);
                });
              } else {
                exec('/opt/vc/bin/vcgencmd measure_temp', function (error, stdout) {
                  if (!error) {
                    let lines = stdout.toString().split('\n');
                    if (lines.length > 0 && lines[0].indexOf('=')) {
                      result.main = parseFloat(lines[0].split('=')[1]);
                      result.max = result.main;
                    }
                  }
                  if (callback) { callback(result); }
                  resolve(result);
                });
              }
            });

          }
        });
      }
      if (_freebsd || _openbsd) {
        exec('sysctl dev.cpu | grep temp', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            let sum = 0;
            lines.forEach(function (line) {
              const parts = line.split(':');
              if (parts.length > 0) {
                const temp = parseFloat(parts[1].replace(',', '.'), 10);
                if (temp > result.max) result.max = temp;
                sum = sum + temp;
                result.cores.push(temp);
              }
            });
            if (result.cores.length) {
              result.main = Math.round(sum / result.cores.length * 100) / 100;
            }
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_darwin) {
        let osxTemp = null;
        try {
          osxTemp = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'osx-temperature-sensor'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        } catch (er) {
          osxTemp = null;
        }
        if (osxTemp) {
          result = osxTemp.cpuTemperature();
        }

        if (callback) { callback(result); }
        resolve(result);
      }
      if (_sunos) {
        if (callback) { callback(result); }
        resolve(result);
      }
      if (_windows) {
        try {
          exec(util.getWmic() + ' /namespace:\\\\root\\wmi PATH MSAcpi_ThermalZoneTemperature get CurrentTemperature', opts, function (error, stdout) {
            if (!error) {
              let sum = 0;
              let lines = stdout.split('\r\n').filter(line => line.trim() !== '').filter((line, idx) => idx > 0);
              lines.forEach(function (line) {
                let value = (parseInt(line) - 2732) / 10;
                sum = sum + value;
                if (value > result.max) result.max = value;
                result.cores.push(value);
              });
              if (result.cores.length) {
                result.main = sum / result.cores.length;
              }
            }
            if (callback) { callback(result); }
            resolve(result);
          });
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);    
        }
      }
    });
  });
}

exports.cpuTemperature = cpuTemperature;

// --------------------------
// CPU Flags

function cpuFlags(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let result = '';
      if (_windows) {
        try {
          exec('reg query "HKEY_LOCAL_MACHINE\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0" /v FeatureSet', opts, function (error, stdout) {
            if (!error) {
              let flag_hex = stdout.split('0x').pop().trim();
              let flag_bin_unpadded = parseInt(flag_hex, 16).toString(2);
              let flag_bin = '0'.repeat(32 - flag_bin_unpadded.length) + flag_bin_unpadded;
              // empty flags are the reserved fields in the CPUID feature bit list
              // as found on wikipedia:
              // https://en.wikipedia.org/wiki/CPUID
              let all_flags = [
                'fpu', 'vme', 'de', 'pse', 'tsc', 'msr', 'pae', 'mce', 'cx8', 'apic',
                '', 'sep', 'mtrr', 'pge', 'mca', 'cmov', 'pat', 'pse-36', 'psn', 'clfsh',
                '', 'ds', 'acpi', 'mmx', 'fxsr', 'sse', 'sse2', 'ss', 'htt', 'tm', 'ia64', 'pbe'
              ];
              for (let f = 0; f < all_flags.length; f++) {
                if (flag_bin[f] === '1' && all_flags[f] !== '') {
                  result += ' ' + all_flags[f];
                }
              }
              result = result.trim();
            }
            if (callback) { callback(result); }
            resolve(result);
          });
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);    
        }
      }
      if (_linux) {
        exec('lscpu', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            lines.forEach(function (line) {
              if (line.split(':')[0].toUpperCase().indexOf('FLAGS') !== -1) {
                result = line.split(':')[1].trim().toLowerCase();
              }
            });
          }
          if (!result) {
            exec('cat /proc/cpuinfo', function (error, stdout) {
              if (!error) {
                let lines = stdout.toString().split('\n');
                result = util.getValue(lines, 'features', ':', true).toLowerCase();
              }
              if (callback) { callback(result); }
              resolve(result);  
            });
          } else {
            if (callback) { callback(result); }
            resolve(result);  
          }
        });
      }
      if (_freebsd || _openbsd) {
        exec('export LC_ALL=C; dmidecode -t 4; unset LC_ALL', function (error, stdout) {
          let flags = [];
          if (!error) {
            let parts = stdout.toString().split('\tFlags:');
            const lines = parts.length > 1 ? parts[1].split('\tVersion:')[0].split['\n'] : [];
            lines.forEach(function (line) {
              let flag = (line.indexOf('(') ? line .split('(')[0].toLowerCase() : '').trim().replace(/\t/g, '');
              if (flag) {
                flags.push(flag);
              }
            });
          }
          result = flags.join(' ').trim();
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_darwin) {
        exec('sysctl machdep.cpu.features', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            if (lines.length > 0 && lines[0].indexOf('machdep.cpu.features:') !== -1) {
              result = lines[0].split(':')[1].trim().toLowerCase();
            }
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_sunos) {
        if (callback) { callback(result); }
        resolve(result);
      }
    });
  });
}

exports.cpuFlags = cpuFlags;

// --------------------------
// CPU Flags

function cpuCache(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {

      let result = {
        l1d: -1,
        l1i: -1,
        l2: -1,
        l3: -1,
      };
      if (_linux) {
        exec('lscpu', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            lines.forEach(function (line) {
              let parts = line.split(':');
              if (parts[0].toUpperCase().indexOf('L1D CACHE') !== -1) {
                result.l1d = parseInt(parts[1].trim()) * (parts[1].indexOf('K') !== -1 ? 1024 : 1);
              }
              if (parts[0].toUpperCase().indexOf('L1I CACHE') !== -1) {
                result.l1i = parseInt(parts[1].trim()) * (parts[1].indexOf('K') !== -1 ? 1024 : 1);
              }
              if (parts[0].toUpperCase().indexOf('L2 CACHE') !== -1) {
                result.l2 = parseInt(parts[1].trim()) * (parts[1].indexOf('K') !== -1 ? 1024 : 1);
              }
              if (parts[0].toUpperCase().indexOf('L3 CACHE') !== -1) {
                result.l3 = parseInt(parts[1].trim()) * (parts[1].indexOf('K') !== -1 ? 1024 : 1);
              }
            });
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_freebsd || _openbsd) {
        exec('export LC_ALL=C; dmidecode -t 7 ; unset LC_ALL', function (error, stdout) {
          let cache = [];
          if (!error) {
            const data = stdout.toString();
            cache = data.split('Cache Information');
            cache.shift();
          }
          for (let i = 0; i < cache.length; i++) {
            const lines = cache[i].split('\n');
            let cacheType = util.getValue(lines,'Socket Designation').toLowerCase().replace(' ', '-').split('-');
            cacheType = cacheType.length ? cacheType[0] : '';
            const sizeParts = util.getValue(lines,'Installed Size').split(' ');
            let size = parseInt(sizeParts[0], 10);
            const unit = sizeParts.length > 1 ? sizeParts[1] : 'kb';
            size = size * (unit === 'kb' ? 1024 : (unit === 'mb' ? 1024 * 1024 : (unit === 'gb' ? 1024 * 1024 * 1024 : 1)));
            if (cacheType) {
              if (cacheType === 'l1') {
                result.cache[cacheType + 'd'] = size / 2;
                result.cache[cacheType + 'i'] = size / 2;
              } else {
                result.cache[cacheType] = size;
              }
            }
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_darwin) {
        exec('sysctl hw.l1icachesize hw.l1dcachesize hw.l2cachesize hw.l3cachesize', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            lines.forEach(function (line) {
              let parts = line.split(':');
              if (parts[0].toLowerCase().indexOf('hw.l1icachesize') !== -1) {
                result.l1d = parseInt(parts[1].trim()) * (parts[1].indexOf('K') !== -1 ? 1024 : 1);
              }
              if (parts[0].toLowerCase().indexOf('hw.l1dcachesize') !== -1) {
                result.l1i = parseInt(parts[1].trim()) * (parts[1].indexOf('K') !== -1 ? 1024 : 1);
              }
              if (parts[0].toLowerCase().indexOf('hw.l2cachesize') !== -1) {
                result.l2 = parseInt(parts[1].trim()) * (parts[1].indexOf('K') !== -1 ? 1024 : 1);
              }
              if (parts[0].toLowerCase().indexOf('hw.l3cachesize') !== -1) {
                result.l3 = parseInt(parts[1].trim()) * (parts[1].indexOf('K') !== -1 ? 1024 : 1);
              }
            });
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_sunos) {
        if (callback) { callback(result); }
        resolve(result);
      }
      if (_windows) {
        try {
          exec(util.getWmic() + ' cpu get l2cachesize, l3cachesize /value', opts, function (error, stdout) {
            if (!error) {
              let lines = stdout.split('\r\n');
              result.l1d = 0;
              result.l1i = 0;
              result.l2 = util.getValue(lines, 'l2cachesize', '=');
              result.l3 = util.getValue(lines, 'l3cachesize', '=');
              if (result.l2) { result.l2 = parseInt(result.l2) * 1024; }
              if (result.l3) { result.l3 = parseInt(result.l3) * 1024; }
            }
            exec(util.getWmic() + ' path Win32_CacheMemory get CacheType,InstalledSize,Purpose', function (error, stdout) {
              if (!error) {
                let lines = stdout.split('\r\n').filter(line => line.trim() !== '').filter((line, idx) => idx > 0);
                lines.forEach(function (line) {
                  if (line !== '') {
                    line = line.trim().split(/\s\s+/);
                    // L1 Instructions
                    if (line[2] === 'L1 Cache' && line[0] === '3') {
                      result.l1i = parseInt(line[1], 10);
                    }
                    // L1 Data
                    if (line[2] === 'L1 Cache' && line[0] === '4') {
                      result.l1d = parseInt(line[1], 10);
                    }
                  }
                });
              }
              if (callback) { callback(result); }
              resolve(result);
            });
          });
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);    
        }
      }
    });
  });
}

exports.cpuCache = cpuCache;

// --------------------------
// CPU - current load - in %

function getLoad() {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let loads = os.loadavg().map(function (x) { return x / util.cores(); });
      let avgload = parseFloat((Math.max.apply(Math, loads)).toFixed(2));
      let result = {};

      let now = Date.now() - _current_cpu.ms;
      if (now >= 200) {
        _current_cpu.ms = Date.now();
        const cpus = os.cpus();
        let totalUser = 0;
        let totalSystem = 0;
        let totalNice = 0;
        let totalIrq = 0;
        let totalIdle = 0;
        let cores = [];
        _corecount = cpus.length;

        for (let i = 0; i < _corecount; i++) {
          const cpu = cpus[i].times;
          totalUser += cpu.user;
          totalSystem += cpu.sys;
          totalNice += cpu.nice;
          totalIdle += cpu.idle;
          totalIrq += cpu.irq;
          let tmp_tick = (_cpus && _cpus[i] && _cpus[i].totalTick ? _cpus[i].totalTick : 0);
          let tmp_load = (_cpus && _cpus[i] && _cpus[i].totalLoad ? _cpus[i].totalLoad : 0);
          let tmp_user = (_cpus && _cpus[i] && _cpus[i].user ? _cpus[i].user : 0);
          let tmp_system = (_cpus && _cpus[i] && _cpus[i].sys ? _cpus[i].sys : 0);
          let tmp_nice = (_cpus && _cpus[i] && _cpus[i].nice ? _cpus[i].nice : 0);
          let tmp_idle = (_cpus && _cpus[i] && _cpus[i].idle ? _cpus[i].idle : 0);
          let tmp_irq = (_cpus && _cpus[i] && _cpus[i].irq ? _cpus[i].irq : 0);
          _cpus[i] = cpu;
          _cpus[i].totalTick = _cpus[i].user + _cpus[i].sys + _cpus[i].nice + _cpus[i].irq + _cpus[i].idle;
          _cpus[i].totalLoad = _cpus[i].user + _cpus[i].sys + _cpus[i].nice + _cpus[i].irq;
          _cpus[i].currentTick = _cpus[i].totalTick - tmp_tick;
          _cpus[i].load = (_cpus[i].totalLoad - tmp_load);
          _cpus[i].load_user = (_cpus[i].user - tmp_user);
          _cpus[i].load_system = (_cpus[i].sys - tmp_system);
          _cpus[i].load_nice = (_cpus[i].nice - tmp_nice);
          _cpus[i].load_idle = (_cpus[i].idle - tmp_idle);
          _cpus[i].load_irq = (_cpus[i].irq - tmp_irq);
          cores[i] = {};
          cores[i].load = _cpus[i].load / _cpus[i].currentTick * 100;
          cores[i].load_user = _cpus[i].load_user / _cpus[i].currentTick * 100;
          cores[i].load_system = _cpus[i].load_system / _cpus[i].currentTick * 100;
          cores[i].load_nice = _cpus[i].load_nice / _cpus[i].currentTick * 100;
          cores[i].load_idle = _cpus[i].load_idle / _cpus[i].currentTick * 100;
          cores[i].load_irq = _cpus[i].load_irq / _cpus[i].currentTick * 100;
          cores[i].raw_load = _cpus[i].load;
          cores[i].raw_load_user = _cpus[i].load_user;
          cores[i].raw_load_system = _cpus[i].load_system;
          cores[i].raw_load_nice = _cpus[i].load_nice;
          cores[i].raw_load_idle = _cpus[i].load_idle;
          cores[i].raw_load_irq = _cpus[i].load_irq;
        }
        let totalTick = totalUser + totalSystem + totalNice + totalIrq + totalIdle;
        let totalLoad = totalUser + totalSystem + totalNice + totalIrq;
        let currentTick = totalTick - _current_cpu.tick;
        result = {
          avgload: avgload,
          currentload: (totalLoad - _current_cpu.load) / currentTick * 100,
          currentload_user: (totalUser - _current_cpu.user) / currentTick * 100,
          currentload_system: (totalSystem - _current_cpu.system) / currentTick * 100,
          currentload_nice: (totalNice - _current_cpu.nice) / currentTick * 100,
          currentload_idle: (totalIdle - _current_cpu.idle) / currentTick * 100,
          currentload_irq: (totalIrq - _current_cpu.irq) / currentTick * 100,
          raw_currentload: (totalLoad - _current_cpu.load),
          raw_currentload_user: (totalUser - _current_cpu.user),
          raw_currentload_system: (totalSystem - _current_cpu.system),
          raw_currentload_nice: (totalNice - _current_cpu.nice),
          raw_currentload_idle: (totalIdle - _current_cpu.idle),
          raw_currentload_irq: (totalIrq - _current_cpu.irq),
          cpus: cores
        };
        _current_cpu = {
          user: totalUser,
          nice: totalNice,
          system: totalSystem,
          idle: totalIdle,
          irq: totalIrq,
          tick: totalTick,
          load: totalLoad,
          ms: _current_cpu.ms,
          currentload: result.currentload,
          currentload_user: result.currentload_user,
          currentload_system: result.currentload_system,
          currentload_nice: result.currentload_nice,
          currentload_idle: result.currentload_idle,
          currentload_irq: result.currentload_irq,
          raw_currentload: result.raw_currentload,
          raw_currentload_user: result.raw_currentload_user,
          raw_currentload_system: result.raw_currentload_system,
          raw_currentload_nice: result.raw_currentload_nice,
          raw_currentload_idle: result.raw_currentload_idle,
          raw_currentload_irq: result.raw_currentload_irq,
        };
      } else {
        let cores = [];
        for (let i = 0; i < _corecount; i++) {
          cores[i] = {};
          cores[i].load = _cpus[i].load / _cpus[i].currentTick * 100;
          cores[i].load_user = _cpus[i].load_user / _cpus[i].currentTick * 100;
          cores[i].load_system = _cpus[i].load_system / _cpus[i].currentTick * 100;
          cores[i].load_nice = _cpus[i].load_nice / _cpus[i].currentTick * 100;
          cores[i].load_idle = _cpus[i].load_idle / _cpus[i].currentTick * 100;
          cores[i].load_irq = _cpus[i].load_irq / _cpus[i].currentTick * 100;
          cores[i].raw_load = _cpus[i].load;
          cores[i].raw_load_user = _cpus[i].load_user;
          cores[i].raw_load_system = _cpus[i].load_system;
          cores[i].raw_load_nice = _cpus[i].load_nice;
          cores[i].raw_load_idle = _cpus[i].load_idle;
          cores[i].raw_load_irq = _cpus[i].load_irq;
        }
        result = {
          avgload: avgload,
          currentload: _current_cpu.currentload,
          currentload_user: _current_cpu.currentload_user,
          currentload_system: _current_cpu.currentload_system,
          currentload_nice: _current_cpu.currentload_nice,
          currentload_idle: _current_cpu.currentload_idle,
          currentload_irq: _current_cpu.currentload_irq,
          raw_currentload: _current_cpu.raw_currentload,
          raw_currentload_user: _current_cpu.raw_currentload_user,
          raw_currentload_system: _current_cpu.raw_currentload_system,
          raw_currentload_nice: _current_cpu.raw_currentload_nice,
          raw_currentload_idle: _current_cpu.raw_currentload_idle,
          raw_currentload_irq: _current_cpu.raw_currentload_irq,
          cpus: cores
        };
      }
      resolve(result);
    });
  });
}

function currentLoad(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      getLoad().then(result => {
        if (callback) { callback(result); }
        resolve(result);
      });
    });
  });
}

exports.currentLoad = currentLoad;

// --------------------------
// PS - full load
// since bootup

function getFullLoad() {

  return new Promise((resolve) => {
    process.nextTick(() => {

      const cpus = os.cpus();
      let totalUser = 0;
      let totalSystem = 0;
      let totalNice = 0;
      let totalIrq = 0;
      let totalIdle = 0;

      for (let i = 0, len = cpus.length; i < len; i++) {
        const cpu = cpus[i].times;
        totalUser += cpu.user;
        totalSystem += cpu.sys;
        totalNice += cpu.nice;
        totalIrq += cpu.irq;
        totalIdle += cpu.idle;
      }
      let totalTicks = totalIdle + totalIrq + totalNice + totalSystem + totalUser;
      let result = (totalTicks - totalIdle) / totalTicks * 100.0;

      resolve(result);
    });
  });
}

function fullLoad(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      getFullLoad().then(result => {
        if (callback) { callback(result); }
        resolve(result);
      });
    });
  });
}

exports.fullLoad = fullLoad;


/***/ }),

/***/ "./node_modules/systeminformation/lib/docker.js":
/*!******************************************************!*\
  !*** ./node_modules/systeminformation/lib/docker.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// docker.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 13. Docker
// ----------------------------------------------------------------------------------

const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");
const DockerSocket = __webpack_require__(/*! ./dockerSocket */ "./node_modules/systeminformation/lib/dockerSocket.js");

let _docker_container_stats = {};
let _docker_socket;


// --------------------------
// get containers (parameter all: get also inactive/exited containers)

function dockerContainers(all, callback) {

  function inContainers(containers, id) {
    let filtered = containers.filter(obj => {
      /**
       * @namespace
       * @property {string}  Id
       */
      return (obj.Id && (obj.Id === id));
    });
    return (filtered.length > 0);
  }

  // fallback - if only callback is given
  if (util.isFunction(all) && !callback) {
    callback = all;
    all = false;
  }

  all = all || false;
  let result = [];
  return new Promise((resolve) => {
    process.nextTick(() => {
      if (!_docker_socket) {
        _docker_socket = new DockerSocket();
      }

      _docker_socket.listContainers(all, data => {
        let docker_containers = {};
        try {
          docker_containers = data;
          if (docker_containers && Object.prototype.toString.call(docker_containers) === '[object Array]' && docker_containers.length > 0) {
            docker_containers.forEach(function (element) {
              /**
               * @namespace
               * @property {string}  Id
               * @property {string}  Name
               * @property {string}  Image
               * @property {string}  ImageID
               * @property {string}  Command
               * @property {number}  Created
               * @property {string}  State
               * @property {Array}  Names
               * @property {Array}  Ports
               * @property {Array}  Mounts
               */

              if (element.Names && Object.prototype.toString.call(element.Names) === '[object Array]' && element.Names.length > 0) {
                element.Name = element.Names[0].replace(/^\/|\/$/g, '');
              }
              result.push({
                id: element.Id,
                name: element.Name,
                image: element.Image,
                imageID: element.ImageID,
                command: element.Command,
                created: element.Created,
                state: element.State,
                ports: element.Ports,
                mounts: element.Mounts,
                // hostconfig: element.HostConfig,
                // network: element.NetworkSettings
              });
            });
          }
        } catch (err) {
          util.noop();
        }
        // }

        // GC in _docker_container_stats
        for (let key in _docker_container_stats) {
          if (_docker_container_stats.hasOwnProperty(key)) {
            if (!inContainers(docker_containers, key)) delete _docker_container_stats[key];
          }
        }
        if (callback) { callback(result); }
        resolve(result);
      });
    });
  });
}

exports.dockerContainers = dockerContainers;

// --------------------------
// helper functions for calculation of docker stats

function docker_calcCPUPercent(cpu_stats, id) {
  /**
   * @namespace
   * @property {object}  cpu_usage
   * @property {number}  cpu_usage.total_usage
   * @property {number}  system_cpu_usage
   * @property {object}  cpu_usage
   * @property {Array}  cpu_usage.percpu_usage
   */

  let cpuPercent = 0.0;
  // calculate the change for the cpu usage of the container in between readings
  let cpuDelta = cpu_stats.cpu_usage.total_usage - (_docker_container_stats[id] && _docker_container_stats[id].prev_CPU ? _docker_container_stats[id].prev_CPU : 0);
  // calculate the change for the entire system between readings
  let systemDelta = cpu_stats.system_cpu_usage - (_docker_container_stats[id] && _docker_container_stats[id].prev_system ? _docker_container_stats[id].prev_system : 0);

  if (systemDelta > 0.0 && cpuDelta > 0.0) {
    cpuPercent = (cpuDelta / systemDelta) * cpu_stats.cpu_usage.percpu_usage.length * 100.0;
  }
  if (!_docker_container_stats[id]) _docker_container_stats[id] = {};
  _docker_container_stats[id].prev_CPU = cpu_stats.cpu_usage.total_usage;
  _docker_container_stats[id].prev_system = cpu_stats.system_cpu_usage;

  return cpuPercent;
}

function docker_calcNetworkIO(networks) {
  let rx;
  let tx;
  for (let key in networks) {
    // skip loop if the property is from prototype
    if (!networks.hasOwnProperty(key)) continue;

    /**
     * @namespace
     * @property {number}  rx_bytes
     * @property {number}  tx_bytes
     */
    let obj = networks[key];
    rx = +obj.rx_bytes;
    tx = +obj.tx_bytes;
  }
  return {
    rx: rx,
    tx: tx
  };
}

function docker_calcBlockIO(blkio_stats) {
  let result = {
    r: 0,
    w: 0
  };

  /**
   * @namespace
   * @property {Array}  io_service_bytes_recursive
   */
  if (blkio_stats && blkio_stats.io_service_bytes_recursive && Object.prototype.toString.call(blkio_stats.io_service_bytes_recursive) === '[object Array]' && blkio_stats.io_service_bytes_recursive.length > 0) {
    blkio_stats.io_service_bytes_recursive.forEach(function (element) {
      /**
       * @namespace
       * @property {string}  op
       * @property {number}  value
       */

      if (element.op && element.op.toLowerCase() === 'read' && element.value) {
        result.r += element.value;
      }
      if (element.op && element.op.toLowerCase() === 'write' && element.value) {
        result.w += element.value;
      }
    });
  }
  return result;
}

// --------------------------
// container stats (for one container)

function dockerContainerStats(containerID, callback) {
  containerID = containerID || '';
  let result = {
    id: containerID,
    mem_usage: 0,
    mem_limit: 0,
    mem_percent: 0,
    cpu_percent: 0,
    pids: 0,
    netIO: {
      rx: 0,
      wx: 0
    },
    blockIO: {
      r: 0,
      w: 0
    }
  };
  return new Promise((resolve) => {
    process.nextTick(() => {
      if (containerID) {

        if (!_docker_socket) {
          _docker_socket = new DockerSocket();
        }

        _docker_socket.getStats(containerID, data => {
          try {
            let stats = data;
            /**
             * @namespace
             * @property {Object}  memory_stats
             * @property {number}  memory_stats.usage
             * @property {number}  memory_stats.limit
             * @property {Object}  cpu_stats
             * @property {Object}  pids_stats
             * @property {number}  pids_stats.current
             * @property {Object}  networks
             * @property {Object}  blkio_stats
             */

            if (!stats.message) {
              result.mem_usage = (stats.memory_stats && stats.memory_stats.usage ? stats.memory_stats.usage : 0);
              result.mem_limit = (stats.memory_stats && stats.memory_stats.limit ? stats.memory_stats.limit : 0);
              result.mem_percent = (stats.memory_stats && stats.memory_stats.usage && stats.memory_stats.limit ? stats.memory_stats.usage / stats.memory_stats.limit * 100.0 : 0);
              result.cpu_percent = (stats.cpu_stats ? docker_calcCPUPercent(stats.cpu_stats, containerID) : 0);
              result.pids = (stats.pids_stats && stats.pids_stats.current ? stats.pids_stats.current : 0);
              if (stats.networks) result.netIO = docker_calcNetworkIO(stats.networks);
              if (stats.blkio_stats) result.blockIO = docker_calcBlockIO(stats.blkio_stats);
              result.cpu_stats = (stats.cpu_stats ? stats.cpu_stats : {});
              result.precpu_stats = (stats.precpu_stats ? stats.precpu_stats : {});
              result.memory_stats = (stats.memory_stats ? stats.memory_stats : {});
              result.networks = (stats.networks ? stats.networks : {});
            }
          } catch (err) {
            util.noop();
          }
          // }
          if (callback) { callback(result); }
          resolve(result);
        });
      } else {
        if (callback) { callback(result); }
        resolve(result);
      }
    });
  });
}

exports.dockerContainerStats = dockerContainerStats;

// --------------------------
// container processes (for one container)

function dockerContainerProcesses(containerID, callback) {
  containerID = containerID || '';
  let result = [];
  return new Promise((resolve) => {
    process.nextTick(() => {
      if (containerID) {

        if (!_docker_socket) {
          _docker_socket = new DockerSocket();
        }

        _docker_socket.getProcesses(containerID, data => {
          /**
           * @namespace
           * @property {Array}  Titles
           * @property {Array}  Processes
           **/
          try {
            if (data && data.Titles && data.Processes) {
              let titles = data.Titles.map(function(value) {
                return value.toUpperCase();
              });
              let pos_pid = titles.indexOf('PID');
              let pos_ppid = titles.indexOf('PPID');
              let pos_pgid = titles.indexOf('PGID');
              let pos_vsz = titles.indexOf('VSZ');
              let pos_time = titles.indexOf('TIME');
              let pos_elapsed = titles.indexOf('ELAPSED');
              let pos_ni = titles.indexOf('NI');
              let pos_ruser = titles.indexOf('RUSER');
              let pos_user = titles.indexOf('USER');
              let pos_rgroup = titles.indexOf('RGROUP');
              let pos_group = titles.indexOf('GROUP');
              let pos_stat = titles.indexOf('STAT');
              let pos_rss = titles.indexOf('RSS');
              let pos_command = titles.indexOf('COMMAND');

              data.Processes.forEach(process => {
                result.push({
                  pid_host: (pos_pid >= 0 ? process[pos_pid] : ''),
                  ppid: (pos_ppid >= 0 ? process[pos_ppid] : ''),
                  pgid: (pos_pgid >= 0 ? process[pos_pgid] : ''),
                  user: (pos_user >= 0 ? process[pos_user] : ''),
                  ruser: (pos_ruser >= 0 ? process[pos_ruser] : ''),
                  group: (pos_group >= 0 ? process[pos_group] : ''),
                  rgroup: (pos_rgroup >= 0 ? process[pos_rgroup] : ''),
                  stat: (pos_stat >= 0 ? process[pos_stat] : ''),
                  time: (pos_time >= 0 ? process[pos_time] : ''),
                  elapsed: (pos_elapsed >= 0 ? process[pos_elapsed] : ''),
                  nice: (pos_ni >= 0 ? process[pos_ni] : ''),
                  rss: (pos_rss >= 0 ? process[pos_rss] : ''),
                  vsz: (pos_vsz >= 0 ? process[pos_vsz] : ''),
                  command: (pos_command >= 0 ? process[pos_command] : '')
                });
              });
            }
          } catch (err) {
            util.noop();
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      } else {
        if (callback) { callback(result); }
        resolve(result);
      }
    });
  });
}

exports.dockerContainerProcesses = dockerContainerProcesses;

function dockerAll(callback) {
  return new Promise((resolve) => {
    process.nextTick(() => {
      dockerContainers(true).then(result => {
        if (result && Object.prototype.toString.call(result) === '[object Array]' && result.length > 0) {
          let l = result.length;
          result.forEach(function (element) {
            dockerContainerStats(element.id).then(res => {
              // include stats in array
              element.mem_usage = res.mem_usage;
              element.mem_limit = res.mem_limit;
              element.mem_percent = res.mem_percent;
              element.cpu_percent = res.cpu_percent;
              element.pids = res.pids;
              element.netIO = res.netIO;
              element.blockIO = res.blockIO;
              element.cpu_stats = res.cpu_stats;
              element.precpu_stats = res.precpu_stats;
              element.memory_stats = res.memory_stats;
              element.networks = res.networks;

              dockerContainerProcesses(element.id).then(processes => {
                element.processes = processes;

                l -= 1;
                if (l === 0) {
                  if (callback) { callback(result); }
                  resolve(result);
                }
              });
              // all done??
            });
          });
        } else {
          if (callback) { callback(result); }
          resolve(result);
        }
      });
    });
  });
}

exports.dockerAll = dockerAll;


/***/ }),

/***/ "./node_modules/systeminformation/lib/dockerSocket.js":
/*!************************************************************!*\
  !*** ./node_modules/systeminformation/lib/dockerSocket.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// dockerSockets.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 13. DockerSockets
// ----------------------------------------------------------------------------------

const net = __webpack_require__(/*! net */ "net");
const isWin = __webpack_require__(/*! os */ "os").type() === 'Windows_NT';
const socketPath = isWin ? '//./pipe/docker_engine' : '/var/run/docker.sock';

class DockerSocket {

  listContainers(all, callback) {
    try {

      let socket = net.createConnection({path: socketPath});
      let alldata = '';

      socket.on('connect', () => {
        socket.write('GET http:/containers/json' + (all ? '?all=1' : '') + ' HTTP/1.0\r\n\r\n');
      });

      socket.on('data', data => {
        alldata = alldata + data.toString();
      });

      socket.on('error', () => {
        socket = false;
        callback({});
      });

      socket.on('end', () => {
        let startbody = alldata.indexOf('\r\n\r\n');
        alldata = alldata.substring(startbody, 100000).replace(/[\n\r]/g, '');
        socket = false;
        callback(JSON.parse(alldata));
      });
    } catch (err) {
      callback({});
    }
  }

  getStats(id, callback) {
    id = id || '';
    if (id) {
      try {
        let socket = net.createConnection({path: socketPath});
        let alldata = '';

        socket.on('connect', () => {
          socket.write('GET http:/containers/' + id + '/stats?stream=0 HTTP/1.0\r\n\r\n');
        });

        socket.on('data', data => {
          alldata = alldata + data.toString();
        });

        socket.on('error', () => {
          socket = false;
          callback({});
        });

        socket.on('end', () => {
          let startbody = alldata.indexOf('\r\n\r\n');
          alldata = alldata.substring(startbody, 100000).replace(/[\n\r]/g, '');
          socket = false;
          callback(JSON.parse(alldata));
        });
      } catch (err) {
        callback({});
      }
    } else {
      callback({});
    }
  }

  getProcesses(id, callback) {
    id = id || '';
    if (id) {
      try {
        let socket = net.createConnection({path: socketPath});
        let alldata = '';

        socket.on('connect', () => {
          socket.write('GET http:/containers/' + id + '/top?ps_args=-opid,ppid,pgid,vsz,time,etime,nice,ruser,user,rgroup,group,stat,rss,args HTTP/1.0\r\n\r\n');
        });

        socket.on('data', data => {
          alldata = alldata + data.toString();
        });

        socket.on('error', () => {
          socket = false;
          callback({});
        });

        socket.on('end', () => {
          let startbody = alldata.indexOf('\r\n\r\n');
          alldata = alldata.substring(startbody, 100000).replace(/[\n\r]/g, '');
          socket = false;
          callback(JSON.parse(alldata));
        });
      } catch (err) {
        callback({});
      }
    } else {
      callback({});
    }
  }
}

module.exports = DockerSocket;


/***/ }),

/***/ "./node_modules/systeminformation/lib/filesystem.js":
/*!**********************************************************!*\
  !*** ./node_modules/systeminformation/lib/filesystem.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// filesystem.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 8. File System
// ----------------------------------------------------------------------------------

const exec = __webpack_require__(/*! child_process */ "child_process").exec;
const execSync = __webpack_require__(/*! child_process */ "child_process").execSync;
const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");

let _platform = process.platform;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _sunos = (_platform === 'sunos');

const NOT_SUPPORTED = 'not supported';

const opts = {
  windowsHide: true
};

let _fs_speed = {};
let _disk_io = {};

// --------------------------
// FS - mounted file systems

function fsSize(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let data = [];
      if (_linux || _freebsd || _openbsd || _darwin) {
        let cmd = '';
        if (_darwin) cmd = 'df -lkP | grep ^/';
        if (_linux) cmd = 'df -lkPT | grep ^/';
        if (_freebsd || _openbsd) cmd = 'df -lkPT';
        exec(cmd, function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            //lines.splice(0, 1);
            lines.forEach(function (line) {
              if (line !== '') {
                line = line.replace(/ +/g, ' ').split(' ');
                if (line && (line[0].startsWith('/')) || (line[6] && line[6] === '/')) {
                  data.push({
                    'fs': line[0],
                    'type': ((_linux || _freebsd || _openbsd) ? line[1] : 'HFS'),
                    'size': parseInt(((_linux || _freebsd || _openbsd) ? line[2] : line[1])) * 1024,
                    'used': parseInt(((_linux || _freebsd || _openbsd) ? line[3] : line[2])) * 1024,
                    'use': parseFloat((100.0 * ((_linux || _freebsd || _openbsd) ? line[3] : line[2]) / ((_linux || _freebsd || _openbsd) ? line[2] : line[1])).toFixed(2)),
                    'mount': line[line.length - 1]
                  });
                }
              }
            });
          }
          if (callback) {
            callback(data);
          }
          resolve(data);
        });
      }
      if (_sunos) {
        if (callback) { callback(data); }
        resolve(data);
      }
      if (_windows) {
        try {
          exec(util.getWmic() + ' logicaldisk get Caption,FileSystem,FreeSpace,Size', opts, function (error, stdout) {
            let lines = stdout.split('\r\n').filter(line => line.trim() !== '').filter((line, idx) => idx > 0);
            lines.forEach(function (line) {
              if (line !== '') {
                line = line.trim().split(/\s\s+/);
                data.push({
                  'fs': line[0],
                  'type': line[1],
                  'size': line[3],
                  'used': parseInt(line[3]) - parseInt(line[2]),
                  'use': parseFloat((100.0 * (parseInt(line[3]) - parseInt(line[2]))) / parseInt(line[3])),
                  'mount': line[0]
                });
              }
            });
            if (callback) {
              callback(data);
            }
            resolve(data);
          });
        } catch (e) {
          if (callback) { callback(data); }
          resolve(data);
        }
      }
    });
  });
}

exports.fsSize = fsSize;

// --------------------------
// disks

function parseBytes(s) {
  return parseInt(s.substr(s.indexOf(' (') + 2, s.indexOf(' Bytes)') - 10));
}

function parseDevices(lines) {
  let devices = [];
  let i = 0;
  lines.forEach(line => {
    if (line.length > 0) {
      if (line[0] === '*') {
        i++;
      } else {
        let parts = line.split(':');
        if (parts.length > 1) {
          if (!devices[i]) devices[i] = {
            name: '',
            identifier: '',
            type: 'disk',
            fstype: '',
            mount: '',
            size: 0,
            physical: 'HDD',
            uuid: '',
            label: '',
            model: '',
            serial: '',
            removable: false,
            protocol: ''
          };
          parts[0] = parts[0].trim().toUpperCase().replace(/ +/g, '');
          parts[1] = parts[1].trim();
          if ('DEVICEIDENTIFIER' === parts[0]) devices[i].identifier = parts[1];
          if ('DEVICENODE' === parts[0]) devices[i].name = parts[1];
          if ('VOLUMENAME' === parts[0]) {
            if (parts[1].indexOf('Not applicable') === -1) devices[i].label = parts[1];
          }
          if ('PROTOCOL' === parts[0]) devices[i].protocol = parts[1];
          if ('DISKSIZE' === parts[0]) devices[i].size = parseBytes(parts[1]);
          if ('FILESYSTEMPERSONALITY' === parts[0]) devices[i].fstype = parts[1];
          if ('MOUNTPOINT' === parts[0]) devices[i].mount = parts[1];
          if ('VOLUMEUUID' === parts[0]) devices[i].uuid = parts[1];
          if ('READ-ONLYMEDIA' === parts[0] && parts[1] === 'Yes') devices[i].physical = 'CD/DVD';
          if ('SOLIDSTATE' === parts[0] && parts[1] === 'Yes') devices[i].physical = 'SSD';
          if ('VIRTUAL' === parts[0]) devices[i].type = 'virtual';
          if ('REMOVABLEMEDIA' === parts[0]) devices[i].removable = (parts[1] === 'Removable');
          if ('PARTITIONTYPE' === parts[0]) devices[i].type = 'part';
          if ('DEVICE/MEDIANAME' === parts[0]) devices[i].model = parts[1];
        }
      }
    }
  });
  return devices;
}

function parseBlk(lines) {
  let data = [];

  lines.filter(line => line !== '').forEach((line) => {
    line = util.decodeEscapeSequence(line);
    line = line.replace(/\\/g, '\\\\');
    let disk = JSON.parse(line);
    data.push({
      'name': disk.name,
      'type': disk.type,
      'fstype': disk.fstype,
      'mount': disk.mountpoint,
      'size': parseInt(disk.size),
      'physical': (disk.type === 'disk' ? (disk.rota === '0' ? 'SSD' : 'HDD') : (disk.type === 'rom' ? 'CD/DVD' : '')),
      'uuid': disk.uuid,
      'label': disk.label,
      'model': disk.model,
      'serial': disk.serial,
      'removable': disk.rm === '1',
      'protocol': disk.tran
    });
  });

  data = util.unique(data);
  data = util.sortByKey(data, ['type', 'name']);
  return data;
}

function blkStdoutToObject(stdout) {
  return stdout.toString()
    .replace(/NAME=/g, '{"name":')
    .replace(/FSTYPE=/g, ',"fstype":')
    .replace(/TYPE=/g, ',"type":')
    .replace(/SIZE=/g, ',"size":')
    .replace(/MOUNTPOINT=/g, ',"mountpoint":')
    .replace(/UUID=/g, ',"uuid":')
    .replace(/ROTA=/g, ',"rota":')
    .replace(/RO=/g, ',"ro":')
    .replace(/RM=/g, ',"rm":')
    .replace(/TRAN=/g, ',"tran":')
    .replace(/SERIAL=/g, ',"serial":')
    .replace(/LABEL=/g, ',"label":')
    .replace(/MODEL=/g, ',"model":')
    .replace(/OWNER=/g, ',"owner":')
    .replace(/\n/g, '}\n');
}

function blockDevices(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let data = [];
      if (_linux) {
        // see https://wiki.ubuntuusers.de/lsblk/
        // exec("lsblk -bo NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT,UUID,ROTA,RO,TRAN,SERIAL,LABEL,MODEL,OWNER,GROUP,MODE,ALIGNMENT,MIN-IO,OPT-IO,PHY-SEC,LOG-SEC,SCHED,RQ-SIZE,RA,WSAME", function (error, stdout) {
        exec('lsblk -bPo NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT,UUID,ROTA,RO,RM,TRAN,SERIAL,LABEL,MODEL,OWNER', function (error, stdout) {
          if (!error) {
            let lines = blkStdoutToObject(stdout).split('\n');
            data = parseBlk(lines);
            if (callback) {
              callback(data);
            }
            resolve(data);
          } else {
            exec('lsblk -bPo NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT,UUID,ROTA,RO,RM,LABEL,MODEL,OWNER', function (error, stdout) {
              if (!error) {
                let lines = blkStdoutToObject(stdout).split('\n');
                data = parseBlk(lines);
              }
              if (callback) {
                callback(data);
              }
              resolve(data);
            });
          }
        });
      }
      if (_darwin) {
        exec('diskutil info -all', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            // parse lines into temp array of devices
            data = parseDevices(lines);
          }
          if (callback) {
            callback(data);
          }
          resolve(data);
        });
      }
      if (_sunos) {
        if (callback) { callback(data); }
        resolve(data);
      }
      if (_windows) {
        let drivetypes = ['Unknown', 'NoRoot', 'Removable', 'HDD', 'Network', 'CD/DVD', 'RAM'];
        try {
          exec(util.getWmic() + ' logicaldisk get Caption,Description,DeviceID,DriveType,FileSystem,FreeSpace,Name,Size,VolumeName,VolumeSerialNumber /value', opts, function (error, stdout) {
            if (!error) {
              let devices = stdout.toString().split(/\n\s*\n/);
              devices.forEach(function (device) {
                let lines = device.split('\r\n');
                let drivetype = util.getValue(lines, 'drivetype', '=');
                if (drivetype) {
                  data.push({
                    name: util.getValue(lines, 'name', '='),
                    identifier: util.getValue(lines, 'caption', '='),
                    type: 'disk',
                    fstype: util.getValue(lines, 'filesystem', '=').toLowerCase(),
                    mount: util.getValue(lines, 'caption', '='),
                    size: util.getValue(lines, 'size', '='),
                    physical: (drivetype >= 0 && drivetype <= 6) ? drivetypes[drivetype] : drivetypes[0],
                    uuid: util.getValue(lines, 'volumeserialnumber', '='),
                    label: util.getValue(lines, 'volumename', '='),
                    model: '',
                    serial: util.getValue(lines, 'volumeserialnumber', '='),
                    removable: drivetype === '2',
                    protocol: ''
                  });
                }
              });
            }
            if (callback) {
              callback(data);
            }
            resolve(data);
          });

        } catch (e) {
          if (callback) { callback(data); }
          resolve(data);
        }
      }
    });
  });
}

exports.blockDevices = blockDevices;

// --------------------------
// FS - speed

function calcFsSpeed(rx, wx) {
  let result = {
    rx: 0,
    wx: 0,
    tx: 0,
    rx_sec: -1,
    wx_sec: -1,
    tx_sec: -1,
    ms: 0
  };

  if (_fs_speed && _fs_speed.ms) {
    result.rx = rx;
    result.wx = wx;
    result.tx = result.rx + result.wx;
    result.ms = Date.now() - _fs_speed.ms;
    result.rx_sec = (result.rx - _fs_speed.bytes_read) / (result.ms / 1000);
    result.wx_sec = (result.wx - _fs_speed.bytes_write) / (result.ms / 1000);
    result.tx_sec = result.rx_sec + result.wx_sec;
    _fs_speed.rx_sec = result.rx_sec;
    _fs_speed.wx_sec = result.wx_sec;
    _fs_speed.tx_sec = result.tx_sec;
    _fs_speed.bytes_read = result.rx;
    _fs_speed.bytes_write = result.wx;
    _fs_speed.bytes_overall = result.rx + result.wx;
    _fs_speed.ms = Date.now();
    _fs_speed.last_ms = result.ms;
  } else {
    result.rx = rx;
    result.wx = wx;
    result.tx = result.rx + result.wx;
    _fs_speed.rx_sec = -1;
    _fs_speed.wx_sec = -1;
    _fs_speed.tx_sec = -1;
    _fs_speed.bytes_read = result.rx;
    _fs_speed.bytes_write = result.wx;
    _fs_speed.bytes_overall = result.rx + result.wx;
    _fs_speed.ms = Date.now();
    _fs_speed.last_ms = 0;
  }
  return result;
}

function fsStats(callback) {

  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      if (_windows) {
        let error = new Error(NOT_SUPPORTED);
        if (callback) {
          callback(NOT_SUPPORTED);
        }
        reject(error);
      }

      let result = {
        rx: 0,
        wx: 0,
        tx: 0,
        rx_sec: -1,
        wx_sec: -1,
        tx_sec: -1,
        ms: 0
      };

      let rx = 0;
      let wx = 0;
      if ((_fs_speed && !_fs_speed.ms) || (_fs_speed && _fs_speed.ms && Date.now() - _fs_speed.ms >= 500)) {
        if (_linux) {
          // exec("df -k | grep /dev/", function(error, stdout) {
          exec('lsblk | grep /', function (error, stdout) {
            if (!error) {
              let lines = stdout.toString().split('\n');
              let fs_filter = [];
              lines.forEach(function (line) {
                if (line !== '') {
                  line = line.replace(/[├─│└]+/g, '').trim().split(' ');
                  if (fs_filter.indexOf(line[0]) === -1) fs_filter.push(line[0]);
                }
              });

              let output = fs_filter.join('|');
              exec('cat /proc/diskstats | egrep "' + output + '"', function (error, stdout) {
                if (!error) {
                  let lines = stdout.toString().split('\n');
                  lines.forEach(function (line) {
                    line = line.trim();
                    if (line !== '') {
                      line = line.replace(/ +/g, ' ').split(' ');

                      rx += parseInt(line[5]) * 512;
                      wx += parseInt(line[9]) * 512;
                    }
                  });
                  result = calcFsSpeed(rx, wx);
                }
                if (callback) {
                  callback(result);
                }
                resolve(result);
              });
            } else {
              if (callback) {
                callback(result);
              }
              resolve(result);
            }
          });
        }
        if (_darwin) {
          exec('ioreg -c IOBlockStorageDriver -k Statistics -r -w0 | sed -n "/IOBlockStorageDriver/,/Statistics/p" | grep "Statistics" | tr -cd "01234567890,\n"', function (error, stdout) {
            if (!error) {
              let lines = stdout.toString().split('\n');
              lines.forEach(function (line) {
                line = line.trim();
                if (line !== '') {
                  line = line.split(',');

                  rx += parseInt(line[2]);
                  wx += parseInt(line[9]);
                }
              });
              result = calcFsSpeed(rx, wx);
            }
            if (callback) {
              callback(result);
            }
            resolve(result);
          });
        }
      } else {
        result.ms = _fs_speed.last_ms;
        result.rx = _fs_speed.bytes_read;
        result.wx = _fs_speed.bytes_write;
        result.tx = _fs_speed.bytes_read + _fs_speed.bytes_write;
        result.rx_sec = _fs_speed.rx_sec;
        result.wx_sec = _fs_speed.wx_sec;
        result.tx_sec = _fs_speed.tx_sec;
        if (callback) {
          callback(result);
        }
        resolve(result);
      }
    });
  });
}

exports.fsStats = fsStats;

function calcDiskIO(rIO, wIO) {
  let result = {
    rIO: 0,
    wIO: 0,
    tIO: 0,
    rIO_sec: -1,
    wIO_sec: -1,
    tIO_sec: -1,
    ms: 0
  };
  if (_disk_io && _disk_io.ms) {
    result.rIO = rIO;
    result.wIO = wIO;
    result.tIO = rIO + wIO;
    result.ms = Date.now() - _disk_io.ms;
    result.rIO_sec = (result.rIO - _disk_io.rIO) / (result.ms / 1000);
    result.wIO_sec = (result.wIO - _disk_io.wIO) / (result.ms / 1000);
    result.tIO_sec = result.rIO_sec + result.wIO_sec;
    _disk_io.rIO = rIO;
    _disk_io.wIO = wIO;
    _disk_io.rIO_sec = result.rIO_sec;
    _disk_io.wIO_sec = result.wIO_sec;
    _disk_io.tIO_sec = result.tIO_sec;
    _disk_io.last_ms = result.ms;
    _disk_io.ms = Date.now();
  } else {
    result.rIO = rIO;
    result.wIO = wIO;
    result.tIO = rIO + wIO;
    _disk_io.rIO = rIO;
    _disk_io.wIO = wIO;
    _disk_io.rIO_sec = -1;
    _disk_io.wIO_sec = -1;
    _disk_io.tIO_sec = -1;
    _disk_io.last_ms = 0;
    _disk_io.ms = Date.now();
  }
  return result;
}

function disksIO(callback) {

  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      if (_windows) {
        let error = new Error(NOT_SUPPORTED);
        if (callback) {
          callback(NOT_SUPPORTED);
        }
        reject(error);
      }
      if (_sunos) {
        let error = new Error(NOT_SUPPORTED);
        if (callback) {
          callback(NOT_SUPPORTED);
        }
        reject(error);
      }

      let result = {
        rIO: 0,
        wIO: 0,
        tIO: 0,
        rIO_sec: -1,
        wIO_sec: -1,
        tIO_sec: -1,
        ms: 0
      };
      let rIO = 0;
      let wIO = 0;

      if ((_disk_io && !_disk_io.ms) || (_disk_io && _disk_io.ms && Date.now() - _disk_io.ms >= 500)) {
        if (_linux || _freebsd || _openbsd) {
          // prints Block layer statistics for all mounted volumes
          // var cmd = "for mount in `lsblk | grep / | sed -r 's/│ └─//' | cut -d ' ' -f 1`; do cat /sys/block/$mount/stat | sed -r 's/ +/;/g' | sed -r 's/^;//'; done";
          // var cmd = "for mount in `lsblk | grep / | sed 's/[│└─├]//g' | awk '{$1=$1};1' | cut -d ' ' -f 1 | sort -u`; do cat /sys/block/$mount/stat | sed -r 's/ +/;/g' | sed -r 's/^;//'; done";
          let cmd = 'for mount in `lsblk | grep " disk " | sed "s/[│└─├]//g" | awk \'{$1=$1};1\' | cut -d " " -f 1 | sort -u`; do cat /sys/block/$mount/stat | sed -r "s/ +/;/g" | sed -r "s/^;//"; done';

          exec(cmd, function (error, stdout) {
            if (!error) {
              let lines = stdout.split('\n');
              lines.forEach(function (line) {
                // ignore empty lines
                if (!line) return;

                // sum r/wIO of all disks to compute all disks IO
                let stats = line.split(';');
                rIO += parseInt(stats[0]);
                wIO += parseInt(stats[4]);
              });
              result = calcDiskIO(rIO, wIO);

              if (callback) {
                callback(result);
              }
              resolve(result);
            } else {
              if (callback) {
                callback(result);
              }
              resolve(result);
            }
          });
        }
        if (_darwin) {
          exec('ioreg -c IOBlockStorageDriver -k Statistics -r -w0 | sed -n "/IOBlockStorageDriver/,/Statistics/p" | grep "Statistics" | tr -cd "01234567890,\n"', function (error, stdout) {
            if (!error) {
              let lines = stdout.toString().split('\n');
              lines.forEach(function (line) {
                line = line.trim();
                if (line !== '') {
                  line = line.split(',');

                  rIO += parseInt(line[10]);
                  wIO += parseInt(line[0]);
                }
              });
              result = calcDiskIO(rIO, wIO);
            }
            if (callback) {
              callback(result);
            }
            resolve(result);
          });
        }
      } else {
        result.rIO = _disk_io.rIO;
        result.wIO = _disk_io.wIO;
        result.tIO = _disk_io.rIO + _disk_io.wIO;
        result.ms = _disk_io.last_ms;
        result.rIO_sec = _disk_io.rIO_sec;
        result.wIO_sec = _disk_io.wIO_sec;
        result.tIO_sec = _disk_io.tIO_sec;
        if (callback) {
          callback(result);
        }
        resolve(result);
      }
    });
  });
}

exports.disksIO = disksIO;

function diskLayout(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {

      let result = [];

      if (_linux) {
        exec('export LC_ALL=C; lshw -class disk; unset LC_ALL', function (error, stdout) {
          if (!error) {
            let devices = stdout.toString().split('*-');
            devices.shift();
            devices.forEach(function (device) {
              let lines = device.split('\n');
              let mediumType = '';
              const logical = util.getValue(lines, 'logical name', ':', true).trim().replace(/\/dev\//g, '');
              try {
                mediumType = execSync('cat /sys/block/' + logical + '/queue/rotational').toString().split('\n')[0];
              } catch (e) {
                util.noop();
              }

              const sizeString = util.getValue(lines, 'size', ':', true).trim();
              if (sizeString && lines.length > 0 && lines[0].trim() === 'disk') {
                const sizeValue = sizeString.match(/\(([^)]+)\)/)[1];
                result.push({
                  type: (mediumType === '0' ? 'SSD' : (mediumType === '1' ? 'HD' : (device.indexOf('SSD') > -1 ? 'SSD' : 'HD'))), // to be tested ... /sys/block/sda/queue/rotational
                  name: util.getValue(lines, 'product:', ':', true),
                  vendor: util.getValue(lines, 'vendor:', ':', true),
                  size: parseInt(sizeValue, 10) * 1000 * 1000 * 1000 * (sizeValue.indexOf('T') >= 0 ? 1000 : 1),
                  bytesPerSector: -1,
                  totalCylinders: -1,
                  totalHeads: -1,
                  totalSectors: -1,
                  totalTracks: -1,
                  tracksPerCylinder: -1,
                  sectorsPerTrack: -1,
                  firmwareRevision: util.getValue(lines, 'version:', ':', true).trim(),
                  serialNum: util.getValue(lines, 'serial:', ':', true).trim(),
                  interfaceType: '',
                });
              }
            });
          }
          if (callback) {
            callback(result);
          }
          resolve(result);
        });
      }
      if (_freebsd || _openbsd) {
        if (callback) { callback(result); }
        resolve(result);
      }
      if (_sunos) {
        if (callback) { callback(result); }
        resolve(result);
      }

      if (_darwin) {
        exec('system_profiler SPSerialATADataType SPNVMeDataType', function (error, stdout) {
          if (!error) {
            let parts = stdout.toString().split('NVMExpress:');

            let devices = parts[0].split(' Physical Interconnect: ');
            devices.shift();
            devices.forEach(function (device) {
              device = 'InterfaceType: ' + device;
              let lines = device.split('\n');
              const mediumType = util.getValue(lines, 'Medium Type', ':', true).trim();
              const sizeStr = util.getValue(lines, 'capacity', ':', true).trim();
              if (sizeStr) {
                let sizeValue = 0;
                if (sizeStr.indexOf('(') >= 0) {
                  sizeValue = parseInt(sizeStr.match(/\(([^)]+)\)/)[1].replace(/\./g, '').replace(/,/g, ''));
                }
                if (!sizeValue) {
                  sizeValue = parseInt(sizeStr);
                }
                if (sizeValue) {
                  result.push({
                    type: mediumType.startsWith('Solid') ? 'SSD' : 'HD',
                    name: util.getValue(lines, 'Model', ':', true).trim(),
                    vendor: '',
                    size: sizeValue,
                    bytesPerSector: -1,
                    totalCylinders: -1,
                    totalHeads: -1,
                    totalSectors: -1,
                    totalTracks: -1,
                    tracksPerCylinder: -1,
                    sectorsPerTrack: -1,
                    firmwareRevision: util.getValue(lines, 'Revision', ':', true).trim(),
                    serialNum: util.getValue(lines, 'Serial Number', ':', true).trim(),
                    interfaceType: util.getValue(lines, 'InterfaceType', ':', true).trim()
                  });
                }
              }
            });
            if (parts.length > 1) {
              let devices = parts[1].split('\n\n          Capacity:');
              devices.shift();
              devices.forEach(function (device) {
                device = '!Capacity: ' + device;
                let lines = device.split('\n');
                const linkWidth = util.getValue(lines, 'link width', ':', true).trim();
                const sizeStr = util.getValue(lines, '!capacity', ':', true).trim();
                if (sizeStr) {
                  let sizeValue = 0;
                  if (sizeStr.indexOf('(') >= 0) {
                    sizeValue = parseInt(sizeStr.match(/\(([^)]+)\)/)[1].replace(/\./g, '').replace(/,/g, ''));
                  }
                  if (!sizeValue) {
                    sizeValue = parseInt(sizeStr);
                  }
                  if (sizeValue) {
                    result.push({
                      type: 'NVMe',
                      name: util.getValue(lines, 'Model', ':', true).trim(),
                      vendor: '',
                      size: sizeValue,
                      bytesPerSector: -1,
                      totalCylinders: -1,
                      totalHeads: -1,
                      totalSectors: -1,
                      totalTracks: -1,
                      tracksPerCylinder: -1,
                      sectorsPerTrack: -1,
                      firmwareRevision: util.getValue(lines, 'Revision', ':', true).trim(),
                      serialNum: util.getValue(lines, 'Serial Number', ':', true).trim(),
                      interfaceType: ('PCIe ' + linkWidth).trim(),
                    });
                  }
                }
              });
            }
          }
          if (callback) {
            callback(result);
          }
          resolve(result);
        });
      }
      if (_windows) {
        try {
          exec(util.getWmic() + ' diskdrive get /value', { encoding: 'utf8', windowsHide: true }, function (error, stdout) {
            if (!error) {
              let devices = stdout.toString().split(/\n\s*\n/);
              devices.forEach(function (device) {
                let lines = device.split('\r\n');
                const size = util.getValue(lines, 'Size', '=').trim();
                if (size) {
                  result.push({
                    type: device.indexOf('SSD') > -1 ? 'SSD' : 'HD',  // not really correct(!) ... maybe this one is better: MSFT_PhysicalDisk - Media Type??
                    name: util.getValue(lines, 'Caption', '='),
                    vendor: util.getValue(lines, 'Manufacturer', '='),
                    size: parseInt(size),
                    bytesPerSector: parseInt(util.getValue(lines, 'BytesPerSector', '=')),
                    totalCylinders: parseInt(util.getValue(lines, 'TotalCylinders', '=')),
                    totalHeads: parseInt(util.getValue(lines, 'TotalHeads', '=')),
                    totalSectors: parseInt(util.getValue(lines, 'TotalSectors', '=')),
                    totalTracks: parseInt(util.getValue(lines, 'TotalTracks', '=')),
                    tracksPerCylinder: parseInt(util.getValue(lines, 'TracksPerCylinder', '=')),
                    sectorsPerTrack: parseInt(util.getValue(lines, 'SectorsPerTrack', '=')),
                    firmwareRevision: util.getValue(lines, 'FirmwareRevision', '=').trim(),
                    serialNum: util.getValue(lines, 'SerialNumber', '=').trim(),
                    interfaceType: util.getValue(lines, 'InterfaceType', '=').trim()
                  });
                }
              });
            }
            if (callback) {
              callback(result);
            }
            resolve(result);
          });
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);
        }
      }
    });
  });
}

exports.diskLayout = diskLayout;


/***/ }),

/***/ "./node_modules/systeminformation/lib/graphics.js":
/*!********************************************************!*\
  !*** ./node_modules/systeminformation/lib/graphics.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// graphics.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 7. Graphics (controller, display)
// ----------------------------------------------------------------------------------

const exec = __webpack_require__(/*! child_process */ "child_process").exec;
const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");

let _platform = process.platform;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _sunos = (_platform === 'sunos');

const opts = {
  windowsHide: true
};

let _resolutionx = 0;
let _resolutiony = 0;
let _pixeldepth = 0;

function toInt(value) {
  let result = parseInt(value, 10);
  if (isNaN(result)) {
    result = 0;
  }
  return result;
}

function graphics(callback) {

  function parseLinesDarwin(lines) {
    let starts = [];
    let level = -1;
    let lastlevel = -1;
    let controllers = [];
    let displays = [];
    let currentController = {};
    let currentDisplay = {};
    for (let i = 0; i < lines.length; i++) {
      if ('' !== lines[i].trim()) {
        let start = lines[i].search(/\S|$/);
        if (-1 === starts.indexOf(start)) {
          starts.push(start);
        }
        level = starts.indexOf(start);
        if (level < lastlevel) {
          if (Object.keys(currentController).length > 0) {// just changed to Displays
            controllers.push(currentController);
            currentController = {};
          }
          if (Object.keys(currentDisplay).length > 0) {// just changed to Displays
            displays.push(currentDisplay);
            currentDisplay = {};
          }
        }
        lastlevel = level;
        let parts = lines[i].split(':');
        if (2 === level) {       // grafics controller level
          if (parts.length > 1 && parts[0].replace(/ +/g, '').toLowerCase().indexOf('chipsetmodel') !== -1) currentController.model = parts[1].trim();
          if (parts.length > 1 && parts[0].replace(/ +/g, '').toLowerCase().indexOf('bus') !== -1) currentController.bus = parts[1].trim();
          if (parts.length > 1 && parts[0].replace(/ +/g, '').toLowerCase().indexOf('vendor') !== -1) currentController.vendor = parts[1].split('(')[0].trim();
          if (parts.length > 1 && parts[0].replace(/ +/g, '').toLowerCase().indexOf('vram(total)') !== -1) {
            currentController.vram = parseInt(parts[1]);    // in MB
            currentController.vramDynamic = false;
          }
          if (parts.length > 1 && parts[0].replace(/ +/g, '').toLowerCase().indexOf('vram(dynamic,max)') !== -1) {
            currentController.vram = parseInt(parts[1]);    // in MB
            currentController.vramDynamic = true;
          }
        }
        if (3 === level) {       // display controller level
          if (parts.length > 1 && '' === parts[1]) {
            currentDisplay.model = parts[0].trim();
            currentDisplay.main = false;
            currentDisplay.builtin = false;
            currentDisplay.connection = '';
            currentDisplay.sizex = -1;
            currentDisplay.sizey = -1;
          }
        }
        if (4 === level) {       // display controller details level
          if (parts.length > 1 && parts[0].replace(/ +/g, '').toLowerCase().indexOf('resolution') !== -1) {
            let resolution = parts[1].split('x');
            currentDisplay.resolutionx = (resolution.length > 1 ? parseInt(resolution[0]) : 0);
            currentDisplay.resolutiony = (resolution.length > 1 ? parseInt(resolution[1]) : 0);
          }
          if (parts.length > 1 && parts[0].replace(/ +/g, '').toLowerCase().indexOf('pixeldepth') !== -1) currentDisplay.pixeldepth = parseInt(parts[1]); // in BIT
          if (parts.length > 1 && parts[0].replace(/ +/g, '').toLowerCase().indexOf('maindisplay') !== -1 && parts[1].replace(/ +/g, '').toLowerCase() === 'yes') currentDisplay.main = true;
          if (parts.length > 1 && parts[0].replace(/ +/g, '').toLowerCase().indexOf('built-in') !== -1 && parts[1].replace(/ +/g, '').toLowerCase() === 'yes') {
            currentDisplay.builtin = true;
            currentDisplay.connection = '';
          }
          if (parts.length > 1 && parts[0].replace(/ +/g, '').toLowerCase().indexOf('connectiontype') !== -1) {
            currentDisplay.builtin = false;
            currentDisplay.connection = parts[1].trim();
          }
        }
      }
    }
    if (Object.keys(currentController).length > 0) {// just changed to Displays
      controllers.push(currentController);
    }
    if (Object.keys(currentDisplay).length > 0) {// just changed to Displays
      displays.push(currentDisplay);
    }
    return ({
      controllers: controllers,
      displays: displays
    });
  }

  function parseLinesLinuxControllers(lines) {
    let controllers = [];
    let currentController = {};
    let isGraphicsController = false;
    for (let i = 0; i < lines.length; i++) {
      if ('' !== lines[i].trim()) {
        if (' ' !== lines[i][0] && '\t' !== lines[i][0]) {        // first line of new entry
          let vgapos = lines[i].toLowerCase().indexOf('vga');
          let _3dcontrollerpos = lines[i].toLowerCase().indexOf('3d controller');
          if (vgapos !== -1 || _3dcontrollerpos !== -1) {         // VGA
            if (_3dcontrollerpos !== -1 && vgapos === -1) {
              vgapos = _3dcontrollerpos;
            }
            if (Object.keys(currentController).length > 0) {// already a controller found
              controllers.push(currentController);
              currentController = {};
            }
            isGraphicsController = true;
            let endpos = lines[i].search(/\[[0-9a-f]{4}:[0-9a-f]{4}]|$/);
            let parts = lines[i].substr(vgapos, endpos - vgapos).split(':');
            if (parts.length > 1) {
              parts[1] = parts[1].trim();
              if (parts[1].toLowerCase().indexOf('corporation') >= 0) {
                currentController.vendor = parts[1].substr(0, parts[1].toLowerCase().indexOf('corporation') + 11).trim();
                currentController.model = parts[1].substr(parts[1].toLowerCase().indexOf('corporation') + 11, 200).trim().split('(')[0];
                currentController.bus = '';
                currentController.vram = -1;
                currentController.vramDynamic = false;
              } else if (parts[1].toLowerCase().indexOf(' inc.') >= 0) {
                if ((parts[1].match(new RegExp(']', 'g')) || []).length > 1) {
                  currentController.vendor = parts[1].substr(0, parts[1].toLowerCase().indexOf(']') + 1).trim();
                  currentController.model = parts[1].substr(parts[1].toLowerCase().indexOf(']')+1, 200).trim().split('(')[0];
                } else {
                  currentController.vendor = parts[1].substr(0, parts[1].toLowerCase().indexOf(' inc.') + 5).trim();
                  currentController.model = parts[1].substr(parts[1].toLowerCase().indexOf(' inc.') + 5, 200).trim().split('(')[0];
                }
                currentController.bus = '';
                currentController.vram = -1;
                currentController.vramDynamic = false;
              }
            }

          } else {
            isGraphicsController = false;
          }
        }
        if (isGraphicsController) { // within VGA details
          let parts = lines[i].split(':');
          if (parts.length > 1 && parts[0].replace(/ +/g, '').toLowerCase().indexOf('devicename') !== -1 && parts[0].toLowerCase().indexOf('onboard') !== -1) currentController.bus = 'Onboard';
          if (parts.length > 1 && parts[0].replace(/ +/g, '').toLowerCase().indexOf('region') !== -1 && parts[1].toLowerCase().indexOf('memory') !== -1) {
            let memparts = parts[1].split('=');
            if (memparts.length > 1) {
              currentController.vram = parseInt(memparts[1]);
            }
          }
        }
      }
    }
    if (Object.keys(currentController).length > 0) {// still controller information available
      controllers.push(currentController);
    }
    return (controllers);
  }

  function parseLinesLinuxEdid(edid) {
    // parsen EDID
    // --> model
    // --> resolutionx
    // --> resolutiony
    // --> builtin = false
    // --> pixeldepth (?)
    // --> sizex
    // --> sizey
    let result = {};
    // find first "Detailed Timing Description"
    let start = 108;
    if (edid.substr(start, 6) === '000000') {
      start += 36;
    }
    if (edid.substr(start, 6) === '000000') {
      start += 36;
    }
    if (edid.substr(start, 6) === '000000') {
      start += 36;
    }
    if (edid.substr(start, 6) === '000000') {
      start += 36;
    }
    result.resolutionx = parseInt('0x0' + edid.substr(start + 8, 1) + edid.substr(start + 4, 2));
    result.resolutiony = parseInt('0x0' + edid.substr(start + 14, 1) + edid.substr(start + 10, 2));
    result.sizex = parseInt('0x0' + edid.substr(start + 28, 1) + edid.substr(start + 24, 2));
    result.sizey = parseInt('0x0' + edid.substr(start + 29, 1) + edid.substr(start + 26, 2));
    // monitor name
    start = edid.indexOf('000000fc00'); // find first "Monitor Description Data"
    if (start >= 0) {
      let model_raw = edid.substr(start + 10, 26);
      if (model_raw.indexOf('0a') !== -1) {
        model_raw = model_raw.substr(0, model_raw.indexOf('0a'));
      }
      result.model = model_raw.match(/.{1,2}/g).map(function (v) {
        return String.fromCharCode(parseInt(v, 16));
      }).join('');
    } else {
      result.model = '';
    }
    return result;
  }

  function parseLinesLinuxDisplays(lines, depth) {
    let displays = [];
    let currentDisplay = {};
    let is_edid = false;
    let edid_raw = '';
    let start = 0;
    for (let i = 1; i < lines.length; i++) {        // start with second line
      if ('' !== lines[i].trim()) {
        if (' ' !== lines[i][0] && '\t' !== lines[i][0] && lines[i].toLowerCase().indexOf(' connected ') !== -1) {        // first line of new entry
          if (Object.keys(currentDisplay).length > 0) {         // push last display to array
            displays.push(currentDisplay);
            currentDisplay = {};
          }
          let parts = lines[i].split(' ');
          currentDisplay.connection = parts[0];
          currentDisplay.main = (parts[2] === 'primary');
          currentDisplay.builtin = (parts[0].toLowerCase().indexOf('edp') >= 0);
        }

        // try to read EDID information
        if (is_edid) {
          if (lines[i].search(/\S|$/) > start) {
            edid_raw += lines[i].toLowerCase().trim();
          } else {
            // parsen EDID
            let edid_decoded = parseLinesLinuxEdid(edid_raw);
            currentDisplay.model = edid_decoded.model;
            currentDisplay.resolutionx = edid_decoded.resolutionx;
            currentDisplay.resolutiony = edid_decoded.resolutiony;
            currentDisplay.sizex = edid_decoded.sizex;
            currentDisplay.sizey = edid_decoded.sizey;
            currentDisplay.pixeldepth = depth;
            is_edid = false;
          }
        }
        if (lines[i].toLowerCase().indexOf('edid:') !== -1) {
          is_edid = true;
          start = lines[i].search(/\S|$/);
        }
      }
    }

    // pushen displays
    if (Object.keys(currentDisplay).length > 0) {         // still information there
      displays.push(currentDisplay);
    }
    return displays;
  }

  // function starts here
  return new Promise((resolve) => {
    process.nextTick(() => {
      let result = {
        controllers: [],
        displays: []
      };
      if (_darwin) {
        let cmd = 'system_profiler SPDisplaysDataType';
        exec(cmd, function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            result = parseLinesDarwin(lines);
          }
          if (callback) {
            callback(result);
          }
          resolve(result);
        });
      }
      if (_linux) {
        let cmd = 'lspci -vvv  2>/dev/null';
        exec(cmd, function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            result.controllers = parseLinesLinuxControllers(lines);
          }
          let cmd = 'xdpyinfo 2>/dev/null | grep \'depth of root window\' | awk \'{ print $5 }\'';
          exec(cmd, function (error, stdout) {
            let depth = 0;
            if (!error) {
              let lines = stdout.toString().split('\n');
              depth = parseInt(lines[0]) || 0;
            }
            let cmd = 'xrandr --verbose 2>/dev/null';
            exec(cmd, function (error, stdout) {
              if (!error) {
                let lines = stdout.toString().split('\n');
                result.displays = parseLinesLinuxDisplays(lines, depth);
              }
              if (callback) {
                callback(result);
              }
              resolve(result);
            });
          });
        });
      }
      if (_freebsd || _openbsd) {
        if (callback) { callback(result); }
        resolve(result);
      }
      if (_sunos) {
        if (callback) { callback(result); }
        resolve(result);
      }
      if (_windows) {
        // https://blogs.technet.microsoft.com/heyscriptingguy/2013/10/03/use-powershell-to-discover-multi-monitor-information/
        try {
          exec(util.getWmic() + ' path win32_VideoController get AdapterCompatibility, AdapterDACType, name, PNPDeviceID, CurrentVerticalResolution, CurrentHorizontalResolution, CurrentNumberOfColors, AdapterRAM, CurrentBitsPerPixel, CurrentRefreshRate, MinRefreshRate, MaxRefreshRate, VideoMemoryType /value', opts, function (error, stdout) {
            if (!error) {
              let csections = stdout.split(/\n\s*\n/);
              result.controllers = parseLinesWindowsControllers(csections);
              exec(util.getWmic() + ' path win32_desktopmonitor get Caption, MonitorManufacturer, MonitorType, ScreenWidth, ScreenHeight /value', opts, function (error, stdout) {
                let dsections = stdout.split(/\n\s*\n/);
                if (!error) {
                  result.displays = parseLinesWindowsDisplays(dsections);
                  if (result.controllers.length === 1 && result.displays.length === 1) {
                    if (_resolutionx && !result.displays[0].resolutionx) {
                      result.displays[0].resolutionx = _resolutionx;
                    }
                    if (_resolutiony && !result.displays[0].resolutiony) {
                      result.displays[0].resolutiony = _resolutiony;
                    }
                    if (_pixeldepth) {
                      result.displays[0].pixeldepth = _pixeldepth;
                    }
                  }
                }
                if (callback) {
                  callback(result);
                }
                resolve(result);
              });
            }
          });  
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);
        }
      }
    });
  });

  function parseLinesWindowsControllers(sections) {
    let controllers = [];
    for (let i in sections) {
      if (sections.hasOwnProperty(i)) {
        if (sections[i].trim() !== '') {

          let lines = sections[i].trim().split('\r\n');
          controllers.push({
            model: util.getValue(lines, 'name', '='),
            vendor: util.getValue(lines, 'AdapterCompatibility', '='),
            bus: util.getValue(lines, 'PNPDeviceID', '=').startsWith('PCI') ? 'PCI' : '',
            vram: parseInt(util.getValue(lines, 'AdapterRAM', '='), 10) / 1024 / 1024,
            vramDynamic: (util.getValue(lines, 'VideoMemoryType', '=') === '2')
          });
          _resolutionx = toInt(util.getValue(lines, 'CurrentHorizontalResolution', '='));
          _resolutiony = toInt(util.getValue(lines, 'CurrentVerticalResolution', '='));
          _pixeldepth = toInt(util.getValue(lines, 'CurrentBitsPerPixel', '='));
        }
      }
    }
    return controllers;
  }

  function parseLinesWindowsDisplays(sections) {
    let displays = [];
    for (let i in sections) {
      if (sections.hasOwnProperty(i)) {
        if (sections[i].trim() !== '') {
          let lines = sections[i].trim().split('\r\n');
          displays.push({
            model: util.getValue(lines, 'MonitorManufacturer', '='),
            main: false,
            builtin: false,
            connection: '',
            resolutionx: toInt(util.getValue(lines, 'ScreenWidth', '=')),
            resolutiony: toInt(util.getValue(lines, 'ScreenHeight', '=')),
            sizex: -1,
            sizey: -1
          });
        }
      }
    }
    return displays;
  }
}

exports.graphics = graphics;


/***/ }),

/***/ "./node_modules/systeminformation/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/systeminformation/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// index.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// Contributors:  Guillaume Legrain (https://github.com/glegrain)
//                Riccardo Novaglia (https://github.com/richy24)
//                Quentin Busuttil (https://github.com/Buzut)
//                Lapsio (https://github.com/lapsio)
//                csy (https://github.com/csy1983)
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
//
// Sections
// --------------------------------
// 1. General
// 2. System (HW)
// 3. OS - Operating System
// 4. CPU
// 5. Memory
// 6. Battery
// 7. Graphics
// 8. File System
// 9. Network
// 10. Processes
// 11. Users/Sessions
// 12. Internet
// 13. Docker
// 14. GetAll - get all data
//
// ==================================================================================
//
// Installation
// --------------------------------
//
// # npm install systeminformation --save
//
// Since version 2.0 systeminformation has no more dependencies.
//
// ==================================================================================
//
// Usage
// --------------------------------
// All functions (except `version` and `time`) are asynchronous functions. Here a small example how to use them:
//
// var si = require('systeminformation');
//
// // callback style
// si.cpu(function(data) {
//	  console.log('CPU-Information:');
//	  console.log(data);
// })
//
// // promises style
// si.cpu()
// 	.then(data => console.log(data))
// 	.catch(error => console.error(error));
//
// ==================================================================================
//
// Comments
// --------------------------------
//
// This library is still work in progress. Version 3 comes with further improvements. First it
// requires now node.js version 4.0 and above. Another big change is, that all functions now
// return promises. You can use them like before with callbacks OR with promises
// (see example in this documentation). I am sure, there is for sure room for improvement.
// I was only able to test it on several Debian, Raspbian, Ubuntu distributions as well as
// OS X (Mavericks, Yosemite, El Captain) and some Windows machines.
// Since version 2 nearly all functionality is available for OS X/Darwin platforms.
// In Version 3 I started to add (limited!) windows support.
//
// Comments, suggestions & reports are very welcome!
//
// ==================================================================================

// ----------------------------------------------------------------------------------
// Dependencies
// ----------------------------------------------------------------------------------

const lib_version = __webpack_require__(/*! ../package.json */ "./node_modules/systeminformation/package.json").version;
const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");
const system = __webpack_require__(/*! ./system */ "./node_modules/systeminformation/lib/system.js");
const osInfo = __webpack_require__(/*! ./osinfo */ "./node_modules/systeminformation/lib/osinfo.js");
const cpu = __webpack_require__(/*! ./cpu */ "./node_modules/systeminformation/lib/cpu.js");
const memory = __webpack_require__(/*! ./memory */ "./node_modules/systeminformation/lib/memory.js");
const battery = __webpack_require__(/*! ./battery */ "./node_modules/systeminformation/lib/battery.js");
const graphics = __webpack_require__(/*! ./graphics */ "./node_modules/systeminformation/lib/graphics.js");
const filesystem = __webpack_require__(/*! ./filesystem */ "./node_modules/systeminformation/lib/filesystem.js");
const network = __webpack_require__(/*! ./network */ "./node_modules/systeminformation/lib/network.js");
const processes = __webpack_require__(/*! ./processes */ "./node_modules/systeminformation/lib/processes.js");
const users = __webpack_require__(/*! ./users */ "./node_modules/systeminformation/lib/users.js");
const internet = __webpack_require__(/*! ./internet */ "./node_modules/systeminformation/lib/internet.js");
const docker = __webpack_require__(/*! ./docker */ "./node_modules/systeminformation/lib/docker.js");

let _platform = process.platform;
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _sunos = (_platform === 'sunos');

// ----------------------------------------------------------------------------------
// 1. General
// ----------------------------------------------------------------------------------

function version() {
  return lib_version;
}

// ----------------------------------------------------------------------------------
// 14. get all
// ----------------------------------------------------------------------------------

// --------------------------
// get static data - they should not change until restarted

function getStaticData(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {

      let data = {};

      data.version = version();

      Promise.all([
        system.system(),
        system.bios(),
        system.baseboard(),
        osInfo.osInfo(),
        osInfo.versions(),
        cpu.cpu(),
        cpu.cpuFlags(),
        graphics.graphics(),
        network.networkInterfaces(),
        memory.memLayout(),
        filesystem.diskLayout()
      ]).then(res => {
        data.system = res[0];
        data.bios = res[1];
        data.baseboard = res[2];
        data.os = res[3];
        data.versions = res[4];
        data.cpu = res[5];
        data.cpu.flags = res[6];
        data.graphics = res[7];
        data.net = res[8];
        data.memLayout = res[9];
        data.diskLayout = res[10];
        if (callback) { callback(data); }
        resolve(data);
      });
    });
  });
}

// --------------------------
// get all dynamic data - e.g. for monitoring agents
// may take some seconds to get all data
// --------------------------
// 2 additional parameters needed
// - srv: 		comma separated list of services to monitor e.g. "mysql, apache, postgresql"
// - iface:	define network interface for which you like to monitor network speed e.g. "eth0"

function getDynamicData(srv, iface, callback) {

  if (util.isFunction(iface)) {
    callback = iface;
    iface = '';
  }
  if (util.isFunction(srv)) {
    callback = srv;
    srv = '';
  }

  return new Promise((resolve) => {
    process.nextTick(() => {

      iface = iface || network.getDefaultNetworkInterface();
      srv = srv || '';

      // use closure to track ƒ completion
      let functionProcessed = (function () {
        let totalFunctions = 14;
        if (_windows) totalFunctions = 10;
        if (_freebsd || _openbsd) totalFunctions = 11;
        if (_sunos) totalFunctions = 6;

        return function () {
          if (--totalFunctions === 0) {
            if (callback) {
              callback(data);
            }
            resolve(data);
          }
        };
      })();

      // var totalFunctions = 14;
      // function functionProcessed() {
      //   if (--totalFunctions === 0) {
      //     if (callback) { callback(data) }
      //     resolve(data);
      //   }
      // }

      let data = {};

      // get time
      data.time = osInfo.time();

      /**
       * @namespace
       * @property {Object}  versions
       * @property {string}  versions.node
       * @property {string}  versions.v8
       */
      data.node = process.versions.node;
      data.v8 = process.versions.v8;

      cpu.cpuCurrentspeed().then(res => {
        data.cpuCurrentspeed = res;
        functionProcessed();
      });

      users.users().then(res => {
        data.users = res;
        functionProcessed();
      });

      if (!_windows) {
        processes.processes().then(res => {
          data.processes = res;
          functionProcessed();
        });
      }

      cpu.currentLoad().then(res => {
        data.currentLoad = res;
        functionProcessed();
      });

      if (!_sunos) {
        cpu.cpuTemperature().then(res => {
          data.temp = res;
          functionProcessed();
        });
      }

      if (!_openbsd && !_freebsd && !_sunos) {
        network.networkStats(iface).then(res => {
          data.networkStats = res;
          functionProcessed();
        });
      }

      if (!_sunos) {
        network.networkConnections().then(res => {
          data.networkConnections = res;
          functionProcessed();
        });
      }

      memory.mem().then(res => {
        data.mem = res;
        functionProcessed();
      });

      if (!_sunos) {
        battery().then(res => {
          data.battery = res;
          functionProcessed();
        });
      }

      if (!_windows && !_sunos) {
        processes.services(srv).then(res => {
          data.services = res;
          functionProcessed();
        });
      }

      if (!_sunos) {
        filesystem.fsSize().then(res => {
          data.fsSize = res;
          functionProcessed();
        });
      }

      if (!_windows && !_openbsd && !_freebsd && !_sunos) {
        filesystem.fsStats().then(res => {
          data.fsStats = res;
          functionProcessed();
        });
      }

      if (!_windows && !_openbsd && !_freebsd && !_sunos) {
        filesystem.disksIO().then(res => {
          data.disksIO = res;
          functionProcessed();
        });
      }

      internet.inetLatency().then(res => {
        data.inetLatency = res;
        functionProcessed();
      });
    });
  });
}

// --------------------------
// get all data at once
// --------------------------
// 2 additional parameters needed
// - srv: 		comma separated list of services to monitor e.g. "mysql, apache, postgresql"
// - iface:	define network interface for which you like to monitor network speed e.g. "eth0"

function getAllData(srv, iface, callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let data = {};

      if (iface && util.isFunction(iface) && !callback) {
        callback = iface;
        iface = '';
      }

      if (srv && util.isFunction(srv) && !iface && !callback) {
        callback = srv;
        srv = '';
        iface = '';
      }

      getStaticData().then(res => {
        data = res;
        getDynamicData(srv, iface).then(res => {
          for (let key in res) {
            if (res.hasOwnProperty(key)) {
              data[key] = res[key];
            }
          }
          if (callback) { callback(data); }
          resolve(data);
        });
      });
    });
  });
}

// ----------------------------------------------------------------------------------
// export all libs
// ----------------------------------------------------------------------------------

exports.version = version;
exports.system = system.system;
exports.bios = system.bios;
exports.baseboard = system.baseboard;

exports.time = osInfo.time;
exports.osInfo = osInfo.osInfo;
exports.versions = osInfo.versions;
exports.shell = osInfo.shell;

exports.cpu = cpu.cpu;
exports.cpuFlags = cpu.cpuFlags;
exports.cpuCache = cpu.cpuCache;
exports.cpuCurrentspeed = cpu.cpuCurrentspeed;
exports.cpuTemperature = cpu.cpuTemperature;
exports.currentLoad = cpu.currentLoad;
exports.fullLoad = cpu.fullLoad;

exports.mem = memory.mem;
exports.memLayout = memory.memLayout;

exports.battery = battery;

exports.graphics = graphics.graphics;

exports.fsSize = filesystem.fsSize;
exports.blockDevices = filesystem.blockDevices;
exports.fsStats = filesystem.fsStats;
exports.disksIO = filesystem.disksIO;
exports.diskLayout = filesystem.diskLayout;

exports.networkInterfaceDefault = network.networkInterfaceDefault;
exports.networkInterfaces = network.networkInterfaces;
exports.networkStats = network.networkStats;
exports.networkConnections = network.networkConnections;

exports.services = processes.services;
exports.processes = processes.processes;
exports.processLoad = processes.processLoad;

exports.users = users.users;

exports.inetChecksite = internet.inetChecksite;
exports.inetLatency = internet.inetLatency;

exports.dockerContainers = docker.dockerContainers;
exports.dockerContainerStats = docker.dockerContainerStats;
exports.dockerContainerProcesses = docker.dockerContainerProcesses;
exports.dockerAll = docker.dockerAll;

exports.getStaticData = getStaticData;
exports.getDynamicData = getDynamicData;
exports.getAllData = getAllData;


/***/ }),

/***/ "./node_modules/systeminformation/lib/internet.js":
/*!********************************************************!*\
  !*** ./node_modules/systeminformation/lib/internet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// internet.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 12. Internet
// ----------------------------------------------------------------------------------

const exec = __webpack_require__(/*! child_process */ "child_process").exec;
const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");

let _platform = process.platform;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _sunos = (_platform === 'sunos');

const opts = {
  windowsHide: true
};

// --------------------------
// check if external site is available

function inetChecksite(url, callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {

      let result = {
        url: url,
        ok: false,
        status: 404,
        ms: -1
      };
      if (url) {
        url = url.toLowerCase();
        let t = Date.now();
        if (_linux || _freebsd || _openbsd || _darwin || _sunos) {
          let args = ' -I --connect-timeout 5 -m 5 ' + url + ' 2>/dev/null | head -n 1 | cut -d " " -f2';
          let cmd = 'curl';
          exec(cmd + args, function (error, stdout) {
            let statusCode = parseInt(stdout.toString());
            result.status = statusCode || 404;
            result.ok = !error && (statusCode === 200 || statusCode === 301 || statusCode === 302 || statusCode === 304);
            result.ms = (result.ok ? Date.now() - t : -1);
            if (callback) { callback(result); }
            resolve(result);
          });
        }
        if (_windows) {   // if this is stable, this can be used for all OS types
          const http = (url.startsWith('https:') ? __webpack_require__(/*! https */ "https") : __webpack_require__(/*! http */ "http"));
          try {
            http.get(url, (res) => {
              const statusCode = res.statusCode;

              result.status = statusCode || 404;
              result.ok = (statusCode === 200 || statusCode === 301 || statusCode === 302 || statusCode === 304);

              if (statusCode !== 200) {
                res.resume();
                result.ms = (result.ok ? Date.now() - t : -1);
                if (callback) { callback(result); }
                resolve(result);
              } else {
                // res.on('data', (chunk) => {  });
                res.on('end', () => {
                  result.ms = (result.ok ? Date.now() - t : -1);
                  if (callback) { callback(result); }
                  resolve(result);
                });
              }
            }).on('error', () => {
              if (callback) { callback(result); }
              resolve(result);
            });
          } catch (err) {
            if (callback) { callback(result); }
            resolve(result);
          }
        }
      } else {
        if (callback) { callback(result); }
        resolve(result);
      }
    });
  });
}

exports.inetChecksite = inetChecksite;

// --------------------------
// check inet latency

function inetLatency(host, callback) {

  // fallback - if only callback is given
  if (util.isFunction(host) && !callback) {
    callback = host;
    host = '';
  }

  host = host || '8.8.8.8';

  return new Promise((resolve) => {
    process.nextTick(() => {
      let cmd;
      if (_linux || _freebsd || _openbsd || _darwin) {
        if (_linux) {
          cmd = 'ping -c 2 -w 3 ' + host + ' | grep rtt';
        }
        if (_freebsd || _openbsd) {
          cmd = 'ping -c 2 -t 3 ' + host + ' | grep round-trip';
        }
        if (_darwin) {
          cmd = 'ping -c 2 -t 3 ' + host + ' | grep avg';
        }

        exec(cmd, function (error, stdout) {
          let result = -1;
          if (!error) {
            const line = stdout.toString().split('=');
            if (line.length > 1) {
              const parts = line[1].split('/');
              if (parts.length > 1) {
                result = parseFloat(parts[1]);
              }
            }
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_sunos) {
        exec('ping -s -a ' + host + ' 56 2 | grep avg', {timeout: 3000}, function (error, stdout) {
          let result = -1;
          if (!error) {
            const line = stdout.toString().split('=');
            if (line.length > 1) {
              const parts = line[1].split('/');
              if (parts.length > 1) {
                result = parseFloat(parts[1].replace(',', '.'));
              }
            }
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_windows) {
        let result = -1;
        try {
          exec('ping ' + host + ' -n 1', opts, function (error, stdout) {
            if (!error) {
              let lines = stdout.toString().split('\r\n');
              lines.shift();
              lines.forEach(function (line) {
                if (line.toLowerCase().startsWith('    min')) {
                  let l = line.replace(/ +/g, ' ').split(' ');
                  if (l.length > 8) {
                    result = parseFloat(l[9]);
                  }
                }
              });
            }
            if (callback) { callback(result); }
            resolve(result);
          });  
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);
        }
      }
    });
  });
}

exports.inetLatency = inetLatency;


/***/ }),

/***/ "./node_modules/systeminformation/lib/memory.js":
/*!******************************************************!*\
  !*** ./node_modules/systeminformation/lib/memory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// memory.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 5. Memory
// ----------------------------------------------------------------------------------

const os = __webpack_require__(/*! os */ "os");
const exec = __webpack_require__(/*! child_process */ "child_process").exec;
const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");

let _platform = process.platform;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _sunos = (_platform === 'sunos');

const opts = {
  windowsHide: true
};

const OSX_RAM_manufacturers = {
  '0x014F': 'Transcend Information',
  '0x2C00': 'Micron Technology Inc.',
  '0x802C': 'Micron Technology Inc.',
  '0x80AD': 'Hynix Semiconductor Inc.',
  '0x80CE': 'Samsung Electronics Inc.',
  '0xAD00': 'Hynix Semiconductor Inc.',
  '0xCE00': 'Samsung Electronics Inc.',
  '0x02FE': 'Elpida',
  '0x5105': 'Qimonda AG i. In.',
  '0x8551': 'Qimonda AG i. In.',
  '0x859B': 'Crucial'
};

// _______________________________________________________________________________________
// |                         R A M                              |          H D           |
// |______________________|_________________________|           |                        |
// |        active             buffers/cache        |           |                        |
// |________________________________________________|___________|_________|______________|
// |                     used                            free   |   used       free      |
// |____________________________________________________________|________________________|
// |                        total                               |          swap          |
// |____________________________________________________________|________________________|

// free (older versions)
// ----------------------------------
// # free
//              total       used        free     shared    buffers     cached
// Mem:         16038 (1)   15653 (2)   384 (3)  0 (4)     236 (5)     14788 (6)
// -/+ buffers/cache:       628 (7)     15409 (8)
// Swap:        16371         83      16288
//
// |------------------------------------------------------------|
// |                           R A M                            |
// |______________________|_____________________________________|
// | active (2-(5+6) = 7) |  available (3+5+6 = 8)              |
// |______________________|_________________________|___________|
// |        active        |  buffers/cache (5+6)    |           |
// |________________________________________________|___________|
// |                   used (2)                     | free (3)  |
// |____________________________________________________________|
// |                          total (1)                         |
// |____________________________________________________________|

//
// free (since free von procps-ng 3.3.10)
// ----------------------------------
// # free
//              total       used        free     shared    buffers/cache   available
// Mem:         16038 (1)   628 (2)     386 (3)  0 (4)     15024 (5)     14788 (6)
// Swap:        16371         83      16288
//
// |------------------------------------------------------------|
// |                           R A M                            |
// |______________________|_____________________________________|
// |                      |      available (6) estimated        |
// |______________________|_________________________|___________|
// |     active (2)       |   buffers/cache (5)     | free (3)  |
// |________________________________________________|___________|
// |                          total (1)                         |
// |____________________________________________________________|
//
// Reference: http://www.software-architect.net/blog/article/date/2015/06/12/-826c6e5052.html

function mem(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {

      let result = {
        total: os.totalmem(),
        free: os.freemem(),
        used: os.totalmem() - os.freemem(),

        active: os.totalmem() - os.freemem(),     // temporarily (fallback)
        available: os.freemem(),                  // temporarily (fallback)
        buffcache: 0,

        swaptotal: 0,
        swapused: 0,
        swapfree: 0
      };

      if (_linux) {
        exec('free -b', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');

            let mem = lines[1].replace(/ +/g, ' ').split(' ');
            result.total = parseInt(mem[1], 10);
            result.free = parseInt(mem[3], 10);

            if (lines.length === 4) {                   // free (since free von procps-ng 3.3.10)
              result.buffcache = parseInt(mem[5], 10);
              result.available = parseInt(mem[6], 10);
              mem = lines[2].replace(/ +/g, ' ').split(' ');
            } else {                                    // free (older versions)
              result.buffcache = parseInt(mem[5], 10) + parseInt(mem[6], 10);
              result.available = result.free + result.buffcache;
              mem = lines[3].replace(/ +/g, ' ').split(' ');
            }
            result.active = result.total - result.free - result.buffcache;

            result.swaptotal = parseInt(mem[1], 10);
            result.swapfree = parseInt(mem[3], 10);
            result.swapused = parseInt(mem[2], 10);

          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_freebsd || _openbsd) {
        exec('/sbin/sysctl -a | grep -E "hw.realmem|hw.physmem|vm.stats.vm.v_page_count|vm.stats.vm.v_wire_count|vm.stats.vm.v_active_count|vm.stats.vm.v_inactive_count|vm.stats.vm.v_cache_count|vm.stats.vm.v_free_count|vm.stats.vm.v_page_size"', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            const pagesize = parseInt(util.getValue(lines, 'vm.stats.vm.v_page_size'), 10);
            const inactive = parseInt(util.getValue(lines, 'vm.stats.vm.v_inactive_count'), 10) * pagesize;
            const cache = parseInt(util.getValue(lines, 'vm.stats.vm.v_cache_count'), 10) * pagesize;

            result.total = parseInt(util.getValue(lines, 'hw.realmem'), 10);
            if (isNaN(result.total)) result.total = parseInt(util.getValue(lines, 'hw.physmem'), 10);
            result.free = parseInt(util.getValue(lines, 'vm.stats.vm.v_free_count'), 10) * pagesize;
            result.buffcache = inactive + cache;
            result.available = result.buffcache + result.free;
            result.active = result.total - result.free - result.buffcache;

            result.swaptotal = 0;
            result.swapfree = 0;
            result.swapused = 0;

          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_sunos) {
        if (callback) { callback(result); }
        resolve(result);
      }
      if (_darwin) {
        exec('vm_stat | grep "Pages active"', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');

            result.active = parseInt(lines[0].split(':')[1], 10) * 4096;
            result.buffcache = result.used - result.active;
            result.available = result.free + result.buffcache;
          }
          exec('sysctl -n vm.swapusage', function (error, stdout) {
            if (!error) {
              let lines = stdout.toString().split('\n');
              if (lines.length > 0) {
                let line = lines[0].replace(/,/g, '.').replace(/M/g, '');
                line = line.trim().split('  ');
                for (let i = 0; i < line.length; i++) {
                  if (line[i].toLowerCase().indexOf('total') !== -1) result.swaptotal = parseFloat(line[i].split('=')[1].trim()) * 1024 * 1024;
                  if (line[i].toLowerCase().indexOf('used') !== -1) result.swapused = parseFloat(line[i].split('=')[1].trim()) * 1024 * 1024;
                  if (line[i].toLowerCase().indexOf('free') !== -1) result.swapfree = parseFloat(line[i].split('=')[1].trim()) * 1024 * 1024;
                }
              }
            }
            if (callback) { callback(result); }
            resolve(result);
          });
        });
      }
      if (_windows) {
        let swaptotal = 0;
        let swapused = 0;
        try {
          exec(util.getWmic() + ' pagefile get AllocatedBaseSize, CurrentUsage', opts, function (error, stdout) {
            if (!error) {
              let lines = stdout.split('\r\n').filter(line => line.trim() !== '').filter((line, idx) => idx > 0);
              lines.forEach(function (line) {
                if (line !== '') {
                  line = line.trim().split(/\s\s+/);
                  swaptotal = swaptotal + parseInt(line[0], 10);
                  swapused = swapused + parseInt(line[1], 10);
                }
              });
            }
            result.swaptotal = swaptotal * 1024 * 1024;
            result.swapused = swapused * 1024 * 1024;
            result.swapfree = result.swaptotal - result.swapused;

            if (callback) { callback(result); }
            resolve(result);
          });
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);
        }
      }
    });
  });
}

exports.mem = mem;

function memLayout(callback) {

  function getManufacturer(manId) {
    if (OSX_RAM_manufacturers.hasOwnProperty(manId)) {
      return (OSX_RAM_manufacturers[manId]);
    }
    return manId;
  }

  return new Promise((resolve) => {
    process.nextTick(() => {

      let result = [];

      if (_linux || _freebsd || _openbsd) {
        exec('dmidecode -t memory | grep -iE "Size:|Type|Speed|Manufacturer|Form Factor|Locator|Memory Device|Serial Number|Voltage|Part Number"', function (error, stdout) {
          if (!error) {
            let devices = stdout.toString().split('Memory Device');
            devices.shift();
            devices.forEach(function (device) {
              let lines = device.split('\n');
              if (parseInt(util.getValue(lines, 'Size'), 10) > 0) {
                result.push({
                  size: parseInt(util.getValue(lines, 'Size'), 10) * 1024 * 1024,
                  bank: util.getValue(lines, 'Bank Locator'),
                  type: util.getValue(lines, 'Type:'),
                  clockSpeed: (util.getValue(lines, 'Configured Clock Speed:') ? parseInt(util.getValue(lines, 'Configured Clock Speed:'), 10) : (util.getValue(lines, 'Speed:') ? parseInt(util.getValue(lines, 'Speed:'), 10) : -1)),
                  formFactor: util.getValue(lines, 'Form Factor:'),
                  manufacturer: util.getValue(lines, 'Manufacturer:'),
                  partNum: util.getValue(lines, 'Part Number:'),
                  serialNum: util.getValue(lines, 'Serial Number:'),
                  voltageConfigured: parseFloat(util.getValue(lines, 'Configured Voltage:') || -1),
                  voltageMin: parseFloat(util.getValue(lines, 'Minimum Voltage:') || -1),
                  voltageMax: parseFloat(util.getValue(lines, 'Maximum Voltage:') || -1),
                });
              } else {
                result.push({
                  size: 0,
                  bank: util.getValue(lines, 'Bank Locator'),
                  type: 'Empty',
                  clockSpeed: 0,
                  formFactor: util.getValue(lines, 'Form Factor:'),
                  partNum: '',
                  serialNum: '',
                  voltageConfigured: -1,
                  voltageMin: -1,
                  voltageMax: -1,
                });
              }
            });
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }

      if (_darwin) {
        exec('system_profiler SPMemoryDataType', function (error, stdout) {
          if (!error) {
            let devices = stdout.toString().split('        BANK ');
            devices.shift();
            devices.forEach(function (device) {
              let lines = device.split('\n');
              const bank = 'BANK ' + lines[0].trim();
              const size = parseInt(util.getValue(lines, '          Size'));
              if (size) {
                result.push({
                  size: size * 1024 * 1024 * 1024,
                  bank: bank,
                  type: util.getValue(lines, '          Type:'),
                  clockSpeed: parseInt(util.getValue(lines, '          Speed:'), 10),
                  formFactor: '',
                  manufacturer: getManufacturer(util.getValue(lines, '          Manufacturer:')),
                  partNum: util.getValue(lines, '          Part Number:'),
                  serialNum: util.getValue(lines, '          Serial Number:'),
                  voltageConfigured: -1,
                  voltageMin: -1,
                  voltageMax: -1,
                });
              } else {
                result.push({
                  size: 0,
                  bank: bank,
                  type: 'Empty',
                  clockSpeed: 0,
                  formFactor: '',
                  manufacturer: '',
                  partNum: '',
                  serialNum: '',
                  voltageConfigured: -1,
                  voltageMin: -1,
                  voltageMax: -1,
                });
              }
            });
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_sunos) {
        if (callback) { callback(result); }
        resolve(result);
      }
      if (_windows) {
        const memoryTypes = 'Unknown|Other|DRAM|Synchronous DRAM|Cache DRAM|EDO|EDRAM|VRAM|SRAM|RAM|ROM|FLASH|EEPROM|FEPROM|EPROM|CDRAM|3DRAM|SDRAM|SGRAM|RDRAM|DDR|DDR2|DDR2 FB-DIMM|Reserved|DDR3|FBD2|DDR4|LPDDR|LPDDR2|LPDDR3|LPDDR4'.split('|');
        const FormFactors = 'Unknown|Other|SIP|DIP|ZIP|SOJ|Proprietary|SIMM|DIMM|TSOP|PGA|RIMM|SODIMM|SRIMM|SMD|SSMP|QFP|TQFP|SOIC|LCC|PLCC|BGA|FPBGA|LGA'.split('|');

        try {
          exec(util.getWmic() + ' memorychip get BankLabel, Capacity, ConfiguredClockSpeed, ConfiguredVoltage, MaxVoltage, MinVoltage, DataWidth, FormFactor, Manufacturer, MemoryType, PartNumber, SerialNumber, Speed, Tag /value', opts, function (error, stdout) {
            if (!error) {
              let devices = stdout.toString().split('BankL');
              devices.shift();
              devices.forEach(function (device) {
                let lines = device.split('\r\n');
                result.push({
                  size: parseInt(util.getValue(lines, 'Capacity', '='), 10),
                  bank: util.getValue(lines, 'abel', '='), // BankLabel
                  type: memoryTypes[parseInt(util.getValue(lines, 'MemoryType', '='), 10)],
                  clockSpeed: parseInt(util.getValue(lines, 'ConfiguredClockSpeed', '='), 10),
                  formFactor: FormFactors[parseInt(util.getValue(lines, 'FormFactor', '='), 10)],
                  manufacturer: util.getValue(lines, 'Manufacturer', '='),
                  partNum: util.getValue(lines, 'PartNumber', '='),
                  serialNum: util.getValue(lines, 'SerialNumber', '='),
                  voltageConfigured: parseInt(util.getValue(lines, 'ConfiguredVoltage', '='), 10) / 1000.0,
                  voltageMin: parseInt(util.getValue(lines, 'MinVoltage', '='), 10) / 1000.0,
                  voltageMax: parseInt(util.getValue(lines, 'MaxVoltage', '='), 10) / 1000.0,
                });
              });
            }
            if (callback) { callback(result); }
            resolve(result);
          });
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);
        }
      }
    });
  });
}

exports.memLayout = memLayout;



/***/ }),

/***/ "./node_modules/systeminformation/lib/network.js":
/*!*******************************************************!*\
  !*** ./node_modules/systeminformation/lib/network.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// network.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 9. Network
// ----------------------------------------------------------------------------------

const os = __webpack_require__(/*! os */ "os");
const exec = __webpack_require__(/*! child_process */ "child_process").exec;
const execSync = __webpack_require__(/*! child_process */ "child_process").execSync;
const fs = __webpack_require__(/*! fs */ "fs");
const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");

let _platform = process.platform;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _sunos = (_platform === 'sunos');

const opts = {
  windowsHide: true,
  maxBuffer: 1024 * 2000
};

let _network = {};
let _default_iface;
let _mac = {};
let isIpAvailable;

function getDefaultNetworkInterface() {

  let ifaces = os.networkInterfaces();
  let ifacename = '';
  let scopeid = 9999;

  // fallback - "first" external interface (sorted by scopeid)
  for (let dev in ifaces) {
    if (ifaces.hasOwnProperty(dev)) {
      ifaces[dev].forEach(function (details) {
        if (details && details.internal === false && details.scopeid && details.scopeid < scopeid) {
          ifacename = dev;
          scopeid = details.scopeid;
        }
      });
    }
  }
  if (_linux || _darwin || _freebsd || _openbsd || _sunos) {
    let cmd = '';
    if (_linux) cmd = 'route 2>/dev/null | grep default | awk \'{print $8}\'';
    if (_darwin) cmd = 'route get 0.0.0.0 2>/dev/null | grep interface: | awk \'{print $2}\'';
    if (_freebsd || _openbsd || _sunos) cmd = 'route get 0.0.0.0 | grep interface:';
    let result = execSync(cmd);
    ifacename = result.toString().split('\n')[0];
    if (ifacename.indexOf(':') > -1) {
      ifacename = ifacename.split(':')[1].trim();
    }
  }

  if (ifacename) _default_iface = ifacename;
  return _default_iface;
}

exports.getDefaultNetworkInterface = getDefaultNetworkInterface;

function getMacAddresses() {
  let iface = '';
  let mac = '';
  let result = {};
  if (_linux || _freebsd || _openbsd) {
    if (typeof isIpAvailable === 'undefined') {
      if (fs.existsSync('/sbin/ip')) {
        isIpAvailable = true;
      } else {
        isIpAvailable = false;
      }
    }
    const cmd = 'export LC_ALL=C; /sbin/' + ((isIpAvailable) ? 'ip link show up' : 'ifconfig') + '; unset LC_ALL';
    let res = execSync(cmd);
    const lines = res.toString().split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] && lines[i][0] !== ' ') {
        if (isIpAvailable) {
          let nextline = lines[i + 1].trim().split(' ');
          if (nextline[0] === 'link/ether') {
            iface = lines[i].split(' ')[1];
            iface = iface.slice(0, iface.length - 1);
            mac = nextline[1];
          }
        } else {
          iface = lines[i].split(' ')[0];
          mac = lines[i].split('HWaddr ')[1];
        }

        if (iface && mac) {
          result[iface] = mac.trim();
          iface = '';
          mac = '';
        }
      }
    }
  }
  if (_darwin) {
    const cmd = '/sbin/ifconfig';
    let res = execSync(cmd);
    const lines = res.toString().split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] && lines[i][0] !== '\t' && lines[i].indexOf(':') > 0) {
        iface = lines[i].split(':')[0];
      } else if (lines[i].indexOf('\tether ') === 0) {
        mac = lines[i].split('\tether ')[1];
        if (iface && mac) {
          result[iface] = mac.trim();
          iface = '';
          mac = '';
        }
      }
    }
  }
  return result;
}

function networkInterfaceDefault(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let result = getDefaultNetworkInterface();
      if (callback) { callback(result); }
      resolve(result);
    });
  });
}

exports.networkInterfaceDefault = networkInterfaceDefault;

// --------------------------
// NET - interfaces

function networkInterfaces(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let ifaces = os.networkInterfaces();
      let result = [];

      for (let dev in ifaces) {
        let ip4 = '';
        let ip6 = '';
        let mac = '';
        if (ifaces.hasOwnProperty(dev)) {
          ifaces[dev].forEach(function (details) {
            if (details.family === 'IPv4') {
              ip4 = details.address;
            }
            if (details.family === 'IPv6') {
              if (!ip6 || ip6.match(/^fe80::/i)) {
                ip6 = details.address;
              }
            }
            mac = details.mac;
            if (mac.indexOf('00:00:0') > -1 && (_linux || _darwin)) {
              if (Object.keys(_mac).length === 0) {
                _mac = getMacAddresses();
              }
              mac = _mac[dev] || '';
            }
          });
          let internal = (ifaces[dev] && ifaces[dev][0]) ? ifaces[dev][0].internal : null;
          result.push({ iface: dev, ip4: ip4, ip6: ip6, mac: mac, internal: internal });
        }
      }
      if (callback) { callback(result); }
      resolve(result);
    });
  });
}

exports.networkInterfaces = networkInterfaces;

// --------------------------
// NET - Speed

function calcNetworkSpeed(iface, rx, tx, operstate) {
  let result = {
    iface: iface,
    operstate: operstate,
    rx: rx,
    tx: tx,
    rx_sec: -1,
    tx_sec: -1,
    ms: 0
  };

  if (_network[iface] && _network[iface].ms) {
    result.ms = Date.now() - _network[iface].ms;
    result.rx_sec = (rx - _network[iface].rx) >= 0 ? (rx - _network[iface].rx) / (result.ms / 1000) : 0;
    result.tx_sec = (tx - _network[iface].tx) >= 0 ? (tx - _network[iface].tx) / (result.ms / 1000) : 0;
    _network[iface].rx = rx;
    _network[iface].tx = tx;
    _network[iface].rx_sec = result.rx_sec;
    _network[iface].tx_sec = result.tx_sec;
    _network[iface].ms = Date.now();
    _network[iface].last_ms = result.ms;
    _network[iface].operstate = operstate;
  } else {
    if (!_network[iface]) _network[iface] = {};
    _network[iface].rx = rx;
    _network[iface].tx = tx;
    _network[iface].rx_sec = -1;
    _network[iface].tx_sec = -1;
    _network[iface].ms = Date.now();
    _network[iface].last_ms = 0;
    _network[iface].operstate = operstate;
  }
  return result;
}

function networkStats(iface, callback) {

  function parseLinesWindowsNics(sections) {
    let nics = [];
    for (let i in sections) {
      if (sections.hasOwnProperty(i)) {
        if (sections[i].trim() !== '') {

          let lines = sections[i].trim().split('\r\n');
          let netEnabled = util.getValue(lines, 'NetEnabled', '=');
          if (netEnabled) {
            nics.push({
              mac: util.getValue(lines, 'MACAddress', '=').toLowerCase(),
              name: util.getValue(lines, 'Name', '=').replace(/[()\[\] ]+/g, '').toLowerCase(),
              netEnabled: netEnabled === 'TRUE'
            });
          }
        }
      }
    }
    return nics;
  }

  function parseLinesWindowsPerfData(sections) {
    let perfData = [];
    for (let i in sections) {
      if (sections.hasOwnProperty(i)) {
        if (sections[i].trim() !== '') {

          let lines = sections[i].trim().split('\r\n');
          perfData.push({
            name: util.getValue(lines, 'Name', '=').replace(/[()\[\] ]+/g, '').toLowerCase(),
            rx: parseInt(util.getValue(lines, 'BytesReceivedPersec', '='), 10),
            tx: parseInt(util.getValue(lines, 'BytesSentPersec', '='), 10)
          });
        }
      }
    }
    return perfData;
  }


  // fallback - if only callback is given
  if (util.isFunction(iface) && !callback) {
    callback = iface;
    iface = '';
  }

  return new Promise((resolve) => {
    process.nextTick(() => {

      iface = iface || getDefaultNetworkInterface();

      let result = {
        iface: iface,
        operstate: 'unknown',
        rx: 0,
        tx: 0,
        rx_sec: -1,
        tx_sec: -1,
        ms: 0
      };

      let operstate = 'unknown';
      let rx = 0;
      let tx = 0;

      let cmd, lines, stats;
      if (!_network[iface] || (_network[iface] && !_network[iface].ms) || (_network[iface] && _network[iface].ms && Date.now() - _network[iface].ms >= 500)) {
        if (_linux) {
          if (fs.existsSync('/sys/class/net/' + iface)) {
            cmd =
              'cat /sys/class/net/' + iface + '/operstate; ' +
              'cat /sys/class/net/' + iface + '/statistics/rx_bytes; ' +
              'cat /sys/class/net/' + iface + '/statistics/tx_bytes; ';
            exec(cmd, function (error, stdout) {
              if (!error) {
                lines = stdout.toString().split('\n');
                operstate = lines[0].trim();
                rx = parseInt(lines[1]);
                tx = parseInt(lines[2]);

                result = calcNetworkSpeed(iface, rx, tx, operstate);

              }
              if (callback) { callback(result); }
              resolve(result);
            });
          } else {
            if (callback) { callback(result); }
            resolve(result);
          }
        }
        if (_freebsd || _openbsd) {
          cmd = 'netstat -ibnI ' + iface;
          exec(cmd, function (error, stdout) {
            if (!error) {
              lines = stdout.toString().split('\n');
              for (let i = 1; i < lines.length; i++) {
                const line = lines[i].replace(/ +/g, ' ').split(' ');
                if (line && line[0] && line[7] && line[10]) {
                  rx = rx + parseInt(line[7]);
                  tx = tx + parseInt(line[10]);
                  operstate = 'up';
                }
              }
              result = calcNetworkSpeed(iface, rx, tx, operstate);
            }
            if (callback) { callback(result); }
            resolve(result);
          });
        }
        if (_darwin) {
          cmd = 'ifconfig ' + iface + ' | grep "status"';
          exec(cmd, function (error, stdout) {
            result.operstate = (stdout.toString().split(':')[1] || '').trim();
            result.operstate = (result.operstate || '').toLowerCase();
            result.operstate = (result.operstate === 'active' ? 'up' : (result.operstate === 'inactive' ? 'down' : 'unknown'));
            cmd = 'netstat -bI ' + iface;
            exec(cmd, function (error, stdout) {
              if (!error) {
                lines = stdout.toString().split('\n');
                // if there is less than 2 lines, no information for this interface was found
                if (lines.length > 1 && lines[1].trim() !== '') {
                  // skip header line
                  // use the second line because it is tied to the NIC instead of the ipv4 or ipv6 address
                  stats = lines[1].replace(/ +/g, ' ').split(' ');
                  rx = parseInt(stats[6]);
                  tx = parseInt(stats[9]);

                  result = calcNetworkSpeed(iface, rx, tx, result.operstate);
                }
              }
              if (callback) { callback(result); }
              resolve(result);
            });
          });
        }
        if (_windows) {
          // NICs
          let perfData = [];
          let nics = [];
          cmd = util.getWmic() + ' nic get MACAddress, name, NetEnabled /value';
          try {
            exec(cmd, opts, function (error, stdout) {
              if (!error) {
                const nsections = stdout.split(/\n\s*\n/);
                nics = parseLinesWindowsNics(nsections);

                // Performance Data
                cmd = util.getWmic() + ' path Win32_PerfRawData_Tcpip_NetworkInterface Get name,BytesReceivedPersec,BytesSentPersec,BytesTotalPersec /value';
                exec(cmd, opts, function (error, stdout) {
                  if (!error) {
                    const psections = stdout.split(/\n\s*\n/);
                    perfData = parseLinesWindowsPerfData(psections);
                  }

                  // Network Interfaces
                  networkInterfaces().then(interfaces => {
                    // get mac from 'interfaces' by interfacename
                    let mac = '';
                    interfaces.forEach(detail => {
                      if (detail.iface === iface) {
                        mac = detail.mac;
                      }
                    });

                    // get name from 'nics' (by macadress)
                    let name = '';
                    nics.forEach(detail => {
                      if (detail.mac === mac) {
                        name = detail.name;
                        operstate = (detail.netEnabled ? 'up' : 'down');
                      }
                    });

                    // get bytes sent, received from perfData by name
                    rx = 0;
                    tx = 0;
                    perfData.forEach(detail => {
                      if (detail.name === name) {
                        rx = detail.rx;
                        tx = detail.tx;
                      }
                    });

                    if (rx && tx) {
                      result = calcNetworkSpeed(iface, parseInt(rx), parseInt(tx), operstate);
                    }
                    if (callback) { callback(result); }
                    resolve(result);
                  });
                });
              }
            });
          } catch (e) {
            if (callback) { callback(result); }
            resolve(result);
          }
        }
      } else {
        result.rx = _network[iface].rx;
        result.tx = _network[iface].tx;
        result.rx_sec = _network[iface].rx_sec;
        result.tx_sec = _network[iface].tx_sec;
        result.ms = _network[iface].last_ms;
        result.operstate = _network[iface].operstate;
        if (callback) { callback(result); }
        resolve(result);
      }
    });
  });
}

exports.networkStats = networkStats;

// --------------------------
// NET - connections (sockets)

function networkConnections(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let result = [];
      if (_linux || _freebsd || _openbsd) {
        let cmd = 'netstat -tuna | grep "ESTABLISHED\\|SYN_SENT\\|SYN_RECV\\|FIN_WAIT1\\|FIN_WAIT2\\|TIME_WAIT\\|CLOSE\\|CLOSE_WAIT\\|LAST_ACK\\|LISTEN\\|CLOSING\\|UNKNOWN\\|VERBUNDEN"';
        if (_freebsd || _openbsd) cmd = 'netstat -na | grep "ESTABLISHED\\|SYN_SENT\\|SYN_RECV\\|FIN_WAIT1\\|FIN_WAIT2\\|TIME_WAIT\\|CLOSE\\|CLOSE_WAIT\\|LAST_ACK\\|LISTEN\\|CLOSING\\|UNKNOWN\\|VERBUNDEN"';
        exec(cmd, { maxBuffer: 1024 * 2000 }, function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            lines.forEach(function (line) {
              line = line.replace(/ +/g, ' ').split(' ');
              if (line.length >= 6) {
                let localip = line[3];
                let localport = '';
                let localaddress = line[3].split(':');
                if (localaddress.length > 1) {
                  localport = localaddress[localaddress.length - 1];
                  localaddress.pop();
                  localip = localaddress.join(':');
                }
                let peerip = line[4];
                let peerport = '';
                let peeraddress = line[4].split(':');
                if (peeraddress.length > 1) {
                  peerport = peeraddress[peeraddress.length - 1];
                  peeraddress.pop();
                  peerip = peeraddress.join(':');
                }
                let connstate = line[5];
                if (connstate === 'VERBUNDEN') connstate = 'ESTABLISHED';
                if (connstate) {
                  result.push({
                    protocol: line[0],
                    localaddress: localip,
                    localport: localport,
                    peeraddress: peerip,
                    peerport: peerport,
                    state: connstate
                  });
                }
              }
            });
            if (callback) {
              callback(result);
            }
            resolve(result);
          } else {
            cmd = 'ss -tuna | grep "ESTAB\\|SYN-SENT\\|SYN-RECV\\|FIN-WAIT1\\|FIN-WAIT2\\|TIME-WAIT\\|CLOSE\\|CLOSE-WAIT\\|LAST-ACK\\|LISTEN\\|CLOSING"';
            exec(cmd, { maxBuffer: 1024 * 2000 }, function (error, stdout) {

              if (!error) {
                let lines = stdout.toString().split('\n');
                lines.forEach(function (line) {
                  line = line.replace(/ +/g, ' ').split(' ');
                  if (line.length >= 6) {
                    let localip = line[4];
                    let localport = '';
                    let localaddress = line[4].split(':');
                    if (localaddress.length > 1) {
                      localport = localaddress[localaddress.length - 1];
                      localaddress.pop();
                      localip = localaddress.join(':');
                    }
                    let peerip = line[5];
                    let peerport = '';
                    let peeraddress = line[5].split(':');
                    if (peeraddress.length > 1) {
                      peerport = peeraddress[peeraddress.length - 1];
                      peeraddress.pop();
                      peerip = peeraddress.join(':');
                    }
                    let connstate = line[1];
                    if (connstate === 'ESTAB') connstate = 'ESTABLISHED';
                    if (connstate === 'TIME-WAIT') connstate = 'TIME_WAIT';
                    if (connstate) {
                      result.push({
                        protocol: line[0],
                        localaddress: localip,
                        localport: localport,
                        peeraddress: peerip,
                        peerport: peerport,
                        state: connstate
                      });
                    }
                  }
                });
              }
              if (callback) {
                callback(result);
              }
              resolve(result);
            });
          }
        });
      }
      if (_darwin) {
        let cmd = 'netstat -nat | grep "ESTABLISHED\\|SYN_SENT\\|SYN_RECV\\|FIN_WAIT1\\|FIN_WAIT2\\|TIME_WAIT\\|CLOSE\\|CLOSE_WAIT\\|LAST_ACK\\|LISTEN\\|CLOSING\\|UNKNOWN"';
        exec(cmd, { maxBuffer: 1024 * 2000 }, function (error, stdout) {
          if (!error) {

            let lines = stdout.toString().split('\n');

            lines.forEach(function (line) {
              line = line.replace(/ +/g, ' ').split(' ');
              if (line.length >= 6) {
                let localip = line[3];
                let localport = '';
                let localaddress = line[3].split('.');
                if (localaddress.length > 1) {
                  localport = localaddress[localaddress.length - 1];
                  localaddress.pop();
                  localip = localaddress.join('.');
                }
                let peerip = line[4];
                let peerport = '';
                let peeraddress = line[4].split('.');
                if (peeraddress.length > 1) {
                  peerport = peeraddress[peeraddress.length - 1];
                  peeraddress.pop();
                  peerip = peeraddress.join('.');
                }
                let connstate = line[5];
                if (connstate) {
                  result.push({
                    protocol: line[0],
                    localaddress: localip,
                    localport: localport,
                    peeraddress: peerip,
                    peerport: peerport,
                    state: connstate
                  });
                }
              }
            });
            if (callback) {
              callback(result);
            }
            resolve(result);
          }
        });
      }
      if (_windows) {
        let cmd = 'netstat -na';
        try {
          exec(cmd, opts, function (error, stdout) {
            if (!error) {

              let lines = stdout.toString().split('\r\n');

              lines.forEach(function (line) {
                line = line.trim().replace(/ +/g, ' ').split(' ');
                if (line.length >= 4) {
                  let localip = line[1];
                  let localport = '';
                  let localaddress = line[1].split(':');
                  if (localaddress.length > 1) {
                    localport = localaddress[localaddress.length - 1];
                    localaddress.pop();
                    localip = localaddress.join(':');
                  }
                  let peerip = line[2];
                  let peerport = '';
                  let peeraddress = line[2].split(':');
                  if (peeraddress.length > 1) {
                    peerport = peeraddress[peeraddress.length - 1];
                    peeraddress.pop();
                    peerip = peeraddress.join(':');
                  }
                  let connstate = line[3];
                  if (connstate === 'HERGESTELLT') connstate = 'ESTABLISHED';
                  if (connstate.startsWith('ABH')) connstate = 'LISTEN';
                  if (connstate === 'SCHLIESSEN_WARTEN') connstate = 'CLOSE_WAIT';
                  if (connstate === 'WARTEND') connstate = 'TIME_WAIT';
                  if (connstate === 'SYN_GESENDET') connstate = 'SYN_SENT';

                  if (connstate === 'LISTENING') connstate = 'LISTEN';
                  if (connstate === 'SYN_RECEIVED') connstate = 'SYN_RECV';
                  if (connstate === 'FIN_WAIT_1') connstate = 'FIN_WAIT1';
                  if (connstate === 'FIN_WAIT_2') connstate = 'FIN_WAIT2';
                  if (connstate) {
                    result.push({
                      protocol: line[0].toLowerCase(),
                      localaddress: localip,
                      localport: localport,
                      peeraddress: peerip,
                      peerport: peerport,
                      state: connstate
                    });
                  }
                }
              });
              if (callback) {
                callback(result);
              }
              resolve(result);
            }
          });
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);
        }
      }
    });
  });
}

exports.networkConnections = networkConnections;


/***/ }),

/***/ "./node_modules/systeminformation/lib/osinfo.js":
/*!******************************************************!*\
  !*** ./node_modules/systeminformation/lib/osinfo.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// osinfo.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 3. Operating System
// ----------------------------------------------------------------------------------

const os = __webpack_require__(/*! os */ "os");
const exec = __webpack_require__(/*! child_process */ "child_process").exec;
const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");

let _platform = process.platform;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _sunos = (_platform === 'sunos');

const opts = {
  windowsHide: true
};

const NOT_SUPPORTED = 'not supported';

// --------------------------
// Get current time and OS uptime

function time() {
  let t = new Date().toString().split(' ');

  return {
    current: Date.now(),
    uptime: os.uptime(),
    timezone: (t.length >= 7) ? t[5] : '',
    timezoneName: (t.length >= 7) ? t.slice(6).join(' ').replace(/\(/g, '').replace(/\)/g, '') : ''
  };
}

exports.time = time;

// --------------------------
// Get logo filename of OS distribution

function getLogoFile(distro) {
  distro = distro || '';
  distro = distro.toLowerCase();
  let result = _platform;
  if (_windows) {
    result = 'windows';
  }
  else if (distro.indexOf('mac os') !== -1) {
    result = 'apple';
  }
  else if (distro.indexOf('arch') !== -1) {
    result = 'arch';
  }
  else if (distro.indexOf('centos') !== -1) {
    result = 'centos';
  }
  else if (distro.indexOf('coreos') !== -1) {
    result = 'coreos';
  }
  else if (distro.indexOf('debian') !== -1) {
    result = 'debian';
  }
  else if (distro.indexOf('deepin') !== -1) {
    result = 'deepin';
  }
  else if (distro.indexOf('elementary') !== -1) {
    result = 'elementary';
  }
  else if (distro.indexOf('fedora') !== -1) {
    result = 'fedora';
  }
  else if (distro.indexOf('gentoo') !== -1) {
    result = 'gentoo';
  }
  else if (distro.indexOf('mageia') !== -1) {
    result = 'mageia';
  }
  else if (distro.indexOf('mandriva') !== -1) {
    result = 'mandriva';
  }
  else if (distro.indexOf('manjaro') !== -1) {
    result = 'manjaro';
  }
  else if (distro.indexOf('mint') !== -1) {
    result = 'mint';
  }
  else if (distro.indexOf('openbsd') !== -1) {
    result = 'openbsd';
  }
  else if (distro.indexOf('freebsd') !== -1) {
    result = 'freebsd';
  }
  else if (distro.indexOf('opensuse') !== -1) {
    result = 'opensuse';
  }
  else if (distro.indexOf('pclinuxos') !== -1) {
    result = 'pclinuxos';
  }
  else if (distro.indexOf('puppy') !== -1) {
    result = 'puppy';
  }
  else if (distro.indexOf('raspbian') !== -1) {
    result = 'raspbian';
  }
  else if (distro.indexOf('reactos') !== -1) {
    result = 'reactos';
  }
  else if (distro.indexOf('redhat') !== -1) {
    result = 'redhat';
  }
  else if (distro.indexOf('slackware') !== -1) {
    result = 'slackware';
  }
  else if (distro.indexOf('sugar') !== -1) {
    result = 'sugar';
  }
  else if (distro.indexOf('steam') !== -1) {
    result = 'steam';
  }
  else if (distro.indexOf('suse') !== -1) {
    result = 'suse';
  }
  else if (distro.indexOf('mate') !== -1) {
    result = 'ubuntu-mate';
  }
  else if (distro.indexOf('lubuntu') !== -1) {
    result = 'lubuntu';
  }
  else if (distro.indexOf('xubuntu') !== -1) {
    result = 'xubuntu';
  }
  else if (distro.indexOf('ubuntu') !== -1) {
    result = 'ubuntu';
  }
  else if (distro.indexOf('solaris') !== -1) {
    result = 'solaris';
  }
  return result;
}

// --------------------------
// OS Information

function osInfo(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let result = {

        platform: (_platform === 'Windows_NT' ? 'Windows' : _platform),
        distro: 'unknown',
        release: 'unknown',
        codename: '',
        kernel: os.release(),
        arch: os.arch(),
        hostname: os.hostname(),
        logofile: ''
      };

      if (_linux) {

        exec('cat /etc/*-release', function (error, stdout) {
          //if (!error) {
          /**
           * @namespace
           * @property {string}  DISTRIB_ID
           * @property {string}  NAME
           * @property {string}  DISTRIB_RELEASE
           * @property {string}  VERSION_ID
           * @property {string}  DISTRIB_CODENAME
           */
          let release = {};
          let lines = stdout.toString().split('\n');
          lines.forEach(function (line) {
            if (line.indexOf('=') !== -1) {
              release[line.split('=')[0].trim().toUpperCase()] = line.split('=')[1].trim();
            }
          });
          result.distro = (release.DISTRIB_ID || release.NAME || 'unknown').replace(/"/g, '');
          result.logofile = getLogoFile(result.distro);
          result.release = (release.DISTRIB_RELEASE || release.VERSION_ID || 'unknown').replace(/"/g, '');
          result.codename = (release.DISTRIB_CODENAME || '').replace(/"/g, '');
          //}
          if (callback) {
            callback(result);
          }
          resolve(result);
        });
      }
      if (_freebsd || _openbsd) {

        exec('sysctl kern.ostype kern.osrelease kern.osrevision', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            result.distro = util.getValue(lines, 'kern.ostype');
            result.logofile = getLogoFile(result.distro);
            result.release = util.getValue(lines, 'kern.osrelease').split('-')[0];
            result.codename = '';
          }
          if (callback) {
            callback(result);
          }
          resolve(result);
        });
      }
      if (_darwin) {
        exec('sw_vers', function (error, stdout) {
          let lines = stdout.toString().split('\n');
          lines.forEach(function (line) {
            if (line.indexOf('ProductName') !== -1) {
              result.distro = line.split(':')[1].trim();
              result.logofile = getLogoFile(result.distro);
            }
            if (line.indexOf('ProductVersion') !== -1) result.release = line.split(':')[1].trim();
          });
          if (callback) {
            callback(result);
          }
          resolve(result);
        });
      }
      if (_sunos) {
        result.release = result.kernel;
        exec('uname -o', function (error, stdout) {
          let lines = stdout.toString().split('\n');
          result.distro = lines[0];
          result.logofile = getLogoFile(result.distro);
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_windows) {
        result.logofile = getLogoFile();
        result.release = result.kernel;
        try {
          exec(util.getWmic() + ' os get Caption', opts, function (error, stdout) {
            result.distro = result.codename = stdout.slice(stdout.indexOf('\r\n') + 2).trim();
            if (callback) {
              callback(result);
            }
            resolve(result);
          });  
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);    
        }
      }
    });
  });
}

exports.osInfo = osInfo;

function versions(callback) {
  return new Promise((resolve) => {
    process.nextTick(() => {
      let result = {
        kernel: os.release(),
        openssl: process.versions.openssl,
        node: process.versions.node,
        v8: process.versions.v8,
        npm: '',
        yarn: '',
        pm2: '',
        gulp: '',
        grunt: '',
        git: '',
        tsc: '',
        mysql: '',
        redis: '',
        mongodb: '',
        nginx: '',
        php: ''
      };

      let functionProcessed = (function () {
        let totalFunctions = 12;
        return function () {
          if (--totalFunctions === 0) {
            if (callback) {
              callback(result);
            }
            resolve(result);
          }
        };
      })();

      try {
        exec('npm -v', function (error, stdout) {
          if (!error) {
            result.npm = stdout.toString().split('\n')[0];
          }
          functionProcessed();
        });
        exec('pm2 -v', function (error, stdout) {
          if (!error) {
            result.pm2 = stdout.toString().split('\n')[0].trim();
          }
          functionProcessed();
        });
        exec('yarn --version', function (error, stdout) {
          if (!error) {
            result.yarn = stdout.toString().split('\n')[0];
          }
          functionProcessed();
        });
        exec('gulp --version', function (error, stdout) {
          if (!error) {
            result.gulp = stdout.toString().split('\n')[0] || '';
            result.gulp = (result.gulp.toLowerCase().split('version')[1] || '').trim();
          }
          functionProcessed();
        });
        exec('tsc --version', function (error, stdout) {
          if (!error) {
            result.tsc = stdout.toString().split('\n')[0] || '';
            result.tsc = (result.tsc.toLowerCase().split('version')[1] || '').trim();
          }
          functionProcessed();
        });
        exec('grunt --version', function (error, stdout) {
          if (!error) {
            result.grunt = stdout.toString().split('\n')[0] || '';
            result.grunt = (result.grunt.toLowerCase().split('cli v')[1] || '').trim();
          }
          functionProcessed();
        });
        exec('git --version', function (error, stdout) {
          if (!error) {
            result.git = stdout.toString().split('\n')[0] || '';
            result.git = (result.git.toLowerCase().split('version')[1] || '').trim();
            result.git = (result.git.split(' ')[0] || '').trim();
          }
          functionProcessed();
        });
        exec('nginx -v', function (error, stdout) {
          if (!error) {
            result.nginx = stdout.toString().split('\n')[0] || '';
            result.nginx = (result.nginx.toLowerCase().split('/')[1] || '').trim();
          }
          functionProcessed();
        });
        exec('mysql -V', function (error, stdout) {
          if (!error) {
            result.mysql = stdout.toString().split('\n')[0] || '';
            result.mysql = (result.mysql.toLowerCase().split(',')[0] || '').trim();
            const parts = result.mysql.split(' ');
            result.mysql = (parts[parts.length - 1] || '').trim();
          }
          functionProcessed();
        });
        exec('php -v', function (error, stdout) {
          if (!error) {
            result.php = stdout.toString().split('\n')[0] || '';
            let parts = result.php.split('(');
            if (parts[0].indexOf('-')) {
              parts = parts[0].split('-');
            }
            result.php = parts[0].replace(/[^0-9.]/g, '');
          }
          functionProcessed();
        });
        exec('redis-server --version', function (error, stdout) {
          if (!error) {
            result.redis = stdout.toString().split('\n')[0] || '';
            const parts = result.redis.split(' ');
            result.redis = util.getValue(parts, 'v', '=', true);
          }
          functionProcessed();
        });
        exec('mongod --version', function (error, stdout) {
          if (!error) {
            result.mongodb = stdout.toString().split('\n')[0] || '';
            result.mongodb = (result.mongodb.toLowerCase().split(',')[0] || '').replace(/[^0-9.]/g, '');
          }
          functionProcessed();
        });  
      } catch (e) {
        if (callback) { callback(result); }
        resolve(result);    
      }
    });
  });
}


exports.versions = versions;

function shell(callback) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      if (_windows) {
        let error = new Error(NOT_SUPPORTED);
        if (callback) {
          callback(NOT_SUPPORTED);
        }
        reject(error);
      }

      let result = '';
      exec('echo $SHELL', function (error, stdout) {
        if (!error) {
          result = stdout.toString().split('\n')[0];
        }
        if (callback) {
          callback(result);
        }
        resolve(result);
      });
    });
  });
}

exports.shell = shell;


/***/ }),

/***/ "./node_modules/systeminformation/lib/processes.js":
/*!*********************************************************!*\
  !*** ./node_modules/systeminformation/lib/processes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// processes.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 10. Processes
// ----------------------------------------------------------------------------------

const os = __webpack_require__(/*! os */ "os");
const exec = __webpack_require__(/*! child_process */ "child_process").exec;
const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");

let _platform = process.platform;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _sunos = (_platform === 'sunos');

const NOT_SUPPORTED = 'not supported';

let _process_cpu = {
  all: 0,
  list: {},
  ms: 0,
  result: {}
};

let _winStatusValues = {
  '0': 'unknown',
  '1': 'other',
  '2': 'ready',
  '3': 'running',
  '4': 'blocked',
  '5': 'suspended blocked',
  '6': 'suspended ready',
  '7': 'terminated',
  '8': 'stopped',
  '9': 'growing',
};


function parseTimeWin(time) {
  time = time || '';
  if (time) {
    return (time.substr(0, 4) + '-' + time.substr(4, 2) + '-' + time.substr(6, 2) + ' ' + time.substr(8, 2) + ':' + time.substr(10, 2) + ':' + time.substr(12, 2));
  } else {
    return '';
  }

}

// --------------------------
// PS - services
// pass a comma separated string with services to check (mysql, apache, postgresql, ...)
// this function gives an array back, if the services are running.

function services(srv, callback) {

  // fallback - if only callback is given
  if (util.isFunction(srv) && !callback) {
    callback = srv;
    srv = '';
  }

  return new Promise((resolve) => {
    process.nextTick(() => {
      if (srv) {
        srv = srv.trim().toLowerCase().replace(/,+/g, ' ').replace(/  +/g, ' ').replace(/ +/g, '|');
        let srvs = srv.split('|');
        let data = [];
        let dataSrv = [];

        if (_linux || _freebsd || _openbsd || _darwin) {
          let comm = (_darwin) ? 'ps -caxo pcpu,pmem,comm' : 'ps -axo pcpu,pmem,comm';
          if (srv !== '' && srvs.length > 0) {
            exec(comm + ' | grep -v grep | egrep "' + srv + '"', { maxBuffer: 1024 * 2000 }, function (error, stdout) {
              if (!error) {
                let lines = stdout.toString().replace(/ +/g, ' ').replace(/,+/g, '.').split('\n');
                srvs.forEach(function (srv) {
                  let ps = lines.filter(function (e) {
                    return e.indexOf(srv) !== -1;
                  });
                  data.push({
                    'name': srv,
                    'running': ps.length > 0,
                    'pcpu': parseFloat((ps.reduce(function (pv, cv) {
                      return pv + parseFloat(cv.trim().split(' ')[0]);
                    }, 0)).toFixed(2)),
                    'pmem': parseFloat((ps.reduce(function (pv, cv) {
                      return pv + parseFloat(cv.trim().split(' ')[1]);
                    }, 0)).toFixed(2))
                  });
                });
                if (callback) { callback(data); }
                resolve(data);
              } else {
                exec('ps -o comm | grep -v grep | egrep "' + srv + '"', { maxBuffer: 1024 * 2000 }, function (error, stdout) {
                  if (!error) {
                    let lines = stdout.toString().replace(/ +/g, ' ').replace(/,+/g, '.').split('\n');
                    srvs.forEach(function (srv) {
                      let ps = lines.filter(function (e) {
                        return e.indexOf(srv) !== -1;
                      });
                      data.push({
                        'name': srv,
                        'running': ps.length > 0,
                        'pcpu': 0,
                        'pmem': 0
                      });
                    });
                    if (callback) { callback(data); }
                    resolve(data);
                  } else {
                    srvs.forEach(function (srv) {
                      data.push({
                        'name': srv,
                        'running': false,
                        'pcpu': 0,
                        'pmem': 0
                      });
                    });
                    if (callback) { callback(data); }
                    resolve(data);
                  }
                });
              }
            });
          } else {
            if (callback) { callback(data); }
            resolve(data);
          }
        }
        if (_windows) {
          try {
            exec(util.getWmic() + ' service get /value', { maxBuffer: 1024 * 1000, windowsHide: true }, function (error, stdout) {
              if (!error) {
                let serviceSections = stdout.split(/\n\s*\n/);
                for (let i = 0; i < serviceSections.length; i++) {
                  if (serviceSections[i].trim() !== '') {
                    let lines = serviceSections[i].trim().split('\r\n');
                    let srv = util.getValue(lines, 'Name', '=', true).toLowerCase();
                    let started = util.getValue(lines, 'Started', '=', true);
                    if (srvs.indexOf(srv) >= 0) {
                      data.push({
                        'name': srv,
                        'running': (started === 'TRUE'),
                        'pcpu': 0,
                        'pmem': 0
                      });
                      dataSrv.push(srv);
                    }
                  }
                }
                let srvsMissing = srvs.filter(function (e) {
                  return dataSrv.indexOf(e) === -1;
                });
                srvsMissing.forEach(function (srv) {
                  data.push({
                    'name': srv,
                    'running': false,
                    'pcpu': 0,
                    'pmem': 0
                  });
                });

                if (callback) { callback(data); }
                resolve(data);
              } else {
                srvs.forEach(function (srv) {
                  data.push({
                    'name': srv,
                    'running': false,
                    'pcpu': 0,
                    'pmem': 0
                  });
                });
                if (callback) { callback(data); }
                resolve(data);
              }
            });
          } catch (e) {
            if (callback) { callback(data); }
            resolve(data);
          }
        }
      } else {
        if (callback) { callback({}); }
        resolve({});
      }
    });
  });
}

exports.services = services;

// --------------------------
// running processes

function processes(callback) {

  let parsedhead = [];

  function parseHead(head, rights) {
    let space = (rights > 0);
    let count = 1;
    let from = 0;
    let to = 0;
    let result = [];
    for (let i = 0; i < head.length; i++) {
      if (count <= rights) {
        if (head[i] === ' ' && !space) {
          to = i - 1;
          result.push({
            from: from,
            to: to + 1,
            cap: head.substring(from, to + 1)
          });
          from = to + 2;
          count++;
        }
        space = head[i] === ' ';
      } else {
        if (head[i] !== ' ' && space) {
          to = i - 1;
          if (from < to) {
            result.push({
              from: from,
              to: to,
              cap: head.substring(from, to)
            });
          }
          from = to + 1;
          count++;
        }
        space = head[i] === ' ';
      }
    }
    to = 1000;
    result.push({
      from: from,
      to: to,
      cap: head.substring(from, to)
    });
    return result;

  }

  function getName(command) {
    command = command || '';
    let result = command.split(' ')[0];
    if (result.substr(-1) === ':') {
      result = result.substr(0, result.length - 1);
    }
    if (result.substr(0, 1) !== '[') {
      let parts = result.split('/');
      result = parts[parts.length - 1];
    }
    return result;
  }

  function parseLine(line) {
    let offset = 0;
    let offset2 = 0;

    function checkColumn(i) {
      offset = offset2;
      offset2 = line.substring(parsedhead[i].to + offset, 1000).indexOf(' ');
    }

    checkColumn(0);
    let pid = parseInt(line.substring(parsedhead[0].from + offset, parsedhead[0].to + offset2));
    checkColumn(1);
    let ppid = parseInt(line.substring(parsedhead[1].from + offset, parsedhead[1].to + offset2));
    checkColumn(2);
    let pcpu = parseFloat(line.substring(parsedhead[2].from + offset, parsedhead[2].to + offset2).replace(/,/g, '.'));
    checkColumn(3);
    let pmem = parseFloat(line.substring(parsedhead[3].from + offset, parsedhead[3].to + offset2).replace(/,/g, '.'));
    checkColumn(4);
    let priority = parseInt(line.substring(parsedhead[4].from + offset, parsedhead[4].to + offset2));
    checkColumn(5);
    let vsz = parseInt(line.substring(parsedhead[5].from + offset, parsedhead[5].to + offset2));
    checkColumn(6);
    let rss = parseInt(line.substring(parsedhead[6].from + offset, parsedhead[6].to + offset2));
    checkColumn(7);
    let nice = parseInt(line.substring(parsedhead[7].from + offset, parsedhead[7].to + offset2)) || 0;
    checkColumn(8);
    let started = line.substring(parsedhead[8].from + offset, parsedhead[8].to + offset2).trim();
    checkColumn(9);
    let state = line.substring(parsedhead[9].from + offset, parsedhead[9].to + offset2).trim();
    state = (state[0] === 'R' ? 'running' : (state[0] === 'S' ? 'sleeping' : (state[0] === 'T' ? 'stopped' : (state[0] === 'W' ? 'paging' : (state[0] === 'X' ? 'dead' : (state[0] === 'Z' ? 'zombie' : ((state[0] === 'D' || state[0] === 'U') ? 'blocked' : 'unknown')))))));
    checkColumn(10);
    let tty = line.substring(parsedhead[10].from + offset, parsedhead[10].to + offset2).trim();
    if (tty === '?' || tty === '??') tty = '';
    checkColumn(11);
    let user = line.substring(parsedhead[11].from + offset, parsedhead[11].to + offset2).trim();
    checkColumn(12);
    let command = line.substring(parsedhead[12].from + offset, parsedhead[12].to + offset2).trim().replace(/\[/g, '').replace(/]/g, '');

    return ({
      pid: pid,
      parentPid: ppid,
      name: _linux ? getName(command) : command,
      pcpu: pcpu,
      pcpuu: 0,
      pcpus: 0,
      pmem: pmem,
      priority: priority,
      mem_vsz: vsz,
      mem_rss: rss,
      nice: nice,
      started: started,
      state: state,
      tty: tty,
      user: user,
      command: command
    });
  }

  function parseProcesses(lines) {
    let result = [];
    if (lines.length > 1) {
      let head = lines[0];
      parsedhead = parseHead(head, 8);
      lines.shift();
      lines.forEach(function (line) {
        if (line.trim() !== '') {
          result.push(parseLine(line));
        }
      });
    }
    return result;
  }
  function parseProcesses2(lines) {

    function formatDateTime(time) {
      const month = ('0' + (time.getMonth() + 1).toString()).substr(-2);
      const year = time.getFullYear().toString();
      const day = ('0' + time.getDay().toString()).substr(-2);
      const hours = time.getHours().toString();
      const mins = time.getMinutes().toString();
      const secs = ('0' + time.getSeconds().toString()).substr(-2);

      return (year + '-' + month + '-' + day + ' ' + hours + ':' + mins + ':' + secs);
    }

    let result = [];
    lines.forEach(function (line) {
      if (line.trim() !== '') {
        line = line.trim().replace(/ +/g, ' ').replace(/,+/g, '.');
        const parts = line.split(' ');
        const command = parts.slice(9).join(' ');
        const pmem = parseFloat((1.0 * parseInt(parts[3]) * 1024 / os.totalmem()).toFixed(1));
        const elapsed_parts = parts[5].split(':');
        const started = formatDateTime(new Date(Date.now() - (elapsed_parts.length > 1 ? (elapsed_parts[0] * 60 + elapsed_parts[1]) * 1000 : elapsed_parts[0] * 1000)));

        result.push({
          pid: parseInt(parts[0]),
          parentPid: parseInt(parts[1]),
          name: getName(command),
          pcpu: 0,
          pcpuu: 0,
          pcpus: 0,
          pmem: pmem,
          priority: 0,
          mem_vsz: parseInt(parts[2]),
          mem_rss: parseInt(parts[3]),
          nice: parseInt(parts[4]),
          started: started,
          state: (parts[6] === 'R' ? 'running' : (parts[6] === 'S' ? 'sleeping' : (parts[6] === 'T' ? 'stopped' : (parts[6] === 'W' ? 'paging' : (parts[6] === 'X' ? 'dead' : (parts[6] === 'Z' ? 'zombie' : ((parts[6] === 'D' || parts[6] === 'U') ? 'blocked' : 'unknown'))))))),
          tty: parts[7],
          user: parts[8],
          command: command
        });
      }
    });
    return result;
  }

  function parseProcStat(line) {
    let parts = line.replace(/ +/g, ' ').split(' ');
    let user = (parts.length >= 2 ? parseInt(parts[1]) : 0);
    let nice = (parts.length >= 3 ? parseInt(parts[2]) : 0);
    let system = (parts.length >= 4 ? parseInt(parts[3]) : 0);
    let idle = (parts.length >= 5 ? parseInt(parts[4]) : 0);
    let iowait = (parts.length >= 6 ? parseInt(parts[5]) : 0);
    let irq = (parts.length >= 7 ? parseInt(parts[6]) : 0);
    let softirq = (parts.length >= 8 ? parseInt(parts[7]) : 0);
    let steal = (parts.length >= 9 ? parseInt(parts[8]) : 0);
    let guest = (parts.length >= 10 ? parseInt(parts[9]) : 0);
    let guest_nice = (parts.length >= 11 ? parseInt(parts[10]) : 0);
    return user + nice + system + idle + iowait + irq + softirq + steal + guest + guest_nice;
  }

  function parseProcPidStat(line, all) {
    let statparts = line.replace(/ +/g, ' ').split(')');
    if (statparts.length >= 2) {
      let parts = statparts[1].split(' ');
      if (parts.length >= 16) {
        let pid = parseInt(statparts[0].split(' ')[0]);
        let utime = parseInt(parts[12]);
        let stime = parseInt(parts[13]);
        let cutime = parseInt(parts[14]);
        let cstime = parseInt(parts[15]);

        // calc
        let pcpuu = 0;
        let pcpus = 0;
        if (_process_cpu.all > 0 && _process_cpu.list[pid]) {
          pcpuu = (utime + cutime - _process_cpu.list[pid].utime - _process_cpu.list[pid].cutime) / (all - _process_cpu.all) * 100; // user
          pcpus = (stime + cstime - _process_cpu.list[pid].stime - _process_cpu.list[pid].cstime) / (all - _process_cpu.all) * 100; // system
        } else {
          pcpuu = (utime + cutime) / (all) * 100; // user
          pcpus = (stime + cstime) / (all) * 100; // system
        }
        return {
          pid: pid,
          utime: utime,
          stime: stime,
          cutime: cutime,
          cstime: cstime,
          pcpuu: pcpuu,
          pcpus: pcpus
        };
      } else {
        return {
          pid: 0,
          utime: 0,
          stime: 0,
          cutime: 0,
          cstime: 0,
          pcpuu: 0,
          pcpus: 0
        };
      }
    } else {
      return {
        pid: 0,
        utime: 0,
        stime: 0,
        cutime: 0,
        cstime: 0,
        pcpuu: 0,
        pcpus: 0
      };
    }
  }

  function calcProcPidStat(procStat, all) {
    // calc
    let pcpuu = 0;
    let pcpus = 0;
    if (_process_cpu.all > 0 && _process_cpu.list[procStat.pid]) {
      pcpuu = (procStat.utime - _process_cpu.list[procStat.pid].utime) / (all - _process_cpu.all) * 100; // user
      pcpus = (procStat.stime - _process_cpu.list[procStat.pid].stime) / (all - _process_cpu.all) * 100; // system
    } else {
      pcpuu = (procStat.utime) / (all) * 100; // user
      pcpus = (procStat.stime) / (all) * 100; // system
    }
    return {
      pid: procStat.pid,
      utime: procStat.utime,
      stime: procStat.stime,
      pcpuu: pcpuu,
      pcpus: pcpus
    };
  }

  return new Promise((resolve) => {
    process.nextTick(() => {
      let result = {
        all: 0,
        running: 0,
        blocked: 0,
        sleeping: 0,
        unknown: 0,
        list: []
      };

      let cmd = '';

      if ((_process_cpu.ms && Date.now() - _process_cpu.ms >= 500) || _process_cpu.ms === 0) {
        if (_linux || _freebsd || _openbsd || _darwin || _sunos) {
          if (_linux) cmd = 'ps -axo pid:10,ppid:10,pcpu:6,pmem:6,pri:5,vsz:10,rss:10,ni:5,start:20,state:20,tty:20,user:20,command';
          if (_freebsd || _openbsd) cmd = 'ps -axo pid,ppid,pcpu,pmem,pri,vsz,rss,ni,start,state,tty,user,command';
          if (_darwin) cmd = 'ps -acxo pid,ppid,pcpu,pmem,pri,vsz,rss,nice,start,state,tty,user,command -r';
          if (_sunos) cmd = 'ps -Ao pid,ppid,pcpu,pmem,pri,vsz,rss,nice,stime,s,tty,user,comm';
          exec(cmd, { maxBuffer: 1024 * 2000 }, function (error, stdout) {
            if (!error) {
              result.list = parseProcesses(stdout.toString().split('\n'));
              result.all = result.list.length;
              result.running = result.list.filter(function (e) {
                return e.state === 'running';
              }).length;
              result.blocked = result.list.filter(function (e) {
                return e.state === 'blocked';
              }).length;
              result.sleeping = result.list.filter(function (e) {
                return e.state === 'sleeping';
              }).length;

              if (_linux) {
                // calc process_cpu - ps is not accurate in linux!
                cmd = 'cat /proc/stat | grep "cpu "';
                for (let i = 0; i < result.list.length; i++) {
                  cmd += (';cat /proc/' + result.list[i].pid + '/stat');
                }
                exec(cmd, { maxBuffer: 1024 * 2000 }, function (error, stdout) {
                  let curr_processes = stdout.toString().split('\n');

                  // first line (all - /proc/stat)
                  let all = parseProcStat(curr_processes.shift());

                  // process
                  let list_new = {};
                  let resultProcess = {};
                  for (let i = 0; i < curr_processes.length; i++) {
                    resultProcess = parseProcPidStat(curr_processes[i], all);

                    if (resultProcess.pid) {

                      // store pcpu in outer array
                      let listPos = result.list.map(function (e) { return e.pid; }).indexOf(resultProcess.pid);
                      if (listPos >= 0) {
                        result.list[listPos].pcpu = resultProcess.pcpuu + resultProcess.pcpus;
                        result.list[listPos].pcpuu = resultProcess.pcpuu;
                        result.list[listPos].pcpus = resultProcess.pcpus;
                      }

                      // save new values
                      list_new[resultProcess.pid] = {
                        pcpuu: resultProcess.pcpuu,
                        pcpus: resultProcess.pcpus,
                        utime: resultProcess.utime,
                        stime: resultProcess.stime,
                        cutime: resultProcess.cutime,
                        cstime: resultProcess.cstime
                      };
                    }
                  }

                  // store old values
                  _process_cpu.all = all;
                  _process_cpu.list = list_new;
                  _process_cpu.ms = Date.now() - _process_cpu.ms;
                  _process_cpu.result = result;
                  if (callback) { callback(result); }
                  resolve(result);
                });
              } else {
                if (callback) { callback(result); }
                resolve(result);
              }
            } else {
              cmd = 'ps -o pid,ppid,vsz,rss,nice,etime,stat,tty,user,comm';
              if (_sunos) {
                cmd = 'ps -o pid,ppid,vsz,rss,nice,etime,s,tty,user,comm';
              }
              exec(cmd, { maxBuffer: 1024 * 2000 }, function (error, stdout) {
                if (!error) {
                  let lines = stdout.toString().split('\n');
                  lines.shift();

                  result.list = parseProcesses2(lines);
                  result.all = result.list.length;
                  result.running = result.list.filter(function (e) {
                    return e.state === 'running';
                  }).length;
                  result.blocked = result.list.filter(function (e) {
                    return e.state === 'blocked';
                  }).length;
                  result.sleeping = result.list.filter(function (e) {
                    return e.state === 'sleeping';
                  }).length;
                  if (callback) { callback(result); }
                  resolve(result);
                } else {
                  if (callback) { callback(result); }
                  resolve(result);
                }
              });
            }
          });
        }
        if (_windows) {
          try {
            exec(util.getWmic() + ' process get /value', { maxBuffer: 1024 * 2000, windowsHide: true }, function (error, stdout) {
              if (!error) {
                let processSections = stdout.split(/\n\s*\n/);
                let procs = [];
                let procStats = [];
                let list_new = {};
                let allcpuu = 0;
                let allcpus = 0;
                for (let i = 0; i < processSections.length; i++) {
                  if (processSections[i].trim() !== '') {
                    let lines = processSections[i].trim().split('\r\n');
                    let pid = parseInt(util.getValue(lines, 'ProcessId', '=', true), 10);
                    let parentPid = parseInt(util.getValue(lines, 'ParentProcessId', '=', true), 10);
                    let statusValue = util.getValue(lines, 'ExecutionState', '=');
                    let name = util.getValue(lines, 'Caption', '=', true);
                    let commandLine = util.getValue(lines, 'CommandLine', '=', true);
                    let utime = parseInt(util.getValue(lines, 'UserModeTime', '=', true), 10);
                    let stime = parseInt(util.getValue(lines, 'KernelModeTime', '=', true), 10);
                    let mem = parseInt(util.getValue(lines, 'WorkingSetSize', '=', true), 10);
                    allcpuu = allcpuu + utime;
                    allcpus = allcpus + stime;
                    result.all++;
                    if (!statusValue) { result.unknown++; }
                    if (statusValue === '3') { result.running++; }
                    if (statusValue === '4' || statusValue === '5') { result.blocked++; }

                    procStats.push({
                      pid: pid,
                      utime: utime,
                      stime: stime,
                      pcpu: 0,
                      pcpuu: 0,
                      pcpus: 0,
                    });
                    procs.push({
                      pid: pid,
                      parentPid: parentPid,
                      name: name,
                      pcpu: 0,
                      pcpuu: 0,
                      pcpus: 0,
                      pmem: mem / os.totalmem() * 100,
                      priority: parseInt(util.getValue(lines, 'Priority', '=', true), 10),
                      mem_vsz: parseInt(util.getValue(lines, 'PageFileUsage', '=', true), 10),
                      mem_rss: Math.floor(parseInt(util.getValue(lines, 'WorkingSetSize', '=', true), 10) / 1024),
                      nice: 0,
                      started: parseTimeWin(util.getValue(lines, 'CreationDate', '=', true)),
                      state: (!statusValue ? _winStatusValues[0] : _winStatusValues[statusValue]),
                      tty: '',
                      user: '',
                      command: commandLine || name
                    });
                  }
                }
                result.sleeping = result.all - result.running - result.blocked - result.unknown;
                result.list = procs;
                for (let i = 0; i < procStats.length; i++) {
                  let resultProcess = calcProcPidStat(procStats[i], allcpuu + allcpus);

                  // store pcpu in outer array
                  let listPos = result.list.map(function (e) { return e.pid; }).indexOf(resultProcess.pid);
                  if (listPos >= 0) {
                    result.list[listPos].pcpu = resultProcess.pcpuu + resultProcess.pcpus;
                    result.list[listPos].pcpuu = resultProcess.pcpuu;
                    result.list[listPos].pcpus = resultProcess.pcpus;
                  }

                  // save new values
                  list_new[resultProcess.pid] = {
                    pcpuu: resultProcess.pcpuu,
                    pcpus: resultProcess.pcpus,
                    utime: resultProcess.utime,
                    stime: resultProcess.stime
                  };
                }
                // store old values
                _process_cpu.all = allcpuu + allcpus;
                _process_cpu.list = list_new;
                _process_cpu.ms = Date.now() - _process_cpu.ms;
                _process_cpu.result = result;
              }
              if (callback) {
                callback(result);
              }
              resolve(result);
            });
          } catch (e) {
            if (callback) { callback(result); }
            resolve(result);
          }
        }
      } else {
        if (callback) { callback(_process_cpu.result); }
        resolve(_process_cpu.result);
      }
    });
  });
}

exports.processes = processes;

// --------------------------
// PS - process load
// get detailed information about a certain process
// (PID, CPU-Usage %, Mem-Usage %)

function processLoad(proc, callback) {

  // fallback - if only callback is given
  if (util.isFunction(proc) && !callback) {
    callback = proc;
    proc = '';
  }

  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      if (_windows) {
        let error = new Error(NOT_SUPPORTED);
        if (callback) { callback(NOT_SUPPORTED); }
        reject(error);
      }

      let result = {
        'proc': proc,
        'pid': -1,
        'cpu': 0,
        'mem': 0
      };

      if (proc) {
        exec('ps -axo pid,pcpu,pmem,comm | grep ' + proc + ' | grep -v grep', { maxBuffer: 1024 * 2000 }, function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');

            let pid = 0;
            let cpu = 0;
            let mem = 0;

            lines.forEach(function (line) {
              let data = line.replace(/ +/g, ' ').split(' ');
              if (data.length > 3) {
                pid = (!pid ? parseInt(data[0]) : 0);
                cpu = cpu + parseFloat(data[1].replace(',', '.'));
                mem = mem + parseFloat(data[2].replace(',', '.'));
              }
            });
            // TODO: calc process_cpu - ps is not accurate in linux!

            result = {
              'proc': proc,
              'pid': pid,
              'cpu': parseFloat((cpu / lines.length).toFixed(2)),
              'mem': parseFloat((mem / lines.length).toFixed(2))
            };
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      } else {
        if (callback) { callback(result); }
        resolve(result);
      }
    });
  });
}

exports.processLoad = processLoad;





/***/ }),

/***/ "./node_modules/systeminformation/lib/system.js":
/*!******************************************************!*\
  !*** ./node_modules/systeminformation/lib/system.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// system.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 2. System (Hardware, BIOS, Base Board)
// ----------------------------------------------------------------------------------

const exec = __webpack_require__(/*! child_process */ "child_process").exec;
const fs = __webpack_require__(/*! fs */ "fs");
const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");

let _platform = process.platform;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _sunos = (_platform === 'sunos');

const opts = {
  windowsHide: true
};

function system(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {

      let result = {
        manufacturer: '',
        model: 'Computer',
        version: '',
        serial: '-',
        uuid: '-',
        sku: '-',
      };

      if (_linux || _freebsd || _openbsd) {
        exec('dmidecode -t system', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            result.manufacturer = util.getValue(lines, 'manufacturer');
            result.model = util.getValue(lines, 'product name');
            result.version = util.getValue(lines, 'version');
            result.serial = util.getValue(lines, 'serial number');
            result.uuid = util.getValue(lines, 'uuid');
            result.sku = util.getValue(lines, 'sku number');
            if (result.serial.toLowerCase().indexOf('o.e.m.') !== -1) result.serial = '-';
            if (result.manufacturer.toLowerCase().indexOf('o.e.m.') !== -1) result.manufacturer = '';
            if (result.model.toLowerCase().indexOf('o.e.m.') !== -1) result.model = 'Computer';
            if (result.version.toLowerCase().indexOf('o.e.m.') !== -1) result.version = '-';
            if (result.sku.toLowerCase().indexOf('o.e.m.') !== -1) result.sku = '-';
          }
          // detect docker
          if (fs.existsSync('/.dockerenv') || fs.existsSync('/.dockerinit')) {
            result.model = 'Docker Container';
          }
          if (result.manufacturer === '' && result.model === 'Computer' && result.version === '') { // still default values
            exec('dmesg | grep -i virtual | grep -iE "vmware|qemu|kvm|xen"', function (error, stdout) {
              // detect virtual machines
              if (!error) {
                let lines = stdout.toString().split('\n');
                if (lines.length > 0) result.model = 'Virtual machine';
              }

              if (result.manufacturer === '' && result.model === 'Computer' && result.version === '-') {
                // Check Raspberry Pi
                exec('cat /proc/cpuinfo', function (error, stdout) {
                  if (!error) {
                    let lines = stdout.toString().split('\n');
                    result.model = util.getValue(lines, 'hardware', ':', true).toUpperCase();
                    result.version = util.getValue(lines, 'revision', ':', true).toLowerCase();
                    result.serial = util.getValue(lines, 'serial', ':', true);

                    // reference values: https://elinux.org/RPi_HardwareHistory
                    if (result.model === 'BCM2835' || result.model === 'BCM2708' || result.model === 'BCM2709' || result.model === 'BCM2835' || result.model === 'BCM2837') {

                      // Pi 3
                      if (['a02082', 'a22082', 'a32082'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi 3 Model B';
                        result.version = result.version + ' - Rev. 1.2';
                      }
                      if (['a020d3'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi 3 Model B';
                        result.version = result.version + ' - Rev. 1.3';
                      }
                      // Pi 2 Model B
                      if (['a01040'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi 2 Model B';
                        result.version = result.version + ' - Rev. 1.0';
                      }
                      if (['a01041', 'a21041'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi 2 Model B';
                        result.version = result.version + ' - Rev. 1.1';
                      }
                      if (['a22042'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi 2 Model B';
                        result.version = result.version + ' - Rev. 1.2';
                      }

                      // Pi Zero
                      if (['900092'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi Zero';
                        result.version = result.version + ' - Rev 1.2';
                      }
                      if (['900093', '920093'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi Zero';
                        result.version = result.version + ' - Rev 1.3';
                      }
                      if (['9000c1'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi Zero W';
                        result.version = result.version + ' - Rev 1.1';
                      }

                      // A, B, A+ B+
                      if (['0002', '0003'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi Model B';
                        result.version = result.version + ' - Rev 1.0';
                      }
                      if (['0004', '0005', '0006', '000d', '000e', '000f'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi Model B';
                        result.version = result.version + ' - Rev 2.0';
                      }
                      if (['0007', '0008', '0009'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi Model A';
                        result.version = result.version + ' - Rev 2.0';
                      }
                      if (['0010'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi Model B+';
                        result.version = result.version + ' - Rev 1.0';
                      }
                      if (['0012'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi Model A+';
                        result.version = result.version + ' - Rev 1.0';
                      }
                      if (['0013'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi Model B+';
                        result.version = result.version + ' - Rev 1.2';
                      }
                      if (['0015'].indexOf(result.version) >= 0) {
                        result.model = result.model + ' - Pi Model A+';
                        result.version = result.version + ' - Rev 1.1';
                      }
                      if (result.model.indexOf('Pi') !== -1 && result.version) {  // Pi, Pi Zero
                        result.manufacturer = 'Raspberry Pi Foundation';
                      }
                    }
                  }
                  if (callback) { callback(result); }
                  resolve(result);
                });
              } else {
                if (callback) { callback(result); }
                resolve(result);
              }
            });
          } else {
            if (callback) { callback(result); }
            resolve(result);
          }
        });
      }
      if (_darwin) {
        exec('ioreg -c IOPlatformExpertDevice -d 2', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().replace(/[<>"]/g, '').split('\n');
            result.manufacturer = util.getValue(lines, 'manufacturer', '=', true);
            result.model = util.getValue(lines, 'model', '=', true);
            result.version = util.getValue(lines, 'version', '=', true);
            result.serial = util.getValue(lines, 'ioplatformserialnumber', '=', true);
            result.uuid = util.getValue(lines, 'ioplatformuuid', '=', true);
            result.sku = util.getValue(lines, 'board-id', '=', true);
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_sunos) {
        if (callback) { callback(result); }
        resolve(result);
      }
      if (_windows) {
        try {
          exec(util.getWmic() + ' csproduct get /value', opts, function (error, stdout) {
            if (!error) {
              // let lines = stdout.split('\r\n').filter(line => line.trim() !== '').filter((line, idx) => idx > 0)[0].trim().split(/\s\s+/);
              let lines = stdout.split('\r\n');
              result.manufacturer = util.getValue(lines, 'vendor', '=');
              result.model = util.getValue(lines, 'name', '=');
              result.version = util.getValue(lines, 'version', '=');
              result.serial = util.getValue(lines, 'identifyingnumber', '=');
              result.uuid = util.getValue(lines, 'uuid', '=');
              exec(util.getWmic() + ' /namespace:\\\\root\\wmi path MS_SystemInformation get /value', opts, function (error, stdout) {
                if (!error) {
                  let lines = stdout.split('\r\n');
                  result.sku = util.getValue(lines, 'systemsku', '=');
                }
                if (callback) { callback(result); }
                resolve(result);
              });
            }
            if (callback) { callback(result); }
            resolve(result);
          });  
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);    
        }
      }
    });
  });
}

exports.system = system;

function bios(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {

      let result = {
        vendor: '',
        version: '',
        releaseDate: '',
        revision: '',
      };
      let cmd = '';
      if (_linux || _freebsd || _openbsd) {
        if (process.arch === 'arm') {
          cmd = 'cat /proc/cpuinfo | grep Serial';

        } else {
          cmd = 'dmidecode --type 0';
        }
        exec(cmd, function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            result.vendor = util.getValue(lines, 'Vendor');
            result.version = util.getValue(lines, 'Version');
            const datetime = util.getValue(lines, 'Release Date');
            result.releaseDate = util.parseDateTime(datetime).date;
            result.revision = util.getValue(lines, 'BIOS Revision');
          }

          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_darwin) {
        result.vendor = 'Apple Inc.';
        if (callback) { callback(result); }
        resolve(result);
      }
      if (_sunos) {
        result.vendor = 'Sun Microsystems';
        if (callback) { callback(result); }
        resolve(result);
      }
      if (_windows) {
        // TODO: check BIOS windows
        try {
          exec(util.getWmic() + ' bios get /value', opts, function (error, stdout) {
            if (!error) {
              let lines = stdout.toString().split('\r\n');
              const description = util.getValue(lines, 'description', '=');
              if (description.indexOf(' Version ') !== -1) {
                // ... Phoenix ROM BIOS PLUS Version 1.10 A04
                result.vendor = description.split(' Version ')[0].trim();
                result.version = description.split(' Version ')[1].trim();
              } else if (description.indexOf(' Ver: ') !== -1) {
                // ... BIOS Date: 06/27/16 17:50:16 Ver: 1.4.5
                result.vendor = util.getValue(lines, 'manufacturer', '=');
                result.version = description.split(' Ver: ')[1].trim();
              } else {
                result.vendor = util.getValue(lines, 'manufacturer', '=');
                result.version = util.getValue(lines, 'version', '=');
              }
              result.releaseDate = util.getValue(lines, 'releasedate', '=');
              if (result.releaseDate.length >= 10) {
                result.releaseDate = result.releaseDate.substr(0, 4) + '-' + result.releaseDate.substr(4, 2) + '-' + result.releaseDate.substr(6, 2);
              }
              result.revision = util.getValue(lines, 'buildnumber', '=');
            }
  
            if (callback) { callback(result); }
            resolve(result);
          });  
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);    
        }
      }
    });
  });
}

exports.bios = bios;

function baseboard(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {

      let result = {
        manufacturer: '',
        model: '',
        version: '',
        serial: '-',
        assetTag: '-',
      };
      let cmd = '';
      if (_linux || _freebsd || _openbsd) {
        if (process.arch === 'arm') {
          cmd = 'cat /proc/cpuinfo | grep Serial';
          // 'BCM2709', 'BCM2835', 'BCM2708' -->
        } else {
          cmd = 'dmidecode -t 2';
        }
        exec(cmd, function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().split('\n');
            result.manufacturer = util.getValue(lines, 'Manufacturer');
            result.model = util.getValue(lines, 'Product Name');
            result.version = util.getValue(lines, 'Version');
            result.serial = util.getValue(lines, 'Serial Number');
            result.assetTag = util.getValue(lines, 'Asset Tag');
            if (result.serial.toLowerCase().indexOf('o.e.m.') !== -1) result.serial = '-';
            if (result.assetTag.toLowerCase().indexOf('o.e.m.') !== -1) result.assetTag = '-';
          }

          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_darwin) {
        exec('ioreg -c IOPlatformExpertDevice -d 2', function (error, stdout) {
          if (!error) {
            let lines = stdout.toString().replace(/[<>"]/g, '').split('\n');
            result.manufacturer = util.getValue(lines, 'manufacturer', '=', true);
            result.model = util.getValue(lines, 'model', '=', true);
            result.version = util.getValue(lines, 'version', '=', true);
            result.serial = util.getValue(lines, 'ioplatformserialnumber', '=', true);
            result.assetTag = util.getValue(lines, 'board-id', '=', true);
          }

          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_sunos) {
        if (callback) { callback(result); }
        resolve(result);
      }
      if (_windows) {
        try {
          exec(util.getWmic() + ' baseboard get /value', opts, function (error, stdout) {
            if (!error) {
              let lines = stdout.toString().split('\r\n');
  
              result.manufacturer = util.getValue(lines, 'manufacturer', '=');
              result.model = util.getValue(lines, 'model', '=');
              if (!result.model) {
                result.model = util.getValue(lines, 'product', '=');
              }
              result.version = util.getValue(lines, 'version', '=');
              result.serial = util.getValue(lines, 'serialnumber', '=');
              result.assetTag = util.getValue(lines, 'partnumber', '=');
              if (!result.assetTag) {
                result.assetTag = util.getValue(lines, 'sku', '=');
              }
            }
  
            if (callback) { callback(result); }
            resolve(result);
          });  
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);    
        }
      }
    });
  });
}

exports.baseboard = baseboard;




/***/ }),

/***/ "./node_modules/systeminformation/lib/users.js":
/*!*****************************************************!*\
  !*** ./node_modules/systeminformation/lib/users.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// users.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 11. Users/Sessions
// ----------------------------------------------------------------------------------

const exec = __webpack_require__(/*! child_process */ "child_process").exec;
const util = __webpack_require__(/*! ./util */ "./node_modules/systeminformation/lib/util.js");

let _platform = process.platform;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _sunos = (_platform === 'sunos');

const opts = {
  windowsHide: true
};

// --------------------------
// array of users online = sessions

function parseUsersLinux(lines) {
  let result = [];
  let result_who = [];
  let result_w = {};
  let w_first = true;
  let w_header = [];
  let w_pos = [];
  let who_line = {};

  let is_whopart = true;
  lines.forEach(function (line) {
    if (line === '---') {
      is_whopart = false;
    } else {
      let l = line.replace(/ +/g, ' ').split(' ');

      // who part
      if (is_whopart) {
        result_who.push({
          user: l[0],
          tty: l[1],
          date: l[2],
          time: l[3],
          ip: (l && l.length > 4) ? l[4].replace(/\(/g, '').replace(/\)/g, '') : ''
        });
      } else {
        // w part
        if (w_first) {    // header
          w_header = l;
          w_header.forEach(function (item) {
            w_pos.push(line.indexOf(item));
          });
          w_first = false;
        } else {
          // split by w_pos
          result_w.user = line.substring(w_pos[0], w_pos[1] - 1).trim();
          result_w.tty = line.substring(w_pos[1], w_pos[2] - 1).trim();
          result_w.ip = line.substring(w_pos[2], w_pos[3] - 1).replace(/\(/g, '').replace(/\)/g, '').trim();
          result_w.command = line.substring(w_pos[7], 1000).trim();
          // find corresponding 'who' line
          who_line = result_who.filter(function (obj) {
            return (obj.user.substring(0, 8).trim() === result_w.user && obj.tty === result_w.tty);
          });
          if (who_line.length === 1) {
            result.push({
              user: who_line[0].user,
              tty: who_line[0].tty,
              date: who_line[0].date,
              time: who_line[0].time,
              ip: who_line[0].ip,
              command: result_w.command
            });
          }
        }
      }
    }
  });
  return result;
}

function parseUsersDarwin(lines) {
  let result = [];
  let result_who = [];
  let result_w = {};
  let who_line = {};

  let is_whopart = true;
  lines.forEach(function (line) {
    if (line === '---') {
      is_whopart = false;
    } else {
      let l = line.replace(/ +/g, ' ').split(' ');

      // who part
      if (is_whopart) {
        result_who.push({
          user: l[0],
          tty: l[1],
          date: ('' + new Date().getFullYear()) + '-' + ('0' + ('JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC'.indexOf(l[2].toUpperCase()) / 3 + 1)).slice(-2) + '-' + ('0' + l[3]).slice(-2),
          time: l[4],
        });
      } else {
        // w part
        // split by w_pos
        result_w.user = l[0];
        result_w.tty = l[1];
        result_w.ip = (l[2] !== '-') ? l[2] : '';
        result_w.command = l.slice(5, 1000).join(' ');
        // find corresponding 'who' line
        who_line = result_who.filter(function (obj) {
          return (obj.user === result_w.user && (obj.tty.substring(3, 1000) === result_w.tty || obj.tty === result_w.tty));
        });
        if (who_line.length === 1) {
          result.push({
            user: who_line[0].user,
            tty: who_line[0].tty,
            date: who_line[0].date,
            time: who_line[0].time,
            ip: result_w.ip,
            command: result_w.command
          });
        }
      }
    }
  });
  return result;
}

function parseUsersWin(lines) {

  let result = [];
  const header = lines[0];
  const headerDelimiter = [];
  if (header) {
    const start = (header[0] === ' ') ? 1 : 0;
    headerDelimiter.push(start-1);
    let nextSpace = 0;
    for (let i = start+1; i < header.length; i++) {
      if (header[i] === ' ' && header[i-1] === ' ') {
        nextSpace = i;
      } else {
        if (nextSpace) {
          headerDelimiter.push(nextSpace);
          nextSpace = 0;
        }
      }
    }
  }
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim()) {
      const user = lines[i].substring(headerDelimiter[0]+1, headerDelimiter[1]).trim() || '';
      const tty = lines[i].substring(headerDelimiter[1]+1, headerDelimiter[2] - 2).trim() || '';
      const dateTime = util.parseDateTime(lines[i].substring(headerDelimiter[5]+1, 2000).trim()) || '';
      result.push({
        user: user,
        tty: tty,
        date: dateTime.date,
        time: dateTime.time,
        ip: '',
        command: ''
      });
    }
  }
  return result;
}

function users(callback) {

  return new Promise((resolve) => {
    process.nextTick(() => {
      let result = [];

      // linux
      if (_linux) {
        exec('who --ips; echo "---"; w | tail -n +2', function (error, stdout) {
          if (!error) {
            // lines / split
            let lines = stdout.toString().split('\n');
            result = parseUsersLinux(lines);
            if (result.length === 0) {
              exec('who; echo "---"; w | tail -n +2', function (error, stdout) {
                if (!error) {
                  // lines / split
                  lines = stdout.toString().split('\n');
                  result = parseUsersLinux(lines);
                }
                if (callback) { callback(result); }
                resolve(result);
              });
            } else {
              if (callback) { callback(result); }
              resolve(result);
            }
          } else {
            if (callback) { callback(result); }
            resolve(result);
          }
        });
      }
      if (_freebsd || _openbsd) {
        exec('who; echo "---"; w -ih', function (error, stdout) {
          if (!error) {
            // lines / split
            let lines = stdout.toString().split('\n');
            result = parseUsersDarwin(lines);
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_sunos) {
        exec('who; echo "---"; w -h', function (error, stdout) {
          if (!error) {
            // lines / split
            let lines = stdout.toString().split('\n');
            result = parseUsersDarwin(lines);
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }

      if (_darwin) {
        exec('who; echo "---"; w -ih', function (error, stdout) {
          if (!error) {
            // lines / split
            let lines = stdout.toString().split('\n');
            result = parseUsersDarwin(lines);
          }
          if (callback) { callback(result); }
          resolve(result);
        });
      }
      if (_windows) {
        try {
          exec('query user', opts, function (error, stdout) {
            if (stdout) {
              // lines / split
              let lines = stdout.toString().split('\r\n');
              result = parseUsersWin(lines);
            }
            if (callback) { callback(result); }
            resolve(result);
          });  
        } catch (e) {
          if (callback) { callback(result); }
          resolve(result);    
        }
      }

    });
  });
}

exports.users = users;


/***/ }),

/***/ "./node_modules/systeminformation/lib/util.js":
/*!****************************************************!*\
  !*** ./node_modules/systeminformation/lib/util.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==================================================================================
// utils.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2018
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
// 0. helper functions
// ----------------------------------------------------------------------------------

const os = __webpack_require__(/*! os */ "os");
const fs = __webpack_require__(/*! fs */ "fs");

let _cores = 0;
let wmic = '';

function isFunction(functionToCheck) {
  let getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

function unique(obj) {
  let uniques = [];
  let stringify = {};
  for (let i = 0; i < obj.length; i++) {
    let keys = Object.keys(obj[i]);
    keys.sort(function (a, b) { return a - b; });
    let str = '';
    for (let j = 0; j < keys.length; j++) {
      str += JSON.stringify(keys[j]);
      str += JSON.stringify(obj[i][keys[j]]);
    }
    if (!stringify.hasOwnProperty(str)) {
      uniques.push(obj[i]);
      stringify[str] = true;
    }
  }
  return uniques;
}

function sortByKey(array, keys) {
  return array.sort(function (a, b) {
    let x = '';
    let y = '';
    keys.forEach(function (key) {
      x = x + a[key]; y = y + b[key];
    });
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

function cores() {
  if (_cores === 0) {
    _cores = os.cpus().length;
  }
  return _cores;
}

function getValue(lines, property, separator, trimmed) {
  separator = separator || ':';
  property = property.toLowerCase();
  trimmed = trimmed || false;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].toLowerCase().replace(/\t/g, '');
    if (trimmed) {
      line = line.trim();
    }
    if (line.startsWith(property)) {
      const parts = lines[i].split(separator);
      if (parts.length >= 2) {
        parts.shift();
        return parts.join(separator).trim();
      } else {
        return '';
      }
    }
  }
  return '';
}

function decodeEscapeSequence(str, base) {
  base = base || 16;
  return str.replace(/\\x([0-9A-Fa-f]{2})/g, function () {
    return String.fromCharCode(parseInt(arguments[1], base));
  });
}

function parseDateTime(dt) {
  const result = {
    date: '',
    time: ''
  };
  const parts = dt.split(' ');
  if (parts[0]) {
    if (parts[0].indexOf('/') >= 0) {
      // Dateformat: mm/dd/yyyy
      const dtparts = parts[0].split('/');
      if (dtparts.length === 3) {
        result.date = dtparts[2] + '-' + ('0' + dtparts[0]).substr(-2) + '-' + ('0' + dtparts[1]).substr(-2);
      }
    }
    if (parts[0].indexOf('.') >= 0) {
      // Dateformat: dd.mm.yyyy
      const dtparts = parts[0].split('.');
      if (dtparts.length === 3) {
        result.date = dtparts[2] + '-' + ('0' + dtparts[1]).substr(-2) + '-' + ('0' + dtparts[0]).substr(-2);
      }
    }
    if (parts[0].indexOf('-') >= 0) {
      // Dateformat: yyyy-mm-dd
      const dtparts = parts[0].split('-');
      if (dtparts.length === 3) {
        result.date = dtparts[0] + '-' + ('0' + dtparts[1]).substr(-2) + '-' + ('0' + dtparts[2]).substr(-2);
      }
    }
  }
  if (parts[1]) {
    result.time = parts[1];
  }
  return result;
}

function getWmic() {
  if (os.type() === 'Windows_NT' && !wmic) {
    if (fs.existsSync(process.env.WINDIR + '\\system32\\wbem\\wmic.exe')) {
      wmic = process.env.WINDIR + '\\system32\\wbem\\wmic.exe';
    } else wmic = 'wmic';
  }
  return wmic;
}

function noop() { }

exports.isFunction = isFunction;
exports.unique = unique;
exports.sortByKey = sortByKey;
exports.cores = cores;
exports.getValue = getValue;
exports.decodeEscapeSequence = decodeEscapeSequence;
exports.parseDateTime = parseDateTime;
exports.getWmic = getWmic;
exports.noop = noop;


/***/ }),

/***/ "./node_modules/systeminformation/package.json":
/*!*****************************************************!*\
  !*** ./node_modules/systeminformation/package.json ***!
  \*****************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, engines, homepage, keywords, license, main, name, os, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"systeminformation","_id":"systeminformation@3.42.0","_inBundle":false,"_integrity":"sha512-njKStGHliiuD/S+UlRVkq5Mb+m3+7XOb8KJSRzg29G2NLBBKM//hveonwy/S3k1J9n6TfhWF8XJi6CLsVpHvyQ==","_location":"/systeminformation","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"systeminformation","name":"systeminformation","escapedName":"systeminformation","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#DEV:/","#USER"],"_resolved":"https://registry.npmjs.org/systeminformation/-/systeminformation-3.42.0.tgz","_shasum":"2b89617c5760adf35e6eb7c74edf4af4cd6502fb","_spec":"systeminformation","_where":"/Users/dangvanthanh/Code/dev/vue/vue-kanban","author":{"name":"Sebastian Hildebrandt","email":"hildebrandt@plus-innovations.com","url":"https://plus-innovations.com"},"bugs":{"url":"https://github.com/sebhildebrandt/systeminformation/issues"},"bundleDependencies":false,"deprecated":false,"description":"Simple system and OS information library","engines":{"node":">=4.0.0"},"homepage":"https://github.com/sebhildebrandt/systeminformation","keywords":["system information","sysinfo","monitor","monitoring","os","linux","osx","windows","freebsd","cpu","cpuload","memory","file system","fsstats","diskio","block devices","netstats","network","network connections","network stats","processes","users","internet","battery","docker","docker stats","docker processes","graphics","graphic card","graphic controller","display"],"license":"MIT","main":"./lib/index.js","name":"systeminformation","os":["darwin","linux","win32","freebsd","openbsd","sunos"],"repository":{"type":"git","url":"git+https://github.com/sebhildebrandt/systeminformation.git"},"scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"version":"3.42.0"};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MainWindow.vue?vue&type=template&id=48374cb9":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainWindow.vue?vue&type=template&id=48374cb9 ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Window",
    {
      attrs: { title: "Vue Kanban", width: "400", height: "100", margined: "" },
      on: { close: _vm.exit }
    },
    [
      _c("Group", { attrs: { title: "Group", margined: "" } }, [
        _c("Box", { attrs: { vertical: "", padded: "" } }, [
          _c("Text", [_vm._v(_vm._s(_vm.msg))]),
          _c("Button", { on: { click: _vm.reverse } }, [_vm._v("Reverse")]),
          _c(
            "Checkbox",
            {
              attrs: { checked: _vm.checkboxState },
              on: {
                toggle: function($event) {
                  _vm.checkboxState = $event
                }
              }
            },
            [_vm._v("Checkbox label")]
          ),
          _c("Combobox", {
            attrs: {
              items: ["Option 1", "Option 2", "Option 3"],
              value: _vm.text
            },
            on: {
              input: function($event) {
                _vm.text = $event
              }
            }
          }),
          _c("DatePicker"),
          _c("DateTimePicker"),
          _c("DropdownList", {
            attrs: {
              items: ["Option 1", "Option 2", "Option 3"],
              selected: _vm.dselected
            },
            on: {
              change: function($event) {
                _vm.dselected = $event
              }
            }
          }),
          _c("ProgressBar", { attrs: { value: _vm.progress } }),
          _c("RadioButtons", {
            attrs: {
              items: ["Option 1", "Option 2", "Option 3"],
              selected: _vm.rselected
            },
            on: {
              change: function($event) {
                _vm.rselected = $event
              }
            }
          }),
          _c("Separator", { attrs: { horizontal: "" } }),
          _c("Button", { on: { click: _vm.increase } }, [_vm._v("Increase")]),
          _c("Button", { on: { click: _vm.decrease } }, [_vm._v("Decrease")]),
          _c("Text", [_vm._v(_vm._s(_vm.slider))]),
          _c("Slider", {
            attrs: { min: "0", max: "100", value: _vm.slider },
            on: {
              change: function($event) {
                _vm.slider = $event
              }
            }
          }),
          _c("Spinbox", {
            attrs: { min: "0", max: "100", value: _vm.spinbox },
            on: {
              change: function($event) {
                _vm.spinbox = $event
              }
            }
          }),
          _c("TimePicker"),
          _c("Separator", { attrs: { horizontal: "" } }),
          _c("Text", [_vm._v("Battery Metter")]),
          _c("ProgressBar", { attrs: { value: _vm.batteryPercent } }),
          _c("Text", [_vm._v(_vm._s(_vm.batteryPercent) + "%")]),
          _vm.batteryIsCharging
            ? _c("Text", [_vm._v("Charging")])
            : _c("Text", [_vm._v("Not Charging")]),
          _c("Text", [_vm._v("Cycle count: " + _vm._s(_vm.batteryCycle))]),
          _c("Text", [_vm._v(_vm._s(_vm.batteryUpdateInfo))])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vuido/dist/vuido.js":
/*!******************************************!*\
  !*** ./node_modules/vuido/dist/vuido.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! Vuido v0.1.1 | Copyright (C) 2018 Michał Męciński | License: MIT */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["y"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["z"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["A"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["B"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["D"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__lang__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_1__lang__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_1__lang__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__options__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_3__options__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_3__options__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_3__options__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__debug__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__debug__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_4__debug__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_4__debug__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__props__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_5__props__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__error__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__next_tick__ = __webpack_require__(43);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_7__next_tick__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__observer_index__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__observer_index__["a"]; });












/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! libui-node */ "libui-node");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nodes_textnode__ = __webpack_require__(23);



class Widget extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */] {
  constructor(tagName) {
    super(tagName);

    this.widget = null;
    this.widgetIndex = null;
  }

  appendChild(childNode) {
    super.appendChild(childNode);

    if (this.widget != null) {
      if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]) this._appendElement(childNode);else if (childNode instanceof __WEBPACK_IMPORTED_MODULE_1__nodes_textnode__["a" /* TextNode */]) this._setWidgetText(child.text);
    }
  }

  insertBefore(childNode, referenceNode) {
    const index = super.insertBefore(childNode, referenceNode);

    if (this.widget != null) {
      if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]) this._insertElement(childNode, index);
    }

    return index;
  }

  removeChild(childNode) {
    super.removeChild(childNode);

    if (this.widget != null) {
      if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]) this._removeElement(childNode);
    }
  }

  setAttribute(key, value) {
    super.setAttribute(key, value);

    if (this.widget != null) this._setWidgetAttribute(key, value);
  }

  addEventListener(event, handler) {
    super.addEventListener(event, handler);

    if (this.widget != null) this._setWidgetHandler(event, handler);
  }

  removeEventListener(event) {
    super.removeEventListener(event);

    if (this.widget != null) this._setWidgetHandler(event, null);
  }

  _mountWidget() {
    this._createWidget();
    this._initializeWidgetAttributes();

    for (let key in this.handlers) this._setWidgetHandler(key, this.handlers[key]);

    for (let i = 0; i < this.childNodes.length; i++) {
      const childNode = this.childNodes[i];
      if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]) this._appendElement(childNode);else if (childNode instanceof __WEBPACK_IMPORTED_MODULE_1__nodes_textnode__["a" /* TextNode */]) this._setWidgetText(childNode.text);
    }
  }

  _getDefaultAttributes() {
    return {
      visible: true,
      enabled: true,
      stretchy: false,
      label: ''
    };
  }

  _createWidget() {
    throw new Error(this.tagName + ' cannot be created');
  }

  _destroyWidget() {
    this.widget.destroy();
    this.widget = null;

    this.childNodes = [];
  }

  _appendElement(childNode) {
    if (!(childNode instanceof Widget)) throw new Error(this.tagName + ' cannot contain ' + childNode.tagName + ' elements');

    childNode._mountWidget();
    childNode.widgetIndex = this.childNodes.indexOf(childNode);
    this._appendWidget(childNode);
  }

  _insertElement(childNode, index) {
    if (!(childNode instanceof Widget)) throw new Error(this.tagName + ' cannot contain ' + childNode.tagName + ' elements');

    for (let i = this.childNodes.length - 1; i > index; i--) {
      const tailNode = this.childNodes[i];
      if (tailNode instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]) this._removeWidget(tailNode);
    }

    let widgetIndex = 0;
    for (let i = 0; i < index; i++) {
      if (this.childNodes[i] instanceof Widget) widgetIndex++;
    }

    childNode._mountWidget();
    childNode.widgetIndex = widgetIndex++;
    this._appendWidget(childNode);

    for (let i = index + 1; i < this.childNodes.length; i++) {
      const tailNode = this.childNodes[i];
      if (tailNode instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]) {
        tailNode.widgetIndex = widgetIndex++;
        this._appendWidget(tailNode);
      }
    }
  }

  _removeElement(childNode) {
    this._removeWidget(childNode);

    childNode._destroyWidget();

    this._reindexChildWidgets();
  }

  _appendWidget(childNode) {
    throw new Error(this.tagName + ' cannot contain child widgets');
  }

  _removeWidget(childNode) {
    throw new Error(this.tagName + ' cannot contain child widgets');
  }

  _setContentText(text) {
    if (this.widget != null) this._setWidgetText(text);
  }

  _setWidgetText(text) {
    throw new Error(this.tagName + ' cannot contain text nodes');
  }

  _initializeWidgetAttributes() {
    if (!this.attributes.visible) this.widget.visible = false;
    if (!this.attributes.enabled) this.widget.enabled = false;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'visible') this.widget.visible = value;else if (key == 'enabled') this.widget.enabled = value;else throw new Error(this.tagName + ' does not have attribute ' + key);
  }

  _setWidgetHandler(event, handler) {
    throw new Error(this.tagName + ' does not have event ' + event);
  }

  _reindexChildWidgets() {
    let index = 0;
    for (let i = 0; i < this.childNodes.length; i++) {
      const childNode = this.childNodes[i];
      if (childNode instanceof Widget) childNode.widgetIndex = index++;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Widget;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["s"] = isUndef;
/* harmony export (immutable) */ __webpack_exports__["k"] = isDef;
/* harmony export (immutable) */ __webpack_exports__["r"] = isTrue;
/* harmony export (immutable) */ __webpack_exports__["l"] = isFalse;
/* harmony export (immutable) */ __webpack_exports__["o"] = isPrimitive;
/* harmony export (immutable) */ __webpack_exports__["m"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["E"] = toRawType;
/* harmony export (immutable) */ __webpack_exports__["n"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["p"] = isRegExp;
/* harmony export (immutable) */ __webpack_exports__["t"] = isValidArrayIndex;
/* harmony export (immutable) */ __webpack_exports__["F"] = toString;
/* harmony export (immutable) */ __webpack_exports__["C"] = toNumber;
/* harmony export (immutable) */ __webpack_exports__["w"] = makeMap;
/* harmony export (immutable) */ __webpack_exports__["A"] = remove;
/* harmony export (immutable) */ __webpack_exports__["g"] = hasOwn;
/* harmony export (immutable) */ __webpack_exports__["b"] = cached;
/* harmony export (immutable) */ __webpack_exports__["B"] = toArray;
/* harmony export (immutable) */ __webpack_exports__["f"] = extend;
/* harmony export (immutable) */ __webpack_exports__["D"] = toObject;
/* harmony export (immutable) */ __webpack_exports__["y"] = noop;
/* unused harmony export genStaticKeys */
/* harmony export (immutable) */ __webpack_exports__["u"] = looseEqual;
/* harmony export (immutable) */ __webpack_exports__["v"] = looseIndexOf;
/* harmony export (immutable) */ __webpack_exports__["z"] = once;


const emptyObject = Object.freeze({});
/* harmony export (immutable) */ __webpack_exports__["e"] = emptyObject;


function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}

function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'symbol' || typeof value === 'boolean';
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

const _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}

function isValidArrayIndex(val) {
  const n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function toString(val) {
  return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

function toNumber(val) {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
}

function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(',');
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? val => map[val.toLowerCase()] : val => map[val];
}

const isBuiltInTag = makeMap('slot,component', true);
/* harmony export (immutable) */ __webpack_exports__["j"] = isBuiltInTag;


const isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/* harmony export (immutable) */ __webpack_exports__["q"] = isReservedAttribute;


function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function cached(fn) {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

const camelizeRE = /-(\w)/g;
const camelize = cached(str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
});
/* harmony export (immutable) */ __webpack_exports__["c"] = camelize;


const capitalize = cached(str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/* harmony export (immutable) */ __webpack_exports__["d"] = capitalize;


const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cached(str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/* harmony export (immutable) */ __webpack_exports__["h"] = hyphenate;


function polyfillBind(fn, ctx) {
  function boundFn(a) {
    const l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

const bind = Function.prototype.bind ? nativeBind : polyfillBind;
/* harmony export (immutable) */ __webpack_exports__["a"] = bind;


function toArray(list, start) {
  start = start || 0;
  let i = list.length - start;
  const ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
}

function toObject(arr) {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

function noop(a, b, c) {}

const no = (a, b, c) => false;
/* harmony export (immutable) */ __webpack_exports__["x"] = no;


const identity = _ => _;
/* harmony export (immutable) */ __webpack_exports__["i"] = identity;


function genStaticKeys(modules) {
  return modules.reduce((keys, m) => {
    return keys.concat(m.staticKeys || []);
  }, []).join(',');
}

function looseEqual(a, b) {
  if (a === b) return true;
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a);
      const isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every((e, i) => {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(key => {
          return looseEqual(a[key], b[key]);
        });
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

function looseIndexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) return i;
  }
  return -1;
}

function once(fn) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_constants__ = __webpack_require__(8);






/* harmony default export */ __webpack_exports__["a"] = ({
  optionMergeStrategies: Object.create(null),

  silent: false,

  productionTip: "development" !== 'production',

  devtools: "development" !== 'production',

  performance: false,

  errorHandler: null,

  warnHandler: null,

  ignoredElements: [],

  keyCodes: Object.create(null),

  isReservedTag: __WEBPACK_IMPORTED_MODULE_0_shared_util__["x" /* no */],

  isReservedAttr: __WEBPACK_IMPORTED_MODULE_0_shared_util__["x" /* no */],

  isUnknownElement: __WEBPACK_IMPORTED_MODULE_0_shared_util__["x" /* no */],

  getTagNamespace: __WEBPACK_IMPORTED_MODULE_0_shared_util__["y" /* noop */],

  parsePlatformTagName: __WEBPACK_IMPORTED_MODULE_0_shared_util__["i" /* identity */],

  mustUseProp: __WEBPACK_IMPORTED_MODULE_0_shared_util__["x" /* no */],

  _lifecycleHooks: __WEBPACK_IMPORTED_MODULE_1_shared_constants__["b" /* LIFECYCLE_HOOKS */]
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = createTextVNode;
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneVNode;


class VNode {

  constructor(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  }

  get child() {
    return this.componentInstance;
  }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = VNode;


const createEmptyVNode = (text = '') => {
  const node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = createEmptyVNode;


function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

function cloneVNode(vnode) {
  const cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return activeInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isUpdatingChildComponent; });
/* harmony export (immutable) */ __webpack_exports__["e"] = initLifecycle;
/* harmony export (immutable) */ __webpack_exports__["g"] = lifecycleMixin;
/* harmony export (immutable) */ __webpack_exports__["h"] = mountComponent;
/* harmony export (immutable) */ __webpack_exports__["i"] = updateChildComponent;
/* harmony export (immutable) */ __webpack_exports__["a"] = activateChildComponent;
/* harmony export (immutable) */ __webpack_exports__["d"] = deactivateChildComponent;
/* harmony export (immutable) */ __webpack_exports__["c"] = callHook;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observer_watcher__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_perf__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vdom_vnode__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__render_helpers_resolve_slots__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__observer_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__observer_dep__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_index__ = __webpack_require__(0);













let activeInstance = null;
let isUpdatingChildComponent = false;

function initLifecycle(vm) {
  const options = vm.$options;

  let parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    const vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    const prevEl = vm.$el;
    const prevVnode = vm._vnode;
    const prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;

    if (!prevVnode) {
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false, vm.$options._parentElm, vm.$options._refElm);

      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;

    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }

    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
  };

  Vue.prototype.$forceUpdate = function () {
    const vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    const vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;

    const parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["I" /* remove */])(parent.$children, vm);
    }

    if (vm._watcher) {
      vm._watcher.teardown();
    }
    let i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }

    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }

    vm._isDestroyed = true;

    vm.__patch__(vm._vnode, null);

    callHook(vm, 'destroyed');

    vm.$off();

    if (vm.$el) {
      vm.$el.__vue__ = null;
    }

    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = __WEBPACK_IMPORTED_MODULE_3__vdom_vnode__["b" /* createEmptyVNode */];
    if (true) {
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["P" /* warn */])('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["P" /* warn */])('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }
  callHook(vm, 'beforeMount');

  let updateComponent;

  if ("development" !== 'production' && __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].performance && __WEBPACK_IMPORTED_MODULE_2__util_perf__["a" /* mark */]) {
    updateComponent = () => {
      const name = vm._name;
      const id = vm._uid;
      const startTag = `vue-perf-start:${id}`;
      const endTag = `vue-perf-end:${id}`;

      Object(__WEBPACK_IMPORTED_MODULE_2__util_perf__["a" /* mark */])(startTag);
      const vnode = vm._render();
      Object(__WEBPACK_IMPORTED_MODULE_2__util_perf__["a" /* mark */])(endTag);
      Object(__WEBPACK_IMPORTED_MODULE_2__util_perf__["b" /* measure */])(`vue ${name} render`, startTag, endTag);

      Object(__WEBPACK_IMPORTED_MODULE_2__util_perf__["a" /* mark */])(startTag);
      vm._update(vnode, hydrating);
      Object(__WEBPACK_IMPORTED_MODULE_2__util_perf__["a" /* mark */])(endTag);
      Object(__WEBPACK_IMPORTED_MODULE_2__util_perf__["b" /* measure */])(`vue ${name} patch`, startTag, endTag);
    };
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating);
    };
  }

  new __WEBPACK_IMPORTED_MODULE_1__observer_watcher__["a" /* default */](vm, updateComponent, __WEBPACK_IMPORTED_MODULE_8__util_index__["F" /* noop */], null, true);
  hydrating = false;

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  const hasChildren = !!(renderChildren || vm.$options._renderChildren || parentVnode.data.scopedSlots || vm.$scopedSlots !== __WEBPACK_IMPORTED_MODULE_8__util_index__["g" /* emptyObject */]);

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode;

  if (vm._vnode) {
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  vm.$attrs = parentVnode.data.attrs || __WEBPACK_IMPORTED_MODULE_8__util_index__["g" /* emptyObject */];
  vm.$listeners = listeners || __WEBPACK_IMPORTED_MODULE_8__util_index__["g" /* emptyObject */];

  if (propsData && vm.$options.props) {
    Object(__WEBPACK_IMPORTED_MODULE_6__observer_index__["f" /* toggleObserving */])(false);
    const props = vm._props;
    const propKeys = vm.$options._propKeys || [];
    for (let i = 0; i < propKeys.length; i++) {
      const key = propKeys[i];
      const propOptions = vm.$options.props;
      props[key] = Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["O" /* validateProp */])(key, propOptions, propsData, vm);
    }
    Object(__WEBPACK_IMPORTED_MODULE_6__observer_index__["f" /* toggleObserving */])(true);

    vm.$options.propsData = propsData;
  }

  listeners = listeners || __WEBPACK_IMPORTED_MODULE_8__util_index__["g" /* emptyObject */];
  const oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  Object(__WEBPACK_IMPORTED_MODULE_4__events__["c" /* updateComponentListeners */])(vm, listeners, oldListeners);

  if (hasChildren) {
    vm.$slots = Object(__WEBPACK_IMPORTED_MODULE_5__render_helpers_resolve_slots__["b" /* resolveSlots */])(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) return true;
  }
  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (let i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (let i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  Object(__WEBPACK_IMPORTED_MODULE_7__observer_dep__["c" /* pushTarget */])();
  const handlers = vm.$options[hook];
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["j" /* handleError */])(e, vm, `${hook} hook`);
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  Object(__WEBPACK_IMPORTED_MODULE_7__observer_dep__["b" /* popTarget */])();
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return shouldObserve; });
/* harmony export (immutable) */ __webpack_exports__["f"] = toggleObserving;
/* harmony export (immutable) */ __webpack_exports__["c"] = observe;
/* harmony export (immutable) */ __webpack_exports__["a"] = defineReactive;
/* harmony export (immutable) */ __webpack_exports__["d"] = set;
/* harmony export (immutable) */ __webpack_exports__["b"] = del;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dep__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vdom_vnode__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_index__ = __webpack_require__(0);







const arrayKeys = Object.getOwnPropertyNames(__WEBPACK_IMPORTED_MODULE_2__array__["a" /* arrayMethods */]);

let shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}

class Observer {

  constructor(value) {
    this.value = value;
    this.dep = new __WEBPACK_IMPORTED_MODULE_0__dep__["a" /* default */]();
    this.vmCount = 0;
    Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["d" /* def */])(value, '__ob__', this);
    if (Array.isArray(value)) {
      const augment = __WEBPACK_IMPORTED_MODULE_3__util_index__["l" /* hasProto */] ? protoAugment : copyAugment;
      augment(value, __WEBPACK_IMPORTED_MODULE_2__array__["a" /* arrayMethods */], arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  }

  observeArray(items) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }
}
/* unused harmony export Observer */


function protoAugment(target, src, keys) {
  target.__proto__ = src;
}

function copyAugment(target, src, keys) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["d" /* def */])(target, key, src[key]);
  }
}

function observe(value, asRootData) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["r" /* isObject */])(value) || value instanceof __WEBPACK_IMPORTED_MODULE_1__vdom_vnode__["d" /* default */]) {
    return;
  }
  let ob;
  if (Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["k" /* hasOwn */])(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["x" /* isServerRendering */])() && (Array.isArray(value) || Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["s" /* isPlainObject */])(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

function defineReactive(obj, key, val, customSetter, shallow) {
  const dep = new __WEBPACK_IMPORTED_MODULE_0__dep__["a" /* default */]();

  const property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  const getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  const setter = property && property.set;

  let childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val;
      if (__WEBPACK_IMPORTED_MODULE_0__dep__["a" /* default */].target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      const value = getter ? getter.call(obj) : val;

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }

      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

function set(target, key, val) {
  if ("development" !== 'production' && (Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["z" /* isUndef */])(target) || Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["t" /* isPrimitive */])(target))) {
    Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["P" /* warn */])(`Cannot set reactive property on undefined, null, or primitive value: ${target}`);
  }
  if (Array.isArray(target) && Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["A" /* isValidArrayIndex */])(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  const ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    "development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["P" /* warn */])('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

function del(target, key) {
  if ("development" !== 'production' && (Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["z" /* isUndef */])(target) || Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["t" /* isPrimitive */])(target))) {
    Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["P" /* warn */])(`Cannot delete reactive property on undefined, null, or primitive value: ${target}`);
  }
  if (Array.isArray(target) && Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["A" /* isValidArrayIndex */])(key)) {
    target.splice(key, 1);
    return;
  }
  const ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    "development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["P" /* warn */])('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }
  if (!Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["k" /* hasOwn */])(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

function dependArray(value) {
  for (let e, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SSR_ATTR = 'data-server-rendered';
/* harmony export (immutable) */ __webpack_exports__["c"] = SSR_ATTR;


const ASSET_TYPES = ['component', 'directive', 'filter'];
/* harmony export (immutable) */ __webpack_exports__["a"] = ASSET_TYPES;


const LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];
/* harmony export (immutable) */ __webpack_exports__["b"] = LIFECYCLE_HOOKS;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export supportsPassive */
/* harmony export (immutable) */ __webpack_exports__["h"] = isNative;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Set; });

const hasProto = '__proto__' in {};
/* harmony export (immutable) */ __webpack_exports__["c"] = hasProto;


const inBrowser = typeof window !== 'undefined';
/* harmony export (immutable) */ __webpack_exports__["e"] = inBrowser;

const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
/* harmony export (immutable) */ __webpack_exports__["f"] = inWeex;

const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
/* unused harmony export weexPlatform */

const UA = inBrowser && window.navigator.userAgent.toLowerCase();
/* unused harmony export UA */

const isIE = UA && /msie|trident/.test(UA);
/* unused harmony export isIE */

const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
/* unused harmony export isIE9 */

const isEdge = UA && UA.indexOf('edge/') > 0;
/* unused harmony export isEdge */

const isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
/* unused harmony export isAndroid */

const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
/* harmony export (immutable) */ __webpack_exports__["g"] = isIOS;

const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
/* unused harmony export isChrome */


const nativeWatch = {}.watch;
/* harmony export (immutable) */ __webpack_exports__["j"] = nativeWatch;


let supportsPassive = false;
if (inBrowser) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

let _isServer;
const isServerRendering = () => {
  if (_isServer === undefined) {
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};
/* harmony export (immutable) */ __webpack_exports__["i"] = isServerRendering;


const devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* harmony export (immutable) */ __webpack_exports__["b"] = devtools;


function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

const hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);
/* harmony export (immutable) */ __webpack_exports__["d"] = hasSymbol;


let _Set;

if (typeof Set !== 'undefined' && isNative(Set)) {
  _Set = Set;
} else {
  _Set = class Set {
    constructor() {
      this.set = Object.create(null);
    }
    has(key) {
      return this.set[key] === true;
    }
    add(key) {
      this.set[key] = true;
    }
    clear() {
      this.set = Object.create(null);
    }
  };
}



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tip; });
/* unused harmony export generateComponentTrace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatComponentName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_util__ = __webpack_require__(3);





let warn = __WEBPACK_IMPORTED_MODULE_1_shared_util__["y" /* noop */];
let tip = __WEBPACK_IMPORTED_MODULE_1_shared_util__["y" /* noop */];
let generateComponentTrace = __WEBPACK_IMPORTED_MODULE_1_shared_util__["y" /* noop */];
let formatComponentName = __WEBPACK_IMPORTED_MODULE_1_shared_util__["y" /* noop */];

if (true) {
  const hasConsole = typeof console !== 'undefined';
  const classifyRE = /(?:^|[-_])(\w)/g;
  const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');

  warn = (msg, vm) => {
    const trace = vm ? generateComponentTrace(vm) : '';

    if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].warnHandler) {
      __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].silent) {
      console.error(`[Vue warn]: ${msg}${trace}`);
    }
  };

  tip = (msg, vm) => {
    if (hasConsole && !__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].silent) {
      console.warn(`[Vue tip]: ${msg}` + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = (vm, includeFile) => {
    if (vm.$root === vm) {
      return '<Root>';
    }
    const options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
    let name = options.name || options._componentTag;
    const file = options.__file;
    if (!name && file) {
      const match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? `<${classify(name)}>` : `<Anonymous>`) + (file && includeFile !== false ? ` at ${file}` : '');
  };

  const repeat = (str, n) => {
    let res = '';
    while (n) {
      if (n % 2 === 1) res += str;
      if (n > 1) str += str;
      n >>= 1;
    }
    return res;
  };

  generateComponentTrace = vm => {
    if (vm._isVue && vm.$parent) {
      const tree = [];
      let currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          const last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree.map((vm, i) => `${i === 0 ? '---> ' : repeat(' ', 5 + i * 2)}${Array.isArray(vm) ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)` : formatComponentName(vm)}`).join('\n');
    } else {
      return `\n\n(found in ${formatComponentName(vm)})`;
    }
  };
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__merge_hook__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__merge_hook__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extract_props__ = __webpack_require__(45);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__extract_props__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_listeners__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__update_listeners__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__normalize_children__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__normalize_children__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__normalize_children__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolve_async_component__ = __webpack_require__(46);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__resolve_async_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__resolve_async_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_first_component_child__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__get_first_component_child__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__is_async_placeholder__ = __webpack_require__(29);
/* unused harmony namespace reexport */










/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = pushTarget;
/* harmony export (immutable) */ __webpack_exports__["b"] = popTarget;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);



let uid = 0;

class Dep {

  constructor() {
    this.id = uid++;
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  removeSub(sub) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["I" /* remove */])(this.subs, sub);
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }

  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Dep;


Dep.target = null;
const targetStack = [];

function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target);
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = proxy;
/* harmony export (immutable) */ __webpack_exports__["c"] = initState;
/* harmony export (immutable) */ __webpack_exports__["b"] = getData;
/* harmony export (immutable) */ __webpack_exports__["a"] = defineComputed;
/* harmony export (immutable) */ __webpack_exports__["e"] = stateMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observer_watcher__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observer_dep__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lifecycle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observer_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_index__ = __webpack_require__(0);











const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */],
  set: __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */]
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  const opts = vm.$options;
  if (opts.props) initProps(vm, opts.props);
  if (opts.methods) initMethods(vm, opts.methods);
  if (opts.data) {
    initData(vm);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_4__observer_index__["c" /* observe */])(vm._data = {}, true);
  }
  if (opts.computed) initComputed(vm, opts.computed);
  if (opts.watch && opts.watch !== __WEBPACK_IMPORTED_MODULE_5__util_index__["D" /* nativeWatch */]) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  const propsData = vm.$options.propsData || {};
  const props = vm._props = {};

  const keys = vm.$options._propKeys = [];
  const isRoot = !vm.$parent;

  if (!isRoot) {
    Object(__WEBPACK_IMPORTED_MODULE_4__observer_index__["f" /* toggleObserving */])(false);
  }
  for (const key in propsOptions) {
    keys.push(key);
    const value = Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["O" /* validateProp */])(key, propsOptions, propsData, vm);

    if (true) {
      const hyphenatedKey = Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["n" /* hyphenate */])(key);
      if (Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["w" /* isReservedAttribute */])(hyphenatedKey) || __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isReservedAttr(hyphenatedKey)) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`"${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.`, vm);
      }
      Object(__WEBPACK_IMPORTED_MODULE_4__observer_index__["a" /* defineReactive */])(props, key, value, () => {
        if (vm.$parent && !__WEBPACK_IMPORTED_MODULE_3__lifecycle__["f" /* isUpdatingChildComponent */]) {
          Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Avoid mutating a prop directly since the value will be ` + `overwritten whenever the parent component re-renders. ` + `Instead, use a data or computed property based on the prop's ` + `value. Prop being mutated: "${key}"`, vm);
        }
      });
    } else {}

    if (!(key in vm)) {
      proxy(vm, `_props`, key);
    }
  }
  Object(__WEBPACK_IMPORTED_MODULE_4__observer_index__["f" /* toggleObserving */])(true);
}

function initData(vm) {
  let data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
  if (!Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["s" /* isPlainObject */])(data)) {
    data = {};
    "development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  }

  const keys = Object.keys(data);
  const props = vm.$options.props;
  const methods = vm.$options.methods;
  let i = keys.length;
  while (i--) {
    const key = keys[i];
    if (true) {
      if (methods && Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["k" /* hasOwn */])(methods, key)) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Method "${key}" has already been defined as a data property.`, vm);
      }
    }
    if (props && Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["k" /* hasOwn */])(props, key)) {
      "development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`The data property "${key}" is already declared as a prop. ` + `Use prop default value instead.`, vm);
    } else if (!Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["v" /* isReserved */])(key)) {
      proxy(vm, `_data`, key);
    }
  }

  Object(__WEBPACK_IMPORTED_MODULE_4__observer_index__["c" /* observe */])(data, true);
}

function getData(data, vm) {
  Object(__WEBPACK_IMPORTED_MODULE_2__observer_dep__["c" /* pushTarget */])();
  try {
    return data.call(vm, vm);
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["j" /* handleError */])(e, vm, `data()`);
    return {};
  } finally {
    Object(__WEBPACK_IMPORTED_MODULE_2__observer_dep__["b" /* popTarget */])();
  }
}

const computedWatcherOptions = { lazy: true };

function initComputed(vm, computed) {
  const watchers = vm._computedWatchers = Object.create(null);

  const isSSR = Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["x" /* isServerRendering */])();

  for (const key in computed) {
    const userDef = computed[key];
    const getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Getter is missing for computed property "${key}".`, vm);
    }

    if (!isSSR) {
      watchers[key] = new __WEBPACK_IMPORTED_MODULE_1__observer_watcher__["a" /* default */](vm, getter || __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */], __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */], computedWatcherOptions);
    }

    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`The computed property "${key}" is already defined in data.`, vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`The computed property "${key}" is already defined as a prop.`, vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  const shouldCache = !Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["x" /* isServerRendering */])();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
    sharedPropertyDefinition.set = __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */];
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */];
    sharedPropertyDefinition.set = userDef.set ? userDef.set : __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */];
  }
  if ("development" !== 'production' && sharedPropertyDefinition.set === __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */]) {
    sharedPropertyDefinition.set = function () {
      Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Computed property "${key}" was assigned to but it has no setter.`, this);
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    const watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (__WEBPACK_IMPORTED_MODULE_2__observer_dep__["a" /* default */].target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}

function initMethods(vm, methods) {
  const props = vm.$options.props;
  for (const key in methods) {
    if (true) {
      if (methods[key] == null) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Method "${key}" has an undefined value in the component definition. ` + `Did you reference the function correctly?`, vm);
      }
      if (props && Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["k" /* hasOwn */])(props, key)) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Method "${key}" has already been defined as a prop.`, vm);
      }
      if (key in vm && Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["v" /* isReserved */])(key)) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Method "${key}" conflicts with an existing Vue instance method. ` + `Avoid defining component methods that start with _ or $.`);
      }
    }
    vm[key] = methods[key] == null ? __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */] : Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["b" /* bind */])(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (const key in watch) {
    const handler = watch[key];
    if (Array.isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["s" /* isPlainObject */])(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  const dataDef = {};
  dataDef.get = function () {
    return this._data;
  };
  const propsDef = {};
  propsDef.get = function () {
    return this._props;
  };
  if (true) {
    dataDef.set = function (newData) {
      Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };
    propsDef.set = function () {
      Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`$props is readonly.`, this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = __WEBPACK_IMPORTED_MODULE_4__observer_index__["d" /* set */];
  Vue.prototype.$delete = __WEBPACK_IMPORTED_MODULE_4__observer_index__["b" /* del */];

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    const vm = this;
    if (Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["s" /* isPlainObject */])(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }
    options = options || {};
    options.user = true;
    const watcher = new __WEBPACK_IMPORTED_MODULE_1__observer_watcher__["a" /* default */](vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = initEvents;
/* harmony export (immutable) */ __webpack_exports__["c"] = updateComponentListeners;
/* harmony export (immutable) */ __webpack_exports__["a"] = eventsMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vdom_helpers_index__ = __webpack_require__(11);





function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;

  const listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

let target;

function add(event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove(event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  Object(__WEBPACK_IMPORTED_MODULE_1__vdom_helpers_index__["h" /* updateListeners */])(listeners, oldListeners || {}, add, remove, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  const hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    const vm = this;
    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        this.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    const vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    const vm = this;

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }

    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        this.$off(event[i], fn);
      }
      return vm;
    }

    const cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (!fn) {
      vm._events[event] = null;
      return vm;
    }
    if (fn) {
      let cb;
      let i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    const vm = this;
    if (true) {
      const lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["K" /* tip */])(`Event "${lowerCaseEvent}" is emitted in component ` + `${Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["i" /* formatComponentName */])(vm)} but the handler is registered for "${event}". ` + `Note that HTML attributes are case-insensitive and you cannot use ` + `v-on to listen to camelCase events when using in-DOM templates. ` + `You should probably use "${Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["n" /* hyphenate */])(event)}" instead of "${event}".`);
      }
    }
    let cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["L" /* toArray */])(cbs) : cbs;
      const args = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["L" /* toArray */])(arguments, 1);
      for (let i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["j" /* handleError */])(e, vm, `event handler for "${event}"`);
        }
      }
    }
    return vm;
  };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = resolveSlots;
/* harmony export (immutable) */ __webpack_exports__["a"] = resolveScopedSlots;

function resolveSlots(children, context) {
  const slots = {};
  if (!children) {
    return slots;
  }
  for (let i = 0, l = children.length; i < l; i++) {
    const child = children[i];
    const data = child.data;

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }

    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      const name = data.slot;
      const slot = slots[name] || (slots[name] = []);
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }

  for (const name in slots) {
    if (slots[name].every(isWhitespace)) {
      delete slots[name];
    }
  }
  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}

function resolveScopedSlots(fns, res) {
  res = res || {};
  for (let i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = initMixin;
/* harmony export (immutable) */ __webpack_exports__["a"] = initInternalComponent;
/* harmony export (immutable) */ __webpack_exports__["c"] = resolveConstructorOptions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proxy__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__render__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_perf__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lifecycle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_index__ = __webpack_require__(0);












let uid = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this;

    vm._uid = uid++;

    let startTag, endTag;

    if ("development" !== 'production' && __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].performance && __WEBPACK_IMPORTED_MODULE_5__util_perf__["a" /* mark */]) {
      startTag = `vue-perf-start:${vm._uid}`;
      endTag = `vue-perf-end:${vm._uid}`;
      Object(__WEBPACK_IMPORTED_MODULE_5__util_perf__["a" /* mark */])(startTag);
    }

    vm._isVue = true;

    if (options && options._isComponent) {
      initInternalComponent(vm, options);
    } else {
      vm.$options = Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["C" /* mergeOptions */])(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }

    if (true) {
      Object(__WEBPACK_IMPORTED_MODULE_1__proxy__["a" /* initProxy */])(vm);
    } else {}

    vm._self = vm;
    Object(__WEBPACK_IMPORTED_MODULE_6__lifecycle__["e" /* initLifecycle */])(vm);
    Object(__WEBPACK_IMPORTED_MODULE_4__events__["b" /* initEvents */])(vm);
    Object(__WEBPACK_IMPORTED_MODULE_3__render__["a" /* initRender */])(vm);
    Object(__WEBPACK_IMPORTED_MODULE_6__lifecycle__["c" /* callHook */])(vm, 'beforeCreate');
    Object(__WEBPACK_IMPORTED_MODULE_7__inject__["a" /* initInjections */])(vm);
    Object(__WEBPACK_IMPORTED_MODULE_2__state__["c" /* initState */])(vm);
    Object(__WEBPACK_IMPORTED_MODULE_7__inject__["b" /* initProvide */])(vm);
    Object(__WEBPACK_IMPORTED_MODULE_6__lifecycle__["c" /* callHook */])(vm, 'created');

    if ("development" !== 'production' && __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].performance && __WEBPACK_IMPORTED_MODULE_5__util_perf__["a" /* mark */]) {
      vm._name = Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["i" /* formatComponentName */])(vm, false);
      Object(__WEBPACK_IMPORTED_MODULE_5__util_perf__["a" /* mark */])(endTag);
      Object(__WEBPACK_IMPORTED_MODULE_5__util_perf__["b" /* measure */])(`vue ${vm._name} init`, startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  const opts = vm.$options = Object.create(vm.constructor.options);

  const parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  const vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  let options = Ctor.options;
  if (Ctor.super) {
    const superOptions = resolveConstructorOptions(Ctor.super);
    const cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      Ctor.superOptions = superOptions;

      const modifiedOptions = resolveModifiedOptions(Ctor);

      if (modifiedOptions) {
        Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["h" /* extend */])(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["C" /* mergeOptions */])(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options;
}

function resolveModifiedOptions(Ctor) {
  let modified;
  const latest = Ctor.options;
  const extended = Ctor.extendOptions;
  const sealed = Ctor.sealedOptions;
  for (const key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) modified = {};
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified;
}

function dedupe(latest, extended, sealed) {
  if (Array.isArray(latest)) {
    const res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (let i = 0; i < latest.length; i++) {
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res;
  } else {
    return latest;
  }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debug__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(9);






function handleError(err, vm, info) {
  if (vm) {
    let cur = vm;
    while (cur = cur.$parent) {
      const hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (let i = 0; i < hooks.length; i++) {
          try {
            const capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) return;
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError(err, vm, info) {
  if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].errorHandler) {
    try {
      return __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].errorHandler.call(null, err, vm, info);
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])(`Error in ${info}: "${err.toString()}"`, vm);
  }

  if ((__WEBPACK_IMPORTED_MODULE_2__env__["e" /* inBrowser */] || __WEBPACK_IMPORTED_MODULE_2__env__["f" /* inWeex */]) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__traverse__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dep__ = __webpack_require__(12);








let uid = 0;

class Watcher {

  constructor(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);

    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid;
    this.active = true;
    this.dirty = this.lazy;
    this.deps = [];
    this.newDeps = [];
    this.depIds = new __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* _Set */]();
    this.newDepIds = new __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* _Set */]();
    this.expression =  true ? expOrFn.toString() : undefined;

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["H" /* parsePath */])(expOrFn);
      if (!this.getter) {
        this.getter = function () {};
        "development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["P" /* warn */])(`Failed watching path: "${expOrFn}" ` + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  }

  get() {
    Object(__WEBPACK_IMPORTED_MODULE_3__dep__["c" /* pushTarget */])(this);
    let value;
    const vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["j" /* handleError */])(e, vm, `getter for watcher "${this.expression}"`);
      } else {
        throw e;
      }
    } finally {
      if (this.deep) {
        Object(__WEBPACK_IMPORTED_MODULE_1__traverse__["a" /* traverse */])(value);
      }
      Object(__WEBPACK_IMPORTED_MODULE_3__dep__["b" /* popTarget */])();
      this.cleanupDeps();
    }
    return value;
  }

  addDep(dep) {
    const id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  }

  cleanupDeps() {
    let i = this.deps.length;
    while (i--) {
      const dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    let tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  }

  update() {
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_2__scheduler__["b" /* queueWatcher */])(this);
    }
  }

  run() {
    if (this.active) {
      const value = this.get();
      if (value !== this.value || Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["r" /* isObject */])(value) || this.deep) {
        const oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["j" /* handleError */])(e, this.vm, `callback for watcher "${this.expression}"`);
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  }

  evaluate() {
    this.value = this.get();
    this.dirty = false;
  }

  depend() {
    let i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  }

  teardown() {
    if (this.active) {
      if (!this.vm._isBeingDestroyed) {
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["I" /* remove */])(this.vm._watchers, this);
      }
      let i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Watcher;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = traverse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vdom_vnode__ = __webpack_require__(5);






const seenObjects = new __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* _Set */]();

function traverse(val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse(val, seen) {
  let i, keys;
  const isA = Array.isArray(val);
  if (!isA && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["r" /* isObject */])(val) || Object.isFrozen(val) || val instanceof __WEBPACK_IMPORTED_MODULE_1__vdom_vnode__["d" /* default */]) {
    return;
  }
  if (val.__ob__) {
    const depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) _traverse(val[i], seen);
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) _traverse(val[keys[i]], seen);
  }
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createFnInvoker;
/* harmony export (immutable) */ __webpack_exports__["b"] = updateListeners;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_util__ = __webpack_require__(3);





const normalizeEvent = Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["b" /* cached */])(name => {
  const passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  const once = name.charAt(0) === '~';
  name = once ? name.slice(1) : name;
  const capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name,
    once,
    capture,
    passive
  };
});

function createFnInvoker(fns) {
  function invoker() {
    const fns = invoker.fns;
    if (Array.isArray(fns)) {
      const cloned = fns.slice();
      for (let i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments);
      }
    } else {
      return fns.apply(null, arguments);
    }
  }
  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove, vm) {
  let name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (false) {}
    if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["s" /* isUndef */])(cur)) {
      "development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Invalid handler for event "${event.name}": got ` + String(cur), vm);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["s" /* isUndef */])(old)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["s" /* isUndef */])(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["s" /* isUndef */])(on[name])) {
      event = normalizeEvent(name);
      remove(event.name, oldOn[name], event.capture);
    }
  }
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initRender;
/* harmony export (immutable) */ __webpack_exports__["b"] = renderMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vdom_create_element__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_helpers_index__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__render_helpers_resolve_slots__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vdom_vnode__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lifecycle__ = __webpack_require__(6);











function initRender(vm) {
  vm._vnode = null;
  vm._staticTrees = null;
  const options = vm.$options;
  const parentVnode = vm.$vnode = options._parentVnode;
  const renderContext = parentVnode && parentVnode.context;
  vm.$slots = Object(__WEBPACK_IMPORTED_MODULE_3__render_helpers_resolve_slots__["b" /* resolveSlots */])(options._renderChildren, renderContext);
  vm.$scopedSlots = __WEBPACK_IMPORTED_MODULE_0__util_index__["g" /* emptyObject */];

  vm._c = (a, b, c, d) => Object(__WEBPACK_IMPORTED_MODULE_1__vdom_create_element__["a" /* createElement */])(vm, a, b, c, d, false);

  vm.$createElement = (a, b, c, d) => Object(__WEBPACK_IMPORTED_MODULE_1__vdom_create_element__["a" /* createElement */])(vm, a, b, c, d, true);

  const parentData = parentVnode && parentVnode.data;

  if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["e" /* defineReactive */])(vm, '$attrs', parentData && parentData.attrs || __WEBPACK_IMPORTED_MODULE_0__util_index__["g" /* emptyObject */], () => {
      !__WEBPACK_IMPORTED_MODULE_5__lifecycle__["f" /* isUpdatingChildComponent */] && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["P" /* warn */])(`$attrs is readonly.`, vm);
    }, true);
    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["e" /* defineReactive */])(vm, '$listeners', options._parentListeners || __WEBPACK_IMPORTED_MODULE_0__util_index__["g" /* emptyObject */], () => {
      !__WEBPACK_IMPORTED_MODULE_5__lifecycle__["f" /* isUpdatingChildComponent */] && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["P" /* warn */])(`$listeners is readonly.`, vm);
    }, true);
  } else {}
}

function renderMixin(Vue) {
  Object(__WEBPACK_IMPORTED_MODULE_2__render_helpers_index__["a" /* installRenderHelpers */])(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["E" /* nextTick */])(fn, this);
  };

  Vue.prototype._render = function () {
    const vm = this;
    const { render, _parentVnode } = vm.$options;

    if (true) {
      for (const key in vm.$slots) {
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || __WEBPACK_IMPORTED_MODULE_0__util_index__["g" /* emptyObject */];
    }

    vm.$vnode = _parentVnode;

    let vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["j" /* handleError */])(e, vm, `render`);

      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["j" /* handleError */])(e, vm, `renderError`);
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {}
    }

    if (!(vnode instanceof __WEBPACK_IMPORTED_MODULE_4__vdom_vnode__["d" /* default */])) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["P" /* warn */])('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }
      vnode = Object(__WEBPACK_IMPORTED_MODULE_4__vdom_vnode__["b" /* createEmptyVNode */])();
    }

    vnode.parent = _parentVnode;
    return vnode;
  };
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = initProvide;
/* harmony export (immutable) */ __webpack_exports__["a"] = initInjections;
/* harmony export (immutable) */ __webpack_exports__["c"] = resolveInject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observer_index__ = __webpack_require__(7);






function initProvide(vm) {
  const provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  const result = resolveInject(vm.$options.inject, vm);
  if (result) {
    Object(__WEBPACK_IMPORTED_MODULE_2__observer_index__["f" /* toggleObserving */])(false);
    Object.keys(result).forEach(key => {
      if (true) {
        Object(__WEBPACK_IMPORTED_MODULE_2__observer_index__["a" /* defineReactive */])(vm, key, result[key], () => {
          Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["P" /* warn */])(`Avoid mutating an injected value directly since the changes will be ` + `overwritten whenever the provided component re-renders. ` + `injection being mutated: "${key}"`, vm);
        });
      } else {}
    });
    Object(__WEBPACK_IMPORTED_MODULE_2__observer_index__["f" /* toggleObserving */])(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    const result = Object.create(null);
    const keys = __WEBPACK_IMPORTED_MODULE_1__util_index__["m" /* hasSymbol */] ? Reflect.ownKeys(inject).filter(key => {
      return Object.getOwnPropertyDescriptor(inject, key).enumerable;
    }) : Object.keys(inject);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const provideKey = inject[key].from;
      let source = vm;
      while (source) {
        if (source._provided && Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["g" /* hasOwn */])(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          const provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (true) {
          Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["P" /* warn */])(`Injection "${key}" not found`, vm);
        }
      }
    }
    return result;
  }
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TextNode {
  constructor(text) {
    this.parentNode = null;
    this.prevSibling = null;
    this.nextSibling = null;

    this.tagName = '';

    this.text = text;
  }

  setText(text) {
    this.text = text;

    if (this.parentNode != null) this.parentNode._setContentText(text);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextNode;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodes_textnode__ = __webpack_require__(23);


class Element {
  constructor(tagName) {
    this.parentNode = null;
    this.prevSibling = null;
    this.nextSibling = null;

    this.tagName = tagName;

    this.childNodes = [];

    this.attributes = this._getDefaultAttributes();
    this.handlers = {};
  }

  appendChild(childNode) {
    if (childNode == null) throw new Error('Child node cannot be empty');

    if (childNode.parentNode != null) throw new Error('Child node already has a parent');

    if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__nodes_textnode__["a" /* TextNode */] && this.childNodes.length > 0) throw new Error('Element cannot contian multiple text nodes');

    childNode.parentNode = this;

    if (this.childNodes.length > 0) {
      const lastChild = this.childNodes[this.childNodes.length - 1];
      childNode.prevSibling = lastChild;
      lastChild.nextSibling = childNode;
    }

    this.childNodes.push(childNode);
  }

  insertBefore(childNode, referenceNode) {
    if (childNode == null) throw new Error('Child node cannot be empty');

    if (referenceNode != null && referenceNode.parentNode != this) throw new Error('Reference node has invalid parent');

    if (childNode.parentNode != null) throw new Error('Child node already has a parent');

    if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__nodes_textnode__["a" /* TextNode */]) throw new Error('Text node cannot be inserted dynamically');

    const index = this.childNodes.indexOf(referenceNode);

    childNode.parentNode = this;
    childNode.nextSibling = referenceNode;
    childNode.prevSibling = this.childNodes[index - 1];

    referenceNode.prevSibling = childNode;
    this.childNodes.splice(index, 0, childNode);

    return index;
  }

  removeChild(childNode) {
    if (childNode == null) throw new Error('Child node cannot be empty');

    if (childNode.parentNode != this) throw new Error('Child node has invalid parent');

    if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__nodes_textnode__["a" /* TextNode */]) throw new Error('Text node cannot be removed dynamically');

    childNode.parentNode = null;

    if (childNode.prevSibling != null) childNode.prevSibling.nextSibling = childNode.nextSibling;

    if (childNode.nextSibling != null) childNode.nextSibling.prevSibling = childNode.prevSibling;

    const index = this.childNodes.indexOf(childNode);

    this.childNodes.splice(index, 1);
  }

  setAttribute(key, value) {
    this.attributes[key] = value;
  }

  addEventListener(event, handler) {
    this.handlers[event] = handler;
  }

  removeEventListener(event) {
    delete this.handlers[event];
  }

  _getDefaultAttributes() {
    return {};
  }

  _setContentText(text) {
    throw new Error(this.tagName + ' cannot contain text nodes');
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Element;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initProxy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);





let initProxy;

if (true) {
  const allowedGlobals = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["B" /* makeMap */])('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require');

  const warnNonPresent = (target, key) => {
    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["P" /* warn */])(`Property or method "${key}" is not defined on the instance but ` + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  const hasProxy = typeof Proxy !== 'undefined' && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["q" /* isNative */])(Proxy);

  if (hasProxy) {
    const isBuiltInModifier = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["B" /* makeMap */])('stop,prevent,self,ctrl,shift,alt,meta,exact');
    __WEBPACK_IMPORTED_MODULE_0_core_config__["a" /* default */].keyCodes = new Proxy(__WEBPACK_IMPORTED_MODULE_0_core_config__["a" /* default */].keyCodes, {
      set(target, key, value) {
        if (isBuiltInModifier(key)) {
          Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["P" /* warn */])(`Avoid overwriting built-in modifier in config.keyCodes: .${key}`);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  const hasHandler = {
    has(target, key) {
      const has = key in target;
      const isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed;
    }
  };

  const getHandler = {
    get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      const options = vm.$options;
      const handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = queueActivatedComponent;
/* harmony export (immutable) */ __webpack_exports__["b"] = queueWatcher;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instance_lifecycle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_index__ = __webpack_require__(0);






const MAX_UPDATE_COUNT = 100;
/* unused harmony export MAX_UPDATE_COUNT */


const queue = [];
const activatedChildren = [];
let has = {};
let circular = {};
let waiting = false;
let flushing = false;
let index = 0;

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

function flushSchedulerQueue() {
  flushing = true;
  let watcher, id;

  queue.sort((a, b) => a.id - b.id);

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();

    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        Object(__WEBPACK_IMPORTED_MODULE_2__util_index__["P" /* warn */])('You may have an infinite update loop ' + (watcher.user ? `in watcher with expression "${watcher.expression}"` : `in a component render function.`), watcher.vm);
        break;
      }
    }
  }

  const activatedQueue = activatedChildren.slice();
  const updatedQueue = queue.slice();

  resetSchedulerState();

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  if (__WEBPACK_IMPORTED_MODULE_2__util_index__["f" /* devtools */] && __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].devtools) {
    __WEBPACK_IMPORTED_MODULE_2__util_index__["f" /* devtools */].emit('flush');
  }
}

function callUpdatedHooks(queue) {
  let i = queue.length;
  while (i--) {
    const watcher = queue[i];
    const vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      Object(__WEBPACK_IMPORTED_MODULE_1__instance_lifecycle__["c" /* callHook */])(vm, 'updated');
    }
  }
}

function queueActivatedComponent(vm) {
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (let i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    Object(__WEBPACK_IMPORTED_MODULE_1__instance_lifecycle__["a" /* activateChildComponent */])(queue[i], true);
  }
}

function queueWatcher(watcher) {
  const id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      let i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }

    if (!waiting) {
      waiting = true;
      Object(__WEBPACK_IMPORTED_MODULE_2__util_index__["E" /* nextTick */])(flushSchedulerQueue);
    }
  }
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return measure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(9);


let mark;
let measure;

if (true) {
  const perf = __WEBPACK_IMPORTED_MODULE_0__env__["e" /* inBrowser */] && window.performance;

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = tag => perf.mark(tag);
    measure = (name, startTag, endTag) => {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = simpleNormalizeChildren;
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeChildren;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_vdom_vnode__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_util__ = __webpack_require__(3);





function simpleNormalizeChildren(children) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}

function normalizeChildren(children) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["o" /* isPrimitive */])(children) ? [Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_vnode__["c" /* createTextVNode */])(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["k" /* isDef */])(node) && Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["k" /* isDef */])(node.text) && Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["l" /* isFalse */])(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  const res = [];
  let i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["s" /* isUndef */])(c) || typeof c === 'boolean') continue;
    lastIndex = res.length - 1;
    last = res[lastIndex];

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, `${nestedIndex || ''}_${i}`);

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_vnode__["c" /* createTextVNode */])(last.text + c[0].text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["o" /* isPrimitive */])(c)) {
      if (isTextNode(last)) {
        res[lastIndex] = Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_vnode__["c" /* createTextVNode */])(last.text + c);
      } else if (c !== '') {
        res.push(Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_vnode__["c" /* createTextVNode */])(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        res[lastIndex] = Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_vnode__["c" /* createTextVNode */])(last.text + c.text);
      } else {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["r" /* isTrue */])(children._isVList) && Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["k" /* isDef */])(c.tag) && Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["s" /* isUndef */])(c.key) && Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["k" /* isDef */])(nestedIndex)) {
          c.key = `__vlist${nestedIndex}_${i}__`;
        }
        res.push(c);
      }
    }
  }
  return res;
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isAsyncPlaceholder;


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createElement;
/* unused harmony export _createElement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vnode__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_component__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observer_traverse__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_index__ = __webpack_require__(11);











const SIMPLE_NORMALIZE = 1;
const ALWAYS_NORMALIZE = 2;

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["t" /* isPrimitive */])(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["y" /* isTrue */])(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data) && Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data.__ob__)) {
    "development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["P" /* warn */])(`Avoid using observed data object as vnode data: ${JSON.stringify(data)}\n` + 'Always create fresh vnode data objects in each render!', context);
    return Object(__WEBPACK_IMPORTED_MODULE_1__vnode__["b" /* createEmptyVNode */])();
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data) && Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__vnode__["b" /* createEmptyVNode */])();
  }

  if ("development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data) && Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data.key) && !Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["t" /* isPrimitive */])(data.key)) {
    if (true) {
      Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["P" /* warn */])('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  }

  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = Object(__WEBPACK_IMPORTED_MODULE_5__helpers_index__["e" /* normalizeChildren */])(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = Object(__WEBPACK_IMPORTED_MODULE_5__helpers_index__["g" /* simpleNormalizeChildren */])(children);
  }
  let vnode, ns;
  if (typeof tag === 'string') {
    let Ctor;
    ns = context.$vnode && context.$vnode.ns || __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].getTagNamespace(tag);
    if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isReservedTag(tag)) {
      vnode = new __WEBPACK_IMPORTED_MODULE_1__vnode__["d" /* default */](__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(Ctor = Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["J" /* resolveAsset */])(context.$options, 'components', tag))) {
      vnode = Object(__WEBPACK_IMPORTED_MODULE_2__create_component__["a" /* createComponent */])(Ctor, data, context, children, tag);
    } else {
      vnode = new __WEBPACK_IMPORTED_MODULE_1__vnode__["d" /* default */](tag, data, children, undefined, undefined, context);
    }
  } else {
    vnode = Object(__WEBPACK_IMPORTED_MODULE_2__create_component__["a" /* createComponent */])(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode;
  } else if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(vnode)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(ns)) applyNS(vnode, ns);
    if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data)) registerDeepBindings(data);
    return vnode;
  } else {
    return Object(__WEBPACK_IMPORTED_MODULE_1__vnode__["b" /* createEmptyVNode */])();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    ns = undefined;
    force = true;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(vnode.children)) {
    for (let i = 0, l = vnode.children.length; i < l; i++) {
      const child = vnode.children[i];
      if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(child.tag) && (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["z" /* isUndef */])(child.ns) || Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["y" /* isTrue */])(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
}

function registerDeepBindings(data) {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["r" /* isObject */])(data.style)) {
    Object(__WEBPACK_IMPORTED_MODULE_3__observer_traverse__["a" /* traverse */])(data.style);
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["r" /* isObject */])(data.class)) {
    Object(__WEBPACK_IMPORTED_MODULE_3__observer_traverse__["a" /* traverse */])(data.class);
  }
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createComponent;
/* harmony export (immutable) */ __webpack_exports__["b"] = createComponentInstanceForVnode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vnode__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_instance_init__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_observer_scheduler__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_functional_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__instance_lifecycle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_weex_runtime_recycle_list_render_component_template__ = __webpack_require__(56);















const componentVNodeHooks = {
  init(vnode, hydrating, parentElm, refElm) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      const mountedNode = vnode;
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      const child = vnode.componentInstance = createComponentInstanceForVnode(vnode, __WEBPACK_IMPORTED_MODULE_6__instance_lifecycle__["b" /* activeInstance */], parentElm, refElm);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch(oldVnode, vnode) {
    const options = vnode.componentOptions;
    const child = vnode.componentInstance = oldVnode.componentInstance;
    Object(__WEBPACK_IMPORTED_MODULE_6__instance_lifecycle__["i" /* updateChildComponent */])(child, options.propsData, options.listeners, vnode, options.children);
  },

  insert(vnode) {
    const { context, componentInstance } = vnode;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      Object(__WEBPACK_IMPORTED_MODULE_6__instance_lifecycle__["c" /* callHook */])(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        Object(__WEBPACK_IMPORTED_MODULE_2_core_observer_scheduler__["a" /* queueActivatedComponent */])(componentInstance);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_6__instance_lifecycle__["a" /* activateChildComponent */])(componentInstance, true);
      }
    }
  },

  destroy(vnode) {
    const { componentInstance } = vnode;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_6__instance_lifecycle__["d" /* deactivateChildComponent */])(componentInstance, true);
      }
    }
  }
};

const hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["z" /* isUndef */])(Ctor)) {
    return;
  }

  const baseCtor = context.$options._base;

  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["r" /* isObject */])(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (true) {
      Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["P" /* warn */])(`Invalid Component definition: ${String(Ctor)}`, context);
    }
    return;
  }

  let asyncFactory;
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["z" /* isUndef */])(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = Object(__WEBPACK_IMPORTED_MODULE_5__helpers_index__["f" /* resolveAsyncComponent */])(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      return Object(__WEBPACK_IMPORTED_MODULE_5__helpers_index__["a" /* createAsyncPlaceholder */])(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {};

  Object(__WEBPACK_IMPORTED_MODULE_1_core_instance_init__["c" /* resolveConstructorOptions */])(Ctor);

  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data.model)) {
    transformModel(Ctor.options, data);
  }

  const propsData = Object(__WEBPACK_IMPORTED_MODULE_5__helpers_index__["b" /* extractPropsFromVNodeData */])(data, Ctor, tag);

  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["y" /* isTrue */])(Ctor.options.functional)) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__create_functional_component__["a" /* createFunctionalComponent */])(Ctor, propsData, data, context, children);
  }

  const listeners = data.on;

  data.on = data.nativeOn;

  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["y" /* isTrue */])(Ctor.options.abstract)) {
    const slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  installComponentHooks(data);

  const name = Ctor.options.name || tag;
  const vnode = new __WEBPACK_IMPORTED_MODULE_0__vnode__["d" /* default */](`vue-component-${Ctor.cid}${name ? `-${name}` : ''}`, data, undefined, undefined, undefined, context, { Ctor, propsData, listeners, tag, children }, asyncFactory);

  if (false) {}

  return vnode;
}

function createComponentInstanceForVnode(vnode, parent, parentElm, refElm) {
  const options = {
    _isComponent: true,
    parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };

  const inlineTemplate = vnode.data.inlineTemplate;
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  const hooks = data.hook || (data.hook = {});
  for (let i = 0; i < hooksToMerge.length; i++) {
    const key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

function transformModel(options, data) {
  const prop = options.model && options.model.prop || 'value';
  const event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  const on = data.on || (data.on = {});
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = installRenderHelpers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_vdom_vnode__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_list__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__render_slot__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolve_filter__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__check_keycodes__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bind_object_props__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__render_static__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bind_object_listeners__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resolve_slots__ = __webpack_require__(15);













function installRenderHelpers(target) {
  target._o = __WEBPACK_IMPORTED_MODULE_7__render_static__["a" /* markOnce */];
  target._n = __WEBPACK_IMPORTED_MODULE_0_shared_util__["C" /* toNumber */];
  target._s = __WEBPACK_IMPORTED_MODULE_0_shared_util__["F" /* toString */];
  target._l = __WEBPACK_IMPORTED_MODULE_2__render_list__["a" /* renderList */];
  target._t = __WEBPACK_IMPORTED_MODULE_3__render_slot__["a" /* renderSlot */];
  target._q = __WEBPACK_IMPORTED_MODULE_0_shared_util__["u" /* looseEqual */];
  target._i = __WEBPACK_IMPORTED_MODULE_0_shared_util__["v" /* looseIndexOf */];
  target._m = __WEBPACK_IMPORTED_MODULE_7__render_static__["b" /* renderStatic */];
  target._f = __WEBPACK_IMPORTED_MODULE_4__resolve_filter__["a" /* resolveFilter */];
  target._k = __WEBPACK_IMPORTED_MODULE_5__check_keycodes__["a" /* checkKeyCodes */];
  target._b = __WEBPACK_IMPORTED_MODULE_6__bind_object_props__["a" /* bindObjectProps */];
  target._v = __WEBPACK_IMPORTED_MODULE_1_core_vdom_vnode__["c" /* createTextVNode */];
  target._e = __WEBPACK_IMPORTED_MODULE_1_core_vdom_vnode__["b" /* createEmptyVNode */];
  target._u = __WEBPACK_IMPORTED_MODULE_9__resolve_slots__["a" /* resolveScopedSlots */];
  target._g = __WEBPACK_IMPORTED_MODULE_8__bind_object_listeners__["a" /* bindObjectListeners */];
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = registerComponentHook;
/* harmony export (immutable) */ __webpack_exports__["c"] = updateComponentData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);




const RECYCLE_LIST_MARKER = '@inRecycleList';
/* harmony export (immutable) */ __webpack_exports__["a"] = RECYCLE_LIST_MARKER;


function registerComponentHook(componentId, type, hook, fn) {
  if (!document || !document.taskCenter) {
    Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Can't find available "document" or "taskCenter".`);
    return;
  }
  if (typeof document.taskCenter.registerHook === 'function') {
    return document.taskCenter.registerHook(componentId, type, hook, fn);
  }
  Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Failed to register component hook "${type}@${hook}#${componentId}".`);
}

function updateComponentData(componentId, newData, callback) {
  if (!document || !document.taskCenter) {
    Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Can't find available "document" or "taskCenter".`);
    return;
  }
  if (typeof document.taskCenter.updateData === 'function') {
    return document.taskCenter.updateData(componentId, newData, callback);
  }
  Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Failed to update component data (${componentId}).`);
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createPatchFunction;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vnode__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_ref__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observer_traverse__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__instance_lifecycle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_web_util_element__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_index__ = __webpack_require__(0);












const emptyNode = new __WEBPACK_IMPORTED_MODULE_0__vnode__["d" /* default */]('', {}, []);
/* harmony export (immutable) */ __webpack_exports__["b"] = emptyNode;


const hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(a.data) === Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(b.data) && sameInputType(a, b) || Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') return true;
  let i;
  const typeA = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = a.data) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.attrs) && i.type;
  const typeB = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = b.data) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.attrs) && i.type;
  return typeA === typeB || Object(__WEBPACK_IMPORTED_MODULE_6_web_util_element__["a" /* isTextInputType */])(typeA) && Object(__WEBPACK_IMPORTED_MODULE_6_web_util_element__["a" /* isTextInputType */])(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  let i, key;
  const map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(key)) map[key] = i;
  }
  return map;
}

function createPatchFunction(backend) {
  let i, j;
  const cbs = {};

  const { modules, nodeOps } = backend;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new __WEBPACK_IMPORTED_MODULE_0__vnode__["d" /* default */](nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove() {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove;
  }

  function removeNode(el) {
    const parent = nodeOps.parentNode(el);

    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].ignoredElements.length && __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].ignoredElements.some(ignore => {
      return Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["u" /* isRegExp */])(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].isUnknownElement(vnode.tag);
  }

  let creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.elm) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(ownerArray)) {
      vnode = ownerArray[index] = Object(__WEBPACK_IMPORTED_MODULE_0__vnode__["a" /* cloneVNode */])(vnode);
    }

    vnode.isRootInsert = !nested;
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    const data = vnode.data;
    const children = vnode.children;
    const tag = vnode.tag;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement(vnode, creatingElmInVPre)) {
          Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["P" /* warn */])('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      if (false) {} else {
        createChildren(vnode, children, insertedVnodeQueue);
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    let i = vnode.data;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i)) {
      const isReactivated = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.componentInstance) && i.keepAlive;
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.init)) {
        i(vnode, false, parentElm, refElm);
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_3__modules_ref__["b" /* registerRef */])(vnode);

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    let i;

    let innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = innerNode.data) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }

    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(parent)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(ref)) {
        if (ref.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (let i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["t" /* isPrimitive */])(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (let i = 0; i < cbs.create.length; ++i) {
      cbs.create[i](emptyNode, vnode);
    }
    i = vnode.data.hook;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i.create)) i.create(emptyNode, vnode);
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i.insert)) insertedVnodeQueue.push(vnode);
    }
  }

  function setScope(vnode) {
    let i;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      let ancestor = vnode;
      while (ancestor) {
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = ancestor.context) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = __WEBPACK_IMPORTED_MODULE_5__instance_lifecycle__["b" /* activeInstance */]) && i !== vnode.context && i !== vnode.fnContext && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    let i, j;
    const data = vnode.data;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = data.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      const ch = vnodes[startIdx];
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(ch)) {
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(rm) || Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.data)) {
      let i;
      const listeners = cbs.remove.length + 1;
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(rm)) {
        rm.listeners += listeners;
      } else {
        rm = createRmCb(vnode.elm, listeners);
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = vnode.componentInstance) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i._vnode) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = vnode.data.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    const canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx];
      } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(idxInOld)) {
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    const seenKeys = {};
    for (let i = 0; i < children.length; i++) {
      const vnode = children[i];
      const key = vnode.key;
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(key)) {
        if (seenKeys[key]) {
          Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["P" /* warn */])(`Duplicate keys detected: '${key}'. This may cause an update error.`, vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (let i = start; i < end; i++) {
      const c = oldCh[i];
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(c) && sameVnode(node, c)) return i;
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    const elm = vnode.elm = oldVnode.elm;

    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(oldVnode.isAsyncPlaceholder)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return;
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(vnode.isStatic) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(oldVnode.isStatic) && vnode.key === oldVnode.key && (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(vnode.isCloned) || Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    let i;
    const data = vnode.data;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = data.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    const oldCh = oldVnode.children;
    const ch = vnode.children;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = data.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.update)) i(oldVnode, vnode);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(vnode.text)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldCh) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
      } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(ch)) {
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldVnode.text)) nodeOps.setTextContent(elm, '');
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = data.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.postpatch)) i(oldVnode, vnode);
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(initial) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (let i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  let hydrationBailed = false;

  const isRenderedModule = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["B" /* makeMap */])('attrs,class,staticClass,staticStyle,key');

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    let i;
    const { tag, data, children } = vnode;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(vnode.isComment) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    }

    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = data.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.init)) i(vnode, true);
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(tag)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(children)) {
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = data) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.domProps) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false;
            }
          } else {
            let childrenMatch = true;
            let childNode = elm.firstChild;
            for (let i = 0; i < children.length; i++) {
              if (!childNode || !hydrate(childNode, children[i], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }
              childNode = childNode.nextSibling;
            }

            if (!childrenMatch || childNode) {
              if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false;
            }
          }
        }
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data)) {
        let fullInvoke = false;
        for (const key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
        if (!fullInvoke && data['class']) {
          Object(__WEBPACK_IMPORTED_MODULE_4__observer_traverse__["a" /* traverse */])(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(vnode)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldVnode)) invokeDestroyHook(oldVnode);
      return;
    }

    let isInitialPatch = false;
    const insertedVnodeQueue = [];

    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(oldVnode)) {
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      const isRealElement = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(__WEBPACK_IMPORTED_MODULE_2_shared_constants__["c" /* SSR_ATTR */])) {
            oldVnode.removeAttribute(__WEBPACK_IMPORTED_MODULE_2_shared_constants__["c" /* SSR_ATTR */]);
            hydrating = true;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["P" /* warn */])('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          }

          oldVnode = emptyNodeAt(oldVnode);
        }

        const oldElm = oldVnode.elm;
        const parentElm = nodeOps.parentNode(oldElm);

        createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));

        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.parent)) {
          let ancestor = vnode.parent;
          const patchable = isPatchable(vnode);
          while (ancestor) {
            for (let i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (let i = 0; i < cbs.create.length; ++i) {
                cbs.create[i](emptyNode, ancestor);
              }

              const insert = ancestor.data.hook.insert;
              if (insert.merged) {
                for (let i = 1; i < insert.fns.length; i++) {
                  insert.fns[i]();
                }
              }
            } else {
              Object(__WEBPACK_IMPORTED_MODULE_3__modules_ref__["b" /* registerRef */])(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = registerRef;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = ({
  create(_, vnode) {
    registerRef(vnode);
  },
  update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy(vnode) {
    registerRef(vnode, true);
  }
});

function registerRef(vnode, isRemoval) {
  const key = vnode.data.ref;
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["k" /* isDef */])(key)) return;

  const vm = vnode.context;
  const ref = vnode.componentInstance || vnode.elm;
  const refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["A" /* remove */])(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isUnaryTag */
/* unused harmony export canBeLeftOpenTag */
/* harmony export (immutable) */ __webpack_exports__["e"] = mustUseProp;
/* harmony export (immutable) */ __webpack_exports__["a"] = getTagNamespace;
/* harmony export (immutable) */ __webpack_exports__["d"] = isUnknownElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(3);


function isUnaryTag(el) {
  return false;
}

function canBeLeftOpenTag(el) {
  return false;
}

function mustUseProp(tag, type, name) {
  return false;
}

const isReservedTag = Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["w" /* makeMap */])('template,script,style,box,button,checkbox,colorbutton,combobox,datepicker,datetimepicker,dropdownlist,' + 'fontbutton,group,progressbar,radiobuttons,separator,slider,spinbox,tab,text,textarea,textinput,timepicker,window', true);
/* harmony export (immutable) */ __webpack_exports__["c"] = isReservedTag;


function getTagNamespace(tag) {}

function isUnknownElement(tag) {
  return false;
}

const isBooleanAttr = Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["w" /* makeMap */])('visible,enabled,stretchy,margined,padded,checked,horizontal,readonly');
/* harmony export (immutable) */ __webpack_exports__["b"] = isBooleanAttr;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_instance_index__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_global_api_index__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_instance_lifecycle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patch__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(36);








Object(__WEBPACK_IMPORTED_MODULE_1_core_global_api_index__["a" /* initGlobalAPI */])(__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].version = '2.5.16';

__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].config.mustUseProp = __WEBPACK_IMPORTED_MODULE_4__util__["e" /* mustUseProp */];
__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].config.isReservedTag = __WEBPACK_IMPORTED_MODULE_4__util__["c" /* isReservedTag */];
__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].config.getTagNamespace = __WEBPACK_IMPORTED_MODULE_4__util__["a" /* getTagNamespace */];
__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].config.isUnknownElement = __WEBPACK_IMPORTED_MODULE_4__util__["d" /* isUnknownElement */];

__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].prototype.__patch__ = __WEBPACK_IMPORTED_MODULE_3__patch__["a" /* patch */];

__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].prototype.$mount = function (el, hydrating) {
  if (el != null) throw new Error('Mount element is not supported');

  Object(__WEBPACK_IMPORTED_MODULE_2_core_instance_lifecycle__["h" /* mountComponent */])(this, el, hydrating);

  if (this.$parent == null && this.$el.widget == null) {
    if (this.$el.tagName != 'Window') throw new Error('Top level element must be a Window');

    this.$el._mountWindow();

    this.$on('hook:destroyed', () => {
      this.$el._destroyWindow();
    });
  }

  return this;
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */]);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lifecycle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_index__ = __webpack_require__(0);







function Vue(options) {
  if ("development" !== 'production' && !(this instanceof Vue)) {
    Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

Object(__WEBPACK_IMPORTED_MODULE_0__init__["b" /* initMixin */])(Vue);
Object(__WEBPACK_IMPORTED_MODULE_1__state__["e" /* stateMixin */])(Vue);
Object(__WEBPACK_IMPORTED_MODULE_3__events__["a" /* eventsMixin */])(Vue);
Object(__WEBPACK_IMPORTED_MODULE_4__lifecycle__["g" /* lifecycleMixin */])(Vue);
Object(__WEBPACK_IMPORTED_MODULE_2__render__["b" /* renderMixin */])(Vue);

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isReserved;
/* harmony export (immutable) */ __webpack_exports__["a"] = def;
/* harmony export (immutable) */ __webpack_exports__["c"] = parsePath;

function isReserved(str) {
  const c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

const bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  const segments = path.split('.');
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]];
    }
    return obj;
  };
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mergeDataOrFn */
/* harmony export (immutable) */ __webpack_exports__["c"] = validateComponentName;
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeOptions;
/* harmony export (immutable) */ __webpack_exports__["b"] = resolveAsset;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debug__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observer_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shared_constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shared_util__ = __webpack_require__(3);











const strats = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].optionMergeStrategies;

if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])(`option "${key}" can only be used during instance ` + 'creation with the `new` keyword.');
    }
    return defaultStrat(parent, child);
  };
}

function mergeData(to, from) {
  if (!from) return to;
  let key, toVal, fromVal;
  const keys = Object.keys(from);
  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["g" /* hasOwn */])(to, key)) {
      Object(__WEBPACK_IMPORTED_MODULE_3__observer_index__["d" /* set */])(to, key, fromVal);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(toVal) && Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }

    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      const instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      const defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

      return parentVal;
    }
    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};

function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

__WEBPACK_IMPORTED_MODULE_4_shared_constants__["b" /* LIFECYCLE_HOOKS */].forEach(hook => {
  strats[hook] = mergeHook;
});

function mergeAssets(parentVal, childVal, vm, key) {
  const res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["f" /* extend */])(res, childVal);
  } else {
    return res;
  }
}

__WEBPACK_IMPORTED_MODULE_4_shared_constants__["a" /* ASSET_TYPES */].forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

strats.watch = function (parentVal, childVal, vm, key) {
  if (parentVal === __WEBPACK_IMPORTED_MODULE_2__env__["j" /* nativeWatch */]) parentVal = undefined;
  if (childVal === __WEBPACK_IMPORTED_MODULE_2__env__["j" /* nativeWatch */]) childVal = undefined;

  if (!childVal) return Object.create(parentVal || null);
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) return childVal;
  const ret = {};
  Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["f" /* extend */])(ret, parentVal);
  for (const key in childVal) {
    let parent = ret[key];
    const child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }
  return ret;
};

strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) return childVal;
  const ret = Object.create(null);
  Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["f" /* extend */])(ret, parentVal);
  if (childVal) Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["f" /* extend */])(ret, childVal);
  return ret;
};
strats.provide = mergeDataOrFn;

const defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

function checkComponents(options) {
  for (const key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["j" /* isBuiltInTag */])(name) || __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isReservedTag(name)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}

function normalizeProps(options, vm) {
  const props = options.props;
  if (!props) return;
  const res = {};
  let i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["c" /* camelize */])(val);
        res[name] = { type: null };
      } else if (true) {
        Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])('props must be strings when using array syntax.');
      }
    }
  } else if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(props)) {
    for (const key in props) {
      val = props[key];
      name = Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["c" /* camelize */])(key);
      res[name] = Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(val) ? val : { type: val };
    }
  } else if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])(`Invalid value for option "props": expected an Array or an Object, ` + `but got ${Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["E" /* toRawType */])(props)}.`, vm);
  }
  options.props = res;
}

function normalizeInject(options, vm) {
  const inject = options.inject;
  if (!inject) return;
  const normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (let i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(inject)) {
    for (const key in inject) {
      const val = inject[key];
      normalized[key] = Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(val) ? Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["f" /* extend */])({ from: key }, val) : { from: val };
    }
  } else if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])(`Invalid value for option "inject": expected an Array or an Object, ` + `but got ${Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["E" /* toRawType */])(inject)}.`, vm);
  }
}

function normalizeDirectives(options) {
  const dirs = options.directives;
  if (dirs) {
    for (const key in dirs) {
      const def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])(`Invalid value for option "${name}": expected an Object, ` + `but got ${Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["E" /* toRawType */])(value)}.`, vm);
  }
}

function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  const extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (let i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  const options = {};
  let key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["g" /* hasOwn */])(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    const strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

function resolveAsset(options, type, id, warnMissing) {
  if (typeof id !== 'string') {
    return;
  }
  const assets = options[type];

  if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["g" /* hasOwn */])(assets, id)) return assets[id];
  const camelizedId = Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["c" /* camelize */])(id);
  if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["g" /* hasOwn */])(assets, camelizedId)) return assets[camelizedId];
  const PascalCaseId = Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["d" /* capitalize */])(camelizedId);
  if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["g" /* hasOwn */])(assets, PascalCaseId)) return assets[PascalCaseId];

  const res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);




const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayMethods;


const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

methodsToPatch.forEach(function (method) {
  const original = arrayProto[method];
  Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["d" /* def */])(arrayMethods, method, function mutator(...args) {
    const result = original.apply(this, args);
    const ob = this.__ob__;
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);

    ob.dep.notify();
    return result;
  });
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateProp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debug__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observer_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_util__ = __webpack_require__(3);






function validateProp(key, propOptions, propsData, vm) {
  const prop = propOptions[key];
  const absent = !Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["g" /* hasOwn */])(propsData, key);
  let value = propsData[key];

  const booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["g" /* hasOwn */])(prop, 'default')) {
      value = false;
    } else if (value === '' || value === Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["h" /* hyphenate */])(key)) {
      const stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }

  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);

    const prevShouldObserve = __WEBPACK_IMPORTED_MODULE_1__observer_index__["e" /* shouldObserve */];
    Object(__WEBPACK_IMPORTED_MODULE_1__observer_index__["f" /* toggleObserving */])(true);
    Object(__WEBPACK_IMPORTED_MODULE_1__observer_index__["c" /* observe */])(value);
    Object(__WEBPACK_IMPORTED_MODULE_1__observer_index__["f" /* toggleObserving */])(prevShouldObserve);
  }
  if (true) {
    assertProp(prop, key, value, vm, absent);
  }
  return value;
}

function getPropDefaultValue(vm, prop, key) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["g" /* hasOwn */])(prop, 'default')) {
    return undefined;
  }
  const def = prop.default;

  if ("development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["m" /* isObject */])(def)) {
    Object(__WEBPACK_IMPORTED_MODULE_0__debug__["c" /* warn */])('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }

  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  }

  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    Object(__WEBPACK_IMPORTED_MODULE_0__debug__["c" /* warn */])('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  let type = prop.type;
  let valid = !type || type === true;
  const expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (let i = 0; i < type.length && !valid; i++) {
      const assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    Object(__WEBPACK_IMPORTED_MODULE_0__debug__["c" /* warn */])(`Invalid prop: type check failed for prop "${name}".` + ` Expected ${expectedTypes.map(__WEBPACK_IMPORTED_MODULE_2_shared_util__["d" /* capitalize */]).join(', ')}` + `, got ${Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["E" /* toRawType */])(value)}.`, vm);
    return;
  }
  const validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      Object(__WEBPACK_IMPORTED_MODULE_0__debug__["c" /* warn */])('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

const simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["n" /* isPlainObject */])(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}

function getType(fn) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  for (let i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }
  return -1;
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export withMacroTask */
/* harmony export (immutable) */ __webpack_exports__["a"] = nextTick;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(9);






const callbacks = [];
let pending = false;

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

let microTimerFunc;
let macroTimerFunc;
let useMacroTask = false;

if (typeof setImmediate !== 'undefined' && Object(__WEBPACK_IMPORTED_MODULE_2__env__["h" /* isNative */])(setImmediate)) {
  macroTimerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (Object(__WEBPACK_IMPORTED_MODULE_2__env__["h" /* isNative */])(MessageChannel) || MessageChannel.toString() === '[object MessageChannelConstructor]')) {
  const channel = new MessageChannel();
  const port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = () => {
    port.postMessage(1);
  };
} else {
  macroTimerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

if (typeof Promise !== 'undefined' && Object(__WEBPACK_IMPORTED_MODULE_2__env__["h" /* isNative */])(Promise)) {
  const p = Promise.resolve();
  microTimerFunc = () => {
    p.then(flushCallbacks);

    if (__WEBPACK_IMPORTED_MODULE_2__env__["g" /* isIOS */]) setTimeout(__WEBPACK_IMPORTED_MODULE_0_shared_util__["y" /* noop */]);
  };
} else {
  microTimerFunc = macroTimerFunc;
}

function withMacroTask(fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    const res = fn.apply(null, arguments);
    useMacroTask = false;
    return res;
  });
}

function nextTick(cb, ctx) {
  let _resolve;
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_1__error__["a" /* handleError */])(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }

  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve;
    });
  }
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeVNodeHook;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vnode__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_listeners__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_util__ = __webpack_require__(3);






function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof __WEBPACK_IMPORTED_MODULE_0__vnode__["d" /* default */]) {
    def = def.data.hook || (def.data.hook = {});
  }
  let invoker;
  const oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments);

    Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["A" /* remove */])(invoker.fns, wrappedHook);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["s" /* isUndef */])(oldHook)) {
    invoker = Object(__WEBPACK_IMPORTED_MODULE_1__update_listeners__["a" /* createFnInvoker */])([wrappedHook]);
  } else {
    if (Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["k" /* isDef */])(oldHook.fns) && Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["r" /* isTrue */])(oldHook.merged)) {
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      invoker = Object(__WEBPACK_IMPORTED_MODULE_1__update_listeners__["a" /* createFnInvoker */])([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extractPropsFromVNodeData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);




function extractPropsFromVNodeData(data, Ctor, tag) {
  const propOptions = Ctor.options.props;
  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["z" /* isUndef */])(propOptions)) {
    return;
  }
  const res = {};
  const { attrs, props } = data;
  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(attrs) || Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(props)) {
    for (const key in propOptions) {
      const altKey = Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["n" /* hyphenate */])(key);
      if (true) {
        const keyInLowerCase = key.toLowerCase();
        if (key !== keyInLowerCase && attrs && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["k" /* hasOwn */])(attrs, keyInLowerCase)) {
          Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["K" /* tip */])(`Prop "${keyInLowerCase}" is passed to component ` + `${Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["i" /* formatComponentName */])(tag || Ctor)}, but the declared prop name is` + ` "${key}". ` + `Note that HTML attributes are case-insensitive and camelCased ` + `props need to use their kebab-case equivalents when using in-DOM ` + `templates. You should probably use "${altKey}" instead of "${key}".`);
        }
      }
      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }
  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(hash)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["k" /* hasOwn */])(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["k" /* hasOwn */])(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createAsyncPlaceholder;
/* harmony export (immutable) */ __webpack_exports__["b"] = resolveAsyncComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_vdom_vnode__ = __webpack_require__(5);






function ensureCtor(comp, base) {
  if (comp.__esModule || __WEBPACK_IMPORTED_MODULE_0_core_util_index__["m" /* hasSymbol */] && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["r" /* isObject */])(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  const node = Object(__WEBPACK_IMPORTED_MODULE_1_core_vdom_vnode__["b" /* createEmptyVNode */])();
  node.asyncFactory = factory;
  node.asyncMeta = { data, context, children, tag };
  return node;
}

function resolveAsyncComponent(factory, baseCtor, context) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["y" /* isTrue */])(factory.error) && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(factory.errorComp)) {
    return factory.errorComp;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(factory.resolved)) {
    return factory.resolved;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["y" /* isTrue */])(factory.loading) && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(factory.contexts)) {
    factory.contexts.push(context);
  } else {
    const contexts = factory.contexts = [context];
    let sync = true;

    const forceRender = () => {
      for (let i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    const resolve = Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["G" /* once */])(res => {
      factory.resolved = ensureCtor(res, baseCtor);

      if (!sync) {
        forceRender();
      }
    });

    const reject = Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["G" /* once */])(reason => {
      "development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Failed to resolve async component: ${String(factory)}` + (reason ? `\nReason: ${reason}` : ''));
      if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    const res = factory(resolve, reject);

    if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["r" /* isObject */])(res)) {
      if (typeof res.then === 'function') {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["z" /* isUndef */])(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(() => {
              if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["z" /* isUndef */])(factory.resolved) && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["z" /* isUndef */])(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(res.timeout)) {
          setTimeout(() => {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["z" /* isUndef */])(factory.resolved)) {
              reject( true ? `timeout (${res.timeout}ms)` : undefined);
            }
          }, res.timeout);
        }
      }
    }

    sync = false;

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFirstComponentChild;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_async_placeholder__ = __webpack_require__(29);





function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i];
      if (Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["k" /* isDef */])(c) && (Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["k" /* isDef */])(c.componentOptions) || Object(__WEBPACK_IMPORTED_MODULE_1__is_async_placeholder__["a" /* isAsyncPlaceholder */])(c))) {
        return c;
      }
    }
  }
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FunctionalRenderContext */
/* harmony export (immutable) */ __webpack_exports__["a"] = createFunctionalComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vnode__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_element__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instance_inject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vdom_helpers_normalize_children__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instance_render_helpers_resolve_slots__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__instance_render_helpers_index__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_index__ = __webpack_require__(0);











function FunctionalRenderContext(data, props, children, parent, Ctor) {
  const options = Ctor.options;

  let contextVm;
  if (Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["k" /* hasOwn */])(parent, '_uid')) {
    contextVm = Object.create(parent);

    contextVm._original = parent;
  } else {
    contextVm = parent;

    parent = parent._original;
  }
  const isCompiled = Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["y" /* isTrue */])(options._compiled);
  const needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || __WEBPACK_IMPORTED_MODULE_6__util_index__["g" /* emptyObject */];
  this.injections = Object(__WEBPACK_IMPORTED_MODULE_2__instance_inject__["c" /* resolveInject */])(options.inject, parent);
  this.slots = () => Object(__WEBPACK_IMPORTED_MODULE_4__instance_render_helpers_resolve_slots__["b" /* resolveSlots */])(children, parent);

  if (isCompiled) {
    this.$options = options;

    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || __WEBPACK_IMPORTED_MODULE_6__util_index__["g" /* emptyObject */];
  }

  if (options._scopeId) {
    this._c = (a, b, c, d) => {
      const vnode = Object(__WEBPACK_IMPORTED_MODULE_1__create_element__["a" /* createElement */])(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode;
    };
  } else {
    this._c = (a, b, c, d) => Object(__WEBPACK_IMPORTED_MODULE_1__create_element__["a" /* createElement */])(contextVm, a, b, c, d, needNormalization);
  }
}

Object(__WEBPACK_IMPORTED_MODULE_5__instance_render_helpers_index__["a" /* installRenderHelpers */])(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  const options = Ctor.options;
  const props = {};
  const propOptions = options.props;
  if (Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["p" /* isDef */])(propOptions)) {
    for (const key in propOptions) {
      props[key] = Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["O" /* validateProp */])(key, propOptions, propsData || __WEBPACK_IMPORTED_MODULE_6__util_index__["g" /* emptyObject */]);
    }
  } else {
    if (Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["p" /* isDef */])(data.attrs)) mergeProps(props, data.attrs);
    if (Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["p" /* isDef */])(data.props)) mergeProps(props, data.props);
  }

  const renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

  const vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof __WEBPACK_IMPORTED_MODULE_0__vnode__["d" /* default */]) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options);
  } else if (Array.isArray(vnode)) {
    const vnodes = Object(__WEBPACK_IMPORTED_MODULE_3__vdom_helpers_normalize_children__["a" /* normalizeChildren */])(vnode) || [];
    const res = new Array(vnodes.length);
    for (let i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options) {
  const clone = Object(__WEBPACK_IMPORTED_MODULE_0__vnode__["a" /* cloneVNode */])(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone;
}

function mergeProps(to, from) {
  for (const key in from) {
    to[Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["c" /* camelize */])(key)] = from[key];
  }
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);




function renderList(val, render) {
  let ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["r" /* isObject */])(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(ret)) {
    ret._isVList = true;
  }
  return ret;
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderSlot;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);




function renderSlot(name, fallback, props, bindObject) {
  const scopedSlotFn = this.$scopedSlots[name];
  let nodes;
  if (scopedSlotFn) {
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["r" /* isObject */])(bindObject)) {
        Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])('slot v-bind without argument expects an Object', this);
      }
      props = Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["h" /* extend */])(Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["h" /* extend */])({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    const slotNodes = this.$slots[name];

    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Duplicate presence of slot "${name}" found in the same render tree ` + `- this will likely cause render errors.`, this);
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  const target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes);
  } else {
    return nodes;
  }
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resolveFilter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);




function resolveFilter(id) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["J" /* resolveAsset */])(this.$options, 'filters', id, true) || __WEBPACK_IMPORTED_MODULE_0_core_util_index__["o" /* identity */];
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkKeyCodes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_util__ = __webpack_require__(3);





function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}

function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  const mappedKeyCode = __WEBPACK_IMPORTED_MODULE_0_core_config__["a" /* default */].keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !__WEBPACK_IMPORTED_MODULE_0_core_config__["a" /* default */].keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["h" /* hyphenate */])(eventKeyName) !== key;
  }
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindObjectProps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_util_index__ = __webpack_require__(0);






function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1_core_util_index__["r" /* isObject */])(value)) {
      "development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_1_core_util_index__["P" /* warn */])('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = Object(__WEBPACK_IMPORTED_MODULE_1_core_util_index__["M" /* toObject */])(value);
      }
      let hash;
      for (const key in value) {
        if (key === 'class' || key === 'style' || Object(__WEBPACK_IMPORTED_MODULE_1_core_util_index__["w" /* isReservedAttribute */])(key)) {
          hash = data;
        } else {
          const type = data.attrs && data.attrs.type;
          hash = asProp || __WEBPACK_IMPORTED_MODULE_0_core_config__["a" /* default */].mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            const on = data.on || (data.on = {});
            on[`update:${key}`] = function ($event) {
              value[key] = $event;
            };
          }
        }
      }
    }
  }
  return data;
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = renderStatic;
/* harmony export (immutable) */ __webpack_exports__["a"] = markOnce;

function renderStatic(index, isInFor) {
  const cached = this._staticTrees || (this._staticTrees = []);
  let tree = cached[index];

  if (tree && !isInFor) {
    return tree;
  }

  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this);
  markStatic(tree, `__static__${index}`, false);
  return tree;
}

function markOnce(tree, index, key) {
  markStatic(tree, `__once__${index}${key ? `_${key}` : ``}`, true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], `${key}_${i}`, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindObjectListeners;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);




function bindObjectListeners(data, value) {
  if (value) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["s" /* isPlainObject */])(value)) {
      "development" !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])('v-on without argument expects an Object value', this);
    } else {
      const on = data.on = data.on ? Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["h" /* extend */])({}, data.on) : {};
      for (const key in value) {
        const existing = on[key];
        const ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data;
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isRecyclableComponent */
/* unused harmony export renderRecyclableComponentTemplate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_debug__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_util_error__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_weex_util_index__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_vdom_create_component__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__virtual_component__ = __webpack_require__(57);








function isRecyclableComponent(vnode) {
  return vnode.data.attrs ? __WEBPACK_IMPORTED_MODULE_2_weex_util_index__["a" /* RECYCLE_LIST_MARKER */] in vnode.data.attrs : false;
}

function renderRecyclableComponentTemplate(vnode) {
  delete vnode.data.attrs[__WEBPACK_IMPORTED_MODULE_2_weex_util_index__["a" /* RECYCLE_LIST_MARKER */]];
  Object(__WEBPACK_IMPORTED_MODULE_4__virtual_component__["a" /* resolveVirtualComponent */])(vnode);
  const vm = Object(__WEBPACK_IMPORTED_MODULE_3_core_vdom_create_component__["b" /* createComponentInstanceForVnode */])(vnode);
  const render = vm.$options['@render'];
  if (render) {
    try {
      return render.call(vm);
    } catch (err) {
      Object(__WEBPACK_IMPORTED_MODULE_1_core_util_error__["a" /* handleError */])(err, vm, `@render`);
    }
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0_core_util_debug__["c" /* warn */])(`@render function not defined on component used in <recycle-list>. ` + `Make sure to declare \`recyclable="true"\` on the component's template.`, vm);
  }
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resolveVirtualComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_observer_watcher__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_instance_proxy__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_instance_state__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_instance_render__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_instance_events__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_instance_inject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_instance_init__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_index__ = __webpack_require__(33);













let uid = 0;

function initVirtualComponent(options = {}) {
  const vm = this;
  const componentId = options.componentId;

  vm._uid = `virtual-component-${uid++}`;

  vm._isVue = true;

  if (options && options._isComponent) {
    Object(__WEBPACK_IMPORTED_MODULE_8_core_instance_init__["a" /* initInternalComponent */])(vm, options);
  } else {
    vm.$options = Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["C" /* mergeOptions */])(Object(__WEBPACK_IMPORTED_MODULE_8_core_instance_init__["c" /* resolveConstructorOptions */])(vm.constructor), options || {}, vm);
  }

  if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_2_core_instance_proxy__["a" /* initProxy */])(vm);
  } else {}

  vm._self = vm;
  Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["e" /* initLifecycle */])(vm);
  Object(__WEBPACK_IMPORTED_MODULE_5_core_instance_events__["b" /* initEvents */])(vm);
  Object(__WEBPACK_IMPORTED_MODULE_4_core_instance_render__["a" /* initRender */])(vm);
  Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["c" /* callHook */])(vm, 'beforeCreate');
  Object(__WEBPACK_IMPORTED_MODULE_6_core_instance_inject__["a" /* initInjections */])(vm);
  Object(__WEBPACK_IMPORTED_MODULE_3_core_instance_state__["c" /* initState */])(vm);
  Object(__WEBPACK_IMPORTED_MODULE_6_core_instance_inject__["b" /* initProvide */])(vm);
  Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["c" /* callHook */])(vm, 'created');

  const data = vm.$options.data;
  const params = typeof data === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_3_core_instance_state__["b" /* getData */])(data, vm) : data || {};
  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["s" /* isPlainObject */])(params)) {
    Object(__WEBPACK_IMPORTED_MODULE_9__util_index__["c" /* updateComponentData */])(componentId, params);
  }

  Object(__WEBPACK_IMPORTED_MODULE_9__util_index__["b" /* registerComponentHook */])(componentId, 'lifecycle', 'attach', () => {
    Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["c" /* callHook */])(vm, 'beforeMount');

    const updateComponent = () => {
      vm._update(vm._vnode, false);
    };
    new __WEBPACK_IMPORTED_MODULE_1_core_observer_watcher__["a" /* default */](vm, updateComponent, __WEBPACK_IMPORTED_MODULE_0_core_util_index__["F" /* noop */], null, true);

    vm._isMounted = true;
    Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["c" /* callHook */])(vm, 'mounted');
  });

  Object(__WEBPACK_IMPORTED_MODULE_9__util_index__["b" /* registerComponentHook */])(componentId, 'lifecycle', 'detach', () => {
    vm.$destroy();
  });
}

function updateVirtualComponent(vnode) {
  const vm = this;
  const componentId = vm.$options.componentId;
  if (vm._isMounted) {
    Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["c" /* callHook */])(vm, 'beforeUpdate');
  }
  vm._vnode = vnode;
  if (vm._isMounted && componentId) {
    const data = Object.assign({}, vm._data);
    Object(__WEBPACK_IMPORTED_MODULE_9__util_index__["c" /* updateComponentData */])(componentId, data, () => {
      Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["c" /* callHook */])(vm, 'updated');
    });
  }
}

function resolveVirtualComponent(vnode) {
  const BaseCtor = vnode.componentOptions.Ctor;
  const VirtualComponent = BaseCtor.extend({});
  const cid = VirtualComponent.cid;
  VirtualComponent.prototype._init = initVirtualComponent;
  VirtualComponent.prototype._update = updateVirtualComponent;

  vnode.componentOptions.Ctor = BaseCtor.extend({
    beforeCreate() {
      const createVirtualComponent = (componentId, propsData) => {
        new VirtualComponent({
          componentId,
          propsData
        });
      };

      Object(__WEBPACK_IMPORTED_MODULE_9__util_index__["b" /* registerComponentHook */])(cid, 'lifecycle', 'create', createVirtualComponent);
    },
    beforeDestroy() {
      delete this._virtualComponents;
    }
  });
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initGlobalAPI;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__use__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixin__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extend__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__observer_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shared_constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_index__ = __webpack_require__(0);













function initGlobalAPI(Vue) {
  const configDef = {};
  configDef.get = () => __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */];
  if (true) {
    configDef.set = () => {
      Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["P" /* warn */])('Do not replace the Vue.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  Vue.util = {
    warn: __WEBPACK_IMPORTED_MODULE_8__util_index__["P" /* warn */],
    extend: __WEBPACK_IMPORTED_MODULE_8__util_index__["h" /* extend */],
    mergeOptions: __WEBPACK_IMPORTED_MODULE_8__util_index__["C" /* mergeOptions */],
    defineReactive: __WEBPACK_IMPORTED_MODULE_8__util_index__["e" /* defineReactive */]
  };

  Vue.set = __WEBPACK_IMPORTED_MODULE_5__observer_index__["d" /* set */];
  Vue.delete = __WEBPACK_IMPORTED_MODULE_5__observer_index__["b" /* del */];
  Vue.nextTick = __WEBPACK_IMPORTED_MODULE_8__util_index__["E" /* nextTick */];

  Vue.options = Object.create(null);
  __WEBPACK_IMPORTED_MODULE_6_shared_constants__["a" /* ASSET_TYPES */].forEach(type => {
    Vue.options[type + 's'] = Object.create(null);
  });

  Vue.options._base = Vue;

  Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["h" /* extend */])(Vue.options.components, __WEBPACK_IMPORTED_MODULE_7__components_index__["a" /* default */]);

  Object(__WEBPACK_IMPORTED_MODULE_1__use__["a" /* initUse */])(Vue);
  Object(__WEBPACK_IMPORTED_MODULE_2__mixin__["a" /* initMixin */])(Vue);
  Object(__WEBPACK_IMPORTED_MODULE_3__extend__["a" /* initExtend */])(Vue);
  Object(__WEBPACK_IMPORTED_MODULE_4__assets__["a" /* initAssetRegisters */])(Vue);
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initUse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);




function initUse(Vue) {
  Vue.use = function (plugin) {
    const installedPlugins = this._installedPlugins || (this._installedPlugins = []);
    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    }

    const args = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["L" /* toArray */])(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this;
  };
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);




function initMixin(Vue) {
  Vue.mixin = function (mixin) {
    this.options = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["C" /* mergeOptions */])(this.options, mixin);
    return this;
  };
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initExtend;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instance_state__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_index__ = __webpack_require__(0);






function initExtend(Vue) {
  Vue.cid = 0;
  let cid = 1;

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    const Super = this;
    const SuperId = Super.cid;
    const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    const name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      Object(__WEBPACK_IMPORTED_MODULE_2__util_index__["N" /* validateComponentName */])(name);
    }

    const Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = Object(__WEBPACK_IMPORTED_MODULE_2__util_index__["C" /* mergeOptions */])(Super.options, extendOptions);
    Sub['super'] = Super;

    if (Sub.options.props) {
      initProps(Sub);
    }
    if (Sub.options.computed) {
      initComputed(Sub);
    }

    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    __WEBPACK_IMPORTED_MODULE_0_shared_constants__["a" /* ASSET_TYPES */].forEach(function (type) {
      Sub[type] = Super[type];
    });

    if (name) {
      Sub.options.components[name] = Sub;
    }

    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = Object(__WEBPACK_IMPORTED_MODULE_2__util_index__["h" /* extend */])({}, Sub.options);

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps(Comp) {
  const props = Comp.options.props;
  for (const key in props) {
    Object(__WEBPACK_IMPORTED_MODULE_1__instance_state__["d" /* proxy */])(Comp.prototype, `_props`, key);
  }
}

function initComputed(Comp) {
  const computed = Comp.options.computed;
  for (const key in computed) {
    Object(__WEBPACK_IMPORTED_MODULE_1__instance_state__["a" /* defineComputed */])(Comp.prototype, key, computed[key]);
  }
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initAssetRegisters;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);





function initAssetRegisters(Vue) {
  __WEBPACK_IMPORTED_MODULE_0_shared_constants__["a" /* ASSET_TYPES */].forEach(type => {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        if ("development" !== 'production' && type === 'component') {
          Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["N" /* validateComponentName */])(id);
        }
        if (type === 'component' && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["s" /* isPlainObject */])(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keep_alive__ = __webpack_require__(64);


/* harmony default export */ __webpack_exports__["a"] = ({
  KeepAlive: __WEBPACK_IMPORTED_MODULE_0__keep_alive__["a" /* default */]
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_vdom_helpers_index__ = __webpack_require__(11);





function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["p" /* isRegExp */])(pattern)) {
    return pattern.test(name);
  }

  return false;
}

function pruneCache(keepAliveInstance, filter) {
  const { cache, keys, _vnode } = keepAliveInstance;
  for (const key in cache) {
    const cachedNode = cache[key];
    if (cachedNode) {
      const name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  const cached = cache[key];
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy();
  }
  cache[key] = null;
  Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["A" /* remove */])(keys, key);
}

const patternTypes = [String, RegExp, Array];

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created() {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed() {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted() {
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name));
    });
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name));
    });
  },

  render() {
    const slot = this.$slots.default;
    const vnode = Object(__WEBPACK_IMPORTED_MODULE_1_core_vdom_helpers_index__["c" /* getFirstComponentChild */])(slot);
    const componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      const name = getComponentName(componentOptions);
      const { include, exclude } = this;
      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        return vnode;
      }

      const { cache, keys } = this;
      const key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '') : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;

        Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["A" /* remove */])(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || slot && slot[0];
  }
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_vdom_patch__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_vdom_modules_index__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_index__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_ops__ = __webpack_require__(72);






const modules = __WEBPACK_IMPORTED_MODULE_2__modules_index__["a" /* default */].concat(__WEBPACK_IMPORTED_MODULE_1_core_vdom_modules_index__["a" /* default */]);

const patch = Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_patch__["a" /* createPatchFunction */])({ nodeOps: __WEBPACK_IMPORTED_MODULE_3__node_ops__, modules });
/* harmony export (immutable) */ __webpack_exports__["a"] = patch;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getTagNamespace */
/* unused harmony export isUnknownElement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_env__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_util__ = __webpack_require__(3);





const namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
/* unused harmony export namespaceMap */


const isHTMLTag = Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["w" /* makeMap */])('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');
/* unused harmony export isHTMLTag */


const isSVG = Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["w" /* makeMap */])('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
/* unused harmony export isSVG */


const isPreTag = tag => tag === 'pre';
/* unused harmony export isPreTag */


const isReservedTag = tag => {
  return isHTMLTag(tag) || isSVG(tag);
};
/* unused harmony export isReservedTag */


function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }

  if (tag === 'math') {
    return 'math';
  }
}

const unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  if (!__WEBPACK_IMPORTED_MODULE_0_core_util_env__["e" /* inBrowser */]) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  const el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

const isTextInputType = Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["w" /* makeMap */])('text,number,password,search,email,tel,url');
/* harmony export (immutable) */ __webpack_exports__["a"] = isTextInputType;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ref__ = __webpack_require__(35);



/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_1__ref__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__directives__["a" /* default */]]);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_vdom_patch__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_vdom_helpers_index__ = __webpack_require__(11);






/* harmony default export */ __webpack_exports__["a"] = ({
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, __WEBPACK_IMPORTED_MODULE_0_core_vdom_patch__["b" /* emptyNode */]);
  }
});

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  const isCreate = oldVnode === __WEBPACK_IMPORTED_MODULE_0_core_vdom_patch__["b" /* emptyNode */];
  const isDestroy = vnode === __WEBPACK_IMPORTED_MODULE_0_core_vdom_patch__["b" /* emptyNode */];
  const oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
  const newDirs = normalizeDirectives(vnode.data.directives, vnode.context);

  const dirsWithInsert = [];
  const dirsWithPostpatch = [];

  let key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      callHook(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      dir.oldValue = oldDir.value;
      callHook(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    const callInsert = () => {
      for (let i = 0; i < dirsWithInsert.length; i++) {
        callHook(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      Object(__WEBPACK_IMPORTED_MODULE_2_core_vdom_helpers_index__["d" /* mergeVNodeHook */])(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    Object(__WEBPACK_IMPORTED_MODULE_2_core_vdom_helpers_index__["d" /* mergeVNodeHook */])(vnode, 'postpatch', () => {
      for (let i = 0; i < dirsWithPostpatch.length; i++) {
        callHook(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        callHook(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

const emptyModifiers = Object.create(null);

function normalizeDirectives(dirs, vm) {
  const res = Object.create(null);
  if (!dirs) {
    return res;
  }
  let i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = Object(__WEBPACK_IMPORTED_MODULE_1_core_util_index__["J" /* resolveAsset */])(vm.$options, 'directives', dir.name, true);
  }

  return res;
}

function getRawDirName(dir) {
  return dir.rawName || `${dir.name}.${Object.keys(dir.modifiers || {}).join('.')}`;
}

function callHook(dir, hook, vnode, oldVnode, isDestroy) {
  const fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_1_core_util_index__["j" /* handleError */])(e, vnode.context, `directive ${dir.name} ${hook} hook`);
    }
  }
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attrs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(71);



/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_0__attrs__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */]]);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(36);



function updateAttrs(oldVnode, vnode) {
  if (oldVnode.data.attrs == null && vnode.data.attrs == null) return;

  const elm = vnode.elm;
  const oldAttrs = oldVnode.data.attrs || {};
  let attrs = vnode.data.attrs || {};

  if (attrs.__ob__ != null) attrs = vnode.data.attrs = Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["f" /* extend */])({}, attrs);

  for (let key in attrs) {
    let cur = attrs[key];
    let old = oldAttrs[key];
    if (old !== cur) setAttr(elm, key, cur);
  }

  for (let key in oldAttrs) {
    if (attrs[key] == null) elm.setAttribute(key, null);
  }
}

function setAttr(elm, key, value) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isBooleanAttr */])(key)) {
    if (value == null || value === false) elm.setAttribute(key, false);else elm.setAttribute(key, true);
  } else {
    elm.setAttribute(key, value);
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  create: updateAttrs,
  update: updateAttrs
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_vdom_helpers_update_listeners__ = __webpack_require__(20);


let target = null;

function add(event, handler, once, capture) {
  if (capture) throw new Error('Bubble phase events are not supported');

  if (once) {
    const oldHandler = handler;
    const _target = target;

    handler = function (ev) {
      const res = arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
      if (res !== null) remove(event, null, null, _target);
    };
  }

  target.addEventListener(event, handler);
}

function remove(event, handler, capture, _target) {
  (_target || target).removeEventListener(event);
}

function updateDOMListeners(oldVnode, vnode) {
  if (oldVnode.data.on == null && vnode.data.on == null) return;

  const on = vnode.data.on || {};
  const oldOn = oldVnode.data.on || {};

  target = vnode.elm;
  Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_helpers_update_listeners__["b" /* updateListeners */])(on, oldOn, add, remove, vnode.context);
  target = null;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  create: updateDOMListeners,
  update: updateDOMListeners
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createElement"] = createElement;
/* harmony export (immutable) */ __webpack_exports__["createElementNS"] = createElementNS;
/* harmony export (immutable) */ __webpack_exports__["createTextNode"] = createTextNode;
/* harmony export (immutable) */ __webpack_exports__["createComment"] = createComment;
/* harmony export (immutable) */ __webpack_exports__["appendChild"] = appendChild;
/* harmony export (immutable) */ __webpack_exports__["insertBefore"] = insertBefore;
/* harmony export (immutable) */ __webpack_exports__["removeChild"] = removeChild;
/* harmony export (immutable) */ __webpack_exports__["parentNode"] = parentNode;
/* harmony export (immutable) */ __webpack_exports__["nextSibling"] = nextSibling;
/* harmony export (immutable) */ __webpack_exports__["tagName"] = tagName;
/* harmony export (immutable) */ __webpack_exports__["setTextContent"] = setTextContent;
/* harmony export (immutable) */ __webpack_exports__["setAttribute"] = setAttribute;
/* harmony export (immutable) */ __webpack_exports__["setStyleScope"] = setStyleScope;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodes_textnode__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nodes_comment__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements__ = __webpack_require__(74);




function createElement(tagName, vnode) {
  const element = __WEBPACK_IMPORTED_MODULE_2__elements__[tagName];
  if (element == null) throw new Error('Unknown element ' + tagName);
  return new element(tagName);
}

function createElementNS(namespace, tagName) {
  throw new Error('Namespaced elements are not supported');
}

function createTextNode(text) {
  return new __WEBPACK_IMPORTED_MODULE_0__nodes_textnode__["a" /* TextNode */](text);
}

function createComment(text) {
  return new __WEBPACK_IMPORTED_MODULE_1__nodes_comment__["a" /* Comment */](text);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.setText(text);
}

function setAttribute(node, key, value) {
  node.setAttribute(key, value);
}

function setStyleScope(node, scopeId) {
  throw new Error('Scoped styles are not supported');
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Comment {
  constructor(text) {
    this.parentNode = null;
    this.prevSibling = null;
    this.nextSibling = null;

    this.tagName = '';

    this.text = text;
  }

  setText(text) {
    this.text = text;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Comment;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box__ = __webpack_require__(75);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return __WEBPACK_IMPORTED_MODULE_0__box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(76);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_1__button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox__ = __webpack_require__(77);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_2__checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__colorbutton__ = __webpack_require__(78);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColorButton", function() { return __WEBPACK_IMPORTED_MODULE_3__colorbutton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__combobox__ = __webpack_require__(79);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Combobox", function() { return __WEBPACK_IMPORTED_MODULE_4__combobox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datepicker__ = __webpack_require__(80);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return __WEBPACK_IMPORTED_MODULE_5__datepicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datetimepicker__ = __webpack_require__(81);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return __WEBPACK_IMPORTED_MODULE_6__datetimepicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dropdownlist__ = __webpack_require__(82);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DropdownList", function() { return __WEBPACK_IMPORTED_MODULE_7__dropdownlist__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fontbutton__ = __webpack_require__(83);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FontButton", function() { return __WEBPACK_IMPORTED_MODULE_8__fontbutton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__group__ = __webpack_require__(84);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return __WEBPACK_IMPORTED_MODULE_9__group__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progressbar__ = __webpack_require__(85);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return __WEBPACK_IMPORTED_MODULE_10__progressbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__radiobuttons__ = __webpack_require__(86);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RadioButtons", function() { return __WEBPACK_IMPORTED_MODULE_11__radiobuttons__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__separator__ = __webpack_require__(87);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Separator", function() { return __WEBPACK_IMPORTED_MODULE_12__separator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__slider__ = __webpack_require__(88);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return __WEBPACK_IMPORTED_MODULE_13__slider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__spinbox__ = __webpack_require__(89);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Spinbox", function() { return __WEBPACK_IMPORTED_MODULE_14__spinbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tab__ = __webpack_require__(90);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return __WEBPACK_IMPORTED_MODULE_15__tab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__text__ = __webpack_require__(91);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_16__text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__textarea__ = __webpack_require__(92);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return __WEBPACK_IMPORTED_MODULE_17__textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__textinput__ = __webpack_require__(93);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return __WEBPACK_IMPORTED_MODULE_18__textinput__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__timepicker__ = __webpack_require__(94);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return __WEBPACK_IMPORTED_MODULE_19__timepicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__window__ = __webpack_require__(95);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Window", function() { return __WEBPACK_IMPORTED_MODULE_20__window__["a"]; });






















/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Box extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      horizontal: false,
      padded: false
    });
  }

  _createWidget() {
    if (this.attributes.horizontal) this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiHorizontalBox();else this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiVerticalBox();
  }

  _appendWidget(childNode) {
    this.widget.append(childNode.widget, childNode.attributes.stretchy);
  }

  _removeWidget(childNode) {
    this.widget.deleteAt(childNode.widgetIndex);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.padded) this.widget.padded = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'padded') this.widget.padded = value;else super._setWidgetAttribute(key, value);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Box;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);




class Button extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiButton();
  }

  _setWidgetText(text) {
    this.widget.text = text;
  }

  _setWidgetHandler(event, handler) {
    if (event == 'click') this.widget.onClicked(handler);else super._setWidgetHandler(event, handler);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Button;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Checkbox extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      checked: false
    });
  }

  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiCheckbox();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.checked) this.widget.checked = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'checked') {
      if (this.widget.checked != value) this.widget.checked = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'toggle') {
      this.widget.onToggled(() => {
        handler(this.widget.checked);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }

  _setWidgetText(text) {
    this.widget.text = text;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Checkbox;


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class ColorButton extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      value: new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.Color(0, 0, 0, 1)
    });
  }

  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiColorButton();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    this.widget.color = this.attributes.value;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      const oldValue = this.widget.color;
      if (oldValue.r != value.r || oldValue.g != value.g || oldValue.b != value.b || oldValue.a != value.a) this.widget.color = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'change') {
      this.widget.onChanged(() => {
        handler(this.widget.color);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ColorButton;


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Combobox extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      items: [],
      value: ''
    });
  }

  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiEditableCombobox();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (!Array.isArray(this.attributes.items)) throw new Error('Combobox items must be an array');

    this.attributes.items.forEach(item => {
      this.widget.append(item);
    });

    if (this.attributes.value != '') this.widget.text = this.attributes.value;

    this.items = this.attributes.items;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'items') {
      if (!Array.isArray(value)) throw new Error('Combobox items must be an array');
      if (value.length != this.items.length) throw new Error('Combobox items cannot be changed dynamically');
      value.forEach((item, index) => {
        if (item != this.items[index]) throw new Error('Combobox items cannot be changed dynamically');
      });
    } else if (key == 'value') {
      if (this.widget.text != value) this.widget.text = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'input') {
      this.widget.onChanged(() => {
        handler(this.widget.text);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Combobox;


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);




class DatePicker extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiDatePicker();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DatePicker;


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);




class DateTimePicker extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiDateTimePicker();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DateTimePicker;


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class DropdownList extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      items: [],
      selected: 0
    });
  }

  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiCombobox();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (!Array.isArray(this.attributes.items)) throw new Error('DropdownList items must be an array');

    this.attributes.items.forEach(item => {
      this.widget.append(item);
    });

    this.widget.selected = this.attributes.selected;

    this.items = this.attributes.items;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'items') {
      if (!Array.isArray(value)) throw new Error('DropdownList items must be an array');
      if (value.length != this.items.length) throw new Error('DropdownList items cannot be changed dynamically');
      value.forEach((item, index) => {
        if (item != this.items[index]) throw new Error('DropdownList items cannot be changed dynamically');
      });
    } else if (key == 'selected') {
      if (this.widget.selected != value) this.widget.selected = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'change') {
      this.widget.onSelected(() => {
        handler(this.widget.selected);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DropdownList;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);




class FontButton extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiFontButton();
  }

  _setWidgetHandler(event, handler) {
    if (event == 'change') {
      this.widget.onChanged(() => {
        handler(this.widget.font);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }

  get font() {
    if (this.widget != null) return this.widget.font;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FontButton;


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






class Group extends __WEBPACK_IMPORTED_MODULE_2__widget__["a" /* Widget */] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      title: '',
      margined: false
    });
  }

  appendChild(childNode) {
    __WEBPACK_IMPORTED_MODULE_1__element__["a" /* Element */].prototype.appendChild.call(this, childNode);

    if (!(childNode instanceof __WEBPACK_IMPORTED_MODULE_2__widget__["a" /* Widget */])) throw new Error('Group can only contain child widget');

    if (this.childNodes.length > 1) throw new Error('Group can only contain one child element');

    if (this.widget != null) throw new Error('Group child element cannot be inserted dynamically');
  }

  insertBefore(childNode, referenceNode) {
    throw new Error('Group child element cannot be inserted dynamically');
  }

  removeChild(childNode) {
    throw new Error('Group child element cannot be removed dynamically');
  }

  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiGroup();
  }

  _appendWidget(childNode) {
    this.widget.setChild(childNode.widget);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    this.widget.title = this.attributes.title;
    if (this.attributes.margined) this.widget.margined = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'title') this.widget.title = value;else if (key == 'margined') this.widget.margined = value;else super._setWidgetAttribute(key, value);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Group;


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class ProgressBar extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      value: 0
    });
  }

  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiProgressBar();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.value != '') this.widget.setValue(this.attributes.value);
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      if (this.widget.getValue() != value) this.widget.setValue(value);
    } else {
      super._setWidgetAttribute(key, value);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProgressBar;


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class RadioButtons extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      items: [],
      selected: 0
    });
  }

  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiRadioButtons();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (!Array.isArray(this.attributes.items)) throw new Error('RadioButtons items must be an array');

    if (this.attributes.items.length == 0) throw new Error('RadioButtons items cannot be empty');

    this.attributes.items.forEach(item => {
      this.widget.append(item);
    });

    this.widget.selected = this.attributes.selected;

    this.items = this.attributes.items;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'items') {
      if (!Array.isArray(value)) throw new Error('RadioButtons items must be an array');
      if (value.length != this.items.length) throw new Error('RadioButtons items cannot be changed dynamically');
      value.forEach((item, index) => {
        if (item != this.items[index]) throw new Error('RadioButtons items cannot be changed dynamically');
      });
    } else if (key == 'selected') {
      if (this.widget.selected != value) this.widget.selected = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'change') {
      this.widget.onSelected(() => {
        handler(this.widget.selected);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RadioButtons;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Separator extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      horizontal: false
    });
  }

  _createWidget() {
    if (this.attributes.horizontal) this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiHorizontalSeparator();else this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiVerticalSeparator();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Separator;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Slider extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      value: 0,
      min: 0,
      max: 100
    });
  }

  _createWidget() {
    if (this.attributes.min >= this.attributes.max) throw new Error('Slider min value must be less than max value');

    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiSlider(this.attributes.min, this.attributes.max);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    this.widget.value = this.attributes.value;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      if (this.widget.value != value) this.widget.value = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'change') {
      this.widget.onChanged(() => {
        handler(this.widget.value);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slider;


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Spinbox extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      value: 0,
      min: 0,
      max: 100
    });
  }

  _createWidget() {
    if (this.attributes.min >= this.attributes.max) throw new Error('Spinbox min value must be less than max value');

    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiSpinbox(this.attributes.min, this.attributes.max);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    this.widget.value = this.attributes.value;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      if (this.widget.value != value) this.widget.value = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'change') {
      this.widget.onChanged(() => {
        handler(this.widget.value);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Spinbox;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Tab extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      margined: false
    });
  }

  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiTab();
  }

  _appendWidget(childNode) {
    this.widget.append(childNode.attributes.label, childNode.widget);

    if (this.attributes.margined) this.widget.setMargined(childNode.widgetIndex, true);
  }

  _removeWidget(childNode) {
    this.widget.deleteAt(childNode.widgetIndex);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tab;


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);




class Text extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiLabel();
  }

  _setWidgetText(text) {
    this.widget.text = text;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Text;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class TextArea extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      value: '',
      readonly: false
    });
  }

  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiMultilineEntry();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.value != '') this.widget.text = this.attributes.value;
    if (this.attributes.readonly) this.widget.readOnly = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      if (this.widget.text != value) {
        if (process.platform == 'win32') {
          this.widget.text = value.replace(/\n/g, '\r\n');
        } else {
          this.widget.text = value;
        }
      }
    } else if (key == 'readonly') {
      this.widget.readOnly = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'input') {
      this.widget.onChanged(() => {
        handler(this.widget.text);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextArea;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class TextInput extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      type: 'text',
      value: '',
      readonly: false
    });
  }

  _createWidget() {
    if (this.attributes.type == 'text') this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiEntry();else if (this.attributes.type == 'password') this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiPasswordEntry();else if (this.attributes.type == 'search') this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiSearchEntry();else throw new Error('Invalid TextInput type ' + this.attributes.type);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.value != '') this.widget.text = this.attributes.value;
    if (this.attributes.readonly) this.widget.readOnly = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      if (this.widget.text != value) this.widget.text = value;
    } else if (key == 'readonly') {
      this.widget.readOnly = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'input') {
      this.widget.onChanged(() => {
        handler(this.widget.text);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextInput;


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(2);




class TimePicker extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiTimePicker();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TimePicker;


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget__ = __webpack_require__(2);





class Window extends __WEBPACK_IMPORTED_MODULE_1__element__["a" /* Element */] {
  constructor(tagName) {
    super(tagName);

    this.window = null;

    this.showHandler = null;
  }

  appendChild(childNode) {
    super.appendChild(childNode);

    if (!(childNode instanceof __WEBPACK_IMPORTED_MODULE_2__widget__["a" /* Widget */])) throw new Error('Window can only contain child widgets');

    if (this.childNodes.length > 1) throw new Error('Window can only contain one child element');

    if (this.window != null) throw new Error('Window child element cannot be inserted dynamically');
  }

  insertBefore(childNode, referenceNode) {
    throw new Error('Window child element cannot be inserted dynamically');
  }

  removeChild(childNode) {
    throw new Error('Window child element cannot be removed dynamically');
  }

  setAttribute(key, value) {
    super.setAttribute(key, value);

    if (this.window != null) this._setWindowAttribute(key, value);
  }

  addEventListener(event, handler) {
    super.addEventListener(event, handler);

    if (this.window != null) this._setWindowHandler(event, handler);
  }

  removeEventListener(event) {
    super.removeEventListener(event);

    if (this.window != null) this._setWindowHandler(event, null);
  }

  _getDefaultAttributes() {
    return {
      title: 'Vuido',
      width: 400,
      height: 300,
      menu: false,
      margined: false
    };
  }

  _mountWindow() {
    this.window = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiWindow(this.attributes.title, this.attributes.width, this.attributes.height, this.attributes.menu);

    if (this.attributes.margined) this.window.margined = true;

    for (let key in this.handlers) this._setWindowHandler(key, this.handlers[key]);

    if (this.childNodes.length > 0) {
      this.childNodes[0]._mountWidget();
      this.window.setChild(this.childNodes[0].widget);
    }

    if (this.showHandler != null) this.showHandler();

    this.window.show();
  }

  _destroyWindow() {
    this.window.close();
    this.window = null;

    this.childNodes = [];
  }

  _setWindowAttribute(key, value) {
    throw new Error('Window does not have attribute ' + key);
  }

  _setWindowHandler(event, handler) {
    if (event == 'close') this.window.onClosing(handler);else if (event == 'show') this.showHandler = handler;else throw new Error('Window does not have event ' + event);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Window;


/***/ })
/******/ ])["default"];

/***/ }),

/***/ "./src/components/MainWindow.vue":
/*!***************************************!*\
  !*** ./src/components/MainWindow.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainWindow_vue_vue_type_template_id_48374cb9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainWindow.vue?vue&type=template&id=48374cb9 */ "./src/components/MainWindow.vue?vue&type=template&id=48374cb9");
/* harmony import */ var _MainWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainWindow.vue?vue&type=script&lang=js */ "./src/components/MainWindow.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainWindow_vue_vue_type_template_id_48374cb9__WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainWindow_vue_vue_type_template_id_48374cb9__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "0c0ca4e4"
  
)

component.options.__file = "src/components/MainWindow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/MainWindow.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/MainWindow.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./MainWindow.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MainWindow.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MainWindow.vue?vue&type=template&id=48374cb9":
/*!*********************************************************************!*\
  !*** ./src/components/MainWindow.vue?vue&type=template&id=48374cb9 ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWindow_vue_vue_type_template_id_48374cb9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./MainWindow.vue?vue&type=template&id=48374cb9 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MainWindow.vue?vue&type=template&id=48374cb9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWindow_vue_vue_type_template_id_48374cb9__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWindow_vue_vue_type_template_id_48374cb9__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libui-node */ "libui-node");
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuido */ "./node_modules/vuido/dist/vuido.js");
/* harmony import */ var vuido__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuido__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MainWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MainWindow */ "./src/components/MainWindow.vue");





const window = new vuido__WEBPACK_IMPORTED_MODULE_1___default.a({
  render: h => h(_components_MainWindow__WEBPACK_IMPORTED_MODULE_2__["default"])
});

window.$mount();

libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.startLoop();

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "libui-node":
/*!*****************************!*\
  !*** external "libui-node" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("libui-node");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ })

/******/ });