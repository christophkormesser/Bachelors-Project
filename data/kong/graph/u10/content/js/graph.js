/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 176.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 3.0], [0.9, 3.0], [1.0, 3.0], [1.1, 3.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 3.0], [4.6, 3.0], [4.7, 3.0], [4.8, 3.0], [4.9, 3.0], [5.0, 3.0], [5.1, 3.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 3.0], [5.9, 3.0], [6.0, 3.0], [6.1, 3.0], [6.2, 3.0], [6.3, 3.0], [6.4, 3.0], [6.5, 3.0], [6.6, 3.0], [6.7, 3.0], [6.8, 3.0], [6.9, 3.0], [7.0, 3.0], [7.1, 3.0], [7.2, 3.0], [7.3, 3.0], [7.4, 3.0], [7.5, 3.0], [7.6, 3.0], [7.7, 3.0], [7.8, 3.0], [7.9, 3.0], [8.0, 3.0], [8.1, 3.0], [8.2, 3.0], [8.3, 3.0], [8.4, 3.0], [8.5, 3.0], [8.6, 3.0], [8.7, 3.0], [8.8, 3.0], [8.9, 3.0], [9.0, 3.0], [9.1, 4.0], [9.2, 4.0], [9.3, 4.0], [9.4, 4.0], [9.5, 4.0], [9.6, 4.0], [9.7, 4.0], [9.8, 4.0], [9.9, 4.0], [10.0, 4.0], [10.1, 4.0], [10.2, 4.0], [10.3, 4.0], [10.4, 4.0], [10.5, 4.0], [10.6, 4.0], [10.7, 4.0], [10.8, 4.0], [10.9, 4.0], [11.0, 4.0], [11.1, 4.0], [11.2, 4.0], [11.3, 4.0], [11.4, 4.0], [11.5, 4.0], [11.6, 4.0], [11.7, 4.0], [11.8, 4.0], [11.9, 4.0], [12.0, 4.0], [12.1, 4.0], [12.2, 4.0], [12.3, 4.0], [12.4, 4.0], [12.5, 4.0], [12.6, 4.0], [12.7, 4.0], [12.8, 4.0], [12.9, 4.0], [13.0, 4.0], [13.1, 4.0], [13.2, 4.0], [13.3, 4.0], [13.4, 4.0], [13.5, 4.0], [13.6, 4.0], [13.7, 4.0], [13.8, 4.0], [13.9, 4.0], [14.0, 4.0], [14.1, 4.0], [14.2, 4.0], [14.3, 4.0], [14.4, 4.0], [14.5, 4.0], [14.6, 4.0], [14.7, 4.0], [14.8, 4.0], [14.9, 4.0], [15.0, 4.0], [15.1, 4.0], [15.2, 4.0], [15.3, 4.0], [15.4, 4.0], [15.5, 4.0], [15.6, 4.0], [15.7, 4.0], [15.8, 4.0], [15.9, 4.0], [16.0, 4.0], [16.1, 4.0], [16.2, 4.0], [16.3, 4.0], [16.4, 4.0], [16.5, 4.0], [16.6, 4.0], [16.7, 4.0], [16.8, 4.0], [16.9, 4.0], [17.0, 4.0], [17.1, 4.0], [17.2, 4.0], [17.3, 4.0], [17.4, 4.0], [17.5, 4.0], [17.6, 4.0], [17.7, 4.0], [17.8, 4.0], [17.9, 4.0], [18.0, 4.0], [18.1, 4.0], [18.2, 4.0], [18.3, 4.0], [18.4, 4.0], [18.5, 4.0], [18.6, 4.0], [18.7, 4.0], [18.8, 4.0], [18.9, 4.0], [19.0, 4.0], [19.1, 4.0], [19.2, 4.0], [19.3, 4.0], [19.4, 4.0], [19.5, 4.0], [19.6, 4.0], [19.7, 4.0], [19.8, 4.0], [19.9, 4.0], [20.0, 4.0], [20.1, 4.0], [20.2, 4.0], [20.3, 4.0], [20.4, 4.0], [20.5, 4.0], [20.6, 4.0], [20.7, 4.0], [20.8, 4.0], [20.9, 4.0], [21.0, 4.0], [21.1, 4.0], [21.2, 4.0], [21.3, 4.0], [21.4, 4.0], [21.5, 4.0], [21.6, 4.0], [21.7, 4.0], [21.8, 4.0], [21.9, 4.0], [22.0, 4.0], [22.1, 4.0], [22.2, 4.0], [22.3, 4.0], [22.4, 4.0], [22.5, 4.0], [22.6, 4.0], [22.7, 4.0], [22.8, 4.0], [22.9, 4.0], [23.0, 4.0], [23.1, 4.0], [23.2, 4.0], [23.3, 4.0], [23.4, 4.0], [23.5, 4.0], [23.6, 4.0], [23.7, 4.0], [23.8, 4.0], [23.9, 4.0], [24.0, 4.0], [24.1, 4.0], [24.2, 4.0], [24.3, 4.0], [24.4, 4.0], [24.5, 4.0], [24.6, 4.0], [24.7, 4.0], [24.8, 4.0], [24.9, 4.0], [25.0, 4.0], [25.1, 4.0], [25.2, 4.0], [25.3, 4.0], [25.4, 4.0], [25.5, 4.0], [25.6, 4.0], [25.7, 4.0], [25.8, 4.0], [25.9, 4.0], [26.0, 4.0], [26.1, 4.0], [26.2, 4.0], [26.3, 4.0], [26.4, 4.0], [26.5, 4.0], [26.6, 4.0], [26.7, 4.0], [26.8, 4.0], [26.9, 4.0], [27.0, 4.0], [27.1, 4.0], [27.2, 4.0], [27.3, 4.0], [27.4, 4.0], [27.5, 4.0], [27.6, 4.0], [27.7, 4.0], [27.8, 4.0], [27.9, 4.0], [28.0, 4.0], [28.1, 4.0], [28.2, 4.0], [28.3, 4.0], [28.4, 4.0], [28.5, 4.0], [28.6, 4.0], [28.7, 4.0], [28.8, 4.0], [28.9, 4.0], [29.0, 4.0], [29.1, 4.0], [29.2, 4.0], [29.3, 4.0], [29.4, 4.0], [29.5, 4.0], [29.6, 4.0], [29.7, 4.0], [29.8, 4.0], [29.9, 4.0], [30.0, 4.0], [30.1, 4.0], [30.2, 4.0], [30.3, 4.0], [30.4, 4.0], [30.5, 4.0], [30.6, 4.0], [30.7, 4.0], [30.8, 4.0], [30.9, 4.0], [31.0, 4.0], [31.1, 4.0], [31.2, 4.0], [31.3, 4.0], [31.4, 4.0], [31.5, 4.0], [31.6, 4.0], [31.7, 4.0], [31.8, 4.0], [31.9, 4.0], [32.0, 4.0], [32.1, 4.0], [32.2, 4.0], [32.3, 4.0], [32.4, 4.0], [32.5, 4.0], [32.6, 4.0], [32.7, 5.0], [32.8, 5.0], [32.9, 5.0], [33.0, 5.0], [33.1, 5.0], [33.2, 5.0], [33.3, 5.0], [33.4, 5.0], [33.5, 5.0], [33.6, 5.0], [33.7, 5.0], [33.8, 5.0], [33.9, 5.0], [34.0, 5.0], [34.1, 5.0], [34.2, 5.0], [34.3, 5.0], [34.4, 5.0], [34.5, 5.0], [34.6, 5.0], [34.7, 5.0], [34.8, 5.0], [34.9, 5.0], [35.0, 5.0], [35.1, 5.0], [35.2, 5.0], [35.3, 5.0], [35.4, 5.0], [35.5, 5.0], [35.6, 5.0], [35.7, 5.0], [35.8, 5.0], [35.9, 5.0], [36.0, 5.0], [36.1, 5.0], [36.2, 5.0], [36.3, 5.0], [36.4, 5.0], [36.5, 5.0], [36.6, 5.0], [36.7, 5.0], [36.8, 5.0], [36.9, 5.0], [37.0, 5.0], [37.1, 5.0], [37.2, 5.0], [37.3, 5.0], [37.4, 5.0], [37.5, 5.0], [37.6, 5.0], [37.7, 5.0], [37.8, 5.0], [37.9, 5.0], [38.0, 5.0], [38.1, 5.0], [38.2, 5.0], [38.3, 5.0], [38.4, 5.0], [38.5, 5.0], [38.6, 5.0], [38.7, 5.0], [38.8, 5.0], [38.9, 5.0], [39.0, 5.0], [39.1, 5.0], [39.2, 5.0], [39.3, 5.0], [39.4, 5.0], [39.5, 5.0], [39.6, 5.0], [39.7, 5.0], [39.8, 5.0], [39.9, 5.0], [40.0, 5.0], [40.1, 5.0], [40.2, 5.0], [40.3, 5.0], [40.4, 5.0], [40.5, 5.0], [40.6, 5.0], [40.7, 5.0], [40.8, 5.0], [40.9, 5.0], [41.0, 5.0], [41.1, 5.0], [41.2, 5.0], [41.3, 5.0], [41.4, 5.0], [41.5, 5.0], [41.6, 5.0], [41.7, 5.0], [41.8, 5.0], [41.9, 5.0], [42.0, 5.0], [42.1, 5.0], [42.2, 5.0], [42.3, 5.0], [42.4, 5.0], [42.5, 5.0], [42.6, 5.0], [42.7, 5.0], [42.8, 5.0], [42.9, 5.0], [43.0, 5.0], [43.1, 5.0], [43.2, 5.0], [43.3, 5.0], [43.4, 5.0], [43.5, 5.0], [43.6, 5.0], [43.7, 5.0], [43.8, 5.0], [43.9, 5.0], [44.0, 5.0], [44.1, 5.0], [44.2, 5.0], [44.3, 5.0], [44.4, 5.0], [44.5, 5.0], [44.6, 5.0], [44.7, 5.0], [44.8, 5.0], [44.9, 5.0], [45.0, 5.0], [45.1, 5.0], [45.2, 5.0], [45.3, 5.0], [45.4, 5.0], [45.5, 5.0], [45.6, 5.0], [45.7, 5.0], [45.8, 5.0], [45.9, 5.0], [46.0, 5.0], [46.1, 5.0], [46.2, 5.0], [46.3, 5.0], [46.4, 5.0], [46.5, 5.0], [46.6, 5.0], [46.7, 5.0], [46.8, 5.0], [46.9, 5.0], [47.0, 5.0], [47.1, 5.0], [47.2, 5.0], [47.3, 5.0], [47.4, 5.0], [47.5, 5.0], [47.6, 5.0], [47.7, 5.0], [47.8, 5.0], [47.9, 5.0], [48.0, 5.0], [48.1, 5.0], [48.2, 5.0], [48.3, 5.0], [48.4, 5.0], [48.5, 5.0], [48.6, 5.0], [48.7, 5.0], [48.8, 5.0], [48.9, 5.0], [49.0, 5.0], [49.1, 5.0], [49.2, 5.0], [49.3, 5.0], [49.4, 5.0], [49.5, 5.0], [49.6, 5.0], [49.7, 5.0], [49.8, 5.0], [49.9, 5.0], [50.0, 5.0], [50.1, 5.0], [50.2, 5.0], [50.3, 5.0], [50.4, 5.0], [50.5, 5.0], [50.6, 5.0], [50.7, 5.0], [50.8, 5.0], [50.9, 5.0], [51.0, 5.0], [51.1, 5.0], [51.2, 5.0], [51.3, 5.0], [51.4, 5.0], [51.5, 5.0], [51.6, 5.0], [51.7, 5.0], [51.8, 5.0], [51.9, 5.0], [52.0, 5.0], [52.1, 5.0], [52.2, 5.0], [52.3, 5.0], [52.4, 5.0], [52.5, 5.0], [52.6, 5.0], [52.7, 5.0], [52.8, 5.0], [52.9, 5.0], [53.0, 5.0], [53.1, 5.0], [53.2, 5.0], [53.3, 5.0], [53.4, 5.0], [53.5, 5.0], [53.6, 5.0], [53.7, 5.0], [53.8, 5.0], [53.9, 5.0], [54.0, 5.0], [54.1, 5.0], [54.2, 5.0], [54.3, 5.0], [54.4, 5.0], [54.5, 5.0], [54.6, 5.0], [54.7, 5.0], [54.8, 5.0], [54.9, 5.0], [55.0, 5.0], [55.1, 5.0], [55.2, 6.0], [55.3, 6.0], [55.4, 6.0], [55.5, 6.0], [55.6, 6.0], [55.7, 6.0], [55.8, 6.0], [55.9, 6.0], [56.0, 6.0], [56.1, 6.0], [56.2, 6.0], [56.3, 6.0], [56.4, 6.0], [56.5, 6.0], [56.6, 6.0], [56.7, 6.0], [56.8, 6.0], [56.9, 6.0], [57.0, 6.0], [57.1, 6.0], [57.2, 6.0], [57.3, 6.0], [57.4, 6.0], [57.5, 6.0], [57.6, 6.0], [57.7, 6.0], [57.8, 6.0], [57.9, 6.0], [58.0, 6.0], [58.1, 6.0], [58.2, 6.0], [58.3, 6.0], [58.4, 6.0], [58.5, 6.0], [58.6, 6.0], [58.7, 6.0], [58.8, 6.0], [58.9, 6.0], [59.0, 6.0], [59.1, 6.0], [59.2, 6.0], [59.3, 6.0], [59.4, 6.0], [59.5, 6.0], [59.6, 6.0], [59.7, 6.0], [59.8, 6.0], [59.9, 6.0], [60.0, 6.0], [60.1, 6.0], [60.2, 6.0], [60.3, 6.0], [60.4, 6.0], [60.5, 6.0], [60.6, 6.0], [60.7, 6.0], [60.8, 6.0], [60.9, 6.0], [61.0, 6.0], [61.1, 6.0], [61.2, 6.0], [61.3, 6.0], [61.4, 6.0], [61.5, 6.0], [61.6, 6.0], [61.7, 6.0], [61.8, 6.0], [61.9, 6.0], [62.0, 6.0], [62.1, 6.0], [62.2, 6.0], [62.3, 6.0], [62.4, 6.0], [62.5, 6.0], [62.6, 6.0], [62.7, 6.0], [62.8, 6.0], [62.9, 6.0], [63.0, 6.0], [63.1, 6.0], [63.2, 6.0], [63.3, 6.0], [63.4, 6.0], [63.5, 6.0], [63.6, 6.0], [63.7, 6.0], [63.8, 6.0], [63.9, 6.0], [64.0, 6.0], [64.1, 6.0], [64.2, 6.0], [64.3, 6.0], [64.4, 6.0], [64.5, 6.0], [64.6, 6.0], [64.7, 6.0], [64.8, 6.0], [64.9, 6.0], [65.0, 6.0], [65.1, 6.0], [65.2, 6.0], [65.3, 6.0], [65.4, 6.0], [65.5, 6.0], [65.6, 6.0], [65.7, 6.0], [65.8, 6.0], [65.9, 6.0], [66.0, 6.0], [66.1, 6.0], [66.2, 6.0], [66.3, 6.0], [66.4, 6.0], [66.5, 6.0], [66.6, 6.0], [66.7, 6.0], [66.8, 6.0], [66.9, 6.0], [67.0, 6.0], [67.1, 6.0], [67.2, 6.0], [67.3, 6.0], [67.4, 6.0], [67.5, 6.0], [67.6, 6.0], [67.7, 6.0], [67.8, 6.0], [67.9, 6.0], [68.0, 6.0], [68.1, 6.0], [68.2, 6.0], [68.3, 6.0], [68.4, 6.0], [68.5, 6.0], [68.6, 6.0], [68.7, 6.0], [68.8, 6.0], [68.9, 6.0], [69.0, 6.0], [69.1, 6.0], [69.2, 7.0], [69.3, 7.0], [69.4, 7.0], [69.5, 7.0], [69.6, 7.0], [69.7, 7.0], [69.8, 7.0], [69.9, 7.0], [70.0, 7.0], [70.1, 7.0], [70.2, 7.0], [70.3, 7.0], [70.4, 7.0], [70.5, 7.0], [70.6, 7.0], [70.7, 7.0], [70.8, 7.0], [70.9, 7.0], [71.0, 7.0], [71.1, 7.0], [71.2, 7.0], [71.3, 7.0], [71.4, 7.0], [71.5, 7.0], [71.6, 7.0], [71.7, 7.0], [71.8, 7.0], [71.9, 7.0], [72.0, 7.0], [72.1, 7.0], [72.2, 7.0], [72.3, 7.0], [72.4, 7.0], [72.5, 7.0], [72.6, 7.0], [72.7, 7.0], [72.8, 7.0], [72.9, 7.0], [73.0, 7.0], [73.1, 7.0], [73.2, 7.0], [73.3, 7.0], [73.4, 7.0], [73.5, 7.0], [73.6, 7.0], [73.7, 7.0], [73.8, 7.0], [73.9, 7.0], [74.0, 7.0], [74.1, 7.0], [74.2, 7.0], [74.3, 7.0], [74.4, 7.0], [74.5, 7.0], [74.6, 7.0], [74.7, 7.0], [74.8, 7.0], [74.9, 7.0], [75.0, 7.0], [75.1, 7.0], [75.2, 7.0], [75.3, 7.0], [75.4, 7.0], [75.5, 7.0], [75.6, 7.0], [75.7, 7.0], [75.8, 7.0], [75.9, 7.0], [76.0, 7.0], [76.1, 7.0], [76.2, 7.0], [76.3, 7.0], [76.4, 7.0], [76.5, 7.0], [76.6, 7.0], [76.7, 8.0], [76.8, 8.0], [76.9, 8.0], [77.0, 8.0], [77.1, 8.0], [77.2, 8.0], [77.3, 8.0], [77.4, 8.0], [77.5, 8.0], [77.6, 8.0], [77.7, 8.0], [77.8, 8.0], [77.9, 8.0], [78.0, 8.0], [78.1, 8.0], [78.2, 8.0], [78.3, 8.0], [78.4, 8.0], [78.5, 8.0], [78.6, 8.0], [78.7, 8.0], [78.8, 8.0], [78.9, 8.0], [79.0, 8.0], [79.1, 8.0], [79.2, 8.0], [79.3, 8.0], [79.4, 8.0], [79.5, 8.0], [79.6, 8.0], [79.7, 8.0], [79.8, 8.0], [79.9, 8.0], [80.0, 8.0], [80.1, 8.0], [80.2, 8.0], [80.3, 8.0], [80.4, 8.0], [80.5, 8.0], [80.6, 8.0], [80.7, 8.0], [80.8, 9.0], [80.9, 9.0], [81.0, 9.0], [81.1, 9.0], [81.2, 9.0], [81.3, 9.0], [81.4, 9.0], [81.5, 9.0], [81.6, 9.0], [81.7, 9.0], [81.8, 9.0], [81.9, 9.0], [82.0, 9.0], [82.1, 9.0], [82.2, 9.0], [82.3, 9.0], [82.4, 9.0], [82.5, 9.0], [82.6, 9.0], [82.7, 9.0], [82.8, 10.0], [82.9, 10.0], [83.0, 10.0], [83.1, 10.0], [83.2, 10.0], [83.3, 10.0], [83.4, 10.0], [83.5, 10.0], [83.6, 10.0], [83.7, 10.0], [83.8, 10.0], [83.9, 11.0], [84.0, 11.0], [84.1, 11.0], [84.2, 11.0], [84.3, 11.0], [84.4, 11.0], [84.5, 11.0], [84.6, 12.0], [84.7, 12.0], [84.8, 12.0], [84.9, 12.0], [85.0, 13.0], [85.1, 13.0], [85.2, 13.0], [85.3, 14.0], [85.4, 14.0], [85.5, 15.0], [85.6, 15.0], [85.7, 16.0], [85.8, 18.0], [85.9, 19.0], [86.0, 21.0], [86.1, 22.0], [86.2, 24.0], [86.3, 25.0], [86.4, 26.0], [86.5, 27.0], [86.6, 28.0], [86.7, 28.0], [86.8, 29.0], [86.9, 29.0], [87.0, 30.0], [87.1, 30.0], [87.2, 30.0], [87.3, 31.0], [87.4, 31.0], [87.5, 31.0], [87.6, 32.0], [87.7, 32.0], [87.8, 32.0], [87.9, 33.0], [88.0, 33.0], [88.1, 33.0], [88.2, 33.0], [88.3, 34.0], [88.4, 34.0], [88.5, 34.0], [88.6, 34.0], [88.7, 35.0], [88.8, 35.0], [88.9, 35.0], [89.0, 36.0], [89.1, 36.0], [89.2, 36.0], [89.3, 37.0], [89.4, 37.0], [89.5, 38.0], [89.6, 39.0], [89.7, 39.0], [89.8, 40.0], [89.9, 41.0], [90.0, 42.0], [90.1, 43.0], [90.2, 44.0], [90.3, 45.0], [90.4, 46.0], [90.5, 48.0], [90.6, 51.0], [90.7, 55.0], [90.8, 60.0], [90.9, 64.0], [91.0, 67.0], [91.1, 69.0], [91.2, 70.0], [91.3, 72.0], [91.4, 73.0], [91.5, 74.0], [91.6, 75.0], [91.7, 76.0], [91.8, 76.0], [91.9, 77.0], [92.0, 77.0], [92.1, 78.0], [92.2, 78.0], [92.3, 79.0], [92.4, 79.0], [92.5, 79.0], [92.6, 80.0], [92.7, 80.0], [92.8, 80.0], [92.9, 80.0], [93.0, 81.0], [93.1, 81.0], [93.2, 81.0], [93.3, 81.0], [93.4, 82.0], [93.5, 82.0], [93.6, 82.0], [93.7, 82.0], [93.8, 82.0], [93.9, 83.0], [94.0, 83.0], [94.1, 83.0], [94.2, 83.0], [94.3, 83.0], [94.4, 84.0], [94.5, 84.0], [94.6, 84.0], [94.7, 84.0], [94.8, 84.0], [94.9, 84.0], [95.0, 84.0], [95.1, 85.0], [95.2, 85.0], [95.3, 85.0], [95.4, 85.0], [95.5, 85.0], [95.6, 85.0], [95.7, 85.0], [95.8, 86.0], [95.9, 86.0], [96.0, 86.0], [96.1, 86.0], [96.2, 86.0], [96.3, 86.0], [96.4, 86.0], [96.5, 87.0], [96.6, 87.0], [96.7, 87.0], [96.8, 87.0], [96.9, 87.0], [97.0, 87.0], [97.1, 87.0], [97.2, 88.0], [97.3, 88.0], [97.4, 88.0], [97.5, 88.0], [97.6, 88.0], [97.7, 88.0], [97.8, 88.0], [97.9, 89.0], [98.0, 89.0], [98.1, 89.0], [98.2, 89.0], [98.3, 89.0], [98.4, 89.0], [98.5, 90.0], [98.6, 90.0], [98.7, 90.0], [98.8, 90.0], [98.9, 91.0], [99.0, 91.0], [99.1, 91.0], [99.2, 91.0], [99.3, 92.0], [99.4, 92.0], [99.5, 92.0], [99.6, 93.0], [99.7, 94.0], [99.8, 94.0], [99.9, 96.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 119.0, "minX": 0.0, "maxY": 424610.0, "series": [{"data": [[0.0, 424610.0], [100.0, 119.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 424729.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 424729.0, "series": [{"data": [[0.0, 424729.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.6647727272727273, "minX": 1.71250092E12, "maxY": 10.0, "series": [{"data": [[1.71250104E12, 10.0], [1.71250152E12, 9.99977505061361], [1.71250122E12, 10.0], [1.71250092E12, 1.6647727272727273], [1.7125014E12, 10.0], [1.7125011E12, 10.0], [1.71250128E12, 10.0], [1.71250098E12, 9.790027304059784], [1.71250146E12, 10.0], [1.71250116E12, 10.0], [1.71250134E12, 10.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250152E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 3.3050847457627115, "minX": 1.0, "maxY": 14.083420004596038, "series": [{"data": [[1.0, 3.3050847457627115], [2.0, 3.4649681528662426], [4.0, 3.927083333333334], [8.0, 5.414187643020598], [9.0, 11.776632302405497], [5.0, 4.305637982195845], [10.0, 14.083420004596038], [3.0, 3.668141592920353], [6.0, 4.4896907216494855], [7.0, 4.479028697571741]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.974435463554393, 14.028302753049607]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 389.85, "minX": 1.71250092E12, "maxY": 371699.0333333333, "series": [{"data": [[1.71250104E12, 352638.51666666666], [1.71250152E12, 332833.88333333336], [1.71250122E12, 351057.5], [1.71250092E12, 1463.7333333333333], [1.7125014E12, 357378.25], [1.7125011E12, 355933.7166666667], [1.71250128E12, 358952.35], [1.71250098E12, 371699.0333333333], [1.71250146E12, 357225.26666666666], [1.71250116E12, 349478.0833333333], [1.71250134E12, 344621.7833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71250104E12, 93907.96666666666], [1.71250152E12, 88633.28333333334], [1.71250122E12, 93487.06666666667], [1.71250092E12, 389.85], [1.7125014E12, 95170.8], [1.7125011E12, 94785.23333333334], [1.71250128E12, 95589.48333333334], [1.71250098E12, 98985.5], [1.71250146E12, 95128.55], [1.71250116E12, 93066.16666666667], [1.71250134E12, 91772.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250152E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 3.3920454545454555, "minX": 1.71250092E12, "maxY": 14.801094753680465, "series": [{"data": [[1.71250104E12, 14.094031611229026], [1.71250152E12, 14.801094753680465], [1.71250122E12, 14.144691943127942], [1.71250092E12, 3.3920454545454555], [1.7125014E12, 13.901117318435766], [1.7125011E12, 13.96286168372835], [1.71250128E12, 13.839463255231891], [1.71250098E12, 13.12915715500649], [1.71250146E12, 13.912787312824669], [1.71250116E12, 14.233682456557924], [1.71250134E12, 14.418770820257935]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250152E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 3.3522727272727275, "minX": 1.71250092E12, "maxY": 14.798345372291212, "series": [{"data": [[1.71250104E12, 14.09176692616173], [1.71250152E12, 14.798345372291212], [1.71250122E12, 14.142180094786681], [1.71250092E12, 3.3522727272727275], [1.7125014E12, 13.898836126629512], [1.7125011E12, 13.959823306689167], [1.71250128E12, 13.837215230944025], [1.71250098E12, 13.125039165659523], [1.71250146E12, 13.909853054190846], [1.71250116E12, 14.231159247798127], [1.71250134E12, 14.416429295611522]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250152E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 8.952150754218731E-5, "minX": 1.71250092E12, "maxY": 0.11363636363636354, "series": [{"data": [[1.71250104E12, 1.4154281670205246E-4], [1.71250152E12, 9.997750506136104E-5], [1.71250122E12, 1.1848341232227571E-4], [1.71250092E12, 0.11363636363636354], [1.7125014E12, 1.629422718808221E-4], [1.7125011E12, 1.168606553545553E-4], [1.71250128E12, 1.1587754061507875E-4], [1.71250098E12, 8.952150754218731E-5], [1.71250146E12, 1.1643883468014323E-4], [1.71250116E12, 9.521542489883366E-5], [1.71250134E12, 1.4483657606334258E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250152E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.71250092E12, "maxY": 176.0, "series": [{"data": [[1.71250104E12, 116.0], [1.71250152E12, 131.0], [1.71250122E12, 105.0], [1.71250092E12, 28.0], [1.7125014E12, 106.0], [1.7125011E12, 176.0], [1.71250128E12, 173.0], [1.71250098E12, 103.0], [1.71250146E12, 127.0], [1.71250116E12, 106.0], [1.71250134E12, 108.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71250104E12, 1.0], [1.71250152E12, 2.0], [1.71250122E12, 2.0], [1.71250092E12, 2.0], [1.7125014E12, 2.0], [1.7125011E12, 2.0], [1.71250128E12, 2.0], [1.71250098E12, 2.0], [1.71250146E12, 2.0], [1.71250116E12, 2.0], [1.71250134E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71250104E12, 82.0], [1.71250152E12, 37.0], [1.71250122E12, 75.0], [1.71250092E12, 4.0], [1.7125014E12, 34.0], [1.7125011E12, 80.90000000000146], [1.71250128E12, 43.0], [1.71250098E12, 79.0], [1.71250146E12, 33.0], [1.71250116E12, 80.0], [1.71250134E12, 38.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71250104E12, 92.0], [1.71250152E12, 90.0], [1.71250122E12, 91.0], [1.71250092E12, 14.139999999999816], [1.7125014E12, 90.0], [1.7125011E12, 92.0], [1.71250128E12, 91.0], [1.71250098E12, 91.0], [1.71250146E12, 90.0], [1.71250116E12, 91.0], [1.71250134E12, 91.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71250104E12, 5.0], [1.71250152E12, 6.0], [1.71250122E12, 5.0], [1.71250092E12, 3.0], [1.7125014E12, 5.0], [1.7125011E12, 5.0], [1.71250128E12, 5.0], [1.71250098E12, 5.0], [1.71250146E12, 5.0], [1.71250116E12, 5.0], [1.71250134E12, 5.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71250104E12, 87.0], [1.71250152E12, 80.0], [1.71250122E12, 86.0], [1.71250092E12, 5.0], [1.7125014E12, 83.0], [1.7125011E12, 86.0], [1.71250128E12, 84.0], [1.71250098E12, 86.0], [1.71250146E12, 80.0], [1.71250116E12, 86.0], [1.71250134E12, 84.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250152E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 118.0, "maxY": 9.0, "series": [{"data": [[118.0, 9.0], [176.0, 3.0], [298.0, 8.0], [297.0, 8.0], [302.0, 8.0], [299.0, 7.0], [294.0, 8.0], [300.0, 7.0], [303.0, 8.0], [318.0, 7.0], [312.0, 8.0], [314.0, 7.0], [315.0, 7.0], [313.0, 7.0], [306.0, 7.0], [310.0, 7.0], [316.0, 8.0], [307.0, 8.0], [317.0, 7.0], [311.0, 7.0], [305.0, 9.0], [319.0, 7.0], [309.0, 7.0], [308.0, 7.0], [322.0, 7.0], [330.0, 7.0], [327.0, 7.0], [332.0, 7.0], [323.0, 7.0], [334.0, 7.0], [333.0, 6.0], [325.0, 8.0], [324.0, 7.0], [326.0, 7.0], [331.0, 7.0], [329.0, 7.0], [328.0, 7.0], [335.0, 7.0], [320.0, 7.0], [321.0, 7.0], [339.0, 7.0], [347.0, 7.0], [346.0, 7.0], [345.0, 7.0], [344.0, 7.0], [340.0, 7.0], [342.0, 7.0], [349.0, 7.0], [348.0, 7.0], [350.0, 7.0], [351.0, 7.0], [337.0, 7.0], [338.0, 6.0], [336.0, 7.0], [343.0, 7.0], [341.0, 7.0], [353.0, 7.0], [354.0, 7.0], [356.0, 7.0], [359.0, 7.0], [358.0, 6.0], [355.0, 7.0], [365.0, 7.0], [364.0, 7.0], [361.0, 7.0], [360.0, 7.0], [357.0, 7.0], [352.0, 7.0], [363.0, 6.0], [362.0, 7.0], [372.0, 7.0], [373.0, 6.0], [371.0, 7.0], [377.0, 6.0], [383.0, 6.0], [380.0, 6.0], [381.0, 7.0], [374.0, 8.0], [396.0, 6.0], [389.0, 6.0], [397.0, 6.0], [394.0, 6.0], [392.0, 6.0], [395.0, 6.0], [387.0, 6.0], [398.0, 6.0], [399.0, 7.0], [410.0, 7.0], [401.0, 7.0], [408.0, 6.0], [409.0, 6.0], [413.0, 6.0], [418.0, 6.0], [423.0, 6.0], [430.0, 6.0], [426.0, 6.0], [434.0, 6.0], [447.0, 6.0], [456.0, 6.0], [452.0, 6.0], [451.0, 6.0], [460.0, 5.0], [459.0, 7.0], [477.0, 6.0], [469.0, 6.0], [493.0, 6.0], [499.0, 6.0], [503.0, 5.0], [520.0, 5.0], [531.0, 6.0], [543.0, 6.0], [529.0, 6.0], [522.0, 6.0], [525.0, 6.0], [537.0, 5.0], [575.0, 6.0], [547.0, 6.0], [567.0, 5.0], [557.0, 6.0], [555.0, 5.0], [553.0, 5.0], [554.0, 6.0], [566.0, 5.0], [561.0, 6.0], [570.0, 5.0], [550.0, 6.0], [600.0, 5.0], [605.0, 5.0], [585.0, 5.0], [593.0, 6.0], [588.0, 6.0], [595.0, 6.0], [582.0, 5.0], [581.0, 5.0], [583.0, 5.0], [599.0, 5.0], [626.0, 5.0], [621.0, 5.0], [628.0, 5.0], [627.0, 5.0], [613.0, 7.0], [658.0, 6.0], [640.0, 5.0], [669.0, 5.0], [659.0, 5.0], [645.0, 5.0], [665.0, 5.0], [641.0, 6.0], [678.0, 5.0], [702.0, 5.0], [672.0, 5.0], [674.0, 5.0], [695.0, 5.0], [700.0, 5.0], [687.0, 6.0], [680.0, 5.0], [711.0, 5.0], [713.0, 5.0], [725.0, 6.0], [724.0, 5.0], [717.0, 5.0], [707.0, 5.0], [722.0, 5.0], [758.0, 5.0], [765.0, 5.0], [748.0, 5.0], [742.0, 5.0], [746.0, 5.0], [739.0, 5.0], [747.0, 5.0], [776.0, 5.0], [780.0, 5.0], [786.0, 5.0], [781.0, 5.0], [769.0, 5.0], [824.0, 5.0], [810.0, 5.0], [809.0, 6.0], [816.0, 5.0], [805.0, 5.0], [831.0, 5.0], [817.0, 5.0], [806.0, 5.0], [819.0, 5.0], [846.0, 5.0], [834.0, 5.0], [836.0, 5.0], [832.0, 5.0], [838.0, 5.0], [859.0, 5.0], [849.0, 7.0], [866.0, 5.0], [869.0, 5.0], [882.0, 5.0], [873.0, 5.0], [889.0, 5.0], [883.0, 5.0], [881.0, 5.0], [890.0, 5.0], [921.0, 4.0], [917.0, 5.0], [902.0, 5.0], [912.0, 5.0], [910.0, 6.0], [956.0, 5.0], [946.0, 5.0], [937.0, 5.0], [931.0, 5.0], [928.0, 7.0], [953.0, 5.0], [945.0, 5.0], [950.0, 5.0], [948.0, 5.0], [957.0, 5.0], [958.0, 5.0], [959.0, 5.0], [955.0, 5.0], [979.0, 5.0], [980.0, 5.0], [972.0, 5.0], [966.0, 5.0], [967.0, 5.0], [975.0, 5.0], [978.0, 5.0], [968.0, 6.0], [989.0, 7.0], [998.0, 5.0], [1023.0, 5.0], [1003.0, 5.0], [1009.0, 5.0], [1008.0, 5.0], [1011.0, 5.0], [1013.0, 6.0], [1005.0, 5.0], [995.0, 5.0], [1001.0, 5.0], [999.0, 5.0], [1022.0, 6.0], [1002.0, 5.0], [1037.0, 5.0], [1077.0, 5.0], [1039.0, 5.0], [1038.0, 5.0], [1086.0, 5.0], [1066.0, 5.0], [1065.0, 5.0], [1051.0, 5.0], [1040.0, 5.0], [1049.0, 6.0], [1024.0, 5.0], [1029.0, 5.0], [1035.0, 7.0], [1056.0, 5.0], [1143.0, 5.0], [1097.0, 5.0], [1122.0, 5.0], [1113.0, 5.0], [1138.0, 5.0], [1149.0, 5.0], [1146.0, 5.0], [1125.0, 5.0], [1129.0, 5.0], [1110.0, 5.0], [1106.0, 5.0], [1164.0, 4.0], [1181.0, 5.0], [1182.0, 5.0], [1178.0, 5.0], [1171.0, 5.0], [1207.0, 5.0], [1206.0, 5.0], [1205.0, 5.0], [1203.0, 5.0], [1165.0, 5.0], [1167.0, 5.0], [1183.0, 5.0], [1194.0, 5.0], [1188.0, 5.0], [1153.0, 5.0], [1155.0, 5.0], [1152.0, 5.0], [1196.0, 5.0], [1199.0, 5.0], [1275.0, 5.0], [1228.0, 5.0], [1255.0, 5.0], [1279.0, 5.0], [1277.0, 5.0], [1257.0, 5.0], [1261.0, 5.0], [1263.0, 5.0], [1268.0, 5.0], [1265.0, 5.0], [1238.0, 5.0], [1241.0, 5.0], [1242.0, 5.0], [1251.0, 5.0], [1248.0, 5.0], [1222.0, 5.0], [1219.0, 5.0], [1247.0, 5.0], [1227.0, 5.0], [1243.0, 5.0], [1311.0, 5.0], [1318.0, 5.0], [1334.0, 5.0], [1329.0, 5.0], [1295.0, 5.0], [1328.0, 5.0], [1324.0, 4.0], [1299.0, 5.0], [1303.0, 5.0], [1308.0, 5.0], [1305.0, 5.0], [1284.0, 5.0], [1285.0, 5.0], [1280.0, 5.0], [1289.0, 5.0], [1297.0, 5.0], [1406.0, 5.0], [1394.0, 5.0], [1374.0, 5.0], [1388.0, 5.0], [1384.0, 5.0], [1380.0, 5.0], [1399.0, 5.0], [1400.0, 5.0], [1357.0, 5.0], [1375.0, 5.0], [1373.0, 5.0], [1365.0, 5.0], [1459.0, 5.0], [1409.0, 5.0], [1465.0, 5.0], [1428.0, 5.0], [1426.0, 5.0], [1424.0, 5.0], [1430.0, 4.0], [1441.0, 5.0], [1469.0, 5.0], [1470.0, 5.0], [1446.0, 5.0], [1448.0, 5.0], [1443.0, 5.0], [1442.0, 5.0], [1432.0, 5.0], [1408.0, 5.0], [1433.0, 5.0], [1435.0, 5.0], [1415.0, 5.0], [1413.0, 5.0], [1414.0, 5.0], [1410.0, 5.0], [1412.0, 5.0], [1423.0, 5.0], [1456.0, 5.0], [1463.0, 5.0], [1453.0, 5.0], [1452.0, 5.0], [1454.0, 5.0], [1449.0, 5.0], [1477.0, 5.0], [1485.0, 5.0], [1496.0, 5.0], [1508.0, 5.0], [1482.0, 5.0], [1492.0, 5.0], [1491.0, 5.0], [1490.0, 5.0], [1513.0, 5.0], [1517.0, 5.0], [1530.0, 5.0], [1520.0, 5.0], [1476.0, 5.0], [1502.0, 5.0], [1538.0, 5.0], [1552.0, 5.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1552.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 118.0, "maxY": 9.0, "series": [{"data": [[118.0, 9.0], [176.0, 3.0], [298.0, 8.0], [297.0, 8.0], [302.0, 8.0], [299.0, 7.0], [294.0, 8.0], [300.0, 7.0], [303.0, 8.0], [318.0, 7.0], [312.0, 8.0], [314.0, 7.0], [315.0, 7.0], [313.0, 7.0], [306.0, 7.0], [310.0, 7.0], [316.0, 8.0], [307.0, 8.0], [317.0, 7.0], [311.0, 7.0], [305.0, 9.0], [319.0, 7.0], [309.0, 7.0], [308.0, 7.0], [322.0, 7.0], [330.0, 7.0], [327.0, 7.0], [332.0, 7.0], [323.0, 7.0], [334.0, 7.0], [333.0, 6.0], [325.0, 8.0], [324.0, 7.0], [326.0, 7.0], [331.0, 7.0], [329.0, 7.0], [328.0, 7.0], [335.0, 7.0], [320.0, 7.0], [321.0, 7.0], [339.0, 7.0], [347.0, 7.0], [346.0, 7.0], [345.0, 7.0], [344.0, 7.0], [340.0, 7.0], [342.0, 7.0], [349.0, 7.0], [348.0, 7.0], [350.0, 7.0], [351.0, 7.0], [337.0, 7.0], [338.0, 6.0], [336.0, 7.0], [343.0, 7.0], [341.0, 7.0], [353.0, 7.0], [354.0, 7.0], [356.0, 7.0], [359.0, 7.0], [358.0, 6.0], [355.0, 7.0], [365.0, 7.0], [364.0, 7.0], [361.0, 7.0], [360.0, 7.0], [357.0, 7.0], [352.0, 7.0], [363.0, 6.0], [362.0, 7.0], [372.0, 7.0], [373.0, 6.0], [371.0, 7.0], [377.0, 6.0], [383.0, 6.0], [380.0, 6.0], [381.0, 7.0], [374.0, 8.0], [396.0, 6.0], [389.0, 6.0], [397.0, 6.0], [394.0, 6.0], [392.0, 6.0], [395.0, 6.0], [387.0, 6.0], [398.0, 6.0], [399.0, 7.0], [410.0, 7.0], [401.0, 7.0], [408.0, 6.0], [409.0, 6.0], [413.0, 6.0], [418.0, 6.0], [423.0, 6.0], [430.0, 6.0], [426.0, 6.0], [434.0, 6.0], [447.0, 6.0], [456.0, 6.0], [452.0, 6.0], [451.0, 6.0], [460.0, 5.0], [459.0, 7.0], [477.0, 6.0], [469.0, 6.0], [493.0, 6.0], [499.0, 6.0], [503.0, 5.0], [520.0, 5.0], [531.0, 6.0], [543.0, 6.0], [529.0, 6.0], [522.0, 6.0], [525.0, 6.0], [537.0, 5.0], [575.0, 6.0], [547.0, 6.0], [567.0, 5.0], [557.0, 6.0], [555.0, 5.0], [553.0, 5.0], [554.0, 6.0], [566.0, 5.0], [561.0, 6.0], [570.0, 5.0], [550.0, 6.0], [600.0, 5.0], [605.0, 5.0], [585.0, 5.0], [593.0, 6.0], [588.0, 6.0], [595.0, 6.0], [582.0, 5.0], [581.0, 5.0], [583.0, 5.0], [599.0, 5.0], [626.0, 5.0], [621.0, 5.0], [628.0, 5.0], [627.0, 5.0], [613.0, 7.0], [658.0, 6.0], [640.0, 5.0], [669.0, 5.0], [659.0, 5.0], [645.0, 5.0], [665.0, 5.0], [641.0, 6.0], [678.0, 5.0], [702.0, 5.0], [672.0, 5.0], [674.0, 5.0], [695.0, 5.0], [700.0, 5.0], [687.0, 6.0], [680.0, 5.0], [711.0, 5.0], [713.0, 5.0], [725.0, 6.0], [724.0, 5.0], [717.0, 5.0], [707.0, 5.0], [722.0, 5.0], [758.0, 5.0], [765.0, 5.0], [748.0, 5.0], [742.0, 5.0], [746.0, 5.0], [739.0, 5.0], [747.0, 5.0], [776.0, 5.0], [780.0, 5.0], [786.0, 5.0], [781.0, 5.0], [769.0, 5.0], [824.0, 5.0], [810.0, 5.0], [809.0, 6.0], [816.0, 5.0], [805.0, 5.0], [831.0, 5.0], [817.0, 5.0], [806.0, 5.0], [819.0, 5.0], [846.0, 5.0], [834.0, 5.0], [836.0, 5.0], [832.0, 5.0], [838.0, 5.0], [859.0, 5.0], [849.0, 7.0], [866.0, 5.0], [869.0, 5.0], [882.0, 5.0], [873.0, 5.0], [889.0, 5.0], [883.0, 5.0], [881.0, 5.0], [890.0, 5.0], [921.0, 4.0], [917.0, 5.0], [902.0, 5.0], [912.0, 5.0], [910.0, 6.0], [956.0, 5.0], [946.0, 5.0], [937.0, 5.0], [931.0, 5.0], [928.0, 7.0], [953.0, 5.0], [945.0, 5.0], [950.0, 5.0], [948.0, 5.0], [957.0, 5.0], [958.0, 5.0], [959.0, 5.0], [955.0, 5.0], [979.0, 5.0], [980.0, 5.0], [972.0, 5.0], [966.0, 5.0], [967.0, 5.0], [975.0, 5.0], [978.0, 5.0], [968.0, 6.0], [989.0, 7.0], [998.0, 5.0], [1023.0, 5.0], [1003.0, 5.0], [1009.0, 5.0], [1008.0, 5.0], [1011.0, 5.0], [1013.0, 6.0], [1005.0, 5.0], [995.0, 5.0], [1001.0, 5.0], [999.0, 5.0], [1022.0, 6.0], [1002.0, 5.0], [1037.0, 5.0], [1077.0, 5.0], [1039.0, 5.0], [1038.0, 5.0], [1086.0, 5.0], [1066.0, 5.0], [1065.0, 5.0], [1051.0, 5.0], [1040.0, 5.0], [1049.0, 6.0], [1024.0, 5.0], [1029.0, 5.0], [1035.0, 7.0], [1056.0, 5.0], [1143.0, 5.0], [1097.0, 5.0], [1122.0, 5.0], [1113.0, 5.0], [1138.0, 5.0], [1149.0, 5.0], [1146.0, 5.0], [1125.0, 5.0], [1129.0, 5.0], [1110.0, 5.0], [1106.0, 5.0], [1164.0, 4.0], [1181.0, 5.0], [1182.0, 5.0], [1178.0, 5.0], [1171.0, 5.0], [1207.0, 5.0], [1206.0, 5.0], [1205.0, 5.0], [1203.0, 5.0], [1165.0, 5.0], [1167.0, 5.0], [1183.0, 5.0], [1194.0, 5.0], [1188.0, 5.0], [1153.0, 5.0], [1155.0, 5.0], [1152.0, 5.0], [1196.0, 5.0], [1199.0, 5.0], [1275.0, 5.0], [1228.0, 5.0], [1255.0, 5.0], [1279.0, 5.0], [1277.0, 5.0], [1257.0, 5.0], [1261.0, 5.0], [1263.0, 5.0], [1268.0, 5.0], [1265.0, 5.0], [1238.0, 5.0], [1241.0, 5.0], [1242.0, 5.0], [1251.0, 5.0], [1248.0, 5.0], [1222.0, 5.0], [1219.0, 5.0], [1247.0, 5.0], [1227.0, 5.0], [1243.0, 5.0], [1311.0, 5.0], [1318.0, 5.0], [1334.0, 5.0], [1329.0, 5.0], [1295.0, 5.0], [1328.0, 5.0], [1324.0, 4.0], [1299.0, 5.0], [1303.0, 5.0], [1308.0, 5.0], [1305.0, 5.0], [1284.0, 5.0], [1285.0, 5.0], [1280.0, 5.0], [1289.0, 5.0], [1297.0, 5.0], [1406.0, 5.0], [1394.0, 5.0], [1374.0, 5.0], [1388.0, 5.0], [1384.0, 5.0], [1380.0, 5.0], [1399.0, 5.0], [1400.0, 5.0], [1357.0, 5.0], [1375.0, 5.0], [1373.0, 5.0], [1365.0, 5.0], [1459.0, 5.0], [1409.0, 5.0], [1465.0, 5.0], [1428.0, 5.0], [1426.0, 5.0], [1424.0, 5.0], [1430.0, 4.0], [1441.0, 5.0], [1469.0, 5.0], [1470.0, 5.0], [1446.0, 5.0], [1448.0, 5.0], [1443.0, 5.0], [1442.0, 5.0], [1432.0, 5.0], [1408.0, 5.0], [1433.0, 5.0], [1435.0, 5.0], [1415.0, 5.0], [1413.0, 5.0], [1414.0, 5.0], [1410.0, 5.0], [1412.0, 5.0], [1423.0, 5.0], [1456.0, 5.0], [1463.0, 5.0], [1453.0, 5.0], [1452.0, 5.0], [1454.0, 5.0], [1449.0, 5.0], [1477.0, 5.0], [1485.0, 5.0], [1496.0, 5.0], [1508.0, 5.0], [1482.0, 5.0], [1492.0, 5.0], [1491.0, 5.0], [1490.0, 5.0], [1513.0, 5.0], [1517.0, 5.0], [1530.0, 5.0], [1520.0, 5.0], [1476.0, 5.0], [1502.0, 5.0], [1538.0, 5.0], [1552.0, 5.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1552.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.966666666666667, "minX": 1.71250092E12, "maxY": 744.8333333333334, "series": [{"data": [[1.71250104E12, 706.5], [1.71250152E12, 666.65], [1.71250122E12, 703.3333333333334], [1.71250092E12, 2.966666666666667], [1.7125014E12, 716.0], [1.7125011E12, 713.1], [1.71250128E12, 719.15], [1.71250098E12, 744.8333333333334], [1.71250146E12, 715.6833333333333], [1.71250116E12, 700.1666666666666], [1.71250134E12, 690.4333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250152E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.933333333333333, "minX": 1.71250092E12, "maxY": 744.7, "series": [{"data": [[1.71250104E12, 706.5], [1.71250152E12, 666.8166666666667], [1.71250122E12, 703.3333333333334], [1.71250092E12, 2.933333333333333], [1.7125014E12, 716.0], [1.7125011E12, 713.1], [1.71250128E12, 719.15], [1.71250098E12, 744.7], [1.71250146E12, 715.6833333333333], [1.71250116E12, 700.1666666666666], [1.71250134E12, 690.4333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250152E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.933333333333333, "minX": 1.71250092E12, "maxY": 744.7, "series": [{"data": [[1.71250104E12, 706.5], [1.71250152E12, 666.8166666666667], [1.71250122E12, 703.3333333333334], [1.71250092E12, 2.933333333333333], [1.7125014E12, 716.0], [1.7125011E12, 713.1], [1.71250128E12, 719.15], [1.71250098E12, 744.7], [1.71250146E12, 715.6833333333333], [1.71250116E12, 700.1666666666666], [1.71250134E12, 690.4333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250152E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.933333333333333, "minX": 1.71250092E12, "maxY": 744.7, "series": [{"data": [[1.71250104E12, 706.5], [1.71250152E12, 666.8166666666667], [1.71250122E12, 703.3333333333334], [1.71250092E12, 2.933333333333333], [1.7125014E12, 716.0], [1.7125011E12, 713.1], [1.71250128E12, 719.15], [1.71250098E12, 744.7], [1.71250146E12, 715.6833333333333], [1.71250116E12, 700.1666666666666], [1.71250134E12, 690.4333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250152E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

