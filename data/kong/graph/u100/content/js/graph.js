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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 4293.0, "series": [{"data": [[0.0, 4.0], [0.1, 9.0], [0.2, 10.0], [0.3, 11.0], [0.4, 12.0], [0.5, 12.0], [0.6, 13.0], [0.7, 13.0], [0.8, 14.0], [0.9, 14.0], [1.0, 15.0], [1.1, 15.0], [1.2, 15.0], [1.3, 16.0], [1.4, 16.0], [1.5, 16.0], [1.6, 17.0], [1.7, 17.0], [1.8, 17.0], [1.9, 17.0], [2.0, 18.0], [2.1, 18.0], [2.2, 18.0], [2.3, 18.0], [2.4, 19.0], [2.5, 19.0], [2.6, 19.0], [2.7, 19.0], [2.8, 19.0], [2.9, 20.0], [3.0, 20.0], [3.1, 20.0], [3.2, 20.0], [3.3, 20.0], [3.4, 21.0], [3.5, 21.0], [3.6, 21.0], [3.7, 21.0], [3.8, 21.0], [3.9, 22.0], [4.0, 22.0], [4.1, 22.0], [4.2, 22.0], [4.3, 23.0], [4.4, 23.0], [4.5, 23.0], [4.6, 23.0], [4.7, 23.0], [4.8, 24.0], [4.9, 24.0], [5.0, 24.0], [5.1, 24.0], [5.2, 25.0], [5.3, 25.0], [5.4, 25.0], [5.5, 25.0], [5.6, 26.0], [5.7, 26.0], [5.8, 26.0], [5.9, 26.0], [6.0, 27.0], [6.1, 27.0], [6.2, 27.0], [6.3, 28.0], [6.4, 28.0], [6.5, 28.0], [6.6, 28.0], [6.7, 29.0], [6.8, 29.0], [6.9, 30.0], [7.0, 30.0], [7.1, 30.0], [7.2, 31.0], [7.3, 31.0], [7.4, 32.0], [7.5, 32.0], [7.6, 33.0], [7.7, 33.0], [7.8, 34.0], [7.9, 35.0], [8.0, 36.0], [8.1, 37.0], [8.2, 38.0], [8.3, 40.0], [8.4, 42.0], [8.5, 44.0], [8.6, 46.0], [8.7, 48.0], [8.8, 50.0], [8.9, 51.0], [9.0, 52.0], [9.1, 54.0], [9.2, 55.0], [9.3, 57.0], [9.4, 58.0], [9.5, 60.0], [9.6, 62.0], [9.7, 64.0], [9.8, 67.0], [9.9, 69.0], [10.0, 71.0], [10.1, 72.0], [10.2, 73.0], [10.3, 74.0], [10.4, 75.0], [10.5, 75.0], [10.6, 76.0], [10.7, 77.0], [10.8, 77.0], [10.9, 77.0], [11.0, 78.0], [11.1, 78.0], [11.2, 78.0], [11.3, 79.0], [11.4, 79.0], [11.5, 79.0], [11.6, 79.0], [11.7, 80.0], [11.8, 80.0], [11.9, 80.0], [12.0, 80.0], [12.1, 81.0], [12.2, 81.0], [12.3, 81.0], [12.4, 81.0], [12.5, 82.0], [12.6, 82.0], [12.7, 82.0], [12.8, 82.0], [12.9, 82.0], [13.0, 82.0], [13.1, 83.0], [13.2, 83.0], [13.3, 83.0], [13.4, 83.0], [13.5, 83.0], [13.6, 83.0], [13.7, 84.0], [13.8, 84.0], [13.9, 84.0], [14.0, 84.0], [14.1, 84.0], [14.2, 84.0], [14.3, 84.0], [14.4, 85.0], [14.5, 85.0], [14.6, 85.0], [14.7, 85.0], [14.8, 85.0], [14.9, 85.0], [15.0, 85.0], [15.1, 86.0], [15.2, 86.0], [15.3, 86.0], [15.4, 86.0], [15.5, 86.0], [15.6, 86.0], [15.7, 86.0], [15.8, 86.0], [15.9, 86.0], [16.0, 87.0], [16.1, 87.0], [16.2, 87.0], [16.3, 87.0], [16.4, 87.0], [16.5, 87.0], [16.6, 87.0], [16.7, 87.0], [16.8, 87.0], [16.9, 88.0], [17.0, 88.0], [17.1, 88.0], [17.2, 88.0], [17.3, 88.0], [17.4, 88.0], [17.5, 88.0], [17.6, 88.0], [17.7, 88.0], [17.8, 88.0], [17.9, 89.0], [18.0, 89.0], [18.1, 89.0], [18.2, 89.0], [18.3, 89.0], [18.4, 89.0], [18.5, 89.0], [18.6, 89.0], [18.7, 89.0], [18.8, 89.0], [18.9, 89.0], [19.0, 89.0], [19.1, 90.0], [19.2, 90.0], [19.3, 90.0], [19.4, 90.0], [19.5, 90.0], [19.6, 90.0], [19.7, 90.0], [19.8, 90.0], [19.9, 90.0], [20.0, 90.0], [20.1, 90.0], [20.2, 91.0], [20.3, 91.0], [20.4, 91.0], [20.5, 91.0], [20.6, 91.0], [20.7, 91.0], [20.8, 91.0], [20.9, 91.0], [21.0, 91.0], [21.1, 91.0], [21.2, 91.0], [21.3, 91.0], [21.4, 91.0], [21.5, 92.0], [21.6, 92.0], [21.7, 92.0], [21.8, 92.0], [21.9, 92.0], [22.0, 92.0], [22.1, 92.0], [22.2, 92.0], [22.3, 92.0], [22.4, 92.0], [22.5, 92.0], [22.6, 92.0], [22.7, 92.0], [22.8, 93.0], [22.9, 93.0], [23.0, 93.0], [23.1, 93.0], [23.2, 93.0], [23.3, 93.0], [23.4, 93.0], [23.5, 93.0], [23.6, 93.0], [23.7, 93.0], [23.8, 93.0], [23.9, 93.0], [24.0, 93.0], [24.1, 94.0], [24.2, 94.0], [24.3, 94.0], [24.4, 94.0], [24.5, 94.0], [24.6, 94.0], [24.7, 94.0], [24.8, 94.0], [24.9, 94.0], [25.0, 94.0], [25.1, 94.0], [25.2, 94.0], [25.3, 94.0], [25.4, 94.0], [25.5, 94.0], [25.6, 95.0], [25.7, 95.0], [25.8, 95.0], [25.9, 95.0], [26.0, 95.0], [26.1, 95.0], [26.2, 95.0], [26.3, 95.0], [26.4, 95.0], [26.5, 95.0], [26.6, 95.0], [26.7, 95.0], [26.8, 95.0], [26.9, 95.0], [27.0, 95.0], [27.1, 96.0], [27.2, 96.0], [27.3, 96.0], [27.4, 96.0], [27.5, 96.0], [27.6, 96.0], [27.7, 96.0], [27.8, 96.0], [27.9, 96.0], [28.0, 96.0], [28.1, 96.0], [28.2, 96.0], [28.3, 96.0], [28.4, 96.0], [28.5, 96.0], [28.6, 96.0], [28.7, 97.0], [28.8, 97.0], [28.9, 97.0], [29.0, 97.0], [29.1, 97.0], [29.2, 97.0], [29.3, 97.0], [29.4, 97.0], [29.5, 97.0], [29.6, 97.0], [29.7, 97.0], [29.8, 97.0], [29.9, 97.0], [30.0, 97.0], [30.1, 97.0], [30.2, 97.0], [30.3, 98.0], [30.4, 98.0], [30.5, 98.0], [30.6, 98.0], [30.7, 98.0], [30.8, 98.0], [30.9, 98.0], [31.0, 98.0], [31.1, 98.0], [31.2, 98.0], [31.3, 98.0], [31.4, 98.0], [31.5, 98.0], [31.6, 98.0], [31.7, 98.0], [31.8, 98.0], [31.9, 99.0], [32.0, 99.0], [32.1, 99.0], [32.2, 99.0], [32.3, 99.0], [32.4, 99.0], [32.5, 99.0], [32.6, 99.0], [32.7, 99.0], [32.8, 99.0], [32.9, 99.0], [33.0, 99.0], [33.1, 99.0], [33.2, 99.0], [33.3, 99.0], [33.4, 99.0], [33.5, 99.0], [33.6, 100.0], [33.7, 100.0], [33.8, 100.0], [33.9, 100.0], [34.0, 100.0], [34.1, 100.0], [34.2, 100.0], [34.3, 100.0], [34.4, 100.0], [34.5, 100.0], [34.6, 100.0], [34.7, 100.0], [34.8, 100.0], [34.9, 100.0], [35.0, 100.0], [35.1, 100.0], [35.2, 101.0], [35.3, 101.0], [35.4, 101.0], [35.5, 101.0], [35.6, 101.0], [35.7, 101.0], [35.8, 101.0], [35.9, 101.0], [36.0, 101.0], [36.1, 101.0], [36.2, 101.0], [36.3, 101.0], [36.4, 101.0], [36.5, 101.0], [36.6, 101.0], [36.7, 101.0], [36.8, 102.0], [36.9, 102.0], [37.0, 102.0], [37.1, 102.0], [37.2, 102.0], [37.3, 102.0], [37.4, 102.0], [37.5, 102.0], [37.6, 102.0], [37.7, 102.0], [37.8, 102.0], [37.9, 102.0], [38.0, 102.0], [38.1, 102.0], [38.2, 102.0], [38.3, 103.0], [38.4, 103.0], [38.5, 103.0], [38.6, 103.0], [38.7, 103.0], [38.8, 103.0], [38.9, 103.0], [39.0, 103.0], [39.1, 103.0], [39.2, 103.0], [39.3, 103.0], [39.4, 103.0], [39.5, 103.0], [39.6, 103.0], [39.7, 103.0], [39.8, 104.0], [39.9, 104.0], [40.0, 104.0], [40.1, 104.0], [40.2, 104.0], [40.3, 104.0], [40.4, 104.0], [40.5, 104.0], [40.6, 104.0], [40.7, 104.0], [40.8, 104.0], [40.9, 104.0], [41.0, 104.0], [41.1, 104.0], [41.2, 105.0], [41.3, 105.0], [41.4, 105.0], [41.5, 105.0], [41.6, 105.0], [41.7, 105.0], [41.8, 105.0], [41.9, 105.0], [42.0, 105.0], [42.1, 105.0], [42.2, 105.0], [42.3, 105.0], [42.4, 105.0], [42.5, 106.0], [42.6, 106.0], [42.7, 106.0], [42.8, 106.0], [42.9, 106.0], [43.0, 106.0], [43.1, 106.0], [43.2, 106.0], [43.3, 106.0], [43.4, 106.0], [43.5, 106.0], [43.6, 106.0], [43.7, 107.0], [43.8, 107.0], [43.9, 107.0], [44.0, 107.0], [44.1, 107.0], [44.2, 107.0], [44.3, 107.0], [44.4, 107.0], [44.5, 107.0], [44.6, 107.0], [44.7, 108.0], [44.8, 108.0], [44.9, 108.0], [45.0, 108.0], [45.1, 108.0], [45.2, 108.0], [45.3, 108.0], [45.4, 108.0], [45.5, 108.0], [45.6, 108.0], [45.7, 108.0], [45.8, 109.0], [45.9, 109.0], [46.0, 109.0], [46.1, 109.0], [46.2, 109.0], [46.3, 109.0], [46.4, 109.0], [46.5, 109.0], [46.6, 109.0], [46.7, 110.0], [46.8, 110.0], [46.9, 110.0], [47.0, 110.0], [47.1, 110.0], [47.2, 110.0], [47.3, 110.0], [47.4, 110.0], [47.5, 110.0], [47.6, 111.0], [47.7, 111.0], [47.8, 111.0], [47.9, 111.0], [48.0, 111.0], [48.1, 111.0], [48.2, 111.0], [48.3, 112.0], [48.4, 112.0], [48.5, 112.0], [48.6, 112.0], [48.7, 112.0], [48.8, 112.0], [48.9, 112.0], [49.0, 113.0], [49.1, 113.0], [49.2, 113.0], [49.3, 113.0], [49.4, 113.0], [49.5, 113.0], [49.6, 114.0], [49.7, 114.0], [49.8, 114.0], [49.9, 114.0], [50.0, 114.0], [50.1, 114.0], [50.2, 115.0], [50.3, 115.0], [50.4, 115.0], [50.5, 115.0], [50.6, 116.0], [50.7, 116.0], [50.8, 116.0], [50.9, 116.0], [51.0, 116.0], [51.1, 117.0], [51.2, 117.0], [51.3, 117.0], [51.4, 118.0], [51.5, 118.0], [51.6, 118.0], [51.7, 119.0], [51.8, 119.0], [51.9, 120.0], [52.0, 120.0], [52.1, 120.0], [52.2, 121.0], [52.3, 122.0], [52.4, 122.0], [52.5, 123.0], [52.6, 124.0], [52.7, 125.0], [52.8, 126.0], [52.9, 128.0], [53.0, 130.0], [53.1, 133.0], [53.2, 137.0], [53.3, 140.0], [53.4, 144.0], [53.5, 148.0], [53.6, 151.0], [53.7, 156.0], [53.8, 159.0], [53.9, 162.0], [54.0, 164.0], [54.1, 166.0], [54.2, 167.0], [54.3, 169.0], [54.4, 169.0], [54.5, 170.0], [54.6, 171.0], [54.7, 172.0], [54.8, 172.0], [54.9, 173.0], [55.0, 174.0], [55.1, 174.0], [55.2, 175.0], [55.3, 175.0], [55.4, 176.0], [55.5, 176.0], [55.6, 177.0], [55.7, 177.0], [55.8, 178.0], [55.9, 178.0], [56.0, 179.0], [56.1, 179.0], [56.2, 179.0], [56.3, 180.0], [56.4, 180.0], [56.5, 180.0], [56.6, 181.0], [56.7, 181.0], [56.8, 182.0], [56.9, 182.0], [57.0, 182.0], [57.1, 183.0], [57.2, 183.0], [57.3, 183.0], [57.4, 183.0], [57.5, 184.0], [57.6, 184.0], [57.7, 184.0], [57.8, 185.0], [57.9, 185.0], [58.0, 185.0], [58.1, 186.0], [58.2, 186.0], [58.3, 186.0], [58.4, 186.0], [58.5, 187.0], [58.6, 187.0], [58.7, 187.0], [58.8, 188.0], [58.9, 188.0], [59.0, 188.0], [59.1, 188.0], [59.2, 189.0], [59.3, 189.0], [59.4, 189.0], [59.5, 189.0], [59.6, 189.0], [59.7, 190.0], [59.8, 190.0], [59.9, 190.0], [60.0, 190.0], [60.1, 191.0], [60.2, 191.0], [60.3, 191.0], [60.4, 191.0], [60.5, 191.0], [60.6, 192.0], [60.7, 192.0], [60.8, 192.0], [60.9, 192.0], [61.0, 192.0], [61.1, 193.0], [61.2, 193.0], [61.3, 193.0], [61.4, 193.0], [61.5, 193.0], [61.6, 194.0], [61.7, 194.0], [61.8, 194.0], [61.9, 194.0], [62.0, 194.0], [62.1, 194.0], [62.2, 195.0], [62.3, 195.0], [62.4, 195.0], [62.5, 195.0], [62.6, 195.0], [62.7, 195.0], [62.8, 196.0], [62.9, 196.0], [63.0, 196.0], [63.1, 196.0], [63.2, 196.0], [63.3, 196.0], [63.4, 197.0], [63.5, 197.0], [63.6, 197.0], [63.7, 197.0], [63.8, 197.0], [63.9, 197.0], [64.0, 198.0], [64.1, 198.0], [64.2, 198.0], [64.3, 198.0], [64.4, 198.0], [64.5, 198.0], [64.6, 198.0], [64.7, 199.0], [64.8, 199.0], [64.9, 199.0], [65.0, 199.0], [65.1, 199.0], [65.2, 199.0], [65.3, 200.0], [65.4, 200.0], [65.5, 200.0], [65.6, 200.0], [65.7, 200.0], [65.8, 200.0], [65.9, 200.0], [66.0, 201.0], [66.1, 201.0], [66.2, 201.0], [66.3, 201.0], [66.4, 201.0], [66.5, 201.0], [66.6, 202.0], [66.7, 202.0], [66.8, 202.0], [66.9, 202.0], [67.0, 202.0], [67.1, 202.0], [67.2, 203.0], [67.3, 203.0], [67.4, 203.0], [67.5, 203.0], [67.6, 203.0], [67.7, 204.0], [67.8, 204.0], [67.9, 204.0], [68.0, 204.0], [68.1, 204.0], [68.2, 205.0], [68.3, 205.0], [68.4, 205.0], [68.5, 205.0], [68.6, 206.0], [68.7, 206.0], [68.8, 206.0], [68.9, 206.0], [69.0, 207.0], [69.1, 207.0], [69.2, 207.0], [69.3, 208.0], [69.4, 208.0], [69.5, 208.0], [69.6, 209.0], [69.7, 209.0], [69.8, 209.0], [69.9, 210.0], [70.0, 210.0], [70.1, 211.0], [70.2, 212.0], [70.3, 212.0], [70.4, 213.0], [70.5, 214.0], [70.6, 215.0], [70.7, 216.0], [70.8, 217.0], [70.9, 218.0], [71.0, 220.0], [71.1, 222.0], [71.2, 225.0], [71.3, 232.0], [71.4, 247.0], [71.5, 265.0], [71.6, 273.0], [71.7, 276.0], [71.8, 278.0], [71.9, 279.0], [72.0, 281.0], [72.1, 282.0], [72.2, 283.0], [72.3, 284.0], [72.4, 285.0], [72.5, 286.0], [72.6, 287.0], [72.7, 288.0], [72.8, 288.0], [72.9, 289.0], [73.0, 289.0], [73.1, 290.0], [73.2, 291.0], [73.3, 291.0], [73.4, 292.0], [73.5, 292.0], [73.6, 292.0], [73.7, 293.0], [73.8, 293.0], [73.9, 294.0], [74.0, 294.0], [74.1, 294.0], [74.2, 295.0], [74.3, 295.0], [74.4, 295.0], [74.5, 296.0], [74.6, 296.0], [74.7, 296.0], [74.8, 296.0], [74.9, 297.0], [75.0, 297.0], [75.1, 297.0], [75.2, 298.0], [75.3, 298.0], [75.4, 298.0], [75.5, 298.0], [75.6, 299.0], [75.7, 299.0], [75.8, 299.0], [75.9, 299.0], [76.0, 300.0], [76.1, 300.0], [76.2, 300.0], [76.3, 300.0], [76.4, 301.0], [76.5, 301.0], [76.6, 301.0], [76.7, 301.0], [76.8, 302.0], [76.9, 302.0], [77.0, 302.0], [77.1, 302.0], [77.2, 303.0], [77.3, 303.0], [77.4, 303.0], [77.5, 304.0], [77.6, 304.0], [77.7, 304.0], [77.8, 305.0], [77.9, 305.0], [78.0, 305.0], [78.1, 306.0], [78.2, 306.0], [78.3, 306.0], [78.4, 307.0], [78.5, 308.0], [78.6, 308.0], [78.7, 309.0], [78.8, 309.0], [78.9, 310.0], [79.0, 311.0], [79.1, 312.0], [79.2, 313.0], [79.3, 314.0], [79.4, 315.0], [79.5, 317.0], [79.6, 318.0], [79.7, 321.0], [79.8, 325.0], [79.9, 332.0], [80.0, 365.0], [80.1, 375.0], [80.2, 379.0], [80.3, 382.0], [80.4, 383.0], [80.5, 385.0], [80.6, 386.0], [80.7, 388.0], [80.8, 389.0], [80.9, 390.0], [81.0, 391.0], [81.1, 392.0], [81.2, 392.0], [81.3, 393.0], [81.4, 393.0], [81.5, 394.0], [81.6, 394.0], [81.7, 395.0], [81.8, 395.0], [81.9, 396.0], [82.0, 396.0], [82.1, 396.0], [82.2, 397.0], [82.3, 397.0], [82.4, 397.0], [82.5, 398.0], [82.6, 398.0], [82.7, 398.0], [82.8, 399.0], [82.9, 399.0], [83.0, 399.0], [83.1, 399.0], [83.2, 400.0], [83.3, 400.0], [83.4, 400.0], [83.5, 401.0], [83.6, 401.0], [83.7, 401.0], [83.8, 402.0], [83.9, 402.0], [84.0, 402.0], [84.1, 403.0], [84.2, 403.0], [84.3, 404.0], [84.4, 404.0], [84.5, 404.0], [84.6, 405.0], [84.7, 405.0], [84.8, 406.0], [84.9, 407.0], [85.0, 407.0], [85.1, 408.0], [85.2, 409.0], [85.3, 410.0], [85.4, 411.0], [85.5, 413.0], [85.6, 414.0], [85.7, 417.0], [85.8, 420.0], [85.9, 423.0], [86.0, 432.0], [86.1, 470.0], [86.2, 478.0], [86.3, 482.0], [86.4, 484.0], [86.5, 486.0], [86.6, 488.0], [86.7, 490.0], [86.8, 491.0], [86.9, 492.0], [87.0, 493.0], [87.1, 494.0], [87.2, 494.0], [87.3, 495.0], [87.4, 496.0], [87.5, 496.0], [87.6, 497.0], [87.7, 497.0], [87.8, 498.0], [87.9, 498.0], [88.0, 499.0], [88.1, 499.0], [88.2, 500.0], [88.3, 500.0], [88.4, 501.0], [88.5, 501.0], [88.6, 502.0], [88.7, 502.0], [88.8, 503.0], [88.9, 504.0], [89.0, 504.0], [89.1, 505.0], [89.2, 506.0], [89.3, 507.0], [89.4, 508.0], [89.5, 509.0], [89.6, 510.0], [89.7, 512.0], [89.8, 514.0], [89.9, 517.0], [90.0, 520.0], [90.1, 528.0], [90.2, 570.0], [90.3, 580.0], [90.4, 585.0], [90.5, 588.0], [90.6, 591.0], [90.7, 592.0], [90.8, 594.0], [90.9, 595.0], [91.0, 596.0], [91.1, 597.0], [91.2, 598.0], [91.3, 599.0], [91.4, 599.0], [91.5, 600.0], [91.6, 601.0], [91.7, 601.0], [91.8, 602.0], [91.9, 603.0], [92.0, 604.0], [92.1, 605.0], [92.2, 606.0], [92.3, 608.0], [92.4, 610.0], [92.5, 612.0], [92.6, 615.0], [92.7, 621.0], [92.8, 637.0], [92.9, 681.0], [93.0, 686.0], [93.1, 691.0], [93.2, 693.0], [93.3, 695.0], [93.4, 697.0], [93.5, 698.0], [93.6, 699.0], [93.7, 700.0], [93.8, 701.0], [93.9, 702.0], [94.0, 703.0], [94.1, 705.0], [94.2, 707.0], [94.3, 709.0], [94.4, 712.0], [94.5, 717.0], [94.6, 735.0], [94.7, 782.0], [94.8, 789.0], [94.9, 793.0], [95.0, 795.0], [95.1, 797.0], [95.2, 799.0], [95.3, 800.0], [95.4, 802.0], [95.5, 804.0], [95.6, 806.0], [95.7, 809.0], [95.8, 815.0], [95.9, 828.0], [96.0, 885.0], [96.1, 893.0], [96.2, 896.0], [96.3, 899.0], [96.4, 901.0], [96.5, 904.0], [96.6, 907.0], [96.7, 913.0], [96.8, 975.0], [96.9, 991.0], [97.0, 996.0], [97.1, 999.0], [97.2, 1002.0], [97.3, 1005.0], [97.4, 1011.0], [97.5, 1076.0], [97.6, 1094.0], [97.7, 1099.0], [97.8, 1103.0], [97.9, 1113.0], [98.0, 1188.0], [98.1, 1198.0], [98.2, 1203.0], [98.3, 1214.0], [98.4, 1293.0], [98.5, 1300.0], [98.6, 1308.0], [98.7, 1388.0], [98.8, 1400.0], [98.9, 1413.0], [99.0, 1496.0], [99.1, 1512.0], [99.2, 1598.0], [99.3, 1624.0], [99.4, 1703.0], [99.5, 1795.0], [99.6, 1895.0], [99.7, 1996.0], [99.8, 2099.0], [99.9, 2304.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 82844.0, "series": [{"data": [[0.0, 82844.0], [600.0, 5541.0], [700.0, 3914.0], [800.0, 2673.0], [900.0, 1891.0], [1000.0, 1505.0], [1100.0, 1050.0], [1200.0, 879.0], [1300.0, 748.0], [1400.0, 582.0], [1500.0, 456.0], [100.0, 78558.0], [1600.0, 407.0], [1700.0, 349.0], [1800.0, 237.0], [1900.0, 241.0], [2000.0, 218.0], [2100.0, 130.0], [2300.0, 66.0], [2200.0, 93.0], [2400.0, 48.0], [2500.0, 35.0], [2600.0, 27.0], [2700.0, 40.0], [2800.0, 16.0], [2900.0, 8.0], [3000.0, 8.0], [3100.0, 4.0], [200.0, 26504.0], [3200.0, 9.0], [3300.0, 3.0], [3400.0, 2.0], [3500.0, 1.0], [4200.0, 1.0], [300.0, 17564.0], [400.0, 12396.0], [500.0, 8208.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2377.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 218396.0, "series": [{"data": [[0.0, 218396.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 26483.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2377.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 96.12283575105263, "minX": 1.71250218E12, "maxY": 100.0, "series": [{"data": [[1.71250248E12, 100.0], [1.71250218E12, 96.12283575105263], [1.71250266E12, 100.0], [1.71250236E12, 100.0], [1.71250254E12, 100.0], [1.71250224E12, 100.0], [1.71250272E12, 100.0], [1.71250242E12, 100.0], [1.7125026E12, 100.0], [1.7125023E12, 100.0], [1.71250278E12, 98.74491300501323]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250278E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 11.5, "minX": 5.0, "maxY": 1792.0, "series": [{"data": [[5.0, 1627.0], [7.0, 52.142857142857146], [8.0, 13.214285714285715], [9.0, 12.166666666666668], [10.0, 11.5], [11.0, 16.666666666666668], [12.0, 20.3448275862069], [13.0, 14.866666666666664], [14.0, 13.5], [15.0, 33.80952380952381], [16.0, 16.684210526315788], [17.0, 14.9375], [18.0, 44.36363636363636], [19.0, 19.94444444444444], [20.0, 23.61111111111111], [21.0, 48.0], [22.0, 39.85], [23.0, 14.120000000000001], [25.0, 48.06060606060606], [26.0, 14.62962962962963], [27.0, 23.15384615384615], [28.0, 54.125], [29.0, 43.50000000000001], [30.0, 16.590909090909093], [31.0, 63.0], [32.0, 49.79166666666667], [33.0, 1342.1621621621618], [35.0, 71.40624999999999], [34.0, 1792.0], [36.0, 32.760000000000005], [38.0, 77.0], [39.0, 62.314814814814824], [40.0, 25.653846153846153], [42.0, 68.11904761904762], [43.0, 42.79166666666666], [45.0, 725.6000000000001], [46.0, 54.02127659574468], [48.0, 79.07692307692308], [49.0, 61.054545454545455], [50.0, 34.65517241379311], [52.0, 67.21739130434783], [53.0, 35.89743589743589], [55.0, 77.72093023255815], [56.0, 81.66666666666667], [57.0, 53.77142857142859], [58.0, 71.0], [59.0, 70.80487804878048], [60.0, 33.44444444444444], [61.0, 1774.25], [62.0, 154.3684210526316], [63.0, 68.34615384615384], [64.0, 40.0], [65.0, 88.0], [66.0, 87.55319148936171], [67.0, 1692.8], [69.0, 153.8292682926829], [70.0, 92.07142857142857], [71.0, 389.0], [68.0, 1590.0], [72.0, 141.4], [73.0, 141.61290322580643], [76.0, 199.03030303030306], [79.0, 176.89285714285714], [78.0, 208.0], [77.0, 232.5], [80.0, 207.0], [83.0, 148.83333333333334], [86.0, 241.15789473684208], [89.0, 296.99999999999994], [90.0, 175.22222222222223], [91.0, 130.07692307692307], [92.0, 149.0], [93.0, 305.875], [96.0, 440.63157894736844], [99.0, 196.75000000000003], [100.0, 242.64295368131934]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[99.64768903484637, 242.0237931536538]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7512.233333333334, "minX": 1.71250218E12, "maxY": 213096.18333333332, "series": [{"data": [[1.71250248E12, 209862.43333333332], [1.71250218E12, 178267.01666666666], [1.71250266E12, 208891.7], [1.71250236E12, 204648.9], [1.71250254E12, 198594.05], [1.71250224E12, 208320.38333333333], [1.71250272E12, 201293.3], [1.71250242E12, 213096.18333333332], [1.7125026E12, 204155.18333333332], [1.7125023E12, 207203.95], [1.71250278E12, 28285.516666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71250248E12, 55733.36666666667], [1.71250218E12, 47341.61666666667], [1.71250266E12, 55474.2], [1.71250236E12, 54344.3], [1.71250254E12, 52738.333333333336], [1.71250224E12, 55323.48333333333], [1.71250272E12, 53453.73333333333], [1.71250242E12, 56590.666666666664], [1.7125026E12, 54213.55], [1.7125023E12, 55028.9], [1.71250278E12, 7512.233333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250278E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 233.38289293403852, "minX": 1.71250218E12, "maxY": 248.64958413845244, "series": [{"data": [[1.71250248E12, 239.37181015979], [1.71250218E12, 238.72788956480971], [1.71250266E12, 240.9761590990762], [1.71250236E12, 245.3715299009409], [1.71250254E12, 248.64958413845244], [1.71250224E12, 238.85756617146558], [1.71250272E12, 246.77881387541822], [1.71250242E12, 233.38289293403852], [1.7125026E12, 246.8243707093827], [1.7125023E12, 241.64847020933837], [1.71250278E12, 242.15364199351245]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250278E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 233.3786259541977, "minX": 1.71250218E12, "maxY": 248.6448794421575, "series": [{"data": [[1.71250248E12, 239.36727879799716], [1.71250218E12, 238.7187646233048], [1.71250266E12, 240.9726847969334], [1.71250236E12, 245.36704577881014], [1.71250254E12, 248.6448794421575], [1.71250224E12, 238.85159972770478], [1.71250272E12, 246.7751668117206], [1.71250242E12, 233.3786259541977], [1.7125026E12, 246.8204478587771], [1.7125023E12, 241.64388083736037], [1.71250278E12, 242.14892362135123]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250278E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71250218E12, "maxY": 0.014553111839026578, "series": [{"data": [[1.71250248E12, 0.0024644248350425115], [1.71250218E12, 0.014553111839026578], [1.71250266E12, 0.0018769218481690033], [1.71250236E12, 0.003261179731767993], [1.71250254E12, 0.00205830462908511], [1.71250224E12, 0.003443719216754115], [1.71250272E12, 0.0022379709063782135], [1.71250242E12, 0.002583675866118604], [1.7125026E12, 0.002778685845047408], [1.7125023E12, 0.0024557165861513993], [1.71250278E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250278E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.71250218E12, "maxY": 4293.0, "series": [{"data": [[1.71250248E12, 2498.0], [1.71250218E12, 2715.0], [1.71250266E12, 3005.0], [1.71250236E12, 2993.0], [1.71250254E12, 3006.0], [1.71250224E12, 4293.0], [1.71250272E12, 2614.0], [1.71250242E12, 2789.0], [1.7125026E12, 2912.0], [1.7125023E12, 3527.0], [1.71250278E12, 2705.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71250248E12, 5.0], [1.71250218E12, 5.0], [1.71250266E12, 6.0], [1.71250236E12, 5.0], [1.71250254E12, 6.0], [1.71250224E12, 4.0], [1.71250272E12, 5.0], [1.71250242E12, 4.0], [1.7125026E12, 6.0], [1.7125023E12, 4.0], [1.71250278E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71250248E12, 593.0], [1.71250218E12, 595.0], [1.71250266E12, 587.0], [1.71250236E12, 503.0], [1.71250254E12, 577.0], [1.71250224E12, 498.0], [1.71250272E12, 511.0], [1.71250242E12, 508.0], [1.7125026E12, 581.0], [1.7125023E12, 504.0], [1.71250278E12, 522.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71250248E12, 1222.9900000000016], [1.71250218E12, 1288.9600000000064], [1.71250266E12, 1306.9900000000016], [1.71250236E12, 1309.0], [1.71250254E12, 1635.8300000000272], [1.71250224E12, 1598.9900000000016], [1.71250272E12, 1606.9900000000016], [1.71250242E12, 1395.9900000000016], [1.7125026E12, 1599.0], [1.7125023E12, 1586.9300000000112], [1.71250278E12, 1922.9999999999945]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71250248E12, 115.0], [1.71250218E12, 173.0], [1.71250266E12, 113.0], [1.71250236E12, 114.0], [1.71250254E12, 113.0], [1.71250224E12, 110.0], [1.71250272E12, 113.0], [1.71250242E12, 114.0], [1.7125026E12, 126.0], [1.7125023E12, 107.0], [1.71250278E12, 106.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71250248E12, 798.0], [1.71250218E12, 799.0], [1.71250266E12, 715.0], [1.71250236E12, 705.0], [1.71250254E12, 797.0], [1.71250224E12, 707.0], [1.71250272E12, 787.9500000000007], [1.71250242E12, 798.0], [1.7125026E12, 797.0], [1.7125023E12, 792.0], [1.71250278E12, 1001.3999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250278E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 38.0, "minX": 90.0, "maxY": 804.0, "series": [{"data": [[90.0, 307.0], [110.0, 401.5], [111.0, 782.0], [127.0, 203.0], [126.0, 210.0], [130.0, 201.0], [135.0, 504.0], [132.0, 279.5], [143.0, 376.0], [137.0, 398.5], [139.0, 389.0], [146.0, 401.5], [145.0, 286.0], [144.0, 504.5], [150.0, 804.0], [149.0, 505.0], [151.0, 200.0], [147.0, 505.0], [154.0, 294.5], [152.0, 402.0], [155.0, 344.0], [159.0, 494.0], [156.0, 396.0], [158.0, 488.0], [166.0, 403.0], [162.0, 497.0], [161.0, 397.0], [163.0, 383.5], [164.0, 605.5], [165.0, 280.0], [167.0, 404.0], [160.0, 207.0], [173.0, 494.5], [168.0, 399.5], [174.0, 400.0], [175.0, 296.0], [171.0, 484.0], [172.0, 300.0], [170.0, 446.5], [169.0, 408.0], [178.0, 295.0], [180.0, 419.5], [182.0, 400.0], [183.0, 400.5], [181.0, 188.0], [179.0, 413.0], [177.0, 294.5], [186.0, 396.0], [185.0, 407.0], [184.0, 314.0], [188.0, 400.0], [191.0, 408.0], [190.0, 296.0], [189.0, 391.0], [187.0, 406.0], [197.0, 392.0], [193.0, 304.0], [198.0, 398.5], [199.0, 394.0], [196.0, 403.0], [192.0, 308.5], [194.0, 309.0], [195.0, 300.0], [205.0, 403.0], [203.0, 302.0], [202.0, 391.0], [207.0, 310.0], [204.0, 201.0], [206.0, 409.0], [200.0, 499.0], [208.0, 345.5], [215.0, 404.0], [213.0, 398.0], [214.0, 313.0], [211.0, 386.0], [210.0, 301.0], [212.0, 401.0], [209.0, 218.0], [217.0, 394.0], [219.0, 393.5], [223.0, 414.0], [220.0, 400.0], [221.0, 304.0], [222.0, 389.0], [218.0, 309.0], [216.0, 394.5], [226.0, 391.5], [227.0, 306.0], [225.0, 416.5], [224.0, 307.0], [229.0, 312.0], [228.0, 299.5], [230.0, 399.0], [231.0, 303.0], [237.0, 301.0], [233.0, 296.0], [238.0, 310.0], [239.0, 309.5], [232.0, 315.0], [246.0, 317.5], [245.0, 399.5], [241.0, 299.0], [242.0, 405.0], [244.0, 211.0], [243.0, 396.0], [247.0, 392.5], [248.0, 60.0], [251.0, 217.0], [254.0, 303.0], [252.0, 385.0], [249.0, 379.0], [255.0, 313.0], [250.0, 208.0], [256.0, 326.5], [270.0, 293.5], [261.0, 387.0], [260.0, 303.0], [262.0, 308.0], [263.0, 407.0], [265.0, 284.0], [258.0, 295.0], [264.0, 301.0], [271.0, 300.0], [274.0, 296.5], [279.0, 201.0], [275.0, 323.0], [287.0, 308.0], [282.0, 315.0], [280.0, 199.0], [285.0, 297.0], [284.0, 299.0], [283.0, 183.0], [278.0, 250.5], [277.0, 232.0], [272.0, 302.0], [288.0, 295.5], [297.0, 210.0], [296.0, 209.0], [293.0, 207.0], [291.0, 203.0], [300.0, 399.0], [292.0, 298.0], [295.0, 212.0], [310.0, 303.0], [309.0, 210.0], [316.0, 380.5], [307.0, 195.0], [313.0, 198.0], [317.0, 191.0], [322.0, 197.0], [328.0, 202.0], [321.0, 302.0], [332.0, 300.5], [326.0, 302.5], [327.0, 189.0], [331.0, 194.0], [335.0, 192.0], [347.0, 204.0], [342.0, 188.5], [336.0, 203.0], [348.0, 294.0], [340.0, 201.0], [343.0, 179.0], [350.0, 202.5], [365.0, 191.0], [357.0, 192.0], [358.0, 178.0], [360.0, 165.0], [366.0, 186.0], [382.0, 174.0], [373.0, 199.0], [383.0, 177.0], [375.0, 293.0], [378.0, 208.0], [379.0, 187.0], [377.0, 281.0], [385.0, 122.0], [393.0, 195.0], [388.0, 213.5], [392.0, 166.5], [391.0, 149.0], [401.0, 190.0], [402.0, 112.5], [406.0, 198.0], [409.0, 179.0], [408.0, 107.0], [400.0, 176.0], [404.0, 178.0], [417.0, 193.0], [424.0, 113.5], [418.0, 303.0], [423.0, 192.0], [426.0, 167.0], [430.0, 175.0], [439.0, 115.0], [447.0, 197.0], [435.0, 198.0], [434.0, 173.0], [455.0, 110.0], [448.0, 116.0], [453.0, 205.0], [461.0, 106.0], [451.0, 116.0], [473.0, 183.0], [466.0, 183.0], [471.0, 112.0], [479.0, 100.0], [475.0, 184.0], [493.0, 108.0], [484.0, 96.0], [495.0, 114.0], [487.0, 113.0], [488.0, 106.0], [490.0, 106.0], [481.0, 286.0], [483.0, 196.0], [489.0, 115.0], [502.0, 95.0], [500.0, 112.0], [507.0, 99.0], [534.0, 113.5], [524.0, 111.0], [531.0, 114.0], [537.0, 101.0], [571.0, 105.0], [544.0, 121.0], [553.0, 122.0], [557.0, 98.0], [560.0, 102.0], [549.0, 102.0], [562.0, 100.0], [573.0, 109.0], [552.0, 103.0], [551.0, 104.0], [598.0, 101.0], [586.0, 103.0], [594.0, 108.0], [601.0, 111.0], [578.0, 165.0], [591.0, 105.0], [606.0, 106.0], [610.0, 112.0], [631.0, 100.0], [616.0, 98.0], [637.0, 98.0], [634.0, 98.0], [633.0, 100.0], [635.0, 100.0], [629.0, 108.0], [621.0, 110.0], [620.0, 109.0], [664.0, 102.0], [641.0, 106.0], [642.0, 109.0], [663.0, 100.0], [653.0, 101.0], [654.0, 101.0], [643.0, 109.0], [661.0, 103.0], [668.0, 100.0], [667.0, 102.0], [701.0, 100.0], [673.0, 96.0], [696.0, 101.0], [682.0, 104.0], [700.0, 104.0], [729.0, 38.0], [733.0, 102.0], [709.0, 97.0], [724.0, 101.0], [722.0, 95.0], [727.0, 99.0], [718.0, 104.0], [717.0, 104.0], [705.0, 102.0], [720.0, 99.0], [734.0, 97.0], [708.0, 97.0], [711.0, 106.0], [748.0, 99.0], [751.0, 97.0], [744.0, 94.0], [767.0, 101.0], [740.0, 98.0], [738.0, 100.0], [754.0, 100.0], [753.0, 100.0], [747.0, 124.0], [782.0, 104.0], [770.0, 103.0], [776.0, 103.0], [779.0, 100.0], [790.0, 97.0], [797.0, 104.0], [791.0, 108.0], [772.0, 100.0], [798.0, 100.0], [807.0, 101.0], [810.0, 101.0], [820.0, 97.0], [812.0, 98.0], [817.0, 101.0], [809.0, 97.0], [816.0, 97.0], [826.0, 103.0], [814.0, 99.0], [800.0, 102.0], [821.0, 100.0], [854.0, 101.0], [832.0, 99.0], [848.0, 99.0], [853.0, 93.0], [857.0, 100.0], [837.0, 102.0], [856.0, 100.0], [847.0, 98.0], [877.0, 104.0], [885.0, 99.0], [886.0, 102.0], [874.0, 96.0], [890.0, 98.0], [872.0, 103.0], [867.0, 100.0], [880.0, 105.0], [912.0, 98.0], [927.0, 100.0], [921.0, 98.0], [901.0, 96.0], [909.0, 99.0], [916.0, 97.0], [913.0, 101.0], [917.0, 99.0], [915.0, 98.0], [919.0, 99.0], [938.0, 100.0], [957.0, 99.0], [956.0, 98.0], [932.0, 103.0], [939.0, 100.0], [941.0, 98.0], [948.0, 99.0], [942.0, 99.0], [977.0, 97.0], [983.0, 98.0], [984.0, 94.0], [966.0, 101.0], [979.0, 93.0], [988.0, 98.0], [963.0, 98.0], [1019.0, 94.0], [1002.0, 93.0], [998.0, 93.0], [1023.0, 100.0], [995.0, 99.0], [1018.0, 97.0], [1072.0, 94.0], [1078.0, 92.5], [1030.0, 94.0], [1073.0, 97.0], [1025.0, 95.0], [1028.0, 97.0], [1076.0, 94.0], [1029.0, 97.0], [1045.0, 98.0], [1082.0, 94.0], [1147.0, 93.0], [1189.0, 93.0], [1165.0, 94.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1189.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 38.0, "minX": 90.0, "maxY": 804.0, "series": [{"data": [[90.0, 307.0], [110.0, 401.5], [111.0, 782.0], [127.0, 203.0], [126.0, 210.0], [130.0, 201.0], [135.0, 504.0], [132.0, 279.5], [143.0, 376.0], [137.0, 398.5], [139.0, 389.0], [146.0, 401.5], [145.0, 286.0], [144.0, 504.5], [150.0, 804.0], [149.0, 505.0], [151.0, 200.0], [147.0, 505.0], [154.0, 294.5], [152.0, 402.0], [155.0, 344.0], [159.0, 494.0], [156.0, 396.0], [158.0, 488.0], [166.0, 403.0], [162.0, 497.0], [161.0, 397.0], [163.0, 383.5], [164.0, 605.5], [165.0, 280.0], [167.0, 404.0], [160.0, 207.0], [173.0, 494.5], [168.0, 399.5], [174.0, 400.0], [175.0, 296.0], [171.0, 484.0], [172.0, 300.0], [170.0, 446.5], [169.0, 408.0], [178.0, 295.0], [180.0, 419.5], [182.0, 400.0], [183.0, 400.5], [181.0, 188.0], [179.0, 413.0], [177.0, 294.5], [186.0, 396.0], [185.0, 407.0], [184.0, 314.0], [188.0, 400.0], [191.0, 408.0], [190.0, 296.0], [189.0, 391.0], [187.0, 406.0], [197.0, 392.0], [193.0, 304.0], [198.0, 398.5], [199.0, 394.0], [196.0, 403.0], [192.0, 308.5], [194.0, 309.0], [195.0, 300.0], [205.0, 403.0], [203.0, 302.0], [202.0, 391.0], [207.0, 310.0], [204.0, 201.0], [206.0, 409.0], [200.0, 499.0], [208.0, 345.5], [215.0, 404.0], [213.0, 398.0], [214.0, 313.0], [211.0, 386.0], [210.0, 301.0], [212.0, 401.0], [209.0, 218.0], [217.0, 394.0], [219.0, 393.5], [223.0, 414.0], [220.0, 400.0], [221.0, 304.0], [222.0, 389.0], [218.0, 309.0], [216.0, 394.5], [226.0, 391.5], [227.0, 306.0], [225.0, 416.5], [224.0, 307.0], [229.0, 312.0], [228.0, 299.5], [230.0, 399.0], [231.0, 303.0], [237.0, 301.0], [233.0, 296.0], [238.0, 310.0], [239.0, 309.5], [232.0, 315.0], [246.0, 317.5], [245.0, 399.5], [241.0, 299.0], [242.0, 405.0], [244.0, 211.0], [243.0, 396.0], [247.0, 392.5], [248.0, 60.0], [251.0, 217.0], [254.0, 303.0], [252.0, 385.0], [249.0, 379.0], [255.0, 313.0], [250.0, 208.0], [256.0, 326.5], [270.0, 293.5], [261.0, 387.0], [260.0, 303.0], [262.0, 308.0], [263.0, 407.0], [265.0, 284.0], [258.0, 295.0], [264.0, 301.0], [271.0, 300.0], [274.0, 296.5], [279.0, 201.0], [275.0, 323.0], [287.0, 308.0], [282.0, 315.0], [280.0, 199.0], [285.0, 297.0], [284.0, 299.0], [283.0, 183.0], [278.0, 250.5], [277.0, 232.0], [272.0, 302.0], [288.0, 295.5], [297.0, 210.0], [296.0, 209.0], [293.0, 207.0], [291.0, 203.0], [300.0, 399.0], [292.0, 298.0], [295.0, 212.0], [310.0, 303.0], [309.0, 210.0], [316.0, 380.5], [307.0, 195.0], [313.0, 198.0], [317.0, 191.0], [322.0, 197.0], [328.0, 202.0], [321.0, 302.0], [332.0, 300.5], [326.0, 302.5], [327.0, 189.0], [331.0, 194.0], [335.0, 192.0], [347.0, 204.0], [342.0, 188.5], [336.0, 203.0], [348.0, 294.0], [340.0, 201.0], [343.0, 179.0], [350.0, 202.5], [365.0, 191.0], [357.0, 192.0], [358.0, 178.0], [360.0, 165.0], [366.0, 186.0], [382.0, 174.0], [373.0, 199.0], [383.0, 177.0], [375.0, 293.0], [378.0, 208.0], [379.0, 187.0], [377.0, 281.0], [385.0, 122.0], [393.0, 195.0], [388.0, 213.5], [392.0, 166.5], [391.0, 149.0], [401.0, 190.0], [402.0, 112.5], [406.0, 198.0], [409.0, 179.0], [408.0, 107.0], [400.0, 176.0], [404.0, 178.0], [417.0, 193.0], [424.0, 113.5], [418.0, 303.0], [423.0, 192.0], [426.0, 167.0], [430.0, 175.0], [439.0, 115.0], [447.0, 197.0], [435.0, 198.0], [434.0, 173.0], [455.0, 110.0], [448.0, 116.0], [453.0, 205.0], [461.0, 106.0], [451.0, 116.0], [473.0, 183.0], [466.0, 183.0], [471.0, 112.0], [479.0, 100.0], [475.0, 184.0], [493.0, 108.0], [484.0, 96.0], [495.0, 114.0], [487.0, 113.0], [488.0, 106.0], [490.0, 106.0], [481.0, 286.0], [483.0, 196.0], [489.0, 115.0], [502.0, 95.0], [500.0, 112.0], [507.0, 99.0], [534.0, 113.5], [524.0, 111.0], [531.0, 114.0], [537.0, 101.0], [571.0, 105.0], [544.0, 121.0], [553.0, 122.0], [557.0, 98.0], [560.0, 102.0], [549.0, 102.0], [562.0, 100.0], [573.0, 109.0], [552.0, 103.0], [551.0, 104.0], [598.0, 101.0], [586.0, 103.0], [594.0, 108.0], [601.0, 111.0], [578.0, 165.0], [591.0, 105.0], [606.0, 106.0], [610.0, 112.0], [631.0, 100.0], [616.0, 98.0], [637.0, 98.0], [634.0, 98.0], [633.0, 100.0], [635.0, 100.0], [629.0, 108.0], [621.0, 110.0], [620.0, 109.0], [664.0, 102.0], [641.0, 106.0], [642.0, 109.0], [663.0, 100.0], [653.0, 101.0], [654.0, 101.0], [643.0, 109.0], [661.0, 103.0], [668.0, 100.0], [667.0, 102.0], [701.0, 100.0], [673.0, 96.0], [696.0, 101.0], [682.0, 104.0], [700.0, 104.0], [729.0, 38.0], [733.0, 102.0], [709.0, 97.0], [724.0, 101.0], [722.0, 95.0], [727.0, 99.0], [718.0, 104.0], [717.0, 104.0], [705.0, 102.0], [720.0, 99.0], [734.0, 97.0], [708.0, 97.0], [711.0, 106.0], [748.0, 99.0], [751.0, 97.0], [744.0, 94.0], [767.0, 101.0], [740.0, 98.0], [738.0, 100.0], [754.0, 100.0], [753.0, 100.0], [747.0, 124.0], [782.0, 104.0], [770.0, 103.0], [776.0, 103.0], [779.0, 100.0], [790.0, 97.0], [797.0, 104.0], [791.0, 108.0], [772.0, 100.0], [798.0, 100.0], [807.0, 101.0], [810.0, 101.0], [820.0, 97.0], [812.0, 98.0], [817.0, 101.0], [809.0, 97.0], [816.0, 97.0], [826.0, 103.0], [814.0, 99.0], [800.0, 102.0], [821.0, 100.0], [854.0, 101.0], [832.0, 99.0], [848.0, 99.0], [853.0, 93.0], [857.0, 100.0], [837.0, 101.0], [856.0, 100.0], [847.0, 98.0], [877.0, 104.0], [885.0, 99.0], [886.0, 102.0], [874.0, 96.0], [890.0, 98.0], [872.0, 103.0], [867.0, 100.0], [880.0, 105.0], [912.0, 98.0], [927.0, 100.0], [921.0, 98.0], [901.0, 96.0], [909.0, 99.0], [916.0, 97.0], [913.0, 101.0], [917.0, 99.0], [915.0, 98.0], [919.0, 99.0], [938.0, 100.0], [957.0, 99.0], [956.0, 98.0], [932.0, 103.0], [939.0, 100.0], [941.0, 98.0], [948.0, 99.0], [942.0, 99.0], [977.0, 97.0], [983.0, 98.0], [984.0, 94.0], [966.0, 101.0], [979.0, 93.0], [988.0, 98.0], [963.0, 98.0], [1019.0, 94.0], [1002.0, 93.0], [998.0, 93.0], [1023.0, 100.0], [995.0, 99.0], [1018.0, 97.0], [1072.0, 94.0], [1078.0, 92.5], [1030.0, 94.0], [1073.0, 97.0], [1025.0, 95.0], [1028.0, 97.0], [1076.0, 94.0], [1029.0, 97.0], [1045.0, 98.0], [1082.0, 94.0], [1147.0, 93.0], [1189.0, 93.0], [1165.0, 94.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1189.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 54.85, "minX": 1.71250218E12, "maxY": 425.75, "series": [{"data": [[1.71250248E12, 419.3], [1.71250218E12, 357.8333333333333], [1.71250266E12, 417.35], [1.71250236E12, 408.85], [1.71250254E12, 396.76666666666665], [1.71250224E12, 416.21666666666664], [1.71250272E12, 402.15], [1.71250242E12, 425.75], [1.7125026E12, 407.8666666666667], [1.7125023E12, 414.0], [1.71250278E12, 54.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250278E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 56.516666666666666, "minX": 1.71250218E12, "maxY": 425.75, "series": [{"data": [[1.71250248E12, 419.3], [1.71250218E12, 356.1666666666667], [1.71250266E12, 417.35], [1.71250236E12, 408.85], [1.71250254E12, 396.76666666666665], [1.71250224E12, 416.21666666666664], [1.71250272E12, 402.15], [1.71250242E12, 425.75], [1.7125026E12, 407.8666666666667], [1.7125023E12, 414.0], [1.71250278E12, 56.516666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250278E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 56.516666666666666, "minX": 1.71250218E12, "maxY": 425.75, "series": [{"data": [[1.71250248E12, 419.3], [1.71250218E12, 356.1666666666667], [1.71250266E12, 417.35], [1.71250236E12, 408.85], [1.71250254E12, 396.76666666666665], [1.71250224E12, 416.21666666666664], [1.71250272E12, 402.15], [1.71250242E12, 425.75], [1.7125026E12, 407.8666666666667], [1.7125023E12, 414.0], [1.71250278E12, 56.516666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250278E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 56.516666666666666, "minX": 1.71250218E12, "maxY": 425.75, "series": [{"data": [[1.71250248E12, 419.3], [1.71250218E12, 356.1666666666667], [1.71250266E12, 417.35], [1.71250236E12, 408.85], [1.71250254E12, 396.76666666666665], [1.71250224E12, 416.21666666666664], [1.71250272E12, 402.15], [1.71250242E12, 425.75], [1.7125026E12, 407.8666666666667], [1.7125023E12, 414.0], [1.71250278E12, 56.516666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250278E12, "title": "Total Transactions Per Second"}},
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

