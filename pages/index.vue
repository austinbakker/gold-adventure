<template>
 <div>
   <div v-show="true">
     <NetlifyIdenity />
   </div>
   <fullScreenStockInput  v-show="showStockInput" @input="getData" />

    <div>

      <canvas ref="revenueChart"></canvas>
    </div>


 </div>
</template>


<script lang='ts' >
import fullScreenStockInput from "../components/fullScreenStockInput.vue";
import NetlifyIdenity from "../components/netlify-idenity.vue";

// var googleFinance = require('google-finance');
import { defineComponent, onMounted, watch, ref } from "@nuxtjs/composition-api";
import axios, { AxiosProxyConfig, AxiosRequestConfig } from "axios";
// import { debounce } from "debounce";
var Chart = require('chart.js');
// import { throttle } from 'throttle-debounce';
export default defineComponent({
 props: [],
 components: {fullScreenStockInput, NetlifyIdenity},
 setup() {
   const showStockInput = ref(true)

   const getData = (ticker: string) => {
     console.log('ticker passes',ticker)
     generateChart(ticker)
   }

   const historicalData = async (ticker: string) => {
    var options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-insider-roster',
      params: {symbol: ticker},
      headers: {
        'x-rapidapi-key': 'c43f5a015bmshc0f2aae84e4a2b8p1343fejsnb251464f7da9',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
      }
    };

    return await axios.request(options).then(function (response) {
      console.log(response.data);
      showStockInput.value=false
      return response.data
    }).catch(function (error) {
      console.error(error);
    });
   }

  const revenueChart = ref(null)
  const generateChart = async(ticker: string) => {
    const stockData = await historicalData(ticker)
    console.log('stockdata', stockData)
    const formatedData = [
      {label:'Institutions',data:stockData['majorHoldersBreakdown']['institutionsPercentHeld'].raw*100, color: 'rgba(255, 99, 132, 0.2)', border:'rgba(255, 99, 132, 1)'},
      {label:'Insiders',data:stockData['majorHoldersBreakdown']['insidersPercentHeld'].raw*100, color: 'rgba(54, 162, 235, 0.2)',border:'rgba(54, 162, 235, 1)'}
    ]

    const totalPercentageList = formatedData.map((item) => item.data)
    const totalPercentage = totalPercentageList.reduce((total,num) => total+num)
    const remainingPercentage = 100-totalPercentage
    formatedData.push({label:'outsiders', data:remainingPercentage, color: 'rgba(255, 206, 86, 0.2)',border: 'rgba(255, 206, 86, 1)',})

    const cfg = {
      type: 'pie',
      data: {
        labels: formatedData.map((item) => item.label),
        datasets: [{
            label: 'StakeHolders Overview',
            data: formatedData.map((item) => item.data),
            backgroundColor: formatedData.map(item => item.color),
            borderColor: formatedData.map(item => item.border),
            borderWidth: 2
        }],
    },
    }
    new Chart(revenueChart.value, cfg);
  }



   return {
     historicalData,
     revenueChart,
     showStockInput,
     getData
   }
 }
})


</script>


<style lang='scss' >

 
//POWERED BY AUSTIN
</style>
 
 
