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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 478.0, "series": [{"data": [[0.0, 4.0], [0.1, 4.0], [0.2, 5.0], [0.3, 5.0], [0.4, 5.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 7.0], [1.6, 8.0], [1.7, 8.0], [1.8, 8.0], [1.9, 8.0], [2.0, 8.0], [2.1, 9.0], [2.2, 9.0], [2.3, 9.0], [2.4, 9.0], [2.5, 9.0], [2.6, 10.0], [2.7, 10.0], [2.8, 10.0], [2.9, 10.0], [3.0, 10.0], [3.1, 10.0], [3.2, 11.0], [3.3, 11.0], [3.4, 11.0], [3.5, 11.0], [3.6, 11.0], [3.7, 12.0], [3.8, 12.0], [3.9, 12.0], [4.0, 12.0], [4.1, 12.0], [4.2, 12.0], [4.3, 13.0], [4.4, 13.0], [4.5, 13.0], [4.6, 13.0], [4.7, 13.0], [4.8, 14.0], [4.9, 14.0], [5.0, 14.0], [5.1, 14.0], [5.2, 14.0], [5.3, 15.0], [5.4, 15.0], [5.5, 15.0], [5.6, 15.0], [5.7, 15.0], [5.8, 15.0], [5.9, 16.0], [6.0, 16.0], [6.1, 16.0], [6.2, 16.0], [6.3, 16.0], [6.4, 16.0], [6.5, 16.0], [6.6, 16.0], [6.7, 17.0], [6.8, 17.0], [6.9, 17.0], [7.0, 17.0], [7.1, 17.0], [7.2, 17.0], [7.3, 17.0], [7.4, 17.0], [7.5, 18.0], [7.6, 18.0], [7.7, 18.0], [7.8, 18.0], [7.9, 18.0], [8.0, 18.0], [8.1, 18.0], [8.2, 18.0], [8.3, 18.0], [8.4, 18.0], [8.5, 18.0], [8.6, 19.0], [8.7, 19.0], [8.8, 19.0], [8.9, 19.0], [9.0, 19.0], [9.1, 19.0], [9.2, 19.0], [9.3, 19.0], [9.4, 19.0], [9.5, 19.0], [9.6, 19.0], [9.7, 19.0], [9.8, 19.0], [9.9, 20.0], [10.0, 20.0], [10.1, 20.0], [10.2, 20.0], [10.3, 20.0], [10.4, 20.0], [10.5, 20.0], [10.6, 20.0], [10.7, 20.0], [10.8, 20.0], [10.9, 20.0], [11.0, 20.0], [11.1, 20.0], [11.2, 20.0], [11.3, 21.0], [11.4, 21.0], [11.5, 21.0], [11.6, 21.0], [11.7, 21.0], [11.8, 21.0], [11.9, 21.0], [12.0, 21.0], [12.1, 21.0], [12.2, 21.0], [12.3, 21.0], [12.4, 21.0], [12.5, 21.0], [12.6, 21.0], [12.7, 21.0], [12.8, 22.0], [12.9, 22.0], [13.0, 22.0], [13.1, 22.0], [13.2, 22.0], [13.3, 22.0], [13.4, 22.0], [13.5, 22.0], [13.6, 22.0], [13.7, 22.0], [13.8, 22.0], [13.9, 22.0], [14.0, 22.0], [14.1, 22.0], [14.2, 22.0], [14.3, 22.0], [14.4, 23.0], [14.5, 23.0], [14.6, 23.0], [14.7, 23.0], [14.8, 23.0], [14.9, 23.0], [15.0, 23.0], [15.1, 23.0], [15.2, 23.0], [15.3, 23.0], [15.4, 23.0], [15.5, 23.0], [15.6, 23.0], [15.7, 23.0], [15.8, 23.0], [15.9, 23.0], [16.0, 23.0], [16.1, 24.0], [16.2, 24.0], [16.3, 24.0], [16.4, 24.0], [16.5, 24.0], [16.6, 24.0], [16.7, 24.0], [16.8, 24.0], [16.9, 24.0], [17.0, 24.0], [17.1, 24.0], [17.2, 24.0], [17.3, 24.0], [17.4, 24.0], [17.5, 24.0], [17.6, 24.0], [17.7, 25.0], [17.8, 25.0], [17.9, 25.0], [18.0, 25.0], [18.1, 25.0], [18.2, 25.0], [18.3, 25.0], [18.4, 25.0], [18.5, 25.0], [18.6, 25.0], [18.7, 25.0], [18.8, 25.0], [18.9, 25.0], [19.0, 25.0], [19.1, 25.0], [19.2, 25.0], [19.3, 26.0], [19.4, 26.0], [19.5, 26.0], [19.6, 26.0], [19.7, 26.0], [19.8, 26.0], [19.9, 26.0], [20.0, 26.0], [20.1, 26.0], [20.2, 26.0], [20.3, 26.0], [20.4, 26.0], [20.5, 26.0], [20.6, 26.0], [20.7, 26.0], [20.8, 27.0], [20.9, 27.0], [21.0, 27.0], [21.1, 27.0], [21.2, 27.0], [21.3, 27.0], [21.4, 27.0], [21.5, 27.0], [21.6, 27.0], [21.7, 27.0], [21.8, 27.0], [21.9, 27.0], [22.0, 27.0], [22.1, 27.0], [22.2, 28.0], [22.3, 28.0], [22.4, 28.0], [22.5, 28.0], [22.6, 28.0], [22.7, 28.0], [22.8, 28.0], [22.9, 28.0], [23.0, 28.0], [23.1, 28.0], [23.2, 28.0], [23.3, 28.0], [23.4, 28.0], [23.5, 29.0], [23.6, 29.0], [23.7, 29.0], [23.8, 29.0], [23.9, 29.0], [24.0, 29.0], [24.1, 29.0], [24.2, 29.0], [24.3, 29.0], [24.4, 29.0], [24.5, 29.0], [24.6, 30.0], [24.7, 30.0], [24.8, 30.0], [24.9, 30.0], [25.0, 30.0], [25.1, 30.0], [25.2, 30.0], [25.3, 30.0], [25.4, 30.0], [25.5, 31.0], [25.6, 31.0], [25.7, 31.0], [25.8, 31.0], [25.9, 31.0], [26.0, 31.0], [26.1, 31.0], [26.2, 31.0], [26.3, 31.0], [26.4, 32.0], [26.5, 32.0], [26.6, 32.0], [26.7, 32.0], [26.8, 32.0], [26.9, 32.0], [27.0, 32.0], [27.1, 33.0], [27.2, 33.0], [27.3, 33.0], [27.4, 33.0], [27.5, 33.0], [27.6, 33.0], [27.7, 34.0], [27.8, 34.0], [27.9, 34.0], [28.0, 34.0], [28.1, 34.0], [28.2, 35.0], [28.3, 35.0], [28.4, 35.0], [28.5, 35.0], [28.6, 36.0], [28.7, 36.0], [28.8, 36.0], [28.9, 37.0], [29.0, 37.0], [29.1, 38.0], [29.2, 38.0], [29.3, 39.0], [29.4, 40.0], [29.5, 41.0], [29.6, 42.0], [29.7, 44.0], [29.8, 49.0], [29.9, 53.0], [30.0, 56.0], [30.1, 58.0], [30.2, 60.0], [30.3, 61.0], [30.4, 63.0], [30.5, 64.0], [30.6, 65.0], [30.7, 66.0], [30.8, 67.0], [30.9, 67.0], [31.0, 68.0], [31.1, 68.0], [31.2, 69.0], [31.3, 69.0], [31.4, 70.0], [31.5, 70.0], [31.6, 70.0], [31.7, 71.0], [31.8, 71.0], [31.9, 71.0], [32.0, 71.0], [32.1, 72.0], [32.2, 72.0], [32.3, 72.0], [32.4, 72.0], [32.5, 72.0], [32.6, 73.0], [32.7, 73.0], [32.8, 73.0], [32.9, 73.0], [33.0, 73.0], [33.1, 73.0], [33.2, 74.0], [33.3, 74.0], [33.4, 74.0], [33.5, 74.0], [33.6, 74.0], [33.7, 74.0], [33.8, 74.0], [33.9, 74.0], [34.0, 75.0], [34.1, 75.0], [34.2, 75.0], [34.3, 75.0], [34.4, 75.0], [34.5, 75.0], [34.6, 75.0], [34.7, 75.0], [34.8, 75.0], [34.9, 75.0], [35.0, 76.0], [35.1, 76.0], [35.2, 76.0], [35.3, 76.0], [35.4, 76.0], [35.5, 76.0], [35.6, 76.0], [35.7, 76.0], [35.8, 76.0], [35.9, 76.0], [36.0, 76.0], [36.1, 77.0], [36.2, 77.0], [36.3, 77.0], [36.4, 77.0], [36.5, 77.0], [36.6, 77.0], [36.7, 77.0], [36.8, 77.0], [36.9, 77.0], [37.0, 77.0], [37.1, 77.0], [37.2, 77.0], [37.3, 77.0], [37.4, 78.0], [37.5, 78.0], [37.6, 78.0], [37.7, 78.0], [37.8, 78.0], [37.9, 78.0], [38.0, 78.0], [38.1, 78.0], [38.2, 78.0], [38.3, 78.0], [38.4, 78.0], [38.5, 78.0], [38.6, 78.0], [38.7, 78.0], [38.8, 79.0], [38.9, 79.0], [39.0, 79.0], [39.1, 79.0], [39.2, 79.0], [39.3, 79.0], [39.4, 79.0], [39.5, 79.0], [39.6, 79.0], [39.7, 79.0], [39.8, 79.0], [39.9, 79.0], [40.0, 79.0], [40.1, 79.0], [40.2, 79.0], [40.3, 80.0], [40.4, 80.0], [40.5, 80.0], [40.6, 80.0], [40.7, 80.0], [40.8, 80.0], [40.9, 80.0], [41.0, 80.0], [41.1, 80.0], [41.2, 80.0], [41.3, 80.0], [41.4, 80.0], [41.5, 80.0], [41.6, 80.0], [41.7, 80.0], [41.8, 80.0], [41.9, 80.0], [42.0, 80.0], [42.1, 81.0], [42.2, 81.0], [42.3, 81.0], [42.4, 81.0], [42.5, 81.0], [42.6, 81.0], [42.7, 81.0], [42.8, 81.0], [42.9, 81.0], [43.0, 81.0], [43.1, 81.0], [43.2, 81.0], [43.3, 81.0], [43.4, 81.0], [43.5, 81.0], [43.6, 81.0], [43.7, 81.0], [43.8, 81.0], [43.9, 82.0], [44.0, 82.0], [44.1, 82.0], [44.2, 82.0], [44.3, 82.0], [44.4, 82.0], [44.5, 82.0], [44.6, 82.0], [44.7, 82.0], [44.8, 82.0], [44.9, 82.0], [45.0, 82.0], [45.1, 82.0], [45.2, 82.0], [45.3, 82.0], [45.4, 82.0], [45.5, 82.0], [45.6, 82.0], [45.7, 83.0], [45.8, 83.0], [45.9, 83.0], [46.0, 83.0], [46.1, 83.0], [46.2, 83.0], [46.3, 83.0], [46.4, 83.0], [46.5, 83.0], [46.6, 83.0], [46.7, 83.0], [46.8, 83.0], [46.9, 83.0], [47.0, 83.0], [47.1, 83.0], [47.2, 83.0], [47.3, 83.0], [47.4, 83.0], [47.5, 83.0], [47.6, 83.0], [47.7, 84.0], [47.8, 84.0], [47.9, 84.0], [48.0, 84.0], [48.1, 84.0], [48.2, 84.0], [48.3, 84.0], [48.4, 84.0], [48.5, 84.0], [48.6, 84.0], [48.7, 84.0], [48.8, 84.0], [48.9, 84.0], [49.0, 84.0], [49.1, 84.0], [49.2, 84.0], [49.3, 84.0], [49.4, 84.0], [49.5, 85.0], [49.6, 85.0], [49.7, 85.0], [49.8, 85.0], [49.9, 85.0], [50.0, 85.0], [50.1, 85.0], [50.2, 85.0], [50.3, 85.0], [50.4, 85.0], [50.5, 85.0], [50.6, 85.0], [50.7, 85.0], [50.8, 85.0], [50.9, 85.0], [51.0, 85.0], [51.1, 85.0], [51.2, 85.0], [51.3, 85.0], [51.4, 86.0], [51.5, 86.0], [51.6, 86.0], [51.7, 86.0], [51.8, 86.0], [51.9, 86.0], [52.0, 86.0], [52.1, 86.0], [52.2, 86.0], [52.3, 86.0], [52.4, 86.0], [52.5, 86.0], [52.6, 86.0], [52.7, 86.0], [52.8, 86.0], [52.9, 86.0], [53.0, 86.0], [53.1, 86.0], [53.2, 87.0], [53.3, 87.0], [53.4, 87.0], [53.5, 87.0], [53.6, 87.0], [53.7, 87.0], [53.8, 87.0], [53.9, 87.0], [54.0, 87.0], [54.1, 87.0], [54.2, 87.0], [54.3, 87.0], [54.4, 87.0], [54.5, 87.0], [54.6, 87.0], [54.7, 87.0], [54.8, 87.0], [54.9, 88.0], [55.0, 88.0], [55.1, 88.0], [55.2, 88.0], [55.3, 88.0], [55.4, 88.0], [55.5, 88.0], [55.6, 88.0], [55.7, 88.0], [55.8, 88.0], [55.9, 88.0], [56.0, 88.0], [56.1, 88.0], [56.2, 88.0], [56.3, 88.0], [56.4, 88.0], [56.5, 88.0], [56.6, 89.0], [56.7, 89.0], [56.8, 89.0], [56.9, 89.0], [57.0, 89.0], [57.1, 89.0], [57.2, 89.0], [57.3, 89.0], [57.4, 89.0], [57.5, 89.0], [57.6, 89.0], [57.7, 89.0], [57.8, 89.0], [57.9, 89.0], [58.0, 89.0], [58.1, 90.0], [58.2, 90.0], [58.3, 90.0], [58.4, 90.0], [58.5, 90.0], [58.6, 90.0], [58.7, 90.0], [58.8, 90.0], [58.9, 90.0], [59.0, 90.0], [59.1, 90.0], [59.2, 90.0], [59.3, 90.0], [59.4, 90.0], [59.5, 90.0], [59.6, 91.0], [59.7, 91.0], [59.8, 91.0], [59.9, 91.0], [60.0, 91.0], [60.1, 91.0], [60.2, 91.0], [60.3, 91.0], [60.4, 91.0], [60.5, 91.0], [60.6, 91.0], [60.7, 91.0], [60.8, 91.0], [60.9, 92.0], [61.0, 92.0], [61.1, 92.0], [61.2, 92.0], [61.3, 92.0], [61.4, 92.0], [61.5, 92.0], [61.6, 92.0], [61.7, 92.0], [61.8, 92.0], [61.9, 92.0], [62.0, 92.0], [62.1, 92.0], [62.2, 92.0], [62.3, 93.0], [62.4, 93.0], [62.5, 93.0], [62.6, 93.0], [62.7, 93.0], [62.8, 93.0], [62.9, 93.0], [63.0, 93.0], [63.1, 93.0], [63.2, 93.0], [63.3, 93.0], [63.4, 93.0], [63.5, 94.0], [63.6, 94.0], [63.7, 94.0], [63.8, 94.0], [63.9, 94.0], [64.0, 94.0], [64.1, 94.0], [64.2, 94.0], [64.3, 94.0], [64.4, 94.0], [64.5, 94.0], [64.6, 95.0], [64.7, 95.0], [64.8, 95.0], [64.9, 95.0], [65.0, 95.0], [65.1, 95.0], [65.2, 95.0], [65.3, 95.0], [65.4, 95.0], [65.5, 95.0], [65.6, 96.0], [65.7, 96.0], [65.8, 96.0], [65.9, 96.0], [66.0, 96.0], [66.1, 96.0], [66.2, 96.0], [66.3, 96.0], [66.4, 96.0], [66.5, 96.0], [66.6, 96.0], [66.7, 97.0], [66.8, 97.0], [66.9, 97.0], [67.0, 97.0], [67.1, 97.0], [67.2, 97.0], [67.3, 97.0], [67.4, 97.0], [67.5, 97.0], [67.6, 97.0], [67.7, 98.0], [67.8, 98.0], [67.9, 98.0], [68.0, 98.0], [68.1, 98.0], [68.2, 98.0], [68.3, 98.0], [68.4, 98.0], [68.5, 98.0], [68.6, 98.0], [68.7, 99.0], [68.8, 99.0], [68.9, 99.0], [69.0, 99.0], [69.1, 99.0], [69.2, 99.0], [69.3, 99.0], [69.4, 99.0], [69.5, 99.0], [69.6, 99.0], [69.7, 100.0], [69.8, 100.0], [69.9, 100.0], [70.0, 100.0], [70.1, 100.0], [70.2, 100.0], [70.3, 100.0], [70.4, 100.0], [70.5, 100.0], [70.6, 100.0], [70.7, 101.0], [70.8, 101.0], [70.9, 101.0], [71.0, 101.0], [71.1, 101.0], [71.2, 101.0], [71.3, 101.0], [71.4, 101.0], [71.5, 101.0], [71.6, 102.0], [71.7, 102.0], [71.8, 102.0], [71.9, 102.0], [72.0, 102.0], [72.1, 102.0], [72.2, 102.0], [72.3, 102.0], [72.4, 102.0], [72.5, 103.0], [72.6, 103.0], [72.7, 103.0], [72.8, 103.0], [72.9, 103.0], [73.0, 103.0], [73.1, 103.0], [73.2, 103.0], [73.3, 104.0], [73.4, 104.0], [73.5, 104.0], [73.6, 104.0], [73.7, 104.0], [73.8, 104.0], [73.9, 104.0], [74.0, 104.0], [74.1, 105.0], [74.2, 105.0], [74.3, 105.0], [74.4, 105.0], [74.5, 105.0], [74.6, 105.0], [74.7, 105.0], [74.8, 106.0], [74.9, 106.0], [75.0, 106.0], [75.1, 106.0], [75.2, 106.0], [75.3, 106.0], [75.4, 107.0], [75.5, 107.0], [75.6, 107.0], [75.7, 107.0], [75.8, 107.0], [75.9, 108.0], [76.0, 108.0], [76.1, 108.0], [76.2, 108.0], [76.3, 108.0], [76.4, 108.0], [76.5, 109.0], [76.6, 109.0], [76.7, 109.0], [76.8, 109.0], [76.9, 110.0], [77.0, 110.0], [77.1, 110.0], [77.2, 110.0], [77.3, 111.0], [77.4, 111.0], [77.5, 111.0], [77.6, 111.0], [77.7, 112.0], [77.8, 112.0], [77.9, 112.0], [78.0, 112.0], [78.1, 113.0], [78.2, 113.0], [78.3, 113.0], [78.4, 114.0], [78.5, 114.0], [78.6, 114.0], [78.7, 115.0], [78.8, 115.0], [78.9, 115.0], [79.0, 116.0], [79.1, 116.0], [79.2, 116.0], [79.3, 117.0], [79.4, 117.0], [79.5, 117.0], [79.6, 118.0], [79.7, 118.0], [79.8, 119.0], [79.9, 119.0], [80.0, 120.0], [80.1, 120.0], [80.2, 121.0], [80.3, 121.0], [80.4, 122.0], [80.5, 123.0], [80.6, 124.0], [80.7, 124.0], [80.8, 125.0], [80.9, 126.0], [81.0, 128.0], [81.1, 129.0], [81.2, 132.0], [81.3, 139.0], [81.4, 159.0], [81.5, 162.0], [81.6, 164.0], [81.7, 166.0], [81.8, 168.0], [81.9, 169.0], [82.0, 170.0], [82.1, 171.0], [82.2, 172.0], [82.3, 173.0], [82.4, 174.0], [82.5, 174.0], [82.6, 175.0], [82.7, 175.0], [82.8, 176.0], [82.9, 176.0], [83.0, 177.0], [83.1, 177.0], [83.2, 178.0], [83.3, 178.0], [83.4, 178.0], [83.5, 179.0], [83.6, 179.0], [83.7, 180.0], [83.8, 180.0], [83.9, 181.0], [84.0, 181.0], [84.1, 181.0], [84.2, 182.0], [84.3, 182.0], [84.4, 182.0], [84.5, 183.0], [84.6, 183.0], [84.7, 184.0], [84.8, 184.0], [84.9, 184.0], [85.0, 185.0], [85.1, 185.0], [85.2, 185.0], [85.3, 186.0], [85.4, 186.0], [85.5, 186.0], [85.6, 186.0], [85.7, 187.0], [85.8, 187.0], [85.9, 187.0], [86.0, 188.0], [86.1, 188.0], [86.2, 188.0], [86.3, 189.0], [86.4, 189.0], [86.5, 189.0], [86.6, 189.0], [86.7, 190.0], [86.8, 190.0], [86.9, 190.0], [87.0, 190.0], [87.1, 191.0], [87.2, 191.0], [87.3, 191.0], [87.4, 191.0], [87.5, 191.0], [87.6, 192.0], [87.7, 192.0], [87.8, 192.0], [87.9, 192.0], [88.0, 193.0], [88.1, 193.0], [88.2, 193.0], [88.3, 193.0], [88.4, 193.0], [88.5, 193.0], [88.6, 194.0], [88.7, 194.0], [88.8, 194.0], [88.9, 194.0], [89.0, 194.0], [89.1, 194.0], [89.2, 195.0], [89.3, 195.0], [89.4, 195.0], [89.5, 195.0], [89.6, 195.0], [89.7, 195.0], [89.8, 196.0], [89.9, 196.0], [90.0, 196.0], [90.1, 196.0], [90.2, 196.0], [90.3, 196.0], [90.4, 197.0], [90.5, 197.0], [90.6, 197.0], [90.7, 197.0], [90.8, 197.0], [90.9, 197.0], [91.0, 197.0], [91.1, 198.0], [91.2, 198.0], [91.3, 198.0], [91.4, 198.0], [91.5, 198.0], [91.6, 198.0], [91.7, 198.0], [91.8, 199.0], [91.9, 199.0], [92.0, 199.0], [92.1, 199.0], [92.2, 199.0], [92.3, 199.0], [92.4, 199.0], [92.5, 199.0], [92.6, 200.0], [92.7, 200.0], [92.8, 200.0], [92.9, 200.0], [93.0, 200.0], [93.1, 200.0], [93.2, 200.0], [93.3, 201.0], [93.4, 201.0], [93.5, 201.0], [93.6, 201.0], [93.7, 201.0], [93.8, 201.0], [93.9, 202.0], [94.0, 202.0], [94.1, 202.0], [94.2, 202.0], [94.3, 202.0], [94.4, 202.0], [94.5, 203.0], [94.6, 203.0], [94.7, 203.0], [94.8, 203.0], [94.9, 203.0], [95.0, 204.0], [95.1, 204.0], [95.2, 204.0], [95.3, 204.0], [95.4, 205.0], [95.5, 205.0], [95.6, 205.0], [95.7, 205.0], [95.8, 206.0], [95.9, 206.0], [96.0, 206.0], [96.1, 207.0], [96.2, 207.0], [96.3, 207.0], [96.4, 208.0], [96.5, 208.0], [96.6, 209.0], [96.7, 209.0], [96.8, 210.0], [96.9, 210.0], [97.0, 211.0], [97.1, 212.0], [97.2, 212.0], [97.3, 213.0], [97.4, 214.0], [97.5, 215.0], [97.6, 216.0], [97.7, 218.0], [97.8, 219.0], [97.9, 222.0], [98.0, 225.0], [98.1, 260.0], [98.2, 268.0], [98.3, 272.0], [98.4, 275.0], [98.5, 278.0], [98.6, 280.0], [98.7, 283.0], [98.8, 285.0], [98.9, 288.0], [99.0, 289.0], [99.1, 291.0], [99.2, 293.0], [99.3, 295.0], [99.4, 297.0], [99.5, 299.0], [99.6, 301.0], [99.7, 303.0], [99.8, 307.0], [99.9, 316.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 217914.0, "series": [{"data": [[0.0, 217914.0], [300.0, 1469.0], [100.0, 71684.0], [200.0, 21833.0], [400.0, 32.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 312932.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 312932.0, "series": [{"data": [[0.0, 312932.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 17.46412243316534, "minX": 1.71235062E12, "maxY": 50.0, "series": [{"data": [[1.7123508E12, 50.0], [1.71235098E12, 50.0], [1.71235068E12, 47.560203885362284], [1.71235116E12, 50.0], [1.71235086E12, 50.0], [1.71235104E12, 50.0], [1.71235074E12, 50.0], [1.71235122E12, 49.90214067278286], [1.71235092E12, 50.0], [1.71235062E12, 17.46412243316534], [1.7123511E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235122E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4.754464285714284, "minX": 1.0, "maxY": 165.89552238805956, "series": [{"data": [[2.0, 4.831249999999999], [3.0, 5.667736757624395], [4.0, 5.991128010139416], [5.0, 6.329764453961453], [6.0, 9.359580052493452], [7.0, 9.544202066590136], [8.0, 12.485602094240832], [9.0, 11.783516483516493], [10.0, 17.951367781155003], [11.0, 14.24891774891776], [12.0, 15.3340471092077], [13.0, 16.22175732217575], [14.0, 17.627783669141046], [15.0, 24.69917582417584], [16.0, 23.54858548585485], [17.0, 20.98547717842325], [18.0, 22.536125654450274], [19.0, 24.417204301075277], [20.0, 24.979144942648578], [21.0, 25.74948665297741], [22.0, 44.27058823529415], [23.0, 64.93396226415094], [24.0, 37.46460746460746], [25.0, 48.697520661157036], [26.0, 71.81481481481481], [27.0, 43.03717948717946], [28.0, 37.513781697905145], [29.0, 61.077617328519864], [30.0, 64.86291739894548], [31.0, 37.53238866396757], [32.0, 52.793103448275865], [33.0, 109.57851239669424], [34.0, 45.81897491821159], [35.0, 71.19270833333337], [36.0, 108.38832487309644], [37.0, 70.99379844961234], [38.0, 45.44120603015072], [39.0, 68.7195685670262], [40.0, 113.58233890214797], [41.0, 86.81561461794026], [42.0, 60.26014319809072], [43.0, 82.69921259842515], [44.0, 76.69296987087523], [45.0, 54.85465711361309], [46.0, 113.20289855072464], [47.0, 165.89552238805956], [48.0, 61.84342379958247], [49.0, 76.10209790209792], [50.0, 97.55806974068066], [1.0, 4.754464285714284]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[47.070437027852904, 91.12322804954171]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 17854.2, "minX": 1.71235062E12, "maxY": 203151.45, "series": [{"data": [[1.7123508E12, 202724.51666666666], [1.71235098E12, 197301.8], [1.71235068E12, 201327.36666666667], [1.71235116E12, 198005.98333333334], [1.71235086E12, 194713.83333333334], [1.71235104E12, 196967.55], [1.71235074E12, 203151.45], [1.71235122E12, 59105.416666666664], [1.71235092E12, 199946.9], [1.71235062E12, 166248.1], [1.7123511E12, 200018.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7123508E12, 61245.6], [1.71235098E12, 59605.65], [1.71235068E12, 60828.3], [1.71235116E12, 59820.15], [1.71235086E12, 58821.75], [1.71235104E12, 59504.25], [1.71235074E12, 61374.3], [1.71235122E12, 17854.2], [1.71235092E12, 60405.15], [1.71235062E12, 50329.5], [1.7123511E12, 60428.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235122E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 27.66032545524986, "minX": 1.71235062E12, "maxY": 104.90377894276975, "series": [{"data": [[1.7123508E12, 95.49866276108018], [1.71235098E12, 98.1266071253316], [1.71235068E12, 91.43758415079796], [1.71235116E12, 97.79792678553942], [1.71235086E12, 99.2895077076075], [1.71235104E12, 98.16293626085529], [1.71235074E12, 95.3054584736601], [1.71235122E12, 104.90377894276975], [1.71235092E12, 96.84007489427667], [1.71235062E12, 27.66032545524986], [1.7123511E12, 96.79834780083193]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235122E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 27.654862456412356, "minX": 1.71235062E12, "maxY": 104.9000655307992, "series": [{"data": [[1.7123508E12, 95.49608380030597], [1.71235098E12, 98.12369548859884], [1.71235068E12, 91.43402577418772], [1.71235116E12, 97.79528637089695], [1.71235086E12, 99.28672302337151], [1.71235104E12, 98.1605767655245], [1.71235074E12, 95.30272605960441], [1.71235122E12, 104.9000655307992], [1.71235092E12, 96.83684669270707], [1.71235062E12, 27.654862456412356], [1.7123511E12, 96.79505631030366]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235122E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4.7758532857871067E-4, "minX": 1.71235062E12, "maxY": 0.0010921799912625655, "series": [{"data": [[1.7123508E12, 4.7758532857871067E-4], [1.71235098E12, 8.178754866359183E-4], [1.71235068E12, 7.373212797332838E-4], [1.71235116E12, 5.867588095315702E-4], [1.71235086E12, 6.298690535388703E-4], [1.71235104E12, 6.881861379649392E-4], [1.71235074E12, 5.719006163817765E-4], [1.71235122E12, 0.0010921799912625655], [1.71235092E12, 7.747683765374314E-4], [1.71235062E12, 0.0010848508330104718], [1.7123511E12, 5.485817548162255E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235122E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.71235062E12, "maxY": 478.0, "series": [{"data": [[1.7123508E12, 394.0], [1.71235098E12, 478.0], [1.71235068E12, 402.0], [1.71235116E12, 389.0], [1.71235086E12, 399.0], [1.71235104E12, 413.0], [1.71235074E12, 405.0], [1.71235122E12, 406.0], [1.71235092E12, 404.0], [1.71235062E12, 212.0], [1.7123511E12, 414.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7123508E12, 5.0], [1.71235098E12, 8.0], [1.71235068E12, 8.0], [1.71235116E12, 9.0], [1.71235086E12, 8.0], [1.71235104E12, 9.0], [1.71235074E12, 9.0], [1.71235122E12, 11.0], [1.71235092E12, 9.0], [1.71235062E12, 4.0], [1.7123511E12, 9.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7123508E12, 196.0], [1.71235098E12, 200.0], [1.71235068E12, 195.0], [1.71235116E12, 199.0], [1.71235086E12, 197.0], [1.71235104E12, 200.0], [1.71235074E12, 196.0], [1.71235122E12, 200.0], [1.71235092E12, 199.0], [1.71235062E12, 83.0], [1.7123511E12, 199.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7123508E12, 289.0], [1.71235098E12, 296.0], [1.71235068E12, 290.0], [1.71235116E12, 296.0], [1.71235086E12, 289.0], [1.71235104E12, 294.0], [1.71235074E12, 284.0], [1.71235122E12, 300.0], [1.71235092E12, 291.0], [1.71235062E12, 118.9900000000016], [1.7123511E12, 293.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7123508E12, 87.0], [1.71235098E12, 88.0], [1.71235068E12, 87.0], [1.71235116E12, 87.0], [1.71235086E12, 88.0], [1.71235104E12, 91.0], [1.71235074E12, 87.0], [1.71235122E12, 90.0], [1.71235092E12, 88.0], [1.71235062E12, 15.0], [1.7123511E12, 89.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7123508E12, 204.0], [1.71235098E12, 212.0], [1.71235068E12, 204.0], [1.71235116E12, 207.0], [1.71235086E12, 205.0], [1.71235104E12, 207.0], [1.71235074E12, 205.0], [1.71235122E12, 210.0], [1.71235092E12, 208.0], [1.71235062E12, 96.0], [1.7123511E12, 205.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235122E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5.0, "minX": 82.0, "maxY": 202.5, "series": [{"data": [[82.0, 197.0], [156.0, 5.0], [232.0, 202.5], [244.0, 196.5], [270.0, 196.0], [264.0, 198.0], [257.0, 194.5], [265.0, 195.0], [269.0, 185.0], [258.0, 195.0], [259.0, 194.0], [263.0, 196.0], [256.0, 201.5], [262.0, 197.0], [267.0, 195.0], [271.0, 195.0], [286.0, 187.0], [276.0, 193.0], [287.0, 188.0], [277.0, 191.0], [282.0, 195.0], [283.0, 195.0], [272.0, 195.0], [284.0, 193.0], [285.0, 196.0], [275.0, 197.0], [273.0, 196.0], [281.0, 194.0], [280.0, 197.0], [279.0, 198.0], [302.0, 153.0], [299.0, 193.0], [292.0, 174.0], [293.0, 189.0], [290.0, 190.5], [295.0, 188.0], [288.0, 189.0], [289.0, 192.0], [294.0, 183.0], [296.0, 187.0], [303.0, 196.0], [297.0, 189.0], [300.0, 181.0], [291.0, 193.0], [298.0, 182.0], [304.0, 190.0], [318.0, 119.0], [315.0, 118.0], [313.0, 185.0], [314.0, 173.5], [308.0, 173.5], [311.0, 182.0], [310.0, 192.0], [309.0, 190.0], [306.0, 185.0], [316.0, 183.0], [307.0, 171.0], [305.0, 189.0], [319.0, 180.0], [312.0, 182.0], [332.0, 117.0], [326.0, 5.0], [325.0, 180.0], [333.0, 111.0], [334.0, 185.0], [328.0, 122.0], [329.0, 123.0], [331.0, 178.0], [330.0, 191.0], [327.0, 171.0], [321.0, 184.0], [322.0, 174.0], [320.0, 181.0], [348.0, 105.5], [342.0, 118.0], [349.0, 114.0], [341.0, 159.0], [345.0, 177.0], [350.0, 171.5], [351.0, 179.0], [344.0, 184.5], [346.0, 171.5], [339.0, 176.0], [337.0, 174.0], [343.0, 117.0], [336.0, 179.0], [366.0, 93.0], [355.0, 100.0], [365.0, 118.5], [360.0, 176.0], [361.0, 114.0], [367.0, 125.0], [362.0, 107.0], [356.0, 166.5], [352.0, 120.0], [357.0, 108.0], [369.0, 96.0], [377.0, 103.0], [373.0, 108.0], [378.0, 174.0], [375.0, 113.0], [372.0, 101.0], [388.0, 118.5], [384.0, 102.5], [385.0, 103.0], [386.0, 98.0], [392.0, 98.5], [400.0, 113.0], [402.0, 98.5], [409.0, 103.0], [403.0, 109.0], [411.0, 103.0], [412.0, 105.0], [429.0, 96.0], [427.0, 99.0], [423.0, 106.0], [428.0, 99.0], [419.0, 96.0], [430.0, 95.0], [445.0, 88.0], [433.0, 89.0], [432.0, 103.0], [435.0, 107.0], [436.0, 100.0], [437.0, 105.0], [438.0, 101.0], [450.0, 96.0], [451.0, 87.0], [452.0, 99.5], [461.0, 96.0], [460.0, 104.0], [462.0, 88.0], [457.0, 97.0], [477.0, 11.5], [470.0, 80.0], [474.0, 92.0], [464.0, 98.5], [465.0, 93.0], [479.0, 96.0], [493.0, 84.0], [490.0, 93.0], [487.0, 84.0], [492.0, 81.5], [485.0, 94.0], [480.0, 91.0], [486.0, 89.0], [491.0, 86.0], [507.0, 94.0], [496.0, 87.0], [510.0, 88.0], [499.0, 93.0], [504.0, 86.0], [511.0, 96.0], [508.0, 88.0], [516.0, 90.0], [536.0, 30.0], [532.0, 79.0], [534.0, 94.0], [535.0, 89.0], [523.0, 94.0], [521.0, 83.0], [514.0, 91.0], [515.0, 97.0], [519.0, 86.0], [517.0, 84.0], [543.0, 83.0], [528.0, 97.0], [527.0, 97.0], [524.0, 87.0], [575.0, 83.0], [550.0, 6.0], [566.0, 8.0], [567.0, 84.0], [571.0, 87.0], [551.0, 86.0], [572.0, 83.0], [548.0, 84.0], [546.0, 90.5], [545.0, 87.0], [559.0, 95.0], [558.0, 82.0], [554.0, 84.0], [556.0, 91.0], [553.0, 94.0], [552.0, 85.0], [565.0, 85.0], [564.0, 85.0], [560.0, 90.0], [600.0, 87.0], [586.0, 13.0], [576.0, 83.0], [577.0, 83.0], [582.0, 89.0], [580.0, 88.0], [592.0, 82.0], [584.0, 83.0], [607.0, 83.0], [598.0, 90.0], [597.0, 82.0], [604.0, 87.0], [634.0, 19.0], [615.0, 85.0], [625.0, 85.0], [619.0, 84.0], [636.0, 81.0], [637.0, 82.0], [628.0, 85.0], [617.0, 83.0], [623.0, 84.0], [626.0, 81.0], [627.0, 83.0], [645.0, 7.0], [668.0, 31.0], [651.0, 31.0], [641.0, 82.0], [643.0, 81.0], [653.0, 79.0], [652.0, 80.0], [640.0, 82.0], [670.0, 82.0], [671.0, 80.0], [649.0, 82.0], [648.0, 86.0], [646.0, 83.0], [667.0, 83.0], [656.0, 82.0], [660.0, 81.0], [662.0, 82.0], [698.0, 80.0], [686.0, 80.0], [682.0, 81.0], [685.0, 80.0], [684.0, 82.0], [680.0, 85.0], [692.0, 78.0], [697.0, 80.0], [676.0, 83.0], [677.0, 81.0], [695.0, 81.0], [691.0, 79.0], [699.0, 79.0], [702.0, 79.0], [703.0, 79.0], [681.0, 80.0], [730.0, 7.0], [734.0, 23.0], [704.0, 74.0], [732.0, 80.0], [731.0, 78.0], [726.0, 80.0], [717.0, 83.0], [719.0, 79.0], [710.0, 79.0], [711.0, 81.0], [707.0, 77.0], [708.0, 81.0], [716.0, 83.0], [715.0, 79.0], [722.0, 80.0], [735.0, 81.0], [725.0, 81.0], [760.0, 9.0], [752.0, 30.0], [746.0, 9.0], [750.0, 21.0], [757.0, 20.0], [759.0, 79.0], [754.0, 77.0], [753.0, 81.0], [742.0, 77.0], [740.0, 81.0], [748.0, 81.0], [747.0, 78.0], [764.0, 80.0], [775.0, 52.0], [783.0, 13.0], [780.0, 27.0], [778.0, 76.0], [779.0, 79.0], [782.0, 79.0], [781.0, 80.0], [777.0, 28.0], [776.0, 78.0], [789.0, 27.0], [774.0, 30.0], [769.0, 80.0], [768.0, 79.0], [791.0, 78.0], [792.0, 78.0], [794.0, 78.0], [788.0, 78.0], [786.0, 80.0], [799.0, 78.0], [797.0, 77.0], [785.0, 81.0], [796.0, 78.0], [802.0, 67.0], [811.0, 25.0], [808.0, 10.0], [804.0, 25.0], [805.0, 77.0], [807.0, 79.0], [806.0, 79.0], [810.0, 61.0], [814.0, 76.0], [813.0, 79.0], [801.0, 78.0], [818.0, 78.0], [831.0, 76.0], [816.0, 78.0], [825.0, 77.0], [827.0, 78.0], [828.0, 77.0], [823.0, 77.0], [821.0, 75.0], [819.0, 79.0], [824.0, 76.5], [859.0, 74.0], [836.0, 78.0], [833.0, 20.0], [852.0, 36.5], [851.0, 76.0], [862.0, 75.0], [861.0, 75.0], [834.0, 75.0], [839.0, 73.0], [845.0, 76.0], [847.0, 75.0], [832.0, 78.0], [841.0, 76.0], [844.0, 76.0], [854.0, 73.0], [853.0, 78.0], [838.0, 77.0], [837.0, 76.0], [864.0, 24.0], [890.0, 72.0], [883.0, 73.0], [870.0, 75.0], [894.0, 73.0], [874.0, 75.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 894.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5.0, "minX": 82.0, "maxY": 202.5, "series": [{"data": [[82.0, 197.0], [156.0, 5.0], [232.0, 202.5], [244.0, 196.5], [270.0, 196.0], [264.0, 198.0], [257.0, 194.5], [265.0, 195.0], [269.0, 185.0], [258.0, 195.0], [259.0, 194.0], [263.0, 196.0], [256.0, 201.5], [262.0, 197.0], [267.0, 195.0], [271.0, 195.0], [286.0, 187.0], [276.0, 193.0], [287.0, 188.0], [277.0, 191.0], [282.0, 195.0], [283.0, 195.0], [272.0, 195.0], [284.0, 193.0], [285.0, 196.0], [275.0, 197.0], [273.0, 196.0], [281.0, 194.0], [280.0, 197.0], [279.0, 198.0], [302.0, 153.0], [299.0, 193.0], [292.0, 174.0], [293.0, 189.0], [290.0, 190.5], [295.0, 188.0], [288.0, 189.0], [289.0, 192.0], [294.0, 183.0], [296.0, 187.0], [303.0, 196.0], [297.0, 189.0], [300.0, 181.0], [291.0, 193.0], [298.0, 182.0], [304.0, 190.0], [318.0, 119.0], [315.0, 118.0], [313.0, 185.0], [314.0, 173.5], [308.0, 173.5], [311.0, 182.0], [310.0, 192.0], [309.0, 190.0], [306.0, 185.0], [316.0, 183.0], [307.0, 171.0], [305.0, 189.0], [319.0, 180.0], [312.0, 182.0], [332.0, 117.0], [326.0, 5.0], [325.0, 180.0], [333.0, 111.0], [334.0, 185.0], [328.0, 122.0], [329.0, 123.0], [331.0, 178.0], [330.0, 191.0], [327.0, 171.0], [321.0, 184.0], [322.0, 174.0], [320.0, 181.0], [348.0, 105.5], [342.0, 118.0], [349.0, 114.0], [341.0, 159.0], [345.0, 177.0], [350.0, 171.5], [351.0, 179.0], [344.0, 184.5], [346.0, 171.5], [339.0, 176.0], [337.0, 174.0], [343.0, 117.0], [336.0, 179.0], [366.0, 93.0], [355.0, 100.0], [365.0, 118.5], [360.0, 176.0], [361.0, 114.0], [367.0, 125.0], [362.0, 107.0], [356.0, 166.5], [352.0, 120.0], [357.0, 108.0], [369.0, 96.0], [377.0, 103.0], [373.0, 108.0], [378.0, 174.0], [375.0, 113.0], [372.0, 101.0], [388.0, 118.5], [384.0, 102.5], [385.0, 103.0], [386.0, 98.0], [392.0, 98.5], [400.0, 113.0], [402.0, 98.5], [409.0, 103.0], [403.0, 109.0], [411.0, 103.0], [412.0, 105.0], [429.0, 96.0], [427.0, 99.0], [423.0, 106.0], [428.0, 99.0], [419.0, 96.0], [430.0, 95.0], [445.0, 88.0], [433.0, 89.0], [432.0, 103.0], [435.0, 107.0], [436.0, 100.0], [437.0, 105.0], [438.0, 101.0], [450.0, 96.0], [451.0, 87.0], [452.0, 99.5], [461.0, 96.0], [460.0, 104.0], [462.0, 88.0], [457.0, 97.0], [477.0, 11.5], [470.0, 80.0], [474.0, 92.0], [464.0, 98.5], [465.0, 93.0], [479.0, 96.0], [493.0, 84.0], [490.0, 93.0], [487.0, 84.0], [492.0, 81.5], [485.0, 94.0], [480.0, 91.0], [486.0, 89.0], [491.0, 86.0], [507.0, 94.0], [496.0, 87.0], [510.0, 88.0], [499.0, 93.0], [504.0, 86.0], [511.0, 96.0], [508.0, 88.0], [516.0, 90.0], [536.0, 30.0], [532.0, 79.0], [534.0, 94.0], [535.0, 89.0], [523.0, 94.0], [521.0, 83.0], [514.0, 91.0], [515.0, 97.0], [519.0, 86.0], [517.0, 84.0], [543.0, 83.0], [528.0, 97.0], [527.0, 97.0], [524.0, 87.0], [575.0, 83.0], [550.0, 6.0], [566.0, 8.0], [567.0, 84.0], [571.0, 87.0], [551.0, 86.0], [572.0, 83.0], [548.0, 84.0], [546.0, 90.5], [545.0, 87.0], [559.0, 95.0], [558.0, 82.0], [554.0, 84.0], [556.0, 91.0], [553.0, 94.0], [552.0, 85.0], [565.0, 85.0], [564.0, 85.0], [560.0, 90.0], [600.0, 87.0], [586.0, 13.0], [576.0, 83.0], [577.0, 83.0], [582.0, 89.0], [580.0, 88.0], [592.0, 82.0], [584.0, 83.0], [607.0, 83.0], [598.0, 90.0], [597.0, 82.0], [604.0, 87.0], [634.0, 19.0], [615.0, 85.0], [625.0, 85.0], [619.0, 84.0], [636.0, 81.0], [637.0, 82.0], [628.0, 85.0], [617.0, 83.0], [623.0, 84.0], [626.0, 81.0], [627.0, 83.0], [645.0, 7.0], [668.0, 31.0], [651.0, 31.0], [641.0, 82.0], [643.0, 81.0], [653.0, 79.0], [652.0, 80.0], [640.0, 82.0], [670.0, 82.0], [671.0, 80.0], [649.0, 82.0], [648.0, 86.0], [646.0, 83.0], [667.0, 83.0], [656.0, 82.0], [660.0, 81.0], [662.0, 82.0], [698.0, 80.0], [686.0, 80.0], [682.0, 81.0], [685.0, 80.0], [684.0, 82.0], [680.0, 85.0], [692.0, 78.0], [697.0, 80.0], [676.0, 83.0], [677.0, 81.0], [695.0, 81.0], [691.0, 79.0], [699.0, 79.0], [702.0, 79.0], [703.0, 79.0], [681.0, 80.0], [730.0, 7.0], [734.0, 23.0], [704.0, 74.0], [732.0, 80.0], [731.0, 78.0], [726.0, 80.0], [717.0, 83.0], [719.0, 79.0], [710.0, 79.0], [711.0, 81.0], [707.0, 77.0], [708.0, 81.0], [716.0, 83.0], [715.0, 79.0], [722.0, 80.0], [735.0, 81.0], [725.0, 81.0], [760.0, 9.0], [752.0, 30.0], [746.0, 9.0], [750.0, 21.0], [757.0, 20.0], [759.0, 79.0], [754.0, 77.0], [753.0, 81.0], [742.0, 77.0], [740.0, 81.0], [748.0, 81.0], [747.0, 78.0], [764.0, 80.0], [775.0, 52.0], [783.0, 13.0], [780.0, 27.0], [778.0, 76.0], [779.0, 79.0], [782.0, 79.0], [781.0, 80.0], [777.0, 28.0], [776.0, 78.0], [789.0, 27.0], [774.0, 30.0], [769.0, 79.5], [768.0, 79.0], [791.0, 78.0], [792.0, 78.0], [794.0, 78.0], [788.0, 78.0], [786.0, 80.0], [799.0, 78.0], [797.0, 77.0], [785.0, 81.0], [796.0, 78.0], [802.0, 67.0], [811.0, 25.0], [808.0, 10.0], [804.0, 25.0], [805.0, 77.0], [807.0, 79.0], [806.0, 79.0], [810.0, 61.0], [814.0, 76.0], [813.0, 79.0], [801.0, 78.0], [818.0, 78.0], [831.0, 76.0], [816.0, 78.0], [825.0, 77.0], [827.0, 78.0], [828.0, 77.0], [823.0, 77.0], [821.0, 75.0], [819.0, 79.0], [824.0, 76.5], [859.0, 74.0], [836.0, 78.0], [833.0, 20.0], [852.0, 36.5], [851.0, 76.0], [862.0, 75.0], [861.0, 75.0], [834.0, 75.0], [839.0, 73.0], [845.0, 76.0], [847.0, 75.0], [832.0, 78.0], [841.0, 76.0], [844.0, 76.0], [854.0, 73.0], [853.0, 78.0], [838.0, 77.0], [837.0, 76.0], [864.0, 24.0], [890.0, 72.0], [883.0, 73.0], [870.0, 75.0], [894.0, 73.0], [874.0, 75.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 894.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 151.76666666666668, "minX": 1.71235062E12, "maxY": 524.5666666666667, "series": [{"data": [[1.7123508E12, 523.4666666666667], [1.71235098E12, 509.45], [1.71235068E12, 520.15], [1.71235116E12, 511.28333333333336], [1.71235086E12, 502.75], [1.71235104E12, 508.5833333333333], [1.71235074E12, 524.5666666666667], [1.71235122E12, 151.76666666666668], [1.71235092E12, 516.2833333333333], [1.71235062E12, 430.75], [1.7123511E12, 516.4833333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235122E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 152.6, "minX": 1.71235062E12, "maxY": 524.5666666666667, "series": [{"data": [[1.7123508E12, 523.4666666666667], [1.71235098E12, 509.45], [1.71235068E12, 519.9], [1.71235116E12, 511.28333333333336], [1.71235086E12, 502.75], [1.71235104E12, 508.5833333333333], [1.71235074E12, 524.5666666666667], [1.71235122E12, 152.6], [1.71235092E12, 516.2833333333333], [1.71235062E12, 430.1666666666667], [1.7123511E12, 516.4833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235122E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 152.6, "minX": 1.71235062E12, "maxY": 524.5666666666667, "series": [{"data": [[1.7123508E12, 523.4666666666667], [1.71235098E12, 509.45], [1.71235068E12, 519.9], [1.71235116E12, 511.28333333333336], [1.71235086E12, 502.75], [1.71235104E12, 508.5833333333333], [1.71235074E12, 524.5666666666667], [1.71235122E12, 152.6], [1.71235092E12, 516.2833333333333], [1.71235062E12, 430.1666666666667], [1.7123511E12, 516.4833333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235122E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 152.6, "minX": 1.71235062E12, "maxY": 524.5666666666667, "series": [{"data": [[1.7123508E12, 523.4666666666667], [1.71235098E12, 509.45], [1.71235068E12, 519.9], [1.71235116E12, 511.28333333333336], [1.71235086E12, 502.75], [1.71235104E12, 508.5833333333333], [1.71235074E12, 524.5666666666667], [1.71235122E12, 152.6], [1.71235092E12, 516.2833333333333], [1.71235062E12, 430.1666666666667], [1.7123511E12, 516.4833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235122E12, "title": "Total Transactions Per Second"}},
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

