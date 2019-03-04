import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { IndisciplinasService } from 'src/app/shared/services/indisciplinas.service';
import { SancionadosService } from 'src/app/shared/services/sancionados.service';
import { DemandantesService } from 'src/app/shared/services/demandantes.service';
import { CategoriasService } from 'src/app/shared/services/categorias.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { WOW } from 'wowjs/dist/wow.min';
import { ChartsService } from 'src/app/shared/services/charts.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  indisciplinas: any;
  sancionados: any;
  demandantes: any;
  categorias: any;
  totalI: number;
  totalS: number;
  totalD: number;

  //Gráficos
  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  stepSize: 2,
                  max: 16,                 
              },
          }],
          xAxes: [{
              ticks: {
                  fontSize: 10
              }     
            }]
      },
      
    
  };
  public barChartLabels: string[] = [];
  public barChartType: string;
  public barChartLegend: boolean;
    // CHART COLOR.
  public barChartColors = [
        { // 2nd Year.
            backgroundColor: 'rgba(30, 169, 224, 0.8)'
        }
    ]

  public barChartData: Array<any> = [
      { 
        data: [], 
        label: 'Cantidades por categoría' 
    }];

  constructor(
    private servicioIndisciplinas: IndisciplinasService,
    private servicioSancionados: SancionadosService,
    private servicioDemandantes: DemandantesService,
    private servicioCategorias: CategoriasService,
    private servicioChart: ChartsService,
    private router: Router
  ) {
    this.sliders.push(
      {
        imagePath: 'assets/images/slider1.jpg',
        label: '¿Qué es el SCD?',
        text: 'Sistema de Control Disciplinario.'
      },
      {
        imagePath: 'assets/images/slider2.jpg',
        label: '¿Qué objetivos tiene?',
        text: 'Gestionar el proceso disciplinario de nuestra facultad.'
      },
      {
        imagePath: 'assets/images/slider3.jpg',
        label: '¿A quién está dirigido?',
        text: 'Al personal con deberes en el trabajo educativo: profesores guías, profesores principales, vicedecanos.'
      }
    );

    this.alerts.push(
      {
        id: 1,
        type: 'success',
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      },
      {
        id: 2,
        type: 'warning',
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      }
    );
  }

  ngOnInit() {
    //WOW
    new WOW().init();

    //Charts
    this.barChartType = 'bar';
    this.barChartLegend = true;

    //Indisciplinas
    this.servicioIndisciplinas.getIndisciplinas().subscribe(data => {
      this.indisciplinas = data; //lleno los indisciplinas desde el servicio
      this.totalI = this.indisciplinas['data'].length;
    });

    //Sancionados
    this.servicioSancionados.getSancionados().subscribe(data => {
      this.sancionados = data; //lleno los sancionados desde el servicio
      this.totalS = this.sancionados['data'].length;
    });

    //Demandantes
    this.servicioDemandantes.getDemandantes().subscribe(data => {
      this.demandantes = data; //lleno los demandantes desde el servicio
      this.totalD = this.demandantes['data'].length;
    });

    //Categorias
    this.servicioCategorias.getCategorias().subscribe(data => {
        this.categorias = data; //lleno las categorias desde el servicio
        
        //lleno las labels del chart con ella
        for (let index = 0; index < this.categorias.length; index++) {
            console.log(this.categorias[index].nombre);
            this.barChartLabels[index]=(this.categorias[index].nombre);
        }
        console.log(this.barChartLabels);
      
    });      
    
    this.servicioChart.getDataChart().subscribe(data=>{

        this.barChartData = data as any[];
        console.log(data);
    });
      
      

      
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  
}
