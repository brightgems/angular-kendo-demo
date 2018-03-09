import {
  Component,
  OnInit,
  AfterViewInit,
  Renderer,
  ViewChild,
  ElementRef
} from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.scss"]
})
export class HelloComponent implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer) {}
  @ViewChild("input1") input1:ElementRef;

  title = "Hello World!";

  onButtonClick() {
    this.title = "Hello from Kendo UI!";
    $("#btn2").toggleClass("btn-hello");
    

  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.renderer.setElementStyle(this.input1.nativeElement, 'backgroundColor', 'red');
    this.renderer.invokeElementMethod(this.input1.nativeElement, "focus", []);
    this.renderer.setElementAttribute(this.input1.nativeElement,"value", "hello!!")
  }
}
