import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCheckEndDate]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CheckEndDateDirective,
    multi: true
  }]
})
export class CheckEndDateDirective implements Validator {
  @Input('appCheckEndDate') MustGreaterThan: string[] = [];

  constructor() { }

  validate(formGroup: FormGroup): ValidationErrors {
    return MustGreaterThan(this.MustGreaterThan[0], this.MustGreaterThan[1])(formGroup);
  }

}

export function MustGreaterThan(startCtlName: string, endCtlName: string) {
  return (formGroup: FormGroup) => {
    const startCtl = formGroup.controls[startCtlName];
    const endCtl = formGroup.controls[endCtlName];
    if (!startCtl || !endCtl) {
      return null;
    }

    // if (endCtl.value && !endCtl.errors.MustGreaterThan) {
    //   return null;
    // }

    if (endCtl.value <= startCtl.value) {
      endCtl.setErrors({ MustGreaterThan: true });
    } else {
      endCtl.setErrors(null);
    }


  };
}
