export class DatosColumna {
  data: any;
  className?: string;
  defaultContent?: string;

  constructor(nombreDato: null, claseCSS?: string, defaultContent = '') {
    this.data = nombreDato;
    this.className = claseCSS;
    this.defaultContent = defaultContent;
  }
}
