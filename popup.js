// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function hello() {
  chrome.tabs.executeScript({
    file: 'myscript.js'
  }); 
}

chrome.browserAction.onClicked.addListener(hello());


