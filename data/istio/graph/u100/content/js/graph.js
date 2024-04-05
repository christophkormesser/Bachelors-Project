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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 1300.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 6.0], [0.3, 6.0], [0.4, 7.0], [0.5, 7.0], [0.6, 7.0], [0.7, 8.0], [0.8, 8.0], [0.9, 8.0], [1.0, 9.0], [1.1, 9.0], [1.2, 10.0], [1.3, 10.0], [1.4, 10.0], [1.5, 11.0], [1.6, 11.0], [1.7, 12.0], [1.8, 12.0], [1.9, 12.0], [2.0, 13.0], [2.1, 13.0], [2.2, 14.0], [2.3, 14.0], [2.4, 14.0], [2.5, 15.0], [2.6, 15.0], [2.7, 16.0], [2.8, 16.0], [2.9, 17.0], [3.0, 17.0], [3.1, 18.0], [3.2, 19.0], [3.3, 19.0], [3.4, 20.0], [3.5, 21.0], [3.6, 21.0], [3.7, 22.0], [3.8, 23.0], [3.9, 24.0], [4.0, 25.0], [4.1, 26.0], [4.2, 26.0], [4.3, 27.0], [4.4, 28.0], [4.5, 29.0], [4.6, 30.0], [4.7, 31.0], [4.8, 31.0], [4.9, 32.0], [5.0, 33.0], [5.1, 33.0], [5.2, 34.0], [5.3, 34.0], [5.4, 35.0], [5.5, 36.0], [5.6, 36.0], [5.7, 37.0], [5.8, 37.0], [5.9, 38.0], [6.0, 39.0], [6.1, 39.0], [6.2, 40.0], [6.3, 41.0], [6.4, 42.0], [6.5, 44.0], [6.6, 46.0], [6.7, 49.0], [6.8, 53.0], [6.9, 58.0], [7.0, 62.0], [7.1, 64.0], [7.2, 66.0], [7.3, 68.0], [7.4, 70.0], [7.5, 71.0], [7.6, 72.0], [7.7, 73.0], [7.8, 75.0], [7.9, 76.0], [8.0, 77.0], [8.1, 78.0], [8.2, 79.0], [8.3, 79.0], [8.4, 80.0], [8.5, 81.0], [8.6, 81.0], [8.7, 82.0], [8.8, 82.0], [8.9, 83.0], [9.0, 83.0], [9.1, 84.0], [9.2, 84.0], [9.3, 85.0], [9.4, 85.0], [9.5, 85.0], [9.6, 86.0], [9.7, 86.0], [9.8, 86.0], [9.9, 87.0], [10.0, 87.0], [10.1, 87.0], [10.2, 87.0], [10.3, 88.0], [10.4, 88.0], [10.5, 88.0], [10.6, 88.0], [10.7, 89.0], [10.8, 89.0], [10.9, 89.0], [11.0, 89.0], [11.1, 89.0], [11.2, 90.0], [11.3, 90.0], [11.4, 90.0], [11.5, 90.0], [11.6, 90.0], [11.7, 91.0], [11.8, 91.0], [11.9, 91.0], [12.0, 91.0], [12.1, 91.0], [12.2, 91.0], [12.3, 92.0], [12.4, 92.0], [12.5, 92.0], [12.6, 92.0], [12.7, 92.0], [12.8, 92.0], [12.9, 92.0], [13.0, 93.0], [13.1, 93.0], [13.2, 93.0], [13.3, 93.0], [13.4, 93.0], [13.5, 93.0], [13.6, 93.0], [13.7, 94.0], [13.8, 94.0], [13.9, 94.0], [14.0, 94.0], [14.1, 94.0], [14.2, 94.0], [14.3, 94.0], [14.4, 94.0], [14.5, 94.0], [14.6, 95.0], [14.7, 95.0], [14.8, 95.0], [14.9, 95.0], [15.0, 95.0], [15.1, 95.0], [15.2, 95.0], [15.3, 95.0], [15.4, 95.0], [15.5, 95.0], [15.6, 96.0], [15.7, 96.0], [15.8, 96.0], [15.9, 96.0], [16.0, 96.0], [16.1, 96.0], [16.2, 96.0], [16.3, 96.0], [16.4, 96.0], [16.5, 96.0], [16.6, 96.0], [16.7, 97.0], [16.8, 97.0], [16.9, 97.0], [17.0, 97.0], [17.1, 97.0], [17.2, 97.0], [17.3, 97.0], [17.4, 97.0], [17.5, 97.0], [17.6, 97.0], [17.7, 97.0], [17.8, 98.0], [17.9, 98.0], [18.0, 98.0], [18.1, 98.0], [18.2, 98.0], [18.3, 98.0], [18.4, 98.0], [18.5, 98.0], [18.6, 98.0], [18.7, 98.0], [18.8, 98.0], [18.9, 98.0], [19.0, 98.0], [19.1, 99.0], [19.2, 99.0], [19.3, 99.0], [19.4, 99.0], [19.5, 99.0], [19.6, 99.0], [19.7, 99.0], [19.8, 99.0], [19.9, 99.0], [20.0, 99.0], [20.1, 99.0], [20.2, 99.0], [20.3, 99.0], [20.4, 99.0], [20.5, 100.0], [20.6, 100.0], [20.7, 100.0], [20.8, 100.0], [20.9, 100.0], [21.0, 100.0], [21.1, 100.0], [21.2, 100.0], [21.3, 100.0], [21.4, 100.0], [21.5, 100.0], [21.6, 100.0], [21.7, 100.0], [21.8, 100.0], [21.9, 101.0], [22.0, 101.0], [22.1, 101.0], [22.2, 101.0], [22.3, 101.0], [22.4, 101.0], [22.5, 101.0], [22.6, 101.0], [22.7, 101.0], [22.8, 101.0], [22.9, 101.0], [23.0, 101.0], [23.1, 101.0], [23.2, 101.0], [23.3, 101.0], [23.4, 102.0], [23.5, 102.0], [23.6, 102.0], [23.7, 102.0], [23.8, 102.0], [23.9, 102.0], [24.0, 102.0], [24.1, 102.0], [24.2, 102.0], [24.3, 102.0], [24.4, 102.0], [24.5, 102.0], [24.6, 102.0], [24.7, 102.0], [24.8, 102.0], [24.9, 103.0], [25.0, 103.0], [25.1, 103.0], [25.2, 103.0], [25.3, 103.0], [25.4, 103.0], [25.5, 103.0], [25.6, 103.0], [25.7, 103.0], [25.8, 103.0], [25.9, 103.0], [26.0, 103.0], [26.1, 103.0], [26.2, 103.0], [26.3, 103.0], [26.4, 104.0], [26.5, 104.0], [26.6, 104.0], [26.7, 104.0], [26.8, 104.0], [26.9, 104.0], [27.0, 104.0], [27.1, 104.0], [27.2, 104.0], [27.3, 104.0], [27.4, 104.0], [27.5, 104.0], [27.6, 104.0], [27.7, 104.0], [27.8, 104.0], [27.9, 105.0], [28.0, 105.0], [28.1, 105.0], [28.2, 105.0], [28.3, 105.0], [28.4, 105.0], [28.5, 105.0], [28.6, 105.0], [28.7, 105.0], [28.8, 105.0], [28.9, 105.0], [29.0, 105.0], [29.1, 105.0], [29.2, 105.0], [29.3, 106.0], [29.4, 106.0], [29.5, 106.0], [29.6, 106.0], [29.7, 106.0], [29.8, 106.0], [29.9, 106.0], [30.0, 106.0], [30.1, 106.0], [30.2, 106.0], [30.3, 106.0], [30.4, 106.0], [30.5, 106.0], [30.6, 106.0], [30.7, 107.0], [30.8, 107.0], [30.9, 107.0], [31.0, 107.0], [31.1, 107.0], [31.2, 107.0], [31.3, 107.0], [31.4, 107.0], [31.5, 107.0], [31.6, 107.0], [31.7, 107.0], [31.8, 107.0], [31.9, 107.0], [32.0, 108.0], [32.1, 108.0], [32.2, 108.0], [32.3, 108.0], [32.4, 108.0], [32.5, 108.0], [32.6, 108.0], [32.7, 108.0], [32.8, 108.0], [32.9, 108.0], [33.0, 108.0], [33.1, 108.0], [33.2, 108.0], [33.3, 109.0], [33.4, 109.0], [33.5, 109.0], [33.6, 109.0], [33.7, 109.0], [33.8, 109.0], [33.9, 109.0], [34.0, 109.0], [34.1, 109.0], [34.2, 109.0], [34.3, 109.0], [34.4, 109.0], [34.5, 110.0], [34.6, 110.0], [34.7, 110.0], [34.8, 110.0], [34.9, 110.0], [35.0, 110.0], [35.1, 110.0], [35.2, 110.0], [35.3, 110.0], [35.4, 110.0], [35.5, 110.0], [35.6, 110.0], [35.7, 111.0], [35.8, 111.0], [35.9, 111.0], [36.0, 111.0], [36.1, 111.0], [36.2, 111.0], [36.3, 111.0], [36.4, 111.0], [36.5, 111.0], [36.6, 111.0], [36.7, 111.0], [36.8, 112.0], [36.9, 112.0], [37.0, 112.0], [37.1, 112.0], [37.2, 112.0], [37.3, 112.0], [37.4, 112.0], [37.5, 112.0], [37.6, 112.0], [37.7, 112.0], [37.8, 113.0], [37.9, 113.0], [38.0, 113.0], [38.1, 113.0], [38.2, 113.0], [38.3, 113.0], [38.4, 113.0], [38.5, 113.0], [38.6, 113.0], [38.7, 113.0], [38.8, 114.0], [38.9, 114.0], [39.0, 114.0], [39.1, 114.0], [39.2, 114.0], [39.3, 114.0], [39.4, 114.0], [39.5, 114.0], [39.6, 115.0], [39.7, 115.0], [39.8, 115.0], [39.9, 115.0], [40.0, 115.0], [40.1, 115.0], [40.2, 115.0], [40.3, 115.0], [40.4, 115.0], [40.5, 116.0], [40.6, 116.0], [40.7, 116.0], [40.8, 116.0], [40.9, 116.0], [41.0, 116.0], [41.1, 116.0], [41.2, 117.0], [41.3, 117.0], [41.4, 117.0], [41.5, 117.0], [41.6, 117.0], [41.7, 117.0], [41.8, 117.0], [41.9, 118.0], [42.0, 118.0], [42.1, 118.0], [42.2, 118.0], [42.3, 118.0], [42.4, 118.0], [42.5, 118.0], [42.6, 119.0], [42.7, 119.0], [42.8, 119.0], [42.9, 119.0], [43.0, 119.0], [43.1, 119.0], [43.2, 120.0], [43.3, 120.0], [43.4, 120.0], [43.5, 120.0], [43.6, 120.0], [43.7, 120.0], [43.8, 121.0], [43.9, 121.0], [44.0, 121.0], [44.1, 121.0], [44.2, 121.0], [44.3, 122.0], [44.4, 122.0], [44.5, 122.0], [44.6, 122.0], [44.7, 122.0], [44.8, 123.0], [44.9, 123.0], [45.0, 123.0], [45.1, 123.0], [45.2, 123.0], [45.3, 124.0], [45.4, 124.0], [45.5, 124.0], [45.6, 124.0], [45.7, 125.0], [45.8, 125.0], [45.9, 125.0], [46.0, 126.0], [46.1, 126.0], [46.2, 126.0], [46.3, 126.0], [46.4, 127.0], [46.5, 127.0], [46.6, 127.0], [46.7, 128.0], [46.8, 128.0], [46.9, 128.0], [47.0, 129.0], [47.1, 129.0], [47.2, 130.0], [47.3, 130.0], [47.4, 131.0], [47.5, 131.0], [47.6, 132.0], [47.7, 132.0], [47.8, 133.0], [47.9, 134.0], [48.0, 135.0], [48.1, 136.0], [48.2, 138.0], [48.3, 141.0], [48.4, 147.0], [48.5, 154.0], [48.6, 157.0], [48.7, 159.0], [48.8, 160.0], [48.9, 160.0], [49.0, 161.0], [49.1, 162.0], [49.2, 162.0], [49.3, 163.0], [49.4, 163.0], [49.5, 163.0], [49.6, 164.0], [49.7, 164.0], [49.8, 165.0], [49.9, 165.0], [50.0, 165.0], [50.1, 166.0], [50.2, 166.0], [50.3, 166.0], [50.4, 167.0], [50.5, 167.0], [50.6, 167.0], [50.7, 167.0], [50.8, 168.0], [50.9, 168.0], [51.0, 168.0], [51.1, 168.0], [51.2, 169.0], [51.3, 169.0], [51.4, 169.0], [51.5, 170.0], [51.6, 170.0], [51.7, 170.0], [51.8, 170.0], [51.9, 170.0], [52.0, 171.0], [52.1, 171.0], [52.2, 171.0], [52.3, 171.0], [52.4, 172.0], [52.5, 172.0], [52.6, 172.0], [52.7, 172.0], [52.8, 173.0], [52.9, 173.0], [53.0, 173.0], [53.1, 173.0], [53.2, 173.0], [53.3, 174.0], [53.4, 174.0], [53.5, 174.0], [53.6, 174.0], [53.7, 174.0], [53.8, 175.0], [53.9, 175.0], [54.0, 175.0], [54.1, 175.0], [54.2, 176.0], [54.3, 176.0], [54.4, 176.0], [54.5, 176.0], [54.6, 176.0], [54.7, 177.0], [54.8, 177.0], [54.9, 177.0], [55.0, 177.0], [55.1, 177.0], [55.2, 178.0], [55.3, 178.0], [55.4, 178.0], [55.5, 178.0], [55.6, 178.0], [55.7, 179.0], [55.8, 179.0], [55.9, 179.0], [56.0, 179.0], [56.1, 179.0], [56.2, 180.0], [56.3, 180.0], [56.4, 180.0], [56.5, 180.0], [56.6, 181.0], [56.7, 181.0], [56.8, 181.0], [56.9, 181.0], [57.0, 182.0], [57.1, 182.0], [57.2, 182.0], [57.3, 182.0], [57.4, 182.0], [57.5, 183.0], [57.6, 183.0], [57.7, 183.0], [57.8, 183.0], [57.9, 183.0], [58.0, 184.0], [58.1, 184.0], [58.2, 184.0], [58.3, 184.0], [58.4, 184.0], [58.5, 185.0], [58.6, 185.0], [58.7, 185.0], [58.8, 185.0], [58.9, 186.0], [59.0, 186.0], [59.1, 186.0], [59.2, 186.0], [59.3, 186.0], [59.4, 187.0], [59.5, 187.0], [59.6, 187.0], [59.7, 187.0], [59.8, 187.0], [59.9, 188.0], [60.0, 188.0], [60.1, 188.0], [60.2, 188.0], [60.3, 188.0], [60.4, 189.0], [60.5, 189.0], [60.6, 189.0], [60.7, 189.0], [60.8, 189.0], [60.9, 190.0], [61.0, 190.0], [61.1, 190.0], [61.2, 190.0], [61.3, 190.0], [61.4, 190.0], [61.5, 191.0], [61.6, 191.0], [61.7, 191.0], [61.8, 191.0], [61.9, 191.0], [62.0, 192.0], [62.1, 192.0], [62.2, 192.0], [62.3, 192.0], [62.4, 192.0], [62.5, 193.0], [62.6, 193.0], [62.7, 193.0], [62.8, 193.0], [62.9, 193.0], [63.0, 193.0], [63.1, 194.0], [63.2, 194.0], [63.3, 194.0], [63.4, 194.0], [63.5, 194.0], [63.6, 194.0], [63.7, 195.0], [63.8, 195.0], [63.9, 195.0], [64.0, 195.0], [64.1, 195.0], [64.2, 195.0], [64.3, 196.0], [64.4, 196.0], [64.5, 196.0], [64.6, 196.0], [64.7, 196.0], [64.8, 196.0], [64.9, 196.0], [65.0, 197.0], [65.1, 197.0], [65.2, 197.0], [65.3, 197.0], [65.4, 197.0], [65.5, 197.0], [65.6, 197.0], [65.7, 198.0], [65.8, 198.0], [65.9, 198.0], [66.0, 198.0], [66.1, 198.0], [66.2, 198.0], [66.3, 198.0], [66.4, 199.0], [66.5, 199.0], [66.6, 199.0], [66.7, 199.0], [66.8, 199.0], [66.9, 199.0], [67.0, 199.0], [67.1, 200.0], [67.2, 200.0], [67.3, 200.0], [67.4, 200.0], [67.5, 200.0], [67.6, 200.0], [67.7, 200.0], [67.8, 201.0], [67.9, 201.0], [68.0, 201.0], [68.1, 201.0], [68.2, 201.0], [68.3, 201.0], [68.4, 201.0], [68.5, 202.0], [68.6, 202.0], [68.7, 202.0], [68.8, 202.0], [68.9, 202.0], [69.0, 202.0], [69.1, 202.0], [69.2, 203.0], [69.3, 203.0], [69.4, 203.0], [69.5, 203.0], [69.6, 203.0], [69.7, 204.0], [69.8, 204.0], [69.9, 204.0], [70.0, 204.0], [70.1, 204.0], [70.2, 204.0], [70.3, 205.0], [70.4, 205.0], [70.5, 205.0], [70.6, 205.0], [70.7, 205.0], [70.8, 206.0], [70.9, 206.0], [71.0, 206.0], [71.1, 206.0], [71.2, 206.0], [71.3, 207.0], [71.4, 207.0], [71.5, 207.0], [71.6, 207.0], [71.7, 208.0], [71.8, 208.0], [71.9, 208.0], [72.0, 208.0], [72.1, 209.0], [72.2, 209.0], [72.3, 209.0], [72.4, 210.0], [72.5, 210.0], [72.6, 210.0], [72.7, 210.0], [72.8, 211.0], [72.9, 211.0], [73.0, 211.0], [73.1, 212.0], [73.2, 212.0], [73.3, 213.0], [73.4, 213.0], [73.5, 214.0], [73.6, 214.0], [73.7, 214.0], [73.8, 215.0], [73.9, 215.0], [74.0, 216.0], [74.1, 216.0], [74.2, 217.0], [74.3, 218.0], [74.4, 218.0], [74.5, 219.0], [74.6, 220.0], [74.7, 220.0], [74.8, 221.0], [74.9, 222.0], [75.0, 223.0], [75.1, 224.0], [75.2, 225.0], [75.3, 226.0], [75.4, 227.0], [75.5, 229.0], [75.6, 231.0], [75.7, 233.0], [75.8, 239.0], [75.9, 261.0], [76.0, 265.0], [76.1, 267.0], [76.2, 269.0], [76.3, 270.0], [76.4, 271.0], [76.5, 272.0], [76.6, 272.0], [76.7, 273.0], [76.8, 274.0], [76.9, 275.0], [77.0, 276.0], [77.1, 276.0], [77.2, 277.0], [77.3, 278.0], [77.4, 279.0], [77.5, 279.0], [77.6, 280.0], [77.7, 280.0], [77.8, 281.0], [77.9, 282.0], [78.0, 282.0], [78.1, 283.0], [78.2, 283.0], [78.3, 284.0], [78.4, 284.0], [78.5, 285.0], [78.6, 285.0], [78.7, 286.0], [78.8, 286.0], [78.9, 287.0], [79.0, 287.0], [79.1, 287.0], [79.2, 288.0], [79.3, 288.0], [79.4, 289.0], [79.5, 289.0], [79.6, 289.0], [79.7, 290.0], [79.8, 290.0], [79.9, 290.0], [80.0, 291.0], [80.1, 291.0], [80.2, 291.0], [80.3, 292.0], [80.4, 292.0], [80.5, 292.0], [80.6, 292.0], [80.7, 293.0], [80.8, 293.0], [80.9, 293.0], [81.0, 293.0], [81.1, 294.0], [81.2, 294.0], [81.3, 294.0], [81.4, 294.0], [81.5, 295.0], [81.6, 295.0], [81.7, 295.0], [81.8, 295.0], [81.9, 295.0], [82.0, 296.0], [82.1, 296.0], [82.2, 296.0], [82.3, 296.0], [82.4, 296.0], [82.5, 297.0], [82.6, 297.0], [82.7, 297.0], [82.8, 297.0], [82.9, 297.0], [83.0, 297.0], [83.1, 298.0], [83.2, 298.0], [83.3, 298.0], [83.4, 298.0], [83.5, 298.0], [83.6, 298.0], [83.7, 299.0], [83.8, 299.0], [83.9, 299.0], [84.0, 299.0], [84.1, 299.0], [84.2, 299.0], [84.3, 300.0], [84.4, 300.0], [84.5, 300.0], [84.6, 300.0], [84.7, 300.0], [84.8, 300.0], [84.9, 300.0], [85.0, 301.0], [85.1, 301.0], [85.2, 301.0], [85.3, 301.0], [85.4, 301.0], [85.5, 301.0], [85.6, 302.0], [85.7, 302.0], [85.8, 302.0], [85.9, 302.0], [86.0, 302.0], [86.1, 302.0], [86.2, 303.0], [86.3, 303.0], [86.4, 303.0], [86.5, 303.0], [86.6, 303.0], [86.7, 304.0], [86.8, 304.0], [86.9, 304.0], [87.0, 304.0], [87.1, 304.0], [87.2, 305.0], [87.3, 305.0], [87.4, 305.0], [87.5, 305.0], [87.6, 306.0], [87.7, 306.0], [87.8, 306.0], [87.9, 307.0], [88.0, 307.0], [88.1, 307.0], [88.2, 307.0], [88.3, 308.0], [88.4, 308.0], [88.5, 308.0], [88.6, 309.0], [88.7, 309.0], [88.8, 310.0], [88.9, 310.0], [89.0, 311.0], [89.1, 311.0], [89.2, 312.0], [89.3, 312.0], [89.4, 313.0], [89.5, 313.0], [89.6, 314.0], [89.7, 315.0], [89.8, 315.0], [89.9, 316.0], [90.0, 317.0], [90.1, 318.0], [90.2, 319.0], [90.3, 320.0], [90.4, 322.0], [90.5, 323.0], [90.6, 325.0], [90.7, 327.0], [90.8, 330.0], [90.9, 360.0], [91.0, 367.0], [91.1, 369.0], [91.2, 371.0], [91.3, 373.0], [91.4, 374.0], [91.5, 376.0], [91.6, 377.0], [91.7, 378.0], [91.8, 380.0], [91.9, 381.0], [92.0, 382.0], [92.1, 383.0], [92.2, 385.0], [92.3, 386.0], [92.4, 386.0], [92.5, 387.0], [92.6, 388.0], [92.7, 389.0], [92.8, 390.0], [92.9, 391.0], [93.0, 391.0], [93.1, 392.0], [93.2, 393.0], [93.3, 393.0], [93.4, 394.0], [93.5, 394.0], [93.6, 395.0], [93.7, 395.0], [93.8, 396.0], [93.9, 396.0], [94.0, 397.0], [94.1, 397.0], [94.2, 398.0], [94.3, 398.0], [94.4, 398.0], [94.5, 399.0], [94.6, 399.0], [94.7, 399.0], [94.8, 400.0], [94.9, 400.0], [95.0, 401.0], [95.1, 401.0], [95.2, 401.0], [95.3, 402.0], [95.4, 402.0], [95.5, 403.0], [95.6, 403.0], [95.7, 404.0], [95.8, 404.0], [95.9, 405.0], [96.0, 405.0], [96.1, 406.0], [96.2, 407.0], [96.3, 408.0], [96.4, 409.0], [96.5, 410.0], [96.6, 411.0], [96.7, 412.0], [96.8, 414.0], [96.9, 415.0], [97.0, 417.0], [97.1, 420.0], [97.2, 422.0], [97.3, 426.0], [97.4, 465.0], [97.5, 473.0], [97.6, 478.0], [97.7, 482.0], [97.8, 485.0], [97.9, 488.0], [98.0, 491.0], [98.1, 493.0], [98.2, 495.0], [98.3, 496.0], [98.4, 498.0], [98.5, 499.0], [98.6, 501.0], [98.7, 503.0], [98.8, 505.0], [98.9, 508.0], [99.0, 511.0], [99.1, 516.0], [99.2, 530.0], [99.3, 580.0], [99.4, 590.0], [99.5, 597.0], [99.6, 603.0], [99.7, 615.0], [99.8, 697.0], [99.9, 798.0], [100.0, 1300.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 145929.0, "series": [{"data": [[0.0, 64031.0], [600.0, 840.0], [700.0, 292.0], [200.0, 53935.0], [800.0, 167.0], [900.0, 64.0], [1000.0, 48.0], [1100.0, 15.0], [300.0, 32707.0], [1200.0, 8.0], [1300.0, 1.0], [100.0, 145929.0], [400.0, 11933.0], [500.0, 3207.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4439.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 308738.0, "series": [{"data": [[0.0, 308738.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4439.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 30.16986217990533, "minX": 1.71235122E12, "maxY": 100.0, "series": [{"data": [[1.71235128E12, 94.01125990012447], [1.71235176E12, 100.0], [1.71235146E12, 100.0], [1.71235164E12, 100.0], [1.71235134E12, 100.0], [1.71235182E12, 99.57258632840025], [1.71235152E12, 100.0], [1.71235122E12, 30.16986217990533], [1.7123517E12, 100.0], [1.7123514E12, 100.0], [1.71235158E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235182E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5.041666666666666, "minX": 1.0, "maxY": 326.4821428571427, "series": [{"data": [[2.0, 5.640394088669955], [3.0, 6.013698630136986], [4.0, 11.163120567375884], [5.0, 7.783783783783792], [6.0, 7.9865168539325895], [7.0, 10.120267260579055], [8.0, 11.123318385650228], [9.0, 14.716666666666674], [10.0, 15.88118811881188], [11.0, 15.032332563510401], [12.0, 15.22388059701492], [13.0, 23.198300283286123], [14.0, 24.840579710144926], [15.0, 20.40528634361234], [16.0, 20.49462365591394], [17.0, 22.04329004329006], [18.0, 25.529017857142854], [19.0, 26.650462962962965], [20.0, 25.879049676025918], [21.0, 37.13095238095237], [22.0, 28.814814814814813], [23.0, 31.013574660633466], [24.0, 29.448979591836757], [25.0, 31.254697286012522], [26.0, 46.66767371601208], [27.0, 36.014256619144575], [28.0, 36.83183856502235], [29.0, 37.11715481171549], [30.0, 38.6569037656904], [31.0, 39.20920502092055], [32.0, 40.6531914893617], [33.0, 42.63930885529157], [34.0, 41.092555331991996], [35.0, 42.94674556213018], [36.0, 50.207058823529415], [37.0, 117.29378531073449], [38.0, 70.67173252279636], [39.0, 95.1895161290322], [40.0, 83.50169491525426], [41.0, 51.33465346534652], [42.0, 51.063917525773206], [43.0, 80.31446540880498], [44.0, 107.8765432098765], [45.0, 59.11538461538462], [46.0, 56.06109979633406], [47.0, 107.80000000000003], [48.0, 147.87628865979386], [49.0, 144.98536585365846], [50.0, 180.9378881987578], [51.0, 135.84980237154147], [52.0, 62.96728016359922], [53.0, 66.83966244725744], [54.0, 126.50697674418608], [55.0, 157.00462962962962], [56.0, 177.9022988505747], [57.0, 206.1559139784946], [58.0, 132.19310344827588], [59.0, 74.6340909090909], [60.0, 91.46153846153848], [61.0, 148.9683257918552], [62.0, 169.53645833333337], [63.0, 201.4717948717949], [64.0, 240.49382716049385], [65.0, 127.00550964187339], [66.0, 78.03206412825658], [67.0, 118.91638795986617], [68.0, 224.09202453987734], [69.0, 242.4689265536723], [70.0, 252.7962962962963], [71.0, 251.50588235294117], [72.0, 106.89002036659882], [73.0, 102.66510538641688], [74.0, 142.4124513618677], [75.0, 229.23902439024405], [76.0, 267.4606060606062], [77.0, 231.54237288135587], [78.0, 240.09313725490185], [79.0, 112.7192982456141], [80.0, 93.05736137667301], [81.0, 146.04296875000009], [82.0, 296.82183908045965], [83.0, 263.06220095693766], [84.0, 265.58469945355205], [85.0, 278.40251572327037], [86.0, 121.03717472118949], [87.0, 105.05197505197505], [88.0, 178.25296442687755], [89.0, 265.9903381642514], [90.0, 280.08196721311475], [91.0, 273.7607655502394], [92.0, 291.8041237113401], [93.0, 185.73270440251554], [94.0, 114.69477911646595], [95.0, 138.01104972375703], [96.0, 236.31034482758625], [97.0, 326.4821428571427], [98.0, 269.77325581395365], [99.0, 279.421641791045], [100.0, 192.9881291225801], [1.0, 5.041666666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[94.2547026122593, 182.06786896866637]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22136.4, "minX": 1.71235122E12, "maxY": 206514.15, "series": [{"data": [[1.71235128E12, 203152.41666666666], [1.71235176E12, 206514.15], [1.71235146E12, 196449.6], [1.71235164E12, 199837.61666666667], [1.71235134E12, 200140.21666666667], [1.71235182E12, 73366.7], [1.71235152E12, 194993.45], [1.71235122E12, 148281.18333333332], [1.7123517E12, 202368.38333333333], [1.7123514E12, 199192.55], [1.71235158E12, 199324.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71235128E12, 61306.05], [1.71235176E12, 62314.2], [1.71235146E12, 59274.15], [1.71235164E12, 60294.0], [1.71235134E12, 60385.65], [1.71235182E12, 22136.4], [1.71235152E12, 58831.5], [1.71235122E12, 44851.95], [1.7123517E12, 61060.35], [1.7123514E12, 60100.95], [1.71235158E12, 60139.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235182E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 51.63201599930457, "minX": 1.71235122E12, "maxY": 199.86169837914017, "series": [{"data": [[1.71235128E12, 177.58239765896005], [1.71235176E12, 187.8042308173739], [1.71235146E12, 197.13652663091702], [1.71235164E12, 194.38272962483873], [1.71235134E12, 194.05890141117982], [1.71235182E12, 199.86169837914017], [1.71235152E12, 198.70884985084456], [1.71235122E12, 51.63201599930457], [1.7123517E12, 191.1050043113069], [1.7123514E12, 194.6172739366017], [1.71235158E12, 194.1913362082926]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235182E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 51.62632059475691, "minX": 1.71235122E12, "maxY": 199.85914376321412, "series": [{"data": [[1.71235128E12, 177.57934412672134], [1.71235176E12, 187.8009450494425], [1.71235146E12, 197.13353291443315], [1.71235164E12, 194.3795278137134], [1.71235134E12, 194.05509090321888], [1.71235182E12, 199.85914376321412], [1.71235152E12, 198.70596619158053], [1.71235122E12, 51.62632059475691], [1.7123517E12, 191.102034298854], [1.7123514E12, 194.61325070568756], [1.71235158E12, 194.18809377127715]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235182E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.727311046982946E-4, "minX": 1.71235122E12, "maxY": 0.002043389417851402, "series": [{"data": [[1.71235128E12, 0.0013041127262317567], [1.71235176E12, 0.001063962949054947], [1.71235146E12, 0.0013817153008520628], [1.71235164E12, 0.0011642949547218653], [1.71235134E12, 0.0017760842186844033], [1.71235182E12, 0.001145172656800564], [1.71235152E12, 0.0013921113689095062], [1.71235122E12, 0.002043389417851402], [1.7123517E12, 0.0010538753872193596], [1.7123514E12, 0.001719606761623579], [1.71235158E12, 9.727311046982946E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235182E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.71235122E12, "maxY": 1300.0, "series": [{"data": [[1.71235128E12, 1101.0], [1.71235176E12, 1000.0], [1.71235146E12, 922.0], [1.71235164E12, 1116.0], [1.71235134E12, 1007.0], [1.71235182E12, 718.0], [1.71235152E12, 1300.0], [1.71235122E12, 387.0], [1.7123517E12, 1299.0], [1.7123514E12, 1178.0], [1.71235158E12, 1178.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71235128E12, 13.0], [1.71235176E12, 13.0], [1.71235146E12, 16.0], [1.71235164E12, 14.0], [1.71235134E12, 17.0], [1.71235182E12, 21.0], [1.71235152E12, 21.0], [1.71235122E12, 4.0], [1.7123517E12, 9.0], [1.7123514E12, 14.0], [1.71235158E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71235128E12, 301.0], [1.71235176E12, 322.0], [1.71235146E12, 383.0], [1.71235164E12, 393.0], [1.71235134E12, 311.0], [1.71235182E12, 391.0], [1.71235152E12, 389.0], [1.71235122E12, 110.0], [1.7123517E12, 374.0], [1.7123514E12, 326.90000000000146], [1.71235158E12, 394.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71235128E12, 506.9900000000016], [1.71235176E12, 510.0], [1.71235146E12, 511.9900000000016], [1.71235164E12, 588.0], [1.71235134E12, 508.0], [1.71235182E12, 526.0], [1.71235152E12, 583.0], [1.71235122E12, 264.9700000000048], [1.7123517E12, 586.0], [1.7123514E12, 511.0], [1.71235158E12, 579.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71235128E12, 125.0], [1.71235176E12, 174.0], [1.71235146E12, 179.0], [1.71235164E12, 188.0], [1.71235134E12, 164.0], [1.71235182E12, 173.0], [1.71235152E12, 190.0], [1.71235122E12, 32.0], [1.7123517E12, 187.0], [1.7123514E12, 172.0], [1.71235158E12, 192.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71235128E12, 384.0], [1.71235176E12, 400.0], [1.71235146E12, 407.0], [1.71235164E12, 410.0], [1.71235134E12, 398.0], [1.71235182E12, 412.35000000000036], [1.71235152E12, 409.0], [1.71235122E12, 195.0], [1.7123517E12, 406.9500000000007], [1.7123514E12, 402.0], [1.71235158E12, 409.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235182E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5.0, "minX": 99.0, "maxY": 399.0, "series": [{"data": [[99.0, 5.0], [201.0, 389.0], [208.0, 393.5], [221.0, 395.0], [237.0, 399.0], [244.0, 393.0], [247.0, 311.0], [254.0, 321.0], [249.0, 313.0], [251.0, 368.0], [248.0, 398.0], [268.0, 304.0], [266.0, 287.0], [267.0, 217.0], [265.0, 325.0], [257.0, 317.0], [264.0, 393.0], [259.0, 375.0], [262.0, 330.0], [258.0, 381.0], [271.0, 298.0], [286.0, 273.5], [282.0, 296.0], [278.0, 308.0], [279.0, 306.0], [276.0, 312.0], [275.0, 397.0], [281.0, 308.0], [272.0, 387.0], [287.0, 325.0], [280.0, 305.5], [291.0, 290.0], [295.0, 280.0], [297.0, 293.0], [294.0, 299.5], [299.0, 302.0], [298.0, 300.0], [300.0, 301.0], [303.0, 300.0], [293.0, 300.0], [292.0, 382.0], [288.0, 302.0], [306.0, 294.0], [308.0, 207.0], [312.0, 225.0], [319.0, 300.0], [309.0, 295.0], [318.0, 297.0], [307.0, 307.0], [316.0, 299.0], [317.0, 297.0], [313.0, 296.0], [314.0, 299.0], [315.0, 294.0], [310.0, 301.0], [305.0, 307.0], [304.0, 298.0], [311.0, 294.5], [323.0, 298.0], [327.0, 303.0], [333.0, 229.0], [332.0, 299.0], [324.0, 299.5], [325.0, 302.0], [326.0, 295.0], [334.0, 302.0], [335.0, 296.0], [321.0, 302.0], [320.0, 300.0], [330.0, 300.0], [329.0, 302.0], [328.0, 288.0], [343.0, 207.0], [336.0, 287.0], [337.0, 297.0], [341.0, 294.0], [340.0, 298.0], [351.0, 276.0], [344.0, 298.0], [345.0, 296.0], [347.0, 300.0], [346.0, 301.0], [342.0, 290.0], [338.0, 298.0], [350.0, 290.0], [349.0, 290.0], [339.0, 298.0], [348.0, 313.0], [354.0, 297.0], [360.0, 191.0], [355.0, 300.0], [364.0, 210.0], [365.0, 209.0], [362.0, 290.0], [363.0, 288.0], [357.0, 286.0], [356.0, 297.0], [352.0, 298.0], [353.0, 299.0], [359.0, 299.0], [380.0, 210.0], [369.0, 294.0], [374.0, 194.0], [377.0, 292.0], [370.0, 289.0], [368.0, 283.0], [375.0, 208.0], [379.0, 273.0], [378.0, 288.0], [381.0, 294.0], [376.0, 226.0], [371.0, 212.0], [399.0, 20.5], [385.0, 207.0], [392.0, 295.0], [384.0, 226.0], [391.0, 201.0], [394.0, 303.0], [398.0, 203.5], [395.0, 197.0], [386.0, 201.0], [403.0, 98.0], [410.0, 197.0], [408.0, 228.5], [405.0, 297.0], [402.0, 267.5], [413.0, 201.0], [414.0, 194.0], [406.0, 201.5], [407.0, 287.0], [404.0, 195.5], [419.0, 200.0], [422.0, 196.0], [431.0, 213.0], [425.0, 196.0], [423.0, 197.0], [420.0, 194.0], [417.0, 211.0], [427.0, 176.0], [429.0, 197.0], [433.0, 185.0], [446.0, 94.0], [432.0, 196.0], [443.0, 207.0], [441.0, 208.0], [436.0, 217.0], [442.0, 174.0], [447.0, 295.0], [460.0, 201.0], [452.0, 119.0], [457.0, 206.5], [458.0, 282.0], [456.0, 179.0], [461.0, 197.0], [453.0, 281.5], [459.0, 198.0], [449.0, 193.0], [455.0, 197.0], [448.0, 172.5], [465.0, 237.0], [467.0, 206.5], [470.0, 201.5], [474.0, 181.5], [478.0, 211.5], [475.0, 179.0], [473.0, 214.0], [464.0, 205.0], [477.0, 202.0], [490.0, 35.0], [483.0, 129.0], [495.0, 185.0], [492.0, 203.0], [494.0, 196.0], [502.0, 191.5], [507.0, 182.0], [496.0, 192.0], [505.0, 185.0], [501.0, 176.5], [506.0, 194.0], [508.0, 198.0], [499.0, 190.0], [519.0, 175.0], [525.0, 105.0], [521.0, 197.0], [522.0, 203.5], [533.0, 170.0], [535.0, 127.0], [530.0, 163.0], [539.0, 177.0], [541.0, 121.0], [537.0, 187.0], [536.0, 190.0], [538.0, 178.0], [520.0, 170.0], [529.0, 188.0], [518.0, 199.5], [515.0, 191.0], [516.0, 196.5], [517.0, 177.0], [544.0, 113.0], [573.0, 12.0], [560.0, 127.0], [574.0, 112.0], [549.0, 178.0], [554.0, 186.0], [552.0, 188.0], [556.0, 196.5], [555.0, 194.0], [570.0, 180.0], [558.0, 166.0], [559.0, 191.0], [557.0, 191.0], [572.0, 142.0], [564.0, 118.0], [567.0, 114.0], [600.0, 161.0], [603.0, 184.0], [582.0, 183.0], [585.0, 169.0], [590.0, 121.0], [604.0, 133.0], [576.0, 142.5], [595.0, 165.0], [615.0, 9.0], [635.0, 89.0], [638.0, 122.5], [634.0, 115.0], [633.0, 120.0], [632.0, 110.0], [617.0, 114.0], [619.0, 117.0], [618.0, 122.0], [620.0, 165.0], [621.0, 123.0], [624.0, 158.5], [631.0, 119.0], [639.0, 172.0], [611.0, 125.0], [609.0, 120.0], [622.0, 129.5], [646.0, 106.5], [659.0, 80.0], [655.0, 129.0], [640.0, 117.5], [641.0, 116.0], [670.0, 124.0], [668.0, 118.0], [666.0, 126.5], [662.0, 128.0], [651.0, 115.0], [649.0, 117.0], [654.0, 114.0], [663.0, 119.0], [678.0, 117.0], [675.0, 92.0], [680.0, 111.0], [687.0, 111.0], [672.0, 121.0], [690.0, 120.0], [693.0, 116.0], [691.0, 116.0], [677.0, 118.0], [701.0, 116.0], [696.0, 114.0], [699.0, 119.0], [695.0, 116.0], [711.0, 116.0], [716.0, 102.0], [720.0, 15.0], [735.0, 114.0], [729.0, 112.0], [724.0, 113.0], [722.0, 119.0], [713.0, 105.0], [712.0, 111.0], [715.0, 96.0], [714.0, 117.0], [704.0, 117.0], [708.0, 119.0], [718.0, 110.0], [719.0, 114.0], [727.0, 114.0], [725.0, 113.0], [739.0, 9.0], [747.0, 27.0], [746.0, 113.0], [745.0, 111.0], [742.0, 9.0], [761.0, 111.0], [743.0, 110.0], [762.0, 12.0], [738.0, 13.0], [749.0, 115.0], [750.0, 111.0], [767.0, 70.0], [748.0, 30.5], [765.0, 112.0], [764.0, 109.0], [756.0, 116.0], [755.0, 110.0], [753.0, 110.0], [757.0, 113.5], [759.0, 119.0], [783.0, 80.0], [799.0, 62.0], [773.0, 79.0], [768.0, 112.0], [769.0, 115.0], [772.0, 108.0], [771.0, 112.0], [791.0, 21.0], [787.0, 104.0], [784.0, 111.0], [790.0, 104.0], [776.0, 109.0], [777.0, 115.0], [780.0, 105.0], [779.0, 112.0], [778.0, 112.0], [775.0, 111.0], [794.0, 111.0], [795.0, 110.0], [796.0, 111.0], [798.0, 109.0], [797.0, 108.0], [826.0, 108.0], [823.0, 79.0], [821.0, 110.0], [822.0, 114.0], [811.0, 90.0], [810.0, 90.0], [808.0, 112.0], [809.0, 109.0], [805.0, 110.0], [804.0, 111.0], [801.0, 112.0], [802.0, 110.0], [803.0, 107.0], [824.0, 108.0], [820.0, 107.0], [816.0, 110.0], [819.0, 107.0], [818.0, 110.0], [828.0, 108.0], [827.0, 108.0], [830.0, 108.0], [829.0, 106.0], [831.0, 108.0], [837.0, 107.0], [839.0, 107.0], [863.0, 106.0], [861.0, 104.0], [848.0, 106.0], [832.0, 107.0], [854.0, 109.0], [852.0, 107.0], [838.0, 109.0], [833.0, 106.0], [850.0, 107.0], [841.0, 111.0], [842.0, 106.0], [840.0, 108.0], [843.0, 108.0], [844.0, 106.5], [869.0, 106.0], [879.0, 105.0], [887.0, 106.0], [882.0, 106.0], [864.0, 107.0], [888.0, 104.0], [865.0, 106.0], [895.0, 106.0], [878.0, 105.0], [871.0, 108.0], [919.0, 108.0], [931.0, 103.0], [957.0, 103.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 957.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5.0, "minX": 99.0, "maxY": 399.0, "series": [{"data": [[99.0, 5.0], [201.0, 389.0], [208.0, 393.5], [221.0, 395.0], [237.0, 399.0], [244.0, 393.0], [247.0, 311.0], [254.0, 321.0], [249.0, 313.0], [251.0, 368.0], [248.0, 398.0], [268.0, 304.0], [266.0, 287.0], [267.0, 217.0], [265.0, 325.0], [257.0, 317.0], [264.0, 393.0], [259.0, 375.0], [262.0, 330.0], [258.0, 381.0], [271.0, 298.0], [286.0, 273.5], [282.0, 296.0], [278.0, 308.0], [279.0, 306.0], [276.0, 312.0], [275.0, 397.0], [281.0, 308.0], [272.0, 387.0], [287.0, 325.0], [280.0, 305.5], [291.0, 290.0], [295.0, 280.0], [297.0, 293.0], [294.0, 299.5], [299.0, 302.0], [298.0, 300.0], [300.0, 301.0], [303.0, 300.0], [293.0, 300.0], [292.0, 382.0], [288.0, 302.0], [306.0, 294.0], [308.0, 207.0], [312.0, 225.0], [319.0, 300.0], [309.0, 295.0], [318.0, 297.0], [307.0, 307.0], [316.0, 299.0], [317.0, 297.0], [313.0, 296.0], [314.0, 299.0], [315.0, 294.0], [310.0, 301.0], [305.0, 307.0], [304.0, 298.0], [311.0, 294.5], [323.0, 298.0], [327.0, 303.0], [333.0, 229.0], [332.0, 299.0], [324.0, 299.5], [325.0, 302.0], [326.0, 295.0], [334.0, 302.0], [335.0, 296.0], [321.0, 302.0], [320.0, 300.0], [330.0, 300.0], [329.0, 302.0], [328.0, 288.0], [343.0, 207.0], [336.0, 287.0], [337.0, 297.0], [341.0, 294.0], [340.0, 298.0], [351.0, 276.0], [344.0, 298.0], [345.0, 296.0], [347.0, 300.0], [346.0, 301.0], [342.0, 290.0], [338.0, 298.0], [350.0, 290.0], [349.0, 290.0], [339.0, 298.0], [348.0, 313.0], [354.0, 297.0], [360.0, 191.0], [355.0, 300.0], [364.0, 210.0], [365.0, 209.0], [362.0, 290.0], [363.0, 288.0], [357.0, 286.0], [356.0, 297.0], [352.0, 298.0], [353.0, 299.0], [359.0, 299.0], [380.0, 210.0], [369.0, 294.0], [374.0, 194.0], [377.0, 292.0], [370.0, 289.0], [368.0, 283.0], [375.0, 208.0], [379.0, 273.0], [378.0, 288.0], [381.0, 294.0], [376.0, 226.0], [371.0, 212.0], [399.0, 20.5], [385.0, 207.0], [392.0, 295.0], [384.0, 226.0], [391.0, 201.0], [394.0, 303.0], [398.0, 203.5], [395.0, 197.0], [386.0, 201.0], [403.0, 98.0], [410.0, 197.0], [408.0, 228.5], [405.0, 297.0], [402.0, 267.5], [413.0, 201.0], [414.0, 194.0], [406.0, 201.5], [407.0, 287.0], [404.0, 195.5], [419.0, 200.0], [422.0, 196.0], [431.0, 213.0], [425.0, 196.0], [423.0, 197.0], [420.0, 194.0], [417.0, 211.0], [427.0, 176.0], [429.0, 197.0], [433.0, 185.0], [446.0, 94.0], [432.0, 196.0], [443.0, 207.0], [441.0, 208.0], [436.0, 217.0], [442.0, 174.0], [447.0, 295.0], [460.0, 201.0], [452.0, 119.0], [457.0, 206.5], [458.0, 282.0], [456.0, 179.0], [461.0, 197.0], [453.0, 281.5], [459.0, 198.0], [449.0, 193.0], [455.0, 197.0], [448.0, 172.5], [465.0, 237.0], [467.0, 206.5], [470.0, 201.5], [474.0, 181.5], [478.0, 211.5], [475.0, 179.0], [473.0, 214.0], [464.0, 205.0], [477.0, 202.0], [490.0, 35.0], [483.0, 129.0], [495.0, 185.0], [492.0, 203.0], [494.0, 196.0], [502.0, 191.5], [507.0, 182.0], [496.0, 192.0], [505.0, 185.0], [501.0, 176.5], [506.0, 194.0], [508.0, 198.0], [499.0, 190.0], [519.0, 175.0], [525.0, 105.0], [521.0, 197.0], [522.0, 203.5], [533.0, 170.0], [535.0, 127.0], [530.0, 163.0], [539.0, 177.0], [541.0, 121.0], [537.0, 187.0], [536.0, 190.0], [538.0, 178.0], [520.0, 170.0], [529.0, 188.0], [518.0, 199.5], [515.0, 191.0], [516.0, 196.5], [517.0, 177.0], [544.0, 113.0], [573.0, 12.0], [560.0, 127.0], [574.0, 112.0], [549.0, 178.0], [554.0, 186.0], [552.0, 188.0], [556.0, 196.5], [555.0, 194.0], [570.0, 180.0], [558.0, 166.0], [559.0, 191.0], [557.0, 191.0], [572.0, 142.0], [564.0, 118.0], [567.0, 114.0], [600.0, 160.5], [603.0, 184.0], [582.0, 183.0], [585.0, 169.0], [590.0, 121.0], [604.0, 133.0], [576.0, 142.5], [595.0, 165.0], [615.0, 9.0], [635.0, 89.0], [638.0, 122.5], [634.0, 115.0], [633.0, 120.0], [632.0, 110.0], [617.0, 114.0], [619.0, 117.0], [618.0, 122.0], [620.0, 165.0], [621.0, 123.0], [624.0, 158.5], [631.0, 119.0], [639.0, 172.0], [611.0, 125.0], [609.0, 120.0], [622.0, 129.5], [646.0, 106.5], [659.0, 80.0], [655.0, 129.0], [640.0, 117.5], [641.0, 116.0], [670.0, 124.0], [668.0, 118.0], [666.0, 126.5], [662.0, 128.0], [651.0, 115.0], [649.0, 117.0], [654.0, 114.0], [663.0, 119.0], [678.0, 117.0], [675.0, 92.0], [680.0, 111.0], [687.0, 111.0], [672.0, 121.0], [690.0, 120.0], [693.0, 116.0], [691.0, 116.0], [677.0, 118.0], [701.0, 116.0], [696.0, 114.0], [699.0, 119.0], [695.0, 116.0], [711.0, 116.0], [716.0, 102.0], [720.0, 15.0], [735.0, 114.0], [729.0, 112.0], [724.0, 113.0], [722.0, 119.0], [713.0, 105.0], [712.0, 111.0], [715.0, 96.0], [714.0, 117.0], [704.0, 117.0], [708.0, 119.0], [718.0, 110.0], [719.0, 114.0], [727.0, 114.0], [725.0, 113.0], [739.0, 9.0], [747.0, 27.0], [746.0, 113.0], [745.0, 111.0], [742.0, 9.0], [761.0, 111.0], [743.0, 110.0], [762.0, 12.0], [738.0, 13.0], [749.0, 115.0], [750.0, 111.0], [767.0, 70.0], [748.0, 30.5], [765.0, 112.0], [764.0, 109.0], [756.0, 116.0], [755.0, 110.0], [753.0, 110.0], [757.0, 113.5], [759.0, 119.0], [783.0, 80.0], [799.0, 62.0], [773.0, 79.0], [768.0, 112.0], [769.0, 115.0], [772.0, 108.0], [771.0, 112.0], [791.0, 21.0], [787.0, 104.0], [784.0, 111.0], [790.0, 104.0], [776.0, 109.0], [777.0, 115.0], [780.0, 105.0], [779.0, 112.0], [778.0, 112.0], [775.0, 111.0], [794.0, 111.0], [795.0, 110.0], [796.0, 111.0], [798.0, 109.0], [797.0, 108.0], [826.0, 108.0], [823.0, 79.0], [821.0, 110.0], [822.0, 114.0], [811.0, 90.0], [810.0, 90.0], [808.0, 112.0], [809.0, 109.0], [805.0, 110.0], [804.0, 111.0], [801.0, 112.0], [802.0, 110.0], [803.0, 107.0], [824.0, 108.0], [820.0, 107.0], [816.0, 110.0], [819.0, 107.0], [818.0, 110.0], [828.0, 108.0], [827.0, 108.0], [830.0, 108.0], [829.0, 106.0], [831.0, 108.0], [837.0, 107.0], [839.0, 107.0], [863.0, 106.0], [861.0, 104.0], [848.0, 106.0], [832.0, 107.0], [854.0, 109.0], [852.0, 107.0], [838.0, 109.0], [833.0, 106.0], [850.0, 107.0], [841.0, 111.0], [842.0, 106.0], [840.0, 108.0], [843.0, 108.0], [844.0, 106.0], [869.0, 106.0], [879.0, 105.0], [887.0, 106.0], [882.0, 106.0], [864.0, 107.0], [888.0, 104.0], [865.0, 106.0], [895.0, 106.0], [878.0, 105.0], [871.0, 108.0], [919.0, 108.0], [931.0, 103.0], [957.0, 103.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 957.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 187.53333333333333, "minX": 1.71235122E12, "maxY": 532.6, "series": [{"data": [[1.71235128E12, 524.6], [1.71235176E12, 532.6], [1.71235146E12, 506.6166666666667], [1.71235164E12, 515.3333333333334], [1.71235134E12, 516.1166666666667], [1.71235182E12, 187.53333333333333], [1.71235152E12, 502.8333333333333], [1.71235122E12, 384.4], [1.7123517E12, 521.8833333333333], [1.7123514E12, 513.6833333333333], [1.71235158E12, 514.0166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235182E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 189.2, "minX": 1.71235122E12, "maxY": 532.6, "series": [{"data": [[1.71235128E12, 523.9833333333333], [1.71235176E12, 532.6], [1.71235146E12, 506.6166666666667], [1.71235164E12, 515.3333333333334], [1.71235134E12, 516.1166666666667], [1.71235182E12, 189.2], [1.71235152E12, 502.8333333333333], [1.71235122E12, 383.35], [1.7123517E12, 521.8833333333333], [1.7123514E12, 513.6833333333333], [1.71235158E12, 514.0166666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235182E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 189.2, "minX": 1.71235122E12, "maxY": 532.6, "series": [{"data": [[1.71235128E12, 523.9833333333333], [1.71235176E12, 532.6], [1.71235146E12, 506.6166666666667], [1.71235164E12, 515.3333333333334], [1.71235134E12, 516.1166666666667], [1.71235182E12, 189.2], [1.71235152E12, 502.8333333333333], [1.71235122E12, 383.35], [1.7123517E12, 521.8833333333333], [1.7123514E12, 513.6833333333333], [1.71235158E12, 514.0166666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235182E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 189.2, "minX": 1.71235122E12, "maxY": 532.6, "series": [{"data": [[1.71235128E12, 523.9833333333333], [1.71235176E12, 532.6], [1.71235146E12, 506.6166666666667], [1.71235164E12, 515.3333333333334], [1.71235134E12, 516.1166666666667], [1.71235182E12, 189.2], [1.71235152E12, 502.8333333333333], [1.71235122E12, 383.35], [1.7123517E12, 521.8833333333333], [1.7123514E12, 513.6833333333333], [1.71235158E12, 514.0166666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235182E12, "title": "Total Transactions Per Second"}},
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

