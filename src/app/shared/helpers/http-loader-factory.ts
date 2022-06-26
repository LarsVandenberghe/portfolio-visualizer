import { HttpClient } from "@angular/common/http";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function translateLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}