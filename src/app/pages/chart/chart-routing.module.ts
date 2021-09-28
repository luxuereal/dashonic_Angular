import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineComponent } from './line/line.component';
import { AreaComponent } from './area/area.component';
import { ColumnComponent } from './column/column.component';
import { BarComponent } from './bar/bar.component';
import { MixedComponent } from './mixed/mixed.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CandlestickComponent } from './candlestick/candlestick.component';
import { BoxplotComponent } from './boxplot/boxplot.component';
import { BubbleComponent } from './bubble/bubble.component';
import { ScatterComponent } from './scatter/scatter.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { TreemapComponent } from './treemap/treemap.component';
import { PieComponent } from './pie/pie.component';
import { RadialbarComponent } from './radialbar/radialbar.component';
import { RadarComponent } from './radar/radar.component';
import { PolarareaComponent } from './polararea/polararea.component';

const routes: Routes = [
    {
        path: 'line',
        component: LineComponent
    },
    {
        path: 'area',
        component: AreaComponent
    },
    {
        path: 'column',
        component: ColumnComponent
    },
    {
        path: 'bar',
        component: BarComponent
    },
    {
        path: 'mixed',
        component: MixedComponent
    },
    {
        path: 'timeline',
        component: TimelineComponent
    },
    {
        path: 'candlestick',
        component: CandlestickComponent
    },
    {
        path: 'boxplot',
        component: BoxplotComponent
    },
    {
        path: 'bubble',
        component: BubbleComponent
    },
    {
        path: 'scatter',
        component: ScatterComponent
    },
    {
        path: 'heatmap',
        component: HeatmapComponent
    },
    {
        path: 'treemap',
        component: TreemapComponent
    },
    {
        path: 'pie',
        component: PieComponent
    },
    {
        path: 'radialbar',
        component: RadialbarComponent
    },
    {
        path: 'radar',
        component: RadarComponent
    },
    {
        path: 'polararea',
        component: PolarareaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ChartRoutingModule { }
