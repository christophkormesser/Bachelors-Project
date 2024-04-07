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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 1892.0, "series": [{"data": [[0.0, 3.0], [0.1, 5.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 7.0], [0.6, 7.0], [0.7, 7.0], [0.8, 7.0], [0.9, 7.0], [1.0, 8.0], [1.1, 8.0], [1.2, 8.0], [1.3, 8.0], [1.4, 8.0], [1.5, 8.0], [1.6, 8.0], [1.7, 9.0], [1.8, 9.0], [1.9, 9.0], [2.0, 9.0], [2.1, 9.0], [2.2, 9.0], [2.3, 9.0], [2.4, 9.0], [2.5, 10.0], [2.6, 10.0], [2.7, 10.0], [2.8, 10.0], [2.9, 10.0], [3.0, 10.0], [3.1, 10.0], [3.2, 10.0], [3.3, 10.0], [3.4, 10.0], [3.5, 10.0], [3.6, 10.0], [3.7, 11.0], [3.8, 11.0], [3.9, 11.0], [4.0, 11.0], [4.1, 11.0], [4.2, 11.0], [4.3, 11.0], [4.4, 11.0], [4.5, 11.0], [4.6, 11.0], [4.7, 11.0], [4.8, 11.0], [4.9, 12.0], [5.0, 12.0], [5.1, 12.0], [5.2, 12.0], [5.3, 12.0], [5.4, 12.0], [5.5, 12.0], [5.6, 12.0], [5.7, 12.0], [5.8, 12.0], [5.9, 12.0], [6.0, 12.0], [6.1, 12.0], [6.2, 12.0], [6.3, 13.0], [6.4, 13.0], [6.5, 13.0], [6.6, 13.0], [6.7, 13.0], [6.8, 13.0], [6.9, 13.0], [7.0, 13.0], [7.1, 13.0], [7.2, 13.0], [7.3, 13.0], [7.4, 13.0], [7.5, 13.0], [7.6, 13.0], [7.7, 13.0], [7.8, 14.0], [7.9, 14.0], [8.0, 14.0], [8.1, 14.0], [8.2, 14.0], [8.3, 14.0], [8.4, 14.0], [8.5, 14.0], [8.6, 14.0], [8.7, 14.0], [8.8, 14.0], [8.9, 14.0], [9.0, 14.0], [9.1, 14.0], [9.2, 14.0], [9.3, 14.0], [9.4, 15.0], [9.5, 15.0], [9.6, 15.0], [9.7, 15.0], [9.8, 15.0], [9.9, 15.0], [10.0, 15.0], [10.1, 15.0], [10.2, 15.0], [10.3, 15.0], [10.4, 15.0], [10.5, 15.0], [10.6, 15.0], [10.7, 15.0], [10.8, 15.0], [10.9, 15.0], [11.0, 16.0], [11.1, 16.0], [11.2, 16.0], [11.3, 16.0], [11.4, 16.0], [11.5, 16.0], [11.6, 16.0], [11.7, 16.0], [11.8, 16.0], [11.9, 16.0], [12.0, 16.0], [12.1, 16.0], [12.2, 16.0], [12.3, 16.0], [12.4, 16.0], [12.5, 16.0], [12.6, 16.0], [12.7, 17.0], [12.8, 17.0], [12.9, 17.0], [13.0, 17.0], [13.1, 17.0], [13.2, 17.0], [13.3, 17.0], [13.4, 17.0], [13.5, 17.0], [13.6, 17.0], [13.7, 17.0], [13.8, 17.0], [13.9, 17.0], [14.0, 17.0], [14.1, 17.0], [14.2, 18.0], [14.3, 18.0], [14.4, 18.0], [14.5, 18.0], [14.6, 18.0], [14.7, 18.0], [14.8, 18.0], [14.9, 18.0], [15.0, 18.0], [15.1, 18.0], [15.2, 18.0], [15.3, 18.0], [15.4, 18.0], [15.5, 18.0], [15.6, 18.0], [15.7, 18.0], [15.8, 19.0], [15.9, 19.0], [16.0, 19.0], [16.1, 19.0], [16.2, 19.0], [16.3, 19.0], [16.4, 19.0], [16.5, 19.0], [16.6, 19.0], [16.7, 19.0], [16.8, 19.0], [16.9, 19.0], [17.0, 19.0], [17.1, 19.0], [17.2, 19.0], [17.3, 20.0], [17.4, 20.0], [17.5, 20.0], [17.6, 20.0], [17.7, 20.0], [17.8, 20.0], [17.9, 20.0], [18.0, 20.0], [18.1, 20.0], [18.2, 20.0], [18.3, 20.0], [18.4, 20.0], [18.5, 20.0], [18.6, 20.0], [18.7, 21.0], [18.8, 21.0], [18.9, 21.0], [19.0, 21.0], [19.1, 21.0], [19.2, 21.0], [19.3, 21.0], [19.4, 21.0], [19.5, 21.0], [19.6, 21.0], [19.7, 21.0], [19.8, 21.0], [19.9, 22.0], [20.0, 22.0], [20.1, 22.0], [20.2, 22.0], [20.3, 22.0], [20.4, 22.0], [20.5, 22.0], [20.6, 22.0], [20.7, 22.0], [20.8, 22.0], [20.9, 22.0], [21.0, 22.0], [21.1, 22.0], [21.2, 23.0], [21.3, 23.0], [21.4, 23.0], [21.5, 23.0], [21.6, 23.0], [21.7, 23.0], [21.8, 23.0], [21.9, 23.0], [22.0, 23.0], [22.1, 23.0], [22.2, 24.0], [22.3, 24.0], [22.4, 24.0], [22.5, 24.0], [22.6, 24.0], [22.7, 24.0], [22.8, 24.0], [22.9, 24.0], [23.0, 24.0], [23.1, 25.0], [23.2, 25.0], [23.3, 25.0], [23.4, 25.0], [23.5, 25.0], [23.6, 25.0], [23.7, 25.0], [23.8, 25.0], [23.9, 26.0], [24.0, 26.0], [24.1, 26.0], [24.2, 26.0], [24.3, 26.0], [24.4, 27.0], [24.5, 27.0], [24.6, 27.0], [24.7, 27.0], [24.8, 27.0], [24.9, 27.0], [25.0, 28.0], [25.1, 28.0], [25.2, 28.0], [25.3, 28.0], [25.4, 29.0], [25.5, 29.0], [25.6, 29.0], [25.7, 29.0], [25.8, 30.0], [25.9, 30.0], [26.0, 30.0], [26.1, 31.0], [26.2, 31.0], [26.3, 32.0], [26.4, 32.0], [26.5, 33.0], [26.6, 33.0], [26.7, 34.0], [26.8, 35.0], [26.9, 36.0], [27.0, 37.0], [27.1, 38.0], [27.2, 39.0], [27.3, 40.0], [27.4, 41.0], [27.5, 42.0], [27.6, 43.0], [27.7, 43.0], [27.8, 44.0], [27.9, 45.0], [28.0, 45.0], [28.1, 46.0], [28.2, 47.0], [28.3, 47.0], [28.4, 48.0], [28.5, 49.0], [28.6, 49.0], [28.7, 50.0], [28.8, 51.0], [28.9, 51.0], [29.0, 52.0], [29.1, 53.0], [29.2, 53.0], [29.3, 54.0], [29.4, 55.0], [29.5, 55.0], [29.6, 56.0], [29.7, 57.0], [29.8, 58.0], [29.9, 59.0], [30.0, 60.0], [30.1, 60.0], [30.2, 61.0], [30.3, 62.0], [30.4, 63.0], [30.5, 64.0], [30.6, 64.0], [30.7, 65.0], [30.8, 65.0], [30.9, 66.0], [31.0, 66.0], [31.1, 67.0], [31.2, 67.0], [31.3, 67.0], [31.4, 68.0], [31.5, 68.0], [31.6, 68.0], [31.7, 69.0], [31.8, 69.0], [31.9, 69.0], [32.0, 69.0], [32.1, 70.0], [32.2, 70.0], [32.3, 70.0], [32.4, 70.0], [32.5, 70.0], [32.6, 71.0], [32.7, 71.0], [32.8, 71.0], [32.9, 71.0], [33.0, 71.0], [33.1, 72.0], [33.2, 72.0], [33.3, 72.0], [33.4, 72.0], [33.5, 72.0], [33.6, 72.0], [33.7, 73.0], [33.8, 73.0], [33.9, 73.0], [34.0, 73.0], [34.1, 73.0], [34.2, 73.0], [34.3, 73.0], [34.4, 74.0], [34.5, 74.0], [34.6, 74.0], [34.7, 74.0], [34.8, 74.0], [34.9, 74.0], [35.0, 74.0], [35.1, 74.0], [35.2, 75.0], [35.3, 75.0], [35.4, 75.0], [35.5, 75.0], [35.6, 75.0], [35.7, 75.0], [35.8, 75.0], [35.9, 76.0], [36.0, 76.0], [36.1, 76.0], [36.2, 76.0], [36.3, 76.0], [36.4, 76.0], [36.5, 76.0], [36.6, 76.0], [36.7, 76.0], [36.8, 76.0], [36.9, 77.0], [37.0, 77.0], [37.1, 77.0], [37.2, 77.0], [37.3, 77.0], [37.4, 77.0], [37.5, 77.0], [37.6, 77.0], [37.7, 77.0], [37.8, 78.0], [37.9, 78.0], [38.0, 78.0], [38.1, 78.0], [38.2, 78.0], [38.3, 78.0], [38.4, 78.0], [38.5, 78.0], [38.6, 78.0], [38.7, 79.0], [38.8, 79.0], [38.9, 79.0], [39.0, 79.0], [39.1, 79.0], [39.2, 79.0], [39.3, 79.0], [39.4, 79.0], [39.5, 79.0], [39.6, 80.0], [39.7, 80.0], [39.8, 80.0], [39.9, 80.0], [40.0, 80.0], [40.1, 80.0], [40.2, 80.0], [40.3, 80.0], [40.4, 80.0], [40.5, 80.0], [40.6, 80.0], [40.7, 81.0], [40.8, 81.0], [40.9, 81.0], [41.0, 81.0], [41.1, 81.0], [41.2, 81.0], [41.3, 81.0], [41.4, 81.0], [41.5, 81.0], [41.6, 81.0], [41.7, 82.0], [41.8, 82.0], [41.9, 82.0], [42.0, 82.0], [42.1, 82.0], [42.2, 82.0], [42.3, 82.0], [42.4, 82.0], [42.5, 82.0], [42.6, 82.0], [42.7, 82.0], [42.8, 83.0], [42.9, 83.0], [43.0, 83.0], [43.1, 83.0], [43.2, 83.0], [43.3, 83.0], [43.4, 83.0], [43.5, 83.0], [43.6, 83.0], [43.7, 83.0], [43.8, 84.0], [43.9, 84.0], [44.0, 84.0], [44.1, 84.0], [44.2, 84.0], [44.3, 84.0], [44.4, 84.0], [44.5, 84.0], [44.6, 84.0], [44.7, 84.0], [44.8, 84.0], [44.9, 84.0], [45.0, 85.0], [45.1, 85.0], [45.2, 85.0], [45.3, 85.0], [45.4, 85.0], [45.5, 85.0], [45.6, 85.0], [45.7, 85.0], [45.8, 85.0], [45.9, 85.0], [46.0, 86.0], [46.1, 86.0], [46.2, 86.0], [46.3, 86.0], [46.4, 86.0], [46.5, 86.0], [46.6, 86.0], [46.7, 86.0], [46.8, 86.0], [46.9, 86.0], [47.0, 86.0], [47.1, 86.0], [47.2, 87.0], [47.3, 87.0], [47.4, 87.0], [47.5, 87.0], [47.6, 87.0], [47.7, 87.0], [47.8, 87.0], [47.9, 87.0], [48.0, 87.0], [48.1, 87.0], [48.2, 87.0], [48.3, 88.0], [48.4, 88.0], [48.5, 88.0], [48.6, 88.0], [48.7, 88.0], [48.8, 88.0], [48.9, 88.0], [49.0, 88.0], [49.1, 88.0], [49.2, 88.0], [49.3, 89.0], [49.4, 89.0], [49.5, 89.0], [49.6, 89.0], [49.7, 89.0], [49.8, 89.0], [49.9, 89.0], [50.0, 89.0], [50.1, 89.0], [50.2, 89.0], [50.3, 89.0], [50.4, 90.0], [50.5, 90.0], [50.6, 90.0], [50.7, 90.0], [50.8, 90.0], [50.9, 90.0], [51.0, 90.0], [51.1, 90.0], [51.2, 90.0], [51.3, 90.0], [51.4, 90.0], [51.5, 91.0], [51.6, 91.0], [51.7, 91.0], [51.8, 91.0], [51.9, 91.0], [52.0, 91.0], [52.1, 91.0], [52.2, 91.0], [52.3, 91.0], [52.4, 91.0], [52.5, 91.0], [52.6, 92.0], [52.7, 92.0], [52.8, 92.0], [52.9, 92.0], [53.0, 92.0], [53.1, 92.0], [53.2, 92.0], [53.3, 92.0], [53.4, 92.0], [53.5, 92.0], [53.6, 93.0], [53.7, 93.0], [53.8, 93.0], [53.9, 93.0], [54.0, 93.0], [54.1, 93.0], [54.2, 93.0], [54.3, 93.0], [54.4, 93.0], [54.5, 93.0], [54.6, 93.0], [54.7, 94.0], [54.8, 94.0], [54.9, 94.0], [55.0, 94.0], [55.1, 94.0], [55.2, 94.0], [55.3, 94.0], [55.4, 94.0], [55.5, 94.0], [55.6, 94.0], [55.7, 94.0], [55.8, 94.0], [55.9, 95.0], [56.0, 95.0], [56.1, 95.0], [56.2, 95.0], [56.3, 95.0], [56.4, 95.0], [56.5, 95.0], [56.6, 95.0], [56.7, 95.0], [56.8, 95.0], [56.9, 96.0], [57.0, 96.0], [57.1, 96.0], [57.2, 96.0], [57.3, 96.0], [57.4, 96.0], [57.5, 96.0], [57.6, 96.0], [57.7, 96.0], [57.8, 96.0], [57.9, 96.0], [58.0, 97.0], [58.1, 97.0], [58.2, 97.0], [58.3, 97.0], [58.4, 97.0], [58.5, 97.0], [58.6, 97.0], [58.7, 97.0], [58.8, 97.0], [58.9, 97.0], [59.0, 97.0], [59.1, 97.0], [59.2, 98.0], [59.3, 98.0], [59.4, 98.0], [59.5, 98.0], [59.6, 98.0], [59.7, 98.0], [59.8, 98.0], [59.9, 98.0], [60.0, 98.0], [60.1, 98.0], [60.2, 98.0], [60.3, 99.0], [60.4, 99.0], [60.5, 99.0], [60.6, 99.0], [60.7, 99.0], [60.8, 99.0], [60.9, 99.0], [61.0, 99.0], [61.1, 99.0], [61.2, 99.0], [61.3, 99.0], [61.4, 99.0], [61.5, 100.0], [61.6, 100.0], [61.7, 100.0], [61.8, 100.0], [61.9, 100.0], [62.0, 100.0], [62.1, 100.0], [62.2, 100.0], [62.3, 100.0], [62.4, 100.0], [62.5, 100.0], [62.6, 101.0], [62.7, 101.0], [62.8, 101.0], [62.9, 101.0], [63.0, 101.0], [63.1, 101.0], [63.2, 101.0], [63.3, 101.0], [63.4, 101.0], [63.5, 101.0], [63.6, 101.0], [63.7, 102.0], [63.8, 102.0], [63.9, 102.0], [64.0, 102.0], [64.1, 102.0], [64.2, 102.0], [64.3, 102.0], [64.4, 102.0], [64.5, 102.0], [64.6, 102.0], [64.7, 102.0], [64.8, 103.0], [64.9, 103.0], [65.0, 103.0], [65.1, 103.0], [65.2, 103.0], [65.3, 103.0], [65.4, 103.0], [65.5, 103.0], [65.6, 103.0], [65.7, 104.0], [65.8, 104.0], [65.9, 104.0], [66.0, 104.0], [66.1, 104.0], [66.2, 104.0], [66.3, 104.0], [66.4, 104.0], [66.5, 104.0], [66.6, 104.0], [66.7, 105.0], [66.8, 105.0], [66.9, 105.0], [67.0, 105.0], [67.1, 105.0], [67.2, 105.0], [67.3, 105.0], [67.4, 105.0], [67.5, 106.0], [67.6, 106.0], [67.7, 106.0], [67.8, 106.0], [67.9, 106.0], [68.0, 106.0], [68.1, 106.0], [68.2, 107.0], [68.3, 107.0], [68.4, 107.0], [68.5, 107.0], [68.6, 107.0], [68.7, 107.0], [68.8, 108.0], [68.9, 108.0], [69.0, 108.0], [69.1, 108.0], [69.2, 108.0], [69.3, 108.0], [69.4, 109.0], [69.5, 109.0], [69.6, 109.0], [69.7, 109.0], [69.8, 110.0], [69.9, 110.0], [70.0, 110.0], [70.1, 110.0], [70.2, 111.0], [70.3, 111.0], [70.4, 111.0], [70.5, 111.0], [70.6, 112.0], [70.7, 112.0], [70.8, 112.0], [70.9, 113.0], [71.0, 113.0], [71.1, 114.0], [71.2, 114.0], [71.3, 115.0], [71.4, 116.0], [71.5, 117.0], [71.6, 117.0], [71.7, 119.0], [71.8, 120.0], [71.9, 122.0], [72.0, 124.0], [72.1, 128.0], [72.2, 135.0], [72.3, 141.0], [72.4, 145.0], [72.5, 149.0], [72.6, 153.0], [72.7, 156.0], [72.8, 160.0], [72.9, 165.0], [73.0, 169.0], [73.1, 172.0], [73.2, 174.0], [73.3, 176.0], [73.4, 177.0], [73.5, 178.0], [73.6, 179.0], [73.7, 180.0], [73.8, 181.0], [73.9, 182.0], [74.0, 182.0], [74.1, 183.0], [74.2, 184.0], [74.3, 184.0], [74.4, 185.0], [74.5, 185.0], [74.6, 186.0], [74.7, 186.0], [74.8, 187.0], [74.9, 187.0], [75.0, 188.0], [75.1, 188.0], [75.2, 188.0], [75.3, 189.0], [75.4, 189.0], [75.5, 189.0], [75.6, 190.0], [75.7, 190.0], [75.8, 190.0], [75.9, 191.0], [76.0, 191.0], [76.1, 191.0], [76.2, 191.0], [76.3, 192.0], [76.4, 192.0], [76.5, 192.0], [76.6, 192.0], [76.7, 192.0], [76.8, 193.0], [76.9, 193.0], [77.0, 193.0], [77.1, 193.0], [77.2, 193.0], [77.3, 194.0], [77.4, 194.0], [77.5, 194.0], [77.6, 194.0], [77.7, 194.0], [77.8, 194.0], [77.9, 195.0], [78.0, 195.0], [78.1, 195.0], [78.2, 195.0], [78.3, 195.0], [78.4, 195.0], [78.5, 195.0], [78.6, 196.0], [78.7, 196.0], [78.8, 196.0], [78.9, 196.0], [79.0, 196.0], [79.1, 196.0], [79.2, 196.0], [79.3, 197.0], [79.4, 197.0], [79.5, 197.0], [79.6, 197.0], [79.7, 197.0], [79.8, 197.0], [79.9, 197.0], [80.0, 198.0], [80.1, 198.0], [80.2, 198.0], [80.3, 198.0], [80.4, 198.0], [80.5, 198.0], [80.6, 198.0], [80.7, 198.0], [80.8, 199.0], [80.9, 199.0], [81.0, 199.0], [81.1, 199.0], [81.2, 199.0], [81.3, 199.0], [81.4, 199.0], [81.5, 200.0], [81.6, 200.0], [81.7, 200.0], [81.8, 200.0], [81.9, 200.0], [82.0, 200.0], [82.1, 200.0], [82.2, 200.0], [82.3, 201.0], [82.4, 201.0], [82.5, 201.0], [82.6, 201.0], [82.7, 201.0], [82.8, 201.0], [82.9, 201.0], [83.0, 202.0], [83.1, 202.0], [83.2, 202.0], [83.3, 202.0], [83.4, 202.0], [83.5, 202.0], [83.6, 202.0], [83.7, 203.0], [83.8, 203.0], [83.9, 203.0], [84.0, 203.0], [84.1, 203.0], [84.2, 203.0], [84.3, 203.0], [84.4, 204.0], [84.5, 204.0], [84.6, 204.0], [84.7, 204.0], [84.8, 204.0], [84.9, 204.0], [85.0, 205.0], [85.1, 205.0], [85.2, 205.0], [85.3, 205.0], [85.4, 205.0], [85.5, 206.0], [85.6, 206.0], [85.7, 206.0], [85.8, 206.0], [85.9, 207.0], [86.0, 207.0], [86.1, 207.0], [86.2, 207.0], [86.3, 208.0], [86.4, 208.0], [86.5, 208.0], [86.6, 209.0], [86.7, 209.0], [86.8, 209.0], [86.9, 210.0], [87.0, 210.0], [87.1, 211.0], [87.2, 212.0], [87.3, 212.0], [87.4, 213.0], [87.5, 215.0], [87.6, 216.0], [87.7, 217.0], [87.8, 220.0], [87.9, 223.0], [88.0, 228.0], [88.1, 241.0], [88.2, 252.0], [88.3, 264.0], [88.4, 274.0], [88.5, 278.0], [88.6, 281.0], [88.7, 283.0], [88.8, 284.0], [88.9, 286.0], [89.0, 287.0], [89.1, 287.0], [89.2, 288.0], [89.3, 289.0], [89.4, 290.0], [89.5, 290.0], [89.6, 291.0], [89.7, 291.0], [89.8, 292.0], [89.9, 292.0], [90.0, 293.0], [90.1, 293.0], [90.2, 293.0], [90.3, 294.0], [90.4, 294.0], [90.5, 294.0], [90.6, 295.0], [90.7, 295.0], [90.8, 295.0], [90.9, 296.0], [91.0, 296.0], [91.1, 296.0], [91.2, 296.0], [91.3, 297.0], [91.4, 297.0], [91.5, 297.0], [91.6, 298.0], [91.7, 298.0], [91.8, 298.0], [91.9, 298.0], [92.0, 299.0], [92.1, 299.0], [92.2, 299.0], [92.3, 300.0], [92.4, 300.0], [92.5, 300.0], [92.6, 300.0], [92.7, 301.0], [92.8, 301.0], [92.9, 301.0], [93.0, 302.0], [93.1, 302.0], [93.2, 302.0], [93.3, 303.0], [93.4, 303.0], [93.5, 303.0], [93.6, 304.0], [93.7, 304.0], [93.8, 305.0], [93.9, 305.0], [94.0, 306.0], [94.1, 306.0], [94.2, 307.0], [94.3, 307.0], [94.4, 308.0], [94.5, 309.0], [94.6, 310.0], [94.7, 311.0], [94.8, 312.0], [94.9, 315.0], [95.0, 318.0], [95.1, 323.0], [95.2, 343.0], [95.3, 359.0], [95.4, 377.0], [95.5, 383.0], [95.6, 387.0], [95.7, 389.0], [95.8, 391.0], [95.9, 392.0], [96.0, 393.0], [96.1, 394.0], [96.2, 395.0], [96.3, 396.0], [96.4, 397.0], [96.5, 398.0], [96.6, 398.0], [96.7, 399.0], [96.8, 400.0], [96.9, 401.0], [97.0, 401.0], [97.1, 402.0], [97.2, 403.0], [97.3, 404.0], [97.4, 405.0], [97.5, 406.0], [97.6, 408.0], [97.7, 410.0], [97.8, 413.0], [97.9, 418.0], [98.0, 437.0], [98.1, 480.0], [98.2, 489.0], [98.3, 494.0], [98.4, 496.0], [98.5, 498.0], [98.6, 500.0], [98.7, 502.0], [98.8, 505.0], [98.9, 510.0], [99.0, 534.0], [99.1, 589.0], [99.2, 596.0], [99.3, 600.0], [99.4, 604.0], [99.5, 621.0], [99.6, 695.0], [99.7, 705.0], [99.8, 798.0], [99.9, 901.0], [100.0, 1892.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 153811.0, "series": [{"data": [[0.0, 153811.0], [600.0, 908.0], [700.0, 398.0], [200.0, 26953.0], [800.0, 213.0], [900.0, 150.0], [1000.0, 48.0], [1100.0, 30.0], [300.0, 11215.0], [1200.0, 19.0], [1300.0, 9.0], [1400.0, 5.0], [100.0, 50081.0], [400.0, 4509.0], [1600.0, 2.0], [1700.0, 2.0], [1800.0, 2.0], [500.0, 1829.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 246704.0, "series": [{"data": [[0.0, 246704.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3474.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 47.65872347254001, "minX": 1.71250158E12, "maxY": 50.0, "series": [{"data": [[1.712502E12, 50.0], [1.7125017E12, 50.0], [1.71250218E12, 49.34676742233415], [1.71250188E12, 50.0], [1.71250158E12, 47.65872347254001], [1.71250206E12, 50.0], [1.71250176E12, 50.0], [1.71250194E12, 50.0], [1.71250164E12, 50.0], [1.71250212E12, 50.0], [1.71250182E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250218E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6.428571428571429, "minX": 4.0, "maxY": 153.0, "series": [{"data": [[32.0, 36.02597402597403], [33.0, 23.714285714285715], [34.0, 27.975999999999996], [35.0, 62.999999999999986], [36.0, 25.490566037735856], [37.0, 32.62500000000001], [38.0, 15.135135135135132], [39.0, 42.79347826086955], [40.0, 58.64000000000001], [41.0, 14.388059701492539], [42.0, 47.41095890410959], [43.0, 21.97435897435897], [44.0, 46.397590361445786], [45.0, 60.85714285714287], [46.0, 51.0], [47.0, 102.55000000000001], [49.0, 153.0], [50.0, 120.39836636801488], [4.0, 13.41666666666667], [5.0, 7.12121212121212], [6.0, 7.235294117647059], [7.0, 6.428571428571429], [8.0, 8.527272727272726], [9.0, 8.57142857142857], [10.0, 10.642857142857146], [11.0, 9.545454545454545], [12.0, 18.117647058823525], [13.0, 21.594594594594597], [14.0, 9.891891891891893], [15.0, 38.61904761904762], [16.0, 10.014492753623186], [17.0, 14.242857142857144], [18.0, 16.625], [19.0, 30.952830188679233], [20.0, 25.72549019607844], [21.0, 12.980392156862745], [22.0, 24.82608695652174], [23.0, 25.55319148936171], [24.0, 14.926605504587155], [25.0, 42.78124999999999], [26.0, 16.351851851851855], [27.0, 22.824742268041234], [28.0, 20.291666666666668], [29.0, 36.72857142857141], [30.0, 39.44642857142857], [31.0, 12.096774193548383]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.7636179771692, 119.46905477568683]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2638.4666666666667, "minX": 1.71250158E12, "maxY": 212041.93333333332, "series": [{"data": [[1.712502E12, 199232.6], [1.7125017E12, 207896.55], [1.71250218E12, 9929.7], [1.71250188E12, 207764.75], [1.71250158E12, 207780.83333333334], [1.71250206E12, 203584.26666666666], [1.71250176E12, 211503.76666666666], [1.71250194E12, 212041.93333333332], [1.71250164E12, 209439.4], [1.71250212E12, 206459.8], [1.71250182E12, 210033.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.712502E12, 52942.05], [1.7125017E12, 55243.816666666666], [1.71250218E12, 2638.4666666666667], [1.71250188E12, 55210.566666666666], [1.71250158E12, 55221.566666666666], [1.71250206E12, 54098.4], [1.71250176E12, 56205.183333333334], [1.71250194E12, 56349.2], [1.71250164E12, 55653.566666666666], [1.71250212E12, 54865.0], [1.71250182E12, 55813.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250218E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 110.38688971797686, "minX": 1.71250158E12, "maxY": 138.9034424853061, "series": [{"data": [[1.712502E12, 125.63310737300182], [1.7125017E12, 119.96154308858331], [1.71250218E12, 138.9034424853061], [1.71250188E12, 119.96962523071943], [1.71250158E12, 110.38688971797686], [1.71250206E12, 122.37989352989418], [1.71250176E12, 118.05608765913804], [1.71250194E12, 117.9671331970433], [1.71250164E12, 119.66181036541663], [1.71250212E12, 121.03912622143237], [1.71250182E12, 119.08887036596]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250218E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 110.37842500100277, "minX": 1.71250158E12, "maxY": 138.88832913518053, "series": [{"data": [[1.712502E12, 125.62791865428002], [1.7125017E12, 119.95713197257179], [1.71250218E12, 138.88832913518053], [1.71250188E12, 119.96489045822905], [1.71250158E12, 110.37842500100277], [1.71250206E12, 122.375962325962], [1.71250176E12, 118.0513972645937], [1.71250194E12, 117.96272998899205], [1.71250164E12, 119.65775017912544], [1.71250212E12, 121.03363482193332], [1.71250182E12, 119.08390886719066]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250218E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71250158E12, "maxY": 0.005656517029726823, "series": [{"data": [[1.712502E12, 0.0011716461628588253], [1.7125017E12, 0.0010025263664434408], [1.71250218E12, 0.0], [1.71250188E12, 0.0015648824331915617], [1.71250158E12, 0.005656517029726823], [1.71250206E12, 0.001023751023751029], [1.71250176E12, 0.0014977730479681847], [1.71250194E12, 9.828589400849236E-4], [1.71250164E12, 0.0014728126741501318], [1.71250212E12, 0.001049826374868775], [1.71250182E12, 0.001190759704691595]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250218E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.71250158E12, "maxY": 1892.0, "series": [{"data": [[1.712502E12, 1204.0], [1.7125017E12, 1259.0], [1.71250218E12, 709.0], [1.71250188E12, 1409.0], [1.71250158E12, 1201.0], [1.71250206E12, 1280.0], [1.71250176E12, 1491.0], [1.71250194E12, 1405.0], [1.71250164E12, 1199.0], [1.71250212E12, 1307.0], [1.71250182E12, 1892.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.712502E12, 4.0], [1.7125017E12, 3.0], [1.71250218E12, 6.0], [1.71250188E12, 3.0], [1.71250158E12, 3.0], [1.71250206E12, 3.0], [1.71250176E12, 3.0], [1.71250194E12, 3.0], [1.71250164E12, 4.0], [1.71250212E12, 5.0], [1.71250182E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.712502E12, 296.0], [1.7125017E12, 293.0], [1.71250218E12, 311.79999999999995], [1.71250188E12, 293.0], [1.71250158E12, 286.0], [1.71250206E12, 294.0], [1.71250176E12, 290.0], [1.71250194E12, 291.0], [1.71250164E12, 285.0], [1.71250212E12, 294.0], [1.71250182E12, 291.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.712502E12, 599.0], [1.7125017E12, 499.0], [1.71250218E12, 525.0799999999999], [1.71250188E12, 589.9900000000016], [1.71250158E12, 499.0], [1.71250206E12, 502.0], [1.71250176E12, 590.0], [1.71250194E12, 526.0], [1.71250164E12, 501.0], [1.71250212E12, 603.9900000000016], [1.71250182E12, 586.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.712502E12, 91.0], [1.7125017E12, 90.0], [1.71250218E12, 88.0], [1.71250188E12, 89.0], [1.71250158E12, 90.0], [1.71250206E12, 90.0], [1.71250176E12, 87.0], [1.71250194E12, 87.0], [1.71250164E12, 90.0], [1.71250212E12, 87.0], [1.71250182E12, 88.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.712502E12, 391.0], [1.7125017E12, 308.0], [1.71250218E12, 407.39999999999986], [1.71250188E12, 319.0], [1.71250158E12, 305.0], [1.71250206E12, 310.0], [1.71250176E12, 344.0], [1.71250194E12, 310.0], [1.71250164E12, 306.0], [1.71250212E12, 382.0], [1.71250182E12, 370.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250218E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14.0, "minX": 122.0, "maxY": 301.0, "series": [{"data": [[122.0, 298.5], [128.0, 79.5], [154.0, 195.0], [158.0, 217.5], [165.0, 201.0], [167.0, 194.5], [166.0, 205.5], [171.0, 196.0], [175.0, 207.0], [172.0, 301.0], [169.0, 290.0], [174.0, 291.0], [173.0, 226.0], [178.0, 204.0], [179.0, 206.0], [176.0, 295.0], [181.0, 292.0], [191.0, 205.5], [190.0, 208.0], [188.0, 202.0], [189.0, 212.5], [187.0, 284.0], [194.0, 198.0], [192.0, 207.0], [193.0, 205.0], [199.0, 206.0], [198.0, 181.0], [195.0, 194.0], [196.0, 205.5], [203.0, 201.0], [204.0, 202.0], [207.0, 203.0], [202.0, 196.0], [201.0, 208.0], [206.0, 202.0], [205.0, 203.0], [200.0, 203.0], [210.0, 197.0], [215.0, 201.0], [209.0, 202.0], [212.0, 203.0], [211.0, 200.0], [214.0, 201.0], [213.0, 201.0], [208.0, 202.0], [217.0, 202.0], [218.0, 197.0], [216.0, 204.0], [220.0, 203.0], [223.0, 199.0], [222.0, 193.0], [219.0, 198.0], [221.0, 197.0], [225.0, 204.0], [231.0, 197.0], [227.0, 198.0], [224.0, 198.0], [229.0, 201.0], [230.0, 200.0], [226.0, 199.0], [228.0, 198.0], [234.0, 197.0], [237.0, 198.0], [239.0, 198.0], [232.0, 199.0], [233.0, 155.0], [235.0, 197.0], [238.0, 198.0], [246.0, 197.0], [242.0, 196.5], [247.0, 191.0], [244.0, 196.5], [245.0, 196.0], [240.0, 198.0], [241.0, 197.0], [254.0, 200.0], [251.0, 196.0], [248.0, 199.0], [249.0, 193.0], [252.0, 193.0], [253.0, 106.0], [250.0, 196.0], [255.0, 196.0], [257.0, 196.0], [263.0, 192.0], [264.0, 193.0], [256.0, 157.0], [265.0, 198.0], [266.0, 177.0], [259.0, 189.0], [258.0, 125.0], [271.0, 198.0], [270.0, 197.0], [268.0, 196.0], [260.0, 196.0], [261.0, 143.0], [279.0, 111.0], [277.0, 198.0], [275.0, 197.0], [281.0, 120.0], [273.0, 143.0], [287.0, 195.0], [272.0, 103.0], [283.0, 102.0], [276.0, 177.0], [303.0, 106.0], [296.0, 150.0], [289.0, 102.0], [295.0, 184.0], [294.0, 109.0], [293.0, 127.0], [301.0, 108.0], [302.0, 108.0], [298.0, 197.0], [312.0, 107.5], [311.0, 101.0], [319.0, 177.0], [317.0, 101.0], [310.0, 125.0], [325.0, 103.0], [331.0, 193.0], [327.0, 107.0], [320.0, 194.5], [328.0, 100.5], [321.0, 104.0], [332.0, 94.0], [346.0, 108.0], [351.0, 98.0], [347.0, 196.0], [350.0, 106.0], [336.0, 115.0], [344.0, 97.0], [337.0, 108.0], [342.0, 107.0], [358.0, 125.0], [366.0, 97.0], [364.0, 102.0], [362.0, 103.0], [359.0, 106.0], [356.0, 96.0], [382.0, 96.0], [383.0, 100.0], [377.0, 94.0], [379.0, 90.0], [374.0, 101.0], [376.0, 87.0], [390.0, 97.0], [394.0, 101.0], [392.0, 101.0], [385.0, 101.0], [396.0, 96.0], [397.0, 100.0], [387.0, 102.0], [384.0, 91.0], [402.0, 106.0], [414.0, 102.0], [408.0, 102.0], [407.0, 94.0], [415.0, 94.0], [430.0, 100.0], [422.0, 98.0], [417.0, 102.0], [418.0, 89.0], [420.0, 97.0], [425.0, 92.0], [431.0, 94.0], [443.0, 99.0], [434.0, 84.0], [439.0, 91.0], [447.0, 93.0], [442.0, 85.0], [436.0, 99.0], [453.0, 85.0], [457.0, 91.0], [449.0, 92.0], [450.0, 90.0], [472.0, 96.0], [467.0, 93.0], [471.0, 86.0], [465.0, 94.0], [466.0, 88.0], [493.0, 91.0], [483.0, 80.0], [494.0, 78.5], [498.0, 84.0], [510.0, 88.0], [508.0, 83.0], [513.0, 15.0], [532.0, 83.0], [543.0, 92.0], [531.0, 85.0], [514.0, 85.0], [528.0, 85.0], [522.0, 79.0], [519.0, 76.0], [548.0, 78.0], [544.0, 83.0], [565.0, 81.0], [562.0, 62.0], [574.0, 87.0], [575.0, 87.0], [556.0, 82.0], [557.0, 91.0], [572.0, 76.0], [553.0, 79.0], [554.0, 78.0], [547.0, 70.0], [545.0, 91.0], [549.0, 80.0], [582.0, 87.0], [577.0, 74.0], [590.0, 76.0], [586.0, 83.0], [599.0, 79.0], [597.0, 79.0], [596.0, 79.0], [591.0, 72.0], [579.0, 89.0], [581.0, 85.0], [600.0, 81.0], [576.0, 94.0], [583.0, 84.0], [634.0, 77.0], [624.0, 86.0], [608.0, 86.0], [621.0, 77.0], [625.0, 78.0], [611.0, 84.0], [612.0, 76.0], [626.0, 73.0], [616.0, 78.0], [671.0, 86.0], [670.0, 70.0], [648.0, 77.0], [645.0, 76.0], [646.0, 49.5], [654.0, 78.0], [662.0, 71.0], [641.0, 68.0], [699.0, 79.0], [691.0, 69.0], [694.0, 75.5], [679.0, 81.0], [677.0, 72.0], [675.0, 69.0], [684.0, 74.0], [682.0, 78.0], [681.0, 84.0], [683.0, 83.0], [702.0, 80.0], [700.0, 82.0], [688.0, 57.0], [686.0, 77.0], [685.0, 74.0], [711.0, 73.0], [712.0, 76.0], [732.0, 75.0], [735.0, 70.0], [731.0, 64.0], [719.0, 74.0], [730.0, 81.0], [729.0, 71.0], [706.0, 82.0], [704.0, 86.0], [705.0, 79.0], [760.0, 74.0], [741.0, 76.0], [753.0, 79.0], [743.0, 64.0], [751.0, 72.0], [759.0, 78.0], [744.0, 73.0], [742.0, 74.0], [749.0, 75.0], [783.0, 67.0], [792.0, 73.0], [779.0, 72.0], [776.0, 76.0], [789.0, 74.0], [773.0, 75.0], [777.0, 78.0], [796.0, 75.0], [799.0, 57.0], [827.0, 51.0], [817.0, 53.0], [805.0, 55.0], [820.0, 71.0], [818.0, 70.0], [810.0, 53.0], [808.0, 55.0], [830.0, 67.5], [821.0, 52.0], [826.0, 74.0], [861.0, 50.0], [855.0, 66.0], [852.0, 49.0], [862.0, 37.5], [841.0, 64.0], [843.0, 76.0], [844.0, 75.0], [834.0, 72.0], [847.0, 73.0], [856.0, 72.0], [860.0, 76.0], [858.0, 72.0], [850.0, 72.0], [848.0, 70.0], [894.0, 66.0], [870.0, 72.0], [892.0, 55.0], [880.0, 47.0], [876.0, 61.5], [874.0, 66.5], [879.0, 68.0], [895.0, 34.0], [882.0, 73.0], [878.0, 74.0], [885.0, 73.0], [914.0, 20.0], [920.0, 69.0], [913.0, 52.0], [911.0, 65.0], [917.0, 53.0], [908.0, 62.5], [944.0, 48.0], [945.0, 60.0], [932.0, 64.5], [939.0, 60.0], [946.0, 67.0], [934.0, 52.0], [968.0, 64.0], [972.0, 31.0], [978.0, 47.0], [1013.0, 14.0], [1002.0, 33.5], [1011.0, 48.0], [1022.0, 47.0], [996.0, 57.5], [993.0, 31.0], [992.0, 59.0], [1051.0, 28.0], [1071.0, 27.0], [1047.0, 29.0], [1033.0, 28.0], [1066.0, 26.0], [1044.0, 29.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1071.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 14.0, "minX": 122.0, "maxY": 301.0, "series": [{"data": [[122.0, 298.5], [128.0, 79.5], [154.0, 195.0], [158.0, 217.5], [165.0, 201.0], [167.0, 194.5], [166.0, 205.5], [171.0, 196.0], [175.0, 207.0], [172.0, 301.0], [169.0, 290.0], [174.0, 291.0], [173.0, 226.0], [178.0, 204.0], [179.0, 206.0], [176.0, 295.0], [181.0, 292.0], [191.0, 205.5], [190.0, 208.0], [188.0, 202.0], [189.0, 212.5], [187.0, 284.0], [194.0, 198.0], [192.0, 207.0], [193.0, 205.0], [199.0, 206.0], [198.0, 181.0], [195.0, 194.0], [196.0, 205.5], [203.0, 201.0], [204.0, 202.0], [207.0, 203.0], [202.0, 196.0], [201.0, 208.0], [206.0, 202.0], [205.0, 203.0], [200.0, 203.0], [210.0, 197.0], [215.0, 201.0], [209.0, 202.0], [212.0, 203.0], [211.0, 200.0], [214.0, 201.0], [213.0, 201.0], [208.0, 202.0], [217.0, 202.0], [218.0, 197.0], [216.0, 204.0], [220.0, 203.0], [223.0, 199.0], [222.0, 193.0], [219.0, 198.0], [221.0, 197.0], [225.0, 204.0], [231.0, 197.0], [227.0, 198.0], [224.0, 198.0], [229.0, 201.0], [230.0, 200.0], [226.0, 199.0], [228.0, 198.0], [234.0, 197.0], [237.0, 198.0], [239.0, 198.0], [232.0, 199.0], [233.0, 155.0], [235.0, 197.0], [238.0, 198.0], [246.0, 197.0], [242.0, 196.5], [247.0, 191.0], [244.0, 196.5], [245.0, 196.0], [240.0, 198.0], [241.0, 197.0], [254.0, 200.0], [251.0, 196.0], [248.0, 199.0], [249.0, 193.0], [252.0, 193.0], [253.0, 106.0], [250.0, 196.0], [255.0, 196.0], [257.0, 196.0], [263.0, 192.0], [264.0, 193.0], [256.0, 157.0], [265.0, 198.0], [266.0, 177.0], [259.0, 189.0], [258.0, 125.0], [271.0, 198.0], [270.0, 197.0], [268.0, 196.0], [260.0, 196.0], [261.0, 143.0], [279.0, 111.0], [277.0, 198.0], [275.0, 197.0], [281.0, 120.0], [273.0, 143.0], [287.0, 195.0], [272.0, 103.0], [283.0, 102.0], [276.0, 177.0], [303.0, 106.0], [296.0, 150.0], [289.0, 102.0], [295.0, 184.0], [294.0, 109.0], [293.0, 127.0], [301.0, 108.0], [302.0, 108.0], [298.0, 197.0], [312.0, 107.5], [311.0, 101.0], [319.0, 177.0], [317.0, 101.0], [310.0, 125.0], [325.0, 103.0], [331.0, 193.0], [327.0, 107.0], [320.0, 194.5], [328.0, 100.5], [321.0, 104.0], [332.0, 94.0], [346.0, 108.0], [351.0, 98.0], [347.0, 196.0], [350.0, 106.0], [336.0, 115.0], [344.0, 97.0], [337.0, 108.0], [342.0, 107.0], [358.0, 125.0], [366.0, 97.0], [364.0, 102.0], [362.0, 103.0], [359.0, 106.0], [356.0, 96.0], [382.0, 96.0], [383.0, 100.0], [377.0, 94.0], [379.0, 90.0], [374.0, 101.0], [376.0, 87.0], [390.0, 97.0], [394.0, 101.0], [392.0, 101.0], [385.0, 101.0], [396.0, 96.0], [397.0, 100.0], [387.0, 102.0], [384.0, 91.0], [402.0, 106.0], [414.0, 102.0], [408.0, 102.0], [407.0, 94.0], [415.0, 94.0], [430.0, 100.0], [422.0, 98.0], [417.0, 102.0], [418.0, 89.0], [420.0, 97.0], [425.0, 92.0], [431.0, 94.0], [443.0, 99.0], [434.0, 84.0], [439.0, 91.0], [447.0, 93.0], [442.0, 85.0], [436.0, 99.0], [453.0, 85.0], [457.0, 91.0], [449.0, 92.0], [450.0, 90.0], [472.0, 96.0], [467.0, 93.0], [471.0, 86.0], [465.0, 94.0], [466.0, 88.0], [493.0, 91.0], [483.0, 80.0], [494.0, 78.5], [498.0, 84.0], [510.0, 88.0], [508.0, 83.0], [513.0, 15.0], [532.0, 83.0], [543.0, 92.0], [531.0, 85.0], [514.0, 85.0], [528.0, 85.0], [522.0, 78.5], [519.0, 76.0], [548.0, 78.0], [544.0, 83.0], [565.0, 81.0], [562.0, 62.0], [574.0, 87.0], [575.0, 87.0], [556.0, 82.0], [557.0, 91.0], [572.0, 76.0], [553.0, 79.0], [554.0, 78.0], [547.0, 70.0], [545.0, 91.0], [549.0, 80.0], [582.0, 87.0], [577.0, 74.0], [590.0, 76.0], [586.0, 83.0], [599.0, 79.0], [597.0, 79.0], [596.0, 79.0], [591.0, 72.0], [579.0, 89.0], [581.0, 85.0], [600.0, 81.0], [576.0, 94.0], [583.0, 84.0], [634.0, 77.0], [624.0, 86.0], [608.0, 86.0], [621.0, 77.0], [625.0, 78.0], [611.0, 84.0], [612.0, 76.0], [626.0, 73.0], [616.0, 78.0], [671.0, 86.0], [670.0, 70.0], [648.0, 77.0], [645.0, 76.0], [646.0, 49.5], [654.0, 78.0], [662.0, 71.0], [641.0, 68.0], [699.0, 79.0], [691.0, 69.0], [694.0, 75.5], [679.0, 81.0], [677.0, 72.0], [675.0, 69.0], [684.0, 74.0], [682.0, 78.0], [681.0, 84.0], [683.0, 83.0], [702.0, 80.0], [700.0, 82.0], [688.0, 57.0], [686.0, 77.0], [685.0, 74.0], [711.0, 73.0], [712.0, 76.0], [732.0, 75.0], [735.0, 70.0], [731.0, 64.0], [719.0, 74.0], [730.0, 81.0], [729.0, 71.0], [706.0, 82.0], [704.0, 86.0], [705.0, 79.0], [760.0, 74.0], [741.0, 76.0], [753.0, 79.0], [743.0, 64.0], [751.0, 72.0], [759.0, 78.0], [744.0, 73.0], [742.0, 74.0], [749.0, 75.0], [783.0, 67.0], [792.0, 73.0], [779.0, 72.0], [776.0, 76.0], [789.0, 74.0], [773.0, 75.0], [777.0, 78.0], [796.0, 75.0], [799.0, 57.0], [827.0, 51.0], [817.0, 53.0], [805.0, 55.0], [820.0, 71.0], [818.0, 70.0], [810.0, 53.0], [808.0, 55.0], [830.0, 67.5], [821.0, 52.0], [826.0, 74.0], [861.0, 50.0], [855.0, 66.0], [852.0, 48.5], [862.0, 37.5], [841.0, 64.0], [843.0, 76.0], [844.0, 75.0], [834.0, 72.0], [847.0, 73.0], [856.0, 72.0], [860.0, 76.0], [858.0, 72.0], [850.0, 72.0], [848.0, 70.0], [894.0, 66.0], [870.0, 72.0], [892.0, 55.0], [880.0, 47.0], [876.0, 61.5], [874.0, 66.5], [879.0, 68.0], [895.0, 34.0], [882.0, 73.0], [878.0, 74.0], [885.0, 73.0], [914.0, 20.0], [920.0, 69.0], [913.0, 52.0], [911.0, 65.0], [917.0, 53.0], [908.0, 62.5], [944.0, 48.0], [945.0, 60.0], [932.0, 64.5], [939.0, 60.0], [946.0, 67.0], [934.0, 52.0], [968.0, 64.0], [972.0, 31.0], [978.0, 47.0], [1013.0, 14.0], [1002.0, 33.5], [1011.0, 48.0], [1022.0, 47.0], [996.0, 57.5], [993.0, 31.0], [992.0, 59.0], [1051.0, 28.0], [1071.0, 27.0], [1047.0, 29.0], [1033.0, 28.0], [1066.0, 26.0], [1044.0, 29.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1071.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 19.016666666666666, "minX": 1.71250158E12, "maxY": 423.93333333333334, "series": [{"data": [[1.712502E12, 398.3], [1.7125017E12, 415.6166666666667], [1.71250218E12, 19.016666666666666], [1.71250188E12, 415.3666666666667], [1.71250158E12, 416.28333333333336], [1.71250206E12, 407.0], [1.71250176E12, 422.85], [1.71250194E12, 423.93333333333334], [1.71250164E12, 418.7], [1.71250212E12, 412.76666666666665], [1.71250182E12, 419.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250218E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 19.85, "minX": 1.71250158E12, "maxY": 423.93333333333334, "series": [{"data": [[1.712502E12, 398.3], [1.7125017E12, 415.6166666666667], [1.71250218E12, 19.85], [1.71250188E12, 415.3666666666667], [1.71250158E12, 415.45], [1.71250206E12, 407.0], [1.71250176E12, 422.85], [1.71250194E12, 423.93333333333334], [1.71250164E12, 418.7], [1.71250212E12, 412.76666666666665], [1.71250182E12, 419.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250218E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 19.85, "minX": 1.71250158E12, "maxY": 423.93333333333334, "series": [{"data": [[1.712502E12, 398.3], [1.7125017E12, 415.6166666666667], [1.71250218E12, 19.85], [1.71250188E12, 415.3666666666667], [1.71250158E12, 415.45], [1.71250206E12, 407.0], [1.71250176E12, 422.85], [1.71250194E12, 423.93333333333334], [1.71250164E12, 418.7], [1.71250212E12, 412.76666666666665], [1.71250182E12, 419.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250218E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 19.85, "minX": 1.71250158E12, "maxY": 423.93333333333334, "series": [{"data": [[1.712502E12, 398.3], [1.7125017E12, 415.6166666666667], [1.71250218E12, 19.85], [1.71250188E12, 415.3666666666667], [1.71250158E12, 415.45], [1.71250206E12, 407.0], [1.71250176E12, 422.85], [1.71250194E12, 423.93333333333334], [1.71250164E12, 418.7], [1.71250212E12, 412.76666666666665], [1.71250182E12, 419.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250218E12, "title": "Total Transactions Per Second"}},
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

