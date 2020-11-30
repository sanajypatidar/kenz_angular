import { OnlyNumberDirective } from './only-number.directive';

describe('OnlyNumberDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    
    let serviceMock = {
      setTitle: (title: string) => null
    };
    const directive = new OnlyNumberDirective();

    expect(directive).toBeTruthy();
  });
});
