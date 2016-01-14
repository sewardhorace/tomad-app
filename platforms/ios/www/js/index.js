/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        // document.addEventListener('deviceready', this.onDeviceReady, false);

        //button touch events
        // var messages = ["third", "first", "second"];
        // $("button").each(function (idx){
        //   var data = {args : messages[idx]};
        //   $(this).on('touchstart', function (e) {
        //     $(this).text("ButtFart");
        //     $.ajax({
        //         type: "POST",
        //         url: "https://api.particle.io/v1/devices/3f0020000e47343432313031/activate?access_token=8b2439c0e2c61259753e35803af98fe2953ac2ca",
        //         data: data,
        //         success: function (data) {
        //           console.log("lit up section "+data.return_value);
        //         }
        //     });
        //   });
        // });

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    // onDeviceReady: function() {
    //     app.receivedEvent('deviceready');
    // },
    //
    // // Update DOM on a Received Event
    // receivedEvent: function(id) {
    //     var parentElement = document.getElementById(id);
    //     // var listeningElement = parentElement.querySelector('.listening');
    //     // var receivedElement = parentElement.querySelector('.received');
    //     //
    //     // listeningElement.setAttribute('style', 'display:none;');
    //     // receivedElement.setAttribute('style', 'display:block;');
    //
    //     console.log('Received Event: ' + id);
    // }
};

app.initialize();
