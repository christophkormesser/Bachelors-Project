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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 75.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 3.0], [4.6, 3.0], [4.7, 3.0], [4.8, 3.0], [4.9, 3.0], [5.0, 3.0], [5.1, 3.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 3.0], [5.9, 3.0], [6.0, 3.0], [6.1, 3.0], [6.2, 3.0], [6.3, 3.0], [6.4, 3.0], [6.5, 3.0], [6.6, 3.0], [6.7, 3.0], [6.8, 3.0], [6.9, 3.0], [7.0, 3.0], [7.1, 3.0], [7.2, 3.0], [7.3, 3.0], [7.4, 3.0], [7.5, 3.0], [7.6, 3.0], [7.7, 3.0], [7.8, 3.0], [7.9, 3.0], [8.0, 3.0], [8.1, 3.0], [8.2, 3.0], [8.3, 3.0], [8.4, 3.0], [8.5, 3.0], [8.6, 3.0], [8.7, 3.0], [8.8, 3.0], [8.9, 3.0], [9.0, 3.0], [9.1, 3.0], [9.2, 3.0], [9.3, 3.0], [9.4, 3.0], [9.5, 3.0], [9.6, 3.0], [9.7, 3.0], [9.8, 3.0], [9.9, 3.0], [10.0, 3.0], [10.1, 3.0], [10.2, 3.0], [10.3, 3.0], [10.4, 3.0], [10.5, 3.0], [10.6, 3.0], [10.7, 3.0], [10.8, 3.0], [10.9, 3.0], [11.0, 3.0], [11.1, 3.0], [11.2, 3.0], [11.3, 3.0], [11.4, 3.0], [11.5, 3.0], [11.6, 3.0], [11.7, 3.0], [11.8, 3.0], [11.9, 3.0], [12.0, 3.0], [12.1, 3.0], [12.2, 3.0], [12.3, 3.0], [12.4, 3.0], [12.5, 3.0], [12.6, 3.0], [12.7, 3.0], [12.8, 3.0], [12.9, 3.0], [13.0, 3.0], [13.1, 3.0], [13.2, 3.0], [13.3, 3.0], [13.4, 3.0], [13.5, 3.0], [13.6, 3.0], [13.7, 3.0], [13.8, 3.0], [13.9, 3.0], [14.0, 3.0], [14.1, 3.0], [14.2, 3.0], [14.3, 3.0], [14.4, 3.0], [14.5, 3.0], [14.6, 3.0], [14.7, 3.0], [14.8, 3.0], [14.9, 3.0], [15.0, 3.0], [15.1, 3.0], [15.2, 3.0], [15.3, 3.0], [15.4, 3.0], [15.5, 3.0], [15.6, 3.0], [15.7, 3.0], [15.8, 3.0], [15.9, 3.0], [16.0, 3.0], [16.1, 3.0], [16.2, 3.0], [16.3, 3.0], [16.4, 3.0], [16.5, 3.0], [16.6, 3.0], [16.7, 3.0], [16.8, 3.0], [16.9, 3.0], [17.0, 3.0], [17.1, 3.0], [17.2, 3.0], [17.3, 3.0], [17.4, 3.0], [17.5, 3.0], [17.6, 3.0], [17.7, 3.0], [17.8, 3.0], [17.9, 3.0], [18.0, 3.0], [18.1, 3.0], [18.2, 3.0], [18.3, 3.0], [18.4, 3.0], [18.5, 3.0], [18.6, 3.0], [18.7, 3.0], [18.8, 3.0], [18.9, 3.0], [19.0, 3.0], [19.1, 3.0], [19.2, 3.0], [19.3, 3.0], [19.4, 3.0], [19.5, 3.0], [19.6, 3.0], [19.7, 3.0], [19.8, 3.0], [19.9, 3.0], [20.0, 3.0], [20.1, 3.0], [20.2, 3.0], [20.3, 3.0], [20.4, 3.0], [20.5, 3.0], [20.6, 3.0], [20.7, 3.0], [20.8, 3.0], [20.9, 3.0], [21.0, 3.0], [21.1, 3.0], [21.2, 3.0], [21.3, 3.0], [21.4, 3.0], [21.5, 3.0], [21.6, 3.0], [21.7, 3.0], [21.8, 3.0], [21.9, 3.0], [22.0, 3.0], [22.1, 3.0], [22.2, 3.0], [22.3, 3.0], [22.4, 3.0], [22.5, 3.0], [22.6, 3.0], [22.7, 3.0], [22.8, 3.0], [22.9, 3.0], [23.0, 3.0], [23.1, 3.0], [23.2, 3.0], [23.3, 3.0], [23.4, 3.0], [23.5, 3.0], [23.6, 3.0], [23.7, 3.0], [23.8, 3.0], [23.9, 3.0], [24.0, 3.0], [24.1, 3.0], [24.2, 3.0], [24.3, 3.0], [24.4, 3.0], [24.5, 3.0], [24.6, 3.0], [24.7, 3.0], [24.8, 3.0], [24.9, 3.0], [25.0, 3.0], [25.1, 3.0], [25.2, 3.0], [25.3, 3.0], [25.4, 3.0], [25.5, 3.0], [25.6, 3.0], [25.7, 3.0], [25.8, 3.0], [25.9, 3.0], [26.0, 3.0], [26.1, 3.0], [26.2, 3.0], [26.3, 3.0], [26.4, 3.0], [26.5, 3.0], [26.6, 3.0], [26.7, 3.0], [26.8, 3.0], [26.9, 3.0], [27.0, 3.0], [27.1, 3.0], [27.2, 3.0], [27.3, 3.0], [27.4, 3.0], [27.5, 3.0], [27.6, 3.0], [27.7, 3.0], [27.8, 3.0], [27.9, 3.0], [28.0, 3.0], [28.1, 3.0], [28.2, 3.0], [28.3, 3.0], [28.4, 3.0], [28.5, 3.0], [28.6, 3.0], [28.7, 3.0], [28.8, 3.0], [28.9, 4.0], [29.0, 4.0], [29.1, 4.0], [29.2, 4.0], [29.3, 4.0], [29.4, 4.0], [29.5, 4.0], [29.6, 4.0], [29.7, 4.0], [29.8, 4.0], [29.9, 4.0], [30.0, 4.0], [30.1, 4.0], [30.2, 4.0], [30.3, 4.0], [30.4, 4.0], [30.5, 4.0], [30.6, 4.0], [30.7, 4.0], [30.8, 4.0], [30.9, 4.0], [31.0, 4.0], [31.1, 4.0], [31.2, 4.0], [31.3, 4.0], [31.4, 4.0], [31.5, 4.0], [31.6, 4.0], [31.7, 4.0], [31.8, 4.0], [31.9, 4.0], [32.0, 4.0], [32.1, 4.0], [32.2, 4.0], [32.3, 4.0], [32.4, 4.0], [32.5, 4.0], [32.6, 4.0], [32.7, 4.0], [32.8, 4.0], [32.9, 4.0], [33.0, 4.0], [33.1, 4.0], [33.2, 4.0], [33.3, 4.0], [33.4, 4.0], [33.5, 4.0], [33.6, 4.0], [33.7, 4.0], [33.8, 4.0], [33.9, 4.0], [34.0, 4.0], [34.1, 4.0], [34.2, 4.0], [34.3, 4.0], [34.4, 4.0], [34.5, 4.0], [34.6, 4.0], [34.7, 4.0], [34.8, 4.0], [34.9, 4.0], [35.0, 4.0], [35.1, 4.0], [35.2, 4.0], [35.3, 4.0], [35.4, 4.0], [35.5, 4.0], [35.6, 4.0], [35.7, 4.0], [35.8, 4.0], [35.9, 4.0], [36.0, 4.0], [36.1, 4.0], [36.2, 4.0], [36.3, 4.0], [36.4, 4.0], [36.5, 4.0], [36.6, 4.0], [36.7, 4.0], [36.8, 4.0], [36.9, 4.0], [37.0, 4.0], [37.1, 4.0], [37.2, 4.0], [37.3, 4.0], [37.4, 4.0], [37.5, 4.0], [37.6, 4.0], [37.7, 4.0], [37.8, 4.0], [37.9, 4.0], [38.0, 4.0], [38.1, 4.0], [38.2, 4.0], [38.3, 4.0], [38.4, 4.0], [38.5, 4.0], [38.6, 4.0], [38.7, 4.0], [38.8, 4.0], [38.9, 4.0], [39.0, 4.0], [39.1, 4.0], [39.2, 4.0], [39.3, 4.0], [39.4, 4.0], [39.5, 4.0], [39.6, 4.0], [39.7, 4.0], [39.8, 4.0], [39.9, 4.0], [40.0, 4.0], [40.1, 4.0], [40.2, 4.0], [40.3, 4.0], [40.4, 4.0], [40.5, 4.0], [40.6, 4.0], [40.7, 4.0], [40.8, 4.0], [40.9, 4.0], [41.0, 4.0], [41.1, 4.0], [41.2, 4.0], [41.3, 4.0], [41.4, 4.0], [41.5, 4.0], [41.6, 4.0], [41.7, 4.0], [41.8, 4.0], [41.9, 4.0], [42.0, 4.0], [42.1, 4.0], [42.2, 4.0], [42.3, 4.0], [42.4, 4.0], [42.5, 4.0], [42.6, 4.0], [42.7, 4.0], [42.8, 4.0], [42.9, 4.0], [43.0, 4.0], [43.1, 4.0], [43.2, 4.0], [43.3, 4.0], [43.4, 4.0], [43.5, 4.0], [43.6, 4.0], [43.7, 4.0], [43.8, 4.0], [43.9, 4.0], [44.0, 4.0], [44.1, 4.0], [44.2, 4.0], [44.3, 4.0], [44.4, 4.0], [44.5, 4.0], [44.6, 4.0], [44.7, 4.0], [44.8, 4.0], [44.9, 4.0], [45.0, 4.0], [45.1, 4.0], [45.2, 4.0], [45.3, 4.0], [45.4, 4.0], [45.5, 4.0], [45.6, 4.0], [45.7, 4.0], [45.8, 4.0], [45.9, 4.0], [46.0, 4.0], [46.1, 4.0], [46.2, 4.0], [46.3, 4.0], [46.4, 4.0], [46.5, 4.0], [46.6, 4.0], [46.7, 4.0], [46.8, 4.0], [46.9, 4.0], [47.0, 4.0], [47.1, 4.0], [47.2, 4.0], [47.3, 4.0], [47.4, 4.0], [47.5, 4.0], [47.6, 4.0], [47.7, 4.0], [47.8, 4.0], [47.9, 4.0], [48.0, 4.0], [48.1, 4.0], [48.2, 4.0], [48.3, 4.0], [48.4, 4.0], [48.5, 4.0], [48.6, 4.0], [48.7, 4.0], [48.8, 4.0], [48.9, 4.0], [49.0, 4.0], [49.1, 4.0], [49.2, 4.0], [49.3, 4.0], [49.4, 4.0], [49.5, 4.0], [49.6, 4.0], [49.7, 4.0], [49.8, 4.0], [49.9, 4.0], [50.0, 4.0], [50.1, 4.0], [50.2, 4.0], [50.3, 4.0], [50.4, 4.0], [50.5, 4.0], [50.6, 4.0], [50.7, 4.0], [50.8, 4.0], [50.9, 4.0], [51.0, 4.0], [51.1, 4.0], [51.2, 4.0], [51.3, 4.0], [51.4, 4.0], [51.5, 4.0], [51.6, 4.0], [51.7, 4.0], [51.8, 4.0], [51.9, 4.0], [52.0, 4.0], [52.1, 4.0], [52.2, 4.0], [52.3, 4.0], [52.4, 4.0], [52.5, 4.0], [52.6, 4.0], [52.7, 4.0], [52.8, 4.0], [52.9, 4.0], [53.0, 4.0], [53.1, 4.0], [53.2, 4.0], [53.3, 4.0], [53.4, 4.0], [53.5, 4.0], [53.6, 4.0], [53.7, 4.0], [53.8, 4.0], [53.9, 4.0], [54.0, 4.0], [54.1, 4.0], [54.2, 4.0], [54.3, 4.0], [54.4, 4.0], [54.5, 4.0], [54.6, 4.0], [54.7, 4.0], [54.8, 4.0], [54.9, 4.0], [55.0, 4.0], [55.1, 4.0], [55.2, 4.0], [55.3, 4.0], [55.4, 4.0], [55.5, 4.0], [55.6, 4.0], [55.7, 4.0], [55.8, 4.0], [55.9, 4.0], [56.0, 4.0], [56.1, 4.0], [56.2, 4.0], [56.3, 4.0], [56.4, 4.0], [56.5, 4.0], [56.6, 4.0], [56.7, 4.0], [56.8, 4.0], [56.9, 4.0], [57.0, 4.0], [57.1, 4.0], [57.2, 4.0], [57.3, 4.0], [57.4, 4.0], [57.5, 4.0], [57.6, 4.0], [57.7, 4.0], [57.8, 4.0], [57.9, 4.0], [58.0, 4.0], [58.1, 4.0], [58.2, 4.0], [58.3, 4.0], [58.4, 4.0], [58.5, 4.0], [58.6, 4.0], [58.7, 4.0], [58.8, 4.0], [58.9, 4.0], [59.0, 4.0], [59.1, 4.0], [59.2, 4.0], [59.3, 4.0], [59.4, 4.0], [59.5, 4.0], [59.6, 4.0], [59.7, 4.0], [59.8, 4.0], [59.9, 4.0], [60.0, 4.0], [60.1, 4.0], [60.2, 4.0], [60.3, 4.0], [60.4, 4.0], [60.5, 4.0], [60.6, 4.0], [60.7, 4.0], [60.8, 4.0], [60.9, 4.0], [61.0, 4.0], [61.1, 4.0], [61.2, 4.0], [61.3, 4.0], [61.4, 4.0], [61.5, 4.0], [61.6, 4.0], [61.7, 4.0], [61.8, 4.0], [61.9, 4.0], [62.0, 4.0], [62.1, 4.0], [62.2, 4.0], [62.3, 4.0], [62.4, 4.0], [62.5, 4.0], [62.6, 4.0], [62.7, 4.0], [62.8, 4.0], [62.9, 4.0], [63.0, 4.0], [63.1, 4.0], [63.2, 4.0], [63.3, 4.0], [63.4, 4.0], [63.5, 4.0], [63.6, 4.0], [63.7, 4.0], [63.8, 4.0], [63.9, 4.0], [64.0, 4.0], [64.1, 4.0], [64.2, 4.0], [64.3, 4.0], [64.4, 4.0], [64.5, 4.0], [64.6, 4.0], [64.7, 4.0], [64.8, 4.0], [64.9, 4.0], [65.0, 4.0], [65.1, 4.0], [65.2, 4.0], [65.3, 4.0], [65.4, 4.0], [65.5, 4.0], [65.6, 4.0], [65.7, 4.0], [65.8, 4.0], [65.9, 4.0], [66.0, 4.0], [66.1, 4.0], [66.2, 4.0], [66.3, 4.0], [66.4, 4.0], [66.5, 4.0], [66.6, 4.0], [66.7, 4.0], [66.8, 4.0], [66.9, 4.0], [67.0, 4.0], [67.1, 4.0], [67.2, 4.0], [67.3, 4.0], [67.4, 4.0], [67.5, 4.0], [67.6, 4.0], [67.7, 4.0], [67.8, 4.0], [67.9, 4.0], [68.0, 4.0], [68.1, 4.0], [68.2, 4.0], [68.3, 4.0], [68.4, 4.0], [68.5, 4.0], [68.6, 4.0], [68.7, 4.0], [68.8, 4.0], [68.9, 4.0], [69.0, 4.0], [69.1, 4.0], [69.2, 4.0], [69.3, 4.0], [69.4, 4.0], [69.5, 4.0], [69.6, 4.0], [69.7, 4.0], [69.8, 4.0], [69.9, 4.0], [70.0, 4.0], [70.1, 4.0], [70.2, 4.0], [70.3, 4.0], [70.4, 4.0], [70.5, 4.0], [70.6, 4.0], [70.7, 4.0], [70.8, 4.0], [70.9, 4.0], [71.0, 4.0], [71.1, 4.0], [71.2, 4.0], [71.3, 4.0], [71.4, 4.0], [71.5, 4.0], [71.6, 4.0], [71.7, 4.0], [71.8, 4.0], [71.9, 4.0], [72.0, 4.0], [72.1, 4.0], [72.2, 4.0], [72.3, 4.0], [72.4, 4.0], [72.5, 4.0], [72.6, 4.0], [72.7, 4.0], [72.8, 4.0], [72.9, 4.0], [73.0, 4.0], [73.1, 4.0], [73.2, 4.0], [73.3, 4.0], [73.4, 4.0], [73.5, 4.0], [73.6, 4.0], [73.7, 4.0], [73.8, 4.0], [73.9, 4.0], [74.0, 4.0], [74.1, 4.0], [74.2, 4.0], [74.3, 4.0], [74.4, 4.0], [74.5, 4.0], [74.6, 4.0], [74.7, 4.0], [74.8, 4.0], [74.9, 4.0], [75.0, 4.0], [75.1, 4.0], [75.2, 4.0], [75.3, 4.0], [75.4, 4.0], [75.5, 4.0], [75.6, 4.0], [75.7, 4.0], [75.8, 4.0], [75.9, 4.0], [76.0, 4.0], [76.1, 4.0], [76.2, 4.0], [76.3, 4.0], [76.4, 4.0], [76.5, 4.0], [76.6, 4.0], [76.7, 4.0], [76.8, 4.0], [76.9, 4.0], [77.0, 4.0], [77.1, 4.0], [77.2, 4.0], [77.3, 4.0], [77.4, 4.0], [77.5, 4.0], [77.6, 4.0], [77.7, 4.0], [77.8, 4.0], [77.9, 4.0], [78.0, 4.0], [78.1, 4.0], [78.2, 4.0], [78.3, 4.0], [78.4, 4.0], [78.5, 4.0], [78.6, 4.0], [78.7, 4.0], [78.8, 4.0], [78.9, 4.0], [79.0, 4.0], [79.1, 4.0], [79.2, 4.0], [79.3, 4.0], [79.4, 4.0], [79.5, 4.0], [79.6, 4.0], [79.7, 4.0], [79.8, 4.0], [79.9, 4.0], [80.0, 4.0], [80.1, 4.0], [80.2, 4.0], [80.3, 4.0], [80.4, 4.0], [80.5, 4.0], [80.6, 4.0], [80.7, 4.0], [80.8, 4.0], [80.9, 4.0], [81.0, 4.0], [81.1, 4.0], [81.2, 4.0], [81.3, 5.0], [81.4, 5.0], [81.5, 5.0], [81.6, 5.0], [81.7, 5.0], [81.8, 5.0], [81.9, 5.0], [82.0, 5.0], [82.1, 5.0], [82.2, 5.0], [82.3, 5.0], [82.4, 5.0], [82.5, 5.0], [82.6, 5.0], [82.7, 5.0], [82.8, 5.0], [82.9, 5.0], [83.0, 5.0], [83.1, 5.0], [83.2, 5.0], [83.3, 5.0], [83.4, 5.0], [83.5, 5.0], [83.6, 5.0], [83.7, 5.0], [83.8, 5.0], [83.9, 5.0], [84.0, 5.0], [84.1, 5.0], [84.2, 5.0], [84.3, 5.0], [84.4, 5.0], [84.5, 5.0], [84.6, 5.0], [84.7, 5.0], [84.8, 5.0], [84.9, 5.0], [85.0, 5.0], [85.1, 5.0], [85.2, 5.0], [85.3, 5.0], [85.4, 5.0], [85.5, 5.0], [85.6, 5.0], [85.7, 5.0], [85.8, 5.0], [85.9, 5.0], [86.0, 5.0], [86.1, 5.0], [86.2, 5.0], [86.3, 5.0], [86.4, 5.0], [86.5, 5.0], [86.6, 5.0], [86.7, 5.0], [86.8, 5.0], [86.9, 5.0], [87.0, 5.0], [87.1, 5.0], [87.2, 5.0], [87.3, 5.0], [87.4, 5.0], [87.5, 5.0], [87.6, 5.0], [87.7, 5.0], [87.8, 5.0], [87.9, 5.0], [88.0, 5.0], [88.1, 5.0], [88.2, 5.0], [88.3, 5.0], [88.4, 5.0], [88.5, 5.0], [88.6, 5.0], [88.7, 5.0], [88.8, 5.0], [88.9, 5.0], [89.0, 5.0], [89.1, 5.0], [89.2, 5.0], [89.3, 5.0], [89.4, 5.0], [89.5, 5.0], [89.6, 5.0], [89.7, 5.0], [89.8, 5.0], [89.9, 5.0], [90.0, 5.0], [90.1, 5.0], [90.2, 5.0], [90.3, 5.0], [90.4, 5.0], [90.5, 5.0], [90.6, 5.0], [90.7, 5.0], [90.8, 5.0], [90.9, 5.0], [91.0, 5.0], [91.1, 5.0], [91.2, 5.0], [91.3, 5.0], [91.4, 5.0], [91.5, 5.0], [91.6, 5.0], [91.7, 5.0], [91.8, 5.0], [91.9, 5.0], [92.0, 5.0], [92.1, 5.0], [92.2, 5.0], [92.3, 5.0], [92.4, 5.0], [92.5, 5.0], [92.6, 5.0], [92.7, 5.0], [92.8, 5.0], [92.9, 5.0], [93.0, 5.0], [93.1, 5.0], [93.2, 5.0], [93.3, 5.0], [93.4, 5.0], [93.5, 5.0], [93.6, 5.0], [93.7, 5.0], [93.8, 5.0], [93.9, 5.0], [94.0, 5.0], [94.1, 5.0], [94.2, 5.0], [94.3, 5.0], [94.4, 5.0], [94.5, 5.0], [94.6, 5.0], [94.7, 5.0], [94.8, 5.0], [94.9, 5.0], [95.0, 5.0], [95.1, 5.0], [95.2, 5.0], [95.3, 5.0], [95.4, 5.0], [95.5, 5.0], [95.6, 5.0], [95.7, 5.0], [95.8, 5.0], [95.9, 5.0], [96.0, 5.0], [96.1, 5.0], [96.2, 5.0], [96.3, 6.0], [96.4, 6.0], [96.5, 6.0], [96.6, 6.0], [96.7, 6.0], [96.8, 6.0], [96.9, 6.0], [97.0, 6.0], [97.1, 6.0], [97.2, 6.0], [97.3, 6.0], [97.4, 6.0], [97.5, 6.0], [97.6, 6.0], [97.7, 6.0], [97.8, 6.0], [97.9, 6.0], [98.0, 6.0], [98.1, 6.0], [98.2, 6.0], [98.3, 6.0], [98.4, 6.0], [98.5, 6.0], [98.6, 6.0], [98.7, 6.0], [98.8, 6.0], [98.9, 6.0], [99.0, 6.0], [99.1, 7.0], [99.2, 7.0], [99.3, 7.0], [99.4, 7.0], [99.5, 8.0], [99.6, 12.0], [99.7, 19.0], [99.8, 42.0], [99.9, 57.0], [100.0, 75.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 728829.0, "minX": 0.0, "maxY": 728829.0, "series": [{"data": [[0.0, 728829.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4.9E-324, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 728829.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 728829.0, "series": [{"data": [[0.0, 728829.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.9897652016857346, "minX": 1.71250032E12, "maxY": 5.0, "series": [{"data": [[1.71250038E12, 5.0], [1.71250068E12, 5.0], [1.71250092E12, 4.999828106199115], [1.7125005E12, 5.0], [1.71250032E12, 3.9897652016857346], [1.7125008E12, 5.0], [1.71250062E12, 5.0], [1.71250044E12, 5.0], [1.71250074E12, 5.0], [1.71250086E12, 5.0], [1.71250056E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250092E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3.051912568306011, "minX": 1.0, "maxY": 4.065016544314817, "series": [{"data": [[1.0, 3.095238095238097], [2.0, 3.051912568306011], [4.0, 3.411851851851851], [5.0, 4.065016544314817], [3.0, 3.4473161033797215]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.995380260664713, 4.0632809616520795]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7359.216666666666, "minX": 1.71250032E12, "maxY": 637016.1666666666, "series": [{"data": [[1.71250038E12, 637016.1666666666], [1.71250068E12, 595491.1333333333], [1.71250092E12, 532209.8833333333], [1.7125005E12, 629332.0666666667], [1.71250032E12, 27627.966666666667], [1.7125008E12, 594227.45], [1.71250062E12, 617580.0833333334], [1.71250044E12, 628882.1333333333], [1.71250074E12, 590526.6833333333], [1.71250086E12, 584005.8], [1.71250056E12, 624541.1333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71250038E12, 169683.45], [1.71250068E12, 158622.3], [1.71250092E12, 141765.81666666668], [1.7125005E12, 167636.51666666666], [1.71250032E12, 7359.216666666666], [1.7125008E12, 158285.5], [1.71250062E12, 164506.15], [1.71250044E12, 167516.88333333333], [1.71250074E12, 157299.75], [1.71250086E12, 155562.95], [1.71250056E12, 166360.53333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250092E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3.475617098133653, "minX": 1.71250032E12, "maxY": 4.3592267904301565, "series": [{"data": [[1.71250038E12, 3.8670931522945575], [1.71250068E12, 4.146588084131705], [1.71250092E12, 4.3592267904301565], [1.7125005E12, 3.9213304964914037], [1.71250032E12, 3.475617098133653], [1.7125008E12, 4.154205738278528], [1.71250062E12, 3.997320154057455], [1.71250044E12, 3.924183715302106], [1.71250074E12, 4.182184353214543], [1.71250086E12, 4.226570399168411], [1.71250056E12, 3.9544576869298758]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250092E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3.462974111980736, "minX": 1.71250032E12, "maxY": 4.356585876580239, "series": [{"data": [[1.71250038E12, 3.864651739669693], [1.71250068E12, 4.1439345269685095], [1.71250092E12, 4.356585876580239], [1.7125005E12, 3.918634615638748], [1.71250032E12, 3.462974111980736], [1.7125008E12, 4.151798460461867], [1.71250062E12, 3.9948557731153533], [1.71250044E12, 3.9221471362259672], [1.71250074E12, 4.179550735863649], [1.71250086E12, 4.224064026430819], [1.71250056E12, 3.9518876090285984]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250092E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71250032E12, "maxY": 0.006321493076459987, "series": [{"data": [[1.71250038E12, 3.916704745740594E-5], [1.71250068E12, 4.1898270998016736E-5], [1.71250092E12, 4.6880127513946754E-5], [1.7125005E12, 3.9645306656446944E-5], [1.71250032E12, 0.006321493076459987], [1.7125008E12, 0.0], [1.71250062E12, 4.039968757574961E-5], [1.71250044E12, 5.2898157821654224E-5], [1.71250074E12, 2.816703049081051E-5], [1.71250086E12, 5.6963016761367817E-5], [1.71250056E12, 6.658232904987068E-5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250092E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.71250032E12, "maxY": 75.0, "series": [{"data": [[1.71250038E12, 72.0], [1.71250068E12, 71.0], [1.71250092E12, 72.0], [1.7125005E12, 73.0], [1.71250032E12, 29.0], [1.7125008E12, 71.0], [1.71250062E12, 69.0], [1.71250044E12, 72.0], [1.71250074E12, 75.0], [1.71250086E12, 72.0], [1.71250056E12, 71.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71250038E12, 2.0], [1.71250068E12, 2.0], [1.71250092E12, 2.0], [1.7125005E12, 2.0], [1.71250032E12, 2.0], [1.7125008E12, 2.0], [1.71250062E12, 2.0], [1.71250044E12, 2.0], [1.71250074E12, 2.0], [1.71250086E12, 2.0], [1.71250056E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71250038E12, 5.0], [1.71250068E12, 5.0], [1.71250092E12, 5.0], [1.7125005E12, 5.0], [1.71250032E12, 5.0], [1.7125008E12, 5.0], [1.71250062E12, 5.0], [1.71250044E12, 5.0], [1.71250074E12, 5.0], [1.71250086E12, 5.0], [1.71250056E12, 5.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71250038E12, 6.0], [1.71250068E12, 7.0], [1.71250092E12, 7.0], [1.7125005E12, 6.0], [1.71250032E12, 6.0], [1.7125008E12, 7.0], [1.71250062E12, 6.0], [1.71250044E12, 6.0], [1.71250074E12, 7.0], [1.71250086E12, 7.0], [1.71250056E12, 6.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71250038E12, 4.0], [1.71250068E12, 4.0], [1.71250092E12, 4.0], [1.7125005E12, 4.0], [1.71250032E12, 3.0], [1.7125008E12, 4.0], [1.71250062E12, 4.0], [1.71250044E12, 4.0], [1.71250074E12, 4.0], [1.71250086E12, 4.0], [1.71250056E12, 4.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71250038E12, 5.0], [1.71250068E12, 6.0], [1.71250092E12, 6.0], [1.7125005E12, 5.0], [1.71250032E12, 5.0], [1.7125008E12, 5.0], [1.71250062E12, 5.0], [1.71250044E12, 5.0], [1.71250074E12, 5.0], [1.71250086E12, 5.0], [1.71250056E12, 5.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250092E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3.0, "minX": 155.0, "maxY": 4.0, "series": [{"data": [[155.0, 3.0], [412.0, 4.0], [698.0, 3.0], [795.0, 4.0], [913.0, 4.0], [940.0, 4.0], [947.0, 4.0], [936.0, 4.0], [987.0, 4.0], [981.0, 4.0], [963.0, 4.0], [970.0, 4.0], [986.0, 4.0], [964.0, 4.0], [1018.0, 4.0], [1006.0, 4.0], [1010.0, 4.0], [1003.0, 4.0], [1013.0, 4.0], [999.0, 4.0], [997.0, 4.0], [1020.0, 4.0], [1014.0, 4.0], [1084.0, 4.0], [1035.0, 4.0], [1065.0, 4.0], [1055.0, 4.0], [1054.0, 4.0], [1051.0, 4.0], [1050.0, 4.0], [1043.0, 4.0], [1049.0, 4.0], [1047.0, 4.0], [1040.0, 4.0], [1026.0, 4.0], [1027.0, 4.0], [1024.0, 4.0], [1070.0, 4.0], [1071.0, 4.0], [1063.0, 4.0], [1062.0, 4.0], [1061.0, 4.0], [1066.0, 4.0], [1069.0, 4.0], [1083.0, 4.0], [1075.0, 4.0], [1036.0, 4.0], [1072.0, 4.0], [1074.0, 4.0], [1058.0, 4.0], [1087.0, 4.0], [1059.0, 4.0], [1143.0, 4.0], [1127.0, 3.0], [1122.0, 4.0], [1123.0, 4.0], [1124.0, 4.0], [1120.0, 4.0], [1125.0, 4.0], [1126.0, 4.0], [1147.0, 4.0], [1148.0, 4.0], [1149.0, 4.0], [1145.0, 4.0], [1144.0, 4.0], [1150.0, 4.0], [1131.0, 4.0], [1128.0, 4.0], [1133.0, 4.0], [1135.0, 4.0], [1104.0, 4.0], [1105.0, 4.0], [1140.0, 4.0], [1139.0, 4.0], [1103.0, 4.0], [1136.0, 4.0], [1106.0, 4.0], [1102.0, 4.0], [1116.0, 4.0], [1115.0, 4.0], [1114.0, 4.0], [1113.0, 4.0], [1118.0, 4.0], [1089.0, 4.0], [1094.0, 4.0], [1096.0, 4.0], [1100.0, 4.0], [1117.0, 4.0], [1166.0, 4.0], [1165.0, 4.0], [1164.0, 4.0], [1163.0, 4.0], [1162.0, 4.0], [1161.0, 4.0], [1159.0, 4.0], [1155.0, 4.0], [1158.0, 4.0], [1157.0, 4.0], [1156.0, 4.0], [1194.0, 4.0], [1196.0, 4.0], [1195.0, 4.0], [1190.0, 4.0], [1191.0, 4.0], [1193.0, 4.0], [1210.0, 4.0], [1201.0, 4.0], [1202.0, 4.0], [1167.0, 4.0], [1200.0, 4.0], [1205.0, 4.0], [1204.0, 4.0], [1207.0, 4.0], [1208.0, 4.0], [1209.0, 4.0], [1206.0, 4.0], [1154.0, 4.0], [1183.0, 4.0], [1153.0, 4.0], [1152.0, 4.0], [1173.0, 4.0], [1169.0, 4.0], [1176.0, 4.0], [1177.0, 4.0], [1178.0, 4.0], [1175.0, 4.0], [1181.0, 4.0], [1182.0, 4.0], [1180.0, 4.0], [1179.0, 4.0], [1189.0, 4.0], [1197.0, 4.0], [1199.0, 4.0], [1198.0, 4.0], [1211.0, 4.0], [1214.0, 4.0], [1212.0, 4.0], [1188.0, 4.0], [1186.0, 4.0], [1184.0, 4.0], [1185.0, 4.0], [1215.0, 4.0], [1267.0, 4.0], [1245.0, 4.0], [1243.0, 4.0], [1262.0, 4.0], [1256.0, 4.0], [1257.0, 4.0], [1259.0, 4.0], [1255.0, 4.0], [1250.0, 4.0], [1275.0, 4.0], [1276.0, 4.0], [1249.0, 4.0], [1248.0, 4.0], [1278.0, 4.0], [1279.0, 4.0], [1277.0, 4.0], [1253.0, 4.0], [1251.0, 4.0], [1252.0, 4.0], [1254.0, 4.0], [1268.0, 4.0], [1269.0, 4.0], [1272.0, 4.0], [1270.0, 4.0], [1271.0, 4.0], [1235.0, 4.0], [1236.0, 4.0], [1233.0, 4.0], [1232.0, 4.0], [1234.0, 4.0], [1237.0, 4.0], [1239.0, 4.0], [1240.0, 4.0], [1241.0, 4.0], [1242.0, 4.0], [1274.0, 4.0], [1224.0, 4.0], [1223.0, 4.0], [1222.0, 4.0], [1225.0, 4.0], [1226.0, 4.0], [1221.0, 4.0], [1246.0, 4.0], [1217.0, 4.0], [1216.0, 4.0], [1218.0, 4.0], [1220.0, 4.0], [1219.0, 4.0], [1247.0, 4.0], [1265.0, 4.0], [1264.0, 4.0], [1266.0, 4.0], [1229.0, 4.0], [1228.0, 4.0], [1230.0, 4.0], [1227.0, 4.0], [1244.0, 4.0], [1294.0, 4.0], [1342.0, 3.0], [1341.0, 4.0], [1312.0, 4.0], [1317.0, 4.0], [1324.0, 4.0], [1322.0, 4.0], [1320.0, 4.0], [1318.0, 4.0], [1321.0, 4.0], [1323.0, 4.0], [1313.0, 4.0], [1314.0, 4.0], [1316.0, 4.0], [1339.0, 3.0], [1334.0, 4.0], [1330.0, 4.0], [1336.0, 4.0], [1287.0, 4.0], [1286.0, 4.0], [1290.0, 4.0], [1289.0, 4.0], [1288.0, 4.0], [1285.0, 4.0], [1303.0, 4.0], [1305.0, 4.0], [1304.0, 4.0], [1301.0, 4.0], [1302.0, 4.0], [1300.0, 4.0], [1297.0, 4.0], [1299.0, 4.0], [1298.0, 4.0], [1296.0, 4.0], [1309.0, 4.0], [1307.0, 4.0], [1308.0, 4.0], [1280.0, 4.0], [1310.0, 4.0], [1311.0, 4.0], [1284.0, 4.0], [1283.0, 4.0], [1282.0, 4.0], [1281.0, 4.0], [1306.0, 4.0], [1293.0, 4.0], [1292.0, 4.0], [1291.0, 4.0], [1354.0, 4.0], [1406.0, 3.0], [1377.0, 3.0], [1357.0, 3.0], [1361.0, 4.0], [1363.0, 4.0], [1365.0, 4.0], [1366.0, 4.0], [1348.0, 4.0], [1349.0, 4.0], [1352.0, 4.0], [1347.0, 4.0], [1346.0, 4.0], [1345.0, 4.0], [1344.0, 4.0], [1442.0, 3.0], [1467.0, 3.0], [1414.0, 3.0], [1498.0, 3.0], [1481.0, 3.0], [1485.0, 3.0], [1476.0, 3.0], [1473.0, 3.0], [1489.0, 3.0], [1474.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1498.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3.0, "minX": 155.0, "maxY": 4.0, "series": [{"data": [[155.0, 3.0], [412.0, 4.0], [698.0, 3.0], [795.0, 4.0], [913.0, 4.0], [940.0, 4.0], [947.0, 4.0], [936.0, 4.0], [987.0, 4.0], [981.0, 4.0], [963.0, 4.0], [970.0, 4.0], [986.0, 4.0], [964.0, 4.0], [1018.0, 4.0], [1006.0, 4.0], [1010.0, 4.0], [1003.0, 4.0], [1013.0, 4.0], [999.0, 4.0], [997.0, 4.0], [1020.0, 4.0], [1014.0, 4.0], [1084.0, 4.0], [1035.0, 4.0], [1065.0, 4.0], [1055.0, 4.0], [1054.0, 4.0], [1051.0, 4.0], [1050.0, 4.0], [1043.0, 4.0], [1049.0, 4.0], [1047.0, 4.0], [1040.0, 4.0], [1026.0, 4.0], [1027.0, 4.0], [1024.0, 4.0], [1070.0, 4.0], [1071.0, 4.0], [1063.0, 4.0], [1062.0, 4.0], [1061.0, 4.0], [1066.0, 4.0], [1069.0, 4.0], [1083.0, 4.0], [1075.0, 4.0], [1036.0, 4.0], [1072.0, 4.0], [1074.0, 4.0], [1058.0, 4.0], [1087.0, 4.0], [1059.0, 4.0], [1143.0, 4.0], [1127.0, 3.0], [1122.0, 4.0], [1123.0, 4.0], [1124.0, 4.0], [1120.0, 4.0], [1125.0, 4.0], [1126.0, 4.0], [1147.0, 4.0], [1148.0, 4.0], [1149.0, 4.0], [1145.0, 4.0], [1144.0, 4.0], [1150.0, 4.0], [1131.0, 4.0], [1128.0, 4.0], [1133.0, 4.0], [1135.0, 4.0], [1104.0, 4.0], [1105.0, 4.0], [1140.0, 4.0], [1139.0, 4.0], [1103.0, 4.0], [1136.0, 4.0], [1106.0, 4.0], [1102.0, 4.0], [1116.0, 4.0], [1115.0, 4.0], [1114.0, 4.0], [1113.0, 4.0], [1118.0, 4.0], [1089.0, 4.0], [1094.0, 4.0], [1096.0, 4.0], [1100.0, 4.0], [1117.0, 4.0], [1166.0, 4.0], [1165.0, 4.0], [1164.0, 4.0], [1163.0, 4.0], [1162.0, 4.0], [1161.0, 4.0], [1159.0, 4.0], [1155.0, 4.0], [1158.0, 4.0], [1157.0, 4.0], [1156.0, 4.0], [1194.0, 4.0], [1196.0, 4.0], [1195.0, 4.0], [1190.0, 4.0], [1191.0, 4.0], [1193.0, 4.0], [1210.0, 4.0], [1201.0, 4.0], [1202.0, 4.0], [1167.0, 4.0], [1200.0, 4.0], [1205.0, 4.0], [1204.0, 4.0], [1207.0, 4.0], [1208.0, 4.0], [1209.0, 4.0], [1206.0, 4.0], [1154.0, 4.0], [1183.0, 4.0], [1153.0, 4.0], [1152.0, 4.0], [1173.0, 4.0], [1169.0, 4.0], [1176.0, 4.0], [1177.0, 4.0], [1178.0, 4.0], [1175.0, 4.0], [1181.0, 4.0], [1182.0, 4.0], [1180.0, 4.0], [1179.0, 4.0], [1189.0, 4.0], [1197.0, 4.0], [1199.0, 4.0], [1198.0, 4.0], [1211.0, 4.0], [1214.0, 4.0], [1212.0, 4.0], [1188.0, 4.0], [1186.0, 4.0], [1184.0, 4.0], [1185.0, 4.0], [1215.0, 4.0], [1267.0, 4.0], [1245.0, 4.0], [1243.0, 4.0], [1262.0, 4.0], [1256.0, 4.0], [1257.0, 4.0], [1259.0, 4.0], [1255.0, 4.0], [1250.0, 4.0], [1275.0, 4.0], [1276.0, 4.0], [1249.0, 4.0], [1248.0, 4.0], [1278.0, 4.0], [1279.0, 4.0], [1277.0, 4.0], [1253.0, 4.0], [1251.0, 4.0], [1252.0, 4.0], [1254.0, 4.0], [1268.0, 4.0], [1269.0, 4.0], [1272.0, 4.0], [1270.0, 4.0], [1271.0, 4.0], [1235.0, 4.0], [1236.0, 4.0], [1233.0, 4.0], [1232.0, 4.0], [1234.0, 4.0], [1237.0, 4.0], [1239.0, 4.0], [1240.0, 4.0], [1241.0, 4.0], [1242.0, 4.0], [1274.0, 4.0], [1224.0, 4.0], [1223.0, 4.0], [1222.0, 4.0], [1225.0, 4.0], [1226.0, 4.0], [1221.0, 4.0], [1246.0, 4.0], [1217.0, 4.0], [1216.0, 4.0], [1218.0, 4.0], [1220.0, 4.0], [1219.0, 4.0], [1247.0, 4.0], [1265.0, 4.0], [1264.0, 4.0], [1266.0, 4.0], [1229.0, 4.0], [1228.0, 4.0], [1230.0, 4.0], [1227.0, 4.0], [1244.0, 4.0], [1294.0, 4.0], [1342.0, 3.0], [1341.0, 4.0], [1312.0, 4.0], [1317.0, 4.0], [1324.0, 4.0], [1322.0, 4.0], [1320.0, 4.0], [1318.0, 4.0], [1321.0, 4.0], [1323.0, 4.0], [1313.0, 4.0], [1314.0, 4.0], [1316.0, 4.0], [1339.0, 3.0], [1334.0, 4.0], [1330.0, 4.0], [1336.0, 4.0], [1287.0, 4.0], [1286.0, 4.0], [1290.0, 4.0], [1289.0, 4.0], [1288.0, 4.0], [1285.0, 4.0], [1303.0, 4.0], [1305.0, 4.0], [1304.0, 4.0], [1301.0, 4.0], [1302.0, 4.0], [1300.0, 4.0], [1297.0, 4.0], [1299.0, 4.0], [1298.0, 4.0], [1296.0, 4.0], [1309.0, 4.0], [1307.0, 4.0], [1308.0, 4.0], [1280.0, 4.0], [1310.0, 4.0], [1311.0, 4.0], [1284.0, 4.0], [1283.0, 4.0], [1282.0, 4.0], [1281.0, 4.0], [1306.0, 4.0], [1293.0, 4.0], [1292.0, 4.0], [1291.0, 4.0], [1354.0, 4.0], [1406.0, 3.0], [1377.0, 3.0], [1357.0, 3.0], [1361.0, 4.0], [1363.0, 4.0], [1365.0, 4.0], [1366.0, 4.0], [1348.0, 4.0], [1349.0, 4.0], [1352.0, 4.0], [1347.0, 4.0], [1346.0, 4.0], [1345.0, 4.0], [1344.0, 4.0], [1442.0, 3.0], [1467.0, 3.0], [1414.0, 3.0], [1498.0, 3.0], [1481.0, 3.0], [1485.0, 3.0], [1476.0, 3.0], [1473.0, 3.0], [1489.0, 3.0], [1474.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1498.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 55.45, "minX": 1.71250032E12, "maxY": 1276.5833333333333, "series": [{"data": [[1.71250038E12, 1276.5833333333333], [1.71250068E12, 1193.3666666666666], [1.71250092E12, 1066.4666666666667], [1.7125005E12, 1261.1833333333334], [1.71250032E12, 55.45], [1.7125008E12, 1190.8333333333333], [1.71250062E12, 1237.6333333333334], [1.71250044E12, 1260.2833333333333], [1.71250074E12, 1183.4166666666667], [1.71250086E12, 1170.35], [1.71250056E12, 1251.5833333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250092E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 55.36666666666667, "minX": 1.71250032E12, "maxY": 1276.5833333333333, "series": [{"data": [[1.71250038E12, 1276.5833333333333], [1.71250068E12, 1193.3666666666666], [1.71250092E12, 1066.55], [1.7125005E12, 1261.1833333333334], [1.71250032E12, 55.36666666666667], [1.7125008E12, 1190.8333333333333], [1.71250062E12, 1237.6333333333334], [1.71250044E12, 1260.2833333333333], [1.71250074E12, 1183.4166666666667], [1.71250086E12, 1170.35], [1.71250056E12, 1251.5833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250092E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 55.36666666666667, "minX": 1.71250032E12, "maxY": 1276.5833333333333, "series": [{"data": [[1.71250038E12, 1276.5833333333333], [1.71250068E12, 1193.3666666666666], [1.71250092E12, 1066.55], [1.7125005E12, 1261.1833333333334], [1.71250032E12, 55.36666666666667], [1.7125008E12, 1190.8333333333333], [1.71250062E12, 1237.6333333333334], [1.71250044E12, 1260.2833333333333], [1.71250074E12, 1183.4166666666667], [1.71250086E12, 1170.35], [1.71250056E12, 1251.5833333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250092E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 55.36666666666667, "minX": 1.71250032E12, "maxY": 1276.5833333333333, "series": [{"data": [[1.71250038E12, 1276.5833333333333], [1.71250068E12, 1193.3666666666666], [1.71250092E12, 1066.55], [1.7125005E12, 1261.1833333333334], [1.71250032E12, 55.36666666666667], [1.7125008E12, 1190.8333333333333], [1.71250062E12, 1237.6333333333334], [1.71250044E12, 1260.2833333333333], [1.71250074E12, 1183.4166666666667], [1.71250086E12, 1170.35], [1.71250056E12, 1251.5833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250092E12, "title": "Total Transactions Per Second"}},
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

