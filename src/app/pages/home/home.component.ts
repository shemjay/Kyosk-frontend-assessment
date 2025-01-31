import { Component, signal } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-home',
  imports: [SearchComponent, ProfileComponent, GalleryComponent],
  template: `<div
    class="h-auto w-full bg-[var(--color-light-gray)] flex items-start justify-center flex-col p-4 pl-6"
  >
    <p class="text-2xl text-[var(--color-dark-gray)]">Hi {{ name() }}!</p>
    <div class="w-full flex items-center justify-center gap-4 mt-2">
      <app-profile />
      <app-search class="flex-grow" />
    </div>
    <app-gallery />
    <!-- <app-products /> TODO: fix this component-->
  </div> `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = signal('Tosh');
}
