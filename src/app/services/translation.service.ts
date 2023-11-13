import { Injectable } from '@angular/core';
import * as translatte from 'translatte';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  translate(text: string, to: string): Promise<any> {
    return translatte(text, { to });
  }
}
