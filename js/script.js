// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-02-JS/sw.js", {
    scope: "/ICS2O-Unit6-02-JS/",
  })
}

function onLoadCookieCount() {
  if (localStorage.previousCookieCount) {
    document.getElementById("cookie-count").innerHTML =
      "Your cookie count is " + localStorage.previousCookieCount + "."
  } else {
    localStorage.previousCookieCount = 0
  }
}

/**
 * This function adds to a cookie counter with every click
 */
var counter = 0

function myButtonClicked() {
  localStorage.previousCookieCount++
  document.getElementById("cookie-count").innerHTML =
    "Your cookie count is " + localStorage.previousCookieCount + "."
}
