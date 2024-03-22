import { Injectable } from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {

  constructor() { }

  initializeZoomSDK(): void {
    ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av');
    ZoomMtg.preLoadWasm();
    // ZoomMtg.prepareJssdk();
  }
}