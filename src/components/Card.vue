<template>
  <Card>
      <chartist
        type="Line"
        :event-handlers="eventHandlers"
        :data="chartData"
        :options="chartOptions"
        />
  </Card>
</template>

<script>
    import Vue from "vue"
    import styled from "vue-styled-components"
    import { rgba } from "polished"

    const theme = {
        colorCard: "#191919",
        colors: ["#5520a4", "#565cf9"]
    }
    const Card = styled.div`
        paddiing: 2rem;
        border-radius:3rem;
        background: ${theme.colorCard};
        
        & .ct-series .ct-line {
            stroke: url(#shadowLineChartGradient)
        }

        & .ct-point {
            display: none;
        }

        & .ct-line-marker {
            fill: ${theme.colorCard};
            stroke: ${theme.colors[1]};
            stroke-widht: 4px;
        }`

    export default{
        components: { Card },
        computed: {
            eventHandlers: () => {
                return[
                    {
                        event: "draw",
                        fn(ctx){
                            if(ctx.type === "point"){
                                if(ctx.index === 5){
                                    var circle = new Vue.chartist.Svg(
                                        "circle",
                                        {
                                            cx: ctx.x,
                                            cy: ctx.y,
                                            r: 7
                                        },
                                        "ct-line-marker"
                                    );
                                    ctx.element.replace(circle)

                                    .elem("stop", {
                            offset: 0,
                            "stop-color": theme.colorCard
                        })
                        .parent()
                        .elem("stop", {
                            offset: 0.25,
                            "stop-color": theme.colors[0]
                        })
                        .parent()
                        .elem("stop", {
                            offset: 0.75,
                            "stop-color": theme.colors[1]
                        })
                        .parent()
                        .elem("stop", {
                            offset: 1,
                            "stop-color": theme.colors[1]
                        })
                        .parent()
                                }
                            }
                        }
                    }
                ]
            }
        },
        data(){
            return {
                chartData: {
                    series: [{
                        data: [12, 30, 15, 60 ]
                    }]
                },
                chartOptions: {
                    height: "120px",
                    widht: "300px",
                    axisX:{
                        showGrid: false,
                        showLabel: false
                    },
                    axisY: {
                        offset: 0,
                        showLabel: false,
                        showGrid: false
                    }
                }
            }
        }
    }
</script>

<style>

</style>