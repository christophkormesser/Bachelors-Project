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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 3273.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 3.0], [0.3, 3.0], [0.4, 3.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 9.0], [4.7, 9.0], [4.8, 9.0], [4.9, 9.0], [5.0, 9.0], [5.1, 9.0], [5.2, 9.0], [5.3, 9.0], [5.4, 10.0], [5.5, 10.0], [5.6, 10.0], [5.7, 10.0], [5.8, 10.0], [5.9, 10.0], [6.0, 10.0], [6.1, 10.0], [6.2, 10.0], [6.3, 11.0], [6.4, 11.0], [6.5, 11.0], [6.6, 11.0], [6.7, 11.0], [6.8, 11.0], [6.9, 11.0], [7.0, 11.0], [7.1, 11.0], [7.2, 12.0], [7.3, 12.0], [7.4, 12.0], [7.5, 12.0], [7.6, 12.0], [7.7, 12.0], [7.8, 12.0], [7.9, 12.0], [8.0, 12.0], [8.1, 13.0], [8.2, 13.0], [8.3, 13.0], [8.4, 13.0], [8.5, 13.0], [8.6, 13.0], [8.7, 13.0], [8.8, 13.0], [8.9, 13.0], [9.0, 14.0], [9.1, 14.0], [9.2, 14.0], [9.3, 14.0], [9.4, 14.0], [9.5, 14.0], [9.6, 14.0], [9.7, 14.0], [9.8, 14.0], [9.9, 15.0], [10.0, 15.0], [10.1, 15.0], [10.2, 15.0], [10.3, 15.0], [10.4, 15.0], [10.5, 15.0], [10.6, 15.0], [10.7, 15.0], [10.8, 15.0], [10.9, 16.0], [11.0, 16.0], [11.1, 16.0], [11.2, 16.0], [11.3, 16.0], [11.4, 16.0], [11.5, 16.0], [11.6, 16.0], [11.7, 17.0], [11.8, 17.0], [11.9, 17.0], [12.0, 17.0], [12.1, 17.0], [12.2, 17.0], [12.3, 17.0], [12.4, 17.0], [12.5, 17.0], [12.6, 17.0], [12.7, 18.0], [12.8, 18.0], [12.9, 18.0], [13.0, 18.0], [13.1, 18.0], [13.2, 18.0], [13.3, 18.0], [13.4, 18.0], [13.5, 19.0], [13.6, 19.0], [13.7, 19.0], [13.8, 19.0], [13.9, 19.0], [14.0, 19.0], [14.1, 19.0], [14.2, 19.0], [14.3, 19.0], [14.4, 20.0], [14.5, 20.0], [14.6, 20.0], [14.7, 20.0], [14.8, 20.0], [14.9, 20.0], [15.0, 20.0], [15.1, 20.0], [15.2, 21.0], [15.3, 21.0], [15.4, 21.0], [15.5, 21.0], [15.6, 21.0], [15.7, 21.0], [15.8, 21.0], [15.9, 21.0], [16.0, 22.0], [16.1, 22.0], [16.2, 22.0], [16.3, 22.0], [16.4, 22.0], [16.5, 22.0], [16.6, 22.0], [16.7, 22.0], [16.8, 23.0], [16.9, 23.0], [17.0, 23.0], [17.1, 23.0], [17.2, 23.0], [17.3, 23.0], [17.4, 23.0], [17.5, 23.0], [17.6, 24.0], [17.7, 24.0], [17.8, 24.0], [17.9, 24.0], [18.0, 24.0], [18.1, 24.0], [18.2, 25.0], [18.3, 25.0], [18.4, 25.0], [18.5, 25.0], [18.6, 25.0], [18.7, 25.0], [18.8, 26.0], [18.9, 26.0], [19.0, 26.0], [19.1, 26.0], [19.2, 26.0], [19.3, 27.0], [19.4, 27.0], [19.5, 27.0], [19.6, 27.0], [19.7, 27.0], [19.8, 28.0], [19.9, 28.0], [20.0, 28.0], [20.1, 28.0], [20.2, 29.0], [20.3, 29.0], [20.4, 29.0], [20.5, 29.0], [20.6, 30.0], [20.7, 30.0], [20.8, 30.0], [20.9, 31.0], [21.0, 31.0], [21.1, 31.0], [21.2, 32.0], [21.3, 32.0], [21.4, 33.0], [21.5, 33.0], [21.6, 34.0], [21.7, 34.0], [21.8, 34.0], [21.9, 35.0], [22.0, 35.0], [22.1, 35.0], [22.2, 36.0], [22.3, 36.0], [22.4, 36.0], [22.5, 37.0], [22.6, 37.0], [22.7, 38.0], [22.8, 38.0], [22.9, 39.0], [23.0, 39.0], [23.1, 40.0], [23.2, 40.0], [23.3, 41.0], [23.4, 42.0], [23.5, 42.0], [23.6, 43.0], [23.7, 44.0], [23.8, 45.0], [23.9, 46.0], [24.0, 47.0], [24.1, 48.0], [24.2, 49.0], [24.3, 50.0], [24.4, 51.0], [24.5, 52.0], [24.6, 53.0], [24.7, 54.0], [24.8, 55.0], [24.9, 56.0], [25.0, 57.0], [25.1, 58.0], [25.2, 59.0], [25.3, 59.0], [25.4, 60.0], [25.5, 61.0], [25.6, 61.0], [25.7, 62.0], [25.8, 62.0], [25.9, 63.0], [26.0, 63.0], [26.1, 63.0], [26.2, 64.0], [26.3, 64.0], [26.4, 65.0], [26.5, 65.0], [26.6, 65.0], [26.7, 66.0], [26.8, 66.0], [26.9, 67.0], [27.0, 67.0], [27.1, 67.0], [27.2, 68.0], [27.3, 68.0], [27.4, 68.0], [27.5, 69.0], [27.6, 69.0], [27.7, 69.0], [27.8, 70.0], [27.9, 70.0], [28.0, 70.0], [28.1, 71.0], [28.2, 71.0], [28.3, 71.0], [28.4, 71.0], [28.5, 72.0], [28.6, 72.0], [28.7, 72.0], [28.8, 72.0], [28.9, 72.0], [29.0, 73.0], [29.1, 73.0], [29.2, 73.0], [29.3, 73.0], [29.4, 73.0], [29.5, 73.0], [29.6, 74.0], [29.7, 74.0], [29.8, 74.0], [29.9, 74.0], [30.0, 74.0], [30.1, 74.0], [30.2, 75.0], [30.3, 75.0], [30.4, 75.0], [30.5, 75.0], [30.6, 75.0], [30.7, 75.0], [30.8, 75.0], [30.9, 76.0], [31.0, 76.0], [31.1, 76.0], [31.2, 76.0], [31.3, 76.0], [31.4, 76.0], [31.5, 76.0], [31.6, 76.0], [31.7, 77.0], [31.8, 77.0], [31.9, 77.0], [32.0, 77.0], [32.1, 77.0], [32.2, 77.0], [32.3, 77.0], [32.4, 78.0], [32.5, 78.0], [32.6, 78.0], [32.7, 78.0], [32.8, 78.0], [32.9, 78.0], [33.0, 78.0], [33.1, 78.0], [33.2, 79.0], [33.3, 79.0], [33.4, 79.0], [33.5, 79.0], [33.6, 79.0], [33.7, 79.0], [33.8, 79.0], [33.9, 79.0], [34.0, 80.0], [34.1, 80.0], [34.2, 80.0], [34.3, 80.0], [34.4, 80.0], [34.5, 80.0], [34.6, 80.0], [34.7, 80.0], [34.8, 81.0], [34.9, 81.0], [35.0, 81.0], [35.1, 81.0], [35.2, 81.0], [35.3, 81.0], [35.4, 81.0], [35.5, 82.0], [35.6, 82.0], [35.7, 82.0], [35.8, 82.0], [35.9, 82.0], [36.0, 82.0], [36.1, 83.0], [36.2, 83.0], [36.3, 83.0], [36.4, 83.0], [36.5, 83.0], [36.6, 83.0], [36.7, 84.0], [36.8, 84.0], [36.9, 84.0], [37.0, 84.0], [37.1, 84.0], [37.2, 84.0], [37.3, 85.0], [37.4, 85.0], [37.5, 85.0], [37.6, 85.0], [37.7, 85.0], [37.8, 85.0], [37.9, 86.0], [38.0, 86.0], [38.1, 86.0], [38.2, 86.0], [38.3, 86.0], [38.4, 86.0], [38.5, 86.0], [38.6, 87.0], [38.7, 87.0], [38.8, 87.0], [38.9, 87.0], [39.0, 87.0], [39.1, 87.0], [39.2, 88.0], [39.3, 88.0], [39.4, 88.0], [39.5, 88.0], [39.6, 88.0], [39.7, 88.0], [39.8, 89.0], [39.9, 89.0], [40.0, 89.0], [40.1, 89.0], [40.2, 89.0], [40.3, 89.0], [40.4, 90.0], [40.5, 90.0], [40.6, 90.0], [40.7, 90.0], [40.8, 90.0], [40.9, 90.0], [41.0, 91.0], [41.1, 91.0], [41.2, 91.0], [41.3, 91.0], [41.4, 91.0], [41.5, 91.0], [41.6, 92.0], [41.7, 92.0], [41.8, 92.0], [41.9, 92.0], [42.0, 92.0], [42.1, 92.0], [42.2, 93.0], [42.3, 93.0], [42.4, 93.0], [42.5, 93.0], [42.6, 93.0], [42.7, 93.0], [42.8, 93.0], [42.9, 94.0], [43.0, 94.0], [43.1, 94.0], [43.2, 94.0], [43.3, 94.0], [43.4, 94.0], [43.5, 94.0], [43.6, 95.0], [43.7, 95.0], [43.8, 95.0], [43.9, 95.0], [44.0, 95.0], [44.1, 95.0], [44.2, 95.0], [44.3, 95.0], [44.4, 96.0], [44.5, 96.0], [44.6, 96.0], [44.7, 96.0], [44.8, 96.0], [44.9, 96.0], [45.0, 96.0], [45.1, 96.0], [45.2, 96.0], [45.3, 97.0], [45.4, 97.0], [45.5, 97.0], [45.6, 97.0], [45.7, 97.0], [45.8, 97.0], [45.9, 97.0], [46.0, 97.0], [46.1, 97.0], [46.2, 97.0], [46.3, 98.0], [46.4, 98.0], [46.5, 98.0], [46.6, 98.0], [46.7, 98.0], [46.8, 98.0], [46.9, 98.0], [47.0, 98.0], [47.1, 98.0], [47.2, 98.0], [47.3, 98.0], [47.4, 99.0], [47.5, 99.0], [47.6, 99.0], [47.7, 99.0], [47.8, 99.0], [47.9, 99.0], [48.0, 99.0], [48.1, 99.0], [48.2, 99.0], [48.3, 99.0], [48.4, 99.0], [48.5, 100.0], [48.6, 100.0], [48.7, 100.0], [48.8, 100.0], [48.9, 100.0], [49.0, 100.0], [49.1, 100.0], [49.2, 100.0], [49.3, 100.0], [49.4, 100.0], [49.5, 100.0], [49.6, 100.0], [49.7, 100.0], [49.8, 101.0], [49.9, 101.0], [50.0, 101.0], [50.1, 101.0], [50.2, 101.0], [50.3, 101.0], [50.4, 101.0], [50.5, 101.0], [50.6, 101.0], [50.7, 101.0], [50.8, 101.0], [50.9, 102.0], [51.0, 102.0], [51.1, 102.0], [51.2, 102.0], [51.3, 102.0], [51.4, 102.0], [51.5, 102.0], [51.6, 102.0], [51.7, 102.0], [51.8, 102.0], [51.9, 103.0], [52.0, 103.0], [52.1, 103.0], [52.2, 103.0], [52.3, 103.0], [52.4, 103.0], [52.5, 103.0], [52.6, 103.0], [52.7, 103.0], [52.8, 104.0], [52.9, 104.0], [53.0, 104.0], [53.1, 104.0], [53.2, 104.0], [53.3, 104.0], [53.4, 104.0], [53.5, 105.0], [53.6, 105.0], [53.7, 105.0], [53.8, 105.0], [53.9, 105.0], [54.0, 105.0], [54.1, 106.0], [54.2, 106.0], [54.3, 106.0], [54.4, 106.0], [54.5, 106.0], [54.6, 107.0], [54.7, 107.0], [54.8, 107.0], [54.9, 107.0], [55.0, 108.0], [55.1, 108.0], [55.2, 108.0], [55.3, 109.0], [55.4, 109.0], [55.5, 109.0], [55.6, 110.0], [55.7, 110.0], [55.8, 110.0], [55.9, 111.0], [56.0, 111.0], [56.1, 111.0], [56.2, 112.0], [56.3, 112.0], [56.4, 113.0], [56.5, 113.0], [56.6, 114.0], [56.7, 115.0], [56.8, 115.0], [56.9, 116.0], [57.0, 117.0], [57.1, 118.0], [57.2, 118.0], [57.3, 119.0], [57.4, 120.0], [57.5, 121.0], [57.6, 122.0], [57.7, 122.0], [57.8, 123.0], [57.9, 124.0], [58.0, 124.0], [58.1, 125.0], [58.2, 126.0], [58.3, 126.0], [58.4, 127.0], [58.5, 128.0], [58.6, 129.0], [58.7, 130.0], [58.8, 133.0], [58.9, 136.0], [59.0, 139.0], [59.1, 143.0], [59.2, 152.0], [59.3, 157.0], [59.4, 159.0], [59.5, 161.0], [59.6, 163.0], [59.7, 164.0], [59.8, 166.0], [59.9, 167.0], [60.0, 168.0], [60.1, 170.0], [60.2, 171.0], [60.3, 172.0], [60.4, 172.0], [60.5, 173.0], [60.6, 174.0], [60.7, 175.0], [60.8, 175.0], [60.9, 176.0], [61.0, 176.0], [61.1, 177.0], [61.2, 178.0], [61.3, 178.0], [61.4, 179.0], [61.5, 180.0], [61.6, 181.0], [61.7, 182.0], [61.8, 183.0], [61.9, 184.0], [62.0, 184.0], [62.1, 185.0], [62.2, 186.0], [62.3, 186.0], [62.4, 187.0], [62.5, 187.0], [62.6, 188.0], [62.7, 188.0], [62.8, 189.0], [62.9, 189.0], [63.0, 190.0], [63.1, 190.0], [63.2, 191.0], [63.3, 191.0], [63.4, 191.0], [63.5, 192.0], [63.6, 192.0], [63.7, 192.0], [63.8, 192.0], [63.9, 193.0], [64.0, 193.0], [64.1, 193.0], [64.2, 193.0], [64.3, 194.0], [64.4, 194.0], [64.5, 194.0], [64.6, 194.0], [64.7, 194.0], [64.8, 194.0], [64.9, 195.0], [65.0, 195.0], [65.1, 195.0], [65.2, 195.0], [65.3, 195.0], [65.4, 195.0], [65.5, 196.0], [65.6, 196.0], [65.7, 196.0], [65.8, 196.0], [65.9, 196.0], [66.0, 196.0], [66.1, 196.0], [66.2, 196.0], [66.3, 197.0], [66.4, 197.0], [66.5, 197.0], [66.6, 197.0], [66.7, 197.0], [66.8, 197.0], [66.9, 197.0], [67.0, 197.0], [67.1, 197.0], [67.2, 198.0], [67.3, 198.0], [67.4, 198.0], [67.5, 198.0], [67.6, 198.0], [67.7, 198.0], [67.8, 198.0], [67.9, 198.0], [68.0, 198.0], [68.1, 198.0], [68.2, 198.0], [68.3, 199.0], [68.4, 199.0], [68.5, 199.0], [68.6, 199.0], [68.7, 199.0], [68.8, 199.0], [68.9, 199.0], [69.0, 199.0], [69.1, 199.0], [69.2, 199.0], [69.3, 200.0], [69.4, 200.0], [69.5, 200.0], [69.6, 200.0], [69.7, 200.0], [69.8, 200.0], [69.9, 200.0], [70.0, 200.0], [70.1, 200.0], [70.2, 200.0], [70.3, 200.0], [70.4, 201.0], [70.5, 201.0], [70.6, 201.0], [70.7, 201.0], [70.8, 201.0], [70.9, 201.0], [71.0, 201.0], [71.1, 201.0], [71.2, 201.0], [71.3, 201.0], [71.4, 201.0], [71.5, 202.0], [71.6, 202.0], [71.7, 202.0], [71.8, 202.0], [71.9, 202.0], [72.0, 202.0], [72.1, 202.0], [72.2, 202.0], [72.3, 202.0], [72.4, 203.0], [72.5, 203.0], [72.6, 203.0], [72.7, 203.0], [72.8, 203.0], [72.9, 203.0], [73.0, 203.0], [73.1, 203.0], [73.2, 204.0], [73.3, 204.0], [73.4, 204.0], [73.5, 204.0], [73.6, 204.0], [73.7, 204.0], [73.8, 205.0], [73.9, 205.0], [74.0, 205.0], [74.1, 205.0], [74.2, 205.0], [74.3, 206.0], [74.4, 206.0], [74.5, 206.0], [74.6, 207.0], [74.7, 207.0], [74.8, 207.0], [74.9, 208.0], [75.0, 208.0], [75.1, 208.0], [75.2, 209.0], [75.3, 210.0], [75.4, 210.0], [75.5, 211.0], [75.6, 212.0], [75.7, 213.0], [75.8, 215.0], [75.9, 217.0], [76.0, 219.0], [76.1, 221.0], [76.2, 222.0], [76.3, 224.0], [76.4, 225.0], [76.5, 226.0], [76.6, 227.0], [76.7, 229.0], [76.8, 232.0], [76.9, 238.0], [77.0, 254.0], [77.1, 261.0], [77.2, 264.0], [77.3, 268.0], [77.4, 271.0], [77.5, 273.0], [77.6, 274.0], [77.7, 276.0], [77.8, 277.0], [77.9, 279.0], [78.0, 280.0], [78.1, 283.0], [78.2, 284.0], [78.3, 286.0], [78.4, 287.0], [78.5, 288.0], [78.6, 289.0], [78.7, 290.0], [78.8, 291.0], [78.9, 291.0], [79.0, 292.0], [79.1, 292.0], [79.2, 293.0], [79.3, 293.0], [79.4, 294.0], [79.5, 294.0], [79.6, 294.0], [79.7, 295.0], [79.8, 295.0], [79.9, 295.0], [80.0, 296.0], [80.1, 296.0], [80.2, 296.0], [80.3, 296.0], [80.4, 296.0], [80.5, 297.0], [80.6, 297.0], [80.7, 297.0], [80.8, 297.0], [80.9, 297.0], [81.0, 298.0], [81.1, 298.0], [81.2, 298.0], [81.3, 298.0], [81.4, 298.0], [81.5, 298.0], [81.6, 299.0], [81.7, 299.0], [81.8, 299.0], [81.9, 299.0], [82.0, 299.0], [82.1, 299.0], [82.2, 300.0], [82.3, 300.0], [82.4, 300.0], [82.5, 300.0], [82.6, 300.0], [82.7, 300.0], [82.8, 300.0], [82.9, 301.0], [83.0, 301.0], [83.1, 301.0], [83.2, 301.0], [83.3, 301.0], [83.4, 301.0], [83.5, 302.0], [83.6, 302.0], [83.7, 302.0], [83.8, 302.0], [83.9, 302.0], [84.0, 302.0], [84.1, 303.0], [84.2, 303.0], [84.3, 303.0], [84.4, 303.0], [84.5, 304.0], [84.6, 304.0], [84.7, 304.0], [84.8, 304.0], [84.9, 305.0], [85.0, 305.0], [85.1, 305.0], [85.2, 306.0], [85.3, 306.0], [85.4, 306.0], [85.5, 307.0], [85.6, 307.0], [85.7, 308.0], [85.8, 309.0], [85.9, 310.0], [86.0, 311.0], [86.1, 312.0], [86.2, 314.0], [86.3, 318.0], [86.4, 321.0], [86.5, 323.0], [86.6, 326.0], [86.7, 330.0], [86.8, 342.0], [86.9, 363.0], [87.0, 370.0], [87.1, 374.0], [87.2, 377.0], [87.3, 380.0], [87.4, 384.0], [87.5, 387.0], [87.6, 389.0], [87.7, 391.0], [87.8, 392.0], [87.9, 393.0], [88.0, 394.0], [88.1, 394.0], [88.2, 395.0], [88.3, 396.0], [88.4, 396.0], [88.5, 396.0], [88.6, 397.0], [88.7, 397.0], [88.8, 398.0], [88.9, 398.0], [89.0, 398.0], [89.1, 398.0], [89.2, 399.0], [89.3, 399.0], [89.4, 399.0], [89.5, 400.0], [89.6, 400.0], [89.7, 400.0], [89.8, 401.0], [89.9, 401.0], [90.0, 401.0], [90.1, 401.0], [90.2, 402.0], [90.3, 402.0], [90.4, 402.0], [90.5, 403.0], [90.6, 403.0], [90.7, 404.0], [90.8, 404.0], [90.9, 404.0], [91.0, 405.0], [91.1, 405.0], [91.2, 406.0], [91.3, 407.0], [91.4, 408.0], [91.5, 410.0], [91.6, 413.0], [91.7, 418.0], [91.8, 424.0], [91.9, 430.0], [92.0, 454.0], [92.1, 469.0], [92.2, 476.0], [92.3, 482.0], [92.4, 488.0], [92.5, 491.0], [92.6, 493.0], [92.7, 494.0], [92.8, 495.0], [92.9, 496.0], [93.0, 497.0], [93.1, 497.0], [93.2, 498.0], [93.3, 499.0], [93.4, 499.0], [93.5, 500.0], [93.6, 500.0], [93.7, 501.0], [93.8, 501.0], [93.9, 502.0], [94.0, 502.0], [94.1, 503.0], [94.2, 504.0], [94.3, 505.0], [94.4, 506.0], [94.5, 508.0], [94.6, 511.0], [94.7, 517.0], [94.8, 526.0], [94.9, 559.0], [95.0, 574.0], [95.1, 586.0], [95.2, 593.0], [95.3, 595.0], [95.4, 596.0], [95.5, 598.0], [95.6, 599.0], [95.7, 600.0], [95.8, 601.0], [95.9, 602.0], [96.0, 603.0], [96.1, 605.0], [96.2, 607.0], [96.3, 614.0], [96.4, 633.0], [96.5, 676.0], [96.6, 688.0], [96.7, 694.0], [96.8, 697.0], [96.9, 699.0], [97.0, 700.0], [97.1, 702.0], [97.2, 705.0], [97.3, 711.0], [97.4, 759.0], [97.5, 787.0], [97.6, 795.0], [97.7, 799.0], [97.8, 801.0], [97.9, 804.0], [98.0, 815.0], [98.1, 874.0], [98.2, 895.0], [98.3, 899.0], [98.4, 903.0], [98.5, 917.0], [98.6, 987.0], [98.7, 998.0], [98.8, 1001.0], [98.9, 1010.0], [99.0, 1083.0], [99.1, 1099.0], [99.2, 1106.0], [99.3, 1188.0], [99.4, 1202.0], [99.5, 1224.0], [99.6, 1302.0], [99.7, 1398.0], [99.8, 1502.0], [99.9, 1792.0], [100.0, 3273.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 154353.0, "series": [{"data": [[0.0, 154353.0], [600.0, 4102.0], [700.0, 2489.0], [800.0, 1796.0], [900.0, 1434.0], [1000.0, 1153.0], [1100.0, 821.0], [1200.0, 671.0], [1300.0, 403.0], [1400.0, 265.0], [1500.0, 157.0], [100.0, 66246.0], [1600.0, 123.0], [1700.0, 88.0], [1800.0, 74.0], [1900.0, 65.0], [2000.0, 42.0], [2100.0, 38.0], [2200.0, 27.0], [2300.0, 14.0], [2400.0, 6.0], [2500.0, 7.0], [2600.0, 14.0], [2800.0, 3.0], [2700.0, 4.0], [2900.0, 1.0], [200.0, 41001.0], [3200.0, 1.0], [300.0, 23148.0], [400.0, 12839.0], [500.0, 6970.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 651.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 298202.0, "series": [{"data": [[0.0, 298202.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 19502.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 651.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 31.66432578759462, "minX": 1.7123439E12, "maxY": 100.0, "series": [{"data": [[1.71234402E12, 100.0], [1.7123445E12, 99.65796067117151], [1.71234432E12, 100.0], [1.7123439E12, 31.66432578759462], [1.71234438E12, 100.0], [1.7123442E12, 100.0], [1.71234426E12, 100.0], [1.71234408E12, 100.0], [1.71234414E12, 100.0], [1.71234396E12, 94.43793806550265], [1.71234444E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123445E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3.2566037735849043, "minX": 1.0, "maxY": 361.6956521739132, "series": [{"data": [[2.0, 5.292857142857143], [3.0, 3.2566037735849043], [4.0, 3.794407894736842], [5.0, 4.300146412884332], [6.0, 4.160332541567694], [7.0, 4.966587112171838], [8.0, 5.47856315179606], [9.0, 7.392807745504837], [10.0, 18.823293172690768], [11.0, 11.15499254843517], [12.0, 27.769841269841262], [13.0, 11.266949152542372], [14.0, 14.504488330341132], [15.0, 45.79213483146067], [16.0, 52.502512562814054], [17.0, 56.29012345679014], [18.0, 53.1190476190476], [19.0, 57.072916666666664], [20.0, 110.40106951871658], [21.0, 61.671497584541044], [22.0, 69.97872340425538], [23.0, 76.60555555555555], [24.0, 79.34463276836154], [25.0, 73.07766990291262], [26.0, 63.142276422764155], [27.0, 66.69565217391303], [28.0, 84.53804347826082], [29.0, 84.72020725388596], [30.0, 98.88586956521739], [31.0, 87.89823008849554], [32.0, 126.16292134831463], [33.0, 41.30524344569283], [34.0, 31.338235294117684], [35.0, 105.38834951456315], [36.0, 111.81909547738688], [37.0, 102.31111111111113], [38.0, 119.79428571428575], [39.0, 121.29064039408864], [40.0, 39.58083832335329], [41.0, 25.100642398286954], [42.0, 79.55516014234875], [43.0, 128.63507109004735], [44.0, 178.1909090909091], [45.0, 128.97630331753555], [46.0, 152.10382513661207], [47.0, 38.32215568862277], [48.0, 32.549947423764465], [49.0, 84.81703470031549], [50.0, 161.37777777777785], [51.0, 162.55376344086025], [52.0, 184.49431818181822], [53.0, 179.29714285714283], [54.0, 37.16142131979694], [55.0, 34.622680412371125], [56.0, 68.3179487179487], [57.0, 180.59798994974864], [58.0, 179.30687830687827], [59.0, 188.04663212435233], [60.0, 129.74919614147916], [61.0, 33.182300884955716], [62.0, 44.588615782664924], [63.0, 179.39378238341965], [64.0, 189.2044198895027], [65.0, 190.80263157894728], [66.0, 192.88144329896915], [67.0, 115.89526184538661], [68.0, 79.56762295081968], [69.0, 216.63742690058476], [70.0, 260.65189873417734], [71.0, 186.94222222222223], [72.0, 250.1685393258426], [73.0, 252.78378378378375], [74.0, 104.3272058823531], [75.0, 83.2791327913279], [76.0, 294.6701030927834], [77.0, 192.9226519337017], [78.0, 235.0299145299145], [79.0, 250.40782122905048], [80.0, 244.03645833333323], [81.0, 74.01571946795656], [82.0, 118.51515151515144], [83.0, 190.57201646090542], [84.0, 298.1326530612243], [85.0, 218.69729729729733], [86.0, 273.6885245901639], [87.0, 251.3459915611812], [88.0, 85.9320809248556], [89.0, 105.9979591836735], [90.0, 212.20212765957447], [91.0, 263.1902654867255], [92.0, 323.72151898734165], [93.0, 280.0646766169151], [94.0, 243.6273764258556], [95.0, 65.91945606694553], [96.0, 159.08450704225342], [97.0, 212.43455497382206], [98.0, 361.6956521739132], [99.0, 350.0718232044199], [100.0, 191.12435029667802], [1.0, 7.760416666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[93.96618554758373, 179.1149817028108]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 25683.45, "minX": 1.7123439E12, "maxY": 190031.5, "series": [{"data": [[1.71234402E12, 172950.08333333334], [1.7123445E12, 77928.41666666667], [1.71234432E12, 189238.66666666666], [1.7123439E12, 150809.25], [1.71234438E12, 178121.25], [1.7123442E12, 178340.16666666666], [1.71234426E12, 190031.5], [1.71234408E12, 185635.41666666666], [1.71234414E12, 188723.91666666666], [1.71234396E12, 185712.16666666666], [1.71234444E12, 186108.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71234402E12, 57000.45], [1.7123445E12, 25683.45], [1.71234432E12, 62368.8], [1.7123439E12, 49703.55], [1.71234438E12, 58704.75], [1.7123442E12, 58776.9], [1.71234426E12, 62630.1], [1.71234408E12, 61181.25], [1.71234414E12, 62199.15], [1.71234396E12, 61206.6], [1.71234444E12, 61337.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123445E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 49.45635372121339, "minX": 1.7123439E12, "maxY": 205.69624713489083, "series": [{"data": [[1.71234402E12, 205.69624713489083], [1.7123445E12, 163.8725229671243], [1.71234432E12, 188.09210855427696], [1.7123439E12, 49.45635372121339], [1.71234438E12, 198.73127387477183], [1.7123442E12, 198.10118771149735], [1.71234426E12, 187.2125910704272], [1.71234408E12, 189.8237768924299], [1.71234414E12, 189.03806000564265], [1.71234396E12, 179.08933350324924], [1.71234444E12, 190.77914481004657]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123445E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 49.45250892541877, "minX": 1.7123439E12, "maxY": 205.6935445246488, "series": [{"data": [[1.71234402E12, 205.6935445246488], [1.7123445E12, 163.87085263077998], [1.71234432E12, 188.09073286643297], [1.7123439E12, 49.45250892541877], [1.71234438E12, 198.7292808503575], [1.7123442E12, 198.0992303098657], [1.71234426E12, 187.21059841833258], [1.71234408E12, 189.82157768924426], [1.71234414E12, 189.03592814371208], [1.71234396E12, 179.0864980247235], [1.71234444E12, 190.7769829915754]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123445E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.855348911142893E-4, "minX": 1.7123439E12, "maxY": 0.0019115585574104687, "series": [{"data": [[1.71234402E12, 0.0018131435804454189], [1.7123445E12, 0.0012147900690911905], [1.71234432E12, 0.001406953476738378], [1.7123439E12, 0.0018047000666954343], [1.71234438E12, 0.0013619000166085365], [1.7123442E12, 0.0015592860460486987], [1.71234426E12, 0.0013076779376050814], [1.71234408E12, 0.0018167330677290895], [1.71234414E12, 0.0014734928049659807], [1.71234396E12, 0.0019115585574104687], [1.71234444E12, 9.855348911142893E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123445E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.7123439E12, "maxY": 3273.0, "series": [{"data": [[1.71234402E12, 2196.0], [1.7123445E12, 2320.0], [1.71234432E12, 2680.0], [1.7123439E12, 503.0], [1.71234438E12, 2203.0], [1.7123442E12, 2619.0], [1.71234426E12, 2883.0], [1.71234408E12, 2800.0], [1.71234414E12, 2637.0], [1.71234396E12, 3273.0], [1.71234444E12, 2287.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71234402E12, 3.0], [1.7123445E12, 4.0], [1.71234432E12, 2.0], [1.7123439E12, 2.0], [1.71234438E12, 3.0], [1.7123442E12, 3.0], [1.71234426E12, 3.0], [1.71234408E12, 3.0], [1.71234414E12, 3.0], [1.71234396E12, 3.0], [1.71234444E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71234402E12, 495.0], [1.7123445E12, 378.8000000000011], [1.71234432E12, 413.0], [1.7123439E12, 187.0], [1.71234438E12, 493.0], [1.7123442E12, 404.0], [1.71234426E12, 405.0], [1.71234408E12, 402.0], [1.71234414E12, 404.0], [1.71234396E12, 401.0], [1.71234444E12, 418.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71234402E12, 1078.4200000000928], [1.7123445E12, 1200.0], [1.71234432E12, 1200.0], [1.7123439E12, 296.0], [1.71234438E12, 1103.9900000000016], [1.7123442E12, 1105.0], [1.71234426E12, 1095.0], [1.71234408E12, 1167.800000000032], [1.71234414E12, 1104.9900000000016], [1.71234396E12, 1098.0], [1.71234444E12, 1109.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71234402E12, 108.0], [1.7123445E12, 91.0], [1.71234432E12, 106.0], [1.7123439E12, 29.0], [1.71234438E12, 159.0], [1.7123442E12, 118.0], [1.71234426E12, 108.0], [1.71234408E12, 107.0], [1.71234414E12, 103.0], [1.71234396E12, 98.0], [1.71234444E12, 135.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71234402E12, 604.0], [1.7123445E12, 503.0], [1.71234432E12, 601.0], [1.7123439E12, 200.0], [1.71234438E12, 634.9000000000015], [1.7123442E12, 600.0], [1.71234426E12, 531.9500000000007], [1.71234408E12, 566.9500000000007], [1.71234414E12, 596.0], [1.71234396E12, 597.0], [1.71234444E12, 612.9500000000007]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123445E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3.0, "minX": 164.0, "maxY": 586.0, "series": [{"data": [[164.0, 586.0], [165.0, 204.0], [168.0, 503.0], [172.0, 206.5], [190.0, 477.0], [201.0, 201.0], [225.0, 301.0], [230.0, 295.0], [233.0, 301.0], [239.0, 211.0], [242.0, 291.0], [240.0, 302.0], [246.0, 297.0], [247.0, 305.0], [241.0, 196.0], [249.0, 301.0], [255.0, 299.0], [250.0, 205.0], [248.0, 100.0], [251.0, 211.0], [254.0, 176.0], [268.0, 296.5], [259.0, 201.0], [258.0, 286.5], [267.0, 298.0], [270.0, 205.5], [263.0, 202.0], [269.0, 296.0], [265.0, 207.0], [264.0, 198.5], [262.0, 306.5], [260.0, 206.0], [261.0, 103.0], [286.0, 297.0], [283.0, 297.0], [281.0, 209.0], [282.0, 212.0], [272.0, 209.0], [277.0, 204.0], [276.0, 202.0], [280.0, 194.5], [284.0, 303.0], [287.0, 203.0], [275.0, 272.0], [273.0, 203.0], [274.0, 296.0], [300.0, 287.0], [296.0, 203.0], [301.0, 203.0], [303.0, 203.0], [302.0, 301.0], [298.0, 198.0], [299.0, 203.0], [289.0, 208.0], [291.0, 298.0], [290.0, 282.0], [295.0, 285.0], [294.0, 172.5], [293.0, 267.0], [292.0, 279.0], [297.0, 215.0], [288.0, 202.0], [317.0, 204.0], [313.0, 99.0], [315.0, 270.0], [314.0, 211.0], [312.0, 126.0], [304.0, 165.0], [310.0, 212.0], [309.0, 201.0], [308.0, 299.0], [311.0, 223.0], [306.0, 202.0], [319.0, 199.0], [318.0, 220.5], [307.0, 282.0], [305.0, 236.0], [316.0, 291.0], [323.0, 202.0], [320.0, 199.0], [328.0, 201.0], [335.0, 182.0], [334.0, 200.0], [333.0, 290.0], [332.0, 283.0], [329.0, 201.0], [330.0, 206.5], [331.0, 205.0], [322.0, 201.0], [321.0, 230.0], [326.0, 271.0], [327.0, 298.0], [324.0, 296.0], [325.0, 296.0], [338.0, 227.0], [345.0, 195.0], [347.0, 194.0], [336.0, 196.0], [337.0, 290.5], [341.0, 204.0], [340.0, 202.0], [349.0, 221.0], [339.0, 302.0], [348.0, 300.0], [344.0, 201.0], [351.0, 214.0], [350.0, 203.5], [342.0, 214.0], [343.0, 103.0], [346.0, 208.0], [353.0, 276.0], [360.0, 200.0], [358.0, 199.0], [361.0, 201.0], [363.0, 204.0], [356.0, 275.0], [355.0, 185.0], [364.0, 199.0], [365.0, 282.0], [366.0, 202.0], [367.0, 296.0], [357.0, 281.0], [354.0, 215.0], [352.0, 202.0], [359.0, 296.0], [380.0, 207.0], [383.0, 204.0], [379.0, 271.0], [373.0, 204.0], [371.0, 292.0], [372.0, 203.0], [368.0, 205.5], [375.0, 219.0], [399.0, 202.0], [392.0, 296.0], [396.0, 202.5], [384.0, 293.0], [395.0, 134.0], [402.0, 86.0], [412.0, 192.0], [405.0, 193.0], [409.0, 201.0], [413.0, 200.0], [403.0, 294.0], [418.0, 169.0], [421.0, 191.0], [422.0, 193.0], [417.0, 294.0], [420.0, 203.5], [430.0, 178.0], [426.0, 188.0], [431.0, 195.0], [443.0, 96.0], [438.0, 107.0], [456.0, 191.0], [454.0, 190.0], [451.0, 199.0], [452.0, 130.0], [460.0, 200.0], [466.0, 102.0], [479.0, 197.0], [471.0, 199.0], [470.0, 193.0], [473.0, 198.0], [477.0, 200.0], [490.0, 121.0], [480.0, 161.0], [491.0, 194.0], [505.0, 186.0], [500.0, 100.0], [497.0, 174.0], [503.0, 107.0], [509.0, 196.0], [502.0, 199.5], [520.0, 135.5], [517.0, 184.5], [529.0, 107.0], [512.0, 198.0], [516.0, 174.0], [540.0, 183.0], [521.0, 98.0], [537.0, 105.0], [571.0, 80.0], [569.0, 102.0], [564.0, 197.0], [575.0, 105.0], [568.0, 101.0], [555.0, 132.0], [565.0, 103.0], [559.0, 104.0], [600.0, 136.0], [582.0, 101.0], [606.0, 109.0], [594.0, 99.0], [593.0, 106.0], [585.0, 112.0], [577.0, 124.0], [603.0, 105.0], [592.0, 94.0], [620.0, 101.0], [608.0, 197.0], [645.0, 14.0], [653.0, 72.0], [660.0, 103.0], [656.0, 100.0], [646.0, 103.5], [692.0, 20.0], [693.0, 98.0], [678.0, 100.0], [694.0, 90.5], [706.0, 8.0], [717.0, 85.0], [710.0, 81.0], [723.0, 80.0], [759.0, 86.0], [744.0, 81.0], [764.0, 93.0], [746.0, 89.0], [760.0, 93.0], [748.0, 96.0], [753.0, 98.0], [739.0, 95.0], [785.0, 70.0], [768.0, 92.0], [771.0, 79.0], [774.0, 95.5], [789.0, 82.0], [782.0, 90.0], [788.0, 99.0], [804.0, 88.0], [816.0, 6.0], [819.0, 3.0], [821.0, 89.0], [803.0, 78.0], [800.0, 84.0], [824.0, 92.0], [828.0, 90.0], [825.0, 93.0], [814.0, 83.0], [811.0, 70.0], [850.0, 78.0], [846.0, 89.0], [847.0, 81.0], [838.0, 89.0], [836.0, 75.5], [844.0, 84.0], [855.0, 80.0], [874.0, 74.5], [868.0, 89.0], [866.0, 91.0], [895.0, 77.0], [882.0, 91.0], [873.0, 79.0], [867.0, 98.0], [927.0, 80.0], [916.0, 88.5], [913.0, 85.0], [944.0, 87.0], [956.0, 78.5], [932.0, 82.0], [954.0, 92.0], [986.0, 85.0], [960.0, 69.5], [992.0, 78.0], [995.0, 71.0], [1007.0, 87.0], [994.0, 83.0], [1001.0, 68.0], [1020.0, 80.0], [997.0, 75.0], [1052.0, 74.0], [1072.0, 74.5], [1060.0, 78.0], [1043.0, 78.0], [1025.0, 77.0], [1035.0, 72.0], [1069.0, 75.0], [1065.0, 83.0], [1091.0, 82.0], [1122.0, 5.0], [1107.0, 4.0], [1105.0, 85.0], [1126.0, 71.0], [1129.0, 80.0], [1090.0, 77.0], [1116.0, 74.0], [1115.0, 78.0], [1101.0, 83.0], [1146.0, 83.0], [1148.0, 75.0], [1114.0, 76.0], [1109.0, 83.0], [1200.0, 80.0], [1163.0, 5.0], [1204.0, 80.0], [1209.0, 79.0], [1208.0, 62.0], [1158.0, 69.0], [1161.0, 77.0], [1170.0, 77.0], [1210.0, 85.0], [1196.0, 83.0], [1195.0, 81.0], [1273.0, 75.0], [1233.0, 80.0], [1265.0, 80.0], [1237.0, 62.0], [1247.0, 78.0], [1284.0, 4.0], [1298.0, 77.0], [1306.0, 62.0], [1325.0, 72.0], [1403.0, 73.0], [1384.0, 72.0], [1422.0, 7.0], [1469.0, 68.0], [1453.0, 62.0], [1413.0, 76.0], [1527.0, 75.0], [1529.0, 70.0], [1494.0, 62.0], [1490.0, 49.0], [1473.0, 59.0], [1530.0, 74.0], [1571.0, 19.0], [1538.0, 66.0], [1549.0, 64.0], [1565.0, 79.0], [1612.0, 20.0], [1627.0, 21.0], [1632.0, 68.0], [1637.0, 77.0], [1631.0, 66.0], [1621.0, 66.0], [1721.0, 76.0], [1677.0, 65.0], [1703.0, 65.0], [1678.0, 51.0], [1712.0, 58.0], [1742.0, 59.0], [1817.0, 59.0], [1830.0, 61.0], [1905.0, 46.0], [1989.0, 48.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1989.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3.0, "minX": 164.0, "maxY": 586.0, "series": [{"data": [[164.0, 586.0], [165.0, 204.0], [168.0, 503.0], [172.0, 206.5], [190.0, 477.0], [201.0, 201.0], [225.0, 301.0], [230.0, 295.0], [233.0, 301.0], [239.0, 211.0], [242.0, 291.0], [240.0, 302.0], [246.0, 297.0], [247.0, 305.0], [241.0, 196.0], [249.0, 301.0], [255.0, 299.0], [250.0, 205.0], [248.0, 100.0], [251.0, 211.0], [254.0, 176.0], [268.0, 296.5], [259.0, 201.0], [258.0, 286.5], [267.0, 298.0], [270.0, 205.5], [263.0, 202.0], [269.0, 296.0], [265.0, 207.0], [264.0, 198.5], [262.0, 306.5], [260.0, 206.0], [261.0, 103.0], [286.0, 297.0], [283.0, 297.0], [281.0, 209.0], [282.0, 212.0], [272.0, 209.0], [277.0, 204.0], [276.0, 202.0], [280.0, 194.5], [284.0, 303.0], [287.0, 203.0], [275.0, 272.0], [273.0, 203.0], [274.0, 296.0], [300.0, 287.0], [296.0, 203.0], [301.0, 203.0], [303.0, 203.0], [302.0, 301.0], [298.0, 198.0], [299.0, 203.0], [289.0, 208.0], [291.0, 298.0], [290.0, 282.0], [295.0, 285.0], [294.0, 172.5], [293.0, 267.0], [292.0, 279.0], [297.0, 215.0], [288.0, 202.0], [317.0, 204.0], [313.0, 99.0], [315.0, 270.0], [314.0, 211.0], [312.0, 126.0], [304.0, 165.0], [310.0, 212.0], [309.0, 201.0], [308.0, 299.0], [311.0, 223.0], [306.0, 202.0], [319.0, 199.0], [318.0, 220.5], [307.0, 282.0], [305.0, 236.0], [316.0, 291.0], [323.0, 202.0], [320.0, 199.0], [328.0, 201.0], [335.0, 182.0], [334.0, 200.0], [333.0, 290.0], [332.0, 283.0], [329.0, 201.0], [330.0, 206.5], [331.0, 205.0], [322.0, 201.0], [321.0, 230.0], [326.0, 271.0], [327.0, 298.0], [324.0, 296.0], [325.0, 296.0], [338.0, 227.0], [345.0, 195.0], [347.0, 194.0], [336.0, 196.0], [337.0, 290.5], [341.0, 204.0], [340.0, 202.0], [349.0, 221.0], [339.0, 302.0], [348.0, 300.0], [344.0, 201.0], [351.0, 214.0], [350.0, 203.5], [342.0, 214.0], [343.0, 103.0], [346.0, 208.0], [353.0, 276.0], [360.0, 200.0], [358.0, 199.0], [361.0, 201.0], [363.0, 204.0], [356.0, 275.0], [355.0, 185.0], [364.0, 199.0], [365.0, 282.0], [366.0, 202.0], [367.0, 296.0], [357.0, 281.0], [354.0, 215.0], [352.0, 202.0], [359.0, 296.0], [380.0, 207.0], [383.0, 204.0], [379.0, 271.0], [373.0, 204.0], [371.0, 292.0], [372.0, 203.0], [368.0, 205.5], [375.0, 219.0], [399.0, 202.0], [392.0, 296.0], [396.0, 202.5], [384.0, 293.0], [395.0, 134.0], [402.0, 86.0], [412.0, 192.0], [405.0, 193.0], [409.0, 201.0], [413.0, 200.0], [403.0, 294.0], [418.0, 169.0], [421.0, 191.0], [422.0, 193.0], [417.0, 294.0], [420.0, 203.5], [430.0, 178.0], [426.0, 188.0], [431.0, 195.0], [443.0, 96.0], [438.0, 107.0], [456.0, 191.0], [454.0, 190.0], [451.0, 199.0], [452.0, 130.0], [460.0, 200.0], [466.0, 102.0], [479.0, 197.0], [471.0, 199.0], [470.0, 193.0], [473.0, 198.0], [477.0, 200.0], [490.0, 121.0], [480.0, 161.0], [491.0, 194.0], [505.0, 186.0], [500.0, 100.0], [497.0, 174.0], [503.0, 107.0], [509.0, 196.0], [502.0, 199.5], [520.0, 135.5], [517.0, 184.5], [529.0, 107.0], [512.0, 198.0], [516.0, 174.0], [540.0, 183.0], [521.0, 98.0], [537.0, 105.0], [571.0, 80.0], [569.0, 102.0], [564.0, 197.0], [575.0, 105.0], [568.0, 101.0], [555.0, 132.0], [565.0, 103.0], [559.0, 104.0], [600.0, 136.0], [582.0, 101.0], [606.0, 109.0], [594.0, 99.0], [593.0, 106.0], [585.0, 112.0], [577.0, 124.0], [603.0, 105.0], [592.0, 94.0], [620.0, 101.0], [608.0, 197.0], [645.0, 14.0], [653.0, 72.0], [660.0, 103.0], [656.0, 100.0], [646.0, 103.5], [692.0, 20.0], [693.0, 98.0], [678.0, 100.0], [694.0, 90.5], [706.0, 8.0], [717.0, 85.0], [710.0, 81.0], [723.0, 80.0], [759.0, 86.0], [744.0, 81.0], [764.0, 93.0], [746.0, 89.0], [760.0, 93.0], [748.0, 96.0], [753.0, 98.0], [739.0, 95.0], [785.0, 70.0], [768.0, 92.0], [771.0, 79.0], [774.0, 95.5], [789.0, 82.0], [782.0, 90.0], [788.0, 99.0], [804.0, 88.0], [816.0, 6.0], [819.0, 3.0], [821.0, 89.0], [803.0, 78.0], [800.0, 84.0], [824.0, 92.0], [828.0, 90.0], [825.0, 93.0], [814.0, 83.0], [811.0, 70.0], [850.0, 78.0], [846.0, 89.0], [847.0, 81.0], [838.0, 89.0], [836.0, 75.5], [844.0, 84.0], [855.0, 80.0], [874.0, 74.5], [868.0, 89.0], [866.0, 91.0], [895.0, 77.0], [882.0, 91.0], [873.0, 79.0], [867.0, 98.0], [927.0, 80.0], [916.0, 88.5], [913.0, 85.0], [944.0, 87.0], [956.0, 78.5], [932.0, 82.0], [954.0, 92.0], [986.0, 85.0], [960.0, 69.5], [992.0, 78.0], [995.0, 71.0], [1007.0, 87.0], [994.0, 83.0], [1001.0, 68.0], [1020.0, 80.0], [997.0, 75.0], [1052.0, 74.0], [1072.0, 74.5], [1060.0, 78.0], [1043.0, 78.0], [1025.0, 77.0], [1035.0, 72.0], [1069.0, 75.0], [1065.0, 83.0], [1091.0, 82.0], [1122.0, 5.0], [1107.0, 4.0], [1105.0, 85.0], [1126.0, 71.0], [1129.0, 80.0], [1090.0, 77.0], [1116.0, 74.0], [1115.0, 78.0], [1101.0, 83.0], [1146.0, 83.0], [1148.0, 75.0], [1114.0, 76.0], [1109.0, 83.0], [1200.0, 80.0], [1163.0, 5.0], [1204.0, 80.0], [1209.0, 79.0], [1208.0, 62.0], [1158.0, 69.0], [1161.0, 77.0], [1170.0, 77.0], [1210.0, 85.0], [1196.0, 83.0], [1195.0, 81.0], [1273.0, 75.0], [1233.0, 80.0], [1265.0, 80.0], [1237.0, 62.0], [1247.0, 78.0], [1284.0, 4.0], [1298.0, 77.0], [1306.0, 62.0], [1325.0, 72.0], [1403.0, 73.0], [1384.0, 72.0], [1422.0, 7.0], [1469.0, 68.0], [1453.0, 62.0], [1413.0, 76.0], [1527.0, 75.0], [1529.0, 70.0], [1494.0, 62.0], [1490.0, 49.0], [1473.0, 59.0], [1530.0, 74.0], [1571.0, 19.0], [1538.0, 66.0], [1549.0, 64.0], [1565.0, 79.0], [1612.0, 20.0], [1627.0, 21.0], [1632.0, 68.0], [1637.0, 77.0], [1631.0, 66.0], [1621.0, 66.0], [1721.0, 76.0], [1677.0, 65.0], [1703.0, 65.0], [1678.0, 51.0], [1712.0, 58.0], [1742.0, 59.0], [1817.0, 59.0], [1830.0, 61.0], [1905.0, 46.0], [1989.0, 48.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1989.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 217.85, "minX": 1.7123439E12, "maxY": 535.3, "series": [{"data": [[1.71234402E12, 487.18333333333334], [1.7123445E12, 217.85], [1.71234432E12, 533.0666666666667], [1.7123439E12, 425.9], [1.71234438E12, 501.75], [1.7123442E12, 502.3666666666667], [1.71234426E12, 535.3], [1.71234408E12, 522.9166666666666], [1.71234414E12, 531.6166666666667], [1.71234396E12, 523.7166666666667], [1.71234444E12, 524.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123445E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 219.51666666666668, "minX": 1.7123439E12, "maxY": 535.3, "series": [{"data": [[1.71234402E12, 487.18333333333334], [1.7123445E12, 219.51666666666668], [1.71234432E12, 533.0666666666667], [1.7123439E12, 424.81666666666666], [1.71234438E12, 501.75], [1.7123442E12, 502.3666666666667], [1.71234426E12, 535.3], [1.71234408E12, 522.9166666666666], [1.71234414E12, 531.6166666666667], [1.71234396E12, 523.1333333333333], [1.71234444E12, 524.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123445E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 219.51666666666668, "minX": 1.7123439E12, "maxY": 535.3, "series": [{"data": [[1.71234402E12, 487.18333333333334], [1.7123445E12, 219.51666666666668], [1.71234432E12, 533.0666666666667], [1.7123439E12, 424.81666666666666], [1.71234438E12, 501.75], [1.7123442E12, 502.3666666666667], [1.71234426E12, 535.3], [1.71234408E12, 522.9166666666666], [1.71234414E12, 531.6166666666667], [1.71234396E12, 523.1333333333333], [1.71234444E12, 524.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123445E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 219.51666666666668, "minX": 1.7123439E12, "maxY": 535.3, "series": [{"data": [[1.71234402E12, 487.18333333333334], [1.7123445E12, 219.51666666666668], [1.71234432E12, 533.0666666666667], [1.7123439E12, 424.81666666666666], [1.71234438E12, 501.75], [1.7123442E12, 502.3666666666667], [1.71234426E12, 535.3], [1.71234408E12, 522.9166666666666], [1.71234414E12, 531.6166666666667], [1.71234396E12, 523.1333333333333], [1.71234444E12, 524.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123445E12, "title": "Total Transactions Per Second"}},
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

