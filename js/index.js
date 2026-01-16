(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      },
      textStyle: {
        fontSize: 14, // 提示框字体大小
        fontWeight: 'bold', // 字体加粗
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgb(255, 255, 255)",
            fontSize: 16, // X 轴刻度字体大小
            fontWeight: 'bold', // 字体加粗
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgb(255, 255, 255)",
            fontSize: 16, // Y 轴刻度字体大小
            fontWeight: 'bold', // 字体加粗
            width:2
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgb(255, 255, 255)"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.65)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [
    { year: "2023",data: [200, 300, 300, 900, 1500, 1200, 600] },
    { year: "2024", data: [300, 400, 350, 800, 1800, 1400, 700] }
  ];

  $(".bar h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();




(function() {
  // 获取DOM并初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // 定义ECharts配置项
  var option = {
      tooltip: { // 鼠标指上时的标线
          trigger: 'axis',
          axisPointer: {
              lineStyle: {
                  color: '#fff',
                  width:2,
              }
          }
      },
      legend: {
          icon: 'rect',
          itemWidth: 16,
          itemHeight: 6,
          itemGap: 13,
          data: ['小型车', '中型车', '大型车'],
          right: '10px',
          top: '0px',
          textStyle: {
              fontSize: 20,
              color: '#fff',
              fontWeight: 'bold', // 字体加粗
          }
      },
      grid: {
          x: 35,
          y: 25,
          x2: 8,
          y2: 30,
      },
      xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
              lineStyle: {
                  color: '#fff',
                  width: 2
              }
          },
          axisLabel: {
              textStyle: {
                  color: '#fff',
                  fontWeight: 'bold', // 字体加粗
                  fontSize:20,
              },
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }],
      yAxis: [{
          type: 'value',
          axisTick: { show: false },
          axisLine: {
              lineStyle: {
                  color: '#fff',
                  width:2
              }
          },
          axisLabel: {
              margin: 10,
              textStyle: {
                  fontSize: 20,
                  color: '#fff', // 这里修正重复定义的 textStyle
                  fontWeight: 'bold', // 字体加粗
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#57617B'
              }
          }
      }],
      series: [
          {
              name: '小型车',
              type: 'line',
              smooth: true,
              lineStyle: { normal: { width: 3 } },
              areaStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          { offset: 0, color: 'rgba(137, 189, 27, 0.3)' },
                          { offset: 0.8, color: 'rgba(137, 189, 27, 0)' }
                      ], false),
                      shadowColor: 'rgba(0, 0, 0, 0.1)',
                      shadowBlur: 10
                  }
              },
              itemStyle: { normal: { color: 'rgb(137,189,27)' ,
                borderColor: '#fff',
                borderWidth: 2,
                symbolSize: 10, 
              } },
              data: [20, 35, 34, 45, 52, 41, 49, 64, 24, 52.4, 24, 33]
          },
          {
              name: '中型车',
              type: 'line',
              smooth: true,
              lineStyle: { normal: { width: 3 } },
              areaStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          { offset: 0, color: 'rgba(0, 136, 212, 0.3)' },
                          { offset: 0.8, color: 'rgba(0, 136, 212, 0)' }
                      ], false),
                      shadowColor: 'rgba(0, 0, 0, 0.1)',
                      shadowBlur: 10
                  }
              },
              itemStyle: { normal: { color: 'rgb(0,136,212)',
                borderColor: '#fff',
                borderWidth: 2,
                symbolSize: 10, 
               } },
              data: [97.3, 99.2, 99.3, 100.0, 99.6, 90.6, 80.0, 91.5, 69.8, 67.5, 90.4, 84.9]
          },
          {
              name: '大型车',
              type: 'line',
              smooth: true,
              lineStyle: { normal: { width: 3 } },
              areaStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          { offset: 0, color: 'rgba(219, 50, 51, 0.3)' },
                          { offset: 0.8, color: 'rgba(219, 50, 51, 0)' }
                      ], false),
                      shadowColor: 'rgba(0, 0, 0, 0.1)',
                      shadowBlur: 10
                  }
              },
              itemStyle: { normal: { color: 'rgb(219,50,51)',
                borderColor: '#fff',
                borderWidth: 2,
                symbolSize: 10, 
              } },
              data: [84.2, 81.0, 67.5, 62.1, 43.7, 68.5, 51.9, 71.8, 76.7, 67.6, 62.9, 0]
          }
      ]
  };

  // 设置ECharts配置项
  myChart.setOption(option);
})();










