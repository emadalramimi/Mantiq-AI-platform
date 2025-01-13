import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Box, useTheme } from '@mui/material';

const ForecastChart = ({ data, height = 400 }) => {
  const theme = useTheme();

  return (
    <Box sx={{ height }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Time',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Revenue ($)',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        enableGridX={false}
        colors={{ scheme: 'category10' }}
        lineWidth={3}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableSlices="x"
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: theme.palette.text.secondary
              }
            },
            legend: {
              text: {
                fill: theme.palette.text.primary,
                fontSize: 12
              }
            }
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1
            }
          },
          crosshair: {
            line: {
              stroke: theme.palette.primary.main,
              strokeWidth: 1,
              strokeOpacity: 0.35
            }
          },
          annotations: {
            text: {
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: theme.palette.background.paper
            },
            link: {
              stroke: theme.palette.text.primary,
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: theme.palette.background.paper
            },
            outline: {
              stroke: theme.palette.text.primary,
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: theme.palette.background.paper
            }
          }
        }}
        motionConfig="gentle"
        enableArea={true}
        areaOpacity={0.1}
      />
    </Box>
  );
};

export default ForecastChart;
