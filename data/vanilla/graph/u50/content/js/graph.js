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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1305.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 3.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 3.0], [0.9, 3.0], [1.0, 3.0], [1.1, 3.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 4.0], [2.1, 4.0], [2.2, 4.0], [2.3, 4.0], [2.4, 4.0], [2.5, 4.0], [2.6, 4.0], [2.7, 4.0], [2.8, 4.0], [2.9, 4.0], [3.0, 4.0], [3.1, 4.0], [3.2, 4.0], [3.3, 4.0], [3.4, 4.0], [3.5, 4.0], [3.6, 4.0], [3.7, 4.0], [3.8, 4.0], [3.9, 4.0], [4.0, 4.0], [4.1, 5.0], [4.2, 5.0], [4.3, 5.0], [4.4, 5.0], [4.5, 5.0], [4.6, 5.0], [4.7, 5.0], [4.8, 5.0], [4.9, 5.0], [5.0, 5.0], [5.1, 5.0], [5.2, 5.0], [5.3, 5.0], [5.4, 5.0], [5.5, 5.0], [5.6, 5.0], [5.7, 5.0], [5.8, 5.0], [5.9, 5.0], [6.0, 5.0], [6.1, 5.0], [6.2, 6.0], [6.3, 6.0], [6.4, 6.0], [6.5, 6.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 7.0], [8.5, 7.0], [8.6, 7.0], [8.7, 7.0], [8.8, 7.0], [8.9, 7.0], [9.0, 7.0], [9.1, 7.0], [9.2, 7.0], [9.3, 7.0], [9.4, 7.0], [9.5, 7.0], [9.6, 7.0], [9.7, 7.0], [9.8, 7.0], [9.9, 7.0], [10.0, 7.0], [10.1, 7.0], [10.2, 7.0], [10.3, 7.0], [10.4, 7.0], [10.5, 7.0], [10.6, 8.0], [10.7, 8.0], [10.8, 8.0], [10.9, 8.0], [11.0, 8.0], [11.1, 8.0], [11.2, 8.0], [11.3, 8.0], [11.4, 8.0], [11.5, 8.0], [11.6, 8.0], [11.7, 8.0], [11.8, 8.0], [11.9, 8.0], [12.0, 8.0], [12.1, 8.0], [12.2, 8.0], [12.3, 8.0], [12.4, 8.0], [12.5, 8.0], [12.6, 8.0], [12.7, 8.0], [12.8, 8.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 9.0], [13.5, 9.0], [13.6, 9.0], [13.7, 9.0], [13.8, 9.0], [13.9, 9.0], [14.0, 9.0], [14.1, 9.0], [14.2, 9.0], [14.3, 9.0], [14.4, 9.0], [14.5, 9.0], [14.6, 9.0], [14.7, 9.0], [14.8, 9.0], [14.9, 9.0], [15.0, 9.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 10.0], [17.2, 10.0], [17.3, 11.0], [17.4, 11.0], [17.5, 11.0], [17.6, 11.0], [17.7, 11.0], [17.8, 11.0], [17.9, 11.0], [18.0, 11.0], [18.1, 11.0], [18.2, 11.0], [18.3, 11.0], [18.4, 11.0], [18.5, 11.0], [18.6, 11.0], [18.7, 11.0], [18.8, 11.0], [18.9, 11.0], [19.0, 11.0], [19.1, 11.0], [19.2, 11.0], [19.3, 11.0], [19.4, 11.0], [19.5, 12.0], [19.6, 12.0], [19.7, 12.0], [19.8, 12.0], [19.9, 12.0], [20.0, 12.0], [20.1, 12.0], [20.2, 12.0], [20.3, 12.0], [20.4, 12.0], [20.5, 12.0], [20.6, 12.0], [20.7, 12.0], [20.8, 12.0], [20.9, 12.0], [21.0, 12.0], [21.1, 12.0], [21.2, 12.0], [21.3, 12.0], [21.4, 12.0], [21.5, 12.0], [21.6, 13.0], [21.7, 13.0], [21.8, 13.0], [21.9, 13.0], [22.0, 13.0], [22.1, 13.0], [22.2, 13.0], [22.3, 13.0], [22.4, 13.0], [22.5, 13.0], [22.6, 13.0], [22.7, 13.0], [22.8, 13.0], [22.9, 13.0], [23.0, 13.0], [23.1, 13.0], [23.2, 13.0], [23.3, 13.0], [23.4, 13.0], [23.5, 13.0], [23.6, 14.0], [23.7, 14.0], [23.8, 14.0], [23.9, 14.0], [24.0, 14.0], [24.1, 14.0], [24.2, 14.0], [24.3, 14.0], [24.4, 14.0], [24.5, 14.0], [24.6, 14.0], [24.7, 14.0], [24.8, 14.0], [24.9, 14.0], [25.0, 14.0], [25.1, 14.0], [25.2, 14.0], [25.3, 14.0], [25.4, 15.0], [25.5, 15.0], [25.6, 15.0], [25.7, 15.0], [25.8, 15.0], [25.9, 15.0], [26.0, 15.0], [26.1, 15.0], [26.2, 15.0], [26.3, 15.0], [26.4, 15.0], [26.5, 15.0], [26.6, 15.0], [26.7, 15.0], [26.8, 15.0], [26.9, 15.0], [27.0, 15.0], [27.1, 16.0], [27.2, 16.0], [27.3, 16.0], [27.4, 16.0], [27.5, 16.0], [27.6, 16.0], [27.7, 16.0], [27.8, 16.0], [27.9, 16.0], [28.0, 16.0], [28.1, 16.0], [28.2, 16.0], [28.3, 16.0], [28.4, 16.0], [28.5, 17.0], [28.6, 17.0], [28.7, 17.0], [28.8, 17.0], [28.9, 17.0], [29.0, 17.0], [29.1, 17.0], [29.2, 17.0], [29.3, 17.0], [29.4, 17.0], [29.5, 17.0], [29.6, 17.0], [29.7, 17.0], [29.8, 17.0], [29.9, 18.0], [30.0, 18.0], [30.1, 18.0], [30.2, 18.0], [30.3, 18.0], [30.4, 18.0], [30.5, 18.0], [30.6, 18.0], [30.7, 18.0], [30.8, 18.0], [30.9, 18.0], [31.0, 18.0], [31.1, 19.0], [31.2, 19.0], [31.3, 19.0], [31.4, 19.0], [31.5, 19.0], [31.6, 19.0], [31.7, 19.0], [31.8, 19.0], [31.9, 19.0], [32.0, 19.0], [32.1, 19.0], [32.2, 20.0], [32.3, 20.0], [32.4, 20.0], [32.5, 20.0], [32.6, 20.0], [32.7, 20.0], [32.8, 20.0], [32.9, 20.0], [33.0, 20.0], [33.1, 21.0], [33.2, 21.0], [33.3, 21.0], [33.4, 21.0], [33.5, 21.0], [33.6, 21.0], [33.7, 21.0], [33.8, 21.0], [33.9, 21.0], [34.0, 22.0], [34.1, 22.0], [34.2, 22.0], [34.3, 22.0], [34.4, 22.0], [34.5, 22.0], [34.6, 22.0], [34.7, 22.0], [34.8, 22.0], [34.9, 23.0], [35.0, 23.0], [35.1, 23.0], [35.2, 23.0], [35.3, 23.0], [35.4, 23.0], [35.5, 23.0], [35.6, 24.0], [35.7, 24.0], [35.8, 24.0], [35.9, 24.0], [36.0, 24.0], [36.1, 24.0], [36.2, 24.0], [36.3, 25.0], [36.4, 25.0], [36.5, 25.0], [36.6, 25.0], [36.7, 25.0], [36.8, 25.0], [36.9, 26.0], [37.0, 26.0], [37.1, 26.0], [37.2, 26.0], [37.3, 26.0], [37.4, 27.0], [37.5, 27.0], [37.6, 27.0], [37.7, 27.0], [37.8, 27.0], [37.9, 28.0], [38.0, 28.0], [38.1, 28.0], [38.2, 28.0], [38.3, 29.0], [38.4, 29.0], [38.5, 29.0], [38.6, 30.0], [38.7, 30.0], [38.8, 30.0], [38.9, 31.0], [39.0, 31.0], [39.1, 31.0], [39.2, 32.0], [39.3, 32.0], [39.4, 33.0], [39.5, 33.0], [39.6, 34.0], [39.7, 34.0], [39.8, 35.0], [39.9, 35.0], [40.0, 36.0], [40.1, 36.0], [40.2, 37.0], [40.3, 37.0], [40.4, 37.0], [40.5, 38.0], [40.6, 38.0], [40.7, 39.0], [40.8, 39.0], [40.9, 40.0], [41.0, 40.0], [41.1, 41.0], [41.2, 41.0], [41.3, 42.0], [41.4, 42.0], [41.5, 43.0], [41.6, 44.0], [41.7, 45.0], [41.8, 45.0], [41.9, 46.0], [42.0, 47.0], [42.1, 48.0], [42.2, 49.0], [42.3, 50.0], [42.4, 50.0], [42.5, 51.0], [42.6, 52.0], [42.7, 53.0], [42.8, 53.0], [42.9, 54.0], [43.0, 55.0], [43.1, 55.0], [43.2, 56.0], [43.3, 56.0], [43.4, 57.0], [43.5, 57.0], [43.6, 57.0], [43.7, 58.0], [43.8, 58.0], [43.9, 59.0], [44.0, 59.0], [44.1, 59.0], [44.2, 60.0], [44.3, 60.0], [44.4, 60.0], [44.5, 60.0], [44.6, 61.0], [44.7, 61.0], [44.8, 61.0], [44.9, 62.0], [45.0, 62.0], [45.1, 62.0], [45.2, 62.0], [45.3, 63.0], [45.4, 63.0], [45.5, 63.0], [45.6, 63.0], [45.7, 64.0], [45.8, 64.0], [45.9, 64.0], [46.0, 64.0], [46.1, 64.0], [46.2, 65.0], [46.3, 65.0], [46.4, 65.0], [46.5, 65.0], [46.6, 66.0], [46.7, 66.0], [46.8, 66.0], [46.9, 66.0], [47.0, 66.0], [47.1, 67.0], [47.2, 67.0], [47.3, 67.0], [47.4, 67.0], [47.5, 67.0], [47.6, 68.0], [47.7, 68.0], [47.8, 68.0], [47.9, 68.0], [48.0, 68.0], [48.1, 69.0], [48.2, 69.0], [48.3, 69.0], [48.4, 69.0], [48.5, 69.0], [48.6, 70.0], [48.7, 70.0], [48.8, 70.0], [48.9, 70.0], [49.0, 70.0], [49.1, 70.0], [49.2, 71.0], [49.3, 71.0], [49.4, 71.0], [49.5, 71.0], [49.6, 71.0], [49.7, 71.0], [49.8, 72.0], [49.9, 72.0], [50.0, 72.0], [50.1, 72.0], [50.2, 72.0], [50.3, 72.0], [50.4, 73.0], [50.5, 73.0], [50.6, 73.0], [50.7, 73.0], [50.8, 73.0], [50.9, 73.0], [51.0, 74.0], [51.1, 74.0], [51.2, 74.0], [51.3, 74.0], [51.4, 74.0], [51.5, 74.0], [51.6, 74.0], [51.7, 75.0], [51.8, 75.0], [51.9, 75.0], [52.0, 75.0], [52.1, 75.0], [52.2, 75.0], [52.3, 76.0], [52.4, 76.0], [52.5, 76.0], [52.6, 76.0], [52.7, 76.0], [52.8, 76.0], [52.9, 76.0], [53.0, 77.0], [53.1, 77.0], [53.2, 77.0], [53.3, 77.0], [53.4, 77.0], [53.5, 77.0], [53.6, 78.0], [53.7, 78.0], [53.8, 78.0], [53.9, 78.0], [54.0, 78.0], [54.1, 78.0], [54.2, 79.0], [54.3, 79.0], [54.4, 79.0], [54.5, 79.0], [54.6, 79.0], [54.7, 79.0], [54.8, 80.0], [54.9, 80.0], [55.0, 80.0], [55.1, 80.0], [55.2, 80.0], [55.3, 81.0], [55.4, 81.0], [55.5, 81.0], [55.6, 81.0], [55.7, 82.0], [55.8, 82.0], [55.9, 82.0], [56.0, 83.0], [56.1, 83.0], [56.2, 83.0], [56.3, 83.0], [56.4, 84.0], [56.5, 84.0], [56.6, 85.0], [56.7, 85.0], [56.8, 85.0], [56.9, 86.0], [57.0, 86.0], [57.1, 86.0], [57.2, 87.0], [57.3, 87.0], [57.4, 88.0], [57.5, 88.0], [57.6, 88.0], [57.7, 89.0], [57.8, 89.0], [57.9, 89.0], [58.0, 89.0], [58.1, 90.0], [58.2, 90.0], [58.3, 90.0], [58.4, 91.0], [58.5, 91.0], [58.6, 91.0], [58.7, 91.0], [58.8, 92.0], [58.9, 92.0], [59.0, 92.0], [59.1, 92.0], [59.2, 92.0], [59.3, 93.0], [59.4, 93.0], [59.5, 93.0], [59.6, 93.0], [59.7, 93.0], [59.8, 94.0], [59.9, 94.0], [60.0, 94.0], [60.1, 94.0], [60.2, 94.0], [60.3, 94.0], [60.4, 94.0], [60.5, 95.0], [60.6, 95.0], [60.7, 95.0], [60.8, 95.0], [60.9, 95.0], [61.0, 95.0], [61.1, 95.0], [61.2, 95.0], [61.3, 96.0], [61.4, 96.0], [61.5, 96.0], [61.6, 96.0], [61.7, 96.0], [61.8, 96.0], [61.9, 96.0], [62.0, 96.0], [62.1, 96.0], [62.2, 97.0], [62.3, 97.0], [62.4, 97.0], [62.5, 97.0], [62.6, 97.0], [62.7, 97.0], [62.8, 97.0], [62.9, 97.0], [63.0, 97.0], [63.1, 97.0], [63.2, 97.0], [63.3, 97.0], [63.4, 98.0], [63.5, 98.0], [63.6, 98.0], [63.7, 98.0], [63.8, 98.0], [63.9, 98.0], [64.0, 98.0], [64.1, 98.0], [64.2, 98.0], [64.3, 98.0], [64.4, 98.0], [64.5, 98.0], [64.6, 99.0], [64.7, 99.0], [64.8, 99.0], [64.9, 99.0], [65.0, 99.0], [65.1, 99.0], [65.2, 99.0], [65.3, 99.0], [65.4, 99.0], [65.5, 99.0], [65.6, 99.0], [65.7, 99.0], [65.8, 99.0], [65.9, 99.0], [66.0, 99.0], [66.1, 100.0], [66.2, 100.0], [66.3, 100.0], [66.4, 100.0], [66.5, 100.0], [66.6, 100.0], [66.7, 100.0], [66.8, 100.0], [66.9, 100.0], [67.0, 100.0], [67.1, 100.0], [67.2, 100.0], [67.3, 100.0], [67.4, 100.0], [67.5, 100.0], [67.6, 101.0], [67.7, 101.0], [67.8, 101.0], [67.9, 101.0], [68.0, 101.0], [68.1, 101.0], [68.2, 101.0], [68.3, 101.0], [68.4, 101.0], [68.5, 101.0], [68.6, 101.0], [68.7, 101.0], [68.8, 101.0], [68.9, 101.0], [69.0, 102.0], [69.1, 102.0], [69.2, 102.0], [69.3, 102.0], [69.4, 102.0], [69.5, 102.0], [69.6, 102.0], [69.7, 102.0], [69.8, 102.0], [69.9, 102.0], [70.0, 102.0], [70.1, 102.0], [70.2, 102.0], [70.3, 102.0], [70.4, 103.0], [70.5, 103.0], [70.6, 103.0], [70.7, 103.0], [70.8, 103.0], [70.9, 103.0], [71.0, 103.0], [71.1, 103.0], [71.2, 103.0], [71.3, 103.0], [71.4, 103.0], [71.5, 104.0], [71.6, 104.0], [71.7, 104.0], [71.8, 104.0], [71.9, 104.0], [72.0, 104.0], [72.1, 104.0], [72.2, 104.0], [72.3, 104.0], [72.4, 105.0], [72.5, 105.0], [72.6, 105.0], [72.7, 105.0], [72.8, 105.0], [72.9, 105.0], [73.0, 105.0], [73.1, 106.0], [73.2, 106.0], [73.3, 106.0], [73.4, 106.0], [73.5, 106.0], [73.6, 106.0], [73.7, 106.0], [73.8, 107.0], [73.9, 107.0], [74.0, 107.0], [74.1, 107.0], [74.2, 107.0], [74.3, 108.0], [74.4, 108.0], [74.5, 108.0], [74.6, 108.0], [74.7, 109.0], [74.8, 109.0], [74.9, 109.0], [75.0, 110.0], [75.1, 110.0], [75.2, 110.0], [75.3, 111.0], [75.4, 111.0], [75.5, 111.0], [75.6, 112.0], [75.7, 112.0], [75.8, 113.0], [75.9, 113.0], [76.0, 114.0], [76.1, 114.0], [76.2, 115.0], [76.3, 116.0], [76.4, 117.0], [76.5, 118.0], [76.6, 119.0], [76.7, 120.0], [76.8, 120.0], [76.9, 121.0], [77.0, 122.0], [77.1, 122.0], [77.2, 123.0], [77.3, 123.0], [77.4, 124.0], [77.5, 125.0], [77.6, 125.0], [77.7, 126.0], [77.8, 126.0], [77.9, 127.0], [78.0, 128.0], [78.1, 128.0], [78.2, 130.0], [78.3, 132.0], [78.4, 134.0], [78.5, 138.0], [78.6, 144.0], [78.7, 153.0], [78.8, 158.0], [78.9, 161.0], [79.0, 162.0], [79.1, 164.0], [79.2, 166.0], [79.3, 168.0], [79.4, 169.0], [79.5, 171.0], [79.6, 172.0], [79.7, 172.0], [79.8, 173.0], [79.9, 174.0], [80.0, 174.0], [80.1, 175.0], [80.2, 176.0], [80.3, 176.0], [80.4, 177.0], [80.5, 178.0], [80.6, 179.0], [80.7, 179.0], [80.8, 180.0], [80.9, 181.0], [81.0, 182.0], [81.1, 183.0], [81.2, 183.0], [81.3, 184.0], [81.4, 184.0], [81.5, 185.0], [81.6, 186.0], [81.7, 186.0], [81.8, 186.0], [81.9, 187.0], [82.0, 187.0], [82.1, 188.0], [82.2, 188.0], [82.3, 188.0], [82.4, 189.0], [82.5, 189.0], [82.6, 189.0], [82.7, 190.0], [82.8, 190.0], [82.9, 190.0], [83.0, 191.0], [83.1, 191.0], [83.2, 191.0], [83.3, 192.0], [83.4, 192.0], [83.5, 192.0], [83.6, 193.0], [83.7, 193.0], [83.8, 193.0], [83.9, 193.0], [84.0, 193.0], [84.1, 194.0], [84.2, 194.0], [84.3, 194.0], [84.4, 194.0], [84.5, 194.0], [84.6, 195.0], [84.7, 195.0], [84.8, 195.0], [84.9, 195.0], [85.0, 195.0], [85.1, 195.0], [85.2, 195.0], [85.3, 196.0], [85.4, 196.0], [85.5, 196.0], [85.6, 196.0], [85.7, 196.0], [85.8, 196.0], [85.9, 196.0], [86.0, 196.0], [86.1, 197.0], [86.2, 197.0], [86.3, 197.0], [86.4, 197.0], [86.5, 197.0], [86.6, 197.0], [86.7, 197.0], [86.8, 197.0], [86.9, 197.0], [87.0, 198.0], [87.1, 198.0], [87.2, 198.0], [87.3, 198.0], [87.4, 198.0], [87.5, 198.0], [87.6, 198.0], [87.7, 198.0], [87.8, 198.0], [87.9, 199.0], [88.0, 199.0], [88.1, 199.0], [88.2, 199.0], [88.3, 199.0], [88.4, 199.0], [88.5, 199.0], [88.6, 199.0], [88.7, 199.0], [88.8, 199.0], [88.9, 199.0], [89.0, 200.0], [89.1, 200.0], [89.2, 200.0], [89.3, 200.0], [89.4, 200.0], [89.5, 200.0], [89.6, 200.0], [89.7, 200.0], [89.8, 200.0], [89.9, 200.0], [90.0, 200.0], [90.1, 201.0], [90.2, 201.0], [90.3, 201.0], [90.4, 201.0], [90.5, 201.0], [90.6, 201.0], [90.7, 201.0], [90.8, 201.0], [90.9, 201.0], [91.0, 202.0], [91.1, 202.0], [91.2, 202.0], [91.3, 202.0], [91.4, 202.0], [91.5, 202.0], [91.6, 202.0], [91.7, 202.0], [91.8, 202.0], [91.9, 203.0], [92.0, 203.0], [92.1, 203.0], [92.2, 203.0], [92.3, 203.0], [92.4, 203.0], [92.5, 203.0], [92.6, 204.0], [92.7, 204.0], [92.8, 204.0], [92.9, 204.0], [93.0, 204.0], [93.1, 205.0], [93.2, 205.0], [93.3, 205.0], [93.4, 205.0], [93.5, 206.0], [93.6, 206.0], [93.7, 206.0], [93.8, 207.0], [93.9, 207.0], [94.0, 208.0], [94.1, 209.0], [94.2, 210.0], [94.3, 211.0], [94.4, 212.0], [94.5, 214.0], [94.6, 218.0], [94.7, 221.0], [94.8, 222.0], [94.9, 224.0], [95.0, 225.0], [95.1, 227.0], [95.2, 231.0], [95.3, 247.0], [95.4, 262.0], [95.5, 270.0], [95.6, 274.0], [95.7, 278.0], [95.8, 282.0], [95.9, 285.0], [96.0, 287.0], [96.1, 289.0], [96.2, 290.0], [96.3, 292.0], [96.4, 293.0], [96.5, 294.0], [96.6, 295.0], [96.7, 295.0], [96.8, 296.0], [96.9, 297.0], [97.0, 297.0], [97.1, 298.0], [97.2, 298.0], [97.3, 299.0], [97.4, 299.0], [97.5, 300.0], [97.6, 300.0], [97.7, 300.0], [97.8, 301.0], [97.9, 302.0], [98.0, 302.0], [98.1, 303.0], [98.2, 304.0], [98.3, 305.0], [98.4, 307.0], [98.5, 310.0], [98.6, 322.0], [98.7, 327.0], [98.8, 369.0], [98.9, 384.0], [99.0, 392.0], [99.1, 395.0], [99.2, 398.0], [99.3, 400.0], [99.4, 403.0], [99.5, 410.0], [99.6, 469.0], [99.7, 494.0], [99.8, 502.0], [99.9, 595.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 216453.0, "series": [{"data": [[0.0, 216453.0], [600.0, 173.0], [700.0, 52.0], [200.0, 28002.0], [800.0, 17.0], [900.0, 9.0], [1000.0, 3.0], [300.0, 5834.0], [1200.0, 1.0], [1300.0, 1.0], [100.0, 74937.0], [400.0, 1604.0], [500.0, 528.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 745.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 326869.0, "series": [{"data": [[0.0, 326869.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 745.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.923873689512893, "minX": 1.7123433E12, "maxY": 50.0, "series": [{"data": [[1.71234354E12, 50.0], [1.71234336E12, 47.869839932603305], [1.71234384E12, 50.0], [1.7123439E12, 49.880702903296246], [1.71234372E12, 50.0], [1.71234342E12, 50.0], [1.71234378E12, 50.0], [1.7123436E12, 50.0], [1.7123433E12, 14.923873689512893], [1.71234366E12, 50.0], [1.71234348E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123439E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2.859447004608297, "minX": 1.0, "maxY": 140.78880407124683, "series": [{"data": [[2.0, 3.256287425149698], [3.0, 3.1300089047194986], [4.0, 3.7129262490087243], [5.0, 3.7454084863837833], [6.0, 5.5422626788036435], [7.0, 4.808227114716111], [8.0, 6.060355781448543], [9.0, 5.800326441784548], [10.0, 6.972222222222222], [11.0, 9.436025732666186], [12.0, 14.767295597484262], [13.0, 41.73838630806846], [14.0, 22.161006289308173], [15.0, 9.556089743589732], [16.0, 20.35300546448087], [17.0, 55.6386768447837], [18.0, 12.671304347826077], [19.0, 16.489575289575285], [20.0, 62.1600985221675], [21.0, 43.64181818181815], [22.0, 60.74647887323941], [23.0, 66.18382352941177], [24.0, 71.33410138248844], [25.0, 70.44604316546761], [26.0, 81.08776595744679], [27.0, 88.29679144385032], [28.0, 49.880597014925414], [29.0, 89.05943152454778], [30.0, 83.54216867469884], [31.0, 71.6478102189781], [32.0, 40.24255319148938], [33.0, 103.38522427440637], [34.0, 93.91707317073165], [35.0, 35.015372790161415], [36.0, 117.30939226519342], [37.0, 107.97601918465226], [38.0, 48.01144640998972], [39.0, 58.7638190954774], [40.0, 122.66666666666654], [41.0, 120.81951219512187], [42.0, 39.425675675675656], [43.0, 126.52319587628858], [44.0, 139.9238845144356], [45.0, 45.07819905213267], [46.0, 90.30323679727422], [47.0, 140.78880407124683], [48.0, 101.91419141914177], [49.0, 59.788971367974575], [50.0, 94.36403380226659], [1.0, 2.859447004608297]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[46.39527920052229, 87.04789477861175]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 17865.9, "minX": 1.7123433E12, "maxY": 192208.83333333334, "series": [{"data": [[1.71234354E12, 189002.0], [1.71234336E12, 182599.5], [1.71234384E12, 191528.41666666666], [1.7123439E12, 54208.5], [1.71234372E12, 189191.33333333334], [1.71234342E12, 181280.75], [1.71234378E12, 192208.83333333334], [1.7123436E12, 191226.66666666666], [1.7123433E12, 187929.5], [1.71234366E12, 191930.75], [1.71234348E12, 187274.33333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71234354E12, 62290.8], [1.71234336E12, 60180.9], [1.71234384E12, 63123.45], [1.7123439E12, 17865.9], [1.71234372E12, 62353.2], [1.71234342E12, 59746.05], [1.71234378E12, 63347.7], [1.7123436E12, 63024.0], [1.7123433E12, 61937.85], [1.71234366E12, 63256.05], [1.71234348E12, 61721.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123439E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 23.653685105311236, "minX": 1.7123433E12, "maxY": 98.77133813577798, "series": [{"data": [[1.71234354E12, 93.76580891560184], [1.71234336E12, 92.90386235499984], [1.71234384E12, 92.98566618269456], [1.7123439E12, 98.77133813577798], [1.71234372E12, 93.61361646234681], [1.71234342E12, 97.89588433042837], [1.71234378E12, 92.18361755833222], [1.7123436E12, 92.78966584158431], [1.7123433E12, 23.653685105311236], [1.71234366E12, 92.50735226116763], [1.71234348E12, 94.8456653607996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123439E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 23.65006454050323, "minX": 1.7123433E12, "maxY": 98.7695917921849, "series": [{"data": [[1.71234354E12, 93.76383671424959], [1.71234336E12, 92.90152938889264], [1.71234384E12, 92.98350375335932], [1.7123439E12, 98.7695917921849], [1.71234372E12, 93.61161496122168], [1.71234342E12, 97.89343646985954], [1.71234378E12, 92.18173982638702], [1.7123436E12, 92.78780940594025], [1.7123433E12, 23.65006454050323], [1.71234366E12, 92.50541015444412], [1.71234348E12, 94.84408568178908]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123439E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 5.457323728443582E-4, "minX": 1.7123433E12, "maxY": 0.0013222932342662839, "series": [{"data": [[1.71234354E12, 9.704482844978716E-4], [1.71234336E12, 8.424599831508038E-4], [1.71234384E12, 6.796206481109638E-4], [1.7123439E12, 5.457323728443582E-4], [1.71234372E12, 7.505629221916411E-4], [1.71234342E12, 9.465060870132905E-4], [1.71234378E12, 6.772148002216343E-4], [1.7123436E12, 8.972772277227733E-4], [1.7123433E12, 0.0013222932342662839], [1.71234366E12, 7.090230894910442E-4], [1.71234348E12, 8.530266649816774E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123439E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.7123433E12, "maxY": 1305.0, "series": [{"data": [[1.71234354E12, 883.0], [1.71234336E12, 905.0], [1.71234384E12, 724.0], [1.7123439E12, 758.0], [1.71234372E12, 785.0], [1.71234342E12, 898.0], [1.71234378E12, 1305.0], [1.7123436E12, 800.0], [1.7123433E12, 308.0], [1.71234366E12, 1098.0], [1.71234348E12, 1004.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71234354E12, 3.0], [1.71234336E12, 2.0], [1.71234384E12, 2.0], [1.7123439E12, 3.0], [1.71234372E12, 2.0], [1.71234342E12, 2.0], [1.71234378E12, 2.0], [1.7123436E12, 3.0], [1.7123433E12, 1.0], [1.71234366E12, 2.0], [1.71234348E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71234354E12, 202.0], [1.71234336E12, 203.0], [1.71234384E12, 202.0], [1.7123439E12, 201.0], [1.71234372E12, 201.0], [1.71234342E12, 204.0], [1.71234378E12, 202.0], [1.7123436E12, 202.0], [1.7123433E12, 98.0], [1.71234366E12, 201.0], [1.71234348E12, 201.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71234354E12, 380.9400000000096], [1.71234336E12, 405.0], [1.71234384E12, 395.0], [1.7123439E12, 321.3700000000008], [1.71234372E12, 394.0], [1.71234342E12, 403.0], [1.71234378E12, 424.0], [1.7123436E12, 363.9900000000016], [1.7123433E12, 194.0], [1.71234366E12, 374.0], [1.71234348E12, 394.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71234354E12, 83.0], [1.71234336E12, 78.0], [1.71234384E12, 70.0], [1.7123439E12, 89.0], [1.71234372E12, 79.0], [1.71234342E12, 80.0], [1.71234378E12, 70.0], [1.7123436E12, 77.0], [1.7123433E12, 9.0], [1.71234366E12, 74.0], [1.71234348E12, 84.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71234354E12, 250.95000000000073], [1.71234336E12, 296.0], [1.71234384E12, 289.0], [1.7123439E12, 221.0], [1.71234372E12, 234.0], [1.71234342E12, 293.9500000000007], [1.71234378E12, 268.0], [1.7123436E12, 225.0], [1.7123433E12, 103.0], [1.71234366E12, 226.0], [1.71234348E12, 261.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123439E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3.0, "minX": 54.0, "maxY": 198.0, "series": [{"data": [[54.0, 185.0], [249.0, 197.0], [271.0, 184.0], [270.0, 189.0], [269.0, 156.0], [266.0, 99.0], [273.0, 195.0], [286.0, 121.0], [283.0, 189.0], [282.0, 154.0], [287.0, 193.0], [280.0, 198.0], [272.0, 191.0], [275.0, 188.0], [274.0, 188.0], [278.0, 175.0], [276.0, 104.0], [284.0, 175.0], [285.0, 176.0], [279.0, 115.0], [301.0, 181.0], [302.0, 176.0], [295.0, 187.0], [303.0, 183.0], [294.0, 189.0], [292.0, 184.0], [293.0, 190.0], [291.0, 189.0], [300.0, 193.0], [296.0, 189.0], [297.0, 187.0], [298.0, 121.5], [299.0, 185.0], [290.0, 194.0], [289.0, 191.0], [288.0, 124.0], [317.0, 106.0], [315.0, 106.0], [314.0, 109.0], [311.0, 127.0], [304.0, 189.0], [305.0, 108.0], [318.0, 115.5], [319.0, 124.0], [312.0, 175.0], [313.0, 154.0], [316.0, 115.0], [307.0, 175.0], [306.0, 114.0], [310.0, 173.0], [309.0, 114.0], [308.0, 115.5], [332.0, 101.0], [321.0, 115.0], [333.0, 123.0], [334.0, 112.0], [327.0, 106.0], [329.0, 127.0], [328.0, 128.5], [335.0, 108.0], [331.0, 109.0], [330.0, 181.5], [323.0, 108.0], [322.0, 158.5], [320.0, 179.0], [324.0, 115.0], [325.0, 122.0], [326.0, 115.0], [351.0, 102.0], [345.0, 24.0], [343.0, 103.0], [346.0, 96.0], [341.0, 103.0], [340.0, 142.0], [338.0, 105.0], [348.0, 106.0], [339.0, 128.0], [349.0, 111.0], [337.0, 120.0], [336.0, 140.0], [347.0, 104.0], [344.0, 108.0], [342.0, 123.0], [353.0, 101.0], [359.0, 95.0], [363.0, 96.0], [355.0, 109.0], [354.0, 101.0], [356.0, 102.0], [362.0, 104.0], [367.0, 106.0], [361.0, 107.0], [364.0, 102.5], [352.0, 121.5], [358.0, 106.0], [357.0, 101.0], [371.0, 72.0], [382.0, 99.0], [374.0, 99.0], [373.0, 125.0], [383.0, 106.0], [376.0, 109.0], [377.0, 102.0], [381.0, 100.0], [378.0, 101.0], [394.0, 93.0], [397.0, 104.0], [392.0, 102.0], [398.0, 103.0], [386.0, 104.0], [393.0, 96.0], [387.0, 111.0], [388.0, 102.0], [407.0, 123.0], [415.0, 107.0], [401.0, 104.0], [412.0, 124.0], [418.0, 93.0], [427.0, 100.0], [416.0, 101.0], [431.0, 90.0], [446.0, 97.0], [437.0, 88.0], [435.0, 100.0], [453.0, 94.0], [460.0, 101.0], [451.0, 98.0], [463.0, 102.0], [459.0, 102.0], [449.0, 107.0], [456.0, 98.0], [469.0, 90.0], [477.0, 94.0], [471.0, 72.0], [465.0, 104.0], [479.0, 104.0], [482.0, 25.0], [495.0, 19.0], [489.0, 99.0], [480.0, 83.5], [491.0, 94.0], [505.0, 98.0], [521.0, 82.0], [535.0, 69.0], [514.0, 95.0], [528.0, 96.0], [537.0, 95.0], [540.0, 46.5], [541.0, 70.0], [547.0, 96.0], [561.0, 89.0], [558.0, 85.5], [555.0, 40.0], [546.0, 75.5], [562.0, 94.5], [573.0, 75.0], [572.0, 95.0], [581.0, 52.0], [582.0, 82.0], [600.0, 73.0], [591.0, 68.0], [586.0, 71.0], [606.0, 71.0], [618.0, 68.0], [623.0, 89.0], [640.0, 3.0], [660.0, 64.0], [655.0, 71.0], [677.0, 64.0], [680.0, 22.5], [693.0, 72.0], [672.0, 56.0], [691.0, 61.0], [684.0, 64.0], [710.0, 65.0], [706.0, 45.0], [729.0, 46.0], [722.0, 81.0], [728.0, 41.0], [709.0, 62.0], [716.0, 65.0], [712.0, 71.0], [721.0, 22.0], [743.0, 76.0], [744.0, 19.0], [761.0, 79.0], [763.0, 58.0], [758.0, 60.0], [736.0, 31.0], [774.0, 18.0], [792.0, 20.0], [778.0, 63.0], [777.0, 41.0], [788.0, 70.0], [784.0, 34.0], [798.0, 38.0], [771.0, 41.0], [781.0, 55.0], [795.0, 71.0], [769.0, 25.0], [782.0, 34.0], [804.0, 15.0], [809.0, 30.0], [816.0, 29.0], [826.0, 34.0], [820.0, 18.0], [830.0, 59.0], [839.0, 3.0], [848.0, 36.0], [861.0, 34.0], [837.0, 20.0], [850.0, 19.0], [855.0, 48.0], [842.0, 43.5], [841.0, 32.0], [878.0, 13.0], [874.0, 27.0], [875.0, 23.0], [873.0, 26.0], [895.0, 19.0], [871.0, 28.0], [877.0, 44.0], [898.0, 69.0], [910.0, 48.0], [917.0, 23.0], [921.0, 18.0], [896.0, 60.5], [925.0, 20.0], [927.0, 38.0], [913.0, 37.0], [908.0, 19.0], [939.0, 6.0], [959.0, 12.0], [928.0, 35.5], [952.0, 21.0], [944.0, 27.0], [970.0, 3.0], [969.0, 19.0], [962.0, 22.0], [989.0, 36.0], [987.0, 22.0], [968.0, 38.0], [984.0, 25.0], [992.0, 31.0], [1017.0, 17.0], [1018.0, 22.0], [999.0, 17.0], [1046.0, 24.0], [1047.0, 27.0], [1066.0, 25.0], [1065.0, 18.0], [1053.0, 17.0], [1060.0, 25.0], [1098.0, 5.0], [1139.0, 3.0], [1106.0, 11.0], [1107.0, 22.0], [1149.0, 20.0], [1148.0, 19.0], [1094.0, 22.0], [1095.0, 18.0], [1097.0, 36.0], [1102.0, 36.5], [1109.0, 25.0], [1129.0, 17.0], [1128.0, 22.0], [1135.0, 16.0], [1122.0, 19.0], [1201.0, 14.0], [1174.0, 23.0], [1194.0, 28.5], [1182.0, 18.0], [1176.0, 20.0], [1155.0, 23.0], [1246.0, 12.0], [1278.0, 4.0], [1238.0, 4.0], [1237.0, 19.0], [1222.0, 16.0], [1267.0, 26.0], [1245.0, 19.0], [1241.0, 30.0], [1257.0, 20.0], [1221.0, 17.0], [1263.0, 16.0], [1290.0, 18.0], [1282.0, 3.0], [1289.0, 13.0], [1304.0, 20.0], [1311.0, 25.0], [1337.0, 18.0], [1338.0, 21.0], [1339.0, 17.0], [1321.0, 20.0], [1399.0, 4.0], [1392.0, 5.0], [1344.0, 22.0], [1348.0, 17.0], [1403.0, 15.0], [1362.0, 19.0], [1381.0, 19.0], [1389.0, 28.0], [1470.0, 21.0], [1423.0, 22.0], [1439.0, 21.0], [1483.0, 4.0], [1500.0, 19.0], [1492.0, 16.0], [1528.0, 20.0], [1499.0, 19.0], [1481.0, 24.0], [1582.0, 4.0], [1561.0, 6.0], [1592.0, 16.0], [1562.0, 22.0], [1648.0, 7.0], [1626.0, 14.0], [1619.0, 24.0], [1644.0, 22.0], [1609.0, 17.0], [1633.0, 18.0], [1663.0, 26.0], [1754.0, 20.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1754.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3.0, "minX": 54.0, "maxY": 198.0, "series": [{"data": [[54.0, 185.0], [249.0, 197.0], [271.0, 184.0], [270.0, 189.0], [269.0, 156.0], [266.0, 99.0], [273.0, 195.0], [286.0, 121.0], [283.0, 189.0], [282.0, 154.0], [287.0, 193.0], [280.0, 198.0], [272.0, 191.0], [275.0, 188.0], [274.0, 188.0], [278.0, 175.0], [276.0, 104.0], [284.0, 175.0], [285.0, 176.0], [279.0, 115.0], [301.0, 181.0], [302.0, 176.0], [295.0, 187.0], [303.0, 183.0], [294.0, 189.0], [292.0, 184.0], [293.0, 190.0], [291.0, 189.0], [300.0, 193.0], [296.0, 189.0], [297.0, 187.0], [298.0, 121.5], [299.0, 185.0], [290.0, 194.0], [289.0, 191.0], [288.0, 124.0], [317.0, 106.0], [315.0, 106.0], [314.0, 109.0], [311.0, 127.0], [304.0, 189.0], [305.0, 108.0], [318.0, 115.5], [319.0, 124.0], [312.0, 175.0], [313.0, 154.0], [316.0, 115.0], [307.0, 175.0], [306.0, 114.0], [310.0, 173.0], [309.0, 114.0], [308.0, 115.5], [332.0, 101.0], [321.0, 115.0], [333.0, 123.0], [334.0, 112.0], [327.0, 106.0], [329.0, 127.0], [328.0, 128.5], [335.0, 108.0], [331.0, 109.0], [330.0, 181.5], [323.0, 108.0], [322.0, 158.5], [320.0, 179.0], [324.0, 115.0], [325.0, 122.0], [326.0, 115.0], [351.0, 102.0], [345.0, 24.0], [343.0, 103.0], [346.0, 96.0], [341.0, 103.0], [340.0, 142.0], [338.0, 105.0], [348.0, 106.0], [339.0, 128.0], [349.0, 111.0], [337.0, 120.0], [336.0, 140.0], [347.0, 104.0], [344.0, 108.0], [342.0, 123.0], [353.0, 101.0], [359.0, 95.0], [363.0, 96.0], [355.0, 109.0], [354.0, 101.0], [356.0, 102.0], [362.0, 104.0], [367.0, 106.0], [361.0, 107.0], [364.0, 102.5], [352.0, 121.5], [358.0, 106.0], [357.0, 101.0], [371.0, 72.0], [382.0, 99.0], [374.0, 99.0], [373.0, 125.0], [383.0, 106.0], [376.0, 109.0], [377.0, 102.0], [381.0, 100.0], [378.0, 101.0], [394.0, 93.0], [397.0, 104.0], [392.0, 102.0], [398.0, 103.0], [386.0, 104.0], [393.0, 96.0], [387.0, 111.0], [388.0, 102.0], [407.0, 123.0], [415.0, 107.0], [401.0, 104.0], [412.0, 124.0], [418.0, 93.0], [427.0, 100.0], [416.0, 101.0], [431.0, 90.0], [446.0, 97.0], [437.0, 88.0], [435.0, 100.0], [453.0, 94.0], [460.0, 101.0], [451.0, 98.0], [463.0, 102.0], [459.0, 102.0], [449.0, 107.0], [456.0, 98.0], [469.0, 90.0], [477.0, 94.0], [471.0, 72.0], [465.0, 104.0], [479.0, 104.0], [482.0, 25.0], [495.0, 19.0], [489.0, 99.0], [480.0, 83.5], [491.0, 94.0], [505.0, 98.0], [521.0, 82.0], [535.0, 69.0], [514.0, 95.0], [528.0, 96.0], [537.0, 95.0], [540.0, 46.5], [541.0, 70.0], [547.0, 96.0], [561.0, 89.0], [558.0, 85.5], [555.0, 40.0], [546.0, 75.5], [562.0, 94.5], [573.0, 75.0], [572.0, 95.0], [581.0, 52.0], [582.0, 82.0], [600.0, 73.0], [591.0, 68.0], [586.0, 71.0], [606.0, 71.0], [618.0, 68.0], [623.0, 89.0], [640.0, 3.0], [660.0, 64.0], [655.0, 71.0], [677.0, 64.0], [680.0, 22.5], [693.0, 72.0], [672.0, 56.0], [691.0, 61.0], [684.0, 64.0], [710.0, 65.0], [706.0, 45.0], [729.0, 46.0], [722.0, 81.0], [728.0, 41.0], [709.0, 62.0], [716.0, 65.0], [712.0, 71.0], [721.0, 22.0], [743.0, 76.0], [744.0, 19.0], [761.0, 79.0], [763.0, 58.0], [758.0, 60.0], [736.0, 31.0], [774.0, 18.0], [792.0, 20.0], [778.0, 63.0], [777.0, 41.0], [788.0, 70.0], [784.0, 34.0], [798.0, 38.0], [771.0, 41.0], [781.0, 55.0], [795.0, 71.0], [769.0, 25.0], [782.0, 34.0], [804.0, 15.0], [809.0, 30.0], [816.0, 29.0], [826.0, 34.0], [820.0, 18.0], [830.0, 59.0], [839.0, 3.0], [848.0, 36.0], [861.0, 34.0], [837.0, 20.0], [850.0, 19.0], [855.0, 48.0], [842.0, 43.5], [841.0, 32.0], [878.0, 13.0], [874.0, 27.0], [875.0, 23.0], [873.0, 26.0], [895.0, 19.0], [871.0, 28.0], [877.0, 44.0], [898.0, 69.0], [910.0, 48.0], [917.0, 23.0], [921.0, 18.0], [896.0, 60.5], [925.0, 20.0], [927.0, 38.0], [913.0, 37.0], [908.0, 19.0], [939.0, 6.0], [959.0, 12.0], [928.0, 35.5], [952.0, 21.0], [944.0, 27.0], [970.0, 3.0], [969.0, 19.0], [962.0, 22.0], [989.0, 36.0], [987.0, 22.0], [968.0, 38.0], [984.0, 25.0], [992.0, 31.0], [1017.0, 17.0], [1018.0, 22.0], [999.0, 17.0], [1046.0, 24.0], [1047.0, 27.0], [1066.0, 25.0], [1065.0, 18.0], [1053.0, 17.0], [1060.0, 25.0], [1098.0, 5.0], [1139.0, 3.0], [1106.0, 11.0], [1107.0, 22.0], [1149.0, 20.0], [1148.0, 19.0], [1094.0, 22.0], [1095.0, 18.0], [1097.0, 36.0], [1102.0, 36.5], [1109.0, 25.0], [1129.0, 17.0], [1128.0, 22.0], [1135.0, 16.0], [1122.0, 19.0], [1201.0, 14.0], [1174.0, 23.0], [1194.0, 28.5], [1182.0, 18.0], [1176.0, 20.0], [1155.0, 23.0], [1246.0, 12.0], [1278.0, 4.0], [1238.0, 4.0], [1237.0, 19.0], [1222.0, 16.0], [1267.0, 26.0], [1245.0, 19.0], [1241.0, 30.0], [1257.0, 20.0], [1221.0, 17.0], [1263.0, 16.0], [1290.0, 18.0], [1282.0, 3.0], [1289.0, 13.0], [1304.0, 20.0], [1311.0, 25.0], [1337.0, 18.0], [1338.0, 21.0], [1339.0, 17.0], [1321.0, 20.0], [1399.0, 4.0], [1392.0, 5.0], [1344.0, 22.0], [1348.0, 17.0], [1403.0, 15.0], [1362.0, 19.0], [1381.0, 19.0], [1389.0, 28.0], [1470.0, 21.0], [1423.0, 22.0], [1439.0, 21.0], [1483.0, 4.0], [1500.0, 19.0], [1492.0, 16.0], [1528.0, 20.0], [1499.0, 19.0], [1481.0, 24.0], [1582.0, 4.0], [1561.0, 6.0], [1592.0, 16.0], [1562.0, 22.0], [1648.0, 7.0], [1626.0, 14.0], [1619.0, 24.0], [1644.0, 22.0], [1609.0, 17.0], [1633.0, 18.0], [1663.0, 26.0], [1754.0, 20.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1754.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 151.86666666666667, "minX": 1.7123433E12, "maxY": 541.4333333333333, "series": [{"data": [[1.71234354E12, 532.4], [1.71234336E12, 514.6166666666667], [1.71234384E12, 539.5166666666667], [1.7123439E12, 151.86666666666667], [1.71234372E12, 532.9333333333333], [1.71234342E12, 510.65], [1.71234378E12, 541.4333333333333], [1.7123436E12, 538.6666666666666], [1.7123433E12, 529.9666666666667], [1.71234366E12, 540.65], [1.71234348E12, 527.5333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123439E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 152.7, "minX": 1.7123433E12, "maxY": 541.4333333333333, "series": [{"data": [[1.71234354E12, 532.4], [1.71234336E12, 514.3666666666667], [1.71234384E12, 539.5166666666667], [1.7123439E12, 152.7], [1.71234372E12, 532.9333333333333], [1.71234342E12, 510.65], [1.71234378E12, 541.4333333333333], [1.7123436E12, 538.6666666666666], [1.7123433E12, 529.3833333333333], [1.71234366E12, 540.65], [1.71234348E12, 527.5333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123439E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 152.7, "minX": 1.7123433E12, "maxY": 541.4333333333333, "series": [{"data": [[1.71234354E12, 532.4], [1.71234336E12, 514.3666666666667], [1.71234384E12, 539.5166666666667], [1.7123439E12, 152.7], [1.71234372E12, 532.9333333333333], [1.71234342E12, 510.65], [1.71234378E12, 541.4333333333333], [1.7123436E12, 538.6666666666666], [1.7123433E12, 529.3833333333333], [1.71234366E12, 540.65], [1.71234348E12, 527.5333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123439E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 152.7, "minX": 1.7123433E12, "maxY": 541.4333333333333, "series": [{"data": [[1.71234354E12, 532.4], [1.71234336E12, 514.3666666666667], [1.71234384E12, 539.5166666666667], [1.7123439E12, 152.7], [1.71234372E12, 532.9333333333333], [1.71234342E12, 510.65], [1.71234378E12, 541.4333333333333], [1.7123436E12, 538.6666666666666], [1.7123433E12, 529.3833333333333], [1.71234366E12, 540.65], [1.71234348E12, 527.5333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123439E12, "title": "Total Transactions Per Second"}},
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

