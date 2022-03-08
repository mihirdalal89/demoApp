import { Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
// import SwiperCore from 'swiper';
import SwiperCore, {SwiperOptions, Pagination, Autoplay, Navigation, EffectFade} from 'swiper';

SwiperCore.use([Pagination, Autoplay, Navigation, EffectFade]);

@Component({
  selector: 'app-background-carousel',
  templateUrl: './background-carousel.component.html',
  styleUrls: ['./background-carousel.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class BackgroundCarouselComponent {
  public swiperConfig: SwiperOptions = {
    pagination:{clickable:true},
    slidesPerView:1,
    loop:true,
    autoplay:{
      delay:2500,
      disableOnInteraction:false,
    }    
  }

  constructor(){}

  ngOnInit(){
  }
}
