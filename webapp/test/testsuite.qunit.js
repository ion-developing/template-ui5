sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: template",
		defaults: {
			page: "ui5://test-resources/template/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "template/",
				never: "test-resources/template/"
			},
			loader: {
				paths: {
					"template": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for template"
			},
			"integration/opaTests": {
				title: "Integration tests for template"
			}
		}
	};
});
