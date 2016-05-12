/*
    Copyright (c) 2016 eyeOS

    This file is part of Open365.

    Open365 is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

var logger = {
	logLevel: process.env.LOGLEVEL || 3,
	enabled: true,

	debug: function () {
		if (this.enabled && this.logLevel >= 4) {
			console.log.apply(console, Array.prototype.slice.call(arguments));
		}
	},
	log: function () {
		if (this.enabled && this.logLevel >= 3) {
			console.log.apply(console, Array.prototype.slice.call(arguments));
		}
	},
	warn: function () {
		if (this.enabled && this.logLevel >= 2) {
			console.warn.apply(console, Array.prototype.slice.call(arguments));
		}
	},
	error: function () {
		if (this.enabled && this.logLevel >= 1) {
			console.error.apply(console, Array.prototype.slice.call(arguments));
		}
	},

	always: function () {
		if (this.enabled) {
			console.log.apply(console, Array.prototype.slice.call(arguments));
		}
	},

	enable: function () {
		this.enabled = true;
	},

	disable: function () {
		this.enabled = false;
	}
};

module.exports = logger;
