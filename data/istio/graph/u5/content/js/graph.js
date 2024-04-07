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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 85.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 4.0], [1.8, 4.0], [1.9, 4.0], [2.0, 4.0], [2.1, 4.0], [2.2, 4.0], [2.3, 4.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 5.0], [3.7, 5.0], [3.8, 5.0], [3.9, 5.0], [4.0, 5.0], [4.1, 5.0], [4.2, 5.0], [4.3, 5.0], [4.4, 5.0], [4.5, 5.0], [4.6, 5.0], [4.7, 5.0], [4.8, 5.0], [4.9, 5.0], [5.0, 5.0], [5.1, 5.0], [5.2, 5.0], [5.3, 5.0], [5.4, 5.0], [5.5, 5.0], [5.6, 5.0], [5.7, 5.0], [5.8, 5.0], [5.9, 5.0], [6.0, 5.0], [6.1, 5.0], [6.2, 5.0], [6.3, 5.0], [6.4, 5.0], [6.5, 5.0], [6.6, 5.0], [6.7, 5.0], [6.8, 5.0], [6.9, 5.0], [7.0, 5.0], [7.1, 5.0], [7.2, 5.0], [7.3, 5.0], [7.4, 5.0], [7.5, 5.0], [7.6, 5.0], [7.7, 5.0], [7.8, 5.0], [7.9, 5.0], [8.0, 5.0], [8.1, 5.0], [8.2, 5.0], [8.3, 5.0], [8.4, 5.0], [8.5, 5.0], [8.6, 5.0], [8.7, 5.0], [8.8, 5.0], [8.9, 5.0], [9.0, 5.0], [9.1, 5.0], [9.2, 5.0], [9.3, 5.0], [9.4, 5.0], [9.5, 5.0], [9.6, 5.0], [9.7, 5.0], [9.8, 5.0], [9.9, 5.0], [10.0, 5.0], [10.1, 5.0], [10.2, 5.0], [10.3, 5.0], [10.4, 5.0], [10.5, 5.0], [10.6, 5.0], [10.7, 5.0], [10.8, 5.0], [10.9, 5.0], [11.0, 5.0], [11.1, 5.0], [11.2, 5.0], [11.3, 5.0], [11.4, 5.0], [11.5, 5.0], [11.6, 5.0], [11.7, 5.0], [11.8, 5.0], [11.9, 5.0], [12.0, 5.0], [12.1, 5.0], [12.2, 5.0], [12.3, 5.0], [12.4, 5.0], [12.5, 5.0], [12.6, 5.0], [12.7, 5.0], [12.8, 5.0], [12.9, 5.0], [13.0, 5.0], [13.1, 5.0], [13.2, 5.0], [13.3, 5.0], [13.4, 5.0], [13.5, 5.0], [13.6, 5.0], [13.7, 5.0], [13.8, 5.0], [13.9, 5.0], [14.0, 5.0], [14.1, 5.0], [14.2, 5.0], [14.3, 5.0], [14.4, 5.0], [14.5, 5.0], [14.6, 5.0], [14.7, 5.0], [14.8, 5.0], [14.9, 5.0], [15.0, 5.0], [15.1, 5.0], [15.2, 5.0], [15.3, 5.0], [15.4, 5.0], [15.5, 5.0], [15.6, 5.0], [15.7, 5.0], [15.8, 5.0], [15.9, 5.0], [16.0, 5.0], [16.1, 5.0], [16.2, 5.0], [16.3, 5.0], [16.4, 5.0], [16.5, 5.0], [16.6, 5.0], [16.7, 5.0], [16.8, 5.0], [16.9, 5.0], [17.0, 5.0], [17.1, 5.0], [17.2, 5.0], [17.3, 5.0], [17.4, 5.0], [17.5, 5.0], [17.6, 5.0], [17.7, 5.0], [17.8, 5.0], [17.9, 5.0], [18.0, 5.0], [18.1, 5.0], [18.2, 5.0], [18.3, 5.0], [18.4, 5.0], [18.5, 5.0], [18.6, 5.0], [18.7, 5.0], [18.8, 5.0], [18.9, 5.0], [19.0, 5.0], [19.1, 5.0], [19.2, 5.0], [19.3, 5.0], [19.4, 5.0], [19.5, 5.0], [19.6, 5.0], [19.7, 5.0], [19.8, 5.0], [19.9, 5.0], [20.0, 5.0], [20.1, 6.0], [20.2, 6.0], [20.3, 6.0], [20.4, 6.0], [20.5, 6.0], [20.6, 6.0], [20.7, 6.0], [20.8, 6.0], [20.9, 6.0], [21.0, 6.0], [21.1, 6.0], [21.2, 6.0], [21.3, 6.0], [21.4, 6.0], [21.5, 6.0], [21.6, 6.0], [21.7, 6.0], [21.8, 6.0], [21.9, 6.0], [22.0, 6.0], [22.1, 6.0], [22.2, 6.0], [22.3, 6.0], [22.4, 6.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 6.0], [23.7, 6.0], [23.8, 6.0], [23.9, 6.0], [24.0, 6.0], [24.1, 6.0], [24.2, 6.0], [24.3, 6.0], [24.4, 6.0], [24.5, 6.0], [24.6, 6.0], [24.7, 6.0], [24.8, 6.0], [24.9, 6.0], [25.0, 6.0], [25.1, 6.0], [25.2, 6.0], [25.3, 6.0], [25.4, 6.0], [25.5, 6.0], [25.6, 6.0], [25.7, 6.0], [25.8, 6.0], [25.9, 6.0], [26.0, 6.0], [26.1, 6.0], [26.2, 6.0], [26.3, 6.0], [26.4, 6.0], [26.5, 6.0], [26.6, 6.0], [26.7, 6.0], [26.8, 6.0], [26.9, 6.0], [27.0, 6.0], [27.1, 6.0], [27.2, 6.0], [27.3, 6.0], [27.4, 6.0], [27.5, 6.0], [27.6, 6.0], [27.7, 6.0], [27.8, 6.0], [27.9, 6.0], [28.0, 6.0], [28.1, 6.0], [28.2, 6.0], [28.3, 6.0], [28.4, 6.0], [28.5, 6.0], [28.6, 6.0], [28.7, 6.0], [28.8, 6.0], [28.9, 6.0], [29.0, 6.0], [29.1, 6.0], [29.2, 6.0], [29.3, 6.0], [29.4, 6.0], [29.5, 6.0], [29.6, 6.0], [29.7, 6.0], [29.8, 6.0], [29.9, 6.0], [30.0, 6.0], [30.1, 6.0], [30.2, 6.0], [30.3, 6.0], [30.4, 6.0], [30.5, 6.0], [30.6, 6.0], [30.7, 6.0], [30.8, 6.0], [30.9, 6.0], [31.0, 6.0], [31.1, 6.0], [31.2, 6.0], [31.3, 6.0], [31.4, 6.0], [31.5, 6.0], [31.6, 6.0], [31.7, 6.0], [31.8, 6.0], [31.9, 6.0], [32.0, 6.0], [32.1, 6.0], [32.2, 6.0], [32.3, 6.0], [32.4, 6.0], [32.5, 6.0], [32.6, 6.0], [32.7, 6.0], [32.8, 6.0], [32.9, 6.0], [33.0, 6.0], [33.1, 6.0], [33.2, 6.0], [33.3, 6.0], [33.4, 6.0], [33.5, 6.0], [33.6, 6.0], [33.7, 6.0], [33.8, 6.0], [33.9, 6.0], [34.0, 6.0], [34.1, 6.0], [34.2, 6.0], [34.3, 6.0], [34.4, 6.0], [34.5, 6.0], [34.6, 6.0], [34.7, 6.0], [34.8, 6.0], [34.9, 6.0], [35.0, 6.0], [35.1, 6.0], [35.2, 6.0], [35.3, 6.0], [35.4, 6.0], [35.5, 6.0], [35.6, 6.0], [35.7, 6.0], [35.8, 6.0], [35.9, 6.0], [36.0, 6.0], [36.1, 6.0], [36.2, 6.0], [36.3, 6.0], [36.4, 6.0], [36.5, 6.0], [36.6, 6.0], [36.7, 6.0], [36.8, 6.0], [36.9, 6.0], [37.0, 6.0], [37.1, 6.0], [37.2, 6.0], [37.3, 6.0], [37.4, 6.0], [37.5, 6.0], [37.6, 6.0], [37.7, 6.0], [37.8, 6.0], [37.9, 6.0], [38.0, 6.0], [38.1, 6.0], [38.2, 6.0], [38.3, 6.0], [38.4, 6.0], [38.5, 6.0], [38.6, 6.0], [38.7, 6.0], [38.8, 6.0], [38.9, 6.0], [39.0, 6.0], [39.1, 6.0], [39.2, 6.0], [39.3, 6.0], [39.4, 6.0], [39.5, 6.0], [39.6, 6.0], [39.7, 6.0], [39.8, 6.0], [39.9, 6.0], [40.0, 6.0], [40.1, 6.0], [40.2, 6.0], [40.3, 6.0], [40.4, 6.0], [40.5, 6.0], [40.6, 6.0], [40.7, 6.0], [40.8, 6.0], [40.9, 6.0], [41.0, 6.0], [41.1, 6.0], [41.2, 6.0], [41.3, 6.0], [41.4, 6.0], [41.5, 6.0], [41.6, 6.0], [41.7, 6.0], [41.8, 6.0], [41.9, 6.0], [42.0, 6.0], [42.1, 6.0], [42.2, 6.0], [42.3, 6.0], [42.4, 6.0], [42.5, 6.0], [42.6, 6.0], [42.7, 6.0], [42.8, 6.0], [42.9, 6.0], [43.0, 6.0], [43.1, 6.0], [43.2, 6.0], [43.3, 6.0], [43.4, 6.0], [43.5, 6.0], [43.6, 6.0], [43.7, 6.0], [43.8, 6.0], [43.9, 6.0], [44.0, 6.0], [44.1, 6.0], [44.2, 6.0], [44.3, 6.0], [44.4, 6.0], [44.5, 6.0], [44.6, 6.0], [44.7, 6.0], [44.8, 6.0], [44.9, 6.0], [45.0, 6.0], [45.1, 6.0], [45.2, 6.0], [45.3, 6.0], [45.4, 6.0], [45.5, 6.0], [45.6, 6.0], [45.7, 6.0], [45.8, 6.0], [45.9, 6.0], [46.0, 6.0], [46.1, 6.0], [46.2, 6.0], [46.3, 6.0], [46.4, 6.0], [46.5, 6.0], [46.6, 6.0], [46.7, 6.0], [46.8, 6.0], [46.9, 6.0], [47.0, 6.0], [47.1, 6.0], [47.2, 6.0], [47.3, 6.0], [47.4, 6.0], [47.5, 6.0], [47.6, 6.0], [47.7, 6.0], [47.8, 6.0], [47.9, 6.0], [48.0, 6.0], [48.1, 6.0], [48.2, 6.0], [48.3, 6.0], [48.4, 6.0], [48.5, 6.0], [48.6, 6.0], [48.7, 6.0], [48.8, 6.0], [48.9, 6.0], [49.0, 6.0], [49.1, 6.0], [49.2, 6.0], [49.3, 6.0], [49.4, 6.0], [49.5, 6.0], [49.6, 6.0], [49.7, 6.0], [49.8, 6.0], [49.9, 6.0], [50.0, 6.0], [50.1, 6.0], [50.2, 6.0], [50.3, 6.0], [50.4, 6.0], [50.5, 6.0], [50.6, 6.0], [50.7, 6.0], [50.8, 6.0], [50.9, 6.0], [51.0, 6.0], [51.1, 6.0], [51.2, 6.0], [51.3, 6.0], [51.4, 6.0], [51.5, 6.0], [51.6, 6.0], [51.7, 6.0], [51.8, 6.0], [51.9, 6.0], [52.0, 6.0], [52.1, 6.0], [52.2, 6.0], [52.3, 6.0], [52.4, 6.0], [52.5, 6.0], [52.6, 6.0], [52.7, 6.0], [52.8, 6.0], [52.9, 6.0], [53.0, 6.0], [53.1, 6.0], [53.2, 6.0], [53.3, 6.0], [53.4, 6.0], [53.5, 6.0], [53.6, 6.0], [53.7, 6.0], [53.8, 6.0], [53.9, 6.0], [54.0, 6.0], [54.1, 6.0], [54.2, 6.0], [54.3, 6.0], [54.4, 6.0], [54.5, 6.0], [54.6, 6.0], [54.7, 6.0], [54.8, 6.0], [54.9, 6.0], [55.0, 6.0], [55.1, 6.0], [55.2, 6.0], [55.3, 6.0], [55.4, 6.0], [55.5, 6.0], [55.6, 6.0], [55.7, 6.0], [55.8, 6.0], [55.9, 6.0], [56.0, 6.0], [56.1, 6.0], [56.2, 6.0], [56.3, 6.0], [56.4, 6.0], [56.5, 6.0], [56.6, 6.0], [56.7, 6.0], [56.8, 6.0], [56.9, 6.0], [57.0, 6.0], [57.1, 6.0], [57.2, 6.0], [57.3, 6.0], [57.4, 6.0], [57.5, 6.0], [57.6, 6.0], [57.7, 6.0], [57.8, 6.0], [57.9, 6.0], [58.0, 6.0], [58.1, 6.0], [58.2, 6.0], [58.3, 6.0], [58.4, 6.0], [58.5, 6.0], [58.6, 6.0], [58.7, 6.0], [58.8, 6.0], [58.9, 6.0], [59.0, 6.0], [59.1, 6.0], [59.2, 6.0], [59.3, 6.0], [59.4, 6.0], [59.5, 6.0], [59.6, 6.0], [59.7, 6.0], [59.8, 6.0], [59.9, 6.0], [60.0, 6.0], [60.1, 6.0], [60.2, 6.0], [60.3, 6.0], [60.4, 6.0], [60.5, 6.0], [60.6, 6.0], [60.7, 6.0], [60.8, 6.0], [60.9, 6.0], [61.0, 6.0], [61.1, 6.0], [61.2, 6.0], [61.3, 6.0], [61.4, 6.0], [61.5, 6.0], [61.6, 6.0], [61.7, 6.0], [61.8, 6.0], [61.9, 6.0], [62.0, 6.0], [62.1, 6.0], [62.2, 6.0], [62.3, 6.0], [62.4, 6.0], [62.5, 6.0], [62.6, 6.0], [62.7, 6.0], [62.8, 6.0], [62.9, 6.0], [63.0, 6.0], [63.1, 6.0], [63.2, 6.0], [63.3, 6.0], [63.4, 6.0], [63.5, 6.0], [63.6, 6.0], [63.7, 6.0], [63.8, 6.0], [63.9, 7.0], [64.0, 7.0], [64.1, 7.0], [64.2, 7.0], [64.3, 7.0], [64.4, 7.0], [64.5, 7.0], [64.6, 7.0], [64.7, 7.0], [64.8, 7.0], [64.9, 7.0], [65.0, 7.0], [65.1, 7.0], [65.2, 7.0], [65.3, 7.0], [65.4, 7.0], [65.5, 7.0], [65.6, 7.0], [65.7, 7.0], [65.8, 7.0], [65.9, 7.0], [66.0, 7.0], [66.1, 7.0], [66.2, 7.0], [66.3, 7.0], [66.4, 7.0], [66.5, 7.0], [66.6, 7.0], [66.7, 7.0], [66.8, 7.0], [66.9, 7.0], [67.0, 7.0], [67.1, 7.0], [67.2, 7.0], [67.3, 7.0], [67.4, 7.0], [67.5, 7.0], [67.6, 7.0], [67.7, 7.0], [67.8, 7.0], [67.9, 7.0], [68.0, 7.0], [68.1, 7.0], [68.2, 7.0], [68.3, 7.0], [68.4, 7.0], [68.5, 7.0], [68.6, 7.0], [68.7, 7.0], [68.8, 7.0], [68.9, 7.0], [69.0, 7.0], [69.1, 7.0], [69.2, 7.0], [69.3, 7.0], [69.4, 7.0], [69.5, 7.0], [69.6, 7.0], [69.7, 7.0], [69.8, 7.0], [69.9, 7.0], [70.0, 7.0], [70.1, 7.0], [70.2, 7.0], [70.3, 7.0], [70.4, 7.0], [70.5, 7.0], [70.6, 7.0], [70.7, 7.0], [70.8, 7.0], [70.9, 7.0], [71.0, 7.0], [71.1, 7.0], [71.2, 7.0], [71.3, 7.0], [71.4, 7.0], [71.5, 7.0], [71.6, 7.0], [71.7, 7.0], [71.8, 7.0], [71.9, 7.0], [72.0, 7.0], [72.1, 7.0], [72.2, 7.0], [72.3, 7.0], [72.4, 7.0], [72.5, 7.0], [72.6, 7.0], [72.7, 7.0], [72.8, 7.0], [72.9, 7.0], [73.0, 7.0], [73.1, 7.0], [73.2, 7.0], [73.3, 7.0], [73.4, 7.0], [73.5, 7.0], [73.6, 7.0], [73.7, 7.0], [73.8, 7.0], [73.9, 7.0], [74.0, 7.0], [74.1, 7.0], [74.2, 7.0], [74.3, 7.0], [74.4, 7.0], [74.5, 7.0], [74.6, 7.0], [74.7, 7.0], [74.8, 7.0], [74.9, 7.0], [75.0, 7.0], [75.1, 7.0], [75.2, 7.0], [75.3, 7.0], [75.4, 7.0], [75.5, 7.0], [75.6, 7.0], [75.7, 7.0], [75.8, 7.0], [75.9, 7.0], [76.0, 7.0], [76.1, 7.0], [76.2, 7.0], [76.3, 7.0], [76.4, 7.0], [76.5, 7.0], [76.6, 7.0], [76.7, 7.0], [76.8, 7.0], [76.9, 7.0], [77.0, 7.0], [77.1, 7.0], [77.2, 7.0], [77.3, 7.0], [77.4, 7.0], [77.5, 7.0], [77.6, 7.0], [77.7, 7.0], [77.8, 7.0], [77.9, 7.0], [78.0, 7.0], [78.1, 7.0], [78.2, 7.0], [78.3, 7.0], [78.4, 7.0], [78.5, 7.0], [78.6, 7.0], [78.7, 7.0], [78.8, 7.0], [78.9, 7.0], [79.0, 7.0], [79.1, 7.0], [79.2, 7.0], [79.3, 7.0], [79.4, 7.0], [79.5, 7.0], [79.6, 7.0], [79.7, 7.0], [79.8, 7.0], [79.9, 7.0], [80.0, 7.0], [80.1, 7.0], [80.2, 7.0], [80.3, 7.0], [80.4, 7.0], [80.5, 7.0], [80.6, 7.0], [80.7, 7.0], [80.8, 7.0], [80.9, 7.0], [81.0, 7.0], [81.1, 7.0], [81.2, 7.0], [81.3, 7.0], [81.4, 7.0], [81.5, 7.0], [81.6, 7.0], [81.7, 7.0], [81.8, 7.0], [81.9, 7.0], [82.0, 7.0], [82.1, 7.0], [82.2, 7.0], [82.3, 7.0], [82.4, 7.0], [82.5, 7.0], [82.6, 7.0], [82.7, 7.0], [82.8, 7.0], [82.9, 7.0], [83.0, 7.0], [83.1, 7.0], [83.2, 7.0], [83.3, 7.0], [83.4, 7.0], [83.5, 7.0], [83.6, 7.0], [83.7, 7.0], [83.8, 7.0], [83.9, 7.0], [84.0, 7.0], [84.1, 7.0], [84.2, 7.0], [84.3, 7.0], [84.4, 7.0], [84.5, 7.0], [84.6, 7.0], [84.7, 7.0], [84.8, 7.0], [84.9, 7.0], [85.0, 8.0], [85.1, 8.0], [85.2, 8.0], [85.3, 8.0], [85.4, 8.0], [85.5, 8.0], [85.6, 8.0], [85.7, 8.0], [85.8, 8.0], [85.9, 8.0], [86.0, 8.0], [86.1, 8.0], [86.2, 8.0], [86.3, 8.0], [86.4, 8.0], [86.5, 8.0], [86.6, 8.0], [86.7, 8.0], [86.8, 8.0], [86.9, 8.0], [87.0, 8.0], [87.1, 8.0], [87.2, 8.0], [87.3, 8.0], [87.4, 8.0], [87.5, 8.0], [87.6, 8.0], [87.7, 8.0], [87.8, 8.0], [87.9, 8.0], [88.0, 8.0], [88.1, 8.0], [88.2, 8.0], [88.3, 8.0], [88.4, 8.0], [88.5, 8.0], [88.6, 8.0], [88.7, 8.0], [88.8, 8.0], [88.9, 8.0], [89.0, 8.0], [89.1, 8.0], [89.2, 8.0], [89.3, 8.0], [89.4, 8.0], [89.5, 8.0], [89.6, 8.0], [89.7, 8.0], [89.8, 8.0], [89.9, 8.0], [90.0, 8.0], [90.1, 8.0], [90.2, 8.0], [90.3, 8.0], [90.4, 8.0], [90.5, 8.0], [90.6, 8.0], [90.7, 8.0], [90.8, 8.0], [90.9, 8.0], [91.0, 8.0], [91.1, 8.0], [91.2, 8.0], [91.3, 8.0], [91.4, 8.0], [91.5, 8.0], [91.6, 8.0], [91.7, 8.0], [91.8, 8.0], [91.9, 8.0], [92.0, 9.0], [92.1, 9.0], [92.2, 9.0], [92.3, 9.0], [92.4, 9.0], [92.5, 9.0], [92.6, 9.0], [92.7, 9.0], [92.8, 9.0], [92.9, 9.0], [93.0, 9.0], [93.1, 9.0], [93.2, 9.0], [93.3, 9.0], [93.4, 9.0], [93.5, 9.0], [93.6, 9.0], [93.7, 9.0], [93.8, 9.0], [93.9, 9.0], [94.0, 9.0], [94.1, 9.0], [94.2, 9.0], [94.3, 9.0], [94.4, 9.0], [94.5, 9.0], [94.6, 10.0], [94.7, 10.0], [94.8, 10.0], [94.9, 10.0], [95.0, 10.0], [95.1, 10.0], [95.2, 10.0], [95.3, 10.0], [95.4, 10.0], [95.5, 10.0], [95.6, 10.0], [95.7, 10.0], [95.8, 10.0], [95.9, 10.0], [96.0, 11.0], [96.1, 11.0], [96.2, 11.0], [96.3, 11.0], [96.4, 11.0], [96.5, 11.0], [96.6, 11.0], [96.7, 11.0], [96.8, 11.0], [96.9, 12.0], [97.0, 12.0], [97.1, 12.0], [97.2, 12.0], [97.3, 12.0], [97.4, 12.0], [97.5, 13.0], [97.6, 13.0], [97.7, 13.0], [97.8, 13.0], [97.9, 14.0], [98.0, 14.0], [98.1, 14.0], [98.2, 15.0], [98.3, 15.0], [98.4, 16.0], [98.5, 16.0], [98.6, 17.0], [98.7, 19.0], [98.8, 21.0], [98.9, 25.0], [99.0, 30.0], [99.1, 34.0], [99.2, 41.0], [99.3, 43.0], [99.4, 45.0], [99.5, 46.0], [99.6, 49.0], [99.7, 63.0], [99.8, 71.0], [99.9, 74.0], [100.0, 85.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 411640.0, "minX": 0.0, "maxY": 411640.0, "series": [{"data": [[0.0, 411640.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4.9E-324, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 411640.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 411640.0, "series": [{"data": [[0.0, 411640.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.8949040370615564, "minX": 1.71234942E12, "maxY": 5.0, "series": [{"data": [[1.71234984E12, 5.0], [1.71234966E12, 5.0], [1.71235002E12, 5.0], [1.71234948E12, 4.989378047965856], [1.7123499E12, 5.0], [1.7123496E12, 5.0], [1.71234942E12, 2.8949040370615564], [1.71234978E12, 5.0], [1.71234972E12, 5.0], [1.71234996E12, 5.0], [1.71234954E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235002E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4.378765060240966, "minX": 1.0, "maxY": 7.070963042280669, "series": [{"data": [[1.0, 4.378765060240966], [2.0, 4.611608881963381], [4.0, 5.576747453459793], [5.0, 7.070963042280669], [3.0, 5.240346498311548]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.8829341171898575, 6.96162666407541]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 16434.6, "minX": 1.71234942E12, "maxY": 288912.9166666667, "series": [{"data": [[1.71234984E12, 267653.63333333336], [1.71234966E12, 282685.06666666665], [1.71235002E12, 54224.316666666666], [1.71234948E12, 288912.9166666667], [1.7123499E12, 260135.41666666666], [1.7123496E12, 280903.48333333334], [1.71234942E12, 145812.5], [1.71234978E12, 273152.43333333335], [1.71234972E12, 274713.8333333333], [1.71234996E12, 237043.21666666667], [1.71234954E12, 283103.13333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71234984E12, 81123.9], [1.71234966E12, 85681.05], [1.71235002E12, 16434.6], [1.71234948E12, 87568.65], [1.7123499E12, 78844.35], [1.7123496E12, 85140.9], [1.71234942E12, 44196.75], [1.71234978E12, 82791.15], [1.71234972E12, 83265.0], [1.71234996E12, 71843.85], [1.71234954E12, 85807.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235002E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5.073770130156649, "minX": 1.71234942E12, "maxY": 8.10886735607848, "series": [{"data": [[1.71234984E12, 7.178789481274946], [1.71234966E12, 6.792371241949074], [1.71235002E12, 7.6336022781205415], [1.71234948E12, 6.625514953125316], [1.7123499E12, 7.3859965869463196], [1.7123496E12, 6.8352113966377805], [1.71234942E12, 5.073770130156649], [1.71234978E12, 7.035730268271428], [1.71234972E12, 6.994449648711914], [1.71234996E12, 8.10886735607848], [1.71234954E12, 6.783610580856292]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235002E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5.068563864990089, "minX": 1.71234942E12, "maxY": 8.106587411448649, "series": [{"data": [[1.71234984E12, 7.176746310273488], [1.71234966E12, 6.789503630032593], [1.71235002E12, 7.631585192216403], [1.71234948E12, 6.622241521366348], [1.7123499E12, 7.383894343729111], [1.7123496E12, 6.83269204342453], [1.71234942E12, 5.068563864990089], [1.71234978E12, 7.033280731092631], [1.71234972E12, 6.991943793910996], [1.71234996E12, 8.106587411448649], [1.71234954E12, 6.781474411417122]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235002E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71234942E12, "maxY": 7.500551511140607E-4, "series": [{"data": [[1.71234984E12, 4.807461179750991E-5], [1.71234966E12, 0.0], [1.71235002E12, 0.0], [1.71234948E12, 4.4536486516578755E-5], [1.7123499E12, 9.892909257289899E-5], [1.7123496E12, 6.870963309055953E-5], [1.71234942E12, 7.500551511140607E-4], [1.71234978E12, 4.710648420755135E-5], [1.71234972E12, 7.025761124121727E-5], [1.71234996E12, 8.142659392557657E-5], [1.71234954E12, 6.817562039814482E-5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235002E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.71234942E12, "maxY": 85.0, "series": [{"data": [[1.71234984E12, 82.0], [1.71234966E12, 80.0], [1.71235002E12, 78.0], [1.71234948E12, 82.0], [1.7123499E12, 85.0], [1.7123496E12, 80.0], [1.71234942E12, 75.0], [1.71234978E12, 80.0], [1.71234972E12, 82.0], [1.71234996E12, 82.0], [1.71234954E12, 85.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71234984E12, 4.0], [1.71234966E12, 4.0], [1.71235002E12, 4.0], [1.71234948E12, 3.0], [1.7123499E12, 4.0], [1.7123496E12, 4.0], [1.71234942E12, 3.0], [1.71234978E12, 4.0], [1.71234972E12, 4.0], [1.71234996E12, 4.0], [1.71234954E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71234984E12, 8.0], [1.71234966E12, 8.0], [1.71235002E12, 9.0], [1.71234948E12, 8.0], [1.7123499E12, 9.0], [1.7123496E12, 8.0], [1.71234942E12, 6.0], [1.71234978E12, 8.0], [1.71234972E12, 8.0], [1.71234996E12, 9.0], [1.71234954E12, 8.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71234984E12, 25.0], [1.71234966E12, 26.9900000000016], [1.71235002E12, 21.0], [1.71234948E12, 31.0], [1.7123499E12, 38.0], [1.7123496E12, 36.9900000000016], [1.71234942E12, 10.0], [1.71234978E12, 29.9900000000016], [1.71234972E12, 20.0], [1.71234996E12, 31.0], [1.71234954E12, 24.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71234984E12, 6.0], [1.71234966E12, 6.0], [1.71235002E12, 7.0], [1.71234948E12, 6.0], [1.7123499E12, 7.0], [1.7123496E12, 6.0], [1.71234942E12, 5.0], [1.71234978E12, 6.0], [1.71234972E12, 6.0], [1.71234996E12, 7.0], [1.71234954E12, 6.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71234984E12, 10.0], [1.71234966E12, 9.0], [1.71235002E12, 12.0], [1.71234948E12, 9.0], [1.7123499E12, 11.0], [1.7123496E12, 9.0], [1.71234942E12, 6.0], [1.71234978E12, 10.0], [1.71234972E12, 9.0], [1.71234996E12, 11.0], [1.71234954E12, 9.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235002E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4.0, "minX": 189.0, "maxY": 9.0, "series": [{"data": [[189.0, 4.0], [205.0, 4.0], [206.0, 4.0], [214.0, 4.0], [222.0, 4.0], [231.0, 4.0], [233.0, 4.0], [232.0, 4.0], [240.0, 4.0], [244.0, 4.0], [351.0, 5.0], [372.0, 7.0], [374.0, 9.0], [396.0, 5.0], [413.0, 4.0], [411.0, 5.0], [414.0, 6.0], [400.0, 7.0], [429.0, 5.0], [418.0, 4.0], [431.0, 4.0], [439.0, 8.0], [441.0, 7.0], [459.0, 4.0], [460.0, 4.0], [461.0, 5.0], [449.0, 7.0], [452.0, 7.0], [471.0, 4.0], [468.0, 6.0], [472.0, 6.0], [476.0, 7.0], [495.0, 5.0], [485.0, 7.0], [490.0, 7.0], [482.0, 7.0], [491.0, 7.0], [488.0, 7.0], [509.0, 7.0], [499.0, 7.0], [500.0, 6.0], [511.0, 7.0], [496.0, 7.0], [510.0, 8.0], [542.0, 6.0], [531.0, 6.0], [521.0, 6.0], [526.0, 7.5], [534.0, 6.0], [530.0, 6.0], [527.0, 6.0], [543.0, 6.0], [529.0, 6.0], [536.0, 7.0], [541.0, 6.0], [513.0, 7.0], [519.0, 7.0], [516.0, 8.0], [559.0, 5.0], [553.0, 6.0], [549.0, 5.0], [550.0, 7.0], [572.0, 5.0], [569.0, 6.0], [554.0, 6.0], [545.0, 6.0], [560.0, 6.0], [567.0, 7.0], [565.0, 7.0], [562.0, 8.0], [558.0, 7.0], [557.0, 6.0], [604.0, 7.0], [589.0, 5.0], [585.0, 6.0], [584.0, 8.0], [594.0, 6.0], [596.0, 7.0], [598.0, 7.0], [597.0, 7.0], [579.0, 6.0], [578.0, 7.0], [602.0, 7.0], [583.0, 8.0], [580.0, 8.0], [577.0, 7.0], [590.0, 7.0], [591.0, 8.0], [606.0, 6.0], [605.0, 6.0], [586.0, 6.0], [587.0, 7.0], [588.0, 8.0], [635.0, 6.0], [620.0, 5.0], [628.0, 5.0], [619.0, 5.0], [627.0, 6.0], [616.0, 6.0], [617.0, 7.0], [621.0, 6.0], [608.0, 7.0], [623.0, 7.0], [610.0, 6.0], [622.0, 7.0], [614.0, 6.0], [612.0, 7.0], [613.0, 7.0], [632.0, 6.0], [615.0, 6.0], [634.0, 6.0], [633.0, 7.0], [611.0, 7.0], [629.0, 6.0], [630.0, 6.0], [637.0, 7.0], [639.0, 7.0], [636.0, 6.0], [669.0, 6.0], [670.0, 6.0], [644.0, 6.0], [647.0, 7.0], [645.0, 7.0], [643.0, 7.0], [640.0, 6.0], [641.0, 6.0], [654.0, 6.0], [652.0, 6.0], [655.0, 6.0], [651.0, 6.0], [650.0, 7.0], [648.0, 6.0], [649.0, 6.0], [642.0, 6.0], [664.0, 6.0], [660.0, 6.0], [658.0, 6.0], [659.0, 6.0], [661.0, 6.0], [662.0, 7.0], [671.0, 6.0], [665.0, 6.0], [667.0, 7.0], [676.0, 6.0], [698.0, 6.0], [699.0, 6.0], [700.0, 7.0], [702.0, 6.0], [703.0, 6.0], [682.0, 5.0], [681.0, 7.0], [685.0, 6.0], [686.0, 6.0], [687.0, 7.0], [678.0, 6.0], [696.0, 6.0], [679.0, 7.0], [688.0, 6.0], [692.0, 6.0], [694.0, 6.0], [693.0, 7.0], [695.0, 6.0], [691.0, 7.0], [690.0, 7.0], [689.0, 7.0], [672.0, 6.0], [674.0, 6.0], [673.0, 7.0], [675.0, 6.0], [677.0, 6.0], [709.0, 6.0], [704.0, 6.0], [724.0, 6.0], [727.0, 6.0], [725.0, 6.0], [714.0, 6.0], [712.0, 6.0], [713.0, 6.0], [715.0, 7.0], [716.0, 6.0], [717.0, 6.0], [718.0, 6.0], [719.0, 6.0], [733.0, 6.0], [731.0, 6.0], [732.0, 6.0], [730.0, 6.0], [711.0, 6.0], [728.0, 6.0], [729.0, 6.0], [710.0, 6.0], [705.0, 6.0], [707.0, 6.0], [722.0, 6.0], [735.0, 6.0], [734.0, 6.0], [720.0, 6.0], [721.0, 6.0], [723.0, 6.0], [765.0, 6.0], [745.0, 6.0], [744.0, 6.0], [746.0, 6.0], [747.0, 6.0], [750.0, 6.0], [748.0, 6.0], [749.0, 6.0], [752.0, 6.0], [766.0, 6.0], [767.0, 6.0], [756.0, 6.0], [754.0, 6.0], [753.0, 6.0], [755.0, 6.0], [739.0, 6.0], [763.0, 6.0], [764.0, 6.0], [760.0, 6.0], [741.0, 6.0], [743.0, 6.0], [742.0, 6.0], [740.0, 6.0], [761.0, 6.0], [762.0, 6.0], [758.0, 6.0], [759.0, 6.0], [757.0, 6.0], [751.0, 6.0], [737.0, 6.0], [738.0, 6.0], [736.0, 6.0], [796.0, 6.0], [769.0, 5.0], [770.0, 6.0], [799.0, 6.0], [798.0, 6.0], [797.0, 6.0], [785.0, 6.0], [790.0, 6.0], [791.0, 6.0], [789.0, 6.0], [788.0, 6.0], [787.0, 6.0], [786.0, 6.0], [784.0, 6.0], [778.0, 6.0], [780.0, 6.0], [779.0, 6.0], [782.0, 6.0], [783.0, 6.0], [781.0, 6.0], [768.0, 6.0], [777.0, 6.0], [776.0, 6.0], [774.0, 6.0], [792.0, 6.0], [775.0, 6.0], [794.0, 6.0], [793.0, 6.0], [772.0, 6.0], [773.0, 6.0], [771.0, 6.0], [829.0, 6.0], [828.0, 6.0], [816.0, 6.0], [818.0, 6.0], [807.0, 6.0], [811.0, 6.0], [809.0, 6.0], [810.0, 6.0], [812.0, 6.0], [813.0, 6.0], [815.0, 6.0], [801.0, 6.0], [800.0, 6.0], [806.0, 6.0], [805.0, 6.0], [804.0, 6.0], [802.0, 6.0], [819.0, 6.0], [822.0, 6.0], [821.0, 6.0], [820.0, 6.0], [817.0, 6.0], [825.0, 6.0], [853.0, 6.0], [844.0, 6.0], [855.0, 6.0], [847.0, 5.0], [833.0, 6.0], [848.0, 6.0], [837.0, 6.0], [843.0, 6.0], [845.0, 6.0], [864.0, 6.0], [889.0, 5.0], [870.0, 5.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 889.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4.0, "minX": 189.0, "maxY": 8.5, "series": [{"data": [[189.0, 4.0], [205.0, 4.0], [206.0, 4.0], [214.0, 4.0], [222.0, 4.0], [231.0, 4.0], [233.0, 4.0], [232.0, 4.0], [240.0, 4.0], [244.0, 4.0], [351.0, 5.0], [372.0, 7.0], [374.0, 8.5], [396.0, 5.0], [413.0, 4.0], [411.0, 5.0], [414.0, 6.0], [400.0, 7.0], [429.0, 5.0], [418.0, 4.0], [431.0, 4.0], [439.0, 8.0], [441.0, 7.0], [459.0, 4.0], [460.0, 4.0], [461.0, 5.0], [449.0, 7.0], [452.0, 7.0], [471.0, 4.0], [468.0, 6.0], [472.0, 6.0], [476.0, 7.0], [495.0, 5.0], [485.0, 7.0], [490.0, 7.0], [482.0, 7.0], [491.0, 7.0], [488.0, 7.0], [509.0, 7.0], [499.0, 7.0], [500.0, 6.0], [511.0, 7.0], [496.0, 7.0], [510.0, 8.0], [542.0, 6.0], [531.0, 6.0], [521.0, 6.0], [526.0, 7.5], [534.0, 6.0], [530.0, 6.0], [527.0, 6.0], [543.0, 6.0], [529.0, 6.0], [536.0, 7.0], [541.0, 6.0], [513.0, 6.0], [519.0, 7.0], [516.0, 8.0], [559.0, 5.0], [553.0, 6.0], [549.0, 5.0], [550.0, 7.0], [572.0, 5.0], [569.0, 6.0], [554.0, 6.0], [545.0, 6.0], [560.0, 6.0], [567.0, 7.0], [565.0, 7.0], [562.0, 8.0], [558.0, 7.0], [557.0, 6.0], [604.0, 7.0], [589.0, 5.0], [585.0, 6.0], [584.0, 8.0], [594.0, 6.0], [596.0, 7.0], [598.0, 7.0], [597.0, 7.0], [579.0, 6.0], [578.0, 7.0], [602.0, 7.0], [583.0, 8.0], [580.0, 8.0], [577.0, 7.0], [590.0, 7.0], [591.0, 8.0], [606.0, 6.0], [605.0, 6.0], [586.0, 6.0], [587.0, 7.0], [588.0, 8.0], [635.0, 6.0], [620.0, 5.0], [628.0, 5.0], [619.0, 5.0], [627.0, 6.0], [616.0, 6.0], [617.0, 7.0], [621.0, 6.0], [608.0, 7.0], [623.0, 7.0], [610.0, 6.0], [622.0, 7.0], [614.0, 6.0], [612.0, 7.0], [613.0, 7.0], [632.0, 6.0], [615.0, 6.0], [634.0, 6.0], [633.0, 7.0], [611.0, 7.0], [629.0, 6.0], [630.0, 6.0], [637.0, 7.0], [639.0, 7.0], [636.0, 6.0], [669.0, 6.0], [670.0, 6.0], [644.0, 6.0], [647.0, 7.0], [645.0, 7.0], [643.0, 7.0], [640.0, 6.0], [641.0, 6.0], [654.0, 6.0], [652.0, 6.0], [655.0, 6.0], [651.0, 6.0], [650.0, 7.0], [648.0, 6.0], [649.0, 6.0], [642.0, 6.0], [664.0, 6.0], [660.0, 6.0], [658.0, 6.0], [659.0, 6.0], [661.0, 6.0], [662.0, 7.0], [671.0, 6.0], [665.0, 6.0], [667.0, 7.0], [676.0, 6.0], [698.0, 6.0], [699.0, 6.0], [700.0, 7.0], [702.0, 6.0], [703.0, 6.0], [682.0, 5.0], [681.0, 7.0], [685.0, 6.0], [686.0, 6.0], [687.0, 7.0], [678.0, 6.0], [696.0, 6.0], [679.0, 7.0], [688.0, 6.0], [692.0, 6.0], [694.0, 6.0], [693.0, 7.0], [695.0, 6.0], [691.0, 7.0], [690.0, 7.0], [689.0, 7.0], [672.0, 6.0], [674.0, 6.0], [673.0, 7.0], [675.0, 6.0], [677.0, 6.0], [709.0, 6.0], [704.0, 6.0], [724.0, 6.0], [727.0, 6.0], [725.0, 6.0], [714.0, 6.0], [712.0, 6.0], [713.0, 6.0], [715.0, 7.0], [716.0, 6.0], [717.0, 6.0], [718.0, 6.0], [719.0, 6.0], [733.0, 6.0], [731.0, 6.0], [732.0, 6.0], [730.0, 6.0], [711.0, 6.0], [728.0, 6.0], [729.0, 6.0], [710.0, 6.0], [705.0, 6.0], [707.0, 6.0], [722.0, 6.0], [735.0, 6.0], [734.0, 6.0], [720.0, 6.0], [721.0, 6.0], [723.0, 6.0], [765.0, 6.0], [745.0, 6.0], [744.0, 6.0], [746.0, 6.0], [747.0, 6.0], [750.0, 6.0], [748.0, 6.0], [749.0, 6.0], [752.0, 6.0], [766.0, 6.0], [767.0, 6.0], [756.0, 6.0], [754.0, 6.0], [753.0, 6.0], [755.0, 6.0], [739.0, 6.0], [763.0, 6.0], [764.0, 6.0], [760.0, 6.0], [741.0, 6.0], [743.0, 6.0], [742.0, 6.0], [740.0, 6.0], [761.0, 6.0], [762.0, 6.0], [758.0, 6.0], [759.0, 6.0], [757.0, 6.0], [751.0, 6.0], [737.0, 6.0], [738.0, 6.0], [736.0, 6.0], [796.0, 6.0], [769.0, 5.0], [770.0, 6.0], [799.0, 6.0], [798.0, 6.0], [797.0, 6.0], [785.0, 6.0], [790.0, 6.0], [791.0, 6.0], [789.0, 6.0], [788.0, 6.0], [787.0, 6.0], [786.0, 6.0], [784.0, 6.0], [778.0, 6.0], [780.0, 6.0], [779.0, 6.0], [782.0, 6.0], [783.0, 6.0], [781.0, 6.0], [768.0, 6.0], [777.0, 6.0], [776.0, 6.0], [774.0, 6.0], [792.0, 6.0], [775.0, 6.0], [794.0, 6.0], [793.0, 6.0], [772.0, 6.0], [773.0, 6.0], [771.0, 6.0], [829.0, 6.0], [828.0, 6.0], [816.0, 6.0], [818.0, 6.0], [807.0, 6.0], [811.0, 6.0], [809.0, 6.0], [810.0, 6.0], [812.0, 6.0], [813.0, 6.0], [815.0, 6.0], [801.0, 6.0], [800.0, 6.0], [806.0, 6.0], [805.0, 6.0], [804.0, 6.0], [802.0, 6.0], [819.0, 6.0], [822.0, 6.0], [821.0, 6.0], [820.0, 6.0], [817.0, 6.0], [825.0, 6.0], [853.0, 6.0], [844.0, 6.0], [855.0, 6.0], [847.0, 5.0], [833.0, 6.0], [848.0, 6.0], [837.0, 6.0], [843.0, 6.0], [845.0, 6.0], [864.0, 6.0], [889.0, 5.0], [870.0, 5.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 889.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 140.38333333333333, "minX": 1.71234942E12, "maxY": 748.4666666666667, "series": [{"data": [[1.71234984E12, 693.3666666666667], [1.71234966E12, 732.3166666666667], [1.71235002E12, 140.38333333333333], [1.71234948E12, 748.4666666666667], [1.7123499E12, 673.8833333333333], [1.7123496E12, 727.7], [1.71234942E12, 377.81666666666666], [1.71234978E12, 707.6166666666667], [1.71234972E12, 711.6666666666666], [1.71234996E12, 614.05], [1.71234954E12, 733.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235002E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 140.46666666666667, "minX": 1.71234942E12, "maxY": 748.45, "series": [{"data": [[1.71234984E12, 693.3666666666667], [1.71234966E12, 732.3166666666667], [1.71235002E12, 140.46666666666667], [1.71234948E12, 748.45], [1.7123499E12, 673.8833333333333], [1.7123496E12, 727.7], [1.71234942E12, 377.75], [1.71234978E12, 707.6166666666667], [1.71234972E12, 711.6666666666666], [1.71234996E12, 614.05], [1.71234954E12, 733.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235002E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 140.46666666666667, "minX": 1.71234942E12, "maxY": 748.45, "series": [{"data": [[1.71234984E12, 693.3666666666667], [1.71234966E12, 732.3166666666667], [1.71235002E12, 140.46666666666667], [1.71234948E12, 748.45], [1.7123499E12, 673.8833333333333], [1.7123496E12, 727.7], [1.71234942E12, 377.75], [1.71234978E12, 707.6166666666667], [1.71234972E12, 711.6666666666666], [1.71234996E12, 614.05], [1.71234954E12, 733.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235002E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 140.46666666666667, "minX": 1.71234942E12, "maxY": 748.45, "series": [{"data": [[1.71234984E12, 693.3666666666667], [1.71234966E12, 732.3166666666667], [1.71235002E12, 140.46666666666667], [1.71234948E12, 748.45], [1.7123499E12, 673.8833333333333], [1.7123496E12, 727.7], [1.71234942E12, 377.75], [1.71234978E12, 707.6166666666667], [1.71234972E12, 711.6666666666666], [1.71234996E12, 614.05], [1.71234954E12, 733.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235002E12, "title": "Total Transactions Per Second"}},
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

