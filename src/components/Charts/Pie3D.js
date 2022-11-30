import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import charts from 'fusioncharts/fusioncharts.charts';
import { FiDatabase } from 'react-icons/fi';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'pie3d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Lanaguages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '45%',
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
