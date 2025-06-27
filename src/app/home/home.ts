import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
