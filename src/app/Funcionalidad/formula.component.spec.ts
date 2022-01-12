import { FormulaComponent } from './formula.component';

describe('FormulaComponent', () => {

    let component: FormulaComponent;

    beforeEach(() => {
        component = new FormulaComponent();
    })

    it('should return 21 if a = 15, b=15', () => {
        component.teo(15,15);
        expect(component.hypotenuse).toBe(21);
    })

    it('should return 78 if a = 50, b = 60', () => {
        component.teo(50,60);
        expect(component.hypotenuse).toBe(78);
    })

    it('should return 81 if a = 75, b = 30', () => {
        component.teo(75,30);
        expect(component.hypotenuse).toBe(81);
    })
})