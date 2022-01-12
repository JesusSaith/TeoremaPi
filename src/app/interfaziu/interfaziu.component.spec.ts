import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FormulaComponent } from '../Funcionalidad/formula.component';
import { By } from '@angular/platform-browser';

import { InterfaziuComponent } from './interfaziu.component';

describe('InterfaziuComponent', () => {
  let component: InterfaziuComponent;
  let fixture: ComponentFixture<InterfaziuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaziuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaziuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should call getResult method',() => {
    let result = 0;
    component.a = 20;
    component.b = 30;
    

    component.getResultado();
    result = component.resultado;

    expect(result).toBe(36);

  })

 

  

  it('should realize the operation with a and b when I click the Obtener Resultado button ', () => {
    // Arrange 
    component.a = 15;
    component.b = 20;
   
    let resultButton = fixture.debugElement.query(By.css('.result-button'));

    // Act
    resultButton.triggerEventHandler('click', null);

    // Assert
    expect(component.resultado).toBe(25);

   });

   it('Should render result in result-div', () => {
    // Arrange
    component.a = 5;
    component.b = 2;
  
 
    // Act
    component.getResultado();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.resultado'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('5');
     
  });
});