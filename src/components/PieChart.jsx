import React from 'react'
import { ResponsivePie } from "@nivo/pie"

const PieChart = ({data}) => {
  return (
    <ResponsivePie
        data={data}
        theme={{
            tooltip: {
                container: {
                    fontSize: 12,
                    color: "#333333"
                }
            },
            legends: {
                text: {
                    fontSize: 12
                }
            },
        }}
        margin={{ top: 40, right: 20, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: -20,
                translateY: 12,
                itemsSpacing: 12,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#898989',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#222222'
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default PieChart