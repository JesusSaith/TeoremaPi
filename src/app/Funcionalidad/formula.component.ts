export class FormulaComponent{

    hypotenuse: number = 0;

    teo(a: any, b:any){
        this.hypotenuse = Math.round(Math.sqrt((a*a)+ (b*b)));
        return this.hypotenuse;
    }

}