//雷达图-异常事件
(function () {
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  function createRadarOption(data) {
      var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
      var max = Math.max(...data.map(d => d.value)); // 计算最大值，保证比例一致

      var renderData = [{
          value: data.map(d => d.value),
          name: "告警类型TOP5",
          symbol: 'none',
          lineStyle: { normal: { color: '#ecc03e', width: 2 } },
          areaStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      { offset: 0, color: 'rgba(203, 158, 24, 0.8)' },
                      { offset: 1, color: 'rgba(190, 96, 20, 0.8)' },
                  ])
              }
          },
          
      }];

      data.forEach(function (d, i) {
          var value = ['', '', '', '', ''];
          value[i] = max;
          renderData.push({
              value: value,
              symbol: 'circle',
              symbolSize: 15,
              lineStyle: { normal: { color: 'transparent' } },
              itemStyle: { normal: { color: color[i] } }
          });
      });

      var indicator = data.map(d => ({
        name: d.name,
        max: max,
        color: '#fff',
        nameTextStyle: {
          fontSize: 20, // 设置 name 的字体大小
          color: '#fff', // 设置 name 的字体颜色
          fontWeight: 'bold' // 设置 name 的字体粗细
      }
          
      }));

      return {
        tooltip: { show: true, trigger: "item" },
        radar: {
            center: ["50%", "50%"],
            radius: "88%",
            startAngle: 40,
            splitNumber: 4,
            shape: "circle",
            splitArea: { areaStyle: { color: 'transparent' } },
            axisLabel: { show: false, fontSize: 30, color: "#000" },
            axisLine: { show: true, lineStyle: { color: "rgba(255, 255, 255, 0.55)", width: 2.5 } },
            splitLine: { show: true, lineStyle: { color: "rgba(255, 255, 255, 0.75)", width: 2.5 } },
            indicator: indicator,
            fontSize:20,
        },
        series: [{
            type: "radar",
            data: renderData
        }],
        
    };
  }

  


  var data1 = [
      { "name": "超速", "value": 30 },
      { "name": "闯红灯", "value": 30 },
      { "name": "闯禁行", "value": 42 },
      { "name": "违停", "value": 50 },
      { "name": "逆行", "value": 34 }
  ];

  var data2 = [
      { "name": "超速", "value": 15 },
      { "name": "闯红灯", "value": 14 },
      { "name": "闯禁行", "value": 23 },
      { "name": "违停", "value": 2 },
      { "name": "逆行", "value": 50 }
  ];

  var options = [createRadarOption(data1), createRadarOption(data2)];
  var index = 0;

  myChart.setOption(options[index]);
  /*

  function slideTransition() {
      var chartDiv = document.querySelector(".bar1 .chart");

      // 离开的往右边移出
      chartDiv.style.transition = "transform 1s ease-in-out";
      chartDiv.style.transform = "translateX(100%)";

      setTimeout(() => {
          myChart.clear(); // 清除当前图表
          index = (index + 1) % options.length;
          myChart.setOption(options[index]);

          // 先瞬间移动到左侧（准备入场）
          chartDiv.style.transition = "none";
          chartDiv.style.transform = "translateX(-0%)";

          // 触发下一帧动画，让图表从左边进入
          setTimeout(() => {
              chartDiv.style.transition = "transform 1s ease-in-out";
              chartDiv.style.transform = "translateX(0)";
          }, 50);
      }, 1000);
  }

  setInterval(slideTransition, 3000);

  window.addEventListener("resize", function () {
      myChart.resize();
  });*/
})();




//节假日与非节假日车流量对比图代码

(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgb(255, 255, 255)",
        fontSize: 20,
        //fontWeight: 'bold' // 设置 name 的字体粗细
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "5",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgb(255, 255, 255)",
            fontSize:20,
            //fontWeight: 'bold' // 设置 name 的字体粗细
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgb(255, 255, 255)"
          }
        },
        data: [
          "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", 
          "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", 
          "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", 
          "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
        ]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgb(255, 255, 255)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgb(255, 255, 255)",
            fontSize: 20,
            //fontWeight: 'bold' // 设置 name 的字体粗细
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "节假日车流量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 3
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 20
          }
        },
        data: [
          200, 150, 100, 80, 120, 200,  // 凌晨到清晨（00:00 - 05:00）
          500, 1200, 1500, 1400, 1300, 1200,  // 早高峰（06:00 - 11:00）
          1100, 1000, 950, 900, 1000, 1300,  // 日间（12:00 - 17:00）
          1500, 1400, 1200, 900, 600, 400   // 晚高峰到夜间（18:00 - 23:00）
        ]
      },
      {
        name: "非节假日车流量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 3
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          100, 80, 60, 50, 70, 100,  // 凌晨到清晨（00:00 - 05:00）
          300, 800, 1000, 900, 850, 800,  // 早高峰（06:00 - 11:00）
          750, 700, 650, 600, 700, 900,  // 日间（12:00 - 17:00）
          1000, 900, 800, 600, 400, 300   // 晚高峰到夜间（18:00 - 23:00）
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();



// 下载功能实现
(function() {
  function downloadChart(chartType) {
    const now = new Date();
    const timestamp = `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2,'0')}${now.getDate().toString().padStart(2,'0')}_${now.getHours().toString().padStart(2,'0')}${now.getMinutes().toString().padStart(2,'0')}`;
    
    let fileName, content;
    switch(chartType) {
      case 'bar':
        fileName = `柱状图-异常事件_${timestamp}.xlsx`;
        content = "柱状图数据内容";
        break;
      case 'line':
        fileName = `折线图-车型变化_${timestamp}.xlsx`;
        content = "折线图数据内容";
        break;
      case 'radar':
        fileName = `雷达图-异常事件_${timestamp}.xlsx`;
        content = "雷达图数据内容";
        break;
      case 'holiday':
        fileName = `节假日与非节假日车流量对比_${timestamp}.xlsx`;
        content = "节假日对比数据内容";
        break;
      default:
        fileName = `报表_${timestamp}.xlsx`;
        content = "报表数据内容";
    }
    
    const blob = new Blob([content], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    const chartName = {
      'bar': '柱状图-异常事件',
      'line': '折线图-车型变化',
      'radar': '雷达图-异常事件',
      'holiday': '节假日与非节假日车流量对比'
    }[chartType];
    
    console.log(`正在下载 ${chartName} 报表...`);
  }

  // 为所有下载按钮添加点击事件
  document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const chartType = this.getAttribute('data-chart');
      downloadChart(chartType);
    });
  });
})();
