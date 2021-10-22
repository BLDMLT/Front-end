// 1. Bar-chart 1
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    // 指定配置项和数据
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            axisLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    // width: 2
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                barBorderRadius: 5
            }
        }]
    };
    // 3. 把配置项给实例对象
    myChart.setOption(option);
    // window.addEventListener("resize", function() {
    //     myChart.resize();
    // });
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

// bar-chart_2
(function() {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"))
    option = {
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
        },
        xAxis: {
            show: false

        },
        yAxis: [{
                type: 'category',
                inverse: true,
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                }
            },
            {
                data: [702, 350, 610, 793, 664],
                inverse: true,

                axisLine: {
                    show: false
                },

                axisTick: {
                    show: false
                },

                axisLabel: {
                    color: "#fff"
                }
            }

        ],
        series: [{
                name: '条',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 10,
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex];
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                    },
                    position: "inside",
                    formatter: "{c}%"
                }
            },
            {
                name: '框',
                barCategoryGap: 50,
                barWidth: 15,
                yAxisIndex: 1,
                type: 'bar',
                data: [100, 100, 100, 100, 100],
                itemStyle: {
                    barBorderRadius: 15,
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();