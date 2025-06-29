import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Career } from '../career/career';
import { Contact } from '../contact/contact';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Projects, Career, Contact, Skills],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
