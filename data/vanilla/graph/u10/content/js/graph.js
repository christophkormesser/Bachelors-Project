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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 153.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 2.0], [1.6, 2.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 3.0], [4.6, 3.0], [4.7, 3.0], [4.8, 3.0], [4.9, 3.0], [5.0, 3.0], [5.1, 3.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 3.0], [5.9, 3.0], [6.0, 3.0], [6.1, 3.0], [6.2, 3.0], [6.3, 3.0], [6.4, 3.0], [6.5, 3.0], [6.6, 3.0], [6.7, 3.0], [6.8, 3.0], [6.9, 3.0], [7.0, 3.0], [7.1, 3.0], [7.2, 3.0], [7.3, 3.0], [7.4, 3.0], [7.5, 3.0], [7.6, 3.0], [7.7, 3.0], [7.8, 3.0], [7.9, 3.0], [8.0, 3.0], [8.1, 3.0], [8.2, 3.0], [8.3, 3.0], [8.4, 3.0], [8.5, 3.0], [8.6, 3.0], [8.7, 3.0], [8.8, 3.0], [8.9, 3.0], [9.0, 3.0], [9.1, 3.0], [9.2, 3.0], [9.3, 3.0], [9.4, 3.0], [9.5, 3.0], [9.6, 3.0], [9.7, 3.0], [9.8, 3.0], [9.9, 3.0], [10.0, 3.0], [10.1, 3.0], [10.2, 3.0], [10.3, 3.0], [10.4, 3.0], [10.5, 3.0], [10.6, 3.0], [10.7, 3.0], [10.8, 3.0], [10.9, 3.0], [11.0, 3.0], [11.1, 3.0], [11.2, 3.0], [11.3, 3.0], [11.4, 3.0], [11.5, 3.0], [11.6, 3.0], [11.7, 3.0], [11.8, 3.0], [11.9, 3.0], [12.0, 3.0], [12.1, 3.0], [12.2, 3.0], [12.3, 3.0], [12.4, 3.0], [12.5, 3.0], [12.6, 3.0], [12.7, 3.0], [12.8, 3.0], [12.9, 3.0], [13.0, 3.0], [13.1, 3.0], [13.2, 3.0], [13.3, 3.0], [13.4, 3.0], [13.5, 3.0], [13.6, 3.0], [13.7, 3.0], [13.8, 3.0], [13.9, 3.0], [14.0, 3.0], [14.1, 3.0], [14.2, 3.0], [14.3, 3.0], [14.4, 3.0], [14.5, 3.0], [14.6, 3.0], [14.7, 3.0], [14.8, 3.0], [14.9, 3.0], [15.0, 3.0], [15.1, 3.0], [15.2, 3.0], [15.3, 3.0], [15.4, 4.0], [15.5, 4.0], [15.6, 4.0], [15.7, 4.0], [15.8, 4.0], [15.9, 4.0], [16.0, 4.0], [16.1, 4.0], [16.2, 4.0], [16.3, 4.0], [16.4, 4.0], [16.5, 4.0], [16.6, 4.0], [16.7, 4.0], [16.8, 4.0], [16.9, 4.0], [17.0, 4.0], [17.1, 4.0], [17.2, 4.0], [17.3, 4.0], [17.4, 4.0], [17.5, 4.0], [17.6, 4.0], [17.7, 4.0], [17.8, 4.0], [17.9, 4.0], [18.0, 4.0], [18.1, 4.0], [18.2, 4.0], [18.3, 4.0], [18.4, 4.0], [18.5, 4.0], [18.6, 4.0], [18.7, 4.0], [18.8, 4.0], [18.9, 4.0], [19.0, 4.0], [19.1, 4.0], [19.2, 4.0], [19.3, 4.0], [19.4, 4.0], [19.5, 4.0], [19.6, 4.0], [19.7, 4.0], [19.8, 4.0], [19.9, 4.0], [20.0, 4.0], [20.1, 4.0], [20.2, 4.0], [20.3, 4.0], [20.4, 4.0], [20.5, 4.0], [20.6, 4.0], [20.7, 4.0], [20.8, 4.0], [20.9, 4.0], [21.0, 4.0], [21.1, 4.0], [21.2, 4.0], [21.3, 4.0], [21.4, 4.0], [21.5, 4.0], [21.6, 4.0], [21.7, 4.0], [21.8, 4.0], [21.9, 4.0], [22.0, 4.0], [22.1, 4.0], [22.2, 4.0], [22.3, 4.0], [22.4, 4.0], [22.5, 4.0], [22.6, 4.0], [22.7, 4.0], [22.8, 4.0], [22.9, 4.0], [23.0, 4.0], [23.1, 4.0], [23.2, 4.0], [23.3, 4.0], [23.4, 4.0], [23.5, 4.0], [23.6, 4.0], [23.7, 4.0], [23.8, 4.0], [23.9, 4.0], [24.0, 4.0], [24.1, 4.0], [24.2, 4.0], [24.3, 4.0], [24.4, 4.0], [24.5, 4.0], [24.6, 4.0], [24.7, 4.0], [24.8, 4.0], [24.9, 4.0], [25.0, 4.0], [25.1, 4.0], [25.2, 4.0], [25.3, 4.0], [25.4, 4.0], [25.5, 4.0], [25.6, 4.0], [25.7, 4.0], [25.8, 4.0], [25.9, 4.0], [26.0, 4.0], [26.1, 4.0], [26.2, 4.0], [26.3, 4.0], [26.4, 4.0], [26.5, 4.0], [26.6, 4.0], [26.7, 4.0], [26.8, 4.0], [26.9, 4.0], [27.0, 4.0], [27.1, 4.0], [27.2, 4.0], [27.3, 4.0], [27.4, 4.0], [27.5, 4.0], [27.6, 4.0], [27.7, 4.0], [27.8, 4.0], [27.9, 4.0], [28.0, 4.0], [28.1, 4.0], [28.2, 4.0], [28.3, 4.0], [28.4, 4.0], [28.5, 4.0], [28.6, 4.0], [28.7, 4.0], [28.8, 4.0], [28.9, 4.0], [29.0, 4.0], [29.1, 4.0], [29.2, 4.0], [29.3, 4.0], [29.4, 4.0], [29.5, 4.0], [29.6, 4.0], [29.7, 4.0], [29.8, 4.0], [29.9, 4.0], [30.0, 4.0], [30.1, 4.0], [30.2, 4.0], [30.3, 4.0], [30.4, 4.0], [30.5, 4.0], [30.6, 4.0], [30.7, 4.0], [30.8, 4.0], [30.9, 4.0], [31.0, 4.0], [31.1, 4.0], [31.2, 4.0], [31.3, 4.0], [31.4, 4.0], [31.5, 4.0], [31.6, 4.0], [31.7, 4.0], [31.8, 4.0], [31.9, 4.0], [32.0, 4.0], [32.1, 4.0], [32.2, 4.0], [32.3, 4.0], [32.4, 4.0], [32.5, 4.0], [32.6, 4.0], [32.7, 4.0], [32.8, 4.0], [32.9, 4.0], [33.0, 4.0], [33.1, 4.0], [33.2, 4.0], [33.3, 4.0], [33.4, 4.0], [33.5, 4.0], [33.6, 4.0], [33.7, 4.0], [33.8, 4.0], [33.9, 4.0], [34.0, 4.0], [34.1, 4.0], [34.2, 4.0], [34.3, 4.0], [34.4, 4.0], [34.5, 4.0], [34.6, 4.0], [34.7, 4.0], [34.8, 4.0], [34.9, 4.0], [35.0, 4.0], [35.1, 4.0], [35.2, 4.0], [35.3, 4.0], [35.4, 4.0], [35.5, 4.0], [35.6, 4.0], [35.7, 4.0], [35.8, 4.0], [35.9, 4.0], [36.0, 4.0], [36.1, 4.0], [36.2, 4.0], [36.3, 4.0], [36.4, 4.0], [36.5, 4.0], [36.6, 4.0], [36.7, 4.0], [36.8, 4.0], [36.9, 4.0], [37.0, 4.0], [37.1, 4.0], [37.2, 4.0], [37.3, 4.0], [37.4, 4.0], [37.5, 4.0], [37.6, 4.0], [37.7, 4.0], [37.8, 4.0], [37.9, 4.0], [38.0, 4.0], [38.1, 4.0], [38.2, 4.0], [38.3, 4.0], [38.4, 4.0], [38.5, 4.0], [38.6, 4.0], [38.7, 4.0], [38.8, 4.0], [38.9, 4.0], [39.0, 4.0], [39.1, 4.0], [39.2, 4.0], [39.3, 4.0], [39.4, 4.0], [39.5, 4.0], [39.6, 4.0], [39.7, 4.0], [39.8, 4.0], [39.9, 4.0], [40.0, 4.0], [40.1, 4.0], [40.2, 4.0], [40.3, 5.0], [40.4, 5.0], [40.5, 5.0], [40.6, 5.0], [40.7, 5.0], [40.8, 5.0], [40.9, 5.0], [41.0, 5.0], [41.1, 5.0], [41.2, 5.0], [41.3, 5.0], [41.4, 5.0], [41.5, 5.0], [41.6, 5.0], [41.7, 5.0], [41.8, 5.0], [41.9, 5.0], [42.0, 5.0], [42.1, 5.0], [42.2, 5.0], [42.3, 5.0], [42.4, 5.0], [42.5, 5.0], [42.6, 5.0], [42.7, 5.0], [42.8, 5.0], [42.9, 5.0], [43.0, 5.0], [43.1, 5.0], [43.2, 5.0], [43.3, 5.0], [43.4, 5.0], [43.5, 5.0], [43.6, 5.0], [43.7, 5.0], [43.8, 5.0], [43.9, 5.0], [44.0, 5.0], [44.1, 5.0], [44.2, 5.0], [44.3, 5.0], [44.4, 5.0], [44.5, 5.0], [44.6, 5.0], [44.7, 5.0], [44.8, 5.0], [44.9, 5.0], [45.0, 5.0], [45.1, 5.0], [45.2, 5.0], [45.3, 5.0], [45.4, 5.0], [45.5, 5.0], [45.6, 5.0], [45.7, 5.0], [45.8, 5.0], [45.9, 5.0], [46.0, 5.0], [46.1, 5.0], [46.2, 5.0], [46.3, 5.0], [46.4, 5.0], [46.5, 5.0], [46.6, 5.0], [46.7, 5.0], [46.8, 5.0], [46.9, 5.0], [47.0, 5.0], [47.1, 5.0], [47.2, 5.0], [47.3, 5.0], [47.4, 5.0], [47.5, 5.0], [47.6, 5.0], [47.7, 5.0], [47.8, 5.0], [47.9, 5.0], [48.0, 5.0], [48.1, 5.0], [48.2, 5.0], [48.3, 5.0], [48.4, 5.0], [48.5, 5.0], [48.6, 5.0], [48.7, 5.0], [48.8, 5.0], [48.9, 5.0], [49.0, 5.0], [49.1, 5.0], [49.2, 5.0], [49.3, 5.0], [49.4, 5.0], [49.5, 5.0], [49.6, 5.0], [49.7, 5.0], [49.8, 5.0], [49.9, 5.0], [50.0, 5.0], [50.1, 5.0], [50.2, 5.0], [50.3, 5.0], [50.4, 5.0], [50.5, 5.0], [50.6, 5.0], [50.7, 5.0], [50.8, 5.0], [50.9, 5.0], [51.0, 5.0], [51.1, 5.0], [51.2, 5.0], [51.3, 5.0], [51.4, 5.0], [51.5, 5.0], [51.6, 5.0], [51.7, 5.0], [51.8, 5.0], [51.9, 5.0], [52.0, 5.0], [52.1, 5.0], [52.2, 5.0], [52.3, 5.0], [52.4, 5.0], [52.5, 5.0], [52.6, 5.0], [52.7, 5.0], [52.8, 5.0], [52.9, 5.0], [53.0, 5.0], [53.1, 5.0], [53.2, 5.0], [53.3, 5.0], [53.4, 5.0], [53.5, 5.0], [53.6, 5.0], [53.7, 5.0], [53.8, 5.0], [53.9, 5.0], [54.0, 5.0], [54.1, 5.0], [54.2, 5.0], [54.3, 5.0], [54.4, 5.0], [54.5, 5.0], [54.6, 5.0], [54.7, 5.0], [54.8, 5.0], [54.9, 5.0], [55.0, 5.0], [55.1, 5.0], [55.2, 5.0], [55.3, 5.0], [55.4, 5.0], [55.5, 5.0], [55.6, 5.0], [55.7, 5.0], [55.8, 5.0], [55.9, 5.0], [56.0, 5.0], [56.1, 5.0], [56.2, 5.0], [56.3, 5.0], [56.4, 5.0], [56.5, 5.0], [56.6, 5.0], [56.7, 5.0], [56.8, 5.0], [56.9, 5.0], [57.0, 5.0], [57.1, 5.0], [57.2, 5.0], [57.3, 5.0], [57.4, 5.0], [57.5, 5.0], [57.6, 5.0], [57.7, 5.0], [57.8, 5.0], [57.9, 5.0], [58.0, 5.0], [58.1, 5.0], [58.2, 5.0], [58.3, 5.0], [58.4, 6.0], [58.5, 6.0], [58.6, 6.0], [58.7, 6.0], [58.8, 6.0], [58.9, 6.0], [59.0, 6.0], [59.1, 6.0], [59.2, 6.0], [59.3, 6.0], [59.4, 6.0], [59.5, 6.0], [59.6, 6.0], [59.7, 6.0], [59.8, 6.0], [59.9, 6.0], [60.0, 6.0], [60.1, 6.0], [60.2, 6.0], [60.3, 6.0], [60.4, 6.0], [60.5, 6.0], [60.6, 6.0], [60.7, 6.0], [60.8, 6.0], [60.9, 6.0], [61.0, 6.0], [61.1, 6.0], [61.2, 6.0], [61.3, 6.0], [61.4, 6.0], [61.5, 6.0], [61.6, 6.0], [61.7, 6.0], [61.8, 6.0], [61.9, 6.0], [62.0, 6.0], [62.1, 6.0], [62.2, 6.0], [62.3, 6.0], [62.4, 6.0], [62.5, 6.0], [62.6, 6.0], [62.7, 6.0], [62.8, 6.0], [62.9, 6.0], [63.0, 6.0], [63.1, 6.0], [63.2, 6.0], [63.3, 6.0], [63.4, 6.0], [63.5, 6.0], [63.6, 6.0], [63.7, 6.0], [63.8, 6.0], [63.9, 6.0], [64.0, 6.0], [64.1, 6.0], [64.2, 6.0], [64.3, 6.0], [64.4, 6.0], [64.5, 6.0], [64.6, 6.0], [64.7, 6.0], [64.8, 6.0], [64.9, 6.0], [65.0, 6.0], [65.1, 6.0], [65.2, 6.0], [65.3, 6.0], [65.4, 6.0], [65.5, 6.0], [65.6, 6.0], [65.7, 6.0], [65.8, 6.0], [65.9, 6.0], [66.0, 6.0], [66.1, 6.0], [66.2, 6.0], [66.3, 6.0], [66.4, 6.0], [66.5, 6.0], [66.6, 6.0], [66.7, 6.0], [66.8, 6.0], [66.9, 6.0], [67.0, 6.0], [67.1, 6.0], [67.2, 6.0], [67.3, 6.0], [67.4, 6.0], [67.5, 6.0], [67.6, 6.0], [67.7, 6.0], [67.8, 6.0], [67.9, 6.0], [68.0, 6.0], [68.1, 6.0], [68.2, 6.0], [68.3, 7.0], [68.4, 7.0], [68.5, 7.0], [68.6, 7.0], [68.7, 7.0], [68.8, 7.0], [68.9, 7.0], [69.0, 7.0], [69.1, 7.0], [69.2, 7.0], [69.3, 7.0], [69.4, 7.0], [69.5, 7.0], [69.6, 7.0], [69.7, 7.0], [69.8, 7.0], [69.9, 7.0], [70.0, 7.0], [70.1, 7.0], [70.2, 7.0], [70.3, 7.0], [70.4, 7.0], [70.5, 7.0], [70.6, 7.0], [70.7, 7.0], [70.8, 7.0], [70.9, 7.0], [71.0, 7.0], [71.1, 7.0], [71.2, 7.0], [71.3, 7.0], [71.4, 7.0], [71.5, 7.0], [71.6, 7.0], [71.7, 7.0], [71.8, 7.0], [71.9, 7.0], [72.0, 7.0], [72.1, 7.0], [72.2, 7.0], [72.3, 7.0], [72.4, 7.0], [72.5, 7.0], [72.6, 7.0], [72.7, 7.0], [72.8, 7.0], [72.9, 7.0], [73.0, 7.0], [73.1, 7.0], [73.2, 7.0], [73.3, 7.0], [73.4, 7.0], [73.5, 7.0], [73.6, 8.0], [73.7, 8.0], [73.8, 8.0], [73.9, 8.0], [74.0, 8.0], [74.1, 8.0], [74.2, 8.0], [74.3, 8.0], [74.4, 8.0], [74.5, 8.0], [74.6, 8.0], [74.7, 8.0], [74.8, 8.0], [74.9, 8.0], [75.0, 8.0], [75.1, 8.0], [75.2, 8.0], [75.3, 8.0], [75.4, 8.0], [75.5, 8.0], [75.6, 8.0], [75.7, 8.0], [75.8, 8.0], [75.9, 8.0], [76.0, 8.0], [76.1, 8.0], [76.2, 8.0], [76.3, 9.0], [76.4, 9.0], [76.5, 9.0], [76.6, 9.0], [76.7, 9.0], [76.8, 9.0], [76.9, 9.0], [77.0, 9.0], [77.1, 9.0], [77.2, 9.0], [77.3, 9.0], [77.4, 9.0], [77.5, 9.0], [77.6, 9.0], [77.7, 9.0], [77.8, 9.0], [77.9, 9.0], [78.0, 10.0], [78.1, 10.0], [78.2, 10.0], [78.3, 10.0], [78.4, 10.0], [78.5, 10.0], [78.6, 10.0], [78.7, 10.0], [78.8, 10.0], [78.9, 10.0], [79.0, 10.0], [79.1, 11.0], [79.2, 11.0], [79.3, 11.0], [79.4, 11.0], [79.5, 11.0], [79.6, 11.0], [79.7, 11.0], [79.8, 12.0], [79.9, 12.0], [80.0, 12.0], [80.1, 12.0], [80.2, 12.0], [80.3, 12.0], [80.4, 13.0], [80.5, 13.0], [80.6, 13.0], [80.7, 13.0], [80.8, 13.0], [80.9, 14.0], [81.0, 14.0], [81.1, 14.0], [81.2, 14.0], [81.3, 15.0], [81.4, 15.0], [81.5, 15.0], [81.6, 15.0], [81.7, 16.0], [81.8, 16.0], [81.9, 16.0], [82.0, 16.0], [82.1, 17.0], [82.2, 17.0], [82.3, 17.0], [82.4, 17.0], [82.5, 18.0], [82.6, 18.0], [82.7, 18.0], [82.8, 18.0], [82.9, 18.0], [83.0, 19.0], [83.1, 19.0], [83.2, 19.0], [83.3, 19.0], [83.4, 20.0], [83.5, 20.0], [83.6, 20.0], [83.7, 20.0], [83.8, 20.0], [83.9, 20.0], [84.0, 21.0], [84.1, 21.0], [84.2, 21.0], [84.3, 21.0], [84.4, 21.0], [84.5, 21.0], [84.6, 21.0], [84.7, 22.0], [84.8, 22.0], [84.9, 22.0], [85.0, 22.0], [85.1, 22.0], [85.2, 22.0], [85.3, 22.0], [85.4, 22.0], [85.5, 23.0], [85.6, 23.0], [85.7, 23.0], [85.8, 23.0], [85.9, 23.0], [86.0, 23.0], [86.1, 23.0], [86.2, 23.0], [86.3, 24.0], [86.4, 24.0], [86.5, 24.0], [86.6, 24.0], [86.7, 24.0], [86.8, 24.0], [86.9, 24.0], [87.0, 24.0], [87.1, 24.0], [87.2, 25.0], [87.3, 25.0], [87.4, 25.0], [87.5, 25.0], [87.6, 25.0], [87.7, 25.0], [87.8, 26.0], [87.9, 26.0], [88.0, 26.0], [88.1, 26.0], [88.2, 26.0], [88.3, 27.0], [88.4, 27.0], [88.5, 27.0], [88.6, 27.0], [88.7, 28.0], [88.8, 28.0], [88.9, 28.0], [89.0, 28.0], [89.1, 29.0], [89.2, 29.0], [89.3, 30.0], [89.4, 30.0], [89.5, 30.0], [89.6, 31.0], [89.7, 31.0], [89.8, 32.0], [89.9, 32.0], [90.0, 33.0], [90.1, 34.0], [90.2, 34.0], [90.3, 35.0], [90.4, 36.0], [90.5, 38.0], [90.6, 40.0], [90.7, 43.0], [90.8, 43.0], [90.9, 45.0], [91.0, 46.0], [91.1, 50.0], [91.2, 53.0], [91.3, 56.0], [91.4, 58.0], [91.5, 59.0], [91.6, 60.0], [91.7, 60.0], [91.8, 61.0], [91.9, 62.0], [92.0, 62.0], [92.1, 62.0], [92.2, 63.0], [92.3, 63.0], [92.4, 64.0], [92.5, 64.0], [92.6, 64.0], [92.7, 65.0], [92.8, 65.0], [92.9, 65.0], [93.0, 65.0], [93.1, 66.0], [93.2, 66.0], [93.3, 66.0], [93.4, 66.0], [93.5, 67.0], [93.6, 67.0], [93.7, 67.0], [93.8, 67.0], [93.9, 67.0], [94.0, 68.0], [94.1, 68.0], [94.2, 68.0], [94.3, 68.0], [94.4, 69.0], [94.5, 69.0], [94.6, 69.0], [94.7, 69.0], [94.8, 69.0], [94.9, 70.0], [95.0, 70.0], [95.1, 70.0], [95.2, 70.0], [95.3, 71.0], [95.4, 71.0], [95.5, 71.0], [95.6, 71.0], [95.7, 72.0], [95.8, 72.0], [95.9, 72.0], [96.0, 73.0], [96.1, 73.0], [96.2, 73.0], [96.3, 74.0], [96.4, 74.0], [96.5, 75.0], [96.6, 75.0], [96.7, 76.0], [96.8, 76.0], [96.9, 77.0], [97.0, 78.0], [97.1, 79.0], [97.2, 79.0], [97.3, 80.0], [97.4, 81.0], [97.5, 81.0], [97.6, 82.0], [97.7, 83.0], [97.8, 83.0], [97.9, 84.0], [98.0, 84.0], [98.1, 85.0], [98.2, 85.0], [98.3, 86.0], [98.4, 86.0], [98.5, 86.0], [98.6, 87.0], [98.7, 87.0], [98.8, 88.0], [98.9, 88.0], [99.0, 88.0], [99.1, 89.0], [99.2, 89.0], [99.3, 90.0], [99.4, 90.0], [99.5, 91.0], [99.6, 91.0], [99.7, 92.0], [99.8, 93.0], [99.9, 95.0], [100.0, 153.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 49.0, "minX": 0.0, "maxY": 437521.0, "series": [{"data": [[0.0, 437521.0], [100.0, 49.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 437570.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 437570.0, "series": [{"data": [[0.0, 437570.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.940168496073541, "minX": 1.7123427E12, "maxY": 10.0, "series": [{"data": [[1.71234288E12, 10.0], [1.71234306E12, 10.0], [1.71234276E12, 9.637404757480047], [1.71234324E12, 10.0], [1.71234294E12, 10.0], [1.71234312E12, 10.0], [1.71234282E12, 10.0], [1.7123433E12, 9.997804409477633], [1.712343E12, 10.0], [1.7123427E12, 4.940168496073541], [1.71234318E12, 10.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123433E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2.4647826086956526, "minX": 1.0, "maxY": 14.314160001471745, "series": [{"data": [[1.0, 2.4647826086956526], [2.0, 2.759699035974603], [4.0, 3.702896293989403], [8.0, 5.937872023809529], [9.0, 6.92702632264788], [5.0, 4.016207455429501], [10.0, 14.314160001471745], [3.0, 3.412250384024575], [6.0, 4.594257017769769], [7.0, 5.183167082294267]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.43858582626769, 13.056043604451776]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 21315.45, "minX": 1.7123427E12, "maxY": 268974.1666666667, "series": [{"data": [[1.71234288E12, 253626.16666666666], [1.71234306E12, 253999.08333333334], [1.71234276E12, 254697.08333333334], [1.71234324E12, 251194.25], [1.71234294E12, 254554.91666666666], [1.71234312E12, 253005.0], [1.71234282E12, 242781.16666666666], [1.7123433E12, 64674.166666666664], [1.712343E12, 246721.5], [1.7123427E12, 268974.1666666667], [1.71234318E12, 244692.16666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71234288E12, 83590.65], [1.71234306E12, 83713.5], [1.71234276E12, 83943.6], [1.71234324E12, 82789.2], [1.71234294E12, 83896.8], [1.71234312E12, 83385.9], [1.71234282E12, 80016.3], [1.7123433E12, 21315.45], [1.712343E12, 81315.0], [1.7123427E12, 88648.95], [1.71234318E12, 80646.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123433E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4.194738347154709, "minX": 1.7123427E12, "maxY": 14.580128673782731, "series": [{"data": [[1.71234288E12, 13.94800195954932], [1.71234306E12, 13.927905893314707], [1.71234276E12, 13.623838505853929], [1.71234324E12, 14.09218956095724], [1.71234294E12, 13.922717552993575], [1.71234312E12, 13.995299565034333], [1.71234282E12, 14.580128673782731], [1.7123433E12, 13.64861403348272], [1.712343E12, 14.35110311750599], [1.7123427E12, 4.194738347154709], [1.71234318E12, 14.465072418212237]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123433E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4.191636787576173, "minX": 1.7123427E12, "maxY": 14.578227811083474, "series": [{"data": [[1.71234288E12, 13.945412555112407], [1.71234306E12, 13.925972513393988], [1.71234276E12, 13.621956885337294], [1.71234324E12, 14.090470133785601], [1.71234294E12, 13.920648940126389], [1.71234312E12, 13.993592441887605], [1.71234282E12, 14.578227811083474], [1.7123433E12, 13.646235477083493], [1.712343E12, 14.349184652278225], [1.7123427E12, 4.191636787576173], [1.71234318E12, 14.463113862224139]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123433E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.789140944589047E-4, "minX": 1.7123427E12, "maxY": 8.358813048547102E-4, "series": [{"data": [[1.71234288E12, 4.432313901136085E-4], [1.71234306E12, 4.425809457255994E-4], [1.71234276E12, 4.1813789258501963E-4], [1.71234324E12, 3.297531562087816E-4], [1.71234294E12, 2.789140944589047E-4], [1.71234312E12, 4.4431972311865733E-4], [1.71234282E12, 3.655505190817364E-4], [1.7123433E12, 3.6593175372792817E-4], [1.712343E12, 3.3573141486810664E-4], [1.7123427E12, 8.358813048547102E-4], [1.71234318E12, 3.868752569093537E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123433E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.7123427E12, "maxY": 153.0, "series": [{"data": [[1.71234288E12, 110.0], [1.71234306E12, 99.0], [1.71234276E12, 100.0], [1.71234324E12, 101.0], [1.71234294E12, 99.0], [1.71234312E12, 117.0], [1.71234282E12, 121.0], [1.7123433E12, 103.0], [1.712343E12, 150.0], [1.7123427E12, 68.0], [1.71234318E12, 153.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71234288E12, 2.0], [1.71234306E12, 2.0], [1.71234276E12, 2.0], [1.71234324E12, 2.0], [1.71234294E12, 2.0], [1.71234312E12, 2.0], [1.71234282E12, 2.0], [1.7123433E12, 2.0], [1.712343E12, 2.0], [1.7123427E12, 1.0], [1.71234318E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71234288E12, 68.0], [1.71234306E12, 72.0], [1.71234276E12, 39.0], [1.71234324E12, 62.0], [1.71234294E12, 70.0], [1.71234312E12, 66.0], [1.71234282E12, 66.0], [1.7123433E12, 34.0], [1.712343E12, 67.0], [1.7123427E12, 6.0], [1.71234318E12, 66.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71234288E12, 89.0], [1.71234306E12, 91.0], [1.71234276E12, 88.0], [1.71234324E12, 90.0], [1.71234294E12, 90.0], [1.71234312E12, 91.0], [1.71234282E12, 88.9900000000016], [1.7123433E12, 89.0], [1.712343E12, 90.0], [1.7123427E12, 25.0], [1.71234318E12, 90.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71234288E12, 6.0], [1.71234306E12, 6.0], [1.71234276E12, 5.0], [1.71234324E12, 5.0], [1.71234294E12, 6.0], [1.71234312E12, 5.0], [1.71234282E12, 6.0], [1.7123433E12, 5.0], [1.712343E12, 6.0], [1.7123427E12, 4.0], [1.71234318E12, 5.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71234288E12, 77.0], [1.71234306E12, 85.0], [1.71234276E12, 70.0], [1.71234324E12, 73.0], [1.71234294E12, 76.0], [1.71234312E12, 81.0], [1.71234282E12, 72.0], [1.7123433E12, 71.0], [1.712343E12, 76.0], [1.7123427E12, 8.0], [1.71234318E12, 82.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123433E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 294.0, "maxY": 22.0, "series": [{"data": [[302.0, 21.0], [303.0, 22.0], [294.0, 9.0], [317.0, 20.0], [315.0, 20.0], [312.0, 15.5], [332.0, 19.0], [327.0, 11.0], [326.0, 8.5], [325.0, 9.5], [324.0, 8.0], [335.0, 13.0], [329.0, 9.0], [330.0, 21.0], [331.0, 18.0], [328.0, 9.0], [333.0, 10.0], [334.0, 10.0], [321.0, 10.0], [320.0, 9.0], [322.0, 8.0], [350.0, 5.0], [351.0, 8.0], [337.0, 10.0], [338.0, 9.0], [336.0, 16.0], [342.0, 19.0], [341.0, 9.0], [340.0, 9.0], [343.0, 19.5], [346.0, 14.5], [347.0, 7.0], [339.0, 10.0], [348.0, 13.0], [344.0, 16.0], [345.0, 10.0], [364.0, 9.0], [366.0, 6.0], [363.0, 10.0], [365.0, 9.0], [362.0, 14.0], [367.0, 9.0], [360.0, 9.0], [361.0, 8.0], [352.0, 8.0], [353.0, 15.0], [355.0, 9.0], [354.0, 8.0], [359.0, 7.0], [358.0, 14.0], [357.0, 8.0], [356.0, 14.0], [382.0, 8.0], [374.0, 5.0], [372.0, 9.0], [368.0, 8.0], [375.0, 8.0], [383.0, 10.0], [369.0, 12.0], [370.0, 10.0], [380.0, 8.0], [371.0, 8.0], [381.0, 8.0], [373.0, 14.0], [379.0, 11.0], [378.0, 11.0], [377.0, 8.0], [376.0, 8.0], [387.0, 8.0], [394.0, 7.0], [395.0, 8.0], [393.0, 8.0], [398.0, 8.0], [389.0, 7.0], [388.0, 9.0], [391.0, 8.0], [390.0, 8.0], [397.0, 10.0], [396.0, 12.0], [385.0, 9.0], [413.0, 7.0], [404.0, 3.0], [405.0, 7.0], [415.0, 7.0], [406.0, 8.0], [408.0, 9.0], [410.0, 6.0], [409.0, 7.0], [414.0, 8.0], [400.0, 7.0], [403.0, 8.0], [401.0, 10.0], [416.0, 3.0], [421.0, 9.0], [418.0, 7.0], [425.0, 8.0], [422.0, 8.0], [428.0, 10.0], [419.0, 9.0], [427.0, 7.0], [431.0, 7.0], [433.0, 7.0], [432.0, 7.0], [446.0, 7.0], [444.0, 6.0], [438.0, 7.0], [463.0, 2.0], [459.0, 7.0], [454.0, 7.0], [449.0, 7.0], [451.0, 7.0], [469.0, 6.0], [472.0, 6.0], [478.0, 6.0], [474.0, 7.0], [477.0, 7.0], [482.0, 6.0], [480.0, 6.0], [487.0, 5.5], [501.0, 6.0], [497.0, 7.0], [532.0, 7.0], [541.0, 7.0], [540.0, 6.0], [536.0, 5.0], [543.0, 6.0], [562.0, 6.0], [553.0, 6.0], [545.0, 7.0], [573.0, 6.0], [565.0, 6.0], [549.0, 7.0], [560.0, 6.0], [554.0, 6.0], [588.0, 6.0], [584.0, 5.0], [585.0, 5.0], [616.0, 5.0], [631.0, 5.0], [615.0, 6.0], [609.0, 6.0], [646.0, 6.0], [667.0, 5.0], [649.0, 5.0], [677.0, 5.0], [702.0, 3.0], [681.0, 3.0], [687.0, 3.0], [683.0, 5.0], [703.0, 5.0], [688.0, 5.0], [676.0, 5.0], [697.0, 5.0], [700.0, 5.0], [726.0, 3.0], [712.0, 3.0], [716.0, 5.0], [725.0, 5.0], [721.0, 5.0], [718.0, 5.0], [732.0, 5.0], [728.0, 5.5], [756.0, 3.0], [738.0, 5.0], [744.0, 5.0], [754.0, 5.0], [792.0, 4.0], [791.0, 5.0], [769.0, 5.0], [793.0, 5.0], [799.0, 5.0], [786.0, 5.0], [776.0, 5.0], [823.0, 5.0], [812.0, 5.0], [821.0, 5.0], [829.0, 5.0], [826.0, 5.0], [857.0, 4.0], [862.0, 3.0], [855.0, 4.0], [852.0, 5.0], [832.0, 6.0], [835.0, 5.0], [846.0, 5.0], [833.0, 5.0], [887.0, 3.0], [877.0, 5.0], [882.0, 5.0], [879.0, 5.0], [878.0, 5.0], [920.0, 3.0], [925.0, 3.0], [915.0, 5.0], [904.0, 5.0], [900.0, 5.0], [957.0, 5.0], [939.0, 5.0], [942.0, 5.0], [934.0, 5.0], [928.0, 5.0], [981.0, 5.0], [977.0, 5.0], [962.0, 5.0], [964.0, 5.0], [963.0, 5.0], [993.0, 5.0], [1004.0, 4.0], [1033.0, 5.0], [1061.0, 4.0], [1026.0, 5.0], [1025.0, 5.0], [1055.0, 5.0], [1031.0, 5.0], [1070.0, 5.0], [1032.0, 5.0], [1057.0, 5.0], [1085.0, 5.0], [1056.0, 4.0], [1039.0, 5.0], [1038.0, 5.0], [1102.0, 5.0], [1122.0, 4.0], [1128.0, 3.0], [1132.0, 5.0], [1133.0, 4.0], [1138.0, 3.0], [1103.0, 5.0], [1088.0, 3.0], [1111.0, 5.0], [1127.0, 4.0], [1099.0, 5.0], [1097.0, 5.0], [1113.0, 4.0], [1118.0, 4.0], [1158.0, 4.0], [1204.0, 4.0], [1162.0, 4.0], [1196.0, 4.0], [1174.0, 4.0], [1169.0, 5.0], [1173.0, 5.0], [1170.0, 5.0], [1180.0, 4.0], [1176.0, 5.0], [1206.0, 5.0], [1166.0, 5.0], [1201.0, 5.0], [1214.0, 5.0], [1278.0, 5.0], [1260.0, 5.0], [1244.0, 4.0], [1251.0, 5.0], [1263.0, 5.0], [1218.0, 5.0], [1265.0, 5.0], [1271.0, 5.0], [1217.0, 5.0], [1307.0, 5.0], [1299.0, 4.0], [1298.0, 4.0], [1294.0, 4.0], [1291.0, 4.0], [1300.0, 5.0], [1306.0, 5.0], [1309.0, 5.0], [1330.0, 5.0], [1340.0, 5.0], [1332.0, 5.0], [1316.0, 5.0], [1321.0, 5.0], [1314.0, 5.0], [1343.0, 5.0], [1354.0, 4.0], [1400.0, 4.0], [1372.0, 4.0], [1376.0, 4.0], [1378.0, 5.0], [1390.0, 5.0], [1407.0, 5.0], [1406.0, 5.0], [1355.0, 4.0], [1357.0, 5.0], [1393.0, 4.0], [1347.0, 4.0], [1349.0, 4.0], [1344.0, 5.0], [1352.0, 4.0], [1353.0, 5.0], [1399.0, 4.0], [1362.0, 5.0], [1371.0, 5.0], [1458.0, 4.0], [1453.0, 5.0], [1452.0, 5.0], [1445.0, 5.0], [1471.0, 5.0], [1441.0, 5.0], [1444.0, 5.0], [1468.0, 5.0], [1421.0, 5.0], [1459.0, 4.0], [1464.0, 5.0], [1427.0, 5.0], [1423.0, 4.0], [1456.0, 5.0], [1437.0, 5.0], [1438.0, 5.0], [1408.0, 5.0], [1410.0, 5.0], [1416.0, 5.0], [1420.0, 5.0], [1413.0, 5.0], [1478.0, 5.0], [1495.0, 4.0], [1488.0, 5.0], [1489.0, 5.0], [1530.0, 5.0], [1509.0, 5.0], [1515.0, 5.0], [1517.0, 5.0], [1529.0, 4.0], [1526.0, 5.0], [1525.0, 5.0], [1523.0, 5.0], [1522.0, 5.0], [1483.0, 5.0], [1487.0, 4.0], [1490.0, 4.0], [1492.0, 5.0], [1491.0, 5.0], [1497.0, 5.0], [1498.0, 5.0], [1501.0, 5.0], [1584.0, 5.0], [1541.0, 5.0], [1538.0, 5.0], [1537.0, 5.0], [1558.0, 5.0], [1589.0, 4.0], [1591.0, 5.0], [1590.0, 4.0], [1587.0, 5.0], [1588.0, 5.0], [1547.0, 5.0], [1548.0, 4.0], [1546.0, 5.0], [1596.0, 5.0], [1595.0, 5.0], [1636.0, 4.0], [1605.0, 5.0], [1633.0, 4.0], [1660.0, 4.0], [1647.0, 4.0], [1614.0, 4.0], [1656.0, 4.0], [1600.0, 4.0], [1684.0, 4.0], [1708.0, 4.0], [1724.0, 4.0], [1696.0, 4.0], [1677.0, 4.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1724.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 294.0, "maxY": 22.0, "series": [{"data": [[302.0, 21.0], [303.0, 22.0], [294.0, 9.0], [317.0, 20.0], [315.0, 20.0], [312.0, 15.5], [332.0, 19.0], [327.0, 11.0], [326.0, 8.5], [325.0, 9.5], [324.0, 8.0], [335.0, 13.0], [329.0, 9.0], [330.0, 21.0], [331.0, 18.0], [328.0, 9.0], [333.0, 10.0], [334.0, 10.0], [321.0, 10.0], [320.0, 9.0], [322.0, 8.0], [350.0, 5.0], [351.0, 8.0], [337.0, 10.0], [338.0, 9.0], [336.0, 16.0], [342.0, 19.0], [341.0, 9.0], [340.0, 9.0], [343.0, 19.0], [346.0, 14.5], [347.0, 7.0], [339.0, 10.0], [348.0, 13.0], [344.0, 16.0], [345.0, 10.0], [364.0, 9.0], [366.0, 6.0], [363.0, 10.0], [365.0, 9.0], [362.0, 14.0], [367.0, 9.0], [360.0, 9.0], [361.0, 8.0], [352.0, 8.0], [353.0, 15.0], [355.0, 9.0], [354.0, 8.0], [359.0, 7.0], [358.0, 14.0], [357.0, 8.0], [356.0, 14.0], [382.0, 8.0], [374.0, 5.0], [372.0, 9.0], [368.0, 8.0], [375.0, 8.0], [383.0, 10.0], [369.0, 12.0], [370.0, 10.0], [380.0, 8.0], [371.0, 8.0], [381.0, 8.0], [373.0, 14.0], [379.0, 11.0], [378.0, 11.0], [377.0, 8.0], [376.0, 8.0], [387.0, 8.0], [394.0, 7.0], [395.0, 8.0], [393.0, 8.0], [398.0, 8.0], [389.0, 7.0], [388.0, 9.0], [391.0, 8.0], [390.0, 8.0], [397.0, 10.0], [396.0, 12.0], [385.0, 9.0], [413.0, 7.0], [404.0, 3.0], [405.0, 7.0], [415.0, 7.0], [406.0, 8.0], [408.0, 9.0], [410.0, 6.0], [409.0, 7.0], [414.0, 8.0], [400.0, 7.0], [403.0, 8.0], [401.0, 10.0], [416.0, 3.0], [421.0, 9.0], [418.0, 7.0], [425.0, 8.0], [422.0, 8.0], [428.0, 10.0], [419.0, 9.0], [427.0, 7.0], [431.0, 7.0], [433.0, 7.0], [432.0, 7.0], [446.0, 7.0], [444.0, 6.0], [438.0, 7.0], [463.0, 2.0], [459.0, 7.0], [454.0, 7.0], [449.0, 6.0], [451.0, 7.0], [469.0, 6.0], [472.0, 6.0], [478.0, 6.0], [474.0, 7.0], [477.0, 7.0], [482.0, 6.0], [480.0, 6.0], [487.0, 5.0], [501.0, 6.0], [497.0, 7.0], [532.0, 7.0], [541.0, 7.0], [540.0, 6.0], [536.0, 5.0], [543.0, 6.0], [562.0, 6.0], [553.0, 6.0], [545.0, 7.0], [573.0, 6.0], [565.0, 6.0], [549.0, 7.0], [560.0, 6.0], [554.0, 6.0], [588.0, 6.0], [584.0, 5.0], [585.0, 5.0], [616.0, 5.0], [631.0, 5.0], [615.0, 6.0], [609.0, 6.0], [646.0, 6.0], [667.0, 5.0], [649.0, 5.0], [677.0, 5.0], [702.0, 3.0], [681.0, 3.0], [687.0, 3.0], [683.0, 5.0], [703.0, 5.0], [688.0, 5.0], [676.0, 5.0], [697.0, 5.0], [700.0, 5.0], [726.0, 3.0], [712.0, 3.0], [716.0, 5.0], [725.0, 5.0], [721.0, 5.0], [718.0, 5.0], [732.0, 5.0], [728.0, 5.5], [756.0, 3.0], [738.0, 5.0], [744.0, 5.0], [754.0, 5.0], [792.0, 4.0], [791.0, 5.0], [769.0, 5.0], [793.0, 5.0], [799.0, 5.0], [786.0, 5.0], [776.0, 5.0], [823.0, 5.0], [812.0, 5.0], [821.0, 5.0], [829.0, 5.0], [826.0, 5.0], [857.0, 4.0], [862.0, 3.0], [855.0, 4.0], [852.0, 5.0], [832.0, 6.0], [835.0, 5.0], [846.0, 5.0], [833.0, 5.0], [887.0, 3.0], [877.0, 5.0], [882.0, 5.0], [879.0, 5.0], [878.0, 5.0], [920.0, 3.0], [925.0, 3.0], [915.0, 5.0], [904.0, 5.0], [900.0, 5.0], [957.0, 5.0], [939.0, 5.0], [942.0, 5.0], [934.0, 5.0], [928.0, 5.0], [981.0, 5.0], [977.0, 5.0], [962.0, 5.0], [964.0, 5.0], [963.0, 5.0], [993.0, 5.0], [1004.0, 4.0], [1033.0, 5.0], [1061.0, 4.0], [1026.0, 5.0], [1025.0, 5.0], [1055.0, 5.0], [1031.0, 5.0], [1070.0, 5.0], [1032.0, 5.0], [1057.0, 5.0], [1085.0, 5.0], [1056.0, 4.0], [1039.0, 5.0], [1038.0, 5.0], [1102.0, 5.0], [1122.0, 4.0], [1128.0, 3.0], [1132.0, 5.0], [1133.0, 4.0], [1138.0, 3.0], [1103.0, 5.0], [1088.0, 3.0], [1111.0, 5.0], [1127.0, 4.0], [1099.0, 5.0], [1097.0, 5.0], [1113.0, 4.0], [1118.0, 4.0], [1158.0, 4.0], [1204.0, 4.0], [1162.0, 4.0], [1196.0, 4.0], [1174.0, 4.0], [1169.0, 5.0], [1173.0, 5.0], [1170.0, 5.0], [1180.0, 4.0], [1176.0, 5.0], [1206.0, 5.0], [1166.0, 5.0], [1201.0, 5.0], [1214.0, 5.0], [1278.0, 5.0], [1260.0, 5.0], [1244.0, 4.0], [1251.0, 5.0], [1263.0, 5.0], [1218.0, 5.0], [1265.0, 5.0], [1271.0, 5.0], [1217.0, 5.0], [1307.0, 5.0], [1299.0, 4.0], [1298.0, 4.0], [1294.0, 4.0], [1291.0, 4.0], [1300.0, 5.0], [1306.0, 5.0], [1309.0, 5.0], [1330.0, 5.0], [1340.0, 5.0], [1332.0, 5.0], [1316.0, 5.0], [1321.0, 5.0], [1314.0, 5.0], [1343.0, 5.0], [1354.0, 4.0], [1400.0, 4.0], [1372.0, 4.0], [1376.0, 4.0], [1378.0, 5.0], [1390.0, 5.0], [1407.0, 5.0], [1406.0, 5.0], [1355.0, 4.0], [1357.0, 5.0], [1393.0, 4.0], [1347.0, 4.0], [1349.0, 4.0], [1344.0, 5.0], [1352.0, 4.0], [1353.0, 5.0], [1399.0, 4.0], [1362.0, 5.0], [1371.0, 5.0], [1458.0, 4.0], [1453.0, 5.0], [1452.0, 5.0], [1445.0, 5.0], [1471.0, 5.0], [1441.0, 5.0], [1444.0, 5.0], [1468.0, 5.0], [1421.0, 5.0], [1459.0, 4.0], [1464.0, 5.0], [1427.0, 5.0], [1423.0, 4.0], [1456.0, 5.0], [1437.0, 5.0], [1438.0, 5.0], [1408.0, 5.0], [1410.0, 5.0], [1416.0, 5.0], [1420.0, 5.0], [1413.0, 5.0], [1478.0, 5.0], [1495.0, 4.0], [1488.0, 5.0], [1489.0, 5.0], [1530.0, 5.0], [1509.0, 5.0], [1515.0, 5.0], [1517.0, 5.0], [1529.0, 4.0], [1526.0, 5.0], [1525.0, 5.0], [1523.0, 5.0], [1522.0, 5.0], [1483.0, 5.0], [1487.0, 4.0], [1490.0, 4.0], [1492.0, 5.0], [1491.0, 5.0], [1497.0, 5.0], [1498.0, 5.0], [1501.0, 5.0], [1584.0, 5.0], [1541.0, 5.0], [1538.0, 5.0], [1537.0, 5.0], [1558.0, 5.0], [1589.0, 4.0], [1591.0, 5.0], [1590.0, 4.0], [1587.0, 5.0], [1588.0, 5.0], [1547.0, 5.0], [1548.0, 4.0], [1546.0, 5.0], [1596.0, 5.0], [1595.0, 5.0], [1636.0, 4.0], [1605.0, 5.0], [1633.0, 4.0], [1660.0, 4.0], [1647.0, 4.0], [1614.0, 4.0], [1656.0, 4.0], [1600.0, 4.0], [1684.0, 4.0], [1708.0, 4.0], [1724.0, 4.0], [1696.0, 4.0], [1677.0, 4.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1724.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 182.01666666666668, "minX": 1.7123427E12, "maxY": 757.8166666666667, "series": [{"data": [[1.71234288E12, 714.45], [1.71234306E12, 715.5], [1.71234276E12, 717.5], [1.71234324E12, 707.6], [1.71234294E12, 717.0666666666667], [1.71234312E12, 712.7], [1.71234282E12, 683.9], [1.7123433E12, 182.01666666666668], [1.712343E12, 695.0], [1.7123427E12, 757.8166666666667], [1.71234318E12, 689.2833333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123433E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 182.18333333333334, "minX": 1.7123427E12, "maxY": 757.6833333333333, "series": [{"data": [[1.71234288E12, 714.45], [1.71234306E12, 715.5], [1.71234276E12, 717.4666666666667], [1.71234324E12, 707.6], [1.71234294E12, 717.0666666666667], [1.71234312E12, 712.7], [1.71234282E12, 683.9], [1.7123433E12, 182.18333333333334], [1.712343E12, 695.0], [1.7123427E12, 757.6833333333333], [1.71234318E12, 689.2833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123433E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 182.18333333333334, "minX": 1.7123427E12, "maxY": 757.6833333333333, "series": [{"data": [[1.71234288E12, 714.45], [1.71234306E12, 715.5], [1.71234276E12, 717.4666666666667], [1.71234324E12, 707.6], [1.71234294E12, 717.0666666666667], [1.71234312E12, 712.7], [1.71234282E12, 683.9], [1.7123433E12, 182.18333333333334], [1.712343E12, 695.0], [1.7123427E12, 757.6833333333333], [1.71234318E12, 689.2833333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123433E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 182.18333333333334, "minX": 1.7123427E12, "maxY": 757.6833333333333, "series": [{"data": [[1.71234288E12, 714.45], [1.71234306E12, 715.5], [1.71234276E12, 717.4666666666667], [1.71234324E12, 707.6], [1.71234294E12, 717.0666666666667], [1.71234312E12, 712.7], [1.71234282E12, 683.9], [1.7123433E12, 182.18333333333334], [1.712343E12, 695.0], [1.7123427E12, 757.6833333333333], [1.71234318E12, 689.2833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123433E12, "title": "Total Transactions Per Second"}},
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

